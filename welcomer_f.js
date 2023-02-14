class Welcomer {

    constructor() {
        this.isMobile();
        this.fpsMeter();

    }
    loop_active = true;
    Dots_color = 195;
    #isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    #energyAnim = true;
    domain = window.location.origin + "/rdlv/";
    div_not_i = 0;
    #projects = [
        {
            title: "E-student",
            description: "E-student, platforma za studente",
            img: this.domain + "students.svg",
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
            img: this.domain + "erq.png",
            href: "https://search.eronelit.com/",
            type: true

        },
        {
            title: "Eronelit Dashboard",
            description: "Eronelit Dashboard for server like a WHM/Cpanel",
            img: this.domain + "eronelit_dashboard.png",
            href: "",
            type: true
        },
        {
            title: "DB Manager",
            description: "Eronelit Dashboard - Plugin DB Manager",
            img: this.domain + "rlj.png",
            href: "",
            type: true
        },
        {
            title: "Invoice Manager",
            description: "Eronelit Dashboard - Plugin Invoice manager",
            img: this.domain + "eronelit_plugin_invoice.png",
            href: "",
            type: true
        },
        {
            title: "IP Calculator",
            description: "Eronelit Dashboard - Plugin IP Calculator",
            img: this.domain + "eronelit_plugin_ip_calculator.png",
            href: "",
            type: true
        },
        {
            title: "Echat",
            description: "My bussines, cloud gaming, Streaming social network",
            img: this.domain + "rlj2.png",
            href: "https://echat.eronelit.com/",
            type: true
        },
        {
            title: "Full PC Info",
            description: "Get full pc info / New version coming soon!",
            img: this.domain + "flj3.png",
            href: window.location.origin + "/Eronel_Full_PC_information_.rar",
            type: false
        },
        {
            title: "Do not be angry man",
            description: "Do not be angry man - GAME",
            img: this.domain + "tema_bela.png",
            href: "https://github.com/Marko9827/projekatZaFaks",
            type: true
        },
        {
            title: "Java http server",
            description: "Simple java http static web server",
            img: this.domain + "java-http-server.png",
            href: "https://github.com/Marko9827/java-http-server",
            type: true
        },
        {
            title: "Echat 3D Model SDK/viewer",
            description: "Echat my Social network - 3D model animation viewer - Shared Post \n Supported: Blender, PTC Creo, Solidwork, Autocad, Alias Wavefront, Autodesk Filmbox, FBX, .3dc, .asc, .3ds, .abc, .dae, .zae, .igs, .iges, .las, .ply, glb. \n\n 3D model viewer TEST \n\n - BETA VERSION! \n\n        - PEGI 3",
            img: this.domain + "echat_3d.png",
            href: "https://echat.eronelit.com/?s=p&id=943703156",
            type: true
        },
    ];
    #history = [];
    cursor = $(".cursor");
    TopLeft = {
        y: 0,
        x: 0
    };
    #get_from_datter(url) {
        $.ajax({
            url: url,
            type: "GET",
            success: function (v) { }
        })
    }
    #url_params() {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("p");

        if (myParam !== null) {
            if (myParam == "blog") {
                this.pgloader("https://blog.eronelit.com");
            } else {
                this.pgloader(window.location.origin + "/?pages=" + myParam);
            }
        }
    }
    url_params2() {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("p");
        return window.location.origin + "/?p=" + myParam;
    }
    isMobile() {
        var isMobile = false;

        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            isMobile = true;
        }
        $("p-c").attr("data-title", "Your GPU: " + this.GPPU_ms());

        return isMobile;
    }

    decodeEntities(str) {
        // this prevents any overhead from creating the object each time
        let txt = document.createElement("textarea");

        txt.innerHTML = str;

        return txt.value;
    }

    blogljoad() {
        const RSS_URL = "/?marko-nikolic-portfolio-source=blog-rss";
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
                /* IN TESTING      const c = JSON.parse(window.atob(`${v}`)); 
                      console.log(c);
                      $("body").append("<strV></strV>");
                      for(var i = 0; i < c.entry.length; i++){
                          $("strV").append(`${c.entry.content}`);
          
                      }
                         */
            }
        })
    }
    projectsload() {
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
        $("iframe").hide();

        $("grider_viewer").show().removeAttr("style");
        $("div_header").removeClass("ld_completeld_complete");
        $("grider_viewer").html("");


        this.#projects.forEach(function (v) {
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
            <p>${v.title}</p>
              
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
        $(Vjideo_sjpinner).hide();
    }
    closeMeIamSad() {
        $(".zoomContainer, .zoomer_exit, #helper_id_helper, #helper_id_helper3").remove();
    }
    infoVa(h = 0) {

        const imgH = $(`project[id-int="${h}"] img`);

        imgH.ezPlus({
            zoomType: 'inner',
            containLensZoom: true,
            speed: 1
        });
        $("body").append('<div id="helper_id_helper3"> <p>To view a zoomed image. Hold left click or finger and move slowly.</p> </div><span id="helper_id_helper"><i style="padding-right:2px;" class="bi bi-info-square"></i> For close click ( X ) button.</span><i onclick="welcomer.closeMeIamSad()" class="bi bi-x-lg zoomer_exit"></i>');
      
    }
    openWindow(i = 0) {
        if (this.#projects[i].href !== "") {
            const urls = this.#projects[i].href;
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
    }

    openLink(kk) {
        $("project").find("p_open").removeAttr("style");
        $(`project[id-int="${kk}"]`).find("p_open").attr("style", "top: 45px !important;");
    }
    loaded_img(aer, id = 0) {

        $(`#clavs grider_viewer project[id-int="${id}"]`).addClass("section_loadet_img");
        $(aer).removeAttr("onload");
    };
    start(j) {


        if (!this.#isChrome) {
            //    $("canvas").addClass("low_GPU")
        }
        document.querySelector("iframe").addEventListener("load", function () {
            // pgloader("yes");

        });
        document.querySelectorAll("script").forEach(function (v) {
            try {
                v.remove();
            } catch (v) { }
        });
        document.getElementById("clavs").setAttribute("style", "transform: translateY(-100%);");
        this.#url_params();
        if (this.#energyAnim) {
            const application = new Application();

            //Initialize the CircleContainer objects
            application.initializeCircleContainers();

            //Start the initial loop function for the first time
            application.loop();
        }
    };

    bell_over(h) {

        document.querySelector("#logo_backscr_img").classList.add("activeBell");
        if (this.#isChrome) {
            $("#canvas").attr("style", "opacity: 1; -webkit-filter: url('#shadowed-goo') !important; filter: url('#shadowed-goo') !important; transform: rotate(45deg) scale(2);");
            //; transform: rotateX(75deg) scale(4)
        } else {
            $("#canvas").attr("style", "opacity: 1; -webkit-filter: unset !important; filter: unset !important ;  transform: rotate(45deg) scale(2);");
        }
    };
    bell_out(o) {
        document.querySelector("#logo_backscr_img").classList.remove("activeBell");
        $("#canvas").removeAttr("style");
    }
    hide(elem) {
        document.querySelectorAll(elem).forEach(function (v) {
            v.classList.remove("show");
            v.classList.add("hide");
        });
    };
    show(elem) {
        document.querySelectorAll(elem).forEach(function (v) {
            v.classList.remove("hide");
            v.classList.add("show");
        });
    };
    pgloader(url = "") {
        if (url !== "yes") {
            var hrl_url = url.replace("pages", "p");
            if (!url.includes(window.location.origin)) {
                $("div_header").attr("data-url", window.location.origin + hrl_url);

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

        

        if (url == "yes") {
            $(ljoader).show();
            $(Vjideo_sjpinner).hide();


            $("div_header span").html($("iframe").contents().find("title").html());
            $("div_header").removeClass("ld_completeld_complete2");
            $("div_header").addClass("ld_completeld_complete");

        } else if (url.includes("projects")) {
            $("body").removeAttr("data-hmm");
            welcomer.projectsload();
            $("div_header").attr("data-url", window.location.origin + "/?p=projects");

        } else if (url.includes("blog.eronelit.com")) {
            $(ljoader).hide();
            $(Vjideo_sjpinner).show();
            $("div_header").removeClass("ld_completeld_complete");
            $("div_header").addClass("ld_completeld_complete2");
 
            $("body").attr("data-hmm", "ld_completeld_complete3");

            $("div_header span").html("Marko Nikolić - Portfolio > Blog");
            document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");
            $("iframe").attr("src", url);
            $("iframe").attr("data-temp-url", url);
            $("div_header").attr("data-url", window.location.origin + "/?p=blog");
       
 
        } else {
            $("body").removeAttr("data-hmm");
            document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");
            $("iframe").attr("src", url);
            $("iframe").attr("data-temp-url", url);
            try {
                // document.querySelector("iframe").remove();
            } catch (v) { }
            // iframe.src = url;
            // iframe.onload = pgloader("yes");
            // div_header.appendChild(iframe);
        }
    }

    pgloaderH(url = "") {

        var ljoader = document.querySelector("#reaload_page"),
            Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
            div_header = document.querySelector("div_header"),
            iframe = document.createElement("iframe"),
            clavs = document.getElementById("clavs");
        if (url == "yes") {
            $(ljoader).show();
            $(Vjideo_sjpinner).hide();

            $("div_header span").html($("iframe").contents().find("title").html());
            $("div_header").removeClass("ld_completeld_complete2");
            $("div_header").addClass("ld_completeld_complete");

        } else if (url == "projects") {
            welcomer.projectsload();
        } else {

            document.getElementById("clavs").setAttribute("style", " opacity:1; transform:unset; ");
            $("iframe").attr("src", url);
            $("iframe").attr("data-temp-url", url);
            try {
                // document.querySelector("iframe").remove();
            } catch (v) { }
            // iframe.src = url;
            // iframe.onload = pgloader("yes");
            // div_header.appendChild(iframe);
        }
    }
    #f_blob(url = "") {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'blob';
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.send();

        function handler() {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    // this.response is a Blob, because we set responseType above
                    var data_url = URL.createObjectURL(this.response);
                    $("iframe").attr("src", data_url);
                } else {
                    console.error('no pdf :(');
                }
            }
        }
    };

    reload_me(t = true) {
        var ljoader = document.querySelector("#reaload_page"),
            Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
            div_header = document.querySelector("div_header"),
            iframe = document.createElement("iframe").src;

        $(ljoader).hide();
        $(Vjideo_sjpinner).show();
        $("div_header span").html("Loading...");
        $("div_header").removeClass("ld_completeld_complete");
        if (t) {
            $("iframe").attr("src", $("iframe").attr("data-temp-url"));
        }
        $("div_not").removeAttr("style");

        $("#clavs iframe").removeAttr("style");
        $("box_h").hide();
    };


    Hclose() {
        this.#hmm("Are you sure to close? You are only closing the built-in browser. You do not close the card.", function () {
            $("#clavs").attr("style", "transform: translateY(-100%);");
            welcomer.loop_active = true;
            setTimeout(function () {
                $("iframe").attr("src", "");
                $("iframe").removeAttr("style");
            }, 1000);
        });
    };
    share() {
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

    }
    hideCursor() {
        $(".cursor").hide();
    }
    #hmmQ(qust = "", call) {
        $("div_not").attr("style", "top: 45px !important;");

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

    }
    #hmm(qust = "", call) {
        $("div_not").attr("style", "top: 45px !important;");
        // var answer = window.confirm(qust);
        // if (answer) {
        //     call();
        //}
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
    }
    question_no() {
        $("div_not").removeAttr("style");

        $("#clavs iframe, #clavs grider_viewer").removeAttr("style");
    };

    cursor_hide() {
        $(".cursor").hide();
    }

    cursor_show() {
        $(".cursor").show();

    }


    url_blob(url = "") {
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
                $("iframe").attr("src", objectURL);
            },
            async: false
        });
    };



    Img_cursor() {
        welcomer.cursor.css({
            transform: "scale(2)",
            "text-align": "center",
            "font-size": "10px",
            "padding": "uset", //1px",
            "padding-top": "4px",
            "cursor": "none",
            "mix-blend-mode": "unset"
        });
    }


    Img_no_cursor() {
        welcomer.cursor.css({
            transform: "scale(1)",
            "font-size": "unset",
            "padding": "unset",
            "padding-top": "unset",
            "border-radius": "50%",
            "mix-blend-mode": "difference",
            "display": "unset"

        });
    }
    cr(v) {
        var thi = "class='is_touch'",
            p_open = "";
        if (v.href !== "") {
            if (v.type) {
                p_open = ` <p_open title="Open: ${v.href}" onclick="welcomer.openWindow(${welcomer.div_not_i});" >
               <i class="bi bi-link"></i> Open link
               </p_open>`;
            } else {
                p_open = ` <p_open title="Download: ${v.title}" onclick="welcomer.openWindow(${welcomer.div_not_i});" >
              <i class="bi bi-cloud-arrow-down"></i> Download<br><i class="bi bi-shield-check"></i> (Secure download)
               </p_open>`;
            }
        }
        if (welcomer.isMobile()) {

            thi = "onclick='welcomer.openLink(" + welcomer.div_not_i + ")'"

        }
        $("grider_viewer").append(`<project  ${thi} id-int="${welcomer.div_not_i}" title="${v.description}">
            <grider_box>
            <p>${v.title}</p>
              
                ${p_open}
                <fiv><i onclick="welcomer.infoVa(${welcomer.div_not_i});" class="bi bi-info-circle" title="Preview project image. Detailed preview of the whole project coming soon!"></i></fiv>
                <img loading="lazy"  data-zoom-image="${v.img}" ${thi} ondragstart="return false;" onload="welcomer.loaded_img(this, ${welcomer.div_not_i});" src="${v.img}" alt="${v.title}">
                       </grider_box>

                </project>`);
        welcomer.div_not_i++;
    }
    compTxt(s) {
        var div_not_i = 0;
        $("grider_viewer").html("");
        if (s == "") {
            this.#projects.forEach(function (v) {
                welcomer.cr(v);
            });
        } else {
            this.#projects.forEach(function (v) {
                if (v.title.indexOf(s) !== -1) {
                    welcomer.div_not_i = 0;
                    welcomer.cr(v);


                }

            });
        }
    }
    search_Kompjiler(tt) {

        const attr = $(tt).attr("data-hmm"),
            hd = $("div_header"),
            input = $("div_header input[type='text']").val();
        if (attr) {
            hd.addClass("ld_completeld_complete_search");

        }
        if (attr == "search") {

            welcomer.compTxt(input);
        }
        if (attr == "closeMe") {
            this.#hmmQ("Close search?", function () {
                hd.removeClass("ld_completeld_complete_search");
                $("btns_i input[type='text']").val("");
                new Welcomer().projectsload();

            });
        }
    }
    txt_cursor() {
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
    }

    parentTitler(element, text) {
        var offset = element.offset();

        $('#anchorTitle').html("<i style='padding-right:2px;' class='bi bi-info-square'></i> " + text)
            .attr("style", "opacity:1;");
    }
    showAnchorTitle(element, text) {

        var offset = element.offset();
        if ($('#anchorTitle').length > 0) {
            $('#anchorTitle').html("<i style='padding-right:2px;' class='bi bi-info-square'></i> " + text)
                .attr("style", "opacity:1;");
        } else {
            parent.welcomer.parentTitler(element, text);
        }
        /*
    $('#anchorTitle')
        .css({
            'top': (offset.top - element.outerHeight() - 4) + 'px',
            'left': offset.left + 'px'
        })
        .html(text)
        .show();*/
    }

    hideAnchorTitle() {
        if ($('#anchorTitle').length > 0) {
            $('#anchorTitle').removeAttr("style");
        } else {
            parent.welcomer.hideAnchorTitle();
        }
    }
    fpsMeter() {
        let prevTime = Date.now(),
            frames = 0,
            k = (performance || Date).now()

        requestAnimationFrame(function loop() {
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

                requestAnimationFrame(loop);
            }
        });
    }

    GPPU_ms() {
        //return  this.getUnmaskedInfo().renderer;
    }

    getUnmaskedInfo() {
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

    }
    get_events() {
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
    }
}

