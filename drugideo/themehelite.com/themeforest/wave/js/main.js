/* * WAVE - Sliding Coming Soon Template
*
* This is a premium product available exclusively at this address http://themeforest.net/user/madeon08/portfolio
*
* The demo files are minified/crypted for copyright reasons, you will find them, expanded, commented and coded accurately in your download pack.
*
* Thanks for your support!
*
* */
$(window).load(function () {
    "use strict"; setTimeout(function ()
    {
        $("#loading").addClass("animated-middle fadeOut")
    }, 2e3), setTimeout(function () {
        setTimeout(function ()

        { $(".text-intro").each(function (e) { !function (n) { setTimeout(function () { $(n).addClass("animated-middle fadeInUp").removeClass("opacity-0") }, 150 * e + 150) }(this) }) }, 0)
    }, 2e3), setTimeout(function ()
        { $(".bar-intro").addClass("animated-middle slideInDown").removeClass("opacity-0"), $(".nav-intro").addClass("animated-middle slideInUp").removeClass("opacity-0"), $(".nav-arrows span").removeClass("opacity-0").addClass("show-arrows") }, 3e3), setTimeout(function () {
            $("#loading").remove()

        }, 3300), setTimeout(function () {


            $(".text-intro").removeClass("animated-middle fadeInUp")
        }, 4e3) }), $(document).ready(function () {
    "use strict"; function e()
    { $(".content-slide").mCustomScrollbar({ scrollInertia: 150, axis: "y" }) } $("#loading").removeClass("dark-back"), $(".loading-text").addClass("animated-middle fadeIn").removeClass("opacity-0"), e(), $("#notifyMe").notifyMe(), function () { var e = document.querySelector("[data-dialog]"), n = document.getElementById(e.getAttribute("data-dialog")), s = new DialogFx(n); e.addEventListener("click", s.toggle.bind(s)) }(), $(".bg-1 .sl-slide-inner , .bg-1 .sl-content-slice").css("background", "url('http://cdn.themehelite.com/themeforest/wave/img/slide-1.jpg') center").css("background-size", "cover"), $(".bg-2 .sl-slide-inner , .bg-1 .sl-content-slice").css("background", "url('file:///D:/Moji%20projekti%20(programiranje)/ERONEL%20SDK%20PROJECTS/WebSite/WebsiteCo/drugideo/themehelite.com/themeforest/wave/img/3f871f526375fe52473c220d13f0017b.jpg') center").css("background-size", "cover"), $(".bg-3 .sl-slide-inner , .bg-1 .sl-content-slice").css("background", "url('http://cdn.themehelite.com/themeforest/wave/img/slide-3.jpg') center").css("background-size", "cover"), $(".bg-4 .sl-slide-inner , .bg-1 .sl-content-slice").css("background", "url('http://cdn.themehelite.com/themeforest/wave/img/slide-4.jpg') center").css("background-size", "cover"), $(".bg-5 .sl-slide-inner , .bg-1 .sl-content-slice").css("background", "url('http://cdn.themehelite.com/themeforest/wave/img/slide-5.jpg') center").css("background-size", "cover"), $(function () {
        var e = function ()
        {
            var e = $("#nav-arrows"), n = $("#nav-multi-square > span"), s = $("#slider").slitslider(
                { onBeforeChange: function (e, s) { n.removeClass("nav-square-current"), n.eq(s).addClass("nav-square-current") } }), i = function () { t() }, t = function () { e.children(":last").on("click", function () { return s.next(), !1 }), e.children(":first").on("click", function () { return s.previous(), !1 }), n.each(function (e) { $(this).on("click", function (i) { var t = $(this); return s.isActive() || (n.removeClass("nav-square-current"), t.addClass("nav-square-current")), s.jump(e + 1), !1 }) }) }; return { init: i }
        }(); e.init()



    })
}

document.onkeypress = function (event) {
    event = (event || window.event);
        if (event.keyCode == 123) {
            return false;
        }
    }
document.onmousedown = function (event) {
    event = (event || window.event);
        if (event.keyCode == 123) {
            return false;
        }
    }
document.onkeydown = function (event) {
    event = (event || window.event);
        if (event.keyCode == 123) {
            return false;
        }
    }
);