(() => {
  const STATE = new WeakMap();

  /**
   * Creates the custom cursor SVG.
   * @returns {SVGSVGElement}
   */
  function createCursorSvg() {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "custom-cursor-svg hidden");
    svg.setAttribute("width", "35");
    svg.setAttribute("height", "35");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.style.left = "-100%";
    svg.style.top = "-100%";

    const defs = document.createElementNS(svgNS, "defs");
    const radialGradient = document.createElementNS(svgNS, "radialGradient");
    radialGradient.setAttribute("id", "glow");
    radialGradient.setAttribute("cx", "50%");
    radialGradient.setAttribute("cy", "50%");
    radialGradient.setAttribute("r", "50%");

    const stop1 = document.createElementNS(svgNS, "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#fff");
    stop1.setAttribute("stop-opacity", "1");

    const stop2 = document.createElementNS(svgNS, "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#fff");
    stop2.setAttribute("stop-opacity", "0");

    radialGradient.appendChild(stop1);
    radialGradient.appendChild(stop2);
    defs.appendChild(radialGradient);
    svg.appendChild(defs);

    const circle1 = document.createElementNS(svgNS, "circle");
    circle1.setAttribute("cx", "50");
    circle1.setAttribute("cy", "50");
    circle1.setAttribute("r", "20");
    circle1.setAttribute("stroke", "#fff");
    circle1.setAttribute("stroke-width", "4");
    circle1.setAttribute("fill", "none");
    svg.appendChild(circle1);

    const circle2 = document.createElementNS(svgNS, "circle");
    circle2.setAttribute("cx", "50");
    circle2.setAttribute("cy", "50");
    circle2.setAttribute("r", "35");
    circle2.setAttribute("fill", "url(#glow)");
    circle2.setAttribute("opacity", "0.4");

    const animateTransform = document.createElementNS(svgNS, "animateTransform");
    animateTransform.setAttribute("attributeName", "transform");
    animateTransform.setAttribute("type", "rotate");
    animateTransform.setAttribute("from", "0 50 50");
    animateTransform.setAttribute("to", "360 50 50");
    animateTransform.setAttribute("dur", "2s");
    animateTransform.setAttribute("repeatCount", "indefinite");
    circle2.appendChild(animateTransform);
    svg.appendChild(circle2);

    const circle3 = document.createElementNS(svgNS, "circle");
    circle3.setAttribute("cx", "50");
    circle3.setAttribute("cy", "50");
    circle3.setAttribute("r", "3");
    circle3.setAttribute("fill", "#fff");

    const animate = document.createElementNS(svgNS, "animate");
    animate.setAttribute("attributeName", "r");
    animate.setAttribute("values", "3;6;3");
    animate.setAttribute("dur", "1.2s");
    animate.setAttribute("repeatCount", "indefinite");
    circle3.appendChild(animate);
    svg.appendChild(circle3);

    return svg;
  }

  /**
   * Creates the network loader SVG.
   * @returns {SVGSVGElement}
   */
  function createLoaderSvg() {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'network-loader');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid');
    svg.style.background = 'none';
    svg.style.opacity = '0'; // Initially hidden
    
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', '50');
    circle.setAttribute('cy', '50');
    circle.setAttribute('r', '32');
    circle.setAttribute('stroke-width', '8');
    circle.setAttribute('stroke', '#fff');
    circle.setAttribute('stroke-dasharray', '50.26548245743669 50.26548245743669');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke-linecap', 'round');
    svg.appendChild(circle);
    
    const animate = document.createElementNS(svgNS, 'animateTransform');
    animate.setAttribute('attributeName', 'transform');
    animate.setAttribute('type', 'rotate');
    animate.setAttribute('dur', '1s');
    animate.setAttribute('repeatCount', 'indefinite');
    animate.setAttribute('keyTimes', '0;1');
    animate.setAttribute('values', '0 50 50;360 50 50');
    circle.appendChild(animate);
    
    return svg;
  }

  function attachStyle(shadowRoot) {
    const style = document.createElement("style");
    style.textContent = `
       :host {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 2147483647;
      }
      .custom-cursor-svg {
        position: fixed;
        width: 35px;
        height: 35px;
        left: -100%;
        top: -100%;
        pointer-events: none;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        -webkit-filter: drop-shadow(0 0 2px rgba(255,255,255,0.6));
                filter: drop-shadow(0 0 2px rgba(255,255,255,0.6));
        -webkit-transition: opacity 0.15s ease, -webkit-transform 0.08s linear;
        transition: opacity 0.15s ease, -webkit-transform 0.08s linear;
        -o-transition: transform 0.08s linear, opacity 0.15s ease;
        transition: transform 0.08s linear, opacity 0.15s ease;
        transition: transform 0.08s linear, opacity 0.15s ease, -webkit-transform 0.08s linear;
      }
      .network-loader {
        position: fixed;
        width: 40px;
        height: 40px;
        left: -100%;
        top: -100%;
        pointer-events: none;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        -webkit-filter: drop-shadow(0 0 2px rgba(255,255,255,0.6));
                filter: drop-shadow(0 0 2px rgba(255,255,255,0.6));
        -webkit-transition: opacity 0.3s ease;
        -o-transition: opacity 0.3s ease;
        transition: opacity 0.3s ease;
            -webkit-transform: translate(-2.5px, -2.5px);
                -ms-transform: translate(-2.5px, -2.5px);
                    transform: translate(-2.5px, -2.5px);
      }
      .hidden { 
        opacity: 0; 
      }
    `;
    shadowRoot.appendChild(style);
  }

  function bindHandlers(el) {
    const S = STATE.get(el);
    const { cursorSvg, loaderSvg } = S;

    const onMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (cursorSvg) {
        cursorSvg.style.left = `${x - 15}px`;
        cursorSvg.style.top = `${y - 15}px`;
      }
      if (loaderSvg) {
        loaderSvg.style.left = `${x - 15}px`;
        loaderSvg.style.top = `${y - 15}px`;
      }
    };

    const onMouseLeave = () => {
      cursorSvg && cursorSvg.classList.add("hidden");
    };

    const onMouseEnter = () => {
      cursorSvg && cursorSvg.classList.remove("hidden");
    };

    const onMouseOver = (e) => {
      if (e.target.closest("a")) {
        cursorSvg && cursorSvg.classList.add("hidden");
      }
    };

    const onMouseOut = (e) => {
      if (!e.target.closest("a")) {
        cursorSvg && cursorSvg.classList.remove("hidden");
      }
    };

    S.handlers = { onMouseMove, onMouseLeave, onMouseEnter, onMouseOver, onMouseOut };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
  }

  function unbindHandlers(el) {
    const S = STATE.get(el);
    if (!S?.handlers) return;
    const { onMouseMove, onMouseLeave, onMouseEnter, onMouseOver, onMouseOut } = S.handlers;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseover", onMouseOver);
    document.removeEventListener("mouseout", onMouseOut);
    S.handlers = null;
  }

  // Network monitoring logic
  let activeRequests = 0;
  let loaderSvgRef = null;

  function updateLoaderVisibility() {
    if (!loaderSvgRef) return;
    if (activeRequests > 0) {
      loaderSvgRef.style.opacity = '1';
    } else {
      loaderSvgRef.style.opacity = '0';
    }
  }

  const originalFetch = window.fetch;
  function patchFetch() {
    window.fetch = function(...args) {
      activeRequests++;
      updateLoaderVisibility();
      return originalFetch(...args).finally(() => {
        activeRequests--;
        updateLoaderVisibility();
      });
    };
  }

  const originalXhrOpen = XMLHttpRequest.prototype.open;
  function patchXhr() {
    XMLHttpRequest.prototype.open = function(...args) {
      this.addEventListener('loadend', () => {
        activeRequests--;
        updateLoaderVisibility();
      });
      activeRequests++;
      updateLoaderVisibility();
      return originalXhrOpen.apply(this, args);
    };
  }
  
  if (!customElements.get("c-c")) {
    customElements.define(
      "c-c",
      class extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({ mode: "open" });
          const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
          STATE.set(this, { shadow, isTouch, cursorSvg: null, loaderSvg: null, handlers: null });
        }

        connectedCallback() {
          const S = STATE.get(this);
          attachStyle(S.shadow);
          
          if (S.isTouch) return;

          const cursorSvg = createCursorSvg();
          S.shadow.appendChild(cursorSvg);
          S.cursorSvg = cursorSvg;

          const loaderSvg = createLoaderSvg();
          S.shadow.appendChild(loaderSvg);
          S.loaderSvg = loaderSvg;
          loaderSvgRef = loaderSvg;  

          bindHandlers(this);
          
 
          patchFetch();
          patchXhr();
        }

        disconnectedCallback() {
          const S = STATE.get(this);
          unbindHandlers(this);
          if (S.cursorSvg?.isConnected) S.cursorSvg.remove();
          if (S.loaderSvg?.isConnected) S.loaderSvg.remove();
          S.cursorSvg = null;
          S.loaderSvg = null;
          loaderSvgRef = null;
        }
      }
    );
  }
})();
