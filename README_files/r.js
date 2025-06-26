
class ImagePreview extends HTMLElement {
    svgMaker(svgg = [], pathv = []) {
      const svg = document.createElement("svg"),
        path = document.createElement("path");
      for (var i = 0; i < svgg.length; i++) {
        svg.setAttribute(svgg[i]["key"], svgg[i]["val"]);
      }
      for (var i = 0; i < pathv.length; i++) {
        path.setAttribute(pathv[i]["key"], pathv[i]["val"]);
      }
      svg.appendChild(path);
      return svg;
    }
    svg(name = "") {
      var svgContent = "";
      if (name == "plus") {
        svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
  </svg>`;
      }
      if (name == "rotate") {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg"  fill="white"   viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
  </svg>`;
      }
      if (name == "minus") {
        svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" /></svg>`;
      }
      if (name == "close") {
        svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="#b14747" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" /></svg>`;
      }
      const base64 = btoa(svgContent);
      const base64Url = `data:image/svg+xml;base64,${base64}`;
      return base64Url;
    }
    constructor() {
      super();
      this.shadowMode = this.attachShadow({ mode: "open" });
      const source = this.getAttribute("src");
      const template = document.createElement("template");
      const style = document.createElement("style");
      style.setAttribute("nonce", window.stmp);
      const controls_style = `
    
    div#zoomImage {
    display:none; 
    border:none !important;
    }
  
    div#zoomImage,
    img#zoomImage {
      position: absolute;
      left: 0px;
      top: 13px;
      object-fit: scale-down;
      width: 100%;
      height: calc(100% - 3.3dvh) !important;
      transform: scale(1);
  }
  
  div#controls {
      position: fixed;
      right: 20px;
      top: 20px;
      background: var(--black-trasparent-color);
      display: grid;
      z-index: 333333;
      justify-content: center;
      padding-bottom: 10px;
      border-radius: 150px;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      enable-background: new 0 0 512 512 !important;
      padding-bottom: 5px;
  }
  
  div#controls img.top_control {
      color: white;
      font-size: 25px;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      enable-background: new 0 0 512 512 !important;
      width: 25px !important;
      height: 35px !important;
      padding: 0px 5.6px;
      border-radius: 6px;
      display: block;
      margin: 5px;
      margin-bottom: 0px;
      margin: 5px 10px;
      margin-bottom: 0px;
      padding: 0px;
  }
  div#controls separator {
      background: white;
      height: 1px;
      opacity: 0.3;
      width:100%;
    }
      div#zoomImage.rotation_manual,
      img#zoomImage.rotation_manual {
        transition: transform .5s ease !important;
        pointer-events:none;
      }
  div#controls img.top_control {
      color: white;
      font-size: 25px;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      enable-background: new 0 0 512 512 !important;
      width: 25px !important;
      height: 35px !important;
      padding: 0px 5.6px;
      border-radius: 6px;
      display: block;
      margin: 5px;
      margin-bottom: 0px;
      margin: 0px 10px;
      margin-bottom: 0px;
      padding: 0px;
  }
  div#controls img.close_control {
      color: white;
      font-size: 25px;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      enable-background: new 0 0 512 512 !important;
      width: 25px !important;
      height: 35px !important;
      padding: 0px 5.6px;
      border-radius: 6px;
      display: block;
      margin: 5px;
      margin-bottom: 0px;
      padding-bottom: 0px !important;
      padding-bottom: 0px important;
      margin: 5px 10px;
      margin-bottom: 0px;
      padding: 0px;
      margin-top: 5px;
  }
  
  div#controls img.bottom_rotate {
   color: white;
      font-size: 25px;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      enable-background: new 0 0 512 512 !important;
      width: 25px !important;
      height: 35px !important;
      padding: 0px 5.6px;
      border-radius: 6px;
      display: block;
      margin: 5px;
      margin-bottom: 0px;
      padding-bottom: 0px !important;
      padding-bottom: 0px important;
      margin: 5px 10px;
      margin-bottom: 0px;
      padding: 0px;
      margin-top: 0px;
  }
  div#controls img.bottom_control {
      color: white;
      font-size: 25px;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      enable-background: new 0 0 512 512 !important;
      width: 25px !important;
      height: 35px !important;
      padding: 0px 5.6px;
      border-radius: 6px;
      display: block;
      margin: 5px;
      margin-bottom: 0px;
      padding-bottom: 0px !important;
      padding-bottom: 0px important;
      margin: 5px 10px;
      margin-bottom: 0px;
      padding: 0px;
      margin-top: 0px;
  }
  div#controls span.precent_control {
  
  color: white;
  text-align: center;
  margin: auto;
  display: block;
  font-size: 8px;
  padding: 0px 10px !important; 
  margin-top: 3px;
  }
  div#controls img {
      opacity: 0.8 !important;
  }
  
  div#controls img:hover {
      opacity: 1 !important;
  }`;
      style.textContent = `${controls_style} @import url(https://${window.CDN_URL}/node_modules/bootstrap-icons/font/bootstrap-icons.css); :root{--cdn_primary:#ffff;--btn-disable:#fff;--seo-color:#fff;--primary_light:#ffffff4f;--textshadow_media:0px 0px 0px var(--cdn_white),3px 3px 5px #00000047;--cdn_white:#333;--hard_white:#fff;--red:#b90808;--section-bg:#333;--green:#2e7d32;--header-a:#e6e6e6;--product-background:linear-gradient(45deg,#1b5e20,#10bf19);--ads-background:linear-gradient(45deg,rgb(148 31 148),#c55e05);--event-background:linear-gradient(45deg,rgb(148 31 148),#2196f3);--job-background:linear-gradient(45deg,rgb(148 31 148),#3f51b5);--black-trasparent-color:rgba(0,0,0,0.639);--grid-image:url(/?url=source&sourcelogin=grid.svg);--shield-image:url(/?url=source&sourcelogin=shield.svg);--stars-25:#b32020;--stars-40:#FFD700;--stars-60:#d56617;--stars-75:var(--green);}img.zoomImg{position:fixed !important;z-index:3333333;top:0px !important;left:0px !important;width:100% !important;height:100% !important;opacity:1 !important;background:var(--black-trasparent-color);}.zoomContainer{position:fixed;z-index:333333;left:0px;top:0px;width:100%;height:100%;opacity:1 !important;}.zoomContainer .zoomWindowContainer div{left:10px !important;top:10px !important;width:100%;width:100% !important;display:block !important;z-index:3333 !important;height:100% !important;position:fixed;float:unset !important;bottom:0px !important;border:none;position:fixed !important;right:10px !important;width:unset !important;bottom:10px !important;height:unset !important;margin:0px !important;padding:2px !important;border-radius:10px !important;border:2px solid var(--primary_light) !important;filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.2));-webkit-filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.2));enable-background:new 0 0 512 512 !important;}.zoomWindowContainer{position:fixed !important;left:0px;top:0px !important;background:var(--black-trasparent-color);width:100%;height:100% !important;width:100% !important;}.zoomer_exit{position:fixed;top:20px;right:20px;z-index:333333;color:white;font-size:25px;filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.3));-webkit-filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.3));enable-background:new 0 0 512 512 !important;background:var(--black-trasparent-color);width:25px !important;height:25px !important;padding:0px 5.6px;border-radius:6px;}#helper_id_helper{pointer-events:none !important;position:fixed;left:20px;top:20px;background:var(--black-trasparent-color);z-index:333333;color:var(--white);padding:5px 10px;border-radius:6px;filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.3));-webkit-filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.3));enable-background:new 0 0 512 512 !important;}div#helper_id_helper3{position:absolute;left:20px;z-index:33333;bottom:30px;right:20px;bottom:20px;border-radius:0px 0px 9px 9px !important;filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.2));-webkit-filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.2));enable-background:new 0 0 512 512 !important;pointer-events:none !important;}div#helper_id_helper3 p{border-radius:6px !important;background:var(--black-trasparent-color);color:var(--white);padding:10px;display:block;margin:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:center;}.zoomWindow{pointer-events:unset !important; z-index:999;display:none;position:absolute;float:left;height:0px;width:0px;border:4px solid rgb(136,136,136);background-position:0px 0px;background-repeat:no-repeat;cursor:inherit;overflow:hidden;}img_loader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;position:absolute;pointer-events:none;}img_loader img#loader{display:block;z-index:1;left:0px;top:0px;margin:auto;width:45px;height:45px;}.zoomWindow{-o-object-fit:scale-down;object-fit:scale-down;width:100%;background-size:contain;background-position:center;pointer-events:none;}`;
      template.content.appendChild(style);
      const zoomContainer = document.createElement("div");
      zoomContainer.classList.add("zoomContainer");
      zoomContainer.style.cssText =
        "position:absolute;top:0px;left:0px;height:0px;width:0px;z-index:999";
      const zoomWindowContainer = document.createElement("div");
      zoomWindowContainer.classList.add("zoomWindowContainer");
      zoomContainer.appendChild(zoomWindowContainer);
      const imgLoader = document.createElement("img_loader");
      const loaderImg = document.createElement("img");
  
      this.scalermode = {
        scale: 1,
        startX: 0,
        startY: 0,
        isDragging: false,
      };
  
      loaderImg.id = "Loader";
      loaderImg.src = window.welcomer.loader_svg;
      imgLoader.appendChild(loaderImg);
      zoomWindowContainer.appendChild(imgLoader);
      const zoomWindow = document.createElement("div");
      zoomWindow.style.cssText = ` z-index:999;display:none;position:absolute;float:left;height:0px;width:0px;border:4px solid rgb(136,136,136);background-position:0px 0px;background-repeat:no-repeat;cursor:inherit;overflow:hidden;`;
      zoomWindow.classList.add("zoomWindow");
      zoomWindow.style.backgroundImage = `url(${source})`;
      zoomWindowContainer.appendChild(zoomWindow);
  
      /*
      <div id="controls" style="
      position: fixed;
      right: 20px;
      top: 55px;
      background: var(--black-trasparent-color);
      display: grid;
      z-index: 333333;
      justify-content: center;
      padding-bottom: 10px;
      border-radius: 150px;
  "><i class="bi bi-plus-circle-fill" style="
      color: white;
      font-size: 25px;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      enable-background: new 0 0 512 512 !important;
      width: 25px !important;
      height: 25px !important;
      padding: 0px 5.6px;
      border-radius: 6px;
      display: block;
      margin: 5px;
  "></i><i class="bi bi-dash-circle-fill" style="
      color: white;
      font-size: 25px;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      enable-background: new 0 0 512 512 !important;
      width: 25px !important;
      height: 25px !important;
      padding: 0px 5.6px;
      border-radius: 6px;
      display: block;
      margin: 5px;
  "></i></div>
      */
      // -::K
  
      // -::K
      const helper3 = document.createElement("div");
      helper3.id = "helper_id_helper3";
      const helperText = document.createElement("p");
      helperText.textContent =
        "To view a Zoomed Image or Element. Hold left click or finger and move slowly.";
      helper3.appendChild(helperText);
      zoomContainer.appendChild(helper3);
      const helper = document.createElement("span");
      helper.id = "helper_id_helper";
      const icon = document.createElement("i");
      icon.classList.add("bi", "bi-info-square");
      icon.style.paddingRight = "2px";
      const text = document.createTextNode(" For close click ( X ) button.");
      helper.appendChild(icon);
      helper.appendChild(text);
      zoomContainer.appendChild(helper);
      const divLoader = document.createElement("div");
      const helperIdHelper3 = document.createElement("div");
      const paragraph = document.createElement("p");
      paragraph.textContent =
        "To view a Zoomed Image or Element. Hold left click or finger and move slowly.";
      helperIdHelper3.appendChild(paragraph);
      helperIdHelper3.id = "helper_id_helper3";
      const helperIdHelper = document.createElement("span");
      helperIdHelper.id = "helper_id_helper";
      const infoIcon = document.createElement("i");
      infoIcon.className = "bi bi-info-square";
      infoIcon.style.paddingRight = "2px";
      helperIdHelper.appendChild(infoIcon);
      helperIdHelper.appendChild(
        document.createTextNode(" For close click ( X ) button.")
      );
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("width", "25");
      svg.setAttribute("height", "25");
      svg.setAttribute("fill", "currentColor");
      svg.classList.add("bi", "bi-x-lg", "zoomer_exit");
      svg.setAttribute("viewBox", "0 0 16 16");
      svg.setAttribute("style", "width:25px !important;");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute(
        "d",
        "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
      );
      svg.appendChild(path);
      divLoader.appendChild(helperIdHelper3);
      divLoader.appendChild(helperIdHelper);
      // divLoader.appendChild(svg);
      //
      const controls = document.createElement("div"),
        controls_top = document.createElement("img"),
        controls_bottom = document.createElement("img"),
        controls_rotate = document.createElement("img"),
        controls_precent = document.createElement("span"),
        separator = document.createElement("separator"),
        separator1 = document.createElement("separator"),
        controls_close = document.createElement("img");
      controls.id = "controls";
      controls_top.src = this.svg("plus");
      controls_top.setAttribute("class", "top_control");
      controls_bottom.src = this.svg("minus");
      controls_bottom.setAttribute("class", "bottom_control");
      controls_top.alt = "Zoom in";
      controls_bottom.alt = "Zoom out";
  
      controls_rotate.src = this.svg("rotate");
      controls_rotate.setAttribute("class", "bottom_rotate");
      controls_rotate.alt = "Rotate";
  
      controls_precent.setAttribute("class", "precent_control");
  
      controls_precent.textContent = "100%";
  
      controls_close.src = this.svg("close");
      controls_close.setAttribute("class", "close_control");
  
      /*
      controls.appendChild(this.svgMaker([
        {
          "key":"xmlns",
          "val":"http://www.w3.org/2000/svg"
        }
      ],[
  
      ]));*/
      controls.appendChild(controls_close);
      controls.appendChild(separator1);
      controls.appendChild(controls_top);
      controls.appendChild(controls_precent);
      controls.appendChild(controls_bottom);
      controls.appendChild(separator);
      controls.appendChild(controls_rotate);
      divLoader.appendChild(controls);
      // :
  
      const ImageBox = document.createElement("img"),
      ImageBox1 = document.createElement("div");
      ImageBox.id = "zoomImage";
      ImageBox1.id = "zoomImage";
  
      // :
      divLoader.classList.add("div-loader");
      template.content.appendChild(zoomContainer);
      template.content.appendChild(divLoader);
      zoomWindow.appendChild(ImageBox);
      zoomWindow.appendChild(ImageBox1);
  
      this.image = this.shadowRoot.querySelector(".zoomWindow");
      const closeMeIamSad = this.shadowRoot.querySelector(".zoomer_exit");
      this.div_loader = this.shadowRoot.querySelector("div-loader");
      this.shadowMode.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector(".zoomWindow");
  
      /*
        .setAttribute(
          "style",
          `background-image:url(${this.getAttribute("src")});`
        );*/
    }
  
