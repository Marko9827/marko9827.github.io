if (!customElements.get('video-player-v2')) {
  customElements.define('video-player-v2', class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
      this._prevVolume = 1;
      this.observer = null;
      this.video = document.createElement("video");
      this._hls = null;
      this._isProgressBarDragging = false;
      this._wasPlaying = false;
      this._isVolumeDragging = false;
      
      // Cache DOM elements that will be used across different methods
      this.progressBarContainer = null;
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
    }

    static get observedAttributes() {
      return ['src', 'data-src', 'poster', 'data-poster', 'data-stream', 'autoplay', 'loop'];
    }

    attributeChangedCallback(name, oldV, newV) {
      if (oldV === newV) return;
      if (!this.isConnected) return;

      if (name === 'data-stream') {
        const url = (newV || '').replace(/&amp;/g, '&');
        this._setStream(url);
      } else if (name === 'src' || name === 'data-src') {
        this._setMp4(this.getAttribute('src') || this.getAttribute('data-src'));
      } else if (name === 'poster' || name === 'data-poster') {
        this.video.poster = this.getAttribute('poster') || this.getAttribute('data-poster') || '';
      } else if (name === 'autoplay') {
        this.video.autoplay = newV !== null;
      } else if (name === 'loop') {
        this.video.loop = newV !== null;
      }
    }

    _setStream(streamUrl) {
      if (!streamUrl) return;
      streamUrl = streamUrl.replace(/&amp;/g, '&');

      if (this._hls) {
        this._hls.destroy();
        this._hls = null;
      }

      if (this.video.canPlayType('application/vnd.apple.mpegurl')) {
        this.video.src = streamUrl;
        this.video.addEventListener('loadedmetadata', () => {
          if (this.hasAttribute('autoplay')) {
            this.video.play().catch(e => console.warn("Autoplay was blocked.", e));
          }
        }, {
          once: true
        });
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

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
              if (this.hasAttribute('autoplay')) {
                this.video.play().catch(e => console.warn("Autoplay was blocked.", e));
              }
            });

            hls.on(Hls.Events.ERROR, (event, data) => {
              console.error('[hls.js] error:', data);
              if (data.fatal) {
                switch (data.type) {
                  case Hls.ErrorTypes.NETWORK_ERROR:
                    console.error('Fatal network error, trying to recover...');
                    hls.startLoad();
                    break;
                  case Hls.ErrorTypes.MEDIA_ERROR:
                    console.error('Fatal media error, trying to recover...');
                    hls.recoverMediaError();
                    break;
                  default:
                    hls.destroy();
                    break;
                }
              }
            });
          }
        };
        if (window.Hls) {
          bootHls();
        } else {
          this._loadScript('https://cdn.jsdelivr.net/npm/hls.js@1')
            .then(bootHls)
            .catch(() => console.error('Failed to load hls.js library.'));
        }
      }
    }

    _setMp4(src) {
      if (!src) return;
      if (this._hls) {
        this._hls.destroy();
        this._hls = null;
      }
      this.video.src = src;
      this.video.load();
      if (this.hasAttribute('autoplay')) {
        this.video.play().catch(e => console.warn("Autoplay was blocked.", e));
      }
    }

    disconnectedCallback() {
      if (this._hls) {
        this._hls.destroy();
      }
      if (this.observer) {
        this.observer.disconnect();
      }
    }

    async _loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    connectedCallback() {
      this.observer = new MutationObserver((mutations) => {});
      this.observer.observe(this.shadowRoot, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
      const style = document.createElement('style');
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
          object-fit: contain;
          background: black;
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
        }
        :host(:hover) .controls {
          opacity: 1;
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
          font-size: 0.8em;
        }
        button {
          background: none;
          border: none;
          color: white;
          font-size: 1.4em;
          cursor: pointer;
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
        img#loader {
          display: none;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 30;
          width: 40px;
        }

        .progress-bar-container, .volume-range-container {
          height: 6px;
          background: rgba(255,255,255,0.3);
          border-radius: 3px;
          cursor: pointer;
          
          position: relative;
        }
        .progress-bar-container {
          width: 100%;
          margin-top: -4px;
        }
        .volume-range-container {
          width: 60px;
        }
        .progress-fill, .volume-fill {
          height: 100%;
          background: linear-gradient(270deg, red, rgb(255 0 0 / 60%));
          border-radius: 3px;
          width: 0%;
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
      `;

      const src = this.getAttribute('src') || this.getAttribute("data-src");
      const poster = this.getAttribute('poster') || this.getAttribute('data-poster');
      const stream = this.getAttribute('data-stream');

      const root = document.createElement("div");
      const video = this.video;
      this.img_poster = document.createElement("img");
      this.img_poster.id = "poster";
      video.id = 'video';
      video.playsInline = true;

      if (poster) {
        this.img_poster.src = poster;
        root.appendChild(this.img_poster);
      }
      if (this.hasAttribute('autoplay')) this.video.autoplay = true;
      if (this.hasAttribute('loop')) this.video.loop = true;

      /*
      if (stream) {
        this._setStream(stream);
      } else if (src) {
        this._setMp4(src);
      }*/

      video.appendChild(document.createTextNode('Your browser does not support the video tag.'));

      const feedback = document.createElement('div');
      feedback.className = 'video-feedback';
      const controls = document.createElement('div');
      controls.className = 'controls';
      
      // Progress Bar
      this.progressBarContainer = document.createElement('div');
      this.progressBarContainer.className = 'progress-bar-container';
      this.progressBarFill = document.createElement('div');
      this.progressBarFill.className = 'progress-fill';
      this.progressBarThumb = document.createElement('div');
      this.progressBarThumb.className = 'progress-thumb';
      this.progressBarTooltip = document.createElement('div');
      this.progressBarTooltip.className = 'progress-tooltip';
      this.progressBarContainer.appendChild(this.progressBarFill);
      this.progressBarContainer.appendChild(this.progressBarThumb);
      this.progressBarContainer.appendChild(this.progressBarTooltip);
      controls.appendChild(this.progressBarContainer);

      const controlsRow = document.createElement('div');
      controlsRow.className = 'controls-row';
      const left = document.createElement('div');
      this.playBtn = document.createElement('button');
      this.playBtn.className = 'play';
      this.playBtn.title = 'Play/Pause';
      this.playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
      const volume = document.createElement('div');
      volume.className = 'volume';
      this.muteBtn = document.createElement('button');
      this.muteBtn.className = 'mute';
      this.muteBtn.title = 'Mute/Unmute';
      this.muteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
      
      // Volume Range
      this.volumeRangeContainer = document.createElement('div');
      this.volumeRangeContainer.className = 'volume-range-container';
      this.volumeRangeFill = document.createElement('div');
      this.volumeRangeFill.className = 'volume-fill';
      this.volumeRangeThumb = document.createElement('div');
      this.volumeRangeThumb.className = 'volume-thumb';
      this.volumeRangeContainer.appendChild(this.volumeRangeFill);
      this.volumeRangeContainer.appendChild(this.volumeRangeThumb);

      volume.appendChild(this.muteBtn);
      volume.appendChild(this.volumeRangeContainer);

      this._hasAudio(video).then(audio => {
        if (!audio) {
          volume.classList.add("no-audio");
        }
      });

      left.appendChild(this.playBtn);
      left.appendChild(volume);
      const timeDiv = document.createElement('div');
      timeDiv.className = 'progress-time';
      this.currentTimeElement = document.createElement('span');
      this.currentTimeElement.className = 'current-time';
      this.currentTimeElement.textContent = '0:00';
      this.durationElement = document.createElement('span');
      this.durationElement.className = 'duration';
      this.durationElement.textContent = '0:00';
      timeDiv.appendChild(this.currentTimeElement);
      timeDiv.appendChild(document.createTextNode(' / '));
      timeDiv.appendChild(this.durationElement);
      left.appendChild(timeDiv);
      const right = document.createElement('div');
      this.pipBtn = document.createElement('button');
      this.pipBtn.className = 'pip';
      this.pipBtn.title = 'Picture-in-Picture';
      this.pipBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>';
      this.fullBtn = document.createElement('button');
      this.fullBtn.className = 'fullscreen';
      this.fullBtn.title = 'Fullscreen';
      this.fullBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>';
      right.appendChild(this.pipBtn);
      right.appendChild(this.fullBtn);
      controlsRow.appendChild(left);
      controlsRow.appendChild(right);
      controls.appendChild(controlsRow);
      this.loader = document.createElement("img");
      this.loader.id = "loader";
      this.loader.src = 'data:image/svg+xml;base64,' + btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:0 0"><circle cx="50" cy="50" r="32" stroke-width="8" stroke="#fff" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"/></circle></svg>`);

      this.shadowRoot.append(style, root, video, feedback, controls, this.loader);

      this.shadowRoot.addEventListener("contextmenu", e => e.preventDefault());

      this._setupEventListeners();
    }

    _setupEventListeners() {
      const video = this.video;

      video.addEventListener('loadedmetadata', () => {
        this.durationElement.textContent = this._formatTime(video.duration);
      });
      video.addEventListener('timeupdate', () => {
        this.currentTimeElement.textContent = this._formatTime(video.currentTime);
        if (isFinite(video.duration) && !this._isProgressBarDragging) {
          const percent = video.currentTime / video.duration;
          this._updateProgressBar(percent);
        }
      });
      video.addEventListener('waiting', () => {
        this.loader.style.display = 'block';
      });
      video.addEventListener('canplay', () => {
        this.loader.style.display = 'none';
      });
      video.addEventListener('playing', () => {
        this.loader.style.display = 'none';
        if (this.img_poster) this.img_poster.style.display = 'none';
        this.playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
      });
      video.addEventListener('pause', () => {
        this.playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
      });

      // Progress Bar Logic
      this.progressBarContainer.addEventListener('mousedown', (e) => {
        if (this.video && isFinite(this.video.duration)) {
          this._wasPlaying = !this.video.paused;
          this.video.pause();
        }
        this._isProgressBarDragging = true;
        this._handleProgressBarDrag(e);
      });
      window.addEventListener('mousemove', (e) => {
        if (this._isProgressBarDragging) this._handleProgressBarDrag(e);
        this._updateProgressTooltip(e);
      });
      window.addEventListener('mouseup', () => {
        if (this._isProgressBarDragging) {
          this._isProgressBarDragging = false;
          if (this.video && this._wasPlaying) {
            this.video.play();
          }
        }
      });
      this.progressBarContainer.addEventListener('mouseleave', () => {
        this.progressBarTooltip.style.display = 'none';
      });

      this.playBtn.addEventListener('click', () => {
        if (video.paused) {
          if (this.getAttribute('data-stream') && !this._hls && !video.src) { 
            this._setStream(this.getAttribute('data-stream'));
          }
          video.play();
        } else {
          video.pause();
        }
      });
      video.addEventListener('click', () => this.playBtn.click());

      video.volume = 1;
      this._updateVolumeBar(1);

      this.muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
      });

      video.addEventListener('volumechange', () => {
        const volumeValue = video.muted ? 0 : video.volume;
        this._updateVolumeBar(volumeValue);
        if (video.muted || video.volume === 0) {
          this.muteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
        } else {
          this.muteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
        }
      });

      // Volume Range Logic
      this.volumeRangeContainer.addEventListener('mousedown', (e) => {
        this._isVolumeDragging = true;
        this._handleVolumeDrag(e);
      });
      window.addEventListener('mousemove', (e) => {
        if (this._isVolumeDragging) this._handleVolumeDrag(e);
      });
      window.addEventListener('mouseup', () => {
        if (this._isVolumeDragging) this._isVolumeDragging = false;
      });

      this.fullBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          this.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      });

      document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement === this) {
          this.fullBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>';
        } else {
          this.fullBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>';
        }
      });

      this.pipBtn.addEventListener('click', () => {
        if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
          video.requestPictureInPicture?.();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.fullscreenElement) {
          document.exitFullscreen?.();
        } else if (e.code === 'Space') {
          e.preventDefault();
          this.playBtn.click();
        }
      });
    }
    
    // Helper Methods moved to the class
    _formatTime(t) {
      return isFinite(t) ? `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}` : '0:00';
    }

    _hasAudio(videoElement) {
      return new Promise((resolve) => {
        if (videoElement.readyState >= 1) {
          resolve(this._checkAudioTracks(videoElement));
        } else {
          videoElement.addEventListener('loadedmetadata', () => {
            resolve(this._checkAudioTracks(videoElement));
          }, {
            once: true
          });
        }
      });
    }

    _checkAudioTracks(video) {
      if (typeof video.mozHasAudio !== "undefined") return video.mozHasAudio;
      if (video.webkitAudioDecodedByteCount !== undefined) return video.webkitAudioDecodedByteCount > 0;
      if (video.audioTracks && video.audioTracks.length > 0) return true;
      return false;
    }

    _handleProgressBarDrag(e) {
      const rect = this.progressBarContainer.getBoundingClientRect();
      const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      this._updateProgressBar(percent);
      if (this.video && isFinite(this.video.duration)) {
        this.video.currentTime = this.video.duration * percent;
      }
    }

    _updateProgressBar(percent) {
      this.progressBarFill.style.width = `${percent * 100}%`;
      this.progressBarThumb.style.left = `${percent * 100}%`;
    }
    
    _updateProgressTooltip(e) {
        if (!this.video || isNaN(this.video.duration)) {
          this.progressBarTooltip.style.display = 'none';
          return;
        }
        const rect = this.progressBarContainer.getBoundingClientRect();
        const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
        const time = this.video.duration * percent;
        this.progressBarTooltip.textContent = this._formatTime(time);
        this.progressBarTooltip.style.left = `${percent * 100}%`;
        this.progressBarTooltip.style.display = 'block';
    }

    _handleVolumeDrag(e) {
      const rect = this.volumeRangeContainer.getBoundingClientRect();
      const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      this.video.volume = percent;
      this.video.muted = percent === 0;
    }

    _updateVolumeBar(val) {
      this.volumeRangeFill.style.width = `${val * 100}%`;
      this.volumeRangeThumb.style.left = `${val * 100}%`;
    }
  });
}
