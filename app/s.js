 

  window.draggable = { style_left: "", style_top: "", enabled: false };
  const CDN_URL = "cdn.markonikolic98.com";

  const CDN_URL_BOOSTRAP_ICONS_STRCSS = "";
  const CDN_CSS_MAIN = "";

    
  //`   @import url('https://${CDN_URL}/node_modules/@fortawesome/fontawesome-free/css/all.min.css'); @import url("https://${CDN_URL}/node_modules/bootstrap-icons/font/bootstrap-icons.css");`; 
  const CDN_URL_BOOSTRAP_ICONS_STRCSS_URL = `https://${CDN_URL}/node_modules/bootstrap-icons/font/bootstrap-icons.css`;
  
  let obj = portfolio.data.menu; 
  let firstKey = Object.keys(obj)[0];
  delete obj[firstKey];
  
     portfolio.data.menu = obj;

  

  const app_loader = { gallery_temp: 0 },
    welcomer = {
      svg_loader: "/loader",
      cards_generate_xhr: null,
      gallery_temp: 0,
      cp: function () {
       
        
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
      offset: function (el) {
        if (!el) {
          return { top: 0, left: 0 };
        }
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        };
      },
      parentTitler: function (element, text) {
        return;
        try {
          var offset = welcomer.offset();
          const anchorTitle = document.getElementById("anchorTitle"),
            i = document.createElement("icon-i"),
            tt = document.createTextNode(text);
          i.setAttribute("class", "bi bi-info-square");
          i.setAttribute("style", "padding-right:2px;");
          anchorTitle.appendChild(i);
          anchorTitle.appendChild(tt);
          anchorTitle.style.opacity = "1";
        } catch (aer) {}
      },
      showAnchorTitle: function (element, text) {
        return;
        var offset = welcomer.offset();
        const anchorTitle = document.getElementById("anchorTitle"),
          i = document.createElement("icon-i"),
          tt = document.createTextNode(text);
        if (anchorTitle) {
          anchorTitle.innerHTML =
            "<i style='padding-right:2px;' class='bi bi-info-square'></i> " +
            text;
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
      img_load: function (t) {
        t.classList.add("active");
        t.removeAttribute("style");
        t.removeAttribute("onload");
      },
      conf: {
        token: `${window.stmp}`,
        graph: `${portfolio.host}/graph`,
        api: "/feed",
        black: true,
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

      cards_generateV2: function (parentNODE, fh = {}) {
        try {
          if (welcomer.cards_generate_xhr) {
            welcomer.cards_generate_xhr.abort();
          }
        } catch (error) {
          console.warn(
            "Nije uspjelo prekidanje prethodnog XHR zahtjeva:",
            error
          );
        }

        const conff = this.conf || welcomer.conf;

        const iframe = document.querySelector(
          "#clavs iframe:not(.iframe_mask)"
        );
        let iframeBody = null;
        if (iframe && iframe.contentDocument) {
          iframeBody = iframe.contentDocument.body;
        }

        if (fh.shared_links && fh.shared_links.length > 0 && iframeBody) {
          iframeBody.querySelectorAll("br_box").forEach((box) => box.remove());

          const loaderContainer = document.createElement("br_box");
          loaderContainer.classList.add("loader-state");

          const divBraLoader = document.createElement("div");
          divBraLoader.className = "bra";

          const imgLoader = document.createElement("img");
          imgLoader.className = "img_background_rljs";
          imgLoader.onload = function () {
            welcomer.img_load(this);
          };
          imgLoader.src = fh?.thumbail;
          imgLoader.alt = "Blog > Marko Nikolić";
          imgLoader.loading = "lazy";

          divBraLoader.appendChild(imgLoader);
          loaderContainer.appendChild(divBraLoader);

          const peLoader = document.createElement("pe");
          const iconLoader = document.createElement("icon-i");
          iconLoader.className = "bi bi-link-45deg";
          peLoader.appendChild(iconLoader);
          peLoader.appendChild(
            document.createTextNode(
              ` ${welcomer.lang().detectedsLinksIn_postmaxn}`
            )
          );
          loaderContainer.appendChild(peLoader);

          const brAerLoader = document.createElement("br_aer");
          brAerLoader.className = "snaped";

          fh.shared_links.forEach(() => {
            const linkLoader = document.createElement("a");
            linkLoader.title = "Učitavanje";
            linkLoader.className = "baer loading_data";
            linkLoader.target = "_blank";
            linkLoader.rel = "nofollow noreferrer";
            linkLoader.role = "button";
            linkLoader.href = "#";

            const imgLinkLoader = document.createElement("img");
            imgLinkLoader.src = welcomer.loader_svg;
            linkLoader.appendChild(imgLinkLoader);

            const berfLinkLoader = document.createElement("ber_f");
            const bartLinkLoader = document.createElement("bar_t");
            const imgFaviconLoader = document.createElement("img");
            imgFaviconLoader.src = welcomer.loader_svg;
            imgFaviconLoader.className = "favicon";
            imgFaviconLoader.height = 16;
            imgFaviconLoader.width = 16;
            bartLinkLoader.appendChild(imgFaviconLoader);
            bartLinkLoader.appendChild(document.createElement("span"));
            berfLinkLoader.appendChild(bartLinkLoader);
            berfLinkLoader.appendChild(document.createElement("span"));
            linkLoader.appendChild(berfLinkLoader);

            brAerLoader.appendChild(linkLoader);
          });

          loaderContainer.appendChild(brAerLoader);

          iframeBody.appendChild(loaderContainer);
          iframeBody.appendChild(document.createElement("br"));
          iframeBody.appendChild(document.createElement("br"));
          iframeBody.appendChild(document.createElement("br"));
        }

        welcomer.cards_generate_xhr = new XMLHttpRequest();
        welcomer.cards_generate_xhr.open("POST", conff["graph"], true);

        welcomer.cards_generate_xhr.onreadystatechange = function () {
          if (welcomer.cards_generate_xhr.readyState === 4) {
            if (iframeBody) {
              iframeBody
                .querySelectorAll("br_box.loader-state")
                .forEach((box) => box.remove());
            }

            if (welcomer.cards_generate_xhr.status === 200) {
              const responseData = JSON.parse(
                welcomer.cards_generate_xhr.responseText
              );
              const jsjonF = responseData || [];

              if (jsjonF.length > 0) {
                const contentBrBox = document.createElement("br_box");

                const divBra = document.createElement("div");
                divBra.className = "bra";

                const imgBackground = document.createElement("img");
                imgBackground.className = "img_background_rljs";
                imgBackground.onload = function () {
                  welcomer.img_load(this);
                };
                imgBackground.src = fh?.thumbail;
                imgBackground.alt = "Blog > Marko Nikolić";
                imgBackground.loading = "lazy";

                divBra.appendChild(imgBackground);
                contentBrBox.appendChild(divBra);

                const pe = document.createElement("pe");
                const icon = document.createElement("icon-i");
                icon.className = "bi bi-link-45deg";
                pe.appendChild(icon);
                pe.appendChild(
                  document.createTextNode(
                    ` ${welcomer.lang().detectedsLinksIn_postmaxn}`
                  )
                );
                contentBrBox.appendChild(pe);

                const brAerContent = document.createElement("br_aer");
                brAerContent.className = "snaped";

                jsjonF.forEach((item) => {
                  try {
                    const jsjon = item[0];

                    const baer = document.createElement("a");
                    baer.className = "baer";
                    baer.target = "_blank";
                    baer.rel = "nofollow noreferrer";
                    try {
                      baer.href = jsjon["url"];
                    } catch (Ex) {}
                    baer.setAttribute(
                      "data-title",
                      "Kliknite (pređite mišem preko slike) za prikaz slike u punoj veličini"
                    );

                    const imgLink = document.createElement("img");
                    imgLink.src = jsjon["thumbail"];
                    baer.appendChild(imgLink);

                    const berf = document.createElement("ber_f");

                    const bart = document.createElement("bar_t");
                    const iconImg = document.createElement("img");
                    iconImg.src = jsjon["icon"];
                    iconImg.className = "favicon";
                    iconImg.height = 16;
                    iconImg.width = 16;
                    bart.appendChild(iconImg);

                    const spanTitle = document.createElement("span");
                    spanTitle.textContent = jsjon["title"];
                    bart.appendChild(spanTitle);
                    berf.appendChild(bart);

                    const spanUrl = document.createElement("span");
                    spanUrl.textContent = jsjon["url"];
                    berf.appendChild(spanUrl);

                    baer.appendChild(berf);

                    brAerContent.appendChild(baer);
                  } catch (aer) {}
                });

                contentBrBox.appendChild(brAerContent);

                parentNODE
                  .querySelectorAll("br_box")
                  .forEach((box) => box.remove());

                parentNODE.appendChild(contentBrBox.cloneNode(true));

                if (iframeBody) {
                  iframeBody
                    .querySelectorAll("br_box")
                    .forEach((box) => box.remove());
                  iframeBody.appendChild(contentBrBox);
                  iframeBody.appendChild(document.createElement("br"));
                  iframeBody.appendChild(document.createElement("br"));
                  iframeBody.appendChild(document.createElement("br"));

                  iframeBody.querySelectorAll("a.baer").forEach(function (a) {
                    a.addEventListener("mouseenter", function () {
                      if (
                        parent &&
                        parent.welcomer &&
                        typeof parent.welcomer.showAnchorTitle === "function"
                      ) {
                        parent.welcomer.showAnchorTitle(
                          a,
                          a.getAttribute("data-title")
                        );
                      }
                    });
                    a.addEventListener("mouseleave", function () {
                      if (
                        parent &&
                        parent.welcomer &&
                        typeof parent.welcomer.hideAnchorTitle === "function"
                      ) {
                        parent.welcomer.hideAnchorTitle();
                      }
                    });
                    a.removeAttribute("title");
                  });
                }
              } else {
              }
            } else {
            }
          }
        };

        const jsonData = new FormData();
        if (fh.shared_links) {
          jsonData.append("urlf", JSON.stringify(fh.shared_links));
        } else {
          jsonData.append("urlf", "[]");
        }
        jsonData.append("type", "s");
        welcomer.cards_generate_xhr.send(jsonData);
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
            var transaction = this.db.transaction(
              [this.storeName],
              "readwrite"
            );
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
            var transaction = this.db.transaction(
              [this.storeName],
              "readwrite"
            );
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
            var cursorRequest = transaction
              .objectStore(this.storeName)
              .getAll();
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
              objectStore.createIndex("thumbail", "thumbail", {
                unique: false,
              });
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
                "data:text/html;charset=utf-8," +
                encodeURIComponent(res.data.code);
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
        cdn: `https://${CDN_URL}/node_modules/monaco-editor@0.45.0/min/`,
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
            var i = document.createElement("icon-i");
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
        EditorWrappers: {
          main: {},
          tabs: [{}],
          html: {},
          css: {},
          javascript: {},
        },
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
              "data:text/html;charset=utf-8," +
              encodeURIComponent(previewContent);
          },
          main: function (t = { where, wht, callback, template: "" }) {
            return;
            if (document.body.offsetWidth < 601) {
              $("editor-wrapper").html("");
              welcomer.editor.editor_fail_message("editor-wrapper");
            } else {
              let editor_f;
              const editor_container = document.createElement("div");
              const shadowRoot = editor_container.attachShadow({
                  mode: "open",
                }),
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
                  vs: `https://${CDN_URL}/node_modules/monaco-editor@0.45.0/min/vs`,
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
            ifrm.contentWindow.document.querySelector(
              "html"
            ).innerHTML = `${data}`;
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
              $(
                'section[data-ui-type="editor"] iframe#preview-container'
              ).width();
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
              vs: `https://${CDN_URL}/node_modules/monaco-editor@0.45.0/min/vs`,
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
              .querySelector(
                'section[data-ui-type="editor"] div#editor-container'
              )
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
    };

  const IndexedDBUtil = {
    db: null,
    quotaExceeded: false,
    async initDB() {
      if (this.db) return this.db;

      return new Promise((resolve, reject) => {
        const request = indexedDB.open("GalleryDB", 2);

        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains("images")) {
            const store = db.createObjectStore("images", { keyPath: "id" });
            store.createIndex("album", "album", { unique: false });
          }
          if (!db.objectStoreNames.contains("pdfs")) {
            const store = db.createObjectStore("pdfs", { keyPath: "id" });
            store.createIndex("pdf", "pdf", { unique: false });
          }
        };

        request.onsuccess = (event) => {
          this.db = event.target.result;
          resolve(this.db);
        };

        request.onerror = (event) => reject(event.target.error);
      });
    },

    async storePDF(albumName, id, blob) {
      if (this.quotaExceeded) return;

      const db = await this.initDB();
      const tx = db.transaction("pdfs", "readwrite");
      const store = tx.objectStore("pdfs");

      const fullId = `${albumName}-${id}`;

      return new Promise((resolve, reject) => {
        const existingReq = store.get(fullId);

        existingReq.onsuccess = () => {
          if (existingReq.result) {
            resolve();
          } else {
            const putReq = store.put({
              id: fullId,
              album: albumName,
              blob: blob,
            });

            putReq.onsuccess = () => resolve();
            putReq.onerror = (event) => {
              const err = event.target.error;
              if (err?.name === "QuotaExceededError") {
                this.quotaExceeded = true;
              }
              reject(err);
            };
          }
        };

        existingReq.onerror = (event) => reject(event.target.error);
      });
    },
    async getOrFetchPDF(albumName, id, url) {
      try {
        const existingBlob = await this.getPDF(albumName, id);
        if (existingBlob) {
          return URL.createObjectURL(existingBlob);
        }

        const blob = await this.fetchPDFAsBlob(url);

        if (!this.quotaExceeded) {
          try {
            await this.storePDF(albumName, id, blob);
          } catch (e) {
            if (e?.name === "QuotaExceededError") {
              this.quotaExceeded = true;
            } else {
            }
          }
        }

        return URL.createObjectURL(blob);
      } catch (e) {
        return url;
      }
    },
    async getPDF(albumName, id) {
      const db = await this.initDB();
      const fullId = `${albumName}-${id}`;
      return new Promise((resolve, reject) => {
        const tx = db.transaction("pdfs", "readonly");
        const store = tx.objectStore("pdfs");
        const req = store.get(fullId);
        req.onsuccess = () => resolve(req.result?.blob || null);
        req.onerror = (event) => reject(event.target.error);
      });
    },

    async fetchPDFAsBlob(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch PDF.");
      return await res.blob();
    },

    async storeBlob(albumName, id, blob) {
      const db = await this.initDB();
      const tx = db.transaction("images", "readwrite");
      const store = tx.objectStore("images");

      const fullId = `${albumName}-${id}`;
      const existingReq = store.get(fullId);

      return new Promise((resolve, reject) => {
        existingReq.onsuccess = () => {
          if (existingReq.result) {
            resolve();
          } else {
            existingReq.onsuccess = () => {
              if (existingReq.result) {
                resolve();
              } else {
                const putReq = store.put({
                  id: fullId,
                  album: albumName,
                  blob: blob,
                });

                putReq.onsuccess = () => resolve();

                putReq.onerror = (event) => {
                  if (event.target.error?.name === "QuotaExceededError") {
                    this.quotaExceeded = true;
                  }
                  reject(event.target.error);
                };
              }
            };
          }
        };
        existingReq.onerror = (event) => reject(event.target.error);
      });
    },

    async getBlob(albumName, id) {
      const db = await this.initDB();
      const fullId = `${albumName}-${id}`;
      return new Promise((resolve, reject) => {
        const tx = db.transaction("images", "readonly");
        const store = tx.objectStore("images");
        const req = store.get(fullId);
        req.onsuccess = () => resolve(req.result?.blob || null);
        req.onerror = (event) => reject(event.target.error);
      });
    },

    async fetchImageAsBlob(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch image.");
      return await res.blob();
    },
  };

  const pageManager = {
    historyStack: [],

    openPage(id = "", str = "") {
      document.querySelectorAll("page-c").forEach((el) => {
        // el.style.display = "none";
      });

      let existingPage = document.querySelector(`page-c[data-id="${id}"]`);

      if (!existingPage) {
        try {
          const page = document.createElement("page-c");
          page.setAttribute("data-id", id);
          document.body.appendChild(page);
          this.historyStack.push(id);
          page.load(id, str);
        } catch (ex) {}
      } else {
        existingPage.style.display = "block";
        this.historyStack.push(id);
        existingPage.load(id, str);
      }
    },

    closeCurrentPage() {
      if (this.historyStack.length > 0) {
        const currentId = this.historyStack.pop();
        const currentPage = document.querySelector(
          `page-c[data-id="${currentId}"]`
        );
        if (currentPage) currentPage.remove();

        const previousId = this.historyStack[this.historyStack.length - 1];
        const previousPage = document.querySelector(
          `page-c[data-id="${previousId}"]`
        );
        if (previousPage) previousPage.style.display = "block";
      }
    },
  };

  class SPARouter {
    constructor() {
      this.routes = {};
      this.scrollRestoration = "manual";

      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      window.addEventListener("popstate", this._onChange.bind(this));
    }

    back() {
      history.back();
      return;
      try {
        const ref = document.referrer;
        const currentHost = window.location.host;

        if (ref && new URL(ref).host === currentHost) {
          history.back();
        }
      } catch (e) {}
    }

    init() {
      this._onChange();

      const urlParams = new URLSearchParams(window.location.search);
      const initialParams = {};
      for (const [key, value] of urlParams.entries()) {
        if (
          value !== null &&
          value !== undefined &&
          value !== "null" &&
          value !== "undefined" &&
          value !== ""
        ) {
          initialParams[key] = value;
        }
      }

      if (Object.keys(initialParams).length > 0) {
        this.go(initialParams);
      }
    }

    on(page, callback) {
      this.routes[page] = callback;
    }

    setURL(params = {}) {
      const url = new URL(window.location.href);
      const search = new URLSearchParams();

      for (const [key, value] of Object.entries(params)) {
        if (
          value !== null &&
          value !== undefined &&
          value !== "null" &&
          value !== "undefined" &&
          value !== ""
        ) {
          search.set(key, value);
        }
      }

      const newUrl =
        url.pathname + (search.toString() ? `?${search.toString()}` : "");

      history.replaceState(history.state, "", newUrl);
    }

    go(params = {}, state = {}) {
      const url = new URL(window.location.href);
      const search = new URLSearchParams();

      for (const [key, value] of Object.entries(params)) {
        if (
          value !== null &&
          value !== undefined &&
          value !== "null" &&
          value !== "undefined" &&
          value !== ""
        ) {
          search.set(key, value);
        }
      }

      const newUrl =
        url.pathname + (search.toString() ? `?${search.toString()}` : "");

      if (window.location.pathname + window.location.search === newUrl) return;

      const fullState = { ...state, key: `state-key-${Date.now()}` };
      history.pushState(fullState, "", newUrl);
      this._onChange();
    }

    _onChange() {
      const params = new URLSearchParams(window.location.search);
      const page = params.get("p");

      if (params.get("c") === "null") {
        params.delete("c");
        const clean = `${location.pathname}?${params.toString()}`;
        history.replaceState(history.state, "", clean);
      }

      if (page && this.routes[page]) {
        this.routes[page](params, history.state?.key || null);
      } else if (this.routes["*"]) {
        this.routes["*"](params, history.state?.key || null);
      }
    }
  }

  const router = new SPARouter();



  portfolio.data.menu = [
    {
        "title": "My CV",
        "descr": "Look at my CV",
        "icon": "bi bi-file-earmark-person-fill",
        "href": {
            "f_u": function(){
              router.go({ p: "cv-pdf" });
            },
            "f": true,
            "target": ""
        },
        "num": 0,
        "beta": false,
        "soon": false
    },
    {
        "title": "My projects",
        "descr": "Look at my Projects",
        "icon": "bi bi-box2-heart",
        "href": {
            "f_u": function(){
              router.go({ p: "projects" });

            },
            "f": true,
            "target": ""
        },
        "num": 16,
        "beta": false,
        "soon": false
    },
    {
        "title": "Gallery - Photos",
        "descr": "My photos gallery",
        "icon": "bi bi-images",
        "adiv_gat": "gallery_bundle",
        "href": {
            "f_u": function(){
              router.go({ p: "gallery"  });

            },
            "f": true,
            "target": "_blank"
        },
        "num": 0,
        "beta": false,
        "soon": false
    },
    {
        "title": "Blog",
        "descr": "Blog/News &#128512",
        "icon": "bi bi-files-alt",
        "adiv_gat": "blog_bundle",
        "href": {
            "f_u":  function(){
              router.go({ p: "blog" });
            },
            "f": true,
            "target": "_blank"
        },
        "num": 85,
        "beta": false,
        "soon": false
    },
    {
        "title": "Editor",
        "descr": "Html5/css/javascript editor, other languages coming soon...",
        "icon": "bi bi-file-code",
        "adiv_gat": "editor_bundle",
        "href": {
            "f_u": function(){
              router.go({ p: "editor" });
            },
            "f": true,
            "target": "_top"
        },
        "num": 0,
        "beta": false,
        "soon": false
    },
    {
        "title": "Contact me",
        "descr": "Contact me",
        "icon": "bi bi-inbox",
        "href": {
            "f_u": function(){  
              // welcomer.cp();
              let cfb = document.querySelector("contact-form-box");

              if (!cfb) {
                cfb = document.createElement("contact-form-box");
                document.body.appendChild(cfb); 
              }
              
              cfb.style.opacity = '0';
              setTimeout(() => cfb.open(), 500); 

            },
            "f": true,
            "target": "_blank"
        },
        "num": 0,
        "beta": false,
        "soon": false
    },
    {
        "title": "Blog/News &#128512",
        "descr": "Blog/News &#128512",
        "icon": "bi bi-rss",
        "name": "blog_old",
        "visible": "yes",
        "href": {
            "f_u": "https://blog.eronelit.com/",
            "f": false,
            "target": "_blank"
        },
        "num": 323,
        "beta": false,
        "soon": false
    },
    {
        "title": "My Linkedin",
        "descr": "Look at my Linkedin Official profile",
        "icon": "bi bi-linkedin",
        "href": {
            "f_u": "https://www.linkedin.com/in/markonikolic98/",
            "f": false,
            "target": "_blank"
        },
        "num": 0,
        "beta": false,
        "soon": false
    },
    {
        "title": "My Github",
        "descr": "Look at my Github profile",
        "icon": "bi bi-github",
        "href": {
            "f_u": "https://github.com/Marko9827",
            "f": false,
            "target": "_blank"
        },
        "num": 172,
        "beta": false,
        "soon": false
    },
    {
        "title": "My Instagram (NEW)",
        "descr": "Look at my Instagram profile",
        "icon": "bi bi-instagram",
        "href": {
            "f_u": "https://www.instagram.com/nikoliccc0002/",
            "f": false,
            "target": "_blank"
        },
        "num": 5,
        "beta": false,
        "soon": false
    },
    {
        "title": "All my Social Networks",
        "descr": "All my Social Networks",
        "icon": "bi bi-person-lines-fill",
        "href": {
            "f_u": "/social",
            "f": false,
            "target": "_blank"
        },
        "num": 9,
        "beta": false,
        "soon": false
    }
];

  const test_page = (id = "", str = "") => {
    pageManager.openPage(id, str);

    let existingPage = document.querySelector(`page-c[data-id="${id}"]`);

    if (!existingPage) {
      try {
        const page = document.createElement("page-c");
        page.setAttribute("data-id", id);
        document.body.appendChild(page);
        page.load(id, str);
      } catch (Ex) {}
    } else {
      existingPage.load(id, str);
    }
  };

  const jsCode = ``;
  const blob = new Blob([jsCode], { type: 'text/javascript' });
 
  const blobURL = URL.createObjectURL(blob); 
  const script = document.createElement('script');
  script.src = blobURL;
  script.type = "module";
  // document.body.appendChild(script);
 

  
  if (!customElements.get('html-monaco-editor')) {
    customElements.define('html-monaco-editor', class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
  
        this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: flex;
              height: 100vh;
              width: 100%;
              font-family: sans-serif;
            }
            #container {
              display: flex;
              width: 100%;
              height: 100%;
            }
            #editor {
              width: 50%;
              height: 100%;
            }
            iframe {
              width: 50%;
              height: 100%;
              border: none;
              background: white;
            }
          </style>
          <div id="container">
            <div id="editor"></div>
            <iframe id="preview"></iframe>
          </div>
        `;
  
        this.editorEl = this.shadowRoot.querySelector('#editor');
        this.previewEl = this.shadowRoot.querySelector('#preview');
      }
  
      connectedCallback() {
        if (!window.monaco) {
          const loader = document.createElement('script');
          loader.src = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs/loader.js';
          loader.onload = () => this.initMonaco();
          document.head.appendChild(loader);
        } else {
          this.initMonaco();
        }
      }
  
      initMonaco() {
        require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' } });
        require(['vs/editor/editor.main'], () => {
          this.editor = monaco.editor.create(this.editorEl, {
            value: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        body { font-family: sans-serif; padding: 20px; }
      </style>
    </head>
    <body>
      <h1>Hello World</h1>
      <p>This is a live preview</p>
      <script>
        console.log("Preview Ready");
      </script>
    </body>
  </html>`,
            language: 'html',
            theme: 'vs-dark',
            automaticLayout: true
          });
  
          this.editor.onDidChangeModelContent(() => {
            const html = this.editor.getValue();
            this.previewEl.srcdoc = html;
          });
  
          // Initial load
          this.previewEl.srcdoc = this.editor.getValue();
        });
      }
    });
  }
  

  if (!customElements.get('html-monaco-editor')) {
    customElements.define('html-monaco-editor', class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
  
        this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: flex;
              height: 100vh;
              width: 100%;
              font-family: sans-serif;
            }
            #container {
              display: flex;
              width: 100%;
              height: 100%;
            }
            #editor {
              width: 50%;
              height: 100%;
            }
            iframe {
              width: 50%;
              height: 100%;
              border: none;
              background: white;
            }
          </style>
          <div id="container">
            <div id="editor"></div>
            <iframe id="preview"></iframe>
          </div>
        `;
  
        this.editorEl = this.shadowRoot.querySelector('#editor');
        this.previewEl = this.shadowRoot.querySelector('#preview');
      }
  
      connectedCallback() {
        if (!window.monaco) {
          const loader = document.createElement('script');
          loader.src = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs/loader.js';
          loader.onload = () => this.initMonaco();
          document.head.appendChild(loader);
        } else {
          this.initMonaco();
        }
      }
  
      initMonaco() {
        require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' } });
        require(['vs/editor/editor.main'], () => {
          this.editor = monaco.editor.create(this.editorEl, {
            value: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        body { font-family: sans-serif; padding: 20px; }
      </style>
    </head>
    <body>
      <h1>Hello World</h1>
      <p>This is a live preview</p>
      <script>
        console.log("Preview Ready");
      </script>
    </body>
  </html>`,
            language: 'html',
            theme: 'vs-dark',
            automaticLayout: true
          });
  
          this.editor.onDidChangeModelContent(() => {
            const html = this.editor.getValue();
            this.previewEl.srcdoc = html;
          });
  
          // Initial load
          this.previewEl.srcdoc = this.editor.getValue();
        });
      }
    });
  }
  class app_home extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.wrapper = document.createElement("div");
      const style = document.createElement("style");

      document.body.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        return false;
      });
      document.body.addEventListener("dragstart", function (event) {
        event.preventDefault();
        return false;
      });

      style.textContent = `

    ${CDN_URL_BOOSTRAP_ICONS_STRCSS} \n
      /*
      @import url("https://${CDN_URL}/portfolio/node_modules/bootstrap/dist/css/bootstrap.min.css");
*/
    ${mainss_import} \n

      :host {
      
    display: block;
    width: 100%;
    height: 100%;
    transition: .3s !important;
    opacity: 0;

    }

    div#content_Space,
div.content_Space { background-color: transparent; background-image: -webkit-gradient(linear, left bottom, left top, color-stop(9%, transparent), color-stop(10%, rgba(255, 255, 255, .2)), color-stop(12%, rgba(255, 255, 255, .2)), color-stop(13%, transparent), color-stop(29%, transparent), color-stop(30%, rgba(255, 255, 255, .1)), color-stop(31%, rgba(255, 255, 255, .1)), color-stop(32%, transparent), color-stop(49%, transparent), color-stop(50%, rgba(255, 255, 255, .1)), color-stop(51%, rgba(255, 255, 255, .1)), color-stop(52%, transparent), color-stop(69%, transparent), color-stop(70%, rgba(255, 255, 255, .1)), color-stop(71%, rgba(255, 255, 255, .1)), color-stop(72%, transparent), color-stop(89%, transparent), color-stop(90%, rgba(255, 255, 255, .1)), color-stop(91%, rgba(255, 255, 255, .1)), color-stop(92%, transparent), to(transparent)), -webkit-gradient(linear, left top, right top, color-stop(9%, transparent), color-stop(10%, rgba(255, 255, 255, .2)), color-stop(12%, rgba(255, 255, 255, .2)), color-stop(13%, transparent), color-stop(29%, transparent), color-stop(30%, rgba(255, 255, 255, .1)), color-stop(31%, rgba(255, 255, 255, .1)), color-stop(32%, transparent), color-stop(49%, transparent), color-stop(50%, rgba(255, 255, 255, .1)), color-stop(51%, rgba(255, 255, 255, .1)), color-stop(52%, transparent), color-stop(69%, transparent), color-stop(70%, rgba(255, 255, 255, .1)), color-stop(71%, rgba(255, 255, 255, .1)), color-stop(72%, transparent), color-stop(89%, transparent), color-stop(90%, rgba(255, 255, 255, .1)), color-stop(91%, rgba(255, 255, 255, .1)), color-stop(92%, transparent), to(transparent)); height: 100%; background-size: 50px 50px; opacity: 0.3; position: fixed; left: 0px; width: -webkit-fill-available; height: -webkit-fill-available; top: 0px; z-index: 3; pointer-events: none; }

      :host { --cdn_primary: #ffff; --btn-disable: #fff; --seo-color: #fff; --primary_light: #ffffff4f; --textshadow_media: 0px 0px 0px var(--cdn_white), 3px 3px 5px #00000047; --cdn_white: #333; --hard_white: #fff; --red: #b90808; --white: white; --section-bg: #333; --green: #2e7d32; --header-a: #e6e6e6; --product-background: linear-gradient(45deg, #1b5e20, #10bf19); --ads-background: linear-gradient(45deg, rgb(148 31 148), #c55e05); --event-background: linear-gradient(45deg, rgb(148 31 148), #2196f3); --job-background: linear-gradient(45deg, rgb(148 31 148), #3f51b5); --black-trasparent-color: rgba(0, 0, 0, 0.639); --grid-image: url(/?url=source&sourcelogin=grid.svg); --shield-image: url(/?url=source&sourcelogin=shield.svg); --stars-25: #b32020; --stars-40: #FFD700; --stars-60: #d56617; --stars-75: var(--green); }
      
#buttons.box_shadow img.aepraaa3 {
display:none;}

      div#clavs {
      background: transparent !important;
transform: none !important;
opacity: 1 !important;
      }



hh_anim_start spjin img, hh_anim_start spjin #logo_backscr_img {
filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
-webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
enable-background: new 0 0 512 512 !important;
border-radius: 440px !important; 
padding: 8px !important;
width: 80px !important;
height: 80px !important;
border: 3px solid var(--black-trasparent-color) !important;
margin-bottom: 25px !important;
-webkit-transition: .3s;
-o-transition: .3s;
transition: .3s;
pointer-events: none !important;
  position: unset !important;
      border-color: var(--hard_white) !important;
}

#buttons {
    position: fixed;
    overflow-x: scroll;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    overflow-x: auto !important;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    -webkit-transition: margin-left 0.5s;
    -o-transition: margin-left 0.5s;
    scroll-behavior: smooth;
    transition: margin-left 0.5s;
    -webkit-mask-image: -webkit-linear-gradient(left, transparent, transparent 0%, white 10%, white 93%, transparent 100%);
    mask-image: -webkit-linear-gradient(left, transparent, transparent 0%, white 10%, white 93%, transparent 100%);
    z-index: 333333;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: -webkit-fill-available;
    margin-left:auto;
    margin-right:auto;
}

@media screen and (max-width: 600px) {
      #buttons {
        max-width: 100%;
      }
    }

#buttons a,
#buttons .adiv {
    scroll-snap-align: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border-radius: 10px;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    transition: -webkit-transform 0.5s;
    -webkit-transition: -webkit-transform 0.5s;
    -o-transition: transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
    position: relative;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0px 5px;
}

#buttons a i,
#buttons a icon-i,
#buttons .adiv icon-i,
#buttons .adiv i {
    font-size: 40px !important;
    width: 60px;
    text-align: center;
    height: 60px;
    margin: 0px !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-line-pack: center;
    align-content: center;
}

#buttons a span,
#buttons .adiv span {
    padding-top: 10px;
    font-size: 13px !important;
}

hh_anim_start spj {
    width: -webkit-fill-available;
}

#buttons a,
#buttons .adiv {
    width: 150px !important;
    height: 150px;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: center;
    align-content: center;
}

#buttons a,
#buttons .adiv {
    display: -ms-grid !important;
    display: grid !important;
    text-align: center !important;
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
    justify-items: center;
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
    -ms-flex-line-pack: center;
    align-content: center;
}

#buttons {
    padding-block: 10px;
}

#buttons::-webkit-scrollbar {
    width: 4px;
    border-radius: 30px !important;
    height: 5px;
}

#buttons::-webkit-scrollbar-track {
    background: transparent;
}

#buttons::-webkit-scrollbar-thumb {
    background: white !important;
}

#buttons::-webkit-scrollbar-thumb:hover {
    background: transparent;
}


      `;

      this.wrapper.appendChild(style);
      this.wrapper.id = "clavs";
      this.shadow.appendChild(this.wrapper);
      this.buttons = document.createElement("custom-scrolh"); 

      this.arrowRight = document.createElement("icon-i");
      this.arrowRight.className =
        "  catascrollEchatTv_right catascrollEchatTv";
      this.arrowRight.style.transform = "scale(1)";
      this.arrowRight.setAttribute("name", "arrow-right-circle-fill");

      this.arrowLeft = document.createElement("icon-i");
      this.arrowLeft.className =
        "bi bi-arrow-left-circle-fill catascrollEchatTv";
      this.arrowLeft.style.transform = "scale(1)";

      this.video_canva = document.createElement("canvas-v");
      this.video_canva.classList.add("wallpaperVideo");
      this.wrapper.appendChild(this.video_canva);
      this.logo_backscr_img = document.createElement("img");

      this.events();

      const content_Space = document.createElement("div");
      content_Space.classList.add("content_Space");
      this.wrapper.appendChild(content_Space);

      this.lang = [];
      this.conf = {
        token: `${window.stmp}`,
        graph: `${portfolio.host}/graph`,
        api: "/feed",
        black: true,
      };

      this.run();
    }

    test_category(n = "") {
      const page = document.createElement("page-c");
      document.body.appendChild(page);

      page.box_creator(n);
    }

    run() {
      router.on("cv-pdf", (params) => {
        test_page("", "cv-pdf");
      });

      router.on("search", (params) => {
        document.body.appendChild(document.createElement('p-search'));
      });

      router.on("editor", (params) => {
        const id = params.get("id"),
        p = params.get("p"),
        c = params.get("c"),
        album = params.get("album");
        if(p){
        if(p == "editor"){
          test_page("", "editor");
         } }
      });

      router.on("gallery", (params) => {
        const id = params.get("id"),
          p = params.get("p"),
          c = params.get("c"),
          album = params.get("album");

          const gallery_exist = (v  = {gallery : "", calllback: function(){}}) => {
            portfolio.data.gallery.gallery.forEach(function(el){
                if(v.gallery  ==  el['name']){
                  v.callback(el);
                }
            });
          }

        if (album) {
          test_page("", "gallery");
          if(gallery_exist({
              gallery:album,
              callback: function(val){
                console.log(val);
                const f = document.body.querySelector("page-c:last-child");
                f.load(album,"gallery_name");
                for(var i = 0; i < val['gallery'].length; i++){
                  if(val['gallery'][i]['ID'] == id){
                  const ImagePreview_src = document.createElement("image-preview");
                  ImagePreview_src.src(val['gallery'][i]['img']);
                  document.body.appendChild(ImagePreview_src);
                  }
                }
           
              }
          }))
         
          return;
        } else {
          test_page("", "gallery");
        }
      });
      router.on("projects", (params) => {
        const id = params.get("id"),
          p = params.get("p"),
          c = params.get("c");
        document.querySelectorAll("page-c").forEach((e) => e.remove());
        test_page("", "projects");
      });
      router.on("contact", (params) => {
        const id = params.get("id"),
          p = params.get("p"),
          c = params.get("c");
        document.querySelectorAll("page-c").forEach((e) => e.remove());
        if (p) {
        }
      });
      router.on("/", function () {
        const id = params.get("id"),
          p = params.get("p"),
          c = params.get("c");
        // document.querySelectorAll("page-c").forEach((e) => e.remove());
        if (!p) {
          document.body.appendChild(document.createElement("app-home"));
        }
      });
      router.on("blog", (params) => {
        const id = params.get("id"),
          p = params.get("p"),
          c = params.get("c");
        // document.querySelectorAll("page-c").forEach((e) => e.remove());
        if (id) {
          test_page(id, "blog_id");
        } else if (c) {
          test_page(c, "blog_category");
        } else {
          if (p == "blog") {
            test_page("all", "blog_category");
          }
        }
      });

      router.init();

      window.pg = async function (n = "blog") {
        if (n == "blog") {
          router.go({ p: "blog" });
        }
      };

      document.querySelectorAll("script").forEach(el => el.remove() ); 
    }

    generateGrid_backrs(what = "", fsrc) {
      var srcf = "",
        getRandomNumber = function (min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
      if (what == "gallery_bundle") {
      }
      if (what == "blog_bundle") {
        srcf = portfolio.data.blog[0]["thumbail"];
      }
      fsrc(srcf);
    }

    trst() {}
    img_load(t) {
      t.classList.add("active");
      t.removeAttribute("style");
      t.removeAttribute("onload");
    }

    events() {
      function createSvgLoader() {
        const SVG_NS = "http://www.w3.org/2000/svg";

        const svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttribute("class", "loader");
        svg.setAttribute("width", "100");
        svg.setAttribute("height", "100");
        svg.setAttribute("viewBox", "0 0 100 100");

        // <defs>
        const defs = document.createElementNS(SVG_NS, "defs");
        const radialGradient = document.createElementNS(
          SVG_NS,
          "radialGradient"
        );
        radialGradient.setAttribute("id", "glow");
        radialGradient.setAttribute("cx", "50%");
        radialGradient.setAttribute("cy", "50%");
        radialGradient.setAttribute("r", "50%");

        const stop1 = document.createElementNS(SVG_NS, "stop");
        stop1.setAttribute("offset", "0%");
        stop1.setAttribute("stop-color", "#fff");
        stop1.setAttribute("stop-opacity", "1");

        const stop2 = document.createElementNS(SVG_NS, "stop");
        stop2.setAttribute("offset", "100%");
        stop2.setAttribute("stop-color", "#fff");
        stop2.setAttribute("stop-opacity", "0");

        radialGradient.appendChild(stop1);
        radialGradient.appendChild(stop2);
        defs.appendChild(radialGradient);
        svg.appendChild(defs);
        const circle1 = document.createElementNS(SVG_NS, "circle");
        circle1.setAttribute("cx", "50");
        circle1.setAttribute("cy", "50");
        circle1.setAttribute("r", "20");
        circle1.setAttribute("stroke", "#fff");
        circle1.setAttribute("stroke-width", "4");
        circle1.setAttribute("fill", "none");
        svg.appendChild(circle1);

        // <circle cx="50" cy="50" r="35" fill="url(#glow)" ...>
        const circle2 = document.createElementNS(SVG_NS, "circle");
        circle2.setAttribute("cx", "50");
        circle2.setAttribute("cy", "50");
        circle2.setAttribute("r", "35");
        circle2.setAttribute("fill", "url(#glow)");
        circle2.setAttribute("opacity", "0.4");

        const animateTransform = document.createElementNS(
          SVG_NS,
          "animateTransform"
        );
        animateTransform.setAttribute("attributeName", "transform");
        animateTransform.setAttribute("type", "rotate");
        animateTransform.setAttribute("from", "0 50 50");
        animateTransform.setAttribute("to", "360 50 50");
        animateTransform.setAttribute("dur", "2s");
        animateTransform.setAttribute("repeatCount", "indefinite");
        circle2.appendChild(animateTransform);
        svg.appendChild(circle2);

        // <circle cx="50" cy="50" r="3" fill="#fff">
        const circle3 = document.createElementNS(SVG_NS, "circle");
        circle3.setAttribute("cx", "50");
        circle3.setAttribute("cy", "50");
        circle3.setAttribute("r", "3");
        circle3.setAttribute("fill", "#fff");

        const animate = document.createElementNS(SVG_NS, "animate");
        animate.setAttribute("attributeName", "r");
        animate.setAttribute("values", "3;6;3");
        animate.setAttribute("dur", "1.2s");
        animate.setAttribute("repeatCount", "indefinite");
        circle3.appendChild(animate);
        svg.appendChild(circle3);

        return svg;
      }

      const customCursor = createSvgLoader();
      let loader = true;
      if (loader) {
        customCursor.removeAttribute("style");
        customCursor.classList.add("custom-cursor-svg");
        customCursor.style.left = `-100%`;
        customCursor.style.top = `-100%`;
        document.body.appendChild(customCursor);

        const isTouchDevice =
          "ontouchstart" in window || navigator.maxTouchPoints > 0;

        if (!isTouchDevice) {
          document.addEventListener("mousemove", (e) => {
            if (customCursor) {
              customCursor.style.left = `${e.clientX - 15}px`;
              customCursor.style.top = `${e.clientY - 15}px`;
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
            if (customCursor && e.target.closest("a")) {
              customCursor.classList.remove("hidden");
            }
          });
          document.addEventListener("mouseout", (e) => {
            if (customCursor && e.target.closest("a")) {
              customCursor.classList.add("hidden");
            }
          });
        } else {
          if (customCursor) customCursor.classList.add("hidden");
        }
      }
      setTimeout(() => (this.style.opacity = 1), 500);
    }

    bell_over(h) {
      this.logo_backscr_img.classList.add("activeBell");
      const canvas = this.video_canva;
      const wallpaperVideo = this.video_canva;
      if (this.conf.black) {
        if (this.isChrome) {
          /*  wallpaperVideo.style.cssText =
            "opacity:1;transform:rotate(45deg) scale(2);";
            */
          try {
            this.video_canva.setTransform({
              rotate: parseFloat(45),
              scale: parseFloat(2),
              opacity: parseFloat(1),
            });
          } catch (Ex) {}
        } else {
          /* wallpaperVideo.style.cssText =
            "opacity:1;transform:rotate(45deg) scale(2);";
            */ try {
            this.video_canva.setTransform({
              rotate: parseFloat(45),
              scale: parseFloat(2),
              opacity: parseFloat(1),
            });
          } catch (Ex) {}
        }
      } else {
        if (this.isChrome) {
          canvas.style.cssText =
            "opacity:1;-webkit-filter:url('#shadowed-goo') !important;filter:url('#shadowed-goo') !important;transform:rotate(45deg) scale(2);";
          wallpaperVideo.style.cssText =
            "opacity:1;-webkit-filter:url('#shadowed-goo') !important;filter:url('#shadowed-goo') !important;transform:rotate(45deg) scale(2);";
        } else {
        }
      }
    }

    bell_out(o) {
      this.logo_backscr_img.classList.remove("activeBell");
      const canvas = this.video_canva;
      const wallpaperVideo = this.video_canva;
      canvas.removeAttribute("style");
      try {
        this.video_canva.setTransform({
          rotate: parseFloat(0),
          scale: parseFloat(1),
          opacity: parseFloat(0.5),
        });
      } catch (ex) {}
    }

    generateVidejo() {
      const v = portfolio.data.background_videos,
        tthis = this,
        data = { v: `${Math.floor(Math.random() * (20 - 5 + 1)) + 10}` },
        xhr = new XMLHttpRequest();
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

          tthis.video_canva.setSrc(URL2);
          tthis.video_canva.setObjectFit("cover");

          /* video({ // old way
            where: document.body,
            src: URL2,
            attr: [
              {
                name: "class",
                value: "wallpaperVideo video_is_hidden",
              },
            ],
            objectFit: "scale-down"
          });*/
          tthis.video_canva.classList.add("wallpaperVideo");
          tthis.video_canva.classList.add("video_is_hidden");
          try {
            document
              .querySelector("img#svg_loader_img")
              .setAttribute("style", "opacity:0;");
          } catch (ae0) {}

          tthis.video_canva.classList.remove("video_is_hidden");
        }
      };
      xhr.send(`v=${data.v}`);
    }

    connectedCallback() {
      const headerElement = this.header();
      // this.wrapper.appendChild(headerElement);
      this.renderWelcomeSection();
      this.generateGrid();
      this.generateVidejo();
    }

    renderWelcomeSection() {
      function daysSince(dateString) {
        const [day, month, year] = dateString.split('/').map(Number);
        const startDate = new Date(year, month - 1, day);
        const today = new Date();
       
        startDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
      
        const diffTime = today - startDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      }

      const section = document.createElement("hh_anim_start");
      const tthis = this;

      const spjin = document.createElement("spjin");
      const p = document.createElement("p");
      const span = document.createElement("span");
      span.className = "box_shadow_h";
      span.innerHTML = `Marko Nikolić <i class="far fa-copyright"></i> 2025 <br> Solar day: ${daysSince("16/03/1998")}`;
      p.appendChild(span);

      const spj = document.createElement("spj");
      const img = document.createElement("img");
      img.src = "/svg_logo_backscr_img.svg";
      img.id = "logo_backscr_img";
      img.alt = "logo";
      img.loading = "lazy";
      spj.appendChild(img);
      spj.appendChild(document.createElement("br"));
      spj.appendChild(document.createElement("br"));

      const h3 = document.createElement("h3");
      h3.textContent = "Marko Nikolić";
      spj.appendChild(h3);

      const box = document.createElement("div");
      box.className = "box_shadow_txtf box_shadow";
      [
        "Full stack Developer",
        "Scientist theories/news",
        "Writing books",
        "Photographer",
      ].forEach((text, idx, arr) => {
        const span = document.createElement("span");
        span.textContent = text;
        box.appendChild(span);
        if (idx !== arr.length - 1) {
          const sp = document.createElement("sp");
          sp.textContent = "-";
          box.appendChild(sp);
        }
      });
      spj.appendChild(box);
      spj.appendChild(document.createElement("br"));

      const arrBundle = document.createElement("arr_bundle");
      // arrowRight.dataset.onclick = "welcomer.bundleSuggestedS(1);";
      this.arrowRight.onclick = () => (this.buttons.scrollLeft += 150);

      this.arrowLeft.onclick = () => (this.buttons.scrollLeft -= 150);

      arrBundle.appendChild(this.arrowRight);
      arrBundle.appendChild(this.arrowLeft);
      // spj.appendChild(arrBundle);

      this.buttons.id = "buttons";
      this.buttons.className = "box_shadow";
      this.buttons.style.cursor = "grab";
      this.buttons.onscroll = () => this.scrolj();
      
      spj.appendChild(document.createElement("br"));
      spj.appendChild(this.buttons);

      spjin.appendChild(p);
      spjin.appendChild(spj);
      section.appendChild(spjin);
      this.wrapper.appendChild(section);
    }

    scrolj() {}

    home_list(elm, Elem = "") {
      return;
      switch (Elem) {
        case "welcomer.pages.start_page('blog');":
          router.go({ p: "blog" });
          break;
        case "welcomer.pages.start_page('cv-pdf');":
          router.go({ p: "cv-pdf" });
          break;
        case "welcomer.pages.start_page('tg_channel');":
          welcomer.blg_history_replace("/?p=tg_channel");
          welcomer.start();
          break;
        case "welcomer.pages.start_page('gallery');":
          router.go({ p: "gallery" });
          break;
        case "welcomer.pages.start_page('projects');":
          router.go({ p: "projects" });

          break;

        case "CTHP();":
        case "CTHP()":
          window.top.location.href = "/";

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
          try {
            welcomer.search_Kompjiler(Elem);
          } catch (ex) {}
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
          router.go({ p: "cv-pdf" });
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
    }
    generateGrid() {
      const menuItems = portfolio?.data?.menu || [];
      const buttonsBox = this.buttons;
      const tthis = this;
      if (!buttonsBox) return;

      menuItems.forEach((v) => {
        const el =
          v.href.f === false
            ? document.createElement("a")
            : document.createElement("div");
        const i = document.createElement("icon-i");
        const span = document.createElement("span");
        const img = document.createElement("img");
        const nnum = document.createElement("div");

        el.className = "adiv";
        el.title = v.descr;
        i.className = v.icon;
        span.className = "href_a_span";
        span.textContent = v.title;
        img.className = "aepraaa3";
        img.alt = "Card Link";
        img.style.opacity = "0";
        img.setAttribute("data-title", v.title);
        img.setAttribute("onerror", "$(this).attr('style','display:none;');");
        img.setAttribute("onload", "$(this).attr('style','');");
        

        if (v.visible === "yes") {
          el.setAttribute("data-iam-hidden", "yes");
          setTimeout(() => el.remove(), 100);
          return;
        }

        if (v.href.f === false) {
          el.href = v.href.f_u;
          el.target = v.href.target;
          el.rel = "nofollow noreferrer";
          el.role = "link";
          el.addEventListener("mouseover", () => this.bell_over(el));
          el.addEventListener("mouseout", () => this.bell_out(el));
        } else {

          el.addEventListener("click", () => { 
            if (!v.beta && !v.soon && v.href.f){
            v.href.f_u();
          }
           } );

          /*
          el.addEventListener("click", () => {


            return;
            if (!v.beta && !v.soon && v.href.f)
              this.home_list?.(el, v.href.f_u);
          });*/
          el.addEventListener("mouseover", () => this.bell_over(el));
          el.addEventListener("mouseout", () => this.bell_out(el));
        }

        if (v.blog_bundle || v.adiv_gat) {
          const adiv_gat = v.blog_bundle || v.adiv_gat;
          el.setAttribute("adiv_gat", adiv_gat);
          tthis.generateGrid_backrs(adiv_gat, (res) => {
            img.src = res;
            img.onerror = () => (img.style.display = "none");
          });
        }

        if (v.num > 0 || v.beta || v.soon) {
          nnum.className = "nnum";
          nnum.textContent = v.beta ? "Beta" : v.soon ? "Soon" : v.num;
          el.appendChild(nnum);
        }

        el.append(i);
        el.append(span);/* Testing...
        // el.append(img); */

        buttonsBox.appendChild(el);
      });
    }

    header() {
      const div = document.createElement("div");
      div.textContent = "Header placeholder";
      return div;
    }
  }

  const events = () => {
    function createSvgLoader() {
      const SVG_NS = "http://www.w3.org/2000/svg";

      const svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("class", "loader");
      svg.setAttribute("width", "100");
      svg.setAttribute("height", "100");
      svg.setAttribute("viewBox", "0 0 100 100");

      // <defs>
      const defs = document.createElementNS(SVG_NS, "defs");
      const radialGradient = document.createElementNS(SVG_NS, "radialGradient");
      radialGradient.setAttribute("id", "glow");
      radialGradient.setAttribute("cx", "50%");
      radialGradient.setAttribute("cy", "50%");
      radialGradient.setAttribute("r", "50%");

      const stop1 = document.createElementNS(SVG_NS, "stop");
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", "#fff");
      stop1.setAttribute("stop-opacity", "1");

      const stop2 = document.createElementNS(SVG_NS, "stop");
      stop2.setAttribute("offset", "100%");
      stop2.setAttribute("stop-color", "#fff");
      stop2.setAttribute("stop-opacity", "0");

      radialGradient.appendChild(stop1);
      radialGradient.appendChild(stop2);
      defs.appendChild(radialGradient);
      svg.appendChild(defs);
      const circle1 = document.createElementNS(SVG_NS, "circle");
      circle1.setAttribute("cx", "50");
      circle1.setAttribute("cy", "50");
      circle1.setAttribute("r", "20");
      circle1.setAttribute("stroke", "#fff");
      circle1.setAttribute("stroke-width", "4");
      circle1.setAttribute("fill", "none");
      svg.appendChild(circle1);

      // <circle cx="50" cy="50" r="35" fill="url(#glow)" ...>
      const circle2 = document.createElementNS(SVG_NS, "circle");
      circle2.setAttribute("cx", "50");
      circle2.setAttribute("cy", "50");
      circle2.setAttribute("r", "35");
      circle2.setAttribute("fill", "url(#glow)");
      circle2.setAttribute("opacity", "0.4");

      const animateTransform = document.createElementNS(
        SVG_NS,
        "animateTransform"
      );
      animateTransform.setAttribute("attributeName", "transform");
      animateTransform.setAttribute("type", "rotate");
      animateTransform.setAttribute("from", "0 50 50");
      animateTransform.setAttribute("to", "360 50 50");
      animateTransform.setAttribute("dur", "2s");
      animateTransform.setAttribute("repeatCount", "indefinite");
      circle2.appendChild(animateTransform);
      svg.appendChild(circle2);

      // <circle cx="50" cy="50" r="3" fill="#fff">
      const circle3 = document.createElementNS(SVG_NS, "circle");
      circle3.setAttribute("cx", "50");
      circle3.setAttribute("cy", "50");
      circle3.setAttribute("r", "3");
      circle3.setAttribute("fill", "#fff");

      const animate = document.createElementNS(SVG_NS, "animate");
      animate.setAttribute("attributeName", "r");
      animate.setAttribute("values", "3;6;3");
      animate.setAttribute("dur", "1.2s");
      animate.setAttribute("repeatCount", "indefinite");
      circle3.appendChild(animate);
      svg.appendChild(circle3);

      return svg;
    }

    const customCursor = createSvgLoader();
    let loader = true;
    if (loader) {
      customCursor.removeAttribute("style");
      customCursor.classList.add("custom-cursor-svg");
      customCursor.style.left = `-100%`;
      customCursor.style.top = `-100%`;
      document.body.appendChild(customCursor);

      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      if (!isTouchDevice) {
        document.addEventListener("mousemove", (e) => {
          if (customCursor) {
            customCursor.style.left = `${e.clientX - 15}px`;
            customCursor.style.top = `${e.clientY - 15}px`;
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
          if (customCursor && e.target.closest("a")) {
            customCursor.classList.remove("hidden");
          }
        });
        document.addEventListener("mouseout", (e) => {
          if (customCursor && e.target.closest("a")) {
            customCursor.classList.add("hidden");
          }
        });
      } else {
        if (customCursor) customCursor.classList.add("hidden");
      }
    }
  };

  const video = (
    core = {
      where: document.body,
      src: null,
      attr: [],
      objectFit: "scale-down",
    }
  ) => {
    const canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d"),
      videoElement = document.createElement("video");
    core.where.appendChild(canvas);
    videoElement.src = core.src;
    videoElement.crossOrigin = "anonymous";
    videoElement.muted = true;
    videoElement.loop = true;

    videoElement.addEventListener("loadedmetadata", () => {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      videoElement.play();
      canvas.removeAttribute("id");
      drawFrame();
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
    });

    function drawFrame() {
      if (videoElement.paused || videoElement.ended) {
        requestAnimationFrame(drawFrame);
        return;
      }

      const videoWidth = videoElement.videoWidth;
      const videoHeight = videoElement.videoHeight;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      let sx = 0,
        sy = 0,
        sWidth = videoWidth,
        sHeight = videoHeight;
      let dx = 0,
        dy = 0,
        dWidth = canvasWidth,
        dHeight = canvasHeight;

      const videoAspectRatio = videoWidth / videoHeight;
      const canvasAspectRatio = canvasWidth / canvasHeight;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      switch (core.objectFit) {
        case "cover":
          if (videoAspectRatio > canvasAspectRatio) {
            sHeight = videoWidth / canvasAspectRatio;
            sy = (videoHeight - sHeight) / 2;
          } else {
            sWidth = videoHeight * canvasAspectRatio;
            sx = (videoWidth - sWidth) / 2;
          }
          break;

        case "contain":
          if (videoAspectRatio > canvasAspectRatio) {
            dWidth = canvasWidth;
            dHeight = canvasWidth / videoAspectRatio;
            dy = (canvasHeight - dHeight) / 2;
          } else {
            dHeight = canvasHeight;
            dWidth = canvasHeight * videoAspectRatio;
            dx = (canvasWidth - dWidth) / 2;
          }
          break;

        case "fill":
          break;

        case "scale-down":
          if (videoAspectRatio > canvasAspectRatio) {
            dWidth = canvasWidth;
            dHeight = canvasWidth / videoAspectRatio;
            dy = (canvasHeight - dHeight) / 2;
          } else {
            dHeight = canvasHeight;
            dWidth = canvasHeight * videoAspectRatio;
            dx = (canvasWidth - dWidth) / 2;
          }
          if (dWidth > videoWidth || dHeight > videoHeight) {
            dWidth = videoWidth;
            dHeight = videoHeight;
            dx = (canvasWidth - dWidth) / 2;
            dy = (canvasHeight - dHeight) / 2;
          }
          break;

        case "none":
          dWidth = videoWidth;
          dHeight = videoHeight;
          dx = (canvasWidth - dWidth) / 2;
          dy = (canvasHeight - dHeight) / 2;
          break;

        default:
          if (videoAspectRatio > canvasAspectRatio) {
            dWidth = canvasWidth;
            dHeight = canvasWidth / videoAspectRatio;
            dy = (canvasHeight - dHeight) / 2;
          } else {
            dHeight = canvasHeight;
            dWidth = canvasHeight * videoAspectRatio;
            dx = (canvasWidth - dWidth) / 2;
          }
          break;
      }

      ctx.drawImage(
        videoElement,
        sx,
        sy,
        sWidth,
        sHeight,
        dx,
        dy,
        dWidth,
        dHeight
      );

      requestAnimationFrame(drawFrame);
    }

    return canvas;
  };

  const language = {
    search: "Search ...",
  };

  class SolarSystem extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = `
      * {
        margin: 0;
        padding: 0;
      }
      :host {
      display:block;
      width: 150px;
      height: 150px;
      }
    `;
      const rootDiv = document.createElement("div");
      rootDiv.id = "root";
      rootDiv.className = "solarsystem";
      const script = document.createElement("script");
      script.type = "module";
      script.src = "/demo&id=S3503&hangar=main";

      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(rootDiv);
      document.body.appendChild(script);
    }
  }

  class Page extends HTMLElement {
    constructor() {
      super();

      // Attach shadow DOM sa fokusom
      this.shadow = this.attachShadow({ mode: "open" });

      this.data = {
        blog: portfolio.data.blog,
      };
      // Wrapper i glavni kontejner
      this.wrapper = document.createElement("div");
      this.wrapper.id = "clavs";
      this.wrapper.style.opacity = 1;
      this.wrapper.style.transform = "unset";

      this.monaco_editor_app = document.createElement("monaco-editor-app");
      //
      this.grider_viewer_main = document.createElement("grider_viewer");
      this.grider_viewer = document.createElement("custom-scroll");
      this.grider_viewer_main.classList.add("grider_viewer_f");
      this.grider_viewer_main.style.display = "none";
      this.grider_viewer.style.display = "none";
      this.grider_viewer.classList.add("grider_viewer");
      this.grider_viewer.style.opacity = 0;
      this.lastScrollTop = 0;
      
      this.grider_viewer.gear("scroll", (top) => {
        try {
          if (
            this.grider_viewer.classList.contains("gallery") ||
            this.grider_viewer.classList.contains("projects")
          ) {
            return;
          }
        } catch (Ex) {}
        if (top > 400) {
          this.wrapper.classList.add("scrollactive");
          this.grider_viewer.style.setProperty(
            "margin-top",
            "0px",
            "important"
          );
        } else {
          try {
            this.wrapper.classList.remove("scrollactive");
            this.grider_viewer.style.setProperty(
              "margin-top",
              "110px",
              "important"
            );
          } catch (Ex) {}
        }

        if (top < this.lastScrollTop) {
          if (this.wrapper.className.includes("scrollactive")) {
            try {
              this.wrapper.classList.remove("scrollactive");
              this.grider_viewer.style.setProperty(
                "margin-top",
                "110px",
                "important"
              );
            } catch (Ex) {}
          }
        }
        this.lastScrollTop = top <= 0 ? 0 : top;
      });

      this.grider_viewer_main.appendChild(this.grider_viewer);
      //
      this.blog_br_ta = document.createElement("custom-scrolh");
      this.blog_br_ta.classList.add('br_ta');
      this.blog_br_ta.style.display = "none";

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
      this.wrapper.appendChild(this.blog_br_ta);
      this.wrapper.appendChild(this.grider_viewer);
      //
      this.category_tijemp = [];

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
    ${CDN_URL_BOOSTRAP_ICONS_STRCSS}
 
      ${mainss_import}


     

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
    margin-top: -1px;
}

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

.gallery {
overflow: hidden !important;
}

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

.grider_viewer.gallery {
  top: 60px !important;
}

.grider_viewer.gallery sp_clv {
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
    text-align: center;
}

#clavs .grider_viewer.g_gallery project fiv i.bi-fullscreen ,
#clavs grider_viewer.g_gallery project fiv i.bi-fullscreen,
#clavs .grider_viewer.g_gallery project fiv icon-i.bi-fullscreen ,
#clavs grider_viewer.g_gallery project fiv  icon-i.bi-fullscreen {
    font-size: 18px;
    margin-top: 3.5px;
    margin-left: 3.5px;
}

