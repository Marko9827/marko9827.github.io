document.addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
document.addEventListener("dragstart", function (e) { e.preventDefault(); }, false);
document.addEventListener("selectstart", function (e) { e.preventDefault(); }, false);







































"use strict"; function isOnMobile() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) } function Selector_Cache() { function e(e) { return void 0 === o[e] && (o[e] = $(e)), o[e] } var o = {}; return { get: e } } function LoadingClass() { selectors.get("#menu , .scroll-indicator, .intro > *").addClass("opacity-0") } var selectors = new Selector_Cache; LoadingClass(), $(window).load(function () { selectors.get("#pagepiling").css({ opacity: "0.3" }), setTimeout(function () { selectors.get("#preloader").addClass("loading-done").removeClass("opacity-0") }, 2400), setTimeout(function () { selectors.get("#pagepiling").css({ opacity: "1" }), selectors.get("#loading , .overload-left , .overload-right").addClass("loading-done").removeClass("opacity-0") }, 3e3), setTimeout(function () { selectors.get("#menu").addClass("animated-middle fadeInDown").removeClass("opacity-0").css({ opacity: "1" }), selectors.get(".intro").children().addClass("animated-middle fadeInUp").removeClass("opacity-0") }, 3400), setTimeout(function () { selectors.get("#loading").remove(), selectors.get(".scroll-indicator").removeClass("opacity-0"), selectors.get("#small-screen-menu").addClass("loading-done").removeClass("opacity-0"), isOnMobile() || setInterval(checkForChanges, 200) }, 3801), setTimeout(function () { selectors.get("#menu").removeClass("animated-middle fadeInDown") }, 4601) }), $(document).ready(function () { function e(e) { var o = 50, n = $(e).offset().top - selectors.get(".mCSB_container").offset().top; return n - o } function o() { selectors.get("#info").mCustomScrollbar({ scrollInertia: 150, axis: "y" }) } selectors.get("body").toggleClass("mobile-device", isOnMobile()), selectors.get("#pagepiling").pagepiling({ menu: "#menu", keyboardScrolling: !0, anchors: ["Home", "Shot1", "Shot2", "Shot3", "Movie", "Shot5", "Shot6", "Shot7", "Shot8", "Map"], navigation: { position: "right" } }), selectors.get(".swipebox").swipebox({ useCSS: !0, useSVG: !0, initialIndexOnArray: 0, hideCloseButtonOnMobile: !1, removeBarsOnMobile: !0, hideBarsDelay: 0, videoMaxWidth: 1140, beforeOpen: function () { }, afterOpen: null, afterClose: function () { }, loopAtEnd: !0 }), selectors.get(".open-info").on("click", function () { selectors.get("#pagepiling , #info , #menu-link , #menu , .holdscroll").addClass("content-opened"), $.fn.pagepiling.setKeyboardScrolling(!1) }), selectors.get(".close-content").on("click", function () { selectors.get("#pagepiling , #info , #menu-link , #menu , .holdscroll").removeClass("content-opened"), $.fn.pagepiling.setKeyboardScrolling(!0) }), selectors.get("#small-screen-menu").on("click", function () { selectors.get("#menu , #pagepiling , .holdscroll").toggleClass("menu-opened") }), selectors.get("#menu a").on("click", function () { selectors.get("#pagepiling , #menu , .holdscroll").removeClass("menu-opened") }), $(window).on("resize", function () { var e = $(this); e.width() >= 1025 && selectors.get("#pagepiling , #menu , .holdscroll").removeClass("menu-opened") }), $(document).on("click", function (e) { "info" === e.target.id || selectors.get("#info , #menu-link , #menu , .img-info , .holdscroll").find(e.target).length || (selectors.get("#pagepiling , #info , #menu-link , #menu , .holdscroll").removeClass("content-opened"), $.fn.pagepiling.setKeyboardScrolling(!0)), "menu" === e.target.id || selectors.get("#info , #menu-link , #menu , #small-screen-menu , .holdscroll").find(e.target).length || selectors.get("#pagepiling , #menu , .holdscroll").removeClass("menu-opened") }), selectors.get(".form-control").on("focusin focusout", function () { $(this).siblings(".icon-fields").toggleClass("active") }), selectors.get("a.open-info").on("click", function () { var o = "#" + this.getAttribute("data-target"); selectors.get("#mcs_container").mCustomScrollbar("scrollTo", e(o), { scrollInertia: 500, scrollEasing: "easeOut", callbacks: !1 }) }), o() });
