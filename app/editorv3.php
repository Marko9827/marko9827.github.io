<!doctype html>
<html lang="sr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>video-player-v2 — HLS demo</title>
  <!-- HLS polyfill za Chrome/Edge/Firefox. Safari koristi nativno -->
  <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
  <style>
    body{margin:0;padding:24px;background:#0b0b0b;color:#eaeaea;font-family:system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji","Segoe UI Emoji"}
    h1{font-size:18px;margin:0 0 12px 0;color:#ddd}
    .demo{max-width:920px;margin:auto;display:grid;gap:16px}
    .card{background:#111;border:1px solid #222;border-radius:16px;padding:16px}
    .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
    input[type="text"]{flex:1;min-width:280px;background:#0f0f10;border:1px solid #2a2a2a;border-radius:10px;color:#eaeaea;padding:10px}
    button{background:#1f1f26;border:1px solid #2a2a36;color:#e9e9f1;border-radius:10px;padding:10px 12px;cursor:pointer}
    button:hover{filter:brightness(1.1)}

    /* Player wrapper samo zbog fullscreen-a */
    video-player-v2{display:block; background:#000; border-radius:16px; overflow:hidden}
  </style>
</head>
<body>
  <div class="demo">
    <div class="card">
      <h1>video-player-v2 — HLS demo</h1>
      <div class="row">
        <input id="m3u8" type="text" placeholder="Unesi m3u8 URL" value="" />
        <button id="setStream">Load m3u8</button>
        <input id="mp4" type="text" placeholder="Unesi MP4 URL (opciono)" value="" />
        <button id="setMp4">Load MP4</button>
      </div>
    </div>

    <!-- Primer upotrebe -->
    <video-player-v2 id="player" controls muted autoplay data-poster="" data-stream="">
      <!-- custom element nema fallback sadrzaj -->
    </video-player-v2>

    <p class="card">Napomena: Ako u Chrome/Edge/Firefox učitavaš m3u8, mora da postoji hls.js (iznad), CORS zaglavlja na m3u8 i segmentima, i tačan Content-Type. Na Safari/iOS radi nativno bez hls.js.</p>
  </div>

  <script type="module">
    // Helper za formatiranje vremena
    const fmt = (t)=>{ if(!isFinite(t)|| t<0) return '0:00'; const m=Math.floor(t/60); const s=Math.floor(t%60).toString().padStart(2,'0'); return `${m}:${s}` }

    // ======= video-player-v2 custom element =======
    if(!customElements.get('video-player-v2')){
      class VideoPlayerV2 extends HTMLElement{
        static get observedAttributes(){
          return ['src','data-src','data-stream','poster','data-poster','autoplay','muted','loop','controls'];
        }
        constructor(){
          super();
          this.attachShadow({mode:'open'});
          // DOM
          const wrap = document.createElement('div');
          const style = document.createElement('style');
          this.$video = document.createElement('video');
          this.$video.playsInline = true;
          this.$video.preload = 'metadata';
          this.$video.crossOrigin = 'anonymous';

          style.textContent = `
            :host{display:block;position:relative;background:#000}
            .wrap{position:relative}
            video{display:block;width:100%;height:auto;background:#000}
            .controls{position:absolute;inset:auto 0 0 0;display:flex;flex-direction:column;gap:8px;padding:10px;background:linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,0));opacity:1;transition:opacity .25s}
            .row{display:flex;align-items:center;justify-content:space-between;gap:8px}
            .left,.right{display:flex;align-items:center;gap:8px}
            button{background:transparent;color:#fff;border:0;font-size:16px;cursor:pointer}
            input[type=range]{accent-color:#7aa2ff}
            .time{font:12px/1.2 system-ui;color:#eee;opacity:.9}
            .bar{width:100%}
          `;

          wrap.className='wrap';
          wrap.appendChild(this.$video);

          // Kontrole (laka verzija)
          const ctrls = document.createElement('div');
          ctrls.className='controls';
          const row1 = document.createElement('div'); row1.className='row';
          const left = document.createElement('div'); left.className='left';
          const right = document.createElement('div'); right.className='right';

          const btnPlay = document.createElement('button'); btnPlay.textContent='▶️/⏸';
          const time = document.createElement('span'); time.className='time'; time.textContent='0:00 / 0:00';
          const vol = document.createElement('input'); vol.type='range'; vol.className='bar'; vol.min=0; vol.max=1; vol.step=0.01; vol.value='1';
          const btnMute = document.createElement('button'); btnMute.textContent='🔇/🔊';
          const btnPiP = document.createElement('button'); btnPiP.textContent='PiP';
          const btnFS = document.createElement('button'); btnFS.textContent='⛶';

          left.append(btnPlay,time);
          right.append(btnMute,vol,btnPiP,btnFS);
          row1.append(left,right);
          ctrls.append(row1);

          // progress bar
          const row2 = document.createElement('div'); row2.className='row';
          const seek = document.createElement('input'); seek.type='range'; seek.min=0; seek.max=1000; seek.value=0; seek.className='bar';
          row2.append(seek);
          ctrls.append(row2);

          this.shadowRoot.append(style,wrap,ctrls);

          // Stanje
          this._hls = null;
          this._autoplayRequested = this.hasAttribute('autoplay');

          // Kontrole
          btnPlay.addEventListener('click',()=>{
            if(this.$video.paused){ this.$video.play().catch(()=>{}); } else { this.$video.pause(); }
          });
          this.$video.addEventListener('play',()=> btnPlay.textContent='⏸');
          this.$video.addEventListener('pause',()=> btnPlay.textContent='▶️');
          btnMute.addEventListener('click',()=>{ this.$video.muted = !this.$video.muted; });
          vol.addEventListener('input',()=>{ this.$video.volume = Number(vol.value); this.$video.muted = (this.$video.volume===0); });
          if('pictureInPictureEnabled' in document){
            btnPiP.addEventListener('click',()=>{ if(!document.pictureInPictureElement) this.$video.requestPictureInPicture?.(); else document.exitPictureInPicture?.(); });
          } else { btnPiP.disabled = true; }
          btnFS.addEventListener('click',()=>{
            if(!document.fullscreenElement){ this.requestFullscreen?.(); } else { document.exitFullscreen?.(); }
          });

          // Seek
          let seeking=false;
          const updateTime = ()=>{ time.textContent = `${fmt(this.$video.currentTime)} / ${fmt(this.$video.duration)}`; if(!seeking && isFinite(this.$video.duration)){ seek.value = Math.round((this.$video.currentTime/this.$video.duration)*1000)||0; } };
          this.$video.addEventListener('timeupdate',updateTime);
          this.$video.addEventListener('loadedmetadata',updateTime);
          seek.addEventListener('input',()=>{ seeking=true; });
          seek.addEventListener('change',()=>{ if(isFinite(this.$video.duration)){ const frac = Number(seek.value)/1000; this.$video.currentTime = frac*this.$video.duration; } seeking=false; });
        }

        connectedCallback(){
          // inicijalni atributi
          this._applyBool('controls', v=> this.$video.controls = v); // dozvoli native kontrole ako želiš
          this._applyBool('muted', v=> this.$video.muted = v);
          this._applyBool('loop', v=> this.$video.loop = v);

          const poster = this.getAttribute('poster') || this.getAttribute('data-poster') || '';
          if(poster) this.$video.poster = poster;

          const s = this.getAttribute('data-stream');
          const m = this.getAttribute('src') || this.getAttribute('data-src');
          if(s) this._setStream(s); else if(m) this._setMp4(m);
        }

        disconnectedCallback(){ this._destroyHls(); this.$video.removeAttribute('src'); this.$video.load(); }

        attributeChangedCallback(name, oldV, newV){ if(oldV===newV) return; if(!this.isConnected) return;
          switch(name){
            case 'data-stream': this._setStream(newV); break;
            case 'src':
            case 'data-src': this._setMp4(this.getAttribute('src')||this.getAttribute('data-src')); break;
            case 'poster':
            case 'data-poster': this.$video.poster = this.getAttribute('poster') || this.getAttribute('data-poster') || ''; break;
            case 'autoplay': this._autoplayRequested = this.hasAttribute('autoplay'); this._maybeAutoplay(); break;
            case 'muted': this._applyBool('muted', v=> this.$video.muted=v); break;
            case 'loop': this._applyBool('loop', v=> this.$video.loop=v); break;
            case 'controls': this._applyBool('controls', v=> this.$video.controls=v); break;
          }
        }

        _applyBool(attr,fn){ fn(this.hasAttribute(attr)); }

        _clearVideo(){ this.$video.pause(); this.$video.removeAttribute('src'); this.$video.load(); }
        _destroyHls(){ if(this._hls){ try{ this._hls.destroy(); }catch{} this._hls=null; } }

        _maybeAutoplay(){ if(!this._autoplayRequested) return; const p=this.$video.play(); if(p && typeof p.then==='function'){ p.catch(()=>{}); } }

        _setMp4(url){ this._destroyHls(); this._clearVideo(); if(!url) return; this.$video.src=url; this.$video.load(); this._maybeAutoplay(); }

        _setStream(url){ this._destroyHls(); this._clearVideo(); if(!url) return; url = url.replace(/&amp;/g,'&');
          // Safari/iOS
          if(this.$video.canPlayType('application/vnd.apple.mpegurl')){ this.$video.src = url; this.$video.load(); this._maybeAutoplay(); return; }
          // hls.js
          if(window.Hls && window.Hls.isSupported()){ this._hls = new window.Hls({ lowLatencyMode:true, enableWorker:true }); this._hls.attachMedia(this.$video); this._hls.on(window.Hls.Events.MEDIA_ATTACHED, ()=> this._hls.loadSource(url)); this._hls.on(window.Hls.Events.MANIFEST_PARSED, ()=> this._maybeAutoplay()); this._hls.on(window.Hls.Events.ERROR, (_e, data)=>{ if(data?.fatal){ switch(data.type){ case window.Hls.ErrorTypes.NETWORK_ERROR: this._hls.startLoad(); break; case window.Hls.ErrorTypes.MEDIA_ERROR: this._hls.recoverMediaError(); break; default: this._destroyHls(); } } }); return; }
          console.warn('HLS nije podržan i nema hls.js.');
        }
      }
      customElements.define('video-player-v2', VideoPlayerV2);
    }

    // Demo UI
    const el = document.getElementById('player');
    document.getElementById('setStream').addEventListener('click',()=>{
      const v = (document.getElementById('m3u8').value||'').trim(); if(v) el.setAttribute('data-stream', v);
    });
    document.getElementById('setMp4').addEventListener('click',()=>{
      const v = (document.getElementById('mp4').value||'').trim(); if(v){ el.removeAttribute('data-stream'); el.setAttribute('src', v); }
    });
  </script>
</body>
</html>