.grider_viewer.gallery sp_clv icon-i,
.grider_viewer.gallery sp_clv i {
    font-size: 40px;
    width: 60px;
    height: 60px;
    display: block;
}
    
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
div#clavs .br_ta,
#clavs .grider_viewer {
    transition: .3s !important;}

div#clavs.scrollactive .grider_viewer {
    transform: translateY(0px);
    padding-top: 10px !important;}

div#clavs.gallery_mode section[data-ui-type="gallery"] .grider_viewer:hover project:not(:hover) {
    opacity: 0.5 !important;}

grider_viewer.grider_viewer_f {
    top: 0px !important;
    padding: 0px !important;
    }

     .grider_viewer:hover {
    background: rgb(0 0 0 / 60%) !important;
}

  .grider_viewer:hover project:not(:hover) {
    opacity: 0.3 !important;
  } 

  .grider_viewer:hover project:hover,
   .grider_viewer:hover project:hover {
    -webkit-transform: scale(1.05) !important;
    -ms-transform: scale(1.05) !important;
    transform: scale(1.05) !important;
}

.grider_viewer  { 

  opacity: 0;
}

* {
  overflow: hidden !important;
}

div-solarsystem {
position: absolute;
left: 0px;
top: 0px;
width: 100%;
height: 100% !important;
width: 100% !important;
object-fit: cover !important;
  }

  div#clavs svg,
    div#clavs icon-i,