var welcomer = new Welcomer();


$(document).ready(function () {




    $.ajaxSetup({
        cache: true,
        async: true,
        global: true,
        headers: {
            "AuthV2-token": $('meta[name="csrf-token"]').attr('content')
        }
    });

    const isMobile = welcomer.isMobile();


    if (isMobile == true) {
        $(".cursor").remove();
        $(".anchorTitle").remove();
    }
    if (isMobile == false) {

        $('body').append('<div id="anchorTitle" class="anchorTitle"></div>');

        welcomer.get_events();


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


});

if (window.location.host == "portfolio.eronelit.com") {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log('SW registration succeeded with scope:', registration.scope);
        }).catch(function (e) {
            console.log('SW registration failed with error:', e);
        });
    }
}
const TWO_PI = Math.PI * 2;

class Application {
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
                let circleContainer = new CircleContainer(this.context, x, y);

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
}


class CircleContainer {
    constructor(context, x, y) {
        this.context = context;
        this.position = { x, y };
        if (welcomer.isMobile()) {
            this.numberOfCircles = 5;
            this.bounceRadius = 80;

        } else {
            this.numberOfCircles = 19;
            this.bounceRadius = 150;

        }
        this.circles = [];

        this.baseRadius = 20;
        this.singleSlice = TWO_PI / this.numberOfCircles;
    }

