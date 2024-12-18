infoVa_img: function (event) {
    if (welcomer.gallery_temp.length > 0) {
      welcomer.eronelit_gallery.call_ui(welcomer.gallery_temp);
    } else {
      var clickedElement = event.target || event;
      
      const ImagePreview_src = document.createElement("image-preview");
      ImagePreview_src.setAttribute("src",clickedElement.getAttribute("src"));
      document.body.appendChild(ImagePreview_src);

    //   
    
class ImagePreview extends HTMLElement {
    constructor(){
      super();
      const shadow = this.attachShadow({ mode: "open" });
      const source = this.getAttribute("src");
      
       const template = document.createElement("template");
      template.innerHTML = `
        <style nonce="${window.stmp}">
      .zoomWindow {
       z-index: 999;
       display: none; 
       position: absolute; 
       float: left; 
       height: 0px;
       width: 0px; 
       border: 4px solid rgb(136, 136, 136); 
      background-position: 0px 0px; 
      background-repeat: no-repeat; 
      cursor: inherit; 
      overflow: hidden;
      }
      </style>
      <div class="zoomContainer" 
      style="position: absolute;top: 0px;left: 0px;height: 0px;width: 0px;z-index: 999">
      <div class="zoomWindowContainer" style="width: 400px;">
      <div 
      style="z-index: 999; display: none; position: absolute; float: left; height: 0px; width: 0px; border: 4px solid rgb(136, 136, 136); 
      background-position: 0px 0px; 
      background-repeat: no-repeat; 
      cursor: inherit; 
      overflow: hidden;
      background-image: url(${source});" 
      class="zoomWindow">&nbsp;</div></div></div>
      <div-loader><div id="helper_id_helper3">
       <p>To view a zoomed image. Hold left click or finger and move slowly.</p> 
       </div><span id="helper_id_helper"><i style="padding-right:2px;" 
       class="bi bi-info-square"></i> For close click ( X ) button.</span>
       <i  class="bi bi-x-lg zoomer_exit"></i>
       </div-loader>`;
      this.image = shadow.querySelector(".zoomWindow");
      const  closeMeIamSad = shadow.querySelector(".zoomer_exit");
      this.div_loader = shadow.querySelector("div-loader");
      shadow.appendChild(template.content.cloneNode(true)); 
      this.image.style.backgroundImage = `url(${source});`;
  
      closeMeIamSad.addEventListener("click",function(){
        this.remove();
      });
     
    }
    static get observedAttributes() {
      return ["src"];
    }
    updateVideoSrc(src = "") {
      this.image.src = src;
    }
  }