    init() {
      this.container.addEventListener("mousedown", this.startDrag.bind(this));
      window.addEventListener("mouseup", this.stopDrag.bind(this));
      this.container.addEventListener("mousemove", this.dragImage.bind(this));
      this.container.addEventListener("wheel", this.zoomImage.bind(this));
    }
  
    startDrag(e) {
      const box = this.image;
      if (box.classList.contains("rotation_manual")) {
        box.classList.remove("rotation_manual");
      }
      this.isDragging = true;
      this.startX = e.clientX - this.image.offsetLeft;
      this.startY = e.clientY - this.image.offsetTop;
      this.container.style.cursor = "grabbing";
    }
  
    stopDrag() {
      this.isDragging = false;
      this.container.style.cursor = "grab";
    }
  
    dragImage(e) {
      const box = this.image;
      if (box.classList.contains("rotation_manual")) {
        box.classList.remove("rotation_manual");
      }
      if (!this.isDragging) return;
      const x = e.clientX - this.startX;
      const y = e.clientY - this.startY;
      this.image.style.transform = `translate(${x}px, ${y}px) scale(${this.scale})`;
    }
    zoom_plus(e) {
      e.preventDefault();
      if (e.deltaY < 0) {
        this.scale += 0.1;
      } else {
        this.scale -= 0.1;
      }
  
      this.scale = Math.min(Math.max(1, this.scale), 3);
      this.image.style.transform = `scale(${this.scale})`;
    }
    zoomImage(e) {
      e.preventDefault();
      if (e.deltaY < 0) {
        this.scale += 0.1;
      } else {
        this.scale -= 0.1;
      }
  
      this.scale = Math.min(Math.max(1, this.scale), 3);
      this.image.style.transform = `scale(${this.scale})`;
    }
    increaseScale(e) {
      e.preventDefault();
      this.scale += 0.1;
    }
  
