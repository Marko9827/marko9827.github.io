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
  
  