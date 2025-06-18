// !(function (e) {
//   var t = {};
//   function i(n) {
//     if (t[n]) return t[n].exports;
//     var s = (t[n] = { i: n, l: !1, exports: {} });
//     return e[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
//   }
//   (i.m = e),
//     (i.c = t),
//     (i.d = function (e, t, n) {
//       i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
//     }),
//     (i.r = function (e) {
//       "undefined" != typeof Symbol &&
//         Symbol.toStringTag &&
//         Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
//         Object.defineProperty(e, "__esModule", { value: !0 });
//     }),
//     (i.t = function (e, t) {
//       if ((1 & t && (e = i(e)), 8 & t)) return e;
//       if (4 & t && "object" == typeof e && e && e.__esModule) return e;
//       var n = Object.create(null);
//       if (
//         (i.r(n),
//         Object.defineProperty(n, "default", { enumerable: !0, value: e }),
//         2 & t && "string" != typeof e)
//       )
//         for (var s in e)
//           i.d(
//             n,
//             s,
//             function (t) {
//               return e[t];
//             }.bind(null, s)
//           );
//       return n;
//     }),
//     (i.n = function (e) {
//       var t =
//         e && e.__esModule
//           ? function () {
//               return e.default;
//             }
//           : function () {
//               return e;
//             };
//       return i.d(t, "a", t), t;
//     }),
//     (i.o = function (e, t) {
//       return Object.prototype.hasOwnProperty.call(e, t);
//     }),
//     (i.p = ""),
//     i((i.s = 2));
// })
// ([
//   function (e, t, i) {
//     var n;
//     /*!
//      * jQuery JavaScript Library v3.6.4
//      * https://jquery.com/
//      *
//      * Includes Sizzle.js
//      * https://sizzlejs.com/
//      *
//      * Copyright OpenJS Foundation and other contributors
//      * Released under the MIT license
//      * https://jquery.org/license
//      *
//      * Date: 2023-03-08T15:28Z
//      */ !(function (t, i) {
//       "use strict";
//       "object" == typeof e.exports
//         ? (e.exports = t.document
//             ? i(t, !0)
//             : function (e) {
//                 if (!e.document)
//                   throw new Error("jQuery requires a window with a document");
//                 return i(e);
//               })
//         : i(t);
//     })("undefined" != typeof window ? window : this, function (i, s) {
//       "use strict";
//       var r = [],
//         a = Object.getPrototypeOf,
//         o = r.slice,
//         l = r.flat
//           ? function (e) {
//               return r.flat.call(e);
//             }
//           : function (e) {
//               return r.concat.apply([], e);
//             },
//         u = r.push,
//         d = r.indexOf,
//         c = {},
//         h = c.toString,
//         p = c.hasOwnProperty,
//         f = p.toString,
//         v = f.call(Object),
//         m = {},
//         g = function (e) {
//           return (
//             "function" == typeof e &&
//             "number" != typeof e.nodeType &&
//             "function" != typeof e.item
//           );
//         },
//         y = function (e) {
//           return null != e && e === e.window;
//         },
//         b = i.document,
//         w = { type: !0, src: !0, nonce: !0, noModule: !0 };
//       function x(e, t, i) {
//         var n,
//           s,
//           r = (i = i || b).createElement("script");
//         if (((r.text = e), t))
//           for (n in w)
//             (s = t[n] || (t.getAttribute && t.getAttribute(n))) &&
//               r.setAttribute(n, s);
//         i.head.appendChild(r).parentNode.removeChild(r);
//       }
//       function E(e) {
//         return null == e
//           ? e + ""
//           : "object" == typeof e || "function" == typeof e
//           ? c[h.call(e)] || "object"
//           : typeof e;
//       }
//       var T = function (e, t) {
//         return new T.fn.init(e, t);
//       };
//       function C(e) {
//         var t = !!e && "length" in e && e.length,
//           i = E(e);
//         return (
//           !g(e) &&
//           !y(e) &&
//           ("array" === i ||
//             0 === t ||
//             ("number" == typeof t && t > 0 && t - 1 in e))
//         );
//       }
//       (T.fn = T.prototype =
//         {
//           jquery: "3.6.4",
//           constructor: T,
//           length: 0,
//           toArray: function () {
//             return o.call(this);
//           },
//           get: function (e) {
//             return null == e
//               ? o.call(this)
//               : e < 0
//               ? this[e + this.length]
//               : this[e];
//           },
//           pushStack: function (e) {
//             var t = T.merge(this.constructor(), e);
//             return (t.prevObject = this), t;
//           },
//           each: function (e) {
//             return T.each(this, e);
//           },
//           map: function (e) {
//             return this.pushStack(
//               T.map(this, function (t, i) {
//                 return e.call(t, i, t);
//               })
//             );
//           },
//           slice: function () {
//             return this.pushStack(o.apply(this, arguments));
//           },
//           first: function () {
//             return this.eq(0);
//           },
//           last: function () {
//             return this.eq(-1);
//           },
//           even: function () {
//             return this.pushStack(
//               T.grep(this, function (e, t) {
//                 return (t + 1) % 2;
//               })
//             );
//           },
//           odd: function () {
//             return this.pushStack(
//               T.grep(this, function (e, t) {
//                 return t % 2;
//               })
//             );
//           },
//           eq: function (e) {
//             var t = this.length,
//               i = +e + (e < 0 ? t : 0);
//             return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
//           },
//           end: function () {
//             return this.prevObject || this.constructor();
//           },
//           push: u,
//           sort: r.sort,
//           splice: r.splice,
//         }),
//         (T.extend = T.fn.extend =
//           function () {
//             var e,
//               t,
//               i,
//               n,
//               s,
//               r,
//               a = arguments[0] || {},
//               o = 1,
//               l = arguments.length,
//               u = !1;
//             for (
//               "boolean" == typeof a && ((u = a), (a = arguments[o] || {}), o++),
//                 "object" == typeof a || g(a) || (a = {}),
//                 o === l && ((a = this), o--);
//               o < l;
//               o++
//             )
//               if (null != (e = arguments[o]))
//                 for (t in e)
//                   (n = e[t]),
//                     "__proto__" !== t &&
//                       a !== n &&
//                       (u && n && (T.isPlainObject(n) || (s = Array.isArray(n)))
//                         ? ((i = a[t]),
//                           (r =
//                             s && !Array.isArray(i)
//                               ? []
//                               : s || T.isPlainObject(i)
//                               ? i
//                               : {}),
//                           (s = !1),
//                           (a[t] = T.extend(u, r, n)))
//                         : void 0 !== n && (a[t] = n));
//             return a;
//           }),
//         T.extend({
//           expando: "jQuery" + ("3.6.4" + Math.random()).replace(/\D/g, ""),
//           isReady: !0,
//           error: function (e) {
//             throw new Error(e);
//           },
//           noop: function () {},
//           isPlainObject: function (e) {
//             var t, i;
//             return (
//               !(!e || "[object Object]" !== h.call(e)) &&
//               (!(t = a(e)) ||
//                 ("function" ==
//                   typeof (i = p.call(t, "constructor") && t.constructor) &&
//                   f.call(i) === v))
//             );
//           },
//           isEmptyObject: function (e) {
//             var t;
//             for (t in e) return !1;
//             return !0;
//           },
//           globalEval: function (e, t, i) {
//             x(e, { nonce: t && t.nonce }, i);
//           },
//           each: function (e, t) {
//             var i,
//               n = 0;
//             if (C(e))
//               for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
//             else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
//             return e;
//           },
//           makeArray: function (e, t) {
//             var i = t || [];
//             return (
//               null != e &&
//                 (C(Object(e))
//                   ? T.merge(i, "string" == typeof e ? [e] : e)
//                   : u.call(i, e)),
//               i
//             );
//           },
//           inArray: function (e, t, i) {
//             return null == t ? -1 : d.call(t, e, i);
//           },
//           merge: function (e, t) {
//             for (var i = +t.length, n = 0, s = e.length; n < i; n++)
//               e[s++] = t[n];
//             return (e.length = s), e;
//           },
//           grep: function (e, t, i) {
//             for (var n = [], s = 0, r = e.length, a = !i; s < r; s++)
//               !t(e[s], s) !== a && n.push(e[s]);
//             return n;
//           },
//           map: function (e, t, i) {
//             var n,
//               s,
//               r = 0,
//               a = [];
//             if (C(e))
//               for (n = e.length; r < n; r++)
//                 null != (s = t(e[r], r, i)) && a.push(s);
//             else for (r in e) null != (s = t(e[r], r, i)) && a.push(s);
//             return l(a);
//           },
//           guid: 1,
//           support: m,
//         }),
//         "function" == typeof Symbol &&
//           (T.fn[Symbol.iterator] = r[Symbol.iterator]),
//         T.each(
//           "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
//             " "
//           ),
//           function (e, t) {
//             c["[object " + t + "]"] = t.toLowerCase();
//           }
//         );
//       var S =
//         /*!
//          * Sizzle CSS Selector Engine v2.3.10
//          * https://sizzlejs.com/
//          *
//          * Copyright JS Foundation and other contributors
//          * Released under the MIT license
//          * https://js.foundation/
//          *
//          * Date: 2023-02-14
//          */
//         (function (e) {
//           var t,
//             i,
//             n,
//             s,
//             r,
//             a,
//             o,
//             l,
//             u,
//             d,
//             c,
//             h,
//             p,
//             f,
//             v,
//             m,
//             g,
//             y,
//             b,
//             w = "sizzle" + 1 * new Date(),
//             x = e.document,
//             E = 0,
//             T = 0,
//             C = le(),
//             S = le(),
//             M = le(),
//             k = le(),
//             P = function (e, t) {
//               return e === t && (c = !0), 0;
//             },
//             L = {}.hasOwnProperty,
//             O = [],
//             z = O.pop,
//             A = O.push,
//             D = O.push,
//             $ = O.slice,
//             N = function (e, t) {
//               for (var i = 0, n = e.length; i < n; i++)
//                 if (e[i] === t) return i;
//               return -1;
//             },
//             I =
//               "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
//             j = "[\\x20\\t\\r\\n\\f]",
//             H =
//               "(?:\\\\[\\da-fA-F]{1,6}" +
//               j +
//               "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
//             q =
//               "\\[" +
//               j +
//               "*(" +
//               H +
//               ")(?:" +
//               j +
//               "*([*^$|!~]?=)" +
//               j +
//               "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
//               H +
//               "))|)" +
//               j +
//               "*\\]",
//             B =
//               ":(" +
//               H +
//               ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
//               q +
//               ")*)|.*)\\)|)",
//             R = new RegExp(j + "+", "g"),
//             G = new RegExp(
//               "^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$",
//               "g"
//             ),
//             W = new RegExp("^" + j + "*," + j + "*"),
//             F = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
//             X = new RegExp(j + "|>"),
//             _ = new RegExp(B),
//             Y = new RegExp("^" + H + "$"),
//             V = {
//               ID: new RegExp("^#(" + H + ")"),
//               CLASS: new RegExp("^\\.(" + H + ")"),
//               TAG: new RegExp("^(" + H + "|[*])"),
//               ATTR: new RegExp("^" + q),
//               PSEUDO: new RegExp("^" + B),
//               CHILD: new RegExp(
//                 "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
//                   j +
//                   "*(even|odd|(([+-]|)(\\d*)n|)" +
//                   j +
//                   "*(?:([+-]|)" +
//                   j +
//                   "*(\\d+)|))" +
//                   j +
//                   "*\\)|)",
//                 "i"
//               ),
//               bool: new RegExp("^(?:" + I + ")$", "i"),
//               needsContext: new RegExp(
//                 "^" +
//                   j +
//                   "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
//                   j +
//                   "*((?:-\\d)?\\d*)" +
//                   j +
//                   "*\\)|)(?=[^-]|$)",
//                 "i"
//               ),
//             },
//             U = /HTML$/i,
//             K = /^(?:input|select|textarea|button)$/i,
//             Q = /^h\d$/i,
//             J = /^[^{]+\{\s*\[native \w/,
//             Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
//             ee = /[+~]/,
//             te = new RegExp(
//               "\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])",
//               "g"
//             ),
//             ie = function (e, t) {
//               var i = "0x" + e.slice(1) - 65536;
//               return (
//                 t ||
//                 (i < 0
//                   ? String.fromCharCode(i + 65536)
//                   : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
//               );
//             },
//             ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
//             se = function (e, t) {
//               return t
//                 ? "\0" === e
//                   ? "�"
//                   : e.slice(0, -1) +
//                     "\\" +
//                     e.charCodeAt(e.length - 1).toString(16) +
//                     " "
//                 : "\\" + e;
//             },
//             re = function () {
//               h();
//             },
//             ae = we(
//               function (e) {
//                 return (
//                   !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
//                 );
//               },
//               { dir: "parentNode", next: "legend" }
//             );
//           try {
//             D.apply((O = $.call(x.childNodes)), x.childNodes),
//               O[x.childNodes.length].nodeType;
//           } catch (e) {
//             D = {
//               apply: O.length
//                 ? function (e, t) {
//                     A.apply(e, $.call(t));
//                   }
//                 : function (e, t) {
//                     for (var i = e.length, n = 0; (e[i++] = t[n++]); );
//                     e.length = i - 1;
//                   },
//             };
//           }
//           function oe(e, t, n, s) {
//             var r,
//               o,
//               u,
//               d,
//               c,
//               f,
//               g,
//               y = t && t.ownerDocument,
//               x = t ? t.nodeType : 9;
//             if (
//               ((n = n || []),
//               "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
//             )
//               return n;
//             if (!s && (h(t), (t = t || p), v)) {
//               if (11 !== x && (c = Z.exec(e)))
//                 if ((r = c[1])) {
//                   if (9 === x) {
//                     if (!(u = t.getElementById(r))) return n;
//                     if (u.id === r) return n.push(u), n;
//                   } else if (
//                     y &&
//                     (u = y.getElementById(r)) &&
//                     b(t, u) &&
//                     u.id === r
//                   )
//                     return n.push(u), n;
//                 } else {
//                   if (c[2]) return D.apply(n, t.getElementsByTagName(e)), n;
//                   if (
//                     (r = c[3]) &&
//                     i.getElementsByClassName &&
//                     t.getElementsByClassName
//                   )
//                     return D.apply(n, t.getElementsByClassName(r)), n;
//                 }
//               if (
//                 i.qsa &&
//                 !k[e + " "] &&
//                 (!m || !m.test(e)) &&
//                 (1 !== x || "object" !== t.nodeName.toLowerCase())
//               ) {
//                 if (((g = e), (y = t), 1 === x && (X.test(e) || F.test(e)))) {
//                   for (
//                     ((y = (ee.test(e) && ge(t.parentNode)) || t) === t &&
//                       i.scope) ||
//                       ((d = t.getAttribute("id"))
//                         ? (d = d.replace(ne, se))
//                         : t.setAttribute("id", (d = w))),
//                       o = (f = a(e)).length;
//                     o--;

//                   )
//                     f[o] = (d ? "#" + d : ":scope") + " " + be(f[o]);
//                   g = f.join(",");
//                 }
//                 try {
//                   return D.apply(n, y.querySelectorAll(g)), n;
//                 } catch (t) {
//                   k(e, !0);
//                 } finally {
//                   d === w && t.removeAttribute("id");
//                 }
//               }
//             }
//             return l(e.replace(G, "$1"), t, n, s);
//           }
//           function le() {
//             var e = [];
//             return function t(i, s) {
//               return (
//                 e.push(i + " ") > n.cacheLength && delete t[e.shift()],
//                 (t[i + " "] = s)
//               );
//             };
//           }
//           function ue(e) {
//             return (e[w] = !0), e;
//           }
//           function de(e) {
//             var t = p.createElement("fieldset");
//             try {
//               return !!e(t);
//             } catch (e) {
//               return !1;
//             } finally {
//               t.parentNode && t.parentNode.removeChild(t), (t = null);
//             }
//           }
//           function ce(e, t) {
//             for (var i = e.split("|"), s = i.length; s--; )
//               n.attrHandle[i[s]] = t;
//           }
//           function he(e, t) {
//             var i = t && e,
//               n =
//                 i &&
//                 1 === e.nodeType &&
//                 1 === t.nodeType &&
//                 e.sourceIndex - t.sourceIndex;
//             if (n) return n;
//             if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
//             return e ? 1 : -1;
//           }
//           function pe(e) {
//             return function (t) {
//               return "input" === t.nodeName.toLowerCase() && t.type === e;
//             };
//           }
//           function fe(e) {
//             return function (t) {
//               var i = t.nodeName.toLowerCase();
//               return ("input" === i || "button" === i) && t.type === e;
//             };
//           }
//           function ve(e) {
//             return function (t) {
//               return "form" in t
//                 ? t.parentNode && !1 === t.disabled
//                   ? "label" in t
//                     ? "label" in t.parentNode
//                       ? t.parentNode.disabled === e
//                       : t.disabled === e
//                     : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
//                   : t.disabled === e
//                 : "label" in t && t.disabled === e;
//             };
//           }
//           function me(e) {
//             return ue(function (t) {
//               return (
//                 (t = +t),
//                 ue(function (i, n) {
//                   for (var s, r = e([], i.length, t), a = r.length; a--; )
//                     i[(s = r[a])] && (i[s] = !(n[s] = i[s]));
//                 })
//               );
//             });
//           }
//           function ge(e) {
//             return e && void 0 !== e.getElementsByTagName && e;
//           }
//           for (t in ((i = oe.support = {}),
//           (r = oe.isXML =
//             function (e) {
//               var t = e && e.namespaceURI,
//                 i = e && (e.ownerDocument || e).documentElement;
//               return !U.test(t || (i && i.nodeName) || "HTML");
//             }),
//           (h = oe.setDocument =
//             function (e) {
//               var t,
//                 s,
//                 a = e ? e.ownerDocument || e : x;
//               return a != p && 9 === a.nodeType && a.documentElement
//                 ? ((f = (p = a).documentElement),
//                   (v = !r(p)),
//                   x != p &&
//                     (s = p.defaultView) &&
//                     s.top !== s &&
//                     (s.addEventListener
//                       ? s.addEventListener("unload", re, !1)
//                       : s.attachEvent && s.attachEvent("onunload", re)),
//                   (i.scope = de(function (e) {
//                     return (
//                       f.appendChild(e).appendChild(p.createElement("div")),
//                       void 0 !== e.querySelectorAll &&
//                         !e.querySelectorAll(":scope fieldset div").length
//                     );
//                   })),
//                   (i.cssHas = de(function () {
//                     try {
//                       return p.querySelector(":has(*,:jqfake)"), !1;
//                     } catch (e) {
//                       return !0;
//                     }
//                   })),
//                   (i.attributes = de(function (e) {
//                     return (e.className = "i"), !e.getAttribute("className");
//                   })),
//                   (i.getElementsByTagName = de(function (e) {
//                     return (
//                       e.appendChild(p.createComment("")),
//                       !e.getElementsByTagName("*").length
//                     );
//                   })),
//                   (i.getElementsByClassName = J.test(p.getElementsByClassName)),
//                   (i.getById = de(function (e) {
//                     return (
//                       (f.appendChild(e).id = w),
//                       !p.getElementsByName || !p.getElementsByName(w).length
//                     );
//                   })),
//                   i.getById
//                     ? ((n.filter.ID = function (e) {
//                         var t = e.replace(te, ie);
//                         return function (e) {
//                           return e.getAttribute("id") === t;
//                         };
//                       }),
//                       (n.find.ID = function (e, t) {
//                         if (void 0 !== t.getElementById && v) {
//                           var i = t.getElementById(e);
//                           return i ? [i] : [];
//                         }
//                       }))
//                     : ((n.filter.ID = function (e) {
//                         var t = e.replace(te, ie);
//                         return function (e) {
//                           var i =
//                             void 0 !== e.getAttributeNode &&
//                             e.getAttributeNode("id");
//                           return i && i.value === t;
//                         };
//                       }),
//                       (n.find.ID = function (e, t) {
//                         if (void 0 !== t.getElementById && v) {
//                           var i,
//                             n,
//                             s,
//                             r = t.getElementById(e);
//                           if (r) {
//                             if ((i = r.getAttributeNode("id")) && i.value === e)
//                               return [r];
//                             for (
//                               s = t.getElementsByName(e), n = 0;
//                               (r = s[n++]);

//                             )
//                               if (
//                                 (i = r.getAttributeNode("id")) &&
//                                 i.value === e
//                               )
//                                 return [r];
//                           }
//                           return [];
//                         }
//                       })),
//                   (n.find.TAG = i.getElementsByTagName
//                     ? function (e, t) {
//                         return void 0 !== t.getElementsByTagName
//                           ? t.getElementsByTagName(e)
//                           : i.qsa
//                           ? t.querySelectorAll(e)
//                           : void 0;
//                       }
//                     : function (e, t) {
//                         var i,
//                           n = [],
//                           s = 0,
//                           r = t.getElementsByTagName(e);
//                         if ("*" === e) {
//                           for (; (i = r[s++]); ) 1 === i.nodeType && n.push(i);
//                           return n;
//                         }
//                         return r;
//                       }),
//                   (n.find.CLASS =
//                     i.getElementsByClassName &&
//                     function (e, t) {
//                       if (void 0 !== t.getElementsByClassName && v)
//                         return t.getElementsByClassName(e);
//                     }),
//                   (g = []),
//                   (m = []),
//                   (i.qsa = J.test(p.querySelectorAll)) &&
//                     (de(function (e) {
//                       var t;
//                       (f.appendChild(e).innerHTML =
//                         "<a id='" +
//                         w +
//                         "'></a><select id='" +
//                         w +
//                         "-\r\\' msallowcapture=''><option selected=''></option></select>"),
//                         e.querySelectorAll("[msallowcapture^='']").length &&
//                           m.push("[*^$]=" + j + "*(?:''|\"\")"),
//                         e.querySelectorAll("[selected]").length ||
//                           m.push("\\[" + j + "*(?:value|" + I + ")"),
//                         e.querySelectorAll("[id~=" + w + "-]").length ||
//                           m.push("~="),
//                         (t = p.createElement("input")).setAttribute("name", ""),
//                         e.appendChild(t),
//                         e.querySelectorAll("[name='']").length ||
//                           m.push(
//                             "\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"
//                           ),
//                         e.querySelectorAll(":checked").length ||
//                           m.push(":checked"),
//                         e.querySelectorAll("a#" + w + "+*").length ||
//                           m.push(".#.+[+~]"),
//                         e.querySelectorAll("\\\f"),
//                         m.push("[\\r\\n\\f]");
//                     }),
//                     de(function (e) {
//                       e.innerHTML =
//                         "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
//                       var t = p.createElement("input");
//                       t.setAttribute("type", "hidden"),
//                         e.appendChild(t).setAttribute("name", "D"),
//                         e.querySelectorAll("[name=d]").length &&
//                           m.push("name" + j + "*[*^$|!~]?="),
//                         2 !== e.querySelectorAll(":enabled").length &&
//                           m.push(":enabled", ":disabled"),
//                         (f.appendChild(e).disabled = !0),
//                         2 !== e.querySelectorAll(":disabled").length &&
//                           m.push(":enabled", ":disabled"),
//                         e.querySelectorAll("*,:x"),
//                         m.push(",.*:");
//                     })),
//                   (i.matchesSelector = J.test(
//                     (y =
//                       f.matches ||
//                       f.webkitMatchesSelector ||
//                       f.mozMatchesSelector ||
//                       f.oMatchesSelector ||
//                       f.msMatchesSelector)
//                   )) &&
//                     de(function (e) {
//                       (i.disconnectedMatch = y.call(e, "*")),
//                         y.call(e, "[s!='']:x"),
//                         g.push("!=", B);
//                     }),
//                   i.cssHas || m.push(":has"),
//                   (m = m.length && new RegExp(m.join("|"))),
//                   (g = g.length && new RegExp(g.join("|"))),
//                   (t = J.test(f.compareDocumentPosition)),
//                   (b =
//                     t || J.test(f.contains)
//                       ? function (e, t) {
//                           var i = (9 === e.nodeType && e.documentElement) || e,
//                             n = t && t.parentNode;
//                           return (
//                             e === n ||
//                             !(
//                               !n ||
//                               1 !== n.nodeType ||
//                               !(i.contains
//                                 ? i.contains(n)
//                                 : e.compareDocumentPosition &&
//                                   16 & e.compareDocumentPosition(n))
//                             )
//                           );
//                         }
//                       : function (e, t) {
//                           if (t)
//                             for (; (t = t.parentNode); ) if (t === e) return !0;
//                           return !1;
//                         }),
//                   (P = t
//                     ? function (e, t) {
//                         if (e === t) return (c = !0), 0;
//                         var n =
//                           !e.compareDocumentPosition -
//                           !t.compareDocumentPosition;
//                         return (
//                           n ||
//                           (1 &
//                             (n =
//                               (e.ownerDocument || e) == (t.ownerDocument || t)
//                                 ? e.compareDocumentPosition(t)
//                                 : 1) ||
//                           (!i.sortDetached &&
//                             t.compareDocumentPosition(e) === n)
//                             ? e == p || (e.ownerDocument == x && b(x, e))
//                               ? -1
//                               : t == p || (t.ownerDocument == x && b(x, t))
//                               ? 1
//                               : d
//                               ? N(d, e) - N(d, t)
//                               : 0
//                             : 4 & n
//                             ? -1
//                             : 1)
//                         );
//                       }
//                     : function (e, t) {
//                         if (e === t) return (c = !0), 0;
//                         var i,
//                           n = 0,
//                           s = e.parentNode,
//                           r = t.parentNode,
//                           a = [e],
//                           o = [t];
//                         if (!s || !r)
//                           return e == p
//                             ? -1
//                             : t == p
//                             ? 1
//                             : s
//                             ? -1
//                             : r
//                             ? 1
//                             : d
//                             ? N(d, e) - N(d, t)
//                             : 0;
//                         if (s === r) return he(e, t);
//                         for (i = e; (i = i.parentNode); ) a.unshift(i);
//                         for (i = t; (i = i.parentNode); ) o.unshift(i);
//                         for (; a[n] === o[n]; ) n++;
//                         return n
//                           ? he(a[n], o[n])
//                           : a[n] == x
//                           ? -1
//                           : o[n] == x
//                           ? 1
//                           : 0;
//                       }),
//                   p)
//                 : p;
//             }),
//           (oe.matches = function (e, t) {
//             return oe(e, null, null, t);
//           }),
//           (oe.matchesSelector = function (e, t) {
//             if (
//               (h(e),
//               i.matchesSelector &&
//                 v &&
//                 !k[t + " "] &&
//                 (!g || !g.test(t)) &&
//                 (!m || !m.test(t)))
//             )
//               try {
//                 var n = y.call(e, t);
//                 if (
//                   n ||
//                   i.disconnectedMatch ||
//                   (e.document && 11 !== e.document.nodeType)
//                 )
//                   return n;
//               } catch (e) {
//                 k(t, !0);
//               }
//             return oe(t, p, null, [e]).length > 0;
//           }),
//           (oe.contains = function (e, t) {
//             return (e.ownerDocument || e) != p && h(e), b(e, t);
//           }),
//           (oe.attr = function (e, t) {
//             (e.ownerDocument || e) != p && h(e);
//             var s = n.attrHandle[t.toLowerCase()],
//               r =
//                 s && L.call(n.attrHandle, t.toLowerCase())
//                   ? s(e, t, !v)
//                   : void 0;
//             return void 0 !== r
//               ? r
//               : i.attributes || !v
//               ? e.getAttribute(t)
//               : (r = e.getAttributeNode(t)) && r.specified
//               ? r.value
//               : null;
//           }),
//           (oe.escape = function (e) {
//             return (e + "").replace(ne, se);
//           }),
//           (oe.error = function (e) {
//             throw new Error("Syntax error, unrecognized expression: " + e);
//           }),
//           (oe.uniqueSort = function (e) {
//             var t,
//               n = [],
//               s = 0,
//               r = 0;
//             if (
//               ((c = !i.detectDuplicates),
//               (d = !i.sortStable && e.slice(0)),
//               e.sort(P),
//               c)
//             ) {
//               for (; (t = e[r++]); ) t === e[r] && (s = n.push(r));
//               for (; s--; ) e.splice(n[s], 1);
//             }
//             return (d = null), e;
//           }),
//           (s = oe.getText =
//             function (e) {
//               var t,
//                 i = "",
//                 n = 0,
//                 r = e.nodeType;
//               if (r) {
//                 if (1 === r || 9 === r || 11 === r) {
//                   if ("string" == typeof e.textContent) return e.textContent;
//                   for (e = e.firstChild; e; e = e.nextSibling) i += s(e);
//                 } else if (3 === r || 4 === r) return e.nodeValue;
//               } else for (; (t = e[n++]); ) i += s(t);
//               return i;
//             }),
//           ((n = oe.selectors =
//             {
//               cacheLength: 50,
//               createPseudo: ue,
//               match: V,
//               attrHandle: {},
//               find: {},
//               relative: {
//                 ">": { dir: "parentNode", first: !0 },
//                 " ": { dir: "parentNode" },
//                 "+": { dir: "previousSibling", first: !0 },
//                 "~": { dir: "previousSibling" },
//               },
//               preFilter: {
//                 ATTR: function (e) {
//                   return (
//                     (e[1] = e[1].replace(te, ie)),
//                     (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie)),
//                     "~=" === e[2] && (e[3] = " " + e[3] + " "),
//                     e.slice(0, 4)
//                   );
//                 },
//                 CHILD: function (e) {
//                   return (
//                     (e[1] = e[1].toLowerCase()),
//                     "nth" === e[1].slice(0, 3)
//                       ? (e[3] || oe.error(e[0]),
//                         (e[4] = +(e[4]
//                           ? e[5] + (e[6] || 1)
//                           : 2 * ("even" === e[3] || "odd" === e[3]))),
//                         (e[5] = +(e[7] + e[8] || "odd" === e[3])))
//                       : e[3] && oe.error(e[0]),
//                     e
//                   );
//                 },
//                 PSEUDO: function (e) {
//                   var t,
//                     i = !e[6] && e[2];
//                   return V.CHILD.test(e[0])
//                     ? null
//                     : (e[3]
//                         ? (e[2] = e[4] || e[5] || "")
//                         : i &&
//                           _.test(i) &&
//                           (t = a(i, !0)) &&
//                           (t = i.indexOf(")", i.length - t) - i.length) &&
//                           ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
//                       e.slice(0, 3));
//                 },
//               },
//               filter: {
//                 TAG: function (e) {
//                   var t = e.replace(te, ie).toLowerCase();
//                   return "*" === e
//                     ? function () {
//                         return !0;
//                       }
//                     : function (e) {
//                         return e.nodeName && e.nodeName.toLowerCase() === t;
//                       };
//                 },
//                 CLASS: function (e) {
//                   var t = C[e + " "];
//                   return (
//                     t ||
//                     ((t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) &&
//                       C(e, function (e) {
//                         return t.test(
//                           ("string" == typeof e.className && e.className) ||
//                             (void 0 !== e.getAttribute &&
//                               e.getAttribute("class")) ||
//                             ""
//                         );
//                       }))
//                   );
//                 },
//                 ATTR: function (e, t, i) {
//                   return function (n) {
//                     var s = oe.attr(n, e);
//                     return null == s
//                       ? "!=" === t
//                       : !t ||
//                           ((s += ""),
//                           "=" === t
//                             ? s === i
//                             : "!=" === t
//                             ? s !== i
//                             : "^=" === t
//                             ? i && 0 === s.indexOf(i)
//                             : "*=" === t
//                             ? i && s.indexOf(i) > -1
//                             : "$=" === t
//                             ? i && s.slice(-i.length) === i
//                             : "~=" === t
//                             ? (" " + s.replace(R, " ") + " ").indexOf(i) > -1
//                             : "|=" === t &&
//                               (s === i ||
//                                 s.slice(0, i.length + 1) === i + "-"));
//                   };
//                 },
//                 CHILD: function (e, t, i, n, s) {
//                   var r = "nth" !== e.slice(0, 3),
//                     a = "last" !== e.slice(-4),
//                     o = "of-type" === t;
//                   return 1 === n && 0 === s
//                     ? function (e) {
//                         return !!e.parentNode;
//                       }
//                     : function (t, i, l) {
//                         var u,
//                           d,
//                           c,
//                           h,
//                           p,
//                           f,
//                           v = r !== a ? "nextSibling" : "previousSibling",
//                           m = t.parentNode,
//                           g = o && t.nodeName.toLowerCase(),
//                           y = !l && !o,
//                           b = !1;
//                         if (m) {
//                           if (r) {
//                             for (; v; ) {
//                               for (h = t; (h = h[v]); )
//                                 if (
//                                   o
//                                     ? h.nodeName.toLowerCase() === g
//                                     : 1 === h.nodeType
//                                 )
//                                   return !1;
//                               f = v = "only" === e && !f && "nextSibling";
//                             }
//                             return !0;
//                           }
//                           if (
//                             ((f = [a ? m.firstChild : m.lastChild]), a && y)
//                           ) {
//                             for (
//                               b =
//                                 (p =
//                                   (u =
//                                     (d =
//                                       (c = (h = m)[w] || (h[w] = {}))[
//                                         h.uniqueID
//                                       ] || (c[h.uniqueID] = {}))[e] ||
//                                     [])[0] === E && u[1]) && u[2],
//                                 h = p && m.childNodes[p];
//                               (h =
//                                 (++p && h && h[v]) || (b = p = 0) || f.pop());

//                             )
//                               if (1 === h.nodeType && ++b && h === t) {
//                                 d[e] = [E, p, b];
//                                 break;
//                               }
//                           } else if (
//                             (y &&
//                               (b = p =
//                                 (u =
//                                   (d =
//                                     (c = (h = t)[w] || (h[w] = {}))[
//                                       h.uniqueID
//                                     ] || (c[h.uniqueID] = {}))[e] || [])[0] ===
//                                   E && u[1]),
//                             !1 === b)
//                           )
//                             for (
//                               ;
//                               (h =
//                                 (++p && h && h[v]) || (b = p = 0) || f.pop()) &&
//                               ((o
//                                 ? h.nodeName.toLowerCase() !== g
//                                 : 1 !== h.nodeType) ||
//                                 !++b ||
//                                 (y &&
//                                   ((d =
//                                     (c = h[w] || (h[w] = {}))[h.uniqueID] ||
//                                     (c[h.uniqueID] = {}))[e] = [E, b]),
//                                 h !== t));

//                             );
//                           return (b -= s) === n || (b % n == 0 && b / n >= 0);
//                         }
//                       };
//                 },
//                 PSEUDO: function (e, t) {
//                   var i,
//                     s =
//                       n.pseudos[e] ||
//                       n.setFilters[e.toLowerCase()] ||
//                       oe.error("unsupported pseudo: " + e);
//                   return s[w]
//                     ? s(t)
//                     : s.length > 1
//                     ? ((i = [e, e, "", t]),
//                       n.setFilters.hasOwnProperty(e.toLowerCase())
//                         ? ue(function (e, i) {
//                             for (var n, r = s(e, t), a = r.length; a--; )
//                               e[(n = N(e, r[a]))] = !(i[n] = r[a]);
//                           })
//                         : function (e) {
//                             return s(e, 0, i);
//                           })
//                     : s;
//                 },
//               },
//               pseudos: {
//                 not: ue(function (e) {
//                   var t = [],
//                     i = [],
//                     n = o(e.replace(G, "$1"));
//                   return n[w]
//                     ? ue(function (e, t, i, s) {
//                         for (var r, a = n(e, null, s, []), o = e.length; o--; )
//                           (r = a[o]) && (e[o] = !(t[o] = r));
//                       })
//                     : function (e, s, r) {
//                         return (
//                           (t[0] = e), n(t, null, r, i), (t[0] = null), !i.pop()
//                         );
//                       };
//                 }),
//                 has: ue(function (e) {
//                   return function (t) {
//                     return oe(e, t).length > 0;
//                   };
//                 }),
//                 contains: ue(function (e) {
//                   return (
//                     (e = e.replace(te, ie)),
//                     function (t) {
//                       return (t.textContent || s(t)).indexOf(e) > -1;
//                     }
//                   );
//                 }),
//                 lang: ue(function (e) {
//                   return (
//                     Y.test(e || "") || oe.error("unsupported lang: " + e),
//                     (e = e.replace(te, ie).toLowerCase()),
//                     function (t) {
//                       var i;
//                       do {
//                         if (
//                           (i = v
//                             ? t.lang
//                             : t.getAttribute("xml:lang") ||
//                               t.getAttribute("lang"))
//                         )
//                           return (
//                             (i = i.toLowerCase()) === e ||
//                             0 === i.indexOf(e + "-")
//                           );
//                       } while ((t = t.parentNode) && 1 === t.nodeType);
//                       return !1;
//                     }
//                   );
//                 }),
//                 target: function (t) {
//                   var i = e.location && e.location.hash;
//                   return i && i.slice(1) === t.id;
//                 },
//                 root: function (e) {
//                   return e === f;
//                 },
//                 focus: function (e) {
//                   return (
//                     e === p.activeElement &&
//                     (!p.hasFocus || p.hasFocus()) &&
//                     !!(e.type || e.href || ~e.tabIndex)
//                   );
//                 },
//                 enabled: ve(!1),
//                 disabled: ve(!0),
//                 checked: function (e) {
//                   var t = e.nodeName.toLowerCase();
//                   return (
//                     ("input" === t && !!e.checked) ||
//                     ("option" === t && !!e.selected)
//                   );
//                 },
//                 selected: function (e) {
//                   return (
//                     e.parentNode && e.parentNode.selectedIndex,
//                     !0 === e.selected
//                   );
//                 },
//                 empty: function (e) {
//                   for (e = e.firstChild; e; e = e.nextSibling)
//                     if (e.nodeType < 6) return !1;
//                   return !0;
//                 },
//                 parent: function (e) {
//                   return !n.pseudos.empty(e);
//                 },
//                 header: function (e) {
//                   return Q.test(e.nodeName);
//                 },
//                 input: function (e) {
//                   return K.test(e.nodeName);
//                 },
//                 button: function (e) {
//                   var t = e.nodeName.toLowerCase();
//                   return (
//                     ("input" === t && "button" === e.type) || "button" === t
//                   );
//                 },
//                 text: function (e) {
//                   var t;
//                   return (
//                     "input" === e.nodeName.toLowerCase() &&
//                     "text" === e.type &&
//                     (null == (t = e.getAttribute("type")) ||
//                       "text" === t.toLowerCase())
//                   );
//                 },
//                 first: me(function () {
//                   return [0];
//                 }),
//                 last: me(function (e, t) {
//                   return [t - 1];
//                 }),
//                 eq: me(function (e, t, i) {
//                   return [i < 0 ? i + t : i];
//                 }),
//                 even: me(function (e, t) {
//                   for (var i = 0; i < t; i += 2) e.push(i);
//                   return e;
//                 }),
//                 odd: me(function (e, t) {
//                   for (var i = 1; i < t; i += 2) e.push(i);
//                   return e;
//                 }),
//                 lt: me(function (e, t, i) {
//                   for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0; )
//                     e.push(n);
//                   return e;
//                 }),
//                 gt: me(function (e, t, i) {
//                   for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
//                   return e;
//                 }),
//               },
//             }).pseudos.nth = n.pseudos.eq),
//           { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
//             n.pseudos[t] = pe(t);
//           for (t in { submit: !0, reset: !0 }) n.pseudos[t] = fe(t);
//           function ye() {}
//           function be(e) {
//             for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
//             return n;
//           }
//           function we(e, t, i) {
//             var n = t.dir,
//               s = t.next,
//               r = s || n,
//               a = i && "parentNode" === r,
//               o = T++;
//             return t.first
//               ? function (t, i, s) {
//                   for (; (t = t[n]); )
//                     if (1 === t.nodeType || a) return e(t, i, s);
//                   return !1;
//                 }
//               : function (t, i, l) {
//                   var u,
//                     d,
//                     c,
//                     h = [E, o];
//                   if (l) {
//                     for (; (t = t[n]); )
//                       if ((1 === t.nodeType || a) && e(t, i, l)) return !0;
//                   } else
//                     for (; (t = t[n]); )
//                       if (1 === t.nodeType || a)
//                         if (
//                           ((d =
//                             (c = t[w] || (t[w] = {}))[t.uniqueID] ||
//                             (c[t.uniqueID] = {})),
//                           s && s === t.nodeName.toLowerCase())
//                         )
//                           t = t[n] || t;
//                         else {
//                           if ((u = d[r]) && u[0] === E && u[1] === o)
//                             return (h[2] = u[2]);
//                           if (((d[r] = h), (h[2] = e(t, i, l)))) return !0;
//                         }
//                   return !1;
//                 };
//           }
//           function xe(e) {
//             return e.length > 1
//               ? function (t, i, n) {
//                   for (var s = e.length; s--; ) if (!e[s](t, i, n)) return !1;
//                   return !0;
//                 }
//               : e[0];
//           }
//           function Ee(e, t, i, n, s) {
//             for (var r, a = [], o = 0, l = e.length, u = null != t; o < l; o++)
//               (r = e[o]) && ((i && !i(r, n, s)) || (a.push(r), u && t.push(o)));
//             return a;
//           }
//           function Te(e, t, i, n, s, r) {
//             return (
//               n && !n[w] && (n = Te(n)),
//               s && !s[w] && (s = Te(s, r)),
//               ue(function (r, a, o, l) {
//                 var u,
//                   d,
//                   c,
//                   h = [],
//                   p = [],
//                   f = a.length,
//                   v =
//                     r ||
//                     (function (e, t, i) {
//                       for (var n = 0, s = t.length; n < s; n++) oe(e, t[n], i);
//                       return i;
//                     })(t || "*", o.nodeType ? [o] : o, []),
//                   m = !e || (!r && t) ? v : Ee(v, h, e, o, l),
//                   g = i ? (s || (r ? e : f || n) ? [] : a) : m;
//                 if ((i && i(m, g, o, l), n))
//                   for (u = Ee(g, p), n(u, [], o, l), d = u.length; d--; )
//                     (c = u[d]) && (g[p[d]] = !(m[p[d]] = c));
//                 if (r) {
//                   if (s || e) {
//                     if (s) {
//                       for (u = [], d = g.length; d--; )
//                         (c = g[d]) && u.push((m[d] = c));
//                       s(null, (g = []), u, l);
//                     }
//                     for (d = g.length; d--; )
//                       (c = g[d]) &&
//                         (u = s ? N(r, c) : h[d]) > -1 &&
//                         (r[u] = !(a[u] = c));
//                   }
//                 } else (g = Ee(g === a ? g.splice(f, g.length) : g)), s ? s(null, a, g, l) : D.apply(a, g);
//               })
//             );
//           }
//           function Ce(e) {
//             for (
//               var t,
//                 i,
//                 s,
//                 r = e.length,
//                 a = n.relative[e[0].type],
//                 o = a || n.relative[" "],
//                 l = a ? 1 : 0,
//                 d = we(
//                   function (e) {
//                     return e === t;
//                   },
//                   o,
//                   !0
//                 ),
//                 c = we(
//                   function (e) {
//                     return N(t, e) > -1;
//                   },
//                   o,
//                   !0
//                 ),
//                 h = [
//                   function (e, i, n) {
//                     var s =
//                       (!a && (n || i !== u)) ||
//                       ((t = i).nodeType ? d(e, i, n) : c(e, i, n));
//                     return (t = null), s;
//                   },
//                 ];
//               l < r;
//               l++
//             )
//               if ((i = n.relative[e[l].type])) h = [we(xe(h), i)];
//               else {
//                 if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
//                   for (s = ++l; s < r && !n.relative[e[s].type]; s++);
//                   return Te(
//                     l > 1 && xe(h),
//                     l > 1 &&
//                       be(
//                         e
//                           .slice(0, l - 1)
//                           .concat({ value: " " === e[l - 2].type ? "*" : "" })
//                       ).replace(G, "$1"),
//                     i,
//                     l < s && Ce(e.slice(l, s)),
//                     s < r && Ce((e = e.slice(s))),
//                     s < r && be(e)
//                   );
//                 }
//                 h.push(i);
//               }
//             return xe(h);
//           }
//           return (
//             (ye.prototype = n.filters = n.pseudos),
//             (n.setFilters = new ye()),
//             (a = oe.tokenize =
//               function (e, t) {
//                 var i,
//                   s,
//                   r,
//                   a,
//                   o,
//                   l,
//                   u,
//                   d = S[e + " "];
//                 if (d) return t ? 0 : d.slice(0);
//                 for (o = e, l = [], u = n.preFilter; o; ) {
//                   for (a in ((i && !(s = W.exec(o))) ||
//                     (s && (o = o.slice(s[0].length) || o), l.push((r = []))),
//                   (i = !1),
//                   (s = F.exec(o)) &&
//                     ((i = s.shift()),
//                     r.push({ value: i, type: s[0].replace(G, " ") }),
//                     (o = o.slice(i.length))),
//                   n.filter))
//                     !(s = V[a].exec(o)) ||
//                       (u[a] && !(s = u[a](s))) ||
//                       ((i = s.shift()),
//                       r.push({ value: i, type: a, matches: s }),
//                       (o = o.slice(i.length)));
//                   if (!i) break;
//                 }
//                 return t ? o.length : o ? oe.error(e) : S(e, l).slice(0);
//               }),
//             (o = oe.compile =
//               function (e, t) {
//                 var i,
//                   s = [],
//                   r = [],
//                   o = M[e + " "];
//                 if (!o) {
//                   for (t || (t = a(e)), i = t.length; i--; )
//                     (o = Ce(t[i]))[w] ? s.push(o) : r.push(o);
//                   (o = M(
//                     e,
//                     (function (e, t) {
//                       var i = t.length > 0,
//                         s = e.length > 0,
//                         r = function (r, a, o, l, d) {
//                           var c,
//                             f,
//                             m,
//                             g = 0,
//                             y = "0",
//                             b = r && [],
//                             w = [],
//                             x = u,
//                             T = r || (s && n.find.TAG("*", d)),
//                             C = (E += null == x ? 1 : Math.random() || 0.1),
//                             S = T.length;
//                           for (
//                             d && (u = a == p || a || d);
//                             y !== S && null != (c = T[y]);
//                             y++
//                           ) {
//                             if (s && c) {
//                               for (
//                                 f = 0,
//                                   a || c.ownerDocument == p || (h(c), (o = !v));
//                                 (m = e[f++]);

//                               )
//                                 if (m(c, a || p, o)) {
//                                   l.push(c);
//                                   break;
//                                 }
//                               d && (E = C);
//                             }
//                             i && ((c = !m && c) && g--, r && b.push(c));
//                           }
//                           if (((g += y), i && y !== g)) {
//                             for (f = 0; (m = t[f++]); ) m(b, w, a, o);
//                             if (r) {
//                               if (g > 0)
//                                 for (; y--; )
//                                   b[y] || w[y] || (w[y] = z.call(l));
//                               w = Ee(w);
//                             }
//                             D.apply(l, w),
//                               d &&
//                                 !r &&
//                                 w.length > 0 &&
//                                 g + t.length > 1 &&
//                                 oe.uniqueSort(l);
//                           }
//                           return d && ((E = C), (u = x)), b;
//                         };
//                       return i ? ue(r) : r;
//                     })(r, s)
//                   )).selector = e;
//                 }
//                 return o;
//               }),
//             (l = oe.select =
//               function (e, t, i, s) {
//                 var r,
//                   l,
//                   u,
//                   d,
//                   c,
//                   h = "function" == typeof e && e,
//                   p = !s && a((e = h.selector || e));
//                 if (((i = i || []), 1 === p.length)) {
//                   if (
//                     (l = p[0] = p[0].slice(0)).length > 2 &&
//                     "ID" === (u = l[0]).type &&
//                     9 === t.nodeType &&
//                     v &&
//                     n.relative[l[1].type]
//                   ) {
//                     if (
//                       !(t = (n.find.ID(u.matches[0].replace(te, ie), t) ||
//                         [])[0])
//                     )
//                       return i;
//                     h && (t = t.parentNode),
//                       (e = e.slice(l.shift().value.length));
//                   }
//                   for (
//                     r = V.needsContext.test(e) ? 0 : l.length;
//                     r-- && ((u = l[r]), !n.relative[(d = u.type)]);

//                   )
//                     if (
//                       (c = n.find[d]) &&
//                       (s = c(
//                         u.matches[0].replace(te, ie),
//                         (ee.test(l[0].type) && ge(t.parentNode)) || t
//                       ))
//                     ) {
//                       if ((l.splice(r, 1), !(e = s.length && be(l))))
//                         return D.apply(i, s), i;
//                       break;
//                     }
//                 }
//                 return (
//                   (h || o(e, p))(
//                     s,
//                     t,
//                     !v,
//                     i,
//                     !t || (ee.test(e) && ge(t.parentNode)) || t
//                   ),
//                   i
//                 );
//               }),
//             (i.sortStable = w.split("").sort(P).join("") === w),
//             (i.detectDuplicates = !!c),
//             h(),
//             (i.sortDetached = de(function (e) {
//               return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
//             })),
//             de(function (e) {
//               return (
//                 (e.innerHTML = "<a href='#'></a>"),
//                 "#" === e.firstChild.getAttribute("href")
//               );
//             }) ||
//               ce("type|href|height|width", function (e, t, i) {
//                 if (!i)
//                   return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
//               }),
//             (i.attributes &&
//               de(function (e) {
//                 return (
//                   (e.innerHTML = "<input/>"),
//                   e.firstChild.setAttribute("value", ""),
//                   "" === e.firstChild.getAttribute("value")
//                 );
//               })) ||
//               ce("value", function (e, t, i) {
//                 if (!i && "input" === e.nodeName.toLowerCase())
//                   return e.defaultValue;
//               }),
//             de(function (e) {
//               return null == e.getAttribute("disabled");
//             }) ||
//               ce(I, function (e, t, i) {
//                 var n;
//                 if (!i)
//                   return !0 === e[t]
//                     ? t.toLowerCase()
//                     : (n = e.getAttributeNode(t)) && n.specified
//                     ? n.value
//                     : null;
//               }),
//             oe
//           );
//         })(i);
//       (T.find = S),
//         (T.expr = S.selectors),
//         (T.expr[":"] = T.expr.pseudos),
//         (T.uniqueSort = T.unique = S.uniqueSort),
//         (T.text = S.getText),
//         (T.isXMLDoc = S.isXML),
//         (T.contains = S.contains),
//         (T.escapeSelector = S.escape);
//       var M = function (e, t, i) {
//           for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
//             if (1 === e.nodeType) {
//               if (s && T(e).is(i)) break;
//               n.push(e);
//             }
//           return n;
//         },
//         k = function (e, t) {
//           for (var i = []; e; e = e.nextSibling)
//             1 === e.nodeType && e !== t && i.push(e);
//           return i;
//         },
//         P = T.expr.match.needsContext;
//       function L(e, t) {
//         return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
//       }
//       var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
//       function z(e, t, i) {
//         return g(t)
//           ? T.grep(e, function (e, n) {
//               return !!t.call(e, n, e) !== i;
//             })
//           : t.nodeType
//           ? T.grep(e, function (e) {
//               return (e === t) !== i;
//             })
//           : "string" != typeof t
//           ? T.grep(e, function (e) {
//               return d.call(t, e) > -1 !== i;
//             })
//           : T.filter(t, e, i);
//       }
//       (T.filter = function (e, t, i) {
//         var n = t[0];
//         return (
//           i && (e = ":not(" + e + ")"),
//           1 === t.length && 1 === n.nodeType
//             ? T.find.matchesSelector(n, e)
//               ? [n]
//               : []
//             : T.find.matches(
//                 e,
//                 T.grep(t, function (e) {
//                   return 1 === e.nodeType;
//                 })
//               )
//         );
//       }),
//         T.fn.extend({
//           find: function (e) {
//             var t,
//               i,
//               n = this.length,
//               s = this;
//             if ("string" != typeof e)
//               return this.pushStack(
//                 T(e).filter(function () {
//                   for (t = 0; t < n; t++) if (T.contains(s[t], this)) return !0;
//                 })
//               );
//             for (i = this.pushStack([]), t = 0; t < n; t++) T.find(e, s[t], i);
//             return n > 1 ? T.uniqueSort(i) : i;
//           },
//           filter: function (e) {
//             return this.pushStack(z(this, e || [], !1));
//           },
//           not: function (e) {
//             return this.pushStack(z(this, e || [], !0));
//           },
//           is: function (e) {
//             return !!z(
//               this,
//               "string" == typeof e && P.test(e) ? T(e) : e || [],
//               !1
//             ).length;
//           },
//         });
//       var A,
//         D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
//       ((T.fn.init = function (e, t, i) {
//         var n, s;
//         if (!e) return this;
//         if (((i = i || A), "string" == typeof e)) {
//           if (
//             !(n =
//               "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
//                 ? [null, e, null]
//                 : D.exec(e)) ||
//             (!n[1] && t)
//           )
//             return !t || t.jquery
//               ? (t || i).find(e)
//               : this.constructor(t).find(e);
//           if (n[1]) {
//             if (
//               ((t = t instanceof T ? t[0] : t),
//               T.merge(
//                 this,
//                 T.parseHTML(
//                   n[1],
//                   t && t.nodeType ? t.ownerDocument || t : b,
//                   !0
//                 )
//               ),
//               O.test(n[1]) && T.isPlainObject(t))
//             )
//               for (n in t) g(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
//             return this;
//           }
//           return (
//             (s = b.getElementById(n[2])) && ((this[0] = s), (this.length = 1)),
//             this
//           );
//         }
//         return e.nodeType
//           ? ((this[0] = e), (this.length = 1), this)
//           : g(e)
//           ? void 0 !== i.ready
//             ? i.ready(e)
//             : e(T)
//           : T.makeArray(e, this);
//       }).prototype = T.fn),
//         (A = T(b));
//       var $ = /^(?:parents|prev(?:Until|All))/,
//         N = { children: !0, contents: !0, next: !0, prev: !0 };
//       function I(e, t) {
//         for (; (e = e[t]) && 1 !== e.nodeType; );
//         return e;
//       }
//       T.fn.extend({
//         has: function (e) {
//           var t = T(e, this),
//             i = t.length;
//           return this.filter(function () {
//             for (var e = 0; e < i; e++) if (T.contains(this, t[e])) return !0;
//           });
//         },
//         closest: function (e, t) {
//           var i,
//             n = 0,
//             s = this.length,
//             r = [],
//             a = "string" != typeof e && T(e);
//           if (!P.test(e))
//             for (; n < s; n++)
//               for (i = this[n]; i && i !== t; i = i.parentNode)
//                 if (
//                   i.nodeType < 11 &&
//                   (a
//                     ? a.index(i) > -1
//                     : 1 === i.nodeType && T.find.matchesSelector(i, e))
//                 ) {
//                   r.push(i);
//                   break;
//                 }
//           return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r);
//         },
//         index: function (e) {
//           return e
//             ? "string" == typeof e
//               ? d.call(T(e), this[0])
//               : d.call(this, e.jquery ? e[0] : e)
//             : this[0] && this[0].parentNode
//             ? this.first().prevAll().length
//             : -1;
//         },
//         add: function (e, t) {
//           return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
//         },
//         addBack: function (e) {
//           return this.add(
//             null == e ? this.prevObject : this.prevObject.filter(e)
//           );
//         },
//       }),
//         T.each(
//           {
//             parent: function (e) {
//               var t = e.parentNode;
//               return t && 11 !== t.nodeType ? t : null;
//             },
//             parents: function (e) {
//               return M(e, "parentNode");
//             },
//             parentsUntil: function (e, t, i) {
//               return M(e, "parentNode", i);
//             },
//             next: function (e) {
//               return I(e, "nextSibling");
//             },
//             prev: function (e) {
//               return I(e, "previousSibling");
//             },
//             nextAll: function (e) {
//               return M(e, "nextSibling");
//             },
//             prevAll: function (e) {
//               return M(e, "previousSibling");
//             },
//             nextUntil: function (e, t, i) {
//               return M(e, "nextSibling", i);
//             },
//             prevUntil: function (e, t, i) {
//               return M(e, "previousSibling", i);
//             },
//             siblings: function (e) {
//               return k((e.parentNode || {}).firstChild, e);
//             },
//             children: function (e) {
//               return k(e.firstChild);
//             },
//             contents: function (e) {
//               return null != e.contentDocument && a(e.contentDocument)
//                 ? e.contentDocument
//                 : (L(e, "template") && (e = e.content || e),
//                   T.merge([], e.childNodes));
//             },
//           },
//           function (e, t) {
//             T.fn[e] = function (i, n) {
//               var s = T.map(this, t, i);
//               return (
//                 "Until" !== e.slice(-5) && (n = i),
//                 n && "string" == typeof n && (s = T.filter(n, s)),
//                 this.length > 1 &&
//                   (N[e] || T.uniqueSort(s), $.test(e) && s.reverse()),
//                 this.pushStack(s)
//               );
//             };
//           }
//         );
//       var j = /[^\x20\t\r\n\f]+/g;
//       function H(e) {
//         return e;
//       }
//       function q(e) {
//         throw e;
//       }
//       function B(e, t, i, n) {
//         var s;
//         try {
//           e && g((s = e.promise))
//             ? s.call(e).done(t).fail(i)
//             : e && g((s = e.then))
//             ? s.call(e, t, i)
//             : t.apply(void 0, [e].slice(n));
//         } catch (e) {
//           i.apply(void 0, [e]);
//         }
//       }
//       (T.Callbacks = function (e) {
//         e =
//           "string" == typeof e
//             ? (function (e) {
//                 var t = {};
//                 return (
//                   T.each(e.match(j) || [], function (e, i) {
//                     t[i] = !0;
//                   }),
//                   t
//                 );
//               })(e)
//             : T.extend({}, e);
//         var t,
//           i,
//           n,
//           s,
//           r = [],
//           a = [],
//           o = -1,
//           l = function () {
//             for (s = s || e.once, n = t = !0; a.length; o = -1)
//               for (i = a.shift(); ++o < r.length; )
//                 !1 === r[o].apply(i[0], i[1]) &&
//                   e.stopOnFalse &&
//                   ((o = r.length), (i = !1));
//             e.memory || (i = !1), (t = !1), s && (r = i ? [] : "");
//           },
//           u = {
//             add: function () {
//               return (
//                 r &&
//                   (i && !t && ((o = r.length - 1), a.push(i)),
//                   (function t(i) {
//                     T.each(i, function (i, n) {
//                       g(n)
//                         ? (e.unique && u.has(n)) || r.push(n)
//                         : n && n.length && "string" !== E(n) && t(n);
//                     });
//                   })(arguments),
//                   i && !t && l()),
//                 this
//               );
//             },
//             remove: function () {
//               return (
//                 T.each(arguments, function (e, t) {
//                   for (var i; (i = T.inArray(t, r, i)) > -1; )
//                     r.splice(i, 1), i <= o && o--;
//                 }),
//                 this
//               );
//             },
//             has: function (e) {
//               return e ? T.inArray(e, r) > -1 : r.length > 0;
//             },
//             empty: function () {
//               return r && (r = []), this;
//             },
//             disable: function () {
//               return (s = a = []), (r = i = ""), this;
//             },
//             disabled: function () {
//               return !r;
//             },
//             lock: function () {
//               return (s = a = []), i || t || (r = i = ""), this;
//             },
//             locked: function () {
//               return !!s;
//             },
//             fireWith: function (e, i) {
//               return (
//                 s ||
//                   ((i = [e, (i = i || []).slice ? i.slice() : i]),
//                   a.push(i),
//                   t || l()),
//                 this
//               );
//             },
//             fire: function () {
//               return u.fireWith(this, arguments), this;
//             },
//             fired: function () {
//               return !!n;
//             },
//           };
//         return u;
//       }),
//         T.extend({
//           Deferred: function (e) {
//             var t = [
//                 [
//                   "notify",
//                   "progress",
//                   T.Callbacks("memory"),
//                   T.Callbacks("memory"),
//                   2,
//                 ],
//                 [
//                   "resolve",
//                   "done",
//                   T.Callbacks("once memory"),
//                   T.Callbacks("once memory"),
//                   0,
//                   "resolved",
//                 ],
//                 [
//                   "reject",
//                   "fail",
//                   T.Callbacks("once memory"),
//                   T.Callbacks("once memory"),
//                   1,
//                   "rejected",
//                 ],
//               ],
//               n = "pending",
//               s = {
//                 state: function () {
//                   return n;
//                 },
//                 always: function () {
//                   return r.done(arguments).fail(arguments), this;
//                 },
//                 catch: function (e) {
//                   return s.then(null, e);
//                 },
//                 pipe: function () {
//                   var e = arguments;
//                   return T.Deferred(function (i) {
//                     T.each(t, function (t, n) {
//                       var s = g(e[n[4]]) && e[n[4]];
//                       r[n[1]](function () {
//                         var e = s && s.apply(this, arguments);
//                         e && g(e.promise)
//                           ? e
//                               .promise()
//                               .progress(i.notify)
//                               .done(i.resolve)
//                               .fail(i.reject)
//                           : i[n[0] + "With"](this, s ? [e] : arguments);
//                       });
//                     }),
//                       (e = null);
//                   }).promise();
//                 },
//                 then: function (e, n, s) {
//                   var r = 0;
//                   function a(e, t, n, s) {
//                     return function () {
//                       var o = this,
//                         l = arguments,
//                         u = function () {
//                           var i, u;
//                           if (!(e < r)) {
//                             if ((i = n.apply(o, l)) === t.promise())
//                               throw new TypeError("Thenable self-resolution");
//                             (u =
//                               i &&
//                               ("object" == typeof i ||
//                                 "function" == typeof i) &&
//                               i.then),
//                               g(u)
//                                 ? s
//                                   ? u.call(i, a(r, t, H, s), a(r, t, q, s))
//                                   : (r++,
//                                     u.call(
//                                       i,
//                                       a(r, t, H, s),
//                                       a(r, t, q, s),
//                                       a(r, t, H, t.notifyWith)
//                                     ))
//                                 : (n !== H && ((o = void 0), (l = [i])),
//                                   (s || t.resolveWith)(o, l));
//                           }
//                         },
//                         d = s
//                           ? u
//                           : function () {
//                               try {
//                                 u();
//                               } catch (i) {
//                                 T.Deferred.exceptionHook &&
//                                   T.Deferred.exceptionHook(i, d.stackTrace),
//                                   e + 1 >= r &&
//                                     (n !== q && ((o = void 0), (l = [i])),
//                                     t.rejectWith(o, l));
//                               }
//                             };
//                       e
//                         ? d()
//                         : (T.Deferred.getStackHook &&
//                             (d.stackTrace = T.Deferred.getStackHook()),
//                           i.setTimeout(d));
//                     };
//                   }
//                   return T.Deferred(function (i) {
//                     t[0][3].add(a(0, i, g(s) ? s : H, i.notifyWith)),
//                       t[1][3].add(a(0, i, g(e) ? e : H)),
//                       t[2][3].add(a(0, i, g(n) ? n : q));
//                   }).promise();
//                 },
//                 promise: function (e) {
//                   return null != e ? T.extend(e, s) : s;
//                 },
//               },
//               r = {};
//             return (
//               T.each(t, function (e, i) {
//                 var a = i[2],
//                   o = i[5];
//                 (s[i[1]] = a.add),
//                   o &&
//                     a.add(
//                       function () {
//                         n = o;
//                       },
//                       t[3 - e][2].disable,
//                       t[3 - e][3].disable,
//                       t[0][2].lock,
//                       t[0][3].lock
//                     ),
//                   a.add(i[3].fire),
//                   (r[i[0]] = function () {
//                     return (
//                       r[i[0] + "With"](this === r ? void 0 : this, arguments),
//                       this
//                     );
//                   }),
//                   (r[i[0] + "With"] = a.fireWith);
//               }),
//               s.promise(r),
//               e && e.call(r, r),
//               r
//             );
//           },
//           when: function (e) {
//             var t = arguments.length,
//               i = t,
//               n = Array(i),
//               s = o.call(arguments),
//               r = T.Deferred(),
//               a = function (e) {
//                 return function (i) {
//                   (n[e] = this),
//                     (s[e] = arguments.length > 1 ? o.call(arguments) : i),
//                     --t || r.resolveWith(n, s);
//                 };
//               };
//             if (
//               t <= 1 &&
//               (B(e, r.done(a(i)).resolve, r.reject, !t),
//               "pending" === r.state() || g(s[i] && s[i].then))
//             )
//               return r.then();
//             for (; i--; ) B(s[i], a(i), r.reject);
//             return r.promise();
//           },
//         });
//       var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
//       (T.Deferred.exceptionHook = function (e, t) {
//         i.console &&
//           i.console.warn &&
//           e &&
//           R.test(e.name) &&
//           i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
//       }),
//         (T.readyException = function (e) {
//           i.setTimeout(function () {
//             throw e;
//           });
//         });
//       var G = T.Deferred();
//       function W() {
//         b.removeEventListener("DOMContentLoaded", W),
//           i.removeEventListener("load", W),
//           T.ready();
//       }
//       (T.fn.ready = function (e) {
//         return (
//           G.then(e).catch(function (e) {
//             T.readyException(e);
//           }),
//           this
//         );
//       }),
//         T.extend({
//           isReady: !1,
//           readyWait: 1,
//           ready: function (e) {
//             (!0 === e ? --T.readyWait : T.isReady) ||
//               ((T.isReady = !0),
//               (!0 !== e && --T.readyWait > 0) || G.resolveWith(b, [T]));
//           },
//         }),
//         (T.ready.then = G.then),
//         "complete" === b.readyState ||
//         ("loading" !== b.readyState && !b.documentElement.doScroll)
//           ? i.setTimeout(T.ready)
//           : (b.addEventListener("DOMContentLoaded", W),
//             i.addEventListener("load", W));
//       var F = function (e, t, i, n, s, r, a) {
//           var o = 0,
//             l = e.length,
//             u = null == i;
//           if ("object" === E(i))
//             for (o in ((s = !0), i)) F(e, t, o, i[o], !0, r, a);
//           else if (
//             void 0 !== n &&
//             ((s = !0),
//             g(n) || (a = !0),
//             u &&
//               (a
//                 ? (t.call(e, n), (t = null))
//                 : ((u = t),
//                   (t = function (e, t, i) {
//                     return u.call(T(e), i);
//                   }))),
//             t)
//           )
//             for (; o < l; o++) t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)));
//           return s ? e : u ? t.call(e) : l ? t(e[0], i) : r;
//         },
//         X = /^-ms-/,
//         _ = /-([a-z])/g;
//       function Y(e, t) {
//         return t.toUpperCase();
//       }
//       function V(e) {
//         return e.replace(X, "ms-").replace(_, Y);
//       }
//       var U = function (e) {
//         return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
//       };
//       function K() {
//         this.expando = T.expando + K.uid++;
//       }
//       (K.uid = 1),
//         (K.prototype = {
//           cache: function (e) {
//             var t = e[this.expando];
//             return (
//               t ||
//                 ((t = {}),
//                 U(e) &&
//                   (e.nodeType
//                     ? (e[this.expando] = t)
//                     : Object.defineProperty(e, this.expando, {
//                         value: t,
//                         configurable: !0,
//                       }))),
//               t
//             );
//           },
//           set: function (e, t, i) {
//             var n,
//               s = this.cache(e);
//             if ("string" == typeof t) s[V(t)] = i;
//             else for (n in t) s[V(n)] = t[n];
//             return s;
//           },
//           get: function (e, t) {
//             return void 0 === t
//               ? this.cache(e)
//               : e[this.expando] && e[this.expando][V(t)];
//           },
//           access: function (e, t, i) {
//             return void 0 === t || (t && "string" == typeof t && void 0 === i)
//               ? this.get(e, t)
//               : (this.set(e, t, i), void 0 !== i ? i : t);
//           },
//           remove: function (e, t) {
//             var i,
//               n = e[this.expando];
//             if (void 0 !== n) {
//               if (void 0 !== t) {
//                 i = (t = Array.isArray(t)
//                   ? t.map(V)
//                   : (t = V(t)) in n
//                   ? [t]
//                   : t.match(j) || []).length;
//                 for (; i--; ) delete n[t[i]];
//               }
//               (void 0 === t || T.isEmptyObject(n)) &&
//                 (e.nodeType
//                   ? (e[this.expando] = void 0)
//                   : delete e[this.expando]);
//             }
//           },
//           hasData: function (e) {
//             var t = e[this.expando];
//             return void 0 !== t && !T.isEmptyObject(t);
//           },
//         });
//       var Q = new K(),
//         J = new K(),
//         Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
//         ee = /[A-Z]/g;
//       function te(e, t, i) {
//         var n;
//         if (void 0 === i && 1 === e.nodeType)
//           if (
//             ((n = "data-" + t.replace(ee, "-$&").toLowerCase()),
//             "string" == typeof (i = e.getAttribute(n)))
//           ) {
//             try {
//               i = (function (e) {
//                 return (
//                   "true" === e ||
//                   ("false" !== e &&
//                     ("null" === e
//                       ? null
//                       : e === +e + ""
//                       ? +e
//                       : Z.test(e)
//                       ? JSON.parse(e)
//                       : e))
//                 );
//               })(i);
//             } catch (e) {}
//             J.set(e, t, i);
//           } else i = void 0;
//         return i;
//       }
//       T.extend({
//         hasData: function (e) {
//           return J.hasData(e) || Q.hasData(e);
//         },
//         data: function (e, t, i) {
//           return J.access(e, t, i);
//         },
//         removeData: function (e, t) {
//           J.remove(e, t);
//         },
//         _data: function (e, t, i) {
//           return Q.access(e, t, i);
//         },
//         _removeData: function (e, t) {
//           Q.remove(e, t);
//         },
//       }),
//         T.fn.extend({
//           data: function (e, t) {
//             var i,
//               n,
//               s,
//               r = this[0],
//               a = r && r.attributes;
//             if (void 0 === e) {
//               if (
//                 this.length &&
//                 ((s = J.get(r)), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))
//               ) {
//                 for (i = a.length; i--; )
//                   a[i] &&
//                     0 === (n = a[i].name).indexOf("data-") &&
//                     ((n = V(n.slice(5))), te(r, n, s[n]));
//                 Q.set(r, "hasDataAttrs", !0);
//               }
//               return s;
//             }
//             return "object" == typeof e
//               ? this.each(function () {
//                   J.set(this, e);
//                 })
//               : F(
//                   this,
//                   function (t) {
//                     var i;
//                     if (r && void 0 === t)
//                       return void 0 !== (i = J.get(r, e)) ||
//                         void 0 !== (i = te(r, e))
//                         ? i
//                         : void 0;
//                     this.each(function () {
//                       J.set(this, e, t);
//                     });
//                   },
//                   null,
//                   t,
//                   arguments.length > 1,
//                   null,
//                   !0
//                 );
//           },
//           removeData: function (e) {
//             return this.each(function () {
//               J.remove(this, e);
//             });
//           },
//         }),
//         T.extend({
//           queue: function (e, t, i) {
//             var n;
//             if (e)
//               return (
//                 (t = (t || "fx") + "queue"),
//                 (n = Q.get(e, t)),
//                 i &&
//                   (!n || Array.isArray(i)
//                     ? (n = Q.access(e, t, T.makeArray(i)))
//                     : n.push(i)),
//                 n || []
//               );
//           },
//           dequeue: function (e, t) {
//             t = t || "fx";
//             var i = T.queue(e, t),
//               n = i.length,
//               s = i.shift(),
//               r = T._queueHooks(e, t);
//             "inprogress" === s && ((s = i.shift()), n--),
//               s &&
//                 ("fx" === t && i.unshift("inprogress"),
//                 delete r.stop,
//                 s.call(
//                   e,
//                   function () {
//                     T.dequeue(e, t);
//                   },
//                   r
//                 )),
//               !n && r && r.empty.fire();
//           },
//           _queueHooks: function (e, t) {
//             var i = t + "queueHooks";
//             return (
//               Q.get(e, i) ||
//               Q.access(e, i, {
//                 empty: T.Callbacks("once memory").add(function () {
//                   Q.remove(e, [t + "queue", i]);
//                 }),
//               })
//             );
//           },
//         }),
//         T.fn.extend({
//           queue: function (e, t) {
//             var i = 2;
//             return (
//               "string" != typeof e && ((t = e), (e = "fx"), i--),
//               arguments.length < i
//                 ? T.queue(this[0], e)
//                 : void 0 === t
//                 ? this
//                 : this.each(function () {
//                     var i = T.queue(this, e, t);
//                     T._queueHooks(this, e),
//                       "fx" === e && "inprogress" !== i[0] && T.dequeue(this, e);
//                   })
//             );
//           },
//           dequeue: function (e) {
//             return this.each(function () {
//               T.dequeue(this, e);
//             });
//           },
//           clearQueue: function (e) {
//             return this.queue(e || "fx", []);
//           },
//           promise: function (e, t) {
//             var i,
//               n = 1,
//               s = T.Deferred(),
//               r = this,
//               a = this.length,
//               o = function () {
//                 --n || s.resolveWith(r, [r]);
//               };
//             for (
//               "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
//               a--;

//             )
//               (i = Q.get(r[a], e + "queueHooks")) &&
//                 i.empty &&
//                 (n++, i.empty.add(o));
//             return o(), s.promise(t);
//           },
//         });
//       var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
//         ne = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
//         se = ["Top", "Right", "Bottom", "Left"],
//         re = b.documentElement,
//         ae = function (e) {
//           return T.contains(e.ownerDocument, e);
//         },
//         oe = { composed: !0 };
//       re.getRootNode &&
//         (ae = function (e) {
//           return (
//             T.contains(e.ownerDocument, e) ||
//             e.getRootNode(oe) === e.ownerDocument
//           );
//         });
//       var le = function (e, t) {
//         return (
//           "none" === (e = t || e).style.display ||
//           ("" === e.style.display && ae(e) && "none" === T.css(e, "display"))
//         );
//       };
//       function ue(e, t, i, n) {
//         var s,
//           r,
//           a = 20,
//           o = n
//             ? function () {
//                 return n.cur();
//               }
//             : function () {
//                 return T.css(e, t, "");
//               },
//           l = o(),
//           u = (i && i[3]) || (T.cssNumber[t] ? "" : "px"),
//           d =
//             e.nodeType &&
//             (T.cssNumber[t] || ("px" !== u && +l)) &&
//             ne.exec(T.css(e, t));
//         if (d && d[3] !== u) {
//           for (l /= 2, u = u || d[3], d = +l || 1; a--; )
//             T.style(e, t, d + u),
//               (1 - r) * (1 - (r = o() / l || 0.5)) <= 0 && (a = 0),
//               (d /= r);
//           (d *= 2), T.style(e, t, d + u), (i = i || []);
//         }
//         return (
//           i &&
//             ((d = +d || +l || 0),
//             (s = i[1] ? d + (i[1] + 1) * i[2] : +i[2]),
//             n && ((n.unit = u), (n.start = d), (n.end = s))),
//           s
//         );
//       }
//       var de = {};
//       function ce(e) {
//         var t,
//           i = e.ownerDocument,
//           n = e.nodeName,
//           s = de[n];
//         return (
//           s ||
//           ((t = i.body.appendChild(i.createElement(n))),
//           (s = T.css(t, "display")),
//           t.parentNode.removeChild(t),
//           "none" === s && (s = "block"),
//           (de[n] = s),
//           s)
//         );
//       }
//       function he(e, t) {
//         for (var i, n, s = [], r = 0, a = e.length; r < a; r++)
//           (n = e[r]).style &&
//             ((i = n.style.display),
//             t
//               ? ("none" === i &&
//                   ((s[r] = Q.get(n, "display") || null),
//                   s[r] || (n.style.display = "")),
//                 "" === n.style.display && le(n) && (s[r] = ce(n)))
//               : "none" !== i && ((s[r] = "none"), Q.set(n, "display", i)));
//         for (r = 0; r < a; r++) null != s[r] && (e[r].style.display = s[r]);
//         return e;
//       }
//       T.fn.extend({
//         show: function () {
//           return he(this, !0);
//         },
//         hide: function () {
//           return he(this);
//         },
//         toggle: function (e) {
//           return "boolean" == typeof e
//             ? e
//               ? this.show()
//               : this.hide()
//             : this.each(function () {
//                 le(this) ? T(this).show() : T(this).hide();
//               });
//         },
//       });
//       var pe,
//         fe,
//         ve = /^(?:checkbox|radio)$/i,
//         me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
//         ge = /^$|^module$|\/(?:java|ecma)script/i;
//       (pe = b.createDocumentFragment().appendChild(b.createElement("div"))),
//         (fe = b.createElement("input")).setAttribute("type", "radio"),
//         fe.setAttribute("checked", "checked"),
//         fe.setAttribute("name", "t"),
//         pe.appendChild(fe),
//         (m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
//         (pe.innerHTML = "<textarea>x</textarea>"),
//         (m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
//         (pe.innerHTML = "<option></option>"),
//         (m.option = !!pe.lastChild);
//       var ye = {
//         thead: [1, "<table>", "</table>"],
//         col: [2, "<table><colgroup>", "</colgroup></table>"],
//         tr: [2, "<table><tbody>", "</tbody></table>"],
//         td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
//         _default: [0, "", ""],
//       };
//       function be(e, t) {
//         var i;
//         return (
//           (i =
//             void 0 !== e.getElementsByTagName
//               ? e.getElementsByTagName(t || "*")
//               : void 0 !== e.querySelectorAll
//               ? e.querySelectorAll(t || "*")
//               : []),
//           void 0 === t || (t && L(e, t)) ? T.merge([e], i) : i
//         );
//       }
//       function we(e, t) {
//         for (var i = 0, n = e.length; i < n; i++)
//           Q.set(e[i], "globalEval", !t || Q.get(t[i], "globalEval"));
//       }
//       (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
//         (ye.th = ye.td),
//         m.option ||
//           (ye.optgroup = ye.option =
//             [1, "<select multiple='multiple'>", "</select>"]);
//       var xe = /<|&#?\w+;/;
//       function Ee(e, t, i, n, s) {
//         for (
//           var r,
//             a,
//             o,
//             l,
//             u,
//             d,
//             c = t.createDocumentFragment(),
//             h = [],
//             p = 0,
//             f = e.length;
//           p < f;
//           p++
//         )
//           if ((r = e[p]) || 0 === r)
//             if ("object" === E(r)) T.merge(h, r.nodeType ? [r] : r);
//             else if (xe.test(r)) {
//               for (
//                 a = a || c.appendChild(t.createElement("div")),
//                   o = (me.exec(r) || ["", ""])[1].toLowerCase(),
//                   l = ye[o] || ye._default,
//                   a.innerHTML = l[1] + T.htmlPrefilter(r) + l[2],
//                   d = l[0];
//                 d--;

//               )
//                 a = a.lastChild;
//               T.merge(h, a.childNodes), ((a = c.firstChild).textContent = "");
//             } else h.push(t.createTextNode(r));
//         for (c.textContent = "", p = 0; (r = h[p++]); )
//           if (n && T.inArray(r, n) > -1) s && s.push(r);
//           else if (
//             ((u = ae(r)), (a = be(c.appendChild(r), "script")), u && we(a), i)
//           )
//             for (d = 0; (r = a[d++]); ) ge.test(r.type || "") && i.push(r);
//         return c;
//       }
//       var Te = /^([^.]*)(?:\.(.+)|)/;
//       function Ce() {
//         return !0;
//       }
//       function Se() {
//         return !1;
//       }
//       function Me(e, t) {
//         return (
//           (e ===
//             (function () {
//               try {
//                 return b.activeElement;
//               } catch (e) {}
//             })()) ==
//           ("focus" === t)
//         );
//       }
//       function ke(e, t, i, n, s, r) {
//         var a, o;
//         if ("object" == typeof t) {
//           for (o in ("string" != typeof i && ((n = n || i), (i = void 0)), t))
//             ke(e, o, i, n, t[o], r);
//           return e;
//         }
//         if (
//           (null == n && null == s
//             ? ((s = i), (n = i = void 0))
//             : null == s &&
//               ("string" == typeof i
//                 ? ((s = n), (n = void 0))
//                 : ((s = n), (n = i), (i = void 0))),
//           !1 === s)
//         )
//           s = Se;
//         else if (!s) return e;
//         return (
//           1 === r &&
//             ((a = s),
//             ((s = function (e) {
//               return T().off(e), a.apply(this, arguments);
//             }).guid = a.guid || (a.guid = T.guid++))),
//           e.each(function () {
//             T.event.add(this, t, s, n, i);
//           })
//         );
//       }
//       function Pe(e, t, i) {
//         i
//           ? (Q.set(e, t, !1),
//             T.event.add(e, t, {
//               namespace: !1,
//               handler: function (e) {
//                 var n,
//                   s,
//                   r = Q.get(this, t);
//                 if (1 & e.isTrigger && this[t]) {
//                   if (r.length)
//                     (T.event.special[t] || {}).delegateType &&
//                       e.stopPropagation();
//                   else if (
//                     ((r = o.call(arguments)),
//                     Q.set(this, t, r),
//                     (n = i(this, t)),
//                     this[t](),
//                     r !== (s = Q.get(this, t)) || n
//                       ? Q.set(this, t, !1)
//                       : (s = {}),
//                     r !== s)
//                   )
//                     return (
//                       e.stopImmediatePropagation(),
//                       e.preventDefault(),
//                       s && s.value
//                     );
//                 } else
//                   r.length &&
//                     (Q.set(this, t, {
//                       value: T.event.trigger(
//                         T.extend(r[0], T.Event.prototype),
//                         r.slice(1),
//                         this
//                       ),
//                     }),
//                     e.stopImmediatePropagation());
//               },
//             }))
//           : void 0 === Q.get(e, t) && T.event.add(e, t, Ce);
//       }
//       (T.event = {
//         global: {},
//         add: function (e, t, i, n, s) {
//           var r,
//             a,
//             o,
//             l,
//             u,
//             d,
//             c,
//             h,
//             p,
//             f,
//             v,
//             m = Q.get(e);
//           if (U(e))
//             for (
//               i.handler && ((i = (r = i).handler), (s = r.selector)),
//                 s && T.find.matchesSelector(re, s),
//                 i.guid || (i.guid = T.guid++),
//                 (l = m.events) || (l = m.events = Object.create(null)),
//                 (a = m.handle) ||
//                   (a = m.handle =
//                     function (t) {
//                       return void 0 !== T && T.event.triggered !== t.type
//                         ? T.event.dispatch.apply(e, arguments)
//                         : void 0;
//                     }),
//                 u = (t = (t || "").match(j) || [""]).length;
//               u--;

//             )
//               (p = v = (o = Te.exec(t[u]) || [])[1]),
//                 (f = (o[2] || "").split(".").sort()),
//                 p &&
//                   ((c = T.event.special[p] || {}),
//                   (p = (s ? c.delegateType : c.bindType) || p),
//                   (c = T.event.special[p] || {}),
//                   (d = T.extend(
//                     {
//                       type: p,
//                       origType: v,
//                       data: n,
//                       handler: i,
//                       guid: i.guid,
//                       selector: s,
//                       needsContext: s && T.expr.match.needsContext.test(s),
//                       namespace: f.join("."),
//                     },
//                     r
//                   )),
//                   (h = l[p]) ||
//                     (((h = l[p] = []).delegateCount = 0),
//                     (c.setup && !1 !== c.setup.call(e, n, f, a)) ||
//                       (e.addEventListener && e.addEventListener(p, a))),
//                   c.add &&
//                     (c.add.call(e, d),
//                     d.handler.guid || (d.handler.guid = i.guid)),
//                   s ? h.splice(h.delegateCount++, 0, d) : h.push(d),
//                   (T.event.global[p] = !0));
//         },
//         remove: function (e, t, i, n, s) {
//           var r,
//             a,
//             o,
//             l,
//             u,
//             d,
//             c,
//             h,
//             p,
//             f,
//             v,
//             m = Q.hasData(e) && Q.get(e);
//           if (m && (l = m.events)) {
//             for (u = (t = (t || "").match(j) || [""]).length; u--; )
//               if (
//                 ((p = v = (o = Te.exec(t[u]) || [])[1]),
//                 (f = (o[2] || "").split(".").sort()),
//                 p)
//               ) {
//                 for (
//                   c = T.event.special[p] || {},
//                     h = l[(p = (n ? c.delegateType : c.bindType) || p)] || [],
//                     o =
//                       o[2] &&
//                       new RegExp(
//                         "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
//                       ),
//                     a = r = h.length;
//                   r--;

//                 )
//                   (d = h[r]),
//                     (!s && v !== d.origType) ||
//                       (i && i.guid !== d.guid) ||
//                       (o && !o.test(d.namespace)) ||
//                       (n && n !== d.selector && ("**" !== n || !d.selector)) ||
//                       (h.splice(r, 1),
//                       d.selector && h.delegateCount--,
//                       c.remove && c.remove.call(e, d));
//                 a &&
//                   !h.length &&
//                   ((c.teardown && !1 !== c.teardown.call(e, f, m.handle)) ||
//                     T.removeEvent(e, p, m.handle),
//                   delete l[p]);
//               } else for (p in l) T.event.remove(e, p + t[u], i, n, !0);
//             T.isEmptyObject(l) && Q.remove(e, "handle events");
//           }
//         },
//         dispatch: function (e) {
//           var t,
//             i,
//             n,
//             s,
//             r,
//             a,
//             o = new Array(arguments.length),
//             l = T.event.fix(e),
//             u = (Q.get(this, "events") || Object.create(null))[l.type] || [],
//             d = T.event.special[l.type] || {};
//           for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
//           if (
//             ((l.delegateTarget = this),
//             !d.preDispatch || !1 !== d.preDispatch.call(this, l))
//           ) {
//             for (
//               a = T.event.handlers.call(this, l, u), t = 0;
//               (s = a[t++]) && !l.isPropagationStopped();

//             )
//               for (
//                 l.currentTarget = s.elem, i = 0;
//                 (r = s.handlers[i++]) && !l.isImmediatePropagationStopped();

//               )
//                 (l.rnamespace &&
//                   !1 !== r.namespace &&
//                   !l.rnamespace.test(r.namespace)) ||
//                   ((l.handleObj = r),
//                   (l.data = r.data),
//                   void 0 !==
//                     (n = (
//                       (T.event.special[r.origType] || {}).handle || r.handler
//                     ).apply(s.elem, o)) &&
//                     !1 === (l.result = n) &&
//                     (l.preventDefault(), l.stopPropagation()));
//             return d.postDispatch && d.postDispatch.call(this, l), l.result;
//           }
//         },
//         handlers: function (e, t) {
//           var i,
//             n,
//             s,
//             r,
//             a,
//             o = [],
//             l = t.delegateCount,
//             u = e.target;
//           if (l && u.nodeType && !("click" === e.type && e.button >= 1))
//             for (; u !== this; u = u.parentNode || this)
//               if (
//                 1 === u.nodeType &&
//                 ("click" !== e.type || !0 !== u.disabled)
//               ) {
//                 for (r = [], a = {}, i = 0; i < l; i++)
//                   void 0 === a[(s = (n = t[i]).selector + " ")] &&
//                     (a[s] = n.needsContext
//                       ? T(s, this).index(u) > -1
//                       : T.find(s, this, null, [u]).length),
//                     a[s] && r.push(n);
//                 r.length && o.push({ elem: u, handlers: r });
//               }
//           return (
//             (u = this),
//             l < t.length && o.push({ elem: u, handlers: t.slice(l) }),
//             o
//           );
//         },
//         addProp: function (e, t) {
//           Object.defineProperty(T.Event.prototype, e, {
//             enumerable: !0,
//             configurable: !0,
//             get: g(t)
//               ? function () {
//                   if (this.originalEvent) return t(this.originalEvent);
//                 }
//               : function () {
//                   if (this.originalEvent) return this.originalEvent[e];
//                 },
//             set: function (t) {
//               Object.defineProperty(this, e, {
//                 enumerable: !0,
//                 configurable: !0,
//                 writable: !0,
//                 value: t,
//               });
//             },
//           });
//         },
//         fix: function (e) {
//           return e[T.expando] ? e : new T.Event(e);
//         },
//         special: {
//           load: { noBubble: !0 },
//           click: {
//             setup: function (e) {
//               var t = this || e;
//               return (
//                 ve.test(t.type) &&
//                   t.click &&
//                   L(t, "input") &&
//                   Pe(t, "click", Ce),
//                 !1
//               );
//             },
//             trigger: function (e) {
//               var t = this || e;
//               return (
//                 ve.test(t.type) && t.click && L(t, "input") && Pe(t, "click"),
//                 !0
//               );
//             },
//             _default: function (e) {
//               var t = e.target;
//               return (
//                 (ve.test(t.type) &&
//                   t.click &&
//                   L(t, "input") &&
//                   Q.get(t, "click")) ||
//                 L(t, "a")
//               );
//             },
//           },
//           beforeunload: {
//             postDispatch: function (e) {
//               void 0 !== e.result &&
//                 e.originalEvent &&
//                 (e.originalEvent.returnValue = e.result);
//             },
//           },
//         },
//       }),
//         (T.removeEvent = function (e, t, i) {
//           e.removeEventListener && e.removeEventListener(t, i);
//         }),
//         (T.Event = function (e, t) {
//           if (!(this instanceof T.Event)) return new T.Event(e, t);
//           e && e.type
//             ? ((this.originalEvent = e),
//               (this.type = e.type),
//               (this.isDefaultPrevented =
//                 e.defaultPrevented ||
//                 (void 0 === e.defaultPrevented && !1 === e.returnValue)
//                   ? Ce
//                   : Se),
//               (this.target =
//                 e.target && 3 === e.target.nodeType
//                   ? e.target.parentNode
//                   : e.target),
//               (this.currentTarget = e.currentTarget),
//               (this.relatedTarget = e.relatedTarget))
//             : (this.type = e),
//             t && T.extend(this, t),
//             (this.timeStamp = (e && e.timeStamp) || Date.now()),
//             (this[T.expando] = !0);
//         }),
//         (T.Event.prototype = {
//           constructor: T.Event,
//           isDefaultPrevented: Se,
//           isPropagationStopped: Se,
//           isImmediatePropagationStopped: Se,
//           isSimulated: !1,
//           preventDefault: function () {
//             var e = this.originalEvent;
//             (this.isDefaultPrevented = Ce),
//               e && !this.isSimulated && e.preventDefault();
//           },
//           stopPropagation: function () {
//             var e = this.originalEvent;
//             (this.isPropagationStopped = Ce),
//               e && !this.isSimulated && e.stopPropagation();
//           },
//           stopImmediatePropagation: function () {
//             var e = this.originalEvent;
//             (this.isImmediatePropagationStopped = Ce),
//               e && !this.isSimulated && e.stopImmediatePropagation(),
//               this.stopPropagation();
//           },
//         }),
//         T.each(
//           {
//             altKey: !0,
//             bubbles: !0,
//             cancelable: !0,
//             changedTouches: !0,
//             ctrlKey: !0,
//             detail: !0,
//             eventPhase: !0,
//             metaKey: !0,
//             pageX: !0,
//             pageY: !0,
//             shiftKey: !0,
//             view: !0,
//             char: !0,
//             code: !0,
//             charCode: !0,
//             key: !0,
//             keyCode: !0,
//             button: !0,
//             buttons: !0,
//             clientX: !0,
//             clientY: !0,
//             offsetX: !0,
//             offsetY: !0,
//             pointerId: !0,
//             pointerType: !0,
//             screenX: !0,
//             screenY: !0,
//             targetTouches: !0,
//             toElement: !0,
//             touches: !0,
//             which: !0,
//           },
//           T.event.addProp
//         ),
//         T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
//           T.event.special[e] = {
//             setup: function () {
//               return Pe(this, e, Me), !1;
//             },
//             trigger: function () {
//               return Pe(this, e), !0;
//             },
//             _default: function (t) {
//               return Q.get(t.target, e);
//             },
//             delegateType: t,
//           };
//         }),
//         T.each(
//           {
//             mouseenter: "mouseover",
//             mouseleave: "mouseout",
//             pointerenter: "pointerover",
//             pointerleave: "pointerout",
//           },
//           function (e, t) {
//             T.event.special[e] = {
//               delegateType: t,
//               bindType: t,
//               handle: function (e) {
//                 var i,
//                   n = this,
//                   s = e.relatedTarget,
//                   r = e.handleObj;
//                 return (
//                   (s && (s === n || T.contains(n, s))) ||
//                     ((e.type = r.origType),
//                     (i = r.handler.apply(this, arguments)),
//                     (e.type = t)),
//                   i
//                 );
//               },
//             };
//           }
//         ),
//         T.fn.extend({
//           on: function (e, t, i, n) {
//             return ke(this, e, t, i, n);
//           },
//           one: function (e, t, i, n) {
//             return ke(this, e, t, i, n, 1);
//           },
//           off: function (e, t, i) {
//             var n, s;
//             if (e && e.preventDefault && e.handleObj)
//               return (
//                 (n = e.handleObj),
//                 T(e.delegateTarget).off(
//                   n.namespace ? n.origType + "." + n.namespace : n.origType,
//                   n.selector,
//                   n.handler
//                 ),
//                 this
//               );
//             if ("object" == typeof e) {
//               for (s in e) this.off(s, t, e[s]);
//               return this;
//             }
//             return (
//               (!1 !== t && "function" != typeof t) || ((i = t), (t = void 0)),
//               !1 === i && (i = Se),
//               this.each(function () {
//                 T.event.remove(this, e, i, t);
//               })
//             );
//           },
//         });
//       var Le = /<script|<style|<link/i,
//         Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
//         ze = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
//       function Ae(e, t) {
//         return (
//           (L(e, "table") &&
//             L(11 !== t.nodeType ? t : t.firstChild, "tr") &&
//             T(e).children("tbody")[0]) ||
//           e
//         );
//       }
//       function De(e) {
//         return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
//       }
//       function $e(e) {
//         return (
//           "true/" === (e.type || "").slice(0, 5)
//             ? (e.type = e.type.slice(5))
//             : e.removeAttribute("type"),
//           e
//         );
//       }
//       function Ne(e, t) {
//         var i, n, s, r, a, o;
//         if (1 === t.nodeType) {
//           if (Q.hasData(e) && (o = Q.get(e).events))
//             for (s in (Q.remove(t, "handle events"), o))
//               for (i = 0, n = o[s].length; i < n; i++)
//                 T.event.add(t, s, o[s][i]);
//           J.hasData(e) &&
//             ((r = J.access(e)), (a = T.extend({}, r)), J.set(t, a));
//         }
//       }
//       function Ie(e, t) {
//         var i = t.nodeName.toLowerCase();
//         "input" === i && ve.test(e.type)
//           ? (t.checked = e.checked)
//           : ("input" !== i && "textarea" !== i) ||
//             (t.defaultValue = e.defaultValue);
//       }
//       function je(e, t, i, n) {
//         t = l(t);
//         var s,
//           r,
//           a,
//           o,
//           u,
//           d,
//           c = 0,
//           h = e.length,
//           p = h - 1,
//           f = t[0],
//           v = g(f);
//         if (v || (h > 1 && "string" == typeof f && !m.checkClone && Oe.test(f)))
//           return e.each(function (s) {
//             var r = e.eq(s);
//             v && (t[0] = f.call(this, s, r.html())), je(r, t, i, n);
//           });
//         if (
//           h &&
//           ((r = (s = Ee(t, e[0].ownerDocument, !1, e, n)).firstChild),
//           1 === s.childNodes.length && (s = r),
//           r || n)
//         ) {
//           for (o = (a = T.map(be(s, "script"), De)).length; c < h; c++)
//             (u = s),
//               c !== p &&
//                 ((u = T.clone(u, !0, !0)), o && T.merge(a, be(u, "script"))),
//               i.call(e[c], u, c);
//           if (o)
//             for (
//               d = a[a.length - 1].ownerDocument, T.map(a, $e), c = 0;
//               c < o;
//               c++
//             )
//               (u = a[c]),
//                 ge.test(u.type || "") &&
//                   !Q.access(u, "globalEval") &&
//                   T.contains(d, u) &&
//                   (u.src && "module" !== (u.type || "").toLowerCase()
//                     ? T._evalUrl &&
//                       !u.noModule &&
//                       T._evalUrl(
//                         u.src,
//                         { nonce: u.nonce || u.getAttribute("nonce") },
//                         d
//                       )
//                     : x(u.textContent.replace(ze, ""), u, d));
//         }
//         return e;
//       }
//       function He(e, t, i) {
//         for (var n, s = t ? T.filter(t, e) : e, r = 0; null != (n = s[r]); r++)
//           i || 1 !== n.nodeType || T.cleanData(be(n)),
//             n.parentNode &&
//               (i && ae(n) && we(be(n, "script")), n.parentNode.removeChild(n));
//         return e;
//       }
//       T.extend({
//         htmlPrefilter: function (e) {
//           return e;
//         },
//         clone: function (e, t, i) {
//           var n,
//             s,
//             r,
//             a,
//             o = e.cloneNode(!0),
//             l = ae(e);
//           if (
//             !(
//               m.noCloneChecked ||
//               (1 !== e.nodeType && 11 !== e.nodeType) ||
//               T.isXMLDoc(e)
//             )
//           )
//             for (a = be(o), n = 0, s = (r = be(e)).length; n < s; n++)
//               Ie(r[n], a[n]);
//           if (t)
//             if (i)
//               for (
//                 r = r || be(e), a = a || be(o), n = 0, s = r.length;
//                 n < s;
//                 n++
//               )
//                 Ne(r[n], a[n]);
//             else Ne(e, o);
//           return (
//             (a = be(o, "script")).length > 0 && we(a, !l && be(e, "script")), o
//           );
//         },
//         cleanData: function (e) {
//           for (
//             var t, i, n, s = T.event.special, r = 0;
//             void 0 !== (i = e[r]);
//             r++
//           )
//             if (U(i)) {
//               if ((t = i[Q.expando])) {
//                 if (t.events)
//                   for (n in t.events)
//                     s[n] ? T.event.remove(i, n) : T.removeEvent(i, n, t.handle);
//                 i[Q.expando] = void 0;
//               }
//               i[J.expando] && (i[J.expando] = void 0);
//             }
//         },
//       }),
//         T.fn.extend({
//           detach: function (e) {
//             return He(this, e, !0);
//           },
//           remove: function (e) {
//             return He(this, e);
//           },
//           text: function (e) {
//             return F(
//               this,
//               function (e) {
//                 return void 0 === e
//                   ? T.text(this)
//                   : this.empty().each(function () {
//                       (1 !== this.nodeType &&
//                         11 !== this.nodeType &&
//                         9 !== this.nodeType) ||
//                         (this.textContent = e);
//                     });
//               },
//               null,
//               e,
//               arguments.length
//             );
//           },
//           append: function () {
//             return je(this, arguments, function (e) {
//               (1 !== this.nodeType &&
//                 11 !== this.nodeType &&
//                 9 !== this.nodeType) ||
//                 Ae(this, e).appendChild(e);
//             });
//           },
//           prepend: function () {
//             return je(this, arguments, function (e) {
//               if (
//                 1 === this.nodeType ||
//                 11 === this.nodeType ||
//                 9 === this.nodeType
//               ) {
//                 var t = Ae(this, e);
//                 t.insertBefore(e, t.firstChild);
//               }
//             });
//           },
//           before: function () {
//             return je(this, arguments, function (e) {
//               this.parentNode && this.parentNode.insertBefore(e, this);
//             });
//           },
//           after: function () {
//             return je(this, arguments, function (e) {
//               this.parentNode &&
//                 this.parentNode.insertBefore(e, this.nextSibling);
//             });
//           },
//           empty: function () {
//             for (var e, t = 0; null != (e = this[t]); t++)
//               1 === e.nodeType &&
//                 (T.cleanData(be(e, !1)), (e.textContent = ""));
//             return this;
//           },
//           clone: function (e, t) {
//             return (
//               (e = null != e && e),
//               (t = null == t ? e : t),
//               this.map(function () {
//                 return T.clone(this, e, t);
//               })
//             );
//           },
//           html: function (e) {
//             return F(
//               this,
//               function (e) {
//                 var t = this[0] || {},
//                   i = 0,
//                   n = this.length;
//                 if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
//                 if (
//                   "string" == typeof e &&
//                   !Le.test(e) &&
//                   !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]
//                 ) {
//                   e = T.htmlPrefilter(e);
//                   try {
//                     for (; i < n; i++)
//                       1 === (t = this[i] || {}).nodeType &&
//                         (T.cleanData(be(t, !1)), (t.innerHTML = e));
//                     t = 0;
//                   } catch (e) {}
//                 }
//                 t && this.empty().append(e);
//               },
//               null,
//               e,
//               arguments.length
//             );
//           },
//           replaceWith: function () {
//             var e = [];
//             return je(
//               this,
//               arguments,
//               function (t) {
//                 var i = this.parentNode;
//                 T.inArray(this, e) < 0 &&
//                   (T.cleanData(be(this)), i && i.replaceChild(t, this));
//               },
//               e
//             );
//           },
//         }),
//         T.each(
//           {
//             appendTo: "append",
//             prependTo: "prepend",
//             insertBefore: "before",
//             insertAfter: "after",
//             replaceAll: "replaceWith",
//           },
//           function (e, t) {
//             T.fn[e] = function (e) {
//               for (
//                 var i, n = [], s = T(e), r = s.length - 1, a = 0;
//                 a <= r;
//                 a++
//               )
//                 (i = a === r ? this : this.clone(!0)),
//                   T(s[a])[t](i),
//                   u.apply(n, i.get());
//               return this.pushStack(n);
//             };
//           }
//         );
//       var qe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
//         Be = /^--/,
//         Re = function (e) {
//           var t = e.ownerDocument.defaultView;
//           return (t && t.opener) || (t = i), t.getComputedStyle(e);
//         },
//         Ge = function (e, t, i) {
//           var n,
//             s,
//             r = {};
//           for (s in t) (r[s] = e.style[s]), (e.style[s] = t[s]);
//           for (s in ((n = i.call(e)), t)) e.style[s] = r[s];
//           return n;
//         },
//         We = new RegExp(se.join("|"), "i"),
//         Fe = new RegExp(
//           "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
//           "g"
//         );
//       function Xe(e, t, i) {
//         var n,
//           s,
//           r,
//           a,
//           o = Be.test(t),
//           l = e.style;
//         return (
//           (i = i || Re(e)) &&
//             ((a = i.getPropertyValue(t) || i[t]),
//             o && a && (a = a.replace(Fe, "$1") || void 0),
//             "" !== a || ae(e) || (a = T.style(e, t)),
//             !m.pixelBoxStyles() &&
//               qe.test(a) &&
//               We.test(t) &&
//               ((n = l.width),
//               (s = l.minWidth),
//               (r = l.maxWidth),
//               (l.minWidth = l.maxWidth = l.width = a),
//               (a = i.width),
//               (l.width = n),
//               (l.minWidth = s),
//               (l.maxWidth = r))),
//           void 0 !== a ? a + "" : a
//         );
//       }
//       function _e(e, t) {
//         return {
//           get: function () {
//             if (!e()) return (this.get = t).apply(this, arguments);
//             delete this.get;
//           },
//         };
//       }
//       !(function () {
//         function e() {
//           if (d) {
//             (u.style.cssText =
//               "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
//               (d.style.cssText =
//                 "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
//               re.appendChild(u).appendChild(d);
//             var e = i.getComputedStyle(d);
//             (n = "1%" !== e.top),
//               (l = 12 === t(e.marginLeft)),
//               (d.style.right = "60%"),
//               (a = 36 === t(e.right)),
//               (s = 36 === t(e.width)),
//               (d.style.position = "absolute"),
//               (r = 12 === t(d.offsetWidth / 3)),
//               re.removeChild(u),
//               (d = null);
//           }
//         }
//         function t(e) {
//           return Math.round(parseFloat(e));
//         }
//         var n,
//           s,
//           r,
//           a,
//           o,
//           l,
//           u = b.createElement("div"),
//           d = b.createElement("div");
//         d.style &&
//           ((d.style.backgroundClip = "content-box"),
//           (d.cloneNode(!0).style.backgroundClip = ""),
//           (m.clearCloneStyle = "content-box" === d.style.backgroundClip),
//           T.extend(m, {
//             boxSizingReliable: function () {
//               return e(), s;
//             },
//             pixelBoxStyles: function () {
//               return e(), a;
//             },
//             pixelPosition: function () {
//               return e(), n;
//             },
//             reliableMarginLeft: function () {
//               return e(), l;
//             },
//             scrollboxSize: function () {
//               return e(), r;
//             },
//             reliableTrDimensions: function () {
//               var e, t, n, s;
//               return (
//                 null == o &&
//                   ((e = b.createElement("table")),
//                   (t = b.createElement("tr")),
//                   (n = b.createElement("div")),
//                   (e.style.cssText =
//                     "position:absolute;left:-11111px;border-collapse:separate"),
//                   (t.style.cssText = "border:1px solid"),
//                   (t.style.height = "1px"),
//                   (n.style.height = "9px"),
//                   (n.style.display = "block"),
//                   re.appendChild(e).appendChild(t).appendChild(n),
//                   (s = i.getComputedStyle(t)),
//                   (o =
//                     parseInt(s.height, 10) +
//                       parseInt(s.borderTopWidth, 10) +
//                       parseInt(s.borderBottomWidth, 10) ===
//                     t.offsetHeight),
//                   re.removeChild(e)),
//                 o
//               );
//             },
//           }));
//       })();
//       var Ye = ["Webkit", "Moz", "ms"],
//         Ve = b.createElement("div").style,
//         Ue = {};
//       function Ke(e) {
//         var t = T.cssProps[e] || Ue[e];
//         return (
//           t ||
//           (e in Ve
//             ? e
//             : (Ue[e] =
//                 (function (e) {
//                   for (
//                     var t = e[0].toUpperCase() + e.slice(1), i = Ye.length;
//                     i--;

//                   )
//                     if ((e = Ye[i] + t) in Ve) return e;
//                 })(e) || e))
//         );
//       }
//       var Qe = /^(none|table(?!-c[ea]).+)/,
//         Je = { position: "absolute", visibility: "hidden", display: "block" },
//         Ze = { letterSpacing: "0", fontWeight: "400" };
//       function et(e, t, i) {
//         var n = ne.exec(t);
//         return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
//       }
//       function tt(e, t, i, n, s, r) {
//         var a = "width" === t ? 1 : 0,
//           o = 0,
//           l = 0;
//         if (i === (n ? "border" : "content")) return 0;
//         for (; a < 4; a += 2)
//           "margin" === i && (l += T.css(e, i + se[a], !0, s)),
//             n
//               ? ("content" === i && (l -= T.css(e, "padding" + se[a], !0, s)),
//                 "margin" !== i &&
//                   (l -= T.css(e, "border" + se[a] + "Width", !0, s)))
//               : ((l += T.css(e, "padding" + se[a], !0, s)),
//                 "padding" !== i
//                   ? (l += T.css(e, "border" + se[a] + "Width", !0, s))
//                   : (o += T.css(e, "border" + se[a] + "Width", !0, s)));
//         return (
//           !n &&
//             r >= 0 &&
//             (l +=
//               Math.max(
//                 0,
//                 Math.ceil(
//                   e["offset" + t[0].toUpperCase() + t.slice(1)] -
//                     r -
//                     l -
//                     o -
//                     0.5
//                 )
//               ) || 0),
//           l
//         );
//       }
//       function it(e, t, i) {
//         var n = Re(e),
//           s =
//             (!m.boxSizingReliable() || i) &&
//             "border-box" === T.css(e, "boxSizing", !1, n),
//           r = s,
//           a = Xe(e, t, n),
//           o = "offset" + t[0].toUpperCase() + t.slice(1);
//         if (qe.test(a)) {
//           if (!i) return a;
//           a = "auto";
//         }
//         return (
//           ((!m.boxSizingReliable() && s) ||
//             (!m.reliableTrDimensions() && L(e, "tr")) ||
//             "auto" === a ||
//             (!parseFloat(a) && "inline" === T.css(e, "display", !1, n))) &&
//             e.getClientRects().length &&
//             ((s = "border-box" === T.css(e, "boxSizing", !1, n)),
//             (r = o in e) && (a = e[o])),
//           (a = parseFloat(a) || 0) +
//             tt(e, t, i || (s ? "border" : "content"), r, n, a) +
//             "px"
//         );
//       }
//       function nt(e, t, i, n, s) {
//         return new nt.prototype.init(e, t, i, n, s);
//       }
//       T.extend({
//         cssHooks: {
//           opacity: {
//             get: function (e, t) {
//               if (t) {
//                 var i = Xe(e, "opacity");
//                 return "" === i ? "1" : i;
//               }
//             },
//           },
//         },
//         cssNumber: {
//           animationIterationCount: !0,
//           columnCount: !0,
//           fillOpacity: !0,
//           flexGrow: !0,
//           flexShrink: !0,
//           fontWeight: !0,
//           gridArea: !0,
//           gridColumn: !0,
//           gridColumnEnd: !0,
//           gridColumnStart: !0,
//           gridRow: !0,
//           gridRowEnd: !0,
//           gridRowStart: !0,
//           lineHeight: !0,
//           opacity: !0,
//           order: !0,
//           orphans: !0,
//           widows: !0,
//           zIndex: !0,
//           zoom: !0,
//         },
//         cssProps: {},
//         style: function (e, t, i, n) {
//           if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
//             var s,
//               r,
//               a,
//               o = V(t),
//               l = Be.test(t),
//               u = e.style;
//             if (
//               (l || (t = Ke(o)),
//               (a = T.cssHooks[t] || T.cssHooks[o]),
//               void 0 === i)
//             )
//               return a && "get" in a && void 0 !== (s = a.get(e, !1, n))
//                 ? s
//                 : u[t];
//             "string" === (r = typeof i) &&
//               (s = ne.exec(i)) &&
//               s[1] &&
//               ((i = ue(e, t, s)), (r = "number")),
//               null != i &&
//                 i == i &&
//                 ("number" !== r ||
//                   l ||
//                   (i += (s && s[3]) || (T.cssNumber[o] ? "" : "px")),
//                 m.clearCloneStyle ||
//                   "" !== i ||
//                   0 !== t.indexOf("background") ||
//                   (u[t] = "inherit"),
//                 (a && "set" in a && void 0 === (i = a.set(e, i, n))) ||
//                   (l ? u.setProperty(t, i) : (u[t] = i)));
//           }
//         },
//         css: function (e, t, i, n) {
//           var s,
//             r,
//             a,
//             o = V(t);
//           return (
//             Be.test(t) || (t = Ke(o)),
//             (a = T.cssHooks[t] || T.cssHooks[o]) &&
//               "get" in a &&
//               (s = a.get(e, !0, i)),
//             void 0 === s && (s = Xe(e, t, n)),
//             "normal" === s && t in Ze && (s = Ze[t]),
//             "" === i || i
//               ? ((r = parseFloat(s)), !0 === i || isFinite(r) ? r || 0 : s)
//               : s
//           );
//         },
//       }),
//         T.each(["height", "width"], function (e, t) {
//           T.cssHooks[t] = {
//             get: function (e, i, n) {
//               if (i)
//                 return !Qe.test(T.css(e, "display")) ||
//                   (e.getClientRects().length && e.getBoundingClientRect().width)
//                   ? it(e, t, n)
//                   : Ge(e, Je, function () {
//                       return it(e, t, n);
//                     });
//             },
//             set: function (e, i, n) {
//               var s,
//                 r = Re(e),
//                 a = !m.scrollboxSize() && "absolute" === r.position,
//                 o = (a || n) && "border-box" === T.css(e, "boxSizing", !1, r),
//                 l = n ? tt(e, t, n, o, r) : 0;
//               return (
//                 o &&
//                   a &&
//                   (l -= Math.ceil(
//                     e["offset" + t[0].toUpperCase() + t.slice(1)] -
//                       parseFloat(r[t]) -
//                       tt(e, t, "border", !1, r) -
//                       0.5
//                   )),
//                 l &&
//                   (s = ne.exec(i)) &&
//                   "px" !== (s[3] || "px") &&
//                   ((e.style[t] = i), (i = T.css(e, t))),
//                 et(0, i, l)
//               );
//             },
//           };
//         }),
//         (T.cssHooks.marginLeft = _e(m.reliableMarginLeft, function (e, t) {
//           if (t)
//             return (
//               (parseFloat(Xe(e, "marginLeft")) ||
//                 e.getBoundingClientRect().left -
//                   Ge(e, { marginLeft: 0 }, function () {
//                     return e.getBoundingClientRect().left;
//                   })) + "px"
//             );
//         })),
//         T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
//           (T.cssHooks[e + t] = {
//             expand: function (i) {
//               for (
//                 var n = 0,
//                   s = {},
//                   r = "string" == typeof i ? i.split(" ") : [i];
//                 n < 4;
//                 n++
//               )
//                 s[e + se[n] + t] = r[n] || r[n - 2] || r[0];
//               return s;
//             },
//           }),
//             "margin" !== e && (T.cssHooks[e + t].set = et);
//         }),
//         T.fn.extend({
//           css: function (e, t) {
//             return F(
//               this,
//               function (e, t, i) {
//                 var n,
//                   s,
//                   r = {},
//                   a = 0;
//                 if (Array.isArray(t)) {
//                   for (n = Re(e), s = t.length; a < s; a++)
//                     r[t[a]] = T.css(e, t[a], !1, n);
//                   return r;
//                 }
//                 return void 0 !== i ? T.style(e, t, i) : T.css(e, t);
//               },
//               e,
//               t,
//               arguments.length > 1
//             );
//           },
//         }),
//         (T.Tween = nt),
//         (nt.prototype = {
//           constructor: nt,
//           init: function (e, t, i, n, s, r) {
//             (this.elem = e),
//               (this.prop = i),
//               (this.easing = s || T.easing._default),
//               (this.options = t),
//               (this.start = this.now = this.cur()),
//               (this.end = n),
//               (this.unit = r || (T.cssNumber[i] ? "" : "px"));
//           },
//           cur: function () {
//             var e = nt.propHooks[this.prop];
//             return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
//           },
//           run: function (e) {
//             var t,
//               i = nt.propHooks[this.prop];
//             return (
//               this.options.duration
//                 ? (this.pos = t =
//                     T.easing[this.easing](
//                       e,
//                       this.options.duration * e,
//                       0,
//                       1,
//                       this.options.duration
//                     ))
//                 : (this.pos = t = e),
//               (this.now = (this.end - this.start) * t + this.start),
//               this.options.step &&
//                 this.options.step.call(this.elem, this.now, this),
//               i && i.set ? i.set(this) : nt.propHooks._default.set(this),
//               this
//             );
//           },
//         }),
//         (nt.prototype.init.prototype = nt.prototype),
//         (nt.propHooks = {
//           _default: {
//             get: function (e) {
//               var t;
//               return 1 !== e.elem.nodeType ||
//                 (null != e.elem[e.prop] && null == e.elem.style[e.prop])
//                 ? e.elem[e.prop]
//                 : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
//                 ? t
//                 : 0;
//             },
//             set: function (e) {
//               T.fx.step[e.prop]
//                 ? T.fx.step[e.prop](e)
//                 : 1 !== e.elem.nodeType ||
//                   (!T.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)])
//                 ? (e.elem[e.prop] = e.now)
//                 : T.style(e.elem, e.prop, e.now + e.unit);
//             },
//           },
//         }),
//         (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
//           {
//             set: function (e) {
//               e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
//             },
//           }),
//         (T.easing = {
//           linear: function (e) {
//             return e;
//           },
//           swing: function (e) {
//             return 0.5 - Math.cos(e * Math.PI) / 2;
//           },
//           _default: "swing",
//         }),
//         (T.fx = nt.prototype.init),
//         (T.fx.step = {});
//       var st,
//         rt,
//         at = /^(?:toggle|show|hide)$/,
//         ot = /queueHooks$/;
//       function lt() {
//         rt &&
//           (!1 === b.hidden && i.requestAnimationFrame
//             ? i.requestAnimationFrame(lt)
//             : i.setTimeout(lt, T.fx.interval),
//           T.fx.tick());
//       }
//       function ut() {
//         return (
//           i.setTimeout(function () {
//             st = void 0;
//           }),
//           (st = Date.now())
//         );
//       }
//       function dt(e, t) {
//         var i,
//           n = 0,
//           s = { height: e };
//         for (t = t ? 1 : 0; n < 4; n += 2 - t)
//           s["margin" + (i = se[n])] = s["padding" + i] = e;
//         return t && (s.opacity = s.width = e), s;
//       }
//       function ct(e, t, i) {
//         for (
//           var n,
//             s = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
//             r = 0,
//             a = s.length;
//           r < a;
//           r++
//         )
//           if ((n = s[r].call(i, t, e))) return n;
//       }
//       function ht(e, t, i) {
//         var n,
//           s,
//           r = 0,
//           a = ht.prefilters.length,
//           o = T.Deferred().always(function () {
//             delete l.elem;
//           }),
//           l = function () {
//             if (s) return !1;
//             for (
//               var t = st || ut(),
//                 i = Math.max(0, u.startTime + u.duration - t),
//                 n = 1 - (i / u.duration || 0),
//                 r = 0,
//                 a = u.tweens.length;
//               r < a;
//               r++
//             )
//               u.tweens[r].run(n);
//             return (
//               o.notifyWith(e, [u, n, i]),
//               n < 1 && a
//                 ? i
//                 : (a || o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u]), !1)
//             );
//           },
//           u = o.promise({
//             elem: e,
//             props: T.extend({}, t),
//             opts: T.extend(
//               !0,
//               { specialEasing: {}, easing: T.easing._default },
//               i
//             ),
//             originalProperties: t,
//             originalOptions: i,
//             startTime: st || ut(),
//             duration: i.duration,
//             tweens: [],
//             createTween: function (t, i) {
//               var n = T.Tween(
//                 e,
//                 u.opts,
//                 t,
//                 i,
//                 u.opts.specialEasing[t] || u.opts.easing
//               );
//               return u.tweens.push(n), n;
//             },
//             stop: function (t) {
//               var i = 0,
//                 n = t ? u.tweens.length : 0;
//               if (s) return this;
//               for (s = !0; i < n; i++) u.tweens[i].run(1);
//               return (
//                 t
//                   ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t]))
//                   : o.rejectWith(e, [u, t]),
//                 this
//               );
//             },
//           }),
//           d = u.props;
//         for (
//           !(function (e, t) {
//             var i, n, s, r, a;
//             for (i in e)
//               if (
//                 ((s = t[(n = V(i))]),
//                 (r = e[i]),
//                 Array.isArray(r) && ((s = r[1]), (r = e[i] = r[0])),
//                 i !== n && ((e[n] = r), delete e[i]),
//                 (a = T.cssHooks[n]) && ("expand" in a))
//               )
//                 for (i in ((r = a.expand(r)), delete e[n], r))
//                   (i in e) || ((e[i] = r[i]), (t[i] = s));
//               else t[n] = s;
//           })(d, u.opts.specialEasing);
//           r < a;
//           r++
//         )
//           if ((n = ht.prefilters[r].call(u, e, d, u.opts)))
//             return (
//               g(n.stop) &&
//                 (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
//               n
//             );
//         return (
//           T.map(d, ct, u),
//           g(u.opts.start) && u.opts.start.call(e, u),
//           u
//             .progress(u.opts.progress)
//             .done(u.opts.done, u.opts.complete)
//             .fail(u.opts.fail)
//             .always(u.opts.always),
//           T.fx.timer(T.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
//           u
//         );
//       }
//       (T.Animation = T.extend(ht, {
//         tweeners: {
//           "*": [
//             function (e, t) {
//               var i = this.createTween(e, t);
//               return ue(i.elem, e, ne.exec(t), i), i;
//             },
//           ],
//         },
//         tweener: function (e, t) {
//           g(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
//           for (var i, n = 0, s = e.length; n < s; n++)
//             (i = e[n]),
//               (ht.tweeners[i] = ht.tweeners[i] || []),
//               ht.tweeners[i].unshift(t);
//         },
//         prefilters: [
//           function (e, t, i) {
//             var n,
//               s,
//               r,
//               a,
//               o,
//               l,
//               u,
//               d,
//               c = "width" in t || "height" in t,
//               h = this,
//               p = {},
//               f = e.style,
//               v = e.nodeType && le(e),
//               m = Q.get(e, "fxshow");
//             for (n in (i.queue ||
//               (null == (a = T._queueHooks(e, "fx")).unqueued &&
//                 ((a.unqueued = 0),
//                 (o = a.empty.fire),
//                 (a.empty.fire = function () {
//                   a.unqueued || o();
//                 })),
//               a.unqueued++,
//               h.always(function () {
//                 h.always(function () {
//                   a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
//                 });
//               })),
//             t))
//               if (((s = t[n]), at.test(s))) {
//                 if (
//                   (delete t[n],
//                   (r = r || "toggle" === s),
//                   s === (v ? "hide" : "show"))
//                 ) {
//                   if ("show" !== s || !m || void 0 === m[n]) continue;
//                   v = !0;
//                 }
//                 p[n] = (m && m[n]) || T.style(e, n);
//               }
//             if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
//               for (n in (c &&
//                 1 === e.nodeType &&
//                 ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
//                 null == (u = m && m.display) && (u = Q.get(e, "display")),
//                 "none" === (d = T.css(e, "display")) &&
//                   (u
//                     ? (d = u)
//                     : (he([e], !0),
//                       (u = e.style.display || u),
//                       (d = T.css(e, "display")),
//                       he([e]))),
//                 ("inline" === d || ("inline-block" === d && null != u)) &&
//                   "none" === T.css(e, "float") &&
//                   (l ||
//                     (h.done(function () {
//                       f.display = u;
//                     }),
//                     null == u &&
//                       ((d = f.display), (u = "none" === d ? "" : d))),
//                   (f.display = "inline-block"))),
//               i.overflow &&
//                 ((f.overflow = "hidden"),
//                 h.always(function () {
//                   (f.overflow = i.overflow[0]),
//                     (f.overflowX = i.overflow[1]),
//                     (f.overflowY = i.overflow[2]);
//                 })),
//               (l = !1),
//               p))
//                 l ||
//                   (m
//                     ? "hidden" in m && (v = m.hidden)
//                     : (m = Q.access(e, "fxshow", { display: u })),
//                   r && (m.hidden = !v),
//                   v && he([e], !0),
//                   h.done(function () {
//                     for (n in (v || he([e]), Q.remove(e, "fxshow"), p))
//                       T.style(e, n, p[n]);
//                   })),
//                   (l = ct(v ? m[n] : 0, n, h)),
//                   n in m ||
//                     ((m[n] = l.start), v && ((l.end = l.start), (l.start = 0)));
//           },
//         ],
//         prefilter: function (e, t) {
//           t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
//         },
//       })),
//         (T.speed = function (e, t, i) {
//           var n =
//             e && "object" == typeof e
//               ? T.extend({}, e)
//               : {
//                   complete: i || (!i && t) || (g(e) && e),
//                   duration: e,
//                   easing: (i && t) || (t && !g(t) && t),
//                 };
//           return (
//             T.fx.off
//               ? (n.duration = 0)
//               : "number" != typeof n.duration &&
//                 (n.duration in T.fx.speeds
//                   ? (n.duration = T.fx.speeds[n.duration])
//                   : (n.duration = T.fx.speeds._default)),
//             (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
//             (n.old = n.complete),
//             (n.complete = function () {
//               g(n.old) && n.old.call(this), n.queue && T.dequeue(this, n.queue);
//             }),
//             n
//           );
//         }),
//         T.fn.extend({
//           fadeTo: function (e, t, i, n) {
//             return this.filter(le)
//               .css("opacity", 0)
//               .show()
//               .end()
//               .animate({ opacity: t }, e, i, n);
//           },
//           animate: function (e, t, i, n) {
//             var s = T.isEmptyObject(e),
//               r = T.speed(t, i, n),
//               a = function () {
//                 var t = ht(this, T.extend({}, e), r);
//                 (s || Q.get(this, "finish")) && t.stop(!0);
//               };
//             return (
//               (a.finish = a),
//               s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
//             );
//           },
//           stop: function (e, t, i) {
//             var n = function (e) {
//               var t = e.stop;
//               delete e.stop, t(i);
//             };
//             return (
//               "string" != typeof e && ((i = t), (t = e), (e = void 0)),
//               t && this.queue(e || "fx", []),
//               this.each(function () {
//                 var t = !0,
//                   s = null != e && e + "queueHooks",
//                   r = T.timers,
//                   a = Q.get(this);
//                 if (s) a[s] && a[s].stop && n(a[s]);
//                 else for (s in a) a[s] && a[s].stop && ot.test(s) && n(a[s]);
//                 for (s = r.length; s--; )
//                   r[s].elem !== this ||
//                     (null != e && r[s].queue !== e) ||
//                     (r[s].anim.stop(i), (t = !1), r.splice(s, 1));
//                 (!t && i) || T.dequeue(this, e);
//               })
//             );
//           },
//           finish: function (e) {
//             return (
//               !1 !== e && (e = e || "fx"),
//               this.each(function () {
//                 var t,
//                   i = Q.get(this),
//                   n = i[e + "queue"],
//                   s = i[e + "queueHooks"],
//                   r = T.timers,
//                   a = n ? n.length : 0;
//                 for (
//                   i.finish = !0,
//                     T.queue(this, e, []),
//                     s && s.stop && s.stop.call(this, !0),
//                     t = r.length;
//                   t--;

//                 )
//                   r[t].elem === this &&
//                     r[t].queue === e &&
//                     (r[t].anim.stop(!0), r.splice(t, 1));
//                 for (t = 0; t < a; t++)
//                   n[t] && n[t].finish && n[t].finish.call(this);
//                 delete i.finish;
//               })
//             );
//           },
//         }),
//         T.each(["toggle", "show", "hide"], function (e, t) {
//           var i = T.fn[t];
//           T.fn[t] = function (e, n, s) {
//             return null == e || "boolean" == typeof e
//               ? i.apply(this, arguments)
//               : this.animate(dt(t, !0), e, n, s);
//           };
//         }),
//         T.each(
//           {
//             slideDown: dt("show"),
//             slideUp: dt("hide"),
//             slideToggle: dt("toggle"),
//             fadeIn: { opacity: "show" },
//             fadeOut: { opacity: "hide" },
//             fadeToggle: { opacity: "toggle" },
//           },
//           function (e, t) {
//             T.fn[e] = function (e, i, n) {
//               return this.animate(t, e, i, n);
//             };
//           }
//         ),
//         (T.timers = []),
//         (T.fx.tick = function () {
//           var e,
//             t = 0,
//             i = T.timers;
//           for (st = Date.now(); t < i.length; t++)
//             (e = i[t])() || i[t] !== e || i.splice(t--, 1);
//           i.length || T.fx.stop(), (st = void 0);
//         }),
//         (T.fx.timer = function (e) {
//           T.timers.push(e), T.fx.start();
//         }),
//         (T.fx.interval = 13),
//         (T.fx.start = function () {
//           rt || ((rt = !0), lt());
//         }),
//         (T.fx.stop = function () {
//           rt = null;
//         }),
//         (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
//         (T.fn.delay = function (e, t) {
//           return (
//             (e = (T.fx && T.fx.speeds[e]) || e),
//             (t = t || "fx"),
//             this.queue(t, function (t, n) {
//               var s = i.setTimeout(t, e);
//               n.stop = function () {
//                 i.clearTimeout(s);
//               };
//             })
//           );
//         }),
//         (function () {
//           var e = b.createElement("input"),
//             t = b
//               .createElement("select")
//               .appendChild(b.createElement("option"));
//           (e.type = "checkbox"),
//             (m.checkOn = "" !== e.value),
//             (m.optSelected = t.selected),
//             ((e = b.createElement("input")).value = "t"),
//             (e.type = "radio"),
//             (m.radioValue = "t" === e.value);
//         })();
//       var pt,
//         ft = T.expr.attrHandle;
//       T.fn.extend({
//         attr: function (e, t) {
//           return F(this, T.attr, e, t, arguments.length > 1);
//         },
//         removeAttr: function (e) {
//           return this.each(function () {
//             T.removeAttr(this, e);
//           });
//         },
//       }),
//         T.extend({
//           attr: function (e, t, i) {
//             var n,
//               s,
//               r = e.nodeType;
//             if (3 !== r && 8 !== r && 2 !== r)
//               return void 0 === e.getAttribute
//                 ? T.prop(e, t, i)
//                 : ((1 === r && T.isXMLDoc(e)) ||
//                     (s =
//                       T.attrHooks[t.toLowerCase()] ||
//                       (T.expr.match.bool.test(t) ? pt : void 0)),
//                   void 0 !== i
//                     ? null === i
//                       ? void T.removeAttr(e, t)
//                       : s && "set" in s && void 0 !== (n = s.set(e, i, t))
//                       ? n
//                       : (e.setAttribute(t, i + ""), i)
//                     : s && "get" in s && null !== (n = s.get(e, t))
//                     ? n
//                     : null == (n = T.find.attr(e, t))
//                     ? void 0
//                     : n);
//           },
//           attrHooks: {
//             type: {
//               set: function (e, t) {
//                 if (!m.radioValue && "radio" === t && L(e, "input")) {
//                   var i = e.value;
//                   return e.setAttribute("type", t), i && (e.value = i), t;
//                 }
//               },
//             },
//           },
//           removeAttr: function (e, t) {
//             var i,
//               n = 0,
//               s = t && t.match(j);
//             if (s && 1 === e.nodeType)
//               for (; (i = s[n++]); ) e.removeAttribute(i);
//           },
//         }),
//         (pt = {
//           set: function (e, t, i) {
//             return !1 === t ? T.removeAttr(e, i) : e.setAttribute(i, i), i;
//           },
//         }),
//         T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
//           var i = ft[t] || T.find.attr;
//           ft[t] = function (e, t, n) {
//             var s,
//               r,
//               a = t.toLowerCase();
//             return (
//               n ||
//                 ((r = ft[a]),
//                 (ft[a] = s),
//                 (s = null != i(e, t, n) ? a : null),
//                 (ft[a] = r)),
//               s
//             );
//           };
//         });
//       var vt = /^(?:input|select|textarea|button)$/i,
//         mt = /^(?:a|area)$/i;
//       function gt(e) {
//         return (e.match(j) || []).join(" ");
//       }
//       function yt(e) {
//         return (e.getAttribute && e.getAttribute("class")) || "";
//       }
//       function bt(e) {
//         return Array.isArray(e)
//           ? e
//           : ("string" == typeof e && e.match(j)) || [];
//       }
//       T.fn.extend({
//         prop: function (e, t) {
//           return F(this, T.prop, e, t, arguments.length > 1);
//         },
//         removeProp: function (e) {
//           return this.each(function () {
//             delete this[T.propFix[e] || e];
//           });
//         },
//       }),
//         T.extend({
//           prop: function (e, t, i) {
//             var n,
//               s,
//               r = e.nodeType;
//             if (3 !== r && 8 !== r && 2 !== r)
//               return (
//                 (1 === r && T.isXMLDoc(e)) ||
//                   ((t = T.propFix[t] || t), (s = T.propHooks[t])),
//                 void 0 !== i
//                   ? s && "set" in s && void 0 !== (n = s.set(e, i, t))
//                     ? n
//                     : (e[t] = i)
//                   : s && "get" in s && null !== (n = s.get(e, t))
//                   ? n
//                   : e[t]
//               );
//           },
//           propHooks: {
//             tabIndex: {
//               get: function (e) {
//                 var t = T.find.attr(e, "tabindex");
//                 return t
//                   ? parseInt(t, 10)
//                   : vt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
//                   ? 0
//                   : -1;
//               },
//             },
//           },
//           propFix: { for: "htmlFor", class: "className" },
//         }),
//         m.optSelected ||
//           (T.propHooks.selected = {
//             get: function (e) {
//               var t = e.parentNode;
//               return t && t.parentNode && t.parentNode.selectedIndex, null;
//             },
//             set: function (e) {
//               var t = e.parentNode;
//               t &&
//                 (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
//             },
//           }),
//         T.each(
//           [
//             "tabIndex",
//             "readOnly",
//             "maxLength",
//             "cellSpacing",
//             "cellPadding",
//             "rowSpan",
//             "colSpan",
//             "useMap",
//             "frameBorder",
//             "contentEditable",
//           ],
//           function () {
//             T.propFix[this.toLowerCase()] = this;
//           }
//         ),
//         T.fn.extend({
//           addClass: function (e) {
//             var t, i, n, s, r, a;
//             return g(e)
//               ? this.each(function (t) {
//                   T(this).addClass(e.call(this, t, yt(this)));
//                 })
//               : (t = bt(e)).length
//               ? this.each(function () {
//                   if (
//                     ((n = yt(this)),
//                     (i = 1 === this.nodeType && " " + gt(n) + " "))
//                   ) {
//                     for (r = 0; r < t.length; r++)
//                       (s = t[r]),
//                         i.indexOf(" " + s + " ") < 0 && (i += s + " ");
//                     (a = gt(i)), n !== a && this.setAttribute("class", a);
//                   }
//                 })
//               : this;
//           },
//           removeClass: function (e) {
//             var t, i, n, s, r, a;
//             return g(e)
//               ? this.each(function (t) {
//                   T(this).removeClass(e.call(this, t, yt(this)));
//                 })
//               : arguments.length
//               ? (t = bt(e)).length
//                 ? this.each(function () {
//                     if (
//                       ((n = yt(this)),
//                       (i = 1 === this.nodeType && " " + gt(n) + " "))
//                     ) {
//                       for (r = 0; r < t.length; r++)
//                         for (s = t[r]; i.indexOf(" " + s + " ") > -1; )
//                           i = i.replace(" " + s + " ", " ");
//                       (a = gt(i)), n !== a && this.setAttribute("class", a);
//                     }
//                   })
//                 : this
//               : this.attr("class", "");
//           },
//           toggleClass: function (e, t) {
//             var i,
//               n,
//               s,
//               r,
//               a = typeof e,
//               o = "string" === a || Array.isArray(e);
//             return g(e)
//               ? this.each(function (i) {
//                   T(this).toggleClass(e.call(this, i, yt(this), t), t);
//                 })
//               : "boolean" == typeof t && o
//               ? t
//                 ? this.addClass(e)
//                 : this.removeClass(e)
//               : ((i = bt(e)),
//                 this.each(function () {
//                   if (o)
//                     for (r = T(this), s = 0; s < i.length; s++)
//                       (n = i[s]),
//                         r.hasClass(n) ? r.removeClass(n) : r.addClass(n);
//                   else
//                     (void 0 !== e && "boolean" !== a) ||
//                       ((n = yt(this)) && Q.set(this, "__className__", n),
//                       this.setAttribute &&
//                         this.setAttribute(
//                           "class",
//                           n || !1 === e
//                             ? ""
//                             : Q.get(this, "__className__") || ""
//                         ));
//                 }));
//           },
//           hasClass: function (e) {
//             var t,
//               i,
//               n = 0;
//             for (t = " " + e + " "; (i = this[n++]); )
//               if (1 === i.nodeType && (" " + gt(yt(i)) + " ").indexOf(t) > -1)
//                 return !0;
//             return !1;
//           },
//         });
//       var wt = /\r/g;
//       T.fn.extend({
//         val: function (e) {
//           var t,
//             i,
//             n,
//             s = this[0];
//           return arguments.length
//             ? ((n = g(e)),
//               this.each(function (i) {
//                 var s;
//                 1 === this.nodeType &&
//                   (null == (s = n ? e.call(this, i, T(this).val()) : e)
//                     ? (s = "")
//                     : "number" == typeof s
//                     ? (s += "")
//                     : Array.isArray(s) &&
//                       (s = T.map(s, function (e) {
//                         return null == e ? "" : e + "";
//                       })),
//                   ((t =
//                     T.valHooks[this.type] ||
//                     T.valHooks[this.nodeName.toLowerCase()]) &&
//                     "set" in t &&
//                     void 0 !== t.set(this, s, "value")) ||
//                     (this.value = s));
//               }))
//             : s
//             ? (t =
//                 T.valHooks[s.type] || T.valHooks[s.nodeName.toLowerCase()]) &&
//               "get" in t &&
//               void 0 !== (i = t.get(s, "value"))
//               ? i
//               : "string" == typeof (i = s.value)
//               ? i.replace(wt, "")
//               : null == i
//               ? ""
//               : i
//             : void 0;
//         },
//       }),
//         T.extend({
//           valHooks: {
//             option: {
//               get: function (e) {
//                 var t = T.find.attr(e, "value");
//                 return null != t ? t : gt(T.text(e));
//               },
//             },
//             select: {
//               get: function (e) {
//                 var t,
//                   i,
//                   n,
//                   s = e.options,
//                   r = e.selectedIndex,
//                   a = "select-one" === e.type,
//                   o = a ? null : [],
//                   l = a ? r + 1 : s.length;
//                 for (n = r < 0 ? l : a ? r : 0; n < l; n++)
//                   if (
//                     ((i = s[n]).selected || n === r) &&
//                     !i.disabled &&
//                     (!i.parentNode.disabled || !L(i.parentNode, "optgroup"))
//                   ) {
//                     if (((t = T(i).val()), a)) return t;
//                     o.push(t);
//                   }
//                 return o;
//               },
//               set: function (e, t) {
//                 for (
//                   var i, n, s = e.options, r = T.makeArray(t), a = s.length;
//                   a--;

//                 )
//                   ((n = s[a]).selected =
//                     T.inArray(T.valHooks.option.get(n), r) > -1) && (i = !0);
//                 return i || (e.selectedIndex = -1), r;
//               },
//             },
//           },
//         }),
//         T.each(["radio", "checkbox"], function () {
//           (T.valHooks[this] = {
//             set: function (e, t) {
//               if (Array.isArray(t))
//                 return (e.checked = T.inArray(T(e).val(), t) > -1);
//             },
//           }),
//             m.checkOn ||
//               (T.valHooks[this].get = function (e) {
//                 return null === e.getAttribute("value") ? "on" : e.value;
//               });
//         }),
//         (m.focusin = "onfocusin" in i);
//       var xt = /^(?:focusinfocus|focusoutblur)$/,
//         Et = function (e) {
//           e.stopPropagation();
//         };
//       T.extend(T.event, {
//         trigger: function (e, t, n, s) {
//           var r,
//             a,
//             o,
//             l,
//             u,
//             d,
//             c,
//             h,
//             f = [n || b],
//             v = p.call(e, "type") ? e.type : e,
//             m = p.call(e, "namespace") ? e.namespace.split(".") : [];
//           if (
//             ((a = h = o = n = n || b),
//             3 !== n.nodeType &&
//               8 !== n.nodeType &&
//               !xt.test(v + T.event.triggered) &&
//               (v.indexOf(".") > -1 &&
//                 ((m = v.split(".")), (v = m.shift()), m.sort()),
//               (u = v.indexOf(":") < 0 && "on" + v),
//               ((e = e[T.expando]
//                 ? e
//                 : new T.Event(v, "object" == typeof e && e)).isTrigger = s
//                 ? 2
//                 : 3),
//               (e.namespace = m.join(".")),
//               (e.rnamespace = e.namespace
//                 ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
//                 : null),
//               (e.result = void 0),
//               e.target || (e.target = n),
//               (t = null == t ? [e] : T.makeArray(t, [e])),
//               (c = T.event.special[v] || {}),
//               s || !c.trigger || !1 !== c.trigger.apply(n, t)))
//           ) {
//             if (!s && !c.noBubble && !y(n)) {
//               for (
//                 l = c.delegateType || v, xt.test(l + v) || (a = a.parentNode);
//                 a;
//                 a = a.parentNode
//               )
//                 f.push(a), (o = a);
//               o === (n.ownerDocument || b) &&
//                 f.push(o.defaultView || o.parentWindow || i);
//             }
//             for (r = 0; (a = f[r++]) && !e.isPropagationStopped(); )
//               (h = a),
//                 (e.type = r > 1 ? l : c.bindType || v),
//                 (d =
//                   (Q.get(a, "events") || Object.create(null))[e.type] &&
//                   Q.get(a, "handle")) && d.apply(a, t),
//                 (d = u && a[u]) &&
//                   d.apply &&
//                   U(a) &&
//                   ((e.result = d.apply(a, t)),
//                   !1 === e.result && e.preventDefault());
//             return (
//               (e.type = v),
//               s ||
//                 e.isDefaultPrevented() ||
//                 (c._default && !1 !== c._default.apply(f.pop(), t)) ||
//                 !U(n) ||
//                 (u &&
//                   g(n[v]) &&
//                   !y(n) &&
//                   ((o = n[u]) && (n[u] = null),
//                   (T.event.triggered = v),
//                   e.isPropagationStopped() && h.addEventListener(v, Et),
//                   n[v](),
//                   e.isPropagationStopped() && h.removeEventListener(v, Et),
//                   (T.event.triggered = void 0),
//                   o && (n[u] = o))),
//               e.result
//             );
//           }
//         },
//         simulate: function (e, t, i) {
//           var n = T.extend(new T.Event(), i, { type: e, isSimulated: !0 });
//           T.event.trigger(n, null, t);
//         },
//       }),
//         T.fn.extend({
//           trigger: function (e, t) {
//             return this.each(function () {
//               T.event.trigger(e, t, this);
//             });
//           },
//           triggerHandler: function (e, t) {
//             var i = this[0];
//             if (i) return T.event.trigger(e, t, i, !0);
//           },
//         }),
//         m.focusin ||
//           T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
//             var i = function (e) {
//               T.event.simulate(t, e.target, T.event.fix(e));
//             };
//             T.event.special[t] = {
//               setup: function () {
//                 var n = this.ownerDocument || this.document || this,
//                   s = Q.access(n, t);
//                 s || n.addEventListener(e, i, !0), Q.access(n, t, (s || 0) + 1);
//               },
//               teardown: function () {
//                 var n = this.ownerDocument || this.document || this,
//                   s = Q.access(n, t) - 1;
//                 s
//                   ? Q.access(n, t, s)
//                   : (n.removeEventListener(e, i, !0), Q.remove(n, t));
//               },
//             };
//           });
//       var Tt = i.location,
//         Ct = { guid: Date.now() },
//         St = /\?/;
//       T.parseXML = function (e) {
//         var t, n;
//         if (!e || "string" != typeof e) return null;
//         try {
//           t = new i.DOMParser().parseFromString(e, "text/xml");
//         } catch (e) {}
//         return (
//           (n = t && t.getElementsByTagName("parsererror")[0]),
//           (t && !n) ||
//             T.error(
//               "Invalid XML: " +
//                 (n
//                   ? T.map(n.childNodes, function (e) {
//                       return e.textContent;
//                     }).join("\n")
//                   : e)
//             ),
//           t
//         );
//       };
//       var Mt = /\[\]$/,
//         kt = /\r?\n/g,
//         Pt = /^(?:submit|button|image|reset|file)$/i,
//         Lt = /^(?:input|select|textarea|keygen)/i;
//       function Ot(e, t, i, n) {
//         var s;
//         if (Array.isArray(t))
//           T.each(t, function (t, s) {
//             i || Mt.test(e)
//               ? n(e, s)
//               : Ot(
//                   e + "[" + ("object" == typeof s && null != s ? t : "") + "]",
//                   s,
//                   i,
//                   n
//                 );
//           });
//         else if (i || "object" !== E(t)) n(e, t);
//         else for (s in t) Ot(e + "[" + s + "]", t[s], i, n);
//       }
//       (T.param = function (e, t) {
//         var i,
//           n = [],
//           s = function (e, t) {
//             var i = g(t) ? t() : t;
//             n[n.length] =
//               encodeURIComponent(e) +
//               "=" +
//               encodeURIComponent(null == i ? "" : i);
//           };
//         if (null == e) return "";
//         if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
//           T.each(e, function () {
//             s(this.name, this.value);
//           });
//         else for (i in e) Ot(i, e[i], t, s);
//         return n.join("&");
//       }),
//         T.fn.extend({
//           serialize: function () {
//             return T.param(this.serializeArray());
//           },
//           serializeArray: function () {
//             return this.map(function () {
//               var e = T.prop(this, "elements");
//               return e ? T.makeArray(e) : this;
//             })
//               .filter(function () {
//                 var e = this.type;
//                 return (
//                   this.name &&
//                   !T(this).is(":disabled") &&
//                   Lt.test(this.nodeName) &&
//                   !Pt.test(e) &&
//                   (this.checked || !ve.test(e))
//                 );
//               })
//               .map(function (e, t) {
//                 var i = T(this).val();
//                 return null == i
//                   ? null
//                   : Array.isArray(i)
//                   ? T.map(i, function (e) {
//                       return { name: t.name, value: e.replace(kt, "\r\n") };
//                     })
//                   : { name: t.name, value: i.replace(kt, "\r\n") };
//               })
//               .get();
//           },
//         });
//       var zt = /%20/g,
//         At = /#.*$/,
//         Dt = /([?&])_=[^&]*/,
//         $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
//         Nt = /^(?:GET|HEAD)$/,
//         It = /^\/\//,
//         jt = {},
//         Ht = {},
//         qt = "*/".concat("*"),
//         Bt = b.createElement("a");
//       function Rt(e) {
//         return function (t, i) {
//           "string" != typeof t && ((i = t), (t = "*"));
//           var n,
//             s = 0,
//             r = t.toLowerCase().match(j) || [];
//           if (g(i))
//             for (; (n = r[s++]); )
//               "+" === n[0]
//                 ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i))
//                 : (e[n] = e[n] || []).push(i);
//         };
//       }
//       function Gt(e, t, i, n) {
//         var s = {},
//           r = e === Ht;
//         function a(o) {
//           var l;
//           return (
//             (s[o] = !0),
//             T.each(e[o] || [], function (e, o) {
//               var u = o(t, i, n);
//               return "string" != typeof u || r || s[u]
//                 ? r
//                   ? !(l = u)
//                   : void 0
//                 : (t.dataTypes.unshift(u), a(u), !1);
//             }),
//             l
//           );
//         }
//         return a(t.dataTypes[0]) || (!s["*"] && a("*"));
//       }
//       function Wt(e, t) {
//         var i,
//           n,
//           s = T.ajaxSettings.flatOptions || {};
//         for (i in t) void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
//         return n && T.extend(!0, e, n), e;
//       }
//       (Bt.href = Tt.href),
//         T.extend({
//           active: 0,
//           lastModified: {},
//           etag: {},
//           ajaxSettings: {
//             url: Tt.href,
//             type: "GET",
//             isLocal:
//               /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
//                 Tt.protocol
//               ),
//             global: !0,
//             processData: !0,
//             async: !0,
//             contentType: "application/x-www-form-urlencoded; charset=UTF-8",
//             accepts: {
//               "*": qt,
//               text: "text/plain",
//               html: "text/html",
//               xml: "application/xml, text/xml",
//               json: "application/json, text/javascript",
//             },
//             contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
//             responseFields: {
//               xml: "responseXML",
//               text: "responseText",
//               json: "responseJSON",
//             },
//             converters: {
//               "* text": String,
//               "text html": !0,
//               "text json": JSON.parse,
//               "text xml": T.parseXML,
//             },
//             flatOptions: { url: !0, context: !0 },
//           },
//           ajaxSetup: function (e, t) {
//             return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e);
//           },
//           ajaxPrefilter: Rt(jt),
//           ajaxTransport: Rt(Ht),
//           ajax: function (e, t) {
//             "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
//             var n,
//               s,
//               r,
//               a,
//               o,
//               l,
//               u,
//               d,
//               c,
//               h,
//               p = T.ajaxSetup({}, t),
//               f = p.context || p,
//               v = p.context && (f.nodeType || f.jquery) ? T(f) : T.event,
//               m = T.Deferred(),
//               g = T.Callbacks("once memory"),
//               y = p.statusCode || {},
//               w = {},
//               x = {},
//               E = "canceled",
//               C = {
//                 readyState: 0,
//                 getResponseHeader: function (e) {
//                   var t;
//                   if (u) {
//                     if (!a)
//                       for (a = {}; (t = $t.exec(r)); )
//                         a[t[1].toLowerCase() + " "] = (
//                           a[t[1].toLowerCase() + " "] || []
//                         ).concat(t[2]);
//                     t = a[e.toLowerCase() + " "];
//                   }
//                   return null == t ? null : t.join(", ");
//                 },
//                 getAllResponseHeaders: function () {
//                   return u ? r : null;
//                 },
//                 setRequestHeader: function (e, t) {
//                   return (
//                     null == u &&
//                       ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
//                       (w[e] = t)),
//                     this
//                   );
//                 },
//                 overrideMimeType: function (e) {
//                   return null == u && (p.mimeType = e), this;
//                 },
//                 statusCode: function (e) {
//                   var t;
//                   if (e)
//                     if (u) C.always(e[C.status]);
//                     else for (t in e) y[t] = [y[t], e[t]];
//                   return this;
//                 },
//                 abort: function (e) {
//                   var t = e || E;
//                   return n && n.abort(t), S(0, t), this;
//                 },
//               };
//             if (
//               (m.promise(C),
//               (p.url = ((e || p.url || Tt.href) + "").replace(
//                 It,
//                 Tt.protocol + "//"
//               )),
//               (p.type = t.method || t.type || p.method || p.type),
//               (p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [
//                 "",
//               ]),
//               null == p.crossDomain)
//             ) {
//               l = b.createElement("a");
//               try {
//                 (l.href = p.url),
//                   (l.href = l.href),
//                   (p.crossDomain =
//                     Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
//               } catch (e) {
//                 p.crossDomain = !0;
//               }
//             }
//             if (
//               (p.data &&
//                 p.processData &&
//                 "string" != typeof p.data &&
//                 (p.data = T.param(p.data, p.traditional)),
//               Gt(jt, p, t, C),
//               u)
//             )
//               return C;
//             for (c in ((d = T.event && p.global) &&
//               0 == T.active++ &&
//               T.event.trigger("ajaxStart"),
//             (p.type = p.type.toUpperCase()),
//             (p.hasContent = !Nt.test(p.type)),
//             (s = p.url.replace(At, "")),
//             p.hasContent
//               ? p.data &&
//                 p.processData &&
//                 0 ===
//                   (p.contentType || "").indexOf(
//                     "application/x-www-form-urlencoded"
//                   ) &&
//                 (p.data = p.data.replace(zt, "+"))
//               : ((h = p.url.slice(s.length)),
//                 p.data &&
//                   (p.processData || "string" == typeof p.data) &&
//                   ((s += (St.test(s) ? "&" : "?") + p.data), delete p.data),
//                 !1 === p.cache &&
//                   ((s = s.replace(Dt, "$1")),
//                   (h = (St.test(s) ? "&" : "?") + "_=" + Ct.guid++ + h)),
//                 (p.url = s + h)),
//             p.ifModified &&
//               (T.lastModified[s] &&
//                 C.setRequestHeader("If-Modified-Since", T.lastModified[s]),
//               T.etag[s] && C.setRequestHeader("If-None-Match", T.etag[s])),
//             ((p.data && p.hasContent && !1 !== p.contentType) ||
//               t.contentType) &&
//               C.setRequestHeader("Content-Type", p.contentType),
//             C.setRequestHeader(
//               "Accept",
//               p.dataTypes[0] && p.accepts[p.dataTypes[0]]
//                 ? p.accepts[p.dataTypes[0]] +
//                     ("*" !== p.dataTypes[0] ? ", " + qt + "; q=0.01" : "")
//                 : p.accepts["*"]
//             ),
//             p.headers))
//               C.setRequestHeader(c, p.headers[c]);
//             if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || u))
//               return C.abort();
//             if (
//               ((E = "abort"),
//               g.add(p.complete),
//               C.done(p.success),
//               C.fail(p.error),
//               (n = Gt(Ht, p, t, C)))
//             ) {
//               if (((C.readyState = 1), d && v.trigger("ajaxSend", [C, p]), u))
//                 return C;
//               p.async &&
//                 p.timeout > 0 &&
//                 (o = i.setTimeout(function () {
//                   C.abort("timeout");
//                 }, p.timeout));
//               try {
//                 (u = !1), n.send(w, S);
//               } catch (e) {
//                 if (u) throw e;
//                 S(-1, e);
//               }
//             } else S(-1, "No Transport");
//             function S(e, t, a, l) {
//               var c,
//                 h,
//                 b,
//                 w,
//                 x,
//                 E = t;
//               u ||
//                 ((u = !0),
//                 o && i.clearTimeout(o),
//                 (n = void 0),
//                 (r = l || ""),
//                 (C.readyState = e > 0 ? 4 : 0),
//                 (c = (e >= 200 && e < 300) || 304 === e),
//                 a &&
//                   (w = (function (e, t, i) {
//                     for (
//                       var n, s, r, a, o = e.contents, l = e.dataTypes;
//                       "*" === l[0];

//                     )
//                       l.shift(),
//                         void 0 === n &&
//                           (n =
//                             e.mimeType || t.getResponseHeader("Content-Type"));
//                     if (n)
//                       for (s in o)
//                         if (o[s] && o[s].test(n)) {
//                           l.unshift(s);
//                           break;
//                         }
//                     if (l[0] in i) r = l[0];
//                     else {
//                       for (s in i) {
//                         if (!l[0] || e.converters[s + " " + l[0]]) {
//                           r = s;
//                           break;
//                         }
//                         a || (a = s);
//                       }
//                       r = r || a;
//                     }
//                     if (r) return r !== l[0] && l.unshift(r), i[r];
//                   })(p, C, a)),
//                 !c &&
//                   T.inArray("script", p.dataTypes) > -1 &&
//                   T.inArray("json", p.dataTypes) < 0 &&
//                   (p.converters["text script"] = function () {}),
//                 (w = (function (e, t, i, n) {
//                   var s,
//                     r,
//                     a,
//                     o,
//                     l,
//                     u = {},
//                     d = e.dataTypes.slice();
//                   if (d[1])
//                     for (a in e.converters)
//                       u[a.toLowerCase()] = e.converters[a];
//                   for (r = d.shift(); r; )
//                     if (
//                       (e.responseFields[r] && (i[e.responseFields[r]] = t),
//                       !l &&
//                         n &&
//                         e.dataFilter &&
//                         (t = e.dataFilter(t, e.dataType)),
//                       (l = r),
//                       (r = d.shift()))
//                     )
//                       if ("*" === r) r = l;
//                       else if ("*" !== l && l !== r) {
//                         if (!(a = u[l + " " + r] || u["* " + r]))
//                           for (s in u)
//                             if (
//                               (o = s.split(" "))[1] === r &&
//                               (a = u[l + " " + o[0]] || u["* " + o[0]])
//                             ) {
//                               !0 === a
//                                 ? (a = u[s])
//                                 : !0 !== u[s] && ((r = o[0]), d.unshift(o[1]));
//                               break;
//                             }
//                         if (!0 !== a)
//                           if (a && e.throws) t = a(t);
//                           else
//                             try {
//                               t = a(t);
//                             } catch (e) {
//                               return {
//                                 state: "parsererror",
//                                 error: a
//                                   ? e
//                                   : "No conversion from " + l + " to " + r,
//                               };
//                             }
//                       }
//                   return { state: "success", data: t };
//                 })(p, w, C, c)),
//                 c
//                   ? (p.ifModified &&
//                       ((x = C.getResponseHeader("Last-Modified")) &&
//                         (T.lastModified[s] = x),
//                       (x = C.getResponseHeader("etag")) && (T.etag[s] = x)),
//                     204 === e || "HEAD" === p.type
//                       ? (E = "nocontent")
//                       : 304 === e
//                       ? (E = "notmodified")
//                       : ((E = w.state), (h = w.data), (c = !(b = w.error))))
//                   : ((b = E), (!e && E) || ((E = "error"), e < 0 && (e = 0))),
//                 (C.status = e),
//                 (C.statusText = (t || E) + ""),
//                 c ? m.resolveWith(f, [h, E, C]) : m.rejectWith(f, [C, E, b]),
//                 C.statusCode(y),
//                 (y = void 0),
//                 d &&
//                   v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? h : b]),
//                 g.fireWith(f, [C, E]),
//                 d &&
//                   (v.trigger("ajaxComplete", [C, p]),
//                   --T.active || T.event.trigger("ajaxStop")));
//             }
//             return C;
//           },
//           getJSON: function (e, t, i) {
//             return T.get(e, t, i, "json");
//           },
//           getScript: function (e, t) {
//             return T.get(e, void 0, t, "script");
//           },
//         }),
//         T.each(["get", "post"], function (e, t) {
//           T[t] = function (e, i, n, s) {
//             return (
//               g(i) && ((s = s || n), (n = i), (i = void 0)),
//               T.ajax(
//                 T.extend(
//                   { url: e, type: t, dataType: s, data: i, success: n },
//                   T.isPlainObject(e) && e
//                 )
//               )
//             );
//           };
//         }),
//         T.ajaxPrefilter(function (e) {
//           var t;
//           for (t in e.headers)
//             "content-type" === t.toLowerCase() &&
//               (e.contentType = e.headers[t] || "");
//         }),
//         (T._evalUrl = function (e, t, i) {
//           return T.ajax({
//             url: e,
//             type: "GET",
//             dataType: "script",
//             cache: !0,
//             async: !1,
//             global: !1,
//             converters: { "text script": function () {} },
//             dataFilter: function (e) {
//               T.globalEval(e, t, i);
//             },
//           });
//         }),
//         T.fn.extend({
//           wrapAll: function (e) {
//             var t;
//             return (
//               this[0] &&
//                 (g(e) && (e = e.call(this[0])),
//                 (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
//                 this[0].parentNode && t.insertBefore(this[0]),
//                 t
//                   .map(function () {
//                     for (var e = this; e.firstElementChild; )
//                       e = e.firstElementChild;
//                     return e;
//                   })
//                   .append(this)),
//               this
//             );
//           },
//           wrapInner: function (e) {
//             return g(e)
//               ? this.each(function (t) {
//                   T(this).wrapInner(e.call(this, t));
//                 })
//               : this.each(function () {
//                   var t = T(this),
//                     i = t.contents();
//                   i.length ? i.wrapAll(e) : t.append(e);
//                 });
//           },
//           wrap: function (e) {
//             var t = g(e);
//             return this.each(function (i) {
//               T(this).wrapAll(t ? e.call(this, i) : e);
//             });
//           },
//           unwrap: function (e) {
//             return (
//               this.parent(e)
//                 .not("body")
//                 .each(function () {
//                   T(this).replaceWith(this.childNodes);
//                 }),
//               this
//             );
//           },
//         }),
//         (T.expr.pseudos.hidden = function (e) {
//           return !T.expr.pseudos.visible(e);
//         }),
//         (T.expr.pseudos.visible = function (e) {
//           return !!(
//             e.offsetWidth ||
//             e.offsetHeight ||
//             e.getClientRects().length
//           );
//         }),
//         (T.ajaxSettings.xhr = function () {
//           try {
//             return new i.XMLHttpRequest();
//           } catch (e) {}
//         });
//       var Ft = { 0: 200, 1223: 204 },
//         Xt = T.ajaxSettings.xhr();
//       (m.cors = !!Xt && "withCredentials" in Xt),
//         (m.ajax = Xt = !!Xt),
//         T.ajaxTransport(function (e) {
//           var t, n;
//           if (m.cors || (Xt && !e.crossDomain))
//             return {
//               send: function (s, r) {
//                 var a,
//                   o = e.xhr();
//                 if (
//                   (o.open(e.type, e.url, e.async, e.username, e.password),
//                   e.xhrFields)
//                 )
//                   for (a in e.xhrFields) o[a] = e.xhrFields[a];
//                 for (a in (e.mimeType &&
//                   o.overrideMimeType &&
//                   o.overrideMimeType(e.mimeType),
//                 e.crossDomain ||
//                   s["X-Requested-With"] ||
//                   (s["X-Requested-With"] = "XMLHttpRequest"),
//                 s))
//                   o.setRequestHeader(a, s[a]);
//                 (t = function (e) {
//                   return function () {
//                     t &&
//                       ((t =
//                         n =
//                         o.onload =
//                         o.onerror =
//                         o.onabort =
//                         o.ontimeout =
//                         o.onreadystatechange =
//                           null),
//                       "abort" === e
//                         ? o.abort()
//                         : "error" === e
//                         ? "number" != typeof o.status
//                           ? r(0, "error")
//                           : r(o.status, o.statusText)
//                         : r(
//                             Ft[o.status] || o.status,
//                             o.statusText,
//                             "text" !== (o.responseType || "text") ||
//                               "string" != typeof o.responseText
//                               ? { binary: o.response }
//                               : { text: o.responseText },
//                             o.getAllResponseHeaders()
//                           ));
//                   };
//                 }),
//                   (o.onload = t()),
//                   (n = o.onerror = o.ontimeout = t("error")),
//                   void 0 !== o.onabort
//                     ? (o.onabort = n)
//                     : (o.onreadystatechange = function () {
//                         4 === o.readyState &&
//                           i.setTimeout(function () {
//                             t && n();
//                           });
//                       }),
//                   (t = t("abort"));
//                 try {
//                   o.send((e.hasContent && e.data) || null);
//                 } catch (e) {
//                   if (t) throw e;
//                 }
//               },
//               abort: function () {
//                 t && t();
//               },
//             };
//         }),
//         T.ajaxPrefilter(function (e) {
//           e.crossDomain && (e.contents.script = !1);
//         }),
//         T.ajaxSetup({
//           accepts: {
//             script:
//               "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
//           },
//           contents: { script: /\b(?:java|ecma)script\b/ },
//           converters: {
//             "text script": function (e) {
//               return T.globalEval(e), e;
//             },
//           },
//         }),
//         T.ajaxPrefilter("script", function (e) {
//           void 0 === e.cache && (e.cache = !1),
//             e.crossDomain && (e.type = "GET");
//         }),
//         T.ajaxTransport("script", function (e) {
//           var t, i;
//           if (e.crossDomain || e.scriptAttrs)
//             return {
//               send: function (n, s) {
//                 (t = T("<script>")
//                   .attr(e.scriptAttrs || {})
//                   .prop({ charset: e.scriptCharset, src: e.url })
//                   .on(
//                     "load error",
//                     (i = function (e) {
//                       t.remove(),
//                         (i = null),
//                         e && s("error" === e.type ? 404 : 200, e.type);
//                     })
//                   )),
//                   b.head.appendChild(t[0]);
//               },
//               abort: function () {
//                 i && i();
//               },
//             };
//         });
//       var _t,
//         Yt = [],
//         Vt = /(=)\?(?=&|$)|\?\?/;
//       T.ajaxSetup({
//         jsonp: "callback",
//         jsonpCallback: function () {
//           var e = Yt.pop() || T.expando + "_" + Ct.guid++;
//           return (this[e] = !0), e;
//         },
//       }),
//         T.ajaxPrefilter("json jsonp", function (e, t, n) {
//           var s,
//             r,
//             a,
//             o =
//               !1 !== e.jsonp &&
//               (Vt.test(e.url)
//                 ? "url"
//                 : "string" == typeof e.data &&
//                   0 ===
//                     (e.contentType || "").indexOf(
//                       "application/x-www-form-urlencoded"
//                     ) &&
//                   Vt.test(e.data) &&
//                   "data");
//           if (o || "jsonp" === e.dataTypes[0])
//             return (
//               (s = e.jsonpCallback =
//                 g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
//               o
//                 ? (e[o] = e[o].replace(Vt, "$1" + s))
//                 : !1 !== e.jsonp &&
//                   (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
//               (e.converters["script json"] = function () {
//                 return a || T.error(s + " was not called"), a[0];
//               }),
//               (e.dataTypes[0] = "json"),
//               (r = i[s]),
//               (i[s] = function () {
//                 a = arguments;
//               }),
//               n.always(function () {
//                 void 0 === r ? T(i).removeProp(s) : (i[s] = r),
//                   e[s] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(s)),
//                   a && g(r) && r(a[0]),
//                   (a = r = void 0);
//               }),
//               "script"
//             );
//         }),
//         (m.createHTMLDocument =
//           (((_t = b.implementation.createHTMLDocument("").body).innerHTML =
//             "<form></form><form></form>"),
//           2 === _t.childNodes.length)),
//         (T.parseHTML = function (e, t, i) {
//           return "string" != typeof e
//             ? []
//             : ("boolean" == typeof t && ((i = t), (t = !1)),
//               t ||
//                 (m.createHTMLDocument
//                   ? (((n = (t =
//                       b.implementation.createHTMLDocument("")).createElement(
//                       "base"
//                     )).href = b.location.href),
//                     t.head.appendChild(n))
//                   : (t = b)),
//               (r = !i && []),
//               (s = O.exec(e))
//                 ? [t.createElement(s[1])]
//                 : ((s = Ee([e], t, r)),
//                   r && r.length && T(r).remove(),
//                   T.merge([], s.childNodes)));
//           var n, s, r;
//         }),
//         (T.fn.load = function (e, t, i) {
//           var n,
//             s,
//             r,
//             a = this,
//             o = e.indexOf(" ");
//           return (
//             o > -1 && ((n = gt(e.slice(o))), (e = e.slice(0, o))),
//             g(t)
//               ? ((i = t), (t = void 0))
//               : t && "object" == typeof t && (s = "POST"),
//             a.length > 0 &&
//               T.ajax({ url: e, type: s || "GET", dataType: "html", data: t })
//                 .done(function (e) {
//                   (r = arguments),
//                     a.html(n ? T("<div>").append(T.parseHTML(e)).find(n) : e);
//                 })
//                 .always(
//                   i &&
//                     function (e, t) {
//                       a.each(function () {
//                         i.apply(this, r || [e.responseText, t, e]);
//                       });
//                     }
//                 ),
//             this
//           );
//         }),
//         (T.expr.pseudos.animated = function (e) {
//           return T.grep(T.timers, function (t) {
//             return e === t.elem;
//           }).length;
//         }),
//         (T.offset = {
//           setOffset: function (e, t, i) {
//             var n,
//               s,
//               r,
//               a,
//               o,
//               l,
//               u = T.css(e, "position"),
//               d = T(e),
//               c = {};
//             "static" === u && (e.style.position = "relative"),
//               (o = d.offset()),
//               (r = T.css(e, "top")),
//               (l = T.css(e, "left")),
//               ("absolute" === u || "fixed" === u) &&
//               (r + l).indexOf("auto") > -1
//                 ? ((a = (n = d.position()).top), (s = n.left))
//                 : ((a = parseFloat(r) || 0), (s = parseFloat(l) || 0)),
//               g(t) && (t = t.call(e, i, T.extend({}, o))),
//               null != t.top && (c.top = t.top - o.top + a),
//               null != t.left && (c.left = t.left - o.left + s),
//               "using" in t ? t.using.call(e, c) : d.css(c);
//           },
//         }),
//         T.fn.extend({
//           offset: function (e) {
//             if (arguments.length)
//               return void 0 === e
//                 ? this
//                 : this.each(function (t) {
//                     T.offset.setOffset(this, e, t);
//                   });
//             var t,
//               i,
//               n = this[0];
//             return n
//               ? n.getClientRects().length
//                 ? ((t = n.getBoundingClientRect()),
//                   (i = n.ownerDocument.defaultView),
//                   { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset })
//                 : { top: 0, left: 0 }
//               : void 0;
//           },
//           position: function () {
//             if (this[0]) {
//               var e,
//                 t,
//                 i,
//                 n = this[0],
//                 s = { top: 0, left: 0 };
//               if ("fixed" === T.css(n, "position"))
//                 t = n.getBoundingClientRect();
//               else {
//                 for (
//                   t = this.offset(),
//                     i = n.ownerDocument,
//                     e = n.offsetParent || i.documentElement;
//                   e &&
//                   (e === i.body || e === i.documentElement) &&
//                   "static" === T.css(e, "position");

//                 )
//                   e = e.parentNode;
//                 e &&
//                   e !== n &&
//                   1 === e.nodeType &&
//                   (((s = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
//                   (s.left += T.css(e, "borderLeftWidth", !0)));
//               }
//               return {
//                 top: t.top - s.top - T.css(n, "marginTop", !0),
//                 left: t.left - s.left - T.css(n, "marginLeft", !0),
//               };
//             }
//           },
//           offsetParent: function () {
//             return this.map(function () {
//               for (
//                 var e = this.offsetParent;
//                 e && "static" === T.css(e, "position");

//               )
//                 e = e.offsetParent;
//               return e || re;
//             });
//           },
//         }),
//         T.each(
//           { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
//           function (e, t) {
//             var i = "pageYOffset" === t;
//             T.fn[e] = function (n) {
//               return F(
//                 this,
//                 function (e, n, s) {
//                   var r;
//                   if (
//                     (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
//                     void 0 === s)
//                   )
//                     return r ? r[t] : e[n];
//                   r
//                     ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset)
//                     : (e[n] = s);
//                 },
//                 e,
//                 n,
//                 arguments.length
//               );
//             };
//           }
//         ),
//         T.each(["top", "left"], function (e, t) {
//           T.cssHooks[t] = _e(m.pixelPosition, function (e, i) {
//             if (i)
//               return (i = Xe(e, t)), qe.test(i) ? T(e).position()[t] + "px" : i;
//           });
//         }),
//         T.each({ Height: "height", Width: "width" }, function (e, t) {
//           T.each(
//             { padding: "inner" + e, content: t, "": "outer" + e },
//             function (i, n) {
//               T.fn[n] = function (s, r) {
//                 var a = arguments.length && (i || "boolean" != typeof s),
//                   o = i || (!0 === s || !0 === r ? "margin" : "border");
//                 return F(
//                   this,
//                   function (t, i, s) {
//                     var r;
//                     return y(t)
//                       ? 0 === n.indexOf("outer")
//                         ? t["inner" + e]
//                         : t.document.documentElement["client" + e]
//                       : 9 === t.nodeType
//                       ? ((r = t.documentElement),
//                         Math.max(
//                           t.body["scroll" + e],
//                           r["scroll" + e],
//                           t.body["offset" + e],
//                           r["offset" + e],
//                           r["client" + e]
//                         ))
//                       : void 0 === s
//                       ? T.css(t, i, o)
//                       : T.style(t, i, s, o);
//                   },
//                   t,
//                   a ? s : void 0,
//                   a
//                 );
//               };
//             }
//           );
//         }),
//         T.each(
//           [
//             "ajaxStart",
//             "ajaxStop",
//             "ajaxComplete",
//             "ajaxError",
//             "ajaxSuccess",
//             "ajaxSend",
//           ],
//           function (e, t) {
//             T.fn[t] = function (e) {
//               return this.on(t, e);
//             };
//           }
//         ),
//         T.fn.extend({
//           bind: function (e, t, i) {
//             return this.on(e, null, t, i);
//           },
//           unbind: function (e, t) {
//             return this.off(e, null, t);
//           },
//           delegate: function (e, t, i, n) {
//             return this.on(t, e, i, n);
//           },
//           undelegate: function (e, t, i) {
//             return 1 === arguments.length
//               ? this.off(e, "**")
//               : this.off(t, e || "**", i);
//           },
//           hover: function (e, t) {
//             return this.mouseenter(e).mouseleave(t || e);
//           },
//         }),
//         T.each(
//           "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
//             " "
//           ),
//           function (e, t) {
//             T.fn[t] = function (e, i) {
//               return arguments.length > 0
//                 ? this.on(t, null, e, i)
//                 : this.trigger(t);
//             };
//           }
//         );
//       var Ut = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
//       (T.proxy = function (e, t) {
//         var i, n, s;
//         if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), g(e)))
//           return (
//             (n = o.call(arguments, 2)),
//             ((s = function () {
//               return e.apply(t || this, n.concat(o.call(arguments)));
//             }).guid = e.guid =
//               e.guid || T.guid++),
//             s
//           );
//       }),
//         (T.holdReady = function (e) {
//           e ? T.readyWait++ : T.ready(!0);
//         }),
//         (T.isArray = Array.isArray),
//         (T.parseJSON = JSON.parse),
//         (T.nodeName = L),
//         (T.isFunction = g),
//         (T.isWindow = y),
//         (T.camelCase = V),
//         (T.type = E),
//         (T.now = Date.now),
//         (T.isNumeric = function (e) {
//           var t = T.type(e);
//           return (
//             ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
//           );
//         }),
//         (T.trim = function (e) {
//           return null == e ? "" : (e + "").replace(Ut, "$1");
//         }),
//         void 0 ===
//           (n = function () {
//             return T;
//           }.apply(t, [])) || (e.exports = n);
//       var Kt = i.jQuery,
//         Qt = i.$;
//       return (
//         (T.noConflict = function (e) {
//           return (
//             i.$ === T && (i.$ = Qt), e && i.jQuery === T && (i.jQuery = Kt), T
//           );
//         }),
//         void 0 === s && (i.jQuery = i.$ = T),
//         T
//       );
//     });
//   },
//   ,
//   function (e, t, i) {
//     "use strict";
//     function n(e) {
//       return (
//         null !== e &&
//         "object" == typeof e &&
//         "constructor" in e &&
//         e.constructor === Object
//       );
//     }
//     function s(e, t) {
//       void 0 === e && (e = {}),
//         void 0 === t && (t = {}),
//         Object.keys(t).forEach(function (i) {
//           void 0 === e[i]
//             ? (e[i] = t[i])
//             : n(t[i]) &&
//               n(e[i]) &&
//               Object.keys(t[i]).length > 0 &&
//               s(e[i], t[i]);
//         });
//     }
//     i.r(t);
//     var r = {
//       body: {},
//       addEventListener: function () {},
//       removeEventListener: function () {},
//       activeElement: { blur: function () {}, nodeName: "" },
//       querySelector: function () {
//         return null;
//       },
//       querySelectorAll: function () {
//         return [];
//       },
//       getElementById: function () {
//         return null;
//       },
//       createEvent: function () {
//         return { initEvent: function () {} };
//       },
//       createElement: function () {
//         return {
//           children: [],
//           childNodes: [],
//           style: {},
//           setAttribute: function () {},
//           getElementsByTagName: function () {
//             return [];
//           },
//         };
//       },
//       createElementNS: function () {
//         return {};
//       },
//       importNode: function () {
//         return null;
//       },
//       location: {
//         hash: "",
//         host: "",
//         hostname: "",
//         href: "",
//         origin: "",
//         pathname: "",
//         protocol: "",
//         search: "",
//       },
//     };
//     function a() {
//       var e = "undefined" != typeof document ? document : {};
//       return s(e, r), e;
//     }
//     var o = {
//       document: r,
//       navigator: { userAgent: "" },
//       location: {
//         hash: "",
//         host: "",
//         hostname: "",
//         href: "",
//         origin: "",
//         pathname: "",
//         protocol: "",
//         search: "",
//       },
//       history: {
//         replaceState: function () {},
//         pushState: function () {},
//         go: function () {},
//         back: function () {},
//       },
//       CustomEvent: function () {
//         return this;
//       },
//       addEventListener: function () {},
//       removeEventListener: function () {},
//       getComputedStyle: function () {
//         return {
//           getPropertyValue: function () {
//             return "";
//           },
//         };
//       },
//       Image: function () {},
//       Date: function () {},
//       screen: {},
//       setTimeout: function () {},
//       clearTimeout: function () {},
//       matchMedia: function () {
//         return {};
//       },
//       requestAnimationFrame: function (e) {
//         return "undefined" == typeof setTimeout
//           ? (e(), null)
//           : setTimeout(e, 0);
//       },
//       cancelAnimationFrame: function (e) {
//         "undefined" != typeof setTimeout && clearTimeout(e);
//       },
//     };
//     function l() {
//       var e = "undefined" != typeof window ? window : {};
//       return s(e, o), e;
//     }
//     function u(e) {
//       return (u = Object.setPrototypeOf
//         ? Object.getPrototypeOf
//         : function (e) {
//             return e.__proto__ || Object.getPrototypeOf(e);
//           })(e);
//     }
//     function d(e, t) {
//       return (d =
//         Object.setPrototypeOf ||
//         function (e, t) {
//           return (e.__proto__ = t), e;
//         })(e, t);
//     }
//     function c() {
//       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
//       if (Reflect.construct.sham) return !1;
//       if ("function" == typeof Proxy) return !0;
//       try {
//         return (
//           Date.prototype.toString.call(
//             Reflect.construct(Date, [], function () {})
//           ),
//           !0
//         );
//       } catch (e) {
//         return !1;
//       }
//     }
//     function h(e, t, i) {
//       return (h = c()
//         ? Reflect.construct
//         : function (e, t, i) {
//             var n = [null];
//             n.push.apply(n, t);
//             var s = new (Function.bind.apply(e, n))();
//             return i && d(s, i.prototype), s;
//           }).apply(null, arguments);
//     }
//     function p(e) {
//       var t = "function" == typeof Map ? new Map() : void 0;
//       return (p = function (e) {
//         if (
//           null === e ||
//           ((i = e), -1 === Function.toString.call(i).indexOf("[native code]"))
//         )
//           return e;
//         var i;
//         if ("function" != typeof e)
//           throw new TypeError(
//             "Super expression must either be null or a function"
//           );
//         if (void 0 !== t) {
//           if (t.has(e)) return t.get(e);
//           t.set(e, n);
//         }
//         function n() {
//           return h(e, arguments, u(this).constructor);
//         }
//         return (
//           (n.prototype = Object.create(e.prototype, {
//             constructor: {
//               value: n,
//               enumerable: !1,
//               writable: !0,
//               configurable: !0,
//             },
//           })),
//           d(n, e)
//         );
//       })(e);
//     }
//     var f = (function (e) {
//       var t, i;
//       function n(t) {
//         var i, n, s;
//         return (
//           (i = e.call.apply(e, [this].concat(t)) || this),
//           (n = (function (e) {
//             if (void 0 === e)
//               throw new ReferenceError(
//                 "this hasn't been initialised - super() hasn't been called"
//               );
//             return e;
//           })(i)),
//           (s = n.__proto__),
//           Object.defineProperty(n, "__proto__", {
//             get: function () {
//               return s;
//             },
//             set: function (e) {
//               s.__proto__ = e;
//             },
//           }),
//           i
//         );
//       }
//       return (
//         (i = e),
//         ((t = n).prototype = Object.create(i.prototype)),
//         (t.prototype.constructor = t),
//         (t.__proto__ = i),
//         n
//       );
//     })(p(Array));
//     function v(e) {
//       void 0 === e && (e = []);
//       var t = [];
//       return (
//         e.forEach(function (e) {
//           Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
//         }),
//         t
//       );
//     }
//     function m(e, t) {
//       return Array.prototype.filter.call(e, t);
//     }
//     function g(e, t) {
//       var i = l(),
//         n = a(),
//         s = [];
//       if (!t && e instanceof f) return e;
//       if (!e) return new f(s);
//       if ("string" == typeof e) {
//         var r = e.trim();
//         if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
//           var o = "div";
//           0 === r.indexOf("<li") && (o = "ul"),
//             0 === r.indexOf("<tr") && (o = "tbody"),
//             (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (o = "tr"),
//             0 === r.indexOf("<tbody") && (o = "table"),
//             0 === r.indexOf("<option") && (o = "select");
//           var u = n.createElement(o);
//           u.innerHTML = r;
//           for (var d = 0; d < u.childNodes.length; d += 1)
//             s.push(u.childNodes[d]);
//         } else
//           s = (function (e, t) {
//             if ("string" != typeof e) return [e];
//             for (
//               var i = [], n = t.querySelectorAll(e), s = 0;
//               s < n.length;
//               s += 1
//             )
//               i.push(n[s]);
//             return i;
//           })(e.trim(), t || n);
//       } else if (e.nodeType || e === i || e === n) s.push(e);
//       else if (Array.isArray(e)) {
//         if (e instanceof f) return e;
//         s = e;
//       }
//       return new f(
//         (function (e) {
//           for (var t = [], i = 0; i < e.length; i += 1)
//             -1 === t.indexOf(e[i]) && t.push(e[i]);
//           return t;
//         })(s)
//       );
//     }
//     g.fn = f.prototype;
//     var y = "resize scroll".split(" ");
//     function b(e) {
//       return function () {
//         for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
//           i[n] = arguments[n];
//         if (void 0 === i[0]) {
//           for (var s = 0; s < this.length; s += 1)
//             y.indexOf(e) < 0 &&
//               (e in this[s] ? this[s][e]() : g(this[s]).trigger(e));
//           return this;
//         }
//         return this.on.apply(this, [e].concat(i));
//       };
//     }
//     b("click"),
//       b("blur"),
//       b("focus"),
//       b("focusin"),
//       b("focusout"),
//       b("keyup"),
//       b("keydown"),
//       b("keypress"),
//       b("submit"),
//       b("change"),
//       b("mousedown"),
//       b("mousemove"),
//       b("mouseup"),
//       b("mouseenter"),
//       b("mouseleave"),
//       b("mouseout"),
//       b("mouseover"),
//       b("touchstart"),
//       b("touchend"),
//       b("touchmove"),
//       b("resize"),
//       b("scroll");
//     var w = {
//       addClass: function () {
//         for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//           t[i] = arguments[i];
//         var n = v(
//           t.map(function (e) {
//             return e.split(" ");
//           })
//         );
//         return (
//           this.forEach(function (e) {
//             var t;
//             (t = e.classList).add.apply(t, n);
//           }),
//           this
//         );
//       },
//       removeClass: function () {
//         for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//           t[i] = arguments[i];
//         var n = v(
//           t.map(function (e) {
//             return e.split(" ");
//           })
//         );
//         return (
//           this.forEach(function (e) {
//             var t;
//             (t = e.classList).remove.apply(t, n);
//           }),
//           this
//         );
//       },
//       hasClass: function () {
//         for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//           t[i] = arguments[i];
//         var n = v(
//           t.map(function (e) {
//             return e.split(" ");
//           })
//         );
//         return (
//           m(this, function (e) {
//             return (
//               n.filter(function (t) {
//                 return e.classList.contains(t);
//               }).length > 0
//             );
//           }).length > 0
//         );
//       },
//       toggleClass: function () {
//         for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//           t[i] = arguments[i];
//         var n = v(
//           t.map(function (e) {
//             return e.split(" ");
//           })
//         );
//         this.forEach(function (e) {
//           n.forEach(function (t) {
//             e.classList.toggle(t);
//           });
//         });
//       },
//       attr: function (e, t) {
//         if (1 === arguments.length && "string" == typeof e)
//           return this[0] ? this[0].getAttribute(e) : void 0;
//         for (var i = 0; i < this.length; i += 1)
//           if (2 === arguments.length) this[i].setAttribute(e, t);
//           else
//             for (var n in e) (this[i][n] = e[n]), this[i].setAttribute(n, e[n]);
//         return this;
//       },
//       removeAttr: function (e) {
//         for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
//         return this;
//       },
//       transform: function (e) {
//         for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
//         return this;
//       },
//       transition: function (e) {
//         for (var t = 0; t < this.length; t += 1)
//           this[t].style.transitionDuration =
//             "string" != typeof e ? e + "ms" : e;
//         return this;
//       },
//       on: function () {
//         for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//           t[i] = arguments[i];
//         var n = t[0],
//           s = t[1],
//           r = t[2],
//           a = t[3];
//         function o(e) {
//           var t = e.target;
//           if (t) {
//             var i = e.target.dom7EventData || [];
//             if ((i.indexOf(e) < 0 && i.unshift(e), g(t).is(s))) r.apply(t, i);
//             else
//               for (var n = g(t).parents(), a = 0; a < n.length; a += 1)
//                 g(n[a]).is(s) && r.apply(n[a], i);
//           }
//         }
//         function l(e) {
//           var t = (e && e.target && e.target.dom7EventData) || [];
//           t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
//         }
//         "function" == typeof t[1] &&
//           ((n = t[0]), (r = t[1]), (a = t[2]), (s = void 0)),
//           a || (a = !1);
//         for (var u, d = n.split(" "), c = 0; c < this.length; c += 1) {
//           var h = this[c];
//           if (s)
//             for (u = 0; u < d.length; u += 1) {
//               var p = d[u];
//               h.dom7LiveListeners || (h.dom7LiveListeners = {}),
//                 h.dom7LiveListeners[p] || (h.dom7LiveListeners[p] = []),
//                 h.dom7LiveListeners[p].push({ listener: r, proxyListener: o }),
//                 h.addEventListener(p, o, a);
//             }
//           else
//             for (u = 0; u < d.length; u += 1) {
//               var f = d[u];
//               h.dom7Listeners || (h.dom7Listeners = {}),
//                 h.dom7Listeners[f] || (h.dom7Listeners[f] = []),
//                 h.dom7Listeners[f].push({ listener: r, proxyListener: l }),
//                 h.addEventListener(f, l, a);
//             }
//         }
//         return this;
//       },
//       off: function () {
//         for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//           t[i] = arguments[i];
//         var n = t[0],
//           s = t[1],
//           r = t[2],
//           a = t[3];
//         "function" == typeof t[1] &&
//           ((n = t[0]), (r = t[1]), (a = t[2]), (s = void 0)),
//           a || (a = !1);
//         for (var o = n.split(" "), l = 0; l < o.length; l += 1)
//           for (var u = o[l], d = 0; d < this.length; d += 1) {
//             var c = this[d],
//               h = void 0;
//             if (
//               (!s && c.dom7Listeners
//                 ? (h = c.dom7Listeners[u])
//                 : s && c.dom7LiveListeners && (h = c.dom7LiveListeners[u]),
//               h && h.length)
//             )
//               for (var p = h.length - 1; p >= 0; p -= 1) {
//                 var f = h[p];
//                 (r && f.listener === r) ||
//                 (r &&
//                   f.listener &&
//                   f.listener.dom7proxy &&
//                   f.listener.dom7proxy === r)
//                   ? (c.removeEventListener(u, f.proxyListener, a),
//                     h.splice(p, 1))
//                   : r ||
//                     (c.removeEventListener(u, f.proxyListener, a),
//                     h.splice(p, 1));
//               }
//           }
//         return this;
//       },
//       trigger: function () {
//         for (
//           var e = l(), t = arguments.length, i = new Array(t), n = 0;
//           n < t;
//           n++
//         )
//           i[n] = arguments[n];
//         for (var s = i[0].split(" "), r = i[1], a = 0; a < s.length; a += 1)
//           for (var o = s[a], u = 0; u < this.length; u += 1) {
//             var d = this[u];
//             if (e.CustomEvent) {
//               var c = new e.CustomEvent(o, {
//                 detail: r,
//                 bubbles: !0,
//                 cancelable: !0,
//               });
//               (d.dom7EventData = i.filter(function (e, t) {
//                 return t > 0;
//               })),
//                 d.dispatchEvent(c),
//                 (d.dom7EventData = []),
//                 delete d.dom7EventData;
//             }
//           }
//         return this;
//       },
//       transitionEnd: function (e) {
//         var t = this;
//         return (
//           e &&
//             t.on("transitionend", function i(n) {
//               n.target === this && (e.call(this, n), t.off("transitionend", i));
//             }),
//           this
//         );
//       },
//       outerWidth: function (e) {
//         if (this.length > 0) {
//           if (e) {
//             var t = this.styles();
//             return (
//               this[0].offsetWidth +
//               parseFloat(t.getPropertyValue("margin-right")) +
//               parseFloat(t.getPropertyValue("margin-left"))
//             );
//           }
//           return this[0].offsetWidth;
//         }
//         return null;
//       },
//       outerHeight: function (e) {
//         if (this.length > 0) {
//           if (e) {
//             var t = this.styles();
//             return (
//               this[0].offsetHeight +
//               parseFloat(t.getPropertyValue("margin-top")) +
//               parseFloat(t.getPropertyValue("margin-bottom"))
//             );
//           }
//           return this[0].offsetHeight;
//         }
//         return null;
//       },
//       styles: function () {
//         var e = l();
//         return this[0] ? e.getComputedStyle(this[0], null) : {};
//       },
//       offset: function () {
//         if (this.length > 0) {
//           var e = l(),
//             t = a(),
//             i = this[0],
//             n = i.getBoundingClientRect(),
//             s = t.body,
//             r = i.clientTop || s.clientTop || 0,
//             o = i.clientLeft || s.clientLeft || 0,
//             u = i === e ? e.scrollY : i.scrollTop,
//             d = i === e ? e.scrollX : i.scrollLeft;
//           return { top: n.top + u - r, left: n.left + d - o };
//         }
//         return null;
//       },
//       css: function (e, t) {
//         var i,
//           n = l();
//         if (1 === arguments.length) {
//           if ("string" != typeof e) {
//             for (i = 0; i < this.length; i += 1)
//               for (var s in e) this[i].style[s] = e[s];
//             return this;
//           }
//           if (this[0])
//             return n.getComputedStyle(this[0], null).getPropertyValue(e);
//         }
//         if (2 === arguments.length && "string" == typeof e) {
//           for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
//           return this;
//         }
//         return this;
//       },
//       each: function (e) {
//         return e
//           ? (this.forEach(function (t, i) {
//               e.apply(t, [t, i]);
//             }),
//             this)
//           : this;
//       },
//       html: function (e) {
//         if (void 0 === e) return this[0] ? this[0].innerHTML : null;
//         for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
//         return this;
//       },
//       text: function (e) {
//         if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
//         for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
//         return this;
//       },
//       is: function (e) {
//         var t,
//           i,
//           n = l(),
//           s = a(),
//           r = this[0];
//         if (!r || void 0 === e) return !1;
//         if ("string" == typeof e) {
//           if (r.matches) return r.matches(e);
//           if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
//           if (r.msMatchesSelector) return r.msMatchesSelector(e);
//           for (t = g(e), i = 0; i < t.length; i += 1) if (t[i] === r) return !0;
//           return !1;
//         }
//         if (e === s) return r === s;
//         if (e === n) return r === n;
//         if (e.nodeType || e instanceof f) {
//           for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
//             if (t[i] === r) return !0;
//           return !1;
//         }
//         return !1;
//       },
//       index: function () {
//         var e,
//           t = this[0];
//         if (t) {
//           for (e = 0; null !== (t = t.previousSibling); )
//             1 === t.nodeType && (e += 1);
//           return e;
//         }
//       },
//       eq: function (e) {
//         if (void 0 === e) return this;
//         var t = this.length;
//         if (e > t - 1) return g([]);
//         if (e < 0) {
//           var i = t + e;
//           return g(i < 0 ? [] : [this[i]]);
//         }
//         return g([this[e]]);
//       },
//       append: function () {
//         for (var e, t = a(), i = 0; i < arguments.length; i += 1) {
//           e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
//           for (var n = 0; n < this.length; n += 1)
//             if ("string" == typeof e) {
//               var s = t.createElement("div");
//               for (s.innerHTML = e; s.firstChild; )
//                 this[n].appendChild(s.firstChild);
//             } else if (e instanceof f)
//               for (var r = 0; r < e.length; r += 1) this[n].appendChild(e[r]);
//             else this[n].appendChild(e);
//         }
//         return this;
//       },
//       prepend: function (e) {
//         var t,
//           i,
//           n = a();
//         for (t = 0; t < this.length; t += 1)
//           if ("string" == typeof e) {
//             var s = n.createElement("div");
//             for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
//               this[t].insertBefore(s.childNodes[i], this[t].childNodes[0]);
//           } else if (e instanceof f)
//             for (i = 0; i < e.length; i += 1)
//               this[t].insertBefore(e[i], this[t].childNodes[0]);
//           else this[t].insertBefore(e, this[t].childNodes[0]);
//         return this;
//       },
//       next: function (e) {
//         return this.length > 0
//           ? e
//             ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(e)
//               ? g([this[0].nextElementSibling])
//               : g([])
//             : this[0].nextElementSibling
//             ? g([this[0].nextElementSibling])
//             : g([])
//           : g([]);
//       },
//       nextAll: function (e) {
//         var t = [],
//           i = this[0];
//         if (!i) return g([]);
//         for (; i.nextElementSibling; ) {
//           var n = i.nextElementSibling;
//           e ? g(n).is(e) && t.push(n) : t.push(n), (i = n);
//         }
//         return g(t);
//       },
//       prev: function (e) {
//         if (this.length > 0) {
//           var t = this[0];
//           return e
//             ? t.previousElementSibling && g(t.previousElementSibling).is(e)
//               ? g([t.previousElementSibling])
//               : g([])
//             : t.previousElementSibling
//             ? g([t.previousElementSibling])
//             : g([]);
//         }
//         return g([]);
//       },
//       prevAll: function (e) {
//         var t = [],
//           i = this[0];
//         if (!i) return g([]);
//         for (; i.previousElementSibling; ) {
//           var n = i.previousElementSibling;
//           e ? g(n).is(e) && t.push(n) : t.push(n), (i = n);
//         }
//         return g(t);
//       },
//       parent: function (e) {
//         for (var t = [], i = 0; i < this.length; i += 1)
//           null !== this[i].parentNode &&
//             (e
//               ? g(this[i].parentNode).is(e) && t.push(this[i].parentNode)
//               : t.push(this[i].parentNode));
//         return g(t);
//       },
//       parents: function (e) {
//         for (var t = [], i = 0; i < this.length; i += 1)
//           for (var n = this[i].parentNode; n; )
//             e ? g(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
//         return g(t);
//       },
//       closest: function (e) {
//         var t = this;
//         return void 0 === e ? g([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
//       },
//       find: function (e) {
//         for (var t = [], i = 0; i < this.length; i += 1)
//           for (var n = this[i].querySelectorAll(e), s = 0; s < n.length; s += 1)
//             t.push(n[s]);
//         return g(t);
//       },
//       children: function (e) {
//         for (var t = [], i = 0; i < this.length; i += 1)
//           for (var n = this[i].children, s = 0; s < n.length; s += 1)
//             (e && !g(n[s]).is(e)) || t.push(n[s]);
//         return g(t);
//       },
//       filter: function (e) {
//         return g(m(this, e));
//       },
//       remove: function () {
//         for (var e = 0; e < this.length; e += 1)
//           this[e].parentNode && this[e].parentNode.removeChild(this[e]);
//         return this;
//       },
//     };
//     Object.keys(w).forEach(function (e) {
//       Object.defineProperty(g.fn, e, { value: w[e], writable: !0 });
//     });
//     var x,
//       E,
//       T,
//       C = g;
//     function S(e, t) {
//       return void 0 === t && (t = 0), setTimeout(e, t);
//     }
//     function M() {
//       return Date.now();
//     }
//     function k(e, t) {
//       void 0 === t && (t = "x");
//       var i,
//         n,
//         s,
//         r = l(),
//         a = (function (e) {
//           var t,
//             i = l();
//           return (
//             i.getComputedStyle && (t = i.getComputedStyle(e, null)),
//             !t && e.currentStyle && (t = e.currentStyle),
//             t || (t = e.style),
//             t
//           );
//         })(e);
//       return (
//         r.WebKitCSSMatrix
//           ? ((n = a.transform || a.webkitTransform).split(",").length > 6 &&
//               (n = n
//                 .split(", ")
//                 .map(function (e) {
//                   return e.replace(",", ".");
//                 })
//                 .join(", ")),
//             (s = new r.WebKitCSSMatrix("none" === n ? "" : n)))
//           : (i = (s =
//               a.MozTransform ||
//               a.OTransform ||
//               a.MsTransform ||
//               a.msTransform ||
//               a.transform ||
//               a
//                 .getPropertyValue("transform")
//                 .replace("translate(", "matrix(1, 0, 0, 1,"))
//               .toString()
//               .split(",")),
//         "x" === t &&
//           (n = r.WebKitCSSMatrix
//             ? s.m41
//             : 16 === i.length
//             ? parseFloat(i[12])
//             : parseFloat(i[4])),
//         "y" === t &&
//           (n = r.WebKitCSSMatrix
//             ? s.m42
//             : 16 === i.length
//             ? parseFloat(i[13])
//             : parseFloat(i[5])),
//         n || 0
//       );
//     }
//     function P(e) {
//       return (
//         "object" == typeof e &&
//         null !== e &&
//         e.constructor &&
//         "Object" === Object.prototype.toString.call(e).slice(8, -1)
//       );
//     }
//     function L(e) {
//       return "undefined" != typeof window && void 0 !== window.HTMLElement
//         ? e instanceof HTMLElement
//         : e && (1 === e.nodeType || 11 === e.nodeType);
//     }
//     function O() {
//       for (
//         var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
//           t = ["__proto__", "constructor", "prototype"],
//           i = 1;
//         i < arguments.length;
//         i += 1
//       ) {
//         var n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
//         if (null != n && !L(n))
//           for (
//             var s = Object.keys(Object(n)).filter(function (e) {
//                 return t.indexOf(e) < 0;
//               }),
//               r = 0,
//               a = s.length;
//             r < a;
//             r += 1
//           ) {
//             var o = s[r],
//               l = Object.getOwnPropertyDescriptor(n, o);
//             void 0 !== l &&
//               l.enumerable &&
//               (P(e[o]) && P(n[o])
//                 ? n[o].__swiper__
//                   ? (e[o] = n[o])
//                   : O(e[o], n[o])
//                 : !P(e[o]) && P(n[o])
//                 ? ((e[o] = {}), n[o].__swiper__ ? (e[o] = n[o]) : O(e[o], n[o]))
//                 : (e[o] = n[o]));
//           }
//       }
//       return e;
//     }
//     function z(e, t) {
//       Object.keys(t).forEach(function (i) {
//         P(t[i]) &&
//           Object.keys(t[i]).forEach(function (n) {
//             "function" == typeof t[i][n] && (t[i][n] = t[i][n].bind(e));
//           }),
//           (e[i] = t[i]);
//       });
//     }
//     function A(e) {
//       return (
//         void 0 === e && (e = ""),
//         "." +
//           e
//             .trim()
//             .replace(/([\.:!\/])/g, "\\$1")
//             .replace(/ /g, ".")
//       );
//     }
//     function D(e, t, i, n) {
//       var s = a();
//       return (
//         i &&
//           Object.keys(n).forEach(function (i) {
//             if (!t[i] && !0 === t.auto) {
//               var r = s.createElement("div");
//               (r.className = n[i]), e.append(r), (t[i] = r);
//             }
//           }),
//         t
//       );
//     }
//     function $() {
//       return (
//         x ||
//           (x = (function () {
//             var e = l(),
//               t = a();
//             return {
//               touch: !!(
//                 "ontouchstart" in e ||
//                 (e.DocumentTouch && t instanceof e.DocumentTouch)
//               ),
//               pointerEvents:
//                 !!e.PointerEvent &&
//                 "maxTouchPoints" in e.navigator &&
//                 e.navigator.maxTouchPoints >= 0,
//               observer:
//                 "MutationObserver" in e || "WebkitMutationObserver" in e,
//               passiveListener: (function () {
//                 var t = !1;
//                 try {
//                   var i = Object.defineProperty({}, "passive", {
//                     get: function () {
//                       t = !0;
//                     },
//                   });
//                   e.addEventListener("testPassiveListener", null, i);
//                 } catch (e) {}
//                 return t;
//               })(),
//               gestures: "ongesturestart" in e,
//             };
//           })()),
//         x
//       );
//     }
//     function N(e) {
//       return (
//         void 0 === e && (e = {}),
//         E ||
//           (E = (function (e) {
//             var t = (void 0 === e ? {} : e).userAgent,
//               i = $(),
//               n = l(),
//               s = n.navigator.platform,
//               r = t || n.navigator.userAgent,
//               a = { ios: !1, android: !1 },
//               o = n.screen.width,
//               u = n.screen.height,
//               d = r.match(/(Android);?[\s\/]+([\d.]+)?/),
//               c = r.match(/(iPad).*OS\s([\d_]+)/),
//               h = r.match(/(iPod)(.*OS\s([\d_]+))?/),
//               p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
//               f = "Win32" === s,
//               v = "MacIntel" === s;
//             return (
//               !c &&
//                 v &&
//                 i.touch &&
//                 [
//                   "1024x1366",
//                   "1366x1024",
//                   "834x1194",
//                   "1194x834",
//                   "834x1112",
//                   "1112x834",
//                   "768x1024",
//                   "1024x768",
//                   "820x1180",
//                   "1180x820",
//                   "810x1080",
//                   "1080x810",
//                 ].indexOf(o + "x" + u) >= 0 &&
//                 ((c = r.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]),
//                 (v = !1)),
//               d && !f && ((a.os = "android"), (a.android = !0)),
//               (c || p || h) && ((a.os = "ios"), (a.ios = !0)),
//               a
//             );
//           })(e)),
//         E
//       );
//     }
//     function I() {
//       return (
//         T ||
//           (T = (function () {
//             var e,
//               t = l();
//             return {
//               isEdge: !!t.navigator.userAgent.match(/Edge/g),
//               isSafari:
//                 ((e = t.navigator.userAgent.toLowerCase()),
//                 e.indexOf("safari") >= 0 &&
//                   e.indexOf("chrome") < 0 &&
//                   e.indexOf("android") < 0),
//               isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
//                 t.navigator.userAgent
//               ),
//             };
//           })()),
//         T
//       );
//     }
//     var j = {
//       name: "resize",
//       create: function () {
//         var e = this;
//         O(e, {
//           resize: {
//             observer: null,
//             createObserver: function () {
//               e &&
//                 !e.destroyed &&
//                 e.initialized &&
//                 ((e.resize.observer = new ResizeObserver(function (t) {
//                   var i = e.width,
//                     n = e.height,
//                     s = i,
//                     r = n;
//                   t.forEach(function (t) {
//                     var i = t.contentBoxSize,
//                       n = t.contentRect,
//                       a = t.target;
//                     (a && a !== e.el) ||
//                       ((s = n ? n.width : (i[0] || i).inlineSize),
//                       (r = n ? n.height : (i[0] || i).blockSize));
//                   }),
//                     (s === i && r === n) || e.resize.resizeHandler();
//                 })),
//                 e.resize.observer.observe(e.el));
//             },
//             removeObserver: function () {
//               e.resize.observer &&
//                 e.resize.observer.unobserve &&
//                 e.el &&
//                 (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
//             },
//             resizeHandler: function () {
//               e &&
//                 !e.destroyed &&
//                 e.initialized &&
//                 (e.emit("beforeResize"), e.emit("resize"));
//             },
//             orientationChangeHandler: function () {
//               e && !e.destroyed && e.initialized && e.emit("orientationchange");
//             },
//           },
//         });
//       },
//       on: {
//         init: function (e) {
//           var t = l();
//           e.params.resizeObserver && void 0 !== l().ResizeObserver
//             ? e.resize.createObserver()
//             : (t.addEventListener("resize", e.resize.resizeHandler),
//               t.addEventListener(
//                 "orientationchange",
//                 e.resize.orientationChangeHandler
//               ));
//         },
//         destroy: function (e) {
//           var t = l();
//           e.resize.removeObserver(),
//             t.removeEventListener("resize", e.resize.resizeHandler),
//             t.removeEventListener(
//               "orientationchange",
//               e.resize.orientationChangeHandler
//             );
//         },
//       },
//     };
//     function H() {
//       return (H =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var q = {
//         attach: function (e, t) {
//           void 0 === t && (t = {});
//           var i = l(),
//             n = this,
//             s = new (i.MutationObserver || i.WebkitMutationObserver)(function (
//               e
//             ) {
//               if (1 !== e.length) {
//                 var t = function () {
//                   n.emit("observerUpdate", e[0]);
//                 };
//                 i.requestAnimationFrame
//                   ? i.requestAnimationFrame(t)
//                   : i.setTimeout(t, 0);
//               } else n.emit("observerUpdate", e[0]);
//             });
//           s.observe(e, {
//             attributes: void 0 === t.attributes || t.attributes,
//             childList: void 0 === t.childList || t.childList,
//             characterData: void 0 === t.characterData || t.characterData,
//           }),
//             n.observer.observers.push(s);
//         },
//         init: function () {
//           if (this.support.observer && this.params.observer) {
//             if (this.params.observeParents)
//               for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
//                 this.observer.attach(e[t]);
//             this.observer.attach(this.$el[0], {
//               childList: this.params.observeSlideChildren,
//             }),
//               this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
//           }
//         },
//         destroy: function () {
//           this.observer.observers.forEach(function (e) {
//             e.disconnect();
//           }),
//             (this.observer.observers = []);
//         },
//       },
//       B = {
//         name: "observer",
//         params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
//         create: function () {
//           z(this, { observer: H({}, q, { observers: [] }) });
//         },
//         on: {
//           init: function (e) {
//             e.observer.init();
//           },
//           destroy: function (e) {
//             e.observer.destroy();
//           },
//         },
//       };
//     function R(e) {
//       var t = a(),
//         i = l(),
//         n = this.touchEventsData,
//         s = this.params,
//         r = this.touches;
//       if (
//         this.enabled &&
//         (!this.animating || !s.preventInteractionOnTransition)
//       ) {
//         var o = e;
//         o.originalEvent && (o = o.originalEvent);
//         var u = C(o.target);
//         if (
//           ("wrapper" !== s.touchEventsTarget ||
//             u.closest(this.wrapperEl).length) &&
//           ((n.isTouchEvent = "touchstart" === o.type),
//           (n.isTouchEvent || !("which" in o) || 3 !== o.which) &&
//             !(
//               (!n.isTouchEvent && "button" in o && o.button > 0) ||
//               (n.isTouched && n.isMoved)
//             ))
//         ) {
//           !!s.noSwipingClass &&
//             "" !== s.noSwipingClass &&
//             o.target &&
//             o.target.shadowRoot &&
//             e.path &&
//             e.path[0] &&
//             (u = C(e.path[0]));
//           var d = s.noSwipingSelector
//               ? s.noSwipingSelector
//               : "." + s.noSwipingClass,
//             c = !(!o.target || !o.target.shadowRoot);
//           if (
//             s.noSwiping &&
//             (c
//               ? (function (e, t) {
//                   return (
//                     void 0 === t && (t = this),
//                     (function t(i) {
//                       return i && i !== a() && i !== l()
//                         ? (i.assignedSlot && (i = i.assignedSlot),
//                           i.closest(e) || t(i.getRootNode().host))
//                         : null;
//                     })(t)
//                   );
//                 })(d, o.target)
//               : u.closest(d)[0])
//           )
//             this.allowClick = !0;
//           else if (!s.swipeHandler || u.closest(s.swipeHandler)[0]) {
//             (r.currentX =
//               "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
//               (r.currentY =
//                 "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
//             var h = r.currentX,
//               p = r.currentY,
//               f = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
//               v = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
//             if (f && (h <= v || h >= i.innerWidth - v)) {
//               if ("prevent" !== f) return;
//               e.preventDefault();
//             }
//             if (
//               (O(n, {
//                 isTouched: !0,
//                 isMoved: !1,
//                 allowTouchCallbacks: !0,
//                 isScrolling: void 0,
//                 startMoving: void 0,
//               }),
//               (r.startX = h),
//               (r.startY = p),
//               (n.touchStartTime = M()),
//               (this.allowClick = !0),
//               this.updateSize(),
//               (this.swipeDirection = void 0),
//               s.threshold > 0 && (n.allowThresholdMove = !1),
//               "touchstart" !== o.type)
//             ) {
//               var m = !0;
//               u.is(n.focusableElements) && (m = !1),
//                 t.activeElement &&
//                   C(t.activeElement).is(n.focusableElements) &&
//                   t.activeElement !== u[0] &&
//                   t.activeElement.blur();
//               var g = m && this.allowTouchMove && s.touchStartPreventDefault;
//               (!s.touchStartForcePreventDefault && !g) ||
//                 u[0].isContentEditable ||
//                 o.preventDefault();
//             }
//             this.emit("touchStart", o);
//           }
//         }
//       }
//     }
//     function G(e) {
//       var t = a(),
//         i = this.touchEventsData,
//         n = this.params,
//         s = this.touches,
//         r = this.rtlTranslate;
//       if (this.enabled) {
//         var o = e;
//         if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
//           if (!i.isTouchEvent || "touchmove" === o.type) {
//             var l =
//                 "touchmove" === o.type &&
//                 o.targetTouches &&
//                 (o.targetTouches[0] || o.changedTouches[0]),
//               u = "touchmove" === o.type ? l.pageX : o.pageX,
//               d = "touchmove" === o.type ? l.pageY : o.pageY;
//             if (o.preventedByNestedSwiper)
//               return (s.startX = u), void (s.startY = d);
//             if (!this.allowTouchMove)
//               return (
//                 (this.allowClick = !1),
//                 void (
//                   i.isTouched &&
//                   (O(s, { startX: u, startY: d, currentX: u, currentY: d }),
//                   (i.touchStartTime = M()))
//                 )
//               );
//             if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
//               if (this.isVertical()) {
//                 if (
//                   (d < s.startY && this.translate <= this.maxTranslate()) ||
//                   (d > s.startY && this.translate >= this.minTranslate())
//                 )
//                   return (i.isTouched = !1), void (i.isMoved = !1);
//               } else if (
//                 (u < s.startX && this.translate <= this.maxTranslate()) ||
//                 (u > s.startX && this.translate >= this.minTranslate())
//               )
//                 return;
//             if (
//               i.isTouchEvent &&
//               t.activeElement &&
//               o.target === t.activeElement &&
//               C(o.target).is(i.focusableElements)
//             )
//               return (i.isMoved = !0), void (this.allowClick = !1);
//             if (
//               (i.allowTouchCallbacks && this.emit("touchMove", o),
//               !(o.targetTouches && o.targetTouches.length > 1))
//             ) {
//               (s.currentX = u), (s.currentY = d);
//               var c = s.currentX - s.startX,
//                 h = s.currentY - s.startY;
//               if (
//                 !(
//                   this.params.threshold &&
//                   Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) <
//                     this.params.threshold
//                 )
//               ) {
//                 var p;
//                 if (void 0 === i.isScrolling)
//                   (this.isHorizontal() && s.currentY === s.startY) ||
//                   (this.isVertical() && s.currentX === s.startX)
//                     ? (i.isScrolling = !1)
//                     : c * c + h * h >= 25 &&
//                       ((p =
//                         (180 * Math.atan2(Math.abs(h), Math.abs(c))) / Math.PI),
//                       (i.isScrolling = this.isHorizontal()
//                         ? p > n.touchAngle
//                         : 90 - p > n.touchAngle));
//                 if (
//                   (i.isScrolling && this.emit("touchMoveOpposite", o),
//                   void 0 === i.startMoving &&
//                     ((s.currentX === s.startX && s.currentY === s.startY) ||
//                       (i.startMoving = !0)),
//                   i.isScrolling)
//                 )
//                   i.isTouched = !1;
//                 else if (i.startMoving) {
//                   (this.allowClick = !1),
//                     !n.cssMode && o.cancelable && o.preventDefault(),
//                     n.touchMoveStopPropagation &&
//                       !n.nested &&
//                       o.stopPropagation(),
//                     i.isMoved ||
//                       (n.loop && this.loopFix(),
//                       (i.startTranslate = this.getTranslate()),
//                       this.setTransition(0),
//                       this.animating &&
//                         this.$wrapperEl.trigger(
//                           "webkitTransitionEnd transitionend"
//                         ),
//                       (i.allowMomentumBounce = !1),
//                       !n.grabCursor ||
//                         (!0 !== this.allowSlideNext &&
//                           !0 !== this.allowSlidePrev) ||
//                         this.setGrabCursor(!0),
//                       this.emit("sliderFirstMove", o)),
//                     this.emit("sliderMove", o),
//                     (i.isMoved = !0);
//                   var f = this.isHorizontal() ? c : h;
//                   (s.diff = f),
//                     (f *= n.touchRatio),
//                     r && (f = -f),
//                     (this.swipeDirection = f > 0 ? "prev" : "next"),
//                     (i.currentTranslate = f + i.startTranslate);
//                   var v = !0,
//                     m = n.resistanceRatio;
//                   if (
//                     (n.touchReleaseOnEdges && (m = 0),
//                     f > 0 && i.currentTranslate > this.minTranslate()
//                       ? ((v = !1),
//                         n.resistance &&
//                           (i.currentTranslate =
//                             this.minTranslate() -
//                             1 +
//                             Math.pow(
//                               -this.minTranslate() + i.startTranslate + f,
//                               m
//                             )))
//                       : f < 0 &&
//                         i.currentTranslate < this.maxTranslate() &&
//                         ((v = !1),
//                         n.resistance &&
//                           (i.currentTranslate =
//                             this.maxTranslate() +
//                             1 -
//                             Math.pow(
//                               this.maxTranslate() - i.startTranslate - f,
//                               m
//                             ))),
//                     v && (o.preventedByNestedSwiper = !0),
//                     !this.allowSlideNext &&
//                       "next" === this.swipeDirection &&
//                       i.currentTranslate < i.startTranslate &&
//                       (i.currentTranslate = i.startTranslate),
//                     !this.allowSlidePrev &&
//                       "prev" === this.swipeDirection &&
//                       i.currentTranslate > i.startTranslate &&
//                       (i.currentTranslate = i.startTranslate),
//                     this.allowSlidePrev ||
//                       this.allowSlideNext ||
//                       (i.currentTranslate = i.startTranslate),
//                     n.threshold > 0)
//                   ) {
//                     if (!(Math.abs(f) > n.threshold || i.allowThresholdMove))
//                       return void (i.currentTranslate = i.startTranslate);
//                     if (!i.allowThresholdMove)
//                       return (
//                         (i.allowThresholdMove = !0),
//                         (s.startX = s.currentX),
//                         (s.startY = s.currentY),
//                         (i.currentTranslate = i.startTranslate),
//                         void (s.diff = this.isHorizontal()
//                           ? s.currentX - s.startX
//                           : s.currentY - s.startY)
//                       );
//                   }
//                   n.followFinger &&
//                     !n.cssMode &&
//                     ((n.freeMode ||
//                       n.watchSlidesProgress ||
//                       n.watchSlidesVisibility) &&
//                       (this.updateActiveIndex(), this.updateSlidesClasses()),
//                     n.freeMode &&
//                       (0 === i.velocities.length &&
//                         i.velocities.push({
//                           position:
//                             s[this.isHorizontal() ? "startX" : "startY"],
//                           time: i.touchStartTime,
//                         }),
//                       i.velocities.push({
//                         position:
//                           s[this.isHorizontal() ? "currentX" : "currentY"],
//                         time: M(),
//                       })),
//                     this.updateProgress(i.currentTranslate),
//                     this.setTranslate(i.currentTranslate));
//                 }
//               }
//             }
//           }
//         } else
//           i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
//       }
//     }
//     function W(e) {
//       var t = this,
//         i = t.touchEventsData,
//         n = t.params,
//         s = t.touches,
//         r = t.rtlTranslate,
//         a = t.$wrapperEl,
//         o = t.slidesGrid,
//         l = t.snapGrid;
//       if (t.enabled) {
//         var u = e;
//         if (
//           (u.originalEvent && (u = u.originalEvent),
//           i.allowTouchCallbacks && t.emit("touchEnd", u),
//           (i.allowTouchCallbacks = !1),
//           !i.isTouched)
//         )
//           return (
//             i.isMoved && n.grabCursor && t.setGrabCursor(!1),
//             (i.isMoved = !1),
//             void (i.startMoving = !1)
//           );
//         n.grabCursor &&
//           i.isMoved &&
//           i.isTouched &&
//           (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
//           t.setGrabCursor(!1);
//         var d,
//           c = M(),
//           h = c - i.touchStartTime;
//         if (
//           (t.allowClick &&
//             (t.updateClickedSlide(u),
//             t.emit("tap click", u),
//             h < 300 &&
//               c - i.lastClickTime < 300 &&
//               t.emit("doubleTap doubleClick", u)),
//           (i.lastClickTime = M()),
//           S(function () {
//             t.destroyed || (t.allowClick = !0);
//           }),
//           !i.isTouched ||
//             !i.isMoved ||
//             !t.swipeDirection ||
//             0 === s.diff ||
//             i.currentTranslate === i.startTranslate)
//         )
//           return (
//             (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
//           );
//         if (
//           ((i.isTouched = !1),
//           (i.isMoved = !1),
//           (i.startMoving = !1),
//           (d = n.followFinger
//             ? r
//               ? t.translate
//               : -t.translate
//             : -i.currentTranslate),
//           !n.cssMode)
//         )
//           if (n.freeMode) {
//             if (d < -t.minTranslate()) return void t.slideTo(t.activeIndex);
//             if (d > -t.maxTranslate())
//               return void (t.slides.length < l.length
//                 ? t.slideTo(l.length - 1)
//                 : t.slideTo(t.slides.length - 1));
//             if (n.freeModeMomentum) {
//               if (i.velocities.length > 1) {
//                 var p = i.velocities.pop(),
//                   f = i.velocities.pop(),
//                   v = p.position - f.position,
//                   m = p.time - f.time;
//                 (t.velocity = v / m),
//                   (t.velocity /= 2),
//                   Math.abs(t.velocity) < n.freeModeMinimumVelocity &&
//                     (t.velocity = 0),
//                   (m > 150 || M() - p.time > 300) && (t.velocity = 0);
//               } else t.velocity = 0;
//               (t.velocity *= n.freeModeMomentumVelocityRatio),
//                 (i.velocities.length = 0);
//               var g = 1e3 * n.freeModeMomentumRatio,
//                 y = t.velocity * g,
//                 b = t.translate + y;
//               r && (b = -b);
//               var w,
//                 x,
//                 E = !1,
//                 T = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
//               if (b < t.maxTranslate())
//                 n.freeModeMomentumBounce
//                   ? (b + t.maxTranslate() < -T && (b = t.maxTranslate() - T),
//                     (w = t.maxTranslate()),
//                     (E = !0),
//                     (i.allowMomentumBounce = !0))
//                   : (b = t.maxTranslate()),
//                   n.loop && n.centeredSlides && (x = !0);
//               else if (b > t.minTranslate())
//                 n.freeModeMomentumBounce
//                   ? (b - t.minTranslate() > T && (b = t.minTranslate() + T),
//                     (w = t.minTranslate()),
//                     (E = !0),
//                     (i.allowMomentumBounce = !0))
//                   : (b = t.minTranslate()),
//                   n.loop && n.centeredSlides && (x = !0);
//               else if (n.freeModeSticky) {
//                 for (var C, k = 0; k < l.length; k += 1)
//                   if (l[k] > -b) {
//                     C = k;
//                     break;
//                   }
//                 b = -(b =
//                   Math.abs(l[C] - b) < Math.abs(l[C - 1] - b) ||
//                   "next" === t.swipeDirection
//                     ? l[C]
//                     : l[C - 1]);
//               }
//               if (
//                 (x &&
//                   t.once("transitionEnd", function () {
//                     t.loopFix();
//                   }),
//                 0 !== t.velocity)
//               ) {
//                 if (
//                   ((g = r
//                     ? Math.abs((-b - t.translate) / t.velocity)
//                     : Math.abs((b - t.translate) / t.velocity)),
//                   n.freeModeSticky)
//                 ) {
//                   var P = Math.abs((r ? -b : b) - t.translate),
//                     L = t.slidesSizesGrid[t.activeIndex];
//                   g =
//                     P < L ? n.speed : P < 2 * L ? 1.5 * n.speed : 2.5 * n.speed;
//                 }
//               } else if (n.freeModeSticky) return void t.slideToClosest();
//               n.freeModeMomentumBounce && E
//                 ? (t.updateProgress(w),
//                   t.setTransition(g),
//                   t.setTranslate(b),
//                   t.transitionStart(!0, t.swipeDirection),
//                   (t.animating = !0),
//                   a.transitionEnd(function () {
//                     t &&
//                       !t.destroyed &&
//                       i.allowMomentumBounce &&
//                       (t.emit("momentumBounce"),
//                       t.setTransition(n.speed),
//                       setTimeout(function () {
//                         t.setTranslate(w),
//                           a.transitionEnd(function () {
//                             t && !t.destroyed && t.transitionEnd();
//                           });
//                       }, 0));
//                   }))
//                 : t.velocity
//                 ? (t.updateProgress(b),
//                   t.setTransition(g),
//                   t.setTranslate(b),
//                   t.transitionStart(!0, t.swipeDirection),
//                   t.animating ||
//                     ((t.animating = !0),
//                     a.transitionEnd(function () {
//                       t && !t.destroyed && t.transitionEnd();
//                     })))
//                 : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(b)),
//                 t.updateActiveIndex(),
//                 t.updateSlidesClasses();
//             } else {
//               if (n.freeModeSticky) return void t.slideToClosest();
//               n.freeMode && t.emit("_freeModeNoMomentumRelease");
//             }
//             (!n.freeModeMomentum || h >= n.longSwipesMs) &&
//               (t.updateProgress(),
//               t.updateActiveIndex(),
//               t.updateSlidesClasses());
//           } else {
//             for (
//               var O = 0, z = t.slidesSizesGrid[0], A = 0;
//               A < o.length;
//               A += A < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
//             ) {
//               var D = A < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
//               void 0 !== o[A + D]
//                 ? d >= o[A] && d < o[A + D] && ((O = A), (z = o[A + D] - o[A]))
//                 : d >= o[A] &&
//                   ((O = A), (z = o[o.length - 1] - o[o.length - 2]));
//             }
//             var $ = (d - o[O]) / z,
//               N = O < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
//             if (h > n.longSwipesMs) {
//               if (!n.longSwipes) return void t.slideTo(t.activeIndex);
//               "next" === t.swipeDirection &&
//                 ($ >= n.longSwipesRatio ? t.slideTo(O + N) : t.slideTo(O)),
//                 "prev" === t.swipeDirection &&
//                   ($ > 1 - n.longSwipesRatio ? t.slideTo(O + N) : t.slideTo(O));
//             } else {
//               if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
//               t.navigation &&
//               (u.target === t.navigation.nextEl ||
//                 u.target === t.navigation.prevEl)
//                 ? u.target === t.navigation.nextEl
//                   ? t.slideTo(O + N)
//                   : t.slideTo(O)
//                 : ("next" === t.swipeDirection && t.slideTo(O + N),
//                   "prev" === t.swipeDirection && t.slideTo(O));
//             }
//           }
//       }
//     }
//     function F() {
//       var e = this.params,
//         t = this.el;
//       if (!t || 0 !== t.offsetWidth) {
//         e.breakpoints && this.setBreakpoint();
//         var i = this.allowSlideNext,
//           n = this.allowSlidePrev,
//           s = this.snapGrid;
//         (this.allowSlideNext = !0),
//           (this.allowSlidePrev = !0),
//           this.updateSize(),
//           this.updateSlides(),
//           this.updateSlidesClasses(),
//           ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
//           this.isEnd &&
//           !this.isBeginning &&
//           !this.params.centeredSlides
//             ? this.slideTo(this.slides.length - 1, 0, !1, !0)
//             : this.slideTo(this.activeIndex, 0, !1, !0),
//           this.autoplay &&
//             this.autoplay.running &&
//             this.autoplay.paused &&
//             this.autoplay.run(),
//           (this.allowSlidePrev = n),
//           (this.allowSlideNext = i),
//           this.params.watchOverflow &&
//             s !== this.snapGrid &&
//             this.checkOverflow();
//       }
//     }
//     function X(e) {
//       this.enabled &&
//         (this.allowClick ||
//           (this.params.preventClicks && e.preventDefault(),
//           this.params.preventClicksPropagation &&
//             this.animating &&
//             (e.stopPropagation(), e.stopImmediatePropagation())));
//     }
//     function _() {
//       var e = this.wrapperEl,
//         t = this.rtlTranslate;
//       if (this.enabled) {
//         (this.previousTranslate = this.translate),
//           this.isHorizontal()
//             ? (this.translate = t
//                 ? e.scrollWidth - e.offsetWidth - e.scrollLeft
//                 : -e.scrollLeft)
//             : (this.translate = -e.scrollTop),
//           -0 === this.translate && (this.translate = 0),
//           this.updateActiveIndex(),
//           this.updateSlidesClasses();
//         var i = this.maxTranslate() - this.minTranslate();
//         (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !==
//           this.progress &&
//           this.updateProgress(t ? -this.translate : this.translate),
//           this.emit("setTranslate", this.translate, !1);
//       }
//     }
//     var Y = !1;
//     function V() {}
//     var U = {
//       init: !0,
//       direction: "horizontal",
//       touchEventsTarget: "container",
//       initialSlide: 0,
//       speed: 300,
//       cssMode: !1,
//       updateOnWindowResize: !0,
//       resizeObserver: !1,
//       nested: !1,
//       createElements: !1,
//       enabled: !0,
//       focusableElements:
//         "input, select, option, textarea, button, video, label",
//       width: null,
//       height: null,
//       preventInteractionOnTransition: !1,
//       userAgent: null,
//       url: null,
//       edgeSwipeDetection: !1,
//       edgeSwipeThreshold: 20,
//       freeMode: !1,
//       freeModeMomentum: !0,
//       freeModeMomentumRatio: 1,
//       freeModeMomentumBounce: !0,
//       freeModeMomentumBounceRatio: 1,
//       freeModeMomentumVelocityRatio: 1,
//       freeModeSticky: !1,
//       freeModeMinimumVelocity: 0.02,
//       autoHeight: !1,
//       setWrapperSize: !1,
//       virtualTranslate: !1,
//       effect: "slide",
//       breakpoints: void 0,
//       breakpointsBase: "window",
//       spaceBetween: 0,
//       slidesPerView: 1,
//       slidesPerColumn: 1,
//       slidesPerColumnFill: "column",
//       slidesPerGroup: 1,
//       slidesPerGroupSkip: 0,
//       centeredSlides: !1,
//       centeredSlidesBounds: !1,
//       slidesOffsetBefore: 0,
//       slidesOffsetAfter: 0,
//       normalizeSlideIndex: !0,
//       centerInsufficientSlides: !1,
//       watchOverflow: !1,
//       roundLengths: !1,
//       touchRatio: 1,
//       touchAngle: 45,
//       simulateTouch: !0,
//       shortSwipes: !0,
//       longSwipes: !0,
//       longSwipesRatio: 0.5,
//       longSwipesMs: 300,
//       followFinger: !0,
//       allowTouchMove: !0,
//       threshold: 0,
//       touchMoveStopPropagation: !1,
//       touchStartPreventDefault: !0,
//       touchStartForcePreventDefault: !1,
//       touchReleaseOnEdges: !1,
//       uniqueNavElements: !0,
//       resistance: !0,
//       resistanceRatio: 0.85,
//       watchSlidesProgress: !1,
//       watchSlidesVisibility: !1,
//       grabCursor: !1,
//       preventClicks: !0,
//       preventClicksPropagation: !0,
//       slideToClickedSlide: !1,
//       preloadImages: !0,
//       updateOnImagesReady: !0,
//       loop: !1,
//       loopAdditionalSlides: 0,
//       loopedSlides: null,
//       loopFillGroupWithBlank: !1,
//       loopPreventsSlide: !0,
//       allowSlidePrev: !0,
//       allowSlideNext: !0,
//       swipeHandler: null,
//       noSwiping: !0,
//       noSwipingClass: "swiper-no-swiping",
//       noSwipingSelector: null,
//       passiveListeners: !0,
//       containerModifierClass: "swiper-container-",
//       slideClass: "swiper-slide",
//       slideBlankClass: "swiper-slide-invisible-blank",
//       slideActiveClass: "swiper-slide-active",
//       slideDuplicateActiveClass: "swiper-slide-duplicate-active",
//       slideVisibleClass: "swiper-slide-visible",
//       slideDuplicateClass: "swiper-slide-duplicate",
//       slideNextClass: "swiper-slide-next",
//       slideDuplicateNextClass: "swiper-slide-duplicate-next",
//       slidePrevClass: "swiper-slide-prev",
//       slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
//       wrapperClass: "swiper-wrapper",
//       runCallbacksOnInit: !0,
//       _emitClasses: !1,
//     };
//     function K(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var n = t[i];
//         (n.enumerable = n.enumerable || !1),
//           (n.configurable = !0),
//           "value" in n && (n.writable = !0),
//           Object.defineProperty(e, n.key, n);
//       }
//     }
//     var Q = {
//         modular: {
//           useParams: function (e) {
//             var t = this;
//             t.modules &&
//               Object.keys(t.modules).forEach(function (i) {
//                 var n = t.modules[i];
//                 n.params && O(e, n.params);
//               });
//           },
//           useModules: function (e) {
//             void 0 === e && (e = {});
//             var t = this;
//             t.modules &&
//               Object.keys(t.modules).forEach(function (i) {
//                 var n = t.modules[i],
//                   s = e[i] || {};
//                 n.on &&
//                   t.on &&
//                   Object.keys(n.on).forEach(function (e) {
//                     t.on(e, n.on[e]);
//                   }),
//                   n.create && n.create.bind(t)(s);
//               });
//           },
//         },
//         eventsEmitter: {
//           on: function (e, t, i) {
//             var n = this;
//             if ("function" != typeof t) return n;
//             var s = i ? "unshift" : "push";
//             return (
//               e.split(" ").forEach(function (e) {
//                 n.eventsListeners[e] || (n.eventsListeners[e] = []),
//                   n.eventsListeners[e][s](t);
//               }),
//               n
//             );
//           },
//           once: function (e, t, i) {
//             var n = this;
//             if ("function" != typeof t) return n;
//             function s() {
//               n.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
//               for (
//                 var i = arguments.length, r = new Array(i), a = 0;
//                 a < i;
//                 a++
//               )
//                 r[a] = arguments[a];
//               t.apply(n, r);
//             }
//             return (s.__emitterProxy = t), n.on(e, s, i);
//           },
//           onAny: function (e, t) {
//             if ("function" != typeof e) return this;
//             var i = t ? "unshift" : "push";
//             return (
//               this.eventsAnyListeners.indexOf(e) < 0 &&
//                 this.eventsAnyListeners[i](e),
//               this
//             );
//           },
//           offAny: function (e) {
//             if (!this.eventsAnyListeners) return this;
//             var t = this.eventsAnyListeners.indexOf(e);
//             return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
//           },
//           off: function (e, t) {
//             var i = this;
//             return i.eventsListeners
//               ? (e.split(" ").forEach(function (e) {
//                   void 0 === t
//                     ? (i.eventsListeners[e] = [])
//                     : i.eventsListeners[e] &&
//                       i.eventsListeners[e].forEach(function (n, s) {
//                         (n === t ||
//                           (n.__emitterProxy && n.__emitterProxy === t)) &&
//                           i.eventsListeners[e].splice(s, 1);
//                       });
//                 }),
//                 i)
//               : i;
//           },
//           emit: function () {
//             var e,
//               t,
//               i,
//               n = this;
//             if (!n.eventsListeners) return n;
//             for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
//               r[a] = arguments[a];
//             "string" == typeof r[0] || Array.isArray(r[0])
//               ? ((e = r[0]), (t = r.slice(1, r.length)), (i = n))
//               : ((e = r[0].events), (t = r[0].data), (i = r[0].context || n)),
//               t.unshift(i);
//             var o = Array.isArray(e) ? e : e.split(" ");
//             return (
//               o.forEach(function (e) {
//                 n.eventsAnyListeners &&
//                   n.eventsAnyListeners.length &&
//                   n.eventsAnyListeners.forEach(function (n) {
//                     n.apply(i, [e].concat(t));
//                   }),
//                   n.eventsListeners &&
//                     n.eventsListeners[e] &&
//                     n.eventsListeners[e].forEach(function (e) {
//                       e.apply(i, t);
//                     });
//               }),
//               n
//             );
//           },
//         },
//         update: {
//           updateSize: function () {
//             var e,
//               t,
//               i = this.$el;
//             (e =
//               void 0 !== this.params.width && null !== this.params.width
//                 ? this.params.width
//                 : i[0].clientWidth),
//               (t =
//                 void 0 !== this.params.height && null !== this.params.height
//                   ? this.params.height
//                   : i[0].clientHeight),
//               (0 === e && this.isHorizontal()) ||
//                 (0 === t && this.isVertical()) ||
//                 ((e =
//                   e -
//                   parseInt(i.css("padding-left") || 0, 10) -
//                   parseInt(i.css("padding-right") || 0, 10)),
//                 (t =
//                   t -
//                   parseInt(i.css("padding-top") || 0, 10) -
//                   parseInt(i.css("padding-bottom") || 0, 10)),
//                 Number.isNaN(e) && (e = 0),
//                 Number.isNaN(t) && (t = 0),
//                 O(this, {
//                   width: e,
//                   height: t,
//                   size: this.isHorizontal() ? e : t,
//                 }));
//           },
//           updateSlides: function () {
//             var e = this;
//             function t(t) {
//               return e.isHorizontal()
//                 ? t
//                 : {
//                     width: "height",
//                     "margin-top": "margin-left",
//                     "margin-bottom ": "margin-right",
//                     "margin-left": "margin-top",
//                     "margin-right": "margin-bottom",
//                     "padding-left": "padding-top",
//                     "padding-right": "padding-bottom",
//                     marginRight: "marginBottom",
//                   }[t];
//             }
//             function i(e, i) {
//               return parseFloat(e.getPropertyValue(t(i)) || 0);
//             }
//             var n = e.params,
//               s = e.$wrapperEl,
//               r = e.size,
//               a = e.rtlTranslate,
//               o = e.wrongRTL,
//               l = e.virtual && n.virtual.enabled,
//               u = l ? e.virtual.slides.length : e.slides.length,
//               d = s.children("." + e.params.slideClass),
//               c = l ? e.virtual.slides.length : d.length,
//               h = [],
//               p = [],
//               f = [],
//               v = n.slidesOffsetBefore;
//             "function" == typeof v && (v = n.slidesOffsetBefore.call(e));
//             var m = n.slidesOffsetAfter;
//             "function" == typeof m && (m = n.slidesOffsetAfter.call(e));
//             var g = e.snapGrid.length,
//               y = e.slidesGrid.length,
//               b = n.spaceBetween,
//               w = -v,
//               x = 0,
//               E = 0;
//             if (void 0 !== r) {
//               var T, C;
//               "string" == typeof b &&
//                 b.indexOf("%") >= 0 &&
//                 (b = (parseFloat(b.replace("%", "")) / 100) * r),
//                 (e.virtualSize = -b),
//                 a
//                   ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
//                   : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
//                 n.slidesPerColumn > 1 &&
//                   ((T =
//                     Math.floor(c / n.slidesPerColumn) ===
//                     c / e.params.slidesPerColumn
//                       ? c
//                       : Math.ceil(c / n.slidesPerColumn) * n.slidesPerColumn),
//                   "auto" !== n.slidesPerView &&
//                     "row" === n.slidesPerColumnFill &&
//                     (T = Math.max(T, n.slidesPerView * n.slidesPerColumn)));
//               for (
//                 var S,
//                   M,
//                   k,
//                   P = n.slidesPerColumn,
//                   L = T / P,
//                   z = Math.floor(c / n.slidesPerColumn),
//                   A = 0;
//                 A < c;
//                 A += 1
//               ) {
//                 C = 0;
//                 var D = d.eq(A);
//                 if (n.slidesPerColumn > 1) {
//                   var $ = void 0,
//                     N = void 0,
//                     I = void 0;
//                   if ("row" === n.slidesPerColumnFill && n.slidesPerGroup > 1) {
//                     var j = Math.floor(
//                         A / (n.slidesPerGroup * n.slidesPerColumn)
//                       ),
//                       H = A - n.slidesPerColumn * n.slidesPerGroup * j,
//                       q =
//                         0 === j
//                           ? n.slidesPerGroup
//                           : Math.min(
//                               Math.ceil((c - j * P * n.slidesPerGroup) / P),
//                               n.slidesPerGroup
//                             );
//                     ($ =
//                       (N =
//                         H -
//                         (I = Math.floor(H / q)) * q +
//                         j * n.slidesPerGroup) +
//                       (I * T) / P),
//                       D.css({
//                         "-webkit-box-ordinal-group": $,
//                         "-moz-box-ordinal-group": $,
//                         "-ms-flex-order": $,
//                         "-webkit-order": $,
//                         order: $,
//                       });
//                   } else
//                     "column" === n.slidesPerColumnFill
//                       ? ((I = A - (N = Math.floor(A / P)) * P),
//                         (N > z || (N === z && I === P - 1)) &&
//                           (I += 1) >= P &&
//                           ((I = 0), (N += 1)))
//                       : (N = A - (I = Math.floor(A / L)) * L);
//                   D.css(
//                     t("margin-top"),
//                     0 !== I ? n.spaceBetween && n.spaceBetween + "px" : ""
//                   );
//                 }
//                 if ("none" !== D.css("display")) {
//                   if ("auto" === n.slidesPerView) {
//                     var B = getComputedStyle(D[0]),
//                       R = D[0].style.transform,
//                       G = D[0].style.webkitTransform;
//                     if (
//                       (R && (D[0].style.transform = "none"),
//                       G && (D[0].style.webkitTransform = "none"),
//                       n.roundLengths)
//                     )
//                       C = e.isHorizontal()
//                         ? D.outerWidth(!0)
//                         : D.outerHeight(!0);
//                     else {
//                       var W = i(B, "width"),
//                         F = i(B, "padding-left"),
//                         X = i(B, "padding-right"),
//                         _ = i(B, "margin-left"),
//                         Y = i(B, "margin-right"),
//                         V = B.getPropertyValue("box-sizing");
//                       if (V && "border-box" === V) C = W + _ + Y;
//                       else {
//                         var U = D[0],
//                           K = U.clientWidth;
//                         C = W + F + X + _ + Y + (U.offsetWidth - K);
//                       }
//                     }
//                     R && (D[0].style.transform = R),
//                       G && (D[0].style.webkitTransform = G),
//                       n.roundLengths && (C = Math.floor(C));
//                   } else
//                     (C = (r - (n.slidesPerView - 1) * b) / n.slidesPerView),
//                       n.roundLengths && (C = Math.floor(C)),
//                       d[A] && (d[A].style[t("width")] = C + "px");
//                   d[A] && (d[A].swiperSlideSize = C),
//                     f.push(C),
//                     n.centeredSlides
//                       ? ((w = w + C / 2 + x / 2 + b),
//                         0 === x && 0 !== A && (w = w - r / 2 - b),
//                         0 === A && (w = w - r / 2 - b),
//                         Math.abs(w) < 0.001 && (w = 0),
//                         n.roundLengths && (w = Math.floor(w)),
//                         E % n.slidesPerGroup == 0 && h.push(w),
//                         p.push(w))
//                       : (n.roundLengths && (w = Math.floor(w)),
//                         (E - Math.min(e.params.slidesPerGroupSkip, E)) %
//                           e.params.slidesPerGroup ==
//                           0 && h.push(w),
//                         p.push(w),
//                         (w = w + C + b)),
//                     (e.virtualSize += C + b),
//                     (x = C),
//                     (E += 1);
//                 }
//               }
//               if (
//                 ((e.virtualSize = Math.max(e.virtualSize, r) + m),
//                 a &&
//                   o &&
//                   ("slide" === n.effect || "coverflow" === n.effect) &&
//                   s.css({ width: e.virtualSize + n.spaceBetween + "px" }),
//                 n.setWrapperSize)
//               )
//                 s.css(
//                   (((M = {})[t("width")] =
//                     e.virtualSize + n.spaceBetween + "px"),
//                   M)
//                 );
//               if (n.slidesPerColumn > 1)
//                 if (
//                   ((e.virtualSize = (C + n.spaceBetween) * T),
//                   (e.virtualSize =
//                     Math.ceil(e.virtualSize / n.slidesPerColumn) -
//                     n.spaceBetween),
//                   s.css(
//                     (((k = {})[t("width")] =
//                       e.virtualSize + n.spaceBetween + "px"),
//                     k)
//                   ),
//                   n.centeredSlides)
//                 ) {
//                   S = [];
//                   for (var Q = 0; Q < h.length; Q += 1) {
//                     var J = h[Q];
//                     n.roundLengths && (J = Math.floor(J)),
//                       h[Q] < e.virtualSize + h[0] && S.push(J);
//                   }
//                   h = S;
//                 }
//               if (!n.centeredSlides) {
//                 S = [];
//                 for (var Z = 0; Z < h.length; Z += 1) {
//                   var ee = h[Z];
//                   n.roundLengths && (ee = Math.floor(ee)),
//                     h[Z] <= e.virtualSize - r && S.push(ee);
//                 }
//                 (h = S),
//                   Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) >
//                     1 && h.push(e.virtualSize - r);
//               }
//               if ((0 === h.length && (h = [0]), 0 !== n.spaceBetween)) {
//                 var te,
//                   ie = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
//                 d.filter(function (e, t) {
//                   return !n.cssMode || t !== d.length - 1;
//                 }).css((((te = {})[ie] = b + "px"), te));
//               }
//               if (n.centeredSlides && n.centeredSlidesBounds) {
//                 var ne = 0;
//                 f.forEach(function (e) {
//                   ne += e + (n.spaceBetween ? n.spaceBetween : 0);
//                 });
//                 var se = (ne -= n.spaceBetween) - r;
//                 h = h.map(function (e) {
//                   return e < 0 ? -v : e > se ? se + m : e;
//                 });
//               }
//               if (n.centerInsufficientSlides) {
//                 var re = 0;
//                 if (
//                   (f.forEach(function (e) {
//                     re += e + (n.spaceBetween ? n.spaceBetween : 0);
//                   }),
//                   (re -= n.spaceBetween) < r)
//                 ) {
//                   var ae = (r - re) / 2;
//                   h.forEach(function (e, t) {
//                     h[t] = e - ae;
//                   }),
//                     p.forEach(function (e, t) {
//                       p[t] = e + ae;
//                     });
//                 }
//               }
//               O(e, {
//                 slides: d,
//                 snapGrid: h,
//                 slidesGrid: p,
//                 slidesSizesGrid: f,
//               }),
//                 c !== u && e.emit("slidesLengthChange"),
//                 h.length !== g &&
//                   (e.params.watchOverflow && e.checkOverflow(),
//                   e.emit("snapGridLengthChange")),
//                 p.length !== y && e.emit("slidesGridLengthChange"),
//                 (n.watchSlidesProgress || n.watchSlidesVisibility) &&
//                   e.updateSlidesOffset();
//             }
//           },
//           updateAutoHeight: function (e) {
//             var t,
//               i = this,
//               n = [],
//               s = i.virtual && i.params.virtual.enabled,
//               r = 0;
//             "number" == typeof e
//               ? i.setTransition(e)
//               : !0 === e && i.setTransition(i.params.speed);
//             var a = function (e) {
//               return s
//                 ? i.slides.filter(function (t) {
//                     return (
//                       parseInt(
//                         t.getAttribute("data-swiper-slide-index"),
//                         10
//                       ) === e
//                     );
//                   })[0]
//                 : i.slides.eq(e)[0];
//             };
//             if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
//               if (i.params.centeredSlides)
//                 i.visibleSlides.each(function (e) {
//                   n.push(e);
//                 });
//               else
//                 for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
//                   var o = i.activeIndex + t;
//                   if (o > i.slides.length && !s) break;
//                   n.push(a(o));
//                 }
//             else n.push(a(i.activeIndex));
//             for (t = 0; t < n.length; t += 1)
//               if (void 0 !== n[t]) {
//                 var l = n[t].offsetHeight;
//                 r = l > r ? l : r;
//               }
//             r && i.$wrapperEl.css("height", r + "px");
//           },
//           updateSlidesOffset: function () {
//             for (var e = this.slides, t = 0; t < e.length; t += 1)
//               e[t].swiperSlideOffset = this.isHorizontal()
//                 ? e[t].offsetLeft
//                 : e[t].offsetTop;
//           },
//           updateSlidesProgress: function (e) {
//             void 0 === e && (e = (this && this.translate) || 0);
//             var t = this.params,
//               i = this.slides,
//               n = this.rtlTranslate;
//             if (0 !== i.length) {
//               void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
//               var s = -e;
//               n && (s = e),
//                 i.removeClass(t.slideVisibleClass),
//                 (this.visibleSlidesIndexes = []),
//                 (this.visibleSlides = []);
//               for (var r = 0; r < i.length; r += 1) {
//                 var a = i[r],
//                   o =
//                     (s +
//                       (t.centeredSlides ? this.minTranslate() : 0) -
//                       a.swiperSlideOffset) /
//                     (a.swiperSlideSize + t.spaceBetween);
//                 if (
//                   t.watchSlidesVisibility ||
//                   (t.centeredSlides && t.autoHeight)
//                 ) {
//                   var l = -(s - a.swiperSlideOffset),
//                     u = l + this.slidesSizesGrid[r];
//                   ((l >= 0 && l < this.size - 1) ||
//                     (u > 1 && u <= this.size) ||
//                     (l <= 0 && u >= this.size)) &&
//                     (this.visibleSlides.push(a),
//                     this.visibleSlidesIndexes.push(r),
//                     i.eq(r).addClass(t.slideVisibleClass));
//                 }
//                 a.progress = n ? -o : o;
//               }
//               this.visibleSlides = C(this.visibleSlides);
//             }
//           },
//           updateProgress: function (e) {
//             if (void 0 === e) {
//               var t = this.rtlTranslate ? -1 : 1;
//               e = (this && this.translate && this.translate * t) || 0;
//             }
//             var i = this.params,
//               n = this.maxTranslate() - this.minTranslate(),
//               s = this.progress,
//               r = this.isBeginning,
//               a = this.isEnd,
//               o = r,
//               l = a;
//             0 === n
//               ? ((s = 0), (r = !0), (a = !0))
//               : ((r = (s = (e - this.minTranslate()) / n) <= 0), (a = s >= 1)),
//               O(this, { progress: s, isBeginning: r, isEnd: a }),
//               (i.watchSlidesProgress ||
//                 i.watchSlidesVisibility ||
//                 (i.centeredSlides && i.autoHeight)) &&
//                 this.updateSlidesProgress(e),
//               r && !o && this.emit("reachBeginning toEdge"),
//               a && !l && this.emit("reachEnd toEdge"),
//               ((o && !r) || (l && !a)) && this.emit("fromEdge"),
//               this.emit("progress", s);
//           },
//           updateSlidesClasses: function () {
//             var e,
//               t = this.slides,
//               i = this.params,
//               n = this.$wrapperEl,
//               s = this.activeIndex,
//               r = this.realIndex,
//               a = this.virtual && i.virtual.enabled;
//             t.removeClass(
//               i.slideActiveClass +
//                 " " +
//                 i.slideNextClass +
//                 " " +
//                 i.slidePrevClass +
//                 " " +
//                 i.slideDuplicateActiveClass +
//                 " " +
//                 i.slideDuplicateNextClass +
//                 " " +
//                 i.slideDuplicatePrevClass
//             ),
//               (e = a
//                 ? this.$wrapperEl.find(
//                     "." + i.slideClass + '[data-swiper-slide-index="' + s + '"]'
//                   )
//                 : t.eq(s)).addClass(i.slideActiveClass),
//               i.loop &&
//                 (e.hasClass(i.slideDuplicateClass)
//                   ? n
//                       .children(
//                         "." +
//                           i.slideClass +
//                           ":not(." +
//                           i.slideDuplicateClass +
//                           ')[data-swiper-slide-index="' +
//                           r +
//                           '"]'
//                       )
//                       .addClass(i.slideDuplicateActiveClass)
//                   : n
//                       .children(
//                         "." +
//                           i.slideClass +
//                           "." +
//                           i.slideDuplicateClass +
//                           '[data-swiper-slide-index="' +
//                           r +
//                           '"]'
//                       )
//                       .addClass(i.slideDuplicateActiveClass));
//             var o = e
//               .nextAll("." + i.slideClass)
//               .eq(0)
//               .addClass(i.slideNextClass);
//             i.loop &&
//               0 === o.length &&
//               (o = t.eq(0)).addClass(i.slideNextClass);
//             var l = e
//               .prevAll("." + i.slideClass)
//               .eq(0)
//               .addClass(i.slidePrevClass);
//             i.loop &&
//               0 === l.length &&
//               (l = t.eq(-1)).addClass(i.slidePrevClass),
//               i.loop &&
//                 (o.hasClass(i.slideDuplicateClass)
//                   ? n
//                       .children(
//                         "." +
//                           i.slideClass +
//                           ":not(." +
//                           i.slideDuplicateClass +
//                           ')[data-swiper-slide-index="' +
//                           o.attr("data-swiper-slide-index") +
//                           '"]'
//                       )
//                       .addClass(i.slideDuplicateNextClass)
//                   : n
//                       .children(
//                         "." +
//                           i.slideClass +
//                           "." +
//                           i.slideDuplicateClass +
//                           '[data-swiper-slide-index="' +
//                           o.attr("data-swiper-slide-index") +
//                           '"]'
//                       )
//                       .addClass(i.slideDuplicateNextClass),
//                 l.hasClass(i.slideDuplicateClass)
//                   ? n
//                       .children(
//                         "." +
//                           i.slideClass +
//                           ":not(." +
//                           i.slideDuplicateClass +
//                           ')[data-swiper-slide-index="' +
//                           l.attr("data-swiper-slide-index") +
//                           '"]'
//                       )
//                       .addClass(i.slideDuplicatePrevClass)
//                   : n
//                       .children(
//                         "." +
//                           i.slideClass +
//                           "." +
//                           i.slideDuplicateClass +
//                           '[data-swiper-slide-index="' +
//                           l.attr("data-swiper-slide-index") +
//                           '"]'
//                       )
//                       .addClass(i.slideDuplicatePrevClass)),
//               this.emitSlidesClasses();
//           },
//           updateActiveIndex: function (e) {
//             var t,
//               i = this.rtlTranslate ? this.translate : -this.translate,
//               n = this.slidesGrid,
//               s = this.snapGrid,
//               r = this.params,
//               a = this.activeIndex,
//               o = this.realIndex,
//               l = this.snapIndex,
//               u = e;
//             if (void 0 === u) {
//               for (var d = 0; d < n.length; d += 1)
//                 void 0 !== n[d + 1]
//                   ? i >= n[d] && i < n[d + 1] - (n[d + 1] - n[d]) / 2
//                     ? (u = d)
//                     : i >= n[d] && i < n[d + 1] && (u = d + 1)
//                   : i >= n[d] && (u = d);
//               r.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
//             }
//             if (s.indexOf(i) >= 0) t = s.indexOf(i);
//             else {
//               var c = Math.min(r.slidesPerGroupSkip, u);
//               t = c + Math.floor((u - c) / r.slidesPerGroup);
//             }
//             if ((t >= s.length && (t = s.length - 1), u !== a)) {
//               var h = parseInt(
//                 this.slides.eq(u).attr("data-swiper-slide-index") || u,
//                 10
//               );
//               O(this, {
//                 snapIndex: t,
//                 realIndex: h,
//                 previousIndex: a,
//                 activeIndex: u,
//               }),
//                 this.emit("activeIndexChange"),
//                 this.emit("snapIndexChange"),
//                 o !== h && this.emit("realIndexChange"),
//                 (this.initialized || this.params.runCallbacksOnInit) &&
//                   this.emit("slideChange");
//             } else
//               t !== l && ((this.snapIndex = t), this.emit("snapIndexChange"));
//           },
//           updateClickedSlide: function (e) {
//             var t,
//               i = this.params,
//               n = C(e.target).closest("." + i.slideClass)[0],
//               s = !1;
//             if (n)
//               for (var r = 0; r < this.slides.length; r += 1)
//                 if (this.slides[r] === n) {
//                   (s = !0), (t = r);
//                   break;
//                 }
//             if (!n || !s)
//               return (
//                 (this.clickedSlide = void 0), void (this.clickedIndex = void 0)
//               );
//             (this.clickedSlide = n),
//               this.virtual && this.params.virtual.enabled
//                 ? (this.clickedIndex = parseInt(
//                     C(n).attr("data-swiper-slide-index"),
//                     10
//                   ))
//                 : (this.clickedIndex = t),
//               i.slideToClickedSlide &&
//                 void 0 !== this.clickedIndex &&
//                 this.clickedIndex !== this.activeIndex &&
//                 this.slideToClickedSlide();
//           },
//         },
//         translate: {
//           getTranslate: function (e) {
//             void 0 === e && (e = this.isHorizontal() ? "x" : "y");
//             var t = this.params,
//               i = this.rtlTranslate,
//               n = this.translate,
//               s = this.$wrapperEl;
//             if (t.virtualTranslate) return i ? -n : n;
//             if (t.cssMode) return n;
//             var r = k(s[0], e);
//             return i && (r = -r), r || 0;
//           },
//           setTranslate: function (e, t) {
//             var i = this.rtlTranslate,
//               n = this.params,
//               s = this.$wrapperEl,
//               r = this.wrapperEl,
//               a = this.progress,
//               o = 0,
//               l = 0;
//             this.isHorizontal() ? (o = i ? -e : e) : (l = e),
//               n.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
//               n.cssMode
//                 ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
//                     this.isHorizontal() ? -o : -l)
//                 : n.virtualTranslate ||
//                   s.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
//               (this.previousTranslate = this.translate),
//               (this.translate = this.isHorizontal() ? o : l);
//             var u = this.maxTranslate() - this.minTranslate();
//             (0 === u ? 0 : (e - this.minTranslate()) / u) !== a &&
//               this.updateProgress(e),
//               this.emit("setTranslate", this.translate, t);
//           },
//           minTranslate: function () {
//             return -this.snapGrid[0];
//           },
//           maxTranslate: function () {
//             return -this.snapGrid[this.snapGrid.length - 1];
//           },
//           translateTo: function (e, t, i, n, s) {
//             void 0 === e && (e = 0),
//               void 0 === t && (t = this.params.speed),
//               void 0 === i && (i = !0),
//               void 0 === n && (n = !0);
//             var r = this,
//               a = r.params,
//               o = r.wrapperEl;
//             if (r.animating && a.preventInteractionOnTransition) return !1;
//             var l,
//               u = r.minTranslate(),
//               d = r.maxTranslate();
//             if (
//               ((l = n && e > u ? u : n && e < d ? d : e),
//               r.updateProgress(l),
//               a.cssMode)
//             ) {
//               var c,
//                 h = r.isHorizontal();
//               if (0 === t) o[h ? "scrollLeft" : "scrollTop"] = -l;
//               else if (o.scrollTo)
//                 o.scrollTo(
//                   (((c = {})[h ? "left" : "top"] = -l),
//                   (c.behavior = "smooth"),
//                   c)
//                 );
//               else o[h ? "scrollLeft" : "scrollTop"] = -l;
//               return !0;
//             }
//             return (
//               0 === t
//                 ? (r.setTransition(0),
//                   r.setTranslate(l),
//                   i &&
//                     (r.emit("beforeTransitionStart", t, s),
//                     r.emit("transitionEnd")))
//                 : (r.setTransition(t),
//                   r.setTranslate(l),
//                   i &&
//                     (r.emit("beforeTransitionStart", t, s),
//                     r.emit("transitionStart")),
//                   r.animating ||
//                     ((r.animating = !0),
//                     r.onTranslateToWrapperTransitionEnd ||
//                       (r.onTranslateToWrapperTransitionEnd = function (e) {
//                         r &&
//                           !r.destroyed &&
//                           e.target === this &&
//                           (r.$wrapperEl[0].removeEventListener(
//                             "transitionend",
//                             r.onTranslateToWrapperTransitionEnd
//                           ),
//                           r.$wrapperEl[0].removeEventListener(
//                             "webkitTransitionEnd",
//                             r.onTranslateToWrapperTransitionEnd
//                           ),
//                           (r.onTranslateToWrapperTransitionEnd = null),
//                           delete r.onTranslateToWrapperTransitionEnd,
//                           i && r.emit("transitionEnd"));
//                       }),
//                     r.$wrapperEl[0].addEventListener(
//                       "transitionend",
//                       r.onTranslateToWrapperTransitionEnd
//                     ),
//                     r.$wrapperEl[0].addEventListener(
//                       "webkitTransitionEnd",
//                       r.onTranslateToWrapperTransitionEnd
//                     ))),
//               !0
//             );
//           },
//         },
//         transition: {
//           setTransition: function (e, t) {
//             this.params.cssMode || this.$wrapperEl.transition(e),
//               this.emit("setTransition", e, t);
//           },
//           transitionStart: function (e, t) {
//             void 0 === e && (e = !0);
//             var i = this.activeIndex,
//               n = this.params,
//               s = this.previousIndex;
//             if (!n.cssMode) {
//               n.autoHeight && this.updateAutoHeight();
//               var r = t;
//               if (
//                 (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
//                 this.emit("transitionStart"),
//                 e && i !== s)
//               ) {
//                 if ("reset" === r)
//                   return void this.emit("slideResetTransitionStart");
//                 this.emit("slideChangeTransitionStart"),
//                   "next" === r
//                     ? this.emit("slideNextTransitionStart")
//                     : this.emit("slidePrevTransitionStart");
//               }
//             }
//           },
//           transitionEnd: function (e, t) {
//             void 0 === e && (e = !0);
//             var i = this.activeIndex,
//               n = this.previousIndex,
//               s = this.params;
//             if (((this.animating = !1), !s.cssMode)) {
//               this.setTransition(0);
//               var r = t;
//               if (
//                 (r || (r = i > n ? "next" : i < n ? "prev" : "reset"),
//                 this.emit("transitionEnd"),
//                 e && i !== n)
//               ) {
//                 if ("reset" === r)
//                   return void this.emit("slideResetTransitionEnd");
//                 this.emit("slideChangeTransitionEnd"),
//                   "next" === r
//                     ? this.emit("slideNextTransitionEnd")
//                     : this.emit("slidePrevTransitionEnd");
//               }
//             }
//           },
//         },
//         slide: {
//           slideTo: function (e, t, i, n, s) {
//             if (
//               (void 0 === e && (e = 0),
//               void 0 === t && (t = this.params.speed),
//               void 0 === i && (i = !0),
//               "number" != typeof e && "string" != typeof e)
//             )
//               throw new Error(
//                 "The 'index' argument cannot have type other than 'number' or 'string'. [" +
//                   typeof e +
//                   "] given."
//               );
//             if ("string" == typeof e) {
//               var r = parseInt(e, 10);
//               if (!isFinite(r))
//                 throw new Error(
//                   "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
//                     e +
//                     "] given."
//                 );
//               e = r;
//             }
//             var a = this,
//               o = e;
//             o < 0 && (o = 0);
//             var l = a.params,
//               u = a.snapGrid,
//               d = a.slidesGrid,
//               c = a.previousIndex,
//               h = a.activeIndex,
//               p = a.rtlTranslate,
//               f = a.wrapperEl,
//               v = a.enabled;
//             if (
//               (a.animating && l.preventInteractionOnTransition) ||
//               (!v && !n && !s)
//             )
//               return !1;
//             var m = Math.min(a.params.slidesPerGroupSkip, o),
//               g = m + Math.floor((o - m) / a.params.slidesPerGroup);
//             g >= u.length && (g = u.length - 1),
//               (h || l.initialSlide || 0) === (c || 0) &&
//                 i &&
//                 a.emit("beforeSlideChangeStart");
//             var y,
//               b = -u[g];
//             if ((a.updateProgress(b), l.normalizeSlideIndex))
//               for (var w = 0; w < d.length; w += 1) {
//                 var x = -Math.floor(100 * b),
//                   E = Math.floor(100 * d[w]),
//                   T = Math.floor(100 * d[w + 1]);
//                 void 0 !== d[w + 1]
//                   ? x >= E && x < T - (T - E) / 2
//                     ? (o = w)
//                     : x >= E && x < T && (o = w + 1)
//                   : x >= E && (o = w);
//               }
//             if (a.initialized && o !== h) {
//               if (!a.allowSlideNext && b < a.translate && b < a.minTranslate())
//                 return !1;
//               if (
//                 !a.allowSlidePrev &&
//                 b > a.translate &&
//                 b > a.maxTranslate() &&
//                 (h || 0) !== o
//               )
//                 return !1;
//             }
//             if (
//               ((y = o > h ? "next" : o < h ? "prev" : "reset"),
//               (p && -b === a.translate) || (!p && b === a.translate))
//             )
//               return (
//                 a.updateActiveIndex(o),
//                 l.autoHeight && a.updateAutoHeight(),
//                 a.updateSlidesClasses(),
//                 "slide" !== l.effect && a.setTranslate(b),
//                 "reset" !== y &&
//                   (a.transitionStart(i, y), a.transitionEnd(i, y)),
//                 !1
//               );
//             if (l.cssMode) {
//               var C,
//                 S = a.isHorizontal(),
//                 M = -b;
//               if ((p && (M = f.scrollWidth - f.offsetWidth - M), 0 === t))
//                 f[S ? "scrollLeft" : "scrollTop"] = M;
//               else if (f.scrollTo)
//                 f.scrollTo(
//                   (((C = {})[S ? "left" : "top"] = M),
//                   (C.behavior = "smooth"),
//                   C)
//                 );
//               else f[S ? "scrollLeft" : "scrollTop"] = M;
//               return !0;
//             }
//             return (
//               0 === t
//                 ? (a.setTransition(0),
//                   a.setTranslate(b),
//                   a.updateActiveIndex(o),
//                   a.updateSlidesClasses(),
//                   a.emit("beforeTransitionStart", t, n),
//                   a.transitionStart(i, y),
//                   a.transitionEnd(i, y))
//                 : (a.setTransition(t),
//                   a.setTranslate(b),
//                   a.updateActiveIndex(o),
//                   a.updateSlidesClasses(),
//                   a.emit("beforeTransitionStart", t, n),
//                   a.transitionStart(i, y),
//                   a.animating ||
//                     ((a.animating = !0),
//                     a.onSlideToWrapperTransitionEnd ||
//                       (a.onSlideToWrapperTransitionEnd = function (e) {
//                         a &&
//                           !a.destroyed &&
//                           e.target === this &&
//                           (a.$wrapperEl[0].removeEventListener(
//                             "transitionend",
//                             a.onSlideToWrapperTransitionEnd
//                           ),
//                           a.$wrapperEl[0].removeEventListener(
//                             "webkitTransitionEnd",
//                             a.onSlideToWrapperTransitionEnd
//                           ),
//                           (a.onSlideToWrapperTransitionEnd = null),
//                           delete a.onSlideToWrapperTransitionEnd,
//                           a.transitionEnd(i, y));
//                       }),
//                     a.$wrapperEl[0].addEventListener(
//                       "transitionend",
//                       a.onSlideToWrapperTransitionEnd
//                     ),
//                     a.$wrapperEl[0].addEventListener(
//                       "webkitTransitionEnd",
//                       a.onSlideToWrapperTransitionEnd
//                     ))),
//               !0
//             );
//           },
//           slideToLoop: function (e, t, i, n) {
//             void 0 === e && (e = 0),
//               void 0 === t && (t = this.params.speed),
//               void 0 === i && (i = !0);
//             var s = e;
//             return (
//               this.params.loop && (s += this.loopedSlides),
//               this.slideTo(s, t, i, n)
//             );
//           },
//           slideNext: function (e, t, i) {
//             void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
//             var n = this.params,
//               s = this.animating;
//             if (!this.enabled) return this;
//             var r =
//               this.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
//             if (n.loop) {
//               if (s && n.loopPreventsSlide) return !1;
//               this.loopFix(),
//                 (this._clientLeft = this.$wrapperEl[0].clientLeft);
//             }
//             return this.slideTo(this.activeIndex + r, e, t, i);
//           },
//           slidePrev: function (e, t, i) {
//             void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
//             var n = this.params,
//               s = this.animating,
//               r = this.snapGrid,
//               a = this.slidesGrid,
//               o = this.rtlTranslate;
//             if (!this.enabled) return this;
//             if (n.loop) {
//               if (s && n.loopPreventsSlide) return !1;
//               this.loopFix(),
//                 (this._clientLeft = this.$wrapperEl[0].clientLeft);
//             }
//             function l(e) {
//               return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
//             }
//             var u,
//               d = l(o ? this.translate : -this.translate),
//               c = r.map(function (e) {
//                 return l(e);
//               }),
//               h = r[c.indexOf(d) - 1];
//             return (
//               void 0 === h &&
//                 n.cssMode &&
//                 r.forEach(function (e) {
//                   !h && d >= e && (h = e);
//                 }),
//               void 0 !== h &&
//                 (u = a.indexOf(h)) < 0 &&
//                 (u = this.activeIndex - 1),
//               this.slideTo(u, e, t, i)
//             );
//           },
//           slideReset: function (e, t, i) {
//             return (
//               void 0 === e && (e = this.params.speed),
//               void 0 === t && (t = !0),
//               this.slideTo(this.activeIndex, e, t, i)
//             );
//           },
//           slideToClosest: function (e, t, i, n) {
//             void 0 === e && (e = this.params.speed),
//               void 0 === t && (t = !0),
//               void 0 === n && (n = 0.5);
//             var s = this.activeIndex,
//               r = Math.min(this.params.slidesPerGroupSkip, s),
//               a = r + Math.floor((s - r) / this.params.slidesPerGroup),
//               o = this.rtlTranslate ? this.translate : -this.translate;
//             if (o >= this.snapGrid[a]) {
//               var l = this.snapGrid[a];
//               o - l > (this.snapGrid[a + 1] - l) * n &&
//                 (s += this.params.slidesPerGroup);
//             } else {
//               var u = this.snapGrid[a - 1];
//               o - u <= (this.snapGrid[a] - u) * n &&
//                 (s -= this.params.slidesPerGroup);
//             }
//             return (
//               (s = Math.max(s, 0)),
//               (s = Math.min(s, this.slidesGrid.length - 1)),
//               this.slideTo(s, e, t, i)
//             );
//           },
//           slideToClickedSlide: function () {
//             var e,
//               t = this,
//               i = t.params,
//               n = t.$wrapperEl,
//               s =
//                 "auto" === i.slidesPerView
//                   ? t.slidesPerViewDynamic()
//                   : i.slidesPerView,
//               r = t.clickedIndex;
//             if (i.loop) {
//               if (t.animating) return;
//               (e = parseInt(
//                 C(t.clickedSlide).attr("data-swiper-slide-index"),
//                 10
//               )),
//                 i.centeredSlides
//                   ? r < t.loopedSlides - s / 2 ||
//                     r > t.slides.length - t.loopedSlides + s / 2
//                     ? (t.loopFix(),
//                       (r = n
//                         .children(
//                           "." +
//                             i.slideClass +
//                             '[data-swiper-slide-index="' +
//                             e +
//                             '"]:not(.' +
//                             i.slideDuplicateClass +
//                             ")"
//                         )
//                         .eq(0)
//                         .index()),
//                       S(function () {
//                         t.slideTo(r);
//                       }))
//                     : t.slideTo(r)
//                   : r > t.slides.length - s
//                   ? (t.loopFix(),
//                     (r = n
//                       .children(
//                         "." +
//                           i.slideClass +
//                           '[data-swiper-slide-index="' +
//                           e +
//                           '"]:not(.' +
//                           i.slideDuplicateClass +
//                           ")"
//                       )
//                       .eq(0)
//                       .index()),
//                     S(function () {
//                       t.slideTo(r);
//                     }))
//                   : t.slideTo(r);
//             } else t.slideTo(r);
//           },
//         },
//         loop: {
//           loopCreate: function () {
//             var e = this,
//               t = a(),
//               i = e.params,
//               n = e.$wrapperEl;
//             n.children(
//               "." + i.slideClass + "." + i.slideDuplicateClass
//             ).remove();
//             var s = n.children("." + i.slideClass);
//             if (i.loopFillGroupWithBlank) {
//               var r = i.slidesPerGroup - (s.length % i.slidesPerGroup);
//               if (r !== i.slidesPerGroup) {
//                 for (var o = 0; o < r; o += 1) {
//                   var l = C(t.createElement("div")).addClass(
//                     i.slideClass + " " + i.slideBlankClass
//                   );
//                   n.append(l);
//                 }
//                 s = n.children("." + i.slideClass);
//               }
//             }
//             "auto" !== i.slidesPerView ||
//               i.loopedSlides ||
//               (i.loopedSlides = s.length),
//               (e.loopedSlides = Math.ceil(
//                 parseFloat(i.loopedSlides || i.slidesPerView, 10)
//               )),
//               (e.loopedSlides += i.loopAdditionalSlides),
//               e.loopedSlides > s.length && (e.loopedSlides = s.length);
//             var u = [],
//               d = [];
//             s.each(function (t, i) {
//               var n = C(t);
//               i < e.loopedSlides && d.push(t),
//                 i < s.length && i >= s.length - e.loopedSlides && u.push(t),
//                 n.attr("data-swiper-slide-index", i);
//             });
//             for (var c = 0; c < d.length; c += 1)
//               n.append(C(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
//             for (var h = u.length - 1; h >= 0; h -= 1)
//               n.prepend(C(u[h].cloneNode(!0)).addClass(i.slideDuplicateClass));
//           },
//           loopFix: function () {
//             this.emit("beforeLoopFix");
//             var e,
//               t = this.activeIndex,
//               i = this.slides,
//               n = this.loopedSlides,
//               s = this.allowSlidePrev,
//               r = this.allowSlideNext,
//               a = this.snapGrid,
//               o = this.rtlTranslate;
//             (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
//             var l = -a[t] - this.getTranslate();
//             if (t < n)
//               (e = i.length - 3 * n + t),
//                 (e += n),
//                 this.slideTo(e, 0, !1, !0) &&
//                   0 !== l &&
//                   this.setTranslate((o ? -this.translate : this.translate) - l);
//             else if (t >= i.length - n) {
//               (e = -i.length + t + n),
//                 (e += n),
//                 this.slideTo(e, 0, !1, !0) &&
//                   0 !== l &&
//                   this.setTranslate((o ? -this.translate : this.translate) - l);
//             }
//             (this.allowSlidePrev = s),
//               (this.allowSlideNext = r),
//               this.emit("loopFix");
//           },
//           loopDestroy: function () {
//             var e = this.$wrapperEl,
//               t = this.params,
//               i = this.slides;
//             e
//               .children(
//                 "." +
//                   t.slideClass +
//                   "." +
//                   t.slideDuplicateClass +
//                   ",." +
//                   t.slideClass +
//                   "." +
//                   t.slideBlankClass
//               )
//               .remove(),
//               i.removeAttr("data-swiper-slide-index");
//           },
//         },
//         grabCursor: {
//           setGrabCursor: function (e) {
//             if (
//               !(
//                 this.support.touch ||
//                 !this.params.simulateTouch ||
//                 (this.params.watchOverflow && this.isLocked) ||
//                 this.params.cssMode
//               )
//             ) {
//               var t = this.el;
//               (t.style.cursor = "move"),
//                 (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
//                 (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
//                 (t.style.cursor = e ? "grabbing" : "grab");
//             }
//           },
//           unsetGrabCursor: function () {
//             this.support.touch ||
//               (this.params.watchOverflow && this.isLocked) ||
//               this.params.cssMode ||
//               (this.el.style.cursor = "");
//           },
//         },
//         manipulation: {
//           appendSlide: function (e) {
//             var t = this.$wrapperEl,
//               i = this.params;
//             if (
//               (i.loop && this.loopDestroy(),
//               "object" == typeof e && "length" in e)
//             )
//               for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]);
//             else t.append(e);
//             i.loop && this.loopCreate(),
//               (i.observer && this.support.observer) || this.update();
//           },
//           prependSlide: function (e) {
//             var t = this.params,
//               i = this.$wrapperEl,
//               n = this.activeIndex;
//             t.loop && this.loopDestroy();
//             var s = n + 1;
//             if ("object" == typeof e && "length" in e) {
//               for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
//               s = n + e.length;
//             } else i.prepend(e);
//             t.loop && this.loopCreate(),
//               (t.observer && this.support.observer) || this.update(),
//               this.slideTo(s, 0, !1);
//           },
//           addSlide: function (e, t) {
//             var i = this.$wrapperEl,
//               n = this.params,
//               s = this.activeIndex;
//             n.loop &&
//               ((s -= this.loopedSlides),
//               this.loopDestroy(),
//               (this.slides = i.children("." + n.slideClass)));
//             var r = this.slides.length;
//             if (e <= 0) this.prependSlide(t);
//             else if (e >= r) this.appendSlide(t);
//             else {
//               for (
//                 var a = s > e ? s + 1 : s, o = [], l = r - 1;
//                 l >= e;
//                 l -= 1
//               ) {
//                 var u = this.slides.eq(l);
//                 u.remove(), o.unshift(u);
//               }
//               if ("object" == typeof t && "length" in t) {
//                 for (var d = 0; d < t.length; d += 1) t[d] && i.append(t[d]);
//                 a = s > e ? s + t.length : s;
//               } else i.append(t);
//               for (var c = 0; c < o.length; c += 1) i.append(o[c]);
//               n.loop && this.loopCreate(),
//                 (n.observer && this.support.observer) || this.update(),
//                 n.loop
//                   ? this.slideTo(a + this.loopedSlides, 0, !1)
//                   : this.slideTo(a, 0, !1);
//             }
//           },
//           removeSlide: function (e) {
//             var t = this.params,
//               i = this.$wrapperEl,
//               n = this.activeIndex;
//             t.loop &&
//               ((n -= this.loopedSlides),
//               this.loopDestroy(),
//               (this.slides = i.children("." + t.slideClass)));
//             var s,
//               r = n;
//             if ("object" == typeof e && "length" in e) {
//               for (var a = 0; a < e.length; a += 1)
//                 (s = e[a]),
//                   this.slides[s] && this.slides.eq(s).remove(),
//                   s < r && (r -= 1);
//               r = Math.max(r, 0);
//             } else
//               (s = e),
//                 this.slides[s] && this.slides.eq(s).remove(),
//                 s < r && (r -= 1),
//                 (r = Math.max(r, 0));
//             t.loop && this.loopCreate(),
//               (t.observer && this.support.observer) || this.update(),
//               t.loop
//                 ? this.slideTo(r + this.loopedSlides, 0, !1)
//                 : this.slideTo(r, 0, !1);
//           },
//           removeAllSlides: function () {
//             for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
//             this.removeSlide(e);
//           },
//         },
//         events: {
//           attachEvents: function () {
//             var e = a(),
//               t = this.params,
//               i = this.touchEvents,
//               n = this.el,
//               s = this.wrapperEl,
//               r = this.device,
//               o = this.support;
//             (this.onTouchStart = R.bind(this)),
//               (this.onTouchMove = G.bind(this)),
//               (this.onTouchEnd = W.bind(this)),
//               t.cssMode && (this.onScroll = _.bind(this)),
//               (this.onClick = X.bind(this));
//             var l = !!t.nested;
//             if (!o.touch && o.pointerEvents)
//               n.addEventListener(i.start, this.onTouchStart, !1),
//                 e.addEventListener(i.move, this.onTouchMove, l),
//                 e.addEventListener(i.end, this.onTouchEnd, !1);
//             else {
//               if (o.touch) {
//                 var u = !(
//                   "touchstart" !== i.start ||
//                   !o.passiveListener ||
//                   !t.passiveListeners
//                 ) && { passive: !0, capture: !1 };
//                 n.addEventListener(i.start, this.onTouchStart, u),
//                   n.addEventListener(
//                     i.move,
//                     this.onTouchMove,
//                     o.passiveListener ? { passive: !1, capture: l } : l
//                   ),
//                   n.addEventListener(i.end, this.onTouchEnd, u),
//                   i.cancel && n.addEventListener(i.cancel, this.onTouchEnd, u),
//                   Y || (e.addEventListener("touchstart", V), (Y = !0));
//               }
//               ((t.simulateTouch && !r.ios && !r.android) ||
//                 (t.simulateTouch && !o.touch && r.ios)) &&
//                 (n.addEventListener("mousedown", this.onTouchStart, !1),
//                 e.addEventListener("mousemove", this.onTouchMove, l),
//                 e.addEventListener("mouseup", this.onTouchEnd, !1));
//             }
//             (t.preventClicks || t.preventClicksPropagation) &&
//               n.addEventListener("click", this.onClick, !0),
//               t.cssMode && s.addEventListener("scroll", this.onScroll),
//               t.updateOnWindowResize
//                 ? this.on(
//                     r.ios || r.android
//                       ? "resize orientationchange observerUpdate"
//                       : "resize observerUpdate",
//                     F,
//                     !0
//                   )
//                 : this.on("observerUpdate", F, !0);
//           },
//           detachEvents: function () {
//             var e = a(),
//               t = this.params,
//               i = this.touchEvents,
//               n = this.el,
//               s = this.wrapperEl,
//               r = this.device,
//               o = this.support,
//               l = !!t.nested;
//             if (!o.touch && o.pointerEvents)
//               n.removeEventListener(i.start, this.onTouchStart, !1),
//                 e.removeEventListener(i.move, this.onTouchMove, l),
//                 e.removeEventListener(i.end, this.onTouchEnd, !1);
//             else {
//               if (o.touch) {
//                 var u = !(
//                   "onTouchStart" !== i.start ||
//                   !o.passiveListener ||
//                   !t.passiveListeners
//                 ) && { passive: !0, capture: !1 };
//                 n.removeEventListener(i.start, this.onTouchStart, u),
//                   n.removeEventListener(i.move, this.onTouchMove, l),
//                   n.removeEventListener(i.end, this.onTouchEnd, u),
//                   i.cancel &&
//                     n.removeEventListener(i.cancel, this.onTouchEnd, u);
//               }
//               ((t.simulateTouch && !r.ios && !r.android) ||
//                 (t.simulateTouch && !o.touch && r.ios)) &&
//                 (n.removeEventListener("mousedown", this.onTouchStart, !1),
//                 e.removeEventListener("mousemove", this.onTouchMove, l),
//                 e.removeEventListener("mouseup", this.onTouchEnd, !1));
//             }
//             (t.preventClicks || t.preventClicksPropagation) &&
//               n.removeEventListener("click", this.onClick, !0),
//               t.cssMode && s.removeEventListener("scroll", this.onScroll),
//               this.off(
//                 r.ios || r.android
//                   ? "resize orientationchange observerUpdate"
//                   : "resize observerUpdate",
//                 F
//               );
//           },
//         },
//         breakpoints: {
//           setBreakpoint: function () {
//             var e = this.activeIndex,
//               t = this.initialized,
//               i = this.loopedSlides,
//               n = void 0 === i ? 0 : i,
//               s = this.params,
//               r = this.$el,
//               a = s.breakpoints;
//             if (a && (!a || 0 !== Object.keys(a).length)) {
//               var o = this.getBreakpoint(
//                 a,
//                 this.params.breakpointsBase,
//                 this.el
//               );
//               if (o && this.currentBreakpoint !== o) {
//                 var l = o in a ? a[o] : void 0;
//                 l &&
//                   [
//                     "slidesPerView",
//                     "spaceBetween",
//                     "slidesPerGroup",
//                     "slidesPerGroupSkip",
//                     "slidesPerColumn",
//                   ].forEach(function (e) {
//                     var t = l[e];
//                     void 0 !== t &&
//                       (l[e] =
//                         "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
//                           ? "slidesPerView" === e
//                             ? parseFloat(t)
//                             : parseInt(t, 10)
//                           : "auto");
//                   });
//                 var u = l || this.originalParams,
//                   d = s.slidesPerColumn > 1,
//                   c = u.slidesPerColumn > 1,
//                   h = s.enabled;
//                 d && !c
//                   ? (r.removeClass(
//                       s.containerModifierClass +
//                         "multirow " +
//                         s.containerModifierClass +
//                         "multirow-column"
//                     ),
//                     this.emitContainerClasses())
//                   : !d &&
//                     c &&
//                     (r.addClass(s.containerModifierClass + "multirow"),
//                     ((u.slidesPerColumnFill &&
//                       "column" === u.slidesPerColumnFill) ||
//                       (!u.slidesPerColumnFill &&
//                         "column" === s.slidesPerColumnFill)) &&
//                       r.addClass(s.containerModifierClass + "multirow-column"),
//                     this.emitContainerClasses());
//                 var p = u.direction && u.direction !== s.direction,
//                   f = s.loop && (u.slidesPerView !== s.slidesPerView || p);
//                 p && t && this.changeDirection(), O(this.params, u);
//                 var v = this.params.enabled;
//                 O(this, {
//                   allowTouchMove: this.params.allowTouchMove,
//                   allowSlideNext: this.params.allowSlideNext,
//                   allowSlidePrev: this.params.allowSlidePrev,
//                 }),
//                   h && !v ? this.disable() : !h && v && this.enable(),
//                   (this.currentBreakpoint = o),
//                   this.emit("_beforeBreakpoint", u),
//                   f &&
//                     t &&
//                     (this.loopDestroy(),
//                     this.loopCreate(),
//                     this.updateSlides(),
//                     this.slideTo(e - n + this.loopedSlides, 0, !1)),
//                   this.emit("breakpoint", u);
//               }
//             }
//           },
//           getBreakpoint: function (e, t, i) {
//             if (
//               (void 0 === t && (t = "window"), e && ("container" !== t || i))
//             ) {
//               var n = !1,
//                 s = l(),
//                 r = "window" === t ? s.innerHeight : i.clientHeight,
//                 a = Object.keys(e).map(function (e) {
//                   if ("string" == typeof e && 0 === e.indexOf("@")) {
//                     var t = parseFloat(e.substr(1));
//                     return { value: r * t, point: e };
//                   }
//                   return { value: e, point: e };
//                 });
//               a.sort(function (e, t) {
//                 return parseInt(e.value, 10) - parseInt(t.value, 10);
//               });
//               for (var o = 0; o < a.length; o += 1) {
//                 var u = a[o],
//                   d = u.point,
//                   c = u.value;
//                 "window" === t
//                   ? s.matchMedia("(min-width: " + c + "px)").matches && (n = d)
//                   : c <= i.clientWidth && (n = d);
//               }
//               return n || "max";
//             }
//           },
//         },
//         checkOverflow: {
//           checkOverflow: function () {
//             var e = this.params,
//               t = this.isLocked,
//               i =
//                 this.slides.length > 0 &&
//                 e.slidesOffsetBefore +
//                   e.spaceBetween * (this.slides.length - 1) +
//                   this.slides[0].offsetWidth * this.slides.length;
//             e.slidesOffsetBefore && e.slidesOffsetAfter && i
//               ? (this.isLocked = i <= this.size)
//               : (this.isLocked = 1 === this.snapGrid.length),
//               (this.allowSlideNext = !this.isLocked),
//               (this.allowSlidePrev = !this.isLocked),
//               t !== this.isLocked &&
//                 this.emit(this.isLocked ? "lock" : "unlock"),
//               t &&
//                 t !== this.isLocked &&
//                 ((this.isEnd = !1),
//                 this.navigation && this.navigation.update());
//           },
//         },
//         classes: {
//           addClasses: function () {
//             var e,
//               t,
//               i,
//               n = this.classNames,
//               s = this.params,
//               r = this.rtl,
//               a = this.$el,
//               o = this.device,
//               l = this.support,
//               u =
//                 ((e = [
//                   "initialized",
//                   s.direction,
//                   { "pointer-events": l.pointerEvents && !l.touch },
//                   { "free-mode": s.freeMode },
//                   { autoheight: s.autoHeight },
//                   { rtl: r },
//                   { multirow: s.slidesPerColumn > 1 },
//                   {
//                     "multirow-column":
//                       s.slidesPerColumn > 1 &&
//                       "column" === s.slidesPerColumnFill,
//                   },
//                   { android: o.android },
//                   { ios: o.ios },
//                   { "css-mode": s.cssMode },
//                 ]),
//                 (t = s.containerModifierClass),
//                 (i = []),
//                 e.forEach(function (e) {
//                   "object" == typeof e
//                     ? Object.keys(e).forEach(function (n) {
//                         e[n] && i.push(t + n);
//                       })
//                     : "string" == typeof e && i.push(t + e);
//                 }),
//                 i);
//             n.push.apply(n, u),
//               a.addClass([].concat(n).join(" ")),
//               this.emitContainerClasses();
//           },
//           removeClasses: function () {
//             var e = this.$el,
//               t = this.classNames;
//             e.removeClass(t.join(" ")), this.emitContainerClasses();
//           },
//         },
//         images: {
//           loadImage: function (e, t, i, n, s, r) {
//             var a,
//               o = l();
//             function u() {
//               r && r();
//             }
//             C(e).parent("picture")[0] || (e.complete && s)
//               ? u()
//               : t
//               ? (((a = new o.Image()).onload = u),
//                 (a.onerror = u),
//                 n && (a.sizes = n),
//                 i && (a.srcset = i),
//                 t && (a.src = t))
//               : u();
//           },
//           preloadImages: function () {
//             var e = this;
//             function t() {
//               null != e &&
//                 e &&
//                 !e.destroyed &&
//                 (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
//                 e.imagesLoaded === e.imagesToLoad.length &&
//                   (e.params.updateOnImagesReady && e.update(),
//                   e.emit("imagesReady")));
//             }
//             e.imagesToLoad = e.$el.find("img");
//             for (var i = 0; i < e.imagesToLoad.length; i += 1) {
//               var n = e.imagesToLoad[i];
//               e.loadImage(
//                 n,
//                 n.currentSrc || n.getAttribute("src"),
//                 n.srcset || n.getAttribute("srcset"),
//                 n.sizes || n.getAttribute("sizes"),
//                 !0,
//                 t
//               );
//             }
//           },
//         },
//       },
//       J = {},
//       Z = (function () {
//         function e() {
//           for (
//             var t, i, n = arguments.length, s = new Array(n), r = 0;
//             r < n;
//             r++
//           )
//             s[r] = arguments[r];
//           if (
//             (1 === s.length &&
//             s[0].constructor &&
//             "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
//               ? (i = s[0])
//               : ((t = s[0]), (i = s[1])),
//             i || (i = {}),
//             (i = O({}, i)),
//             t && !i.el && (i.el = t),
//             i.el && C(i.el).length > 1)
//           ) {
//             var a = [];
//             return (
//               C(i.el).each(function (t) {
//                 var n = O({}, i, { el: t });
//                 a.push(new e(n));
//               }),
//               a
//             );
//           }
//           var o = this;
//           (o.__swiper__ = !0),
//             (o.support = $()),
//             (o.device = N({ userAgent: i.userAgent })),
//             (o.browser = I()),
//             (o.eventsListeners = {}),
//             (o.eventsAnyListeners = []),
//             void 0 === o.modules && (o.modules = {}),
//             Object.keys(o.modules).forEach(function (e) {
//               var t = o.modules[e];
//               if (t.params) {
//                 var n = Object.keys(t.params)[0],
//                   s = t.params[n];
//                 if ("object" != typeof s || null === s) return;
//                 if (
//                   (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
//                     !0 === i[n] &&
//                     (i[n] = { auto: !0 }),
//                   !(n in i) || !("enabled" in s))
//                 )
//                   return;
//                 !0 === i[n] && (i[n] = { enabled: !0 }),
//                   "object" != typeof i[n] ||
//                     "enabled" in i[n] ||
//                     (i[n].enabled = !0),
//                   i[n] || (i[n] = { enabled: !1 });
//               }
//             });
//           var l,
//             u,
//             d = O({}, U);
//           return (
//             o.useParams(d),
//             (o.params = O({}, d, J, i)),
//             (o.originalParams = O({}, o.params)),
//             (o.passedParams = O({}, i)),
//             o.params &&
//               o.params.on &&
//               Object.keys(o.params.on).forEach(function (e) {
//                 o.on(e, o.params.on[e]);
//               }),
//             o.params && o.params.onAny && o.onAny(o.params.onAny),
//             (o.$ = C),
//             O(o, {
//               enabled: o.params.enabled,
//               el: t,
//               classNames: [],
//               slides: C(),
//               slidesGrid: [],
//               snapGrid: [],
//               slidesSizesGrid: [],
//               isHorizontal: function () {
//                 return "horizontal" === o.params.direction;
//               },
//               isVertical: function () {
//                 return "vertical" === o.params.direction;
//               },
//               activeIndex: 0,
//               realIndex: 0,
//               isBeginning: !0,
//               isEnd: !1,
//               translate: 0,
//               previousTranslate: 0,
//               progress: 0,
//               velocity: 0,
//               animating: !1,
//               allowSlideNext: o.params.allowSlideNext,
//               allowSlidePrev: o.params.allowSlidePrev,
//               touchEvents:
//                 ((l = ["touchstart", "touchmove", "touchend", "touchcancel"]),
//                 (u = ["mousedown", "mousemove", "mouseup"]),
//                 o.support.pointerEvents &&
//                   (u = ["pointerdown", "pointermove", "pointerup"]),
//                 (o.touchEventsTouch = {
//                   start: l[0],
//                   move: l[1],
//                   end: l[2],
//                   cancel: l[3],
//                 }),
//                 (o.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
//                 o.support.touch || !o.params.simulateTouch
//                   ? o.touchEventsTouch
//                   : o.touchEventsDesktop),
//               touchEventsData: {
//                 isTouched: void 0,
//                 isMoved: void 0,
//                 allowTouchCallbacks: void 0,
//                 touchStartTime: void 0,
//                 isScrolling: void 0,
//                 currentTranslate: void 0,
//                 startTranslate: void 0,
//                 allowThresholdMove: void 0,
//                 focusableElements: o.params.focusableElements,
//                 lastClickTime: M(),
//                 clickTimeout: void 0,
//                 velocities: [],
//                 allowMomentumBounce: void 0,
//                 isTouchEvent: void 0,
//                 startMoving: void 0,
//               },
//               allowClick: !0,
//               allowTouchMove: o.params.allowTouchMove,
//               touches: {
//                 startX: 0,
//                 startY: 0,
//                 currentX: 0,
//                 currentY: 0,
//                 diff: 0,
//               },
//               imagesToLoad: [],
//               imagesLoaded: 0,
//             }),
//             o.useModules(),
//             o.emit("_swiper"),
//             o.params.init && o.init(),
//             o
//           );
//         }
//         var t,
//           i,
//           n,
//           s = e.prototype;
//         return (
//           (s.enable = function () {
//             this.enabled ||
//               ((this.enabled = !0),
//               this.params.grabCursor && this.setGrabCursor(),
//               this.emit("enable"));
//           }),
//           (s.disable = function () {
//             this.enabled &&
//               ((this.enabled = !1),
//               this.params.grabCursor && this.unsetGrabCursor(),
//               this.emit("disable"));
//           }),
//           (s.setProgress = function (e, t) {
//             e = Math.min(Math.max(e, 0), 1);
//             var i = this.minTranslate(),
//               n = (this.maxTranslate() - i) * e + i;
//             this.translateTo(n, void 0 === t ? 0 : t),
//               this.updateActiveIndex(),
//               this.updateSlidesClasses();
//           }),
//           (s.emitContainerClasses = function () {
//             var e = this;
//             if (e.params._emitClasses && e.el) {
//               var t = e.el.className.split(" ").filter(function (t) {
//                 return (
//                   0 === t.indexOf("swiper-container") ||
//                   0 === t.indexOf(e.params.containerModifierClass)
//                 );
//               });
//               e.emit("_containerClasses", t.join(" "));
//             }
//           }),
//           (s.getSlideClasses = function (e) {
//             var t = this;
//             return e.className
//               .split(" ")
//               .filter(function (e) {
//                 return (
//                   0 === e.indexOf("swiper-slide") ||
//                   0 === e.indexOf(t.params.slideClass)
//                 );
//               })
//               .join(" ");
//           }),
//           (s.emitSlidesClasses = function () {
//             var e = this;
//             if (e.params._emitClasses && e.el) {
//               var t = [];
//               e.slides.each(function (i) {
//                 var n = e.getSlideClasses(i);
//                 t.push({ slideEl: i, classNames: n }),
//                   e.emit("_slideClass", i, n);
//               }),
//                 e.emit("_slideClasses", t);
//             }
//           }),
//           (s.slidesPerViewDynamic = function () {
//             var e = this.params,
//               t = this.slides,
//               i = this.slidesGrid,
//               n = this.size,
//               s = this.activeIndex,
//               r = 1;
//             if (e.centeredSlides) {
//               for (
//                 var a, o = t[s].swiperSlideSize, l = s + 1;
//                 l < t.length;
//                 l += 1
//               )
//                 t[l] &&
//                   !a &&
//                   ((r += 1), (o += t[l].swiperSlideSize) > n && (a = !0));
//               for (var u = s - 1; u >= 0; u -= 1)
//                 t[u] &&
//                   !a &&
//                   ((r += 1), (o += t[u].swiperSlideSize) > n && (a = !0));
//             } else
//               for (var d = s + 1; d < t.length; d += 1)
//                 i[d] - i[s] < n && (r += 1);
//             return r;
//           }),
//           (s.update = function () {
//             var e = this;
//             if (e && !e.destroyed) {
//               var t = e.snapGrid,
//                 i = e.params;
//               i.breakpoints && e.setBreakpoint(),
//                 e.updateSize(),
//                 e.updateSlides(),
//                 e.updateProgress(),
//                 e.updateSlidesClasses(),
//                 e.params.freeMode
//                   ? (n(), e.params.autoHeight && e.updateAutoHeight())
//                   : (("auto" === e.params.slidesPerView ||
//                       e.params.slidesPerView > 1) &&
//                     e.isEnd &&
//                     !e.params.centeredSlides
//                       ? e.slideTo(e.slides.length - 1, 0, !1, !0)
//                       : e.slideTo(e.activeIndex, 0, !1, !0)) || n(),
//                 i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
//                 e.emit("update");
//             }
//             function n() {
//               var t = e.rtlTranslate ? -1 * e.translate : e.translate,
//                 i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
//               e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
//             }
//           }),
//           (s.changeDirection = function (e, t) {
//             void 0 === t && (t = !0);
//             var i = this.params.direction;
//             return (
//               e || (e = "horizontal" === i ? "vertical" : "horizontal"),
//               e === i ||
//                 ("horizontal" !== e && "vertical" !== e) ||
//                 (this.$el
//                   .removeClass("" + this.params.containerModifierClass + i)
//                   .addClass("" + this.params.containerModifierClass + e),
//                 this.emitContainerClasses(),
//                 (this.params.direction = e),
//                 this.slides.each(function (t) {
//                   "vertical" === e
//                     ? (t.style.width = "")
//                     : (t.style.height = "");
//                 }),
//                 this.emit("changeDirection"),
//                 t && this.update()),
//               this
//             );
//           }),
//           (s.mount = function (e) {
//             var t = this;
//             if (t.mounted) return !0;
//             var i = C(e || t.params.el);
//             if (!(e = i[0])) return !1;
//             e.swiper = t;
//             var n = function () {
//                 return (
//                   "." +
//                   (t.params.wrapperClass || "").trim().split(" ").join(".")
//                 );
//               },
//               s = (function () {
//                 if (e && e.shadowRoot && e.shadowRoot.querySelector) {
//                   var t = C(e.shadowRoot.querySelector(n()));
//                   return (
//                     (t.children = function (e) {
//                       return i.children(e);
//                     }),
//                     t
//                   );
//                 }
//                 return i.children(n());
//               })();
//             if (0 === s.length && t.params.createElements) {
//               var r = a().createElement("div");
//               (s = C(r)),
//                 (r.className = t.params.wrapperClass),
//                 i.append(r),
//                 i.children("." + t.params.slideClass).each(function (e) {
//                   s.append(e);
//                 });
//             }
//             return (
//               O(t, {
//                 $el: i,
//                 el: e,
//                 $wrapperEl: s,
//                 wrapperEl: s[0],
//                 mounted: !0,
//                 rtl:
//                   "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
//                 rtlTranslate:
//                   "horizontal" === t.params.direction &&
//                   ("rtl" === e.dir.toLowerCase() ||
//                     "rtl" === i.css("direction")),
//                 wrongRTL: "-webkit-box" === s.css("display"),
//               }),
//               !0
//             );
//           }),
//           (s.init = function (e) {
//             return (
//               this.initialized ||
//                 !1 === this.mount(e) ||
//                 (this.emit("beforeInit"),
//                 this.params.breakpoints && this.setBreakpoint(),
//                 this.addClasses(),
//                 this.params.loop && this.loopCreate(),
//                 this.updateSize(),
//                 this.updateSlides(),
//                 this.params.watchOverflow && this.checkOverflow(),
//                 this.params.grabCursor && this.enabled && this.setGrabCursor(),
//                 this.params.preloadImages && this.preloadImages(),
//                 this.params.loop
//                   ? this.slideTo(
//                       this.params.initialSlide + this.loopedSlides,
//                       0,
//                       this.params.runCallbacksOnInit,
//                       !1,
//                       !0
//                     )
//                   : this.slideTo(
//                       this.params.initialSlide,
//                       0,
//                       this.params.runCallbacksOnInit,
//                       !1,
//                       !0
//                     ),
//                 this.attachEvents(),
//                 (this.initialized = !0),
//                 this.emit("init"),
//                 this.emit("afterInit")),
//               this
//             );
//           }),
//           (s.destroy = function (e, t) {
//             void 0 === e && (e = !0), void 0 === t && (t = !0);
//             var i,
//               n = this,
//               s = n.params,
//               r = n.$el,
//               a = n.$wrapperEl,
//               o = n.slides;
//             return (
//               void 0 === n.params ||
//                 n.destroyed ||
//                 (n.emit("beforeDestroy"),
//                 (n.initialized = !1),
//                 n.detachEvents(),
//                 s.loop && n.loopDestroy(),
//                 t &&
//                   (n.removeClasses(),
//                   r.removeAttr("style"),
//                   a.removeAttr("style"),
//                   o &&
//                     o.length &&
//                     o
//                       .removeClass(
//                         [
//                           s.slideVisibleClass,
//                           s.slideActiveClass,
//                           s.slideNextClass,
//                           s.slidePrevClass,
//                         ].join(" ")
//                       )
//                       .removeAttr("style")
//                       .removeAttr("data-swiper-slide-index")),
//                 n.emit("destroy"),
//                 Object.keys(n.eventsListeners).forEach(function (e) {
//                   n.off(e);
//                 }),
//                 !1 !== e &&
//                   ((n.$el[0].swiper = null),
//                   (i = n),
//                   Object.keys(i).forEach(function (e) {
//                     try {
//                       i[e] = null;
//                     } catch (e) {}
//                     try {
//                       delete i[e];
//                     } catch (e) {}
//                   })),
//                 (n.destroyed = !0)),
//               null
//             );
//           }),
//           (e.extendDefaults = function (e) {
//             O(J, e);
//           }),
//           (e.installModule = function (t) {
//             e.prototype.modules || (e.prototype.modules = {});
//             var i =
//               t.name || Object.keys(e.prototype.modules).length + "_" + M();
//             e.prototype.modules[i] = t;
//           }),
//           (e.use = function (t) {
//             return Array.isArray(t)
//               ? (t.forEach(function (t) {
//                   return e.installModule(t);
//                 }),
//                 e)
//               : (e.installModule(t), e);
//           }),
//           (t = e),
//           (n = [
//             {
//               key: "extendedDefaults",
//               get: function () {
//                 return J;
//               },
//             },
//             {
//               key: "defaults",
//               get: function () {
//                 return U;
//               },
//             },
//           ]),
//           (i = null) && K(t.prototype, i),
//           n && K(t, n),
//           e
//         );
//       })();
//     Object.keys(Q).forEach(function (e) {
//       Object.keys(Q[e]).forEach(function (t) {
//         Z.prototype[t] = Q[e][t];
//       });
//     }),
//       Z.use([j, B]);
//     var ee = Z;
//     function te() {
//       return (te =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var ie = {
//         update: function (e) {
//           var t = this,
//             i = t.params,
//             n = i.slidesPerView,
//             s = i.slidesPerGroup,
//             r = i.centeredSlides,
//             a = t.params.virtual,
//             o = a.addSlidesBefore,
//             l = a.addSlidesAfter,
//             u = t.virtual,
//             d = u.from,
//             c = u.to,
//             h = u.slides,
//             p = u.slidesGrid,
//             f = u.renderSlide,
//             v = u.offset;
//           t.updateActiveIndex();
//           var m,
//             g,
//             y,
//             b = t.activeIndex || 0;
//           (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
//             r
//               ? ((g = Math.floor(n / 2) + s + l),
//                 (y = Math.floor(n / 2) + s + o))
//               : ((g = n + (s - 1) + l), (y = s + o));
//           var w = Math.max((b || 0) - y, 0),
//             x = Math.min((b || 0) + g, h.length - 1),
//             E = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
//           function T() {
//             t.updateSlides(),
//               t.updateProgress(),
//               t.updateSlidesClasses(),
//               t.lazy && t.params.lazy.enabled && t.lazy.load();
//           }
//           if (
//             (O(t.virtual, {
//               from: w,
//               to: x,
//               offset: E,
//               slidesGrid: t.slidesGrid,
//             }),
//             d === w && c === x && !e)
//           )
//             return (
//               t.slidesGrid !== p && E !== v && t.slides.css(m, E + "px"),
//               void t.updateProgress()
//             );
//           if (t.params.virtual.renderExternal)
//             return (
//               t.params.virtual.renderExternal.call(t, {
//                 offset: E,
//                 from: w,
//                 to: x,
//                 slides: (function () {
//                   for (var e = [], t = w; t <= x; t += 1) e.push(h[t]);
//                   return e;
//                 })(),
//               }),
//               void (t.params.virtual.renderExternalUpdate && T())
//             );
//           var C = [],
//             S = [];
//           if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
//           else
//             for (var M = d; M <= c; M += 1)
//               (M < w || M > x) &&
//                 t.$wrapperEl
//                   .find(
//                     "." +
//                       t.params.slideClass +
//                       '[data-swiper-slide-index="' +
//                       M +
//                       '"]'
//                   )
//                   .remove();
//           for (var k = 0; k < h.length; k += 1)
//             k >= w &&
//               k <= x &&
//               (void 0 === c || e
//                 ? S.push(k)
//                 : (k > c && S.push(k), k < d && C.push(k)));
//           S.forEach(function (e) {
//             t.$wrapperEl.append(f(h[e], e));
//           }),
//             C.sort(function (e, t) {
//               return t - e;
//             }).forEach(function (e) {
//               t.$wrapperEl.prepend(f(h[e], e));
//             }),
//             t.$wrapperEl.children(".swiper-slide").css(m, E + "px"),
//             T();
//         },
//         renderSlide: function (e, t) {
//           var i = this.params.virtual;
//           if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
//           var n = i.renderSlide
//             ? C(i.renderSlide.call(this, e, t))
//             : C(
//                 '<div class="' +
//                   this.params.slideClass +
//                   '" data-swiper-slide-index="' +
//                   t +
//                   '">' +
//                   e +
//                   "</div>"
//               );
//           return (
//             n.attr("data-swiper-slide-index") ||
//               n.attr("data-swiper-slide-index", t),
//             i.cache && (this.virtual.cache[t] = n),
//             n
//           );
//         },
//         appendSlide: function (e) {
//           if ("object" == typeof e && "length" in e)
//             for (var t = 0; t < e.length; t += 1)
//               e[t] && this.virtual.slides.push(e[t]);
//           else this.virtual.slides.push(e);
//           this.virtual.update(!0);
//         },
//         prependSlide: function (e) {
//           var t = this.activeIndex,
//             i = t + 1,
//             n = 1;
//           if (Array.isArray(e)) {
//             for (var s = 0; s < e.length; s += 1)
//               e[s] && this.virtual.slides.unshift(e[s]);
//             (i = t + e.length), (n = e.length);
//           } else this.virtual.slides.unshift(e);
//           if (this.params.virtual.cache) {
//             var r = this.virtual.cache,
//               a = {};
//             Object.keys(r).forEach(function (e) {
//               var t = r[e],
//                 i = t.attr("data-swiper-slide-index");
//               i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
//                 (a[parseInt(e, 10) + n] = t);
//             }),
//               (this.virtual.cache = a);
//           }
//           this.virtual.update(!0), this.slideTo(i, 0);
//         },
//         removeSlide: function (e) {
//           if (null != e) {
//             var t = this.activeIndex;
//             if (Array.isArray(e))
//               for (var i = e.length - 1; i >= 0; i -= 1)
//                 this.virtual.slides.splice(e[i], 1),
//                   this.params.virtual.cache && delete this.virtual.cache[e[i]],
//                   e[i] < t && (t -= 1),
//                   (t = Math.max(t, 0));
//             else
//               this.virtual.slides.splice(e, 1),
//                 this.params.virtual.cache && delete this.virtual.cache[e],
//                 e < t && (t -= 1),
//                 (t = Math.max(t, 0));
//             this.virtual.update(!0), this.slideTo(t, 0);
//           }
//         },
//         removeAllSlides: function () {
//           (this.virtual.slides = []),
//             this.params.virtual.cache && (this.virtual.cache = {}),
//             this.virtual.update(!0),
//             this.slideTo(0, 0);
//         },
//       },
//       ne = {
//         name: "virtual",
//         params: {
//           virtual: {
//             enabled: !1,
//             slides: [],
//             cache: !0,
//             renderSlide: null,
//             renderExternal: null,
//             renderExternalUpdate: !0,
//             addSlidesBefore: 0,
//             addSlidesAfter: 0,
//           },
//         },
//         create: function () {
//           z(this, {
//             virtual: te({}, ie, {
//               slides: this.params.virtual.slides,
//               cache: {},
//             }),
//           });
//         },
//         on: {
//           beforeInit: function (e) {
//             if (e.params.virtual.enabled) {
//               e.classNames.push(e.params.containerModifierClass + "virtual");
//               var t = { watchSlidesProgress: !0 };
//               O(e.params, t),
//                 O(e.originalParams, t),
//                 e.params.initialSlide || e.virtual.update();
//             }
//           },
//           setTranslate: function (e) {
//             e.params.virtual.enabled && e.virtual.update();
//           },
//         },
//       };
//     function se() {
//       return (se =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var re = {
//         handle: function (e) {
//           if (this.enabled) {
//             var t = l(),
//               i = a(),
//               n = this.rtlTranslate,
//               s = e;
//             s.originalEvent && (s = s.originalEvent);
//             var r = s.keyCode || s.charCode,
//               o = this.params.keyboard.pageUpDown,
//               u = o && 33 === r,
//               d = o && 34 === r,
//               c = 37 === r,
//               h = 39 === r,
//               p = 38 === r,
//               f = 40 === r;
//             if (
//               !this.allowSlideNext &&
//               ((this.isHorizontal() && h) || (this.isVertical() && f) || d)
//             )
//               return !1;
//             if (
//               !this.allowSlidePrev &&
//               ((this.isHorizontal() && c) || (this.isVertical() && p) || u)
//             )
//               return !1;
//             if (
//               !(
//                 s.shiftKey ||
//                 s.altKey ||
//                 s.ctrlKey ||
//                 s.metaKey ||
//                 (i.activeElement &&
//                   i.activeElement.nodeName &&
//                   ("input" === i.activeElement.nodeName.toLowerCase() ||
//                     "textarea" === i.activeElement.nodeName.toLowerCase()))
//               )
//             ) {
//               if (
//                 this.params.keyboard.onlyInViewport &&
//                 (u || d || c || h || p || f)
//               ) {
//                 var v = !1;
//                 if (
//                   this.$el.parents("." + this.params.slideClass).length > 0 &&
//                   0 ===
//                     this.$el.parents("." + this.params.slideActiveClass).length
//                 )
//                   return;
//                 var m = this.$el,
//                   g = m[0].clientWidth,
//                   y = m[0].clientHeight,
//                   b = t.innerWidth,
//                   w = t.innerHeight,
//                   x = this.$el.offset();
//                 n && (x.left -= this.$el[0].scrollLeft);
//                 for (
//                   var E = [
//                       [x.left, x.top],
//                       [x.left + g, x.top],
//                       [x.left, x.top + y],
//                       [x.left + g, x.top + y],
//                     ],
//                     T = 0;
//                   T < E.length;
//                   T += 1
//                 ) {
//                   var C = E[T];
//                   if (C[0] >= 0 && C[0] <= b && C[1] >= 0 && C[1] <= w) {
//                     if (0 === C[0] && 0 === C[1]) continue;
//                     v = !0;
//                   }
//                 }
//                 if (!v) return;
//               }
//               this.isHorizontal()
//                 ? ((u || d || c || h) &&
//                     (s.preventDefault
//                       ? s.preventDefault()
//                       : (s.returnValue = !1)),
//                   (((d || h) && !n) || ((u || c) && n)) && this.slideNext(),
//                   (((u || c) && !n) || ((d || h) && n)) && this.slidePrev())
//                 : ((u || d || p || f) &&
//                     (s.preventDefault
//                       ? s.preventDefault()
//                       : (s.returnValue = !1)),
//                   (d || f) && this.slideNext(),
//                   (u || p) && this.slidePrev()),
//                 this.emit("keyPress", r);
//             }
//           }
//         },
//         enable: function () {
//           var e = a();
//           this.keyboard.enabled ||
//             (C(e).on("keydown", this.keyboard.handle),
//             (this.keyboard.enabled = !0));
//         },
//         disable: function () {
//           var e = a();
//           this.keyboard.enabled &&
//             (C(e).off("keydown", this.keyboard.handle),
//             (this.keyboard.enabled = !1));
//         },
//       },
//       ae = {
//         name: "keyboard",
//         params: {
//           keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
//         },
//         create: function () {
//           z(this, { keyboard: se({ enabled: !1 }, re) });
//         },
//         on: {
//           init: function (e) {
//             e.params.keyboard.enabled && e.keyboard.enable();
//           },
//           destroy: function (e) {
//             e.keyboard.enabled && e.keyboard.disable();
//           },
//         },
//       };
//     var oe = {
//       lastScrollTime: M(),
//       lastEventBeforeSnap: void 0,
//       recentWheelEvents: [],
//       event: function () {
//         return l().navigator.userAgent.indexOf("firefox") > -1
//           ? "DOMMouseScroll"
//           : (function () {
//               var e = a(),
//                 t = "onwheel" in e;
//               if (!t) {
//                 var i = e.createElement("div");
//                 i.setAttribute("onwheel", "return;"),
//                   (t = "function" == typeof i.onwheel);
//               }
//               return (
//                 !t &&
//                   e.implementation &&
//                   e.implementation.hasFeature &&
//                   !0 !== e.implementation.hasFeature("", "") &&
//                   (t = e.implementation.hasFeature("Events.wheel", "3.0")),
//                 t
//               );
//             })()
//           ? "wheel"
//           : "mousewheel";
//       },
//       normalize: function (e) {
//         var t = 0,
//           i = 0,
//           n = 0,
//           s = 0;
//         return (
//           "detail" in e && (i = e.detail),
//           "wheelDelta" in e && (i = -e.wheelDelta / 120),
//           "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
//           "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
//           "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
//           (n = 10 * t),
//           (s = 10 * i),
//           "deltaY" in e && (s = e.deltaY),
//           "deltaX" in e && (n = e.deltaX),
//           e.shiftKey && !n && ((n = s), (s = 0)),
//           (n || s) &&
//             e.deltaMode &&
//             (1 === e.deltaMode
//               ? ((n *= 40), (s *= 40))
//               : ((n *= 800), (s *= 800))),
//           n && !t && (t = n < 1 ? -1 : 1),
//           s && !i && (i = s < 1 ? -1 : 1),
//           { spinX: t, spinY: i, pixelX: n, pixelY: s }
//         );
//       },
//       handleMouseEnter: function () {
//         this.enabled && (this.mouseEntered = !0);
//       },
//       handleMouseLeave: function () {
//         this.enabled && (this.mouseEntered = !1);
//       },
//       handle: function (e) {
//         var t = e,
//           i = this;
//         if (i.enabled) {
//           var n = i.params.mousewheel;
//           i.params.cssMode && t.preventDefault();
//           var s = i.$el;
//           if (
//             ("container" !== i.params.mousewheel.eventsTarget &&
//               (s = C(i.params.mousewheel.eventsTarget)),
//             !i.mouseEntered && !s[0].contains(t.target) && !n.releaseOnEdges)
//           )
//             return !0;
//           t.originalEvent && (t = t.originalEvent);
//           var r = 0,
//             a = i.rtlTranslate ? -1 : 1,
//             o = oe.normalize(t);
//           if (n.forceToAxis)
//             if (i.isHorizontal()) {
//               if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
//               r = -o.pixelX * a;
//             } else {
//               if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
//               r = -o.pixelY;
//             }
//           else
//             r =
//               Math.abs(o.pixelX) > Math.abs(o.pixelY)
//                 ? -o.pixelX * a
//                 : -o.pixelY;
//           if (0 === r) return !0;
//           n.invert && (r = -r);
//           var l = i.getTranslate() + r * n.sensitivity;
//           if (
//             (l >= i.minTranslate() && (l = i.minTranslate()),
//             l <= i.maxTranslate() && (l = i.maxTranslate()),
//             (!!i.params.loop ||
//               !(l === i.minTranslate() || l === i.maxTranslate())) &&
//               i.params.nested &&
//               t.stopPropagation(),
//             i.params.freeMode)
//           ) {
//             var u = { time: M(), delta: Math.abs(r), direction: Math.sign(r) },
//               d = i.mousewheel.lastEventBeforeSnap,
//               c =
//                 d &&
//                 u.time < d.time + 500 &&
//                 u.delta <= d.delta &&
//                 u.direction === d.direction;
//             if (!c) {
//               (i.mousewheel.lastEventBeforeSnap = void 0),
//                 i.params.loop && i.loopFix();
//               var h = i.getTranslate() + r * n.sensitivity,
//                 p = i.isBeginning,
//                 f = i.isEnd;
//               if (
//                 (h >= i.minTranslate() && (h = i.minTranslate()),
//                 h <= i.maxTranslate() && (h = i.maxTranslate()),
//                 i.setTransition(0),
//                 i.setTranslate(h),
//                 i.updateProgress(),
//                 i.updateActiveIndex(),
//                 i.updateSlidesClasses(),
//                 ((!p && i.isBeginning) || (!f && i.isEnd)) &&
//                   i.updateSlidesClasses(),
//                 i.params.freeModeSticky)
//               ) {
//                 clearTimeout(i.mousewheel.timeout),
//                   (i.mousewheel.timeout = void 0);
//                 var v = i.mousewheel.recentWheelEvents;
//                 v.length >= 15 && v.shift();
//                 var m = v.length ? v[v.length - 1] : void 0,
//                   g = v[0];
//                 if (
//                   (v.push(u),
//                   m && (u.delta > m.delta || u.direction !== m.direction))
//                 )
//                   v.splice(0);
//                 else if (
//                   v.length >= 15 &&
//                   u.time - g.time < 500 &&
//                   g.delta - u.delta >= 1 &&
//                   u.delta <= 6
//                 ) {
//                   var y = r > 0 ? 0.8 : 0.2;
//                   (i.mousewheel.lastEventBeforeSnap = u),
//                     v.splice(0),
//                     (i.mousewheel.timeout = S(function () {
//                       i.slideToClosest(i.params.speed, !0, void 0, y);
//                     }, 0));
//                 }
//                 i.mousewheel.timeout ||
//                   (i.mousewheel.timeout = S(function () {
//                     (i.mousewheel.lastEventBeforeSnap = u),
//                       v.splice(0),
//                       i.slideToClosest(i.params.speed, !0, void 0, 0.5);
//                   }, 500));
//               }
//               if (
//                 (c || i.emit("scroll", t),
//                 i.params.autoplay &&
//                   i.params.autoplayDisableOnInteraction &&
//                   i.autoplay.stop(),
//                 h === i.minTranslate() || h === i.maxTranslate())
//               )
//                 return !0;
//             }
//           } else {
//             var b = {
//                 time: M(),
//                 delta: Math.abs(r),
//                 direction: Math.sign(r),
//                 raw: e,
//               },
//               w = i.mousewheel.recentWheelEvents;
//             w.length >= 2 && w.shift();
//             var x = w.length ? w[w.length - 1] : void 0;
//             if (
//               (w.push(b),
//               x
//                 ? (b.direction !== x.direction ||
//                     b.delta > x.delta ||
//                     b.time > x.time + 150) &&
//                   i.mousewheel.animateSlider(b)
//                 : i.mousewheel.animateSlider(b),
//               i.mousewheel.releaseScroll(b))
//             )
//               return !0;
//           }
//           return (
//             t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
//           );
//         }
//       },
//       animateSlider: function (e) {
//         var t = l();
//         return (
//           !(
//             this.params.mousewheel.thresholdDelta &&
//             e.delta < this.params.mousewheel.thresholdDelta
//           ) &&
//           !(
//             this.params.mousewheel.thresholdTime &&
//             M() - this.mousewheel.lastScrollTime <
//               this.params.mousewheel.thresholdTime
//           ) &&
//           ((e.delta >= 6 && M() - this.mousewheel.lastScrollTime < 60) ||
//             (e.direction < 0
//               ? (this.isEnd && !this.params.loop) ||
//                 this.animating ||
//                 (this.slideNext(), this.emit("scroll", e.raw))
//               : (this.isBeginning && !this.params.loop) ||
//                 this.animating ||
//                 (this.slidePrev(), this.emit("scroll", e.raw)),
//             (this.mousewheel.lastScrollTime = new t.Date().getTime()),
//             !1))
//         );
//       },
//       releaseScroll: function (e) {
//         var t = this.params.mousewheel;
//         if (e.direction < 0) {
//           if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
//         } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
//           return !0;
//         return !1;
//       },
//       enable: function () {
//         var e = oe.event();
//         if (this.params.cssMode)
//           return (
//             this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0
//           );
//         if (!e) return !1;
//         if (this.mousewheel.enabled) return !1;
//         var t = this.$el;
//         return (
//           "container" !== this.params.mousewheel.eventsTarget &&
//             (t = C(this.params.mousewheel.eventsTarget)),
//           t.on("mouseenter", this.mousewheel.handleMouseEnter),
//           t.on("mouseleave", this.mousewheel.handleMouseLeave),
//           t.on(e, this.mousewheel.handle),
//           (this.mousewheel.enabled = !0),
//           !0
//         );
//       },
//       disable: function () {
//         var e = oe.event();
//         if (this.params.cssMode)
//           return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
//         if (!e) return !1;
//         if (!this.mousewheel.enabled) return !1;
//         var t = this.$el;
//         return (
//           "container" !== this.params.mousewheel.eventsTarget &&
//             (t = C(this.params.mousewheel.eventsTarget)),
//           t.off(e, this.mousewheel.handle),
//           (this.mousewheel.enabled = !1),
//           !0
//         );
//       },
//     };
//     function le() {
//       return (le =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var ue = {
//       toggleEl: function (e, t) {
//         e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass),
//           e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
//       },
//       update: function () {
//         var e = this.params.navigation,
//           t = this.navigation.toggleEl;
//         if (!this.params.loop) {
//           var i = this.navigation,
//             n = i.$nextEl,
//             s = i.$prevEl;
//           s &&
//             s.length > 0 &&
//             (this.isBeginning ? t(s, !0) : t(s, !1),
//             this.params.watchOverflow &&
//               this.enabled &&
//               s[this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
//             n &&
//               n.length > 0 &&
//               (this.isEnd ? t(n, !0) : t(n, !1),
//               this.params.watchOverflow &&
//                 this.enabled &&
//                 n[this.isLocked ? "addClass" : "removeClass"](e.lockClass));
//         }
//       },
//       onPrevClick: function (e) {
//         e.preventDefault(),
//           (this.isBeginning && !this.params.loop) || this.slidePrev();
//       },
//       onNextClick: function (e) {
//         e.preventDefault(),
//           (this.isEnd && !this.params.loop) || this.slideNext();
//       },
//       init: function () {
//         var e,
//           t,
//           i = this.params.navigation;
//         ((this.params.navigation = D(
//           this.$el,
//           this.params.navigation,
//           this.params.createElements,
//           { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
//         )),
//         i.nextEl || i.prevEl) &&
//           (i.nextEl &&
//             ((e = C(i.nextEl)),
//             this.params.uniqueNavElements &&
//               "string" == typeof i.nextEl &&
//               e.length > 1 &&
//               1 === this.$el.find(i.nextEl).length &&
//               (e = this.$el.find(i.nextEl))),
//           i.prevEl &&
//             ((t = C(i.prevEl)),
//             this.params.uniqueNavElements &&
//               "string" == typeof i.prevEl &&
//               t.length > 1 &&
//               1 === this.$el.find(i.prevEl).length &&
//               (t = this.$el.find(i.prevEl))),
//           e && e.length > 0 && e.on("click", this.navigation.onNextClick),
//           t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
//           O(this.navigation, {
//             $nextEl: e,
//             nextEl: e && e[0],
//             $prevEl: t,
//             prevEl: t && t[0],
//           }),
//           this.enabled ||
//             (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
//       },
//       destroy: function () {
//         var e = this.navigation,
//           t = e.$nextEl,
//           i = e.$prevEl;
//         t &&
//           t.length &&
//           (t.off("click", this.navigation.onNextClick),
//           t.removeClass(this.params.navigation.disabledClass)),
//           i &&
//             i.length &&
//             (i.off("click", this.navigation.onPrevClick),
//             i.removeClass(this.params.navigation.disabledClass));
//       },
//     };
//     function de() {
//       return (de =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var ce = {
//       update: function () {
//         var e = this.rtl,
//           t = this.params.pagination;
//         if (
//           t.el &&
//           this.pagination.el &&
//           this.pagination.$el &&
//           0 !== this.pagination.$el.length
//         ) {
//           var i,
//             n =
//               this.virtual && this.params.virtual.enabled
//                 ? this.virtual.slides.length
//                 : this.slides.length,
//             s = this.pagination.$el,
//             r = this.params.loop
//               ? Math.ceil(
//                   (n - 2 * this.loopedSlides) / this.params.slidesPerGroup
//                 )
//               : this.snapGrid.length;
//           if (
//             (this.params.loop
//               ? ((i = Math.ceil(
//                   (this.activeIndex - this.loopedSlides) /
//                     this.params.slidesPerGroup
//                 )) >
//                   n - 1 - 2 * this.loopedSlides &&
//                   (i -= n - 2 * this.loopedSlides),
//                 i > r - 1 && (i -= r),
//                 i < 0 &&
//                   "bullets" !== this.params.paginationType &&
//                   (i = r + i))
//               : (i =
//                   void 0 !== this.snapIndex
//                     ? this.snapIndex
//                     : this.activeIndex || 0),
//             "bullets" === t.type &&
//               this.pagination.bullets &&
//               this.pagination.bullets.length > 0)
//           ) {
//             var a,
//               o,
//               l,
//               u = this.pagination.bullets;
//             if (
//               (t.dynamicBullets &&
//                 ((this.pagination.bulletSize = u
//                   .eq(0)
//                   [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
//                 s.css(
//                   this.isHorizontal() ? "width" : "height",
//                   this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"
//                 ),
//                 t.dynamicMainBullets > 1 &&
//                   void 0 !== this.previousIndex &&
//                   ((this.pagination.dynamicBulletIndex +=
//                     i - this.previousIndex),
//                   this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
//                     ? (this.pagination.dynamicBulletIndex =
//                         t.dynamicMainBullets - 1)
//                     : this.pagination.dynamicBulletIndex < 0 &&
//                       (this.pagination.dynamicBulletIndex = 0)),
//                 (a = i - this.pagination.dynamicBulletIndex),
//                 (l =
//                   ((o = a + (Math.min(u.length, t.dynamicMainBullets) - 1)) +
//                     a) /
//                   2)),
//               u.removeClass(
//                 t.bulletActiveClass +
//                   " " +
//                   t.bulletActiveClass +
//                   "-next " +
//                   t.bulletActiveClass +
//                   "-next-next " +
//                   t.bulletActiveClass +
//                   "-prev " +
//                   t.bulletActiveClass +
//                   "-prev-prev " +
//                   t.bulletActiveClass +
//                   "-main"
//               ),
//               s.length > 1)
//             )
//               u.each(function (e) {
//                 var n = C(e),
//                   s = n.index();
//                 s === i && n.addClass(t.bulletActiveClass),
//                   t.dynamicBullets &&
//                     (s >= a &&
//                       s <= o &&
//                       n.addClass(t.bulletActiveClass + "-main"),
//                     s === a &&
//                       n
//                         .prev()
//                         .addClass(t.bulletActiveClass + "-prev")
//                         .prev()
//                         .addClass(t.bulletActiveClass + "-prev-prev"),
//                     s === o &&
//                       n
//                         .next()
//                         .addClass(t.bulletActiveClass + "-next")
//                         .next()
//                         .addClass(t.bulletActiveClass + "-next-next"));
//               });
//             else {
//               var d = u.eq(i),
//                 c = d.index();
//               if ((d.addClass(t.bulletActiveClass), t.dynamicBullets)) {
//                 for (var h = u.eq(a), p = u.eq(o), f = a; f <= o; f += 1)
//                   u.eq(f).addClass(t.bulletActiveClass + "-main");
//                 if (this.params.loop)
//                   if (c >= u.length - t.dynamicMainBullets) {
//                     for (var v = t.dynamicMainBullets; v >= 0; v -= 1)
//                       u.eq(u.length - v).addClass(
//                         t.bulletActiveClass + "-main"
//                       );
//                     u.eq(u.length - t.dynamicMainBullets - 1).addClass(
//                       t.bulletActiveClass + "-prev"
//                     );
//                   } else
//                     h
//                       .prev()
//                       .addClass(t.bulletActiveClass + "-prev")
//                       .prev()
//                       .addClass(t.bulletActiveClass + "-prev-prev"),
//                       p
//                         .next()
//                         .addClass(t.bulletActiveClass + "-next")
//                         .next()
//                         .addClass(t.bulletActiveClass + "-next-next");
//                 else
//                   h
//                     .prev()
//                     .addClass(t.bulletActiveClass + "-prev")
//                     .prev()
//                     .addClass(t.bulletActiveClass + "-prev-prev"),
//                     p
//                       .next()
//                       .addClass(t.bulletActiveClass + "-next")
//                       .next()
//                       .addClass(t.bulletActiveClass + "-next-next");
//               }
//             }
//             if (t.dynamicBullets) {
//               var m = Math.min(u.length, t.dynamicMainBullets + 4),
//                 g =
//                   (this.pagination.bulletSize * m -
//                     this.pagination.bulletSize) /
//                     2 -
//                   l * this.pagination.bulletSize,
//                 y = e ? "right" : "left";
//               u.css(this.isHorizontal() ? y : "top", g + "px");
//             }
//           }
//           if (
//             ("fraction" === t.type &&
//               (s.find(A(t.currentClass)).text(t.formatFractionCurrent(i + 1)),
//               s.find(A(t.totalClass)).text(t.formatFractionTotal(r))),
//             "progressbar" === t.type)
//           ) {
//             var b;
//             b = t.progressbarOpposite
//               ? this.isHorizontal()
//                 ? "vertical"
//                 : "horizontal"
//               : this.isHorizontal()
//               ? "horizontal"
//               : "vertical";
//             var w = (i + 1) / r,
//               x = 1,
//               E = 1;
//             "horizontal" === b ? (x = w) : (E = w),
//               s
//                 .find(A(t.progressbarFillClass))
//                 .transform(
//                   "translate3d(0,0,0) scaleX(" + x + ") scaleY(" + E + ")"
//                 )
//                 .transition(this.params.speed);
//           }
//           "custom" === t.type && t.renderCustom
//             ? (s.html(t.renderCustom(this, i + 1, r)),
//               this.emit("paginationRender", s[0]))
//             : this.emit("paginationUpdate", s[0]),
//             this.params.watchOverflow &&
//               this.enabled &&
//               s[this.isLocked ? "addClass" : "removeClass"](t.lockClass);
//         }
//       },
//       render: function () {
//         var e = this.params.pagination;
//         if (
//           e.el &&
//           this.pagination.el &&
//           this.pagination.$el &&
//           0 !== this.pagination.$el.length
//         ) {
//           var t =
//               this.virtual && this.params.virtual.enabled
//                 ? this.virtual.slides.length
//                 : this.slides.length,
//             i = this.pagination.$el,
//             n = "";
//           if ("bullets" === e.type) {
//             var s = this.params.loop
//               ? Math.ceil(
//                   (t - 2 * this.loopedSlides) / this.params.slidesPerGroup
//                 )
//               : this.snapGrid.length;
//             this.params.freeMode && !this.params.loop && s > t && (s = t);
//             for (var r = 0; r < s; r += 1)
//               e.renderBullet
//                 ? (n += e.renderBullet.call(this, r, e.bulletClass))
//                 : (n +=
//                     "<" +
//                     e.bulletElement +
//                     ' class="' +
//                     e.bulletClass +
//                     '"></' +
//                     e.bulletElement +
//                     ">");
//             i.html(n), (this.pagination.bullets = i.find(A(e.bulletClass)));
//           }
//           "fraction" === e.type &&
//             ((n = e.renderFraction
//               ? e.renderFraction.call(this, e.currentClass, e.totalClass)
//               : '<span class="' +
//                 e.currentClass +
//                 '"></span> / <span class="' +
//                 e.totalClass +
//                 '"></span>'),
//             i.html(n)),
//             "progressbar" === e.type &&
//               ((n = e.renderProgressbar
//                 ? e.renderProgressbar.call(this, e.progressbarFillClass)
//                 : '<span class="' + e.progressbarFillClass + '"></span>'),
//               i.html(n)),
//             "custom" !== e.type &&
//               this.emit("paginationRender", this.pagination.$el[0]);
//         }
//       },
//       init: function () {
//         var e = this;
//         e.params.pagination = D(
//           e.$el,
//           e.params.pagination,
//           e.params.createElements,
//           { el: "swiper-pagination" }
//         );
//         var t = e.params.pagination;
//         if (t.el) {
//           var i = C(t.el);
//           0 !== i.length &&
//             (e.params.uniqueNavElements &&
//               "string" == typeof t.el &&
//               i.length > 1 &&
//               (i = e.$el.find(t.el)),
//             "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
//             i.addClass(t.modifierClass + t.type),
//             "bullets" === t.type &&
//               t.dynamicBullets &&
//               (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
//               (e.pagination.dynamicBulletIndex = 0),
//               t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
//             "progressbar" === t.type &&
//               t.progressbarOpposite &&
//               i.addClass(t.progressbarOppositeClass),
//             t.clickable &&
//               i.on("click", A(t.bulletClass), function (t) {
//                 t.preventDefault();
//                 var i = C(this).index() * e.params.slidesPerGroup;
//                 e.params.loop && (i += e.loopedSlides), e.slideTo(i);
//               }),
//             O(e.pagination, { $el: i, el: i[0] }),
//             e.enabled || i.addClass(t.lockClass));
//         }
//       },
//       destroy: function () {
//         var e = this.params.pagination;
//         if (
//           e.el &&
//           this.pagination.el &&
//           this.pagination.$el &&
//           0 !== this.pagination.$el.length
//         ) {
//           var t = this.pagination.$el;
//           t.removeClass(e.hiddenClass),
//             t.removeClass(e.modifierClass + e.type),
//             this.pagination.bullets &&
//               this.pagination.bullets.removeClass(e.bulletActiveClass),
//             e.clickable && t.off("click", A(e.bulletClass));
//         }
//       },
//     };
//     function he() {
//       return (he =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var pe = {
//       setTranslate: function () {
//         if (this.params.scrollbar.el && this.scrollbar.el) {
//           var e = this.scrollbar,
//             t = this.rtlTranslate,
//             i = this.progress,
//             n = e.dragSize,
//             s = e.trackSize,
//             r = e.$dragEl,
//             a = e.$el,
//             o = this.params.scrollbar,
//             l = n,
//             u = (s - n) * i;
//           t
//             ? (u = -u) > 0
//               ? ((l = n - u), (u = 0))
//               : -u + n > s && (l = s + u)
//             : u < 0
//             ? ((l = n + u), (u = 0))
//             : u + n > s && (l = s - u),
//             this.isHorizontal()
//               ? (r.transform("translate3d(" + u + "px, 0, 0)"),
//                 (r[0].style.width = l + "px"))
//               : (r.transform("translate3d(0px, " + u + "px, 0)"),
//                 (r[0].style.height = l + "px")),
//             o.hide &&
//               (clearTimeout(this.scrollbar.timeout),
//               (a[0].style.opacity = 1),
//               (this.scrollbar.timeout = setTimeout(function () {
//                 (a[0].style.opacity = 0), a.transition(400);
//               }, 1e3)));
//         }
//       },
//       setTransition: function (e) {
//         this.params.scrollbar.el &&
//           this.scrollbar.el &&
//           this.scrollbar.$dragEl.transition(e);
//       },
//       updateSize: function () {
//         if (this.params.scrollbar.el && this.scrollbar.el) {
//           var e = this.scrollbar,
//             t = e.$dragEl,
//             i = e.$el;
//           (t[0].style.width = ""), (t[0].style.height = "");
//           var n,
//             s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
//             r = this.size / this.virtualSize,
//             a = r * (s / this.size);
//           (n =
//             "auto" === this.params.scrollbar.dragSize
//               ? s * r
//               : parseInt(this.params.scrollbar.dragSize, 10)),
//             this.isHorizontal()
//               ? (t[0].style.width = n + "px")
//               : (t[0].style.height = n + "px"),
//             (i[0].style.display = r >= 1 ? "none" : ""),
//             this.params.scrollbar.hide && (i[0].style.opacity = 0),
//             O(e, { trackSize: s, divider: r, moveDivider: a, dragSize: n }),
//             this.params.watchOverflow &&
//               this.enabled &&
//               e.$el[this.isLocked ? "addClass" : "removeClass"](
//                 this.params.scrollbar.lockClass
//               );
//         }
//       },
//       getPointerPosition: function (e) {
//         return this.isHorizontal()
//           ? "touchstart" === e.type || "touchmove" === e.type
//             ? e.targetTouches[0].clientX
//             : e.clientX
//           : "touchstart" === e.type || "touchmove" === e.type
//           ? e.targetTouches[0].clientY
//           : e.clientY;
//       },
//       setDragPosition: function (e) {
//         var t,
//           i = this.scrollbar,
//           n = this.rtlTranslate,
//           s = i.$el,
//           r = i.dragSize,
//           a = i.trackSize,
//           o = i.dragStartPos;
//         (t =
//           (i.getPointerPosition(e) -
//             s.offset()[this.isHorizontal() ? "left" : "top"] -
//             (null !== o ? o : r / 2)) /
//           (a - r)),
//           (t = Math.max(Math.min(t, 1), 0)),
//           n && (t = 1 - t);
//         var l =
//           this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
//         this.updateProgress(l),
//           this.setTranslate(l),
//           this.updateActiveIndex(),
//           this.updateSlidesClasses();
//       },
//       onDragStart: function (e) {
//         var t = this.params.scrollbar,
//           i = this.scrollbar,
//           n = this.$wrapperEl,
//           s = i.$el,
//           r = i.$dragEl;
//         (this.scrollbar.isTouched = !0),
//           (this.scrollbar.dragStartPos =
//             e.target === r[0] || e.target === r
//               ? i.getPointerPosition(e) -
//                 e.target.getBoundingClientRect()[
//                   this.isHorizontal() ? "left" : "top"
//                 ]
//               : null),
//           e.preventDefault(),
//           e.stopPropagation(),
//           n.transition(100),
//           r.transition(100),
//           i.setDragPosition(e),
//           clearTimeout(this.scrollbar.dragTimeout),
//           s.transition(0),
//           t.hide && s.css("opacity", 1),
//           this.params.cssMode &&
//             this.$wrapperEl.css("scroll-snap-type", "none"),
//           this.emit("scrollbarDragStart", e);
//       },
//       onDragMove: function (e) {
//         var t = this.scrollbar,
//           i = this.$wrapperEl,
//           n = t.$el,
//           s = t.$dragEl;
//         this.scrollbar.isTouched &&
//           (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
//           t.setDragPosition(e),
//           i.transition(0),
//           n.transition(0),
//           s.transition(0),
//           this.emit("scrollbarDragMove", e));
//       },
//       onDragEnd: function (e) {
//         var t = this.params.scrollbar,
//           i = this.scrollbar,
//           n = this.$wrapperEl,
//           s = i.$el;
//         this.scrollbar.isTouched &&
//           ((this.scrollbar.isTouched = !1),
//           this.params.cssMode &&
//             (this.$wrapperEl.css("scroll-snap-type", ""), n.transition("")),
//           t.hide &&
//             (clearTimeout(this.scrollbar.dragTimeout),
//             (this.scrollbar.dragTimeout = S(function () {
//               s.css("opacity", 0), s.transition(400);
//             }, 1e3))),
//           this.emit("scrollbarDragEnd", e),
//           t.snapOnRelease && this.slideToClosest());
//       },
//       enableDraggable: function () {
//         if (this.params.scrollbar.el) {
//           var e = a(),
//             t = this.scrollbar,
//             i = this.touchEventsTouch,
//             n = this.touchEventsDesktop,
//             s = this.params,
//             r = this.support,
//             o = t.$el[0],
//             l = !(!r.passiveListener || !s.passiveListeners) && {
//               passive: !1,
//               capture: !1,
//             },
//             u = !(!r.passiveListener || !s.passiveListeners) && {
//               passive: !0,
//               capture: !1,
//             };
//           o &&
//             (r.touch
//               ? (o.addEventListener(i.start, this.scrollbar.onDragStart, l),
//                 o.addEventListener(i.move, this.scrollbar.onDragMove, l),
//                 o.addEventListener(i.end, this.scrollbar.onDragEnd, u))
//               : (o.addEventListener(n.start, this.scrollbar.onDragStart, l),
//                 e.addEventListener(n.move, this.scrollbar.onDragMove, l),
//                 e.addEventListener(n.end, this.scrollbar.onDragEnd, u)));
//         }
//       },
//       disableDraggable: function () {
//         if (this.params.scrollbar.el) {
//           var e = a(),
//             t = this.scrollbar,
//             i = this.touchEventsTouch,
//             n = this.touchEventsDesktop,
//             s = this.params,
//             r = this.support,
//             o = t.$el[0],
//             l = !(!r.passiveListener || !s.passiveListeners) && {
//               passive: !1,
//               capture: !1,
//             },
//             u = !(!r.passiveListener || !s.passiveListeners) && {
//               passive: !0,
//               capture: !1,
//             };
//           o &&
//             (r.touch
//               ? (o.removeEventListener(i.start, this.scrollbar.onDragStart, l),
//                 o.removeEventListener(i.move, this.scrollbar.onDragMove, l),
//                 o.removeEventListener(i.end, this.scrollbar.onDragEnd, u))
//               : (o.removeEventListener(n.start, this.scrollbar.onDragStart, l),
//                 e.removeEventListener(n.move, this.scrollbar.onDragMove, l),
//                 e.removeEventListener(n.end, this.scrollbar.onDragEnd, u)));
//         }
//       },
//       init: function () {
//         var e = this.scrollbar,
//           t = this.$el;
//         this.params.scrollbar = D(
//           t,
//           this.params.scrollbar,
//           this.params.createElements,
//           { el: "swiper-scrollbar" }
//         );
//         var i = this.params.scrollbar;
//         if (i.el) {
//           var n = C(i.el);
//           this.params.uniqueNavElements &&
//             "string" == typeof i.el &&
//             n.length > 1 &&
//             1 === t.find(i.el).length &&
//             (n = t.find(i.el));
//           var s = n.find("." + this.params.scrollbar.dragClass);
//           0 === s.length &&
//             ((s = C(
//               '<div class="' + this.params.scrollbar.dragClass + '"></div>'
//             )),
//             n.append(s)),
//             O(e, { $el: n, el: n[0], $dragEl: s, dragEl: s[0] }),
//             i.draggable && e.enableDraggable(),
//             n &&
//               n[this.enabled ? "removeClass" : "addClass"](
//                 this.params.scrollbar.lockClass
//               );
//         }
//       },
//       destroy: function () {
//         this.scrollbar.disableDraggable();
//       },
//     };
//     function fe() {
//       return (fe =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var ve = {
//       setTransform: function (e, t) {
//         var i = this.rtl,
//           n = C(e),
//           s = i ? -1 : 1,
//           r = n.attr("data-swiper-parallax") || "0",
//           a = n.attr("data-swiper-parallax-x"),
//           o = n.attr("data-swiper-parallax-y"),
//           l = n.attr("data-swiper-parallax-scale"),
//           u = n.attr("data-swiper-parallax-opacity");
//         if (
//           (a || o
//             ? ((a = a || "0"), (o = o || "0"))
//             : this.isHorizontal()
//             ? ((a = r), (o = "0"))
//             : ((o = r), (a = "0")),
//           (a =
//             a.indexOf("%") >= 0
//               ? parseInt(a, 10) * t * s + "%"
//               : a * t * s + "px"),
//           (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px"),
//           null != u)
//         ) {
//           var d = u - (u - 1) * (1 - Math.abs(t));
//           n[0].style.opacity = d;
//         }
//         if (null == l) n.transform("translate3d(" + a + ", " + o + ", 0px)");
//         else {
//           var c = l - (l - 1) * (1 - Math.abs(t));
//           n.transform(
//             "translate3d(" + a + ", " + o + ", 0px) scale(" + c + ")"
//           );
//         }
//       },
//       setTranslate: function () {
//         var e = this,
//           t = e.$el,
//           i = e.slides,
//           n = e.progress,
//           s = e.snapGrid;
//         t
//           .children(
//             "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
//           )
//           .each(function (t) {
//             e.parallax.setTransform(t, n);
//           }),
//           i.each(function (t, i) {
//             var r = t.progress;
//             e.params.slidesPerGroup > 1 &&
//               "auto" !== e.params.slidesPerView &&
//               (r += Math.ceil(i / 2) - n * (s.length - 1)),
//               (r = Math.min(Math.max(r, -1), 1)),
//               C(t)
//                 .find(
//                   "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
//                 )
//                 .each(function (t) {
//                   e.parallax.setTransform(t, r);
//                 });
//           });
//       },
//       setTransition: function (e) {
//         void 0 === e && (e = this.params.speed);
//         this.$el
//           .find(
//             "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
//           )
//           .each(function (t) {
//             var i = C(t),
//               n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
//             0 === e && (n = 0), i.transition(n);
//           });
//       },
//     };
//     function me() {
//       return (me =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var ge = {
//       getDistanceBetweenTouches: function (e) {
//         if (e.targetTouches.length < 2) return 1;
//         var t = e.targetTouches[0].pageX,
//           i = e.targetTouches[0].pageY,
//           n = e.targetTouches[1].pageX,
//           s = e.targetTouches[1].pageY;
//         return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2));
//       },
//       onGestureStart: function (e) {
//         var t = this.support,
//           i = this.params.zoom,
//           n = this.zoom,
//           s = n.gesture;
//         if (
//           ((n.fakeGestureTouched = !1), (n.fakeGestureMoved = !1), !t.gestures)
//         ) {
//           if (
//             "touchstart" !== e.type ||
//             ("touchstart" === e.type && e.targetTouches.length < 2)
//           )
//             return;
//           (n.fakeGestureTouched = !0),
//             (s.scaleStart = ge.getDistanceBetweenTouches(e));
//         }
//         (s.$slideEl && s.$slideEl.length) ||
//         ((s.$slideEl = C(e.target).closest("." + this.params.slideClass)),
//         0 === s.$slideEl.length &&
//           (s.$slideEl = this.slides.eq(this.activeIndex)),
//         (s.$imageEl = s.$slideEl.find(
//           "img, svg, canvas, picture, .swiper-zoom-target"
//         )),
//         (s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)),
//         (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
//         0 !== s.$imageWrapEl.length)
//           ? (s.$imageEl && s.$imageEl.transition(0), (this.zoom.isScaling = !0))
//           : (s.$imageEl = void 0);
//       },
//       onGestureChange: function (e) {
//         var t = this.support,
//           i = this.params.zoom,
//           n = this.zoom,
//           s = n.gesture;
//         if (!t.gestures) {
//           if (
//             "touchmove" !== e.type ||
//             ("touchmove" === e.type && e.targetTouches.length < 2)
//           )
//             return;
//           (n.fakeGestureMoved = !0),
//             (s.scaleMove = ge.getDistanceBetweenTouches(e));
//         }
//         s.$imageEl && 0 !== s.$imageEl.length
//           ? (t.gestures
//               ? (n.scale = e.scale * n.currentScale)
//               : (n.scale = (s.scaleMove / s.scaleStart) * n.currentScale),
//             n.scale > s.maxRatio &&
//               (n.scale =
//                 s.maxRatio - 1 + Math.pow(n.scale - s.maxRatio + 1, 0.5)),
//             n.scale < i.minRatio &&
//               (n.scale =
//                 i.minRatio + 1 - Math.pow(i.minRatio - n.scale + 1, 0.5)),
//             s.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
//           : "gesturechange" === e.type && n.onGestureStart(e);
//       },
//       onGestureEnd: function (e) {
//         var t = this.device,
//           i = this.support,
//           n = this.params.zoom,
//           s = this.zoom,
//           r = s.gesture;
//         if (!i.gestures) {
//           if (!s.fakeGestureTouched || !s.fakeGestureMoved) return;
//           if (
//             "touchend" !== e.type ||
//             ("touchend" === e.type && e.changedTouches.length < 2 && !t.android)
//           )
//             return;
//           (s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1);
//         }
//         r.$imageEl &&
//           0 !== r.$imageEl.length &&
//           ((s.scale = Math.max(Math.min(s.scale, r.maxRatio), n.minRatio)),
//           r.$imageEl
//             .transition(this.params.speed)
//             .transform("translate3d(0,0,0) scale(" + s.scale + ")"),
//           (s.currentScale = s.scale),
//           (s.isScaling = !1),
//           1 === s.scale && (r.$slideEl = void 0));
//       },
//       onTouchStart: function (e) {
//         var t = this.device,
//           i = this.zoom,
//           n = i.gesture,
//           s = i.image;
//         n.$imageEl &&
//           0 !== n.$imageEl.length &&
//           (s.isTouched ||
//             (t.android && e.cancelable && e.preventDefault(),
//             (s.isTouched = !0),
//             (s.touchesStart.x =
//               "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
//             (s.touchesStart.y =
//               "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
//       },
//       onTouchMove: function (e) {
//         var t = this.zoom,
//           i = t.gesture,
//           n = t.image,
//           s = t.velocity;
//         if (
//           i.$imageEl &&
//           0 !== i.$imageEl.length &&
//           ((this.allowClick = !1), n.isTouched && i.$slideEl)
//         ) {
//           n.isMoved ||
//             ((n.width = i.$imageEl[0].offsetWidth),
//             (n.height = i.$imageEl[0].offsetHeight),
//             (n.startX = k(i.$imageWrapEl[0], "x") || 0),
//             (n.startY = k(i.$imageWrapEl[0], "y") || 0),
//             (i.slideWidth = i.$slideEl[0].offsetWidth),
//             (i.slideHeight = i.$slideEl[0].offsetHeight),
//             i.$imageWrapEl.transition(0));
//           var r = n.width * t.scale,
//             a = n.height * t.scale;
//           if (!(r < i.slideWidth && a < i.slideHeight)) {
//             if (
//               ((n.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
//               (n.maxX = -n.minX),
//               (n.minY = Math.min(i.slideHeight / 2 - a / 2, 0)),
//               (n.maxY = -n.minY),
//               (n.touchesCurrent.x =
//                 "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
//               (n.touchesCurrent.y =
//                 "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
//               !n.isMoved && !t.isScaling)
//             ) {
//               if (
//                 this.isHorizontal() &&
//                 ((Math.floor(n.minX) === Math.floor(n.startX) &&
//                   n.touchesCurrent.x < n.touchesStart.x) ||
//                   (Math.floor(n.maxX) === Math.floor(n.startX) &&
//                     n.touchesCurrent.x > n.touchesStart.x))
//               )
//                 return void (n.isTouched = !1);
//               if (
//                 !this.isHorizontal() &&
//                 ((Math.floor(n.minY) === Math.floor(n.startY) &&
//                   n.touchesCurrent.y < n.touchesStart.y) ||
//                   (Math.floor(n.maxY) === Math.floor(n.startY) &&
//                     n.touchesCurrent.y > n.touchesStart.y))
//               )
//                 return void (n.isTouched = !1);
//             }
//             e.cancelable && e.preventDefault(),
//               e.stopPropagation(),
//               (n.isMoved = !0),
//               (n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX),
//               (n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY),
//               n.currentX < n.minX &&
//                 (n.currentX =
//                   n.minX + 1 - Math.pow(n.minX - n.currentX + 1, 0.8)),
//               n.currentX > n.maxX &&
//                 (n.currentX =
//                   n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, 0.8)),
//               n.currentY < n.minY &&
//                 (n.currentY =
//                   n.minY + 1 - Math.pow(n.minY - n.currentY + 1, 0.8)),
//               n.currentY > n.maxY &&
//                 (n.currentY =
//                   n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, 0.8)),
//               s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x),
//               s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y),
//               s.prevTime || (s.prevTime = Date.now()),
//               (s.x =
//                 (n.touchesCurrent.x - s.prevPositionX) /
//                 (Date.now() - s.prevTime) /
//                 2),
//               (s.y =
//                 (n.touchesCurrent.y - s.prevPositionY) /
//                 (Date.now() - s.prevTime) /
//                 2),
//               Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0),
//               Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0),
//               (s.prevPositionX = n.touchesCurrent.x),
//               (s.prevPositionY = n.touchesCurrent.y),
//               (s.prevTime = Date.now()),
//               i.$imageWrapEl.transform(
//                 "translate3d(" + n.currentX + "px, " + n.currentY + "px,0)"
//               );
//           }
//         }
//       },
//       onTouchEnd: function () {
//         var e = this.zoom,
//           t = e.gesture,
//           i = e.image,
//           n = e.velocity;
//         if (t.$imageEl && 0 !== t.$imageEl.length) {
//           if (!i.isTouched || !i.isMoved)
//             return (i.isTouched = !1), void (i.isMoved = !1);
//           (i.isTouched = !1), (i.isMoved = !1);
//           var s = 300,
//             r = 300,
//             a = n.x * s,
//             o = i.currentX + a,
//             l = n.y * r,
//             u = i.currentY + l;
//           0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)),
//             0 !== n.y && (r = Math.abs((u - i.currentY) / n.y));
//           var d = Math.max(s, r);
//           (i.currentX = o), (i.currentY = u);
//           var c = i.width * e.scale,
//             h = i.height * e.scale;
//           (i.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
//             (i.maxX = -i.minX),
//             (i.minY = Math.min(t.slideHeight / 2 - h / 2, 0)),
//             (i.maxY = -i.minY),
//             (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
//             (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
//             t.$imageWrapEl
//               .transition(d)
//               .transform(
//                 "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
//               );
//         }
//       },
//       onTransitionEnd: function () {
//         var e = this.zoom,
//           t = e.gesture;
//         t.$slideEl &&
//           this.previousIndex !== this.activeIndex &&
//           (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
//           t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
//           (e.scale = 1),
//           (e.currentScale = 1),
//           (t.$slideEl = void 0),
//           (t.$imageEl = void 0),
//           (t.$imageWrapEl = void 0));
//       },
//       toggle: function (e) {
//         var t = this.zoom;
//         t.scale && 1 !== t.scale ? t.out() : t.in(e);
//       },
//       in: function (e) {
//         var t,
//           i,
//           n,
//           s,
//           r,
//           a,
//           o,
//           u,
//           d,
//           c,
//           h,
//           p,
//           f,
//           v,
//           m,
//           g,
//           y = l(),
//           b = this.zoom,
//           w = this.params.zoom,
//           x = b.gesture,
//           E = b.image;
//         (x.$slideEl ||
//           (e &&
//             e.target &&
//             (x.$slideEl = C(e.target).closest("." + this.params.slideClass)),
//           x.$slideEl ||
//             (this.params.virtual && this.params.virtual.enabled && this.virtual
//               ? (x.$slideEl = this.$wrapperEl.children(
//                   "." + this.params.slideActiveClass
//                 ))
//               : (x.$slideEl = this.slides.eq(this.activeIndex))),
//           (x.$imageEl = x.$slideEl.find(
//             "img, svg, canvas, picture, .swiper-zoom-target"
//           )),
//           (x.$imageWrapEl = x.$imageEl.parent("." + w.containerClass))),
//         x.$imageEl &&
//           0 !== x.$imageEl.length &&
//           x.$imageWrapEl &&
//           0 !== x.$imageWrapEl.length) &&
//           (x.$slideEl.addClass("" + w.zoomedSlideClass),
//           void 0 === E.touchesStart.x && e
//             ? ((t =
//                 "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
//               (i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
//             : ((t = E.touchesStart.x), (i = E.touchesStart.y)),
//           (b.scale = x.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
//           (b.currentScale =
//             x.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
//           e
//             ? ((m = x.$slideEl[0].offsetWidth),
//               (g = x.$slideEl[0].offsetHeight),
//               (n = x.$slideEl.offset().left + y.scrollX + m / 2 - t),
//               (s = x.$slideEl.offset().top + y.scrollY + g / 2 - i),
//               (o = x.$imageEl[0].offsetWidth),
//               (u = x.$imageEl[0].offsetHeight),
//               (d = o * b.scale),
//               (c = u * b.scale),
//               (f = -(h = Math.min(m / 2 - d / 2, 0))),
//               (v = -(p = Math.min(g / 2 - c / 2, 0))),
//               (r = n * b.scale) < h && (r = h),
//               r > f && (r = f),
//               (a = s * b.scale) < p && (a = p),
//               a > v && (a = v))
//             : ((r = 0), (a = 0)),
//           x.$imageWrapEl
//             .transition(300)
//             .transform("translate3d(" + r + "px, " + a + "px,0)"),
//           x.$imageEl
//             .transition(300)
//             .transform("translate3d(0,0,0) scale(" + b.scale + ")"));
//       },
//       out: function () {
//         var e = this.zoom,
//           t = this.params.zoom,
//           i = e.gesture;
//         i.$slideEl ||
//           (this.params.virtual && this.params.virtual.enabled && this.virtual
//             ? (i.$slideEl = this.$wrapperEl.children(
//                 "." + this.params.slideActiveClass
//               ))
//             : (i.$slideEl = this.slides.eq(this.activeIndex)),
//           (i.$imageEl = i.$slideEl.find(
//             "img, svg, canvas, picture, .swiper-zoom-target"
//           )),
//           (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
//           i.$imageEl &&
//             0 !== i.$imageEl.length &&
//             i.$imageWrapEl &&
//             0 !== i.$imageWrapEl.length &&
//             ((e.scale = 1),
//             (e.currentScale = 1),
//             i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
//             i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
//             i.$slideEl.removeClass("" + t.zoomedSlideClass),
//             (i.$slideEl = void 0));
//       },
//       toggleGestures: function (e) {
//         var t = this.zoom,
//           i = t.slideSelector,
//           n = t.passiveListener;
//         this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, n),
//           this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, n),
//           this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, n);
//       },
//       enableGestures: function () {
//         this.zoom.gesturesEnabled ||
//           ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
//       },
//       disableGestures: function () {
//         this.zoom.gesturesEnabled &&
//           ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
//       },
//       enable: function () {
//         var e = this.support,
//           t = this.zoom;
//         if (!t.enabled) {
//           t.enabled = !0;
//           var i = !(
//               "touchstart" !== this.touchEvents.start ||
//               !e.passiveListener ||
//               !this.params.passiveListeners
//             ) && { passive: !0, capture: !1 },
//             n = !e.passiveListener || { passive: !1, capture: !0 },
//             s = "." + this.params.slideClass;
//           (this.zoom.passiveListener = i),
//             (this.zoom.slideSelector = s),
//             e.gestures
//               ? (this.$wrapperEl.on(
//                   this.touchEvents.start,
//                   this.zoom.enableGestures,
//                   i
//                 ),
//                 this.$wrapperEl.on(
//                   this.touchEvents.end,
//                   this.zoom.disableGestures,
//                   i
//                 ))
//               : "touchstart" === this.touchEvents.start &&
//                 (this.$wrapperEl.on(
//                   this.touchEvents.start,
//                   s,
//                   t.onGestureStart,
//                   i
//                 ),
//                 this.$wrapperEl.on(
//                   this.touchEvents.move,
//                   s,
//                   t.onGestureChange,
//                   n
//                 ),
//                 this.$wrapperEl.on(this.touchEvents.end, s, t.onGestureEnd, i),
//                 this.touchEvents.cancel &&
//                   this.$wrapperEl.on(
//                     this.touchEvents.cancel,
//                     s,
//                     t.onGestureEnd,
//                     i
//                   )),
//             this.$wrapperEl.on(
//               this.touchEvents.move,
//               "." + this.params.zoom.containerClass,
//               t.onTouchMove,
//               n
//             );
//         }
//       },
//       disable: function () {
//         var e = this.zoom;
//         if (e.enabled) {
//           var t = this.support;
//           this.zoom.enabled = !1;
//           var i = !(
//               "touchstart" !== this.touchEvents.start ||
//               !t.passiveListener ||
//               !this.params.passiveListeners
//             ) && { passive: !0, capture: !1 },
//             n = !t.passiveListener || { passive: !1, capture: !0 },
//             s = "." + this.params.slideClass;
//           t.gestures
//             ? (this.$wrapperEl.off(
//                 this.touchEvents.start,
//                 this.zoom.enableGestures,
//                 i
//               ),
//               this.$wrapperEl.off(
//                 this.touchEvents.end,
//                 this.zoom.disableGestures,
//                 i
//               ))
//             : "touchstart" === this.touchEvents.start &&
//               (this.$wrapperEl.off(
//                 this.touchEvents.start,
//                 s,
//                 e.onGestureStart,
//                 i
//               ),
//               this.$wrapperEl.off(
//                 this.touchEvents.move,
//                 s,
//                 e.onGestureChange,
//                 n
//               ),
//               this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, i),
//               this.touchEvents.cancel &&
//                 this.$wrapperEl.off(
//                   this.touchEvents.cancel,
//                   s,
//                   e.onGestureEnd,
//                   i
//                 )),
//             this.$wrapperEl.off(
//               this.touchEvents.move,
//               "." + this.params.zoom.containerClass,
//               e.onTouchMove,
//               n
//             );
//         }
//       },
//     };
//     function ye() {
//       return (ye =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var be = {
//       loadInSlide: function (e, t) {
//         void 0 === t && (t = !0);
//         var i = this,
//           n = i.params.lazy;
//         if (void 0 !== e && 0 !== i.slides.length) {
//           var s =
//               i.virtual && i.params.virtual.enabled
//                 ? i.$wrapperEl.children(
//                     "." +
//                       i.params.slideClass +
//                       '[data-swiper-slide-index="' +
//                       e +
//                       '"]'
//                   )
//                 : i.slides.eq(e),
//             r = s.find(
//               "." +
//                 n.elementClass +
//                 ":not(." +
//                 n.loadedClass +
//                 "):not(." +
//                 n.loadingClass +
//                 ")"
//             );
//           !s.hasClass(n.elementClass) ||
//             s.hasClass(n.loadedClass) ||
//             s.hasClass(n.loadingClass) ||
//             r.push(s[0]),
//             0 !== r.length &&
//               r.each(function (e) {
//                 var r = C(e);
//                 r.addClass(n.loadingClass);
//                 var a = r.attr("data-background"),
//                   o = r.attr("data-src"),
//                   l = r.attr("data-srcset"),
//                   u = r.attr("data-sizes"),
//                   d = r.parent("picture");
//                 i.loadImage(r[0], o || a, l, u, !1, function () {
//                   if (null != i && i && (!i || i.params) && !i.destroyed) {
//                     if (
//                       (a
//                         ? (r.css("background-image", 'url("' + a + '")'),
//                           r.removeAttr("data-background"))
//                         : (l &&
//                             (r.attr("srcset", l), r.removeAttr("data-srcset")),
//                           u && (r.attr("sizes", u), r.removeAttr("data-sizes")),
//                           d.length &&
//                             d.children("source").each(function (e) {
//                               var t = C(e);
//                               t.attr("data-srcset") &&
//                                 (t.attr("srcset", t.attr("data-srcset")),
//                                 t.removeAttr("data-srcset"));
//                             }),
//                           o && (r.attr("src", o), r.removeAttr("data-src"))),
//                       r.addClass(n.loadedClass).removeClass(n.loadingClass),
//                       s.find("." + n.preloaderClass).remove(),
//                       i.params.loop && t)
//                     ) {
//                       var e = s.attr("data-swiper-slide-index");
//                       if (s.hasClass(i.params.slideDuplicateClass)) {
//                         var c = i.$wrapperEl.children(
//                           '[data-swiper-slide-index="' +
//                             e +
//                             '"]:not(.' +
//                             i.params.slideDuplicateClass +
//                             ")"
//                         );
//                         i.lazy.loadInSlide(c.index(), !1);
//                       } else {
//                         var h = i.$wrapperEl.children(
//                           "." +
//                             i.params.slideDuplicateClass +
//                             '[data-swiper-slide-index="' +
//                             e +
//                             '"]'
//                         );
//                         i.lazy.loadInSlide(h.index(), !1);
//                       }
//                     }
//                     i.emit("lazyImageReady", s[0], r[0]),
//                       i.params.autoHeight && i.updateAutoHeight();
//                   }
//                 }),
//                   i.emit("lazyImageLoad", s[0], r[0]);
//               });
//         }
//       },
//       load: function () {
//         var e = this,
//           t = e.$wrapperEl,
//           i = e.params,
//           n = e.slides,
//           s = e.activeIndex,
//           r = e.virtual && i.virtual.enabled,
//           a = i.lazy,
//           o = i.slidesPerView;
//         function l(e) {
//           if (r) {
//             if (
//               t.children(
//                 "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]'
//               ).length
//             )
//               return !0;
//           } else if (n[e]) return !0;
//           return !1;
//         }
//         function u(e) {
//           return r ? C(e).attr("data-swiper-slide-index") : C(e).index();
//         }
//         if (
//           ("auto" === o && (o = 0),
//           e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
//           e.params.watchSlidesVisibility)
//         )
//           t.children("." + i.slideVisibleClass).each(function (t) {
//             var i = r ? C(t).attr("data-swiper-slide-index") : C(t).index();
//             e.lazy.loadInSlide(i);
//           });
//         else if (o > 1)
//           for (var d = s; d < s + o; d += 1) l(d) && e.lazy.loadInSlide(d);
//         else e.lazy.loadInSlide(s);
//         if (a.loadPrevNext)
//           if (o > 1 || (a.loadPrevNextAmount && a.loadPrevNextAmount > 1)) {
//             for (
//               var c = a.loadPrevNextAmount,
//                 h = o,
//                 p = Math.min(s + h + Math.max(c, h), n.length),
//                 f = Math.max(s - Math.max(h, c), 0),
//                 v = s + o;
//               v < p;
//               v += 1
//             )
//               l(v) && e.lazy.loadInSlide(v);
//             for (var m = f; m < s; m += 1) l(m) && e.lazy.loadInSlide(m);
//           } else {
//             var g = t.children("." + i.slideNextClass);
//             g.length > 0 && e.lazy.loadInSlide(u(g));
//             var y = t.children("." + i.slidePrevClass);
//             y.length > 0 && e.lazy.loadInSlide(u(y));
//           }
//       },
//       checkInViewOnLoad: function () {
//         var e = l();
//         if (this && !this.destroyed) {
//           var t = this.params.lazy.scrollingElement
//               ? C(this.params.lazy.scrollingElement)
//               : C(e),
//             i = t[0] === e,
//             n = i ? e.innerWidth : t[0].offsetWidth,
//             s = i ? e.innerHeight : t[0].offsetHeight,
//             r = this.$el.offset(),
//             a = !1;
//           this.rtlTranslate && (r.left -= this.$el[0].scrollLeft);
//           for (
//             var o = [
//                 [r.left, r.top],
//                 [r.left + this.width, r.top],
//                 [r.left, r.top + this.height],
//                 [r.left + this.width, r.top + this.height],
//               ],
//               u = 0;
//             u < o.length;
//             u += 1
//           ) {
//             var d = o[u];
//             if (d[0] >= 0 && d[0] <= n && d[1] >= 0 && d[1] <= s) {
//               if (0 === d[0] && 0 === d[1]) continue;
//               a = !0;
//             }
//           }
//           var c = !(
//             "touchstart" !== this.touchEvents.start ||
//             !this.support.passiveListener ||
//             !this.params.passiveListeners
//           ) && { passive: !0, capture: !1 };
//           a
//             ? (this.lazy.load(),
//               t.off("scroll", this.lazy.checkInViewOnLoad, c))
//             : this.lazy.scrollHandlerAttached ||
//               ((this.lazy.scrollHandlerAttached = !0),
//               t.on("scroll", this.lazy.checkInViewOnLoad, c));
//         }
//       },
//     };
//     function we() {
//       return (we =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var xe = {
//       LinearSpline: function (e, t) {
//         var i,
//           n,
//           s,
//           r,
//           a,
//           o = function (e, t) {
//             for (n = -1, i = e.length; i - n > 1; )
//               e[(s = (i + n) >> 1)] <= t ? (n = s) : (i = s);
//             return i;
//           };
//         return (
//           (this.x = e),
//           (this.y = t),
//           (this.lastIndex = e.length - 1),
//           (this.interpolate = function (e) {
//             return e
//               ? ((a = o(this.x, e)),
//                 (r = a - 1),
//                 ((e - this.x[r]) * (this.y[a] - this.y[r])) /
//                   (this.x[a] - this.x[r]) +
//                   this.y[r])
//               : 0;
//           }),
//           this
//         );
//       },
//       getInterpolateFunction: function (e) {
//         this.controller.spline ||
//           (this.controller.spline = this.params.loop
//             ? new xe.LinearSpline(this.slidesGrid, e.slidesGrid)
//             : new xe.LinearSpline(this.snapGrid, e.snapGrid));
//       },
//       setTranslate: function (e, t) {
//         var i,
//           n,
//           s = this,
//           r = s.controller.control,
//           a = s.constructor;
//         function o(e) {
//           var t = s.rtlTranslate ? -s.translate : s.translate;
//           "slide" === s.params.controller.by &&
//             (s.controller.getInterpolateFunction(e),
//             (n = -s.controller.spline.interpolate(-t))),
//             (n && "container" !== s.params.controller.by) ||
//               ((i =
//                 (e.maxTranslate() - e.minTranslate()) /
//                 (s.maxTranslate() - s.minTranslate())),
//               (n = (t - s.minTranslate()) * i + e.minTranslate())),
//             s.params.controller.inverse && (n = e.maxTranslate() - n),
//             e.updateProgress(n),
//             e.setTranslate(n, s),
//             e.updateActiveIndex(),
//             e.updateSlidesClasses();
//         }
//         if (Array.isArray(r))
//           for (var l = 0; l < r.length; l += 1)
//             r[l] !== t && r[l] instanceof a && o(r[l]);
//         else r instanceof a && t !== r && o(r);
//       },
//       setTransition: function (e, t) {
//         var i,
//           n = this,
//           s = n.constructor,
//           r = n.controller.control;
//         function a(t) {
//           t.setTransition(e, n),
//             0 !== e &&
//               (t.transitionStart(),
//               t.params.autoHeight &&
//                 S(function () {
//                   t.updateAutoHeight();
//                 }),
//               t.$wrapperEl.transitionEnd(function () {
//                 r &&
//                   (t.params.loop &&
//                     "slide" === n.params.controller.by &&
//                     t.loopFix(),
//                   t.transitionEnd());
//               }));
//         }
//         if (Array.isArray(r))
//           for (i = 0; i < r.length; i += 1)
//             r[i] !== t && r[i] instanceof s && a(r[i]);
//         else r instanceof s && t !== r && a(r);
//       },
//     };
//     function Ee() {
//       return (Ee =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var Te = {
//       getRandomNumber: function (e) {
//         void 0 === e && (e = 16);
//         return "x".repeat(e).replace(/x/g, function () {
//           return Math.round(16 * Math.random()).toString(16);
//         });
//       },
//       makeElFocusable: function (e) {
//         return e.attr("tabIndex", "0"), e;
//       },
//       makeElNotFocusable: function (e) {
//         return e.attr("tabIndex", "-1"), e;
//       },
//       addElRole: function (e, t) {
//         return e.attr("role", t), e;
//       },
//       addElRoleDescription: function (e, t) {
//         return e.attr("aria-roledescription", t), e;
//       },
//       addElControls: function (e, t) {
//         return e.attr("aria-controls", t), e;
//       },
//       addElLabel: function (e, t) {
//         return e.attr("aria-label", t), e;
//       },
//       addElId: function (e, t) {
//         return e.attr("id", t), e;
//       },
//       addElLive: function (e, t) {
//         return e.attr("aria-live", t), e;
//       },
//       disableEl: function (e) {
//         return e.attr("aria-disabled", !0), e;
//       },
//       enableEl: function (e) {
//         return e.attr("aria-disabled", !1), e;
//       },
//       onEnterOrSpaceKey: function (e) {
//         if (13 === e.keyCode || 32 === e.keyCode) {
//           var t = this.params.a11y,
//             i = C(e.target);
//           this.navigation &&
//             this.navigation.$nextEl &&
//             i.is(this.navigation.$nextEl) &&
//             ((this.isEnd && !this.params.loop) || this.slideNext(),
//             this.isEnd
//               ? this.a11y.notify(t.lastSlideMessage)
//               : this.a11y.notify(t.nextSlideMessage)),
//             this.navigation &&
//               this.navigation.$prevEl &&
//               i.is(this.navigation.$prevEl) &&
//               ((this.isBeginning && !this.params.loop) || this.slidePrev(),
//               this.isBeginning
//                 ? this.a11y.notify(t.firstSlideMessage)
//                 : this.a11y.notify(t.prevSlideMessage)),
//             this.pagination &&
//               i.is(A(this.params.pagination.bulletClass)) &&
//               i[0].click();
//         }
//       },
//       notify: function (e) {
//         var t = this.a11y.liveRegion;
//         0 !== t.length && (t.html(""), t.html(e));
//       },
//       updateNavigation: function () {
//         if (!this.params.loop && this.navigation) {
//           var e = this.navigation,
//             t = e.$nextEl,
//             i = e.$prevEl;
//           i &&
//             i.length > 0 &&
//             (this.isBeginning
//               ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i))
//               : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))),
//             t &&
//               t.length > 0 &&
//               (this.isEnd
//                 ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t))
//                 : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
//         }
//       },
//       updatePagination: function () {
//         var e = this,
//           t = e.params.a11y;
//         e.pagination &&
//           e.params.pagination.clickable &&
//           e.pagination.bullets &&
//           e.pagination.bullets.length &&
//           e.pagination.bullets.each(function (i) {
//             var n = C(i);
//             e.a11y.makeElFocusable(n),
//               e.params.pagination.renderBullet ||
//                 (e.a11y.addElRole(n, "button"),
//                 e.a11y.addElLabel(
//                   n,
//                   t.paginationBulletMessage.replace(
//                     /\{\{index\}\}/,
//                     n.index() + 1
//                   )
//                 ));
//           });
//       },
//       init: function () {
//         var e = this,
//           t = e.params.a11y;
//         e.$el.append(e.a11y.liveRegion);
//         var i = e.$el;
//         t.containerRoleDescriptionMessage &&
//           e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage),
//           t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
//         var n = e.$wrapperEl,
//           s = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
//           r = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
//         e.a11y.addElId(n, s),
//           e.a11y.addElLive(n, r),
//           t.itemRoleDescriptionMessage &&
//             e.a11y.addElRoleDescription(
//               C(e.slides),
//               t.itemRoleDescriptionMessage
//             ),
//           e.a11y.addElRole(C(e.slides), t.slideRole);
//         var a,
//           o,
//           l = e.params.loop
//             ? e.slides.filter(function (t) {
//                 return !t.classList.contains(e.params.slideDuplicateClass);
//               }).length
//             : e.slides.length;
//         e.slides.each(function (i, n) {
//           var s = C(i),
//             r = e.params.loop
//               ? parseInt(s.attr("data-swiper-slide-index"), 10)
//               : n,
//             a = t.slideLabelMessage
//               .replace(/\{\{index\}\}/, r + 1)
//               .replace(/\{\{slidesLength\}\}/, l);
//           e.a11y.addElLabel(s, a);
//         }),
//           e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl),
//           e.navigation && e.navigation.$prevEl && (o = e.navigation.$prevEl),
//           a &&
//             a.length &&
//             (e.a11y.makeElFocusable(a),
//             "BUTTON" !== a[0].tagName &&
//               (e.a11y.addElRole(a, "button"),
//               a.on("keydown", e.a11y.onEnterOrSpaceKey)),
//             e.a11y.addElLabel(a, t.nextSlideMessage),
//             e.a11y.addElControls(a, s)),
//           o &&
//             o.length &&
//             (e.a11y.makeElFocusable(o),
//             "BUTTON" !== o[0].tagName &&
//               (e.a11y.addElRole(o, "button"),
//               o.on("keydown", e.a11y.onEnterOrSpaceKey)),
//             e.a11y.addElLabel(o, t.prevSlideMessage),
//             e.a11y.addElControls(o, s)),
//           e.pagination &&
//             e.params.pagination.clickable &&
//             e.pagination.bullets &&
//             e.pagination.bullets.length &&
//             e.pagination.$el.on(
//               "keydown",
//               A(e.params.pagination.bulletClass),
//               e.a11y.onEnterOrSpaceKey
//             );
//       },
//       destroy: function () {
//         var e, t;
//         this.a11y.liveRegion &&
//           this.a11y.liveRegion.length > 0 &&
//           this.a11y.liveRegion.remove(),
//           this.navigation &&
//             this.navigation.$nextEl &&
//             (e = this.navigation.$nextEl),
//           this.navigation &&
//             this.navigation.$prevEl &&
//             (t = this.navigation.$prevEl),
//           e && e.off("keydown", this.a11y.onEnterOrSpaceKey),
//           t && t.off("keydown", this.a11y.onEnterOrSpaceKey),
//           this.pagination &&
//             this.params.pagination.clickable &&
//             this.pagination.bullets &&
//             this.pagination.bullets.length &&
//             this.pagination.$el.off(
//               "keydown",
//               A(this.params.pagination.bulletClass),
//               this.a11y.onEnterOrSpaceKey
//             );
//       },
//     };
//     function Ce() {
//       return (Ce =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var Se = {
//       init: function () {
//         var e = l();
//         if (this.params.history) {
//           if (!e.history || !e.history.pushState)
//             return (
//               (this.params.history.enabled = !1),
//               void (this.params.hashNavigation.enabled = !0)
//             );
//           var t = this.history;
//           (t.initialized = !0),
//             (t.paths = Se.getPathValues(this.params.url)),
//             (t.paths.key || t.paths.value) &&
//               (t.scrollToSlide(
//                 0,
//                 t.paths.value,
//                 this.params.runCallbacksOnInit
//               ),
//               this.params.history.replaceState ||
//                 e.addEventListener(
//                   "popstate",
//                   this.history.setHistoryPopState
//                 ));
//         }
//       },
//       destroy: function () {
//         var e = l();
//         this.params.history.replaceState ||
//           e.removeEventListener("popstate", this.history.setHistoryPopState);
//       },
//       setHistoryPopState: function () {
//         (this.history.paths = Se.getPathValues(this.params.url)),
//           this.history.scrollToSlide(
//             this.params.speed,
//             this.history.paths.value,
//             !1
//           );
//       },
//       getPathValues: function (e) {
//         var t = l(),
//           i = (e ? new URL(e) : t.location).pathname
//             .slice(1)
//             .split("/")
//             .filter(function (e) {
//               return "" !== e;
//             }),
//           n = i.length;
//         return { key: i[n - 2], value: i[n - 1] };
//       },
//       setHistory: function (e, t) {
//         var i = l();
//         if (this.history.initialized && this.params.history.enabled) {
//           var n;
//           n = this.params.url ? new URL(this.params.url) : i.location;
//           var s = this.slides.eq(t),
//             r = Se.slugify(s.attr("data-history"));
//           if (this.params.history.root.length > 0) {
//             var a = this.params.history.root;
//             "/" === a[a.length - 1] && (a = a.slice(0, a.length - 1)),
//               (r = a + "/" + e + "/" + r);
//           } else n.pathname.includes(e) || (r = e + "/" + r);
//           var o = i.history.state;
//           (o && o.value === r) ||
//             (this.params.history.replaceState
//               ? i.history.replaceState({ value: r }, null, r)
//               : i.history.pushState({ value: r }, null, r));
//         }
//       },
//       slugify: function (e) {
//         return e
//           .toString()
//           .replace(/\s+/g, "-")
//           .replace(/[^\w-]+/g, "")
//           .replace(/--+/g, "-")
//           .replace(/^-+/, "")
//           .replace(/-+$/, "");
//       },
//       scrollToSlide: function (e, t, i) {
//         if (t)
//           for (var n = 0, s = this.slides.length; n < s; n += 1) {
//             var r = this.slides.eq(n);
//             if (
//               Se.slugify(r.attr("data-history")) === t &&
//               !r.hasClass(this.params.slideDuplicateClass)
//             ) {
//               var a = r.index();
//               this.slideTo(a, e, i);
//             }
//           }
//         else this.slideTo(0, e, i);
//       },
//     };
//     function Me() {
//       return (Me =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var ke = {
//       onHashChange: function () {
//         var e = a();
//         this.emit("hashChange");
//         var t = e.location.hash.replace("#", "");
//         if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
//           var i = this.$wrapperEl
//             .children("." + this.params.slideClass + '[data-hash="' + t + '"]')
//             .index();
//           if (void 0 === i) return;
//           this.slideTo(i);
//         }
//       },
//       setHash: function () {
//         var e = l(),
//           t = a();
//         if (
//           this.hashNavigation.initialized &&
//           this.params.hashNavigation.enabled
//         )
//           if (
//             this.params.hashNavigation.replaceState &&
//             e.history &&
//             e.history.replaceState
//           )
//             e.history.replaceState(
//               null,
//               null,
//               "#" + this.slides.eq(this.activeIndex).attr("data-hash") || !1
//             ),
//               this.emit("hashSet");
//           else {
//             var i = this.slides.eq(this.activeIndex),
//               n = i.attr("data-hash") || i.attr("data-history");
//             (t.location.hash = n || ""), this.emit("hashSet");
//           }
//       },
//       init: function () {
//         var e = a(),
//           t = l();
//         if (
//           !(
//             !this.params.hashNavigation.enabled ||
//             (this.params.history && this.params.history.enabled)
//           )
//         ) {
//           this.hashNavigation.initialized = !0;
//           var i = e.location.hash.replace("#", "");
//           if (i)
//             for (var n = 0, s = this.slides.length; n < s; n += 1) {
//               var r = this.slides.eq(n);
//               if (
//                 (r.attr("data-hash") || r.attr("data-history")) === i &&
//                 !r.hasClass(this.params.slideDuplicateClass)
//               ) {
//                 var o = r.index();
//                 this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
//               }
//             }
//           this.params.hashNavigation.watchState &&
//             C(t).on("hashchange", this.hashNavigation.onHashChange);
//         }
//       },
//       destroy: function () {
//         var e = l();
//         this.params.hashNavigation.watchState &&
//           C(e).off("hashchange", this.hashNavigation.onHashChange);
//       },
//     };
//     function Pe() {
//       return (Pe =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var Le = {
//       run: function () {
//         var e = this,
//           t = e.slides.eq(e.activeIndex),
//           i = e.params.autoplay.delay;
//         t.attr("data-swiper-autoplay") &&
//           (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
//           clearTimeout(e.autoplay.timeout),
//           (e.autoplay.timeout = S(function () {
//             var t;
//             e.params.autoplay.reverseDirection
//               ? e.params.loop
//                 ? (e.loopFix(),
//                   (t = e.slidePrev(e.params.speed, !0, !0)),
//                   e.emit("autoplay"))
//                 : e.isBeginning
//                 ? e.params.autoplay.stopOnLastSlide
//                   ? e.autoplay.stop()
//                   : ((t = e.slideTo(
//                       e.slides.length - 1,
//                       e.params.speed,
//                       !0,
//                       !0
//                     )),
//                     e.emit("autoplay"))
//                 : ((t = e.slidePrev(e.params.speed, !0, !0)),
//                   e.emit("autoplay"))
//               : e.params.loop
//               ? (e.loopFix(),
//                 (t = e.slideNext(e.params.speed, !0, !0)),
//                 e.emit("autoplay"))
//               : e.isEnd
//               ? e.params.autoplay.stopOnLastSlide
//                 ? e.autoplay.stop()
//                 : ((t = e.slideTo(0, e.params.speed, !0, !0)),
//                   e.emit("autoplay"))
//               : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
//               ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
//                 e.autoplay.run();
//           }, i));
//       },
//       start: function () {
//         return (
//           void 0 === this.autoplay.timeout &&
//           !this.autoplay.running &&
//           ((this.autoplay.running = !0),
//           this.emit("autoplayStart"),
//           this.autoplay.run(),
//           !0)
//         );
//       },
//       stop: function () {
//         return (
//           !!this.autoplay.running &&
//           void 0 !== this.autoplay.timeout &&
//           (this.autoplay.timeout &&
//             (clearTimeout(this.autoplay.timeout),
//             (this.autoplay.timeout = void 0)),
//           (this.autoplay.running = !1),
//           this.emit("autoplayStop"),
//           !0)
//         );
//       },
//       pause: function (e) {
//         var t = this;
//         t.autoplay.running &&
//           (t.autoplay.paused ||
//             (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
//             (t.autoplay.paused = !0),
//             0 !== e && t.params.autoplay.waitForTransition
//               ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
//                   t.$wrapperEl[0].addEventListener(
//                     e,
//                     t.autoplay.onTransitionEnd
//                   );
//                 })
//               : ((t.autoplay.paused = !1), t.autoplay.run())));
//       },
//       onVisibilityChange: function () {
//         var e = a();
//         "hidden" === e.visibilityState &&
//           this.autoplay.running &&
//           this.autoplay.pause(),
//           "visible" === e.visibilityState &&
//             this.autoplay.paused &&
//             (this.autoplay.run(), (this.autoplay.paused = !1));
//       },
//       onTransitionEnd: function (e) {
//         var t = this;
//         t &&
//           !t.destroyed &&
//           t.$wrapperEl &&
//           e.target === t.$wrapperEl[0] &&
//           (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
//             t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
//           }),
//           (t.autoplay.paused = !1),
//           t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
//       },
//       onMouseEnter: function () {
//         var e = this;
//         e.params.autoplay.disableOnInteraction
//           ? e.autoplay.stop()
//           : e.autoplay.pause(),
//           ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
//             e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
//           });
//       },
//       onMouseLeave: function () {
//         this.params.autoplay.disableOnInteraction ||
//           ((this.autoplay.paused = !1), this.autoplay.run());
//       },
//       attachMouseEvents: function () {
//         this.params.autoplay.pauseOnMouseEnter &&
//           (this.$el.on("mouseenter", this.autoplay.onMouseEnter),
//           this.$el.on("mouseleave", this.autoplay.onMouseLeave));
//       },
//       detachMouseEvents: function () {
//         this.$el.off("mouseenter", this.autoplay.onMouseEnter),
//           this.$el.off("mouseleave", this.autoplay.onMouseLeave);
//       },
//     };
//     function Oe() {
//       return (Oe =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var ze = {
//       setTranslate: function () {
//         for (var e = this.slides, t = 0; t < e.length; t += 1) {
//           var i = this.slides.eq(t),
//             n = -i[0].swiperSlideOffset;
//           this.params.virtualTranslate || (n -= this.translate);
//           var s = 0;
//           this.isHorizontal() || ((s = n), (n = 0));
//           var r = this.params.fadeEffect.crossFade
//             ? Math.max(1 - Math.abs(i[0].progress), 0)
//             : 1 + Math.min(Math.max(i[0].progress, -1), 0);
//           i.css({ opacity: r }).transform(
//             "translate3d(" + n + "px, " + s + "px, 0px)"
//           );
//         }
//       },
//       setTransition: function (e) {
//         var t = this,
//           i = t.slides,
//           n = t.$wrapperEl;
//         if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
//           var s = !1;
//           i.transitionEnd(function () {
//             if (!s && t && !t.destroyed) {
//               (s = !0), (t.animating = !1);
//               for (
//                 var e = ["webkitTransitionEnd", "transitionend"], i = 0;
//                 i < e.length;
//                 i += 1
//               )
//                 n.trigger(e[i]);
//             }
//           });
//         }
//       },
//     };
//     function Ae() {
//       return (Ae =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var De = {
//       setTranslate: function () {
//         var e,
//           t = this.$el,
//           i = this.$wrapperEl,
//           n = this.slides,
//           s = this.width,
//           r = this.height,
//           a = this.rtlTranslate,
//           o = this.size,
//           l = this.browser,
//           u = this.params.cubeEffect,
//           d = this.isHorizontal(),
//           c = this.virtual && this.params.virtual.enabled,
//           h = 0;
//         u.shadow &&
//           (d
//             ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
//                 ((e = C('<div class="swiper-cube-shadow"></div>')),
//                 i.append(e)),
//               e.css({ height: s + "px" }))
//             : 0 === (e = t.find(".swiper-cube-shadow")).length &&
//               ((e = C('<div class="swiper-cube-shadow"></div>')), t.append(e)));
//         for (var p = 0; p < n.length; p += 1) {
//           var f = n.eq(p),
//             v = p;
//           c && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
//           var m = 90 * v,
//             g = Math.floor(m / 360);
//           a && ((m = -m), (g = Math.floor(-m / 360)));
//           var y = Math.max(Math.min(f[0].progress, 1), -1),
//             b = 0,
//             w = 0,
//             x = 0;
//           v % 4 == 0
//             ? ((b = 4 * -g * o), (x = 0))
//             : (v - 1) % 4 == 0
//             ? ((b = 0), (x = 4 * -g * o))
//             : (v - 2) % 4 == 0
//             ? ((b = o + 4 * g * o), (x = o))
//             : (v - 3) % 4 == 0 && ((b = -o), (x = 3 * o + 4 * o * g)),
//             a && (b = -b),
//             d || ((w = b), (b = 0));
//           var E =
//             "rotateX(" +
//             (d ? 0 : -m) +
//             "deg) rotateY(" +
//             (d ? m : 0) +
//             "deg) translate3d(" +
//             b +
//             "px, " +
//             w +
//             "px, " +
//             x +
//             "px)";
//           if (
//             (y <= 1 &&
//               y > -1 &&
//               ((h = 90 * v + 90 * y), a && (h = 90 * -v - 90 * y)),
//             f.transform(E),
//             u.slideShadows)
//           ) {
//             var T = d
//                 ? f.find(".swiper-slide-shadow-left")
//                 : f.find(".swiper-slide-shadow-top"),
//               S = d
//                 ? f.find(".swiper-slide-shadow-right")
//                 : f.find(".swiper-slide-shadow-bottom");
//             0 === T.length &&
//               ((T = C(
//                 '<div class="swiper-slide-shadow-' +
//                   (d ? "left" : "top") +
//                   '"></div>'
//               )),
//               f.append(T)),
//               0 === S.length &&
//                 ((S = C(
//                   '<div class="swiper-slide-shadow-' +
//                     (d ? "right" : "bottom") +
//                     '"></div>'
//                 )),
//                 f.append(S)),
//               T.length && (T[0].style.opacity = Math.max(-y, 0)),
//               S.length && (S[0].style.opacity = Math.max(y, 0));
//           }
//         }
//         if (
//           (i.css({
//             "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
//             "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
//             "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
//             "transform-origin": "50% 50% -" + o / 2 + "px",
//           }),
//           u.shadow)
//         )
//           if (d)
//             e.transform(
//               "translate3d(0px, " +
//                 (s / 2 + u.shadowOffset) +
//                 "px, " +
//                 -s / 2 +
//                 "px) rotateX(90deg) rotateZ(0deg) scale(" +
//                 u.shadowScale +
//                 ")"
//             );
//           else {
//             var M = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
//               k =
//                 1.5 -
//                 (Math.sin((2 * M * Math.PI) / 360) / 2 +
//                   Math.cos((2 * M * Math.PI) / 360) / 2),
//               P = u.shadowScale,
//               L = u.shadowScale / k,
//               O = u.shadowOffset;
//             e.transform(
//               "scale3d(" +
//                 P +
//                 ", 1, " +
//                 L +
//                 ") translate3d(0px, " +
//                 (r / 2 + O) +
//                 "px, " +
//                 -r / 2 / L +
//                 "px) rotateX(-90deg)"
//             );
//           }
//         var z = l.isSafari || l.isWebView ? -o / 2 : 0;
//         i.transform(
//           "translate3d(0px,0," +
//             z +
//             "px) rotateX(" +
//             (this.isHorizontal() ? 0 : h) +
//             "deg) rotateY(" +
//             (this.isHorizontal() ? -h : 0) +
//             "deg)"
//         );
//       },
//       setTransition: function (e) {
//         var t = this.$el;
//         this.slides
//           .transition(e)
//           .find(
//             ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
//           )
//           .transition(e),
//           this.params.cubeEffect.shadow &&
//             !this.isHorizontal() &&
//             t.find(".swiper-cube-shadow").transition(e);
//       },
//     };
//     function $e() {
//       return ($e =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var Ne = {
//       setTranslate: function () {
//         for (
//           var e = this.slides, t = this.rtlTranslate, i = 0;
//           i < e.length;
//           i += 1
//         ) {
//           var n = e.eq(i),
//             s = n[0].progress;
//           this.params.flipEffect.limitRotation &&
//             (s = Math.max(Math.min(n[0].progress, 1), -1));
//           var r = -180 * s,
//             a = 0,
//             o = -n[0].swiperSlideOffset,
//             l = 0;
//           if (
//             (this.isHorizontal()
//               ? t && (r = -r)
//               : ((l = o), (o = 0), (a = -r), (r = 0)),
//             (n[0].style.zIndex = -Math.abs(Math.round(s)) + e.length),
//             this.params.flipEffect.slideShadows)
//           ) {
//             var u = this.isHorizontal()
//                 ? n.find(".swiper-slide-shadow-left")
//                 : n.find(".swiper-slide-shadow-top"),
//               d = this.isHorizontal()
//                 ? n.find(".swiper-slide-shadow-right")
//                 : n.find(".swiper-slide-shadow-bottom");
//             0 === u.length &&
//               ((u = C(
//                 '<div class="swiper-slide-shadow-' +
//                   (this.isHorizontal() ? "left" : "top") +
//                   '"></div>'
//               )),
//               n.append(u)),
//               0 === d.length &&
//                 ((d = C(
//                   '<div class="swiper-slide-shadow-' +
//                     (this.isHorizontal() ? "right" : "bottom") +
//                     '"></div>'
//                 )),
//                 n.append(d)),
//               u.length && (u[0].style.opacity = Math.max(-s, 0)),
//               d.length && (d[0].style.opacity = Math.max(s, 0));
//           }
//           n.transform(
//             "translate3d(" +
//               o +
//               "px, " +
//               l +
//               "px, 0px) rotateX(" +
//               a +
//               "deg) rotateY(" +
//               r +
//               "deg)"
//           );
//         }
//       },
//       setTransition: function (e) {
//         var t = this,
//           i = t.slides,
//           n = t.activeIndex,
//           s = t.$wrapperEl;
//         if (
//           (i
//             .transition(e)
//             .find(
//               ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
//             )
//             .transition(e),
//           t.params.virtualTranslate && 0 !== e)
//         ) {
//           var r = !1;
//           i.eq(n).transitionEnd(function () {
//             if (!r && t && !t.destroyed) {
//               (r = !0), (t.animating = !1);
//               for (
//                 var e = ["webkitTransitionEnd", "transitionend"], i = 0;
//                 i < e.length;
//                 i += 1
//               )
//                 s.trigger(e[i]);
//             }
//           });
//         }
//       },
//     };
//     function Ie() {
//       return (Ie =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var je = {
//       setTranslate: function () {
//         for (
//           var e = this.width,
//             t = this.height,
//             i = this.slides,
//             n = this.slidesSizesGrid,
//             s = this.params.coverflowEffect,
//             r = this.isHorizontal(),
//             a = this.translate,
//             o = r ? e / 2 - a : t / 2 - a,
//             l = r ? s.rotate : -s.rotate,
//             u = s.depth,
//             d = 0,
//             c = i.length;
//           d < c;
//           d += 1
//         ) {
//           var h = i.eq(d),
//             p = n[d],
//             f = ((o - h[0].swiperSlideOffset - p / 2) / p) * s.modifier,
//             v = r ? l * f : 0,
//             m = r ? 0 : l * f,
//             g = -u * Math.abs(f),
//             y = s.stretch;
//           "string" == typeof y &&
//             -1 !== y.indexOf("%") &&
//             (y = (parseFloat(s.stretch) / 100) * p);
//           var b = r ? 0 : y * f,
//             w = r ? y * f : 0,
//             x = 1 - (1 - s.scale) * Math.abs(f);
//           Math.abs(w) < 0.001 && (w = 0),
//             Math.abs(b) < 0.001 && (b = 0),
//             Math.abs(g) < 0.001 && (g = 0),
//             Math.abs(v) < 0.001 && (v = 0),
//             Math.abs(m) < 0.001 && (m = 0),
//             Math.abs(x) < 0.001 && (x = 0);
//           var E =
//             "translate3d(" +
//             w +
//             "px," +
//             b +
//             "px," +
//             g +
//             "px)  rotateX(" +
//             m +
//             "deg) rotateY(" +
//             v +
//             "deg) scale(" +
//             x +
//             ")";
//           if (
//             (h.transform(E),
//             (h[0].style.zIndex = 1 - Math.abs(Math.round(f))),
//             s.slideShadows)
//           ) {
//             var T = r
//                 ? h.find(".swiper-slide-shadow-left")
//                 : h.find(".swiper-slide-shadow-top"),
//               S = r
//                 ? h.find(".swiper-slide-shadow-right")
//                 : h.find(".swiper-slide-shadow-bottom");
//             0 === T.length &&
//               ((T = C(
//                 '<div class="swiper-slide-shadow-' +
//                   (r ? "left" : "top") +
//                   '"></div>'
//               )),
//               h.append(T)),
//               0 === S.length &&
//                 ((S = C(
//                   '<div class="swiper-slide-shadow-' +
//                     (r ? "right" : "bottom") +
//                     '"></div>'
//                 )),
//                 h.append(S)),
//               T.length && (T[0].style.opacity = f > 0 ? f : 0),
//               S.length && (S[0].style.opacity = -f > 0 ? -f : 0);
//           }
//         }
//       },
//       setTransition: function (e) {
//         this.slides
//           .transition(e)
//           .find(
//             ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
//           )
//           .transition(e);
//       },
//     };
//     function He() {
//       return (He =
//         Object.assign ||
//         function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var i = arguments[t];
//             for (var n in i)
//               Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
//           }
//           return e;
//         }).apply(this, arguments);
//     }
//     var qe = {
//         init: function () {
//           var e = this.params.thumbs;
//           if (this.thumbs.initialized) return !1;
//           this.thumbs.initialized = !0;
//           var t = this.constructor;
//           return (
//             e.swiper instanceof t
//               ? ((this.thumbs.swiper = e.swiper),
//                 O(this.thumbs.swiper.originalParams, {
//                   watchSlidesProgress: !0,
//                   slideToClickedSlide: !1,
//                 }),
//                 O(this.thumbs.swiper.params, {
//                   watchSlidesProgress: !0,
//                   slideToClickedSlide: !1,
//                 }))
//               : P(e.swiper) &&
//                 ((this.thumbs.swiper = new t(
//                   O({}, e.swiper, {
//                     watchSlidesVisibility: !0,
//                     watchSlidesProgress: !0,
//                     slideToClickedSlide: !1,
//                   })
//                 )),
//                 (this.thumbs.swiperCreated = !0)),
//             this.thumbs.swiper.$el.addClass(
//               this.params.thumbs.thumbsContainerClass
//             ),
//             this.thumbs.swiper.on("tap", this.thumbs.onThumbClick),
//             !0
//           );
//         },
//         onThumbClick: function () {
//           var e = this.thumbs.swiper;
//           if (e) {
//             var t = e.clickedIndex,
//               i = e.clickedSlide;
//             if (
//               !(
//                 (i &&
//                   C(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
//                 null == t
//               )
//             ) {
//               var n;
//               if (
//                 ((n = e.params.loop
//                   ? parseInt(
//                       C(e.clickedSlide).attr("data-swiper-slide-index"),
//                       10
//                     )
//                   : t),
//                 this.params.loop)
//               ) {
//                 var s = this.activeIndex;
//                 this.slides.eq(s).hasClass(this.params.slideDuplicateClass) &&
//                   (this.loopFix(),
//                   (this._clientLeft = this.$wrapperEl[0].clientLeft),
//                   (s = this.activeIndex));
//                 var r = this.slides
//                     .eq(s)
//                     .prevAll('[data-swiper-slide-index="' + n + '"]')
//                     .eq(0)
//                     .index(),
//                   a = this.slides
//                     .eq(s)
//                     .nextAll('[data-swiper-slide-index="' + n + '"]')
//                     .eq(0)
//                     .index();
//                 n = void 0 === r ? a : void 0 === a ? r : a - s < s - r ? a : r;
//               }
//               this.slideTo(n);
//             }
//           }
//         },
//         update: function (e) {
//           var t = this.thumbs.swiper;
//           if (t) {
//             var i =
//                 "auto" === t.params.slidesPerView
//                   ? t.slidesPerViewDynamic()
//                   : t.params.slidesPerView,
//               n = this.params.thumbs.autoScrollOffset,
//               s = n && !t.params.loop;
//             if (this.realIndex !== t.realIndex || s) {
//               var r,
//                 a,
//                 o = t.activeIndex;
//               if (t.params.loop) {
//                 t.slides.eq(o).hasClass(t.params.slideDuplicateClass) &&
//                   (t.loopFix(),
//                   (t._clientLeft = t.$wrapperEl[0].clientLeft),
//                   (o = t.activeIndex));
//                 var l = t.slides
//                     .eq(o)
//                     .prevAll(
//                       '[data-swiper-slide-index="' + this.realIndex + '"]'
//                     )
//                     .eq(0)
//                     .index(),
//                   u = t.slides
//                     .eq(o)
//                     .nextAll(
//                       '[data-swiper-slide-index="' + this.realIndex + '"]'
//                     )
//                     .eq(0)
//                     .index();
//                 (r =
//                   void 0 === l
//                     ? u
//                     : void 0 === u
//                     ? l
//                     : u - o == o - l
//                     ? t.params.slidesPerGroup > 1
//                       ? u
//                       : o
//                     : u - o < o - l
//                     ? u
//                     : l),
//                   (a = this.activeIndex > this.previousIndex ? "next" : "prev");
//               } else
//                 a = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
//               s && (r += "next" === a ? n : -1 * n),
//                 t.visibleSlidesIndexes &&
//                   t.visibleSlidesIndexes.indexOf(r) < 0 &&
//                   (t.params.centeredSlides
//                     ? (r =
//                         r > o
//                           ? r - Math.floor(i / 2) + 1
//                           : r + Math.floor(i / 2) - 1)
//                     : r > o && t.params.slidesPerGroup,
//                   t.slideTo(r, e ? 0 : void 0));
//             }
//             var d = 1,
//               c = this.params.thumbs.slideThumbActiveClass;
//             if (
//               (this.params.slidesPerView > 1 &&
//                 !this.params.centeredSlides &&
//                 (d = this.params.slidesPerView),
//               this.params.thumbs.multipleActiveThumbs || (d = 1),
//               (d = Math.floor(d)),
//               t.slides.removeClass(c),
//               t.params.loop || (t.params.virtual && t.params.virtual.enabled))
//             )
//               for (var h = 0; h < d; h += 1)
//                 t.$wrapperEl
//                   .children(
//                     '[data-swiper-slide-index="' + (this.realIndex + h) + '"]'
//                   )
//                   .addClass(c);
//             else
//               for (var p = 0; p < d; p += 1)
//                 t.slides.eq(this.realIndex + p).addClass(c);
//           }
//         },
//       },
//       Be = [
//         ne,
//         ae,
//         {
//           name: "mousewheel",
//           params: {
//             mousewheel: {
//               enabled: !1,
//               releaseOnEdges: !1,
//               invert: !1,
//               forceToAxis: !1,
//               sensitivity: 1,
//               eventsTarget: "container",
//               thresholdDelta: null,
//               thresholdTime: null,
//             },
//           },
//           create: function () {
//             z(this, {
//               mousewheel: {
//                 enabled: !1,
//                 lastScrollTime: M(),
//                 lastEventBeforeSnap: void 0,
//                 recentWheelEvents: [],
//                 enable: oe.enable,
//                 disable: oe.disable,
//                 handle: oe.handle,
//                 handleMouseEnter: oe.handleMouseEnter,
//                 handleMouseLeave: oe.handleMouseLeave,
//                 animateSlider: oe.animateSlider,
//                 releaseScroll: oe.releaseScroll,
//               },
//             });
//           },
//           on: {
//             init: function (e) {
//               !e.params.mousewheel.enabled &&
//                 e.params.cssMode &&
//                 e.mousewheel.disable(),
//                 e.params.mousewheel.enabled && e.mousewheel.enable();
//             },
//             destroy: function (e) {
//               e.params.cssMode && e.mousewheel.enable(),
//                 e.mousewheel.enabled && e.mousewheel.disable();
//             },
//           },
//         },
//         {
//           name: "navigation",
//           params: {
//             navigation: {
//               nextEl: null,
//               prevEl: null,
//               hideOnClick: !1,
//               disabledClass: "swiper-button-disabled",
//               hiddenClass: "swiper-button-hidden",
//               lockClass: "swiper-button-lock",
//             },
//           },
//           create: function () {
//             z(this, { navigation: le({}, ue) });
//           },
//           on: {
//             init: function (e) {
//               e.navigation.init(), e.navigation.update();
//             },
//             toEdge: function (e) {
//               e.navigation.update();
//             },
//             fromEdge: function (e) {
//               e.navigation.update();
//             },
//             destroy: function (e) {
//               e.navigation.destroy();
//             },
//             "enable disable": function (e) {
//               var t = e.navigation,
//                 i = t.$nextEl,
//                 n = t.$prevEl;
//               i &&
//                 i[e.enabled ? "removeClass" : "addClass"](
//                   e.params.navigation.lockClass
//                 ),
//                 n &&
//                   n[e.enabled ? "removeClass" : "addClass"](
//                     e.params.navigation.lockClass
//                   );
//             },
//             click: function (e, t) {
//               var i = e.navigation,
//                 n = i.$nextEl,
//                 s = i.$prevEl,
//                 r = t.target;
//               if (
//                 e.params.navigation.hideOnClick &&
//                 !C(r).is(s) &&
//                 !C(r).is(n)
//               ) {
//                 if (
//                   e.pagination &&
//                   e.params.pagination &&
//                   e.params.pagination.clickable &&
//                   (e.pagination.el === r || e.pagination.el.contains(r))
//                 )
//                   return;
//                 var a;
//                 n
//                   ? (a = n.hasClass(e.params.navigation.hiddenClass))
//                   : s && (a = s.hasClass(e.params.navigation.hiddenClass)),
//                   !0 === a
//                     ? e.emit("navigationShow")
//                     : e.emit("navigationHide"),
//                   n && n.toggleClass(e.params.navigation.hiddenClass),
//                   s && s.toggleClass(e.params.navigation.hiddenClass);
//               }
//             },
//           },
//         },
//         {
//           name: "pagination",
//           params: {
//             pagination: {
//               el: null,
//               bulletElement: "span",
//               clickable: !1,
//               hideOnClick: !1,
//               renderBullet: null,
//               renderProgressbar: null,
//               renderFraction: null,
//               renderCustom: null,
//               progressbarOpposite: !1,
//               type: "bullets",
//               dynamicBullets: !1,
//               dynamicMainBullets: 1,
//               formatFractionCurrent: function (e) {
//                 return e;
//               },
//               formatFractionTotal: function (e) {
//                 return e;
//               },
//               bulletClass: "swiper-pagination-bullet",
//               bulletActiveClass: "swiper-pagination-bullet-active",
//               modifierClass: "swiper-pagination-",
//               currentClass: "swiper-pagination-current",
//               totalClass: "swiper-pagination-total",
//               hiddenClass: "swiper-pagination-hidden",
//               progressbarFillClass: "swiper-pagination-progressbar-fill",
//               progressbarOppositeClass:
//                 "swiper-pagination-progressbar-opposite",
//               clickableClass: "swiper-pagination-clickable",
//               lockClass: "swiper-pagination-lock",
//             },
//           },
//           create: function () {
//             z(this, { pagination: de({ dynamicBulletIndex: 0 }, ce) });
//           },
//           on: {
//             init: function (e) {
//               e.pagination.init(), e.pagination.render(), e.pagination.update();
//             },
//             activeIndexChange: function (e) {
//               (e.params.loop || void 0 === e.snapIndex) &&
//                 e.pagination.update();
//             },
//             snapIndexChange: function (e) {
//               e.params.loop || e.pagination.update();
//             },
//             slidesLengthChange: function (e) {
//               e.params.loop && (e.pagination.render(), e.pagination.update());
//             },
//             snapGridLengthChange: function (e) {
//               e.params.loop || (e.pagination.render(), e.pagination.update());
//             },
//             destroy: function (e) {
//               e.pagination.destroy();
//             },
//             "enable disable": function (e) {
//               var t = e.pagination.$el;
//               t &&
//                 t[e.enabled ? "removeClass" : "addClass"](
//                   e.params.pagination.lockClass
//                 );
//             },
//             click: function (e, t) {
//               var i = t.target;
//               if (
//                 e.params.pagination.el &&
//                 e.params.pagination.hideOnClick &&
//                 e.pagination.$el.length > 0 &&
//                 !C(i).hasClass(e.params.pagination.bulletClass)
//               ) {
//                 if (
//                   e.navigation &&
//                   ((e.navigation.nextEl && i === e.navigation.nextEl) ||
//                     (e.navigation.prevEl && i === e.navigation.prevEl))
//                 )
//                   return;
//                 !0 ===
//                 e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
//                   ? e.emit("paginationShow")
//                   : e.emit("paginationHide"),
//                   e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
//               }
//             },
//           },
//         },
//         {
//           name: "scrollbar",
//           params: {
//             scrollbar: {
//               el: null,
//               dragSize: "auto",
//               hide: !1,
//               draggable: !1,
//               snapOnRelease: !0,
//               lockClass: "swiper-scrollbar-lock",
//               dragClass: "swiper-scrollbar-drag",
//             },
//           },
//           create: function () {
//             z(this, {
//               scrollbar: he(
//                 { isTouched: !1, timeout: null, dragTimeout: null },
//                 pe
//               ),
//             });
//           },
//           on: {
//             init: function (e) {
//               e.scrollbar.init(),
//                 e.scrollbar.updateSize(),
//                 e.scrollbar.setTranslate();
//             },
//             update: function (e) {
//               e.scrollbar.updateSize();
//             },
//             resize: function (e) {
//               e.scrollbar.updateSize();
//             },
//             observerUpdate: function (e) {
//               e.scrollbar.updateSize();
//             },
//             setTranslate: function (e) {
//               e.scrollbar.setTranslate();
//             },
//             setTransition: function (e, t) {
//               e.scrollbar.setTransition(t);
//             },
//             "enable disable": function (e) {
//               var t = e.scrollbar.$el;
//               t &&
//                 t[e.enabled ? "removeClass" : "addClass"](
//                   e.params.scrollbar.lockClass
//                 );
//             },
//             destroy: function (e) {
//               e.scrollbar.destroy();
//             },
//           },
//         },
//         {
//           name: "parallax",
//           params: { parallax: { enabled: !1 } },
//           create: function () {
//             z(this, { parallax: fe({}, ve) });
//           },
//           on: {
//             beforeInit: function (e) {
//               e.params.parallax.enabled &&
//                 ((e.params.watchSlidesProgress = !0),
//                 (e.originalParams.watchSlidesProgress = !0));
//             },
//             init: function (e) {
//               e.params.parallax.enabled && e.parallax.setTranslate();
//             },
//             setTranslate: function (e) {
//               e.params.parallax.enabled && e.parallax.setTranslate();
//             },
//             setTransition: function (e, t) {
//               e.params.parallax.enabled && e.parallax.setTransition(t);
//             },
//           },
//         },
//         {
//           name: "zoom",
//           params: {
//             zoom: {
//               enabled: !1,
//               maxRatio: 3,
//               minRatio: 1,
//               toggle: !0,
//               containerClass: "swiper-zoom-container",
//               zoomedSlideClass: "swiper-slide-zoomed",
//             },
//           },
//           create: function () {
//             var e = this;
//             z(e, {
//               zoom: me(
//                 {
//                   enabled: !1,
//                   scale: 1,
//                   currentScale: 1,
//                   isScaling: !1,
//                   gesture: {
//                     $slideEl: void 0,
//                     slideWidth: void 0,
//                     slideHeight: void 0,
//                     $imageEl: void 0,
//                     $imageWrapEl: void 0,
//                     maxRatio: 3,
//                   },
//                   image: {
//                     isTouched: void 0,
//                     isMoved: void 0,
//                     currentX: void 0,
//                     currentY: void 0,
//                     minX: void 0,
//                     minY: void 0,
//                     maxX: void 0,
//                     maxY: void 0,
//                     width: void 0,
//                     height: void 0,
//                     startX: void 0,
//                     startY: void 0,
//                     touchesStart: {},
//                     touchesCurrent: {},
//                   },
//                   velocity: {
//                     x: void 0,
//                     y: void 0,
//                     prevPositionX: void 0,
//                     prevPositionY: void 0,
//                     prevTime: void 0,
//                   },
//                 },
//                 ge
//               ),
//             });
//             var t = 1;
//             Object.defineProperty(e.zoom, "scale", {
//               get: function () {
//                 return t;
//               },
//               set: function (i) {
//                 if (t !== i) {
//                   var n = e.zoom.gesture.$imageEl
//                       ? e.zoom.gesture.$imageEl[0]
//                       : void 0,
//                     s = e.zoom.gesture.$slideEl
//                       ? e.zoom.gesture.$slideEl[0]
//                       : void 0;
//                   e.emit("zoomChange", i, n, s);
//                 }
//                 t = i;
//               },
//             });
//           },
//           on: {
//             init: function (e) {
//               e.params.zoom.enabled && e.zoom.enable();
//             },
//             destroy: function (e) {
//               e.zoom.disable();
//             },
//             touchStart: function (e, t) {
//               e.zoom.enabled && e.zoom.onTouchStart(t);
//             },
//             touchEnd: function (e, t) {
//               e.zoom.enabled && e.zoom.onTouchEnd(t);
//             },
//             doubleTap: function (e, t) {
//               !e.animating &&
//                 e.params.zoom.enabled &&
//                 e.zoom.enabled &&
//                 e.params.zoom.toggle &&
//                 e.zoom.toggle(t);
//             },
//             transitionEnd: function (e) {
//               e.zoom.enabled &&
//                 e.params.zoom.enabled &&
//                 e.zoom.onTransitionEnd();
//             },
//             slideChange: function (e) {
//               e.zoom.enabled &&
//                 e.params.zoom.enabled &&
//                 e.params.cssMode &&
//                 e.zoom.onTransitionEnd();
//             },
//           },
//         },
//         {
//           name: "lazy",
//           params: {
//             lazy: {
//               checkInView: !1,
//               enabled: !1,
//               loadPrevNext: !1,
//               loadPrevNextAmount: 1,
//               loadOnTransitionStart: !1,
//               scrollingElement: "",
//               elementClass: "swiper-lazy",
//               loadingClass: "swiper-lazy-loading",
//               loadedClass: "swiper-lazy-loaded",
//               preloaderClass: "swiper-lazy-preloader",
//             },
//           },
//           create: function () {
//             z(this, { lazy: ye({ initialImageLoaded: !1 }, be) });
//           },
//           on: {
//             beforeInit: function (e) {
//               e.params.lazy.enabled &&
//                 e.params.preloadImages &&
//                 (e.params.preloadImages = !1);
//             },
//             init: function (e) {
//               e.params.lazy.enabled &&
//                 !e.params.loop &&
//                 0 === e.params.initialSlide &&
//                 (e.params.lazy.checkInView
//                   ? e.lazy.checkInViewOnLoad()
//                   : e.lazy.load());
//             },
//             scroll: function (e) {
//               e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
//             },
//             "scrollbarDragMove resize _freeModeNoMomentumRelease": function (
//               e
//             ) {
//               e.params.lazy.enabled && e.lazy.load();
//             },
//             transitionStart: function (e) {
//               e.params.lazy.enabled &&
//                 (e.params.lazy.loadOnTransitionStart ||
//                   (!e.params.lazy.loadOnTransitionStart &&
//                     !e.lazy.initialImageLoaded)) &&
//                 e.lazy.load();
//             },
//             transitionEnd: function (e) {
//               e.params.lazy.enabled &&
//                 !e.params.lazy.loadOnTransitionStart &&
//                 e.lazy.load();
//             },
//             slideChange: function (e) {
//               var t = e.params,
//                 i = t.lazy,
//                 n = t.cssMode,
//                 s = t.watchSlidesVisibility,
//                 r = t.watchSlidesProgress,
//                 a = t.touchReleaseOnEdges,
//                 o = t.resistanceRatio;
//               i.enabled && (n || ((s || r) && (a || 0 === o))) && e.lazy.load();
//             },
//           },
//         },
//         {
//           name: "controller",
//           params: { controller: { control: void 0, inverse: !1, by: "slide" } },
//           create: function () {
//             z(this, {
//               controller: we({ control: this.params.controller.control }, xe),
//             });
//           },
//           on: {
//             update: function (e) {
//               e.controller.control &&
//                 e.controller.spline &&
//                 ((e.controller.spline = void 0), delete e.controller.spline);
//             },
//             resize: function (e) {
//               e.controller.control &&
//                 e.controller.spline &&
//                 ((e.controller.spline = void 0), delete e.controller.spline);
//             },
//             observerUpdate: function (e) {
//               e.controller.control &&
//                 e.controller.spline &&
//                 ((e.controller.spline = void 0), delete e.controller.spline);
//             },
//             setTranslate: function (e, t, i) {
//               e.controller.control && e.controller.setTranslate(t, i);
//             },
//             setTransition: function (e, t, i) {
//               e.controller.control && e.controller.setTransition(t, i);
//             },
//           },
//         },
//         {
//           name: "a11y",
//           params: {
//             a11y: {
//               enabled: !0,
//               notificationClass: "swiper-notification",
//               prevSlideMessage: "Previous slide",
//               nextSlideMessage: "Next slide",
//               firstSlideMessage: "This is the first slide",
//               lastSlideMessage: "This is the last slide",
//               paginationBulletMessage: "Go to slide {{index}}",
//               slideLabelMessage: "{{index}} / {{slidesLength}}",
//               containerMessage: null,
//               containerRoleDescriptionMessage: null,
//               itemRoleDescriptionMessage: null,
//               slideRole: "group",
//             },
//           },
//           create: function () {
//             z(this, {
//               a11y: Ee({}, Te, {
//                 liveRegion: C(
//                   '<span class="' +
//                     this.params.a11y.notificationClass +
//                     '" aria-live="assertive" aria-atomic="true"></span>'
//                 ),
//               }),
//             });
//           },
//           on: {
//             afterInit: function (e) {
//               e.params.a11y.enabled &&
//                 (e.a11y.init(), e.a11y.updateNavigation());
//             },
//             toEdge: function (e) {
//               e.params.a11y.enabled && e.a11y.updateNavigation();
//             },
//             fromEdge: function (e) {
//               e.params.a11y.enabled && e.a11y.updateNavigation();
//             },
//             paginationUpdate: function (e) {
//               e.params.a11y.enabled && e.a11y.updatePagination();
//             },
//             destroy: function (e) {
//               e.params.a11y.enabled && e.a11y.destroy();
//             },
//           },
//         },
//         {
//           name: "history",
//           params: {
//             history: { enabled: !1, root: "", replaceState: !1, key: "slides" },
//           },
//           create: function () {
//             z(this, { history: Ce({}, Se) });
//           },
//           on: {
//             init: function (e) {
//               e.params.history.enabled && e.history.init();
//             },
//             destroy: function (e) {
//               e.params.history.enabled && e.history.destroy();
//             },
//             "transitionEnd _freeModeNoMomentumRelease": function (e) {
//               e.history.initialized &&
//                 e.history.setHistory(e.params.history.key, e.activeIndex);
//             },
//             slideChange: function (e) {
//               e.history.initialized &&
//                 e.params.cssMode &&
//                 e.history.setHistory(e.params.history.key, e.activeIndex);
//             },
//           },
//         },
//         {
//           name: "hash-navigation",
//           params: {
//             hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
//           },
//           create: function () {
//             z(this, { hashNavigation: Me({ initialized: !1 }, ke) });
//           },
//           on: {
//             init: function (e) {
//               e.params.hashNavigation.enabled && e.hashNavigation.init();
//             },
//             destroy: function (e) {
//               e.params.hashNavigation.enabled && e.hashNavigation.destroy();
//             },
//             "transitionEnd _freeModeNoMomentumRelease": function (e) {
//               e.hashNavigation.initialized && e.hashNavigation.setHash();
//             },
//             slideChange: function (e) {
//               e.hashNavigation.initialized &&
//                 e.params.cssMode &&
//                 e.hashNavigation.setHash();
//             },
//           },
//         },
//         {
//           name: "autoplay",
//           params: {
//             autoplay: {
//               enabled: !1,
//               delay: 3e3,
//               waitForTransition: !0,
//               disableOnInteraction: !0,
//               stopOnLastSlide: !1,
//               reverseDirection: !1,
//               pauseOnMouseEnter: !1,
//             },
//           },
//           create: function () {
//             z(this, { autoplay: Pe({}, Le, { running: !1, paused: !1 }) });
//           },
//           on: {
//             init: function (e) {
//               e.params.autoplay.enabled &&
//                 (e.autoplay.start(),
//                 a().addEventListener(
//                   "visibilitychange",
//                   e.autoplay.onVisibilityChange
//                 ),
//                 e.autoplay.attachMouseEvents());
//             },
//             beforeTransitionStart: function (e, t, i) {
//               e.autoplay.running &&
//                 (i || !e.params.autoplay.disableOnInteraction
//                   ? e.autoplay.pause(t)
//                   : e.autoplay.stop());
//             },
//             sliderFirstMove: function (e) {
//               e.autoplay.running &&
//                 (e.params.autoplay.disableOnInteraction
//                   ? e.autoplay.stop()
//                   : e.autoplay.pause());
//             },
//             touchEnd: function (e) {
//               e.params.cssMode &&
//                 e.autoplay.paused &&
//                 !e.params.autoplay.disableOnInteraction &&
//                 e.autoplay.run();
//             },
//             destroy: function (e) {
//               e.autoplay.detachMouseEvents(),
//                 e.autoplay.running && e.autoplay.stop(),
//                 a().removeEventListener(
//                   "visibilitychange",
//                   e.autoplay.onVisibilityChange
//                 );
//             },
//           },
//         },
//         {
//           name: "effect-fade",
//           params: { fadeEffect: { crossFade: !1 } },
//           create: function () {
//             z(this, { fadeEffect: Oe({}, ze) });
//           },
//           on: {
//             beforeInit: function (e) {
//               if ("fade" === e.params.effect) {
//                 e.classNames.push(e.params.containerModifierClass + "fade");
//                 var t = {
//                   slidesPerView: 1,
//                   slidesPerColumn: 1,
//                   slidesPerGroup: 1,
//                   watchSlidesProgress: !0,
//                   spaceBetween: 0,
//                   virtualTranslate: !0,
//                 };
//                 O(e.params, t), O(e.originalParams, t);
//               }
//             },
//             setTranslate: function (e) {
//               "fade" === e.params.effect && e.fadeEffect.setTranslate();
//             },
//             setTransition: function (e, t) {
//               "fade" === e.params.effect && e.fadeEffect.setTransition(t);
//             },
//           },
//         },
//         {
//           name: "effect-cube",
//           params: {
//             cubeEffect: {
//               slideShadows: !0,
//               shadow: !0,
//               shadowOffset: 20,
//               shadowScale: 0.94,
//             },
//           },
//           create: function () {
//             z(this, { cubeEffect: Ae({}, De) });
//           },
//           on: {
//             beforeInit: function (e) {
//               if ("cube" === e.params.effect) {
//                 e.classNames.push(e.params.containerModifierClass + "cube"),
//                   e.classNames.push(e.params.containerModifierClass + "3d");
//                 var t = {
//                   slidesPerView: 1,
//                   slidesPerColumn: 1,
//                   slidesPerGroup: 1,
//                   watchSlidesProgress: !0,
//                   resistanceRatio: 0,
//                   spaceBetween: 0,
//                   centeredSlides: !1,
//                   virtualTranslate: !0,
//                 };
//                 O(e.params, t), O(e.originalParams, t);
//               }
//             },
//             setTranslate: function (e) {
//               "cube" === e.params.effect && e.cubeEffect.setTranslate();
//             },
//             setTransition: function (e, t) {
//               "cube" === e.params.effect && e.cubeEffect.setTransition(t);
//             },
//           },
//         },
//         {
//           name: "effect-flip",
//           params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
//           create: function () {
//             z(this, { flipEffect: $e({}, Ne) });
//           },
//           on: {
//             beforeInit: function (e) {
//               if ("flip" === e.params.effect) {
//                 e.classNames.push(e.params.containerModifierClass + "flip"),
//                   e.classNames.push(e.params.containerModifierClass + "3d");
//                 var t = {
//                   slidesPerView: 1,
//                   slidesPerColumn: 1,
//                   slidesPerGroup: 1,
//                   watchSlidesProgress: !0,
//                   spaceBetween: 0,
//                   virtualTranslate: !0,
//                 };
//                 O(e.params, t), O(e.originalParams, t);
//               }
//             },
//             setTranslate: function (e) {
//               "flip" === e.params.effect && e.flipEffect.setTranslate();
//             },
//             setTransition: function (e, t) {
//               "flip" === e.params.effect && e.flipEffect.setTransition(t);
//             },
//           },
//         },
//         {
//           name: "effect-coverflow",
//           params: {
//             coverflowEffect: {
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               scale: 1,
//               modifier: 1,
//               slideShadows: !0,
//             },
//           },
//           create: function () {
//             z(this, { coverflowEffect: Ie({}, je) });
//           },
//           on: {
//             beforeInit: function (e) {
//               "coverflow" === e.params.effect &&
//                 (e.classNames.push(
//                   e.params.containerModifierClass + "coverflow"
//                 ),
//                 e.classNames.push(e.params.containerModifierClass + "3d"),
//                 (e.params.watchSlidesProgress = !0),
//                 (e.originalParams.watchSlidesProgress = !0));
//             },
//             setTranslate: function (e) {
//               "coverflow" === e.params.effect &&
//                 e.coverflowEffect.setTranslate();
//             },
//             setTransition: function (e, t) {
//               "coverflow" === e.params.effect &&
//                 e.coverflowEffect.setTransition(t);
//             },
//           },
//         },
//         {
//           name: "thumbs",
//           params: {
//             thumbs: {
//               swiper: null,
//               multipleActiveThumbs: !0,
//               autoScrollOffset: 0,
//               slideThumbActiveClass: "swiper-slide-thumb-active",
//               thumbsContainerClass: "swiper-container-thumbs",
//             },
//           },
//           create: function () {
//             z(this, { thumbs: He({ swiper: null, initialized: !1 }, qe) });
//           },
//           on: {
//             beforeInit: function (e) {
//               var t = e.params.thumbs;
//               t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
//             },
//             slideChange: function (e) {
//               e.thumbs.swiper && e.thumbs.update();
//             },
//             update: function (e) {
//               e.thumbs.swiper && e.thumbs.update();
//             },
//             resize: function (e) {
//               e.thumbs.swiper && e.thumbs.update();
//             },
//             observerUpdate: function (e) {
//               e.thumbs.swiper && e.thumbs.update();
//             },
//             setTransition: function (e, t) {
//               var i = e.thumbs.swiper;
//               i && i.setTransition(t);
//             },
//             beforeDestroy: function (e) {
//               var t = e.thumbs.swiper;
//               t && e.thumbs.swiperCreated && t && t.destroy();
//             },
//           },
//         },
//       ];
//     ee.use(Be);
//     var Re = i(0),
//       Ge = i.n(Re);
//     new ee(".swipergood", {
//       loop: !0,
//       slidesPerView: 1,
//       spaceBetween: 10,
//       autoplay: { delay: 5e3 },
//       longSwipesRatio: 0.5,
//       pagination: { clickable: !0, el: ".swiper-pagination", type: "bullets" },
//       navigation: {
//         nextEl: ".swiper3-button-next",
//         prevEl: ".swiper3-button-prev",
//       },
//       breakpoints: {
//         768: { slidesPerView: 2, spaceBetween: 0 },
//         1280: { slidesPerView: 5, spaceBetween: 0 },
//       },
//       scrollbar: { el: ".swiper-scrollbar" },
//     }),
//       new ee(".swiperportfolio", {
//         loop: !0,
//         slidesPerView: 1,
//         spaceBetween: 10,
//         autoplay: { delay: 5e3 },
//         longSwipesRatio: 0.5,
//         pagination: {
//           clickable: !0,
//           el: ".swiper-pagination",
//           type: "bullets",
//         },
//         navigation: {
//           nextEl: ".swiper2-button-next",
//           prevEl: ".swiper2-button-prev",
//         },
//         breakpoints: {},
//         scrollbar: { el: ".swiper-scrollbar" },
//       });
//     !(function (e) {
//       e(function () {
//         e("ul.tabs__caption").on("click", "li:not(.active)", function () {
//           e(this)
//             .addClass("active")
//             .siblings()
//             .removeClass("active")
//             .closest("div.tabs")
//             .find("div.tabs__content")
//             .removeClass("active")
//             .eq(e(this).index())
//             .addClass("active");
//         });
//       }),
//         (e.fn.moreNav = function () {
//           var t = e(this);
//           function i() {
//             var i = t.outerWidth(),
//               n = 0,
//               s = e('<li class="more"><a href="#">Еще</a><ul></ul></li>');
//             t.find(".more").length > 0 &&
//               (t.append(t.find(".more ul li")), t.find(".more").remove()),
//               e.each(t.find("li"), function (t, i) {
//                 var s = e(i).outerWidth();
//                 n += s;
//               }),
//               n > i &&
//                 (t.append(s),
//                 (i -= s.outerWidth()),
//                 (n = 0),
//                 e.each(t.find("li"), function (t, s) {
//                   var r = e(s).outerWidth();
//                   (n += r),
//                     e(s).is(".more") ||
//                       (n < i
//                         ? e(s).addClass("nav-item").removeClass("nav-item-more")
//                         : e(s)
//                             .addClass("nav-item-more")
//                             .removeClass("nav-item"));
//                 })),
//               s.find("ul").append(e(".nav-item-more"));
//           }
//           i(),
//             e(window).resize(function () {
//               i();
//             });
//         }),
//         e("#more-nav").moreNav();
//     })(Ge.a);
    // const We = new ee(".thumbnail-slider", {
    //     direction: "vertical",
    //     spaceBetween: 10,
    //     slidesPerView: 4,
    //     freeMode: !0,
    //     watchSlidesProgress: !0,
    //     breakpoints: { 768: { direction: "horizontal" } },
    //   }),
    //   Fe = new ee(".main-slider", {
    //     spaceBetween: 10,
    //     pagination: {
    //       clickable: !0,
    //       el: ".swiper2-pagination",
    //       type: "bullets",
    //     },
    //     navigation: {
    //       nextEl: ".swiper2-button-next",
    //       prevEl: ".swiper2-button-prev",
    //     },
    //     thumbs: { swiper: We },
    //   });
//    //  Ge()(".thumbnail").on("click", function () {
//    //    Ge()(".thumbnail").removeClass("active"), Ge()(this).addClass("active");
//    //    const e = Ge()(this).index();
//    //    Fe.slideTo(e);
//    //  }),
//       Ge()(".tab-btn").on("click", function () {
//         const e = Ge()(this).data("tab");
//         Ge()(".tab-btn").removeClass("active"),
//           Ge()(this).addClass("active"),
//           Ge()(".tab-content").removeClass("active"),
//           Ge()("#" + e).addClass("active");
//       }),
    //   document.addEventListener("DOMContentLoaded", function () {
        // document.querySelector(".range-slider");
        // const e = document.querySelector(".min-input"),
        //   t = document.querySelector(".max-input"),
        //   i = document.querySelector(".min-price"),
        //   n = document.querySelector(".max-price"),
        //   s = document.getElementsByClassName("filter-title");
        // for (let e = 0; e < s.length; e++)
        //   s[e].addEventListener(
        //     "click",
        //     function () {
        //       this.classList.toggle("filter-title_close");
        //       this.nextElementSibling;
        //       this.nextElementSibling.classList.toggle("filter-content_close");
        //     },
        //     !1
        //   );
//         let r = parseInt(i.value),
//           a = parseInt(n.value);
//         i.addEventListener("input", function () {
//           (r = parseInt(this.value)),
//             r > a && ((r = a), (this.value = r)),
//             (e.value = r);
//         }),
//           n.addEventListener("input", function () {
//             (a = parseInt(this.value)),
//               a < r && ((a = r), (this.value = a)),
//               (t.value = a);
//           }),
//           e.addEventListener("change", function () {
//             (r = parseInt(this.value)),
//               r < parseInt(i.min) && ((r = parseInt(i.min)), (this.value = r)),
//               (i.value = r);
//           }),
//           t.addEventListener("change", function () {
//             (a = parseInt(this.value)),
//               a > parseInt(n.max) && ((a = parseInt(n.max)), (this.value = a)),
//               (n.value = a);
//           });
//         document
//           .querySelector(".sorting-select")
//           .addEventListener("change", function () {
//             console.log("Сортировка по:", this.value);
//           });
//         document.querySelectorAll(".filter-checkbox input").forEach((e) => {
//           e.addEventListener("change", function () {
//             console.log("Фильтр изменен:", this.checked);
//           });
//         });
//         document.querySelectorAll(".category-btn").forEach((e) => {
//           e.addEventListener("click", function () {
//             console.log("Выбрана категория:", this.textContent);
//           });
//         });
//         document.querySelectorAll(".pagination-link").forEach((e) => {
//           e.addEventListener("click", function (e) {
//             e.preventDefault(),
//               console.log("Переход на страницу:", this.textContent);
//           });
//         });
//         document
//           .querySelector(".load-more")
//           .addEventListener("click", function () {
//             console.log("Загрузить еще товары");
//           });
//       });
//   },
// ]);