    initializeCircles() {
        for (let i = 0; i < this.numberOfCircles; i++) {
            this.circles.push(new Circle(this.position.x, this.position.y + Math.random(), this.baseRadius, this.bounceRadius, i * this.singleSlice));
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
        this.position.x = this.basePosition.x + Math.cos(this.angleCircle) * (Math.sin(this.angle + this.angleCircle) * this.bounceRadius + this.baseRadius);
        this.position.y = this.basePosition.y + Math.sin(this.angleCircle) * (Math.sin(this.angle + this.angleCircle) * this.bounceRadius + this.baseRadius);
        this.size = Math.cos(this.angle) * 8 + this.baseSize;

        this.angle += this.speed;
    }

    render(context) {
        $("body").attr("style", `background-color: hsl(${welcomer.Dots_color}, 100%, 7%) !important`);
        context.fillStyle = "hsl(" + welcomer.Dots_color + ", 100%, " + this.size * 4 + "%)";
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.size, 0, TWO_PI);
        context.fill();
    }
}


window.countFPS = (function () {
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
}());



(function (f, e) { "object" === typeof exports && "undefined" !== typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define(e) : f.Stats = e() })(this, function () {
    var f = function () {
        function e(a) { c.appendChild(a.dom); return a } function u(a) { for (var d = 0; d < c.children.length; d++)c.children[d].style.display = d === a ? "block" : "none"; l = a } var l = 0, c = document.createElement("div"); c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"; c.addEventListener("click", function (a) {
            a.preventDefault();
            u(++l % c.children.length)
        }, !1); var k = (performance || Date).now(), g = k, a = 0, r = e(new f.Panel("FPS", "#0ff", "#002")), h = e(new f.Panel("MS", "#0f0", "#020"));
        if (self.performance && self.performance.memory)
            var t = e(new f.Panel("MB", "#f08", "#201"));
        u(0);
        return {
            REVISION: 16, dom: c, addPanel: e, showPanel: u, begin: function () {
                k = (performance || Date).now()
            },
            end: function () {
                a++; var c = (performance || Date).now(); h.update(c - k, 200); if (c >= g + 1E3 && (r.update(1E3 * a / (c - g), 100), g = c, a = 0, t)) {
                    var d = performance.memory; t.update(d.usedJSHeapSize /
                        1048576, d.jsHeapSizeLimit / 1048576)
                } return c
            }, update: function () { k = this.end() }, domElement: c, setMode: u
        }
    }; f.Panel = function (e, f, l) {
        var c = Infinity, k = 0, g = Math.round, a = g(window.devicePixelRatio || 1), r = 80 * a, h = 48 * a, t = 3 * a, v = 2 * a, d = 3 * a, m = 15 * a, n = 74 * a, p = 30 * a, q = document.createElement("canvas"); q.width = r; q.height = h; q.style.cssText = "width:80px;height:48px"; var b = q.getContext("2d"); b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif"; b.textBaseline = "top"; b.fillStyle = l; b.fillRect(0, 0, r, h); b.fillStyle = f; b.fillText(e, t, v);
        b.fillRect(d, m, n, p); b.fillStyle = l; b.globalAlpha = .9; b.fillRect(d, m, n, p); return { dom: q, update: function (h, w) { c = Math.min(c, h); k = Math.max(k, h); b.fillStyle = l; b.globalAlpha = 1; b.fillRect(0, 0, r, m); b.fillStyle = f; b.fillText(g(h) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v); b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p); b.fillRect(d + n - a, m, a, p); b.fillStyle = l; b.globalAlpha = .9; b.fillRect(d + n - a, m, a, g((1 - h / w) * p)) } }
    }; return f
});