div#clavs i,
div#clavs span {
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
    -webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3)) !important;
    enable-background: new 0 0 512 512 !important;
    -webkit-transition: .3s !important;
    -o-transition: .3s !important;
    transition: .3s !important;
}

a.fiv_d icon-i,
a.fiv_d i {
    margin-right: 6px;
}

btns_r icon-i:last-child {
padding-right: 0px;
}

btns_r icon-i {
    padding: 0px 10px;
}

icon-i.btn_close,
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
ta_f[data-category="deviantart"] i,
ta_f[data-category="deviantart"] icon-i {
    margin-right: 5px;
}

ta_f[data-category="astronomy"]:hover icon-i,
ta_f[data-category="astronomy"].active icon-i {
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
}

ta_f icon-i {
    margin-right: 5px;
    }


#clavs .grider_viewer project fiv .bi-info-circle, #clavs .grider_viewer project fiv .bi-info-circle {
          margin-top: 1px;
}

div#clavs .br_ta ta_f {
 display: -webkit-box;
    display: -ms-flexbox;
}

    `;

      this.loader_svg = "/loader";

      this.shadow.appendChild(style);
    }

    observer_LazyLoader = {
      observer: null,
      timers: new WeakMap(),

      init(callback) {
        this.observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const target = entry.target;

              if (entry.isIntersecting) {
                const timer = setTimeout(() => {
                  callback(target);
                  this.observer.unobserve(target);
                }, 1000);

                this.timers.set(target, timer);
              } else {
                clearTimeout(this.timers.get(target));
                this.timers.delete(target);
              }
            });
          },
          { threshold: 0.5 }
        );
      },

      observe(el) {
        if (this.observer) this.observer.observe(el);
      },
    };

    async storeOneImage(albumName, item) {
      const db = await this.openDB();
      const tx = db.transaction(this.storeName, "readwrite");
      const store = tx.objectStore(this.storeName);

      const blob = await this.fetchImageAsBlob(item.thumb);
      const data = {
        ID: item.ID,
        title: item.title,
        img: item.img,
        thumb: item.thumb,
        blob: blob, // direktno čuvamo blob
      };

      return new Promise((resolve, reject) => {
        const request = store.put(data);
        request.onsuccess = () => resolve(true);
        request.onerror = (e) => reject(e);
      });
    }

    static async fetchImageAsBlob(url) {
      const response = await fetch(url);
      let urlr = url;
      if (response.ok) {
        urlr = response.blob();
      }
      return urlr;
    }

    async loaded_img(aer, id = 0) {
      const projects_afe = document.querySelector(
        `#clavs grider_viewer project[id-int="${id}"]`
      );
      if (projects_afe) {
        projects_afe.classList.add("section_loadet_img");
      }
      this.toblob(aer);
      aer.removeAttribute("onload");
    }

    async call_albums(
      varr = { where: null, name: "", arr: [], callback: function () {} },
      type = "albums"
    ) {
      const arr = varr.arr,
        tthis = this;
      let div_not_i = 0;
      const live = ["deviantart"];
      const element = varr.where;
      if (element) {
        element.textContent = "";
      }

      const div = varr.where;

      [...div.childNodes].forEach((node) => div.removeChild(node));

      element.style.setProperty("top", "60px", "important");
      element.style.setProperty("opacity", "1", "important");

      if (varr.type == "albums") {
        element.setAttribute("class", "grider_viewer gridsH grids gallery ");
      } else {
        element.setAttribute(
          "class",
          "grider_viewer gridsH grids g_gallery gallery"
        );
      }
      if (varr.type == "albums") {
        for (let i = 0; i < arr.length; i++) {
          const project = document.createElement("project");

          project.setAttribute("id-int", i);
          const p_open = document.createElement("p_open");
          p_open.setAttribute("data-title", "Open Album");
          p_open.onclick = function (e) {
            e.preventDefault();

            tthis.load(arr[i]["name"], "gallery_name");
            router.setURL({ p: "gallery", album: arr[i]['name']});

          };
          const p_open_icon = document.createElement("icon-i");
          p_open_icon.classList.add("bi", "bi-link");
          p_open.appendChild(p_open_icon);
          p_open.appendChild(document.createTextNode(" Open Album"));
          const name = arr[i]["name"];
          const image = `${arr[i]["gallery"][0]["img"]}&album=${arr[i]["name"]}&v=${i}`;
          let is_live = null;
          if (arr[i]["live"] == "T") {
            is_live = document.createElement("span_live");
            const btn_l = document.createElement("btn_l");
            const btn_l_icon = document.createElement("icon-i");
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
          const fiv_icon = document.createElement("icon-i");
          fiv_icon.classList.add("bi", "bi-info-circle");
          fiv_icon.addEventListener("click", function (e) {
            e.preventDefault();
            router.setURL({ p: "gallery", album: arr[i]['name']});

            tthis.load(arr[i]["name"], "gallery_name");
           });
          fiv_icon.setAttribute("title", "Go to Album");
          fiv.appendChild(fiv_icon);
          grider_box.appendChild(fiv);
          const sp_clv = document.createElement("sp_clv");
          const sp_clv_icon = document.createElement("icon-i");
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
          varr.where.appendChild(project);
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
          // img.setAttribute("onload", `welcomer.loaded_img(this,${i});`);
          img.onload = function () {
            project.style.transform = "unset";
          };
          if (arr[i]["name"] == "home") {
            img.setAttribute(
              "src",
              `${portfolio.host}/app&id=A03429468246&mnps=gallery&img=${name}&icon=${name}&c=v2`
            );
            img.setAttribute(
              "data-zoom-image",
              `${portfolio.host}/app&id=A03429468246&mnps=gallery&img=${name}&icon=${name}&c=v2`
            );
          } else {
            img.setAttribute("src", arr[i]["gallery"][0]["thumb"]);
            img.setAttribute("data-zoom-image", arr[i]["gallery"][0]["thumb"]);
          }
          img.setAttribute("alt", name);
          grider_box.appendChild(img);
          project.appendChild(grider_box);

          varr.where.appendChild(project);
        } 
      }

      if (varr.type === "gallery") {
        const albumName = varr.name || "default";
        let v = varr.arr;
        varr.where.textContent = "";
      
        for (let i = 0; i < v.length; i++) {
          const item = v[i];

          let isLoaded = false;

          const project = document.createElement("project");
          project.setAttribute("style", "transform:scale(0) !important;");
          project.setAttribute("id-int", `${div_not_i}`);
          project.setAttribute("box-ui", `uit-${varr.type}`);
          project.setAttribute("id-img", `uit-${item.ID}`);

          const grider_box = document.createElement("grider_box");

          const fiv = document.createElement("fiv");
          const title = document.createElement("fiv_title");
          title.textContent = item.title;

          const i_click = document.createElement("icon-i");
          i_click.setAttribute("data-i-type", `${item.type}`);
          i_click.setAttribute("class", "bi bi-fullscreen");
          i_click.setAttribute("title", "Preview image in full size");
          i_click.addEventListener("click", () => {
            const ImagePreview_src = document.createElement("image-preview");
            ImagePreview_src.src(item.img);
            document.body.appendChild(ImagePreview_src);
            router.setURL({ p: "gallery", album: varr.name, id :item.ID});
          });

          fiv.appendChild(i_click);
          grider_box.appendChild(fiv);
          grider_box.appendChild(title);

          const img = document.createElement("img");
          img.setAttribute("loading", "lazy");
          img.setAttribute("ondragstart", "return false;");
          img.setAttribute("alt", item.title);

          img.onerror = () => project.remove();
          const existingBlob = await IndexedDBUtil.getBlob(albumName, item.ID);

          if (!existingBlob) {
            tthis.observer_LazyLoader.init((img) => {
              img.onload = async () => {
                if (isLoaded) {
                  project.removeAttribute("style");
                  return;
                }

                if (!existingBlob) {
                  const blob = await IndexedDBUtil.fetchImageAsBlob(item.thumb);
                  const objectURL = URL.createObjectURL(blob);
                  img.src = objectURL;
                  img.setAttribute("data-zoom-image", objectURL);
                  img.setAttribute("data-real-zoom-if_video", objectURL);
                  img.setAttribute("data-real-zoom-image", objectURL);

                  project.removeAttribute("style");
                  isLoaded = true;
                  await IndexedDBUtil.storeBlob(albumName, item.ID, blob);
                }
              };

              if (existingBlob) {
                const objectURL = URL.createObjectURL(existingBlob);
                img.src = objectURL;
                isLoaded = true;
                img.setAttribute("data-zoom-image", objectURL);
                img.setAttribute("data-real-zoom-if_video", objectURL);
                img.setAttribute("data-real-zoom-image", objectURL);
              } else {
                img.src = item.thumb;
                img.setAttribute("data-zoom-image", item.img);
                img.setAttribute("data-real-zoom-if_video", item.thumb);
                img.setAttribute("data-real-zoom-image", item.img);
              }
            });
            tthis.observer_LazyLoader.observe(img);
          } else {
            img.onload = async () => {
              if (isLoaded) {
                project.removeAttribute("style");
                return;
              }

              if (!existingBlob) {
                const blob = await IndexedDBUtil.fetchImageAsBlob(item.thumb);
                const objectURL = URL.createObjectURL(blob);
                img.src = objectURL;
                img.setAttribute("data-zoom-image", objectURL);
                img.setAttribute("data-real-zoom-if_video", objectURL);
                img.setAttribute("data-real-zoom-image", objectURL);

                project.removeAttribute("style");
                isLoaded = true;
                await IndexedDBUtil.storeBlob(albumName, item.ID, blob);
              }
            };

            if (existingBlob) {
              const objectURL = URL.createObjectURL(existingBlob);
              img.src = objectURL;
              isLoaded = true;
              img.setAttribute("data-zoom-image", objectURL);
              img.setAttribute("data-real-zoom-if_video", objectURL);
              img.setAttribute("data-real-zoom-image", objectURL);
            } else {
              img.src = item.thumb;
              img.setAttribute("data-zoom-image", item.img);
              img.setAttribute("data-real-zoom-if_video", item.thumb);
              img.setAttribute("data-real-zoom-image", item.img);
            }
          }

          grider_box.appendChild(img);

          if (item.href !== "-") {
            const a_project = document.createElement("a");
            a_project.className = "fiv_d";
            a_project.title = `${item?.fid?.text}:${item?.title}`;
            a_project.href = item.href;
            a_project.target = "_blank";
            a_project.setAttribute("data-int", `${div_not_i}`);

            const a_project_i = document.createElement("icon-i");
            a_project_i.className = `${item?.fid?.icon}`;
            const a_project_i_text = document.createTextNode(
              ` ${item?.fid?.text}`
            );

            a_project.appendChild(a_project_i);
            a_project.appendChild(a_project_i_text);
            grider_box.appendChild(a_project);
          }

          project.appendChild(grider_box);
          varr.where.appendChild(project);
          div_not_i++;
        }
      }

      varr.where.removeAttribute("style");
      varr.where.style.setProperty("top", "60px", "important");
      varr.where.style.setProperty("opacity", "1", "important");
      varr?.callback({ l: arr.length, r: arr });
 
    }

    removeDuplicateIdElements(parentElement) {
      if (!parentElement || !(parentElement instanceof Element)) {
        console.error("Neispravan parentElement");
        return;
      }
    
      const seenIds = new Set();
      const elementsWithId = parentElement.querySelectorAll('[id]');
    
      elementsWithId.forEach(el => {
        const id = el.id;
        if (seenIds.has(id)) {
          if (el.tagName.toLowerCase() === 'project') {
            el.remove(); 
          }
        } else {
          seenIds.add(id);
        }
      });
    }
    remove_duplicates(arr) {
      const uniqueTags = [...new Set(arr)];

      return uniqueTags;
      var obj = {};
      var ret_arr = [];
      for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
      }
      for (var key in obj) {
        ret_arr.push(key);
      }
      return ret_arr;
    }

    blogloader_img(id = "") {
      var arr = portfolio.data.blog;
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

    blogljoad_posts_category_cbc(tt_category_name = "") {
      var div_not_i = 0;
      if (tt_category_name == "All" || tt_category_name == "all") {
        div_not_i = portfolio.data.blog.length;
      } else {
        for (var ii = 0; ii < portfolio.data.blog.length; ii++) {
          var v = portfolio.data.blog[ii];
          for (var i = 0; i < v?.category?.length; i++) {
            if (tt_category_name == v.category[i]) {
              div_not_i++;
            }
          }
        }
      }
      return div_not_i;
    }

    category_tempator(
      d = { me: null, where: "", data: [], name: "", nest: false }
    ) {
      const br_ta = this.blog_br_ta;
      this.blog_br_ta.classList.add("active");

      // d.data.forEach();

      if (d.nest) {
        br_ta.classList.add("sub_cat");
        br_ta.style.opacity = "0";
      }

      while (this.blog_br_ta.firstChild) {
        this.blog_br_ta.removeChild(this.blog_br_ta.firstChild);
      }

      const unique = d.data,
        tthis = this;

      const ta_all = document.createElement("ta_f");
      ta_all.setAttribute("data-title", `Click "All" to open all categories`);
      ta_all.setAttribute("data-c", d.data.length);
      ta_all.className = "active";
      ta_all.setAttribute("data-category", "All");
      ta_all.textContent = "All ";
      const span_count = document.createElement("span");
      span_count.textContent = this.blogljoad_posts_category_cbc
        ? this.blogljoad_posts_category_cbc("All")
        : "";
      ta_all.appendChild(span_count);

      ta_all.onclick = () => {
        this.blog_br_ta
          .querySelectorAll("ta_f")
          .forEach((el) => el.classList.remove("active"));
        this.box_creator("All");
        if (d.nest) {
          const url = `${window.location.origin}/?p=blog&c=${d.me.getAttribute(
            "data-scn"
          )}`;
          ///  history.pushState({ something:true}, "",url);
          const scn = d?.me?.getAttribute?.("data-scn");

          /*
      router.go(
        scn ? { p: "blog", c: scn } : { p: "blog" }
      );*/
        } else {
          const url = `${window.location.origin}/?p=blog`;
          // history.pushState({ something:true}, "",url);
        }
      };

      // if (!d.nest)
      this.blog_br_ta.appendChild(ta_all);

      d.data.forEach((re) => {
        const ta_item = document.createElement("ta_f");
        ta_item.setAttribute("data-c", d.data.length);
        ta_item.setAttribute("data-category", re);
        ta_item.setAttribute(
          "data-title",
          `Click "${
            this.capitalize_str ? this.capitalize_str(re) : re
          }" to open category`
        );

        const addIcon = document.createElement("icon-i");

        switch (re.toLowerCase()) {
          case "telegram":
            addIcon.className = "bi bi-telegram";
            break;
          case "deviantart":
            addIcon.className = "fab fa-deviantart";
            break;
          case "video":
            addIcon.className = "bi bi-film";
            break;
          case "astronomy":
            addIcon.className = "fas fa-space-shuttle";
            break;
          default:
        }

        const span = document.createElement("span");
        span.textContent = this.blogljoad_posts_category_cbc
          ? this.blogljoad_posts_category_cbc(re)
          : "";

        ta_item.appendChild(addIcon);
        ta_item.appendChild(document.createTextNode(`${re}`));
        ta_item.appendChild(span);

        //  ta_item.innerHTML = `${iconHTML}${re}<span>${this.blogljoad_posts_category_cbc ? this.blogljoad_posts_category_cbc(re) : ""}</span>`;
        const thiss = this;
        function kat_mns() {
          const frm = document.createElement("div-solarsystem");
          if (re == "astronomy") {
            if (
              !tthis.grider_viewer.querySelectorAll("div-solarsystem").length >
              0
            ) {
              frm.style.setProperty("height", "100%", "important");
              frm.style.setProperty("width", "100%", "important");
              frm.style.setProperty("position", "absolute", "important");
              frm.style.setProperty("border", "absolute", "important");
              tthis.grider_viewer.appendChild(frm);
            }
          } else {
            frm.remove();
          }

          br_ta
            .querySelectorAll("ta_f")
            .forEach((el) => el.classList.remove("active"));
          ta_item.classList.add("active");

          thiss.box_creator(re, false);

          const lower = re.toLowerCase();
          if (lower !== "all") {
            if (d.nest) {
              const url = `${
                window.location.origin
              }/?p=blog&c=${d.me.getAttribute("data-scn")}&sc=${re}`;
              /* history.pushState({ something:true}, "",url); */
              router.setURL({
                p: "blog",
                c: d.me.getAttribute("data-scn"),
                sc: re,
              });
            } else {
              const url = `${window.location.origin}/?p=blog&c=${re}`;
              /* history.pushState({ something:true}, "",url); */
              router.setURL({
                p: "blog",
                c: re,
              });
              document.title = `Marko Nikolić > Blog > ${re}`;
            }

            if (lower === "astronomy") {
              document.body.classList.add("active");
            } else {
              document.body.classList.remove("active");
            }

            document.body.setAttribute("data-category-name", re);
            if (thiss.titleC) thiss.titleC(`Blog > ${re} - Marko Nikolić`);
          }
        }

        ta_item.onclick = (e) => {
          e.preventDefault();
          kat_mns();
        };

        //  .br_ta.appendChild(ta_item);
        this.blog_br_ta.appendChild(ta_item);
      });

      // setTimeout(() => .br_ta.removeAttribute("style"), 100);
    }

    img_load(t) {
      t.classList.add("active");
      t.removeAttribute("style");
      t.removeAttribute("onload");
    }

    box_creator(tt_category_name = "All", cat = false, type = "blog") {
      this.grider_viewer.querySelectorAll("project").forEach((e) => {
        e.remove();
      });
      const tthis = this;
      var arr = this.data.blog,
        div_not_i = 0,
        arrayr = [],
        tijemp = [],
        fthis = this;

      if (type == "projects") {
        arr = portfolio.data.projects;
      }

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
        project.setAttribute(
          "data-category",
          window.btoa(v?.category?.join(",") || "")
        );

        // project.setAttribute("data-category", window.btoa(v?.category));
        project.setAttribute("id-int", div_not_i);
        project.setAttribute("title", v.title);
        project.style.transform = "scale(0);";
        project.style.opacity = 0;

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
          if (type == "projects") {
            window.top.location.href = v.href;
            const a = document.createElement("a");
            a.href = v.href;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.click();
          } else {
            router.go({ p: "blog", id: v.id }, { openedFrom: "blogpage" });
          }
        };
        const i_link = document.createElement("icon-i");
        i_link.className = "bi bi-link";
        p_open.appendChild(i_link);
        if (type == "projects") {
          p_open.appendChild(document.createTextNode(" Open Link"));
        } else {
          p_open.appendChild(document.createTextNode(" Open post"));
        }
        try {
          if (v.href.trim() === "") {
          } else {
            grider_box.appendChild(p_open);
          }
        } catch (aer) {
          grider_box.appendChild(p_open);
        }
        // === p_image button (ako je image) ===
        if (fthis.isimagec(v?.category, "image")) {
          const p_image = document.createElement("p_open");
          p_image.className = "open_img";
          p_image.setAttribute(
            "data-title",
            "Click for view image in full size"
          );
          p_image.onclick = () => {
            const ImagePreview_src = document.createElement("image-preview");
            ImagePreview_src.src(v.thumbail);
            document.body.appendChild(ImagePreview_src);
          }
          const i_img = document.createElement("icon-i");
          i_img.className = "bi bi-image-fill";
          p_image.appendChild(i_img);
          p_image.appendChild(document.createTextNode(" Open image"));
          grider_box.appendChild(p_image);
        }

        // === info ikonica ===
        const fiv = document.createElement("fiv");
        const i_info = document.createElement("icon-i");
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
        loader_img.src =  tthis.loader_svg;
        if (v.type === "text") loader_img.style.display = "none";
     //   grider_box.appendChild(loader_img);

        // === Badge ikone ===
        const bagdes = [
          {
            name: "text",
            data: "bi bi-file-text-fill",
            is_me: ["p", "h1", "h2", "h3", "h4", "h5", "span", "tspan"],
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

        const i_list = document.createElement("i_list");
        if (v?.page) {
          try {
            bagdes.forEach((badge) => {
              const found = badge.is_me.some((tag) =>
                v.page.includes(`<${tag}`)
              );
              if (found) {
                const icon = document.createElement("icon-i");
                icon.className = badge.data;
                i_list.appendChild(icon);
              }
            });
          } catch (Ex) {}
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
          project.style.transform = "none";
        } else {
          const img = document.createElement("img");
          img.loading = "lazy";
          img.setAttribute("ondragstart", "return false;");
          img.setAttribute("style","opacity: 0");
          img.onload = (e) => {
            project.classList.add("active");
            project.removeAttribute("style");
            project.style.transform = "none";
            img.removeAttribute("style");
          };
          if (type == "projects") {
            img.src = v.img?.includes("data:") ? v.img : `${v.img}&thumb=true`;
          } else {
            img.src = v.thumbail?.includes("data:")
              ? v.thumbail
              : `${v.thumbail}&thumb=true`;
          }
          img.setAttribute("data-zoom-image", img.src);
          img.alt = v.title;
          grider_box.appendChild(i_list);
          grider_box.appendChild(img);
        }

        project.appendChild(grider_box);
        this.grider_viewer.append(project);

        if (Array.isArray(v?.category)) {
          for (var i = 0; i < v?.category.length; i++) {
            tijemp.push(v.category[i]);
          }
        }

        div_not_i++;
      });
      tijemp.forEach(function (x) {
        tijemp[x] = (tijemp[x] || 0) + 1;
      });

      this.category_tijemp = tijemp;

      this.div_header.classList.add("ld_completeld_complete2");
      this.#header({
        title: "Marko Nikolić > Blog",
        searchPlaceholder: "Search ...",
        logo: "/svg_logo_backscr_img.svg",
        buttonsRight: [
          {
            icon: "search",
            onclick: () => {
              const p_search = document.createElement("p-search");
              this.wrapper.appendChild(p_search);
            },
          },

          {
            icon: "bi bi-share",
            onclick: () => {
              const Uri = this.div_header.getAttribute("data-url"),
                title = this.div_header_span.textContent;

              if (navigator.share) {
                navigator
                  .share({
                    title: title,
                    text: `Shared from - ${window.location.origin}`,
                    url: `${Uri}`,
                  })
                  .then(() => {})
                  .catch((error) => {});
              }
            },
          },
          {
            icon: "bi bi-x-lg  ",
            onclick: () => {
              router.setURL({});
              document.title = "Marko Nikolić";
              tthis.remove();
            },
          },
        ],
      });
    }

    decodeEntities(encodedString) {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = encodedString;
      return textarea.value;
    }
    exit() {
      this.remove();
    }
    #header(
      config = {
        title: "Blog",
        searchPlaceholder: "Search ...",
        logo: "/svg_logo_backscr_img.svg",
        buttonsRight: [
          {
            icon: "search",
            onclick: () => {
              const p_search = document.createElement("p-search");
              this.wrapper.appendChild(p_search);
            },
          },

          {
            icon: "bi bi-share",
            onclick: () => {
              const Uri = this.div_header.getAttribute("data-url"),
                title = this.div_header_span.textContent;

              if (navigator.share) {
                navigator
                  .share({
                    title: title,
                    text: `Shared from - ${window.location.origin}`,
                    url: `${Uri}`,
                  })
                  .then(() => {})
                  .catch((error) => {});
              }
            },
          },
          {
            icon: "bi bi-x-lg close_btnf",
            onclick: () => {
              router.setURL({});
              document.title = "Marko Nikolić";
              this.remove();
            },
          },
        ],
      }
    ) {
      document.title = config.title;

      this.div_header.className =
        "ld_completeld_complete ld_completeld_complete2";
      this.div_header.setAttribute(
        "data-url",
        "https://portfolio2.eronelit.com/?p=blog&id=1141736809"
      );
      this.div_header.querySelectorAll("*").forEach((e) => e.remove());

      // Logo
      const logo = document.createElement("img");
      logo.src = config.logo;
      logo.id = "logo_backscr_img";
      logo.alt = "Logo";
      this.div_header.appendChild(logo);

      // Reload dugme
      const reload = document.createElement("icon-i");
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

      const closeI = document.createElement("icon-i");
      closeI.className = "bi bi-x-lg";
      closeI.setAttribute("data-hmm", "closeMe");
      closeI.setAttribute("data-onclick", "welcomer.search_Kompjiler(this);");
      btns_i.appendChild(closeI);
      this.div_header.appendChild(btns_i);

      // Dugmad desno
      const btns_r = document.createElement("btns_r");
      config.buttonsRight.forEach((btn) => {
        const i = document.createElement("icon-i");
        i.className = btn.icon;
        if (btn.onclick) {
          // i.setAttribute("data-onclick", btn.onclick);
          if (typeof btn.onclick === "function") {
            i.addEventListener("click", btn.onclick);
          }
        }
        if (btn["data-title"]) i.setAttribute("data-title", btn["data-title"]);
        if (btn.style) i.setAttribute("style", btn.style);
        btns_r.appendChild(i);
      });
      this.div_header.appendChild(btns_r);

      return this.div_header;
    }

    load(id = "", type = "") {
      if (this.bra_div_img.classList.contains("active")) {
        this.bra_div_img.classList.remove("active");
      }
      this.category_tijemp = [];
      const tthis = this;
      let f = {},
        blogData = "";
      this.gallery_back = false;
      this.custom_scroll.style.display = "none";
      this.grider_viewer.style.display = "none";
      /* this.grider_viewer.setAttribute("data-type",type);*/

      if (type == "editor"){
        this.#header({
          title: "Marko Nikolić > Editor (BETA)",
          searchPlaceholder: "Search ...",
          logo: "/svg_logo_backscr_img.svg",
          buttonsRight: [
            {
              icon:"bi bi-arrow-left-short",
              onclick: () => {

              }
            },
            {
              icon:"bi bi-arrow-right-short",
              onclick: () => {
                
              }
            },
            {
              icon: "bi bi-share",
              onclick: () => {
                const Uri = window.location.href,
                  title = this.div_header_span.textContent;

                if (navigator.share) {
                  navigator
                    .share({
                      title: title,
                      text: `Shared from - ${window.location.origin}`,
                      url: `${Uri}`,
                    })
                    .then(() => {})
                    .catch((error) => {});
                }
              },
            },
            {
              icon: "bi bi-x-lg close_btnf",
              onclick: () => { 
                history.pushState({ something:true}, "","/");
                this.remove();
              },
            },
          ],
        });
      
        if(!this.wrapper.querySelector("monaco-editor-app")){
        this.wrapper.appendChild(this.monaco_editor_app);
      }
      }

      if (type == "cv-pdf") {
        this.#header({
          title: "Marko Nikolić > CV",
          searchPlaceholder: "Search ...",
          logo: "/svg_logo_backscr_img.svg",
          buttonsRight: [
            {
              icon: "bi bi-share",
              onclick: () => {
                const Uri = window.location.href,
                  title = this.div_header_span.textContent;

                if (navigator.share) {
                  navigator
                    .share({
                      title: title,
                      text: `Shared from - ${window.location.origin}`,
                      url: `${Uri}`,
                    })
                    .then(() => {})
                    .catch((error) => {});
                }
              },
            },
            {
              icon: "bi bi-x-lg close_btnf",
              onclick: () => {
                history.pushState({ something:true}, "","/");
                this.remove();
              },
            },
          ],
        });
        if (this.wrapper.querySelectorAll(".Viewiframe").length < 1) {
          const iframe = document.createElement("iframe");
          iframe.src = "/?pages=cv-pdf";
          iframe.classList.add("Viewiframe");
          this.wrapper.appendChild(iframe);
          iframe.style.setProperty("margin-top", "49px", "important");
        }
      }

      if (type == "gallery_name_url") {
        this.#header({
          title: "Gallery > " + id,
          searchPlaceholder: "Search ...",
          logo: "/svg_logo_backscr_img.svg",
          buttonsRight: [
            {
              icon: "bi bi-arrow-left-short",
              onclick: () => {
                tthis.load("","gallery");
                router.setURL({
                  p: "gallery"
                });
              },
            },
            {
              icon: "bi bi-share",
              onclick: () => {
                const Uri = this.div_header.getAttribute("data-url"),
                  title = this.div_header_span.textContent;

                if (navigator.share) {
                  navigator
                    .share({
                      title: title,
                      text: `Shared from - ${window.location.origin}`,
                      url: `${Uri}`,
                    })
                    .then(() => {})
                    .catch((error) => {});
                }
              },
            },
          ],
        });
        this.grider_viewer.textContent = "";
        var gallery_name = {
          name: "",
          title: "",
          exist: false,
        };
        portfolio.data.gallery.gallery.forEach(function (res) {
          if (res["name"] == id) {
            gallery_name["name"] = res["gallery"];
            gallery_name["title"] == res["name"];
            gallery_name["exist"] = true;
          }
        });

        this.call_albums({
          where: this.grider_viewer,
          name: id,
          arr: gallery_name["name"],
          callback: () =>  this.removeDuplicateIdElements(this.grider_viewer),
          type: "gallery",
        });
        
        return;
      }
      if (type == "gallery_name") {
        this.#header({
          title: "Gallery > " + id,
          searchPlaceholder: "Search ...",
          logo: "/svg_logo_backscr_img.svg",
          buttonsRight: [
            {
              icon: "bi bi-arrow-left-short",
              onclick: () => {
            
                tthis.load("","gallery");
                router.setURL({
                  p: "gallery"
                });
              },
            },
            {
              icon: "bi bi-share",
              onclick: () => {
                const Uri = this.div_header.getAttribute("data-url"),
                  title = this.div_header_span.textContent;

                if (navigator.share) {
                  navigator
                    .share({
                      title: title,
                      text: `Shared from - ${window.location.origin}`,
                      url: `${Uri}`,
                    })
                    .then(() => {})
                    .catch((error) => {});
                }
              },
            },
          ],
        });
        this.grider_viewer.textContent = "";
        var gallery_name = {
          name: "",
          title: "",
          exist: false,
        };
        portfolio.data.gallery.gallery.forEach(function (res) {
          if (res["name"] == id) {
            gallery_name["name"] = res["gallery"];
            gallery_name["title"] == res["name"];
            gallery_name["exist"] = true;
          }
        });

        this.call_albums({
          where: this.grider_viewer,
          name: id,
          arr: gallery_name["name"],
          callback: () =>  this.removeDuplicateIdElements(this.grider_viewer),
          type: "gallery",
        });
        
        return;
      }

      if (type == "gallery") {
        this.#header({
          title: "Marko Nikolić > Gallery",
          searchPlaceholder: "Search ...",
          logo: "/svg_logo_backscr_img.svg",
          buttonsRight: [
            {
              icon: "bi bi-share",
              onclick: () => {
                const Uri = this.div_header.getAttribute("data-url"),
                  title = this.div_header_span.textContent;

                if (navigator.share) {
                  navigator
                    .share({
                      title: title,
                      text: `Shared from - ${window.location.origin}`,
                      url: `${Uri}`,
                    })
                    .then(() => {})
                    .catch((error) => {});
                }
              },
            },
            {
              icon: "bi bi-x-lg close_btnf",
              onclick: () => {
                router.back();
                this.remove();
              },
            },
          ],
        });

        this.call_albums({
          where: this.grider_viewer,
          name: "",
          arr: portfolio.data.gallery.gallery,
          callback: () =>  this.removeDuplicateIdElements(this.grider_viewer),

          type: "albums",
        });
        this.grider_viewer.style.opacity = 1;
      }
      if (type == "projects") {
        this.grider_viewer.style.display = "block";

        this.grider_viewer.classList.add("gridsH");
        this.grider_viewer.classList.add("grids");
        this.grider_viewer.classList.add("projects");

        this.grider_viewer.removeAttribute("style");
        this.#header({
          title: "Marko Nikolić > Projects",
          searchPlaceholder: "Search ...",
          logo: "/svg_logo_backscr_img.svg",
          buttonsRight: [
            {
              icon: "bi bi-share",
              onclick: () => {
                const Uri = this.div_header.getAttribute("data-url"),
                  title = this.div_header_span.textContent;

                if (navigator.share) {
                  navigator
                    .share({
                      title: title,
                      text: `Shared from - ${window.location.origin}`,
                      url: `${Uri}`,
                    })
                    .then(() => {})
                    .catch((error) => {});
                }
              },
            },
            {
              icon: "bi bi-x-lg close_btnf",
              onclick: () => {
                history.pushState({ something:true}, "","/");
                this.remove();
              },
            },
          ],
        });

        this.box_creator("all", true, "projects");

        this.grider_viewer.style.setProperty("margin-top", "60px", "important");

        this.wrapper.querySelectorAll("br_ta.sub_cat").forEach((element) => {
          element.remove();
        });
        this.grider_viewer.style.opacity = 1;
      }
      if (type == "blog_category") {
        this.grider_viewer.style.display = "block";
        this.blog_br_ta.style.display = "inline-flex";
        this.grider_viewer.classList.add("gridsH");
        this.grider_viewer.classList.add("grids");
        document.title = "Marko Nikolić > Blog";
        this.grider_viewer.removeAttribute("style");

        this.box_creator(id, true);
        const fsvt = this.remove_duplicates(this.category_tijemp);

        this.category_tempator({
          me: "all",
          where: this.wrapper,
          data: fsvt,
          name: "all",
          nest: false,
        });

        const url = `${window.location.origin}/?p=blog`;
        //  history.pushState({ something:true}, "",url);

        this.blog_br_ta.classList.remove("active");

        this.grider_viewer.style.setProperty(
          "margin-top",
          "110px",
          "important"
        );

        this.wrapper.querySelectorAll("br_ta.sub_cat").forEach((element) => {
          element.remove();
        });
        this.grider_viewer.style.opacity = 1;

        const currentParams = new URLSearchParams(window.location.search);
        if (currentParams.get("c")) {
          this.blog_br_ta
            .querySelector(`ta_f[data-category='${currentParams.get("c")}']`)
            .click();
        }
        return;
      }

      if (type == "blog_id") {
        this.custom_scroll.style.display = "block";
        blogData = portfolio?.data?.blog || [];
        blogData.forEach((res) => {
          if (res.id == id) f = res;
        });

        const url = `${window.location.origin}/?p=blog&id=${id}`;
        //  history.pushState({ something:true}, "",url);
        router.go({
          p: "blog",
          id: id,
        });

        const res = this.decodeEntities(f.page || "");
        this.gallery_temp = f.gallery || {};

        this.#header({
          title: f.title,
          searchPlaceholder: "Search ...",
          logo: "/svg_logo_backscr_img.svg",
          buttonsRight: [
            {
              icon: "search",
              onclick: () => {
                const p_search = document.createElement("p-search");
                this.wrapper.appendChild(p_search);
              },
            },
            {
              icon: "bi bi-share",
              onclick: () => {
                const Uri = this.div_header.getAttribute("data-url"),
                  title = this.div_header_span.textContent;

                if (navigator.share) {
                  navigator
                    .share({
                      title: title,
                      text: `Shared from - ${window.location.origin}`,
                      url: `${Uri}`,
                    })
                    .then(() => {})
                    .catch((error) => {});
                }
              },
            },
            /*
        {
          icon: "bi bi-book-half",
          onclick: () => {}
        },*/
            {
              icon: "bi bi-x-lg close_btnf",
              onclick: () => {
                const currentParams = new URLSearchParams(
                  window.location.search
                );
                if (currentParams.get("p")) {
                  if (currentParams.get("p") == "Blog") {
                    document.title = "Marko Nikolić > Blog";
                    /* history.pushState({ something:true}, "",url); */
                    if (currentParams.get("c")) {
                      router.setURL({
                        p: "blog",
                        c: currentParams.get("c"),
                      });
                    } else {
                      router.setURL({
                        p: "blog",
                      });
                    }
                  }
                } else {
                  document.title = "Marko Nikolić";
                }
                tthis.exit();
              },
            },
          ],
        });

        if (typeof this.p_container.set === "function") {
          this.p_container.set(`${res}`, f);
        } else {
        }

        this.custom_scroll.style.setProperty("margin-top", "51px", "important");

        this.bra_div_img.src = f.thumbail;
        this.bra_div_img.classList.add("active");
        this.grider_viewer.style.opacity = 1;

        return;
      }
    }

    history(url = "") {
      const ar = {},
        v = "";

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
      const headerElement = this.#header();
      this.wrapper.appendChild(headerElement);
    }

    disconnectedCallback() {
      const btns_r = this.div_header?.querySelector("btns_r");
      if (btns_r) {
        btns_r.querySelectorAll("i").forEach((i) => {
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
        this.wrapper
          .querySelectorAll("p-search, page-c, image-preview")
          .forEach((el) => el.remove());
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

  class CanvasVElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      this._videoElement = document.createElement("video");

      this._canvas = document.createElement("canvas");
      this._ctx = this._canvas.getContext("2d", { alpha: false });

      this._videoElement.crossOrigin = "anonymous";
      this._videoElement.muted = true;
      this._videoElement.loop = true;

      this._currentObjectFit = "contain";
      this._currentRotate = 0;
      this._currentScale = 1;
      this._currentOpacity = 1;

      this._targetRotate = 0;
      this._targetScale = 1;
      this._targetOpacity = 1;
      this._targetObjectFit = "contain";

      this._animationSpeed = 0.08;
      this._animationThreshold = 0.001;

      this._animationFrameId = null;

      this._frameSkipFactor = 1;
      this._performanceCheckInterval = 60;
      this._frameCount = 0;

      this.shadowRoot.appendChild(this._canvas);

      const style = document.createElement("style");
      style.textContent = `
          canvas {
              display: block;
              width: 100%;
              height: 100%;
              background-color: #000;
              border-radius: inherit;
          }
      `;
      this.shadowRoot.appendChild(style);
    }

    connectedCallback() {
      this._videoElement.addEventListener(
        "loadedmetadata",
        this._handleLoadedMetadata.bind(this)
      );
      document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange.bind(this)
      );

      this._updateCanvasDimensions();

      this._resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.target === this) {
            this._updateCanvasDimensions();
          }
        }
      });
      this._resizeObserver.observe(this);

      if (this._animationFrameId === null) {
        this._drawFrame();
      }
    }

    disconnectedCallback() {
      this._videoElement.removeEventListener(
        "loadedmetadata",
        this._handleLoadedMetadata.bind(this)
      );
      document.removeEventListener(
        "visibilitychange",
        this._handleVisibilityChange.bind(this)
      );
      if (this._animationFrameId) {
        cancelAnimationFrame(this._animationFrameId);
        this._animationFrameId = null;
      }
      if (this._resizeObserver) {
        this._resizeObserver.disconnect();
      }
    }

    _updateCanvasDimensions() {
      const rect = this._canvas.getBoundingClientRect();
      const newWidth = Math.floor(rect.width);
      const newHeight = Math.floor(rect.height);
    
       if (this._canvas.width === newWidth && this._canvas.height === newHeight) {
        return;
      }
    
      this._canvas.width = newWidth;
      this._canvas.height = newHeight;
    }

    _handleLoadedMetadata() {
      this._videoElement.play().catch((error) => {
        console.warn("Video autoplay failed on loadedmetadata:", error);
      });
    }

    _handleVisibilityChange() {
      if (document.hidden) {
        this._videoElement.pause();
      } else {
        this._videoElement.play().catch((error) => {
          console.warn("Video resume failed on visibilitychange:", error);
        });
      }
    }

    _drawFrame() {
      this._frameCount++;

      if (this._frameCount % this._performanceCheckInterval === 0) {
        if (this._videoElement.readyState < 3) {
          this._frameSkipFactor = Math.min(this._frameSkipFactor + 1, 4);
        } else if (this._videoElement.playbackRate < 1) {
          this._frameSkipFactor = Math.min(this._frameSkipFactor + 1, 4);
        } else if (
          this._frameSkipFactor > 1 &&
          this._videoElement.readyState >= 4
        ) {
          this._frameSkipFactor = Math.max(this._frameSkipFactor - 1, 1);
        }
      }

      if (
        this._frameSkipFactor > 1 &&
        this._frameCount % this._frameSkipFactor !== 0
      ) {
        this._animationFrameId = requestAnimationFrame(
          this._drawFrame.bind(this)
        );
        return;
      }

      const videoReadyAndPlaying =
        !this._videoElement.paused &&
        !this._videoElement.ended &&
        this._videoElement.readyState >= 2;

      let animatingTransforms = false;

      if (
        Math.abs(this._targetRotate - this._currentRotate) >
        this._animationThreshold
      ) {
        this._currentRotate +=
          (this._targetRotate - this._currentRotate) * this._animationSpeed;
        animatingTransforms = true;
      } else {
        this._currentRotate = this._targetRotate;
      }

      if (
        Math.abs(this._targetScale - this._currentScale) >
        this._animationThreshold
      ) {
        this._currentScale +=
          (this._targetScale - this._currentScale) * this._animationSpeed;
        animatingTransforms = true;
      } else {
        this._currentScale = this._targetScale;
      }

      if (
        Math.abs(this._targetOpacity - this._currentOpacity) >
        this._animationThreshold
      ) {
        this._currentOpacity +=
          (this._targetOpacity - this._currentOpacity) * this._animationSpeed;
        animatingTransforms = true;
      } else {
        this._currentOpacity = this._targetOpacity;
      }

      if (
        (videoReadyAndPlaying &&
          this._videoElement.videoWidth > 0 &&
          this._videoElement.videoHeight > 0) ||
        animatingTransforms
      ) {
        const videoWidth = this._videoElement.videoWidth;
        const videoHeight = this._videoElement.videoHeight;
        const canvasWidth = this._canvas.width;
        const canvasHeight = this._canvas.height;

        this._ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        this._ctx.save();
        this._ctx.globalAlpha = this._currentOpacity;
        this._ctx.translate(canvasWidth / 2, canvasHeight / 2);
        this._ctx.rotate((this._currentRotate * Math.PI) / 180);
        this._ctx.scale(this._currentScale, this._currentScale);
        this._ctx.translate(-canvasWidth / 2, -canvasHeight / 2);

        let sx = 0,
          sy = 0,
          sWidth = videoWidth,
          sHeight = videoHeight;
        let dx = 0,
          dy = 0,
          dWidth = canvasWidth,
          dHeight = canvasHeight;

        const videoAspectRatio = videoWidth / videoHeight;
        const canvasAspectRatio = canvasWidth / canvasHeight;

        switch (this._targetObjectFit) {
          case "cover":
            if (videoAspectRatio > canvasAspectRatio) {
              sHeight = videoWidth / canvasAspectRatio;
              sy = (videoHeight - sHeight) / 2;
            } else {
              sWidth = videoHeight * canvasAspectRatio;
              sx = (videoWidth - sWidth) / 2;
            }
            break;

          case "contain":
            if (videoAspectRatio > canvasAspectRatio) {
              dWidth = canvasWidth;
              dHeight = canvasWidth / videoAspectRatio;
              dy = (canvasHeight - dHeight) / 2;
            } else {
              dHeight = canvasHeight;
              dWidth = canvasHeight * videoAspectRatio;
              dx = (canvasWidth - dWidth) / 2;
            }
            break;

          case "fill":
            break;

          case "scale-down":
            if (videoAspectRatio > canvasAspectRatio) {
              dWidth = canvasWidth;
              dHeight = canvasWidth / videoAspectRatio;
              dy = (canvasHeight - dHeight) / 2;
            } else {
              dHeight = canvasHeight;
              dWidth = canvasHeight * videoAspectRatio;
              dx = (canvasWidth - dWidth) / 2;
            }
            if (dWidth > videoWidth || dHeight > videoHeight) {
              dWidth = videoWidth;
              dHeight = videoHeight;
              dx = (canvasWidth - dWidth) / 2;
              dy = (canvasHeight - dHeight) / 2;
            }
            break;

          case "none":
            dWidth = videoWidth;
            dHeight = videoHeight;
            dx = (canvasWidth - dWidth) / 2;
            dy = (canvasHeight - dHeight) / 2;
            break;

          default:
            if (videoAspectRatio > canvasAspectRatio) {
              dWidth = canvasWidth;
              dHeight = canvasWidth / videoAspectRatio;
              dy = (canvasHeight - dHeight) / 2;
            } else {
              dHeight = canvasHeight;
              dWidth = canvasHeight * videoAspectRatio;
              dx = (canvasWidth - dWidth) / 2;
            }
            break;
        }

        this._ctx.drawImage(
          this._videoElement,
          sx,
          sy,
          sWidth,
          sHeight,
          Math.round(dx),
          Math.round(dy),
          Math.round(dWidth),
          Math.round(dHeight)
        );
        this._ctx.restore();
      }

      this._animationFrameId = requestAnimationFrame(
        this._drawFrame.bind(this)
      );
    }

    setSrc(src) {
      this._videoElement.src = src;
      this._videoElement.load();
      this._videoElement.play().catch((error) => {
        console.warn("Autoplay failed on setSrc:", error);
      });
    }

    setObjectFit(fit) {
      if (["contain", "cover", "fill", "scale-down", "none"].includes(fit)) {
        this._targetObjectFit = fit;
        this._currentObjectFit = fit;
      } else {
        console.warn(
          `Nevažeća vrednost za object-fit: ${fit}. Koristi se 'contain' kao podrazumevano.`
        );
        this._targetObjectFit = "contain";
        this._currentObjectFit = "contain";
      }
    }

    setTransform({
      rotate = this._targetRotate,
      scale = this._targetScale,
      opacity = this._targetOpacity,
    }) {
      this._targetRotate = rotate;
      this._targetScale = scale;
      this._targetOpacity = opacity;
    }
  }

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
          padding-right: 5px;
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
            -webkit-transition: opacity 0.5s ease;
            -o-transition: opacity 0.5s ease;
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

    
        @media (max-width: 480px) {
          .wrapper {
            padding-right: 0px; 
          }
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

    gear(type, callback) {
      if (!this._handlers) this._handlers = {};
      if (!this._handlers[type]) this._handlers[type] = [];

      this._handlers[type].push(callback);
    }

    append(child) {
      if (child instanceof Node) {
        this.appendChild(child);
      }
    }

    clearLightDOM() {
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
    }

    connectedCallback() {
      const wrapper = this.shadowRoot.querySelector(".wrapper");
      const thumb = this.shadowRoot.querySelector(".thumb");

      const updateThumb = () => {
        const contentHeight = wrapper.scrollHeight;
        const containerHeight = wrapper.clientHeight;
        const scrollTop = wrapper.scrollTop;
        const scrollLeft = wrapper.scrollLeft;

        const thumbHeight = Math.max(
          (containerHeight * containerHeight) / contentHeight,
          30
        );
        const thumbTop = (scrollTop * containerHeight) / contentHeight;

        thumb.style.height = thumbHeight + "px";
        thumb.style.top = thumbTop + "px";

        if (this._handlers && this._handlers["scroll"]) {
          this._handlers["scroll"].forEach((fn) => fn(scrollTop, scrollLeft));
        }
      };

      wrapper.addEventListener("scroll", updateThumb);
      window.addEventListener("resize", updateThumb);
      updateThumb();

      // === THUMB DRAG
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

      // === TOUCHPAD SIMULACIJA + INERCIJA
      let isTouchpadScrolling = false;
      let startY_touchpad = 0;
      let startScrollTop_touchpad = 0;

      let velocity = 0;
      let lastY = 0;
      let lastTime = 0;
      let inertiaFrame = null;

      const stopInertia = () => {
        if (inertiaFrame) {
          cancelAnimationFrame(inertiaFrame);
          inertiaFrame = null;
        }
      };

      const applyInertia = () => {
        if (Math.abs(velocity) < 0.1) {
          velocity = 0;
          return;
        }
        wrapper.scrollTop -= velocity;
        velocity *= 0.95;
        inertiaFrame = requestAnimationFrame(applyInertia);
      };

      wrapper.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        isTouchpadScrolling = true;
        startY_touchpad = e.clientY;
        startScrollTop_touchpad = wrapper.scrollTop;
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
        stopInertia();
        lastY = e.clientY;
        lastTime = Date.now();
      });

      document.addEventListener("mouseup", () => {
        isTouchpadScrolling = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";

        const now = Date.now();
        const deltaTime = now - lastTime;
        if (deltaTime < 300) {
          // momentum ako je brzo pomereno
          inertiaFrame = requestAnimationFrame(applyInertia);
        }
      });

      document.addEventListener("mousemove", (e) => {
        if (!isTouchpadScrolling) return;
        const now = Date.now();
        const dy = e.clientY - lastY;
        const dt = now - lastTime;
        if (dt > 0) {
          velocity = (dy / dt) * 20; // brzina (skalirano)
        }
        lastY = e.clientY;
        lastTime = now;

        wrapper.scrollTop =
          startScrollTop_touchpad - (e.clientY - startY_touchpad);
      });
    }
  }

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
    },
  };

  window.solarday = function () {
    const startDate = new Date("1998-03-16");
    const currentDate = new Date();
    const diffInMs = currentDate - startDate;
    const daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return daysPassed;
  };
  window.getJSON = function (call = () => {}) {
    return;
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
        portfolio = data;
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
      this.attachShadow({ mode: "open" });
      this.loader_svg = "/loader";
    }

    connectedCallback() {
      const title = this.getAttribute("title") || "";
      const category = this.getAttribute("data-category") || "";
      const idInt = this.getAttribute("id-int");
      const postId = this.getAttribute("data-post-id");
      const thumb = this.getAttribute("data-thumb") || "";
      const zoomImg = this.getAttribute("data-zoom-image") || thumb;
      const type = this.getAttribute("data-type") || "image";
      const description = this.getAttribute("data-description") || "";
      const page = this.getAttribute("data-page") || "";

      // Root container
      const project = document.createElement("project");
      project.setAttribute("data-category", category);
      project.setAttribute("id-int", idInt);
      project.title = title;
      if (this.hasAttribute("onclick")) {
        project.setAttribute("onclick", this.getAttribute("onclick"));
      }

      // grider_box
      const box = document.createElement("grider_box");
      project.appendChild(box);

      // Title
      const titleP = document.createElement("p");
      const spanTitle = document.createElement("span");
      spanTitle.textContent = title;
      titleP.appendChild(spanTitle);
      box.appendChild(titleP);

      // Open post / download button
      const btnOpen = document.createElement("p_open");
      const openTitle =
        type !== "text" ? `Open:/?p=blog&id=${postId}` : `Download:${title}`;
      btnOpen.setAttribute("title", openTitle);
      btnOpen.addEventListener("click", () => welcomer.blogloader(postId));
      btnOpen.innerHTML =
        type !== "text"
          ? '<i class="bi bi-link"></i> Open post'
          : '<i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download)';
      box.appendChild(btnOpen);

      // Open image button
      if (welcomer.isimagec(JSON.parse(atob(category)), "image")) {
        const btnImg = document.createElement("p_open");
        btnImg.classList.add("open_img");
        btnImg.setAttribute("data-title", "Click for view image in full size");
        btnImg.addEventListener("click", () => welcomer.blogloader_img(postId));
        btnImg.innerHTML = '<i class="bi bi-image-fill"></i> Open image';
        box.appendChild(btnImg);
      }

      // Info icon
      const fiv = document.createElement("fiv");
      const info = document.createElement("icon-i");
      info.className = "bi bi-info-circle";
      info.title = "Go to blog post...";
      info.addEventListener("click", () => welcomer.blogloader(postId));
      fiv.appendChild(info);
      box.appendChild(fiv);

      // Loader placeholder
      if (type === "image") {
        const loaderImg = document.createElement("img");
        loaderImg.src = this.loader_svg;
        loaderImg.className = "loader_post";
        loaderImg.height = 50;
        loaderImg.width = 50;
        box.appendChild(loaderImg);
      }

      // Content: text or image
      if (type === "text") {
        const txt = document.createElement("div_txt");
        const spanDesc = document.createElement("span");
        spanDesc.textContent = description;
        txt.appendChild(spanDesc);
        box.appendChild(txt);
      } else {
        const list = document.createElement("i_list");
        // Badges
        const badgeCfg = [
          { tag: "p", icon: "bi bi-file-text-fill" },
          { tag: "img", icon: "bi bi-file-earmark-image-fill" },
          { tag: "video", icon: "bi bi-file-earmark-play-fill" },
          { tag: "iframe", icon: "bi bi-file-earmark-richtext-fill" },
        ];
        badgeCfg.forEach((cfg) => {
          if (page.includes(`<${cfg.tag}`)) {
            const i = document.createElement("icon-i");
            i.className = cfg.icon;
            list.appendChild(i);
          }
        });
        const img = document.createElement("img");
        img.loading = "lazy";
        if (!welcomer.isMobile()) img.classList.add("is_touch");
        img.alt = title;
        img.src = thumb;
        img.setAttribute("data-zoom-image", zoomImg);
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
        select_option: "Select Option",
        ajax_error_json: "Invalid JSON in 'data' attribute:",
      };
      this._selectedText = this._ui_lang["select_option"];
      this._customTemplate = null;
      this.selected = "";
      this._toggleDropdown = this._toggleDropdown.bind(this);
      this._documentClickHandler = this._documentClickHandler.bind(this);
      this._optionClickHandler = this._optionClickHandler.bind(this);
      this._searchHandler = this._searchHandler.bind(this);
    }
    static get observedAttributes() {
      return ["data", "data-ajax"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "data") {
        try {
          this._data = JSON.parse(newValue);
          this.render();
        } catch (error) {
          console.error("Invalid JSON in 'data' attribute:", error);
          this._data = null;
        }
      } else if (name === "data-ajax") {
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
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network error: " + response.status);
          }
          return response.json();
        })
        .then((json) => {
          this._data = json;
          this.render();
          this._addEventListeners();
        })
        .catch((error) => {
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
    selectByID(id = "") {}
    render() {
      this._removeEventListeners();
      if (this._data && this._data.selected) {
        let selectedValue = this._data.selected;
        let found = false;
        if (this._data.groups) {
          this._data.groups.forEach((group) => {
            if (group.options) {
              group.options.forEach((option) => {
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
        this._data.groups.forEach((group) => {
          const groupDiv = document.createElement("div");
          groupDiv.className = "group";
          if (group.label) {
            const groupLabel = document.createElement("div");
            groupLabel.className = "group-label";
            groupLabel.textContent = group.label;
            groupDiv.appendChild(groupLabel);
          }
          if (group.options && group.options.length > 0) {
            group.options.forEach((option) => {
              const optionDiv = document.createElement("div");
              optionDiv.className = "option";
              if (
                this._data &&
                this._data.selected &&
                option.value === this._data.selected
              ) {
                optionDiv.classList.add("selected");
              }
              optionDiv.setAttribute("data-value", option.value);
              if (option.type === "card") {
                optionDiv.classList.add("card");
                const img = document.createElement("img");
                img.onerror = function () {
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
        this._optionsEl.style.display =
          this._optionsEl.style.display === "block" ? "none" : "block";
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

      this._data.groups.forEach((group) => {
        group.options.forEach((option) => {
          if (option.value === selectedValue) {
            selectedOption = option;
          }
        });
      });

      if (!selectedOption) return;

      this._headerEl.innerHTML = "";

      if (selectedOption.type === "card") {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("option", "card");

        const img = document.createElement("img");
        img.onerror = () => (img.src = "/logo.svg");
        img.src = selectedOption.card.img;
        img.loading = "lazy";
        img.alt = selectedOption.text;

        const textDiv = document.createElement("div");
        const h5 = document.createElement("h5");
        h5.textContent = selectedOption.card.title;

        const p = document.createElement("p");
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
      const optionElem = e.target.closest(".option");
      if (optionElem) {
        const selectedValue = optionElem.getAttribute("data-value");
        this._data.selected = selectedValue;
        this._selectedText = optionElem.textContent;
        this.selected = selectedValue;
        this._updateHeaderContent(selectedValue);

        if (this._optionsEl) {
          this._optionsEl.style.display = "none";
        }

        const allOptions = this.shadowRoot.querySelectorAll(".option");
        allOptions.forEach((opt) => opt.classList.remove("selected"));
        optionElem.classList.add("selected");

        this.dispatchEvent(
          new CustomEvent("optionSelected", {
            detail: { value: selectedValue, text: this._selectedText },
            bubbles: true,
            composed: true,
          })
        );
      }
    }

    _searchHandler(e) {
      const query = e.target.value.toLowerCase();
      const groups = this.shadowRoot.querySelectorAll(
        ".dropdown-options .group"
      );
      groups.forEach((group) => {
        const options = group.querySelectorAll(".option");
        let anyVisible = false;
        options.forEach((option) => {
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

      this.dispatchEvent(
        new CustomEvent("change", { detail: { value, text } })
      );
    }
  }

  class CustomSearch extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      
      this.results_i_list = document.createElement("i_list");
      this.render();
      this.query = "";
      this.Mydata = [];
      var dataf = [];
      var pr_i = 0;
      portfolio.data.projects.forEach((element) => {
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
      portfolio.data.blog.forEach((element) => {
        dataf.push({
          type: "image",
          url: element["source"],
          id: element["id"],
          page: element['page'],
          cat: "blog",
          title: element["title"],
          thumb: element["thumbail"],
        });
      });
      this.Mydata = dataf; 
      
    }
    disconnectedCallback() {
      this.Mydata = [];
      this.query = ""; 
      var dataf = [];
      var pr_i = 0;
    }
    render() {
      const style = document.createElement("style");
      style.textContent = ` 
 
    ${CDN_URL_BOOSTRAP_ICONS_STRCSS}
 
 
 div.container {
 display:-ms-grid;
 display:grid;
 }

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


 custom-scroll {
 
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: calc(100% - 74px);
    top: 74px;

 }

 .results {
   display: -ms-grid;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0px;
    top: 0px;
    left: 0px;
    width: 100%;
    padding-top: 0px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    justify-items: stretch;
    height: 100%;
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
     position: unset;
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
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
 }
 .hide{
    -webkit-transform: scale(0);
        -ms-transform: scale(0);
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



 icon-i.btn_close {
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

 i_list {
    position: unset;
    left: 8px;
    bottom: 21px;
    z-index: 1;
    opacity: 1;
    color: white;
    pointer-events: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    margin: 0px 5px;
}


i_list {
      transition: .3s;
}

      `;

      const container = document.createElement("div"),
        div_header = document.createElement("div");
      container.classList.add("container");
      div_header.classList.add("div_header");

      container.appendChild(div_header);
      container.appendChild(this.results_i_list);
      this.btn_clear = document.createElement("icon-i");

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
        option.textContent =
          category.charAt(0).toUpperCase() + category.slice(1);
        filterSelect.appendChild(option);
      });
      filterContainer.appendChild(filterLabel);
      filterContainer.appendChild(filterSelect);

      const resultsContainer = document.createElement("custom-scroll"),    
      results_box = document.createElement("div");
      results_box.classList.add("results");
      results_box.id = "results";
 
      
      resultsContainer.appendChild(results_box);

      const imgLogo = document.createElement("img");
      imgLogo.classList.add("logo_backscr_img");
      imgLogo.alt = "logo";
      imgLogo.src = "/svg_logo_backscr_img.svg";

      const div_close = document.createElement("icon-i");
      div_close.title = "Close Search";
      div_close.setAttribute("class", "bi bi-x-lg btn_close  ");
      div_close.addEventListener("click", () => this.remove());
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
    
    generateBagdes(filteredList = []) {
      const bagdes = [
        {
          name: "text",
          data: "bi bi-file-text-fill",
          is_me: ["p", "h1", "h2", "h3", "h4", "h5", "span", "tspan"],
          count: 0
        },
        {
          name: "image",
          data: "bi bi-file-earmark-image-fill",
          is_me: ["img"],
          count: 0
        },
        {
          name: "video",
          data: "bi bi-file-earmark-play-fill",
          is_me: ["video", "video-player-v2"],
          count: 0
        },
        {
          name: "iframe",
          data: "bi bi-file-earmark-richtext-fill",
          is_me: ["iframe"],
          count: 0
        },
      ];
    
      this.results_i_list.innerHTML = ""; // očisti prethodne bedževe
    
      const data = filteredList.length ? filteredList : this.Mydata;
    
      data.forEach((item) => {
        if (!item.page) return;
        const page = item.page.toLowerCase();
        bagdes.forEach((badge) => {
          const found = badge.is_me.some((tag) => page.includes(`<${tag}`));
          if (found) badge.count++;
        });
      });
    
      // Dodaj sve bedževe
      bagdes.forEach((badge) => {
        const icon = document.createElement("icon-i");
        icon.className = badge.data;
        icon.setAttribute("title", `${badge.name}${badge.count > 0 ? `: ${badge.count}` : ''}`);
    
        const badgeWrapper = document.createElement("div"),
        counter = document.createElement("span");
        badgeWrapper.style.display = "inline-flex";
        badgeWrapper.style.alignItems = "center";
        badgeWrapper.style.marginRight = "5px";
    
        if (badge.count === 0) {
          badgeWrapper.style.opacity = "0.5";
          badgeWrapper.style.pointerEvents = "none"; 
        }
    
        badgeWrapper.appendChild(icon);
     
        if (badge.count > 0) {
          const counter = document.createElement("span")
          counter.textContent = badge.count;
          counter.style.marginLeft = "4px";
          counter.style.fontSize = "12px";
          counter.style.color = "white";
          badgeWrapper.style.marginRight = "10px";

          badgeWrapper.appendChild(counter);
        }
    
        this.results_i_list.appendChild(badgeWrapper);
      });
    }
    
    
    
    
    performSearch() {
      const query = this.shadowRoot
        .querySelector("#search")
        .value.toLowerCase();
      const filter = this.shadowRoot.querySelector("#filter").value;
      const resultsContainer = this.shadowRoot.querySelector("#results");
 
      resultsContainer.textContent = "";

      const data = this.Mydata;

      if (query.length === 0) {
        this.btn_clear.classList.add("hide");
        return;
      }

      const filteredData = data.filter(
        (item) =>
          (filter === "all" || item.type === filter) &&
          item.title.toLowerCase().includes(query)
      );
      this.btn_clear.classList.remove("hide");
      //history.replaceState(history.state, "",`/?p=search&q=${query}`);
      this.generateBagdes(filteredData);
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
          cat_i = document.createElement("icon-i");
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
              // window.welcomer.blogloader(item.id);
              router.go({ p: "blog", id: item.id });
              // document.querySelector("p-search").remove();
            }
            if (item.cat == "projects") {
            }
            if (!item.link == "") {
              // document.querySelector("p-search").remove();
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
      const searchCloseIcon = document.createElement("icon-i");
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
      const undoButton = document.createElement("icon-i");
      undoButton.classList.add(
        "bi",
        "bi-arrow-left-short",
        "editor_btns",
        "undo"
      );
      btnsR.appendChild(undoButton);

      // Redo button
      const redoButton = document.createElement("icon-i");
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
      const downloadButton = document.createElement("icon-i");
      downloadButton.classList.add(
        "bi",
        "bi-file-earmark-arrow-down",
        "celvon"
      );
      downloadButton.setAttribute("data-onclick", "welcomer.editor.d();");
      downloadButton.setAttribute("data-title", "Download as html file");
      btnsR.appendChild(downloadButton);

      // Question button
      const questionButton = document.createElement("icon-i");
      questionButton.classList.add("bi", "bi-question-lg");
      questionButton.setAttribute(
        "data-onclick",
        "welcomer.editor.load_menu_bar(this);"
      );
      btnsR.appendChild(questionButton);

      // Share button
      const shareButton = document.createElement("icon-i");
      shareButton.classList.add("bi", "bi-share");
      shareButton.setAttribute("data-onclick", "welcomer.share();");
      shareButton.setAttribute("title", "Share");
      btnsR.appendChild(shareButton);

      // Close button
      const closeButton = document.createElement("icon-i");
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
        doSomething: function () {},
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
      const searchCloseIcon = document.createElement("icon-i");
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
      const undoButton = document.createElement("icon-i");
      undoButton.classList.add(
        "bi",
        "bi-arrow-left-short",
        "editor_btns",
        "undo"
      );
      btnsR.appendChild(undoButton);

      // Redo button
      const redoButton = document.createElement("icon-i");
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
      const downloadButton = document.createElement("icon-i");
      downloadButton.classList.add(
        "bi",
        "bi-file-earmark-arrow-down",
        "celvon"
      );
      downloadButton.setAttribute("data-onclick", "welcomer.editor.d();");
      downloadButton.setAttribute("data-title", "Download as html file");
      btnsR.appendChild(downloadButton);

      // Question button
      const questionButton = document.createElement("icon-i");
      questionButton.classList.add("bi", "bi-question-lg");
      questionButton.setAttribute(
        "data-onclick",
        "welcomer.editor.load_menu_bar(this);"
      );
      btnsR.appendChild(questionButton);

      // Share button
      const shareButton = document.createElement("icon-i");
      shareButton.classList.add("bi", "bi-share");
      shareButton.setAttribute("data-onclick", "welcomer.share();");
      shareButton.setAttribute("title", "Share");
      btnsR.appendChild(shareButton);

      // Close button
      const closeButton = document.createElement("icon-i");
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

  if (!customElements.get("editor-sdk")) {
  customElements.define("editor-sdk", EditorSDK);
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
      this.container.addEventListener(
        "touchend",
        this.handleTouchEnd.bind(this)
      );
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
      this.loader_svg = "/loader";
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
      style.textContent = `${controls_style} ${CDN_URL_BOOSTRAP_ICONS_STRCSS} :root{--cdn_primary:#ffff;--btn-disable:#fff;--seo-color:#fff;--primary_light:#ffffff4f;--textshadow_media:0px 0px 0px var(--cdn_white),3px 3px 5px #00000047;--cdn_white:#333;--hard_white:#fff;--red:#b90808;--section-bg:#333;--green:#2e7d32;--header-a:#e6e6e6;--product-background:linear-gradient(45deg,#1b5e20,#10bf19);--ads-background:linear-gradient(45deg,rgb(148 31 148),#c55e05);--event-background:linear-gradient(45deg,rgb(148 31 148),#2196f3);--job-background:linear-gradient(45deg,rgb(148 31 148),#3f51b5);--black-trasparent-color:rgba(0,0,0,0.639);--grid-image:url(/?url=source&sourcelogin=grid.svg);--shield-image:url(/?url=source&sourcelogin=shield.svg);--stars-25:#b32020;--stars-40:#FFD700;--stars-60:#d56617;--stars-75:var(--green);}img.zoomImg{position:fixed !important;z-index:3333333;top:0px !important;left:0px !important;width:100% !important;height:100% !important;opacity:1 !important;background:var(--black-trasparent-color);}.zoomContainer{position:fixed;z-index:333333;left:0px;top:0px;width:100%;height:100%;opacity:1 !important;}.zoomContainer .zoomWindowContainer div{left:10px !important;top:10px !important;width:100%;width:100% !important;display:block !important;z-index:3333 !important;height:100% !important;position:fixed;float:unset !important;bottom:0px !important;border:none;position:fixed !important;right:10px !important;width:unset !important;bottom:10px !important;height:unset !important;margin:0px !important;padding:2px !important;border-radius:10px !important;border:2px solid var(--primary_light) !important;filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.2));-webkit-filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.2));enable-background:new 0 0 512 512 !important;}.zoomWindowContainer{position:fixed !important;left:0px;top:0px !important;background:var(--black-trasparent-color);width:100%;height:100% !important;width:100% !important;}.zoomer_exit{position:fixed;top:20px;right:20px;z-index:333333;color:white;font-size:25px;filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.3));-webkit-filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.3));enable-background:new 0 0 512 512 !important;background:var(--black-trasparent-color);width:25px !important;height:25px !important;padding:0px 5.6px;border-radius:6px;}#helper_id_helper{pointer-events:none !important;position:fixed;left:20px;top:20px;background:var(--black-trasparent-color);z-index:333333;color:var(--white);padding:5px 10px;border-radius:6px;filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.3));-webkit-filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.3));enable-background:new 0 0 512 512 !important;}div#helper_id_helper3{position:absolute;left:20px;z-index:33333;bottom:30px;right:20px;bottom:20px;border-radius:0px 0px 9px 9px !important;filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.2));-webkit-filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.2));enable-background:new 0 0 512 512 !important;pointer-events:none !important;}div#helper_id_helper3 p{border-radius:6px !important;background:var(--black-trasparent-color);color:var(--white);padding:10px;display:block;margin:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:center;}.zoomWindow{pointer-events:unset !important; z-index:999;display:none;position:absolute;float:left;height:0px;width:0px;border:4px solid rgb(136,136,136);background-position:0px 0px;background-repeat:no-repeat;cursor:inherit;overflow:hidden;}img_loader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;position:absolute;pointer-events:none;}img_loader img#loader{display:block;z-index:1;left:0px;top:0px;margin:auto;width:45px;height:45px;}.zoomWindow{-o-object-fit:scale-down;object-fit:scale-down;width:100%;background-size:contain;background-position:center;pointer-events:none;}`;
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
      loaderImg.src = this.loader_svg;
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
      const icon = document.createElement("icon-i");
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
      const infoIcon = document.createElement("icon-i");
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
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
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

    srcDiv(src = null) {
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
        this.shadowRoot
          .querySelector("#zoomImage")
          .setAttribute("src", `${src}`);
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

    simpleMode(t = false) {}

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
      portfolio.data.blog.forEach(function (et) {
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
        try{
        for (var i = 0; i < this.post_data["category"].length; i++) {
          const tag = document.createElement("tag");
          tag.textContent = "#" + this.post_data["category"][i];
          //  tags.appendChild(tag);
        }
      }catch(aef){}
      }

      style.textContent = `${window.atob(
        portfolio.data.blog_style_bundle
      )} 
      img {
      text-align: center;
  margin: auto;
  display: block;}
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
    img_load(t) {
      t.classList.add("active");
      t.removeAttribute("style");
      t.removeAttribute("onload");
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
        try{
        for (var i = 0; i < this.post_data["category"].length; i++) {
          const tag = document.createElement("a");
          tag.textContent = "#" + this.post_data["category"][i];
          tag.title = `Open ${this.post_data["category"][i]} Category in new tab`;
          tag.setAttribute(
            "href",
            `/?p=blog&c=${this.post_data["category"][i]}`
          );
          tag.target = "_top";
          /* 
        tag.addEventListener("click", function(){
            window.top.location.href = `/?p=blog&c=${this.post_data['category'][i]}`;
        });*/

          tags.appendChild(tag);
        }}catch(aef){}
        if (`${this.post_data["id"]}` == `${urlParamsf.get("id")}`) {
          if (this.post_data["type"] == "text") {
            div_content.appendChild(document.createElement("bdkr"));
          }
        }
      }

      welcomer.cards_generateV2(div_content, url);

      try {
        document
          .querySelector("div#clavs.scrollactive div_header")
          .setAttribute(
            "style",
            `
    opacity: 1;
    opacity: 1 !important;
    pointer-events: unset !important;
`
          );
      } catch (Ex) {}
      if (document.querySelector("p-container")) {
        document.querySelector("p-container").classList.add("active");
      }
      this.shadowRoot.querySelectorAll("img").forEach(function (v) {
        v.addEventListener("click", function (event) {
          if (welcomer.gallery_temp.length > 0) {
            welcomer.eronelit_gallery.call_ui(welcomer.gallery_temp);
          } else {
            var clickedElement = event.target || event;
            const ImagePreview_src = document.createElement("image-preview");
            ImagePreview_src.src(clickedElement.getAttribute("src"));
            document.body.appendChild(ImagePreview_src);
          }
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
      if (document.querySelector("p-container")) {
        document.querySelector("p-container").scrollTop = 0;
      }

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
        portfolio.data.blog_style_bundle
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
      @import url('https://${CDN_URL}/node_modules/video.js/dist/video-js.min.css');
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
      }" > @import url('https://${
        CDN_URL
      }/node_modules/video.js/dist/video-js.min.css');video-player-v2{display:block;}@media screen and (min-width:450px){.content-wrapper iframe,.content-wrapper video-player-v2{height:80vh !important;max-height:80vh !important;min-height:80vh !important;}}iframe,video-player-v2{margin:20px 0px !important;}iframe,video-player-v2{height:70vh !important;min-height:70vh !important;pointer-events:unset !important;object-fit:contain;}img,iframe{max-height:70vh !important;object-fit:contain;}.video-js{width:100%;height:100%;opacity:0;transition:.3s;background-color:rgb(0 0 0 / 48%);opacity:1;}#canvas_img{position:absolute;left:0px;top:0px;width:100%;height:100%;background:black;object-fit:cover;z-index:-1;filter:blur(7px);opacity:0;}#canvas_img{opacity:1;}</style> <video id="video-player" class="video-js vjs-default-skin" controls nonce="${
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

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
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
background-image: url(${this.#imageUrlToBlobUrl(
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpldj0iaHR0cDovL3d3dy53My5vcmcvMjAwMS94bWwtZXZlbnRzIiB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJmdWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJoZXhhZ29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtaGV4YWdvbiBmYS13LTE4IGZhLTN4IiBzdHlsZT0iICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IiBmaWxsPSIjMzM3YWI3IiBvcGFjaXR5PSIwLjYiPiANCiAgICANCiAgICA8cGF0aCBkPSJtMzMuMzkwNjI1IDI2MS4zMjAzMTJoNjYuNzczNDM3bDMzLjM4NjcxOS01Ny44MjgxMjQtMzMuMzg2NzE5LTU3LjgyODEyNmgtNjYuNzczNDM3bC0zMy4zOTA2MjUgNTcuODI4MTI2em0wIDAiLz4NCiAgICA8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMy4zOTA2MjUgNDExLjMyMDMxMmg2Ni43NzM0MzdsMzMuMzg2NzE5LTU3LjgyODEyNC0zMy4zODY3MTktNTcuODI4MTI2aC02Ni43NzM0MzdsLTMzLjM5MDYyNSA1Ny44MjgxMjZ6bTAgMCIvPg0KICAgIDxwYXRoIGQ9Im0yODUuNjg3NSAxNDUuNjY0MDYyLTMzLjA4OTg0NCA1Ny4zMDQ2ODgtLjMwMDc4MS41MjM0MzguMzAwNzgxLjUyMzQzNyAzMy4wODk4NDQgNTcuMzA0Njg3aDY2Ljc3NzM0NGwzMy4zODY3MTgtNTcuODI4MTI0LTMzLjM4NjcxOC01Ny44MjgxMjZ6bTAgMCIvPg0KICAgIDxwYXRoIGQ9Im0zNzguNjEzMjgxIDEzMC42NjAxNTYgMzMuMzkwNjI0IDU3LjgyODEyNWg2Ni43NzM0MzhsMzMuMzkwNjI1LTU3LjgyODEyNS0zMy4zOTA2MjUtNTcuODI4MTI1aC02Ni43NzM0Mzh6bTAgMCIvPg0KDQoNCg0KICAgIDxwYXRoIGQ9Im0xMjYuMTQ4NDM4IDEzMC42NjAxNTYgMzMuMzkwNjI0IDU3LjgyODEyNWg2Ni43NzM0MzhsMzMuMzkwNjI1LTU3LjgyODEyNS0zMy4zOTA2MjUtNTcuODI4MTI1aC02Ni43NzM0Mzh6bTAgMCIvPg0KICAgIDxwYXRoIGQ9Im0yNTIuMjk2ODc1IDU3LjgyODEyNSAzMy4zOTA2MjUgNTcuODMyMDMxaDY2Ljc3NzM0NGwzMy4zODY3MTgtNTcuODMyMDMxLTMzLjM4NjcxOC01Ny44MjgxMjVoLTY2Ljc3NzM0NHptMCAwIi8+DQogICAgPHBhdGggZD0ibTIyNi4zMTI1IDMzNC4xNTIzNDQgMzMuMzkwNjI1LTU3LjgyODEyNS0zMy4zOTA2MjUtNTcuODMyMDMxaC02Ni43NzM0MzhsLTMzLjM5MDYyNCA1Ny44MzIwMzEgMzMuMzkwNjI0IDU3LjgyODEyNXptMCAwIiAgLz4NCg0KDQoNCg0KPC9zdmc+"
      )});

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

      const profileImgElement =
        this.shadowRoot.getElementById("cv_profile_img");
      const originalImageUrl = profileImgElement.src; // Get the initial src

      if (originalImageUrl) {
        this.profileBlobUrl = await this.#imageUrlToBlobUrl(originalImageUrl);

        if (this.profileBlobUrl) {
          profileImgElement.src = this.profileBlobUrl;
        }
      }
    }
  }

  if (!customElements.get("html-monaco-editor")) {
    customElements.define(
      "html-monaco-editor",
      class extends HTMLElement {
        constructor() {
          super();
  
          // 💡 Stilovi globalno
          if (!document.getElementById("monaco-editor-style")) {
            const style = document.createElement("style");
            style.id = "monaco-editor-style";
            style.textContent = `
              html-monaco-editor {
                display: flex;
                height: 100%;
                width: 100%;
                overflow: hidden;
                flex-direction: column;
              }
              html-monaco-editor #container {
                display: flex;
                flex: 1;
                background: #1e1e1e;
              }
              html-monaco-editor #editor {
                width: 50%;
                height: 100%;
              }
              html-monaco-editor iframe {
                width: 50%;
                height: 100%;
                border: none;
                background: white;
              }
              html-monaco-editor .code-section {
                display: flex;
                flex-direction: column;
                height: 100%;
                flex: 1;
              }
              html-monaco-editor .tabs {
                display: flex;
                padding: 0 8px;
                background: #333;
                color: white;
                font-family: monospace;
                height: 25px;
                align-items: center;
                font-size: 12px;
                border-bottom: 1px solid #222;
              }
              html-monaco-editor .tabs > div {
                margin-right: 12px;
                cursor: default;
              }
            `;
            document.head.appendChild(style);
          }
  
          // 📦 Container
          const container = document.createElement("div");
          container.id = "container";
  
          const codeSection = document.createElement("div");
          codeSection.className = "code-section";
  
          const tabs = document.createElement("div");
          tabs.className = "tabs";
          tabs.innerHTML = `<div>JavaScript</div><div>Example: Hello World</div>`;
  
          const editorDiv = document.createElement("div");
          editorDiv.id = "editor";
  
          const preview = document.createElement("iframe");
  
          codeSection.appendChild(tabs);
          codeSection.appendChild(editorDiv);
          container.appendChild(codeSection);
          container.appendChild(preview);
          this.appendChild(container);
  
          // 🎨 Monaco CSS
          if (!document.getElementById("monaco-css")) {
            const css = document.createElement("link");
            css.id = "monaco-css";
            css.rel = "stylesheet";
            css.href =
              "https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs/editor/editor.main.css";
            document.head.appendChild(css);
          }
  
          // 🚀 Učitaj Monaco Editor
          const loader = document.createElement("script");
          loader.src =
            "https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs/loader.js";
          loader.onload = () => {
            require.config({
              paths: {
                vs: "https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs",
              },
            });
            require(["vs/editor/editor.main"], () => {
              const editor = monaco.editor.create(editorDiv, {
                value: `function hello() {\n  alert('Hello world!');\n}`,
                language: "javascript",
                theme: "vs-dark",
                fontSize: 14,
                minimap: { enabled: false },
                automaticLayout: true,
              });
  
              const updatePreview = () => {
                const doc =
                  preview.contentDocument || preview.contentWindow.document;
                doc.open();
                doc.write(`<!DOCTYPE html><html><head><title>Preview</title></head><body><script>${editor.getValue()}<\/script></body></html>`);
                doc.close();
              };
  
              updatePreview();
              editor.onDidChangeModelContent(updatePreview);
  
              preview.onresize = function () {
                updatePreview();
                editor.onDidChangeModelContent(updatePreview);
              };
  
              const resizeObserver = new ResizeObserver(() => editor.layout());
              resizeObserver.observe(editorDiv);
            });
          };
          document.body.appendChild(loader);
        }
      }
    );
  }
  

  if (!customElements.get("app-home")) {
    customElements.define("app-home", app_home);
  }
  if (!customElements.get("page-c")) {
    customElements.define("page-c", Page);
  }

  if (!customElements.get("canvas-v")) {
    customElements.define("canvas-v", CanvasVElement);
  }

  
  if (!customElements.get('icon-i_old')) {
    customElements.define('icon-i_old', class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({mode: 'open'});

        // SVG wrapper i stil
        this.styleElement = document.createElement('style');
        this.styleElement.textContent = `

         :host, * {
          -webkit-user-select:none;
             -moz-user-select:none;
              -ms-user-select:none;
                  user-select:none;
          cursor: none;
                  }
                  
svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
`;


        this.svg = null;
        this.shadowRoot.appendChild(this.styleElement);

      }

        cleanId(id) {
return id.replace(/^\d+-/, '').replace(/bi-?/g, '');
}

      svg_str(id = "bi bi-1-square-fill") {
const symbols = window.svg_paths;
const cleaned = this.cleanId(id);  

for (let i = 0; i < symbols.length; i++) {
  const idf = this.cleanId(symbols[i]['id']);  

  if (idf === cleaned) {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('viewBox', symbols[i]['viewBox']);
    this.svg.setAttribute('class', id); 

    const paths = symbols[i]['paths'];
    for (let j = 0; j < paths.length; j++) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", paths[j]['d']);  
      this.svg.appendChild(path);
    }

    this.shadowRoot.appendChild(this.svg);
    this.removeAttribute("name"); 
    break;
  }
}
}

isJsonObject(val) {
return typeof val === 'object' && val !== null && !Array.isArray(val);
}
isJsonString(str) {
try {
  const parsed = JSON.parse(str);
  return typeof parsed === 'object' && parsed !== null;
} catch (e) {
  return false;
}
}


      async connectedCallback() {
       /* if (!this.isJsonObject(window.svg_paths) || !this.isJsonString(window.svg_paths)) {
          const response = await fetch("/icons");
          if (response.ok) {
            window.svg_paths = await response.json();
          } else {
          }
        }*/


        const src = this.getAttribute('name') || null;

        if (src) {
          this.svg_str(`${src}`);
        }
      }

      #name(iconName) {
        this.shadowRoot.querySelectorAll('svg').forEach(e => e.remove());
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        switch (iconName) {

          case '':
            this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.svg.setAttribute('viewBox', '0 0 16 16');
            this.svg.setAttribute('class', 'bi bi-rulers');
            path.setAttribute('d', 'M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z');

            this.svg.appendChild(path);
            this.shadowRoot.appendChild(this.svg);
            break;
          case 'bi-inbox':
            this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.svg.setAttribute('viewBox', '0 0 16 16');
            this.svg.setAttribute('class', 'bi bi-rulers');
            path.setAttribute('d', 'M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z');

            this.svg.appendChild(path);
            this.shadowRoot.appendChild(this.svg);

            break;
          case 'x-lg':
            this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.svg.setAttribute('viewBox', '0 0 16 16');
            this.svg.setAttribute('class', 'bi bi-rulers');

            path.setAttribute('d', 'M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z');

            this.svg.appendChild(path);
            this.shadowRoot.appendChild(this.svg);
            break;
          case 'emoji-frown-fill"':
            this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.svg.setAttribute('viewBox', '0 0 16 16');
            this.svg.setAttribute('class', 'bi bi-rulers');

            path.setAttribute('d', 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8');

            this.svg.appendChild(path);
            this.shadowRoot.appendChild(this.svg);
            break;
          case 'emoji-laughing-fill':
            this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.svg.setAttribute('viewBox', '0 0 16 16');
            this.svg.setAttribute('class', 'bi bi-rulers');

            path.setAttribute('d', 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5s-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5m5.331 3a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5m-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5s-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.23');

            this.svg.appendChild(path);
            this.shadowRoot.appendChild(this.svg);
            break;
          case 'rulers':
            this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.svg.setAttribute('viewBox', '0 0 16 16');
            this.svg.setAttribute('class', 'bi bi-rulers');

            path.setAttribute('d', 'M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1z');

            this.svg.appendChild(path);
            this.shadowRoot.appendChild(this.svg);
            break;

          default:
            console.warn(`Icon "${iconName}" not found.`);
        }
      }
    } );
  }


  if(!customElements.get('rotating-border')){
   customElements.define('rotating-border', class   extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
      const wrapper = document.createElement('div');
      wrapper.className = 'wrapper';

      const content = document.createElement('div');
      content.className = 'content';
      content.textContent = this.textContent || 'Rotating Border';

      const style = document.createElement('style');
      style.textContent = `
    .wrapper {
      position: relative;
      padding: 20px;
      border-radius: 10px;
      overflow: hidden;
      display: inline-block;
    }

    .wrapper::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: conic-gradient(
        red,
        orange,
        yellow,
        green,
        cyan,
        blue,
        violet,
        red
      );
      z-index: 0;
      animation: rotate 4s linear infinite;
      border-radius: 12px;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      -webkit-mask-composite: destination-out;
      padding: 5px;
    }

    .content {
      position: relative;
      z-index: 1;
      background: white;
      border-radius: 8px;
      padding: 20px;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

      wrapper.appendChild(content);
      this.shadowRoot.append(style, wrapper);
    }
  })
}


  if(!customElements.get('custom-video')){
  customElements.define('custom-video', class   extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this._prevVolume = 1;
      this.observer = null;

    }
    disconnectedCallback() {
      if (this._onKeyDown) {
        document.removeEventListener('keydown', this._onKeyDown);
        this._onKeyDown = null;
      }
      if (this.observer) {
        this.observer.disconnect();
      }
    }
    connectedCallback() {
      this.observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {



        }
      });

      this.observer.observe(this.shadowRoot, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });

      const src = this.getAttribute('src') || '';
      const poster = this.getAttribute('poster') || '';
      const autoplay = this.hasAttribute('autoplay');
      const loop = this.hasAttribute('loop');

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = CDN_URL_BOOSTRAP_ICONS_STRCSS_URL;

      const style = document.createElement('style');
      style.textContent = ` 
  


  
:host {

display: -webkit-box;

display: -ms-flexbox;

display: flex;
  max-width: 100%;
  position: relative;
  font-family: sans-serif;
  background: black;
  border-radius: 10px;
  min-height: 250px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;


}




      video {
        width: 100%;
        height: 100%;
        -o-object-fit: scale-down;
           object-fit: scale-down;
        background: black;
        border-radius: 0px;
            margin: auto;

            transition: .3s;
      }
      .video-feedback {

      position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%) scale(1); */
  font-size: 4dvh;
  color: white;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: opacity 0.4s ease, -webkit-transform 0.4s ease;
  transition: opacity 0.4s ease, -webkit-transform 0.4s ease;
  -o-transition: opacity 0.4s ease, transform 0.4s ease;
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition: opacity 0.4s ease, transform 0.4s ease, -webkit-transform 0.4s ease;
  z-index: 20;
  height: 100%;
  width: 100%;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex
;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-line-pack: center;
      align-content: center;
  left: 0%;
  top: 0%;
  pointer-events: none;
  background: -o-radial-gradient(#00000070, transparent);
  background: radial-gradient(#00000070, transparent);
  border-radius: 10px !important;

      }
      .video-feedback.show {
        opacity: 1; 
      }
      .controls {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 4px;
        padding: 8px 12px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;
        z-index: 10;
        background-image: -o-linear-gradient(bottom, black, transparent);
        background-image: -webkit-gradient(linear, left bottom, left top, from(black), to(transparent));
        background-image: linear-gradient(360deg, black, transparent);
     filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) ;
-webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) ;
enable-background: new 0 0 512 512 ;
border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
     
        }
      .controls-row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        gap: 8px;
      }
      .controls-row > div:first-child {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        gap: 8px;
      }
      .progress-time {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        gap: 4px;
        font-size: 0.8em;
      }

  


      button {
        background: none;
        border: none;
        color: white;
        font-size: 1.4em;
        cursor: pointer;
        position: relative;
      }
      .volume {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        gap: 4px;
        position: relative;
      }   

`;

      const root = document.createElement("div");
      const video = document.createElement('video');
      video.id = 'video';
      if (poster) video.poster = poster;
      if (autoplay) video.setAttribute('autoplay', '');
      if (loop) video.setAttribute('loop', '');
      const source = document.createElement('source');
      source.src = src;
      source.type = 'video/mp4';
      video.appendChild(source);
      video.style.opacity = '0';
      video.style.transform = 'scale(0);';

      video.appendChild(document.createTextNode('Your browser does not support the video tag.'));

      const feedback = document.createElement('div');
      feedback.className = 'video-feedback';
   

      const controls = document.createElement('div');
      controls.className = 'controls';
      const progressBar = document.createElement('progress-bar'),
        bac_mask = document.createElement("bac-mask");
      controls.appendChild(bac_mask);
      controls.appendChild(progressBar);


      const controlsRow = document.createElement('div');
      controlsRow.className = 'controls-row';

      const left = document.createElement('div');
      const playBtn = document.createElement('button');
      playBtn.className = 'play';
      playBtn.title = 'Play/Pause';
      playBtn.innerHTML = '<icon-i name="play-fill"></icon-i>';

      const volume = document.createElement('div');
      volume.className = 'volume';
      const muteBtn = document.createElement('button');
      muteBtn.className = 'mute';
      muteBtn.title = 'Mute/Unmute';
      muteBtn.innerHTML = '<icon-i name="volume-up-fill"></icon-i>';
      const volumeRange = document.createElement('volume-range');
      volume.appendChild(muteBtn);
      volume.appendChild(volumeRange);

      let volumeHoverTimeout;

      volume.addEventListener('mouseenter', () => {
        clearTimeout(volumeHoverTimeout);
        volumeRange.style.display = 'block';
      });

      volume.addEventListener('mouseleave', () => {
        volumeHoverTimeout = setTimeout(() => {
          volumeRange.style.display = 'none';
        }, 300); // malo kašnjenje za prelaz
      });

      volumeRange.addEventListener('mouseenter', () => {
        clearTimeout(volumeHoverTimeout);
        volumeRange.style.display = 'block';
      });

      volumeRange.addEventListener('mouseleave', () => {
        volumeHoverTimeout = setTimeout(() => {
          volumeRange.style.display = 'none';
        }, 300);
      });


      left.appendChild(playBtn);
      left.appendChild(volume);

      const timeDiv = document.createElement('div');
      timeDiv.className = 'progress-time';
      const current = document.createElement('span');
      current.className = 'current-time';
      current.textContent = '0:00';
      const duration = document.createElement('span');
      duration.className = 'duration';
      duration.textContent = '0:00';
      timeDiv.appendChild(current);
      timeDiv.appendChild(document.createTextNode(' / '));
      timeDiv.appendChild(duration);
      timeDiv.appendChild(duration);
      left.appendChild(timeDiv);

      const right = document.createElement('div');
      const subsBtn = document.createElement('button');
      subsBtn.className = 'subtitles';
      subsBtn.title = 'Subtitles';
      subsBtn.innerHTML = '<icon-i name="subtitles"></icon-i>';
      const speedBtn = document.createElement('button');
      speedBtn.className = 'speed';
      speedBtn.title = 'Speed';
      speedBtn.innerHTML = '<icon-i name="gear-fill"></icon-i>';
      const pipBtn = document.createElement('button');
      pipBtn.className = 'pip';
      pipBtn.title = 'Picture-in-Picture';
      pipBtn.innerHTML = '<icon-i name="box-arrow-in-up-right"></icon-i>';
      const fullBtn = document.createElement('button');
      fullBtn.className = 'fullscreen';
      fullBtn.title = 'Fullscreen';
      fullBtn.innerHTML = '<icon-i name="fullscreen"></icon-i>';
      // right.appendChild(subsBtn);
      right.appendChild(speedBtn);
      right.appendChild(pipBtn);
      right.appendChild(fullBtn);

      controlsRow.appendChild(left);
      // controlsRow.appendChild(timeDiv);
      controlsRow.appendChild(right);
      controls.appendChild(controlsRow);

      this.shadowRoot.appendChild(root);
      root.appendChild(link);
      root.appendChild(style);
      root.appendChild(video);
      root.appendChild(feedback);
      root.appendChild(controls);
      // this.shadowRoot.append(link, style, video, feedback, controls);

      const progress = progressBar;
      const currentTime = current;
      const durationTime = duration;

      this.shadowRoot.addEventListener("contextmenu", e => e.preventDefault());
      this.shadowRoot.addEventListener("dragstart", e => e.preventDefault());
      this.shadowRoot.addEventListener("selectstart", e => e.preventDefault());

      progress.videoRef = video;

      const formatTime = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
      const showFeedback = icon => {
        feedback.innerHTML = icon;
        feedback.classList.add('show');
        setTimeout(() => feedback.classList.remove('show'), 400);
      };

      video.addEventListener('loadeddata', () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const thumbnail = canvas.toDataURL('image/jpeg');
          video.setAttribute('poster', thumbnail);
        } catch (e) { }

      });

      video.addEventListener('loadedmetadata', () => {
        durationTime.textContent = formatTime(video.duration);
      });

      video.addEventListener('timeupdate', () => {
        if (video.hasAttribute("style")) {
          video.removeAttribute("style");
        }

        currentTime.textContent = formatTime(video.currentTime);
        progress.value = video.currentTime / video.duration;
      });

      progress.addEventListener('seek', e => {
        video.currentTime = e.detail * video.duration;
      });

      playBtn.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          playBtn.innerHTML = '<icon-i name="pause-fill"></icon-i>';
          showFeedback('<icon-i name="pause-circle-fill"></icon-i>');
        } else {
          video.pause();
          playBtn.innerHTML = '<icon-i name="play-fill"></icon-i>';
          showFeedback('<icon-i name="play-circle-fill"></icon-i>');
        }
      });


      video.addEventListener('click', () => playBtn.click());

      video.volume = 1;
      volumeRange.value = 1;

      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        if (video.muted) {
          this._prevVolume = video.volume;
          volumeRange.value = 0;
          video.volume = 0;
        } else {
          video.volume = this._prevVolume || 1;
          volumeRange.value = video.volume;
        }
        muteBtn.innerHTML = video.muted ? '<icon-i name="volume-mute-fill"></icon-i>' : '<icon-i name="volume-up-fill"></icon-i>';
      });

      volumeRange.addEventListener('input', e => {
        const val = parseFloat(e.detail ?? e.target.value);
        video.volume = val;
        video.muted = val === 0;
        muteBtn.innerHTML = video.muted ? '<icon-i name="volume-mute-fill"></icon-i>' : '<icon-i name="volume-up-fill"></icon-i>';
      });

      fullBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          this.shadowRoot.host.requestFullscreen?.();
          fullBtn.innerHTML = '<icon-i name="fullscreen-exit"></icon-i>';
        } else {
          fullBtn.innerHTML = '<icon-i name="fullscreen"></icon-i>';
          document.exitFullscreen?.();
        }
      });

      pipBtn.addEventListener('click', () => {
        if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
          video.requestPictureInPicture?.();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.fullscreenElement) {
          document.exitFullscreen?.();
        } else if (e.code === 'Space') {
          e.preventDefault();
          playBtn.click();
        }
      });
    }
  })
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
 


class CustomScrollV2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._handlers = {};
  }

  gear(type, callback) {
    if (!this._handlers[type]) this._handlers[type] = [];
    this._handlers[type].push(callback);
  }

  append(child) {
    if (child instanceof Node) {
      this.appendChild(child);
    }
  }

  clearLightDOM() {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }
  }
   setupHoverEvents(el, onEnter, onLeave) {
 
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onEnter);
    el.addEventListener("touchend", onLeave);
    el.addEventListener("touchcancel", onLeave);
  }
  
  connectedCallback() {
    const style = document.createElement("style");
    style.textContent = `
       slot {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
      }
      .wrapper {
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        padding-bottom: 5px;
        scrollbar-width: none;
      }

      .wrapper::-webkit-scrollbar {
        display: none;
      }

      .scrollbar {
        position: absolute;
        bottom: 2px;
        left: 0;
        height: 8px;
        width: 100%;
        border-radius: 30px;
        background: rgba(0, 0, 0, 0.1);
        -webkit-transition: opacity 0.5s ease;
        -o-transition: opacity 0.5s ease;
        transition: opacity 0.5s ease;
        opacity: 0;
        pointer-events: none;
      }

      .thumb {
        position: absolute;
        height: 100%;
        border-radius: 4px;
        cursor: none;
        background-color: rgba(255, 255, 255, 0.2);
        -webkit-backdrop-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) blur(10px);
                backdrop-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) blur(10px);
      }

      .thumb:hover {
        -webkit-filter: drop-shadow(0 0 6px #fff);
                filter: drop-shadow(0 0 6px #fff);
      }

      :host(:hover) .scrollbar {
        opacity: 1;
        pointer-events: auto;
      }

      .content {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        gap: 10px;
        -webkit-box-align: stretch;
            -ms-flex-align: stretch;
                align-items: stretch;
      }

      .arrow {
      position: absolute;
    top: 50%;
    -webkit-transform: translateY(-60%);
        -ms-transform: translateY(-60%);
            transform: translateY(-60%);
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    cursor: pointer;
    z-index: 10;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    font-size: 24px;
    margin-top: -5px;
      }

      .arrow.left {
        left: 20px;
      }

      .arrow.right {
        right: 20px;
      }

      .arrow.hidden {
        display: none;
      }

      .wrapper {
      transition:.3s;
      }
    `;

    const leftArrow = document.createElement("icon-i");
    leftArrow.classList.add("arrow", "left","arrow-left-circle-fill", "hidden");
    // leftArrow.textContent = "◀";

    
    const rightArrow = document.createElement("icon-i");
    rightArrow.classList.add("arrow", "arrow-right-circle-fill", "right", "hidden");
    // rightArrow.textContent = "▶";

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    this.setupHoverEvents(leftArrow, function(){
      // wrapper.style.opacity = "0.2";
    },function(){
      wrapper.removeAttribute("style");
    });
    this.setupHoverEvents(rightArrow, function(){
      // wrapper.style.opacity = "0.2";
    },function(){
      wrapper.removeAttribute("style");
    });

    this.setupHoverEvents(wrapper,
      wrapper.removeAttribute("style"),
      ()=>{});


    const content = document.createElement("div");
    content.classList.add("content");

    const slot = document.createElement("slot");
    content.appendChild(slot);
    wrapper.appendChild(content);

    const scrollbar = document.createElement("div");
    scrollbar.classList.add("scrollbar");

    const thumb = document.createElement("div");
    thumb.classList.add("thumb");
    scrollbar.appendChild(thumb);

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(leftArrow);
    this.shadowRoot.appendChild(rightArrow);
    this.shadowRoot.appendChild(wrapper);
    this.shadowRoot.appendChild(scrollbar);

    const updateThumb = () => {
      const contentWidth = wrapper.scrollWidth;
      const containerWidth = wrapper.clientWidth;
      const scrollLeft = wrapper.scrollLeft;

      const thumbWidth = Math.max((containerWidth * containerWidth) / contentWidth, 30);
      const thumbLeft = (scrollLeft * containerWidth) / contentWidth;

      thumb.style.width = `${thumbWidth}px`;
      thumb.style.left = `${thumbLeft}px`;

      if (this._handlers["scroll"]) {
        this._handlers["scroll"].forEach((cb) => cb(wrapper.scrollTop, wrapper.scrollLeft));
      }

      function updateArrowVisibility(leftArrow, rightArrow, wrapper, scrollLeft, contentWidth, containerWidth) {
        const hideLeft = scrollLeft <= 0;
        const hideRight = scrollLeft >= contentWidth - containerWidth - 2;
      
        leftArrow.classList.toggle("hidden", hideLeft);
        rightArrow.classList.toggle("hidden", hideRight);
      
        if (hideLeft || hideRight) {
          wrapper.removeAttribute("style");
        } else { 
          // wrapper.style.opacity = "0.2";
        }
      }

      leftArrow.classList.toggle("hidden", scrollLeft <= 0);
      rightArrow.classList.toggle("hidden", scrollLeft >= contentWidth - containerWidth - 2);
 

      updateArrowVisibility(leftArrow, rightArrow, wrapper, wrapper.scrollLeft, wrapper.scrollWidth, wrapper.clientWidth);

    };

    wrapper.addEventListener("scroll", () => {
      updateThumb();
      onScrollActivity();
    });

    window.addEventListener("resize", updateThumb);
    updateThumb();

    leftArrow.addEventListener("click", () => {
      wrapper.scrollBy({ left: -100, behavior: "smooth" });
  
     
    });

    rightArrow.addEventListener("click", () => {
      wrapper.scrollBy({ left: 100, behavior: "smooth" });
      
      
    });

    let scrollDisableTimer = null;
    const disablePointerEvents = () => {
      if (!content) return;
      for (const el of content.children) {
        el.style.pointerEvents = "none";
      }
    };

    const enablePointerEvents = () => {
      if (!content) return;
      for (const el of content.children) {
        el.style.pointerEvents = "";
      }
    };

    const onScrollActivity = () => {
      disablePointerEvents();
      if (scrollDisableTimer) clearTimeout(scrollDisableTimer);
      scrollDisableTimer = setTimeout(() => {
        enablePointerEvents();
      }, 200);
    };

    let isDragging = false;
    let startX, startScrollLeft;

    thumb.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = wrapper.scrollLeft;
      document.body.style.userSelect = "none";
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.style.userSelect = "";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const scrollableWidth = wrapper.scrollWidth - wrapper.clientWidth;
      const thumbWidth = thumb.clientWidth;
      const containerWidth = wrapper.clientWidth;
      const scrollRatio = scrollableWidth / (containerWidth - thumbWidth);
      wrapper.scrollLeft = startScrollLeft + deltaX * scrollRatio;
    });

    let isTouchScrolling = false;
    let startX_drag = 0;
    let startScrollLeft_drag = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let inertiaFrame = null;

    const stopInertia = () => {
      if (inertiaFrame) {
        cancelAnimationFrame(inertiaFrame);
        inertiaFrame = null;
      }
    };

    const applyInertia = () => {
      if (Math.abs(velocity) < 0.1) {
        velocity = 0;
        return;
      }
      wrapper.scrollLeft -= velocity;
      velocity *= 0.95;
      inertiaFrame = requestAnimationFrame(applyInertia);
    };

    wrapper.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      isTouchScrolling = true;
      startX_drag = e.clientX;
      startScrollLeft_drag = wrapper.scrollLeft;
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
      stopInertia();
      lastX = e.clientX;
      lastTime = Date.now();
    });

    document.addEventListener("mouseup", () => {
      if (!isTouchScrolling) return;
      isTouchScrolling = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";

      const now = Date.now();
      const deltaTime = now - lastTime;
      if (deltaTime < 300) {
        inertiaFrame = requestAnimationFrame(applyInertia);
      }
    });

    document.addEventListener("mousemove", (e) => {
      if (!isTouchScrolling) return;
      const now = Date.now();
      const dx = e.clientX - lastX;
      const dt = now - lastTime;
      if (dt > 0) velocity = (dx / dt) * 20;
      lastX = e.clientX;
      lastTime = now;

      const dragDelta = e.clientX - startX_drag;
      wrapper.scrollLeft = startScrollLeft_drag - dragDelta;
    });
    updateThumb();
    onScrollActivity();
  }
}

 

 
 



  if (!customElements.get("custom-scroll")) {
    customElements.define("custom-scroll", CustomScroll);
  }

  if (!customElements.get("custom-scrolh")) {
    customElements.define("custom-scrolh", CustomScrollV2);
  }

  if (!customElements.get("cv-panel")) {
    customElements.define("cv-panel", CvPanel);
  }

  if (!customElements.get("project-card")) {
    customElements.define("project-card", ProjectCard);
  }

  if (!customElements.get("custom-dropdown")) {
    customElements.define("custom-dropdown", CustomDropdown);
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
    //  customElements.define("video-player-v2", VideoPlayerV2);
  }
  if (!customElements.get("p-container")) {
    customElements.define("p-container", PostContent);
  }

  if (!customElements.get("solar-system")) {
    customElements.define("solar-system", SolarSystem);
  }
 
