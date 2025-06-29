"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("contextmenu", (e) => e.preventDefault());
  document.body.addEventListener("selectstart", (e) => e.preventDefault());
  document.body.addEventListener("dragstart", (e) => e.preventDefault());
  const notificationCardd = document.querySelectorAll(".notification");
  const styles = document.querySelectorAll("style"); 
  const loader = document.querySelector(".loader");
  const createBlobUrlFromString = function (text, mimeType = "text/plain") {
    const blob = new Blob([text], { type: mimeType });
    const blobUrl = URL.createObjectURL(blob);
    return blobUrl;
  };
  let tmp;
  styles.forEach((el) => {
    tmp += el.textContent;
  });
  const style = document.createElement("style");
  style.id = "generated";
  style.textContent = `@import url('${createBlobUrlFromString(
    tmp,
    "text/css"
  )}');`;
  document.head.appendChild(style);
  tmp = "";
  styles.forEach((el) => {
    if (!el.hasAttribute("id")) {
      el.remove();
    }
  });
  let customCursor = null;
  if (loader) {
    customCursor = loader.cloneNode(true);
    customCursor.classList.add("custom-cursor-svg");
    customCursor.style.left = `-100%`;
    customCursor.style.top = `-100%`;
    document.body.appendChild(customCursor);
    document.addEventListener("mousemove", (e) => {
      if (customCursor) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
      }
    });

    document.addEventListener("mouseleave", () => {
      if (customCursor) {
        customCursor.classList.add("hidden");
      }
    }); 
    document.addEventListener("mouseenter", () => {
      if (customCursor) {
        customCursor.classList.remove("hidden");
      }
    }); 
    document.addEventListener("mouseover", (e) => {
      if (customCursor && e.target.closest('a')) {
        customCursor.classList.remove("hidden");
      }
    }); 
    document.addEventListener("mouseout", (e) => {
      if (customCursor && e.target.closest('a')) {
        customCursor.classList.add("hidden");
      }
    });
  }
  notificationCardd.forEach(function (notificationCard) {

    notificationCard.addEventListener("mouseleave", () => {
      if (customCursor) {
        customCursor.classList.remove("hidden");
      }
    }); 

    const mouseLight = notificationCard.querySelector(".mouse-light-effect");
    if (notificationCard && mouseLight) {
      notificationCard.addEventListener("mousemove", (e) => {
        const rect = notificationCard.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mouseLight.style.left = `${x}px`;
        mouseLight.style.top = `${y}px`;
        if(!e.target.closest('a')){
        customCursor.classList.add("hidden");
        }else{
          customCursor.classList.remove("hidden");

        }
      });

      notificationCard.addEventListener("mouseenter", () => {
        mouseLight.style.opacity = "1";
        document.body.classList.add("light");
      });

      notificationCard.addEventListener("mouseleave", () => {
        mouseLight.style.opacity = "0";
        document.body.classList.remove("light");
      });
    }
  });
  setTimeout(() => {
    document.querySelectorAll("script").forEach((el) => el.remove());
  }, 1000);
});

const welcomer = {
  Dots_color: 196,
};

