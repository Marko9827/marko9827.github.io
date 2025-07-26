<!DOCTYPE html>
<html>

<head>
  <title>Hello</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>


  <custom-video src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" controls>
  </custom-video>
  <script type="text/javascript" charset="utf-8">
    window.svg_paths = null;
    if (!customElements.get('icon-i')) {
      customElements.define('icon-i', class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({mode: 'open'});

          // SVG wrapper i stil
          this.styleElement = document.createElement('style');
          this.styleElement.textContent = `

           :host, * {
            -webkit-user-select:none;
               -moz-user-select:none;
                -ms-user-select:none;
                    user-select:none;
            cursor: default;
                    }
                    
  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: middle;
  }
`;


          this.svg = null;
          this.shadowRoot.appendChild(this.styleElement);

        }

          cleanId(id) {
  return id.replace(/^\d+-/, '').replace(/bi-?/g, '');
}

        svg_str(id = "bi bi-1-square-fill") {
  const symbols = window.svg_paths;
  const cleaned = this.cleanId(id);  

  for (let i = 0; i < symbols.length; i++) {
    const idf = this.cleanId(symbols[i]['id']);  

    if (idf === cleaned) {
      this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svg.setAttribute('viewBox', symbols[i]['viewBox']);
      this.svg.setAttribute('class', id); 

      const paths = symbols[i]['paths'];
      for (let j = 0; j < paths.length; j++) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", paths[j]['d']);  
        this.svg.appendChild(path);
      }

      this.shadowRoot.appendChild(this.svg);
      this.removeAttribute("name"); 
      break;
    }
  }
}

  isJsonObject(val) {
  return typeof val === 'object' && val !== null && !Array.isArray(val);
}
isJsonString(str) {
  try {
    const parsed = JSON.parse(str);
    return typeof parsed === 'object' && parsed !== null;
  } catch (e) {
    return false;
  }
}


        async connectedCallback() {
          if (!this.isJsonObject(window.svg_paths) || !this.isJsonString(window.svg_paths)) {
            const response = await fetch("/icons");
            if (response.ok) {
              window.svg_paths = await response.json();
            } else {
            }
          }


          const src = this.getAttribute('name') || null;

          if (src) {
            this.svg_str(`${src}`);
          }
        }

        name(iconName) {
          this.shadowRoot.querySelectorAll('svg').forEach(e => e.remove());
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          switch (iconName) {

            case '':
              this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              this.svg.setAttribute('viewBox', '0 0 16 16');
              this.svg.setAttribute('class', 'bi bi-rulers');
              path.setAttribute('d', 'M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z');

              this.svg.appendChild(path);
              this.shadowRoot.appendChild(this.svg);
              break;
            case 'bi-inbox':
              this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              this.svg.setAttribute('viewBox', '0 0 16 16');
              this.svg.setAttribute('class', 'bi bi-rulers');
              path.setAttribute('d', 'M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z');

              this.svg.appendChild(path);
              this.shadowRoot.appendChild(this.svg);

              break;
            case 'x-lg':
              this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              this.svg.setAttribute('viewBox', '0 0 16 16');
              this.svg.setAttribute('class', 'bi bi-rulers');

              path.setAttribute('d', 'M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z');

              this.svg.appendChild(path);
              this.shadowRoot.appendChild(this.svg);
              break;
            case 'emoji-frown-fill"':
              this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              this.svg.setAttribute('viewBox', '0 0 16 16');
              this.svg.setAttribute('class', 'bi bi-rulers');

              path.setAttribute('d', 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8');

              this.svg.appendChild(path);
              this.shadowRoot.appendChild(this.svg);
              break;
            case 'emoji-laughing-fill':
              this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              this.svg.setAttribute('viewBox', '0 0 16 16');
              this.svg.setAttribute('class', 'bi bi-rulers');

              path.setAttribute('d', 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5s-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5m5.331 3a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5m-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5s-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.23');

              this.svg.appendChild(path);
              this.shadowRoot.appendChild(this.svg);
              break;
            case 'rulers':
              this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              this.svg.setAttribute('viewBox', '0 0 16 16');
              this.svg.setAttribute('class', 'bi bi-rulers');

              path.setAttribute('d', 'M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1z');

              this.svg.appendChild(path);
              this.shadowRoot.appendChild(this.svg);
              break;

            default:
              console.warn(`Icon "${iconName}" not found.`);
          }
        }
      } );
    }


    if(!customElements.get('rotating-border')){
     customElements.define('rotating-border', class   extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({mode: 'open'});
      }

      connectedCallback() {
        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';

        const content = document.createElement('div');
        content.className = 'content';
        content.textContent = this.textContent || 'Rotating Border';

        const style = document.createElement('style');
        style.textContent = `
      .wrapper {
        position: relative;
        padding: 20px;
        border-radius: 10px;
        overflow: hidden;
        display: inline-block;
      }

      .wrapper::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: conic-gradient(
          red,
          orange,
          yellow,
          green,
          cyan,
          blue,
          violet,
          red
        );
        z-index: 0;
        animation: rotate 4s linear infinite;
        border-radius: 12px;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-composite: destination-out;
        padding: 5px;
      }

      .content {
        position: relative;
        z-index: 1;
        background: white;
        border-radius: 8px;
        padding: 20px;
      }

      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;

        wrapper.appendChild(content);
        this.shadowRoot.append(style, wrapper);
      }
    })
  }

 
    if(!customElements.get('custom-video')){
    customElements.define('custom-video', class   extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this._prevVolume = 1;
        this.observer = null;

      }
      disconnectedCallback() {
        if (this._onKeyDown) {
          document.removeEventListener('keydown', this._onKeyDown);
          this._onKeyDown = null;
        }
        if (this.observer) {
          this.observer.disconnect();
        }
      }
      connectedCallback() {
        this.observer = new MutationObserver((mutations) => {
          for (const mutation of mutations) {



          }
        });

        this.observer.observe(this.shadowRoot, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true
        });

        const src = this.getAttribute('src') || '';
        const poster = this.getAttribute('poster') || '';
        const autoplay = this.hasAttribute('autoplay');
        const loop = this.hasAttribute('loop');

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css';

        const style = document.createElement('style');
        style.textContent = ` 
    
  

    
:host {

display: -webkit-box;

display: -ms-flexbox;

display: flex;
    max-width: 100%;
    position: relative;
    font-family: sans-serif;
    background: black;
    border-radius: 10px;
    min-height: 250px;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;


}




        video {
          width: 100%;
          height: 100%;
          -o-object-fit: scale-down;
             object-fit: scale-down;
          background: black;
          border-radius: 0px;
              margin: auto;

              transition: .3s;
        }
        .video-feedback {

        position: absolute;
    top: 50%;
    left: 50%;
    /* transform: translate(-50%, -50%) scale(1); */
    font-size: 4dvh;
    color: white;
    opacity: 0;
    pointer-events: none;
    -webkit-transition: opacity 0.4s ease, -webkit-transform 0.4s ease;
    transition: opacity 0.4s ease, -webkit-transform 0.4s ease;
    -o-transition: opacity 0.4s ease, transform 0.4s ease;
    transition: opacity 0.4s ease, transform 0.4s ease;
    transition: opacity 0.4s ease, transform 0.4s ease, -webkit-transform 0.4s ease;
    z-index: 20;
    height: 100%;
    width: 100%;
    margin: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-line-pack: center;
        align-content: center;
    left: 0%;
    top: 0%;
    pointer-events: none;
    background: -o-radial-gradient(#00000070, transparent);
    background: radial-gradient(#00000070, transparent);
    border-radius: 10px !important;

        }
        .video-feedback.show {
          opacity: 1; 
        }
        .controls {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
              -ms-flex-direction: column;
                  flex-direction: column;
          gap: 4px;
          padding: 8px 12px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          color: white;
          z-index: 10;
          background-image: -o-linear-gradient(bottom, black, transparent);
          background-image: -webkit-gradient(linear, left bottom, left top, from(black), to(transparent));
          background-image: linear-gradient(360deg, black, transparent);
       filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) ;
-webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) ;
enable-background: new 0 0 512 512 ;
border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
       
          }
        .controls-row {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
              -ms-flex-pack: justify;
                  justify-content: space-between;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          gap: 8px;
        }
        .controls-row > div:first-child {
          display: -webkit-inline-box;
          display: -ms-inline-flexbox;
          display: inline-flex;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          gap: 8px;
        }
        .progress-time {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          gap: 4px;
          font-size: 0.8em;
        }

    


        button {
          background: none;
          border: none;
          color: white;
          font-size: 1.4em;
          cursor: pointer;
          position: relative;
        }
        .volume {
          display: -webkit-inline-box;
          display: -ms-inline-flexbox;
          display: inline-flex;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          gap: 4px;
          position: relative;
        }   
 
`;

        const root = document.createElement("div");
        const video = document.createElement('video');
        video.id = 'video';
        if (poster) video.poster = poster;
        if (autoplay) video.setAttribute('autoplay', '');
        if (loop) video.setAttribute('loop', '');
        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.style.opacity = '0';
        video.style.transform = 'scale(0);';

        video.appendChild(document.createTextNode('Your browser does not support the video tag.'));

        const feedback = document.createElement('div');
        feedback.className = 'video-feedback';

        const controls = document.createElement('div');
        controls.className = 'controls';
        const progressBar = document.createElement('progress-bar'),
          bac_mask = document.createElement("bac-mask");
        controls.appendChild(bac_mask);
        controls.appendChild(progressBar);


        const controlsRow = document.createElement('div');
        controlsRow.className = 'controls-row';

        const left = document.createElement('div');
        const playBtn = document.createElement('button');
        playBtn.className = 'play';
        playBtn.title = 'Play/Pause';
        playBtn.innerHTML = '<icon-i name="play-fill"></icon-i>';

        const volume = document.createElement('div');
        volume.className = 'volume';
        const muteBtn = document.createElement('button');
        muteBtn.className = 'mute';
        muteBtn.title = 'Mute/Unmute';
        muteBtn.innerHTML = '<icon-i name="volume-up-fill"></icon-i>';
        const volumeRange = document.createElement('volume-range');
        volume.appendChild(muteBtn);
        volume.appendChild(volumeRange);

        let volumeHoverTimeout;

        volume.addEventListener('mouseenter', () => {
          clearTimeout(volumeHoverTimeout);
          volumeRange.style.display = 'block';
        });

        volume.addEventListener('mouseleave', () => {
          volumeHoverTimeout = setTimeout(() => {
            volumeRange.style.display = 'none';
          }, 300); // malo kašnjenje za prelaz
        });

        volumeRange.addEventListener('mouseenter', () => {
          clearTimeout(volumeHoverTimeout);
          volumeRange.style.display = 'block';
        });

        volumeRange.addEventListener('mouseleave', () => {
          volumeHoverTimeout = setTimeout(() => {
            volumeRange.style.display = 'none';
          }, 300);
        });


        left.appendChild(playBtn);
        left.appendChild(volume);

        const timeDiv = document.createElement('div');
        timeDiv.className = 'progress-time';
        const current = document.createElement('span');
        current.className = 'current-time';
        current.textContent = '0:00';
        const duration = document.createElement('span');
        duration.className = 'duration';
        duration.textContent = '0:00';
        timeDiv.appendChild(current);
        timeDiv.appendChild(document.createTextNode(' / '));
        timeDiv.appendChild(duration);
        timeDiv.appendChild(duration);
        left.appendChild(timeDiv);

        const right = document.createElement('div');
        const subsBtn = document.createElement('button');
        subsBtn.className = 'subtitles';
        subsBtn.title = 'Subtitles';
        subsBtn.innerHTML = '<icon-i name="subtitles"></icon-i>';
        const speedBtn = document.createElement('button');
        speedBtn.className = 'speed';
        speedBtn.title = 'Speed';
        speedBtn.innerHTML = '<icon-i name="gear-fill"></icon-i>';
        const pipBtn = document.createElement('button');
        pipBtn.className = 'pip';
        pipBtn.title = 'Picture-in-Picture';
        pipBtn.innerHTML = '<icon-i name="box-arrow-in-up-right"></icon-i>';
        const fullBtn = document.createElement('button');
        fullBtn.className = 'fullscreen';
        fullBtn.title = 'Fullscreen';
        fullBtn.innerHTML = '<icon-i name="fullscreen"></icon-i>';
        right.appendChild(subsBtn);
        right.appendChild(speedBtn);
        right.appendChild(pipBtn);
        right.appendChild(fullBtn);

        controlsRow.appendChild(left);
        // controlsRow.appendChild(timeDiv);
        controlsRow.appendChild(right);
        controls.appendChild(controlsRow);

        this.shadowRoot.appendChild(root);
        root.appendChild(link);
        root.appendChild(style);
        root.appendChild(video);
        root.appendChild(feedback);
        root.appendChild(controls);
        // this.shadowRoot.append(link, style, video, feedback, controls);

        const progress = progressBar;
        const currentTime = current;
        const durationTime = duration;

        this.shadowRoot.addEventListener("contextmenu", e => e.preventDefault());
        this.shadowRoot.addEventListener("dragstart", e => e.preventDefault());
        this.shadowRoot.addEventListener("selectstart", e => e.preventDefault());

        progress.videoRef = video;

        const formatTime = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
        const showFeedback = icon => {
          feedback.innerHTML = icon;
          feedback.classList.add('show');
          setTimeout(() => feedback.classList.remove('show'), 400);
        };

        video.addEventListener('loadeddata', () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const thumbnail = canvas.toDataURL('image/jpeg');
            video.setAttribute('poster', thumbnail);
          } catch (e) { }

        });

        video.addEventListener('loadedmetadata', () => {
          durationTime.textContent = formatTime(video.duration);
        });

        video.addEventListener('timeupdate', () => {
          if (video.hasAttribute("style")) {
            video.removeAttribute("style");
          }

          currentTime.textContent = formatTime(video.currentTime);
          progress.value = video.currentTime / video.duration;
        });

        progress.addEventListener('seek', e => {
          video.currentTime = e.detail * video.duration;
        });

        playBtn.addEventListener('click', () => {
          if (video.paused) {
            video.play();
            playBtn.innerHTML = '<icon-i name="pause-fill"></icon-i>';
            showFeedback('<icon-i name="pause-circle-fill"></icon-i>');
          } else {
            video.pause();
            playBtn.innerHTML = '<icon-i name="play-fill"></icon-i>';
            showFeedback('<icon-i name="play-circle-fill"></icon-i>');
          }
        });


        video.addEventListener('click', () => playBtn.click());

        video.volume = 1;
        volumeRange.value = 1;

        muteBtn.addEventListener('click', () => {
          video.muted = !video.muted;
          if (video.muted) {
            this._prevVolume = video.volume;
            volumeRange.value = 0;
            video.volume = 0;
          } else {
            video.volume = this._prevVolume || 1;
            volumeRange.value = video.volume;
          }
          muteBtn.innerHTML = video.muted ? '<icon-i name="volume-mute-fill"></icon-i>' : '<icon-i name="volume-up-fill"></icon-i>';
        });

        volumeRange.addEventListener('input', e => {
          const val = parseFloat(e.detail ?? e.target.value);
          video.volume = val;
          video.muted = val === 0;
          muteBtn.innerHTML = video.muted ? '<icon-i name="volume-mute-fill"></icon-i>' : '<icon-i name="volume-up-fill"></icon-i>';
        });

        fullBtn.addEventListener('click', () => {
          if (!document.fullscreenElement) {
            this.shadowRoot.host.requestFullscreen?.();
            fullBtn.innerHTML = '<icon-i name="fullscreen-exit"></icon-i>';
          } else {
            fullBtn.innerHTML = '<icon-i name="fullscreen"></icon-i>';
            document.exitFullscreen?.();
          }
        });

        pipBtn.addEventListener('click', () => {
          if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
            video.requestPictureInPicture?.();
          }
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && document.fullscreenElement) {
            document.exitFullscreen?.();
          } else if (e.code === 'Space') {
            e.preventDefault();
            playBtn.click();
          }
        });
      }
    })
  }

    





    if(!customElements.get('volume-range')){
    customElements.define('volume-range', class   extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this._dragging = false;
      }

      connectedCallback() {
        const style = document.createElement('style');
        style.textContent = `
      .container {
        width: 60px;
        height: 6px;
        background: rgba(255,255,255,0.3);
        border-radius: 3px;
        cursor: pointer;
        position: relative;
      }
      .fill {
       height:  100%;
  background: transparent;
  background-image: linear-gradient(270deg, red, rgb(255 0 0 / 60%)); 
  border-radius: 0.375dvh;
  width: 0dvh; /* was 0% */
      }
      .thumb {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: white;
      }
    `;

        const container = document.createElement('div');
        container.className = 'container';

        const fill = document.createElement('div');
        fill.className = 'fill';

        const thumb = document.createElement('div');
        thumb.className = 'thumb';

        container.appendChild(fill);
        container.appendChild(thumb);
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(container);



        this.container = container;
        this.fill = fill;
        this.thumb = thumb;

        const updateFromEvent = (e) => {
          const rect = this.container.getBoundingClientRect();
          const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
          this.setVolume(percent);
          this.dispatchEvent(new CustomEvent('input', {detail: percent}));
        };

        this.container.addEventListener('mousedown', (e) => {
          this._dragging = true;
          updateFromEvent(e);
        });

        window.addEventListener('mousemove', (e) => {
          if (this._dragging) updateFromEvent(e);
        });

        window.addEventListener('mouseup', () => {
          if (this._dragging) this._dragging = false;
        });
      }

      setVolume(val) {
        this.fill.style.width = `${val * 100}%`;
        this.thumb.style.left = `${val * 100}%`;
        this._value = val;
      }

      set value(val) {
        this.setVolume(val);
      }

      get value() {
        return this._value ?? 1;
      }
    })
  }
  
    if(!customElements.get('progress-bar')) {
    customElements.define('progress-bar', class   extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this._dragging = false;
        this._wasPlaying = false;
      }

      connectedCallback() {
        const style = document.createElement('style');
        style.textContent = `
    .container {
        width: 100%;
        height: 6px;
        background: rgba(255,255,255,0.3);
        border-radius: 3px;
        cursor: pointer;
        position: relative;
      }
      .fill {
        height: 100%;
          background: transparent;
  background-image: linear-gradient(270deg, red, rgb(255 0 0 / 60%)); 
        border-radius: 3px;
        width: 0%;
      }
      .thumb {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: white;
      }
      .tooltip {
        position: absolute;
        bottom: 100%;
        transform: translateX(-50%);
        background: black;
        color: white;
        font-size: 10px;
        padding: 2px 4px;
        border-radius: 4px;
        display: none;
        white-space: nowrap;
      }

    `;

        const container = document.createElement('div');
        container.className = 'container';

        const fill = document.createElement('div');
        fill.className = 'fill';

        const thumb = document.createElement('div');
        thumb.className = 'thumb';

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';

        container.appendChild(fill);
        container.appendChild(thumb);
        container.appendChild(tooltip);
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(container);

        this.container = container;
        this.fill = fill;
        this.thumb = thumb;
        this.tooltip = tooltip;

        const updateFromEvent = (e) => {
          const rect = this.container.getBoundingClientRect();
          const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
          this.setProgress(percent);
          if (this._video) this._video.currentTime = this._video.duration * percent;
          this.dispatchEvent(new CustomEvent('seek', {detail: percent}));
        };

        const updateTooltip = (e) => {
          if (!this._video || isNaN(this._video.duration)) {
            this.tooltip.style.display = 'none';
            return;
          }

          const rect = this.container.getBoundingClientRect();
          const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
          const time = this._video.duration * percent;

          const minutes = Math.floor(time / 60);
          const seconds = Math.floor(time % 60).toString().padStart(2, '0');
          this.tooltip.textContent = `${minutes}:${seconds}`;
          this.tooltip.style.left = `${percent * 100}%`;
          this.tooltip.style.display = 'block';
        };

        container.addEventListener('mousedown', (e) => {
          if (this._video) {
            this._wasPlaying = !this._video.paused;
            this._video.pause();
          }
          this._dragging = true;
          updateFromEvent(e);
        });

        window.addEventListener('mousemove', (e) => {
          if (this._dragging) updateFromEvent(e);

          updateTooltip(e);
        });

        window.addEventListener('mouseup', () => {
          if (this._dragging) {
            this._dragging = false;
            if (this._video && this._wasPlaying) this._video.play();
          }
        });

        container.addEventListener('mouseleave', () => {
          this.tooltip.style.display = 'none';
        });
      }

      setProgress(val) {
        this.fill.style.width = `${val * 100}%`;
        this.thumb.style.left = `${val * 100}%`;
        this._value = val;
      }

      set value(val) {
        this.setProgress(val);
      }

      set videoRef(v) {
        this._video = v;
      }

      get value() {
        return this._value ?? 0;
      }
    });
  }
    
  </script>
</body>

</html>