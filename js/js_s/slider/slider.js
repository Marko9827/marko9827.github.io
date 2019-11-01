! function (g, i, m, f, d, k, e) {
    new(function () {});
    var c = {
            J: m.PI,
            o: m.max,
            s: m.min,
            U: m.ceil,
            T: m.floor,
            Bb: m.abs,
            Ab: m.sin,
            oc: m.cos,
            ue: m.tan,
            kf: m.atan,
            nc: m.sqrt,
            u: m.pow,
            Td: m.random,
            v: m.round
        },
        h = {
            mf: function (a) {
                return -c.oc(a * c.J) / 2 + .5
            },
            wb: function (a) {
                return a
            },
            Df: function (a) {
                return a * a
            },
            nd: function (a) {
                return -a * (a - 2)
            },
            Cf: function (a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
            },
            yf: function (a) {
                return a * a * a
            },
            Qe: function (a) {
                return (a -= 1) * a * a + 1
            },
            vf: function (a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
            },
            uf: function (a) {
                return a * a * a * a
            },
            tf: function (a) {
                return -((a -= 1) * a * a * a - 1)
            },
            rf: function (a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
            },
            qf: function (a) {
                return a * a * a * a * a
            },
            pf: function (a) {
                return (a -= 1) * a * a * a * a + 1
            },
            nf: function (a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
            },
            Ef: function (a) {
                return 1 - c.oc(c.J / 2 * a)
            },
            xe: function (a) {
                return c.Ab(c.J / 2 * a)
            },
            Oe: function (a) {
                return -1 / 2 * (c.oc(c.J * a) - 1)
            },
            Ce: function (a) {
                return a == 0 ? 0 : c.u(2, 10 * (a - 1))
            },
            Ee: function (a) {
                return a == 1 ? 1 : -c.u(2, -10 * a) + 1
            },
            Ie: function (a) {
                return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.u(2, 10 * (a - 1)) : 1 / 2 * (-c.u(2,
                    -10 * --a) + 2)
            },
            Le: function (a) {
                return -(c.nc(1 - a * a) - 1)
            },
            Pe: function (a) {
                return c.nc(1 - (a -= 1) * a)
            },
            Ne: function (a) {
                return (a *= 2) < 1 ? -1 / 2 * (c.nc(1 - a * a) - 1) : 1 / 2 * (c.nc(1 - (a -= 2) * a) + 1)
            },
            Me: function (a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return -(c.u(2, 10 * (a -= 1)) * c.Ab((a - d) * 2 * c.J / b))
            },
            Je: function (a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return c.u(2, -10 * a) * c.Ab((a - d) * 2 * c.J / b) + 1
            },
            He: function (a) {
                if (!a || a == 1) return a;
                var b = .45,
                    d = .1125;
                return (a *= 2) < 1 ? -.5 * c.u(2, 10 * (a -= 1)) * c.Ab((a - d) * 2 * c.J / b) : c.u(2, -
                    10 * (a -= 1)) * c.Ab((a - d) * 2 * c.J / b) * .5 + 1
            },
            Ge: function (a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            Be: function (a) {
                var b = 1.70158;
                return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            Ke: function (a) {
                var b = 1.70158;
                return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a *
                    (((b *= 1.525) + 1) * a + b) + 2)
            },
            je: function (a) {
                return 1 - h.ed(1 - a)
            },
            ed: function (a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 :
                    a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) *
                    a + .984375
            },
            Fe: function (a) {
                return a < 1 / 2 ? h.je(a * 2) * .5 : h.ed(a * 2 - 1) * .5 + .5
            },
            ye: c.U,
            Ff: c.T
        };
    var b = new function () {
        var j = this,
            vb = /\S+/g,
            G = 1,
            pb = 2,
            sb = 3,
            rb = 4,
            Z = 5,
            H, r = 0,
            n = 0,
            B = 0,
            A = navigator,
            fb = A.appName,
            p = A.userAgent,
            q = parseFloat;

        function Eb() {
            if (!H) {
                H = {
                    gd: "ontouchstart" in g || "createTouch" in i
                };
                var a;
                if (A.pointerEnabled || (a = A.msPointerEnabled)) H.vd = a ? "msTouchAction" :
                    "touchAction"
            }
            return H
        }

        function u(h) {
            if (!r) {
                r = -1;
                if (fb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                    var e = p.indexOf("MSIE");
                    r = G;
                    n = q(p.substring(e + 5, p.indexOf(";", e))); /*@cc_on@*/
                } else if (fb == "Netscape" && !!g.addEventListener) {
                    var d = p.indexOf("Firefox"),
                        b = p.indexOf("Safari"),
                        f = p.indexOf("Chrome"),
                        c = p.indexOf("AppleWebKit");
                    if (d >= 0) {
                        r = pb;
                        n = q(p.substring(d + 8))
                    } else if (b >= 0) {
                        var i = p.substring(0, b).lastIndexOf("/");
                        r = f >= 0 ? rb : sb;
                        n = q(p.substring(i + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(p);
                        if (a) {
                            r = G;
                            n = q(a[1])
                        }
                    }
                    if (c >= 0) B = q(p.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(p);
                    if (a) {
                        r = Z;
                        n = q(a[2])
                    }
                }
            }
            return h == r
        }

        function v() {
            return u(G)
        }

        function qb() {
            return u(sb)
        }

        function ub() {
            return u(Z)
        }

        function mb() {
            return qb() && B > 534 && B < 535
        }

        function I() {
            u();
            return B > 537 || n > 42 || r == G && n >= 11
        }

        function nb(a) {
            var b, c;
            return function (g) {
                if (!b) {
                    b = d;
                    var f = a.substr(0, 1).toUpperCase() + a.substr(1);
                    l([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function (h, d) {
                        var b = a;
                        if (d) b = h + f;
                        if (g.style[b] != e) return c = b
                    })
                }
                return c
            }
        }

        function lb(b) {
            var a;
            return function (c) {
                a = a || nb(b)(c) || b;
                return a
            }
        }
        var L = lb("transform");

        function eb(a) {
            return {}.toString.call(a)
        }
        var bb = {};
        l(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
            bb["[object " + a + "]"] = a.toLowerCase()
        });

        function l(b, d) {
            var a, c;
            if (eb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function F(a) {
            return a == f ? String(a) : bb[eb(a)] || "object"
        }

        function cb(a) {
            for (var b in a) return d
        }

        function C(a) {
            try {
                return F(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty
                    .call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function jb(b, a) {
            setTimeout(b, a || 0)
        }

        function ab(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            l(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a && (c += (!a.indexOf(" ") ? "" : " ") + a);
            return c
        }

        function gb(a, b) {
            if (a === e) a = b;
            return a
        }
        j.hd = Eb;
        j.rd = v;
        j.og = qb;
        j.fg = I;
        nb("transform");
        j.ld = function () {
            return n
        };
        j.Kf = function () {
            u();
            return B
        };
        j.Db = jb;
        j.O = gb;
        j.eb = function (a, b) {
            b.call(a);
            return z({}, a)
        };

        function U(a) {
            a.constructor === U.caller && a.z && a.z.apply(a, U.caller.arguments)
        }
        j.z = U;
        j.Tb = function (a) {
            if (j.Tf(a)) a = i.getElementById(a);
            return a
        };

        function t(a) {
            return a || g.event
        }
        j.Wg = t;
        j.Ob = function (b) {
            b = t(b);
            var a = b.target || b.srcElement || i;
            if (a.nodeType == 3) a = j.fd(a);
            return a
        };
        j.Yd = function (a) {
            a = t(a);
            return a.relatedTarget || a.toElement
        };
        j.be = function (a) {
            a = t(a);
            return a.which || ([0, 1, 3, 0, 2])[a.button] || a.charCode || a.keyCode
        };
        j.id = function (a) {
            a = t(a);
            return {
                x: a.clientX || 0,
                y: a.clientY || 0
            }
        };
        j.Jg = function (b, a) {
            return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
        };
        j.de = function (c, e) {
            var a = b.zg(e),
                d = b.id(c);
            return j.Jg(d, a)
        };

        function w(c, d, a) {
            if (a !== e) c.style[d] = a == e ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && g.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, f);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function X(b, c, a, d) {
            if (a === e) {
                a = q(w(b, c));
                isNaN(a) && (a = f);
                return a
            }
            if (a == f) a = "";
            else d && (a += "px");
            w(b, c, a)
        }

        function m(c, a) {
            var d = a ? X : w,
                b;
            if (a & 4) b = lb(c);
            return function (e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function zb(a) {
            return q(a.style.opacity || "1")
        }

        function Bb(b, a) {
            b.style.opacity = a == 1 || a == f ? "" : c.v(a * 100) / 100
        }
        var N = {
            P: ["rotate"],
            ob: ["rotateX"],
            pb: ["rotateY"],
            dc: ["skewX"],
            hc: ["skewY"]
        };
        if (!I()) N = z(N, {
            V: ["scaleX", 2],
            W: ["scaleY", 2],
            qb: ["translateZ", 1]
        });

        function M(c, a) {
            var b = "";
            if (a) {
                if (v() && n && n < 10) {
                    delete a.ob;
                    delete a.pb;
                    delete a.qb
                }
                l(a, function (d, c) {
                    var a = N[c];
                    if (a) {
                        var e = a[1] || 0;
                        if (O[c] != d) b += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (I()) {
                    if (a.Eb || a.Qb || a.qb != e) b += " translate3d(" + (a.Eb || 0) + "px," + (a.Qb || 0) +
                        "px," + (a.qb || 0) + "px)";
                    if (a.V == e) a.V = 1;
                    if (a.W == e) a.W = 1;
                    if (a.V != 1 || a.W != 1) b += " scale3d(" + a.V + ", " + a.W + ", 1)"
                }
            }
            c.style[L(c)] = b
        }
        j.Gf = m("transformOrigin", 4);
        j.wg = m("backfaceVisibility", 4);
        j.jc = m("transformStyle", 4);
        j.Hg = m("perspective", 6);
        j.Fg = m("perspectiveOrigin", 4);
        j.he = function (b, a) {
            if (v() && n < 9) b.style.zoom = a == 1 ? "" : a;
            else {
                var c = L(b),
                    f = a == 1 ? "" : "scale(" + a + ")",
                    e = b.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = ab(e, [g], f);
                b.style[c] = d
            }
        };
        j.nb = function (a, d, b, c) {
            a = j.Tb(a);
            if (a.addEventListener) {
                d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
                a.addEventListener(d, b, c)
            } else if (a.attachEvent) {
                a.attachEvent("on" + d, b);
                c && a.setCapture && a.setCapture()
            }
        };
        j.Kb = function (a, c, d, b) {
            a = j.Tb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        j.Vb = function (a) {
            a = t(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = k
        };
        j.Ig = function (a) {
            a = t(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        j.jb = function (d, c) {
            var a = [].slice.call(arguments, 2),
                b = function () {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        j.Pg = function (a, b) {
            if (b == e) return a.textContent || a.innerText;
            var c = i.createTextNode(b);
            j.gc(a);
            a.appendChild(c)
        };
        j.zg = function (b) {
            var a = b.getBoundingClientRect();
            return {
                x: a.left,
                y: a.top,
                w: a.right - a.left,
                h: a.bottom - a.top
            }
        };
        j.Pb = function (d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function db(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : f; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (D(a, b) == c) return a;
                    if (!e) {
                        var d = db(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        j.Vd = db;

        function S(a, d, g, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : f; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    D(a, b) == d && c.push(a);
                    if (!g) {
                        var e = S(a, d, g, b);
                        if (e.length) c = c.concat(e)
                    }
                } return c
        }
        j.rg = function (b, a) {
            return b.getElementsByTagName(a)
        };
        j.gb = function (a, f, d, g) {
            d = d || "u";
            var e;
            do {
                if (a.nodeType == 1) {
                    var c;
                    d && (c = D(a, d));
                    if (c && c == gb(f, c) || g == a.tagName) {
                        e = a;
                        break
                    }
                }
                a = b.fd(a)
            } while (a && a != i.body);
            return e
        };
        j.Sf = function (a) {
            return W(["INPUT", "TEXTAREA", "SELECT"])[a.tagName]
        };

        function z() {
            var f = arguments,
                d, c, b, a, h = 1 & f[0],
                g = 1 + h;
            d = f[g - 1] || {};
            for (; g < f.length; g++)
                if (c = f[g])
                    for (b in c) {
                        a = c[b];
                        if (a !== e) {
                            a = c[b];
                            var i = d[b];
                            d[b] = h && (C(i) || C(a)) ? z(h, {}, i, a) : a
                        }
                    }
            return d
        }
        j.L = z;

        function V(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (C(a) && C(b)) {
                        a = V(a, b);
                        e = !cb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        j.ne = function (a) {
            return F(a) == "function"
        };
        j.jg = function (a) {
            return F(a) == "array"
        };
        j.Tf = function (a) {
            return F(a) == "string"
        };
        j.bc = function (a) {
            return !isNaN(q(a)) && isFinite(a)
        };
        j.c = l;
        j.qe = C;

        function Q(a) {
            return i.createElement(a)
        }
        j.Ac = function () {
            return Q("DIV")
        };
        j.bg = function () {
            return Q("SPAN")
        };
        j.cg = function () {};

        function E(b, c, a) {
            if (a == e) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function D(a, b) {
            return E(a, b) || E(a, "data-" + b)
        }
        j.k = E;
        j.Z = D;
        j.l = function (d, b, c) {
            var a = j.gg(D(d, b));
            if (isNaN(a)) a = c;
            return a
        };

        function x(b, a) {
            return E(b, "class", a) || ""
        }

        function W(b) {
            var a = {};
            l(b, function (b) {
                if (b != e) a[b] = b
            });
            return a
        }

        function kb(b, a) {
            return b.match(a || vb)
        }

        function P(b, a) {
            return W(kb(b || "", a))
        }
        j.ud = W;
        j.ig = kb;
        j.pg = function (a) {
            a && (a = a.toLowerCase());
            return a
        };

        function Y(b, c) {
            var a = "";
            l(c, function (c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function J(a, c, b) {
            x(a, Y(" ", z(V(P(x(a)), P(c)), P(b))))
        }
        j.fd = function (a) {
            return a.parentNode
        };
        j.zb = function (a) {
            j.yb(a, "none")
        };
        j.db = function (a, b) {
            j.yb(a, b ? "none" : "")
        };
        j.ng = function (b, a) {
            b.removeAttribute(a)
        };
        j.Yf = function (d, a) {
            if (a) d.style.clip = "rect(" + c.v(a.i || a.F || 0) + "px " + c.v(a.q) + "px " + c.v(a.p) +
                "px " + c.v(a.g || a.K || 0) + "px)";
            else if (a !== e) {
                var h = d.style.cssText,
                    g = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i),
                        new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i),
                        new RegExp(/[\s]*clipleft: .*?[;]?/i)
                    ],
                    f = ab(h, g, "");
                b.Ad(d, f)
            }
        };
        j.Hf = function (b, a) {
            if (a) b.style.backgroundColor = "rgba(" + c.v(a.Qd) + "," + c.v(a.Pd) + "," + c.v(a.Od) +
                "," + a.B + ")"
        };
        j.Lb = function () {
            return +new Date
        };
        j.ab = function (b, a) {
            b.appendChild(a)
        };
        j.Cb = function (b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        j.Fb = function (b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        j.Pf = function (a, b) {
            l(a, function (a) {
                j.Fb(a, b)
            })
        };
        j.gc = function (a) {
            j.Pf(j.Pb(a, d), a)
        };

        function hb() {
            l([].slice.call(arguments, 0), function (a) {
                if (j.jg(a)) hb.apply(f, a);
                else a && a.m()
            })
        }
        j.m = hb;
        j.Hd = function (a, b) {
            var c = j.fd(a);
            if (b & 1) {
                j.Y(a, (j.I(c) - j.I(a)) / 2);
                j.Dd(a, f)
            }
            if (b & 2) {
                j.S(a, (j.H(c) - j.H(a)) / 2);
                j.Bd(a, f)
            }
        };
        var R = {
            i: f,
            q: f,
            p: f,
            g: f,
            C: f,
            A: f
        };
        j.sg = function (a) {
            var b = j.Ac();
            s(b, {
                Cd: "block",
                Gb: j.vb(a),
                i: 0,
                g: 0,
                C: 0,
                A: 0
            });
            var d = j.Jd(a, R);
            j.Cb(b, a);
            j.ab(b, a);
            var e = j.Jd(a, R),
                c = {};
            l(d, function (b, a) {
                if (b == e[a]) c[a] = b
            });
            s(b, R);
            s(b, c);
            s(a, {
                i: 0,
                g: 0
            });
            return c
        };
        j.Mg = function (b, a) {
            return parseInt(b, a || 10)
        };
        j.gg = q;
        j.fe = function (b, a) {
            var c = i.body;
            while (a && b !== a && c !== a) a = a.parentNode;
            return b === a
        };

        function T(d, c, b) {
            var a = d.cloneNode(!c);
            !b && j.ng(a, "id");
            return a
        }
        j.ub = T;
        j.Ib = function (e, f) {
            var a = new Image;

            function b(e, d) {
                j.Kb(a, "load", b);
                j.Kb(a, "abort", c);
                j.Kb(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, d)
            }
            if (ub() && n < 11.6 || !e) b(!e);
            else {
                j.nb(a, "load", b);
                j.nb(a, "abort", c);
                j.nb(a, "error", c);
                a.src = e
            }
        };
        j.Lg = function (e, a, d) {
            var b = 1;

            function c(c) {
                b--;
                if (a && c && c.src == a.src) a = c;
                !b && d && d(a)
            }
            l(e, function (a) {
                if (a.src) {
                    b++;
                    j.Ib(a.src, c)
                }
            });
            c()
        };
        j.Qg = function (a, g, i, h) {
            if (h) a = T(a);
            var c = S(a, g);
            if (!c.length) c = b.rg(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = T(i);
                x(e, x(d));
                b.Ad(e, d.style.cssText);
                b.Cb(e, d);
                b.Fb(d)
            }
            return a
        };

        function Cb() {
            var a = this;
            b.eb(a, o);
            var d, q = "",
                s = ["av", "pv", "ds", "dn"],
                f = [],
                r, n = 0,
                k = 0,
                h = 0;

            function m() {
                J(d, r, (f[h || k & 2 || k] || "") + " " + (f[n] || ""));
                j.kc(d, h ? "none" : "")
            }

            function c() {
                n = 0;
                a.M(g, "mouseup", c);
                a.M(i, "mouseup", c);
                a.M(i, "touchend", c);
                a.M(i, "touchcancel", c);
                a.M(g, "blur", c);
                m()
            }

            function p(b) {
                if (h) j.Vb(b);
                else {
                    n = 4;
                    m();
                    a.a(g, "mouseup", c);
                    a.a(i, "mouseup", c);
                    a.a(i, "touchend", c);
                    a.a(i, "touchcancel", c);
                    a.a(g, "blur", c)
                }
            }
            a.Ug = function (a) {
                if (a === e) return k;
                k = a & 2 || a & 1;
                m()
            };
            a.Lc = function (a) {
                if (a === e) return !h;
                h = a ? 0 : 3;
                m()
            };
            a.z = function (e) {
                a.bb = d = j.Tb(e);
                E(d, "data-jssor-button", "1");
                var c = b.ig(x(d));
                if (c) q = c.shift();
                l(s, function (a) {
                    f.push(q + a)
                });
                r = Y(" ", f);
                f.unshift("");
                a.a(d, "mousedown", p);
                a.a(d, "touchstart", p)
            };
            b.z(a)
        }
        j.Mc = function (a) {
            return new Cb(a)
        };
        j.G = w;
        m("backgroundColor");
        j.ic = m("overflow");
        j.kc = m("pointerEvents");
        j.S = m("top", 2);
        j.Dd = m("right", 2);
        j.Bd = m("bottom", 2);
        j.Y = m("left", 2);
        j.I = m("width", 2);
        j.H = m("height", 2);
        m("marginLeft", 2);
        m("marginTop", 2);
        j.vb = m("position");
        j.yb = m("display");
        j.N = m("zIndex", 1);
        j.Kg = function (b, a, c) {
            if (a !== e) Bb(b, a, c);
            else return zb(b)
        };
        j.Ad = function (a, b) {
            if (b != e) a.style.cssText = b;
            else return a.style.cssText
        };
        j.ug = function (b, a) {
            if (a === e) {
                a = w(b, "backgroundImage") || "";
                var c = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a) || [];
                return c[1]
            }
            w(b, "backgroundImage", a ? "url('" + a + "')" : "")
        };
        var K;
        j.vg = K = {
            B: j.Kg,
            i: j.S,
            q: j.Dd,
            p: j.Bd,
            g: j.Y,
            C: j.I,
            A: j.H,
            Gb: j.vb,
            Cd: j.yb,
            hb: j.N
        };
        j.Jd = function (c, b) {
            var a = {};
            l(b, function (d, b) {
                if (K[b]) a[b] = K[b](c)
            });
            return a
        };

        function s(b, h) {
            var a = I(),
                d = mb(),
                g = L(b);

            function c(l, a) {
                a = a || {};
                var h = a.qb || 0,
                    i = (a.ob || 0) % 360,
                    j = (a.pb || 0) % 360,
                    k = (a.P || 0) % 360,
                    c = a.V,
                    d = a.W,
                    f = a.gh;
                if (c == e) c = 1;
                if (d == e) d = 1;
                if (f == e) f = 1;
                var b = new yb(a.Eb, a.Qb, h);
                b.cd(c, d, f);
                b.Ag(a.dc, a.hc);
                b.ob(i);
                b.pb(j);
                b.Cg(k);
                b.Rb(a.K, a.F);
                l.style[g] = b.Gg()
            }
            s = function (g, b) {
                b = b || {};
                var i = b.K,
                    k = b.F,
                    h;
                l(K, function (a, c) {
                    h = b[c];
                    h !== e && a(g, h)
                });
                j.Yf(g, b.f);
                j.Hf(g, b.xb);
                if (!a) {
                    i != e && j.Y(g, (b.ie || 0) + i);
                    k != e && j.S(g, (b.qd || 0) + k)
                }
                if (b.If)
                    if (d) jb(j.jb(f, M, g, b));
                    else if (a) c(g, b);
                else M(g, b)
            };
            j.Q = s;
            s(b, h)
        }
        j.Q = s;

        function yb(j, k, n) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, n || 0, 1],
                i = c.Ab,
                h = c.oc,
                l = c.ue;

            function g(a) {
                return a * c.J / 180
            }

            function m(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D,
                F, d, h, j) {
                return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B +
                    m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q +
                    t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a +
                    z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h,
                    w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y +
                    k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j
                ]
            }

            function e(c, a) {
                return m.apply(f, (a || b).concat(c))
            }
            d.cd = function (a, c, d) {
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.Rb = function (a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.ob = function (c) {
                if (c) {
                    a = g(c);
                    var d = h(a),
                        f = i(a);
                    b = e([1, 0, 0, 0, 0, d, f, 0, 0, -f, d, 0, 0, 0, 0, 1])
                }
            };
            d.pb = function (c) {
                if (c) {
                    a = g(c);
                    var d = h(a),
                        f = i(a);
                    b = e([d, 0, -f, 0, 0, 1, 0, 0, f, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.Cg = function (c) {
                if (c) {
                    a = g(c);
                    var d = h(a),
                        f = i(a);
                    b = e([d, f, 0, 0, -f, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.Ag = function (a, c) {
                if (a || c) {
                    j = g(a);
                    k = g(c);
                    b = e([1, l(k), 0, 0, l(j), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.Gg = function () {
                return "matrix3d(" + b.join(",") + ")"
            }
        }
        var O = {
            ie: 0,
            qd: 0,
            K: 0,
            F: 0,
            fb: 1,
            V: 1,
            W: 1,
            P: 0,
            ob: 0,
            pb: 0,
            Eb: 0,
            Qb: 0,
            qb: 0,
            dc: 0,
            hc: 0
        };
        j.Qc = function (c, d) {
            var a = c || {};
            if (c)
                if (b.ne(c)) a = {
                    O: a
                };
                else if (b.ne(c.f)) a.f = {
                O: c.f
            };
            a.O = a.O || d;
            if (a.f) a.f.O = a.f.O || d;
            if (a.xb) a.xb.O = a.xb.O || d;
            return a
        };

        function ib(c, a) {
            var b = {};
            l(c, function (c, d) {
                var f = c;
                if (a[d] != e)
                    if (j.bc(c)) f = c + a[d];
                    else f = ib(c, a[d]);
                b[d] = f
            });
            return b
        }
        j.Ae = ib;
        j.ee = function (o, j, s, t, E, F, p) {
            var a = j;
            if (o) {
                a = {};
                for (var i in j) {
                    var G = F[i] || 1,
                        B = E[i] || [0, 1],
                        g = (s - B[0]) / B[1];
                    g = c.s(c.o(g, 0), 1);
                    g = g * G;
                    var y = c.T(g);
                    if (g != y) g -= y;
                    var k = t.O || h.wb,
                        m, C = o[i],
                        r = j[i];
                    if (b.bc(r)) {
                        k = t[i] || k;
                        var D = k(g);
                        m = C + r * D
                    } else {
                        m = z({
                            tc: {}
                        }, o[i]);
                        var A = t[i] || {};
                        l(r.tc || r, function (d, a) {
                            k = A[a] || A.O || k;
                            var c = k(g),
                                b = d * c;
                            m.tc[a] = b;
                            m[a] += b
                        })
                    }
                    a[i] = m
                }
                var x = l(j, function (b, a) {
                    return O[a] != e
                });
                x && l(O, function (c, b) {
                    if (a[b] == e && o[b] !== e) a[b] = o[b]
                });
                if (x) {
                    if (a.fb) a.V = a.W = a.fb;
                    a.Zb = p.Zb;
                    a.ac = p.ac;
                    if (v() && n >= 11 && (j.K || j.F) && s != 0 && s != 1) a.P = a.P || 1e-8;
                    a.If = d
                }
            }
            if (j.f && p.Rb) {
                var q = a.f.tc,
                    w = (q.i || 0) + (q.p || 0),
                    u = (q.g || 0) + (q.q || 0);
                a.g = (a.g || 0) + u;
                a.i = (a.i || 0) + w;
                a.f.g -= u;
                a.f.q -= u;
                a.f.i -= w;
                a.f.p -= w
            }
            if (a.f && !a.f.i && !a.f.g && !a.f.F && !a.f.K && a.f.q == p.Zb && a.f.p == p.ac) a.f = f;
            return a
        }
    };

    function o() {
        var a = this,
            f, e = [],
            c = [];

        function k(a, b) {
            e.push({
                Wb: a,
                Sb: b
            })
        }

        function j(a, c) {
            b.c(e, function (b, d) {
                b.Wb == a && b.Sb === c && e.splice(d, 1)
            })
        }

        function i() {
            e = []
        }

        function h() {
            b.c(c, function (a) {
                b.Kb(a.Xd, a.Wb, a.Sb, a.le)
            });
            c = []
        }
        a.Rc = function () {
            return f
        };
        a.a = function (e, a, d, f) {
            b.nb(e, a, d, f);
            c.push({
                Xd: e,
                Wb: a,
                Sb: d,
                le: f
            })
        };
        a.M = function (e, a, d, f) {
            b.c(c, function (g, h) {
                if (g.Xd === e && g.Wb == a && g.Sb === d && g.le == f) {
                    b.Kb(e, a, d, f);
                    c.splice(h, 1)
                }
            })
        };
        a.ke = h;
        a.Tc = a.addEventListener = k;
        a.removeEventListener = j;
        a.j = function (a) {
            var c = [].slice.call(arguments, 1);
            b.c(e, function (b) {
                b.Wb == a && b.Sb.apply(g, c)
            })
        };
        a.m = function () {
            if (!f) {
                f = d;
                h();
                i()
            }
        }
    }
    var l = function (C, D, i, m, R, Q) {
        C = C || 0;
        var a = this,
            p, n, o, s, F = 0,
            O = 1,
            L, M, K, G, B = 0,
            j = 0,
            r = 0,
            A, l, f, h, q, z, u = [],
            y, I = k,
            J, H = k;

        function T(a) {
            f += a;
            h += a;
            l += a;
            j += a;
            r += a;
            B += a
        }

        function x(C) {
            var k = C;
            if (q)
                if (!z && (k >= h || k < f) || z && k >= f) k = ((k - f) % q + q) % q + f;
            if (!A || s || j != k) {
                var g = c.s(k, h);
                g = c.o(g, f);
                if (i.rc) g = h - g + f;
                if (!A || s || g != r) {
                    if (Q) {
                        var x = (g - l) / (D || 1),
                            o = b.ee(R, Q, x, L, K, M, i);
                        if (y) b.c(o, function (b, a) {
                            y[a] && y[a](m, b)
                        });
                        else b.Q(m, o);
                        var n;
                        if (J) {
                            var p = g > f && g < h;
                            if (p != H) n = H = p
                        }
                        if (!n && o.B != e) {
                            var t = o.B < .001;
                            if (t != I) n = I = t
                        }
                        if (n != e) {
                            n && b.kc(m, "none");
                            !n && b.kc(m, b.k(m, "data-events"))
                        }
                    }
                    var w = r,
                        v = r = g;
                    b.c(u, function (b, c) {
                        var a = !A && z || k <= j ? u[u.length - c - 1] : b;
                        a.E(g - B)
                    });
                    j = k;
                    A = d;
                    a.bd(w - l, v - l);
                    a.Mb(w, v)
                }
            }
        }

        function E(a, b, d) {
            b && a.Nb(h);
            if (!d) {
                f = c.s(f, a.sc() + B);
                h = c.o(h, a.sb() + B)
            }
            u.push(a)
        }
        var v = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g
            .msRequestAnimationFrame;
        if (b.og() && b.ld() < 7 || !v) v = function (a) {
            b.Db(a, i.lb)
        };

        function N() {
            if (p) {
                var d = b.Lb(),
                    e = c.s(d - F, i.Md),
                    a = j + e * o * O;
                F = d;
                if (a * o >= n * o) a = n;
                x(a);
                if (!s && a * o >= n * o) P(G);
                else v(N)
            }
        }

        function w(e, g, i) {
            if (!p) {
                p = d;
                s = i;
                G = g;
                e = c.o(e, f);
                e = c.s(e, h);
                n = e;
                o = n < j ? -1 : 1;
                a.Uc();
                F = b.Lb();
                v(N)
            }
        }

        function P(b) {
            if (p) {
                s = p = G = k;
                a.Vc();
                b && b()
            }
        }
        a.Ld = function (a, b, c) {
            w(a ? j + a : h, b, c)
        };
        a.qc = w;
        a.ze = function (a, b) {
            w(h, a, b)
        };
        a.D = P;
        a.me = function () {
            return j
        };
        a.td = function () {
            return n
        };
        a.n = function () {
            return r
        };
        a.E = x;
        a.Re = function () {
            x(h, d)
        };
        a.Wc = function () {
            return p
        };
        a.Id = function (a) {
            O = a
        };
        a.Nb = T;
        a.R = function (a, b) {
            E(a, 0, b)
        };
        a.Xc = function (a) {
            E(a, 1)
        };
        a.Yc = function (a) {
            h += a
        };
        a.sc = function () {
            return f
        };
        a.sb = function () {
            return h
        };
        a.Mb = a.Uc = a.Vc = a.bd = b.cg;
        a.Zc = b.Lb();
        i = b.L({
            lb: 16,
            Md: 50
        }, i);
        m && (J = b.k(m, "data-inactive"));
        q = i.mc;
        z = i.wf;
        y = i.xf;
        f = l = C;
        h = C + D;
        M = i.v || {};
        K = i.sd || {};
        L = b.Qc(i.X)
    };
    var n = {
            Bf: "data-scale",
            Xb: "data-autocenter",
            ad: "data-nofreeze",
            md: "data-nodrag"
        },
        q = new function () {
            var a = this;
            a.Jc = function (c, a, e, d) {
                (d || !b.k(c, a)) && b.k(c, a, e)
            };
            a.Kc = function (a) {
                var c = b.l(a, n.Xb);
                b.Hd(a, c)
            }
        },
        s = new function () {
            var h = this;

            function g(b, a, c) {
                c.push(a);
                b[a] = b[a] || [];
                b[a].push(c)
            }
            h.Ze = function (d) {
                for (var e = [], a, b = 0; b < d.mb; b++)
                    for (a = 0; a < d.cb; a++) g(e, c.U(1e5 * c.Td()) % 13, [b, a]);
                return e
            }
        },
        u = function (m, r, p, u, z, A) {
            var a = this,
                v, g, e, y = 0,
                x = u.Se,
                q, i = 8;

            function t(a) {
                if (a.i) a.F = a.i;
                if (a.g) a.K = a.g;
                b.c(a, function (a) {
                    b.qe(a) && t(a)
                })
            }

            function j(g, e, f) {
                var a = {
                    lb: e,
                    Ic: 1,
                    Db: 0,
                    cb: 1,
                    mb: 1,
                    B: 0,
                    fb: 0,
                    f: 0,
                    Rb: k,
                    Dc: k,
                    rc: k,
                    Ue: s.Ze,
                    pe: {
                        Ve: 0,
                        We: 0
                    },
                    X: h.wb,
                    v: {},
                    uc: [],
                    sd: {}
                };
                b.L(a, g);
                if (a.mb == 0) a.mb = c.v(a.cb * f);
                t(a);
                a.X = b.Qc(a.X, h.wb);
                a.Xe = c.U(a.Ic / a.lb);
                a.Ye = function (c, b) {
                    c /= a.cb;
                    b /= a.mb;
                    var f = c + "x" + b;
                    if (!a.uc[f]) {
                        a.uc[f] = {
                            C: c,
                            A: b
                        };
                        for (var d = 0; d < a.cb; d++)
                            for (var e = 0; e < a.mb; e++) a.uc[f][e + "," + d] = {
                                i: e * b,
                                q: d * c + c,
                                p: e * b + b,
                                g: d * c
                            }
                    }
                    return a.uc[f]
                };
                if (a.Ec) {
                    a.Ec = j(a.Ec, e, f);
                    a.Dc = d
                }
                return a
            }

            function n(z, i, a, v, n, l) {
                var y = this,
                    t, u = {},
                    h = {},
                    m = [],
                    f, e, r, p = a.pe.Ve || 0,
                    q = a.pe.We || 0,
                    g = a.Ye(n, l),
                    o = B(a),
                    C = o.length - 1,
                    s = a.Ic + a.Db * C,
                    w = v + s,
                    j = a.Dc,
                    x;
                w += 50;

                function B(a) {
                    var b = a.Ue(a);
                    return a.rc ? b.reverse() : b
                }
                y.ae = w;
                y.vc = function (d) {
                    d -= v;
                    var e = d < s;
                    if (e || x) {
                        x = e;
                        if (!j) d = s - d;
                        var f = c.U(d / a.lb);
                        b.c(h, function (a, e) {
                            var d = c.o(f, a.s);
                            d = c.s(d, a.length - 1);
                            if (a.ce != d) {
                                if (!a.ce && !j) b.db(m[e]);
                                else d == a.o && j && b.zb(m[e]);
                                a.ce = d;
                                b.Q(m[e], a[d])
                            }
                        })
                    }
                };
                i = b.ub(i);
                A(i, 0, 0);
                b.c(o, function (i, m) {
                    b.c(i, function (G) {
                        var I = G[0],
                            H = G[1],
                            v = I + "," + H,
                            o = k,
                            s = k,
                            x = k;
                        if (p && H % 2) {
                            if (p & 3) o = !o;
                            if (p & 12) s = !s;
                            if (p & 16) x = !x
                        }
                        if (q && I % 2) {
                            if (q & 3) o = !o;
                            if (q & 12) s = !s;
                            if (q & 16) x = !x
                        }
                        a.i = a.i || a.f & 4;
                        a.p = a.p || a.f & 8;
                        a.g = a.g || a.f & 1;
                        a.q = a.q || a.f & 2;
                        var E = s ? a.p : a.i,
                            B = s ? a.i : a.p,
                            D = o ? a.q : a.g,
                            C = o ? a.g : a.q;
                        a.f = E || B || D || C;
                        r = {};
                        e = {
                            F: 0,
                            K: 0,
                            B: 1,
                            C: n,
                            A: l
                        };
                        f = b.L({}, e);
                        t = b.L({}, g[v]);
                        if (a.B) e.B = 2 - a.B;
                        if (a.hb) {
                            e.hb = a.hb;
                            f.hb = 0
                        }
                        var K = a.cb * a.mb > 1 || a.f;
                        if (a.fb || a.P) {
                            var J = d;
                            if (J) {
                                e.fb = a.fb ? a.fb - 1 : 1;
                                f.fb = 1;
                                var N = a.P || 0;
                                e.P = N * 360 * (x ? -1 : 1);
                                f.P = 0
                            }
                        }
                        if (K) {
                            var i = t.tc = {};
                            if (a.f) {
                                var w = a.fh || 1;
                                if (E && B) {
                                    i.i = g.A / 2 * w;
                                    i.p = -i.i
                                } else if (E) i.p = -g.A * w;
                                else if (B) i.i = g.A * w;
                                if (D && C) {
                                    i.g = g.C / 2 * w;
                                    i.q = -i.g
                                } else if (D) i.q = -g.C * w;
                                else if (C) i.g = g.C * w
                            }
                            r.f = t;
                            f.f = g[v]
                        }
                        var L = o ? 1 : -1,
                            M = s ? 1 : -1;
                        if (a.x) e.K += n * a.x * L;
                        if (a.y) e.F += l * a.y * M;
                        b.c(e, function (a, c) {
                            if (b.bc(a))
                                if (a != f[c]) r[c] = a - f[c]
                        });
                        u[v] = j ? f : e;
                        var F = a.Xe,
                            A = c.v(m * a.Db / a.lb);
                        h[v] = new Array(A);
                        h[v].s = A;
                        h[v].o = A + F - 1;
                        for (var z = 0; z <= F; z++) {
                            var y = b.ee(f, r, z / F, a.X, a.sd, a.v, {
                                Rb: a.Rb,
                                Zb: n,
                                ac: l
                            });
                            y.hb = y.hb || 1;
                            h[v].push(y)
                        }
                    })
                });
                o.reverse();
                b.c(o, function (a) {
                    b.c(a, function (c) {
                        var f = c[0],
                            e = c[1],
                            d = f + "," + e,
                            a = i;
                        if (e || f) a = b.ub(i);
                        b.Q(a, u[d]);
                        b.ic(a, "hidden");
                        b.vb(a, "absolute");
                        z.cf(a);
                        m[d] = a;
                        b.db(a, !j)
                    })
                })
            }

            function w() {
                var a = this,
                    b = 0;
                l.call(a, 0, v);
                a.Mb = function (c, a) {
                    if (a - b > i) {
                        b = a;
                        e && e.vc(a);
                        g && g.vc(a)
                    }
                };
                a.Gc = q
            }
            a.ef = function () {
                var a = 0,
                    b = u.wc,
                    d = b.length;
                if (x) a = y++ % d;
                else a = c.T(c.Td() * d);
                b[a] && (b[a].Jb = a);
                return b[a]
            };
            a.gf = function (x, y, k, l, b, t) {
                a.tb();
                q = b;
                b = j(b, i, t);
                var h = l.Sd,
                    f = k.Sd;
                h["no-image"] = !l.zd;
                f["no-image"] = !k.zd;
                var o = h,
                    s = f,
                    w = b,
                    d = b.Ec || j({}, i, t);
                if (!b.Dc) {
                    o = f;
                    s = h
                }
                var u = d.Nb || 0;
                g = new n(m, s, d, c.o(u - d.lb, 0), r, p);
                e = new n(m, o, w, c.o(d.lb - u, 0), r, p);
                g.vc(0);
                e.vc(0);
                v = c.o(g.ae, e.ae);
                a.Jb = x
            };
            a.tb = function () {
                m.tb();
                g = f;
                e = f
            };
            a.bf = function () {
                var a = f;
                if (e) a = new w;
                return a
            };
            if (z && b.Kf() < 537) i = 16;
            o.call(a);
            l.call(a, -1e7, 1e7)
        },
        r = {
            yc: 1
        },
        t = function () {
            var a = this,
                D = b.eb(a, o),
                h, v, C, B, m, l = 0,
                g, s, p, z, A, i, k, u, t, x, j;

            function y(a) {
                j[a] && j[a].Ug(a == l)
            }

            function w(b) {
                a.j(r.yc, b * s)
            }
            a.zc = function (a) {
                if (a != m) {
                    var d = l,
                        b = c.T(a / s);
                    l = b;
                    m = a;
                    y(d);
                    y(b)
                }
            };
            a.Bc = function (a) {
                b.db(h, a)
            };
            a.Cc = function (I) {
                b.m(j);
                m = e;
                a.ke();
                x = [];
                j = [];
                b.gc(h);
                v = c.U(I / s);
                l = 0;
                var H = u + z,
                    y = t + A,
                    r = c.U(v / p) - 1;
                C = u + H * (!i ? r : p - 1);
                B = t + y * (i ? r : p - 1);
                b.I(h, C);
                b.H(h, B);
                for (var n = 0; n < v; n++) {
                    var D = b.bg();
                    b.Pg(D, n + 1);
                    var o = b.Qg(k, "numbertemplate", D, d);
                    b.vb(o, "absolute");
                    var G = n % (r + 1),
                        E = c.T(n / (r + 1)),
                        F = g.pc && !i ? r - G : G;
                    b.Y(o, (!i ? F : E) * H);
                    b.S(o, (i ? F : E) * y);
                    b.ab(h, o);
                    x[n] = o;
                    g.Fc & 1 && a.a(o, "click", b.jb(f, w, n));
                    g.Fc & 2 && a.a(o, "mouseenter", b.jb(f, w, n));
                    j[n] = b.Mc(o)
                }
                q.Kc(h)
            };
            a.z = function (d, c) {
                a.bb = h = b.Tb(d);
                a.Hc = g = b.L({
                    Rd: 10,
                    pd: 10,
                    Fc: 1
                }, c);
                k = b.Vd(h, "prototype");
                u = b.I(k);
                t = b.H(k);
                b.Fb(k, h);
                s = g.yd || 1;
                p = g.mb || 1;
                z = g.Rd;
                A = g.pd;
                i = g.zf & 2;
                g.rb && q.Jc(h, n.Xb, g.rb)
            };
            a.m = function () {
                b.m(j, D)
            };
            b.z(a)
        },
        v = function () {
            var a = this,
                v = b.eb(a, o),
                e, c, g, l, s, k, h, m, j, i;

            function p(b) {
                a.j(r.yc, b, d)
            }

            function u(a) {
                b.db(e, a);
                b.db(c, a)
            }

            function t() {
                j.Lc((g.Yb || !l.sf(h)) && k > 1);
                i.Lc((g.Yb || !l.of(h)) && k > 1)
            }
            a.zc = function (c, a, b) {
                h = a;
                !b && t()
            };
            a.Bc = u;
            a.Cc = function (g) {
                k = g;
                h = 0;
                if (!s) {
                    a.a(e, "click", b.jb(f, p, -m));
                    a.a(c, "click", b.jb(f, p, m));
                    j = b.Mc(e);
                    i = b.Mc(c);
                    b.k(e, n.ad, 1);
                    b.k(c, n.ad, 1);
                    s = d
                }
            };
            a.z = function (f, d, h, i) {
                a.Hc = g = b.L({
                    yd: 1
                }, h);
                e = f;
                c = d;
                if (g.pc) {
                    e = d;
                    c = f
                }
                m = g.yd;
                l = i;
                if (g.rb) {
                    q.Jc(e, n.Xb, g.rb);
                    q.Jc(c, n.Xb, g.rb)
                }
                q.Kc(e);
                q.Kc(c)
            };
            a.m = function () {
                b.m(j, i, v)
            };
            b.z(a)
        };

    function p(e, d, c) {
        var a = this;
        b.eb(a, o);
        l.call(a, 0, c.Hb);
        a.lc = 0;
        a.Oc = c.Hb
    }
    p.Pc = 21;
    p.cc = 24;
    var w = function () {
            var a = this,
                hb = b.eb(a, o);
            l.call(a, 0, 0);
            var e, s, gb = [h.wb, h.mf, h.Df, h.nd, h.Cf, h.yf, h.Qe, h.vf, h.uf, h.tf, h.rf, h.qf, h.pf, h.nf,
                    h.Ef, h.xe, h.Oe, h.Ce, h.Ee, h.Ie, h.Le, h.Pe, h.Ne, h.Me, h.Je, h.He, h.Ge, h.Be, h.Ke, h
                    .je, h.ed, h.Fe, h.ye, h.Ff
                ],
                P = {},
                S, C, t = new l(0, 0),
                T = [],
                x = [],
                E, q = 0;

            function G(d, c) {
                var a = {};
                b.c(d, function (d, f) {
                    var e = P[f];
                    if (e) {
                        if (b.qe(d)) d = G(d, c || f == "e");
                        else if (c)
                            if (b.bc(d)) d = gb[d];
                        a[e] = d
                    }
                });
                return a
            }

            function I(c, f) {
                var e = [],
                    d = b.l(c, "play");
                if (f && d) {
                    var g = new w(c, s, {
                        kg: d
                    });
                    N.push(g);
                    a.a(g, p.Pc, Z);
                    a.a(g, p.cc, U)
                } else b.c(b.Pb(c), function (a) {
                    e = e.concat(I(a, f + 1))
                });
                if (!f && (!j || j & 16) || f && (!d || !(d & 16))) {
                    var h = S[b.l(c, "t")];
                    h && e.push({
                        bb: c,
                        Gc: h
                    })
                }
                return e
            }

            function O(c, e) {
                var a = T[c];
                if (a == f) {
                    a = T[c] = {
                        kb: c,
                        dd: [],
                        xd: []
                    };
                    var d = 0;
                    !b.c(x, function (a, b) {
                        d = b;
                        return a.kb > c
                    }) && d++;
                    x.splice(d, 0, a)
                }
                return a
            }

            function db(o, p, g) {
                var a, e;
                if (C) {
                    var k = C[b.l(o, "c")];
                    if (k) {
                        a = O(k.r, 0);
                        a.ag = k.e || 0
                    }
                }
                b.c(p, function (h) {
                    var f = b.L(d, {}, G(h)),
                        i = b.Qc(f.X);
                    delete f.X;
                    if (f.g) {
                        f.K = f.g;
                        i.K = i.g;
                        delete f.g
                    }
                    if (f.i) {
                        f.F = f.i;
                        i.F = i.i;
                        delete f.i
                    }
                    var m = {
                            X: i,
                            Zb: g.C,
                            ac: g.A
                        },
                        j = new l(h.b, h.d, m, o, g, f);
                    q = c.o(q, h.b + h.d);
                    if (a) {
                        if (!e) e = new l(h.b, 0);
                        e.R(j)
                    } else {
                        var k = O(h.b, h.b + h.d);
                        k.dd.push(j)
                    }
                    if (f.xb) g.xb = {
                        Qd: 0,
                        Pd: 0,
                        Od: 0,
                        B: 0
                    };
                    g = b.Ae(g, f)
                });
                if (a && e) {
                    e.Re();
                    var h = e,
                        i, j = e.sc(),
                        m = e.sb(),
                        n = c.o(m, a.ag);
                    if (a.kb < m) {
                        if (a.kb > j) {
                            h = new l(j, a.kb - j);
                            h.R(e, d)
                        } else h = f;
                        i = new l(a.kb, n - j, {
                            mc: n - a.kb,
                            wf: d
                        });
                        i.R(e, d)
                    }
                    h && a.dd.push(h);
                    i && a.xd.push(i)
                }
                return g
            }

            function cb(a) {
                b.c(a, function (d) {
                    var a = d.bb,
                        f = b.I(a),
                        e = b.H(a),
                        c = {
                            g: b.Y(a),
                            i: b.S(a),
                            K: 0,
                            F: 0,
                            B: 1,
                            hb: b.N(a) || 0,
                            P: 0,
                            ob: 0,
                            pb: 0,
                            V: 1,
                            W: 1,
                            Eb: 0,
                            Qb: 0,
                            qb: 0,
                            dc: 0,
                            hc: 0,
                            C: f,
                            A: e,
                            f: {
                                i: 0,
                                q: f,
                                p: e,
                                g: 0
                            }
                        };
                    c.ie = c.g;
                    c.qd = c.i;
                    db(a, d.Gc, c)
                })
            }

            function fb(f, e, g) {
                var c = f.b - e;
                if (c) {
                    var b = new l(e, c);
                    b.R(t, d);
                    b.Nb(g);
                    a.R(b)
                }
                a.Yc(f.d);
                return c
            }

            function eb(e) {
                var c = t.sc(),
                    d = 0;
                b.c(e, function (e, f) {
                    e = b.L({
                        d: 3e3
                    }, e);
                    fb(e, c, d);
                    c = e.b;
                    d += e.d;
                    if (!f || e.t == 2) {
                        a.lc = c;
                        a.Oc = c + e.d
                    }
                })
            }

            function B(g, e, d) {
                var f = e.length;
                if (f > 4)
                    for (var j = c.U(f / 4), a = 0; a < j; a++) {
                        var h = e.slice(a * 4, c.s(a * 4 + 4, f)),
                            i = new l(h[0].kb, 0);
                        B(i, h, d);
                        g.R(i)
                    } else b.c(e, function (a) {
                        b.c(d ? a.xd : a.dd, function (a) {
                            d && a.Yc(q - a.sb());
                            g.R(a)
                        })
                    })
            }
            var j, F, u = 0,
                g, z, K, J, A, N = [],
                H = [],
                r, D, m;

            function y(a) {
                return a & 2 || a & 4 && b.hd().gd
            }

            function ab() {
                if (!A) {
                    g & 8 && a.a(i, "keydown", Q);
                    if (g & 32) {
                        a.a(i, "mousedown", v);
                        a.a(i, "touchstart", v)
                    }
                    A = d
                }
            }

            function Y() {
                a.M(i, "keydown", Q);
                a.M(i, "mousedown", v);
                a.M(i, "touchstart", v);
                A = k
            }

            function L(b) {
                if (!r || b) {
                    r = d;
                    a.D();
                    b && u && a.E(0);
                    a.Id(1);
                    a.ze();
                    ab();
                    a.j(p.Pc, a)
                }
            }

            function n() {
                if (!D && (r || a.n())) {
                    D = d;
                    a.D();
                    a.me() > a.lc && a.E(a.lc);
                    a.Id(K || 1);
                    a.qc(0)
                }
            }

            function V() {
                !m && n()
            }

            function M(c) {
                var b = c;
                if (c < 0 && a.n()) b = 1;
                if (b != u) {
                    u = b;
                    F && a.j(p.cc, a, u)
                }
            }

            function Q(a) {
                g & 8 && b.be(a) == 27 && n()
            }

            function X(a) {
                if (m && b.Yd(a) !== f) {
                    m = k;
                    g & 16 && b.Db(V, 160)
                }
            }

            function v(a) {
                g & 32 && !b.fe(e, b.Ob(a)) && n()
            }

            function W(a) {
                if (!m) {
                    m = d;
                    if (j & 1) b.de(a, e) && L()
                }
            }

            function bb(i) {
                var h = b.Ob(i),
                    a = b.gb(h, f, f, "A"),
                    c = a && (b.Sf(a) || a === e || b.fe(e, a));
                if (r && y(g)) !c && n();
                else if (y(j)) !c && L(d)
            }

            function Z(b) {
                var c = b.Vf(),
                    a = H[c];
                a !== b && a && a.Tg();
                H[c] = b
            }

            function U(b, c) {
                a.j(p.cc, b, c)
            }
            a.Vf = function () {
                return J || ""
            };
            a.Tg = n;
            a.Uc = function () {
                M(1)
            };
            a.Vc = function () {
                r = k;
                D = k;
                M(-1);
                !a.n() && Y()
            };
            a.Mb = function () {
                !m && z && a.me() > a.Oc && n()
            };
            a.z = function (m, i, f) {
                e = m;
                s = i;
                j = f.kg;
                E = f.hg;
                S = s.wc;
                C = s.bh;
                var l = {
                    i: "y",
                    g: "x",
                    p: "m",
                    q: "t",
                    P: "r",
                    ob: "rX",
                    pb: "rY",
                    V: "sX",
                    W: "sY",
                    Eb: "tX",
                    Qb: "tY",
                    qb: "tZ",
                    dc: "kX",
                    hc: "kY",
                    B: "o",
                    X: "e",
                    hb: "i",
                    f: "c",
                    xb: "bc",
                    Qd: "re",
                    Pd: "gr",
                    Od: "bl"
                };
                b.c(l, function (b, a) {
                    P[b] = a
                });
                cb(I(e, 0));
                B(t, x);
                if (j) {
                    a.R(t);
                    E = d;
                    z = b.l(e, "idle");
                    g = b.l(e, "rollback");
                    K = b.l(e, "speed", 1);
                    J = b.Z(e, "group");
                    (y(j) || y(g)) && a.a(e, "click", bb);
                    if ((j & 1 || z) && !b.hd().gd) {
                        a.a(e, "mouseenter", W);
                        a.a(e, "mouseleave", X)
                    }
                    F = b.l(e, "pause")
                }
                var k = s.ah || [],
                    c = k[b.l(e, "b")] || [],
                    h = {
                        b: q,
                        d: c.length ? 0 : f.Hb || z || 0
                    };
                c = c.concat([h]);
                eb(c);
                a.sb();
                E && a.Yc(1e8);
                q = a.sb();
                B(a, x, d);
                a.E(-1);
                a.E(b.l(e, "initial") || 0)
            };
            a.m = function () {
                b.m(hb, N);
                a.D();
                a.E(-1)
            };
            b.z(a)
        },
        j = (g.module || {}).exports = function () {
            var a = this,
                xc = b.eb(a, o),
                Kb = "data-jssor-slider",
                Cc = "data-jssor-thumb",
                t, m, R, Hb, cb, tb, Z, M, K, P, Ub, zc = 1,
                qc = 1,
                Gc = 1,
                hc = 1,
                cc = {},
                w, U, Vb, Zb, Yb, Ib, Gb, Fb, gb, E = [],
                fc, u = -1,
                jc, q, I, H, L, kb, lb, F, J, hb, S, A, W, jb, Y = [],
                lc, nc, dc, s, sb, Cb, nb, eb, X, ic, Bb, Mb, Nb, G, ac = 0,
                bb = 0,
                Q = Number.MAX_VALUE,
                N = Number.MIN_VALUE,
                C, ib, db, T = 1,
                Sb = 0,
                mb, B, Ab, zb, O, xb, yb, z, V, ob, y, Jb, Xb = b.hd(),
                Qb = Xb.gd,
                x = [],
                D, ub, ab, bc, Ac, Ic, vb;

            function Eb() {
                return !T && X & 12
            }

            function Bc() {
                return Sb || !T && X & 3
            }

            function Db() {
                return !B && !Eb() && !y.Wc()
            }

            function Rc() {
                return !Bc() && Db()
            }

            function Ec() {
                return A || R
            }

            function Kc() {
                return Ec() & 2 ? lb : kb
            }

            function Hc(a, c, d) {
                b.Y(a, c);
                b.S(a, d)
            }

            function vc(c, b) {
                var a = Ec(),
                    d = (kb * b + ac) * (a & 1),
                    e = (lb * b + ac) * (a & 2) / 2;
                Hc(c, d, e)
            }

            function sc(b, f) {
                if (B && !(C & 1)) {
                    var e = b,
                        d;
                    if (b < N) {
                        e = N;
                        d = -1
                    }
                    if (b > Q) {
                        e = Q;
                        d = 1
                    }
                    if (d) {
                        var a = b - e;
                        if (f) {
                            a = c.kf(a) * 2 / c.J;
                            a = c.u(a * d, 1.6)
                        } else {
                            a = c.u(a * d, .625);
                            a = c.ue(a * c.J / 2)
                        }
                        b = e + a * d
                    }
                }
                return b
            }

            function Mc(a) {
                return sc(a, d)
            }

            function dd(a) {
                return sc(a)
            }

            function wb(a, b) {
                if (!(C & 1)) {
                    var c = a - Q + (b || 0),
                        d = N - a + (b || 0);
                    if (c > 0 && c > d) a = Q;
                    else if (d > 0) a = N
                }
                return a
            }

            function oc(a) {
                return !(C & 1) && a - N < .0001
            }

            function mc(a) {
                return !(C & 1) && Q - a < .0001
            }

            function pb(a) {
                return !(C & 1) && (a - N < .0001 || Q - a < .0001)
            }

            function Ob(c, a, d) {
                !vb && b.c(Y, function (b) {
                    b.zc(c, a, d)
                })
            }

            function uc(b) {
                var a = b,
                    d = pb(b);
                if (d) a = wb(a);
                else {
                    b = v(b);
                    a = b
                }
                a = c.T(a);
                a = c.o(a, 0);
                return a
            }

            function ad(a) {
                x[u];
                fc = u;
                u = a;
                jc = x[u]
            }

            function Pc() {
                A = 0;
                var b = z.n(),
                    d = uc(b);
                Ob(d, b);
                if (pb(b) || b == c.T(b)) {
                    if (s & 2 && (eb > 0 && d == q - 1 || eb < 0 && !d)) s = 0;
                    ad(d);
                    a.j(j.Xg, u, fc)
                }
            }

            function ec(a, b) {
                if (q && (!b || !y.Wc())) {
                    y.D();
                    y.Sc(a, a)
                }
            }

            function rb(a) {
                if (q) {
                    a = v(a);
                    a = wb(a);
                    ec(a)
                } else Ob(0, 0)
            }

            function Uc() {
                var b = j.Zd || 0,
                    a = ib;
                j.Zd |= a;
                return W = a & ~b
            }

            function Qc() {
                if (W) {
                    j.Zd &= ~ib;
                    W = 0
                }
            }

            function Tb(c) {
                var a = b.Ac();
                b.Q(a, gb);
                c && b.ic(a, "hidden");
                return a
            }

            function v(b, a) {
                a = a || q || 1;
                return (b % a + a) % a
            }

            function wc(c, a, b) {
                s & 8 && (s = 0);
                qb(c, Bb, a, b)
            }

            function Pb() {
                b.c(Y, function (a) {
                    a.Bc(a.Hc.ch <= T)
                })
            }

            function cd(c) {
                if (!T && (b.Yd(c) || !b.de(c, t))) {
                    T = 1;
                    Pb();
                    if (!B) {
                        X & 12 && Dc();
                        x[u] && x[u].fc()
                    }
                    a.j(j.yg)
                }
            }

            function bd() {
                if (T) {
                    T = 0;
                    Pb();
                    B || !(X & 12) || Fc()
                }
                a.j(j.Eg)
            }

            function Jc() {
                b.Q(U, gb)
            }

            function Rb(b, a) {
                qb(b, a, d)
            }

            function qb(g, h, l, p) {
                if (q && (!B || m.ge) && !Eb() && !isNaN(g)) {
                    var f = z.n(),
                        a = g;
                    if (l) {
                        a = f + g;
                        if (C & 2) {
                            if (oc(f) && g < 0) a = Q;
                            if (mc(f) && g > 0) a = N
                        }
                    }
                    if (!(C & 1))
                        if (p) a = v(a);
                        else a = wb(a, .5);
                    if (l && !pb(a)) a = c.v(a);
                    var j = (a - f) % q;
                    a = f + j;
                    if (h == e) h = Bb;
                    var b = c.Bb(j),
                        i = 0;
                    if (b) {
                        if (b < 1) b = c.u(b, .5);
                        if (b > 1) {
                            var o = Kc(),
                                n = (R & 1 ? Gb : Fb) / o;
                            b = c.s(b, n * 1.5)
                        }
                        i = h * b
                    }
                    vb = d;
                    y.D();
                    vb = k;
                    y.Sc(f, a, i)
                }
            }

            function Nc(e, h, o) {
                var l = this,
                    i = {
                        i: 2,
                        q: 1,
                        p: 2,
                        g: 1
                    },
                    m = {
                        i: "top",
                        q: "right",
                        p: "bottom",
                        g: "left"
                    },
                    g, a, f, j, k = {};
                l.bb = e;
                l.ec = function (q, l, u) {
                    var p, s = q,
                        r = l;
                    if (!f) {
                        f = b.sg(e);
                        g = e.parentNode;
                        j = {
                            cd: b.l(e, n.Bf, 1),
                            rb: b.l(e, n.Xb)
                        };
                        b.c(m, function (c, a) {
                            k[a] = b.l(e, "data-scale-" + c, 1)
                        });
                        a = e;
                        if (h) {
                            a = b.ub(g, d);
                            b.Q(a, {
                                i: 0,
                                g: 0
                            });
                            b.ab(a, e);
                            b.ab(g, a)
                        }
                    }
                    if (o) {
                        p = c.o(q, l);
                        if (h)
                            if (u >= 0 && u < 1) {
                                var w = c.s(q, l);
                                p = c.s(p / w, 1 / (1 - u)) * w
                            }
                    } else s = r = p = c.u(K < P ? l : q, j.cd);
                    var x = h ? 1.001 : 1,
                        t = p * x;
                    h && (hc = t);
                    b.he(a, t);
                    b.I(g, f.C * s);
                    b.H(g, f.A * r);
                    var v = b.rd() && b.ld() < 9 ? t : 1,
                        y = (s - v) * f.C / 2,
                        z = (r - v) * f.A / 2;
                    b.Y(a, y);
                    b.S(a, z);
                    b.c(f, function (d, a) {
                        if (i[a] && d) {
                            var e = (i[a] & 1) * c.u(q, k[a]) * d + (i[a] & 2) * c.u(l, k[a]) * d /
                                2;
                            b.vg[a](g, e)
                        }
                    });
                    b.Hd(g, j.rb)
                }
            }

            function Yc() {
                var a = this;
                l.call(a, 0, 0, {
                    mc: q
                });
                b.c(x, function (b) {
                    a.Xc(b);
                    b.Nb(G / F)
                })
            }

            function Xc() {
                var a = this,
                    b = Jb.bb;
                l.call(a, -1, 2, {
                    X: h.wb,
                    xf: {
                        Gb: vc
                    },
                    mc: q,
                    rc: Cb
                }, b, {
                    Gb: 1
                }, {
                    Gb: -2
                })
            }

            function Zc() {
                var b = this;
                l.call(b, -1e8, 2e8);
                b.Mb = function (e, b) {
                    if (c.Bb(b - e) > 1e-5) {
                        var g = b,
                            f = b;
                        if (c.T(b) != b && b > e && (C & 1 || b > bb)) f++;
                        var h = uc(f);
                        Ob(h, g, d);
                        a.j(j.Bg, v(g), v(e), b, e)
                    }
                }
            }

            function Oc(o, n) {
                var b = this,
                    g, i, e, c, h;
                l.call(b, -1e8, 2e8, {
                    Md: 100
                });
                b.Uc = function () {
                    mb = d;
                    a.j(j.dg, v(z.n()), V.n())
                };
                b.Vc = function () {
                    mb = k;
                    c = k;
                    a.j(j.eg, v(z.n()), V.n());
                    !B && Pc()
                };
                b.Mb = function (f, b) {
                    var a = b;
                    if (c) a = h;
                    else if (e) {
                        var d = b / e;
                        a = m.od(d) * (i - g) + g
                    }
                    a = Mc(a);
                    V.E(a)
                };
                b.Sc = function (a, c, h, f) {
                    B = k;
                    e = h || 1;
                    g = a;
                    i = c;
                    vb = d;
                    V.E(a);
                    vb = k;
                    b.E(0);
                    b.qc(e, f)
                };
                b.lg = function () {
                    c = d;
                    c && b.Ld(f, f, d)
                };
                b.mg = function (a) {
                    h = a
                };
                V = new Zc;
                V.R(o);
                Nb && V.R(n)
            }

            function Lc() {
                var c = this,
                    a = Tb();
                b.N(a, 0);
                c.bb = a;
                c.cf = function (c) {
                    b.ab(a, c);
                    b.db(a)
                };
                c.tb = function () {
                    b.zb(a);
                    b.gc(a)
                }
            }

            function Wc(w, h) {
                var g = this,
                    ib = b.eb(g, o),
                    y, G = 0,
                    P, t, F, B, K, i, E = [],
                    V, N, R, n, r, A, S;
                l.call(g, -J, J + 1, {
                    mc: C & 1 ? q : e,
                    rc: Cb
                });

                function L() {
                    y && y.m();
                    Sb -= G;
                    G = 0;
                    y = new cb.ib(t, cb, {
                        Hb: b.l(t, "idle", ic),
                        hg: !s
                    });
                    y.Tc(p.cc, Y)
                }

                function Z() {
                    y.Zc < cb.Zc && L()
                }

                function Y(b, a) {
                    G += a;
                    Sb += a;
                    if (h == u) !G && g.fc()
                }

                function Q(p, s, o) {
                    if (!N) {
                        N = d;
                        if (i && o) {
                            var q = b.l(i, "data-expand", 0) * 2,
                                f = o.width,
                                e = o.height,
                                m = f,
                                l = e;
                            if (f && e) {
                                if (B) {
                                    if (B & 3 && (!(B & 4) || f > I || e > H)) {
                                        var n = k,
                                            r = I / H * e / f;
                                        if (B & 1) n = r > 1;
                                        else if (B & 2) n = r < 1;
                                        m = n ? f * H / e : I;
                                        l = n ? H : e * I / f
                                    }
                                    b.I(i, m);
                                    b.H(i, l);
                                    b.S(i, (H - l) / 2);
                                    b.Y(i, (I - m) / 2)
                                }
                                b.he(i, c.o((m + q) / m, (l + q) / l))
                            }
                            b.vb(i, "absolute")
                        }
                        a.j(j.Zf, h)
                    }
                    s.wd(k);
                    p && p(g)
                }

                function X(f, b, c, e) {
                    if (e == A && u == h && s && Db() && !g.Rc()) {
                        var a = v(f);
                        D.gf(a, h, b, g, c, H / I);
                        b.Xf();
                        ob.Nb(a - ob.sc() - 1);
                        ob.E(a);
                        ec(a, d)
                    }
                }

                function bb(b) {
                    if (b == A && u == h && Db() && !g.Rc()) {
                        if (!n) {
                            var a = f;
                            if (D)
                                if (D.Jb == h) a = D.bf();
                                else D.tb();
                            Z();
                            n = new Vc(w, h, a, y);
                            n.Wf(r)
                        }!n.Wc() && n.jd()
                    }
                }

                function M(a, d, j) {
                    if (a == h) {
                        if (a != d) x[d] && x[d].Nd();
                        else !j && n && n.Jf();
                        r && r.Lc();
                        A = b.Lb();
                        g.Ib(b.jb(f, bb, A))
                    } else {
                        var i = c.s(h, a),
                            e = c.o(h, a),
                            l = c.s(e - i, i + q - e),
                            k = J + m.Lf - 1;
                        (!R || l <= k) && g.Ib()
                    }
                }

                function fb() {
                    if (u == h && n) {
                        n.D();
                        r && r.Mf();
                        r && r.Nf();
                        n.Kd()
                    }
                }

                function hb() {
                    u == h && n && n.D()
                }

                function ab(b) {
                    !db && a.j(j.Of, h, b)
                }
                g.wd = function (a) {
                    if (S != a) {
                        S = a;
                        a && b.ab(w, K);
                        !a && b.Fb(K)
                    }
                };
                g.Ib = function (e, c) {
                    c = c || g;
                    if (E.length && !N) {
                        c.wd(d);
                        if (!V) {
                            V = d;
                            a.j(j.Qf, h);
                            b.c(E, function (a) {
                                if (!b.k(a, "src")) {
                                    var c = b.Z(a, "src") || b.Z(a, "src2") || "";
                                    if (c) {
                                        a.src = c;
                                        b.yb(a, b.k(a, "data-display"))
                                    }
                                }
                            })
                        }
                        b.Lg(E, i, b.jb(f, Q, e, c))
                    } else Q(e, c)
                };
                g.Rf = function () {
                    if (Rc())
                        if (q == 1) {
                            g.Nd();
                            M(h, h)
                        } else {
                            var a;
                            if (D) a = D.ef(q);
                            if (a) {
                                A = b.Lb();
                                var c = h + eb,
                                    d = x[v(c)];
                                return d.Ib(b.jb(f, X, c, d, a, A), g)
                            } else(C || !pb(z.n()) || !pb(z.n() + eb)) && Rb(eb)
                        }
                };
                g.fc = function () {
                    M(h, h, d)
                };
                g.Nd = function () {
                    r && r.Mf();
                    r && r.Nf();
                    g.Ed();
                    n && n.Uf();
                    n = f;
                    L()
                };
                g.Xf = function () {
                    b.zb(w)
                };
                g.Ed = function () {
                    b.db(w)
                };

                function T(a, k, e) {
                    if (b.k(a, Kb)) return;
                    if (e) {
                        if (!t) {
                            t = a;
                            F = Tb(d);
                            var c = "background";
                            b.G(F, c + "Color", b.G(t, c + "Color"));
                            b.G(F, c + "Image", b.G(t, c + "Image"));
                            b.G(t, c, f);
                            b.Cb(F, t)
                        }
                        b.k(a, "data-events", b.kc(a));
                        b.k(a, "data-display", b.yb(a));
                        b.Gf(a, b.Z(a, "data-to"));
                        b.wg(a, b.Z(a, "data-bf"));
                        e > 1 && b.jc(a, b.k(a, "data-ts"));
                        b.Hg(a, b.l(a, "data-p"));
                        b.Fg(a, b.Z(a, "po"));
                        if (a.tagName == "IMG") {
                            E.push(a);
                            if (!b.k(a, "src")) {
                                R = d;
                                b.zb(a)
                            }
                        }
                        var g = b.ug(a);
                        if (g) {
                            var h = new Image;
                            b.k(h, "src", g);
                            E.push(h)
                        }
                        e && b.N(a, (b.N(a) || 0) + 1)
                    }
                    var j = b.Pb(a);
                    b.c(j, function (c) {
                        if (e < 3 && !i)
                            if (b.Z(c, "u") == "image") {
                                i = c;
                                i.border = 0;
                                b.Q(i, gb);
                                b.Q(a, gb);
                                b.G(i, "maxWidth", "10000px");
                                b.ab(F, i)
                            } T(c, k, e + 1)
                    })
                }
                g.bd = function (c, b) {
                    var a = J - b;
                    vc(P, a)
                };
                g.Jb = h;
                T(w, d, 0);
                B = b.l(t, "data-fillmode", m.qg);
                var O = b.Vd(t, "thumb", d);
                if (O) {
                    b.ub(O);
                    b.zb(O)
                }
                b.db(w);
                K = b.ub(U);
                b.N(K, 1e3);
                g.a(w, "click", ab);
                L(d);
                g.zd = i;
                g.Sd = w;
                P = w;
                g.a(a, 203, M);
                g.a(a, 28, hb);
                g.a(a, 24, fb);
                g.m = function () {
                    b.m(ib, y, n)
                }
            }

            function Vc(F, h, q, r) {
                var c = this,
                    E = b.eb(c, o),
                    i = 0,
                    t = 0,
                    g, m, f, e, n, w, v, y = x[h];
                l.call(c, 0, 0);

                function A() {
                    c.jd()
                }

                function C(a) {
                    v = a;
                    c.D();
                    c.jd()
                }

                function z() {}
                c.jd = function () {
                    if (!B && !mb && !v && u == h && !c.Rc()) {
                        var k = c.n();
                        if (!k)
                            if (g && !n) {
                                n = d;
                                c.Kd(d);
                                a.j(j.tg, h, t, i, t, g, e)
                            } a.j(j.Fd, h, k, i, m, f, e);
                        if (!Eb()) {
                            var l;
                            if (k == e) s && b.Db(y.Rf, 20);
                            else {
                                if (k == f) l = e;
                                else if (!k) l = f;
                                else l = c.td();
                                (k != f || !Bc()) && c.qc(l, A)
                            }
                        }
                    }
                };
                c.Jf = function () {
                    f == e && f == c.n() && c.E(m)
                };
                c.Uf = function () {
                    D && D.Jb == h && D.tb();
                    var b = c.n();
                    b < e && a.j(j.Fd, h, -b - 1, i, m, f, e)
                };
                c.Kd = function (a) {
                    q && b.ic(S, a && q.Gc.eh ? "" : "hidden")
                };
                c.bd = function (c, b) {
                    if (n && b >= g) {
                        n = k;
                        y.Ed();
                        D.tb();
                        a.j(j.Ng, h, g, i, t, g, e)
                    }
                    a.j(j.Og, h, b, i, m, f, e)
                };
                c.Wf = function (a) {
                    if (a && !w) {
                        w = a;
                        a.Tc($JssorPlayer$.Af, C)
                    }
                };
                c.a(r, p.Pc, z);
                q && c.Xc(q);
                g = c.sb();
                c.Xc(r);
                m = g + r.lc;
                e = c.sb();
                f = s ? g + r.Oc : e;
                c.m = function () {
                    E.m();
                    c.D()
                }
            }

            function gc() {
                bc = mb;
                Ac = y.td();
                ab = z.n();
                ub = dd(ab)
            }

            function Fc() {
                gc();
                if (B || Eb()) {
                    y.D();
                    a.j(j.Rg)
                }
            }

            function Dc(f) {
                if (Db()) {
                    var b = z.n(),
                        a = ub,
                        e = 0;
                    if (f && c.Bb(O) >= m.oe) {
                        a = b;
                        e = yb
                    }
                    a = c.U(a);
                    a = wb(a + e, .5);
                    var d = c.Bb(a - b);
                    if (d < 1 && m.od != h.wb) d = c.u(d, .5);
                    if ((!db || !f) && bc) y.qc(Ac);
                    else if (b == a) jc.fc();
                    else y.Sc(b, a, d * Bb)
                }
            }

            function yc(a) {
                !b.gb(b.Ob(a), e, n.md) && b.Vb(a)
            }

            function pc(b) {
                Ab = k;
                B = d;
                Fc();
                if (!bc) A = 0;
                a.j(j.Sg, v(ab), ab, b)
            }

            function Tc(a) {
                tc(a, 1)
            }

            function tc(c, d) {
                O = 0;
                xb = 0;
                yb = 0;
                Gc = hc;
                if (d) {
                    var h = c.touches[0];
                    zb = {
                        x: h.clientX,
                        y: h.clientY
                    }
                } else zb = b.id(c);
                var f = b.Ob(c),
                    g = b.gb(f, "1", Cc);
                if ((!g || g === t) && !W && (!d || c.touches.length == 1)) {
                    jb = b.gb(f, e, n.md) || !ib || !Uc();
                    a.a(i, d ? "touchmove" : "mousemove", Wb);
                    Ab = !jb && b.gb(f, e, n.ad);
                    !Ab && !jb && pc(c, d)
                }
            }

            function Wb(a) {
                var e, f;
                a = b.Wg(a);
                if (a.type != "mousemove")
                    if (a.touches.length == 1) {
                        f = a.touches[0];
                        e = {
                            x: f.clientX,
                            y: f.clientY
                        }
                    } else fb();
                else e = b.id(a);
                if (e) {
                    var i = e.x - zb.x,
                        j = e.y - zb.y,
                        g = c.Bb(i),
                        h = c.Bb(j);
                    if (A || g > 1.5 || h > 1.5)
                        if (Ab) pc(a, f);
                        else {
                            if (c.T(ub) != ub) A = A || R & W;
                            if ((i || j) && !A) {
                                if (W == 3)
                                    if (h > g) A = 2;
                                    else A = 1;
                                else A = W;
                                if (Qb && A == 1 && h > g * 2.4) jb = d
                            }
                            var l = i,
                                k = kb;
                            if (A == 2) {
                                l = j;
                                k = lb
                            }(O - xb) * nb < -1.5 && (yb = 0);
                            (O - xb) * nb > 1.5 && (yb = -1);
                            xb = O;
                            O = l;
                            Ic = ub - O * nb / k / Gc * m.Yg;
                            if (O && A && !jb) {
                                b.Vb(a);
                                y.lg(d);
                                y.mg(Ic)
                            }
                        }
                }
            }

            function fb() {
                Qc();
                a.M(i, "mousemove", Wb);
                a.M(i, "touchmove", Wb);
                db = O;
                if (B) {
                    db && s & 8 && (s = 0);
                    y.D();
                    B = k;
                    var b = z.n();
                    a.j(j.Vg, v(b), b, v(ab), ab);
                    X & 12 && gc();
                    Dc(d)
                }
            }

            function ed(c) {
                var f = b.Ob(c),
                    a = b.gb(f, "1", Kb);
                if (t === a)
                    if (db) {
                        b.Ig(c);
                        a = b.gb(f, e, "data-jssor-button", "A");
                        a && b.Vb(c)
                    } else {
                        s & 4 && (s = 0);
                        a = b.gb(f, e, "data-jssor-click");
                        if (a) {
                            b.Vb(c);
                            hitValues = (b.k(a, "data-jssor-click") || "").split(":");
                            var g = b.Mg(hitValues[1]);
                            hitValues[0] == "to" && qb(g - 1);
                            hitValues[0] == "next" && qb(g, e, d)
                        }
                    }
            }
            a.Ub = function (a) {
                if (a == e) return s;
                if (a != s) {
                    s = a;
                    s && x[u] && x[u].fc()
                }
            };
            a.Zb = function () {
                return K
            };
            a.ac = function () {
                return P
            };
            a.Dg = function (b) {
                if (b == e) return Ub || K;
                a.ec(b, b / K * P)
            };
            a.ec = function (c, a, d) {
                b.I(t, c);
                b.H(t, a);
                zc = c / K;
                qc = a / P;
                b.c(cc, function (a) {
                    a.ec(zc, qc, d)
                });
                if (!Ub) {
                    b.Cb(S, w);
                    b.S(S, 0);
                    b.Y(S, 0)
                }
                Ub = c
            };
            a.sf = oc;
            a.of = mc;
            a.Ld = function () {
                a.Ub(s || 1)
            };

            function Sc() {
                Xb.vd && b.G(w, Xb.vd, ([f, "pan-y", "pan-x", "auto"])[ib] || "");
                a.a(t, "click", ed, d);
                a.a(t, "mouseleave", cd);
                a.a(t, "mouseenter", bd);
                a.a(t, "mousedown", tc);
                a.a(t, "touchstart", Tc);
                a.a(t, "dragstart", yc);
                a.a(t, "selectstart", yc);
                a.a(g, "mouseup", fb);
                a.a(i, "mouseup", fb);
                a.a(i, "touchend", fb);
                a.a(i, "touchcancel", fb);
                a.a(g, "blur", fb);
                m.xc && a.a(i, "keydown", function (c) {
                    var a = b.be(c);
                    if (a == 37 || a == 39) {
                        s & 8 && (s = 0);
                        wc(m.xc * (a - 38) * nb, d)
                    }
                })
            }

            function kc(g) {
                xc.ke();
                E = [];
                x = [];
                var h = b.Pb(w),
                    k = b.ud(["DIV", "A", "LI"]);
                b.c(h, function (a) {
                    var c = a;
                    if (k[a.tagName.toUpperCase()] && !b.Z(a, "u") && b.yb(a) != "none") {
                        var c = Tb(d);
                        b.Q(a, gb);
                        b.Cb(c, a);
                        b.ab(c, a);
                        b.jc(c, "flat");
                        b.jc(a, "preserve-3d");
                        b.zb(c);
                        E.push(c)
                    }
                    b.N(c, (b.N(c) || 0) + 1)
                });
                q = E.length;
                if (q) {
                    var a = R & 1 ? Gb : Fb;
                    Jc();
                    G = m.lf;
                    if (G == e) G = (a - F + L) / 2;
                    hb = a / F;
                    J = c.s(q, m.cb || q, c.U(hb));
                    C = J < q ? m.Yb : 0;
                    if (q * F - L <= a) {
                        hb = q - L / F;
                        G = (a - F + L) / 2;
                        ac = (a - F * q + L) / 2
                    }
                    if (Hb) {
                        Mb = Hb.ib;
                        Nb = !G && J == 1 && q > 1 && Mb && (!b.rd() || b.ld() >= 9)
                    }
                    if (!(C & 1)) {
                        bb = G / F;
                        if (bb > q - 1) {
                            bb = q - 1;
                            G = bb * F
                        }
                        N = bb;
                        Q = N + q - hb - L / F
                    }
                    ib = (J > 1 || G ? R : -1) & m.Nc;
                    if (Nb) D = new Mb(Jb, I, H, Hb, Qb, Hc);
                    for (var f = 0; f < E.length; f++) {
                        var i = E[f],
                            j = new Wc(i, f);
                        x.push(j)
                    }
                    ob = new Xc;
                    z = new Yc;
                    y = new Oc(z, ob);
                    Sc()
                }
                b.c(Y, function (a) {
                    a.Cc(q, x);
                    g && a.Tc(r.yc, wc)
                })
            }
            a.z = function (c, g) {
                a.bb = t = b.Tb(c);
                K = b.I(t);
                P = b.H(t);
                m = b.L({
                    qg: 0,
                    Lf: 1,
                    xc: 1,
                    kd: 0,
                    Ub: 0,
                    Yb: 1,
                    ve: d,
                    ge: d,
                    Te: 1,
                    Ud: 3e3,
                    se: 1,
                    re: 500,
                    od: h.nd,
                    oe: 20,
                    Yg: 1,
                    te: 0,
                    af: 1,
                    Wd: 1,
                    Nc: 1
                }, g);
                m.ve = m.ve && b.fg();
                if (m.Hb != e) m.Ud = m.Hb;
                if (m.jf != e) m.cb = m.jf;
                if (m.df != e) m.lf = m.df;
                s = m.Ub & 63;
                !m.af;
                eb = m.Te;
                X = m.se;
                X &= Qb ? 10 : 5;
                ic = m.Ud;
                Bb = m.re;
                R = m.Wd & 3;
                sb = b.pg(b.k(t, "dir")) == "rtl";
                Cb = sb && (R == 1 || m.Nc & 1);
                nb = Cb ? -1 : 1;
                Hb = m.De;
                cb = b.L({
                    ib: p
                }, m.Zg);
                tb = m.ff;
                Z = m.hf;
                M = m.hh;
                var f = b.Pb(t);
                b.c(f, function (a, d) {
                    var c = b.Z(a, "u");
                    if (c == "loading") U = a;
                    else {
                        if (c == "slides") {
                            w = a;
                            b.G(w, "margin", 0);
                            b.G(w, "padding", 0);
                            b.jc(w, "flat")
                        }
                        if (c == "navigator") Vb = a;
                        if (c == "arrowleft") Zb = a;
                        if (c == "arrowright") Yb = a;
                        if (c == "thumbnavigator") Ib = a;
                        if (a.tagName != "STYLE" && a.tagName != "SCRIPT") cc[c || d] = new Nc(a, c ==
                            "slides", b.ud(["slides", "thumbnavigator"])[c])
                    }
                });
                U && b.Fb(U);
                U = U || b.Ac(i);
                Gb = b.I(w);
                Fb = b.H(w);
                I = m.we || Gb;
                H = m.xg || Fb;
                gb = {
                    C: I,
                    A: H,
                    i: 0,
                    g: 0,
                    Cd: "block",
                    Gb: "absolute"
                };
                L = m.te;
                kb = I + L;
                lb = H + L;
                F = R & 1 ? kb : lb;
                Jb = new Lc;
                b.k(t, Kb, "1");
                b.N(w, b.N(w) || 0);
                b.vb(w, "absolute");
                S = b.ub(w, d);
                b.G(S, "pointerEvents", "none");
                b.Cb(S, w);
                b.ab(S, Jb.bb);
                b.ic(w, "hidden");
                if (Vb && tb) {
                    tb.pc = sb;
                    lc = new tb.ib(Vb, tb, K, P);
                    Y.push(lc)
                }
                if (Z && Zb && Yb) {
                    Z.pc = sb;
                    Z.Yb = m.Yb;
                    nc = new Z.ib(Zb, Yb, Z, a);
                    Y.push(nc)
                }
                if (Ib && M) {
                    M.kd = m.kd;
                    M.xc = M.xc || 0;
                    M.pc = sb;
                    dc = new M.ib(Ib, M, U);
                    !M.dh && b.k(Ib, Cc, "1");
                    Y.push(dc)
                }
                kc(d);
                a.ec(K, P);
                Pb();
                rb(v(m.kd));
                b.G(t, "visibility", "visible")
            };
            a.m = function () {
                s = 0;
                b.m(x, Y, xc);
                b.gc(t)
            };
            b.z(a)
        };
    j.Of = 21;
    j.Sg = 22;
    j.Vg = 23;
    j.dg = 24;
    j.eg = 25;
    j.Qf = 26;
    j.Zf = 27;
    j.Rg = 28;
    j.Eg = 31;
    j.yg = 32;
    j.Bg = 202;
    j.Xg = 203;
    j.tg = 206;
    j.Ng = 207;
    j.Og = 208;
    j.Fd = 209;
    jssor_1_slider_init = function () {
        var d = [{
                Ic: 800,
                B: 2
            }],
            e = {
                Ub: 1,
                De: {
                    ib: u,
                    wc: d,
                    Se: 1
                },
                hf: {
                    ib: v
                },
                ff: {
                    ib: t
                }
            },
            c = new j("jssor_1", e),
            f = 980;

        function a() {
            var d = c.bb.parentNode,
                b = d.clientWidth;
            if (b) {
                var e = m.min(f || b, b);
                c.Dg(e)
            } else g.setTimeout(a, 30)
        }
        a();
        b.nb(g, "load", a);
        b.nb(g, "resize", a);
        b.nb(g, "orientationchange", a)
    }
}(window, document, Math, null, true, false)