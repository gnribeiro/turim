!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length" in a && a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a);
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c;
        });
    }
    function e(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), 
        _.ready();
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = _.expando + h.uid++;
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c;
            } catch (e) {}
            sa.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function j() {
        return !0;
    }
    function k() {
        return !1;
    }
    function l() {
        try {
            return Z.activeElement;
        } catch (a) {}
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"));
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c]);
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i));
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([ a ], c) : c;
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f;
    }
    function u(a) {
        var b = Z, c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), 
        c;
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), 
        Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; ) if (b = Xa[e] + c, 
        b in a) return b;
        return d;
    }
    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), 
        d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), 
        "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g;
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), 
        "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e);
    }
    function D() {
        return setTimeout(function() {
            Ya = void 0;
        }), Ya = _.now();
    }
    function E(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xa(a), p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ n.overflow, n.overflowX, n.overflowY ], 
        j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, 
        "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), 
        c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], $a.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0;
            }
            m[d] = p && p[d] || _.style(a, d);
        } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), 
            o ? _(a).show() : l.done(function() {
                _(a).hide();
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b]);
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bb.length, h = _.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Ya || D(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++) if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a;
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== _.type(b)) d(a, b); else for (e in b) O(a + "[" + e + "]", b[e], c, d);
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.4", _ = function(a, b) {
        return new _.fn.init(a, b);
    }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ba = /^-ms-/, ca = /-([\da-z])/gi, da = function(a, b) {
        return b.toUpperCase();
    };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this);
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return _.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, 
        f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), 
            b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [ a ] : a) : T.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && i.push(e); else for (f in a) e = b(a[f], f, d), 
            null != e && i.push(e);
            return S.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)));
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0;
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase();
    });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, 
            "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), 
                        n = "[id='" + n + "'] ", i = j.length; i--; ) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",");
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        l || b.removeAttribute("id");
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d;
            }
            var b = [];
            return a;
        }
        function d(a) {
            return a[N] = !0, a;
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ P, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d;
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [ h ] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; ) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i);
                        }
                        for (k = t.length; k--; ) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b;
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e;
            } ]; e > h; h++) if (c = w.relative[a[h].type]) k = [ n(o(k), c) ]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++) ;
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a));
                }
                k.push(c);
            }
            return o(k);
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; ) if (m(k, g, h)) {
                            i.push(k);
                            break;
                        }
                        j && (P = u);
                    }
                    e && ((k = !m && k) && n--, d && p.push(k));
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; ) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (;o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r);
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                }
                return j && (P = u, C = s), p;
            };
            return e ? d(g) : g;
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date(), O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0;
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"), fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]", ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)", ha = new RegExp(ca + "+", "g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"), ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), ma = new RegExp(ga), na = new RegExp("^" + ea + "$"), oa = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + fa),
            PSEUDO: new RegExp("^" + ga),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ba + ")$", "i"),
            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
        }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), wa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, xa = function() {
            F();
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType;
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, 
            c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), 
            I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length;
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length;
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0;
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), 
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), 
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]");
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1);
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [ a ], j = [ b ];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode; ) i.unshift(c);
                for (c = b; c = c.parentNode; ) j.unshift(c);
                for (;i[e] === j[e]; ) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, d) : G;
        }, b.matches = function(a, c) {
            return b(a, null, null, c);
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return b(c, G, null, [ a ]).length > 0;
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return D = null, a;
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d++]; ) c += x(b);
            return c;
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [ a, a, "", c ], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; ) d = aa(a, e[g]), a[d] = !(b[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, e);
                    }) : f;
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0;
                    };
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa), function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                    };
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !w.pseudos.empty(a);
                },
                header: function(a) {
                    return qa.test(a.nodeName);
                },
                input: function(a) {
                    return pa.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: j(function() {
                    return [ 0 ];
                }),
                last: j(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: j(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l(), z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a;
            }
            return f;
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length);
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); ) if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                    break;
                }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c;
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, 
        F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), e(function(a) {
            return null == a.getAttribute("disabled");
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), b;
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, 
    _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext, ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [ d ] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0));
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length;
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ka = _.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : ja.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), 
                ga.test(c[1]) && _.isPlainObject(b)) for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = Z, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), _.makeArray(a, this));
    };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/, ma = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (e && _(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return _.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c);
        },
        next: function(a) {
            return e(a, "nextSibling");
        },
        prev: function(a) {
            return e(a, "previousSibling");
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return _.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes);
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), 
            this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var na = /\S+/g, oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable());
        }, l = {
            add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), d ? g = i.length : b && (e = c, k(b));
                }
                return this;
            },
            remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; ) i.splice(c, 1), d && (g >= c && g--, 
                    h >= c && h--);
                }), this;
            },
            has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
            },
            empty: function() {
                return i = [], g = 0, this;
            },
            disable: function() {
                return i = j = b = void 0, this;
            },
            disabled: function() {
                return !i;
            },
            lock: function() {
                return j = void 0, b || l.disable(), this;
            },
            locked: function() {
                return !j;
            },
            fireWith: function(a, b) {
                return !i || c && !j || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? j.push(b) : k(b)), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return l;
    }, _.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", _.Callbacks("once memory"), "resolved" ], [ "reject", "fail", _.Callbacks("once memory"), "rejected" ], [ "notify", "progress", _.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? _.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    });
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this;
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [ _ ]), 
            _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
        }
    }), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), 
        a.addEventListener("load", g, !1))), pa.promise(b);
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (_.isEmptyObject(f)) _.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(na) || [])), c = d.length;
                for (;c--; ) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var ra = new h(), sa = new h(), ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ua = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sa.hasData(a) || ra.hasData(a);
        },
        data: function(a, b, c) {
            return sa.access(a, b, c);
        },
        removeData: function(a, b) {
            sa.remove(a, b);
        },
        _data: function(a, b, c) {
            return ra.access(a, b, c);
        },
        _removeData: function(a, b) {
            ra.remove(a, b);
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), 
                    i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                sa.set(this, a);
            }) : qa(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                sa.remove(this, a);
            });
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
                _.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    ra.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = ra.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wa = [ "Top", "Right", "Bottom", "Left" ], xa = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a);
    }, ya = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/, Ba = /^(?:mouse|pointer|contextmenu)|click/, Ca = /^(?:focusinfocus|focusoutblur)$/, Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), 
            (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(na) || [ "" ], j = b.length; j--; ) h = Da.exec(b[j]) || [], 
            n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, 
            n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            _.event.global[n] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [ "" ], j = b.length; j--; ) if (h = Da.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [ d || Z ], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), 
            n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : _.makeArray(c, [ b ]), 
            l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), 
                    h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : l.bindType || n, 
                k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), 
                k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], 
                h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (ra.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = e.elem, 
                c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, 
                a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), 
                void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, 
        b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(a, b);
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0);
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b));
            }
        };
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), 
            this.each(function() {
                _.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fa = /<([\w:]+)/, Ga = /<|&#?\w+;/, Ha = /<(?:script|style|link)/i, Ia = /checked\s*(?:[^=]|=\s*.checked.)/i, Ja = /^$|\/(?:java|ecma)script/i, Ka = /^true\/(.*)/, La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ma = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, 
    Ma.th = Ma.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (g = r(h), 
            f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b) if (c) for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]); else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === _.type(e)) _.merge(l, e.nodeType ? [ e ] : e); else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; ) if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), 
            f = r(k.appendChild(e), "script"), i && p(f), c)) for (j = 0; e = f[j++]; ) Ja.test(e.type || "") && c.push(e);
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e];
                }
                delete sa.cache[c[sa.expando]];
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), 
            c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b);
            });
        },
        html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), 
                f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f) for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], 
                Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")));
            }
            return this;
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var Na, Oa = {}, Pa = /^margin/, Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"), Ra = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f);
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", 
        Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
        f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c;
            },
            boxSizingReliable: function() {
                return null == d && b(), d;
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), 
                b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), 
                b;
            }
        }));
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var Sa = /^(none|table(?!-c[ea]).+)/, Ta = new RegExp("^(" + va + ")(.*)$", "i"), Ua = new RegExp("^([+-])=(" + va + ")", "i"), Va = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Wa = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Xa = [ "Webkit", "O", "Moz", "ms" ];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), 
                Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e;
        }
    }), _.each([ "height", "width" ], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                    return A(a, b, d);
                }) : A(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [ a, "marginRight" ]) : void 0;
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y);
    }), _.fn.extend({
        css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return B(this, !0);
        },
        hide: function() {
            return B(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide();
            });
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : C.propHooks._default.set(this), this;
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, _.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/, _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"), ab = /queueHooks$/, bb = [ G ], cb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = _a.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? bb.unshift(a) : bb.push(a);
        }
    }), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue);
        }, d;
    }, _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || ra.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = ra.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ra.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), _.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e);
        };
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0;
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop();
    }, _.fx.interval = 13, _.fx.start = function() {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval));
    }, _.fx.stop = function() {
        clearInterval(Za), Za = null;
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, 
        Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", 
        Y.radioValue = "t" === a.value;
    }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a);
            });
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void _.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(na);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), eb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            fb[b] = f), e;
        };
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a];
            });
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, 
            e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), _.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        _.propFix[this.toLowerCase()] = this;
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b);
            }) : this.each(function() {
                if ("string" === c) for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c);
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), _.each([ "radio", "checkbox" ], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0;
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var jb = _.now(), kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), 
        b;
    };
    var lb = /#.*$/, mb = /([?&])_=[^&]*/, nb = /^(.*?):[ \t]*([^\r\n]*)$/gm, ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pb = /^(?:GET|HEAD)$/, qb = /^\/\//, rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sb = {}, tb = {}, ub = "*/".concat("*"), vb = a.location.href, wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, 
                i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), 
                i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), 
                u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, 
                k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [ k, w, v ]) : o.rejectWith(m, [ v, w, r ]), 
                v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [ v, l, i ? k : r ]), 
                p.fireWith(m, [ v, w ]), j && (n.trigger("ajaxComplete", [ v, l ]), --_.active || _.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g) for (g = {}; b = nb.exec(f); ) g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b), c(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), 
            l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [ "" ], 
            null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), 
            l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), 
            K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), 
            l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, 
            delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), 
            l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), 
            _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), 
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [ v, l ]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout");
                }, l.timeout));
                try {
                    t = 1, d.send(r, c);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w);
                }
            } else c(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script");
        }
    }), _.each([ "get", "post" ], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes);
            }).end();
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a);
    };
    var xb = /%20/g, yb = /\[\]$/, zb = /\r?\n/g, Ab = /^(?:submit|button|image|reset|file)$/i, Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+");
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a));
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(zb, "\r\n")
                };
            }).get();
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Cb = 0, Db = {}, Eb = {
        0: 200,
        1223: 204
    }, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db) Db[a]();
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a;
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), Z.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Gb = [], Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a;
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = _.buildFragment([ a ], b, e), e && e.length && _(e).remove(), 
        _.merge([], d.childNodes));
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, _.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), 
            i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), 
            c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), 
                d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); ) a = a.offsetParent;
                return a || Jb;
            });
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), _.each([ "top", "left" ], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0;
        });
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), _.fn.size = function() {
        return this.length;
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _;
    });
    var Kb = a.jQuery, Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _;
    }, typeof b === za && (a.jQuery = a.$ = _), _;
}), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function(a, b, c) {
    function d(c) {
        var d = b.console;
        f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), 
        a.migrateTrace && d.trace && d.trace()));
    }
    function e(b, e, f, g) {
        if (Object.defineProperty) try {
            return Object.defineProperty(b, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return d(g), f;
                },
                set: function(a) {
                    d(g), f = a;
                }
            }), c;
        } catch (h) {}
        a._definePropertyBroken = !0, b[e] = f;
    }
    var f = {};
    a.migrateWarnings = [], !a.migrateMute && b.console && b.console.log && b.console.log("JQMIGRATE: Logging is active"), 
    a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
        f = {}, a.migrateWarnings.length = 0;
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {
        size: 1
    }).attr("size") && a.attrFn, h = a.attr, i = a.attrHooks.value && a.attrHooks.value.get || function() {
        return null;
    }, j = a.attrHooks.value && a.attrHooks.value.set || function() {
        return c;
    }, k = /^(?:input|button)$/i, l = /^[238]$/, m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
        var j = e.toLowerCase(), o = b && b.nodeType;
        return i && (4 > h.length && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), 
        !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
            get: function(b, d) {
                var e, f = a.prop(b, d);
                return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c;
            },
            set: function(b, c, d) {
                var e;
                return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), 
                b.setAttribute(d, d.toLowerCase())), d;
            }
        }, n.test(j) && d("jQuery.fn.attr('" + j + "') may use property instead of attribute")), 
        h.call(a, b, e, f));
    }, a.attrHooks.value = {
        get: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), 
            b in a ? a.value : null);
        },
        set: function(a, b) {
            var e = (a.nodeName || "").toLowerCase();
            return "button" === e ? j.apply(this, arguments) : ("input" !== e && "option" !== e && d("jQuery.fn.attr('value', val) no longer sets properties"), 
            a.value = b, c);
        }
    };
    var o, p, q = a.fn.init, r = a.parseJSON, s = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, c, e) {
        var f;
        return b && "string" == typeof b && !a.isPlainObject(c) && (f = s.exec(a.trim(b))) && f[0] && ("<" !== b.charAt(0) && d("$(html) HTML strings must start with '<' character"), 
        f[3] && d("$(html) HTML text after last tag is ignored"), "#" === f[0].charAt(0) && (d("HTML string cannot start with a '#' character"), 
        a.error("JQMIGRATE: Invalid selector string (XSS)")), c && c.context && (c = c.context), 
        a.parseHTML) ? q.call(this, a.parseHTML(f[2], c, !0), c, e) : q.apply(this, arguments);
    }, a.fn.init.prototype = a.fn, a.parseJSON = function(a) {
        return a || null === a ? r.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), 
        null);
    }, a.uaMatch = function(a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        };
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, 
    p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), 
    a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.sub = function() {
        function b(a, c) {
            return new b.fn.init(a, c);
        }
        a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, 
        b.sub = this.sub, b.fn.init = function(d, e) {
            return e && e instanceof a && !(e instanceof b) && (e = b(e)), a.fn.init.call(this, d, e, c);
        }, b.fn.init.prototype = b.fn;
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b;
    }, a.ajaxSetup({
        converters: {
            "text json": a.parseJSON
        }
    });
    var t = a.fn.data;
    a.fn.data = function(b) {
        var e, f, g = this[0];
        return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), 
        e !== c && e !== f || f === c) ? t.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), 
        f);
    };
    var u = /\/(java|ecma)script/i, v = a.fn.andSelf || a.fn.addBack;
    a.fn.andSelf = function() {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), v.apply(this, arguments);
    }, a.clean || (a.clean = function(b, e, f, g) {
        e = e || document, e = !e.nodeType && e[0] || e, e = e.ownerDocument || e, d("jQuery.clean() is deprecated");
        var h, i, j, k, l = [];
        if (a.merge(l, a.buildFragment(b, e).childNodes), f) for (j = function(a) {
            return !a.type || u.test(a.type) ? g ? g.push(a.parentNode ? a.parentNode.removeChild(a) : a) : f.appendChild(a) : c;
        }, h = 0; null != (i = l[h]); h++) a.nodeName(i, "script") && j(i) || (f.appendChild(i), 
        i.getElementsByTagName !== c && (k = a.grep(a.merge([], i.getElementsByTagName("script")), j), 
        l.splice.apply(l, [ h + 1, 0 ].concat(k)), h += k.length));
        return l;
    });
    var w = a.event.add, x = a.event.remove, y = a.event.trigger, z = a.fn.toggle, A = a.fn.live, B = a.fn.die, C = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", D = RegExp("\\b(?:" + C + ")\\b"), E = /(?:^|\s)hover(\.\S+|)\b/, F = function(b) {
        return "string" != typeof b || a.event.special.hover ? b : (E.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), 
        b && b.replace(E, "mouseenter$1 mouseleave$1"));
    };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), 
    a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), 
    a.event.add = function(a, b, c, e, f) {
        a !== document && D.test(b) && d("AJAX events should be attached to document: " + b), 
        w.call(this, a, F(b || ""), c, e, f);
    }, a.event.remove = function(a, b, c, d, e) {
        x.call(this, a, F(b) || "", c, d, e);
    }, a.fn.error = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return d("jQuery.fn.error() is deprecated"), a.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), 
        this);
    }, a.fn.toggle = function(b, c) {
        if (!a.isFunction(b) || !a.isFunction(c)) return z.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments, f = b.guid || a.guid++, g = 0, h = function(c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1;
        };
        for (h.guid = f; e.length > g; ) e[g++].guid = f;
        return this.click(h);
    }, a.fn.live = function(b, c, e) {
        return d("jQuery.fn.live() is deprecated"), A ? A.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), 
        this);
    }, a.fn.die = function(b, c) {
        return d("jQuery.fn.die() is deprecated"), B ? B.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), 
        this);
    }, a.event.trigger = function(a, b, c, e) {
        return c || D.test(a) || d("Global events are undocumented and deprecated"), y.call(this, a, b, c || document, e);
    }, a.each(C.split("|"), function(b, c) {
        a.event.special[c] = {
            setup: function() {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                    a.event.trigger(c, null, b, !0);
                }), a._data(this, c, a.guid++)), !1;
            },
            teardown: function() {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)), 
                !1;
            }
        };
    });
}(jQuery, window), function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b();
}(this, function() {
    "use strict";
    function a() {
        return Uc.apply(null, arguments);
    }
    function b(a) {
        Uc = a;
    }
    function c(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
    }
    function d(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
    }
    function e(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d;
    }
    function f(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function g(a, b) {
        for (var c in b) f(b, c) && (a[c] = b[c]);
        return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), 
        a;
    }
    function h(a, b, c, d) {
        return Da(a, b, c, d, !0).utc();
    }
    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        };
    }
    function j(a) {
        return null == a._pf && (a._pf = i()), a._pf;
    }
    function k(a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), 
            a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour);
        }
        return a._isValid;
    }
    function l(a) {
        var b = h(NaN);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b;
    }
    function m(a) {
        return void 0 === a;
    }
    function n(a, b) {
        var c, d, e;
        if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), 
        m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), 
        m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), 
        m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), Wc.length > 0) for (c in Wc) d = Wc[c], 
        e = b[d], m(e) || (a[d] = e);
        return a;
    }
    function o(b) {
        n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Xc === !1 && (Xc = !0, 
        a.updateOffset(this), Xc = !1);
    }
    function p(a) {
        return a instanceof o || null != a && null != a._isAMomentObject;
    }
    function q(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a);
    }
    function r(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = q(b)), c;
    }
    function s(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
        return g + f;
    }
    function t() {}
    function u(a) {
        return a ? a.toLowerCase().replace("_", "-") : a;
    }
    function v(a) {
        for (var b, c, d, e, f = 0; f < a.length; ) {
            for (e = u(a[f]).split("-"), b = e.length, c = u(a[f + 1]), c = c ? c.split("-") : null; b > 0; ) {
                if (d = w(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
                b--;
            }
            f++;
        }
        return null;
    }
    function w(a) {
        var b = null;
        if (!Yc[a] && "undefined" != typeof module && module && module.exports) try {
            b = Vc._abbr, require("./locale/" + a), x(b);
        } catch (c) {}
        return Yc[a];
    }
    function x(a, b) {
        var c;
        return a && (c = m(b) ? z(a) : y(a, b), c && (Vc = c)), Vc._abbr;
    }
    function y(a, b) {
        return null !== b ? (b.abbr = a, Yc[a] = Yc[a] || new t(), Yc[a].set(b), x(a), Yc[a]) : (delete Yc[a], 
        null);
    }
    function z(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Vc;
        if (!c(a)) {
            if (b = w(a)) return b;
            a = [ a ];
        }
        return v(a);
    }
    function A(a, b) {
        var c = a.toLowerCase();
        Zc[c] = Zc[c + "s"] = Zc[b] = a;
    }
    function B(a) {
        return "string" == typeof a ? Zc[a] || Zc[a.toLowerCase()] : void 0;
    }
    function C(a) {
        var b, c, d = {};
        for (c in a) f(a, c) && (b = B(c), b && (d[b] = a[c]));
        return d;
    }
    function D(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a);
    }
    function E(b, c) {
        return function(d) {
            return null != d ? (G(this, b, d), a.updateOffset(this, c), this) : F(this, b);
        };
    }
    function F(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
    }
    function G(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
    }
    function H(a, b) {
        var c;
        if ("object" == typeof a) for (c in a) this.set(c, a[c]); else if (a = B(a), D(this[a])) return this[a](b);
        return this;
    }
    function I(a, b, c) {
        var d = "" + Math.abs(a), e = b - d.length, f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
    }
    function J(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]();
        }), a && (bd[a] = e), b && (bd[b[0]] = function() {
            return I(e.apply(this, arguments), b[1], b[2]);
        }), c && (bd[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a);
        });
    }
    function K(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
    }
    function L(a) {
        var b, c, d = a.match($c);
        for (b = 0, c = d.length; c > b; b++) bd[d[b]] ? d[b] = bd[d[b]] : d[b] = K(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f;
        };
    }
    function M(a, b) {
        return a.isValid() ? (b = N(b, a.localeData()), ad[b] = ad[b] || L(b), ad[b](a)) : a.localeData().invalidDate();
    }
    function N(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a;
        }
        var d = 5;
        for (_c.lastIndex = 0; d >= 0 && _c.test(a); ) a = a.replace(_c, c), _c.lastIndex = 0, 
        d -= 1;
        return a;
    }
    function O(a, b, c) {
        td[a] = D(b) ? b : function(a, d) {
            return a && c ? c : b;
        };
    }
    function P(a, b) {
        return f(td, a) ? td[a](b._strict, b._locale) : new RegExp(Q(a));
    }
    function Q(a) {
        return R(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e;
        }));
    }
    function R(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function S(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [ a ]), "number" == typeof b && (d = function(a, c) {
            c[b] = r(a);
        }), c = 0; c < a.length; c++) ud[a[c]] = d;
    }
    function T(a, b) {
        S(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e);
        });
    }
    function U(a, b, c) {
        null != b && f(ud, a) && ud[a](b, c._a, c, a);
    }
    function V(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }
    function W(a, b) {
        return c(this._months) ? this._months[a.month()] : this._months[Ed.test(b) ? "format" : "standalone"][a.month()];
    }
    function X(a, b) {
        return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Ed.test(b) ? "format" : "standalone"][a.month()];
    }
    function Y(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
        d = 0; 12 > d; d++) {
            if (e = h([ 2e3, d ]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), 
            this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), 
            c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), 
            this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d;
        }
    }
    function Z(a, b) {
        var c;
        return a.isValid() ? "string" == typeof b && (b = a.localeData().monthsParse(b), 
        "number" != typeof b) ? a : (c = Math.min(a.date(), V(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), 
        a) : a;
    }
    function $(b) {
        return null != b ? (Z(this, b), a.updateOffset(this, !0), this) : F(this, "Month");
    }
    function _() {
        return V(this.year(), this.month());
    }
    function aa(a) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || ca.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
    function ba(a) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || ca.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex;
    }
    function ca() {
        function a(a, b) {
            return b.length - a.length;
        }
        var b, c, d = [], e = [], f = [];
        for (b = 0; 12 > b; b++) c = h([ 2e3, b ]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), 
        f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) d[b] = R(d[b]), e[b] = R(e[b]), 
        f[b] = R(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
        this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")$", "i");
    }
    function da(a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[wd] < 0 || c[wd] > 11 ? wd : c[xd] < 1 || c[xd] > V(c[vd], c[wd]) ? xd : c[yd] < 0 || c[yd] > 24 || 24 === c[yd] && (0 !== c[zd] || 0 !== c[Ad] || 0 !== c[Bd]) ? yd : c[zd] < 0 || c[zd] > 59 ? zd : c[Ad] < 0 || c[Ad] > 59 ? Ad : c[Bd] < 0 || c[Bd] > 999 ? Bd : -1, 
        j(a)._overflowDayOfYear && (vd > b || b > xd) && (b = xd), j(a)._overflowWeeks && -1 === b && (b = Cd), 
        j(a)._overflowWeekday && -1 === b && (b = Dd), j(a).overflow = b), a;
    }
    function ea(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
    }
    function fa(a, b) {
        var c = !0;
        return g(function() {
            return c && (ea(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + new Error().stack), 
            c = !1), b.apply(this, arguments);
        }, b);
    }
    function ga(a, b) {
        Jd[a] || (ea(b), Jd[a] = !0);
    }
    function ha(a) {
        var b, c, d, e, f, g, h = a._i, i = Kd.exec(h) || Ld.exec(h);
        if (i) {
            for (j(a).iso = !0, b = 0, c = Nd.length; c > b; b++) if (Nd[b][1].exec(i[1])) {
                e = Nd[b][0], d = Nd[b][2] !== !1;
                break;
            }
            if (null == e) return void (a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Od.length; c > b; b++) if (Od[b][1].exec(i[3])) {
                    f = (i[2] || " ") + Od[b][0];
                    break;
                }
                if (null == f) return void (a._isValid = !1);
            }
            if (!d && null != f) return void (a._isValid = !1);
            if (i[4]) {
                if (!Md.exec(i[4])) return void (a._isValid = !1);
                g = "Z";
            }
            a._f = e + (f || "") + (g || ""), wa(a);
        } else a._isValid = !1;
    }
    function ia(b) {
        var c = Pd.exec(b._i);
        return null !== c ? void (b._d = new Date(+c[1])) : (ha(b), void (b._isValid === !1 && (delete b._isValid, 
        a.createFromInputFallback(b))));
    }
    function ja(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h;
    }
    function ka(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), 
        b;
    }
    function la(a) {
        return ma(a) ? 366 : 365;
    }
    function ma(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
    }
    function na() {
        return ma(this.year());
    }
    function oa(a, b, c) {
        var d = 7 + b - c, e = (7 + ka(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1;
    }
    function pa(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7, i = oa(a, d, e), j = 1 + 7 * (b - 1) + h + i;
        return 0 >= j ? (f = a - 1, g = la(f) + j) : j > la(a) ? (f = a + 1, g = j - la(a)) : (f = a, 
        g = j), {
            year: f,
            dayOfYear: g
        };
    }
    function qa(a, b, c) {
        var d, e, f = oa(a.year(), b, c), g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return 1 > g ? (e = a.year() - 1, d = g + ra(e, b, c)) : g > ra(a.year(), b, c) ? (d = g - ra(a.year(), b, c), 
        e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        };
    }
    function ra(a, b, c) {
        var d = oa(a, b, c), e = oa(a + 1, b, c);
        return (la(a) - d + e) / 7;
    }
    function sa(a, b, c) {
        return null != a ? a : null != b ? b : c;
    }
    function ta(b) {
        var c = new Date(a.now());
        return b._useUTC ? [ c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate() ] : [ c.getFullYear(), c.getMonth(), c.getDate() ];
    }
    function ua(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ta(a), a._w && null == a._a[xd] && null == a._a[wd] && va(a), a._dayOfYear && (e = sa(a._a[vd], d[vd]), 
            a._dayOfYear > la(e) && (j(a)._overflowDayOfYear = !0), c = ka(e, 0, a._dayOfYear), 
            a._a[wd] = c.getUTCMonth(), a._a[xd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (;7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[yd] && 0 === a._a[zd] && 0 === a._a[Ad] && 0 === a._a[Bd] && (a._nextDay = !0, 
            a._a[yd] = 0), a._d = (a._useUTC ? ka : ja).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), 
            a._nextDay && (a._a[yd] = 24);
        }
    }
    function va(a) {
        var b, c, d, e, f, g, h, i;
        b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = sa(b.GG, a._a[vd], qa(Ea(), 1, 4).year), 
        d = sa(b.W, 1), e = sa(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, 
        g = a._locale._week.doy, c = sa(b.gg, a._a[vd], qa(Ea(), f, g).year), d = sa(b.w, 1), 
        null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, 
        (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > ra(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = pa(c, d, e, f, g), 
        a._a[vd] = h.year, a._dayOfYear = h.dayOfYear);
    }
    function wa(b) {
        if (b._f === a.ISO_8601) return void ha(b);
        b._a = [], j(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i, i = h.length, k = 0;
        for (e = N(b._f, b._locale).match($c) || [], c = 0; c < e.length; c++) f = e[c], 
        d = (h.match(P(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), 
        h = h.slice(h.indexOf(d) + d.length), k += d.length), bd[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), 
        U(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[yd] <= 12 && b._a[yd] > 0 && (j(b).bigHour = void 0), 
        b._a[yd] = xa(b._locale, b._a[yd], b._meridiem), ua(b), da(b);
    }
    function xa(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), 
        d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b;
    }
    function ya(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return j(a).invalidFormat = !0, void (a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), 
        b._f = a._f[e], wa(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, 
        j(b).score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b);
    }
    function za(a) {
        if (!a._d) {
            var b = C(a._i);
            a._a = e([ b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond ], function(a) {
                return a && parseInt(a, 10);
            }), ua(a);
        }
    }
    function Aa(a) {
        var b = new o(da(Ba(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b;
    }
    function Ba(a) {
        var b = a._i, e = a._f;
        return a._locale = a._locale || z(a._l), null === b || void 0 === e && "" === b ? l({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(da(b)) : (c(e) ? ya(a) : e ? wa(a) : d(b) ? a._d = b : Ca(a), 
        k(a) || (a._d = null), a));
    }
    function Ca(b) {
        var f = b._i;
        void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ia(b) : c(f) ? (b._a = e(f.slice(0), function(a) {
            return parseInt(a, 10);
        }), ua(b)) : "object" == typeof f ? za(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b);
    }
    function Da(a, b, c, d, e) {
        var f = {};
        return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, 
        f._l = c, f._i = a, f._f = b, f._strict = d, Aa(f);
    }
    function Ea(a, b, c, d) {
        return Da(a, b, c, d, !1);
    }
    function Fa(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Ea();
        for (d = b[0], e = 1; e < b.length; ++e) (!b[e].isValid() || b[e][a](d)) && (d = b[e]);
        return d;
    }
    function Ga() {
        var a = [].slice.call(arguments, 0);
        return Fa("isBefore", a);
    }
    function Ha() {
        var a = [].slice.call(arguments, 0);
        return Fa("isAfter", a);
    }
    function Ia(a) {
        var b = C(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, 
        this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = z(), this._bubble();
    }
    function Ja(a) {
        return a instanceof Ia;
    }
    function Ka(a, b) {
        J(a, 0, 0, function() {
            var a = this.utcOffset(), c = "+";
            return 0 > a && (a = -a, c = "-"), c + I(~~(a / 60), 2) + b + I(~~a % 60, 2);
        });
    }
    function La(a, b) {
        var c = (b || "").match(a) || [], d = c[c.length - 1] || [], e = (d + "").match(Ud) || [ "-", 0, 0 ], f = +(60 * e[1]) + r(e[2]);
        return "+" === e[0] ? f : -f;
    }
    function Ma(b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? +b : +Ea(b)) - +e, e._d.setTime(+e._d + f), 
        a.updateOffset(e, !1), e) : Ea(b).local();
    }
    function Na(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
    }
    function Oa(b, c) {
        var d, e = this._offset || 0;
        return this.isValid() ? null != b ? ("string" == typeof b ? b = La(qd, b) : Math.abs(b) < 16 && (b = 60 * b), 
        !this._isUTC && c && (d = Na(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), 
        e !== b && (!c || this._changeInProgress ? cb(this, Za(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
        a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Na(this) : null != b ? this : NaN;
    }
    function Pa(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
    }
    function Qa(a) {
        return this.utcOffset(0, a);
    }
    function Ra(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Na(this), "m")), 
        this;
    }
    function Sa() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(La(pd, this._i)), 
        this;
    }
    function Ta(a) {
        return this.isValid() ? (a = a ? Ea(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1;
    }
    function Ua() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function Va() {
        if (!m(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (n(a, this), a = Ba(a), a._a) {
            var b = a._isUTC ? h(a._a) : Ea(a._a);
            this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
    }
    function Wa() {
        return this.isValid() ? !this._isUTC : !1;
    }
    function Xa() {
        return this.isValid() ? this._isUTC : !1;
    }
    function Ya() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1;
    }
    function Za(a, b) {
        var c, d, e, g = a, h = null;
        return Ja(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = Vd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, 
        g = {
            y: 0,
            d: r(h[xd]) * c,
            h: r(h[yd]) * c,
            m: r(h[zd]) * c,
            s: r(h[Ad]) * c,
            ms: r(h[Bd]) * c
        }) : (h = Wd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: $a(h[2], c),
            M: $a(h[3], c),
            d: $a(h[4], c),
            h: $a(h[5], c),
            m: $a(h[6], c),
            s: $a(h[7], c),
            w: $a(h[8], c)
        }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = ab(Ea(g.from), Ea(g.to)), 
        g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ia(g), Ja(a) && f(a, "_locale") && (d._locale = a._locale), 
        d;
    }
    function $a(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b;
    }
    function _a(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, 
        c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
    }
    function ab(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Ma(b, a), a.isBefore(b) ? c = _a(a, b) : (c = _a(b, a), 
        c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        };
    }
    function bb(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (ga(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), 
            f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Za(c, d), cb(this, e, a), 
            this;
        };
    }
    function cb(b, c, d, e) {
        var f = c._milliseconds, g = c._days, h = c._months;
        b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && G(b, "Date", F(b, "Date") + g * d), 
        h && Z(b, F(b, "Month") + h * d), e && a.updateOffset(b, g || h));
    }
    function db(a, b) {
        var c = a || Ea(), d = Ma(c, this).startOf("day"), e = this.diff(d, "days", !0), f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse", g = b && (D(b[f]) ? b[f]() : b[f]);
        return this.format(g || this.localeData().calendar(f, this, Ea(c)));
    }
    function eb() {
        return new o(this);
    }
    function fb(a, b) {
        var c = p(a) ? a : Ea(a);
        return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1;
    }
    function gb(a, b) {
        var c = p(a) ? a : Ea(a);
        return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1;
    }
    function hb(a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c);
    }
    function ib(a, b) {
        var c, d = p(a) ? a : Ea(a);
        return this.isValid() && d.isValid() ? (b = B(b || "millisecond"), "millisecond" === b ? +this === +d : (c = +d, 
        +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1;
    }
    function jb(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b);
    }
    function kb(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b);
    }
    function lb(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Ma(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), 
        b = B(b), "year" === b || "month" === b || "quarter" === b ? (g = mb(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, 
        g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), 
        c ? g : q(g)) : NaN) : NaN;
    }
    function mb(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), 
        d = (b - f) / (c - f)), -(e + d);
    }
    function nb() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function ob() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : M(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }
    function pb(b) {
        var c = M(this, b || a.defaultFormat);
        return this.localeData().postformat(c);
    }
    function qb(a, b) {
        return this.isValid() && (p(a) && a.isValid() || Ea(a).isValid()) ? Za({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }
    function rb(a) {
        return this.from(Ea(), a);
    }
    function sb(a, b) {
        return this.isValid() && (p(a) && a.isValid() || Ea(a).isValid()) ? Za({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }
    function tb(a) {
        return this.to(Ea(), a);
    }
    function ub(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = z(a), null != b && (this._locale = b), 
        this);
    }
    function vb() {
        return this._locale;
    }
    function wb(a) {
        switch (a = B(a)) {
          case "year":
            this.month(0);

          case "quarter":
          case "month":
            this.date(1);

          case "week":
          case "isoWeek":
          case "day":
            this.hours(0);

          case "hour":
            this.minutes(0);

          case "minute":
            this.seconds(0);

          case "second":
            this.milliseconds(0);
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), 
        this;
    }
    function xb(a) {
        return a = B(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms");
    }
    function yb() {
        return +this._d - 6e4 * (this._offset || 0);
    }
    function zb() {
        return Math.floor(+this / 1e3);
    }
    function Ab() {
        return this._offset ? new Date(+this) : this._d;
    }
    function Bb() {
        var a = this;
        return [ a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond() ];
    }
    function Cb() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        };
    }
    function Db() {
        return this.isValid() ? this.toISOString() : "null";
    }
    function Eb() {
        return k(this);
    }
    function Fb() {
        return g({}, j(this));
    }
    function Gb() {
        return j(this).overflow;
    }
    function Hb() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    function Ib(a, b) {
        J(0, [ a, a.length ], 0, b);
    }
    function Jb(a) {
        return Nb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function Kb(a) {
        return Nb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function Lb() {
        return ra(this.year(), 1, 4);
    }
    function Mb() {
        var a = this.localeData()._week;
        return ra(this.year(), a.dow, a.doy);
    }
    function Nb(a, b, c, d, e) {
        var f;
        return null == a ? qa(this, d, e).year : (f = ra(a, d, e), b > f && (b = f), Ob.call(this, a, b, c, d, e));
    }
    function Ob(a, b, c, d, e) {
        var f = pa(a, b, c, d, e), g = ka(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), 
        this;
    }
    function Pb(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
    }
    function Qb(a) {
        return qa(a, this._week.dow, this._week.doy).week;
    }
    function Rb() {
        return this._week.dow;
    }
    function Sb() {
        return this._week.doy;
    }
    function Tb(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function Ub(a) {
        var b = qa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function Vb(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10);
    }
    function Wb(a, b) {
        return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()];
    }
    function Xb(a) {
        return this._weekdaysShort[a.day()];
    }
    function Yb(a) {
        return this._weekdaysMin[a.day()];
    }
    function Zb(a, b, c) {
        var d, e, f;
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
        this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
            if (e = Ea([ 2e3, 1 ]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), 
            this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), 
            this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), 
            this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), 
            this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d;
        }
    }
    function $b(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Vb(a, this.localeData()), this.add(a - b, "d")) : b;
    }
    function _b(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d");
    }
    function ac(a) {
        return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN;
    }
    function bc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d");
    }
    function cc() {
        return this.hours() % 12 || 12;
    }
    function dc(a, b) {
        J(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b);
        });
    }
    function ec(a, b) {
        return b._meridiemParse;
    }
    function fc(a) {
        return "p" === (a + "").toLowerCase().charAt(0);
    }
    function gc(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
    }
    function hc(a, b) {
        b[Bd] = r(1e3 * ("0." + a));
    }
    function ic() {
        return this._isUTC ? "UTC" : "";
    }
    function jc() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }
    function kc(a) {
        return Ea(1e3 * a);
    }
    function lc() {
        return Ea.apply(null, arguments).parseZone();
    }
    function mc(a, b, c) {
        var d = this._calendar[a];
        return D(d) ? d.call(b, c) : d;
    }
    function nc(a) {
        var b = this._longDateFormat[a], c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1);
        }), this._longDateFormat[a]);
    }
    function oc() {
        return this._invalidDate;
    }
    function pc(a) {
        return this._ordinal.replace("%d", a);
    }
    function qc(a) {
        return a;
    }
    function rc(a, b, c, d) {
        var e = this._relativeTime[c];
        return D(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
    }
    function sc(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return D(c) ? c(b) : c.replace(/%s/i, b);
    }
    function tc(a) {
        var b, c;
        for (c in a) b = a[c], D(b) ? this[c] = b : this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
    }
    function uc(a, b, c, d) {
        var e = z(), f = h().set(d, b);
        return e[c](f, a);
    }
    function vc(a, b, c, d, e) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return uc(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++) g[f] = uc(a, f, c, e);
        return g;
    }
    function wc(a, b) {
        return vc(a, b, "months", 12, "month");
    }
    function xc(a, b) {
        return vc(a, b, "monthsShort", 12, "month");
    }
    function yc(a, b) {
        return vc(a, b, "weekdays", 7, "day");
    }
    function zc(a, b) {
        return vc(a, b, "weekdaysShort", 7, "day");
    }
    function Ac(a, b) {
        return vc(a, b, "weekdaysMin", 7, "day");
    }
    function Bc() {
        var a = this._data;
        return this._milliseconds = se(this._milliseconds), this._days = se(this._days), 
        this._months = se(this._months), a.milliseconds = se(a.milliseconds), a.seconds = se(a.seconds), 
        a.minutes = se(a.minutes), a.hours = se(a.hours), a.months = se(a.months), a.years = se(a.years), 
        this;
    }
    function Cc(a, b, c, d) {
        var e = Za(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, 
        a._bubble();
    }
    function Dc(a, b) {
        return Cc(this, a, b, 1);
    }
    function Ec(a, b) {
        return Cc(this, a, b, -1);
    }
    function Fc(a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a);
    }
    function Gc() {
        var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months, i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Fc(Ic(h) + g), 
        g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), 
        i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Hc(g)), 
        h += e, g -= Fc(Ic(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, 
        this;
    }
    function Hc(a) {
        return 4800 * a / 146097;
    }
    function Ic(a) {
        return 146097 * a / 4800;
    }
    function Jc(a) {
        var b, c, d = this._milliseconds;
        if (a = B(a), "month" === a || "year" === a) return b = this._days + d / 864e5, 
        c = this._months + Hc(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(Ic(this._months)), a) {
          case "week":
            return b / 7 + d / 6048e5;

          case "day":
            return b + d / 864e5;

          case "hour":
            return 24 * b + d / 36e5;

          case "minute":
            return 1440 * b + d / 6e4;

          case "second":
            return 86400 * b + d / 1e3;

          case "millisecond":
            return Math.floor(864e5 * b) + d;

          default:
            throw new Error("Unknown unit " + a);
        }
    }
    function Kc() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12);
    }
    function Lc(a) {
        return function() {
            return this.as(a);
        };
    }
    function Mc(a) {
        return a = B(a), this[a + "s"]();
    }
    function Nc(a) {
        return function() {
            return this._data[a];
        };
    }
    function Oc() {
        return q(this.days() / 7);
    }
    function Pc(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d);
    }
    function Qc(a, b, c) {
        var d = Za(a).abs(), e = Ie(d.as("s")), f = Ie(d.as("m")), g = Ie(d.as("h")), h = Ie(d.as("d")), i = Ie(d.as("M")), j = Ie(d.as("y")), k = e < Je.s && [ "s", e ] || 1 >= f && [ "m" ] || f < Je.m && [ "mm", f ] || 1 >= g && [ "h" ] || g < Je.h && [ "hh", g ] || 1 >= h && [ "d" ] || h < Je.d && [ "dd", h ] || 1 >= i && [ "M" ] || i < Je.M && [ "MM", i ] || 1 >= j && [ "y" ] || [ "yy", j ];
        return k[2] = b, k[3] = +a > 0, k[4] = c, Pc.apply(null, k);
    }
    function Rc(a, b) {
        return void 0 === Je[a] ? !1 : void 0 === b ? Je[a] : (Je[a] = b, !0);
    }
    function Sc(a) {
        var b = this.localeData(), c = Qc(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c);
    }
    function Tc() {
        var a, b, c, d = Ke(this._milliseconds) / 1e3, e = Ke(this._days), f = Ke(this._months);
        a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;
        var g = c, h = f, i = e, j = b, k = a, l = d, m = this.asSeconds();
        return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
    }
    var Uc, Vc, Wc = a.momentProperties = [], Xc = !1, Yc = {}, Zc = {}, $c = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, _c = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ad = {}, bd = {}, cd = /\d/, dd = /\d\d/, ed = /\d{3}/, fd = /\d{4}/, gd = /[+-]?\d{6}/, hd = /\d\d?/, id = /\d\d\d\d?/, jd = /\d\d\d\d\d\d?/, kd = /\d{1,3}/, ld = /\d{1,4}/, md = /[+-]?\d{1,6}/, nd = /\d+/, od = /[+-]?\d+/, pd = /Z|[+-]\d\d:?\d\d/gi, qd = /Z|[+-]\d\d(?::?\d\d)?/gi, rd = /[+-]?\d+(\.\d{1,3})?/, sd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, td = {}, ud = {}, vd = 0, wd = 1, xd = 2, yd = 3, zd = 4, Ad = 5, Bd = 6, Cd = 7, Dd = 8;
    J("M", [ "MM", 2 ], "Mo", function() {
        return this.month() + 1;
    }), J("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a);
    }), J("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a);
    }), A("month", "M"), O("M", hd), O("MM", hd, dd), O("MMM", function(a, b) {
        return b.monthsShortRegex(a);
    }), O("MMMM", function(a, b) {
        return b.monthsRegex(a);
    }), S([ "M", "MM" ], function(a, b) {
        b[wd] = r(a) - 1;
    }), S([ "MMM", "MMMM" ], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[wd] = e : j(c).invalidMonth = a;
    });
    var Ed = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/, Fd = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Gd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Hd = sd, Id = sd, Jd = {};
    a.suppressDeprecationWarnings = !1;
    var Kd = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Ld = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Md = /Z|[+-]\d\d(?::?\d\d)?/, Nd = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], Od = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], Pd = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = fa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
    }), J("Y", 0, 0, function() {
        var a = this.year();
        return 9999 >= a ? "" + a : "+" + a;
    }), J(0, [ "YY", 2 ], 0, function() {
        return this.year() % 100;
    }), J(0, [ "YYYY", 4 ], 0, "year"), J(0, [ "YYYYY", 5 ], 0, "year"), J(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
    A("year", "y"), O("Y", od), O("YY", hd, dd), O("YYYY", ld, fd), O("YYYYY", md, gd), 
    O("YYYYYY", md, gd), S([ "YYYYY", "YYYYYY" ], vd), S("YYYY", function(b, c) {
        c[vd] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b);
    }), S("YY", function(b, c) {
        c[vd] = a.parseTwoDigitYear(b);
    }), S("Y", function(a, b) {
        b[vd] = parseInt(a, 10);
    }), a.parseTwoDigitYear = function(a) {
        return r(a) + (r(a) > 68 ? 1900 : 2e3);
    };
    var Qd = E("FullYear", !1);
    a.ISO_8601 = function() {};
    var Rd = fa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
        var a = Ea.apply(null, arguments);
        return this.isValid() && a.isValid() ? this > a ? this : a : l();
    }), Sd = fa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
        var a = Ea.apply(null, arguments);
        return this.isValid() && a.isValid() ? a > this ? this : a : l();
    }), Td = function() {
        return Date.now ? Date.now() : +new Date();
    };
    Ka("Z", ":"), Ka("ZZ", ""), O("Z", qd), O("ZZ", qd), S([ "Z", "ZZ" ], function(a, b, c) {
        c._useUTC = !0, c._tzm = La(qd, a);
    });
    var Ud = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var Vd = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Wd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Za.fn = Ia.prototype;
    var Xd = bb(1, "add"), Yd = bb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Zd = fa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a);
    });
    J(0, [ "gg", 2 ], 0, function() {
        return this.weekYear() % 100;
    }), J(0, [ "GG", 2 ], 0, function() {
        return this.isoWeekYear() % 100;
    }), Ib("gggg", "weekYear"), Ib("ggggg", "weekYear"), Ib("GGGG", "isoWeekYear"), 
    Ib("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), O("G", od), 
    O("g", od), O("GG", hd, dd), O("gg", hd, dd), O("GGGG", ld, fd), O("gggg", ld, fd), 
    O("GGGGG", md, gd), O("ggggg", md, gd), T([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(a, b, c, d) {
        b[d.substr(0, 2)] = r(a);
    }), T([ "gg", "GG" ], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b);
    }), J("Q", 0, "Qo", "quarter"), A("quarter", "Q"), O("Q", cd), S("Q", function(a, b) {
        b[wd] = 3 * (r(a) - 1);
    }), J("w", [ "ww", 2 ], "wo", "week"), J("W", [ "WW", 2 ], "Wo", "isoWeek"), A("week", "w"), 
    A("isoWeek", "W"), O("w", hd), O("ww", hd, dd), O("W", hd), O("WW", hd, dd), T([ "w", "ww", "W", "WW" ], function(a, b, c, d) {
        b[d.substr(0, 1)] = r(a);
    });
    var $d = {
        dow: 0,
        doy: 6
    };
    J("D", [ "DD", 2 ], "Do", "date"), A("date", "D"), O("D", hd), O("DD", hd, dd), 
    O("Do", function(a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient;
    }), S([ "D", "DD" ], xd), S("Do", function(a, b) {
        b[xd] = r(a.match(hd)[0], 10);
    });
    var _d = E("Date", !0);
    J("d", 0, "do", "day"), J("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a);
    }), J("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a);
    }), J("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a);
    }), J("e", 0, 0, "weekday"), J("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), 
    A("isoWeekday", "E"), O("d", hd), O("e", hd), O("E", hd), O("dd", sd), O("ddd", sd), 
    O("dddd", sd), T([ "dd", "ddd", "dddd" ], function(a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : j(c).invalidWeekday = a;
    }), T([ "d", "e", "E" ], function(a, b, c, d) {
        b[d] = r(a);
    });
    var ae = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), ce = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    J("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), O("DDD", kd), 
    O("DDDD", ed), S([ "DDD", "DDDD" ], function(a, b, c) {
        c._dayOfYear = r(a);
    }), J("H", [ "HH", 2 ], 0, "hour"), J("h", [ "hh", 2 ], 0, cc), J("hmm", 0, 0, function() {
        return "" + cc.apply(this) + I(this.minutes(), 2);
    }), J("hmmss", 0, 0, function() {
        return "" + cc.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2);
    }), J("Hmm", 0, 0, function() {
        return "" + this.hours() + I(this.minutes(), 2);
    }), J("Hmmss", 0, 0, function() {
        return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2);
    }), dc("a", !0), dc("A", !1), A("hour", "h"), O("a", ec), O("A", ec), O("H", hd), 
    O("h", hd), O("HH", hd, dd), O("hh", hd, dd), O("hmm", id), O("hmmss", jd), O("Hmm", id), 
    O("Hmmss", jd), S([ "H", "HH" ], yd), S([ "a", "A" ], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a;
    }), S([ "h", "hh" ], function(a, b, c) {
        b[yd] = r(a), j(c).bigHour = !0;
    }), S("hmm", function(a, b, c) {
        var d = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d)), j(c).bigHour = !0;
    }), S("hmmss", function(a, b, c) {
        var d = a.length - 4, e = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d, 2)), b[Ad] = r(a.substr(e)), j(c).bigHour = !0;
    }), S("Hmm", function(a, b, c) {
        var d = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d));
    }), S("Hmmss", function(a, b, c) {
        var d = a.length - 4, e = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d, 2)), b[Ad] = r(a.substr(e));
    });
    var de = /[ap]\.?m?\.?/i, ee = E("Hours", !0);
    J("m", [ "mm", 2 ], 0, "minute"), A("minute", "m"), O("m", hd), O("mm", hd, dd), 
    S([ "m", "mm" ], zd);
    var fe = E("Minutes", !1);
    J("s", [ "ss", 2 ], 0, "second"), A("second", "s"), O("s", hd), O("ss", hd, dd), 
    S([ "s", "ss" ], Ad);
    var ge = E("Seconds", !1);
    J("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    }), J(0, [ "SS", 2 ], 0, function() {
        return ~~(this.millisecond() / 10);
    }), J(0, [ "SSS", 3 ], 0, "millisecond"), J(0, [ "SSSS", 4 ], 0, function() {
        return 10 * this.millisecond();
    }), J(0, [ "SSSSS", 5 ], 0, function() {
        return 100 * this.millisecond();
    }), J(0, [ "SSSSSS", 6 ], 0, function() {
        return 1e3 * this.millisecond();
    }), J(0, [ "SSSSSSS", 7 ], 0, function() {
        return 1e4 * this.millisecond();
    }), J(0, [ "SSSSSSSS", 8 ], 0, function() {
        return 1e5 * this.millisecond();
    }), J(0, [ "SSSSSSSSS", 9 ], 0, function() {
        return 1e6 * this.millisecond();
    }), A("millisecond", "ms"), O("S", kd, cd), O("SS", kd, dd), O("SSS", kd, ed);
    var he;
    for (he = "SSSS"; he.length <= 9; he += "S") O(he, nd);
    for (he = "S"; he.length <= 9; he += "S") S(he, hc);
    var ie = E("Milliseconds", !1);
    J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
    var je = o.prototype;
    je.add = Xd, je.calendar = db, je.clone = eb, je.diff = lb, je.endOf = xb, je.format = pb, 
    je.from = qb, je.fromNow = rb, je.to = sb, je.toNow = tb, je.get = H, je.invalidAt = Gb, 
    je.isAfter = fb, je.isBefore = gb, je.isBetween = hb, je.isSame = ib, je.isSameOrAfter = jb, 
    je.isSameOrBefore = kb, je.isValid = Eb, je.lang = Zd, je.locale = ub, je.localeData = vb, 
    je.max = Sd, je.min = Rd, je.parsingFlags = Fb, je.set = H, je.startOf = wb, je.subtract = Yd, 
    je.toArray = Bb, je.toObject = Cb, je.toDate = Ab, je.toISOString = ob, je.toJSON = Db, 
    je.toString = nb, je.unix = zb, je.valueOf = yb, je.creationData = Hb, je.year = Qd, 
    je.isLeapYear = na, je.weekYear = Jb, je.isoWeekYear = Kb, je.quarter = je.quarters = Pb, 
    je.month = $, je.daysInMonth = _, je.week = je.weeks = Tb, je.isoWeek = je.isoWeeks = Ub, 
    je.weeksInYear = Mb, je.isoWeeksInYear = Lb, je.date = _d, je.day = je.days = $b, 
    je.weekday = _b, je.isoWeekday = ac, je.dayOfYear = bc, je.hour = je.hours = ee, 
    je.minute = je.minutes = fe, je.second = je.seconds = ge, je.millisecond = je.milliseconds = ie, 
    je.utcOffset = Oa, je.utc = Qa, je.local = Ra, je.parseZone = Sa, je.hasAlignedHourOffset = Ta, 
    je.isDST = Ua, je.isDSTShifted = Va, je.isLocal = Wa, je.isUtcOffset = Xa, je.isUtc = Ya, 
    je.isUTC = Ya, je.zoneAbbr = ic, je.zoneName = jc, je.dates = fa("dates accessor is deprecated. Use date instead.", _d), 
    je.months = fa("months accessor is deprecated. Use month instead", $), je.years = fa("years accessor is deprecated. Use year instead", Qd), 
    je.zone = fa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Pa);
    var ke = je, le = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, me = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, ne = "Invalid date", oe = "%d", pe = /\d{1,2}/, qe = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, re = t.prototype;
    re._calendar = le, re.calendar = mc, re._longDateFormat = me, re.longDateFormat = nc, 
    re._invalidDate = ne, re.invalidDate = oc, re._ordinal = oe, re.ordinal = pc, re._ordinalParse = pe, 
    re.preparse = qc, re.postformat = qc, re._relativeTime = qe, re.relativeTime = rc, 
    re.pastFuture = sc, re.set = tc, re.months = W, re._months = Fd, re.monthsShort = X, 
    re._monthsShort = Gd, re.monthsParse = Y, re._monthsRegex = Id, re.monthsRegex = ba, 
    re._monthsShortRegex = Hd, re.monthsShortRegex = aa, re.week = Qb, re._week = $d, 
    re.firstDayOfYear = Sb, re.firstDayOfWeek = Rb, re.weekdays = Wb, re._weekdays = ae, 
    re.weekdaysMin = Yb, re._weekdaysMin = ce, re.weekdaysShort = Xb, re._weekdaysShort = be, 
    re.weekdaysParse = Zb, re.isPM = fc, re._meridiemParse = de, re.meridiem = gc, x("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10, c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c;
        }
    }), a.lang = fa("moment.lang is deprecated. Use moment.locale instead.", x), a.langData = fa("moment.langData is deprecated. Use moment.localeData instead.", z);
    var se = Math.abs, te = Lc("ms"), ue = Lc("s"), ve = Lc("m"), we = Lc("h"), xe = Lc("d"), ye = Lc("w"), ze = Lc("M"), Ae = Lc("y"), Be = Nc("milliseconds"), Ce = Nc("seconds"), De = Nc("minutes"), Ee = Nc("hours"), Fe = Nc("days"), Ge = Nc("months"), He = Nc("years"), Ie = Math.round, Je = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, Ke = Math.abs, Le = Ia.prototype;
    Le.abs = Bc, Le.add = Dc, Le.subtract = Ec, Le.as = Jc, Le.asMilliseconds = te, 
    Le.asSeconds = ue, Le.asMinutes = ve, Le.asHours = we, Le.asDays = xe, Le.asWeeks = ye, 
    Le.asMonths = ze, Le.asYears = Ae, Le.valueOf = Kc, Le._bubble = Gc, Le.get = Mc, 
    Le.milliseconds = Be, Le.seconds = Ce, Le.minutes = De, Le.hours = Ee, Le.days = Fe, 
    Le.weeks = Oc, Le.months = Ge, Le.years = He, Le.humanize = Sc, Le.toISOString = Tc, 
    Le.toString = Tc, Le.toJSON = Tc, Le.locale = ub, Le.localeData = vb, Le.toIsoString = fa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Tc), 
    Le.lang = Zd, J("X", 0, 0, "unix"), J("x", 0, 0, "valueOf"), O("x", od), O("X", rd), 
    S("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10));
    }), S("x", function(a, b, c) {
        c._d = new Date(r(a));
    }), a.version = "2.11.1", b(Ea), a.fn = ke, a.min = Ga, a.max = Ha, a.now = Td, 
    a.utc = h, a.unix = kc, a.months = wc, a.isDate = d, a.locale = x, a.invalid = l, 
    a.duration = Za, a.isMoment = p, a.weekdays = yc, a.parseZone = lc, a.localeData = z, 
    a.isDuration = Ja, a.monthsShort = xc, a.weekdaysMin = Ac, a.defineLocale = y, a.weekdaysShort = zc, 
    a.normalizeUnits = B, a.relativeTimeThreshold = Rc, a.prototype = ke;
    var Me = a;
    return Me;
}), function(a, b) {
    "use strict";
    var c;
    if ("object" == typeof exports) {
        try {
            c = require("moment");
        } catch (d) {}
        module.exports = b(c);
    } else "function" == typeof define && define.amd ? define(function(a) {
        var d = "moment";
        try {
            c = a(d);
        } catch (e) {}
        return b(c);
    }) : a.Pikaday = b(a.moment);
}(this, function(a) {
    "use strict";
    var b = "function" == typeof a, c = !!window.addEventListener, d = window.document, e = window.setTimeout, f = function(a, b, d, e) {
        c ? a.addEventListener(b, d, !!e) : a.attachEvent("on" + b, d);
    }, g = function(a, b, d, e) {
        c ? a.removeEventListener(b, d, !!e) : a.detachEvent("on" + b, d);
    }, h = function(a, b, c) {
        var e;
        d.createEvent ? (e = d.createEvent("HTMLEvents"), e.initEvent(b, !0, !1), e = t(e, c), 
        a.dispatchEvent(e)) : d.createEventObject && (e = d.createEventObject(), e = t(e, c), 
        a.fireEvent("on" + b, e));
    }, i = function(a) {
        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "");
    }, j = function(a, b) {
        return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }, k = function(a, b) {
        j(a, b) || (a.className = "" === a.className ? b : a.className + " " + b);
    }, l = function(a, b) {
        a.className = i((" " + a.className + " ").replace(" " + b + " ", " "));
    }, m = function(a) {
        return /Array/.test(Object.prototype.toString.call(a));
    }, n = function(a) {
        return /Date/.test(Object.prototype.toString.call(a)) && !isNaN(a.getTime());
    }, o = function(a) {
        var b = a.getDay();
        return 0 === b || 6 === b;
    }, p = function(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
    }, q = function(a, b) {
        return [ 31, p(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][b];
    }, r = function(a) {
        n(a) && a.setHours(0, 0, 0, 0);
    }, s = function(a, b) {
        return a.getTime() === b.getTime();
    }, t = function(a, b, c) {
        var d, e;
        for (d in b) e = void 0 !== a[d], e && "object" == typeof b[d] && null !== b[d] && void 0 === b[d].nodeName ? n(b[d]) ? c && (a[d] = new Date(b[d].getTime())) : m(b[d]) ? c && (a[d] = b[d].slice(0)) : a[d] = t({}, b[d], c) : (c || !e) && (a[d] = b[d]);
        return a;
    }, u = function(a) {
        return a.month < 0 && (a.year -= Math.ceil(Math.abs(a.month) / 12), a.month += 12), 
        a.month > 11 && (a.year += Math.floor(Math.abs(a.month) / 12), a.month -= 12), a;
    }, v = {
        field: null,
        bound: void 0,
        position: "bottom left",
        reposition: !0,
        format: "YYYY-MM-DD",
        defaultDate: null,
        setDefaultDate: !1,
        firstDay: 0,
        minDate: null,
        maxDate: null,
        yearRange: 10,
        showWeekNumber: !1,
        minYear: 0,
        maxYear: 9999,
        minMonth: void 0,
        maxMonth: void 0,
        startRange: null,
        endRange: null,
        isRTL: !1,
        yearSuffix: "",
        showMonthAfterYear: !1,
        numberOfMonths: 1,
        mainCalendar: "left",
        container: void 0,
        i18n: {
            previousMonth: "Previous Month",
            nextMonth: "Next Month",
            months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            weekdays: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            weekdaysShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
        },
        theme: null,
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    }, w = function(a, b, c) {
        for (b += a.firstDay; b >= 7; ) b -= 7;
        return c ? a.i18n.weekdaysShort[b] : a.i18n.weekdays[b];
    }, x = function(a) {
        if (a.isEmpty) return '<td class="is-empty"></td>';
        var b = [];
        return a.isDisabled && b.push("is-disabled"), a.isToday && b.push("is-today"), a.isSelected && b.push("is-selected"), 
        a.isInRange && b.push("is-inrange"), a.isStartRange && b.push("is-startrange"), 
        a.isEndRange && b.push("is-endrange"), '<td data-day="' + a.day + '" class="' + b.join(" ") + '"><button class="pika-button pika-day" type="button" data-pika-year="' + a.year + '" data-pika-month="' + a.month + '" data-pika-day="' + a.day + '">' + a.day + "</button></td>";
    }, y = function(a, b, c) {
        var d = new Date(c, 0, 1), e = Math.ceil(((new Date(c, b, a) - d) / 864e5 + d.getDay() + 1) / 7);
        return '<td class="pika-week">' + e + "</td>";
    }, z = function(a, b) {
        return "<tr>" + (b ? a.reverse() : a).join("") + "</tr>";
    }, A = function(a) {
        return "<tbody>" + a.join("") + "</tbody>";
    }, B = function(a) {
        var b, c = [];
        for (a.showWeekNumber && c.push("<th></th>"), b = 0; 7 > b; b++) c.push('<th scope="col"><abbr title="' + w(a, b) + '">' + w(a, b, !0) + "</abbr></th>");
        return "<thead>" + (a.isRTL ? c.reverse() : c).join("") + "</thead>";
    }, C = function(a, b, c, d, e) {
        var f, g, h, i, j, k = a._o, l = c === k.minYear, n = c === k.maxYear, o = '<div class="pika-title">', p = !0, q = !0;
        for (h = [], f = 0; 12 > f; f++) h.push('<option value="' + (c === e ? f - b : 12 + f - b) + '"' + (f === d ? " selected" : "") + (l && f < k.minMonth || n && f > k.maxMonth ? "disabled" : "") + ">" + k.i18n.months[f] + "</option>");
        for (i = '<div class="pika-label">' + k.i18n.months[d] + '<select class="pika-select pika-select-month" tabindex="-1">' + h.join("") + "</select></div>", 
        m(k.yearRange) ? (f = k.yearRange[0], g = k.yearRange[1] + 1) : (f = c - k.yearRange, 
        g = 1 + c + k.yearRange), h = []; g > f && f <= k.maxYear; f++) f >= k.minYear && h.push('<option value="' + f + '"' + (f === c ? " selected" : "") + ">" + f + "</option>");
        return j = '<div class="pika-label">' + c + k.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + h.join("") + "</select></div>", 
        o += k.showMonthAfterYear ? j + i : i + j, l && (0 === d || k.minMonth >= d) && (p = !1), 
        n && (11 === d || k.maxMonth <= d) && (q = !1), 0 === b && (o += '<button class="pika-prev' + (p ? "" : " is-disabled") + '" type="button">' + k.i18n.previousMonth + "</button>"), 
        b === a._o.numberOfMonths - 1 && (o += '<button class="pika-next' + (q ? "" : " is-disabled") + '" type="button">' + k.i18n.nextMonth + "</button>"), 
        o += "</div>";
    }, D = function(a, b) {
        return '<table cellpadding="0" cellspacing="0" class="pika-table">' + B(a) + A(b) + "</table>";
    }, E = function(g) {
        var h = this, i = h.config(g);
        h._onMouseDown = function(a) {
            if (h._v) {
                a = a || window.event;
                var b = a.target || a.srcElement;
                if (b) if (j(b, "is-disabled") || (j(b, "pika-button") && !j(b, "is-empty") ? (h.setDate(new Date(b.getAttribute("data-pika-year"), b.getAttribute("data-pika-month"), b.getAttribute("data-pika-day"))), 
                i.bound && e(function() {
                    h.hide(), i.field && i.field.blur();
                }, 100)) : j(b, "pika-prev") ? h.prevMonth() : j(b, "pika-next") && h.nextMonth()), 
                j(b, "pika-select")) h._c = !0; else {
                    if (!a.preventDefault) return a.returnValue = !1, !1;
                    a.preventDefault();
                }
            }
        }, h._onChange = function(a) {
            a = a || window.event;
            var b = a.target || a.srcElement;
            b && (j(b, "pika-select-month") ? h.gotoMonth(b.value) : j(b, "pika-select-year") && h.gotoYear(b.value));
        }, h._onInputChange = function(c) {
            var d;
            c.firedBy !== h && (b ? (d = a(i.field.value, i.format), d = d && d.isValid() ? d.toDate() : null) : d = new Date(Date.parse(i.field.value)), 
            n(d) && h.setDate(d), h._v || h.show());
        }, h._onInputFocus = function() {
            h.show();
        }, h._onInputClick = function() {
            h.show();
        }, h._onInputBlur = function() {
            var a = d.activeElement;
            do if (j(a, "pika-single")) return; while (a = a.parentNode);
            h._c || (h._b = e(function() {
                h.hide();
            }, 50)), h._c = !1;
        }, h._onClick = function(a) {
            a = a || window.event;
            var b = a.target || a.srcElement, d = b;
            if (b) {
                !c && j(b, "pika-select") && (b.onchange || (b.setAttribute("onchange", "return;"), 
                f(b, "change", h._onChange)));
                do if (j(d, "pika-single") || d === i.trigger) return; while (d = d.parentNode);
                h._v && b !== i.trigger && d !== i.trigger && h.hide();
            }
        }, h.el = d.createElement("div"), h.el.className = "pika-single" + (i.isRTL ? " is-rtl" : "") + (i.theme ? " " + i.theme : ""), 
        f(h.el, "mousedown", h._onMouseDown, !0), f(h.el, "touchend", h._onMouseDown, !0), 
        f(h.el, "change", h._onChange), i.field && (i.container ? i.container.appendChild(h.el) : i.bound ? d.body.appendChild(h.el) : i.field.parentNode.insertBefore(h.el, i.field.nextSibling), 
        f(i.field, "change", h._onInputChange), i.defaultDate || (b && i.field.value ? i.defaultDate = a(i.field.value, i.format).toDate() : i.defaultDate = new Date(Date.parse(i.field.value)), 
        i.setDefaultDate = !0));
        var k = i.defaultDate;
        n(k) ? i.setDefaultDate ? h.setDate(k, !0) : h.gotoDate(k) : h.gotoDate(new Date()), 
        i.bound ? (this.hide(), h.el.className += " is-bound", f(i.trigger, "click", h._onInputClick), 
        f(i.trigger, "focus", h._onInputFocus), f(i.trigger, "blur", h._onInputBlur)) : this.show();
    };
    return E.prototype = {
        config: function(a) {
            this._o || (this._o = t({}, v, !0));
            var b = t(this._o, a, !0);
            b.isRTL = !!b.isRTL, b.field = b.field && b.field.nodeName ? b.field : null, b.theme = "string" == typeof b.theme && b.theme ? b.theme : null, 
            b.bound = !!(void 0 !== b.bound ? b.field && b.bound : b.field), b.trigger = b.trigger && b.trigger.nodeName ? b.trigger : b.field, 
            b.disableWeekends = !!b.disableWeekends, b.disableDayFn = "function" == typeof b.disableDayFn ? b.disableDayFn : null;
            var c = parseInt(b.numberOfMonths, 10) || 1;
            if (b.numberOfMonths = c > 4 ? 4 : c, n(b.minDate) || (b.minDate = !1), n(b.maxDate) || (b.maxDate = !1), 
            b.minDate && b.maxDate && b.maxDate < b.minDate && (b.maxDate = b.minDate = !1), 
            b.minDate && this.setMinDate(b.minDate), b.maxDate && this.setMaxDate(b.maxDate), 
            m(b.yearRange)) {
                var d = new Date().getFullYear() - 10;
                b.yearRange[0] = parseInt(b.yearRange[0], 10) || d, b.yearRange[1] = parseInt(b.yearRange[1], 10) || d;
            } else b.yearRange = Math.abs(parseInt(b.yearRange, 10)) || v.yearRange, b.yearRange > 100 && (b.yearRange = 100);
            return b;
        },
        toString: function(c) {
            return n(this._d) ? b ? a(this._d).format(c || this._o.format) : this._d.toDateString() : "";
        },
        getMoment: function() {
            return b ? a(this._d) : null;
        },
        setMoment: function(c, d) {
            b && a.isMoment(c) && this.setDate(c.toDate(), d);
        },
        getDate: function() {
            return n(this._d) ? new Date(this._d.getTime()) : null;
        },
        setDate: function(a, b) {
            if (!a) return this._d = null, this._o.field && (this._o.field.value = "", h(this._o.field, "change", {
                firedBy: this
            })), this.draw();
            if ("string" == typeof a && (a = new Date(Date.parse(a))), n(a)) {
                var c = this._o.minDate, d = this._o.maxDate;
                n(c) && c > a ? a = c : n(d) && a > d && (a = d), this._d = new Date(a.getTime()), 
                r(this._d), this.gotoDate(this._d), this._o.field && (this._o.field.value = this.toString(), 
                h(this._o.field, "change", {
                    firedBy: this
                })), b || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate());
            }
        },
        gotoDate: function(a) {
            var b = !0;
            if (n(a)) {
                if (this.calendars) {
                    var c = new Date(this.calendars[0].year, this.calendars[0].month, 1), d = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1), e = a.getTime();
                    d.setMonth(d.getMonth() + 1), d.setDate(d.getDate() - 1), b = e < c.getTime() || d.getTime() < e;
                }
                b && (this.calendars = [ {
                    month: a.getMonth(),
                    year: a.getFullYear()
                } ], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)), 
                this.adjustCalendars();
            }
        },
        adjustCalendars: function() {
            this.calendars[0] = u(this.calendars[0]);
            for (var a = 1; a < this._o.numberOfMonths; a++) this.calendars[a] = u({
                month: this.calendars[0].month + a,
                year: this.calendars[0].year
            });
            this.draw();
        },
        gotoToday: function() {
            this.gotoDate(new Date());
        },
        gotoMonth: function(a) {
            isNaN(a) || (this.calendars[0].month = parseInt(a, 10), this.adjustCalendars());
        },
        nextMonth: function() {
            this.calendars[0].month++, this.adjustCalendars();
        },
        prevMonth: function() {
            this.calendars[0].month--, this.adjustCalendars();
        },
        gotoYear: function(a) {
            isNaN(a) || (this.calendars[0].year = parseInt(a, 10), this.adjustCalendars());
        },
        setMinDate: function(a) {
            r(a), this._o.minDate = a, this._o.minYear = a.getFullYear(), this._o.minMonth = a.getMonth(), 
            this.draw();
        },
        setMaxDate: function(a) {
            r(a), this._o.maxDate = a, this._o.maxYear = a.getFullYear(), this._o.maxMonth = a.getMonth(), 
            this.draw();
        },
        setStartRange: function(a) {
            this._o.startRange = a;
        },
        setEndRange: function(a) {
            this._o.endRange = a;
        },
        draw: function(a) {
            if (this._v || a) {
                var b = this._o, c = b.minYear, d = b.maxYear, f = b.minMonth, g = b.maxMonth, h = "";
                this._y <= c && (this._y = c, !isNaN(f) && this._m < f && (this._m = f)), this._y >= d && (this._y = d, 
                !isNaN(g) && this._m > g && (this._m = g));
                for (var i = 0; i < b.numberOfMonths; i++) h += '<div class="pika-lendar">' + C(this, i, this.calendars[i].year, this.calendars[i].month, this.calendars[0].year) + this.render(this.calendars[i].year, this.calendars[i].month) + "</div>";
                if (this.el.innerHTML = h, b.bound && "hidden" !== b.field.type && e(function() {
                    b.trigger.focus();
                }, 1), "function" == typeof this._o.onDraw) {
                    var j = this;
                    e(function() {
                        j._o.onDraw.call(j);
                    }, 0);
                }
            }
        },
        adjustPosition: function() {
            var a, b, c, e, f, g, h, i, j, k;
            if (!this._o.container) {
                if (this.el.style.position = "absolute", a = this._o.trigger, b = a, c = this.el.offsetWidth, 
                e = this.el.offsetHeight, f = window.innerWidth || d.documentElement.clientWidth, 
                g = window.innerHeight || d.documentElement.clientHeight, h = window.pageYOffset || d.body.scrollTop || d.documentElement.scrollTop, 
                "function" == typeof a.getBoundingClientRect) k = a.getBoundingClientRect(), i = k.left + window.pageXOffset, 
                j = k.bottom + window.pageYOffset; else for (i = b.offsetLeft, j = b.offsetTop + b.offsetHeight; b = b.offsetParent; ) i += b.offsetLeft, 
                j += b.offsetTop;
                (this._o.reposition && i + c > f || this._o.position.indexOf("right") > -1 && i - c + a.offsetWidth > 0) && (i = i - c + a.offsetWidth), 
                (this._o.reposition && j + e > g + h || this._o.position.indexOf("top") > -1 && j - e - a.offsetHeight > 0) && (j = j - e - a.offsetHeight), 
                this.el.style.left = i + "px", this.el.style.top = j + "px";
            }
        },
        render: function(a, b) {
            var c = this._o, d = new Date(), e = q(a, b), f = new Date(a, b, 1).getDay(), g = [], h = [];
            r(d), c.firstDay > 0 && (f -= c.firstDay, 0 > f && (f += 7));
            for (var i = e + f, j = i; j > 7; ) j -= 7;
            i += 7 - j;
            for (var k = 0, l = 0; i > k; k++) {
                var m = new Date(a, b, 1 + (k - f)), p = n(this._d) ? s(m, this._d) : !1, t = s(m, d), u = f > k || k >= e + f, v = c.startRange && s(c.startRange, m), w = c.endRange && s(c.endRange, m), A = c.startRange && c.endRange && c.startRange < m && m < c.endRange, B = c.minDate && m < c.minDate || c.maxDate && m > c.maxDate || c.disableWeekends && o(m) || c.disableDayFn && c.disableDayFn(m), C = {
                    day: 1 + (k - f),
                    month: b,
                    year: a,
                    isSelected: p,
                    isToday: t,
                    isDisabled: B,
                    isEmpty: u,
                    isStartRange: v,
                    isEndRange: w,
                    isInRange: A
                };
                h.push(x(C)), 7 === ++l && (c.showWeekNumber && h.unshift(y(k - f, b, a)), g.push(z(h, c.isRTL)), 
                h = [], l = 0);
            }
            return D(c, g);
        },
        isVisible: function() {
            return this._v;
        },
        show: function() {
            this._v || (l(this.el, "is-hidden"), this._v = !0, this.draw(), this._o.bound && (f(d, "click", this._onClick), 
            this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this));
        },
        hide: function() {
            var a = this._v;
            a !== !1 && (this._o.bound && g(d, "click", this._onClick), this.el.style.position = "static", 
            this.el.style.left = "auto", this.el.style.top = "auto", k(this.el, "is-hidden"), 
            this._v = !1, void 0 !== a && "function" == typeof this._o.onClose && this._o.onClose.call(this));
        },
        destroy: function() {
            this.hide(), g(this.el, "mousedown", this._onMouseDown, !0), g(this.el, "touchend", this._onMouseDown, !0), 
            g(this.el, "change", this._onChange), this._o.field && (g(this._o.field, "change", this._onInputChange), 
            this._o.bound && (g(this._o.trigger, "click", this._onInputClick), g(this._o.trigger, "focus", this._onInputFocus), 
            g(this._o.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el);
        }
    }, E;
}), !function() {
    if (!window.CustomEvent && document.createEventObject) return void (window.CustomEvent = function(a, b) {
        if (!arguments.length) throw new Error("Not enough arguments");
        var c = {
            type: a,
            bubbles: !1,
            cancelable: !1,
            detail: null
        }, d = document.createEventObject();
        for (var e in c) d[e] = c[e];
        for (var e in b) d[e] = b[e];
        return d;
    });
    try {
        new CustomEvent("test");
    } catch (a) {
        var b = function(a, b) {
            if (!arguments.length) throw new Error("Not enough arguments");
            var c = {
                bubbles: !1,
                cancelable: !1,
                detail: null
            };
            for (var d in b) c[d] = b[d];
            var e = document.createEvent("CustomEvent");
            return e.initCustomEvent(a, c.bubbles, c.cancelable, c.detail), e;
        };
        b.prototype = (window.CustomEvent || window.Event).prototype, window.CustomEvent = b;
    }
}(), function() {
    if (!document.addEventListener && window.Element && window.Event) {
        var a = "__events", b = "__immediateStopped";
        Event.prototype.NONE = Event.NONE = 0, Event.prototype.CAPTURING_PHASE = Event.CAPTURING_PHASE = 1, 
        Event.prototype.AT_TARGET = Event.AT_TARGET = 2, Event.prototype.BUBBLING_PHASE = Event.BUBBLING_PHASE = 3, 
        Event.prototype.preventDefault = function() {
            this.cancelable !== !1 && (this.returnValue = !1);
        }, Event.prototype.stopPropagation = function() {
            this.cancelBubble = !0;
        }, Event.prototype.stopImmediatePropagation = function() {
            this[b] = this.cancelBubble = !0;
        };
        for (var c = function(a, b) {
            return a.timeStamp = +new Date(), a.target || (a.target = a.srcElement || b), a.pageX = a.clientX + document.documentElement.scrollLeft, 
            a.pageY = a.clientY + document.documentElement.scrollTop, a.relatedTarget = "mouseover" == a.type ? a.fromElement : "mouseout" == a.type ? a.toElement : null, 
            a;
        }, d = function(a, b, c) {
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                if (e.useCapture == c && e.listener == b) return d;
            }
            return -1;
        }, e = function(a, b, c) {
            a.currentTarget = c, "function" == typeof b ? b.call(c, a) : b.handleEvent(a);
        }, f = function(a) {
            for (var b = []; a.parentNode; ) b.unshift(a.parentNode), a = a.parentNode;
            return b;
        }, g = function(c, d, f) {
            c.eventPhase = f;
            for (var g = 0; g < d.length; g++) {
                for (var h = d[g], i = [], j = (h[a] || {})[c.type] || [], k = 0; k < j.length; k++) {
                    var l = j[k];
                    l.useCapture && f == Event.BUBBLING_PHASE || (l.useCapture || f != Event.CAPTURING_PHASE) && i.push(l.listener);
                }
                for (k = 0; k < i.length; ) try {
                    for (;k < i.length; ) {
                        var m = i[k++];
                        if (e(c, m, h), c[b]) return !0;
                    }
                } catch (n) {
                    setTimeout(function() {
                        throw n;
                    }, 0);
                }
                if (c.cancelBubble) return !0;
            }
            return !1;
        }, h = function(a) {
            c(a, this);
            var b = f(a.target);
            return b.length && g(a, b, Event.CAPTURING_PHASE) ? a.returnValue : g(a, [ a.target ], Event.AT_TARGET) ? a.returnValue : b.length && a.bubbles !== !1 && (b.reverse(), 
            g(a, b, Event.BUBBLING_PHASE)) ? a.returnValue : (a.stopPropagation(), a.returnValue);
        }, i = ({
            addEventListener: function(b, c, e) {
                var f = this, g = (this[a] || {})[b] || [], i = g.length;
                if (!(d(g, c, e) > -1)) {
                    if (a in this) var j = this[a]; else {
                        var j = {
                            _handler: function() {
                                h.apply(f, arguments);
                            }
                        };
                        this[a] = j;
                    }
                    b in j || (j[b] = []), j[b].push({
                        listener: c,
                        useCapture: e
                    }), i || this.attachEvent("on" + b, j._handler);
                }
            },
            removeEventListener: function(b, c, e) {
                var f = (this[a] || {})[b] || [], g = d(f, c, e);
                -1 != g && (f.splice(g, 1), f.length || this.detachEvent("on" + b, this[a]._handler));
            },
            dispatchEvent: function(a) {
                return a.returnValue = !0, h.call(this, a);
            }
        }), j = [ Element, window.constructor, document.constructor ]; j.length; ) {
            var k = j.pop();
            for (var l in i) k.prototype[l] = i[l];
        }
    }
}(), Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
    var c, d;
    if (null == this) throw new TypeError(" this is null or not defined");
    var e = Object(this), f = e.length >>> 0;
    if ("function" != typeof a) throw new TypeError(a + " is not a function");
    for (arguments.length > 1 && (c = b), d = 0; f > d; ) {
        var g;
        d in e && (g = e[d], a.call(c, g, d, e)), d++;
    }
}), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
    var c;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var d = Object(this), e = d.length >>> 0;
    if (0 === e) return -1;
    var f = +b || 0;
    if (Math.abs(f) === 1 / 0 && (f = 0), f >= e) return -1;
    for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c; ) {
        if (c in d && d[c] === a) return c;
        c++;
    }
    return -1;
}), function(a) {
    var b;
    if ("object" == typeof exports) {
        try {
            b = require("jquery");
        } catch (c) {}
        module.exports = a(window, document, b);
    } else window.Dropkick = a(window, document, window.jQuery);
}(function(a, b, c, d) {
    var e, f = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), g = a.parent !== a.self && location.host === parent.location.host, h = -1 !== navigator.appVersion.indexOf("MSIE"), i = function(c, d) {
        var e, f;
        if (this === a) return new i(c, d);
        for ("string" == typeof c && "#" === c[0] && (c = b.getElementById(c.substr(1))), 
        e = 0; e < i.uid; e++) if (f = i.cache[e], f instanceof i && f.data.select === c) return l.extend(f.data.settings, d), 
        f;
        return c ? "SELECT" === c.nodeName ? this.init(c, d) : void 0 : (console.error("You must pass a select to DropKick"), 
        !1);
    }, j = function() {}, k = {
        initialize: j,
        change: j,
        open: j,
        close: j,
        search: "strict",
        bubble: !0
    }, l = {
        hasClass: function(a, b) {
            var c = new RegExp("(^|\\s+)" + b + "(\\s+|$)");
            return a && c.test(a.className);
        },
        addClass: function(a, b) {
            a && !l.hasClass(a, b) && (a.className += " " + b);
        },
        removeClass: function(a, b) {
            var c = new RegExp("(^|\\s+)" + b + "(\\s+|$)");
            a && (a.className = a.className.replace(c, " "));
        },
        toggleClass: function(a, b) {
            var c = l.hasClass(a, b) ? "remove" : "add";
            l[c + "Class"](a, b);
        },
        extend: function(a) {
            return Array.prototype.slice.call(arguments, 1).forEach(function(b) {
                if (b) for (var c in b) a[c] = b[c];
            }), a;
        },
        offset: function(c) {
            var d = c.getBoundingClientRect() || {
                top: 0,
                left: 0
            }, e = b.documentElement, f = h ? e.scrollTop : a.pageYOffset, g = h ? e.scrollLeft : a.pageXOffset;
            return {
                top: d.top + f - e.clientTop,
                left: d.left + g - e.clientLeft
            };
        },
        position: function(a, b) {
            for (var c = {
                top: 0,
                left: 0
            }; a && a !== b; ) c.top += a.offsetTop, c.left += a.offsetLeft, a = a.parentNode;
            return c;
        },
        closest: function(a, b) {
            for (;a; ) {
                if (a === b) return a;
                a = a.parentNode;
            }
            return !1;
        },
        create: function(a, c) {
            var d, e = b.createElement(a);
            c || (c = {});
            for (d in c) c.hasOwnProperty(d) && ("innerHTML" === d ? e.innerHTML = c[d] : e.setAttribute(d, c[d]));
            return e;
        },
        deferred: function(b) {
            return function() {
                var c = arguments, d = this;
                a.setTimeout(function() {
                    b.apply(d, c);
                }, 1);
            };
        }
    };
    return i.cache = {}, i.uid = 0, i.prototype = {
        add: function(a, c) {
            var d, e, f;
            "string" == typeof a && (d = a, a = b.createElement("option"), a.text = d), "OPTION" === a.nodeName && (e = l.create("li", {
                "class": "dk-option",
                "data-value": a.value,
                innerHTML: a.text,
                role: "option",
                "aria-selected": "false",
                id: "dk" + this.data.cacheID + "-" + (a.id || a.value.replace(" ", "-"))
            }), l.addClass(e, a.className), this.length += 1, a.disabled && (l.addClass(e, "dk-option-disabled"), 
            e.setAttribute("aria-disabled", "true")), this.data.select.add(a, c), "number" == typeof c && (c = this.item(c)), 
            this.options.indexOf(c) > -1 ? c.parentNode.insertBefore(e, c) : this.data.elem.lastChild.appendChild(e), 
            e.addEventListener("mouseover", this), f = this.options.indexOf(c), this.options.splice(f, 0, e), 
            a.selected && this.select(f));
        },
        item: function(a) {
            return a = 0 > a ? this.options.length + a : a, this.options[a] || null;
        },
        remove: function(a) {
            var b = this.item(a);
            b.parentNode.removeChild(b), this.options.splice(a, 1), this.data.select.remove(a), 
            this.select(this.data.select.selectedIndex), this.length -= 1;
        },
        init: function(a, c) {
            var d, h = i.build(a, "dk" + i.uid);
            if (this.data = {}, this.data.select = a, this.data.elem = h.elem, this.data.settings = l.extend({}, k, c), 
            this.disabled = a.disabled, this.form = a.form, this.length = a.length, this.multiple = a.multiple, 
            this.options = h.options.slice(0), this.selectedIndex = a.selectedIndex, this.selectedOptions = h.selected.slice(0), 
            this.value = a.value, this.data.cacheID = i.uid, i.cache[this.data.cacheID] = this, 
            this.data.settings.initialize.call(this), i.uid += 1, this._changeListener || (a.addEventListener("change", this), 
            this._changeListener = !0), !f || this.data.settings.mobile) {
                if (a.parentNode.insertBefore(this.data.elem, a), a.setAttribute("data-dkCacheId", this.data.cacheID), 
                this.data.elem.addEventListener("click", this), this.data.elem.addEventListener("keydown", this), 
                this.data.elem.addEventListener("keypress", this), this.form && this.form.addEventListener("reset", this), 
                !this.multiple) for (d = 0; d < this.options.length; d++) this.options[d].addEventListener("mouseover", this);
                e || (b.addEventListener("click", i.onDocClick), g && parent.document.addEventListener("click", i.onDocClick), 
                e = !0);
            }
            return this;
        },
        close: function() {
            var a, b = this.data.elem;
            if (!this.isOpen || this.multiple) return !1;
            for (a = 0; a < this.options.length; a++) l.removeClass(this.options[a], "dk-option-highlight");
            b.lastChild.setAttribute("aria-expanded", "false"), l.removeClass(b.lastChild, "dk-select-options-highlight"), 
            l.removeClass(b, "dk-select-open-(up|down)"), this.isOpen = !1, this.data.settings.close.call(this);
        },
        open: l.deferred(function() {
            var c, d, e, f, g, i, j = this.data.elem, k = j.lastChild;
            return g = h ? l.offset(j).top - b.documentElement.scrollTop : l.offset(j).top - a.scrollY, 
            i = a.innerHeight - (g + j.offsetHeight), this.isOpen || this.multiple ? !1 : (k.style.display = "block", 
            c = k.offsetHeight, k.style.display = "", d = g > c, e = i > c, f = d && !e ? "-up" : "-down", 
            this.isOpen = !0, l.addClass(j, "dk-select-open" + f), k.setAttribute("aria-expanded", "true"), 
            this._scrollTo(this.options.length - 1), this._scrollTo(this.selectedIndex), void this.data.settings.open.call(this));
        }),
        disable: function(a, b) {
            var c = "dk-option-disabled";
            (0 === arguments.length || "boolean" == typeof a) && (b = a === d ? !0 : !1, a = this.data.elem, 
            c = "dk-select-disabled", this.disabled = b), b === d && (b = !0), "number" == typeof a && (a = this.item(a)), 
            l[b ? "addClass" : "removeClass"](a, c);
        },
        select: function(a, b) {
            var c, d, e, f, g = this.data.select;
            if ("number" == typeof a && (a = this.item(a)), "string" == typeof a) for (c = 0; c < this.length; c++) this.options[c].getAttribute("data-value") === a && (a = this.options[c]);
            return !a || "string" == typeof a || !b && l.hasClass(a, "dk-option-disabled") ? !1 : l.hasClass(a, "dk-option") ? (d = this.options.indexOf(a), 
            e = g.options[d], this.multiple ? (l.toggleClass(a, "dk-option-selected"), e.selected = !e.selected, 
            l.hasClass(a, "dk-option-selected") ? (a.setAttribute("aria-selected", "true"), 
            this.selectedOptions.push(a)) : (a.setAttribute("aria-selected", "false"), d = this.selectedOptions.indexOf(a), 
            this.selectedOptions.splice(d, 1))) : (f = this.data.elem.firstChild, this.selectedOptions.length && (l.removeClass(this.selectedOptions[0], "dk-option-selected"), 
            this.selectedOptions[0].setAttribute("aria-selected", "false")), l.addClass(a, "dk-option-selected"), 
            a.setAttribute("aria-selected", "true"), f.setAttribute("aria-activedescendant", a.id), 
            f.className = "dk-selected " + e.className, f.innerHTML = e.text, this.selectedOptions[0] = a, 
            e.selected = !0), this.selectedIndex = g.selectedIndex, this.value = g.value, b || this.data.select.dispatchEvent(new CustomEvent("change", {
                bubbles: this.data.settings.bubble
            })), a) : void 0;
        },
        selectOne: function(a, b) {
            return this.reset(!0), this._scrollTo(a), this.select(a, b);
        },
        search: function(a, b) {
            var c, d, e, f, g, h, i, j, k = this.data.select.options, l = [];
            if (!a) return this.options;
            for (b = b ? b.toLowerCase() : "strict", b = "fuzzy" === b ? 2 : "partial" === b ? 1 : 0, 
            j = new RegExp((b ? "" : "^") + a, "i"), c = 0; c < k.length; c++) if (e = k[c].text.toLowerCase(), 
            2 == b) {
                for (d = a.toLowerCase().split(""), f = g = h = i = 0; g < e.length; ) e[g] === d[f] ? (h += 1 + h, 
                f++) : h = 0, i += h, g++;
                f === d.length && l.push({
                    e: this.options[c],
                    s: i,
                    i: c
                });
            } else j.test(e) && l.push(this.options[c]);
            return 2 === b && (l = l.sort(function(a, b) {
                return b.s - a.s || a.i - b.i;
            }).reduce(function(a, b) {
                return a[a.length] = b.e, a;
            }, [])), l;
        },
        focus: function() {
            this.disabled || (this.multiple ? this.data.elem : this.data.elem.children[0]).focus();
        },
        reset: function(a) {
            var b, c = this.data.select;
            for (this.selectedOptions.length = 0, b = 0; b < c.options.length; b++) c.options[b].selected = !1, 
            l.removeClass(this.options[b], "dk-option-selected"), this.options[b].setAttribute("aria-selected", "false"), 
            !a && c.options[b].defaultSelected && this.select(b, !0);
            this.selectedOptions.length || this.multiple || this.select(0, !0);
        },
        refresh: function() {
            this.dispose().init(this.data.select, this.data.settings);
        },
        dispose: function() {
            return delete i.cache[this.data.cacheID], this.data.elem.parentNode.removeChild(this.data.elem), 
            this.data.select.removeAttribute("data-dkCacheId"), this;
        },
        handleEvent: function(a) {
            if (!this.disabled) switch (a.type) {
              case "click":
                this._delegate(a);
                break;

              case "keydown":
                this._keyHandler(a);
                break;

              case "keypress":
                this._searchOptions(a);
                break;

              case "mouseover":
                this._highlight(a);
                break;

              case "reset":
                this.reset();
                break;

              case "change":
                this.data.settings.change.call(this);
            }
        },
        _delegate: function(b) {
            var c, d, e, f, g = b.target;
            if (l.hasClass(g, "dk-option-disabled")) return !1;
            if (this.multiple) {
                if (l.hasClass(g, "dk-option")) if (c = a.getSelection(), "Range" === c.type && c.collapseToStart(), 
                b.shiftKey) if (e = this.options.indexOf(this.selectedOptions[0]), f = this.options.indexOf(this.selectedOptions[this.selectedOptions.length - 1]), 
                d = this.options.indexOf(g), d > e && f > d && (d = e), d > f && f > e && (f = e), 
                this.reset(!0), f > d) for (;f + 1 > d; ) this.select(d++); else for (;d > f - 1; ) this.select(d--); else b.ctrlKey || b.metaKey ? this.select(g) : (this.reset(!0), 
                this.select(g));
            } else this[this.isOpen ? "close" : "open"](), l.hasClass(g, "dk-option") && this.select(g);
        },
        _highlight: function(a) {
            var b, c = a.target;
            if (!this.multiple) {
                for (b = 0; b < this.options.length; b++) l.removeClass(this.options[b], "dk-option-highlight");
                l.addClass(this.data.elem.lastChild, "dk-select-options-highlight"), l.addClass(c, "dk-option-highlight");
            }
        },
        _keyHandler: function(a) {
            var b, c, d = this.selectedOptions, e = this.options, f = 1, g = {
                tab: 9,
                enter: 13,
                esc: 27,
                space: 32,
                up: 38,
                down: 40
            };
            switch (a.keyCode) {
              case g.up:
                f = -1;

              case g.down:
                if (a.preventDefault(), b = d[d.length - 1], l.hasClass(this.data.elem.lastChild, "dk-select-options-highlight")) for (l.removeClass(this.data.elem.lastChild, "dk-select-options-highlight"), 
                c = 0; c < e.length; c++) l.hasClass(e[c], "dk-option-highlight") && (l.removeClass(e[c], "dk-option-highlight"), 
                b = e[c]);
                f = e.indexOf(b) + f, f > e.length - 1 ? f = e.length - 1 : 0 > f && (f = 0), this.data.select.options[f].disabled || (this.reset(!0), 
                this.select(f), this._scrollTo(f));
                break;

              case g.space:
                if (!this.isOpen) {
                    a.preventDefault(), this.open();
                    break;
                }

              case g.tab:
              case g.enter:
                for (f = 0; f < e.length; f++) l.hasClass(e[f], "dk-option-highlight") && this.select(f);

              case g.esc:
                this.isOpen && (a.preventDefault(), this.close());
            }
        },
        _searchOptions: function(a) {
            var b, c = this, e = String.fromCharCode(a.keyCode || a.which), f = function() {
                c.data.searchTimeout && clearTimeout(c.data.searchTimeout), c.data.searchTimeout = setTimeout(function() {
                    c.data.searchString = "";
                }, 1e3);
            };
            this.data.searchString === d && (this.data.searchString = ""), f(), this.data.searchString += e, 
            b = this.search(this.data.searchString, this.data.settings.search), b.length && (l.hasClass(b[0], "dk-option-disabled") || this.selectOne(b[0]));
        },
        _scrollTo: function(a) {
            var b, c, d, e = this.data.elem.lastChild;
            return -1 === a || "number" != typeof a && !a || !this.isOpen && !this.multiple ? !1 : ("number" == typeof a && (a = this.item(a)), 
            b = l.position(a, e).top, c = b - e.scrollTop, d = c + a.offsetHeight, void (d > e.offsetHeight ? (b += a.offsetHeight, 
            e.scrollTop = b - e.offsetHeight) : 0 > c && (e.scrollTop = b)));
        }
    }, i.build = function(a, b) {
        var c, d, e, f = [], g = {
            elem: null,
            options: [],
            selected: []
        }, h = function(a) {
            var c, d, e, f, i = [];
            switch (a.nodeName) {
              case "OPTION":
                c = l.create("li", {
                    "class": "dk-option ",
                    "data-value": a.value,
                    innerHTML: a.text,
                    role: "option",
                    "aria-selected": "false",
                    id: b + "-" + (a.id || a.value.replace(" ", "-"))
                }), l.addClass(c, a.className), a.disabled && (l.addClass(c, "dk-option-disabled"), 
                c.setAttribute("aria-disabled", "true")), a.selected && (l.addClass(c, "dk-option-selected"), 
                c.setAttribute("aria-selected", "true"), g.selected.push(c)), g.options.push(this.appendChild(c));
                break;

              case "OPTGROUP":
                for (d = l.create("li", {
                    "class": "dk-optgroup"
                }), a.label && d.appendChild(l.create("div", {
                    "class": "dk-optgroup-label",
                    innerHTML: a.label
                })), e = l.create("ul", {
                    "class": "dk-optgroup-options"
                }), f = a.children.length; f--; i.unshift(a.children[f])) ;
                i.forEach(h, e), this.appendChild(d).appendChild(e);
            }
        };
        for (g.elem = l.create("div", {
            "class": "dk-select" + (a.multiple ? "-multi" : "")
        }), d = l.create("ul", {
            "class": "dk-select-options",
            id: b + "-listbox",
            role: "listbox"
        }), a.disabled && l.addClass(g.elem, "dk-select-disabled"), g.elem.id = b + (a.id ? "-" + a.id : ""), 
        l.addClass(g.elem, a.className), a.multiple ? (g.elem.setAttribute("tabindex", a.getAttribute("tabindex") || "0"), 
        d.setAttribute("aria-multiselectable", "true")) : (c = a.options[a.selectedIndex], 
        g.elem.appendChild(l.create("div", {
            "class": "dk-selected " + c.className,
            tabindex: a.tabindex || 0,
            innerHTML: c ? c.text : "&nbsp;",
            id: b + "-combobox",
            "aria-live": "assertive",
            "aria-owns": d.id,
            role: "combobox"
        })), d.setAttribute("aria-expanded", "false")), e = a.children.length; e--; f.unshift(a.children[e])) ;
        return f.forEach(h, g.elem.appendChild(d)), g;
    }, i.onDocClick = function(a) {
        var b, c;
        if (1 !== a.target.nodeType) return !1;
        null !== (b = a.target.getAttribute("data-dkcacheid")) && i.cache[b].focus();
        for (c in i.cache) l.closest(a.target, i.cache[c].data.elem) || c === b || i.cache[c].disabled || i.cache[c].close();
    }, c !== d && (c.fn.dropkick = function() {
        var a = Array.prototype.slice.call(arguments);
        return c(this).each(function() {
            a[0] && "object" != typeof a[0] ? "string" == typeof a[0] && i.prototype[a[0]].apply(new i(this), a.slice(1)) : new i(this, a[0] || {});
        });
    }), i;
}), !function() {
    "use strict";
    function a(a) {
        a.fn.swiper = function(b) {
            var d;
            return a(this).each(function() {
                var a = new c(this, b);
                d || (d = a);
            }), d;
        };
    }
    var b, c = function(a, d) {
        function e(a) {
            return Math.floor(a);
        }
        function f() {
            t.autoplayTimeoutId = setTimeout(function() {
                t.params.loop ? (t.fixLoop(), t._slideNext(), t.emit("onAutoplay", t)) : t.isEnd ? d.autoplayStopOnLast ? t.stopAutoplay() : (t._slideTo(0), 
                t.emit("onAutoplay", t)) : (t._slideNext(), t.emit("onAutoplay", t));
            }, t.params.autoplay);
        }
        function g(a, c) {
            var d = b(a.target);
            if (!d.is(c)) if ("string" == typeof c) d = d.parents(c); else if (c.nodeType) {
                var e;
                return d.parents().each(function(a, b) {
                    b === c && (e = c);
                }), e ? c : void 0;
            }
            return 0 !== d.length ? d[0] : void 0;
        }
        function h(a, b) {
            b = b || {};
            var c = window.MutationObserver || window.WebkitMutationObserver, d = new c(function(a) {
                a.forEach(function(a) {
                    t.onResize(!0), t.emit("onObserverUpdate", t, a);
                });
            });
            d.observe(a, {
                attributes: "undefined" == typeof b.attributes ? !0 : b.attributes,
                childList: "undefined" == typeof b.childList ? !0 : b.childList,
                characterData: "undefined" == typeof b.characterData ? !0 : b.characterData
            }), t.observers.push(d);
        }
        function i(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.keyCode || a.charCode;
            if (!t.params.allowSwipeToNext && (t.isHorizontal() && 39 === b || !t.isHorizontal() && 40 === b)) return !1;
            if (!t.params.allowSwipeToPrev && (t.isHorizontal() && 37 === b || !t.isHorizontal() && 38 === b)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === b || 39 === b || 38 === b || 40 === b) {
                    var c = !1;
                    if (t.container.parents(".swiper-slide").length > 0 && 0 === t.container.parents(".swiper-slide-active").length) return;
                    var d = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }, e = window.innerWidth, f = window.innerHeight, g = t.container.offset();
                    t.rtl && (g.left = g.left - t.container[0].scrollLeft);
                    for (var h = [ [ g.left, g.top ], [ g.left + t.width, g.top ], [ g.left, g.top + t.height ], [ g.left + t.width, g.top + t.height ] ], i = 0; i < h.length; i++) {
                        var j = h[i];
                        j[0] >= d.left && j[0] <= d.left + e && j[1] >= d.top && j[1] <= d.top + f && (c = !0);
                    }
                    if (!c) return;
                }
                t.isHorizontal() ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 
                (39 === b && !t.rtl || 37 === b && t.rtl) && t.slideNext(), (37 === b && !t.rtl || 39 === b && t.rtl) && t.slidePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 
                40 === b && t.slideNext(), 38 === b && t.slidePrev());
            }
        }
        function j(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = t.mousewheel.event, c = 0, d = t.rtl ? -1 : 1;
            if (a.detail) c = -a.detail; else if ("mousewheel" === b) if (t.params.mousewheelForceToAxis) if (t.isHorizontal()) {
                if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
                c = a.wheelDeltaX * d;
            } else {
                if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
                c = a.wheelDeltaY;
            } else c = Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY) ? -a.wheelDeltaX * d : -a.wheelDeltaY; else if ("DOMMouseScroll" === b) c = -a.detail; else if ("wheel" === b) if (t.params.mousewheelForceToAxis) if (t.isHorizontal()) {
                if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
                c = -a.deltaX * d;
            } else {
                if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
                c = -a.deltaY;
            } else c = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX * d : -a.deltaY;
            if (0 !== c) {
                if (t.params.mousewheelInvert && (c = -c), t.params.freeMode) {
                    var e = t.getWrapperTranslate() + c * t.params.mousewheelSensitivity, f = t.isBeginning, g = t.isEnd;
                    if (e >= t.minTranslate() && (e = t.minTranslate()), e <= t.maxTranslate() && (e = t.maxTranslate()), 
                    t.setWrapperTransition(0), t.setWrapperTranslate(e), t.updateProgress(), t.updateActiveIndex(), 
                    (!f && t.isBeginning || !g && t.isEnd) && t.updateClasses(), t.params.freeModeSticky ? (clearTimeout(t.mousewheel.timeout), 
                    t.mousewheel.timeout = setTimeout(function() {
                        t.slideReset();
                    }, 300)) : t.params.lazyLoading && t.lazy && t.lazy.load(), 0 === e || e === t.maxTranslate()) return;
                } else {
                    if (new window.Date().getTime() - t.mousewheel.lastScrollTime > 60) if (0 > c) if (t.isEnd && !t.params.loop || t.animating) {
                        if (t.params.mousewheelReleaseOnEdges) return !0;
                    } else t.slideNext(); else if (t.isBeginning && !t.params.loop || t.animating) {
                        if (t.params.mousewheelReleaseOnEdges) return !0;
                    } else t.slidePrev();
                    t.mousewheel.lastScrollTime = new window.Date().getTime();
                }
                return t.params.autoplay && t.stopAutoplay(), a.preventDefault ? a.preventDefault() : a.returnValue = !1, 
                !1;
            }
        }
        function k(a, c) {
            a = b(a);
            var d, e, f, g = t.rtl ? -1 : 1;
            d = a.attr("data-swiper-parallax") || "0", e = a.attr("data-swiper-parallax-x"), 
            f = a.attr("data-swiper-parallax-y"), e || f ? (e = e || "0", f = f || "0") : t.isHorizontal() ? (e = d, 
            f = "0") : (f = d, e = "0"), e = e.indexOf("%") >= 0 ? parseInt(e, 10) * c * g + "%" : e * c * g + "px", 
            f = f.indexOf("%") >= 0 ? parseInt(f, 10) * c + "%" : f * c + "px", a.transform("translate3d(" + e + ", " + f + ",0px)");
        }
        function l(a) {
            return 0 !== a.indexOf("on") && (a = a[0] !== a[0].toUpperCase() ? "on" + a[0].toUpperCase() + a.substring(1) : "on" + a), 
            a;
        }
        if (!(this instanceof c)) return new c(a, d);
        var m = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            hashnav: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }, n = d && d.virtualTranslate;
        d = d || {};
        var o = {};
        for (var p in d) if ("object" != typeof d[p] || null === d[p] || d[p].nodeType || d[p] === window || d[p] === document || "undefined" != typeof Dom7 && d[p] instanceof Dom7 || "undefined" != typeof jQuery && d[p] instanceof jQuery) o[p] = d[p]; else {
            o[p] = {};
            for (var q in d[p]) o[p][q] = d[p][q];
        }
        for (var r in m) if ("undefined" == typeof d[r]) d[r] = m[r]; else if ("object" == typeof d[r]) for (var s in m[r]) "undefined" == typeof d[r][s] && (d[r][s] = m[r][s]);
        var t = this;
        if (t.params = d, t.originalParams = o, t.classNames = [], "undefined" != typeof b && "undefined" != typeof Dom7 && (b = Dom7), 
        ("undefined" != typeof b || (b = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (t.$ = b, 
        t.currentBreakpoint = void 0, t.getActiveBreakpoint = function() {
            if (!t.params.breakpoints) return !1;
            var a, b = !1, c = [];
            for (a in t.params.breakpoints) t.params.breakpoints.hasOwnProperty(a) && c.push(a);
            c.sort(function(a, b) {
                return parseInt(a, 10) > parseInt(b, 10);
            });
            for (var d = 0; d < c.length; d++) a = c[d], a >= window.innerWidth && !b && (b = a);
            return b || "max";
        }, t.setBreakpoint = function() {
            var a = t.getActiveBreakpoint();
            if (a && t.currentBreakpoint !== a) {
                var b = a in t.params.breakpoints ? t.params.breakpoints[a] : t.originalParams;
                for (var c in b) t.params[c] = b[c];
                t.currentBreakpoint = a;
            }
        }, t.params.breakpoints && t.setBreakpoint(), t.container = b(a), 0 !== t.container.length)) {
            if (t.container.length > 1) return void t.container.each(function() {
                new c(this, d);
            });
            t.container[0].swiper = t, t.container.data("swiper", t), t.classNames.push("swiper-container-" + t.params.direction), 
            t.params.freeMode && t.classNames.push("swiper-container-free-mode"), t.support.flexbox || (t.classNames.push("swiper-container-no-flexbox"), 
            t.params.slidesPerColumn = 1), t.params.autoHeight && t.classNames.push("swiper-container-autoheight"), 
            (t.params.parallax || t.params.watchSlidesVisibility) && (t.params.watchSlidesProgress = !0), 
            [ "cube", "coverflow", "flip" ].indexOf(t.params.effect) >= 0 && (t.support.transforms3d ? (t.params.watchSlidesProgress = !0, 
            t.classNames.push("swiper-container-3d")) : t.params.effect = "slide"), "slide" !== t.params.effect && t.classNames.push("swiper-container-" + t.params.effect), 
            "cube" === t.params.effect && (t.params.resistanceRatio = 0, t.params.slidesPerView = 1, 
            t.params.slidesPerColumn = 1, t.params.slidesPerGroup = 1, t.params.centeredSlides = !1, 
            t.params.spaceBetween = 0, t.params.virtualTranslate = !0, t.params.setWrapperSize = !1), 
            ("fade" === t.params.effect || "flip" === t.params.effect) && (t.params.slidesPerView = 1, 
            t.params.slidesPerColumn = 1, t.params.slidesPerGroup = 1, t.params.watchSlidesProgress = !0, 
            t.params.spaceBetween = 0, t.params.setWrapperSize = !1, "undefined" == typeof n && (t.params.virtualTranslate = !0)), 
            t.params.grabCursor && t.support.touch && (t.params.grabCursor = !1), t.wrapper = t.container.children("." + t.params.wrapperClass), 
            t.params.pagination && (t.paginationContainer = b(t.params.pagination), "bullets" === t.params.paginationType && t.params.paginationClickable ? t.paginationContainer.addClass("swiper-pagination-clickable") : t.params.paginationClickable = !1, 
            t.paginationContainer.addClass("swiper-pagination-" + t.params.paginationType)), 
            t.isHorizontal = function() {
                return "horizontal" === t.params.direction;
            }, t.rtl = t.isHorizontal() && ("rtl" === t.container[0].dir.toLowerCase() || "rtl" === t.container.css("direction")), 
            t.rtl && t.classNames.push("swiper-container-rtl"), t.rtl && (t.wrongRTL = "-webkit-box" === t.wrapper.css("display")), 
            t.params.slidesPerColumn > 1 && t.classNames.push("swiper-container-multirow"), 
            t.device.android && t.classNames.push("swiper-container-android"), t.container.addClass(t.classNames.join(" ")), 
            t.translate = 0, t.progress = 0, t.velocity = 0, t.lockSwipeToNext = function() {
                t.params.allowSwipeToNext = !1;
            }, t.lockSwipeToPrev = function() {
                t.params.allowSwipeToPrev = !1;
            }, t.lockSwipes = function() {
                t.params.allowSwipeToNext = t.params.allowSwipeToPrev = !1;
            }, t.unlockSwipeToNext = function() {
                t.params.allowSwipeToNext = !0;
            }, t.unlockSwipeToPrev = function() {
                t.params.allowSwipeToPrev = !0;
            }, t.unlockSwipes = function() {
                t.params.allowSwipeToNext = t.params.allowSwipeToPrev = !0;
            }, t.params.grabCursor && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grab", 
            t.container[0].style.cursor = "-moz-grab", t.container[0].style.cursor = "grab"), 
            t.imagesToLoad = [], t.imagesLoaded = 0, t.loadImage = function(a, b, c, d, e) {
                function f() {
                    e && e();
                }
                var g;
                a.complete && d ? f() : b ? (g = new window.Image(), g.onload = f, g.onerror = f, 
                c && (g.srcset = c), b && (g.src = b)) : f();
            }, t.preloadImages = function() {
                function a() {
                    "undefined" != typeof t && null !== t && (void 0 !== t.imagesLoaded && t.imagesLoaded++, 
                    t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), 
                    t.emit("onImagesReady", t)));
                }
                t.imagesToLoad = t.container.find("img");
                for (var b = 0; b < t.imagesToLoad.length; b++) t.loadImage(t.imagesToLoad[b], t.imagesToLoad[b].currentSrc || t.imagesToLoad[b].getAttribute("src"), t.imagesToLoad[b].srcset || t.imagesToLoad[b].getAttribute("srcset"), !0, a);
            }, t.autoplayTimeoutId = void 0, t.autoplaying = !1, t.autoplayPaused = !1, t.startAutoplay = function() {
                return "undefined" != typeof t.autoplayTimeoutId ? !1 : t.params.autoplay ? t.autoplaying ? !1 : (t.autoplaying = !0, 
                t.emit("onAutoplayStart", t), void f()) : !1;
            }, t.stopAutoplay = function(a) {
                t.autoplayTimeoutId && (t.autoplayTimeoutId && clearTimeout(t.autoplayTimeoutId), 
                t.autoplaying = !1, t.autoplayTimeoutId = void 0, t.emit("onAutoplayStop", t));
            }, t.pauseAutoplay = function(a) {
                t.autoplayPaused || (t.autoplayTimeoutId && clearTimeout(t.autoplayTimeoutId), t.autoplayPaused = !0, 
                0 === a ? (t.autoplayPaused = !1, f()) : t.wrapper.transitionEnd(function() {
                    t && (t.autoplayPaused = !1, t.autoplaying ? f() : t.stopAutoplay());
                }));
            }, t.minTranslate = function() {
                return -t.snapGrid[0];
            }, t.maxTranslate = function() {
                return -t.snapGrid[t.snapGrid.length - 1];
            }, t.updateAutoHeight = function() {
                var a = t.slides.eq(t.activeIndex)[0];
                if ("undefined" != typeof a) {
                    var b = a.offsetHeight;
                    b && t.wrapper.css("height", b + "px");
                }
            }, t.updateContainerSize = function() {
                var a, b;
                a = "undefined" != typeof t.params.width ? t.params.width : t.container[0].clientWidth, 
                b = "undefined" != typeof t.params.height ? t.params.height : t.container[0].clientHeight, 
                0 === a && t.isHorizontal() || 0 === b && !t.isHorizontal() || (a = a - parseInt(t.container.css("padding-left"), 10) - parseInt(t.container.css("padding-right"), 10), 
                b = b - parseInt(t.container.css("padding-top"), 10) - parseInt(t.container.css("padding-bottom"), 10), 
                t.width = a, t.height = b, t.size = t.isHorizontal() ? t.width : t.height);
            }, t.updateSlidesSize = function() {
                t.slides = t.wrapper.children("." + t.params.slideClass), t.snapGrid = [], t.slidesGrid = [], 
                t.slidesSizesGrid = [];
                var a, b = t.params.spaceBetween, c = -t.params.slidesOffsetBefore, d = 0, f = 0;
                "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * t.size), 
                t.virtualSize = -b, t.rtl ? t.slides.css({
                    marginLeft: "",
                    marginTop: ""
                }) : t.slides.css({
                    marginRight: "",
                    marginBottom: ""
                });
                var g;
                t.params.slidesPerColumn > 1 && (g = Math.floor(t.slides.length / t.params.slidesPerColumn) === t.slides.length / t.params.slidesPerColumn ? t.slides.length : Math.ceil(t.slides.length / t.params.slidesPerColumn) * t.params.slidesPerColumn, 
                "auto" !== t.params.slidesPerView && "row" === t.params.slidesPerColumnFill && (g = Math.max(g, t.params.slidesPerView * t.params.slidesPerColumn)));
                var h, i = t.params.slidesPerColumn, j = g / i, k = j - (t.params.slidesPerColumn * j - t.slides.length);
                for (a = 0; a < t.slides.length; a++) {
                    h = 0;
                    var l = t.slides.eq(a);
                    if (t.params.slidesPerColumn > 1) {
                        var m, n, o;
                        "column" === t.params.slidesPerColumnFill ? (n = Math.floor(a / i), o = a - n * i, 
                        (n > k || n === k && o === i - 1) && ++o >= i && (o = 0, n++), m = n + o * g / i, 
                        l.css({
                            "-webkit-box-ordinal-group": m,
                            "-moz-box-ordinal-group": m,
                            "-ms-flex-order": m,
                            "-webkit-order": m,
                            order: m
                        })) : (o = Math.floor(a / j), n = a - o * j), l.css({
                            "margin-top": 0 !== o && t.params.spaceBetween && t.params.spaceBetween + "px"
                        }).attr("data-swiper-column", n).attr("data-swiper-row", o);
                    }
                    "none" !== l.css("display") && ("auto" === t.params.slidesPerView ? (h = t.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0), 
                    t.params.roundLengths && (h = e(h))) : (h = (t.size - (t.params.slidesPerView - 1) * b) / t.params.slidesPerView, 
                    t.params.roundLengths && (h = e(h)), t.isHorizontal() ? t.slides[a].style.width = h + "px" : t.slides[a].style.height = h + "px"), 
                    t.slides[a].swiperSlideSize = h, t.slidesSizesGrid.push(h), t.params.centeredSlides ? (c = c + h / 2 + d / 2 + b, 
                    0 === a && (c = c - t.size / 2 - b), Math.abs(c) < .001 && (c = 0), f % t.params.slidesPerGroup === 0 && t.snapGrid.push(c), 
                    t.slidesGrid.push(c)) : (f % t.params.slidesPerGroup === 0 && t.snapGrid.push(c), 
                    t.slidesGrid.push(c), c = c + h + b), t.virtualSize += h + b, d = h, f++);
                }
                t.virtualSize = Math.max(t.virtualSize, t.size) + t.params.slidesOffsetAfter;
                var p;
                if (t.rtl && t.wrongRTL && ("slide" === t.params.effect || "coverflow" === t.params.effect) && t.wrapper.css({
                    width: t.virtualSize + t.params.spaceBetween + "px"
                }), (!t.support.flexbox || t.params.setWrapperSize) && (t.isHorizontal() ? t.wrapper.css({
                    width: t.virtualSize + t.params.spaceBetween + "px"
                }) : t.wrapper.css({
                    height: t.virtualSize + t.params.spaceBetween + "px"
                })), t.params.slidesPerColumn > 1 && (t.virtualSize = (h + t.params.spaceBetween) * g, 
                t.virtualSize = Math.ceil(t.virtualSize / t.params.slidesPerColumn) - t.params.spaceBetween, 
                t.wrapper.css({
                    width: t.virtualSize + t.params.spaceBetween + "px"
                }), t.params.centeredSlides)) {
                    for (p = [], a = 0; a < t.snapGrid.length; a++) t.snapGrid[a] < t.virtualSize + t.snapGrid[0] && p.push(t.snapGrid[a]);
                    t.snapGrid = p;
                }
                if (!t.params.centeredSlides) {
                    for (p = [], a = 0; a < t.snapGrid.length; a++) t.snapGrid[a] <= t.virtualSize - t.size && p.push(t.snapGrid[a]);
                    t.snapGrid = p, Math.floor(t.virtualSize - t.size) > Math.floor(t.snapGrid[t.snapGrid.length - 1]) && t.snapGrid.push(t.virtualSize - t.size);
                }
                0 === t.snapGrid.length && (t.snapGrid = [ 0 ]), 0 !== t.params.spaceBetween && (t.isHorizontal() ? t.rtl ? t.slides.css({
                    marginLeft: b + "px"
                }) : t.slides.css({
                    marginRight: b + "px"
                }) : t.slides.css({
                    marginBottom: b + "px"
                })), t.params.watchSlidesProgress && t.updateSlidesOffset();
            }, t.updateSlidesOffset = function() {
                for (var a = 0; a < t.slides.length; a++) t.slides[a].swiperSlideOffset = t.isHorizontal() ? t.slides[a].offsetLeft : t.slides[a].offsetTop;
            }, t.updateSlidesProgress = function(a) {
                if ("undefined" == typeof a && (a = t.translate || 0), 0 !== t.slides.length) {
                    "undefined" == typeof t.slides[0].swiperSlideOffset && t.updateSlidesOffset();
                    var b = -a;
                    t.rtl && (b = a), t.slides.removeClass(t.params.slideVisibleClass);
                    for (var c = 0; c < t.slides.length; c++) {
                        var d = t.slides[c], e = (b - d.swiperSlideOffset) / (d.swiperSlideSize + t.params.spaceBetween);
                        if (t.params.watchSlidesVisibility) {
                            var f = -(b - d.swiperSlideOffset), g = f + t.slidesSizesGrid[c], h = f >= 0 && f < t.size || g > 0 && g <= t.size || 0 >= f && g >= t.size;
                            h && t.slides.eq(c).addClass(t.params.slideVisibleClass);
                        }
                        d.progress = t.rtl ? -e : e;
                    }
                }
            }, t.updateProgress = function(a) {
                "undefined" == typeof a && (a = t.translate || 0);
                var b = t.maxTranslate() - t.minTranslate(), c = t.isBeginning, d = t.isEnd;
                0 === b ? (t.progress = 0, t.isBeginning = t.isEnd = !0) : (t.progress = (a - t.minTranslate()) / b, 
                t.isBeginning = t.progress <= 0, t.isEnd = t.progress >= 1), t.isBeginning && !c && t.emit("onReachBeginning", t), 
                t.isEnd && !d && t.emit("onReachEnd", t), t.params.watchSlidesProgress && t.updateSlidesProgress(a), 
                t.emit("onProgress", t, t.progress);
            }, t.updateActiveIndex = function() {
                var a, b, c, d = t.rtl ? t.translate : -t.translate;
                for (b = 0; b < t.slidesGrid.length; b++) "undefined" != typeof t.slidesGrid[b + 1] ? d >= t.slidesGrid[b] && d < t.slidesGrid[b + 1] - (t.slidesGrid[b + 1] - t.slidesGrid[b]) / 2 ? a = b : d >= t.slidesGrid[b] && d < t.slidesGrid[b + 1] && (a = b + 1) : d >= t.slidesGrid[b] && (a = b);
                (0 > a || "undefined" == typeof a) && (a = 0), c = Math.floor(a / t.params.slidesPerGroup), 
                c >= t.snapGrid.length && (c = t.snapGrid.length - 1), a !== t.activeIndex && (t.snapIndex = c, 
                t.previousIndex = t.activeIndex, t.activeIndex = a, t.updateClasses());
            }, t.updateClasses = function() {
                t.slides.removeClass(t.params.slideActiveClass + " " + t.params.slideNextClass + " " + t.params.slidePrevClass);
                var a = t.slides.eq(t.activeIndex);
                if (a.addClass(t.params.slideActiveClass), a.next("." + t.params.slideClass).addClass(t.params.slideNextClass), 
                a.prev("." + t.params.slideClass).addClass(t.params.slidePrevClass), t.paginationContainer && t.paginationContainer.length > 0) {
                    var c, d = t.params.loop ? Math.ceil((t.slides.length - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (c = Math.ceil(t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup, 
                    c > t.slides.length - 1 - 2 * t.loopedSlides && (c -= t.slides.length - 2 * t.loopedSlides), 
                    c > d - 1 && (c -= d), 0 > c && "bullets" !== t.params.paginationType && (c = d + c)) : c = "undefined" != typeof t.snapIndex ? t.snapIndex : t.activeIndex || 0, 
                    "bullets" === t.params.paginationType && t.bullets && t.bullets.length > 0 && (t.bullets.removeClass(t.params.bulletActiveClass), 
                    t.paginationContainer.length > 1 ? t.bullets.each(function() {
                        b(this).index() === c && b(this).addClass(t.params.bulletActiveClass);
                    }) : t.bullets.eq(c).addClass(t.params.bulletActiveClass)), "fraction" === t.params.paginationType && (t.paginationContainer.find("." + t.params.paginationCurrentClass).text(c + 1), 
                    t.paginationContainer.find("." + t.params.paginationTotalClass).text(d)), "progress" === t.params.paginationType) {
                        var e = (c + 1) / d, f = e, g = 1;
                        t.isHorizontal() || (g = e, f = 1), t.paginationContainer.find("." + t.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + f + ") scaleY(" + g + ")").transition(t.params.speed);
                    }
                    "custom" === t.params.paginationType && t.params.paginationCustomRender && t.paginationContainer.html(t.params.paginationCustomRender(t, c + 1, d));
                }
                t.params.loop || (t.params.prevButton && (t.isBeginning ? (b(t.params.prevButton).addClass(t.params.buttonDisabledClass), 
                t.params.a11y && t.a11y && t.a11y.disable(b(t.params.prevButton))) : (b(t.params.prevButton).removeClass(t.params.buttonDisabledClass), 
                t.params.a11y && t.a11y && t.a11y.enable(b(t.params.prevButton)))), t.params.nextButton && (t.isEnd ? (b(t.params.nextButton).addClass(t.params.buttonDisabledClass), 
                t.params.a11y && t.a11y && t.a11y.disable(b(t.params.nextButton))) : (b(t.params.nextButton).removeClass(t.params.buttonDisabledClass), 
                t.params.a11y && t.a11y && t.a11y.enable(b(t.params.nextButton)))));
            }, t.updatePagination = function() {
                if (t.params.pagination && t.paginationContainer && t.paginationContainer.length > 0) {
                    var a = "";
                    if ("bullets" === t.params.paginationType) {
                        for (var b = t.params.loop ? Math.ceil((t.slides.length - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length, c = 0; b > c; c++) a += t.params.paginationBulletRender ? t.params.paginationBulletRender(c, t.params.bulletClass) : "<" + t.params.paginationElement + ' class="' + t.params.bulletClass + '"></' + t.params.paginationElement + ">";
                        t.paginationContainer.html(a), t.bullets = t.paginationContainer.find("." + t.params.bulletClass), 
                        t.params.paginationClickable && t.params.a11y && t.a11y && t.a11y.initPagination();
                    }
                    "fraction" === t.params.paginationType && (a = t.params.paginationFractionRender ? t.params.paginationFractionRender(t, t.params.paginationCurrentClass, t.params.paginationTotalClass) : '<span class="' + t.params.paginationCurrentClass + '"></span> / <span class="' + t.params.paginationTotalClass + '"></span>', 
                    t.paginationContainer.html(a)), "progress" === t.params.paginationType && (a = t.params.paginationProgressRender ? t.params.paginationProgressRender(t, t.params.paginationProgressbarClass) : '<span class="' + t.params.paginationProgressbarClass + '"></span>', 
                    t.paginationContainer.html(a));
                }
            }, t.update = function(a) {
                function b() {
                    d = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()), t.setWrapperTranslate(d), 
                    t.updateActiveIndex(), t.updateClasses();
                }
                if (t.updateContainerSize(), t.updateSlidesSize(), t.updateProgress(), t.updatePagination(), 
                t.updateClasses(), t.params.scrollbar && t.scrollbar && t.scrollbar.set(), a) {
                    var c, d;
                    t.controller && t.controller.spline && (t.controller.spline = void 0), t.params.freeMode ? (b(), 
                    t.params.autoHeight && t.updateAutoHeight()) : (c = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), 
                    c || b());
                } else t.params.autoHeight && t.updateAutoHeight();
            }, t.onResize = function(a) {
                t.params.breakpoints && t.setBreakpoint();
                var b = t.params.allowSwipeToPrev, c = t.params.allowSwipeToNext;
                if (t.params.allowSwipeToPrev = t.params.allowSwipeToNext = !0, t.updateContainerSize(), 
                t.updateSlidesSize(), ("auto" === t.params.slidesPerView || t.params.freeMode || a) && t.updatePagination(), 
                t.params.scrollbar && t.scrollbar && t.scrollbar.set(), t.controller && t.controller.spline && (t.controller.spline = void 0), 
                t.params.freeMode) {
                    var d = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate());
                    t.setWrapperTranslate(d), t.updateActiveIndex(), t.updateClasses(), t.params.autoHeight && t.updateAutoHeight();
                } else t.updateClasses(), ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0);
                t.params.allowSwipeToPrev = b, t.params.allowSwipeToNext = c;
            };
            var u = [ "mousedown", "mousemove", "mouseup" ];
            window.navigator.pointerEnabled ? u = [ "pointerdown", "pointermove", "pointerup" ] : window.navigator.msPointerEnabled && (u = [ "MSPointerDown", "MSPointerMove", "MSPointerUp" ]), 
            t.touchEvents = {
                start: t.support.touch || !t.params.simulateTouch ? "touchstart" : u[0],
                move: t.support.touch || !t.params.simulateTouch ? "touchmove" : u[1],
                end: t.support.touch || !t.params.simulateTouch ? "touchend" : u[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === t.params.touchEventsTarget ? t.container : t.wrapper).addClass("swiper-wp8-" + t.params.direction), 
            t.initEvents = function(a) {
                var c = a ? "off" : "on", e = a ? "removeEventListener" : "addEventListener", f = "container" === t.params.touchEventsTarget ? t.container[0] : t.wrapper[0], g = t.support.touch ? f : document, h = t.params.nested ? !0 : !1;
                t.browser.ie ? (f[e](t.touchEvents.start, t.onTouchStart, !1), g[e](t.touchEvents.move, t.onTouchMove, h), 
                g[e](t.touchEvents.end, t.onTouchEnd, !1)) : (t.support.touch && (f[e](t.touchEvents.start, t.onTouchStart, !1), 
                f[e](t.touchEvents.move, t.onTouchMove, h), f[e](t.touchEvents.end, t.onTouchEnd, !1)), 
                !d.simulateTouch || t.device.ios || t.device.android || (f[e]("mousedown", t.onTouchStart, !1), 
                document[e]("mousemove", t.onTouchMove, h), document[e]("mouseup", t.onTouchEnd, !1))), 
                window[e]("resize", t.onResize), t.params.nextButton && (b(t.params.nextButton)[c]("click", t.onClickNext), 
                t.params.a11y && t.a11y && b(t.params.nextButton)[c]("keydown", t.a11y.onEnterKey)), 
                t.params.prevButton && (b(t.params.prevButton)[c]("click", t.onClickPrev), t.params.a11y && t.a11y && b(t.params.prevButton)[c]("keydown", t.a11y.onEnterKey)), 
                t.params.pagination && t.params.paginationClickable && (b(t.paginationContainer)[c]("click", "." + t.params.bulletClass, t.onClickIndex), 
                t.params.a11y && t.a11y && b(t.paginationContainer)[c]("keydown", "." + t.params.bulletClass, t.a11y.onEnterKey)), 
                (t.params.preventClicks || t.params.preventClicksPropagation) && f[e]("click", t.preventClicks, !0);
            }, t.attachEvents = function(a) {
                t.initEvents();
            }, t.detachEvents = function() {
                t.initEvents(!0);
            }, t.allowClick = !0, t.preventClicks = function(a) {
                t.allowClick || (t.params.preventClicks && a.preventDefault(), t.params.preventClicksPropagation && t.animating && (a.stopPropagation(), 
                a.stopImmediatePropagation()));
            }, t.onClickNext = function(a) {
                a.preventDefault(), (!t.isEnd || t.params.loop) && t.slideNext();
            }, t.onClickPrev = function(a) {
                a.preventDefault(), (!t.isBeginning || t.params.loop) && t.slidePrev();
            }, t.onClickIndex = function(a) {
                a.preventDefault();
                var c = b(this).index() * t.params.slidesPerGroup;
                t.params.loop && (c += t.loopedSlides), t.slideTo(c);
            }, t.updateClickedSlide = function(a) {
                var c = g(a, "." + t.params.slideClass), d = !1;
                if (c) for (var e = 0; e < t.slides.length; e++) t.slides[e] === c && (d = !0);
                if (!c || !d) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                if (t.clickedSlide = c, t.clickedIndex = b(c).index(), t.params.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex) {
                    var f, h = t.clickedIndex;
                    if (t.params.loop) {
                        if (t.animating) return;
                        f = b(t.clickedSlide).attr("data-swiper-slide-index"), t.params.centeredSlides ? h < t.loopedSlides - t.params.slidesPerView / 2 || h > t.slides.length - t.loopedSlides + t.params.slidesPerView / 2 ? (t.fixLoop(), 
                        h = t.wrapper.children("." + t.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.swiper-slide-duplicate)').eq(0).index(), 
                        setTimeout(function() {
                            t.slideTo(h);
                        }, 0)) : t.slideTo(h) : h > t.slides.length - t.params.slidesPerView ? (t.fixLoop(), 
                        h = t.wrapper.children("." + t.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.swiper-slide-duplicate)').eq(0).index(), 
                        setTimeout(function() {
                            t.slideTo(h);
                        }, 0)) : t.slideTo(h);
                    } else t.slideTo(h);
                }
            };
            var v, w, x, y, z, A, B, C, D, E, F = "input, select, textarea, button", G = Date.now(), H = [];
            t.animating = !1, t.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var I, J;
            if (t.onTouchStart = function(a) {
                if (a.originalEvent && (a = a.originalEvent), I = "touchstart" === a.type, I || !("which" in a) || 3 !== a.which) {
                    if (t.params.noSwiping && g(a, "." + t.params.noSwipingClass)) return void (t.allowClick = !0);
                    if (!t.params.swipeHandler || g(a, t.params.swipeHandler)) {
                        var c = t.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, d = t.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                        if (!(t.device.ios && t.params.iOSEdgeSwipeDetection && c <= t.params.iOSEdgeSwipeThreshold)) {
                            if (v = !0, w = !1, x = !0, z = void 0, J = void 0, t.touches.startX = c, t.touches.startY = d, 
                            y = Date.now(), t.allowClick = !0, t.updateContainerSize(), t.swipeDirection = void 0, 
                            t.params.threshold > 0 && (C = !1), "touchstart" !== a.type) {
                                var e = !0;
                                b(a.target).is(F) && (e = !1), document.activeElement && b(document.activeElement).is(F) && document.activeElement.blur(), 
                                e && a.preventDefault();
                            }
                            t.emit("onTouchStart", t, a);
                        }
                    }
                }
            }, t.onTouchMove = function(a) {
                if (a.originalEvent && (a = a.originalEvent), !(I && "mousemove" === a.type || a.preventedByNestedSwiper)) {
                    if (t.params.onlyExternal) return t.allowClick = !1, void (v && (t.touches.startX = t.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, 
                    t.touches.startY = t.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, 
                    y = Date.now()));
                    if (I && document.activeElement && a.target === document.activeElement && b(a.target).is(F)) return w = !0, 
                    void (t.allowClick = !1);
                    if (x && t.emit("onTouchMove", t, a), !(a.targetTouches && a.targetTouches.length > 1)) {
                        if (t.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, 
                        t.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, 
                        "undefined" == typeof z) {
                            var c = 180 * Math.atan2(Math.abs(t.touches.currentY - t.touches.startY), Math.abs(t.touches.currentX - t.touches.startX)) / Math.PI;
                            z = t.isHorizontal() ? c > t.params.touchAngle : 90 - c > t.params.touchAngle;
                        }
                        if (z && t.emit("onTouchMoveOpposite", t, a), "undefined" == typeof J && t.browser.ieTouch && (t.touches.currentX !== t.touches.startX || t.touches.currentY !== t.touches.startY) && (J = !0), 
                        v) {
                            if (z) return void (v = !1);
                            if (J || !t.browser.ieTouch) {
                                t.allowClick = !1, t.emit("onSliderMove", t, a), a.preventDefault(), t.params.touchMoveStopPropagation && !t.params.nested && a.stopPropagation(), 
                                w || (d.loop && t.fixLoop(), B = t.getWrapperTranslate(), t.setWrapperTransition(0), 
                                t.animating && t.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), 
                                t.params.autoplay && t.autoplaying && (t.params.autoplayDisableOnInteraction ? t.stopAutoplay() : t.pauseAutoplay()), 
                                E = !1, t.params.grabCursor && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grabbing", 
                                t.container[0].style.cursor = "-moz-grabbin", t.container[0].style.cursor = "grabbing")), 
                                w = !0;
                                var e = t.touches.diff = t.isHorizontal() ? t.touches.currentX - t.touches.startX : t.touches.currentY - t.touches.startY;
                                e *= t.params.touchRatio, t.rtl && (e = -e), t.swipeDirection = e > 0 ? "prev" : "next", 
                                A = e + B;
                                var f = !0;
                                if (e > 0 && A > t.minTranslate() ? (f = !1, t.params.resistance && (A = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + B + e, t.params.resistanceRatio))) : 0 > e && A < t.maxTranslate() && (f = !1, 
                                t.params.resistance && (A = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - B - e, t.params.resistanceRatio))), 
                                f && (a.preventedByNestedSwiper = !0), !t.params.allowSwipeToNext && "next" === t.swipeDirection && B > A && (A = B), 
                                !t.params.allowSwipeToPrev && "prev" === t.swipeDirection && A > B && (A = B), t.params.followFinger) {
                                    if (t.params.threshold > 0) {
                                        if (!(Math.abs(e) > t.params.threshold || C)) return void (A = B);
                                        if (!C) return C = !0, t.touches.startX = t.touches.currentX, t.touches.startY = t.touches.currentY, 
                                        A = B, void (t.touches.diff = t.isHorizontal() ? t.touches.currentX - t.touches.startX : t.touches.currentY - t.touches.startY);
                                    }
                                    (t.params.freeMode || t.params.watchSlidesProgress) && t.updateActiveIndex(), t.params.freeMode && (0 === H.length && H.push({
                                        position: t.touches[t.isHorizontal() ? "startX" : "startY"],
                                        time: y
                                    }), H.push({
                                        position: t.touches[t.isHorizontal() ? "currentX" : "currentY"],
                                        time: new window.Date().getTime()
                                    })), t.updateProgress(A), t.setWrapperTranslate(A);
                                }
                            }
                        }
                    }
                }
            }, t.onTouchEnd = function(a) {
                if (a.originalEvent && (a = a.originalEvent), x && t.emit("onTouchEnd", t, a), x = !1, 
                v) {
                    t.params.grabCursor && w && v && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grab", 
                    t.container[0].style.cursor = "-moz-grab", t.container[0].style.cursor = "grab");
                    var c = Date.now(), d = c - y;
                    if (t.allowClick && (t.updateClickedSlide(a), t.emit("onTap", t, a), 300 > d && c - G > 300 && (D && clearTimeout(D), 
                    D = setTimeout(function() {
                        t && (t.params.paginationHide && t.paginationContainer.length > 0 && !b(a.target).hasClass(t.params.bulletClass) && t.paginationContainer.toggleClass(t.params.paginationHiddenClass), 
                        t.emit("onClick", t, a));
                    }, 300)), 300 > d && 300 > c - G && (D && clearTimeout(D), t.emit("onDoubleTap", t, a))), 
                    G = Date.now(), setTimeout(function() {
                        t && (t.allowClick = !0);
                    }, 0), !v || !w || !t.swipeDirection || 0 === t.touches.diff || A === B) return void (v = w = !1);
                    v = w = !1;
                    var e;
                    if (e = t.params.followFinger ? t.rtl ? t.translate : -t.translate : -A, t.params.freeMode) {
                        if (e < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                        if (e > -t.maxTranslate()) return void (t.slides.length < t.snapGrid.length ? t.slideTo(t.snapGrid.length - 1) : t.slideTo(t.slides.length - 1));
                        if (t.params.freeModeMomentum) {
                            if (H.length > 1) {
                                var f = H.pop(), g = H.pop(), h = f.position - g.position, i = f.time - g.time;
                                t.velocity = h / i, t.velocity = t.velocity / 2, Math.abs(t.velocity) < t.params.freeModeMinimumVelocity && (t.velocity = 0), 
                                (i > 150 || new window.Date().getTime() - f.time > 300) && (t.velocity = 0);
                            } else t.velocity = 0;
                            H.length = 0;
                            var j = 1e3 * t.params.freeModeMomentumRatio, k = t.velocity * j, l = t.translate + k;
                            t.rtl && (l = -l);
                            var m, n = !1, o = 20 * Math.abs(t.velocity) * t.params.freeModeMomentumBounceRatio;
                            if (l < t.maxTranslate()) t.params.freeModeMomentumBounce ? (l + t.maxTranslate() < -o && (l = t.maxTranslate() - o), 
                            m = t.maxTranslate(), n = !0, E = !0) : l = t.maxTranslate(); else if (l > t.minTranslate()) t.params.freeModeMomentumBounce ? (l - t.minTranslate() > o && (l = t.minTranslate() + o), 
                            m = t.minTranslate(), n = !0, E = !0) : l = t.minTranslate(); else if (t.params.freeModeSticky) {
                                var p, q = 0;
                                for (q = 0; q < t.snapGrid.length; q += 1) if (t.snapGrid[q] > -l) {
                                    p = q;
                                    break;
                                }
                                l = Math.abs(t.snapGrid[p] - l) < Math.abs(t.snapGrid[p - 1] - l) || "next" === t.swipeDirection ? t.snapGrid[p] : t.snapGrid[p - 1], 
                                t.rtl || (l = -l);
                            }
                            if (0 !== t.velocity) j = t.rtl ? Math.abs((-l - t.translate) / t.velocity) : Math.abs((l - t.translate) / t.velocity); else if (t.params.freeModeSticky) return void t.slideReset();
                            t.params.freeModeMomentumBounce && n ? (t.updateProgress(m), t.setWrapperTransition(j), 
                            t.setWrapperTranslate(l), t.onTransitionStart(), t.animating = !0, t.wrapper.transitionEnd(function() {
                                t && E && (t.emit("onMomentumBounce", t), t.setWrapperTransition(t.params.speed), 
                                t.setWrapperTranslate(m), t.wrapper.transitionEnd(function() {
                                    t && t.onTransitionEnd();
                                }));
                            })) : t.velocity ? (t.updateProgress(l), t.setWrapperTransition(j), t.setWrapperTranslate(l), 
                            t.onTransitionStart(), t.animating || (t.animating = !0, t.wrapper.transitionEnd(function() {
                                t && t.onTransitionEnd();
                            }))) : t.updateProgress(l), t.updateActiveIndex();
                        }
                        return void ((!t.params.freeModeMomentum || d >= t.params.longSwipesMs) && (t.updateProgress(), 
                        t.updateActiveIndex()));
                    }
                    var r, s = 0, u = t.slidesSizesGrid[0];
                    for (r = 0; r < t.slidesGrid.length; r += t.params.slidesPerGroup) "undefined" != typeof t.slidesGrid[r + t.params.slidesPerGroup] ? e >= t.slidesGrid[r] && e < t.slidesGrid[r + t.params.slidesPerGroup] && (s = r, 
                    u = t.slidesGrid[r + t.params.slidesPerGroup] - t.slidesGrid[r]) : e >= t.slidesGrid[r] && (s = r, 
                    u = t.slidesGrid[t.slidesGrid.length - 1] - t.slidesGrid[t.slidesGrid.length - 2]);
                    var z = (e - t.slidesGrid[s]) / u;
                    if (d > t.params.longSwipesMs) {
                        if (!t.params.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (z >= t.params.longSwipesRatio ? t.slideTo(s + t.params.slidesPerGroup) : t.slideTo(s)), 
                        "prev" === t.swipeDirection && (z > 1 - t.params.longSwipesRatio ? t.slideTo(s + t.params.slidesPerGroup) : t.slideTo(s));
                    } else {
                        if (!t.params.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(s + t.params.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(s);
                    }
                }
            }, t._slideTo = function(a, b) {
                return t.slideTo(a, b, !0, !0);
            }, t.slideTo = function(a, b, c, d) {
                "undefined" == typeof c && (c = !0), "undefined" == typeof a && (a = 0), 0 > a && (a = 0), 
                t.snapIndex = Math.floor(a / t.params.slidesPerGroup), t.snapIndex >= t.snapGrid.length && (t.snapIndex = t.snapGrid.length - 1);
                var e = -t.snapGrid[t.snapIndex];
                t.params.autoplay && t.autoplaying && (d || !t.params.autoplayDisableOnInteraction ? t.pauseAutoplay(b) : t.stopAutoplay()), 
                t.updateProgress(e);
                for (var f = 0; f < t.slidesGrid.length; f++) -Math.floor(100 * e) >= Math.floor(100 * t.slidesGrid[f]) && (a = f);
                return !t.params.allowSwipeToNext && e < t.translate && e < t.minTranslate() ? !1 : !t.params.allowSwipeToPrev && e > t.translate && e > t.maxTranslate() && (t.activeIndex || 0) !== a ? !1 : ("undefined" == typeof b && (b = t.params.speed), 
                t.previousIndex = t.activeIndex || 0, t.activeIndex = a, t.rtl && -e === t.translate || !t.rtl && e === t.translate ? (t.params.autoHeight && t.updateAutoHeight(), 
                t.updateClasses(), "slide" !== t.params.effect && t.setWrapperTranslate(e), !1) : (t.updateClasses(), 
                t.onTransitionStart(c), 0 === b ? (t.setWrapperTranslate(e), t.setWrapperTransition(0), 
                t.onTransitionEnd(c)) : (t.setWrapperTranslate(e), t.setWrapperTransition(b), t.animating || (t.animating = !0, 
                t.wrapper.transitionEnd(function() {
                    t && t.onTransitionEnd(c);
                }))), !0));
            }, t.onTransitionStart = function(a) {
                "undefined" == typeof a && (a = !0), t.params.autoHeight && t.updateAutoHeight(), 
                t.lazy && t.lazy.onTransitionStart(), a && (t.emit("onTransitionStart", t), t.activeIndex !== t.previousIndex && (t.emit("onSlideChangeStart", t), 
                t.activeIndex > t.previousIndex ? t.emit("onSlideNextStart", t) : t.emit("onSlidePrevStart", t)));
            }, t.onTransitionEnd = function(a) {
                t.animating = !1, t.setWrapperTransition(0), "undefined" == typeof a && (a = !0), 
                t.lazy && t.lazy.onTransitionEnd(), a && (t.emit("onTransitionEnd", t), t.activeIndex !== t.previousIndex && (t.emit("onSlideChangeEnd", t), 
                t.activeIndex > t.previousIndex ? t.emit("onSlideNextEnd", t) : t.emit("onSlidePrevEnd", t))), 
                t.params.hashnav && t.hashnav && t.hashnav.setHash();
            }, t.slideNext = function(a, b, c) {
                return t.params.loop ? t.animating ? !1 : (t.fixLoop(), t.container[0].clientLeft, 
                t.slideTo(t.activeIndex + t.params.slidesPerGroup, b, a, c)) : t.slideTo(t.activeIndex + t.params.slidesPerGroup, b, a, c);
            }, t._slideNext = function(a) {
                return t.slideNext(!0, a, !0);
            }, t.slidePrev = function(a, b, c) {
                return t.params.loop ? t.animating ? !1 : (t.fixLoop(), t.container[0].clientLeft, 
                t.slideTo(t.activeIndex - 1, b, a, c)) : t.slideTo(t.activeIndex - 1, b, a, c);
            }, t._slidePrev = function(a) {
                return t.slidePrev(!0, a, !0);
            }, t.slideReset = function(a, b, c) {
                return t.slideTo(t.activeIndex, b, a);
            }, t.setWrapperTransition = function(a, b) {
                t.wrapper.transition(a), "slide" !== t.params.effect && t.effects[t.params.effect] && t.effects[t.params.effect].setTransition(a), 
                t.params.parallax && t.parallax && t.parallax.setTransition(a), t.params.scrollbar && t.scrollbar && t.scrollbar.setTransition(a), 
                t.params.control && t.controller && t.controller.setTransition(a, b), t.emit("onSetTransition", t, a);
            }, t.setWrapperTranslate = function(a, b, c) {
                var d = 0, f = 0, g = 0;
                t.isHorizontal() ? d = t.rtl ? -a : a : f = a, t.params.roundLengths && (d = e(d), 
                f = e(f)), t.params.virtualTranslate || (t.support.transforms3d ? t.wrapper.transform("translate3d(" + d + "px, " + f + "px, " + g + "px)") : t.wrapper.transform("translate(" + d + "px, " + f + "px)")), 
                t.translate = t.isHorizontal() ? d : f;
                var h, i = t.maxTranslate() - t.minTranslate();
                h = 0 === i ? 0 : (a - t.minTranslate()) / i, h !== t.progress && t.updateProgress(a), 
                b && t.updateActiveIndex(), "slide" !== t.params.effect && t.effects[t.params.effect] && t.effects[t.params.effect].setTranslate(t.translate), 
                t.params.parallax && t.parallax && t.parallax.setTranslate(t.translate), t.params.scrollbar && t.scrollbar && t.scrollbar.setTranslate(t.translate), 
                t.params.control && t.controller && t.controller.setTranslate(t.translate, c), t.emit("onSetTranslate", t, t.translate);
            }, t.getTranslate = function(a, b) {
                var c, d, e, f;
                return "undefined" == typeof b && (b = "x"), t.params.virtualTranslate ? t.rtl ? -t.translate : t.translate : (e = window.getComputedStyle(a, null), 
                window.WebKitCSSMatrix ? (d = e.transform || e.webkitTransform, d.split(",").length > 6 && (d = d.split(", ").map(function(a) {
                    return a.replace(",", ".");
                }).join(", ")), f = new window.WebKitCSSMatrix("none" === d ? "" : d)) : (f = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), 
                c = f.toString().split(",")), "x" === b && (d = window.WebKitCSSMatrix ? f.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), 
                "y" === b && (d = window.WebKitCSSMatrix ? f.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), 
                t.rtl && d && (d = -d), d || 0);
            }, t.getWrapperTranslate = function(a) {
                return "undefined" == typeof a && (a = t.isHorizontal() ? "x" : "y"), t.getTranslate(t.wrapper[0], a);
            }, t.observers = [], t.initObservers = function() {
                if (t.params.observeParents) for (var a = t.container.parents(), b = 0; b < a.length; b++) h(a[b]);
                h(t.container[0], {
                    childList: !1
                }), h(t.wrapper[0], {
                    attributes: !1
                });
            }, t.disconnectObservers = function() {
                for (var a = 0; a < t.observers.length; a++) t.observers[a].disconnect();
                t.observers = [];
            }, t.createLoop = function() {
                t.wrapper.children("." + t.params.slideClass + "." + t.params.slideDuplicateClass).remove();
                var a = t.wrapper.children("." + t.params.slideClass);
                "auto" !== t.params.slidesPerView || t.params.loopedSlides || (t.params.loopedSlides = a.length), 
                t.loopedSlides = parseInt(t.params.loopedSlides || t.params.slidesPerView, 10), 
                t.loopedSlides = t.loopedSlides + t.params.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length);
                var c, d = [], e = [];
                for (a.each(function(c, f) {
                    var g = b(this);
                    c < t.loopedSlides && e.push(f), c < a.length && c >= a.length - t.loopedSlides && d.push(f), 
                    g.attr("data-swiper-slide-index", c);
                }), c = 0; c < e.length; c++) t.wrapper.append(b(e[c].cloneNode(!0)).addClass(t.params.slideDuplicateClass));
                for (c = d.length - 1; c >= 0; c--) t.wrapper.prepend(b(d[c].cloneNode(!0)).addClass(t.params.slideDuplicateClass));
            }, t.destroyLoop = function() {
                t.wrapper.children("." + t.params.slideClass + "." + t.params.slideDuplicateClass).remove(), 
                t.slides.removeAttr("data-swiper-slide-index");
            }, t.fixLoop = function() {
                var a;
                t.activeIndex < t.loopedSlides ? (a = t.slides.length - 3 * t.loopedSlides + t.activeIndex, 
                a += t.loopedSlides, t.slideTo(a, 0, !1, !0)) : ("auto" === t.params.slidesPerView && t.activeIndex >= 2 * t.loopedSlides || t.activeIndex > t.slides.length - 2 * t.params.slidesPerView) && (a = -t.slides.length + t.activeIndex + t.loopedSlides, 
                a += t.loopedSlides, t.slideTo(a, 0, !1, !0));
            }, t.appendSlide = function(a) {
                if (t.params.loop && t.destroyLoop(), "object" == typeof a && a.length) for (var b = 0; b < a.length; b++) a[b] && t.wrapper.append(a[b]); else t.wrapper.append(a);
                t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0);
            }, t.prependSlide = function(a) {
                t.params.loop && t.destroyLoop();
                var b = t.activeIndex + 1;
                if ("object" == typeof a && a.length) {
                    for (var c = 0; c < a.length; c++) a[c] && t.wrapper.prepend(a[c]);
                    b = t.activeIndex + a.length;
                } else t.wrapper.prepend(a);
                t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0), 
                t.slideTo(b, 0, !1);
            }, t.removeSlide = function(a) {
                t.params.loop && (t.destroyLoop(), t.slides = t.wrapper.children("." + t.params.slideClass));
                var b, c = t.activeIndex;
                if ("object" == typeof a && a.length) {
                    for (var d = 0; d < a.length; d++) b = a[d], t.slides[b] && t.slides.eq(b).remove(), 
                    c > b && c--;
                    c = Math.max(c, 0);
                } else b = a, t.slides[b] && t.slides.eq(b).remove(), c > b && c--, c = Math.max(c, 0);
                t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0), 
                t.params.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1);
            }, t.removeAllSlides = function() {
                for (var a = [], b = 0; b < t.slides.length; b++) a.push(b);
                t.removeSlide(a);
            }, t.effects = {
                fade: {
                    setTranslate: function() {
                        for (var a = 0; a < t.slides.length; a++) {
                            var b = t.slides.eq(a), c = b[0].swiperSlideOffset, d = -c;
                            t.params.virtualTranslate || (d -= t.translate);
                            var e = 0;
                            t.isHorizontal() || (e = d, d = 0);
                            var f = t.params.fade.crossFade ? Math.max(1 - Math.abs(b[0].progress), 0) : 1 + Math.min(Math.max(b[0].progress, -1), 0);
                            b.css({
                                opacity: f
                            }).transform("translate3d(" + d + "px, " + e + "px, 0px)");
                        }
                    },
                    setTransition: function(a) {
                        if (t.slides.transition(a), t.params.virtualTranslate && 0 !== a) {
                            var b = !1;
                            t.slides.transitionEnd(function() {
                                if (!b && t) {
                                    b = !0, t.animating = !1;
                                    for (var a = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], c = 0; c < a.length; c++) t.wrapper.trigger(a[c]);
                                }
                            });
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var a = 0; a < t.slides.length; a++) {
                            var c = t.slides.eq(a), d = c[0].progress;
                            t.params.flip.limitRotation && (d = Math.max(Math.min(c[0].progress, 1), -1));
                            var e = c[0].swiperSlideOffset, f = -180 * d, g = f, h = 0, i = -e, j = 0;
                            if (t.isHorizontal() ? t.rtl && (g = -g) : (j = i, i = 0, h = -g, g = 0), c[0].style.zIndex = -Math.abs(Math.round(d)) + t.slides.length, 
                            t.params.flip.slideShadows) {
                                var k = t.isHorizontal() ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top"), l = t.isHorizontal() ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
                                0 === k.length && (k = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), 
                                c.append(k)), 0 === l.length && (l = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                c.append(l)), k.length && (k[0].style.opacity = Math.max(-d, 0)), l.length && (l[0].style.opacity = Math.max(d, 0));
                            }
                            c.transform("translate3d(" + i + "px, " + j + "px, 0px) rotateX(" + h + "deg) rotateY(" + g + "deg)");
                        }
                    },
                    setTransition: function(a) {
                        if (t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), 
                        t.params.virtualTranslate && 0 !== a) {
                            var c = !1;
                            t.slides.eq(t.activeIndex).transitionEnd(function() {
                                if (!c && t && b(this).hasClass(t.params.slideActiveClass)) {
                                    c = !0, t.animating = !1;
                                    for (var a = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], d = 0; d < a.length; d++) t.wrapper.trigger(a[d]);
                                }
                            });
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var a, c = 0;
                        t.params.cube.shadow && (t.isHorizontal() ? (a = t.wrapper.find(".swiper-cube-shadow"), 
                        0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), t.wrapper.append(a)), 
                        a.css({
                            height: t.width + "px"
                        })) : (a = t.container.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), 
                        t.container.append(a))));
                        for (var d = 0; d < t.slides.length; d++) {
                            var e = t.slides.eq(d), f = 90 * d, g = Math.floor(f / 360);
                            t.rtl && (f = -f, g = Math.floor(-f / 360));
                            var h = Math.max(Math.min(e[0].progress, 1), -1), i = 0, j = 0, k = 0;
                            d % 4 === 0 ? (i = 4 * -g * t.size, k = 0) : (d - 1) % 4 === 0 ? (i = 0, k = 4 * -g * t.size) : (d - 2) % 4 === 0 ? (i = t.size + 4 * g * t.size, 
                            k = t.size) : (d - 3) % 4 === 0 && (i = -t.size, k = 3 * t.size + 4 * t.size * g), 
                            t.rtl && (i = -i), t.isHorizontal() || (j = i, i = 0);
                            var l = "rotateX(" + (t.isHorizontal() ? 0 : -f) + "deg) rotateY(" + (t.isHorizontal() ? f : 0) + "deg) translate3d(" + i + "px, " + j + "px, " + k + "px)";
                            if (1 >= h && h > -1 && (c = 90 * d + 90 * h, t.rtl && (c = 90 * -d - 90 * h)), 
                            e.transform(l), t.params.cube.slideShadows) {
                                var m = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"), n = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                                0 === m.length && (m = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), 
                                e.append(m)), 0 === n.length && (n = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                e.append(n)), m.length && (m[0].style.opacity = Math.max(-h, 0)), n.length && (n[0].style.opacity = Math.max(h, 0));
                            }
                        }
                        if (t.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + t.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + t.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + t.size / 2 + "px",
                            "transform-origin": "50% 50% -" + t.size / 2 + "px"
                        }), t.params.cube.shadow) if (t.isHorizontal()) a.transform("translate3d(0px, " + (t.width / 2 + t.params.cube.shadowOffset) + "px, " + -t.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + t.params.cube.shadowScale + ")"); else {
                            var o = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90), p = 1.5 - (Math.sin(2 * o * Math.PI / 360) / 2 + Math.cos(2 * o * Math.PI / 360) / 2), q = t.params.cube.shadowScale, r = t.params.cube.shadowScale / p, s = t.params.cube.shadowOffset;
                            a.transform("scale3d(" + q + ", 1, " + r + ") translate3d(0px, " + (t.height / 2 + s) + "px, " + -t.height / 2 / r + "px) rotateX(-90deg)");
                        }
                        var u = t.isSafari || t.isUiWebView ? -t.size / 2 : 0;
                        t.wrapper.transform("translate3d(0px,0," + u + "px) rotateX(" + (t.isHorizontal() ? 0 : c) + "deg) rotateY(" + (t.isHorizontal() ? -c : 0) + "deg)");
                    },
                    setTransition: function(a) {
                        t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), 
                        t.params.cube.shadow && !t.isHorizontal() && t.container.find(".swiper-cube-shadow").transition(a);
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var a = t.translate, c = t.isHorizontal() ? -a + t.width / 2 : -a + t.height / 2, d = t.isHorizontal() ? t.params.coverflow.rotate : -t.params.coverflow.rotate, e = t.params.coverflow.depth, f = 0, g = t.slides.length; g > f; f++) {
                            var h = t.slides.eq(f), i = t.slidesSizesGrid[f], j = h[0].swiperSlideOffset, k = (c - j - i / 2) / i * t.params.coverflow.modifier, l = t.isHorizontal() ? d * k : 0, m = t.isHorizontal() ? 0 : d * k, n = -e * Math.abs(k), o = t.isHorizontal() ? 0 : t.params.coverflow.stretch * k, p = t.isHorizontal() ? t.params.coverflow.stretch * k : 0;
                            Math.abs(p) < .001 && (p = 0), Math.abs(o) < .001 && (o = 0), Math.abs(n) < .001 && (n = 0), 
                            Math.abs(l) < .001 && (l = 0), Math.abs(m) < .001 && (m = 0);
                            var q = "translate3d(" + p + "px," + o + "px," + n + "px)  rotateX(" + m + "deg) rotateY(" + l + "deg)";
                            if (h.transform(q), h[0].style.zIndex = -Math.abs(Math.round(k)) + 1, t.params.coverflow.slideShadows) {
                                var r = t.isHorizontal() ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"), s = t.isHorizontal() ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                                0 === r.length && (r = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), 
                                h.append(r)), 0 === s.length && (s = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                h.append(s)), r.length && (r[0].style.opacity = k > 0 ? k : 0), s.length && (s[0].style.opacity = -k > 0 ? -k : 0);
                            }
                        }
                        if (t.browser.ie) {
                            var u = t.wrapper[0].style;
                            u.perspectiveOrigin = c + "px 50%";
                        }
                    },
                    setTransition: function(a) {
                        t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a);
                    }
                }
            }, t.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(a, c) {
                    if ("undefined" != typeof a && ("undefined" == typeof c && (c = !0), 0 !== t.slides.length)) {
                        var d = t.slides.eq(a), e = d.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                        !d.hasClass("swiper-lazy") || d.hasClass("swiper-lazy-loaded") || d.hasClass("swiper-lazy-loading") || (e = e.add(d[0])), 
                        0 !== e.length && e.each(function() {
                            var a = b(this);
                            a.addClass("swiper-lazy-loading");
                            var e = a.attr("data-background"), f = a.attr("data-src"), g = a.attr("data-srcset");
                            t.loadImage(a[0], f || e, g, !1, function() {
                                if (e ? (a.css("background-image", "url(" + e + ")"), a.removeAttr("data-background")) : (g && (a.attr("srcset", g), 
                                a.removeAttr("data-srcset")), f && (a.attr("src", f), a.removeAttr("data-src"))), 
                                a.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), d.find(".swiper-lazy-preloader, .preloader").remove(), 
                                t.params.loop && c) {
                                    var b = d.attr("data-swiper-slide-index");
                                    if (d.hasClass(t.params.slideDuplicateClass)) {
                                        var h = t.wrapper.children('[data-swiper-slide-index="' + b + '"]:not(.' + t.params.slideDuplicateClass + ")");
                                        t.lazy.loadImageInSlide(h.index(), !1);
                                    } else {
                                        var i = t.wrapper.children("." + t.params.slideDuplicateClass + '[data-swiper-slide-index="' + b + '"]');
                                        t.lazy.loadImageInSlide(i.index(), !1);
                                    }
                                }
                                t.emit("onLazyImageReady", t, d[0], a[0]);
                            }), t.emit("onLazyImageLoad", t, d[0], a[0]);
                        });
                    }
                },
                load: function() {
                    var a;
                    if (t.params.watchSlidesVisibility) t.wrapper.children("." + t.params.slideVisibleClass).each(function() {
                        t.lazy.loadImageInSlide(b(this).index());
                    }); else if (t.params.slidesPerView > 1) for (a = t.activeIndex; a < t.activeIndex + t.params.slidesPerView; a++) t.slides[a] && t.lazy.loadImageInSlide(a); else t.lazy.loadImageInSlide(t.activeIndex);
                    if (t.params.lazyLoadingInPrevNext) if (t.params.slidesPerView > 1 || t.params.lazyLoadingInPrevNextAmount && t.params.lazyLoadingInPrevNextAmount > 1) {
                        var c = t.params.lazyLoadingInPrevNextAmount, d = t.params.slidesPerView, e = Math.min(t.activeIndex + d + Math.max(c, d), t.slides.length), f = Math.max(t.activeIndex - Math.max(d, c), 0);
                        for (a = t.activeIndex + t.params.slidesPerView; e > a; a++) t.slides[a] && t.lazy.loadImageInSlide(a);
                        for (a = f; a < t.activeIndex; a++) t.slides[a] && t.lazy.loadImageInSlide(a);
                    } else {
                        var g = t.wrapper.children("." + t.params.slideNextClass);
                        g.length > 0 && t.lazy.loadImageInSlide(g.index());
                        var h = t.wrapper.children("." + t.params.slidePrevClass);
                        h.length > 0 && t.lazy.loadImageInSlide(h.index());
                    }
                },
                onTransitionStart: function() {
                    t.params.lazyLoading && (t.params.lazyLoadingOnTransitionStart || !t.params.lazyLoadingOnTransitionStart && !t.lazy.initialImageLoaded) && t.lazy.load();
                },
                onTransitionEnd: function() {
                    t.params.lazyLoading && !t.params.lazyLoadingOnTransitionStart && t.lazy.load();
                }
            }, t.scrollbar = {
                isTouched: !1,
                setDragPosition: function(a) {
                    var b = t.scrollbar, c = t.isHorizontal() ? "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX || a.clientX : "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY || a.clientY, d = c - b.track.offset()[t.isHorizontal() ? "left" : "top"] - b.dragSize / 2, e = -t.minTranslate() * b.moveDivider, f = -t.maxTranslate() * b.moveDivider;
                    e > d ? d = e : d > f && (d = f), d = -d / b.moveDivider, t.updateProgress(d), t.setWrapperTranslate(d, !0);
                },
                dragStart: function(a) {
                    var b = t.scrollbar;
                    b.isTouched = !0, a.preventDefault(), a.stopPropagation(), b.setDragPosition(a), 
                    clearTimeout(b.dragTimeout), b.track.transition(0), t.params.scrollbarHide && b.track.css("opacity", 1), 
                    t.wrapper.transition(100), b.drag.transition(100), t.emit("onScrollbarDragStart", t);
                },
                dragMove: function(a) {
                    var b = t.scrollbar;
                    b.isTouched && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.setDragPosition(a), 
                    t.wrapper.transition(0), b.track.transition(0), b.drag.transition(0), t.emit("onScrollbarDragMove", t));
                },
                dragEnd: function(a) {
                    var b = t.scrollbar;
                    b.isTouched && (b.isTouched = !1, t.params.scrollbarHide && (clearTimeout(b.dragTimeout), 
                    b.dragTimeout = setTimeout(function() {
                        b.track.css("opacity", 0), b.track.transition(400);
                    }, 1e3)), t.emit("onScrollbarDragEnd", t), t.params.scrollbarSnapOnRelease && t.slideReset());
                },
                enableDraggable: function() {
                    var a = t.scrollbar, c = t.support.touch ? a.track : document;
                    b(a.track).on(t.touchEvents.start, a.dragStart), b(c).on(t.touchEvents.move, a.dragMove), 
                    b(c).on(t.touchEvents.end, a.dragEnd);
                },
                disableDraggable: function() {
                    var a = t.scrollbar, c = t.support.touch ? a.track : document;
                    b(a.track).off(t.touchEvents.start, a.dragStart), b(c).off(t.touchEvents.move, a.dragMove), 
                    b(c).off(t.touchEvents.end, a.dragEnd);
                },
                set: function() {
                    if (t.params.scrollbar) {
                        var a = t.scrollbar;
                        a.track = b(t.params.scrollbar), a.drag = a.track.find(".swiper-scrollbar-drag"), 
                        0 === a.drag.length && (a.drag = b('<div class="swiper-scrollbar-drag"></div>'), 
                        a.track.append(a.drag)), a.drag[0].style.width = "", a.drag[0].style.height = "", 
                        a.trackSize = t.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight, 
                        a.divider = t.size / t.virtualSize, a.moveDivider = a.divider * (a.trackSize / t.size), 
                        a.dragSize = a.trackSize * a.divider, t.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px", 
                        a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "", 
                        t.params.scrollbarHide && (a.track[0].style.opacity = 0);
                    }
                },
                setTranslate: function() {
                    if (t.params.scrollbar) {
                        var a, b = t.scrollbar, c = (t.translate || 0, b.dragSize);
                        a = (b.trackSize - b.dragSize) * t.progress, t.rtl && t.isHorizontal() ? (a = -a, 
                        a > 0 ? (c = b.dragSize - a, a = 0) : -a + b.dragSize > b.trackSize && (c = b.trackSize + a)) : 0 > a ? (c = b.dragSize + a, 
                        a = 0) : a + b.dragSize > b.trackSize && (c = b.trackSize - a), t.isHorizontal() ? (t.support.transforms3d ? b.drag.transform("translate3d(" + a + "px, 0, 0)") : b.drag.transform("translateX(" + a + "px)"), 
                        b.drag[0].style.width = c + "px") : (t.support.transforms3d ? b.drag.transform("translate3d(0px, " + a + "px, 0)") : b.drag.transform("translateY(" + a + "px)"), 
                        b.drag[0].style.height = c + "px"), t.params.scrollbarHide && (clearTimeout(b.timeout), 
                        b.track[0].style.opacity = 1, b.timeout = setTimeout(function() {
                            b.track[0].style.opacity = 0, b.track.transition(400);
                        }, 1e3));
                    }
                },
                setTransition: function(a) {
                    t.params.scrollbar && t.scrollbar.drag.transition(a);
                }
            }, t.controller = {
                LinearSpline: function(a, b) {
                    this.x = a, this.y = b, this.lastIndex = a.length - 1;
                    var c, d;
                    this.x.length, this.interpolate = function(a) {
                        return a ? (d = e(this.x, a), c = d - 1, (a - this.x[c]) * (this.y[d] - this.y[c]) / (this.x[d] - this.x[c]) + this.y[c]) : 0;
                    };
                    var e = function() {
                        var a, b, c;
                        return function(d, e) {
                            for (b = -1, a = d.length; a - b > 1; ) d[c = a + b >> 1] <= e ? b = c : a = c;
                            return a;
                        };
                    }();
                },
                getInterpolateFunction: function(a) {
                    t.controller.spline || (t.controller.spline = t.params.loop ? new t.controller.LinearSpline(t.slidesGrid, a.slidesGrid) : new t.controller.LinearSpline(t.snapGrid, a.snapGrid));
                },
                setTranslate: function(a, b) {
                    function d(b) {
                        a = b.rtl && "horizontal" === b.params.direction ? -t.translate : t.translate, "slide" === t.params.controlBy && (t.controller.getInterpolateFunction(b), 
                        f = -t.controller.spline.interpolate(-a)), f && "container" !== t.params.controlBy || (e = (b.maxTranslate() - b.minTranslate()) / (t.maxTranslate() - t.minTranslate()), 
                        f = (a - t.minTranslate()) * e + b.minTranslate()), t.params.controlInverse && (f = b.maxTranslate() - f), 
                        b.updateProgress(f), b.setWrapperTranslate(f, !1, t), b.updateActiveIndex();
                    }
                    var e, f, g = t.params.control;
                    if (t.isArray(g)) for (var h = 0; h < g.length; h++) g[h] !== b && g[h] instanceof c && d(g[h]); else g instanceof c && b !== g && d(g);
                },
                setTransition: function(a, b) {
                    function d(b) {
                        b.setWrapperTransition(a, t), 0 !== a && (b.onTransitionStart(), b.wrapper.transitionEnd(function() {
                            f && (b.params.loop && "slide" === t.params.controlBy && b.fixLoop(), b.onTransitionEnd());
                        }));
                    }
                    var e, f = t.params.control;
                    if (t.isArray(f)) for (e = 0; e < f.length; e++) f[e] !== b && f[e] instanceof c && d(f[e]); else f instanceof c && b !== f && d(f);
                }
            }, t.hashnav = {
                init: function() {
                    if (t.params.hashnav) {
                        t.hashnav.initialized = !0;
                        var a = document.location.hash.replace("#", "");
                        if (a) for (var b = 0, c = 0, d = t.slides.length; d > c; c++) {
                            var e = t.slides.eq(c), f = e.attr("data-hash");
                            if (f === a && !e.hasClass(t.params.slideDuplicateClass)) {
                                var g = e.index();
                                t.slideTo(g, b, t.params.runCallbacksOnInit, !0);
                            }
                        }
                    }
                },
                setHash: function() {
                    t.hashnav.initialized && t.params.hashnav && (document.location.hash = t.slides.eq(t.activeIndex).attr("data-hash") || "");
                }
            }, t.disableKeyboardControl = function() {
                t.params.keyboardControl = !1, b(document).off("keydown", i);
            }, t.enableKeyboardControl = function() {
                t.params.keyboardControl = !0, b(document).on("keydown", i);
            }, t.mousewheel = {
                event: !1,
                lastScrollTime: new window.Date().getTime()
            }, t.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"), t.mousewheel.event = "wheel";
                } catch (K) {}
                t.mousewheel.event || void 0 === document.onmousewheel || (t.mousewheel.event = "mousewheel"), 
                t.mousewheel.event || (t.mousewheel.event = "DOMMouseScroll");
            }
            t.disableMousewheelControl = function() {
                return t.mousewheel.event ? (t.container.off(t.mousewheel.event, j), !0) : !1;
            }, t.enableMousewheelControl = function() {
                return t.mousewheel.event ? (t.container.on(t.mousewheel.event, j), !0) : !1;
            }, t.parallax = {
                setTranslate: function() {
                    t.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        k(this, t.progress);
                    }), t.slides.each(function() {
                        var a = b(this);
                        a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var b = Math.min(Math.max(a[0].progress, -1), 1);
                            k(this, b);
                        });
                    });
                },
                setTransition: function(a) {
                    "undefined" == typeof a && (a = t.params.speed), t.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var c = b(this), d = parseInt(c.attr("data-swiper-parallax-duration"), 10) || a;
                        0 === a && (d = 0), c.transition(d);
                    });
                }
            }, t._plugins = [];
            for (var L in t.plugins) {
                var M = t.plugins[L](t, t.params[L]);
                M && t._plugins.push(M);
            }
            return t.callPlugins = function(a) {
                for (var b = 0; b < t._plugins.length; b++) a in t._plugins[b] && t._plugins[b][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }, t.emitterEventListeners = {}, t.emit = function(a) {
                t.params[a] && t.params[a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var b;
                if (t.emitterEventListeners[a]) for (b = 0; b < t.emitterEventListeners[a].length; b++) t.emitterEventListeners[a][b](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                t.callPlugins && t.callPlugins(a, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }, t.on = function(a, b) {
                return a = l(a), t.emitterEventListeners[a] || (t.emitterEventListeners[a] = []), 
                t.emitterEventListeners[a].push(b), t;
            }, t.off = function(a, b) {
                var c;
                if (a = l(a), "undefined" == typeof b) return t.emitterEventListeners[a] = [], t;
                if (t.emitterEventListeners[a] && 0 !== t.emitterEventListeners[a].length) {
                    for (c = 0; c < t.emitterEventListeners[a].length; c++) t.emitterEventListeners[a][c] === b && t.emitterEventListeners[a].splice(c, 1);
                    return t;
                }
            }, t.once = function(a, b) {
                a = l(a);
                var c = function() {
                    b(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), t.off(a, c);
                };
                return t.on(a, c), t;
            }, t.a11y = {
                makeFocusable: function(a) {
                    return a.attr("tabIndex", "0"), a;
                },
                addRole: function(a, b) {
                    return a.attr("role", b), a;
                },
                addLabel: function(a, b) {
                    return a.attr("aria-label", b), a;
                },
                disable: function(a) {
                    return a.attr("aria-disabled", !0), a;
                },
                enable: function(a) {
                    return a.attr("aria-disabled", !1), a;
                },
                onEnterKey: function(a) {
                    13 === a.keyCode && (b(a.target).is(t.params.nextButton) ? (t.onClickNext(a), t.isEnd ? t.a11y.notify(t.params.lastSlideMessage) : t.a11y.notify(t.params.nextSlideMessage)) : b(a.target).is(t.params.prevButton) && (t.onClickPrev(a), 
                    t.isBeginning ? t.a11y.notify(t.params.firstSlideMessage) : t.a11y.notify(t.params.prevSlideMessage)), 
                    b(a.target).is("." + t.params.bulletClass) && b(a.target)[0].click());
                },
                liveRegion: b('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(a) {
                    var b = t.a11y.liveRegion;
                    0 !== b.length && (b.html(""), b.html(a));
                },
                init: function() {
                    if (t.params.nextButton) {
                        var a = b(t.params.nextButton);
                        t.a11y.makeFocusable(a), t.a11y.addRole(a, "button"), t.a11y.addLabel(a, t.params.nextSlideMessage);
                    }
                    if (t.params.prevButton) {
                        var c = b(t.params.prevButton);
                        t.a11y.makeFocusable(c), t.a11y.addRole(c, "button"), t.a11y.addLabel(c, t.params.prevSlideMessage);
                    }
                    b(t.container).append(t.a11y.liveRegion);
                },
                initPagination: function() {
                    t.params.pagination && t.params.paginationClickable && t.bullets && t.bullets.length && t.bullets.each(function() {
                        var a = b(this);
                        t.a11y.makeFocusable(a), t.a11y.addRole(a, "button"), t.a11y.addLabel(a, t.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
                    });
                },
                destroy: function() {
                    t.a11y.liveRegion && t.a11y.liveRegion.length > 0 && t.a11y.liveRegion.remove();
                }
            }, t.init = function() {
                t.params.loop && t.createLoop(), t.updateContainerSize(), t.updateSlidesSize(), 
                t.updatePagination(), t.params.scrollbar && t.scrollbar && (t.scrollbar.set(), t.params.scrollbarDraggable && t.scrollbar.enableDraggable()), 
                "slide" !== t.params.effect && t.effects[t.params.effect] && (t.params.loop || t.updateProgress(), 
                t.effects[t.params.effect].setTranslate()), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : (t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), 
                0 === t.params.initialSlide && (t.parallax && t.params.parallax && t.parallax.setTranslate(), 
                t.lazy && t.params.lazyLoading && (t.lazy.load(), t.lazy.initialImageLoaded = !0))), 
                t.attachEvents(), t.params.observer && t.support.observer && t.initObservers(), 
                t.params.preloadImages && !t.params.lazyLoading && t.preloadImages(), t.params.autoplay && t.startAutoplay(), 
                t.params.keyboardControl && t.enableKeyboardControl && t.enableKeyboardControl(), 
                t.params.mousewheelControl && t.enableMousewheelControl && t.enableMousewheelControl(), 
                t.params.hashnav && t.hashnav && t.hashnav.init(), t.params.a11y && t.a11y && t.a11y.init(), 
                t.emit("onInit", t);
            }, t.cleanupStyles = function() {
                t.container.removeClass(t.classNames.join(" ")).removeAttr("style"), t.wrapper.removeAttr("style"), 
                t.slides && t.slides.length && t.slides.removeClass([ t.params.slideVisibleClass, t.params.slideActiveClass, t.params.slideNextClass, t.params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), 
                t.paginationContainer && t.paginationContainer.length && t.paginationContainer.removeClass(t.params.paginationHiddenClass), 
                t.bullets && t.bullets.length && t.bullets.removeClass(t.params.bulletActiveClass), 
                t.params.prevButton && b(t.params.prevButton).removeClass(t.params.buttonDisabledClass), 
                t.params.nextButton && b(t.params.nextButton).removeClass(t.params.buttonDisabledClass), 
                t.params.scrollbar && t.scrollbar && (t.scrollbar.track && t.scrollbar.track.length && t.scrollbar.track.removeAttr("style"), 
                t.scrollbar.drag && t.scrollbar.drag.length && t.scrollbar.drag.removeAttr("style"));
            }, t.destroy = function(a, b) {
                t.detachEvents(), t.stopAutoplay(), t.params.scrollbar && t.scrollbar && t.params.scrollbarDraggable && t.scrollbar.disableDraggable(), 
                t.params.loop && t.destroyLoop(), b && t.cleanupStyles(), t.disconnectObservers(), 
                t.params.keyboardControl && t.disableKeyboardControl && t.disableKeyboardControl(), 
                t.params.mousewheelControl && t.disableMousewheelControl && t.disableMousewheelControl(), 
                t.params.a11y && t.a11y && t.a11y.destroy(), t.emit("onDestroy"), a !== !1 && (t = null);
            }, t.init(), t;
        }
    };
    c.prototype = {
        isSafari: function() {
            var a = navigator.userAgent.toLowerCase();
            return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0;
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(a) {
            return "[object Array]" === Object.prototype.toString.apply(a);
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var a = navigator.userAgent, b = a.match(/(Android);?[\s\/]+([\d.]+)?/), c = a.match(/(iPad).*OS\s([\d_]+)/), d = a.match(/(iPod)(.*OS\s([\d_]+))?/), e = !c && a.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: c || e || d,
                android: b
            };
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var a = document.createElement("div").style;
                return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a;
            }(),
            flexbox: function() {
                for (var a = document.createElement("div").style, b = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), c = 0; c < b.length; c++) if (b[c] in a) return !0;
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window;
            }()
        },
        plugins: {}
    };
    for (var d = [ "jQuery", "Zepto", "Dom7" ], e = 0; e < d.length; e++) window[d[e]] && a(window[d[e]]);
    var f;
    f = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, 
    f && ("transitionEnd" in f.fn || (f.fn.transitionEnd = function(a) {
        function b(f) {
            if (f.target === this) for (a.call(this, f), c = 0; c < d.length; c++) e.off(d[c], b);
        }
        var c, d = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], e = this;
        if (a) for (c = 0; c < d.length; c++) e.on(d[c], b);
        return this;
    }), "transform" in f.fn || (f.fn.transform = function(a) {
        for (var b = 0; b < this.length; b++) {
            var c = this[b].style;
            c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a;
        }
        return this;
    }), "transition" in f.fn || (f.fn.transition = function(a) {
        "string" != typeof a && (a += "ms");
        for (var b = 0; b < this.length; b++) {
            var c = this[b].style;
            c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a;
        }
        return this;
    })), window.Swiper = c;
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper;
});