class CustomScroll extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          overflow: hidden;
            -webkit-transition: .3s;
            -o-transition: .3s;
            transition: .3s;
        }
             
        .wrapper {
          height: 100%;
          overflow-y: scroll;
          scrollbar-width: none;
          padding-right: 20px;
        }
        .wrapper::-webkit-scrollbar {
          display: none;
        }
        .scrollbar {
          position: absolute;
          top: 0;
          right: 2px;
          width: 8px;
          height: 100%;
          border-radius: 30px;
          background: rgba(0,0,0,0.1);
            transition: opacity 0.5s ease;
          opacity: 0;
          pointer-events: none;
        }
        .thumb {
        position: absolute;
    width: 100%;
    border-radius: 4px;
    cursor: none;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) blur(10px);
    -webkit-backdrop-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) blur(10px);
    enable-background: new 0 0 512 512; 
        }
  .thumb:hover { 
    
    -webkit-filter: drop-shadow(0 0 6px #fff); 
    
            filter: drop-shadow(0 0 6px #fff);
    }

      :host(:hover) .scrollbar {
          opacity: 1;
          pointer-events: auto;
        }
      </style>
      <div class="wrapper">
        <slot></slot>
      </div>
      <div class="scrollbar">
        <div class="thumb"></div>
      </div>
    `;
  }

  connectedCallback() {
    const wrapper = this.shadowRoot.querySelector(".wrapper");
    const thumb = this.shadowRoot.querySelector(".thumb");

    const updateThumb = () => {
      const contentHeight = wrapper.scrollHeight;
      const containerHeight = wrapper.clientHeight;
      const scrollTop = wrapper.scrollTop;

      const thumbHeight = Math.max(
        (containerHeight * containerHeight) / contentHeight,
        30
      );
      const thumbTop = (scrollTop * containerHeight) / contentHeight;

      thumb.style.height = thumbHeight + "px";
      thumb.style.top = thumbTop + "px";
    };

    wrapper.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);
    updateThumb();

    // Drag behavior
    let isDragging = false;
    let startY, startScrollTop;

    thumb.addEventListener("mousedown", (e) => {
      isDragging = true;
      startY = e.clientY;
      startScrollTop = wrapper.scrollTop;
      document.body.style.userSelect = "none";
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.style.userSelect = "";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      const scrollableHeight = wrapper.scrollHeight - wrapper.clientHeight;
      const thumbHeight = thumb.clientHeight;
      const containerHeight = wrapper.clientHeight;
      const scrollRatio = scrollableHeight / (containerHeight - thumbHeight);

      wrapper.scrollTop = startScrollTop + deltaY * scrollRatio;
    });
  }
}

class BlueWarp extends HTMLElement {
  constructor() {
    super();

    this.shadowMode = this.attachShadow({ mode: "open" });
    const template = document.createElement("template"),
      style = document.createElement("style");
    style.textContent = `:host  { background:#0d0f1a;             position: fixed;
            left: 0px;
            top: 0px;
            pointer-events: none;
            z-index: -1;
            width: 100%;
            height: 100%; }#canvas {  margin: 0 auto; display: block; -webkit-filter: url('#shadowed-goo') blur(2px); filter: url('#shadowed-goo') blur(2px); pointer-events: none !important;`;

    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.textContent = "Your browser doesn't support canvas";
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("version", "1.1");
    svg.style.filter = "drop-shadow(2px 2px 2px rgba(0,0,0,0.4))";
    svg.style.webkitFilter = "drop-shadow(2px 2px 2px rgba(0,0,0,0.4))";
    svg.style.enableBackground = "new 0 0 512 512";
    svg.style.setProperty("!important", "");
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    const filterShadowedGoo = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "filter"
    );
    filterShadowedGoo.id = "shadowed-goo";

    const feGaussianBlur1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feGaussianBlur"
    );
    feGaussianBlur1.setAttribute("in", "SourceGraphic");
    feGaussianBlur1.setAttribute("result", "blur");
    feGaussianBlur1.setAttribute("stdDeviation", "10");
    filterShadowedGoo.appendChild(feGaussianBlur1);

    const feColorMatrix1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feColorMatrix"
    );
    feColorMatrix1.setAttribute("in", "blur");
    feColorMatrix1.setAttribute("mode", "matrix");
    feColorMatrix1.setAttribute(
      "values",
      "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
    );
    feColorMatrix1.setAttribute("result", "goo");
    filterShadowedGoo.appendChild(feColorMatrix1);

    const feGaussianBlur2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feGaussianBlur"
    );
    feGaussianBlur2.setAttribute("in", "goo");
    feGaussianBlur2.setAttribute("stdDeviation", "3");
    feGaussianBlur2.setAttribute("result", "shadow");
    filterShadowedGoo.appendChild(feGaussianBlur2);

    const feColorMatrix2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feColorMatrix"
    );
    feColorMatrix2.setAttribute("in", "shadow");
    feColorMatrix2.setAttribute("mode", "matrix");
    feColorMatrix2.setAttribute(
      "values",
      "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.2"
    );
    feColorMatrix2.setAttribute("result", "shadow");
    filterShadowedGoo.appendChild(feColorMatrix2);

    const feOffset = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feOffset"
    );
    feOffset.setAttribute("in", "shadow");
    feOffset.setAttribute("dx", "1");
    feOffset.setAttribute("dy", "1");
    feOffset.setAttribute("result", "shadow");
    filterShadowedGoo.appendChild(feOffset);

    const feBlend1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feBlend"
    );
    feBlend1.setAttribute("in2", "shadow");
    feBlend1.setAttribute("in", "goo");
    feBlend1.setAttribute("result", "goo");
    filterShadowedGoo.appendChild(feBlend1);

    const feBlend2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feBlend"
    );
    feBlend2.setAttribute("in2", "goo");
    feBlend2.setAttribute("in", "SourceGraphic");
    feBlend2.setAttribute("result", "mix");
    filterShadowedGoo.appendChild(feBlend2);

    defs.appendChild(filterShadowedGoo);

    const filterGoo = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "filter"
    );
    filterGoo.id = "goo";

    const feGaussianBlur3 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feGaussianBlur"
    );
    feGaussianBlur3.setAttribute("in", "SourceGraphic");
    feGaussianBlur3.setAttribute("result", "blur");
    feGaussianBlur3.setAttribute("stdDeviation", "10");
    filterGoo.appendChild(feGaussianBlur3);

    const feColorMatrix3 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feColorMatrix"
    );
    feColorMatrix3.setAttribute("in", "blur");
    feColorMatrix3.setAttribute("mode", "matrix");
    feColorMatrix3.setAttribute(
      "values",
      "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
    );
    feColorMatrix3.setAttribute("result", "goo");
    filterGoo.appendChild(feColorMatrix3);

    const feBlend3 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feBlend"
    );
    feBlend3.setAttribute("in2", "goo");
    feBlend3.setAttribute("in", "SourceGraphic");
    feBlend3.setAttribute("result", "mix");
    filterGoo.appendChild(feBlend3);

    defs.appendChild(filterGoo);
    svg.appendChild(defs);
    this.shadowMode.appendChild(canvas);
    this.shadowMode.appendChild(svg);
    this.shadowMode.appendChild(style);
    const application = new Application(canvas);
    application.initializeCircleContainers();
    application.loop();
  }
}