if( ! customElements.get("contact-form-box")){
  customElements.define("contact-form-box", class   extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.wrapper = document.createElement("div");
      this.sendBtn = document.createElement("button");

      this.selectf = document.createElement('custom-select');
/* console.log(selectf.value); // npr. "2"

el.addEventListener('change', () => {
  console.log('Novo izabrano:', el.value);
});*/
    }
    reset(){
      this.wrapper.querySelectorAll("input, textarea").forEach(function(e){e.value = ""});
      this.sendBtn.removeAttribute("class");
      this.sendBtn.textContent = "Send message";
    }
    is_ready_or_not(){

    }
    send(fld_name, fld_email, fld_msg, faef = false){
      const contanct_frm =  this.wrapper,
      fld_form =  this.wrapper.querySelector("custom-scroll"),
      aerjaer = this,    
      restm =  this.wrapper.querySelector(" p.msg"),
      xhr = new XMLHttpRequest(),
      footer =  this.wrapper.querySelector("fotter"),
      inputs = this.wrapper.querySelectorAll("input"),
      data = new FormData();
    data.append("fn", window.btoa(fld_name));
    data.append("fe", window.btoa(fld_email));
    data.append("fm", window.btoa(fld_msg));
    xhr.open("POST", "/contact", true);
    //xhr.setRequestHeader("Authorization", `Bearer ${window.stmp}`);
     xhr.onload = function () {
      const res = this.responseText;
      var rest = "";
      fld_form.classList.remove("cants");
      restm.textContent = "";
      if (res == "yes") {
        const df = fld_form,
        i_icon = document.createElement("icon-i");
     
        if (df.classList.contains("yes")) {
          df.classList.remove("yes");
        }
        i_icon.setAttribute("style",`display: block !important;  font-size: 50px;`);
        i_icon.setAttribute('class','emoji-laughing-fill');
        restm.appendChild(i_icon);
        restm.appendChild(document.createElement("br"));
        restm.appendChild(document.createTextNode("Thank you for contacting me!"));
        const br = document.createElement("br"),
          span = document.createElement("span");
        br.classList.add("no_hide");
        restm.appendChild(document.createElement("br")); 
        span.textContent = "Click here";
        span.onclick = () => { 
          fld_form.classList.remove("send_yes");
          restm.textContent = "";
          aerjaer.reset();
        };
        footer.removeAttribute("style");
        restm.appendChild(span);

        aerjaer.removeAttribute("class");
        aerjaer.sendBtn.textContent = "Send message";

        rest =
          '<i class="bi bi-emoji-laughing"></i><br>Thank you for contacting me!<br class="no_hide">If you send again? <span onclick="welcomer.send_again();">Click here</span>.';
      } else {
        const df = fld_form,
        i_icon = document.createElement("icon-i");
        if (df.classList.contains("yes")) {
          df.classList.remove("yes");
        }
        i_icon.setAttribute("style",`display: block !important;  font-size: 50px;`);
        i_icon.setAttribute('class','bi-emoji-frown-fill');
        restm.appendChild(i_icon);
        restm.appendChild(document.createElement("br"));
        restm.appendChild(document.createTextNode("Email is not sendet. Failed..."));
        const br = document.createElement("br"),
          span = document.createElement("span");
        br.classList.add("no_hide");
        restm.appendChild(document.createElement("br")); 
        span.textContent = "Click here";
        span.onclick = () => { 
          fld_form.classList.remove("send_yes");
          restm.textContent = ""; 
        };
        footer.removeAttribute("style");
        restm.appendChild(span);


        aerjaer.setAttribute("class","error");
        aerjaer.sendBtn.textContent = "Send message - Try Again";
        rest =
          '<icon-i class="bi bi-emoji-frown-fill"></icon-i><br>Email is not sendet. Failed...<br> Try again? <span onclick="welcomer.send_email_c();">Click here</span>.';
      }
      // restm.innerHTML = rest;
      fld_form.classList.add("send_yes");
    };
    xhr.send(data);
    }
    
    close(){
      this.wrapper.removeAttribute("style");
      this.wrapper.querySelector("input");
      this.reset();
    }

    open(){
      const ftihs = this;
      
        ftihs.wrapper.style.transform = 'unset';
        ftihs.removeAttribute("style");
      
    }
  
    connectedCallback() {
      const style = document.createElement("style");
      style.textContent = `
       ${mainss_import}

       .h5_div img {
       margin-right:0px;
       }
       .h5_div {
    display: flex;
    align-items: center;
    align-content: center;
}

  .contanct_frm,footer {
backdrop-filter: blur(2px);
    }

    * {
          overflow:hidden !important;
          }
  

          .contanct_frm.actives custom-scroll {
          bottom:0px;
          }



          @media only screen and (max-width: 700px) {
    .contanct_frm {
        top: 0px;
        max-height: 90%;
        min-height: 90%;
        height: 90%;
    }
    }

    .contanct_frm custom-scroll.send_yes, .contanct_frm form.send_yes {
        justify-content: center !important;
    }

    .h5_div {
        align-items: center;
    align-content: center;
    justify-content: space-between;
    }

    button#sendbtn.error {
    
    border-color: red;
    color: red;
    background: #ff00002e;
}

.contanct_frm {
      height: 90%;
    min-height: 90%;
    max-height: 90%;
    top: 0px;
    margin: auto;
    margin-right: 0px;

}

.contanct_frm textarea:not(:hover,:focus) ,
.contanct_frm input:not(:hover,:focus) {
    border-color: #ffffff42;
}
      `;
   
      this.wrapper.className = "contanct_frm";
  
      const h5_div = document.createElement("div");
      h5_div.className = "h5_div";
  
      const logo = document.createElement("img");
      logo.src = "/svg_logo_backscr_img";
      logo.loading = "lazy";
      logo.className = "logo_backscr_img_cnt";
      logo.alt = "Loading";
      
 
  
      const inboxIcon = document.createElement("icon-i");
      // inboxIcon.className = "bi bi-inbox";
      inboxIcon.setAttribute('class',"bi-inbox");

      const closeIcon = document.createElement("icon-i");
      closeIcon.className = "closec x-lg";
      // closeIcon.name("x-lg");
      closeIcon.setAttribute('style',` float: right; width: 25px; text-align: center;`);
closeIcon.title = "Close";
closeIcon.addEventListener("click",()=> this.close());
      const contact_span = document.createElement("span");
      // bi bi-inbox
      contact_span.appendChild(inboxIcon);
      contact_span.appendChild(document.createTextNode(" Contact me"));
      h5_div.appendChild(logo);
      h5_div.appendChild(contact_span);
      // h5_div.appendChild(document.createTextNode(" Contact me "));
      h5_div.appendChild(closeIcon);
  
      const form = document.createElement("custom-scroll");
   
      form.autocomplete = "off";
  
      const msg = document.createElement("p");
      msg.className = "msg";
      form.appendChild(msg);
  
      const createInputBlock = (labelText, id, type, placeholder) => {
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = labelText;
        const icon = document.createElement("icon-i");
        icon.className = `input_icon bi ${id === 'fname' ? 'bi-quote' : 'bi-envelope'}`;
        const input = document.createElement("input");
        input.type = type;
        input.id = id;
        input.name = id;
        input.placeholder = placeholder;
        form.appendChild(label);
        // form.appendChild(icon);
        form.appendChild(input);
        return input;
      };
  
      const nameInput = createInputBlock("Full Name", "fname", "text", "Your name..");
      const emailInput = createInputBlock("Your Email", "lname", "email", "Your Email..");
  
      const messageLabel = document.createElement("label");
      messageLabel.setAttribute("for", "subject");
      messageLabel.className = "message_lenght";
      messageLabel.textContent = "Message";
  
      const messageTextarea = document.createElement("textarea");
      messageTextarea.id = "subject";
      messageTextarea.name = "subject";
      messageTextarea.placeholder = "Your message...";
      messageTextarea.style.height = "200px";
      form.appendChild(messageLabel);
      form.appendChild(messageTextarea);
  
      const captchaLabel = document.createElement("label");
      captchaLabel.setAttribute("for", "norobot");
      captchaLabel.textContent = "Solve math problem. I'm not a robot";
  
      const captchaInput = document.createElement("input");
      captchaInput.type = "number";
      captchaInput.id = "norobot";
      captchaInput.name = "norobot";
      form.appendChild(captchaLabel);
      form.appendChild(captchaInput);

     
  
      const footer = document.createElement("fotter");
      this.sendBtn.type = "button";
      this.sendBtn.id = "sendbtn";
      this.sendBtn.textContent = "Send message";
      footer.appendChild(this.sendBtn);
  
      this.wrapper.appendChild(h5_div)
      this.wrapper.appendChild(form);
      this.wrapper.appendChild(footer);
      this.shadowRoot.append(style, this.wrapper);
  
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      captchaInput.placeholder = `${num1} + ${num2} = ?`;
      captchaInput.addEventListener("keyup", ()=>{
        const result = num1 + num2;  
        if(result == captchaInput.value){
          footer.style.setProperty(
            "transform",
            "unset",
            "important"
          );
          form.classList.add('actives');
        } else{
          form.classList.remove('actives');
          footer.removeAttribute("style");
        }
      });
      const th = this,
      sendBtn = this.sendBtn;
      sendBtn.addEventListener("click", async () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageTextarea.value.trim();
        const captcha = parseInt(captchaInput.value);
  
        if (!name || !email || !message || isNaN(captcha)) {
          sendBtn.textContent = "Please fill all fields correctly.\n And try again.";
          sendBtn.classList.add("error");
          return;
        }
  
        if (captcha !== num1 + num2) {
          sendBtn.classList.add("error");
          sendBtn.textContent = "Wrong math answer!";
          return;
        }
  
        const payload = { name, email, message };
  
        th.send(name,email,message,captcha);
      });
    }
  });
 

}

