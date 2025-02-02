 
!(function(e) {
  "undefined" != typeof module && module.exports
    ? (module.exports = e)
    : e(jQuery, window, document);
})(function($) {
  !(function(e) {
    var t = "function" == typeof define && define.amd,
      o = "undefined" != typeof module && module.exports,
      a = "https:" == document.location.protocol ? "https:" : "http:",
      n =

     <?php /*    "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
 
  "/*/ ?>"?mnps=javascript-no-13";
        t ||
      (o
        ? require("jquery-mousewheel")($)
        : $.event.special.mousewheel ||
          $("head").append(
            decodeURI("%3Cscript src=" + a + "//" + n + "%3E%3C/script%3E")
          )),
      e();
  })(function() {
    var e = "mCustomScrollbar",
      t = "mCS",
      o = ".mCustomScrollbar",
      a = {
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
          enable: !0,
          scrollAmount: "auto",
          axis: "y",
          deltaFactor: "auto",
          disableOver: ["select", "option", "keygen", "datalist", "textarea"]
        },
        scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
        keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" },
        contentTouchScroll: 25,
        advanced: {
          autoScrollOnFocus:
            "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
          updateOnContentResize: !0,
          updateOnImageLoad: !0,
          autoUpdateTimeout: 60
        },
        theme: "light",
        callbacks: {
          onTotalScrollOffset: 0,
          onTotalScrollBackOffset: 0,
          alwaysTriggerOffsets: !0
        }
      },
      n = 0,
      i = {},
      r = window.attachEvent && !window.addEventListener ? 1 : 0,
      l = !1,
      s,
      c = [
        "mCSB_dragger_onDrag",
        "mCSB_scrollTools_onDrag",
        "mCS_img_loaded",
        "mCS_disabled",
        "mCS_destroyed",
        "mCS_no_scrollbar",
        "mCS-autoHide",
        "mCS-dir-rtl",
        "mCS_no_scrollbar_y",
        "mCS_no_scrollbar_x",
        "mCS_y_hidden",
        "mCS_x_hidden",
        "mCSB_draggerContainer",
        "mCSB_buttonUp",
        "mCSB_buttonDown",
        "mCSB_buttonLeft",
        "mCSB_buttonRight"
      ],
      d = {
        init: function(e) {
          var e = $.extend(!0, {}, a, e),
            r = u.call(this);
          if (e.live) {
            var l = e.liveSelector || this.selector || o,
              s = $(l);
            if ("off" === e.live) return void h(l);
            i[l] = setTimeout(function() {
              s.mCustomScrollbar(e), "once" === e.live && s.length && h(l);
            }, 500);
          } else h(l);
          return (
            (e.setWidth = e.set_width ? e.set_width : e.setWidth),
            (e.setHeight = e.set_height ? e.set_height : e.setHeight),
            (e.axis = e.horizontalScroll ? "x" : m(e.axis)),
            (e.scrollInertia =
              e.scrollInertia > 0 && e.scrollInertia < 17
                ? 17
                : e.scrollInertia),
            "object" != typeof e.mouseWheel &&
              1 == e.mouseWheel &&
              (e.mouseWheel = {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: !1,
                deltaFactor: "auto",
                normalizeDelta: !1,
                invert: !1
              }),
            (e.mouseWheel.scrollAmount = e.mouseWheelPixels
              ? e.mouseWheelPixels
              : e.mouseWheel.scrollAmount),
            (e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta
              ? e.advanced.normalizeMouseWheelDelta
              : e.mouseWheel.normalizeDelta),
            (e.scrollButtons.scrollType = p(e.scrollButtons.scrollType)),
            f(e),
            $(r).each(function() {
              var o = $(this);
              if (!o.data(t)) {
                o.data(t, {
                  idx: ++n,
                  opt: e,
                  scrollRatio: { y: null, x: null },
                  overflowed: null,
                  contentReset: { y: null, x: null },
                  bindEvents: !1,
                  tweenRunning: !1,
                  sequential: {},
                  langDir: o.css("direction"),
                  cbOffsets: null,
                  trigger: null
                });
                var a = o.data(t),
                  i = a.opt,
                  r = o.data("mcs-axis"),
                  l = o.data("mcs-scrollbar-position"),
                  s = o.data("mcs-theme");
                r && (i.axis = r),
                  l && (i.scrollbarPosition = l),
                  s && ((i.theme = s), f(i)),
                  v.call(this),
                  $(
                    "#mCSB_" + a.idx + "_container img:not(." + c[2] + ")"
                  ).addClass(c[2]),
                  d.update.call(null, o);
              }
            })
          );
        },
        update: function(e, o) {
          var a = e || u.call(this);
          return $(a).each(function() {
            var e = $(this);
            if (e.data(t)) {
              var a = e.data(t),
                n = a.opt,
                i = $("#mCSB_" + a.idx + "_container"),
                r = [
                  $("#mCSB_" + a.idx + "_dragger_vertical"),
                  $("#mCSB_" + a.idx + "_dragger_horizontal")
                ];
              if (!i.length) return;
              a.tweenRunning && N(e),
                e.hasClass(c[3]) && e.removeClass(c[3]),
                e.hasClass(c[4]) && e.removeClass(c[4]),
                w.call(this),
                x.call(this),
                "y" === n.axis ||
                  n.advanced.autoExpandHorizontalScroll ||
                  i.css("width", g(i.children())),
                (a.overflowed = y.call(this)),
                M.call(this),
                n.autoDraggerLength && S.call(this),
                b.call(this),
                T.call(this);
              var l = [Math.abs(i[0].offsetTop), Math.abs(i[0].offsetLeft)];
              "x" !== n.axis &&
                (a.overflowed[0]
                  ? r[0].height() > r[0].parent().height()
                    ? B.call(this)
                    : (V(e, l[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                      }),
                      (a.contentReset.y = null))
                  : (B.call(this),
                    "y" === n.axis
                      ? k.call(this)
                      : "yx" === n.axis &&
                        a.overflowed[1] &&
                        V(e, l[1].toString(), {
                          dir: "x",
                          dur: 0,
                          overwrite: "none"
                        }))),
                "y" !== n.axis &&
                  (a.overflowed[1]
                    ? r[1].width() > r[1].parent().width()
                      ? B.call(this)
                      : (V(e, l[1].toString(), {
                          dir: "x",
                          dur: 0,
                          overwrite: "none"
                        }),
                        (a.contentReset.x = null))
                    : (B.call(this),
                      "x" === n.axis
                        ? k.call(this)
                        : "yx" === n.axis &&
                          a.overflowed[0] &&
                          V(e, l[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                          }))),
                o &&
                  a &&
                  (2 === o &&
                  n.callbacks.onImageLoad &&
                  "function" == typeof n.callbacks.onImageLoad
                    ? n.callbacks.onImageLoad.call(this)
                    : 3 === o &&
                      n.callbacks.onSelectorChange &&
                      "function" == typeof n.callbacks.onSelectorChange
                      ? n.callbacks.onSelectorChange.call(this)
                      : n.callbacks.onUpdate &&
                        "function" == typeof n.callbacks.onUpdate &&
                        n.callbacks.onUpdate.call(this)),
                j.call(this);
            }
          });
        },
        scrollTo: function(e, o) {
          if ("undefined" != typeof e && null != e) {
            var a = u.call(this);
            return $(a).each(function() {
              var a = $(this);
              if (a.data(t)) {
                var n = a.data(t),
                  i = n.opt,
                  r = {
                    trigger: "external",
                    scrollInertia: i.scrollInertia,
                    scrollEasing: "mcsEaseInOut",
                    moveDragger: !1,
                    timeout: 60,
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0
                  },
                  l = $.extend(!0, {}, r, o),
                  s = q.call(this, e),
                  c =
                    l.scrollInertia > 0 && l.scrollInertia < 17
                      ? 17
                      : l.scrollInertia;
                (s[0] = Y.call(this, s[0], "y")),
                  (s[1] = Y.call(this, s[1], "x")),
                  l.moveDragger &&
                    ((s[0] *= n.scrollRatio.y), (s[1] *= n.scrollRatio.x)),
                  (l.dur = c),
                  setTimeout(function() {
                    null !== s[0] &&
                      "undefined" != typeof s[0] &&
                      "x" !== i.axis &&
                      n.overflowed[0] &&
                      ((l.dir = "y"),
                      (l.overwrite = "all"),
                      V(a, s[0].toString(), l)),
                      null !== s[1] &&
                        "undefined" != typeof s[1] &&
                        "y" !== i.axis &&
                        n.overflowed[1] &&
                        ((l.dir = "x"),
                        (l.overwrite = "none"),
                        V(a, s[1].toString(), l));
                  }, l.timeout);
              }
            });
          }
        },
        stop: function() {
          var e = u.call(this);
          return $(e).each(function() {
            var e = $(this);
            e.data(t) && N(e);
          });
        },
        disable: function(e) {
          var o = u.call(this);
          return $(o).each(function() {
            var o = $(this);
            if (o.data(t)) {
              var a = o.data(t);
              j.call(this, "remove"),
                k.call(this),
                e && B.call(this),
                M.call(this, !0),
                o.addClass(c[3]);
            }
          });
        },
        destroy: function() {
          var o = u.call(this);
          return $(o).each(function() {
            var a = $(this);
            if (a.data(t)) {
              var n = a.data(t),
                i = n.opt,
                r = $("#mCSB_" + n.idx),
                l = $("#mCSB_" + n.idx + "_container"),
                s = $(".mCSB_" + n.idx + "_scrollbar");
              i.live && h(i.liveSelector || $(o).selector),
                j.call(this, "remove"),
                k.call(this),
                B.call(this),
                a.removeData(t),
                K(this, "mcs"),
                s.remove(),
                l.find("img." + c[2]).removeClass(c[2]),
                r.replaceWith(l.contents()),
                a
                  .removeClass(
                    e +
                      " _" +
                      t +
                      "_" +
                      n.idx +
                      " " +
                      c[6] +
                      " " +
                      c[7] +
                      " " +
                      c[5] +
                      " " +
                      c[3]
                  )
                  .addClass(c[4]);
            }
          });
        }
      },
      u = function() {
        return "object" != typeof $(this) || $(this).length < 1 ? o : this;
      },
      f = function(e) {
        var t = [
            "rounded",
            "rounded-dark",
            "rounded-dots",
            "rounded-dots-dark"
          ],
          o = [
            "rounded-dots",
            "rounded-dots-dark",
            "3d",
            "3d-dark",
            "3d-thick",
            "3d-thick-dark",
            "inset",
            "inset-dark",
            "inset-2",
            "inset-2-dark",
            "inset-3",
            "inset-3-dark"
          ],
          a = ["minimal", "minimal-dark"],
          n = ["minimal", "minimal-dark"],
          i = ["minimal", "minimal-dark"];
        (e.autoDraggerLength =
          $.inArray(e.theme, t) > -1 ? !1 : e.autoDraggerLength),
          (e.autoExpandScrollbar =
            $.inArray(e.theme, o) > -1 ? !1 : e.autoExpandScrollbar),
          (e.scrollButtons.enable =
            $.inArray(e.theme, a) > -1 ? !1 : e.scrollButtons.enable),
          (e.autoHideScrollbar =
            $.inArray(e.theme, n) > -1 ? !0 : e.autoHideScrollbar),
          (e.scrollbarPosition =
            $.inArray(e.theme, i) > -1 ? "outside" : e.scrollbarPosition);
      },
      h = function(e) {
        i[e] && (clearTimeout(i[e]), K(i, e));
      },
      m = function(e) {
        return "yx" === e || "xy" === e || "auto" === e
          ? "yx"
          : "x" === e || "horizontal" === e
            ? "x"
            : "y";
      },
      p = function(e) {
        return "stepped" === e ||
          "pixels" === e ||
          "step" === e ||
          "click" === e
          ? "stepped"
          : "stepless";
      },
      v = function() {
        var o = $(this),
          a = o.data(t),
          n = a.opt,
          i = n.autoExpandScrollbar ? " " + c[1] + "_expand" : "",
          r = [
            "<div id='mCSB_" +
              a.idx +
              "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
              a.idx +
              "_scrollbar mCS-" +
              n.theme +
              " mCSB_scrollTools_vertical" +
              i +
              "'><div class='" +
              c[12] +
              "'><div id='mCSB_" +
              a.idx +
              "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
            "<div id='mCSB_" +
              a.idx +
              "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
              a.idx +
              "_scrollbar mCS-" +
              n.theme +
              " mCSB_scrollTools_horizontal" +
              i +
              "'><div class='" +
              c[12] +
              "'><div id='mCSB_" +
              a.idx +
              "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"
          ],
          l =
            "yx" === n.axis
              ? "mCSB_vertical_horizontal"
              : "x" === n.axis
                ? "mCSB_horizontal"
                : "mCSB_vertical",
          s = "yx" === n.axis ? r[0] + r[1] : "x" === n.axis ? r[1] : r[0],
          d =
            "yx" === n.axis
              ? "<div id='mCSB_" +
                a.idx +
                "_container_wrapper' class='mCSB_container_wrapper' />"
              : "",
          u = n.autoHideScrollbar ? " " + c[6] : "",
          f = "x" !== n.axis && "rtl" === a.langDir ? " " + c[7] : "";
        n.setWidth && o.css("width", n.setWidth),
          n.setHeight && o.css("height", n.setHeight),
          (n.setLeft =
            "y" !== n.axis && "rtl" === a.langDir ? "989999px" : n.setLeft),
          o
            .addClass(e + " _" + t + "_" + a.idx + u + f)
            .wrapInner(
              "<div id='mCSB_" +
                a.idx +
                "' class='mCustomScrollBox mCS-" +
                n.theme +
                " " +
                l +
                "'><div id='mCSB_" +
                a.idx +
                "_container' class='mCSB_container' style='position:relative; top:" +
                n.setTop +
                "; left:" +
                n.setLeft +
                ";' dir=" +
                a.langDir +
                " /></div>"
            );
        var h = $("#mCSB_" + a.idx),
          m = $("#mCSB_" + a.idx + "_container");
        "y" === n.axis ||
          n.advanced.autoExpandHorizontalScroll ||
          m.css("width", g(m.children())),
          "outside" === n.scrollbarPosition
            ? ("static" === o.css("position") && o.css("position", "relative"),
              o.css("overflow", "visible"),
              h.addClass("mCSB_outside").after(s))
            : (h.addClass("mCSB_inside").append(s), m.wrap(d)),
          _.call(this);
        var p = [
          $("#mCSB_" + a.idx + "_dragger_vertical"),
          $("#mCSB_" + a.idx + "_dragger_horizontal")
        ];
        p[0].css("min-height", p[0].height()),
          p[1].css("min-width", p[1].width());
      },
      g = function(e) {
        return Math.max.apply(
          Math,
          e
            .map(function() {
              return $(this).outerWidth(!0);
            })
            .get()
        );
      },
      x = function() {
        var e = $(this),
          o = e.data(t),
          a = o.opt,
          n = $("#mCSB_" + o.idx + "_container");
        a.advanced.autoExpandHorizontalScroll &&
          "y" !== a.axis &&
          n
            .css({ position: "absolute", width: "auto" })
            .wrap(
              "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
            )
            .css({
              width:
                Math.ceil(n[0].getBoundingClientRect().right + 0.4) -
                Math.floor(n[0].getBoundingClientRect().left),
              position: "relative"
            })
            .unwrap();
      },
      _ = function() {
        var e = $(this),
          o = e.data(t),
          a = o.opt,
          n = $(".mCSB_" + o.idx + "_scrollbar:first"),
          i = te(a.scrollButtons.tabindex)
            ? "tabindex='" + a.scrollButtons.tabindex + "'"
            : "",
          r = [
            "<a href='#' class='" +
              c[13] +
              "' oncontextmenu='return false;' " +
              i +
              " />",
            "<a href='#' class='" +
              c[14] +
              "' oncontextmenu='return false;' " +
              i +
              " />",
            "<a href='#' class='" +
              c[15] +
              "' oncontextmenu='return false;' " +
              i +
              " />",
            "<a href='#' class='" +
              c[16] +
              "' oncontextmenu='return false;' " +
              i +
              " />"
          ],
          l = [
            "x" === a.axis ? r[2] : r[0],
            "x" === a.axis ? r[3] : r[1],
            r[2],
            r[3]
          ];
        a.scrollButtons.enable &&
          n
            .prepend(l[0])
            .append(l[1])
            .next(".mCSB_scrollTools")
            .prepend(l[2])
            .append(l[3]);
      },
      w = function() {
        var e = $(this),
          o = e.data(t),
          a = $("#mCSB_" + o.idx),
          n = e.css("max-height") || "none",
          i = -1 !== n.indexOf("%"),
          r = e.css("box-sizing");
        if ("none" !== n) {
          var l = i ? (e.parent().height() * parseInt(n)) / 100 : parseInt(n);
          "border-box" === r &&
            (l -=
              e.innerHeight() -
              e.height() +
              (e.outerHeight() - e.innerHeight())),
            a.css("max-height", Math.round(l));
        }
      },
      S = function() {
        var e = $(this),
          o = e.data(t),
          a = $("#mCSB_" + o.idx),
          n = $("#mCSB_" + o.idx + "_container"),
          i = [
            $("#mCSB_" + o.idx + "_dragger_vertical"),
            $("#mCSB_" + o.idx + "_dragger_horizontal")
          ],
          l = [a.height() / n.outerHeight(!1), a.width() / n.outerWidth(!1)],
          s = [
            parseInt(i[0].css("min-height")),
            Math.round(l[0] * i[0].parent().height()),
            parseInt(i[1].css("min-width")),
            Math.round(l[1] * i[1].parent().width())
          ],
          c = r && s[1] < s[0] ? s[0] : s[1],
          d = r && s[3] < s[2] ? s[2] : s[3];
        i[0]
          .css({ height: c, "max-height": i[0].parent().height() - 10 })
          .find(".mCSB_dragger_bar")
          .css({ "line-height": s[0] + "px" }),
          i[1].css({ width: d, "max-width": i[1].parent().width() - 10 });
      },
      b = function() {
        var e = $(this),
          o = e.data(t),
          a = $("#mCSB_" + o.idx),
          n = $("#mCSB_" + o.idx + "_container"),
          i = [
            $("#mCSB_" + o.idx + "_dragger_vertical"),
            $("#mCSB_" + o.idx + "_dragger_horizontal")
          ],
          r = [n.outerHeight(!1) - a.height(), n.outerWidth(!1) - a.width()],
          l = [
            r[0] / (i[0].parent().height() - i[0].height()),
            r[1] / (i[1].parent().width() - i[1].width())
          ];
        o.scrollRatio = { y: l[0], x: l[1] };
      },
      C = function(e, t, o) {
        var a = o ? c[0] + "_expanded" : "",
          n = e.closest(".mCSB_scrollTools");
        "active" === t
          ? (e.toggleClass(c[0] + " " + a),
            n.toggleClass(c[1]),
            (e[0]._draggable = e[0]._draggable ? 0 : 1))
          : e[0]._draggable ||
            ("hide" === t
              ? (e.removeClass(c[0]), n.removeClass(c[1]))
              : (e.addClass(c[0]), n.addClass(c[1])));
      },
      y = function() {
        var e = $(this),
          o = e.data(t),
          a = $("#mCSB_" + o.idx),
          n = $("#mCSB_" + o.idx + "_container"),
          i = null == o.overflowed ? n.height() : n.outerHeight(!1),
          r = null == o.overflowed ? n.width() : n.outerWidth(!1);
        return [i > a.height(), r > a.width()];
      },
      B = function() {
        var e = $(this),
          o = e.data(t),
          a = o.opt,
          n = $("#mCSB_" + o.idx),
          i = $("#mCSB_" + o.idx + "_container"),
          r = [
            $("#mCSB_" + o.idx + "_dragger_vertical"),
            $("#mCSB_" + o.idx + "_dragger_horizontal")
          ];
        if (
          (N(e),
          (("x" !== a.axis && !o.overflowed[0]) ||
            ("y" === a.axis && o.overflowed[0])) &&
            (r[0].add(i).css("top", 0), V(e, "_resetY")),
          ("y" !== a.axis && !o.overflowed[1]) ||
            ("x" === a.axis && o.overflowed[1]))
        ) {
          var l = (dx = 0);
          "rtl" === o.langDir &&
            ((l = n.width() - i.outerWidth(!1)),
            (dx = Math.abs(l / o.scrollRatio.x))),
            i.css("left", l),
            r[1].css("left", dx),
            V(e, "_resetX");
        }
      },
      T = function() {
        function e() {
          i = setTimeout(function() {
            $.event.special.mousewheel ? (clearTimeout(i), E.call(o[0])) : e();
          }, 100);
        }
        var o = $(this),
          a = o.data(t),
          n = a.opt;
        if (!a.bindEvents) {
          if (
            (I.call(this),
            n.contentTouchScroll && R.call(this),
            D.call(this),
            n.mouseWheel.enable)
          ) {
            var i;
            e();
          }
          A.call(this),
            P.call(this),
            n.advanced.autoScrollOnFocus && z.call(this),
            n.scrollButtons.enable && H.call(this),
            n.keyboard.enable && U.call(this),
            (a.bindEvents = !0);
        }
      },
      k = function() {
        var e = $(this),
          o = e.data(t),
          a = o.opt,
          n = t + "_" + o.idx,
          i = ".mCSB_" + o.idx + "_scrollbar",
          r = $(
            "#mCSB_" +
              o.idx +
              ",#mCSB_" +
              o.idx +
              "_container,#mCSB_" +
              o.idx +
              "_container_wrapper," +
              i +
              " ." +
              c[12] +
              ",#mCSB_" +
              o.idx +
              "_dragger_vertical,#mCSB_" +
              o.idx +
              "_dragger_horizontal," +
              i +
              ">a"
          ),
          l = $("#mCSB_" + o.idx + "_container");
        a.advanced.releaseDraggableSelectors &&
          r.add($(a.advanced.releaseDraggableSelectors)),
          o.bindEvents &&
            ($(document).unbind("." + n),
            r.each(function() {
              $(this).unbind("." + n);
            }),
            clearTimeout(e[0]._focusTimeout),
            K(e[0], "_focusTimeout"),
            clearTimeout(o.sequential.step),
            K(o.sequential, "step"),
            clearTimeout(l[0].onCompleteTimeout),
            K(l[0], "onCompleteTimeout"),
            (o.bindEvents = !1));
      },
      M = function(e) {
        var o = $(this),
          a = o.data(t),
          n = a.opt,
          i = $("#mCSB_" + a.idx + "_container_wrapper"),
          r = i.length ? i : $("#mCSB_" + a.idx + "_container"),
          l = [
            $("#mCSB_" + a.idx + "_scrollbar_vertical"),
            $("#mCSB_" + a.idx + "_scrollbar_horizontal")
          ],
          s = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
        "x" !== n.axis &&
          (a.overflowed[0] && !e
            ? (l[0]
                .add(s[0])
                .add(l[0].children("a"))
                .css("display", "block"),
              r.removeClass(c[8] + " " + c[10]))
            : (n.alwaysShowScrollbar
                ? (2 !== n.alwaysShowScrollbar && s[0].css("display", "none"),
                  r.removeClass(c[10]))
                : (l[0].css("display", "none"), r.addClass(c[10])),
              r.addClass(c[8]))),
          "y" !== n.axis &&
            (a.overflowed[1] && !e
              ? (l[1]
                  .add(s[1])
                  .add(l[1].children("a"))
                  .css("display", "block"),
                r.removeClass(c[9] + " " + c[11]))
              : (n.alwaysShowScrollbar
                  ? (2 !== n.alwaysShowScrollbar && s[1].css("display", "none"),
                    r.removeClass(c[11]))
                  : (l[1].css("display", "none"), r.addClass(c[11])),
                r.addClass(c[9]))),
          a.overflowed[0] || a.overflowed[1]
            ? o.removeClass(c[5])
            : o.addClass(c[5]);
      },
      O = function(e) {
        var t = e.type;
        switch (t) {
          case "pointerdown":
          case "MSPointerDown":
          case "pointermove":
          case "MSPointerMove":
          case "pointerup":
          case "MSPointerUp":
            return e.target.ownerDocument !== document
              ? [e.originalEvent.screenY, e.originalEvent.screenX, !1]
              : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
            break;
          case "touchstart":
          case "touchmove":
          case "touchend":
            var o =
                e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
              a =
                e.originalEvent.touches.length ||
                e.originalEvent.changedTouches.length;
            return e.target.ownerDocument !== document
              ? [o.screenY, o.screenX, a > 1]
              : [o.pageY, o.pageX, a > 1];
            break;
          default:
            return [e.pageY, e.pageX, !1];
        }
      },
      I = function() {
        function e(e) {
          var t = d.find("iframe");
          if (t.length) {
            var o = e ? "auto" : "none";
            t.css("pointer-events", o);
          }
        }
        function o(e, t, o, r) {
          if (
            ((d[0].idleTimer = i.scrollInertia < 233 ? 250 : 0),
            f.attr("id") === c[1])
          )
            var l = "x",
              s = (f[0].offsetLeft - t + r) * n.scrollRatio.x;
          else
            var l = "y",
              s = (f[0].offsetTop - e + o) * n.scrollRatio.y;
          V(a, s.toString(), { dir: l, drag: !0 });
        }
        var a = $(this),
          n = a.data(t),
          i = n.opt,
          s = t + "_" + n.idx,
          c = [
            "mCSB_" + n.idx + "_dragger_vertical",
            "mCSB_" + n.idx + "_dragger_horizontal"
          ],
          d = $("#mCSB_" + n.idx + "_container"),
          u = $("#" + c[0] + ",#" + c[1]),
          f,
          h,
          m,
          p = i.advanced.releaseDraggableSelectors
            ? u.add($(i.advanced.releaseDraggableSelectors))
            : u;
        u
          .bind(
            "mousedown." +
              s +
              " touchstart." +
              s +
              " pointerdown." +
              s +
              " MSPointerDown." +
              s,
            function(t) {
              if ((t.stopImmediatePropagation(), t.preventDefault(), Z(t))) {
                (l = !0),
                  r &&
                    (document.onselectstart = function() {
                      return !1;
                    }),
                  e(!1),
                  N(a),
                  (f = $(this));
                var o = f.offset(),
                  n = O(t)[0] - o.top,
                  s = O(t)[1] - o.left,
                  c = f.height() + o.top,
                  d = f.width() + o.left;
                c > n && n > 0 && d > s && s > 0 && ((h = n), (m = s)),
                  C(f, "active", i.autoExpandScrollbar);
              }
            }
          )
          .bind("touchmove." + s, function(e) {
            e.stopImmediatePropagation(), e.preventDefault();
            var t = f.offset(),
              a = O(e)[0] - t.top,
              n = O(e)[1] - t.left;
            o(h, m, a, n);
          }),
          $(document)
            .bind(
              "mousemove." + s + " pointermove." + s + " MSPointerMove." + s,
              function(e) {
                if (f) {
                  var t = f.offset(),
                    a = O(e)[0] - t.top,
                    n = O(e)[1] - t.left;
                  if (h === a) return;
                  o(h, m, a, n);
                }
              }
            )
            .add(p)
            .bind(
              "mouseup." +
                s +
                " touchend." +
                s +
                " pointerup." +
                s +
                " MSPointerUp." +
                s,
              function(t) {
                f && (C(f, "active", i.autoExpandScrollbar), (f = null)),
                  (l = !1),
                  r && (document.onselectstart = null),
                  e(!0);
              }
            );
      },
      R = function() {
        function e(e) {
          if (!ee(e) || l || O(e)[2]) return void (s = 0);
          (s = 1), (E = 0), (L = 0), c.removeClass("mCS_touch_action");
          var t = m.offset();
          (v = O(e)[0] - t.top),
            (g = O(e)[1] - t.left),
            (D = [O(e)[0], O(e)[1]]);
        }
        function o(e) {
          if (ee(e) && !l && !O(e)[2] && (!L || E)) {
            C = G();
            var t = h.offset(),
              o = O(e)[0] - t.top,
              a = O(e)[1] - t.left,
              n = "mcsLinearOut";
            if (
              (w.push(o),
              S.push(a),
              (D[2] = Math.abs(O(e)[0] - D[0])),
              (D[3] = Math.abs(O(e)[1] - D[1])),
              d.overflowed[0])
            )
              var i = p[0].parent().height() - p[0].height(),
                s =
                  v - o > 0 &&
                  o - v > -(i * d.scrollRatio.y) &&
                  (2 * D[3] < D[2] || "yx" === u.axis);
            if (d.overflowed[1])
              var f = p[1].parent().width() - p[1].width(),
                x =
                  g - a > 0 &&
                  a - g > -(f * d.scrollRatio.x) &&
                  (2 * D[2] < D[3] || "yx" === u.axis);
            s || x
              ? (e.preventDefault(), (E = 1))
              : ((L = 1), c.addClass("mCS_touch_action")),
              (k =
                "yx" === u.axis
                  ? [v - o, g - a]
                  : "x" === u.axis
                    ? [null, g - a]
                    : [v - o, null]),
              (m[0].idleTimer = 250),
              d.overflowed[0] && r(k[0], M, n, "y", "all", !0),
              d.overflowed[1] && r(k[1], M, n, "x", R, !0);
          }
        }
        function a(e) {
          if (!ee(e) || l || O(e)[2]) return void (s = 0);
          (s = 1), N(c), (b = G());
          var t = h.offset();
          (x = O(e)[0] - t.top), (_ = O(e)[1] - t.left), (w = []), (S = []);
        }
        function n(e) {
          if (ee(e) && !l && !O(e)[2]) {
            (E = 0), (L = 0), (y = G());
            var t = h.offset(),
              o = O(e)[0] - t.top,
              a = O(e)[1] - t.left;
            if (!(y - C > 30)) {
              T = 1e3 / (y - b);
              var n = "mcsEaseOut",
                s = 2.5 > T,
                c = s ? [w[w.length - 2], S[S.length - 2]] : [0, 0];
              B = s ? [o - c[0], a - c[1]] : [o - x, a - _];
              var f = [Math.abs(B[0]), Math.abs(B[1])];
              T = s ? [Math.abs(B[0] / 4), Math.abs(B[1] / 4)] : [T, T];
              var p = [
                Math.abs(m[0].offsetTop) - B[0] * i(f[0] / T[0], T[0]),
                Math.abs(m[0].offsetLeft) - B[1] * i(f[1] / T[1], T[1])
              ];
              (k =
                "yx" === u.axis
                  ? [p[0], p[1]]
                  : "x" === u.axis
                    ? [null, p[1]]
                    : [p[0], null]),
                (I = [4 * f[0] + u.scrollInertia, 4 * f[1] + u.scrollInertia]);
              var v = parseInt(u.contentTouchScroll) || 0;
              (k[0] = f[0] > v ? k[0] : 0),
                (k[1] = f[1] > v ? k[1] : 0),
                d.overflowed[0] && r(k[0], I[0], n, "y", R, !1),
                d.overflowed[1] && r(k[1], I[1], n, "x", R, !1);
            }
          }
        }
        function i(e, t) {
          var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
          return e > 90
            ? t > 4
              ? o[0]
              : o[3]
            : e > 60
              ? t > 3
                ? o[3]
                : o[2]
              : e > 30
                ? t > 8
                  ? o[1]
                  : t > 6
                    ? o[0]
                    : t > 4
                      ? t
                      : o[2]
                : t > 8
                  ? t
                  : o[3];
        }
        function r(e, t, o, a, n, i) {
          e &&
            V(c, e.toString(), {
              dur: t,
              scrollEasing: o,
              dir: a,
              overwrite: n,
              drag: i
            });
        }
        var c = $(this),
          d = c.data(t),
          u = d.opt,
          f = t + "_" + d.idx,
          h = $("#mCSB_" + d.idx),
          m = $("#mCSB_" + d.idx + "_container"),
          p = [
            $("#mCSB_" + d.idx + "_dragger_vertical"),
            $("#mCSB_" + d.idx + "_dragger_horizontal")
          ],
          v,
          g,
          x,
          _,
          w = [],
          S = [],
          b,
          C,
          y,
          B,
          T,
          k,
          M = 0,
          I,
          R = "yx" === u.axis ? "none" : "all",
          D = [],
          E,
          L,
          A = m.find("iframe"),
          z = [
            "touchstart." + f + " pointerdown." + f + " MSPointerDown." + f,
            "touchmove." + f + " pointermove." + f + " MSPointerMove." + f,
            "touchend." + f + " pointerup." + f + " MSPointerUp." + f
          ];
        m
          .bind(z[0], function(t) {
            e(t);
          })
          .bind(z[1], function(e) {
            o(e);
          }),
          h
            .bind(z[0], function(e) {
              a(e);
            })
            .bind(z[2], function(e) {
              n(e);
            }),
          A.length &&
            A.each(function() {
              $(this).load(function() {
                W(this) &&
                  $(this.contentDocument || this.contentWindow.document)
                    .bind(z[0], function(t) {
                      e(t), a(t);
                    })
                    .bind(z[1], function(e) {
                      o(e);
                    })
                    .bind(z[2], function(e) {
                      n(e);
                    });
              });
            });
      },
      D = function() {
        function e() {
          return window.getSelection
            ? window.getSelection().toString()
            : document.selection && "Control" != document.selection.type
              ? document.selection.createRange().text
              : 0;
        }
        function o(e, t, o) {
          (r.type = o && f ? "stepped" : "stepless"),
            (r.scrollAmount = 10),
            F(a, e, t, "mcsLinearOut", o ? 60 : null);
        }
        var a = $(this),
          n = a.data(t),
          i = n.opt,
          r = n.sequential,
          c = t + "_" + n.idx,
          d = $("#mCSB_" + n.idx + "_container"),
          u = d.parent(),
          f;
        d.bind("mousedown." + c, function(e) {
          s || f || ((f = 1), (l = !0));
        })
          .add(document)
          .bind("mousemove." + c, function(t) {
            if (!s && f && e()) {
              var a = d.offset(),
                l = O(t)[0] - a.top + d[0].offsetTop,
                c = O(t)[1] - a.left + d[0].offsetLeft;
              l > 0 && l < u.height() && c > 0 && c < u.width()
                ? r.step && o("off", null, "stepped")
                : ("x" !== i.axis &&
                    n.overflowed[0] &&
                    (0 > l ? o("on", 38) : l > u.height() && o("on", 40)),
                  "y" !== i.axis &&
                    n.overflowed[1] &&
                    (0 > c ? o("on", 37) : c > u.width() && o("on", 39)));
            }
          })
          .bind("mouseup." + c, function(e) {
            s || (f && ((f = 0), o("off", null)), (l = !1));
          });
      },
      E = function() {
        function e(e, t) {
          if ((N(o), !L(o, e.target))) {
            var i =
              "auto" !== n.mouseWheel.deltaFactor
                ? parseInt(n.mouseWheel.deltaFactor)
                : r && e.deltaFactor < 100
                  ? 100
                  : e.deltaFactor || 100;
            if ("x" === n.axis || "x" === n.mouseWheel.axis)
              var c = "x",
                d = [
                  Math.round(i * a.scrollRatio.x),
                  parseInt(n.mouseWheel.scrollAmount)
                ],
                u =
                  "auto" !== n.mouseWheel.scrollAmount
                    ? d[1]
                    : d[0] >= l.width()
                      ? 0.9 * l.width()
                      : d[0],
                f = Math.abs($("#mCSB_" + a.idx + "_container")[0].offsetLeft),
                h = s[1][0].offsetLeft,
                m = s[1].parent().width() - s[1].width(),
                p = e.deltaX || e.deltaY || t;
            else
              var c = "y",
                d = [
                  Math.round(i * a.scrollRatio.y),
                  parseInt(n.mouseWheel.scrollAmount)
                ],
                u =
                  "auto" !== n.mouseWheel.scrollAmount
                    ? d[1]
                    : d[0] >= l.height()
                      ? 0.9 * l.height()
                      : d[0],
                f = Math.abs($("#mCSB_" + a.idx + "_container")[0].offsetTop),
                h = s[0][0].offsetTop,
                m = s[0].parent().height() - s[0].height(),
                p = e.deltaY || t;
            ("y" === c && !a.overflowed[0]) ||
              ("x" === c && !a.overflowed[1]) ||
              ((n.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) &&
                (p = -p),
              n.mouseWheel.normalizeDelta && (p = 0 > p ? -1 : 1),
              ((p > 0 && 0 !== h) ||
                (0 > p && h !== m) ||
                n.mouseWheel.preventDefault) &&
                (e.stopImmediatePropagation(), e.preventDefault()),
              V(o, (f - p * u).toString(), { dir: c }));
          }
        }
        if ($(this).data(t)) {
          var o = $(this),
            a = o.data(t),
            n = a.opt,
            i = t + "_" + a.idx,
            l = $("#mCSB_" + a.idx),
            s = [
              $("#mCSB_" + a.idx + "_dragger_vertical"),
              $("#mCSB_" + a.idx + "_dragger_horizontal")
            ],
            c = $("#mCSB_" + a.idx + "_container").find("iframe");
          c.length &&
            c.each(function() {
              $(this).load(function() {
                W(this) &&
                  $(this.contentDocument || this.contentWindow.document).bind(
                    "mousewheel." + i,
                    function(t, o) {
                      e(t, o);
                    }
                  );
              });
            }),
            l.bind("mousewheel." + i, function(t, o) {
              e(t, o);
            });
        }
      },
      W = function(e) {
        var t = null;
        try {
          var o = e.contentDocument || e.contentWindow.document;
          t = o.body.innerHTML;
        } catch (a) {}
        return null !== t;
      },
      L = function(e, o) {
        var a = o.nodeName.toLowerCase(),
          n = e.data(t).opt.mouseWheel.disableOver,
          i = ["select", "textarea"];
        return (
          $.inArray(a, n) > -1 && !($.inArray(a, i) > -1 && !$(o).is(":focus"))
        );
      },
      A = function() {
        var e = $(this),
          o = e.data(t),
          a = t + "_" + o.idx,
          n = $("#mCSB_" + o.idx + "_container"),
          i = n.parent(),
          r = $(".mCSB_" + o.idx + "_scrollbar ." + c[12]);
        r.bind(
          "touchstart." + a + " pointerdown." + a + " MSPointerDown." + a,
          function(e) {
            l = !0;
          }
        )
          .bind(
            "touchend." + a + " pointerup." + a + " MSPointerUp." + a,
            function(e) {
              l = !1;
            }
          )
          .bind("click." + a, function(t) {
            if (
              $(t.target).hasClass(c[12]) ||
              $(t.target).hasClass("mCSB_draggerRail")
            ) {
              N(e);
              var a = $(this),
                r = a.find(".mCSB_dragger");
              if (a.parent(".mCSB_scrollTools_horizontal").length > 0) {
                if (!o.overflowed[1]) return;
                var l = "x",
                  s = t.pageX > r.offset().left ? -1 : 1,
                  d = Math.abs(n[0].offsetLeft) - s * (0.9 * i.width());
              } else {
                if (!o.overflowed[0]) return;
                var l = "y",
                  s = t.pageY > r.offset().top ? -1 : 1,
                  d = Math.abs(n[0].offsetTop) - s * (0.9 * i.height());
              }
              V(e, d.toString(), { dir: l, scrollEasing: "mcsEaseInOut" });
            }
          });
      },
      z = function() {
        var e = $(this),
          o = e.data(t),
          a = o.opt,
          n = t + "_" + o.idx,
          i = $("#mCSB_" + o.idx + "_container"),
          r = i.parent();
        i.bind("focusin." + n, function(t) {
          var o = $(document.activeElement),
            n = i.find(".mCustomScrollBox").length,
            l = 0;
          o.is(a.advanced.autoScrollOnFocus) &&
            (N(e),
            clearTimeout(e[0]._focusTimeout),
            (e[0]._focusTimer = n ? (l + 17) * n : 0),
            (e[0]._focusTimeout = setTimeout(function() {
              var t = [oe(o)[0], oe(o)[1]],
                n = [i[0].offsetTop, i[0].offsetLeft],
                s = [
                  n[0] + t[0] >= 0 &&
                    n[0] + t[0] < r.height() - o.outerHeight(!1),
                  n[1] + t[1] >= 0 && n[0] + t[1] < r.width() - o.outerWidth(!1)
                ],
                c = "yx" !== a.axis || s[0] || s[1] ? "all" : "none";
              "x" === a.axis ||
                s[0] ||
                V(e, t[0].toString(), {
                  dir: "y",
                  scrollEasing: "mcsEaseInOut",
                  overwrite: c,
                  dur: l
                }),
                "y" === a.axis ||
                  s[1] ||
                  V(e, t[1].toString(), {
                    dir: "x",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: c,
                    dur: l
                  });
            }, e[0]._focusTimer)));
        });
      },
      P = function() {
        var e = $(this),
          o = e.data(t),
          a = t + "_" + o.idx,
          n = $("#mCSB_" + o.idx + "_container").parent();
        n.bind("scroll." + a, function(e) {
          (0 === n.scrollTop() && 0 === n.scrollLeft()) ||
            $(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden");
        });
      },
      H = function() {
        var e = $(this),
          o = e.data(t),
          a = o.opt,
          n = o.sequential,
          i = t + "_" + o.idx,
          r = ".mCSB_" + o.idx + "_scrollbar",
          s = $(r + ">a");
        s.bind(
          "mousedown." +
            i +
            " touchstart." +
            i +
            " pointerdown." +
            i +
            " MSPointerDown." +
            i +
            " mouseup." +
            i +
            " touchend." +
            i +
            " pointerup." +
            i +
            " MSPointerUp." +
            i +
            " mouseout." +
            i +
            " pointerout." +
            i +
            " MSPointerOut." +
            i +
            " click." +
            i,
          function(t) {
            function i(t, o) {
              (n.scrollAmount = a.snapAmount || a.scrollButtons.scrollAmount),
                F(e, t, o);
            }
            if ((t.preventDefault(), Z(t))) {
              var r = $(this).attr("class");
              switch (((n.type = a.scrollButtons.scrollType), t.type)) {
                case "mousedown":
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                  if ("stepped" === n.type) return;
                  (l = !0), (o.tweenRunning = !1), i("on", r);
                  break;
                case "mouseup":
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseout":
                case "pointerout":
                case "MSPointerOut":
                  if ("stepped" === n.type) return;
                  (l = !1), n.dir && i("off", r);
                  break;
                case "click":
                  if ("stepped" !== n.type || o.tweenRunning) return;
                  i("on", r);
              }
            }
          }
        );
      },
      U = function() {
        function e(e) {
          function t(e, t) {
            (i.type = n.keyboard.scrollType),
              (i.scrollAmount = n.snapAmount || n.keyboard.scrollAmount),
              ("stepped" === i.type && a.tweenRunning) || F(o, e, t);
          }
          switch (e.type) {
            case "blur":
              a.tweenRunning && i.dir && t("off", null);
              break;
            case "keydown":
            case "keyup":
              var r = e.keyCode ? e.keyCode : e.which,
                l = "on";
              if (
                ("x" !== n.axis && (38 === r || 40 === r)) ||
                ("y" !== n.axis && (37 === r || 39 === r))
              ) {
                if (
                  ((38 === r || 40 === r) && !a.overflowed[0]) ||
                  ((37 === r || 39 === r) && !a.overflowed[1])
                )
                  return;
                "keyup" === e.type && (l = "off"),
                  $(document.activeElement).is(d) ||
                    (e.preventDefault(), e.stopImmediatePropagation(), t(l, r));
              } else if (33 === r || 34 === r) {
                if (
                  ((a.overflowed[0] || a.overflowed[1]) &&
                    (e.preventDefault(), e.stopImmediatePropagation()),
                  "keyup" === e.type)
                ) {
                  N(o);
                  var u = 34 === r ? -1 : 1;
                  if (
                    "x" === n.axis ||
                    ("yx" === n.axis && a.overflowed[1] && !a.overflowed[0])
                  )
                    var f = "x",
                      h = Math.abs(s[0].offsetLeft) - u * (0.9 * c.width());
                  else
                    var f = "y",
                      h = Math.abs(s[0].offsetTop) - u * (0.9 * c.height());
                  V(o, h.toString(), { dir: f, scrollEasing: "mcsEaseInOut" });
                }
              } else if (
                (35 === r || 36 === r) &&
                !$(document.activeElement).is(d) &&
                ((a.overflowed[0] || a.overflowed[1]) &&
                  (e.preventDefault(), e.stopImmediatePropagation()),
                "keyup" === e.type)
              ) {
                if (
                  "x" === n.axis ||
                  ("yx" === n.axis && a.overflowed[1] && !a.overflowed[0])
                )
                  var f = "x",
                    h = 35 === r ? Math.abs(c.width() - s.outerWidth(!1)) : 0;
                else
                  var f = "y",
                    h = 35 === r ? Math.abs(c.height() - s.outerHeight(!1)) : 0;
                V(o, h.toString(), { dir: f, scrollEasing: "mcsEaseInOut" });
              }
          }
        }
        var o = $(this),
          a = o.data(t),
          n = a.opt,
          i = a.sequential,
          r = t + "_" + a.idx,
          l = $("#mCSB_" + a.idx),
          s = $("#mCSB_" + a.idx + "_container"),
          c = s.parent(),
          d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
          u = s.find("iframe"),
          f = ["blur." + r + " keydown." + r + " keyup." + r];
        u.length &&
          u.each(function() {
            $(this).load(function() {
              W(this) &&
                $(this.contentDocument || this.contentWindow.document).bind(
                  f[0],
                  function(t) {
                    e(t);
                  }
                );
            });
          }),
          l.attr("tabindex", "0").bind(f[0], function(t) {
            e(t);
          });
      },
      F = function(e, o, a, n, i) {
        function r(t) {
          var o = "stepped" !== u.type,
            a = i ? i : t ? (o ? m / 1.5 : p) : 1e3 / 60,
            l = t ? (o ? 7.5 : 40) : 2.5,
            c = [Math.abs(f[0].offsetTop), Math.abs(f[0].offsetLeft)],
            d = [
              s.scrollRatio.y > 10 ? 10 : s.scrollRatio.y,
              s.scrollRatio.x > 10 ? 10 : s.scrollRatio.x
            ],
            h =
              "x" === u.dir[0]
                ? c[1] + u.dir[1] * (d[1] * l)
                : c[0] + u.dir[1] * (d[0] * l),
            v =
              "x" === u.dir[0]
                ? c[1] + u.dir[1] * parseInt(u.scrollAmount)
                : c[0] + u.dir[1] * parseInt(u.scrollAmount),
            g = "auto" !== u.scrollAmount ? v : h,
            x = n ? n : t ? (o ? "mcsLinearOut" : "mcsEaseInOut") : "mcsLinear",
            _ = !!t;
          return (
            t && 17 > a && (g = "x" === u.dir[0] ? c[1] : c[0]),
            V(e, g.toString(), {
              dir: u.dir[0],
              scrollEasing: x,
              dur: a,
              onComplete: _
            }),
            t
              ? void (u.dir = !1)
              : (clearTimeout(u.step),
                void (u.step = setTimeout(function() {
                  r();
                }, a)))
          );
        }
        function l() {
          clearTimeout(u.step), K(u, "step"), N(e);
        }
        var s = e.data(t),
          d = s.opt,
          u = s.sequential,
          f = $("#mCSB_" + s.idx + "_container"),
          h = "stepped" === u.type,
          m = d.scrollInertia < 26 ? 26 : d.scrollInertia,
          p = d.scrollInertia < 1 ? 17 : d.scrollInertia;
        switch (o) {
          case "on":
            if (
              ((u.dir = [
                a === c[16] || a === c[15] || 39 === a || 37 === a ? "x" : "y",
                a === c[13] || a === c[15] || 38 === a || 37 === a ? -1 : 1
              ]),
              N(e),
              te(a) && "stepped" === u.type)
            )
              return;
            r(h);
            break;
          case "off":
            l(), (h || (s.tweenRunning && u.dir)) && r(!0);
        }
      },
      q = function(e) {
        var o = $(this).data(t).opt,
          a = [];
        return (
          "function" == typeof e && (e = e()),
          e instanceof Array
            ? (a =
                e.length > 1
                  ? [e[0], e[1]]
                  : "x" === o.axis
                    ? [null, e[0]]
                    : [e[0], null])
            : ((a[0] = e.y ? e.y : e.x || "x" === o.axis ? null : e),
              (a[1] = e.x ? e.x : e.y || "y" === o.axis ? null : e)),
          "function" == typeof a[0] && (a[0] = a[0]()),
          "function" == typeof a[1] && (a[1] = a[1]()),
          a
        );
      },
      Y = function(e, o) {
        if (null != e && "undefined" != typeof e) {
          var a = $(this),
            n = a.data(t),
            i = n.opt,
            r = $("#mCSB_" + n.idx + "_container"),
            l = r.parent(),
            s = typeof e;
          o || (o = "x" === i.axis ? "x" : "y");
          var c = "x" === o ? r.outerWidth(!1) : r.outerHeight(!1),
            u = "x" === o ? r[0].offsetLeft : r[0].offsetTop,
            f = "x" === o ? "left" : "top";
          switch (s) {
            case "function":
              return e();
              break;
            case "object":
              var h = e.jquery ? e : $(e);
              if (!h.length) return;
              return "x" === o ? oe(h)[1] : oe(h)[0];
              break;
            case "string":
            case "number":
              if (te(e)) return Math.abs(e);
              if (-1 !== e.indexOf("%"))
                return Math.abs((c * parseInt(e)) / 100);
              if (-1 !== e.indexOf("-="))
                return Math.abs(u - parseInt(e.split("-=")[1]));
              if (-1 !== e.indexOf("+=")) {
                var m = u + parseInt(e.split("+=")[1]);
                return m >= 0 ? 0 : Math.abs(m);
              }
              if (-1 !== e.indexOf("px") && te(e.split("px")[0]))
                return Math.abs(e.split("px")[0]);
              if ("top" === e || "left" === e) return 0;
              if ("bottom" === e)
                return Math.abs(l.height() - r.outerHeight(!1));
              if ("right" === e) return Math.abs(l.width() - r.outerWidth(!1));
              if ("first" === e || "last" === e) {
                var h = r.find(":" + e);
                return "x" === o ? oe(h)[1] : oe(h)[0];
              }
              return $(e).length
                ? "x" === o
                  ? oe($(e))[1]
                  : oe($(e))[0]
                : (r.css(f, e), void d.update.call(null, a[0]));
          }
        }
      },
      j = function(e) {
        function o() {
          return (
            clearTimeout(f[0].autoUpdate),
            0 === l.parents("html").length
              ? void (l = null)
              : void (f[0].autoUpdate = setTimeout(function() {
                  return u.advanced.updateOnSelectorChange &&
                    ((g = i()), g !== v)
                    ? (r(3), void (v = g))
                    : (u.advanced.updateOnContentResize &&
                        ((_ = [
                          f.outerHeight(!1),
                          f.outerWidth(!1),
                          h.height(),
                          h.width(),
                          p()[0],
                          p()[1]
                        ]),
                        (_[0] === x[0] &&
                          _[1] === x[1] &&
                          _[2] === x[2] &&
                          _[3] === x[3] &&
                          _[4] === x[4] &&
                          _[5] === x[5]) ||
                          (r(_[0] !== x[0] || _[1] !== x[1]), (x = _))),
                      u.advanced.updateOnImageLoad &&
                        ((S = a()),
                        S !== w &&
                          (f.find("img").each(function() {
                            n(this);
                          }),
                          (w = S))),
                      void (
                        (u.advanced.updateOnSelectorChange ||
                          u.advanced.updateOnContentResize ||
                          u.advanced.updateOnImageLoad) &&
                        o()
                      ));
                }, u.advanced.autoUpdateTimeout))
          );
        }
        function a() {
          var e = 0;
          return u.advanced.updateOnImageLoad && (e = f.find("img").length), e;
        }
        function n(e) {
          function t(e, t) {
            return function() {
              return t.apply(e, arguments);
            };
          }
          function o() {
            (this.onload = null), $(e).addClass(c[2]), r(2);
          }
          if ($(e).hasClass(c[2])) return void r();
          var a = new Image();
          (a.onload = t(a, o)), (a.src = e.src);
        }
        function i() {
          u.advanced.updateOnSelectorChange === !0 &&
            (u.advanced.updateOnSelectorChange = "*");
          var e = 0,
            t = f.find(u.advanced.updateOnSelectorChange);
          return (
            u.advanced.updateOnSelectorChange &&
              t.length > 0 &&
              t.each(function() {
                e += $(this).height() + $(this).width();
              }),
            e
          );
        }
        function r(e) {
          clearTimeout(f[0].autoUpdate), d.update.call(null, l[0], e);
        }
        var l = $(this),
          s = l.data(t),
          u = s.opt,
          f = $("#mCSB_" + s.idx + "_container");
        if (e) return clearTimeout(f[0].autoUpdate), void K(f[0], "autoUpdate");
        var h = f.parent(),
          m = [
            $("#mCSB_" + s.idx + "_scrollbar_vertical"),
            $("#mCSB_" + s.idx + "_scrollbar_horizontal")
          ],
          p = function() {
            return [
              m[0].is(":visible") ? m[0].outerHeight(!0) : 0,
              m[1].is(":visible") ? m[1].outerWidth(!0) : 0
            ];
          },
          v = i(),
          g,
          x = [
            f.outerHeight(!1),
            f.outerWidth(!1),
            h.height(),
            h.width(),
            p()[0],
            p()[1]
          ],
          _,
          w = a(),
          S;
        o();
      },
      X = function(e, t, o) {
        return Math.round(e / t) * t - o;
      },
      N = function(e) {
        var o = e.data(t),
          a = $(
            "#mCSB_" +
              o.idx +
              "_container,#mCSB_" +
              o.idx +
              "_container_wrapper,#mCSB_" +
              o.idx +
              "_dragger_vertical,#mCSB_" +
              o.idx +
              "_dragger_horizontal"
          );
        a.each(function() {
          J.call(this);
        });
      },
      V = function(e, o, a) {
        function n(e) {
          return l && s.callbacks[e] && "function" == typeof s.callbacks[e];
        }
        function i() {
          return [
            s.callbacks.alwaysTriggerOffsets || x >= _[0] + S,
            s.callbacks.alwaysTriggerOffsets || -b >= x
          ];
        }
        function r() {
          var t = [f[0].offsetTop, f[0].offsetLeft],
            o = [v[0].offsetTop, v[0].offsetLeft],
            n = [f.outerHeight(!1), f.outerWidth(!1)],
            i = [u.height(), u.width()];
          e[0].mcs = {
            content: f,
            top: t[0],
            left: t[1],
            draggerTop: o[0],
            draggerLeft: o[1],
            topPct: Math.round(
              (100 * Math.abs(t[0])) / (Math.abs(n[0]) - i[0])
            ),
            leftPct: Math.round(
              (100 * Math.abs(t[1])) / (Math.abs(n[1]) - i[1])
            ),
            direction: a.dir
          };
        }
        var l = e.data(t),
          s = l.opt,
          c = {
            trigger: "internal",
            dir: "y",
            scrollEasing: "mcsEaseOut",
            drag: !1,
            dur: s.scrollInertia,
            overwrite: "all",
            callbacks: !0,
            onStart: !0,
            onUpdate: !0,
            onComplete: !0
          },
          a = $.extend(c, a),
          d = [a.dur, a.drag ? 0 : a.dur],
          u = $("#mCSB_" + l.idx),
          f = $("#mCSB_" + l.idx + "_container"),
          h = f.parent(),
          m = s.callbacks.onTotalScrollOffset
            ? q.call(e, s.callbacks.onTotalScrollOffset)
            : [0, 0],
          p = s.callbacks.onTotalScrollBackOffset
            ? q.call(e, s.callbacks.onTotalScrollBackOffset)
            : [0, 0];
        if (
          ((l.trigger = a.trigger),
          (0 === h.scrollTop() && 0 === h.scrollLeft()) ||
            ($(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"),
            h.scrollTop(0).scrollLeft(0)),
          "_resetY" !== o ||
            l.contentReset.y ||
            (n("onOverflowYNone") && s.callbacks.onOverflowYNone.call(e[0]),
            (l.contentReset.y = 1)),
          "_resetX" !== o ||
            l.contentReset.x ||
            (n("onOverflowXNone") && s.callbacks.onOverflowXNone.call(e[0]),
            (l.contentReset.x = 1)),
          "_resetY" !== o && "_resetX" !== o)
        ) {
          switch (
            ((!l.contentReset.y && e[0].mcs) ||
              !l.overflowed[0] ||
              (n("onOverflowY") && s.callbacks.onOverflowY.call(e[0]),
              (l.contentReset.x = null)),
            (!l.contentReset.x && e[0].mcs) ||
              !l.overflowed[1] ||
              (n("onOverflowX") && s.callbacks.onOverflowX.call(e[0]),
              (l.contentReset.x = null)),
            s.snapAmount && (o = X(o, s.snapAmount, s.snapOffset)),
            a.dir)
          ) {
            case "x":
              var v = $("#mCSB_" + l.idx + "_dragger_horizontal"),
                g = "left",
                x = f[0].offsetLeft,
                _ = [
                  u.width() - f.outerWidth(!1),
                  v.parent().width() - v.width()
                ],
                w = [o, 0 === o ? 0 : o / l.scrollRatio.x],
                S = m[1],
                b = p[1],
                y = S > 0 ? S / l.scrollRatio.x : 0,
                B = b > 0 ? b / l.scrollRatio.x : 0;
              break;
            case "y":
              var v = $("#mCSB_" + l.idx + "_dragger_vertical"),
                g = "top",
                x = f[0].offsetTop,
                _ = [
                  u.height() - f.outerHeight(!1),
                  v.parent().height() - v.height()
                ],
                w = [o, 0 === o ? 0 : o / l.scrollRatio.y],
                S = m[0],
                b = p[0],
                y = S > 0 ? S / l.scrollRatio.y : 0,
                B = b > 0 ? b / l.scrollRatio.y : 0;
          }
          w[1] < 0 || (0 === w[0] && 0 === w[1])
            ? (w = [0, 0])
            : w[1] >= _[1]
              ? (w = [_[0], _[1]])
              : (w[0] = -w[0]),
            e[0].mcs || (r(), n("onInit") && s.callbacks.onInit.call(e[0])),
            clearTimeout(f[0].onCompleteTimeout),
            (!l.tweenRunning &&
              ((0 === x && w[0] >= 0) || (x === _[0] && w[0] <= _[0]))) ||
              (Q(v[0], g, Math.round(w[1]), d[1], a.scrollEasing),
              Q(f[0], g, Math.round(w[0]), d[0], a.scrollEasing, a.overwrite, {
                onStart: function() {
                  a.callbacks &&
                    a.onStart &&
                    !l.tweenRunning &&
                    (n("onScrollStart") &&
                      (r(), s.callbacks.onScrollStart.call(e[0])),
                    (l.tweenRunning = !0),
                    C(v),
                    (l.cbOffsets = i()));
                },
                onUpdate: function() {
                  a.callbacks &&
                    a.onUpdate &&
                    n("whileScrolling") &&
                    (r(), s.callbacks.whileScrolling.call(e[0]));
                },
                onComplete: function() {
                  if (a.callbacks && a.onComplete) {
                    "yx" === s.axis && clearTimeout(f[0].onCompleteTimeout);
                    var t = f[0].idleTimer || 0;
                    f[0].onCompleteTimeout = setTimeout(function() {
                      n("onScroll") && (r(), s.callbacks.onScroll.call(e[0])),
                        n("onTotalScroll") &&
                          w[1] >= _[1] - y &&
                          l.cbOffsets[0] &&
                          (r(), s.callbacks.onTotalScroll.call(e[0])),
                        n("onTotalScrollBack") &&
                          w[1] <= B &&
                          l.cbOffsets[1] &&
                          (r(), s.callbacks.onTotalScrollBack.call(e[0])),
                        (l.tweenRunning = !1),
                        (f[0].idleTimer = 0),
                        C(v, "hide");
                    }, t);
                  }
                }
              }));
        }
      },
      Q = function(e, t, o, a, n, i, r) {
        function l() {
          S.stop ||
            (g || f.call(),
            (g = G() - p),
            s(),
            g >= S.time &&
              ((S.time = g > S.time ? g + v - (g - S.time) : g + v - 1),
              S.time < g + 1 && (S.time = g + 1)),
            S.time < a ? (S.id = w(l)) : m.call());
        }
        function s() {
          a > 0
            ? ((S.currVal = u(S.time, x, b, a, n)),
              (_[t] = Math.round(S.currVal) + "px"))
            : (_[t] = o + "px"),
            h.call();
        }
        function c() {
          (v = 1e3 / 60),
            (S.time = g + v),
            (w = window.requestAnimationFrame
              ? window.requestAnimationFrame
              : function(e) {
                  return s(), setTimeout(e, 0.01);
                }),
            (S.id = w(l));
        }
        function d() {
          null != S.id &&
            (window.requestAnimationFrame
              ? window.cancelAnimationFrame(S.id)
              : clearTimeout(S.id),
            (S.id = null));
        }
        function u(e, t, o, a, n) {
          switch (n) {
            case "linear":
            case "mcsLinear":
              return (o * e) / a + t;
              break;
            case "mcsLinearOut":
              return (e /= a), e--, o * Math.sqrt(1 - e * e) + t;
              break;
            case "easeInOutSmooth":
              return (
                (e /= a / 2),
                1 > e
                  ? (o / 2) * e * e + t
                  : (e--, (-o / 2) * (e * (e - 2) - 1) + t)
              );
              break;
            case "easeInOutStrong":
              return (
                (e /= a / 2),
                1 > e
                  ? (o / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (e--, (o / 2) * (-Math.pow(2, -10 * e) + 2) + t)
              );
              break;
            case "easeInOut":
            case "mcsEaseInOut":
              return (
                (e /= a / 2),
                1 > e
                  ? (o / 2) * e * e * e + t
                  : ((e -= 2), (o / 2) * (e * e * e + 2) + t)
              );
              break;
            case "easeOutSmooth":
              return (e /= a), e--, -o * (e * e * e * e - 1) + t;
              break;
            case "easeOutStrong":
              return o * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              break;
            case "easeOut":
            case "mcsEaseOut":
            default:
              var i = (e /= a) * e,
                r = i * e;
              return (
                t +
                o *
                  (0.499999999999997 * r * i +
                    -2.5 * i * i +
                    5.5 * r +
                    -6.5 * i +
                    4 * e)
              );
          }
        }
        e._mTween || (e._mTween = { top: {}, left: {} });
        var r = r || {},
          f = r.onStart || function() {},
          h = r.onUpdate || function() {},
          m = r.onComplete || function() {},
          p = G(),
          v,
          g = 0,
          x = e.offsetTop,
          _ = e.style,
          w,
          S = e._mTween[t];
        "left" === t && (x = e.offsetLeft);
        var b = o - x;
        (S.stop = 0), "none" !== i && d(), c();
      },
      G = function() {
        return window.performance && window.performance.now
          ? window.performance.now()
          : window.performance && window.performance.webkitNow
            ? window.performance.webkitNow()
            : Date.now
              ? Date.now()
              : new Date().getTime();
      },
      J = function() {
        var e = this;
        e._mTween || (e._mTween = { top: {}, left: {} });
        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
          var a = t[o];
          e._mTween[a].id &&
            (window.requestAnimationFrame
              ? window.cancelAnimationFrame(e._mTween[a].id)
              : clearTimeout(e._mTween[a].id),
            (e._mTween[a].id = null),
            (e._mTween[a].stop = 1));
        }
      },
      K = function(e, t) {
        try {
          delete e[t];
        } catch (o) {
          e[t] = null;
        }
      },
      Z = function(e) {
        return !(e.which && 1 !== e.which);
      },
      ee = function(e) {
        var t = e.originalEvent.pointerType;
        return !(t && "touch" !== t && 2 !== t);
      },
      te = function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      oe = function(e) {
        var t = e.parents(".mCSB_container");
        return [
          e.offset().top - t.offset().top,
          e.offset().left - t.offset().left
        ];
      };
    ($.fn[e] = function(e) {
      return d[e]
        ? d[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
          ? void $.error("Method " + e + " does not exist")
          : d.init.apply(this, arguments);
    }),
      ($[e] = function(e) {
        return d[e]
          ? d[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
            ? void $.error("Method " + e + " does not exist")
            : d.init.apply(this, arguments);
      }),
      ($[e].defaults = a),
      (window[e] = !0),
      $(window).load(function() {
        $(o)[e](),
          $.extend($.expr[":"], {
            mcsInView:
              $.expr[":"].mcsInView ||
              function(e) {
                var t = $(e),
                  o = t.parents(".mCSB_container"),
                  a,
                  n;
                if (o.length)
                  return (
                    (a = o.parent()),
                    (n = [o[0].offsetTop, o[0].offsetLeft]),
                    n[0] + oe(t)[0] >= 0 &&
                      n[0] + oe(t)[0] < a.height() - t.outerHeight(!1) &&
                      n[1] + oe(t)[1] >= 0 &&
                      n[1] + oe(t)[1] < a.width() - t.outerWidth(!1)
                  );
              },
            mcsOverflow:
              $.expr[":"].mcsOverflow ||
              function(e) {
                var o = $(e).data(t);
                if (o) return o.overflowed[0] || o.overflowed[1];
              }
          });
      });
  });
});
