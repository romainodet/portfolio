!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (k, t) {
    "use strict";

    function g(t) {
        return null != t && t === t.window
    }

    var e = [], L = k.document, i = Object.getPrototypeOf, a = e.slice, v = e.concat, l = e.push, r = e.indexOf, n = {},
        o = n.toString, m = n.hasOwnProperty, s = m.toString, c = s.call(Object), w = {}, y = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }, h = {type: !0, src: !0, nonce: !0, noModule: !0};

    function x(t, e, n) {
        var i, r, o = (n = n || L).createElement("script");
        if (o.text = t, e) for (i in h) (r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[o.call(t)] || "object" : typeof t
    }

    var u = "3.4.1", T = function (t, e) {
        return new T.fn.init(t, e)
    }, d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function f(t) {
        var e = !!t && "length" in t && t.length, n = b(t);
        return !y(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    T.fn = T.prototype = {
        jquery: u, constructor: T, length: 0, toArray: function () {
            return a.call(this)
        }, get: function (t) {
            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = T.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return T.each(this, t)
        }, map: function (n) {
            return this.pushStack(T.map(this, function (t, e) {
                return n.call(t, e, t)
            }))
        }, slice: function () {
            return this.pushStack(a.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: l, sort: e.sort, splice: e.splice
    }, T.extend = T.fn.extend = function () {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = t[e], "__proto__" !== e && s !== i && (c && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[e], o = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, s[e] = T.extend(c, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, T.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== o.call(t) || (e = i(t)) && ("function" != typeof (n = m.call(e, "constructor") && e.constructor) || s.call(n) !== c))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, globalEval: function (t, e) {
            x(t, {nonce: e && e.nonce})
        }, each: function (t, e) {
            var n, i = 0;
            if (f(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) ; else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(d, "")
        }, makeArray: function (t, e) {
            var n = e || [];
            return null != t && (f(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
        }, inArray: function (t, e, n) {
            return null == e ? -1 : r.call(e, t, n)
        }, merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        }, grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) != s && i.push(t[r]);
            return i
        }, map: function (t, e, n) {
            var i, r, o = 0, s = [];
            if (f(t)) for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r); else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
            return v.apply([], s)
        }, guid: 1, support: w
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = e[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        n["[object " + e + "]"] = e.toLowerCase()
    });
    var p = function (n) {
        function u(t, e, n) {
            var i = "0x" + e - 65536;
            return i != i || n ? e : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function r() {
            C()
        }

        var t, f, x, o, s, p, d, g, b, l, c, C, k, a, L, v, h, m, w, T = "sizzle" + +new Date, y = n.document, S = 0,
            i = 0, $ = lt(), M = lt(), E = lt(), I = lt(), A = function (t, e) {
                return t === e && (c = !0), 0
            }, B = {}.hasOwnProperty, e = [], N = e.pop, D = e.push, P = e.push, O = e.slice, j = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            z = "[\\x20\\t\\r\\n\\f]", _ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q = "\\[" + z + "*(" + _ + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + _ + "))|)" + z + "*\\]",
            F = ":(" + _ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            R = new RegExp(z + "+", "g"), W = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
            V = new RegExp("^" + z + "*," + z + "*"), Z = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
            U = new RegExp(z + "|>"), X = new RegExp(F), Y = new RegExp("^" + _ + "$"), Q = {
                ID: new RegExp("^#(" + _ + ")"),
                CLASS: new RegExp("^\\.(" + _ + ")"),
                TAG: new RegExp("^(" + _ + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
            }, G = /HTML$/i, J = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, tt = /^[^{]+\{\s*\[native \w/,
            et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, nt = /[+~]/,
            it = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
            rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ot = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, st = xt(function (t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }, {dir: "parentNode", next: "legend"});
        try {
            P.apply(e = O.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType
        } catch (t) {
            P = {
                apply: e.length ? function (t, e) {
                    D.apply(t, O.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];) ;
                    t.length = n - 1
                }
            }
        }

        function at(t, e, n, i) {
            var r, o, s, a, l, c, h, u = e && e.ownerDocument, d = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((e ? e.ownerDocument || e : y) !== k && C(e), e = e || k, L)) {
                if (11 !== d && (l = et.exec(t))) if (r = l[1]) {
                    if (9 === d) {
                        if (!(s = e.getElementById(r))) return n;
                        if (s.id === r) return n.push(s), n
                    } else if (u && (s = u.getElementById(r)) && w(e, s) && s.id === r) return n.push(s), n
                } else {
                    if (l[2]) return P.apply(n, e.getElementsByTagName(t)), n;
                    if ((r = l[3]) && f.getElementsByClassName && e.getElementsByClassName) return P.apply(n, e.getElementsByClassName(r)), n
                }
                if (f.qsa && !I[t + " "] && (!v || !v.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (h = t, u = e, 1 === d && U.test(t)) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(rt, ot) : e.setAttribute("id", a = T), o = (c = p(t)).length; o--;) c[o] = "#" + a + " " + yt(c[o]);
                        h = c.join(","), u = nt.test(t) && mt(e.parentNode) || e
                    }
                    try {
                        return P.apply(n, u.querySelectorAll(h)), n
                    } catch (e) {
                        I(t, !0)
                    } finally {
                        a === T && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(W, "$1"), e, n, i)
        }

        function lt() {
            var i = [];
            return function t(e, n) {
                return i.push(e + " ") > x.cacheLength && delete t[i.shift()], t[e + " "] = n
            }
        }

        function ct(t) {
            return t[T] = !0, t
        }

        function ht(t) {
            var e = k.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ut(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
        }

        function dt(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === e) return -1;
            return t ? 1 : -1
        }

        function ft(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pt(n) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }

        function gt(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && st(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function vt(s) {
            return ct(function (o) {
                return o = +o, ct(function (t, e) {
                    for (var n, i = s([], t.length, o), r = i.length; r--;) t[n = i[r]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        for (t in f = at.support = {}, s = at.isXML = function (t) {
            var e = t.namespaceURI, n = (t.ownerDocument || t).documentElement;
            return !G.test(e || n && n.nodeName || "HTML")
        }, C = at.setDocument = function (t) {
            var e, n, i = t ? t.ownerDocument || t : y;
            return i !== k && 9 === i.nodeType && i.documentElement && (a = (k = i).documentElement, L = !s(k), y !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), f.attributes = ht(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), f.getElementsByTagName = ht(function (t) {
                return t.appendChild(k.createComment("")), !t.getElementsByTagName("*").length
            }), f.getElementsByClassName = tt.test(k.getElementsByClassName), f.getById = ht(function (t) {
                return a.appendChild(t).id = T, !k.getElementsByName || !k.getElementsByName(T).length
            }), f.getById ? (x.filter.ID = function (t) {
                var e = t.replace(it, u);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, x.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && L) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }) : (x.filter.ID = function (t) {
                var n = t.replace(it, u);
                return function (t) {
                    var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return e && e.value === n
                }
            }, x.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && L) {
                    var n, i, r, o = e.getElementById(t);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                        for (r = e.getElementsByName(t), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                    }
                    return []
                }
            }), x.find.TAG = f.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" !== t) return o;
                for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                return i
            }, x.find.CLASS = f.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && L) return e.getElementsByClassName(t)
            }, h = [], v = [], (f.qsa = tt.test(k.querySelectorAll)) && (ht(function (t) {
                a.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + z + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + z + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + T + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || v.push(".#.+[+~]")
            }), ht(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = k.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + z + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
            })), (f.matchesSelector = tt.test(m = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ht(function (t) {
                f.disconnectedMatch = m.call(t, "*"), m.call(t, "[s!='']:x"), h.push("!=", F)
            }), v = v.length && new RegExp(v.join("|")), h = h.length && new RegExp(h.join("|")), e = tt.test(a.compareDocumentPosition), w = e || tt.test(a.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, A = e ? function (t, e) {
                if (t === e) return c = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === n ? t === k || t.ownerDocument === y && w(y, t) ? -1 : e === k || e.ownerDocument === y && w(y, e) ? 1 : l ? j(l, t) - j(l, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return c = !0, 0;
                var n, i = 0, r = t.parentNode, o = e.parentNode, s = [t], a = [e];
                if (!r || !o) return t === k ? -1 : e === k ? 1 : r ? -1 : o ? 1 : l ? j(l, t) - j(l, e) : 0;
                if (r === o) return dt(t, e);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (; s[i] === a[i];) i++;
                return i ? dt(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
            }), k
        }, at.matches = function (t, e) {
            return at(t, null, null, e)
        }, at.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== k && C(t), f.matchesSelector && L && !I[e + " "] && (!h || !h.test(e)) && (!v || !v.test(e))) try {
                var n = m.call(t, e);
                if (n || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {
                I(e, !0)
            }
            return 0 < at(e, k, null, [t]).length
        }, at.contains = function (t, e) {
            return (t.ownerDocument || t) !== k && C(t), w(t, e)
        }, at.attr = function (t, e) {
            (t.ownerDocument || t) !== k && C(t);
            var n = x.attrHandle[e.toLowerCase()],
                i = n && B.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
            return void 0 !== i ? i : f.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, at.escape = function (t) {
            return (t + "").replace(rt, ot)
        }, at.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, at.uniqueSort = function (t) {
            var e, n = [], i = 0, r = 0;
            if (c = !f.detectDuplicates, l = !f.sortStable && t.slice(0), t.sort(A), c) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return l = null, t
        }, o = at.getText = function (t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else for (; e = t[i++];) n += o(e);
            return n
        }, (x = at.selectors = {
            cacheLength: 50,
            createPseudo: ct,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(it, u), t[3] = (t[3] || t[4] || t[5] || "").replace(it, u), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(it, u).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = $[t + " "];
                    return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && $(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                }, ATTR: function (n, i, r) {
                    return function (t) {
                        var e = at.attr(t, n);
                        return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === r : "!=" === i ? e !== r : "^=" === i ? r && 0 === e.indexOf(r) : "*=" === i ? r && -1 < e.indexOf(r) : "$=" === i ? r && e.slice(-r.length) === r : "~=" === i ? -1 < (" " + e.replace(R, " ") + " ").indexOf(r) : "|=" === i && (e === r || e.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (p, t, e, g, v) {
                    var m = "nth" !== p.slice(0, 3), w = "last" !== p.slice(-4), y = "of-type" === t;
                    return 1 === g && 0 === v ? function (t) {
                        return !!t.parentNode
                    } : function (t, e, n) {
                        var i, r, o, s, a, l, c = m != w ? "nextSibling" : "previousSibling", h = t.parentNode,
                            u = y && t.nodeName.toLowerCase(), d = !n && !y, f = !1;
                        if (h) {
                            if (m) {
                                for (; c;) {
                                    for (s = t; s = s[c];) if (y ? s.nodeName.toLowerCase() === u : 1 === s.nodeType) return !1;
                                    l = c = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [w ? h.firstChild : h.lastChild], w && d) {
                                for (f = (a = (i = (r = (o = (s = h)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], s = a && h.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();) if (1 === s.nodeType && ++f && s === t) {
                                    r[p] = [S, a, f];
                                    break
                                }
                            } else if (d && (f = a = (i = (r = (o = (s = t)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === f) for (; (s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((y ? s.nodeName.toLowerCase() !== u : 1 !== s.nodeType) || !++f || (d && ((r = (o = s[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [S, f]), s !== t));) ;
                            return (f -= v) === g || f % g == 0 && 0 <= f / g
                        }
                    }
                }, PSEUDO: function (t, o) {
                    var e, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                    return s[T] ? s(o) : 1 < s.length ? (e = [t, t, "", o], x.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function (t, e) {
                        for (var n, i = s(t, o), r = i.length; r--;) t[n = j(t, i[r])] = !(e[n] = i[r])
                    }) : function (t) {
                        return s(t, 0, e)
                    }) : s
                }
            },
            pseudos: {
                not: ct(function (t) {
                    var i = [], r = [], a = d(t.replace(W, "$1"));
                    return a[T] ? ct(function (t, e, n, i) {
                        for (var r, o = a(t, null, i, []), s = t.length; s--;) (r = o[s]) && (t[s] = !(e[s] = r))
                    }) : function (t, e, n) {
                        return i[0] = t, a(i, null, n, r), i[0] = null, !r.pop()
                    }
                }), has: ct(function (e) {
                    return function (t) {
                        return 0 < at(e, t).length
                    }
                }), contains: ct(function (e) {
                    return e = e.replace(it, u), function (t) {
                        return -1 < (t.textContent || o(t)).indexOf(e)
                    }
                }), lang: ct(function (n) {
                    return Y.test(n || "") || at.error("unsupported lang: " + n), n = n.replace(it, u).toLowerCase(), function (t) {
                        var e;
                        do {
                            if (e = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var e = n.location && n.location.hash;
                    return e && e.slice(1) === t.id
                }, root: function (t) {
                    return t === a
                }, focus: function (t) {
                    return t === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: gt(!1), disabled: gt(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !x.pseudos.empty(t)
                }, header: function (t) {
                    return K.test(t.nodeName)
                }, input: function (t) {
                    return J.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: vt(function () {
                    return [0]
                }), last: vt(function (t, e) {
                    return [e - 1]
                }), eq: vt(function (t, e, n) {
                    return [n < 0 ? n + e : n]
                }), even: vt(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }), odd: vt(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }), lt: vt(function (t, e, n) {
                    for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
                    return t
                }), gt: vt(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[t] = ft(t);
        for (t in {submit: !0, reset: !0}) x.pseudos[t] = pt(t);

        function wt() {
        }

        function yt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function xt(a, t, e) {
            var l = t.dir, c = t.next, h = c || l, u = e && "parentNode" === h, d = i++;
            return t.first ? function (t, e, n) {
                for (; t = t[l];) if (1 === t.nodeType || u) return a(t, e, n);
                return !1
            } : function (t, e, n) {
                var i, r, o, s = [S, d];
                if (n) {
                    for (; t = t[l];) if ((1 === t.nodeType || u) && a(t, e, n)) return !0
                } else for (; t = t[l];) if (1 === t.nodeType || u) if (r = (o = t[T] || (t[T] = {}))[t.uniqueID] || (o[t.uniqueID] = {}), c && c === t.nodeName.toLowerCase()) t = t[l] || t; else {
                    if ((i = r[h]) && i[0] === S && i[1] === d) return s[2] = i[2];
                    if ((r[h] = s)[2] = a(t, e, n)) return !0
                }
                return !1
            }
        }

        function bt(r) {
            return 1 < r.length ? function (t, e, n) {
                for (var i = r.length; i--;) if (!r[i](t, e, n)) return !1;
                return !0
            } : r[0]
        }

        function Ct(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++) (o = t[a]) && (n && !n(o, i, r) || (s.push(o), c && e.push(a)));
            return s
        }

        function kt(f, p, g, v, m, t) {
            return v && !v[T] && (v = kt(v)), m && !m[T] && (m = kt(m, t)), ct(function (t, e, n, i) {
                var r, o, s, a = [], l = [], c = e.length, h = t || function (t, e, n) {
                        for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                        return n
                    }(p || "*", n.nodeType ? [n] : n, []), u = !f || !t && p ? h : Ct(h, a, f, n, i),
                    d = g ? m || (t ? f : c || v) ? [] : e : u;
                if (g && g(u, d, n, i), v) for (r = Ct(d, l), v(r, [], n, i), o = r.length; o--;) (s = r[o]) && (d[l[o]] = !(u[l[o]] = s));
                if (t) {
                    if (m || f) {
                        if (m) {
                            for (r = [], o = d.length; o--;) (s = d[o]) && r.push(u[o] = s);
                            m(null, d = [], r, i)
                        }
                        for (o = d.length; o--;) (s = d[o]) && -1 < (r = m ? j(t, s) : a[o]) && (t[r] = !(e[r] = s))
                    }
                } else d = Ct(d === e ? d.splice(c, d.length) : d), m ? m(null, e, d, i) : P.apply(e, d)
            })
        }

        function Lt(t) {
            for (var r, e, n, i = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = xt(function (t) {
                return t === r
            }, s, !0), c = xt(function (t) {
                return -1 < j(r, t)
            }, s, !0), h = [function (t, e, n) {
                var i = !o && (n || e !== b) || ((r = e).nodeType ? l : c)(t, e, n);
                return r = null, i
            }]; a < i; a++) if (e = x.relative[t[a].type]) h = [xt(bt(h), e)]; else {
                if ((e = x.filter[t[a].type].apply(null, t[a].matches))[T]) {
                    for (n = ++a; n < i && !x.relative[t[n].type]; n++) ;
                    return kt(1 < a && bt(h), 1 < a && yt(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(W, "$1"), e, a < n && Lt(t.slice(a, n)), n < i && Lt(t = t.slice(n)), n < i && yt(t))
                }
                h.push(e)
            }
            return bt(h)
        }

        return wt.prototype = x.filters = x.pseudos, x.setFilters = new wt, p = at.tokenize = function (t, e) {
            var n, i, r, o, s, a, l, c = M[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (s = t, a = [], l = x.preFilter; s;) {
                for (o in n && !(i = V.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = Z.exec(s)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(W, " ")
                }), s = s.slice(n.length)), x.filter) !(i = Q[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return e ? s.length : s ? at.error(t) : M(t, a).slice(0)
        }, d = at.compile = function (t, e) {
            var n, v, m, w, y, i, r = [], o = [], s = E[t + " "];
            if (!s) {
                for (n = (e = e || p(t)).length; n--;) (s = Lt(e[n]))[T] ? r.push(s) : o.push(s);
                (s = E(t, (v = o, w = 0 < (m = r).length, y = 0 < v.length, i = function (t, e, n, i, r) {
                    var o, s, a, l = 0, c = "0", h = t && [], u = [], d = b, f = t || y && x.find.TAG("*", r),
                        p = S += null == d ? 1 : Math.random() || .1, g = f.length;
                    for (r && (b = e === k || e || r); c !== g && null != (o = f[c]); c++) {
                        if (y && o) {
                            for (s = 0, e || o.ownerDocument === k || (C(o), n = !L); a = v[s++];) if (a(o, e || k, n)) {
                                i.push(o);
                                break
                            }
                            r && (S = p)
                        }
                        w && ((o = !a && o) && l--, t && h.push(o))
                    }
                    if (l += c, w && c !== l) {
                        for (s = 0; a = m[s++];) a(h, u, e, n);
                        if (t) {
                            if (0 < l) for (; c--;) h[c] || u[c] || (u[c] = N.call(i));
                            u = Ct(u)
                        }
                        P.apply(i, u), r && !t && 0 < u.length && 1 < l + m.length && at.uniqueSort(i)
                    }
                    return r && (S = p, b = d), h
                }, w ? ct(i) : i))).selector = t
            }
            return s
        }, g = at.select = function (t, e, n, i) {
            var r, o, s, a, l, c = "function" == typeof t && t, h = !i && p(t = c.selector || t);
            if (n = n || [], 1 === h.length) {
                if (2 < (o = h[0] = h[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && L && x.relative[o[1].type]) {
                    if (!(e = (x.find.ID(s.matches[0].replace(it, u), e) || [])[0])) return n;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = Q.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);) if ((l = x.find[a]) && (i = l(s.matches[0].replace(it, u), nt.test(o[0].type) && mt(e.parentNode) || e))) {
                    if (o.splice(r, 1), !(t = i.length && yt(o))) return P.apply(n, i), n;
                    break
                }
            }
            return (c || d(t, h))(i, e, !L, n, !e || nt.test(t) && mt(e.parentNode) || e), n
        }, f.sortStable = T.split("").sort(A).join("") === T, f.detectDuplicates = !!c, C(), f.sortDetached = ht(function (t) {
            return 1 & t.compareDocumentPosition(k.createElement("fieldset"))
        }), ht(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ut("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), f.attributes && ht(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ut("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), ht(function (t) {
            return null == t.getAttribute("disabled")
        }) || ut(H, function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), at
    }(k);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;

    function C(t, e, n) {
        for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (r && T(t).is(n)) break;
            i.push(t)
        }
        return i
    }

    function S(t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
    }

    var $ = T.expr.match.needsContext;

    function M(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(t, n, i) {
        return y(n) ? T.grep(t, function (t, e) {
            return !!n.call(t, e, t) !== i
        }) : n.nodeType ? T.grep(t, function (t) {
            return t === n !== i
        }) : "string" != typeof n ? T.grep(t, function (t) {
            return -1 < r.call(n, t) !== i
        }) : T.filter(n, t, i)
    }

    T.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, T.fn.extend({
        find: function (t) {
            var e, n, i = this.length, r = this;
            if ("string" != typeof t) return this.pushStack(T(t).filter(function () {
                for (e = 0; e < i; e++) if (T.contains(r[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) T.find(t, r[e], n);
            return 1 < i ? T.uniqueSort(n) : n
        }, filter: function (t) {
            return this.pushStack(I(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(I(this, t || [], !0))
        }, is: function (t) {
            return !!I(this, "string" == typeof t && $.test(t) ? T(t) : t || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || A, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this);
        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : B.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (i[1]) {
            if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : L, !0)), E.test(i[1]) && T.isPlainObject(e)) for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this
        }
        return (r = L.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }).prototype = T.fn, A = T(L);
    var N = /^(?:parents|prev(?:Until|All))/, D = {children: !0, contents: !0, next: !0, prev: !0};

    function P(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    T.fn.extend({
        has: function (t) {
            var e = T(t, this), n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++) if (T.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof t && T(t);
            if (!$.test(t)) for (; i < r; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? r.call(T(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), T.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return C(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return C(t, "parentNode", n)
        }, next: function (t) {
            return P(t, "nextSibling")
        }, prev: function (t) {
            return P(t, "previousSibling")
        }, nextAll: function (t) {
            return C(t, "nextSibling")
        }, prevAll: function (t) {
            return C(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return C(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return C(t, "previousSibling", n)
        }, siblings: function (t) {
            return S((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return S(t.firstChild)
        }, contents: function (t) {
            return void 0 !== t.contentDocument ? t.contentDocument : (M(t, "template") && (t = t.content || t), T.merge([], t.childNodes))
        }
    }, function (i, r) {
        T.fn[i] = function (t, e) {
            var n = T.map(this, r, t);
            return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = T.filter(e, n)), 1 < this.length && (D[i] || T.uniqueSort(n), N.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;

    function j(t) {
        return t
    }

    function H(t) {
        throw t
    }

    function z(t, e, n, i) {
        var r;
        try {
            t && y(r = t.promise) ? r.call(t).done(e).fail(n) : t && y(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }

    T.Callbacks = function (i) {
        var n;
        i = "string" == typeof i ? (n = {}, T.each(i.match(O) || [], function (t, e) {
            n[e] = !0
        }), n) : T.extend({}, i);

        function r() {
            for (s = s || i.once, e = o = !0; l.length; c = -1) for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length, t = !1);
            i.memory || (t = !1), o = !1, s && (a = t ? [] : "")
        }

        var o, t, e, s, a = [], l = [], c = -1, h = {
            add: function () {
                return a && (t && !o && (c = a.length - 1, l.push(t)), function n(t) {
                    T.each(t, function (t, e) {
                        y(e) ? i.unique && h.has(e) || a.push(e) : e && e.length && "string" !== b(e) && n(e)
                    })
                }(arguments), t && !o && r()), this
            }, remove: function () {
                return T.each(arguments, function (t, e) {
                    for (var n; -1 < (n = T.inArray(e, a, n));) a.splice(n, 1), n <= c && c--
                }), this
            }, has: function (t) {
                return t ? -1 < T.inArray(t, a) : 0 < a.length
            }, empty: function () {
                return a = a && [], this
            }, disable: function () {
                return s = l = [], a = t = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return s = l = [], t || o || (a = t = ""), this
            }, locked: function () {
                return !!s
            }, fireWith: function (t, e) {
                return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), o || r()), this
            }, fire: function () {
                return h.fireWith(this, arguments), this
            }, fired: function () {
                return !!e
            }
        };
        return h
    }, T.extend({
        Deferred: function (t) {
            var o = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
                r = "pending", s = {
                    state: function () {
                        return r
                    }, always: function () {
                        return a.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return s.then(null, t)
                    }, pipe: function () {
                        var r = arguments;
                        return T.Deferred(function (i) {
                            T.each(o, function (t, e) {
                                var n = y(r[e[4]]) && r[e[4]];
                                a[e[1]](function () {
                                    var t = n && n.apply(this, arguments);
                                    t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
                                })
                            }), r = null
                        }).promise()
                    }, then: function (e, n, i) {
                        var l = 0;

                        function c(r, o, s, a) {
                            return function () {
                                function t() {
                                    var t, e;
                                    if (!(r < l)) {
                                        if ((t = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        e = t && ("object" == typeof t || "function" == typeof t) && t.then, y(e) ? a ? e.call(t, c(l, o, j, a), c(l, o, H, a)) : (l++, e.call(t, c(l, o, j, a), c(l, o, H, a), c(l, o, j, o.notifyWith))) : (s !== j && (n = void 0, i = [t]), (a || o.resolveWith)(n, i))
                                    }
                                }

                                var n = this, i = arguments, e = a ? t : function () {
                                    try {
                                        t()
                                    } catch (t) {
                                        T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, e.stackTrace), l <= r + 1 && (s !== H && (n = void 0, i = [t]), o.rejectWith(n, i))
                                    }
                                };
                                r ? e() : (T.Deferred.getStackHook && (e.stackTrace = T.Deferred.getStackHook()), k.setTimeout(e))
                            }
                        }

                        return T.Deferred(function (t) {
                            o[0][3].add(c(0, t, y(i) ? i : j, t.notifyWith)), o[1][3].add(c(0, t, y(e) ? e : j)), o[2][3].add(c(0, t, y(n) ? n : H))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? T.extend(t, s) : s
                    }
                }, a = {};
            return T.each(o, function (t, e) {
                var n = e[2], i = e[5];
                s[e[1]] = n.add, i && n.add(function () {
                    r = i
                }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock), n.add(e[3].fire), a[e[0]] = function () {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[e[0] + "With"] = n.fireWith
            }), s.promise(a), t && t.call(a, a), a
        }, when: function (t) {
            function e(e) {
                return function (t) {
                    r[e] = this, o[e] = 1 < arguments.length ? a.call(arguments) : t, --n || s.resolveWith(r, o)
                }
            }

            var n = arguments.length, i = n, r = Array(i), o = a.call(arguments), s = T.Deferred();
            if (n <= 1 && (z(t, s.done(e(i)).resolve, s.reject, !n), "pending" === s.state() || y(o[i] && o[i].then))) return s.then();
            for (; i--;) z(o[i], e(i), s.reject);
            return s.promise()
        }
    });
    var _ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function (t, e) {
        k.console && k.console.warn && t && _.test(t.name) && k.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }, T.readyException = function (t) {
        k.setTimeout(function () {
            throw t
        })
    };
    var q = T.Deferred();

    function F() {
        L.removeEventListener("DOMContentLoaded", F), k.removeEventListener("load", F), T.ready()
    }

    T.fn.ready = function (t) {
        return q.then(t).catch(function (t) {
            T.readyException(t)
        }), this
    }, T.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
            (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0) !== t && 0 < --T.readyWait || q.resolveWith(L, [T])
        }
    }), T.ready.then = q.then, "complete" === L.readyState || "loading" !== L.readyState && !L.documentElement.doScroll ? k.setTimeout(T.ready) : (L.addEventListener("DOMContentLoaded", F), k.addEventListener("load", F));
    var R = function (t, e, n, i, r, o, s) {
        var a = 0, l = t.length, c = null == n;
        if ("object" === b(n)) for (a in r = !0, n) R(t, e, a, n[a], !0, o, s); else if (void 0 !== i && (r = !0, y(i) || (s = !0), c && (e = s ? (e.call(t, i), null) : (c = e, function (t, e, n) {
            return c.call(T(t), n)
        })), e)) for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
    }, W = /^-ms-/, V = /-([a-z])/g;

    function Z(t, e) {
        return e.toUpperCase()
    }

    function U(t) {
        return t.replace(W, "ms-").replace(V, Z)
    }

    function X(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }

    function Y() {
        this.expando = T.expando + Y.uid++
    }

    Y.uid = 1, Y.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[U(e)] = n; else for (i in e) r[U(i)] = e[i];
            return r
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
        }, access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        }, remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in i ? [e] : e.match(O) || []).length;
                    for (; n--;) delete i[e[n]]
                }
                void 0 !== e && !T.isEmptyObject(i) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !T.isEmptyObject(e)
        }
    };
    var Q = new Y, G = new Y, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

    function tt(t, e, n) {
        var i, r;
        if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(K, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
            try {
                n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
            } catch (t) {
            }
            G.set(t, e, n)
        } else n = void 0;
        return n
    }

    T.extend({
        hasData: function (t) {
            return G.hasData(t) || Q.hasData(t)
        }, data: function (t, e, n) {
            return G.access(t, e, n)
        }, removeData: function (t, e) {
            G.remove(t, e)
        }, _data: function (t, e, n) {
            return Q.access(t, e, n)
        }, _removeData: function (t, e) {
            Q.remove(t, e)
        }
    }), T.fn.extend({
        data: function (n, t) {
            var e, i, r, o = this[0], s = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                G.set(this, n)
            }) : R(this, function (t) {
                var e;
                if (o && void 0 === t) return void 0 !== (e = G.get(o, n)) || void 0 !== (e = tt(o, n)) ? e : void 0;
                this.each(function () {
                    G.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (r = G.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                for (e = s.length; e--;) s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = U(i.slice(5)), tt(o, i, r[i]));
                Q.set(o, "hasDataAttrs", !0)
            }
            return r
        }, removeData: function (t) {
            return this.each(function () {
                G.remove(this, t)
            })
        }
    }), T.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = Q.get(t, e), n && (!i || Array.isArray(n) ? i = Q.access(t, e, T.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = T.queue(t, e), i = n.length, r = n.shift(), o = T._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
                T.dequeue(t, e)
            }, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return Q.get(t, n) || Q.access(t, n, {
                empty: T.Callbacks("once memory").add(function () {
                    Q.remove(t, [e + "queue", n])
                })
            })
        }
    }), T.fn.extend({
        queue: function (e, n) {
            var t = 2;
            return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === n ? this : this.each(function () {
                var t = T.queue(this, e, n);
                T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                T.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            function n() {
                --r || o.resolveWith(s, [s])
            }

            var i, r = 1, o = T.Deferred(), s = this, a = this.length;
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) (i = Q.get(s[a], t + "queueHooks")) && i.empty && (r++, i.empty.add(n));
            return n(), o.promise(e)
        }
    });
    var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"], rt = L.documentElement, ot = function (t) {
            return T.contains(t.ownerDocument, t)
        }, st = {composed: !0};
    rt.getRootNode && (ot = function (t) {
        return T.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument
    });

    function at(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === T.css(t, "display")
    }

    function lt(t, e, n, i) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        for (o in r = n.apply(t, i || []), e) t.style[o] = s[o];
        return r
    }

    function ct(t, e, n, i) {
        var r, o, s = 20, a = i ? function () {
                return i.cur()
            } : function () {
                return T.css(t, e, "")
            }, l = a(), c = n && n[3] || (T.cssNumber[e] ? "" : "px"),
            h = t.nodeType && (T.cssNumber[e] || "px" !== c && +l) && nt.exec(T.css(t, e));
        if (h && h[3] !== c) {
            for (l /= 2, c = c || h[3], h = +l || 1; s--;) T.style(t, e, h + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), h /= o;
            h *= 2, T.style(t, e, h + c), n = n || []
        }
        return n && (h = +h || +l || 0, r = n[1] ? h + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = h, i.end = r)), r
    }

    var ht = {};

    function ut(t, e) {
        for (var n, i, r, o, s, a, l = [], c = 0, h = t.length; c < h; c++) (i = t[c]).style && (n = i.style.display, e ? ("none" === n && (l[c] = Q.get(i, "display") || null, l[c] || (i.style.display = "")), "" === i.style.display && at(i) && (l[c] = (a = o = r = void 0, o = i.ownerDocument, s = i.nodeName, (a = ht[s]) || (r = o.body.appendChild(o.createElement(s)), a = T.css(r, "display"), r.parentNode.removeChild(r), "none" === a && (a = "block"), ht[s] = a)))) : "none" !== n && (l[c] = "none", Q.set(i, "display", n)));
        for (c = 0; c < h; c++) null != l[c] && (t[c].style.display = l[c]);
        return t
    }

    T.fn.extend({
        show: function () {
            return ut(this, !0)
        }, hide: function () {
            return ut(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                at(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var dt = /^(?:checkbox|radio)$/i, ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, pt = /^$|^module$|\/(?:java|ecma)script/i,
        gt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function vt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && M(t, e) ? T.merge([t], n) : n
    }

    function mt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"))
    }

    gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td;
    var wt, yt, xt = /<|&#?\w+;/;

    function bt(t, e, n, i, r) {
        for (var o, s, a, l, c, h, u = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++) if ((o = t[f]) || 0 === o) if ("object" === b(o)) T.merge(d, o.nodeType ? [o] : o); else if (xt.test(o)) {
            for (s = s || u.appendChild(e.createElement("div")), a = (ft.exec(o) || ["", ""])[1].toLowerCase(), l = gt[a] || gt._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], h = l[0]; h--;) s = s.lastChild;
            T.merge(d, s.childNodes), (s = u.firstChild).textContent = ""
        } else d.push(e.createTextNode(o));
        for (u.textContent = "", f = 0; o = d[f++];) if (i && -1 < T.inArray(o, i)) r && r.push(o); else if (c = ot(o), s = vt(u.appendChild(o), "script"), c && mt(s), n) for (h = 0; o = s[h++];) pt.test(o.type || "") && n.push(o);
        return u
    }

    wt = L.createDocumentFragment().appendChild(L.createElement("div")), (yt = L.createElement("input")).setAttribute("type", "radio"), yt.setAttribute("checked", "checked"), yt.setAttribute("name", "t"), wt.appendChild(yt), w.checkClone = wt.cloneNode(!0).cloneNode(!0).lastChild.checked, wt.innerHTML = "<textarea>x</textarea>", w.noCloneChecked = !!wt.cloneNode(!0).lastChild.defaultValue;
    var Ct = /^key/, kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Lt = /^([^.]*)(?:\.(.+)|)/;

    function Tt() {
        return !0
    }

    function St() {
        return !1
    }

    function $t(t, e) {
        return t === function () {
            try {
                return L.activeElement
            } catch (t) {
            }
        }() == ("focus" === e)
    }

    function Mt(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) Mt(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = St; else if (!r) return t;
        return 1 === o && (s = r, (r = function (t) {
            return T().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = T.guid++)), t.each(function () {
            T.event.add(this, e, r, i, n)
        })
    }

    function Et(t, r, o) {
        o ? (Q.set(t, r, !1), T.event.add(t, r, {
            namespace: !1, handler: function (t) {
                var e, n, i = Q.get(this, r);
                if (1 & t.isTrigger && this[r]) {
                    if (i.length) (T.event.special[r] || {}).delegateType && t.stopPropagation(); else if (i = a.call(arguments), Q.set(this, r, i), e = o(this, r), this[r](), i !== (n = Q.get(this, r)) || e ? Q.set(this, r, !1) : n = {}, i !== n) return t.stopImmediatePropagation(), t.preventDefault(), n.value
                } else i.length && (Q.set(this, r, {value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)}), t.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(t, r) && T.event.add(t, r, Tt)
    }

    T.event = {
        global: {}, add: function (e, t, n, i, r) {
            var o, s, a, l, c, h, u, d, f, p, g, v = Q.get(e);
            if (v) for (n.handler && (n = (o = n).handler, r = o.selector), r && T.find.matchesSelector(rt, r), n.guid || (n.guid = T.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
                return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(O) || [""]).length; c--;) f = g = (a = Lt.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (u = T.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = T.event.special[f] || {}, h = T.extend({
                type: f,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && T.expr.match.needsContext.test(r),
                namespace: p.join(".")
            }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, h), h.handler.guid || (h.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), T.event.global[f] = !0)
        }, remove: function (t, e, n, i, r) {
            var o, s, a, l, c, h, u, d, f, p, g, v = Q.hasData(t) && Q.get(t);
            if (v && (l = v.events)) {
                for (c = (e = (e || "").match(O) || [""]).length; c--;) if (f = g = (a = Lt.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                    for (u = T.event.special[f] || {}, d = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) h = d[o], !r && g !== h.origType || n && n.guid !== h.guid || a && !a.test(h.namespace) || i && i !== h.selector && ("**" !== i || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                    s && !d.length && (u.teardown && !1 !== u.teardown.call(t, p, v.handle) || T.removeEvent(t, f, v.handle), delete l[f])
                } else for (f in l) T.event.remove(t, f + e[c], n, i, !0);
                T.isEmptyObject(l) && Q.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, n, i, r, o, s, a = T.event.fix(t), l = new Array(arguments.length),
                c = (Q.get(this, "events") || {})[a.type] || [], h = T.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                for (s = T.event.handlers.call(this, a, c), e = 0; (r = s[e++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var n, i, r, o, s, a = [], l = e.delegateCount, c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? -1 < T(r, this).index(c) : T.find(r, this, null, [c]).length), s[r] && o.push(i);
                o.length && a.push({elem: c, handlers: o})
            }
            return c = this, l < e.length && a.push({elem: c, handlers: e.slice(l)}), a
        }, addProp: function (e, t) {
            Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: y(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (t) {
            return t[T.expando] ? t : new T.Event(t)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && M(e, "input") && Et(e, "click", Tt), !1
                }, trigger: function (t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && M(e, "input") && Et(e, "click"), !0
                }, _default: function (t) {
                    var e = t.target;
                    return dt.test(e.type) && e.click && M(e, "input") && Q.get(e, "click") || M(e, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, T.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, T.Event = function (t, e) {
        if (!(this instanceof T.Event)) return new T.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: St,
        isPropagationStopped: St,
        isImmediatePropagationStopped: St,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = Tt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = Tt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Tt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && Ct.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && kt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, T.event.addProp), T.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        T.event.special[t] = {
            setup: function () {
                return Et(this, t, $t), !1
            }, trigger: function () {
                return Et(this, t), !0
            }, delegateType: e
        }
    }), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, r) {
        T.event.special[t] = {
            delegateType: r, bindType: r, handle: function (t) {
                var e, n = t.relatedTarget, i = t.handleObj;
                return n && (n === this || T.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = r), e
            }
        }
    }), T.fn.extend({
        on: function (t, e, n, i) {
            return Mt(this, t, e, n, i)
        }, one: function (t, e, n, i) {
            return Mt(this, t, e, n, i, 1)
        }, off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = St), this.each(function () {
                T.event.remove(this, t, n, e)
            });
            for (r in t) this.off(r, e, t[r]);
            return this
        }
    });
    var It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        At = /<script|<style|<link/i, Bt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Dt(t, e) {
        return M(t, "table") && M(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
    }

    function Pt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Ot(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function jt(t, e) {
        var n, i, r, o, s, a, l, c;
        if (1 === e.nodeType) {
            if (Q.hasData(t) && (o = Q.access(t), s = Q.set(e, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) for (n = 0, i = c[r].length; n < i; n++) T.event.add(e, r, c[r][n]);
            G.hasData(t) && (a = G.access(t), l = T.extend({}, a), G.set(e, l))
        }
    }

    function Ht(n, i, r, o) {
        i = v.apply([], i);
        var t, e, s, a, l, c, h = 0, u = n.length, d = u - 1, f = i[0], p = y(f);
        if (p || 1 < u && "string" == typeof f && !w.checkClone && Bt.test(f)) return n.each(function (t) {
            var e = n.eq(t);
            p && (i[0] = f.call(this, t, e.html())), Ht(e, i, r, o)
        });
        if (u && (e = (t = bt(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
            for (a = (s = T.map(vt(t, "script"), Pt)).length; h < u; h++) l = t, h !== d && (l = T.clone(l, !0, !0), a && T.merge(s, vt(l, "script"))), r.call(n[h], l, h);
            if (a) for (c = s[s.length - 1].ownerDocument, T.map(s, Ot), h = 0; h < a; h++) l = s[h], pt.test(l.type || "") && !Q.access(l, "globalEval") && T.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {nonce: l.nonce || l.getAttribute("nonce")}) : x(l.textContent.replace(Nt, ""), l, c))
        }
        return n
    }

    function zt(t, e, n) {
        for (var i, r = e ? T.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(vt(i)), i.parentNode && (n && ot(i) && mt(vt(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    T.extend({
        htmlPrefilter: function (t) {
            return t.replace(It, "<$1></$2>")
        }, clone: function (t, e, n) {
            var i, r, o, s, a, l, c, h = t.cloneNode(!0), u = ot(t);
            if (!(w.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t))) for (s = vt(h), i = 0, r = (o = vt(t)).length; i < r; i++) a = o[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && dt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e) if (n) for (o = o || vt(t), s = s || vt(h), i = 0, r = o.length; i < r; i++) jt(o[i], s[i]); else jt(t, h);
            return 0 < (s = vt(h, "script")).length && mt(s, !u && vt(t, "script")), h
        }, cleanData: function (t) {
            for (var e, n, i, r = T.event.special, o = 0; void 0 !== (n = t[o]); o++) if (X(n)) {
                if (e = n[Q.expando]) {
                    if (e.events) for (i in e.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
                    n[Q.expando] = void 0
                }
                n[G.expando] && (n[G.expando] = void 0)
            }
        }
    }), T.fn.extend({
        detach: function (t) {
            return zt(this, t, !0)
        }, remove: function (t) {
            return zt(this, t)
        }, text: function (t) {
            return R(this, function (t) {
                return void 0 === t ? T.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return Ht(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Dt(this, t).appendChild(t)
            })
        }, prepend: function () {
            return Ht(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Dt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return Ht(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return Ht(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(vt(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return T.clone(this, t, e)
            })
        }, html: function (t) {
            return R(this, function (t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !At.test(t) && !gt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = T.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(vt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return Ht(this, arguments, function (t) {
                var e = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(vt(this)), e && e.replaceChild(t, this))
            }, n)
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, s) {
        T.fn[t] = function (t) {
            for (var e, n = [], i = T(t), r = i.length - 1, o = 0; o <= r; o++) e = o === r ? this : this.clone(!0), T(i[o])[s](e), l.apply(n, e.get());
            return this.pushStack(n)
        }
    });
    var _t, qt, Ft, Rt, Wt, Vt, Zt, Ut = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"), Xt = function (t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = k), e.getComputedStyle(t)
    }, Yt = new RegExp(it.join("|"), "i");

    function Qt(t, e, n) {
        var i, r, o, s, a = t.style;
        return (n = n || Xt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || ot(t) || (s = T.style(t, e)), !w.pixelBoxStyles() && Ut.test(s) && Yt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Gt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Jt() {
        if (Zt) {
            Vt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Zt.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(Vt).appendChild(Zt);
            var t = k.getComputedStyle(Zt);
            _t = "1%" !== t.top, Wt = 12 === Kt(t.marginLeft), Zt.style.right = "60%", Rt = 36 === Kt(t.right), qt = 36 === Kt(t.width), Zt.style.position = "absolute", Ft = 12 === Kt(Zt.offsetWidth / 3), rt.removeChild(Vt), Zt = null
        }
    }

    function Kt(t) {
        return Math.round(parseFloat(t))
    }

    Vt = L.createElement("div"), (Zt = L.createElement("div")).style && (Zt.style.backgroundClip = "content-box", Zt.cloneNode(!0).style.backgroundClip = "", w.clearCloneStyle = "content-box" === Zt.style.backgroundClip, T.extend(w, {
        boxSizingReliable: function () {
            return Jt(), qt
        }, pixelBoxStyles: function () {
            return Jt(), Rt
        }, pixelPosition: function () {
            return Jt(), _t
        }, reliableMarginLeft: function () {
            return Jt(), Wt
        }, scrollboxSize: function () {
            return Jt(), Ft
        }
    }));
    var te = ["Webkit", "Moz", "ms"], ee = L.createElement("div").style, ne = {};

    function ie(t) {
        return T.cssProps[t] || ne[t] || (t in ee ? t : ne[t] = function (t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = te.length; n--;) if ((t = te[n] + e) in ee) return t
        }(t) || t)
    }

    var re = /^(none|table(?!-c[ea]).+)/, oe = /^--/,
        se = {position: "absolute", visibility: "hidden", display: "block"},
        ae = {letterSpacing: "0", fontWeight: "400"};

    function le(t, e, n) {
        var i = nt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function ce(t, e, n, i, r, o) {
        var s = "width" === e ? 1 : 0, a = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += T.css(t, n + it[s], !0, r)), i ? ("content" === n && (l -= T.css(t, "padding" + it[s], !0, r)), "margin" !== n && (l -= T.css(t, "border" + it[s] + "Width", !0, r))) : (l += T.css(t, "padding" + it[s], !0, r), "padding" !== n ? l += T.css(t, "border" + it[s] + "Width", !0, r) : a += T.css(t, "border" + it[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
    }

    function he(t, e, n) {
        var i = Xt(t), r = (!w.boxSizingReliable() || n) && "border-box" === T.css(t, "boxSizing", !1, i), o = r,
            s = Qt(t, e, i), a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Ut.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!w.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === T.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === T.css(t, "boxSizing", !1, i), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + ce(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function ue(t, e, n, i, r) {
        return new ue.prototype.init(t, e, n, i, r)
    }

    T.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = Qt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = U(e), l = oe.test(e), c = t.style;
                if (l || (e = ie(a)), s = T.cssHooks[e] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e];
                "string" == (o = typeof n) && (r = nt.exec(n)) && r[1] && (n = ct(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), w.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
            }
        },
        css: function (t, e, n, i) {
            var r, o, s, a = U(e);
            return oe.test(e) || (e = ie(a)), (s = T.cssHooks[e] || T.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = Qt(t, e, i)), "normal" === r && e in ae && (r = ae[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), T.each(["height", "width"], function (t, l) {
        T.cssHooks[l] = {
            get: function (t, e, n) {
                if (e) return !re.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? he(t, l, n) : lt(t, se, function () {
                    return he(t, l, n)
                })
            }, set: function (t, e, n) {
                var i, r = Xt(t), o = !w.scrollboxSize() && "absolute" === r.position,
                    s = (o || n) && "border-box" === T.css(t, "boxSizing", !1, r), a = n ? ce(t, l, n, s, r) : 0;
                return s && o && (a -= Math.ceil(t["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - ce(t, l, "border", !1, r) - .5)), a && (i = nt.exec(e)) && "px" !== (i[3] || "px") && (t.style[l] = e, e = T.css(t, l)), le(0, e, a)
            }
        }
    }), T.cssHooks.marginLeft = Gt(w.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(Qt(t, "marginLeft")) || t.getBoundingClientRect().left - lt(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), T.each({margin: "", padding: "", border: "Width"}, function (r, o) {
        T.cssHooks[r + o] = {
            expand: function (t) {
                for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[r + it[e] + o] = i[e] || i[e - 2] || i[0];
                return n
            }
        }, "margin" !== r && (T.cssHooks[r + o].set = le)
    }), T.fn.extend({
        css: function (t, e) {
            return R(this, function (t, e, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(e)) {
                    for (i = Xt(t), r = e.length; s < r; s++) o[e[s]] = T.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((T.Tween = ue).prototype = {
        constructor: ue, init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = ue.propHooks[this.prop];
            return t && t.get ? t.get(this) : ue.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = ue.propHooks[this.prop];
            return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ue.propHooks._default.set(this), this
        }
    }).init.prototype = ue.prototype, (ue.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            }, set: function (t) {
                T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !T.cssHooks[t.prop] && null == t.elem.style[ie(t.prop)] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = ue.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, T.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, T.fx = ue.prototype.init, T.fx.step = {};
    var de, fe, pe, ge, ve = /^(?:toggle|show|hide)$/, me = /queueHooks$/;

    function we() {
        fe && (!1 === L.hidden && k.requestAnimationFrame ? k.requestAnimationFrame(we) : k.setTimeout(we, T.fx.interval), T.fx.tick())
    }

    function ye() {
        return k.setTimeout(function () {
            de = void 0
        }), de = Date.now()
    }

    function xe(t, e) {
        var n, i = 0, r = {height: t};
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = it[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function be(t, e, n) {
        for (var i, r = (Ce.tweeners[e] || []).concat(Ce.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, e, t)) return i
    }

    function Ce(o, t, e) {
        var n, s, i = 0, r = Ce.prefilters.length, a = T.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s) return !1;
            for (var t = de || ye(), e = Math.max(0, c.startTime + c.duration - t), n = 1 - (e / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
            return a.notifyWith(o, [c, n, e]), n < 1 && r ? e : (r || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
        }, c = a.promise({
            elem: o,
            props: T.extend({}, t),
            opts: T.extend(!0, {specialEasing: {}, easing: T.easing._default}, e),
            originalProperties: t,
            originalOptions: e,
            startTime: de || ye(),
            duration: e.duration,
            tweens: [],
            createTween: function (t, e) {
                var n = T.Tween(o, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function (t) {
                var e = 0, n = t ? c.tweens.length : 0;
                if (s) return this;
                for (s = !0; e < n; e++) c.tweens[e].run(1);
                return t ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, t])) : a.rejectWith(o, [c, t]), this
            }
        }), h = c.props;
        for (function (t, e) {
            var n, i, r, o, s;
            for (n in t) if (r = e[i = U(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = T.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r); else e[i] = r
        }(h, c.opts.specialEasing); i < r; i++) if (n = Ce.prefilters[i].call(c, o, h, c.opts)) return y(n.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return T.map(h, be, c), y(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    T.Animation = T.extend(Ce, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return ct(n.elem, t, nt.exec(e), n), n
            }]
        }, tweener: function (t, e) {
            for (var n, i = 0, r = (t = y(t) ? (e = t, ["*"]) : t.match(O)).length; i < r; i++) n = t[i], Ce.tweeners[n] = Ce.tweeners[n] || [], Ce.tweeners[n].unshift(e)
        }, prefilters: [function (t, e, n) {
            var i, r, o, s, a, l, c, h, u = "width" in e || "height" in e, d = this, f = {}, p = t.style,
                g = t.nodeType && at(t), v = Q.get(t, "fxshow");
            for (i in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, d.always(function () {
                d.always(function () {
                    s.unqueued--, T.queue(t, "fx").length || s.empty.fire()
                })
            })), e) if (r = e[i], ve.test(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[i]) continue;
                    g = !0
                }
                f[i] = v && v[i] || T.style(t, i)
            }
            if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(f)) for (i in u && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = v && v.display) && (c = Q.get(t, "display")), "none" === (h = T.css(t, "display")) && (c ? h = c : (ut([t], !0), c = t.style.display || c, h = T.css(t, "display"), ut([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === T.css(t, "float") && (l || (d.done(function () {
                p.display = c
            }), null == c && (h = p.display, c = "none" === h ? "" : h)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, f) l || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(t, "fxshow", {display: c}), o && (v.hidden = !g), g && ut([t], !0), d.done(function () {
                for (i in g || ut([t]), Q.remove(t, "fxshow"), f) T.style(t, i, f[i])
            })), l = be(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
        }], prefilter: function (t, e) {
            e ? Ce.prefilters.unshift(t) : Ce.prefilters.push(t)
        }
    }), T.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? T.extend({}, t) : {
            complete: n || !n && e || y(t) && t,
            duration: t,
            easing: n && e || e && !y(e) && e
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
        }, i
    }, T.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(at).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
        }, animate: function (e, t, n, i) {
            function r() {
                var t = Ce(this, T.extend({}, e), s);
                (o || Q.get(this, "finish")) && t.stop(!0)
            }

            var o = T.isEmptyObject(e), s = T.speed(t, n, i);
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        }, stop: function (r, t, o) {
            function s(t) {
                var e = t.stop;
                delete t.stop, e(o)
            }

            return "string" != typeof r && (o = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                var t = !0, e = null != r && r + "queueHooks", n = T.timers, i = Q.get(this);
                if (e) i[e] && i[e].stop && s(i[e]); else for (e in i) i[e] && i[e].stop && me.test(e) && s(i[e]);
                for (e = n.length; e--;) n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
                !t && o || T.dequeue(this, r)
            })
        }, finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var t, e = Q.get(this), n = e[s + "queue"], i = e[s + "queueHooks"], r = T.timers, o = n ? n.length : 0;
                for (e.finish = !0, T.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === s && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function (t, i) {
        var r = T.fn[i];
        T.fn[i] = function (t, e, n) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(xe(i, !0), t, e, n)
        }
    }), T.each({
        slideDown: xe("show"),
        slideUp: xe("hide"),
        slideToggle: xe("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, i) {
        T.fn[t] = function (t, e, n) {
            return this.animate(i, t, e, n)
        }
    }), T.timers = [], T.fx.tick = function () {
        var t, e = 0, n = T.timers;
        for (de = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || T.fx.stop(), de = void 0
    }, T.fx.timer = function (t) {
        T.timers.push(t), T.fx.start()
    }, T.fx.interval = 13, T.fx.start = function () {
        fe || (fe = !0, we())
    }, T.fx.stop = function () {
        fe = null
    }, T.fx.speeds = {slow: 600, fast: 200, _default: 400}, T.fn.delay = function (i, t) {
        return i = T.fx && T.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
            var n = k.setTimeout(t, i);
            e.stop = function () {
                k.clearTimeout(n)
            }
        })
    }, pe = L.createElement("input"), ge = L.createElement("select").appendChild(L.createElement("option")), pe.type = "checkbox", w.checkOn = "" !== pe.value, w.optSelected = ge.selected, (pe = L.createElement("input")).value = "t", pe.type = "radio", w.radioValue = "t" === pe.value;
    var ke, Le = T.expr.attrHandle;
    T.fn.extend({
        attr: function (t, e) {
            return R(this, T.attr, t, e, 1 < arguments.length)
        }, removeAttr: function (t) {
            return this.each(function () {
                T.removeAttr(this, t)
            })
        }
    }), T.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === o && T.isXMLDoc(t) || (r = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? ke : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : !(r && "get" in r && null !== (i = r.get(t, e))) && null == (i = T.find.attr(t, e)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!w.radioValue && "radio" === e && M(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var n, i = 0, r = e && e.match(O);
            if (r && 1 === t.nodeType) for (; n = r[i++];) t.removeAttribute(n)
        }
    }), ke = {
        set: function (t, e, n) {
            return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var s = Le[e] || T.find.attr;
        Le[e] = function (t, e, n) {
            var i, r, o = e.toLowerCase();
            return n || (r = Le[o], Le[o] = i, i = null != s(t, e, n) ? o : null, Le[o] = r), i
        }
    });
    var Te = /^(?:input|select|textarea|button)$/i, Se = /^(?:a|area)$/i;

    function $e(t) {
        return (t.match(O) || []).join(" ")
    }

    function Me(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function Ee(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || []
    }

    T.fn.extend({
        prop: function (t, e) {
            return R(this, T.prop, t, e, 1 < arguments.length)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[T.propFix[t] || t]
            })
        }
    }), T.extend({
        prop: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(t) || (e = T.propFix[e] || e, r = T.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = T.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Te.test(t.nodeName) || Se.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), w.optSelected || (T.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (y(e)) return this.each(function (t) {
                T(this).addClass(e.call(this, t, Me(this)))
            });
            if ((t = Ee(e)).length) for (; n = this[l++];) if (r = Me(n), i = 1 === n.nodeType && " " + $e(r) + " ") {
                for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (a = $e(i)) && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (y(e)) return this.each(function (t) {
                T(this).removeClass(e.call(this, t, Me(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Ee(e)).length) for (; n = this[l++];) if (r = Me(n), i = 1 === n.nodeType && " " + $e(r) + " ") {
                for (s = 0; o = t[s++];) for (; -1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                r !== (a = $e(i)) && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (r, e) {
            var o = typeof r, s = "string" == o || Array.isArray(r);
            return "boolean" == typeof e && s ? e ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function (t) {
                T(this).toggleClass(r.call(this, t, Me(this), e), e)
            }) : this.each(function () {
                var t, e, n, i;
                if (s) for (e = 0, n = T(this), i = Ee(r); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t); else void 0 !== r && "boolean" != o || ((t = Me(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== r && Q.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && -1 < (" " + $e(Me(n)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var Ie = /\r/g;
    T.fn.extend({
        val: function (n) {
            var i, t, r, e = this[0];
            return arguments.length ? (r = y(n), this.each(function (t) {
                var e;
                1 === this.nodeType && (null == (e = r ? n.call(this, t, T(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function (t) {
                    return null == t ? "" : t + ""
                })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
            })) : e ? (i = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(Ie, "") : null == t ? "" : t : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = T.find.attr(t, "value");
                    return null != e ? e : $e(T.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, n, i, r = t.options, o = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))) {
                        if (e = T(n).val(), s) return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var n, i, r = t.options, o = T.makeArray(e), s = r.length; s--;) ((i = r[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), o)) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), T.each(["radio", "checkbox"], function () {
        T.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < T.inArray(T(t).val(), e)
            }
        }, w.checkOn || (T.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), w.focusin = "onfocusin" in k;

    function Ae(t) {
        t.stopPropagation()
    }

    var Be = /^(?:focusinfocus|focusoutblur)$/;
    T.extend(T.event, {
        trigger: function (t, e, n, i) {
            var r, o, s, a, l, c, h, u, d = [n || L], f = m.call(t, "type") ? t.type : t,
                p = m.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = u = s = n = n || L, 3 !== n.nodeType && 8 !== n.nodeType && !Be.test(f + T.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), l = f.indexOf(":") < 0 && "on" + f, (t = t[T.expando] ? t : new T.Event(f, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : T.makeArray(e, [t]), h = T.event.special[f] || {}, i || !h.trigger || !1 !== h.trigger.apply(n, e))) {
                if (!i && !h.noBubble && !g(n)) {
                    for (a = h.delegateType || f, Be.test(a + f) || (o = o.parentNode); o; o = o.parentNode) d.push(o), s = o;
                    s === (n.ownerDocument || L) && d.push(s.defaultView || s.parentWindow || k)
                }
                for (r = 0; (o = d[r++]) && !t.isPropagationStopped();) u = o, t.type = 1 < r ? a : h.bindType || f, (c = (Q.get(o, "events") || {})[t.type] && Q.get(o, "handle")) && c.apply(o, e), (c = l && o[l]) && c.apply && X(o) && (t.result = c.apply(o, e), !1 === t.result && t.preventDefault());
                return t.type = f, i || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(d.pop(), e) || !X(n) || l && y(n[f]) && !g(n) && ((s = n[l]) && (n[l] = null), T.event.triggered = f, t.isPropagationStopped() && u.addEventListener(f, Ae), n[f](), t.isPropagationStopped() && u.removeEventListener(f, Ae), T.event.triggered = void 0, s && (n[l] = s)), t.result
            }
        }, simulate: function (t, e, n) {
            var i = T.extend(new T.Event, n, {type: t, isSimulated: !0});
            T.event.trigger(i, null, e)
        }
    }), T.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                T.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return T.event.trigger(t, e, n, !0)
        }
    }), w.focusin || T.each({focus: "focusin", blur: "focusout"}, function (n, i) {
        function r(t) {
            T.event.simulate(i, t.target, T.event.fix(t))
        }

        T.event.special[i] = {
            setup: function () {
                var t = this.ownerDocument || this, e = Q.access(t, i);
                e || t.addEventListener(n, r, !0), Q.access(t, i, (e || 0) + 1)
            }, teardown: function () {
                var t = this.ownerDocument || this, e = Q.access(t, i) - 1;
                e ? Q.access(t, i, e) : (t.removeEventListener(n, r, !0), Q.remove(t, i))
            }
        }
    });
    var Ne = k.location, De = Date.now(), Pe = /\?/;
    T.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new k.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e
    };
    var Oe = /\[\]$/, je = /\r?\n/g, He = /^(?:submit|button|image|reset|file)$/i,
        ze = /^(?:input|select|textarea|keygen)/i;

    function _e(n, t, i, r) {
        var e;
        if (Array.isArray(t)) T.each(t, function (t, e) {
            i || Oe.test(n) ? r(n, e) : _e(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, r)
        }); else if (i || "object" !== b(t)) r(n, t); else for (e in t) _e(n + "[" + e + "]", t[e], i, r)
    }

    T.param = function (t, e) {
        function n(t, e) {
            var n = y(e) ? e() : e;
            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        }

        var i, r = [];
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function () {
            n(this.name, this.value)
        }); else for (i in t) _e(i, t[i], e, n);
        return r.join("&")
    }, T.fn.extend({
        serialize: function () {
            return T.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = T.prop(this, "elements");
                return t ? T.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !T(this).is(":disabled") && ze.test(this.nodeName) && !He.test(t) && (this.checked || !dt.test(t))
            }).map(function (t, e) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function (t) {
                    return {name: e.name, value: t.replace(je, "\r\n")}
                }) : {name: e.name, value: n.replace(je, "\r\n")}
            }).get()
        }
    });
    var qe = /%20/g, Fe = /#.*$/, Re = /([?&])_=[^&]*/, We = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ve = /^(?:GET|HEAD)$/,
        Ze = /^\/\//, Ue = {}, Xe = {}, Ye = "*/".concat("*"), Qe = L.createElement("a");

    function Ge(o) {
        return function (t, e) {
            "string" != typeof t && (e = t, t = "*");
            var n, i = 0, r = t.toLowerCase().match(O) || [];
            if (y(e)) for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }

    function Je(e, r, o, s) {
        var a = {}, l = e === Xe;

        function c(t) {
            var i;
            return a[t] = !0, T.each(e[t] || [], function (t, e) {
                var n = e(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
            }), i
        }

        return c(r.dataTypes[0]) || !a["*"] && c("*")
    }

    function Ke(t, e) {
        var n, i, r = T.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i = i || {})[n] = e[n]);
        return i && T.extend(!0, t, i), t
    }

    Qe.href = Ne.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ne.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ne.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ye,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? Ke(Ke(t, T.ajaxSettings), e) : Ke(T.ajaxSettings, t)
        },
        ajaxPrefilter: Ge(Ue),
        ajaxTransport: Ge(Xe),
        ajax: function (t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var h, u, d, n, f, i, p, g, r, o, v = T.ajaxSetup({}, e), m = v.context || v,
                w = v.context && (m.nodeType || m.jquery) ? T(m) : T.event, y = T.Deferred(),
                x = T.Callbacks("once memory"), b = v.statusCode || {}, s = {}, a = {}, l = "canceled", C = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (p) {
                            if (!n) for (n = {}; e = We.exec(d);) n[e[1].toLowerCase() + " "] = (n[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = n[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    }, getAllResponseHeaders: function () {
                        return p ? d : null
                    }, setRequestHeader: function (t, e) {
                        return null == p && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, s[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == p && (v.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (p) C.always(t[C.status]); else for (e in t) b[e] = [b[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || l;
                        return h && h.abort(e), c(0, e), this
                    }
                };
            if (y.promise(C), v.url = ((t || v.url || Ne.href) + "").replace(Ze, Ne.protocol + "//"), v.type = e.method || e.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(O) || [""], null == v.crossDomain) {
                i = L.createElement("a");
                try {
                    i.href = v.url, i.href = i.href, v.crossDomain = Qe.protocol + "//" + Qe.host != i.protocol + "//" + i.host
                } catch (t) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = T.param(v.data, v.traditional)), Je(Ue, v, e, C), p) return C;
            for (r in (g = T.event && v.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ve.test(v.type), u = v.url.replace(Fe, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(qe, "+")) : (o = v.url.slice(u.length), v.data && (v.processData || "string" == typeof v.data) && (u += (Pe.test(u) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (u = u.replace(Re, "$1"), o = (Pe.test(u) ? "&" : "?") + "_=" + De++ + o), v.url = u + o), v.ifModified && (T.lastModified[u] && C.setRequestHeader("If-Modified-Since", T.lastModified[u]), T.etag[u] && C.setRequestHeader("If-None-Match", T.etag[u])), (v.data && v.hasContent && !1 !== v.contentType || e.contentType) && C.setRequestHeader("Content-Type", v.contentType), C.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Ye + "; q=0.01" : "") : v.accepts["*"]), v.headers) C.setRequestHeader(r, v.headers[r]);
            if (v.beforeSend && (!1 === v.beforeSend.call(m, C, v) || p)) return C.abort();
            if (l = "abort", x.add(v.complete), C.done(v.success), C.fail(v.error), h = Je(Xe, v, e, C)) {
                if (C.readyState = 1, g && w.trigger("ajaxSend", [C, v]), p) return C;
                v.async && 0 < v.timeout && (f = k.setTimeout(function () {
                    C.abort("timeout")
                }, v.timeout));
                try {
                    p = !1, h.send(s, c)
                } catch (t) {
                    if (p) throw t;
                    c(-1, t)
                }
            } else c(-1, "No Transport");

            function c(t, e, n, i) {
                var r, o, s, a, l, c = e;
                p || (p = !0, f && k.clearTimeout(f), h = void 0, d = i || "", C.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, n && (a = function (t, e, n) {
                    for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i) for (r in a) if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s = s || r
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(v, C, n)), a = function (t, e, n, i) {
                    var r, o, s, a, l, c = {}, h = t.dataTypes.slice();
                    if (h[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                    for (o = h.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], h.unshift(a[1]));
                            break
                        }
                        if (!0 !== s) if (s && t.throws) e = s(e); else try {
                            e = s(e)
                        } catch (t) {
                            return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o}
                        }
                    }
                    return {state: "success", data: e}
                }(v, a, C, r), r ? (v.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (T.lastModified[u] = l), (l = C.getResponseHeader("etag")) && (T.etag[u] = l)), 204 === t || "HEAD" === v.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state, o = a.data, r = !(s = a.error))) : (s = c, !t && c || (c = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || c) + "", r ? y.resolveWith(m, [o, c, C]) : y.rejectWith(m, [C, c, s]), C.statusCode(b), b = void 0, g && w.trigger(r ? "ajaxSuccess" : "ajaxError", [C, v, r ? o : s]), x.fireWith(m, [C, c]), g && (w.trigger("ajaxComplete", [C, v]), --T.active || T.event.trigger("ajaxStop")))
            }

            return C
        },
        getJSON: function (t, e, n) {
            return T.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return T.get(t, void 0, e, "script")
        }
    }), T.each(["get", "post"], function (t, r) {
        T[r] = function (t, e, n, i) {
            return y(e) && (i = i || n, n = e, e = void 0), T.ajax(T.extend({
                url: t,
                type: r,
                dataType: i,
                data: e,
                success: n
            }, T.isPlainObject(t) && t))
        }
    }), T._evalUrl = function (t, e) {
        return T.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (t) {
                T.globalEval(t, e)
            }
        })
    }, T.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (y(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (n) {
            return y(n) ? this.each(function (t) {
                T(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = T(this), e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        }, wrap: function (e) {
            var n = y(e);
            return this.each(function (t) {
                T(this).wrapAll(n ? e.call(this, t) : e)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                T(this).replaceWith(this.childNodes)
            }), this
        }
    }), T.expr.pseudos.hidden = function (t) {
        return !T.expr.pseudos.visible(t)
    }, T.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, T.ajaxSettings.xhr = function () {
        try {
            return new k.XMLHttpRequest
        } catch (t) {
        }
    };
    var tn = {0: 200, 1223: 204}, en = T.ajaxSettings.xhr();
    w.cors = !!en && "withCredentials" in en, w.ajax = en = !!en, T.ajaxTransport(function (r) {
        var o, s;
        if (w.cors || en && !r.crossDomain) return {
            send: function (t, e) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields) for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
                o = function (t) {
                    return function () {
                        o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(tn[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {binary: i.response} : {text: i.responseText}, i.getAllResponseHeaders()))
                    }
                }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
                    4 === i.readyState && k.setTimeout(function () {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (t) {
                    if (o) throw t
                }
            }, abort: function () {
                o && o()
            }
        }
    }), T.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), T.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return T.globalEval(t), t
            }
        }
    }), T.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), T.ajaxTransport("script", function (n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (t, e) {
                i = T("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function (t) {
                    i.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), L.head.appendChild(i[0])
            }, abort: function () {
                r && r()
            }
        }
    });
    var nn, rn = [], on = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = rn.pop() || T.expando + "_" + De++;
            return this[t] = !0, t
        }
    }), T.ajaxPrefilter("json jsonp", function (t, e, n) {
        var i, r, o,
            s = !1 !== t.jsonp && (on.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(on, "$1" + i) : !1 !== t.jsonp && (t.url += (Pe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return o || T.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", r = k[i], k[i] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === r ? T(k).removeProp(i) : k[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, rn.push(i)), o && y(r) && r(o[0]), o = r = void 0
        }), "script"
    }), w.createHTMLDocument = ((nn = L.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === nn.childNodes.length), T.parseHTML = function (t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (w.createHTMLDocument ? ((i = (e = L.implementation.createHTMLDocument("")).createElement("base")).href = L.location.href, e.head.appendChild(i)) : e = L), o = !n && [], (r = E.exec(t)) ? [e.createElement(r[1])] : (r = bt([t], e, o), o && o.length && T(o).remove(), T.merge([], r.childNodes)));
        var i, r, o
    }, T.fn.load = function (t, e, n) {
        var i, r, o, s = this, a = t.indexOf(" ");
        return -1 < a && (i = $e(t.slice(a)), t = t.slice(0, a)), y(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < s.length && T.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        T.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), T.expr.pseudos.animated = function (e) {
        return T.grep(T.timers, function (t) {
            return e === t.elem
        }).length
    }, T.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, s, a, l, c = T.css(t, "position"), h = T(t), u = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), o = T.css(t, "top"), l = T.css(t, "left"), r = ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = h.position()).top, i.left) : (s = parseFloat(o) || 0, parseFloat(l) || 0), y(e) && (e = e.call(t, n, T.extend({}, a))), null != e.top && (u.top = e.top - a.top + s), null != e.left && (u.left = e.left - a.left + r), "using" in e ? e.using.call(t, u) : h.css(u)
        }
    }, T.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                T.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, n, i = this[0], r = {top: 0, left: 0};
                if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect(); else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((r = T(t).offset()).top += T.css(t, "borderTopWidth", !0), r.left += T.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - T.css(i, "marginTop", !0),
                    left: e.left - r.left - T.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent;
                return t || rt
            })
        }
    }), T.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, r) {
        var o = "pageYOffset" === r;
        T.fn[e] = function (t) {
            return R(this, function (t, e, n) {
                var i;
                if (g(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[r] : t[e];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[e] = n
            }, e, t, arguments.length)
        }
    }), T.each(["top", "left"], function (t, n) {
        T.cssHooks[n] = Gt(w.pixelPosition, function (t, e) {
            if (e) return e = Qt(t, n), Ut.test(e) ? T(t).position()[n] + "px" : e
        })
    }), T.each({Height: "height", Width: "width"}, function (s, a) {
        T.each({padding: "inner" + s, content: a, "": "outer" + s}, function (i, o) {
            T.fn[o] = function (t, e) {
                var n = arguments.length && (i || "boolean" != typeof t),
                    r = i || (!0 === t || !0 === e ? "margin" : "border");
                return R(this, function (t, e, n) {
                    var i;
                    return g(t) ? 0 === o.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? T.css(t, e, r) : T.style(t, e, n, r)
                }, a, n ? t : void 0, n)
            }
        })
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
        T.fn[n] = function (t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    }), T.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), T.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), T.proxy = function (t, e) {
        var n, i, r;
        if ("string" == typeof e && (n = t[e], e = t, t = n), y(t)) return i = a.call(arguments, 2), (r = function () {
            return t.apply(e || this, i.concat(a.call(arguments)))
        }).guid = t.guid = t.guid || T.guid++, r
    }, T.holdReady = function (t) {
        t ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = M, T.isFunction = y, T.isWindow = g, T.camelCase = U, T.type = b, T.now = Date.now, T.isNumeric = function (t) {
        var e = T.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return T
    });
    var sn = k.jQuery, an = k.$;
    return T.noConflict = function (t) {
        return k.$ === T && (k.$ = an), t && k.jQuery === T && (k.jQuery = sn), T
    }, t || (k.jQuery = k.$ = T), T
}), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return e(t)
    }) : "object" == typeof module && "object" == typeof module.exports ? exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    e.easing.jswing = e.easing.swing;
    var n = Math.pow, i = Math.sqrt, r = Math.sin, o = Math.cos, s = Math.PI, a = 1.70158, l = 1.525 * a, c = 2 * s / 3,
        h = 2 * s / 4.5;

    function u(t) {
        var e = 7.5625, n = 2.75;
        return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
    }

    e.extend(e.easing, {
        def: "easeOutQuad", swing: function (t) {
            return e.easing[e.easing.def](t)
        }, easeInQuad: function (t) {
            return t * t
        }, easeOutQuad: function (t) {
            return 1 - (1 - t) * (1 - t)
        }, easeInOutQuad: function (t) {
            return t < .5 ? 2 * t * t : 1 - n(-2 * t + 2, 2) / 2
        }, easeInCubic: function (t) {
            return t * t * t
        }, easeOutCubic: function (t) {
            return 1 - n(1 - t, 3)
        }, easeInOutCubic: function (t) {
            return t < .5 ? 4 * t * t * t : 1 - n(-2 * t + 2, 3) / 2
        }, easeInQuart: function (t) {
            return t * t * t * t
        }, easeOutQuart: function (t) {
            return 1 - n(1 - t, 4)
        }, easeInOutQuart: function (t) {
            return t < .5 ? 8 * t * t * t * t : 1 - n(-2 * t + 2, 4) / 2
        }, easeInQuint: function (t) {
            return t * t * t * t * t
        }, easeOutQuint: function (t) {
            return 1 - n(1 - t, 5)
        }, easeInOutQuint: function (t) {
            return t < .5 ? 16 * t * t * t * t * t : 1 - n(-2 * t + 2, 5) / 2
        }, easeInSine: function (t) {
            return 1 - o(t * s / 2)
        }, easeOutSine: function (t) {
            return r(t * s / 2)
        }, easeInOutSine: function (t) {
            return -(o(s * t) - 1) / 2
        }, easeInExpo: function (t) {
            return 0 === t ? 0 : n(2, 10 * t - 10)
        }, easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 - n(2, -10 * t)
        }, easeInOutExpo: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? n(2, 20 * t - 10) / 2 : (2 - n(2, -20 * t + 10)) / 2
        }, easeInCirc: function (t) {
            return 1 - i(1 - n(t, 2))
        }, easeOutCirc: function (t) {
            return i(1 - n(t - 1, 2))
        }, easeInOutCirc: function (t) {
            return t < .5 ? (1 - i(1 - n(2 * t, 2))) / 2 : (i(1 - n(-2 * t + 2, 2)) + 1) / 2
        }, easeInElastic: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : -n(2, 10 * t - 10) * r((10 * t - 10.75) * c)
        }, easeOutElastic: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : n(2, -10 * t) * r((10 * t - .75) * c) + 1
        }, easeInOutElastic: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -(n(2, 20 * t - 10) * r((20 * t - 11.125) * h)) / 2 : n(2, -20 * t + 10) * r((20 * t - 11.125) * h) / 2 + 1
        }, easeInBack: function (t) {
            return 2.70158 * t * t * t - a * t * t
        }, easeOutBack: function (t) {
            return 1 + 2.70158 * n(t - 1, 3) + a * n(t - 1, 2)
        }, easeInOutBack: function (t) {
            return t < .5 ? n(2 * t, 2) * (7.189819 * t - l) / 2 : (n(2 * t - 2, 2) * ((1 + l) * (2 * t - 2) + l) + 2) / 2
        }, easeInBounce: function (t) {
            return 1 - u(1 - t)
        }, easeOutBounce: u, easeInOutBounce: function (t) {
            return t < .5 ? (1 - u(1 - 2 * t)) / 2 : (1 + u(2 * t - 1)) / 2
        }
    })
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikit", e) : (t = t || self).UIkit = e()
}(this, function () {
    "use strict";
    var t = Object.prototype, n = t.hasOwnProperty;

    function u(t, e) {
        return n.call(t, e)
    }

    var e = {}, i = /([a-z\d])([A-Z])/g;

    function d(t) {
        return t in e || (e[t] = t.replace(i, "$1-$2").toLowerCase()), e[t]
    }

    var r = /-(\w)/g;

    function f(t) {
        return t.replace(r, o)
    }

    function o(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function p(t) {
        return t.length ? o(0, t.charAt(0)) + t.slice(1) : ""
    }

    var s = String.prototype, a = s.startsWith || function (t) {
        return 0 === this.lastIndexOf(t, 0)
    };

    function w(t, e) {
        return a.call(t, e)
    }

    var l = s.endsWith || function (t) {
        return this.substr(-t.length) === t
    };

    function c(t, e) {
        return l.call(t, e)
    }

    function h(t, e) {
        return ~this.indexOf(t, e)
    }

    var g = Array.prototype, v = s.includes || h, m = g.includes || h;

    function y(t, e) {
        return t && (D(t) ? v : m).call(t, e)
    }

    var x = g.findIndex || function (t) {
        for (var e = arguments, n = 0; n < this.length; n++) if (t.call(e[1], this[n], n, this)) return n;
        return -1
    };

    function b(t, e) {
        return x.call(t, e)
    }

    var C = Array.isArray;

    function k(t) {
        return "function" == typeof t
    }

    function L(t) {
        return null !== t && "object" == typeof t
    }

    var T = t.toString;

    function S(t) {
        return "[object Object]" === T.call(t)
    }

    function $(t) {
        return L(t) && t === t.window
    }

    function M(t) {
        return L(t) && 9 === t.nodeType
    }

    function E(t) {
        return L(t) && !!t.jquery
    }

    function I(t) {
        return L(t) && 1 <= t.nodeType
    }

    function A(t) {
        return L(t) && 1 === t.nodeType
    }

    function B(t) {
        return T.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/)
    }

    function N(t) {
        return "boolean" == typeof t
    }

    function D(t) {
        return "string" == typeof t
    }

    function P(t) {
        return "number" == typeof t
    }

    function O(t) {
        return P(t) || D(t) && !isNaN(t - parseFloat(t))
    }

    function j(t) {
        return !(C(t) ? t.length : L(t) && Object.keys(t).length)
    }

    function H(t) {
        return void 0 === t
    }

    function z(t) {
        return N(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t
    }

    function _(t) {
        var e = Number(t);
        return !isNaN(e) && e
    }

    function q(t) {
        return parseFloat(t) || 0
    }

    function F(t) {
        return I(t) ? t : B(t) || E(t) ? t[0] : C(t) ? F(t[0]) : null
    }

    function R(t) {
        return I(t) ? [t] : B(t) ? g.slice.call(t) : C(t) ? t.map(F).filter(Boolean) : E(t) ? t.toArray() : []
    }

    function W(t) {
        return $(t) ? t : (t = F(t)) ? (M(t) ? t : t.ownerDocument).defaultView : window
    }

    function V(t) {
        return C(t) ? t : D(t) ? t.split(/,(?![^(]*\))/).map(function (t) {
            return O(t) ? _(t) : z(t.trim())
        }) : [t]
    }

    function Z(t) {
        return t ? c(t, "ms") ? q(t) : 1e3 * q(t) : 0
    }

    function U(t, n) {
        return t === n || L(t) && L(n) && Object.keys(t).length === Object.keys(n).length && G(t, function (t, e) {
            return t === n[e]
        })
    }

    function X(t, e, n) {
        return t.replace(new RegExp(e + "|" + n, "mg"), function (t) {
            return t === e ? n : e
        })
    }

    var Y = Object.assign || function (t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        t = Object(t);
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            if (null !== r) for (var o in r) u(r, o) && (t[o] = r[o])
        }
        return t
    };

    function Q(t) {
        return t[t.length - 1]
    }

    function G(t, e) {
        for (var n in t) if (!1 === e(t[n], n)) return !1;
        return !0
    }

    function J(t, r) {
        return t.sort(function (t, e) {
            var n = t[r];
            void 0 === n && (n = 0);
            var i = e[r];
            return void 0 === i && (i = 0), i < n ? 1 : n < i ? -1 : 0
        })
    }

    function K(t, n) {
        var i = new Set;
        return t.filter(function (t) {
            var e = t[n];
            return !i.has(e) && (i.add(e) || !0)
        })
    }

    function tt(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(Math.max(_(t) || 0, e), n)
    }

    function et() {
    }

    function nt(t, e) {
        return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top
    }

    function it(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
    }

    var rt = {
        ratio: function (t, e, n) {
            var i, r = "width" === e ? "height" : "width";
            return (i = {})[r] = t[e] ? Math.round(n * t[r] / t[e]) : t[r], i[e] = n, i
        }, contain: function (n, i) {
            var r = this;
            return G(n = Y({}, n), function (t, e) {
                return n = n[e] > i[e] ? r.ratio(n, e, i[e]) : n
            }), n
        }, cover: function (n, i) {
            var r = this;
            return G(n = this.contain(n, i), function (t, e) {
                return n = n[e] < i[e] ? r.ratio(n, e, i[e]) : n
            }), n
        }
    };

    function ot(t, e, n) {
        if (L(e)) for (var i in e) ot(t, i, e[i]); else {
            if (H(n)) return (t = F(t)) && t.getAttribute(e);
            R(t).forEach(function (t) {
                k(n) && (n = n.call(t, ot(t, e))), null === n ? at(t, e) : t.setAttribute(e, n)
            })
        }
    }

    function st(t, e) {
        return R(t).some(function (t) {
            return t.hasAttribute(e)
        })
    }

    function at(t, e) {
        t = R(t), e.split(" ").forEach(function (e) {
            return t.forEach(function (t) {
                return t.hasAttribute(e) && t.removeAttribute(e)
            })
        })
    }

    function lt(t, e) {
        for (var n = 0, i = [e, "data-" + e]; n < i.length; n++) if (st(t, i[n])) return ot(t, i[n])
    }

    var ct = /msie|trident/i.test(window.navigator.userAgent), ht = "rtl" === ot(document.documentElement, "dir"),
        ut = "ontouchstart" in window, dt = window.PointerEvent,
        ft = ut || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints,
        pt = dt ? "pointerdown" : ut ? "touchstart" : "mousedown",
        gt = dt ? "pointermove" : ut ? "touchmove" : "mousemove", vt = dt ? "pointerup" : ut ? "touchend" : "mouseup",
        mt = dt ? "pointerenter" : ut ? "" : "mouseenter", wt = dt ? "pointerleave" : ut ? "" : "mouseleave",
        yt = dt ? "pointercancel" : "touchcancel";

    function xt(t, e) {
        return F(t) || kt(t, Ct(t, e))
    }

    function bt(t, e) {
        var n = R(t);
        return n.length && n || Lt(t, Ct(t, e))
    }

    function Ct(t, e) {
        return void 0 === e && (e = document), Mt(t) || M(e) ? e : e.ownerDocument
    }

    function kt(t, e) {
        return F(Tt(t, e, "querySelector"))
    }

    function Lt(t, e) {
        return R(Tt(t, e, "querySelectorAll"))
    }

    function Tt(t, s, e) {
        if (void 0 === s && (s = document), !t || !D(t)) return null;
        var a;
        Mt(t = t.replace($t, "$1 *")) && (a = [], t = t.match(Et).map(function (t) {
            return t.replace(/,$/, "").trim()
        }).map(function (t, e) {
            var n = s;
            if ("!" === t[0]) {
                var i = t.substr(1).trim().split(" ");
                n = Dt(Pt(s), i[0]), t = i.slice(1).join(" ").trim()
            }
            if ("-" === t[0]) {
                var r = t.substr(1).trim().split(" "), o = (n || s).previousElementSibling;
                n = Bt(o, t.substr(1)) ? o : null, t = r.slice(1).join(" ")
            }
            return n ? (n.id || (n.id = "uk-" + Date.now() + e, a.push(function () {
                return at(n, "id")
            })), "#" + jt(n.id) + " " + t) : null
        }).filter(Boolean).join(","), s = document);
        try {
            return s[e](t)
        } catch (t) {
            return null
        } finally {
            a && a.forEach(function (t) {
                return t()
            })
        }
    }

    var St = /(^|[^\\],)\s*[!>+~-]/, $t = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

    function Mt(t) {
        return D(t) && t.match(St)
    }

    var Et = /.*?[^\\](?:,|$)/g, It = Element.prototype,
        At = It.matches || It.webkitMatchesSelector || It.msMatchesSelector;

    function Bt(t, e) {
        return R(t).some(function (t) {
            return At.call(t, e)
        })
    }

    var Nt = It.closest || function (t) {
        var e = this;
        do {
            if (Bt(e, t)) return e
        } while (e = Pt(e))
    };

    function Dt(t, e) {
        return w(e, ">") && (e = e.slice(1)), A(t) ? Nt.call(t, e) : R(t).map(function (t) {
            return Dt(t, e)
        }).filter(Boolean)
    }

    function Pt(t) {
        return (t = F(t)) && A(t.parentNode) && t.parentNode
    }

    var Ot = window.CSS && CSS.escape || function (t) {
        return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
            return "\\" + t
        })
    };

    function jt(t) {
        return D(t) ? Ot.call(null, t) : ""
    }

    var Ht = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        menuitem: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function zt(t) {
        return R(t).some(function (t) {
            return Ht[t.tagName.toLowerCase()]
        })
    }

    function _t(t) {
        return R(t).some(function (t) {
            return t.offsetWidth || t.offsetHeight || t.getClientRects().length
        })
    }

    var qt = "input,select,textarea,button";

    function Ft(t) {
        return R(t).some(function (t) {
            return Bt(t, qt)
        })
    }

    function Rt(t, e) {
        return R(t).filter(function (t) {
            return Bt(t, e)
        })
    }

    function Wt(t, e) {
        return D(e) ? Bt(t, e) || Dt(t, e) : t === e || (M(e) ? e.documentElement : F(e)).contains(F(t))
    }

    function Vt(t, e) {
        for (var n = []; t = Pt(t);) e && !Bt(t, e) || n.push(t);
        return n
    }

    function Zt(t, e) {
        var n = (t = F(t)) ? R(t.children) : [];
        return e ? Rt(n, e) : n
    }

    function Ut() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var n, i, r = Jt(t), o = r[0], s = r[1], a = r[2], l = r[3], c = r[4];
        return o = ne(o), 1 < l.length && (n = l, l = function (t) {
            return C(t.detail) ? n.apply(void 0, [t].concat(t.detail)) : n(t)
        }), c && c.self && (i = l, l = function (t) {
            if (t.target === t.currentTarget || t.target === t.current) return i.call(null, t)
        }), a && (l = function (t, i, r) {
            var o = this;
            return function (n) {
                t.forEach(function (t) {
                    var e = ">" === i[0] ? Lt(i, t).reverse().filter(function (t) {
                        return Wt(n.target, t)
                    })[0] : Dt(n.target, i);
                    e && (n.delegate = t, n.current = e, r.call(o, n))
                })
            }
        }(o, a, l)), c = Kt(c), s.split(" ").forEach(function (e) {
            return o.forEach(function (t) {
                return t.addEventListener(e, l, c)
            })
        }), function () {
            return Xt(o, s, l, c)
        }
    }

    function Xt(t, e, n, i) {
        void 0 === i && (i = !1), i = Kt(i), t = ne(t), e.split(" ").forEach(function (e) {
            return t.forEach(function (t) {
                return t.removeEventListener(e, n, i)
            })
        })
    }

    function Yt() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var n = Jt(t), i = n[0], r = n[1], o = n[2], s = n[3], a = n[4], l = n[5], c = Ut(i, r, o, function (t) {
            var e = !l || l(t);
            e && (c(), s(t, e))
        }, a);
        return c
    }

    function Qt(t, n, i) {
        return ne(t).reduce(function (t, e) {
            return t && e.dispatchEvent(Gt(n, !0, !0, i))
        }, !0)
    }

    function Gt(t, e, n, i) {
        if (void 0 === e && (e = !0), void 0 === n && (n = !1), D(t)) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, e, n, i), t = r
        }
        return t
    }

    function Jt(t) {
        return k(t[2]) && t.splice(2, 0, !1), t
    }

    function Kt(t) {
        return t && ct && !N(t) ? !!t.capture : t
    }

    function te(t) {
        return t && "addEventListener" in t
    }

    function ee(t) {
        return te(t) ? t : F(t)
    }

    function ne(t) {
        return C(t) ? t.map(ee).filter(Boolean) : D(t) ? Lt(t) : te(t) ? [t] : R(t)
    }

    function ie(t) {
        return "touch" === t.pointerType || !!t.touches
    }

    function re(t) {
        var e = t.touches, n = t.changedTouches, i = e && e[0] || n && n[0] || t;
        return {x: i.clientX, y: i.clientY}
    }

    function oe() {
        var n = this;
        this.promise = new se(function (t, e) {
            n.reject = e, n.resolve = t
        })
    }

    var se = "Promise" in window ? window.Promise : ce, ae = 2,
        le = "setImmediate" in window ? setImmediate : setTimeout;

    function ce(t) {
        this.state = ae, this.value = void 0, this.deferred = [];
        var e = this;
        try {
            t(function (t) {
                e.resolve(t)
            }, function (t) {
                e.reject(t)
            })
        } catch (t) {
            e.reject(t)
        }
    }

    ce.reject = function (n) {
        return new ce(function (t, e) {
            e(n)
        })
    }, ce.resolve = function (n) {
        return new ce(function (t, e) {
            t(n)
        })
    }, ce.all = function (s) {
        return new ce(function (n, t) {
            var i = [], r = 0;

            function e(e) {
                return function (t) {
                    i[e] = t, (r += 1) === s.length && n(i)
                }
            }

            0 === s.length && n(i);
            for (var o = 0; o < s.length; o += 1) ce.resolve(s[o]).then(e(o), t)
        })
    }, ce.race = function (i) {
        return new ce(function (t, e) {
            for (var n = 0; n < i.length; n += 1) ce.resolve(i[n]).then(t, e)
        })
    };
    var he = ce.prototype;

    function ue(s, a) {
        return new se(function (t, e) {
            var n = Y({
                data: null,
                method: "GET",
                headers: {},
                xhr: new XMLHttpRequest,
                beforeSend: et,
                responseType: ""
            }, a);
            n.beforeSend(n);
            var i = n.xhr;
            for (var r in n) if (r in i) try {
                i[r] = n[r]
            } catch (t) {
            }
            for (var o in i.open(n.method.toUpperCase(), s), n.headers) i.setRequestHeader(o, n.headers[o]);
            Ut(i, "load", function () {
                0 === i.status || 200 <= i.status && i.status < 300 || 304 === i.status ? t(i) : e(Y(Error(i.statusText), {
                    xhr: i,
                    status: i.status
                }))
            }), Ut(i, "error", function () {
                return e(Y(Error("Network Error"), {xhr: i}))
            }), Ut(i, "timeout", function () {
                return e(Y(Error("Network Timeout"), {xhr: i}))
            }), i.send(n.data)
        })
    }

    function de(i, r, o) {
        return new se(function (t, e) {
            var n = new Image;
            n.onerror = e, n.onload = function () {
                return t(n)
            }, o && (n.sizes = o), r && (n.srcset = r), n.src = i
        })
    }

    function fe(t) {
        if ("loading" === document.readyState) var e = Ut(document, "DOMContentLoaded", function () {
            e(), t()
        }); else t()
    }

    function pe(t, e) {
        return e ? R(t).indexOf(F(e)) : Zt(Pt(t)).indexOf(t)
    }

    function ge(t, e, n, i) {
        void 0 === n && (n = 0), void 0 === i && (i = !1);
        var r = (e = R(e)).length;
        return t = O(t) ? _(t) : "next" === t ? n + 1 : "previous" === t ? n - 1 : pe(e, t), i ? tt(t, 0, r - 1) : (t %= r) < 0 ? t + r : t
    }

    function ve(t) {
        return (t = Ie(t)).innerHTML = "", t
    }

    function me(t, e) {
        return t = Ie(t), H(e) ? t.innerHTML : we(t.hasChildNodes() ? ve(t) : t, e)
    }

    function we(e, t) {
        return e = Ie(e), be(t, function (t) {
            return e.appendChild(t)
        })
    }

    function ye(e, t) {
        return e = Ie(e), be(t, function (t) {
            return e.parentNode.insertBefore(t, e)
        })
    }

    function xe(e, t) {
        return e = Ie(e), be(t, function (t) {
            return e.nextSibling ? ye(e.nextSibling, t) : we(e.parentNode, t)
        })
    }

    function be(t, e) {
        return (t = D(t) ? Me(t) : t) ? "length" in t ? R(t).map(e) : e(t) : null
    }

    function Ce(t) {
        R(t).map(function (t) {
            return t.parentNode && t.parentNode.removeChild(t)
        })
    }

    function ke(t, e) {
        for (e = F(ye(t, e)); e.firstChild;) e = e.firstChild;
        return we(e, t), e
    }

    function Le(t, e) {
        return R(R(t).map(function (t) {
            return t.hasChildNodes ? ke(R(t.childNodes), e) : we(t, e)
        }))
    }

    function Te(t) {
        R(t).map(Pt).filter(function (t, e, n) {
            return n.indexOf(t) === e
        }).forEach(function (t) {
            ye(t, t.childNodes), Ce(t)
        })
    }

    he.resolve = function (t) {
        var e = this;
        if (e.state === ae) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var n = !1;
            try {
                var i = t && t.then;
                if (null !== t && L(t) && k(i)) return void i.call(t, function (t) {
                    n || e.resolve(t), n = !0
                }, function (t) {
                    n || e.reject(t), n = !0
                })
            } catch (t) {
                return void (n || e.reject(t))
            }
            e.state = 0, e.value = t, e.notify()
        }
    }, he.reject = function (t) {
        var e = this;
        if (e.state === ae) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            e.state = 1, e.value = t, e.notify()
        }
    }, he.notify = function () {
        var o = this;
        le(function () {
            if (o.state !== ae) for (; o.deferred.length;) {
                var t = o.deferred.shift(), e = t[0], n = t[1], i = t[2], r = t[3];
                try {
                    0 === o.state ? k(e) ? i(e.call(void 0, o.value)) : i(o.value) : 1 === o.state && (k(n) ? i(n.call(void 0, o.value)) : r(o.value))
                } catch (t) {
                    r(t)
                }
            }
        })
    }, he.then = function (n, i) {
        var r = this;
        return new ce(function (t, e) {
            r.deferred.push([n, i, t, e]), r.notify()
        })
    }, he.catch = function (t) {
        return this.then(void 0, t)
    };
    var Se = /^\s*<(\w+|!)[^>]*>/, $e = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function Me(t) {
        var e = $e.exec(t);
        if (e) return document.createElement(e[1]);
        var n = document.createElement("div");
        return Se.test(t) ? n.insertAdjacentHTML("beforeend", t.trim()) : n.textContent = t, 1 < n.childNodes.length ? R(n.childNodes) : n.firstChild
    }

    function Ee(t, e) {
        if (A(t)) for (e(t), t = t.firstElementChild; t;) {
            var n = t.nextElementSibling;
            Ee(t, e), t = n
        }
    }

    function Ie(t, e) {
        return D(t) ? Be(t) ? F(Me(t)) : kt(t, e) : F(t)
    }

    function Ae(t, e) {
        return D(t) ? Be(t) ? R(Me(t)) : Lt(t, e) : R(t)
    }

    function Be(t) {
        return "<" === t[0] || t.match(/^\s*</)
    }

    function Ne(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        ze(t, e, "add")
    }

    function De(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        ze(t, e, "remove")
    }

    function Pe(t, e) {
        ot(t, "class", function (t) {
            return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "")
        })
    }

    function Oe(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        e[0] && De(t, e[0]), e[1] && Ne(t, e[1])
    }

    function je(t, e) {
        return e && R(t).some(function (t) {
            return t.classList.contains(e.split(" ")[0])
        })
    }

    function He(t) {
        for (var i = [], e = arguments.length - 1; 0 < e--;) i[e] = arguments[e + 1];
        if (i.length) {
            var r = D(Q(i = _e(i))) ? [] : i.pop();
            i = i.filter(Boolean), R(t).forEach(function (t) {
                for (var e = t.classList, n = 0; n < i.length; n++) qe.Force ? e.toggle.apply(e, [i[n]].concat(r)) : e[(H(r) ? !e.contains(i[n]) : r) ? "add" : "remove"](i[n])
            })
        }
    }

    function ze(t, n, i) {
        (n = _e(n).filter(Boolean)).length && R(t).forEach(function (t) {
            var e = t.classList;
            qe.Multiple ? e[i].apply(e, n) : n.forEach(function (t) {
                return e[i](t)
            })
        })
    }

    function _e(t) {
        return t.reduce(function (t, e) {
            return t.concat.call(t, D(e) && y(e, " ") ? e.trim().split(" ") : e)
        }, [])
    }

    var qe = {
        get Multiple() {
            return this.get("_multiple")
        }, get Force() {
            return this.get("_force")
        }, get: function (t) {
            if (!u(this, t)) {
                var e = document.createElement("_").classList;
                e.add("a", "b"), e.toggle("c", !1), this._multiple = e.contains("b"), this._force = !e.contains("c")
            }
            return this[t]
        }
    }, Fe = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };

    function Re(t, e, r) {
        return R(t).map(function (n) {
            if (D(e)) {
                if (e = Ye(e), H(r)) return Ve(n, e);
                r || P(r) ? n.style[e] = O(r) && !Fe[e] ? r + "px" : r : n.style.removeProperty(e)
            } else {
                if (C(e)) {
                    var i = We(n);
                    return e.reduce(function (t, e) {
                        return t[e] = i[Ye(e)], t
                    }, {})
                }
                L(e) && G(e, function (t, e) {
                    return Re(n, e, t)
                })
            }
            return n
        })[0]
    }

    function We(t, e) {
        return (t = F(t)).ownerDocument.defaultView.getComputedStyle(t, e)
    }

    function Ve(t, e, n) {
        return We(t, n)[e]
    }

    var Ze = {};

    function Ue(t) {
        var e = document.documentElement;
        if (!ct) return We(e).getPropertyValue("--uk-" + t);
        if (!(t in Ze)) {
            var n = we(e, document.createElement("div"));
            Ne(n, "uk-" + t), Ze[t] = Ve(n, "content", ":before").replace(/^["'](.*)["']$/, "$1"), Ce(n)
        }
        return Ze[t]
    }

    var Xe = {};

    function Ye(t) {
        var e = Xe[t];
        return e || (Xe[t] = function (t) {
            t = d(t);
            var e = document.documentElement.style;
            if (t in e) return t;
            for (var n, i = Qe.length; i--;) if ((n = "-" + Qe[i] + "-" + t) in e) return n
        }(t) || t)
    }

    var Qe = ["webkit", "moz", "ms"];

    function Ge(t, s, a, l) {
        return void 0 === a && (a = 400), void 0 === l && (l = "linear"), se.all(R(t).map(function (o) {
            return new se(function (n, i) {
                for (var t in s) {
                    var e = Re(o, t);
                    "" === e && Re(o, t, e)
                }
                var r = setTimeout(function () {
                    return Qt(o, "transitionend")
                }, a);
                Yt(o, "transitionend transitioncanceled", function (t) {
                    var e = t.type;
                    clearTimeout(r), De(o, "uk-transition"), Re(o, {
                        transitionProperty: "",
                        transitionDuration: "",
                        transitionTimingFunction: ""
                    }), ("transitioncanceled" === e ? i : n)()
                }, {self: !0}), Ne(o, "uk-transition"), Re(o, Y({
                    transitionProperty: Object.keys(s).map(Ye).join(","),
                    transitionDuration: a + "ms",
                    transitionTimingFunction: l
                }, s))
            })
        }))
    }

    var Je = {
        start: Ge, stop: function (t) {
            return Qt(t, "transitionend"), se.resolve()
        }, cancel: function (t) {
            Qt(t, "transitioncanceled")
        }, inProgress: function (t) {
            return je(t, "uk-transition")
        }
    }, Ke = "uk-animation-", tn = "uk-cancel-animation";

    function en(t, e, n, a, l) {
        var c = arguments;
        return void 0 === n && (n = 200), se.all(R(t).map(function (s) {
            return new se(function (i, r) {
                if (je(s, tn)) requestAnimationFrame(function () {
                    return se.resolve().then(function () {
                        return en.apply(void 0, c).then(i, r)
                    })
                }); else {
                    var t = e + " " + Ke + (l ? "leave" : "enter");
                    w(e, Ke) && (a && (t += " uk-transform-origin-" + a), l && (t += " " + Ke + "reverse")), o(), Yt(s, "animationend animationcancel", function (t) {
                        var e = t.type, n = !1;
                        "animationcancel" === e ? (r(), o()) : (i(), se.resolve().then(function () {
                            n = !0, o()
                        })), requestAnimationFrame(function () {
                            n || (Ne(s, tn), requestAnimationFrame(function () {
                                return De(s, tn)
                            }))
                        })
                    }, {self: !0}), Re(s, "animationDuration", n + "ms"), Ne(s, t)
                }

                function o() {
                    Re(s, "animationDuration", ""), Pe(s, Ke + "\\S*")
                }
            })
        }))
    }

    var nn = new RegExp(Ke + "(enter|leave)"), rn = {
        in: function (t, e, n, i) {
            return en(t, e, n, i, !1)
        }, out: function (t, e, n, i) {
            return en(t, e, n, i, !0)
        }, inProgress: function (t) {
            return nn.test(ot(t, "class"))
        }, cancel: function (t) {
            Qt(t, "animationcancel")
        }
    }, on = {width: ["x", "left", "right"], height: ["y", "top", "bottom"]};

    function sn(t, e, h, u, d, n, i, r) {
        h = vn(h), u = vn(u);
        var f = {element: h, target: u};
        if (!t || !e) return f;
        var p = ln(t), g = ln(e), v = g;
        if (gn(v, h, p, -1), gn(v, u, g, 1), d = mn(d, p.width, p.height), n = mn(n, g.width, g.height), d.x += n.x, d.y += n.y, v.left += d.x, v.top += d.y, i) {
            var o = [ln(W(t))];
            r && o.unshift(ln(r)), G(on, function (t, s) {
                var a = t[0], l = t[1], c = t[2];
                !0 !== i && !y(i, a) || o.some(function (i) {
                    var t = h[a] === l ? -p[s] : h[a] === c ? p[s] : 0, e = u[a] === l ? g[s] : u[a] === c ? -g[s] : 0;
                    if (v[l] < i[l] || v[l] + p[s] > i[c]) {
                        var n = p[s] / 2, r = "center" === u[a] ? -g[s] / 2 : 0;
                        return "center" === h[a] && (o(n, r) || o(-n, -r)) || o(t, e)
                    }

                    function o(e, t) {
                        var n = v[l] + e + t - 2 * d[a];
                        if (n >= i[l] && n + p[s] <= i[c]) return v[l] = n, ["element", "target"].forEach(function (t) {
                            f[t][a] = e ? f[t][a] === on[s][1] ? on[s][2] : on[s][1] : f[t][a]
                        }), !0
                    }
                })
            })
        }
        return an(t, v), f
    }

    function an(n, i) {
        if (!i) return ln(n);
        var r = an(n), o = Re(n, "position");
        ["left", "top"].forEach(function (t) {
            if (t in i) {
                var e = Re(n, t);
                Re(n, t, i[t] - r[t] + q("absolute" === o && "auto" === e ? cn(n)[t] : e))
            }
        })
    }

    function ln(t) {
        if (!t) return {};
        var e, n, i = W(t), r = i.pageYOffset, o = i.pageXOffset;
        if ($(t)) {
            var s = t.innerHeight, a = t.innerWidth;
            return {top: r, left: o, height: s, width: a, bottom: r + s, right: o + a}
        }
        _t(t) || "none" !== Re(t, "display") || (e = ot(t, "style"), n = ot(t, "hidden"), ot(t, {
            style: (e || "") + ";display:block !important;",
            hidden: null
        }));
        var l = (t = F(t)).getBoundingClientRect();
        return H(e) || ot(t, {style: e, hidden: n}), {
            height: l.height,
            width: l.width,
            top: l.top + r,
            left: l.left + o,
            bottom: l.bottom + r,
            right: l.right + o
        }
    }

    function cn(t, e) {
        e = e || F(t).offsetParent || W(t).document.documentElement;
        var n = an(t), i = an(e);
        return {top: n.top - i.top - q(Re(e, "borderTopWidth")), left: n.left - i.left - q(Re(e, "borderLeftWidth"))}
    }

    function hn(t) {
        var e = [0, 0];
        t = F(t);
        do {
            if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === Re(t, "position")) {
                var n = W(t);
                return e[0] += n.pageYOffset, e[1] += n.pageXOffset, e
            }
        } while (t = t.offsetParent);
        return e
    }

    var un = fn("height"), dn = fn("width");

    function fn(i) {
        var r = p(i);
        return function (t, e) {
            if (H(e)) {
                if ($(t)) return t["inner" + r];
                if (M(t)) {
                    var n = t.documentElement;
                    return Math.max(n["offset" + r], n["scroll" + r])
                }
                return (e = "auto" === (e = Re(t = F(t), i)) ? t["offset" + r] : q(e) || 0) - pn(t, i)
            }
            Re(t, i, e || 0 === e ? +e + pn(t, i) + "px" : "")
        }
    }

    function pn(n, t, e) {
        return void 0 === e && (e = "border-box"), Re(n, "boxSizing") === e ? on[t].slice(1).map(p).reduce(function (t, e) {
            return t + q(Re(n, "padding" + e)) + q(Re(n, "border" + e + "Width"))
        }, 0) : 0
    }

    function gn(o, s, a, l) {
        G(on, function (t, e) {
            var n = t[0], i = t[1], r = t[2];
            s[n] === r ? o[i] += a[e] * l : "center" === s[n] && (o[i] += a[e] * l / 2)
        })
    }

    function vn(t) {
        var e = /left|center|right/, n = /top|center|bottom/;
        return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat("center") : n.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
            x: e.test(t[0]) ? t[0] : "center",
            y: n.test(t[1]) ? t[1] : "center"
        }
    }

    function mn(t, e, n) {
        var i = (t || "").split(" "), r = i[0], o = i[1];
        return {x: r ? q(r) * (c(r, "%") ? e / 100 : 1) : 0, y: o ? q(o) * (c(o, "%") ? n / 100 : 1) : 0}
    }

    function wn(t) {
        switch (t) {
            case"left":
                return "right";
            case"right":
                return "left";
            case"top":
                return "bottom";
            case"bottom":
                return "top";
            default:
                return t
        }
    }

    function yn(t, e, n) {
        return void 0 === e && (e = "width"), void 0 === n && (n = window), O(t) ? +t : c(t, "vh") ? xn(un(W(n)), t) : c(t, "vw") ? xn(dn(W(n)), t) : c(t, "%") ? xn(ln(n)[e], t) : q(t)
    }

    function xn(t, e) {
        return t * q(e) / 100
    }

    var bn = {
        reads: [], writes: [], read: function (t) {
            return this.reads.push(t), Ln(), t
        }, write: function (t) {
            return this.writes.push(t), Ln(), t
        }, clear: function (t) {
            return Sn(this.reads, t) || Sn(this.writes, t)
        }, flush: Cn
    };

    function Cn(t) {
        void 0 === t && (t = 1), Tn(bn.reads), Tn(bn.writes.splice(0, bn.writes.length)), bn.scheduled = !1, (bn.reads.length || bn.writes.length) && Ln(t + 1)
    }

    var kn = 5;

    function Ln(t) {
        if (!bn.scheduled) {
            if (bn.scheduled = !0, kn < t) throw new Error("Maximum recursion limit reached.");
            t ? se.resolve().then(function () {
                return Cn(t)
            }) : requestAnimationFrame(function () {
                return Cn()
            })
        }
    }

    function Tn(t) {
        for (var e; e = t.shift();) e()
    }

    function Sn(t, e) {
        var n = t.indexOf(e);
        return !!~n && !!t.splice(n, 1)
    }

    function $n() {
    }

    $n.prototype = {
        positions: [], init: function () {
            var e, t = this;
            this.positions = [], this.unbind = Ut(document, "mousemove", function (t) {
                return e = re(t)
            }), this.interval = setInterval(function () {
                e && (t.positions.push(e), 5 < t.positions.length && t.positions.shift())
            }, 50)
        }, cancel: function () {
            this.unbind && this.unbind(), this.interval && clearInterval(this.interval)
        }, movesTo: function (t) {
            if (this.positions.length < 2) return !1;
            var e = t.getBoundingClientRect(), n = e.left, i = e.right, r = e.top, o = e.bottom, s = this.positions[0],
                a = Q(this.positions), g = [s, a];
            return !it(a, e) && [[{x: n, y: r}, {x: i, y: o}], [{x: n, y: o}, {x: i, y: r}]].some(function (p) {
                var t = function () {
                    var t = g[0], e = t.x, n = t.y, i = g[1], r = i.x, o = i.y, s = p[0], a = s.x, l = s.y, c = p[1],
                        h = c.x, u = c.y, d = (u - l) * (r - e) - (h - a) * (o - n);
                    if (0 == d) return !1;
                    var f = ((h - a) * (n - l) - (u - l) * (e - a)) / d;
                    return !(f < 0) && {x: e + f * (r - e), y: n + f * (o - n)}
                }();
                return t && it(t, e)
            })
        }
    };
    var Mn = {};

    function En(t, e, n) {
        return Mn.computed(k(t) ? t.call(n, n) : t, k(e) ? e.call(n, n) : e)
    }

    function In(t, e) {
        return t = t && !C(t) ? [t] : t, e ? t ? t.concat(e) : C(e) ? e : [e] : t
    }

    function An(e, n, i) {
        var r = {};
        if (k(n) && (n = n.options), n.extends && (e = An(e, n.extends, i)), n.mixins) for (var t = 0, o = n.mixins.length; t < o; t++) e = An(e, n.mixins[t], i);
        for (var s in e) l(s);
        for (var a in n) u(e, a) || l(a);

        function l(t) {
            r[t] = (Mn[t] || function (t, e) {
                return H(e) ? t : e
            })(e[t], n[t], i)
        }

        return r
    }

    function Bn(t, e) {
        var n;
        void 0 === e && (e = []);
        try {
            return t ? w(t, "{") ? JSON.parse(t) : e.length && !y(t, ":") ? ((n = {})[e[0]] = t, n) : t.split(";").reduce(function (t, e) {
                var n = e.split(/:(.*)/), i = n[0], r = n[1];
                return i && !H(r) && (t[i.trim()] = r.trim()), t
            }, {}) : {}
        } catch (t) {
            return {}
        }
    }

    function Nn(t) {
        this.id = ++Dn, this.el = F(t)
    }

    Mn.events = Mn.created = Mn.beforeConnect = Mn.connected = Mn.beforeDisconnect = Mn.disconnected = Mn.destroy = In, Mn.args = function (t, e) {
        return !1 !== e && In(e || t)
    }, Mn.update = function (t, e) {
        return J(In(t, k(e) ? {read: e} : e), "order")
    }, Mn.props = function (t, e) {
        return C(e) && (e = e.reduce(function (t, e) {
            return t[e] = String, t
        }, {})), Mn.methods(t, e)
    }, Mn.computed = Mn.methods = function (t, e) {
        return e ? t ? Y({}, t, e) : e : t
    }, Mn.data = function (e, n, t) {
        return t ? En(e, n, t) : n ? e ? function (t) {
            return En(e, n, t)
        } : n : e
    };
    var Dn = 0;

    function Pn(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify(Y({event: "command"}, e)), "*")
        } catch (t) {
        }
    }

    function On(t, e, n) {
        if (void 0 === e && (e = 0), void 0 === n && (n = 0), !_t(t)) return !1;
        for (var i = Fn(t).concat(t), r = 0; r < i.length - 1; r++) {
            var o = an(qn(i[r])), s = {top: o.top - e, left: o.left - n, bottom: o.bottom + e, right: o.right + n},
                a = an(i[r + 1]);
            if (!nt(a, s) && !it({x: a.left, y: a.top}, s)) return !1
        }
        return !0
    }

    function jn(t, e) {
        (t = ($(t) || M(t) ? Rn : F)(t)).scrollTop = e
    }

    function Hn(t, e) {
        void 0 === e && (e = {});
        var h = e.offset;
        if (void 0 === h && (h = 0), _t(t)) {
            for (var u = Fn(t).concat(t), n = se.resolve(), i = function (c) {
                n = n.then(function () {
                    return new se(function (n) {
                        var t, i = u[c], e = u[c + 1], r = i.scrollTop, o = cn(e, qn(i)).top - h,
                            s = (t = Math.abs(o), 40 * Math.pow(t, .375)), a = Date.now(), l = function () {
                                var t, e = (t = tt((Date.now() - a) / s), .5 * (1 - Math.cos(Math.PI * t)));
                                jn(i, r + o * e), 1 != e ? requestAnimationFrame(l) : n()
                            };
                        l()
                    })
                })
            }, r = 0; r < u.length - 1; r++) i(r);
            return n
        }
    }

    function zn(t, e) {
        if (void 0 === e && (e = 0), !_t(t)) return 0;
        var n = Q(_n(t)), i = n.scrollHeight, r = n.scrollTop, o = an(qn(n)).height, s = hn(t)[0] - r - hn(n)[0],
            a = Math.min(o, s + r);
        return tt(-1 * (s - a) / Math.min(an(t).height + e + a, i - (s + r), i - o))
    }

    function _n(t, e) {
        void 0 === e && (e = /auto|scroll/);
        var n = Rn(t), i = Vt(t).filter(function (t) {
            return t === n || e.test(Re(t, "overflow")) && t.scrollHeight > Math.round(an(t).height)
        }).reverse();
        return i.length ? i : [n]
    }

    function qn(t) {
        return t === Rn(t) ? window : t
    }

    function Fn(t) {
        return _n(t, /auto|scroll|hidden/)
    }

    function Rn(t) {
        var e = W(t).document;
        return e.scrollingElement || e.documentElement
    }

    Nn.prototype.isVideo = function () {
        return this.isYoutube() || this.isVimeo() || this.isHTML5()
    }, Nn.prototype.isHTML5 = function () {
        return "VIDEO" === this.el.tagName
    }, Nn.prototype.isIFrame = function () {
        return "IFRAME" === this.el.tagName
    }, Nn.prototype.isYoutube = function () {
        return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }, Nn.prototype.isVimeo = function () {
        return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/)
    }, Nn.prototype.enableApi = function () {
        var e = this;
        if (this.ready) return this.ready;
        var n, r = this.isYoutube(), o = this.isVimeo();
        return r || o ? this.ready = new se(function (t) {
            var i;
            Yt(e.el, "load", function () {
                if (r) {
                    var t = function () {
                        return Pn(e.el, {event: "listening", id: e.id})
                    };
                    n = setInterval(t, 100), t()
                }
            }), i = function (t) {
                return r && t.id === e.id && "onReady" === t.event || o && Number(t.player_id) === e.id
            }, new se(function (n) {
                Yt(window, "message", function (t, e) {
                    return n(e)
                }, !1, function (t) {
                    var e = t.data;
                    if (e && D(e)) {
                        try {
                            e = JSON.parse(e)
                        } catch (t) {
                            return
                        }
                        return e && i(e)
                    }
                })
            }).then(function () {
                t(), n && clearInterval(n)
            }), ot(e.el, "src", e.el.src + (y(e.el.src, "?") ? "&" : "?") + (r ? "enablejsapi=1" : "api=1&player_id=" + e.id))
        }) : se.resolve()
    }, Nn.prototype.play = function () {
        var t = this;
        if (this.isVideo()) if (this.isIFrame()) this.enableApi().then(function () {
            return Pn(t.el, {func: "playVideo", method: "play"})
        }); else if (this.isHTML5()) try {
            var e = this.el.play();
            e && e.catch(et)
        } catch (t) {
        }
    }, Nn.prototype.pause = function () {
        var t = this;
        this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () {
            return Pn(t.el, {func: "pauseVideo", method: "pause"})
        }) : this.isHTML5() && this.el.pause())
    }, Nn.prototype.mute = function () {
        var t = this;
        this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () {
            return Pn(t.el, {func: "mute", method: "setVolume", value: 0})
        }) : this.isHTML5() && (this.el.muted = !0, ot(this.el, "muted", "")))
    };
    var Wn, Vn, Zn, Un, Xn, Yn, Qn, Gn, Jn,
        Kn = "IntersectionObserver" in window ? window.IntersectionObserver : (ti.prototype.takeRecords = function () {
            var n = this;
            return this.targets.filter(function (t) {
                var e = On(t.target, n.offsetTop, n.offsetLeft);
                if (null === t.isIntersecting || e ^ t.isIntersecting) return t.isIntersecting = e, !0
            })
        }, ti.prototype.observe = function (t) {
            this.targets.push({target: t, isIntersecting: null}), this.apply()
        }, ti.prototype.disconnect = function () {
            this.targets = [], this.off()
        }, ti);

    function ti(e, t) {
        var n = this;
        void 0 === t && (t = {});
        var i = t.rootMargin;
        void 0 === i && (i = "0 0"), this.targets = [];
        var r, o = (i || "0 0").split(" ").map(q), s = o[0], a = o[1];
        this.offsetTop = s, this.offsetLeft = a, this.apply = function () {
            r = r || requestAnimationFrame(function () {
                return setTimeout(function () {
                    var t = n.takeRecords();
                    t.length && e(t, n), r = !1
                })
            })
        }, this.off = Ut(window, "scroll resize load", this.apply, {passive: !0, capture: !0})
    }

    function ei(t) {
        return !(!w(t, "uk-") && !w(t, "data-uk-")) && f(t.replace("data-uk-", "").replace("uk-", ""))
    }

    function ni(t) {
        this._init(t)
    }

    function ii(t, e) {
        if (t) for (var n in t) t[n]._connected && t[n]._callUpdate(e)
    }

    function ri(t, e) {
        var n = {}, i = t.args;
        void 0 === i && (i = []);
        var r = t.props;
        void 0 === r && (r = {});
        var o = t.el;
        if (!r) return n;
        for (var s in r) {
            var a = d(s), l = lt(o, a);
            if (!H(l)) {
                if (l = r[s] === Boolean && "" === l || li(r[s], l), "target" === a && (!l || w(l, "_"))) continue;
                n[s] = l
            }
        }
        var c = Bn(lt(o, e), i);
        for (var h in c) {
            var u = f(h);
            void 0 !== r[u] && (n[u] = li(r[u], c[h]))
        }
        return n
    }

    function oi(i, r, o) {
        Object.defineProperty(i, r, {
            enumerable: !0, get: function () {
                var t = i._computeds, e = i.$props, n = i.$el;
                return u(t, r) || (t[r] = (o.get || o).call(i, e, n)), t[r]
            }, set: function (t) {
                var e = i._computeds;
                e[r] = o.set ? o.set.call(i, t) : t, H(e[r]) && delete e[r]
            }
        })
    }

    function si(e, n, i) {
        S(n) || (n = {name: i, handler: n});
        var t = n.name, r = n.el, o = n.handler, s = n.capture, a = n.passive, l = n.delegate, c = n.filter, h = n.self;
        r = k(r) ? r.call(e) : r || e.$el, C(r) ? r.forEach(function (t) {
            return si(e, Y({}, n, {el: t}), i)
        }) : !r || c && !c.call(e) || e._events.push(Ut(r, t, l ? D(l) ? l : l.call(e) : null, D(o) ? e[o] : o.bind(e), {
            passive: a,
            capture: s,
            self: h
        }))
    }

    function ai(t, e) {
        return t.every(function (t) {
            return !t || !u(t, e)
        })
    }

    function li(t, e) {
        return t === Boolean ? z(e) : t === Number ? _(e) : "list" === t ? V(e) : t ? t(e) : e
    }

    ni.util = Object.freeze({
        __proto__: null,
        ajax: ue,
        getImage: de,
        transition: Ge,
        Transition: Je,
        animate: en,
        Animation: rn,
        attr: ot,
        hasAttr: st,
        removeAttr: at,
        data: lt,
        addClass: Ne,
        removeClass: De,
        removeClasses: Pe,
        replaceClass: Oe,
        hasClass: je,
        toggleClass: He,
        positionAt: sn,
        offset: an,
        position: cn,
        offsetPosition: hn,
        height: un,
        width: dn,
        boxModelAdjust: pn,
        flipPosition: wn,
        toPx: yn,
        ready: fe,
        index: pe,
        getIndex: ge,
        empty: ve,
        html: me,
        prepend: function (e, t) {
            return (e = Ie(e)).hasChildNodes() ? be(t, function (t) {
                return e.insertBefore(t, e.firstChild)
            }) : we(e, t)
        },
        append: we,
        before: ye,
        after: xe,
        remove: Ce,
        wrapAll: ke,
        wrapInner: Le,
        unwrap: Te,
        fragment: Me,
        apply: Ee,
        $: Ie,
        $$: Ae,
        isIE: ct,
        isRtl: ht,
        hasTouch: ft,
        pointerDown: pt,
        pointerMove: gt,
        pointerUp: vt,
        pointerEnter: mt,
        pointerLeave: wt,
        pointerCancel: yt,
        on: Ut,
        off: Xt,
        once: Yt,
        trigger: Qt,
        createEvent: Gt,
        toEventTargets: ne,
        isTouch: ie,
        getEventPos: re,
        fastdom: bn,
        isVoidElement: zt,
        isVisible: _t,
        selInput: qt,
        isInput: Ft,
        filter: Rt,
        within: Wt,
        parents: Vt,
        children: Zt,
        hasOwn: u,
        hyphenate: d,
        camelize: f,
        ucfirst: p,
        startsWith: w,
        endsWith: c,
        includes: y,
        findIndex: b,
        isArray: C,
        isFunction: k,
        isObject: L,
        isPlainObject: S,
        isWindow: $,
        isDocument: M,
        isJQuery: E,
        isNode: I,
        isElement: A,
        isNodeCollection: B,
        isBoolean: N,
        isString: D,
        isNumber: P,
        isNumeric: O,
        isEmpty: j,
        isUndefined: H,
        toBoolean: z,
        toNumber: _,
        toFloat: q,
        toNode: F,
        toNodes: R,
        toWindow: W,
        toList: V,
        toMs: Z,
        isEqual: U,
        swap: X,
        assign: Y,
        last: Q,
        each: G,
        sortBy: J,
        uniqueBy: K,
        clamp: tt,
        noop: et,
        intersectRect: nt,
        pointInRect: it,
        Dimensions: rt,
        MouseTracker: $n,
        mergeOptions: An,
        parseOptions: Bn,
        Player: Nn,
        Promise: se,
        Deferred: oe,
        IntersectionObserver: Kn,
        query: xt,
        queryAll: bt,
        find: kt,
        findAll: Lt,
        matches: Bt,
        closest: Dt,
        parent: Pt,
        escape: jt,
        css: Re,
        getStyles: We,
        getStyle: Ve,
        getCssVar: Ue,
        propName: Ye,
        isInView: On,
        scrollTop: jn,
        scrollIntoView: Hn,
        scrolledOver: zn,
        scrollParents: _n,
        getViewport: qn
    }), ni.data = "__uikit__", ni.prefix = "uk-", ni.options = {}, ni.version = "3.3.7", Zn = (Wn = ni).data, Wn.use = function (t) {
        if (!t.installed) return t.call(null, this), t.installed = !0, this
    }, Wn.mixin = function (t, e) {
        (e = (D(e) ? Wn.component(e) : e) || this).options = An(e.options, t)
    }, Wn.extend = function (t) {
        function e(t) {
            this._init(t)
        }

        return t = t || {}, ((e.prototype = Object.create(this.prototype)).constructor = e).options = An(this.options, t), e.super = this, e.extend = this.extend, e
    }, Wn.update = function (t, e) {
        Vt(t = t ? F(t) : document.body).reverse().forEach(function (t) {
            return ii(t[Zn], e)
        }), Ee(t, function (t) {
            return ii(t[Zn], e)
        })
    }, Object.defineProperty(Wn, "container", {
        get: function () {
            return Vn || document.body
        }, set: function (t) {
            Vn = Ie(t)
        }
    }), (Un = ni).prototype._callHook = function (t) {
        var e = this, n = this.$options[t];
        n && n.forEach(function (t) {
            return t.call(e)
        })
    }, Un.prototype._callConnected = function () {
        this._connected || (this._data = {}, this._computeds = {}, this._frames = {
            reads: {},
            writes: {}
        }, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._callUpdate())
    }, Un.prototype._callDisconnected = function () {
        this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1)
    }, Un.prototype._callUpdate = function (t) {
        var o = this;
        void 0 === t && (t = "update");
        var s = t.type || t;
        y(["update", "resize"], s) && this._callWatches();
        var e = this.$options.update, n = this._frames, a = n.reads, l = n.writes;
        e && e.forEach(function (t, e) {
            var n = t.read, i = t.write, r = t.events;
            "update" !== s && !y(r, s) || (n && !y(bn.reads, a[e]) && (a[e] = bn.read(function () {
                var t = o._connected && n.call(o, o._data, s);
                !1 === t && i ? bn.clear(l[e]) : S(t) && Y(o._data, t)
            })), i && !y(bn.writes, l[e]) && (l[e] = bn.write(function () {
                return o._connected && i.call(o, o._data, s)
            })))
        })
    }, Un.prototype._callWatches = function () {
        var l = this, c = this._frames;
        if (!c.watch) {
            var h = !u(c, "watch");
            c.watch = bn.read(function () {
                if (l._connected) {
                    var t = l.$options.computed, e = l._computeds;
                    for (var n in t) {
                        var i = u(e, n), r = e[n];
                        delete e[n];
                        var o = t[n], s = o.watch, a = o.immediate;
                        s && (h && a || i && !U(r, l[n])) && s.call(l, l[n], r)
                    }
                    c.watch = null
                }
            })
        }
    }, Yn = 0, (Xn = ni).prototype._init = function (o) {
        (o = o || {}).data = function (t) {
            var e = o.data, i = (o.el, t.args), n = t.props;
            if (void 0 === n && (n = {}), e = C(e) ? j(i) ? void 0 : e.slice(0, i.length).reduce(function (t, e, n) {
                return S(e) ? Y(t, e) : t[i[n]] = e, t
            }, {}) : e) for (var r in e) H(e[r]) ? delete e[r] : e[r] = n[r] ? li(n[r], e[r]) : e[r];
            return e
        }(this.constructor.options), this.$options = An(this.constructor.options, o, this), this.$el = null, this.$props = {}, this._uid = Yn++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), o.el && this.$mount(o.el)
    }, Xn.prototype._initData = function () {
        var t = this.$options.data;
        for (var e in void 0 === t && (t = {}), t) this.$props[e] = this[e] = t[e]
    }, Xn.prototype._initMethods = function () {
        var t = this.$options.methods;
        if (t) for (var e in t) this[e] = t[e].bind(this)
    }, Xn.prototype._initComputeds = function () {
        var t = this.$options.computed;
        if (this._computeds = {}, t) for (var e in t) oi(this, e, t[e])
    }, Xn.prototype._initProps = function (t) {
        var e;
        for (e in t = t || ri(this.$options, this.$name)) H(t[e]) || (this.$props[e] = t[e]);
        var n = [this.$options.computed, this.$options.methods];
        for (e in this.$props) e in t && ai(n, e) && (this[e] = this.$props[e])
    }, Xn.prototype._initEvents = function () {
        var n = this;
        this._events = [];
        var t = this.$options.events;
        t && t.forEach(function (t) {
            if (u(t, "handler")) si(n, t); else for (var e in t) si(n, t[e], e)
        })
    }, Xn.prototype._unbindEvents = function () {
        this._events.forEach(function (t) {
            return t()
        }), delete this._events
    }, Xn.prototype._initObserver = function () {
        var n = this, t = this.$options, i = t.attrs, e = t.props, r = t.el;
        if (!this._observer && e && !1 !== i) {
            i = C(i) ? i : Object.keys(e), this._observer = new MutationObserver(function () {
                var e = ri(n.$options, n.$name);
                i.some(function (t) {
                    return !H(e[t]) && e[t] !== n.$props[t]
                }) && n.$reset()
            });
            var o = i.map(function (t) {
                return d(t)
            }).concat(this.$name);
            this._observer.observe(r, {
                attributes: !0, attributeFilter: o.concat(o.map(function (t) {
                    return "data-" + t
                }))
            })
        }
    }, Gn = (Qn = ni).data, Jn = {}, Qn.component = function (s, t) {
        var e = d(s);
        if (s = f(e), !t) return S(Jn[s]) && (Jn[s] = Qn.extend(Jn[s])), Jn[s];
        Qn[s] = function (t, n) {
            for (var e = arguments.length, i = Array(e); e--;) i[e] = arguments[e];
            var r = Qn.component(s);
            return r.options.functional ? new r({data: S(t) ? t : [].concat(i)}) : t ? Ae(t).map(o)[0] : o(t);

            function o(t) {
                var e = Qn.getComponent(t, s);
                if (e) {
                    if (!n) return e;
                    e.$destroy()
                }
                return new r({el: t, data: n})
            }
        };
        var n = S(t) ? Y({}, t) : t.options;
        return n.name = s, n.install && n.install(Qn, n, s), Qn._initialized && !n.functional && bn.read(function () {
            return Qn[s]("[uk-" + e + "],[data-uk-" + e + "]")
        }), Jn[s] = S(t) ? n : t
    }, Qn.getComponents = function (t) {
        return t && t[Gn] || {}
    }, Qn.getComponent = function (t, e) {
        return Qn.getComponents(t)[e]
    }, Qn.connect = function (t) {
        if (t[Gn]) for (var e in t[Gn]) t[Gn][e]._callConnected();
        for (var n = 0; n < t.attributes.length; n++) {
            var i = ei(t.attributes[n].name);
            i && i in Jn && Qn[i](t)
        }
    }, Qn.disconnect = function (t) {
        for (var e in t[Gn]) t[Gn][e]._callDisconnected()
    }, function (i) {
        var r = i.data;
        i.prototype.$create = function (t, e, n) {
            return i[t](e, n)
        }, i.prototype.$mount = function (t) {
            var e = this.$options.name;
            t[r] || (t[r] = {}), t[r][e] || ((t[r][e] = this).$el = this.$options.el = this.$options.el || t, Wt(t, document) && this._callConnected())
        }, i.prototype.$reset = function () {
            this._callDisconnected(), this._callConnected()
        }, i.prototype.$destroy = function (t) {
            void 0 === t && (t = !1);
            var e = this.$options, n = e.el, i = e.name;
            n && this._callDisconnected(), this._callHook("destroy"), n && n[r] && (delete n[r][i], j(n[r]) || delete n[r], t && Ce(this.$el))
        }, i.prototype.$emit = function (t) {
            this._callUpdate(t)
        }, i.prototype.$update = function (t, e) {
            void 0 === t && (t = this.$el), i.update(t, e)
        }, i.prototype.$getComponent = i.getComponent;
        var e = {};
        Object.defineProperties(i.prototype, {
            $container: Object.getOwnPropertyDescriptor(i, "container"),
            $name: {
                get: function () {
                    var t = this.$options.name;
                    return e[t] || (e[t] = i.prefix + d(t)), e[t]
                }
            }
        })
    }(ni);
    var ci = {
        connected: function () {
            je(this.$el, this.$name) || Ne(this.$el, this.$name)
        }
    }, hi = {
        props: {cls: Boolean, animation: "list", duration: Number, origin: String, transition: String, queued: Boolean},
        data: {
            cls: !1,
            animation: [!1],
            duration: 200,
            origin: !1,
            transition: "linear",
            queued: !1,
            initProps: {overflow: "", height: "", paddingTop: "", paddingBottom: "", marginTop: "", marginBottom: ""},
            hideProps: {overflow: "hidden", height: 0, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0}
        },
        computed: {
            hasAnimation: function (t) {
                return !!t.animation[0]
            }, hasTransition: function (t) {
                var e = t.animation;
                return this.hasAnimation && !0 === e[0]
            }
        },
        methods: {
            toggleElement: function (c, h, u) {
                var d = this;
                return new se(function (t) {
                    function e(t) {
                        return se.all(t.map(function (t) {
                            return d._toggleElement(t, h, u)
                        }))
                    }

                    var n;
                    if (c = R(c), !d.queued || !H(h) || !d.hasAnimation || c.length < 2) n = e(c); else {
                        var i = c.filter(function (t) {
                                return d.isToggled(t)
                            }), r = c.filter(function (t) {
                                return !y(i, t)
                            }), o = document.body, s = o.scrollTop, a = i[0],
                            l = rn.inProgress(a) && je(a, "uk-animation-leave") || Je.inProgress(a) && "0px" === a.style.height;
                        n = e(i), l || (n = n.then(function () {
                            var t = e(r);
                            return o.scrollTop = s, t
                        }))
                    }
                    n.then(t, et)
                })
            }, isToggled: function (t) {
                var e = R(t || this.$el);
                return this.cls ? je(e, this.cls.split(" ")[0]) : !st(e, "hidden")
            }, updateAria: function (t) {
                !1 === this.cls && ot(t, "aria-hidden", !this.isToggled(t))
            }, _toggleElement: function (t, e, n) {
                var i = this;
                if (e = N(e) ? e : rn.inProgress(t) ? je(t, "uk-animation-leave") : Je.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !Qt(t, "before" + (e ? "show" : "hide"), [this])) return se.reject();
                var o,
                    r = (k(n) ? n : !1 !== n && this.hasAnimation ? this.hasTransition ? ui(this) : (o = this, function (t, e) {
                        rn.cancel(t);
                        var n = o.animation, i = o.duration, r = o._toggle;
                        return e ? (r(t, !0), rn.in(t, n[0], i, o.origin)) : rn.out(t, n[1] || n[0], i, o.origin).then(function () {
                            return r(t, !1)
                        })
                    }) : this._toggle)(t, e);

                function s() {
                    Qt(t, e ? "shown" : "hidden", [i]), i.$update(t)
                }

                return Qt(t, e ? "show" : "hide", [this]), r ? r.then(s) : se.resolve(s())
            }, _toggle: function (t, e) {
                var n;
                t && (e = Boolean(e), this.cls ? (n = y(this.cls, " ") || e !== je(t, this.cls)) && He(t, this.cls, y(this.cls, " ") ? void 0 : e) : (n = e === st(t, "hidden")) && ot(t, "hidden", e ? null : ""), Ae("[autofocus]", t).some(function (t) {
                    return _t(t) ? t.focus() || !0 : t.blur()
                }), this.updateAria(t), n && (Qt(t, "toggled", [this]), this.$update(t)))
            }
        }
    };

    function ui(t) {
        var s = t.isToggled, a = t.duration, l = t.initProps, c = t.hideProps, h = t.transition, u = t._toggle;
        return function (t, e) {
            var n = Je.inProgress(t),
                i = t.hasChildNodes ? q(Re(t.firstElementChild, "marginTop")) + q(Re(t.lastElementChild, "marginBottom")) : 0,
                r = _t(t) ? un(t) + (n ? 0 : i) : 0;
            Je.cancel(t), s(t) || u(t, !0), un(t, ""), bn.flush();
            var o = un(t) + (n ? 0 : i);
            return un(t, r), (e ? Je.start(t, Y({}, l, {
                overflow: "hidden",
                height: o
            }), Math.round(a * (1 - r / o)), h) : Je.start(t, c, Math.round(a * (r / o)), h).then(function () {
                return u(t, !1)
            })).then(function () {
                return Re(t, l)
            })
        }
    }

    var di = {
        mixins: [ci, hi],
        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: [!0],
            collapsible: !0,
            multiple: !1,
            clsOpen: "uk-open",
            toggle: "> .uk-accordion-title",
            content: "> .uk-accordion-content",
            transition: "ease",
            offset: 0
        },
        computed: {
            items: {
                get: function (t, e) {
                    return Ae(t.targets, e)
                }, watch: function (t, e) {
                    var n = this;
                    if (t.forEach(function (t) {
                        return fi(Ie(n.content, t), !je(t, n.clsOpen))
                    }), !e && !je(t, this.clsOpen)) {
                        var i = !1 !== this.active && t[Number(this.active)] || !this.collapsible && t[0];
                        i && this.toggle(i, !1)
                    }
                }, immediate: !0
            }
        },
        events: [{
            name: "click", delegate: function () {
                return this.targets + " " + this.$props.toggle
            }, handler: function (t) {
                t.preventDefault(), this.toggle(pe(Ae(this.targets + " " + this.$props.toggle, this.$el), t.current))
            }
        }],
        methods: {
            toggle: function (t, r) {
                var o = this, e = [this.items[ge(t, this.items)]], n = Rt(this.items, "." + this.clsOpen);
                this.multiple || y(n, e[0]) || (e = e.concat(n)), (this.collapsible || Rt(e, ":not(." + this.clsOpen + ")").length) && e.forEach(function (t) {
                    return o.toggleElement(t, !je(t, o.clsOpen), function (e, n) {
                        He(e, o.clsOpen, n);
                        var i = Ie((e._wrapper ? "> * " : "") + o.content, e);
                        if (!1 !== r && o.hasTransition) return e._wrapper || (e._wrapper = ke(i, "<div" + (n ? " hidden" : "") + ">")), fi(i, !1), ui(o)(e._wrapper, n).then(function () {
                            if (fi(i, !n), delete e._wrapper, Te(i), n) {
                                var t = Ie(o.$props.toggle, e);
                                On(t) || Hn(t, {offset: o.offset})
                            }
                        });
                        fi(i, !n)
                    })
                })
            }
        }
    };

    function fi(t, e) {
        ot(t, "hidden", e ? "" : null)
    }

    var pi, gi = {
        mixins: [ci, hi],
        args: "animation",
        props: {close: String},
        data: {
            animation: [!0],
            selClose: ".uk-alert-close",
            duration: 150,
            hideProps: Y({opacity: 0}, hi.data.hideProps)
        },
        events: [{
            name: "click", delegate: function () {
                return this.selClose
            }, handler: function (t) {
                t.preventDefault(), this.close()
            }
        }],
        methods: {
            close: function () {
                var t = this;
                this.toggleElement(this.$el).then(function () {
                    return t.$destroy(!0)
                })
            }
        }
    }, vi = {
        args: "autoplay",
        props: {automute: Boolean, autoplay: Boolean},
        data: {automute: !1, autoplay: !0},
        computed: {
            inView: function (t) {
                return "inview" === t.autoplay
            }
        },
        connected: function () {
            this.inView && !st(this.$el, "preload") && (this.$el.preload = "none"), this.player = new Nn(this.$el), this.automute && this.player.mute()
        },
        update: {
            read: function () {
                return !!this.player && {
                    visible: _t(this.$el) && "hidden" !== Re(this.$el, "visibility"),
                    inView: this.inView && On(this.$el)
                }
            }, write: function (t) {
                var e = t.visible, n = t.inView;
                !e || this.inView && !n ? this.player.pause() : (!0 === this.autoplay || this.inView && n) && this.player.play()
            }, events: ["resize", "scroll"]
        }
    }, mi = {
        mixins: [ci, vi],
        props: {width: Number, height: Number},
        data: {automute: !0},
        update: {
            read: function () {
                var t = this.$el, e = function (t) {
                    for (; t = Pt(t);) if ("static" !== Re(t, "position")) return t
                }(t) || t.parentNode, n = e.offsetHeight, i = e.offsetWidth, r = rt.cover({
                    width: this.width || t.naturalWidth || t.videoWidth || t.clientWidth,
                    height: this.height || t.naturalHeight || t.videoHeight || t.clientHeight
                }, {width: i + (i % 2 ? 1 : 0), height: n + (n % 2 ? 1 : 0)});
                return !(!r.width || !r.height) && r
            }, write: function (t) {
                var e = t.height, n = t.width;
                Re(this.$el, {height: e, width: n})
            }, events: ["resize"]
        }
    }, wi = {
        props: {pos: String, offset: null, flip: Boolean, clsPos: String},
        data: {pos: "bottom-" + (ht ? "right" : "left"), flip: !0, offset: !1, clsPos: ""},
        computed: {
            pos: function (t) {
                var e = t.pos;
                return (e + (y(e, "-") ? "" : "-center")).split("-")
            }, dir: function () {
                return this.pos[0]
            }, align: function () {
                return this.pos[1]
            }
        },
        methods: {
            positionAt: function (t, e, n) {
                var i;
                Pe(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"), Re(t, {top: "", left: ""});
                var r = this.offset, o = this.getAxis();
                O(r) || (r = (i = Ie(r)) ? an(i)["x" === o ? "left" : "top"] - an(e)["x" === o ? "right" : "bottom"] : 0);
                var s = sn(t, e, "x" === o ? wn(this.dir) + " " + this.align : this.align + " " + wn(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, n).target,
                    a = s.x, l = s.y;
                this.dir = "x" === o ? a : l, this.align = "x" === o ? l : a, He(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset)
            }, getAxis: function () {
                return "top" === this.dir || "bottom" === this.dir ? "y" : "x"
            }
        }
    }, yi = {
        mixins: [wi, hi],
        args: "pos",
        props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
        },
        data: {
            mode: ["click", "hover"],
            toggle: "- *",
            boundary: window,
            boundaryAlign: !1,
            delayShow: 0,
            delayHide: 800,
            clsDrop: !1,
            animation: ["uk-animation-fade"],
            cls: "uk-open"
        },
        computed: {
            boundary: function (t, e) {
                return xt(t.boundary, e)
            }, clsDrop: function (t) {
                return t.clsDrop || "uk-" + this.$options.name
            }, clsPos: function () {
                return this.clsDrop
            }
        },
        created: function () {
            this.tracker = new $n
        },
        connected: function () {
            Ne(this.$el, this.clsDrop);
            var t = this.$props.toggle;
            this.toggle = t && this.$create("toggle", xt(t, this.$el), {
                target: this.$el,
                mode: this.mode
            }), this.toggle || Qt(this.$el, "updatearia")
        },
        disconnected: function () {
            this.isActive() && (pi = null)
        },
        events: [{
            name: "click", delegate: function () {
                return "." + this.clsDrop + "-close"
            }, handler: function (t) {
                t.preventDefault(), this.hide(!1)
            }
        }, {
            name: "click", delegate: function () {
                return 'a[href^="#"]'
            }, handler: function (t) {
                var e = t.defaultPrevented, n = t.current.hash;
                e || !n || Wt(n, this.$el) || this.hide(!1)
            }
        }, {
            name: "beforescroll", handler: function () {
                this.hide(!1)
            }
        }, {
            name: "toggle", self: !0, handler: function (t, e) {
                t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1)
            }
        }, {
            name: "toggleshow", self: !0, handler: function (t, e) {
                t.preventDefault(), this.show(e)
            }
        }, {
            name: "togglehide", self: !0, handler: function (t) {
                t.preventDefault(), this.hide()
            }
        }, {
            name: mt, filter: function () {
                return y(this.mode, "hover")
            }, handler: function (t) {
                ie(t) || this.clearTimers()
            }
        }, {
            name: wt, filter: function () {
                return y(this.mode, "hover")
            }, handler: function (t) {
                ie(t) || this.hide()
            }
        }, {
            name: "toggled", self: !0, handler: function () {
                this.isToggled() && (this.clearTimers(), rn.cancel(this.$el), this.position())
            }
        }, {
            name: "show", self: !0, handler: function () {
                var o = this;
                (pi = this).tracker.init(), Qt(this.$el, "updatearia"), Yt(this.$el, "hide", Ut(document, pt, function (t) {
                    var r = t.target;
                    return !Wt(r, o.$el) && Yt(document, vt + " " + yt + " scroll", function (t) {
                        var e = t.defaultPrevented, n = t.type, i = t.target;
                        e || n !== vt || r !== i || o.toggle && Wt(r, o.toggle.$el) || o.hide(!1)
                    }, !0)
                }), {self: !0})
            }
        }, {
            name: "beforehide", self: !0, handler: function () {
                this.clearTimers()
            }
        }, {
            name: "hide", handler: function (t) {
                var e = t.target;
                this.$el === e ? (pi = this.isActive() ? null : pi, Qt(this.$el, "updatearia"), this.tracker.cancel()) : pi = null === pi && Wt(e, this.$el) && this.isToggled() ? this : pi
            }
        }, {
            name: "updatearia", self: !0, handler: function (t, e) {
                t.preventDefault(), this.updateAria(this.$el), (e || this.toggle) && (ot((e || this.toggle).$el, "aria-expanded", this.isToggled()), He(this.toggle.$el, this.cls, this.isToggled()))
            }
        }],
        update: {
            write: function () {
                this.isToggled() && !rn.inProgress(this.$el) && this.position()
            }, events: ["resize"]
        },
        methods: {
            show: function (t, e) {
                var n = this;
                if (void 0 === t && (t = this.toggle), void 0 === e && (e = !0), this.isToggled() && t && this.toggle && t.$el !== this.toggle.$el && this.hide(!1), this.toggle = t, this.clearTimers(), !this.isActive()) {
                    if (pi) {
                        if (e && pi.isDelaying) return void (this.showTimer = setTimeout(this.show, 10));
                        for (; pi && !Wt(this.$el, pi.$el);) pi.hide(!1)
                    }
                    this.showTimer = setTimeout(function () {
                        return !n.isToggled() && n.toggleElement(n.$el, !0)
                    }, e && this.delayShow || 0)
                }
            }, hide: function (t) {
                var e, n, i = this;

                function r() {
                    return i.toggleElement(i.$el, !1, !1)
                }

                void 0 === t && (t = !0), this.clearTimers(), this.isDelaying = (e = this.$el, n = [], Ee(e, function (t) {
                    return "static" !== Re(t, "position") && n.push(t)
                }), n.some(function (t) {
                    return i.tracker.movesTo(t)
                })), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(r, this.delayHide) : r()
            }, clearTimers: function () {
                clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
            }, isActive: function () {
                return pi === this
            }, position: function () {
                Pe(this.$el, this.clsDrop + "-(stack|boundary)"), He(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                var t = an(this.boundary), e = this.boundaryAlign ? t : an(this.toggle.$el);
                if ("justify" === this.align) {
                    var n = "y" === this.getAxis() ? "width" : "height";
                    Re(this.$el, n, e[n])
                } else this.$el.offsetWidth > Math.max(t.right - e.left, e.right - t.left) && Ne(this.$el, this.clsDrop + "-stack");
                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary)
            }
        }
    }, xi = {
        mixins: [ci],
        args: "target",
        props: {target: Boolean},
        data: {target: !1},
        computed: {
            input: function (t, e) {
                return Ie(qt, e)
            }, state: function () {
                return this.input.nextElementSibling
            }, target: function (t, e) {
                var n = t.target;
                return n && (!0 === n && this.input.parentNode === e && this.input.nextElementSibling || xt(n, e))
            }
        },
        update: function () {
            var t = this.target, e = this.input;
            if (t) {
                var n, i = Ft(t) ? "value" : "textContent", r = t[i],
                    o = e.files && e.files[0] ? e.files[0].name : Bt(e, "select") && (n = Ae("option", e).filter(function (t) {
                        return t.selected
                    })[0]) ? n.textContent : e.value;
                r !== o && (t[i] = o)
            }
        },
        events: [{
            name: "change", handler: function () {
                this.$update()
            }
        }, {
            name: "reset", el: function () {
                return Dt(this.$el, "form")
            }, handler: function () {
                this.$update()
            }
        }]
    }, bi = {
        update: {
            read: function (t) {
                var e = On(this.$el);
                if (!e || t.isInView === e) return !1;
                t.isInView = e
            }, write: function () {
                this.$el.src = this.$el.src
            }, events: ["scroll", "resize"]
        }
    }, Ci = {
        props: {margin: String, firstColumn: Boolean},
        data: {margin: "uk-margin-small-top", firstColumn: "uk-first-column"},
        update: {
            read: function (t) {
                var e = this.$el.children;
                if (!e.length || !_t(this.$el)) return t.rows = [[]];
                t.rows = ki(e), t.stacks = !t.rows.some(function (t) {
                    return 1 < t.length
                })
            }, write: function (t) {
                var i = this;
                t.rows.forEach(function (t, n) {
                    return t.forEach(function (t, e) {
                        He(t, i.margin, 0 !== n), He(t, i.firstColumn, 0 === e)
                    })
                })
            }, events: ["resize"]
        }
    };

    function ki(t) {
        for (var e = [[]], n = 0; n < t.length; n++) {
            var i = t[n];
            if (_t(i)) for (var r = Li(i), o = e.length - 1; 0 <= o; o--) {
                var s = e[o];
                if (!s[0]) {
                    s.push(i);
                    break
                }
                var a;
                if (a = s[0].offsetParent === i.offsetParent ? Li(s[0]) : (r = Li(i, !0), Li(s[0], !0)), r.top >= a.bottom - 1 && r.top !== a.top) {
                    e.push([i]);
                    break
                }
                if (r.bottom > a.top || r.top === a.top) {
                    if (r.left < a.left && !ht) {
                        s.unshift(i);
                        break
                    }
                    s.push(i);
                    break
                }
                if (0 === o) {
                    e.unshift([i]);
                    break
                }
            }
        }
        return e
    }

    function Li(t, e) {
        var n;
        void 0 === e && (e = !1);
        var i = t.offsetTop, r = t.offsetLeft, o = t.offsetHeight;
        return e && (i = (n = hn(t))[0], r = n[1]), {top: i, left: r, height: o, bottom: i + o}
    }

    var Ti = {
        extends: Ci,
        mixins: [ci],
        name: "grid",
        props: {masonry: Boolean, parallax: Number},
        data: {margin: "uk-grid-margin", clsStack: "uk-grid-stack", masonry: !1, parallax: 0},
        computed: {
            length: function (t, e) {
                return e.children.length
            }, parallax: function (t) {
                var e = t.parallax;
                return e && this.length ? Math.abs(e) : ""
            }
        },
        connected: function () {
            this.masonry && Ne(this.$el, "uk-flex-top uk-flex-wrap-top")
        },
        update: [{
            write: function (t) {
                var e = t.stacks;
                He(this.$el, this.clsStack, e)
            }, events: ["resize"]
        }, {
            read: function (t) {
                var r = t.rows;
                if (!this.masonry && !this.parallax) return !1;
                r = r.map(function (t) {
                    return J(t, "offsetLeft")
                }), ht && r.map(function (t) {
                    return t.reverse()
                });
                var e, n, i, o, s = r.some(function (t) {
                    return t.some(Je.inProgress)
                }), a = !1, l = "";
                if (this.masonry && this.length) {
                    var c = 0;
                    a = r.reduce(function (n, t, i) {
                        return n[i] = t.map(function (t, e) {
                            return 0 === i ? 0 : q(n[i - 1][e]) + (c - q(r[i - 1][e] && r[i - 1][e].offsetHeight))
                        }), c = t.reduce(function (t, e) {
                            return Math.max(t, e.offsetHeight)
                        }, 0), n
                    }, []), l = Math.max.apply(Math, r.reduce(function (n, t) {
                        return t.forEach(function (t, e) {
                            return n[e] = (n[e] || 0) + t.offsetHeight
                        }), n
                    }, [])) + (e = this.$el, n = this.margin, q((o = (i = Zt(e)).filter(function (t) {
                        return je(t, n)
                    })[0]) ? Re(o, "marginTop") : Re(i[0], "paddingLeft")) * (r.length - 1))
                }
                return {
                    padding: this.parallax && function (t, e, n) {
                        for (var i = 0, r = 0, o = 0, s = e.length - 1; 0 <= s; s--) for (var a = i; a < e[s].length; a++) {
                            var l = e[s][a], c = l.offsetTop + un(l) + (n && -n[s][a]);
                            r = Math.max(r, c), o = Math.max(o, c + (a % 2 ? t : t / 8)), i++
                        }
                        return o - r
                    }(this.parallax, r, a), rows: r, translates: a, height: !s && l
                }
            }, write: function (t) {
                var e = t.stacks, n = t.height, i = t.padding;
                He(this.$el, this.clsStack, e), Re(this.$el, "paddingBottom", i), !1 !== n && Re(this.$el, "height", n)
            }, events: ["resize"]
        }, {
            read: function (t) {
                var e = t.height;
                return {scrolled: !!this.parallax && zn(this.$el, e ? e - un(this.$el) : 0) * this.parallax}
            }, write: function (t) {
                var e = t.rows, i = t.scrolled, r = t.translates;
                !1 === i && !r || e.forEach(function (t, n) {
                    return t.forEach(function (t, e) {
                        return Re(t, "transform", i || r ? "translateY(" + ((r && -r[n][e]) + (i ? e % 2 ? i : i / 8 : 0)) + "px)" : "")
                    })
                })
            }, events: ["scroll", "resize"]
        }]
    }, Si = ct ? {
        props: {selMinHeight: String},
        data: {selMinHeight: !1, forceHeight: !1},
        computed: {
            elements: function (t, e) {
                var n = t.selMinHeight;
                return n ? Ae(n, e) : [e]
            }
        },
        update: [{
            read: function () {
                Re(this.elements, "height", "")
            }, order: -5, events: ["resize"]
        }, {
            write: function () {
                var n = this;
                this.elements.forEach(function (t) {
                    var e = q(Re(t, "minHeight"));
                    e && (n.forceHeight || Math.round(e + pn(t, "height", "content-box")) >= t.offsetHeight) && Re(t, "height", e)
                })
            }, order: 5, events: ["resize"]
        }]
    } : {}, $i = {
        mixins: [Si],
        args: "target",
        props: {target: String, row: Boolean},
        data: {target: "> *", row: !0, forceHeight: !0},
        computed: {
            elements: function (t, e) {
                return Ae(t.target, e)
            }
        },
        update: {
            read: function () {
                return {rows: (this.row ? ki(this.elements) : [this.elements]).map(Mi)}
            }, write: function (t) {
                t.rows.forEach(function (t) {
                    var n = t.heights;
                    return t.elements.forEach(function (t, e) {
                        return Re(t, "minHeight", n[e])
                    })
                })
            }, events: ["resize"]
        }
    };

    function Mi(t) {
        var e;
        if (t.length < 2) return {heights: [""], elements: t};
        var n = Ei(t), i = n.heights, r = n.max, o = t.some(function (t) {
            return t.style.minHeight
        }), s = t.some(function (t, e) {
            return !t.style.minHeight && i[e] < r
        });
        return o && s && (Re(t, "minHeight", ""), e = Ei(t), i = e.heights, r = e.max), {
            heights: i = t.map(function (t, e) {
                return i[e] === r && q(t.style.minHeight).toFixed(2) !== r.toFixed(2) ? "" : r
            }), elements: t
        }
    }

    function Ei(t) {
        var e = t.map(function (t) {
            return an(t).height - pn(t, "height", "content-box")
        });
        return {heights: e, max: Math.max.apply(null, e)}
    }

    var Ii = {
        mixins: [Si],
        props: {expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean, minHeight: Number},
        data: {expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0},
        update: {
            read: function (t) {
                var e = t.minHeight;
                if (!_t(this.$el)) return !1;
                var n = "", i = pn(this.$el, "height", "content-box");
                if (this.expand) {
                    if (this.$el.dataset.heightExpand = "", Ie("[data-height-expand]") !== this.$el) return !1;
                    n = un(window) - (Ai(document.documentElement) - Ai(this.$el)) - i || ""
                } else {
                    if (n = "calc(100vh", this.offsetTop) {
                        var r = an(this.$el).top;
                        n += 0 < r && r < un(window) / 2 ? " - " + r + "px" : ""
                    }
                    !0 === this.offsetBottom ? n += " - " + Ai(this.$el.nextElementSibling) + "px" : O(this.offsetBottom) ? n += " - " + this.offsetBottom + "vh" : this.offsetBottom && c(this.offsetBottom, "px") ? n += " - " + q(this.offsetBottom) + "px" : D(this.offsetBottom) && (n += " - " + Ai(xt(this.offsetBottom, this.$el)) + "px"), n += (i ? " - " + i + "px" : "") + ")"
                }
                return {minHeight: n, prev: e}
            }, write: function (t) {
                var e = t.minHeight, n = t.prev;
                Re(this.$el, {minHeight: e}), e !== n && this.$update(this.$el, "resize"), this.minHeight && q(Re(this.$el, "minHeight")) < this.minHeight && Re(this.$el, "minHeight", this.minHeight)
            }, events: ["resize"]
        }
    };

    function Ai(t) {
        return t && an(t).height || 0
    }

    var Bi = {
        args: "src",
        props: {
            id: Boolean,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            class: String,
            strokeAnimation: Boolean,
            focusable: Boolean,
            attributes: "list"
        },
        data: {ratio: 1, include: ["style", "class", "focusable"], class: "", strokeAnimation: !1},
        beforeConnect: function () {
            var t, e = this;
            if (this.class += " uk-svg", !this.icon && y(this.src, "#")) {
                var n = this.src.split("#");
                1 < n.length && (t = n, this.src = t[0], this.icon = t[1])
            }
            this.svg = this.getSvg().then(function (t) {
                return e.applyAttributes(t), e.svgEl = function (t, e) {
                    if (zt(e) || "CANVAS" === e.tagName) {
                        ot(e, "hidden", !0);
                        var n = e.nextElementSibling;
                        return ji(t, n) ? n : xe(e, t)
                    }
                    var i = e.lastElementChild;
                    return ji(t, i) ? i : we(e, t)
                }(t, e.$el)
            }, et)
        },
        disconnected: function () {
            var e = this;
            zt(this.$el) && ot(this.$el, "hidden", null), this.svg && this.svg.then(function (t) {
                return (!e._connected || t !== e.svgEl) && Ce(t)
            }, et), this.svg = this.svgEl = null
        },
        update: {
            read: function () {
                return !!(this.strokeAnimation && this.svgEl && _t(this.svgEl))
            }, write: function () {
                var t, e;
                (e = Oi(t = this.svgEl)) && t.style.setProperty("--uk-animation-stroke", e)
            }, type: ["resize"]
        },
        methods: {
            getSvg: function () {
                var n, i = this;
                return n = this.src, (Ni[n] ? Ni[n] : Ni[n] = new se(function (e, t) {
                    n ? w(n, "data:") ? e(decodeURIComponent(n.split(",")[1])) : ue(n).then(function (t) {
                        return e(t.response)
                    }, function () {
                        return t("SVG not found.")
                    }) : t()
                })).then(function (t) {
                    return e = t, (n = i.icon) && y(e, "<symbol") && (e = function (t, e) {
                        var n;
                        if (!Pi[t]) for (Pi[t] = {}, Di.lastIndex = 0; n = Di.exec(t);) Pi[t][n[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + n[1] + "svg>";
                        return Pi[t][e]
                    }(e, n) || e), (e = Ie(e.substr(e.indexOf("<svg")))) && e.hasChildNodes() && e || se.reject("SVG not found.");
                    var e, n
                })
            }, applyAttributes: function (n) {
                var i = this;
                for (var t in this.$options.props) this[t] && y(this.include, t) && ot(n, t, this[t]);
                for (var e in this.attributes) {
                    var r = this.attributes[e].split(":", 2), o = r[0], s = r[1];
                    ot(n, o, s)
                }
                this.id || at(n, "id");
                var a = ["width", "height"], l = [this.width, this.height];
                l.some(function (t) {
                    return t
                }) || (l = a.map(function (t) {
                    return ot(n, t)
                }));
                var c = ot(n, "viewBox");
                c && !l.some(function (t) {
                    return t
                }) && (l = c.split(" ").slice(2)), l.forEach(function (t, e) {
                    (t = (0 | t) * i.ratio) && ot(n, a[e], t), t && !l[1 ^ e] && at(n, a[1 ^ e])
                }), ot(n, "data-svg", this.icon || this.src)
            }
        }
    }, Ni = {}, Di = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, Pi = {};

    function Oi(t) {
        return Math.ceil(Math.max.apply(Math, [0].concat(Ae("[stroke]", t).map(function (t) {
            try {
                return t.getTotalLength()
            } catch (t) {
                return 0
            }
        }))))
    }

    function ji(t, e) {
        return ot(t, "data-svg") === ot(e, "data-svg")
    }

    var Hi = {}, zi = {
        spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
        totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
        marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
        "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
        "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
        "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
        "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
        "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
        "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
        "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
        "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
        "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
        "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
        "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
        "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
        "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
    }, _i = {
        install: function (r) {
            r.icon.add = function (t, e) {
                var n, i = D(t) ? ((n = {})[t] = e, n) : t;
                G(i, function (t, e) {
                    zi[e] = t, delete Hi[e]
                }), r._initialized && Ee(document.body, function (t) {
                    return G(r.getComponents(t), function (t) {
                        t.$options.isIcon && t.icon in i && t.$reset()
                    })
                })
            }
        },
        extends: Bi,
        args: "icon",
        props: ["icon"],
        data: {include: ["focusable"]},
        isIcon: !0,
        beforeConnect: function () {
            Ne(this.$el, "uk-icon")
        },
        methods: {
            getSvg: function () {
                var t, e,
                    n = (t = this.icon, e = ht ? X(X(t, "left", "right"), "previous", "next") : t, zi[e] ? (Hi[e] || (Hi[e] = Ie(zi[e].trim())), Hi[e].cloneNode(!0)) : null);
                return n ? se.resolve(n) : se.reject("Icon not found.")
            }
        }
    }, qi = {
        args: !1, extends: _i, data: function (t) {
            return {icon: d(t.constructor.options.name)}
        }, beforeConnect: function () {
            Ne(this.$el, this.$name)
        }
    }, Fi = {
        extends: qi, beforeConnect: function () {
            Ne(this.$el, "uk-slidenav")
        }, computed: {
            icon: function (t, e) {
                var n = t.icon;
                return je(e, "uk-slidenav-large") ? n + "-large" : n
            }
        }
    }, Ri = {
        extends: qi, computed: {
            icon: function (t, e) {
                var n = t.icon;
                return je(e, "uk-search-icon") && Vt(e, ".uk-search-large").length ? "search-large" : Vt(e, ".uk-search-navbar").length ? "search-navbar" : n
            }
        }
    }, Wi = {
        extends: qi, computed: {
            icon: function () {
                return "close-" + (je(this.$el, "uk-close-large") ? "large" : "icon")
            }
        }
    }, Vi = {
        extends: qi, connected: function () {
            var e = this;
            this.svg.then(function (t) {
                return 1 !== e.ratio && Re(Ie("circle", t), "strokeWidth", 1 / e.ratio)
            }, et)
        }
    }, Zi = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            dataSrcset: Boolean,
            sizes: String,
            width: Number,
            height: Number,
            offsetTop: String,
            offsetLeft: String,
            target: String
        },
        data: {
            dataSrc: "",
            dataSrcset: !1,
            sizes: !1,
            width: !1,
            height: !1,
            offsetTop: "50vh",
            offsetLeft: 0,
            target: !1
        },
        computed: {
            cacheKey: function (t) {
                var e = t.dataSrc;
                return this.$name + "." + e
            }, width: function (t) {
                var e = t.width, n = t.dataWidth;
                return e || n
            }, height: function (t) {
                var e = t.height, n = t.dataHeight;
                return e || n
            }, sizes: function (t) {
                var e = t.sizes, n = t.dataSizes;
                return e || n
            }, isImg: function (t, e) {
                return Ki(e)
            }, target: {
                get: function (t) {
                    var e = t.target;
                    return [this.$el].concat(bt(e, this.$el))
                }, watch: function () {
                    this.observe()
                }
            }, offsetTop: function (t) {
                return yn(t.offsetTop, "height")
            }, offsetLeft: function (t) {
                return yn(t.offsetLeft, "width")
            }
        },
        connected: function () {
            var t, e, n, i;
            er[this.cacheKey] ? Ui(this.$el, er[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && Ui(this.$el, (t = this.width, e = this.height, (n = this.sizes) && (t = (i = rt.ratio({
                width: t,
                height: e
            }, "width", yn(Yi(n)))).width, e = i.height), 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>')), this.observer = new Kn(this.load, {rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"}), requestAnimationFrame(this.observe)
        },
        disconnected: function () {
            this.observer.disconnect()
        },
        update: {
            read: function (t) {
                var e = this, n = t.image;
                if (n || "complete" !== document.readyState || this.load(this.observer.takeRecords()), this.isImg) return !1;
                n && n.then(function (t) {
                    return t && "" !== t.currentSrc && Ui(e.$el, tr(t))
                })
            }, write: function (t) {
                if (this.dataSrcset && 1 !== window.devicePixelRatio) {
                    var e = Re(this.$el, "backgroundSize");
                    !e.match(/^(auto\s?)+$/) && q(e) !== t.bgSize || (t.bgSize = (n = this.dataSrcset, i = this.sizes, r = yn(Yi(i)), (o = (n.match(Ji) || []).map(q).sort(function (t, e) {
                        return t - e
                    })).filter(function (t) {
                        return r <= t
                    })[0] || o.pop() || ""), Re(this.$el, "backgroundSize", t.bgSize + "px"))
                }
                var n, i, r, o
            }, events: ["resize"]
        },
        methods: {
            load: function (t) {
                var e = this;
                t.some(function (t) {
                    return H(t.isIntersecting) || t.isIntersecting
                }) && (this._data.image = de(this.dataSrc, this.dataSrcset, this.sizes).then(function (t) {
                    return Ui(e.$el, tr(t), t.srcset, t.sizes), er[e.cacheKey] = tr(t), t
                }, et), this.observer.disconnect())
            }, observe: function () {
                var e = this;
                this._connected && !this._data.image && this.target.forEach(function (t) {
                    return e.observer.observe(t)
                })
            }
        }
    };

    function Ui(t, e, n, i) {
        Ki(t) ? (i && (t.sizes = i), n && (t.srcset = n), e && (t.src = e)) : e && (y(t.style.backgroundImage, e) || (Re(t, "backgroundImage", "url(" + jt(e) + ")"), Qt(t, Gt("load", !1))))
    }

    var Xi = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

    function Yi(t) {
        var e, n;
        for (Xi.lastIndex = 0; e = Xi.exec(t);) if (!e[1] || window.matchMedia(e[1]).matches) {
            e = w(n = e[2], "calc") ? n.substring(5, n.length - 1).replace(Qi, function (t) {
                return yn(t)
            }).replace(/ /g, "").match(Gi).reduce(function (t, e) {
                return t + +e
            }, 0) : n;
            break
        }
        return e || "100vw"
    }

    var Qi = /\d+(?:\w+|%)/g, Gi = /[+-]?(\d+)/g, Ji = /\s+\d+w\s*(?:,|$)/g;

    function Ki(t) {
        return "IMG" === t.tagName
    }

    function tr(t) {
        return t.currentSrc || t.src
    }

    var er, nr = "__test__";
    try {
        (er = window.sessionStorage || {})[nr] = 1, delete er[nr]
    } catch (t) {
        er = {}
    }
    var ir = {
        props: {media: Boolean}, data: {media: !1}, computed: {
            matchMedia: function () {
                var t = function (t) {
                    if (D(t)) if ("@" === t[0]) t = q(Ue("breakpoint-" + t.substr(1))); else if (isNaN(t)) return t;
                    return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
                }(this.media);
                return !t || window.matchMedia(t).matches
            }
        }
    }, rr = {
        mixins: [ci, ir],
        props: {fill: String},
        data: {fill: "", clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill"},
        computed: {
            fill: function (t) {
                return t.fill || Ue("leader-fill-content")
            }
        },
        connected: function () {
            var t;
            t = Le(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = t[0]
        },
        disconnected: function () {
            Te(this.wrapper.childNodes)
        },
        update: {
            read: function (t) {
                var e = t.changed, n = t.width, i = n;
                return {
                    width: n = Math.floor(this.$el.offsetWidth / 2),
                    fill: this.fill,
                    changed: e || i !== n,
                    hide: !this.matchMedia
                }
            }, write: function (t) {
                He(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, ot(this.wrapper, this.attrFill, new Array(t.width).join(t.fill)))
            }, events: ["resize"]
        }
    }, or = {
        props: {container: Boolean}, data: {container: !0}, computed: {
            container: function (t) {
                var e = t.container;
                return !0 === e && this.$container || e && Ie(e)
            }
        }
    }, sr = [], ar = {
        mixins: [ci, or, hi],
        props: {selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean},
        data: {cls: "uk-open", escClose: !0, bgClose: !0, overlay: !0, stack: !1},
        computed: {
            panel: function (t, e) {
                return Ie(t.selPanel, e)
            }, transitionElement: function () {
                return this.panel
            }, bgClose: function (t) {
                return t.bgClose && this.panel
            }
        },
        beforeDisconnect: function () {
            this.isToggled() && this.toggleElement(this.$el, !1, !1)
        },
        events: [{
            name: "click", delegate: function () {
                return this.selClose
            }, handler: function (t) {
                t.preventDefault(), this.hide()
            }
        }, {
            name: "toggle", self: !0, handler: function (t) {
                t.defaultPrevented || (t.preventDefault(), this.toggle())
            }
        }, {
            name: "beforeshow", self: !0, handler: function (t) {
                if (y(sr, this)) return !1;
                !this.stack && sr.length ? (se.all(sr.map(function (t) {
                    return t.hide()
                })).then(this.show), t.preventDefault()) : sr.push(this)
            }
        }, {
            name: "show", self: !0, handler: function () {
                var o = this;
                dn(window) - dn(document) && this.overlay && Re(document.body, "overflowY", "scroll"), this.stack && Re(this.$el, "zIndex", Re(this.$el, "zIndex") + sr.length), Ne(document.documentElement, this.clsPage), this.bgClose && Yt(this.$el, "hide", Ut(document, pt, function (t) {
                    var r = t.target;
                    Q(sr) !== o || Wt(r, o.panel) || Yt(document, vt + " " + yt + " scroll", function (t) {
                        var e = t.defaultPrevented, n = t.type, i = t.target;
                        e || n !== vt || r !== i || o.hide()
                    }, !0)
                }), {self: !0}), this.escClose && Yt(this.$el, "hide", Ut(document, "keydown", function (t) {
                    27 === t.keyCode && Q(sr) === o && (t.preventDefault(), o.hide())
                }), {self: !0})
            }
        }, {
            name: "hidden", self: !0, handler: function () {
                var e = this;
                sr.splice(sr.indexOf(this), 1), sr.length || Re(document.body, "overflowY", ""), Re(this.$el, "zIndex", ""), sr.some(function (t) {
                    return t.clsPage === e.clsPage
                }) || De(document.documentElement, this.clsPage)
            }
        }],
        methods: {
            toggle: function () {
                return this.isToggled() ? this.hide() : this.show()
            }, show: function () {
                var e = this;
                return this.container && this.$el.parentNode !== this.container ? (we(this.container, this.$el), new se(function (t) {
                    return requestAnimationFrame(function () {
                        return e.show().then(t)
                    })
                })) : this.toggleElement(this.$el, !0, lr(this))
            }, hide: function () {
                return this.toggleElement(this.$el, !1, lr(this))
            }
        }
    };

    function lr(t) {
        var s = t.transitionElement, a = t._toggle;
        return function (r, o) {
            return new se(function (n, i) {
                return Yt(r, "show hide", function () {
                    r._reject && r._reject(), r._reject = i, a(r, o);
                    var t = Yt(s, "transitionstart", function () {
                        Yt(s, "transitionend transitioncancel", n, {self: !0}), clearTimeout(e)
                    }, {self: !0}), e = setTimeout(function () {
                        t(), n()
                    }, Z(Re(s, "transitionDuration")))
                })
            })
        }
    }

    var cr = {
        install: function (t) {
            var a = t.modal;

            function e(t, e, n, i) {
                e = Y({bgClose: !1, escClose: !0, labels: a.labels}, e);
                var r = a.dialog(t(e), e), o = new oe, s = !1;
                return Ut(r.$el, "submit", "form", function (t) {
                    t.preventDefault(), o.resolve(i && i(r)), s = !0, r.hide()
                }), Ut(r.$el, "hide", function () {
                    return !s && n(o)
                }), o.promise.dialog = r, o.promise
            }

            a.dialog = function (t, e) {
                var n = a('<div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div>", e);
                return n.show(), Ut(n.$el, "hidden", function () {
                    return se.resolve().then(function () {
                        return n.$destroy(!0)
                    })
                }, {self: !0}), n
            }, a.alert = function (n, t) {
                return e(function (t) {
                    var e = t.labels;
                    return '<div class="uk-modal-body">' + (D(n) ? n : me(n)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + e.ok + "</button> </div>"
                }, t, function (t) {
                    return t.resolve()
                })
            }, a.confirm = function (n, t) {
                return e(function (t) {
                    var e = t.labels;
                    return '<form> <div class="uk-modal-body">' + (D(n) ? n : me(n)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + e.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + e.ok + "</button> </div> </form>"
                }, t, function (t) {
                    return t.reject()
                })
            }, a.prompt = function (n, i, t) {
                return e(function (t) {
                    var e = t.labels;
                    return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (D(n) ? n : me(n)) + '</label> <input class="uk-input" value="' + (i || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + e.cancel + '</button> <button class="uk-button uk-button-primary">' + e.ok + "</button> </div> </form>"
                }, t, function (t) {
                    return t.resolve(null)
                }, function (t) {
                    return Ie("input", t.$el).value
                })
            }, a.labels = {ok: "Ok", cancel: "Cancel"}
        },
        mixins: [ar],
        data: {
            clsPage: "uk-modal-page",
            selPanel: ".uk-modal-dialog",
            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
        },
        events: [{
            name: "show", self: !0, handler: function () {
                je(this.panel, "uk-margin-auto-vertical") ? Ne(this.$el, "uk-flex") : Re(this.$el, "display", "block"), un(this.$el)
            }
        }, {
            name: "hidden", self: !0, handler: function () {
                Re(this.$el, "display", ""), De(this.$el, "uk-flex")
            }
        }]
    }, hr = {extends: di, data: {targets: "> .uk-parent", toggle: "> a", content: "> ul"}}, ur = {
        mixins: [ci, Si],
        props: {
            dropdown: String,
            mode: "list",
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: Boolean,
            duration: Number
        },
        data: {
            dropdown: ".uk-navbar-nav > li",
            align: ht ? "right" : "left",
            clsDrop: "uk-navbar-dropdown",
            mode: void 0,
            offset: void 0,
            delayShow: void 0,
            delayHide: void 0,
            boundaryAlign: void 0,
            flip: "x",
            boundary: !0,
            dropbar: !1,
            dropbarMode: "slide",
            dropbarAnchor: !1,
            duration: 200,
            forceHeight: !0,
            selMinHeight: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"
        },
        computed: {
            boundary: function (t, e) {
                var n = t.boundary, i = t.boundaryAlign;
                return !0 === n || i ? e : n
            }, dropbarAnchor: function (t, e) {
                return xt(t.dropbarAnchor, e)
            }, pos: function (t) {
                return "bottom-" + t.align
            }, dropbar: {
                get: function (t) {
                    var e = t.dropbar;
                    return e ? (e = this._dropbar || xt(e, this.$el) || Ie("+ .uk-navbar-dropbar", this.$el)) || (this._dropbar = Ie("<div></div>")) : null
                }, watch: function (t) {
                    Ne(t, "uk-navbar-dropbar"), He(t, "uk-navbar-dropbar-slide", "slide" === this.dropbarMode)
                }, immediate: !0
            }, dropdowns: {
                get: function (t, e) {
                    return Ae(t.dropdown + " ." + t.clsDrop, e)
                }, watch: function (t) {
                    var e = this;
                    this.$create("drop", t.filter(function (t) {
                        return !e.getDropdown(t)
                    }), Y({}, this.$props, {
                        boundary: this.boundary,
                        pos: this.pos,
                        offset: this.dropbar || this.offset
                    }))
                }, immediate: !0
            }
        },
        disconnected: function () {
            this.dropbar && Ce(this.dropbar), delete this._dropbar
        },
        events: [{
            name: "mouseover", delegate: function () {
                return this.dropdown
            }, handler: function (t) {
                var e = t.current, n = this.getActive();
                n && n.toggle && !Wt(n.toggle.$el, e) && !n.tracker.movesTo(n.$el) && n.hide(!1)
            }
        }, {
            name: "mouseleave", el: function () {
                return this.dropbar
            }, handler: function () {
                var t = this.getActive();
                t && !this.dropdowns.some(function (t) {
                    return Bt(t, ":hover")
                }) && t.hide()
            }
        }, {
            name: "beforeshow", capture: !0, filter: function () {
                return this.dropbar
            }, handler: function () {
                this.dropbar.parentNode || xe(this.dropbarAnchor || this.$el, this.dropbar)
            }
        }, {
            name: "show", capture: !0, filter: function () {
                return this.dropbar
            }, handler: function (t, e) {
                var n = e.$el, i = e.dir;
                this.clsDrop && Ne(n, this.clsDrop + "-dropbar"), "bottom" === i && this.transitionTo(n.offsetHeight + q(Re(n, "marginTop")) + q(Re(n, "marginBottom")), n)
            }
        }, {
            name: "beforehide", filter: function () {
                return this.dropbar
            }, handler: function (t, e) {
                var n = e.$el, i = this.getActive();
                Bt(this.dropbar, ":hover") && i && i.$el === n && t.preventDefault()
            }
        }, {
            name: "hide", filter: function () {
                return this.dropbar
            }, handler: function (t, e) {
                var n = e.$el, i = this.getActive();
                (!i || i && i.$el === n) && this.transitionTo(0)
            }
        }],
        methods: {
            getActive: function () {
                var t = this.dropdowns.map(this.getDropdown).filter(function (t) {
                    return t && t.isActive()
                })[0];
                return t && y(t.mode, "hover") && Wt(t.toggle.$el, this.$el) && t
            }, transitionTo: function (t, e) {
                var n = this, i = this.dropbar, r = _t(i) ? un(i) : 0;
                return Re(e = r < t && e, "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"), un(i, r), Je.cancel([e, i]), se.all([Je.start(i, {height: t}, this.duration), Je.start(e, {clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"}, this.duration)]).catch(et).then(function () {
                    Re(e, {clip: ""}), n.$update(i)
                })
            }, getDropdown: function (t) {
                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
            }
        }
    }, dr = {
        mixins: [ar],
        args: "mode",
        props: {mode: String, flip: Boolean, overlay: Boolean},
        data: {
            mode: "slide",
            flip: !1,
            overlay: !1,
            clsPage: "uk-offcanvas-page",
            clsContainer: "uk-offcanvas-container",
            selPanel: ".uk-offcanvas-bar",
            clsFlip: "uk-offcanvas-flip",
            clsContainerAnimation: "uk-offcanvas-container-animation",
            clsSidebarAnimation: "uk-offcanvas-bar-animation",
            clsMode: "uk-offcanvas",
            clsOverlay: "uk-offcanvas-overlay",
            selClose: ".uk-offcanvas-close",
            container: !1
        },
        computed: {
            clsFlip: function (t) {
                var e = t.flip, n = t.clsFlip;
                return e ? n : ""
            }, clsOverlay: function (t) {
                var e = t.overlay, n = t.clsOverlay;
                return e ? n : ""
            }, clsMode: function (t) {
                var e = t.mode;
                return t.clsMode + "-" + e
            }, clsSidebarAnimation: function (t) {
                var e = t.mode, n = t.clsSidebarAnimation;
                return "none" === e || "reveal" === e ? "" : n
            }, clsContainerAnimation: function (t) {
                var e = t.mode, n = t.clsContainerAnimation;
                return "push" !== e && "reveal" !== e ? "" : n
            }, transitionElement: function (t) {
                return "reveal" === t.mode ? this.panel.parentNode : this.panel
            }
        },
        events: [{
            name: "click", delegate: function () {
                return 'a[href^="#"]'
            }, handler: function (t) {
                var e = t.current.hash;
                !t.defaultPrevented && e && Ie(e, document.body) && this.hide()
            }
        }, {
            name: "touchstart", passive: !0, el: function () {
                return this.panel
            }, handler: function (t) {
                var e = t.targetTouches;
                1 === e.length && (this.clientY = e[0].clientY)
            }
        }, {
            name: "touchmove", self: !0, passive: !1, filter: function () {
                return this.overlay
            }, handler: function (t) {
                t.cancelable && t.preventDefault()
            }
        }, {
            name: "touchmove", passive: !1, el: function () {
                return this.panel
            }, handler: function (t) {
                if (1 === t.targetTouches.length) {
                    var e = event.targetTouches[0].clientY - this.clientY, n = this.panel, i = n.scrollTop,
                        r = n.scrollHeight, o = n.clientHeight;
                    (r <= o || 0 === i && 0 < e || r - i <= o && e < 0) && t.cancelable && t.preventDefault()
                }
            }
        }, {
            name: "show", self: !0, handler: function () {
                "reveal" !== this.mode || je(this.panel.parentNode, this.clsMode) || (ke(this.panel, "<div>"), Ne(this.panel.parentNode, this.clsMode)), Re(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), Ne(document.body, this.clsContainer, this.clsFlip), Re(document.body, "touch-action", "pan-y pinch-zoom"), Re(this.$el, "display", "block"), Ne(this.$el, this.clsOverlay), Ne(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), un(document.body), Ne(document.body, this.clsContainerAnimation), this.clsContainerAnimation && (fr().content += ",user-scalable=0")
            }
        }, {
            name: "hide", self: !0, handler: function () {
                De(document.body, this.clsContainerAnimation), Re(document.body, "touch-action", "")
            }
        }, {
            name: "hidden", self: !0, handler: function () {
                var t;
                this.clsContainerAnimation && ((t = fr()).content = t.content.replace(/,user-scalable=0$/, "")), "reveal" === this.mode && Te(this.panel), De(this.panel, this.clsSidebarAnimation, this.clsMode), De(this.$el, this.clsOverlay), Re(this.$el, "display", ""), De(document.body, this.clsContainer, this.clsFlip), Re(document.documentElement, "overflowY", "")
            }
        }, {
            name: "swipeLeft swipeRight", handler: function (t) {
                this.isToggled() && c(t.type, "Left") ^ this.flip && this.hide()
            }
        }]
    };

    function fr() {
        return Ie('meta[name="viewport"]', document.head) || we(document.head, '<meta name="viewport">')
    }

    var pr = {
        mixins: [ci],
        props: {selContainer: String, selContent: String},
        data: {selContainer: ".uk-modal", selContent: ".uk-modal-dialog"},
        computed: {
            container: function (t, e) {
                return Dt(e, t.selContainer)
            }, content: function (t, e) {
                return Dt(e, t.selContent)
            }
        },
        connected: function () {
            Re(this.$el, "minHeight", 150)
        },
        update: {
            read: function () {
                return !(!this.content || !this.container) && {
                    current: q(Re(this.$el, "maxHeight")),
                    max: Math.max(150, un(this.container) - (an(this.content).height - un(this.$el)))
                }
            }, write: function (t) {
                var e = t.current, n = t.max;
                Re(this.$el, "maxHeight", n), Math.round(e) !== Math.round(n) && Qt(this.$el, "resize")
            }, events: ["resize"]
        }
    }, gr = {
        props: ["width", "height"], connected: function () {
            Ne(this.$el, "uk-responsive-width")
        }, update: {
            read: function () {
                return !!(_t(this.$el) && this.width && this.height) && {
                    width: dn(this.$el.parentNode),
                    height: this.height
                }
            }, write: function (t) {
                un(this.$el, rt.contain({height: this.height, width: this.width}, t).height)
            }, events: ["resize"]
        }
    }, vr = {
        props: {offset: Number}, data: {offset: 0}, methods: {
            scrollTo: function (t) {
                var e = this;
                t = t && Ie(t) || document.body, Qt(this.$el, "beforescroll", [this, t]) && Hn(t, {offset: this.offset}).then(function () {
                    return Qt(e.$el, "scrolled", [e, t])
                })
            }
        }, events: {
            click: function (t) {
                t.defaultPrevented || (t.preventDefault(), this.scrollTo(jt(decodeURIComponent(this.$el.hash)).substr(1)))
            }
        }
    }, mr = {
        args: "cls",
        props: {
            cls: String,
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
        },
        data: function () {
            return {
                cls: !1,
                target: !1,
                hidden: !0,
                offsetTop: 0,
                offsetLeft: 0,
                repeat: !1,
                delay: 0,
                inViewClass: "uk-scrollspy-inview"
            }
        },
        computed: {
            elements: {
                get: function (t, e) {
                    var n = t.target;
                    return n ? Ae(n, e) : [e]
                }, watch: function (t) {
                    this.hidden && Re(Rt(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden")
                }, immediate: !0
            }
        },
        update: [{
            read: function (t) {
                var n = this;
                t.update && this.elements.forEach(function (t) {
                    var e = t._ukScrollspyState;
                    (e = e || {cls: lt(t, "uk-scrollspy-class") || n.cls}).show = On(t, n.offsetTop, n.offsetLeft), t._ukScrollspyState = e
                })
            }, write: function (i) {
                var r = this;
                if (!i.update) return this.$update(), i.update = !0;
                this.elements.forEach(function (e) {
                    function t(t) {
                        Re(e, "visibility", !t && r.hidden ? "hidden" : ""), He(e, r.inViewClass, t), He(e, n.cls), Qt(e, t ? "inview" : "outview"), n.inview = t, r.$update(e)
                    }

                    var n = e._ukScrollspyState;
                    !n.show || n.inview || n.queued ? !n.show && n.inview && !n.queued && r.repeat && t(!1) : (n.queued = !0, i.promise = (i.promise || se.resolve()).then(function () {
                        return new se(function (t) {
                            return setTimeout(t, r.delay)
                        })
                    }).then(function () {
                        t(!0), setTimeout(function () {
                            return n.queued = !1
                        }, 300)
                    }))
                })
            }, events: ["scroll", "resize"]
        }]
    }, wr = {
        props: {cls: String, closest: String, scroll: Boolean, overflow: Boolean, offset: Number},
        data: {cls: "uk-active", closest: !1, scroll: !1, overflow: !0, offset: 0},
        computed: {
            links: {
                get: function (t, e) {
                    return Ae('a[href^="#"]', e).filter(function (t) {
                        return t.hash
                    })
                }, watch: function (t) {
                    this.scroll && this.$create("scroll", t, {offset: this.offset || 0})
                }, immediate: !0
            }, targets: function () {
                return Ae(this.links.map(function (t) {
                    return jt(t.hash).substr(1)
                }).join(","))
            }, elements: function (t) {
                var e = t.closest;
                return Dt(this.links, e || "*")
            }
        },
        update: [{
            read: function () {
                var n = this, t = this.targets.length;
                if (!t || !_t(this.$el)) return !1;
                var e = Q(_n(this.targets[0])), i = e.scrollTop, r = e.scrollHeight, o = qn(e), s = i,
                    a = r - an(o).height, l = !1;
                return s === a ? l = t - 1 : (this.targets.every(function (t, e) {
                    if (cn(t, o).top - n.offset <= 0) return l = e, !0
                }), !1 === l && this.overflow && (l = 0)), {active: l}
            }, write: function (t) {
                var e = t.active;
                this.links.forEach(function (t) {
                    return t.blur()
                }), De(this.elements, this.cls), !1 !== e && Qt(this.$el, "active", [e, Ne(this.elements[e], this.cls)])
            }, events: ["scroll", "resize"]
        }]
    }, yr = {
        mixins: [ci, ir],
        props: {
            top: null,
            bottom: Boolean,
            offset: String,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: Boolean,
            showOnUp: Boolean,
            targetOffset: Number
        },
        data: {
            top: 0,
            bottom: !1,
            offset: 0,
            animation: "",
            clsActive: "uk-active",
            clsInactive: "",
            clsFixed: "uk-sticky-fixed",
            clsBelow: "uk-sticky-below",
            selTarget: "",
            widthElement: !1,
            showOnUp: !1,
            targetOffset: !1
        },
        computed: {
            offset: function (t) {
                return yn(t.offset)
            }, selTarget: function (t, e) {
                var n = t.selTarget;
                return n && Ie(n, e) || e
            }, widthElement: function (t, e) {
                return xt(t.widthElement, e) || this.placeholder
            }, isActive: {
                get: function () {
                    return je(this.selTarget, this.clsActive)
                }, set: function (t) {
                    t && !this.isActive ? (Oe(this.selTarget, this.clsInactive, this.clsActive), Qt(this.$el, "active")) : t || je(this.selTarget, this.clsInactive) || (Oe(this.selTarget, this.clsActive, this.clsInactive), Qt(this.$el, "inactive"))
                }
            }
        },
        connected: function () {
            this.placeholder = Ie("+ .uk-sticky-placeholder", this.$el) || Ie('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.isActive = !1
        },
        disconnected: function () {
            this.isFixed && (this.hide(), De(this.selTarget, this.clsInactive)), Ce(this.placeholder), this.placeholder = null, this.widthElement = null
        },
        events: [{
            name: "load hashchange popstate", el: window, handler: function () {
                var i = this;
                if (!1 !== this.targetOffset && location.hash && 0 < window.pageYOffset) {
                    var r = Ie(location.hash);
                    r && bn.read(function () {
                        var t = an(r).top, e = an(i.$el).top, n = i.$el.offsetHeight;
                        i.isFixed && t <= e + n && e <= t + r.offsetHeight && jn(window, t - n - (O(i.targetOffset) ? i.targetOffset : 0) - i.offset)
                    })
                }
            }
        }],
        update: [{
            read: function (t, e) {
                var n = t.height;
                this.isActive && "update" !== e && (this.hide(), n = this.$el.offsetHeight, this.show()), n = this.isActive ? n : this.$el.offsetHeight, this.topOffset = an(this.isFixed ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + n;
                var i = xr("bottom", this);
                return this.top = Math.max(q(xr("top", this)), this.topOffset) - this.offset, this.bottom = i && i - n, this.inactive = !this.matchMedia, {
                    lastScroll: !1,
                    height: n,
                    margins: Re(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
                }
            }, write: function (t) {
                var e = t.height, n = t.margins, i = this.placeholder;
                Re(i, Y({height: e}, n)), Wt(i, document) || (xe(this.$el, i), ot(i, "hidden", "")), this.isActive = this.isActive
            }, events: ["resize"]
        }, {
            read: function (t) {
                var e = t.scroll;
                return void 0 === e && (e = 0), this.width = (_t(this.widthElement) ? this.widthElement : this.$el).offsetWidth, this.scroll = window.pageYOffset, {
                    dir: e <= this.scroll ? "down" : "up",
                    scroll: this.scroll,
                    visible: _t(this.$el),
                    top: hn(this.placeholder)[0]
                }
            }, write: function (t, e) {
                var n = this, i = t.initTimestamp;
                void 0 === i && (i = 0);
                var r = t.dir, o = t.lastDir, s = t.lastScroll, a = t.scroll, l = t.top, c = t.visible,
                    h = performance.now();
                if (!((t.lastScroll = a) < 0 || a === s || !c || this.disabled || this.showOnUp && "scroll" !== e || ((300 < h - i || r !== o) && (t.initScroll = a, t.initTimestamp = h), t.lastDir = r, this.showOnUp && Math.abs(t.initScroll - a) <= 30 && Math.abs(s - a) <= 10))) if (this.inactive || a < this.top || this.showOnUp && (a <= this.top || "down" === r || "up" === r && !this.isFixed && a <= this.bottomOffset)) {
                    if (!this.isFixed) return void (rn.inProgress(this.$el) && a < l && (rn.cancel(this.$el), this.hide()));
                    this.isFixed = !1, this.animation && a > this.topOffset ? (rn.cancel(this.$el), rn.out(this.$el, this.animation).then(function () {
                        return n.hide()
                    }, et)) : this.hide()
                } else this.isFixed ? this.update() : this.animation ? (rn.cancel(this.$el), this.show(), rn.in(this.$el, this.animation).catch(et)) : this.show()
            }, events: ["resize", "scroll"]
        }],
        methods: {
            show: function () {
                this.isFixed = !0, this.update(), ot(this.placeholder, "hidden", null)
            }, hide: function () {
                this.isActive = !1, De(this.$el, this.clsFixed, this.clsBelow), Re(this.$el, {
                    position: "",
                    top: "",
                    width: ""
                }), ot(this.placeholder, "hidden", "")
            }, update: function () {
                var t = 0 !== this.top || this.scroll > this.top, e = Math.max(0, this.offset);
                this.bottom && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), Re(this.$el, {
                    position: "fixed",
                    top: e + "px",
                    width: this.width
                }), this.isActive = t, He(this.$el, this.clsBelow, this.scroll > this.bottomOffset), Ne(this.$el, this.clsFixed)
            }
        }
    };

    function xr(t, e) {
        var n = e.$props, i = e.$el, r = e[t + "Offset"], o = n[t];
        if (o) return O(o) && D(o) && o.match(/^-?\d/) ? r + yn(o) : an(!0 === o ? i.parentNode : xt(o, i)).bottom
    }

    var br, Cr = {
        mixins: [hi],
        args: "connect",
        props: {connect: String, toggle: String, active: Number, swiping: Boolean},
        data: {
            connect: "~.uk-switcher",
            toggle: "> * > :first-child",
            active: 0,
            swiping: !0,
            cls: "uk-active",
            clsContainer: "uk-switcher",
            attrItem: "uk-switcher-item",
            queued: !0
        },
        computed: {
            connects: {
                get: function (t, e) {
                    return bt(t.connect, e)
                }, watch: function (t) {
                    var e = this;
                    t.forEach(function (t) {
                        return e.updateAria(t.children)
                    }), this.swiping && Re(t, "touch-action", "pan-y pinch-zoom")
                }, immediate: !0
            }, toggles: {
                get: function (t, e) {
                    return Ae(t.toggle, e).filter(function (t) {
                        return !Bt(t, ".uk-disabled *, .uk-disabled, [disabled]")
                    })
                }, watch: function (t) {
                    var e = this.index();
                    this.show(~e && e || t[this.active] || t[0])
                }, immediate: !0
            }
        },
        events: [{
            name: "click", delegate: function () {
                return this.toggle
            }, handler: function (t) {
                y(this.toggles, t.current) && (t.preventDefault(), this.show(t.current))
            }
        }, {
            name: "click", el: function () {
                return this.connects
            }, delegate: function () {
                return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
            }, handler: function (t) {
                t.preventDefault(), this.show(lt(t.current, this.attrItem))
            }
        }, {
            name: "swipeRight swipeLeft", filter: function () {
                return this.swiping
            }, el: function () {
                return this.connects
            }, handler: function (t) {
                var e = t.type;
                this.show(c(e, "Left") ? "next" : "previous")
            }
        }, {
            name: "show", el: function () {
                return this.connects
            }, handler: function () {
                var n = this, i = this.index();
                this.toggles.forEach(function (e, t) {
                    He(Zt(n.$el).filter(function (t) {
                        return Wt(e, t)
                    }), n.cls, i === t), ot(e, "aria-expanded", i === t)
                })
            }
        }],
        methods: {
            index: function () {
                return pe(Zt(this.connects[0], "." + this.cls)[0])
            }, show: function (t) {
                var n = this, i = this.index(), r = ge(t, this.toggles, i);
                this.connects.forEach(function (t) {
                    var e = t.children;
                    return n.toggleElement([e[i], e[r]], void 0, 0 <= i)
                })
            }
        }
    }, kr = {
        mixins: [ci],
        extends: Cr,
        props: {media: Boolean},
        data: {media: 960, attrItem: "uk-tab-item"},
        connected: function () {
            var t = je(this.$el, "uk-tab-left") ? "uk-tab-left" : !!je(this.$el, "uk-tab-right") && "uk-tab-right";
            t && this.$create("toggle", this.$el, {cls: t, mode: "media", media: this.media})
        }
    }, Lr = {
        mixins: [ir, hi],
        args: "target",
        props: {href: String, target: null, mode: "list"},
        data: {href: !1, target: !1, mode: "click", queued: !0},
        computed: {
            target: {
                get: function (t, e) {
                    var n = t.href, i = t.target;
                    return (i = bt(i || n, e)).length && i || [e]
                }, watch: function () {
                    Qt(this.target, "updatearia", [this])
                }, immediate: !0
            }
        },
        events: [{
            name: mt + " " + wt, filter: function () {
                return y(this.mode, "hover")
            }, handler: function (t) {
                ie(t) || this.toggle("toggle" + (t.type === mt ? "show" : "hide"))
            }
        }, {
            name: "click", filter: function () {
                return y(this.mode, "click") || ft && y(this.mode, "hover")
            }, handler: function (t) {
                var e;
                (Dt(t.target, 'a[href="#"], a[href=""]') || (e = Dt(t.target, "a[href]")) && (this.cls && !je(this.target, this.cls.split(" ")[0]) || !_t(this.target) || e.hash && Bt(this.target, e.hash))) && t.preventDefault(), this.toggle()
            }
        }],
        update: {
            read: function () {
                return !(!y(this.mode, "media") || !this.media) && {match: this.matchMedia}
            }, write: function (t) {
                var e = t.match, n = this.isToggled(this.target);
                (e ? !n : n) && this.toggle()
            }, events: ["resize"]
        },
        methods: {
            toggle: function (t) {
                Qt(this.target, t || "toggle", [this]) && this.toggleElement(this.target)
            }
        }
    }, Tr = Object.freeze({
        __proto__: null,
        Accordion: di,
        Alert: gi,
        Cover: mi,
        Drop: yi,
        Dropdown: yi,
        FormCustom: xi,
        Gif: bi,
        Grid: Ti,
        HeightMatch: $i,
        HeightViewport: Ii,
        Icon: _i,
        Img: Zi,
        Leader: rr,
        Margin: Ci,
        Modal: cr,
        Nav: hr,
        Navbar: ur,
        Offcanvas: dr,
        OverflowAuto: pr,
        Responsive: gr,
        Scroll: vr,
        Scrollspy: mr,
        ScrollspyNav: wr,
        Sticky: yr,
        Svg: Bi,
        Switcher: Cr,
        Tab: kr,
        Toggle: Lr,
        Video: vi,
        Close: Wi,
        Spinner: Vi,
        SlidenavNext: Fi,
        SlidenavPrevious: Fi,
        SearchIcon: Ri,
        Marker: qi,
        NavbarToggleIcon: qi,
        OverlayIcon: qi,
        PaginationNext: qi,
        PaginationPrevious: qi,
        Totop: qi
    }), Sr = {
        mixins: [ci],
        props: {date: String, clsWrapper: String},
        data: {date: "", clsWrapper: ".uk-countdown-%unit%"},
        computed: {
            date: function (t) {
                var e = t.date;
                return Date.parse(e)
            }, days: function (t, e) {
                return Ie(t.clsWrapper.replace("%unit%", "days"), e)
            }, hours: function (t, e) {
                return Ie(t.clsWrapper.replace("%unit%", "hours"), e)
            }, minutes: function (t, e) {
                return Ie(t.clsWrapper.replace("%unit%", "minutes"), e)
            }, seconds: function (t, e) {
                return Ie(t.clsWrapper.replace("%unit%", "seconds"), e)
            }, units: function () {
                var e = this;
                return ["days", "hours", "minutes", "seconds"].filter(function (t) {
                    return e[t]
                })
            }
        },
        connected: function () {
            this.start()
        },
        disconnected: function () {
            var e = this;
            this.stop(), this.units.forEach(function (t) {
                return ve(e[t])
            })
        },
        events: [{
            name: "visibilitychange", el: document, handler: function () {
                document.hidden ? this.stop() : this.start()
            }
        }],
        update: {
            write: function () {
                var t, i = this, r = {
                    total: t = this.date - Date.now(),
                    seconds: t / 1e3 % 60,
                    minutes: t / 1e3 / 60 % 60,
                    hours: t / 1e3 / 60 / 60 % 24,
                    days: t / 1e3 / 60 / 60 / 24
                };
                r.total <= 0 && (this.stop(), r.days = r.hours = r.minutes = r.seconds = 0), this.units.forEach(function (t) {
                    var e = String(Math.floor(r[t]));
                    e = e.length < 2 ? "0" + e : e;
                    var n = i[t];
                    n.textContent !== e && ((e = e.split("")).length !== n.children.length && me(n, e.map(function () {
                        return "<span></span>"
                    }).join("")), e.forEach(function (t, e) {
                        return n.children[e].textContent = t
                    }))
                })
            }
        },
        methods: {
            start: function () {
                this.stop(), this.date && this.units.length && (this.$update(), this.timer = setInterval(this.$update, 1e3))
            }, stop: function () {
                this.timer && (clearInterval(this.timer), this.timer = null)
            }
        }
    }, $r = "uk-animation-target", Mr = {
        props: {animation: Number}, data: {animation: 150}, computed: {
            target: function () {
                return this.$el
            }
        }, methods: {
            animate: function (t) {
                var i = this;
                br || (br = we(document.head, "<style>").sheet).insertRule("." + $r + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }", 0);
                var r = Zt(this.target), o = r.map(function (t) {
                    return Er(t, !0)
                }), e = un(this.target), n = window.pageYOffset;
                t(), Je.cancel(this.target), r.forEach(Je.cancel), Ir(this.target), this.$update(this.target, "resize"), bn.flush();
                var s = un(this.target), a = (r = r.concat(Zt(this.target).filter(function (t) {
                    return !y(r, t)
                }))).map(function (t, e) {
                    return !!(t.parentNode && e in o) && (o[e] ? _t(t) ? Ar(t) : {opacity: 0} : {opacity: _t(t) ? 1 : 0})
                });
                return o = a.map(function (t, e) {
                    var n = r[e].parentNode === i.target && (o[e] || Er(r[e]));
                    return n && (t ? "opacity" in t || (n.opacity % 1 ? t.opacity = 1 : delete n.opacity) : delete n.opacity), n
                }), Ne(this.target, $r), r.forEach(function (t, e) {
                    return o[e] && Re(t, o[e])
                }), Re(this.target, "height", e), jn(window, n), se.all(r.map(function (t, e) {
                    return ["top", "left", "height", "width"].some(function (t) {
                        return o[e][t] !== a[e][t]
                    }) && Je.start(t, a[e], i.animation, "ease")
                }).concat(e !== s && Je.start(this.target, {height: s}, this.animation, "ease"))).then(function () {
                    r.forEach(function (t, e) {
                        return Re(t, {display: 0 === a[e].opacity ? "none" : "", zIndex: ""})
                    }), Ir(i.target), i.$update(i.target, "resize"), bn.flush()
                }, et)
            }
        }
    };

    function Er(t, e) {
        var n = Re(t, "zIndex");
        return !!_t(t) && Y({
            display: "",
            opacity: e ? Re(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: "auto" === n ? pe(t) : n
        }, Ar(t))
    }

    function Ir(t) {
        Re(t.children, {
            height: "",
            left: "",
            opacity: "",
            pointerEvents: "",
            position: "",
            top: "",
            width: ""
        }), De(t, $r), Re(t, "height", "")
    }

    function Ar(t) {
        var e = an(t), n = e.height, i = e.width, r = cn(t);
        return {top: r.top, left: r.left, height: n, width: i}
    }

    var Br = {
        mixins: [Mr],
        args: "target",
        props: {target: Boolean, selActive: Boolean},
        data: {target: null, selActive: !1, attrItem: "uk-filter-control", cls: "uk-active", animation: 250},
        computed: {
            toggles: {
                get: function (t, e) {
                    return t.attrItem, Ae("[" + this.attrItem + "],[data-" + this.attrItem + "]", e)
                }, watch: function () {
                    var e = this;
                    if (this.updateState(), !1 !== this.selActive) {
                        var n = Ae(this.selActive, this.$el);
                        this.toggles.forEach(function (t) {
                            return He(t, e.cls, y(n, t))
                        })
                    }
                }, immediate: !0
            }, target: function (t, e) {
                return Ie(t.target, e)
            }, children: {
                get: function () {
                    return Zt(this.target)
                }, watch: function (t, e) {
                    var n;
                    n = e, t.length === n.length && t.every(function (t) {
                        return ~n.indexOf(t)
                    }) || this.updateState()
                }
            }
        },
        events: [{
            name: "click", delegate: function () {
                return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
            }, handler: function (t) {
                t.preventDefault(), this.apply(t.current)
            }
        }],
        methods: {
            apply: function (t) {
                this.setState(Dr(t, this.attrItem, this.getState()))
            }, getState: function () {
                var n = this;
                return this.toggles.filter(function (t) {
                    return je(t, n.cls)
                }).reduce(function (t, e) {
                    return Dr(e, n.attrItem, t)
                }, {filter: {"": ""}, sort: []})
            }, setState: function (u, t) {
                var c = this;
                void 0 === t && (t = !0), u = Y({
                    filter: {"": ""},
                    sort: []
                }, u), Qt(this.$el, "beforeFilter", [this, u]);
                var h = this.children;

                function e() {
                    var t, e, n = (t = u.filter, e = "", G(t, function (t) {
                        return e += t || ""
                    }), e);
                    h.forEach(function (t) {
                        return Re(t, "display", n && !Bt(t, n) ? "none" : "")
                    });
                    var i, r, o = u.sort, s = o[0], a = o[1];
                    if (s) {
                        var l = (i = s, r = a, Y([], h).sort(function (t, e) {
                            return lt(t, i).localeCompare(lt(e, i), void 0, {numeric: !0}) * ("asc" === r || -1)
                        }));
                        U(l, h) || l.forEach(function (t) {
                            return we(c.target, t)
                        })
                    }
                }

                this.toggles.forEach(function (t) {
                    return He(t, c.cls, !!function (t, e) {
                        var n = u.filter;
                        void 0 === n && (n = {"": ""});
                        var i = u.sort, r = i[0], o = i[1], s = Nr(t, e), a = s.filter;
                        void 0 === a && (a = "");
                        var l = s.group;
                        void 0 === l && (l = "");
                        var c = s.sort, h = s.order;
                        return void 0 === h && (h = "asc"), H(c) ? l in n && a === n[l] || !a && l && !(l in n) && !n[""] : r === c && o === h
                    }(t, c.attrItem))
                }), t ? this.animate(e).then(function () {
                    return Qt(c.$el, "afterFilter", [c])
                }) : (e(), Qt(this.$el, "afterFilter", [this]))
            }, updateState: function () {
                var t = this;
                bn.write(function () {
                    return t.setState(t.getState(), !1)
                })
            }
        }
    };

    function Nr(t, e) {
        return Bn(lt(t, e), ["filter"])
    }

    function Dr(t, e, n) {
        var i = Nr(t, e), r = i.filter, o = i.group, s = i.sort, a = i.order;
        return void 0 === a && (a = "asc"), (r || H(s)) && (o ? r ? (delete n.filter[""], n.filter[o] = r) : (delete n.filter[o], (j(n.filter) || "" in n.filter) && (n.filter = {"": r || ""})) : n.filter = {"": r || ""}), H(s) || (n.sort = [s, a]), n
    }

    var Pr = {
        slide: {
            show: function (t) {
                return [{transform: jr(-100 * t)}, {transform: jr()}]
            }, percent: function (t) {
                return Or(t)
            }, translate: function (t, e) {
                return [{transform: jr(-100 * e * t)}, {transform: jr(100 * e * (1 - t))}]
            }
        }
    };

    function Or(t) {
        return Math.abs(Re(t, "transform").split(",")[4] / t.offsetWidth) || 0
    }

    function jr(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = "%"), t += t ? e : "", ct ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)"
    }

    function Hr(t) {
        return "scale3d(" + t + ", " + t + ", 1)"
    }

    var zr = Y({}, Pr, {
        fade: {
            show: function () {
                return [{opacity: 0}, {opacity: 1}]
            }, percent: function (t) {
                return 1 - Re(t, "opacity")
            }, translate: function (t) {
                return [{opacity: 1 - t}, {opacity: t}]
            }
        }, scale: {
            show: function () {
                return [{opacity: 0, transform: Hr(.8)}, {opacity: 1, transform: Hr(1)}]
            }, percent: function (t) {
                return 1 - Re(t, "opacity")
            }, translate: function (t) {
                return [{opacity: 1 - t, transform: Hr(1 - .2 * t)}, {opacity: t, transform: Hr(.8 + .2 * t)}]
            }
        }
    });

    function _r(t, e, n) {
        Qt(t, Gt(e, !1, !1, n))
    }

    var qr = {
        mixins: [{
            props: {autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean},
            data: {autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0},
            connected: function () {
                this.autoplay && this.startAutoplay()
            },
            disconnected: function () {
                this.stopAutoplay()
            },
            update: function () {
                ot(this.slides, "tabindex", "-1")
            },
            events: [{
                name: "visibilitychange", el: document, filter: function () {
                    return this.autoplay
                }, handler: function () {
                    document.hidden ? this.stopAutoplay() : this.startAutoplay()
                }
            }],
            methods: {
                startAutoplay: function () {
                    var t = this;
                    this.stopAutoplay(), this.interval = setInterval(function () {
                        return (!t.draggable || !Ie(":focus", t.$el)) && (!t.pauseOnHover || !Bt(t.$el, ":hover")) && !t.stack.length && t.show("next")
                    }, this.autoplayInterval)
                }, stopAutoplay: function () {
                    this.interval && clearInterval(this.interval)
                }
            }
        }, {
            props: {draggable: Boolean}, data: {draggable: !0, threshold: 10}, created: function () {
                var i = this;
                ["start", "move", "end"].forEach(function (t) {
                    var n = i[t];
                    i[t] = function (t) {
                        var e = re(t).x * (ht ? -1 : 1);
                        i.prevPos = e !== i.pos ? i.pos : i.prevPos, i.pos = e, n(t)
                    }
                })
            }, events: [{
                name: pt, delegate: function () {
                    return this.selSlides
                }, handler: function (t) {
                    var e;
                    !this.draggable || !ie(t) && !(e = t.target).children.length && e.childNodes.length || Dt(t.target, qt) || 0 < t.button || this.length < 2 || this.start(t)
                }
            }, {
                name: "touchmove", passive: !1, handler: "move", delegate: function () {
                    return this.selSlides
                }
            }, {
                name: "dragstart", handler: function (t) {
                    t.preventDefault()
                }
            }], methods: {
                start: function () {
                    var t = this;
                    this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index;
                    var e = "touchmove" != gt ? Ut(document, gt, this.move, {passive: !1}) : et;
                    this.unbindMove = function () {
                        e(), t.unbindMove = null
                    }, Ut(window, "scroll", this.unbindMove), Ut(document, vt, this.end, !0), Re(this.list, "userSelect", "none")
                }, move: function (t) {
                    var e = this;
                    if (this.unbindMove) {
                        var n = this.pos - this.drag;
                        if (!(0 == n || this.prevPos === this.pos || !this.dragging && Math.abs(n) < this.threshold)) {
                            Re(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = n < 0 ? 1 : -1;
                            for (var i = this.slides, r = this.prevIndex, o = Math.abs(n), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth; s !== r && a < o;) this.drag -= a * this.dir, r = s, o -= a, s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth;
                            this.percent = o / a;
                            var l, c = i[r], h = i[s], u = this.index !== s, d = r === s;
                            [this.index, this.prevIndex].filter(function (t) {
                                return !y([s, r], t)
                            }).forEach(function (t) {
                                Qt(i[t], "itemhidden", [e]), d && (l = !0, e.prevIndex = r)
                            }), (this.index === r && this.prevIndex !== r || l) && Qt(i[this.index], "itemshown", [this]), u && (this.prevIndex = r, this.index = s, d || Qt(c, "beforeitemhide", [this]), Qt(h, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), c, !d && h), u && (d || Qt(c, "itemhide", [this]), Qt(h, "itemshow", [this]))
                        }
                    }
                }, end: function () {
                    if (Xt(window, "scroll", this.unbindMove), this.unbindMove && this.unbindMove(), Xt(document, vt, this.end, !0), this.dragging) if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null; else {
                        var t = (ht ? this.dir * (ht ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                        this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0)
                    }
                    Re(this.list, {userSelect: "", pointerEvents: ""}), this.drag = this.percent = null
                }
            }
        }, {
            data: {selNav: !1}, computed: {
                nav: function (t, e) {
                    return Ie(t.selNav, e)
                }, selNavItem: function (t) {
                    var e = t.attrItem;
                    return "[" + e + "],[data-" + e + "]"
                }, navItems: function (t, e) {
                    return Ae(this.selNavItem, e)
                }
            }, update: {
                write: function () {
                    var n = this;
                    this.nav && this.length !== this.nav.children.length && me(this.nav, this.slides.map(function (t, e) {
                        return "<li " + n.attrItem + '="' + e + '"><a href></a></li>'
                    }).join("")), He(Ae(this.selNavItem, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav()
                }, events: ["resize"]
            }, events: [{
                name: "click", delegate: function () {
                    return this.selNavItem
                }, handler: function (t) {
                    t.preventDefault(), this.show(lt(t.current, this.attrItem))
                }
            }, {name: "itemshow", handler: "updateNav"}], methods: {
                updateNav: function () {
                    var n = this, i = this.getValidIndex();
                    this.navItems.forEach(function (t) {
                        var e = lt(t, n.attrItem);
                        He(t, n.clsActive, _(e) === i), He(t, "uk-invisible", n.finite && ("previous" === e && 0 === i || "next" === e && i >= n.maxIndex))
                    })
                }
            }
        }],
        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number,
            selSlides: String
        },
        data: function () {
            return {
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {}
            }
        },
        connected: function () {
            this.prevIndex = -1, this.index = this.getValidIndex(this.index), this.stack = []
        },
        disconnected: function () {
            De(this.slides, this.clsActive)
        },
        computed: {
            duration: function (t, e) {
                var n = t.velocity;
                return Fr(e.offsetWidth / n)
            }, list: function (t, e) {
                return Ie(t.selList, e)
            }, maxIndex: function () {
                return this.length - 1
            }, selSlides: function (t) {
                return t.selList + " " + (t.selSlides || "> *")
            }, slides: {
                get: function () {
                    return Ae(this.selSlides, this.$el)
                }, watch: function () {
                    this.$reset()
                }
            }, length: function () {
                return this.slides.length
            }
        },
        events: {
            itemshown: function () {
                this.$update(this.list)
            }
        },
        methods: {
            show: function (t, e) {
                var n = this;
                if (void 0 === e && (e = !1), !this.dragging && this.length) {
                    var i = this.stack, r = e ? 0 : i.length, o = function () {
                        i.splice(r, 1), i.length && n.show(i.shift(), !0)
                    };
                    if (i[e ? "unshift" : "push"](t), !e && 1 < i.length) 2 === i.length && this._transitioner.forward(Math.min(this.duration, 200)); else {
                        var s = this.getIndex(this.index), a = je(this.slides, this.clsActive) && this.slides[s],
                            l = this.getIndex(t, this.index), c = this.slides[l];
                        if (a !== c) {
                            if (this.dir = "next" !== t && ("previous" === t || t < s) ? -1 : 1, this.prevIndex = s, this.index = l, a && Qt(a, "beforeitemhide", [this]), !Qt(c, "beforeitemshow", [this, a])) return this.index = this.prevIndex, void o();
                            var h = this._show(a, c, e).then(function () {
                                return a && Qt(a, "itemhidden", [n]), Qt(c, "itemshown", [n]), new se(function (t) {
                                    bn.write(function () {
                                        i.shift(), i.length ? n.show(i.shift(), !0) : n._transitioner = null, t()
                                    })
                                })
                            });
                            return a && Qt(a, "itemhide", [this]), Qt(c, "itemshow", [this]), h
                        }
                        o()
                    }
                }
            }, getIndex: function (t, e) {
                return void 0 === t && (t = this.index), void 0 === e && (e = this.index), tt(ge(t, this.slides, e, this.finite), 0, this.maxIndex)
            }, getValidIndex: function (t, e) {
                return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e)
            }, _show: function (t, e, n) {
                if (this._transitioner = this._getTransitioner(t, e, this.dir, Y({easing: n ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing}, this.transitionOptions)), !n && !t) return this._translate(1), se.resolve();
                var i = this.stack.length;
                return this._transitioner[1 < i ? "forward" : "show"](1 < i ? Math.min(this.duration, 75 + 75 / (i - 1)) : this.duration, this.percent)
            }, _getDistance: function (t, e) {
                return this._getTransitioner(t, t !== e && e).getDistance()
            }, _translate: function (t, e, n) {
                void 0 === e && (e = this.prevIndex), void 0 === n && (n = this.index);
                var i = this._getTransitioner(e !== n && e, n);
                return i.translate(t), i
            }, _getTransitioner: function (t, e, n, i) {
                return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === n && (n = this.dir || 1), void 0 === i && (i = this.transitionOptions), new this.Transitioner(P(t) ? this.slides[t] : t, P(e) ? this.slides[e] : e, n * (ht ? -1 : 1), i)
            }
        }
    };

    function Fr(t) {
        return .5 * t + 300
    }

    var Rr = {
        mixins: [qr], props: {animation: String}, data: {
            animation: "slide",
            clsActivated: "uk-transition-active",
            Animations: Pr,
            Transitioner: function (o, s, a, t) {
                var e = t.animation, l = t.easing, n = e.percent, i = e.translate, r = e.show;
                void 0 === r && (r = et);
                var c = r(a), h = new oe;
                return {
                    dir: a, show: function (t, e, n) {
                        var i = this;
                        void 0 === e && (e = 0);
                        var r = n ? "linear" : l;
                        return t -= Math.round(t * tt(e, -1, 1)), this.translate(e), _r(s, "itemin", {
                            percent: e,
                            duration: t,
                            timing: r,
                            dir: a
                        }), _r(o, "itemout", {
                            percent: 1 - e,
                            duration: t,
                            timing: r,
                            dir: a
                        }), se.all([Je.start(s, c[1], t, r), Je.start(o, c[0], t, r)]).then(function () {
                            i.reset(), h.resolve()
                        }, et), h.promise
                    }, stop: function () {
                        return Je.stop([s, o])
                    }, cancel: function () {
                        Je.cancel([s, o])
                    }, reset: function () {
                        for (var t in c[0]) Re([s, o], t, "")
                    }, forward: function (t, e) {
                        return void 0 === e && (e = this.percent()), Je.cancel([s, o]), this.show(t, e, !0)
                    }, translate: function (t) {
                        this.reset();
                        var e = i(t, a);
                        Re(s, e[1]), Re(o, e[0]), _r(s, "itemtranslatein", {
                            percent: t,
                            dir: a
                        }), _r(o, "itemtranslateout", {percent: 1 - t, dir: a})
                    }, percent: function () {
                        return n(o || s, s, a)
                    }, getDistance: function () {
                        return o && o.offsetWidth
                    }
                }
            }
        }, computed: {
            animation: function (t) {
                var e = t.animation, n = t.Animations;
                return Y(e in n ? n[e] : n.slide, {name: e})
            }, transitionOptions: function () {
                return {animation: this.animation}
            }
        }, events: {
            "itemshow itemhide itemshown itemhidden": function (t) {
                var e = t.target;
                this.$update(e)
            }, beforeitemshow: function (t) {
                Ne(t.target, this.clsActive)
            }, itemshown: function (t) {
                Ne(t.target, this.clsActivated)
            }, itemhidden: function (t) {
                De(t.target, this.clsActive, this.clsActivated)
            }
        }
    }, Wr = {
        mixins: [or, ar, hi, Rr],
        functional: !0,
        props: {delayControls: Number, preload: Number, videoAutoplay: Boolean, template: String},
        data: function () {
            return {
                preload: 1,
                videoAutoplay: !1,
                delayControls: 3e3,
                items: [],
                cls: "uk-open",
                clsPage: "uk-lightbox-page",
                selList: ".uk-lightbox-items",
                attrItem: "uk-lightbox-item",
                selClose: ".uk-close-large",
                selCaption: ".uk-lightbox-caption",
                pauseOnHover: !1,
                velocity: 2,
                Animations: zr,
                template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
            }
        },
        created: function () {
            var t = Ie(this.template), e = Ie(this.selList, t);
            this.items.forEach(function () {
                return we(e, "<li></li>")
            }), this.$mount(we(this.container, t))
        },
        computed: {
            caption: function (t, e) {
                return t.selCaption, Ie(".uk-lightbox-caption", e)
            }
        },
        events: [{name: gt + " " + pt + " keydown", handler: "showControls"}, {
            name: "click",
            self: !0,
            delegate: function () {
                return this.selSlides
            },
            handler: function (t) {
                t.defaultPrevented || this.hide()
            }
        }, {
            name: "shown", self: !0, handler: function () {
                this.showControls()
            }
        }, {
            name: "hide", self: !0, handler: function () {
                this.hideControls(), De(this.slides, this.clsActive), Je.stop(this.slides)
            }
        }, {
            name: "hidden", self: !0, handler: function () {
                this.$destroy(!0)
            }
        }, {
            name: "keyup", el: document, handler: function (t) {
                if (this.isToggled(this.$el) && this.draggable) switch (t.keyCode) {
                    case 37:
                        this.show("previous");
                        break;
                    case 39:
                        this.show("next")
                }
            }
        }, {
            name: "beforeitemshow", handler: function (t) {
                this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = zr.scale, De(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
            }
        }, {
            name: "itemshow", handler: function (t) {
                var e = pe(t.target), n = this.getItem(e).caption;
                Re(this.caption, "display", n ? "" : "none"), me(this.caption, n);
                for (var i = 0; i <= this.preload; i++) this.loadItem(this.getIndex(e + i)), this.loadItem(this.getIndex(e - i))
            }
        }, {
            name: "itemshown", handler: function () {
                this.draggable = this.$props.draggable
            }
        }, {
            name: "itemload", handler: function (t, r) {
                var o, s = this, e = r.source, n = r.type, i = r.alt;
                if (this.setItem(r, "<span uk-spinner></span>"), e) if ("image" === n || e.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i)) de(e).then(function (t) {
                    return s.setItem(r, '<img width="' + t.width + '" height="' + t.height + '" src="' + e + '" alt="' + (i || "") + '">')
                }, function () {
                    return s.setError(r)
                }); else if ("video" === n || e.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                    var a = Ie("<video controls playsinline" + (r.poster ? ' poster="' + r.poster + '"' : "") + ' uk-video="' + this.videoAutoplay + '"></video>');
                    ot(a, "src", e), Yt(a, "error loadedmetadata", function (t) {
                        "error" === t ? s.setError(r) : (ot(a, {
                            width: a.videoWidth,
                            height: a.videoHeight
                        }), s.setItem(r, a))
                    })
                } else if ("iframe" === n || e.match(/\.(html|php)($|\?)/i)) this.setItem(r, '<iframe class="uk-lightbox-iframe" src="' + e + '" frameborder="0" allowfullscreen></iframe>'); else if (o = e.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || e.match(/()youtu\.be\/(.*)/)) {
                    var l = o[2], c = function (t, e) {
                        return void 0 === t && (t = 640), void 0 === e && (e = 450), s.setItem(r, Vr("https://www.youtube" + (o[1] || "") + ".com/embed/" + l, t, e, s.videoAutoplay))
                    };
                    de("https://img.youtube.com/vi/" + l + "/maxresdefault.jpg").then(function (t) {
                        var e = t.width, n = t.height;
                        120 === e && 90 === n ? de("https://img.youtube.com/vi/" + l + "/0.jpg").then(function (t) {
                            var e = t.width, n = t.height;
                            return c(e, n)
                        }, c) : c(e, n)
                    }, c)
                } else (o = e.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) && ue("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(e), {
                    responseType: "json",
                    withCredentials: !1
                }).then(function (t) {
                    var e = t.response, n = e.height, i = e.width;
                    return s.setItem(r, Vr("https://player.vimeo.com/video/" + o[2], i, n, s.videoAutoplay))
                }, function () {
                    return s.setError(r)
                })
            }
        }],
        methods: {
            loadItem: function (t) {
                void 0 === t && (t = this.index);
                var e = this.getItem(t);
                e.content || Qt(this.$el, "itemload", [e])
            }, getItem: function (t) {
                return void 0 === t && (t = this.index), this.items[t] || {}
            }, setItem: function (t, e) {
                Y(t, {content: e});
                var n = me(this.slides[this.items.indexOf(t)], e);
                Qt(this.$el, "itemloaded", [this, n]), this.$update(n)
            }, setError: function (t) {
                this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
            }, showControls: function () {
                clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), Ne(this.$el, "uk-active", "uk-transition-active")
            }, hideControls: function () {
                De(this.$el, "uk-active", "uk-transition-active")
            }
        }
    };

    function Vr(t, e, n, i) {
        return '<iframe src="' + t + '" width="' + e + '" height="' + n + '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' + i + '" uk-responsive></iframe>'
    }

    var Zr, Ur = {
        install: function (t, e) {
            t.lightboxPanel || t.component("lightboxPanel", Wr), Y(e.props, t.component("lightboxPanel").options.props)
        }, props: {toggle: String}, data: {toggle: "a"}, computed: {
            toggles: {
                get: function (t, e) {
                    return Ae(t.toggle, e)
                }, watch: function () {
                    this.hide()
                }
            }
        }, disconnected: function () {
            this.hide()
        }, events: [{
            name: "click", delegate: function () {
                return this.toggle + ":not(.uk-disabled)"
            }, handler: function (t) {
                t.preventDefault(), this.show(t.current)
            }
        }], methods: {
            show: function (t) {
                var e = this, n = K(this.toggles.map(Xr), "source");
                if (A(t)) {
                    var i = Xr(t).source;
                    t = b(n, function (t) {
                        var e = t.source;
                        return i === e
                    })
                }
                return this.panel = this.panel || this.$create("lightboxPanel", Y({}, this.$props, {items: n})), Ut(this.panel.$el, "hidden", function () {
                    return e.panel = !1
                }), this.panel.show(t)
            }, hide: function () {
                return this.panel && this.panel.hide()
            }
        }
    };

    function Xr(n) {
        return ["href", "caption", "type", "poster", "alt"].reduce(function (t, e) {
            return t["href" === e ? "source" : e] = lt(n, e), t
        }, {})
    }

    var Yr = {
            functional: !0,
            args: ["message", "status"],
            data: {
                message: "",
                status: "",
                timeout: 5e3,
                group: null,
                pos: "top-center",
                clsContainer: "uk-notification",
                clsClose: "uk-notification-close",
                clsMsg: "uk-notification-message"
            },
            install: function (r) {
                r.notification.closeAll = function (n, i) {
                    Ee(document.body, function (t) {
                        var e = r.getComponent(t, "notification");
                        !e || n && n !== e.group || e.close(i)
                    })
                }
            },
            computed: {
                marginProp: function (t) {
                    return "margin" + (w(t.pos, "top") ? "Top" : "Bottom")
                }, startProps: function () {
                    var t;
                    return (t = {opacity: 0})[this.marginProp] = -this.$el.offsetHeight, t
                }
            },
            created: function () {
                var t = Ie("." + this.clsContainer + "-" + this.pos, this.$container) || we(this.$container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
                this.$mount(we(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
            },
            connected: function () {
                var t, e = this, n = q(Re(this.$el, this.marginProp));
                Je.start(Re(this.$el, this.startProps), ((t = {opacity: 1})[this.marginProp] = n, t)).then(function () {
                    e.timeout && (e.timer = setTimeout(e.close, e.timeout))
                })
            },
            events: ((Zr = {
                click: function (t) {
                    Dt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close()
                }
            })[mt] = function () {
                this.timer && clearTimeout(this.timer)
            }, Zr[wt] = function () {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout))
            }, Zr),
            methods: {
                close: function (t) {
                    function e() {
                        var t = n.$el.parentNode;
                        Qt(n.$el, "close", [n]), Ce(n.$el), t && !t.hasChildNodes() && Ce(t)
                    }

                    var n = this;
                    this.timer && clearTimeout(this.timer), t ? e() : Je.start(this.$el, this.startProps).then(e)
                }
            }
        },
        Qr = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity", "stroke"],
        Gr = {
            mixins: [ir], props: Qr.reduce(function (t, e) {
                return t[e] = "list", t
            }, {}), data: Qr.reduce(function (t, e) {
                return t[e] = void 0, t
            }, {}), computed: {
                props: function (g, v) {
                    var m = this;
                    return Qr.reduce(function (t, e) {
                        if (H(g[e])) return t;
                        var n, i, r, o = e.match(/color/i), s = o || "opacity" === e, a = g[e].slice(0);
                        s && Re(v, e, ""), a.length < 2 && a.unshift(("scale" === e ? 1 : s ? Re(v, e) : 0) || 0);
                        var l = a.reduce(function (t, e) {
                            return D(e) && e.replace(/-|\d/g, "").trim() || t
                        }, "");
                        if (o) {
                            var c = v.style.color;
                            a = a.map(function (t) {
                                return Re(Re(v, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(q)
                            }), v.style.color = c
                        } else if (w(e, "bg")) {
                            var h = "bgy" === e ? "height" : "width";
                            if (a = a.map(function (t) {
                                return yn(t, h, m.$el)
                            }), Re(v, "background-position-" + e[2], ""), i = Re(v, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1], m.covers) {
                                var u = Math.min.apply(Math, a), d = Math.max.apply(Math, a),
                                    f = a.indexOf(u) < a.indexOf(d);
                                r = d - u, a = a.map(function (t) {
                                    return t - (f ? u : d)
                                }), n = (f ? -r : 0) + "px"
                            } else n = i
                        } else a = a.map(q);
                        if ("stroke" === e) {
                            if (!a.some(function (t) {
                                return t
                            })) return t;
                            var p = Oi(m.$el);
                            Re(v, "strokeDasharray", p), "%" === l && (a = a.map(function (t) {
                                return t * p / 100
                            })), a = a.reverse(), e = "strokeDashoffset"
                        }
                        return t[e] = {steps: a, unit: l, pos: n, bgPos: i, diff: r}, t
                    }, {})
                }, bgProps: function () {
                    var e = this;
                    return ["bgx", "bgy"].filter(function (t) {
                        return t in e.props
                    })
                }, covers: function (t, e) {
                    return i = (n = e).style.backgroundSize, r = "cover" === Re(Re(n, "backgroundSize", ""), "backgroundSize"), n.style.backgroundSize = i, r;
                    var n, i, r
                }
            }, disconnected: function () {
                delete this._image
            }, update: {
                read: function (t) {
                    var l = this;
                    if (t.active = this.matchMedia, t.active) {
                        if (!t.image && this.covers && this.bgProps.length) {
                            var e = Re(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
                            if (e) {
                                var n = new Image;
                                n.src = e, (t.image = n).naturalWidth || (n.onload = function () {
                                    return l.$update()
                                })
                            }
                        }
                        var i = t.image;
                        if (i && i.naturalWidth) {
                            var c = {width: this.$el.offsetWidth, height: this.$el.offsetHeight},
                                h = {width: i.naturalWidth, height: i.naturalHeight}, u = rt.cover(h, c);
                            this.bgProps.forEach(function (t) {
                                var e = l.props[t], n = e.diff, i = e.bgPos, r = e.steps,
                                    o = "bgy" === t ? "height" : "width", s = u[o] - c[o];
                                if (s < n) c[o] = u[o] + n - s; else if (n < s) {
                                    var a = c[o] / yn(i, o, l.$el);
                                    a && (l.props[t].steps = r.map(function (t) {
                                        return t - (s - n) / a
                                    }))
                                }
                                u = rt.cover(h, c)
                            }), t.dim = u
                        }
                    }
                }, write: function (t) {
                    var e = t.dim;
                    t.active ? e && Re(this.$el, {
                        backgroundSize: e.width + "px " + e.height + "px",
                        backgroundRepeat: "no-repeat"
                    }) : Re(this.$el, {backgroundSize: "", backgroundRepeat: ""})
                }, events: ["resize"]
            }, methods: {
                reset: function () {
                    var n = this;
                    G(this.getCss(0), function (t, e) {
                        return Re(n.$el, e, "")
                    })
                }, getCss: function (u) {
                    var d = this.props;
                    return Object.keys(d).reduce(function (t, e) {
                        var n = d[e], o = n.steps, i = n.unit, r = n.pos, s = function (t) {
                            void 0 === t && (t = 2);
                            var e = Jr(o, u), n = e[0], i = e[1], r = e[2];
                            return (P(n) ? n + Math.abs(n - i) * r * (n < i ? 1 : -1) : +i).toFixed(t)
                        }();
                        switch (e) {
                            case"x":
                            case"y":
                                i = i || "px", t.transform += " translate" + p(e) + "(" + q(s).toFixed("px" === i ? 0 : 2) + i + ")";
                                break;
                            case"rotate":
                                i = i || "deg", t.transform += " rotate(" + (s + i) + ")";
                                break;
                            case"scale":
                                t.transform += " scale(" + s + ")";
                                break;
                            case"bgy":
                            case"bgx":
                                t["background-position-" + e[2]] = "calc(" + r + " + " + s + "px)";
                                break;
                            case"color":
                            case"backgroundColor":
                            case"borderColor":
                                var a = Jr(o, u), l = a[0], c = a[1], h = a[2];
                                t[e] = "rgba(" + l.map(function (t, e) {
                                    return t += h * (c[e] - t), 3 === e ? q(t) : parseInt(t, 10)
                                }).join(",") + ")";
                                break;
                            case"blur":
                                i = i || "px", t.filter += " blur(" + (s + i) + ")";
                                break;
                            case"hue":
                                i = i || "deg", t.filter += " hue-rotate(" + (s + i) + ")";
                                break;
                            case"fopacity":
                                i = i || "%", t.filter += " opacity(" + (s + i) + ")";
                                break;
                            case"grayscale":
                            case"invert":
                            case"saturate":
                            case"sepia":
                                i = i || "%", t.filter += " " + e + "(" + (s + i) + ")";
                                break;
                            default:
                                t[e] = s
                        }
                        return t
                    }, {transform: "", filter: ""})
                }
            }
        };

    function Jr(t, e) {
        var n = t.length - 1, i = Math.min(Math.floor(n * e), n - 1), r = t.slice(i, i + 2);
        return r.push(1 === e ? 1 : e % (1 / n) * n), r
    }

    var Kr = {
        mixins: [Gr],
        props: {target: String, viewport: Number, easing: Number},
        data: {target: !1, viewport: 1, easing: 1},
        computed: {
            target: function (t, e) {
                var n = t.target;
                return function t(e) {
                    return e ? "offsetTop" in e ? e : t(e.parentNode) : document.body
                }(n && xt(n, e) || e)
            }
        },
        update: {
            read: function (t, e) {
                var n = t.percent;
                if ("scroll" !== e && (n = !1), t.active) {
                    var i, r, o = n;
                    return {
                        percent: n = tt((i = zn(this.target) / (this.viewport || 1)) * (1 - ((r = this.easing) - r * i))),
                        style: o !== n && this.getCss(n)
                    }
                }
            }, write: function (t) {
                var e = t.style;
                t.active ? e && Re(this.$el, e) : this.reset()
            }, events: ["scroll", "resize"]
        }
    }, to = {
        update: {
            write: function () {
                if (!this.stack.length && !this.dragging) {
                    var t = this.getValidIndex(this.index);
                    ~this.prevIndex && this.index === t || this.show(t)
                }
            }, events: ["resize"]
        }
    };

    function eo(t, e, n) {
        var i, r = ro(t, e);
        return n ? r - (i = t, an(e).width / 2 - an(i).width / 2) : Math.min(r, no(e))
    }

    function no(t) {
        return Math.max(0, io(t) - an(t).width)
    }

    function io(t) {
        return so(t).reduce(function (t, e) {
            return an(e).width + t
        }, 0)
    }

    function ro(t, e) {
        return (cn(t).left + (ht ? an(t).width - an(e).width : 0)) * (ht ? -1 : 1)
    }

    function oo(t, e, n) {
        Qt(t, Gt(e, !1, !1, n))
    }

    function so(t) {
        return Zt(t)
    }

    var ao = {
        mixins: [ci, qr, to], props: {center: Boolean, sets: Boolean}, data: {
            center: !1,
            sets: !1,
            attrItem: "uk-slider-item",
            selList: ".uk-slider-items",
            selNav: ".uk-slider-nav",
            clsContainer: "uk-slider-container",
            Transitioner: function (r, i, o, t) {
                var e = t.center, s = t.easing, a = t.list, l = new oe,
                    n = r ? eo(r, a, e) : eo(i, a, e) + an(i).width * o,
                    c = i ? eo(i, a, e) : n + an(r).width * o * (ht ? -1 : 1);
                return {
                    dir: o, show: function (t, e, n) {
                        void 0 === e && (e = 0);
                        var i = n ? "linear" : s;
                        return t -= Math.round(t * tt(e, -1, 1)), this.translate(e), r && this.updateTranslates(), e = r ? e : tt(e, 0, 1), oo(this.getItemIn(), "itemin", {
                            percent: e,
                            duration: t,
                            timing: i,
                            dir: o
                        }), r && oo(this.getItemIn(!0), "itemout", {
                            percent: 1 - e,
                            duration: t,
                            timing: i,
                            dir: o
                        }), Je.start(a, {transform: jr(-c * (ht ? -1 : 1), "px")}, t, i).then(l.resolve, et), l.promise
                    }, stop: function () {
                        return Je.stop(a)
                    }, cancel: function () {
                        Je.cancel(a)
                    }, reset: function () {
                        Re(a, "transform", "")
                    }, forward: function (t, e) {
                        return void 0 === e && (e = this.percent()), Je.cancel(a), this.show(t, e, !0)
                    }, translate: function (t) {
                        var e = this.getDistance() * o * (ht ? -1 : 1);
                        Re(a, "transform", jr(tt(e - e * t - c, -io(a), an(a).width) * (ht ? -1 : 1), "px")), this.updateTranslates(), r && (t = tt(t, -1, 1), oo(this.getItemIn(), "itemtranslatein", {
                            percent: t,
                            dir: o
                        }), oo(this.getItemIn(!0), "itemtranslateout", {percent: 1 - t, dir: o}))
                    }, percent: function () {
                        return Math.abs((Re(a, "transform").split(",")[4] * (ht ? -1 : 1) + n) / (c - n))
                    }, getDistance: function () {
                        return Math.abs(c - n)
                    }, getItemIn: function (t) {
                        void 0 === t && (t = !1);
                        var e = this.getActives(), n = J(so(a), "offsetLeft"),
                            i = pe(n, e[0 < o * (t ? -1 : 1) ? e.length - 1 : 0]);
                        return ~i && n[i + (r && !t ? o : 0)]
                    }, getActives: function () {
                        var n = eo(r || i, a, e);
                        return J(so(a).filter(function (t) {
                            var e = ro(t, a);
                            return n <= e && e + an(t).width <= an(a).width + n
                        }), "offsetLeft")
                    }, updateTranslates: function () {
                        var n = this.getActives();
                        so(a).forEach(function (t) {
                            var e = y(n, t);
                            oo(t, "itemtranslate" + (e ? "in" : "out"), {
                                percent: e ? 1 : 0,
                                dir: t.offsetLeft <= i.offsetLeft ? 1 : -1
                            })
                        })
                    }
                }
            }
        }, computed: {
            avgWidth: function () {
                return io(this.list) / this.length
            }, finite: function (t) {
                return t.finite || Math.ceil(io(this.list)) < an(this.list).width + so(this.list).reduce(function (t, e) {
                    return Math.max(t, an(e).width)
                }, 0) + this.center
            }, maxIndex: function () {
                if (!this.finite || this.center && !this.sets) return this.length - 1;
                if (this.center) return Q(this.sets);
                Re(this.slides, "order", "");
                for (var t = no(this.list), e = this.length; e--;) if (ro(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1);
                return 0
            }, sets: function (t) {
                var o = this, e = t.sets, s = an(this.list).width / (this.center ? 2 : 1), a = 0, l = s, c = 0;
                return !j(e = e && this.slides.reduce(function (t, e, n) {
                    var i = an(e).width;
                    if (a < c + i && (!o.center && n > o.maxIndex && (n = o.maxIndex), !y(t, n))) {
                        var r = o.slides[n + 1];
                        o.center && r && i < l - an(r).width / 2 ? l -= i : (l = s, t.push(n), a = c + s + (o.center ? i / 2 : 0))
                    }
                    return c += i, t
                }, [])) && e
            }, transitionOptions: function () {
                return {center: this.center, list: this.list}
            }
        }, connected: function () {
            He(this.$el, this.clsContainer, !Ie("." + this.clsContainer, this.$el))
        }, update: {
            write: function () {
                var n = this;
                Ae("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function (t) {
                    var e = lt(t, n.attrItem);
                    n.maxIndex && He(t, "uk-hidden", O(e) && (n.sets && !y(n.sets, q(e)) || e > n.maxIndex))
                }), !this.length || this.dragging || this.stack.length || this._translate(1)
            }, events: ["resize"]
        }, events: {
            beforeitemshow: function (t) {
                !this.dragging && this.sets && this.stack.length < 2 && !y(this.sets, this.index) && (this.index = this.getValidIndex());
                var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && 1 < e) {
                    for (var n = 0; n < e; n++) this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
                    t.preventDefault()
                } else this.duration = Fr(this.avgWidth / this.velocity) * (an(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth), this.reorder()
            }, itemshow: function () {
                H(this.prevIndex) || Ne(this._getTransitioner().getItemIn(), this.clsActive)
            }, itemshown: function () {
                var e = this, n = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function (t) {
                    return He(t, e.clsActive, y(n, t))
                }), this.sets && !y(this.sets, q(this.index)) || this.slides.forEach(function (t) {
                    return He(t, e.clsActivated, y(n, t))
                })
            }
        }, methods: {
            reorder: function () {
                var n = this;
                if (Re(this.slides, "order", ""), !this.finite) {
                    var i = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                    if (this.slides.forEach(function (t, e) {
                        return Re(t, "order", 0 < n.dir && e < i ? 1 : n.dir < 0 && e >= n.index ? -1 : "")
                    }), this.center) for (var t = this.slides[i], e = an(this.list).width / 2 - an(t).width / 2, r = 0; 0 < e;) {
                        var o = this.getIndex(--r + i, i), s = this.slides[o];
                        Re(s, "order", i < o ? -2 : -1), e -= an(s).width
                    }
                }
            }, getValidIndex: function (t, e) {
                if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                var n;
                do {
                    if (y(this.sets, t)) return t;
                    n = t, t = this.getIndex(t + this.dir, e)
                } while (t !== n);
                return t
            }
        }
    }, lo = {
        mixins: [Gr], data: {selItem: "!li"}, computed: {
            item: function (t, e) {
                return xt(t.selItem, e)
            }
        }, events: [{
            name: "itemshown", self: !0, el: function () {
                return this.item
            }, handler: function () {
                Re(this.$el, this.getCss(.5))
            }
        }, {
            name: "itemin itemout", self: !0, el: function () {
                return this.item
            }, handler: function (t) {
                var e = t.type, n = t.detail, i = n.percent, r = n.duration, o = n.timing, s = n.dir;
                Je.cancel(this.$el), Re(this.$el, this.getCss(ho(e, s, i))), Je.start(this.$el, this.getCss(co(e) ? .5 : 0 < s ? 1 : 0), r, o).catch(et)
            }
        }, {
            name: "transitioncanceled transitionend", self: !0, el: function () {
                return this.item
            }, handler: function () {
                Je.cancel(this.$el)
            }
        }, {
            name: "itemtranslatein itemtranslateout", self: !0, el: function () {
                return this.item
            }, handler: function (t) {
                var e = t.type, n = t.detail, i = n.percent, r = n.dir;
                Je.cancel(this.$el), Re(this.$el, this.getCss(ho(e, r, i)))
            }
        }]
    };

    function co(t) {
        return c(t, "in")
    }

    function ho(t, e, n) {
        return n /= 2, co(t) ? e < 0 ? 1 - n : n : e < 0 ? n : 1 - n
    }

    var uo, fo, po = Y({}, Pr, {
        fade: {
            show: function () {
                return [{opacity: 0, zIndex: 0}, {zIndex: -1}]
            }, percent: function (t) {
                return 1 - Re(t, "opacity")
            }, translate: function (t) {
                return [{opacity: 1 - t, zIndex: 0}, {zIndex: -1}]
            }
        }, scale: {
            show: function () {
                return [{opacity: 0, transform: Hr(1.5), zIndex: 0}, {zIndex: -1}]
            }, percent: function (t) {
                return 1 - Re(t, "opacity")
            }, translate: function (t) {
                return [{opacity: 1 - t, transform: Hr(1 + .5 * t), zIndex: 0}, {zIndex: -1}]
            }
        }, pull: {
            show: function (t) {
                return t < 0 ? [{transform: jr(30), zIndex: -1}, {transform: jr(), zIndex: 0}] : [{
                    transform: jr(-100),
                    zIndex: 0
                }, {transform: jr(), zIndex: -1}]
            }, percent: function (t, e, n) {
                return n < 0 ? 1 - Or(e) : Or(t)
            }, translate: function (t, e) {
                return e < 0 ? [{transform: jr(30 * t), zIndex: -1}, {
                    transform: jr(-100 * (1 - t)),
                    zIndex: 0
                }] : [{transform: jr(100 * -t), zIndex: 0}, {transform: jr(30 * (1 - t)), zIndex: -1}]
            }
        }, push: {
            show: function (t) {
                return t < 0 ? [{transform: jr(100), zIndex: 0}, {transform: jr(), zIndex: -1}] : [{
                    transform: jr(-30),
                    zIndex: -1
                }, {transform: jr(), zIndex: 0}]
            }, percent: function (t, e, n) {
                return 0 < n ? 1 - Or(e) : Or(t)
            }, translate: function (t, e) {
                return e < 0 ? [{transform: jr(100 * t), zIndex: 0}, {
                    transform: jr(-30 * (1 - t)),
                    zIndex: -1
                }] : [{transform: jr(-30 * t), zIndex: -1}, {transform: jr(100 * (1 - t)), zIndex: 0}]
            }
        }
    }), go = {
        mixins: [ci, Rr, to],
        props: {ratio: String, minHeight: Number, maxHeight: Number},
        data: {
            ratio: "16:9",
            minHeight: !1,
            maxHeight: !1,
            selList: ".uk-slideshow-items",
            attrItem: "uk-slideshow-item",
            selNav: ".uk-slideshow-nav",
            Animations: po
        },
        update: {
            read: function () {
                var t = this.ratio.split(":").map(Number), e = t[0], n = t[1];
                return n = n * this.list.offsetWidth / e || 0, this.minHeight && (n = Math.max(this.minHeight, n)), this.maxHeight && (n = Math.min(this.maxHeight, n)), {height: n - pn(this.list, "height", "content-box")}
            }, write: function (t) {
                var e = t.height;
                0 < e && Re(this.list, "minHeight", e)
            }, events: ["resize"]
        }
    }, vo = {
        mixins: [ci, Mr],
        props: {
            group: String,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },
        data: {
            group: !1,
            threshold: 5,
            clsItem: "uk-sortable-item",
            clsPlaceholder: "uk-sortable-placeholder",
            clsDrag: "uk-sortable-drag",
            clsDragState: "uk-drag",
            clsBase: "uk-sortable",
            clsNoDrag: "uk-sortable-nodrag",
            clsEmpty: "uk-sortable-empty",
            clsCustom: "",
            handle: !1,
            pos: {}
        },
        created: function () {
            var n = this;
            ["init", "start", "move", "end"].forEach(function (t) {
                var e = n[t];
                n[t] = function (t) {
                    Y(n.pos, re(t)), e(t)
                }
            })
        },
        events: {name: pt, passive: !1, handler: "init"},
        computed: {
            isEmpty: {
                get: function () {
                    return j(this.$el.children)
                }, watch: function (t) {
                    He(this.$el, this.clsEmpty, t)
                }, immediate: !0
            }, handles: {
                get: function (t, e) {
                    var n = t.handle;
                    return n ? Ae(n, e) : Zt(e)
                }, watch: function (t, e) {
                    Re(e, {touchAction: "", userSelect: ""}), Re(t, {touchAction: ft ? "none" : "", userSelect: "none"})
                }, immediate: !0
            }
        },
        update: {
            write: function () {
                if (this.drag && Pt(this.placeholder)) {
                    var t = this.pos, e = t.x, n = t.y, i = this.origin, r = i.offsetTop, o = i.offsetLeft,
                        s = this.drag, a = s.offsetHeight, l = s.offsetWidth, c = an(window), h = c.right, u = c.bottom,
                        d = document.elementFromPoint(e, n);
                    Re(this.drag, {top: tt(n - r, 0, u - a), left: tt(e - o, 0, h - l)});
                    var f = this.getSortable(d), p = this.getSortable(this.placeholder), g = f !== p;
                    if (f && !Wt(d, this.placeholder) && (!g || f.group && f.group === p.group)) {
                        if (d = f.$el === d.parentNode && d || Zt(f.$el).filter(function (t) {
                            return Wt(d, t)
                        })[0], g) p.remove(this.placeholder); else if (!d) return;
                        f.insert(this.placeholder, d), y(this.touched, f) || this.touched.push(f)
                    }
                }
            }, events: ["move"]
        },
        methods: {
            init: function (t) {
                var e = t.target, n = t.button, i = t.defaultPrevented, r = Zt(this.$el).filter(function (t) {
                    return Wt(e, t)
                })[0];
                !r || i || 0 < n || Ft(e) || Wt(e, "." + this.clsNoDrag) || this.handle && !Wt(e, this.handle) || (t.preventDefault(), this.touched = [this], this.placeholder = r, this.origin = Y({
                    target: e,
                    index: pe(r)
                }, this.pos), Ut(document, gt, this.move), Ut(document, vt, this.end), this.threshold || this.start(t))
            }, start: function (t) {
                var e, n;
                this.drag = (ot(n = we(this.$container, (e = this.placeholder).outerHTML.replace(/(^<)li|li(\/>$)/g, "$1div$2")), "style", ot(n, "style") + ";margin:0!important"), Re(n, Y({
                    boxSizing: "border-box",
                    width: e.offsetWidth,
                    height: e.offsetHeight,
                    overflow: "hidden"
                }, Re(e, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), un(n.firstElementChild, un(e.firstElementChild)), n);
                var i, r, o = this.placeholder.getBoundingClientRect(), s = o.left, a = o.top;
                Y(this.origin, {
                    offsetLeft: this.pos.x - s,
                    offsetTop: this.pos.y - a
                }), Ne(this.drag, this.clsDrag, this.clsCustom), Ne(this.placeholder, this.clsPlaceholder), Ne(this.$el.children, this.clsItem), Ne(document.documentElement, this.clsDragState), Qt(this.$el, "start", [this, this.placeholder]), i = this.pos, r = Date.now(), uo = setInterval(function () {
                    var t = i.x, a = i.y;
                    a += window.pageYOffset;
                    var l = .3 * (Date.now() - r);
                    r = Date.now(), _n(document.elementFromPoint(t, i.y)).some(function (t) {
                        var e = t.scrollTop, n = t.scrollHeight, i = an(qn(t)), r = i.top, o = i.bottom, s = i.height;
                        if (r < a && a < r + 30) e -= l; else {
                            if (!(a < o && o - 30 < a)) return;
                            e += l
                        }
                        if (0 < e && e < n - s) return jn(t, e), !0
                    })
                }, 15), this.move(t)
            }, move: function (t) {
                this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
            }, end: function (t) {
                if (Xt(document, gt, this.move), Xt(document, vt, this.end), Xt(window, "scroll", this.scroll), this.drag) {
                    clearInterval(uo);
                    var e = this.getSortable(this.placeholder);
                    this === e ? this.origin.index !== pe(this.placeholder) && Qt(this.$el, "moved", [this, this.placeholder]) : (Qt(e.$el, "added", [e, this.placeholder]), Qt(this.$el, "removed", [this, this.placeholder])), Qt(this.$el, "stop", [this, this.placeholder]), Ce(this.drag), this.drag = null;
                    var n = this.touched.map(function (t) {
                        return t.clsPlaceholder + " " + t.clsItem
                    }).join(" ");
                    this.touched.forEach(function (t) {
                        return De(t.$el.children, n)
                    }), De(document.documentElement, this.clsDragState)
                } else "touchend" === t.type && t.target.click()
            }, insert: function (e, n) {
                var i = this;

                function t() {
                    var t;
                    n ? (!Wt(e, i.$el) || (t = n, e.parentNode === t.parentNode && pe(e) > pe(t)) ? ye : xe)(n, e) : we(i.$el, e)
                }

                Ne(this.$el.children, this.clsItem), this.animation ? this.animate(t) : t()
            }, remove: function (t) {
                Wt(t, this.$el) && (this.animation ? this.animate(function () {
                    return Ce(t)
                }) : Ce(t))
            }, getSortable: function (t) {
                return t && (this.$getComponent(t, "sortable") || this.getSortable(t.parentNode))
            }
        }
    }, mo = [], wo = {
        mixins: [or, hi, wi],
        args: "title",
        props: {delay: Number, title: String},
        data: {
            pos: "top",
            title: "",
            delay: 0,
            animation: ["uk-animation-scale-up"],
            duration: 100,
            cls: "uk-active",
            clsPos: "uk-tooltip"
        },
        beforeConnect: function () {
            this._hasTitle = st(this.$el, "title"), ot(this.$el, {title: "", "aria-expanded": !1})
        },
        disconnected: function () {
            this.hide(), ot(this.$el, {title: this._hasTitle ? this.title : null, "aria-expanded": null})
        },
        methods: {
            show: function () {
                var e = this;
                !this.isActive() && this.title && (mo.forEach(function (t) {
                    return t.hide()
                }), mo.push(this), this._unbind = Ut(document, vt, function (t) {
                    return !Wt(t.target, e.$el) && e.hide()
                }), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay))
            }, hide: function () {
                var t = this;
                this.isActive() && !Bt(this.$el, "input:focus") && this.toggleElement(this.tooltip, !1, !1).then(function () {
                    mo.splice(mo.indexOf(t), 1), clearTimeout(t.showTimer), clearInterval(t.hideTimer), t.tooltip = Ce(t.tooltip), t._unbind()
                })
            }, _show: function () {
                var e = this;
                this.tooltip = we(this.container, '<div class="' + this.clsPos + '"> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), Ut(this.tooltip, "toggled", function () {
                    var t = e.isToggled(e.tooltip);
                    ot(e.$el, "aria-expanded", t), t && (e.positionAt(e.tooltip, e.$el), e.origin = "y" === e.getAxis() ? wn(e.dir) + "-" + e.align : e.align + "-" + wn(e.dir))
                }), this.toggleElement(this.tooltip, !0), this.hideTimer = setInterval(function () {
                    return !_t(e.$el) && e.hide()
                }, 150)
            }, isActive: function () {
                return y(mo, this)
            }
        },
        events: ((fo = {focus: "show", blur: "hide"})[mt + " " + wt] = function (t) {
            ie(t) || (t.type === mt ? this.show() : this.hide())
        }, fo[pt] = function (t) {
            ie(t) && (this.isActive() ? this.hide() : this.show())
        }, fo)
    }, yo = {
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            msgInvalidMime: "Invalid File Type: %s",
            msgInvalidName: "Invalid File Name: %s",
            msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: et,
            beforeAll: et,
            beforeSend: et,
            complete: et,
            completeAll: et,
            error: et,
            fail: et,
            load: et,
            loadEnd: et,
            loadStart: et,
            progress: et
        },
        events: {
            change: function (t) {
                Bt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
            }, drop: function (t) {
                bo(t);
                var e = t.dataTransfer;
                e && e.files && (De(this.$el, this.clsDragover), this.upload(e.files))
            }, dragenter: function (t) {
                bo(t)
            }, dragover: function (t) {
                bo(t), Ne(this.$el, this.clsDragover)
            }, dragleave: function (t) {
                bo(t), De(this.$el, this.clsDragover)
            }
        },
        methods: {
            upload: function (t) {
                var i = this;
                if (t.length) {
                    Qt(this.$el, "upload", [t]);
                    for (var e = 0; e < t.length; e++) {
                        if (this.maxSize && 1e3 * this.maxSize < t[e].size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                        if (this.allow && !xo(this.allow, t[e].name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow));
                        if (this.mime && !xo(this.mime, t[e].type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime))
                    }
                    this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                    var r = function (t, e) {
                        for (var n = [], i = 0; i < t.length; i += e) {
                            for (var r = [], o = 0; o < e; o++) r.push(t[i + o]);
                            n.push(r)
                        }
                        return n
                    }(t, this.concurrent), o = function (t) {
                        var e = new FormData;
                        for (var n in t.forEach(function (t) {
                            return e.append(i.name, t)
                        }), i.params) e.append(n, i.params[n]);
                        ue(i.url, {
                            data: e, method: i.method, responseType: i.type, beforeSend: function (t) {
                                var e = t.xhr;
                                e.upload && Ut(e.upload, "progress", i.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function (t) {
                                    return Ut(e, t.toLowerCase(), i[t])
                                }), i.beforeSend(t)
                            }
                        }).then(function (t) {
                            i.complete(t), r.length ? o(r.shift()) : i.completeAll(t)
                        }, function (t) {
                            return i.error(t)
                        })
                    };
                    o(r.shift())
                }
            }
        }
    };

    function xo(t, e) {
        return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
    }

    function bo(t) {
        t.preventDefault(), t.stopPropagation()
    }

    var Co, ko, Lo, To = Object.freeze({
        __proto__: null,
        Countdown: Sr,
        Filter: Br,
        Lightbox: Ur,
        LightboxPanel: Wr,
        Notification: Yr,
        Parallax: Kr,
        Slider: ao,
        SliderParallax: lo,
        Slideshow: go,
        SlideshowParallax: lo,
        Sortable: vo,
        Tooltip: wo,
        Upload: yo
    });

    function So(t, e) {
        ni.component(e, t)
    }

    return G(Tr, So), G(To, So), ni.use(function (r) {
        fe(function () {
            var e;
            r.update(), Ut(window, "load resize", function () {
                return r.update(null, "resize")
            }), Ut(document, "loadedmetadata load", function (t) {
                var e = t.target;
                return r.update(e, "resize")
            }, !0), Ut(window, "scroll", function (t) {
                e || (e = !0, bn.write(function () {
                    return e = !1
                }), r.update(null, t.type))
            }, {passive: !0, capture: !0});
            var n, i = 0;
            Ut(document, "animationstart", function (t) {
                var e = t.target;
                (Re(e, "animationName") || "").match(/^uk-.*(left|right)/) && (i++, Re(document.body, "overflowX", "hidden"), setTimeout(function () {
                    --i || Re(document.body, "overflowX", "")
                }, Z(Re(e, "animationDuration")) + 100))
            }, !0), Ut(document, pt, function (t) {
                if (n && n(), ie(t)) {
                    var s = re(t), a = "tagName" in t.target ? t.target : t.target.parentNode;
                    n = Yt(document, vt + " " + yt, function (t) {
                        var e = re(t), r = e.x, o = e.y;
                        (a && r && 100 < Math.abs(s.x - r) || o && 100 < Math.abs(s.y - o)) && setTimeout(function () {
                            var t, e, n, i;
                            Qt(a, "swipe"), Qt(a, "swipe" + (t = s.x, e = s.y, n = r, i = o, Math.abs(t - n) >= Math.abs(e - i) ? 0 < t - n ? "Left" : "Right" : 0 < e - i ? "Up" : "Down"))
                        })
                    })
                }
            }, {passive: !0})
        })
    }), ko = (Co = ni).connect, Lo = Co.disconnect, "MutationObserver" in window && bn.read(function () {
        document.body && Ee(document.body, ko), new MutationObserver(function (t) {
            var i = [];
            t.forEach(function (t) {
                return e = i, n = t.target, void (("attributes" !== t.type ? function (t) {
                    for (var e = t.addedNodes, n = t.removedNodes, i = 0; i < e.length; i++) Ee(e[i], ko);
                    for (var r = 0; r < n.length; r++) Ee(n[r], Lo);
                    return !0
                } : function (t) {
                    var e = t.target, n = t.attributeName;
                    if ("href" === n) return !0;
                    var i = ei(n);
                    if (i && i in Co) {
                        if (st(e, n)) return Co[i](e), !0;
                        var r = Co.getComponent(e, i);
                        return r ? (r.$destroy(), !0) : void 0
                    }
                })(t) && !e.some(function (t) {
                    return t.contains(n)
                }) && e.push(n.contains ? n : n.parentNode));
                var e, n
            }), i.forEach(function (t) {
                return Co.update(t)
            })
        }).observe(document, {childList: !0, subtree: !0, characterData: !0, attributes: !0}), Co._initialized = !0
    }), ni
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikiticons", e) : (t = t || self).UIkitIcons = e()
}(this, function () {
    "use strict";

    function e(t) {
        e.installed || t.icon.add({
            "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',
            album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
            "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
            "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
            "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
            "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
            ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
            behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
            bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
            bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
            bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
            bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
            calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
            camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
            cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
            check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
            "chevron-double-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
            "chevron-double-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
            "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
            "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
            "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
            "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
            clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
            close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
            "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
            "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
            code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
            cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
            comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
            commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
            comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
            copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
            "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
            database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
            desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
            download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
            dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
            etsy: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',
            expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
            facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
            "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
            "file-pdf": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
            "file-text": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
            file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
            flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
            folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
            forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
            foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
            future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
            "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',
            "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',
            "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
            github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
            gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
            "google-plus": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"/><polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9"/></svg>',
            google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
            grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
            happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
            hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
            heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
            history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
            home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
            image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
            instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
            italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
            joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
            laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
            lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',
            link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
            linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
            list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
            location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
            lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
            mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
            menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
            microphone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
            "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
            minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',
            "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
            more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
            move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
            nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
            pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',
            "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',
            pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
            "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
            phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
            pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
            "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
            play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
            "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
            plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
            print: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
            pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
            push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
            question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',
            "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
            receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
            reddit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
            refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
            reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
            rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
            search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
            server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
            settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
            shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
            "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
            "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
            social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
            soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
            star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
            strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
            table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
            "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
            tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
            tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
            thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
            trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
            "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',
            "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',
            "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',
            "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',
            tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
            tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
            tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
            twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
            uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
            unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
            upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
            user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
            users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
            "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',
            vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
            warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
            whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
            wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
            world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
            xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
            yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
            youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>'
        })
    }

    return "undefined" != typeof window && window.UIkit && window.UIkit.use(e), e
}), function (t) {
    if ("function" == typeof define && define.amd) define(["jquery"], t); else if ("object" == typeof module && module.exports) {
        var e = require("jquery");
        t(e), module.exports = e
    } else t(jQuery)
}(function (f) {
    function s(t) {
        this.init(t)
    }

    s.prototype = {
        value: 0,
        size: 100,
        startAngle: -Math.PI,
        thickness: "auto",
        fill: {gradient: ["#006db6", "#006db6"]},
        emptyFill: "rgba(0, 0, 0, .1)",
        animation: {duration: 1200, easing: "circleProgressEasing"},
        animationStartValue: 0,
        reverse: !1,
        lineCap: "butt",
        insertMode: "prepend",
        constructor: s,
        el: null,
        canvas: null,
        ctx: null,
        radius: 0,
        arcFill: null,
        lastFrameValue: 0,
        init: function (t) {
            f.extend(this, t), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited")
        },
        initWidget: function () {
            this.canvas || (this.canvas = f("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
            var t = this.canvas;
            if (t.width = this.size, t.height = this.size, this.ctx = t.getContext("2d"), 1 < window.devicePixelRatio) {
                var e = window.devicePixelRatio;
                t.style.width = t.style.height = this.size + "px", t.width = t.height = this.size * e, this.ctx.scale(e, e)
            }
        },
        initFill: function () {
            function t() {
                var t = f("<canvas>")[0];
                t.width = n.size, t.height = n.size, t.getContext("2d").drawImage(e, 0, 0, o, o), n.arcFill = n.ctx.createPattern(t, "no-repeat"), n.drawFrame(n.lastFrameValue)
            }

            var e, n = this, i = this.fill, r = this.ctx, o = this.size;
            if (!i) throw Error("The fill is not specified!");
            if ("string" == typeof i && (i = {color: i}), i.color && (this.arcFill = i.color), i.gradient) {
                var s = i.gradient;
                if (1 == s.length) this.arcFill = s[0]; else if (1 < s.length) {
                    for (var a = i.gradientAngle || 0, l = i.gradientDirection || [o / 2 * (1 - Math.cos(a)), o / 2 * (1 + Math.sin(a)), o / 2 * (1 + Math.cos(a)), o / 2 * (1 - Math.sin(a))], c = r.createLinearGradient.apply(r, l), h = 0; h < s.length; h++) {
                        var u = s[h], d = h / (s.length - 1);
                        f.isArray(u) && (d = u[1], u = u[0]), c.addColorStop(d, u)
                    }
                    this.arcFill = c
                }
            }
            i.image && (i.image instanceof Image ? e = i.image : (e = new Image).src = i.image, e.complete ? t() : e.onload = t)
        },
        draw: function () {
            this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
        },
        drawFrame: function (t) {
            this.lastFrameValue = t, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(t), this.drawArc(t)
        },
        drawArc: function (t) {
            if (0 !== t) {
                var e = this.ctx, n = this.radius, i = this.getThickness(), r = this.startAngle;
                e.save(), e.beginPath(), this.reverse ? e.arc(n, n, n - i / 2, r - 2 * Math.PI * t, r) : e.arc(n, n, n - i / 2, r, r + 2 * Math.PI * t), e.lineWidth = i, e.lineCap = this.lineCap, e.strokeStyle = this.arcFill, e.stroke(), e.restore()
            }
        },
        drawEmptyArc: function (t) {
            var e = this.ctx, n = this.radius, i = this.getThickness(), r = this.startAngle;
            t < 1 && (e.save(), e.beginPath(), t <= 0 ? e.arc(n, n, n - i / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(n, n, n - i / 2, r, r - 2 * Math.PI * t) : e.arc(n, n, n - i / 2, r + 2 * Math.PI * t, r), e.lineWidth = i, e.strokeStyle = this.emptyFill, e.stroke(), e.restore())
        },
        drawAnimated: function (n) {
            var i = this, r = this.el, t = f(this.canvas);
            t.stop(!0, !1), r.trigger("circle-animation-start"), t.css({animationProgress: 0}).animate({animationProgress: 1}, f.extend({}, this.animation, {
                step: function (t) {
                    var e = i.animationStartValue * (1 - t) + n * t;
                    i.drawFrame(e), r.trigger("circle-animation-progress", [t, e])
                }
            })).promise().always(function () {
                r.trigger("circle-animation-end")
            })
        },
        getThickness: function () {
            return f.isNumeric(this.thickness) ? this.thickness : this.size / 14
        },
        getValue: function () {
            return this.value
        },
        setValue: function (t) {
            this.animation && (this.animationStartValue = this.lastFrameValue), this.value = t, this.draw()
        }
    }, f.circleProgress = {defaults: s.prototype}, f.easing.circleProgressEasing = function (t) {
        return t < .5 ? .5 * (t *= 2) * t * t : 1 - .5 * (t = 2 - 2 * t) * t * t
    }, f.fn.circleProgress = function (r, t) {
        var o = "circle-progress", e = this.data(o);
        if ("widget" == r) {
            if (!e) throw Error('Calling "widget" method on not initialized instance is forbidden');
            return e.canvas
        }
        if ("value" != r) return this.each(function () {
            var t = f(this), e = t.data(o), n = f.isPlainObject(r) ? r : {};
            if (e) e.init(n); else {
                var i = f.extend({}, t.data());
                "string" == typeof i.fill && (i.fill = JSON.parse(i.fill)), "string" == typeof i.animation && (i.animation = JSON.parse(i.animation)), (n = f.extend(i, n)).el = t, e = new s(n), t.data(o, e)
            }
        });
        if (!e) throw Error('Calling "value" method on not initialized instance is forbidden');
        if (void 0 === t) return e.getValue();
        var n = t;
        return this.each(function () {
            f(this).data(o).setValue(n)
        })
    }
}), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e()
}(this, function () {
    return r = {}, n.m = i = [function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function (t, e, n) {
            return e && a(t.prototype, e), n && a(t, n), t
        }, r = n(1), l = n(3), o = (i(s, [{
            key: "toggle", value: function () {
                this.pause.status ? this.start() : this.stop()
            }
        }, {
            key: "stop", value: function () {
                this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
            }
        }, {
            key: "start", value: function () {
                this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
            }
        }, {
            key: "destroy", value: function () {
                this.reset(!1), this.options.onDestroy(this)
            }
        }, {
            key: "reset", value: function () {
                var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
            }
        }, {
            key: "begin", value: function () {
                var t = this;
                this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
                    t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                }, this.startDelay)
            }
        }, {
            key: "typewrite", value: function (r, o) {
                var s = this;
                this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                var t = this.humanizer(this.typeSpeed), a = 1;
                return !0 === this.pause.status ? void this.setPauseStatus(r, o, !0) : void (this.timeout = setTimeout(function () {
                    o = l.htmlParser.typeHtmlChars(r, o, s);
                    var t = 0, e = r.substr(o);
                    if ("^" === e.charAt(0) && /^\^\d+/.test(e)) {
                        var n = 1;
                        n += (e = /\d+/.exec(e)[0]).length, t = parseInt(e), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), r = r.substring(0, o) + r.substring(o + n), s.toggleBlinking(!0)
                    }
                    if ("`" === e.charAt(0)) {
                        for (; "`" !== r.substr(o + a).charAt(0) && !(o + ++a > r.length);) ;
                        var i = r.substring(0, o);
                        r = i + r.substring(i.length + 1, o + a) + r.substring(o + a + 1), a--
                    }
                    s.timeout = setTimeout(function () {
                        s.toggleBlinking(!1), o >= r.length ? s.doneTyping(r, o) : s.keepTyping(r, o, a), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
                    }, t)
                }, t))
            }
        }, {
            key: "keepTyping", value: function (t, e, n) {
                0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += n;
                var i = t.substr(0, e);
                this.replaceText(i), this.typewrite(t, e)
            }
        }, {
            key: "doneTyping", value: function (t, e) {
                var n = this;
                this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
                    n.backspace(t, e)
                }, this.backDelay))
            }
        }, {
            key: "backspace", value: function (n, i) {
                var r = this;
                if (!0 !== this.pause.status) {
                    if (this.fadeOut) return this.initFadeOut();
                    this.toggleBlinking(!1);
                    var t = this.humanizer(this.backSpeed);
                    this.timeout = setTimeout(function () {
                        i = l.htmlParser.backSpaceHtmlChars(n, i, r);
                        var t = n.substr(0, i);
                        if (r.replaceText(t), r.smartBackspace) {
                            var e = r.strings[r.arrayPos + 1];
                            e && t === e.substr(0, i) ? r.stopNum = i : r.stopNum = 0
                        }
                        i > r.stopNum ? (i--, r.backspace(n, i)) : i <= r.stopNum && (r.arrayPos++, r.arrayPos === r.strings.length ? (r.arrayPos = 0, r.options.onLastStringBackspaced(), r.shuffleStringsIfNeeded(), r.begin()) : r.typewrite(r.strings[r.sequence[r.arrayPos]], i))
                    }, t)
                } else this.setPauseStatus(n, i, !0)
            }
        }, {
            key: "complete", value: function () {
                this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
            }
        }, {
            key: "setPauseStatus", value: function (t, e, n) {
                this.pause.typewrite = n, this.pause.curString = t, this.pause.curStrPos = e
            }
        }, {
            key: "toggleBlinking", value: function (t) {
                this.cursor && (this.pause.status || this.cursorBlinking !== t && ((this.cursorBlinking = t) ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
            }
        }, {
            key: "humanizer", value: function (t) {
                return Math.round(Math.random() * t / 2) + t
            }
        }, {
            key: "shuffleStringsIfNeeded", value: function () {
                this.shuffle && (this.sequence = this.sequence.sort(function () {
                    return Math.random() - .5
                }))
            }
        }, {
            key: "initFadeOut", value: function () {
                var t = this;
                return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
                    t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
                }, this.fadeOutDelay)
            }
        }, {
            key: "replaceText", value: function (t) {
                this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
            }
        }, {
            key: "bindFocusEvents", value: function () {
                var e = this;
                this.isInput && (this.el.addEventListener("focus", function (t) {
                    e.stop()
                }), this.el.addEventListener("blur", function (t) {
                    e.el.value && 0 !== e.el.value.length || e.start()
                }))
            }
        }, {
            key: "insertCursor", value: function () {
                this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
            }
        }]), s);

        function s(t, e) {
            (function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, s), r.initializer.load(this, e, t), this.begin()
        }

        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        e.default = o, t.exports = e.default
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i, a = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, r = function (t, e, n) {
            return e && h(t.prototype, e), n && h(t, n), t
        }, o = n(2), l = (i = o) && i.__esModule ? i : {default: i}, s = (r(c, [{
            key: "load", value: function (t, e, n) {
                if (t.el = "string" == typeof n ? document.querySelector(n) : n, t.options = a({}, l.default, e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
                    return t.trim()
                }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                    t.strings = [], t.stringsElement.style.display = "none";
                    var i = Array.prototype.slice.apply(t.stringsElement.children), r = i.length;
                    if (r) for (var o = 0; o < r; o += 1) {
                        var s = i[o];
                        t.strings.push(s.innerHTML.trim())
                    }
                }
                for (var o in t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                    status: !1,
                    typewrite: !0,
                    curString: "",
                    curStrPos: 0
                }, t.typingComplete = !1, t.strings) t.sequence[o] = o;
                t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
            }
        }, {
            key: "getCurrentElContent", value: function (t) {
                return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
            }
        }, {
            key: "appendAnimationCss", value: function (t) {
                var e = "data-typed-js-css";
                if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                    var n = document.createElement("style");
                    n.type = "text/css", n.setAttribute(e, !0);
                    var i = "";
                    t.showCursor && (i += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (i += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== n.length && (n.innerHTML = i, document.body.appendChild(n))
                }
            }
        }]), c);

        function c() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c)
        }

        function h(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        var u = new (e.default = s);
        e.initializer = u
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function (t) {
            },
            onComplete: function (t) {
            },
            preStringTyped: function (t, e) {
            },
            onStringTyped: function (t, e) {
            },
            onLastStringBackspaced: function (t) {
            },
            onTypingPaused: function (t, e) {
            },
            onTypingResumed: function (t, e) {
            },
            onReset: function (t) {
            },
            onStop: function (t, e) {
            },
            onStart: function (t, e) {
            },
            onDestroy: function (t) {
            }
        }, t.exports = e.default
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = (function (t, e, n) {
            return e && r(t.prototype, e), n && r(t, n), t
        }(i, [{
            key: "typeHtmlChars", value: function (t, e, n) {
                if ("html" !== n.contentType) return e;
                var i = t.substr(e).charAt(0);
                if ("<" === i || "&" === i) {
                    var r;
                    for (r = "<" === i ? ">" : ";"; t.substr(e + 1).charAt(0) !== r && !(++e + 1 > t.length);) ;
                    e++
                }
                return e
            }
        }, {
            key: "backSpaceHtmlChars", value: function (t, e, n) {
                if ("html" !== n.contentType) return e;
                var i = t.substr(e).charAt(0);
                if (">" === i || ";" === i) {
                    var r;
                    for (r = ">" === i ? "<" : "&"; t.substr(e - 1).charAt(0) !== r && !(--e < 0);) ;
                    e--
                }
                return e
            }
        }]), i);

        function i() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, i)
        }

        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        var o = new (e.default = n);
        e.htmlParser = o
    }], n.c = r, n.p = "", n(0);

    function n(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {exports: {}, id: t, loaded: !1};
        return i[t].call(e.exports, e, e.exports, n), e.loaded = !0, e.exports
    }

    var i, r
});