if(!customElements.get('custom-select')){
customElements.define('custom-select', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this._value = '';
    this._label = '';

    const style = `
      <style>
        .select {
          position: relative;
          user-select: none;
          font-family: sans-serif;
        }

        .selected {
          background: #f0f0f0;
          padding: 10px;
          border: 1px solid #ccc;
          cursor: pointer;
        }

        .options {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #ccc;
          display: none;
          max-height: 150px;
          overflow-y: auto;
          z-index: 10;
        }

        .options.open {
          display: block;
        }

        .options div {
          padding: 10px;
          cursor: pointer;
        }

        .options div:hover {
          background: #eee;
        }
      </style>
    `;

    this.shadowRoot.innerHTML = `${style}
      <div class="select">
        <div class="selected">Select...</div>
        <div class="options"></div>
      </div>
    `;
  }

  connectedCallback() {
    this._selected = this.shadowRoot.querySelector('.selected');
    this._options = this.shadowRoot.querySelector('.options');
    this._selectBox = this.shadowRoot.querySelector('.select');

    this._selected.addEventListener('click', () => {
      this._options.classList.toggle('open');
    });

    // Close when clicked outside
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target) && !this.shadowRoot.contains(e.target)) {
        this._options.classList.remove('open');
      }
    });

    // Init from <option> children
    const options = Array.from(this.querySelectorAll('option'));
    this._options.innerHTML = ''; // clear

    options.forEach(opt => {
      const div = document.createElement('div');
      div.textContent = opt.textContent;
      div.dataset.value = opt.value;
      this._options.appendChild(div);

      if (opt.hasAttribute('selected')) {
        this._setValue(opt.value, opt.textContent);
      }

      div.addEventListener('click', () => {
        this._setValue(opt.value, opt.textContent);
        this._options.classList.remove('open');
        this.dispatchEvent(new Event('change'));
      });
    });

    // Ako ništa nije selected, koristi prvi
    if (!this._value && options.length > 0) {
      const first = options[0];
      this._setValue(first.value, first.textContent);
    }
  }

  _setValue(val, label) {
    this._value = val;
    this._label = label;
    this._selected.textContent = label;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    const option = this.querySelector(`option[value="${val}"]`);
    if (option) {
      this._setValue(val, option.textContent);
    }
  }
});
} 

  if (!customElements.get("pdf-viewer")) {
    customElements.define(
      "pdf-viewer",
      class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
          this.zoom = 1;
        }

        setupObserver() {
          const timeouts = new WeakMap();

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                const img = entry.target;

                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                  img.classList.add("active");

                  if (img.hasAttribute("data-src") && !timeouts.has(img)) {
                    const timeout = setTimeout(() => {
                      img.src = img.getAttribute("data-src");
                      img.removeAttribute("data-src");
                      img.style.opacity = 0;
                      img.onload = function () {
                        img.style.opacity = 1;

                        img.removeAttribute("style");
                      };
                      timeouts.delete(img);
                    }, 500);

                    timeouts.set(img, timeout);
                  }
                } else {
                  img.classList.remove("active");

                  if (timeouts.has(img)) {
                    clearTimeout(timeouts.get(img));
                    timeouts.delete(img);
                  }
                }
              });
            },
            {
              root: this.shadowRoot.getElementById("viewer"),
              threshold: [0.5],
            }
          );

          const imgs = this.shadowRoot.querySelectorAll(".viewer img");
          imgs.forEach((img) => observer.observe(img));
        }

        connectedCallback() {
          const src = this.getAttribute("src");
          const shadow = this.shadowRoot;

          // === Style ===
          const style = document.createElement("style");
          style.textContent = `
          ${CDN_URL_BOOSTRAP_ICONS_STRCSS}
        


           :host {
            display: block;
            font-family: sans-serif;
            color: white;
            max-width: 100%;
            height: 450px;
            padding: 20px;
          }

           * {
          overflow:hidden !important;
          }
  

          .container {
           border: 2px solid #aaa;
border-radius: 8px;
padding: 10px;
background: rgba(255, 255, 255, 0.2);
display: -webkit-box;
display: -ms-flexbox;
display: flex
;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
height: calc(100% - 25px);
position: relative;
-webkit-backdrop-filter: blur(1px);
backdrop-filter: blur(1px);
      }


.header {
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #aaa;
padding: 6px 10px;
font-weight: bold;
color: white;
}


.header .title {
flex: 1;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
padding-right: 10px;
}


        /*
          .header {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            border-bottom: 1px solid #aaa;
            padding-bottom: 6px;
            margin-bottom: 10px;
            color: white;
            font-weight: bold;
          } */
  
          .btns {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            gap: 6px;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
          }
  
          button {
            background: transparent;
            color: white;
            border: 1px solid #aaa;
            border-radius: 4px;
            padding: 4px 10px;
            font-size: 1.1em;
            cursor: pointer;
            -webkit-transition: border-color 0.3s;
            -o-transition: border-color 0.3s;
            transition: border-color 0.3s; 
          }
  
          button:hover {
            border-color: white;
          }
  
          #counter { 
            margin-left: 8px;
            color: #ccc;
          }
  
          .viewer {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            gap: 10px;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                    flex-grow: 1;
            height: 100%;
            overflow-y: auto;
            padding-right: 6px;
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
          }


          .viewer img.active {
            opacity: 1;
          }

  
          .viewer img {
            border: none;
            border-radius: 4px;
            -webkit-transition:   .3s ;
            -o-transition:   .3s ;
            transition:   .3s ;
            max-width: 100%;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
-webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) !important;
enable-background: new 0 0 512 512 !important;
height: 90dvh;
margin: 10px auto;
display: block;
background: white;
object-fit: contain;
          }

          @media only screen and (min-width: 600px) {

                  .viewer img {
    display: block;
    margin: 10px auto;

    -o-object-fit: scale-down;
       object-fit: scale-down;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;

      }         
}
  
.viewer:hover img {
opacity:0.7;
}

.viewer:hover img:hover {
opacity:1;}

          .empty {
            color: #999;
            font-style: italic;
            text-align: center;
            padding: 30px 10px;
          }



          span#filename { 
              flex: 1;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
padding-right: 10px;
          }

             span#filename i:not(.bi-fullscreen),
             span#filename icon-i:not(.bi-fullscreen) {
              margin-right: 10px;
             }

               .header icon-i.bi-fullscreen,
           .header i.bi-fullscreen {

              background: rgba(0, 0, 0, 0.639);
              width: 20px;
              display: flex;
              height: 20px;
              align-items: center;
              justify-content: center;align-content: center;text-align: center;border-radius: 2px;

             }
        `;

          this.style.height = "80dvh";

          // === Layout ===
          const container = document.createElement("div");
          container.className = "container";

          const header = document.createElement("div");
          header.className = "header";

          const filenameSpan = document.createElement("span");
          filenameSpan.id = "filename";

          const i_pdf_icon = document.createElement("icon-i");
          i_pdf_icon.setAttribute("class", "bi bi-filetype-pdf");

          filenameSpan.appendChild(i_pdf_icon);
          filenameSpan.appendChild(document.createTextNode("Loading name..."));

          const btns = document.createElement("div");
          btns.className = "btns";

          const zoomOutBtn = document.createElement("button");
          zoomOutBtn.textContent = "−";

          const zoomInBtn = document.createElement("button");
          zoomInBtn.textContent = "+";

          const counter = document.createElement("span");
          counter.id = "counter";
          counter.textContent = "Loading...";

          btns.appendChild(zoomOutBtn);
          btns.appendChild(zoomInBtn);
          btns.appendChild(counter);

          const fullscreenBtn = document.createElement("icon-i");
          fullscreenBtn.setAttribute("class", "bi bi-fullscreen");

          fullscreenBtn.addEventListener("click", () => {
            const el = this.shadowRoot.host;

            if (!document.fullscreenElement) {
              el.requestFullscreen?.() ||
                el.webkitRequestFullscreen?.() ||
                el.msRequestFullscreen?.();
            } else {
              document.exitFullscreen?.() ||
                document.webkitExitFullscreen?.() ||
                document.msExitFullscreen?.();
            }
          });

          this.addEventListener("keydown", (e) => {
            const el = this.shadowRoot.host;

            if (e.key === "F11") {
              e.preventDefault();
              if (!document.fullscreenElement) {
                try {
                  el.requestFullscreen?.();
                } catch (Ed) {}
              } else {
                try {
                  document.requestFullscreen?.();
                } catch (Ed) {}
              }
            }
          });

          document.addEventListener("fullscreenchange", () => {
            if (document.fullscreenElement) {
              fullscreenBtn.setAttribute("class", "bi bi-fullscreen-exit");
            } else {
              fullscreenBtn.setAttribute("class", "bi bi-fullscreen");
            }
          });

          document.addEventListener("webkitfullscreenchange", () => {
            if (document.webkitFullscreenElement) {
              fullscreenBtn.setAttribute("class", "bi bi-fullscreen-exit");
            } else {
              fullscreenBtn.setAttribute("class", "bi bi-fullscreen");
            }
          });

          header.appendChild(filenameSpan);

          header.appendChild(fullscreenBtn);
          header.appendChild(counter);

          const viewer = document.createElement("custom-scroll");
          viewer.className = "viewer";
          viewer.id = "viewer";

          container.appendChild(header);
          container.appendChild(viewer);
          shadow.appendChild(style);
          shadow.appendChild(container);

          // === Store Elements ===
          this.viewerEl = viewer;
          this.filenameEl = filenameSpan;
          this.counterEl = counter;

          // === Zoom Events ===
          zoomInBtn.addEventListener("click", () => {
            this.zoom += 0.1;
            this.render();
          });

          zoomOutBtn.addEventListener("click", () => {
            this.zoom = Math.max(0.2, this.zoom - 0.1);
            this.render();
          });

          // === Load JSON ===
          if (!src) {
            const msg = document.createElement("div");
            msg.className = "empty";
            msg.textContent = "⚠️ Nema učitanog JSON fajla.";
            viewer.appendChild(msg);
            return;
          }

          const ttt = this;

          fetch(src)
            .then((res) => res.json())
            .then((data) => {
              if (!data || !data.length) {
                const msg = document.createElement("div");
                msg.className = "empty";
                msg.textContent = "⚠️ Nema stranica u PDF-u.";
                viewer.appendChild(msg);
                return;
              }

              this.pages = data;
              /*              this.filenameEl.textContent = `📄 ${data[0].name.split("_page_")[0]}`;
               */
              this.filenameEl.textContent = "";
              const i_pdf_icon = document.createElement("icon-i");
              i_pdf_icon.setAttribute("class", "bi bi-filetype-pdf");

              filenameSpan.appendChild(i_pdf_icon);
              filenameSpan.appendChild(
                document.createTextNode(ttt.getAttribute("title"))
              );

              this.render();
              this.setupObserver();
            })
            .catch((err) => {
              const msg = document.createElement("div");
              msg.className = "empty";
              msg.textContent = "❌ Greška pri učitavanju JSON-a.";
              viewer.appendChild(msg);
              console.error(err);
            });
        }

        render() {
          if (!this.viewerEl || !this.pages) return;
          this.viewerEl.innerHTML = "";

          // Prethodni observer, ako postoji
          this.observer?.disconnect();

          // Novi observer za aktivnu stranu
          this.observer = new IntersectionObserver(
            this.onVisibleImage.bind(this),
            {
              root: this.viewerEl,
              threshold: 0.5,
            }
          );

          this.pages.forEach((p, index) => {
            const img = document.createElement("img");
            img.setAttribute("data-src", p.path);
            img.src = "/pdf_viewer_logo";
            img.loading = "lazy";
            img.alt = `Double click to this page number ${index} for Zoom.`;

            img.dataset.index = index;
            img.setAttribute(
              "style",
              `   
object-fit: scale-down;
filter: grayscale(1) !important;`
            );
            img.addEventListener("dblclick", () => {
              const ImagePreview_src = document.createElement("image-preview");
              ImagePreview_src.src(img.src);
              document.body.appendChild(ImagePreview_src);
            });
            this.viewerEl.appendChild(img);
            this.observer.observe(img);
          });

          this.counterEl.textContent = `1 / ${this.pages.length}`;
        }

        onVisibleImage(entries) {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index);
              this.counterEl.textContent = `${index + 1} / ${
                this.pages.length
              }`;
              break;
            }
          }
        }
      }
    );
  }

  if (!customElements.get("custom-scroll")) {
    customElements.define("custom-scroll", CustomScroll);
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
 

  if(!customElements.get('editor-wrapper-v2')){
  customElements.define('editor-wrapper-v2',
  class   extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
            flex-direction: row;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
          }
          #editor-container {
            flex: 1;
            height: 100%;
          }
          #preview-container {
            flex: 1;
            height: 100%;
            border: none;
          }
          #logContainer {
            position: absolute;
            bottom: 0;
            width: 100%;
            background: #222;
            color: white;
            max-height: 200px;
            overflow-y: auto;
            font-family: monospace;
            font-size: 12px;
            border-top: 1px solid #444;
          }
        </style>
        <div id="editor-container"></div>
        <iframe id="preview-container" sandbox="allow-scripts allow-same-origin"></iframe>
        <div id="logContainer"></div>
      `;
    }
  
    connectedCallback() {
      this.initMonaco();
    }
  
    initMonaco() {
      if (!window.monaco) {
        const loader = document.createElement('script');
        loader.src = 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs/loader.js';
        loader.onload = () => this.setupEditor();
        document.head.appendChild(loader);
      } else {
        this.setupEditor();
      }
    }
  
    setupEditor() {
      const container = this.shadowRoot.getElementById('editor-container');
  
      require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs' } });
      require(['vs/editor/editor.main'], () => {
        this.editor = monaco.editor.create(container, {
          value: `<!DOCTYPE html>
  <html>
    <head><meta charset="utf-8"></head>
    <body><h1>Hello</h1></body>
  </html>`,
          language: 'html',
          theme: 'vs-dark',
          automaticLayout: true,
        });
  
        this.editor.onDidChangeModelContent(() => this.updatePreview());
        this.updatePreview();
      });
    }
  
    updatePreview() {
      const code = this.editor.getValue();
      const preview = this.shadowRoot.getElementById('preview-container');
      preview.srcdoc = code;
    }
  });
}
  

  window.editorsdk = function(){
     welcomer.editor.callEditor(1);
  }
  
  if (!customElements.get('icon-if')) {
    customElements.define('icon-if', class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'});

            // SVG wrapper i stil
            this.styleElement = document.createElement('style');
            this.styleElement.textContent = `
  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: middle;
  }
