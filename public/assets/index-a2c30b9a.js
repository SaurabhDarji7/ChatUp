function My(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Zp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Jp(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Jo = {},
  Ly = {
    get exports() {
      return Jo;
    },
    set exports(e) {
      Jo = e;
    },
  },
  Js = {},
  y = {},
  Ay = {
    get exports() {
      return y;
    },
    set exports(e) {
      y = e;
    },
  },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bi = Symbol.for("react.element"),
  Fy = Symbol.for("react.portal"),
  zy = Symbol.for("react.fragment"),
  By = Symbol.for("react.strict_mode"),
  Dy = Symbol.for("react.profiler"),
  Uy = Symbol.for("react.provider"),
  Wy = Symbol.for("react.context"),
  jy = Symbol.for("react.forward_ref"),
  Vy = Symbol.for("react.suspense"),
  Hy = Symbol.for("react.memo"),
  Ky = Symbol.for("react.lazy"),
  Pd = Symbol.iterator;
function qy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pd && e[Pd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var eh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  th = Object.assign,
  nh = {};
function po(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nh),
    (this.updater = n || eh);
}
po.prototype.isReactComponent = {};
po.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
po.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rh() {}
rh.prototype = po.prototype;
function Xu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nh),
    (this.updater = n || eh);
}
var Zu = (Xu.prototype = new rh());
Zu.constructor = Xu;
th(Zu, po.prototype);
Zu.isPureReactComponent = !0;
var Td = Array.isArray,
  oh = Object.prototype.hasOwnProperty,
  Ju = { current: null },
  ih = { key: !0, ref: !0, __self: !0, __source: !0 };
