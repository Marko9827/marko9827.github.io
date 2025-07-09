
class Page extends HTMLElement {

  
    constructor() {
      super();
  
      // Attach shadow DOM sa fokusom
      this.shadow = this.attachShadow({ mode: "open" });
  
      this.data = {
        blog: window.portfolio.data.blog 
        };
      // Wrapper i glavni kontejner
      this.wrapper = document.createElement("div");
      this.wrapper.id = "clavs";
      this.wrapper.style.opacity = 1;
      this.wrapper.style.transform = 'unset';
  
      // 
      this.grider_viewer_main = document.createElement("grider_viewer"); 
      this.grider_viewer = document.createElement("custom-scroll");
      this.grider_viewer_main.classList.add('grider_viewer_f');
      this.grider_viewer_main.style.display = 'none';
      this.grider_viewer.style.display = 'none'; 
      this.grider_viewer.classList.add('grider_viewer');
  
  
      this.grider_viewer_main.appendChild(this.grider_viewer);
      //
      this.blog_br_ta = document.createElement("br_ta");
      this.blog_br_ta.style.display = 'none';
      
      this.wrapper.appendChild(this.blog_br_ta);
  
      //
      this.bra_div = document.createElement("div");
      this.bra_div.classList.add("bra");
      //
      this.bra_div_img = document.createElement("img");
      this.bra_div_img.classList.add("img_background_rljs");
      this.bra_div_img.loading = "lazy";
  
      this.bra_div.appendChild(this.bra_div_img);
  
      this.wrapper.appendChild(this.bra_div);
      this.wrapper.appendChild( this.blog_br_ta);
      this.wrapper.appendChild(this.grider_viewer);
       
      // P container (sadrži sadržaj stranice)
      this.custom_scroll = document.createElement("custom-scroll");
      this.p_container = document.createElement("p-container");
      this.custom_scroll.appendChild(this.p_container);
      this.wrapper.appendChild(this.custom_scroll);
  
      // Galerija (privremeni storage)
      this.gallery_temp = {};
  
      // header
      this.div_header = document.createElement("div_header");
  
  
      // Ubaci sve u shadow DOM
      this.shadow.appendChild(this.wrapper);
  
      // Osnovni stil
      const style = document.createElement("style");
      style.textContent = `
        @import url('https://cdn.markonikolic98.com/node_modules/bootstrap-icons/font/bootstrap-icons.css');
        @import url('/mainss'); 
  
        div.bra {
        position: fixed;
      background: black;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.4;
        }
  
        grider_viewer.grider_viewer_f {
      top: 0px !important;
      padding: 0px !important;
  }
  
  #clavs iframe,
  #clavs .shadow_iframe,
  #clavs .grider_viewer,
  #clavs .grider_viewfer {
      position: absolute;
      top: 50px;
      left: 0px;
      width: 100%;
      bottom: 0px;
      height: -webkit-fill-available;
      border: none;
      background: var(--cdn_primary);
      -webkit-transition: -webkit-filter .3s;
      transition: -webkit-filter .3s;
      -o-transition: filter .3s;
      transition: filter .3s;
      transition: filter .3s, -webkit-filter .3s;
      overflow: auto;}
  
  #clavs .grider_viewer project,
  #clavs .grider_viewer project {
      height: 264px;
      padding: 4px !important;
      margin: 0px !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
      enable-background: new 0 0 512 512 !important;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      -webkit-transition: .3s;
      -o-transition: .3s;
      transition: .3s;}
  
  #clavs .grider_viewer video,
  #clavs .grider_viewer img,
  #clavs .grider_viewer div_hr,
  #clavs .grider_viewer video,
  #clavs .grider_viewer img,
  #clavs .grider_viewer div_hr {
      border-radius: 0px 0px 6px 6px !important;
      height: 100%;
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      padding: 0px !important;
      -webkit-box-shadow: 0 0 2px 0 rgb(0 0 0 / 20%), 0 1px 10px 0 rgb(0 0 0 / 10%) !important;
      box-shadow: 0 0 2px 0 rgb(0 0 0 / 20%), 0 1px 10px 0 rgb(0 0 0 / 10%) !important;
      opacity: 1;
      -webkit-transition: .3s;
      -o-transition: .3s;
      transition: .3s;
      height: 220px;
      border: 3px solid var(--cdn_white);
      border-top: 0px;
      text-align: center;}
  
  #clavs .grider_viewer project p,
  #clavs .grider_viewer project p {
      width: 100%;
      right: 0px;
      left: 0px;
      text-align: center;
      background: var(--cdn_white);
      color: var(--cdn_primary);
      border-radius: 10px 10px 0px 0px;
      left: 0px;
      right: 0px;
      width: 100%;
      text-align: center;
      padding: 5px;
      white-space: nowrap;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      padding: 5px 10px}
  
  #clavs .grider_viewer project p,
  #clavs .grider_viewer project p {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      z-index: 3;}
  
  #clavs .grider_viewer project img,
  #clavs .grider_viewer project img {
      position: absolute;
      left: 0px;
      top: 34px;
      right: 0px;
      bottom: 0px;}
  
  #clavs .grider_viewer .is_touch:hover p_open,
  #clavs .grider_viewer .is_touch:hover p_open {
      top: 45px !important;}
  
  #clavs .grider_viewer project fiv,
  #clavs .grider_viewer project fiv {
      position: absolute;
      right: 10px;
      top: 39px;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
      enable-background: new 0 0 512 512 !important;
      -webkit-transition: .3s;
      -o-transition: .3s;
      transition: .3s;
      background: var(--cdn_primary);
      width: 20px;
      text-align: center;
      height: 20px;
      z-index: 3;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      border-radius: 40px;
      color: var(--cdn_white);}
  
  #clavs .grider_viewer project fiv .bi-info-circle,
  #clavs .grider_viewer project fiv .bi-info-circle {
      display: block;
      margin: auto;
      margin-top: -1px;}
  
  #clavs .grider_viewer,
  #clavs .grider_viewer {
      z-index: 1;
      background: transparent !important;}
  
  #clavs .grider_viewer project p,
  #clavs .grider_viewer project p {
      background: var(--primary_light);}
  
  #clavs .grider_viewer video,
  #clavs .grider_viewer img,
  #clavs .grider_viewer div_hr,
  #clavs .grider_viewer video,
  #clavs .grider_viewer img,
  #clavs .grider_viewer div_hr {
      border-color: var(--primary_light);}
  
  #clavs .grider_viewer .is_touch:hover p_open,
  #clavs .grider_viewer .is_touch:hover p_open {
      top: 45px !important;
      opacity: 1;}
  
  #clavs .grider_viewer .is_touch:hover p_open.open_img,
  #clavs .grider_viewer .is_touch:hover p_open.open_img {
      top: unset !important;
      bottom: 45px !important;}
  
  #clavs .grider_viewer project p span,
  #clavs .grider_viewer project p span {
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));
      enable-background: new 0 0 512 512 !important;}
  
  #clavs iframe:not(.iframe_mask),
  #clavs .shadow_iframe,
  #clavs .grider_viewer,
  #clavs .grider_viewer {
      top: 0px !important;
      }
  
  grider_viewer.gridsH.grids.g_gallery {}
  
  #clavs .grider_viewer.gridsH.grids.g_gallery project p,
  grider_viewer.gridsH.grids.g_gallery project p {
      display: none;}
  
  .grider_viewer.gridsH.grids.g_gallery project,
  grider_viewer.gridsH.grids.g_gallery project {
      height: 228px !important;
      -webkit-transform: none !important;
      -ms-transform: none !important;
      transform: none !important;}
  
  .grider_viewer.gridsH.grids.g_gallery project img,
  grider_viewer.gridsH.grids.g_gallery project img {
      top: 0px;}
  
  .grider_viewer.gridsH.grids.g_gallery project grider_box,
   .grider_viewer.gridsH.grids.g_gallery project grider_box {
      height: 247px !important;
      bottom: unset !important;
      margin: 0px !important;}
  
  .grider_viewer.gridsH.grids.g_gallery project p_open,
  grider_viewer.gridsH.grids.g_gallery project p_open {
      display: none;}
  
  .grider_viewer.gridsH.grids.g_gallery project img,
  grider_viewer.g_gallery project img {
      border: 3px solid var(--primary_light) !important;
      border-radius: 5px !important;
      top: 0px !important;}
  
  .grider_viewer.gridsH.grids.g_gallery project,
  grider_viewer.gridsH.grids.g_gallery project {
      line-height: 0px !important;}
  
  .grider_viewer.gridsH.grids.g_gallery project fiv,
  grider_viewer.g_gallery project fiv {
      top: 10px !important;}
  
  .grider_viewer.gridsH.grids.g_gallery project fiv .bi-info-circle,
  grider_viewer.g_gallery project fiv .bi-info-circle {
      margin-top: 2px !important;
      margin-left: 2px !important;}
  
  .grider_viewer.gridsH.grids.g_gallery *,
  grider_viewer.g_gallery * {
      -webkit-transition: 0.3s !important;
      -o-transition: 0.3s !important;
      transition: 0.3s !important;}
  
  grider_viewer.gridsH.grids.g_gallery,
  grider_viewer.gridsH.grids.g_gallery * {
      -webkit-transition: 0.3s !important;
      -o-transition: 0.3s !important;
      transition: 0.3s !important;}
  
  grider_viewer.gridsH.grids.g_gallery project {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);}
  
  grider_viewer.gridsH.grids.g_gallery project grider_box {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;}
  
  grider_viewer.gridsH.grids.g_gallery project grider_box img {
      border-radius: 4px !important;}
  
  grider_viewer.gridsH.grids.g_gallery project grider_box {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;}
  
  grider_viewer.gridsH.grids.g_gallery project grider_box img {
      border-radius: 4px !important;}
  
  #clavs .grider_viewer.g_gallery project fiv,
  #clavs .grider_viewer.g_gallery project fiv {
      border-radius: 3px !important;
      width: 25px;
      height: 26px;}
  
  #clavs .grider_viewer.g_gallery project fiv i.bi-fullscreen ,
  #clavs .grider_viewer.g_gallery project fiv i.bi-fullscreen {
      font-size: 18px;
      margin-top: 3.5px;
      margin-left: 3.5px;}
  
  #clavs .grider_viewer.g_gallery project fiv ,
  #clavs .grider_viewer.g_gallery project fiv {
      background: rgb(0 0 0 / 52%);
      color: white;}
  
  #clavs .grider_viewer,
  #clavs .grider_viewer {
      padding-top: 0px !important;}
  
  #clavs .grider_viewer project img.loader_post, 
  #clavs .grider_viewer project img.loader_post {
      z-index: -1;
      width: 50px !important;
      height: 50px !important;
      border: none !important;
      margin: auto;
      pointer-events: none;
      top: 0px !important;}
  
  body[data-url-id="yes"] div#clavs:hover .grider_viewer:hover project:hover,
  body[data-url-id="yes"] div#clavs:hover .grider_viewer:hover project:hover,
  body[data-url-id="/?p=projects"] div#clavs:hover .grider_viewer:hover project:hover,
  body[data-url-id="/?p=projects"] div#clavs:hover .grider_viewer:hover project:hover {
      opacity: 1;}
  
  body[data-url-id="yes"] div#clavs:hover .grider_viewer:hover project:not(:hover) *,
  body[data-url-id="/?p=projects"] div#clavs:hover .grider_viewer:hover project:not,
  body[data-url-id="yes"] div#clavs:hover .grider_viewer:hover project:not(:hover) *,
  body[data-url-id="/?p=projects"] div#clavs:hover .grider_viewer:hover project:not(:hover) * {
      opacity: 0.7;}
  
  body[data-url-id="yes"] div#clavs:hover .grider_viewer:hover project:hover,
  body[data-url-id="yes"] div#clavs:hover .grider_viewer:hover project:hover {
      opacity: 1;}
  
  body[data-url-id="yes"] div#clavs:hover .grider_viewer:hover project:not(:hover) * {
      opacity: 0.7;}
  
  body[data-url-id="yes"] div#clavs:hover .grider_viewer:hover project img.loader_post {
      opacity: 0;}
  
  body[data-url-id="/?p=projects"] div#clavs:hover .grider_viewer project:hover,
  body[data-url-id="yes"] div#clavs:hover .grider_viewer project:hover {
      -webkit-transform: scale(1.05) !important;
      -ms-transform: scale(1.05) !important;
      transform: scale(1.05) !important;}
  
  div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer {
      position: fixed;
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: calc(100% - 50px);
      display: block;}
  
  div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer sp_clv {
      position: absolute;
      background: transparent;
      width: 100%;
      height: 100%;
      bottom: 0px;
      top: 0px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      z-index: 33333;
      color: white;
      font-size: 13px;
      text-align: center;}
  
  div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer project:not([box-ui="uit-gallery"]) fiv {
      display: none !important;}
  
  div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer {
      padding: 5px !important;}
  
  div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer sp_clv i {
      font-size: 40px;
      width: 60px;
      height: 60px;
      display: block;}
  
  div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer p-title {
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
      enable-background: new 0 0 512 512 !important;
      -webkit-transition: .3s;
      -o-transition: .3s;
      transition: .3s;
      text-transform: capitalize;}
  
  div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer project img {
      opacity: 0.7;}
  
  div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer img_drps {
      position: absolute;
      width: 100%;
      height: calc(100% - 15px);
      background: rgb(0 0 0 / 0.5);
      z-index: -1;
      border-radius: 10px !important;}
  
  #clavs .grider_viewer project:hover p_open {
      top: 45px !important;
      opacity: 1;
      z-index: 333333333;}
  
  body div.solarsystem,
  body div-solarsystem,
  body[data-category-name="astronomy"] #clavs .grider_viewer {
      -webkit-transition: .3s;
      -o-transition: .3s;
      transition: .3s;}
  
  body[data-category-name="astronomy"].active #clavs .grider_viewer {
      opacity: 0;
      pointer-events: none;
      -webkit-transform: translateY(100dvh);
      -ms-transform: translateY(100dvh);
      transform: translateY(100dvh);}
  
  body[data-category-name="astronomy"] .grider_viewer.gridsH.grids {
      -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(60%, black), to(transparent));
      -webkit-mask-image: linear-gradient(black 60%, transparent);
      mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(60%, black), to(transparent));
      mask-image: linear-gradient(black 60%, transparent);}
  
  #clavs .grider_viewer video {
      -webkit-mask-image: radial-gradient(#00000026, #000000);
      mask-image: radial-gradient(#00000026, #000000);}
  
  #clavs .grider_viewer#gallery-container:not(.g_gallery) video,
  #clavs .grider_viewer#gallery-container:not(.g_gallery) img,
  #clavs .grider_viewer#gallery-container:not(.g_gallery) div_hr {
      top: 0px;
      margin-top: 34px;}
  
  div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer sp_clv {
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1)) !important;
      -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1)) !important;
      enable-background: new 0 0 512 512 !important;
      -webkit-transition: .3s !important;}
  
  div#clavs div_header,
  div#clavs br_ta,
  #clavs .grider_viewer {
      transition: .3s !important;}
  
  div#clavs.scrollactive .grider_viewer {
      transform: translateY(0px);
      padding-top: 10px !important;}
  
  div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer:hover project:not(:hover) {
      opacity: 0.5 !important;}
  
  grider_viewer.grider_viewer_f {
      top: 0px !important;
      padding: 0px !important;}
      `;
      this.shadow.appendChild(style);
      
    } 
  
  
    blogloader_img (id = "") {
      var arr = window.portfolio.data.blog;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
          if (welcomer.gallery_temp.length > 0) {
            welcomer.eronelit_gallery.call_ui(welcomer.gallery_temp);
          } else {
            var clickedElement = event.target || event;
            const ImagePreview_src = document.createElement("image-preview");
            ImagePreview_src.src(clickedElement.getAttribute("src"));
            document.body.appendChild(ImagePreview_src);
          }
        }
      }
    }
  
    isimagec(arr = [], what = "image") {
      var is_image = false;
      is_image = arr.indexOf(what) !== -1;
      return is_image;
    }
  
    category_tempator(d = { me: null, where: "", data: [], name: "", nest: false }) {
       
    
      const br_ta = this.blog_br_ta;
      this.blog_br_ta.classList.add("active");
  
      if (d.nest) {
        br_ta.classList.add("sub_cat");
        br_ta.style.opacity = "0";
      }
     
      const unique = [...new Set(d.data)];
       
      const ta_all = document.createElement("ta_f");
      ta_all.setAttribute("data-title", `Click "All" to open all categories`);
      ta_all.setAttribute("data-c", unique.length);
      ta_all.className = "active";
      ta_all.setAttribute("data-category", "All");
      ta_all.textContent = "All ";
      const span_count = document.createElement("span");
      span_count.textContent = this.blogljoad_posts_category_cbc
        ? this.blogljoad_posts_category_cbc("All")
        : "";
      ta_all.appendChild(span_count);
    
      ta_all.onclick = () => {
        this.blog_br_ta.querySelectorAll("ta_f").forEach(el => el.classList.remove("active"));
        this.box_creator("All");
        if (d.nest) {
          this.uBoss({}, "", `/?p=blog&c=${d.me.getAttribute("data-scn")}`);
        } else {
          this.uBoss({}, "", `/?p=blog`);
        }
      };
    
      if (!d.nest) this.blog_br_ta.appendChild(ta_all);
     
      unique.forEach(re => {
        const ta_item = document.createElement("ta_f");
        ta_item.setAttribute("data-c", unique.length);
        ta_item.setAttribute("data-category", re);
        ta_item.setAttribute(
          "data-title",
          `Click "${this.capitalize_str ? this.capitalize_str(re) : re}" to open category`
        );
    
        let iconHTML = "";
        switch (re.toLowerCase()) {
          case "telegram": iconHTML = `<i class="bi bi-telegram"></i> `; break;
          case "deviantart": iconHTML = `<i class="fab fa-deviantart"></i> `; break;
          case "video": iconHTML = `<i class="bi bi-film"></i> `; break;
          case "astronomy": iconHTML = `<i class="fas fa-space-shuttle"></i> `; break;
        }
    
        ta_item.innerHTML = `${iconHTML}${re}<span>${this.blogljoad_posts_category_cbc ? this.blogljoad_posts_category_cbc(re) : ""}</span>`;
    
        ta_item.onclick = () => {
          br_ta.querySelectorAll("ta_f").forEach(el => el.classList.remove("active"));
          ta_item.classList.add("active");
    
          this.box_creator(re);
    
          const lower = re.toLowerCase();
          if (lower !== "all") {
            if (d.nest) {
              this.uBoss({}, "", `/?p=blog&c=${d.me.getAttribute("data-scn")}&sc=${re}`);
            } else {
              this.uBoss({}, "", `/?p=blog&c=${re}`);
            }
    
            if (lower === "astronomy") {
              document.body.classList.add("active");
            } else {
              document.body.classList.remove("active");
            }
    
            document.body.setAttribute("data-category-name", re);
            if (this.titleC) this.titleC(`Blog > ${re} - Marko Nikolić`);
          }
        };
    
        br_ta.appendChild(ta_item);
      });
     
      d.where.prepend(br_ta);
    
      setTimeout(() => br_ta.removeAttribute("style"), 100);
    }
    
  
    img_load (t) {
      t.classList.add("active");
      t.removeAttribute("style");
      t.removeAttribute("onload");
    }
   
    
    box_creator(tt_category_name = "All") {
   
      this.grider_viewer.querySelectorAll("project").forEach((e) => {e.remove()});
    
      const arr = this.data.blog;
      let div_not_i = 0;
      var arrayr = [];
  
      const fthis = this;
  
      
    
      arr.forEach((v) => {
        if (!v || !v.title) return;
    
        // Filtriranje po kategoriji
        let shouldShow = tt_category_name.toLowerCase() === "all";
        if (!shouldShow && Array.isArray(v.category)) {
          shouldShow = v.category.includes(tt_category_name);
        }
        if (!shouldShow) return;
    
        // === <project> ===
        const project = document.createElement("project");
        project.setAttribute("data-category", window.btoa(v?.category));
        project.setAttribute("id-int", div_not_i);
        project.setAttribute("title", v.title);
        project.style.transform = 'scale(0);';
  
        if (v.type === "text") {
          project.classList.add("section_loadet_img");
        }
    
        // === <grider_box> ===
        const grider_box = document.createElement("grider_box");
    
        // <p><span>{title}</span></p>
        const p = document.createElement("p");
        const spanTitle = document.createElement("span");
        spanTitle.textContent = v.title;
        p.appendChild(spanTitle);
        grider_box.appendChild(p);
    
        // === p_open button ===
        const p_open = document.createElement("p_open");
        p_open.setAttribute("title", `Open:/?p=blog&id=${v.id}`);
        p_open.onclick = () => {
          const pageer = document.createElement("page-c");
          document.body.appendChild(pageer);
          pageer.load(v.id,'blog_id');
        };
        const i_link = document.createElement("i");
        i_link.className = "bi bi-link";
        p_open.appendChild(i_link);
        p_open.appendChild(document.createTextNode(" Open post"));
        grider_box.appendChild(p_open);
    
        // === p_image button (ako je image) ===
        if (fthis.isimagec(v?.category, "image")) {
          const p_image = document.createElement("p_open");
          p_image.className = "open_img";
          p_image.setAttribute("data-title", "Click for view image in full size");
          p_image.onclick = () => fthis?.blogloader_img(v.id);
          const i_img = document.createElement("i");
          i_img.className = "bi bi-image-fill";
          p_image.appendChild(i_img);
          p_image.appendChild(document.createTextNode(" Open image"));
          grider_box.appendChild(p_image);
        }
    
        // === info ikonica ===
        const fiv = document.createElement("fiv");
        const i_info = document.createElement("i");
        i_info.className = "bi bi-info-circle";
        i_info.title = "Go to blog post...";
        i_info.onclick = () => window.welcomer?.blogloader(v.id);
        fiv.appendChild(i_info);
        grider_box.appendChild(fiv);
    
        // === loader spinner img ===
        const loader_img = document.createElement("img");
        loader_img.className = "loader_post";
        loader_img.setAttribute("height", "50");
        loader_img.setAttribute("width", "50");
        loader_img.src = window.welcomer?.loader_svg || "";
        if (v.type === "text") loader_img.style.display = "none";
        grider_box.appendChild(loader_img);
    
        // === Badge ikone ===
        const bagdes = [
          { name: "text", data: "bi bi-file-text-fill", is_me: ["p", "h1", "h2", "h3", "h4", "h5", "span", "tspan"] },
          { name: "image", data: "bi bi-file-earmark-image-fill", is_me: ["img"] },
          { name: "video", data: "bi bi-file-earmark-play-fill", is_me: ["video", "video-player-v2"] },
          { name: "iframe", data: "bi bi-file-earmark-richtext-fill", is_me: ["iframe"] },
        ];
    
        const i_list = document.createElement("i_list");
        if (v?.page) {
          bagdes.forEach((badge) => {
            const found = badge.is_me.some(tag => v.page.includes(`<${tag}`));
            if (found) {
              const icon = document.createElement("i");
              icon.className = badge.data;
              i_list.appendChild(icon);
            }
          });
        }
    
        // === Slika ili opis ===
        if (v.type === "text") {
          const div_txt = document.createElement("div_txt");
          const span = document.createElement("span");
          span.textContent = v?.description || "";
          div_txt.appendChild(span);
          grider_box.appendChild(i_list);
          grider_box.appendChild(div_txt);
          project.classList.add("active");
          project.removeAttribute("style"); 
          project.style.transform = 'none';  
        } else {
          const img = document.createElement("img");
          img.loading = "lazy";
          img.setAttribute("ondragstart", "return false;");
          img.onload = (e) => {
            project.classList.add("active");
            project.removeAttribute("style"); 
            project.style.transform = 'none';  
          };
          img.src = v.thumbail?.includes("data:") ? v.thumbail : `${v.thumbail}&thumb=true`;
          img.setAttribute("data-zoom-image", img.src);
          img.alt = v.title;
          grider_box.appendChild(i_list);
          grider_box.appendChild(img);
        }
    
        project.appendChild(grider_box);
        this.grider_viewer.append(project);
    
        div_not_i++;
      });
    
      // Finalna obrada zaglavlja
      this.div_header.classList.add("ld_completeld_complete2");
      this.header({
        title: "Marko Nikolić > Blog",
        searchPlaceholder: "Search ...",
        logo: "/svg_logo_backscr_img.svg",
        buttonsRight: [
          { icon: "bi-search", onclick: () =>{
             const  p_search = document.createElement("p-search"); 
          this.wrapper.appendChild(p_search); 
          } },
          { icon: "bi-filetype-pdf pdf_download", style: "display:none;" },
          { icon: "bi bi-house pdf_page_home_btn", onclick: "welcomer.blogloader('all');", style: "display:none;" },
          { icon: "bi bi-telegram tg_button", onclick: "welcomer.Social.tg.open();" },
          { icon: "bi bi-share", onclick: () => {
            const Uri = this.div_header.getAttribute("data-url"),
            title =  this.div_header_span.textContent;
            
            if (navigator.share) {
              navigator.share({
                  title: title,
                  text: `Shared from - ${window.location.origin}`,
                  url: `${Uri}`,
                })
                .then(() => {})
                .catch((error) => {});
              
            }
          } },
          { icon: "bi bi-x-lg close_btnf", onclick: () => { this.exit(); } }
        ]
      });
  
      this.category_tempator({
        me: "all",
        where: this.wrapper,
        data: window.portfolio.data.blog,
        name: tt_category_name,
        nest: false
      });
    }
    
   
    decodeEntities(encodedString) {
      const textarea = document.createElement('textarea');
      textarea.innerHTML = encodedString;
      return textarea.value;
    }
    exit(){
      this.remove();
    }
    header(config = {
      title: "Blog > Dnevnik | 🕊🤍✨ II",
      searchPlaceholder: "Search ...",
      logo: "/svg_logo_backscr_img.svg",
      buttonsRight: [
        { icon: "bi-search", onclick: () =>{
           const  p_search = document.createElement("p-search"); 
        this.wrapper.appendChild(p_search); 
        } },
        { icon: "bi-filetype-pdf pdf_download", style: "display:none;" },
        { icon: "bi bi-house pdf_page_home_btn", onclick: "welcomer.blogloader('all');", style: "display:none;" },
        { icon: "bi bi-telegram tg_button", onclick: "welcomer.Social.tg.open();" },
        { icon: "bi bi-share", onclick: () => {
          const Uri = this.div_header.getAttribute("data-url"),
          title =  this.div_header_span.textContent;
          
          if (navigator.share) {
            navigator.share({
                title: title,
                text: `Shared from - ${window.location.origin}`,
                url: `${Uri}`,
              })
              .then(() => {})
              .catch((error) => {});
            
          }
        } },
        { icon: "bi bi-x-lg close_btnf", onclick: () => { this.exit(); } }
      ]
    }) {
      
      this.div_header.className = "ld_completeld_complete ld_completeld_complete2";
      this.div_header.setAttribute("data-url", "https://portfolio2.localhost/?p=blog&id=1141736809");
      this.div_header.querySelectorAll("*").forEach(e => e.remove());
  
  
      // Logo
      const logo = document.createElement("img");
      logo.src = config.logo;
      logo.id = "logo_backscr_img";
      logo.alt = "Logo";
      this.div_header.appendChild(logo);
  
      // Reload dugme
      const reload = document.createElement("i");
      reload.id = "reaload_page";
      reload.className = "bi bi-arrow-clockwise";
      reload.setAttribute("data-onclick", "welcomer.reload_me(this);");
      reload.style.display = "block";
      this.div_header.appendChild(reload);
  
      // SVG spinner
      const svg = document.createElement("svg");
      svg.className = "Vjideo_sjpinner";
      svg.setAttribute("viewBox", "0 0 50 50");
      svg.style.display = "none";
  
      const circle = document.createElement("circle");
      circle.className = "path";
      circle.setAttribute("cx", "25");
      circle.setAttribute("cy", "25");
      circle.setAttribute("r", "20");
      circle.setAttribute("fill", "none");
      circle.setAttribute("stroke-width", "4");
      svg.appendChild(circle);
      this.div_header.appendChild(svg);
  
      // Naslov
      this.div_header_span = document.createElement("span");
      this.div_header_span.textContent = config.title;
      this.div_header.appendChild(this.div_header_span);
  
      // Pretraga
      const btns_i = document.createElement("btns_i");
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = config.searchPlaceholder;
      input.setAttribute("data-hmm", "search");
      input.setAttribute("onkeyup", "welcomer.search_Kompjiler(this);");
      btns_i.appendChild(input);
  
      const closeI = document.createElement("i");
      closeI.className = "bi bi-x-lg";
      closeI.setAttribute("data-hmm", "closeMe");
      closeI.setAttribute("data-onclick", "welcomer.search_Kompjiler(this);");
      btns_i.appendChild(closeI);
      this.div_header.appendChild(btns_i);
  
      // Dugmad desno
      const btns_r = document.createElement("btns_r");
      config.buttonsRight.forEach(btn => {
        const i = document.createElement("i");
        i.className = btn.icon;
        if (btn.onclick) { 
          // i.setAttribute("data-onclick", btn.onclick);
          if (typeof btn.onclick === "function") {
            i.addEventListener("click", btn.onclick );
          }
          }
        if (btn["data-title"]) i.setAttribute("data-title", btn["data-title"]);
        if (btn.style) i.setAttribute("style", btn.style);
        btns_r.appendChild(i);
      });
      this.div_header.appendChild(btns_r);
  
      return  this.div_header;
    }
  
    // Učitavanje podataka
    load(id = "", type = "") {
      if(this.bra_div_img.classList.contains("active")){
        this.bra_div_img.classList.remove("active");
      }
      let f = {},
      blogData = ''; 
      this.custom_scroll.style.display = 'none';
      this.grider_viewer.style.display = 'none';
  
      if (type == "blog_category"){
        this.grider_viewer.style.display = 'block';
        this.blog_br_ta.style.display = 'inline-flex';
        this.grider_viewer.classList.add("gridsH");
        this.grider_viewer.classList.add("grids");
        this.grider_viewer.removeAttribute("style");
       this.box_creator(id);
  
  
      this.blog_br_ta.classList.remove("active");
      
  
      this.wrapper.querySelectorAll("br_ta.sub_cat").forEach((element) => {
         element.remove();
      });
       
       return;
      }
  
  
      if(type == "blog_id"){
        this.custom_scroll.style.display = 'block';
      blogData = window.portfolio?.data?.blog || [];
      blogData.forEach(res => {
        if (res.id == id) f = res;
      });
  
      
  
      const res = this.decodeEntities(f.page || "");
      this.gallery_temp = f.gallery || {};
    
      if (typeof this.p_container.set === "function") {
        this.p_container.set(`${res}`, f);
      } else {
        this.p_container.innerHTML = res;
      }
      
      
  
    
        this.bra_div_img.src = f.thumbail;
        this.bra_div_img.classList.add("active");
        return;
      }
    }
  
    history(url = "") {
      const ar = {}, v = "";
  
      history.replaceState(ar, v, `${url}`);
      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get("p") || null;
      const myParam_id = urlParams.get("id") || null;
  
      if (myParam && !myParam_id) {
        document.body.setAttribute("data-d", `${myParam}`);
      }
      document.body.setAttribute("data-url-id", url);
  
      if (url === "/?p=blog" || url === "?=blog") {
        this.wrapper.classList.add("active_scr");
      }
    }
  
    connectedCallback() {
      const headerElement = this.header();
      this.wrapper.appendChild(headerElement);
    }
  
    disconnectedCallback() { 
      const btns_r = this.div_header?.querySelector("btns_r");
      if (btns_r) {
        btns_r.querySelectorAll("i").forEach(i => {
          const clone = i.cloneNode(true);  
          i.replaceWith(clone);
        });
      }
     
      this.gallery_temp = {};
     
      if (this.custom_scroll?.clearLightDOM instanceof Function) {
        this.custom_scroll.clearLightDOM();
      } else {
        while (this.custom_scroll?.firstChild) {
          this.custom_scroll.removeChild(this.custom_scroll.firstChild);
        }
      }
     
      if (this.wrapper) {
        this.wrapper.querySelectorAll("p-search, page-c, image-preview").forEach(el => el.remove());
      }
     
      this.div_header = null;
      this.div_header_span = null;
      this.blog_br_ta = null;
      this.custom_scroll = null;
      this.p_container = null;
      this.grider_viewer = null;
      this.grider_viewer_main = null;
      this.wrapper = null;
    }
  }