`;

            this.svg = null;
            this.shadowRoot.appendChild(this.styleElement);
 
        }

        name(iconName) {
            this.shadowRoot.querySelectorAll('svg').forEach(e => e.remove());
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            switch (iconName) {
              case 'bi-inbox':
              this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              this.svg.setAttribute('viewBox', '0 0 16 16');
              this.svg.setAttribute('class', 'bi bi-rulers'); 
              path.setAttribute('d', 'M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z');

              this.svg.appendChild(path);
              this.shadowRoot.appendChild(this.svg);
               

                break;
              case 'x-lg':
                this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                this.svg.setAttribute('viewBox', '0 0 16 16');
                this.svg.setAttribute('class', 'bi bi-rulers');

                path.setAttribute('d', 'M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z');

                this.svg.appendChild(path);
                this.shadowRoot.appendChild(this.svg);
                break;
              case 'emoji-frown-fill"':
                this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                this.svg.setAttribute('viewBox', '0 0 16 16');
                this.svg.setAttribute('class', 'bi bi-rulers');

                path.setAttribute('d', 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8');

                this.svg.appendChild(path);
                this.shadowRoot.appendChild(this.svg);
                break;
              case 'emoji-laughing-fill':
                this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                this.svg.setAttribute('viewBox', '0 0 16 16');
                this.svg.setAttribute('class', 'bi bi-rulers');

                 path.setAttribute('d', 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5s-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5m5.331 3a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5m-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5s-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.23');

                this.svg.appendChild(path);
                this.shadowRoot.appendChild(this.svg);
              break;
                case 'rulers':
                    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    this.svg.setAttribute('viewBox', '0 0 16 16');
                    this.svg.setAttribute('class', 'bi bi-rulers');

                     path.setAttribute('d', 'M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1z');

                    this.svg.appendChild(path);
                    this.shadowRoot.appendChild(this.svg);
                    break;

                default:
                    console.warn(`Icon "${iconName}" not found.`);
            }
        }
    }
    );
} 

 
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
        #container {
          display: flex;
          height: 100%;
          width: 100%;
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
          height: 100%;
          border: none;
          background: white;
          min-width: 100px;
          max-width: 90%;
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
      `;

      const container = document.createElement("div");
      container.id = "container";
      const editor = document.createElement("div");
      editor.id = "editor";
      const separator = document.createElement("div");
      separator.id = "separator";
      const iframe = document.createElement("iframe");
      iframe.id = "preview"; 
      const size_r = document.createElement("size_r");
      size_r.setAttribute("style", "display:none;");
      container.appendChild(size_r);
      container.appendChild(editor);
      container.appendChild(separator);
      container.appendChild(iframe);
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(container);
      this.enableResize();
      this.loadEditor();
      this.initDB();
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
        this.shadowRoot.querySelector("#container").classList.add('dragging');
        const containerRect = this.shadowRoot.querySelector('#container').getBoundingClientRect();
        let newEditorWidth = e.clientX - containerRect.left - 5;
        let newPreviewWidth = containerRect.right - e.clientX;
        const maxEditorWidth = containerRect.width * 0.9;
        const maxPreviewWidth = containerRect.width * 0.9;
        newEditorWidth = Math.min(newEditorWidth, maxEditorWidth);
        newPreviewWidth = Math.min(newPreviewWidth, maxPreviewWidth);
        editor.style.flex = 'none';
        preview.style.flex = 'none';
        editor.style.width = `${newEditorWidth}px`;
        preview.style.width = `${newPreviewWidth}px`;
        this.shadowRoot.querySelector("size_r").style.display = 'block';
        this.shadowRoot.querySelector("size_r").textContent = "";
        const i = document.createElement("icon-i");
        i.classList.add("rulers");
        this.shadowRoot.querySelector("size_r").appendChild(i);
        this.shadowRoot.querySelector("size_r").appendChild(document.createTextNode(`${this.shadowRoot.querySelector("iframe").offsetWidth}px x ${this.shadowRoot.querySelector("iframe").offsetHeight}px`));
        if (this.editor) this.editor.layout();
      };

      const stopResize = () => {
        isResizing = false;
        if (this.shadowRoot.querySelector("#container").classList.contains("dragging")) {
          this.shadowRoot.querySelector("#container").classList.remove('dragging');
        }
        this.shadowRoot.querySelector("size_r").textContent = "";
        this.shadowRoot.querySelector("size_r").removeAttribute("style");
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

    updatePreview() {
      const content = this.editor.getValue();
      const iframe = this.shadowRoot.querySelector('#preview');
      const previewContent = `<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Preview</title></head><body>${content}</body></html>`;
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


if (!customElements.get('icon-i')) {
  customElements.define('icon-i', class extends HTMLElement {
    static get observedAttributes() {
      return ['name', 'class'];
    }

    static get is_poligony() {
      return false; // koristi path kao Bootstrap icons
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = `
           :host {
          display: inline;
          user-select: none;
          cursor: default; 
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none; 
          vertical-align: -.125em;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }


      span {
      display: inline-flex;
      
      }

        svg {
          width: 1em;
          height: 1em;
          fill: currentColor;
          vertical-align: middle;
        }
      `;

      this.shadowRoot.appendChild(style);
      this.container = document.createElement('span');
      this.shadowRoot.appendChild(this.container);
    }

    connectedCallback() {
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.getAttribute('name') ?? this.getAttribute('class') ?? '');
      this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.setAttribute('aria-label', this.getAttribute('name') ?? this.getAttribute('class') ?? '');
        this.render();
      }
    }

    render() {
      this.container.textContent = '';  

      const rawAttr = this.getAttribute('name') ?? this.getAttribute('class') ?? '';
      const matchedId = this.extractIconId(rawAttr);
      if (!matchedId) {
        this.container.textContent = rawAttr;
        return;
      }

      const symbols = window.svg_paths ?? [];
      const match = symbols.find(sym => this.cleanId(sym.id) === matchedId);
      if (!match) {
        this.container.textContent = matchedId;
        return;
      }

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', match.viewBox || '0 0 16 16');
      svg.setAttribute('class', matchedId);

      (match.paths || []).forEach(pathData => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData.d);
        svg.appendChild(path);
      });

      this.container.appendChild(svg);
    }

    cleanId(id) {
      return id
        .replace(/^\d+-/, '')           
        .replace(/\bbi-?/g, '')          
        .replace(/\bfab-?/g, '')      
        .replace(/\bfa-?/g, '')      
        .replace(/\bfas-?/g, '')       
        .trim();      
    }

    extractIconId(value) {
      if (!value) return null;

      const parts = value.split(/\s+/);  
      const symbols = window.svg_paths ?? [];

      for (let part of parts) {
        const cleaned = this.cleanId(part);
        if (symbols.some(sym => this.cleanId(sym.id) === cleaned)) {
          return cleaned;
        }
      }

      return this.cleanId(parts[0]);
    }
  });
}



