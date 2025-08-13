if (!customElements.get("video-player-v2")) {
  customElements.define(
    "video-player-v2",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({
          mode: "open",
        });
        this._prevVolume = 1;
        this.observer = null;
        this.video = document.createElement("video");
        this._hls = null;
        this._isProgressBarDragging = false;
        this._wasPlaying = false;
        this._isVolumeDragging = false;
        this._controlsTimeout = null;
        this._lang = {
          en: {
            play_pause: "Play/Pause",
            mute_unmute: "Mute/Unmute",
            fullscreen: "Fullscreen",
            pip: "Picture-in-Picture",
            quality: "Quality",
            loop: "Loop",
            resolution: "Resolution",
            auto: "Auto",
            not_supported: "Your browser does not support the video tag.",
          },
          sr: {
            play_pause: "Play/Pause",
            mute_unmute: "Mute/Unmute",
            fullscreen: "Fullscreen",
            pip: "Picture-in-Picture",
            quality: "Quality",
            loop: "Loop",
            resolution: "Resolution",
            auto: "Auto",
            not_supported: "Your browser does not support the video tag.",
          },
        };

        // Cache DOM elements that will be used across different methods
        this.playerContainer = null;
        this.controlsElement = null;
        this.progressBarContainer = null;
        this.progressBarBuffer = null;
        this.progressBarFill = null;
        this.progressBarThumb = null;
        this.progressBarTooltip = null;
        this.volumeRangeContainer = null;
        this.volumeRangeFill = null;
        this.volumeRangeThumb = null;
        this.currentTimeElement = null;
        this.durationElement = null;
        this.playBtn = null;
        this.muteBtn = null;
        this.loader = null;
        this.img_poster = null;
        this.fullBtn = null;
        this.pipBtn = null;
        this.resolutionsBtn = null;
        this.resolutionsMenu = null;
        this.resolutionsMenuContainer = null;
        this.contextMenu = null;
      }

      static get observedAttributes() {
        return [
          "src",
          "data-src",
          "poster",
          "data-poster",
          "data-stream",
          "autoplay",
          "loop",
        ];
      }

      attributeChangedCallback(name, oldV, newV) {
        if (oldV === newV || !this.isConnected || !this.video) return;

        // Ova metoda je sada samo "triger". Stvarna logika se izvršava tek kada je element povezan.
        // Stvarna logika se poziva u connectedCallback, a ova metoda samo postavlja atribute ako je element već povezan.
        if (name === "data-stream") {
          const url = (newV || "").replace(/&amp;/g, "&");
          this._setStream(url);
        } else if (name === "src" || name === "data-src") {
          this._setMp4(newV);
        } else if (name === "poster" || name === "data-poster") {
          if (this.img_poster) {
            this.img_poster.src = newV || "";
            this.img_poster.style.display = "block";
          }
        } else if (name === "autoplay") {
          this.video.autoplay = newV !== null;
        } else if (name === "loop") {
          this.video.loop = newV !== null;
          this._updateLoopState();
        }
      }

      _setStream(streamUrl) {
        if (!streamUrl || !this.video) return;
        streamUrl = streamUrl.replace(/&amp;/g, "&");
        try {
          this.resolutionsMenuContainer.style.display = "inline-flex";
        } catch (Ex) {}
        if (this._hls) {
          this._hls.destroy();
          this._hls = null;
        }
        const loader = this.loader;

        if (this.video.canPlayType("application/vnd.apple.mpegurl")) {
          this.video.src = streamUrl;
          this.video.addEventListener(
            "loadedmetadata",
            () => {
              if (this.hasAttribute("autoplay")) {
                this.video
                  .play()
                  .catch((e) => {});
              }
              if (loader.classList.contains("loading")) {
                loader.classList.remove("loading");
              }
            },
            {
              once: true,
            }
          );
        } else {
          const bootHls = () => {
            if (window.Hls && Hls.isSupported()) {
              const hls = new Hls({
                startLevel: -1,
                capLevelToPlayerSize: true,
              });
              this._hls = hls;
              hls.loadSource(streamUrl);
              hls.attachMedia(this.video);

              hls.on(Hls.Events.MANIFEST_LOADING, () => {
                loader.classList.add("loading");
              });

              hls.on(Hls.Events.MANIFEST_PARSED, () => {
                this._populateResolutionMenu();
                if (this.hasAttribute("autoplay")) {
                  this.video
                    .play()
                    .catch((e) => {});
                }
              });

              hls.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
                // Update resolution buttons if needed
              });

              hls.on(Hls.Events.ERROR, (event, data) => {
           
                
                if (data.fatal) {
                  switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                     
                    
                      hls.startLoad();
                      break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                     
                    
                      hls.recoverMediaError();
                      break;
                    default:
                      hls.destroy();
                      break;
                  }
                }
              });
            } else {
                
            }
          };

          if (window.Hls) {
            bootHls();
          } else {
            const checkHlsInterval = setInterval(() => {
              if (window.Hls) {
                clearInterval(checkHlsInterval);
                bootHls();
              }
            }, 100);
          }
        }
      }

      _setMp4(src) {
        if (!src || !this.video) return;
        if (this._hls) {
          this._hls.destroy();
          this._hls = null;
        }
        this.resolutionsMenuContainer.style.display = "none";
        this.video.src = src;
        this.video.load();
        if (this.hasAttribute("autoplay")) {
          this.video
            .play()
            .catch((e) => {});
        }
      }

      disconnectedCallback() {
        if (this._hls) {
          this._hls.destroy();
        }
        if (this.observer) {
          this.observer.disconnect();
        }
        cancelAnimationFrame(this._loaderRaf);
        this._loaderRaf = null;
        document.removeEventListener(
          "fullscreenchange",
          this._handleFullscreenChange.bind(this)
        );
        document.removeEventListener("click", this._hideContextMenu.bind(this));
        document.removeEventListener(
          "mousemove",
          this._handleFullscreenMouseMove.bind(this)
        );
      }

      connectedCallback() {
        this.observer = new MutationObserver((mutations) => {});
        this.observer.observe(this.shadowRoot, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true,
        });
        const style = document.createElement("style");
        style.textContent = `
                        :host {
                          display: flex;
                          max-width: 100%;
                          position: relative;
                          font-family: sans-serif;
                          background: black;
                          border-radius: 10px;
                          min-height: 250px;
                          align-items: center;
                          overflow: hidden; 
                        }
                        video {
                           width: 100%;
    height: 100%;
    object-fit: scale-down;
    background: black;
    position: absolute;
    left: 0px;
    top: 0px;
                        }
                        .video-feedback {
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                          font-size: 4dvh;
                          color: white;
                          opacity: 0;
                          pointer-events: none;
                          transition: opacity 0.4s ease, transform 0.4s ease;
                          z-index: 20;
                        }
                        .video-feedback.show {
                          opacity: 1;
                        }
                        .controls {
                          opacity: 0;
                          transition: opacity 0.3s;
                          display: flex;
                          flex-direction: column;
                          gap: 4px;
                          padding: 8px 12px;
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          right: 0;
                          color: white;
                          z-index: 10;
                          background-image: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
                          pointer-events: none;
                        }
                        :host(:hover) .controls {
                          opacity: 1;
                          pointer-events: all;
                        }
                        :host:not([data-fullscreen]) c-c {
                          opacity:0 !important;
                        }
                        :host([data-fullscreen]) .controls.visible {
                          opacity: 1;
                          pointer-events: all;
                        }
                        .controls.hide {
                            opacity: 0;
                            pointer-events: none;
                        }
                        .controls-row {
                          display: flex;
                          justify-content: space-between;
                          align-items: center;
                          gap: 8px;
                        }
                        .controls-row > div:first-child {
                          display: inline-flex;
                          align-items: center;
                          gap: 8px;
                        }
                        .progress-time {
                          display: flex;
                          align-items: center;
                          gap: 4px;
                          margin-top: -4px;
                          font-size: 0.8em;
                        }
                        button {
                          background: none;
                          border: none;
                          color: white;
                          font-size: 1.4em;
                          
                          position: relative;
                          padding: 4px;
                        }
                        .volume {
                          display: inline-flex;
                          align-items: center;
                          gap: 4px;
                          position: relative;
                        }
                        .volume.no-audio {
                          opacity: 0.5;
                          pointer-events: none;
                        }
                        img#poster {
                          width: 100%;
                          height: 100%;
                          background: black;
                          object-fit: contain;
                          position: absolute;
                          left: 0px;
                          top: 0px;
                          z-index: 5;
                        }
                        #loader {
                          display: block;
                          position: absolute;
                          left: 50%;
                          top: 50%;
                          opacity: 0;
                          transform: translate(-50%, -50%) scale(0);
                          transition: .3s;
                          z-index: 30;
                          width: 40px;
                        }

                        #loader.loading {
                          opacity: 1;
                          transform: translate(-50%, -50%) scale(1);
                        }

                        

                        .progress-bar-container, .volume-range-container {
                          height: 6px;
                          background: rgba(255,255,255,0.3);
                          border-radius: 3px;
                          
                          position: relative;
                        }
                        .progress-bar-container {
                          width: 100%;
                          margin-top: -4px;
                        }
                        .volume-range-container {
                          width: 60px;
                          top: -2px;
                        }
                        .progress-fill, .volume-fill {
                          height: 100%;
                          background: linear-gradient(270deg, red, rgb(255 0 0 / 60%));
                          border-radius: 3px;
                          width: 0%;
                          position: relative;
                          z-index: 2;
                        }
                        .buffer {
                            height: 100%;
                            background: rgba(255,255,255,0.5);
                            border-radius: 3px;
                            width: 0%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            z-index: 1;
                        }
                        .progress-thumb, .volume-thumb {
                          position: absolute;
                          top: 50%;
                          transform: translate(-50%, -50%);
                          width: 10px;
                          height: 10px;
                          border-radius: 50%;
                          background: white;
                          pointer-events: none;
                          z-index: 3;
                        }
                        .progress-tooltip {
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
                        .resolutions-menu {
                           width: 30px;
    height: 30px;
    display: inline-flex;
    top: -5px; position: relative;
                        }
                        .resolutions-menu button.settings-btn {
                            font-size: 1em;
                            padding: 0;
                            width: 24px;
                            height: 24px;
                            transition: transform 0.3s ease-in-out;
                        }
                        .resolutions-menu.open button.settings-btn {
                            transform: rotate(45deg);
                        }
                        .resolutions-menu .menu {
                          position: absolute;
                          bottom: 100%;
                          right: 0;
                          background: rgba(0, 0, 0, 0.8);
                          padding: 5px;
                          border-radius: 5px;
                          display: flex;
                          flex-direction: column;
                          gap: 5px;
                          white-space: nowrap;
                          max-height: 200px;
                          overflow-y: auto;
                        }
                        .resolutions-menu .menu.hidden {
                          display: none;
                        }
                        .resolutions-menu .menu button {
                          background: none;
                          border: none;
                          color: white;
                          padding: 8px; 
                          font-size: 1em;
                          text-align: right;
                        }
                        .resolutions-menu .menu button:hover {
                          background: #e50914;
                        }
                        .resolutions-menu .menu button.active {
                            font-weight: bold;
                            color: #e50914;
                        }
                        .player-container {
                            position: relative;
                            width: 100%;
                            height: 100%;
                        }
                        .context-menu {
                          position: fixed;
                          background: rgba(28, 28, 28, 0.9);
                          border-radius: 8px;
                          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                          padding: 8px 0;
                          z-index: 100;
                          display: none;
                          min-width: 150px; 
                        }
                        .context-menu.show {
                            display: block;
                        }
                        .context-menu-item {
                          display: flex;
                          justify-content: space-between;
                          align-items: center;
                          color: white;
                          padding: 10px 16px; 
                          font-size: 14px;
                          white-space: nowrap;
                        }
                        .context-menu-item:hover {
                          background-color: rgba(255, 255, 255, 0.1);
                        }
                        .context-menu-item .checkmark {
                          color: #e50914;
                          font-weight: bold;
                          margin-left: 10px;
                          display: none;
                        }
                        .context-menu-item.active .checkmark {
                          display: inline-block;
                        }
                        .context-menu-item.has-submenu {
                            position: relative;
                        }
                        .context-menu-item.has-submenu::after {
                            content: '▶';
                            font-size: 10px;
                            margin-left: auto;
                            color: #ccc;
                        }
                        .context-submenu {
                            position: absolute;
                            left: 100%;
                            top: 0;
                            background: rgba(28, 28, 28, 0.9);
                            border-radius: 8px;
                            padding: 8px 0;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                            display: none;
                        }
                        .context-menu-item.has-submenu:hover .context-submenu {
                            display: block;
                        }
                        .context-submenu .context-menu-item {
                            padding: 8px 16px;
                        }
                        .context-submenu .context-menu-item.active {
                            color: #e50914;
                        }
                    `;

        const root = document.createElement("div");
        root.className = "player-container";
        this.video.id = "video";
        this.video.playsInline = true;

        this.img_poster = document.createElement("img");
        this.img_poster.id = "poster";
        root.appendChild(this.img_poster);

        if (this.hasAttribute("autoplay")) this.video.autoplay = true;
        if (this.hasAttribute("loop")) this.video.loop = true;

        this.video.appendChild(
          document.createTextNode("Vaš pretraživač ne podržava video tag.")
        );

        const feedback = document.createElement("div");
        feedback.className = "video-feedback";
        this.controlsElement = document.createElement("div");
        this.controlsElement.className = "controls";

        this.progressBarContainer = document.createElement("div");
        this.progressBarContainer.className = "progress-bar-container";

        const progressBarBuffer = document.createElement("div");
        progressBarBuffer.className = "buffer";
        this.progressBarContainer.appendChild(progressBarBuffer);

        this.progressBarFill = document.createElement("div");
        this.progressBarFill.className = "progress-fill";
        this.progressBarThumb = document.createElement("div");
        this.progressBarThumb.className = "progress-thumb";
        this.progressBarTooltip = document.createElement("div");
        this.progressBarTooltip.className = "progress-tooltip";

        this.progressBarContainer.appendChild(this.progressBarFill);
        this.progressBarContainer.appendChild(this.progressBarThumb);
        this.progressBarContainer.appendChild(this.progressBarTooltip);
        this.controlsElement.appendChild(this.progressBarContainer);

        const controlsRow = document.createElement("div");
        controlsRow.className = "controls-row";
        const left = document.createElement("div");
        this.playBtn = document.createElement("button");
        this.playBtn.className = "play";
        this.playBtn.title = "Pusti/Pauziraj";
        this.playBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
        const volume = document.createElement("div");
        volume.className = "volume";
        this.muteBtn = document.createElement("button");
        this.muteBtn.className = "mute";
        this.muteBtn.title = "Uključi/isključi zvuk";
        this.muteBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
        this.volumeRangeContainer = document.createElement("div");
        this.volumeRangeContainer.className = "volume-range-container";
        this.volumeRangeFill = document.createElement("div");
        this.volumeRangeFill.className = "volume-fill";
        this.volumeRangeThumb = document.createElement("div");
        this.volumeRangeThumb.className = "volume-thumb";
        this.volumeRangeContainer.appendChild(this.volumeRangeFill);
        this.volumeRangeContainer.appendChild(this.volumeRangeThumb);
        volume.appendChild(this.muteBtn);
        volume.appendChild(this.volumeRangeContainer);
        this._hasAudio(this.video).then((audio) => {
          if (!audio) {
            volume.classList.add("no-audio");
          }
        });
        left.appendChild(this.playBtn);
        left.appendChild(volume);
        const timeDiv = document.createElement("div");
        timeDiv.className = "progress-time";
        this.currentTimeElement = document.createElement("span");
        this.currentTimeElement.className = "current-time";
        this.currentTimeElement.textContent = "0:00";
        this.durationElement = document.createElement("span");
        this.durationElement.className = "duration";
        this.durationElement.textContent = "0:00";
        timeDiv.appendChild(this.currentTimeElement);
        timeDiv.appendChild(document.createTextNode(" / "));
        timeDiv.appendChild(this.durationElement);
        left.appendChild(timeDiv);

        const right = document.createElement("div");

        this.resolutionsMenuContainer = document.createElement("div");
        this.resolutionsMenuContainer.className = "resolutions-menu";
        this.resolutionsBtn = document.createElement("button");
        this.resolutionsBtn.className = "settings-btn";
        this.resolutionsBtn.title = "Kvalitet";
        this.resolutionsBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>';
        this.resolutionsMenu = document.createElement("div");
        this.resolutionsMenu.className = "menu hidden";
        this.resolutionsMenuContainer.appendChild(this.resolutionsBtn);
        this.resolutionsMenuContainer.appendChild(this.resolutionsMenu);
        right.appendChild(this.resolutionsMenuContainer);

        this.pipBtn = document.createElement("button");
        this.pipBtn.className = "pip";
        this.pipBtn.title = "Slika u slici";
        this.pipBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>';
        this.fullBtn = document.createElement("button");
        this.fullBtn.className = "fullscreen";
        this.fullBtn.title = "Preko celog ekrana";
        this.fullBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>';
        right.appendChild(this.pipBtn);
        right.appendChild(this.fullBtn);
        controlsRow.appendChild(left);
        controlsRow.appendChild(right);
        this.controlsElement.appendChild(controlsRow);
        const tthis = this;
        this.controlsElement.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          tthis.contextMenu.classList.remove("show");
        });

        /* -|- */

        const svgNS = "http://www.w3.org/2000/svg";

        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 100 100");
        svg.setAttribute("preserveAspectRatio", "xMidYMid");

        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", "50");
        circle.setAttribute("cy", "50");
        circle.setAttribute("r", "32");
        circle.setAttribute("stroke-width", "8");
        circle.setAttribute("stroke", "#fff");
        circle.setAttribute(
          "stroke-dasharray",
          "50.26548245743669 50.26548245743669"
        );
        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke-linecap", "round");

        const anim = document.createElementNS(svgNS, "animateTransform");
        anim.setAttribute("id", "loaderAnim");
        anim.setAttribute("attributeName", "transform");
        anim.setAttribute("type", "rotate");
        anim.setAttribute("dur", "1s");
        anim.setAttribute("repeatCount", "indefinite");
        anim.setAttribute("keyTimes", "0;1");
        anim.setAttribute("values", "0 50 50;360 50 50");

        circle.appendChild(anim);
        svg.appendChild(circle);

        this.loader = svg;
        this.loader.setAttribute("id", "loader");

        Object.assign(this.loader.style, {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "30",
          width: "40px",
          pointerEvents: "none",
        });
        this._loaderAngle = 0;
        this._loaderBaseSpeed = 360; // deg/s  (1 krug = 1s)
        this._loaderMinSpeed = 120; // deg/s
        this._loaderMaxSpeed = 1600; // deg/s
        this._loaderSpeed = this._loaderBaseSpeed;
        this._loaderRaf = null;
        this._loaderLastTime = null;

        const reduceMQ = window.matchMedia?.(
          "(prefers-reduced-motion: reduce)"
        );
        const reduced = () => reduceMQ && reduceMQ.matches;

        this._loaderTick = (t) => {
          if (this._loaderLastTime == null) this._loaderLastTime = t;
          const dt = (t - this._loaderLastTime) / 1000;
          this._loaderLastTime = t;

          if (!reduced()) {
            this._loaderAngle =
              (this._loaderAngle + this._loaderSpeed * dt) % 360;
            circle.setAttribute(
              "transform",
              `rotate(${this._loaderAngle} 50 50)`
            );
          }

          this._loaderRaf = requestAnimationFrame(this._loaderTick);
        };
        this._loaderRaf = requestAnimationFrame(this._loaderTick);
        /* -|- */

        this.contextMenu = document.createElement("div");
        this.contextMenu.className = "context-menu";
        this.contextMenu.innerHTML = `
                        <div class="context-menu-item" data-action="loop">
                            Ponovi <span class="checkmark">✔</span>
                        </div>
                        <div class="context-menu-item has-submenu" data-action="resolution">
                            Rezolucija
                            <div class="context-submenu">
                                </div>
                        </div>
                        <div class="context-menu-item" data-action="fullscreen">
                            Preko celog ekrana
                        </div>
                    `;
         
        this.shadowRoot.append(
          style,
          root,
          this.video,
          feedback,
          this.controlsElement,
          this.loader
        );
        this.shadowRoot.appendChild(document.createElement("c-c"));
        /*, this.contextMenu);*/
        this.video.addEventListener("contextmenu", (e) => e.preventDefault());

        this.playerContainer =
          this.shadowRoot.querySelector(".player-container");
        this.progressBarContainer = this.shadowRoot.querySelector(
          ".progress-bar-container"
        );
        this.progressBarBuffer = this.shadowRoot.querySelector(".buffer");
        this.progressBarFill = this.shadowRoot.querySelector(".progress-fill");
        this.progressBarThumb =
          this.shadowRoot.querySelector(".progress-thumb");
        this.progressBarThumb.appendChild(this.loader);
        this.progressBarTooltip =
          this.shadowRoot.querySelector(".progress-tooltip");
        this.volumeRangeContainer = this.shadowRoot.querySelector(
          ".volume-range-container"
        );
        this.volumeRangeFill = this.shadowRoot.querySelector(".volume-fill");
        this.volumeRangeThumb = this.shadowRoot.querySelector(".volume-thumb");
        this.currentTimeElement =
          this.shadowRoot.querySelector(".current-time");
        this.durationElement = this.shadowRoot.querySelector(".duration");
        this.playBtn = this.shadowRoot.querySelector(".play");
        this.muteBtn = this.shadowRoot.querySelector(".mute");
        this.fullBtn = this.shadowRoot.querySelector(".fullscreen");
        this.pipBtn = this.shadowRoot.querySelector(".pip");
        this.resolutionsMenuContainer =
          this.shadowRoot.querySelector(".resolutions-menu");
        this.resolutionsBtn =
          this.resolutionsMenuContainer.querySelector(".settings-btn");
        this.resolutionsMenu =
          this.resolutionsMenuContainer.querySelector(".menu");

        this._setupEventListeners();

        // Postavite početne atribute nakon što je DOM kreiran
        const poster =
          this.getAttribute("poster") || this.getAttribute("data-poster");
        if (poster) {
          this.img_poster.src = poster;
        } else {
          this.img_poster.style.display = "none";
        }
        const stream = this.getAttribute("data-stream");
        const src = this.getAttribute("src") || this.getAttribute("data-src");
        if (stream) {
          this._setStream(stream);
        } else if (src) {
          this._setMp4(src);
        }
        if (!stream) {
          this.resolutionsMenuContainer.style.display = "none";
        }


      }

      _setupEventListeners() {
        const video = this.video;

        document.addEventListener(
          "fullscreenchange",
          this._handleFullscreenChange.bind(this)
        );
        this.playerContainer.addEventListener(
          "mousemove",
          this._handleFullscreenMouseMove.bind(this)
        );

        this.video.addEventListener(
          "contextmenu",
          this._showContextMenu.bind(this)
        );
        document.addEventListener("click", this._hideContextMenu.bind(this));

        this.contextMenu
          .querySelector('[data-action="loop"]')
          .addEventListener("click", () => this._toggleLoop());
        this.contextMenu
          .querySelector('[data-action="fullscreen"]')
          .addEventListener("click", () => this._toggleFullscreen());

        video.addEventListener("play", () => {
          this.playBtn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
          if (this.img_poster) {
            this.img_poster.style.display = "none";
          }
        });

        video.addEventListener("pause", () => {
          this.playBtn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
        });

        video.addEventListener("loadedmetadata", () => {
          this.durationElement.textContent = this._formatTime(video.duration);
          this.volumeRangeFill.style.width = video.volume * 100 + "%";
          this.volumeRangeThumb.style.left = video.volume * 100 + "%";
          this._updateLoopState();
          this._hasAudio(video).then((audio) => {
            this.shadowRoot
              .querySelector(".volume")
              .classList.toggle("no-audio", !audio);
          });
        });

        video.addEventListener("timeupdate", () => {
          this._updateProgress();
        });

        video.addEventListener("progress", () => {
          if (
            video.duration > 0 &&
            video.buffered.length > 0 &&
            this.progressBarBuffer
          ) {
            const bufferedEnd = video.buffered.end(video.buffered.length - 1);
            const bufferPercent = (bufferedEnd / video.duration) * 100;
            this.progressBarBuffer.style.width = `${bufferPercent}%`;
          }
        });

        this.playBtn.addEventListener("click", () => this._togglePlayPause());
        this.muteBtn.addEventListener("click", () => this._toggleMute());
        this.fullBtn.addEventListener("click", () => this._toggleFullscreen());
        this.pipBtn.addEventListener("click", () => this._togglePip());

        this.progressBarContainer.addEventListener("mousedown", (e) =>
          this._startDrag(e)
        );
        this.progressBarContainer.addEventListener("touchstart", (e) =>
          this._startDrag(e)
        );
        this.progressBarContainer.addEventListener("mousemove", (e) =>
          this._updateProgressTooltip(e)
        );
        this.progressBarContainer.addEventListener(
          "mouseleave",
          () => (this.progressBarTooltip.style.display = "none")
        );

        this.volumeRangeContainer.addEventListener("mousedown", (e) =>
          this._startVolumeDrag(e)
        );
        this.volumeRangeContainer.addEventListener("touchstart", (e) =>
          this._startVolumeDrag(e)
        );

        window.addEventListener("mouseup", () => this._endDrag());
        window.addEventListener("touchend", () => this._endDrag());

        window.addEventListener("mousemove", (e) => this._doDrag(e));
        window.addEventListener("touchmove", (e) => this._doDrag(e));

        this.resolutionsBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.resolutionsMenu.classList.toggle("hidden");
          this.resolutionsMenuContainer.classList.toggle("open");
        });

        document.addEventListener("click", (e) => {
          if (
            !this.resolutionsMenu.contains(e.target) &&
            !this.resolutionsBtn.contains(e.target)
          ) {
            this.resolutionsMenu.classList.add("hidden");
            this.resolutionsMenuContainer.classList.remove("open");
          }
        });
        this.playerContainer.tabIndex = 0;  

     

        this._onKeydown = (e) => {
            const isSpace = e.code === 'Space' || e.key === ' ';
            const isMediaToggle = e.code === 'MediaPlayPause';
          
            if (!(isSpace || isMediaToggle) || e.altKey || e.ctrlKey || e.metaKey) return;
           
            const path = e.composedPath ? e.composedPath() : [e.target];
            const tgt = path[0];
            if (tgt && tgt.closest && tgt.closest('button,input,textarea,select,a,[contenteditable="true"]')) return;
          
            e.preventDefault();  
            this._togglePlayPause();
          }; 
          this.playerContainer.addEventListener('keydown', this._onKeydown);
           
          this.playerContainer.addEventListener('mousedown', () => {
            this.playerContainer.focus({ preventScroll: true });
          });
      }

      _handleFullscreenChange() {
        const isFullscreen =
          document.fullscreenElement === this.playerContainer;
        if (isFullscreen) {
          this.setAttribute("data-fullscreen", "1");
          this.controlsElement.classList.add("visible"); 
          
         } else {
          this.removeAttribute("data-fullscreen");
          this.controlsElement.classList.remove("visible");
           
          clearTimeout(this._controlsTimeout);
        }
      }

      _handleFullscreenMouseMove() {
        if (document.fullscreenElement === this.playerContainer) {
          this.controlsElement.classList.add("visible");
          clearTimeout(this._controlsTimeout);
          this._controlsTimeout = setTimeout(() => {
            this.controlsElement.classList.remove("visible");
          }, 3000);
        }
      }

      _showContextMenu(e) {
        return;
        e.preventDefault();
        const menu = this.contextMenu;

        menu.style.left = "10px";
        menu.style.top = "10px";

        menu.classList.add("show");
        this._updateLoopState();
        this._populateContextMenuResolution();
      }

      _hideContextMenu(e) {
        if (
          this.contextMenu.classList.contains("show") &&
          !this.contextMenu.contains(e.target)
        ) {
          this.contextMenu.classList.remove("show");
        }
      }

      _togglePlayPause() {
        if (this.video.paused) {
          this.video.play();
        } else {
          this.video.pause();
        }
      }

      _toggleLoop() {
        this.video.loop = !this.video.loop;
        this._updateLoopState();
        this.contextMenu.classList.remove("show");
      }

      _updateLoopState() {
        const loopItem = this.contextMenu.querySelector('[data-action="loop"]');
        if (this.video.loop) {
          loopItem.classList.add("active");
        } else {
          loopItem.classList.remove("active");
        }
      }

      _toggleMute() {
        if (this.video.volume > 0) {
          this._prevVolume = this.video.volume;
          this.video.volume = 0;
          this.muteBtn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7.85 2.15L3.85 6.15H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1.85L7.85 21.85c.3.3.75.47 1.2.47.4 0 .8-.15 1.1-.47.6-.6.6-1.55 0-2.15L9 16.2V7.8L10.15 4.15c.6-.6.6-1.55 0-2.15-.6-.6-1.55-.6-2.15 0zm10.5 7.85c-.34-.73-1.09-1.2-1.93-1.2-1.29 0-2.34 1.05-2.34 2.34v.26c0 1.29 1.05 2.34 2.34 2.34.84 0 1.59-.47 1.93-1.2.34-.73.23-1.63-.3-2.22l-.12-.13c.53-.59.64-1.49.3-2.22z"/></svg>';
          this.volumeRangeFill.style.width = "0%";
          this.volumeRangeThumb.style.left = "0%";
        } else {
          this.video.volume = this._prevVolume > 0 ? this._prevVolume : 0.5;
          this.muteBtn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
          this.volumeRangeFill.style.width = this.video.volume * 100 + "%";
          this.volumeRangeThumb.style.left = this.video.volume * 100 + "%";
        }
      }

      _updateProgress() {
        const video = this.video;
        this.currentTimeElement.textContent = this._formatTime(
          video.currentTime
        );
        if (isFinite(video.duration) && !this._isProgressBarDragging) {
          const percent = video.currentTime / video.duration;
          this.progressBarFill.style.width = `${percent * 100}%`;
          this.progressBarThumb.style.left = `${percent * 100}%`;
        }
      }

      _updateProgressTooltip(e) {
        if (!this.video || isNaN(this.video.duration)) {
          this.progressBarTooltip.style.display = "none";
          return;
        }
        const rect = this.progressBarContainer.getBoundingClientRect();
        const percent = Math.min(
          Math.max((e.clientX - rect.left) / rect.width, 0),
          1
        );
        const time = this.video.duration * percent;
        this.progressBarTooltip.textContent = this._formatTime(time);
        this.progressBarTooltip.style.left = `${percent * 100}%`;
        this.progressBarTooltip.style.display = "block";
      }

      _startDrag(e) {
        this._isProgressBarDragging = true;
        this._wasPlaying = !this.video.paused;
        this.video.pause();
        this._doDrag(e);
        this._loaderSpeed = 800;
        if (!this.loader.classList.contains("loading")) {
            this.loader.classList.add("loading");
          }
      }

      _endDrag() {
        if (this._isProgressBarDragging) {
          this._isProgressBarDragging = false;
          if (this._wasPlaying) {
            this.video.play();
          }
        }
        if (this.loader.classList.contains("loading")) {
          this.loader.classList.remove("loading");
          this._loaderSpeed = this._loaderBaseSpeed;
          this._lastTouchX = null;
        }
        

        this._isVolumeDragging = false;
      }

      _doDrag(e) {
        if (this._isProgressBarDragging) {
          const rect = this.progressBarContainer.getBoundingClientRect();
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          let percent = (clientX - rect.left) / rect.width;
          percent = Math.max(0, Math.min(1, percent));
          this.video.currentTime = percent * this.video.duration;
          this.progressBarFill.style.width = `${percent * 100}%`;
          this.progressBarThumb.style.left = `${percent * 100}%`;
          if (!this.loader.classList.contains("loading")) {
            this.loader.classList.add("loading");
          }
          let movement = 0;
          if (e.touches && e.touches[0]) {
            const tx = e.touches[0].clientX;
            movement =
              this._lastTouchX != null ? Math.abs(tx - this._lastTouchX) : 0;
            this._lastTouchX = tx;
          } else {
            movement = Math.abs(e.movementX || 0);
          }

          if (movement < 0.5) {
            this._loaderSpeed = this._loaderBaseSpeed;
          } else {
            const k = 50;
            const target = this._loaderBaseSpeed + movement * k;
            this._loaderSpeed = Math.max(
              this._loaderMinSpeed,
              Math.min(this._loaderMaxSpeed, target)
            );
          }
          
        }

        if (this._isVolumeDragging) {
          const rect = this.volumeRangeContainer.getBoundingClientRect();
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          let percent = (clientX - rect.left) / rect.width;
          percent = Math.max(0, Math.min(1, percent));
          this.video.volume = percent;
          this.volumeRangeFill.style.width = `${percent * 100}%`;
          this.volumeRangeThumb.style.left = `${percent * 100}%`;
           
        }
      }

      _startVolumeDrag(e) {
        this._isVolumeDragging = true;
        this._doDrag(e);
      }

      _formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      }

      _toggleFullscreen() {
        if (!document.fullscreenElement) {
          
          this.requestFullscreen(); 
          this.setAttribute("data-fullscreen", "1");
        } else {
          document.exitFullscreen(); 
                  this.setAttribute("data-fullscreen", "1");

        }
        this.contextMenu.classList.remove("show");
      }

      _togglePip() {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        } else {
          this.video.requestPictureInPicture().catch((err) => {
            
          });
        }
      }

      _hasAudio(video) {
        return new Promise((resolve) => {
          const timeout = setTimeout(() => {
            resolve(false);
          }, 1000);
          const checkAudio = () => {
            if (video.audioTracks && video.audioTracks.length > 0) {
              resolve(true);
            } else if (video.webkitAudioDecodedByteCount > 0) {
              resolve(true);
            } else {
              resolve(false);
            }
          };
          video.addEventListener("loadedmetadata", checkAudio, { once: true });
          video.addEventListener("canplay", checkAudio, { once: true });
        });
      }

      _populateResolutionMenu() {
        if (!this._hls || !this.resolutionsMenu) return;

        this.resolutionsMenu.innerHTML = "";

        const autoBtn = document.createElement("button");
        autoBtn.textContent = "Auto";
        autoBtn.classList.add("resolution-option");
        if (this._hls.currentLevel === -1) {
          autoBtn.classList.add("active");
        }
        autoBtn.addEventListener("click", () => {
          this._hls.currentLevel = -1;
          this._updateResolutionButtons(-1);
          this.resolutionsMenu.classList.add("hidden");
          this.resolutionsMenuContainer.classList.remove("open");
        });
        this.resolutionsMenu.appendChild(autoBtn);

        this._hls.levels.forEach((level, index) => {
          const resolutionBtn = document.createElement("button");
          resolutionBtn.textContent = `${level.height}p`;
          resolutionBtn.classList.add("resolution-option");
          if (this._hls.currentLevel === index) {
            resolutionBtn.classList.add("active");
          }
          resolutionBtn.addEventListener("click", () => {
            this._hls.currentLevel = index;
            this._updateResolutionButtons(index);
            this.resolutionsMenu.classList.add("hidden");
            this.resolutionsMenuContainer.classList.remove("open");
          });
          this.resolutionsMenu.appendChild(resolutionBtn);
        });
      }

      _populateContextMenuResolution() {
        const submenu = this.contextMenu.querySelector(".context-submenu");
        if (!this._hls || !submenu) return;
        submenu.innerHTML = "";

        const autoItem = document.createElement("div");
        autoItem.className = "context-menu-item";
        autoItem.innerHTML = `Auto <span class="checkmark">✔</span>`;
        autoItem.addEventListener("click", (e) => {
          e.stopPropagation();
          this._hls.currentLevel = -1;
          this._updateContextMenuResolutionButtons(-1);
          this.contextMenu.classList.remove("show");
        });
        if (this._hls.currentLevel === -1) autoItem.classList.add("active");
        submenu.appendChild(autoItem);

        this._hls.levels.forEach((level, index) => {
          const item = document.createElement("div");
          item.className = "context-menu-item";
          item.innerHTML = `${level.height}p <span class="checkmark">✔</span>`;
          item.addEventListener("click", (e) => {
            e.stopPropagation();
            this._hls.currentLevel = index;
            this._updateContextMenuResolutionButtons(index);
            this.contextMenu.classList.remove("show");
          });
          if (this._hls.currentLevel === index) item.classList.add("active");
          submenu.appendChild(item);
        });
      }

      _updateContextMenuResolutionButtons(activeIndex) {
        const submenu = this.contextMenu.querySelector(".context-submenu");
        submenu
          .querySelectorAll(".context-menu-item")
          .forEach((item, index) => {
            if (activeIndex === -1 && index === 0) {
              item.classList.add("active");
            } else if (index === activeIndex + 1) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });
      }

      _updateResolutionButtons(activeIndex = this._hls.currentLevel) {
        this.resolutionsMenu
          .querySelectorAll(".resolution-option")
          .forEach((btn, index) => {
            if (activeIndex === -1 && index === 0) {
              btn.classList.add("active");
            } else if (index === activeIndex + 1) {
              btn.classList.add("active");
            } else {
              btn.classList.remove("active");
            }
          });
      }
    }
  );
}