    decreaseScale(e) {
      e.preventDefault();
      this.scale -= 0.1;
    }
    getHostAttribute(attrName) {
      return this.getAttribute(attrName);
    }
    ld() {}
  
    srcDiv(src = null){ 
      if (src) {
        this.shadowRoot.querySelector("div#zoomImage").innerHTML = src;
        this.shadowRoot.querySelector("img#zoomImage").remove();
        this.shadowRoot.querySelector(".zoomWindow").removeAttribute("style");
        var controller = new ImageZoomPan(
          this.shadowRoot.querySelector(".zoomWindow"),
          this.shadowRoot.querySelector("div#zoomImage"),
          this.shadowRoot.querySelector("span.precent_control")
        );
     
        this.shadowRoot
          .querySelector("img.top_control")
          .addEventListener("click", function (e) {
            e.preventDefault();
            controller.PlusControlf();
          });
        this.shadowRoot
          .querySelector("img.bottom_control")
          .addEventListener("click", function (e) {
            e.preventDefault();
            controller.MinusControlf();
          });
        this.shadowRoot
          .querySelector("span.precent_control")
          .addEventListener("click", function (e) {
            e.preventDefault();
            controller.reset();
          });
        let clickTimeout;
        this.shadowRoot
          .querySelector("img.bottom_rotate")
          .addEventListener("click", (e) => {
            e.preventDefault();
  
            const box = this.shadowRoot.querySelector("img#zoomImage"),
            box1 = this.shadowRoot.querySelector("div#zoomImage");
  
            
  
            clearTimeout(clickTimeout);
  
            if (!box.classList.contains("rotation_manual")) {
              box.classList.add("rotation_manual");
            }
            controller.RotateControlf();
            clickTimeout = setTimeout(() => {
              box.classList.remove("rotation_manual");
            }, 500);
            // 
            if (!box1.classList.contains("rotation_manual")) {
              box1.classList.add("rotation_manual");
            }
            controller.RotateControlf();
            clickTimeout = setTimeout(() => {
              box1.classList.remove("rotation_manual");
            }, 500);
          });
  
        this.shadowRoot
          .querySelector("#zoomImage")
          .addEventListener(
            "load",
            this.shadowRoot
              .querySelector("img_loader")
              .setAttribute("style", "opacity:0")
          );
      } else {
      }
    }
    src(src = "") { 
      if (src) {
        this.shadowRoot.querySelector("#zoomImage").setAttribute("src", `${src}`);
        this.shadowRoot.querySelector(".zoomWindow").removeAttribute("style");
        var controller = new ImageZoomPan(
          this.shadowRoot.querySelector(".zoomWindow"),
          this.shadowRoot.querySelector("img#zoomImage"),
          this.shadowRoot.querySelector("span.precent_control")
        );
      
        this.shadowRoot
          .querySelector("img.top_control")
          .addEventListener("click", function (e) {
            e.preventDefault();
            controller.PlusControlf();
          });
        this.shadowRoot
          .querySelector("img.bottom_control")
          .addEventListener("click", function (e) {
            e.preventDefault();
            controller.MinusControlf();
          });
        this.shadowRoot
          .querySelector("span.precent_control")
          .addEventListener("click", function (e) {
            e.preventDefault();
            controller.reset();
          });
        let clickTimeout;
        this.shadowRoot
          .querySelector("img.bottom_rotate")
          .addEventListener("click", (e) => {
            e.preventDefault();
  
            const box = this.shadowRoot.querySelector("img#zoomImage"),
            box1 = this.shadowRoot.querySelector("div#zoomImage");
  
            
  
            clearTimeout(clickTimeout);
  
            if (!box.classList.contains("rotation_manual")) {
              box.classList.add("rotation_manual");
            }
            controller.RotateControlf();
            clickTimeout = setTimeout(() => {
              box.classList.remove("rotation_manual");
            }, 500);
            // 
            if (!box1.classList.contains("rotation_manual")) {
              box1.classList.add("rotation_manual");
            }
            controller.RotateControlf();
            clickTimeout = setTimeout(() => {
              box1.classList.remove("rotation_manual");
            }, 500);
          });
  
        this.shadowRoot
          .querySelector("#zoomImage")
          .addEventListener(
            "load",
            this.shadowRoot
              .querySelector("img_loader")
              .setAttribute("style", "opacity:0")
          );
      } else {
      }
    }
    connectedCallback() {
      const src = this.getAttribute("src");
      this.src = src;
      this.shadowRoot
        .querySelector("img.close_control")
        .addEventListener("click", function () {
          document.querySelector("image-preview").remove();
        });
      if (src) {
        this.shadowRoot
          .querySelector(".zoomWindow")
          .setAttribute("style", `background-image:url(${src});`);
      } else {
      }
    }
  }