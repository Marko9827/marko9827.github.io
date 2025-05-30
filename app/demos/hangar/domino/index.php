<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Domino - Draw Mode AJAX Multiplayer</title>
  <style>
    body { font-family: sans-serif; background: #f0f0f0; margin: 0; padding: 0; }
    .overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6); display: flex;
      align-items: center; justify-content: center; z-index:1000;
    }
    .menu { background: #fff; padding:20px; border-radius:8px; width:300px; text-align:center; }
    .menu button { margin:8px; padding:10px 16px; font-size:16px; }
    .menu input { margin-top:8px; padding:6px; width:80%; font-size:14px; }
    #game-container { display:none; padding:20px; text-align:center; }
    #status { font-size:18px; margin-bottom:10px; }
    #board { display:flex; align-items:center; justify-content:center;
      background:#fff; border:2px solid #333; height:120px; margin:10px auto; padding:10px; overflow-x:auto;
    }
    .tile { display:flex; width:60px; height:30px; border:1px solid #333; margin:0 2px; }
    .half { flex:1; display:flex; align-items:center; justify-content:center; }
    .middle { width:2px; background:#333; }
    #hands { display:flex; justify-content:space-between; margin:0 auto; width:90%; }
    .hand { background:#fafafa; border:1px solid #ccc; padding:10px;
      display:flex; flex-wrap:wrap; max-width:45%; min-height:60px;
    }
    .hand .tile { margin:4px; cursor:pointer; }
    #controls { margin-top:10px; }
    #controls button { padding:8px 12px; font-size:14px; margin:0 5px; }
    #controls button:disabled { opacity:0.5; cursor:not-allowed; }
    #stock-count { font-size:16px; margin-left:10px; }
    #chat { margin-top:20px; max-width:90%; margin:0 auto; }
    #chat-log { background:#fff; border:1px solid #ccc; height:100px; overflow-y:auto; padding:8px; text-align:left; }
    #chat-input { width:80%; padding:6px; }
    #chat-send { padding:6px 10px; }
  </style>
</head>
<body>
  <div id="overlay" class="overlay">
    <div class="menu">
      <h2>Izaberi mod igre</h2>
      <button id="btn-single">Igraj protiv računara</button><br/>
      <button id="btn-create">Kreiraj sobu</button><br/>
      <button id="btn-join">Pridruži se sobi</button>
      <div id="join-section" style="display:none; margin-top:8px;">
        <input id="room-code" placeholder="Šifra sobe" />
        <button id="btn-join-room">Idi</button>
      </div>
      <div id="created-code" style="margin-top:12px; color:#333;"></div>
    </div>
  </div>

  <div id="game-container">
    <div id="status">Status</div>
    <div id="board"></div>
    <div id="hands">
      <div id="hand1" class="hand"></div>
      <div id="hand2" class="hand"></div>
    </div>
    <div id="controls">
      <button id="draw">Izvuci iz špila</button>
      <span id="stock-count"></span>
    </div>
    <div id="chat">
      <div id="chat-log"></div>
      <input id="chat-input" placeholder="Poruka..." />
      <button id="chat-send">Pošalji</button>
    </div>
  </div>

<script>
// --- Meni i AJAX GET ---
const overlay = document.getElementById('overlay');
const gameContainer = document.getElementById('game-container');
let mode, roomCode, pollInterval;

const chatElement = document.getElementById('chat');

// Dugmad
document.getElementById('btn-single').onclick = () => startSingle();
document.getElementById('btn-create').onclick = () => createRoom();
document.getElementById('btn-join').onclick = () => showJoin();
document.getElementById('btn-join-room').onclick = () => joinRoom();

function startSingle(){
  mode='single';
  overlay.style.display='none';
  chatElement.style.display = 'none'; // sakrij čet
  initGame();
}

function createRoom(){
  roomCode = Math.random().toString(36).substr(2,6).toUpperCase();
  document.getElementById('created-code').textContent = 'Šifra: '+roomCode;
  mode='host'; overlay.style.display='none';
  initGame();
  ajaxInit();
}

function showJoin(){ document.getElementById('join-section').style.display='block'; }

function joinRoom(){
  const c = document.getElementById('room-code').value.trim().toUpperCase();
  if(!c) return; roomCode=c; mode='client'; overlay.style.display='none';
  initGame();
  ajaxInit();
}

// --- AJAX osnova ---
function ajaxGet(params, cb){
  const query = Object.entries(params).map(([k,v])=>k+'='+encodeURIComponent(v)).join('&');
  fetch('server.php?'+query)
    .then(r=>r.json()).then(cb).catch(e=>console.error(e));
}

function ajaxInit(){
  ajaxGet({action:'join', code:roomCode, role:mode}, data=>{
    // pokreni polling
    pollInterval = setInterval(pollServer, 1000);
  });
}

function pollServer(){
  ajaxGet({action:'poll', code:roomCode}, data=>{
    if(data.moves) data.moves.forEach(m=>handleRemoteMove(m.tile,m.useLeft));
    if(data.chats) data.chats.forEach(c=>appendChat(c.from+': '+c.text));
    if(data.turn!=null) currentPlayer=data.turn;
    render();
  });
}

// --- Chat AJAX ---
document.getElementById('chat-send').onclick = ()=>{
  const txt = document.getElementById('chat-input').value;
  if(!txt) return; appendChat('Ja: '+txt);
  if(mode!=='single') ajaxGet({action:'chat', code:roomCode, text:txt});
  document.getElementById('chat-input').value='';
};

function appendChat(line){
  const log=document.getElementById('chat-log');
  log.innerHTML+=line+'<br>';
  log.scrollTop=log.scrollHeight;
}

// --- Igra ---
let stock=[], hands=[[],[]], boardTiles=[], leftVal=null, rightVal=null, currentPlayer=0;
const allTiles=[];
for(let i=0;i<=6;i++)for(let j=i;j<=6;j++)allTiles.push([i,j]);
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}}