function sh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      oh.call(t, r) && !ih.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: bi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Ju.current,
  };
}
function Gy(e, t) {
  return {
    $$typeof: bi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ec(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bi;
}
function Qy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var $d = /\/+/g;
function oa(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qy("" + e.key)
    : t.toString(36);
}
function rs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case bi:
          case Fy:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + oa(s, 0) : r),
      Td(o)
        ? ((n = ""),
          e != null && (n = e.replace($d, "$&/") + "/"),
          rs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ec(o) &&
            (o = Gy(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace($d, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Td(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + oa(i, l);
      s += rs(i, t, n, a, o);
    }
  else if (((a = qy(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + oa(i, l++)), (s += rs(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ii(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    rs(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Yy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var tt = { current: null },
  os = { transition: null },
  Xy = {
    ReactCurrentDispatcher: tt,
    ReactCurrentBatchConfig: os,
    ReactCurrentOwner: Ju,
  };
te.Children = {
  map: Ii,
  forEach: function (e, t, n) {
    Ii(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ii(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ii(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ec(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
te.Component = po;
te.Fragment = zy;
te.Profiler = Dy;
te.PureComponent = Xu;
te.StrictMode = By;
te.Suspense = Vy;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xy;
te.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = th({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Ju.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      oh.call(t, a) &&
        !ih.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: bi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
te.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Uy, _context: e }),
    (e.Consumer = e)
  );
};
te.createElement = sh;
te.createFactory = function (e) {
  var t = sh.bind(null, e);
  return (t.type = e), t;
};
te.createRef = function () {
  return { current: null };
};
te.forwardRef = function (e) {
  return { $$typeof: jy, render: e };
};
te.isValidElement = ec;
te.lazy = function (e) {
  return { $$typeof: Ky, _payload: { _status: -1, _result: e }, _init: Yy };
};
te.memo = function (e, t) {
  return { $$typeof: Hy, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function (e) {
  var t = os.transition;
  os.transition = {};
  try {
    e();
  } finally {
    os.transition = t;
  }
};
te.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
te.useCallback = function (e, t) {
  return tt.current.useCallback(e, t);
};
te.useContext = function (e) {
  return tt.current.useContext(e);
};
te.useDebugValue = function () {};
te.useDeferredValue = function (e) {
  return tt.current.useDeferredValue(e);
};
te.useEffect = function (e, t) {
  return tt.current.useEffect(e, t);
};
te.useId = function () {
  return tt.current.useId();
};
te.useImperativeHandle = function (e, t, n) {
  return tt.current.useImperativeHandle(e, t, n);
};
te.useInsertionEffect = function (e, t) {
  return tt.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function (e, t) {
  return tt.current.useLayoutEffect(e, t);
};
te.useMemo = function (e, t) {
  return tt.current.useMemo(e, t);
};
te.useReducer = function (e, t, n) {
  return tt.current.useReducer(e, t, n);
};
te.useRef = function (e) {
  return tt.current.useRef(e);
};
te.useState = function (e) {
  return tt.current.useState(e);
};
te.useSyncExternalStore = function (e, t, n) {
  return tt.current.useSyncExternalStore(e, t, n);
};
te.useTransition = function () {
  return tt.current.useTransition();
};
te.version = "18.2.0";
(function (e) {
  e.exports = te;
})(Ay);
const tn = Zp(y),
  Jr = My({ __proto__: null, default: tn }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zy = y,
  Jy = Symbol.for("react.element"),
  e0 = Symbol.for("react.fragment"),
  t0 = Object.prototype.hasOwnProperty,
  n0 = Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  r0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function lh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) t0.call(t, r) && !r0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Jy,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: n0.current,
  };
}
Js.Fragment = e0;
Js.jsx = lh;
Js.jsxs = lh;
(function (e) {
  e.exports = Js;
})(Ly);
const o0 = Jo.Fragment,
  R = Jo.jsx,
  J = Jo.jsxs,
  i0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Fragment: o0, jsx: R, jsxs: J },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ws() {
  return (
    (ws = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ws.apply(this, arguments)
  );
}
var ir;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ir || (ir = {}));
const _d = "popstate";
function s0(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return Ua(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : uh(o);
  }
  return a0(t, n, null, e);
}
function ah(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function l0() {
  return Math.random().toString(36).substr(2, 8);
}
function Id(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ua(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ws(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ch(t) : t,
      { state: n, key: (t && t.key) || r || l0() }
    )
  );
}
function uh(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ch(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function a0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = ir.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), s.replaceState(ws({}, s.state, { idx: u }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    l = ir.Pop;
    let C = d(),
      h = C == null ? null : C - u;
    (u = C), a && a({ action: l, location: g.location, delta: h });
  }
  function f(C, h) {
    l = ir.Push;
    let c = Ua(g.location, C, h);
    n && n(c, C), (u = d() + 1);
    let m = Id(c, u),
      S = g.createHref(c);
    try {
      s.pushState(m, "", S);
    } catch {
      o.location.assign(S);
    }
    i && a && a({ action: l, location: g.location, delta: 1 });
  }
  function b(C, h) {
    l = ir.Replace;
    let c = Ua(g.location, C, h);
    n && n(c, C), (u = d());
    let m = Id(c, u),
      S = g.createHref(c);
    s.replaceState(m, "", S),
      i && a && a({ action: l, location: g.location, delta: 0 });
  }
  function v(C) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof C == "string" ? C : uh(C);
    return (
      ah(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, h)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(C) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(_d, p),
        (a = C),
        () => {
          o.removeEventListener(_d, p), (a = null);
        }
      );
    },
    createHref(C) {
      return t(o, C);
    },
    createURL: v,
    encodeLocation(C) {
      let h = v(C);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: f,
    replace: b,
    go(C) {
      return s.go(C);
    },
  };
  return g;
}
var Nd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Nd || (Nd = {}));
function u0(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const c0 = ["post", "put", "patch", "delete"];
[...c0];
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function d0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const f0 = typeof Object.is == "function" ? Object.is : d0,
  { useState: p0, useEffect: h0, useLayoutEffect: m0, useDebugValue: g0 } = Jr;
function y0(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = p0({ inst: { value: r, getSnapshot: t } });
  return (
    m0(() => {
      (o.value = r), (o.getSnapshot = t), ia(o) && i({ inst: o });
    }, [e, r, t]),
    h0(
      () => (
        ia(o) && i({ inst: o }),
        e(() => {
          ia(o) && i({ inst: o });
        })
      ),
      [e]
    ),
    g0(r),
    r
  );
}
function ia(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !f0(n, r);
  } catch {
    return !0;
  }
}
function v0(e, t, n) {
  return t();
}
const x0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  S0 = !x0,
  w0 = S0 ? v0 : y0;
"useSyncExternalStore" in Jr && ((e) => e.useSyncExternalStore)(Jr);
const b0 = y.createContext(null),
  dh = y.createContext(null);
function C0() {
  return y.useContext(dh) != null;
}
var Od;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(Od || (Od = {}));
var Md;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Md || (Md = {}));
function k0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = ir.Pop,
    navigator: i,
    static: s = !1,
  } = e;
  C0() && ah(!1);
  let l = t.replace(/^\/*/, "/"),
    a = y.useMemo(() => ({ basename: l, navigator: i, static: s }), [l, i, s]);
  typeof r == "string" && (r = ch(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: p = "",
      state: f = null,
      key: b = "default",
    } = r,
    v = y.useMemo(() => {
      let g = u0(u, l);
      return g == null
        ? null
        : { pathname: g, search: d, hash: p, state: f, key: b };
    }, [l, u, d, p, f, b]);
  return v == null
    ? null
    : y.createElement(
        b0.Provider,
        { value: a },
        y.createElement(dh.Provider, {
          children: n,
          value: { location: v, navigationType: o },
        })
      );
}
var Ld;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ld || (Ld = {}));
new Promise(() => {});
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function E0(e) {
  let { basename: t, children: n, window: r } = e,
    o = y.useRef();
  o.current == null && (o.current = s0({ window: r, v5Compat: !0 }));
  let i = o.current,
    [s, l] = y.useState({ action: i.action, location: i.location });
  return (
    y.useLayoutEffect(() => i.listen(l), [i]),
    y.createElement(k0, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: i,
    })
  );
}
var Ad;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Ad || (Ad = {}));
var Fd;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Fd || (Fd = {}));
var Wa = {},
  eo = {},
  R0 = {
    get exports() {
      return eo;
    },
    set exports(e) {
      eo = e;
    },
  },
  St = {},
  ja = {},
  P0 = {
    get exports() {
      return ja;
    },
    set exports(e) {
      ja = e;
    },
  },
  fh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, M) {
    var I = $.length;
    $.push(M);
    e: for (; 0 < I; ) {
      var D = (I - 1) >>> 1,
        G = $[D];
      if (0 < o(G, M)) ($[D] = M), ($[I] = G), (I = D);
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var M = $[0],
      I = $.pop();
    if (I !== M) {
      $[0] = I;
      e: for (var D = 0, G = $.length, ke = G >>> 1; D < ke; ) {
        var Q = 2 * (D + 1) - 1,
          fe = $[Q],
          oe = Q + 1,
          Oe = $[oe];
        if (0 > o(fe, I))
          oe < G && 0 > o(Oe, fe)
            ? (($[D] = Oe), ($[oe] = I), (D = oe))
            : (($[D] = fe), ($[Q] = I), (D = Q));
        else if (oe < G && 0 > o(Oe, I)) ($[D] = Oe), ($[oe] = I), (D = oe);
        else break e;
      }
    }
    return M;
  }
  function o($, M) {
    var I = $.sortIndex - M.sortIndex;
    return I !== 0 ? I : $.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    f = 3,
    b = !1,
    v = !1,
    g = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m($) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= $)
        r(u), (M.sortIndex = M.expirationTime), t(a, M);
      else break;
      M = n(u);
    }
  }
  function S($) {
    if (((g = !1), m($), !v))
      if (n(a) !== null) (v = !0), z(w);
      else {
        var M = n(u);
        M !== null && q(S, M.startTime - $);
      }
  }
  function w($, M) {
    (v = !1), g && ((g = !1), h(P), (P = -1)), (b = !0);
    var I = f;
    try {
      for (
        m(M), p = n(a);
        p !== null && (!(p.expirationTime > M) || ($ && !A()));

      ) {
        var D = p.callback;
        if (typeof D == "function") {
          (p.callback = null), (f = p.priorityLevel);
          var G = D(p.expirationTime <= M);
          (M = e.unstable_now()),
            typeof G == "function" ? (p.callback = G) : p === n(a) && r(a),
            m(M);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var ke = !0;
      else {
        var Q = n(u);
        Q !== null && q(S, Q.startTime - M), (ke = !1);
      }
      return ke;
    } finally {
      (p = null), (f = I), (b = !1);
    }
  }
  var k = !1,
    E = null,
    P = -1,
    _ = 5,
    T = -1;
  function A() {
    return !(e.unstable_now() - T < _);
  }
  function V() {
    if (E !== null) {
      var $ = e.unstable_now();
      T = $;
      var M = !0;
      try {
        M = E(!0, $);
      } finally {
        M ? W() : ((k = !1), (E = null));
      }
    } else k = !1;
  }
  var W;
  if (typeof c == "function")
    W = function () {
      c(V);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      L = F.port2;
    (F.port1.onmessage = V),
      (W = function () {
        L.postMessage(null);
      });
  } else
    W = function () {
      C(V, 0);
    };
  function z($) {
    (E = $), k || ((k = !0), W());
  }
  function q($, M) {
    P = C(function () {
      $(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || b || ((v = !0), z(w));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function ($) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = f;
      }
      var I = f;
      f = M;
      try {
        return $();
      } finally {
        f = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, M) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var I = f;
      f = $;
      try {
        return M();
      } finally {
        f = I;
      }
    }),
    (e.unstable_scheduleCallback = function ($, M, I) {
      var D = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? D + I : D))
          : (I = D),
        $)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = I + G),
        ($ = {
          id: d++,
          callback: M,
          priorityLevel: $,
          startTime: I,
          expirationTime: G,
          sortIndex: -1,
        }),
        I > D
          ? (($.sortIndex = I),
            t(u, $),
            n(a) === null &&
              $ === n(u) &&
              (g ? (h(P), (P = -1)) : (g = !0), q(S, I - D)))
          : (($.sortIndex = G), t(a, $), v || b || ((v = !0), z(w))),
        $
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function ($) {
      var M = f;
      return function () {
        var I = f;
        f = M;
        try {
          return $.apply(this, arguments);
        } finally {
          f = I;
        }
      };
    });
})(fh);
(function (e) {
  e.exports = fh;
})(P0);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ph = y,
  xt = ja;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var hh = new Set(),
  ei = {};
function xr(e, t) {
  to(e, t), to(e + "Capture", t);
}
function to(e, t) {
  for (ei[e] = t, e = 0; e < t.length; e++) hh.add(t[e]);
}
var mn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Va = Object.prototype.hasOwnProperty,
  T0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zd = {},
  Bd = {};
function $0(e) {
  return Va.call(Bd, e)
    ? !0
    : Va.call(zd, e)
    ? !1
    : T0.test(e)
    ? (Bd[e] = !0)
    : ((zd[e] = !0), !1);
}
function _0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function I0(e, t, n, r) {
  if (t === null || typeof t > "u" || _0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function nt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var He = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    He[e] = new nt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  He[t] = new nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  He[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  He[e] = new nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    He[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  He[e] = new nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  He[e] = new nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  He[e] = new nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  He[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tc = /[\-:]([a-z])/g;
function nc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tc, nc);
    He[t] = new nt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tc, nc);
    He[t] = new nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(tc, nc);
  He[t] = new nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  He[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new nt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  He[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function rc(e, t, n, r) {
  var o = He.hasOwnProperty(t) ? He[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (I0(t, n, o, r) && (n = null),
    r || o === null
      ? $0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Sn = ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ni = Symbol.for("react.element"),
  Nr = Symbol.for("react.portal"),
  Or = Symbol.for("react.fragment"),
  oc = Symbol.for("react.strict_mode"),
  Ha = Symbol.for("react.profiler"),
  mh = Symbol.for("react.provider"),
  gh = Symbol.for("react.context"),
  ic = Symbol.for("react.forward_ref"),
  Ka = Symbol.for("react.suspense"),
  qa = Symbol.for("react.suspense_list"),
  sc = Symbol.for("react.memo"),
  $n = Symbol.for("react.lazy"),
  yh = Symbol.for("react.offscreen"),
  Dd = Symbol.iterator;
function xo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Dd && e[Dd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ce = Object.assign,
  sa;
function Oo(e) {
  if (sa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      sa = (t && t[1]) || "";
    }
  return (
    `
` +
    sa +
    e
  );
}
var la = !1;
function aa(e, t) {
  if (!e || la) return "";
  la = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (la = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Oo(e) : "";
}
function N0(e) {
  switch (e.tag) {
    case 5:
      return Oo(e.type);
    case 16:
      return Oo("Lazy");
    case 13:
      return Oo("Suspense");
    case 19:
      return Oo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = aa(e.type, !1)), e;
    case 11:
      return (e = aa(e.type.render, !1)), e;
    case 1:
      return (e = aa(e.type, !0)), e;
    default:
      return "";
  }
}
function Ga(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Or:
      return "Fragment";
    case Nr:
      return "Portal";
    case Ha:
      return "Profiler";
    case oc:
      return "StrictMode";
    case Ka:
      return "Suspense";
    case qa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gh:
        return (e.displayName || "Context") + ".Consumer";
      case mh:
        return (e._context.displayName || "Context") + ".Provider";
      case ic:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case sc:
        return (
          (t = e.displayName || null), t !== null ? t : Ga(e.type) || "Memo"
        );
      case $n:
        (t = e._payload), (e = e._init);
        try {
          return Ga(e(t));
        } catch {}
    }
  return null;
}
function O0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ga(t);
    case 8:
      return t === oc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function jn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function M0(e) {
  var t = vh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Oi(e) {
  e._valueTracker || (e._valueTracker = M0(e));
}
function xh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function bs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Qa(e, t) {
  var n = t.checked;
  return Ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ud(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = jn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Sh(e, t) {
  (t = t.checked), t != null && rc(e, "checked", t, !1);
}
function Ya(e, t) {
  Sh(e, t);
  var n = jn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Xa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xa(e, t.type, jn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Wd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Xa(e, t, n) {
  (t !== "number" || bs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mo = Array.isArray;
function Vr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + jn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Za(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function jd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (Mo(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: jn(n) };
}
function wh(e, t) {
  var n = jn(t.value),
    r = jn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ja(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? bh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Mi,
  Ch = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Mi = Mi || document.createElement("div"),
          Mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Mi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ti(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  L0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bo).forEach(function (e) {
  L0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bo[t] = Bo[e]);
  });
});
function kh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Bo.hasOwnProperty(e) && Bo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Eh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = kh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var A0 = Ce(
  { menuitem: !0 },
  {
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
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function eu(e, t) {
  if (t) {
    if (A0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function tu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var nu = null;
function lc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ru = null,
  Hr = null,
  Kr = null;
function Hd(e) {
  if ((e = Ei(e))) {
    if (typeof ru != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = ol(t)), ru(e.stateNode, e.type, t));
  }
}
function Rh(e) {
  Hr ? (Kr ? Kr.push(e) : (Kr = [e])) : (Hr = e);
}
function Ph() {
  if (Hr) {
    var e = Hr,
      t = Kr;
    if (((Kr = Hr = null), Hd(e), t)) for (e = 0; e < t.length; e++) Hd(t[e]);
  }
}
function Th(e, t) {
  return e(t);
}
function $h() {}
var ua = !1;
function _h(e, t, n) {
  if (ua) return e(t, n);
  ua = !0;
  try {
    return Th(e, t, n);
  } finally {
    (ua = !1), (Hr !== null || Kr !== null) && ($h(), Ph());
  }
}
function ni(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ol(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var ou = !1;
if (mn)
  try {
    var So = {};
    Object.defineProperty(So, "passive", {
      get: function () {
        ou = !0;
      },
    }),
      window.addEventListener("test", So, So),
      window.removeEventListener("test", So, So);
  } catch {
    ou = !1;
  }
function F0(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Do = !1,
  Cs = null,
  ks = !1,
  iu = null,
  z0 = {
    onError: function (e) {
      (Do = !0), (Cs = e);
    },
  };
function B0(e, t, n, r, o, i, s, l, a) {
  (Do = !1), (Cs = null), F0.apply(z0, arguments);
}
function D0(e, t, n, r, o, i, s, l, a) {
  if ((B0.apply(this, arguments), Do)) {
    if (Do) {
      var u = Cs;
      (Do = !1), (Cs = null);
    } else throw Error(O(198));
    ks || ((ks = !0), (iu = u));
  }
}
function Sr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ih(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Kd(e) {
  if (Sr(e) !== e) throw Error(O(188));
}
function U0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Sr(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Kd(o), e;
        if (i === r) return Kd(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Nh(e) {
  return (e = U0(e)), e !== null ? Oh(e) : null;
}
function Oh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Oh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mh = xt.unstable_scheduleCallback,
  qd = xt.unstable_cancelCallback,
  W0 = xt.unstable_shouldYield,
  j0 = xt.unstable_requestPaint,
  Te = xt.unstable_now,
  V0 = xt.unstable_getCurrentPriorityLevel,
  ac = xt.unstable_ImmediatePriority,
  Lh = xt.unstable_UserBlockingPriority,
  Es = xt.unstable_NormalPriority,
  H0 = xt.unstable_LowPriority,
  Ah = xt.unstable_IdlePriority,
  el = null,
  nn = null;
function K0(e) {
  if (nn && typeof nn.onCommitFiberRoot == "function")
    try {
      nn.onCommitFiberRoot(el, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : Q0,
  q0 = Math.log,
  G0 = Math.LN2;
function Q0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((q0(e) / G0) | 0)) | 0;
}
var Li = 64,
  Ai = 4194304;
function Lo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Rs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Lo(l)) : ((i &= s), i !== 0 && (r = Lo(i)));
  } else (s = n & ~o), s !== 0 ? (r = Lo(s)) : i !== 0 && (r = Lo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Y0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function X0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Dt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = Y0(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function su(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fh() {
  var e = Li;
  return (Li <<= 1), !(Li & 4194240) && (Li = 64), e;
}
function ca(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ci(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dt(t)),
    (e[t] = n);
}
function Z0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Dt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function uc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ue = 0;
function zh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Bh,
  cc,
  Dh,
  Uh,
  Wh,
  lu = !1,
  Fi = [],
  Ln = null,
  An = null,
  Fn = null,
  ri = new Map(),
  oi = new Map(),
  In = [],
  J0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Gd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ln = null;
      break;
    case "dragenter":
    case "dragleave":
      An = null;
      break;
    case "mouseover":
    case "mouseout":
      Fn = null;
      break;
    case "pointerover":
    case "pointerout":
      ri.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oi.delete(t.pointerId);
  }
}
function wo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ei(t)), t !== null && cc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function ev(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ln = wo(Ln, e, t, n, r, o)), !0;
    case "dragenter":
      return (An = wo(An, e, t, n, r, o)), !0;
    case "mouseover":
      return (Fn = wo(Fn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ri.set(i, wo(ri.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), oi.set(i, wo(oi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function jh(e) {
  var t = sr(e.target);
  if (t !== null) {
    var n = Sr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ih(n)), t !== null)) {
          (e.blockedOn = t),
            Wh(e.priority, function () {
              Dh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function is(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = au(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (nu = r), n.target.dispatchEvent(r), (nu = null);
    } else return (t = Ei(n)), t !== null && cc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Qd(e, t, n) {
  is(e) && n.delete(t);
}
function tv() {
  (lu = !1),
    Ln !== null && is(Ln) && (Ln = null),
    An !== null && is(An) && (An = null),
    Fn !== null && is(Fn) && (Fn = null),
    ri.forEach(Qd),
    oi.forEach(Qd);
}
function bo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    lu ||
      ((lu = !0),
      xt.unstable_scheduleCallback(xt.unstable_NormalPriority, tv)));
}
function ii(e) {
  function t(o) {
    return bo(o, e);
  }
  if (0 < Fi.length) {
    bo(Fi[0], e);
    for (var n = 1; n < Fi.length; n++) {
      var r = Fi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ln !== null && bo(Ln, e),
      An !== null && bo(An, e),
      Fn !== null && bo(Fn, e),
      ri.forEach(t),
      oi.forEach(t),
      n = 0;
    n < In.length;
    n++
  )
    (r = In[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
    jh(n), n.blockedOn === null && In.shift();
}
var qr = Sn.ReactCurrentBatchConfig,
  Ps = !0;
function nv(e, t, n, r) {
  var o = ue,
    i = qr.transition;
  qr.transition = null;
  try {
    (ue = 1), dc(e, t, n, r);
  } finally {
    (ue = o), (qr.transition = i);
  }
}
function rv(e, t, n, r) {
  var o = ue,
    i = qr.transition;
  qr.transition = null;
  try {
    (ue = 4), dc(e, t, n, r);
  } finally {
    (ue = o), (qr.transition = i);
  }
}
function dc(e, t, n, r) {
  if (Ps) {
    var o = au(e, t, n, r);
    if (o === null) Sa(e, t, r, Ts, n), Gd(e, r);
    else if (ev(o, e, t, n, r)) r.stopPropagation();
    else if ((Gd(e, r), t & 4 && -1 < J0.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ei(o);
        if (
          (i !== null && Bh(i),
          (i = au(e, t, n, r)),
          i === null && Sa(e, t, r, Ts, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Sa(e, t, r, null, n);
  }
}
var Ts = null;
function au(e, t, n, r) {
  if (((Ts = null), (e = lc(r)), (e = sr(e)), e !== null))
    if (((t = Sr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ih(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ts = e), null;
}
function Vh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (V0()) {
        case ac:
          return 1;
        case Lh:
          return 4;
        case Es:
        case H0:
          return 16;
        case Ah:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var On = null,
  fc = null,
  ss = null;
function Hh() {
  if (ss) return ss;
  var e,
    t = fc,
    n = t.length,
    r,
    o = "value" in On ? On.value : On.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ss = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ls(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zi() {
  return !0;
}
function Yd() {
  return !1;
}
function wt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? zi
        : Yd),
      (this.isPropagationStopped = Yd),
      this
    );
  }
  return (
    Ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zi));
      },
      persist: function () {},
      isPersistent: zi,
    }),
    t
  );
}
var ho = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pc = wt(ho),
  ki = Ce({}, ho, { view: 0, detail: 0 }),
  ov = wt(ki),
  da,
  fa,
  Co,
  tl = Ce({}, ki, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Co &&
            (Co && e.type === "mousemove"
              ? ((da = e.screenX - Co.screenX), (fa = e.screenY - Co.screenY))
              : (fa = da = 0),
            (Co = e)),
          da);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fa;
    },
  }),
  Xd = wt(tl),
  iv = Ce({}, tl, { dataTransfer: 0 }),
  sv = wt(iv),
  lv = Ce({}, ki, { relatedTarget: 0 }),
  pa = wt(lv),
  av = Ce({}, ho, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uv = wt(av),
  cv = Ce({}, ho, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  dv = wt(cv),
  fv = Ce({}, ho, { data: 0 }),
  Zd = wt(fv),
  pv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  hv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  mv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mv[e]) ? !!t[e] : !1;
}
function hc() {
  return gv;
}
var yv = Ce({}, ki, {
    key: function (e) {
      if (e.key) {
        var t = pv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ls(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? hv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hc,
    charCode: function (e) {
      return e.type === "keypress" ? ls(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ls(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  vv = wt(yv),
  xv = Ce({}, tl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Jd = wt(xv),
  Sv = Ce({}, ki, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hc,
  }),
  wv = wt(Sv),
  bv = Ce({}, ho, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cv = wt(bv),
  kv = Ce({}, tl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ev = wt(kv),
  Rv = [9, 13, 27, 32],
  mc = mn && "CompositionEvent" in window,
  Uo = null;
mn && "documentMode" in document && (Uo = document.documentMode);
var Pv = mn && "TextEvent" in window && !Uo,
  Kh = mn && (!mc || (Uo && 8 < Uo && 11 >= Uo)),
  ef = String.fromCharCode(32),
  tf = !1;
function qh(e, t) {
  switch (e) {
    case "keyup":
      return Rv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Gh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mr = !1;
function Tv(e, t) {
  switch (e) {
    case "compositionend":
      return Gh(t);
    case "keypress":
      return t.which !== 32 ? null : ((tf = !0), ef);
    case "textInput":
      return (e = t.data), e === ef && tf ? null : e;
    default:
      return null;
  }
}
function $v(e, t) {
  if (Mr)
    return e === "compositionend" || (!mc && qh(e, t))
      ? ((e = Hh()), (ss = fc = On = null), (Mr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Kh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _v = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function nf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_v[e.type] : t === "textarea";
}
function Qh(e, t, n, r) {
  Rh(r),
    (t = $s(t, "onChange")),
    0 < t.length &&
      ((n = new pc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wo = null,
  si = null;
function Iv(e) {
  sm(e, 0);
}
function nl(e) {
  var t = Fr(e);
  if (xh(t)) return e;
}
function Nv(e, t) {
  if (e === "change") return t;
}
var Yh = !1;
if (mn) {
  var ha;
  if (mn) {
    var ma = "oninput" in document;
    if (!ma) {
      var rf = document.createElement("div");
      rf.setAttribute("oninput", "return;"),
        (ma = typeof rf.oninput == "function");
    }
    ha = ma;
  } else ha = !1;
  Yh = ha && (!document.documentMode || 9 < document.documentMode);
}
function of() {
  Wo && (Wo.detachEvent("onpropertychange", Xh), (si = Wo = null));
}
function Xh(e) {
  if (e.propertyName === "value" && nl(si)) {
    var t = [];
    Qh(t, si, e, lc(e)), _h(Iv, t);
  }
}
function Ov(e, t, n) {
  e === "focusin"
    ? (of(), (Wo = t), (si = n), Wo.attachEvent("onpropertychange", Xh))
    : e === "focusout" && of();
}
function Mv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return nl(si);
}
function Lv(e, t) {
  if (e === "click") return nl(t);
}
function Av(e, t) {
  if (e === "input" || e === "change") return nl(t);
}
function Fv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Wt = typeof Object.is == "function" ? Object.is : Fv;
function li(e, t) {
  if (Wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Va.call(t, o) || !Wt(e[o], t[o])) return !1;
  }
  return !0;
}
function sf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function lf(e, t) {
  var n = sf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = sf(n);
  }
}
function Zh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jh() {
  for (var e = window, t = bs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bs(e.document);
  }
  return t;
}
function gc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zv(e) {
  var t = Jh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = lf(n, i));
        var s = lf(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Bv = mn && "documentMode" in document && 11 >= document.documentMode,
  Lr = null,
  uu = null,
  jo = null,
  cu = !1;
function af(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  cu ||
    Lr == null ||
    Lr !== bs(r) ||
    ((r = Lr),
    "selectionStart" in r && gc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jo && li(jo, r)) ||
      ((jo = r),
      (r = $s(uu, "onSelect")),
      0 < r.length &&
        ((t = new pc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Lr))));
}
function Bi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ar = {
    animationend: Bi("Animation", "AnimationEnd"),
    animationiteration: Bi("Animation", "AnimationIteration"),
    animationstart: Bi("Animation", "AnimationStart"),
    transitionend: Bi("Transition", "TransitionEnd"),
  },
  ga = {},
  em = {};
mn &&
  ((em = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ar.animationend.animation,
    delete Ar.animationiteration.animation,
    delete Ar.animationstart.animation),
  "TransitionEvent" in window || delete Ar.transitionend.transition);
function rl(e) {
  if (ga[e]) return ga[e];
  if (!Ar[e]) return e;
  var t = Ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in em) return (ga[e] = t[n]);
  return e;
}
var tm = rl("animationend"),
  nm = rl("animationiteration"),
  rm = rl("animationstart"),
  om = rl("transitionend"),
  im = new Map(),
  uf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gn(e, t) {
  im.set(e, t), xr(t, [e]);
}
for (var ya = 0; ya < uf.length; ya++) {
  var va = uf[ya],
    Dv = va.toLowerCase(),
    Uv = va[0].toUpperCase() + va.slice(1);
  Gn(Dv, "on" + Uv);
}
Gn(tm, "onAnimationEnd");
Gn(nm, "onAnimationIteration");
Gn(rm, "onAnimationStart");
Gn("dblclick", "onDoubleClick");
Gn("focusin", "onFocus");
Gn("focusout", "onBlur");
Gn(om, "onTransitionEnd");
to("onMouseEnter", ["mouseout", "mouseover"]);
to("onMouseLeave", ["mouseout", "mouseover"]);
to("onPointerEnter", ["pointerout", "pointerover"]);
to("onPointerLeave", ["pointerout", "pointerover"]);
xr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
xr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
xr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
xr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
xr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ao =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));
function cf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), D0(r, t, void 0, e), (e.currentTarget = null);
}
function sm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          cf(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          cf(o, l, u), (i = a);
        }
    }
  }
  if (ks) throw ((e = iu), (ks = !1), (iu = null), e);
}
function me(e, t) {
  var n = t[mu];
  n === void 0 && (n = t[mu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (lm(t, e, 2, !1), n.add(r));
}
function xa(e, t, n) {
  var r = 0;
  t && (r |= 4), lm(n, e, r, t);
}
var Di = "_reactListening" + Math.random().toString(36).slice(2);
function ai(e) {
  if (!e[Di]) {
    (e[Di] = !0),
      hh.forEach(function (n) {
        n !== "selectionchange" && (Wv.has(n) || xa(n, !1, e), xa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Di] || ((t[Di] = !0), xa("selectionchange", !1, t));
  }
}
function lm(e, t, n, r) {
  switch (Vh(t)) {
    case 1:
      var o = nv;
      break;
    case 4:
      o = rv;
      break;
    default:
      o = dc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ou ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Sa(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = sr(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  _h(function () {
    var u = i,
      d = lc(n),
      p = [];
    e: {
      var f = im.get(e);
      if (f !== void 0) {
        var b = pc,
          v = e;
        switch (e) {
          case "keypress":
            if (ls(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = vv;
            break;
          case "focusin":
            (v = "focus"), (b = pa);
            break;
          case "focusout":
            (v = "blur"), (b = pa);
            break;
          case "beforeblur":
          case "afterblur":
            b = pa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = Xd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = sv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = wv;
            break;
          case tm:
          case nm:
          case rm:
            b = uv;
            break;
          case om:
            b = Cv;
            break;
          case "scroll":
            b = ov;
            break;
          case "wheel":
            b = Ev;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = dv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = Jd;
        }
        var g = (t & 4) !== 0,
          C = !g && e === "scroll",
          h = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var c = u, m; c !== null; ) {
          m = c;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              h !== null && ((S = ni(c, h)), S != null && g.push(ui(c, S, m)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((f = new b(f, v, null, n, d)), p.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          f &&
            n !== nu &&
            (v = n.relatedTarget || n.fromElement) &&
            (sr(v) || v[gn]))
        )
          break e;
        if (
          (b || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          b
            ? ((v = n.relatedTarget || n.toElement),
              (b = u),
              (v = v ? sr(v) : null),
              v !== null &&
                ((C = Sr(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((b = null), (v = u)),
          b !== v)
        ) {
          if (
            ((g = Xd),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Jd),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (c = "pointer")),
            (C = b == null ? f : Fr(b)),
            (m = v == null ? f : Fr(v)),
            (f = new g(S, c + "leave", b, n, d)),
            (f.target = C),
            (f.relatedTarget = m),
            (S = null),
            sr(d) === u &&
              ((g = new g(h, c + "enter", v, n, d)),
              (g.target = m),
              (g.relatedTarget = C),
              (S = g)),
            (C = S),
            b && v)
          )
            t: {
              for (g = b, h = v, c = 0, m = g; m; m = br(m)) c++;
              for (m = 0, S = h; S; S = br(S)) m++;
              for (; 0 < c - m; ) (g = br(g)), c--;
              for (; 0 < m - c; ) (h = br(h)), m--;
              for (; c--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = br(g)), (h = br(h));
              }
              g = null;
            }
          else g = null;
          b !== null && df(p, f, b, g, !1),
            v !== null && C !== null && df(p, C, v, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? Fr(u) : window),
          (b = f.nodeName && f.nodeName.toLowerCase()),
          b === "select" || (b === "input" && f.type === "file"))
        )
          var w = Nv;
        else if (nf(f))
          if (Yh) w = Av;
          else {
            w = Mv;
            var k = Ov;
          }
        else
          (b = f.nodeName) &&
            b.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (w = Lv);
        if (w && (w = w(e, u))) {
          Qh(p, w, n, d);
          break e;
        }
        k && k(e, f, u),
          e === "focusout" &&
            (k = f._wrapperState) &&
            k.controlled &&
            f.type === "number" &&
            Xa(f, "number", f.value);
      }
      switch (((k = u ? Fr(u) : window), e)) {
        case "focusin":
          (nf(k) || k.contentEditable === "true") &&
            ((Lr = k), (uu = u), (jo = null));
          break;
        case "focusout":
          jo = uu = Lr = null;
          break;
        case "mousedown":
          cu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (cu = !1), af(p, n, d);
          break;
        case "selectionchange":
          if (Bv) break;
        case "keydown":
        case "keyup":
          af(p, n, d);
      }
      var E;
      if (mc)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Mr
          ? qh(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Kh &&
          n.locale !== "ko" &&
          (Mr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Mr && (E = Hh())
            : ((On = d),
              (fc = "value" in On ? On.value : On.textContent),
              (Mr = !0))),
        (k = $s(u, P)),
        0 < k.length &&
          ((P = new Zd(P, e, null, n, d)),
          p.push({ event: P, listeners: k }),
          E ? (P.data = E) : ((E = Gh(n)), E !== null && (P.data = E)))),
        (E = Pv ? Tv(e, n) : $v(e, n)) &&
          ((u = $s(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Zd("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = E)));
    }
    sm(p, t);
  });
}
function ui(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $s(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ni(e, n)),
      i != null && r.unshift(ui(e, i, o)),
      (i = ni(e, t)),
      i != null && r.push(ui(e, i, o))),
      (e = e.return);
  }
  return r;
}
function br(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function df(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = ni(n, i)), a != null && s.unshift(ui(n, a, l)))
        : o || ((a = ni(n, i)), a != null && s.push(ui(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var jv = /\r\n?/g,
  Vv = /\u0000|\uFFFD/g;
function ff(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      jv,
      `
`
    )
    .replace(Vv, "");
}
function Ui(e, t, n) {
  if (((t = ff(t)), ff(e) !== t && n)) throw Error(O(425));
}
function _s() {}
var du = null,
  fu = null;
function pu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var hu = typeof setTimeout == "function" ? setTimeout : void 0,
  Hv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pf = typeof Promise == "function" ? Promise : void 0,
  Kv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pf < "u"
      ? function (e) {
          return pf.resolve(null).then(e).catch(qv);
        }
      : hu;
function qv(e) {
  setTimeout(function () {
    throw e;
  });
}
function wa(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ii(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ii(t);
}
function zn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function hf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var mo = Math.random().toString(36).slice(2),
  Jt = "__reactFiber$" + mo,
  ci = "__reactProps$" + mo,
  gn = "__reactContainer$" + mo,
  mu = "__reactEvents$" + mo,
  Gv = "__reactListeners$" + mo,
  Qv = "__reactHandles$" + mo;
function sr(e) {
  var t = e[Jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gn] || n[Jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = hf(e); e !== null; ) {
          if ((n = e[Jt])) return n;
          e = hf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ei(e) {
  return (
    (e = e[Jt] || e[gn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function ol(e) {
  return e[ci] || null;
}
var gu = [],
  zr = -1;
function Qn(e) {
  return { current: e };
}
function ge(e) {
  0 > zr || ((e.current = gu[zr]), (gu[zr] = null), zr--);
}
function he(e, t) {
  zr++, (gu[zr] = e.current), (e.current = t);
}
var Vn = {},
  Xe = Qn(Vn),
  at = Qn(!1),
  pr = Vn;
function no(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ut(e) {
  return (e = e.childContextTypes), e != null;
}
function Is() {
  ge(at), ge(Xe);
}
function mf(e, t, n) {
  if (Xe.current !== Vn) throw Error(O(168));
  he(Xe, t), he(at, n);
}
function am(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, O0(e) || "Unknown", o));
  return Ce({}, n, r);
}
function Ns(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vn),
    (pr = Xe.current),
    he(Xe, e),
    he(at, at.current),
    !0
  );
}
function gf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = am(e, t, pr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ge(at),
      ge(Xe),
      he(Xe, e))
    : ge(at),
    he(at, n);
}
var dn = null,
  il = !1,
  ba = !1;
function um(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function Yv(e) {
  (il = !0), um(e);
}
function Yn() {
  if (!ba && dn !== null) {
    ba = !0;
    var e = 0,
      t = ue;
    try {
      var n = dn;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (dn = null), (il = !1);
    } catch (o) {
      throw (dn !== null && (dn = dn.slice(e + 1)), Mh(ac, Yn), o);
    } finally {
      (ue = t), (ba = !1);
    }
  }
  return null;
}
var Br = [],
  Dr = 0,
  Os = null,
  Ms = 0,
  Et = [],
  Rt = 0,
  hr = null,
  fn = 1,
  pn = "";
function er(e, t) {
  (Br[Dr++] = Ms), (Br[Dr++] = Os), (Os = e), (Ms = t);
}
function cm(e, t, n) {
  (Et[Rt++] = fn), (Et[Rt++] = pn), (Et[Rt++] = hr), (hr = e);
  var r = fn;
  e = pn;
  var o = 32 - Dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Dt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (fn = (1 << (32 - Dt(t) + o)) | (n << o) | r),
      (pn = i + e);
  } else (fn = (1 << i) | (n << o) | r), (pn = e);
}
function yc(e) {
  e.return !== null && (er(e, 1), cm(e, 1, 0));
}
function vc(e) {
  for (; e === Os; )
    (Os = Br[--Dr]), (Br[Dr] = null), (Ms = Br[--Dr]), (Br[Dr] = null);
  for (; e === hr; )
    (hr = Et[--Rt]),
      (Et[Rt] = null),
      (pn = Et[--Rt]),
      (Et[Rt] = null),
      (fn = Et[--Rt]),
      (Et[Rt] = null);
}
var yt = null,
  mt = null,
  xe = !1,
  Bt = null;
function dm(e, t) {
  var n = Tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function yf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (yt = e), (mt = zn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (yt = e), (mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hr !== null ? { id: fn, overflow: pn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (yt = e),
            (mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vu(e) {
  if (xe) {
    var t = mt;
    if (t) {
      var n = t;
      if (!yf(e, t)) {
        if (yu(e)) throw Error(O(418));
        t = zn(n.nextSibling);
        var r = yt;
        t && yf(e, t)
          ? dm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (yt = e));
      }
    } else {
      if (yu(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (xe = !1), (yt = e);
    }
  }
}
function vf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  yt = e;
}
function Wi(e) {
  if (e !== yt) return !1;
  if (!xe) return vf(e), (xe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !pu(e.type, e.memoizedProps))),
    t && (t = mt))
  ) {
    if (yu(e)) throw (fm(), Error(O(418)));
    for (; t; ) dm(e, t), (t = zn(t.nextSibling));
  }
  if ((vf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              mt = zn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      mt = null;
    }
  } else mt = yt ? zn(e.stateNode.nextSibling) : null;
  return !0;
}
function fm() {
  for (var e = mt; e; ) e = zn(e.nextSibling);
}
function ro() {
  (mt = yt = null), (xe = !1);
}
function xc(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
var Xv = Sn.ReactCurrentBatchConfig;
function At(e, t) {
  if (e && e.defaultProps) {
    (t = Ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ls = Qn(null),
  As = null,
  Ur = null,
  Sc = null;
function wc() {
  Sc = Ur = As = null;
}
function bc(e) {
  var t = Ls.current;
  ge(Ls), (e._currentValue = t);
}
function xu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Gr(e, t) {
  (As = e),
    (Sc = Ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (lt = !0), (e.firstContext = null));
}
function It(e) {
  var t = e._currentValue;
  if (Sc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ur === null)) {
      if (As === null) throw Error(O(308));
      (Ur = e), (As.dependencies = { lanes: 0, firstContext: e });
    } else Ur = Ur.next = e;
  return t;
}
var lr = null;
function Cc(e) {
  lr === null ? (lr = [e]) : lr.push(e);
}
function pm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Cc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    yn(e, r)
  );
}
function yn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var _n = !1;
function kc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function hn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      yn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Cc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    yn(e, n)
  );
}
function as(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uc(e, n);
  }
}
function xf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Fs(e, t, n, r) {
  var o = e.updateQueue;
  _n = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (s = 0), (d = u = a = null), (l = i);
    do {
      var f = l.lane,
        b = l.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: b,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            g = l;
          switch (((f = t), (b = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                p = v.call(b, p, f);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(b, p, f) : v),
                f == null)
              )
                break e;
              p = Ce({}, p, f);
              break e;
            case 2:
              _n = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (b = {
          eventTime: b,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = b), (a = p)) : (d = d.next = b),
          (s |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (gr |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function Sf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var mm = new ph.Component().refs;
function Su(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var sl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Sr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      o = Un(e),
      i = hn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Bn(e, i, o)),
      t !== null && (Ut(t, e, o, r), as(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      o = Un(e),
      i = hn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Bn(e, i, o)),
      t !== null && (Ut(t, e, o, r), as(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = et(),
      r = Un(e),
      o = hn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Bn(e, o, r)),
      t !== null && (Ut(t, e, r, n), as(t, e, r));
  },
};
function wf(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !li(n, r) || !li(o, i)
      : !0
  );
}
function gm(e, t, n) {
  var r = !1,
    o = Vn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = It(i))
      : ((o = ut(t) ? pr : Xe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? no(e, o) : Vn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = sl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function bf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && sl.enqueueReplaceState(t, t.state, null);
}
function wu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = mm), kc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = It(i))
    : ((i = ut(t) ? pr : Xe.current), (o.context = no(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Su(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && sl.enqueueReplaceState(o, o.state, null),
      Fs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ko(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            l === mm && (l = o.refs = {}),
              s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function ji(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Cf(e) {
  var t = e._init;
  return t(e._payload);
}
function ym(e) {
  function t(h, c) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [c]), (h.flags |= 16)) : m.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), (c = c.sibling);
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; )
      c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
    return h;
  }
  function o(h, c) {
    return (h = Wn(h, c)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, c, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((h.flags |= 2), c) : m)
            : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, c, m, S) {
    return c === null || c.tag !== 6
      ? ((c = $a(m, h.mode, S)), (c.return = h), c)
      : ((c = o(c, m)), (c.return = h), c);
  }
  function a(h, c, m, S) {
    var w = m.type;
    return w === Or
      ? d(h, c, m.props.children, S, m.key)
      : c !== null &&
        (c.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === $n &&
            Cf(w) === c.type))
      ? ((S = o(c, m.props)), (S.ref = ko(h, c, m)), (S.return = h), S)
      : ((S = hs(m.type, m.key, m.props, null, h.mode, S)),
        (S.ref = ko(h, c, m)),
        (S.return = h),
        S);
  }
  function u(h, c, m, S) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = _a(m, h.mode, S)), (c.return = h), c)
      : ((c = o(c, m.children || [])), (c.return = h), c);
  }
  function d(h, c, m, S, w) {
    return c === null || c.tag !== 7
      ? ((c = fr(m, h.mode, S, w)), (c.return = h), c)
      : ((c = o(c, m)), (c.return = h), c);
  }
  function p(h, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = $a("" + c, h.mode, m)), (c.return = h), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ni:
          return (
            (m = hs(c.type, c.key, c.props, null, h.mode, m)),
            (m.ref = ko(h, null, c)),
            (m.return = h),
            m
          );
        case Nr:
          return (c = _a(c, h.mode, m)), (c.return = h), c;
        case $n:
          var S = c._init;
          return p(h, S(c._payload), m);
      }
      if (Mo(c) || xo(c))
        return (c = fr(c, h.mode, m, null)), (c.return = h), c;
      ji(h, c);
    }
    return null;
  }
  function f(h, c, m, S) {
    var w = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return w !== null ? null : l(h, c, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ni:
          return m.key === w ? a(h, c, m, S) : null;
        case Nr:
          return m.key === w ? u(h, c, m, S) : null;
        case $n:
          return (w = m._init), f(h, c, w(m._payload), S);
      }
      if (Mo(m) || xo(m)) return w !== null ? null : d(h, c, m, S, null);
      ji(h, m);
    }
    return null;
  }
  function b(h, c, m, S, w) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(m) || null), l(c, h, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ni:
          return (h = h.get(S.key === null ? m : S.key) || null), a(c, h, S, w);
        case Nr:
          return (h = h.get(S.key === null ? m : S.key) || null), u(c, h, S, w);
        case $n:
          var k = S._init;
          return b(h, c, m, k(S._payload), w);
      }
      if (Mo(S) || xo(S)) return (h = h.get(m) || null), d(c, h, S, w, null);
      ji(c, S);
    }
    return null;
  }
  function v(h, c, m, S) {
    for (
      var w = null, k = null, E = c, P = (c = 0), _ = null;
      E !== null && P < m.length;
      P++
    ) {
      E.index > P ? ((_ = E), (E = null)) : (_ = E.sibling);
      var T = f(h, E, m[P], S);
      if (T === null) {
        E === null && (E = _);
        break;
      }
      e && E && T.alternate === null && t(h, E),
        (c = i(T, c, P)),
        k === null ? (w = T) : (k.sibling = T),
        (k = T),
        (E = _);
    }
    if (P === m.length) return n(h, E), xe && er(h, P), w;
    if (E === null) {
      for (; P < m.length; P++)
        (E = p(h, m[P], S)),
          E !== null &&
            ((c = i(E, c, P)), k === null ? (w = E) : (k.sibling = E), (k = E));
      return xe && er(h, P), w;
    }
    for (E = r(h, E); P < m.length; P++)
      (_ = b(E, h, P, m[P], S)),
        _ !== null &&
          (e && _.alternate !== null && E.delete(_.key === null ? P : _.key),
          (c = i(_, c, P)),
          k === null ? (w = _) : (k.sibling = _),
          (k = _));
    return (
      e &&
        E.forEach(function (A) {
          return t(h, A);
        }),
      xe && er(h, P),
      w
    );
  }
  function g(h, c, m, S) {
    var w = xo(m);
    if (typeof w != "function") throw Error(O(150));
    if (((m = w.call(m)), m == null)) throw Error(O(151));
    for (
      var k = (w = null), E = c, P = (c = 0), _ = null, T = m.next();
      E !== null && !T.done;
      P++, T = m.next()
    ) {
      E.index > P ? ((_ = E), (E = null)) : (_ = E.sibling);
      var A = f(h, E, T.value, S);
      if (A === null) {
        E === null && (E = _);
        break;
      }
      e && E && A.alternate === null && t(h, E),
        (c = i(A, c, P)),
        k === null ? (w = A) : (k.sibling = A),
        (k = A),
        (E = _);
    }
    if (T.done) return n(h, E), xe && er(h, P), w;
    if (E === null) {
      for (; !T.done; P++, T = m.next())
        (T = p(h, T.value, S)),
          T !== null &&
            ((c = i(T, c, P)), k === null ? (w = T) : (k.sibling = T), (k = T));
      return xe && er(h, P), w;
    }
    for (E = r(h, E); !T.done; P++, T = m.next())
      (T = b(E, h, P, T.value, S)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? P : T.key),
          (c = i(T, c, P)),
          k === null ? (w = T) : (k.sibling = T),
          (k = T));
    return (
      e &&
        E.forEach(function (V) {
          return t(h, V);
        }),
      xe && er(h, P),
      w
    );
  }
  function C(h, c, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Or &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ni:
          e: {
            for (var w = m.key, k = c; k !== null; ) {
              if (k.key === w) {
                if (((w = m.type), w === Or)) {
                  if (k.tag === 7) {
                    n(h, k.sibling),
                      (c = o(k, m.props.children)),
                      (c.return = h),
                      (h = c);
                    break e;
                  }
                } else if (
                  k.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === $n &&
                    Cf(w) === k.type)
                ) {
                  n(h, k.sibling),
                    (c = o(k, m.props)),
                    (c.ref = ko(h, k, m)),
                    (c.return = h),
                    (h = c);
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            m.type === Or
              ? ((c = fr(m.props.children, h.mode, S, m.key)),
                (c.return = h),
                (h = c))
              : ((S = hs(m.type, m.key, m.props, null, h.mode, S)),
                (S.ref = ko(h, c, m)),
                (S.return = h),
                (h = S));
          }
          return s(h);
        case Nr:
          e: {
            for (k = m.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(h, c.sibling),
                    (c = o(c, m.children || [])),
                    (c.return = h),
                    (h = c);
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            (c = _a(m, h.mode, S)), (c.return = h), (h = c);
          }
          return s(h);
        case $n:
          return (k = m._init), C(h, c, k(m._payload), S);
      }
      if (Mo(m)) return v(h, c, m, S);
      if (xo(m)) return g(h, c, m, S);
      ji(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = o(c, m)), (c.return = h), (h = c))
          : (n(h, c), (c = $a(m, h.mode, S)), (c.return = h), (h = c)),
        s(h))
      : n(h, c);
  }
  return C;
}
var oo = ym(!0),
  vm = ym(!1),
  Ri = {},
  rn = Qn(Ri),
  di = Qn(Ri),
  fi = Qn(Ri);
function ar(e) {
  if (e === Ri) throw Error(O(174));
  return e;
}
function Ec(e, t) {
  switch ((he(fi, t), he(di, e), he(rn, Ri), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ja(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ja(t, e));
  }
  ge(rn), he(rn, t);
}
function io() {
  ge(rn), ge(di), ge(fi);
}
function xm(e) {
  ar(fi.current);
  var t = ar(rn.current),
    n = Ja(t, e.type);
  t !== n && (he(di, e), he(rn, n));
}
function Rc(e) {
  di.current === e && (ge(rn), ge(di));
}
var we = Qn(0);
function zs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ca = [];
function Pc() {
  for (var e = 0; e < Ca.length; e++)
    Ca[e]._workInProgressVersionPrimary = null;
  Ca.length = 0;
}
var us = Sn.ReactCurrentDispatcher,
  ka = Sn.ReactCurrentBatchConfig,
  mr = 0,
  be = null,
  Me = null,
  Be = null,
  Bs = !1,
  Vo = !1,
  pi = 0,
  Zv = 0;
function qe() {
  throw Error(O(321));
}
function Tc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wt(e[n], t[n])) return !1;
  return !0;
}
function $c(e, t, n, r, o, i) {
  if (
    ((mr = i),
    (be = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (us.current = e === null || e.memoizedState === null ? n1 : r1),
    (e = n(r, o)),
    Vo)
  ) {
    i = 0;
    do {
      if (((Vo = !1), (pi = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (Be = Me = null),
        (t.updateQueue = null),
        (us.current = o1),
        (e = n(r, o));
    } while (Vo);
  }
  if (
    ((us.current = Ds),
    (t = Me !== null && Me.next !== null),
    (mr = 0),
    (Be = Me = be = null),
    (Bs = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function _c() {
  var e = pi !== 0;
  return (pi = 0), e;
}
function Yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Be === null ? (be.memoizedState = Be = e) : (Be = Be.next = e), Be;
}
function Nt() {
  if (Me === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Me.next;
  var t = Be === null ? be.memoizedState : Be.next;
  if (t !== null) (Be = t), (Me = e);
  else {
    if (e === null) throw Error(O(310));
    (Me = e),
      (e = {
        memoizedState: Me.memoizedState,
        baseState: Me.baseState,
        baseQueue: Me.baseQueue,
        queue: Me.queue,
        next: null,
      }),
      Be === null ? (be.memoizedState = Be = e) : (Be = Be.next = e);
  }
  return Be;
}
function hi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ea(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Me,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((mr & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (be.lanes |= d),
          (gr |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      Wt(r, t.memoizedState) || (lt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (be.lanes |= i), (gr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ra(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Wt(i, t.memoizedState) || (lt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Sm() {}
function wm(e, t) {
  var n = be,
    r = Nt(),
    o = t(),
    i = !Wt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (lt = !0)),
    (r = r.queue),
    Ic(km.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Be !== null && Be.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      mi(9, Cm.bind(null, n, r, o, t), void 0, null),
      De === null)
    )
      throw Error(O(349));
    mr & 30 || bm(n, t, o);
  }
  return o;
}
function bm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = be.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (be.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Cm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Em(t) && Rm(e);
}
function km(e, t, n) {
  return n(function () {
    Em(t) && Rm(e);
  });
}
function Em(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Wt(e, n);
  } catch {
    return !0;
  }
}
function Rm(e) {
  var t = yn(e, 1);
  t !== null && Ut(t, e, 1, -1);
}
function kf(e) {
  var t = Yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = t1.bind(null, be, e)),
    [t.memoizedState, e]
  );
}
function mi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = be.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (be.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Pm() {
  return Nt().memoizedState;
}
function cs(e, t, n, r) {
  var o = Yt();
  (be.flags |= e),
    (o.memoizedState = mi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ll(e, t, n, r) {
  var o = Nt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Me !== null) {
    var s = Me.memoizedState;
    if (((i = s.destroy), r !== null && Tc(r, s.deps))) {
      o.memoizedState = mi(t, n, i, r);
      return;
    }
  }
  (be.flags |= e), (o.memoizedState = mi(1 | t, n, i, r));
}
function Ef(e, t) {
  return cs(8390656, 8, e, t);
}
function Ic(e, t) {
  return ll(2048, 8, e, t);
}
function Tm(e, t) {
  return ll(4, 2, e, t);
}
function $m(e, t) {
  return ll(4, 4, e, t);
}
function _m(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Im(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ll(4, 4, _m.bind(null, t, e), n)
  );
}
function Nc() {}
function Nm(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Tc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Om(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Tc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Mm(e, t, n) {
  return mr & 21
    ? (Wt(n, t) || ((n = Fh()), (be.lanes |= n), (gr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = n));
}
function Jv(e, t) {
  var n = ue;
  (ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ka.transition;
  ka.transition = {};
  try {
    e(!1), t();
  } finally {
    (ue = n), (ka.transition = r);
  }
}
function Lm() {
  return Nt().memoizedState;
}
function e1(e, t, n) {
  var r = Un(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Am(e))
  )
    Fm(t, n);
  else if (((n = pm(e, t, n, r)), n !== null)) {
    var o = et();
    Ut(n, e, r, o), zm(n, t, r);
  }
}
function t1(e, t, n) {
  var r = Un(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Am(e)) Fm(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Wt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Cc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = pm(e, t, o, r)),
      n !== null && ((o = et()), Ut(n, e, r, o), zm(n, t, r));
  }
}
function Am(e) {
  var t = e.alternate;
  return e === be || (t !== null && t === be);
}
function Fm(e, t) {
  Vo = Bs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uc(e, n);
  }
}
var Ds = {
    readContext: It,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useInsertionEffect: qe,
    useLayoutEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useMutableSource: qe,
    useSyncExternalStore: qe,
    useId: qe,
    unstable_isNewReconciler: !1,
  },
  n1 = {
    readContext: It,
    useCallback: function (e, t) {
      return (Yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: It,
    useEffect: Ef,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        cs(4194308, 4, _m.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return cs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return cs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = e1.bind(null, be, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: kf,
    useDebugValue: Nc,
    useDeferredValue: function (e) {
      return (Yt().memoizedState = e);
    },
    useTransition: function () {
      var e = kf(!1),
        t = e[0];
      return (e = Jv.bind(null, e[1])), (Yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = be,
        o = Yt();
      if (xe) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(O(349));
        mr & 30 || bm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Ef(km.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        mi(9, Cm.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Yt(),
        t = De.identifierPrefix;
      if (xe) {
        var n = pn,
          r = fn;
        (n = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = pi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  r1 = {
    readContext: It,
    useCallback: Nm,
    useContext: It,
    useEffect: Ic,
    useImperativeHandle: Im,
    useInsertionEffect: Tm,
    useLayoutEffect: $m,
    useMemo: Om,
    useReducer: Ea,
    useRef: Pm,
    useState: function () {
      return Ea(hi);
    },
    useDebugValue: Nc,
    useDeferredValue: function (e) {
      var t = Nt();
      return Mm(t, Me.memoizedState, e);
    },
    useTransition: function () {
      var e = Ea(hi)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Sm,
    useSyncExternalStore: wm,
    useId: Lm,
    unstable_isNewReconciler: !1,
  },
  o1 = {
    readContext: It,
    useCallback: Nm,
    useContext: It,
    useEffect: Ic,
    useImperativeHandle: Im,
    useInsertionEffect: Tm,
    useLayoutEffect: $m,
    useMemo: Om,
    useReducer: Ra,
    useRef: Pm,
    useState: function () {
      return Ra(hi);
    },
    useDebugValue: Nc,
    useDeferredValue: function (e) {
      var t = Nt();
      return Me === null ? (t.memoizedState = e) : Mm(t, Me.memoizedState, e);
    },
    useTransition: function () {
      var e = Ra(hi)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Sm,
    useSyncExternalStore: wm,
    useId: Lm,
    unstable_isNewReconciler: !1,
  };
function so(e, t) {
  try {
    var n = "",
      r = t;
    do (n += N0(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Pa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var i1 = typeof WeakMap == "function" ? WeakMap : Map;
function Bm(e, t, n) {
  (n = hn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ws || ((Ws = !0), (Nu = r)), bu(e, t);
    }),
    n
  );
}
function Dm(e, t, n) {
  (n = hn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        bu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        bu(e, t),
          typeof r != "function" &&
            (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Rf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new i1();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = x1.bind(null, e, t, n)), t.then(e, e));
}
function Pf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = hn(-1, 1)), (t.tag = 2), Bn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var s1 = Sn.ReactCurrentOwner,
  lt = !1;
function Je(e, t, n, r) {
  t.child = e === null ? vm(t, null, n, r) : oo(t, e.child, n, r);
}
function $f(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Gr(t, o),
    (r = $c(e, t, n, r, i, o)),
    (n = _c()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        vn(e, t, o))
      : (xe && n && yc(t), (t.flags |= 1), Je(e, t, r, o), t.child)
  );
}
function _f(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Dc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Um(e, t, i, r, o))
      : ((e = hs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : li), n(s, r) && e.ref === t.ref)
    )
      return vn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Wn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Um(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (li(i, r) && e.ref === t.ref)
      if (((lt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (lt = !0);
      else return (t.lanes = e.lanes), vn(e, t, o);
  }
  return Cu(e, t, n, r, o);
}
function Wm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        he(jr, pt),
        (pt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          he(jr, pt),
          (pt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        he(jr, pt),
        (pt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      he(jr, pt),
      (pt |= r);
  return Je(e, t, o, n), t.child;
}
function jm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cu(e, t, n, r, o) {
  var i = ut(n) ? pr : Xe.current;
  return (
    (i = no(t, i)),
    Gr(t, o),
    (n = $c(e, t, n, r, i, o)),
    (r = _c()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        vn(e, t, o))
      : (xe && r && yc(t), (t.flags |= 1), Je(e, t, n, o), t.child)
  );
}
function If(e, t, n, r, o) {
  if (ut(n)) {
    var i = !0;
    Ns(t);
  } else i = !1;
  if ((Gr(t, o), t.stateNode === null))
    ds(e, t), gm(t, n, r), wu(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = It(u))
      : ((u = ut(n) ? pr : Xe.current), (u = no(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && bf(t, s, r, u)),
      (_n = !1);
    var f = t.memoizedState;
    (s.state = f),
      Fs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || f !== a || at.current || _n
        ? (typeof d == "function" && (Su(t, n, d, r), (a = t.memoizedState)),
          (l = _n || wf(t, n, l, r, f, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      hm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : At(t.type, l)),
      (s.props = u),
      (p = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = It(a))
        : ((a = ut(n) ? pr : Xe.current), (a = no(t, a)));
    var b = n.getDerivedStateFromProps;
    (d =
      typeof b == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || f !== a) && bf(t, s, r, a)),
      (_n = !1),
      (f = t.memoizedState),
      (s.state = f),
      Fs(t, r, s, o);
    var v = t.memoizedState;
    l !== p || f !== v || at.current || _n
      ? (typeof b == "function" && (Su(t, n, b, r), (v = t.memoizedState)),
        (u = _n || wf(t, n, u, r, f, v, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ku(e, t, n, r, i, o);
}
function ku(e, t, n, r, o, i) {
  jm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && gf(t, n, !1), vn(e, t, i);
  (r = t.stateNode), (s1.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = oo(t, e.child, null, i)), (t.child = oo(t, null, l, i)))
      : Je(e, t, l, i),
    (t.memoizedState = r.state),
    o && gf(t, n, !0),
    t.child
  );
}
function Vm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? mf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mf(e, t.context, !1),
    Ec(e, t.containerInfo);
}
function Nf(e, t, n, r, o) {
  return ro(), xc(o), (t.flags |= 256), Je(e, t, n, r), t.child;
}
var Eu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ru(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hm(e, t, n) {
  var r = t.pendingProps,
    o = we.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    he(we, o & 1),
    e === null)
  )
    return (
      vu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = cl(s, r, 0, null)),
              (e = fr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ru(n)),
              (t.memoizedState = Eu),
              e)
            : Oc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return l1(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Wn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Wn(l, i)) : ((i = fr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ru(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Eu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Wn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Oc(e, t) {
  return (
    (t = cl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vi(e, t, n, r) {
  return (
    r !== null && xc(r),
    oo(t, e.child, null, n),
    (e = Oc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function l1(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Pa(Error(O(422)))), Vi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = cl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = fr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && oo(t, e.child, null, s),
        (t.child.memoizedState = Ru(s)),
        (t.memoizedState = Eu),
        i);
  if (!(t.mode & 1)) return Vi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(O(419))), (r = Pa(i, r, void 0)), Vi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), lt || l)) {
    if (((r = De), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), yn(e, o), Ut(r, e, o, -1));
    }
    return Bc(), (r = Pa(Error(O(421)))), Vi(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = S1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (mt = zn(o.nextSibling)),
      (yt = t),
      (xe = !0),
      (Bt = null),
      e !== null &&
        ((Et[Rt++] = fn),
        (Et[Rt++] = pn),
        (Et[Rt++] = hr),
        (fn = e.id),
        (pn = e.overflow),
        (hr = t)),
      (t = Oc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Of(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xu(e.return, t, n);
}
function Ta(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Km(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Je(e, t, r.children, n), (r = we.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Of(e, n, t);
        else if (e.tag === 19) Of(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((he(we, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && zs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ta(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && zs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ta(t, !0, n, null, i);
        break;
      case "together":
        Ta(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ds(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Wn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function a1(e, t, n) {
  switch (t.tag) {
    case 3:
      Vm(t), ro();
      break;
    case 5:
      xm(t);
      break;
    case 1:
      ut(t.type) && Ns(t);
      break;
    case 4:
      Ec(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      he(Ls, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (he(we, we.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Hm(e, t, n)
          : (he(we, we.current & 1),
            (e = vn(e, t, n)),
            e !== null ? e.sibling : null);
      he(we, we.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Km(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        he(we, we.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Wm(e, t, n);
  }
  return vn(e, t, n);
}
var qm, Pu, Gm, Qm;
qm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Pu = function () {};
Gm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), ar(rn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Qa(e, o)), (r = Qa(e, r)), (i = []);
        break;
      case "select":
        (o = Ce({}, o, { value: void 0 })),
          (r = Ce({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Za(e, o)), (r = Za(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = _s);
    }
    eu(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ei.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ei.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && me("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Qm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Eo(e, t) {
  if (!xe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function u1(e, t, n) {
  var r = t.pendingProps;
  switch ((vc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ge(t), null;
    case 1:
      return ut(t.type) && Is(), Ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        io(),
        ge(at),
        ge(Xe),
        Pc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Bt !== null && (Lu(Bt), (Bt = null)))),
        Pu(e, t),
        Ge(t),
        null
      );
    case 5:
      Rc(t);
      var o = ar(fi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Ge(t), null;
        }
        if (((e = ar(rn.current)), Wi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Jt] = t), (r[ci] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              me("cancel", r), me("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ao.length; o++) me(Ao[o], r);
              break;
            case "source":
              me("error", r);
              break;
            case "img":
            case "image":
            case "link":
              me("error", r), me("load", r);
              break;
            case "details":
              me("toggle", r);
              break;
            case "input":
              Ud(r, i), me("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                me("invalid", r);
              break;
            case "textarea":
              jd(r, i), me("invalid", r);
          }
          eu(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ui(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ui(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : ei.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  me("scroll", r);
            }
          switch (n) {
            case "input":
              Oi(r), Wd(r, i, !0);
              break;
            case "textarea":
              Oi(r), Vd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = _s);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = bh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Jt] = t),
            (e[ci] = r),
            qm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = tu(n, r)), n)) {
              case "dialog":
                me("cancel", e), me("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ao.length; o++) me(Ao[o], e);
                o = r;
                break;
              case "source":
                me("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                me("error", e), me("load", e), (o = r);
                break;
              case "details":
                me("toggle", e), (o = r);
                break;
              case "input":
                Ud(e, r), (o = Qa(e, r)), me("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ce({}, r, { value: void 0 })),
                  me("invalid", e);
                break;
              case "textarea":
                jd(e, r), (o = Za(e, r)), me("invalid", e);
                break;
              default:
                o = r;
            }
            eu(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Eh(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ch(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && ti(e, a)
                    : typeof a == "number" && ti(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ei.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && me("scroll", e)
                      : a != null && rc(e, i, a, s));
              }
            switch (n) {
              case "input":
                Oi(e), Wd(e, r, !1);
                break;
              case "textarea":
                Oi(e), Vd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + jn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Vr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Vr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = _s);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ge(t), null;
    case 6:
      if (e && t.stateNode != null) Qm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = ar(fi.current)), ar(rn.current), Wi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Jt] = t),
            (i = r.nodeValue !== n) && ((e = yt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ui(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ui(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Jt] = t),
            (t.stateNode = r);
      }
      return Ge(t), null;
    case 13:
      if (
        (ge(we),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (xe && mt !== null && t.mode & 1 && !(t.flags & 128))
          fm(), ro(), (t.flags |= 98560), (i = !1);
        else if (((i = Wi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[Jt] = t;
          } else
            ro(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ge(t), (i = !1);
        } else Bt !== null && (Lu(Bt), (Bt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || we.current & 1 ? Le === 0 && (Le = 3) : Bc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        io(), Pu(e, t), e === null && ai(t.stateNode.containerInfo), Ge(t), null
      );
    case 10:
      return bc(t.type._context), Ge(t), null;
    case 17:
      return ut(t.type) && Is(), Ge(t), null;
    case 19:
      if ((ge(we), (i = t.memoizedState), i === null)) return Ge(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Eo(i, !1);
        else {
          if (Le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = zs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Eo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return he(we, (we.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Te() > lo &&
            ((t.flags |= 128), (r = !0), Eo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = zs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Eo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !xe)
            )
              return Ge(t), null;
          } else
            2 * Te() - i.renderingStartTime > lo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Eo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Te()),
          (t.sibling = null),
          (n = we.current),
          he(we, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        zc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? pt & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function c1(e, t) {
  switch ((vc(t), t.tag)) {
    case 1:
      return (
        ut(t.type) && Is(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        io(),
        ge(at),
        ge(Xe),
        Pc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Rc(t), null;
    case 13:
      if (
        (ge(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        ro();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ge(we), null;
    case 4:
      return io(), null;
    case 10:
      return bc(t.type._context), null;
    case 22:
    case 23:
      return zc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hi = !1,
  Ye = !1,
  d1 = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function Wr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Pe(e, t, r);
      }
    else n.current = null;
}
function Tu(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var Mf = !1;
function f1(e, t) {
  if (((du = Ps), (e = Jh()), gc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var b;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = s + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (b = p.firstChild) !== null;

            )
              (f = p), (p = b);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++u === o && (l = s),
                f === i && ++d === r && (a = s),
                (b = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = b;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fu = { focusedElem: e, selectionRange: n }, Ps = !1, U = t; U !== null; )
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (U = e);
    else
      for (; U !== null; ) {
        t = U;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    C = v.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : At(t.type, g),
                      C
                    );
                  h.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (S) {
          Pe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (U = e);
          break;
        }
        U = t.return;
      }
  return (v = Mf), (Mf = !1), v;
}
function Ho(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Tu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function al(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function $u(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ym(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ym(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Jt], delete t[ci], delete t[mu], delete t[Gv], delete t[Qv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function _u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = _s));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_u(e, t, n), e = e.sibling; e !== null; ) _u(e, t, n), (e = e.sibling);
}
function Iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Iu(e, t, n), e = e.sibling; e !== null; ) Iu(e, t, n), (e = e.sibling);
}
var We = null,
  Ft = !1;
function Pn(e, t, n) {
  for (n = n.child; n !== null; ) Zm(e, t, n), (n = n.sibling);
}
function Zm(e, t, n) {
  if (nn && typeof nn.onCommitFiberUnmount == "function")
    try {
      nn.onCommitFiberUnmount(el, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ye || Wr(n, t);
    case 6:
      var r = We,
        o = Ft;
      (We = null),
        Pn(e, t, n),
        (We = r),
        (Ft = o),
        We !== null &&
          (Ft
            ? ((e = We),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : We.removeChild(n.stateNode));
      break;
    case 18:
      We !== null &&
        (Ft
          ? ((e = We),
            (n = n.stateNode),
            e.nodeType === 8
              ? wa(e.parentNode, n)
              : e.nodeType === 1 && wa(e, n),
            ii(e))
          : wa(We, n.stateNode));
      break;
    case 4:
      (r = We),
        (o = Ft),
        (We = n.stateNode.containerInfo),
        (Ft = !0),
        Pn(e, t, n),
        (We = r),
        (Ft = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Tu(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Pn(e, t, n);
      break;
    case 1:
      if (
        !Ye &&
        (Wr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Pe(n, t, l);
        }
      Pn(e, t, n);
      break;
    case 21:
      Pn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ye = (r = Ye) || n.memoizedState !== null), Pn(e, t, n), (Ye = r))
        : Pn(e, t, n);
      break;
    default:
      Pn(e, t, n);
  }
}
function Af(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new d1()),
      t.forEach(function (r) {
        var o = w1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (We = l.stateNode), (Ft = !1);
              break e;
            case 3:
              (We = l.stateNode.containerInfo), (Ft = !0);
              break e;
            case 4:
              (We = l.stateNode.containerInfo), (Ft = !0);
              break e;
          }
          l = l.return;
        }
        if (We === null) throw Error(O(160));
        Zm(i, s, o), (We = null), (Ft = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Pe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jm(t, e), (t = t.sibling);
}
function Jm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Lt(t, e), Qt(e), r & 4)) {
        try {
          Ho(3, e, e.return), al(3, e);
        } catch (g) {
          Pe(e, e.return, g);
        }
        try {
          Ho(5, e, e.return);
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      break;
    case 1:
      Lt(t, e), Qt(e), r & 512 && n !== null && Wr(n, n.return);
      break;
    case 5:
      if (
        (Lt(t, e),
        Qt(e),
        r & 512 && n !== null && Wr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ti(o, "");
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Sh(o, i),
              tu(l, s);
            var u = tu(l, i);
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                p = a[s + 1];
              d === "style"
                ? Eh(o, p)
                : d === "dangerouslySetInnerHTML"
                ? Ch(o, p)
                : d === "children"
                ? ti(o, p)
                : rc(o, d, p, u);
            }
            switch (l) {
              case "input":
                Ya(o, i);
                break;
              case "textarea":
                wh(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var b = i.value;
                b != null
                  ? Vr(o, !!i.multiple, b, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Vr(o, !!i.multiple, i.defaultValue, !0)
                      : Vr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ci] = i;
          } catch (g) {
            Pe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Lt(t, e), Qt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Lt(t, e), Qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ii(t.containerInfo);
        } catch (g) {
          Pe(e, e.return, g);
        }
      break;
    case 4:
      Lt(t, e), Qt(e);
      break;
    case 13:
      Lt(t, e),
        Qt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ac = Te())),
        r & 4 && Af(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ye = (u = Ye) || d), Lt(t, e), (Ye = u)) : Lt(t, e),
        Qt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (U = e, d = e.child; d !== null; ) {
            for (p = U = d; U !== null; ) {
              switch (((f = U), (b = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ho(4, f, f.return);
                  break;
                case 1:
                  Wr(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      Pe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Wr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    zf(p);
                    continue;
                  }
              }
              b !== null ? ((b.return = f), (U = b)) : zf(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = kh("display", s)));
              } catch (g) {
                Pe(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (g) {
                Pe(e, e.return, g);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Lt(t, e), Qt(e), r & 4 && Af(e);
      break;
    case 21:
      break;
    default:
      Lt(t, e), Qt(e);
  }
}
function Qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ti(o, ""), (r.flags &= -33));
          var i = Lf(e);
          Iu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Lf(e);
          _u(e, l, s);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      Pe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function p1(e, t, n) {
  (U = e), eg(e);
}
function eg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var o = U,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Hi;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Ye;
        l = Hi;
        var u = Ye;
        if (((Hi = s), (Ye = a) && !u))
          for (U = o; U !== null; )
            (s = U),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Bf(o)
                : a !== null
                ? ((a.return = s), (U = a))
                : Bf(o);
        for (; i !== null; ) (U = i), eg(i), (i = i.sibling);
        (U = o), (Hi = l), (Ye = u);
      }
      Ff(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (U = i)) : Ff(e);
  }
}
function Ff(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ye || al(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ye)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : At(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Sf(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sf(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && ii(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Ye || (t.flags & 512 && $u(t));
      } catch (f) {
        Pe(t, t.return, f);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function zf(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function Bf(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            al(4, t);
          } catch (a) {
            Pe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Pe(t, o, a);
            }
          }
          var i = t.return;
          try {
            $u(t);
          } catch (a) {
            Pe(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            $u(t);
          } catch (a) {
            Pe(t, s, a);
          }
      }
    } catch (a) {
      Pe(t, t.return, a);
    }
    if (t === e) {
      U = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (U = l);
      break;
    }
    U = t.return;
  }
}
var h1 = Math.ceil,
  Us = Sn.ReactCurrentDispatcher,
  Mc = Sn.ReactCurrentOwner,
  $t = Sn.ReactCurrentBatchConfig,
  ie = 0,
  De = null,
  Ie = null,
  Ve = 0,
  pt = 0,
  jr = Qn(0),
  Le = 0,
  gi = null,
  gr = 0,
  ul = 0,
  Lc = 0,
  Ko = null,
  st = null,
  Ac = 0,
  lo = 1 / 0,
  cn = null,
  Ws = !1,
  Nu = null,
  Dn = null,
  Ki = !1,
  Mn = null,
  js = 0,
  qo = 0,
  Ou = null,
  fs = -1,
  ps = 0;
function et() {
  return ie & 6 ? Te() : fs !== -1 ? fs : (fs = Te());
}
function Un(e) {
  return e.mode & 1
    ? ie & 2 && Ve !== 0
      ? Ve & -Ve
      : Xv.transition !== null
      ? (ps === 0 && (ps = Fh()), ps)
      : ((e = ue),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vh(e.type))),
        e)
    : 1;
}
function Ut(e, t, n, r) {
  if (50 < qo) throw ((qo = 0), (Ou = null), Error(O(185)));
  Ci(e, n, r),
    (!(ie & 2) || e !== De) &&
      (e === De && (!(ie & 2) && (ul |= n), Le === 4 && Nn(e, Ve)),
      ct(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && ((lo = Te() + 500), il && Yn()));
}
function ct(e, t) {
  var n = e.callbackNode;
  X0(e, t);
  var r = Rs(e, e === De ? Ve : 0);
  if (r === 0)
    n !== null && qd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && qd(n), t === 1))
      e.tag === 0 ? Yv(Df.bind(null, e)) : um(Df.bind(null, e)),
        Kv(function () {
          !(ie & 6) && Yn();
        }),
        (n = null);
    else {
      switch (zh(r)) {
        case 1:
          n = ac;
          break;
        case 4:
          n = Lh;
          break;
        case 16:
          n = Es;
          break;
        case 536870912:
          n = Ah;
          break;
        default:
          n = Es;
      }
      n = ag(n, tg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function tg(e, t) {
  if (((fs = -1), (ps = 0), ie & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Qr() && e.callbackNode !== n) return null;
  var r = Rs(e, e === De ? Ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vs(e, r);
  else {
    t = r;
    var o = ie;
    ie |= 2;
    var i = rg();
    (De !== e || Ve !== t) && ((cn = null), (lo = Te() + 500), dr(e, t));
    do
      try {
        y1();
        break;
      } catch (l) {
        ng(e, l);
      }
    while (1);
    wc(),
      (Us.current = i),
      (ie = o),
      Ie !== null ? (t = 0) : ((De = null), (Ve = 0), (t = Le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = su(e)), o !== 0 && ((r = o), (t = Mu(e, o)))), t === 1)
    )
      throw ((n = gi), dr(e, 0), Nn(e, r), ct(e, Te()), n);
    if (t === 6) Nn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !m1(o) &&
          ((t = Vs(e, r)),
          t === 2 && ((i = su(e)), i !== 0 && ((r = i), (t = Mu(e, i)))),
          t === 1))
      )
        throw ((n = gi), dr(e, 0), Nn(e, r), ct(e, Te()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          tr(e, st, cn);
          break;
        case 3:
          if (
            (Nn(e, r), (r & 130023424) === r && ((t = Ac + 500 - Te()), 10 < t))
          ) {
            if (Rs(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              et(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = hu(tr.bind(null, e, st, cn), t);
            break;
          }
          tr(e, st, cn);
          break;
        case 4:
          if ((Nn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Dt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Te() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * h1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = hu(tr.bind(null, e, st, cn), r);
            break;
          }
          tr(e, st, cn);
          break;
        case 5:
          tr(e, st, cn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return ct(e, Te()), e.callbackNode === n ? tg.bind(null, e) : null;
}
function Mu(e, t) {
  var n = Ko;
  return (
    e.current.memoizedState.isDehydrated && (dr(e, t).flags |= 256),
    (e = Vs(e, t)),
    e !== 2 && ((t = st), (st = n), t !== null && Lu(t)),
    e
  );
}
function Lu(e) {
  st === null ? (st = e) : st.push.apply(st, e);
}
function m1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Wt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Nn(e, t) {
  for (
    t &= ~Lc,
      t &= ~ul,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Df(e) {
  if (ie & 6) throw Error(O(327));
  Qr();
  var t = Rs(e, 0);
  if (!(t & 1)) return ct(e, Te()), null;
  var n = Vs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = su(e);
    r !== 0 && ((t = r), (n = Mu(e, r)));
  }
  if (n === 1) throw ((n = gi), dr(e, 0), Nn(e, t), ct(e, Te()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tr(e, st, cn),
    ct(e, Te()),
    null
  );
}
function Fc(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = n), ie === 0 && ((lo = Te() + 500), il && Yn());
  }
}
function yr(e) {
  Mn !== null && Mn.tag === 0 && !(ie & 6) && Qr();
  var t = ie;
  ie |= 1;
  var n = $t.transition,
    r = ue;
  try {
    if ((($t.transition = null), (ue = 1), e)) return e();
  } finally {
    (ue = r), ($t.transition = n), (ie = t), !(ie & 6) && Yn();
  }
}
function zc() {
  (pt = jr.current), ge(jr);
}
function dr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hv(n)), Ie !== null))
    for (n = Ie.return; n !== null; ) {
      var r = n;
      switch ((vc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Is();
          break;
        case 3:
          io(), ge(at), ge(Xe), Pc();
          break;
        case 5:
          Rc(r);
          break;
        case 4:
          io();
          break;
        case 13:
          ge(we);
          break;
        case 19:
          ge(we);
          break;
        case 10:
          bc(r.type._context);
          break;
        case 22:
        case 23:
          zc();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (Ie = e = Wn(e.current, null)),
    (Ve = pt = t),
    (Le = 0),
    (gi = null),
    (Lc = ul = gr = 0),
    (st = Ko = null),
    lr !== null)
  ) {
    for (t = 0; t < lr.length; t++)
      if (((n = lr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    lr = null;
  }
  return e;
}
function ng(e, t) {
  do {
    var n = Ie;
    try {
      if ((wc(), (us.current = Ds), Bs)) {
        for (var r = be.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Bs = !1;
      }
      if (
        ((mr = 0),
        (Be = Me = be = null),
        (Vo = !1),
        (pi = 0),
        (Mc.current = null),
        n === null || n.return === null)
      ) {
        (Le = 1), (gi = t), (Ie = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Ve),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var b = Pf(s);
          if (b !== null) {
            (b.flags &= -257),
              Tf(b, s, l, i, t),
              b.mode & 1 && Rf(i, u, t),
              (t = b),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Rf(i, u, t), Bc();
              break e;
            }
            a = Error(O(426));
          }
        } else if (xe && l.mode & 1) {
          var C = Pf(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Tf(C, s, l, i, t),
              xc(so(a, l));
            break e;
          }
        }
        (i = a = so(a, l)),
          Le !== 4 && (Le = 2),
          Ko === null ? (Ko = [i]) : Ko.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Bm(i, a, t);
              xf(i, h);
              break e;
            case 1:
              l = a;
              var c = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Dn === null || !Dn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = Dm(i, l, t);
                xf(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ig(n);
    } catch (w) {
      (t = w), Ie === n && n !== null && (Ie = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rg() {
  var e = Us.current;
  return (Us.current = Ds), e === null ? Ds : e;
}
function Bc() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
    De === null || (!(gr & 268435455) && !(ul & 268435455)) || Nn(De, Ve);
}
function Vs(e, t) {
  var n = ie;
  ie |= 2;
  var r = rg();
  (De !== e || Ve !== t) && ((cn = null), dr(e, t));
  do
    try {
      g1();
      break;
    } catch (o) {
      ng(e, o);
    }
  while (1);
  if ((wc(), (ie = n), (Us.current = r), Ie !== null)) throw Error(O(261));
  return (De = null), (Ve = 0), Le;
}
function g1() {
  for (; Ie !== null; ) og(Ie);
}
function y1() {
  for (; Ie !== null && !W0(); ) og(Ie);
}
function og(e) {
  var t = lg(e.alternate, e, pt);
  (e.memoizedProps = e.pendingProps),
    t === null ? ig(e) : (Ie = t),
    (Mc.current = null);
}
function ig(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = c1(n, t)), n !== null)) {
        (n.flags &= 32767), (Ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Le = 6), (Ie = null);
        return;
      }
    } else if (((n = u1(n, t, pt)), n !== null)) {
      Ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ie = t;
      return;
    }
    Ie = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function tr(e, t, n) {
  var r = ue,
    o = $t.transition;
  try {
    ($t.transition = null), (ue = 1), v1(e, t, n, r);
  } finally {
    ($t.transition = o), (ue = r);
  }
  return null;
}
function v1(e, t, n, r) {
  do Qr();
  while (Mn !== null);
  if (ie & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Z0(e, i),
    e === De && ((Ie = De = null), (Ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ki ||
      ((Ki = !0),
      ag(Es, function () {
        return Qr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = $t.transition), ($t.transition = null);
    var s = ue;
    ue = 1;
    var l = ie;
    (ie |= 4),
      (Mc.current = null),
      f1(e, n),
      Jm(n, e),
      zv(fu),
      (Ps = !!du),
      (fu = du = null),
      (e.current = n),
      p1(n),
      j0(),
      (ie = l),
      (ue = s),
      ($t.transition = i);
  } else e.current = n;
  if (
    (Ki && ((Ki = !1), (Mn = e), (js = o)),
    (i = e.pendingLanes),
    i === 0 && (Dn = null),
    K0(n.stateNode),
    ct(e, Te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ws) throw ((Ws = !1), (e = Nu), (Nu = null), e);
  return (
    js & 1 && e.tag !== 0 && Qr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ou ? qo++ : ((qo = 0), (Ou = e))) : (qo = 0),
    Yn(),
    null
  );
}
function Qr() {
  if (Mn !== null) {
    var e = zh(js),
      t = $t.transition,
      n = ue;
    try {
      if ((($t.transition = null), (ue = 16 > e ? 16 : e), Mn === null))
        var r = !1;
      else {
        if (((e = Mn), (Mn = null), (js = 0), ie & 6)) throw Error(O(331));
        var o = ie;
        for (ie |= 4, U = e.current; U !== null; ) {
          var i = U,
            s = i.child;
          if (U.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (U = u; U !== null; ) {
                  var d = U;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ho(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (U = p);
                  else
                    for (; U !== null; ) {
                      d = U;
                      var f = d.sibling,
                        b = d.return;
                      if ((Ym(d), d === u)) {
                        U = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = b), (U = f);
                        break;
                      }
                      U = b;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var C = g.sibling;
                    (g.sibling = null), (g = C);
                  } while (g !== null);
                }
              }
              U = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (U = s);
          else
            e: for (; U !== null; ) {
              if (((i = U), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ho(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (U = h);
                break e;
              }
              U = i.return;
            }
        }
        var c = e.current;
        for (U = c; U !== null; ) {
          s = U;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (U = m);
          else
            e: for (s = c; U !== null; ) {
              if (((l = U), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      al(9, l);
                  }
                } catch (w) {
                  Pe(l, l.return, w);
                }
              if (l === s) {
                U = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (U = S);
                break e;
              }
              U = l.return;
            }
        }
        if (
          ((ie = o), Yn(), nn && typeof nn.onPostCommitFiberRoot == "function")
        )
          try {
            nn.onPostCommitFiberRoot(el, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ue = n), ($t.transition = t);
    }
  }
  return !1;
}
function Uf(e, t, n) {
  (t = so(n, t)),
    (t = Bm(e, t, 1)),
    (e = Bn(e, t, 1)),
    (t = et()),
    e !== null && (Ci(e, 1, t), ct(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) Uf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Uf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Dn === null || !Dn.has(r)))
        ) {
          (e = so(n, e)),
            (e = Dm(t, e, 1)),
            (t = Bn(t, e, 1)),
            (e = et()),
            t !== null && (Ci(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function x1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = et()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (Ve & n) === n &&
      (Le === 4 || (Le === 3 && (Ve & 130023424) === Ve && 500 > Te() - Ac)
        ? dr(e, 0)
        : (Lc |= n)),
    ct(e, t);
}
function sg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ai), (Ai <<= 1), !(Ai & 130023424) && (Ai = 4194304))
      : (t = 1));
  var n = et();
  (e = yn(e, t)), e !== null && (Ci(e, t, n), ct(e, n));
}
function S1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), sg(e, n);
}
function w1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), sg(e, n);
}
var lg;
lg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || at.current) lt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (lt = !1), a1(e, t, n);
      lt = !!(e.flags & 131072);
    }
  else (lt = !1), xe && t.flags & 1048576 && cm(t, Ms, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ds(e, t), (e = t.pendingProps);
      var o = no(t, Xe.current);
      Gr(t, n), (o = $c(null, t, r, e, o, n));
      var i = _c();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ut(r) ? ((i = !0), Ns(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            kc(t),
            (o.updater = sl),
            (t.stateNode = o),
            (o._reactInternals = t),
            wu(t, r, e, n),
            (t = ku(null, t, r, !0, i, n)))
          : ((t.tag = 0), xe && i && yc(t), Je(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ds(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = C1(r)),
          (e = At(r, e)),
          o)
        ) {
          case 0:
            t = Cu(null, t, r, e, n);
            break e;
          case 1:
            t = If(null, t, r, e, n);
            break e;
          case 11:
            t = $f(null, t, r, e, n);
            break e;
          case 14:
            t = _f(null, t, r, At(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        Cu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        If(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Vm(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          hm(e, t),
          Fs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = so(Error(O(423)), t)), (t = Nf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = so(Error(O(424)), t)), (t = Nf(e, t, r, n, o));
            break e;
          } else
            for (
              mt = zn(t.stateNode.containerInfo.firstChild),
                yt = t,
                xe = !0,
                Bt = null,
                n = vm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ro(), r === o)) {
            t = vn(e, t, n);
            break e;
          }
          Je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        xm(t),
        e === null && vu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        pu(r, o) ? (s = null) : i !== null && pu(r, i) && (t.flags |= 32),
        jm(e, t),
        Je(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && vu(t), null;
    case 13:
      return Hm(e, t, n);
    case 4:
      return (
        Ec(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = oo(t, null, r, n)) : Je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        $f(e, t, r, o, n)
      );
    case 7:
      return Je(e, t, t.pendingProps, n), t.child;
    case 8:
      return Je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          he(Ls, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Wt(i.value, s)) {
            if (i.children === o.children && !at.current) {
              t = vn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = hn(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      xu(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(O(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  xu(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Je(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Gr(t, n),
        (o = It(o)),
        (r = r(o)),
        (t.flags |= 1),
        Je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = At(r, t.pendingProps)),
        (o = At(r.type, o)),
        _f(e, t, r, o, n)
      );
    case 15:
      return Um(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        ds(e, t),
        (t.tag = 1),
        ut(r) ? ((e = !0), Ns(t)) : (e = !1),
        Gr(t, n),
        gm(t, r, o),
        wu(t, r, o, n),
        ku(null, t, r, !0, e, n)
      );
    case 19:
      return Km(e, t, n);
    case 22:
      return Wm(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function ag(e, t) {
  return Mh(e, t);
}
function b1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Tt(e, t, n, r) {
  return new b1(e, t, n, r);
}
function Dc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function C1(e) {
  if (typeof e == "function") return Dc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ic)) return 11;
    if (e === sc) return 14;
  }
  return 2;
}
function Wn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Tt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function hs(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Dc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Or:
        return fr(n.children, o, i, t);
      case oc:
        (s = 8), (o |= 8);
        break;
      case Ha:
        return (
          (e = Tt(12, n, t, o | 2)), (e.elementType = Ha), (e.lanes = i), e
        );
      case Ka:
        return (e = Tt(13, n, t, o)), (e.elementType = Ka), (e.lanes = i), e;
      case qa:
        return (e = Tt(19, n, t, o)), (e.elementType = qa), (e.lanes = i), e;
      case yh:
        return cl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mh:
              s = 10;
              break e;
            case gh:
              s = 9;
              break e;
            case ic:
              s = 11;
              break e;
            case sc:
              s = 14;
              break e;
            case $n:
              (s = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Tt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function fr(e, t, n, r) {
  return (e = Tt(7, e, r, t)), (e.lanes = n), e;
}
function cl(e, t, n, r) {
  return (
    (e = Tt(22, e, r, t)),
    (e.elementType = yh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $a(e, t, n) {
  return (e = Tt(6, e, null, t)), (e.lanes = n), e;
}
function _a(e, t, n) {
  return (
    (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function k1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ca(0)),
    (this.expirationTimes = ca(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ca(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Uc(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new k1(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Tt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    kc(i),
    e
  );
}
function E1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Nr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ug(e) {
  if (!e) return Vn;
  e = e._reactInternals;
  e: {
    if (Sr(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ut(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ut(n)) return am(e, n, t);
  }
  return t;
}
function cg(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Uc(n, r, !0, e, o, i, s, l, a)),
    (e.context = ug(null)),
    (n = e.current),
    (r = et()),
    (o = Un(n)),
    (i = hn(r, o)),
    (i.callback = t ?? null),
    Bn(n, i, o),
    (e.current.lanes = o),
    Ci(e, o, r),
    ct(e, r),
    e
  );
}
function dl(e, t, n, r) {
  var o = t.current,
    i = et(),
    s = Un(o);
  return (
    (n = ug(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = hn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bn(o, t, s)),
    e !== null && (Ut(e, o, s, i), as(e, o, s)),
    s
  );
}
function Hs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wc(e, t) {
  Wf(e, t), (e = e.alternate) && Wf(e, t);
}
function R1() {
  return null;
}
var dg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function jc(e) {
  this._internalRoot = e;
}
fl.prototype.render = jc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  dl(e, t, null, null);
};
fl.prototype.unmount = jc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yr(function () {
      dl(null, e, null, null);
    }),
      (t[gn] = null);
  }
};
function fl(e) {
  this._internalRoot = e;
}
fl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Uh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
    In.splice(n, 0, e), n === 0 && jh(e);
  }
};
function Vc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function jf() {}
function P1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Hs(s);
        i.call(u);
      };
    }
    var s = cg(t, r, e, 0, null, !1, !1, "", jf);
    return (
      (e._reactRootContainer = s),
      (e[gn] = s.current),
      ai(e.nodeType === 8 ? e.parentNode : e),
      yr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Hs(a);
      l.call(u);
    };
  }
  var a = Uc(e, 0, !1, null, null, !1, !1, "", jf);
  return (
    (e._reactRootContainer = a),
    (e[gn] = a.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    yr(function () {
      dl(t, a, n, r);
    }),
    a
  );
}
function hl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Hs(s);
        l.call(a);
      };
    }
    dl(t, s, e, o);
  } else s = P1(n, t, e, o, r);
  return Hs(s);
}
Bh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lo(t.pendingLanes);
        n !== 0 &&
          (uc(t, n | 1), ct(t, Te()), !(ie & 6) && ((lo = Te() + 500), Yn()));
      }
      break;
    case 13:
      yr(function () {
        var r = yn(e, 1);
        if (r !== null) {
          var o = et();
          Ut(r, e, 1, o);
        }
      }),
        Wc(e, 1);
  }
};
cc = function (e) {
  if (e.tag === 13) {
    var t = yn(e, 134217728);
    if (t !== null) {
      var n = et();
      Ut(t, e, 134217728, n);
    }
    Wc(e, 134217728);
  }
};
Dh = function (e) {
  if (e.tag === 13) {
    var t = Un(e),
      n = yn(e, t);
    if (n !== null) {
      var r = et();
      Ut(n, e, t, r);
    }
    Wc(e, t);
  }
};
Uh = function () {
  return ue;
};
Wh = function (e, t) {
  var n = ue;
  try {
    return (ue = e), t();
  } finally {
    ue = n;
  }
};
ru = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ya(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ol(r);
            if (!o) throw Error(O(90));
            xh(r), Ya(r, o);
          }
        }
      }
      break;
    case "textarea":
      wh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Vr(e, !!n.multiple, t, !1);
  }
};
Th = Fc;
$h = yr;
var T1 = { usingClientEntryPoint: !1, Events: [Ei, Fr, ol, Rh, Ph, Fc] },
  Ro = {
    findFiberByHostInstance: sr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  $1 = {
    bundleType: Ro.bundleType,
    version: Ro.version,
    rendererPackageName: Ro.rendererPackageName,
    rendererConfig: Ro.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Nh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ro.findFiberByHostInstance || R1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qi.isDisabled && qi.supportsFiber)
    try {
      (el = qi.inject($1)), (nn = qi);
    } catch {}
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T1;
St.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vc(t)) throw Error(O(200));
  return E1(e, t, null, n);
};
St.createRoot = function (e, t) {
  if (!Vc(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = dg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Uc(e, 1, !1, null, null, n, !1, r, o)),
    (e[gn] = t.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    new jc(t)
  );
};
St.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Nh(t)), (e = e === null ? null : e.stateNode), e;
};
St.flushSync = function (e) {
  return yr(e);
};
St.hydrate = function (e, t, n) {
  if (!pl(t)) throw Error(O(200));
  return hl(null, e, t, !0, n);
};
St.hydrateRoot = function (e, t, n) {
  if (!Vc(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = dg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = cg(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[gn] = t.current),
    ai(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new fl(t);
};
St.render = function (e, t, n) {
  if (!pl(t)) throw Error(O(200));
  return hl(null, e, t, !1, n);
};
St.unmountComponentAtNode = function (e) {
  if (!pl(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (yr(function () {
        hl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gn] = null);
        });
      }),
      !0)
    : !1;
};
St.unstable_batchedUpdates = Fc;
St.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!pl(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return hl(e, t, n, !1, r);
};
St.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = St);
})(R0);
const Gi = Zp(eo);
var Vf = eo;
(Wa.createRoot = Vf.createRoot), (Wa.hydrateRoot = Vf.hydrateRoot);
const ln = Object.create(null);
ln.open = "0";
ln.close = "1";
ln.ping = "2";
ln.pong = "3";
ln.message = "4";
ln.upgrade = "5";
ln.noop = "6";
const ms = Object.create(null);
Object.keys(ln).forEach((e) => {
  ms[ln[e]] = e;
});
const _1 = { type: "error", data: "parser error" },
  I1 =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  N1 = typeof ArrayBuffer == "function",
  O1 = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  fg = ({ type: e, data: t }, n, r) =>
    I1 && t instanceof Blob
      ? n
        ? r(t)
        : Hf(t, r)
      : N1 && (t instanceof ArrayBuffer || O1(t))
      ? n
        ? r(t)
        : Hf(new Blob([t]), r)
      : r(ln[e] + (t || "")),
  Hf = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  },
  Kf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Fo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Kf.length; e++) Fo[Kf.charCodeAt(e)] = e;
const M1 = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      o = 0,
      i,
      s,
      l,
      a;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const u = new ArrayBuffer(t),
      d = new Uint8Array(u);
    for (r = 0; r < n; r += 4)
      (i = Fo[e.charCodeAt(r)]),
        (s = Fo[e.charCodeAt(r + 1)]),
        (l = Fo[e.charCodeAt(r + 2)]),
        (a = Fo[e.charCodeAt(r + 3)]),
        (d[o++] = (i << 2) | (s >> 4)),
        (d[o++] = ((s & 15) << 4) | (l >> 2)),
        (d[o++] = ((l & 3) << 6) | (a & 63));
    return u;
  },
  L1 = typeof ArrayBuffer == "function",
  pg = (e, t) => {
    if (typeof e != "string") return { type: "message", data: hg(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: A1(e.substring(1), t) }
      : ms[n]
      ? e.length > 1
        ? { type: ms[n], data: e.substring(1) }
        : { type: ms[n] }
      : _1;
  },
  A1 = (e, t) => {
    if (L1) {
      const n = M1(e);
      return hg(n, t);
    } else return { base64: !0, data: e };
  },
  hg = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof ArrayBuffer ? new Blob([e]) : e;
      case "arraybuffer":
      default:
        return e;
    }
  },
  mg = String.fromCharCode(30),
  F1 = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let o = 0;
    e.forEach((i, s) => {
      fg(i, !1, (l) => {
        (r[s] = l), ++o === n && t(r.join(mg));
      });
    });
  },
  z1 = (e, t) => {
    const n = e.split(mg),
      r = [];
    for (let o = 0; o < n.length; o++) {
      const i = pg(n[o], t);
      if ((r.push(i), i.type === "error")) break;
    }
    return r;
  },
  gg = 4;
function Ne(e) {
  if (e) return B1(e);
}
function B1(e) {
  for (var t in Ne.prototype) e[t] = Ne.prototype[t];
  return e;
}
Ne.prototype.on = Ne.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
Ne.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
Ne.prototype.off =
  Ne.prototype.removeListener =
  Ne.prototype.removeAllListeners =
  Ne.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, o = 0; o < n.length; o++)
        if (((r = n[o]), r === t || r.fn === t)) {
          n.splice(o, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + e], this;
    };
Ne.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, t);
  }
  return this;
};
Ne.prototype.emitReserved = Ne.prototype.emit;
Ne.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
Ne.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const Pt = (() =>
  typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Function("return this")())();
function yg(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const D1 = Pt.setTimeout,
  U1 = Pt.clearTimeout;
function ml(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = D1.bind(Pt)), (e.clearTimeoutFn = U1.bind(Pt)))
    : ((e.setTimeoutFn = Pt.setTimeout.bind(Pt)),
      (e.clearTimeoutFn = Pt.clearTimeout.bind(Pt)));
}
const W1 = 1.33;
function j1(e) {
  return typeof e == "string"
    ? V1(e)
    : Math.ceil((e.byteLength || e.size) * W1);
}
function V1(e) {
  let t = 0,
    n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4));
  return n;
}
class H1 extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class vg extends Ne {
  constructor(t) {
    super(),
      (this.writable = !1),
      ml(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new H1(t, n, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const n = pg(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
}
const xg =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      ""
    ),
  Au = 64,
  K1 = {};
let qf = 0,
  Qi = 0,
  Gf;
function Qf(e) {
  let t = "";
  do (t = xg[e % Au] + t), (e = Math.floor(e / Au));
  while (e > 0);
  return t;
}
function Sg() {
  const e = Qf(+new Date());
  return e !== Gf ? ((qf = 0), (Gf = e)) : e + "." + Qf(qf++);
}
for (; Qi < Au; Qi++) K1[xg[Qi]] = Qi;
function wg(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function q1(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
let bg = !1;
try {
  bg = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const G1 = bg;
function Cg(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || G1)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new Pt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function Q1() {}
const Y1 = (function () {
  return new Cg({ xdomain: !1 }).responseType != null;
})();
class X1 extends vg {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < "u")) {
      const r = location.protocol === "https:";
      let o = location.port;
      o || (o = r ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          o !== t.port),
        (this.xs = t.secure !== r);
    }
    const n = t && t.forceBase64;
    this.supportsBinary = Y1 && !n;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), t();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  poll() {
    (this.polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    z1(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this.polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this.poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      F1(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    let t = this.query || {};
    const n = this.opts.secure ? "https" : "http";
    let r = "";
    this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Sg()),
      !this.supportsBinary && !t.sid && (t.b64 = 1),
      this.opts.port &&
        ((n === "https" && Number(this.opts.port) !== 443) ||
          (n === "http" && Number(this.opts.port) !== 80)) &&
        (r = ":" + this.opts.port);
    const o = wg(t),
      i = this.opts.hostname.indexOf(":") !== -1;
    return (
      n +
      "://" +
      (i ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
      r +
      this.opts.path +
      (o.length ? "?" + o : "")
    );
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts),
      new on(this.uri(), t)
    );
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    r.on("success", n),
      r.on("error", (o, i) => {
        this.onError("xhr post error", o, i);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t);
  }
}
class on extends Ne {
  constructor(t, n) {
    super(),
      ml(this, n),
      (this.opts = n),
      (this.method = n.method || "GET"),
      (this.uri = t),
      (this.async = n.async !== !1),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create();
  }
  create() {
    const t = yg(
      this.opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
    const n = (this.xhr = new Cg(t));
    try {
      n.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let r in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(r) &&
              n.setRequestHeader(r, this.opts.extraHeaders[r]);
        }
      } catch {}
      if (this.method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {}
      "withCredentials" in n && (n.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout),
        (n.onreadystatechange = () => {
          n.readyState === 4 &&
            (n.status === 200 || n.status === 1223
              ? this.onLoad()
              : this.setTimeoutFn(() => {
                  this.onError(typeof n.status == "number" ? n.status : 0);
                }, 0));
        }),
        n.send(this.data);
    } catch (r) {
      this.setTimeoutFn(() => {
        this.onError(r);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this.index = on.requestsCount++), (on.requests[this.index] = this));
  }
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = Q1), t))
        try {
          this.xhr.abort();
        } catch {}
      typeof document < "u" && delete on.requests[this.index],
        (this.xhr = null);
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this.cleanup());
  }
  abort() {
    this.cleanup();
  }
}
on.requestsCount = 0;
on.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Yf);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Pt ? "pagehide" : "unload";
    addEventListener(e, Yf, !1);
  }
}
function Yf() {
  for (let e in on.requests)
    on.requests.hasOwnProperty(e) && on.requests[e].abort();
}
const kg = (() =>
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0))(),
  Yi = Pt.WebSocket || Pt.MozWebSocket,
  Xf = !0,
  Z1 = "arraybuffer",
  Zf =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
class J1 extends vg {
  constructor(t) {
    super(t), (this.supportsBinary = !t.forceBase64);
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const t = this.uri(),
      n = this.opts.protocols,
      r = Zf
        ? {}
        : yg(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Xf && !Zf ? (n ? new Yi(t, n) : new Yi(t)) : new Yi(t, n, r);
    } catch (o) {
      return this.emitReserved("error", o);
    }
    (this.ws.binaryType = this.socket.binaryType || Z1),
      this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        o = n === t.length - 1;
      fg(r, this.supportsBinary, (i) => {
        const s = {};
        try {
          Xf && this.ws.send(i);
        } catch {}
        o &&
          kg(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
  }
  uri() {
    let t = this.query || {};
    const n = this.opts.secure ? "wss" : "ws";
    let r = "";
    this.opts.port &&
      ((n === "wss" && Number(this.opts.port) !== 443) ||
        (n === "ws" && Number(this.opts.port) !== 80)) &&
      (r = ":" + this.opts.port),
      this.opts.timestampRequests && (t[this.opts.timestampParam] = Sg()),
      this.supportsBinary || (t.b64 = 1);
    const o = wg(t),
      i = this.opts.hostname.indexOf(":") !== -1;
    return (
      n +
      "://" +
      (i ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
      r +
      this.opts.path +
      (o.length ? "?" + o : "")
    );
  }
  check() {
    return !!Yi;
  }
}
const ex = { websocket: J1, polling: X1 },
  tx =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  nx = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function Fu(e) {
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let o = tx.exec(e || ""),
    i = {},
    s = 14;
  for (; s--; ) i[nx[s]] = o[s] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((i.source = t),
      (i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":")),
      (i.authority = i.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (i.ipv6uri = !0)),
    (i.pathNames = rx(i, i.path)),
    (i.queryKey = ox(i, i.query)),
    i
  );
}
function rx(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function ox(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, o, i) {
      o && (n[o] = i);
    }),
    n
  );
}
let Eg = class $r extends Ne {
  constructor(t, n = {}) {
    super(),
      (this.writeBuffer = []),
      t && typeof t == "object" && ((n = t), (t = null)),
      t
        ? ((t = Fu(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === "https" || t.protocol === "wss"),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = Fu(n.host).host),
      ml(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = n.transports || ["polling", "websocket"]),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !0,
        },
        n
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = q1(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == "function" &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
        this.hostname !== "localhost" &&
          ((this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost",
            });
          }),
          addEventListener("offline", this.offlineEventListener, !1))),
      this.open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = gg), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts.transportOptions[t], this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port,
    });
    return new ex[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      $r.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    )
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this.onDrain.bind(this))
        .on("packet", this.onPacket.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", (n) => this.onClose("transport close", n));
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1;
    $r.priorWebsocketSuccess = !1;
    const o = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (p) => {
          if (!r)
            if (p.type === "pong" && p.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              ($r.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (d(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const f = new Error("probe error");
              (f.transport = n.name), this.emitReserved("upgradeError", f);
            }
        }));
    };
    function i() {
      r || ((r = !0), d(), n.close(), (n = null));
    }
    const s = (p) => {
      const f = new Error("probe error: " + p);
      (f.transport = n.name), i(), this.emitReserved("upgradeError", f);
    };
    function l() {
      s("transport closed");
    }
    function a() {
      s("socket closed");
    }
    function u(p) {
      n && p.name !== n.name && i();
    }
    const d = () => {
      n.removeListener("open", o),
        n.removeListener("error", s),
        n.removeListener("close", l),
        this.off("close", a),
        this.off("upgrading", u);
    };
    n.once("open", o),
      n.once("error", s),
      n.once("close", l),
      this.once("close", a),
      this.once("upgrading", u),
      n.open();
  }
  onOpen() {
    if (
      ((this.readyState = "open"),
      ($r.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush(),
      this.readyState === "open" && this.opts.upgrade)
    ) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.resetPingTimeout(),
            this.sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          (n.code = t.data), this.onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if ((o && (n += j1(o)), r > 0 && n > this.maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  write(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  sendPacket(t, n, r, o) {
    if (
      (typeof n == "function" && ((o = n), (n = void 0)),
      typeof r == "function" && ((o = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const i = { type: t, data: n, options: r };
    this.emitReserved("packetCreate", i),
      this.writeBuffer.push(i),
      o && this.once("flush", o),
      this.flush();
  }
  close() {
    const t = () => {
        this.onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), t();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  onError(t) {
    ($r.priorWebsocketSuccess = !1),
      this.emitReserved("error", t),
      this.onClose("transport error", t);
  }
  onClose(t, n) {
    (this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing") &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners("close"),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == "function" &&
        (removeEventListener(
          "beforeunload",
          this.beforeunloadEventListener,
          !1
        ),
        removeEventListener("offline", this.offlineEventListener, !1)),
      (this.readyState = "closed"),
      (this.id = null),
      this.emitReserved("close", t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const o = t.length;
    for (; r < o; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
Eg.protocol = gg;
function ix(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = Fu(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + i + ":" + r.port + t),
    (r.href =
      r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const sx = typeof ArrayBuffer == "function",
  lx = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  Rg = Object.prototype.toString,
  ax =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Rg.call(Blob) === "[object BlobConstructor]"),
  ux =
    typeof File == "function" ||
    (typeof File < "u" && Rg.call(File) === "[object FileConstructor]");
function Hc(e) {
  return (
    (sx && (e instanceof ArrayBuffer || lx(e))) ||
    (ax && e instanceof Blob) ||
    (ux && e instanceof File)
  );
}
function gs(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (gs(e[n])) return !0;
    return !1;
  }
  if (Hc(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return gs(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && gs(e[n])) return !0;
  return !1;
}
function cx(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = zu(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function zu(e, t) {
  if (!e) return e;
  if (Hc(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = zu(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = zu(e[r], t));
    return n;
  }
  return e;
}
function dx(e, t) {
  return (e.data = Bu(e.data, t)), delete e.attachments, e;
}
function Bu(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = Bu(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Bu(e[n], t));
  return e;
}
const fx = 5;
var re;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(re || (re = {}));
class px {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === re.EVENT || t.type === re.ACK) && gs(t)
      ? this.encodeAsBinary({
          type: t.type === re.EVENT ? re.BINARY_EVENT : re.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === re.BINARY_EVENT || t.type === re.BINARY_ACK) &&
        (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = cx(t),
      r = this.encodeAsString(n.packet),
      o = n.buffers;
    return o.unshift(r), o;
  }
}
class Kc extends Ne {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === re.BINARY_EVENT;
      r || n.type === re.BINARY_ACK
        ? ((n.type = r ? re.EVENT : re.ACK),
          (this.reconstructor = new hx(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (Hc(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (re[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === re.BINARY_EVENT || r.type === re.BINARY_ACK) {
      const i = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const s = t.substring(i, n);
      if (s != Number(s) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (t.charAt(n + 1) === "/") {
      const i = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(i, n);
    } else r.nsp = "/";
    const o = t.charAt(n + 1);
    if (o !== "" && Number(o) == o) {
      const i = n + 1;
      for (; ++n; ) {
        const s = t.charAt(n);
        if (s == null || Number(s) != s) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(i, n + 1));
    }
    if (t.charAt(++n)) {
      const i = this.tryParse(t.substr(n));
      if (Kc.isPayloadValid(r.type, i)) r.data = i;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case re.CONNECT:
        return typeof n == "object";
      case re.DISCONNECT:
        return n === void 0;
      case re.CONNECT_ERROR:
        return typeof n == "string" || typeof n == "object";
      case re.EVENT:
      case re.BINARY_EVENT:
        return Array.isArray(n) && n.length > 0;
      case re.ACK:
      case re.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class hx {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = dx(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const mx = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Kc,
      Encoder: px,
      get PacketType() {
        return re;
      },
      protocol: fx,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function zt(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const gx = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Pg extends Ne {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      zt(t, "open", this.onopen.bind(this)),
      zt(t, "packet", this.onpacket.bind(this)),
      zt(t, "error", this.onerror.bind(this)),
      zt(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    if (gx.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this;
    const r = { type: re.EVENT, data: n };
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const s = this.ids++,
        l = n.pop();
      this._registerAckCallback(s, l), (r.id = s);
    }
    const o =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!o || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const o =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = n;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let s = 0; s < this.sendBuffer.length; s++)
        this.sendBuffer[s].id === t && this.sendBuffer.splice(s, 1);
      n.call(this, new Error("operation has timed out"));
    }, o);
    this.acks[t] = (...s) => {
      this.io.clearTimeoutFn(i), n.apply(this, [null, ...s]);
    };
  }
  emitWithAck(t, ...n) {
    const r = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((o, i) => {
      n.push((s, l) => (r ? (s ? i(s) : o(l)) : o(s))), this.emit(t, ...n);
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((o, ...i) =>
      r !== this._queue[0]
        ? void 0
        : (o !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(o))
            : (this._queue.shift(), n && n(null, ...i)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: re.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, n);
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case re.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case re.EVENT:
        case re.BINARY_EVENT:
          this.onevent(t);
          break;
        case re.ACK:
        case re.BINARY_ACK:
          this.onack(t);
          break;
        case re.DISCONNECT:
          this.ondisconnect();
          break;
        case re.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...o) {
      r || ((r = !0), n.packet({ type: re.ACK, id: t, data: o }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" && (n.apply(this, t.data), delete this.acks[t.id]);
  }
  onconnect(t, n) {
    (this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: re.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function go(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
go.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
go.prototype.reset = function () {
  this.attempts = 0;
};
go.prototype.setMin = function (e) {
  this.ms = e;
};
go.prototype.setMax = function (e) {
  this.max = e;
};
go.prototype.setJitter = function (e) {
  this.jitter = e;
};
class Du extends Ne {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      ml(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new go({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const o = n.parser || mx;
    (this.encoder = new o.Encoder()),
      (this.decoder = new o.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new Eg(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const o = zt(n, "open", function () {
        r.onopen(), t && t();
      }),
      i = zt(n, "error", (s) => {
        r.cleanup(),
          (r._readyState = "closed"),
          this.emitReserved("error", s),
          t ? t(s) : r.maybeReconnectOnOpen();
      });
    if (this._timeout !== !1) {
      const s = this._timeout;
      s === 0 && o();
      const l = this.setTimeoutFn(() => {
        o(), n.close(), n.emit("error", new Error("timeout"));
      }, s);
      this.opts.autoUnref && l.unref(),
        this.subs.push(function () {
          clearTimeout(l);
        });
    }
    return this.subs.push(o), this.subs.push(i), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      zt(t, "ping", this.onping.bind(this)),
      zt(t, "data", this.ondata.bind(this)),
      zt(t, "error", this.onerror.bind(this)),
      zt(t, "close", this.onclose.bind(this)),
      zt(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    kg(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new Pg(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((o) => {
              o
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", o))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(function () {
          clearTimeout(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const Po = {};
function ys(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = ix(e, t.path || "/socket.io"),
    r = n.source,
    o = n.id,
    i = n.path,
    s = Po[o] && i in Po[o].nsps,
    l = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let a;
  return (
    l ? (a = new Du(r, t)) : (Po[o] || (Po[o] = new Du(r, t)), (a = Po[o])),
    n.query && !t.query && (t.query = n.queryKey),
    a.socket(n.path, t)
  );
}
Object.assign(ys, { Manager: Du, Socket: Pg, io: ys, connect: ys });
function x() {
  return (
    (x = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    x.apply(this, arguments)
  );
}
function or(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Tg(e) {
  if (!or(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = Tg(e[n]);
    }),
    t
  );
}
function _t(e, t, n = { clone: !0 }) {
  const r = n.clone ? x({}, e) : e;
  return (
    or(e) &&
      or(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (or(t[o]) && o in e && or(e[o])
            ? (r[o] = _t(e[o], t[o], n))
            : n.clone
            ? (r[o] = or(t[o]) ? Tg(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function Hn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Jf = {},
  yx = {
    get exports() {
      return Jf;
    },
    set exports(e) {
      Jf = e;
    },
  },
  ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qc = Symbol.for("react.element"),
  Gc = Symbol.for("react.portal"),
  gl = Symbol.for("react.fragment"),
  yl = Symbol.for("react.strict_mode"),
  vl = Symbol.for("react.profiler"),
  xl = Symbol.for("react.provider"),
  Sl = Symbol.for("react.context"),
  vx = Symbol.for("react.server_context"),
  wl = Symbol.for("react.forward_ref"),
  bl = Symbol.for("react.suspense"),
  Cl = Symbol.for("react.suspense_list"),
  kl = Symbol.for("react.memo"),
  El = Symbol.for("react.lazy"),
  xx = Symbol.for("react.offscreen"),
  $g;
$g = Symbol.for("react.module.reference");
function Ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case qc:
        switch (((e = e.type), e)) {
          case gl:
          case vl:
          case yl:
          case bl:
          case Cl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case vx:
              case Sl:
              case wl:
              case El:
              case kl:
              case xl:
                return e;
              default:
                return t;
            }
        }
      case Gc:
        return t;
    }
  }
}
ce.ContextConsumer = Sl;
ce.ContextProvider = xl;
ce.Element = qc;
ce.ForwardRef = wl;
ce.Fragment = gl;
ce.Lazy = El;
ce.Memo = kl;
ce.Portal = Gc;
ce.Profiler = vl;
ce.StrictMode = yl;
ce.Suspense = bl;
ce.SuspenseList = Cl;
ce.isAsyncMode = function () {
  return !1;
};
ce.isConcurrentMode = function () {
  return !1;
};
ce.isContextConsumer = function (e) {
  return Ot(e) === Sl;
};
ce.isContextProvider = function (e) {
  return Ot(e) === xl;
};
ce.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === qc;
};
ce.isForwardRef = function (e) {
  return Ot(e) === wl;
};
ce.isFragment = function (e) {
  return Ot(e) === gl;
};
ce.isLazy = function (e) {
  return Ot(e) === El;
};
ce.isMemo = function (e) {
  return Ot(e) === kl;
};
ce.isPortal = function (e) {
  return Ot(e) === Gc;
};
ce.isProfiler = function (e) {
  return Ot(e) === vl;
};
ce.isStrictMode = function (e) {
  return Ot(e) === yl;
};
ce.isSuspense = function (e) {
  return Ot(e) === bl;
};
ce.isSuspenseList = function (e) {
  return Ot(e) === Cl;
};
ce.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === gl ||
    e === vl ||
    e === yl ||
    e === bl ||
    e === Cl ||
    e === xx ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === El ||
        e.$$typeof === kl ||
        e.$$typeof === xl ||
        e.$$typeof === Sl ||
        e.$$typeof === wl ||
        e.$$typeof === $g ||
        e.getModuleId !== void 0))
  );
};
ce.typeOf = Ot;
(function (e) {
  e.exports = ce;
})(yx);
function H(e) {
  if (typeof e != "string") throw new Error(Hn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ks(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function Qc(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function Sx(e, t) {
  return () => null;
}
function Go(e, t) {
  return y.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function dt(e) {
  return (e && e.ownerDocument) || document;
}
function Kn(e) {
  return dt(e).defaultView || window;
}
function wx(e, t) {
  return () => null;
}
function qs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const bx = typeof window < "u" ? y.useLayoutEffect : y.useEffect,
  qn = bx;
let ep = 0;
function Cx(e) {
  const [t, n] = y.useState(e),
    r = e || t;
  return (
    y.useEffect(() => {
      t == null && ((ep += 1), n(`mui-${ep}`));
    }, [t]),
    r
  );
}
const tp = Jr["useId"];
function Rl(e) {
  if (tp !== void 0) {
    const t = tp();
    return e ?? t;
  }
  return Cx(e);
}
function kx(e, t, n, r, o) {
  return null;
}
function yi({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = y.useRef(e !== void 0),
    [i, s] = y.useState(t),
    l = o ? e : i,
    a = y.useCallback((u) => {
      o || s(u);
    }, []);
  return [l, a];
}
function ur(e) {
  const t = y.useRef(e);
  return (
    qn(() => {
      t.current = e;
    }),
    y.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function Ke(...e) {
  return y.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              qs(n, t);
            });
          },
    e
  );
}
let Pl = !0,
  Uu = !1,
  np;
const Ex = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function Rx(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && Ex[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function Px(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Pl = !0);
}
function Ia() {
  Pl = !1;
}
function Tx() {
  this.visibilityState === "hidden" && Uu && (Pl = !0);
}
function $x(e) {
  e.addEventListener("keydown", Px, !0),
    e.addEventListener("mousedown", Ia, !0),
    e.addEventListener("pointerdown", Ia, !0),
    e.addEventListener("touchstart", Ia, !0),
    e.addEventListener("visibilitychange", Tx, !0);
}
function _x(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Pl || Rx(t);
}
function _g() {
  const e = y.useCallback((o) => {
      o != null && $x(o.ownerDocument);
    }, []),
    t = y.useRef(!1);
  function n() {
    return t.current
      ? ((Uu = !0),
        window.clearTimeout(np),
        (np = window.setTimeout(() => {
          Uu = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return _x(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function Ig(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Yc(e, t) {
  const n = x({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = x({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = x({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = Yc(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function ee(e, t, n) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce(
          (i, s) => (s && (i.push(t(s)), n && n[s] && i.push(n[s])), i),
          []
        )
        .join(" ");
    }),
    r
  );
}
const rp = (e) => e,
  Ix = () => {
    let e = rp;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = rp;
      },
    };
  },
  Nx = Ix(),
  Ng = Nx,
  Ox = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected",
  };
function X(e, t, n = "Mui") {
  const r = Ox[t];
  return r ? `${n}-${r}` : `${Ng.generate(e)}-${t}`;
}
function Y(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = X(e, o, n);
    }),
    r
  );
}
function j(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Og(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Mx =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Lx = Og(function (e) {
    return (
      Mx.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function Ax(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Fx(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var zx = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Fx(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Ax(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Qe = "-ms-",
  Gs = "-moz-",
  se = "-webkit-",
  Mg = "comm",
  Xc = "rule",
  Zc = "decl",
  Bx = "@import",
  Lg = "@keyframes",
  Dx = Math.abs,
  Tl = String.fromCharCode,
  Ux = Object.assign;
function Wx(e, t) {
  return je(e, 0) ^ 45
    ? (((((((t << 2) ^ je(e, 0)) << 2) ^ je(e, 1)) << 2) ^ je(e, 2)) << 2) ^
        je(e, 3)
    : 0;
}
function Ag(e) {
  return e.trim();
}
function jx(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function le(e, t, n) {
  return e.replace(t, n);
}
function Wu(e, t) {
  return e.indexOf(t);
}
function je(e, t) {
  return e.charCodeAt(t) | 0;
}
function vi(e, t, n) {
  return e.slice(t, n);
}
function Xt(e) {
  return e.length;
}
function Jc(e) {
  return e.length;
}
function Xi(e, t) {
  return t.push(e), e;
}
function Vx(e, t) {
  return e.map(t).join("");
}
var $l = 1,
  ao = 1,
  Fg = 0,
  ft = 0,
  _e = 0,
  yo = "";
function _l(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: $l,
    column: ao,
    length: s,
    return: "",
  };
}
function To(e, t) {
  return Ux(_l("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Hx() {
  return _e;
}
function Kx() {
  return (
    (_e = ft > 0 ? je(yo, --ft) : 0), ao--, _e === 10 && ((ao = 1), $l--), _e
  );
}
function vt() {
  return (
    (_e = ft < Fg ? je(yo, ft++) : 0), ao++, _e === 10 && ((ao = 1), $l++), _e
  );
}
function sn() {
  return je(yo, ft);
}
function vs() {
  return ft;
}
function Pi(e, t) {
  return vi(yo, e, t);
}
function xi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function zg(e) {
  return ($l = ao = 1), (Fg = Xt((yo = e))), (ft = 0), [];
}
function Bg(e) {
  return (yo = ""), e;
}
function xs(e) {
  return Ag(Pi(ft - 1, ju(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qx(e) {
  for (; (_e = sn()) && _e < 33; ) vt();
  return xi(e) > 2 || xi(_e) > 3 ? "" : " ";
}
function Gx(e, t) {
  for (
    ;
    --t &&
    vt() &&
    !(_e < 48 || _e > 102 || (_e > 57 && _e < 65) || (_e > 70 && _e < 97));

  );
  return Pi(e, vs() + (t < 6 && sn() == 32 && vt() == 32));
}
function ju(e) {
  for (; vt(); )
    switch (_e) {
      case e:
        return ft;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ju(_e);
        break;
      case 40:
        e === 41 && ju(e);
        break;
      case 92:
        vt();
        break;
    }
  return ft;
}
function Qx(e, t) {
  for (; vt() && e + _e !== 47 + 10; )
    if (e + _e === 42 + 42 && sn() === 47) break;
  return "/*" + Pi(t, ft - 1) + "*" + Tl(e === 47 ? e : vt());
}
function Yx(e) {
  for (; !xi(sn()); ) vt();
  return Pi(e, ft);
}
function Xx(e) {
  return Bg(Ss("", null, null, null, [""], (e = zg(e)), 0, [0], e));
}
function Ss(e, t, n, r, o, i, s, l, a) {
  for (
    var u = 0,
      d = 0,
      p = s,
      f = 0,
      b = 0,
      v = 0,
      g = 1,
      C = 1,
      h = 1,
      c = 0,
      m = "",
      S = o,
      w = i,
      k = r,
      E = m;
    C;

  )
    switch (((v = c), (c = vt()))) {
      case 40:
        if (v != 108 && je(E, p - 1) == 58) {
          Wu((E += le(xs(c), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += xs(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += qx(v);
        break;
      case 92:
        E += Gx(vs() - 1, 7);
        continue;
      case 47:
        switch (sn()) {
          case 42:
          case 47:
            Xi(Zx(Qx(vt(), vs()), t, n), a);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * g:
        l[u++] = Xt(E) * h;
      case 125 * g:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            b > 0 &&
              Xt(E) - p &&
              Xi(
                b > 32
                  ? ip(E + ";", r, n, p - 1)
                  : ip(le(E, " ", "") + ";", r, n, p - 2),
                a
              );
            break;
          case 59:
            E += ";";
          default:
            if (
              (Xi((k = op(E, t, n, u, d, o, l, m, (S = []), (w = []), p)), i),
              c === 123)
            )
              if (d === 0) Ss(E, t, k, k, S, i, p, l, w);
              else
                switch (f === 99 && je(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    Ss(
                      e,
                      k,
                      k,
                      r && Xi(op(e, k, k, 0, 0, o, l, m, o, (S = []), p), w),
                      o,
                      w,
                      p,
                      l,
                      r ? S : w
                    );
                    break;
                  default:
                    Ss(E, k, k, k, [""], w, 0, l, w);
                }
        }
        (u = d = b = 0), (g = h = 1), (m = E = ""), (p = s);
        break;
      case 58:
        (p = 1 + Xt(E)), (b = v);
      default:
        if (g < 1) {
          if (c == 123) --g;
          else if (c == 125 && g++ == 0 && Kx() == 125) continue;
        }
        switch (((E += Tl(c)), c * g)) {
          case 38:
            h = d > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (l[u++] = (Xt(E) - 1) * h), (h = 1);
            break;
          case 64:
            sn() === 45 && (E += xs(vt())),
              (f = sn()),
              (d = p = Xt((m = E += Yx(vs())))),
              c++;
            break;
          case 45:
            v === 45 && Xt(E) == 2 && (g = 0);
        }
    }
  return i;
}
function op(e, t, n, r, o, i, s, l, a, u, d) {
  for (
    var p = o - 1, f = o === 0 ? i : [""], b = Jc(f), v = 0, g = 0, C = 0;
    v < r;
    ++v
  )
    for (var h = 0, c = vi(e, p + 1, (p = Dx((g = s[v])))), m = e; h < b; ++h)
      (m = Ag(g > 0 ? f[h] + " " + c : le(c, /&\f/g, f[h]))) && (a[C++] = m);
  return _l(e, t, n, o === 0 ? Xc : l, a, u, d);
}
function Zx(e, t, n) {
  return _l(e, t, n, Mg, Tl(Hx()), vi(e, 2, -2), 0);
}
function ip(e, t, n, r) {
  return _l(e, t, n, Zc, vi(e, 0, r), vi(e, r + 1, -1), r);
}
function Yr(e, t) {
  for (var n = "", r = Jc(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function Jx(e, t, n, r) {
  switch (e.type) {
    case Bx:
    case Zc:
      return (e.return = e.return || e.value);
    case Mg:
      return "";
    case Lg:
      return (e.return = e.value + "{" + Yr(e.children, r) + "}");
    case Xc:
      e.value = e.props.join(",");
  }
  return Xt((n = Yr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function eS(e) {
  var t = Jc(e);
  return function (n, r, o, i) {
    for (var s = "", l = 0; l < t; l++) s += e[l](n, r, o, i) || "";
    return s;
  };
}
function tS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var nS = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = sn()), o === 38 && i === 12 && (n[r] = 1), !xi(i);

    )
      vt();
    return Pi(t, ft);
  },
  rS = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (xi(o)) {
        case 0:
          o === 38 && sn() === 12 && (n[r] = 1), (t[r] += nS(ft - 1, n, r));
          break;
        case 2:
          t[r] += xs(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = sn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Tl(o);
      }
    while ((o = vt()));
    return t;
  },
  oS = function (t, n) {
    return Bg(rS(zg(t), n));
  },
  sp = new WeakMap(),
  iS = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !sp.get(r)) &&
        !o
      ) {
        sp.set(t, !0);
        for (
          var i = [], s = oS(n, i), l = r.props, a = 0, u = 0;
          a < s.length;
          a++
        )
          for (var d = 0; d < l.length; d++, u++)
            t.props[u] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a];
      }
    }
  },
  sS = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Dg(e, t) {
  switch (Wx(e, t)) {
    case 5103:
      return se + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + Gs + e + Qe + e + e;
    case 6828:
    case 4268:
      return se + e + Qe + e + e;
    case 6165:
      return se + e + Qe + "flex-" + e + e;
    case 5187:
      return (
        se + e + le(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + Qe + "flex-$1$2") + e
      );
    case 5443:
      return se + e + Qe + "flex-item-" + le(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        se +
        e +
        Qe +
        "flex-line-pack" +
        le(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return se + e + Qe + le(e, "shrink", "negative") + e;
    case 5292:
      return se + e + Qe + le(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        se +
        "box-" +
        le(e, "-grow", "") +
        se +
        e +
        Qe +
        le(e, "grow", "positive") +
        e
      );
    case 4554:
      return se + le(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    case 6187:
      return (
        le(
          le(le(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return le(e, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return (
        le(
          le(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + Qe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        se +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return le(e, /(.+)-inline(.+)/, se + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Xt(e) - 1 - t > 6)
        switch (je(e, t + 1)) {
          case 109:
            if (je(e, t + 4) !== 45) break;
          case 102:
            return (
              le(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  se +
                  "$2-$3$1" +
                  Gs +
                  (je(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Wu(e, "stretch")
              ? Dg(le(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (je(e, t + 1) !== 115) break;
    case 6444:
      switch (je(e, Xt(e) - 3 - (~Wu(e, "!important") && 10))) {
        case 107:
          return le(e, ":", ":" + se) + e;
        case 101:
          return (
            le(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                se +
                (je(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                se +
                "$2$3$1" +
                Qe +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (je(e, t + 11)) {
        case 114:
          return se + e + Qe + le(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return se + e + Qe + le(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return se + e + Qe + le(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return se + e + Qe + e + e;
  }
  return e;
}
var lS = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Zc:
          t.return = Dg(t.value, t.length);
          break;
        case Lg:
          return Yr([To(t, { value: le(t.value, "@", "@" + se) })], o);
        case Xc:
          if (t.length)
            return Vx(t.props, function (i) {
              switch (jx(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Yr(
                    [To(t, { props: [le(i, /:(read-\w+)/, ":" + Gs + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Yr(
                    [
                      To(t, {
                        props: [le(i, /:(plac\w+)/, ":" + se + "input-$1")],
                      }),
                      To(t, { props: [le(i, /:(plac\w+)/, ":" + Gs + "$1")] }),
                      To(t, { props: [le(i, /:(plac\w+)/, Qe + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  aS = [lS],
  uS = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var C = g.getAttribute("data-emotion");
        C.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || aS,
      i = {},
      s,
      l = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var C = g.getAttribute("data-emotion").split(" "), h = 1;
            h < C.length;
            h++
          )
            i[C[h]] = !0;
          l.push(g);
        }
      );
    var a,
      u = [iS, sS];
    {
      var d,
        p = [
          Jx,
          tS(function (g) {
            d.insert(g);
          }),
        ],
        f = eS(u.concat(o, p)),
        b = function (C) {
          return Yr(Xx(C), f);
        };
      a = function (C, h, c, m) {
        (d = c),
          b(C ? C + "{" + h.styles + "}" : h.styles),
          m && (v.inserted[h.name] = !0);
      };
    }
    var v = {
      key: n,
      sheet: new zx({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: a,
    };
    return v.sheet.hydrate(l), v;
  },
  Vu = {},
  cS = {
    get exports() {
      return Vu;
    },
    set exports(e) {
      Vu = e;
    },
  },
  de = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ue = typeof Symbol == "function" && Symbol.for,
  ed = Ue ? Symbol.for("react.element") : 60103,
  td = Ue ? Symbol.for("react.portal") : 60106,
  Il = Ue ? Symbol.for("react.fragment") : 60107,
  Nl = Ue ? Symbol.for("react.strict_mode") : 60108,
  Ol = Ue ? Symbol.for("react.profiler") : 60114,
  Ml = Ue ? Symbol.for("react.provider") : 60109,
  Ll = Ue ? Symbol.for("react.context") : 60110,
  nd = Ue ? Symbol.for("react.async_mode") : 60111,
  Al = Ue ? Symbol.for("react.concurrent_mode") : 60111,
  Fl = Ue ? Symbol.for("react.forward_ref") : 60112,
  zl = Ue ? Symbol.for("react.suspense") : 60113,
  dS = Ue ? Symbol.for("react.suspense_list") : 60120,
  Bl = Ue ? Symbol.for("react.memo") : 60115,
  Dl = Ue ? Symbol.for("react.lazy") : 60116,
  fS = Ue ? Symbol.for("react.block") : 60121,
  pS = Ue ? Symbol.for("react.fundamental") : 60117,
  hS = Ue ? Symbol.for("react.responder") : 60118,
  mS = Ue ? Symbol.for("react.scope") : 60119;
function bt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ed:
        switch (((e = e.type), e)) {
          case nd:
          case Al:
          case Il:
          case Ol:
          case Nl:
          case zl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ll:
              case Fl:
              case Dl:
              case Bl:
              case Ml:
                return e;
              default:
                return t;
            }
        }
      case td:
        return t;
    }
  }
}
function Ug(e) {
  return bt(e) === Al;
}
de.AsyncMode = nd;
de.ConcurrentMode = Al;
de.ContextConsumer = Ll;
de.ContextProvider = Ml;
de.Element = ed;
de.ForwardRef = Fl;
de.Fragment = Il;
de.Lazy = Dl;
de.Memo = Bl;
de.Portal = td;
de.Profiler = Ol;
de.StrictMode = Nl;
de.Suspense = zl;
de.isAsyncMode = function (e) {
  return Ug(e) || bt(e) === nd;
};
de.isConcurrentMode = Ug;
de.isContextConsumer = function (e) {
  return bt(e) === Ll;
};
de.isContextProvider = function (e) {
  return bt(e) === Ml;
};
de.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ed;
};
de.isForwardRef = function (e) {
  return bt(e) === Fl;
};
de.isFragment = function (e) {
  return bt(e) === Il;
};
de.isLazy = function (e) {
  return bt(e) === Dl;
};
de.isMemo = function (e) {
  return bt(e) === Bl;
};
de.isPortal = function (e) {
  return bt(e) === td;
};
de.isProfiler = function (e) {
  return bt(e) === Ol;
};
de.isStrictMode = function (e) {
  return bt(e) === Nl;
};
de.isSuspense = function (e) {
  return bt(e) === zl;
};
de.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Il ||
    e === Al ||
    e === Ol ||
    e === Nl ||
    e === zl ||
    e === dS ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Dl ||
        e.$$typeof === Bl ||
        e.$$typeof === Ml ||
        e.$$typeof === Ll ||
        e.$$typeof === Fl ||
        e.$$typeof === pS ||
        e.$$typeof === hS ||
        e.$$typeof === mS ||
        e.$$typeof === fS))
  );
};
de.typeOf = bt;
(function (e) {
  e.exports = de;
})(cS);
var Wg = Vu,
  gS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  yS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  jg = {};
jg[Wg.ForwardRef] = gS;
jg[Wg.Memo] = yS;
var vS = !0;
function xS(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Vg = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || vS === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Hg = function (t, n, r) {
    Vg(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function SS(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var wS = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  bS = /[A-Z]|^ms/g,
  CS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Kg = function (t) {
    return t.charCodeAt(1) === 45;
  },
  lp = function (t) {
    return t != null && typeof t != "boolean";
  },
  Na = Og(function (e) {
    return Kg(e) ? e : e.replace(bS, "-$&").toLowerCase();
  }),
  ap = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(CS, function (r, o, i) {
            return (Zt = { name: o, styles: i, next: Zt }), o;
          });
    }
    return wS[t] !== 1 && !Kg(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Si(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Zt = { name: n.name, styles: n.styles, next: Zt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Zt = { name: r.name, styles: r.styles, next: Zt }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return kS(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Zt,
          s = n(e);
        return (Zt = i), Si(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function kS(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Si(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : lp(s) && (r += Na(i) + ":" + ap(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var l = 0; l < s.length; l++)
          lp(s[l]) && (r += Na(i) + ":" + ap(i, s[l]) + ";");
      else {
        var a = Si(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Na(i) + ":" + a + ";";
            break;
          }
          default:
            r += i + "{" + a + "}";
        }
      }
    }
  return r;
}
var up = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Zt,
  rd = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Zt = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += Si(r, n, s)))
      : (i += s[0]);
    for (var l = 1; l < t.length; l++) (i += Si(r, n, t[l])), o && (i += s[l]);
    up.lastIndex = 0;
    for (var a = "", u; (u = up.exec(i)) !== null; ) a += "-" + u[1];
    var d = SS(i) + a;
    return { name: d, styles: i, next: Zt };
  },
  ES = function (t) {
    return t();
  },
  qg = Jr["useInsertionEffect"] ? Jr["useInsertionEffect"] : !1,
  RS = qg || ES,
  cp = qg || y.useLayoutEffect,
  Gg = y.createContext(typeof HTMLElement < "u" ? uS({ key: "css" }) : null);
Gg.Provider;
var Qg = function (t) {
    return y.forwardRef(function (n, r) {
      var o = y.useContext(Gg);
      return t(n, o, r);
    });
  },
  od = y.createContext({}),
  PS = Qg(function (e, t) {
    var n = e.styles,
      r = rd([n], void 0, y.useContext(od)),
      o = y.useRef();
    return (
      cp(
        function () {
          var i = t.key + "-global",
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            l = !1,
            a = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            a !== null &&
              ((l = !0), a.setAttribute("data-emotion", i), s.hydrate([a])),
            (o.current = [s, l]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      cp(
        function () {
          var i = o.current,
            s = i[0],
            l = i[1];
          if (l) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && Hg(t, r.next, !0), s.tags.length)) {
            var a = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = a), s.flush();
          }
          t.insert("", r, s, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function TS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return rd(t);
}
var id = function () {
    var t = TS.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  $S = Lx,
  _S = function (t) {
    return t !== "theme";
  },
  dp = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? $S : _S;
  },
  fp = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  IS = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Vg(n, r, o),
      RS(function () {
        return Hg(n, r, o);
      }),
      null
    );
  },
  NS = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var l = fp(t, n, r),
      a = l || dp(o),
      u = !a("as");
    return function () {
      var d = arguments,
        p =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && p.push("label:" + i + ";"),
        d[0] == null || d[0].raw === void 0)
      )
        p.push.apply(p, d);
      else {
        p.push(d[0][0]);
        for (var f = d.length, b = 1; b < f; b++) p.push(d[b], d[0][b]);
      }
      var v = Qg(function (g, C, h) {
        var c = (u && g.as) || o,
          m = "",
          S = [],
          w = g;
        if (g.theme == null) {
          w = {};
          for (var k in g) w[k] = g[k];
          w.theme = y.useContext(od);
        }
        typeof g.className == "string"
          ? (m = xS(C.registered, S, g.className))
          : g.className != null && (m = g.className + " ");
        var E = rd(p.concat(S), C.registered, w);
        (m += C.key + "-" + E.name), s !== void 0 && (m += " " + s);
        var P = u && l === void 0 ? dp(c) : a,
          _ = {};
        for (var T in g) (u && T === "as") || (P(T) && (_[T] = g[T]));
        return (
          (_.className = m),
          (_.ref = h),
          y.createElement(
            y.Fragment,
            null,
            y.createElement(IS, {
              cache: C,
              serialized: E,
              isStringTag: typeof c == "string",
            }),
            y.createElement(c, _)
          )
        );
      });
      return (
        (v.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = p),
        (v.__emotion_forwardProp = l),
        Object.defineProperty(v, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (v.withComponent = function (g, C) {
          return e(g, x({}, n, C, { shouldForwardProp: fp(v, C, !0) })).apply(
            void 0,
            p
          );
        }),
        v
      );
    };
  },
  OS = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Hu = NS.bind();
OS.forEach(function (e) {
  Hu[e] = Hu(e);
});
const MS = Hu;
function LS(e) {
  return e == null || Object.keys(e).length === 0;
}
function AS(e) {
  const { styles: t, defaultTheme: n = {} } = e;
  return R(PS, {
    styles: typeof t == "function" ? (o) => t(LS(o) ? n : o) : t,
  });
}
/**
 * @mui/styled-engine v5.11.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function FS(e, t) {
  return MS(e, t);
}
const zS = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function Qo(e, t) {
  return t ? _t(e, t, { clone: !1 }) : e;
}
const sd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  pp = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${sd[e]}px)`,
  };
function xn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || pp;
    return t.reduce((s, l, a) => ((s[i.up(i.keys[a])] = n(t[a])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || pp;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || sd).indexOf(l) !== -1) {
        const a = i.up(l);
        s[a] = n(t[l], l);
      } else {
        const a = l;
        s[a] = t[a];
      }
      return s;
    }, {});
  }
  return n(t);
}
function BS(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function DS(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Ul(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Qs(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Ul(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function ae(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const l = s[t],
        a = s.theme,
        u = Ul(a, r) || {};
      return xn(s, l, (p) => {
        let f = Qs(u, o, p);
        return (
          p === f &&
            typeof p == "string" &&
            (f = Qs(u, o, `${t}${p === "default" ? "" : H(p)}`, p)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function Wl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Qo(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function US(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const WS = { m: "margin", p: "padding" },
  jS = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  hp = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  VS = US((e) => {
    if (e.length > 2)
      if (hp[e]) e = hp[e];
      else return [e];
    const [t, n] = e.split(""),
      r = WS[t],
      o = jS[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  ld = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  ad = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...ld, ...ad];
function Ti(e, t, n, r) {
  var o;
  const i = (o = Ul(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function Yg(e) {
  return Ti(e, "spacing", 8);
}
function $i(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function HS(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = $i(t, n)), r), {});
}
function KS(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = VS(n),
    i = HS(o, r),
    s = e[n];
  return xn(e, s, i);
}
function Xg(e, t) {
  const n = Yg(e.theme);
  return Object.keys(e)
    .map((r) => KS(e, t, r, n))
    .reduce(Qo, {});
}
function Ee(e) {
  return Xg(e, ld);
}
Ee.propTypes = {};
Ee.filterProps = ld;
function Re(e) {
  return Xg(e, ad);
}
Re.propTypes = {};
Re.filterProps = ad;
function en(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const qS = ae({ prop: "border", themeKey: "borders", transform: en }),
  GS = ae({ prop: "borderTop", themeKey: "borders", transform: en }),
  QS = ae({ prop: "borderRight", themeKey: "borders", transform: en }),
  YS = ae({ prop: "borderBottom", themeKey: "borders", transform: en }),
  XS = ae({ prop: "borderLeft", themeKey: "borders", transform: en }),
  ZS = ae({ prop: "borderColor", themeKey: "palette" }),
  JS = ae({ prop: "borderTopColor", themeKey: "palette" }),
  ew = ae({ prop: "borderRightColor", themeKey: "palette" }),
  tw = ae({ prop: "borderBottomColor", themeKey: "palette" }),
  nw = ae({ prop: "borderLeftColor", themeKey: "palette" }),
  jl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Ti(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: $i(t, r) });
      return xn(e, e.borderRadius, n);
    }
    return null;
  };
jl.propTypes = {};
jl.filterProps = ["borderRadius"];
Wl(qS, GS, QS, YS, XS, ZS, JS, ew, tw, nw, jl);
const Vl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ti(e.theme, "spacing", 8),
      n = (r) => ({ gap: $i(t, r) });
    return xn(e, e.gap, n);
  }
  return null;
};
Vl.propTypes = {};
Vl.filterProps = ["gap"];
const Hl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ti(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: $i(t, r) });
    return xn(e, e.columnGap, n);
  }
  return null;
};
Hl.propTypes = {};
Hl.filterProps = ["columnGap"];
const Kl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ti(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: $i(t, r) });
    return xn(e, e.rowGap, n);
  }
  return null;
};
Kl.propTypes = {};
Kl.filterProps = ["rowGap"];
const rw = ae({ prop: "gridColumn" }),
  ow = ae({ prop: "gridRow" }),
  iw = ae({ prop: "gridAutoFlow" }),
  sw = ae({ prop: "gridAutoColumns" }),
  lw = ae({ prop: "gridAutoRows" }),
  aw = ae({ prop: "gridTemplateColumns" }),
  uw = ae({ prop: "gridTemplateRows" }),
  cw = ae({ prop: "gridTemplateAreas" }),
  dw = ae({ prop: "gridArea" });
Wl(Vl, Hl, Kl, rw, ow, iw, sw, lw, aw, uw, cw, dw);
function Xr(e, t) {
  return t === "grey" ? t : e;
}
const fw = ae({ prop: "color", themeKey: "palette", transform: Xr }),
  pw = ae({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Xr,
  }),
  hw = ae({ prop: "backgroundColor", themeKey: "palette", transform: Xr });
Wl(fw, pw, hw);
function ht(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const mw = ae({ prop: "width", transform: ht }),
  ud = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o, i;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (o = r.breakpoints) == null ||
            (i = o.values) == null
              ? void 0
              : i[n]) ||
            sd[n] ||
            ht(n),
        };
      };
      return xn(e, e.maxWidth, t);
    }
    return null;
  };
ud.filterProps = ["maxWidth"];
const gw = ae({ prop: "minWidth", transform: ht }),
  yw = ae({ prop: "height", transform: ht }),
  vw = ae({ prop: "maxHeight", transform: ht }),
  xw = ae({ prop: "minHeight", transform: ht });
ae({ prop: "size", cssProperty: "width", transform: ht });
ae({ prop: "size", cssProperty: "height", transform: ht });
const Sw = ae({ prop: "boxSizing" });
Wl(mw, ud, gw, yw, vw, xw, Sw);
const ww = {
    border: { themeKey: "borders", transform: en },
    borderTop: { themeKey: "borders", transform: en },
    borderRight: { themeKey: "borders", transform: en },
    borderBottom: { themeKey: "borders", transform: en },
    borderLeft: { themeKey: "borders", transform: en },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: jl },
    color: { themeKey: "palette", transform: Xr },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Xr,
    },
    backgroundColor: { themeKey: "palette", transform: Xr },
    p: { style: Re },
    pt: { style: Re },
    pr: { style: Re },
    pb: { style: Re },
    pl: { style: Re },
    px: { style: Re },
    py: { style: Re },
    padding: { style: Re },
    paddingTop: { style: Re },
    paddingRight: { style: Re },
    paddingBottom: { style: Re },
    paddingLeft: { style: Re },
    paddingX: { style: Re },
    paddingY: { style: Re },
    paddingInline: { style: Re },
    paddingInlineStart: { style: Re },
    paddingInlineEnd: { style: Re },
    paddingBlock: { style: Re },
    paddingBlockStart: { style: Re },
    paddingBlockEnd: { style: Re },
    m: { style: Ee },
    mt: { style: Ee },
    mr: { style: Ee },
    mb: { style: Ee },
    ml: { style: Ee },
    mx: { style: Ee },
    my: { style: Ee },
    margin: { style: Ee },
    marginTop: { style: Ee },
    marginRight: { style: Ee },
    marginBottom: { style: Ee },
    marginLeft: { style: Ee },
    marginX: { style: Ee },
    marginY: { style: Ee },
    marginInline: { style: Ee },
    marginInlineStart: { style: Ee },
    marginInlineEnd: { style: Ee },
    marginBlock: { style: Ee },
    marginBlockStart: { style: Ee },
    marginBlockEnd: { style: Ee },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Vl },
    rowGap: { style: Kl },
    columnGap: { style: Hl },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: ht },
    maxWidth: { style: ud },
    minWidth: { transform: ht },
    height: { transform: ht },
    maxHeight: { transform: ht },
    minHeight: { transform: ht },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  ql = ww;
function bw(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Cw(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kw() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      l = i[n];
    if (!l) return { [n]: r };
    const { cssProperty: a = n, themeKey: u, transform: d, style: p } = l;
    if (r == null) return null;
    const f = Ul(o, u) || {};
    return p
      ? p(s)
      : xn(s, r, (v) => {
          let g = Qs(f, d, v);
          return (
            v === g &&
              typeof v == "string" &&
              (g = Qs(f, d, `${n}${v === "default" ? "" : H(v)}`, v)),
            a === !1 ? g : { [a]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : ql;
    function l(a) {
      let u = a;
      if (typeof a == "function") u = a(i);
      else if (typeof a != "object") return a;
      if (!u) return null;
      const d = BS(i.breakpoints),
        p = Object.keys(d);
      let f = d;
      return (
        Object.keys(u).forEach((b) => {
          const v = Cw(u[b], i);
          if (v != null)
            if (typeof v == "object")
              if (s[b]) f = Qo(f, e(b, v, i, s));
              else {
                const g = xn({ theme: i }, v, (C) => ({ [b]: C }));
                bw(g, v) ? (f[b] = t({ sx: v, theme: i })) : (f = Qo(f, g));
              }
            else f = Qo(f, e(b, v, i, s));
        }),
        DS(p, f)
      );
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const Zg = kw();
Zg.filterProps = ["sx"];
const cd = Zg,
  Ew = ["sx"],
  Rw = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : ql;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function Pw(e) {
  const { sx: t } = e,
    n = j(e, Ew),
    { systemProps: r, otherProps: o } = Rw(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...s) => {
          const l = t(...s);
          return or(l) ? x({}, r, l) : r;
        })
      : (i = x({}, r, t)),
    x({}, o, { sx: i })
  );
}
function Jg(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Jg(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function K() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Jg(e)) && (r && (r += " "), (r += t));
  return r;
}
const Tw = ["values", "unit", "step"],
  $w = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => x({}, n, { [r.key]: r.val }), {})
    );
  };
function _w(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = j(e, Tw),
    i = $w(t),
    s = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function a(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, b) {
    const v = s.indexOf(b);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : b) - r / 100
    }${n})`;
  }
  function d(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : l(f);
  }
  function p(f) {
    const b = s.indexOf(f);
    return b === 0
      ? l(s[1])
      : b === s.length - 1
      ? a(s[b])
      : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return x(
    {
      keys: s,
      values: i,
      up: l,
      down: a,
      between: u,
      only: d,
      not: p,
      unit: n,
    },
    o
  );
}
const Iw = { borderRadius: 4 },
  Nw = Iw;
function Ow(e = 8) {
  if (e.mui) return e;
  const t = Yg({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
const Mw = ["breakpoints", "palette", "spacing", "shape"];
function dd(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = j(e, Mw),
    l = _w(n),
    a = Ow(o);
  let u = _t(
    {
      breakpoints: l,
      direction: "ltr",
      components: {},
      palette: x({ mode: "light" }, r),
      spacing: a,
      shape: x({}, Nw, i),
    },
    s
  );
  return (
    (u = t.reduce((d, p) => _t(d, p), u)),
    (u.unstable_sxConfig = x({}, ql, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (p) {
      return cd({ sx: p, theme: this });
    }),
    u
  );
}
const Lw = y.createContext(null),
  ey = Lw;
function ty() {
  return y.useContext(ey);
}
const Aw = typeof Symbol == "function" && Symbol.for,
  Fw = Aw ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function zw(e, t) {
  return typeof t == "function" ? t(e) : x({}, e, t);
}
function Bw(e) {
  const { children: t, theme: n } = e,
    r = ty(),
    o = y.useMemo(() => {
      const i = r === null ? n : zw(r, n);
      return i != null && (i[Fw] = r !== null), i;
    }, [n, r]);
  return R(ey.Provider, { value: o, children: t });
}
function Dw(e) {
  return Object.keys(e).length === 0;
}
function Uw(e = null) {
  const t = ty();
  return !t || Dw(t) ? e : t;
}
const Ww = dd();
function fd(e = Ww) {
  return Uw(e);
}
const jw = ["variant"];
function mp(e) {
  return e.length === 0;
}
function ny(e) {
  const { variant: t } = e,
    n = j(e, jw);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += mp(r) ? e[o] : H(e[o]))
          : (r += `${mp(r) ? o : H(o)}${H(e[o].toString())}`);
      }),
    r
  );
}
const Vw = [
    "name",
    "slot",
    "skipVariantsResolver",
    "skipSx",
    "overridesResolver",
  ],
  Hw = ["theme"],
  Kw = ["theme"];
function $o(e) {
  return Object.keys(e).length === 0;
}
function qw(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const Gw = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  Qw = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = ny(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  Yw = (e, t, n, r) => {
    var o, i;
    const { ownerState: s = {} } = e,
      l = [],
      a =
        n == null || (o = n.components) == null || (i = o[r]) == null
          ? void 0
          : i.variants;
    return (
      a &&
        a.forEach((u) => {
          let d = !0;
          Object.keys(u.props).forEach((p) => {
            s[p] !== u.props[p] && e[p] !== u.props[p] && (d = !1);
          }),
            d && l.push(t[ny(u.props)]);
        }),
      l
    );
  };
function Yo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Xw = dd();
function Zw(e = {}) {
  const {
      defaultTheme: t = Xw,
      rootShouldForwardProp: n = Yo,
      slotShouldForwardProp: r = Yo,
    } = e,
    o = (i) => {
      const s = $o(i.theme) ? t : i.theme;
      return cd(x({}, i, { theme: s }));
    };
  return (
    (o.__mui_systemSx = !0),
    (i, s = {}) => {
      zS(i, (m) => m.filter((S) => !(S != null && S.__mui_systemSx)));
      const {
          name: l,
          slot: a,
          skipVariantsResolver: u,
          skipSx: d,
          overridesResolver: p,
        } = s,
        f = j(s, Vw),
        b = u !== void 0 ? u : (a && a !== "Root") || !1,
        v = d || !1;
      let g,
        C = Yo;
      a === "Root" ? (C = n) : a ? (C = r) : qw(i) && (C = void 0);
      const h = FS(i, x({ shouldForwardProp: C, label: g }, f)),
        c = (m, ...S) => {
          const w = S
            ? S.map((_) =>
                typeof _ == "function" && _.__emotion_real !== _
                  ? (T) => {
                      let { theme: A } = T,
                        V = j(T, Hw);
                      return _(x({ theme: $o(A) ? t : A }, V));
                    }
                  : _
              )
            : [];
          let k = m;
          l &&
            p &&
            w.push((_) => {
              const T = $o(_.theme) ? t : _.theme,
                A = Gw(l, T);
              if (A) {
                const V = {};
                return (
                  Object.entries(A).forEach(([W, F]) => {
                    V[W] =
                      typeof F == "function" ? F(x({}, _, { theme: T })) : F;
                  }),
                  p(_, V)
                );
              }
              return null;
            }),
            l &&
              !b &&
              w.push((_) => {
                const T = $o(_.theme) ? t : _.theme;
                return Yw(_, Qw(l, T), T, l);
              }),
            v || w.push(o);
          const E = w.length - S.length;
          if (Array.isArray(m) && E > 0) {
            const _ = new Array(E).fill("");
            (k = [...m, ..._]), (k.raw = [...m.raw, ..._]);
          } else
            typeof m == "function" &&
              m.__emotion_real !== m &&
              (k = (_) => {
                let { theme: T } = _,
                  A = j(_, Kw);
                return m(x({ theme: $o(T) ? t : T }, A));
              });
          return h(k, ...w);
        };
      return h.withConfig && (c.withConfig = h.withConfig), c;
    }
  );
}
function Jw(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Yc(t.components[n].defaultProps, r);
}
function eb({ props: e, name: t, defaultTheme: n }) {
  const r = fd(n);
  return Jw({ theme: r, name: t, props: e });
}
function pd(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function tb(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function vr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return vr(tb(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Hn(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(Hn(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function Gl(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function nb(e) {
  e = vr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, d = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const a = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((l += "a"), a.push(t[3])), Gl({ type: l, values: a })
  );
}
function gp(e) {
  e = vr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? vr(nb(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function rb(e, t) {
  const n = gp(e),
    r = gp(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function gt(e, t) {
  return (
    (e = vr(e)),
    (t = pd(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Gl(e)
  );
}
function ob(e, t) {
  if (((e = vr(e)), (t = pd(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Gl(e);
}
function ib(e, t) {
  if (((e = vr(e)), (t = pd(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Gl(e);
}
const sb = {};
function lb(e) {
  const t = fd();
  return R(od.Provider, {
    value: typeof t == "object" ? t : sb,
    children: e.children,
  });
}
function ab(e) {
  const { children: t, theme: n } = e;
  return R(Bw, { theme: n, children: R(lb, { children: t }) });
}
function ub(e, t) {
  return x(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const cb = { black: "#000", white: "#fff" },
  wi = cb,
  db = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  fb = db,
  pb = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Cr = pb,
  hb = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  kr = hb,
  mb = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  _o = mb,
  gb = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Er = gb,
  yb = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Rr = yb,
  vb = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Pr = vb,
  xb = ["mode", "contrastThreshold", "tonalOffset"],
  yp = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: wi.white, default: wi.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Oa = {
    text: {
      primary: wi.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: wi.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function vp(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = ib(e.main, o))
      : t === "dark" && (e.dark = ob(e.main, i)));
}
function Sb(e = "light") {
  return e === "dark"
    ? { main: Er[200], light: Er[50], dark: Er[400] }
    : { main: Er[700], light: Er[400], dark: Er[800] };
}
function wb(e = "light") {
  return e === "dark"
    ? { main: Cr[200], light: Cr[50], dark: Cr[400] }
    : { main: Cr[500], light: Cr[300], dark: Cr[700] };
}
function bb(e = "light") {
  return e === "dark"
    ? { main: kr[500], light: kr[300], dark: kr[700] }
    : { main: kr[700], light: kr[400], dark: kr[800] };
}
function Cb(e = "light") {
  return e === "dark"
    ? { main: Rr[400], light: Rr[300], dark: Rr[700] }
    : { main: Rr[700], light: Rr[500], dark: Rr[900] };
}
function kb(e = "light") {
  return e === "dark"
    ? { main: Pr[400], light: Pr[300], dark: Pr[700] }
    : { main: Pr[800], light: Pr[500], dark: Pr[900] };
}
function Eb(e = "light") {
  return e === "dark"
    ? { main: _o[400], light: _o[300], dark: _o[700] }
    : { main: "#ed6c02", light: _o[500], dark: _o[900] };
}
function Rb(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = j(e, xb),
    i = e.primary || Sb(t),
    s = e.secondary || wb(t),
    l = e.error || bb(t),
    a = e.info || Cb(t),
    u = e.success || kb(t),
    d = e.warning || Eb(t);
  function p(g) {
    return rb(g, Oa.text.primary) >= n ? Oa.text.primary : yp.text.primary;
  }
  const f = ({
      color: g,
      name: C,
      mainShade: h = 500,
      lightShade: c = 300,
      darkShade: m = 700,
    }) => {
      if (
        ((g = x({}, g)),
        !g.main && g[h] && (g.main = g[h]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(Hn(11, C ? ` (${C})` : "", h));
      if (typeof g.main != "string")
        throw new Error(Hn(12, C ? ` (${C})` : "", JSON.stringify(g.main)));
      return (
        vp(g, "light", c, r),
        vp(g, "dark", m, r),
        g.contrastText || (g.contrastText = p(g.main)),
        g
      );
    },
    b = { dark: Oa, light: yp };
  return _t(
    x(
      {
        common: x({}, wi),
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: l, name: "error" }),
        warning: f({ color: d, name: "warning" }),
        info: f({ color: a, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: fb,
        contrastThreshold: n,
        getContrastText: p,
        augmentColor: f,
        tonalOffset: r,
      },
      b[t]
    ),
    o
  );
}
const Pb = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function Tb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const xp = { textTransform: "uppercase" },
  Sp = '"Roboto", "Helvetica", "Arial", sans-serif';
function $b(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Sp,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: l = 500,
      fontWeightBold: a = 700,
      htmlFontSize: u = 16,
      allVariants: d,
      pxToRem: p,
    } = n,
    f = j(n, Pb),
    b = o / 14,
    v = p || ((h) => `${(h / u) * b}rem`),
    g = (h, c, m, S, w) =>
      x(
        { fontFamily: r, fontWeight: h, fontSize: v(c), lineHeight: m },
        r === Sp ? { letterSpacing: `${Tb(S / c)}em` } : {},
        w,
        d
      ),
    C = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(s, 48, 1.167, 0),
      h4: g(s, 34, 1.235, 0.25),
      h5: g(s, 24, 1.334, 0),
      h6: g(l, 20, 1.6, 0.15),
      subtitle1: g(s, 16, 1.75, 0.15),
      subtitle2: g(l, 14, 1.57, 0.1),
      body1: g(s, 16, 1.5, 0.15),
      body2: g(s, 14, 1.43, 0.15),
      button: g(l, 14, 1.75, 0.4, xp),
      caption: g(s, 12, 1.66, 0.4),
      overline: g(s, 12, 2.66, 1, xp),
    };
  return _t(
    x(
      {
        htmlFontSize: u,
        pxToRem: v,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: l,
        fontWeightBold: a,
      },
      C
    ),
    f,
    { clone: !1 }
  );
}
const _b = 0.2,
  Ib = 0.14,
  Nb = 0.12;
function ve(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${_b})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ib})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Nb})`,
  ].join(",");
}
const Ob = [
    "none",
    ve(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ve(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ve(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ve(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ve(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ve(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ve(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ve(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ve(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ve(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ve(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ve(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ve(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ve(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ve(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ve(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ve(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ve(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ve(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ve(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ve(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ve(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ve(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ve(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Mb = Ob,
  Lb = ["duration", "easing", "delay"],
  Ab = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Fb = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function wp(e) {
  return `${Math.round(e)}ms`;
}
function zb(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Bb(e) {
  const t = x({}, Ab, e.easing),
    n = x({}, Fb, e.duration);
  return x(
    {
      getAutoHeightDuration: zb,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: l = t.easeInOut,
          delay: a = 0,
        } = i;
        return (
          j(i, Lb),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : wp(s)} ${l} ${
                  typeof a == "string" ? a : wp(a)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const Db = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Ub = Db,
  Wb = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function ry(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = j(e, Wb);
  if (e.vars) throw new Error(Hn(18));
  const l = Rb(r),
    a = dd(e);
  let u = _t(a, {
    mixins: ub(a.breakpoints, n),
    palette: l,
    shadows: Mb.slice(),
    typography: $b(l, i),
    transitions: Bb(o),
    zIndex: x({}, Ub),
  });
  return (
    (u = _t(u, s)),
    (u = t.reduce((d, p) => _t(d, p), u)),
    (u.unstable_sxConfig = x({}, ql, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (p) {
      return cd({ sx: p, theme: this });
    }),
    u
  );
}
const jb = ry(),
  Ql = jb;
function Yl() {
  return fd(Ql);
}
function ne({ props: e, name: t }) {
  return eb({ props: e, name: t, defaultTheme: Ql });
}
const an = (e) => Yo(e) && e !== "classes",
  Vb = Yo,
  Hb = Zw({ defaultTheme: Ql, rootShouldForwardProp: an }),
  B = Hb,
  Kb = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  },
  bp = Kb;
function uo(e) {
  return typeof e == "string";
}
function qb(e, t, n) {
  return e === void 0 || uo(e)
    ? t
    : x({}, t, { ownerState: x({}, t.ownerState, n) });
}
function Gb(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function Ku(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cp(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function Qb(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const b = K(
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className,
        i,
        n == null ? void 0 : n.className
      ),
      v = x(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      g = x({}, n, o, r);
    return (
      b.length > 0 && (g.className = b),
      Object.keys(v).length > 0 && (g.style = v),
      { props: g, internalRef: void 0 }
    );
  }
  const s = Gb(x({}, o, r)),
    l = Cp(r),
    a = Cp(o),
    u = t(s),
    d = K(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    p = x(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    f = x({}, u, n, a, l);
  return (
    d.length > 0 && (f.className = d),
    Object.keys(p).length > 0 && (f.style = p),
    { props: f, internalRef: u.ref }
  );
}
const Yb = ["elementType", "externalSlotProps", "ownerState"];
function kp(e) {
  var t;
  const { elementType: n, externalSlotProps: r, ownerState: o } = e,
    i = j(e, Yb),
    s = Ku(r, o),
    { props: l, internalRef: a } = Qb(x({}, i, { externalSlotProps: s })),
    u = Ke(
      a,
      s == null ? void 0 : s.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return qb(n, x({}, l, { ref: u }), o);
}
const Xb = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function Zb(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function Jb(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function eC(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    Jb(e)
  );
}
function tC(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(Xb)).forEach((r, o) => {
      const i = Zb(r);
      i === -1 ||
        !eC(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function nC() {
  return !0;
}
function rC(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = tC,
      isEnabled: s = nC,
      open: l,
    } = e,
    a = y.useRef(!1),
    u = y.useRef(null),
    d = y.useRef(null),
    p = y.useRef(null),
    f = y.useRef(null),
    b = y.useRef(!1),
    v = y.useRef(null),
    g = Ke(t.ref, v),
    C = y.useRef(null);
  y.useEffect(() => {
    !l || !v.current || (b.current = !n);
  }, [n, l]),
    y.useEffect(() => {
      if (!l || !v.current) return;
      const m = dt(v.current);
      return (
        v.current.contains(m.activeElement) ||
          (v.current.hasAttribute("tabIndex") ||
            v.current.setAttribute("tabIndex", "-1"),
          b.current && v.current.focus()),
        () => {
          o ||
            (p.current &&
              p.current.focus &&
              ((a.current = !0), p.current.focus()),
            (p.current = null));
        }
      );
    }, [l]),
    y.useEffect(() => {
      if (!l || !v.current) return;
      const m = dt(v.current),
        S = (E) => {
          const { current: P } = v;
          if (P !== null) {
            if (!m.hasFocus() || r || !s() || a.current) {
              a.current = !1;
              return;
            }
            if (!P.contains(m.activeElement)) {
              if (
                (E && f.current !== E.target) ||
                m.activeElement !== f.current
              )
                f.current = null;
              else if (f.current !== null) return;
              if (!b.current) return;
              let A = [];
              if (
                ((m.activeElement === u.current ||
                  m.activeElement === d.current) &&
                  (A = i(v.current)),
                A.length > 0)
              ) {
                var _, T;
                const V = Boolean(
                    ((_ = C.current) == null ? void 0 : _.shiftKey) &&
                      ((T = C.current) == null ? void 0 : T.key) === "Tab"
                  ),
                  W = A[0],
                  F = A[A.length - 1];
                typeof W != "string" &&
                  typeof F != "string" &&
                  (V ? F.focus() : W.focus());
              } else P.focus();
            }
          }
        },
        w = (E) => {
          (C.current = E),
            !(r || !s() || E.key !== "Tab") &&
              m.activeElement === v.current &&
              E.shiftKey &&
              ((a.current = !0), d.current && d.current.focus());
        };
      m.addEventListener("focusin", S), m.addEventListener("keydown", w, !0);
      const k = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && S(null);
      }, 50);
      return () => {
        clearInterval(k),
          m.removeEventListener("focusin", S),
          m.removeEventListener("keydown", w, !0);
      };
    }, [n, r, o, s, l, i]);
  const h = (m) => {
      p.current === null && (p.current = m.relatedTarget),
        (b.current = !0),
        (f.current = m.target);
      const S = t.props.onFocus;
      S && S(m);
    },
    c = (m) => {
      p.current === null && (p.current = m.relatedTarget), (b.current = !0);
    };
  return J(y.Fragment, {
    children: [
      R("div", {
        tabIndex: l ? 0 : -1,
        onFocus: c,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      y.cloneElement(t, { ref: g, onFocus: h }),
      R("div", {
        tabIndex: l ? 0 : -1,
        onFocus: c,
        ref: d,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function oC(e) {
  return typeof e == "function" ? e() : e;
}
const iC = y.forwardRef(function (t, n) {
    const { children: r, container: o, disablePortal: i = !1 } = t,
      [s, l] = y.useState(null),
      a = Ke(y.isValidElement(r) ? r.ref : null, n);
    if (
      (qn(() => {
        i || l(oC(o) || document.body);
      }, [o, i]),
      qn(() => {
        if (s && !i)
          return (
            qs(n, s),
            () => {
              qs(n, null);
            }
          );
      }, [n, s, i]),
      i)
    ) {
      if (y.isValidElement(r)) {
        const u = { ref: a };
        return y.cloneElement(r, u);
      }
      return R(y.Fragment, { children: r });
    }
    return R(y.Fragment, { children: s && eo.createPortal(r, s) });
  }),
  sC = iC;
function lC(e) {
  const t = dt(e);
  return t.body === e
    ? Kn(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Xo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ep(e) {
  return parseInt(Kn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function aC(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Rp(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = i.indexOf(s) === -1,
      a = !aC(s);
    l && a && Xo(s, o);
  });
}
function Ma(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function uC(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (lC(r)) {
      const s = Ig(dt(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Ep(r) + s}px`);
      const l = dt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a,
        }),
          (a.style.paddingRight = `${Ep(a) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = dt(r).body;
    else {
      const s = r.parentElement,
        l = Kn(r);
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        l.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: l }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l);
    });
  };
}
function cC(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class dC {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && Xo(t.modalRef, !1);
    const o = cC(n);
    Rp(n, t.mount, t.modalRef, o, !0);
    const i = Ma(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = Ma(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = uC(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = Ma(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && Xo(t.modalRef, n),
        Rp(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Xo(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function fC(e) {
  return X("MuiModal", e);
}
Y("MuiModal", ["root", "hidden"]);
const pC = [
    "children",
    "classes",
    "closeAfterTransition",
    "component",
    "container",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "manager",
    "onBackdropClick",
    "onClose",
    "onKeyDown",
    "open",
    "onTransitionEnter",
    "onTransitionExited",
    "slotProps",
    "slots",
  ],
  hC = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return ee(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      fC,
      r
    );
  };
function mC(e) {
  return typeof e == "function" ? e() : e;
}
function gC(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const yC = new dC(),
  vC = y.forwardRef(function (t, n) {
    var r, o;
    const {
        children: i,
        classes: s,
        closeAfterTransition: l = !1,
        component: a,
        container: u,
        disableAutoFocus: d = !1,
        disableEnforceFocus: p = !1,
        disableEscapeKeyDown: f = !1,
        disablePortal: b = !1,
        disableRestoreFocus: v = !1,
        disableScrollLock: g = !1,
        hideBackdrop: C = !1,
        keepMounted: h = !1,
        manager: c = yC,
        onBackdropClick: m,
        onClose: S,
        onKeyDown: w,
        open: k,
        onTransitionEnter: E,
        onTransitionExited: P,
        slotProps: _ = {},
        slots: T = {},
      } = t,
      A = j(t, pC),
      [V, W] = y.useState(!k),
      F = y.useRef({}),
      L = y.useRef(null),
      z = y.useRef(null),
      q = Ke(z, n),
      $ = gC(i),
      M = (r = t["aria-hidden"]) != null ? r : !0,
      I = () => dt(L.current),
      D = () => (
        (F.current.modalRef = z.current),
        (F.current.mountNode = L.current),
        F.current
      ),
      G = () => {
        c.mount(D(), { disableScrollLock: g }),
          z.current && (z.current.scrollTop = 0);
      },
      ke = ur(() => {
        const $e = mC(u) || I().body;
        c.add(D(), $e), z.current && G();
      }),
      Q = y.useCallback(() => c.isTopModal(D()), [c]),
      fe = ur(($e) => {
        (L.current = $e),
          !(!$e || !z.current) && (k && Q() ? G() : Xo(z.current, M));
      }),
      oe = y.useCallback(() => {
        c.remove(D(), M);
      }, [c, M]);
    y.useEffect(
      () => () => {
        oe();
      },
      [oe]
    ),
      y.useEffect(() => {
        k ? ke() : (!$ || !l) && oe();
      }, [k, oe, $, l, ke]);
    const Oe = x({}, t, {
        classes: s,
        closeAfterTransition: l,
        disableAutoFocus: d,
        disableEnforceFocus: p,
        disableEscapeKeyDown: f,
        disablePortal: b,
        disableRestoreFocus: v,
        disableScrollLock: g,
        exited: V,
        hideBackdrop: C,
        keepMounted: h,
      }),
      rt = hC(Oe),
      Se = () => {
        W(!1), E && E();
      },
      Ze = () => {
        W(!0), P && P(), l && oe();
      },
      Z = ($e) => {
        $e.target === $e.currentTarget &&
          (m && m($e), S && S($e, "backdropClick"));
      },
      Ae = ($e) => {
        w && w($e),
          !($e.key !== "Escape" || !Q()) &&
            (f || ($e.stopPropagation(), S && S($e, "escapeKeyDown")));
      },
      ot = {};
    i.props.tabIndex === void 0 && (ot.tabIndex = "-1"),
      $ &&
        ((ot.onEnter = Ks(Se, i.props.onEnter)),
        (ot.onExited = Ks(Ze, i.props.onExited)));
    const jt = (o = a ?? T.root) != null ? o : "div",
      Mt = kp({
        elementType: jt,
        externalSlotProps: _.root,
        externalForwardedProps: A,
        additionalProps: { ref: q, role: "presentation", onKeyDown: Ae },
        className: rt.root,
        ownerState: Oe,
      }),
      un = T.backdrop,
      Vt = kp({
        elementType: un,
        externalSlotProps: _.backdrop,
        additionalProps: { "aria-hidden": !0, onClick: Z, open: k },
        className: rt.backdrop,
        ownerState: Oe,
      });
    return !h && !k && (!$ || V)
      ? null
      : R(sC, {
          ref: fe,
          container: u,
          disablePortal: b,
          children: J(
            jt,
            x({}, Mt, {
              children: [
                !C && un ? R(un, x({}, Vt)) : null,
                R(rC, {
                  disableEnforceFocus: p,
                  disableAutoFocus: d,
                  disableRestoreFocus: v,
                  isEnabled: Q,
                  open: k,
                  children: y.cloneElement(i, ot),
                }),
              ],
            })
          ),
        });
  }),
  xC = vC,
  SC = ["onChange", "maxRows", "minRows", "style", "value"];
function Zi(e, t) {
  return parseInt(e[t], 10) || 0;
}
const wC = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function Pp(e) {
  return e == null || Object.keys(e).length === 0;
}
const bC = y.forwardRef(function (t, n) {
    const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: l } = t,
      a = j(t, SC),
      { current: u } = y.useRef(l != null),
      d = y.useRef(null),
      p = Ke(n, d),
      f = y.useRef(null),
      b = y.useRef(0),
      [v, g] = y.useState({}),
      C = y.useCallback(() => {
        const w = d.current,
          E = Kn(w).getComputedStyle(w);
        if (E.width === "0px") return {};
        const P = f.current;
        (P.style.width = E.width),
          (P.value = w.value || t.placeholder || "x"),
          P.value.slice(-1) ===
            `
` && (P.value += " ");
        const _ = E["box-sizing"],
          T = Zi(E, "padding-bottom") + Zi(E, "padding-top"),
          A = Zi(E, "border-bottom-width") + Zi(E, "border-top-width"),
          V = P.scrollHeight;
        P.value = "x";
        const W = P.scrollHeight;
        let F = V;
        i && (F = Math.max(Number(i) * W, F)),
          o && (F = Math.min(Number(o) * W, F)),
          (F = Math.max(F, W));
        const L = F + (_ === "border-box" ? T + A : 0),
          z = Math.abs(F - V) <= 1;
        return { outerHeightStyle: L, overflow: z };
      }, [o, i, t.placeholder]),
      h = (w, k) => {
        const { outerHeightStyle: E, overflow: P } = k;
        return b.current < 20 &&
          ((E > 0 && Math.abs((w.outerHeightStyle || 0) - E) > 1) ||
            w.overflow !== P)
          ? ((b.current += 1), { overflow: P, outerHeightStyle: E })
          : w;
      },
      c = y.useCallback(() => {
        const w = C();
        Pp(w) || g((k) => h(k, w));
      }, [C]),
      m = () => {
        const w = C();
        Pp(w) ||
          eo.flushSync(() => {
            g((k) => h(k, w));
          });
      };
    y.useEffect(() => {
      const w = Qc(() => {
          (b.current = 0), d.current && m();
        }),
        k = Kn(d.current);
      k.addEventListener("resize", w);
      let E;
      return (
        typeof ResizeObserver < "u" &&
          ((E = new ResizeObserver(w)), E.observe(d.current)),
        () => {
          w.clear(), k.removeEventListener("resize", w), E && E.disconnect();
        }
      );
    }),
      qn(() => {
        c();
      }),
      y.useEffect(() => {
        b.current = 0;
      }, [l]);
    const S = (w) => {
      (b.current = 0), u || c(), r && r(w);
    };
    return J(y.Fragment, {
      children: [
        R(
          "textarea",
          x(
            {
              value: l,
              onChange: S,
              ref: p,
              rows: i,
              style: x(
                {
                  height: v.outerHeightStyle,
                  overflow: v.overflow ? "hidden" : null,
                },
                s
              ),
            },
            a
          )
        ),
        R("textarea", {
          "aria-hidden": !0,
          className: t.className,
          readOnly: !0,
          ref: f,
          tabIndex: -1,
          style: x({}, wC.shadow, s, { padding: 0 }),
        }),
      ],
    });
  }),
  CC = bC;
function kC(e) {
  return X("MuiSvgIcon", e);
}
Y("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const EC = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  RC = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${H(t)}`, `fontSize${H(n)}`],
      };
    return ee(o, kC, r);
  },
  PC = B("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${H(n.color)}`],
        t[`fontSize${H(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, l, a, u, d, p, f, b, v, g, C, h, c;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (i = o.duration) == null
                  ? void 0
                  : i.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((s = e.typography) == null || (l = s.pxToRem) == null
            ? void 0
            : l.call(s, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (u = a.pxToRem) == null
            ? void 0
            : u.call(a, 24)) || "1.5rem",
        large:
          ((d = e.typography) == null || (p = d.pxToRem) == null
            ? void 0
            : p.call(d, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (f =
          (b = (e.vars || e).palette) == null || (v = b[t.color]) == null
            ? void 0
            : v.main) != null
          ? f
          : {
              action:
                (g = (e.vars || e).palette) == null || (C = g.action) == null
                  ? void 0
                  : C.active,
              disabled:
                (h = (e.vars || e).palette) == null || (c = h.action) == null
                  ? void 0
                  : c.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  oy = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: l = "svg",
        fontSize: a = "medium",
        htmlColor: u,
        inheritViewBox: d = !1,
        titleAccess: p,
        viewBox: f = "0 0 24 24",
      } = r,
      b = j(r, EC),
      v = x({}, r, {
        color: s,
        component: l,
        fontSize: a,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: f,
      }),
      g = {};
    d || (g.viewBox = f);
    const C = RC(v);
    return J(
      PC,
      x(
        {
          as: l,
          className: K(C.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": p ? void 0 : !0,
          role: p ? "img" : void 0,
          ref: n,
        },
        g,
        b,
        { ownerState: v, children: [o, p ? R("title", { children: p }) : null] }
      )
    );
  });
oy.muiName = "SvgIcon";
const Tp = oy;
function _i(e, t) {
  function n(r, o) {
    return R(Tp, x({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }));
  }
  return (n.muiName = Tp.muiName), y.memo(y.forwardRef(n));
}
const TC = {
    configure: (e) => {
      Ng.configure(e);
    },
  },
  $C = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: H,
        createChainedFunction: Ks,
        createSvgIcon: _i,
        debounce: Qc,
        deprecatedPropType: Sx,
        isMuiElement: Go,
        ownerDocument: dt,
        ownerWindow: Kn,
        requirePropFactory: wx,
        setRef: qs,
        unstable_ClassNameGenerator: TC,
        unstable_useEnhancedEffect: qn,
        unstable_useId: Rl,
        unsupportedProp: kx,
        useControlled: yi,
        useEventCallback: ur,
        useForkRef: Ke,
        useIsFocusVisible: _g,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function qu(e, t) {
  return (
    (qu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    qu(e, t)
  );
}
function iy(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    qu(e, t);
}
const $p = { disabled: !1 },
  Ys = tn.createContext(null);
var _C = function (t) {
    return t.scrollTop;
  },
  zo = "unmounted",
  nr = "exited",
  rr = "entering",
  _r = "entered",
  Gu = "exiting",
  wn = (function (e) {
    iy(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        l = s && !s.isMounting ? r.enter : r.appear,
        a;
      return (
        (i.appearStatus = null),
        r.in
          ? l
            ? ((a = nr), (i.appearStatus = rr))
            : (a = _r)
          : r.unmountOnExit || r.mountOnEnter
          ? (a = zo)
          : (a = nr),
        (i.state = { status: a }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === zo ? { status: nr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== rr && s !== _r && (i = rr)
            : (s === rr || s === _r) && (i = Gu);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          l;
        return (
          (i = s = l = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (l = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: l }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === rr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Gi.findDOMNode(this);
              s && _C(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === nr &&
            this.setState({ status: zo });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          l = this.context ? this.context.isMounting : o,
          a = this.props.nodeRef ? [l] : [Gi.findDOMNode(this), l],
          u = a[0],
          d = a[1],
          p = this.getTimeouts(),
          f = l ? p.appear : p.enter;
        if ((!o && !s) || $p.disabled) {
          this.safeSetState({ status: _r }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, d),
          this.safeSetState({ status: rr }, function () {
            i.props.onEntering(u, d),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: _r }, function () {
                  i.props.onEntered(u, d);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : Gi.findDOMNode(this);
        if (!i || $p.disabled) {
          this.safeSetState({ status: nr }, function () {
            o.props.onExited(l);
          });
          return;
        }
        this.props.onExit(l),
          this.safeSetState({ status: Gu }, function () {
            o.props.onExiting(l),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: nr }, function () {
                  o.props.onExited(l);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (l) {
            s && ((s = !1), (i.nextCallback = null), o(l));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Gi.findDOMNode(this),
          l = o == null && !this.props.addEndListener;
        if (!s || l) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = a[0],
            d = a[1];
          this.props.addEndListener(u, d);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === zo) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var l = j(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return tn.createElement(
          Ys.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, l)
            : tn.cloneElement(tn.Children.only(s), l)
        );
      }),
      t
    );
  })(tn.Component);
wn.contextType = Ys;
wn.propTypes = {};
function Tr() {}
wn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Tr,
  onEntering: Tr,
  onEntered: Tr,
  onExit: Tr,
  onExiting: Tr,
  onExited: Tr,
};
wn.UNMOUNTED = zo;
wn.EXITED = nr;
wn.ENTERING = rr;
wn.ENTERED = _r;
wn.EXITING = Gu;
const sy = wn;
function IC(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function hd(e, t) {
  var n = function (i) {
      return t && y.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      y.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function NC(e, t) {
  (e = e || {}), (t = t || {});
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    l = {};
  for (var a in t) {
    if (r[a])
      for (s = 0; s < r[a].length; s++) {
        var u = r[a][s];
        l[r[a][s]] = n(u);
      }
    l[a] = n(a);
  }
  for (s = 0; s < o.length; s++) l[o[s]] = n(o[s]);
  return l;
}
function cr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function OC(e, t) {
  return hd(e.children, function (n) {
    return y.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: cr(n, "appear", e),
      enter: cr(n, "enter", e),
      exit: cr(n, "exit", e),
    });
  });
}
function MC(e, t, n) {
  var r = hd(e.children),
    o = NC(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (y.isValidElement(s)) {
        var l = i in t,
          a = i in r,
          u = t[i],
          d = y.isValidElement(u) && !u.props.in;
        a && (!l || d)
          ? (o[i] = y.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: cr(s, "exit", e),
              enter: cr(s, "enter", e),
            }))
          : !a && l && !d
          ? (o[i] = y.cloneElement(s, { in: !1 }))
          : a &&
            l &&
            y.isValidElement(u) &&
            (o[i] = y.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: cr(s, "exit", e),
              enter: cr(s, "enter", e),
            }));
      }
    }),
    o
  );
}
var LC =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  AC = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  md = (function (e) {
    iy(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(IC(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          l = i.handleExited,
          a = i.firstRender;
        return { children: a ? OC(o, l) : MC(o, s, l), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = hd(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (l) {
              var a = x({}, l.children);
              return delete a[o.key], { children: a };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          l = j(o, ["component", "childFactory"]),
          a = this.state.contextValue,
          u = LC(this.state.children).map(s);
        return (
          delete l.appear,
          delete l.enter,
          delete l.exit,
          i === null
            ? tn.createElement(Ys.Provider, { value: a }, u)
            : tn.createElement(
                Ys.Provider,
                { value: a },
                tn.createElement(i, l, u)
              )
        );
      }),
      t
    );
  })(tn.Component);
md.propTypes = {};
md.defaultProps = AC;
const FC = md,
  ly = (e) => e.scrollTop;
function Xs(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: s.transitionDelay,
  };
}
function zC(e) {
  return X("MuiPaper", e);
}
Y("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const BC = ["className", "component", "elevation", "square", "variant"],
  DC = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return ee(i, zC, o);
  },
  UC = B("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return x(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        x(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${gt(
                "#fff",
                bp(t.elevation)
              )}, ${gt("#fff", bp(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  WC = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: s = 1,
        square: l = !1,
        variant: a = "elevation",
      } = r,
      u = j(r, BC),
      d = x({}, r, { component: i, elevation: s, square: l, variant: a }),
      p = DC(d);
    return R(
      UC,
      x({ as: i, ownerState: d, className: K(p.root, o), ref: n }, u)
    );
  }),
  vo = WC;
function jC(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: l,
      onExited: a,
      timeout: u,
    } = e,
    [d, p] = y.useState(!1),
    f = K(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    b = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    v = K(n.child, d && n.childLeaving, r && n.childPulsate);
  return (
    !l && !d && p(!0),
    y.useEffect(() => {
      if (!l && a != null) {
        const g = setTimeout(a, u);
        return () => {
          clearTimeout(g);
        };
      }
    }, [a, l, u]),
    R("span", { className: f, style: b, children: R("span", { className: v }) })
  );
}
const VC = Y("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  kt = VC,
  HC = ["center", "classes", "className"];
let Xl = (e) => e,
  _p,
  Ip,
  Np,
  Op;
const Qu = 550,
  KC = 80,
  qC = id(
    _p ||
      (_p = Xl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  GC = id(
    Ip ||
      (Ip = Xl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  QC = id(
    Np ||
      (Np = Xl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  YC = B("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  XC = B(jC, { name: "MuiTouchRipple", slot: "Ripple" })(
    Op ||
      (Op = Xl`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    kt.rippleVisible,
    qC,
    Qu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    kt.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    kt.child,
    kt.childLeaving,
    GC,
    Qu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    kt.childPulsate,
    QC,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  ZC = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s } = r,
      l = j(r, HC),
      [a, u] = y.useState([]),
      d = y.useRef(0),
      p = y.useRef(null);
    y.useEffect(() => {
      p.current && (p.current(), (p.current = null));
    }, [a]);
    const f = y.useRef(!1),
      b = y.useRef(null),
      v = y.useRef(null),
      g = y.useRef(null);
    y.useEffect(
      () => () => {
        clearTimeout(b.current);
      },
      []
    );
    const C = y.useCallback(
        (S) => {
          const {
            pulsate: w,
            rippleX: k,
            rippleY: E,
            rippleSize: P,
            cb: _,
          } = S;
          u((T) => [
            ...T,
            R(
              XC,
              {
                classes: {
                  ripple: K(i.ripple, kt.ripple),
                  rippleVisible: K(i.rippleVisible, kt.rippleVisible),
                  ripplePulsate: K(i.ripplePulsate, kt.ripplePulsate),
                  child: K(i.child, kt.child),
                  childLeaving: K(i.childLeaving, kt.childLeaving),
                  childPulsate: K(i.childPulsate, kt.childPulsate),
                },
                timeout: Qu,
                pulsate: w,
                rippleX: k,
                rippleY: E,
                rippleSize: P,
              },
              d.current
            ),
          ]),
            (d.current += 1),
            (p.current = _);
        },
        [i]
      ),
      h = y.useCallback(
        (S = {}, w = {}, k = () => {}) => {
          const {
            pulsate: E = !1,
            center: P = o || w.pulsate,
            fakeElement: _ = !1,
          } = w;
          if ((S == null ? void 0 : S.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (S == null ? void 0 : S.type) === "touchstart" && (f.current = !0);
          const T = _ ? null : g.current,
            A = T
              ? T.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let V, W, F;
          if (
            P ||
            S === void 0 ||
            (S.clientX === 0 && S.clientY === 0) ||
            (!S.clientX && !S.touches)
          )
            (V = Math.round(A.width / 2)), (W = Math.round(A.height / 2));
          else {
            const { clientX: L, clientY: z } =
              S.touches && S.touches.length > 0 ? S.touches[0] : S;
            (V = Math.round(L - A.left)), (W = Math.round(z - A.top));
          }
          if (P)
            (F = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3)),
              F % 2 === 0 && (F += 1);
          else {
            const L =
                Math.max(Math.abs((T ? T.clientWidth : 0) - V), V) * 2 + 2,
              z = Math.max(Math.abs((T ? T.clientHeight : 0) - W), W) * 2 + 2;
            F = Math.sqrt(L ** 2 + z ** 2);
          }
          S != null && S.touches
            ? v.current === null &&
              ((v.current = () => {
                C({ pulsate: E, rippleX: V, rippleY: W, rippleSize: F, cb: k });
              }),
              (b.current = setTimeout(() => {
                v.current && (v.current(), (v.current = null));
              }, KC)))
            : C({ pulsate: E, rippleX: V, rippleY: W, rippleSize: F, cb: k });
        },
        [o, C]
      ),
      c = y.useCallback(() => {
        h({}, { pulsate: !0 });
      }, [h]),
      m = y.useCallback((S, w) => {
        if (
          (clearTimeout(b.current),
          (S == null ? void 0 : S.type) === "touchend" && v.current)
        ) {
          v.current(),
            (v.current = null),
            (b.current = setTimeout(() => {
              m(S, w);
            }));
          return;
        }
        (v.current = null),
          u((k) => (k.length > 0 ? k.slice(1) : k)),
          (p.current = w);
      }, []);
    return (
      y.useImperativeHandle(n, () => ({ pulsate: c, start: h, stop: m }), [
        c,
        h,
        m,
      ]),
      R(
        YC,
        x({ className: K(kt.root, i.root, s), ref: g }, l, {
          children: R(FC, { component: null, exit: !0, children: a }),
        })
      )
    );
  }),
  JC = ZC;
function ek(e) {
  return X("MuiButtonBase", e);
}
const tk = Y("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  nk = tk,
  rk = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  ok = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = ee({ root: ["root", t && "disabled", n && "focusVisible"] }, ek, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  ik = B("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${nk.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  sk = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: l,
        component: a = "button",
        disabled: u = !1,
        disableRipple: d = !1,
        disableTouchRipple: p = !1,
        focusRipple: f = !1,
        LinkComponent: b = "a",
        onBlur: v,
        onClick: g,
        onContextMenu: C,
        onDragLeave: h,
        onFocus: c,
        onFocusVisible: m,
        onKeyDown: S,
        onKeyUp: w,
        onMouseDown: k,
        onMouseLeave: E,
        onMouseUp: P,
        onTouchEnd: _,
        onTouchMove: T,
        onTouchStart: A,
        tabIndex: V = 0,
        TouchRippleProps: W,
        touchRippleRef: F,
        type: L,
      } = r,
      z = j(r, rk),
      q = y.useRef(null),
      $ = y.useRef(null),
      M = Ke($, F),
      { isFocusVisibleRef: I, onFocus: D, onBlur: G, ref: ke } = _g(),
      [Q, fe] = y.useState(!1);
    u && Q && fe(!1),
      y.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            fe(!0), q.current.focus();
          },
        }),
        []
      );
    const [oe, Oe] = y.useState(!1);
    y.useEffect(() => {
      Oe(!0);
    }, []);
    const rt = oe && !d && !u;
    y.useEffect(() => {
      Q && f && !d && oe && $.current.pulsate();
    }, [d, f, Q, oe]);
    function Se(N, ye, ze = p) {
      return ur(
        (it) => (ye && ye(it), !ze && $.current && $.current[N](it), !0)
      );
    }
    const Ze = Se("start", k),
      Z = Se("stop", C),
      Ae = Se("stop", h),
      ot = Se("stop", P),
      jt = Se("stop", (N) => {
        Q && N.preventDefault(), E && E(N);
      }),
      Mt = Se("start", A),
      un = Se("stop", _),
      Vt = Se("stop", T),
      $e = Se(
        "stop",
        (N) => {
          G(N), I.current === !1 && fe(!1), v && v(N);
        },
        !1
      ),
      Ht = ur((N) => {
        q.current || (q.current = N.currentTarget),
          D(N),
          I.current === !0 && (fe(!0), m && m(N)),
          c && c(N);
      }),
      Kt = () => {
        const N = q.current;
        return a && a !== "button" && !(N.tagName === "A" && N.href);
      },
      Fe = y.useRef(!1),
      Cn = ur((N) => {
        f &&
          !Fe.current &&
          Q &&
          $.current &&
          N.key === " " &&
          ((Fe.current = !0),
          $.current.stop(N, () => {
            $.current.start(N);
          })),
          N.target === N.currentTarget &&
            Kt() &&
            N.key === " " &&
            N.preventDefault(),
          S && S(N),
          N.target === N.currentTarget &&
            Kt() &&
            N.key === "Enter" &&
            !u &&
            (N.preventDefault(), g && g(N));
      }),
      kn = ur((N) => {
        f &&
          N.key === " " &&
          $.current &&
          Q &&
          !N.defaultPrevented &&
          ((Fe.current = !1),
          $.current.stop(N, () => {
            $.current.pulsate(N);
          })),
          w && w(N),
          g &&
            N.target === N.currentTarget &&
            Kt() &&
            N.key === " " &&
            !N.defaultPrevented &&
            g(N);
      });
    let qt = a;
    qt === "button" && (z.href || z.to) && (qt = b);
    const Ct = {};
    qt === "button"
      ? ((Ct.type = L === void 0 ? "button" : L), (Ct.disabled = u))
      : (!z.href && !z.to && (Ct.role = "button"),
        u && (Ct["aria-disabled"] = u));
    const En = Ke(n, ke, q),
      Gt = x({}, r, {
        centerRipple: i,
        component: a,
        disabled: u,
        disableRipple: d,
        disableTouchRipple: p,
        focusRipple: f,
        tabIndex: V,
        focusVisible: Q,
      }),
      pe = ok(Gt);
    return J(
      ik,
      x(
        {
          as: qt,
          className: K(pe.root, l),
          ownerState: Gt,
          onBlur: $e,
          onClick: g,
          onContextMenu: Z,
          onFocus: Ht,
          onKeyDown: Cn,
          onKeyUp: kn,
          onMouseDown: Ze,
          onMouseLeave: jt,
          onMouseUp: ot,
          onDragLeave: Ae,
          onTouchEnd: un,
          onTouchMove: Vt,
          onTouchStart: Mt,
          ref: En,
          tabIndex: u ? -1 : V,
          type: L,
        },
        Ct,
        z,
        { children: [s, rt ? R(JC, x({ ref: M, center: i }, W)) : null] }
      )
    );
  }),
  Zl = sk;
function lk(e) {
  return X("MuiIconButton", e);
}
const ak = Y("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  uk = ak,
  ck = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  dk = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${H(r)}`,
          o && `edge${H(o)}`,
          `size${H(i)}`,
        ],
      };
    return ee(s, lk, t);
  },
  fk = B(Zl, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${H(n.color)}`],
        n.edge && t[`edge${H(n.edge)}`],
        t[`size${H(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      x(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : gt(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
        t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return x(
        {},
        t.color === "inherit" && { color: "inherit" },
        t.color !== "inherit" &&
          t.color !== "default" &&
          x(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              "&:hover": x(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : gt(r.main, e.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } }
              ),
            }
          ),
        t.size === "small" && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === "large" && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${uk.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled,
          },
        }
      );
    }
  ),
  pk = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: l = "default",
        disabled: a = !1,
        disableFocusRipple: u = !1,
        size: d = "medium",
      } = r,
      p = j(r, ck),
      f = x({}, r, {
        edge: o,
        color: l,
        disabled: a,
        disableFocusRipple: u,
        size: d,
      }),
      b = dk(f);
    return R(
      fk,
      x(
        {
          className: K(b.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: a,
          ref: n,
          ownerState: f,
        },
        p,
        { children: i }
      )
    );
  }),
  ay = pk;
function hk(e) {
  return X("MuiTypography", e);
}
Y("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const mk = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  gk = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      l = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${H(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return ee(l, hk, s);
  },
  yk = B("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${H(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    x(
      { margin: 0 },
      t.variant && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  Mp = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  vk = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  xk = (e) => vk[e] || e,
  Sk = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiTypography" }),
      o = xk(r.color),
      i = Pw(x({}, r, { color: o })),
      {
        align: s = "inherit",
        className: l,
        component: a,
        gutterBottom: u = !1,
        noWrap: d = !1,
        paragraph: p = !1,
        variant: f = "body1",
        variantMapping: b = Mp,
      } = i,
      v = j(i, mk),
      g = x({}, i, {
        align: s,
        color: o,
        className: l,
        component: a,
        gutterBottom: u,
        noWrap: d,
        paragraph: p,
        variant: f,
        variantMapping: b,
      }),
      C = a || (p ? "p" : b[f] || Mp[f]) || "span",
      h = gk(g);
    return R(
      yk,
      x({ as: C, ref: n, ownerState: g, className: K(h.root, l) }, v)
    );
  }),
  co = Sk;
function wk(e) {
  return X("MuiAppBar", e);
}
Y("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
]);
const bk = ["className", "color", "enableColorOnDark", "position"],
  Ck = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${H(t)}`, `position${H(n)}`] };
    return ee(o, wk, r);
  },
  Ji = (e, t) => `${e == null ? void 0 : e.replace(")", "")}, ${t})`,
  kk = B(vo, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${H(n.position)}`], t[`color${H(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
    return x(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      t.position === "fixed" && {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      t.position === "absolute" && {
        position: "absolute",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "sticky" && {
        position: "sticky",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "static" && { position: "static" },
      t.position === "relative" && { position: "relative" },
      !e.vars &&
        x(
          {},
          t.color === "default" && {
            backgroundColor: n,
            color: e.palette.getContrastText(n),
          },
          t.color &&
            t.color !== "default" &&
            t.color !== "inherit" &&
            t.color !== "transparent" && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === "inherit" && { color: "inherit" },
          e.palette.mode === "dark" &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === "transparent" &&
            x(
              { backgroundColor: "transparent", color: "inherit" },
              e.palette.mode === "dark" && { backgroundImage: "none" }
            )
        ),
      e.vars &&
        x(
          {},
          t.color === "default" && {
            "--AppBar-background": t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : Ji(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg
                ),
            "--AppBar-color": t.enableColorOnDark
              ? e.vars.palette.text.primary
              : Ji(
                  e.vars.palette.AppBar.darkColor,
                  e.vars.palette.text.primary
                ),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : Ji(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : Ji(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText
                  ),
            },
          {
            backgroundColor: "var(--AppBar-background)",
            color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)",
          },
          t.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          }
        )
    );
  }),
  Ek = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: s = !1,
        position: l = "fixed",
      } = r,
      a = j(r, bk),
      u = x({}, r, { color: i, position: l, enableColorOnDark: s }),
      d = Ck(u);
    return R(
      kk,
      x(
        {
          square: !0,
          component: "header",
          ownerState: u,
          elevation: 4,
          className: K(d.root, o, l === "fixed" && "mui-fixed"),
          ref: n,
        },
        a
      )
    );
  }),
  Rk = Ek;
function Xn({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const Pk = y.createContext(void 0),
  gd = Pk;
function bn() {
  return y.useContext(gd);
}
function Tk(e) {
  return R(AS, x({}, e, { defaultTheme: Ql }));
}
function Lp(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function yd(e, t = !1) {
  return (
    e &&
    ((Lp(e.value) && e.value !== "") ||
      (t && Lp(e.defaultValue) && e.defaultValue !== ""))
  );
}
function $k(e) {
  return e.startAdornment;
}
function _k(e) {
  return X("MuiInputBase", e);
}
const Ik = Y("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  fo = Ik,
  Nk = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  Jl = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${H(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  ea = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  Ok = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: l,
        fullWidth: a,
        hiddenLabel: u,
        multiline: d,
        readOnly: p,
        size: f,
        startAdornment: b,
        type: v,
      } = e,
      g = {
        root: [
          "root",
          `color${H(n)}`,
          r && "disabled",
          o && "error",
          a && "fullWidth",
          s && "focused",
          l && "formControl",
          f === "small" && "sizeSmall",
          d && "multiline",
          b && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          p && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          v === "search" && "inputTypeSearch",
          d && "inputMultiline",
          f === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          b && "inputAdornedStart",
          i && "inputAdornedEnd",
          p && "readOnly",
        ],
      };
    return ee(g, _k, t);
  },
  ta = B("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Jl })(
    ({ theme: e, ownerState: t }) =>
      x(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${fo.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          x({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
  ),
  na = B("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: ea,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = x(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      o = { opacity: "0 !important" },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 };
    return x(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${fo.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${fo.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" }
    );
  }),
  Mk = R(Tk, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  Lk = y.forwardRef(function (t, n) {
    var r;
    const o = ne({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: s,
        autoFocus: l,
        className: a,
        components: u = {},
        componentsProps: d = {},
        defaultValue: p,
        disabled: f,
        disableInjectingGlobalStyles: b,
        endAdornment: v,
        fullWidth: g = !1,
        id: C,
        inputComponent: h = "input",
        inputProps: c = {},
        inputRef: m,
        maxRows: S,
        minRows: w,
        multiline: k = !1,
        name: E,
        onBlur: P,
        onChange: _,
        onClick: T,
        onFocus: A,
        onKeyDown: V,
        onKeyUp: W,
        placeholder: F,
        readOnly: L,
        renderSuffix: z,
        rows: q,
        slotProps: $ = {},
        slots: M = {},
        startAdornment: I,
        type: D = "text",
        value: G,
      } = o,
      ke = j(o, Nk),
      Q = c.value != null ? c.value : G,
      { current: fe } = y.useRef(Q != null),
      oe = y.useRef(),
      Oe = y.useCallback((pe) => {}, []),
      rt = Ke(oe, m, c.ref, Oe),
      [Se, Ze] = y.useState(!1),
      Z = bn(),
      Ae = Xn({
        props: o,
        muiFormControl: Z,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (Ae.focused = Z ? Z.focused : Se),
      y.useEffect(() => {
        !Z && f && Se && (Ze(!1), P && P());
      }, [Z, f, Se, P]);
    const ot = Z && Z.onFilled,
      jt = Z && Z.onEmpty,
      Mt = y.useCallback(
        (pe) => {
          yd(pe) ? ot && ot() : jt && jt();
        },
        [ot, jt]
      );
    qn(() => {
      fe && Mt({ value: Q });
    }, [Q, Mt, fe]);
    const un = (pe) => {
        if (Ae.disabled) {
          pe.stopPropagation();
          return;
        }
        A && A(pe),
          c.onFocus && c.onFocus(pe),
          Z && Z.onFocus ? Z.onFocus(pe) : Ze(!0);
      },
      Vt = (pe) => {
        P && P(pe),
          c.onBlur && c.onBlur(pe),
          Z && Z.onBlur ? Z.onBlur(pe) : Ze(!1);
      },
      $e = (pe, ...N) => {
        if (!fe) {
          const ye = pe.target || oe.current;
          if (ye == null) throw new Error(Hn(1));
          Mt({ value: ye.value });
        }
        c.onChange && c.onChange(pe, ...N), _ && _(pe, ...N);
      };
    y.useEffect(() => {
      Mt(oe.current);
    }, []);
    const Ht = (pe) => {
      oe.current && pe.currentTarget === pe.target && oe.current.focus(),
        T && T(pe);
    };
    let Kt = h,
      Fe = c;
    k &&
      Kt === "input" &&
      (q
        ? (Fe = x({ type: void 0, minRows: q, maxRows: q }, Fe))
        : (Fe = x({ type: void 0, maxRows: S, minRows: w }, Fe)),
      (Kt = CC));
    const Cn = (pe) => {
      Mt(
        pe.animationName === "mui-auto-fill-cancel"
          ? oe.current
          : { value: "x" }
      );
    };
    y.useEffect(() => {
      Z && Z.setAdornedStart(Boolean(I));
    }, [Z, I]);
    const kn = x({}, o, {
        color: Ae.color || "primary",
        disabled: Ae.disabled,
        endAdornment: v,
        error: Ae.error,
        focused: Ae.focused,
        formControl: Z,
        fullWidth: g,
        hiddenLabel: Ae.hiddenLabel,
        multiline: k,
        size: Ae.size,
        startAdornment: I,
        type: D,
      }),
      qt = Ok(kn),
      Ct = M.root || u.Root || ta,
      En = $.root || d.root || {},
      Gt = M.input || u.Input || na;
    return (
      (Fe = x({}, Fe, (r = $.input) != null ? r : d.input)),
      J(y.Fragment, {
        children: [
          !b && Mk,
          J(
            Ct,
            x(
              {},
              En,
              !uo(Ct) && { ownerState: x({}, kn, En.ownerState) },
              { ref: n, onClick: Ht },
              ke,
              {
                className: K(qt.root, En.className, a),
                children: [
                  I,
                  R(gd.Provider, {
                    value: null,
                    children: R(
                      Gt,
                      x(
                        {
                          ownerState: kn,
                          "aria-invalid": Ae.error,
                          "aria-describedby": i,
                          autoComplete: s,
                          autoFocus: l,
                          defaultValue: p,
                          disabled: Ae.disabled,
                          id: C,
                          onAnimationStart: Cn,
                          name: E,
                          placeholder: F,
                          readOnly: L,
                          required: Ae.required,
                          rows: q,
                          value: Q,
                          onKeyDown: V,
                          onKeyUp: W,
                          type: D,
                        },
                        Fe,
                        !uo(Gt) && {
                          as: Kt,
                          ownerState: x({}, kn, Fe.ownerState),
                        },
                        {
                          ref: rt,
                          className: K(qt.input, Fe.className),
                          onBlur: Vt,
                          onChange: $e,
                          onFocus: un,
                        }
                      )
                    ),
                  }),
                  v,
                  z ? z(x({}, Ae, { startAdornment: I })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  }),
  vd = Lk;
function Ak(e) {
  return X("MuiInput", e);
}
const Fk = x({}, fo, Y("MuiInput", ["root", "underline", "input"])),
  Io = Fk;
function zk(e) {
  return X("MuiOutlinedInput", e);
}
const Bk = x(
    {},
    fo,
    Y("MuiOutlinedInput", ["root", "notchedOutline", "input"])
  ),
  Tn = Bk;
function Dk(e) {
  return X("MuiFilledInput", e);
}
const Uk = x({}, fo, Y("MuiFilledInput", ["root", "underline", "input"])),
  Jn = Uk,
  Wk = _i(R("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  jk = _i(
    R("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    }),
    "Person"
  );
function Vk(e) {
  return X("MuiAvatar", e);
}
Y("MuiAvatar", [
  "root",
  "colorDefault",
  "circular",
  "rounded",
  "square",
  "img",
  "fallback",
]);
const Hk = [
    "alt",
    "children",
    "className",
    "component",
    "imgProps",
    "sizes",
    "src",
    "srcSet",
    "variant",
  ],
  Kk = (e) => {
    const { classes: t, variant: n, colorDefault: r } = e;
    return ee(
      {
        root: ["root", n, r && "colorDefault"],
        img: ["img"],
        fallback: ["fallback"],
      },
      Vk,
      t
    );
  },
  qk = B("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
    },
  })(({ theme: e, ownerState: t }) =>
    x(
      {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        width: 40,
        height: 40,
        fontFamily: e.typography.fontFamily,
        fontSize: e.typography.pxToRem(20),
        lineHeight: 1,
        borderRadius: "50%",
        overflow: "hidden",
        userSelect: "none",
      },
      t.variant === "rounded" && {
        borderRadius: (e.vars || e).shape.borderRadius,
      },
      t.variant === "square" && { borderRadius: 0 },
      t.colorDefault &&
        x(
          { color: (e.vars || e).palette.background.default },
          e.vars
            ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
            : {
                backgroundColor:
                  e.palette.mode === "light"
                    ? e.palette.grey[400]
                    : e.palette.grey[600],
              }
        )
    )
  ),
  Gk = B("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (e, t) => t.img,
  })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4,
  }),
  Qk = B(jk, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (e, t) => t.fallback,
  })({ width: "75%", height: "75%" });
function Yk({ crossOrigin: e, referrerPolicy: t, src: n, srcSet: r }) {
  const [o, i] = y.useState(!1);
  return (
    y.useEffect(() => {
      if (!n && !r) return;
      i(!1);
      let s = !0;
      const l = new Image();
      return (
        (l.onload = () => {
          s && i("loaded");
        }),
        (l.onerror = () => {
          s && i("error");
        }),
        (l.crossOrigin = e),
        (l.referrerPolicy = t),
        (l.src = n),
        r && (l.srcset = r),
        () => {
          s = !1;
        }
      );
    }, [e, t, n, r]),
    o
  );
}
const Xk = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiAvatar" }),
      {
        alt: o,
        children: i,
        className: s,
        component: l = "div",
        imgProps: a,
        sizes: u,
        src: d,
        srcSet: p,
        variant: f = "circular",
      } = r,
      b = j(r, Hk);
    let v = null;
    const g = Yk(x({}, a, { src: d, srcSet: p })),
      C = d || p,
      h = C && g !== "error",
      c = x({}, r, { colorDefault: !h, component: l, variant: f }),
      m = Kk(c);
    return (
      h
        ? (v = R(
            Gk,
            x(
              {
                alt: o,
                src: d,
                srcSet: p,
                sizes: u,
                ownerState: c,
                className: m.img,
              },
              a
            )
          ))
        : i != null
        ? (v = i)
        : C && o
        ? (v = o[0])
        : (v = R(Qk, { className: m.fallback })),
      R(
        qk,
        x({ as: l, ownerState: c, className: K(m.root, s), ref: n }, b, {
          children: v,
        })
      )
    );
  }),
  Zk = Xk,
  Jk = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  eE = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  tE = y.forwardRef(function (t, n) {
    const r = Yl(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: l,
        easing: a,
        in: u,
        onEnter: d,
        onEntered: p,
        onEntering: f,
        onExit: b,
        onExited: v,
        onExiting: g,
        style: C,
        timeout: h = o,
        TransitionComponent: c = sy,
      } = t,
      m = j(t, Jk),
      S = y.useRef(null),
      w = Ke(S, l.ref, n),
      k = (F) => (L) => {
        if (F) {
          const z = S.current;
          L === void 0 ? F(z) : F(z, L);
        }
      },
      E = k(f),
      P = k((F, L) => {
        ly(F);
        const z = Xs({ style: C, timeout: h, easing: a }, { mode: "enter" });
        (F.style.webkitTransition = r.transitions.create("opacity", z)),
          (F.style.transition = r.transitions.create("opacity", z)),
          d && d(F, L);
      }),
      _ = k(p),
      T = k(g),
      A = k((F) => {
        const L = Xs({ style: C, timeout: h, easing: a }, { mode: "exit" });
        (F.style.webkitTransition = r.transitions.create("opacity", L)),
          (F.style.transition = r.transitions.create("opacity", L)),
          b && b(F);
      }),
      V = k(v);
    return R(
      c,
      x(
        {
          appear: s,
          in: u,
          nodeRef: S,
          onEnter: P,
          onEntered: _,
          onEntering: E,
          onExit: A,
          onExited: V,
          onExiting: T,
          addEndListener: (F) => {
            i && i(S.current, F);
          },
          timeout: h,
        },
        m,
        {
          children: (F, L) =>
            y.cloneElement(
              l,
              x(
                {
                  style: x(
                    {
                      opacity: 0,
                      visibility: F === "exited" && !u ? "hidden" : void 0,
                    },
                    eE[F],
                    C,
                    l.props.style
                  ),
                  ref: w,
                },
                L
              )
            ),
        }
      )
    );
  }),
  uy = tE;
function nE(e) {
  return X("MuiBackdrop", e);
}
Y("MuiBackdrop", ["root", "invisible"]);
const rE = [
    "children",
    "component",
    "components",
    "componentsProps",
    "className",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "transitionDuration",
    "TransitionComponent",
  ],
  oE = (e) => {
    const { classes: t, invisible: n } = e;
    return ee({ root: ["root", n && "invisible"] }, nE, t);
  },
  iE = B("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    x(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  sE = y.forwardRef(function (t, n) {
    var r, o, i;
    const s = ne({ props: t, name: "MuiBackdrop" }),
      {
        children: l,
        component: a = "div",
        components: u = {},
        componentsProps: d = {},
        className: p,
        invisible: f = !1,
        open: b,
        slotProps: v = {},
        slots: g = {},
        transitionDuration: C,
        TransitionComponent: h = uy,
      } = s,
      c = j(s, rE),
      m = x({}, s, { component: a, invisible: f }),
      S = oE(m),
      w = (r = v.root) != null ? r : d.root;
    return R(
      h,
      x({ in: b, timeout: C }, c, {
        children: R(
          iE,
          x({ "aria-hidden": !0 }, w, {
            as: (o = (i = g.root) != null ? i : u.Root) != null ? o : a,
            className: K(S.root, p, w == null ? void 0 : w.className),
            ownerState: x({}, m, w == null ? void 0 : w.ownerState),
            classes: S,
            ref: n,
            children: l,
          })
        ),
      })
    );
  }),
  cy = sE;
function lE(e) {
  return X("MuiButton", e);
}
const aE = Y("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  es = aE,
  uE = y.createContext({}),
  cE = uE,
  dE = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  fE = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      l = {
        root: [
          "root",
          i,
          `${i}${H(t)}`,
          `size${H(o)}`,
          `${i}Size${H(o)}`,
          t === "inherit" && "colorInherit",
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${H(o)}`],
        endIcon: ["endIcon", `iconSize${H(o)}`],
      },
      a = ee(l, lE, s);
    return x({}, s, a);
  },
  dy = (e) =>
    x(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  pE = B(Zl, {
    shouldForwardProp: (e) => an(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${H(n.color)}`],
        t[`size${H(n.size)}`],
        t[`${n.variant}Size${H(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      return x(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": x(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : gt(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : gt(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : gt(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: (e.vars || e).palette.grey.A100,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": x(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${es.focusVisible}`]: x(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${es.disabled}`]: x(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${gt(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: (e.vars || e).palette.grey[300],
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${es.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${es.disabled}`]: { boxShadow: "none" },
      }
  ),
  hE = B("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${H(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    x(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      dy(e)
    )
  ),
  mE = B("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${H(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    x(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      dy(e)
    )
  ),
  gE = y.forwardRef(function (t, n) {
    const r = y.useContext(cE),
      o = Yc(r, t),
      i = ne({ props: o, name: "MuiButton" }),
      {
        children: s,
        color: l = "primary",
        component: a = "button",
        className: u,
        disabled: d = !1,
        disableElevation: p = !1,
        disableFocusRipple: f = !1,
        endIcon: b,
        focusVisibleClassName: v,
        fullWidth: g = !1,
        size: C = "medium",
        startIcon: h,
        type: c,
        variant: m = "text",
      } = i,
      S = j(i, dE),
      w = x({}, i, {
        color: l,
        component: a,
        disabled: d,
        disableElevation: p,
        disableFocusRipple: f,
        fullWidth: g,
        size: C,
        type: c,
        variant: m,
      }),
      k = fE(w),
      E = h && R(hE, { className: k.startIcon, ownerState: w, children: h }),
      P = b && R(mE, { className: k.endIcon, ownerState: w, children: b });
    return J(
      pE,
      x(
        {
          ownerState: w,
          className: K(r.className, k.root, u),
          component: a,
          disabled: d,
          focusRipple: !f,
          focusVisibleClassName: K(k.focusVisible, v),
          ref: n,
          type: c,
        },
        S,
        { classes: k, children: [E, s, P] }
      )
    );
  }),
  yE = gE;
function vE(e) {
  return X("MuiCard", e);
}
Y("MuiCard", ["root"]);
const xE = ["className", "raised"],
  SE = (e) => {
    const { classes: t } = e;
    return ee({ root: ["root"] }, vE, t);
  },
  wE = B(vo, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ overflow: "hidden" })),
  bE = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiCard" }),
      { className: o, raised: i = !1 } = r,
      s = j(r, xE),
      l = x({}, r, { raised: i }),
      a = SE(l);
    return R(
      wE,
      x(
        {
          className: K(a.root, o),
          elevation: i ? 8 : void 0,
          ref: n,
          ownerState: l,
        },
        s
      )
    );
  }),
  CE = bE;
function kE(e) {
  return X("MuiCardContent", e);
}
Y("MuiCardContent", ["root"]);
const EE = ["className", "component"],
  RE = (e) => {
    const { classes: t } = e;
    return ee({ root: ["root"] }, kE, t);
  },
  PE = B("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ padding: 16, "&:last-child": { paddingBottom: 24 } })),
  TE = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiCardContent" }),
      { className: o, component: i = "div" } = r,
      s = j(r, EE),
      l = x({}, r, { component: i }),
      a = RE(l);
    return R(
      PE,
      x({ as: i, className: K(a.root, o), ownerState: l, ref: n }, s)
    );
  }),
  Ap = TE;
function $E(e) {
  return X("PrivateSwitchBase", e);
}
Y("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const _E = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  IE = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${H(o)}`],
        input: ["input"],
      };
    return ee(i, $E, t);
  },
  NE = B(Zl)(({ ownerState: e }) =>
    x(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 }
    )
  ),
  OE = B("input")({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  ME = y.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: s,
        defaultChecked: l,
        disabled: a,
        disableFocusRipple: u = !1,
        edge: d = !1,
        icon: p,
        id: f,
        inputProps: b,
        inputRef: v,
        name: g,
        onBlur: C,
        onChange: h,
        onFocus: c,
        readOnly: m,
        required: S = !1,
        tabIndex: w,
        type: k,
        value: E,
      } = t,
      P = j(t, _E),
      [_, T] = yi({
        controlled: o,
        default: Boolean(l),
        name: "SwitchBase",
        state: "checked",
      }),
      A = bn(),
      V = (M) => {
        c && c(M), A && A.onFocus && A.onFocus(M);
      },
      W = (M) => {
        C && C(M), A && A.onBlur && A.onBlur(M);
      },
      F = (M) => {
        if (M.nativeEvent.defaultPrevented) return;
        const I = M.target.checked;
        T(I), h && h(M, I);
      };
    let L = a;
    A && typeof L > "u" && (L = A.disabled);
    const z = k === "checkbox" || k === "radio",
      q = x({}, t, { checked: _, disabled: L, disableFocusRipple: u, edge: d }),
      $ = IE(q);
    return J(
      NE,
      x(
        {
          component: "span",
          className: K($.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: L,
          tabIndex: null,
          role: void 0,
          onFocus: V,
          onBlur: W,
          ownerState: q,
          ref: n,
        },
        P,
        {
          children: [
            R(
              OE,
              x(
                {
                  autoFocus: r,
                  checked: o,
                  defaultChecked: l,
                  className: $.input,
                  disabled: L,
                  id: z && f,
                  name: g,
                  onChange: F,
                  readOnly: m,
                  ref: v,
                  required: S,
                  ownerState: q,
                  tabIndex: w,
                  type: k,
                },
                k === "checkbox" && E === void 0 ? {} : { value: E },
                b
              )
            ),
            _ ? i : p,
          ],
        }
      )
    );
  }),
  LE = ME,
  AE = [
    "BackdropComponent",
    "BackdropProps",
    "closeAfterTransition",
    "children",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "slotProps",
    "slots",
    "theme",
  ],
  FE = (e) => e.classes,
  zE = B("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    x(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  BE = B(cy, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  DE = y.forwardRef(function (t, n) {
    var r, o, i, s, l, a;
    const u = ne({ name: "MuiModal", props: t }),
      {
        BackdropComponent: d = BE,
        BackdropProps: p,
        closeAfterTransition: f = !1,
        children: b,
        component: v,
        components: g = {},
        componentsProps: C = {},
        disableAutoFocus: h = !1,
        disableEnforceFocus: c = !1,
        disableEscapeKeyDown: m = !1,
        disablePortal: S = !1,
        disableRestoreFocus: w = !1,
        disableScrollLock: k = !1,
        hideBackdrop: E = !1,
        keepMounted: P = !1,
        slotProps: _,
        slots: T,
        theme: A,
      } = u,
      V = j(u, AE),
      [W, F] = y.useState(!0),
      L = {
        closeAfterTransition: f,
        disableAutoFocus: h,
        disableEnforceFocus: c,
        disableEscapeKeyDown: m,
        disablePortal: S,
        disableRestoreFocus: w,
        disableScrollLock: k,
        hideBackdrop: E,
        keepMounted: P,
      },
      z = x({}, u, L, { exited: W }),
      q = FE(z),
      $ =
        (r = (o = T == null ? void 0 : T.root) != null ? o : g.Root) != null
          ? r
          : zE,
      M =
        (i = (s = T == null ? void 0 : T.backdrop) != null ? s : g.Backdrop) !=
        null
          ? i
          : d,
      I = (l = _ == null ? void 0 : _.root) != null ? l : C.root,
      D = (a = _ == null ? void 0 : _.backdrop) != null ? a : C.backdrop;
    return R(
      xC,
      x(
        {
          slots: { root: $, backdrop: M },
          slotProps: {
            root: () => x({}, Ku(I, z), !uo($) && { as: v, theme: A }),
            backdrop: () => x({}, p, Ku(D, z)),
          },
          onTransitionEnter: () => F(!1),
          onTransitionExited: () => F(!0),
          ref: n,
        },
        V,
        { classes: q },
        L,
        { children: b }
      )
    );
  }),
  fy = DE;
function UE(e) {
  return X("MuiDialog", e);
}
const WE = Y("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  La = WE,
  jE = y.createContext({}),
  py = jE,
  VE = [
    "aria-describedby",
    "aria-labelledby",
    "BackdropComponent",
    "BackdropProps",
    "children",
    "className",
    "disableEscapeKeyDown",
    "fullScreen",
    "fullWidth",
    "maxWidth",
    "onBackdropClick",
    "onClose",
    "open",
    "PaperComponent",
    "PaperProps",
    "scroll",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ],
  HE = B(cy, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  KE = (e) => {
    const {
        classes: t,
        scroll: n,
        maxWidth: r,
        fullWidth: o,
        fullScreen: i,
      } = e,
      s = {
        root: ["root"],
        container: ["container", `scroll${H(n)}`],
        paper: [
          "paper",
          `paperScroll${H(n)}`,
          `paperWidth${H(String(r))}`,
          o && "paperFullWidth",
          i && "paperFullScreen",
        ],
      };
    return ee(s, UE, t);
  },
  qE = B(fy, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ "@media print": { position: "absolute !important" } }),
  GE = B("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.container, t[`scroll${H(n.scroll)}`]];
    },
  })(({ ownerState: e }) =>
    x(
      { height: "100%", "@media print": { height: "auto" }, outline: 0 },
      e.scroll === "paper" && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      e.scroll === "body" && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&:after": {
          content: '""',
          display: "inline-block",
          verticalAlign: "middle",
          height: "100%",
          width: "0",
        },
      }
    )
  ),
  QE = B(vo, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`scrollPaper${H(n.scroll)}`],
        t[`paperWidth${H(String(n.maxWidth))}`],
        n.fullWidth && t.paperFullWidth,
        n.fullScreen && t.paperFullScreen,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    x(
      {
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": { overflowY: "visible", boxShadow: "none" },
      },
      t.scroll === "paper" && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)",
      },
      t.scroll === "body" && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left",
      },
      !t.maxWidth && { maxWidth: "calc(100% - 64px)" },
      t.maxWidth === "xs" && {
        maxWidth:
          e.breakpoints.unit === "px"
            ? Math.max(e.breakpoints.values.xs, 444)
            : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
        [`&.${La.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: "calc(100% - 64px)" },
        },
      },
      t.maxWidth &&
        t.maxWidth !== "xs" && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${La.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)",
            },
          },
        },
      t.fullWidth && { width: "calc(100% - 64px)" },
      t.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${La.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
      }
    )
  ),
  YE = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiDialog" }),
      o = Yl(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": s,
        "aria-labelledby": l,
        BackdropComponent: a,
        BackdropProps: u,
        children: d,
        className: p,
        disableEscapeKeyDown: f = !1,
        fullScreen: b = !1,
        fullWidth: v = !1,
        maxWidth: g = "sm",
        onBackdropClick: C,
        onClose: h,
        open: c,
        PaperComponent: m = vo,
        PaperProps: S = {},
        scroll: w = "paper",
        TransitionComponent: k = uy,
        transitionDuration: E = i,
        TransitionProps: P,
      } = r,
      _ = j(r, VE),
      T = x({}, r, {
        disableEscapeKeyDown: f,
        fullScreen: b,
        fullWidth: v,
        maxWidth: g,
        scroll: w,
      }),
      A = KE(T),
      V = y.useRef(),
      W = (q) => {
        V.current = q.target === q.currentTarget;
      },
      F = (q) => {
        V.current &&
          ((V.current = null), C && C(q), h && h(q, "backdropClick"));
      },
      L = Rl(l),
      z = y.useMemo(() => ({ titleId: L }), [L]);
    return R(
      qE,
      x(
        {
          className: K(A.root, p),
          closeAfterTransition: !0,
          components: { Backdrop: HE },
          componentsProps: { backdrop: x({ transitionDuration: E, as: a }, u) },
          disableEscapeKeyDown: f,
          onClose: h,
          open: c,
          ref: n,
          onClick: F,
          ownerState: T,
        },
        _,
        {
          children: R(
            k,
            x({ appear: !0, in: c, timeout: E, role: "presentation" }, P, {
              children: R(GE, {
                className: K(A.container),
                onMouseDown: W,
                ownerState: T,
                children: R(
                  QE,
                  x(
                    {
                      as: m,
                      elevation: 24,
                      role: "dialog",
                      "aria-describedby": s,
                      "aria-labelledby": L,
                    },
                    S,
                    {
                      className: K(A.paper, S.className),
                      ownerState: T,
                      children: R(py.Provider, { value: z, children: d }),
                    }
                  )
                ),
              }),
            })
          ),
        }
      )
    );
  }),
  XE = YE;
function ZE(e) {
  return X("MuiDialogContent", e);
}
Y("MuiDialogContent", ["root", "dividers"]);
function JE(e) {
  return X("MuiDialogTitle", e);
}
const e2 = Y("MuiDialogTitle", ["root"]),
  t2 = e2,
  n2 = ["className", "dividers"],
  r2 = (e) => {
    const { classes: t, dividers: n } = e;
    return ee({ root: ["root", n && "dividers"] }, ZE, t);
  },
  o2 = B("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.dividers && t.dividers];
    },
  })(({ theme: e, ownerState: t }) =>
    x(
      {
        flex: "1 1 auto",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        padding: "20px 24px",
      },
      t.dividers
        ? {
            padding: "16px 24px",
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          }
        : { [`.${t2.root} + &`]: { paddingTop: 0 } }
    )
  ),
  i2 = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiDialogContent" }),
      { className: o, dividers: i = !1 } = r,
      s = j(r, n2),
      l = x({}, r, { dividers: i }),
      a = r2(l);
    return R(o2, x({ className: K(a.root, o), ownerState: l, ref: n }, s));
  }),
  s2 = i2,
  l2 = ["className", "id"],
  a2 = (e) => {
    const { classes: t } = e;
    return ee({ root: ["root"] }, JE, t);
  },
  u2 = B(co, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ padding: "16px 24px", flex: "0 0 auto" }),
  c2 = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiDialogTitle" }),
      { className: o, id: i } = r,
      s = j(r, l2),
      l = r,
      a = a2(l),
      { titleId: u = i } = y.useContext(py);
    return R(
      u2,
      x(
        {
          component: "h2",
          className: K(a.root, o),
          ownerState: l,
          ref: n,
          variant: "h6",
          id: u,
        },
        s
      )
    );
  }),
  d2 = c2,
  f2 = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  p2 = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ee({ root: ["root", !n && "underline"], input: ["input"] }, Dk, t);
    return x({}, t, o);
  },
  h2 = B(ta, {
    shouldForwardProp: (e) => an(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Jl(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = e.palette.mode === "light",
      o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return x(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${Jn.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${Jn.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l,
        },
      },
      !t.disableUnderline && {
        "&:after": {
          borderBottom: `2px solid ${
            (n = (e.vars || e).palette[t.color || "primary"]) == null
              ? void 0
              : n.main
          }`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${Jn.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${Jn.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        "&:before": {
          borderBottom: `1px solid ${
            e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
              : o
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${Jn.disabled}, .${Jn.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${Jn.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        x(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 }
        )
    );
  }),
  m2 = B(na, { name: "MuiFilledInput", slot: "Input", overridesResolver: ea })(
    ({ theme: e, ownerState: t }) =>
      x(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
      )
  ),
  hy = y.forwardRef(function (t, n) {
    var r, o, i, s;
    const l = ne({ props: t, name: "MuiFilledInput" }),
      {
        components: a = {},
        componentsProps: u,
        fullWidth: d = !1,
        inputComponent: p = "input",
        multiline: f = !1,
        slotProps: b,
        slots: v = {},
        type: g = "text",
      } = l,
      C = j(l, f2),
      h = x({}, l, { fullWidth: d, inputComponent: p, multiline: f, type: g }),
      c = p2(l),
      m = { root: { ownerState: h }, input: { ownerState: h } },
      S = b ?? u ? _t(b ?? u, m) : m,
      w = (r = (o = v.root) != null ? o : a.Root) != null ? r : h2,
      k = (i = (s = v.input) != null ? s : a.Input) != null ? i : m2;
    return R(
      vd,
      x(
        {
          slots: { root: w, input: k },
          componentsProps: S,
          fullWidth: d,
          inputComponent: p,
          multiline: f,
          ref: n,
          type: g,
        },
        C,
        { classes: c }
      )
    );
  });
hy.muiName = "Input";
const my = hy;
function g2(e) {
  return X("MuiFormControl", e);
}
Y("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const y2 = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  v2 = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ["root", n !== "none" && `margin${H(n)}`, r && "fullWidth"] };
    return ee(o, g2, t);
  },
  x2 = B("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      x({}, t.root, t[`margin${H(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    x(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  S2 = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: l = "div",
        disabled: a = !1,
        error: u = !1,
        focused: d,
        fullWidth: p = !1,
        hiddenLabel: f = !1,
        margin: b = "none",
        required: v = !1,
        size: g = "medium",
        variant: C = "outlined",
      } = r,
      h = j(r, y2),
      c = x({}, r, {
        color: s,
        component: l,
        disabled: a,
        error: u,
        fullWidth: p,
        hiddenLabel: f,
        margin: b,
        required: v,
        size: g,
        variant: C,
      }),
      m = v2(c),
      [S, w] = y.useState(() => {
        let W = !1;
        return (
          o &&
            y.Children.forEach(o, (F) => {
              if (!Go(F, ["Input", "Select"])) return;
              const L = Go(F, ["Select"]) ? F.props.input : F;
              L && $k(L.props) && (W = !0);
            }),
          W
        );
      }),
      [k, E] = y.useState(() => {
        let W = !1;
        return (
          o &&
            y.Children.forEach(o, (F) => {
              Go(F, ["Input", "Select"]) && yd(F.props, !0) && (W = !0);
            }),
          W
        );
      }),
      [P, _] = y.useState(!1);
    a && P && _(!1);
    const T = d !== void 0 && !a ? d : P;
    let A;
    const V = y.useMemo(
      () => ({
        adornedStart: S,
        setAdornedStart: w,
        color: s,
        disabled: a,
        error: u,
        filled: k,
        focused: T,
        fullWidth: p,
        hiddenLabel: f,
        size: g,
        onBlur: () => {
          _(!1);
        },
        onEmpty: () => {
          E(!1);
        },
        onFilled: () => {
          E(!0);
        },
        onFocus: () => {
          _(!0);
        },
        registerEffect: A,
        required: v,
        variant: C,
      }),
      [S, s, a, u, k, T, p, f, A, v, g, C]
    );
    return R(gd.Provider, {
      value: V,
      children: R(
        x2,
        x({ as: l, ownerState: c, className: K(m.root, i), ref: n }, h, {
          children: o,
        })
      ),
    });
  }),
  w2 = S2;
function b2(e) {
  return X("MuiFormControlLabel", e);
}
const C2 = Y("MuiFormControlLabel", [
    "root",
    "labelPlacementStart",
    "labelPlacementTop",
    "labelPlacementBottom",
    "disabled",
    "label",
    "error",
  ]),
  ts = C2,
  k2 = [
    "checked",
    "className",
    "componentsProps",
    "control",
    "disabled",
    "disableTypography",
    "inputRef",
    "label",
    "labelPlacement",
    "name",
    "onChange",
    "slotProps",
    "value",
  ],
  E2 = (e) => {
    const { classes: t, disabled: n, labelPlacement: r, error: o } = e,
      i = {
        root: ["root", n && "disabled", `labelPlacement${H(r)}`, o && "error"],
        label: ["label", n && "disabled"],
      };
    return ee(i, b2, t);
  },
  R2 = B("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${ts.label}`]: t.label },
        t.root,
        t[`labelPlacement${H(n.labelPlacement)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    x(
      {
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${ts.disabled}`]: { cursor: "default" },
      },
      t.labelPlacement === "start" && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11,
      },
      t.labelPlacement === "top" && {
        flexDirection: "column-reverse",
        marginLeft: 16,
      },
      t.labelPlacement === "bottom" && {
        flexDirection: "column",
        marginLeft: 16,
      },
      {
        [`& .${ts.label}`]: {
          [`&.${ts.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        },
      }
    )
  ),
  P2 = y.forwardRef(function (t, n) {
    var r;
    const o = ne({ props: t, name: "MuiFormControlLabel" }),
      {
        className: i,
        componentsProps: s = {},
        control: l,
        disabled: a,
        disableTypography: u,
        label: d,
        labelPlacement: p = "end",
        slotProps: f = {},
      } = o,
      b = j(o, k2),
      v = bn();
    let g = a;
    typeof g > "u" && typeof l.props.disabled < "u" && (g = l.props.disabled),
      typeof g > "u" && v && (g = v.disabled);
    const C = { disabled: g };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((k) => {
      typeof l.props[k] > "u" && typeof o[k] < "u" && (C[k] = o[k]);
    });
    const h = Xn({ props: o, muiFormControl: v, states: ["error"] }),
      c = x({}, o, { disabled: g, labelPlacement: p, error: h.error }),
      m = E2(c),
      S = (r = f.typography) != null ? r : s.typography;
    let w = d;
    return (
      w != null &&
        w.type !== co &&
        !u &&
        (w = R(
          co,
          x({ component: "span" }, S, {
            className: K(m.label, S == null ? void 0 : S.className),
            children: w,
          })
        )),
      J(
        R2,
        x({ className: K(m.root, i), ownerState: c, ref: n }, b, {
          children: [y.cloneElement(l, C), w],
        })
      )
    );
  }),
  T2 = P2;
function $2(e) {
  return X("MuiFormGroup", e);
}
Y("MuiFormGroup", ["root", "row", "error"]);
const _2 = ["className", "row"],
  I2 = (e) => {
    const { classes: t, row: n, error: r } = e;
    return ee({ root: ["root", n && "row", r && "error"] }, $2, t);
  },
  N2 = B("div", {
    name: "MuiFormGroup",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.row && t.row];
    },
  })(({ ownerState: e }) =>
    x(
      { display: "flex", flexDirection: "column", flexWrap: "wrap" },
      e.row && { flexDirection: "row" }
    )
  ),
  O2 = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiFormGroup" }),
      { className: o, row: i = !1 } = r,
      s = j(r, _2),
      l = bn(),
      a = Xn({ props: r, muiFormControl: l, states: ["error"] }),
      u = x({}, r, { row: i, error: a.error }),
      d = I2(u);
    return R(N2, x({ className: K(d.root, o), ownerState: u, ref: n }, s));
  }),
  M2 = O2;
function L2(e) {
  return X("MuiFormHelperText", e);
}
const A2 = Y("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required",
  ]),
  Fp = A2;
var zp;
const F2 = [
    "children",
    "className",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "margin",
    "required",
    "variant",
  ],
  z2 = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: s,
        focused: l,
        required: a,
      } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${H(r)}`,
          n && "contained",
          l && "focused",
          s && "filled",
          a && "required",
        ],
      };
    return ee(u, L2, t);
  },
  B2 = B("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${H(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    x(
      { color: (e.vars || e).palette.text.secondary },
      e.typography.caption,
      {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${Fp.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Fp.error}`]: { color: (e.vars || e).palette.error.main },
      },
      t.size === "small" && { marginTop: 4 },
      t.contained && { marginLeft: 14, marginRight: 14 }
    )
  ),
  D2 = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiFormHelperText" }),
      { children: o, className: i, component: s = "p" } = r,
      l = j(r, F2),
      a = bn(),
      u = Xn({
        props: r,
        muiFormControl: a,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      d = x({}, r, {
        component: s,
        contained: u.variant === "filled" || u.variant === "outlined",
        variant: u.variant,
        size: u.size,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      p = z2(d);
    return R(
      B2,
      x({ as: s, ownerState: d, className: K(p.root, i), ref: n }, l, {
        children:
          o === " "
            ? zp ||
              (zp = R("span", { className: "notranslate", children: "​" }))
            : o,
      })
    );
  }),
  U2 = D2;
function W2(e) {
  return X("MuiFormLabel", e);
}
const j2 = Y("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  Zo = j2,
  V2 = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  H2 = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: l,
      } = e,
      a = {
        root: [
          "root",
          `color${H(n)}`,
          o && "disabled",
          i && "error",
          s && "filled",
          r && "focused",
          l && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return ee(a, W2, t);
  },
  K2 = B("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      x(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    x({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${Zo.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${Zo.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${Zo.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  q2 = B("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${Zo.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  G2 = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: s = "label" } = r,
      l = j(r, V2),
      a = bn(),
      u = Xn({
        props: r,
        muiFormControl: a,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      d = x({}, r, {
        color: u.color || "primary",
        component: s,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      p = H2(d);
    return J(
      K2,
      x({ as: s, ownerState: d, className: K(p.root, i), ref: n }, l, {
        children: [
          o,
          u.required &&
            J(q2, {
              ownerState: d,
              "aria-hidden": !0,
              className: p.asterisk,
              children: [" ", "*"],
            }),
        ],
      })
    );
  }),
  Q2 = G2,
  Y2 = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function Yu(e) {
  return `scale(${e}, ${e ** 2})`;
}
const X2 = {
    entering: { opacity: 1, transform: Yu(1) },
    entered: { opacity: 1, transform: "none" },
  },
  Aa =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  gy = y.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: l,
        onEnter: a,
        onEntered: u,
        onEntering: d,
        onExit: p,
        onExited: f,
        onExiting: b,
        style: v,
        timeout: g = "auto",
        TransitionComponent: C = sy,
      } = t,
      h = j(t, Y2),
      c = y.useRef(),
      m = y.useRef(),
      S = Yl(),
      w = y.useRef(null),
      k = Ke(w, i.ref, n),
      E = (L) => (z) => {
        if (L) {
          const q = w.current;
          z === void 0 ? L(q) : L(q, z);
        }
      },
      P = E(d),
      _ = E((L, z) => {
        ly(L);
        const {
          duration: q,
          delay: $,
          easing: M,
        } = Xs({ style: v, timeout: g, easing: s }, { mode: "enter" });
        let I;
        g === "auto"
          ? ((I = S.transitions.getAutoHeightDuration(L.clientHeight)),
            (m.current = I))
          : (I = q),
          (L.style.transition = [
            S.transitions.create("opacity", { duration: I, delay: $ }),
            S.transitions.create("transform", {
              duration: Aa ? I : I * 0.666,
              delay: $,
              easing: M,
            }),
          ].join(",")),
          a && a(L, z);
      }),
      T = E(u),
      A = E(b),
      V = E((L) => {
        const {
          duration: z,
          delay: q,
          easing: $,
        } = Xs({ style: v, timeout: g, easing: s }, { mode: "exit" });
        let M;
        g === "auto"
          ? ((M = S.transitions.getAutoHeightDuration(L.clientHeight)),
            (m.current = M))
          : (M = z),
          (L.style.transition = [
            S.transitions.create("opacity", { duration: M, delay: q }),
            S.transitions.create("transform", {
              duration: Aa ? M : M * 0.666,
              delay: Aa ? q : q || M * 0.333,
              easing: $,
            }),
          ].join(",")),
          (L.style.opacity = 0),
          (L.style.transform = Yu(0.75)),
          p && p(L);
      }),
      W = E(f),
      F = (L) => {
        g === "auto" && (c.current = setTimeout(L, m.current || 0)),
          r && r(w.current, L);
      };
    return (
      y.useEffect(
        () => () => {
          clearTimeout(c.current);
        },
        []
      ),
      R(
        C,
        x(
          {
            appear: o,
            in: l,
            nodeRef: w,
            onEnter: _,
            onEntered: T,
            onEntering: P,
            onExit: V,
            onExited: W,
            onExiting: A,
            addEndListener: F,
            timeout: g === "auto" ? null : g,
          },
          h,
          {
            children: (L, z) =>
              y.cloneElement(
                i,
                x(
                  {
                    style: x(
                      {
                        opacity: 0,
                        transform: Yu(0.75),
                        visibility: L === "exited" && !l ? "hidden" : void 0,
                      },
                      X2[L],
                      v,
                      i.props.style
                    ),
                    ref: k,
                  },
                  z
                )
              ),
          }
        )
      )
    );
  });
gy.muiSupportAuto = !0;
const Z2 = gy,
  J2 = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  eR = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ee({ root: ["root", !n && "underline"], input: ["input"] }, Ak, t);
    return x({}, t, o);
  },
  tR = B(ta, {
    shouldForwardProp: (e) => an(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Jl(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.42)"
        : "rgba(255, 255, 255, 0.7)";
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      x(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&:after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${Io.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${Io.error}`]: {
            "&:before, &:after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&:before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${Io.disabled}, .${Io.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${r}` },
          },
          [`&.${Io.disabled}:before`]: { borderBottomStyle: "dotted" },
        }
      )
    );
  }),
  nR = B(na, { name: "MuiInput", slot: "Input", overridesResolver: ea })({}),
  yy = y.forwardRef(function (t, n) {
    var r, o, i, s;
    const l = ne({ props: t, name: "MuiInput" }),
      {
        disableUnderline: a,
        components: u = {},
        componentsProps: d,
        fullWidth: p = !1,
        inputComponent: f = "input",
        multiline: b = !1,
        slotProps: v,
        slots: g = {},
        type: C = "text",
      } = l,
      h = j(l, J2),
      c = eR(l),
      S = { root: { ownerState: { disableUnderline: a } } },
      w = v ?? d ? _t(v ?? d, S) : S,
      k = (r = (o = g.root) != null ? o : u.Root) != null ? r : tR,
      E = (i = (s = g.input) != null ? s : u.Input) != null ? i : nR;
    return R(
      vd,
      x(
        {
          slots: { root: k, input: E },
          slotProps: w,
          fullWidth: p,
          inputComponent: f,
          multiline: b,
          ref: n,
          type: C,
        },
        h,
        { classes: c }
      )
    );
  });
yy.muiName = "Input";
const vy = yy;
function rR(e) {
  return X("MuiInputLabel", e);
}
Y("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const oR = ["disableAnimation", "margin", "shrink", "variant", "className"],
  iR = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: l,
      } = e,
      u = ee(
        {
          root: [
            "root",
            n && "formControl",
            !i && "animated",
            o && "shrink",
            r === "small" && "sizeSmall",
            s,
          ],
          asterisk: [l && "asterisk"],
        },
        rR,
        t
      );
    return x({}, t, u);
  },
  sR = B(Q2, {
    shouldForwardProp: (e) => an(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Zo.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        t[n.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    x(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)",
      },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%",
      },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        x(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            x(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && {
                transform: "translate(12px, 4px) scale(0.75)",
              }
            )
        ),
      t.variant === "outlined" &&
        x(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 24px)",
            transform: "translate(14px, -9px) scale(0.75)",
          }
        )
    )
  ),
  lR = y.forwardRef(function (t, n) {
    const r = ne({ name: "MuiInputLabel", props: t }),
      { disableAnimation: o = !1, shrink: i, className: s } = r,
      l = j(r, oR),
      a = bn();
    let u = i;
    typeof u > "u" && a && (u = a.filled || a.focused || a.adornedStart);
    const d = Xn({
        props: r,
        muiFormControl: a,
        states: ["size", "variant", "required"],
      }),
      p = x({}, r, {
        disableAnimation: o,
        formControl: a,
        shrink: u,
        size: d.size,
        variant: d.variant,
        required: d.required,
      }),
      f = iR(p);
    return R(
      sR,
      x(
        { "data-shrink": u, ownerState: p, ref: n, className: K(f.root, s) },
        l,
        { classes: f }
      )
    );
  }),
  aR = lR,
  uR = y.createContext({}),
  Zr = uR;
function cR(e) {
  return X("MuiList", e);
}
Y("MuiList", ["root", "padding", "dense", "subheader"]);
const dR = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  fR = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return ee(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      cR,
      t
    );
  },
  pR = B("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    x(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  hR = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: l = !1,
        disablePadding: a = !1,
        subheader: u,
      } = r,
      d = j(r, dR),
      p = y.useMemo(() => ({ dense: l }), [l]),
      f = x({}, r, { component: s, dense: l, disablePadding: a }),
      b = fR(f);
    return R(Zr.Provider, {
      value: p,
      children: J(
        pR,
        x({ as: s, className: K(b.root, i), ref: n, ownerState: f }, d, {
          children: [u, o],
        })
      ),
    });
  }),
  xd = hR;
function mR(e) {
  return X("MuiListItem", e);
}
const gR = Y("MuiListItem", [
    "root",
    "container",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "padding",
    "button",
    "secondaryAction",
    "selected",
  ]),
  Ir = gR,
  yR = Y("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  vR = yR;
function xR(e) {
  return X("MuiListItemSecondaryAction", e);
}
Y("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const SR = ["className"],
  wR = (e) => {
    const { disableGutters: t, classes: n } = e;
    return ee({ root: ["root", t && "disableGutters"] }, xR, n);
  },
  bR = B("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.disableGutters && t.disableGutters];
    },
  })(({ ownerState: e }) =>
    x(
      {
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
      },
      e.disableGutters && { right: 0 }
    )
  ),
  xy = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiListItemSecondaryAction" }),
      { className: o } = r,
      i = j(r, SR),
      s = y.useContext(Zr),
      l = x({}, r, { disableGutters: s.disableGutters }),
      a = wR(l);
    return R(bR, x({ className: K(a.root, o), ownerState: l, ref: n }, i));
  });
xy.muiName = "ListItemSecondaryAction";
const CR = xy,
  kR = ["className"],
  ER = [
    "alignItems",
    "autoFocus",
    "button",
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "ContainerComponent",
    "ContainerProps",
    "dense",
    "disabled",
    "disableGutters",
    "disablePadding",
    "divider",
    "focusVisibleClassName",
    "secondaryAction",
    "selected",
    "slotProps",
    "slots",
  ],
  RR = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.button && t.button,
      n.hasSecondaryAction && t.secondaryAction,
    ];
  },
  PR = (e) => {
    const {
      alignItems: t,
      button: n,
      classes: r,
      dense: o,
      disabled: i,
      disableGutters: s,
      disablePadding: l,
      divider: a,
      hasSecondaryAction: u,
      selected: d,
    } = e;
    return ee(
      {
        root: [
          "root",
          o && "dense",
          !s && "gutters",
          !l && "padding",
          a && "divider",
          i && "disabled",
          n && "button",
          t === "flex-start" && "alignItemsFlexStart",
          u && "secondaryAction",
          d && "selected",
        ],
        container: ["container"],
      },
      mR,
      r
    );
  },
  TR = B("div", { name: "MuiListItem", slot: "Root", overridesResolver: RR })(
    ({ theme: e, ownerState: t }) =>
      x(
        {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "left",
        },
        !t.disablePadding &&
          x(
            { paddingTop: 8, paddingBottom: 8 },
            t.dense && { paddingTop: 4, paddingBottom: 4 },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            !!t.secondaryAction && { paddingRight: 48 }
          ),
        !!t.secondaryAction && { [`& > .${vR.root}`]: { paddingRight: 48 } },
        {
          [`&.${Ir.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${Ir.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : gt(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${Ir.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : gt(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${Ir.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
        },
        t.alignItems === "flex-start" && { alignItems: "flex-start" },
        t.divider && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box",
        },
        t.button && {
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${Ir.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : gt(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
            "@media (hover: none)": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : gt(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
        },
        t.hasSecondaryAction && { paddingRight: 48 }
      )
  ),
  $R = B("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container,
  })({ position: "relative" }),
  _R = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiListItem" }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        button: s = !1,
        children: l,
        className: a,
        component: u,
        components: d = {},
        componentsProps: p = {},
        ContainerComponent: f = "li",
        ContainerProps: { className: b } = {},
        dense: v = !1,
        disabled: g = !1,
        disableGutters: C = !1,
        disablePadding: h = !1,
        divider: c = !1,
        focusVisibleClassName: m,
        secondaryAction: S,
        selected: w = !1,
        slotProps: k = {},
        slots: E = {},
      } = r,
      P = j(r.ContainerProps, kR),
      _ = j(r, ER),
      T = y.useContext(Zr),
      A = y.useMemo(
        () => ({ dense: v || T.dense || !1, alignItems: o, disableGutters: C }),
        [o, T.dense, v, C]
      ),
      V = y.useRef(null);
    qn(() => {
      i && V.current && V.current.focus();
    }, [i]);
    const W = y.Children.toArray(l),
      F = W.length && Go(W[W.length - 1], ["ListItemSecondaryAction"]),
      L = x({}, r, {
        alignItems: o,
        autoFocus: i,
        button: s,
        dense: A.dense,
        disabled: g,
        disableGutters: C,
        disablePadding: h,
        divider: c,
        hasSecondaryAction: F,
        selected: w,
      }),
      z = PR(L),
      q = Ke(V, n),
      $ = E.root || d.Root || TR,
      M = k.root || p.root || {},
      I = x({ className: K(z.root, M.className, a), disabled: g }, _);
    let D = u || "li";
    return (
      s &&
        ((I.component = u || "div"),
        (I.focusVisibleClassName = K(Ir.focusVisible, m)),
        (D = Zl)),
      F
        ? ((D = !I.component && !u ? "div" : D),
          f === "li" &&
            (D === "li"
              ? (D = "div")
              : I.component === "li" && (I.component = "div")),
          R(Zr.Provider, {
            value: A,
            children: J(
              $R,
              x(
                { as: f, className: K(z.container, b), ref: q, ownerState: L },
                P,
                {
                  children: [
                    R(
                      $,
                      x(
                        {},
                        M,
                        !uo($) && { as: D, ownerState: x({}, L, M.ownerState) },
                        I,
                        { children: W }
                      )
                    ),
                    W.pop(),
                  ],
                }
              )
            ),
          }))
        : R(Zr.Provider, {
            value: A,
            children: J(
              $,
              x(
                {},
                M,
                { as: D, ref: q },
                !uo($) && { ownerState: x({}, L, M.ownerState) },
                I,
                { children: [W, S && R(CR, { children: S })] }
              )
            ),
          })
    );
  }),
  Sy = _R;
function IR(e) {
  return X("MuiListItemIcon", e);
}
Y("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const NR = ["className"],
  OR = (e) => {
    const { alignItems: t, classes: n } = e;
    return ee(
      { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
      IR,
      n
    );
  },
  MR = B("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
    },
  })(({ theme: e, ownerState: t }) =>
    x(
      {
        minWidth: 56,
        color: (e.vars || e).palette.action.active,
        flexShrink: 0,
        display: "inline-flex",
      },
      t.alignItems === "flex-start" && { marginTop: 8 }
    )
  ),
  LR = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiListItemIcon" }),
      { className: o } = r,
      i = j(r, NR),
      s = y.useContext(Zr),
      l = x({}, r, { alignItems: s.alignItems }),
      a = OR(l);
    return R(MR, x({ className: K(a.root, o), ownerState: l, ref: n }, i));
  }),
  AR = LR,
  FR = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function Fa(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function Bp(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function wy(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join("")) === 0
  );
}
function No(e, t, n, r, o, i) {
  let s = !1,
    l = o(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const a = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !wy(l, i) || a) l = o(e, l, n);
    else return l.focus(), !0;
  }
  return !1;
}
const zR = y.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: s,
        className: l,
        disabledItemsFocusable: a = !1,
        disableListWrap: u = !1,
        onKeyDown: d,
        variant: p = "selectedMenu",
      } = t,
      f = j(t, FR),
      b = y.useRef(null),
      v = y.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    qn(() => {
      o && b.current.focus();
    }, [o]),
      y.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (m, S) => {
            const w = !b.current.style.width;
            if (m.clientHeight < b.current.clientHeight && w) {
              const k = `${Ig(dt(m))}px`;
              (b.current.style[
                S.direction === "rtl" ? "paddingLeft" : "paddingRight"
              ] = k),
                (b.current.style.width = `calc(100% + ${k})`);
            }
            return b.current;
          },
        }),
        []
      );
    const g = (m) => {
        const S = b.current,
          w = m.key,
          k = dt(S).activeElement;
        if (w === "ArrowDown") m.preventDefault(), No(S, k, u, a, Fa);
        else if (w === "ArrowUp") m.preventDefault(), No(S, k, u, a, Bp);
        else if (w === "Home") m.preventDefault(), No(S, null, u, a, Fa);
        else if (w === "End") m.preventDefault(), No(S, null, u, a, Bp);
        else if (w.length === 1) {
          const E = v.current,
            P = w.toLowerCase(),
            _ = performance.now();
          E.keys.length > 0 &&
            (_ - E.lastTime > 500
              ? ((E.keys = []), (E.repeating = !0), (E.previousKeyMatched = !0))
              : E.repeating && P !== E.keys[0] && (E.repeating = !1)),
            (E.lastTime = _),
            E.keys.push(P);
          const T = k && !E.repeating && wy(k, E);
          E.previousKeyMatched && (T || No(S, k, !1, a, Fa, E))
            ? m.preventDefault()
            : (E.previousKeyMatched = !1);
        }
        d && d(m);
      },
      C = Ke(b, n);
    let h = -1;
    y.Children.forEach(s, (m, S) => {
      y.isValidElement(m) &&
        (m.props.disabled ||
          (((p === "selectedMenu" && m.props.selected) || h === -1) &&
            (h = S)));
    });
    const c = y.Children.map(s, (m, S) => {
      if (S === h) {
        const w = {};
        return (
          i && (w.autoFocus = !0),
          m.props.tabIndex === void 0 &&
            p === "selectedMenu" &&
            (w.tabIndex = 0),
          y.cloneElement(m, w)
        );
      }
      return m;
    });
    return R(
      xd,
      x(
        {
          role: "menu",
          ref: C,
          className: l,
          onKeyDown: g,
          tabIndex: o ? 0 : -1,
        },
        f,
        { children: c }
      )
    );
  }),
  BR = zR;
function DR(e) {
  return X("MuiPopover", e);
}
Y("MuiPopover", ["root", "paper"]);
const UR = ["onEntering"],
  WR = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ];
function Dp(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function Up(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function Wp(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function za(e) {
  return typeof e == "function" ? e() : e;
}
const jR = (e) => {
    const { classes: t } = e;
    return ee({ root: ["root"], paper: ["paper"] }, DR, t);
  },
  VR = B(fy, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  HR = B(vo, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  KR = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiPopover" }),
      {
        action: o,
        anchorEl: i,
        anchorOrigin: s = { vertical: "top", horizontal: "left" },
        anchorPosition: l,
        anchorReference: a = "anchorEl",
        children: u,
        className: d,
        container: p,
        elevation: f = 8,
        marginThreshold: b = 16,
        open: v,
        PaperProps: g = {},
        transformOrigin: C = { vertical: "top", horizontal: "left" },
        TransitionComponent: h = Z2,
        transitionDuration: c = "auto",
        TransitionProps: { onEntering: m } = {},
      } = r,
      S = j(r.TransitionProps, UR),
      w = j(r, WR),
      k = y.useRef(),
      E = Ke(k, g.ref),
      P = x({}, r, {
        anchorOrigin: s,
        anchorReference: a,
        elevation: f,
        marginThreshold: b,
        PaperProps: g,
        transformOrigin: C,
        TransitionComponent: h,
        transitionDuration: c,
        TransitionProps: S,
      }),
      _ = jR(P),
      T = y.useCallback(() => {
        if (a === "anchorPosition") return l;
        const I = za(i),
          G = (
            I && I.nodeType === 1 ? I : dt(k.current).body
          ).getBoundingClientRect();
        return {
          top: G.top + Dp(G, s.vertical),
          left: G.left + Up(G, s.horizontal),
        };
      }, [i, s.horizontal, s.vertical, l, a]),
      A = y.useCallback(
        (I) => ({
          vertical: Dp(I, C.vertical),
          horizontal: Up(I, C.horizontal),
        }),
        [C.horizontal, C.vertical]
      ),
      V = y.useCallback(
        (I) => {
          const D = { width: I.offsetWidth, height: I.offsetHeight },
            G = A(D);
          if (a === "none")
            return { top: null, left: null, transformOrigin: Wp(G) };
          const ke = T();
          let Q = ke.top - G.vertical,
            fe = ke.left - G.horizontal;
          const oe = Q + D.height,
            Oe = fe + D.width,
            rt = Kn(za(i)),
            Se = rt.innerHeight - b,
            Ze = rt.innerWidth - b;
          if (Q < b) {
            const Z = Q - b;
            (Q -= Z), (G.vertical += Z);
          } else if (oe > Se) {
            const Z = oe - Se;
            (Q -= Z), (G.vertical += Z);
          }
          if (fe < b) {
            const Z = fe - b;
            (fe -= Z), (G.horizontal += Z);
          } else if (Oe > Ze) {
            const Z = Oe - Ze;
            (fe -= Z), (G.horizontal += Z);
          }
          return {
            top: `${Math.round(Q)}px`,
            left: `${Math.round(fe)}px`,
            transformOrigin: Wp(G),
          };
        },
        [i, a, T, A, b]
      ),
      [W, F] = y.useState(v),
      L = y.useCallback(() => {
        const I = k.current;
        if (!I) return;
        const D = V(I);
        D.top !== null && (I.style.top = D.top),
          D.left !== null && (I.style.left = D.left),
          (I.style.transformOrigin = D.transformOrigin),
          F(!0);
      }, [V]),
      z = (I, D) => {
        m && m(I, D), L();
      },
      q = () => {
        F(!1);
      };
    y.useEffect(() => {
      v && L();
    }),
      y.useImperativeHandle(
        o,
        () =>
          v
            ? {
                updatePosition: () => {
                  L();
                },
              }
            : null,
        [v, L]
      ),
      y.useEffect(() => {
        if (!v) return;
        const I = Qc(() => {
            L();
          }),
          D = Kn(i);
        return (
          D.addEventListener("resize", I),
          () => {
            I.clear(), D.removeEventListener("resize", I);
          }
        );
      }, [i, v, L]);
    let $ = c;
    c === "auto" && !h.muiSupportAuto && ($ = void 0);
    const M = p || (i ? dt(za(i)).body : void 0);
    return R(
      VR,
      x(
        {
          BackdropProps: { invisible: !0 },
          className: K(_.root, d),
          container: M,
          open: v,
          ref: n,
          ownerState: P,
        },
        w,
        {
          children: R(
            h,
            x(
              { appear: !0, in: v, onEntering: z, onExited: q, timeout: $ },
              S,
              {
                children: R(
                  HR,
                  x(
                    { elevation: f },
                    g,
                    { ref: E, className: K(_.paper, g.className) },
                    W ? void 0 : { style: x({}, g.style, { opacity: 0 }) },
                    { ownerState: P, children: u }
                  )
                ),
              }
            )
          ),
        }
      )
    );
  }),
  qR = KR;
function GR(e) {
  return X("MuiMenu", e);
}
Y("MuiMenu", ["root", "paper", "list"]);
const QR = ["onEntering"],
  YR = [
    "autoFocus",
    "children",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
  ],
  XR = { vertical: "top", horizontal: "right" },
  ZR = { vertical: "top", horizontal: "left" },
  JR = (e) => {
    const { classes: t } = e;
    return ee({ root: ["root"], paper: ["paper"], list: ["list"] }, GR, t);
  },
  eP = B(qR, {
    shouldForwardProp: (e) => an(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  tP = B(vo, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  nP = B(BR, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  rP = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiMenu" }),
      {
        autoFocus: o = !0,
        children: i,
        disableAutoFocusItem: s = !1,
        MenuListProps: l = {},
        onClose: a,
        open: u,
        PaperProps: d = {},
        PopoverClasses: p,
        transitionDuration: f = "auto",
        TransitionProps: { onEntering: b } = {},
        variant: v = "selectedMenu",
      } = r,
      g = j(r.TransitionProps, QR),
      C = j(r, YR),
      h = Yl(),
      c = h.direction === "rtl",
      m = x({}, r, {
        autoFocus: o,
        disableAutoFocusItem: s,
        MenuListProps: l,
        onEntering: b,
        PaperProps: d,
        transitionDuration: f,
        TransitionProps: g,
        variant: v,
      }),
      S = JR(m),
      w = o && !s && u,
      k = y.useRef(null),
      E = (T, A) => {
        k.current && k.current.adjustStyleForScrollbar(T, h), b && b(T, A);
      },
      P = (T) => {
        T.key === "Tab" && (T.preventDefault(), a && a(T, "tabKeyDown"));
      };
    let _ = -1;
    return (
      y.Children.map(i, (T, A) => {
        y.isValidElement(T) &&
          (T.props.disabled ||
            (((v === "selectedMenu" && T.props.selected) || _ === -1) &&
              (_ = A)));
      }),
      R(
        eP,
        x(
          {
            onClose: a,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: c ? "right" : "left",
            },
            transformOrigin: c ? XR : ZR,
            PaperProps: x({ component: tP }, d, {
              classes: x({}, d.classes, { root: S.paper }),
            }),
            className: S.root,
            open: u,
            ref: n,
            transitionDuration: f,
            TransitionProps: x({ onEntering: E }, g),
            ownerState: m,
          },
          C,
          {
            classes: p,
            children: R(
              nP,
              x(
                {
                  onKeyDown: P,
                  actions: k,
                  autoFocus: o && (_ === -1 || s),
                  autoFocusItem: w,
                  variant: v,
                },
                l,
                { className: K(S.list, l.className), children: i }
              )
            ),
          }
        )
      )
    );
  }),
  oP = rP;
function iP(e) {
  return X("MuiNativeSelect", e);
}
const sP = Y("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
  ]),
  Sd = sP,
  lP = ["className", "disabled", "IconComponent", "inputRef", "variant"],
  aP = (e) => {
    const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
      s = {
        select: ["select", n, r && "disabled", o && "multiple"],
        icon: ["icon", `icon${H(n)}`, i && "iconOpen", r && "disabled"],
      };
    return ee(s, iP, t);
  },
  by = ({ ownerState: e, theme: t }) =>
    x(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": x(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
              },
          { borderRadius: 0 }
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${Sd.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      }
    ),
  uP = B("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: an,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.select, t[n.variant], { [`&.${Sd.multiple}`]: t.multiple }];
    },
  })(by),
  Cy = ({ ownerState: e, theme: t }) =>
    x(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${Sd.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 }
    ),
  cP = B("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${H(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(Cy),
  dP = y.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        IconComponent: i,
        inputRef: s,
        variant: l = "standard",
      } = t,
      a = j(t, lP),
      u = x({}, t, { disabled: o, variant: l }),
      d = aP(u);
    return J(y.Fragment, {
      children: [
        R(
          uP,
          x(
            {
              ownerState: u,
              className: K(d.select, r),
              disabled: o,
              ref: s || n,
            },
            a
          )
        ),
        t.multiple ? null : R(cP, { as: i, ownerState: u, className: d.icon }),
      ],
    });
  }),
  fP = dP;
var jp;
const pP = ["children", "classes", "className", "label", "notched"],
  hP = B("fieldset")({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  mP = B("legend")(({ ownerState: e, theme: t }) =>
    x(
      { float: "unset", width: "auto", overflow: "hidden" },
      !e.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: t.transitions.create("width", {
          duration: 150,
          easing: t.transitions.easing.easeOut,
        }),
      },
      e.withLabel &&
        x(
          {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: t.transitions.create("max-width", {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
          e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          }
        )
    )
  );
function gP(e) {
  const { className: t, label: n, notched: r } = e,
    o = j(e, pP),
    i = n != null && n !== "",
    s = x({}, e, { notched: r, withLabel: i });
  return R(
    hP,
    x({ "aria-hidden": !0, className: t, ownerState: s }, o, {
      children: R(mP, {
        ownerState: s,
        children: i
          ? R("span", { children: n })
          : jp || (jp = R("span", { className: "notranslate", children: "​" })),
      }),
    })
  );
}
const yP = [
    "components",
    "fullWidth",
    "inputComponent",
    "label",
    "multiline",
    "notched",
    "slots",
    "type",
  ],
  vP = (e) => {
    const { classes: t } = e,
      r = ee(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        zk,
        t
      );
    return x({}, t, r);
  },
  xP = B(ta, {
    shouldForwardProp: (e) => an(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Jl,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return x(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Tn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${Tn.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${Tn.focused} .${Tn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${Tn.error} .${Tn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${Tn.disabled} .${Tn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        x(
          { padding: "16.5px 14px" },
          t.size === "small" && { padding: "8.5px 14px" }
        )
    );
  }),
  SP = B(gP, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    };
  }),
  wP = B(na, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: ea,
  })(({ theme: e, ownerState: t }) =>
    x(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  ky = y.forwardRef(function (t, n) {
    var r, o, i, s, l;
    const a = ne({ props: t, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: d = !1,
        inputComponent: p = "input",
        label: f,
        multiline: b = !1,
        notched: v,
        slots: g = {},
        type: C = "text",
      } = a,
      h = j(a, yP),
      c = vP(a),
      m = bn(),
      S = Xn({ props: a, muiFormControl: m, states: ["required"] }),
      w = x({}, a, {
        color: S.color || "primary",
        disabled: S.disabled,
        error: S.error,
        focused: S.focused,
        formControl: m,
        fullWidth: d,
        hiddenLabel: S.hiddenLabel,
        multiline: b,
        size: S.size,
        type: C,
      }),
      k = (r = (o = g.root) != null ? o : u.Root) != null ? r : xP,
      E = (i = (s = g.input) != null ? s : u.Input) != null ? i : wP;
    return R(
      vd,
      x(
        {
          slots: { root: k, input: E },
          renderSuffix: (P) =>
            R(SP, {
              ownerState: w,
              className: c.notchedOutline,
              label:
                f != null && f !== "" && S.required
                  ? l || (l = J(y.Fragment, { children: [f, " ", "*"] }))
                  : f,
              notched:
                typeof v < "u"
                  ? v
                  : Boolean(P.startAdornment || P.filled || P.focused),
            }),
          fullWidth: d,
          inputComponent: p,
          multiline: b,
          ref: n,
          type: C,
        },
        h,
        { classes: x({}, c, { notchedOutline: null }) }
      )
    );
  });
ky.muiName = "Input";
const Ey = ky,
  bP = _i(
    R("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "RadioButtonUnchecked"
  ),
  CP = _i(
    R("path", {
      d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z",
    }),
    "RadioButtonChecked"
  ),
  kP = B("span")({ position: "relative", display: "flex" }),
  EP = B(bP)({ transform: "scale(1)" }),
  RP = B(CP)(({ theme: e, ownerState: t }) =>
    x(
      {
        left: 0,
        position: "absolute",
        transform: "scale(0)",
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeIn,
          duration: e.transitions.duration.shortest,
        }),
      },
      t.checked && {
        transform: "scale(1)",
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeOut,
          duration: e.transitions.duration.shortest,
        }),
      }
    )
  );
function Ry(e) {
  const { checked: t = !1, classes: n = {}, fontSize: r } = e,
    o = x({}, e, { checked: t });
  return J(kP, {
    className: n.root,
    ownerState: o,
    children: [
      R(EP, { fontSize: r, className: n.background, ownerState: o }),
      R(RP, { fontSize: r, className: n.dot, ownerState: o }),
    ],
  });
}
const PP = y.createContext(void 0),
  Py = PP;
function TP() {
  return y.useContext(Py);
}
function $P(e) {
  return X("MuiRadio", e);
}
const _P = Y("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
  ]),
  Vp = _P,
  IP = [
    "checked",
    "checkedIcon",
    "color",
    "icon",
    "name",
    "onChange",
    "size",
    "className",
  ],
  NP = (e) => {
    const { classes: t, color: n } = e,
      r = { root: ["root", `color${H(n)}`] };
    return x({}, t, ee(r, $P, t));
  },
  OP = B(LE, {
    shouldForwardProp: (e) => an(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`color${H(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) =>
    x(
      { color: (e.vars || e).palette.text.secondary },
      !t.disableRipple && {
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${
                t.color === "default"
                  ? e.vars.palette.action.activeChannel
                  : e.vars.palette[t.color].mainChannel
              } / ${e.vars.palette.action.hoverOpacity})`
            : gt(
                t.color === "default"
                  ? e.palette.action.active
                  : e.palette[t.color].main,
                e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
      },
      t.color !== "default" && {
        [`&.${Vp.checked}`]: { color: (e.vars || e).palette[t.color].main },
      },
      { [`&.${Vp.disabled}`]: { color: (e.vars || e).palette.action.disabled } }
    )
  );
function MP(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Hp = R(Ry, { checked: !0 }),
  Kp = R(Ry, {}),
  LP = y.forwardRef(function (t, n) {
    var r, o;
    const i = ne({ props: t, name: "MuiRadio" }),
      {
        checked: s,
        checkedIcon: l = Hp,
        color: a = "primary",
        icon: u = Kp,
        name: d,
        onChange: p,
        size: f = "medium",
        className: b,
      } = i,
      v = j(i, IP),
      g = x({}, i, { color: a, size: f }),
      C = NP(g),
      h = TP();
    let c = s;
    const m = Ks(p, h && h.onChange);
    let S = d;
    return (
      h &&
        (typeof c > "u" && (c = MP(h.value, i.value)),
        typeof S > "u" && (S = h.name)),
      R(
        OP,
        x(
          {
            type: "radio",
            icon: y.cloneElement(u, {
              fontSize: (r = Kp.props.fontSize) != null ? r : f,
            }),
            checkedIcon: y.cloneElement(l, {
              fontSize: (o = Hp.props.fontSize) != null ? o : f,
            }),
            ownerState: g,
            classes: C,
            name: S,
            checked: c,
            onChange: m,
            ref: n,
            className: K(C.root, b),
          },
          v
        )
      )
    );
  }),
  AP = LP,
  FP = ["actions", "children", "defaultValue", "name", "onChange", "value"],
  zP = y.forwardRef(function (t, n) {
    const {
        actions: r,
        children: o,
        defaultValue: i,
        name: s,
        onChange: l,
        value: a,
      } = t,
      u = j(t, FP),
      d = y.useRef(null),
      [p, f] = yi({ controlled: a, default: i, name: "RadioGroup" });
    y.useImperativeHandle(
      r,
      () => ({
        focus: () => {
          let C = d.current.querySelector("input:not(:disabled):checked");
          C || (C = d.current.querySelector("input:not(:disabled)")),
            C && C.focus();
        },
      }),
      []
    );
    const b = Ke(n, d),
      v = Rl(s),
      g = y.useMemo(
        () => ({
          name: v,
          onChange(C) {
            f(C.target.value), l && l(C, C.target.value);
          },
          value: p,
        }),
        [v, l, f, p]
      );
    return R(Py.Provider, {
      value: g,
      children: R(M2, x({ role: "radiogroup", ref: b }, u, { children: o })),
    });
  }),
  BP = zP;
function DP(e) {
  return X("MuiSelect", e);
}
const UP = Y("MuiSelect", [
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "focused",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
  ]),
  ns = UP;
var qp;
const WP = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  jP = B("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${ns.select}`]: t.select },
        { [`&.${ns.select}`]: t[n.variant] },
        { [`&.${ns.multiple}`]: t.multiple },
      ];
    },
  })(by, {
    [`&.${ns.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  VP = B("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${H(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(Cy),
  HP = B("input", {
    shouldForwardProp: (e) => Vb(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function Gp(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function KP(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const qP = (e) => {
    const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
      s = {
        select: ["select", n, r && "disabled", o && "multiple"],
        icon: ["icon", `icon${H(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return ee(s, DP, t);
  },
  GP = y.forwardRef(function (t, n) {
    const {
        "aria-describedby": r,
        "aria-label": o,
        autoFocus: i,
        autoWidth: s,
        children: l,
        className: a,
        defaultOpen: u,
        defaultValue: d,
        disabled: p,
        displayEmpty: f,
        IconComponent: b,
        inputRef: v,
        labelId: g,
        MenuProps: C = {},
        multiple: h,
        name: c,
        onBlur: m,
        onChange: S,
        onClose: w,
        onFocus: k,
        onOpen: E,
        open: P,
        readOnly: _,
        renderValue: T,
        SelectDisplayProps: A = {},
        tabIndex: V,
        value: W,
        variant: F = "standard",
      } = t,
      L = j(t, WP),
      [z, q] = yi({ controlled: W, default: d, name: "Select" }),
      [$, M] = yi({ controlled: P, default: u, name: "Select" }),
      I = y.useRef(null),
      D = y.useRef(null),
      [G, ke] = y.useState(null),
      { current: Q } = y.useRef(P != null),
      [fe, oe] = y.useState(),
      Oe = Ke(n, v),
      rt = y.useCallback((N) => {
        (D.current = N), N && ke(N);
      }, []),
      Se = G == null ? void 0 : G.parentNode;
    y.useImperativeHandle(
      Oe,
      () => ({
        focus: () => {
          D.current.focus();
        },
        node: I.current,
        value: z,
      }),
      [z]
    ),
      y.useEffect(() => {
        u && $ && G && !Q && (oe(s ? null : Se.clientWidth), D.current.focus());
      }, [G, s]),
      y.useEffect(() => {
        i && D.current.focus();
      }, [i]),
      y.useEffect(() => {
        if (!g) return;
        const N = dt(D.current).getElementById(g);
        if (N) {
          const ye = () => {
            getSelection().isCollapsed && D.current.focus();
          };
          return (
            N.addEventListener("click", ye),
            () => {
              N.removeEventListener("click", ye);
            }
          );
        }
      }, [g]);
    const Ze = (N, ye) => {
        N ? E && E(ye) : w && w(ye), Q || (oe(s ? null : Se.clientWidth), M(N));
      },
      Z = (N) => {
        N.button === 0 && (N.preventDefault(), D.current.focus(), Ze(!0, N));
      },
      Ae = (N) => {
        Ze(!1, N);
      },
      ot = y.Children.toArray(l),
      jt = (N) => {
        const ye = ot.map((it) => it.props.value).indexOf(N.target.value);
        if (ye === -1) return;
        const ze = ot[ye];
        q(ze.props.value), S && S(N, ze);
      },
      Mt = (N) => (ye) => {
        let ze;
        if (ye.currentTarget.hasAttribute("tabindex")) {
          if (h) {
            ze = Array.isArray(z) ? z.slice() : [];
            const it = z.indexOf(N.props.value);
            it === -1 ? ze.push(N.props.value) : ze.splice(it, 1);
          } else ze = N.props.value;
          if (
            (N.props.onClick && N.props.onClick(ye), z !== ze && (q(ze), S))
          ) {
            const it = ye.nativeEvent || ye,
              wr = new it.constructor(it.type, it);
            Object.defineProperty(wr, "target", {
              writable: !0,
              value: { value: ze, name: c },
            }),
              S(wr, N);
          }
          h || Ze(!1, ye);
        }
      },
      un = (N) => {
        _ ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(N.key) !== -1 &&
            (N.preventDefault(), Ze(!0, N)));
      },
      Vt = G !== null && $,
      $e = (N) => {
        !Vt &&
          m &&
          (Object.defineProperty(N, "target", {
            writable: !0,
            value: { value: z, name: c },
          }),
          m(N));
      };
    delete L["aria-invalid"];
    let Ht, Kt;
    const Fe = [];
    let Cn = !1;
    (yd({ value: z }) || f) && (T ? (Ht = T(z)) : (Cn = !0));
    const kn = ot.map((N, ye, ze) => {
      var it, wr, kd, Ed;
      if (!y.isValidElement(N)) return null;
      let Rn;
      if (h) {
        if (!Array.isArray(z)) throw new Error(Hn(2));
        (Rn = z.some((Zn) => Gp(Zn, N.props.value))),
          Rn && Cn && Fe.push(N.props.children);
      } else (Rn = Gp(z, N.props.value)), Rn && Cn && (Kt = N.props.children);
      if (N.props.value === void 0)
        return y.cloneElement(N, { "aria-readonly": !0, role: "option" });
      const Oy = () => {
        if (z) return Rn;
        const Zn = ze.find((ra) => {
          var Rd;
          return (
            (ra == null || (Rd = ra.props) == null ? void 0 : Rd.value) !==
              void 0 && ra.props.disabled !== !0
          );
        });
        return N === Zn ? !0 : Rn;
      };
      return y.cloneElement(N, {
        "aria-selected": Rn ? "true" : "false",
        onClick: Mt(N),
        onKeyUp: (Zn) => {
          Zn.key === " " && Zn.preventDefault(),
            N.props.onKeyUp && N.props.onKeyUp(Zn);
        },
        role: "option",
        selected:
          ((it = ze[0]) == null || (wr = it.props) == null
            ? void 0
            : wr.value) === void 0 ||
          ((kd = ze[0]) == null || (Ed = kd.props) == null
            ? void 0
            : Ed.disabled) === !0
            ? Oy()
            : Rn,
        value: void 0,
        "data-value": N.props.value,
      });
    });
    Cn &&
      (h
        ? Fe.length === 0
          ? (Ht = null)
          : (Ht = Fe.reduce(
              (N, ye, ze) => (
                N.push(ye), ze < Fe.length - 1 && N.push(", "), N
              ),
              []
            ))
        : (Ht = Kt));
    let qt = fe;
    !s && Q && G && (qt = Se.clientWidth);
    let Ct;
    typeof V < "u" ? (Ct = V) : (Ct = p ? null : 0);
    const En = A.id || (c ? `mui-component-select-${c}` : void 0),
      Gt = x({}, t, { variant: F, value: z, open: Vt }),
      pe = qP(Gt);
    return J(y.Fragment, {
      children: [
        R(
          jP,
          x(
            {
              ref: rt,
              tabIndex: Ct,
              role: "button",
              "aria-disabled": p ? "true" : void 0,
              "aria-expanded": Vt ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": o,
              "aria-labelledby": [g, En].filter(Boolean).join(" ") || void 0,
              "aria-describedby": r,
              onKeyDown: un,
              onMouseDown: p || _ ? null : Z,
              onBlur: $e,
              onFocus: k,
            },
            A,
            {
              ownerState: Gt,
              className: K(A.className, pe.select, a),
              id: En,
              children: KP(Ht)
                ? qp ||
                  (qp = R("span", { className: "notranslate", children: "​" }))
                : Ht,
            }
          )
        ),
        R(
          HP,
          x(
            {
              value: Array.isArray(z) ? z.join(",") : z,
              name: c,
              ref: I,
              "aria-hidden": !0,
              onChange: jt,
              tabIndex: -1,
              disabled: p,
              className: pe.nativeInput,
              autoFocus: i,
              ownerState: Gt,
            },
            L
          )
        ),
        R(VP, { as: b, className: pe.icon, ownerState: Gt }),
        R(
          oP,
          x(
            {
              id: `menu-${c || ""}`,
              anchorEl: Se,
              open: Vt,
              onClose: Ae,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            C,
            {
              MenuListProps: x(
                { "aria-labelledby": g, role: "listbox", disableListWrap: !0 },
                C.MenuListProps
              ),
              PaperProps: x({}, C.PaperProps, {
                style: x(
                  { minWidth: qt },
                  C.PaperProps != null ? C.PaperProps.style : null
                ),
              }),
              children: kn,
            }
          )
        ),
      ],
    });
  }),
  QP = GP;
var Qp, Yp;
const YP = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  XP = (e) => {
    const { classes: t } = e;
    return t;
  },
  wd = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => an(e) && e !== "variant",
    slot: "Root",
  },
  ZP = B(vy, wd)(""),
  JP = B(Ey, wd)(""),
  eT = B(my, wd)(""),
  Ty = y.forwardRef(function (t, n) {
    const r = ne({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: l,
        defaultOpen: a = !1,
        displayEmpty: u = !1,
        IconComponent: d = Wk,
        id: p,
        input: f,
        inputProps: b,
        label: v,
        labelId: g,
        MenuProps: C,
        multiple: h = !1,
        native: c = !1,
        onClose: m,
        onOpen: S,
        open: w,
        renderValue: k,
        SelectDisplayProps: E,
        variant: P = "outlined",
      } = r,
      _ = j(r, YP),
      T = c ? fP : QP,
      A = bn(),
      W = Xn({ props: r, muiFormControl: A, states: ["variant"] }).variant || P,
      F =
        f ||
        {
          standard: Qp || (Qp = R(ZP, {})),
          outlined: R(JP, { label: v }),
          filled: Yp || (Yp = R(eT, {})),
        }[W],
      L = x({}, r, { variant: W, classes: s }),
      z = XP(L),
      q = Ke(n, F.ref);
    return R(y.Fragment, {
      children: y.cloneElement(
        F,
        x(
          {
            inputComponent: T,
            inputProps: x(
              {
                children: i,
                IconComponent: d,
                variant: W,
                type: void 0,
                multiple: h,
              },
              c
                ? { id: p }
                : {
                    autoWidth: o,
                    defaultOpen: a,
                    displayEmpty: u,
                    labelId: g,
                    MenuProps: C,
                    onClose: m,
                    onOpen: S,
                    open: w,
                    renderValue: k,
                    SelectDisplayProps: x({ id: p }, E),
                  },
              b,
              { classes: b ? _t(z, b.classes) : z },
              f ? f.props.inputProps : {}
            ),
          },
          h && c && W === "outlined" ? { notched: !0 } : {},
          { ref: q, className: K(F.props.className, l) },
          !f && { variant: W },
          _
        )
      ),
    });
  });
Ty.muiName = "Select";
const tT = Ty;
function nT(e) {
  return X("MuiToolbar", e);
}
Y("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const rT = ["className", "component", "disableGutters", "variant"],
  oT = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return ee({ root: ["root", !n && "gutters", r] }, nT, t);
  },
  iT = B("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      x(
        { position: "relative", display: "flex", alignItems: "center" },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3),
          },
        },
        t.variant === "dense" && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === "regular" && e.mixins.toolbar
  ),
  sT = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: s = !1,
        variant: l = "regular",
      } = r,
      a = j(r, rT),
      u = x({}, r, { component: i, disableGutters: s, variant: l }),
      d = oT(u);
    return R(
      iT,
      x({ as: i, className: K(d.root, o), ref: n, ownerState: u }, a)
    );
  }),
  lT = sT;
function aT(e) {
  return X("MuiTextField", e);
}
Y("MuiTextField", ["root"]);
const uT = [
    "autoComplete",
    "autoFocus",
    "children",
    "className",
    "color",
    "defaultValue",
    "disabled",
    "error",
    "FormHelperTextProps",
    "fullWidth",
    "helperText",
    "id",
    "InputLabelProps",
    "inputProps",
    "InputProps",
    "inputRef",
    "label",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "select",
    "SelectProps",
    "type",
    "value",
    "variant",
  ],
  cT = { standard: vy, filled: my, outlined: Ey },
  dT = (e) => {
    const { classes: t } = e;
    return ee({ root: ["root"] }, aT, t);
  },
  fT = B(w2, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  pT = y.forwardRef(function (t, n) {
    const r = ne({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: l,
        color: a = "primary",
        defaultValue: u,
        disabled: d = !1,
        error: p = !1,
        FormHelperTextProps: f,
        fullWidth: b = !1,
        helperText: v,
        id: g,
        InputLabelProps: C,
        inputProps: h,
        InputProps: c,
        inputRef: m,
        label: S,
        maxRows: w,
        minRows: k,
        multiline: E = !1,
        name: P,
        onBlur: _,
        onChange: T,
        onFocus: A,
        placeholder: V,
        required: W = !1,
        rows: F,
        select: L = !1,
        SelectProps: z,
        type: q,
        value: $,
        variant: M = "outlined",
      } = r,
      I = j(r, uT),
      D = x({}, r, {
        autoFocus: i,
        color: a,
        disabled: d,
        error: p,
        fullWidth: b,
        multiline: E,
        required: W,
        select: L,
        variant: M,
      }),
      G = dT(D),
      ke = {};
    M === "outlined" &&
      (C && typeof C.shrink < "u" && (ke.notched = C.shrink), (ke.label = S)),
      L &&
        ((!z || !z.native) && (ke.id = void 0),
        (ke["aria-describedby"] = void 0));
    const Q = Rl(g),
      fe = v && Q ? `${Q}-helper-text` : void 0,
      oe = S && Q ? `${Q}-label` : void 0,
      Oe = cT[M],
      rt = R(
        Oe,
        x(
          {
            "aria-describedby": fe,
            autoComplete: o,
            autoFocus: i,
            defaultValue: u,
            fullWidth: b,
            multiline: E,
            name: P,
            rows: F,
            maxRows: w,
            minRows: k,
            type: q,
            value: $,
            id: Q,
            inputRef: m,
            onBlur: _,
            onChange: T,
            onFocus: A,
            placeholder: V,
            inputProps: h,
          },
          ke,
          c
        )
      );
    return J(
      fT,
      x(
        {
          className: K(G.root, l),
          disabled: d,
          error: p,
          fullWidth: b,
          ref: n,
          required: W,
          color: a,
          variant: M,
          ownerState: D,
        },
        I,
        {
          children: [
            S != null &&
              S !== "" &&
              R(aR, x({ htmlFor: Q, id: oe }, C, { children: S })),
            L
              ? R(
                  tT,
                  x(
                    {
                      "aria-describedby": fe,
                      id: Q,
                      labelId: oe,
                      value: $,
                      input: rt,
                    },
                    z,
                    { children: s }
                  )
                )
              : rt,
            v && R(U2, x({ id: fe }, f, { children: v })),
          ],
        }
      )
    );
  }),
  Ba = pT,
  hT = ry({
    typography: { useNextVariants: !0 },
    palette: {
      palette: {
        common: { black: "#fff", white: "#fff" },
        background: { paper: "#fff", default: "#fafafa" },
        primary: { light: "#7986cb", main: "rgba(139, 157, 255, 1)" },
        secondary: { light: "#ff4081", main: "rgba(192, 83, 123, 1)" },
        error: { light: "#e57373", main: "rgba(255, 18, 3, 1)" },
        text: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "rgba(0, 0, 0, 0.54)",
          disabled: "rgba(0, 0, 0, 0.38)",
          hint: "rgba(0, 0, 0, 0.38)",
        },
      },
    },
  });
var bd = {},
  Zs = {},
  mT = {
    get exports() {
      return Zs;
    },
    set exports(e) {
      Zs = e;
    },
  };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(mT);
var Da = {};
const gT = Jp($C);
var Xp;
function $y() {
  return (
    Xp ||
      ((Xp = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = gT;
      })(Da)),
    Da
  );
}
const _y = Jp(i0);
var yT = Zs;
Object.defineProperty(bd, "__esModule", { value: !0 });
var Iy = (bd.default = void 0),
  vT = yT($y()),
  xT = _y,
  ST = (0, vT.default)(
    (0, xT.jsx)("path", {
      d: "M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z",
    }),
    "Accessibility"
  );
Iy = bd.default = ST;
const wT = (e) => {
    const t = () => e.viewDialog();
    return (
      console.log(e.showjoinfields),
      R(Rk, {
        children: J(lT, {
          color: "primary",
          children: [
            R(co, {
              variant: "h6",
              color: "inherit",
              children: "Chat it Up! - React Application",
            }),
            e.showjoinfields === !1 &&
              R("section", {
                style: { height: 90, width: 90, marginLeft: "auto" },
                children: R(ay, {
                  onClick: t,
                  children: R(Iy, {
                    style: { color: "white", height: 70, width: 70 },
                  }),
                }),
              }),
          ],
        }),
      })
    );
  },
  bT = "/assets/Chat-2d1df389.png";
var Cd = {},
  CT = Zs;
Object.defineProperty(Cd, "__esModule", { value: !0 });
var Ny = (Cd.default = void 0),
  kT = CT($y()),
  ET = _y,
  RT = (0, kT.default)(
    (0, ET.jsx)("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    }),
    "Person"
  );
Ny = Cd.default = RT;
const PT = (e) =>
    R("div", {
      style: {
        content: "",
        position: "absolute",
        bottom: "-2vh",
        left: e.isOwnMessage ? "calc(100% - 30px)" : 10,
        borderWidth: e.isOwnMessage ? "15px 15px 0" : "15px 15px 0 ",
        borderStyle: "solid",
        borderColor: `${e.color} transparent`,
      },
    }),
  TT = (e) => {
    const t = y.useRef(null);
    y.useEffect(() => {
      t.current.scrollIntoView();
    }, []),
      e.isOwnMessage;
    const n = e.isOwnMessage ? "auto 0 0 auto" : "0 auto auto 0";
    return J(Sy, {
      ref: t,
      children: [
        J("div", {
          className: `userBubble ${e.isOwnMessage ? "ownMessage" : ""}`,
          style: { backgroundColor: e.message.color },
          children: [
            J("div", {
              className: "timestamp",
              style: { fontSize: "12px" },
              children: [
                J("span", { children: [e.message.from, " says"] }),
                J("span", {
                  style: { marginLeft: "60px" },
                  children: ["room:", e.roomName],
                }),
                R("br", {}),
                J("span", {
                  style: { marginLeft: "100px" },
                  children: ["@", e.message.timestamp],
                }),
              ],
            }),
            R("br", {}),
            J("div", {
              style: { fontWeight: "bolder" },
              children: [
                e.message.chatName,
                " ",
                e.message.roomName,
                e.message.text,
              ],
            }),
          ],
        }),
        R(PT, {
          isOwnMessage: e.isOwnMessage,
          color: e.message.color,
          align: n,
        }),
      ],
    });
  },
  $T = (e) => {
    const t = y.useRef(null);
    return (
      y.useEffect(() => {
        t.current.scrollIntoView(!0);
      }, []),
      R("div", {
        ref: t,
        children: R(TT, {
          message: e.message,
          isOwnMessage: e.isOwnMessage,
          roomName: e.roomName,
        }),
      })
    );
  },
  _T = (e) => {
    let t = e.messages.map((n, r) => {
      const o = n.from === e.chatName;
      return R($T, { message: n, isOwnMessage: o, roomName: e.roomName }, r);
    });
    return R(xd, { children: t });
  },
  IT = () => {
    const e = {
        chatName: "",
        roomName: "",
        status: "",
        messages: [],
        showjoinfields: !0,
        isTyping: !1,
        typingMsg: "",
        message: "",
        users: [],
        rooms: [],
      },
      t = (w, k) => ({ ...w, ...k }),
      [n, r] = y.useReducer(t, e);
    y.useEffect(() => {
      o();
    }, []);
    const o = () => {
        const w = ys.connect();
        r({ socket: w }),
          w.on("nameexists", d),
          w.on("welcome", u),
          w.on("someonejoined", u),
          w.on("someoneleft", u),
          w.on("someoneistyping", i),
          w.on("newmessage", l),
          w.on("radio", (k) => {
            let E = [...k];
            r({ rooms: E }), console.log(E);
          }),
          w.on("roomsAndUsers", s);
      },
      i = (w) => {
        w.from !== n.chatName && r({ typingMsg: w.text });
      },
      s = (w) => {
        const { rooms: k, users: E } = w;
        r({ rooms: k, users: E });
      },
      l = (w) => {
        u(w), r({ typingMsg: "" });
      },
      a = () => {
        n.socket.emit("join", { chatName: n.chatName, roomName: n.roomName });
      },
      u = (w) => {
        let k = n.messages;
        k.push(w),
          r({ messages: k, showjoinfields: !1, isTyping: !1, typingMsg: "" });
      },
      d = (w) => {
        r({ status: w });
      },
      p = (w) => {
        r({ chatName: w.target.value, status: "" });
      },
      f = (w) => {
        r({ roomName: w.target.value, status: "" });
      },
      b = (w) => {
        r({ message: w.target.value }),
          n.isTyping === !1 &&
            (n.socket.emit("typing", { from: n.chatName }, (k) => {}),
            r({ isTyping: !0 }));
      },
      v = (w) => {
        n.message !== "" &&
          (n.socket.emit(
            "message",
            { from: n.chatName, text: n.message },
            (k) => {}
          ),
          r({ isTyping: !1, message: "" }));
      },
      [g, C] = y.useState(!1),
      h = () => C(!0),
      c = () => C(!1);
    n.chatName === void 0 ||
      n.chatName === "" ||
      n.roomName === void 0 ||
      n.roomName;
    const m = (w) => {
        r({ roomName: w.target.value });
      },
      S = () => [...new Set(n.rooms)];
    return J(ab, {
      theme: hT,
      children: [
        R(wT, { showjoinfields: n.showjoinfields, viewDialog: h }),
        J(XE, {
          open: g,
          onClose: c,
          style: { margin: 20 },
          children: [
            R(d2, {
              style: { textAlign: "center", color: "green" },
              children: "Who's On?",
            }),
            R(s2, {
              children: R(xd, {
                children: n.users
                  .filter((w) => w.chatName !== "Admin")
                  .map((w, k) =>
                    J(
                      Sy,
                      {
                        children: [
                          R(AR, {
                            children: R(ay, {
                              edge: "start",
                              color: "inherit",
                              "aria-label": "user",
                              children: R(Ny, { style: { color: w.color } }),
                            }),
                          }),
                          J(co, {
                            children: [w.chatName, " in room ", w.roomName],
                          }),
                        ],
                      },
                      k
                    )
                  ),
              }),
            }),
          ],
        }),
        J(CE, {
          className: "card",
          children: [
            R(Ap, {
              sx: { display: "flex", justifyContent: "center" },
              children: R(Zk, {
                src: bT,
                alt: "logo",
                sx: { width: 100, height: 100 },
              }),
            }),
            J(Ap, {
              children: [
                n.showjoinfields
                  ? J("div", {
                      children: [
                        R(Ba, {
                          onChange: p,
                          placeholder: "Enter unique name",
                          autoFocus: !0,
                          required: !0,
                          value: n.chatName,
                          error: n.status !== "",
                          helperText:
                            n.chatName === ""
                              ? "Enter the Chat Name"
                              : n.status,
                          sx: { "& .MuiFormHelperText-root": { color: "red" } },
                        }),
                        R("br", {}),
                        R("br", {}),
                        R("p", {
                          children: "Join Existing or Enter Room Name",
                        }),
                        R(BP, {
                          value: n.roomName,
                          onChange: m,
                          children: S().map((w) =>
                            R(T2, { value: w, control: R(AP, {}), label: w }, w)
                          ),
                        }),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R(Ba, {
                          onChange: f,
                          placeholder: "Enter room name",
                          autoFocus: !0,
                          required: !0,
                          value: n.roomName,
                          helperText:
                            n.roomName === "" ? "Enter the room name" : null,
                          sx: { "& .MuiFormHelperText-root": { color: "red" } },
                        }),
                        R("br", {}),
                        R("br", {}),
                        R(yE, {
                          variant: "contained",
                          "data-testid": "submit",
                          color: "primary",
                          onClick: () => a(),
                          disabled: n.chatName === "" || n.roomName === "",
                          children: "Join",
                        }),
                      ],
                    })
                  : null,
                n.showjoinfields
                  ? null
                  : J("div", {
                      children: [
                        R(_T, {
                          messages: n.messages,
                          chatName: n.chatName,
                          roomName: n.roomName,
                        }),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("br", {}),
                        R("div", {
                          className: "TextFields",
                          children: R(Ba, {
                            onChange: b,
                            placeholder: "type something here",
                            autoFocus: !0,
                            style: { width: "290px" },
                            value: n.message,
                            onKeyPress: (w) => {
                              w.key === "Enter" && (v(), w.target.blur());
                            },
                          }),
                        }),
                        R("div", {
                          children: R(co, {
                            color: "red",
                            children: n.typingMsg,
                          }),
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function NT() {
  return R("div", { children: R(IT, {}) });
}
Wa.createRoot(document.getElementById("root")).render(
  R(E0, { children: R(NT, {}) })
);