if(!customElements.get('rotating-border')){
 customElements.define('rotating-border', class   extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const content = document.createElement('div');
    content.className = 'content';
    content.textContent = this.textContent || 'Rotating Border';

    const style = document.createElement('style');
    style.textContent = `
  .wrapper {
    position: relative;
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
    display: inline-block;
  }

  .wrapper::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: conic-gradient(
      red,
      orange,
      yellow,
      green,
      cyan,
      blue,
      violet,
      red
    );
    z-index: 0;
    animation: rotate 4s linear infinite;
    border-radius: 12px;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    padding: 5px;
  }

  .content {
    position: relative;
    z-index: 1;
    background: white;
    border-radius: 8px;
    padding: 20px;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

    wrapper.appendChild(content);
    this.shadowRoot.append(style, wrapper);
  }
})
}


if(!customElements.get('video-player-v2')){
 customElements.define('video-player-v2', class   extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this._prevVolume = 1;
    this.observer = null;
    this.video = document.createElement("video");

  }
  disconnectedCallback() {
    if (this._onKeyDown) {
      document.removeEventListener('keydown', this._onKeyDown);
      this._onKeyDown = null;
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  connectedCallback() {
    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {



      }
    });

    this.observer.observe(this.shadowRoot, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true
    });

    const src = this.getAttribute('src') || this.getAttribute("data-src");
    const poster = this.getAttribute('poster') || this.getAttribute('data-poster');
    const autoplay = this.hasAttribute('autoplay');
    const loop = this.hasAttribute('loop');
    
 
    const style = document.createElement('style');
    style.textContent = ` 




:host {

display: -webkit-box;

display: -ms-flexbox;

display: flex;
max-width: 100%;
position: relative;
font-family: sans-serif;
background: black;
border-radius: 10px;
min-height: 250px;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;


}




    video {
      width: 100%;
      height: 100%;
      -o-object-fit: scale-down;
         object-fit: scale-down;
      background: black;
      border-radius: 0px;
          margin: auto;

          transition: .3s;
              position: absolute;
    left: 0px;
    top: 0px;
    }
    .video-feedback {

    position: absolute;
top: 50%;
left: 50%;
/* transform: translate(-50%, -50%) scale(1); */
font-size: 4dvh;
color: white;
opacity: 0;
pointer-events: none;
-webkit-transition: opacity 0.4s ease, -webkit-transform 0.4s ease;
transition: opacity 0.4s ease, -webkit-transform 0.4s ease;
-o-transition: opacity 0.4s ease, transform 0.4s ease;
transition: opacity 0.4s ease, transform 0.4s ease;
transition: opacity 0.4s ease, transform 0.4s ease, -webkit-transform 0.4s ease;
z-index: 20;
height: 100%;
width: 100%;
margin: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex
;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-ms-flex-line-pack: center;
    align-content: center;
left: 0%;
top: 0%;
pointer-events: none;
background: -o-radial-gradient(#00000070, transparent);
background: radial-gradient(#00000070, transparent);
border-radius: 10px !important;

    }
    .video-feedback.show {
      opacity: 1; 
    }
    .controls {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      gap: 4px;
      padding: 8px 12px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: white;
      z-index: 10;
      background-image: -o-linear-gradient(bottom, black, transparent);
      background-image: -webkit-gradient(linear, left bottom, left top, from(black), to(transparent));
      background-image: linear-gradient(360deg, black, transparent);
   filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) ;
-webkit-filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4)) ;
enable-background: new 0 0 512 512 ;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
   
      }
    .controls-row {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      gap: 8px;
    }
    .controls-row > div:first-child {
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      gap: 8px;
    }
    .progress-time {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      gap: 4px;
      font-size: 0.8em;
    }




    button {
      background: none;
      border: none;
      color: white;
      font-size: 1.4em;
      cursor: pointer;
      position: relative;
    }
    .volume {
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      gap: 4px;
      position: relative;
    }   

    .volume.no-audio {
      opacity: 0.5;
    }

    .volume.no-audio * {
    pointer-events:none;
    }

    img#poster {
    
    width: 100%;
    height: 100%;
    background: black;
    object-fit: scale-down;
    position: absolute;
    left: 0px;
    top: 0px;
    
    }


