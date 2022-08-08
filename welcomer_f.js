class Welcomer  {
    
    constructor() {

    }

    TopLeft = {
        y: 0,
        x: 0
    };

    start(j) {
        document.querySelector("iframe").addEventListener("load", function () {
            // pgloader("yes");
            console.log(1);
        }); document.getElementById("clavs").setAttribute("style", "transform: translateY(-100%);");

    };

    bell_over(h) {

        document.querySelector("#logo_backscr_img").classList.add("activeBell");
    };
    bell_out(o) {
        document.querySelector("#logo_backscr_img").classList.remove("activeBell");

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

        var ljoader = document.querySelector("#reaload_page"),
            Vjideo_sjpinner = document.querySelector(".Vjideo_sjpinner"),
            div_header = document.querySelector("div_header"),
            iframe = document.createElement("iframe");
        if (url == "yes") {
            $(ljoader).show();
            $(Vjideo_sjpinner).hide();
            $("div_header span").html($("iframe").contents().find("title").html());
            $("div_header").addClass("ld_completeld_complete");

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

    f_blob(url = "") {
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
        hmm("Are you sure to close? You are only closing the built-in browser. You do not close the card.", function () {
            $("#clavs").attr("style", "transform: translateY(-100%);");
            setTimeout(function () {
                $("iframe").attr("src", "");
                $("iframe").removeAttr("style");
            }, 1000);
        });
    };
    share() {
        if (navigator.share) {
            navigator.share({
                title: $("iframe").contents().find("title").text(),
                text: "Shared from - " + window.location.origin,
                url: $("iframe").attr("src")
            })
                .then(() => console.log('Successful share'))
                .catch(error => console.log('Error sharing:', error));
        }
    }
    hideCursor() {
        $(".cursor").hide();
    }

    hmm(qust = "", call) {
        $("div_not").attr("style", "top: 45px !important;");
        // var answer = window.confirm(qust);
        // if (answer) {
        //     call();
        //}
        $("div_not div_panel span").text(qust);
        $("#clavs iframe").css({
            "filter": "grayscale(1) blur(2px)",
            "pointer-events": "none"
        });
        $("box_h").show();

        $("btns btn2").on("click", function () {
            $("div_not").removeAttr("style");

            $("#clavs iframe").removeAttr("style");
            $("box_h").hide();
        });
        $("btns btn1").on("click", function () {
            $("div_not").removeAttr("style");
            $("box_h").hide();

            call();
        });
    }
    question_no() {
        $("div_not").removeAttr("style");

        $("#clavs iframe").removeAttr("style");
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
            success: function (res) {
                blob = new Blob([res], { type: "text/html" });
                objectURL = URL.createObjectURL(blob);
                $("iframe").attr("src", objectURL);
            },
            async: false
        });
    };



    Img_cursor() {
        cursor.css({
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
        cursor.css({
            transform: "scale(1)",
            "font-size": "unset",
            "padding": "unset",
            "padding-top": "unset",
            "border-radius": "50%",
            "mix-blend-mode": "difference",
            "display": "unset"

        });
    }

    txt_cursor() {
        $("input[type='text'], textarea, input[type='search'], .trumbowyg-box .trumbowyg-editor" +
            " , .invoice-box input").click(function () {
                cursor.css({
                    transform: "scale(0.1, 1.5)",
                    "border-radius": "5px"
                });
                cursor.html("");

            }).contextmenu(function () {
                cursor.css({
                    transform: "scale(0.1, 1.5)",
                    "border-radius": "5px"
                });
                cursor.html("");

            }).mouseenter(function () {
                cursor.css({
                    transform: "scale(0.1, 1.5)",
                    "border-radius": "5px"
                });
                cursor.html("");

            }).mouseleave(function () {
                cursor.css({
                    transform: "scale(1)",
                    "border-radius": "50%",
                    "mix-blend-mode": "difference"

                });
            });
    }
}

var welcomer = new Welcomer();


$(document).ready(function () {

    var isMobile = false;

    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }



    if (isMobile == true) {
        $(".cursor").remove();
    }
    if (isMobile == false) {


        var cursor = $(".cursor");
        cursor.addClass("cursor_pc_show");


        $(window).mousemove(function (e) {
            cursor.css({
                top: e.clientY - cursor.height() / 2,
                left: e.clientX - cursor.width() / 2
            });
            welcomer.TopLeft = {
                y: e.clientY - cursor.height() / 2,
                x: e.clientX - cursor.width() / 2
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
            $("iframe").hover(function () {
                $(".cursor").hide();
            }).mouseleave(function () {
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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
        console.log('SW registration succeeded with scope:', registration.scope);
    }).catch(function (e) {
        console.log('SW registration failed with error:', e);
    });
}