function initGame(){
  const tiles=allTiles.slice(); shuffle(tiles);
  hands[0]=tiles.splice(0,7);
  hands[1]=tiles.splice(0,7);
  stock=tiles;
  const first=stock.shift();
  boardTiles=[first.slice()];
  leftVal=first[0]; rightVal=first[1]; currentPlayer=0;
  render();
}

function render(){
  document.getElementById('game-container').style.display='block';
  document.getElementById('status').textContent = mode==='single'
    ? `Igra se: ${currentPlayer===0?'Ti':'Računar'}`
    : `Igrač ${currentPlayer+1}`;
  document.getElementById('stock-count').textContent = `Špil: ${stock.length}`;
  const bd=document.getElementById('board'); bd.innerHTML='';
  boardTiles.forEach(t=>bd.appendChild(createTile(t[0],t[1])));
  hands.forEach((hand,pIdx)=>{
    const hd=document.getElementById(`hand${pIdx+1}`); hd.innerHTML='';
    hand.forEach((t,i)=>{
      const el=createTile(t[0],t[1]);
      if(((mode==='single'&&pIdx===0)||(mode!=='single'&&pIdx===currentPlayer))&&canPlay(t)){
        el.style.cursor='pointer'; el.onclick=()=> playTile(i);
      } else el.style.opacity=0.5;
      hd.appendChild(el);
    });
  });
  const drawBtn = document.getElementById('draw');
  drawBtn.disabled = !hands[currentPlayer].every(t=>!canPlay(t))||stock.length===0;
  drawBtn.onclick = ()=>{
    // izvuci dok ne moze da igra
    while(stock.length>0&&!hands[currentPlayer].some(canPlay)) hands[currentPlayer].push(stock.shift());
    if(!hands[currentPlayer].some(canPlay)){
      currentPlayer=(currentPlayer+1)%2;
      // za single-mode odmah pokreni CPU
      if(mode==='single'&&currentPlayer===1) setTimeout(cpuMove,500);
      if(mode!=='single') ajaxGet({action:'draw', code:roomCode});
    } else if(mode!=='single'){
      ajaxGet({action:'draw', code:roomCode});
    }
    render();
  };
}

function createTile(a,b){
  const el=document.createElement('div');el.className='tile';
  const h1=document.createElement('div');h1.className='half';h1.textContent=a;
  const m=document.createElement('div');m.className='middle';
  const h2=document.createElement('div');h2.className='half';h2.textContent=b;
  el.append(h1,m,h2);return el;
}

function canPlay(t){return t[0]===leftVal||t[1]===leftVal||t[0]===rightVal||t[1]===rightVal;}

function playTile(idx){
  const tile=hands[currentPlayer][idx]; if(!canPlay(tile)) return;
  const matchLeft=(tile[0]===leftVal||tile[1]===leftVal);
  const matchRight=(tile[0]===rightVal||tile[1]===rightVal);
  let useLeft = matchLeft&&!matchRight;
  if(!matchLeft&&matchRight) useLeft=false;
  if(matchLeft&&matchRight) useLeft=false;
  let disp;
  if(useLeft){ disp=tile[0]===leftVal?[tile[1],tile[0]]:[tile[0],tile[1]]; boardTiles.unshift(disp); leftVal=disp[0]; }
  else{ disp=tile[0]===rightVal?[tile[0],tile[1]]:[tile[1],tile[0]]; boardTiles.push(disp); rightVal=disp[1]; }
  hands[currentPlayer].splice(idx,1);
  if(mode!=='single') ajaxGet({action:'move', code:roomCode, tile:disp.join(','), useLeft});
  nextTurn(); render();
}

function handleRemoteMove(tileStr,useLeft){
  const [a,b]=tileStr.split(',').map(Number);
  const tile=[a,b];
  if(useLeft){ boardTiles.unshift(tile); leftVal=tile[0]; }
  else{ boardTiles.push(tile); rightVal=tile[1]; }
  const other=1-currentPlayer;
  hands[other].splice(hands[other].findIndex(t=>t[0]===a&&t[1]===b),1);
}

function nextTurn(){
  if(mode==='single'&&currentPlayer===0){
    currentPlayer=1;
    setTimeout(cpuMove,500);
  } else {
    currentPlayer=(currentPlayer+1)%2;
  }
}

function cpuMove(){
  const idx=hands[1].findIndex(canPlay);
  if(idx>=0) playTile(idx);
  else if(stock.length) hands[1].push(stock.shift());
}
</script>
</body>
</html>
