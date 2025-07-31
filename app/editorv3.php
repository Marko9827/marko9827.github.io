<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Monaco Editor App</title>
  <script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.min.js"></script>
  <style>
    body {
      margin: 0;
      background: #1e1e1e;
      color: white;
      font-family: sans-serif;
      height: 100vh;
      overflow: hidden;
    }
    monaco-editor-app {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
</head>
<body>
  <monaco-editor-app></monaco-editor-app>
  <script type="module">

if (!customElements.get('monaco-editor-app')) {
  customElements.define('monaco-editor-app', class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.dbName = 'monaco_editor_db';
      this.storeName = 'projects';
      this.version = 1;
      this.editors = {};
      this.CDN_URL = "cdn.markonikolic98.com";
      this.history = [];
      this.historyIndex = -1;

      this.languageModels = {
        html: this.getDefaultHTML(),
        css: 'body { background: white; }',
        javascript: 'function hello() { alert("Hello World"); }'
      };

      document.body.addEventListener("contextmenu", e => { e.preventDefault(); return false });
      document.body.addEventListener("dragover", e => { e.preventDefault(); return false });
    }

    connectedCallback() {
      const style = document.createElement("style");
      style.textContent = `
        @import url(https://${this.CDN_URL}/node_modules/monaco-editor@0.45.0/min/vs/editor/editor.main.css);
        :host { display: block; height: 100vh; width: 100vw; }
        .toolbar { display: flex; justify-content: flex-end; padding: 5px 10px; background: #f3f3f3; border-bottom: 1px solid #ccc; gap: 10px; }
        .main-wrapper { display: flex; height: calc(100% - 30px); width: 100%; }
        .editor-container { display: flex; flex-direction: column; flex: 1; overflow: hidden; min-width: 150px; }
        .editor-block { flex: 1; min-height: 80px; resize: vertical; overflow: auto; border-bottom: 1px solid #aaa; }
        #separator { width: 5px; background: #888; cursor: ew-resize; }
        #preview { flex: 1; height: 100%; width: 100%; border: none; background: white; }
        .resizing * { pointer-events: none !important; }
      `;

      const toolbar = document.createElement("div");
      toolbar.className = "toolbar";
      toolbar.innerHTML = `
        <label>Auto-Reload <input type="checkbox" id="autoReload" checked></label>
        <button id="undoBtn">↩️ Undo</button>
        <button id="redoBtn">↪️ Redo</button>
        <button id="saveBtn">💾 Save</button>
        <button id="exportBtn">📤 Export HTML</button>
        <button id="exportZipBtn">📦 Export .ZIP</button>
        <button id="reloadBtn">🔄 Reload</button>
      `;

      const mainWrapper = document.createElement("div");
      mainWrapper.className = "main-wrapper";

      const container = document.createElement("div");
      container.className = "editor-container";

      const htmlEditor = document.createElement("div");
      htmlEditor.id = "editor-html";
      htmlEditor.className = "editor-block";

      const cssEditor = document.createElement("div");
      cssEditor.id = "editor-css";
      cssEditor.className = "editor-block";

      const jsEditor = document.createElement("div");
      jsEditor.id = "editor-javascript";
      jsEditor.className = "editor-block";

      const separator = document.createElement("div");
      separator.id = "separator";

      const consoleLog = document.createElement("div");
      consoleLog.id = "console-log";
      consoleLog.style.cssText = "background:#111;color:#0f0;font-family:monospace;font-size:12px;padding:5px;height:100px;overflow:auto;border-top:1px solid #444;";

      const preview = document.createElement("iframe");
      preview.id = "preview";

      container.appendChild(this.createLabeledBlock("HTML", htmlEditor));
      container.appendChild(this.createLabeledBlock("CSS", cssEditor));
      container.appendChild(this.createLabeledBlock("JavaScript", jsEditor));

      mainWrapper.appendChild(container);
      mainWrapper.appendChild(separator);
      mainWrapper.appendChild(consoleLog);
      mainWrapper.appendChild(preview);

      this.shadowRoot.appendChild(style);

      const labelStyle = document.createElement("style");
      labelStyle.textContent = `
        .editor-label {
          font-family: monospace;
          font-size: 12px;
          background: #222;
          color: white;
          padding: 4px 10px;
          margin: 0;
          border-bottom: 1px solid #444;
        }
      `;
      this.shadowRoot.appendChild(labelStyle);
      this.shadowRoot.appendChild(toolbar);
      this.shadowRoot.appendChild(mainWrapper);

      this.loadEditors();
      this.initDB();
      this.enableResize();

      window.addEventListener('message', e => {
        if (e.data.type === 'console-log') {
          const el = this.shadowRoot.getElementById('console-log');
          if (el) {
            const msg = e.data.args.map(a => JSON.stringify(a)).join(' ');
            const div = document.createElement('div');
            div.textContent = '> ' + msg;
            el.appendChild(div);
            el.scrollTop = el.scrollHeight;
          }
        }
      });

      setTimeout(() => {
        this.shadowRoot.getElementById("reloadBtn").onclick = () => this.updatePreview();
        this.shadowRoot.getElementById("undoBtn").onclick = () => this.undo();
        this.shadowRoot.getElementById("redoBtn").onclick = () => this.redo();
        this.shadowRoot.getElementById("saveBtn").onclick = () => this.saveToDB();
        this.shadowRoot.getElementById("exportBtn").onclick = () => this.exportContent();
        this.shadowRoot.getElementById("exportZipBtn").onclick = () => this.exportZip();
      }, 500);
    }

    updatePreview() {
      const html = this.languageModels.html || "";
      const css = `<style>${this.languageModels.css || ""}</style>`;
      const js = `<script>
        const originalLog = console.log;
        console.log = function(...args) {
          window.parent.postMessage({ type: 'console-log', args }, '*');
          originalLog.apply(console, args);
        };
        ${this.languageModels.javascript || ""}
      <\/script>`;
      const content = `<!DOCTYPE html><html><head>${css}</head><body>${html}${js}</body></html>`;
      const preview = this.shadowRoot.querySelector("#preview");
      preview.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(content);
    }

    loadEditors() {
      require.config({ paths: { vs: `https://${this.CDN_URL}/node_modules/monaco-editor@0.45.0/min/vs` } });
      require(["vs/editor/editor.main"], () => {
        this.editors.html = monaco.editor.create(this.shadowRoot.querySelector("#editor-html"), {
          value: this.languageModels.html,
          language: "html",
          theme: "vs-dark",
          automaticLayout: true
        });

        this.editors.css = monaco.editor.create(this.shadowRoot.querySelector("#editor-css"), {
          value: this.languageModels.css,
          language: "css",
          theme: "vs-dark",
          automaticLayout: true
        });

        this.editors.javascript = monaco.editor.create(this.shadowRoot.querySelector("#editor-javascript"), {
          value: this.languageModels.javascript,
          language: "javascript",
          theme: "vs-dark",
          automaticLayout: true
        });

        for (let lang in this.editors) {
          this.editors[lang].onDidChangeModelContent(() => {
            this.languageModels[lang] = this.editors[lang].getValue();
            if (this.shadowRoot.getElementById("autoReload").checked) {
              this.updatePreview();
            }
          });
        }

        this.updatePreview();
      });
    }

    createLabeledBlock(label, editorEl) {
      const wrapper = document.createElement("div");
      const title = document.createElement("div");
      title.className = "editor-label";
      title.textContent = label;
      wrapper.appendChild(title);
      wrapper.appendChild(editorEl);
      return wrapper;
    }

    undo() {
      for (let lang in this.editors) {
        const editor = this.editors[lang];
        if (editor) editor.trigger('keyboard', 'undo', null);
      }
    }

    redo() {
      for (let lang in this.editors) {
        const editor = this.editors[lang];
        if (editor) editor.trigger('keyboard', 'redo', null);
      }
    }

    getDefaultHTML() {
      return `<h1>Hello World!</h1>`;
    }

    exportContent() {
      const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Exported Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ${this.languageModels.html}
  <script src="script.js"><\/script>
</body>
</html>`;

      const blob = new Blob([htmlContent], { type: 'text/html' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'project.html';
      a.click();
    }

    exportZip() {
      const zip = new JSZip();
      zip.file("index.html", `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Exported Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ${this.languageModels.html}
  <script src="script.js"><\/script>
</body>
</html>`);
      zip.file("style.css", this.languageModels.css);
      zip.file("script.js", this.languageModels.javascript);

      zip.generateAsync({ type: "blob" }).then(blob => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "project.zip";
        a.click();
      });
    }

    enableResize() {
      const separator = this.shadowRoot.querySelector('#separator');
      const container = this.shadowRoot.querySelector('.main-wrapper');
      let isResizing = false;

      separator.addEventListener('mousedown', () => {
        isResizing = true;
        container.classList.add('resizing');
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
      });

      const resize = (e) => {
        const preview = this.shadowRoot.querySelector('#preview');
        const editorContainer = this.shadowRoot.querySelector('.editor-container');
        const containerRect = container.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;
        const minEditorWidth = 100;
        const maxEditorWidth = containerRect.width - 100;
        const newEditorWidth = Math.max(minEditorWidth, Math.min(offsetX, maxEditorWidth));

        editorContainer.style.flex = 'none';
        preview.style.flex = 'none';
        editorContainer.style.width = `${newEditorWidth}px`;
        preview.style.width = `${containerRect.width - newEditorWidth - 5}px`;
      };

      const stopResize = () => {
        isResizing = false;
        container.classList.remove('resizing');
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
      };
    }

    initDB() {
      const req = indexedDB.open(this.dbName, this.version);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };
      req.onsuccess = (e) => {
        this.db = e.target.result;
        this.loadFromDB();
      };
    }

    saveToDB() {
      const tx = this.db.transaction([this.storeName], 'readwrite');
      const store = tx.objectStore(this.storeName);
      const data = {
        id: 1,
        content: this.languageModels,
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
            this.languageModels = req.result.content;
            for (let lang in this.editors) {
              if (this.editors[lang]) {
                this.editors[lang].setValue(this.languageModels[lang]);
              }
            }
            this.updatePreview();
          }
        } catch (e) {}
      };
    }
  });
}



  </script>
</body>
</html>