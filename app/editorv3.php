<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Editor</title>
  <!-- Učitajte CSS ovde ako ste ga izdvojili, ili prepustite custom elementu da ga povuče -->
</head>
<body>
  <!-- Ovde je root element koji prikazuje ceo editor -->
  <monaco-editor-app></monaco-editor-app>

  <!-- Ova skripta sadrži kompletnu definiciju custom elementa.  -->
  <script  type="module">

    // Custom element extension of monaco-editor-app that adds a simple
// debugging console below the preview. The console listens for
// messages posted from the iframe and displays console.log,
// console.warn, console.error and alert output.
// To use this file, include it in your HTML instead of the original
// component definition. The element tag remains <monaco-editor-app>.

if (!customElements.get('monaco-editor-app')) {
  customElements.define('monaco-editor-app', class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.dbName = 'monaco_editor_db';
      this.storeName = 'projects';
      this.version = 1;
      this.editor = null;
      this.CDN_URL = "cdn.markonikolic98.com";
      this.resize_view = document.createElement("size_r");
      this.resize_view.setAttribute("style", "display:none;");
      this.history = [];
      this.historyIndex = -1;

      document.body.addEventListener("contextmenu", (e) => {e.preventDefault(); return false});
      document.body.addEventListener("dragover", (e) => {e.preventDefault(); return false});
    }

    connectedCallback() {
      const style = document.createElement("style");
      style.textContent = `
        @import url(https://${this.CDN_URL}/node_modules/monaco-editor@0.45.0/min/vs/editor/editor.main.css);
        :host {
          display: block;
          height: 100vh;
          width: 100vw;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;

          display: block;
          position: absolute;
          top: 51px;
          left: 0px;
          width: 100%;
          height: 100%;
        }
        * {
          overflow: hidden !important;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        /* Container holds editor on the left and a preview/console stack on the right */
        #container {
          display: flex;
          flex-direction: row;
          height: 100%;
          width: 100%;
        }
        /* Wrapper for preview and console stacked vertically */
        #previewWrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          min-width: 100px;
          max-width: 90%;
        }
        .dragging #editor,
        .dragging iframe {
          pointer-events: none;
        }
        #editor {
          flex: 1;
          height: 100%;
          min-width: 100px;
          max-width: 90%;
        }
        #separator {
          width: 5px;
          background: #555;
          cursor: ew-resize;
          position: relative;
          z-index: 10;
        }
        iframe {
          flex: 1;
          width: 100%;
          border: none;
          background: white;
        }
        size_r {
          position: absolute;
          top: 0px;
          right: 0px;
          z-index: 1;
          background: rgb(255 255 255 / 48%);
          color: #333;
          padding: 5px 10px;
          font-size: 13px;
          border-bottom-left-radius: 5px;
          border-left: 1px solid black;
          border-bottom: 1px solid black;
          display:none;
          filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
          -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
          enable-background: new 0 0 512 512; 
          font-family: arial;
        }
        size_r icon-i {
          margin-right: 5px;
        }
        /* Styles for the debugging console */
        #console {
          height: 150px;
          width: 100%;
          background: #1e1e1e;
          color: #ccc;
          font-family: monospace;
          font-size: 12px;
          line-height: 1.4;
          /* override global overflow: hidden rule so the console can scroll */
          overflow-y: auto !important;
          overflow-x: hidden !important;
          border-top: 1px solid #555;
          padding: 5px;
          box-sizing: border-box;
        }
        #console .log { color: #dcdcdc; }
        #console .warn { color: #ffd700; }
        #console .error { color: #ff6a6a; }
        #console .alert { color: #87cefa; }
      `;

      // Build DOM structure: container -> editor | separator | previewWrapper
      const container = document.createElement("div");
      container.id = "container";
      const size_r = document.createElement("size_r");
      size_r.setAttribute("style", "display:none;");
      // Editor on the left
      const editor = document.createElement("div");
      editor.id = "editor";
      // Separator between editor and preview column
      const separator = document.createElement("div");
      separator.id = "separator";
      // Wrapper for preview and console stacked vertically on the right
      const previewWrapper = document.createElement('div');
      previewWrapper.id = 'previewWrapper';
      // Preview iframe
      const iframe = document.createElement("iframe");
      iframe.id = "preview";
      // Console area under preview
      const consoleDiv = document.createElement('div');
      consoleDiv.id = 'console';
      // Assemble wrapper: preview on top, console at bottom
      previewWrapper.appendChild(iframe);
      previewWrapper.appendChild(consoleDiv);
      // Assemble container: optional size_r overlay, editor, separator, preview column
      container.appendChild(size_r);
      container.appendChild(editor);
      container.appendChild(separator);
      container.appendChild(previewWrapper);
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(container);
      this.enableResize();
      this.loadEditor();
      this.initDB();
      // Listen for messages from iframe to populate console
      window.addEventListener('message', (event) => {
        if (!event.data || event.data.type !== 'console') return;
        const { method, args } = event.data;
        this.appendToConsole(method, args);
      });
    }

    enableResize() {
      const separator = this.shadowRoot.querySelector('#separator');
      const editor = this.shadowRoot.querySelector('#editor');
      const preview = this.shadowRoot.querySelector('#preview');
      let isResizing = false;

      separator.addEventListener('mousedown', () => {
        isResizing = true;
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
      });

      const resize = (e) => {
        if (!isResizing) return;
        const containerEl = this.shadowRoot.querySelector("#container");
        containerEl.classList.add('dragging');
        const containerRect = containerEl.getBoundingClientRect();
        // account for separator width (5px)
        let newEditorWidth = e.clientX - containerRect.left - 5;
        let newPreviewWidth = containerRect.right - e.clientX;
        const maxEditorWidth = containerRect.width * 0.9;
        const maxPreviewWidth = containerRect.width * 0.9;
        newEditorWidth = Math.max(100, Math.min(newEditorWidth, maxEditorWidth));
        newPreviewWidth = Math.max(100, Math.min(newPreviewWidth, maxPreviewWidth));
        editor.style.flex = 'none';
        const previewWrapper = this.shadowRoot.querySelector('#previewWrapper');
        previewWrapper.style.flex = 'none';
        editor.style.width = `${newEditorWidth}px`;
        previewWrapper.style.width = `${newPreviewWidth}px`;
        // Show size overlay
        const sizeBox = this.shadowRoot.querySelector("size_r");
        sizeBox.style.display = 'block';
        sizeBox.textContent = '';
        const i = document.createElement("icon-i");
        if (typeof i.name === 'function') i.name('rulers');
        sizeBox.appendChild(i);
        const iframeEl = this.shadowRoot.querySelector("iframe");
        sizeBox.appendChild(document.createTextNode(`${iframeEl.offsetWidth}px x ${iframeEl.offsetHeight}px`));
        if (this.editor) this.editor.layout();
      };

      const stopResize = () => {
        isResizing = false;
        const containerEl = this.shadowRoot.querySelector("#container");
        if (containerEl.classList.contains("dragging")) {
          containerEl.classList.remove('dragging');
        }
        const sizeBox = this.shadowRoot.querySelector("size_r");
        sizeBox.textContent = '';
        sizeBox.removeAttribute('style');
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
      };
    }

    loadEditor() {
      require.config({paths: {vs: `https://${this.CDN_URL}/node_modules/monaco-editor@0.45.0/min/vs`}});
      require(['vs/editor/editor.main'], () => {
        this.editor = monaco.editor.create(this.shadowRoot.querySelector('#editor'), {
          value: this.getDefaultHTML(),
          language: 'html',
          theme: 'vs-dark',
        });
        this.pushHistory();
        this.updatePreview();
        this.editor.onDidChangeModelContent(() => {
          this.updatePreview();
          this.saveToDB();
          this.pushHistory();
        });
      });

      window.addEventListener('resize', () => {
        if (this.editor) this.editor.layout();
        const sizeBox = this.shadowRoot.querySelector("size_r");
        const iframe = this.shadowRoot.querySelector("iframe");
        if (sizeBox && sizeBox.style.display !== 'none') {
          sizeBox.textContent = "";
          const i = document.createElement("icon-i");
          if (typeof i.name === "function") i.name("rulers");
          sizeBox.appendChild(i);
          sizeBox.appendChild(document.createTextNode(`${iframe.offsetWidth}px x ${iframe.offsetHeight}px`));
        }
      });
    }

    pushHistory() {
      const content = this.editor.getValue();
      if (this.historyIndex === -1 || this.history[this.historyIndex] !== content) {
        this.history = this.history.slice(0, this.historyIndex + 1);
        this.history.push(content);
        this.historyIndex++;
      }
    }

    undo() {
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.editor.setValue(this.history[this.historyIndex]);
      }
    }

    redo() {
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.editor.setValue(this.history[this.historyIndex]);
      }
    }

    getHistoryState() {
      return {
        back: this.historyIndex > 0,
        redo: this.historyIndex < this.history.length - 1
      };
    }

    /**
     * Append a log entry to the console area. Takes into account
     * the log method (log, warn, error, alert) for styling.
     * @param {string} method
     * @param {any[]} args
     */
    appendToConsole(method, args) {
      const consoleDiv = this.shadowRoot.querySelector('#console');
      if (!consoleDiv) return;
      const line = document.createElement('div');
      line.classList.add(method);
      // Convert arguments to a string representation
      const stringified = args.map((a) => {
        try {
          if (typeof a === 'object') {
            return JSON.stringify(a);
          } else {
            return String(a);
          }
        } catch (e) {
          return String(a);
        }
      }).join(' ');
      line.textContent = stringified;
      consoleDiv.appendChild(line);
      // Auto-scroll to bottom
      consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }

    updatePreview() {
      const content = this.editor.getValue();
      const iframe = this.shadowRoot.querySelector('#preview');
      // Inject a script into the preview that overrides console methods and alert
      const interceptionScript = `
        <script>(function() {
          var methods = ['log','warn','error'];
          methods.forEach(function(m) {
            var orig = console[m];
            console[m] = function() {
              try { parent.postMessage({type:'console', method: m, args: Array.from(arguments)}, '*'); } catch (e) {}
              return orig && orig.apply(console, arguments);
            };
          });
          var originalAlert = window.alert;
          window.alert = function(msg) {
            try { parent.postMessage({type:'console', method:'alert', args:[msg]}, '*'); } catch (e) {}
            return originalAlert && originalAlert.call(window, msg);
          };
        })()<\/script>`;
      const previewContent = `<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Preview</title>${interceptionScript}</head><body>${content}</body></html>`;
      iframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewContent);
    }

    getDefaultHTML() {
      return `<!DOCTYPE html>
<html>
<head>
  <title>Hello</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>`;
    }

    initDB() {
      const request = indexedDB.open(this.dbName, this.version);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, {keyPath: 'id'});
        }
      };
      request.onsuccess = (event) => {
        this.db = event.target.result;
        this.loadFromDB();
      };
    }

    saveToDB() {
      const tx = this.db.transaction([this.storeName], 'readwrite');
      const store = tx.objectStore(this.storeName);
      const data = {
        id: 1,
        content: this.editor.getValue(),
        time: new Date().toISOString()
      };
      store.put(data);
    }

    loadFromDB() {
      const tx = this.db.transaction([this.storeName], 'readonly');
      const store = tx.objectStore(this.storeName);
      const req = store.get(1);
      req.onsuccess = () => {
        try {
          if (req.result && req.result.content) {
            this.editor.setValue(req.result.content);
          }
        } catch (EX) {}
      };
    }
  });
}
  </script>
</body>
</html>
