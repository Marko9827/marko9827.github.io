<!DOCTYPE html>
<html>
<head>
<title>Višestruki talasi</title>
<style>
body {
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
  overflow: hidden;
}

#container {
  position: relative;
  width: 500px;
  height: 300px;
  background-color: #222;
  overflow: hidden;
  cursor: pointer;
}

.wave {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0, 150, 255, 0.4);
  transform: scale(0);
  pointer-events: none;
}

.wave.ripple1 {
    animation: ripple 1.5s linear forwards;
}
.wave.ripple2 {
    animation: ripple 1.5s linear 0.3s forwards; /* Delay od 0.3s */
}
.wave.ripple3 {
    animation: ripple 1.5s linear 0.6s forwards; /* Delay od 0.6s */
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

.text {
    color: #eee;
    font-size: 2em;
    text-align: center;
    padding: 20px;
    user-select: none;
    position: relative;
}

.highlighted {
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
  transition: text-shadow 0.3s ease-in-out;
}
</style>
</head>
<body>

<div id="container">
    <div class="text" id="myText">Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti. Ovo je neki tekst koji će se osvetliti.</div>
</div>

<script>
const container = document.getElementById('container');
const textElement = document.getElementById('myText');

container.addEventListener('click', (e) => {
  const x = e.clientX - container.offsetLeft;
  const y = e.clientY - container.offsetTop;

  for (let i = 1; i <= 3; i++) {  
    const wave = document.createElement('div');
    wave.classList.add('wave', `ripple${i}`);  
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    container.appendChild(wave);

    wave.addEventListener('animationend', () => {
      wave.remove();
    });
  }

  highlightText(x, y);
});

function highlightText(x, y) {
    const textRect = textElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const relativeTextLeft = textRect.left - containerRect.left;
    const relativeTextTop = textRect.top - containerRect.top;

    if (x >= relativeTextLeft && x <= relativeTextLeft + textRect.width &&
        y >= relativeTextTop && y <= relativeTextTop + textRect.height) {

        if (!textElement.querySelectorAll('anim-span').length) {
            const letters = textElement.textContent.split('').map(letter => `<anim-span>${letter}</anim-span>`).join('');
            textElement.innerHTML = letters;
        }

        const spans = textElement.querySelectorAll('anim-span');
        spans.forEach(span => {
            const spanRect = span.getBoundingClientRect();
            const relativeSpanLeft = spanRect.left - containerRect.left;
            const relativeSpanTop = spanRect.top - containerRect.top;
            const distance = Math.sqrt(Math.pow(x - (relativeSpanLeft + spanRect.width / 2), 2) + Math.pow(y - (relativeSpanTop + spanRect.height / 2), 2));
            if (distance < 70) {
                span.classList.add('highlighted');
                setTimeout(() => {
                    span.classList.remove('highlighted');
                }, 500);
            }
        });
    }
}
</script>

</body>
</html>