'use strict';

const welcomer = {
    lang: [

    ],
    gallery_temp: [],
    infoVa_img: function (event) {
        if (welcomer.gallery_temp.length > 0) {
            welcomer.eronelit_gallery.call_ui(
                welcomer.gallery_temp
            )
        } else {
            var clickedElement = event.target;
            var imgH = new Image();
            imgH.src = clickedElement.getAttribute("src");

            imgH.onload = function () {
                $(imgH).ezPlus({
                    zoomType: 'inner',
                    containLensZoom: true,
                    speed: 10
                });
                $("body").append('<div id="helper_id_helper3"> <p>To view a zoomed image. Hold left click or finger and move slowly.</p> </div><span id="helper_id_helper"><i style="padding-right:2px;" class="bi bi-info-square"></i> For close click ( X ) button.</span><i onclick="welcomer.closeMeIamSad()" class="bi bi-x-lg zoomer_exit"></i>');
            }
        }
    },
    constructor: function () {
        this.isMobile();

        document.querySelector(".Ignoring_me_iframe").onload = function () {
            welcomer.pgloader('yes');
        }

        document.querySelector(".Ignoring_me_iframe").onmousemove = function () {
            welcomer.cursor_hide(this);
        }
        document.querySelector(".Ignoring_me_iframe").onmouseout = function () {
            welcomer.cursor_hide(this);
        }
        document.querySelector(".wallpaperVideo").play();
        this.vdjae();
        this.custom_evjents();
        document.querySelector(".wallpaperVideo").addEventListener("ended", function (v) {
            try {
                v.play();
            } catch (v) { }
        });
        var styleClass = document.createElement("style");
        styleClass.setAttribute("type", "text/css");
        styleClass.setAttribute("data-what", "generated");
        styleClass.innerHTML = "";
        document.querySelectorAll("style").forEach(function (v) {
            styleClass.innerHTML += v.innerHTML;
            v.remove();
        });
        document.head.appendChild(styleClass);

    },
    loop_active: true,
    Dots_color: 196,
    isChrome: /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
    energyAnim: true,
    domain: "/?mnps=dbe&q=",
    div_not_i: 0,
    yesurls: [
        "blog",
        "cv-pdf",
        "tg_channel",
        "gallery",
        "projects",
        "visitcard"
    ],
    cards_links: [
        {
            title: "My CV",
            descr: "Look at my CV",
            icon: "bi bi-file-earmark-person-fill",
            href: {
                f_u: "welcomer.pgloader('/?pages=cv-pdf');",
                f: true,
                target: ""
            },
            num: 0,
            beta: false,
            soon: false
        },
        {
            title: "My projects",
            descr: "Look at my Projects",
            icon: "bi bi-box2-heart",
            href: {
                f_u: "welcomer.pgloader('projects');",
                f: true,
                target: ""
            },
            num: 13,
            beta: false,
            soon: false
        },
        {
            title: "My Visitcard",
            descr: "Visit my Visit card",
            icon: "bi bi-file-earmark-person-fill",
            href: {
                f_u: "welcomer.pgloader('/?pages=visitcard');",
                f: true,
                target: ""
            },
            num: 0,
            beta: false,
            soon: false
        },
        {
            title: "Contact me",
            descr: "Contact me",
            icon: "bi bi-inbox",
            href: {
                f_u: "welcomer.cp();",
                f: true,
                target: "blank"
            },
            num: 0,
            beta: false,
            soon: false
        },
        {
            title: "Blog/News &#128512",
            descr: "Blog/News &#128512",
            icon: "bi bi-rss",
            name: "blog_old",
            visible: "yes",
            href: {
                f_u: "https://blog.eronelit.com/",
                f: false,
                target: "blank"
            },
            num: 323,
            beta: false,
            soon: false
        }, {
            title: "Gallery - Photos",
            descr: "My photos gallery | Comming soon",
            icon: "bi bi-images",
            adiv_gat: "gallery_bundle",
            href: {
                f_u: "welcomer.galleryload();",
                f: true,
                target: "blank"
            },
            num: window.portfolio.gallery,
            beta: false,
            soon: false
        }, {
            title: "Blog",
            descr: "Blog/News &#128512",
            icon: "bi bi-files-alt",
            adiv_gat: "blog_bundle",
            href: {
                f_u: "welcomer.blogloader('all');",
                f: true,
                target: "blank"
            },
            num: window.portfolio.blog,
            beta: false,
            soon: false
        },
        {
            title: "Editor",
            descr: "Html5/css/javascript editor, other languages coming soon...",
            icon: "bi bi-file-code",
            adiv_gat: "blog_bundle",
            href: {
                f_u: 'welcomer.blg_history_replace(`/?p=editor`); welcomer.editor.start();',
                f: true,
                target: "blank"
            },
            num: 0,
            beta: false,
            soon: false
        },
        {
            title: "My Linkedin",
            descr: "Look at my Linkedin Official profile",
            icon: "bi bi-linkedin",
            href: {
                f_u: "https://www.linkedin.com/in/markonikolic98/",
                f: false,
                target: "blank"
            },
            num: 0,
            beta: false,
            soon: false,
        },
        {
            title: "My Github",
            descr: "Look at my Github profile",
            icon: "bi bi-github",
            href: {
                f_u: "https://github.com/Marko9827",
                f: false,
                target: "blank"
            },
            num: 172,
            beta: false,
            soon: false
        },
        {
            title: "My Instagram",
            descr: "Look at my Instagram profile",
            icon: "bi bi-instagram",
            href: {
                f_u: "https://www.instagram.com/nikoliccc02/",
                f: false,
                target: "blank"
            },
            num: 2249,
            beta: false,
            soon: false
        },
        {
            title: "My Deviantart",
            descr: "Look at my Deviantart profile",
            icon: "fab fa-deviantart",
            href: {
                f_u: "https://www.deviantart.com/marko9827",
                f: false,
                target: "blank"
            },
            num: 37,
            beta: false,
            soon: false
        },

        {
            title: "Telegram",
            descr: "Look at my Telegram profile",
            icon: "fab fa-telegram",
            href: {
                f_u: "window.location.href = '/?p=tg_channel';",
                f: true,
                target: "self"
            },
            num: 0,
            beta: false,
            soon: false
        }

    ],
    gallery_delegator: function (dlg = "a") {

        $('#image-popups').magnificPopup({
            delegate: dlg,
            type: 'image',
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = 'mfp-zoom-in';
                }
            },
            closeOnContentClick: true,
            midClick: true
        });

    },
    cp: function () {

        $("iframe.iframe_mask").removeAttr("style");
        const form = $(".contanct_frm  form");
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
            document.querySelector(".contanct_frm #norobot").setAttribute("placeholder", `${f1} + ${f2} = ? - Type and hit enter.`);

            document.querySelector(".contanct_frm #norobot").value = "";
            this.rnd = f1 + f2;
            df.classList.add("open");
        }
        document.querySelector(".contanct_frm #norobot").addEventListener("keyup", function () {
            if (parseInt(document.querySelector(".contanct_frm #norobot").value) == welcomer.rnd) {
                $(".contanct_frm  form").scrollTop($(".contanct_frm  form").height());
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
                if (this.validateEmail(document.querySelector(".contanct_frm #lname").value)) {
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
            if (this.validateEmail(document.querySelector(".contanct_frm #lname").value)) {
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
        } catch (v) { }
    },
    send_again: function () {
        const df = document.querySelector(".contanct_frm"),
            f1 = Math.floor(Math.random() * 10),
            f2 = Math.floor(Math.random() * 10);
        document.querySelector(".contanct_frm #norobot").setAttribute("placeholder", `${f1} + ${f2} = ? - Type and hit enter.`);
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

        var
            contanct_frm = document.querySelector(".contanct_frm "),
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

        xhr.open('POST', '/?mnps=contacts', true);
        xhr.onload = function () {

            const res = this.responseText;
            var rest = "";
            document.querySelector(".contanct_frm").classList.remove("cants");

            if (res == "yes") {
                const df = document.querySelector(".contanct_frm");
                if (df.classList.contains("yes")) {
                    df.classList.remove("yes");
                }
                rest = '<i class="bi bi-emoji-laughing"></i><br>Thank you for contacting me!<br class="no_hide">If you send again? <span onclick="welcomer.send_again();">Click here</span>.';
            } else {
                rest = '<i class="bi bi-emoji-frown-fill"></i><br>Email is not sendet. Failed...<br> Try again? <span onclick="welcomer.send_email_c();">Click here</span>.';
            }
            restm.innerHTML = rest;
            fld_form.classList.add("send_yes");
        }
        xhr.send(data);
    },
    rnd: 0,
    pdf: async function () {
        const H = URL.createObjectURL(await fetch("/?mnps=pdf-d-cv").then(function (v) { return v.blob() })),
            a = document.createElement("a");
        a.href = H;
        a.download = "pdf-cv.pdf";
        a.click();
        setTimeout(() => {
            URL.revokeObjectURL(H);
        }, 1000);
    },
    generateGrid: function () {
        document.querySelector(".pdf_download").addEventListener("click", function () {

            welcomer.pdf();
        });

        document.querySelector(".contanct_frm .h5_div .closec").addEventListener("click", function () {
            welcomer.cp();
        });
        try {
            this.checkisempty();
            document.querySelector(".contanct_frm #fname").addEventListener("keydown", function () {
                welcomer.checkisempty();
            });
            document.querySelector(".contanct_frm #lname").addEventListener("keydown", function () {
                welcomer.checkisempty();
            });
            document.querySelector(".contanct_frm textarea").addEventListener("keydown", function () {
                welcomer.checkisempty();
            });
            document.querySelector(".contanct_frm #norobot").addEventListener("keydown", function () {
                welcomer.checkisempty();
            });
            document.querySelector(".contanct_frm #sendbtn").addEventListener("click", function () {
                welcomer.send_email_c();
            });
        } catch (v) { }
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
        }
        var buttons_box_shadow = document.querySelector("div#buttons");

        this.cards_links.forEach(function (v) {
            const div = document.createElement("div"),
                i = document.createElement("i"),
                a = document.createElement("a"),
                span = document.createElement("span"),
                nnum = document.createElement("div");
            try {
                if (v.visible == "yes") {
                    a.setAttribute("data-iam-hidden", "yes");

                    div.setAttribute("data-iam-hidden", "yes");
                    setTimeout(function () {
                        a.remove();
                        div.remove();

                    }, 100);
                }
            } catch (ear) { }
            if (v.href.f == false) {
                a.href = v.href.f_u;
                a.target = "_blank";

                a.onmouseover = function () {
                    welcomer.bell_over(a);
                }
                a.onmouseout = function () {
                    welcomer.bell_out(a);
                }
                a.classList.add("adiv");
                const adiv_gat = v.blog_bundle || "";
                if (!adiv_gat == "") {
                    a.setAttribute("adiv_gat", adiv_gat);
                }

                a.title = v.descr;
                i.setAttribute("class", v.icon);
                span.classList.add("href_a_span");
                span.innerHTML = v.title;
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
                div.onclick = function () {
                    if ((!v.beta) || (!v.soon)) {
                        if (v.href.f == true) {
                            eval(`${v.href.f_u}`);
                        } else if (v.href.f == "soon") {

                        } else {
                            if (v.href.target = "self") {
                                window.location.href = `${v.href.f_u}`;
                            }
                            if (v.href.target = "blank") {

                                a.href = v.href.f_u;
                                a.target = "_blank";

                            }
                        }
                    }
                };

                div.onmouseover = function () {
                    welcomer.bell_over(div);
                }
                div.onmouseout = function () {
                    welcomer.bell_out(div);
                }
                const adiv_gat = v.adiv_gat || "";
                if (!adiv_gat == "") {
                    div.setAttribute("adiv_gat", adiv_gat);
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

                buttons_box_shadow.appendChild(div);
            }
        });
        document.querySelector(".wallpaperVideo").play();
        document.querySelector(".wallpaperVideo").removeAttribute("style");
        this.vdjae();

    },
    vdjae: async function () {

        const f = document.querySelector(".wallpaperVideo source").getAttribute("src"),
            url = await fetch(f).then((h) => { return h.blob() }).catch(function (v) { });
        const blob = URL.createObjectURL(url);
        document.querySelector(".wallpaperVideo source").setAttribute("src", blob);
    },
    getDataGallery: async function () {

        const response = await fetch("/?mnps=gallery"),
            responseJson = await response.json();
        return responseJson;

    },
    projects: [
        {
            title: "E-student",
            description: "E-student, platforma za studente",
            img: "/?mnps=dbe&q=students.svg",
            href: "https://demo.eronelit.com/demo_34023591386511932414/",
            type: true,
            page: {
                title: "",
                description: "",
                avalabile: [
                    {
                        title: "",
                        icon: "",
                        url: ""
                    }
                ],
                album: [
                    {
                        image: "",
                        title: ""
                    }
                ]
            }
        },
        {
            title: "Search engine",
            description: "My search engine ",
            img: "/?mnps=dbe&q=erq.png",
            href: "https://search.eronelit.com/",
            type: true

        },
        {
            title: "Eronelit Dashboard",
            description: "Eronelit Dashboard for server like a WHM/Cpanel",
            img: "/?mnps=dbe&q=eronelit_dashboard.png",
            href: "",
            type: true
        },
        {
            title: "DB Manager",
            description: "Eronelit Dashboard - Plugin DB Manager",
            img: "/?mnps=dbe&q=rlj.png",
            href: "",
            type: true
        },
        {
            title: "Invoice Manager",
            description: "Eronelit Dashboard - Plugin Invoice manager",
            img: "/?mnps=dbe&q=eronelit_plugin_invoice.png",
            href: "",
            type: true
        },
        {
            title: "IP Calculator",
            description: "Eronelit Dashboard - Plugin IP Calculator",
            img: "/?mnps=dbe&q=eronelit_plugin_ip_calculator.png",
            href: "",
            type: true
        },
        {
            title: "Echat",
            description: "My bussines, cloud gaming, Streaming social network",
            img: "/?mnps=dbe&q=rlj2.png",
            href: "https://echat.eronelit.com/",
            type: true
        },
        {
            title: "Full PC Info",
            description: "Get full pc info / New version coming soon!",
            img: "/?mnps=dbe&q=flj3.png",
            href: window.location.origin + "/Eronel_Full_PC_information_.rar",
            type: false
        },
        {
            title: "Do not be angry man",
            description: "Do not be angry man - GAME",
            img: "/?mnps=dbe&q=tema_bela.png",
            href: "https://github.com/Marko9827/projekatZaFaks",
            type: true
        },
        {
            title: "Java http server",
            description: "Simple java http static web server",
            img: "/?mnps=dbe&q=java-http-server.png",
            href: "https://github.com/Marko9827/java-http-server",
            type: true
        },
        {
            title: "Operating system",
            description: "My operating system for all devices.",
            img: "/?mnps=dbe&q=os.png",
            href: "",
            type: true
        },
        {
            title: "EchaTv[Echat] - Streaming Platform",
            description: "My video Streaming platform [Tiktok, Instagram, Youtube].",
            img: "/?mnps=dbe&q=echatv.png",
            href: "",
            type: true
        },
        {
            title: "Echat 3D Model SDK/viewer",
            description: "Echat my Social network - 3D model animation viewer - Shared Post \n Supported: Blender, PTC Creo, Solidwork, Autocad, Alias Wavefront, Autodesk Filmbox, FBX, .3dc, .asc, .3ds, .abc, .dae, .zae, .igs, .iges, .las, .ply, glb. \n\n 3D model viewer TEST \n\n - BETA VERSION! \n\n        - PEGI 3",
            img: "/?mnps=dbe&q=echat_3d.png",
            href: "https://echat.eronelit.com/?s=p&id=943703156",
            type: true
        },
    ],
    history: [],
    cursor: $(".cursor"),
    TopLeft: {
        y: 0,
        x: 0
    },
    scroll_event: function () {
        $("#buttons").on("scroll", function (e) {
            e.preventDefault();
            welcomer.scrolj();
        });
        $(".catascrollEchatTv_right").on("click", function () {
            welcomer.bundleSuggestedS(1);
        });
        $(".catascrollEchatTv:not(.catascrollEchatTv_right)").on("click", function () {
            welcomer.bundleSuggestedS("1");
        });
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
        $.ajax({
            url: url,
            type: "GET",
            success: function (v) { }
        })
    },
    custom_evjents_page: function (id = "") {
        $("div#clavs br_ta").addClass("active_scr");

        if (f.title) {
            $(".pdf_page_home_btn").show();
            const urlParams = new URLSearchParams(`${window.location.origin}/${f.source}`);

            var res = "";
            window.portfolio.data.blog.forEach(function (rr) {
                if (id == rr.id) {
                    res = window.atob(rr.page);
                }
            });

            welcomer.gallery_temp = f.gallery;

            welcomer.blg_history_replace(`/?p=blog&id=${id}`);
            $("div_header").attr("data-url", `${window.location.origin}/?p=blog&id=${id}`);
            $("div#clavs br_ta").addClass("active_scr");
            $(ifrm).hide();
            ifrm.document.open();
            ifrm.document.write(`${res}`);
            setTimeout(function () {
                $("#clavs grider_viewer").hide();
            }, 1000);
            ifrm.document.querySelectorAll("img").forEach(function (v) {
                $(v).attr("onclick", "parent.welcomer.infoVa_img(event)").attr("data-title", "Click (hovered image) for view image in full size");
                var a = $(v);
                a.hover(
                    function () {
                        parent.welcomer.showAnchorTitle(a, a.data('title'));
                    },
                    function () {
                        parent.welcomer.hideAnchorTitle();
                    }
                ).data('title', a.attr('title')).removeAttr('title');

                a.mouseleave(function () {
                    parent.welcomer.hideAnchorTitle();

                });
            });

            ifrm.document.close();

            $("div_header span").html(`Blog > ${f.title}`);
            welcomer.titleC(` ${f.title} > Blog > Marko Nikolić - Portfolio`);

            $("gridder_loader, #clavs iframe:not(.iframe_mask)").removeAttr("style");
        }
    },
    custom_evjents: function () {

    },
    blog_loader_natjive: function (id = "all") {
        var ifrm = document.querySelector("#clavs iframe:not(.iframe_mask)");
        ifrm.removeAttribute("onload");
        ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
        $("div_header").addClass("ld_completeld_complete2");
        $(".F_bi_search").hide();
        $("gridder_loader").attr("style", "opacity:1");
        $(".pdf_page_home_btn").hide();
        $(".close_btnf").show();

        $("#clavs iframe:not(.iframe_mask)").attr("style", "opacity:0");
        if (id == "null" || id == null) {
            id = "all";
            welcomer.titleC("Blog > Marko Nikolić - Portfolio");
            $("div_header span").html(`Marko Nikolić - Portfolio > Blog`);
        }
        try {
            welcomer.terminator.ajax.blog_post.abort();
        } catch (aer) { }
        var f = {};
        window.portfolio.data.blog.forEach(function (res) {
            if (res.id == id) {
                f = res;
            }
        });

        if (id == "all") {

            welcomer.blg_history_replace('/?p=blog');
            welcomer.blogljoad_posts(f);
            $('#clavs iframe:not(.iframe_mask)').removeAttr("src");
        } else {
            $("div#clavs br_ta").addClass("active_scr");
            function decodeEntities(hexString) {
                function hexToAscii(hexString) {
                    var asciiString = '';
                    for (var i = 0; i < hexString.length; i += 2) {
                        asciiString += String.fromCharCode(parseInt(hexString.substr(i, 2), 16));
                    }
                    return asciiString;
                }

                var originalString = hexToAscii(hexString);
                return hexString;
            }
            if (f.title) {
                $(".pdf_page_home_btn").show();
                const parser = new DOMParser();

                var res = decodeEntities(f.page);

                welcomer.gallery_temp = f.gallery;

                welcomer.blg_history_replace(`/?p=blog&id=${id}`);
                $("div_header").attr("data-url", `${window.location.origin}/?p=blog&id=${id}`);

                $("div#clavs br_ta").addClass("active_scr");
                $(ifrm).hide();

                ifrm.document.open();
                ifrm.document.write(`${res}`);

                ifrm.document.querySelectorAll("img").forEach(function (v) {
                    $(v).attr("onclick", "parent.welcomer.infoVa_img(event)").attr("data-title", "Click (hovered image) for view image in full size");
                    var a = $(v);
                    a.hover(
                        function () {
                            parent.welcomer.showAnchorTitle(a, a.data('title'));
                        },
                        function () {
                            parent.welcomer.hideAnchorTitle();
                        }
                    ).data('title', a.attr('title')).removeAttr('title');

                    a.mouseleave(function () {
                        parent.welcomer.hideAnchorTitle();

                    });
                });

                ifrm.document.close();

                $("div_header span").html(`Blog > ${f.title}`);
                welcomer.titleC(` ${f.title} > Blog > Marko Nikolić - Portfolio`);

                $("gridder_loader, #clavs iframe:not(.iframe_mask)").removeAttr("style");

                $("#clavs iframe:not(.iframe_mask)").addClass("blog_style");
                $("body").removeAttr("data-hmm");
                document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");

                $("div_header span").html(`Blog > ${f.title}`);

                $("#clavs grider_viewer").hide();
                $("iframe.iframe_mask").show();

            } else {

                welcomer.blg_history_replace('');

                $("#clavs").attr("style", "transform: translateY(-100%);");
                welcomer.loop_active = true;
                $("iframe:not(.iframe_mask)").attr("src", "");
                $("iframe:not(.iframe_mask)").removeAttr("style");
            }
        }
    },
    blogloader: function (id = "all") {
        $("#clavs grider_viewer, div#clavs br_ta").removeAttr("style");

        var ifrm = document.querySelector("#clavs iframe:not(.iframe_mask)");
        ifrm.removeAttribute("onload");
        ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
        $("div_header").addClass("ld_completeld_complete2");
        $(".F_bi_search").hide();
        $("gridder_loader").attr("style", "opacity:1");
        $(".pdf_page_home_btn").hide();
        $(".close_btnf").show();

        $("#clavs iframe:not(.iframe_mask)").attr("style", "opacity:0");
        if (id == "null" || id == null) {
            id = "all";
            welcomer.titleC("Blog > Marko Nikolić - Portfolio");
            $("div_header span").html(`Marko Nikolić - Portfolio > Blog`);

        }
        try {

        } catch (aer) {

        }
        if (id == "all") {
            welcomer.blg_history_replace('/?p=blog');
            welcomer.blogljoad_posts(window.portfolio.data.blog);
            $('#clavs iframe:not(.iframe_mask)').removeAttr("src");

        } else {
            welcomer.blog_loader_natjive(id);
        }
        welcomer.titleC("Blog > Marko Nikolić - Portfolio")
        $("html").addClass("anim_djenerated");

    },
    url_params: function () {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("p");
        const myParam_id = urlParams.get("id");

        if (myParam !== null) {
            if (myParam == "blog") {

                this.blogloader(myParam_id);
            } else if (myParam == "editor") {
                this.editor.start();

            } else {
                this.pgloader(window.location.origin + "/?pages=" + myParam);
            }
        }
    },
    url_params2: function () {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("p");
        return window.location.origin + "/?p=" + myParam;
    },
    isMobile: function () {
        var isMobile = false;

        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            isMobile = true;
        }
        $("p-c").attr("data-title", "Your GPU: " + this.GPPU_ms());

        return isMobile;
    },
    decodeEntities: function (str) {
        let txt = document.createElement("textarea");

        txt.innerHTML = str;

        return txt.value;
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
    blogljoad_posts_category: function (tt_category_name) {

        var arrayr = [],
            categoryTemp = document.querySelector('div#clavs br_ta'),
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
        document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");
        $("iframe:not(.iframe_mask)").hide();

        categoryTemp.classList.remove("active_scr");
        $("grider_viewer").show().removeAttr("style");
        $("div_header").removeClass("ld_completeld_complete");
        $("grider_viewer").html("");

        arr.forEach(function (v) {

            var thi = "class='is_touch'",
                p_open = "";
            if (v.id !== "") {
                if (v.type) {
                    p_open = ` <p_open title="Open: /?p=blog&id=${v.id}" onclick="welcomer.blogloader(${div_not_i});" >
           <i class="bi bi-link"></i> Open post
           </p_open>`;
                } else {
                    p_open = ` <p_open title="Download: ${v.title}" onclick="welcomer.blogloader(${div_not_i});" >
          <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download)
           </p_open>`;
                }
            }
            p_open = ` <p_open title="Open: /?p=blog&id=${v.id}" onclick="welcomer.blogloader(${v.id});" >
            <i class="bi bi-link"></i> Open post
            </p_open>`;
            if (welcomer.isMobile()) {

                thi = `onclick='welcomer.blogloader(${v.id})'`;

            }
            if (tt_category_name == "All" || tt_category_name == "all") {
                $("grider_viewer").append(`<project
                data-category="${window.btoa(v?.category)}"
                ${thi} id-int="${div_not_i}" title="${v?.title}">
            <grider_box>
            <p><span>${v.title}</span></p>

                ${p_open}
                <fiv><i onclick="welcomer.blogloader(${v.id});" class="bi bi-info-circle" title="Go to blog post..."></i></fiv>
                <img loading="lazy" ${thi} ondragstart="return false;" onload="welcomer.loaded_img(this, ${div_not_i});" 
                src="${v.thumbail}" data-zoom-image="${v.thumbail}" alt="${v.title}">
                       </grider_box>

                </project>`);
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

                            $("grider_viewer").append(`<project
                        data-category="${window.btoa(v?.category)}"
                        ${thi} id-int="${div_not_i}" title="${v?.title}">
                    <grider_box>
                    <p><span>${v.title}</span></p>

                        ${p_open}
                        <fiv><i onclick="welcomer.blogloader(${v.id});" class="bi bi-info-circle" title="Go to blog post..."></i></fiv>
                        <img loading="lazy" ${thi} ondragstart="return false;" onload="welcomer.loaded_img(this, ${div_not_i});" 
                        src="${img_src_d}" data-zoom-image="${v.thumbail}" alt="${v.title}">
                               </grider_box>

                        </project>`);
                            div_not_i++;
                        }

                    }
                } catch (r) { }
            }

            tt_category_name_false = false;

        });

        $("div_header").addClass("ld_completeld_complete2");
        $(ljoader).show();
        $("div_header span").html("Marko Nikolić - Portfolio > Blog");
        $(".F_bi_search").show();
        $("gridder_loader").removeAttr("style");

        $(Vjideo_sjpinner).hide();
    },
    blogljoad_posts: function (arr = []) {

        var arrayr = [],
            categoryTemp = document.querySelector('div#clavs br_ta'),
            ljoader = document.querySelector("#reaload_page"),
            Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
            div_header = document.querySelector("div_header"),
            iframe = document.createElement("iframe"),
            clavs = document.getElementById("clavs"),
            div_not_i = 0,
            div_not = document.querySelector("div_not");

        $(ljoader).hide();
        $(Vjideo_sjpinner).show();
        document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");
        $("iframe:not(.iframe_mask)").hide();

        categoryTemp.classList.remove("active_scr");
        $("grider_viewer").show().removeAttr("style");
        $("div_header").removeClass("ld_completeld_complete");
        $("grider_viewer").html("");
        window.arr_temp = arr;
        $('div#clavs br_ta').html("");
        arr.forEach(function (v) {
            try {
                for (var i = 0; i < v?.category.length; i++) {

                    arrayr.push(v.category[i]);
                }
            } catch (r) { }

            var thi = "class='is_touch'",
                p_open = "";
            if (v.id !== "") {
                if (v.type) {
                    p_open = ` <p_open title="Open: /?p=blog&id=${v.id}" onclick="welcomer.blogloader(${div_not_i});" >
           <i class="bi bi-link"></i> Open post
           </p_open>`;
                } else {
                    p_open = ` <p_open title="Download: ${v.title}" onclick="welcomer.blogloader(${div_not_i});" >
          <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download)
           </p_open>`;
                }
            }
            p_open = ` <p_open title="Open: /?p=blog&id=${v.id}" onclick="welcomer.blogloader(${v.id});" >
            <i class="bi bi-link"></i> Open post
            </p_open>`;
            if (welcomer.isMobile()) {

                thi = `onclick='welcomer.blogloader(${v.id})'`;

            }
            var img_src_d = `${v.thumbail}`;
            if (img_src_d.includes("data:")) {
                img_src_d = `${v.thumbail}`;
            } else {
                img_src_d = `${v.thumbail}&thumb=true`;
            }

            $("grider_viewer").append(`<project
            data-category="${window.btoa(v?.category)}"
            ${thi} id-int="${div_not_i}" title="${v?.title}">
        <grider_box>
        <p><span>${v.title}</span></p>

            ${p_open}
            <fiv><i onclick="welcomer.blogloader(${v.id});" class="bi bi-info-circle" title="Go to blog post..."></i></fiv>
            <img loading="lazy" ${thi} ondragstart="return false;" onload="welcomer.loaded_img(this, ${div_not_i});" 
            src="${img_src_d}" data-zoom-image="${img_src_d}" alt="${v.title}">
                   </grider_box>

            </project>`);
            div_not_i++;
        });
        var arrayrH = welcomer.remove_duplicates(arrayr),
            active_scrf_2 = document.createElement("ta_f");
        active_scrf_2.innerHTML = "All";
        active_scrf_2.onclick = function () {
            welcomer.blogljoad_posts_category(active_scrf_2.innerHTML);
            document.querySelectorAll('div#clavs br_ta ta_f').forEach(function (r) { r.classList.remove('active') });
            active_scrf_2.classList.add("active");
        };
        $("div#clavs br_ta").append(active_scrf_2);
        arrayrH.forEach(function (re) {
            const active_scrf = document.createElement("ta_f");
            active_scrf.innerHTML = re;
            active_scrf.onclick = function () {
                document.querySelectorAll('div#clavs br_ta ta_f').forEach(function (r) { r.classList.remove('active') });
                welcomer.blogljoad_posts_category(active_scrf.innerHTML);
                active_scrf_2.classList.add("active");
            };
            $("div#clavs br_ta").append(active_scrf);
        });
        $("div#clavs br_ta").removeClass("active_scr");

        $("div_header").addClass("ld_completeld_complete2");
        $(ljoader).show();
        $("div_header span").html("Marko Nikolić - Portfolio > Blog");
        $(".F_bi_search").show();
        $("gridder_loader").removeAttr("style");

        $(Vjideo_sjpinner).hide();
    },
    blogljoad: function () {
        const RSS_URL = "/?mnps=blog-rss";
        $.ajax({
            url: RSS_URL,
            type: "POST",
            async: true,
            data: {
                what: "blog"
            },
            beforeSend: function () {
                $("strV").remove();
            },
            success: function (v) {

            }
        })
    },
    eronelit_gallery: {
        call_ui: function (json = []) {
            var this2 = welcomer.eronelit_gallery;

            document.querySelector(this2.scrolle.root_scroll).innerHTML = "";
            var a = json.length - 1;
            for (var i = 1; i < json.length; i++) {
                var dh = document.createElement("dh"),
                    image = document.createElement("img"),
                    afterSlash = json[i].split("/")[2];
                image.src = json[i];

                dh.innerHTML = `<dhn>${i}/${a}</dhn>`;
                image.setAttribute("loading", "lazy");
                image.setAttribute("style", "opacity:0; transform: scale(0);");
                image.setAttribute("onload", "$(this).removeAttr('style');");
                dh.setAttribute("data-index", i);
                dh.setAttribute("data-name", afterSlash);
                dh.appendChild(image);

                document.querySelector(this2.scrolle.root_scroll).appendChild(dh);

            }
            document.querySelector('section[data-ui-type="slider"]').classList.remove("hidden_omega");
        },
        scrolle: {
            root_scroll: 'section[data-ui-type="slider"] div-echatv',
            dh: 'section[data-ui-type="slider"] div-echatv dh'
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

            this.scrollby_h(pr);
        },
        bundleSuggestedS: function (n) {
            var this2 = welcomer.eronelit_gallery;
            const width_fs = document.querySelector(this2.scrolle.dh).offsetWidth;

            if (n == "1") {
                document.querySelector(this2.scrolle.root_scroll).scrollLeft += width_fs;
            } else {
                document.querySelector(this2.scrolle.root_scroll).scrollLeft -= width_fs;
            }
            this2.scrolj();
        },
        scrollby_h: function (pr) {
            var this2 = welcomer.eronelit_gallery;
            document.querySelectorAll(this2.scrolle.dh).forEach(function (res) {

                if (pr == res.getAttribute("data-name")) {
                    console.log(res.getAttribute("data-name"));
                    welcomer.eronelit_gallery.byEvent(parseInt(res.getAttribute("data-index")));
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

            if (document.querySelector(this2.scrolle.root_scroll).scrollLeft > width_fs) {
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

            document.querySelector(this2.scrolle.root_scroll).scrollLeft = width_fs * n;

        },
        bundleSuggestedS: function (n) {
            var this2 = welcomer.eronelit_gallery;
            const width_fs = document.querySelector(this2.scrolle.dh).offsetWidth;

            if (n == "1") {
                document.querySelector(this2.scrolle.root_scroll).scrollLeft += width_fs;
            } else {
                document.querySelector(this2.scrolle.root_scroll).scrollLeft -= width_fs;
            }
            this2.scrolj();
        }
    },
    loader_svg: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iVmppZGVvX3NqcGlubmVyIFZqaWRlb19zanBpbm5lcl9jZW50ZXIiIA0KICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogIGhlaWdodD0iNTAiDQogIHdpZHRoPSI1MCINCg0Kdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iDQogICAgd2lkdGg6IDYwcHg7DQogICAgaGVpZ2h0OiA2MHB4Ow0KICAgICANCiI+IA0KPHN0eWxlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdHlwZT0idGV4dC9jc3MiPg0KLlZqaWRlb19zanBpbm5lciB7DQogICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7DQogICAgdHJhbnNpdGlvbjogLjNzOw0KICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTsNCiAgICB6LWluZGV4OiAyMzMzMzMzMzsNCiAgICBwb3NpdGlvbjogZml4ZWQ7DQogICAgdG9wOiAzNXB4Ow0KICAgIGxlZnQ6IDM1cHg7DQogICAgbWFyZ2luOiAtMzVweCAwIDAgLTM1cHg7DQogICAgd2lkdGg6IDUwcHg7DQogICAgaGVpZ2h0OiA1MHB4Ow0KICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQNCn0NCg0KLlZqaWRlb19zanBpbm5lciAucGF0aCB7DQogICAgc3Ryb2tlOiB3aGl0ZTsNCiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7DQogICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTsNCiAgICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTsNCiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpKSAhaW1wb3J0YW50Ow0KICAgIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXcgMCAwIDUxMiA1MTIgIWltcG9ydGFudA0KfQ0KDQogDQoNCkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUgew0KICAgIDEwMCUgew0KICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpDQogICAgfQ0KfQ0KDQpAa2V5ZnJhbWVzIHJvdGF0ZSB7DQogICAgMTAwJSB7DQogICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykNCiAgICB9DQp9DQoNCkAtd2Via2l0LWtleWZyYW1lcyBkYXNoIHsNCiAgICAwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDsNCiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDANCiAgICB9DQoNCiAgICA1MCUgew0KICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwOw0KICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1DQogICAgfQ0KDQogICAgMTAwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7DQogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0DQogICAgfQ0KfQ0KDQpAa2V5ZnJhbWVzIGRhc2ggew0KICAgIDAlIHsNCiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMTUwOw0KICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMA0KICAgIH0NCg0KICAgIDUwJSB7DQogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7DQogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzUNCiAgICB9DQoNCiAgICAxMDAlIHsNCiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDsNCiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQNCiAgICB9DQp9DQo8L3N0eWxlPg0KPGNpcmNsZSBjbGFzcz0icGF0aCIgY3g9IjI1IiBjeT0iMjUiIHI9IjIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjUiPjwvY2lyY2xlPiA8L3N2Zz4=",
    load_gallery: function () {
        var res = window.portfolio.data.gallery
        $("#buttons .adiv[adiv_gat='gallery_bundle'] .nnum").html(res.length);

        welcomer.load_gallery_j = res;
        return;
        $.getJSON("/?mnps=gallery", function (res) {
            $("#buttons .adiv[adiv_gat='gallery_bundle'] .nnum").html(res.length);

            welcomer.load_gallery_j = res;
        });

    },
    load_gallery_j: [],
    galleryload: function () {
        $("gridder_loader").attr("style", "opacity:1");

        $("#buttons .adiv[adiv_gat='gallery_bundle'] .nnum").html(window.portfolio.data.gallery.length);

        welcomer.load_gallery_j = window.portfolio.data.gallery;
        welcomer.galleryloadajax();
        $("html").addClass("anim_djenerated");
        return;
        if (this.load_gallery_j.length > 0) {
            this.galleryloadajax();
        } else {
            $.getJSON("/?mnps=gallery", function (res) {
                $("#buttons .adiv[adiv_gat='gallery_bundle'] .nnum").html(res.length);

                welcomer.load_gallery_j = res;
                welcomer.galleryloadajax();
                $("html").addClass("anim_djenerated")
            });
        }
        welcomer.titleC("Gallery > Marko Nikolić - Portfolio")

    },
    galleryloadajax: function () {
        var ljoader = document.querySelector("#reaload_page"),
            Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
            div_header = document.querySelector("div_header"),
            iframe = document.createElement("iframe"),
            clavs = document.getElementById("clavs"),
            div_not_i = 0,
            div_not = document.querySelector("div_not");

        $(ljoader).hide();
        $(Vjideo_sjpinner).show();
        document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");
        $("iframe:not(.iframe_mask)").hide();

        $("grider_viewer").show().removeAttr("style");
        $("div_header").removeClass("ld_completeld_complete");
        $("grider_viewer").addClass("g_gallery");
        $("grider_viewer").html("");
        var gallery = [];
        $("gridder_loader").attr("style", "opacity:1");

        welcomer.blg_history_replace(`/?p=gallery`);

        var v = welcomer.load_gallery_j;
        for (var i = 0; i < v.length; i++) {
            console.log(v[i]);
            console.clear();
            var thi = "class='is_touch'",
                p_open = "";
            if (v[i].href !== "") {
                if (v[i].type) {
                    p_open = ` <p_open title="Open: ${v[i].href}" onclick="welcomer.openWindow(${div_not_i});" >
           <i class="bi bi-link"></i> Open link
           </p_open>`;
                } else {
                    p_open = ` <p_open title="Download: ${v[i].title}" onclick="welcomer.openWindow(${div_not_i});" >
          <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download)
           </p_open>`;
                }
            }
            if (welcomer.isMobile()) {

                thi = "onclick='welcomer.openLink(" + div_not_i + ")'"

            }
            $("grider_viewer").append(`<project style="transform: scale(0) !important;"  ${thi} id-int="${div_not_i}" >
        <grider_box>
        <p><span>${v[i].title}</span></p>

            ${p_open}
            <fiv><i onclick="welcomer.infoVa(${div_not_i});" class="bi bi-fullscreen" title="Preview image in full size"></i></fiv>
            <img loading="lazy"  ${thi} 
            ondragstart="return false;" 
            onerror="welcomer.loaded_imgPrld_error(this, ${div_not_i});" 
            onload="welcomer.loaded_imgPrld(this, ${div_not_i});" 
            src="${v[i].thumb}"  
            data-zoom-image="${v[i].thumb}"
            data-real-zoom-image="${v[i].img}" alt="${v[i].title}">
                   </grider_box>

            </project>`);
            div_not_i++;
        }

        $("gridder_loader").removeAttr("style");
        $("div_header").addClass("ld_completeld_complete2");
        $(ljoader).show();
        $("div_header span").html("Marko Nikolić - Portfolio > Gallery");
        $(".F_bi_search").hide();
        $(Vjideo_sjpinner).hide();
    },
    loaded_imgPrld_error: function (aer, id = 0) {
        $(`#clavs grider_viewer project[id-int="${id}"]`).remove();
    },
    loaded_imgPrld: function (aer, id = 0) {
        const d = aer;

        const img = new Image();

        welcomer.urlToBlob(`${d.getAttribute("src")}`).then(blob => {
            const imgElement = document.createElement('img');
            img.src = URL.createObjectURL(blob);

            const H = aer.getAttribute("data-zoom-image");
            d.src = URL.createObjectURL(blob);

            $(aer).parent().parent().removeAttr("style");
        });
        $(aer).removeAttr("onload");
        return "";
        img.src =
            img.onload = async function () {
                const H = aer.getAttribute("data-zoom-image");
                d.src = H;

                $(aer).parent().parent().removeAttr("style");
            }
        $(aer).removeAttr("onload");

    },
    projectsload: function () {
        var ljoader = document.querySelector("#reaload_page"),
            Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
            div_header = document.querySelector("div_header"),
            iframe = document.createElement("iframe"),
            clavs = document.getElementById("clavs"),
            div_not_i = 0,
            div_not = document.querySelector("div_not");

        $(ljoader).hide();
        $(Vjideo_sjpinner).show();
        document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");
        $("iframe:not(.iframe_mask)").hide();

        $("grider_viewer").show().removeAttr("style");
        $("div_header").removeClass("ld_completeld_complete");
        $("grider_viewer").html("");

        this.projects.forEach(function (v) {
            var thi = "class='is_touch'",
                p_open = "";
            if (v.href !== "") {
                if (v.type) {
                    p_open = ` <p_open title="Open: ${v.href}" onclick="welcomer.openWindow(${div_not_i});" >
               <i class="bi bi-link"></i> Open link
               </p_open>`;
                } else {
                    p_open = ` <p_open title="Download: ${v.title}" onclick="welcomer.openWindow(${div_not_i});" >
              <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download)
               </p_open>`;
                }
            }
            if (welcomer.isMobile()) {

                thi = "onclick='welcomer.openLink(" + div_not_i + ")'"

            }
            $("grider_viewer").append(`<project  ${thi} id-int="${div_not_i}" title="${v.description}">
            <grider_box>
            <p><span>${v.title}</span></p>

                ${p_open}
                <fiv><i onclick="welcomer.infoVa(${div_not_i});" class="bi bi-info-circle" title="Preview project image. Detailed preview of the whole project coming soon!"></i></fiv>
                <img loading="lazy" ${thi} ondragstart="return false;" onload="welcomer.loaded_img(this, ${div_not_i});" 
                src="${v.img}" data-zoom-image="${v.img}" alt="${v.title}">
                       </grider_box>

                </project>`);
            div_not_i++;
        });
        $("div_header").addClass("ld_completeld_complete2");
        $(ljoader).show();
        $("div_header span").html("Marko Nikolić - Portfolio > Projects");
        $(".F_bi_search").show();

        $(Vjideo_sjpinner).hide();
    },
    closeMeIamSad: function () {
        if ($('section[data-ui-type="slider"]:not(.hidden_omega)').length > 0) {
            $('section[data-ui-type="slider"]').addClass("hidden_omega");
            $('section[data-ui-type="slider"] div-echatv').html("");
        } else {
            $(".zoomContainer:not(.dont_removme), .zoomer_exit:not(.dont_removme), #helper_id_helper:not(.dont_removme), #helper_id_helper3:not(.dont_removme)").remove();
        }
        $(" preview_imagem").remove();
    },
    urlToBlob: async function (url) {
        const response = await fetch(url);
        const blob = await response.blob();
        return blob;
    },
    infoVa_img_gallery: function (url) {
        var clickedElement = url;
        var imgH = new Image();

        welcomer.urlToBlob(`${$(clickedElement).attr("data-zoom-image")}&thumb_or=t`).then(blob => {
            const imgElement = document.createElement('img');
            imgH.src = URL.createObjectURL(blob);
        });
        imgH.onload = function () {
            $(imgH).ezPlus({
                zoomType: 'inner',
                containLensZoom: true,
                speed: 10
            });
        };
        $("body div#helper_id_helper3, preview_imagem").remove();
        $("body").append(`

            <preview_imagem style="
            position: fixed;
            left: 0px;

            width: 100%;
            height: 100%;
            z-index: 339;
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            top: 0px;
        "><img alt="loading" src="${welcomer.loader_svg}"></preview_imagem>
            <div id="helper_id_helper3"> <p>To view a zoomed image. Hold left click or finger and move slowly.</p> </div><span id="helper_id_helper"><i style="padding-right:2px;" class="bi bi-info-square"></i> For close click ( X ) button.</span><i onclick="welcomer.closeMeIamSad()" class="bi bi-x-lg zoomer_exit"></i>`);

    },
    infoVa: function (h = 0) {

        var imgH = new Image();

        welcomer.infoVa_img_gallery($(`project[id-int="${h}"] img`));
    },

    openWindow: function (i = 0) {
        if (this.projects[i].href !== "") {
            const urls = this.projects[i].href;
            window.open(urls);
            return "";
            if (urls.includes("download")) {
                window.open(urls);
            } else {

                $.get(urls, function (v) {
                    var blob = new Blob([v], { type: "octet/stream" });
                    var url = window.URL.createObjectURL(blob);
                    var a = document.createElement("a");

                    a.href = url;

                    a.download = url.replace("blob:" + window.location.origin, "") + ".rar";
                    a.click();
                    window.URL.revokeObjectURL(url);
                });
            }
        }
    },
    openLink: function (kk) {
        $("project").find("p_open").removeAttr("style");
        $(`project[id-int="${kk}"]`).find("p_open").attr("style", "top: 45px !important; opacity: 1 !important;");
    },
    loaded_img: function (aer, id = 0) {

        $(`#clavs grider_viewer project[id-int="${id}"]`).addClass("section_loadet_img");
        this.toblob(aer);
        $(aer).removeAttr("onload");
    },
    start_v2: function (j) {
        this.constructor();
        $("gridder_loader img").attr("onload", "welcomer.loading_t(this)");
        if (!this.isChrome) {

        }
        document.querySelector("iframe").addEventListener("load", function () {

        });
        this.load_gallery();

        document.querySelectorAll("script").forEach(function (v) {
            try {
                v.remove();
            } catch (v) { }
        });
        document.getElementById("clavs").setAttribute("style", "transform: translateY(-100%);");
        this.url_params();

        this.generateGrid();
    },
    bell_over: function (h) {

        document.querySelector("#logo_backscr_img").classList.add("activeBell");
        if (this.isChrome) {
            $("#canvas, .wallpaperVideo").attr("style", "opacity: 1; -webkit-filter: url('#shadowed-goo') !important; filter: url('#shadowed-goo') !important; transform: rotate(45deg) scale(2);");

        } else {
            $("#canvas, .wallpaperVideo").attr("style", "opacity: 1; -webkit-filter: unset !important; filter: unset !important ;  transform: rotate(45deg) scale(2);");
        }
    },
    bell_out: function (o) {
        document.querySelector("#logo_backscr_img").classList.remove("activeBell");
        $("#canvas, .wallpaperVideo ").removeAttr("style");
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
        const myParam = urlParams.get('p');
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
                $("#clavs").attr("style", "transform: translateY(-100%);");
                welcomer.loop_active = true;
                $("iframe:not(.iframe_mask)").attr("src", "");
                $("iframe:not(.iframe_mask)").removeAttr("style");

            }
        }
    },
    editor: {
        close: function () {
            var msg_title = "Are you sure to close? Your work is auto-saved on your machine.";

            welcomer.hmm(msg_title, function () {
                welcomer.blg_history_replace('/');
                welcomer.titleC("Marko Nikolić - Portfolio")
                $("#clavs").attr("style", "transform: translateY(-100%);");
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

            var blob = new Blob([welcomer.editor.editr_tijemp], { type: 'text/html' });
            var blobUrl = URL.createObjectURL(blob);
            var link = document.createElement('a');
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
                edit: function (k = 0) {

                },
                add: function (k = 0) {

                },
                remove: function (k = 0) {

                }
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
            edit: function (dataF = {
                id: 0,
                name: "",
                time: "",
                code: ""
            }) {

                var transaction = this.db.transaction([this.storeName], "readwrite");
                var objectStore = transaction.objectStore(this.storeName);

                var getRequest = objectStore.get(Number(welcomer.editor.getParams("id")));

                getRequest.onsuccess = function (event) {
                    var data = getRequest.result;

                    if (data) {

                        data.data = dataF;

                        var updateRequest = objectStore.put(data);

                        updateRequest.onsuccess = function (event) {
                        };

                        updateRequest.onerror = function (event) {
                        };
                    } else {
                    }
                };

                getRequest.onerror = function (event) {
                };

                transaction.oncomplete = function (event) {
                };
            },
            crindex: function (index) {
                var d = new Date().getFullYear();
                document.cookie = `crindex=${index}; expires=Thu, 18 Dec ${d + 5} 12:00:00 UTC`;
            },
            add: function (dataF = {
                id: 0,
                name: "",
                time: "",
                code: ""
            }) {

                var transaction = this.db.transaction([this.storeName], "readwrite");
                var objectStore = transaction.objectStore(this.storeName);

                var data = { data: dataF };

                var request = objectStore.add(data);

                request.onsuccess = function (event) {
                    welcomer.editor.webDb.getAll();

                };

                request.onerror = function (event) {

                };

                transaction.oncomplete = function (event) {
                };
            },
            getCurrent(key) {

                const urlParams = new URLSearchParams(window.location.search);
                const myParam = urlParams.get("p");
                const myParam_id = urlParams.get("id");

                if (myParam !== null) {
                    if (myParam == "editor") {

                        if (myParam_id !== null) {
                            this.specific_id = key;

                            var transaction = this.db.transaction([this.storeName], "readonly");
                            var objectStore = transaction.objectStore(this.storeName);
                            var index = objectStore.index("id");

                            var getRequest = index.get(key);

                            getRequest.onsuccess = function (event) {
                                var data = getRequest.result;

                                if (data) {
                                    welcomer.editor.webDb.specific = data;
                                    welcomer.editor.webDb.loadafter(welcomer.editor.webDb.specific,
                                        function () {

                                        });
                                } else {
                                }
                            };

                            getRequest.onerror = function (event) {
                            };

                            transaction.oncomplete = function (event) {
                            };
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
                cursorRequest.onerror = function (event) {
                };
            },
            remove: function (id = 0) {

            },
            start: function () {
                const webDb = welcomer.editor.webDb;
                this.request = indexedDB.open(this.dbName, this.version);

                this.request.onerror = function (event) {
                };

                this.request.onsuccess = function (event) {
                    webDb.db = event.target.result;
                    welcomer.editor.webDb.getAll();

                };

                this.request.onupgradeneeded = function (event) {
                    var db = event.target.result;
                    var objectStore = db.createObjectStore(webDb.storeName, { keyPath: "id", autoIncrement: true });

                    objectStore.createIndex("id", "id", { unique: false });
                    objectStore.createIndex("name", "name", { unique: false });
                    objectStore.createIndex("time", "time", { unique: false });
                    objectStore.createIndex("code", "code", { unique: false });
                    objectStore.createIndex("thumbail", "thumbail", { unique: false });

                };
            }
        },
        load_menu_bar: function () {
            const edimls = document.querySelector('section[data-ui-type="editor"] editor-history-rp');
            if (edimls.hasAttribute("style")) {
                edimls.removeAttribute("style");
                edimls.innerHTML = "";
                return false;
            }
            welcomer.editor.webDb.getAll();
            edimls.innerHTML = `<if_div ><p>New +</p></if_div>`;
            document.querySelector(`section[data-ui-type="editor"] editor-history-rp if_div:first-child`).onclick = function () {

            }
            welcomer.editor.webDb.data.forEach(function (res) {
                var rs = res.data.code;
                if (rs.length > 0) {
                    const if_div = document.createElement("if_div"),
                        peview = document.createElement("iframe"),
                        p = document.createElement("p");

                    peview.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(res.data.code);
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
                }

            });

            edimls.setAttribute("style", "transform:none");

        },
        cdn: 'https://cdn.eronelit.com/node_modules/monaco-editor@0.45.0/min/',
        callEditor_r_h: function () {
            window.location.href = "/?p=editor";
        },
        callEditor_r: function () {
            this.start();
            welcomer.blg_history_replace(`/?p=editor`);

        },
        start: function () {
            this.call_nav();
            this.callEditor();
            this.webDb.start();

            $('section[data-ui-type="editor"]').removeClass("hidden_omega");

        },
        call_nav_conf: [
            {
                title: "Undo",
                icon: "bi bi-arrow-left-short editor_btns undo",
                href: {
                    f_u: false,
                    f: true,
                    target: "blank"
                },
                num: 0,
                beta: false,
                soon: false
            },
            {
                title: "Redo",
                icon: "bi bi-arrow-right-short editor_btns redo ",
                href: {
                    f_u: "welcomer.cp();",
                    f: true,
                    target: "blank"
                },
                num: 0,
                beta: false,
                soon: false
            },
            {
                title: "Download as html file",
                icon: "bi bi-file-earmark-arrow-down celvon",
                href: {
                    f_u: function () { welcomer.editor.d(); },
                    f: true,
                    target: "blank"
                },
                num: 0,
                beta: false,
                soon: false
            },

            {
                title: "Share Editor page",
                icon: "bi bi-share",
                href: {
                    f_u: function () { welcomer.share(); },
                    f: true,
                    target: "blank"
                },
                num: 0,
                beta: false,
                soon: false
            },
            {
                title: "Close Editor | Don't worry your work is auto saved on your machine!",
                icon: "bi bi-x-lg close_btnf",
                href: {
                    f_u: function () {
                        welcomer.editor.close();
                    },
                    f: true,
                    target: "blank"
                },
                num: 0,
                beta: false,
                soon: false
            }
        ],
        call_nav: function () {

            const m_down = document.querySelector('btns_r.btns_r_editor_right');
            m_down.innerHTML = "";
            this.call_nav_conf.forEach(function (res) {
                var i = document.createElement("i");
                i.setAttribute("class", res.icon);
                i.addEventListener("click", function () {

                    try {
                        res.href.f_u();
                    } catch (ra) { }

                });
                i.setAttribute("data-title", res.title);
                i.setAttribute("title", res.title);
                m_down.appendChild(i);
            });
        },
        EditorWrapper: class extends HTMLElement {

            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
            }

            connectedCallback() {
                const container = document.createElement('div'),
                    resizer = document.createElement("div"),
                    bar_f = document.createElement("div"),
                    iframe = document.createElement("iframe");
                iframe.id = "preview-container";
                container.id = 'editor-container',
                    this.shadowRoot.appendChild(container);
                this.shadowRoot.appendChild(resizer);
                this.shadowRoot.appendChild(iframe);
                const styleLink = document.createElement('link');
                styleLink.rel = 'stylesheet';
                styleLink.href = `${welcomer.editor.cdn}vs/editor/editor.main.css`;
                this.shadowRoot.appendChild(styleLink);
                container.addEventListener("resize", function () {

                    welcomer.editor.edtr.layout();
                });

                const loaderScript = document.createElement('script');
                loaderScript.src = `${welcomer.editor.cdn}/vs/loader.js`;
                loaderScript.onload = this.initEditor.bind();
                this.shadowRoot.appendChild(loaderScript);
            }

            initEditor() {

                require.config({ paths: { 'vs': `${welcomer.editor.cdn}vs` } });
                require(['vs/editor/editor.main'], () => {
                    const editorContainer = this.shadowRoot.getElementById('editor-container');
                    const editor = monaco.editor.create(editorContainer, {
                        value: `<!DOCTYPE html>
                        <html>

                        <head>
                            <title>Hello World!</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1">

                        </head>

                        <body>
                            <!--- Hello world --->
                        </body>

                        </html>`,
                        language: 'html',
                        theme: 'vs-dark'
                    });

                    welcomer.editor.edtr = editor;

                    window.addEventListener('resize', function () {
                        welcomer.editor.edtr.layout();
                    });
                    function updatePreview() {
                        var previewFrame = document.getElementById('preview-container');
                        var previewContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Hello World!</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>

            <body>
                ${editor.getValue()}
            </body>
            </html>
            `;
                        previewFrame.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewContent);
                        try {
                            document.querySelector(`editor-history-rp iframe.preview_dom[data-id="${welcomer.editor.getParams("id")}"]`).src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewContent);
                        } catch (a) { }
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
            return `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
        },

        getParams: function (name = "") {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        },
        EditorWrappers: {
            main: {

            },
            tabs: [
                {

                }
            ],
            html: {},
            css: {},
            javascript: {}
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

                this.main({
                    where: tab1,
                    callback: function () {

                    }
                });

                tabs.appendChild(tabs_tab);

                main.appendChild(tabs);

            },
            tems: {
                css: "",
                html: "",
                javascript: "",
            },
            collector: function () {

                var preview_frm = document.querySelector('section[data-ui-type="editor"] iframe#preview-container'),
                    previewContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Hello World!</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                <style> ${this.tems.css}</style>
                    </head>

                <body>
                    ${this.tems.html}

                    <\script type="text/javascript"\>
                        ${this.tems.javascript}
                    <\/script\>
                </body>
                </html>
                `;

                preview_frm.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewContent);

            },
            main: function (t = {
                where,
                wht,
                callback,
                template: ""
            }) {
                let editor_f;
                const editor_container = document.createElement("div");
                const shadowRoot = editor_container.attachShadow({ mode: 'open' }),
                    editor_container_2 = document.createElement("div");
                editor_container_2.style.width = '100%';
                editor_container_2.style.height = '100%';
                shadowRoot.appendChild(editor_container_2);
                const styleLink = document.createElement('link');
                styleLink.rel = 'stylesheet';
                styleLink.href = `${welcomer.editor.cdn}vs/editor/editor.main.css`;
                shadowRoot.appendChild(styleLink);
                require.config({ paths: { 'vs': 'https://cdn.eronelit.com/node_modules/monaco-editor@0.45.0/min/vs' } });
                if (id < 1) {
                    welcomer.editor.editor.tems[t.wht] = `<!DOCTYPE html>
                <html>

                <head>
                    <title>Hello World!</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">

                </head>

                <body>
                    <!--- Hello world --->
                    <!--- Click ? for more info! :) --->
                </body>

                </html>`;
                }
                let typingTimer;
                const typingTimeout = 1000;
                require(['vs/editor/editor.main'], function () {

                    var editor = monaco.editor.create(editor_container_2, {
                        value: welcomer.editor.editr_tijemp,
                        language: 'html',
                        theme: 'vs-dark',
                        automaticLayout: true,
                        cursorStyle: 'hidden'
                    });
                    editor_f = editor;
                    buttons.undo.addEventListener("click", function () {

                        editor.getModel().undo();
                    });
                    buttons.redo.addEventListener("click", function () {
                        editor.getModel().undo();
                    });
                    welcomer.editor.edtr = editor;
                    document.querySelector('section[data-ui-type="editor"] div#editor-container').addEventListener("resize", function () {

                        welcomer.editor.edtr.layout();
                    });
                    window.addEventListener('resize', function () {
                        welcomer.editor.edtr.layout();
                    });
                    function updatePreview() {
                        var previewFrame = iframe;
                        var previewContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello World!</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>

        <body>
            ${editor.getValue()}
        </body>
        </html>
        `;

                        previewFrame.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewContent);

                        try {
                            document.querySelector(`editor-history-rp iframe.preview_dom[data-id="${welcomer.editor.getParams("id")}"]`).src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewContent);
                        } catch (a) { }

                        welcomer.editor.editr_tijemp = editor.getValue();

                    }
                    if (welcomer.editor.getParams("id") !== null) {
                        welcomer.editor.webDb.getCurrent(parseInt(welcomer.editor.getParams("id")));
                    }
                    function onTypingStopped() {

                        const urlParams = new URLSearchParams(window.location.search);
                        const myParam = urlParams.get("p");
                        const myParam_id = urlParams.get("id");
                        if (welcomer.editor.webDb.data.length < 1) { }

                        if (myParam !== null) {
                            if (myParam == "editor") {

                                if (myParam_id == null) {
                                    welcomer.editor.edtr_id = 0;
                                    welcomer.blg_history_replace(`/?p=editor&id=${welcomer.editor.edtr_id}`);
                                    welcomer.editor.webDb.add({
                                        id: welcomer.editor.edtr_id,
                                        name: "Hello World!!!",
                                        time: welcomer.editor.time(),
                                        code: welcomer.editor.editr_tijemp
                                    });
                                } else {
                                    welcomer.editor.webDb.edit({
                                        id: myParam_id,
                                        name: "Hello World!!!",
                                        time: welcomer.editor.time(),
                                        code: welcomer.editor.editr_tijemp
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
                t.callback(editor)
            }
        },
        makeResizableDiv: function (div) {
            const element = document.querySelector(div);
            const resizers = document.querySelectorAll(div + ' .resizer')
            const minimum_size = 20;
            let original_width = 0;
            let original_height = 0;
            let original_x = 0;
            let original_y = 0;
            let original_mouse_x = 0;
            let original_mouse_y = 0;
            for (let i = 0; i < resizers.length; i++) {
                const currentResizer = resizers[i];
                currentResizer.addEventListener('mousedown', function (e) {
                    e.preventDefault()
                    original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
                    original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
                    original_x = element.getBoundingClientRect().left;
                    original_y = element.getBoundingClientRect().top;
                    original_mouse_x = e.pageX;
                    original_mouse_y = e.pageY;
                    window.addEventListener('mousemove', resize)
                    window.addEventListener('mouseup', stopResize)
                })

                function resize(e) {
                    if (currentResizer.classList.contains('bottom-right')) {
                        const width = original_width + (e.pageX - original_mouse_x);
                        const height = original_height + (e.pageY - original_mouse_y)
                        if (width > minimum_size) {
                            element.style.width = width + 'px !important'
                        }
                        if (height > minimum_size) {
                            element.style.height = height + 'px'
                        }
                    }
                    else if (currentResizer.classList.contains('bottom-left')) {
                        const height = original_height + (e.pageY - original_mouse_y)
                        const width = original_width - (e.pageX - original_mouse_x)
                        if (height > minimum_size) {
                            element.style.height = height + 'px !important'
                        }
                        if (width > minimum_size) {
                            element.style.width = width + 'px'
                            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
                        }
                    }
                    else if (currentResizer.classList.contains('top-right')) {
                        const width = original_width + (e.pageX - original_mouse_x)
                        const height = original_height - (e.pageY - original_mouse_y)
                        if (width > minimum_size) {
                            element.style.width = width + 'px !important'
                        }
                        if (height > minimum_size) {
                            element.style.height = height + 'px'
                            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
                        }
                    }
                    else {
                        const width = original_width - (e.pageX - original_mouse_x)
                        const height = original_height - (e.pageY - original_mouse_y)
                        if (width > minimum_size) {
                            element.style.width = width + 'px !important'
                            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
                        }
                        if (height > minimum_size) {
                            element.style.height = height + 'px'
                            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
                        }
                    }
                }

                function stopResize() {
                    window.removeEventListener('mousemove', resize)
                }
            }
        },
        resize_left: {
            left: function (val, resizer) {
                document.querySelector('section[data-ui-type="editor"] editor-wrapper').classList.add('resize_mode');
                $(resizer).attr("style", `left: ${val}px !important;`);
                $('section[data-ui-type="editor"] div#editor-container').attr("style", `width: ${val}px !important;`);
                $('section[data-ui-type="editor"] iframe#preview-container').attr("style", `width: ${$("body").width() - val}px !important;`);

                console.log(val);
            },
            rrsz: false
        },
        callEditor: function (id = 0) {

            const data_ui_type = document.querySelector('section[data-ui-type="editor"] editor-wrapper'),
                editor_container = document.createElement("div"),
                resizer = document.createElement("div"),
                iframe = document.createElement("iframe"),
                buttons = {
                    history: "",
                    undo: document.querySelector("section[data-ui-type='editor'] i.editor_btns.undo"),
                    redo: document.querySelector("section[data-ui-type='editor'] i.editor_btns.redo")
                };

            $(data_ui_type).find("#editor-container").remove();
            $(data_ui_type).find("iframe").remove();
            editor_container.id = "editor-container";
            iframe.id = "preview-container";
            resizer.id = "resizer-container";
            iframe.sandbox = "allow-same-origin allow-scripts";
            data_ui_type.appendChild(editor_container);
            data_ui_type.appendChild(resizer);
            data_ui_type.appendChild(iframe);
            const container = resizer;
            function onMouseDrag({ movementX, movementY }) {
                let getContainerStyle = window.getComputedStyle(container);
                let leftValue = parseInt(getContainerStyle.left);
                let topValue = parseInt(getContainerStyle.top);
                container.style.left = `${leftValue + movementX}px`;
                container.style.top = `${topValue + movementY}px`;
            }

            var dragging_ = { enabled: false, left: 0 };

            const shadowRoot = editor_container.attachShadow({ mode: 'open' }),
                editor_container_2 = document.createElement("div");
            editor_container_2.style.width = '100%';
            editor_container_2.style.height = '100%';
            shadowRoot.appendChild(editor_container_2);
            const styleLink = document.createElement('link');
            styleLink.rel = 'stylesheet';
            styleLink.href = `${welcomer.editor.cdn}vs/editor/editor.main.css`;
            shadowRoot.appendChild(styleLink);
            require.config({ paths: { 'vs': 'https://cdn.eronelit.com/node_modules/monaco-editor@0.45.0/min/vs' } });
            if (id < 1) {
                this.editr_tijemp = `<!DOCTYPE html>
                <html>

                <head>
                    <title>Hello World!</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">

                </head>

                <body>
                    <!--- Hello world --->
                    <!--- Click ? for more info! :) --->
                </body>

                </html>`;
            }
            let typingTimer;
            const typingTimeout = 1000;
            require(['vs/editor/editor.main'], function () {

                var editor = monaco.editor.create(editor_container_2, {
                    value: welcomer.editor.editr_tijemp,
                    language: 'html',
                    theme: 'vs-dark',
                    automaticLayout: true,
                    cursorStyle: 'hidden'
                });
                buttons.undo.addEventListener("click", function () {

                    editor.getModel().undo();
                });
                buttons.redo.addEventListener("click", function () {
                    editor.getModel().undo();
                });
                welcomer.editor.edtr = editor;
                document.querySelector('section[data-ui-type="editor"] div#editor-container').addEventListener("resize", function () {

                    welcomer.editor.edtr.layout();
                });
                window.addEventListener('resize', function () {
                    welcomer.editor.edtr.layout();
                });
                function updatePreview() {
                    var previewFrame = iframe;
                    var previewContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello World!</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>

        <body>
            ${editor.getValue()}
        </body>
        </html>
        `;

                    previewFrame.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewContent);

                    try {
                        document.querySelector(`editor-history-rp iframe.preview_dom[data-id="${welcomer.editor.getParams("id")}"]`).src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewContent);
                    } catch (a) { }

                    welcomer.editor.editr_tijemp = editor.getValue();

                }
                if (welcomer.editor.getParams("id") !== null) {
                    welcomer.editor.webDb.getCurrent(parseInt(welcomer.editor.getParams("id")));
                }
                function onTypingStopped() {

                    const urlParams = new URLSearchParams(window.location.search);
                    const myParam = urlParams.get("p");
                    const myParam_id = urlParams.get("id");
                    if (welcomer.editor.webDb.data.length < 1) { }

                    if (myParam !== null) {
                        if (myParam == "editor") {

                            if (myParam_id == null) {
                                welcomer.editor.edtr_id = 0;
                                welcomer.blg_history_replace(`/?p=editor&id=${welcomer.editor.edtr_id}`);
                                welcomer.editor.webDb.add({
                                    id: welcomer.editor.edtr_id,
                                    name: "Hello World!!!",
                                    time: welcomer.editor.time(),
                                    code: welcomer.editor.editr_tijemp
                                });
                            } else {
                                welcomer.editor.webDb.edit({
                                    id: myParam_id,
                                    name: "Hello World!!!",
                                    time: welcomer.editor.time(),
                                    code: welcomer.editor.editr_tijemp
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

        }
    },
    blg_history_replace: function (st) {
        history.replaceState({}, "", `${st}`);
        $("body").attr("data-url-id", st);
        if (st == "/?p=blog" || st == "?p=blog") {
            $('div#clavs br_ta').addClass("active_scr");
        }
    },
    getParam: function (param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    },
    blgloader: function (id = "") {
        $.ajax({

        })
    },
    pgloader_native: function (d = {}) {
        $("#clavs grider_viewer").removeAttr("style");
        const url = d.url,
            hrl_url = `/?p=${d.url}`,
            urlParams = new URLSearchParams(window.location.search);
        $(".pdf_page_home_btn").hide();
        $(".close_btnf").show();
        $("grider_viewer").removeClass("g_gallery");
        $("div_header span").html($("iframe:not(.iframe_mask)").contents().find("title").html());
        $("#clavs grider_viewer").hide();
        $("div#clavs svg.Vjideo_sjpinner").attr("style", "opacity:0; transform:scale(0);");
        $("div_header").removeClass("ld_completeld_complete2");
        $("div_header").addClass("ld_completeld_complete");

        $("div_header").attr("data-url", url);

    },
    pgloader: function (url = "") {
        $("#clavs grider_viewer").removeAttr("style");
        try {
            $(".Ignoring_me_iframe.shadow_root").removeClass("open");
        } catch (aer) { }
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
                } catch (arV) { }
            } else {
                $("div_header").attr("data-url", url);
            }
        }
        this.loop_active = false;
        var ljoader = document.querySelector("#reaload_page"),
            Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
            div_header = document.querySelector("div_header"),
            iframe = document.createElement("iframe"),
            clavs = document.getElementById("clavs");

        document.querySelector(".pdf_download").setAttribute("style", "display: none;");

        if (url == "yes") {
            $(ljoader).show();
            $(Vjideo_sjpinner).hide();

            const const_urlParams = new URLSearchParams(window.location.search);
            const const_myParam = const_urlParams.get("p");
            if (const_myParam == "blog") {
                $("#clavs grider_viewer").removeAttr("style");

            } else {
                $("div_header span").html($("iframe:not(.iframe_mask)").contents().find("title").html());
            }
            $("div_header").removeClass("ld_completeld_complete2");
            $("div_header").addClass("ld_completeld_complete");
            var url2 = $("iframe:not(.iframe_mask)").attr("src");
            try {
                if (url2.includes("cv-pdf")) {

                    welcomer.blg_history_replace(`/?p=cv-pdf`);

                    document.querySelector(".pdf_download").setAttribute("style", "display: block;");
                    $("#clavs grider_viewer").attr("style", "pointer-events: none; ")
                } else {
                    document.querySelector(".pdf_download").setAttribute("style", "display: none;");

                }
            } catch (res) {
                document.querySelector(".pdf_download").setAttribute("style", "display: none;");

            }
            this.loadorNot();
        } else if (url.includes("projects")) {
            $("body").removeAttr("data-hmm");
            this.projectsload();
            $("div_header").attr("data-url", window.location.origin + "/?p=projects");
            $("iframe.iframe_mask").removeAttr("style");
            $("div_header span").html("Marko Nikolić - Portfolio > Projects");

            welcomer.blg_history_replace(`/?p=projects`);
            $("html").addClass("anim_djenerated");

            setTimeout(() => {

                $("#clavs grider_viewer").attr("style", "padding-top: 10px !important;");
            }, 100);
        } else if (url.includes("gallery")) {
            $("body").removeAttr("data-hmm");
            this.galleryload();

            $("div_header").attr("data-url", window.location.origin + "/?p=Gallery");
            $("iframe.iframe_mask").removeAttr("style");
            $("div_header span").html("Marko Nikolić - Portfolio > Gallery");

            welcomer.blg_history_replace(`/?p=gallery`);
            ;

        } else if (url.includes("blog.eronelit.com") || url.includes("p=blllog")) {
            $(ljoader).hide();
            $(Vjideo_sjpinner).show();
            $("div_header").removeClass("ld_completeld_complete");
            $("div_header").addClass("ld_completeld_complete2");

            $("body").attr("data-hmm", "ld_completeld_complete3");

            $("div_header span").html("Marko Nikolić - Portfolio > Blog");
            document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");
            $("iframe:not(.iframe_mask)").attr("src", url);
            $("iframe:not(.iframe_mask)").attr("data-temp-url", url);
            $("div_header").attr("data-url", window.location.origin + "/?p=blog");

        } else {

            $("body").removeAttr("data-hmm");
            document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");

            if (url.includes("?pages=cv-pdf")) {
                $("iframe:not(.iframe_mask)").contents().find("html").html(`${window.portfolio.data.pages.cv_pdf.c}`);
                welcomer.pgloader_native(window.portfolio.data.pages.cv_pdf);
            }
            if (url.includes("?pages=visitcard")) {
                $("iframe:not(.iframe_mask)").contents().find("html").html(`${window.portfolio.data.pages.visitcard.c}`);
                welcomer.pgloader_native(window.portfolio.data.pages.visitcard);
            }
            if (url.includes("?pages=tg_channel")) {

                // $("iframe:not(.iframe_mask)").contents().find("html").html(`${window.portfolio.data.pages.visitcard.c}`);
                welcomer.pgloader_native('<p>Loading...</p>');
                $(".ld_completeld_complete span").html("My Official Telegram channel");
                welcomer.Social.tg.start();
            }
            var ifrm = document.querySelector("iframe:not(.iframe_mask)");
            ifrm.removeAttribute("onload");
            ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;

            var frameDoc = ifrm;

            $("iframe:not(.iframe_mask)").attr("data-temp-url", url);
            $("#clavs grider_viewer, div#clavs br_ta").hide();
            $("iframe.iframe_mask").hide();
            if (url.includes)
                try {
                } catch (v) { }

        }

        if (url.includes("projects")) {
            $("#clavs grider_viewer").hide();
        }

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

            $("div_header span").html($("iframe:not(.iframe_mask)").contents().find("title").html());
            $("div_header").removeClass("ld_completeld_complete2");
            $("div_header").addClass("ld_completeld_complete");
            var urlf = $("iframe:not(.iframe_mask)").attr("src");

        } else if (url == "projects") {
            this.projectsload();
        } else {

            document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");
            $("iframe:not(.iframe_mask)").attr("src", url);
            $("iframe:not(.iframe_mask)").attr("data-temp-url", url);

        }

    },
    f_blob: function (url = "") {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'blob';
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.send();

        function handler() {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {

                    var data_url = URL.createObjectURL(this.response);
                    $("iframe:not(.iframe_mask)").attr("src", data_url);
                } else {
                    console.error('no pdf :(');
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
            $("iframe:not(.iframe_mask)").attr("src", $("iframe:not(.iframe_mask)").attr("data-temp-url"));
        }
        $("div_not").removeAttr("style");

        $("#clavs iframe:not(.iframe_mask)").removeAttr("style");
        $("box_h").hide();
    },
    titleC: function (str) {
        $("title").html(str);
    },
    HcloseF: function () {
        this.hmm("You ", function () {

            welcomer.blg_history_replace('');
            this.titleC("Marko Nikolić - Portfolio")
            $("#clavs").attr("style", "transform: translateY(-100%);");
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

        var msg_title = "Are you sure to close? You are only closing the built-in browser. You do not close the card.";
        msg_title = "Return to Blog Home page?";
        this.hmm(msg_title, function () {
            welcomer.blogloader("all");
        });
        return false;
    },
    Hclose: function () {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("p");
        const myParam_id = urlParams.get("id");
        var msg_title = "Are you sure to close? You are only closing the built-in browser. You do not close the card.";
        var containeds = window.location.href;
        if (containeds.includes("?p=blog&id=")) {
            welcomer.blogloader('all');

            return false;
        }
        this.hmm(msg_title, function () {

            $("#clavs").attr("style", "transform: translateY(-100%);");
            welcomer.titleC(`Marko Nikolić - Portfolio`);

            welcomer.blg_history_replace('/');

            welcomer.loop_active = true;
            setTimeout(function () {

                $("iframe:not(.iframe_mask)").attr("src", "");
                $("iframe:not(.iframe_mask)").removeAttr("style");
                $("html").removeClass("anim_djenerated");
            }, 1000);

            return false;
            if (myParam == "blog") {
                if (myParam) {
                    welcomer.blogloader('all');
                    history.replaceState({}, "", `${window.location.origin}/?p=blog`);
                } else {
                    history.replaceState({}, "", `${window.location.origin}`);

                    $("#clavs").attr("style", "transform: translateY(-100%);");
                    welcomer.loop_active = true;
                    setTimeout(function () {

                        $("iframe:not(.iframe_mask)").attr("src", "");
                        $("iframe:not(.iframe_mask)").removeAttr("style");
                    }, 1000);
                }
            } else {
                history.replaceState({}, "", `${window.location.origin}`);

                $("#clavs").attr("style", "transform: translateY(-100%);");
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
            navigator.share({
                title: $("div_header span").text(),
                text: "Shared from - " + window.location.origin,
                url: $("div_header").attr("data-url")
            })
                .then(() => console.log('Successful share'))
                .catch(error => console.log('Error sharing:', error));
            $("body").append(``);
        }

    },
    hideCursor: function () {
        $(".cursor").hide();
    },
    hmmQ: function (qust = "", call) {
        $("div_not").attr("style", "top: 45px !important; opacity: 1 !important;");

        $("div_not div_panel span").text(qust);
        $("#clavs iframe, #clavs grider_viewer").addClass("gridesr_filter");
        $("btns_i").attr("style", "opacity: 0.4;pointer-events: none;");
        $("box_h").show();

        $("btns btn2").on("click", function () {
            $("div_not").removeAttr("style");
            $("#clavs iframe, #clavs grider_viewer").removeClass("gridesr_filter");

            $("box_h").hide();
            $("btns_i").removeAttr("style", "opacity: 0.4; pointer-events: none;");

        });
        $("btns btn1").on("click", function () {
            $("div_not").removeAttr("style");
            $("box_h").hide(); $("btns_i").removeAttr("style", "opacity: 0.4;pointer-events: none;");

            $("#clavs iframe, #clavs grider_viewer").removeClass("gridesr_filter");

            call();
        });

    },
    hmm: function (qust = "", call) {
        $("div_not").attr("style", "top: 45px !important; opacity: 1 !important;");

        $("div_not div_panel span").text(qust);
        $("#clavs iframe, #clavs grider_viewer").addClass("gridesr_filter");
        $("box_h").show();

        $("btns btn2").on("click", function () {
            $("div_not").removeAttr("style");
            var tl = $("div_header span").text();
            $("#clavs iframe, #clavs grider_viewer").removeClass("gridesr_filter");

            $("box_h").hide();

        });
        $("btns btn1").on("click", function () {
            $("div_not").removeAttr("style");
            $("box_h").hide();
            $("#clavs iframe, #clavs grider_viewer").removeClass("gridesr_filter");

            $("#clavs iframe").show();
            $("#clavs grider_viewer").hide();
            call();
        });
    },
    question_no: function () {
        $("div_not").removeAttr("style");

        $("#clavs iframe, #clavs grider_viewer").removeAttr("style");
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
        $.ajax({
            url: url,
            contentType: 'text/html ; charset=utf-8',
            cache: false,
            async: true,
            success: function (res) {
                blob = new Blob([res], { type: "text/html" });
                objectURL = URL.createObjectURL(blob);
                $("iframe:not(.iframe_mask)").attr("src", objectURL);
            },
            async: false
        });
    },
    Img_cursor: function () {
        this.cursor.css({
            transform: "scale(2)",
            "text-align": "center",
            "font-size": "10px",
            "padding": "uset",
            "padding-top": "4px",
            "cursor": "none",
            "mix-blend-mode": "unset"
        });
    },
    Img_no_cursor: function () {
        this.cursor.css({
            transform: "scale(1)",
            "font-size": "unset",
            "padding": "unset",
            "padding-top": "unset",
            "border-radius": "50%",
            "mix-blend-mode": "difference",
            "display": "unset"

        });
    },
    cr: function (v) {
        var thi = "class='is_touch'",
            p_open = "";
        if (v.href !== "") {
            if (v.type) {
                p_open = ` <p_open title="Open: ${v.href}" onclick=" welcomer.openWindow(${this.div_not_i});" >
               <i class="bi bi-link"></i> Open link
               </p_open>`;
            } else {
                p_open = ` <p_open title="Download: ${v.title}" onclick=" welcomer.openWindow(${this.div_not_i});" >
              <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download)
               </p_open>`;
            }
        }
        if (this.isMobile()) {

            thi = "onclick=' welcomer.openLink(" + this.div_not_i + ")'"

        }
        $("grider_viewer").append(`<project  ${thi} id-int="${this.div_not_i}" title="${v.description}">
            <grider_box>
            <p><span>${v.title}</span></p>

                ${p_open}
                <fiv><i onclick=" welcomer.infoVa(${this.div_not_i});" class="bi bi-info-circle" title="Preview project image. Detailed preview of the whole project coming soon!"></i></fiv>
                <img loading="lazy"  data-zoom-image="${v.img}" ${thi} ondragstart="return false;" onload="welcomer.loaded_img(this, ${this.div_not_i});" src="${v.img}" alt="${v.title}">
                       </grider_box>

                </project>`);
        this.div_not_i++;

    },
    loading_t: function (d) {
        const img = new Image();
        img.src = d.getAttribute("src");
        img.onload = async function () {
            const H = URL.createObjectURL(await fetch(img.src).then(function (v) { return v.blob() }));
            d.src = H;
            d.removeAttribute("onload");
        }
    },
    toblob: function (d) {
        const img = new Image();

        var img_d = d.getAttribute("src");
        if (img_d.includes("data:")) {
            img.src = img_d.replace("&thumb=true", "");
        } else {
            img.src = d.getAttribute("src");
        }

        img.onload = async function () {
            const H = URL.createObjectURL(await fetch(img.src).then(function (v) { return v.blob() }));
            d.src = H;
            d.setAttribute("data-zoom-image", H);
        }
        img.onerror = function () {

        }
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
                $.getJSON("/?blog=search&q=" + input, function (arr) {
                    welcomer.blogljoad_posts(arr);
                });

            } else {
                welcomer.compTxt(input);
            }
        }
        if (attr == "closeMe") {
            this.hmmQ("Close search?", function () {
                hd.removeClass("ld_completeld_complete_search");
                $("btns_i input[type='text']").val("");
                if ($("body").attr("data-url-id") == "/?p=blog") {
                    welcomer.blogloader('all');
                } else {
                    welcomer.projectsload();
                }
            });
        }
    },
    terminator: {
        ajax: {
            blog_post: null,
        }
    },
    txt_cursor: function () {
        $("input[type='text'], textarea, input[type='search'], .trumbowyg-box .trumbowyg-editor" +
            " , .invoice-box input").click(function () {
                welcomer.cursor.css({
                    transform: "scale(0.1, 1.5)",
                    "border-radius": "5px"
                });
                welcomer.cursor.html("");

            }).contextmenu(function () {
                welcomer.cursor.css({
                    transform: "scale(0.1, 1.5)",
                    "border-radius": "5px"
                });
                welcomer.cursor.html("");

            }).mouseenter(function () {
                welcomer.cursor.css({
                    transform: "scale(0.1, 1.5)",
                    "border-radius": "5px"
                });
                welcomer.cursor.html("");

            }).mouseleave(function () {
                welcomer.cursor.css({
                    transform: "scale(1)",
                    "border-radius": "50%",
                    "mix-blend-mode": "difference"

                });
            });
    },
    parentTitler: function (element, text) {
        var offset = element.offset();

        $('#anchorTitle').html("<i style='padding-right:2px;' class='bi bi-info-square'></i> " + text)
            .attr("style", "opacity:1;");
    },
    showAnchorTitle: function (element, text) {

        var offset = element.offset();
        if ($('#anchorTitle').length > 0) {
            $('#anchorTitle').html("<i style='padding-right:2px;' class='bi bi-info-square'></i> " + text)
                .attr("style", "opacity:1;");
        } else {
            parent.welcomer.parentTitler(element, text);
        }

    },
    hideAnchorTitle: function () {
        if ($('#anchorTitle').length > 0) {
            $('#anchorTitle').removeAttr("style");
        } else {
            parent.welcomer.hideAnchorTitle();
        }
    },
    fpsMeter: function () {
        let prevTime = Date.now(),
            frames = 0,
            k = (performance || Date).now()

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
    GPPU_ms: function () {

    },
    getUnmaskedInfo: function () {
        const gl = document.createElement('canvas').getContext('webgl');
        if (!gl) {
            return {
                error: "no webgl",
            };
        }
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        return debugInfo ? {
            vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
            renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
        } : {
            error: "no WEBGL_debug_renderer_info",
        };

    },
    get_events: function () {
        $('*[title]:not(iframe), *[data-title]:not(iframe)').each(function () {

            var a = $(this);
            if (welcomer.isMobile()) {
                a.click(
                    function () {
                        welcomer.showAnchorTitle(a, a.data('title'));
                    },
                    function () {
                        welcomer.hideAnchorTitle();
                    }
                ).data('title', a.attr('title')).removeAttr('title');

                $("*:not(a)").click(function () {
                    welcomer.hideAnchorTitle();

                });
            } else {
                a.hover(
                    function () {
                        welcomer.showAnchorTitle(a, a.data('title'));
                    },
                    function () {
                        welcomer.hideAnchorTitle();
                    }
                ).data('title', a.attr('title')).removeAttr('title');

                a.mouseleave(function () {
                    welcomer.hideAnchorTitle();

                });
            }
        });
    },
    touchpcSimulator: function (elm) {
        const ele = document.getElementById(elm);
        ele.style.cursor = 'grab';

        let pos = { top: 0, left: 0, x: 0, y: 0 };

        const mouseDownHandler = function (e) {
            ele.style.cursor = 'grabbing';
            ele.style.userSelect = 'none';

            pos = {
                left: ele.scrollLeft,
                top: ele.scrollTop,
                x: e.clientX,
                y: e.clientY,
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;

            ele.scrollTop = pos.top - dy;
            ele.scrollLeft = pos.left - dx;
        };

        const mouseUpHandler = function () {
            ele.style.cursor = 'grab';
            ele.style.removeProperty('user-select');

            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        ele.addEventListener('mousedown', mouseDownHandler);
    },
    start: function () {
        this.start_v2();

        $.ajaxSetup({
            cache: true,
            async: true,
            global: true,
            headers: {
                "AuthV2-token": $('meta[name="csrf-token"]').attr('content')
            }
        });

        const isMobile = this.isMobile();

        if (isMobile == true) {
            $(".cursor").remove();
            $(".anchorTitle").remove();

        }
        if (isMobile == false) {
            this.touchpcSimulator('buttons');

            $('body').append('<div id="anchorTitle" class="anchorTitle"></div>');

            this.get_events();

            var cursor = $(".cursor");
            cursor.addClass("cursor_pc_show");

            $(window).mousemove(function (e) {
                cursor.css({
                    top: e.clientY - cursor.height() / 2,
                    left: e.clientX - cursor.width() / 2
                });
                welcomer.TopLeft = {
                    y: e.clientY - $('*[title]').height() / 2,
                    x: e.clientX - $('*[title]').width() / 2
                };

            });

            $(document)
                .mouseleave(function () {
                    cursor.css({
                        opacity: "0"
                    });
                })
                .mouseenter(function () {
                    cursor.css({
                        opacity: "1"
                    });
                });
            $("iframe")
                .mouseleave(function () {
                    cursor.css({
                        opacity: "1"
                    });
                })
                .mouseenter(function () {
                    cursor.css({
                        opacity: "0"
                    });
                });
            setInterval(function () {

                welcomer.get_events();

                $("p-message , *[onclick], *[href], button, .btn, #open_image_for_title, .trumbowyg-button-pane button").contextmenu(function () {
                    cursor.css({
                        transform: "scale(1.5)"
                    });
                }).mouseenter(function () {
                    cursor.css({
                        transform: "scale(1.5)"
                    });
                }).mouseleave(function () {
                    cursor.css({
                        transform: "scale(1)"
                    });
                });

                $("iframe").hover(function () {
                    $(".cursor").hide();
                }).mouseleave(function () {

                    $(".cursor").show();
                });
            }, 1500);

            $("#side-menu li:last-child").contextmenu(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-sign-out-alt'></i>");
            }).mousemove(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-sign-out-alt'></i>");
            }).mouseenter(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-sign-out-alt'></i>");
            }).mouseleave(function () {
                welcomer.Img_no_cursor();
                cursor.html("");
            });

            $(".pdf-btn-info").contextmenu(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='far fa-file-pdf'></i>");
            }).mouseenter(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='far fa-file-pdf'></i>");
            }).mouseleave(function () {
                welcomer.Img_no_cursor();
                cursor.html("");
            });

            $("#side-menu li:first-child").contextmenu(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-home'></i>");
            }).mouseenter(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-home'></i>");
            }).mouseleave(function () {
                welcomer.Img_no_cursor();
                cursor.html("");
            });

            $(".select-selected-all, select").contextmenu(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-arrows-alt-v'></i>");
            }).click(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-arrows-alt-v'></i>");
            }).mouseenter(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-arrows-alt-v'></i>");
            }).mouseleave(function () {
                welcomer.Img_no_cursor();
                cursor.html("");
            });

            $(".save-btn-info").contextmenu(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-save'></i>");
            }).click(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-save'></i>");
            }).mouseenter(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-save'></i>");
            }).mouseleave(function () {
                welcomer.Img_no_cursor();
                cursor.html("");
            });

            setInterval(function () {
                $(".container-galerry img").mousemove(function () {
                    welcomer.Img_cursor();
                    cursor.html("<i class='fas fa-file-image'></i>");
                }).contextmenu(function () {
                    welcomer.Img_cursor();
                    cursor.html("<i class='fas fa-file-image'></i>");
                }).mouseenter(function () {
                    welcomer.Img_cursor();
                    cursor.html("<i class='fas fa-file-image'></i>");
                }).mouseleave(function () {
                    welcomer.Img_no_cursor();
                    cursor.html("");
                });
            }, 1000);

            $("input[type='password']").click(function () {

                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-lock'></i>");
            }).contextmenu(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-lock'></i>");
            }).mouseenter(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-lock'></i>");
            }).mouseleave(function () {
                welcomer.Img_no_cursor();
                cursor.html("");
            });
            setInterval(function () {
                $(".btn-danger, *[data-dismiss='modal'], *[onclick*='post_form_edit_cancel']").contextmenu(function () {
                    welcomer.Img_cursor();
                    cursor.html("<i class='fas fa-times'></i>");
                }).mouseenter(function () {
                    welcomer.Img_cursor();
                    cursor.html("<i class='fas fa-times'></i>");
                }).mouseleave(function () {
                    welcomer.Img_no_cursor();
                    cursor.html("");
                });
            }, 1000);
            $("input[type='file'] , .invoice-box table tr.top table td.title").contextmenu(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-upload'></i>");
            }).click(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-upload'></i>");
            }).mouseenter(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-upload'></i>");
            }).mouseleave(function () {
                welcomer.Img_no_cursor();
                cursor.html("");
            });

            $(".btn-success").contextmenu(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-pencil-alt'></i>");
            }).mouseenter(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-pencil-alt'></i>");
            }).mouseleave(function () {
                welcomer.Img_no_cursor();
                cursor.html("");
            });

            $(".col-xa-resizer").contextmenu(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-arrows-alt-h'></i>");
            }).mouseenter(function () {
                welcomer.Img_cursor();
                cursor.html("<i class='fas fa-arrows-alt-h'></i>");
            }).mouseleave(function () {
                welcomer.Img_no_cursor();
                cursor.html("");
            });

            setInterval(function () {
                $("iframe").mouseenter(function () {
                    welcomer.Img_no_cursor();
                    cursor.html("");
                }).mousemove(function () {

                    welcomer.Img_no_cursor();
                    cursor.html("");

                });
            }, 1000);

            setInterval(function () {
                $(".plugin_status[href]").contextmenu(function () {
                    welcomer.Img_cursor();
                    cursor.html("<i class='fas fa-link'></i>");
                }).mouseenter(function () {
                    welcomer.Img_cursor();
                    cursor.html("<i class='fas fa-link'></i>");
                }).mouseleave(function () {
                    welcomer.Img_no_cursor();
                    cursor.html("");
                });
            }, 1000);

            welcomer.txt_cursor();
            setInterval(function () {

                welcomer.txt_cursor();

            }, 1000);
            $(window).mousedown(function () {
                cursor.css({
                    transform: "scale(.2)",

                    "border-radius": "50%"
                });
            }).mouseup(function () {
                cursor.css({
                    transform: "scale(1)",
                    "mix-blend-mode": "difference"
                });
            });

        }

        $("*[data-title]").mousemove(function () {
            $(".cursor").addClass("cursor-title");
            welcomer.Img_cursor();
            cursor.html("<i class='fas fa-quote-right'></i> " + $(this).attr("data-title"));

        }).contextmenu(function () {
            $(".cursor").removeClass("cursor-title");
            welcomer.Img_no_cursor();
            cursor.html("");
        }).mouseenter(function () {
            setTimeout(function () {
                $(".cursor").removeClass("cursor-title");
                welcomer.Img_no_cursor();
                cursor.html("");

            }, 3000);

        }).mouseleave(function () {
            $(".cursor").removeClass("cursor-title");
            welcomer.Img_no_cursor();
            cursor.html("");
        });

        if (window.location.host == "portfolio.eronelit.com") {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').then(function (registration) {

                }).catch(function (e) {

                });
            }
        }
    },
    style_rebuild: function () {
        const style = document.createElement("style");
        var temp = "";
        style.setAttribute("type", "text/css");

        style.setAttribute("data-what", "generated2");
        document.querySelectorAll("link[rel='stylesheet']").forEach(function (res) {
            temp += `@import '${res.getAttribute("href")}'; \n`;
        });
        document.querySelectorAll("style").forEach(function (res) {
            temp += res.innerHTML;
        });
        style.innerHTML = temp;
        const blob = new Blob([temp], { type: "text/css" });

        document.head.appendChild(style);
        style.onload = function () {
            document.querySelectorAll("style:not([data-what='generated2']);").forEach(function (res) {
                res.remove();
            });
            document.querySelectorAll("link[rel='stylesheet']").forEach(function (res) {
                res.remove();
            });
        }
    },
    TWO_PI: Math.PI * 2,
    Application: class {
        constructor() {
            this.canvas = document.getElementById("canvas");
            this.context = this.canvas.getContext("2d");
            this.width = this.canvas.width = window.innerWidth;
            this.height = this.canvas.height = window.innerHeight;
            this.center = {
                x: this.width / 2,
                y: this.height / 2
            };

            this.circleContainers = [];

            window.addEventListener('resize', () => this.resizeCanvas(), false);
        }

        resizeCanvas() {
            this.width = this.canvas.width = window.innerWidth;
            this.height = this.canvas.height = window.innerHeight;
            this.center = {
                x: this.width / 2,
                y: this.height / 2
            };

            this.circleContainers = [];
            this.initializeCircleContainers();
        }

        initializeCircleContainers() {
            for (let x = 0; x < this.width + 100; x += 100) {
                for (let y = 0; y < this.height + 100; y += 100) {
                    let circleContainer = new welcomer.CircleContainer(this.context, x, y);

                    circleContainer.initializeCircles();
                    this.circleContainers.push(circleContainer);
                }
            }
        }

        update() {
            for (let i = 0; i < this.circleContainers.length; i++) {
                if ($("#clavs").attr("style") == "transform: translateY(-100%);") {

                    this.circleContainers[i].update();

                }
            }
        }

        render() {
            this.context.clearRect(0, 0, this.width, this.height);

            for (let i = 0; i < this.circleContainers.length; i++) {
                if ($("#clavs").attr("style") == "transform: translateY(-100%);") {

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
            if (welcomer.isMobile()) {
                this.numberOfCircles = 5;
                this.bounceRadius = 20;

            } else {
                this.numberOfCircles = 19;
                this.bounceRadius = 150;

            }
            this.circles = [];

            this.baseRadius = 20;
            this.singleSlice = welcomer.TWO_PI / this.numberOfCircles;
        }

        initializeCircles() {
            for (let i = 0; i < this.numberOfCircles; i++) {
                this.circles.push(new welcomer.Circle(this.position.x, this.position.y + Math.random(), this.baseRadius, this.bounceRadius, i * this.singleSlice));
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
            conf: {
                id: "nikoliccc02",
                count: 194,
            },
            open: function () {
                window.open(`https://t.me/${this.conf.id}`);
            },
            isInViewport: function (element) {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            },
            start_scr: function () {
                document.querySelectorAll(".Ignoring_me_iframe.shadow_root div iframe[data-src]").forEach(function(res){
                    if (res.hasAttribute("data-src")) {
                        if (welcomer.Social.tg.isInViewport(res)) {
                            res.setAttribute("src", res.getAttribute("data-src"));
                            res.removeAttribute("data-src");
                            res.onload = function(){
                                res.setAttribute("style",``);
                                /*res.setAttribute("style",`
                            height:     85vh !important; 
                            min-height: 85vh !important;
                            max-height:  85vh !important;
                            max-width: 500px !important; 
                         
                            `);*/
                            }
                        }
                    }
                });
            },
            start: function () {
                $(document).ready(function(){
                var elm = document.querySelector(".Ignoring_me_iframe.shadow_root"),
                    div = document.createElement("div");
                  
                // div.attachShadow({ mode: "open" });
                elm.appendChild(div);
                div.addEventListener("scroll", function () {
                    welcomer.Social.tg.start_scr()
                });
                /*
                div.setAttribute("style", `
            
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                opacity: 1;
                display: block;
                overflow: auto;
                z-index: 33333333333;
                display: flex;
                flex-wrap: nowrap;
                flex-direction: column;
                align-content: center;
                align-items: center;
            
            `); */


                for (var i =  welcomer.Social.tg.conf.count; i > 0; i--) {
                    /*var script = document.createElement("script");
                    script.src = "https://telegram.org/js/telegram-widget.js?22";
                    script.async = true;
                    script.setAttribute("data-telegram-post", `${welcomer.Social.tg.conf.id}/${i}`);
                    script.setAttribute("data-width", "100%");
                    script.setAttribute("onload", '$(this).remove()');
                    div.appendChild(script);
                    */

                    var script = document.createElement("iframe"); 
                    script.onerror = function () {
                        script.remove();
                    }
                    
                    script.onload = function(){
                        if($(script).contents().find(".tgme_widget_message_error").html() == "Post not found"){
                            script.remove();
                        }  
                    };
                    script.setAttribute("preload","none");
                    script.setAttribute("loading","lazy");

                    // script.setAttribute("style","  height:0px !important; max-height: 0px !important;  transform: scale(0); opacity: 0;");
                    script.setAttribute("data-src", `https://t.me/${welcomer.Social.tg.conf.id}/${i}?embed=2`);

                    div.appendChild(script);

                }
                welcomer.Social.tg.start_scr();



            });

            }
        }
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
            this.position.x = this.basePosition.x + Math.cos(this.angleCircle) * (Math.sin(this.angle + this.angleCircle) * this.bounceRadius + this.baseRadius);
            this.position.y = this.basePosition.y + Math.sin(this.angleCircle) * (Math.sin(this.angle + this.angleCircle) * this.bounceRadius + this.baseRadius);
            this.size = Math.cos(this.angle) * 8 + this.baseSize;

            this.angle += this.speed;
        }

        render(context) {
            $("body").attr("style", `background-color: hsl(${welcomer.Dots_color}, 100%, 7%) !important`);
            context.fillStyle = "hsl(" + welcomer.Dots_color + ", 100%, " + this.size * 4 + "%)";
            context.beginPath();
            context.arc(this.position.x, this.position.y, this.size, 0, welcomer.TWO_PI);
            context.fill();
        }
    },
    countFPS: (function () {
        setInterval(function () {
            var lastLoop = (new Date()).getMilliseconds();
            var count = 1;
            var fps = 0;

            return function () {
                var currentLoop = (new Date()).getMilliseconds();
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
    }())
}

document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
    }
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
    }
});
window.welcomer = welcomer;