`;

function hasAudio(videoElement) {
  return new Promise((resolve) => { 
    if (videoElement.readyState >= 1) {
      resolve(checkTracks(videoElement));
    } else {
      videoElement.addEventListener('loadedmetadata', () => {
        resolve(checkTracks(videoElement));
      }, { once: true });
    }
  });

   function checkTracks(video)     { 
    if (typeof video.mozHasAudio !== "undefined") {
      return video.mozHasAudio;
    }
 
    if (video.webkitAudioDecodedByteCount !== undefined) {
      return video.webkitAudioDecodedByteCount > 0;
    }
 
    if (video.audioTracks && video.audioTracks.length) {
      return true;
    }

    return false;
  }
}

    const root = document.createElement("div"); 
    const video = this.video;
    const img_poster = document.createElement("img");
    img_poster.id = "poster";
    video.id = 'video';
    if (poster) video.poster = poster;
    if (autoplay) video.setAttribute('autoplay', '');
    if (loop) video.setAttribute('loop', '');
    const source = document.createElement('source');
    source.src = src; 
    
    if (poster) { 
      img_poster.src  = poster;
      
    root.appendChild(      img_poster);

    }
    source.type = 'video/mp4';
    video.appendChild(source);
    video.style.opacity = '0';
    video.style.transform = 'scale(0);';

    video.appendChild(document.createTextNode('Your browser does not support the video tag.'));

    const feedback = document.createElement('div');
    feedback.className = 'video-feedback';

    const controls = document.createElement('div');
    controls.className = 'controls';
    const progressBar = document.createElement('progress-bar'),
      bac_mask = document.createElement("bac-mask");
    controls.appendChild(bac_mask);
    controls.appendChild(progressBar);


    const controlsRow = document.createElement('div');
    controlsRow.className = 'controls-row';

    const left = document.createElement('div');
    const playBtn = document.createElement('button');
    playBtn.className = 'play';
    playBtn.title = 'Play/Pause';
    playBtn.innerHTML = '<icon-i name="play-fill"></icon-i>';

    const volume = document.createElement('div');
    volume.className = 'volume';
    const muteBtn = document.createElement('button');
    muteBtn.className = 'mute';
    muteBtn.title = 'Mute/Unmute';
    muteBtn.innerHTML = '<icon-i name="volume-up-fill"></icon-i>';
    const volumeRange = document.createElement('volume-range');
    volume.appendChild(muteBtn);
    volume.appendChild(volumeRange);


    if(!hasAudio(video)){
      volume.classList.add(".no-audio");
    }

    let volumeHoverTimeout;

    volume.addEventListener('mouseenter', () => {
      clearTimeout(volumeHoverTimeout);
      volumeRange.style.display = 'block';
    });

    volume.addEventListener('mouseleave', () => {
      volumeHoverTimeout = setTimeout(() => {
        volumeRange.style.display = 'none';
      }, 300); // malo kašnjenje za prelaz
    });

    volumeRange.addEventListener('mouseenter', () => {
      clearTimeout(volumeHoverTimeout);
      volumeRange.style.display = 'block';
    });

    volumeRange.addEventListener('mouseleave', () => {
      volumeHoverTimeout = setTimeout(() => {
        volumeRange.style.display = 'none';
      }, 300);
    });


    left.appendChild(playBtn);
    left.appendChild(volume);

    const timeDiv = document.createElement('div');
    timeDiv.className = 'progress-time';
    const current = document.createElement('span');
    current.className = 'current-time';
    current.textContent = '0:00';
    const duration = document.createElement('span');
    duration.className = 'duration';
    duration.textContent = '0:00';
    timeDiv.appendChild(current);
    timeDiv.appendChild(document.createTextNode(' / '));
    timeDiv.appendChild(duration);
    timeDiv.appendChild(duration);
    left.appendChild(timeDiv);

    const right = document.createElement('div');
    const subsBtn = document.createElement('button');
    subsBtn.className = 'subtitles';
    subsBtn.title = 'Subtitles';
    subsBtn.innerHTML = '<icon-i name="subtitles"></icon-i>';
    const speedBtn = document.createElement('button');
    speedBtn.className = 'speed';
    speedBtn.title = 'Speed';
    speedBtn.innerHTML = '<icon-i name="gear-fill"></icon-i>';
    const pipBtn = document.createElement('button');
    pipBtn.className = 'pip';
    pipBtn.title = 'Picture-in-Picture';
    pipBtn.innerHTML = '<icon-i name="box-arrow-in-up-right"></icon-i>';
    const fullBtn = document.createElement('button');
    fullBtn.className = 'fullscreen';
    fullBtn.title = 'Fullscreen';
    fullBtn.innerHTML = '<icon-i name="fullscreen"></icon-i>';
    // right.appendChild(subsBtn);
    // right.appendChild(speedBtn);
    right.appendChild(pipBtn);
    right.appendChild(fullBtn);

    controlsRow.appendChild(left);
    // controlsRow.appendChild(timeDiv);
    controlsRow.appendChild(right);
    controls.appendChild(controlsRow);

    this.shadowRoot.appendChild(root);
    // root.appendChild(link);
    root.appendChild(style);
    root.appendChild(video);
    root.appendChild(feedback);
    root.appendChild(controls);
    // this.shadowRoot.append(link, style, video, feedback, controls);

    const progress = progressBar;
    const currentTime = current;
    const durationTime = duration;

    this.shadowRoot.addEventListener("contextmenu", e => e.preventDefault());
    this.shadowRoot.addEventListener("dragstart", e => e.preventDefault());
    this.shadowRoot.addEventListener("selectstart", e => e.preventDefault());

    progress.videoRef = video;

    const formatTime = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
    const showFeedback = icon => {
      feedback.innerHTML = icon;
      feedback.classList.add('show');
      setTimeout(() => feedback.classList.remove('show'), 400);
    };

    

    video.addEventListener('loadedmetadata', () => {
      durationTime.textContent = formatTime(video.duration);
  
    });

    video.addEventListener('timeupdate', () => {
      if (video.hasAttribute("style")) {
        video.removeAttribute("style");     img_poster.remove();
      }

      currentTime.textContent = formatTime(video.currentTime);
      progress.value = video.currentTime / video.duration;
    });

    progress.addEventListener('seek', e => {
      video.currentTime = e.detail * video.duration;
    });

    playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playBtn.innerHTML = '<icon-i name="pause-fill"></icon-i>';
        showFeedback('<icon-i name="pause-circle-fill"></icon-i>');
      } else {
        video.pause();
        playBtn.innerHTML = '<icon-i name="play-fill"></icon-i>';
        showFeedback('<icon-i name="play-circle-fill"></icon-i>');
      }
    });


    video.addEventListener('click', () => playBtn.click());

    video.volume = 1;
    volumeRange.value = 1;

    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      if (video.muted) {
        this._prevVolume = video.volume;
        volumeRange.value = 0;
        video.volume = 0;
      } else {
        video.volume = this._prevVolume || 1;
        volumeRange.value = video.volume;
      }
      muteBtn.innerHTML = video.muted ? '<icon-i name="volume-mute-fill"></icon-i>' : '<icon-i name="volume-up-fill"></icon-i>';
    });

    volumeRange.addEventListener('input', e => {
      const val = parseFloat(e.detail ?? e.target.value);
      video.volume = val;
      video.muted = val === 0;
      muteBtn.innerHTML = video.muted ? '<icon-i name="volume-mute-fill"></icon-i>' : '<icon-i name="volume-up-fill"></icon-i>';
    });

    fullBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        this.shadowRoot.host.requestFullscreen?.();
        fullBtn.innerHTML = '<icon-i name="fullscreen-exit"></icon-i>';
      } else {
        fullBtn.innerHTML = '<icon-i name="fullscreen"></icon-i>';
        document.exitFullscreen?.();
      }
    });

    pipBtn.addEventListener('click', () => {
      if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
        video.requestPictureInPicture?.();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen?.();
      } else if (e.code === 'Space') {
        e.preventDefault();
        playBtn.click();
      }
    });

    [...this.attributes].forEach(attr => this.removeAttribute(attr.name));

  }
})
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



 
function mountApp() {
  if (document.body) {
    document.body.innerHTML = "<app-home></app-home>"; 
    
    return true;
  }
  return false;
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  if (!mountApp()) {
    const observer = new MutationObserver(() => {
      if (mountApp()) observer.disconnect();
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
} else {
  document.addEventListener("DOMContentLoaded", () => {
    if (!mountApp()) {
      const observer = new MutationObserver(() => {
        if (mountApp()) observer.disconnect();
      });

      observer.observe(document.documentElement, { childList: true, subtree: true });
    }
  });
}

})();


/*
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("✅ Service Worker registered", reg))
      .catch((err) =>
        console.error("❌ Service Worker registration failed:", err)
      );
  });
}
*/