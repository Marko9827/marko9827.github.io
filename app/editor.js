customElements.define(
    "rich-text-editor",
    class extends HTMLElement {
      constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.history = [];
        this.historyIndex = -1;
        this.isGenerating = false;
        this.debounceTimeout = null;
      }
  
      connectedCallback() {
        const style = document.createElement("style");
        style.textContent = `
           /* Prilagođeni stilovi za Shadow DOM */
          :host {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
              display: block;
              width: 100%;
              max-width: 1000px;
              background-color: transparent;
              color: #1f2937;
              border-radius: 0.75rem;
              -webkit-box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
              overflow: hidden;
              -webkit-transition: all 0.3s ease;
              -o-transition: all 0.3s ease;
              transition: all 0.3s ease;
              border: 1px solid #e5e7eb;
          }
          
          :host(.dark) {
              background-color: transparent;
              color: #d1d5db;
              border-color: #ffffff42;
          }

          :host:hover  {
            border-color: White;
          }
  
          .toolbar {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -ms-flex-wrap: wrap;
                  flex-wrap: wrap;
              gap: 0.5rem;
              padding: 0.2rem;
              border-bottom: 1px solid #e5e7eb;
              background-color: transparent;
          }
  
          :host(.dark) .toolbar {
              border-color: #ffffff42;
              background-color: transparent;
          }
  
          .toolbar button {
              padding: 0.6rem;
              border-radius: 0.5rem;
              -webkit-transition: all 0.2s ease;
              -o-transition: all 0.2s ease;
              transition: all 0.2s ease;
              color: inherit;
              background-color: transparent;
              border: 1px solid transparent;
              width: 40.19px;
    height: 40.19px;
          }

             .toolbar button icon-i { 
                    font-size: 20px; 
                    display: block;
                    height: 19px; 
                }

          .toolbar button:hover {
              background-color: #e5e7eb;
              border-color: #d1d5db;
          }
          :host(.dark) .toolbar button:hover {
              background-color: #4b5563;
              border-color: #6b7280;
          }
          .toolbar button:active {
              -webkit-transform: scale(0.95);
                  -ms-transform: scale(0.95);
                      transform: scale(0.95);
          }
  
          .editor {
              min-height: 500px;
              padding: .5rem;
              outline: none;
              line-height: 1.75;
              font-size: 1.125rem;
              overflow: hidden;
          }
          .editor:focus {
              outline: none;
              outline-offset: -2px;
          }
  
          /* Modal styles */
          .modal {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.6);
              z-index: 50;
              display: none;
              -webkit-box-align: center;
                  -ms-flex-align: center;
                      align-items: center;
              -webkit-box-pack: center;
                  -ms-flex-pack: center;
                      justify-content: center;
              opacity: 0;
              -webkit-transition: opacity 0.3s ease;
              -o-transition: opacity 0.3s ease;
              transition: opacity 0.3s ease;
          }
          .modal.show {
              opacity: 1;
          }
          .modal-content {
              background-color: #fff;
              color: #1f2937;
              padding: 1.5rem;
              border-radius: 0.75rem;
              width: 100%;
              max-width: 40rem;
              -webkit-transform: translateY(-20px);
                  -ms-transform: translateY(-20px);
                      transform: translateY(-20px);
              -webkit-transition: -webkit-transform 0.3s ease;
              transition: -webkit-transform 0.3s ease;
              -o-transition: transform 0.3s ease;
              transition: transform 0.3s ease;
              transition: transform 0.3s ease, -webkit-transform 0.3s ease;
          }
          .modal.show .modal-content {
              -webkit-transform: translateY(0);
                  -ms-transform: translateY(0);
                      transform: translateY(0);
          }
          :host(.dark) .modal-content {
              background-color: #1f2937;
              color: #d1d5db;
          }
          
          /* Editor styling */
          .editor h1, .editor h2, .editor h3 {
              font-weight: bold;
              margin: 1.5rem 0 1rem;
          }
          .editor h1 { font-size: 2.25rem; }
          .editor h2 { font-size: 1.875rem; }
          .editor h3 { font-size: 1.5rem; }
          .editor p, .editor li { margin-bottom: 0.75rem; }
          .editor b, .editor strong { font-weight: bold; }
          .editor i, .editor em { font-style: italic; }
          .editor u { text-decoration: underline; }
          .editor ul, .editor ol { list-style-position: inside; padding-left: 1rem; }
          .editor table { width: 100%; border-collapse: collapse; margin: 1rem 0; border: 1px solid #d1d5db; }
          .editor th, .editor td { border: 1px solid #d1d5db; padding: 0.75rem; text-align: left; }
          :host(.dark) .editor table { border-color: #4b5563; }
          :host(.dark) .editor th, :host(.dark) .editor td { border-color: #4b5563; }
          .editor pre {
              background-color: #f3f4f6;
              padding: 1rem;
              border-radius: 0.5rem;
              overflow-x: auto;
              font-family: 'monospace';
              color: #1f2937;
              white-space: pre-wrap;
          }
          :host(.dark) .editor pre {
              background-color: #4b5563;
              color: #d1d5db;
          }
          .editor pre code {
              background-color: #f3f4f6;
              color: #1f2937;
              font-family: 'monospace';
              white-space: pre;
              word-wrap: normal;
              padding: 0;
          }
          :host(.dark) .editor pre code {
              background-color: #4b5563;
              color: #d1d5db;
          }
          .editor code {
              background-color: #f3f4f6;
              padding: 0.25rem 0.5rem;
              border-radius: 0.375rem;
              font-family: 'monospace';
              white-space: pre-wrap;
          }
          :host(.dark) .editor code {
              background-color: #4b5563;
          }
  
       
          :host(.dark) #gemini-modal-content textarea {
              background-color: #4b5563;
              color: #d1d5db;
              border-color: #6b7280;
          }
          #copy-feedback {
              position: fixed;
              top: 2rem;
              right: 2rem;
              background-color: #10b981;
              color: white;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              opacity: 0;
              -webkit-transition: opacity 0.3s ease-in-out;
              -o-transition: opacity 0.3s ease-in-out;
              transition: opacity 0.3s ease-in-out;
              z-index: 100;
          }
          #copy-feedback.show {
              opacity: 1;
          }

          /* Context Menu Styles */
          .context-menu {
              position: absolute;
              background-color: #fff;
              border: 1px solid #e5e7eb;
              border-radius: 0.5rem;
              -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              z-index: 99;
              display: none;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
                  -ms-flex-direction: column;
                      flex-direction: column;
              min-width: 120px;
              padding: 0.25rem;
          }

          :host(.dark) .context-menu {
                 background-color: #00000057;
    -webkit-backdrop-filter: blur(1px);
            backdrop-filter: blur(1px);
    border-color: #ffffff69;
          }

          .context-menu button icon-i { 
    display: block;
    width: 20px;
    margin-top: 3px; 
          }

          .context-menu button {
              width: 100%;
              text-align: left;
              padding: 0.5rem 0.75rem;
              border: none;
              background-color: transparent;
              cursor: pointer;
              color: inherit;
              border-radius: 0.375rem;
              
    display: -webkit-box;
              
    display: -ms-flexbox;
              
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-line-pack: center;
        align-content: center;

          }

          .context-menu button:hover {
              background-color: #f3f4f6;
          }

          :host(.dark) .context-menu button:hover {
              background-color: #4b5563;
          }

          .context-menu.show {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
          }

          custom-scroll {
    display: block;
    height: 322px;
    max-height: 322px;
}
        `;
        this.shadow.appendChild(style);
  
        const mainContainer = document.createElement("div");
        mainContainer.className = "w-full h-full";
  
        // Toolbar
        const toolbar = document.createElement("div");
        toolbar.id = "toolbar";
        toolbar.className = "toolbar";
        toolbar.innerHTML = `
          <button id="undo" title="Undo"><icon-i class="arrow-counterclockwise"></icon-i></button>
          <button id="redo" title="Redo"><icon-i class="arrow-clockwise"></icon-i></button>
          <button id="bold" title="Bold"><b>B</b></button>
          <button id="italic" title="Kurziv"><i>I</i></button>
          <button id="underline" title="Underline"><u>U</u></button>
          <button id="heading1" title="Naslov H1">H1</button>
          <button id="heading2" title="Naslov H2">H2</button>
          <button id="ulist" title="Lista"><icon-i class="list-ul"></icon-i></button>
          <button id="olist" title="Numerisana lista">OL</button>  
        `;
        mainContainer.appendChild(toolbar);
  
        // Editor area
        const custom_scrooll = document.createElement("custom-scroll");
        this.editor = document.createElement("div");
        this.editor.id = "editor-content";
        this.editor.className = "editor";
        this.editor.setAttribute("contenteditable", "true");
        mainContainer.appendChild(custom_scrooll);
        custom_scrooll.appendChild(this.editor);
  
        // Custom Context Menu
        this.contextMenu = document.createElement("div");
        this.contextMenu.id = "customContextMenu";
        this.contextMenu.className = "context-menu_";

        this.contextMenu_copy = document.createElement("button");
        this.contextMenu_cut = document.createElement("button");
        this.contextMenu_paste = document.createElement("button");

        const contextMenu_i_c = document.createElement("icon-i"),
        contextMenu_t_c = document.createElement("icon-i"),
        contextMenu_p_c = document.createElement("icon-i");

        this.contextMenu_copy.appendChild(contextMenu_i_c);
        contextMenu_i_c.setAttribute("class","copy");
        this.contextMenu_copy.appendChild(document.createTextNode("Copy"));
        
        this.contextMenu_cut.appendChild(contextMenu_t_c);
        contextMenu_t_c.setAttribute("class","scissors");
        this.contextMenu_cut.appendChild(document.createTextNode("Cut"));

        this.contextMenu_paste.appendChild(contextMenu_p_c);
        contextMenu_p_c.setAttribute("class","clipboard");
        this.contextMenu_paste.appendChild(document.createTextNode("Paste"));

        this.contextMenu.appendChild(this.contextMenu_copy);
        this.contextMenu.appendChild(this.contextMenu_cut);      
        this.contextMenu.appendChild(this.contextMenu_paste);

        /*
        this.contextMenu.innerHTML = `
          <button id="context-copy"><icon-i class="copy"></icon-i>Copy</button>
          <button id="context-cut"><icon-i class="scissors"></icon-i>Cut</button>
          <button id="context-paste"><icon-i class="clipboard"></icon-i> Paste</button>
        `;*/
        

        this.shadow.appendChild(mainContainer);
  
        // Table Modal
        const tableModal = document.createElement("div");
        tableModal.id = "tableModal";
        tableModal.className = "modal";
        tableModal.innerHTML = `
          <div class="modal-content">
              <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                  <h3 style="font-size: 1.25rem; font-weight: bold;">Umetni tablicu</h3>
                  <button id="closeTableModal" style="color: #9ca3af; background: none; border: none; cursor: pointer; font-size: 1.25rem;">
                      &times;
                  </button>
              </div>
              <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
                      <label for="tableRows" style="width: 6rem;">Redovi:</label>
                      <input type="number" id="tableRows" value="3" min="1" style="flex-grow: 1; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.25rem;">
                  </div>
                  <div style="display: flex; align-items: center;">
                      <label for="tableCols" style="width: 6rem;">Kolone:</label>
                      <input type="number" id="tableCols" value="3" min="1" style="flex-grow: 1; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.25rem;">
                  </div>
                  <button id="insertTableBtn" style="margin-top: 1rem; background-color: #22c55e; color: white; padding: 0.5rem; border-radius: 0.25rem; border: none; cursor: pointer;">
                      Umetni
                  </button>
              </div>
          </div>
        `;
        this.shadow.appendChild(tableModal);
  
        // Markdown Modal
        const markdownModal = document.createElement("div");
        markdownModal.id = "markdownModal";
        markdownModal.className = "modal";
        markdownModal.innerHTML = `
          <div class="modal-content">
              <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                  <h3 style="font-size: 1.25rem; font-weight: bold;">Markdown Sadržaj</h3>
                  <button id="closeMarkdownModal" style="color: #9ca3af; background: none; border: none; cursor: pointer; font-size: 1.25rem;">
                      &times;
                  </button>
              </div>
              <textarea id="markdownOutput" style="width: 100%; height: 16rem; margin-top: 1rem; padding: 0.75rem; background-color: #f3f4f6; color: #111827; border-radius: 0.375rem; resize: none;"></textarea>
              <button id="copyToClipboardBtn" style="margin-top: 1rem; width: 100%; background-color: #3b82f6; color: white; padding: 0.75rem; border-radius: 0.375rem; border: none; cursor: pointer;">
                  Kopiraj u međuspremnik
              </button>
          </div>
        `;
        this.shadow.appendChild(markdownModal);
  
        // Gemini Modal
        const geminiModal = document.createElement("div");
        geminiModal.id = "geminiModal";
        geminiModal.className = "modal";
        geminiModal.innerHTML = `
          <div class="modal-content" id="gemini-modal-content">
              <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                  <h3 style="font-size: 1.25rem; font-weight: bold;" id="gemini-modal-title">AI rezultat</h3>
                  <button id="closeGeminiModal" style="color: #9ca3af; background: none; border: none; cursor: pointer; font-size: 1.25rem;">
                      &times;
                  </button>
              </div>
              <div id="gemini-loading" class="text-center py-8">
                  <div style="display: inline-block; width: 2rem; height: 2rem; border: 4px solid #e5e7eb; border-top: 4px solid #3b82f6; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                  <p style="margin-top: 1rem;">Generisanje...</p>
              </div>
              <div id="gemini-result-container" style="margin-top: 1rem; display: none;">
                  <textarea id="gemini-output" style="width: 100%; min-height: 150px; padding: 0.75rem; border-radius: 0.375rem; border: 1px solid #e5e7eb;"></textarea>
                  <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                      <button id="insertGeminiBtn" style="flex-grow: 1; background-color: #22c55e; color: white; padding: 0.75rem; border-radius: 0.375rem; border: none; cursor: pointer;">Umetni</button>
                      <button id="cancelGeminiBtn" style="flex-grow: 1; background-color: #ef4444; color: white; padding: 0.75rem; border-radius: 0.375rem; border: none; cursor: pointer;">Prekini</button>
                  </div>
              </div>
          </div>
        `;
        this.shadow.appendChild(geminiModal);
  
        // Custom Alert/Feedback Message
        const copyFeedback = document.createElement("div");
        copyFeedback.id = "copy-feedback";
        copyFeedback.className = "hidden";
        this.shadow.appendChild(copyFeedback);
  
        this.copyMarkdownBtn = this.shadow.getElementById("copyMarkdown");
        this.insertTableBtn = this.shadow.getElementById("insertTable");
        this.downloadMarkdownBtn = this.shadow.getElementById("downloadMarkdown");
        this.themeToggleButton = this.shadow.getElementById("themeToggle");
        this.summarizeBtn = this.shadow.getElementById("summarizeBtn");
        this.continueBtn = this.shadow.getElementById("continueBtn");
        this.insertCodeBlockBtn = this.shadow.getElementById("insertCodeBlock");
  
        this.tableModal = tableModal;
        this.markdownModal = markdownModal;
        this.geminiModal = geminiModal;
        this.copyFeedback = copyFeedback;
  
        this.setupEventListeners();
        this.saveState();
        this.applyInitialTheme();
        this.highlightCode();
      }
  
      // Dodat getter/setter za value
      get value() {
        return window.btoa(this.editor.innerHTML);
      }
  
      set value(htmlString) {
        // Čisti postojeći sadržaj
        while (this.editor.firstChild) {
          this.editor.removeChild(this.editor.firstChild);
        }
        
        // Parsira HTML string i dodaje čvorove
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlString;
        const fragment = document.createDocumentFragment();
        while (tempDiv.firstChild) {
          fragment.appendChild(tempDiv.firstChild);
        }
        this.editor.appendChild(fragment);
  
        this.saveState();
        this.highlightCode();
      }
  
      insertInlineCode() {
        this.editor.focus();
        const selection = this.shadow.getSelection();
        if (!selection.rangeCount) return;
  
        const range = selection.getRangeAt(0);
  
        const codeElement = document.createElement("code");
        codeElement.textContent = "unesite kod ovde";
  
        range.deleteContents();
        range.insertNode(codeElement);
  
        const newRange = document.createRange();
        newRange.selectNodeContents(codeElement);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
  
        this.saveState();
      }
  
      insertCodeBlock() {
        this.editor.focus();
        const selection = this.shadow.getSelection();
        if (!selection.rangeCount) return;
  
        const range = selection.getRangeAt(0);
        range.deleteContents();
  
        const preElement = document.createElement("pre");
        const codeElement = document.createElement("code");
        codeElement.textContent = "unesite kod ovde";
        preElement.appendChild(codeElement);
  
        // Ubacujemo novi element i prazan paragraf nakon njega
        range.insertNode(preElement);
        const paragraph = document.createElement("p");
        range.insertNode(paragraph);
  
        // Pomeramo kursor unutar code elementa
        const newRange = document.createRange();
        newRange.setStart(codeElement, 0);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
  
        this.saveState();
        this.highlightCode();
      }
  
      highlightCode() {
        // Ova funkcija zavisi od lokalno ugrađene highlight.js biblioteke
        if (typeof hljs !== "undefined") {
          const codeBlocks = this.shadow.querySelectorAll("pre code");
          codeBlocks.forEach((block) => {
            if (!block.dataset.highlighted) {
              hljs.highlightElement(block);
              block.dataset.highlighted = "true";
            }
          });
        }
      }
  
      setupEventListeners() {
        this.shadow
          .getElementById("bold")
          .addEventListener("click", () => this.formatDoc("bold"));
        this.shadow
          .getElementById("italic")
          .addEventListener("click", () => this.formatDoc("italic"));
        this.shadow
          .getElementById("underline")
          .addEventListener("click", () => this.formatDoc("underline"));
        this.shadow
          .getElementById("heading1")
          .addEventListener("click", () => this.applyHeading("H1"));
        this.shadow
          .getElementById("heading2")
          .addEventListener("click", () => this.applyHeading("H2"));
        this.shadow
          .getElementById("ulist")
          .addEventListener("click", () => this.formatDoc("insertUnorderedList"));
        this.shadow
          .getElementById("olist")
          .addEventListener("click", () => this.formatDoc("insertOrderedList"));
        this.shadow
          .getElementById("undo")
          .addEventListener("click", () => this.formatDoc("undo"));
        this.shadow
          .getElementById("redo")
          .addEventListener("click", () => this.formatDoc("redo"));

          /*
        this.shadow
          .getElementById("insertInlineCode")
          .addEventListener("click", () => this.insertInlineCode());
        this.insertCodeBlockBtn.addEventListener("click", () =>
          this.insertCodeBlock()
        );
  
        this.copyMarkdownBtn.addEventListener("click", () =>
          this.showMarkdownModal()
        );
        this.insertTableBtn.addEventListener("click", () =>
          this.showTableModal()
        );
        this.downloadMarkdownBtn.addEventListener("click", () =>
          this.downloadMarkdown()
        );
        this.themeToggleButton.addEventListener("click", () =>
          this.toggleTheme()
        );
        this.summarizeBtn.addEventListener("click", () =>
          this.callGeminiAPI("summarize")
        );
        this.continueBtn.addEventListener("click", () =>
          this.callGeminiAPI("continue")
        );
  
        this.shadow
          .getElementById("insertTableBtn")
          .addEventListener("click", () => this.insertTable());
        this.shadow
          .getElementById("copyToClipboardBtn")
          .addEventListener("click", () => this.copyToClipboard());
        this.shadow
          .getElementById("closeTableModal")
          .addEventListener("click", () =>
            this.tableModal.classList.remove("show")
          );
        this.shadow
          .getElementById("closeMarkdownModal")
          .addEventListener("click", () =>
            this.markdownModal.classList.remove("show")
          );
        this.shadow
          .getElementById("closeGeminiModal")
          .addEventListener("click", () => this.closeGeminiModal());
        this.shadow
          .getElementById("insertGeminiBtn")
          .addEventListener("click", () => this.insertGeminiContent());
        this.shadow
          .getElementById("cancelGeminiBtn")
          .addEventListener("click", () => this.closeGeminiModal());
  */
        this.editor.addEventListener("input", () => {
          this.saveState();
          clearTimeout(this.debounceTimeout);
          this.debounceTimeout = setTimeout(() => this.highlightCode(), 500);
        });
        this.editor.addEventListener("keyup", (e) =>
          this.checkMarkdownShortcuts(e)
        );
        this.editor.addEventListener("keydown", (e) =>
          this.checkKeyboardShortcuts(e)
        );
        this.editor.addEventListener("paste", (e) => this.handlePaste(e));
        
        // Custom context menu event listeners
        this.editor.addEventListener("contextmenu", (e) => this.showContextMenu(e));
        
        this.contextMenu_copy.addEventListener("click", () => this.handleContextMenuAction("copy"));
        this.contextMenu_cut.addEventListener("click", () => this.handleContextMenuAction("cut"));
        this.contextMenu_paste.addEventListener("click", () => this.handleContextMenuAction("paste"));

        // Hide context menu when clicking outside
        window.addEventListener("click", (e) => {
          if (!this.contextMenu.contains(e.target)) {
            this.hideContextMenu();
          }
        });
      }

      showContextMenu(e) {
        e.preventDefault();
        document.body.appendChild(this.contextMenu);
        const editorRect = this.editor.getBoundingClientRect();
        this.contextMenu.style.top = `${e.clientY - editorRect.top }px`;
        this.contextMenu.style.left = `${e.clientX - editorRect.left}px`;
        const dlxy = document.querySelector("svg.loader.custom-cursor-svg");
        this.contextMenu.style.top =  `${dlxy.style.top }`;
        this.contextMenu.style.left = `${dlxy.style.left}`;
        this.contextMenu.classList.add("show");
      }

      hideContextMenu() {
        this.contextMenu.classList.remove("show");
        document.querySelectorAll(".context-menu_").forEach((res) => res.remove());
      }

      handleContextMenuAction(command) {
        this.editor.focus();
        document.execCommand(command);
        this.hideContextMenu();
      }
  
      formatDoc(command) {
        this.editor.focus();
        document.execCommand(command, false, null);
      }
  
      applyHeading(tag) {
        this.editor.focus();
        document.execCommand("formatBlock", false, tag);
      }
  
      checkMarkdownShortcuts(e) {
        const selection = this.shadow.getSelection();
        if (!selection.rangeCount) return;
  
        const range = selection.getRangeAt(0);
        const textNode = range.startContainer;
  
        if (textNode.nodeType !== Node.TEXT_NODE) return;
  
        const text = textNode.textContent;
        const cursorPosition = range.startOffset;
  
        if (e.key === "`" && cursorPosition >= 2) {
          const beforeCursor = text.slice(0, cursorPosition);
          const lastBacktick = beforeCursor.lastIndexOf("`");
  
          if (lastBacktick !== -1 && lastBacktick < cursorPosition - 1) {
            const codeContent = beforeCursor.slice(
              lastBacktick + 1,
              cursorPosition - 1
            );
  
            const replaceRange = document.createRange();
            replaceRange.setStart(textNode, lastBacktick);
            replaceRange.setEnd(textNode, cursorPosition);
  
            replaceRange.deleteContents();
  
            const codeElem = document.createElement("code");
            codeElem.textContent = codeContent;
            replaceRange.insertNode(codeElem);
  
            const newRange = document.createRange();
            newRange.setStartAfter(codeElem);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
  
            this.saveState();
            return;
          }
        }
        if (
          (e.key === " " || e.key === "Enter") &&
          text.slice(cursorPosition - 3, cursorPosition) === "```"
        ) {
          range.setStart(textNode, cursorPosition - 3);
          range.setEnd(textNode, cursorPosition);
          range.deleteContents();
  
          const pre = document.createElement("pre");
          const code = document.createElement("code");
          code.appendChild(document.createTextNode(""));
          pre.appendChild(code);
          range.insertNode(pre);
  
          const newRange = document.createRange();
          newRange.setStart(code, 0);
          newRange.collapse(true);
          selection.removeAllRanges();
          selection.addRange(newRange);
  
          this.saveState();
          this.highlightCode();
        }
      }
  
      checkKeyboardShortcuts(e) {
        if (e.key === "Enter") {
          const selection = this.shadow.getSelection();
          if (!selection.rangeCount) return;
  
          const parentNode = selection.anchorNode.parentNode;
          if (parentNode.tagName === "CODE" || parentNode.tagName === "PRE") {
            e.preventDefault();
            const range = selection.getRangeAt(0);
            const br = document.createElement("br");
            range.deleteContents();
            range.insertNode(br);
            range.setStartAfter(br);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
            this.saveState();
            this.highlightCode();
            return;
          }
        }
        if (e.ctrlKey || e.metaKey) {
          switch (e.key.toLowerCase()) {
            case "b":
              e.preventDefault();
              this.formatDoc("bold");
              break;
            case "i":
              e.preventDefault();
              this.formatDoc("italic");
              break;
            case "u":
              e.preventDefault();
              this.formatDoc("underline");
              break;
            case "z":
              e.preventDefault();
              this.formatDoc("undo");
              break;
            case "y":
              e.preventDefault();
              this.formatDoc("redo");
              break;
          }
        }
      }
  
      handlePaste(e) {
        e.preventDefault();
        const text = (e.clipboardData || window.clipboardData).getData(
          "text/plain"
        );
        document.execCommand("insertText", false, text);
        this.saveState();
        this.highlightCode();
      }
  
      saveState() {
        const currentContent = this.editor.innerHTML;
        if (this.history[this.historyIndex] !== currentContent) {
          this.history = this.history.slice(0, this.historyIndex + 1);
          this.history.push(currentContent);
          this.historyIndex++;
        }
      }
  
      // Markdown
      showMarkdownModal() {
        const htmlContent = this.editor.innerHTML;
        const markdownContent = this.convertToMarkdown(htmlContent);
        this.shadow.getElementById("markdownOutput").value = markdownContent;
        this.markdownModal.style.display = "flex";
        setTimeout(() => this.markdownModal.classList.add("show"), 10);
      }
  
      downloadMarkdown() {
        const htmlContent = this.editor.innerHTML;
        const markdownContent = this.convertToMarkdown(htmlContent);
  
        const blob = new Blob([markdownContent], {
          type: "text/plain;charset=utf-8",
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "document.txt";
  
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        this.showFeedback("Preuzeto!", "bg-gray-500");
      }
  
      convertToMarkdown(html) {
        let markdown = html.replace(/<br\s*\/?>/gi, "\n");
        markdown = markdown.replace(/<\/div>/gi, "\n");
        markdown = markdown.replace(/<p[^>]*>/gi, "\n");
        markdown = markdown.replace(/<\/p>/gi, "\n");
        markdown = markdown.replace(/<h1[^>]*>(.*?)<\/h1>/gi, "\n# $1\n");
        markdown = markdown.replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n## $1\n");
        markdown = markdown.replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n### $1\n");
        markdown = markdown.replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**");
        markdown = markdown.replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**");
        markdown = markdown.replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*");
        markdown = markdown.replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*");
        markdown = markdown.replace(/<u[^>]*>(.*?)<\/u>/gi, "<u>$1</u>");
  
        markdown = markdown.replace(/<ul>(.*?)<\/ul>/gis, (match, p1) => {
          return p1.replace(/<li>(.*?)<\/li>/gis, "- $1\n");
        });
        markdown = markdown.replace(/<ol(.*?)<\/ol>/gis, (match, p1) => {
          let count = 1;
          return p1.replace(
            /<li>(.*?)<\/li>/gis,
            (liMatch, liContent) => `${count++}. ${liContent}\n`
          );
        });
  
        markdown = markdown.replace(/<table[^>]*>(.*?)<\/table>/gis, (match) => {
          let table = "";
          const rows = match.match(/<tr[^>]*>(.*?)<\/tr>/gis);
          if (!rows) return "";
  
          let header = [];
          const headerCells = rows[0].match(/<th[^>]*>(.*?)<\/th>/gis);
          if (headerCells) {
            header = headerCells.map((cell) =>
              cell.replace(/<[^>]+>/g, "").trim()
            );
            table += "| " + header.join(" | ") + " |\n";
            table += "|" + "--- |".repeat(header.length).slice(0, -1) + "\n";
            rows.shift();
          }
  
          rows.forEach((row) => {
            const cells = row.match(/<t[dh][^>]*>(.*?)<\/t[dh]>/gis);
            if (cells) {
              const rowData = cells.map((cell) =>
                cell.replace(/<[^>]+>/g, "").trim()
              );
              table += "| " + rowData.join(" | ") + " |\n";
            }
          });
          return `\n${table}\n`;
        });
  
        markdown = markdown.replace(/<code[^>]*>(.*?)<\/code>/gis, "`$1`");
  
        markdown = markdown.replace(
          /<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gis,
          "```\n$1\n```"
        );
  
        markdown = markdown.replace(/<[^>]+>/g, "");
        markdown = markdown.replace(/\n\s*\n/g, "\n\n");
        return markdown.trim();
      }
  
      // Modals
      showTableModal() {
        this.tableModal.style.display = "flex";
        setTimeout(() => this.tableModal.classList.add("show"), 10);
      }
  
      insertTable() {
        const rows = this.shadow.getElementById("tableRows").value;
        const cols = this.shadow.getElementById("tableCols").value;
        if (!rows || !cols || rows < 1 || cols < 1) return;
  
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
  
        let headerRow = document.createElement("tr");
        for (let i = 0; i < cols; i++) {
          let th = document.createElement("th");
          th.textContent = "Header";
          headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);
        table.appendChild(thead);
  
        for (let i = 0; i < rows; i++) {
          let bodyRow = document.createElement("tr");
          for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");
            td.textContent = "";
            bodyRow.appendChild(td);
          }
          tbody.appendChild(bodyRow);
        }
        table.appendChild(tbody);
  
        this.editor.focus();
        document.execCommand("insertHTML", false, table.outerHTML);
        this.tableModal.classList.remove("show");
        setTimeout(() => (this.tableModal.style.display = "none"), 300);
        this.saveState();
      }
  
      async copyToClipboard() {
        const textarea = this.shadow.getElementById("markdownOutput");
        const textToCopy = textarea.value;
  
        try {
          await navigator.clipboard.writeText(textToCopy);
          this.showFeedback("Kopirano!", "bg-green-500");
        } catch (err) {
          this.fallbackCopy(textarea);
        }
        this.markdownModal.classList.remove("show");
        setTimeout(() => (this.markdownModal.style.display = "none"), 300);
      }
  
      showFeedback(message, bgColor) {
        this.copyFeedback.textContent = message;
        this.copyFeedback.className = `fixed top-4 right-4 text-white p-3 rounded-md shadow-lg transition-opacity duration-300 ${bgColor}`;
  
        this.copyFeedback.classList.remove("hidden");
        this.copyFeedback.classList.add("show");
  
        setTimeout(() => {
          this.copyFeedback.classList.remove("show");
          this.copyFeedback.classList.add("hidden");
        }, 2000);
      }
  
      fallbackCopy(textarea) {
        textarea.select();
        try {
          document.execCommand("copy");
          this.showFeedback("Kopirano! (preko fallback)", "bg-yellow-500");
        } catch (err) {
          console.error("Neuspješno kopiranje: ", err);
          this.showFeedback("Neuspješno kopiranje!", "bg-red-500");
        }
      }
  
      applyInitialTheme() {
        if (
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add("dark");
          this.classList.add("dark");
          document.body.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
          this.classList.remove("dark");
          document.body.classList.remove("dark");
        }
      }
  
      toggleTheme() {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          this.classList.remove("dark");
          document.body.classList.remove("dark");
          localStorage.theme = "light";
        } else {
          document.documentElement.classList.add("dark");
          this.classList.add("dark");
          document.body.classList.add("dark");
          localStorage.theme = "dark";
        }
      }
  
      // --- Gemini AI funkcije ---
  
      showGeminiModal(title) {
        this.shadow.getElementById("gemini-modal-title").textContent = title;
        this.shadow.getElementById("gemini-loading").style.display = "block";
        this.shadow.getElementById("gemini-result-container").style.display =
          "none";
        this.geminiModal.style.display = "flex";
        setTimeout(() => this.geminiModal.classList.add("show"), 10);
      }
  
      closeGeminiModal() {
        this.geminiModal.classList.remove("show");
        setTimeout(() => (this.geminiModal.style.display = "none"), 300);
      }
  
      insertGeminiContent() {
        const generatedText = this.shadow.getElementById("gemini-output").value;
        this.closeGeminiModal();
        this.editor.focus();
  
        const selection = this.shadow.getSelection();
        if (!selection.rangeCount) return;
  
        const range = selection.getRangeAt(0);
        range.deleteContents();
        const textNode = document.createTextNode(generatedText);
        range.insertNode(textNode);
  
        range.setStartAfter(textNode);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
  
        this.saveState();
        this.highlightCode();
      }
  
      async callGeminiAPI(task) {
        if (this.isGenerating) return;
  
        const selection = this.shadow.getSelection();
        const selectedText = selection.toString().trim();
        const editorContent = this.editor.innerText.trim();
  
        let prompt;
        let title;
  
        if (task === "summarize") {
          if (!selectedText) {
            this.showFeedback("Odaberite tekst za sažimanje.", "bg-red-500");
            return;
          }
          prompt = `Sažmi sledeći tekst na srpskom jeziku:\n\n${selectedText}`;
          title = "Sažetak";
        } else if (task === "continue") {
          if (!editorContent) {
            this.showFeedback("Nema teksta za nastavak.", "bg-red-500");
            return;
          }
          prompt = `Nastavi sledeći tekst na srpskom jeziku, uzimajući u obzir kontekst:\n\n${editorContent}`;
          title = "Nastavak teksta";
        }
  
        this.showGeminiModal(title);
        this.isGenerating = true;
  
        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
  
        try {
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const result = await response.json();
  
          if (
            result.candidates &&
            result.candidates.length > 0 &&
            result.candidates[0].content &&
            result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0
          ) {
            const text = result.candidates[0].content.parts[0].text;
            this.displayGeminiResult(text);
          } else {
            console.error("API response error:", result);
            this.showFeedback("Greška u generisanju.", "bg-red-500");
            this.closeGeminiModal();
          }
        } catch (error) {
          console.error("Fetch error:", error);
          this.showFeedback("Greška u komunikaciji sa serverom.", "bg-red-500");
          this.closeGeminiModal();
        } finally {
          this.isGenerating = false;
        }
      }
  
      displayGeminiResult(text) {
        const loadingDiv = this.shadow.getElementById("gemini-loading");
        const resultDiv = this.shadow.getElementById("gemini-result-container");
        const textarea = this.shadow.getElementById("gemini-output");
  
        loadingDiv.style.display = "none";
        textarea.value = text;
        resultDiv.style.display = "block";
      }
    }
);