const TWO_PI = Math.PI * 2;
class Application {
  constructor(element) {
    this.canvas = element;
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.center = { x: this.width / 2, y: this.height / 2 };
    this.circleContainers = [];
    window.addEventListener("resize", () => this.resizeCanvas(), false);
  }
  resizeCanvas() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.center = { x: this.width / 2, y: this.height / 2 };
    this.circleContainers = [];
    this.initializeCircleContainers();
  }
  initializeCircleContainers() {
    for (let x = 0; x < this.width + 100; x += 100) {
      for (let y = 0; y < this.height + 100; y += 100) {
        let circleContainer = new CircleContainer(this.context, x, y);
        circleContainer.initializeCircles();
        this.circleContainers.push(circleContainer);
      }
    }
  }
  update() {
    for (let i = 0; i < this.circleContainers.length; i++) {
      this.circleContainers[i].update();
    }
  }
  render() {
    this.context.clearRect(0, 0, this.width, this.height);
    for (let i = 0; i < this.circleContainers.length; i++) {
      this.circleContainers[i].render();
    }
  }
  loop() {
    this.update();
    this.render();
    window.requestAnimationFrame(() => this.loop());
  }
}

class CircleContainer {
  constructor(context, x, y) {
    this.context = context;
    this.position = { x, y };
    this.numberOfCircles = 19;
    this.bounceRadius = 150;
    this.numberOfCircles = 19;
    this.bounceRadius = 150;
    this.circles = [];
    this.baseRadius = 20;
    this.singleSlice = TWO_PI / this.numberOfCircles;
  }
  initializeCircles() {
    for (let i = 0; i < this.numberOfCircles; i++) {
      this.circles.push(
        new Circle(
          this.position.x,
          this.position.y + Math.random(),
          this.baseRadius,
          this.bounceRadius,
          i * this.singleSlice
        )
      );
    }
  }
  update() {
    for (let i = 0; i < this.numberOfCircles; i++) {
      this.circles[i].update(this.context);
    }
  }
  render() {
    for (let i = 0; i < this.numberOfCircles; i++) {
      this.circles[i].render(this.context);
    }
  }
}
class Circle {
  constructor(x, y, baseRadius, bounceRadius, angleCircle) {
    this.basePosition = { x, y };
    this.position = { x, y };
    this.speed = 0.01;
    this.baseSize = 10;
    this.size = 10;
    this.angle = x + y;
    this.baseRadius = baseRadius;
    this.bounceRadius = bounceRadius;
    this.angleCircle = angleCircle;
  }
  update() {
    this.position.x =
      this.basePosition.x +
      Math.cos(this.angleCircle) *
        (Math.sin(this.angle + this.angleCircle) * this.bounceRadius +
          this.baseRadius);
    this.position.y =
      this.basePosition.y +
      Math.sin(this.angleCircle) *
        (Math.sin(this.angle + this.angleCircle) * this.bounceRadius +
          this.baseRadius);
    this.size = Math.cos(this.angle) * 8 + this.baseSize;
    this.angle += this.speed;
  }
  render(context) {
    context.fillStyle =
      "hsl(" + welcomer.Dots_color + ",100%," + this.size * 4 + "%)";
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.size, 0, TWO_PI);
    context.fill();
  }
}

if (!customElements.get("blue-warp")) {
  customElements.define("blue-warp", BlueWarp);
}

if (!customElements.get("custom-scroll")) {
  customElements.define("custom-scroll", CustomScroll);
}
