window.draggable = { style_left: "", style_top: "", enabled: false };
if (window.TrustedTypes) {
  const policy = TrustedTypes.createPolicy("default", {
    createHTML: (input) => input,
    createScript: (input) => input,
  });
}

window.CDN_URL = "cdn.markonikolic98.com";


const wlc = {
   Application: class {
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
    
};


window.solarday = function(){
  const startDate = new Date('1998-03-16'); 
const currentDate = new Date(); 
const diffInMs = currentDate - startDate; 
const daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
return daysPassed;
};
window.getJSON = function (call = () => {}) {
  fetch(`${window.location.origin}/feed`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.stmp}`,
    },
    body: JSON.stringify({
      type: "f",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      window.portfolio = data;
      call();
    })
    .catch((error) => {
      console.error("ERROR:", error);
    });
};

function CTHP() {
  welcomer.blg_history_replace("/");
  welcomer.start();
}
function base64Encode(str) {
  const encoder = new TextEncoder();
  const buffer = encoder.encode(str);
  return btoa(String.fromCharCode.apply(null, buffer));
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
  

class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() { 
    const title     = this.getAttribute('title') || '';
    const category  = this.getAttribute('data-category') || '';
    const idInt     = this.getAttribute('id-int');
    const postId    = this.getAttribute('data-post-id');
    const thumb     = this.getAttribute('data-thumb') || '';
    const zoomImg   = this.getAttribute('data-zoom-image') || thumb;
    const type      = this.getAttribute('data-type') || 'image';
    const description = this.getAttribute('data-description') || '';
    const page      = this.getAttribute('data-page') || '';

    // Root container
    const project = document.createElement('project');
    project.setAttribute('data-category', category);
    project.setAttribute('id-int', idInt);
    project.title = title;
    if (this.hasAttribute('onclick')) {
      project.setAttribute('onclick', this.getAttribute('onclick'));
    }

    // grider_box
    const box = document.createElement('grider_box');
    project.appendChild(box);

    // Title
    const titleP = document.createElement('p');
    const spanTitle = document.createElement('span');
    spanTitle.textContent = title;
    titleP.appendChild(spanTitle);
    box.appendChild(titleP);

    // Open post / download button
    const btnOpen = document.createElement('p_open');
    const openTitle = type !== 'text'
      ? `Open:/?p=blog&id=${postId}`
      : `Download:${title}`;
    btnOpen.setAttribute('title', openTitle);
    btnOpen.addEventListener('click', () => welcomer.blogloader(postId));
    btnOpen.innerHTML = type !== 'text'
      ? '<i class="bi bi-link"></i> Open post'
      : '<i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download)';
    box.appendChild(btnOpen);

    // Open image button
    if (welcomer.isimagec(JSON.parse(atob(category)), 'image')) {
      const btnImg = document.createElement('p_open');
      btnImg.classList.add('open_img');
      btnImg.setAttribute('data-title', 'Click for view image in full size');
      btnImg.addEventListener('click', () => welcomer.blogloader_img(postId));
      btnImg.innerHTML = '<i class="bi bi-image-fill"></i> Open image';
      box.appendChild(btnImg);
    }

    // Info icon
    const fiv = document.createElement('fiv');
    const info = document.createElement('i');
    info.className = 'bi bi-info-circle';
    info.title = 'Go to blog post...';
    info.addEventListener('click', () => welcomer.blogloader(postId));
    fiv.appendChild(info);
    box.appendChild(fiv);

    // Loader placeholder
    if (type === 'image') {
      const loaderImg = document.createElement('img');
      loaderImg.src = welcomer.loader_svg;
      loaderImg.className = 'loader_post';
      loaderImg.height = 50;
      loaderImg.width = 50;
      box.appendChild(loaderImg);
    }

    // Content: text or image
    if (type === 'text') {
      const txt = document.createElement('div_txt');
      const spanDesc = document.createElement('span');
      spanDesc.textContent = description;
      txt.appendChild(spanDesc);
      box.appendChild(txt);
    } else {
      const list = document.createElement('i_list');
      // Badges
      const badgeCfg = [
        { tag:'p', icon:'bi bi-file-text-fill' },
        { tag:'img', icon:'bi bi-file-earmark-image-fill' },
        { tag:'video', icon:'bi bi-file-earmark-play-fill' },
        { tag:'iframe', icon:'bi bi-file-earmark-richtext-fill' }
      ];
      badgeCfg.forEach(cfg => {
        if (page.includes(`<${cfg.tag}`)) {
          const i = document.createElement('i');
          i.className = cfg.icon;
          list.appendChild(i);
        }
      }); 
      const img = document.createElement('img');
      img.loading = 'lazy';
      if (!welcomer.isMobile()) img.classList.add('is_touch');
      img.alt = title;
      img.src = thumb;
      img.setAttribute('data-zoom-image', zoomImg);
      img.ondragstart = () => false;
      img.onload = () => welcomer.loaded_img(img, idInt);
      list.appendChild(img);

      box.appendChild(list);
    }
 
    this.shadowRoot.appendChild(project);
  }
}

class CustomDropdown extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot = shadow;
    this._data = null;
    this._ui_lang = {
      "select_option": "Select Option",
      "ajax_error_json": "Invalid JSON in 'data' attribute:"
  };
    this._selectedText = this._ui_lang['select_option']
    this._customTemplate = null;
    this.selected = "";
    this._toggleDropdown = this._toggleDropdown.bind(this);
    this._documentClickHandler = this._documentClickHandler.bind(this);
    this._optionClickHandler = this._optionClickHandler.bind(this);
    this._searchHandler = this._searchHandler.bind(this);
  }
  static get observedAttributes() {
    return ['data', 'data-ajax'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data') {
      try {
        this._data = JSON.parse(newValue);
        this.render();
      } catch (error) {
        console.error("Invalid JSON in 'data' attribute:", error);
        this._data = null;
      }
    } else if (name === 'data-ajax') {
      if (newValue) {
        this._fetchData(newValue);
      }
    }
  }
  connectedCallback() {
    if (this.hasAttribute("data-ajax")) {
      const url = this.getAttribute("data-ajax");
      this._fetchData(url);
    } else if (this.hasAttribute("data")) {
      try {
        this._data = JSON.parse(this.getAttribute("data"));
      } catch (e) {
        console.error("Invalid JSON in 'data' attribute:", e);
        this._data = null;
      }
      this.render();
      this._addEventListeners();
    } else {
      this.render();
      this._addEventListeners();
    }
  }
  disconnectedCallback() {
    this._removeEventListeners();
  }
  _fetchData(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network error: " + response.status);
        }
        return response.json();
      })
      .then(json => {
        this._data = json;
        this.render();
        this._addEventListeners();
      })
      .catch(error => {
        console.error("Error fetching AJAX data:", error);
      });
  }
  setTemplate(templateString) {
    this._customTemplate = templateString;
    this.render();
  }
  setData(data) {
    this._data = data;
    this.render();
    this._addEventListeners();
  }
  selectByID(id = ""){
    
  }
  render() {
    this._removeEventListeners();
    if (this._data && this._data.selected) {
      let selectedValue = this._data.selected;
      let found = false;
      if (this._data.groups) {
        this._data.groups.forEach(group => {
          if (group.options) {
            group.options.forEach(option => {
              if (option.value === selectedValue) {
                this._selectedText = option.text;
                

                this._optionClickHandler(event);


                found = true;
              }
            });
          }
        });
      }
      if (!found) {
        this._selectedText = "Izaberi opciju";
      }
    } else {
      this._selectedText = "Izaberi opciju";
    }
    while (this.shadowRoot.firstChild) {
      this.shadowRoot.firstChild.remove();
    }
    const style = document.createElement("style");
    style.textContent = `
      .custom-dropdown {
        border: 1px solid #ccc;
        width: 450px;
        background: #fff;
        font-family: Arial, sans-serif;
        position: relative;
        user-select: none;
      }
      .dropdown-header {
        padding: 10px;
        cursor: pointer;
        background: #f8f8f8;
        border-bottom: 1px solid #ccc;
        display:grid;
      }
      .dropdown-options {
        max-height: 300px;
        overflow-y: auto;
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 1000;
        background: #fff;
        border: 1px solid #ccc;
        border-top: none;
      }
      .search-container {
        padding: 5px;
        border-bottom: 1px solid #ccc;
        position: sticky;
        top: 0;
        background: white;
      }
      .search-input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .group {
        margin-bottom: 5px;
        border-bottom: 1px solid #eee;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
      }
      .group-label {
        font-weight: bold;
        padding: 5px 10px;
        background: #f0f0f0;
        border-bottom: 1px solid #ddd;
      }
      .option {
        padding: 8px 10px;
        cursor: pointer;
      }
      .option:hover {
        background: #e2e2e2;
      }
      .option.selected {
        background: #d0e7ff;
      }
      .option.card {
        display: inline-flex;
        align-items: center;
      }
      .option.card img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 5px;
      }
      .option.card div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: baseline;
        border-left: 0.5px solid #2f506159;
        padding-left: 5px;
        margin-left: 5px;
      }
      .option.card div h5 {
        margin: 0 !important;
        margin-bottom: 5px !important;
      }
      .option.card div p {
        margin: 0 !important;
        margin-top: 5px !important;
        font-size: 11px;
      }
    `;
    const container = document.createElement("div");
    container.className = "custom-dropdown";
    const header = document.createElement("div");
    header.className = "dropdown-header";
    header.textContent = this._selectedText;
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "dropdown-options";
    const searchContainer = document.createElement("div");
    searchContainer.className = "search-container";
    const searchInput = document.createElement("input");
    searchInput.className = "search-input";
    searchInput.type = "text";
    searchInput.placeholder = "Pretraži...";
    searchContainer.appendChild(searchInput);
    optionsContainer.appendChild(searchContainer);
    if (this._data && this._data.groups && this._data.groups.length > 0) {
      this._data.groups.forEach(group => {
        const groupDiv = document.createElement("div");
        groupDiv.className = "group";
        if (group.label) {
          const groupLabel = document.createElement("div");
          groupLabel.className = "group-label";
          groupLabel.textContent = group.label;
          groupDiv.appendChild(groupLabel);
        }
        if (group.options && group.options.length > 0) {
          group.options.forEach(option => {
            const optionDiv = document.createElement("div");
            optionDiv.className = "option";
            if (this._data && this._data.selected && option.value === this._data.selected) {
              optionDiv.classList.add("selected");
            }
            optionDiv.setAttribute("data-value", option.value);
            if (option.type === "card") {
              optionDiv.classList.add("card");
              const img = document.createElement("img");
              img.onerror = function() {
                  img.src = "/logo.svg";
              };
              img.src = option.card.img;
              img.loading = "lazy";
              img.alt = option.text;
             
              optionDiv.appendChild(img);
              const cardDiv = document.createElement("div");
              const h5 = document.createElement("h5");
              h5.textContent = option.card.title;
              h5.style.margin = "0px";
              h5.style.marginBottom = "5px";
              cardDiv.appendChild(h5);
              const p = document.createElement("p");
              p.textContent = option.card.descr;
              p.style.margin = "0px";
              p.style.marginTop = "5px";
              cardDiv.appendChild(p);
              optionDiv.appendChild(cardDiv);
            } else {
              optionDiv.textContent = option.text;
            }
            groupDiv.appendChild(optionDiv);
          });
        }
        optionsContainer.appendChild(groupDiv);
      });
    } else {
      const groupDiv = document.createElement("div");
      groupDiv.className = "group";
      const optionDiv = document.createElement("div");
      optionDiv.className = "option";
      optionDiv.textContent = "Nema opcija";
      groupDiv.appendChild(optionDiv);
      optionsContainer.appendChild(groupDiv);
    }
    container.appendChild(header);
    container.appendChild(optionsContainer);
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
    this._headerEl = header;
    this._optionsEl = optionsContainer;
    this._searchInputEl = searchInput;
    this._addEventListeners();

    
  }
  _addEventListeners() {
    if (this._headerEl) {
      this._headerEl.addEventListener("click", this._toggleDropdown);
    }
    if (this._optionsEl) {
      this._optionsEl.addEventListener("click", this._optionClickHandler);
    }
    if (this._searchInputEl) {
      this._searchInputEl.addEventListener("keyup", this._searchHandler);
    }
    document.addEventListener("click", this._documentClickHandler);
  }
  _removeEventListeners() {
    if (this._headerEl) {
      this._headerEl.removeEventListener("click", this._toggleDropdown);
    }
    if (this._optionsEl) {
      this._optionsEl.removeEventListener("click", this._optionClickHandler);
    }
    if (this._searchInputEl) {
      this._searchInputEl.removeEventListener("keyup", this._searchHandler);
    }
    document.removeEventListener("click", this._documentClickHandler);
  }
  _toggleDropdown(e) {
    e.stopPropagation();
    if (this._optionsEl) {
      this._optionsEl.style.display = (this._optionsEl.style.display === "block") ? "none" : "block";
    }
  }
  _documentClickHandler(e) {
    const path = e.composedPath();
    if (!path.includes(this) && this._optionsEl) {
      this._optionsEl.style.display = "none";
    }
  }
  _updateHeaderContent(selectedValue) {
      if (!this._data) return;
  
      let selectedOption = null;
  
      this._data.groups.forEach(group => {
          group.options.forEach(option => {
              if (option.value === selectedValue) {
                  selectedOption = option;
              }
          });
      });
  
      if (!selectedOption) return;
  
      this._headerEl.innerHTML = '';
  
      if (selectedOption.type === 'card') {
          const cardDiv = document.createElement('div');
          cardDiv.classList.add('option', 'card');
  
          const img = document.createElement('img');
          img.onerror = () => img.src = '/logo.svg';
          img.src = selectedOption.card.img;
          img.loading = 'lazy';
          img.alt = selectedOption.text;
  
          const textDiv = document.createElement('div');
          const h5 = document.createElement('h5');
          h5.textContent = selectedOption.card.title;
  
          const p = document.createElement('p');
          p.textContent = selectedOption.card.descr;
  
          textDiv.appendChild(h5);
          textDiv.appendChild(p);
  
          cardDiv.appendChild(img);
          cardDiv.appendChild(textDiv);
  
          this._headerEl.appendChild(cardDiv);
      } else {
          this._headerEl.textContent = selectedOption.text;
      }
  }
  
  _optionClickHandler(e) {
      e.stopPropagation();
      const optionElem = e.target.closest('.option');
      if (optionElem) {
          const selectedValue = optionElem.getAttribute("data-value");
          this._data.selected = selectedValue;
          this._selectedText = optionElem.textContent;
          this.selected = selectedValue;
          this._updateHeaderContent(selectedValue);
  
          if (this._optionsEl) {
              this._optionsEl.style.display = "none";
          }
  
          const allOptions = this.shadowRoot.querySelectorAll('.option');
          allOptions.forEach(opt => opt.classList.remove("selected"));
          optionElem.classList.add("selected");
  
          this.dispatchEvent(new CustomEvent("optionSelected", {
              detail: { value: selectedValue, text: this._selectedText },
              bubbles: true,
              composed: true
          }));
      }
  }
  
  _searchHandler(e) {
    const query = e.target.value.toLowerCase();
    const groups = this.shadowRoot.querySelectorAll('.dropdown-options .group');
    groups.forEach(group => {
      const options = group.querySelectorAll('.option');
      let anyVisible = false;
      options.forEach(option => {
        const optionText = option.textContent.toLowerCase();
        if (optionText.includes(query)) {
          option.style.display = "block";
          anyVisible = true;
        } else {
          option.style.display = "none";
        }
      });
      group.style.display = anyVisible ? "block" : "none";
    });
  }
}


class CustomCombobox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.combobox = document.createElement("div");
    this.combobox.classList.add("custom-combobox");

    this.selected = document.createElement("div");
    this.selected.classList.add("combobox-selected");
    this.selected.textContent =
      this.getAttribute("placeholder") || "Izaberi opciju";

    this.items = document.createElement("div");
    this.items.classList.add("combobox-items");

    this.combobox.appendChild(this.selected);
    this.combobox.appendChild(this.items);
    this.shadowRoot.appendChild(this.combobox);

    const style = document.createElement("style");
    style.textContent = `
            .custom-combobox {
     position: relative;
     width: 200px;
     font-family: Arial, sans-serif;
 }

 *::-webkit-scrollbar {
     width: 5px;
 }

 *::-webkit-scrollbar-track {
     background: transparent;
 }

 *::-webkit-scrollbar-thumb {
     background-color: white;

 }

 *::-webkit-scrollbar-thumb:hover {
     background-color: white;
 }

 .custom-combobox:hover {

     background: #ffffff36;
 }

 .combobox-selected {
     background: trasparent;
     padding: 10px;
     border: 1px solid #ccc;
     cursor: pointer;
     color: white;
     border-radius: 5px;
     white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 }

 .combobox-items {
     position: absolute;
     width: 100%;
     background: #ffffff36;
     border: 1px solid #ccc;
     border-top: none;
     max-height: 150px;
     overflow-y: auto;
     color: white;
     display: none;
     z-index: 10;
     border-radius: 0 0 5px 5px;
     backdrop-filter: blur(5px);
 }

 .combobox-items div {
     padding: 10px;
     cursor: pointer;
 }

 .combobox-items div:hover {
     background: #ddd;
     color: #333;
 }

 .combobox-active .combobox-items {
     display: block;
 }
      `;
    this.shadowRoot.appendChild(style);

    this.selected.addEventListener("click", () => this.toggleDropdown());
    //  document.addEventListener("click", (event) => this.closeDropdown(event));
  }

  toggleDropdown() {
    this.combobox.classList.toggle("combobox-active");
  }

  closeDropdown(event) {
    if (!this.contains(event.target)) {
      this.combobox.classList.remove("combobox-active");
    }
  }

  addOption(value, text) {
    const item = document.createElement("div");
    item.textContent = text;
    item.setAttribute("data-value", value);
    item.addEventListener("click", () => this.selectOption(value, text));
    this.items.appendChild(item);
  }

  selectOption(value, text) {
    this.selected.textContent = text;
    this.selected.setAttribute("data-value", value);
    this.combobox.classList.remove("combobox-active");

    this.dispatchEvent(new CustomEvent("change", { detail: { value, text } }));
  }
}

class CustomSearch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
    this.query = "";
    this.Mydata = [];
    var dataf = [];
    var pr_i = 0;
    window.portfolio.data.projects.forEach((element) => {
      dataf.push({
        type: "image",
        url: element["href"],
        id: pr_i,
        cat: "projects",
        title: element["title"],
        thumb: element["img"],
      });
      pr_i++;
    });
    pr_i = 0;
    window.portfolio.data.blog.forEach((element) => {
      dataf.push({
        type: "image",
        url: element["source"],
        id: element["id"],
        cat: "blog",
        title: element["title"],
        thumb: element["thumbail"],
      });
    });
    this.Mydata = dataf;
  }

  render() {
    const style = document.createElement("style");
    style.textContent = ` 
      
  @import url('https://${window.CDN_URL}/node_modules/bootstrap-icons/font/bootstrap-icons.css');

 div.cat {
     position: absolute;
     left: 0px;
     bottom: 0px;
     background: transparent;
     padding: 5px 10px;
     border-top-right-radius: 5px;
     font-size: 10px;
     font-weight: normal;
     color: white;
     border-top: 2px solid;
     border-right: 2px solid;
     background: var(--black-trasparent-color);
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     -webkit-box-orient: horizontal;
     -webkit-box-direction: normal;
     -ms-flex-direction: row;
     flex-direction: row;
     -ms-flex-line-pack: center;
     align-content: center;
     -webkit-box-pack: center;
     -ms-flex-pack: center;
     justify-content: center;
 }

 div.cat span {
     margin-right: 5px;
     width: 10px;
     display: block;
 }




 .search-container {
     margin-bottom: 20px;
     position: absolute;
     left: 50px;
     top: 5px;
     width: calc(100% - 125px);
 }

 .search-container input#search-internal-autofill-selected {
     background: transparent;
 }

 .search-container input#search {


     background: transparent;
     border: none;
     border-bottom: 2px solid var(--white);
     padding: 10px 5px;
     color: white;
     outline: none;
     width: 100%;
     padding-right:30px;

 }

 .filter-container {
     margin-bottom: 10px;
     display: none;
 }

 .results {
     display: -ms-grid;
     display: -ms-grid;
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
     gap: 0px;
     position: absolute;
     top: 51px;
     left: 0px;
     width: 100%;
     overflow: auto;
     padding-top: 5px;
     -ms-flex-wrap: wrap;
     flex-wrap: wrap;
     -ms-flex-pack: distribute;
     justify-content: space-around;
     justify-items: stretch;
     height: -webkit-fit-content;
     height: -moz-fit-content;
     height: fit-content;
     max-height: calc(100% - 56px);

     filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
     -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
     enable-background: new 0 0 512 512 !important;
     -webkit-transition: .3s !important;
     -o-transition: .3s !important;
     transition: .3s !important;
 }

 *::-webkit-scrollbar {
     width: 5px;
 }

 *::-webkit-scrollbar-track {
     background: transparent;
 }

 *::-webkit-scrollbar-thumb {
     background-color: white;

 }

 *::-webkit-scrollbar-thumb:hover {
     background-color: white;
 }

 .results .result {
     max-height: 200px;
     background: lch(100 0 0 / 0.11);
     margin: 4px;
     cursor: pointer;
     text-decoration: none;
 }

 .result span {
     color: white;
     display: block;
     height: 32px;
       overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  width:90%;
  max-width:90%;
  text-align: center;
 }

 div.div_header img.logo_backscr_img {
     border: 2px solid var(--cdn_primary);
     width: 24px;
     height: 24px;
     border-radius: 50px;
     padding: 4px;
     position: absolute;
     top: 7px;
     left: 7px;
 }

 .result {
     border: 2px solid #ddd;
     padding: 10px;
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-orient: vertical;
     -webkit-box-direction: normal;
     -ms-flex-direction: column;
     flex-direction: column;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     opacity: 0;
     -webkit-transform: scale(0.8);
     -ms-transform: scale(0.8);
     transform: scale(0.8);
     -webkit-animation: fadeIn 0.5s forwards ease-in-out;
     animation: fadeIn 0.5s forwards ease-in-out;
     border-radius: 5px;
 }

 div.result_box {
     width: 100%;
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-orient: vertical;
     -webkit-box-direction: normal;
     -ms-flex-direction: column;
     flex-direction: column;
     -ms-flex-wrap: nowrap;
     flex-wrap: nowrap;
     -webkit-box-pack: center;
     -ms-flex-pack: center;
     justify-content: center;
     -ms-flex-line-pack: center;
     align-content: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
 }

 div.result_box iframe,
 div.result_box img,
 div.result_box video {
     width: 100%;
     height: 150px;
     opacity: 0;
     -webkit-animation: fadeInOpacity 1s forwards ease-in-out;
     animation: fadeInOpacity 1s forwards ease-in-out;
     border-radius: 10px;
     border: none;
     -o-object-fit: cover;
     object-fit: cover;
     -webkit-transition: .3s;
     -o-transition: .3s;
     transition: .3s;
 }

 iframe {
     width: 100%;
     height: 150px;
     opacity: 0;
     -webkit-animation: fadeInOpacity 1s forwards ease-in-out;
     animation: fadeInOpacity 1s forwards ease-in-out;
 }

 @-webkit-keyframes fadeIn {
     from {
         opacity: 0;
         -webkit-transform: scale(0.8);
         transform: scale(0.8);
     }

     to {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1);
     }
 }

 @keyframes fadeIn {
     from {
         opacity: 0;
         -webkit-transform: scale(0.8);
         transform: scale(0.8);
     }

     to {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1);
     }
 }

 @-webkit-keyframes fadeInOpacity {
     from {
         opacity: 0;
     }

     to {
         opacity: 1;
     }
 }

 @keyframes fadeInOpacity {
     from {
         opacity: 0;
     }

     to {
         opacity: 1;
     }
 }

 div.div_header {
     position: absolute;
     left: 0px;
     top: 0px;
     width: 100%;
     height: 51px;
     background: var(--black-trasparent-color);
     display: -webkit-inline-box;
     display: -ms-inline-flexbox;
     display: inline-flex;
     -webkit-box-shadow: 0 0px 8px 0 rgb(0 0 0 / 20%), 0 6px 70px 0 rgb(0 0 0 / 10%);
     box-shadow: 0 0px 8px 0 rgb(0 0 0 / 20%), 0 6px 70px 0 rgb(0 0 0 / 10%);
     z-index: 33;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     -ms-flex-line-pack: center;
     align-content: center;
     -ms-flex-pack: distribute;
     justify-content: space-around;
     -ms-flex-wrap: nowrap;
     flex-wrap: nowrap;
 }

 i.btn_clear { 
    position: absolute;
    color: white;
    right: 45px;
    top: 12.1px; 
    cursor: pointer;
    transition: .3s;
 }
 .hide{
    transform: scale(0);
    opacity:0;
    pointer-events: none;
 }
 i.btn_close {
     display: -webkit-inline-box;
     display: -ms-inline-flexbox;
     display: inline-flex;
     color: var(--cdn_primary);
     font-size: 24px;
     position: absolute;
     top: 12px;
     right: 8px;
     cursor: pointer;

 }
      `;

    const container = document.createElement("div"),
      div_header = document.createElement("div");
    container.classList.add("container");
    div_header.classList.add("div_header");

    container.appendChild(div_header);
    this.btn_clear = document.createElement("i");

    this.btn_clear.setAttribute("title", "Clear Search");
    const searchContainer = document.createElement("div");
    searchContainer.classList.add("search-container");
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "search";
    searchInput.placeholder = "Search...";
    //
    const autocompleteDiv = document.createElement("div");
    autocompleteDiv.classList.add("autocomplete");
    //
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(autocompleteDiv);

    const filterContainer = document.createElement("div");
    filterContainer.classList.add("filter-container");
    const filterLabel = document.createElement("label");
    filterLabel.setAttribute("for", "filter");
    filterLabel.textContent = "Filter by category:";
    const filterSelect = document.createElement("select");
    filterSelect.id = "filter";
    ["all", "image", "text", "video", "document"].forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      filterSelect.appendChild(option);
    });
    filterContainer.appendChild(filterLabel);
    filterContainer.appendChild(filterSelect);

    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add("results");
    resultsContainer.id = "results";

    const imgLogo = document.createElement("img");
    imgLogo.classList.add("logo_backscr_img");
    imgLogo.alt = "logo";
    imgLogo.src = "/svg_logo_backscr_img";

    const div_close = document.createElement("i");
    div_close.setAttribute("class", "bi bi-x-lg btn_close  ");
    div_close.addEventListener("click", function () {
      document.querySelectorAll("p-search").forEach((eel) => eel.remove());
      // history.replaceState({ page: 1}, "", `/`);
    });
    this.btn_clear.setAttribute("class", "bi bi-x-lg btn_clear hide");

    this.btn_clear.addEventListener("click", () => this.cancelhande());
    /*
        searchInput.value = "";
        btn_clear.classList.remove('hide');
        d.performSearch();
      });*/

    div_header.appendChild(imgLogo);
    div_header.appendChild(searchContainer);
    div_header.appendChild(div_close);
    div_header.appendChild(this.btn_clear);
    div_header.appendChild(filterContainer);

    container.appendChild(resultsContainer);

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);

    searchInput.addEventListener("keyup", () => this.performSearch());
    filterSelect.addEventListener("change", () => this.performSearch());
  }

  cancelhande() {
    this.btn_clear.classList.add("hide");
    this.shadowRoot.querySelector("#search").value = "";
    this.performSearch();
  }

  handleAutocomplete(event, autocompleteDiv) {
    const query = event.target.value.toLowerCase();
    const suggestions = [
      "Sample Image",
      "Sample Text",
      "Sample Video",
      "Sample Document",
      "Example Data",
    ];
    autocompleteDiv.innerHTML = "";

    if (query.length > 0) {
      const filteredSuggestions = suggestions.filter((s) =>
        s.toLowerCase().includes(query)
      );
      filteredSuggestions.forEach((suggestion) => {
        const div = document.createElement("div");
        div.textContent = suggestion;
        div.addEventListener("click", () => {
          event.target.value = suggestion;
          autocompleteDiv.innerHTML = "";
          this.performSearch();
        });
        autocompleteDiv.appendChild(div);
      });
    }
  }
  set(q) {
    if (q.length === 0) {
    } else {
      this.shadowRoot.querySelector("#search").value = q;
      this.performSearch();
    }
  }
  performSearch() {
    const query = this.shadowRoot.querySelector("#search").value.toLowerCase();
    const filter = this.shadowRoot.querySelector("#filter").value;
    const resultsContainer = this.shadowRoot.querySelector("#results");

    // Čišćenje prethodnih rezultata pre nove pretrage
    resultsContainer.innerHTML = "";

    const data = this.Mydata;

    if (query.length === 0) {
      this.btn_clear.classList.add("hide");
      //  history.replaceState(history.state, "",`/?p=search`);
      return;
    }

    const filteredData = data.filter(
      (item) =>
        (filter === "all" || item.type === filter) &&
        item.title.toLowerCase().includes(query)
    );
    this.btn_clear.classList.remove("hide");
    //history.replaceState(history.state, "",`/?p=search&q=${query}`);

    filteredData.forEach((item, index) => {
      const div = document.createElement("div"),
        div_m = document.createElement("div");
      div_m.classList.add("result_box");
      div.appendChild(div_m);
      div.classList.add("result");

      let titleSpan = document.createElement("span");
      titleSpan.textContent = item.title;
      div_m.appendChild(titleSpan);

      if (item.type === "image") {
        const img = document.createElement("img");
        img.src = item.thumb;
        img.setAttribute("loading", "lazy");
        img.alt = item.title;
        img.setAttribute("style", "transform: scale(0);");
        img.onload = function () {
          img.removeAttribute("style");
        };
        div_m.appendChild(img);
      } else if (item.type === "text") {
        let textSpan = document.createElement("span");
        textSpan.textContent =
          item.content.length > 25
            ? item.content.substring(0, 25) + "..."
            : item.content;
        div_m.appendChild(textSpan);
      } else if (item.type === "video") {
        const video = document.createElement("video");
        video.controls = true;
        const source = document.createElement("source");
        source.src = item.url;
        source.type = "video/mp4";
        video.appendChild(source);
        div_m.appendChild(video);
      } else if (item.type === "document") {
        const iframe = document.createElement("iframe");
        iframe.src = item.url;
        div_m.appendChild(iframe);
      }
      const cat = document.createElement("div"),
        cat_i = document.createElement("i");
      cat.classList.add("cat");
      if (item.cat == "blog") {
        cat_i.setAttribute("class", "bi bi-files-alt");
        // cat.appendChild(cat_i);
      }
      if (item.cat == "projects") {
        cat_i.setAttribute("class", "bi bi-files-alt");
      }

      cat.appendChild(document.createTextNode(item.cat.toUpperCase()));
      div_m.appendChild(cat);
      div.addEventListener(
        "click",
        function () {
          if (item.cat == "blog") {
            window.welcomer.blogloader(item.id);
            document.querySelector("p-search").remove();
          }
          if (item.cat == "projects") {
          }
          if (!item.link == "") {
            document.querySelector("p-search").remove();
          }
        },
        true
      );

      // setTimeout(() => {
      resultsContainer.appendChild(div);
      // }, index * 200);
    });
  }
}
class EditorSDK extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    this.template = document.createElement("section");
    this.clavs = document.createElement("div");
    this.clavs.id = "clavs";
    this.template.setAttribute("data-ui-type", "editor");

    const link = document.createElement("style");
    this.get("./main.css", function (err, data) {
      link.textContent = data;
    });

    const require = document.createElement("script");
    require.src =
      "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.7/require.min.js";
    // shadow.appendChild(require);
    shadow.appendChild(link);

    this.clavs.appendChild(this.template);
    this.editor_box = this.clavs.querySelector("editor-wrapper");
    shadow.appendChild(this.clavs);
    // --
    this.editorContainer = document.createElement("div");
    // --
    this.convertToShadowRootAppendChild();
    this.clavs.appendChild(this.editorContainer);
    this.editor(this.editorContainer);
  }
  async get(url = "", callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        callback(null, xhr.responseText);
      } else {
        callback(null, null);
      }
    };
    xhr.onerror = function () {
      callback(null, null);
    };
    xhr.send(false);
  }
  getPromise(url) {
    return new Promise((resolve, reject) => {
      get(url, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  convertToShadowRootAppendChild() {
    const shadowRoot = this.template;

    const divHeader = document.createElement("div_header");
    divHeader.setAttribute("data-url", "editor");

    const logoImg = document.createElement("img");
    logoImg.setAttribute("src", "/svg_logo_backscr_img.svg");
    logoImg.setAttribute("loading", "lazy");
    logoImg.setAttribute("id", "logo_backscr_img");
    logoImg.setAttribute("alt", "Loading");
    divHeader.appendChild(logoImg);

    // First span element
    const span1 = document.createElement("span");
    span1.textContent = "Marko Nikolić - Portfolio > Editor - BETA";
    divHeader.appendChild(span1);

    // Second span element
    const span2 = document.createElement("span");
    span2.classList.add("editor_t");
    span2.textContent = "> Editor - BETA";

    // btns_i element
    const btnsI = document.createElement("btns_i");

    // Input element
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search project");
    searchInput.setAttribute("data-hmm", "search");
    searchInput.setAttribute("onkeyup", "welcomer.search_Kompjiler(this);");
    btnsI.appendChild(searchInput);

    // Search close icon
    const searchCloseIcon = document.createElement("i");
    searchCloseIcon.classList.add("bi", "bi-x-lg");
    searchCloseIcon.setAttribute("data-hmm", "closeMe");
    searchCloseIcon.setAttribute(
      "data-onclick",
      "welcomer.search_Kompjiler(this);"
    );
    searchCloseIcon.setAttribute("title", "Close Search");
    btnsI.appendChild(searchCloseIcon);

    divHeader.appendChild(btnsI);

    // btns_r element
    const btnsR = document.createElement("btns_r");
    btnsR.classList.add("btns_r_editor_right");

    // Undo button
    const undoButton = document.createElement("i");
    undoButton.classList.add(
      "bi",
      "bi-arrow-left-short",
      "editor_btns",
      "undo"
    );
    btnsR.appendChild(undoButton);

    // Redo button
    const redoButton = document.createElement("i");
    redoButton.classList.add(
      "bi",
      "bi-arrow-right-short",
      "editor_btns",
      "redo"
    );
    redoButton.setAttribute("title", "redo");
    redoButton.setAttribute("data-title", "redo");
    btnsR.appendChild(redoButton);

    // Download button
    const downloadButton = document.createElement("i");
    downloadButton.classList.add("bi", "bi-file-earmark-arrow-down", "celvon");
    downloadButton.setAttribute("data-onclick", "welcomer.editor.d();");
    downloadButton.setAttribute("data-title", "Download as html file");
    btnsR.appendChild(downloadButton);

    // Question button
    const questionButton = document.createElement("i");
    questionButton.classList.add("bi", "bi-question-lg");
    questionButton.setAttribute(
      "data-onclick",
      "welcomer.editor.load_menu_bar(this);"
    );
    btnsR.appendChild(questionButton);

    // Share button
    const shareButton = document.createElement("i");
    shareButton.classList.add("bi", "bi-share");
    shareButton.setAttribute("data-onclick", "welcomer.share();");
    shareButton.setAttribute("title", "Share");
    btnsR.appendChild(shareButton);

    // Close button
    const closeButton = document.createElement("i");
    closeButton.classList.add("bi", "bi-x-lg", "close_btnf");
    closeButton.setAttribute("data-onclick", "CTHP();");
    closeButton.setAttribute("title", "Close");
    btnsR.appendChild(closeButton);

    divHeader.appendChild(btnsR);

    this.template.appendChild(divHeader);

    const editorHistoryRp = document.createElement("editor-history-rp");
    this.template.appendChild(editorHistoryRp);

    this.editorWrapper = document.createElement("editor-wrapper");
    this.template.appendChild(this.editorWrapper);
  }
  updatePreview() {
    const code = this.editor.getValue();
    const iframeDoc =
      this.previewIframe.contentDocument ||
      this.previewIframe.contentWindow.document;

    // Clear previous content
    iframeDoc.open();
    iframeDoc.write(code); // Directly write the code into the iframe
    iframeDoc.close();
  }
  define() {
    return {
      doSomething: function () {
        console.log("Something!");
      },
    };
  }
  editor(editor_box) {
    // Create elements
    this.editorContainer = this.clavs.querySelector("editor-wrapper");
    this.editorContainer.style.width = "50%"; // Initial width
    this.editorContainer.style.height = "100%";
    this.editorContainer.style.float = "left"; // For side-by-side layout

    this.previewIframe = document.createElement("iframe");
    this.previewIframe.style.width = "50%"; // Initial width
    this.previewIframe.style.height = "100%";
    this.previewIframe.style.float = "left";
    editor_box.appendChild(this.previewIframe);
    editor_box.appendChild(this.editorContainer);

    // Load Monaco Editor (ensure you have the Monaco Editor library included)

    this.editor = monaco.editor.create(this.editorContainer, {
      value: "<!-- Your code here -->",
      language: "html", // Set the language
    });
    this.updatePreview();

    this.editor.onDidChangeModelContent(() => {
      this.updatePreview();
    });

    // Resizing functionality (using a simple approach - you might want a more robust solution)
    let isResizing = false;
    let currentResizer = null; // Keep track of the current resizer

    const createResizer = (element, isHorizontal) => {
      const resizer = document.createElement("div");
      resizer.style.position = "absolute";
      resizer.style.backgroundColor = "lightgray"; // or any style you prefer
      if (isHorizontal) {
        resizer.style.width = "5px";
        resizer.style.height = "100%";
        resizer.style.cursor = "ew-resize";
        resizer.style.top = "0";
      } else {
        resizer.style.height = "5px";
        resizer.style.width = "100%";
        resizer.style.cursor = "ns-resize";
        resizer.style.left = "0";
      }

      element.parentNode.insertBefore(resizer, element.nextSibling); // Insert after

      resizer.addEventListener("mousedown", (e) => {
        isResizing = true;
        currentResizer = resizer;
        e.preventDefault(); // Prevent text selection during resize
      });

      return resizer;
    };

    this.editorContainerResizer = createResizer(this.editorContainer, true);

    document.addEventListener("mousemove", (e) => {
      if (isResizing && currentResizer) {
        const parent = currentResizer.parentNode;
        const editorWidth = this.editorContainer.offsetWidth;
        const iframeWidth = this.previewIframe.offsetWidth;
        const totalWidth = editorWidth + iframeWidth;

        if (currentResizer === this.editorContainerResizer) {
          const newEditorWidth = e.clientX - parent.offsetLeft;
          this.editorContainer.style.width =
            Math.max(0, Math.min(newEditorWidth, totalWidth)) + "px";
          this.previewIframe.style.width = totalWidth - newEditorWidth + "px";
        }
      }
    });

    document.addEventListener("mouseup", () => {
      isResizing = false;
      currentResizer = null;
    });
  }
}

class Editor extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    this.template = document.createElement("section");
    this.template.setAttribute("data-ui-type", "editor");
    shadow.appendChild(this.template);

    this.convertToShadowRootAppendChild();
  }
  convertToShadowRootAppendChild() {
    const shadowRoot = this.template;

    const divHeader = document.createElement("div");
    divHeader.setAttribute("data-url", "editor");

    const logoImg = document.createElement("img");
    logoImg.setAttribute("src", "/svg_logo_backscr_img");
    logoImg.setAttribute("loading", "lazy");
    logoImg.setAttribute("id", "logo_backscr_img");
    logoImg.setAttribute("alt", "Loading");
    divHeader.appendChild(logoImg);

    // First span element
    const span1 = document.createElement("span");
    span1.textContent = "Marko Nikolić - Portfolio > Editor - BETA";
    divHeader.appendChild(span1);

    // Second span element
    const span2 = document.createElement("span");
    span2.classList.add("editor_t");
    span2.textContent = "> Editor - BETA";
    divHeader.appendChild(span2);

    // btns_i element
    const btnsI = document.createElement("btns_i");

    // Input element
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search project");
    searchInput.setAttribute("data-hmm", "search");
    searchInput.setAttribute("onkeyup", "welcomer.search_Kompjiler(this);");
    btnsI.appendChild(searchInput);

    // Search close icon
    const searchCloseIcon = document.createElement("i");
    searchCloseIcon.classList.add("bi", "bi-x-lg");
    searchCloseIcon.setAttribute("data-hmm", "closeMe");
    searchCloseIcon.setAttribute(
      "data-onclick",
      "welcomer.search_Kompjiler(this);"
    );
    searchCloseIcon.setAttribute("title", "Close Search");
    btnsI.appendChild(searchCloseIcon);

    divHeader.appendChild(btnsI);

    // btns_r element
    const btnsR = document.createElement("btns_r");
    btnsR.classList.add("btns_r_editor_right");

    // Undo button
    const undoButton = document.createElement("i");
    undoButton.classList.add(
      "bi",
      "bi-arrow-left-short",
      "editor_btns",
      "undo"
    );
    btnsR.appendChild(undoButton);

    // Redo button
    const redoButton = document.createElement("i");
    redoButton.classList.add(
      "bi",
      "bi-arrow-right-short",
      "editor_btns",
      "redo"
    );
    redoButton.setAttribute("title", "redo");
    redoButton.setAttribute("data-title", "redo");
    btnsR.appendChild(redoButton);

    // Download button
    const downloadButton = document.createElement("i");
    downloadButton.classList.add("bi", "bi-file-earmark-arrow-down", "celvon");
    downloadButton.setAttribute("data-onclick", "welcomer.editor.d();");
    downloadButton.setAttribute("data-title", "Download as html file");
    btnsR.appendChild(downloadButton);

    // Question button
    const questionButton = document.createElement("i");
    questionButton.classList.add("bi", "bi-question-lg");
    questionButton.setAttribute(
      "data-onclick",
      "welcomer.editor.load_menu_bar(this);"
    );
    btnsR.appendChild(questionButton);

    // Share button
    const shareButton = document.createElement("i");
    shareButton.classList.add("bi", "bi-share");
    shareButton.setAttribute("data-onclick", "welcomer.share();");
    shareButton.setAttribute("title", "Share");
    btnsR.appendChild(shareButton);

    // Close button
    const closeButton = document.createElement("i");
    closeButton.classList.add("bi", "bi-x-lg", "close_btnf");
    closeButton.setAttribute("data-onclick", "CTHP();");
    closeButton.setAttribute("title", "Close");
    btnsR.appendChild(closeButton);

    divHeader.appendChild(btnsR);

    this.template.appendChild(divHeader);

    const editorHistoryRp = document.createElement("editor-history-rp");
    this.template.appendChild(editorHistoryRp);

    const editorWrapper = document.createElement("editor-wrapper");
    this.template.appendChild(editorWrapper);

    const link = document.createElement("style");
    link.textContent = `${this.styles()}`;
    this.template.appendChild(link);
  }
}

/*if (!customElements.get("editor-sdk")) {
  customElements.define("editor-sdk", EditorSDK);
}*/

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
class SolarMap extends HTMLElement {
  constructor() {
    super();

    this.shadowMode = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    const shadowContainer = document.createElement("div");
    const shadowRoot = shadowContainer.attachShadow({ mode: "open" });
    const rootDiv = document.createElement("iframe");
    rootDiv.id = "root";
    rootDiv.style.height = "100%";
    rootDiv.style.width = "100%";
    rootDiv.style.border = "none";
    rootDiv.title = "Solar map";
    rootDiv.src = "/solarmap";
    rootDiv.setAttribute("sandbox", "allow-scripts allow-same-origin");
    this.shadowRoot.appendChild(rootDiv);
    /*
    const style = document.createElement("style");
    style.setAttribute("nonce", window.stmp);
    style.textContent = ` *{box-sizing:border-box;}html,body{margin:0;}#root{height:100%;width:100%;font-size:16px;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica Neue,sans-serif;line-height:normal;color:#333;}`;
    const script = document.createElement("script");
    script.setAttribute("type", "module");
    script.setAttribute("crossorigin", "");
    script.setAttribute("nonce", window.stmp);
    script.setAttribute("src", "/demo&id=S3503&hangar=main");
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(script);*/
  }
}
class box extends HTMLElement {
  constructor() {
    super();
  }
}

class BlueWarp extends HTMLElement {
  constructor() {
    super();

    this.shadowMode = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = ` <canvas id="canvas"></canvas> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style=" filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.4));-webkit-filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.4));enable-background:new 0 0 512 512 !important;"> <defs> <filter id="shadowed-goo"> <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" /> <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo" /> <feGaussianBlur in="goo" stdDeviation="3" result="shadow" /> <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.2" result="shadow" /> <feOffset in="shadow" dx="1" dy="1" result="shadow" /> <feBlend in2="shadow" in="goo" result="goo" /> <feBlend in2="goo" in="SourceGraphic" result="mix" /> </filter> <filter id="goo"> <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" /> <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo" /> <feBlend in2="goo" in="SourceGraphic" result="mix" /> </filter> </defs> </svg> `;
    this.shadowMode.appendChild(template.content.cloneNode(true));
    const canvas = this.shadowRoot.querySelector("#canvas");
    const application = new Application(canvas);
    application.initializeCircleContainers();
    application.loop();
  }
}
class ImageZoomPan {
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
  constructor(
    containerId,
    imageId,
    percentDisplayId,
    options_f = {
      ui: false,
      isImage: true,
      controls: {
        zoom: true,
        zoomout: true,
        close: true,
        percentage: true,
        rotate: true,
      },
      onlyZoom: false,
    }
  ) {
    this.container = containerId;
    this.image = imageId;
    this.options_f = options_f;
    this.percentDisplay = percentDisplayId;
    this.isCtrlPressed = false;
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
    this.rotation = 0;

    this.startTouches = [];
    this.isDragging = false;

    this.lastScale = 1;
    this.lastRotation = 0;

    this.init();

    if (this.options_f.ui == true) {
      //
      (this.controls = document.createElement("div")),
        (this.controls_top = document.createElement("img")),
        (this.controls_bottom = document.createElement("img")),
        (this.controls_rotate = document.createElement("img")),
        (this.controls_precent = document.createElement("span")),
        (this.separator = document.createElement("separator")),
        (this.separator1 = document.createElement("separator")),
        (this.controls_close = document.createElement("img"));
      this.controls.id = "controls";
      this.controls_top.src = this.svg("plus");
      this.controls_top.setAttribute("class", "top_control");
      this.controls_bottom.src = this.svg("minus");
      this.controls_bottom.setAttribute("class", "bottom_control");
      this.controls_top.alt = "Zoom in";
      this.controls_bottom.alt = "Zoom out";
      this.controls_rotate.src = this.svg("rotate");
      this.controls_rotate.setAttribute("class", "bottom_rotate");
      this.controls_rotate.alt = "Rotate";
      this.controls_precent.setAttribute("class", "precent_control");
      this.controls_precent.textContent = "100%";
      this.controls_close.src = this.svg("close");
      this.controls_close.setAttribute("class", "close_control");

      /*
     controls.appendChild(this.svgMaker([
       {
         "key":"xmlns",
         "val":"http://www.w3.org/2000/svg"
       }
     ],[
 
     ]));*/
      this.controls.appendChild(this.controls_close);
      this.controls.appendChild(this.separator1);
      this.controls.appendChild(this.controls_top);
      this.controls.appendChild(this.controls_precent);
      this.controls.appendChild(this.controls_bottom);
      this.controls.appendChild(this.separator);
      this.controls.appendChild(this.controls_rotate);
      this.container.appendChild(this.controls);

      this.controls_top.addEventListener("click", function (e) {
        e.preventDefault();
        const box = this.image;
        clearTimeout(clickTimeout);

        if (!box.classList.contains("rotation_manual")) {
          box.classList.add("rotation_manual");
        }
        controller.PlusControlf();
        clickTimeout = setTimeout(() => {
          box.classList.remove("rotation_manual");
        }, 500);
      });
      this.controls_bottom.addEventListener("click", function (e) {
        e.preventDefault();
        const box = this.image;
        clearTimeout(clickTimeout);

        if (!box.classList.contains("rotation_manual")) {
          box.classList.add("rotation_manual");
        }
        controller.MinusControlf();

        clickTimeout = setTimeout(() => {
          box.classList.remove("rotation_manual");
        }, 500);
      });
      this.controls_precent.addEventListener("click", function (e) {
        e.preventDefault();
        controller.reset();
      });
      let clickTimeout;
      const controller = this;
      this.controls_rotate.addEventListener("click", (e) => {
        e.preventDefault();
        const box = this.image;
        clearTimeout(clickTimeout);

        if (!box.classList.contains("rotation_manual")) {
          box.classList.add("rotation_manual");
        }
        controller.RotateControlf();
        clickTimeout = setTimeout(() => {
          box.classList.remove("rotation_manual");
        }, 500);
      });
    }
  }
  initf() {
    var aerls = false;
    if (!this.options_f.isImage) {
      if (this.scale > 1) {
        this.aerls = true;
      }
    }
    return aerls;
  }
  ctrl_key(event) {
    this.isCtrlPressed = false;
    if (event.key === "Control" && event.location === 1) {
      this.isCtrlPressed = true;
    }
  }
  init() {
    document.addEventListener("keydown", this.ctrl_key.bind(this));
    //
    // Mouse events
    this.container.addEventListener("mousedown", this.startDrag.bind(this));
    window.addEventListener("mouseup", this.stopDrag.bind(this));
    this.container.addEventListener("mousemove", this.dragImage.bind(this));

    this.container.addEventListener("wheel", this.zoomImage.bind(this));

    this.container.addEventListener(
      "touchstart",
      this.handleTouchStart.bind(this),
      { passive: false }
    );
    this.container.addEventListener(
      "touchmove",
      this.handleTouchMove.bind(this),
      { passive: false }
    );
    this.container.addEventListener("touchend", this.handleTouchEnd.bind(this));
  }

  startDrag(e) {
    this.isDragging = true;
    this.startX = e.clientX - this.translateX;
    this.startY = e.clientY - this.translateY;
    this.container.style.cursor = "grabbing";
  }

  stopDrag() {
    this.isDragging = false;
    this.container.style.cursor = "grab";
  }

  dragImage(e) {
    if (!this.isDragging) return;

    this.translateX = e.clientX - this.startX;
    this.translateY = e.clientY - this.startY;

    this.updateTransform();
  }

  zoomImage(e) {
    if (e.deltaY < 0) {
      this.scale += 0.1;
    } else {
      this.scale -= 0.1;
    }

    this.scale = Math.min(Math.max(0.5, this.scale), 5);
    if (this.options_f.onlyZoom == true) {
      if (this.scale < 1) {
        this.scale = 1;
      }
      if (this.isCtrlPressed) {
        e.preventDefault();
        this.updateZoomPercentage();
      }
    } else {
      e.preventDefault();
      this.updateTransform();
      this.updateZoomPercentage();
    }
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.startTouches = Array.from(e.touches);

    if (this.startTouches.length === 1) {
      this.startX = this.startTouches[0].clientX - this.translateX;
      this.startY = this.startTouches[0].clientY - this.translateY;
    }

    if (this.startTouches.length === 2) {
      this.lastScale = this.scale;
      this.lastRotation = this.rotation;
    }
  }

  handleTouchMove(e) {
    e.preventDefault();
    const touches = Array.from(e.touches);

    if (touches.length === 1) {
      // Single touch - drag
      this.translateX = touches[0].clientX - this.startX;
      this.translateY = touches[0].clientY - this.startY;
    } else if (touches.length === 2 && this.startTouches.length === 2) {
      // Multi-touch - zoom and rotate
      const startDist = this.getDistance(
        this.startTouches[0],
        this.startTouches[1]
      );
      const currentDist = this.getDistance(touches[0], touches[1]);
      this.scale = this.lastScale * (currentDist / startDist);

      const startAngle = this.getAngle(
        this.startTouches[0],
        this.startTouches[1]
      );
      const currentAngle = this.getAngle(touches[0], touches[1]);
      this.rotation = this.lastRotation + (currentAngle - startAngle);
    }

    this.scale = Math.min(Math.max(0.5, this.scale), 5);
    this.updateTransform();
    this.updateZoomPercentage();
  }

  handleTouchEnd(e) {
    e.preventDefault();
    this.startTouches = [];
  }

  getDistance(touch1, touch2) {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  getAngle(touch1, touch2) {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.atan2(dy, dx) * (180 / Math.PI);
  }
  isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|Opera Mini|IEMobile/i.test(
      navigator.userAgent
    );
  }
  updateTransform() {
    if (!this.options_f.controls) {
      if (this.scale < 1) {
        this.scale = 1;
        this.translateX = 0;
        this.translateY = 0;
        this.rotation = 0;
      }
    }
    this.updateZoomPercentage();
    this.image.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale}) rotate(${this.rotation}deg)`;
  }

  updateZoomPercentage() {
    const zoomPercentage = Math.round(this.scale * 100);
    this.percentDisplay.innerHTML = `${zoomPercentage}%`;
  }
  PlusControlf() {
    this.scale += 0.1;

    this.scale = Math.min(Math.max(0.5, this.scale), 5);
    this.updateTransform();
    this.updateZoomPercentage();
  }
  reset() {
    let clickTimeout;
    const box = this.image;
    clearTimeout(clickTimeout);
    if (!box.classList.contains("rotation_manual")) {
      box.classList.add("rotation_manual");
    }
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
    this.rotation = 0;
    this.updateTransform();
    this.updateZoomPercentage();
    clickTimeout = setTimeout(() => {
      box.classList.remove("rotation_manual");
    }, 500);
  }
  MinusControlf() {
    this.scale -= 0.1;

    this.scale = Math.min(Math.max(0.5, this.scale), 5);
    this.updateTransform();
    this.updateZoomPercentage();
  }
  RotateControlf() {
    this.rotation = this.rotation + 90;
    this.updateTransform();
    this.updateZoomPercentage();
  }
}

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
class CustomViewer extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `:host{display:block;width:100%;height:100%;border:1px solid #ccc;border-radius:10px;overflow:auto;}.content{padding:10px;font-family:Arial,sans-serif;font-size:14px;color:#333;}`;
    this.contentDiv = document.createElement("div");
    this.contentDiv.className = "content";
    this.contentDiv.setAttribute("part", "content");
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(this.contentDiv);
  }
  static get observedAttributes() {
    return ["src"];
  }
  async attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src") {
      this.loadContent(newValue);
    }
  }
  async loadContent(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch content from ${url}`);
      }
      const content = await response.text();
      this.contentDiv.innerHTML = content;
    } catch (error) {
      this.contentDiv.innerHTML = `<p style="color:red;">Error:${error.message}</p>`;
    }
  }
}
class PDFViewerElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["src"];
  }
  getHostAttribute(attrName) {
    return this.getAttribute(attrName);
  }
  updateVideoSrc(src = "") {
    this.image.src = src;
  }
  connectedCallback() {}
  connectedCallback() {
    const videoSrc = this.getAttribute("src");
    if (!videoSrc) {
      console.error("Video source (src) is required");
      return;
    }
    this.videoElement.src = URL.createObjectURL(this.mediaSource);
    this.mediaSource.addEventListener("sourceopen", () => {
      this.initializeSourceBuffer(videoSrc);
    });
    this.mediaSource.addEventListener("sourceended", () => {});
    this.mediaSource.addEventListener("error", (error) => {});
  }
  initializeSourceBuffer(videoSrc) {
    if (this.mediaSource.readyState !== "open") {
      return;
    }
    try {
      this.sourceBuffer = this.mediaSource.addSourceBuffer("video/mp4");
      this.loadVideoChunks(videoSrc);
    } catch (error) {
      console.error("Error initializing SourceBuffer:", error);
    }
  }
  async loadVideoChunks(videoSrc) {
    const response = await fetch(videoSrc);
    const reader = response.body.getReader();
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        if (this.mediaSource.readyState === "open") {
          this.mediaSource.endOfStream();
        }
        break;
      }
      await this.waitForSourceBuffer();
      try {
        if (
          this.mediaSource.readyState === "open" &&
          !this.sourceBuffer.updating
        ) {
          this.sourceBuffer.appendBuffer(value);
        }
      } catch (error) {
        console.error("Error appending buffer:", error);
        break;
      }
    }
  }
  waitForSourceBuffer() {
    return new Promise((resolve) => {
      if (!this.sourceBuffer || !this.sourceBuffer.updating) {
        resolve();
      } else {
        this.sourceBuffer.addEventListener("updateend", resolve, {
          once: true,
        });
      }
    });
  }
}
class PostContent extends HTMLElement {

  zoom() {
    const ImagePreview_src = document.createElement("image-preview");
    var htmls = this.div_content.innerHTML;
  //  htmls = htmls.querySelector('dnm_footer').remove();
    ImagePreview_src.srcDiv(htmls);
    document.body.appendChild(ImagePreview_src);
  }

  anim(container, text) {
    const t = this;
    container.addEventListener("click", (e) => {
      const x = e.clientX - container.offsetLeft;
      const y = e.clientY - container.offsetTop;

      for (let i = 1; i <= 3; i++) {
        const wave = document.createElement("div");
        wave.classList.add("wave", `ripple${i}`);
        wave.style.left = `${x}px`;
        wave.style.top = `${y}px`;
        container.appendChild(wave);

        wave.addEventListener("animationend", () => {
          wave.remove();
        });
      }

      t.hightxy(x, y, c, t);
    });
  }

  hightxy(x, y, container, textElement) {
    const textRect = textElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const relativeTextLeft = textRect.left - containerRect.left;
    const relativeTextTop = textRect.top - containerRect.top;

    if (
      x >= relativeTextLeft &&
      x <= relativeTextLeft + textRect.width &&
      y >= relativeTextTop &&
      y <= relativeTextTop + textRect.height
    ) {
      if (!textElement.querySelectorAll("anim-span").length) {
        const letters = textElement.textContent
          .split("")
          .map((letter) => `<anim-span>${letter}</anim-span>`)
          .join("");
        textElement.innerHTML = letters;
      }

      const spans = textElement.querySelectorAll("anim-span");
      spans.forEach((span) => {
        const spanRect = span.getBoundingClientRect();
        const relativeSpanLeft = spanRect.left - containerRect.left;
        const relativeSpanTop = spanRect.top - containerRect.top;
        const distance = Math.sqrt(
          Math.pow(x - (relativeSpanLeft + spanRect.width / 2), 2) +
            Math.pow(y - (relativeSpanTop + spanRect.height / 2), 2)
        );
        if (distance < 70) {
          span.classList.add("highlighted");
          setTimeout(() => {
            span.classList.remove("highlighted");
          }, 500);
        }
      });
    }
  }

  parseMe(id) {
    var data = [];
    window.portfolio.data.blog.forEach(function (et) {
      if (et["id"] == id) {
        data = et;
        return true;
      }
    });
    this.post_data = data;
  }
  foreach_data_hashs(el, data) {
    const tag = document.createElement("tag");
    tag.textContent = "#" + data;
    el.appendChild(tag);
  }
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    this.post_data = [];
    const template = document.createElement("template");

    const style = document.createElement("style"),
      tags = document.createElement("tags");
      this.div_content = document.createElement("div_content");

    const urlParamsf = new URLSearchParams(window.location.search);
    if (urlParamsf.has("id")) {
      this.parseMe(urlParamsf.get("id"));

      for (var i = 0; i < this.post_data["category"].length; i++) {
        const tag = document.createElement("tag");
        tag.textContent = "#" + this.post_data["category"][i];
        //  tags.appendChild(tag);
      }
    }

    style.textContent = `${window.atob(
      window.portfolio.data.blog_style_bundle
    )} 
tags {

    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding: 0px 15px;
    padding-bottom: 0px;
    padding-top: 5px;
}

tags a {
    background: white;
    color: #333 !important;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    margin-right: 10px;
    -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
    enable-background: new 0 0 512 512 !important;
    border: 2px solid white; 
    cursor: pointer;
}

tags a:hover {
    background: var(--black-trasparent-color);
    color: white !important; 
}


bdkr {
 position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-image: url(/bagdes&name=text);
    background-position: center 30dvb;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.1;
    z-index: -1;
}

:::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: var(--cdn_white);
}

::-webkit-scrollbar-thumb:hover {
    background: transparent;
}

div#controls {
    position: fixed;
    right: 20px;
    top: 70px;
    background: var(--black-trasparent-color);
    display: -ms-grid;
    display: grid;
    z-index: 333333;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
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
    width: 100%;
}

div.content-wrapper.rotation_manual,
img#zoomImage.rotation_manual {
    -webkit-transition: -webkit-transform .5s ease !important;
    transition: -webkit-transform .5s ease !important;
    -o-transition: transform .5s ease !important;
    transition: transform .5s ease !important;
    transition: transform .5s ease, -webkit-transform .5s ease !important;
    pointer-events: none;
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
}
    `;
    shadow.appendChild(style);
    /* template.innerHTML = ` <div_content> </div_content>`;*/
    shadow.appendChild(tags);
    shadow.appendChild(this.div_content);
    const child = shadow.querySelector(".content-wrapper");
    // var aer =
    // const rls = new ImageZoomPan();
    const spsp = document.createElement("span");

    /*
    class ImageZoomPan {
      constructor(containerId, imageId, percentDisplayId) {*/
  }
  HTML_PARSE(html) {
    const parser = new DOMParser();
    const html2 = parser.parseFromString(html, "text/html");
    return html2.body.cloneNode(true);
  }
  set(
    data = "",
    url = {
      shared_links: [],
    }
  ) {
    const div_content = this.shadowRoot.querySelector("div_content");
    // div_content.innerHTML = `${data}`;
    div_content.textContent = "";
    div_content.appendChild(this.HTML_PARSE(data));
    const tags = this.shadowRoot.querySelector("tags");
    const urlParamsf = new URLSearchParams(window.location.search);
    if (urlParamsf.has("id")) {
      this.parseMe(urlParamsf.get("id"));
      this.parseMe(urlParamsf.get("id"));

      for (var i = 0; i < this.post_data["category"].length; i++) {
        const tag = document.createElement("a");
        tag.textContent = "#" + this.post_data["category"][i];
        tag.title = `Open ${this.post_data["category"][i]} Category in new tab`;
        tag.setAttribute("href", `/?p=blog&c=${this.post_data["category"][i]}`);
        tag.target = "_top";
        /* 
        tag.addEventListener("click", function(){
            window.top.location.href = `/?p=blog&c=${this.post_data['category'][i]}`;
        });*/
        

        tags.appendChild(tag);
      }
      if(`${this.post_data['id']}` == `${urlParamsf.get("id")}`) {
        if(this.post_data['type'] == "text"){
        div_content.appendChild(document.createElement("bdkr"));
      }
    }
    }
    
    welcomer.cards_generateV2(div_content, url);
    document.querySelector("p-container").classList.add("active");
    this.shadowRoot.querySelectorAll("img").forEach(function (v) {
      v.addEventListener("click", function (e) {
        window.top.welcomer.infoVa_img(this);
      });
      v.addEventListener("load", function () {
        welcomer.img_load(v);
      });
      v.style.opacity = 0;
      v.setAttribute(
        "data-title",
        "Click (hovered image) for view image in full size"
      );
      v.addEventListener("mouseover", function () {
        welcomer.showAnchorTitle(v, v.getAttribute("data-title"));
      });
      v.addEventListener("mouseout", function () {
        welcomer.hideAnchorTitle();
      });
      var title = v.getAttribute("title");
      v.removeAttribute("title");
      v.addEventListener("mouseleave", function () {
        welcomer.hideAnchorTitle();
      });
    });
    document.querySelector("p-container").scrollTop = 0;

    const spsp = document.createElement("span"),
      divContent = this.shadowRoot.querySelector("div.div_content"),
      content_wrapper = this.shadowRoot.querySelector("div.content-wrapper");
    /*const controller = new ImageZoomPan(div_content, content_wrapper, spsp, {
      onlyZoom: true,
      ui: true,
    });*/
  }
  styleTemplate() {
    return `<style nonce="${window.stmp}" type="text/css">${window.atob(
      window.portfolio.data.blog_style_bundle
    )}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:var(--cdn_white);}::-webkit-scrollbar-thumb:hover{background:transparent;}</style>`;
  }
}
class VideoPlayer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    const style = document.createElement("style");
    style.setAttribute("nonce", window.stmp);
    style.textContent = `
      @import url('https://${window.CDN_URL}/node_modules/video.js/dist/video-js.min.css');
      .video-js {
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: .3s;
        background-color: rgb(0 0 0 / 48%);
        opacity: 1;
      }
      #canvas_img {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: black;
        object-fit: cover;
        z-index: -1;
        filter: blur(7px);
        opacity: 0;
      }
      #canvas_img {
        opacity: 1;
      }
    `;
    template.content.appendChild(style);

    const video = document.createElement("video");
    video.id = "video-player";
    video.className = "video-js vjs-default-skin";
    video.setAttribute("controls", "");
    video.setAttribute("nonce", window.stmp);
    video.setAttribute("preload", "auto");
    video.setAttribute("data-setup", "{}");

    const source = document.createElement("source");
    source.src = this.getAttribute("video-src") || "";
    source.type = "video/mp4";
    video.appendChild(source);

    const videoText = document.createElement("p");
    video.appendChild(videoText);

    const img = document.createElement("img");
    img.id = "canvas_img";
    img.setAttribute("loading", "lazy");
    img.alt = "canvas_img";
    img.src = this.getAttribute("video-src") || "";

    template.content.appendChild(video);
    template.content.appendChild(img);

    shadow.appendChild(template.content.cloneNode(true));
    if (typeof videojs !== "undefined") {
      const videoElement = this.shadowRoot.querySelector("#video-player");
      this.player = videojs(
        videoElement,
        { autoplay: false, preload: "auto" },
        function onPlayerReady() {}
      );
      this.postImage = this.shadowRoot.querySelector("canvas_img");
      this.player.on("timeupdate", () => {});
    } else {
    }
  }
  getHostAttribute(attrName) {
    return this.getAttribute(attrName);
  }
  updateVideoSrc(src = "") {
    this.image.src = src;
  }
  connectedCallback() {
    const src = this.getAttribute("video-src");
    if (src) {
      this.updateVideoSrc(src, "");
      this.removeAttribute("video-src");
    }
  }
  getPlayer() {
    return this.player;
  }
  clearV() {
    this.player.dispose();
  }
  updateVideoSrc(
    newSrc = "",
    newPoster = "",
    optionsVL_FS = { autoplay: false, preload: "auto" }
  ) {
    if (typeof videojs !== "undefined") {
      const videoElement = this.shadowRoot.querySelector("#video-player");
      this.player = videojs(
        videoElement,
        optionsVL_FS,
        function onPlayerReady() {
          if (optionsVL_FS?.autoplay == true) {
            // this.player.play();
          }
        }
      );
      this.postImage = this.shadowRoot.querySelector("canvas_img");
      this.player.on("timeupdate", () => {});
    } else {
    }
    if (this.player) {
      try {
        this.player.src({ src: newSrc, type: "video/mp4" });
        if (newPoster !== "") {
          this.player.poster(newPoster);
        }
        this.player.load();
        if (newPoster !== "") {
          this.shadowRoot.querySelector("#canvas_img").src = newPoster;
        }
      } catch (aer) {}
    }
  }
}
class VideoPlayerV2 extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = ` <style nonce="${
      window.stmp
    }" > @import url('https://${window.CDN_URL}/node_modules/video.js/dist/video-js.min.css');video-player-v2{display:block;}@media screen and (min-width:450px){.content-wrapper iframe,.content-wrapper video-player-v2{height:80vh !important;max-height:80vh !important;min-height:80vh !important;}}iframe,video-player-v2{margin:20px 0px !important;}iframe,video-player-v2{height:70vh !important;min-height:70vh !important;pointer-events:unset !important;object-fit:contain;}img,iframe{max-height:70vh !important;object-fit:contain;}.video-js{width:100%;height:100%;opacity:0;transition:.3s;background-color:rgb(0 0 0 / 48%);opacity:1;}#canvas_img{position:absolute;left:0px;top:0px;width:100%;height:100%;background:black;object-fit:cover;z-index:-1;filter:blur(7px);opacity:0;}#canvas_img{opacity:1;}</style> <video id="video-player" class="video-js vjs-default-skin" controls nonce="${
      window.stmp
    }" preload="auto" data-setup='{}'> <source src="${this.getAttribute(
      "src"
    )}" type="video/mp4"> <p> </p> </video> <img id="canvas_img" loading="lazy" alt="canvas_img" src="${this.getAttribute(
      "video-src"
    )}" /> `;
    shadow.appendChild(template.content.cloneNode(true));
    if (typeof videojs !== "undefined") {
      const videoElement = this.shadowRoot.querySelector("#video-player");
      this.player = videojs(
        videoElement,
        { autoplay: true, preload: "auto" },
        function onPlayerReady() {}
      );
      this.postImage = this.shadowRoot.querySelector("canvas_img");
      this.player.on("timeupdate", () => {});
    } else {
    }
  }
  getHostAttribute(attrName) {
    return this.getAttribute(attrName);
  }
  updateVideoSrc(src = "") {
    const videoElement = this.shadowRoot.querySelector("#video-player");
    this.player = videojs(
      videoElement,
      { autoplay: true, preload: "auto" },
      function onPlayerReady() {}
    );
    this.player.src({ src: src, type: "video/mp4" });
    this.postImage = this.shadowRoot.querySelector("canvas_img");
    this.player.on("timeupdate", () => {});
  }
  connectedCallback() {
    const src = this.getAttribute("data-src") || "",
      image = this.getAttribute("data-poster") || "";
    if (src == "") {
    } else {
      this.updateVideoSrc(src, image);
      this.removeAttribute("data-src");
      this.removeAttribute("data-poster");
    }
  }
  getPlayer() {
    return this.player;
  }
  clearV() {
    this.player.dispose();
  }
  updateVideoSrc(newSrc = "", newPoster = "") {
    if (this.player) {
      try {
        this.player.src({ src: newSrc, type: "video/mp4" });
        if (newPoster !== "") {
          this.player.poster(newPoster);
        }
        this.player.load();
        if (newPoster !== "") {
          this.shadowRoot.querySelector("#canvas_img").src = newPoster;
        }
      } catch (aer) {}
    }
  }
}

const defaultPolicy = trustedTypes.createPolicy("default", {
  createHTML: (input) => {
    if (input.includes("<script") || input.includes("onerror")) {
      throw new Error("Potential XSS detected in HTML input");
    }
    return input;
  },
  createScript: (input) => input,
  createScriptURL: (input) => input,
});

let videoPlayerElement, // document.querySelector("video-player"),
  pContainerElement; // = document.querySelector("p-container");

const welcomer = {
  lang: [],
  conf: {
    token: `${window.stmp}`,
    graph: `${window.portfolio.host}/graph`,
    api: "/feed",
    black: true,
  },
  trst: function () {},
  img_load: function (t) {
    t.classList.add("active");
    t.removeAttribute("style");
    t.removeAttribute("onload");
  },
  videoDrawCnavs: function (videoElement, canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const videoAspectRatio = video.videoWidth / video.videoHeight;
    const canvasAspectRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight, offsetX, offsetY;
    if (canvasAspectRatio > videoAspectRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / videoAspectRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * videoAspectRatio;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);
    ctx.filter = "blur(10px)";
  },
  langs: [
    {
      name: "en",
      data: {
        detectedsLinksIn_postmaxn: "Detected links in post:",
        my_cv: "My CV",
        my_cv_dscr: "Look at my CV",
        my_projects: "My projects",
        my_projects_dscr: "Look at my Projects",
        category_title: "Click for open %s category.",
        robot:
          "Are you a robot?<br>If you don't?<sspan>Click</sspan> to see hidden...<br><i class='bi bi-eye'></i>",
      },
    },
    {
      name: "rs",
      data: {
        detectedsLinksIn_postmaxn: "Откривене линкови у посту:",
        my_cv: "Мој ЦВ",
        my_cv_dscr: "Погледај мој ЦВ",
        my_projects: "Моји пројекти",
        my_projects_dscr: "Погледајте моје пројекте",
        category_title: "Кликните да отворите категорију %s.",
      },
    },
  ],
  pages: {
    search: {
      page: function () {
        const main = document.createElement("div"),
          logo = document.createElement("img");
        div.classList.add("search_main");
      },
    },
    page_history: [
      {
        page: "start_page",
        url: "/",
      },
    ],
    the_call: function () {
      window.eventListeners_clck = function () {
        document.querySelectorAll("*[data-onclick]").forEach((element) => {
          const onclickCode = element.getAttribute("data-onclick");
          element.addEventListener("click", (e) => {
            e.preventDefault();
            if (onclickCode) {
              new Function(onclickCode)();
            }
          });
        });
      };

      window.addEventListener("popstate", () => {
        const urlParamsf = new URLSearchParams(window.location.search),
          urlParamsf_f = urlParamsf.get("c");
        if (!urlParamsf.has("c")) {
          if (urlParamsf.has("sc")) {
            welcomer.uBoss(
              {},
              "",
              `/?p=blog&c=${urlParamsf_f}&sc=${urlParamsf_f_sc}`
            );
          } else {
            welcomer.uBoss({}, "", `/?p=blog&c=${urlParamsf_f}`);
          }
          $("body").removeAttr("data-category-name");
        }
      });
      var testV = function () {
        return;
        const data_ai_type = document.createElement("video-player");
        data_ai_type.setAttribute("video-src", "/?src=vdwallpper");
        document.body.appendChild(data_ai_type);
      };
      window.welcomer = welcomer;
      document.addEventListener("mousemove", function (event) {
        var draggable = document.querySelector(
          'section[data-ui-type="editor"]'
        );
        const newX = event.clientX;
        const newY = event.clientY;
        window.draggable.style_left = newX;
        window.draggable.style_top = newY;
      });
      var allrs_fs = [];
      setTimeout(function () {
        window.eventListeners_clck();
      }, 1000);
      window.countFPS = (function () {
        setInterval(function () {
          var lastLoop = new Date().getMilliseconds();
          var count = 1;
          var fps = 0;
          return function () {
            var currentLoop = new Date().getMilliseconds();
            if (lastLoop > currentLoop) {
              fps = count;
              count = 1;
            } else {
              count += 1;
            }
            lastLoop = currentLoop;
            return fps;
          };
        }, 100);
      })();
      (function (f, e) {
        "object" === typeof exports && "undefined" !== typeof module
          ? (module.exports = e())
          : "function" === typeof define && define.amd
          ? define(e)
          : (f.Stats = e());
      })(this, function () {
        var f = function () {
          function e(a) {
            c.appendChild(a.dom);
            return a;
          }
          function u(a) {
            for (var d = 0; d < c.children.length; d++)
              c.children[d].style.display = d === a ? "block" : "none";
            l = a;
          }
          var l = 0,
            c = document.createElement("div");
          c.style.cssText =
            "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
          c.addEventListener(
            "click",
            function (a) {
              a.preventDefault();
              u(++l % c.children.length);
            },
            !1
          );
          var k = (performance || Date).now(),
            g = k,
            a = 0,
            r = e(new f.Panel("FPS", "#0ff", "#002")),
            h = e(new f.Panel("MS", "#0f0", "#020"));
          if (self.performance && self.performance.memory)
            var t = e(new f.Panel("MB", "#f08", "#201"));
          u(0);
          return {
            REVISION: 16,
            dom: c,
            addPanel: e,
            showPanel: u,
            begin: function () {
              k = (performance || Date).now();
            },
            end: function () {
              a++;
              var c = (performance || Date).now();
              h.update(c - k, 200);
              if (
                c >= g + 1e3 &&
                (r.update((1e3 * a) / (c - g), 100), (g = c), (a = 0), t)
              ) {
                var d = performance.memory;
                t.update(
                  d.usedJSHeapSize / 1048576,
                  d.jsHeapSizeLimit / 1048576
                );
              }
              return c;
            },
            update: function () {
              k = this.end();
            },
            domElement: c,
            setMode: u,
          };
        };
        f.Panel = function (e, f, l) {
          var c = Infinity,
            k = 0,
            g = Math.round,
            a = g(window.devicePixelRatio || 1),
            r = 80 * a,
            h = 48 * a,
            t = 3 * a,
            v = 2 * a,
            d = 3 * a,
            m = 15 * a,
            n = 74 * a,
            p = 30 * a,
            q = document.createElement("canvas");
          q.width = r;
          q.height = h;
          q.style.cssText = "width:80px;height:48px";
          var b = q.getContext("2d");
          b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";
          b.textBaseline = "top";
          b.fillStyle = l;
          b.fillRect(0, 0, r, h);
          b.fillStyle = f;
          b.fillText(e, t, v);
          b.fillRect(d, m, n, p);
          b.fillStyle = l;
          b.globalAlpha = 0.9;
          b.fillRect(d, m, n, p);
          return {
            dom: q,
            update: function (h, w) {
              c = Math.min(c, h);
              k = Math.max(k, h);
              b.fillStyle = l;
              b.globalAlpha = 1;
              b.fillRect(0, 0, r, m);
              b.fillStyle = f;
              b.fillText(g(h) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);
              b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);
              b.fillRect(d + n - a, m, a, p);
              b.fillStyle = l;
              b.globalAlpha = 0.9;
              b.fillRect(d + n - a, m, a, g((1 - h / w) * p));
            },
          };
        };
        return f;
      });
      



      class CvPanel extends HTMLElement {

        async #imageUrlToBlobUrl(imageUrl) {
          try {
            const response = await fetch(imageUrl);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const imageBlob = await response.blob();
            const blobUrl = URL.createObjectURL(imageBlob);
            return blobUrl;
          } catch (error) { 
            return null;
          }
        }
        
      
        constructor(){
          super();
          this.attachShadow({ mode: 'open' });
          this.profileBlobUrl = null;   
        }
       async connectedCallback() { 
      
          const div = document.createElement("div"),
          style = document.createElement("style");
          style.textContent = `
       
      * {
          --blue_color: #337ab7;
      }
      
      #box_back , #backgro_row{
      background-image: url(${this.#imageUrlToBlobUrl('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpldj0iaHR0cDovL3d3dy53My5vcmcvMjAwMS94bWwtZXZlbnRzIiB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJmdWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJoZXhhZ29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtaGV4YWdvbiBmYS13LTE4IGZhLTN4IiBzdHlsZT0iICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IiBmaWxsPSIjMzM3YWI3IiBvcGFjaXR5PSIwLjYiPiANCiAgICANCiAgICA8cGF0aCBkPSJtMzMuMzkwNjI1IDI2MS4zMjAzMTJoNjYuNzczNDM3bDMzLjM4NjcxOS01Ny44MjgxMjQtMzMuMzg2NzE5LTU3LjgyODEyNmgtNjYuNzczNDM3bC0zMy4zOTA2MjUgNTcuODI4MTI2em0wIDAiLz4NCiAgICA8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMy4zOTA2MjUgNDExLjMyMDMxMmg2Ni43NzM0MzdsMzMuMzg2NzE5LTU3LjgyODEyNC0zMy4zODY3MTktNTcuODI4MTI2aC02Ni43NzM0MzdsLTMzLjM5MDYyNSA1Ny44MjgxMjZ6bTAgMCIvPg0KICAgIDxwYXRoIGQ9Im0yODUuNjg3NSAxNDUuNjY0MDYyLTMzLjA4OTg0NCA1Ny4zMDQ2ODgtLjMwMDc4MS41MjM0MzguMzAwNzgxLjUyMzQzNyAzMy4wODk4NDQgNTcuMzA0Njg3aDY2Ljc3NzM0NGwzMy4zODY3MTgtNTcuODI4MTI0LTMzLjM4NjcxOC01Ny44MjgxMjZ6bTAgMCIvPg0KICAgIDxwYXRoIGQ9Im0zNzguNjEzMjgxIDEzMC42NjAxNTYgMzMuMzkwNjI0IDU3LjgyODEyNWg2Ni43NzM0MzhsMzMuMzkwNjI1LTU3LjgyODEyNS0zMy4zOTA2MjUtNTcuODI4MTI1aC02Ni43NzM0Mzh6bTAgMCIvPg0KDQoNCg0KICAgIDxwYXRoIGQ9Im0xMjYuMTQ4NDM4IDEzMC42NjAxNTYgMzMuMzkwNjI0IDU3LjgyODEyNWg2Ni43NzM0MzhsMzMuMzkwNjI1LTU3LjgyODEyNS0zMy4zOTA2MjUtNTcuODI4MTI1aC02Ni43NzM0Mzh6bTAgMCIvPg0KICAgIDxwYXRoIGQ9Im0yNTIuMjk2ODc1IDU3LjgyODEyNSAzMy4zOTA2MjUgNTcuODMyMDMxaDY2Ljc3NzM0NGwzMy4zODY3MTgtNTcuODMyMDMxLTMzLjM4NjcxOC01Ny44MjgxMjVoLTY2Ljc3NzM0NHptMCAwIi8+DQogICAgPHBhdGggZD0ibTIyNi4zMTI1IDMzNC4xNTIzNDQgMzMuMzkwNjI1LTU3LjgyODEyNS0zMy4zOTA2MjUtNTcuODMyMDMxaC02Ni43NzM0MzhsLTMzLjM5MDYyNCA1Ny44MzIwMzEgMzMuMzkwNjI0IDU3LjgyODEyNXptMCAwIiAgLz4NCg0KDQoNCg0KPC9zdmc+')});
      
      }
      
      
      :host {
        background: white;
      }
      
      #backgro_row {
          width: 139px;
          height: 120px;
          margin-top: -120px;
          margin-left: 540px;
          background-size: 91px;
          background-repeat: no-repeat;
          background-position-x: 68px;
          background-position-y: 30px;
      }
      
      * {
           
      }
      
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      
      
      ::-webkit-scrollbar-track {
          /* background: rgba(51, 122, 183, 0.39); */
      }
       
      
      ::-webkit-scrollbar-thumb {
        background: var(--blue_color);; 
      }
      
      ::-webkit-scrollbar-thumb:hover {
        
      }
      
      #sckills {
          text-align: left;
          padding-left: 25px;
      }
      .skill_row_coll{
          margin-bottom:5px !important;
      }
      .icon_of_text {
          margin-top: 4px !important;
      }
      
      #skills_div {
          margin-top:655px;
      }
      
      #skills_div .inIcon_of_icon_icon_is_icon{
          font-weight:bold;
          font-size:18px;
      }
      
      #skills_div .inIcon_of_icon_icon_is_icon .fa-address-book-libary{
          margin-right:5px;
      }
      
      #footer_cv {
          background:var(--blue_color);
          color:white;
          padding:1px;
          margin-top: 32px;
      }
      
      #footer_cv #round_top 
      {
          margin-left:-1px;
          margin-top:-31px;
      }
      
      
      #skills_div .ksills_ff {
          padding-bottom:15px;
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      .box_div_id {
          height:1407px;
          width: 680px;
          min-height: 1407px;
          max-height: 1407px;
          min-width: 680px;
          max-width: 680px;
          margin-left: auto;
          background-size: 136px;
          background-repeat: no-repeat;
          background-position-x: -11px;
          background-position-y: -30px;
          margin-right: auto;
          display: block;
          margin-top: 30px;
          box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 70px 0 rgba(0, 0, 0, 0.10);
          border-left: 4px solid var(--blue_color);
          color: var(--blue_color);
          text-align: center;
          margin-bottom: 50px;
      }
      
      
      .box_div_id .box1 {
      font-family: D3;
      padding-top: 11px;
      font-weight: normal;
      font-size: 46px;
      text-shadow: 1px 1px #c0c0c0ad;
      }
      
      #box_back{
      
      }
      
      .main_label_and_icon{
          display: inline-flex;
      }
      
      #right_coll {
          position: absolute;
          margin-left: 300px;
          width: 40px;
          height: 50px;
          margin-top: 0px;
      }
      
      #right_coll .separator{
         
          width: 280px;
          margin-top: 5px;
      }
      #right_coll #cont1 {
          width: max-content;
      }
      
      .main_label_and_icon{
          display: inline-flex;
      }
      
      
      .main_label_and_icon {
          padding-left:10px;
      }
      
      
      #skkkaeri {
          background: var(--blue_color);
          width: 574px;
          color: white;
          padding: 7px;
          margin-left: -25px;
          padding-left: 25px;
          border-top-right-radius: 30px;
          padding-right: 60px;
          border-bottom-right-radius: 30px;
      }
      #skkkaeri #round_top {
          margin-bottom: 45px !important;
          margin-top: -37px !important;
          margin-left: -25px !important;
          border-top-right-radius: 30px !important;
      }
      
      #skkkaeri #round_bottom {
          margin-top: -3px;
          margin-bottom: -10px;
          margin-left: -25px !important;
          border-bottom-right-radius: 50px !important;
      }
      
      #skkkaeri #round_bottom #ff2 {
              border-bottom-right-radius:20px !important;
      }
      #skills_div #round_bottom #ff{
          border-bottom-right-radius:50px;
      }
      
      #skills_div #round_top #ff2{
          border-top-right-radius:24px !important;
      }
      #skills_div #round_top #ff{
          border-top-right-radius:50px !important;
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      .main_label_and_icon .fa-graduation-cap,
      .main_label_and_icon .fa-puzzle-piece, 
      .main_label_and_icon .fa-tools  {
          padding-left:10px;
          padding-right:10px;
      }
      
      
      .main_label_and_icon_2 {
          text-align: center;
          display: block;
          width: 306px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: -5px !important;
          text-align: center;
      
      }
      
      .box2 h1 {
      font-family: D3;
      padding-top: 10px;
      font-weight: normal;
      font-size: 46px;
      text-shadow: 1px 1px #c0c0c0ad;
      }
      
      
      #cont {
      box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 70px 0 rgba(0, 0, 0, 0.10);
      border-left: 4px solid var(--blue_color);
      
      
      margin-left: 15px;
      margin-right: 15px;
      padding-bottom: 1px;
      padding-top: 1px;
      
      }
      
      .main_label_fffear_FFFA{
          padding:0px !important;
          margin-left: -10px; 
      }
      
      .main_label{
          font-size:22px;
          margin-bottom:10px;
          margin-top:10px;
      }
      
      .main_label_fffear {
          word-break: break-all;
          width: 340px;
      }
      
      #info_email {
          text-align: left;
          padding-left: 10px;
          padding-right: 10px;
      }
      
      
      #cont1 .info_email_code span{
          padding-left:10px;
      }
      
      button{border:0px;padding: 7px;margin-left: auto;margin-right: auto;display: block;margin-top: 10px;box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 70px 0 rgba(0, 0, 0, 0.10);color: currentColor;background: var(--blue_color);text-align: center;margin-bottom: 10px;text-transform: uppercase;border: 2px dashed;border-radius: 10px;font-size: 13px;}
      button:hover{
      background:var(--blue_color);
      color:white;
      }
      
      #canvas {
      width: 200px;
      height: 200px;
      
      position: absolute;
      left: 80px;
      top: 50px;
      z-index: -1;
      }
      
      
      .font {
      font-family: arial;
      
      }
      
      p {
      font-family: arial;
      }
      
      .box2 h1 {
      margin-top: -10px;
      }
      
      .separator {
      
      
      display: block;
      width: auto;
      height: 4px;
      margin-left: 13px;
      margin-right: 13px;
      margin-top: -15px;
      background: var(--blue_color);
      box-shadow: 0 0px 8px 0 var(--blue_color)c7, 0 6px 3077px 0 var(--blue_color)00;
      border-radius: 100px;
      }
      
      
      #hrcod {
      /* position: absolute; */
      width: 140px;
      /* top: 409px; */
      /* left: 420px; */
      float: right;
      margin-right: 17px;
      margin-top: 5px;
      }
      
      
      
      body {
      margin: 0px;
      width: 620px;
      padding-top: 40px;
      }
      
      .f1 {
      font-size: 20px;
      }
      
      .fa-map-marker-alt {
      margin-right: 2px;
      }
      
      .copyrig {
      position: fixed;
      top: 0px;
      width: 100%;
      background: var(--blue_color);
      color: white;
      text-align: center;
      box-shadow: 0 0px 8px 0 var(--blue_color)c7, 0 6px 3077px 0 var(--blue_color)00;
      border-bottom: 3px dashed white;
      
    width: 680px;

      }
      
      
      .copyrig1 {
      position: fixed;
      bottom: 0px;
      width: 100%;
      background: var(--blue_color);
      border-top: 3px dashed white;
      color: white;
      text-align: center;
      box-shadow: 0 0px 8px 0 var(--blue_color)c7, 0 6px 3077px 0 var(--blue_color)00;
      
      
      }
      
      .fa-download {
      margin-right: 4px;
      margin-top: 6px;
      }
      
      
      
      #downloadfiler {
      color: white;
      text-decoration: none;
      
      }
      
      #downloadfiler:hover {
      
      color: silver;
      }
      
      .box_div_id,
      div {
      cursor: default;
      }
      
      #round_ffae {
      transition: 0.1s;
      }
      
      
      
      
      #instructions{
      color: var(--blue_color);
      display:block;
      margin-right:auto;
      margin-left:auto;
      width:-webkit-fill-available;
      position:absolute;
      margin:20px;
      border:2px dashed var(--blue_color);
      
      }
      
      
      #box_represantion {
      text-align: center;
      width: 100%;
      }
      
      
      #round_top{
          margin-top: -50px;
          margin-left: 0px;
          margin-bottom: 49px;
      }
      
      #round_bottom {
         margin-bottom: -20px;
      }
      
        #ff{
          width:30px;
          height:30px;
          position: absolute;
          background: var(--blue_color)
      }
      #round_top #ff2 {
          width:30px;
          height:30px;
      
          background: white;
          position: absolute;
          border-bottom-left-radius: 30px;
      }
      
      
      #round_bottom #ff2 {
          width:30px;
          height:30px;
      
          background: white;
          position: absolute;
          border-top-left-radius: 30px;
      }
      
      
      
      
      
      #left_coll .separator{
          position:absolute;
          width: -webkit-fill-available;
          box-shadow: 0 0px 4px 0 var(--blue_color)c7, 0 6px 3077px 0 var(--blue_color)00;
      }
      
      #left_coll .seperator_white{
          box-shadow: 0 0px 4px 0 #fff, 0 6px 3077px 0 #fff !important;
          background: #fff;
      }
      
      #cv_profile_img {
          width: 150px;
          /* position: absolute; */
          height: 150px;
          /* margin-top: 50px; */
          object-fit: cover;
          /* margin-left: -342px; */
          border-radius: 100px;
          box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 70px 0 rgba(0, 0, 0, 0.10);
          transition: 0.3s;
      
      }
      
      #cv_profile_img:hover{
          
          border-radius:10px;
      }
      
      #left_coll #cont1{
          margin-top: -6px;
      }
      
      #left_coll{
          position: absolute;
          /* margin-top: 55px; */
          background: var(--blue_color);
          padding-top: 20px;
          color:white !important;
          padding-bottom: 20px;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
      }
      
      #round_ffae {
      background: var(--blue_color);
      position: fixed;
      z-index: 333;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      border: 3px dashed white;
      box-shadow: 0 0px 8px 0 var(--blue_color)c7, 0 6px 3077px 0 var(--blue_color)00;
      top: 9px;
      right: 30px;
      tranfsorm: .0.001s;
      }
      #round_ffae svg{
      width:100%;
      height:20px;
      margin-top:11.4px;
      }
      
      #round_ffae svg path {
      fill:white !important;
      }
      
         #box_side {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpldj0iaHR0cDovL3d3dy53My5vcmcvMjAwMS94bWwtZXZlbnRzIiB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJmdWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJoZXhhZ29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtaGV4YWdvbiBmYS13LTE4IGZhLTN4IiBzdHlsZT0iICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IiBmaWxsPSIjMzM3YWI3IiBvcGFjaXR5PSIwLjYiPiANCiAgICA8ZGVmcz4NCiAgICA8cGF0dGVybiBpZD0iaW1nMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIHNsaWNlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pNWVhsbGNsOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJTkNna2dkbWxsZDBKdmVEMGlNQ0F3SURVeE1pNHdNREVnTlRFeUxqQXdNU0lnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdOVEV5TGpBd01TQTFNVEl1TURBeE95SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krRFFvOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJqVkdOVVkxT3lJZ1pEMGlUVFE0TWk0ME5Td3pOall1TXpFNWJDMHdMakF6TmkweU1qQXVOakl5ZGkwd0xqQTVNV013TFRJdU16WTBMVEF1TWpNM0xUUXVOamswTFRBdU5qazBMVFl1T1RZeURRb0pZeTB3TGpFMU1pMHdMamMxTmkwd0xqTXlPUzB4TGpVd05TMHdMalV5T1MweUxqSTBObU10TUM0ME1ERXRNUzQwT0RJdE1DNDRPVGN0TWk0NU15MHhMalE0TXkwMExqTTBZeTB4TGpFM01pMHlMamd4T0MweUxqY3dOaTAxTGpRM01pMDBMalUyTFRjdU9EazNEUW9KWXkweUxqYzRNaTB6TGpZek5TMDJMakk0TnkwMkxqYzFNUzB4TUM0ek9ESXRPUzR4TVRSTU1qY3pMall3TWl3MExqY3lOV010TkM0d09UUXRNaTR6TmpNdE9DNDFORFV0TXk0NE16a3RNVE11TURnMUxUUXVORE5qTFRNdU1ESTNMVEF1TXprMExUWXVNRGt5TFRBdU16a3lMVGt1TVRFNUxEQXVNREF4RFFvSll5MHlMakkyT1N3d0xqSTVOaTAwTGpVeE9Dd3dMamd4TkMwMkxqY3dPQ3d4TGpVMU1tTXRNaTR4T1RJc01DNDNNemt0TkM0ek1qZ3NNUzQzTFRZdU16YzFMREl1T0RneVREUTNMakU1TVN3eE1UVXVNVEU0WXkwMExqQTVOQ3d5TGpNMk5DMDNMalU1T0N3MUxqUTRNUzB4TUM0ek56Z3NPUzR4TVRnTkNnbGpMVEV1T0RVMExESXVOREkwTFRNdU16ZzNMRFV1TURndE5DNDFOVGdzTnk0NE9UaGpMVEF1TlRnMkxERXVOREV0TVM0d09ERXNNaTQ0TlRrdE1TNDBPRElzTkM0ek5HTXRNQzQyTURFc01pNHlNak10TUM0NU9EY3NOQzQxTVRndE1TNHhORElzTmk0NE5UWU5DZ2xqTFRBdU1EVXhMREF1TnpndE1DNHdOemNzTVM0MU5qTXRNQzR3Tnpjc01pNHpOVEpzTUM0d016WXNNakl3TGpZeU1uWXdMakE1TVdNd0xqQXdNU3c0TGpZMk9Dd3pMakU0TWl3eE5pNDRPRElzT0M0M01UZ3NNak11TWpFMkRRb0pZekl1TlRFM0xESXVPRGM1TERVdU5URTRMRFV1TXpjeExEZ3VPVE14TERjdU16Uk1Nak00TGpRc05UQTNMakkzTm1NeE1DNDVNVGdzTmk0ek1ESXNNalF1TXpjc05pNHpMRE0xTGpJNE55MHdMakF3Tm13eE9URXVNVEkxTFRFeE1DNHpPRGtOQ2dsak55NDFNRFV0TkM0ek16VXNNVE11TURJNUxURXhMakU1Tml3eE5TNDNORGN0TVRrdU1UVTNZekF1TkRrMExURXVORFEzTERBdU9EazJMVEl1T1RNeUxERXVNaTAwTGpRME5HTXdMakUxTWkwd0xqYzFOaXd3TGpJNExURXVOVEU0TERBdU16Z3lMVEl1TWpnM0RRb0pRelE0TWk0ek5EVXNNelk1TGpRMU5pdzBPREl1TkRVc0lDSXZQZzBLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBaR05FSTFOVHNpSUdROUlrMDBPREl1TkRFNExERTJPUzQwT0Rac0xUQXVNREEwTFRJekxqYzVkaTB3TGpBNU1XTXdMVEF1TnpFdE1DNHdNamt0TVM0ME1UVXRNQzR3TnpFdE1pNHhNVGNOQ2dsakxUQXVNREV6TFRBdU1qQTVMVEF1TURNeExUQXVOREUyTFRBdU1EUTNMVEF1TmpJMFl5MHdMakEwTFRBdU5URTVMVEF1TURreUxURXVNRE0yTFRBdU1UVTFMVEV1TlRWakxUQXVNREkxTFRBdU1qQTBMVEF1TURRM0xUQXVOREE1TFRBdU1EYzJMVEF1TmpFeERRb0pZeTB3TGpBNU5pMHdMalk1TVMwd0xqSXdOeTB4TGpNM09DMHdMak0wTlMweUxqQTFPR010TUM0eE5USXRNQzQzTlRZdE1DNHpNamt0TVM0MU1EVXRNQzQxTWprdE1pNHlORFpqTFRBdU1pMHdMamMwTVMwd0xqUXlOUzB4TGpRM015MHdMalkzTWkweUxqRTVOdzBLQ1hNdE1DNDFNVGN0TVM0ME16Z3RNQzQ0TVRFdE1pNHhORE5qTFRBdU9EZ3RNaTR4TVRNdE1TNDVOakl0TkM0eE16VXRNeTR5TXkwMkxqQXpObU10TUM0ME1qSXRNQzQyTXpRdE1DNDROall0TVM0eU5UTXRNUzR6TXkweExqZzFPUTBLQ1dNdE1DNDJNVGN0TUM0NE1EY3RNUzR5T0RVdE1TNDFOemd0TVM0NU56SXRNaTR6TXpKakxUQXVNVGN5TFRBdU1UZzVMVEF1TXpRMkxUQXVNemMxTFRBdU5USXlMVEF1TlRZeFl5MHdMamN3TlMwd0xqY3pPUzB4TGpRek1TMHhMalEyTVMweUxqSXdNaTB5TGpFek9RMEtDV010TUM0d01ERXRNQzR3TURFdE1DNHdNREV0TUM0d01ERXRNQzR3TURNdE1DNHdNREpqTFRBdU1EQXhMVEF1TURBeExUQXVNREF4TFRBdU1EQXhMVEF1TURBekxUQXVNREF5WXkwd0xqYzNMVEF1TmpjM0xURXVOVGd6TFRFdU16RXhMVEl1TkRFMkxURXVPVEl6RFFvSll5MHdMakl4TFRBdU1UVTBMVEF1TkRJeExUQXVNekExTFRBdU5qTTBMVEF1TkRVMVl5MHdMamcxTVMwd0xqVTVOeTB4TGpjeU1TMHhMakUzTXkweUxqWXpNaTB4TGpZNU9Fd3lOek11TmpBeUxEUXVOekkxWXkwd0xqWXhOUzB3TGpNMU5TMHhMakkwTFRBdU5qZ3lMVEV1T0RjdE1DNDVPVGNOQ2dsakxUQXVNVGczTFRBdU1EazBMVEF1TXpjMkxUQXVNVGd4TFRBdU5UWTBMVEF1TWpjeFl5MHdMalEyT1Mwd0xqSXlOQzB3TGprME1TMHdMalF6TnkweExqUXhOaTB3TGpZek9XTXRNQzR4T1RFdE1DNHdPREV0TUM0ek9ERXRNQzR4TmpRdE1DNDFOelF0TUM0eU5ESU5DZ2xqTFRBdU5qUTJMVEF1TWpZeExURXVNamsyTFRBdU5UQTVMVEV1T1RVekxUQXVOek5qTFRBdU5qVTVMVEF1TWpJeExURXVNekl5TFRBdU5ERTJMVEV1T1RnNUxUQXVOVGs1WXkwd0xqRTVOeTB3TGpBMU5DMHdMak01TlMwd0xqRXdNaTB3TGpVNU1pMHdMakUxTWcwS0NXTXRNQzQwT1RZdE1DNHhNall0TUM0NU9UVXRNQzR5TkRFdE1TNDBPVFV0TUM0ek5EVmpMVEF1TVRrNUxUQXVNRFF4TFRBdU16azNMVEF1TURnMUxUQXVOVGszTFRBdU1USXlZeTB3TGpZM05pMHdMakV5T1MweExqTTFNeTB3TGpJME5DMHlMakF6TkMwd0xqTXpNZzBLQ1dNdE1DNDNOVFl0TUM0d09Ua3RNUzQxTVRZdE1DNHhOekl0TWk0eU56WXRNQzR5TWpGakxURXVOVEl4TFRBdU1EazVMVE11TURRM0xUQXVNRGszTFRRdU5UWTJMREF1TURBeFl5MHdMamMyTERBdU1EUTVMVEV1TlRJc01DNHhNalF0TWk0eU56WXNNQzR5TWpJTkNnbGpMVEF1TmpneExEQXVNRGc1TFRFdU16VTRMREF1TWpBMExUSXVNRE0yTERBdU16TXlZeTB3TGpJc01DNHdNemN0TUM0ek9UY3NNQzR3T0RFdE1DNDFPVGNzTUM0eE1qSmpMVEF1TlN3d0xqRXdOQzB3TGprNU9Dd3dMakl4T1MweExqUTVOU3d3TGpNME5RMEtDV010TUM0eE9UY3NNQzR3TlMwd0xqTTVOaXd3TGpBNU9TMHdMalU1TWl3d0xqRTFNbU10TUM0Mk5qY3NNQzR4T0RJdE1TNHpNeklzTUM0ek56Y3RNUzQ1T0Rrc01DNDFPVGx6TFRFdU16QTRMREF1TkRjdE1TNDVOVFlzTUM0M016SU5DZ2xqTFRBdU1Ua3NNQzR3TnpZdE1DNHpOemNzTUM0eE5Ua3RNQzQxTmpVc01DNHlNemxqTFRBdU5EYzVMREF1TWpBMExUQXVPVFUxTERBdU5ERTVMVEV1TkRJMkxEQXVOalEwWXkwd0xqRTROU3d3TGpBNE9TMHdMak0zTVN3d0xqRTNOaTB3TGpVMU5pd3dMakkyTncwS0NXTXRNQzQyTXpFc01DNHpNVFV0TVM0eU5UWXNNQzQyTkRRdE1TNDROeklzTVV3ME55NHhPVEVzTVRFMUxqRXhPR010TUM0d01ERXNNQzR3TURFdE1DNHdNRElzTUM0d01ERXRNQzR3TURRc01DNHdNREpqTFRBdU9URXNNQzQxTWpVdE1TNDNOemdzTVM0eE1ERXRNaTQyTWpnc01TNDJPVGNOQ2dsakxUQXVNakV5TERBdU1UVXRNQzQwTWpRc01DNHpNREV0TUM0Mk16SXNNQzQwTlRWakxUQXVPRE15TERBdU5qRXlMVEV1TmpRMkxERXVNalEzTFRJdU5ERTJMREV1T1RJMFl5MHdMakF3TVN3d0xqQXdNUzB3TGpBd05Dd3dMakF3TWkwd0xqQXdOU3d3TGpBd05RMEtDV010TUM0M056RXNNQzQyT0MweExqUTVOeXd4TGpRd01TMHlMakl3TWl3eUxqRTBNV010TUM0eE56WXNNQzR4T0RVdE1DNHpOU3d3TGpNM01TMHdMalV5TVN3d0xqVTFPV010TUM0Mk9EY3NNQzQzTlRRdE1TNHpOVE1zTVM0MU1qWXRNUzQ1TnpJc01pNHpNek1OQ2dsakxUQXVORFkwTERBdU5qQTJMVEF1T1RBM0xERXVNakkyTFRFdU16TXNNUzQ0TmpGakxUQXVOREl5TERBdU5qTTBMVEF1T0RJMUxERXVNamd4TFRFdU1qQTJMREV1T1RReFl5MHdMamMyTVN3eExqTXhPQzB4TGpRek55d3lMalk0T0MweUxqQXlNeXcwTGpBNU5nMEtDV010TUM0eU9USXNNQzQzTURVdE1DNDFOalFzTVM0ME1pMHdMamd4TVN3eUxqRTBNMk10TUM0eU5EY3NNQzQzTWpRdE1DNDBOekVzTVM0ME5UY3RNQzQyTnpFc01pNHhPVGhqTUN3d0xEQXNNQzR3TURFc01Dd3dMakF3TXcwS0NXTXRNQzR4T0N3d0xqWTJOaTB3TGpNek5Dd3hMak0wTVMwd0xqUTNOU3d5TGpBeE9XTXRNQzR3TkRFc01DNHlMVEF1TURjM0xEQXVOREF4TFRBdU1URTJMREF1TmpBeVl5MHdMakE1Tml3d0xqVXdOaTB3TGpFNE1Td3hMakF4TlMwd0xqSTFOU3d4TGpVeU5nMEtDV010TUM0d015d3dMakl3TlMwd0xqQTJNU3d3TGpRd09TMHdMakE0Tnl3d0xqWXhOV010TUM0d09EY3NNQzQyT1RRdE1DNHhOaklzTVM0ek9TMHdMakl3T1N3eUxqQTVNV010TUM0d05URXNNQzQzT0Mwd0xqQTNOeXd4TGpVMk15MHdMakEzTnl3eUxqTTFNbXd3TGpBd05Dd3lNeTQ0TURZTkNnbHNNakk0TGprME5Dd3hOUzR5TnpkTU5EZ3lMalF4T0N3eE5qa3VORGcyZWlJdlBnMEtQSEJ2YkhsbmIyNGdjM1I1YkdVOUltWnBiR3c2SXpReE5EYzVRanNpSUhCdmFXNTBjejBpTkRneUxqUTBOeXd6TkRJdU5URTBJRFE0TWk0ME1UZ3NNVFk1TGpRNE5pQXlPUzQxTlRjc01UWTVMalE0TmlBeU9TNDFPRFVzTXpReUxqVXhOQ0FpTHo0TkNqeHdiMng1WjI5dUlITjBlV3hsUFNKbWFXeHNPaU5HUmtVeE5VRTdJaUJ3YjJsdWRITTlJakl3Tnk0NU16Y3NNVFkwTGpRMU1pQXhNVFV1TlRnekxERTJOQzQwTlRJZ01URXhMamN6TkN3eE5ERXVNelkwSURJeE1TNDNPRFFzTVRReExqTTJOQ0FpTHo0TkNqeHdiMng1WjI5dUlITjBlV3hsUFNKbWFXeHNPaU5HUmtRek5UQTdJaUJ3YjJsdWRITTlJakV4TkM0Mk1qRXNNVFU0TGpZNElERXhOUzQxT0RNc01UWTBMalExTWlBeU1EY3VPVE0zTERFMk5DNDBOVElnTWpBNExqZzVPU3d4TlRndU5qZ2dJaTgrRFFvOFp6NE5DZ2s4Y21WamRDQjRQU0l4TlRrdU9ETWlJSGs5SWpnM0xqUTVJaUJ6ZEhsc1pUMGlabWxzYkRvalJrWkZNVFZCT3lJZ2QybGtkR2c5SWpNdU9EUTRJaUJvWldsbmFIUTlJakUxTGpNNU1pSXZQZzBLQ1R4eVpXTjBJSGc5SWpFMU5TNDVPQ0lnZVQwaU9URXVNelFpSUhOMGVXeGxQU0ptYVd4c09pTkdSa1V4TlVFN0lpQjNhV1IwYUQwaU1URXVOVFEwSWlCb1pXbG5hSFE5SWpNdU9EUTRJaTgrRFFvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkwWkdSVEUxUVRzaUlHUTlJazB5TURndU1qTTRMREUwT1M0d05tTXRNQzQwTXpZc01DMHdMamczTnkwd0xqQTNOUzB4TGpNeE1TMHdMakl5T1dNdE1TNDVPVGN0TUM0M01qVXRNeTR3TXkweUxqa3pNaTB5TGpNd05pMDBMamt6YkRndU1UVXRNakl1TkRrMURRb0pDV013TGpRd05DMHhMakV4Tml3d0xqTXdPUzB5TGpNME5pMHdMakkyTVMwekxqTTNZeTB3TGpNd01pMHdMalUwTlMweExqQXhNUzB4TGpVd015MHlMak0xT1MweExqYzVNMk10T1M0NU16Y3RNaTR4TVRJdE1qa3VNakF4TFRVdU5qWXpMVFEyTGpVek1pMDFMalkyTTJndE15NDNNVFlOQ2drSll5MHhOeTR6TXpJc01DMHpOaTQxT1RVc015NDFOVEl0TkRZdU5UTTJMRFV1TmpZM1l5MHhMak0wTml3d0xqSTROaTB5TGpBMU15d3hMakkwTXkweUxqTTFOaXd4TGpjNE9HTXRNQzQxTnl3eExqQXlOaTB3TGpZMk5Td3lMakkxTkMwd0xqSTFPU3d6TGpNM2JEZ3VNVFE1TERJeUxqUTVOUTBLQ1Fsak1DNDNNalVzTVM0NU9Ua3RNQzR6TURrc05DNHlNRFV0TWk0ek1EWXNOQzQ1TTJNdE1TNDVPVFlzTUM0M01UUXROQzR5TURndE1DNHpNVEl0TkM0NU1qa3RNaTR6TURkc0xUZ3VNVFV6TFRJeUxqUTVOV010TVM0eE5qTXRNeTR5TURrdE1DNDRPRFV0Tmk0M05UTXNNQzQzTmpVdE9TNDNNalVOQ2drSll6RXVOVGt6TFRJdU9EYzBMRFF1TXpJdE5DNDVNVEVzTnk0ME9ESXROUzQxT0RWak1UQXVNak00TFRJdU1UYzVMRE13TGpFd05DMDFMamd6Tml3ME9DNHhOREV0TlM0NE16Wm9NeTQzTVRaak1UZ3VNRE0yTERBc016Y3VPVEF5TERNdU5qVTNMRFE0TGpFek55dzFMamd6TWcwS0NRbGpNeTR4Tmpjc01DNDJOellzTlM0NE9USXNNaTQzTVRNc055NDBPRFVzTlM0MU9EaGpNUzQyTlN3eUxqazNNeXd4TGpreU9DdzJMalV4Tml3d0xqYzJOeXc1TGpjeU5Xd3RPQzR4TlRNc01qSXVORGsxRFFvSkNVTXlNVEV1TWpnNUxERTBPQzR3T0Rjc01qQTVMamd4TERFME9TNHdOaXd5TURndU1qTTRMREUwT1M0d05ub2lMejROQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJrWkZNVFZCT3lJZ1pEMGlUVEUyTVM0M056UXNNVFExTGpZNU5HTXRNaTR4TWpZc01DMHpMamcwT0MweExqY3lNUzB6TGpnME9DMHpMamcwT0ZZeE1UQXVOVGhqTUMweUxqRXlOeXd4TGpjeU15MHpMamcwT0N3ekxqZzBPQzB6TGpnME9BMEtDUWxqTWk0eE1qWXNNQ3d6TGpnME9Dd3hMamN5TVN3ekxqZzBPQ3d6TGpnME9IWXpNUzR5TmpWRE1UWTFMall5TXl3eE5ETXVPVGN5TERFMk15NDVMREUwTlM0Mk9UUXNNVFl4TGpjM05Dd3hORFV1TmprMGVpSXZQZzBLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lOR1JrVXhOVUU3SWlCa1BTSk5NVGc0TGpNM05pd3hORGt1TURaakxUQXVNallzTUMwd0xqVXlNaTB3TGpBeU5pMHdMamM0TlMwd0xqQTNPV010TWk0d09ESXRNQzQwTXpJdE15NDBNVGd0TWk0ME5qa3RNaTQ1T0RVdE5DNDFOVEVOQ2drSmJEUXVOalkzTFRJeUxqUTVOV013TGpZd055MHlMamt6TWkwd0xqTTBOQzAxTGpRNU55MHdMamc0TkMwMUxqazBPR010TlM0ek16WXRNUzQ1TlRndE1UWXVNRFF4TFRVdU5EQTNMVEkxTGpVMk5TMDFMalF3TjJndE1pNHhNamtOQ2drSll5MDVMalV5TlN3d0xUSXdMakl5T0N3ekxqUTBPUzB5TlM0M05qSXNOUzQxTVdNdE1DNHpORElzTUM0ek5TMHhMakk1TWl3eUxqa3hOeTB3TGpZNE5pdzFMamcwTjJ3MExqWTJOeXd5TWk0ME9UVmpNQzQwTXpJc01pNHdPREl0TUM0NU1EUXNOQzR4TVRrdE1pNDVPRFVzTkM0MU5URU5DZ2tKWXkweUxqQTRNeXd3TGpRd01pMDBMakV5TFRBdU9UQTJMVFF1TlRRNUxUSXVPVGc0YkMwMExqWTJOeTB5TWk0ME9UVmpMVEV1TVRZekxUVXVOakEzTERBdU5qSXlMVEV5TGpjNE9DdzFMalV6TXkweE5DNDJNakpqTnk0ek5UVXRNaTQzTXpZc01UZ3VNalU0TFRVdU9Ua3pMREk0TGpRMUxUVXVPVGt6RFFvSkNXZ3lMakV5T1dNeE1DNHhPVEVzTUN3eU1TNHdPVE1zTXk0eU5UZ3NNamd1TkRRMkxEVXVPVGxqTkM0NU1UVXNNUzQ0TXpjc05pNDNNREVzT1M0d01Ua3NOUzQxTXpjc01UUXVOakkyYkMwMExqWTJOeXd5TWk0ME9UVU5DZ2tKUXpFNU1TNDNOaklzTVRRM0xqZ3hNeXd4T1RBdU1UWXNNVFE1TGpBMkxERTRPQzR6TnpZc01UUTVMakEyZWlJdlBnMEtQQzluUGcwS1BIQnZiSGxuYjI0Z2MzUjViR1U5SW1acGJHdzZJMFpHUkRNMU1Ec2lJSEJ2YVc1MGN6MGlNVEV5TGpZNU5pd3hORGN1TVRNMklESXhNQzQ0TWpNc01UUTNMakV6TmlBeU1URXVOemcwTERFME1TNHpOalFnTVRFeExqY3pOQ3d4TkRFdU16WTBJQ0l2UGcwS1BIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkwWkdORUkxTlRzaUlHUTlJazA0T0M0Mk5EY3NNVFkwTGpRMU1tTXRNaTR4TWpZc01DMHpMamcwT0N3eExqY3lNeTB6TGpnME9Dd3pMamcwT0hZeE16UXVNemczWXpBc05ESXVOalk0TERNMExqUTFOeXczTnk0eU5UZ3NOell1T1RZeExEYzNMakkxT0EwS0NYTTNOaTQ1TmpFdE16UXVOVGc1TERjMkxqazJNUzAzTnk0eU5UaFdNVFk0TGpOak1DMHlMakV5TmkweExqY3lNeTB6TGpnME9DMHpMamcwT0MwekxqZzBPRWc0T0M0Mk5EZDZJaTgrRFFvOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJqVkdOVVkxT3lJZ1pEMGlUVEUyT1M0ME5UWXNNamt4TGpRek9XdzNMalk1TnkweE9TNHlOREZzTFRFMUxqTTVNaXd6TGpnME9Hd3RNVFV1TXpreUxUTXVPRFE0YkRjdU5qazNMREU1TGpJME1Xd3RNVGt1TWpReExEWTFMalF4TncwS0NXTXdMREFzTVRFdU5UUTBMRGN1TmprM0xESTJMamt6Tml3M0xqWTVOM015Tmk0NU16WXROeTQyT1Rjc01qWXVPVE0yTFRjdU5qazNUREUyT1M0ME5UWXNNamt4TGpRek9Yb2lMejROQ2p4d2IyeDVaMjl1SUhOMGVXeGxQU0ptYVd4c09pTkdSa1V4TlVFN0lpQndiMmx1ZEhNOUlqRXpNeTQ0T0Rrc016QTJMamswT0NBeE1qY3VNU3d6TURndU5qUTFJREUwTWk0d016VXNNamd4TGpjMk15QXhNelV1TXpBNExESTNPQzR3TWpjZ01URTNMakUyT0N3ek1UQXVOamdnRFFvSk1UQXdMakU1TERNeE1DNDJPQ0F4TURBdU1Ua3NNekU0TGpNM05pQXhNRGd1TkRZc016RTRMak0zTmlBNU55NDNPRGNzTXpJMkxqa3hOQ0F4TURJdU5UazBMRE16TWk0NU1qWWdNVEV4TGpZMU9Td3pNalV1TmpjeklERXdPQzR3T0RRc016TTJMak01T1NBeE1UVXVNemcyTERNek9DNDRNek1nRFFvSk1USXlMalF4TkN3ek1UY3VOelE0SURFek5TNDNOVGdzTXpFMExqUXhNU0FpTHo0TkNqeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTkdOVVkxUmpVN0lpQmtQU0pOTVRNMExqZ3lNeXd5TURJdU9UTXpiQzB4Tnk0MU5qWXRPQzQzT0ROakxUTXVNakkzTFRFdU5qRXpMVFF1T1MwMUxqSTFNUzAwTGpBeU5TMDRMamMxYkRBdU9Ua3pMVE11T1RjMERRb0pZekF1TmprdE1pNDNOVGd0TVM0ek9UWXROUzQwTWprdE5DNHlNemt0TlM0ME1qbGpMVEV1TXpJM0xEQXRNaTQxT0RNc01DNDJNRFF0TXk0ME1USXNNUzQyTkdNdE9TNHhNVFVzTVRFdU16a3pMVEUwTGpBNExESTFMalUwT1MweE5DNHdPQ3cwTUM0eE5IWTRNUzR6TlRrTkNnbGpNQ3d3TERFMkxqQTJPUzB6TGpJeE5Dd3pNQzQxT0RVdE1qUXVNekkyWXpJdU5qWTJMVE11T0RjMkxEY3VNRFV5TFRZdU1UY3hMREV4TGpjeU9DMDJMalF4TVd3dE55NDJPQ3d5TXk0d05ERnNNVFV1TXpreUxETXVPRFE0YkRFekxqUTJPUzB4Tmk0d01qaE1NVE0wTGpneU15d3lNREl1T1RNemVpSU5DZ2t2UGcwS1BIQnZiSGxuYjI0Z2MzUjViR1U5SW1acGJHdzZJMFpHUlRFMVFUc2lJSEJ2YVc1MGN6MGlNVGc1TGpZekxETXdOaTQ1TkRnZ01UazJMalF5TERNd09DNDJORFVnTVRneExqUTROU3d5T0RFdU56WXpJREU0T0M0eU1USXNNamM0TGpBeU55QXlNRFl1TXpVeUxETXhNQzQyT0NBTkNna3lNak11TXpJNUxETXhNQzQyT0NBeU1qTXVNekk1TERNeE9DNHpOellnTWpFMUxqQTJMRE14T0M0ek56WWdNakkxTGpjek1pd3pNall1T1RFMElESXlNQzQ1TWpZc016TXlMamt5TmlBeU1URXVPRFl4TERNeU5TNDJOek1nTWpFMUxqUXpOaXd6TXpZdU16azVJREl3T0M0eE16UXNNek00TGpnek15QU5DZ2t5TURFdU1UQTJMRE14Tnk0M05EZ2dNVGczTGpjMk1pd3pNVFF1TkRFeElDSXZQZzBLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBZMVJqVkdOVHNpSUdROUlrMHhPRGd1TmprM0xESXdNaTQ1TXpOc01UY3VOVFkyTFRndU56Z3pZek11TWpJM0xURXVOakV6TERRdU9TMDFMakkxTVN3MExqQXlOUzA0TGpjMWJDMHdMams1TXkwekxqazNOQTBLQ1dNdE1DNDJPUzB5TGpjMU9Dd3hMak01TmkwMUxqUXlPU3cwTGpJek9TMDFMalF5T1dNeExqTXlOeXd3TERJdU5UZ3pMREF1TmpBMExETXVOREV5TERFdU5qUmpPUzR4TVRVc01URXVNemt6TERFMExqQTRMREkxTGpVME9Td3hOQzR3T0N3ME1DNHhOSFk0TVM0ek5Ua05DZ2xqTUN3d0xURTJMakEyT1MwekxqSXhOQzB6TUM0MU9EVXRNalF1TXpJMll5MHlMalkyTmkwekxqZzNOaTAzTGpBMU1pMDJMakUzTVMweE1TNDNNamd0Tmk0ME1URnNOeTQyT0N3eU15NHdOREZNTVRneExESTVOUzR5T0Rsc0xURXpMalEyT1MweE5pNHdNamhNTVRnNExqWTVOeXd5TURJdU9UTXplaUlOQ2drdlBnMEtQR2MrRFFvSlBIQnZiSGxuYjI0Z2MzUjViR1U5SW1acGJHdzZJMFpHUlRFMVFUc2lJSEJ2YVc1MGN6MGlNVE00TGpZM01pd3hOelV1T1RrM0lERXhPUzQwTXpFc01UYzFMams1TnlBeE1qVXVNakF6TERFNE15NDJPVE1nTVRNNExqWTNNaXd4T0RjdU5UUXhJREV6TUM0NU56VXNNVGt4TGpNNE9TQU5DZ2tKTVRReUxqVXlMREU1TVM0ek9Ea2dDU0l2UGcwS0NUeHdiMng1WjI5dUlITjBlV3hsUFNKbWFXeHNPaU5HUmtVeE5VRTdJaUJ3YjJsdWRITTlJakU0TkM0NE5EZ3NNVGMxTGprNU55QXlNRFF1TURnNUxERTNOUzQ1T1RjZ01UazRMak14Tnl3eE9ETXVOamt6SURFNE5DNDRORGdzTVRnM0xqVTBNU0F4T1RJdU5UUTFMREU1TVM0ek9Ea2dEUW9KQ1RFNE1Td3hPVEV1TXpnNUlBa2lMejROQ2p3dlp6NE5Danh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5HTlVZMVJqVTdJaUJrUFNKTk1UZzNMalUxTnl3eE56SXVPVGhzTFRFNExqRXdNU3d6TGpBeE4yd3ROeTQyT1Rjc01UVXVNemt5YkMwM0xqWTVOeTB4TlM0ek9USnNMVEU0TGpFd01TMHpMakF4TncwS0NXTXRNaTR3TnpZdE1DNHpORFl0TXk0Mk5qY3NNUzQ0TURndE1pNDNNallzTXk0Mk9XdzVMakk0TkN3eE9DNDFOalpzTFRjdU5qazNMRGN1TmprM2FESTJMamt6Tm1neU5pNDVNelpzTFRjdU5qazNMVGN1TmprM2JEa3VNamd5TFRFNExqVTJOZzBLQ1VNeE9URXVNakkwTERFM05DNDNPRGdzTVRnNUxqWXpNeXd4TnpJdU5qTTBMREU0Tnk0MU5UY3NNVGN5TGprNGVpSXZQZzBLUEdOcGNtTnNaU0J6ZEhsc1pUMGlabWxzYkRvalJrWkNSVFV3T3lJZ1kzZzlJakUyTVM0M05pSWdZM2s5SWpFME15NHdOU0lnY2owaU5TNDNOeklpTHo0TkNqeGxiR3hwY0hObElITjBlV3hsUFNKbWFXeHNPaU0wTVRRM09VSTdJaUJqZUQwaU1UWXhMalk0SWlCamVUMGlNVFUyTGpneklpQnllRDBpTkM0MU5qTWlJSEo1UFNJekxqSXdOeUl2UGcwS1BHVnNiR2x3YzJVZ2MzUjViR1U5SW1acGJHdzZJMFpHTkVJMU5Uc2lJR040UFNJeE16Z3VPVEVpSUdONVBTSXhOVFl1T0RNaUlISjRQU0kwTGpVMk15SWdjbms5SWpNdU1qQTNJaTgrRFFvOFp6NE5DZ2s4Wld4c2FYQnpaU0J6ZEhsc1pUMGlabWxzYkRvak5ERTBOemxDT3lJZ1kzZzlJakV4Tmk0eE5DSWdZM2s5SWpFMU5pNDRNeUlnY25nOUlqUXVOVFl6SWlCeWVUMGlNeTR5TURjaUx6NE5DZ2s4Wld4c2FYQnpaU0J6ZEhsc1pUMGlabWxzYkRvak5ERTBOemxDT3lJZ1kzZzlJakl3Tnk0eU1pSWdZM2s5SWpFMU5pNDRNeUlnY25nOUlqUXVOVFl6SWlCeWVUMGlNeTR5TURjaUx6NE5Dand2Wno0TkNqeGxiR3hwY0hObElITjBlV3hsUFNKbWFXeHNPaU5HUmpSQ05UVTdJaUJqZUQwaU1UZzBMalExSWlCamVUMGlNVFUyTGpneklpQnllRDBpTkM0MU5qTWlJSEo1UFNJekxqSXdOeUl2UGcwS1BHYytEUW9KUEdOcGNtTnNaU0J6ZEhsc1pUMGlabWxzYkRvalJrWkNSVFV3T3lJZ1kzZzlJakU0T0M0MUlpQmplVDBpTVRRekxqQTFJaUJ5UFNJMUxqYzNNaUl2UGcwS0NUeGphWEpqYkdVZ2MzUjViR1U5SW1acGJHdzZJMFpHUWtVMU1Ec2lJR040UFNJeU1Ea3VOakVpSUdONVBTSXhORE11TURVaUlISTlJalV1TnpjeUlpOCtEUW9KUEdOcGNtTnNaU0J6ZEhsc1pUMGlabWxzYkRvalJrWkNSVFV3T3lJZ1kzZzlJakV6TlM0d05DSWdZM2s5SWpFME15NHdOU0lnY2owaU5TNDNOeklpTHo0TkNnazhZMmx5WTJ4bElITjBlV3hsUFNKbWFXeHNPaU5HUmtKRk5UQTdJaUJqZUQwaU1URXpMamt6SWlCamVUMGlNVFF6TGpBMUlpQnlQU0kxTGpjM01pSXZQZzBLUEM5blBnMEtQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJelF4TkRjNVFqc2lJR1E5SWsweE5qZ3VNemc1TERFeE1DNDFOemxqTUM0Mk5qRXRNUzR4TXpZc01TNHdOamN0TWk0ME16a3NNUzR3TmpjdE15NDRORGhqTUMwMExqSTFMVE11TkRRMUxUY3VOamszTFRjdU5qazNMVGN1TmprM0RRb0pZeTAwTGpJMUxEQXROeTQyT1Rjc015NDBORFV0Tnk0Mk9UY3NOeTQyT1Rkak1Dd3hMalF4TERBdU5EQTJMREl1TnpFeUxERXVNRFkzTERNdU9EUTRTREUyT0M0ek9EbDZJaTgrRFFvOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJrWTBRalUxT3lJZ1pEMGlUVEUyTVM0M05Ua3NNamd4TGpneE9XTXRNVFV1T1RFMExEQXRNamd1T0RZeExURXlMamswTmkweU9DNDROakV0TWpndU9EWXhkaTAxTVM0NU5XZzFOeTQzTWpKMk5URXVPVFVOQ2dsRE1Ua3dMall5TERJMk9DNDROelFzTVRjM0xqWTNOU3d5T0RFdU9ERTVMREUyTVM0M05Ua3NNamd4TGpneE9Yb2lMejROQ2p4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lOQk5UUkNOVEE3SWlCa1BTSk5NVGc0TGpZNU55d3lNREl1T1RNemRqVXdMakF5TldNd0xERTBMamczTmkweE1pNHdOaXd5Tmk0NU16WXRNall1T1RNMkxESTJMamt6Tm5NdE1qWXVPVE0yTFRFeUxqQTJMVEkyTGprek5pMHlOaTQ1TXpaMkxUVXdMakF5TlEwS0NVd3hPRGd1TmprM0xESXdNaTQ1TXpNZ1RURTVNaTQxTkRVc01UazVMakE0TldndE15NDRORGhvTFRVekxqZzNNMmd0TXk0NE5EaDJNeTQ0TkRoMk5UQXVNREkxWXpBc01UWXVPVGMxTERFekxqZ3hMRE13TGpjNE5Td3pNQzQzT0RRc016QXVOemcxRFFvSmN6TXdMamM0TkMweE15NDRNU3d6TUM0M09EUXRNekF1TnpnMWRpMDFNQzR3TWpWMkxUTXVPRFE0U0RFNU1pNDFORFY2SWk4K0RRbzhaejROQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJqVkdOVVkxT3lJZ1pEMGlUVEUxTlM0NU9EY3NNamM1TGpJMll6RXVPRFl5TERBdU5EQTNMRE11TnpnNUxEQXVOak0xTERVdU56Y3lMREF1TmpNMWN6TXVPVEV4TFRBdU1qSTVMRFV1TnpjeUxUQXVOak0xZGkwM05pNHpNamRvTFRFeExqVTBOQTBLQ1FsRE1UVTFMams0Tnl3eU1ESXVPVE16TERFMU5TNDVPRGNzTWpjNUxqSTJMREUxTlM0NU9EY3NNamM1TGpJMmVpSXZQZzBLQ1R4eVpXTjBJSGc5SWpFek5DNDRNeUlnZVQwaU1qTTBMalk1SWlCemRIbHNaVDBpWm1sc2JEb2pSalZHTlVZMU95SWdkMmxrZEdnOUlqVXpMamczTXlJZ2FHVnBaMmgwUFNJeE1TNDFORFFpTHo0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqd3ZjM1puUGcwSyIgeD0iMTE4IiB5PSIyMDAiIHdpZHRoPSIxNTVweCIgaGVpZ2h0PSIxNTVweCIvPg0KICAgICAgICA8L3BhdHRlcm4+DQogICAgPC9kZWZzPg0KICAgIDxwYXRoIGQ9Im0zMy4zOTA2MjUgMjYxLjMyMDMxMmg2Ni43NzM0MzdsMzMuMzg2NzE5LTU3LjgyODEyNC0zMy4zODY3MTktNTcuODI4MTI2aC02Ni43NzM0MzdsLTMzLjM5MDYyNSA1Ny44MjgxMjZ6bTAgMCIvPg0KICAgIDxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMzLjM5MDYyNSA0MTEuMzIwMzEyaDY2Ljc3MzQzN2wzMy4zODY3MTktNTcuODI4MTI0LTMzLjM4NjcxOS01Ny44MjgxMjZoLTY2Ljc3MzQzN2wtMzMuMzkwNjI1IDU3LjgyODEyNnptMCAwIi8+DQogICAgPHBhdGggZD0ibTI4NS42ODc1IDE0NS42NjQwNjItMzMuMDg5ODQ0IDU3LjMwNDY4OC0uMzAwNzgxLjUyMzQzOC4zMDA3ODEuNTIzNDM3IDMzLjA4OTg0NCA1Ny4zMDQ2ODdoNjYuNzc3MzQ0bDMzLjM4NjcxOC01Ny44MjgxMjQtMzMuMzg2NzE4LTU3LjgyODEyNnptMCAwIi8+DQogICAgPHBhdGggZD0ibTM3OC42MTMyODEgMTMwLjY2MDE1NiAzMy4zOTA2MjQgNTcuODI4MTI1aDY2Ljc3MzQzOGwzMy4zOTA2MjUtNTcuODI4MTI1LTMzLjM5MDYyNS01Ny44MjgxMjVoLTY2Ljc3MzQzOHptMCAwIi8+DQoNCg0KDQogICAgPHBhdGggZD0ibTEyNi4xNDg0MzggMTMwLjY2MDE1NiAzMy4zOTA2MjQgNTcuODI4MTI1aDY2Ljc3MzQzOGwzMy4zOTA2MjUtNTcuODI4MTI1LTMzLjM5MDYyNS01Ny44MjgxMjVoLTY2Ljc3MzQzOHptMCAwIi8+DQogICAgPHBhdGggZD0ibTI1Mi4yOTY4NzUgNTcuODI4MTI1IDMzLjM5MDYyNSA1Ny44MzIwMzFoNjYuNzc3MzQ0bDMzLjM4NjcxOC01Ny44MzIwMzEtMzMuMzg2NzE4LTU3LjgyODEyNWgtNjYuNzc3MzQ0em0wIDAiLz4NCiAgICA8cGF0aCBkPSJtMjI2LjMxMjUgMzM0LjE1MjM0NCAzMy4zOTA2MjUtNTcuODI4MTI1LTMzLjM5MDYyNS01Ny44MzIwMzFoLTY2Ljc3MzQzOGwtMzMuMzkwNjI0IDU3LjgzMjAzMSAzMy4zOTA2MjQgNTcuODI4MTI1em0wIDAiIGZpbGw9InVybCgjaW1nMSkiLz4NCg0KDQoNCg0KPC9zdmc+);
      }
      
      #round_ffae:hover {
      background:red;
      }
      
      #div_box_center {
      display:block;
      width:100%;
      margin-right:auto;
      margin-left:auto;
      text-align:center;
      background: white;
      
        margin-top:20px;position: absolute;
        
            height: 1407px;
    width: 680px;
        }
      
      
      #skills_div {
          margin-top: 670px !important;
      }`;
          div.innerHTML = `
          <div id="meta_div">
              <div id="div_box_center">
                  <div id="box_side" class="box3 box_div_id">
                      <h1 class="box1"><a id="color1">Marko</a> Nikolić</h1>
                      <span class="separator"></span>
                      <p class="font f1 font_btmna">IT Developer from Serbia/Belgrade </p>
      
                      <div id="left_coll">
                          <div id="round_top">
                              <div id="ff"></div>
                              <div id="ff2"></div>
                          </div>
                          <img id="cv_profile_img" src="${window.location.origin}/avatar">
                          <p class="main_label">Contact</p>
                          <br>
                          <span class="separator seperator_white"></span>
                          <div id="cont1">
                              <p id="info_email" class="info_email_code"><i class="fas fa-heartbeat"></i><span>Born : 16/03</span></p>
                              <p id="info_email" class="info_email_code"><i class="fas fa-map-marker-alt"></i><span>Serbia/Belgrade/Surčin</span></p>
                              <p id="info_email" class="info_email_code"><i class="fas fa-globe"></i><span>portfolio.eronelit.com</span></p>
                              <p id="info_email" class="info_email_code"><i class="fab fa-linkedin"></i><span>linkedin.com/in/markonikolic98</span></p>
                              <p id="info_email" class="info_email_code"><i class="fas fa-at"></i><span>contact@markonikolic98.com</span></p>
                              <p id="info_email" class="info_email_code"><i class="fab fa-github"></i><span onclick="open.window('https:\/\/github.com/marko9827');">github.com/marko9827</span></p>
                              <p></p>
                          </div>
                          <p class="main_label ">Language</p>
                          <br>
                          <span class="separator seperator_white"></span>
                          <div id="cont1">
                              <p id="info_email" class="info_email_code"><i class="fas fa-language"></i><span>Serbian <br> Mother tongue</span></p>
                              <p id="info_email" class="info_email_code"><i class="fas fa-language"></i><span>English <br> Excellent both written &amp; oral</span></p>
                          </div>
                          <div id="round_bottom">
                              <div id="ff"></div>
                              <div id="ff2"></div>
                          </div>
                      </div>
      
                      <div id="right_coll">
                          <p class="main_label main_label_and_icon"><i class="fas fa-graduation-cap"></i> Education</p>
                          <span class="separator"></span>
                          <div id="cont1">
                              <p id="info_email" class="info_email_code"><i class="fas fa-graduation-cap"></i><span>Singidunum University<br>Information Technology and Computing<br>- Student</span></p>
                              <p id="info_email" class="info_email_code"><i class="fas fa-award"></i><span>Tehnicka Skola Novi Beograd<br>Modeling, Virtual Environments and Simulation<br></span></p>
                              <p></p>
                          </div>
                          <p class="main_label main_label_and_icon main_label_and_icon_2"><i class="fas fa-puzzle-piece"></i>Personal Projects</p>
                          <br>
                          <span class="separator"></span>
                          <div id="cont1">
                              <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Eronelit Q </span><br> Web engine [ https://search.eronelit.com ]</span></p>
                              <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Full PC info </span> <br> All information PC [ https://blog.eronelit.com/2016/11/eronel-full-pc-information.html ]</span></p>
                              <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Interaktivmarket </span> <br> Bussiness social network [ https://interaktivmarket.com ]</span></p>
                              <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Echat</span> <br> Bussiness/Stream/Gaming network<br>[ https://echat.eronelit.com/ ]</span></p>
                              <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Eronelit Web Q</span> <br> Web browser</span><br><br>
                                  <span onclick="parent.welcomer.pgloader('projects');" id="ffaefaer_F" title="Open my projects">AND MORE</span>
                              </p>
      
      
      
                          </div>
      
                      </div>
                      <div id="skills_div">
                          <p class="main_label main_label_and_icon main_label_and_icon_2 ksills_ff">Other important information</p>
                          <br>
      
                          <span class="separator"></span>
                          <div id="cont1">
                              <div id="sckills">
                                  <p class="skill_row_coll">
                                      <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-code"></i> Programming :</span> <br>
                                  </p><p class="icon_of_text">C#, javascript, HTML5, css3, asp.net,PHP, jQuery UI,VB, C++, SQL,...</p>
                                  <p></p>
      
      
                                  <p class="skill_row_coll">
                                      <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-cogs"></i> Game engines :</span> <br>
                                  </p><p class="icon_of_text"> Unreal Engine, Unity, CryEngine, in-house game engine (based on C++, OpenGL, Bullet physics...)</p>
                                  <p></p>
      
                                  <p class="skill_row_coll">
                                      <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-address-book-libary"></i> Libraries :</span> <br>
                                  </p><p class="icon_of_text"> Bullet and PhysX physics, OpenCV, QT, SDL2, Assimp, OpenGL legacy..</p>
                                  <p></p>
      
                                  <div id="skkkaeri">
                                      <div id="round_top">
                                          <div id="ff"></div>
                                          <div id="ff2"></div>
                                      </div>
                                      <p class="skill_row_coll">
                                          <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-microscope"></i> Science : </span> <br>
                                      </p><p class="icon_of_text"> Quantum (Quantum Theory, Wromhole,space,gravitational
                                          physics,robotic solutions in medicine, space, ...), Space explore,exploring the entire history of the
                                          planet Earth,... </p>
                                      <p></p>
                                      <div id="round_bottom">
                                          <div id="ff"></div>
                                          <div id="ff2"></div>
                                      </div>
      
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511.99975 511" style="position: absolute; width: 69px; margin-top: -82px; margin-left: 551px; transform: rotate(-135deg); ">
                                          <path d="m471.597656 348.3125c-.824218-4.679688-3.011718-9.164062-6.628906-12.78125l-192-192c-9.375-9.375-24.5625-9.375-33.9375 0-6.578125 6.574219-8.4375 15.992188-5.785156 24.28125l-64.277344-64.28125c-9.375-9.375-24.5625-9.375-33.9375 0-9.375 9.371094-9.375 24.566406 0 33.9375l32.277344 32.28125c-8.285156-2.65625-17.699219-.796875-24.277344 5.78125-9.375 9.371094-9.375 24.566406 0 33.9375l56.277344 56.28125c-8.285156-2.65625-17.699219-.796875-24.277344 5.78125-9.375 9.371094-9.375 24.566406 0 33.9375l160 160c3.617188 3.617188 8.101562 5.804688 12.78125 6.632812 16.136719 19.765626 40.679688 32.398438 68.1875 32.398438 48.601562 0 88-39.398438 88-88 0-27.507812-12.636719-52.050781-32.402344-68.1875zm0 0" fill="#dbeaff"></path>
                                          <path d="m430.589844 354.140625c-9.683594-2.175781-19.070313-2.113281-27.792969-.257813-15.285156 3.25-31.121094-2.476562-42.171875-13.527343l-79.003906-79.003907c-5.171875-5.171874-13.5-6.425781-19.433594-2.148437-7.566406 5.453125-8.191406 16.058594-1.882812 22.367187l79.558593 79.5625c11.046875 11.046876 16.769531 26.878907 13.519531 42.160157-1.855468 8.722656-1.917968 18.105469.257813 27.789062 5.476563 24.386719 25.527344 43.71875 50.101563 48.277344 44.882812 8.324219 83.441406-30.234375 75.117187-75.117187-4.554687-24.570313-23.886719-44.625-48.269531-50.101563zm0 0" fill="#edf4ff"></path>
                                          <path d="m416 512.453125c-24.585938 0-49.164062-9.355469-67.882812-28.070313l-204-204c-3.125-3.125-3.125-8.1875 0-11.3125s8.1875-3.125 11.3125 0l204 204c31.195312 31.191407 81.945312 31.183594 113.140624 0 31.195313-31.191406 31.195313-81.949218 0-113.140624l-260-260c-3.125-3.125-3.125-8.1875 0-11.3125s8.1875-3.125 11.3125 0l260 260c18.132813 18.132812 28.117188 42.238281 28.117188 67.882812s-9.984375 49.75-28.117188 67.882812c-18.71875 18.714844-43.296874 28.070313-67.882812 28.070313zm0 0" fill="#c3ddff"></path>
                                          <path d="m416 368.5-17.03125 3.109375c-2.664062 1.007813-5.210938 2.25-7.621094 3.695313-13.988281 8.390624-19.847656 23.699218-19.847656 41.195312 0 26.507812 17.988281 42.640625 44.5 42.640625 17.488281 0 32.792969-3.996094 41.183594-17.976563 4.328125-7.207031 6.816406-15.644531 6.816406-24.664062 0-26.507812-21.492188-48-48-48zm0 0" fill="#8bb3ea"></path>
                                          <g fill="#c3ddff">
                                              <path d="m236.007812 244.507812c-2.046874 0-4.09375-.78125-5.65625-2.34375l-228.007812-228.007812c-3.125-3.125-3.125-8.1875 0-11.3125s8.1875-3.125 11.3125 0l228.007812 228.007812c3.125 3.125 3.125 8.1875 0 11.3125-1.5625 1.5625-3.609374 2.34375-5.65625 2.34375zm0 0"></path>
                                              <path d="m256 328.5c-2.046875 0-4.09375-.78125-5.65625-2.34375l-152-152c-3.125-3.125-3.125-8.1875 0-11.3125s8.1875-3.125 11.3125 0l152 152c3.125 3.125 3.125 8.1875 0 11.3125-1.5625 1.5625-3.609375 2.34375-5.65625 2.34375zm0 0"></path>
                                              <path d="m340 284.5c-2.046875 0-4.09375-.78125-5.65625-2.34375l-220-220c-3.125-3.125-3.125-8.1875 0-11.3125s8.1875-3.125 11.3125 0l220 220c3.125 3.125 3.125 8.1875 0 11.3125-1.5625 1.5625-3.609375 2.34375-5.65625 2.34375zm0 0"></path>
                                          </g>
                                          <path d="m456 408.5c0 8.835938-7.164062 16-16 16s-16-7.164062-16-16 7.164062-16 16-16 16 7.164062 16 16zm0 0" fill="#a4ccff"></path>
                                          <path d="m416 368.5c-6.019531 0-11.722656 1.085938-17.03125 3.109375l8.015625 12.292969c1.539063 2.332031 4.085937 3.597656 6.6875 3.597656 1.507813 0 3.039063-.425781 4.390625-1.320312 3.695312-2.429688 4.710938-7.390626 2.28125-11.082032zm0 0" fill="#a4ccff"></path>
                                          <path d="m432.5 448c-3.867188 0-7.617188-.46875-11.21875-1.332031l1.375-2.0625c2.453125-3.675781 1.460938-8.644531-2.21875-11.09375-3.695312-2.460938-8.648438-1.460938-11.09375 2.21875l-3.003906 4.503906c-8.160156-5.316406-14.601563-13.042969-18.316406-22.175781l7.492187 5.066406c1.375.929688 2.9375 1.375 4.476563 1.375 2.570312 0 5.085937-1.230469 6.632812-3.519531 2.476562-3.65625 1.515625-8.636719-2.140625-11.105469l-11.335937-7.667969c-2.667969-1.808593-6.015626-1.78125-8.597657-.230469-.027343-.65625-.050781-1.3125-.050781-1.976562 0-9.023438 2.515625-17.484375 6.847656-24.695312-13.972656 8.394531-23.347656 23.710937-23.347656 41.195312 0 26.507812 21.488281 48 48 48 17.484375 0 32.792969-9.363281 41.183594-23.332031-7.210938 4.328125-15.660156 6.832031-24.683594 6.832031zm0 0" fill="#739ad6"></path>
                                      </svg>
      
                                  </div>
      
                                  <p class="skill_row_coll">
                                      <span class="inIcon_of_icon_icon_is_icon"><i class="fab fa-android"></i> Platforms : </span> <br>
                                  </p><p class="icon_of_text"> PC, Android, Oculus Rift VR, Google Cardboard, Microsoft Kinect, Linux(Debian,Ubundu), Embedded systems</p>
                                  <p></p>
                                  <p class="skill_row_coll">
                                      <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-tools"></i> Skills : </span> <br>
                                  </p><p class="icon_of_text"> Programming , design, behavioral trees, 3D modeling, gameplay design, particle system, Industry Simulation(PTC CREO)</p>
                                  <p></p>
      
      
      
                              </div>
                          </div>
                      </div>
                      <div id="footer_cv">
                          <div id="round_top">
                              <div id="ff"></div>
                              <div id="ff2"></div>
                          </div>
                          <p>
                              <a></a> Copyright <a><i class="far fa-copyright"></i></a> 2014 - 2025 <a>Marko Nikolić</a> | CV.
                          </p>
                          <div id="backgro_row"></div>
                      </div>
                  </div>
                  
              </div>
              <div class="copyrig">
                  <p>
                      <a></a> Copyright <i class="far fa-copyright"></i> 2014 - 2025 <a>Marko Nikolić</a> | Serbia/Belgrade.
                  </p>
              </div>        <p id="round_ffae" style="display: none !important;" title="Generate web page to pdf" onclick="window.open('./?pages=cv-markonikolic-pdf');"><i class="fas fa-file-pdf"></i></p>
          </div>`;
          this.shadowRoot.appendChild(div);
          div.appendChild(style);
      
          const profileImgElement = this.shadowRoot.getElementById('cv_profile_img');
          const originalImageUrl = profileImgElement.src; // Get the initial src
      
          if (originalImageUrl) { 
            this.profileBlobUrl = await this.#imageUrlToBlobUrl(originalImageUrl);
      
            if (this.profileBlobUrl) { 
              profileImgElement.src = this.profileBlobUrl;
            }
          }
      
      
        }
      }
        
      
      if(!customElements.get('cv-panel')){
        customElements.define('cv-panel',CvPanel);
      }
      

    if(!customElements.get('project-card')){
      customElements.define('project-card', ProjectCard);
    }

    if(!customElements.get('custom-dropdown')){
      customElements.define('custom-dropdown', CustomDropdown);
    }
    if (!customElements.get("custom-combobox")) {
        customElements.define("custom-combobox", CustomCombobox);
    }
      if (!customElements.get("p-search")) {
        customElements.define("p-search", CustomSearch);
      }
      if (!customElements.get("video-player")) {
        customElements.define("video-player", VideoPlayer);
      }
      if (!customElements.get("video-player-v2")) {
        customElements.define("video-player-v2", VideoPlayerV2);
      }
      if (!customElements.get("p-container")) {
        customElements.define("p-container", PostContent);
      }
      if (!customElements.get("pdf-viewer")) {
        customElements.define("pdf-viewer", PDFViewerElement);
      }
      if (!customElements.get("image-preview")) {
        customElements.define("image-preview", ImagePreview);
      }
      if (!customElements.get("blue-warp")) {
        customElements.define("blue-warp", BlueWarp);
      }
      if (!customElements.get("div-solarsystem")) {
        customElements.define("div-solarsystem", SolarMap);
      }

      (videoPlayerElement = document.querySelector("video-player")),
        (pContainerElement = document.querySelector("p-container"));
    },

    reset_call: function () {
      const video = document.createElement("video");
      video.setAttribute("loop", "");
      video.setAttribute("autoplay", "");
      video.setAttribute("muted", "");
      video.setAttribute("autobuffer", "");
      video.setAttribute("playsinline", "");
      video.classList.add("wallpaperVideo");
      video.classList.add("video_is_hidden");
      //
      const p_c = document.createElement("p");
      p_c.classList.add("p-c");
      p_c.appendChild(document.createTextNode("Do you love random videos?"));
      p_c.appendChild(document.createElement("br"));
      p_c.appendChild(document.createTextNode("- Tip: Reload page..."));
      //
      const content_space = document.createElement("div");
      content_space.id = "content_Space";
      //
    },
    solarday: function(){
      const startDate = new Date('1998-03-16'); 
const currentDate = new Date(); 
const diffInMs = currentDate - startDate; 
const daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
return daysPassed;
    },
    reset_body_aprs: function () {
      const aerElement = document.createElement("div");
      aerElement.classList.add("aer-container");

      const videoElement = document.createElement("video");
      videoElement.style.opacity = "0";
      videoElement.loop = true;
      videoElement.autoplay = true;
      videoElement.muted = true;
      videoElement.setAttribute("autobuffer", "");
      videoElement.setAttribute("playsinline", "");
      videoElement.classList.add("wallpaperVideo", "video_is_hidden");
      aerElement.appendChild(videoElement);

      const paragraphElement = document.createElement("p");
      paragraphElement.classList.add("p-c");
      paragraphElement.innerHTML =
        "Do you love random videos?<br>- Tip: Reload page...";
      aerElement.appendChild(paragraphElement);

      const contentSpace = document.createElement("div");
      contentSpace.id = "content_Space";
      aerElement.appendChild(contentSpace);

      const hhAnimStart = document.createElement("hh_anim_start");
      const spjin = document.createElement("spjin");

      const spjParagraph = document.createElement("p");
      const boxShadowSpan = document.createElement("span");
      boxShadowSpan.classList.add("box_shadow_h");
      boxShadowSpan.innerHTML =
       `Marko Nikolić - Portfolio <i class="far fa-copyright"></i> ${this.solarday()}`;
      spjParagraph.appendChild(boxShadowSpan);
      spjin.appendChild(spjParagraph);

      const spj = document.createElement("spj");
      const logoImg = document.createElement("img");
      logoImg.src = "/svg_logo_backscr_img";
      logoImg.id = "logo_backscr_img";
      logoImg.alt = "logo";
      logoImg.loading = "lazy";
      spj.appendChild(logoImg);
      spj.appendChild(document.createElement("br")).classList.add("hide_noy");
      spj.appendChild(document.createElement("br")).classList.add("hide_noy");

      const h3Element = document.createElement("h3");
      h3Element.textContent = "Marko Nikolić";
      spj.appendChild(h3Element);

      const boxShadowDiv = document.createElement("div");
      boxShadowDiv.classList.add("box_shadow_txtf", "box_shadow");

      const spans = [
        "Full stack Developer",
        "Scientist theories/news",
        "Writing books",
        "Photographer",
      ];
      spans.forEach((text, index) => {
        const span = document.createElement("span");
        span.textContent = text;
        boxShadowDiv.appendChild(span);
        if (index < spans.length - 1) {
          const separator = document.createElement("sp");
          separator.textContent = "-";
          boxShadowDiv.appendChild(separator);
        }
      });
      spj.appendChild(boxShadowDiv);

      spj.appendChild(document.createElement("br")).classList.add("hide_noy");
      spj.appendChild(document.createElement("br"));

      const arrBundle = document.createElement("arr_bundle");
      const arrowRight = document.createElement("i");
      arrowRight.classList.add(
        "bi",
        "bi-arrow-right-circle-fill",
        "catascrollEchatTv_right",
        "catascrollEchatTv"
      );
      arrowRight.style.transform = "scale(1)";
      arrowRight.setAttribute("data-onclick", "welcomer.bundleSuggestedS(1);");
      arrBundle.appendChild(arrowRight);

      const arrowLeft = document.createElement("i");
      arrowLeft.classList.add(
        "bi",
        "bi-arrow-left-circle-fill",
        "catascrollEchatTv"
      );
      arrowLeft.style.transform = "scale(0)";
      arrowLeft.setAttribute("data-onclick", "welcomer.bundleSuggestedS('2');");
      arrBundle.appendChild(arrowLeft);
      spj.appendChild(arrBundle);

      const buttonsDiv = document.createElement("div");
      buttonsDiv.id = "buttons";
      buttonsDiv.classList.add("box_shadow");
      buttonsDiv.setAttribute("onscroll", "welcomer.scrolj();");
      spj.appendChild(buttonsDiv);

      spjin.appendChild(spj);
      hhAnimStart.appendChild(spjin);
      aerElement.appendChild(hhAnimStart);
      //
      const div_clavs = document.createElement("div");
      div_clavs.id = "clavs";
      //
      document.body.appendChild(aerElement);
    },
    category_template: function () {
      const test = ["NASA"];
    },

    category_tempator_t: function (me) {
      document.querySelectorAll("div#clavs br_ta ta_f").forEach((el) => {
        el.classList.remove("active");
      });

      document.querySelectorAll("br_ta.sub_cat").forEach((element) => {
        element.remove();
      });
      this.category_tempator({
        me: me,
        where: "html.anim_djenerated div#clavs",
        data: ["projects"],
        name: me?.getAttribute("data-scn"),
        nest: true,
      });
    },
    category_tempator: function (
      d = { me: null, where: "", data: [], name: "", nest: false }
    ) {
      /**
       * ta_f.active.sub_category {
    style="
    border-bottom-left-radius: 0px;
    ;;;border-bottom-right-radius: 0px !important;;!i;;!;;
    ;;;padding-bottom: 11px !important;;!i;;!;;
    ;;;margin-bottom: -5px !important;;!i;;!;;
";
    border-bottom-left-radius: 0p;
    border-bottom-left-radius: 0px !important;!I;!;
}
       */
      const ttt_f = welcomer;

      if (
        d.me == null ||
        d.where == "undefined" ||
        d.where == null ||
        d.where == undefined ||
        d.where == ""
      ) {
        return;
      }

      d.me.classList.add("active");
      d.me.classList.add("sub_category");
      const br_ta = document.createElement("br_ta");
      if (d.nest) {
        br_ta.classList.add("sub_cat");
        br_ta.setAttribute("style", "opacity: 0;");
      }
      welcomer.uBoss({}, "", `/?p=blog&c=${d.me.getAttribute("data-scn")}`);
      var arrayrH = welcomer.remove_duplicates(d.data),
        active_scrf_2 = document.createElement("ta_f");
      active_scrf_2.setAttribute("data-title", `Click "All" for open category`);
      active_scrf_2.setAttribute("data-c", arrayrH.length);
      active_scrf_2.innerHTML = `All <span>${welcomer.blogljoad_posts_category_cbc(
        "All"
      )}</span>`;
      active_scrf_2.setAttribute("class", "active");
      active_scrf_2.setAttribute("data-category", "All");
      active_scrf_2.onclick = function () {
        document.querySelectorAll("div#clavs br_ta ta_f").forEach((el) => {
          el.classList.remove("active");
        });

        document.querySelectorAll("br_ta.sub_cat").forEach((element) => {
          element.remove();
        });
        welcomer.blogljoad_posts_category(
          active_scrf_2.getAttribute("data-category")
        );
        document
          .querySelectorAll("div#clavs br_ta ta_f:not([data-scn])")
          .forEach(function (r) {
            r.classList.remove("active");
          });
        active_scrf_2.classList.add("active");
        welcomer.uBoss({}, "", `/?p=blog`);
      };
      //$("div#clavs br_ta").append(active_scrf_2);
      if (d.nest == false) {
        br_ta.appendChild(active_scrf_2);
      }
      arrayrH.forEach(function (re) {
        const active_scrf = document.createElement("ta_f");
        active_scrf.setAttribute("data-c", arrayrH.length);
        active_scrf.setAttribute(
          "data-title",
          `Click "${ttt_f.capitalize_str(re)}" for open All category`
        );
        var t = "";
        if (re == "telegram" || re == "Telegram") {
          t = `<i class="bi bi-telegram"></i> `;
        } else if (re == "science" || re == "Science") {
        } else if (re == "Scifi" || re == "scifi") {
        } else if (re == "deviantart" || re == "Deviantart") {
          t = ` <i class="fab fa-deviantart"></i> `;
        } else if (re == "video" || re == "Video") {
          t = `<i class="bi bi-film"></i> `;
        } else if (re == "astronomy" || re == "Astronomy") {
          t = `<i class="fas fa-space-shuttle"></i> `;
        } else {
        }
        active_scrf.innerHTML = `${t}${re}<span>${welcomer.blogljoad_posts_category_cbc(
          re
        )}</span>`;
        active_scrf.setAttribute("data-category", re);
        active_scrf.onclick = function () {
          document
            .querySelectorAll("div#clavs br_ta ta_f")
            .forEach(function (r) {
              r.classList.remove("active");
            });
          welcomer.blogljoad_posts_category(
            active_scrf.getAttribute("data-category")
          );
          active_scrf.classList.add("active");

          if (
            active_scrf.getAttribute("data-category") !== "All" ||
            active_scrf.getAttribute("data-category") !== "all"
          ) {
            if (d.nest) {
              welcomer.uBoss(
                {},
                "",
                `/?p=blog&c=${d.me.getAttribute(
                  "data-scn"
                )}&sc=${active_scrf.getAttribute("data-category")}`
              );
            } else {
              welcomer.uBoss(
                {},
                "",
                `/?p=blog&c=${active_scrf.getAttribute("data-category")}`
              );
            }
            if (
              active_scrf.getAttribute("data-category") == "astronomy" ||
              active_scrf.getAttribute("data-category") == "Astronomy"
            ) {
              $("body").addClass("active");
            } else {
              $("body").removeAttr("active");
            }
            document
              .querySelector("body")
              .setAttribute(
                "data-category-name",
                active_scrf.getAttribute("data-category")
              );
            welcomer.titleC(
              `Blog > ${active_scrf.getAttribute(
                "data-category"
              )}- Marko Nikolić`
            );
          }
        };
        // $("div#clavs br_ta").append(active_scrf);
        br_ta.appendChild(active_scrf);
      });
      document.querySelectorAll(d.where).forEach(function (me) {
        me.prepend(br_ta);
      });
      setTimeout(() => br_ta.removeAttribute("style"), 100);
    },
    headers: {
      call: function () {},
      test: function () {
        this.top_headerv2("", [
          {
            icon: "bi bi-arrow-clockwise",
            function: "welcomer.reload_me(this);",
            title: "Reload",
            type: "action",
          },
          {
            icon: "bi bi-search F_bi_search",
            function: "welcomer.search_Kompjiler(this);",
            title: "Search project...",
            type: "action",
          },
          {
            icon: "bi bi-filetype-pdf pdf_download",
            function: "",
            title: "Download my CV as PDF",
            type: "info",
          },
          {
            icon: "bi bi-house pdf_page_home_btn",
            function: "welcomer.blogloader('all');",
            title: "Return to Blog home page",
            type: "action",
          },
          {
            icon: "bi bi-telegram tg_button",
            function: "welcomer.Social.tg.open();",
            title: "Telegram",
            type: "social",
          },
          {
            icon: "bi bi-share",
            function: "welcomer.share();",
            title: "Share",
            type: "action",
          },
          {
            icon: "bi bi-x-lg close_btnf",
            function: "welcomer.Hclose(this);",
            title: "Close",
            type: "action",
          },
        ]);
      },
      top_headerv2: function (
        d = { where: "", conf: { icon: "", controls: [] } }
      ) {
        const divHeader = document.createElement("div_header"),
          dvheader = document.createElement("div");
        dvheader.classList.add("dvheader");

        const img = document.createElement("img");
        img.src = "/svg_logo_backscr_img";
        img.id = "logo_backscr_img";
        img.alt = "Logo";
        /* - */
        dvheader.appendChild(img);
        divHeader.appendChild(dvheader);

        const controls = [
          {
            icon: "bi bi-arrow-clockwise",
            function: "welcomer.reload_me(this);",
            title: "Reload",
            type: "action",
          },
          {
            icon: "bi bi-search F_bi_search",
            function: "welcomer.search_Kompjiler(this);",
            title: "Search project...",
            type: "action",
          },
          {
            icon: "bi bi-filetype-pdf pdf_download",
            function: "",
            title: "Download my CV as PDF",
            type: "info",
          },
          {
            icon: "bi bi-house pdf_page_home_btn",
            function: "welcomer.blogloader('all');",
            title: "Return to Blog home page",
            type: "action",
          },
          {
            icon: "bi bi-telegram tg_button",
            function: "welcomer.Social.tg.open();",
            title: "Telegram",
            type: "social",
          },
          {
            icon: "bi bi-share",
            function: "welcomer.share();",
            title: "Share",
            type: "action",
          },
          {
            icon: "bi bi-x-lg close_btnf",
            function: "welcomer.Hclose(this);",
            title: "Close",
            type: "action",
          },
        ];

        const btnsR = document.createElement("btns_r");

        controls.forEach((control) => {
          const btn = document.createElement("i");
          btn.className = control.icon;
          btn.title = control.title;
          if (control.function)
            btn.setAttribute("data-onclick", control.function);
          btnsR.appendChild(btn);
        });

        divHeader.appendChild(btnsR);
        where.appendChild(divHeader);
      },
      top_header: function (where, options = []) {
        const divHeader = document.createElement("div");
        divHeader.className = "div_header";

        const img = document.createElement("img");
        img.src = "/svg_logo_backscr_img";
        img.id = "logo_backscr_img";
        img.alt = "Logo";
        divHeader.appendChild(img);

        const reloadIcon = document.createElement("i");
        reloadIcon.id = "reaload_page";
        reloadIcon.title = "Reload";
        reloadIcon.setAttribute("data-onclick", "welcomer.reload_me(this);");
        reloadIcon.className = "bi bi-arrow-clockwise";
        divHeader.appendChild(reloadIcon);

        const svgSpinner = document.createElement("svg");
        svgSpinner.className = "Vjideo_sjpinner";
        svgSpinner.setAttribute("viewBox", "0 0 50 50");

        const circle = document.createElement("circle");
        circle.className = "path";
        circle.setAttribute("cx", "25");
        circle.setAttribute("cy", "25");
        circle.setAttribute("r", "20");
        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke-width", "4");
        svgSpinner.appendChild(circle);

        divHeader.appendChild(svgSpinner);

        const loadingSpan = document.createElement("span");
        loadingSpan.textContent = "Loading ...";
        divHeader.appendChild(loadingSpan);

        const btnsI = document.createElement("btns_i");

        const searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "Search ...";
        searchInput.setAttribute("data-hmm", "search");
        searchInput.setAttribute("onkeyup", "welcomer.search_Kompjiler(this);");
        btnsI.appendChild(searchInput);

        const closeIcon = document.createElement("i");
        closeIcon.className = "bi bi-x-lg";
        closeIcon.setAttribute("data-hmm", "closeMe");
        closeIcon.setAttribute(
          "data-onclick",
          "welcomer.search_Kompjiler(this);"
        );
        closeIcon.title = "Close Search";
        btnsI.appendChild(closeIcon);

        divHeader.appendChild(btnsI);

        const btnsR = document.createElement("btns_r");

        const searchIcon = document.createElement("i");
        searchIcon.className = "bi bi-search F_bi_search";
        searchIcon.setAttribute("data-hmm", "true");
        searchIcon.setAttribute(
          "data-onclick",
          "welcomer.search_Kompjiler(this);"
        );
        searchIcon.title = "Search project...";
        btnsR.appendChild(searchIcon);

        const pdfIcon = document.createElement("i");
        pdfIcon.className = "bi bi-filetype-pdf pdf_download";
        pdfIcon.title = "Download my CV as PDF";
        btnsR.appendChild(pdfIcon);

        const homeIcon = document.createElement("i");
        homeIcon.className = "bi bi-house pdf_page_home_btn";
        homeIcon.setAttribute("data-onclick", "welcomer.blogloader('all');");
        homeIcon.title = "Return to Blog home page";
        btnsR.appendChild(homeIcon);

        const telegramIcon = document.createElement("i");
        telegramIcon.className = "bi bi-telegram tg_button";
        telegramIcon.setAttribute("data-onclick", "welcomer.Social.tg.open();");
        btnsR.appendChild(telegramIcon);

        const shareIcon = document.createElement("i");
        shareIcon.className = "bi bi-share";
        shareIcon.setAttribute("data-onclick", "welcomer.share();");
        shareIcon.title = "Share";
        btnsR.appendChild(shareIcon);

        const closeIconF = document.createElement("i");
        closeIconF.className = "bi bi-x-lg close_btnf";
        closeIconF.setAttribute("data-onclick", "welcomer.Hclose(this);");
        closeIconF.title = "Close";
        btnsR.appendChild(closeIconF);

        divHeader.appendChild(btnsR);
        home_element.appendChild(divHeader);
      },
    },
    reset: function () {
      try {
        /*
    / welcomer.template_home();
  
    //welcomer.template_call();
     document.body.innerHTML = `${welcomer.body_reset_form}`;

     
const parser = new DOMParser().parseFromString(welcomer.body_reset_form, "text/html");
document.querySelector("body").appendChild(parser.body);
*/

        document.body.innerHTML = `${welcomer.body_reset_form}`;
        // welcomer.pages.reset_body_aprs();

        if (window.videojs && videojs.log) {
          videojs.log.error = function () {};
          videojs.log.warn = function () {};
          videojs.log.debug = function () {};
          videojs.log.log = function () {};
          videojs.log.info = function () {};
        }

        // welcomer.template_home();
        /*
    const parser = new DOMParser().parseFromString(welcomer.body_reset_form, "text/html");
    document.body.appendChild(parser.body);
     */

        this.the_call();

        welcomer.get_events();

        document.querySelector("#clavs grider_viewer").removeAttribute("style");
        try {
          document
            .querySelector(".Ignoring_me_iframe.shadow_root")
            .classList.remove("open");
        } catch (aer) {}
        document.body.removeAttribute("data-url-id");
        document.body.removeAttribute("data-d");
        document.querySelector("div_header").removeAttribute("data-url");
        document
          .querySelector("div_header")
          .classList.remove("ld_completeld_complete2");
        document
          .querySelector("div_header")
          .classList.remove("ld_completeld_complete");
        document.documentElement.classList.remove("anim_djenerated");
        document
          .getElementById("clavs")
          .setAttribute("style", "opacity:0;pointer-events:none;");

        document
          .getElementById("clavs")
          .setAttribute(
            "style",
            "opacity:0;pointer-events:none; display:none;"
          );

        document.querySelectorAll("grider_viewer").forEach(function (v) {
          v.textContent = "";
        });
        const urlParams = new URLSearchParams(window.location.search);
        document.querySelector(".pdf_page_home_btn").style.display = "none";
        document.querySelector(".close_btnf").style.display = "none";
        document.querySelector("grider_viewer").classList.remove("g_gallery");
        document.querySelector("hh_anim_start").removeAttribute("style");

        document.querySelectorAll("*[data-onclick]").forEach((elem) => {
          elem.addEventListener("click", function (e) {
            e.preventDefault();
            const action = elem.getAttribute("data-onclick");
            welcomer.home_list(elem, action);
            return;
          });
        });
        document.addEventListener("keydown", (event) => {
          if (
            (event.ctrlKey && event.key === "s") ||
            (event.metaKey && event.key === "s")
          ) {
            event.preventDefault();
          }
        });
      } catch (aer) {
        // window.top.location.reload();
      }
      welcomer.bckrnd();
    },
    start_page: function (what = "") {
      var fjls = false;
      welcomer.yesurls.forEach(function (v) {
        if (v === what) {
          fjls = true;
        }
      });
      if (fjls) {
        welcomer.blg_history_replace(`/?p=${what}`);
        welcomer.start();
      } else {
        welcomer.blg_history_replace("/");
        welcomer.start();
      }
      return;
      switch (what) {
        case "home":
          welcomer.blg_history_replace("/");
          welcomer.start();
          break;
        case "gallery":
          welcomer.blg_history_replace("/?p=gallery");
          welcomer.start();
          break;
        case "search":
          // <p-search></p-search>
          const p_search = document.createElement("p-search");
          document.body.appendChild(p_search);
          break;
        case "blog":
          welcomer.blg_history_replace("/?p=blog");
          welcomer.start();
          break;
        case "projects":
          welcomer.blg_history_replace("/?p=gallery");
          welcomer.start();
          break;
        default:
          welcomer.blg_history_replace("/");
          welcomer.start();
          break;
      } // welcomer.load_page("start_page");
    },
    blog: {
      loader: function (c = { src: "", callback: () => {}, error: () => {} }) {
        if (document.querySelector("blog_post_loader")) {
          document.querySelector("blog_post_loader").remove();
        }
        const blogPostLoader = document.createElement("blog_post_loader");
        const loader = document.createElement("loader");
        const rotater = document.createElement("rotater");
        const img = document.createElement("img");
        img.setAttribute("style", "opacity:0;");

        if (typeof c.callback === "function") {
          try {
            c.callback();
          } catch (error) {}
        }
        img.src = c.src;

        welcomer.blob(`${c.src}`, async function (blob) {
          const imgElement = document.createElement("img");
          img.removeAttribute("style");
          img.src = blob;

          blogPostLoader.classList.add("active");
          setTimeout(() => {
            blogPostLoader.style.setProperty("opacity", "0");
            blogPostLoader.style.setProperty("pointer-events", "none");
            blogPostLoader.remove();
          }, 1000);
        });

        loader.appendChild(rotater);
        loader.appendChild(img);
        blogPostLoader.appendChild(loader);

        document.body.appendChild(blogPostLoader);
      },
    },
    gallery: {
      ldp: function (id) {
        var url = window.portfolio.data.gallery.gallery[0].gallery[0]["href"],
          a = document.createElement("a");
        a.target = "_blank";
        a.href = url;
        a.setAttribute("rel", "nofollow noreferrer");
        a.setAttribute("role", "link");
        window.open(url);
        if (!url == "-") {
        }
        if (!url == "-") {
        }
      },
      ldaff: function () {},
      t: function () {
        this.call_albums({
          where: "grider_viewer#gallery-container",
          arr: window.portfolio.data.gallery.gallery,
          callback: function (e) {},
          type: "albums",
        });
        welcomer.get_events();
      },
      lda: function (what = "") {
        welcomer.blg_history_replace(
          `${window.location.origin}/?p=gallery&album=${what}`
        );
        var aerls = window.portfolio.data.gallery.gallery;
        for (var i = 0; i < aerls.length; i++) {
          if (`${what}` == `${aerls[i]["name"]}`) {
            welcomer.load_gallery_j = aerls[i]["gallery"];
            this.call_albums({
              where: "grider_viewer#gallery-container",
              arr: aerls[i]["gallery"],
              callback: function (e) {},
              type: "gallery",
            });
            welcomer.get_events();
          }
        }
      },
      galleryloadajaxv2: function (name = "") {
        let div_not_i = 0;
        const gallery = [];
        const gridderLoader = document.querySelector("#gridder_loader");
        if (gridderLoader) gridderLoader.style.opacity = 1;
        const v = welcomer.load_gallery_j;
        const galleryContainer = document.querySelector("#gallery-container");
        if (!galleryContainer) return;
        for (let i = 0; i < v.length; i++) {
          const project = document.createElement("project");
          project.style.transform = "scale(0)";
          const griderBox = document.createElement("grider_box");
          const p = document.createElement("p");
          const span = document.createElement("span");
          span.textContent = v[i].title;
          p.appendChild(span);
          griderBox.appendChild(p);
          let p_open;
          if (v[i].href !== "") {
            p_open = document.createElement("p_open");
            if (v[i].type) {
              p_open.title = `Open:${v[i].href}`;
              p_open.addEventListener("click", () =>
                welcomer.openWindow(div_not_i)
              );
              const linkIcon = document.createElement("i");
              linkIcon.className = "bi bi-link";
              const linkText = document.createTextNode(" Open link");
              p_open.appendChild(linkIcon);
              p_open.appendChild(linkText);
            } else {
              p_open.title = `Download:${v[i].title}`;
              p_open.addEventListener("click", () =>
                welcomer.openWindow(div_not_i)
              );
              const downloadIcon = document.createElement("i");
              downloadIcon.className = "bi bi-cloud-arrow-down";
              const downloadText = document.createTextNode(" Download");
              const br = document.createElement("br");
              const shieldIcon = document.createElement("i");
              shieldIcon.className = "bi bi-shield-check";
              const shieldText = document.createTextNode(" (Secure download)");
              p_open.appendChild(downloadIcon);
              p_open.appendChild(downloadText);
              p_open.appendChild(br);
              p_open.appendChild(shieldIcon);
              p_open.appendChild(shieldText);
            }
            griderBox.appendChild(p_open);
          }
          const fiv = document.createElement("fiv");
          const icon = document.createElement("i");
          const title = document.createElement("fiv_title");
          icon.className = "bi bi-fullscreen";
          icon.title = "Preview image in full size";
          icon.addEventListener("click", (e) => {
            e.preventDefault();
            welcomer.infoVa(div_not_i);
          });
          fiv.appendChild(icon);
          griderBox.appendChild(fiv);
          title.textContent = v[i].title;
          griderBox.appendChild(title);
          const img = document.createElement("img");
          img.setAttribute("loading", "lazy");
          img.setAttribute("src", v[i].img);
          img.setAttribute("data-zoom-image", v[i].img);
          img.setAttribute("data-real-zoom-image", v[i].img);
          img.setAttribute("alt", v[i].title);
          img.addEventListener("dragstart", (event) => event.preventDefault());
          img.addEventListener("error", () =>
            welcomer.loaded_imgPrld_error(img, div_not_i)
          );
          img.addEventListener("load", () =>
            welcomer.loaded_imgPrld(img, div_not_i)
          );
          griderBox.appendChild(img);
          project.appendChild(griderBox);
          galleryContainer.appendChild(project);
          div_not_i++;
        }
      },
      transalte_top: function (element) {
        let y = 0;
        if (element) {
          const interval = setInterval(() => {
            y += 5;
            element.style.transform = `translateY(${y}px)`;
            if (y > 100) clearInterval(interval);
          }, 50);
        }
      },
      call_video_gallery_Preview: function (url = "aer", poster = "") {
        const data_ai_type = document.querySelector("video-player");
        const gallery_section = document.querySelector(
          "section[data-ui-type='gallery']"
        );
        data_ai_type.setAttribute("id", "video_preview");
        document
          .querySelector("video-player")
          .setAttribute("data-active", "true");
        document.querySelector("video-player").updateVideoSrc(url, poster);
        if (data_ai_type) {
          data_ai_type.style.opacity = "1";
          data_ai_type.style.transform = "unset";
          data_ai_type.style.setProperty("transform", "unset", "important");
        }
      },
      call_back: function () {
        if (
          document.querySelector("video-player").hasAttribute("data-active")
        ) {
          document.querySelector("video-player").removeAttribute("style");
          document.querySelector("video-player").removeAttribute("data-active");

          return false;
        } else {
          document
            .querySelector(
              'div#clavs.gallery_mode section[data-ui-type="gallery"] i.bi.bi-arrow-left-short.editor_btns.undo'
            )
            .classList.remove("active");
          this.call();
          welcomer.uBoss({}, "", `${window.location.origin}/?p=gallery`);
        }
      },
      call_albums(
        varr = { where: "", arr: [], callback: function () {} },
        type = "albums"
      ) {
        const arr = varr.arr;
        let div_not_i = 0;
        const live = ["deviantart"];
        const element = document.querySelector(varr.where);
        if (element) {
          element.textContent = "";
        }
        if (varr.type == "albums") {
          element.setAttribute("class", "gridsH grids ");
        } else {
          element.setAttribute("class", "gridsH grids g_gallery ");
          document
            .querySelector(
              'div#clavs.gallery_mode section[data-ui-type="gallery"] i.bi.bi-arrow-left-short.editor_btns.undo'
            )
            .classList.add("active");
        }
        if (varr.type == "albums") {
          for (let i = 0; i < arr.length; i++) {
            const project = document.createElement("project");

            project.setAttribute("id-int", i);
            const p_open = document.createElement("p_open");
            p_open.setAttribute("data-title", "Open Album");
            p_open.setAttribute(
              "onclick",
              `welcomer.pages.gallery.lda('${arr[i]["name"]}')`
            );
            const p_open_icon = document.createElement("i");
            p_open_icon.classList.add("bi", "bi-link");
            p_open.appendChild(p_open_icon);
            p_open.appendChild(document.createTextNode(" Open Album"));
            const name = arr[i]["name"];
            const image = `${arr[i]["gallery"][0]["img"]}&album=${arr[i]["name"]}&v=${i}`;
            let is_live = null;
            if (arr[i]["live"] == "T") {
              is_live = document.createElement("span_live");
              const btn_l = document.createElement("btn_l");
              const btn_l_icon = document.createElement("i");
              btn_l_icon.classList.add("bi", "bi-broadcast-pin");
              btn_l.appendChild(btn_l_icon);
              btn_l.appendChild(document.createTextNode(" Live Feed"));
              is_live.appendChild(btn_l);
            }
            const grider_box = document.createElement("grider_box");
            const p = document.createElement("p");
            const p_span = document.createElement("span");
            p_span.textContent = `Album - ${arr[i]["gallery"].length}`;
            p.appendChild(p_span);
            grider_box.appendChild(p);
            grider_box.appendChild(p_open);
            if (arr[i]["live"] == "T") grider_box.appendChild(is_live);
            const fiv = document.createElement("fiv");
            const fiv_icon = document.createElement("i");
            fiv_icon.classList.add("bi", "bi-info-circle");
            // fiv_icon.setAttribute("onclick", `welcomer.blogloader(${i});`);
            fiv_icon.addEventListener("click", function (e) {
              e.preventDefault();
              welcomer.blogloader(`${i}`);
            });
            fiv_icon.setAttribute("title", "Go to Album");
            fiv.appendChild(fiv_icon);
            grider_box.appendChild(fiv);
            const sp_clv = document.createElement("sp_clv");
            const sp_clv_icon = document.createElement("i");
            sp_clv_icon.classList.add(
              "bi",
              arr[i]["name"] == "video" ? "bi-film" : "bi-images"
            );
            sp_clv.appendChild(sp_clv_icon);
            const p_title = document.createElement("p-title");
            p_title.textContent = name;
            sp_clv.appendChild(p_title);
            grider_box.appendChild(sp_clv);
            project.appendChild(grider_box);
            document.querySelector(varr.where).appendChild(project);
            if (arr[i]["live"] == "T") grider_box.appendChild(is_live);
            if (
              arr[i]["gallery"][0]["type"] == "video" ||
              arr[i]["gallery"][0]["type"] == "video_post"
            ) {
              const video = document.createElement("video");
              video.setAttribute("autoplay", "");
              video.setAttribute("muted", "");
              video.setAttribute("playsinline", "");
              video.setAttribute("loop", "");
              video.setAttribute("style", "pointer-events:none;");
              video.setAttribute(
                "onloadedmetadata",
                `welcomer.loaded_img(this,${i});`
              );
              video.setAttribute("src", arr[i]["gallery"][0]["thumb"]);
              grider_box.appendChild(video);
            }
            const img = document.createElement("img");
            img.setAttribute("loading", "lazy");
            img.setAttribute("ondragstart", "return false;");
            img.setAttribute("onload", `welcomer.loaded_img(this,${i});`);
            if (arr[i]["name"] == "home") {
              img.setAttribute(
                "src",
                `${window.portfolio.host}/app&id=A03429468246&mnps=gallery&img=${name}&icon=${name}&c=v2`
              );
              img.setAttribute(
                "data-zoom-image",
                `${window.portfolio.host}/app&id=A03429468246&mnps=gallery&img=${name}&icon=${name}&c=v2`
              );
            } else {
              img.setAttribute("src", arr[i]["gallery"][0]["thumb"]);
              img.setAttribute(
                "data-zoom-image",
                arr[i]["gallery"][0]["thumb"]
              );
            }
            img.setAttribute("alt", name);
            grider_box.appendChild(img);
            project.appendChild(grider_box);
            document.querySelector(varr.where).appendChild(project);
          }
        }
        if (varr.type == "gallery") {
          const v = arr;
          for (let i = 0; i < v.length; i++) {
            const project = document.createElement("project");
            project.setAttribute("style", "transform:scale(0) !important;");
            project.setAttribute("id-int", `${div_not_i}`);
            project.setAttribute("box-ui", `uit-${varr.type}`);
            project.setAttribute("id-img", `uit-${v[i]["ID"]}`);
            const grider_box = document.createElement("grider_box");
            let thi = "class='is_touch'";
            if (welcomer.isMobile()) {
              thi = `onclick="welcomer.openLink(${div_not_i})"`;
            }
            const fiv = document.createElement("fiv");
            const title = document.createElement("fiv_title");
            title.textContent = v[i].title;

            const i_click = document.createElement("i");
            i_click.setAttribute("data-i-type", `${v[i].type}`);
            i_click.setAttribute("class", "bi bi-fullscreen");
            i_click.setAttribute("title", "Preview image in full size");
            i_click.addEventListener("click", function () {
              welcomer.infoVa(i);
            });
            fiv.appendChild(i_click);
            //  fiv.innerHTML = `<i onclick="welcomer.infoVa(${div_not_i});" data-i-type="${v[i].type}" class="bi bi-fullscreen" title="Preview image in full size"></i>`;
            grider_box.appendChild(fiv);
            grider_box.appendChild(title);
            const img = document.createElement("img");
            img.setAttribute("loading", "lazy");
            img.setAttribute("ondragstart", "return false;");
            img.setAttribute(
              "onerror",
              `welcomer.loaded_imgPrld_error(this,${div_not_i});`
            );
            img.setAttribute(
              "onload",
              `welcomer.loaded_imgPrldV2(this,${div_not_i});`
            );
            img.setAttribute("src", v[i].thumb);
            img.setAttribute("data-zoom-image", v[i].img);
            img.setAttribute("data-real-zoom-if_video", v[i].thumb);
            img.setAttribute("data-real-zoom-image", v[i].img);
            img.setAttribute("alt", v[i].title);
            grider_box.appendChild(img);
            if (v[i].href != "-") {
              const a_project = document.createElement("a");
              a_project.setAttribute("class", "fiv_d");

              a_project.setAttribute(
                "title",
                `${v[i]?.fid?.text}:${v[i]?.title}`
              );

              a_project.setAttribute("href", v[i]["href"]);
              a_project.setAttribute("target", "_blank");
              a_project.setAttribute("data-int", `${div_not_i}`);
              // a_project
              const a_project_i = document.createElement("i"),
                a_project_i_text = document.createTextNode(
                  ` ${v[i]?.fid?.text}`
                );
              /*
              a_project_i.addEventListener("click", function(e){
                welcomer.infoVa(1);
              });*/
              a_project_i.setAttribute("class", `${v[i]?.fid?.icon}`);
              a_project.appendChild(a_project_i);
              a_project.appendChild(a_project_i_text);
              /*/ a_project

              a_project.innerHTML = `<i onclick="welcomer.infoVa(1);" class="${v[i]?.fid?.icon}"></i> ${v[i]?.fid?.text}`;
             */
              // a_project
              grider_box.appendChild(a_project);
            }
            project.appendChild(grider_box);
            document
              .querySelector("grider_viewer#gallery-container")
              .appendChild(project);
            div_not_i++;
          }
        }

        varr?.callback({ l: arr.length, r: arr });
      },
      call_albumsV2: function (
        varr = { where: "", arr: [], callback: function () {} },
        type = "albums"
      ) {
        var arr = varr.arr;
        var div_not_i = 0;
        var live = ["deviantart"];
        const element = document.querySelector(varr.where);
        if (element) {
          element.textContent = "";
        }
        if (varr.type == "albums") {
          document
            .querySelector(varr.where)
            .setAttribute("class", "gridsH grids ");
        } else {
          document
            .querySelector(varr.where)
            .setAttribute("class", "gridsH grids g_gallery ");
          document
            .querySelector(
              'div#clavs.gallery_mode section[data-ui-type="gallery"] i.bi.bi-arrow-left-short.editor_btns.undo'
            )
            .classList.add("active");
        }
        if (varr.type == "albums") {
          for (var i = 0; i < arr.length; i++) {
            var p_open = "";
            var project = document.createElement("project");
            p_open = `<p_open data-title="Open Album" onclick="welcomer.pages.gallery.lda('${arr[i]["name"]}')"> <i class="bi bi-link"></i> Open Album </p_open>`;
            var name = arr[i]["name"];
            var image = `${arr[i]["gallery"][0]["img"]}&album=${arr[i]["name"]}&v=${i}`;
            project.setAttribute("id-int", i);
            var is_live = "";
            if (arr[i]["name"] == "deviantart") {
              is_live =
                "<span_live><btn_l><i class='bi bi-broadcast-pin'></i> Live Feed</btn_l></span_live>";
            }
            if (arr[i]["name"] == "video") {
              project.innerHTML = ` <grider_box> <p><span>Album - ${arr[i]["gallery"].length}</span></p> ${p_open}${is_live}<fiv><i onclick="welcomer.blogloader(${i});" class="bi bi-info-circle" title="Go to Album"></i></fiv> <sp_clv><i class="bi bi-film"></i><p-title>${name}</p-title></sp_clv> ${is_live}<video autoplay muted playsinline loop style="pointer-events:none;" onloadedmetadata="welcomer.loaded_img(this,${i});" src="${arr[i]["gallery"][0]["thumb"]}"></video> <img loading="lazy" ondragstart="return false;" onload="welcomer.loaded_img(this,${i});" src="${arr[i]["gallery"][0]["thumb"]}" data-zoom-image="${arr[i]["gallery"][0]["thumb"]}" alt="${name}" /> </grider_box> `;
            } else if (arr[i]["name"] == "home") {
              project.innerHTML = ` <grider_box> <p><span>Album - ${arr[i]["gallery"].length}</span></p> ${p_open}${is_live}<fiv><i onclick="welcomer.blogloader(${i});" class="bi bi-info-circle" title="Go to Album"></i></fiv> <sp_clv><i class="bi bi-images"></i><p-title>${name}</p-title></sp_clv> ${is_live}<img loading="lazy" ondragstart="return false;" onload="welcomer.loaded_img(this,${i});" src="${window.portfolio.host}/app&id=A03429468246&mnps=gallery&img=${name}&icon=${name}&c=v2" data-zoom-image="${window.portfolio.host}/app&id=A03429468246&mnps=gallery&img=${name}&icon=${name}&c=v2" alt="${name}" /> </grider_box> `;
            } else {
              project.innerHTML = ` <grider_box> <p><span>Album - ${arr[i]["gallery"].length}</span></p> ${p_open}${is_live}<fiv><i onclick="welcomer.blogloader(${i});" class="bi bi-info-circle" title="Go to Album"></i></fiv> <sp_clv><i class="bi bi-images"></i><p-title>${name}</p-title></sp_clv> ${is_live}<img loading="lazy" ondragstart="return false;" onload="welcomer.loaded_img(this,${i});" src="${arr[i]["gallery"][0]["thumb"]}" data-zoom-image="${window.portfolio.host}/app&id=A03429468246&mnps=gallery&img=${name}&icon=${name}&c=v2" alt="${name}" /> </grider_box> `;
            }
            document.querySelector(varr.where).appendChild(project);
          }
        }
        if (varr.type == "gallery") {
          var v = arr;
          for (var i = 0; i < v.length; i++) {
            var thi = "class='is_touch'";
            var p_open = "";
            var project = document.createElement("project");
            if (welcomer.isMobile()) {
              thi = `onclick="welcomer.openLink(${div_not_i})"`;
            }
            project.setAttribute("style", "transform:scale(0) !important;");
            project.setAttribute("id-int", `${div_not_i}`);
            project.setAttribute("box-ui", `uit-${varr.type}`);
            var a_project = "";
            if (v[i].href != "-") {
              a_project = `<a class="fiv_d" title="Open on Deviantart:${v[i].title}" href="${v[i]["href"]}" target="_blank" data-int="${div_not_i}"> <i onclick="welcomer.infoVa(1);" class="${v[i]["fid"]["icon"]}"></i> ${v[i]["fid"]["text"]}</a>`;
            }
            project.innerHTML = ` <grider_box> ${p_open}${a_project}<fiv><i onclick="welcomer.infoVa(${div_not_i});" data-i-type="${v[i].type}" class="bi bi-fullscreen" title="Preview image in full size"></i></fiv> <img loading="lazy" ${thi}ondragstart="return false;" onerror="welcomer.loaded_imgPrld_error(this,${div_not_i});" onload="welcomer.loaded_imgPrldV2(this,${div_not_i});" src="${v[i].thumb}" data-zoom-image="${v[i].img}" data-real-zoom-if_video="${v[i].thumb}" data-real-zoom-image="${v[i].img}" alt="${v[i].title}" /> </grider_box> `;
            document
              .querySelector("grider_viewer#gallery-container")
              .appendChild(project);
            div_not_i++;
          }
        }
        varr?.callback({ l: arr.length, r: arr });
      },
      callv2: function () {
        window.top.location.href = "/?p=gallery";
        return false;
      },
      call: function () {
        if (
          document.querySelectorAll(
            "div#clavs.gallery_mode section[data-ui-type='gallery']:not(.hidden_omega)"
          ).length < 1
        ) {
          const data_ui_type = document.querySelector(
              'section[data-ui-type="gallery"]'
            ),
            hmdata_ = document.querySelector('section[data-ui-type="gallery"]'),
            editor_container = document.createElement("grider_viewer"),
            resizer = document.createElement("div"),
            size_r = document.createElement("size_r"),
            div_resizer = document.createElement("div-sh"),
            divf_ = document.createElement("divf_"),
            logContainer = document.createElement("div"),
            iframe = document.createElement("iframe"),
            grider_viewer = document.createElement("grider_viewer"),
            buttons = {
              history: "",
              undo: document.querySelector(
                "section[data-ui-type='gallery'] i.editor_btns.undo"
              ),
              redo: document.querySelector(
                "section[data-ui-type='gallery'] i.editor_btns.redo"
              ),
            };
          editor_container.setAttribute("class", "gridsH grids g_gallery ");
          logContainer.id = "logContainer";
          editor_container.textContent = "";
          if (data_ui_type) {
            const galleryContainer =
              data_ui_type.querySelector("#gallery-container");
            if (galleryContainer) {
              galleryContainer.remove();
            }
            const iframes = data_ui_type.querySelectorAll("iframe");
            if (iframes) {
              iframes.forEach((iframe) => iframe.remove());
            }
          }
          editor_container.id = "gallery-container";
          iframe.id = "preview-container";
          resizer.id = "resizer-container";
          iframe.sandbox = "allow-same-origin allow-scripts";
          size_r.setAttribute("style", "display:none;");
          if (data_ui_type) {
            data_ui_type.appendChild(editor_container);
          }
          logContainer.classList.remove("hidden_omega");
          var jsonfs31 = [];
          document.querySelectorAll("iframe").forEach((element) => {
            element.setAttribute("style", "display:none;");
          });
          hmdata_?.removeAttribute("class");
          document
            ?.querySelector("div#clavs")
            ?.setAttribute(
              "style",
              "transform:none !important;opacity:1;rgb( 0 0 0 / 0.6) !important"
            );
          document
            ?.querySelector("div#clavs")
            ?.setAttribute("class", "gallery_mode");
          document
            ?.querySelector("hh_anim_start")
            ?.setAttribute("style", "display:none;");
          document
            ?.querySelector("p.p-c")
            ?.setAttribute("style", "display:none;");
          document
            ?.querySelector("div#clavs div_header:not([data-url])")
            ?.setAttribute("style", "display:none !important;");
          const urlParamsG = new URLSearchParams(window.location.search);
          if (urlParamsG.has("album")) {
            if (urlParamsG.has("id")) {
              const fid_id = urlParamsG.get("id");
              welcomer.pages.gallery.lda(urlParamsG.get("album"));
              setTimeout(() => {
                welcomer.callGalleryBID(fid_id);
              }, 1000);
            } else {
              welcomer.pages.gallery.lda(urlParamsG.get("album"));
            }
          }
        }
        this.t();
      },
    },
  },
  trcars: {
    dragstart: function (e) {
      e.preventDefault();
      dragging = true;
      var main = document.querySelector("iframe#preview-container");
    },
    dragmove: function (e) {
      if (dragging) {
        document.getElementById("shield").style.display = "block";
        if (stack != " horizontal") {
          var percentage = (e.pageX / window.innerWidth) * 100;
          if (percentage > 5 && percentage < 98) {
            var mainPercentage = 100 - percentage;
            document.getElementById("textareacontainer").style.width =
              percentage + "%";
            document.getElementById("iframecontainer").style.width =
              mainPercentage + "%";
            fixDragBtn();
          }
        } else {
          var containertop = Number(
            w3_getStyleValue(
              document.getElementById("container"),
              "top"
            ).replace("px", "")
          );
          var percentage =
            ((e.pageY - containertop + 20) /
              (window.innerHeight - containertop + 20)) *
            100;
          if (percentage > 5 && percentage < 98) {
            var mainPercentage = 100 - percentage;
            document.getElementById("textareacontainer").style.height =
              percentage + "%";
            document.getElementById("iframecontainer").style.height =
              mainPercentage + "%";
            fixDragBtn();
          }
        }
        showFrameSize();
      }
    },
    dragend: function () {
      document.getElementById("shield").style.display = "none";
      dragging = false;
      var vend = navigator.vendor;
      if (window.editor && vend.indexOf("Apple") == -1) {
        window.editor.refresh();
      }
    },
  },
  trcp_s: function (t = 0) {
    if (t == 0) {
      window.draggable.enabled = false;
      if (editorWrapper) {
        editorWrapper.classList.remove("active_f");
      }
    }
    if (t == 1) {
      if (window.draggable.enabled) {
        welcomer.trcp(parseInt(window.draggable.style_left));
      }
    }
    if (t == 2) {
      window.draggable.enabled = true;
    }
  },
  trcp: function (left_fH = 0) {
    return;
    console.log(left_fH);
    const editorWrapper2 = document.querySelector("editor-wrapper");
    const editorContainer = document.querySelector("div#editor-container");
    const editorSection = document.querySelector(
      'section[data-ui-type="editor"]'
    );
    const previewContainer = editorSection
      ? editorSection.querySelector("iframe#preview-container")
      : null;
    const resizerContainer = editorSection
      ? editorSection.querySelector("div#resizer-container")
      : null;
    const sizeR = document.querySelector("size_r");
    const logContainer = document.querySelector("div#logContainer");
    if (
      editorWrapper2 &&
      editorContainer &&
      editorSection &&
      previewContainer &&
      resizerContainer &&
      sizeR &&
      logContainer
    ) {
      let left_fH = editorContainer.offsetWidth;
      if (
        left_fH < editorWrapper2.offsetWidth - 50 ||
        editorContainer.offsetWidth < 100
      ) {
        let left_f = left_fH - 4;
        editorWrapper2.classList.add("active_f");
        editorSection
          .querySelector("#editor-container")
          .style.setProperty("width", `${left_f}px`, "important");
        previewContainer.style.setProperty(
          "width",
          `${editorSection.offsetWidth - left_f}px`,
          "important"
        );
        resizerContainer.style.setProperty("left", `${left_f}px`, "important");
        resizerContainer.classList.add("active");
        sizeR.style.display = "block";
        sizeR.textContent = "";
        const rulerIcon = document.createElement("i");
        rulerIcon.className = "bi bi-rulers";
        const textNode = document.createTextNode(
          ` ${previewContainer.offsetWidth}px x ${previewContainer.offsetHeight}px`
        );
        sizeR.appendChild(rulerIcon);
        sizeR.appendChild(textNode);
        logContainer.style.width = `${previewContainer.offsetWidth}px`;
      }
    }
    welcomer.editor.edtr.layout();
  },
  lang: function () {
    var lang = "en";
    var arr = "";
    this.langs.forEach((element) => {
      if (element.name == lang) {
        arr = element.data;
      }
    });
    return arr;
  },
  $: {},
  f: "$",
  gallery_temp: [],
  zoomElement: function(elm){
    const ImagePreview_src = document.createElement("image-preview");
    ImagePreview_src.srcDiv(elm);
    document.body.appendChild(ImagePreview_src);
  },
  infoVa_img: function (event) {
    if (welcomer.gallery_temp.length > 0) {
      welcomer.eronelit_gallery.call_ui(welcomer.gallery_temp);
    } else {
      var clickedElement = event.target || event;
      const ImagePreview_src = document.createElement("image-preview");
      ImagePreview_src.src(clickedElement.getAttribute("src"));
      document.body.appendChild(ImagePreview_src);
    }
  },
  constructor: function () {
    this.isMobile();
    if (document.querySelector(".Ignoring_me_iframe")) {
      document.querySelector(".Ignoring_me_iframe").onload = function () {
        welcomer.pgloader("yes");
      };
    }
    if (document.querySelector(".Ignoring_me_iframe")) {
      document.querySelector(".Ignoring_me_iframe").onmousemove = function () {
        welcomer.cursor_hide(this);
      };
    }
    if (document.querySelector(".Ignoring_me_iframe")) {
      document.querySelector(".Ignoring_me_iframe").onmouseout = function () {
        welcomer.cursor_hide(this);
      };
    }
    this.custom_evjents();
    if (document.querySelector(".wallpaperVideo")) {
      document
        .querySelector(".wallpaperVideo")
        .addEventListener("ended", function (v) {
          try {
            v.play();
          } catch (v) {}
        });
    }
    var styleClass = document.createElement("style");
    styleClass.setAttribute("type", "text/css");
    styleClass.setAttribute("data-what", "generated");
    styleClass.setAttribute("nonce", window.stmp);
    styleClass.textContent = "";
    document.querySelectorAll("style").forEach(function (v) {
      styleClass.innerHTML += v.innerHTML;
      v.remove();
    });
    document.head.appendChild(styleClass);
  },
  loop_active: true,
  Dots_color: 196,
  isChrome:
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
  energyAnim: true,
  domain: "/?mnps=dbe&q=",
  div_not_i: 0,
  spolr: ["cv-pdf", "visitcard"],
  yesurls: ["blog", "cv-pdf", "tg_channel", "gallery", "projects", "visitcard"],
  projectsc: function () {
    window.top.location.href = "/?p=projects";
  },
  cards_links: [],
  gallery_delegator: function (dlg = "a") {},
  cp: function () {
    $("iframe.iframe_mask").removeAttr("style");
    const form = $(".contanct_frm form");
    const df = document.querySelector(".contanct_frm"),
      f1 = Math.floor(Math.random() * 10),
      f2 = Math.floor(Math.random() * 10);
    if (df.classList.contains("yes")) {
      df.classList.remove("yes");
    }
    if (df.classList.contains("open")) {
      document.body.classList.remove("open_f");
      df.classList.remove("open");
      this.rnd = 0;
    } else {
      this.send_again();
      if (document.body.offsetWidth < 700) {
        welcomer.bell_out("");
        document.body.classList.add("open_f");
      }
      document
        .querySelector(".contanct_frm #norobot")
        .setAttribute("placeholder", `${f1}+ ${f2}= ? - Type and hit enter.`);
      document.querySelector(".contanct_frm #norobot").value = "";
      this.rnd = f1 + f2;
      df.classList.add("open");
    }
    document
      .querySelector(".contanct_frm #norobot")
      .addEventListener("keyup", function () {
        if (
          parseInt(document.querySelector(".contanct_frm #norobot").value) ==
          welcomer.rnd
        ) {
          $(".contanct_frm form").scrollTop($(".contanct_frm form").height());
          df.classList.add("yes");
        } else {
          if (df.classList.contains("yes")) {
            df.classList.remove("yes");
          }
        }
      });
  },
  validateEmail: function (email) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  },
  is_empty: false,
  norobot: function () {
    var f = false;
    if (parseInt(document.getElementById("norobot").value) == this.rnd) {
      f = true;
    }
    return f;
  },
  checkisempty: function () {
    try {
      var is_empty = false;
      if (document.querySelector(".contanct_frm #fname").value.length > 0) {
        is_empty = true;
      } else {
        is_empty = false;
      }
      if (document.querySelector(".contanct_frm #lname").value.length > 0) {
        if (
          this.validateEmail(
            document.querySelector(".contanct_frm #lname").value
          )
        ) {
          is_empty = true;
        } else {
          is_empty = false;
        }
      } else {
        is_empty = false;
      }
      if (document.querySelector(".contanct_frm textarea").value.length > 0) {
        is_empty = true;
      } else {
        is_empty = false;
      }
      if (
        this.validateEmail(document.querySelector(".contanct_frm #lname").value)
      ) {
        if (this.norobot()) {
          if (is_empty) {
            document.querySelector(".contanct_frm").classList.add("cants");
          } else {
            document.querySelector(".contanct_frm").classList.remove("cants");
          }
        } else {
          document.querySelector(".contanct_frm").classList.remove("cants");
        }
      } else {
        document.querySelector(".contanct_frm").classList.remove("cants");
      }
      this.is_empty = is_empty;
    } catch (v) {}
  },
  send_again: function () {
    const df = document.querySelector(".contanct_frm"),
      f1 = Math.floor(Math.random() * 10),
      f2 = Math.floor(Math.random() * 10);
    document
      .querySelector(".contanct_frm #norobot")
      .setAttribute("placeholder", `${f1}+ ${f2}= ? - Type and hit enter.`);
    document.querySelector(".contanct_frm #norobot").value = "";
    this.rnd = f1 + f2;
    document.querySelector(".contanct_frm #fname").value = "";
    document.querySelector(".contanct_frm #lname").value = "";
    document.querySelector(".contanct_frm textarea").value = "";
    document.querySelector(".contanct_frm #norobot").value = "";
    document.querySelector(".contanct_frm").classList.remove("cants");
    document.querySelector(".contanct_frm form").classList.remove("send_yes");
  },
  send_email_c: function () {
    var contanct_frm = document.querySelector(".contanct_frm "),
      fld_form = document.querySelector(".contanct_frm form"),
      fld_name = document.querySelector(".contanct_frm #fname").value,
      fld_email = document.querySelector(".contanct_frm #lname").value,
      fld_msg = document.querySelector(".contanct_frm textarea").value,
      restm = document.querySelector(".contanct_frm form p.msg"),
      xhr = new XMLHttpRequest(),
      data = new FormData();
    data.append("fn", window.btoa(fld_name));
    data.append("fe", window.btoa(fld_email));
    data.append("fm", window.btoa(fld_msg));
    xhr.open("POST", "/?mnps=contacts", true);
    xhr.onload = function () {
      const res = this.responseText;
      var rest = "";
      document.querySelector(".contanct_frm").classList.remove("cants");
      if (res == "yes") {
        const df = document.querySelector(".contanct_frm");
        if (df.classList.contains("yes")) {
          df.classList.remove("yes");
        }
        rest =
          '<i class="bi bi-emoji-laughing"></i><br>Thank you for contacting me!<br class="no_hide">If you send again? <span onclick="welcomer.send_again();">Click here</span>.';
      } else {
        rest =
          '<i class="bi bi-emoji-frown-fill"></i><br>Email is not sendet. Failed...<br> Try again? <span onclick="welcomer.send_email_c();">Click here</span>.';
      }
      restm.innerHTML = rest;
      fld_form.classList.add("send_yes");
    };
    xhr.send(data);
  },
  clock: {
    S_etInterval: async function (callback, interval) {
      while (true) {
        callback();
        await delay(interval);
      }
    },
    S_etTimeout: async function (callback, delay) {
      const start = performance.now();
      function checkTime() {
        if (performance.now() - start >= delay) {
          callback();
        } else {
          requestAnimationFrame(checkTime);
        }
      }
      requestAnimationFrame(checkTime);
    },
  },
  rnd: 0,
  pdf: async function () {
    const H = URL.createObjectURL(
        await fetch("/?mnps=pdf-d-cv").then(function (v) {
          return v.blob();
        })
      ),
      a = document.createElement("a");
    a.href = H;
    a.download = "pdf-cv.pdf";
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(H);
    }, 1000);
  },
  url_preview_card: {
    t: function () {
      var url =
        "https://www.deviantart.com/marko9827/art/What-is-it-really-Life-Tree-or-only-word-Hmm-1059236454";
      welcomer.url_preview_card.formv(url, { shared: url });
    },
    formv: async function (data) {
      var data = { shared: data };
      var response = await fetch("/?svc=share_api", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    },
    card: function (parent, url) {
      var br_aer = document.createElement("br_aer"),
        baer = document.createElement("baer"),
        span = document.createElement("span"),
        span_img = document.createElement("span"),
        ber_f = document.createElement("ber_f"),
        img = document.createElement("img");
    },
  },
  generateGrid_backrs: function (what = "", fsrc) {
    var srcf = "",
      getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
    if (what == "gallery_bundle") {
    }
    if (what == "blog_bundle") {
      srcf = window.portfolio.data.blog[0]["thumbail"];
    }
    fsrc(srcf);
  },
  home_list: function (elm, Elem = "") {
    switch (Elem) {
      case "welcomer.pages.start_page('blog');":
        welcomer.blg_history_replace("/?p=blog");
        welcomer.start();
        break;
      case "welcomer.pages.start_page('cv-pdf');":
        welcomer.blg_history_replace("/?p=cv-pdf");
        welcomer.start();
        break;
      case "welcomer.pages.start_page('tg_channel');":
        welcomer.blg_history_replace("/?p=tg_channel");
        welcomer.start();
        break;
      case "welcomer.pages.start_page('gallery');":
        welcomer.blg_history_replace("/?p=gallery");
        welcomer.start();
        break;
      case "welcomer.pages.start_page('projects');":
        welcomer.blg_history_replace("/?p=projects");
        welcomer.start();
        break;

      case "CTHP();":
      case "CTHP()":
        welcomer.blg_history_replace("/");
        welcomer.start();
        break;
      case "welcomer.cp();":
        welcomer.cp();
        break;
      case "welcomer.bundleSuggestedS(1);":
        welcomer.bundleSuggestedS(1);
        break;
      case "welcomer.bundleSuggestedS('2');":
        welcomer.bundleSuggestedS("2");
        break;
      case "welcomer.pages.gallery.call_back();":
        welcomer.pages.gallery.call_back();
        return false;
        break;
      case "welcomer.reload_me(this);":
        welcomer.reload_me(Elem);
        break;
      case "welcomer.search_Kompjiler(this);":
        try{ welcomer.search_Kompjiler(Elem); } catch(ex){}
        break;
      case "welcomer.blogloader('all');":
        welcomer.blogloader("all");
        break;
      case "welcomer.Social.tg.open();":
        welcomer.Social.tg.open();
        break;
      case "welcomer.share();":
        welcomer.share();
        break;
      case "welcomer.Hclose(this)":
      case "welcomer.Hclose(this);":
        welcomer.Hclose(elm);
        break;
      case "$(this).removeClass('info_box_active');":
        $(elem).removeClass("info_box_active");
        break;
      case "welcomer.pgloader('/?pages=cv-pdf');":
        welcomer.pgloader("/?pages=cv-pdf");
        break;
      case "welcomer.Hclose(this);":
        welcomer.Hclose(elm);
        break;
      case "welcomer.projectsc();":
        welcomer.projectsc();
        break;
      case "welcomer.pages.gallery.callv2();":
        welcomer.pages.gallery.callv2();
        break;
      case "welcomer.blogloader('all');":
        welcomer.blogloader("all");
        break;
      case "welcomer.editor.startfV();":
        // welcomer.editor.startfV();
        window.top.location.href = "/?p=editor&id=0";
        break;
      case "welcomer.cp();":
        welcomer.cp();
        break;
    }
  },
  generateGrid: function () {
    document
      .querySelector(".pdf_download")
      .addEventListener("click", function () {
        welcomer.pdf();
      });
    document
      .querySelector(".contanct_frm .h5_div .closec")
      .addEventListener("click", function () {
        welcomer.cp();
      });
    try {
      this.checkisempty();
      document
        .querySelector(".contanct_frm #fname")
        .addEventListener("keydown", function () {
          welcomer.checkisempty();
        });
      document
        .querySelector(".contanct_frm #lname")
        .addEventListener("keydown", function () {
          welcomer.checkisempty();
        });
      document
        .querySelector(".contanct_frm textarea")
        .addEventListener("keydown", function () {
          welcomer.checkisempty();
        });
      document
        .querySelector(".contanct_frm #norobot")
        .addEventListener("keydown", function () {
          welcomer.checkisempty();
        });
      document
        .querySelector(".contanct_frm #sendbtn")
        .addEventListener("click", function () {
          welcomer.send_email_c();
        });
    } catch (v) {}
    document.body.onresize = function () {
      var df = document.querySelector(".contanct_frm");
      if (df.classList.contains("open")) {
        if (document.body.offsetWidth < 700) {
          document.body.classList.add("open_f");
          welcomer.bell_out("");
        } else {
          document.body.classList.remove("open_f");
        }
      }
    };
    var buttons_box_shadow = document.querySelector("div#buttons");
    this.cards_links.forEach(function (v) {
      const div = document.createElement("div"),
        i = document.createElement("i"),
        a = document.createElement("a"),
        span = document.createElement("span"),
        img = document.createElement("img"),
        nnum = document.createElement("div");
      img.setAttribute("class", "aepraaa3");
      img.setAttribute("alt", "Card Link");
      img.setAttribute("style", "opacity:0;");
      img.setAttribute("data-title", v.title);
      img.setAttribute("onerror", "$(this).attr('style','display:none;');");
      img.setAttribute("onload", "$(this).attr('style','');");
      try {
        if (v.visible == "yes") {
          a.setAttribute("data-iam-hidden", "yes");
          div.setAttribute("data-iam-hidden", "yes");
          setTimeout(function () {
            a.remove();
            div.remove();
          }, 100);
        }
      } catch (ear) {}
      if (v.href.f == false) {
        a.href = v.href.f_u;
        a.target = v.href.target;
        a.setAttribute("rel", "nofollow noreferrer");
        a.setAttribute("role", "link");
        a.onmouseover = function () {
          welcomer.bell_over(a);
        };
        a.onmouseout = function () {
          welcomer.bell_out(a);
        };
        a.classList.add("adiv");
        const adiv_gat = v.blog_bundle || "";
        if (!adiv_gat == "") {
          a.setAttribute("adiv_gat", adiv_gat);
          a.appendChild(img);
          welcomer.generateGrid_backrs(adiv_gat, function (res) {
            img.src = res;
            img.onerror = function () {
              img.setAttribute("style", "display:none;");
            };
          });
        }
        a.title = v.descr;
        i.setAttribute("class", v.icon);
        span.classList.add("href_a_span");
        span.textContent = v.title;
        a.appendChild(i);
        if (v.num > 0) {
          nnum.innerHTML = v.num;
          nnum.setAttribute("class", "nnum");
          a.appendChild(nnum);
        }
        if (v.beta) {
          nnum.innerHTML = "Beta";
          nnum.setAttribute("class", "nnum");
          a.appendChild(nnum);
        }
        if (v.beta) {
          nnum.innerHTML = "Beta";
          nnum.setAttribute("class", "nnum");
          a.appendChild(nnum);
        }
        if (v?.soon) {
          nnum.innerHTML = "Soon";
          nnum.setAttribute("class", "nnum");
          a.appendChild(nnum);
        }
        a.appendChild(span);
        buttons_box_shadow.appendChild(a);
      } else {
        div.addEventListener("click", function () {
          if (!v.beta || !v.soon) {
            if (v.href.f == true) {
              // welcomer.home_list(div, `${v.href.f_u}`);

              welcomer.home_list(div, `${v.href.f_u}`);
            } else if (v.href.f == "soon") {
            } else {
              if ((v.href.target = "_self")) {
                window.top.location.href = `${v.href.f_u}`;
                a.target = v.href.target;
              }
              if ((v.href.target = "_blank")) {
                a.href = v.href.f_u;
                a.target = "_blank";
              }
            }
          }
        });
        div.onmouseover = function () {
          welcomer.bell_over(div);
        };
        div.onmouseout = function () {
          welcomer.bell_out(div);
        };
        const adiv_gat = v.adiv_gat || "";
        if (!adiv_gat == "") {
          div.setAttribute("adiv_gat", adiv_gat);
          welcomer.generateGrid_backrs(adiv_gat, function (res) {
            img.src = res;
            img.onerror = function () {
              img.setAttribute("style", "display:none;");
            };
          });
        }
        div.classList.add("adiv");
        div.title = v.descr;
        i.setAttribute("class", v.icon);
        span.classList.add("href_a_span");
        span.innerHTML = v.title;
        div.appendChild(i);
        if (v.num > 0) {
          nnum.innerHTML = v.num;
          nnum.setAttribute("class", "nnum");
          div.appendChild(nnum);
        }
        if (v.beta) {
          nnum.innerHTML = "Beta";
          nnum.setAttribute("class", "nnum");
          div.appendChild(nnum);
        }
        if (v.beta) {
          nnum.innerHTML = "Beta";
          nnum.setAttribute("class", "nnum");
          div.appendChild(nnum);
        }
        if (v?.soon) {
          nnum.innerHTML = "Soon";
          nnum.setAttribute("class", "nnum");
          div.appendChild(nnum);
        }
        div.appendChild(span);
        div.appendChild(img);
        buttons_box_shadow.appendChild(div);
      }
      setTimeout(() => {
        $("body").removeAttr("style");
      }, 1000);
    });
    if (document.querySelector(".wallpaperVideo")) {
      document.querySelector(".wallpaperVideo").removeAttribute("style");
    }
  },
  vdjae: async function () {
    $("img#svg_loader_img").css({ opacity: "0" });
    setTimeout(() => {
      $("img#svg_loader_img").remove();
    }, 1000);
    const f = document
        .querySelector(".wallpaperVideo source")
        .getAttribute("src"),
      url = await fetch(f)
        .then((h) => {
          return h.blob();
        })
        .catch(function (v) {});
    const blob = URL.createObjectURL(url);
    if (`https://${window.location.host}/null` !== blob) {
      document
        .querySelector(".wallpaperVideo source")
        .setAttribute("src", blob);
    }
  },
  getDataGallery: async function () {
    const response = await fetch("/?mnps=gallery"),
      responseJson = await response.json();
    return responseJson;
  },
  projects: [],
  history: [],
  cursor: document.querySelector(".cursor"),
  TopLeft: { y: 0, x: 0 },
  scroll_event: function () {
    document.querySelector("#buttons").addEventListener("scroll", function (e) {
      e.preventDefault();
      welcomer.scrolj();
    });
    document
      .querySelector(".catascrollEchatTv_right")
      .addEventListener("click", function () {
        welcomer.bundleSuggestedS(1);
      });
    document
      .querySelector(".catascrollEchatTv:not(.catascrollEchatTv_right)")
      .addEventListener("click", function () {
        welcomer.bundleSuggestedS("1");
      });
  },
  mobile_hover_tooltip_t: function () {
    this.mobile_hover_tooltip({
      title:
        "Pegasus project - Connection PC and Brain with no chips is possible!",
      description:
        "Is possible no only in theory?!<br><br>Pegasus project is project,Connecting the brain to the computer using WiFi frequency and brain neuro signals. The connection is used by using a modified WiFi signal... Similar as Neural link but you don't need chips... <br><br> More coming soon! <img loading='lazy' class='is_touch in_hover' ondragstart='return false;' src='/?blog=13_jul_2024_23_40/43515315' data-zoom-image='https://portfolio.localhost/?p=projects' alt='Pegasus project - Connection PC and Brain with no chips is possible!'>",
      complete: function (res) {
        document.querySelector("body").appendChild(res);
      },
    });
  },
  mobile_hover_tooltip: function (
    t = { title: "", description: "", complete: function () {} }
  ) {
    document.querySelectorAll("div_preview").forEach(function (r) {
      r.remove();
    });
    const div_preview = document.createElement("div_preview"),
      div_bck = document.createElement("div_bck"),
      div_h2 = document.createElement("div_h2"),
      divh2 = document.createElement("divh2"),
      div_h = document.createElement("div_h"),
      div_t = document.createElement("div_t"),
      dtitle = document.createElement("dtitle"),
      span = document.createElement("span");
    span.innerHTML = `<i class="bi bi-caret-down-fill"></i> Close`;
    span.onclick = function () {
      if (div_preview.getAttribute("class") == "closed") {
        div_preview.removeAttribute("class");
        span.innerHTML = `<i class="bi bi-caret-down-fill"></i> Close`;
      } else {
        div_preview.setAttribute("class", "closed");
        span.innerHTML = `<i class="bi bi-caret-up-fill"></i> Open`;
      }
    };
    dtitle.innerHTML = `${t.title}`;
    div_h.innerHTML = `${t.title}`;
    div_t.innerHTML = `${t.description}`;
    div_h2.appendChild(divh2);
    div_h2.appendChild(span);
    div_preview.appendChild(div_bck);
    div_preview.appendChild(div_h2);
    div_preview.appendChild(dtitle);
    div_preview.appendChild(div_t);
    if (typeof t.complete === "function") {
      t.complete(div_preview);
    }
  },
  scrolj: function () {
    const catascrollEchatTv_right = document.querySelector(
        ".catascrollEchatTv_right"
      ),
      catascrollEchatTv = document.querySelector(
        ".catascrollEchatTv:not(.catascrollEchatTv_right)"
      );
    if (document.querySelector("#buttons").scrollLeft > 150) {
      if (catascrollEchatTv !== null) {
        catascrollEchatTv.setAttribute("style", "transform:scale(1)");
      }
    } else {
      if (catascrollEchatTv !== null) {
        catascrollEchatTv.setAttribute("style", "transform:scale(0)");
      }
    }
    const r = document.querySelector("#buttons");
    if (r.offsetWidth + r.scrollLeft >= r.scrollWidth) {
      catascrollEchatTv_right.setAttribute("style", "transform:scale(0)");
    } else {
      catascrollEchatTv_right.setAttribute("style", "transform:scale(1)");
    }
  },
  bundleSuggestedS: function (n) {
    if (n == "1") {
      document.querySelector("#buttons").scrollLeft += 150;
    } else {
      document.querySelector("#buttons").scrollLeft -= 150;
    }
    welcomer.scrolj();
  },
  get_from_datter: function (url) {
   /*  $.ajax({ url: url, type: "GET", success: function (v) {} }); */
  },
  fetchJsonData: async function (url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  },
  cards_generate_xhr: null,
  cards_generateV2: function (parentNODE, fh = {}) {
    var shared_links = "",
      br_box = document.createElement("br_box"),
      div_bra = document.createElement("div"),
      img = document.createElement("img"),
      br_aer = document.createElement("br_aer");
    br_aer.setAttribute("class", "snaped");
    div_bra.setAttribute("class", "bra");
    img.setAttribute("class", "img_background_rljs");
    img.setAttribute("src", fh?.thumbail);
    img.setAttribute("loading", "lazy");
    div_bra.appendChild(img);
    div_bra.appendChild(br_aer);
    br_box.appendChild(div_bra);
    try {
      welcomer.cards_generate_xhr.abort();
    } catch (aerear) {}
    var conff = this.conf;
    welcomer.cards_generate_xhr = new XMLHttpRequest();
    welcomer.cards_generate_xhr.open("POST", conff["graph"], true);
    welcomer.cards_generate_xhr.onreadystatechange = function () {
      if (welcomer.cards_generate_xhr.readyState === 4) {
        if (welcomer.cards_generate_xhr.status === 200) {
          var responseData = JSON.parse(
            welcomer.cards_generate_xhr.responseText
          );
          var jsjonF = responseData || [];
          for (var i = 0; i < jsjonF.length; i++) {
            var jsjon = jsjonF[i][0];
            var baer = document.createElement("baer"),
              ber_f = document.createElement("ber_f"),
              span = document.createElement("span"),
              bar_t = document.createElement("bar_t"),
              span_2 = document.createElement("span"),
              img = document.createElement("img");
            img.setAttribute("src", `${jsjon["icon"]}`);
            bar_t.appendChild(span);
            span.innerHTML = `${jsjon["title"]}`;
            ber_f.appendChild(span_2);
            span_2.innerHTML = `${jsjon["url"]}`;
            baer.appendChild(img);
            baer.appendChild(ber_f);
            br_aer.appendChild(baer);
            shared_links += `<a title="Click (hovered link) for open... " class="baer" target="_blank" rel="nofollow noreferrer" href="${jsjon["url"]}">
<img src="${jsjon["thumbail"]}"><ber_f>
<bar_t><img src="${jsjon["icon"]}" class="favicon" height="16" width="16"><span>${jsjon["title"]}</span></bar_t><span>${jsjon["url"]}</span>
</ber_f>
</a>`;
          }
          if (jsjonF.length > 0) {
            // $("#clavs iframe:not(.iframe_mask)").contents().find("body br_box").remove();

            parentNODE.appendChild(br_box);

            const iframeBody = document.querySelector(
              "#clavs iframe:not(.iframe_mask)"
            ).contentDocument.body;
            const brBox = document.createElement("br_box");
            const divBra = document.createElement("div");
            divBra.className = "bra";

            const img = document.createElement("img");
            img.className = "img_background_rljs";
            img.onload = function () {
              welcomer.img_load(this);
            };
            img.src = fh?.thumbail;
            img.alt = "Blog > Marko Nikolić";
            img.loading = "lazy";

            divBra.appendChild(img);
            brBox.appendChild(divBra);

            const pe = document.createElement("pe");
            pe.innerHTML = `<i class="bi bi-link-45deg"></i> ${
              welcomer.lang()["detectedsLinksIn_postmaxn"]
            }`;
            brBox.appendChild(pe);

            const brAer = document.createElement("br_aer");
            brAer.className = "snaped";
            brAer.innerHTML = shared_links;
            brBox.appendChild(brAer);

            iframeBody.appendChild(brBox);
            iframeBody.appendChild(document.createElement("br"));
            iframeBody.appendChild(document.createElement("br"));
            iframeBody.appendChild(document.createElement("br"));

            iframeBody.querySelectorAll("a.baer").forEach(function (a) {
              a.setAttribute(
                "data-title",
                "Click (hovered image) for view image in full size"
              );
              a.addEventListener("mouseenter", function () {
                parent.welcomer.showAnchorTitle(
                  a,
                  a.getAttribute("data-title")
                );
              });
              a.addEventListener("mouseleave", function () {
                parent.welcomer.hideAnchorTitle();
              });
              a.removeAttribute("title");
            });
          }
        } else {
        }
      }
    };
    const jsonData = new FormData();
    var json_f = fh.shared_links;
    jsonData.append("urlf", JSON.stringify(fh.shared_links));
    jsonData.append("type", "s");
    var shared_links_loader = "";
    if (fh.shared_links.length > 0) {
      fh.shared_links.forEach(function () {
        shared_links_loader += `<a title="Loading" class="baer loading_data" target="_blank" rel="nofollow noreferrer" role="button" href="#">
<img src="${welcomer.loader_svg}"><ber_f>
<bar_t><img src="${welcomer.loader_svg}" class="favicon" height="16" width="16"><span></span></bar_t><span> </span>
</ber_f>
</a>`;
      });
      $("#clavs iframe:not(.iframe_mask)")
        .contents()
        .find("body br_box")
        .remove();
      $("#clavs iframe:not(.iframe_mask)").contents().find("body").append(`
<br_box>
<div class="bra">
<img class="img_background_rljs" onload="welcomer.img_load(this);" src="${
        fh?.thumbail
      }" alt="Blog > Marko Nikolić" loading="lazy"></div>
<pe><i class="bi bi-link-45deg"></i> ${
        welcomer.lang()["detectedsLinksIn_postmaxn"]
      }</pe>
<br_aer class="snaped">${shared_links_loader}</br_aer></br_box><br><br><br>`);
    }
    welcomer.cards_generate_xhr.send(jsonData);
  },
  cards_generate: function (fh = {}) {
    return false;

    var shared_links = "",
      br_box = document.createElement("br_box"),
      div_bra = document.createElement("div"),
      img = document.createElement("img"),
      br_aer = document.createElement("br_aer");
    br_aer.setAttribute("class", "snaped");
    div_bra.setAttribute("class", "bra");
    img.setAttribute("class", "img_background_rljs");
    img.setAttribute("src", fh?.thumbail);
    img.setAttribute("loading", "lazy");
    div_bra.appendChild(img);
    div_bra.appendChild(br_aer);
    br_box.appendChild(div_bra);
    try {
      welcomer.cards_generate_xhr.abort();
    } catch (aerear) {}
    var conff = this.conf;
    welcomer.cards_generate_xhr = new XMLHttpRequest();
    welcomer.cards_generate_xhr.open("POST", conff["graph"], true);
    welcomer.cards_generate_xhr.onreadystatechange = function () {
      if (welcomer.cards_generate_xhr.readyState === 4) {
        if (welcomer.cards_generate_xhr.status === 200) {
          var responseData = JSON.parse(
            welcomer.cards_generate_xhr.responseText
          );
          var jsjonF = responseData || [];
          for (var i = 0; i < jsjonF.length; i++) {
            var jsjon = jsjonF[i][0];
            var baer = document.createElement("baer"),
              ber_f = document.createElement("ber_f"),
              span = document.createElement("span"),
              bar_t = document.createElement("bar_t"),
              span_2 = document.createElement("span"),
              img = document.createElement("img");
            img.setAttribute("src", `${jsjon["icon"]}`);
            bar_t.appendChild(span);
            span.innerHTML = `${jsjon["title"]}`;
            ber_f.appendChild(span_2);
            span_2.innerHTML = `${jsjon["url"]}`;
            baer.appendChild(img);
            baer.appendChild(ber_f);
            br_aer.appendChild(baer);
            shared_links += `<a title="Click (hovered link) for open... " class="baer" target="_blank" rel="nofollow noreferrer" href="${jsjon["url"]}">
<img src="${jsjon["thumbail"]}"><ber_f>
<bar_t><img src="${jsjon["icon"]}" class="favicon" height="16" width="16"><span>${jsjon["title"]}</span></bar_t><span>${jsjon["url"]}</span>
</ber_f>
</a>`;
          }
          if (jsjonF.length > 0) {
            $("#clavs iframe:not(.iframe_mask)")
              .contents()
              .find("body br_box")
              .remove();
            $("#clavs iframe:not(.iframe_mask)").contents().find("body")
              .append(`
<br_box>
<div class="bra">
<img class="img_background_rljs" onload="welcomer.img_load(this);" src="${
              fh?.thumbail
            }" alt="Blog > Marko Nikolić" loading="lazy"></div>
<pe><i class="bi bi-link-45deg"></i> ${
              welcomer.lang()["detectedsLinksIn_postmaxn"]
            }</pe>
<br_aer class="snaped">${shared_links}</br_aer></br_box><br><br><br>`);
            $("#clavs iframe:not(.iframe_mask)")
              .contents()
              .find("a.baer")
              .each(function () {
                $(this).attr(
                  "data-title",
                  "Click (hovered image) for view image in full size"
                );
                var a = $(this);
                a.hover(
                  function () {
                    parent.welcomer.showAnchorTitle(a, a.data("title"));
                  },
                  function () {
                    parent.welcomer.hideAnchorTitle();
                  }
                )
                  .data("title", a.attr("title"))
                  .removeAttr("title");
                a.mouseleave(function () {
                  parent.welcomer.hideAnchorTitle();
                });
              });
          }
        } else {
        }
      }
    };
    const jsonData = new FormData();
    var json_f = fh.shared_links;
    jsonData.append("urlf", JSON.stringify(fh.shared_links));
    jsonData.append("type", "s");
    var shared_links_loader = "";
    if (fh.shared_links.length > 0) {
      fh.shared_links.forEach(function () {
        shared_links_loader += `<a title="Loading" class="baer loading_data" target="_blank" rel="nofollow noreferrer" role="button" href="#">
<img src="${welcomer.loader_svg}"><ber_f>
<bar_t><img src="${welcomer.loader_svg}" class="favicon" height="16" width="16"><span></span></bar_t><span> </span>
</ber_f>
</a>`;
      });
      $("#clavs iframe:not(.iframe_mask)")
        .contents()
        .find("body br_box")
        .remove();
      $("#clavs iframe:not(.iframe_mask)").contents().find("body").append(`
<br_box>
<div class="bra">
<img class="img_background_rljs" onload="welcomer.img_load(this);" src="${
        fh?.thumbail
      }" alt="Blog > Marko Nikolić" loading="lazy"></div>
<pe><i class="bi bi-link-45deg"></i> ${
        welcomer.lang()["detectedsLinksIn_postmaxn"]
      }</pe>
<br_aer class="snaped">${shared_links_loader}</br_aer></br_box><br><br><br>`);
    }
    welcomer.cards_generate_xhr.send(jsonData);
  },
  custom_evjents_page: function (id = "") {
    $("div#clavs br_ta").addClass("active_scr");
    if (f.title) {
      $(".pdf_page_home_btn").show();
      const urlParams = new URLSearchParams(
        `${window.location.origin}/${f.source}`
      );

      var res = "";
      window.portfolio.data.blog.forEach(function (rr) {
        if (id == rr.id) {
          res = window.atob(rr.page);
        }
      });
      welcomer.gallery_temp = f.gallery;
      $("solar_arrow labelv").html(
        `<i class="bi bi-chevron-double-up"></i><span>Show posts</span><i class="bi bi-chevron-double-up"></i>`
      );
      $("body").removeAttr("data-category-name");
      welcomer.blg_history_replace(`/?p=blog&id=${id}`);
      $("div_header").attr(
        "data-url",
        `${window.location.origin}/?p=blog&id=${id}`
      );
      $("div#clavs br_ta").addClass("active_scr");
      $(ifrm).hide();
      ifrm.document.open();
      ifrm.document.write(`${res}`);
      setTimeout(function () {
        $("#clavs grider_viewer").hide();
      }, 1000);
      ifrm.document.querySelectorAll("img").forEach(function (v) {
        $(v)
          .attr("onclick", "parent.welcomer.infoVa_img(event)")
          .attr(
            "data-title",
            "Click (hovered image) for view image in full size"
          );
        var a = $(v);
        a.hover(
          function () {
            parent.welcomer.showAnchorTitle(a, a.data("title"));
          },
          function () {
            parent.welcomer.hideAnchorTitle();
          }
        )
          .data("title", a.attr("title"))
          .removeAttr("title");
        a.mouseleave(function () {
          parent.welcomer.hideAnchorTitle();
        });
      });
      ifrm.document.close();
      $("div_header span").html(`Blog > ${f.title}`);
      welcomer.titleC(` ${f.title}> Blog > Marko Nikolić`);
      $("gridder_loader,#clavs iframe:not(.iframe_mask)").removeAttr("style");
    }
  },
  solarsustem_load: function () {
    const shadowContainer = document.getElementById("solarsystem");
    const shadowRoot = shadowContainer.attachShadow({ mode: "open" });
    const rootDiv = document.createElement("div");
    rootDiv.id = "root";
    rootDiv.style.height = "100%";
    rootDiv.style.width = "100%";
    shadowRoot.appendChild(rootDiv);
    const style = document.createElement("style");
    style.setAttribute("nonce", window.stmp);
    style.textContent = ` *{box-sizing:border-box;}html,body{margin:0;}#root{height:100%;width:100%;font-size:16px;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica Neue,sans-serif;line-height:normal;color:#333;}`;
    const script = document.createElement("script");
    script.setAttribute("type", "module");
    script.setAttribute("crossorigin", "");
    script.setAttribute("nonce", window.stmp);
    script.setAttribute("src", "/demo&id=S3503&hangar=main");
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(script);
  },
  url_control: function () {},
  custom_evjents: function () {},
  blog_loader_natjive: function (id = "all") {
    var ifrm = document.querySelector("#clavs iframe:not(.iframe_mask)");
    ifrm.removeAttribute("onload");
    ifrm =
      ifrm.contentWindow ||
      ifrm.contentDocument.document ||
      ifrm.contentDocument;
    $("div_header").addClass("ld_completeld_complete2");
    $(".F_bi_search").hide();
    $("gridder_loader").attr("style", "opacity:1");
    $(".pdf_page_home_btn").hide();
    $(".close_btnf").show();
    $(" div.bra").remove();
    $("#clavs iframe:not(.iframe_mask)").attr("style", "opacity:0");
    if (id == "null" || id == null) {
      id = "all";
      welcomer.titleC("Blog > Marko Nikolić");
      $("div_header span").html(`Marko Nikolić > Blog`);
    }
    try {
      welcomer.terminator.ajax.blog_post.abort();
    } catch (aer) {}
    var f = {};
    window.portfolio.data.blog.forEach(function (res) {
      if (res.id == id) {
        f = res;
      }
    });
    if (!f.title) {
      window.location.href = "/";
    }
    if (id == "all") {
      const urlParamsf = new URLSearchParams(window.location.search),
        urlParamsf_f = urlParamsf.get("c"),
        urlParamsf_f_sc = urlParamsf.get("sc");
      if (urlParamsf.has("c")) {
        if (urlParamsf.has("sc")) {
          welcomer.uBoss(
            {},
            "",
            `/?p=blog&c=${urlParamsf_f}&sc=${urlParamsf_f_sc}`
          );
        } else {
          welcomer.uBoss({}, "", `/?p=blog&c=${urlParamsf_f}`);
        }
        document
          .querySelector("body")
          .setAttribute("data-category-name", urlParamsf_f);
        welcomer.titleC(`Blog > ${urlParamsf_f}- Marko Nikolić`);
        // <div-solarsystem id="root" class="solarsystem"></div-solarsystem>
        if (urlParamsf_f == "astronomy") {
          const div_solarsystem = document.createElement("div-solarsystem");
          div_solarsystem.classList.add("solarsystem");
          div_solarsystem.id = "root";
          document.querySelector("div#clavs").appendChild(div_solarsystem);
        }
      } else {
        welcomer.blg_history_replace("/?p=blog");
      }
      welcomer.blogljoad_posts(f);
      $("#clavs iframe:not(.iframe_mask)").removeAttr("src");
    } else {
      $("div#clavs br_ta").addClass("active_scr");
      function decodeEntities(hexString) {
        function hexToAscii(hexString) {
          var asciiString = "";
          for (var i = 0; i < hexString.length; i += 2) {
            asciiString += String.fromCharCode(
              parseInt(hexString.substr(i, 2), 16)
            );
          }
          return asciiString;
        }
        var originalString = hexToAscii(hexString);
        return hexString;
      }
      if (f.title) {
        welcomer.pages.blog.loader({
          src: f.thumbail,
          error: function () {
            console.error("Error");
          },
          callback: function () {},
        });
        $(".pdf_page_home_btn").show();

        const parser = new DOMParser();
        var res = decodeEntities(f.page);
        welcomer.gallery_temp = f.gallery;
        welcomer.blg_history_replace(`/?p=blog&id=${id}`);
        $("div_header").attr(
          "data-url",
          `${window.location.origin}/?p=blog&id=${id}`
        );
        $("solar_arrow labelv").html(
          `<i class="bi bi-chevron-double-up"></i><span>Show posts</span><i class="bi bi-chevron-double-up"></i>`
        );
        $("body").removeAttr("data-category-name");
        $("div#clavs br_ta").addClass("active_scr");
        document.querySelector("p-container").set(`${res}`,f);
        // document.querySelector('div#clavs div_header').setAttribute("style", " opacity:1;transform:unset;");
        welcomer.cards_generate(f);
        document
          .getElementById("clavs")
          .setAttribute("style", " opacity:1;transform:unset;");
        $("#clavs iframe:not(.iframe_mask").hide();
        $("div_header span").html(`Blog > ${f.title}`);
        $("#clavs grider_viewer").hide();
        $("div#clavs").prepend(
          `<div class="bra"><img class="img_background_rljs" onload="welcomer.img_load(this);" src="${
            f.thumbail
          }" alt="${$("title").html()}" loading="lazy" /></div>`
        );
        $("#clavs grider_viewer").html("");
        $("div_header span").html(`Blog > ${f.title}`);
        welcomer.titleC(` ${f.title}> Blog > Marko Nikolić`);

        /*
        document.querySelector("blog_post_loader loader img").setAttribute("src", `${f.thumbail}`);
        
        document.querySelector("blog_post_loader img").addEventListener("load", function(){
          document.querySelector("blog_post_loader").classList.add("active");
          setTimeout(() => {
            document.querySelector("blog_post_loader").setAttribute("style", "opacity:0 !important; pointer-events:none !important;"); 
          }, 1000); 
        });*/

        $(ifrm).hide();
        welcomer.cards_generate(f);
        $("#clavs iframe:not(.iframe_mask)").addClass("blog_style");
        $("body").removeAttr("data-hmm");
        document
          .getElementById("clavs")
          .setAttribute("style", " opacity:1;transform:unset;");
        $("#clavs grider_viewer").hide();
        $("div_header").addClass("ld_completeld_complete2");
        $(".F_bi_search").hide();
        $("gridder_loader").attr("style", "opacity:1");
        $(".pdf_page_home_btn").hide();
        $(".close_btnf").show();
        document
          .querySelector(".pdf_download")
          .setAttribute("style", "display:none;");
        document
          .querySelector("#logo_backscr_img")
          .classList.remove("activeBell");
        $("#canvas,.wallpaperVideo ").removeAttr("style");
        var Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner");
        $(".Vjideo_sjpinner,gridder_loader").hide();
        // }});
      } else {
        welcomer.blg_history_replace("");
        $("#clavs").attr("style", "transform:translateY(-100%);");
        welcomer.loop_active = true;
        $("iframe:not(.iframe_mask)").attr("src", "");
        $("iframe:not(.iframe_mask)").removeAttr("style");
      }
    }
  },
  blogLoader_native: function (id = "all") {
    $("#clavs grider_viewer,div#clavs br_ta").removeAttr("style");
    $(" div.bra").remove();
  },
  blogloader: function (id = "all") {
    $("#clavs grider_viewer,div#clavs br_ta").removeAttr("style");
    $(" div.bra").remove();
    var ifrm = document.querySelector("#clavs iframe:not(.iframe_mask)");
    ifrm.removeAttribute("onload");
    ifrm =
      ifrm.contentWindow ||
      ifrm.contentDocument.document ||
      ifrm.contentDocument;
    $("div_header").addClass("ld_completeld_complete2");
    $(".F_bi_search").hide();
    $("gridder_loader").attr("style", "opacity:1");
    $(".pdf_page_home_btn").hide();
    $(".close_btnf").show();
    $("#clavs iframe:not(.iframe_mask)").attr("style", "opacity:0");
    if (id == "null" || id == null) {
      id = "all";
      welcomer.titleC("Blog > Marko Nikolić");
      $("div_header span").html(`Marko Nikolić > Blog`);
    }
    try {
    } catch (aer) {}
    if (id == "all") {
      const urlParamsf = new URLSearchParams(window.location.search),
        urlParamsf_f = `${urlParamsf.get("c")}`;
      if (urlParamsf.has("c")) {
        welcomer.uBoss({}, "", `/?p=blog&c=${urlParamsf_f}`);
        document
          .querySelector("body")
          .setAttribute("data-category-name", urlParamsf_f);
        welcomer.titleC(`Blog > ${urlParamsf_f}- Marko Nikolić`);

        if (urlParamsf_f == "astronomy") {
        }
      } else {
        welcomer.blg_history_replace("/?p=blog");
        welcomer.titleC("Blog > Marko Nikolić");
      }
      welcomer.blogljoad_posts(window.portfolio.data.blog);
      $("#clavs iframe:not(.iframe_mask)").removeAttr("src");
      setTimeout(function () {
        const urlParamsf = new URLSearchParams(window.location.search),
          urlParamsf_f = `${urlParamsf.get("c")}`;
        if (urlParamsf_f !== null || urlParamsf_f !== "null") {
          $(`br_ta ta_f[data-category="${urlParamsf_f}"]`).click();
        } else {
          $("br_ta ta_f:first-child").click();
        }
      }, 100);
    } else {
      welcomer.blg_history_replace("/?p=blog&id=" + id);

      welcomer.blog_loader_natjive(id);
    }
    $("html").addClass("anim_djenerated");
  },
  url_params: function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("p");
    const myParam_id = urlParams.get("id");
    const myParam_query = urlParams.get("q");
    if (myParam !== null) {
      if (myParam == "blog") {
        this.blogloader(myParam_id);
        return;
      } else if (myParam == "editor") {
        this.editor.start();
        return;
      } else {
        if (myParam == "search") {
          const p_search = document.createElement("p-search");
          document.body.appendChild(p_search);
          if (myParam_query !== null) {
            if (myParam_query.length > 1) {
              p_search.set(myParam_query);
            }
          }
          return;
        }
        this.pgloader(window.location.origin + "/?pages=" + myParam);
        return;
      }
    }
  },
  url_params2: function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("p");
    return window.location.origin + "/?p=" + myParam;
  },
  api: {},
  isMobile: function () {
    var isMobile = false;
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge|maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r|s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-||_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt|kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-||o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g|nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      isMobile = true;
    }
    // $("p-c").attr("data-title", "Your GPU:" + this.GPPU_ms());
    return isMobile;
  },
  decodeEntities: function (str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  },
  spoiler: function (v = { c, u: "" }) {
    var f = welcomer.spolr,
      no_spoler = false;
    if (v.u.includes("cv-pdf") || v.u.includes("visitcard")) {
      no_spoler = true;
    }
    if (no_spoler) {
      var spoiler_t = document.createElement("spiler_t"),
        spoiler_iframe = document.createElement("spoiler_iframe"),
        b_spoiler_iframe = document.createElement("b_spoiler_iframe"),
        img = document.createElement("img");
      img.id = "spoiler_svg_loader";
      img.src = `${welcomer.loader_svg}`;
      img.setAttribute(
        "style",
        ` position:fixed;right:10px;top:10px;width:30px;height:30px;pointer-events:none;opacity:0;object-fit:scale-down;transition:.3s;">`
      );
      document.body.classList.add("spoiler_active");
      spoiler_t.innerHTML = `Sorry - Are you a robot?<br>If you don't? <sspan>Click</sspan> to see hidden...<br><i class="bi bi-eye"></i>`;
      if (document.querySelectorAll("spiler_t").length < 1) {
        document.body.appendChild(spoiler_iframe);
        document.body.appendChild(spoiler_t);
        document.body.appendChild(b_spoiler_iframe);
        spoiler_t.onclick = function () {
          spoiler_t.innerHeight = "Please wait...";
          spoiler_t.appendChild(img);
          document.body.classList.remove("spoiler_active");
          setTimeout(() => {
            spoiler_iframe.remove();
            spoiler_t.remove();
            b_spoiler_iframe.remove();
          }, 500);
          v.c();
        };
      }
    } else {
      v.c();
    }
  },
  remove_duplicates: function (arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    for (var key in obj) {
      ret_arr.push(key);
    }
    return ret_arr;
  },
  blogljoad_posts_category_cbc: function (tt_category_name = "") {
    var arrayr = [],
      categoryTemp = document.querySelector("div#clavs br_ta"),
      ljoader = document.querySelector("#reaload_page"),
      Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
      div_header = document.querySelector("div_header"),
      tt_category_name_false = false,
      iframe = document.createElement("iframe"),
      clavs = document.getElementById("clavs"),
      arr = window.arr_temp,
      rtunr_str = "",
      div_not_i = 0,
      div_not = document.querySelector("div_not");
    if (tt_category_name == "All" || tt_category_name == "all") {
      div_not_i = window.portfolio.data.blog.length;
    } else {
      for (var ii = 0; ii < window.portfolio.data.blog.length; ii++) {
        var v = window.portfolio.data.blog[ii];
        for (var i = 0; i < v?.category?.length; i++) {
          if (tt_category_name == v.category[i]) {
            div_not_i++;
          }
        }
      }
    }
    return div_not_i;
  },
  capitalize_str: function (text) {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  blogloader_img: function (id = "") {
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
  },
  grid_box: function(params = []){

  },
  blogljoad_posts_category: function (tt_category_name = "All") {
    var arrayr = [],
      categoryTemp = document.querySelector("div#clavs br_ta"),
      ljoader = document.querySelector("#reaload_page"),
      Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
      div_header = document.querySelector("div_header"),
      tt_category_name_false = false,
      iframe = document.createElement("iframe"),
      clavs = document.getElementById("clavs"),
      arr = window.arr_temp,
      div_not_i = 0,
      div_not = document.querySelector("div_not");
    $(ljoader).hide();
    $(Vjideo_sjpinner).show();
    document
      .getElementById("clavs")
      .setAttribute("style", " opacity:1;transform:unset;");
    $("iframe:not(.iframe_mask)").hide();
    categoryTemp.classList.remove("active_scr");
    $("grider_viewer").show().removeAttr("style");
    $("div_header").removeClass("ld_completeld_complete");
    $("grider_viewer").html("");
    var grider_viewer = document.querySelector("grider_viewer");
    grider_viewer.style.display = "block";
    grider_viewer.removeAttribute("style");
    grider_viewer.innerHTML = "";
    arr.forEach(function (v) {
      try {
        for (var i = 0; i < v?.category.length; i++) {
          arrayr.push(v.category[i]);
        }
      } catch (r) {}
      arrayr.forEach(function (x) {
        arrayr[x] = (arrayr[x] || 0) + 1;
      });
      var thi = "class='is_touch'";
      var p_open = "";
      if (v.id !== "") {
        if (v.type) {
          p_open = `<p_open title="Open:/?p=blog&id=${v.id}" onclick="welcomer.blogloader(${div_not_i});">
                      <i class="bi bi-link"></i> Open post
                    </p_open>`;
        } else {
          p_open = `<p_open title="Download:${v.title}" onclick="welcomer.blogloader(${div_not_i});">
                      <i class="bi bi-cloud-arrow-down"></i> Download<br>
                      <i class="bi bi-shield-check"></i> (Secure download)
                    </p_open>`;
        }
      }
      p_open = `<p_open title="Open:/?p=blog&id=${v.id}" onclick="welcomer.blogloader(${v.id});">
                  <i class="bi bi-link"></i> Open post
                </p_open>`;
      if (welcomer.isMobile()) {
        thi = `onclick='welcomer.blogloader(${v.id})'`;
      }
      var img_src_d = `${v.thumbail}`;
      if (!img_src_d.includes("data:")) {
        img_src_d = `${v.thumbail}&thumb=true`;
      }
      var p_image = "";
      if (welcomer.isimagec(v?.category, "image")) {
        p_image = `<p_open class="open_img" data-title="Click for view image in full size" onclick="welcomer.blogloader_img(1073568435);">
                     <i class="bi bi-image-fill"></i> Open image
                   </p_open>`;
      }
      var img_backr = "";
      var display_none = "";
      var project = "";
      const bagdes = [
        {
          name: "text",
          data: "bi bi-file-text-fill",
          is_me: ["p,h1,h2,h3,h4,h5,span,tspan"],
        },
        {
          name: "image",
          data: "bi bi-file-earmark-image-fill",
          is_me: ["img"],
        },
        {
          name: "video",
          data: "bi bi-file-earmark-play-fill",
          is_me: ["video", "video-player-v2"],
        },
        {
          name: "iframe",
          data: "bi bi-file-earmark-richtext-fill",
          is_me: ["iframe"],
        },
      ];
      var bagde_list = "";
      if (v?.page) {
        bagdes.forEach((badge) => {
          let tags = [];
          badge.is_me.forEach((item) => {
            if (item.indexOf(",") !== -1) {
              tags = tags.concat(item.split(","));
            } else {
              tags.push(item);
            }
          });
          tags = tags.map((tag) => tag.trim());
          let found = false;

          tags.forEach((tag) => {
            if (!found && v?.page.indexOf(`<${tag}`) !== -1) {
              bagde_list += `<i class="${badge.data}" ></i>`;
            }
            found = true;
          });
        });
      }


      img_backr = `<i_list>${bagde_list}</i_list><img loading="lazy" ${thi} 
        ondragstart="return false;" 
        onload="welcomer.loaded_img(this,${div_not_i});" 
        src="${img_src_d}" 
        data-zoom-image="${img_src_d}" 
        alt="${v.title}" />`;
      if (v.type == "text") {
        img_backr = `<i_list>${bagde_list}</i_list><div_txt><span>${v?.description}</span></div_txt>`;
        display_none = 'style="display:none;"';
        project = 'class="section_loadet_img"';
      }

      if (tt_category_name == "All" || tt_category_name == "all") {
      grider_viewer.insertAdjacentHTML(
        "beforeend",
        `<project ${project} data-category="${window.btoa(
          v?.category
        )}" ${thi} id-int="${div_not_i}" title="${v?.title}">
           <grider_box>
             <p><span>${v.title}</span></p>
             ${p_open}
             ${p_image}
             <fiv><i onclick="welcomer.blogloader(${
               v.id
             });" class="bi bi-info-circle" title="Go to blog post..."></i></fiv>
             <img ${display_none} src="${
          welcomer.loader_svg
        }" class="loader_post" height="50" width="50" />
             ${img_backr}
           </grider_box>
         </project>`
      );
      div_not_i++;
    } else {
      try{
      for (var i = 0; i < v?.category.length; i++) {
        if (tt_category_name == v.category[i]) {
      grider_viewer.insertAdjacentHTML(
        "beforeend",
        `<project ${project} data-category="${window.btoa(
          v?.category
        )}" ${thi} id-int="${div_not_i}" title="${v?.title}">
           <grider_box>
             <p><span>${v.title}</span></p>
             ${p_open}
             ${p_image}
             <fiv><i onclick="welcomer.blogloader(${
               v.id
             });" class="bi bi-info-circle" title="Go to blog post..."></i></fiv>
             <img ${display_none} src="${
          welcomer.loader_svg
        }" class="loader_post" height="50" width="50" />
             ${img_backr}
           </grider_box>
         </project>`
      );      div_not_i++;
    }
  }}catch(f){}
    }
    tt_category_name_false = false;

    });
    /*
    arr.forEach(function (v) {
      continue;
      var thi = "class='is_touch'",
        p_open = "";
      var p_image = ``;
      if (welcomer.isimagec(v?.category, "image")) {
        p_image = `<p_open class="open_img" data-title="Click for view image in full size" onclick="welcomer.blogloader_img(${v.id});"> <i class="bi bi-image-fill"></i> Open image </p_open>`;
      }
      if (v.id !== "") {
        if (v.type) {
          p_open = ` <p_open title="Open:/?p=blog&id=${v.id}" onclick="welcomer.blogloader(${div_not_i});" > <i class="bi bi-link"></i> Open post </p_open>`;
        } else {
          p_open = ` <p_open title="Download:${v.title}" onclick="welcomer.blogloader(${div_not_i});" > <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download) </p_open>`;
        }
      }
      p_open = ` <p_open title="Open:/?p=blog&id=${v.id}" onclick="welcomer.blogloader(${v.id});" > <i class="bi bi-link"></i> Open post </p_open>`;
      p_open += ` ${p_image}`;
      if (welcomer.isMobile()) {
        thi = `onclick='welcomer.blogloader(${v.id})'`;
      }
      if (tt_category_name == "All" || tt_category_name == "all") {
        $("grider_viewer").append(
          `<project  data-category="${window.btoa(
            v?.category
          )}" ${thi}id-int="${div_not_i}" title="${
            v?.title
          }"> <grider_box> <p><span>${
            v.title
          }</span></p> ${p_open}<fiv><i onclick="welcomer.blogloader(${
            v.id
          });" class="bi bi-info-circle" title="Go to blog post..."></i></fiv> <img loading="lazy" ${thi}ondragstart="return false;" onload="welcomer.loaded_img(this,${div_not_i});" src="${
            v.thumbail
          }" data-zoom-image="${v.thumbail}" alt="${
            v.title
          }"> </grider_box> </project>`
        );
        div_not_i++;
      } else {
        try {
          for (var i = 0; i < v?.category.length; i++) {
            if (tt_category_name == v.category[i]) {
              var img_src_d = `${v.thumbail}`;
              if (img_src_d.includes("data:")) {
                img_src_d = `${v.thumbail}`;
              } else {
                img_src_d = `${v.thumbail}&thumb=true`;
              }
              $("grider_viewer").append(
                `<project  data-category="${window.btoa(
                  v?.category
                )}" ${thi}id-int="${div_not_i}" title="${
                  v?.title
                }"> <grider_box> <p><span>${
                  v.title
                }</span></p> ${p_open}<fiv><i onclick="welcomer.blogloader(${
                  v.id
                });" class="bi bi-info-circle" title="Go to blog post..."></i></fiv> <img loading="lazy" ${thi}ondragstart="return false;" onload="welcomer.loaded_img(this,${div_not_i});" src="${img_src_d}" data-zoom-image="${
                  v.thumbail
                }" alt="${v.title}"> </grider_box> </project>`
              );
              div_not_i++;
            }
          }
        } catch (r) {}
      }
      tt_category_name_false = false;
    });*/
    $("div_header").addClass("ld_completeld_complete2");
    $(ljoader).show();
    $("div_header span").html("Marko Nikolić > Blog");
    $(".F_bi_search").show();
    $("gridder_loader").removeAttr("style");
    $(Vjideo_sjpinner).hide();
  },
  blogljoad_posts: function (arr = []) {
    var arrayr = [];
    var categoryTemp = document.querySelector("div#clavs br_ta");
    var ljoader = document.querySelector("#reaload_page");
    var Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner");
    var div_header = document.querySelector("div_header");
    var clavs = document.getElementById("clavs");
    var div_not_i = 0;
    document.querySelector("gridder_loader").src = "/loader";

    ljoader.style.display = "none";
    Vjideo_sjpinner.style.display = "block";

    var ttt_f = this;
    clavs.style.cssText = "opacity:1;transform:unset;";

    document
      .querySelectorAll("iframe:not(.iframe_mask)")
      .forEach(function (iframe) {
        iframe.style.display = "none";
      });

    categoryTemp.classList.remove("active_scr");

    var grider_viewer = document.querySelector("grider_viewer");
    grider_viewer.style.display = "block";
    grider_viewer.removeAttribute("style");
    grider_viewer.innerHTML = "";

    div_header.classList.remove("ld_completeld_complete");
    window.arr_temp = arr;
    categoryTemp.innerHTML = '<i class="br_ta_funnel bi bi-funnel"></i>';

    arr.forEach(function (v) {
      try {
        for (var i = 0; i < v?.category.length; i++) {
          arrayr.push(v.category[i]);
        }
      } catch (r) {}
      arrayr.forEach(function (x) {
        arrayr[x] = (arrayr[x] || 0) + 1;
      });
      var thi = "class='is_touch'";
      var p_open = "";
      if (v.id !== "") {
        if (v.type) {
          p_open = `<p_open title="Open:/?p=blog&id=${v.id}" onclick="welcomer.blogloader(${div_not_i});">
                      <i class="bi bi-link"></i> Open post
                    </p_open>`;
        } else {
          p_open = `<p_open title="Download:${v.title}" onclick="welcomer.blogloader(${div_not_i});">
                      <i class="bi bi-cloud-arrow-down"></i> Download<br>
                      <i class="bi bi-shield-check"></i> (Secure download)
                    </p_open>`;
        }
      }
      p_open = `<p_open title="Open:/?p=blog&id=${v.id}" onclick="welcomer.blogloader(${v.id});">
                  <i class="bi bi-link"></i> Open post
                </p_open>`;
      if (welcomer.isMobile()) {
        thi = `onclick='welcomer.blogloader(${v.id})'`;
      }
      var img_src_d = `${v.thumbail}`;
      if (!img_src_d.includes("data:")) {
        img_src_d = `${v.thumbail}&thumb=true`;
      }
      var p_image = "";
      if (welcomer.isimagec(v?.category, "image")) {
        p_image = `<p_open class="open_img" data-title="Click for view image in full size" onclick="welcomer.blogloader_img(1073568435);">
                     <i class="bi bi-image-fill"></i> Open image
                   </p_open>`;
      }
      var img_backr = "";
      var display_none = "";
      var project = "";
      const bagdes = [
        {
          name: "text",
          data: "bi bi-file-text-fill",
          is_me: ["p,h1,h2,h3,h4,h5,span,tspan"],
        },
        {
          name: "image",
          data: "bi bi-file-earmark-image-fill",
          is_me: ["img"],
        },
        {
          name: "video",
          data: "bi bi-file-earmark-play-fill",
          is_me: ["video", "video-player-v2"],
        },
        {
          name: "iframe",
          data: "bi bi-file-earmark-richtext-fill",
          is_me: ["iframe"],
        },
      ];
      var bagde_list = "";
      if (v?.page) {
        bagdes.forEach((badge) => {
          let tags = [];
          badge.is_me.forEach((item) => {
            if (item.indexOf(",") !== -1) {
              tags = tags.concat(item.split(","));
            } else {
              tags.push(item);
            }
          });
          tags = tags.map((tag) => tag.trim());
          let found = false;

          tags.forEach((tag) => {
            if (!found && v?.page.indexOf(`<${tag}`) !== -1) {
              bagde_list += `<i class="${badge.data}" ></i>`;
            }
            found = true;
          });
        });
      }

      img_backr = `<i_list>${bagde_list}</i_list><img loading="lazy" ${thi} 
        ondragstart="return false;" 
        onload="welcomer.loaded_img(this,${div_not_i});" 
        src="${img_src_d}" 
        data-zoom-image="${img_src_d}" 
        alt="${v.title}" />`;
      if (v.type == "text") {
        img_backr = `<i_list>${bagde_list}</i_list><div_txt><span>${v?.description}</span></div_txt>`;
        display_none = 'style="display:none;"';
        project = 'class="section_loadet_img"';
      }
       grider_viewer.insertAdjacentHTML(
        "beforeend",
        `<project ${project} data-category="${window.btoa(
          v?.category
        )}" ${thi} id-int="${div_not_i}" title="${v?.title}">
           <grider_box>
             <p><span>${v.title}</span></p>
             ${p_open}
             ${p_image}
             <fiv><i onclick="welcomer.blogloader(${
               v.id
             });" class="bi bi-info-circle" title="Go to blog post..."></i></fiv>
             <img ${display_none} src="${
          welcomer.loader_svg
        }" class="loader_post" height="50" width="50" />
             ${img_backr}
           </grider_box>
         </project>`
      );
      div_not_i++;
      
    });

    var arrayrH = welcomer.remove_duplicates(arrayr);

    var active_scrf_2 = document.createElement("ta_f");
    active_scrf_2.setAttribute("data-title", `Click "All" for open category`);
    active_scrf_2.setAttribute("data-c", arrayrH.length);
    active_scrf_2.innerHTML = `All <span>${welcomer.blogljoad_posts_category_cbc(
      "All"
    )}</span>`;
    active_scrf_2.classList.add("active");
    active_scrf_2.setAttribute("data-category", "All");
    active_scrf_2.onclick = function () {
      welcomer.blogljoad_posts_category(
        active_scrf_2.getAttribute("data-category")
      );
      document.querySelectorAll("div#clavs br_ta ta_f").forEach(function (r) {
        r.classList.remove("active");
      });
      active_scrf_2.classList.add("active");
      welcomer.uBoss({}, "", `/?p=blog`);
    };
    categoryTemp.appendChild(active_scrf_2);

    categoryTemp.insertAdjacentHTML(
      "beforeend",
      `<ta_f data-c="9" data-title="Click &quot;Deviantart&quot;for open All category" data-category="technews">
         <span_t style="font-size:9px !important;font-weight:bold;text-align:center;">
           <blue-warp></blue-warp>Tech/Science News<br>Coming Soon
         </span_t>
       </ta_f>`
    );
    categoryTemp.insertAdjacentHTML(
      "beforeend",
      `<ta_f data-c="9" onclick="welcomer.pages.category_tempator_t('nasa')" data-title="null" data-category="technews" data-feed="nasa" data-scn="nasa">
         <span_t style="font-size:9px !important;font-weight:bold;text-align:center;">
           News from NASA<br>Coming Soon
         </span_t>
       </ta_f>`
    );

    const ta_f_NASA = document.createElement("ta_f");
    const ta_f_NASA_span = document.createElement("span_t");
    ta_f_NASA.setAttribute("data-title", "nasa");
    ta_f_NASA.setAttribute("data-category", "technews");
    ta_f_NASA.setAttribute("data-feed", "nasa");
    ta_f_NASA.setAttribute("data-scn", "nasa");
    ta_f_NASA.addEventListener("click", function () {
      welcomer.pages.category_tempator_t(ta_f_NASA);
    });
    ta_f_NASA_span.style.cssText =
      "font-size:9px !important;font-weight:bold;text-align:center;";
    ta_f_NASA_span.textContent = "News from NASA";
    ta_f_NASA.appendChild(ta_f_NASA_span);

    arrayrH.forEach(function (re) {
      const active_scrf = document.createElement("ta_f");
      active_scrf.setAttribute("data-c", arrayrH.length);
      active_scrf.setAttribute(
        "data-title",
        `Click "${ttt_f.capitalize_str(re)}" for open All category`
      );
      var t = "";
      if (re === "telegram" || re === "Telegram") {
        t = `<i class="bi bi-telegram"></i> `;
      } else if (re === "deviantart" || re === "Deviantart") {
        t = `<i class="fab fa-deviantart"></i> `;
      } else if (re === "video" || re === "Video") {
        t = `<i class="bi bi-film"></i> `;
      } else if (re === "astronomy" || re === "Astronomy") {
        t = `<i class="fas fa-space-shuttle"></i> `;
      }
      active_scrf.innerHTML = `${t}${re}<span>${welcomer.blogljoad_posts_category_cbc(
        re
      )}</span>`;
      active_scrf.setAttribute("data-category", re);
      active_scrf.onclick = function () {
        document
          .querySelectorAll("div#clavs br_ta ta_f")
          .forEach(function (el) {
            el.classList.remove("active");
          });
        document.querySelectorAll("br_ta.sub_cat").forEach(function (element) {
          element.remove();
        });
        document.querySelectorAll("div#clavs br_ta ta_f").forEach(function (r) {
          r.classList.remove("active");
        });
        welcomer.blogljoad_posts_category(
          active_scrf.getAttribute("data-category")
        );
        active_scrf.classList.add("active");
        if (active_scrf.getAttribute("data-category").toLowerCase() !== "all") {
          welcomer.uBoss(
            {},
            "",
            `/?p=blog&c=${active_scrf.getAttribute("data-category")}`
          );
          if (
            active_scrf.getAttribute("data-category").toLowerCase() ===
            "astronomy"
          ) {
            document.querySelector("body").classList.add("active");
          } else {
            document.querySelector("body").removeAttribute("active");
          }
          document
            .querySelector("body")
            .setAttribute(
              "data-category-name",
              active_scrf.getAttribute("data-category")
            );
          welcomer.titleC(
            `Blog > ${active_scrf.getAttribute("data-category")}- Marko Nikolić`
          );
        }
      };
      if (re === "NASA" || re === "nasa") {
        const nasaSpan = document.createElement("span_t");
        active_scrf.setAttribute("data-title", "nasa");
        active_scrf.setAttribute("data-category", "technews");
        active_scrf.setAttribute("data-feed", "nasa");
        active_scrf.setAttribute("data-scn", "nasa");
        nasaSpan.style.cssText =
          "font-size:9px !important;font-weight:bold;text-align:center;";
        nasaSpan.textContent = "News from NASA";
        active_scrf.appendChild(nasaSpan);
        categoryTemp.appendChild(active_scrf);
      } else {
        categoryTemp.appendChild(active_scrf);
      }
    });

    categoryTemp.classList.remove("active_scr");
    div_header.classList.add("ld_completeld_complete2");
    ljoader.style.display = "block";
    document.querySelectorAll("div_header span").forEach(function (el) {
      el.innerHTML = "Marko Nikolić > Blog";
    });

    document.querySelectorAll(".F_bi_search").forEach(function (el) {
      el.style.display = "block";
    });

    document.querySelectorAll("gridder_loader").forEach(function (el) {
      el.removeAttribute("style");
    });
    Vjideo_sjpinner.style.display = "none";
  },
  
  blogljoad_posts_old: function (arr = []) {
    var arrayr = [],
      categoryTemp = document.querySelector("div#clavs br_ta"),
      ljoader = document.querySelector("#reaload_page"),
      Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
      div_header = document.querySelector("div_header"),
      iframe = document.createElement("iframe"),
      clavs = document.getElementById("clavs"),
      div_not_i = 0,
      div_not = document.querySelector("div_not");
    var imgf = document.createElement("img");
    $(ljoader).hide();
    $(Vjideo_sjpinner).show();
    var ttt_f = this;
    document
      .getElementById("clavs")
      .setAttribute("style", " opacity:1;transform:unset;");
    $("iframe:not(.iframe_mask)").hide();
    categoryTemp.classList.remove("active_scr");
    $("grider_viewer").show().removeAttr("style");
    $("div_header").removeClass("ld_completeld_complete");
    $("grider_viewer").html("");
    window.arr_temp = arr;
    $("div#clavs br_ta").html('<i class="br_ta_funnel bi bi-funnel"></i>');
    arr.forEach(function (v) {
      try {
        for (var i = 0; i < v?.category.length; i++) {
          arrayr.push(v.category[i]);
        }
      } catch (r) {}
      arrayr.forEach(function (x) {
        arrayr[x] = (arrayr[x] || 0) + 1;
      });
      var thi = "class='is_touch'",
        p_open = "";
      if (v.id !== "") {
        if (v.type) {
          p_open = ` <p_open title="Open:/?p=blog&id=${v.id}" onclick="welcomer.blogloader(${div_not_i});" > <i class="bi bi-link"></i> Open post </p_open>`;
        } else {
          p_open = ` <p_open title="Download:${v.title}" onclick="welcomer.blogloader(${div_not_i});" > <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download) </p_open>`;
        }
      }
      p_open = ` <p_open title="Open:/?p=blog&id=${v.id}" onclick="welcomer.blogloader(${v.id});" > <i class="bi bi-link"></i> Open post </p_open>`;
      if (welcomer.isMobile()) {
        thi = `onclick='welcomer.blogloader(${v.id})'`;
      }
      var img_src_d = `${v.thumbail}`;
      if (img_src_d.includes("data:")) {
        img_src_d = `${v.thumbail}`;
      } else {
        img_src_d = `${v.thumbail}&thumb=true`;
      }
      var p_image = ``;
      if (welcomer.isimagec(v?.category, "image")) {
        p_image = `<p_open class="open_img" data-title="Click for view image in full size" onclick="welcomer.blogloader_img(1073568435);"> <i class="bi bi-image-fill"></i> Open image </p_open>`;
      }
      var img_backr = "",
        display_none = "",
        project = "";
      img_backr = `<img loading="lazy" ${thi} 
      ondragstart="return false;" 
      onload="welcomer.loaded_img(this,${div_not_i});" 
      src="${img_src_d}" 
      data-zoom-image="${img_src_d}" 
      alt="${v.title}" />`;
      if (v.type == "text") {
        img_backr = `<div_txt><span>${v.title}</span></div_txt>`;
        display_none = 'style="display:none;"';
        project = 'style=""';
      }
      $("grider_viewer").append(
        `<project   data-category="${window.btoa(
          v?.category
        )}" ${thi}id-int="${div_not_i}" title="${
          v?.title
        }"> <grider_box> <p><span>${
          v.title
        }</span></p> ${p_open}${p_image}<fiv><i onclick="welcomer.blogloader(${
          v.id
        });" class="bi bi-info-circle" title="Go to blog post..."></i></fiv> <img ${display_none} src="${
          welcomer.loader_svg
        }" class="loader_post" height="50" width="50" /> ${img_backr} </grider_box> </project>`
      );
      div_not_i++;
    });
    var arrayrH = welcomer.remove_duplicates(arrayr),
      active_scrf_2 = document.createElement("ta_f");
    active_scrf_2.setAttribute("data-title", `Click "All" for open category`);
    active_scrf_2.setAttribute("data-c", arrayrH.length);
    active_scrf_2.innerHTML = `All <span>${welcomer.blogljoad_posts_category_cbc(
      "All"
    )}</span>`;
    active_scrf_2.setAttribute("class", "active");
    active_scrf_2.setAttribute("data-category", "All");
    active_scrf_2.onclick = function () {
      welcomer.blogljoad_posts_category(
        active_scrf_2.getAttribute("data-category")
      );
      document.querySelectorAll("div#clavs br_ta ta_f").forEach(function (r) {
        r.classList.remove("active");
      });
      active_scrf_2.classList.add("active");
      welcomer.uBoss({}, "", `/?p=blog`);
    };
    $("div#clavs br_ta").append(active_scrf_2);
    $("div#clavs br_ta").append(
      `<ta_f data-c="9" data-title="Click &quot;Deviantart&quot;for open All category" data-category="technews"> <span_t style=" font-size:9px !important;font-weight:bold;text-align:center;"><blue-warp></blue-warp>Tech/Science News<br>Coming Soon</span_t></ta_f>`
    );
    $("div#clavs br_ta").append(
      `<ta_f data-c="9" onclick="welcomer.pages.category_tempator_t('nasa")" data-title="null" data-category="technews" data-feed="nasa"  data-scn="nasa"> <span_t style=" font-size:9px !important;font-weight:bold;text-align:center;" >News from NASA<br>Coming Soon</span_t></ta_f>`
    );

    const ta_f_NASA = document.createElement("ta_f"),
      ta_f_NASA_span = document.createElement("span_t");
    ta_f_NASA.setAttribute("data-title", "nasa");
    ta_f_NASA.setAttribute("data-category", "technews");
    ta_f_NASA.setAttribute("data-feed", "nasa");
    ta_f_NASA.setAttribute("data-scn", "nasa");
    ta_f_NASA.addEventListener("click", () =>
      welcomer.pages.category_tempator_t(ta_f_NASA)
    );
    ta_f_NASA_span.setAttribute(
      "style",
      " font-size:9px !important;font-weight:bold;text-align:center;"
    );
    ta_f_NASA_span.textContent = "News from NASA";
    ta_f_NASA.appendChild(ta_f_NASA_span);
    // $("div#clavs br_ta").append(ta_f_NASA);

    arrayrH.forEach(function (re) {
      const active_scrf = document.createElement("ta_f");
      active_scrf.setAttribute("data-c", arrayrH.length);
      active_scrf.setAttribute(
        "data-title",
        `Click "${ttt_f.capitalize_str(re)}" for open All category`
      );
      var t = "";
      if (re == "telegram" || re == "Telegram") {
        t = `<i class="bi bi-telegram"></i> `;
      } else if (re == "science" || re == "Science") {
      } else if (re == "Scifi" || re == "scifi") {
      } else if (re == "deviantart" || re == "Deviantart") {
        t = ` <i class="fab fa-deviantart"></i> `;
      } else if (re == "video" || re == "Video") {
        t = `<i class="bi bi-film"></i> `;
      } else if (re == "astronomy" || re == "Astronomy") {
        t = `<i class="fas fa-space-shuttle"></i> `;
      } else {
      }
      active_scrf.innerHTML = `${t}${re}<span>${welcomer.blogljoad_posts_category_cbc(
        re
      )}</span>`;
      active_scrf.setAttribute("data-category", re);

      active_scrf.onclick = function () {
        document.querySelectorAll("div#clavs br_ta ta_f").forEach((el) => {
          el.classList.remove("active");
        });
        document.querySelectorAll("br_ta.sub_cat").forEach((element) => {
          element.remove();
        });
        document.querySelectorAll("div#clavs br_ta ta_f").forEach(function (r) {
          r.classList.remove("active");
        });
        welcomer.blogljoad_posts_category(
          active_scrf.getAttribute("data-category")
        );
        active_scrf.classList.add("active");
        if (
          active_scrf.getAttribute("data-category") !== "All" ||
          active_scrf.getAttribute("data-category") !== "all"
        ) {
          welcomer.uBoss(
            {},
            "",
            `/?p=blog&c=${active_scrf.getAttribute("data-category")}`
          );
          if (
            active_scrf.getAttribute("data-category") == "astronomy" ||
            active_scrf.getAttribute("data-category") == "Astronomy"
          ) {
            $("body").addClass("active");
          } else {
            $("body").removeAttr("active");
          }
          document
            .querySelector("body")
            .setAttribute(
              "data-category-name",
              active_scrf.getAttribute("data-category")
            );
          welcomer.titleC(
            `Blog > ${active_scrf.getAttribute("data-category")}- Marko Nikolić`
          );
        }
      };
      /* */
      if (re == "NASA" || re == "nasa") {
        const ta_f_NASA_span = document.createElement("span_t");
        active_scrf.setAttribute("data-title", "nasa");
        active_scrf.setAttribute("data-category", "technews");
        active_scrf.setAttribute("data-feed", "nasa");
        active_scrf.setAttribute("data-scn", "nasa");
        ta_f_NASA_span.setAttribute(
          "style",
          " font-size:9px !important;font-weight:bold;text-align:center;"
        );
        ta_f_NASA_span.textContent = "News from NASA";
        active_scrf.appendChild(ta_f_NASA_span);
        $("div#clavs br_ta").append(active_scrf);
      }
      /* */
      $("div#clavs br_ta").append(active_scrf);
    });
    $("div#clavs br_ta").removeClass("active_scr");
    $("div_header").addClass("ld_completeld_complete2");
    $(ljoader).show();
    $("div_header span").html("Marko Nikolić > Blog");
    $(".F_bi_search").show();
    $("gridder_loader").removeAttr("style");
    $(Vjideo_sjpinner).hide();
  },
  blogljoad: function () {
    const RSS_URL = "/?mnps=blog-rss";
    fetch(RSS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",  
      },
      body: new URLSearchParams({
        what: "blog",
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text(); 
      })
      .then(v => {
       })
      .catch(error => {
        console.error("There was an error with the fetch operation:", error);
      });
     
    const strVElement = document.getElementById("strV");
    if (strVElement) {
      strVElement.remove();
    }
  },
  eronelit_gallery: {
    isImage: async function (url) {
      const regex = /&t=v/i;
      return regex.test(url);
    },
    call_ui: function (json = []) {
      var this2 = welcomer.eronelit_gallery;
      document.querySelector(this2.scrolle.root_scroll).textContent = "";
      var a = json.length,
        v = 1;
      for (var i = 0; i < json.length; i++) {
        var dh = document.createElement("dh"),
          image = document.createElement("img"),
          iframe = document.createElement("iframe"),
          afterSlash = json[i].split("/")[2];
        image.src = json[i];
        if (json[i].includes("&t=v")) {
          json[i] = json[i].replace(
            `${window.portfolio.host}app&id=${window.portfolio.id}&blog=`,
            "/?blog="
          );
        }
        iframe.src = json[i];
        dh.innerHTML = `<dhn>${v}/${a}</dhn>`;
        const regex = /&t=v/i;
        if (!regex.test(json[i])) {
          image.setAttribute("loading", "lazy");
          image.setAttribute("style", "opacity:0;transform:scale(0);");
          image.setAttribute("onload", "$(this).removeAttr('style');");
          dh.setAttribute("data-index", i);
          dh.setAttribute("data-name", afterSlash);
          dh.appendChild(image);
        } else {
          iframe.setAttribute("loading", "lazy");
          iframe.setAttribute("style", "opacity:0;transform:scale(0);");
          iframe.setAttribute("onload", "$(this).removeAttr('style');");
          dh.setAttribute("data-index", i);
          dh.setAttribute("data-name", afterSlash);
          dh.appendChild(iframe);
        }
        document.querySelector(this2.scrolle.root_scroll).appendChild(dh);
        v++;
      }
      document
        .querySelector('section[data-ui-type="slider"]')
        .classList.remove("hidden_omega");
    },
    scrolle: {
      root_scroll: 'section[data-ui-type="slider"] div-echatv',
      dh: 'section[data-ui-type="slider"] div-echatv dh',
    },
    start: function (pr = "") {
      const wlc = this;
      document.body.addEventListener("keydown", function (event) {
        if (event.keyCode == 39) {
          wlc.bundleSuggestedS(1);
        }
        if (event.keyCode == 37) {
          wlc.bundleSuggestedS(-1);
        }
        if (event.keyCode == 32) {
          wlc.bundleSuggestedS(1);
        }
      });
      document.addEventListener("keydown", function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key === "s") {
          event.preventDefault();
        }
        if ((event.ctrlKey || event.metaKey) && event.key === "p") {
          event.preventDefault();
        }
      });
      this.scrollby_h(pr);
    },
    bundleSuggestedS: function (n) {
      var this2 = welcomer.eronelit_gallery;
      const width_fs = document.querySelector(this2.scrolle.dh).offsetWidth;
      if (n == "1") {
        document.querySelector(this2.scrolle.root_scroll).scrollLeft +=
          width_fs;
      } else {
        document.querySelector(this2.scrolle.root_scroll).scrollLeft -=
          width_fs;
      }
      this2.scrolj();
    },
    scrollby_h: function (pr) {
      var this2 = welcomer.eronelit_gallery;
      document.querySelectorAll(this2.scrolle.dh).forEach(function (res) {
        if (pr == res.getAttribute("data-name")) {
          welcomer.eronelit_gallery.byEvent(
            parseInt(res.getAttribute("data-index"))
          );
        }
      });
    },
    alert: function (at) {
      alert(at);
    },
    scroll_event: function () {
      var this2 = welcomer.eronelit_gallery;
      this2.scrolj();
    },
    scrolj: function () {
      var this2 = welcomer.eronelit_gallery;
      const width_fs = document.querySelector(this2.scrolle.dh).offsetWidth;
      const catascrollEchatTv_right = document.querySelector(
          ".catascrollEchatTv_right"
        ),
        catascrollEchatTv = document.querySelector(
          ".catascrollEchatTv:not(.catascrollEchatTv_right)"
        );
      if (
        document.querySelector(this2.scrolle.root_scroll).scrollLeft > width_fs
      ) {
        if (catascrollEchatTv !== null) {
          catascrollEchatTv.setAttribute("style", "transform:scale(1)");
        }
      } else {
        if (catascrollEchatTv !== null) {
          catascrollEchatTv.setAttribute("style", "transform:scale(0)");
        }
      }
      const r = document.querySelector(this2.scrolle.root_scroll);
      if (r.offsetWidth + r.scrollLeft >= r.scrollWidth) {
        catascrollEchatTv_right.setAttribute("style", "transform:scale(0)");
      } else {
        catascrollEchatTv_right.setAttribute("style", "transform:scale(1)");
      }
    },
    byEvent: function (n = 0) {
      $("body").append(n);
      var this2 = welcomer.eronelit_gallery;
      const width_fs = document.querySelector(this2.scrolle.dh).offsetWidth;
      document.querySelector(this2.scrolle.root_scroll).scrollLeft = 0;
      document.querySelector(this2.scrolle.root_scroll).scrollLeft =
        width_fs * n;
    },
    bundleSuggestedS: function (n) {
      var this2 = welcomer.eronelit_gallery;
      const width_fs = document.querySelector(this2.scrolle.dh).offsetWidth;
      if (n == "1") {
        document.querySelector(this2.scrolle.root_scroll).scrollLeft +=
          width_fs;
      } else {
        document.querySelector(this2.scrolle.root_scroll).scrollLeft -=
          width_fs;
      }
      this2.scrolj();
    },
  },
  loader_svg: "/loader",
  galleryNumber: function () {
    var numberall = 0;
    var galleries = window.portfolio.data.gallery.gallery;

    if (Array.isArray(galleries)) {
      for (var i = 0; i < galleries.length; i++) {
        if (Array.isArray(galleries[i]["gallery"])) {
          numberall += galleries[i]["gallery"].length;
        }
      }
    }
    return numberall;
  },
  /*
    "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iVmppZGVvX3NqcGlubmVyIFZqaWRlb19zanBpbm5lcl9jZW50ZXIiIA0KICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogIGhlaWdodD0iNTAiDQogIHdpZHRoPSI1MCINCg0Kdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iDQogICAgd2lkdGg6IDYwcHg7DQogICAgaGVpZ2h0OiA2MHB4Ow0KICAgICANCiI+IA0KPHN0eWxlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHlwZT0idGV4dC9jc3MiPg0KLlZqaWRlb19zanBpbm5lciB7DQogICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7DQogICAgdHJhbnNpdGlvbjogLjNzOw0KICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTsNCiAgICB6LWluZGV4OiAyMzMzMzMzMzsNCiAgICBwb3NpdGlvbjogZml4ZWQ7DQogICAgdG9wOiAzNXB4Ow0KICAgIGxlZnQ6IDM1cHg7DQogICAgbWFyZ2luOiAtMzVweCAwIDAgLTM1cHg7DQogICAgd2lkdGg6IDUwcHg7DQogICAgaGVpZ2h0OiA1MHB4Ow0KICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQNCn0NCg0KLlZqaWRlb19zanBpbm5lciAucGF0aCB7DQogICAgc3Ryb2tlOiB3aGl0ZTsNCiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7DQogICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTsNCiAgICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTsNCiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpKSAhaW1wb3J0YW50Ow0KICAgIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXcgMCAwIDUxMiA1MTIgIWltcG9ydGFudA0KfQ0KDQogDQoNCkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUgew0KICAgIDEwMCUgew0KICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpDQogICAgfQ0KfQ0KDQpAa2V5ZnJhbWVzIHJvdGF0ZSB7DQogICAgMTAwJSB7DQogICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykNCiAgICB9DQp9DQoNCkAtd2Via2l0LWtleWZyYW1lcyBkYXNoIHsNCiAgICAwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDsNCiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDANCiAgICB9DQoNCiAgICA1MCUgew0KICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwOw0KICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1DQogICAgfQ0KDQogICAgMTAwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7DQogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0DQogICAgfQ0KfQ0KDQpAa2V5ZnJhbWVzIGRhc2ggew0KICAgIDAlIHsNCiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMTUwOw0KICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMA0KICAgIH0NCg0KICAgIDUwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7DQogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzUNCiAgICB9DQoNCiAgICAxMDAlIHsNCiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDsNCiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQNCiAgICB9DQp9DQo8L3N0eWxlPg0KPGNpcmNsZSBjbGFzcz0icGF0aCIgY3g9IjI1IiBjeT0iMjUiIHI9IjIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjUiPjwvY2lyY2xlPiA8L3N2Zz4=",*/
  load_gallery: function () {
    welcomer.html.set(
      "#buttons .adiv[adiv_gat='gallery_bundle'] .nnum",
      welcomer.galleryNumber()
    );

    welcomer.load_gallery_j = window.portfolio.data.gallery.gallery;
    return;
  },
  load_gallery_j: [],
  galleryloadT: function () {
    window.top.location.href = "/?p=gallery";
  },
  html: {
    attr: function (id, attr = []) {
      const elm = document.querySelectorAll(id).forEach(function (res) {
        attr.forEach(function (res2) {
          res.setAttribute(res2.attr, res2.value);
        });
      });
    },
    addClass: function (id, className) {
      document.querySelector(id).classList.add(className);
    },
    prepend: function (id, html = "") {
      const HTML_PARSE = function (html) {
        const parser = new DOMParser();
        return parser.parseFromString(`${html}`, "text/html");
      };

      if (id === "document" || id === "window") {
        document.querySelectorAll("*").forEach(function (res) {
          if (html instanceof HTMLElement) {
            res.prepend(html);
          } else {
            res.prepend(HTML_PARSE(html));
          }
        });
      } else if (id === "body") {
        const res = document.body;
        if (html instanceof HTMLElement) {
          res.prepend(html);
        } else {
          res.prepend(HTML_PARSE(html));
        }
      } else {
        const elm = document.querySelectorAll(id).forEach(function (res) {
          if (html instanceof HTMLElement) {
            res.prepend(html);
          } else {
            res.prepend(HTML_PARSE(html));
          }
        });
      }
    },
    append: function (id, html = "") {
      const HTML_PARSE = function (html) {
        const parser = new DOMParser();
        return parser.parseFromString(`${html}`, "text/html");
      };

      if (id === "document" || id === "window") {
        document.querySelectorAll("*").forEach(function (res) {
          if (html instanceof HTMLElement) {
            res.appendChild(html);
          } else {
            res.appendChild(HTML_PARSE(html));
          }
        });
      } else if (id === "body") {
        const res = document.body;
        if (html instanceof HTMLElement) {
          res.appendChild(html);
        } else {
          res.appendChild(HTML_PARSE(html));
        }
      } else {
        const elm = document.querySelectorAll(id).forEach(function (res) {
          if (html instanceof HTMLElement) {
            res.appendChild(html);
          } else {
            res.appendChild(HTML_PARSE(html));
          }
        });
      }
    },
    set: function (id, html = "") {
      try {
        const HTML_PARSE = function (html) {
          const parser = new DOMParser();
          return parser.parseFromString(`${html}`, "text/html");
        };

        if (id === "document" || id === "window") {
          document.querySelectorAll("*").forEach(function (res) {
            // res.innerHTML = html;
            res.textContent = "";
            if (html instanceof HTMLElement) {
              res.appendChild(html);
            } else {
              res.appendChild(HTML_PARSE(html));
            }
          });
        } else {
          const elm = document.querySelectorAll(id).forEach(function (res) {
            res.textContent = "";
            if (html instanceof HTMLElement) {
              res.appendChild(html);
            } else {
              res.appendChild(HTML_PARSE(html));
            }
          });
        }
      } catch (aer) {}
    },
    get: function (id) {
      return document.querySelector(id).textContent;
    },
  },
  galleryload: function () {
    $("gridder_loader").attr("style", "opacity:1");
    welcomer.load_gallery_j = window.portfolio.data.gallery;
    welcomer.galleryloadajax();
    $("html").addClass("anim_djenerated");
    return;
    if (this.load_gallery_j.length > 0) {
      this.galleryloadajax();
    } else {
      fetch("/?mnps=gallery")
      .then(response => response.json())
      .then(res => {
        welcomer.html.set(
          "#buttons .adiv[adiv_gat='gallery_bundle'] .nnum",
          welcomer.galleryNumber()
        );
        welcomer.load_gallery_j = res;
        welcomer.galleryloadajax();
        document.documentElement.classList.add("anim_djenerated");
      });
    }
    welcomer.titleC("Gallery > Marko Nikolić");
  },
  getGalleryByOption(id = 0) {
    // window.portfolio.data.gallery.gallery[0].gallery[0]['ID']
    // window.portfolio.data.gallery.gallery.for
    for (var i = 0; i < window.portfolio.data.gallery.gallery.length; i++) {
      for (
        var ii = 0;
        ii < window.portfolio.data.gallery.gallery[i].gallery.length;
        ii++
      ) {
        const ID = window.portfolio.data.gallery.gallery[i].gallery[ii]["ID"];
        if (ID == id) {
          welcomer.infoVa(ii);
        }
      }
    }
  },
  galleryloadajax: function () {
    if (welcomer.load_gallery_j.length > 0) {
      var ljoader = document.querySelector("#reaload_page"),
        Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
        div_header = document.querySelector("div_header"),
        iframe = document.createElement("iframe"),
        clavs = document.getElementById("clavs"),
        div_not_i = 0,
        div_not = document.querySelector("div_not");
      $(ljoader).hide();
      $(Vjideo_sjpinner).show();
      document
        .getElementById("clavs")
        .setAttribute("style", " opacity:1;transform:unset;");
      $("iframe:not(.iframe_mask)").hide();
      $("grider_viewer").show().removeAttr("style");
      $("div_header").removeClass("ld_completeld_complete");
      $("grider_viewer").addClass("g_gallery");
      $("grider_viewer").html("");
      var gallery = [];
      $("gridder_loader").attr("style", "opacity:1");
      var v = welcomer.load_gallery_j;
      for (var i = 0; i < v.length; i++) {
        var thi = "class='is_touch'",
          p_open = "";
        if (v[i].href !== "") {
          if (v[i].type) {
            p_open = ` <p_open title="Open:${v[i].href}" onclick="welcomer.openWindow(${div_not_i});" > <i class="bi bi-link"></i> Open link </p_open>`;
          } else {
            p_open = ` <p_open title="Download:${v[i].title}" onclick="welcomer.openWindow(${div_not_i});" > <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download) </p_open>`;
          }
        }
        if (welcomer.isMobile()) {
          thi = "onclick='welcomer.openLink(" + div_not_i + ")'";
        }
        $("grider_viewer").append(
          `<project style="transform:scale(0) !important;" ${thi}id-int="${div_not_i}" > <grider_box> <p><span>${v[i].title}</span></p> ${p_open}<fiv><i onclick="welcomer.infoVa(${div_not_i});" class="bi bi-fullscreen" title="Preview image in full size"></i></fiv> <img loading="lazy" ${thi}ondragstart="return false;" onerror="welcomer.loaded_imgPrld_error(this,${div_not_i});" onload="welcomer.loaded_imgPrld(this,${div_not_i});" src="${v[i].img}" data-zoom-image="${v[i].img}" data-real-zoom-image="${v[i].img}" alt="${v[i].title}"> </grider_box> </project>`
        );
        div_not_i++;
      }
      $("gridder_loader").removeAttr("style");
      $("div_header").addClass("ld_completeld_complete2");
      $(ljoader).show();
      $("div_header span").html("Marko Nikolić > Gallery");
      $(".F_bi_search").hide();
      $(Vjideo_sjpinner).hide();
    }
    const params = new URLSearchParams(window.location.search);
    if (params.has("album")) {
      welcomer.blg_history_replace(`/?p=gallery&album=${params.get("album")}`);
      this.lda(params.get("album"));
    } else {
      welcomer.blg_history_replace(`/?p=gallery`);
    }
  },
  loaded_imgPrld_error: function (aer, id = 0) {
    $(`#clavs grider_viewer project[id-int="${id}"]`).remove();
  },
  loaded_imgPrld_f: async function (aer, id = 0) {
    const d = aer;
    try {
      const response = await fetch(d.getAttribute("src"));
      if (!response.ok) {
        throw new Error(":(");
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      d.src = URL.createObjectURL(blob);
      $(aer).parent().parent().removeAttr("style");
      $(aer).removeAttr("onload");
    } catch (error) {
      console.error(":(", error);
    }
  },
  loaded_imgPrldV2: async function (aer, id = 0) {
    $(aer)
      .parent()
      .parent()
      .attr("style", " transform:none;pointer-events:unset;opacity:1;");
    $(aer).removeAttr("onload");
    return;
    const d = aer;
    try {
      const response = await fetch(d.getAttribute("src"));
      if (!response.ok) {
        throw new Error(":(");
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      d.src = URL.createObjectURL(blob);
      $(aer)
        .parent()
        .parent()
        .attr("style", " transform:none;pointer-events:unset;opacity:1;");
      $(aer).removeAttr("onload");
    } catch (error) {
      console.error(":(", error);
    }
  },
  loaded_imgPrld: function (aer, id = 0) {
    this.loaded_imgPrld_f(aer, id);
    return "";
    const d = aer;
    const img = new Image();
    welcomer.urlToBlob(`${d.getAttribute("src")}`).then((blob) => {
      const imgElement = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      const H = aer.getAttribute("data-zoom-image");
      d.src = URL.createObjectURL(blob);
      $(aer).parent().parent().removeAttr("style");
    });
    $(aer).removeAttr("onload");
    return "";
    img.src = img.onload = async function () {
      const H = aer.getAttribute("data-zoom-image");
      d.src = H;
      $(aer).parent().parent().removeAttr("style");
    };
    $(aer).removeAttr("onload");
  },
  isimagec: function (arr = [], what = "image") {
    var is_image = false;
    is_image = arr.indexOf(what) !== -1;
    return is_image;
  },
  projectsload: function () {
    var ljoader = document.querySelector("#reaload_page"),
      Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
      div_header = document.querySelector("div_header"),
      iframe = document.createElement("iframe"),
      clavs = document.getElementById("clavs"),
      div_not_i = welcomer.projects.length,
      div_not = document.querySelector("div_not");
    $(ljoader).hide();
    $(Vjideo_sjpinner).show();
    document
      .getElementById("clavs")
      .setAttribute("style", " opacity:1;transform:unset;");
    $("iframe:not(.iframe_mask)").hide();
    $("grider_viewer").show().removeAttr("style");
    $("div_header").removeClass("ld_completeld_complete");
    $("grider_viewer").html("");
    div_not_i--;
    welcomer.projects.forEach(function (h) {
      var v = welcomer.projects[div_not_i];
      var thi = "class='is_touch'",
        p_open = "";
      if (v.href !== "") {
        if (v.type) {
          p_open = ` <p_open title="Open:${v.href}" onclick="welcomer.openWindow(${div_not_i});" > <i class="bi bi-link"></i> Open link </p_open>`;
        } else {
          p_open = ` <p_open title="Download:${v.title}" onclick="welcomer.openWindow(${div_not_i});" > <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download) </p_open>`;
        }
      }
      if (v?.soon == true) {
        p_open = ` <p_open style="pointer-events:none !important;" title="Download:${v.title}" onclick="welcomer.openWindow(${div_not_i});" > <i class="bi bi-signpost-split"></i> Coming soon </p_open>`;
      }
      if (welcomer.isMobile()) {
        thi = "onclick='welcomer.openLink(" + div_not_i + ")'";
      }
      $("grider_viewer").append(
        `<project ${thi}id-int="${div_not_i}" title="${v.description}"> <grider_box> <p><span>${v.title}</span></p> ${p_open}<fiv><i onclick="welcomer.infoVa(${div_not_i});" class="bi bi-info-circle" title="Preview project image. Detailed preview of the whole project coming soon!"></i></fiv> <img loading="lazy" ${thi}ondragstart="return false;" onload="welcomer.loaded_img(this,${div_not_i});" src="${v.img}" data-titlef="${v.description}" data-zoom-image="${v.img}" alt="${v.title}"> </grider_box> </project>`
      );
      div_not_i--;
    });
    $("div_header").addClass("ld_completeld_complete2");
    $(ljoader).show();
    $("div_header span").html("Marko Nikolić > Projects");
    $(".F_bi_search").show();
    $(Vjideo_sjpinner).hide();
  },
  Gallery_projectsloadV_2: function (r) {
    var lts = window.portfolio.data.gallery.gallery,
      ts = [];
    for (var i = 0; i < lts.length; i++) {
      if (lts[i]["name"] == r) {
        ts = lts[i];
      }
      if (r == "/") {
        ts = lts;
      }
    }
    return ts;
  },
  Gallery_projectsload: function (r = "") {
    var ljoader = document.querySelector("#reaload_page"),
      Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
      div_header = document.querySelector("div_header"),
      iframe = document.createElement("iframe"),
      clavs = document.getElementById("clavs"),
      div_not_i = welcomer.projects.length,
      div_not = document.querySelector("div_not");
    $(ljoader).hide();
    $(Vjideo_sjpinner).show();
    document
      .getElementById("clavs")
      .setAttribute("style", " opacity:1;transform:unset;");
    $("iframe:not(.iframe_mask)").hide();
    $("grider_viewer").show().removeAttr("style");
    $("div_header").removeClass("ld_completeld_complete");
    $("grider_viewer").html("");
    div_not_i--;
    welcomer.projects.forEach(function (h) {
      var v = welcomer.projects[div_not_i];
      var thi = "class='is_touch'",
        p_open = "";
      if (v.href !== "") {
        if (v.type) {
          p_open = ` <p_open title="Open:${v.href}" onclick="welcomer.openWindow(${div_not_i});" > <i class="bi bi-link"></i> Open link </p_open>`;
        } else {
          p_open = ` <p_open title="Download:${v.title}" onclick="welcomer.openWindow(${div_not_i});" > <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download) </p_open>`;
        }
      }
      if (v?.soon == true) {
        p_open = ` <p_open style="pointer-events:none !important;" title="Download:${v.title}" onclick="welcomer.openWindow(${div_not_i});" > <i class="bi bi-signpost-split"></i> Coming soon </p_open>`;
      }
      if (welcomer.isMobile()) {
        thi = "onclick='welcomer.openLink(" + div_not_i + ")'";
      }
      $("grider_viewer").append(
        `<project ${thi}id-int="${div_not_i}" title="${v.description}"> <grider_box> <p><span>${v.title}</span></p> ${p_open}<fiv><i onclick="welcomer.infoVa(${div_not_i});" class="bi bi-info-circle" title="Preview project image. Detailed preview of the whole project coming soon!"></i></fiv> <img loading="lazy" ${thi}ondragstart="return false;" onload="welcomer.loaded_img(this,${div_not_i});" src="${v.img}" data-titlef="${v.description}" data-zoom-image="${v.img}" alt="${v.title}"> </grider_box> </project>`
      );
      div_not_i--;
    });
    $("div_header").addClass("ld_completeld_complete2");
    $(ljoader).show();
    $("div_header span").html("Marko Nikolić > Projects");
    $(".F_bi_search").show();
    $(Vjideo_sjpinner).hide();
  },
  closeMeIamSad: function () {
    if ($('section[data-ui-type="slider"]:not(.hidden_omega)').length > 0) {
      $('section[data-ui-type="slider"]').addClass("hidden_omega");
      $('section[data-ui-type="slider"] div-echatv').html("");
    } else {
      $(
        ".zoomContainer:not(.dont_removme),.zoomer_exit:not(.dont_removme),#helper_id_helper:not(.dont_removme),#helper_id_helper3:not(.dont_removme)"
      ).remove();
    }
    $(" preview_imagem").remove();
    document.querySelectorAll("div_preview").forEach(function (r) {
      r.remove();
    });
  },
  blob: async function (url, $callback) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      $callback(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error fetching blob:", error);
    }
  },
  urlToBlob: async function (url) {
    return url;
  },
  infoVa_img_gallery: function (url) {
    var clickedElement = url;
    welcomer
      .urlToBlob(`${$(clickedElement).attr("data-zoom-image")}`)
      .then((blob) => {
        const ImagePreview_src = document.createElement("image-preview");
        ImagePreview_src.src(blob);
        document.body.appendChild(ImagePreview_src);
      });
    return;
    var imgH = new Image();
    welcomer
      .urlToBlob(`${$(clickedElement).attr("data-zoom-image")}`)
      .then((blob) => {
        const imgElement = document.createElement("img");
        imgH.src = blob;
      });
    imgH.onload = function () {
      $(imgH).ezPlus({ zoomType: "inner", containLensZoom: true, speed: 10 });
    };
    $("body div#helper_id_helper3,preview_imagem").remove();
    $("body").append(
      ` <preview_imagem style=" position:fixed;left:0px;width:100%;height:100%;z-index:339;display:flex;align-content:center;align-items:center;justify-content:center;top:0px;"><img alt="loading" src="${welcomer.loader_svg}"></preview_imagem> <div id="helper_id_helper3"> <p>To view a Zoomed Image or Element. Hold left click or finger and move slowly.</p> </div><span id="helper_id_helper"><i style="padding-right:2px;" class="bi bi-info-square"></i> For close click ( X ) button.</span><i onclick="welcomer.closeMeIamSad()" class="bi bi-x-lg zoomer_exit"></i>`
    );
  },
  callGalleryBID(ID) {
    const checkImage = function (url, callback) {
      const img = new Image();
      img.setAttribute("data-zoom-image", url);
      img.src = url;
      img.onload = () => callback(true, img, url);
      img.onerror = () => callback(false, img, url);
    };
    window.portfolio.data.gallery.gallery.forEach(function (v1) {
      v1.gallery.forEach(async function (v2) {
        if (v2["ID"] == ID) {
          const gallery_name = v1["name"];
          //welcomer.pages.gallery.lda(gallery_name);

          welcomer.blg_history_replace(
            `/?p=gallery&album=${gallery_name}&id=${ID}`
          );
          await welcomer.pages.start_page("gallery");
          await welcomer.pages.gallery.lda(gallery_name);
          await checkImage(v2["img"], (res, img, url) => {
            if (res) {
              welcomer.infoVa_img_gallery(img);
            } else {
              welcomer.pages.gallery.call_video_gallery_Preview(url);
            }
            welcomer.blg_history_replace(
              `/?p=gallery&album=${gallery_name}&id=${ID}`
            );
          });
        }
      });
    });
  },
  infoVa: function (h = 0, type = "image") {
    const imgH = new Image(),
      params = new URLSearchParams(window.location.search);
    if (
      document.querySelector(`project[id-int='${h}']`).hasAttribute("id-img")
    ) {
      var id = $(`project[id-int='${h}']`).attr("id-img");
      id = id.replace("uit-", "");
      if (params.has("album")) {
        welcomer.blg_history_replace(
          `/?p=gallery&album=${params.get("album")}&id=${id}`
        );
      }
    }
    if (
      $(`project[id-int='${h}']`).find('i[data-i-type="video"]').length ||
      $(`project[id-int='${h}']`).find('i[data-i-type="video_post"]').length
    ) {
      welcomer.pages.gallery.call_video_gallery_Preview(
        `${$(`project[id-int="${h}"] img`).attr("data-zoom-image")}`,
        `${$(`project[id-int="${h}"] img`).attr("data-real-zoom-if_video")}`
      );
    } else {
      welcomer.infoVa_img_gallery($(`project[id-int="${h}"] img`));
    }
  },
  openWindow: function (i = 0) {
    if (this.projects[i].href !== "") {
      const urls = this.projects[i].href;
      // window.location.href = urls;
      
      if (
        urls.includes(".rar") ||
        urls.includes(".zip") ||
        urls.includes(".exe")
      ) {
        fetch(urls)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = url.replace(`blob:${window.location.origin}/`, "") + ".rar";
          a.click();
          window.URL.revokeObjectURL(url);
        });
      } else {
        window.top.location.href = urls;
        return;
      }
    }
  },
  openLink: function (kk) {
    $("project").find("p_open").removeAttr("style");
    $(`project[id-int="${kk}"]`)
      .find("p_open")
      .attr("style", "top:45px !important;opacity:1 !important;");
  },
  loaded_img: function (aer, id = 0) {
    const projects_afe = document.querySelector(
      `#clavs grider_viewer project[id-int="${id}"]`
    );
    if (projects_afe) {
      // document.querySelector(`#clavs grider_viewer project[id-int="${id}"]`).classList.add("section_loadet_img");
      projects_afe.classList.add("section_loadet_img");
    }
    this.toblob(aer);
    // $(aer).removeAttr("onload");
    //if(document.querySelector(aer)){
    // document.querySelector(aer).removeAttribute("onload");
    aer.removeAttribute("onload");
    // }
  },
  start_v2: function (j) {
    this.constructor();
    document
      .querySelector("gridder_loader img")
      .setAttribute("onload", "welcomer.loading_t(this)");
    if (!this.isChrome) {
    }
    if (document.querySelector("iframe")) {
      document.querySelector("iframe").addEventListener("load", function () {});
    }
    this.load_gallery();
    document.querySelectorAll("script").forEach(function (v) {
      try {
      } catch (v) {}
    });
    if (document.getElementById("clavs")) {
      document
        .getElementById("clavs")
        .setAttribute("style", "transform:translateY(-100%);");
    }
    this.url_params();
    this.generateGrid();
  },
  bell_over: function (h) {
    document.querySelector("#logo_backscr_img").classList.add("activeBell");
    const canvas = document.querySelector("#canvas");
    const wallpaperVideo = document.querySelector(".wallpaperVideo");
    if (this.conf.black) {
      if (this.isChrome) {
        canvas.style.cssText = "opacity:1;transform:rotate(45deg) scale(2);";
        wallpaperVideo.style.cssText =
          "opacity:1;transform:rotate(45deg) scale(2);";
      } else {
        canvas.style.cssText = "opacity:1;transform:rotate(45deg) scale(2);";
        wallpaperVideo.style.cssText =
          "opacity:1;transform:rotate(45deg) scale(2);";
      }
    } else {
      if (this.isChrome) {
        canvas.style.cssText =
          "opacity:1;-webkit-filter:url('#shadowed-goo') !important;filter:url('#shadowed-goo') !important;transform:rotate(45deg) scale(2);";
        wallpaperVideo.style.cssText =
          "opacity:1;-webkit-filter:url('#shadowed-goo') !important;filter:url('#shadowed-goo') !important;transform:rotate(45deg) scale(2);";
      } else {
        canvas.style.cssText =
          "opacity:1;-webkit-filter:unset !important;filter:unset !important;transform:rotate(45deg) scale(2);";
        wallpaperVideo.style.cssText =
          "opacity:1;-webkit-filter:unset !important;filter:unset !important;transform:rotate(45deg) scale(2);";
      }
    }
  },
  bell_out: function (o) {
    document.querySelector("#logo_backscr_img").classList.remove("activeBell");
    const canvas = document.querySelector("#canvas");
    const wallpaperVideo = document.querySelector(".wallpaperVideo");
    canvas.removeAttribute("style");
    wallpaperVideo.removeAttribute("style");
  },
  hide: function (elem) {
    document.querySelectorAll(elem).forEach(function (v) {
      v.classList.remove("show");
      v.classList.add("hide");
    });
  },
  show: function (elem) {
    document.querySelectorAll(elem).forEach(function (v) {
      v.classList.remove("hide");
      v.classList.add("show");
    });
  },
  loadorNot: function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("p");
    var myrls = false;
    if (myParam) {
      this.yesurls.forEach(function (v) {
        if (v == myParam) {
          myrls = true;
        }
        if (v == myParam.includes("blog")) {
          myrls = true;
        }
      });
      if (myrls) {
        this.energyAnim = false;
        $("html").addClass("anim_djenerated");
      } else {
        welcomer.blg_history_replace(`${window.location.origin}`);
        this.energyAnim = true;
        $("html").removeClass("anim_djenerated");
        $("#clavs").attr("style", "transform:translateY(-100%);");
        welcomer.loop_active = true;
        $("iframe:not(.iframe_mask)").attr("src", "");
        $("iframe:not(.iframe_mask)").removeAttr("style");
      }
    }
  },
  url_aprams: function (key = "") {
    const params = new URLSearchParams(window.location.search);
    let rv;
    if (params.has(key)) {
      rv = params.get(key);
    } else {
      rv = null;
    }
    return rv;
  },
  run: function () {
    if (!document.querySelector("body")) {
      const BODY_V = document.createElement("body");
      BODY_V.setAttribute("style", "opacity:0;");
      document.querySelector("html").appendChild(BODY_V);
    }
    this.offline_data.start();
    this.start(document.querySelector("body"));
  },
  gf: function (call) {
    fetch(`${window.location.origin}/feed`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.stmp}`,
      },
      body: JSON.stringify({
        type: "f",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.portfolio = data;
        window.portfolio.data.blog.forEach(function (blog) {
          welcomer.offline_data.update(
            welcomer.offline_data.noDB(),
            "blog",
            blog["id"],
            blog
          );
        });
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  },
  offline_data: {
    noDB: function () {
      return {
        dbName: "markonikolic98_data",
        version: 3,
        stores: [
          {
            name: "fulldata",
            keyPath: "no",
            autoIncrement: true,
            indexes: [],
          },
          {
            name: "blog",
            keyPath: "id",
            autoIncrement: true,
            indexes: [
              { name: "id", keyPath: "blog", unique: true },
              { name: "category", keyPath: "category", unique: false },
              { name: "gallery", keyPath: "gallery", unique: false },
              { name: "keywords", keyPath: "blog", unique: false },
              { name: "page", keyPath: "html", unique: false },
              { name: "shared_links", keyPath: "links", unique: false },
              { name: "source", keyPath: "url", unique: true },
              { name: "thumbail", keyPath: "gallery", unique: false },
              { name: "time", keyPath: "filter", unique: false },
              { name: "title", keyPath: "blog", unique: false },
            ],
          },
          {
            name: "gallery",
            keyPath: "name",
            autoIncrement: true,
            indexes: [
              { name: "name", keyPath: "gallery", unique: true },
              { name: "live", keyPath: "gallery", unique: false },
              { name: "gallery", keyPath: "gallery", unique: false },
            ],
          },
        ],
      };
    },
    update: function (db, table, userId, updatedData) {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([table], "readwrite"),
          objectStore = transaction.objectStore(table),
          updatedUser = { ...updatedData, id: userId },
          request = objectStore.put(updatedUser);
        request.onsuccess = () => {
          resolve();
        };
        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    },
    build: function () {
      const dbConfig = this.noDB();
      return new Promise(function (resolve, reject) {
        const request = indexedDB.open(dbConfig.dbName, dbConfig.version);
        request.onupgradeneeded = (event) => {
          const db = event.target.result;

          dbConfig.stores.forEach(function (store) {
            if (!db.objectStoreNames.contains(store.name)) {
              const objectStore = db.createObjectStore(store.name, {
                keyPath: store.keyPath,
                autoIncrement: store.autoIncrement,
              });
              if (store.indexes) {
                store.indexes.forEach((index) => {
                  objectStore.createIndex(index.name, index.keyPath, {
                    unique: index.unique,
                  });
                });
              }
            }
          });
        };
        request.onsuccess = (event) => {
          const db = event.target.result;
          resolve(db);
        };
        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    },
    start: function () {
      this.build();
    },
  },
  editor: {
    editor_fail_message: function (aet) {
      var id_mask = document.createElement("id_mask"),
        spanf = document.createElement("spanf"),
        br = document.createElement("br"),
        img = document.createElement("img"),
        span = document.createElement("span"),
        baer_ = document.createElement("a");
      img.src = "/?svc=logo_plain";
      img.id = "logo_edi";
      img.loading = "lazy";
      baer_.innerHTML = '<i class="bi bi-house"></i> Go home page';
      spanf.appendChild(img);
      spanf.appendChild(br);
      span.innerHTML = `<i class="bi bi-window-fullscreen"></i> Editor is not supported for<br>small screens!<br>`;
      span.appendChild(baer_);
      spanf.appendChild(span);
      baer_.href = "/";
      baer_.setAttribute("target", "_top");
      baer_.setAttribute("data-title", "Go home page");
      id_mask.appendChild(spanf);
      $(" div#clavs span").html("Marko Nikolić > Editor");
      $(".btns_r_editor_right i").hide();
      $("div#clavs i.close_btnf").attr(
        "onclick",
        "window.location.href = '/';"
      );
      $(aet).append(id_mask);
    },
    close: function () {
      var msg_title =
        "Are you sure to close? Your work is auto-saved on your machine.";
      welcomer.hmm(msg_title, function () {
        welcomer.blg_history_replace("/");
        welcomer.titleC("Marko Nikolić");
        $("#clavs").attr("style", "transform:translateY(-100%);");
        welcomer.loop_active = true;
        $("section[data-ui-type='editor']").addClass("hidden_omega");
        $("iframe:not(.iframe_mask)").removeAttr("style");
        $("html").removeClass("anim_djenerated");
        welcomer.energyAnim = true;
      });
    },
    screenshoot: function (screenshotTarget) {
      html2canvas(screenshotTarget).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        window.location.href = base64image;
      });
    },
    d: function () {
      return;
      var blob = new Blob([welcomer.editor.editr_tijemp], {
        type: "text/html",
      });
      var blobUrl = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${blobUrl}.html`;
      link.click();
    },
    webDb: {
      dbName: "marko_portfolio_editor",
      request: null,
      storeName: "projects",
      projects: null,
      objectStore: null,
      transaction: null,
      version: 2,
      index: 0,
      specific_id: null,
      specific: {},
      data: [],
      db: null,
      success: {
        edit: function (k = 0) {},
        add: function (k = 0) {},
        remove: function (k = 0) {},
      },
      str_to_mb: function () {
        const str = welcomer.editor.editr_tijemp;
        const bytes = new TextEncoder().encode(str).length;
        const kilobyte = 1024;
        const megabyte = kilobyte * 1024;
        const gigabyte = megabyte * 1024;
        if (bytes >= gigabyte) {
          return (bytes / gigabyte).toFixed(2) + " GB";
        } else if (bytes >= megabyte) {
          return (bytes / megabyte).toFixed(2) + " MB";
        } else if (bytes >= kilobyte) {
          return (bytes / kilobyte).toFixed(2) + " KB";
        } else {
          return bytes + " Bytes";
        }
      },
      edit: function (dataF = { id: 0, name: "", time: "", code: "" }) {
        var transaction = this.db.transaction([this.storeName], "readwrite");
        var objectStore = transaction.objectStore(this.storeName);
        var getRequest = objectStore.get(
          Number(welcomer.editor.getParams("id"))
        );
        getRequest.onsuccess = function (event) {
          var data = getRequest.result;
          if (data) {
            data.data = dataF;
            var updateRequest = objectStore.put(data);
            updateRequest.onsuccess = function (event) {};
            updateRequest.onerror = function (event) {};
          } else {
          }
        };
        getRequest.onerror = function (event) {};
        transaction.oncomplete = function (event) {};
      },
      crindex: function (index) {
        var d = new Date().getFullYear();
        document.cookie = `crindex=${index};expires=Thu,18 Dec ${
          d + 5
        }12:00:00 UTC`;
      },
      add: function (dataF = { id: 0, name: "", time: "", code: "" }) {
        var transaction = this.db.transaction([this.storeName], "readwrite");
        var objectStore = transaction.objectStore(this.storeName);
        var data = { data: dataF };
        var request = objectStore.add(data);
        request.onsuccess = function (event) {
          welcomer.editor.webDb.getAll();
        };
        request.onerror = function (event) {};
        transaction.oncomplete = function (event) {};
      },
      getCurrent(key) {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("p");
        const myParam_id = urlParams.get("id");
        if (myParam !== null) {
          if (myParam == "editor") {
            if (myParam_id !== null) {
              this.specific_id = key;
              var transaction = this.db.transaction(
                [this.storeName],
                "readonly"
              );
              var objectStore = transaction.objectStore(this.storeName);
              var index = objectStore.index("id");
              var getRequest = index.get(key);
              getRequest.onsuccess = function (event) {
                var data = getRequest.result;
                if (data) {
                  welcomer.editor.webDb.specific = data;
                  welcomer.editor.webDb.loadafter(
                    welcomer.editor.webDb.specific,
                    function () {}
                  );
                } else {
                }
              };
              getRequest.onerror = function (event) {};
              transaction.oncomplete = function (event) {};
            }
          }
        }
      },
      loadafter: function (data = {}, call) {
        welcomer.blg_history_replace(`/?p=editor&id=${data.id}`);
        welcomer.editor.edtr.setValue(`${data.data.code}`);
        call();
      },
      getAll: function () {
        var transaction = this.db.transaction([this.storeName], "readonly");
        var cursorRequest = transaction.objectStore(this.storeName).getAll();
        cursorRequest.onsuccess = function (event) {
          var cursor = event.target.result;
          if (cursor) {
            welcomer.editor.webDb.data = cursor;
            const urlParams = new URLSearchParams(window.location.search);
            const myParam = urlParams.get("p");
            const myParam_id = urlParams.get("id");
            if (myParam !== null) {
              if (myParam == "editor") {
                if (myParam_id !== null) {
                  welcomer.editor.webDb.getCurrent(myParam_id);
                }
              }
            }
          } else {
          }
        };
        cursorRequest.onerror = function (event) {};
      },
      remove: function (id = 0) {},
      start: function () {
        const webDb = welcomer.editor.webDb;
        this.request = indexedDB.open(this.dbName, this.version);
        this.request.onerror = function (event) {};
        this.request.onsuccess = function (event) {
          webDb.db = event.target.result;
          welcomer.editor.webDb.getAll();
        };
        this.request.onupgradeneeded = function (event) {
          var db = event.target.result;
          var objectStore = db.createObjectStore(webDb.storeName, {
            keyPath: "id",
            autoIncrement: true,
          });
          objectStore.createIndex("id", "id", { unique: false });
          objectStore.createIndex("name", "name", { unique: false });
          objectStore.createIndex("time", "time", { unique: false });
          objectStore.createIndex("code", "code", { unique: false });
          objectStore.createIndex("thumbail", "thumbail", { unique: false });
        };
      },
    },
    load_menu_bar: function () {
      const edimls = document.querySelector(
        'section[data-ui-type="editor"] editor-history-rp'
      );
      if (edimls.hasAttribute("style")) {
        edimls.removeAttribute("style");
        edimls.innerHTML = "";
        return false;
      }
      welcomer.editor.webDb.getAll();
      edimls.innerHTML = `<if_div ><p>New +</p></if_div>`;
      document.querySelector(
        `section[data-ui-type="editor"] editor-history-rp if_div:first-child`
      ).onclick = function () {};
      welcomer.editor.webDb.data.forEach(function (res) {
        var rs = res.data.code;
        if (rs.length > 0) {
          const if_div = document.createElement("if_div"),
            peview = document.createElement("iframe"),
            p = document.createElement("p");
          peview.src =
            "data:text/html;charset=utf-8," + encodeURIComponent(res.data.code);
          p.innerHTML = "Click for edit.";
          peview.classList.add("preview_dom");
          peview.setAttribute("data-id", res.id);
          if_div.onclick = function () {
            welcomer.editor.edtr.setValue(res.data.code);
            welcomer.blg_history_replace(`/?p=editor&id=${res.id}`);
            edimls.removeAttribute("style");
          };
          edimls.setAttribute("data-title", "Load code");
          if_div.appendChild(peview);
          if_div.appendChild(p);
          edimls.appendChild(if_div);
          setTimeout(function () {
            preview.setAttribute(
              "style",
              "position:unset !important;height:131px !important;pointer-events:none !important;"
            );
          }, 100);
        }
      });
      edimls.setAttribute("style", "transform:none");
    },
    cdn: `https://${window.CDN_URL}/node_modules/monaco-editor@0.45.0/min/`,
    callEditor_r_h: function () {
      window.location.href = "/?p=editor";
    },
    callEditor_r: function () {
      this.start();
      welcomer.blg_history_replace(`/?p=editor`);
    },
    start: function () {
      this.call_nav();
      if (document.body.offsetWidth < 601) {
        $("editor-wrapper").html("");
        welcomer.editor.editor_fail_message("editor-wrapper");
      } else {
        this.callEditor();
        this.webDb.start();
      }
      $('section[data-ui-type="editor"]').removeClass("hidden_omega");
      $("div#clavs").attr("style", "opacity:1;");
    },
    startfV: function () {
      // window.top.location.href = "/?p=editor";
    },
    startf: function () {
      this.call_nav();
      this.callEditor();
      this.webDb.start();
      welcomer.blg_history_replace(`/?p=editor`);
      $('section[data-ui-type="editor"]').removeClass("hidden_omega");
      $("div#clavs").attr("style", "opacity:1;");
    },
    call_nav_conf: [
      {
        title: "Undo",
        icon: "bi bi-arrow-left-short editor_btns undo",
        href: { f_u: false, f: true, target: "blank" },
        num: 0,
        beta: false,
        soon: false,
      },
      {
        title: "Redo",
        icon: "bi bi-arrow-right-short editor_btns redo ",
        href: { f_u: "welcomer.cp();", f: true, target: "blank" },
        num: 0,
        beta: false,
        soon: false,
      },
      {
        title: "Download as html file",
        icon: "bi bi-file-earmark-arrow-down celvon",
        href: {
          f_u: function () {
            welcomer.editor.d();
          },
          f: true,
          target: "blank",
        },
        num: 0,
        beta: false,
        soon: false,
      },
      {
        title: "Your work history - Your projects!",
        icon: "bi bi-clock-history",
        href: {
          f_u: function () {
            welcomer.editor.load_menu_bar(this);
          },
          f: true,
          target: "blank",
        },
        num: 0,
        beta: false,
        soon: false,
      },
      {
        title: "Share Editor page",
        icon: "bi bi-share",
        href: {
          f_u: function () {
            welcomer.share();
          },
          f: true,
          target: "blank",
        },
        num: 0,
        beta: false,
        soon: false,
      },
      {
        title:
          "Close Editor|Don't worry your work is auto saved on your machine!",
        icon: "bi bi-x-lg close_btnf",
        href: {
          f_u: function () {
            welcomer.editor.close();
          },
          f: true,
          target: "blank",
        },
        num: 0,
        beta: false,
        soon: false,
      },
    ],
    call_nav: function () {
      const m_down = document.querySelector("btns_r.btns_r_editor_right");
      m_down.textContent = "";
      this.call_nav_conf.forEach(function (res) {
        var i = document.createElement("i");
        i.setAttribute("class", res.icon);
        i.addEventListener("click", function () {
          try {
            res.href.f_u();
          } catch (ra) {}
        });
        i.setAttribute("data-title", res.title);
        i.setAttribute("title", res.title);
        m_down.appendChild(i);
      });
    },
    EditorWrapper: class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const container = document.createElement("div"),
          resizer = document.createElement("div"),
          bar_f = document.createElement("div"),
          iframe = document.createElement("iframe");
        iframe.id = "preview-container";
        (container.id = "editor-container"),
          this.shadowRoot.appendChild(container);
        this.shadowRoot.appendChild(resizer);
        this.shadowRoot.appendChild(iframe);
        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = `${welcomer.editor.cdn}vs/editor/editor.main.css`;
        this.shadowRoot.appendChild(styleLink);
        container.addEventListener("resize", function () {
          welcomer.editor.edtr.layout();
        });
        const loaderScript = document.createElement("script");
        loaderScript.setAttribute("nonce", window.stmp);
        loaderScript.src = `https://unpkg.com/monaco-editor@latest/min/vs/loader.js`;
        loaderScript.onload = this.initEditor.bind();
        this.shadowRoot.appendChild(loaderScript);
      }
      initEditor() {
        require.config({ paths: { vs: `${welcomer.editor.cdn}vs` } });
        require(["vs/editor/editor.main"], () => {
          const editorContainer =
            this.shadowRoot.getElementById("editor-container");
          const editor = monaco.editor.create(editorContainer, {
            value: `<!DOCTYPE html> <html> <head> <title>Hello World!</title> <meta name="viewport" content="width=device-width,initial-scale=1"> </head> <body> <!--- Hello world ---> </body> </html>`,
            language: "html",
            theme: "vs-dark",
          });
          welcomer.editor.edtr = editor;
          window.addEventListener("resize", function () {
            welcomer.editor.edtr.layout();
          });
          function updatePreview() {
            var previewFrame = document.getElementById("preview-container");
            var previewContent = ` <!DOCTYPE html> <html> <head> <title>Hello World!</title> <meta name="viewport" content="width=device-width,initial-scale=1"> </head> <body> ${editor.getValue()}</body> </html> `;
            previewFrame.src =
              "data:text/html;charset=utf-8," +
              encodeURIComponent(previewContent);
            try {
              document.querySelector(
                `editor-history-rp iframe.preview_dom[data-id="${welcomer.editor.getParams(
                  "id"
                )}"]`
              ).src =
                "data:text/html;charset=utf-8," +
                encodeURIComponent(previewContent);
            } catch (a) {}
          }
          editor.onDidChangeModelContent(function () {
            updatePreview();
          });
          updatePreview();
        });
      }
    },
    edtr: null,
    edtr_id: 0,
    editr_tijemp: "",
    editr_history: [],
    time: function () {
      const time = new Date();
      return `${time.toLocaleDateString()}${time.toLocaleTimeString()}`;
    },
    getParams: function (name = "") {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    },
    EditorWrappers: { main: {}, tabs: [{}], html: {}, css: {}, javascript: {} },
    editor: {
      test_stijart: function () {
        var main = document.createElement("editor_wrapperv2"),
          tabs = document.createElement("div_tabs"),
          tabs_tab = document.createElement("div"),
          tabs_contentBox = document.createElement("div"),
          tab1 = document.createElement("div"),
          tab2 = document.createElement("div"),
          tab3 = document.createElement("div"),
          tabs1 = document.createElement("tab"),
          tabs2 = document.createElement("tab"),
          tabs3 = document.createElement("tab");
        tabs_contentBox.appendChild(tabs1);
        tabs_contentBox.appendChild(tabs2);
        tabs_contentBox.appendChild(tabs3);
        this.main({ where: tab1, callback: function () {} });
        tabs.appendChild(tabs_tab);
        main.appendChild(tabs);
      },
      tems: { css: "", html: "", javascript: "" },
      collector: function () {
        var preview_frm = document.querySelector(
            'section[data-ui-type="editor"] iframe#preview-container'
          ),
          previewContent = ` <!DOCTYPE html> <html> <head> <title>Hello World!</title> <meta name="viewport" content="width=device-width,initial-scale=1"> <style nonce="${window.stmp}" > ${this.tems.css}</style> </head> <body> ${this.tems.html}<\script type="text/javascript"\> ${this.tems.javascript}<\/script\> </body> </html> `;
        preview_frm.src =
          "data:text/html;charset=utf-8," + encodeURIComponent(previewContent);
      },
      main: function (t = { where, wht, callback, template: "" }) {
        return;
        if (document.body.offsetWidth < 601) {
          $("editor-wrapper").html("");
          welcomer.editor.editor_fail_message("editor-wrapper");
        } else {
          let editor_f;
          const editor_container = document.createElement("div");
          const shadowRoot = editor_container.attachShadow({ mode: "open" }),
            editor_container_2 = document.createElement("div");
          editor_container_2.style.width = "100%";
          editor_container_2.style.height = "100%";
          shadowRoot.appendChild(editor_container_2);
          const styleLink = document.createElement("link");
          styleLink.rel = "stylesheet";
          styleLink.href = `${welcomer.editor.cdn}vs/editor/editor.main.css`;
          shadowRoot.appendChild(styleLink);
          require.config({
            paths: {
              vs: `https://${window.CDN_URL}/node_modules/monaco-editor@0.45.0/min/vs`,
            },
          });
          if (id < 1) {
            welcomer.editor.editor.tems[
              t.wht
            ] = `<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello World!</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n    <!-- Hello world -->\n    <!-- Click ? for more info! -->\n</body>\n</html>`;
          }
          let typingTimer;
          const typingTimeout = 1000;
          require(["vs/editor/editor.main"], function () {
            var editor = monaco.editor.create(editor_container_2, {
              value: welcomer.editor.editr_tijemp,
              language: "html",
              theme: "vs-dark",
              automaticLayout: true,
              cursorStyle: "hidden",
            });
            editor_f = editor;
            buttons.undo.addEventListener("click", function () {
              editor.getModel().undo();
            });
            buttons.redo.addEventListener("click", function () {
              editor.getModel().undo();
            });
            welcomer.editor.edtr = editor;
            document
              .querySelector(
                'section[data-ui-type="editor"] div#editor-container'
              )
              .addEventListener("resize", function () {
                welcomer.editor.edtr.layout();
              });
            window.addEventListener("resize", function () {
              welcomer.editor.edtr.layout();
              if (document.body.offsetWidth < 601) {
                $("editor-wrapper").html("");
                welcomer.editor.editor_fail_message("editor-wrapper");
              }
            });
            function updatePreview() {
              var previewFrame = iframe;
              var previewContent = ` <!DOCTYPE html> <html> <head> <title>Hello World!</title> <meta name="viewport" content="width=device-width,initial-scale=1"> </head> <body> ${editor.getValue()}</body> </html> `;
              previewFrame.src =
                "data:text/html;charset=utf-8," +
                encodeURIComponent(previewContent);
              try {
                document.querySelector(
                  `editor-history-rp iframe.preview_dom[data-id="${welcomer.editor.getParams(
                    "id"
                  )}"]`
                ).src =
                  "data:text/html;charset=utf-8," +
                  encodeURIComponent(previewContent);
              } catch (a) {}
              welcomer.editor.editr_tijemp = editor.getValue();
            }
            if (welcomer.editor.getParams("id") !== null) {
              welcomer.editor.webDb.getCurrent(
                parseInt(welcomer.editor.getParams("id"))
              );
            }
            function onTypingStopped() {
              const urlParams = new URLSearchParams(window.location.search);
              const myParam = urlParams.get("p");
              const myParam_id = urlParams.get("id");
              if (welcomer.editor.webDb.data.length < 1) {
              }
              if (myParam !== null) {
                if (myParam == "editor") {
                  const script = document.createElement("script");
                  script.setAttribute(
                    "src",
                    "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"
                  );
                  document.head.appendChild(script);
                  if (myParam_id == null) {
                    welcomer.editor.edtr_id = 0;
                    welcomer.blg_history_replace(
                      `/?p=editor&id=${welcomer.editor.edtr_id}`
                    );
                    welcomer.editor.webDb.add({
                      id: welcomer.editor.edtr_id,
                      name: "Hello World!!!",
                      time: welcomer.editor.time(),
                      code: welcomer.editor.editr_tijemp,
                    });
                  } else {
                    welcomer.editor.webDb.edit({
                      id: myParam_id,
                      name: "Hello World!!!",
                      time: welcomer.editor.time(),
                      code: welcomer.editor.editr_tijemp,
                    });
                  }
                }
              }
            }
            editor.onDidChangeModelContent(function () {
              clearTimeout(typingTimer);
              typingTimer = setTimeout(onTypingStopped, typingTimeout);
              updatePreview();
            });
            updatePreview();
          });
          where.append(editor_container);
          t.callback(editor);
        }
      },
    },
    makeResizableDiv: function (div) {
      const element = document.querySelector(div);
      const resizers = document.querySelectorAll(div + " .resizer");
      const minimum_size = 20;
      let original_width = 0;
      let original_height = 0;
      let original_x = 0;
      let original_y = 0;
      let original_mouse_x = 0;
      let original_mouse_y = 0;
      for (let i = 0; i < resizers.length; i++) {
        const currentResizer = resizers[i];
        currentResizer.addEventListener("mousedown", function (e) {
          e.preventDefault();
          original_width = parseFloat(
            getComputedStyle(element, null)
              .getPropertyValue("width")
              .replace("px", "")
          );
          original_height = parseFloat(
            getComputedStyle(element, null)
              .getPropertyValue("height")
              .replace("px", "")
          );
          original_x = element.getBoundingClientRect().left;
          original_y = element.getBoundingClientRect().top;
          original_mouse_x = e.pageX;
          original_mouse_y = e.pageY;
          window.addEventListener("mousemove", resize);
          window.addEventListener("mouseup", stopResize);
        });
        function resize(e) {
          if (currentResizer.classList.contains("bottom-right")) {
            const width = original_width + (e.pageX - original_mouse_x);
            const height = original_height + (e.pageY - original_mouse_y);
            if (width > minimum_size) {
              element.style.width = width + "px !important";
            }
            if (height > minimum_size) {
              element.style.height = height + "px";
            }
          } else if (currentResizer.classList.contains("bottom-left")) {
            const height = original_height + (e.pageY - original_mouse_y);
            const width = original_width - (e.pageX - original_mouse_x);
            if (height > minimum_size) {
              element.style.height = height + "px !important";
            }
            if (width > minimum_size) {
              element.style.width = width + "px";
              element.style.left =
                original_x + (e.pageX - original_mouse_x) + "px";
            }
          } else if (currentResizer.classList.contains("top-right")) {
            const width = original_width + (e.pageX - original_mouse_x);
            const height = original_height - (e.pageY - original_mouse_y);
            if (width > minimum_size) {
              element.style.width = width + "px !important";
            }
            if (height > minimum_size) {
              element.style.height = height + "px";
              element.style.top =
                original_y + (e.pageY - original_mouse_y) + "px";
            }
          } else {
            const width = original_width - (e.pageX - original_mouse_x);
            const height = original_height - (e.pageY - original_mouse_y);
            if (width > minimum_size) {
              element.style.width = width + "px !important";
              element.style.left =
                original_x + (e.pageX - original_mouse_x) + "px";
            }
            if (height > minimum_size) {
              element.style.height = height + "px";
              element.style.top =
                original_y + (e.pageY - original_mouse_y) + "px";
            }
          }
        }
        function stopResize() {
          window.removeEventListener("mousemove", resize);
        }
      }
    },
    resize_left: {
      left: function (val, resizer) {
        document
          .querySelector('section[data-ui-type="editor"] editor-wrapper')
          .classList.add("resize_mode");
        $(resizer).attr("style", `left:${val}px !important;`);
        $('section[data-ui-type="editor"] div#editor-container').attr(
          "style",
          `width:${val}px !important;`
        );
        $('section[data-ui-type="editor"] iframe#preview-container').attr(
          "style",
          `width:${$("body").width() - val}px !important;`
        );
      },
      rrsz: false,
    },
    puthtml: function (ifrm, data = "", f = true) {
      if (f) {
        ifrm.contentWindow.document.querySelector("html").innerHTML = `${data}`;
      }
      if (f == false) {
        const scriptc = ` (function(){const originalLog = console.log;const originalError = console.error;const originalError = console.warn;console.log = function(...args){originalLog.apply(console,args);window.parent.welcomer.editor.appendLog({type:'message',message:args.join(' ')},'*');};console.error = function(...args){originalError.apply(console,args);window.parent.welcomer.editor.appendLog({type:'error',message:args.join(' ')},'*');};console.warn = function(...args){originalError.apply(console,args);window.parent.welcomer.editor.appendLog({type:'warning',message:args.join(' ')},'*');};})();`;
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow.document;
        const script = iframeDoc.createElement("script");
        script.type = "text/javascript";
        script.text = scriptc;
        script.setAttribute("nonce", window.stmp);
        iframeDoc.body.appendChild(script);
      }
    },
    isLogging: {
      Typing: false,
      istimeout: null,
      istypingComplete: function () {
        welcomer.editor.isLogging.Typing = true;
      },
    },
    appendLog: (c = { message: "", type: "log" }) => {
      const logElement = document.createElement("div");
      logElement.className = `log ${c.type}`;
      logElement.innerHTML = `<i class="bi bi-info-circle-fill"></i> <log_msg ><span>${c.message}</span> <spant>06:03 07/10/2024</spant> </log_msg>`;
      logContainer.appendChild(logElement);
    },
    clock: function () {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = String(hours).padStart(2, "0");
      const formattedTime = `${hours}:${minutes}:${seconds}${ampm}`;
      return formattedTime;
    },
    appendLogF: (c = { message: "", type: "log" }) => {
      if (c.message !== "") {
        const logElement = document.createElement("div"),
          d = new Date();
        logElement.className = `log ${c.type}`;
        logElement.innerHTML = `<i class="bi bi-info-circle-fill"></i> <log_msg ><span>${
          c.message
        }</span> <spant>${welcomer.editor.clock()}</spant> </log_msg>`;
        logContainer.appendChild(logElement);
      }
    },
    callGallery: function () {
      const data_ui_type = document.querySelector(
          'section[data-ui-type="gallery"] gallery_box'
        ),
        editor_container = document.createElement("div"),
        resizer = document.createElement("div"),
        size_r = document.createElement("size_r"),
        div_resizer = document.createElement("div-sh"),
        divf_ = document.createElement("divf_"),
        logContainer = document.createElement("div"),
        iframe = document.createElement("iframe"),
        buttons = {
          history: "",
          undo: document.querySelector(
            "section[data-ui-type='gallery'] i.editor_btns.undo"
          ),
          redo: document.querySelector(
            "section[data-ui-type='gallery'] i.editor_btns.redo"
          ),
        };
      logContainer.id = "logContainer";
      $(data_ui_type).find("#gallery-container").remove();
      $(data_ui_type).find("iframe").remove();
      editor_container.id = "gallery-container";
      iframe.id = "preview-container";
      resizer.id = "resizer-container";
      iframe.sandbox = "allow-same-origin allow-scripts";
      size_r.setAttribute("style", "display:none;");
      data_ui_type.appendChild(editor_container);
      logContainer.classList.remove("hidden_omega");
      var jsonfs31 = [];
      data_ui_type.classList.remove("hidden_omega");
      document
        .querySelector("div#clavs")
        .setAttribute("style", "transform:none !important;opacity:1;");
    },
    callEditor: function (id = 0) {
      const data_ui_type = document.querySelector(
          'section[data-ui-type="editor"] editor-wrapper'
        ),
        editor_container = document.createElement("div"),
        resizer = document.createElement("div"),
        size_r = document.createElement("size_r"),
        div_resizer = document.createElement("div-sh"),
        divf_ = document.createElement("divf_"),
        logContainer = document.createElement("div"),
        iframe = document.createElement("iframe"),
        buttons = {
          history: "",
          undo: document.querySelector(
            "section[data-ui-type='editor'] i.editor_btns.undo"
          ),
          redo: document.querySelector(
            "section[data-ui-type='editor'] i.editor_btns.redo"
          ),
        };
      logContainer.id = "logContainer";
      $(data_ui_type).find("#editor-container").remove();
      $(data_ui_type).find("iframe").remove();
      editor_container.id = "editor-container";
      iframe.id = "preview-container";
      resizer.id = "resizer-container";
      iframe.sandbox = "allow-same-origin allow-scripts";
      size_r.setAttribute("style", "display:none;");
      resizer.appendChild(div_resizer);
      data_ui_type.appendChild(editor_container);
      data_ui_type.appendChild(resizer);
      data_ui_type.appendChild(size_r);
      var jsonfs31 = [
        {
          icon: "bi bi-grid-3x2-gap",
          name: "All",
          class: "all active",
          f: function () {},
        },
        {
          icon: "bi bi-info-circle-fill",
          name: "Messages",
          class: "info messages",
          f: function () {},
        },
        {
          icon: "bi bi-exclamation-triangle-fill",
          name: "Errors",
          class: "errors",
          f: function () {},
        },
        {
          icon: "bi bi-exclamation-triangle",
          name: "Warnings",
          class: "warnings",
          f: function () {},
        },
        {
          icon: "bi bi-caret-up-fill",
          name: "Open",
          class: "expand",
          f: function (t) {},
        },
      ];
      if (document.querySelectorAll("div#logContainer").length < 1) {
        data_ui_type.appendChild(logContainer);
        jsonfs31.forEach(function (f) {
          var span = document.createElement("span");
          span.setAttribute("class", `${f.class}`);
          span.innerHTML = ` <i class="${f.icon}"></i> ${f.name}`;
          span.addEventListener("click", function () {
            if (f.class == "expand") {
            } else {
              document
                .querySelectorAll("div#logContainer divf_ span")
                .forEach(function (f) {
                  try {
                    if (f.classList.contains("active")) {
                      f.classList.remove("active");
                    }
                  } catch (aer) {}
                });
            }
            if (f.class == "errors") {
              if (span.classList.contains("active")) {
                span.classList.remove("active");
              } else {
                document
                  .querySelectorAll("div#logContainer .log")
                  .forEach(function (f) {
                    $(f).hide();
                  });
                document
                  .querySelectorAll("div#logContainer .log.error")
                  .forEach(function (f) {
                    $(f).show();
                  });
                span.classList.add("active");
              }
            }
            if (
              f.class.includes("info") ||
              f.class.includes("warnings") ||
              f.class.includes("all")
            ) {
              logContainer.classList.add("active");
              document.querySelector(
                "div#logContainer divf_ span.expand"
              ).innerHTML = ` <i class="bi bi-caret-down-fill"></i> Close`;
              if (span.classList.contains("active")) {
                span.classList.remove("active");
              } else {
                span.classList.add("active");
                document
                  .querySelectorAll("div#logContainer .log")
                  .forEach(function (f) {
                    $(f).hide();
                  });
                document
                  .querySelectorAll(`div#logContainer .log.${f.class}`)
                  .forEach(function (f) {
                    $(f).show();
                  });
              }
            }
            if (f.class == "expand") {
              if (logContainer.classList.contains("active")) {
                logContainer.classList.remove("active");
                span.innerHTML = ` <i class="bi bi-caret-up-fill"></i> Open`;
              } else {
                logContainer.classList.add("active");
                span.innerHTML = ` <i class="bi bi-caret-down-fill"></i> Close`;
              }
            }
            if (f.class.includes("all")) {
              span.classList.add("active");
              document
                .querySelectorAll("div#logContainer .log")
                .forEach(function (f) {
                  $(f).show();
                });
            }
          });
          divf_.appendChild(span);
        });
        setTimeout(() => {}, 1000);
        logContainer.appendChild(divf_);
      }
      data_ui_type.appendChild(iframe);
      window.addEventListener("message", (event) => {
        const { type, message } = event.data;
        welcomer.editor.appendLog(message, type);
      });
      window.onresize = function () {
        var aerf =
          $("editor-wrapper").width() -
          $('section[data-ui-type="editor"] iframe#preview-container').width();
        welcomer.trcp(parseInt(aerf));
      };
      const container = resizer;
      function onMouseDrag({ movementX, movementY }) {
        let getContainerStyle = window.getComputedStyle(container);
        let leftValue = parseInt(getContainerStyle.left);
        let topValue = parseInt(getContainerStyle.top);
        container.style.left = `${leftValue + movementX}px`;
        container.style.top = `${topValue + movementY}px`;
      }
      var resizers = document.querySelector("div#resizer-container"),
        pointerArea = document.querySelector("div#resizer-container");
      window.resize_is_active_timeout = null;
      window.resize_is_active = false;
      if (window.addEventListener) {
        window.addEventListener("resize", function (event) {
          $("size_r").show();
          $("size_r").html(
            `<i class="bi bi-rulers"></i> ${$(
              'section[data-ui-type="editor"] iframe#preview-container'
            ).width()}px x ${$(
              'section[data-ui-type="editor"] iframe#preview-container'
            ).height()}px`
          );
          $("div#logContainer").attr(
            "style",
            `width:${$(
              'section[data-ui-type="editor"] iframe#preview-container'
            ).width()}px;`
          );
          if (document.body.offsetWidth < 601) {
            $("editor-wrapper").html("");
            welcomer.editor.editor_fail_message("editor-wrapper");
          }
        });
        resizer.addEventListener("mousedown", function (e) {
          e.preventDefault();
          window.draggable.enabled = true;
          $('section[data-ui-type="editor"] size_r').show();
        });
        resizer.addEventListener("touchstart", function (e) {
          e.preventDefault();
          window.draggable.enabled = true;
          $('section[data-ui-type="editor"] size_r').show();
        });
        window.addEventListener("mousemove", function (e) {
          e.preventDefault();
          if (window.draggable.enabled) {
            welcomer.trcp(parseInt(window.draggable.style_left));
          }
        });
        window.addEventListener("touchmove", function (e) {
          e.preventDefault();
          if (window.draggable.enabled) {
            welcomer.trcp(parseInt(window.draggable.style_left));
          }
        });
        window.addEventListener("mouseup", function (e) {
          e.preventDefault();
          window.draggable.enabled = false;
          $("editor-wrapper").removeClass("active_f");
          $('section[data-ui-type="editor"] size_r').hide();
        });
        window.addEventListener("touchend", function (e) {
          e.preventDefault();
          window.draggable.enabled = false;
          $("editor-wrapper").removeClass("active_f");
          $('section[data-ui-type="editor"] size_r').hide();
        });
      }
      var dragging_ = { enabled: false, left: 0 };
      const shadowRoot = editor_container.attachShadow({ mode: "open" }),
        editor_container_2 = document.createElement("div");
      editor_container_2.style.width = "100%";
      editor_container_2.style.height = "100%";
      shadowRoot.appendChild(editor_container_2);
      const styleLink = document.createElement("link");
      styleLink.rel = "stylesheet";
      styleLink.href = `${welcomer.editor.cdn}vs/editor/editor.main.css`;
      shadowRoot.appendChild(styleLink);
      require.config({
        paths: {
          vs: `https://${window.CDN_URL}/node_modules/monaco-editor@0.45.0/min/vs`,
        },
      });

      if (id < 1) {
        this.editr_tijemp = `<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello World!</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n    <!-- Hello world -->\n    <!-- Click ? for more info! -->\n</body>\n</html>`;
      }
      let typingTimer;
      const typingTimeout = 1000;
      require(["vs/editor/editor.main"], function () {
        var editor = monaco.editor.create(editor_container_2, {
          value: welcomer.editor.editr_tijemp,
          language: "html",
          theme: "vs-dark",
          automaticLayout: true,
          cursorStyle: "hidden",
        });
        let typingTimer;
        const doneTypingInterval = 2000;
        function validateHTML(content) {
          let errors = [];
          const lines = content.split("\n");
          const singleTagPattern = /<([a-zA-Z]+)([^<]*)>/g;
          const closingTagPattern = /<\/([a-zA-Z]+)>/g;
          let singleTags = [];
          lines.forEach((line, index) => {
            let match;
            while ((match = singleTagPattern.exec(line)) !== null) {
              singleTags.push({
                tag: match[1],
                line: index + 1,
                column: match.index + 1,
              });
            }
            while ((match = closingTagPattern.exec(line)) !== null) {
              const tag = match[1];
              const foundTag = singleTags.find((t) => t.tag === tag);
              if (foundTag) {
                singleTags = singleTags.filter((t) => t.tag !== tag);
              } else {
                errors.push({
                  startLineNumber: index + 1,
                  startColumn: match.index + 1,
                  endLineNumber: index + 1,
                  endColumn: match.index + match[0].length,
                  message: `Unmatched closing tag </${tag}>`,
                  severity: monaco.MarkerSeverity.Error,
                });
              }
            }
          });
          singleTags.forEach((tag) => {
            errors.push({
              startLineNumber: tag.line,
              startColumn: tag.column,
              endLineNumber: tag.line,
              endColumn: tag.column + tag.tag.length + 2,
              message: `Unclosed tag <${tag.tag}>`,
              severity: monaco.MarkerSeverity.Error,
            });
          });
          return errors;
        }
        function validateCSS(content) {
          let errors = [];
          const cssParser = new CSSParser();
          const parsedCSS = cssParser.parse(content);
          parsedCSS.errors.forEach((error) => {
            errors.push({
              startLineNumber: error.line,
              startColumn: error.column,
              endLineNumber: error.line,
              endColumn: error.column + error.length,
              message: error.message,
              severity: monaco.MarkerSeverity.Error,
            });
          });
          return errors;
        }
        function validateJavaScript(content) {
          let errors = [];
          const esprima = require("esprima");
          try {
            esprima.parseScript(content, {}, (node, meta) => {});
          } catch (e) {
            errors.push({
              startLineNumber: e.lineNumber,
              startColumn: e.column,
              endLineNumber: e.lineNumber,
              endColumn: e.column + e.description.length,
              message: e.description,
              severity: monaco.MarkerSeverity.Error,
            });
          }
          return errors;
        }
        function updateMarkers() {
          const content = editor.getValue();
          const htmlContent = content.match(/<html>[\s\S]*<\/html>/g)
            ? content.match(/<html>[\s\S]*<\/html>/g)[0]
            : "";
          const cssContent = content.match(/<style>[\s\S]*<\/style>/g)
            ? content
                .match(/<style>[\s\S]*<\/style>/g)[0]
                .replace(/<\/?style>/g, "")
            : "";
          const jsContent = content.match(/<script>[\s\S]*<\/script>/g)
            ? content
                .match(/<script>[\s\S]*<\/script>/g)[0]
                .replace(/<\/?script>/g, "")
            : "";
          const htmlErrors = validateHTML(htmlContent);
          const cssErrors = validateCSS(cssContent);
          const jsErrors = validateJavaScript(jsContent);
          const errors = [...htmlErrors, ...cssErrors, ...jsErrors];
          const model = editor.getModel();
          monaco.editor.setModelMarkers(model, "htmlOwner", errors);
          logErrors(errors);
        }
        function logErrors(errors) {
          $("div#logContainer .log").remove();
          if (errors.length === 0) {
          } else {
            errors.forEach((error) => {
              welcomer.editor.appendLogF({
                message: `Line ${error.startLineNumber},Column ${error.startColumn}:${error.message}`,
                type: "error",
              });
            });
          }
          $("div#logContainer divf_ span.errors").html(
            `<i class="bi bi-exclamation-triangle-fill"></i> Errors ${errors.length}`
          );
        }
        function updateMarkers() {
          const content = editor.getValue();
          const errors = validateHTML(content);
          const model = editor.getModel();
          monaco.editor.setModelMarkers(model, "htmlOwner", errors);
          logErrors(errors);
        }
        editor.onDidChangeModelContent(updateMarkers);
        updateMarkers();
        buttons.undo.addEventListener("click", function () {
          editor.getModel().undo();
        });
        buttons.redo.addEventListener("click", function () {
          editor.getModel().undo();
        });
        welcomer.editor.edtr = editor;
        document
          .querySelector('section[data-ui-type="editor"] div#editor-container')
          .addEventListener("resize", function () {
            welcomer.editor.edtr.layout();
          });
        window.addEventListener("resize", function () {
          welcomer.editor.edtr.layout();
        });
        const appendLog = function (message, type = "log") {
          return "";
          const logElement = document.createElement("div");
          if (type == "log") {
            logElement.setAttribute("class", "log info");
            logElement.innerHTML = `<i class="bi bi-x-circle-fill"></i> <log_msg><span>${message}</span><spant> 06:03 07/10/2024</spant></log_msg>`;
          }
          if (type == "error") {
            logElement.setAttribute("class", "log error");
            logElement.innerHTML = `<i class="bi bi-info-circle-fill"></i> <log_msg><span>${message}</span><spant> 06:03 07/10/2024</spant></log_msg>`;
          }
          if (message !== "") {
            logContainer.appendChild(logElement);
          }
        };
        const originalLog = console.log;
        const originalError = console.error;
        console.log = function (...args) {
          originalLog.apply(console, args);
          appendLog(args.join(" "), "log");
        };
        console.error = function (...args) {
          originalError.apply(console, args);
          appendLog(args.join(" "), "error");
        };
        function logDiagnostics() {
          const model = editor.getModel();
          const markers = monaco.editor.getModelMarkers({
            resource: model.uri,
          });
          markers.forEach((marker) => {
            let logMethod = console.log;
            let type = "Info";
            switch (marker.severity) {
              case monaco.MarkerSeverity.Error:
                logMethod = console.error;
                type = "Error";
                break;
              case monaco.MarkerSeverity.Warning:
                logMethod = console.warn;
                type = "Warning";
                break;
              case monaco.MarkerSeverity.Info:
                logMethod = console.info;
                type = "Info";
                break;
            }
            logMethod(
              `[${type}] Line ${marker.startLineNumber},Column ${marker.startColumn}:${marker.message}`
            );
          });
        }
        function updatePreview() {
          var previewFrame = iframe;
          var previewContent = ` <!DOCTYPE html> <html> <head> <title>Hello World!</title> <meta name="viewport" content="width=device-width,initial-scale=1"> </head> <body> ${editor.getValue()}</body> </html> `;
          welcomer.editor.puthtml(previewFrame, previewContent);
          try {
            welcomer.editor.puthtml(
              document.querySelector(
                `editor-history-rp iframe.preview_dom[data-id="${welcomer.editor.getParams(
                  "id"
                )}"]`
              ),
              previewContent
            );
          } catch (a) {}
          welcomer.editor.editr_tijemp = editor.getValue();
        }
        if (welcomer.editor.getParams("id") !== null) {
          welcomer.editor.webDb.getCurrent(
            parseInt(welcomer.editor.getParams("id"))
          );
        }
        function onTypingStopped() {
          const urlParams = new URLSearchParams(window.location.search);
          const myParam = urlParams.get("p");
          const myParam_id = urlParams.get("id");
          if (welcomer.editor.webDb.data.length < 1) {
          }
          if (myParam !== null) {
            if (myParam == "editor") {
              if (myParam_id == null) {
                welcomer.editor.edtr_id = 0;
                welcomer.blg_history_replace(
                  `/?p=editor&id=${welcomer.editor.edtr_id}`
                );
                welcomer.editor.webDb.add({
                  id: welcomer.editor.edtr_id,
                  name: "Hello World!!!",
                  time: welcomer.editor.time(),
                  code: welcomer.editor.editr_tijemp,
                });
              } else {
                welcomer.editor.webDb.edit({
                  id: myParam_id,
                  name: "Hello World!!!",
                  time: welcomer.editor.time(),
                  code: welcomer.editor.editr_tijemp,
                });
              }
            }
          }
        }
        editor.onDidChangeModelContent(function () {
          clearTimeout(typingTimer);
          typingTimer = setTimeout(onTypingStopped, typingTimeout);
          updatePreview();
        });
        updatePreview();
      });
    },
  },
  blg_history_replace: function (st) {
    welcomer.uBoss(history.state, "", `${st}`);
    $("body").attr("data-url-id", st);
    if (st == "/?p=blog" || st == "?p=blog") {
      $("div#clavs br_ta").addClass("active_scr");
    }
  },
  getParam: function (param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  },
  blgloader: function (id = "") {
    
  },
  pgloader_native: function (d = {}) {
    $("#clavs grider_viewer").removeAttr("style");
    const url = d.url,
      hrl_url = `/?p=${d.url}`,
      urlParams = new URLSearchParams(window.location.search);
    $(".pdf_page_home_btn").hide();
    $(".close_btnf").show();
    $("grider_viewer").removeClass("g_gallery");
    $("div_header span").html(
      $("iframe:not(.iframe_mask)").contents().find("title").html()
    );
    $("#clavs grider_viewer").hide();
    $("div#clavs svg.Vjideo_sjpinner").attr(
      "style",
      "opacity:0;transform:scale(0);"
    );
    $("div_header").removeClass("ld_completeld_complete2");
    $("div_header").addClass("ld_completeld_complete");
    $("div_header").attr("data-url", url);
  },
  pgloader: function (url = "") {
    this.spoiler({
      u: url,
      c: function () {
        if (url.includes("gallery")) {
          welcomer.pages.gallery.call();
          if (welcomer.url_aprams("album")) {
            welcomer.pages.gallery.lda(welcomer.url_aprams("album"));
            return "[>-|-<]";
          }
          return;
        }
        $("#clavs grider_viewer").removeAttr("style");
        try {
          $(".Ignoring_me_iframe.shadow_root").removeClass("open");
        } catch (aer) {}
        $("body").attr("data-url-id", url);
        const urlParams = new URLSearchParams(window.location.search);
        $(".pdf_page_home_btn").hide();
        $(".close_btnf").show();
        $("grider_viewer").removeClass("g_gallery");
        if (url !== "yes") {
          var hrl_url = url.replace("pages", "p");
          if (!url.includes(window.location.origin)) {
            $("div_header").attr("data-url", window.location.origin + hrl_url);
            try {
              welcomer.blg_history_replace(hrl_url);
            } catch (arV) {}
          } else {
            $("div_header").attr("data-url", url);
          }
        }
        welcomer.loop_active = false;
        var ljoader = document.querySelector("#reaload_page"),
          Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
          div_header = document.querySelector("div_header"),
          iframe = document.createElement("iframe"),
          clavs = document.getElementById("clavs");
        document
          .querySelector(".pdf_download")
          .setAttribute("style", "display:none;");
        if (url == "yes") {
          $(ljoader).show();
          $(Vjideo_sjpinner).hide();
          const const_urlParams = new URLSearchParams(window.location.search);
          const const_myParam = const_urlParams.get("p");
          if (const_myParam == "blog") {
            $("#clavs grider_viewer").removeAttr("style");
          } else {
            $("div_header span").html(
              $("iframe:not(.iframe_mask)").contents().find("title").html()
            );
          }
          $("div_header").removeClass("ld_completeld_complete2");
          $("div_header").addClass("ld_completeld_complete");
          var url2 = $("iframe:not(.iframe_mask)").attr("src");
          try {
            if (url2.includes("cv-pdf")) {
              welcomer.blg_history_replace(`/?p=cv-pdf`);
              document
                .querySelector(".pdf_download")
                .setAttribute("style", "display:block;");
              $("#clavs grider_viewer").attr("style", "pointer-events:none;");
            } else {
              document
                .querySelector(".pdf_download")
                .setAttribute("style", "display:none;");
            }
          } catch (res) {
            document
              .querySelector(".pdf_download")
              .setAttribute("style", "display:none;");
          }
          welcomer.loadorNot();
        } else if (url.includes("projects")) {
          $("body").removeAttr("data-hmm");
          welcomer.projectsload();
          $("div_header").attr(
            "data-url",
            window.location.origin + "/?p=projects"
          );
          $("iframe.iframe_mask").removeAttr("style");
          $("div_header span").html("Marko Nikolić > Projects");
          welcomer.blg_history_replace(`/?p=projects`);
          $("html").addClass("anim_djenerated");
          setTimeout(() => {
            $("#clavs grider_viewer").attr(
              "style",
              "padding-top:10px !important;"
            );
          }, 100);
        } else if (url.includes("gallery")) {
          if (welcomer.url_aprams("album")) {
            welcomer.pages.gallery.lda(welcomer.url_aprams("album"));
            return "[>-|-<]";
          }
          $("body").removeAttr("data-hmm");
          welcomer.galleryload();
          $("div_header").attr(
            "data-url",
            window.location.origin + "/?p=Gallery"
          );
          $("iframe.iframe_mask").removeAttr("style");
          $("div_header span").html("Marko Nikolić > Gallery");
          welcomer.blg_history_replace(`/?p=gallery`);
        } else if (
          url.includes("blog.eronelit.com") ||
          url.includes("p=blllog")
        ) {
          $(ljoader).hide();
          $(Vjideo_sjpinner).show();
          $("div_header").removeClass("ld_completeld_complete");
          $("div_header").addClass("ld_completeld_complete2");
          $("body").attr("data-hmm", "ld_completeld_complete3");
          $("div_header span").html("Marko Nikolić > Blog");
          document
            .getElementById("clavs")
            .setAttribute("style", " opacity:1;transform:unset;");
          $("iframe:not(.iframe_mask)").attr("src", url);
          $("iframe:not(.iframe_mask)").attr("data-temp-url", url);
          $("div_header").attr("data-url", window.location.origin + "/?p=blog");
        } else {
          $("body").removeAttr("data-hmm");
          document
            .getElementById("clavs")
            .setAttribute("style", " opacity:1;transform:unset;");
          if (url.includes("?pages=cv-pdf")) {
            $("iframe:not(.iframe_mask)")
              .contents()
              .find("html")
              .html(`${window.portfolio.data.pages.cv_pdf.c2}`);
            welcomer.pgloader_native(window.portfolio.data.pages.cv_pdf);
          }
          if (url.includes("?pages=visitcard")) {
            $("iframe:not(.iframe_mask)")
              .contents()
              .find("html")
              .html(`${window.portfolio.data.pages.visitcard.c}`);
            welcomer.pgloader_native(window.portfolio.data.pages.visitcard);
          }
          if (url.includes("?pages=tg_channel")) {
            welcomer.pgloader_native("<p>Loading...</p>");
            $(".ld_completeld_complete span").html(
              "My Official Telegram channel"
            );
            welcomer.Social.tg.start();
          }
          var ifrm = document.querySelector("iframe:not(.iframe_mask)");
          ifrm.removeAttribute("onload");
          ifrm =
            ifrm.contentWindow ||
            ifrm.contentDocument.document ||
            ifrm.contentDocument;
          var frameDoc = ifrm;
          $("iframe:not(.iframe_mask)").attr("data-temp-url", url);
          $("#clavs grider_viewer,div#clavs br_ta").hide();
          $("iframe.iframe_mask").hide();
          if (url.includes)
            try {
            } catch (v) {}
        }
        if (url.includes("projects")) {
          $("#clavs grider_viewer").hide();
        }
      },
    });
  },
  pgloaderH: function (url = "") {
    var ljoader = document.querySelector("#reaload_page"),
      Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
      div_header = document.querySelector("div_header"),
      iframe = document.createElement("iframe"),
      clavs = document.getElementById("clavs");
    if (url == "yes") {
      $(ljoader).show();
      $(Vjideo_sjpinner).hide();
      $("div_header span").html(
        $("iframe:not(.iframe_mask)").contents().find("title").html()
      );
      $("div_header").removeClass("ld_completeld_complete2");
      $("div_header").addClass("ld_completeld_complete");
      var urlf = $("iframe:not(.iframe_mask)").attr("src");
    } else if (url == "projects") {
      this.projectsload();
    } else {
      document
        .getElementById("clavs")
        .setAttribute("style", " opacity:1;transform:unset;");
      $("iframe:not(.iframe_mask)").attr("src", url);
      $("iframe:not(.iframe_mask)").attr("data-temp-url", url);
    }
  },
  f_blob: function (url = "") {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = handler;
    xhr.responseType = "blob";
    xhr.setRequestHeader("Authorization", "Bearer " + token);
    xhr.send();
    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          var data_url = URL.createObjectURL(this.response);
          $("iframe:not(.iframe_mask)").attr("src", data_url);
        } else {
          console.error("no pdf:(");
        }
      }
    }
  },
  reload_me: function (t = true) {
    var ljoader = document.querySelector("#reaload_page"),
      Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
      div_header = document.querySelector("div_header"),
      iframe = document.createElement("iframe").src;
    $(ljoader).hide();
    $(Vjideo_sjpinner).show();
    $("div_header span").html("Loading...");
    $("div_header").removeClass("ld_completeld_complete");
    if (t) {
      $("iframe:not(.iframe_mask)").attr(
        "src",
        $("iframe:not(.iframe_mask)").attr("data-temp-url")
      );
    }
    $("div_not").removeAttr("style");
    $("#clavs iframe:not(.iframe_mask)").removeAttr("style");
    $("box_h").hide();
  },
  titleC: function (str) {
    $("title").html(str);
  },
  uBoss: function (ar = {}, v = "", url = "") {
    history.replaceState(ar, v, `${url}`);
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("p") || null;
    const myParam_id = urlParams.get("id") || null;
    if (myParam) {
      if (!myParam_id) {
        document.body.setAttribute("data-d", `${myParam}`);
      }
    }
  },
  HcloseF: function () {
    this.hmm("You ", function () {
      welcomer.blg_history_replace("");
      this.titleC("Marko Nikolić");
      $("#clavs").attr("style", "transform:translateY(-100%);");
      welcomer.loop_active = true;
      setTimeout(function () {
        $("iframe:not(.iframe_mask)").attr("src", "");
        $("iframe:not(.iframe_mask)").removeAttr("style");
        $("html").removeClass("anim_djenerated");
      }, 1000);
      welcomer.energyAnim = true;
    });
  },
  HclosePostB: function () {
    var msg_title =
      "Are you sure to close? You are only closing the built-in browser. You do not close the card.";
    msg_title = "Return to Blog Home page?";
    this.hmm(msg_title, function () {
      welcomer.blogloader("all");
    });
    return false;
  },
  colar_system: function () {
    if ($('body[data-category-name="astronomy"]').hasClass("active")) {
      $('body[data-category-name="astronomy"]').removeClass("active");
      $("solar_arrow labelv").html(
        `<i class="bi bi-chevron-double-down"></i><span>Hide posts</span><i class="bi bi-chevron-double-down"></i>`
      );
    } else {
      $("solar_arrow labelv").html(
        `<i class="bi bi-chevron-double-up"></i><span>Show posts</span><i class="bi bi-chevron-double-up"></i>`
      );
      $('body[data-category-name="astronomy"]').addClass("active");
    }
  },
  Hclose: function (aer) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("p");
    const myParam_id = urlParams.get("id");
    var msg_title =
      "Are you sure to close? You are only closing the built-in browser. You do not close the card.";
    const containeds = window.location.href;

    if (containeds.includes("?p=blog&id=")) {
      // welcomer.blg_history_replace("/?p=blog");
      // welcomer.pages.start_page('blog');
      window.top.location.href = "/?p=blog";
    } else {
      welcomer.pages.start_page("home");
    }
  },
  Hclose_oldf: function (aer) {
    $("body").removeAttr("data-category-name");
    $("solar_arrow labelv").html(
      `<i class="bi bi-chevron-double-up"></i><span>Show posts</span><i class="bi bi-chevron-double-up"></i>`
    );
    document
      .querySelector("p-container")
      .setAttribute("class", "shadow_iframe");
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("p");
    const myParam_id = urlParams.get("id");
    var msg_title =
      "Are you sure to close? You are only closing the built-in browser. You do not close the card.";
    var containeds = window.location.href;

    if (containeds.includes("?p=blog&id=")) {
      // welcomer.pages.start_page('blog');
      window.top.location.href = "/?p=blog";
      return false;
    } else {
      welcomer.pages.start_page("home");
    }
    return;
    this.hmm(msg_title, function () {
      $("#clavs").attr("style", "transform:translateY(-100%);");
      welcomer.titleC(`Marko Nikolić`);
      welcomer.blg_history_replace("/");
      welcomer.loop_active = true;
      setTimeout(function () {
        $("iframe:not(.iframe_mask)").attr("src", "");
        $("iframe:not(.iframe_mask)").removeAttr("style");
        $("html").removeClass("anim_djenerated");
      }, 1000);
      return false;
      if (myParam == "blog") {
        if (myParam) {
          welcomer.blogloader("all");
          welcomer.uBoss({}, "", `${window.location.origin}/?p=blog`);
        } else {
          welcomer.uBoss({}, "", `${window.location.origin}`);
          $("#clavs").attr("style", "transform:translateY(-100%);");
          welcomer.loop_active = true;
          setTimeout(function () {
            $("iframe:not(.iframe_mask)").attr("src", "");
            $("iframe:not(.iframe_mask)").removeAttr("style");
          }, 1000);
        }
      } else {
        welcomer.uBoss({}, "", `${window.location.origin}`);
        $("#clavs").attr("style", "transform:translateY(-100%);");
        welcomer.loop_active = true;
        setTimeout(function () {
          $("iframe:not(.iframe_mask)").attr("src", "");
          $("iframe:not(.iframe_mask)").removeAttr("style");
        }, 1000);
      }
    });
  },
  share: function () {
    var hl = $("div_header").attr("data-url");
    if (navigator.share) {
      navigator
        .share({
          title: $("div_header span").text(),
          text: "Shared from - " + window.location.origin,
          url: $("div_header").attr("data-url"),
        })
        .then(() => {})
        .catch((error) => {});
      $("body").append(``);
    }
  },
  hideCursor: function () {
    $(".cursor").hide();
  },
  hmmQ: function (qust = "", call) {
    $("div_not").attr("style", "top:45px !important;opacity:1 !important;");
    $("div_not div_panel span").text(qust);
    $("#clavs iframe,#clavs grider_viewer").addClass("gridesr_filter");
    $("btns_i").attr("style", "opacity:0.4;pointer-events:none;");
    $("box_h").show();
    $("btns btn2").on("click", function () {
      $("div_not").removeAttr("style");
      $("#clavs iframe,#clavs grider_viewer").removeClass("gridesr_filter");
      $("box_h").hide();
      $("btns_i").removeAttr("style", "opacity:0.4;pointer-events:none;");
    });
    $("btns btn1").on("click", function () {
      $("div_not").removeAttr("style");
      $("box_h").hide();
      $("btns_i").removeAttr("style", "opacity:0.4;pointer-events:none;");
      $("#clavs iframe,#clavs grider_viewer").removeClass("gridesr_filter");
      call();
    });
  },
  hmm: function (qust = "", call) {
    $("div_not").attr("style", "top:45px !important;opacity:1 !important;");
    $("div_not div_panel span").text(qust);
    $("#clavs iframe,#clavs grider_viewer").addClass("gridesr_filter");
    $("box_h").show();
    $("btns btn2").on("click", function () {
      $("div_not").removeAttr("style");
      var tl = $("div_header span").text();
      $("#clavs iframe,#clavs grider_viewer").removeClass("gridesr_filter");
      $("box_h").hide();
    });
    $("btns btn1").on("click", function () {
      $("div_not").removeAttr("style");
      $("box_h").hide();
      $("#clavs iframe,#clavs grider_viewer").removeClass("gridesr_filter");
      $("#clavs iframe").show();
      $("#clavs grider_viewer").hide();
      call();
    });
  },
  question_no: function () {
    $("div_not").removeAttr("style");
    $("#clavs iframe,#clavs grider_viewer").removeAttr("style");
  },
  cursor_hide: function () {
    $(".cursor").hide();
  },
  cursor_show: function () {
    $(".cursor").show();
  },
  url_blob: function (url = "") {
    var blob = null;
    var objectURL = null;
    $("iframe:not(.iframe_mask)").attr("src", url);
    return false;
   
  },
  Img_cursor: function () {
    this.cursor.css({
      transform: "scale(2)",
      "text-align": "center",
      "font-size": "10px",
      padding: "uset",
      "padding-top": "4px",
      cursor: "none",
      "mix-blend-mode": "unset",
    });
  },
  Img_no_cursor: function () {
    this.cursor.css({
      transform: "scale(1)",
      "font-size": "unset",
      padding: "unset",
      "padding-top": "unset",
      "border-radius": "50%",
      "mix-blend-mode": "difference",
      display: "unset",
    });
  },
  cr: function (v) {
    var thi = "class='is_touch'",
      p_open = "";
    if (v.href !== "") {
      if (v.type) {
        p_open = ` <p_open title="Open:${v.href}" onclick=" welcomer.openWindow(${this.div_not_i});" > <i class="bi bi-link"></i> Open link </p_open>`;
      } else {
        p_open = ` <p_open title="Download:${v.title}" onclick=" welcomer.openWindow(${this.div_not_i});" > <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download) </p_open>`;
      }
    }
    if (this.isMobile()) {
      thi = "onclick=' welcomer.openLink(" + this.div_not_i + ")'";
    }
    $("grider_viewer").append(
      `<project ${thi}id-int="${this.div_not_i}" title="${v.description}"> <grider_box> <p><span>${v.title}</span></p> ${p_open}<fiv><i onclick=" welcomer.infoVa(${this.div_not_i});" class="bi bi-info-circle" title="Preview project image. Detailed preview of the whole project coming soon!"></i></fiv> <img loading="lazy" data-zoom-image="${v.img}" ${thi}ondragstart="return false;" onload="welcomer.loaded_img(this,${this.div_not_i});" src="${v.img}" alt="${v.title}"> </grider_box> </project>`
    );
    this.div_not_i++;
  },
  loading_t: function (d) {
    const img = new Image();
    img.src = d.getAttribute("src");
    img.onload = async function () {
      const H = URL.createObjectURL(
        await fetch(img.src).then(function (v) {
          return v.blob();
        })
      );
      d.src = H;
      d.removeAttribute("onload");
    };
  },
  toblob: function (d) {
    d.setAttribute("data-zoom-image", d.getAttribute("src"));
    return;
    const img = new Image();
    var img_d = d.getAttribute("src");
    if (img_d.includes("data:")) {
      img.src = img_d.replace("&thumb=true", "");
    } else {
      img.src = d.getAttribute("src");
    }
    img.onload = async function () {
      const H = URL.createObjectURL(
        await fetch(img.src).then(function (v) {
          return v.blob();
        })
      );
      d.src = H;
      d.setAttribute("data-zoom-image", H);
    };
    img.onerror = function () {};
  },
  compTxt: function (s) {
    var div_not_i = 0;
    $("grider_viewer").html("");
    if (s == "") {
      this.projects.forEach(function (v) {
        welcomer.cr(v);
      });
    } else {
      this.projects.forEach(function (v) {
        if (v.title.indexOf(s) !== -1) {
          welcomer.div_not_i = 0;
          welcomer.cr(v);
        }
      });
    }
  },
  search_Kompjiler: function (tt) {
    const p_search = document.createElement("p-search");
    document.body.appendChild(p_search);

    return;
    const urlParams = new URLSearchParams(window.location.search);
    const attr = $(tt).attr("data-hmm"),
      hd = $("div_header"),
      input = $("div_header input[type='text']").val();
    if (attr) {
      hd.addClass("ld_completeld_complete_search");
    }
    if (attr == "search") {
      const myParam = urlParams.get("p");
      const myParam_id = urlParams.get("id");
      if (myParam == "blog") {
        fetch(`/?blog=search&q=${input}`)
        .then(response => response.json())
        .then(arr => {
          welcomer.blogljoad_posts(arr);
        });
      } else {
        welcomer.compTxt(input);
      }
    }
    if (attr == "closeMe") {
      this.hmmQ("Close search?", function () {
        var a = document.createElement("a");
        const urlParamsf = new URLSearchParams(window.location.search);
        a.setAttribute("rel", "nofollow noreferrer");
        a.setAttribute("role", "link");
        a.setAttribute("target", "_top");
        document.body.appendChild(a);
        if (urlParamsf.get("p") == "blog") {
          a.href = "/?p=blog";
        } else {
          a.href = "/?p=projects";
        }
        a.click();
      });
    }
  },
  terminator: { ajax: { blog_post: null } },
  txt_cursor: function () {
    $(
      "input[type='text'],textarea,input[type='search'],.trumbowyg-box .trumbowyg-editor" +
        ",.invoice-box input"
    )
      .click(function () {
        welcomer.cursor.css({
          transform: "scale(0.1,1.5)",
          "border-radius": "5px",
        });
        welcomer.cursor.html("");
      })
      .contextmenu(function () {
        welcomer.cursor.css({
          transform: "scale(0.1,1.5)",
          "border-radius": "5px",
        });
        welcomer.cursor.html("");
      })
      .mouseenter(function () {
        welcomer.cursor.css({
          transform: "scale(0.1,1.5)",
          "border-radius": "5px",
        });
        welcomer.cursor.html("");
      })
      .mouseleave(function () {
        welcomer.cursor.css({
          transform: "scale(1)",
          "border-radius": "50%",
          "mix-blend-mode": "difference",
        });
      });
  },
  offset: function (el) {
    if (!el) {
      return { top: 0, left: 0 };
    }
    const rect = el.getBoundingClientRect();
    return { top: rect.top + window.scrollY, left: rect.left + window.scrollX };
  },
  parentTitler: function (element, text) {
    try {
      var offset = welcomer.offset();
      const anchorTitle = document.getElementById("anchorTitle"),
        i = document.createElement("i"),
        tt = document.createTextNode(text);
      i.setAttribute("class", "bi bi-info-square");
      i.setAttribute("style", "padding-right:2px;");
      anchorTitle.appendChild(i);
      anchorTitle.appendChild(tt);
      anchorTitle.style.opacity = "1";
    } catch (aer) {}
  },
  showAnchorTitle: function (element, text) {
    var offset = welcomer.offset();
    const anchorTitle = document.getElementById("anchorTitle"),
      i = document.createElement("i"),
      tt = document.createTextNode(text);
    if (anchorTitle) {
      anchorTitle.innerHTML =
        "<i style='padding-right:2px;' class='bi bi-info-square'></i> " + text;
      anchorTitle.style.opacity = "1";
    } else {
      parent.welcomer.parentTitler(element, text);
    }
  },
  hideAnchorTitle: function () {
    return;
    try {
      const anchorTitle = document.getElementById("anchorTitle");
      if (anchorTitle) {
        anchorTitle.style.opacity = "0";
      } else {
        parent.welcomer.hideAnchorTitle();
      }
    } catch (ae) {}
  },
  fpsMeter: function () {
    let prevTime = Date.now(),
      frames = 0,
      k = (performance || Date).now();
    window.requestAnimationFrame(function loop() {
      if (self.performance && self.performance.memory) {
        const time = Date.now();
        frames++;
        if (time > prevTime + 1000) {
          let fps = Math.round((frames * 1000) / (time - prevTime));
          prevTime = time;
          frames = 0;
          if (parseInt(fps) < 20) {
            $("p-c").attr("style", "color:red;");
            welcomer.Dots_color = 3;
          } else {
            $("p-c").removeAttr("style");
            welcomer.Dots_color = 195;
          }
          $("p-c").html(`<i class="bi bi-pci-card"></i> ${fps}FPS`);
        }
        window.requestAnimationFrame(loop);
      }
    });
  },
  GPPU_ms: function () {},
  getUnmaskedInfo: function () {
    const gl = document.createElement("canvas").getContext("webgl");
    if (!gl) {
      return { error: "no webgl" };
    }
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    return debugInfo
      ? {
          vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
          renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
        }
      : { error: "no WEBGL_debug_renderer_info" };
  },
  get_events: function () {
    document
      .querySelectorAll("*[title]:not(iframe),*[data-title]:not(iframe)")
      .forEach(function (element) {
        if (welcomer.isMobile()) {
          element.addEventListener("click", function () {
            welcomer.showAnchorTitle(
              element,
              element.getAttribute("data-title")
            );
          });
          element.addEventListener("click", function () {
            welcomer.hideAnchorTitle();
          });
          element.setAttribute("data-title", element.getAttribute("title"));
          element.removeAttribute("title");
          document.querySelectorAll("*:not(a)").forEach(function (elem) {
            elem.addEventListener("click", function () {
              welcomer.hideAnchorTitle();
            });
          });
        } else {
          element.addEventListener("mouseenter", function () {
            welcomer.showAnchorTitle(
              element,
              element.getAttribute("data-title")
            );
          });
          element.addEventListener("mouseleave", function () {
            welcomer.hideAnchorTitle();
          });
          element.setAttribute("data-title", element.getAttribute("title"));
          element.removeAttribute("title");
          element.addEventListener("mouseleave", function () {
            welcomer.hideAnchorTitle();
          });
        }
      });
  },
  touchpcSimulator: function (elm) {
    const ele = document.getElementById(elm);
    ele.style.cursor = "grab";
    let pos = { top: 0, left: 0, x: 0, y: 0 };
    const mouseDownHandler = function (e) {
      ele.style.cursor = "grabbing";
      ele.style.userSelect = "none";
      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };
    const mouseMoveHandler = function (e) {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };
    const mouseUpHandler = function () {
      ele.style.cursor = "grab";
      ele.style.removeProperty("user-select");
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
    ele.addEventListener("mousedown", mouseDownHandler);
  },
  _get_data: function (
    v = {
      headers: {},
      type: "GET",
      data: {},
      url: "",
      error: function () {},
      response: function (error, data) {},
    }
  ) {
    var xhr = new XMLHttpRequest();
    xhr.open(v.type, v.url, true);
    xhr.responseType = "json";
    for (let key in v.headers) {
      if (v.headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(`${key}`, `${v.headers[key]}`);
      }
    }
    const formData = new FormData();
    for (let key in v.data) {
      if (v.data.hasOwnProperty(key)) {
        formData.append(`${key}`, `${v.data[key]}`);
      }
    }
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        var data = xhr.response;
        v.response("", data);
      } else {
        console.error("Request failed. Returned status of " + xhr.status);
        v.response(xhr.status, null);
      }
    };
    xhr.onerror = function () {
      console.error("Request failed");
    };
    xhr.send(formData);
  },
  getLinkTagsAsJson: function (what = "link") {
    const linkElements = document.querySelectorAll(what);
    let linksArray = [];
    linkElements.forEach((link) => {
      let attributes = {};
      for (let attr of link.attributes) {
        attributes[attr.name] = attr.value;
      }
      linksArray.push(attributes);
    });
    return JSON.stringify(linksArray, null, 2);
  },
  events: {
    scrollByM: {
      f: function () {
        this.a.forEach(function (v) {
          const scrollableElement = document.querySelector(v.elm);
          if (scrollableElement) {
            scrollableElement.addEventListener("mousedown", (e) => {
              v.isDragging = true;
              scrollableElement.classList.add("dragging");
              v.startX = e.pageX - scrollableElement.offsetLeft;
              v.startY = e.pageY - scrollableElement.offsetTop;
              v.scrollLeft = scrollableElement.scrollLeft;
              v.scrollTop = scrollableElement.scrollTop;
            });
            scrollableElement.addEventListener("touchstart", (e) => {
              v.isDragging = true;
              scrollableElement.classList.add("dragging");
              const touch = e.touches[0];
              v.startX = touch.pageX - scrollableElement.offsetLeft;
              v.startY = touch.pageY - scrollableElement.offsetTop;
              v.scrollLeft = scrollableElement.scrollLeft;
              v.scrollTop = scrollableElement.scrollTop;
            });
            scrollableElement.addEventListener("mousemove", (e) => {
              if (!v.isDragging) return;
              e.preventDefault();
              const x = e.pageX - scrollableElement.offsetLeft;
              const y = e.pageY - scrollableElement.offsetTop;
              const walkX = x - v.startX;
              const walkY = y - v.startY;
              scrollableElement.scrollLeft = v.scrollLeft - walkX;
              scrollableElement.scrollTop = v.scrollTop - walkY;
            });
            scrollableElement.addEventListener("touchmove", (e) => {
              if (!v.isDragging) return;
              const touch = e.touches[0];
              const x = touch.pageX - scrollableElement.offsetLeft;
              const y = touch.pageY - scrollableElement.offsetTop;
              const walkX = x - v.startX;
              const walkY = y - v.startY;
              scrollableElement.scrollLeft = v.scrollLeft - walkX;
              scrollableElement.scrollTop = v.scrollTop - walkY;
            });
            scrollableElement.addEventListener("mouseup", () => {
              v.isDragging = false;
              scrollableElement.classList.remove("dragging");
            });
            scrollableElement.addEventListener("touchend", () => {
              v.isDragging = false;
              scrollableElement.classList.remove("dragging");
            });
            scrollableElement.addEventListener("mouseleave", () => {
              v.isDragging = false;
              scrollableElement.classList.remove("dragging");
            });
          }
        });
      },
      a: [
        {
          elm: "div#clavs br_tga",
          isDragging: false,
          startX: 0,
          startY: 0,
          scrollLeft: 0,
          scrollTop: 0,
        },
      ],
    },
    scroll: {
      lastScrollTop: 0,
      menu: function () {
        const menu = document.querySelector("#clavs grider_viewer"),
          mls = document.querySelector("div#clavs");
        const scrollTop = menu.scrollTop;
        if (scrollTop > 400) {
          mls.classList.add("scrollactive");
        } else {
          mls.classList.remove("scrollactive");
        }
        if (scrollTop < welcomer.events.scroll.lastScrollTop) {
          if (mls.className.includes("scrollactive")) {
            mls.classList.remove("scrollactive");
          }
        }
        welcomer.events.scroll.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      },
      start: function () {
        welcomer.events.scroll.menu();
      },
    },
  },
  resetCall: function () {
    let bodyHTML = "";
    Array.from(document.body.childNodes).forEach((node) => {
      const serializer = new XMLSerializer();
      bodyHTML += serializer.serializeToString(node);
    });
    // this.body_reset_form = bodyHTML;
  },
  body_reset_form: ` 
<editor-sdk style='display:none; position:fixed; width: 100%; height:100%; z-index:4323423423; background:black;'></editor-sdk>
<!-- <video style="opacity:0;"loop autoplay muted autobuffer playsinline class="wallpaperVideo video_is_hidden"></video> -->
 

<p class="p-c"> Do you love random videos?<br>- Tip: Reload page...</p>
<div id="content_Space"></div>
<hh_anim_start>
  <spjin>
    <p><span class="box_shadow_h"> Marko Nikolić <i class="far fa-copyright"></i> 2025 <br> Solar day: ${window.solarday()}</span></p>
    <spj>
    <img src="/svg_logo_backscr_img" id="logo_backscr_img" alt="logo" loading="lazy" /><br class="hide_noy"><br class="hide_noy">
      <h3>Marko Nikolić</h3>
      <div class="box_shadow_txtf box_shadow"><span>Full stack Developer</span>
        <sp>-</sp><span>Scientist theories/news</span>
        <sp>-</sp><span>Writing books</span>
        <sp>-</sp><span>Photographer</span>
      </div><br class="hide_noy"><br>
      <arr_bundle><i data-onclick="welcomer.bundleSuggestedS(1);"
          class="bi bi-arrow-right-circle-fill catascrollEchatTv_right catascrollEchatTv"
          style="transform:scale(1)"></i><i data-onclick="welcomer.bundleSuggestedS('2');"
          class="bi bi-arrow-left-circle-fill catascrollEchatTv" style="transform:scale(0);"></i></arr_bundle>
      <div id="buttons" class="box_shadow" onscroll="welcomer.scrolj();"></div>
    </spj>
  </spjin>
</hh_anim_start>
<div id="clavs">
  <div_header>
    <img src="/svg_logo_backscr_img" id="logo_backscr_img" alt="Logo" />
    <i id="reaload_page" title="Reload" data-onclick="welcomer.reload_me(this);"
      class="bi bi-arrow-clockwise"></i><svg class="Vjideo_sjpinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
    </svg><span>Loading ...</span>
    <btns_i><input type="text" placeholder="Search ..." data-hmm="search"
        onkeyup="welcomer.search_Kompjiler(this);" /><i class="bi bi-x-lg" data-hmm="closeMe"
        data-onclick="welcomer.search_Kompjiler(this);" title="Close Search"></i></btns_i>
    <btns_r><i class="bi bi-search  " data-hmm="true" data-onclick="welcomer.search_Kompjiler(this);"
        title="Search project..."></i><i class="bi bi-filetype-pdf pdf_download" title="Download my CV as PDF"></i><i
        class="bi bi-house pdf_page_home_btn" data-onclick="welcomer.blogloader('all');"
        title="Return to Blog home page"></i><i class="bi bi-telegram tg_button"
        data-onclick="welcomer.Social.tg.open();"></i><i class="bi bi-share" data-onclick="welcomer.share();"
        title="Share"></i><i class="bi bi-x-lg close_btnf" data-onclick="welcomer.Hclose(this);" title="Close"></i>
    </btns_r>
  </div_header> 
  <solar_arrow data-onclick="welcomer.colar_system();">
    <back_f></back_f>
    <labelv><i class="bi bi-chevron-double-up"></i><span>Show posts</span><i class="bi bi-chevron-double-up"></i>
    </labelv>
  </solar_arrow>
  <box_h></box_h>
  <br_ta class="active_scr"></br_ta>
  <grider_viewer class="gridsH grids" onscroll="welcomer.events.scroll.menu();"></grider_viewer><iframe
    title="Ignoring me " class="Ignoring_me_iframe" src=""></iframe><p-container class="shadow_iframe"></p-container>
  <div title="Ignoring me " class="Ignoring_me_iframe shadow_root" src=""></div>
  <gridder_loader><img alt="loading" loading="lazy" src="${this.loader_svg}" height="55" width="55"></gridder_loader>
  <canvas id="canvas">Your browser doesn't support canvas</canvas>
  
  <div class="cursor" style="opacity: 0;"></div>
  <info_box>
    <info_msg data-onclick="$(this).removeClass('info_box_active');">
      <dv_h></dv_h>
      <info_div><img src="/favicon.svg" alt="for Testing" title="aefaef" />
        <h4></h4>
      </info_div>
      <p></p>
    </info_msg>
  </info_box><p-c><i class="bi bi-pci-card"></i> 0FPS</p-c>
  <section data-ui-type="gallery" class="hidden_omega"><video-player id="video_preview"></video-player>
    <div_header data-url="editor">
      <img src="/svg_logo_backscr_img" loading="lazy" id="logo_backscr_img" alt="Loading" ><span>Marko Nikolić > Gallery</span>
      <btns_i><input type="text" placeholder="Search project" data-hmm="search"
          onkeyup="welcomer.search_Kompjiler(this);" /><i class="bi bi-x-lg" data-hmm="closeMe"
          data-onclick="welcomer.search_Kompjiler(this);" title="Close Search"></i></btns_i>
      <btns_r class="btns_r_editor_right"><i class="bi bi-arrow-left-short editor_btns undo gallery_home"
          data-title="Back to Gallery" data-onclick="welcomer.pages.gallery.call_back();"></i><i class="bi bi-share"
          data-onclick="welcomer.share();" title="Share"></i><i class="bi bi-x-lg close_btnf" data-onclick="CTHP();"
          title="Close"></i></btns_r>
    </div_header>
    <grider_viewer></grider_viewer>
  </section>
  <section data-ui-type="slider" class="hidden_omega">
    <arr_bundle><i class="bi bi-arrow-right-circle-fill catascrollEchatTv_right catascrollEchatTv"
        style="transform:scale(1)" data-onclick="welcomer.eronelit_gallery.bundleSuggestedS(1);"></i><i
        class="bi bi-arrow-left-circle-fill catascrollEchatTv"
        data-onclick="welcomer.eronelit_gallery.bundleSuggestedS(-1);" style="transform:scale(1)"></i></arr_bundle><span
      id="helper_id_helper" class="dont_removme"><i style="padding-right:2px;"
        class="dont_removme bi bi-info-square"></i> For close click ( X ) button.</span><i
      data-onclick="welcomer.closeMeIamSad()" class="bi bi-x-lg zoomer_exit dont_removme"></i><div-echatv
      onscroll="welcomer.eronelit_gallery.scroll_event();"></div-echatv>
  </section>
  <section data-ui-type="social_feed" class="hidden_omega"></section>
  <section data-ui-type="editor" class="hidden_omega">
    <div_header data-url="editor">  <img src="/svg_logo_backscr_img" loading="lazy" id="logo_backscr_img" alt="Loading" ><span>Marko Nikolić - Portfolio > Editor - BETA</span><span class="editor_t">> Editor - BETA</span>
      <btns_i><input type="text" placeholder="Search project" data-hmm="search"
          onkeyup="welcomer.search_Kompjiler(this);" /><i class="bi bi-x-lg" data-hmm="closeMe"
          data-onclick="welcomer.search_Kompjiler(this);" title="Close Search"></i></btns_i>
      <btns_r class="btns_r_editor_right"><i class="bi bi-arrow-left-short editor_btns undo"></i><i
          class="bi bi-arrow-right-short editor_btns redo " title="redo" data-title="redo"></i>
        <iclass="bi bi-file-earmark-arrow-down celvon" data-onclick="welcomer.editor.d();"
          data-title="Download as html file"></i><i style="display:none" class="bi bi-question-lg"
            data-onclick="welcomer.editor.load_menu_bar(this);"></i><i class="bi bi-share"
            data-onclick="welcomer.share();" title="Share"></i><i class="bi bi-x-lg close_btnf" data-onclick="CTHP();"
            title="Close"></i>
      </btns_r>
    </div_header><editor-history-rp></editor-history-rp><editor-wrapper></editor-wrapper>
  </section>
  <div_not>
    <div_panel><span></span>
      <btns>
        <btn1>Yes</btn1>
        <btn2>Cancel</btn2>
      </btns>
    </div_panel>
  </div_not>
  <style nonce="${window.stmp}">
    a[data-iam-hidden="yes"] {
      display: none !important;
    }
  </style>
</div>
<div class="contanct_frm">
  <div class="h5_div">
    <img src="${window.location.origin}/svg_logo_backscr_img" loading="lazy"  class="logo_backscr_img_cnt" id="logo_backscr_img" alt="Loading" >
     <i class="bi bi-inbox"></i> Contact me<i class="closec bi bi-x-lg"></i></div>
  <form autocomplete="off">
    <p class="msg"></p><label for="fname">Full Name</label><i class="input_icon bi bi-quote"></i><input type="text"
      id="fname" name="firstname" placeholder="Your name.."><label for="lname">Your Email</label><i
      class="input_icon bi bi-envelope"></i><input type="email" id="lname" name="email"
      placeholder="Your Email.."><label for="subject" class="message_lenght">Message </label><textarea id="subject"
      name="subject" placeholder="Your message..." style="height:200px"></textarea><label for="norobot">Solve math
      problem. I'm not a robot</label><input type="number" id="norobot" name="norobot" placeholder="">
  </form>
  <fotter><button type="button" id="sendbtn">Send message</button></fotter>
</div>`,
  template_call: function () {
    while (document.body.firstChild) {
      /// document.body.removeChild(document.body.firstChild);
    }
    let contentDiv = document.getElementById("content");
    if (!contentDiv) {
      contentDiv = document.createElement("div");
      contentDiv.id = "content";
      document.body.appendChild(contentDiv);
    }
    function createElementWithAttributes(tag, attributes = {}, children = []) {
      const element = document.createElement(tag);
      for (const [attr, value] of Object.entries(attributes)) {
        if (attr === "style") {
          for (const [styleProp, styleValue] of Object.entries(value)) {
            element.style[styleProp] = styleValue;
          }
        } else if (attr === "dataset") {
          for (const [dataAttr, dataValue] of Object.entries(value)) {
            element.dataset[dataAttr] = dataValue;
          }
        } else {
          element.setAttribute(attr, value);
        }
      }
      children.forEach((child) => {
        if (typeof child === "string") {
          element.appendChild(document.createTextNode(child));
        } else {
          element.appendChild(child);
        }
      });
      return element;
    }
    const video = createElementWithAttributes("video", {
      style: { opacity: 0 },
      loop: true,
      autoplay: true,
      muted: true,
      autobuffer: true,
      playsinline: true,
      class: "wallpaperVideo video_is_hidden",
    });
    contentDiv.appendChild(video);
    const p = createElementWithAttributes("p", { class: "p-c" }, [
      "Do you love random videos?",
      document.createElement("br"),
      "- Tip: Reload page...",
    ]);
    contentDiv.appendChild(p);
    const contentSpace = createElementWithAttributes("div", {
      id: "content_Space",
    });
    contentDiv.appendChild(contentSpace);
    const hhAnimStart = createElementWithAttributes("hh_anim_start", {}, [
      createElementWithAttributes("spjin", {}, [
        createElementWithAttributes("p", {}, [
          createElementWithAttributes("span", { class: "box_shadow_h" }, [
            "Marko Nikolić - Portfolio ",
            createElementWithAttributes("i", { class: "far fa-copyright" }),
            "2012 - 202f5",
          ]),
        ]),
        createElementWithAttributes("spj", {}, [
          createElementWithAttributes("img", {
            src: "/svg_logo_backscr_img",
            id: "logo_backscr_img",
            alt: "logo",
            loading: "lazy",
          }),
          createElementWithAttributes("br", { class: "hide_noy" }),
          createElementWithAttributes("br", { class: "hide_noy" }),
          createElementWithAttributes("h3", {}, ["Marko Nikolić"]),
          createElementWithAttributes(
            "div",
            { class: "box_shadow_txtf box_shadow" },
            [
              createElementWithAttributes("span", {}, ["Full stack Developer"]),
              createElementWithAttributes("sp", {}, ["-"]),
              createElementWithAttributes("span", {}, [
                "Scientist theories/news",
              ]),
              createElementWithAttributes("sp", {}, ["-"]),
              createElementWithAttributes("span", {}, ["Writing books"]),
              createElementWithAttributes("sp", {}, ["-"]),
              createElementWithAttributes("span", {}, ["Photographer"]),
            ]
          ),
          createElementWithAttributes("br", { class: "hide_noy" }),
          createElementWithAttributes("br"),
          createElementWithAttributes("arr_bundle", {}, [
            createElementWithAttributes("i", {
              "data-onclick": "welcomer.bundleSuggestedS(1);",
              class:
                "bi bi-arrow-right-circle-fill catascrollEchatTv_right catascrollEchatTv",
              style: { transform: "scale(1)" },
            }),
            createElementWithAttributes("i", {
              "data-onclick": "welcomer.bundleSuggestedS('2');",
              class: "bi bi-arrow-left-circle-fill catascrollEchatTv",
              style: { transform: "scale(0)" },
            }),
          ]),
          createElementWithAttributes("div", {
            id: "buttons",
            class: "box_shadow",
            onscroll: "welcomer.scrolj();",
          }),
        ]),
      ]),
    ]);
    const styleElement = createElementWithAttributes(
      "style",
      { nonce: window.stmp },
      [`a[data-iam-hidden="yes"] { display: none !important; }`]
    );
    contentDiv.appendChild(styleElement);
  },
  template_home: function () {
    const Template_div = document.querySelector("body");

    const video = document.createElement("video");
    video.style.opacity = "0";
    video.loop = true;
    video.autoplay = true;
    video.muted = true;
    video.autobuffer = true;
    video.playsInline = true;
    video.classList.add("wallpaperVideo", "video_is_hidden");
    // Template_div.appendChild(video);
    Template_div.appendChild(video);

    const p_c = document.createElement("p");
    p_c.classList.add("p-c");
    p_c.appendChild(document.createTextNode("Do you want to see the video?"));
    p_c.appendChild(document.createElement("br"));
    p_c.appendChild(document.createTextNode("- Tip: Reload page ..."));
    Template_div.appendChild(p_c);
    const div_content_space = document.createElement("div");
    div_content_space.id = "content_space";
    Template_div.appendChild(div_content_space);

    const hhAnimStart = document.createElement("div");
    hhAnimStart.classList.add("hh_anim_start");

    const spjin = document.createElement("div");
    spjin.classList.add("spjin");

    const p = document.createElement("p");
    const span = document.createElement("span");
    span.classList.add("box_shadow_h");
    span.innerHTML =
      `Marko Nikolić <i class="far fa-copyright"></i>2012 - 2025 <br> Solar day: ${welcomer.pages.solarday()}`;
    p.appendChild(span);
    spjin.appendChild(p);

    const spj = document.createElement("div");
    spj.classList.add("spj");

    const svg = document.createElement("img");
    svg.src = "/svg_logo_backscr_img";
    svg.id = "logo_backscr_img";

    spj.appendChild(svg);

    const br1 = document.createElement("br");
    br1.classList.add("hide_noy");
    spj.appendChild(br1);

    const br2 = document.createElement("br");
    br2.classList.add("hide_noy");
    spj.appendChild(br2);

    const h3 = document.createElement("h3");
    h3.textContent = "Marko Nikolić";
    spj.appendChild(h3);

    const divBoxShadow = document.createElement("div");
    divBoxShadow.classList.add("box_shadow_txtf", "box_shadow");

    const spanFullStack = document.createElement("span");
    spanFullStack.textContent = "Full stack Developer";
    divBoxShadow.appendChild(spanFullStack);

    const sp1 = document.createElement("sp");
    sp1.textContent = "-";
    divBoxShadow.appendChild(sp1);

    const spanScientist = document.createElement("span");
    spanScientist.textContent = "Scientist theories/news";
    divBoxShadow.appendChild(spanScientist);

    const sp2 = document.createElement("sp");
    sp2.textContent = "-";
    divBoxShadow.appendChild(sp2);

    const spanWriting = document.createElement("span");
    spanWriting.textContent = "Writing books";
    divBoxShadow.appendChild(spanWriting);

    const sp3 = document.createElement("sp");
    sp3.textContent = "-";
    divBoxShadow.appendChild(sp3);

    const spanPhotographer = document.createElement("span");
    spanPhotographer.textContent = "Photographer";
    divBoxShadow.appendChild(spanPhotographer);

    spj.appendChild(divBoxShadow);

    const br3 = document.createElement("br");
    br3.classList.add("hide_noy");
    spj.appendChild(br3);

    const br4 = document.createElement("br");
    spj.appendChild(br4);

    const arrBundle = document.createElement("div");
    arrBundle.classList.add("arr_bundle");

    const iRight = document.createElement("i");
    iRight.classList.add(
      "bi",
      "bi-arrow-right-circle-fill",
      "catascrollEchatTv_right",
      "catascrollEchatTv"
    );
    iRight.setAttribute("data-onclick", "welcomer.bundleSuggestedS(1);");
    iRight.style.transform = "scale(1)";
    arrBundle.appendChild(iRight);

    const iLeft = document.createElement("i");
    iLeft.classList.add("bi", "bi-arrow-left-circle-fill", "catascrollEchatTv");
    iLeft.setAttribute("data-onclick", "welcomer.bundleSuggestedS('2');");
    iLeft.style.transform = "scale(0)";
    arrBundle.appendChild(iLeft);

    spj.appendChild(arrBundle);

    const divButtons = document.createElement("div");
    divButtons.id = "buttons";
    divButtons.classList.add("box_shadow");
    divButtons.setAttribute("onscroll", "welcomer.scrolj();");
    spj.appendChild(divButtons);

    spjin.appendChild(spj);
    hhAnimStart.appendChild(spjin);
    Template_div.appendChild(hhAnimStart);

    Template_div.appendChild(
      document.createElement("br").classList.add("hide_noy")
    );
    Template_div.appendChild(
      document.createElement("br").classList.add("hide_noy")
    );
  },
  bckrnd: async function () {
    const video_wall = document.createElement("video");
    document.body.appendChild(video_wall);
    video_wall.classList.add("wallpaperVideo");
    video_wall.classList.add("video_is_hidden");
    video_wall.loop = true;
    video_wall.autoplay = true;
    video_wall.muted = true;
    video_wall.autobuffer = true;
    video_wall.playsinline = true;

    const data = { v: `${Math.floor(Math.random() * (20 - 5 + 1)) + 10}` };
    const v = window.portfolio.data.background_videos;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", v[Math.floor(Math.random() * v.length)]["video"], true);
    xhr.responseType = "blob";
    xhr.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;charset=UTF-8"
    );
    xhr.onload = function () {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const URL2 = URL.createObjectURL(blob);

        video_wall.src = URL2;
        try {
          document
            .querySelector("img#svg_loader_img")
            .setAttribute("style", "opacity:0;");
        } catch (ae0) {}
        setTimeout(() => {
          document.querySelector("img#svg_loader_img")?.remove();
        }, 1000);
        video_wall.play();
        video_wall.classList.remove("video_is_hidden");
      } else {
      }
    };
    await xhr.send(`v=${data.v}`);
  },
  start: async function () {
    this.pages.reset();

    document.body.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      return false;
    });
    document.body.addEventListener("dragstart", function (event) {
      event.preventDefault();
      return false;
    });
    await window.getJSON();

    var conff = this.conf;
    this.events.scrollByM.f();
    welcomer.projects = window.portfolio.data.projects;
    welcomer.cards_links = window.portfolio.data.menu;
    welcomer.start_v2();
    /*
    $.ajaxSetup({
      cache: true,
      async: true,
      global: true,
      headers: { "AuthV2-token": $('meta[name="csrf-token"]').attr("content") },
    });
    */
    const div_solarsystem = document.createElement("div-solarsystem");
    div_solarsystem.classList.add("solarsystem");
    div_solarsystem.id = "root";
    document.querySelector("div#clavs").appendChild(div_solarsystem);
    const isMobile = welcomer.isMobile();
    if (isMobile == true) {
      $(".cursor").remove();
      $(".anchorTitle").remove();
    }
    if (isMobile == false) {
      welcomer.touchpcSimulator("buttons");
      // $("body").append('<div id="anchorTitle" class="anchorTitle"></div>');
      const anchorTitle = document.createElement("div");
      anchorTitle.setAttribute("id", "anchorTitle");
      anchorTitle.setAttribute("class", "anchorTitle");
      document.body.appendChild(anchorTitle);
      // welcomer.html.append("body", '<div id="anchorTitle" class="anchorTitle"></div>');
      welcomer.get_events();
      var cursor = document.querySelector(".cursor");
      //$(".cursor");
      cursor.classList.add("cursor_pc_show");
      window.addEventListener("mousemove", function (e) {
        cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
        cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
        welcomer.TopLeft = {
          y: e.clientY - document.querySelector("*[title]").offsetHeight / 2,
          x: e.clientX - document.querySelector("*[title]").offsetWidth / 2,
        };
      });
    }

    if (window.location.host == "portfolio.eronelit.com") {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/sw.js")
          .then(function (registration) {})
          .catch(function (e) {});
      }
    }
    const img = document.createElement("img");
    img.id = "svg_loader_img";
    img.src = `${welcomer.loader_svg}`;
    img.alt = "Loader";
    img.setAttribute(
      "style",
      ` position:fixed;right:10px;top:10px;width:30px;height:30px;pointer-events:none;opacity:0;object-fit:scale-down;transition:.3s;">`
    );
    const gallery_bundle_num = document.createElement("div");
    gallery_bundle_num.setAttribute("class", "nnum");
    gallery_bundle_num.textContent = welcomer.galleryNumber();
    document
      .querySelector("#buttons .adiv[adiv_gat='gallery_bundle']")
      .prepend(gallery_bundle_num);
    // welcomer.html.prepend("#buttons .adiv[adiv_gat='gallery_bundle']",`<div class="nnum">${window.portfolio.data.gallery.Gallery_count}</div>`);
    /*
    $("#buttons .adiv[adiv_gat='gallery_bundle']").prepend(
      `<div class="nnum">${window.portfolio.data.gallery.Gallery_count}</div>`
    ); */

    document.body.appendChild(img);
    /*
    setTimeout(async () => {
      const video_wall = document.querySelector("video");
      const data = { v: `${Math.floor(Math.random() * (20 - 5 + 1)) + 10}` };
      const v = window.portfolio.data.background_videos;
      const xhr = new XMLHttpRequest();
      xhr.open("POST", v[Math.floor(Math.random() * v.length)]["video"], true);
      xhr.responseType = "blob";
      xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded;charset=UTF-8"
      );
      xhr.onload = function () {
        if (xhr.status === 200) {
          const blob = xhr.response;
          const URL2 = URL.createObjectURL(blob);

          video_wall.src = URL2;
          try {
            document
              .querySelector("img#svg_loader_img")
              .setAttribute("style", "opacity:0;");
          } catch (ae0) {}
          setTimeout(() => {
            document.querySelector("img#svg_loader_img")?.remove();
          }, 1000);
          video_wall.play();
          video_wall.classList.remove("video_is_hidden");
        } else {
          //  console.error("Error:", xhr.statusText);
        }
      };
      xhr.send(`v=${data.v}`);
    }, 1000);*/


    

const Style_font = document.createElement("style");

Style_font.textContent = `@font-face { 
font-family: "D3";
/* Add other properties here, as needed. For example: */
/*
font-weight: 100 900;
font-style: normal italic;
*/
src: url(data:application/font-woff;base64,d09GMgABAAAAAB1MAA0AAAABEOgAABzyAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACGThEICoPqJIOaWAuEfgABNgIkA4l2BCAFkVwHjCQbt+U1Y9wNHjYOAEO3e4qijI5MM1XVa3IiY8ATts+nJcxGkGr0WsGw3mxlGIFFaO5GXXtwaqHWhs3WZrPXD5f1UJtissle7iM3by7+im1pjwrlk8+E/OAucUQbfUfa1GS938gaRN4WhkXo94jezlqzV9zihIIfWmXn7e7xteYEhUaj6H+QjFHu/edx0z/3JYS6jR/E6kDNtjFRTZuJq//HP7jF/gNHsKSryc1sSMV0MTkjwPM5zZ5kb7SlSd7RFjmt6GciA5YJYYHBpaLaj1V+lB2jBknW7Bn1SgGNjAdgIQEwBMm82oZwzpK7pE8pbXJ0g2mupeBF72bSXPAEMZ+Iw+Zlpngn3u3VHZm6Ep4J4zHyCADedsilqrIXaXnaY2hKL2qniYEOcXTukD8Kq1eBE9At2lKpZbllQ8JrgWBYAoZnzAX4Fv/qW2noms8a0Xb5HSAzGNCaFvN+33J+hOf5sbQ9RXVuS7vrs0s3BoRDQhIlmoxxicXm0Hs09cWKTW3+VU1XUiBdWofbsHj95NGNolvLWIdZBPhhUQCOKiTvnehGu5NpOrkVAfr8ICHgkwcR37WX1VvKmD7lZWpTspY6LJmyoqSAJw9Uapv2bLdOmTKtuda0LBpNcq2kYOOQICICIVgm93irV5a9q0/l//mN+DIHNIHgofXPIQAEANeWWj0A4MyIrA8AZy40uUEAfACEAWAgEOUiiAAYAEFwmQgNQPHiw2MaTuXsN0DQMH0mxYVAUpAZAABAzXfVKgoKN58WEk9pnBS+Y7cMTAEA9o19AyCDAAggxqRWBrlFin+ai2QDULqCNJAQjv4twhIsw0qswQZsxU7swXV8Jy1Fk5GVXNKV1YD6j2h2gt3TDdN9kWeyTjbIlivrWms+zTmAcMhYKCK84904gJv4SV50ZBErTabyGo8Idpzd1A3UfZYncswqkvkz8/wtf8qP8MP8ED/A9/HdfDvfyjfzDXw9X8fX8FV8BV/Gl/DFfBFfwKX/G/5f8fHqx3mPoh5FPgp7FPyIHk680yWS5HntNCy9n4DAeoFQL6HGiOkg3CIW3+QKpUqt0er0BqPJbLHa7A6ny+3x+vz8vUxAYUlF3j6+ttuPAxAUjkRj8UQylZ2Ti5uHl49mWI4XRElWVE03TGaL1WZ3OF1ujze/gKCQsIjmQE1X3fU0kCY9xoyYMGPKnCVrVmzYsmfHgSMnLpy5cufGiydvPsCWEiBGyw1ZK0vBNgyHXpK2ueBBUUv4T5jWLpl9OuhsKH/8ACAqBsGBuHxFAXFY7AAglxScWXDpxoVbV+554JE7XnkDXvjmB1/8Vyu2OLSm1tUGJ4lq0yqg6hoNoHYB9D3of7C/AQ7+Qrs0mPsJQA51fXw1mgKDoQVFRoahsaoqGjSfOAr3ILbiqkajglJGOxINyjZB7PhPqYPxHC730TY6tKjcA3csZTREX9EKXT8fRobjLUHuqRWNpiGGE7Yjsl4odkSnlR4GjAsjm3RRgeabiRbYxYppTktJMX9hVChXBUgUNZKVq992k0E3ViZr8LW1s0pLJSBwGGedLUP2k5x6jr2sA2y+SspCs2viEuvyXeOsdb5ryrDuy9D1It1WqZQ1gkTQy2fFlw6HKj+H4mYqUyWkDGUFp4oi2Jzn40s+izg6Zr0Zqh2XykSMFJrDfT0CNixz6qNvSbaLdROLh1Xqhjx9SIe8lPHTg4+yiLBx2ZSqcnjZKih3G1LMscox2/Io2TlzwLZxlfJPsMZcVypdJtO6fh5C9jg7hJnEPeQBpTNZV1Z4GqKd1y9hRYiYJl/QJyXC+NPZb4/VnATxW9JtjFfVLiYSxEkcGZo1Y3Shlh/I0SiEYjIpxpMieYiVeR/lvveWGLH+ymw2NBo06GFkc00ajnlJBEmHjZB0WNo9F0JTLWSswJ4M+SpwmFKy8DZ/PE5x/2jTF6bPGSZ0/6gdnUS0erkK0z1Q0Ol1moDXF+xuAtc8NSVxZCCY+kinnxVoxeYUUgC9JphTheWKtJ/WMn59GsGAUH7Q7Dk8W4QvRlVJPgxw9NxqyMlKAk4SFTMWT0LmaxLAVl3BEgAjLA9YqMTfZIolAjy/5pknkmXCi2vClAISyp5tZ+dKsdzTegrS5liwaiWhTgabnTXhtR49IeFzJnROATxLcCGdEA7lsHUyCJWcCFnWw8NhRtQ0C6RLqpa5FgRZkuAZBQeMw0taL9HyCkrnrQn5DzJ7phbnhUtzLTqbNRg7wI9h7YwhaWvVr1QBg6LTmaWUC0Jk2rkn9X+1AqqFcgVjGQip1Q+Gu9C2gSIcvqpNNghldIqdHFXB2G/q0/4UlQxSoh/gOQ/yF1SvkMTfNebhZ2NGqj/8qf8XLCVl/+5dzmi5FO6ksxPVMzLzPdw+E//zdvsxwnt4YhuExPrRq7grtmGLMClwMUzcBj4TQOdFCO0l2/KnLuF8jRjthAwHlUK6RzVAcFuDkumojsi86XE82IUDFepZ+zonuAoSM9tsLEx+YyptbssGQcYoae7QFYY3h5Raz3m5AEDD5yMlKdE6d1+/Qw9IaAmXpE2iGhSV9XawoduGon6PuvCci2Sb0qB6TXdNBuEbNMFcrM6JjX5UQZfLFkzL0GbSeIXAnlk8ier1MOBCamjCXJtkhsISWRGi9lSyZtQaxO/sNtoPWhXUHWNDp+vUheOBBoApEDrEFX6HiEfUGNC4IAiEQoGxigNY9EME7Hhi8VEpZZC1FGgYMKigz8oS/DShmj5jifKglHxaOuJZMgkU0JJtVQKS0ShGm+cgspaulgS1R/cjQ75lXlRPVaDkoQ4KIKyJMb4HbpS45q2UBawAkYnjJZL22ylzEO+PAwOzUgPQHWSqWmSX2qt1UVd2UoE4iLBJR1L2qd7D8YkeTrdIphenEuvr4kwXezyaScenvzdwhiePNPOAdQKQi9oGXJ/NdWRPgi50f95f1to7AGAZu2rA2zE4LM8lMWeZPNpmZ04Ra00uiggIuIbHgznT7rapxw2Gu90ZPwV4NuDVuxb1LMPUFTADUPA6VuJ+rx7IMx7SN+JUqC0Z7Zv7z0f8ZG0DEnBryPcVhB07Z8e05RLdH/H4RWThH7albtgzWcfYdq5N1pCrdd7fzk4iyhS0D1kOUBa2h0A0o6wp6kP5MEbnM8kqZ0C+wsc4Ut3a2Ir2YNJ3ZqPf4vOb0A0RPhqg+D1GfbsRA9MN5OEy3w+aweajqydgVIqTHi64FOk5UTQn7pofjUFB0QhOTsZRWjHvZE2CnE8U3TbdKvDVq8U/6cluBq/ovcXcNr4CDavOihdNti3LLRM9sFYGs+Hxrh8m4Cku2M91Y3xK/2weKXcXxcXcpMX3ts/GOXqUbeHprHPyZGS/MACjMw96TszMyoXWaOzJTspAUH8HFaUEYCNqX1yD9r9x+R2RmqtRrcwmj1fVf0KO/xH6bcBMDyYUH0xu7nVQhwMbNP+dq4LfxJqVGDEQO2fQHwBZ+WRlUwkbSEMDEskG5p3VEIgIkejEt0awauhQewhA/pZgN3QTnG1L7sQgG1qJLFrqC50DrgiQDLi4XGy/bojet4NzOXKEqMEXhpF8kr3Wne882YaGyL0pJZfTQFKVkWwEFoTzd90niojAdUM259z2o722HdJtYPJojL1zqmpBa7k487a+ZfJa5crksE6lPVcz8y7PeNOEqFgjGBUQuLDpwXLEX7R1dlmCnW6l4yMHBkrdRad0NWHOuOJEn+AMEZ5/y8wwwkf7d0PlI+Kt6zpYnODw9evLvDWh7QUdWPe4avw/yUAdh/0I8h1uG7mS7j7gQlEGnlaI0v773wDwi/vGHcS/J0So0aD8F8Z6THNjOU4nLMeFq35ESG9X8xxlNW+uffR8IGIe0RlHCfDD5X4Gol7J+d900PqBylqi1vQ8mE3HX7Kaq2mmHThMSHzq8qWLELNY6BeB77T1KwNOx7zSneej99Vi6E2YDQ1roVKohikjmI2TgkrLEA9c4Jyui7TKMMwSYZj4zFD1vEjdyWasKZqXKhSbk9zag8xTRedpCpsdQKdrVr9V/igHzCFK/sSb7wYZGQjwCN5FK/EyLnyLVqUbZpkQzBiryDFYamugQR00VA6lWGMMk3FyzU8jmM4ZOhi6nSyYkKyQH1HVMEVyimwhmOFXFClH0r0wGPDoKxFAcS+JkqN2ZYaJpYyMqjqxIiMRQjQS9lg2EdkabeTWMA2qiBCI55tV5ohaUvJlKBIyiTzaswdBIO7RIqVIlqz6dIxFSpEQtuufqsazcanynZ+tfH7llyW1tW9bI55fHpWpB/dAdbU2jypkToA2nVr91o9ywGym5N9pVZoaq7mTzJgq1KspGjYnu2mCqkJugepJIJbeOsPMSzAZy+JVT7VrHpcSXitVyGLBV5ru0sZKQeXlEIp9enaUq1tvvE6HKg1DZxp5pRAphGLgLj0M2UCpRyKSOc8op5GGfs5Qx5RVjpPGQYFR6Lx+zTC3pqXm6ZUptpPQyO4zCTwqLQuSx0psXIgcQh10i/89Co1SxjRMiWzW9SrV9qX6h6K/zb6uKCmK7TEJPM/t2Y144IRIUoQ8BkkpkgXbjZ4Fmi/DbnPiEZKQmYF4gDIybupZ2VkJriMJmwe0hS5HxgFB/V8yCTzywT/tCAYL6veS4ADQJZ0sOrKI5PoQ4J2C9L0Kg3nI/Wm/D/GCSfpfFQAHnIXzmO89gplVIqIJgHsQD9Ddgo6mSEFtNVQEWR5lH7buL7uf79595nlwT72oekIsEbLKaIpXLS2buwMTCaXE6meltv2PIXUpXUvU/J0g94jtnhc16zMwxbRSFLtFsUeAGZ6UOyBb/Z+IarDj3A/BNfOMijWMKvbHIzj6R6P2p9QFf/MAyQBZGkDzp+tayJqeZtNlmRK7ByuU7LserneOHmnbomKLy+3Geg135e7LvVud55tbV0PvFMO3QHm6oXkWvCyfT7EzVopV7uIZTH6dupqKun4OOuX9RsaRa+UvX3ZoRgA6da5Rm34t3UXHfhNZVrpYLbZEbznoDwDRcb5nxLCdYGKViSjy6H373cNWGabIQWyISDvunA7mJdYMchwF3K14p1rJUudzLeNyMX2zcb2LwnOPOUzcZ6bqptTl+HzbgdAWEb/PmfLtyotWXl5AvKwlywIe8fjSZD9cMowqAKwKXGDy9zWNSoIDYNZTH5S/9Z9219PdPcUUQ2tQ+D/+26hNt5U7pKY4MUAxPPMayHlEsj30djxdM/4NjIjv8sgkwAGmMYuGfvL8TlLkH6uHTbQ/Yr+YEz1/Jw7xy4fWl9NF570lnltqgbuigFBBMG6Dpi04nlh+Q3ElFwVQeU4mLp+YVM+CoSwFXVG+x9NdznqWBC7M6PADy9JyOa+gEHkkoYXS869JlWdKLaC/OMLLXQDG9gGxXf+LUehVuKeOJx7OOB4YN7Oz9CwrO5yQAx3Q/Sgstipexs1eWnH1fD4PxXKxpLlZJnlFmyAIyxSosWtPl7Weu7Xy3Bcg8Qykg1R980W12DwrD/UtyW/QPLUZy77n6gJnxmsfFU+OUfuvy0ErSeL/ohA9y4E4XhO+0cc5P0vHTcoUm2LSdXqNbRr7J5nHLKdqpTY7+1pk0vr/PASEHkwg3dt0OTB25EudTe7Pjmd/U6NkvYRmvb9ycPlsnjQXEg2OqWFR90fDr4u/tdQRSK1iB3+tS9tpAFK2b2vHoNk9K3Wh5SuFBz34PVTtw47bMze6t0nxD6fQnmC8316sLbjj++zcr+cZwX+aZY7lbsx1fdNlQ3N/9NHdPcX8sr/Ft7Ly1757on/4eZAXt2HB/XE05Nx8bQk9223Owpeyz8wLe1/y5pcxiZ8jtvbNdxt5XzOYfTc7D6Hv8oSUrmVmE3n+IJJusV3Oouxa8EQAZEk6uWW0S3yh0WM7/6ztb4s7S54pZ/M0ZwIcXyVzuE4C19rq8APRevNoG7SOy+11c2b0bfJZP89AN46Ms9Ghb+ruW5Pok/SK38Z4nfOBOMcoOviJ831vmpPu6sLABXcXIOLA854FHDLH77rBgsfLoU6vpHKSTZaEfFlgv9QbBdiphwuCAxzNrZCQ6eJRpgHNlgEuNO5ZDnDX6wrH8zwiFf00IbasIw/jz73jvVDbuQIbkxzbbfqNKXLlVDTs5fz/EccdcI4b73zIOX6ck3NuOQiFfhZLMGUaZlKfmCe+XFmFeFEcJQcTTDMpJolyAss2CRA0/e8S9BRPGvdKe6UYnpn4dPXQT7NF+JieSB29pffQb2wnWaY6RU7c8RNtTON00ZQgismCGJ1hZ1hzU0ys91gJpm4NM3tGtCgki2KCSeQ+Gnzf5nszVuMMhHzfzI9mswQ5ceVosDyqp/eVzr7MM6ZPYlhju9smlvULwoSixRouqJD+4mPcLbfDz+YRhVrVI2gKm+eqVj3xbLV1gomXYXbnIAnMw91eKQmL2XrnSHebxEkC53rfZ+uS+HaefSq+LzpLEIzmVZW3OtXuAkaM58gBUNhCB0q16ctkg+pzpTsTfDY9uYR5bP3hZB6pABBcD8XIn8s6gtVB5mDjxa9owS0lzQWQu3D2Y+G5YdeLmCBAd3wYz3Pg1TppfzeAcpNF6Wbg6xxWZ+vIQIyoqrYDeyuuXQH8rn62TU7ZMuTKPtft7G4kH38+oqNrbC+1OZltmDmlu/o2saNd6SxxqjB9P7+IA8/mRj3YDF6fVTmGRfstg+/u2dcwE1cRiB01ODlNuk1fYtrjWQr0PBfRMGa756RklYThATLzt8N2i/q7yydaLxP7R/zFmO9B+c4F+nyV2pXl8e/4u3Eg5JyV75zn5ZvxfdsXfbcu7p4Lxt2BZvp/8pc/PTPcQdmptaZL5py9F1dcK7QBKBw8pfli1wxBmCII5tCjnofQwjn1McSVuLmwC3n8K2dke65wXVjNkZrzlToerbOzt8QwHyeOHXDM6wiXgtae8XXUiYJCF5TbE2ny0afgvp1liHFhe47tGMf8nFM4lhFGbMQ6ZnpBnofFu1tOtC/r7cET+rssrjT/1OTJty8v/mvpo5eW8X7i4IqXIAJBlsxAACoGLaAVtIF2MBaMA+PBBDARTAKTQQfoBF1gCpgKpoHpYAaYCWaB2WAOmLtk3lklyrBci/sHK6rtkAwttvJ0UKm3WJppy9hB9zz1hVrJgHKKda+qhXsvSW2onhrYggz//8HyUOqdKjGuFncYUJcjgzprvWLNejcC1B2QoRUKhFQpwEEf1yJ9trfGkZbcfwsLuWTqc3cZkMxWfvdS2iGLXjc/7wOwLWOP706mnt1jgFWK50tWt6jkeeeoAe8iNdgxlIYBPUNdZ8Zl6S4XV03CMLkIUGkY3nvUJcTPjJ+pnylOP5dDfywFVBizgSKcCpniW3usKUDdE2RmSY3N2XawhAEfQh81UIRSIVMKZpaClZIaY+ISMfVuZruDtp1Vwrkx4zwV7V8PqZGpZEnM70kr9+VhTfP//0SJKsg5MFFTJPCJ1jxHDokTbyX6bTGTnII6krStJOHBB/Oo/skNyIiKEmibChnjW3tcKaAoFTIltW/9LzdBIyok0DY5GXvS9wRUvbctORl7MlJA22RkPKtEmpvH9LbysMcoKhUypWAZKdh3UiuY7PiGhHOXhcLkJaDuCTKzJMYQrI5s3Z7s8wD3RimoxVfkXD4l5GU8P5aW8/8R+Of/fz/4aswf/v8G/uGzDzY8mP/FzeWdv0LK+HZXZKPTGKBIZnA5nIri+8nK+Ak05gMIj5JK61wjayuZUVgKNVuaH8stBudBXlqsGjadeB6GOUU3vCrgR/RYGVa5tOi60j7Mg2IPjFKQEFXFqXJuVKBQRXteCCFxiJoAyn6Qf2NdiqYJAF3YMKqPtopTUS0qIqlQk23wisTeFwgzcKCK+JHS1VhkOlqGQwDCtyIBECPvPDDk/5pIOd88vIWXcymq8GO8tDSuVAAPMMKWQIDwvQxIdymh/WcH4XmrlFtARiuFbz+AUt5sv7T88PrxH3FGaN+rvFyGfHA4MlhQeJViNtIgadRZpx/ITe+lHHG18uWagnbBctYLuhwiBsIbZqU9siez+0anaQ1yC7zfQvH5XubbKj9oc6WpDIOQdKacY7DsuqutXE9H70PTxGXPN6hn/nEeXAH5VRIgeCnskHek29K9lE7na3GDnI/0y4isxM9SNRpj4PjyyHnlRQDljV3bIIIDtRFxbRGEeRlOOvDcaC5mCT5sKMugZYtYATr2ghURLCSyGvi2cVaC6FRWi5Q8iPWAt9gk6wnRIawXm/iI9YFOU5b11fqWrB9s0ns2AD5ax/MHQqutTACJnkCzgRVLiGAqy+DHJrECctgqVoSlEqtBlFAiK0G0LatFYZ+sB8LEMllPiLZhvVR9E1gf5Gi8WF9nNQrrh6o3lw1AhDb89QfCT5vHhhYmZA4yySSNBM7ZXH02ymrqpdcxLNaINFJaB60sIeXQnibIamjFIs1kmaQFlkHaijSrlagljxlLDSuEEVO3JpdIkRSx3X5+EglhL3aPxUidqquKORedUmih06B8lvdMO9GKFVtCWBxYU6EcgU+QW+1I4rTYQUGxq14lUpF0SyQlslbh5c2v1aiqZTHmhEqsRm12XUCArUVNjnogYUqEI/rPiW60iWghTI+bSG1jgn67GLWFpoBTV93/52JtUV2qQOVynPBTz8st4gZcyC2BHzfbPO7fbcD99i6Kyaod1xhLGElDJizFt6qijyAAt2YuLvbgfYWzdLaPx8O9y6W2y4H6aEB1rXh7tWFlLMHReCCFRI7r8ivJVlM9VVVBdoUTI92FgAVSkiPZkT1lNcmWxIe5RcU4qpicT6ztvFxy74RGypgjJF+3dhLQLCf4p9jMJ0tMepPYPEiVt+LrxUpHcO4WwZylufnIT34N3nKgumbO3eFIVN/5KsFAFwuHjjtGbydJUqfOFmhlyZ9TUgw1MiapqObl/G+1LxUdRr1esccLCVG/UAc39b3J6ikBVS+aLIc/sTOuN8PIyi3sJR7warxYNQ+pcCAOGNkTTmePm8GyMO0/db8QBqP9f8FOHM5w7ZWg7UA1wvD8gfjAGP/1pjwAgRGDMCe7xaUPLMEwTMd4rMJtjMMR3MdqLMY6nMIJrEdz2g0t/aCVT5zGBZzFOZzHK7T2i4u4hA1Q3HEdV3ENhf7xDqOgiiqNWuuBDgY9luxlB0d/6Oni7Ip++lqEAehvIAYhfG/xHrtJIJE0JJGWPPAP/5MnrziBvMmHfBH5kT8FUCAFUTCFUCiFUTh+4hdFUCRFUTTFUDHS0X8kk56BjP3GjVnYlVnJFi+OxIoTL0GipB7jCSVzcHJJkSpNugyZsmTLoVwbsYny5CtQXAkluZXqD/7iKZ5RaWWUVU55FVRUSWVVVFVNdTXUVEttddRVT30NsIcaaqSxJj3HC2qqmeZadBOPcAd3cQ8PcQsPqKVWWlMUKqJq03bswFFsxbaT8Gdu3PkyP9V4mLWbuiRHupZtQbmPncD+lGDh1P4GEPZRttTnx96WDFrQ8aZ/U/kp8XJoeygEDc6T8OdpBD0d6SWx0iiJiAxpcWIlS5ICiXVFSB4iYkiLk9mXzItB/nEFYQLMxypFgVsV73xLP5rsLG5KNSKqVLYwqkbKuxGqxsoq6CLBehDGvvq9DU24UDBYYpuM4kyztDKGVPOeh8Ub6WKsmC5iMd3jSLHLJekGsm0a7SM2039N0S7WfUj3t63pe2OfysOTGZlivJgp4jFTHj4HMz+eCTSp07omsxzyCMpIi4YDgb3DyykRLuVaG9bPAoUKR9dIyKxr6XAqh/W6WziGysesBQqdFFkX9vHPnyj8zRytfsdgCpx5ZHowV4vLfAm4Ynxw5j1oqRRHZj+mhBT7KYG076RYLLNf3cambD+bbtHuxzzSUuIZDKgFyQAA);
}

   `
document.head.appendChild(Style_font);

    const blob = new Blob([` `], { type: "text/javascript" }),
      S = document.createElement("script");
    S.setAttribute("nonce", window.stmp);
    S.src = URL.createObjectURL(blob);
    S.onload = function () {
      setTimeout(() => {
        URL.revokeObjectURL(blob);
      }, 1000);
    };
  },
  style_rebuild: function () {
    const style = document.createElement("style");
    style.setAttribute("nonce", window.stmp);
    var temp = "";
    style.setAttribute("type", "text/css");
    style.setAttribute("data-what", "generated2");
    document.querySelectorAll("link[rel='stylesheet']").forEach(function (res) {
      temp += `@import '${res.getAttribute("href")}';\n`;
    });
    document.querySelectorAll("style").forEach(function (res) {
      temp += res.innerHTML;
    });
    style.innerHTML = temp;
    const blob = new Blob([temp], { type: "text/css" });
    document.head.appendChild(style);
    style.onload = function () {
      document
        .querySelectorAll("style:not([data-what='generated2']);")
        .forEach(function (res) {
          res.remove();
        });
      document
        .querySelectorAll("link[rel='stylesheet']")
        .forEach(function (res) {
          res.remove();
        });
    };
  },
  TWO_PI: Math.PI * 2,
  Application: class {
    constructor() {
      this.canvas = document.getElementById("canvas");
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
          let circleContainer = new welcomer.CircleContainer(
            this.context,
            x,
            y
          );
          circleContainer.initializeCircles();
          this.circleContainers.push(circleContainer);
        }
      }
    }
    update() {
      for (let i = 0; i < this.circleContainers.length; i++) {
        if ($("#clavs").attr("style") == "transform:translateY(-100%);") {
          this.circleContainers[i].update();
        }
      }
    }
    render() {
      this.context.clearRect(0, 0, this.width, this.height);
      for (let i = 0; i < this.circleContainers.length; i++) {
        if ($("#clavs").attr("style") == "transform:translateY(-100%);") {
          this.circleContainers[i].render();
        }
      }
    }
    loop() {
      this.update();
      this.render();
      window.requestAnimationFrame(() => this.loop());
    }
  },
  CircleContainer: class {
    constructor(context, x, y) {
      this.context = context;
      this.position = { x, y };
      this.numberOfCircles = 19;
      this.bounceRadius = 150;
      this.circles = [];
      this.baseRadius = 20;
      this.singleSlice = welcomer.TWO_PI / this.numberOfCircles;
    }
    initializeCircles() {
      for (let i = 0; i < this.numberOfCircles; i++) {
        this.circles.push(
          new welcomer.Circle(
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
  },
  Social: {
    tg: {
      conf: { id: "nikoliccc02", count: 323 },
      open: function () {
        window.open(`https://t.me/${this.conf.id}`);
      },
      isInViewport: function (element) {
        var rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      },
      start_scr: function () {
        document
          .querySelectorAll(
            ".Ignoring_me_iframe.shadow_root div iframe[data-src]"
          )
          .forEach(function (res) {
            if (res.hasAttribute("data-src")) {
              if (welcomer.Social.tg.isInViewport(res)) {
                res.setAttribute("src", res.getAttribute("data-src"));
                res.removeAttribute("data-src");
                res.onload = function () {
                  res.removeAttribute("style");
                };
              }
            }
          });
      },
      start: function () {
        this.open();
        return;
        $(document).ready(function () {
          var elm = document.querySelector(".Ignoring_me_iframe.shadow_root"),
            div = document.createElement("div");
          elm.appendChild(div);
          div.addEventListener("scroll", function () {
            welcomer.Social.tg.start_scr();
          });
          for (var i = welcomer.Social.tg.conf.count; i > 0; i--) {
            var script = document.createElement("iframe");
            script.onerror = function () {
              script.remove();
            };
            script.onload = function () {
              if (
                $(script)
                  .contents()
                  .find(".tgme_widget_message_error")
                  .html() == "Post not found"
              ) {
                script.remove();
              }
            };
            script.setAttribute("preload", "none");
            script.setAttribute("loading", "lazy");
            script.setAttribute(
              "data-src",
              `https://t.me/${welcomer.Social.tg.conf.id}/${i}?embed=2`
            );
            div.appendChild(script);
          }
          welcomer.Social.tg.start_scr();
        });
      },
    },
  },
  Circle: class {
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
      context.arc(
        this.position.x,
        this.position.y,
        this.size,
        0,
        welcomer.TWO_PI
      );
      context.fill();
    }
  },
  countFPS: (function () {
    setInterval(function () {
      var lastLoop = new Date().getMilliseconds();
      var count = 1;
      var fps = 0;
      return function () {
        var currentLoop = new Date().getMilliseconds();
        if (lastLoop > currentLoop) {
          fps = count;
          count = 1;
        } else {
          count += 1;
        }
        lastLoop = currentLoop;
        return fps;
      };
    }, 100);
  })(),
};

//;