var mejs = mejs || {};

mejs.version = "2.19.0", mejs.meIndex = 0, mejs.plugins = {
    silverlight: [ {
        version: [ 3, 0 ],
        types: [ "video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg" ]
    } ],
    flash: [ {
        version: [ 9, 0, 124 ],
        types: [ "video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL" ]
    } ],
    youtube: [ {
        version: null,
        types: [ "video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube" ]
    } ],
    vimeo: [ {
        version: null,
        types: [ "video/vimeo", "video/x-vimeo" ]
    } ]
}, mejs.Utility = {
    encodeUrl: function(a) {
        return encodeURIComponent(a);
    },
    escapeHTML: function(a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;");
    },
    absolutizeUrl: function(a) {
        var b = document.createElement("div");
        return b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>', b.firstChild.href;
    },
    getScriptPath: function(a) {
        for (var b, c, d, e, f, g, h = 0, i = "", j = "", k = document.getElementsByTagName("script"), l = k.length, m = a.length; l > h; h++) {
            for (e = k[h].src, c = e.lastIndexOf("/"), c > -1 ? (g = e.substring(c + 1), f = e.substring(0, c + 1)) : (g = e, 
            f = ""), b = 0; m > b; b++) if (j = a[b], d = g.indexOf(j), d > -1) {
                i = f;
                break;
            }
            if ("" !== i) break;
        }
        return i;
    },
    calculateTimeFormat: function(a, b, c) {
        0 > a && (a = 0), "undefined" == typeof c && (c = 25);
        var d = b.timeFormat, e = d[0], f = d[1] == d[0], g = f ? 2 : 1, h = ":", i = Math.floor(a / 3600) % 24, j = Math.floor(a / 60) % 60, k = Math.floor(a % 60), l = Math.floor((a % 1 * c).toFixed(3)), m = [ [ l, "f" ], [ k, "s" ], [ j, "m" ], [ i, "h" ] ];
        d.length < g && (h = d[g]);
        for (var n = !1, o = 0, p = m.length; p > o; o++) if (-1 !== d.indexOf(m[o][1])) n = !0; else if (n) {
            for (var q = !1, r = o; p > r; r++) if (m[r][0] > 0) {
                q = !0;
                break;
            }
            if (!q) break;
            f || (d = e + d), d = m[o][1] + h + d, f && (d = m[o][1] + d), e = m[o][1];
        }
        b.currentTimeFormat = d;
    },
    twoDigitsString: function(a) {
        return 10 > a ? "0" + a : String(a);
    },
    secondsToTimeCode: function(a, b) {
        if (0 > a && (a = 0), "object" != typeof b) {
            var c = "m:ss";
            c = arguments[1] ? "hh:mm:ss" : c, c = arguments[2] ? c + ":ff" : c, b = {
                currentTimeFormat: c,
                framesPerSecond: arguments[3] || 25
            };
        }
        var d = b.framesPerSecond;
        "undefined" == typeof d && (d = 25);
        var c = b.currentTimeFormat, e = Math.floor(a / 3600) % 24, f = Math.floor(a / 60) % 60, g = Math.floor(a % 60), h = Math.floor((a % 1 * d).toFixed(3));
        lis = [ [ h, "f" ], [ g, "s" ], [ f, "m" ], [ e, "h" ] ];
        var j = c;
        for (i = 0, len = lis.length; i < len; i++) j = j.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0])), 
        j = j.replace(lis[i][1], lis[i][0]);
        return j;
    },
    timeCodeToSeconds: function(a, b, c, d) {
        "undefined" == typeof c ? c = !1 : "undefined" == typeof d && (d = 25);
        var e = a.split(":"), f = parseInt(e[0], 10), g = parseInt(e[1], 10), h = parseInt(e[2], 10), i = 0, j = 0;
        return c && (i = parseInt(e[3]) / d), j = 3600 * f + 60 * g + h + i;
    },
    convertSMPTEtoSeconds: function(a) {
        if ("string" != typeof a) return !1;
        a = a.replace(",", ".");
        var b = 0, c = -1 != a.indexOf(".") ? a.split(".")[1].length : 0, d = 1;
        a = a.split(":").reverse();
        for (var e = 0; e < a.length; e++) d = 1, e > 0 && (d = Math.pow(60, e)), b += Number(a[e]) * d;
        return Number(b.toFixed(c));
    },
    removeSwf: function(a) {
        var b = document.getElementById(a);
        b && /object|embed/i.test(b.nodeName) && (mejs.MediaFeatures.isIE ? (b.style.display = "none", 
        function() {
            4 == b.readyState ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10);
        }()) : b.parentNode.removeChild(b));
    },
    removeObjectInIE: function(a) {
        var b = document.getElementById(a);
        if (b) {
            for (var c in b) "function" == typeof b[c] && (b[c] = null);
            b.parentNode.removeChild(b);
        }
    }
}, mejs.PluginDetector = {
    hasPluginVersion: function(a, b) {
        var c = this.plugins[a];
        return b[1] = b[1] || 0, b[2] = b[2] || 0, c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? !0 : !1;
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e);
    },
    detectPlugin: function(a, b, c, d) {
        var e, f, g, h = [ 0, 0, 0 ];
        if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[a]) {
            if (e = this.nav.plugins[a].description, e && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[b] || this.nav.mimeTypes[b].enabledPlugin)) for (h = e.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), 
            f = 0; f < h.length; f++) h[f] = parseInt(h[f].match(/\d+/), 10);
        } else if ("undefined" != typeof window.ActiveXObject) try {
            g = new ActiveXObject(c), g && (h = d(g));
        } catch (i) {}
        return h;
    }
}, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(a) {
    var b = [], c = a.GetVariable("$version");
    return c && (c = c.split(" ")[1].split(","), b = [ parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10) ]), 
    b;
}), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(a) {
    var b = [ 0, 0, 0, 0 ], c = function(a, b, c, d) {
        for (;a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]); ) b[c] += d;
        b[c] -= d;
    };
    return c(a, b, 0, 1), c(a, b, 1, 1), c(a, b, 2, 1e4), c(a, b, 2, 1e3), c(a, b, 2, 100), 
    c(a, b, 2, 10), c(a, b, 2, 1), c(a, b, 3, 1), b;
}), mejs.MediaFeatures = {
    init: function() {
        var a, b, c = this, d = document, e = mejs.PluginDetector.nav, f = mejs.PluginDetector.ua.toLowerCase(), g = [ "source", "track", "audio", "video" ];
        c.isiPad = null !== f.match(/ipad/i), c.isiPhone = null !== f.match(/iphone/i), 
        c.isiOS = c.isiPhone || c.isiPad, c.isAndroid = null !== f.match(/android/i), c.isBustedAndroid = null !== f.match(/android 2\.[12]/), 
        c.isBustedNativeHTTPS = "https:" === location.protocol && (null !== f.match(/android [12]\./) || null !== f.match(/macintosh.* version.* safari/)), 
        c.isIE = -1 != e.appName.toLowerCase().indexOf("microsoft") || null !== e.appName.toLowerCase().match(/trident/gi), 
        c.isChrome = null !== f.match(/chrome/gi), c.isChromium = null !== f.match(/chromium/gi), 
        c.isFirefox = null !== f.match(/firefox/gi), c.isWebkit = null !== f.match(/webkit/gi), 
        c.isGecko = null !== f.match(/gecko/gi) && !c.isWebkit && !c.isIE, c.isOpera = null !== f.match(/opera/gi), 
        c.hasTouch = "ontouchstart" in window, c.svgAsImg = !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        for (a = 0; a < g.length; a++) b = document.createElement(g[a]);
        c.supportsMediaTag = "undefined" != typeof b.canPlayType || c.isBustedAndroid;
        try {
            b.canPlayType("video/mp4");
        } catch (h) {
            c.supportsMediaTag = !1;
        }
        c.hasSemiNativeFullScreen = "undefined" != typeof b.webkitEnterFullscreen, c.hasNativeFullscreen = "undefined" != typeof b.requestFullscreen, 
        c.hasWebkitNativeFullScreen = "undefined" != typeof b.webkitRequestFullScreen, c.hasMozNativeFullScreen = "undefined" != typeof b.mozRequestFullScreen, 
        c.hasMsNativeFullScreen = "undefined" != typeof b.msRequestFullscreen, c.hasTrueNativeFullScreen = c.hasWebkitNativeFullScreen || c.hasMozNativeFullScreen || c.hasMsNativeFullScreen, 
        c.nativeFullScreenEnabled = c.hasTrueNativeFullScreen, c.hasMozNativeFullScreen ? c.nativeFullScreenEnabled = document.mozFullScreenEnabled : c.hasMsNativeFullScreen && (c.nativeFullScreenEnabled = document.msFullscreenEnabled), 
        c.isChrome && (c.hasSemiNativeFullScreen = !1), c.hasTrueNativeFullScreen && (c.fullScreenEventName = "", 
        c.hasWebkitNativeFullScreen ? c.fullScreenEventName = "webkitfullscreenchange" : c.hasMozNativeFullScreen ? c.fullScreenEventName = "mozfullscreenchange" : c.hasMsNativeFullScreen && (c.fullScreenEventName = "MSFullscreenChange"), 
        c.isFullScreen = function() {
            return c.hasMozNativeFullScreen ? d.mozFullScreen : c.hasWebkitNativeFullScreen ? d.webkitIsFullScreen : c.hasMsNativeFullScreen ? null !== d.msFullscreenElement : void 0;
        }, c.requestFullScreen = function(a) {
            c.hasWebkitNativeFullScreen ? a.webkitRequestFullScreen() : c.hasMozNativeFullScreen ? a.mozRequestFullScreen() : c.hasMsNativeFullScreen && a.msRequestFullscreen();
        }, c.cancelFullScreen = function() {
            c.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : c.hasMozNativeFullScreen ? document.mozCancelFullScreen() : c.hasMsNativeFullScreen && document.msExitFullscreen();
        }), c.hasSemiNativeFullScreen && f.match(/mac os x 10_5/i) && (c.hasNativeFullScreen = !1, 
        c.hasSemiNativeFullScreen = !1);
    }
}, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function(a) {
        this.currentTime = a;
    },
    setMuted: function(a) {
        this.muted = a;
    },
    setVolume: function(a) {
        this.volume = a;
    },
    stop: function() {
        this.pause();
    },
    setSrc: function(a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0; ) this.removeChild(b[0]);
        if ("string" == typeof a) this.src = a; else {
            var c, d;
            for (c = 0; c < a.length; c++) if (d = a[c], this.canPlayType(d.type)) {
                this.src = d.src;
                break;
            }
        }
    },
    setVideoSize: function(a, b) {
        this.width = a, this.height = b;
    }
}, mejs.PluginMediaElement = function(a, b, c) {
    this.id = a, this.pluginType = b, this.src = c, this.events = {}, this.attributes = {};
}, mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), 
        this.paused = !1);
    },
    load: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), 
        this.paused = !1);
    },
    pause: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), 
        this.paused = !0);
    },
    stop: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), 
        this.paused = !0);
    },
    canPlayType: function(a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++) if (d = e[b], mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version)) for (c = 0; c < d.types.length; c++) if (a == d.types[c]) return "probably";
        return "";
    },
    positionFullscreenButton: function(a, b, c) {
        null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c);
    },
    hideFullscreenButton: function() {
        null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton();
    },
    setSrc: function(a) {
        if ("string" == typeof a) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)), 
        this.src = mejs.Utility.absolutizeUrl(a); else {
            var b, c;
            for (b = 0; b < a.length; b++) if (c = a[b], this.canPlayType(c.type)) {
                this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)), this.src = mejs.Utility.absolutizeUrl(c.src);
                break;
            }
        }
    },
    setCurrentTime: function(a) {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a), 
        this.currentTime = a);
    },
    setVolume: function(a) {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * a) : this.pluginApi.setVolume(a), 
        this.volume = a);
    },
    setMuted: function(a) {
        null != this.pluginApi && ("youtube" == this.pluginType ? (a ? this.pluginApi.mute() : this.pluginApi.unMute(), 
        this.muted = a, this.dispatchEvent({
            type: "volumechange"
        })) : this.pluginApi.setMuted(a), this.muted = a);
    },
    setVideoSize: function(a, b) {
        this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = a + "px", 
        this.pluginElement.style.height = b + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b);
    },
    setFullscreen: function(a) {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a);
    },
    enterFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0);
    },
    exitFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1);
    },
    addEventListener: function(a, b, c) {
        this.events[a] = this.events[a] || [], this.events[a].push(b);
    },
    removeEventListener: function(a, b) {
        if (!a) return this.events = {}, !0;
        var c = this.events[a];
        if (!c) return !0;
        if (!b) return this.events[a] = [], !0;
        for (var d = 0; d < c.length; d++) if (c[d] === b) return this.events[a].splice(d, 1), 
        !0;
        return !1;
    },
    dispatchEvent: function(a) {
        var b, c = this.events[a.type];
        if (c) for (b = 0; b < c.length; b++) c[b].apply(this, [ a ]);
    },
    hasAttribute: function(a) {
        return a in this.attributes;
    },
    removeAttribute: function(a) {
        delete this.attributes[a];
    },
    getAttribute: function(a) {
        return this.hasAttribute(a) ? this.attributes[a] : "";
    },
    setAttribute: function(a, b) {
        this.attributes[a] = b;
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id);
    }
}, mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(a, b, c) {
        this.pluginMediaElements[a] = b, this.htmlMediaElements[a] = c;
    },
    unregisterPluginElement: function(a) {
        delete this.pluginMediaElements[a], delete this.htmlMediaElements[a];
    },
    initPlugin: function(a) {
        var b = this.pluginMediaElements[a], c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
              case "flash":
                b.pluginElement = b.pluginApi = document.getElementById(a);
                break;

              case "silverlight":
                b.pluginElement = document.getElementById(b.id), b.pluginApi = b.pluginElement.Content.MediaElementJS;
            }
            null != b.pluginApi && b.success && b.success(b, c);
        }
    },
    fireEvent: function(a, b, c) {
        var d, e, f, g = this.pluginMediaElements[a];
        if (g) {
            d = {
                type: b,
                target: g
            };
            for (e in c) g[e] = c[e], d[e] = c[e];
            f = c.bufferedTime || 0, d.target.buffered = d.buffered = {
                start: function(a) {
                    return 0;
                },
                end: function(a) {
                    return f;
                },
                length: 1
            }, g.dispatchEvent(d);
        }
    }
}, mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: [ "flash", "silverlight", "youtube", "vimeo" ],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath([ "mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js" ]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    flashScriptAccess: "sameDomain",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function() {},
    error: function() {}
}, mejs.MediaElement = function(a, b) {
    return mejs.HtmlMediaElementShim.create(a, b);
}, mejs.HtmlMediaElementShim = {
    create: function(a, b) {
        var c, d, e = {}, f = "string" == typeof a ? document.getElementById(a) : a, g = f.tagName.toLowerCase(), h = "audio" === g || "video" === g, i = h ? f.getAttribute("src") : f.getAttribute("href"), j = f.getAttribute("poster"), k = f.getAttribute("autoplay"), l = f.getAttribute("preload"), m = f.getAttribute("controls");
        for (d in mejs.MediaElementDefaults) e[d] = mejs.MediaElementDefaults[d];
        for (d in b) e[d] = b[d];
        return i = "undefined" == typeof i || null === i || "" == i ? null : i, j = "undefined" == typeof j || null === j ? "" : j, 
        l = "undefined" == typeof l || null === l || "false" === l ? "none" : l, k = !("undefined" == typeof k || null === k || "false" === k), 
        m = !("undefined" == typeof m || null === m || "false" === m), c = this.determinePlayback(f, e, mejs.MediaFeatures.supportsMediaTag, h, i), 
        c.url = null !== c.url ? mejs.Utility.absolutizeUrl(c.url) : "", "native" == c.method ? (mejs.MediaFeatures.isBustedAndroid && (f.src = c.url, 
        f.addEventListener("click", function() {
            f.play();
        }, !1)), this.updateNative(c, e, k, l)) : "" !== c.method ? this.createPlugin(c, e, j, k, l, m) : (this.createErrorMessage(c, e, j), 
        this);
    },
    determinePlayback: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = [], r = {
            method: "",
            url: "",
            htmlMediaElement: a,
            isVideo: "audio" != a.tagName.toLowerCase()
        };
        if ("undefined" != typeof b.type && "" !== b.type) if ("string" == typeof b.type) q.push({
            type: b.type,
            url: e
        }); else for (f = 0; f < b.type.length; f++) q.push({
            type: b.type[f],
            url: e
        }); else if (null !== e) k = this.formatType(e, a.getAttribute("type")), q.push({
            type: k,
            url: e
        }); else for (f = 0; f < a.childNodes.length; f++) j = a.childNodes[f], 1 == j.nodeType && "source" == j.tagName.toLowerCase() && (e = j.getAttribute("src"), 
        k = this.formatType(e, j.getAttribute("type")), p = j.getAttribute("media"), (!p || !window.matchMedia || window.matchMedia && window.matchMedia(p).matches) && q.push({
            type: k,
            url: e
        }));
        if (!d && q.length > 0 && null !== q[0].url && this.getTypeFromFile(q[0].url).indexOf("audio") > -1 && (r.isVideo = !1), 
        mejs.MediaFeatures.isBustedAndroid && (a.canPlayType = function(a) {
            return null !== a.match(/video\/(mp4|m4v)/gi) ? "maybe" : "";
        }), mejs.MediaFeatures.isChromium && (a.canPlayType = function(a) {
            return null !== a.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : "";
        }), c && ("auto" === b.mode || "auto_plugin" === b.mode || "native" === b.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || b.httpsBasicAuthSite !== !0)) {
            for (d || (o = document.createElement(r.isVideo ? "video" : "audio"), a.parentNode.insertBefore(o, a), 
            a.style.display = "none", r.htmlMediaElement = a = o), f = 0; f < q.length; f++) if ("video/m3u8" == q[f].type || "" !== a.canPlayType(q[f].type).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                r.method = "native", r.url = q[f].url;
                break;
            }
            if ("native" === r.method && (null !== r.url && (a.src = r.url), "auto_plugin" !== b.mode)) return r;
        }
        if ("auto" === b.mode || "auto_plugin" === b.mode || "shim" === b.mode) for (f = 0; f < q.length; f++) for (k = q[f].type, 
        g = 0; g < b.plugins.length; g++) for (l = b.plugins[g], m = mejs.plugins[l], h = 0; h < m.length; h++) if (n = m[h], 
        null == n.version || mejs.PluginDetector.hasPluginVersion(l, n.version)) for (i = 0; i < n.types.length; i++) if (k.toLowerCase() == n.types[i].toLowerCase()) return r.method = l, 
        r.url = q[f].url, r;
        return "auto_plugin" === b.mode && "native" === r.method ? r : ("" === r.method && q.length > 0 && (r.url = q[0].url), 
        r);
    },
    formatType: function(a, b) {
        return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b;
    },
    getTypeFromFile: function(a) {
        a = a.split("?")[0];
        var b = a.substring(a.lastIndexOf(".") + 1).toLowerCase(), c = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b) ? "video/" : "audio/";
        return this.getTypeFromExtension(b, c);
    },
    getTypeFromExtension: function(a, b) {
        switch (b = b || "", a) {
          case "mp4":
          case "m4v":
          case "m4a":
          case "f4v":
          case "f4a":
            return b + "mp4";

          case "flv":
            return b + "x-flv";

          case "webm":
          case "webma":
          case "webmv":
            return b + "webm";

          case "ogg":
          case "oga":
          case "ogv":
            return b + "ogg";

          case "m3u8":
            return "application/x-mpegurl";

          case "ts":
            return b + "mp2t";

          default:
            return b + a;
        }
    },
    createErrorMessage: function(a, b, c) {
        var d = a.htmlMediaElement, e = document.createElement("div"), f = b.customError;
        e.className = "me-cannotplay";
        try {
            e.style.width = d.width + "px", e.style.height = d.height + "px";
        } catch (g) {}
        f || (f = '<a href="' + a.url + '">', "" !== c && (f += '<img src="' + c + '" width="100%" height="100%" alt="" />'), 
        f += "<span>" + mejs.i18n.t("Download File") + "</span></a>"), e.innerHTML = f, 
        d.parentNode.insertBefore(e, d), d.style.display = "none", b.error(d);
    },
    createPlugin: function(a, b, c, d, e, f) {
        var g, h, i, j = a.htmlMediaElement, k = 1, l = 1, m = "me_" + a.method + "_" + mejs.meIndex++, n = new mejs.PluginMediaElement(m, a.method, a.url), o = document.createElement("div");
        n.tagName = j.tagName;
        for (var p = 0; p < j.attributes.length; p++) {
            var q = j.attributes[p];
            q.specified && n.setAttribute(q.name, q.value);
        }
        for (h = j.parentNode; null !== h && null != h.tagName && "body" !== h.tagName.toLowerCase() && null != h.parentNode && null != h.parentNode.tagName && null != h.parentNode.constructor && "ShadowRoot" === h.parentNode.constructor.name; ) {
            if ("p" === h.parentNode.tagName.toLowerCase()) {
                h.parentNode.parentNode.insertBefore(h, h.parentNode);
                break;
            }
            h = h.parentNode;
        }
        switch (a.isVideo ? (k = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : null !== j.getAttribute("width") ? j.getAttribute("width") : b.defaultVideoWidth, 
        l = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : null !== j.getAttribute("height") ? j.getAttribute("height") : b.defaultVideoHeight, 
        k = mejs.Utility.encodeUrl(k), l = mejs.Utility.encodeUrl(l)) : b.enablePluginDebug && (k = 320, 
        l = 240), n.success = b.success, mejs.MediaPluginBridge.registerPluginElement(m, n, j), 
        o.className = "me-plugin", o.id = m + "_container", a.isVideo ? j.parentNode.insertBefore(o, j) : document.body.insertBefore(o, document.body.childNodes[0]), 
        i = [ "id=" + m, "jsinitfunction=mejs.MediaPluginBridge.initPlugin", "jscallbackfunction=mejs.MediaPluginBridge.fireEvent", "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + k, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + l, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam ], 
        null !== a.url && ("flash" == a.method ? i.push("file=" + mejs.Utility.encodeUrl(a.url)) : i.push("file=" + a.url)), 
        b.enablePluginDebug && i.push("debug=true"), b.enablePluginSmoothing && i.push("smoothing=true"), 
        b.enablePseudoStreaming && i.push("pseudostreaming=true"), f && i.push("controls=true"), 
        b.pluginVars && (i = i.concat(b.pluginVars)), a.method) {
          case "silverlight":
            o.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + m + '" name="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="initParams" value="' + i.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
            break;

          case "flash":
            mejs.MediaFeatures.isIE ? (g = document.createElement("div"), o.appendChild(g), 
            g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date() + '" /><param name="flashvars" value="' + i.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + b.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : o.innerHTML = '<embed id="' + m + '" name="' + m + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + b.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + i.join("&") + '" width="' + k + '" height="' + l + '" scale="default"class="mejs-shim"></embed>';
            break;

          case "youtube":
            var r;
            -1 != a.url.lastIndexOf("youtu.be") ? (r = a.url.substr(a.url.lastIndexOf("/") + 1), 
            -1 != r.indexOf("?") && (r = r.substr(0, r.indexOf("?")))) : r = a.url.substr(a.url.lastIndexOf("=") + 1), 
            youtubeSettings = {
                container: o,
                containerId: o.id,
                pluginMediaElement: n,
                pluginId: m,
                videoId: r,
                height: l,
                width: k
            }, mejs.PluginDetector.hasPluginVersion("flash", [ 10, 0, 0 ]) ? mejs.YouTubeApi.createFlash(youtubeSettings, b) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
            break;

          case "vimeo":
            var s = m + "_player";
            if (n.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1), o.innerHTML = '<iframe src="//player.vimeo.com/video/' + n.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + s + '" width="' + k + '" height="' + l + '" frameborder="0" class="mejs-shim" id="' + s + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', 
            "function" == typeof $f) {
                var t = $f(o.childNodes[0]);
                t.addEvent("ready", function() {
                    function a(a, b, c, d) {
                        var e = {
                            type: c,
                            target: b
                        };
                        "timeupdate" == c && (b.currentTime = e.currentTime = d.seconds, b.duration = e.duration = d.duration), 
                        b.dispatchEvent(e);
                    }
                    t.playVideo = function() {
                        t.api("play");
                    }, t.stopVideo = function() {
                        t.api("unload");
                    }, t.pauseVideo = function() {
                        t.api("pause");
                    }, t.seekTo = function(a) {
                        t.api("seekTo", a);
                    }, t.setVolume = function(a) {
                        t.api("setVolume", a);
                    }, t.setMuted = function(a) {
                        a ? (t.lastVolume = t.api("getVolume"), t.api("setVolume", 0)) : (t.api("setVolume", t.lastVolume), 
                        delete t.lastVolume);
                    }, t.addEvent("play", function() {
                        a(t, n, "play"), a(t, n, "playing");
                    }), t.addEvent("pause", function() {
                        a(t, n, "pause");
                    }), t.addEvent("finish", function() {
                        a(t, n, "ended");
                    }), t.addEvent("playProgress", function(b) {
                        a(t, n, "timeupdate", b);
                    }), n.pluginElement = o, n.pluginApi = t, mejs.MediaPluginBridge.initPlugin(m);
                });
            } else console.warn("You need to include froogaloop for vimeo to work");
        }
        return j.style.display = "none", j.removeAttribute("autoplay"), n;
    },
    updateNative: function(a, b, c, d) {
        var e, f = a.htmlMediaElement;
        for (e in mejs.HtmlMediaElement) f[e] = mejs.HtmlMediaElement[e];
        return b.success(f, f), f;
    }
}, mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b), this.isIframeStarted = !0;
        }
    },
    iframeQueue: [],
    enqueueIframe: function(a) {
        this.isLoaded ? this.createIframe(a) : (this.loadIframeApi(), this.iframeQueue.push(a));
    },
    createIframe: function(a) {
        var b = a.pluginMediaElement, c = new YT.Player(a.containerId, {
            height: a.height,
            width: a.width,
            videoId: a.videoId,
            playerVars: {
                controls: 0
            },
            events: {
                onReady: function() {
                    a.pluginMediaElement.pluginApi = c, mejs.MediaPluginBridge.initPlugin(a.pluginId), 
                    setInterval(function() {
                        mejs.YouTubeApi.createEvent(c, b, "timeupdate");
                    }, 250);
                },
                onStateChange: function(a) {
                    mejs.YouTubeApi.handleStateChange(a.data, c, b);
                }
            }
        });
    },
    createEvent: function(a, b, c) {
        var d = {
            type: c,
            target: b
        };
        if (a && a.getDuration) {
            b.currentTime = d.currentTime = a.getCurrentTime(), b.duration = d.duration = a.getDuration(), 
            d.paused = b.paused, d.ended = b.ended, d.muted = a.isMuted(), d.volume = a.getVolume() / 100, 
            d.bytesTotal = a.getVideoBytesTotal(), d.bufferedBytes = a.getVideoBytesLoaded();
            var e = d.bufferedBytes / d.bytesTotal * d.duration;
            d.target.buffered = d.buffered = {
                start: function(a) {
                    return 0;
                },
                end: function(a) {
                    return e;
                },
                length: 1
            };
        }
        b.dispatchEvent(d);
    },
    iFrameReady: function() {
        for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0; ) {
            var a = this.iframeQueue.pop();
            this.createIframe(a);
        }
    },
    flashPlayers: {},
    createFlash: function(a) {
        this.flashPlayers[a.pluginId] = a;
        var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        mejs.MediaFeatures.isIE ? (b = document.createElement("div"), a.container.appendChild(b), 
        b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' + c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') : a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>';
    },
    flashReady: function(a) {
        var b = this.flashPlayers[a], c = document.getElementById(a), d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c, mejs.MediaPluginBridge.initPlugin(a), c.cueVideoById(b.videoId);
        var e = b.containerId + "_callback";
        window[e] = function(a) {
            mejs.YouTubeApi.handleStateChange(a, c, d);
        }, c.addEventListener("onStateChange", e), setInterval(function() {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate");
        }, 250), mejs.YouTubeApi.createEvent(c, d, "canplay");
    },
    handleStateChange: function(a, b, c) {
        switch (a) {
          case -1:
            c.paused = !0, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
            break;

          case 0:
            c.paused = !1, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "ended");
            break;

          case 1:
            c.paused = !1, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "play"), mejs.YouTubeApi.createEvent(b, c, "playing");
            break;

          case 2:
            c.paused = !0, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "pause");
            break;

          case 3:
            mejs.YouTubeApi.createEvent(b, c, "progress");
            break;

          case 5:        }
    }
}, window.onYouTubePlayerAPIReady = function() {
    mejs.YouTubeApi.iFrameReady();
}, window.onYouTubePlayerReady = function(a) {
    mejs.YouTubeApi.flashReady(a);
}, window.mejs = mejs, window.MediaElement = mejs.MediaElement, function(a, b, c) {
    "use strict";
    var d = {
        locale: {
            language: b.i18n && b.i18n.locale.language || "",
            strings: b.i18n && b.i18n.locale.strings || {}
        },
        ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
        methods: {}
    };
    d.getLanguage = function() {
        var a = d.locale.language || window.navigator.userLanguage || window.navigator.language;
        return d.ietf_lang_regex.exec(a) ? a : null;
    }, "undefined" != typeof mejsL10n && (d.locale.language = mejsL10n.language), d.methods.checkPlain = function(a) {
        var b, c, d = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        a = String(a);
        for (b in d) d.hasOwnProperty(b) && (c = new RegExp(b, "g"), a = a.replace(c, d[b]));
        return a;
    }, d.methods.t = function(a, b) {
        return d.locale.strings && d.locale.strings[b.context] && d.locale.strings[b.context][a] && (a = d.locale.strings[b.context][a]), 
        d.methods.checkPlain(a);
    }, d.t = function(a, b) {
        if ("string" == typeof a && a.length > 0) {
            var c = d.getLanguage();
            return b = b || {
                context: c
            }, d.methods.t(a, b);
        }
        throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        };
    }, b.i18n = d;
}(document, mejs), function(a, b) {
    "use strict";
    "undefined" != typeof mejsL10n && (a[mejsL10n.language] = mejsL10n.strings);
}(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof Zepto ? (mejs.$ = Zepto, 
Zepto.fn.outerWidth = function(a) {
    var b = $(this).width();
    return a && (b += parseInt($(this).css("margin-right"), 10), b += parseInt($(this).css("margin-left"), 10)), 
    b;
}) : "undefined" != typeof ender && (mejs.$ = ender), function(a) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: !1,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function(a) {
            return .05 * a.duration;
        },
        defaultSeekForwardInterval: function(a) {
            return .05 * a.duration;
        },
        setDimensions: !0,
        audioWidth: -1,
        audioHeight: -1,
        startVolume: .8,
        loop: !1,
        autoRewind: !0,
        enableAutosize: !0,
        timeFormat: "",
        alwaysShowHours: !1,
        showTimecodeFrameCount: !1,
        framesPerSecond: 25,
        autosizeProgress: !0,
        alwaysShowControls: !1,
        hideVideoControlsOnLoad: !1,
        clickToPlayPause: !0,
        iPadUseNativeControls: !1,
        iPhoneUseNativeControls: !1,
        AndroidUseNativeControls: !1,
        features: [ "playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen" ],
        isVideo: !0,
        enableKeyboard: !0,
        pauseOtherPlayers: !0,
        keyActions: [ {
            keys: [ 32, 179 ],
            action: function(a, b) {
                b.paused || b.ended ? b.play() : b.pause();
            }
        }, {
            keys: [ 38 ],
            action: function(a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), 
                a.startControlsTimer());
                var c = Math.min(b.volume + .1, 1);
                b.setVolume(c);
            }
        }, {
            keys: [ 40 ],
            action: function(a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), 
                a.startControlsTimer());
                var c = Math.max(b.volume - .1, 0);
                b.setVolume(c);
            }
        }, {
            keys: [ 37, 227 ],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    a.isVideo && (a.showControls(), a.startControlsTimer());
                    var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(c);
                }
            }
        }, {
            keys: [ 39, 228 ],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    a.isVideo && (a.showControls(), a.startControlsTimer());
                    var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(c);
                }
            }
        }, {
            keys: [ 70 ],
            action: function(a, b) {
                "undefined" != typeof a.enterFullScreen && (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen());
            }
        }, {
            keys: [ 77 ],
            action: function(a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), 
                a.startControlsTimer()), a.media.muted ? a.setMuted(!1) : a.setMuted(!0);
            }
        } ]
    }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function(b, c) {
        if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(b, c);
        var d = this;
        return d.$media = d.$node = a(b), d.node = d.media = d.$media[0], d.node ? "undefined" != typeof d.node.player ? d.node.player : ("undefined" == typeof c && (c = d.$node.data("mejsoptions")), 
        d.options = a.extend({}, mejs.MepDefaults, c), d.options.timeFormat || (d.options.timeFormat = "mm:ss", 
        d.options.alwaysShowHours && (d.options.timeFormat = "hh:mm:ss"), d.options.showTimecodeFrameCount && (d.options.timeFormat += ":ff")), 
        mejs.Utility.calculateTimeFormat(0, d.options, d.options.framesPerSecond || 25), 
        d.id = "mep_" + mejs.mepIndex++, mejs.players[d.id] = d, d.init(), d) : void 0;
    }, mejs.MediaElementPlayer.prototype = {
        hasFocus: !1,
        controlsAreVisible: !0,
        init: function() {
            var b = this, c = mejs.MediaFeatures, d = a.extend(!0, {}, b.options, {
                success: function(a, c) {
                    b.meReady(a, c);
                },
                error: function(a) {
                    b.handleError(a);
                }
            }), e = b.media.tagName.toLowerCase();
            if (b.isDynamic = "audio" !== e && "video" !== e, b.isDynamic ? b.isVideo = b.options.isVideo : b.isVideo = "audio" !== e && b.options.isVideo, 
            c.isiPad && b.options.iPadUseNativeControls || c.isiPhone && b.options.iPhoneUseNativeControls) b.$media.attr("controls", "controls"), 
            c.isiPad && null !== b.media.getAttribute("autoplay") && b.play(); else if (c.isAndroid && b.options.AndroidUseNativeControls) ; else {
                b.$media.removeAttr("controls");
                var f = b.isVideo ? mejs.i18n.t("Video Player") : mejs.i18n.t("Audio Player");
                a('<span class="mejs-offscreen">' + f + "</span>").insertBefore(b.$media), b.container = a('<div id="' + b.id + '" class="mejs-container ' + (mejs.MediaFeatures.svgAsImg ? "svg" : "no-svg") + '" tabindex="0" role="application" aria-label="' + f + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media).focus(function(a) {
                    if (!b.controlsAreVisible) {
                        b.showControls(!0);
                        var c = b.container.find(".mejs-playpause-button > button");
                        c.focus();
                    }
                }), b.container.addClass((c.isAndroid ? "mejs-android " : "") + (c.isiOS ? "mejs-ios " : "") + (c.isiPad ? "mejs-ipad " : "") + (c.isiPhone ? "mejs-iphone " : "") + (b.isVideo ? "mejs-video " : "mejs-audio ")), 
                b.container.find(".mejs-mediaelement").append(b.$media), b.node.player = b, b.controls = b.container.find(".mejs-controls"), 
                b.layers = b.container.find(".mejs-layers");
                var g = b.isVideo ? "video" : "audio", h = g.substring(0, 1).toUpperCase() + g.substring(1);
                b.options[g + "Width"] > 0 || b.options[g + "Width"].toString().indexOf("%") > -1 ? b.width = b.options[g + "Width"] : "" !== b.media.style.width && null !== b.media.style.width ? b.width = b.media.style.width : null !== b.media.getAttribute("width") ? b.width = b.$media.attr("width") : b.width = b.options["default" + h + "Width"], 
                b.options[g + "Height"] > 0 || b.options[g + "Height"].toString().indexOf("%") > -1 ? b.height = b.options[g + "Height"] : "" !== b.media.style.height && null !== b.media.style.height ? b.height = b.media.style.height : null !== b.$media[0].getAttribute("height") ? b.height = b.$media.attr("height") : b.height = b.options["default" + h + "Height"], 
                b.setPlayerSize(b.width, b.height), d.pluginWidth = b.width, d.pluginHeight = b.height;
            }
            mejs.MediaElement(b.$media[0], d), "undefined" != typeof b.container && b.controlsAreVisible && b.container.trigger("controlsshown");
        },
        showControls: function(a) {
            var b = this;
            a = "undefined" == typeof a || a, b.controlsAreVisible || (a ? (b.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                b.controlsAreVisible = !0, b.container.trigger("controlsshown");
            }), b.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                b.controlsAreVisible = !0;
            })) : (b.controls.css("visibility", "visible").css("display", "block"), b.container.find(".mejs-control").css("visibility", "visible").css("display", "block"), 
            b.controlsAreVisible = !0, b.container.trigger("controlsshown")), b.setControlsSize());
        },
        hideControls: function(b) {
            var c = this;
            b = "undefined" == typeof b || b, !c.controlsAreVisible || c.options.alwaysShowControls || c.keyboardAction || (b ? (c.controls.stop(!0, !0).fadeOut(200, function() {
                a(this).css("visibility", "hidden").css("display", "block"), c.controlsAreVisible = !1, 
                c.container.trigger("controlshidden");
            }), c.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
                a(this).css("visibility", "hidden").css("display", "block");
            })) : (c.controls.css("visibility", "hidden").css("display", "block"), c.container.find(".mejs-control").css("visibility", "hidden").css("display", "block"), 
            c.controlsAreVisible = !1, c.container.trigger("controlshidden")));
        },
        controlsTimer: null,
        startControlsTimer: function(a) {
            var b = this;
            a = "undefined" != typeof a ? a : 1500, b.killControlsTimer("start"), b.controlsTimer = setTimeout(function() {
                b.hideControls(), b.killControlsTimer("hide");
            }, a);
        },
        killControlsTimer: function(a) {
            var b = this;
            null !== b.controlsTimer && (clearTimeout(b.controlsTimer), delete b.controlsTimer, 
            b.controlsTimer = null);
        },
        controlsEnabled: !0,
        disableControls: function() {
            var a = this;
            a.killControlsTimer(), a.hideControls(!1), this.controlsEnabled = !1;
        },
        enableControls: function() {
            var a = this;
            a.showControls(!1), a.controlsEnabled = !0;
        },
        meReady: function(b, c) {
            var d, e, f = this, g = mejs.MediaFeatures, h = c.getAttribute("autoplay"), i = !("undefined" == typeof h || null === h || "false" === h);
            if (!f.created) {
                if (f.created = !0, f.media = b, f.domNode = c, !(g.isAndroid && f.options.AndroidUseNativeControls || g.isiPad && f.options.iPadUseNativeControls || g.isiPhone && f.options.iPhoneUseNativeControls)) {
                    f.buildposter(f, f.controls, f.layers, f.media), f.buildkeyboard(f, f.controls, f.layers, f.media), 
                    f.buildoverlays(f, f.controls, f.layers, f.media), f.findTracks();
                    for (d in f.options.features) if (e = f.options.features[d], f["build" + e]) try {
                        f["build" + e](f, f.controls, f.layers, f.media);
                    } catch (j) {}
                    f.container.trigger("controlsready"), f.setPlayerSize(f.width, f.height), f.setControlsSize(), 
                    f.isVideo && (mejs.MediaFeatures.hasTouch ? f.$media.bind("touchstart", function() {
                        f.controlsAreVisible ? f.hideControls(!1) : f.controlsEnabled && f.showControls(!1);
                    }) : (f.clickToPlayPauseCallback = function() {
                        f.options.clickToPlayPause && (f.media.paused ? f.play() : f.pause());
                    }, f.media.addEventListener("click", f.clickToPlayPauseCallback, !1), f.container.bind("mouseenter", function() {
                        f.controlsEnabled && (f.options.alwaysShowControls || (f.killControlsTimer("enter"), 
                        f.showControls(), f.startControlsTimer(2500)));
                    }).bind("mousemove", function() {
                        f.controlsEnabled && (f.controlsAreVisible || f.showControls(), f.options.alwaysShowControls || f.startControlsTimer(2500));
                    }).bind("mouseleave", function() {
                        f.controlsEnabled && (f.media.paused || f.options.alwaysShowControls || f.startControlsTimer(1e3));
                    })), f.options.hideVideoControlsOnLoad && f.hideControls(!1), i && !f.options.alwaysShowControls && f.hideControls(), 
                    f.options.enableAutosize && f.media.addEventListener("loadedmetadata", function(a) {
                        f.options.videoHeight <= 0 && null === f.domNode.getAttribute("height") && !isNaN(a.target.videoHeight) && (f.setPlayerSize(a.target.videoWidth, a.target.videoHeight), 
                        f.setControlsSize(), f.media.setVideoSize(a.target.videoWidth, a.target.videoHeight));
                    }, !1)), b.addEventListener("play", function() {
                        var a;
                        for (a in mejs.players) {
                            var b = mejs.players[a];
                            b.id == f.id || !f.options.pauseOtherPlayers || b.paused || b.ended || b.pause(), 
                            b.hasFocus = !1;
                        }
                        f.hasFocus = !0;
                    }, !1), f.media.addEventListener("ended", function(b) {
                        if (f.options.autoRewind) try {
                            f.media.setCurrentTime(0), window.setTimeout(function() {
                                a(f.container).find(".mejs-overlay-loading").parent().hide();
                            }, 20);
                        } catch (c) {}
                        f.media.pause(), f.setProgressRail && f.setProgressRail(), f.setCurrentRail && f.setCurrentRail(), 
                        f.options.loop ? f.play() : !f.options.alwaysShowControls && f.controlsEnabled && f.showControls();
                    }, !1), f.media.addEventListener("loadedmetadata", function(a) {
                        f.updateDuration && f.updateDuration(), f.updateCurrent && f.updateCurrent(), f.isFullScreen || (f.setPlayerSize(f.width, f.height), 
                        f.setControlsSize());
                    }, !1);
                    var k = null;
                    f.media.addEventListener("timeupdate", function() {
                        k !== this.duration && (k = this.duration, mejs.Utility.calculateTimeFormat(k, f.options, f.options.framesPerSecond || 25));
                    }, !1), f.container.focusout(function(b) {
                        if (b.relatedTarget) {
                            var c = a(b.relatedTarget);
                            f.keyboardAction && 0 === c.parents(".mejs-container").length && (f.keyboardAction = !1, 
                            f.hideControls(!0));
                        }
                    }), setTimeout(function() {
                        f.setPlayerSize(f.width, f.height), f.setControlsSize();
                    }, 50), f.globalBind("resize", function() {
                        f.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || f.setPlayerSize(f.width, f.height), 
                        f.setControlsSize();
                    }), "youtube" == f.media.pluginType && (g.isiOS || g.isAndroid) && f.container.find(".mejs-overlay-play").hide();
                }
                i && "native" == b.pluginType && f.play(), f.options.success && ("string" == typeof f.options.success ? window[f.options.success](f.media, f.domNode, f) : f.options.success(f.media, f.domNode, f));
            }
        },
        handleError: function(a) {
            var b = this;
            b.controls && b.controls.hide(), b.options.error && b.options.error(a);
        },
        setPlayerSize: function(b, c) {
            var d = this;
            if (!d.options.setDimensions) return !1;
            if ("undefined" != typeof b && (d.width = b), "undefined" != typeof c && (d.height = c), 
            d.height.toString().indexOf("%") > 0 || "none" !== d.$node.css("max-width") && "t.width" !== d.$node.css("max-width") || d.$node[0].currentStyle && "100%" === d.$node[0].currentStyle.maxWidth) {
                var e = function() {
                    return d.isVideo ? d.media.videoWidth && d.media.videoWidth > 0 ? d.media.videoWidth : null !== d.media.getAttribute("width") ? d.media.getAttribute("width") : d.options.defaultVideoWidth : d.options.defaultAudioWidth;
                }(), f = function() {
                    return d.isVideo ? d.media.videoHeight && d.media.videoHeight > 0 ? d.media.videoHeight : null !== d.media.getAttribute("height") ? d.media.getAttribute("height") : d.options.defaultVideoHeight : d.options.defaultAudioHeight;
                }(), g = d.container.parent().closest(":visible").width(), h = d.container.parent().closest(":visible").height(), i = d.isVideo || !d.options.autosizeProgress ? parseInt(g * f / e, 10) : f;
                isNaN(i) && (i = h), d.container.parent().length > 0 && "body" === d.container.parent()[0].tagName.toLowerCase() && (g = a(window).width(), 
                i = a(window).height()), i && g && (d.container.width(g).height(i), d.$media.add(d.container.find(".mejs-shim")).width("100%").height("100%"), 
                d.isVideo && d.media.setVideoSize && d.media.setVideoSize(g, i), d.layers.children(".mejs-layer").width("100%").height("100%"));
            } else d.container.width(d.width).height(d.height), d.layers.children(".mejs-layer").width(d.width).height(d.height);
        },
        setControlsSize: function() {
            var b = this, c = 0, d = 0, e = b.controls.find(".mejs-time-rail"), f = b.controls.find(".mejs-time-total"), g = e.siblings(), h = g.last(), i = null;
            if (b.container.is(":visible") && e.length && e.is(":visible")) {
                b.options && !b.options.autosizeProgress && (d = parseInt(e.css("width"), 10)), 
                0 !== d && d || (g.each(function() {
                    var b = a(this);
                    "absolute" != b.css("position") && b.is(":visible") && (c += a(this).outerWidth(!0));
                }), d = b.controls.width() - c - (e.outerWidth(!0) - e.width()));
                do e.width(d), f.width(d - (f.outerWidth(!0) - f.width())), "absolute" != h.css("position") && (i = h.length ? h.position() : null, 
                d--); while (null !== i && i.top > 0 && d > 0);
                b.container.trigger("controlsresize");
            }
        },
        buildposter: function(b, c, d, e) {
            var f = this, g = a('<div class="mejs-poster mejs-layer"></div>').appendTo(d), h = b.$media.attr("poster");
            "" !== b.options.poster && (h = b.options.poster), h ? f.setPoster(h) : g.hide(), 
            e.addEventListener("play", function() {
                g.hide();
            }, !1), b.options.showPosterWhenEnded && b.options.autoRewind && e.addEventListener("ended", function() {
                g.show();
            }, !1);
        },
        setPoster: function(b) {
            var c = this, d = c.container.find(".mejs-poster"), e = d.find("img");
            0 === e.length && (e = a('<img width="100%" height="100%" alt="" />').appendTo(d)), 
            e.attr("src", b), d.css({
                "background-image": "url(" + b + ")"
            });
        },
        buildoverlays: function(b, c, d, e) {
            var f = this;
            if (b.isVideo) {
                var g = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(d), h = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(d), i = a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(d).bind("click", function() {
                    f.options.clickToPlayPause && e.paused && e.play();
                });
                e.addEventListener("play", function() {
                    i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide();
                }, !1), e.addEventListener("playing", function() {
                    i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide();
                }, !1), e.addEventListener("seeking", function() {
                    g.show(), c.find(".mejs-time-buffering").show();
                }, !1), e.addEventListener("seeked", function() {
                    g.hide(), c.find(".mejs-time-buffering").hide();
                }, !1), e.addEventListener("pause", function() {
                    mejs.MediaFeatures.isiPhone || i.show();
                }, !1), e.addEventListener("waiting", function() {
                    g.show(), c.find(".mejs-time-buffering").show();
                }, !1), e.addEventListener("loadeddata", function() {
                    g.show(), c.find(".mejs-time-buffering").show(), mejs.MediaFeatures.isAndroid && (e.canplayTimeout = window.setTimeout(function() {
                        if (document.createEvent) {
                            var a = document.createEvent("HTMLEvents");
                            return a.initEvent("canplay", !0, !0), e.dispatchEvent(a);
                        }
                    }, 300));
                }, !1), e.addEventListener("canplay", function() {
                    g.hide(), c.find(".mejs-time-buffering").hide(), clearTimeout(e.canplayTimeout);
                }, !1), e.addEventListener("error", function(a) {
                    f.handleError(a), g.hide(), i.hide(), h.show(), h.find(".mejs-overlay-error").html("Error loading this resource");
                }, !1), e.addEventListener("keydown", function(a) {
                    f.onkeydown(b, e, a);
                }, !1);
            }
        },
        buildkeyboard: function(b, c, d, e) {
            var f = this;
            f.container.keydown(function() {
                f.keyboardAction = !0;
            }), f.globalBind("keydown", function(c) {
                return b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length, f.onkeydown(b, e, c);
            }), f.globalBind("click", function(c) {
                b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length;
            });
        },
        onkeydown: function(a, b, c) {
            if (a.hasFocus && a.options.enableKeyboard) for (var d = 0, e = a.options.keyActions.length; e > d; d++) for (var f = a.options.keyActions[d], g = 0, h = f.keys.length; h > g; g++) if (c.keyCode == f.keys[g]) return "function" == typeof c.preventDefault && c.preventDefault(), 
            f.action(a, b, c.keyCode), !1;
            return !0;
        },
        findTracks: function() {
            var b = this, c = b.$media.find("track");
            b.tracks = [], c.each(function(c, d) {
                d = a(d), b.tracks.push({
                    srclang: d.attr("srclang") ? d.attr("srclang").toLowerCase() : "",
                    src: d.attr("src"),
                    kind: d.attr("kind"),
                    label: d.attr("label") || "",
                    entries: [],
                    isLoaded: !1
                });
            });
        },
        changeSkin: function(a) {
            this.container[0].className = "mejs-container " + a, this.setPlayerSize(this.width, this.height), 
            this.setControlsSize();
        },
        play: function() {
            this.load(), this.media.play();
        },
        pause: function() {
            try {
                this.media.pause();
            } catch (a) {}
        },
        load: function() {
            this.isLoaded || this.media.load(), this.isLoaded = !0;
        },
        setMuted: function(a) {
            this.media.setMuted(a);
        },
        setCurrentTime: function(a) {
            this.media.setCurrentTime(a);
        },
        getCurrentTime: function() {
            return this.media.currentTime;
        },
        setVolume: function(a) {
            this.media.setVolume(a);
        },
        getVolume: function() {
            return this.media.volume;
        },
        setSrc: function(a) {
            this.media.setSrc(a);
        },
        remove: function() {
            var a, b, c = this;
            c.container.prev(".mejs-offscreen").remove();
            for (a in c.options.features) if (b = c.options.features[a], c["clean" + b]) try {
                c["clean" + b](c);
            } catch (d) {}
            c.isDynamic ? c.$node.insertBefore(c.container) : (c.$media.prop("controls", !0), 
            c.$node.clone().insertBefore(c.container).show(), c.$node.remove()), "native" !== c.media.pluginType && c.media.remove(), 
            delete mejs.players[c.id], "object" == typeof c.container && c.container.remove(), 
            c.globalUnbind(), delete c.node.player;
        },
        rebuildtracks: function() {
            var a = this;
            a.findTracks(), a.buildtracks(a, a.controls, a.layers, a.media);
        },
        resetSize: function() {
            var a = this;
            setTimeout(function() {
                a.setPlayerSize(a.width, a.height), a.setControlsSize();
            }, 50);
        }
    }, function() {
        function b(b, d) {
            var e = {
                d: [],
                w: []
            };
            return a.each((b || "").split(" "), function(a, b) {
                var f = b + "." + d;
                0 === f.indexOf(".") ? (e.d.push(f), e.w.push(f)) : e[c.test(b) ? "w" : "d"].push(f);
            }), e.d = e.d.join(" "), e.w = e.w.join(" "), e;
        }
        var c = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function(c, d, e) {
            var f = this, g = f.node ? f.node.ownerDocument : document;
            c = b(c, f.id), c.d && a(g).bind(c.d, d, e), c.w && a(window).bind(c.w, d, e);
        }, mejs.MediaElementPlayer.prototype.globalUnbind = function(c, d) {
            var e = this, f = e.node ? e.node.ownerDocument : document;
            c = b(c, e.id), c.d && a(f).unbind(c.d, d), c.w && a(window).unbind(c.w, d);
        };
    }(), "undefined" != typeof a && (a.fn.mediaelementplayer = function(b) {
        return b === !1 ? this.each(function() {
            var b = a(this).data("mediaelementplayer");
            b && b.remove(), a(this).removeData("mediaelementplayer");
        }) : this.each(function() {
            a(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, b));
        }), this;
    }, a(document).ready(function() {
        a(".mejs-player").mediaelementplayer();
    })), window.MediaElementPlayer = mejs.MediaElementPlayer;
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        playText: mejs.i18n.t("Play"),
        pauseText: mejs.i18n.t("Pause")
    }), a.extend(MediaElementPlayer.prototype, {
        buildplaypause: function(b, c, d, e) {
            function f(a) {
                "play" === a ? (i.removeClass("mejs-play").addClass("mejs-pause"), j.attr({
                    title: h.pauseText,
                    "aria-label": h.pauseText
                })) : (i.removeClass("mejs-pause").addClass("mejs-play"), j.attr({
                    title: h.playText,
                    "aria-label": h.playText
                }));
            }
            var g = this, h = g.options, i = a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + g.id + '" title="' + h.playText + '" aria-label="' + h.playText + '"></button></div>').appendTo(c).click(function(a) {
                return a.preventDefault(), e.paused ? e.play() : e.pause(), !1;
            }), j = i.find("button");
            f("pse"), e.addEventListener("play", function() {
                f("play");
            }, !1), e.addEventListener("playing", function() {
                f("play");
            }, !1), e.addEventListener("pause", function() {
                f("pse");
            }, !1), e.addEventListener("paused", function() {
                f("pse");
            }, !1);
        }
    });
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        stopText: "Stop"
    }), a.extend(MediaElementPlayer.prototype, {
        buildstop: function(b, c, d, e) {
            var f = this;
            a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + f.id + '" title="' + f.options.stopText + '" aria-label="' + f.options.stopText + '"></button></div>').appendTo(c).click(function() {
                e.paused || e.pause(), e.currentTime > 0 && (e.setCurrentTime(0), e.pause(), c.find(".mejs-time-current").width("0px"), 
                c.find(".mejs-time-handle").css("left", "0px"), c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0, b.options)), 
                c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0, b.options)), 
                d.find(".mejs-poster").show());
            });
        }
    });
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        progessHelpText: mejs.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.")
    }), a.extend(MediaElementPlayer.prototype, {
        buildprogress: function(b, c, d, e) {
            a('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(c), 
            c.find(".mejs-time-buffering").hide();
            var f = this, g = c.find(".mejs-time-total"), h = c.find(".mejs-time-loaded"), i = c.find(".mejs-time-current"), j = c.find(".mejs-time-handle"), k = c.find(".mejs-time-float"), l = c.find(".mejs-time-float-current"), m = c.find(".mejs-time-slider"), n = function(a) {
                var c, d = g.offset(), f = g.width(), h = 0, i = 0, j = 0;
                c = a.originalEvent && a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageX : a.changedTouches ? a.changedTouches[0].pageX : a.pageX, 
                e.duration && (c < d.left ? c = d.left : c > f + d.left && (c = f + d.left), j = c - d.left, 
                h = j / f, i = .02 >= h ? 0 : h * e.duration, o && i !== e.currentTime && e.setCurrentTime(i), 
                mejs.MediaFeatures.hasTouch || (k.css("left", j), l.html(mejs.Utility.secondsToTimeCode(i, b.options)), 
                k.show()));
            }, o = !1, p = !1, q = 0, r = !1, s = b.options.autoRewind, t = function(a) {
                var c = e.currentTime, d = mejs.i18n.t("Time Slider"), f = mejs.Utility.secondsToTimeCode(c, b.options), g = e.duration;
                m.attr({
                    "aria-label": d,
                    "aria-valuemin": 0,
                    "aria-valuemax": g,
                    "aria-valuenow": c,
                    "aria-valuetext": f,
                    role: "slider",
                    tabindex: 0
                });
            }, u = function() {
                var a = new Date();
                a - q >= 1e3 && e.play();
            };
            m.bind("focus", function(a) {
                b.options.autoRewind = !1;
            }), m.bind("blur", function(a) {
                b.options.autoRewind = s;
            }), m.bind("keydown", function(a) {
                new Date() - q >= 1e3 && (r = e.paused);
                var b = a.keyCode, c = e.duration, d = e.currentTime;
                switch (b) {
                  case 37:
                    d -= 1;
                    break;

                  case 39:
                    d += 1;
                    break;

                  case 38:
                    d += Math.floor(.1 * c);
                    break;

                  case 40:
                    d -= Math.floor(.1 * c);
                    break;

                  case 36:
                    d = 0;
                    break;

                  case 35:
                    d = c;
                    break;

                  case 10:
                    return void (e.paused ? e.play() : e.pause());

                  case 13:
                    return void (e.paused ? e.play() : e.pause());

                  default:
                    return;
                }
                return d = 0 > d ? 0 : d >= c ? c : Math.floor(d), q = new Date(), r || e.pause(), 
                d < e.duration && !r && setTimeout(u, 1100), e.setCurrentTime(d), a.preventDefault(), 
                a.stopPropagation(), !1;
            }), g.bind("mousedown touchstart", function(a) {
                (1 === a.which || 0 === a.which) && (o = !0, n(a), f.globalBind("mousemove.dur touchmove.dur", function(a) {
                    n(a);
                }), f.globalBind("mouseup.dur touchend.dur", function(a) {
                    o = !1, k.hide(), f.globalUnbind(".dur");
                }));
            }).bind("mouseenter", function(a) {
                p = !0, f.globalBind("mousemove.dur", function(a) {
                    n(a);
                }), mejs.MediaFeatures.hasTouch || k.show();
            }).bind("mouseleave", function(a) {
                p = !1, o || (f.globalUnbind(".dur"), k.hide());
            }), e.addEventListener("progress", function(a) {
                b.setProgressRail(a), b.setCurrentRail(a);
            }, !1), e.addEventListener("timeupdate", function(a) {
                b.setProgressRail(a), b.setCurrentRail(a), t(a);
            }, !1), f.container.on("controlsresize", function() {
                b.setProgressRail(), b.setCurrentRail();
            }), f.loaded = h, f.total = g, f.current = i, f.handle = j;
        },
        setProgressRail: function(a) {
            var b = this, c = void 0 !== a ? a.target : b.media, d = null;
            c && c.buffered && c.buffered.length > 0 && c.buffered.end && c.duration ? d = c.buffered.end(c.buffered.length - 1) / c.duration : c && void 0 !== c.bytesTotal && c.bytesTotal > 0 && void 0 !== c.bufferedBytes ? d = c.bufferedBytes / c.bytesTotal : a && a.lengthComputable && 0 !== a.total && (d = a.loaded / a.total), 
            null !== d && (d = Math.min(1, Math.max(0, d)), b.loaded && b.total && b.loaded.width(b.total.width() * d));
        },
        setCurrentRail: function() {
            var a = this;
            if (void 0 !== a.media.currentTime && a.media.duration && a.total && a.handle) {
                var b = Math.round(a.total.width() * a.media.currentTime / a.media.duration), c = b - Math.round(a.handle.outerWidth(!0) / 2);
                a.current.width(b), a.handle.css("left", c);
            }
        }
    });
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: "<span> | </span>"
    }), a.extend(MediaElementPlayer.prototype, {
        buildcurrent: function(b, c, d, e) {
            var f = this;
            a('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + mejs.Utility.secondsToTimeCode(0, b.options) + "</span></div>").appendTo(c), 
            f.currenttime = f.controls.find(".mejs-currenttime"), e.addEventListener("timeupdate", function() {
                b.updateCurrent();
            }, !1);
        },
        buildduration: function(b, c, d, e) {
            var f = this;
            c.children().last().find(".mejs-currenttime").length > 0 ? a(f.options.timeAndDurationSeparator + '<span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(f.options.duration, f.options) + "</span>").appendTo(c.find(".mejs-time")) : (c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), 
            a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(f.options.duration, f.options) + "</span></div>").appendTo(c)), 
            f.durationD = f.controls.find(".mejs-duration"), e.addEventListener("timeupdate", function() {
                b.updateDuration();
            }, !1);
        },
        updateCurrent: function() {
            var a = this;
            a.currenttime && a.currenttime.html(mejs.Utility.secondsToTimeCode(a.media.currentTime, a.options));
        },
        updateDuration: function() {
            var a = this;
            a.container.toggleClass("mejs-long-video", a.media.duration > 3600), a.durationD && (a.options.duration > 0 || a.media.duration) && a.durationD.html(mejs.Utility.secondsToTimeCode(a.options.duration > 0 ? a.options.duration : a.media.duration, a.options));
        }
    });
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        allyVolumeControlText: mejs.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."),
        hideVolumeOnTouchDevices: !0,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    }), a.extend(MediaElementPlayer.prototype, {
        buildvolume: function(b, c, d, e) {
            if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
                var f = this, g = f.isVideo ? f.options.videoVolume : f.options.audioVolume, h = "horizontal" == g ? a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + f.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(c) : a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + f.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(c), i = f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"), j = f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"), k = f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"), l = f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"), m = function(a, b) {
                    if (!i.is(":visible") && "undefined" == typeof b) return i.show(), m(a, !0), void i.hide();
                    a = Math.max(0, a), a = Math.min(a, 1), 0 === a ? (h.removeClass("mejs-mute").addClass("mejs-unmute"), 
                    h.children("button").attr("title", mejs.i18n.t("Unmute")).attr("aria-label", mejs.i18n.t("Unmute"))) : (h.removeClass("mejs-unmute").addClass("mejs-mute"), 
                    h.children("button").attr("title", mejs.i18n.t("Mute")).attr("aria-label", mejs.i18n.t("Mute")));
                    var c = j.position();
                    if ("vertical" == g) {
                        var d = j.height(), e = d - d * a;
                        l.css("top", Math.round(c.top + e - l.height() / 2)), k.height(d - e), k.css("top", c.top + e);
                    } else {
                        var f = j.width(), n = f * a;
                        l.css("left", Math.round(c.left + n - l.width() / 2)), k.width(Math.round(n));
                    }
                }, n = function(a) {
                    var b = null, c = j.offset();
                    if ("vertical" === g) {
                        var d = j.height(), f = a.pageY - c.top;
                        if (b = (d - f) / d, 0 === c.top || 0 === c.left) return;
                    } else {
                        var h = j.width(), i = a.pageX - c.left;
                        b = i / h;
                    }
                    b = Math.max(0, b), b = Math.min(b, 1), m(b), 0 === b ? e.setMuted(!0) : e.setMuted(!1), 
                    e.setVolume(b);
                }, o = !1, p = !1;
                h.hover(function() {
                    i.show(), p = !0;
                }, function() {
                    p = !1, o || "vertical" != g || i.hide();
                });
                var q = function(a) {
                    var b = Math.floor(100 * e.volume);
                    i.attr({
                        "aria-label": mejs.i18n.t("volumeSlider"),
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": b,
                        "aria-valuetext": b + "%",
                        role: "slider",
                        tabindex: 0
                    });
                };
                i.bind("mouseover", function() {
                    p = !0;
                }).bind("mousedown", function(a) {
                    return n(a), f.globalBind("mousemove.vol", function(a) {
                        n(a);
                    }), f.globalBind("mouseup.vol", function() {
                        o = !1, f.globalUnbind(".vol"), p || "vertical" != g || i.hide();
                    }), o = !0, !1;
                }).bind("keydown", function(a) {
                    var b = a.keyCode, c = e.volume;
                    switch (b) {
                      case 38:
                        c += .1;
                        break;

                      case 40:
                        c -= .1;
                        break;

                      default:
                        return !0;
                    }
                    return o = !1, m(c), e.setVolume(c), !1;
                }), h.find("button").click(function() {
                    e.setMuted(!e.muted);
                }), h.find("button").bind("focus", function() {
                    i.show();
                }), e.addEventListener("volumechange", function(a) {
                    o || (e.muted ? (m(0), h.removeClass("mejs-mute").addClass("mejs-unmute")) : (m(e.volume), 
                    h.removeClass("mejs-unmute").addClass("mejs-mute"))), q(a);
                }, !1), 0 === b.options.startVolume && e.setMuted(!0), "native" === e.pluginType && e.setVolume(b.options.startVolume), 
                f.container.on("controlsresize", function() {
                    m(e.volume);
                });
            }
        }
    });
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        usePluginFullScreen: !0,
        newWindowCallback: function() {
            return "";
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    }), a.extend(MediaElementPlayer.prototype, {
        isFullScreen: !1,
        isNativeFullScreen: !1,
        isInIframe: !1,
        buildfullscreen: function(b, c, d, e) {
            if (b.isVideo) {
                if (b.isInIframe = window.location != window.parent.location, mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    var f = function(a) {
                        b.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (b.isNativeFullScreen = !0, 
                        b.setControlsSize()) : (b.isNativeFullScreen = !1, b.exitFullScreen()));
                    };
                    b.globalBind(mejs.MediaFeatures.fullScreenEventName, f);
                }
                var g = this, h = a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + g.id + '" title="' + g.options.fullscreenText + '" aria-label="' + g.options.fullscreenText + '"></button></div>').appendTo(c);
                if ("native" === g.media.pluginType || !g.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) h.click(function() {
                    var a = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || b.isFullScreen;
                    a ? b.exitFullScreen() : b.enterFullScreen();
                }); else {
                    var i = null, j = function() {
                        var a, b = document.createElement("x"), c = document.documentElement, d = window.getComputedStyle;
                        return "pointerEvents" in b.style ? (b.style.pointerEvents = "auto", b.style.pointerEvents = "x", 
                        c.appendChild(b), a = d && "auto" === d(b, "").pointerEvents, c.removeChild(b), 
                        !!a) : !1;
                    }();
                    if (j && !mejs.MediaFeatures.isOpera) {
                        var k, l, m = !1, n = function() {
                            if (m) {
                                for (var a in o) o[a].hide();
                                h.css("pointer-events", ""), g.controls.css("pointer-events", ""), g.media.removeEventListener("click", g.clickToPlayPauseCallback), 
                                m = !1;
                            }
                        }, o = {}, p = [ "top", "left", "right", "bottom" ], q = function() {
                            var a = h.offset().left - g.container.offset().left, b = h.offset().top - g.container.offset().top, c = h.outerWidth(!0), d = h.outerHeight(!0), e = g.container.width(), f = g.container.height();
                            for (k in o) o[k].css({
                                position: "absolute",
                                top: 0,
                                left: 0
                            });
                            o.top.width(e).height(b), o.left.width(a).height(d).css({
                                top: b
                            }), o.right.width(e - a - c).height(d).css({
                                top: b,
                                left: a + c
                            }), o.bottom.width(e).height(f - d - b).css({
                                top: b + d
                            });
                        };
                        for (g.globalBind("resize", function() {
                            q();
                        }), k = 0, l = p.length; l > k; k++) o[p[k]] = a('<div class="mejs-fullscreen-hover" />').appendTo(g.container).mouseover(n).hide();
                        h.on("mouseover", function() {
                            if (!g.isFullScreen) {
                                var a = h.offset(), c = b.container.offset();
                                e.positionFullscreenButton(a.left - c.left, a.top - c.top, !1), h.css("pointer-events", "none"), 
                                g.controls.css("pointer-events", "none"), g.media.addEventListener("click", g.clickToPlayPauseCallback);
                                for (k in o) o[k].show();
                                q(), m = !0;
                            }
                        }), e.addEventListener("fullscreenchange", function(a) {
                            g.isFullScreen = !g.isFullScreen, g.isFullScreen ? g.media.removeEventListener("click", g.clickToPlayPauseCallback) : g.media.addEventListener("click", g.clickToPlayPauseCallback), 
                            n();
                        }), g.globalBind("mousemove", function(a) {
                            if (m) {
                                var b = h.offset();
                                (a.pageY < b.top || a.pageY > b.top + h.outerHeight(!0) || a.pageX < b.left || a.pageX > b.left + h.outerWidth(!0)) && (h.css("pointer-events", ""), 
                                g.controls.css("pointer-events", ""), m = !1);
                            }
                        });
                    } else h.on("mouseover", function() {
                        null !== i && (clearTimeout(i), delete i);
                        var a = h.offset(), c = b.container.offset();
                        e.positionFullscreenButton(a.left - c.left, a.top - c.top, !0);
                    }).on("mouseout", function() {
                        null !== i && (clearTimeout(i), delete i), i = setTimeout(function() {
                            e.hideFullscreenButton();
                        }, 1500);
                    });
                }
                b.fullscreenBtn = h, g.globalBind("keydown", function(a) {
                    (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || g.isFullScreen) && 27 == a.keyCode && b.exitFullScreen();
                }), g.normalHeight = 0, g.normalWidth = 0;
            }
        },
        cleanfullscreen: function(a) {
            a.exitFullScreen();
        },
        containerSizeTimeout: null,
        enterFullScreen: function() {
            var b = this;
            if ("native" === b.media.pluginType || !mejs.MediaFeatures.isFirefox && !b.options.usePluginFullScreen) {
                if (a(document.documentElement).addClass("mejs-fullscreen"), b.normalHeight = b.container.height(), 
                b.normalWidth = b.container.width(), "native" === b.media.pluginType) if (mejs.MediaFeatures.hasTrueNativeFullScreen) mejs.MediaFeatures.requestFullScreen(b.container[0]), 
                b.isInIframe && setTimeout(function d() {
                    if (b.isNativeFullScreen) {
                        var c = window.devicePixelRatio || 1, e = .002, f = c * a(window).width(), g = screen.width, h = c * f;
                        Math.abs(g - f) > Math.abs(g - h) && (f = h);
                        var i = Math.abs(g - f), j = g * e;
                        i > j ? b.exitFullScreen() : setTimeout(d, 500);
                    }
                }, 1e3); else if (mejs.MediaFeatures.hasSemiNativeFullScreen) return void b.media.webkitEnterFullscreen();
                if (b.isInIframe) {
                    var c = b.options.newWindowCallback(this);
                    if ("" !== c) {
                        if (!mejs.MediaFeatures.hasTrueNativeFullScreen) return b.pause(), void window.open(c, b.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                        setTimeout(function() {
                            b.isNativeFullScreen || (b.pause(), window.open(c, b.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"));
                        }, 250);
                    }
                }
                b.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), 
                b.containerSizeTimeout = setTimeout(function() {
                    b.container.css({
                        width: "100%",
                        height: "100%"
                    }), b.setControlsSize();
                }, 500), "native" === b.media.pluginType ? b.$media.width("100%").height("100%") : (b.container.find(".mejs-shim").width("100%").height("100%"), 
                b.media.setVideoSize(a(window).width(), a(window).height())), b.layers.children("div").width("100%").height("100%"), 
                b.fullscreenBtn && b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), 
                b.setControlsSize(), b.isFullScreen = !0, b.container.find(".mejs-captions-text").css("font-size", screen.width / b.width * 1 * 100 + "%"), 
                b.container.find(".mejs-captions-position").css("bottom", "45px"), b.container.trigger("enteredfullscreen");
            }
        },
        exitFullScreen: function() {
            var b = this;
            return clearTimeout(b.containerSizeTimeout), "native" !== b.media.pluginType && mejs.MediaFeatures.isFirefox ? void b.media.setFullscreen(!1) : (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || b.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), 
            a(document.documentElement).removeClass("mejs-fullscreen"), b.container.removeClass("mejs-container-fullscreen").width(b.normalWidth).height(b.normalHeight), 
            "native" === b.media.pluginType ? b.$media.width(b.normalWidth).height(b.normalHeight) : (b.container.find(".mejs-shim").width(b.normalWidth).height(b.normalHeight), 
            b.media.setVideoSize(b.normalWidth, b.normalHeight)), b.layers.children("div").width(b.normalWidth).height(b.normalHeight), 
            b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), b.setControlsSize(), 
            b.isFullScreen = !1, b.container.find(".mejs-captions-text").css("font-size", ""), 
            b.container.find(".mejs-captions-position").css("bottom", ""), void b.container.trigger("exitedfullscreen"));
        }
    });
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        speeds: [ "2.00", "1.50", "1.25", "1.00", "0.75" ],
        defaultSpeed: "1.00",
        speedChar: "x"
    }), a.extend(MediaElementPlayer.prototype, {
        buildspeed: function(b, c, d, e) {
            var f = this;
            if ("native" == f.media.pluginType) {
                for (var g = null, h = null, i = null, j = null, k = [], l = !1, m = 0, n = f.options.speeds.length; n > m; m++) {
                    var o = f.options.speeds[m];
                    "string" == typeof o ? (k.push({
                        name: o + f.options.speedChar,
                        value: o
                    }), o === f.options.defaultSpeed && (l = !0)) : (k.push(o), o.value === f.options.defaultSpeed && (l = !0));
                }
                l || k.push({
                    name: f.options.defaultSpeed + f.options.speedChar,
                    value: f.options.defaultSpeed
                }), k.sort(function(a, b) {
                    return parseFloat(b.value) - parseFloat(a.value);
                });
                var p = function(a) {
                    for (m = 0, n = k.length; n > m; m++) if (k[m].value === a) return k[m].name;
                }, q = '<div class="mejs-button mejs-speed-button"><button type="button">' + p(f.options.defaultSpeed) + '</button><div class="mejs-speed-selector"><ul>';
                for (m = 0, il = k.length; m < il; m++) j = f.id + "-speed-" + k[m].value, q += '<li><input type="radio" name="speed" value="' + k[m].value + '" id="' + j + '" ' + (k[m].value === f.options.defaultSpeed ? " checked" : "") + ' /><label for="' + j + '" ' + (k[m].value === f.options.defaultSpeed ? ' class="mejs-speed-selected"' : "") + ">" + k[m].name + "</label></li>";
                q += "</ul></div></div>", g = a(q).appendTo(c), h = g.find(".mejs-speed-selector"), 
                i = f.options.defaultSpeed, e.addEventListener("loadedmetadata", function(a) {
                    i && (e.playbackRate = parseFloat(i));
                }, !0), h.on("click", 'input[type="radio"]', function() {
                    var b = a(this).attr("value");
                    i = b, e.playbackRate = parseFloat(b), g.find("button").html(p(b)), g.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), 
                    g.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected");
                }), g.one("mouseenter focusin", function() {
                    h.height(g.find(".mejs-speed-selector ul").outerHeight(!0) + g.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * h.height() + "px");
                });
            }
        }
    });
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        tracksAriaLive: !1,
        hideCaptionsButtonWhenEmpty: !0,
        toggleCaptionsButtonWhenOnlyOne: !1,
        slidesSelector: ""
    }), a.extend(MediaElementPlayer.prototype, {
        hasChapters: !1,
        cleartracks: function(a, b, c, d) {
            a && (a.captions && a.captions.remove(), a.chapters && a.chapters.remove(), a.captionsText && a.captionsText.remove(), 
            a.captionsButton && a.captionsButton.remove());
        },
        buildtracks: function(b, c, d, e) {
            if (0 !== b.tracks.length) {
                var f, g = this, h = g.options.tracksAriaLive ? 'role="log" aria-live="assertive" aria-atomic="false"' : "";
                if (g.domNode.textTracks) for (f = g.domNode.textTracks.length - 1; f >= 0; f--) g.domNode.textTracks[f].mode = "hidden";
                g.cleartracks(b, c, d, e), b.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide(), 
                b.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' + h + '><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide(), 
                b.captionsText = b.captions.find(".mejs-captions-text"), b.captionsButton = a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + g.id + '" title="' + g.options.tracksText + '" aria-label="' + g.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + b.id + '_captions" id="' + b.id + '_captions_none" value="none" checked="checked" /><label for="' + b.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(c);
                var i = 0;
                for (f = 0; f < b.tracks.length; f++) "subtitles" == b.tracks[f].kind && i++;
                for (g.options.toggleCaptionsButtonWhenOnlyOne && 1 == i ? b.captionsButton.on("click", function() {
                    null === b.selectedTrack ? lang = b.tracks[0].srclang : lang = "none", b.setTrack(lang);
                }) : (b.captionsButton.on("mouseenter focusin", function() {
                    a(this).find(".mejs-captions-selector").css("visibility", "visible");
                }).on("click", "input[type=radio]", function() {
                    lang = this.value, b.setTrack(lang);
                }), b.captionsButton.on("mouseleave focusout", function() {
                    a(this).find(".mejs-captions-selector").css("visibility", "hidden");
                })), b.options.alwaysShowControls ? b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : b.container.bind("controlsshown", function() {
                    b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover");
                }).bind("controlshidden", function() {
                    e.paused || b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover");
                }), b.trackToLoad = -1, b.selectedTrack = null, b.isLoadingTrack = !1, f = 0; f < b.tracks.length; f++) "subtitles" == b.tracks[f].kind && b.addTrackButton(b.tracks[f].srclang, b.tracks[f].label);
                b.loadNextTrack(), e.addEventListener("timeupdate", function(a) {
                    b.displayCaptions();
                }, !1), "" !== b.options.slidesSelector && (b.slidesContainer = a(b.options.slidesSelector), 
                e.addEventListener("timeupdate", function(a) {
                    b.displaySlides();
                }, !1)), e.addEventListener("loadedmetadata", function(a) {
                    b.displayChapters();
                }, !1), b.container.hover(function() {
                    b.hasChapters && (b.chapters.css("visibility", "visible"), b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight()));
                }, function() {
                    b.hasChapters && !e.paused && b.chapters.fadeOut(200, function() {
                        a(this).css("visibility", "hidden"), a(this).css("display", "block");
                    });
                }), g.container.on("controlsresize", function() {
                    g.adjustLanguageBox();
                }), null !== b.node.getAttribute("autoplay") && b.chapters.css("visibility", "hidden");
            }
        },
        setTrack: function(a) {
            var b, c = this;
            if ("none" == a) c.selectedTrack = null, c.captionsButton.removeClass("mejs-captions-enabled"); else for (b = 0; b < c.tracks.length; b++) if (c.tracks[b].srclang == a) {
                null === c.selectedTrack && c.captionsButton.addClass("mejs-captions-enabled"), 
                c.selectedTrack = c.tracks[b], c.captions.attr("lang", c.selectedTrack.srclang), 
                c.displayCaptions();
                break;
            }
        },
        loadNextTrack: function() {
            var a = this;
            a.trackToLoad++, a.trackToLoad < a.tracks.length ? (a.isLoadingTrack = !0, a.loadTrack(a.trackToLoad)) : (a.isLoadingTrack = !1, 
            a.checkForTracks());
        },
        loadTrack: function(b) {
            var c = this, d = c.tracks[b], e = function() {
                d.isLoaded = !0, c.enableTrackButton(d.srclang, d.label), c.loadNextTrack();
            };
            a.ajax({
                url: d.src,
                dataType: "text",
                success: function(a) {
                    "string" == typeof a && /<tt\s+xml/gi.exec(a) ? d.entries = mejs.TrackFormatParser.dfxp.parse(a) : d.entries = mejs.TrackFormatParser.webvtt.parse(a), 
                    e(), "chapters" == d.kind && c.media.addEventListener("play", function(a) {
                        c.media.duration > 0 && c.displayChapters(d);
                    }, !1), "slides" == d.kind && c.setupSlides(d);
                },
                error: function() {
                    c.removeTrackButton(d.srclang), c.loadNextTrack();
                }
            });
        },
        enableTrackButton: function(b, c) {
            var d = this;
            "" === c && (c = mejs.language.codes[b] || b), d.captionsButton.find("input[value=" + b + "]").prop("disabled", !1).siblings("label").html(c), 
            d.options.startLanguage == b && a("#" + d.id + "_captions_" + b).prop("checked", !0).trigger("click"), 
            d.adjustLanguageBox();
        },
        removeTrackButton: function(a) {
            var b = this;
            b.captionsButton.find("input[value=" + a + "]").closest("li").remove(), b.adjustLanguageBox();
        },
        addTrackButton: function(b, c) {
            var d = this;
            "" === c && (c = mejs.language.codes[b] || b), d.captionsButton.find("ul").append(a('<li><input type="radio" name="' + d.id + '_captions" id="' + d.id + "_captions_" + b + '" value="' + b + '" disabled="disabled" /><label for="' + d.id + "_captions_" + b + '">' + c + " (loading)</label></li>")), 
            d.adjustLanguageBox(), d.container.find(".mejs-captions-translations option[value=" + b + "]").remove();
        },
        adjustLanguageBox: function() {
            var a = this;
            a.captionsButton.find(".mejs-captions-selector").height(a.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + a.captionsButton.find(".mejs-captions-translations").outerHeight(!0));
        },
        checkForTracks: function() {
            var a = this, b = !1;
            if (a.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < a.tracks.length; i++) if ("subtitles" == a.tracks[i].kind && a.tracks[i].isLoaded) {
                    b = !0;
                    break;
                }
                b || (a.captionsButton.hide(), a.setControlsSize());
            }
        },
        displayCaptions: function() {
            if ("undefined" != typeof this.tracks) {
                var a, b = this, c = b.selectedTrack;
                if (null !== c && c.isLoaded) {
                    for (a = 0; a < c.entries.times.length; a++) if (b.media.currentTime >= c.entries.times[a].start && b.media.currentTime <= c.entries.times[a].stop) return b.captionsText.html(c.entries.text[a]).attr("class", "mejs-captions-text " + (c.entries.times[a].identifier || "")), 
                    void b.captions.show().height(0);
                    b.captions.hide();
                } else b.captions.hide();
            }
        },
        setupSlides: function(a) {
            var b = this;
            b.slides = a, b.slides.entries.imgs = [ b.slides.entries.text.length ], b.showSlide(0);
        },
        showSlide: function(b) {
            if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
                var c = this, d = c.slides.entries.text[b], e = c.slides.entries.imgs[b];
                "undefined" == typeof e || "undefined" == typeof e.fadeIn ? c.slides.entries.imgs[b] = e = a('<img src="' + d + '">').on("load", function() {
                    e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut();
                }) : e.is(":visible") || e.is(":animated") || e.fadeIn().siblings(":visible").fadeOut();
            }
        },
        displaySlides: function() {
            if ("undefined" != typeof this.slides) {
                var a, b = this, c = b.slides;
                for (a = 0; a < c.entries.times.length; a++) if (b.media.currentTime >= c.entries.times[a].start && b.media.currentTime <= c.entries.times[a].stop) return void b.showSlide(a);
            }
        },
        displayChapters: function() {
            var a, b = this;
            for (a = 0; a < b.tracks.length; a++) if ("chapters" == b.tracks[a].kind && b.tracks[a].isLoaded) {
                b.drawChapters(b.tracks[a]), b.hasChapters = !0;
                break;
            }
        },
        drawChapters: function(b) {
            var c, d, e = this, f = 0, g = 0;
            for (e.chapters.empty(), c = 0; c < b.entries.times.length; c++) d = b.entries.times[c].stop - b.entries.times[c].start, 
            f = Math.floor(d / e.media.duration * 100), (f + g > 100 || c == b.entries.times.length - 1 && 100 > f + g) && (f = 100 - g), 
            e.chapters.append(a('<div class="mejs-chapter" rel="' + b.entries.times[c].start + '" style="left: ' + g.toString() + "%;width: " + f.toString() + '%;"><div class="mejs-chapter-block' + (c == b.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + b.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(b.entries.times[c].start, e.options) + "&ndash;" + mejs.Utility.secondsToTimeCode(b.entries.times[c].stop, e.options) + "</span></div></div>")), 
            g += f;
            e.chapters.find("div.mejs-chapter").click(function() {
                e.media.setCurrentTime(parseFloat(a(this).attr("rel"))), e.media.paused && e.media.play();
            }), e.chapters.show();
        }
    }), mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            fl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    }, mejs.TrackFormatParser = {
        webvtt: {
            pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function(b) {
                for (var c, d, e, f = 0, g = mejs.TrackFormatParser.split2(b, /\r?\n/), h = {
                    text: [],
                    times: []
                }; f < g.length; f++) {
                    if (c = this.pattern_timecode.exec(g[f]), c && f < g.length) {
                        for (f - 1 >= 0 && "" !== g[f - 1] && (e = g[f - 1]), f++, d = g[f], f++; "" !== g[f] && f < g.length; ) d = d + "\n" + g[f], 
                        f++;
                        d = a.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), 
                        h.text.push(d), h.times.push({
                            identifier: e,
                            start: 0 === mejs.Utility.convertSMPTEtoSeconds(c[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(c[1]),
                            stop: mejs.Utility.convertSMPTEtoSeconds(c[3]),
                            settings: c[5]
                        });
                    }
                    e = "";
                }
                return h;
            }
        },
        dfxp: {
            parse: function(b) {
                b = a(b).filter("tt");
                var c, d, e = 0, f = b.children("div").eq(0), g = f.find("p"), h = b.find("#" + f.attr("style")), i = {
                    text: [],
                    times: []
                };
                if (h.length) {
                    var j = h.removeAttr("id").get(0).attributes;
                    if (j.length) for (c = {}, e = 0; e < j.length; e++) c[j[e].name.split(":")[1]] = j[e].value;
                }
                for (e = 0; e < g.length; e++) {
                    var k, l = {
                        start: null,
                        stop: null,
                        style: null
                    };
                    if (g.eq(e).attr("begin") && (l.start = mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("begin"))), 
                    !l.start && g.eq(e - 1).attr("end") && (l.start = mejs.Utility.convertSMPTEtoSeconds(g.eq(e - 1).attr("end"))), 
                    g.eq(e).attr("end") && (l.stop = mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("end"))), 
                    !l.stop && g.eq(e + 1).attr("begin") && (l.stop = mejs.Utility.convertSMPTEtoSeconds(g.eq(e + 1).attr("begin"))), 
                    c) {
                        k = "";
                        for (var m in c) k += m + ":" + c[m] + ";";
                    }
                    k && (l.style = k), 0 === l.start && (l.start = .2), i.times.push(l), d = a.trim(g.eq(e).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), 
                    i.text.push(d), 0 === i.times.start && (i.times.start = 2);
                }
                return i;
            }
        },
        split2: function(a, b) {
            return a.split(b);
        }
    }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function(a, b) {
        var c, d = [], e = "";
        for (c = 0; c < a.length; c++) e += a.substring(c, c + 1), b.test(e) && (d.push(e.replace(b, "")), 
        e = "");
        return d.push(e), d;
    });
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        contextMenuItems: [ {
            render: function(a) {
                return "undefined" == typeof a.enterFullScreen ? null : a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen");
            },
            click: function(a) {
                a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen();
            }
        }, {
            render: function(a) {
                return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute");
            },
            click: function(a) {
                a.media.muted ? a.setMuted(!1) : a.setMuted(!0);
            }
        }, {
            isSeparator: !0
        }, {
            render: function(a) {
                return mejs.i18n.t("Download Video");
            },
            click: function(a) {
                window.location.href = a.media.currentSrc;
            }
        } ]
    }), a.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function(b, c, d, e) {
            b.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide(), 
            b.container.bind("contextmenu", function(a) {
                return b.isContextMenuEnabled ? (a.preventDefault(), b.renderContextMenu(a.clientX - 1, a.clientY - 1), 
                !1) : void 0;
            }), b.container.bind("click", function() {
                b.contextMenu.hide();
            }), b.contextMenu.bind("mouseleave", function() {
                b.startContextMenuTimer();
            });
        },
        cleancontextmenu: function(a) {
            a.contextMenu.remove();
        },
        isContextMenuEnabled: !0,
        enableContextMenu: function() {
            this.isContextMenuEnabled = !0;
        },
        disableContextMenu: function() {
            this.isContextMenuEnabled = !1;
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function() {
            var a = this;
            a.killContextMenuTimer(), a.contextMenuTimer = setTimeout(function() {
                a.hideContextMenu(), a.killContextMenuTimer();
            }, 750);
        },
        killContextMenuTimer: function() {
            var a = this.contextMenuTimer;
            null != a && (clearTimeout(a), delete a, a = null);
        },
        hideContextMenu: function() {
            this.contextMenu.hide();
        },
        renderContextMenu: function(b, c) {
            for (var d = this, e = "", f = d.options.contextMenuItems, g = 0, h = f.length; h > g; g++) if (f[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>'; else {
                var i = f[g].render(d);
                null != i && (e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + 1e6 * Math.random() + '">' + i + "</div>");
            }
            d.contextMenu.empty().append(a(e)).css({
                top: c,
                left: b
            }).show(), d.contextMenu.find(".mejs-contextmenu-item").each(function() {
                var b = a(this), c = parseInt(b.data("itemindex"), 10), e = d.options.contextMenuItems[c];
                "undefined" != typeof e.show && e.show(b, d), b.click(function() {
                    "undefined" != typeof e.click && e.click(d), d.contextMenu.hide();
                });
            }), setTimeout(function() {
                d.killControlsTimer("rev3");
            }, 100);
        }
    });
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        skipBackInterval: 30,
        skipBackText: mejs.i18n.t("Skip back %1 seconds")
    }), a.extend(MediaElementPlayer.prototype, {
        buildskipback: function(b, c, d, e) {
            var f = this, g = f.options.skipBackText.replace("%1", f.options.skipBackInterval);
            a('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' + f.id + '" title="' + g + '" aria-label="' + g + '">' + f.options.skipBackInterval + "</button></div>").appendTo(c).click(function() {
                e.setCurrentTime(Math.max(e.currentTime - f.options.skipBackInterval, 0)), a(this).find("button").blur();
            });
        }
    });
}(mejs.$), function(a) {
    a.extend(mejs.MepDefaults, {
        postrollCloseText: mejs.i18n.t("Close")
    }), a.extend(MediaElementPlayer.prototype, {
        buildpostroll: function(b, c, d, e) {
            var f = this, g = f.container.find('link[rel="postroll"]').attr("href");
            "undefined" != typeof g && (b.postroll = a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + f.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide(), 
            f.media.addEventListener("ended", function(c) {
                a.ajax({
                    dataType: "html",
                    url: g,
                    success: function(a, b) {
                        d.find(".mejs-postroll-layer-content").html(a);
                    }
                }), b.postroll.show();
            }, !1));
        }
    });
}(mejs.$), jQuery(function(a) {
    function b() {
        var a = new google.maps.LatLng(38.723852, -9.149396), b = new google.maps.Map(document.getElementById("a-google-map"), {
            center: a,
            zoom: 15,
            scrollwheel: !1,
            disableDefaultUI: !0
        });
        new google.maps.Marker({
            position: a,
            map: b
        });
    }
    a("#a-google-map").length && google.maps.event.addDomListener(window, "load", b);
}), jQuery(function(a) {
    window.aws = {};
}), jQuery(function(a) {
    Site = function() {
        this.init();
    }, Site.prototype = {
        init: function() {
            this.menuClass(), this.reservationDatepicker(), this.uploadFile(), this.dropkick(), 
            this.menu(), this.reservation(), this.slickgallery();
        },
        slickgallery: function() {
            if (a(".a-slick-gallery")) {
                new Swiper(".swiper-container", {
                    pagination: ".swiper-pagination",
                    paginationClickable: !0,
                    nextButton: ".swiper-button-next",
                    prevButton: ".swiper-button-prev",
                    slidesPerView: 2,
                    spaceBetween: 30
                });
                a(".a-tabs__content:not(.a-tabs__content--selected)").hide(), a(".a-tab-visibility").length && a(".a-tab-visibility").removeClass("a-tab-visibility");
            }
        },
        dropkick: function() {
            a(".a-field-select").length && a(".a-field-select").dropkick({
                mobile: !0
            });
        },
        reservationDatepicker: function() {
            if (a("#date-reserve").length) {
                new Pikaday({
                    field: document.getElementById("date-reserve"),
                    format: "D MMM YYYY"
                });
            }
            this.reservaDatepicker(), a(".fa.fa-calendar", ".a-input-text--date-reserva-content").length && a(".fa.fa-calendar", ".a-input-text--date-reserva-content").on("click", function(b) {
                a(this).siblings("input.a-input-text--date-reserva").click();
            });
        },
        reservaDatepicker: function() {
            if (a("#arrivalDate").length) {
                var b, c, d = function() {
                    g.setStartRange(b), h.setStartRange(b), h.setMinDate(b);
                }, e = function() {
                    g.setEndRange(c), g.setMaxDate(c), h.setEndRange(c);
                }, f = function() {
                    var b = moment(g.getDate()), c = moment(h.getDate()), d = c.diff(b, "days");
                    isNaN(d) || a("#nights-reservar").val(d);
                }, g = new Pikaday({
                    field: document.getElementById("arrivalDate"),
                    minDate: new Date(),
                    maxDate: new Date(2090, 12, 31),
                    onSelect: function() {
                        b = this.getDate(), d(), f();
                    }
                }), h = new Pikaday({
                    field: document.getElementById("checkoutDate"),
                    minDate: new Date(),
                    maxDate: new Date(2090, 12, 31),
                    onSelect: function() {
                        c = this.getDate(), e(), f();
                    }
                });
                _startDate = g.getDate(), _endDate = h.getDate(), _startDate && (b = _startDate, 
                d()), _endDate && (c = _endDate, e()), a(window).on("updateReservasiotnDate", function() {
                    g.destroy(), h.destroy();
                });
            }
        },
        menuClass: function() {
            if (a(".a-menu-main--footer a.current-menu-item").length > 1 && a(".a-menu-main--header a.current-menu-item").length > 1) {
                var b = a(" a.current-menu-item");
                a("a.current-menu-item").removeClass("current-menu-item"), b.each(function(b, c) {
                    c.href === location.href && a(c).addClass("current-menu-item");
                });
            }
            a(".a-menu-main--footer a, .a-menu-main--header a").each(function(b, c) {
                c.href.match(/#/) && a(c).on("click", function(b) {
                    c.href && (a("a.current-menu-item").removeClass("current-menu-item"), a('.a-menu-main--footer a[href="' + c.href + '"] ,\n                            .a-menu-main--header a[href="' + c.href + '"]').addClass("current-menu-item"));
                    var d = a(".a-btn.a-btn--menu", ".a-menu");
                    d.hasClass("a-btn--menu--selected") && d.click();
                });
            });
        },
        uploadFile: function() {
            a(".a-input-file").length && a(".a-input-file").on("change", function(b) {
                var c = b.target.files, d = a(this).siblings(".a-input-fake");
                a(d).html(""), c.length && c[0].name && a(d).html(c[0].name);
            });
        },
        menu: function() {
            var b = a(".a-menu-main--header"), c = a(".a-btn--menu");
            b.length && c.on("click", function(a) {
                a.preventDefault(), c.hasClass("a-btn--menu--selected") ? (c.removeClass("a-btn--menu--selected"), 
                b.slideUp()) : (c.addClass("a-btn--menu--selected"), b.slideDown());
            });
        },
        reservation: function() {
            var b = this;
            a(".a-btn--reservation").length && a(".a-btn--reservation").on("click", function(b) {
                b.preventDefault(), a(this).addClass("a-btn--reservation--selected"), a(".a-reservar").length && a(".a-reservar").addClass("a-reservar--selected");
            }), a(".a-btn--close-reservar").length && a(".a-btn--close-reservar").on("click", function(c) {
                c.preventDefault(), a(".a-btn--reservation").removeClass("a-btn--reservation--selected"), 
                a(".a-reservar").length && a(".a-reservar").removeClass("a-reservar--selected"), 
                a(".a-field-form-reserva").trigger("updateReservasiotnDate"), a(".a-field-form-reserva").trigger("reset"), 
                b.reservaDatepicker();
            });
        }
    }, new Site();
}), jQuery(function(a) {
    aws.Ajax = function(a, b) {
        this.elem = a, this.options = b || {}, this.settings = {
            action: !1,
            uploadFile: !1
        }, this.init();
    }, aws.Ajax.prototype = {
        init: function() {
            this.merge(this.options), this.events();
        },
        merge: function(a) {
            var a = a;
            if (void 0 !== a) for (var b in a) void 0 !== this.settings.hasOwnProperty(b) && (this.settings[b] = a[b]);
        },
        events: function() {
            var b = this;
            b.settings.action && a(this.elem).on("submit", function(c) {
                c.preventDefault(), a(".a-input-error").html(""), b.settings.uploadFile ? b.handlerUploadFile(a(this).serialize(), a(this)) : b.handlerDefault(a(this).serialize(), a(this));
            });
        },
        handlerUploadFile: function(b, c) {
            var d = this, e = a(".a-loading", this.elem), f = d.settings.action, g = a("#" + d.settings.uploadFile)[0].files, h = a("#" + d.settings.uploadFile).parent(".a-clearfix").siblings(".a-input-error");
            if (h.html(""), !g.length) {
                var i = "en" === vars_site.language_current ? "Required field" : "Campo Obrigatório";
                return void h.html(i);
            }
            var j = g[0], k = new FormData();
            k.append("cvform", j, j.name), k.append("action", f), k.append("dados", b), e.removeClass("a-hide"), 
            a.ajax({
                url: vars_site.ajax_url,
                type: "post",
                data: k,
                contentType: !1,
                processData: !1,
                success: function(a) {
                    d.handlerAjaxSucess(a, e, c);
                }
            });
        },
        handlerDefault: function(b, c) {
            var d = this, e = a(".a-loading", this.elem), f = {
                action: d.settings.action,
                dados: b
            };
            console.log(d.settings.action, "dssdsd"), e.removeClass("a-hide"), a.ajax({
                url: vars_site.ajax_url,
                type: "post",
                data: f,
                success: function(a) {
                    d.handlerAjaxSucess(a, e, c);
                }
            });
        },
        handlerAjaxSucess: function(b, c, d) {
            var e = jQuery.parseJSON(b);
            if (Object.keys(e).length) for (var f in e) "sucesso" === f || "sucesso-news" === f ? (a("#" + f, d[0]).html(e[f]), 
            d.trigger("reset")) : (error = a("#" + f).siblings(".a-input-error"), error.length ? error.html(e[f]) : a("#" + f).parent(".a-clearfix").siblings(".a-input-error").html(e[f]));
            c.addClass("a-hide");
        }
    };
}), jQuery(function(a) {
    aws.Video = function(a, b) {
        this.elem = a, this.options = b || {}, this.settings = {
            videoId: "",
            width: "600px",
            height: "300px"
        }, this.init();
    }, aws.Video.prototype = {
        video: void 0,
        init: function() {
            this.merge(this.options), this.setVideo();
        },
        merge: function(a) {
            if (void 0 !== a) for (var b in a) void 0 !== this.settings.hasOwnProperty(b) && (this.settings[b] = a[b]);
        },
        setVideo: function() {
            self = this, self.settings.videoId && a(self.settings.videoId).mediaelementplayer({
                loop: !1,
                videoWidth: "100%",
                videoHeight: "100%",
                enableAutosize: !0,
                features: [ "playpause", "volume", "progress" ]
            });
        }
    };
}), jQuery(function(a) {
    aws.Amodal = function(a, b) {
        this.elem = a, this.options = b || {}, this.settings = {
            onOpen: function() {},
            content: !1,
            form: !1,
            onClose: function() {}
        }, this.init();
    }, aws.Amodal.prototype = {
        modalElement: ".a-modal__container",
        modalContent: ".a-modal__setcontent",
        init: function() {
            if (this.merge(this.options), this.create(), this.btnClose = a(".a-model__close"), 
            this.events(), this.settings.content) {
                var b = a(this.settings.content);
                a(b).removeClass("a-hide"), this.setContent(b);
            }
        },
        merge: function(a) {
            if (void 0 !== a) for (var b in a) void 0 !== this.settings.hasOwnProperty(b) && (this.settings[b] = a[b]);
        },
        create: function() {
            a(this.modalElement).length || a("body").append(this.modalHtml);
        },
        events: function() {
            var b = this;
            a(this.elem).on("click", function(a) {
                a.preventDefault(), b.open();
            }), this.btnClose.on("click", function(a) {
                a.preventDefault(), b.close();
            }), a(this.modalElement).on("click", function(a) {
                a.preventDefault(), b.close();
            }), a(this.modalContent).on("click", function(a) {
                a.stopPropagation();
            });
        },
        open: function() {
            "function" == typeof this.settings.onOpen && this.settings.onOpen(), a(this.modalElement).addClass("a-modal__container--selected");
        },
        setContent: function(b) {
            a(".a-modal__setcontent").append(b);
        },
        close: function() {
            "function" == typeof this.settings.onClose && this.settings.onClose(), this.settings.form && a(".a-field-form--modal").length && (a(".a-field-form--modal").trigger("reset"), 
            a("#sucesso", ".a-field-form--modal").html(""), a(".a-input-error--modal", ".a-field-form--modal").html("")), 
            a(this.modalElement).removeClass("a-modal__container--selected");
        },
        modalHtml: '<div class="a-modal__container"><div class="a-modal__content"><span  class="a-modal__close"><i class="fa fa-times"></i></span><div class="a-modal__setcontent"></div></div></div></div>'
    };
}), jQuery(function(a) {
    aws.Tabs = function(b, c) {
        this.elem = a(b), this.options = c, this.settings = {
            btns: void 0,
            content: void 0,
            tabsSelected: "a-tabs__link--selected",
            contentSelected: "a-tabs__content--selected"
        }, this.init();
    }, aws.Tabs.prototype = {
        init: function() {
            this.merge(this.options), this.content = a(this.settings.content), this.events();
        },
        merge: function(a) {
            if (void 0 !== a) for (var b in a) void 0 !== this.settings.hasOwnProperty(b) && (this.settings[b] = a[b]);
        },
        events: function() {
            var b = this;
            a(this.settings.btns).each(function(c, d) {
                a(d).on("click", function(e) {
                    e.preventDefault(), a(this).hasClass(b.settings.tabsSelected) || ("reuniões & eventos" === a(this).data("tab") || "Ementa" === a(this).data("tab") ? a("section.a-dark-ligth-large").addClass("a-dark-ligth-large--dark") : a("section.a-dark-ligth-large").removeClass("a-dark-ligth-large--dark"), 
                    b.deselect(), b.select(d, c));
                });
            });
        },
        deselect: function() {
            a("." + this.settings.contentSelected).hide(), a("." + this.settings.tabsSelected).removeClass(this.settings.tabsSelected), 
            a("." + this.settings.contentSelected).removeClass(this.settings.contentSelected);
        },
        select: function(b, c) {
            a(b).addClass(this.settings.tabsSelected), a(this.content[c]).fadeIn("slow"), a(this.content[c]).addClass(this.settings.contentSelected);
        }
    };
}), jQuery(function(a) {
    $(window).on("load , hashchange", function() {
        "#recrutamento" === location.hash && $('a[data-a-widget="Amodal"]').length && $('a[data-a-widget="Amodal"]').click();
    }), $(".a-tab-visibility").length && $(".a-tab-visibility").removeClass("a-tab-visibility");
    var b = (a("[data-widget]"), []);
    a("[data-a-widget]").each(function(c, d) {
        var e = a(d).attr("data-a-widget"), f = a(d).attr("data-a-widget-options") ? a(d).attr("data-a-widget-options") : "{}";
        f = a.parseJSON(f), "function" == typeof window.aws[e] && b.push(new window.aws[e](d, f));
    });
});