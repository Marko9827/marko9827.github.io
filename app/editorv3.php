<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <title>Solarna Pločica – Vizuelna Poruka</title>
  <style>
    body {
      background: black;
      margin: 0;
      text-align: center;
      font-family: sans-serif;
    }
    canvas {
      margin: 30px auto;
      display: block;
      background: linear-gradient(to bottom, #4a3214, #1e1306);
      box-shadow: 0 0 20px gold;
    }
    h1 {
      color: #ffd700;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>🧱 Solarno-informaciona pločica</h1>
  <canvas id="slab" width="600" height="1700"></canvas>
 
  <script>
    const canvas = document.getElementById("slab");
    function downloadCanvasAsPNG(canvas, scale = 4, filename = 'image.png') {
  // Kreiramo novi uvećani canvas
  const scaledCanvas = document.createElement('canvas');
  scaledCanvas.width = canvas.width * scale;
  scaledCanvas.height = canvas.height * scale;

  const ctx = scaledCanvas.getContext('2d');
  ctx.scale(scale, scale);
  ctx.drawImage(canvas, 0, 0);

  // Pretvaramo u data URL (PNG)
  const dataURL = scaledCanvas.toDataURL('image/png');

  // Automatsko preuzimanje
  const a = document.createElement('a');
  a.href = dataURL;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.fillStyle = "#caa85b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let yOffset = 40;
    const centerX = canvas.width / 2;

    // DNK spirala
    for (let y = -50; y <= 50; y += 6) {
      const offset = Math.sin(y * 0.15) * 15;
      ctx.beginPath();
      ctx.moveTo(centerX - offset, yOffset + y + 50);
      ctx.lineTo(centerX + offset, yOffset + y + 50);
      ctx.stroke();
    }
    yOffset += 70;

    // Ljudska figura (simbolično)
    ctx.beginPath();
    ctx.moveTo(centerX, yOffset);
    ctx.lineTo(centerX, yOffset + 30);
    ctx.moveTo(centerX, yOffset + 10);
    ctx.lineTo(centerX - 15, yOffset + 20);
    ctx.moveTo(centerX, yOffset + 10);
    ctx.lineTo(centerX + 15, yOffset + 20);
    ctx.moveTo(centerX, yOffset + 30);
    ctx.lineTo(centerX - 10, yOffset + 50);
    ctx.moveTo(centerX, yOffset + 30);
    ctx.lineTo(centerX + 10, yOffset + 50);
    ctx.stroke();
    yOffset += 80;
    
      // Binarni zapis duzine DNK
    const bin = "110000110101000000000000000";
    let binX = centerX - 60;
    let binY = yOffset;
    ctx.strokeRect(binX - 10, binY - 10, 130, 60);
    for (let i = 0; i < bin.length; i++) {
      let bit = bin[i];
      let x = binX + (i % 8) * 14;
      let y = binY + Math.floor(i / 8) * 20;
      ctx.beginPath();
      ctx.rect(x, y, 10, 14);
      ctx.stroke();
      if (bit === "1") {
        ctx.fillStyle = "white";
        ctx.fillRect(x + 3, y + 4, 4, 6);
      }
    }
    yOffset += 100;

    // Solarni dan
    ctx.beginPath(); ctx.arc(centerX - 100, yOffset, 15, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(centerX + 80, yOffset, 8, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(centerX - 100, yOffset); ctx.lineTo(centerX + 80, yOffset); ctx.stroke();
    ctx.beginPath(); ctx.arc(centerX + 80, yOffset, 15, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(centerX + 80, yOffset, 18, Math.PI * 0.3, Math.PI * 1.5); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(centerX + 90, yOffset - 10); ctx.lineTo(centerX + 80, yOffset + 20); ctx.stroke();
    yOffset += 100;

    // Pulsari
    const pX = centerX, pY = yOffset;
    for (let i = 0; i < 14; i++) {
      const angle = (Math.PI * 2 / 14) * i;
      const len = 60 + (i % 3) * 20;
      ctx.beginPath();
      ctx.moveTo(pX, pY);
      ctx.lineTo(pX + Math.cos(angle) * len, pY + Math.sin(angle) * len);
      ctx.stroke();
    }
    yOffset += 120;

    // Planete
    let sx = centerX - 80;
    for (let i = 0; i < 9; i++) {
      ctx.beginPath();
      ctx.arc(sx + i * 20, yOffset, 2 + i * 0.4, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.beginPath(); ctx.moveTo(sx + 40, yOffset); ctx.lineTo(sx + 40, yOffset - 20); ctx.stroke();
    yOffset += 80;

    // Raster slike
    const rasterX = centerX - 30;
    ctx.strokeRect(rasterX, yOffset, 60, 60);
    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 6; x++) {
        ctx.beginPath();
        ctx.rect(rasterX + x * 10, yOffset + y * 10, 10, 10);
        ctx.stroke();
      }
    }
    yOffset += 100;

    // 1-1 atomi
    ctx.beginPath(); ctx.arc(centerX - 20, yOffset, 6, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(centerX + 20, yOffset, 6, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(centerX - 14, yOffset); ctx.lineTo(centerX + 14, yOffset); ctx.stroke();
    yOffset += 100;

    // Analogni čitač
    ctx.beginPath(); ctx.rect(centerX - 100, yOffset, 200, 30); ctx.stroke();
    for (let i = 0; i < 20; i++) {
      let x = centerX - 90 + i * 9;
      let h = (i % 3 === 0) ? 12 : 6;
      ctx.beginPath(); ctx.moveTo(x, yOffset); ctx.lineTo(x, yOffset - h); ctx.stroke();
    }
    ctx.beginPath(); ctx.moveTo(centerX, yOffset + 30);
    ctx.lineTo(centerX - 10, yOffset + 50);
    ctx.lineTo(centerX + 10, yOffset + 50);
    ctx.closePath(); ctx.stroke();
    yOffset += 120;

    // NOVO: Vizuelna reprezentacija vremena (bez teksta)
    yOffset += 40;

    // Koncentrični krugovi
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, yOffset, 10 + i * 8, 0, Math.PI * 2);
      ctx.stroke();
    } 

    // Strela ka binarnom zapisu
    ctx.beginPath();
    ctx.moveTo(centerX - 60, yOffset + 90);
    ctx.lineTo(centerX + 60, yOffset + 90);
    ctx.moveTo(centerX + 50, yOffset + 85);
    ctx.lineTo(centerX + 60, yOffset + 90);
    ctx.lineTo(centerX + 50, yOffset + 95);
    ctx.stroke();

    // Binarne tačke
    const binVisual = "100111001010011";
    for (let i = 0; i < binVisual.length; i++) {
      const x = centerX - 80 + i * 11;
      const y = yOffset + 120;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.stroke();
      if (binVisual[i] === "1") {
        ctx.fill();
      }
    }
    
    // 1. Dan: rotacija planete
ctx.beginPath();
ctx.arc(centerX - 100, yOffset, 15, 0, Math.PI * 2); ctx.stroke();
ctx.beginPath();
ctx.moveTo(centerX - 100, yOffset);
ctx.lineTo(centerX - 100 + 15, yOffset);
ctx.stroke();

// Luk za pokazivanje rotacije
ctx.beginPath();
ctx.arc(centerX - 100, yOffset, 20, Math.PI * 0.2, Math.PI * 1.8); ctx.stroke();
ctx.beginPath(); // strelica
ctx.moveTo(centerX - 85, yOffset - 10);
ctx.lineTo(centerX - 88, yOffset - 2);
ctx.lineTo(centerX - 81, yOffset - 4); ctx.stroke();

// 2. Mesec (manji krug orbitira veći)
ctx.beginPath();
ctx.arc(centerX, yOffset, 20, 0, Math.PI * 2); ctx.stroke(); // planeta
ctx.beginPath();
ctx.arc(centerX + 30, yOffset, 5, 0, Math.PI * 2); ctx.stroke(); // mesec
ctx.beginPath();
ctx.ellipse(centerX, yOffset, 30, 20, 0, 0, Math.PI * 2); ctx.stroke(); // orbita

// 3. Godina: planeta oko zvezde
ctx.beginPath(); // zvezda
ctx.arc(centerX + 100, yOffset, 10, 0, Math.PI * 2); ctx.stroke();
ctx.beginPath(); // planeta
ctx.arc(centerX + 100 + 40, yOffset, 6, 0, Math.PI * 2); ctx.stroke();
ctx.beginPath(); // orbita
ctx.ellipse(centerX + 100, yOffset, 40, 25, 0, 0, Math.PI * 2); ctx.stroke();

// 4. Vizuelno brojanje dana – ponavljanje tačaka
yOffset += 80;
for (let i = 0; i < 12; i++) {
  const x = centerX - 60 + i * 12;
  ctx.beginPath();
  ctx.arc(x, yOffset, 3, 0, Math.PI * 2);
  ctx.stroke();
  if (i % 2 === 0) ctx.fill();
}

// 5. Računanje: sabiranje dana vizuelno
yOffset += 50;
// leve tačke
for (let i = 0; i < 3; i++) {
  ctx.beginPath();
  ctx.arc(centerX - 60 + i * 10, yOffset, 3, 0, Math.PI * 2);
  ctx.stroke(); ctx.fill();
}
// simbol sabiranja
ctx.beginPath();
ctx.moveTo(centerX, yOffset - 6);
ctx.lineTo(centerX, yOffset + 6);
ctx.moveTo(centerX - 6, yOffset);
ctx.lineTo(centerX + 6, yOffset);
ctx.stroke();
// desne tačke
for (let i = 0; i < 4; i++) {
  ctx.beginPath();
  ctx.arc(centerX + 20 + i * 10, yOffset, 3, 0, Math.PI * 2);
  ctx.stroke(); ctx.fill();
}

    // Vizuelni "račun" – binarni niz postaje dužina linije
    yOffset += 80;
    const bin2 = "110101"; // 6-bitna vrednost
    let totalLength = 0;
    for (let i = 0; i < bin2.length; i++) {
      const isOne = bin2[i] === "1";
      const len = isOne ? 15 : 5;
      totalLength += len;
      ctx.beginPath();
      ctx.moveTo(centerX - 60 + i * 20, yOffset);
      ctx.lineTo(centerX - 60 + i * 20, yOffset - len);
      ctx.stroke();
    }

    // Rezultujuća dužina kao jedna linija
    ctx.beginPath();
    ctx.moveTo(centerX - 60, yOffset + 30);
    ctx.lineTo(centerX - 60 + totalLength, yOffset + 30);
    ctx.stroke();
    
    
    
    ///
    
    const startY = 20;
const segmentCount = 10;
const segmentHeight = (canvas.height - 40) / segmentCount;

for (let i = 0; i < segmentCount; i++) {
  const y = startY + i * segmentHeight;
  const w = 10;
  const h = segmentHeight - 4;
  ctx.beginPath();
  ctx.rect(5, y, w, h);
  ctx.stroke();

  // Dodaj malu strelicu u pravcu nadole
  if (i < segmentCount - 1) {
    ctx.beginPath();
    const arrowX = 10;
    const arrowY = y + h - 2;
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(arrowX - 4, arrowY + 6);
    ctx.lineTo(arrowX + 4, arrowY + 6);
    ctx.closePath();
    ctx.stroke();
  }
}

// Gornji simbol (krug sa zrakom) = početak
ctx.beginPath();
ctx.arc(10, 10, 6, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(10, 2);
ctx.stroke();

// Donji simbol (trougao nadole) = kraj
ctx.beginPath();
ctx.moveTo(10, canvas.height - 10);
ctx.lineTo(4, canvas.height - 2);
ctx.lineTo(16, canvas.height - 2);
ctx.closePath();
ctx.stroke();


   // Matrica rekonstrukcije elemenata (zlato i aluminijum)
   yOffset += 100;

// 3x3 matrica – simbolička struktura atoma (proton/neutron/elektron)
const atomX = centerX - 50;
const atomY = yOffset;
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    ctx.beginPath();
    const cx = atomX + col * 20;
    const cy = atomY + row * 20;
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.stroke();

    // popunjeni simboli za zlato
    if ((row === 1 && col === 1) || (row === 0 && col === 1) || (row === 2 && col === 1)) {
      ctx.fill();
    }
  }
}

// strelica → nova matrica (rekonstrukcija)
ctx.beginPath();
ctx.moveTo(centerX + 20, yOffset + 20);
ctx.lineTo(centerX + 60, yOffset + 20);
ctx.moveTo(centerX + 50, yOffset + 15);
ctx.lineTo(centerX + 60, yOffset + 20);
ctx.lineTo(centerX + 50, yOffset + 25);
ctx.stroke();

// 3x3 matrica – kako proizvesti element iz osnova
const rebuildX = centerX + 80;
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    ctx.beginPath();
    const cx = rebuildX + col * 20;
    const cy = atomY + row * 20;
    ctx.rect(cx - 6, cy - 6, 12, 12);
    ctx.stroke();

    // kao kod za reakciju ili kombinaciju
    if ((row === 1 && col === 0) || (row === 1 && col === 2)) {
      ctx.fillRect(cx - 3, cy - 3, 6, 6);
    }
  }
}

// talas ispod → predstavlja energiju reakcije
yOffset += 70;
ctx.beginPath();
for (let x = 0; x <= 100; x++) {
  const fx = centerX - 50 + x;
  const fy = yOffset + Math.sin(x * 0.15) * 6;
  if (x === 0) ctx.moveTo(fx, fy);
  else ctx.lineTo(fx, fy);
}
ctx.stroke();



ctx.font = "10px monospace";
ctx.fillStyle = "white";

const legendLines = [
  "- DNA                – Genetic information",
  "- Human              – Intelligent lifeform",
  "- Binary Code        – Encoded length of DNA",
  "- Solar Day          – Planetary rotation and time",
  "- Pulsars            – Galactic position (Earth's coordinates)",
  "- Solar System       – 9 planets with Earth highlighted",
  "- Raster Image       – Visual data (symbolic)",
  "- Atoms 1-1          – Basic matter and structure",
  "- Analog Reader      – How to decode the message",
  "- Time Markers       – Day, month, year (visually)",
  "- Math & Counting    – Representation of calculation",
  "- Element Matrix     – Structure and reconstruction of Gold/Aluminum",
  "- Energy Wave        – Reaction or transmission signal",
  "The post is scientific in nature.",
  "All symbols have been previously explained.",
  "The primary purpose of the plaque is to enable non-human intelligence to",
  "understand how a Solar day is calculated in a simple way. ",
  "markonikolic.com © Marko Nikolić"
];

// Početne pozicije
const legendX = 40;
let legendY = canvas.height - 315;
const lineHeight = 18;

// Pozadinski pravougaonik (opciono)
ctx.fillStyle = "#caa85b";
ctx.fillRect(20, legendY - 20, canvas.width - 40, legendLines.length * lineHeight + 30);

// Ispis teksta
ctx.fillStyle = "white";
for (let i = 0; i < legendLines.length; i++) {
  ctx.fillText(legendLines[i], legendX, legendY + i * lineHeight);
}
  </script>
</body>
</html>