(function () {
    const originals = {
      error: console.error,
      warn: console.warn,
      info: console.info,
    };
   
    function makeNativeLikeNoop(name) {
      const fn = function () {};
      try {
        Object.defineProperty(fn, "name", { value: name, configurable: false });
      } catch (_) {}
      fn.toString = function () { return `function ${name}() { [native code] }`; };
      return fn;
    }
   
    window.__muteConsole__ = {
      enabled: false,
      unsubs: [],
      enable({ errors = true, warns = false, infos = false } = {}) {
        if (this.enabled) return;
        this.enabled = true;
  
        if (errors) console.error = makeNativeLikeNoop("error");
        if (warns)  console.warn  = makeNativeLikeNoop("warn");
        if (infos)  console.info  = makeNativeLikeNoop("info");
   
        const onErr = (ev) => { 
          if (ev?.preventDefault) ev.preventDefault();
          return true;
        };
        window.addEventListener("error", onErr, true);
        this.unsubs.push(() => window.removeEventListener("error", onErr, true));
   
        const onRej = (ev) => {
          if (ev?.preventDefault) ev.preventDefault();
        };
        window.addEventListener("unhandledrejection", onRej);
        this.unsubs.push(() => window.removeEventListener("unhandledrejection", onRej));
      },
      restore() {
        if (!this.enabled) return;
        this.enabled = false;
        console.error = originals.error;
        console.warn  = originals.warn;
        console.info  = originals.info;
        this.unsubs.splice(0).forEach(fn => { try { fn(); } catch (_) {} });
      }
    };
    //window.__muteConsole__.enable({ errors: false, warns: false, infos: false });

  })();