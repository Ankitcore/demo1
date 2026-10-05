(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 67881, e => {
    "use strict";
    let t, r;
    var s = e.i(43476),
        n = e.i(71645);

    function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    var o = n.forwardRef((e, t) => {
        let {
            children: r,
            ...a
        } = e, o = n.Children.toArray(r), l = o.find(d);
        if (l) {
            let e = l.props.children,
                r = o.map(t => t !== l ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
            return (0, s.jsx)(i, { ...a,
                ref: t,
                children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
            })
        }
        return (0, s.jsx)(i, { ...a,
            ref: t,
            children: r
        })
    });
    o.displayName = "Slot";
    var i = n.forwardRef((e, t) => {
        let {
            children: r,
            ...s
        } = e;
        if (n.isValidElement(r)) {
            var o;
            let e, i, l = (o = r, (i = (e = Object.getOwnPropertyDescriptor(o.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? o.ref : (i = (e = Object.getOwnPropertyDescriptor(o, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? o.props.ref : o.props.ref || o.ref);
            return n.cloneElement(r, { ... function(e, t) {
                    let r = { ...t
                    };
                    for (let s in t) {
                        let n = e[s],
                            a = t[s];
                        /^on[A-Z]/.test(s) ? n && a ? r[s] = (...e) => {
                            a(...e), n(...e)
                        } : n && (r[s] = n) : "style" === s ? r[s] = { ...n,
                            ...a
                        } : "className" === s && (r[s] = [n, a].filter(Boolean).join(" "))
                    }
                    return { ...e,
                        ...r
                    }
                }(s, r.props),
                ref: t ? function(...e) {
                    return t => {
                        let r = !1,
                            s = e.map(e => {
                                let s = a(e, t);
                                return r || "function" != typeof s || (r = !0), s
                            });
                        if (r) return () => {
                            for (let t = 0; t < s.length; t++) {
                                let r = s[t];
                                "function" == typeof r ? r() : a(e[t], null)
                            }
                        }
                    }
                }(t, l) : l
            })
        }
        return n.Children.count(r) > 1 ? n.Children.only(null) : null
    });
    i.displayName = "SlotClone";
    var l = ({
        children: e
    }) => (0, s.jsx)(s.Fragment, {
        children: e
    });

    function d(e) {
        return n.isValidElement(e) && e.type === l
    }

    function c() {
        for (var e, t, r = 0, s = "", n = arguments.length; r < n; r++)(e = arguments[r]) && (t = function e(t) {
            var r, s, n = "";
            if ("string" == typeof t || "number" == typeof t) n += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var a = t.length;
                    for (r = 0; r < a; r++) t[r] && (s = e(t[r])) && (n && (n += " "), n += s)
                } else
                    for (s in t) t[s] && (n && (n += " "), n += s);
            return n
        }(e)) && (s && (s += " "), s += t);
        return s
    }
    let u = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        m = (e, t) => {
            if (0 === e.length) return t.classGroupId;
            let r = e[0],
                s = t.nextPart.get(r),
                n = s ? m(e.slice(1), s) : void 0;
            if (n) return n;
            if (0 === t.validators.length) return;
            let a = e.join("-");
            return t.validators.find(({
                validator: e
            }) => e(a)) ? .classGroupId
        },
        p = /^\[(.+)\]$/,
        x = (e, t, r, s) => {
            e.forEach(e => {
                if ("string" == typeof e) {
                    ("" === e ? t : h(t, e)).classGroupId = r;
                    return
                }
                "function" == typeof e ? f(e) ? x(e(s), t, r, s) : t.validators.push({
                    validator: e,
                    classGroupId: r
                }) : Object.entries(e).forEach(([e, n]) => {
                    x(n, h(t, e), r, s)
                })
            })
        },
        h = (e, t) => {
            let r = e;
            return t.split("-").forEach(e => {
                r.nextPart.has(e) || r.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }), r = r.nextPart.get(e)
            }), r
        },
        f = e => e.isThemeGetter,
        g = (e, t) => t ? e.map(([e, r]) => [e, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, r]) => [t + e, r])) : e)]) : e,
        b = e => {
            if (e.length <= 1) return e;
            let t = [],
                r = [];
            return e.forEach(e => {
                "[" === e[0] ? (t.push(...r.sort(), e), r = []) : r.push(e)
            }), t.push(...r.sort()), t
        },
        y = /\s+/;

    function v() {
        let e, t, r = 0,
            s = "";
        for (; r < arguments.length;)(e = arguments[r++]) && (t = j(e)) && (s && (s += " "), s += t);
        return s
    }
    let j = e => {
            let t;
            if ("string" == typeof e) return e;
            let r = "";
            for (let s = 0; s < e.length; s++) e[s] && (t = j(e[s])) && (r && (r += " "), r += t);
            return r
        },
        w = e => {
            let t = t => t[e] || [];
            return t.isThemeGetter = !0, t
        },
        N = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        k = /^\d+\/\d+$/,
        S = new Set(["px", "full", "screen"]),
        C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        z = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        _ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        R = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        $ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        I = e => A(e) || S.has(e) || k.test(e),
        M = e => V(e, "length", U),
        A = e => !!e && !Number.isNaN(Number(e)),
        E = e => V(e, "number", A),
        F = e => !!e && Number.isInteger(Number(e)),
        P = e => e.endsWith("%") && A(e.slice(0, -1)),
        O = e => N.test(e),
        T = e => C.test(e),
        L = new Set(["length", "size", "percentage"]),
        B = e => V(e, L, K),
        D = e => V(e, "position", K),
        W = new Set(["image", "url"]),
        q = e => V(e, W, Z),
        G = e => V(e, "", Q),
        H = () => !0,
        V = (e, t, r) => {
            let s = N.exec(e);
            return !!s && (s[1] ? "string" == typeof t ? s[1] === t : t.has(s[1]) : r(s[2]))
        },
        U = e => z.test(e) && !_.test(e),
        K = () => !1,
        Q = e => R.test(e),
        Z = e => $.test(e),
        Y = function(e, ...t) {
            let r, s, n, a = function(i) {
                let l;
                return s = (r = {
                    cache: (e => {
                        if (e < 1) return {
                            get: () => void 0,
                            set: () => {}
                        };
                        let t = 0,
                            r = new Map,
                            s = new Map,
                            n = (n, a) => {
                                r.set(n, a), ++t > e && (t = 0, s = r, r = new Map)
                            };
                        return {
                            get(e) {
                                let t = r.get(e);
                                return void 0 !== t ? t : void 0 !== (t = s.get(e)) ? (n(e, t), t) : void 0
                            },
                            set(e, t) {
                                r.has(e) ? r.set(e, t) : n(e, t)
                            }
                        }
                    })((l = t.reduce((e, t) => t(e), e())).cacheSize),
                    parseClassName: (e => {
                        let {
                            separator: t,
                            experimentalParseClassName: r
                        } = e, s = 1 === t.length, n = t[0], a = t.length, o = e => {
                            let r, o = [],
                                i = 0,
                                l = 0;
                            for (let d = 0; d < e.length; d++) {
                                let c = e[d];
                                if (0 === i) {
                                    if (c === n && (s || e.slice(d, d + a) === t)) {
                                        o.push(e.slice(l, d)), l = d + a;
                                        continue
                                    }
                                    if ("/" === c) {
                                        r = d;
                                        continue
                                    }
                                }
                                "[" === c ? i++ : "]" === c && i--
                            }
                            let d = 0 === o.length ? e : e.substring(l),
                                c = d.startsWith("!"),
                                u = c ? d.substring(1) : d;
                            return {
                                modifiers: o,
                                hasImportantModifier: c,
                                baseClassName: u,
                                maybePostfixModifierPosition: r && r > l ? r - l : void 0
                            }
                        };
                        return r ? e => r({
                            className: e,
                            parseClassName: o
                        }) : o
                    })(l),
                    ...(e => {
                        let t = (e => {
                                let {
                                    theme: t,
                                    prefix: r
                                } = e, s = {
                                    nextPart: new Map,
                                    validators: []
                                };
                                return g(Object.entries(e.classGroups), r).forEach(([e, r]) => {
                                    x(r, s, e, t)
                                }), s
                            })(e),
                            {
                                conflictingClassGroups: r,
                                conflictingClassGroupModifiers: s
                            } = e;
                        return {
                            getClassGroupId: e => {
                                let r = e.split("-");
                                return "" === r[0] && 1 !== r.length && r.shift(), m(r, t) || (e => {
                                    if (p.test(e)) {
                                        let t = p.exec(e)[1],
                                            r = t ? .substring(0, t.indexOf(":"));
                                        if (r) return "arbitrary.." + r
                                    }
                                })(e)
                            },
                            getConflictingClassGroupIds: (e, t) => {
                                let n = r[e] || [];
                                return t && s[e] ? [...n, ...s[e]] : n
                            }
                        }
                    })(l)
                }).cache.get, n = r.cache.set, a = o, o(i)
            };

            function o(e) {
                let t = s(e);
                if (t) return t;
                let a = ((e, t) => {
                    let {
                        parseClassName: r,
                        getClassGroupId: s,
                        getConflictingClassGroupIds: n
                    } = t, a = [], o = e.trim().split(y), i = "";
                    for (let e = o.length - 1; e >= 0; e -= 1) {
                        let t = o[e],
                            {
                                modifiers: l,
                                hasImportantModifier: d,
                                baseClassName: c,
                                maybePostfixModifierPosition: u
                            } = r(t),
                            m = !!u,
                            p = s(m ? c.substring(0, u) : c);
                        if (!p) {
                            if (!m || !(p = s(c))) {
                                i = t + (i.length > 0 ? " " + i : i);
                                continue
                            }
                            m = !1
                        }
                        let x = b(l).join(":"),
                            h = d ? x + "!" : x,
                            f = h + p;
                        if (a.includes(f)) continue;
                        a.push(f);
                        let g = n(p, m);
                        for (let e = 0; e < g.length; ++e) {
                            let t = g[e];
                            a.push(h + t)
                        }
                        i = t + (i.length > 0 ? " " + i : i)
                    }
                    return i
                })(e, r);
                return n(e, a), a
            }
            return function() {
                return a(v.apply(null, arguments))
            }
        }(() => {
            let e = w("colors"),
                t = w("spacing"),
                r = w("blur"),
                s = w("brightness"),
                n = w("borderColor"),
                a = w("borderRadius"),
                o = w("borderSpacing"),
                i = w("borderWidth"),
                l = w("contrast"),
                d = w("grayscale"),
                c = w("hueRotate"),
                u = w("invert"),
                m = w("gap"),
                p = w("gradientColorStops"),
                x = w("gradientColorStopPositions"),
                h = w("inset"),
                f = w("margin"),
                g = w("opacity"),
                b = w("padding"),
                y = w("saturate"),
                v = w("scale"),
                j = w("sepia"),
                N = w("skew"),
                k = w("space"),
                S = w("translate"),
                C = () => ["auto", "contain", "none"],
                z = () => ["auto", "hidden", "clip", "visible", "scroll"],
                _ = () => ["auto", O, t],
                R = () => [O, t],
                $ = () => ["", I, M],
                L = () => ["auto", A, O],
                W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                V = () => ["solid", "dashed", "dotted", "double", "none"],
                U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                Q = () => ["", "0", O],
                Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                Y = () => [A, O];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [H],
                    spacing: [I, M],
                    blur: ["none", "", T, O],
                    brightness: Y(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", T, O],
                    borderSpacing: R(),
                    borderWidth: $(),
                    contrast: Y(),
                    grayscale: Q(),
                    hueRotate: Y(),
                    invert: Q(),
                    gap: R(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [P, M],
                    inset: _(),
                    margin: _(),
                    opacity: Y(),
                    padding: R(),
                    saturate: Y(),
                    scale: Y(),
                    sepia: Q(),
                    skew: Y(),
                    space: R(),
                    translate: R()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", O]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [T]
                    }],
                    "break-after": [{
                        "break-after": Z()
                    }],
                    "break-before": [{
                        "break-before": Z()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...W(), O]
                    }],
                    overflow: [{
                        overflow: z()
                    }],
                    "overflow-x": [{
                        "overflow-x": z()
                    }],
                    "overflow-y": [{
                        "overflow-y": z()
                    }],
                    overscroll: [{
                        overscroll: C()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": C()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": C()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [h]
                    }],
                    "inset-x": [{
                        "inset-x": [h]
                    }],
                    "inset-y": [{
                        "inset-y": [h]
                    }],
                    start: [{
                        start: [h]
                    }],
                    end: [{
                        end: [h]
                    }],
                    top: [{
                        top: [h]
                    }],
                    right: [{
                        right: [h]
                    }],
                    bottom: [{
                        bottom: [h]
                    }],
                    left: [{
                        left: [h]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", F, O]
                    }],
                    basis: [{
                        basis: _()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", O]
                    }],
                    grow: [{
                        grow: Q()
                    }],
                    shrink: [{
                        shrink: Q()
                    }],
                    order: [{
                        order: ["first", "last", "none", F, O]
                    }],
                    "grid-cols": [{
                        "grid-cols": [H]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", F, O]
                        }, O]
                    }],
                    "col-start": [{
                        "col-start": L()
                    }],
                    "col-end": [{
                        "col-end": L()
                    }],
                    "grid-rows": [{
                        "grid-rows": [H]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [F, O]
                        }, O]
                    }],
                    "row-start": [{
                        "row-start": L()
                    }],
                    "row-end": [{
                        "row-end": L()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", O]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", O]
                    }],
                    gap: [{
                        gap: [m]
                    }],
                    "gap-x": [{
                        "gap-x": [m]
                    }],
                    "gap-y": [{
                        "gap-y": [m]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...K()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...K(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...K(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [b]
                    }],
                    px: [{
                        px: [b]
                    }],
                    py: [{
                        py: [b]
                    }],
                    ps: [{
                        ps: [b]
                    }],
                    pe: [{
                        pe: [b]
                    }],
                    pt: [{
                        pt: [b]
                    }],
                    pr: [{
                        pr: [b]
                    }],
                    pb: [{
                        pb: [b]
                    }],
                    pl: [{
                        pl: [b]
                    }],
                    m: [{
                        m: [f]
                    }],
                    mx: [{
                        mx: [f]
                    }],
                    my: [{
                        my: [f]
                    }],
                    ms: [{
                        ms: [f]
                    }],
                    me: [{
                        me: [f]
                    }],
                    mt: [{
                        mt: [f]
                    }],
                    mr: [{
                        mr: [f]
                    }],
                    mb: [{
                        mb: [f]
                    }],
                    ml: [{
                        ml: [f]
                    }],
                    "space-x": [{
                        "space-x": [k]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [k]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", O, t]
                    }],
                    "min-w": [{
                        "min-w": [O, t, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [O, t, "none", "full", "min", "max", "fit", "prose", {
                            screen: [T]
                        }, T]
                    }],
                    h: [{
                        h: [O, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [O, t, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", T, M]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", E]
                    }],
                    "font-family": [{
                        font: [H]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", O]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", A, E]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", I, O]
                    }],
                    "list-image": [{
                        "list-image": ["none", O]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", O]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [g]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [g]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...V(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", I, M]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", I, O]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: R()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", O]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [g]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...W(), D]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", B]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, q]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [x]
                    }],
                    "gradient-via-pos": [{
                        via: [x]
                    }],
                    "gradient-to-pos": [{
                        to: [x]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [a]
                    }],
                    "rounded-s": [{
                        "rounded-s": [a]
                    }],
                    "rounded-e": [{
                        "rounded-e": [a]
                    }],
                    "rounded-t": [{
                        "rounded-t": [a]
                    }],
                    "rounded-r": [{
                        "rounded-r": [a]
                    }],
                    "rounded-b": [{
                        "rounded-b": [a]
                    }],
                    "rounded-l": [{
                        "rounded-l": [a]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [a]
                    }],
                    "rounded-se": [{
                        "rounded-se": [a]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [a]
                    }],
                    "rounded-es": [{
                        "rounded-es": [a]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [a]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [a]
                    }],
                    "rounded-br": [{
                        "rounded-br": [a]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [a]
                    }],
                    "border-w": [{
                        border: [i]
                    }],
                    "border-w-x": [{
                        "border-x": [i]
                    }],
                    "border-w-y": [{
                        "border-y": [i]
                    }],
                    "border-w-s": [{
                        "border-s": [i]
                    }],
                    "border-w-e": [{
                        "border-e": [i]
                    }],
                    "border-w-t": [{
                        "border-t": [i]
                    }],
                    "border-w-r": [{
                        "border-r": [i]
                    }],
                    "border-w-b": [{
                        "border-b": [i]
                    }],
                    "border-w-l": [{
                        "border-l": [i]
                    }],
                    "border-opacity": [{
                        "border-opacity": [g]
                    }],
                    "border-style": [{
                        border: [...V(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [i]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [i]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [g]
                    }],
                    "divide-style": [{
                        divide: V()
                    }],
                    "border-color": [{
                        border: [n]
                    }],
                    "border-color-x": [{
                        "border-x": [n]
                    }],
                    "border-color-y": [{
                        "border-y": [n]
                    }],
                    "border-color-s": [{
                        "border-s": [n]
                    }],
                    "border-color-e": [{
                        "border-e": [n]
                    }],
                    "border-color-t": [{
                        "border-t": [n]
                    }],
                    "border-color-r": [{
                        "border-r": [n]
                    }],
                    "border-color-b": [{
                        "border-b": [n]
                    }],
                    "border-color-l": [{
                        "border-l": [n]
                    }],
                    "divide-color": [{
                        divide: [n]
                    }],
                    "outline-style": [{
                        outline: ["", ...V()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [I, O]
                    }],
                    "outline-w": [{
                        outline: [I, M]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: $()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [g]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [I, M]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", T, G]
                    }],
                    "shadow-color": [{
                        shadow: [H]
                    }],
                    opacity: [{
                        opacity: [g]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...U(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": U()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [r]
                    }],
                    brightness: [{
                        brightness: [s]
                    }],
                    contrast: [{
                        contrast: [l]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", T, O]
                    }],
                    grayscale: [{
                        grayscale: [d]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [c]
                    }],
                    invert: [{
                        invert: [u]
                    }],
                    saturate: [{
                        saturate: [y]
                    }],
                    sepia: [{
                        sepia: [j]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [r]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [s]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [l]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [d]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [c]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [u]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [g]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [y]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [j]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [o]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [o]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [o]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", O]
                    }],
                    duration: [{
                        duration: Y()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", O]
                    }],
                    delay: [{
                        delay: Y()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", O]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [v]
                    }],
                    "scale-x": [{
                        "scale-x": [v]
                    }],
                    "scale-y": [{
                        "scale-y": [v]
                    }],
                    rotate: [{
                        rotate: [F, O]
                    }],
                    "translate-x": [{
                        "translate-x": [S]
                    }],
                    "translate-y": [{
                        "translate-y": [S]
                    }],
                    "skew-x": [{
                        "skew-x": [N]
                    }],
                    "skew-y": [{
                        "skew-y": [N]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", O]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": R()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": R()
                    }],
                    "scroll-my": [{
                        "scroll-my": R()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": R()
                    }],
                    "scroll-me": [{
                        "scroll-me": R()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": R()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": R()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": R()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": R()
                    }],
                    "scroll-p": [{
                        "scroll-p": R()
                    }],
                    "scroll-px": [{
                        "scroll-px": R()
                    }],
                    "scroll-py": [{
                        "scroll-py": R()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": R()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": R()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": R()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": R()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": R()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": R()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", O]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [I, M, E]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        }),
        X = (t = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", r = {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                    outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-9 px-4 py-2 has-[>svg]:px-3",
                    sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                    lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                    icon: "size-9",
                    "icon-sm": "size-8",
                    "icon-lg": "size-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        }, e => {
            var s;
            if ((null == r ? void 0 : r.variants) == null) return c(t, null == e ? void 0 : e.class, null == e ? void 0 : e.className);
            let {
                variants: n,
                defaultVariants: a
            } = r, o = Object.keys(n).map(t => {
                let r = null == e ? void 0 : e[t],
                    s = null == a ? void 0 : a[t];
                if (null === r) return null;
                let o = u(r) || u(s);
                return n[t][o]
            }), i = e && Object.entries(e).reduce((e, t) => {
                let [r, s] = t;
                return void 0 === s || (e[r] = s), e
            }, {});
            return c(t, o, null == r || null == (s = r.compoundVariants) ? void 0 : s.reduce((e, t) => {
                let {
                    class: r,
                    className: s,
                    ...n
                } = t;
                return Object.entries(n).every(e => {
                    let [t, r] = e;
                    return Array.isArray(r) ? r.includes({ ...a,
                        ...i
                    }[t]) : ({ ...a,
                        ...i
                    })[t] === r
                }) ? [...e, r, s] : e
            }, []), null == e ? void 0 : e.class, null == e ? void 0 : e.className)
        });

    function J({
        className: e,
        variant: t,
        size: r,
        asChild: n = !1,
        ...a
    }) {
        let i = n ? o : "button";
        return (0, s.jsx)(i, {
            "data-slot": "button",
            className: function(...e) {
                return Y(c(e))
            }(X({
                variant: t,
                size: r,
                className: e
            })),
            ...a
        })
    }
    e.s(["Button", () => J], 67881)
}, 75254, e => {
    "use strict";
    var t = e.i(71645);
    let r = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
    var s = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let n = (0, t.forwardRef)(({
            color: e = "currentColor",
            size: n = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: o,
            className: i = "",
            children: l,
            iconNode: d,
            ...c
        }, u) => (0, t.createElement)("svg", {
            ref: u,
            ...s,
            width: n,
            height: n,
            stroke: e,
            strokeWidth: o ? 24 * Number(a) / Number(n) : a,
            className: r("lucide", i),
            ...c
        }, [...d.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(l) ? l : [l]])),
        a = (e, s) => {
            let a = (0, t.forwardRef)(({
                className: a,
                ...o
            }, i) => (0, t.createElement)(n, {
                ref: i,
                iconNode: s,
                className: r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, a),
                ...o
            }));
            return a.displayName = `${e}`, a
        };
    e.s(["default", () => a], 75254)
}, 84998, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        s = e.i(67881),
        n = e.i(75254);
    let a = (0, n.default)("Menu", [
            ["line", {
                x1: "4",
                x2: "20",
                y1: "12",
                y2: "12",
                key: "1e0a9i"
            }],
            ["line", {
                x1: "4",
                x2: "20",
                y1: "6",
                y2: "6",
                key: "1owob3"
            }],
            ["line", {
                x1: "4",
                x2: "20",
                y1: "18",
                y2: "18",
                key: "yk5zj1"
            }]
        ]),
        o = (0, n.default)("X", [
            ["path", {
                d: "M18 6 6 18",
                key: "1bl5f8"
            }],
            ["path", {
                d: "m6 6 12 12",
                key: "d8bk6v"
            }]
        ]),
        i = [{
            name: "Features",
            href: "#features"
        }, {
            name: "How it works",
            href: "#how-it-works"
        }, {
            name: "Developers",
            href: "#developers"
        }, {
            name: "Pricing",
            href: "#pricing"
        }];

    function l() {
        let [e, n] = (0, r.useState)(!1), [l, d] = (0, r.useState)(!1);
        return (0, r.useEffect)(() => {
            let e = () => {
                n(window.scrollY > 20)
            };
            return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
        }, []), (0, t.jsxs)("header", {
            className: `fixed z-50 transition-all duration-500 ${e?"top-4 left-4 right-4":"top-0 left-0 right-0"}`,
            children: [(0, t.jsx)("nav", {
                className: `mx-auto transition-all duration-500 ${e||l?"bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]":"bg-transparent max-w-[1400px]"}`,
                children: (0, t.jsxs)("div", {
                    className: `flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${e?"h-14":"h-20"}`,
                    children: [(0, t.jsxs)("a", {
                        href: "#",
                        className: "flex items-center gap-2 group",
                        children: [(0, t.jsx)("span", {
                            className: `font-display tracking-tight transition-all duration-500 ${e?"text-xl":"text-2xl"}`,
                            children: "Optimus"
                        }), (0, t.jsx)("span", {
                            className: `text-muted-foreground font-mono transition-all duration-500 ${e?"text-[10px] mt-0.5":"text-xs mt-1"}`,
                            children: "TM"
                        })]
                    }), (0, t.jsx)("div", {
                        className: "hidden md:flex items-center gap-12",
                        children: i.map(e => (0, t.jsxs)("a", {
                            href: e.href,
                            className: "text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group",
                            children: [e.name, (0, t.jsx)("span", {
                                className: "absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"
                            })]
                        }, e.name))
                    }), (0, t.jsxs)("div", {
                        className: "hidden md:flex items-center gap-4",
                        children: [(0, t.jsx)("a", {
                            href: "#",
                            className: `text-foreground/70 hover:text-foreground transition-all duration-500 ${e?"text-xs":"text-sm"}`,
                            children: "Sign in"
                        }), (0, t.jsx)(s.Button, {
                            size: "sm",
                            className: `bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 ${e?"px-4 h-8 text-xs":"px-6"}`,
                            children: "Start creating"
                        })]
                    }), (0, t.jsx)("button", {
                        onClick: () => d(!l),
                        className: "md:hidden p-2",
                        "aria-label": "Toggle menu",
                        children: l ? (0, t.jsx)(o, {
                            className: "w-6 h-6"
                        }) : (0, t.jsx)(a, {
                            className: "w-6 h-6"
                        })
                    })]
                })
            }), (0, t.jsx)("div", {
                className: `md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${l?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,
                style: {
                    top: 0
                },
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col h-full px-8 pt-28 pb-8",
                    children: [(0, t.jsx)("div", {
                        className: "flex-1 flex flex-col justify-center gap-8",
                        children: i.map((e, r) => (0, t.jsx)("a", {
                            href: e.href,
                            onClick: () => d(!1),
                            className: `text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${l?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,
                            style: {
                                transitionDelay: l ? `${75*r}ms` : "0ms"
                            },
                            children: e.name
                        }, e.name))
                    }), (0, t.jsxs)("div", {
                        className: `flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${l?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,
                        style: {
                            transitionDelay: l ? "300ms" : "0ms"
                        },
                        children: [(0, t.jsx)(s.Button, {
                            variant: "outline",
                            className: "flex-1 rounded-full h-14 text-base",
                            onClick: () => d(!1),
                            children: "Sign in"
                        }), (0, t.jsx)(s.Button, {
                            className: "flex-1 bg-foreground text-background rounded-full h-14 text-base",
                            onClick: () => d(!1),
                            children: "Start creating"
                        })]
                    })]
                })
            })]
        })
    }
    e.s(["Navigation", () => l], 84998)
}, 72520, e => {
    "use strict";
    let t = (0, e.i(75254).default)("ArrowRight", [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ]);
    e.s(["ArrowRight", () => t], 72520)
}, 46331, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        s = e.i(67881),
        n = e.i(72520);

    function a() {
        let e = (0, r.useRef)(null),
            s = (0, r.useRef)(0);
        return (0, r.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let r = t.getContext("2d");
            if (!r) return;
            let n = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯",
                a = 0,
                o = () => {
                    let e = window.devicePixelRatio || 1,
                        s = t.getBoundingClientRect();
                    t.width = s.width * e, t.height = s.height * e, r.scale(e, e)
                };
            o(), window.addEventListener("resize", o);
            let i = () => {
                let e = t.getBoundingClientRect();
                r.clearRect(0, 0, e.width, e.height);
                let o = e.width / 2,
                    l = e.height / 2,
                    d = .525 * Math.min(e.width, e.height);
                r.font = "12px monospace", r.textAlign = "center", r.textBaseline = "middle";
                let c = [];
                for (let e = 0; e < 2 * Math.PI; e += .15)
                    for (let t = 0; t < Math.PI; t += .15) {
                        let r = Math.sin(t) * Math.cos(e + .5 * a),
                            s = Math.sin(t) * Math.sin(e + .5 * a),
                            i = Math.cos(t),
                            u = .3 * a,
                            m = r * Math.cos(u) - i * Math.sin(u),
                            p = r * Math.sin(u) + i * Math.cos(u),
                            x = .2 * a,
                            h = s * Math.cos(x) - p * Math.sin(x),
                            f = s * Math.sin(x) + p * Math.cos(x),
                            g = Math.floor((f + 1) / 2 * (n.length - 1));
                        c.push({
                            x: o + m * d,
                            y: l + h * d,
                            z: f,
                            char: n[g]
                        })
                    }
                c.sort((e, t) => e.z - t.z), c.forEach(e => {
                    let t = .2 + (e.z + 1) * .4;
                    r.fillStyle = `rgba(0, 0, 0, ${t})`, r.fillText(e.char, e.x, e.y)
                }), a += .02, s.current = requestAnimationFrame(i)
            };
            return i(), () => {
                window.removeEventListener("resize", o), cancelAnimationFrame(s.current)
            }
        }, []), (0, t.jsx)("canvas", {
            ref: e,
            className: "w-full h-full",
            style: {
                display: "block"
            }
        })
    }
    let o = ["create", "build", "scale", "ship"];

    function i() {
        let [e, i] = (0, r.useState)(!1), [l, d] = (0, r.useState)(0);
        return (0, r.useEffect)(() => {
            i(!0)
        }, []), (0, r.useEffect)(() => {
            let e = setInterval(() => {
                d(e => (e + 1) % o.length)
            }, 2500);
            return () => clearInterval(e)
        }, []), (0, t.jsxs)("section", {
            className: "relative min-h-screen flex flex-col justify-center overflow-hidden",
            children: [(0, t.jsx)("div", {
                className: "absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none",
                children: (0, t.jsx)(a, {})
            }), (0, t.jsxs)("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none opacity-30",
                children: [
                    [...Array(8)].map((e, r) => (0, t.jsx)("div", {
                        className: "absolute h-px bg-foreground/10",
                        style: {
                            top: `${12.5*(r+1)}%`,
                            left: 0,
                            right: 0
                        }
                    }, `h-${r}`)), [...Array(12)].map((e, r) => (0, t.jsx)("div", {
                        className: "absolute w-px bg-foreground/10",
                        style: {
                            left: `${8.33*(r+1)}%`,
                            top: 0,
                            bottom: 0
                        }
                    }, `v-${r}`))
                ]
            }), (0, t.jsxs)("div", {
                className: "relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40",
                children: [(0, t.jsx)("div", {
                    className: `mb-8 transition-all duration-700 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,
                    children: (0, t.jsxs)("span", {
                        className: "inline-flex items-center gap-3 text-sm font-mono text-muted-foreground",
                        children: [(0, t.jsx)("span", {
                            className: "w-8 h-px bg-foreground/30"
                        }), "The platform for modern teams"]
                    })
                }), (0, t.jsx)("div", {
                    className: "mb-12",
                    children: (0, t.jsxs)("h1", {
                        className: `text-[clamp(3rem,12vw,10rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,
                        children: [(0, t.jsx)("span", {
                            className: "block",
                            children: "The platform"
                        }), (0, t.jsxs)("span", {
                            className: "block",
                            children: ["to", " ", (0, t.jsxs)("span", {
                                className: "relative inline-block",
                                children: [(0, t.jsx)("span", {
                                    className: "inline-flex",
                                    children: o[l].split("").map((e, r) => (0, t.jsx)("span", {
                                        className: "inline-block animate-char-in",
                                        style: {
                                            animationDelay: `${50*r}ms`
                                        },
                                        children: e
                                    }, `${l}-${r}`))
                                }, l), (0, t.jsx)("span", {
                                    className: "absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10"
                                })]
                            })]
                        })]
                    })
                }), (0, t.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-12 lg:gap-24 items-end",
                    children: [(0, t.jsx)("p", {
                        className: `text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,
                        children: "Your toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best experiences."
                    }), (0, t.jsxs)("div", {
                        className: `flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,
                        children: [(0, t.jsxs)(s.Button, {
                            size: "lg",
                            className: "bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group",
                            children: ["Start free trial", (0, t.jsx)(n.ArrowRight, {
                                className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                            })]
                        }), (0, t.jsx)(s.Button, {
                            size: "lg",
                            variant: "outline",
                            className: "h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5",
                            children: "Watch demo"
                        })]
                    })]
                })]
            }), (0, t.jsx)("div", {
                className: `absolute bottom-12 left-0 right-0 transition-all duration-700 delay-500 ${e?"opacity-100":"opacity-0"}`,
                children: (0, t.jsx)("div", {
                    className: "flex gap-16 marquee whitespace-nowrap",
                    children: [void 0, void 0].map((e, r) => (0, t.jsx)("div", {
                        className: "flex gap-16",
                        children: [{
                            value: "20 days",
                            label: "saved on builds",
                            company: "NETFLIX"
                        }, {
                            value: "98%",
                            label: "faster deployment",
                            company: "STRIPE"
                        }, {
                            value: "300%",
                            label: "throughput increase",
                            company: "LINEAR"
                        }, {
                            value: "6x",
                            label: "faster to ship",
                            company: "NOTION"
                        }].map(e => (0, t.jsxs)("div", {
                            className: "flex items-baseline gap-4",
                            children: [(0, t.jsx)("span", {
                                className: "text-4xl lg:text-5xl font-display",
                                children: e.value
                            }), (0, t.jsxs)("span", {
                                className: "text-sm text-muted-foreground",
                                children: [e.label, (0, t.jsx)("span", {
                                    className: "block font-mono text-xs mt-1",
                                    children: e.company
                                })]
                            })]
                        }, `${e.company}-${r}`))
                    }, r))
                })
            })]
        })
    }
    e.s(["HeroSection", () => i], 46331)
}, 85889, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    let s = [{
        number: "01",
        title: "Instant Deployment",
        description: "Push to production in seconds. Our edge network ensures your applications load instantly, anywhere in the world.",
        visual: "deploy"
    }, {
        number: "02",
        title: "AI-Native Workflows",
        description: "Build intelligent applications with built-in AI capabilities. From inference to training, everything scales automatically.",
        visual: "ai"
    }, {
        number: "03",
        title: "Real-time Collaboration",
        description: "Work together seamlessly. Live preview, instant feedback, and version control that actually makes sense.",
        visual: "collab"
    }, {
        number: "04",
        title: "Enterprise Security",
        description: "Bank-grade encryption, SOC 2 compliance, and granular access controls. Your data stays yours.",
        visual: "security"
    }];

    function n() {
        return (0, t.jsxs)("svg", {
            viewBox: "0 0 200 160",
            className: "w-full h-full",
            children: [(0, t.jsx)("defs", {
                children: (0, t.jsx)("clipPath", {
                    id: "deployClip",
                    children: (0, t.jsx)("rect", {
                        x: "30",
                        y: "20",
                        width: "140",
                        height: "120",
                        rx: "4"
                    })
                })
            }), (0, t.jsx)("rect", {
                x: "30",
                y: "20",
                width: "140",
                height: "120",
                rx: "4",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2"
            }), (0, t.jsx)("g", {
                clipPath: "url(#deployClip)",
                children: [0, 1, 2, 3, 4, 5].map(e => (0, t.jsxs)("rect", {
                    x: "40",
                    y: 35 + 16 * e,
                    width: "120",
                    height: "10",
                    rx: "2",
                    fill: "currentColor",
                    opacity: "0.15",
                    children: [(0, t.jsx)("animate", {
                        attributeName: "opacity",
                        values: "0.15;0.8;0.15",
                        dur: "2s",
                        begin: `${.15*e}s`,
                        repeatCount: "indefinite"
                    }), (0, t.jsx)("animate", {
                        attributeName: "width",
                        values: "20;120;20",
                        dur: "2s",
                        begin: `${.15*e}s`,
                        repeatCount: "indefinite"
                    })]
                }, e))
            }), (0, t.jsx)("circle", {
                cx: "100",
                cy: "155",
                r: "3",
                fill: "currentColor",
                opacity: "0.3",
                children: (0, t.jsx)("animate", {
                    attributeName: "opacity",
                    values: "0.3;1;0.3",
                    dur: "1s",
                    repeatCount: "indefinite"
                })
            })]
        })
    }

    function a() {
        return (0, t.jsxs)("svg", {
            viewBox: "0 0 200 160",
            className: "w-full h-full",
            children: [(0, t.jsx)("circle", {
                cx: "100",
                cy: "80",
                r: "12",
                fill: "currentColor",
                children: (0, t.jsx)("animate", {
                    attributeName: "r",
                    values: "12;14;12",
                    dur: "2s",
                    repeatCount: "indefinite"
                })
            }), [0, 1, 2, 3, 4, 5].map(e => {
                let r = 60 * e * (Math.PI / 180);
                return (0, t.jsxs)("g", {
                    children: [(0, t.jsx)("line", {
                        x1: "100",
                        y1: "80",
                        x2: 100 + 50 * Math.cos(r),
                        y2: 80 + 50 * Math.sin(r),
                        stroke: "currentColor",
                        strokeWidth: "1",
                        opacity: "0.3",
                        children: (0, t.jsx)("animate", {
                            attributeName: "opacity",
                            values: "0.3;0.8;0.3",
                            dur: "2s",
                            begin: `${.3*e}s`,
                            repeatCount: "indefinite"
                        })
                    }), (0, t.jsx)("circle", {
                        cx: 100 + 50 * Math.cos(r),
                        cy: 80 + 50 * Math.sin(r),
                        r: "6",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, t.jsx)("animate", {
                            attributeName: "r",
                            values: "6;8;6",
                            dur: "2s",
                            begin: `${.3*e}s`,
                            repeatCount: "indefinite"
                        })
                    })]
                }, e)
            }), (0, t.jsxs)("circle", {
                cx: "100",
                cy: "80",
                r: "30",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1",
                opacity: "0",
                children: [(0, t.jsx)("animate", {
                    attributeName: "r",
                    values: "20;60",
                    dur: "2s",
                    repeatCount: "indefinite"
                }), (0, t.jsx)("animate", {
                    attributeName: "opacity",
                    values: "0.5;0",
                    dur: "2s",
                    repeatCount: "indefinite"
                })]
            })]
        })
    }

    function o() {
        return (0, t.jsxs)("svg", {
            viewBox: "0 0 200 160",
            className: "w-full h-full",
            children: [(0, t.jsxs)("g", {
                children: [(0, t.jsx)("rect", {
                    x: "30",
                    y: "50",
                    width: "50",
                    height: "60",
                    rx: "4",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }), (0, t.jsx)("text", {
                    x: "55",
                    y: "85",
                    textAnchor: "middle",
                    fontSize: "20",
                    fontFamily: "monospace",
                    fill: "currentColor",
                    children: "A"
                }), (0, t.jsx)("circle", {
                    cx: "55",
                    cy: "35",
                    r: "12",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2"
                })]
            }), (0, t.jsxs)("g", {
                children: [(0, t.jsx)("rect", {
                    x: "120",
                    y: "50",
                    width: "50",
                    height: "60",
                    rx: "4",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }), (0, t.jsx)("text", {
                    x: "145",
                    y: "85",
                    textAnchor: "middle",
                    fontSize: "20",
                    fontFamily: "monospace",
                    fill: "currentColor",
                    children: "B"
                }), (0, t.jsx)("circle", {
                    cx: "145",
                    cy: "35",
                    r: "12",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2"
                })]
            }), (0, t.jsx)("line", {
                x1: "80",
                y1: "80",
                x2: "120",
                y2: "80",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeDasharray: "4 4",
                children: (0, t.jsx)("animate", {
                    attributeName: "stroke-dashoffset",
                    values: "0;-8",
                    dur: "0.5s",
                    repeatCount: "indefinite"
                })
            }), (0, t.jsx)("circle", {
                r: "4",
                fill: "currentColor",
                children: (0, t.jsx)("animateMotion", {
                    dur: "1.5s",
                    repeatCount: "indefinite",
                    children: (0, t.jsx)("mpath", {
                        href: "#dataPath"
                    })
                })
            }), (0, t.jsx)("path", {
                id: "dataPath",
                d: "M 80 80 L 120 80",
                fill: "none"
            }), (0, t.jsx)("g", {
                transform: "translate(100, 130)",
                children: (0, t.jsxs)("circle", {
                    r: "6",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [(0, t.jsx)("animate", {
                        attributeName: "r",
                        values: "6;10;6",
                        dur: "1s",
                        repeatCount: "indefinite"
                    }), (0, t.jsx)("animate", {
                        attributeName: "opacity",
                        values: "1;0.3;1",
                        dur: "1s",
                        repeatCount: "indefinite"
                    })]
                })
            })]
        })
    }

    function i() {
        return (0, t.jsxs)("svg", {
            viewBox: "0 0 200 160",
            className: "w-full h-full",
            children: [(0, t.jsx)("path", {
                d: "M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2"
            }), (0, t.jsx)("path", {
                d: "M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z",
                fill: "currentColor",
                opacity: "0.1",
                children: (0, t.jsx)("animate", {
                    attributeName: "opacity",
                    values: "0.1;0.2;0.1",
                    dur: "2s",
                    repeatCount: "indefinite"
                })
            }), (0, t.jsx)("rect", {
                x: "85",
                y: "70",
                width: "30",
                height: "25",
                rx: "3",
                fill: "currentColor"
            }), (0, t.jsx)("path", {
                d: "M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            }), (0, t.jsx)("circle", {
                cx: "100",
                cy: "80",
                r: "4",
                fill: "white"
            }), (0, t.jsx)("rect", {
                x: "98",
                y: "82",
                width: "4",
                height: "8",
                fill: "white"
            }), (0, t.jsxs)("line", {
                x1: "60",
                y1: "60",
                x2: "140",
                y2: "60",
                stroke: "currentColor",
                strokeWidth: "1",
                opacity: "0",
                children: [(0, t.jsx)("animate", {
                    attributeName: "y1",
                    values: "40;120;40",
                    dur: "3s",
                    repeatCount: "indefinite"
                }), (0, t.jsx)("animate", {
                    attributeName: "y2",
                    values: "40;120;40",
                    dur: "3s",
                    repeatCount: "indefinite"
                }), (0, t.jsx)("animate", {
                    attributeName: "opacity",
                    values: "0;0.5;0",
                    dur: "3s",
                    repeatCount: "indefinite"
                })]
            })]
        })
    }

    function l({
        type: e
    }) {
        switch (e) {
            case "deploy":
            default:
                return (0, t.jsx)(n, {});
            case "ai":
                return (0, t.jsx)(a, {});
            case "collab":
                return (0, t.jsx)(o, {});
            case "security":
                return (0, t.jsx)(i, {})
        }
    }

    function d({
        feature: e,
        index: s
    }) {
        let [n, a] = (0, r.useState)(!1), o = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                e.isIntersecting && a(!0)
            }, {
                threshold: .2
            });
            return o.current && e.observe(o.current), () => e.disconnect()
        }, []), (0, t.jsx)("div", {
            ref: o,
            className: `group relative transition-all duration-700 ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,
            style: {
                transitionDelay: `${100*s}ms`
            },
            children: (0, t.jsxs)("div", {
                className: "flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10",
                children: [(0, t.jsx)("div", {
                    className: "shrink-0",
                    children: (0, t.jsx)("span", {
                        className: "font-mono text-sm text-muted-foreground",
                        children: e.number
                    })
                }), (0, t.jsxs)("div", {
                    className: "flex-1 grid lg:grid-cols-2 gap-8 items-center",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)("h3", {
                            className: "text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500",
                            children: e.title
                        }), (0, t.jsx)("p", {
                            className: "text-lg text-muted-foreground leading-relaxed",
                            children: e.description
                        })]
                    }), (0, t.jsx)("div", {
                        className: "flex justify-center lg:justify-end",
                        children: (0, t.jsx)("div", {
                            className: "w-48 h-40 text-foreground",
                            children: (0, t.jsx)(l, {
                                type: e.visual
                            })
                        })
                    })]
                })]
            })
        })
    }

    function c() {
        let [e, n] = (0, r.useState)(!1), a = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                e.isIntersecting && n(!0)
            }, {
                threshold: .1
            });
            return a.current && e.observe(a.current), () => e.disconnect()
        }, []), (0, t.jsx)("section", {
            id: "features",
            ref: a,
            className: "relative py-24 lg:py-32",
            children: (0, t.jsxs)("div", {
                className: "max-w-[1400px] mx-auto px-6 lg:px-12",
                children: [(0, t.jsxs)("div", {
                    className: "mb-16 lg:mb-24",
                    children: [(0, t.jsxs)("span", {
                        className: "inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6",
                        children: [(0, t.jsx)("span", {
                            className: "w-8 h-px bg-foreground/30"
                        }), "Capabilities"]
                    }), (0, t.jsxs)("h2", {
                        className: `text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,
                        children: ["Everything you need.", (0, t.jsx)("br", {}), (0, t.jsx)("span", {
                            className: "text-muted-foreground",
                            children: "Nothing you don't."
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    children: s.map((e, r) => (0, t.jsx)(d, {
                        feature: e,
                        index: r
                    }, e.number))
                })]
            })
        })
    }
    e.s(["FeaturesSection", () => c])
}, 16015, (e, t, r) => {}, 98547, (e, t, r) => {
    var s = e.i(47167);
    e.r(16015);
    var n = e.r(71645),
        a = n && "object" == typeof n && "default" in n ? n : {
            default: n
        },
        o = void 0 !== s.default && s.default.env && !0,
        i = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        l = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    r = t.name,
                    s = void 0 === r ? "stylesheet" : r,
                    n = t.optimizeForSpeed,
                    a = void 0 === n ? o : n;
                d(i(s), "`name` must be a string"), this._name = s, this._deletedRulePlaceholder = "#" + s + "-deleted-rule____{}", d("boolean" == typeof a, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = a, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                var l = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = l ? l.getAttribute("content") : null
            }
            var t, r = e.prototype;
            return r.setOptimizeForSpeed = function(e) {
                    d("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), d(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                }, r.isOptimizeForSpeed = function() {
                    return this._optimizeForSpeed
                }, r.inject = function() {
                    var e = this;
                    if (d(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                        return
                    }
                    this._serverSheet = {
                        cssRules: [],
                        insertRule: function(t, r) {
                            return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                                cssText: t
                            } : e._serverSheet.cssRules.push({
                                cssText: t
                            }), r
                        },
                        deleteRule: function(t) {
                            e._serverSheet.cssRules[t] = null
                        }
                    }
                }, r.getSheetForTag = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }, r.getSheet = function() {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                }, r.insertRule = function(e, t) {
                    if (d(i(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var r = this.getSheet();
                        "number" != typeof t && (t = r.cssRules.length);
                        try {
                            r.insertRule(e, t)
                        } catch (t) {
                            return o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                    } else {
                        var s = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, s))
                    }
                    return this._rulesCount++
                }, r.replaceRule = function(e, t) {
                    if (this._optimizeForSpeed || "undefined" == typeof window) {
                        var r = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
                        r.deleteRule(e);
                        try {
                            r.insertRule(t, e)
                        } catch (s) {
                            o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
                        }
                    } else {
                        var s = this._tags[e];
                        d(s, "old rule at index `" + e + "` not found"), s.textContent = t
                    }
                    return e
                }, r.deleteRule = function(e) {
                    if ("undefined" == typeof window) return void this._serverSheet.deleteRule(e);
                    if (this._optimizeForSpeed) this.replaceRule(e, "");
                    else {
                        var t = this._tags[e];
                        d(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                    }
                }, r.flush = function() {
                    this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                        return e && e.parentNode.removeChild(e)
                    }), this._tags = []) : this._serverSheet.cssRules = []
                }, r.cssRules = function() {
                    var e = this;
                    return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, r) {
                        return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t
                        })) : t.push(null), t
                    }, [])
                }, r.makeStyleTag = function(e, t, r) {
                    t && d(i(t), "makeStyleTag accepts only strings as second parameter");
                    var s = document.createElement("style");
                    this._nonce && s.setAttribute("nonce", this._nonce), s.type = "text/css", s.setAttribute("data-" + e, ""), t && s.appendChild(document.createTextNode(t));
                    var n = document.head || document.getElementsByTagName("head")[0];
                    return r ? n.insertBefore(s, r) : n.appendChild(s), s
                }, t = [{
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }],
                function(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var s = t[r];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }(e.prototype, t), e
        }();

    function d(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".")
    }
    var c = function(e) {
            for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
            return t >>> 0
        },
        u = {};

    function m(e, t) {
        if (!t) return "jsx-" + e;
        var r = String(t),
            s = e + r;
        return u[s] || (u[s] = "jsx-" + c(e + "-" + r)), u[s]
    }

    function p(e, t) {
        "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var r = e + t;
        return u[r] || (u[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), u[r]
    }
    var x = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    r = t.styleSheet,
                    s = void 0 === r ? null : r,
                    n = t.optimizeForSpeed,
                    a = void 0 !== n && n;
                this._sheet = s || new l({
                    name: "styled-jsx",
                    optimizeForSpeed: a
                }), this._sheet.inject(), s && "boolean" == typeof a && (this._sheet.setOptimizeForSpeed(a), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }
            var t = e.prototype;
            return t.add = function(e) {
                var t = this;
                void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                    return e[t] = 0, e
                }, {}));
                var r = this.getIdAndRules(e),
                    s = r.styleId,
                    n = r.rules;
                if (s in this._instancesCounts) {
                    this._instancesCounts[s] += 1;
                    return
                }
                var a = n.map(function(e) {
                    return t._sheet.insertRule(e)
                }).filter(function(e) {
                    return -1 !== e
                });
                this._indices[s] = a, this._instancesCounts[s] = 1
            }, t.remove = function(e) {
                var t = this,
                    r = this.getIdAndRules(e).styleId;
                if (function(e, t) {
                        if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                    }(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                    var s = this._fromServer && this._fromServer[r];
                    s ? (s.parentNode.removeChild(s), delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                        return t._sheet.deleteRule(e)
                    }), delete this._indices[r]), delete this._instancesCounts[r]
                }
            }, t.update = function(e, t) {
                this.add(t), this.remove(e)
            }, t.flush = function() {
                this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }, t.cssRules = function() {
                var e = this,
                    t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                        return [t, e._fromServer[t]]
                    }) : [],
                    r = this._sheet.cssRules();
                return t.concat(Object.keys(this._indices).map(function(t) {
                    return [t, e._indices[t].map(function(e) {
                        return r[e].cssText
                    }).join(e._optimizeForSpeed ? "" : "\n")]
                }).filter(function(e) {
                    return !!e[1]
                }))
            }, t.styles = function(e) {
                var t, r;
                return t = this.cssRules(), void 0 === (r = e) && (r = {}), t.map(function(e) {
                    var t = e[0],
                        s = e[1];
                    return a.default.createElement("style", {
                        id: "__" + t,
                        key: "__" + t,
                        nonce: r.nonce ? r.nonce : void 0,
                        dangerouslySetInnerHTML: {
                            __html: s
                        }
                    })
                })
            }, t.getIdAndRules = function(e) {
                var t = e.children,
                    r = e.dynamic,
                    s = e.id;
                if (r) {
                    var n = m(s, r);
                    return {
                        styleId: n,
                        rules: Array.isArray(t) ? t.map(function(e) {
                            return p(n, e)
                        }) : [p(n, t)]
                    }
                }
                return {
                    styleId: m(s),
                    rules: Array.isArray(t) ? t : [t]
                }
            }, t.selectFromServer = function() {
                return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                    return e[t.id.slice(2)] = t, e
                }, {})
            }, e
        }(),
        h = n.createContext(null);

    function f() {
        return new x
    }

    function g() {
        return n.useContext(h)
    }
    h.displayName = "StyleSheetContext";
    var b = a.default.useInsertionEffect || a.default.useLayoutEffect,
        y = "undefined" != typeof window ? f() : void 0;

    function v(e) {
        var t = y || g();
        return t && ("undefined" == typeof window ? t.add(e) : b(function() {
            return t.add(e),
                function() {
                    t.remove(e)
                }
        }, [e.id, String(e.dynamic)])), null
    }
    v.dynamic = function(e) {
        return e.map(function(e) {
            return m(e[0], e[1])
        }).join(" ")
    }, r.StyleRegistry = function(e) {
        var t = e.registry,
            r = e.children,
            s = n.useContext(h),
            o = n.useState(function() {
                return s || t || f()
            })[0];
        return a.default.createElement(h.Provider, {
            value: o
        }, r)
    }, r.createStyleRegistry = f, r.style = v, r.useStyleRegistry = g
}, 37902, (e, t, r) => {
    t.exports = e.r(98547).style
}, 749, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(37902),
        s = e.i(71645);
    let n = [{
        number: "I",
        title: "Connect your tools",
        description: "Integrate with your existing stack in minutes. We support 200+ data sources out of the box.",
        code: `import { optimus } from '@optimus/core'

optimus.connect({
  source: 'your-database',
  sync: true
})`
    }, {
        number: "II",
        title: "Build your workflow",
        description: "Design powerful automations with our visual builder or write code directly.",
        code: `optimus.workflow('process', {
  trigger: 'event',
  actions: [
    'validate',
    'transform', 
    'deliver'
  ]
})`
    }, {
        number: "III",
        title: "Ship to production",
        description: "Deploy globally with zero configuration. Your app goes live in under 30 seconds.",
        code: `optimus.deploy({
  target: 'production',
  regions: 'auto'
})

// Deployed to 12 regions`
    }];

    function a() {
        let [e, a] = (0, s.useState)(0), [o, i] = (0, s.useState)(!1), l = (0, s.useRef)(null);
        return (0, s.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                e.isIntersecting && i(!0)
            }, {
                threshold: .1
            });
            return l.current && e.observe(l.current), () => e.disconnect()
        }, []), (0, s.useEffect)(() => {
            let e = setInterval(() => {
                a(e => (e + 1) % n.length)
            }, 5e3);
            return () => clearInterval(e)
        }, []), (0, t.jsxs)("section", {
            id: "how-it-works",
            ref: l,
            className: "jsx-d0fb98a0b853be6f relative py-24 lg:py-32 bg-foreground text-background overflow-hidden",
            children: [(0, t.jsx)("div", {
                className: "jsx-d0fb98a0b853be6f absolute inset-0 opacity-[0.03] pointer-events-none",
                children: (0, t.jsx)("div", {
                    style: {
                        backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
                    },
                    className: "jsx-d0fb98a0b853be6f absolute inset-0"
                })
            }), (0, t.jsxs)("div", {
                className: "jsx-d0fb98a0b853be6f relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12",
                children: [(0, t.jsxs)("div", {
                    className: "jsx-d0fb98a0b853be6f mb-16 lg:mb-24",
                    children: [(0, t.jsxs)("span", {
                        className: "jsx-d0fb98a0b853be6f inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6",
                        children: [(0, t.jsx)("span", {
                            className: "jsx-d0fb98a0b853be6f w-8 h-px bg-background/30"
                        }), "Process"]
                    }), (0, t.jsxs)("h2", {
                        className: `jsx-d0fb98a0b853be6f text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,
                        children: ["Three steps.", (0, t.jsx)("br", {
                            className: "jsx-d0fb98a0b853be6f"
                        }), (0, t.jsx)("span", {
                            className: "jsx-d0fb98a0b853be6f text-background/50",
                            children: "Infinite possibilities."
                        })]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "jsx-d0fb98a0b853be6f grid lg:grid-cols-2 gap-16 lg:gap-24",
                    children: [(0, t.jsx)("div", {
                        className: "jsx-d0fb98a0b853be6f space-y-0",
                        children: n.map((r, s) => (0, t.jsx)("button", {
                            type: "button",
                            onClick: () => a(s),
                            className: `jsx-d0fb98a0b853be6f w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${e===s?"opacity-100":"opacity-40 hover:opacity-70"}`,
                            children: (0, t.jsxs)("div", {
                                className: "jsx-d0fb98a0b853be6f flex items-start gap-6",
                                children: [(0, t.jsx)("span", {
                                    className: "jsx-d0fb98a0b853be6f font-display text-3xl text-background/30",
                                    children: r.number
                                }), (0, t.jsxs)("div", {
                                    className: "jsx-d0fb98a0b853be6f flex-1",
                                    children: [(0, t.jsx)("h3", {
                                        className: "jsx-d0fb98a0b853be6f text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300",
                                        children: r.title
                                    }), (0, t.jsx)("p", {
                                        className: "jsx-d0fb98a0b853be6f text-background/60 leading-relaxed",
                                        children: r.description
                                    }), e === s && (0, t.jsx)("div", {
                                        className: "jsx-d0fb98a0b853be6f mt-4 h-px bg-background/20 overflow-hidden",
                                        children: (0, t.jsx)("div", {
                                            style: {
                                                animation: "progress 5s linear forwards"
                                            },
                                            className: "jsx-d0fb98a0b853be6f h-full bg-background w-0"
                                        })
                                    })]
                                })]
                            })
                        }, r.number))
                    }), (0, t.jsx)("div", {
                        className: "jsx-d0fb98a0b853be6f lg:sticky lg:top-32 self-start",
                        children: (0, t.jsxs)("div", {
                            className: "jsx-d0fb98a0b853be6f border border-background/10 overflow-hidden",
                            children: [(0, t.jsxs)("div", {
                                className: "jsx-d0fb98a0b853be6f px-6 py-4 border-b border-background/10 flex items-center justify-between",
                                children: [(0, t.jsxs)("div", {
                                    className: "jsx-d0fb98a0b853be6f flex gap-2",
                                    children: [(0, t.jsx)("div", {
                                        className: "jsx-d0fb98a0b853be6f w-3 h-3 rounded-full bg-background/20"
                                    }), (0, t.jsx)("div", {
                                        className: "jsx-d0fb98a0b853be6f w-3 h-3 rounded-full bg-background/20"
                                    }), (0, t.jsx)("div", {
                                        className: "jsx-d0fb98a0b853be6f w-3 h-3 rounded-full bg-background/20"
                                    })]
                                }), (0, t.jsx)("span", {
                                    className: "jsx-d0fb98a0b853be6f text-xs font-mono text-background/40",
                                    children: "workflow.ts"
                                })]
                            }), (0, t.jsx)("div", {
                                className: "jsx-d0fb98a0b853be6f p-8 font-mono text-sm min-h-[280px]",
                                children: (0, t.jsx)("pre", {
                                    className: "jsx-d0fb98a0b853be6f text-background/70",
                                    children: n[e].code.split("\n").map((r, s) => (0, t.jsxs)("div", {
                                        style: {
                                            animationDelay: `${80*s}ms`
                                        },
                                        className: "jsx-d0fb98a0b853be6f leading-loose code-line-reveal",
                                        children: [(0, t.jsx)("span", {
                                            className: "jsx-d0fb98a0b853be6f text-background/20 select-none w-8 inline-block",
                                            children: s + 1
                                        }), (0, t.jsx)("span", {
                                            className: "jsx-d0fb98a0b853be6f inline-flex",
                                            children: r.split("").map((r, n) => (0, t.jsx)("span", {
                                                style: {
                                                    animationDelay: `${80*s+15*n}ms`
                                                },
                                                className: "jsx-d0fb98a0b853be6f code-char-reveal",
                                                children: " " === r ? " " : r
                                            }, `${e}-${s}-${n}`))
                                        })]
                                    }, `${e}-${s}`))
                                })
                            }), (0, t.jsxs)("div", {
                                className: "jsx-d0fb98a0b853be6f px-6 py-4 border-t border-background/10 flex items-center gap-3",
                                children: [(0, t.jsx)("span", {
                                    className: "jsx-d0fb98a0b853be6f w-2 h-2 rounded-full bg-green-400 animate-pulse"
                                }), (0, t.jsx)("span", {
                                    className: "jsx-d0fb98a0b853be6f text-xs font-mono text-background/40",
                                    children: "Ready"
                                })]
                            })]
                        })
                    })]
                })]
            }), (0, t.jsx)(r.default, {
                id: "d0fb98a0b853be6f",
                children: "@keyframes progress{0%{width:0%}to{width:100%}}.code-line-reveal.jsx-d0fb98a0b853be6f{opacity:0;animation:.4s cubic-bezier(.22,1,.36,1) forwards lineReveal;transform:translate(-8px)}@keyframes lineReveal{to{opacity:1;transform:translate(0)}}.code-char-reveal.jsx-d0fb98a0b853be6f{opacity:0;filter:blur(8px);animation:.3s cubic-bezier(.22,1,.36,1) forwards charReveal}@keyframes charReveal{to{opacity:1;filter:blur()}}"
            })]
        })
    }
    e.s(["HowItWorksSection", () => a])
}, 80272, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    let s = [{
        city: "San Francisco",
        region: "US West",
        latency: "12ms"
    }, {
        city: "New York",
        region: "US East",
        latency: "18ms"
    }, {
        city: "London",
        region: "Europe",
        latency: "24ms"
    }, {
        city: "Tokyo",
        region: "Asia Pacific",
        latency: "32ms"
    }, {
        city: "Sydney",
        region: "Oceania",
        latency: "45ms"
    }, {
        city: "Sao Paulo",
        region: "South America",
        latency: "38ms"
    }];

    function n() {
        let [e, n] = (0, r.useState)(!1), [a, o] = (0, r.useState)(0), i = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                e.isIntersecting && n(!0)
            }, {
                threshold: .1
            });
            return i.current && e.observe(i.current), () => e.disconnect()
        }, []), (0, r.useEffect)(() => {
            let e = setInterval(() => {
                o(e => (e + 1) % s.length)
            }, 2e3);
            return () => clearInterval(e)
        }, []), (0, t.jsx)("section", {
            ref: i,
            className: "relative py-24 lg:py-32 overflow-hidden",
            children: (0, t.jsx)("div", {
                className: "max-w-[1400px] mx-auto px-6 lg:px-12",
                children: (0, t.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center",
                    children: [(0, t.jsxs)("div", {
                        className: `transition-all duration-700 ${e?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"}`,
                        children: [(0, t.jsxs)("span", {
                            className: "inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6",
                            children: [(0, t.jsx)("span", {
                                className: "w-8 h-px bg-foreground/30"
                            }), "Infrastructure"]
                        }), (0, t.jsxs)("h2", {
                            className: "text-4xl lg:text-6xl font-display tracking-tight mb-8",
                            children: ["Global by", (0, t.jsx)("br", {}), "default."]
                        }), (0, t.jsx)("p", {
                            className: "text-xl text-muted-foreground leading-relaxed mb-12",
                            children: "Deploy once, run everywhere. Our edge network spans 17 data centers across 6 continents, delivering sub-50ms latency to 99% of the world."
                        }), (0, t.jsxs)("div", {
                            className: "grid grid-cols-3 gap-8",
                            children: [(0, t.jsxs)("div", {
                                children: [(0, t.jsx)("div", {
                                    className: "text-4xl lg:text-5xl font-display mb-2",
                                    children: "17"
                                }), (0, t.jsx)("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Data centers"
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("div", {
                                    className: "text-4xl lg:text-5xl font-display mb-2",
                                    children: "99.99%"
                                }), (0, t.jsx)("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Uptime SLA"
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("div", {
                                    className: "text-4xl lg:text-5xl font-display mb-2",
                                    children: "<50ms"
                                }), (0, t.jsx)("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Global latency"
                                })]
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: `transition-all duration-700 delay-200 ${e?"opacity-100 translate-x-0":"opacity-0 translate-x-8"}`,
                        children: (0, t.jsxs)("div", {
                            className: "border border-foreground/10",
                            children: [(0, t.jsxs)("div", {
                                className: "px-6 py-4 border-b border-foreground/10 flex items-center justify-between",
                                children: [(0, t.jsx)("span", {
                                    className: "text-sm font-mono text-muted-foreground",
                                    children: "Edge Network"
                                }), (0, t.jsxs)("span", {
                                    className: "flex items-center gap-2 text-xs font-mono text-green-600",
                                    children: [(0, t.jsx)("span", {
                                        className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                    }), "All operational"]
                                })]
                            }), (0, t.jsx)("div", {
                                children: s.map((e, r) => (0, t.jsxs)("div", {
                                    className: `px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${a===r?"bg-foreground/[0.02]":""}`,
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [(0, t.jsx)("span", {
                                            className: `w-2 h-2 rounded-full transition-colors duration-300 ${a===r?"bg-foreground":"bg-foreground/20"}`
                                        }), (0, t.jsxs)("div", {
                                            children: [(0, t.jsx)("div", {
                                                className: "font-medium",
                                                children: e.city
                                            }), (0, t.jsx)("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: e.region
                                            })]
                                        })]
                                    }), (0, t.jsx)("span", {
                                        className: "font-mono text-sm text-muted-foreground",
                                        children: e.latency
                                    })]
                                }, e.city))
                            })]
                        })
                    })]
                })
            })
        })
    }
    e.s(["InfrastructureSection", () => n])
}, 68194, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);

    function s({
        end: e,
        suffix: s = "",
        prefix: n = ""
    }) {
        let [a, o] = (0, r.useState)(0), i = (0, r.useRef)(null), [l, d] = (0, r.useState)(!1);
        return (0, r.useEffect)(() => {
            let t = new IntersectionObserver(([t]) => {
                if (t.isIntersecting && !l) {
                    d(!0);
                    let t = performance.now(),
                        r = s => {
                            let n = Math.min((s - t) / 2e3, 1);
                            o(Math.floor((1 - Math.pow(1 - n, 3)) * e)), n < 1 && requestAnimationFrame(r)
                        };
                    requestAnimationFrame(r)
                }
            }, {
                threshold: .5
            });
            return i.current && t.observe(i.current), () => t.disconnect()
        }, [e, l]), (0, t.jsxs)("div", {
            ref: i,
            className: "text-6xl lg:text-8xl font-display tracking-tight",
            children: [n, a.toLocaleString(), s]
        })
    }
    let n = [{
        value: 2847392,
        suffix: "",
        prefix: "",
        label: "API requests today"
    }, {
        value: 99,
        suffix: ".99%",
        prefix: "",
        label: "Uptime this quarter"
    }, {
        value: 23,
        suffix: "ms",
        prefix: "",
        label: "Average response time"
    }, {
        value: 184,
        suffix: "",
        prefix: "",
        label: "Countries served"
    }];

    function a() {
        let [e, a] = (0, r.useState)(new Date), [o, i] = (0, r.useState)(!1), l = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let e = setInterval(() => a(new Date), 1e3);
            return () => clearInterval(e)
        }, []), (0, r.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                e.isIntersecting && i(!0)
            }, {
                threshold: .1
            });
            return l.current && e.observe(l.current), () => e.disconnect()
        }, []), (0, t.jsx)("section", {
            id: "studio",
            ref: l,
            className: "relative py-24 lg:py-32 border-y border-foreground/10",
            children: (0, t.jsxs)("div", {
                className: "max-w-[1400px] mx-auto px-6 lg:px-12",
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("span", {
                            className: "inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6",
                            children: [(0, t.jsx)("span", {
                                className: "w-8 h-px bg-foreground/30"
                            }), "Live metrics"]
                        }), (0, t.jsxs)("h2", {
                            className: `text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,
                            children: ["Performance you", (0, t.jsx)("br", {}), "can measure."]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center gap-4 font-mono text-sm text-muted-foreground",
                        children: [(0, t.jsxs)("span", {
                            className: "flex items-center gap-2",
                            children: [(0, t.jsx)("span", {
                                className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                            }), "Live"]
                        }), (0, t.jsx)("span", {
                            className: "text-foreground/30",
                            children: "|"
                        }), (0, t.jsx)("span", {
                            children: e.toLocaleTimeString()
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10",
                    children: n.map((e, r) => (0, t.jsxs)("div", {
                        className: `bg-background p-8 lg:p-12 transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,
                        style: {
                            transitionDelay: `${100*r}ms`
                        },
                        children: [(0, t.jsx)(s, {
                            end: "number" == typeof e.value ? e.value : 0,
                            suffix: e.suffix,
                            prefix: e.prefix
                        }), (0, t.jsx)("div", {
                            className: "mt-4 text-lg text-muted-foreground",
                            children: e.label
                        })]
                    }, e.label))
                })]
            })
        })
    }
    e.s(["MetricsSection", () => a])
}, 74605, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    let s = [{
        name: "GitHub",
        category: "Version Control"
    }, {
        name: "Slack",
        category: "Communication"
    }, {
        name: "Stripe",
        category: "Payments"
    }, {
        name: "PostgreSQL",
        category: "Database"
    }, {
        name: "Redis",
        category: "Cache"
    }, {
        name: "AWS",
        category: "Cloud"
    }, {
        name: "MongoDB",
        category: "Database"
    }, {
        name: "Vercel",
        category: "Hosting"
    }, {
        name: "Figma",
        category: "Design"
    }, {
        name: "Linear",
        category: "Project Management"
    }, {
        name: "Notion",
        category: "Documentation"
    }, {
        name: "OpenAI",
        category: "AI/ML"
    }];

    function n() {
        let [e, n] = (0, r.useState)(!1), a = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                e.isIntersecting && n(!0)
            }, {
                threshold: .1
            });
            return a.current && e.observe(a.current), () => e.disconnect()
        }, []), (0, t.jsxs)("section", {
            id: "integrations",
            ref: a,
            className: "relative py-24 lg:py-32 overflow-hidden",
            children: [(0, t.jsx)("div", {
                className: "max-w-[1400px] mx-auto px-6 lg:px-12",
                children: (0, t.jsxs)("div", {
                    className: `text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,
                    children: [(0, t.jsxs)("span", {
                        className: "inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6",
                        children: [(0, t.jsx)("span", {
                            className: "w-8 h-px bg-foreground/30"
                        }), "Integrations", (0, t.jsx)("span", {
                            className: "w-8 h-px bg-foreground/30"
                        })]
                    }), (0, t.jsxs)("h2", {
                        className: "text-4xl lg:text-6xl font-display tracking-tight mb-6",
                        children: ["Works with everything", (0, t.jsx)("br", {}), "you already use."]
                    }), (0, t.jsx)("p", {
                        className: "text-xl text-muted-foreground",
                        children: "200+ pre-built integrations. Connect your entire stack in minutes."
                    })]
                })
            }), (0, t.jsx)("div", {
                className: "w-full mb-6",
                children: (0, t.jsx)("div", {
                    className: "flex gap-6 marquee",
                    children: [void 0, void 0].map((e, r) => (0, t.jsx)("div", {
                        className: "flex gap-6 shrink-0",
                        children: s.map(e => (0, t.jsxs)("div", {
                            className: "shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group",
                            children: [(0, t.jsx)("div", {
                                className: "text-lg font-medium group-hover:translate-x-1 transition-transform",
                                children: e.name
                            }), (0, t.jsx)("div", {
                                className: "text-sm text-muted-foreground",
                                children: e.category
                            })]
                        }, `${e.name}-${r}`))
                    }, r))
                })
            }), (0, t.jsx)("div", {
                className: "w-full",
                children: (0, t.jsx)("div", {
                    className: "flex gap-6 marquee-reverse",
                    children: [void 0, void 0].map((e, r) => (0, t.jsx)("div", {
                        className: "flex gap-6 shrink-0",
                        children: [...s].reverse().map(e => (0, t.jsxs)("div", {
                            className: "shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group",
                            children: [(0, t.jsx)("div", {
                                className: "text-lg font-medium group-hover:translate-x-1 transition-transform",
                                children: e.name
                            }), (0, t.jsx)("div", {
                                className: "text-sm text-muted-foreground",
                                children: e.category
                            })]
                        }, `${e.name}-reverse-${r}`))
                    }, r))
                })
            })]
        })
    }
    e.s(["IntegrationsSection", () => n])
}, 21594, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        s = e.i(75254);
    let n = [{
            icon: (0, s.default)("Shield", [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                    key: "oel41y"
                }]
            ]),
            title: "SOC 2 Type II",
            description: "Independently audited security controls with continuous monitoring."
        }, {
            icon: (0, s.default)("Lock", [
                ["rect", {
                    width: "18",
                    height: "11",
                    x: "3",
                    y: "11",
                    rx: "2",
                    ry: "2",
                    key: "1w4ew1"
                }],
                ["path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4",
                    key: "fwvmzm"
                }]
            ]),
            title: "End-to-end encryption",
            description: "AES-256 encryption for data at rest and TLS 1.3 in transit."
        }, {
            icon: (0, s.default)("Eye", [
                ["path", {
                    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
                    key: "1nclc0"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3",
                    key: "1v7zrd"
                }]
            ]),
            title: "Zero-trust architecture",
            description: "Every request is authenticated and authorized. No exceptions."
        }, {
            icon: (0, s.default)("FileCheck", [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
                    key: "1rqfz7"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4",
                    key: "tnqrlb"
                }],
                ["path", {
                    d: "m9 15 2 2 4-4",
                    key: "1grp1n"
                }]
            ]),
            title: "GDPR & HIPAA",
            description: "Full compliance with data protection and healthcare regulations."
        }],
        a = ["SOC 2", "ISO 27001", "HIPAA", "GDPR", "CCPA"];

    function o() {
        let [e, s] = (0, r.useState)(!1), o = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                e.isIntersecting && s(!0)
            }, {
                threshold: .1
            });
            return o.current && e.observe(o.current), () => e.disconnect()
        }, []), (0, t.jsx)("section", {
            id: "security",
            ref: o,
            className: "relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden",
            children: (0, t.jsx)("div", {
                className: "max-w-[1400px] mx-auto px-6 lg:px-12",
                children: (0, t.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-16 lg:gap-24",
                    children: [(0, t.jsxs)("div", {
                        className: `transition-all duration-700 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,
                        children: [(0, t.jsxs)("span", {
                            className: "inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6",
                            children: [(0, t.jsx)("span", {
                                className: "w-8 h-px bg-foreground/30"
                            }), "Security"]
                        }), (0, t.jsxs)("h2", {
                            className: "text-4xl lg:text-6xl font-display tracking-tight mb-8",
                            children: ["Trust is", (0, t.jsx)("br", {}), "non-negotiable."]
                        }), (0, t.jsx)("p", {
                            className: "text-xl text-muted-foreground leading-relaxed mb-12",
                            children: "Enterprise-grade security isn't optional. It's built into every layer of our platform, from infrastructure to application."
                        }), (0, t.jsx)("div", {
                            className: "flex flex-wrap gap-3",
                            children: a.map((r, s) => (0, t.jsx)("span", {
                                className: `px-4 py-2 border border-foreground/10 text-sm font-mono transition-all duration-500 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,
                                style: {
                                    transitionDelay: `${50*s+200}ms`
                                },
                                children: r
                            }, r))
                        })]
                    }), (0, t.jsx)("div", {
                        className: "grid gap-6",
                        children: n.map((r, s) => (0, t.jsx)("div", {
                            className: `p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${e?"opacity-100 translate-x-0":"opacity-0 translate-x-8"}`,
                            style: {
                                transitionDelay: `${100*s}ms`
                            },
                            children: (0, t.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [(0, t.jsx)("div", {
                                    className: "shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300",
                                    children: (0, t.jsx)(r.icon, {
                                        className: "w-5 h-5"
                                    })
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("h3", {
                                        className: "text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300",
                                        children: r.title
                                    }), (0, t.jsx)("p", {
                                        className: "text-muted-foreground",
                                        children: r.description
                                    })]
                                })]
                            })
                        }, r.title))
                    })]
                })
            })
        })
    }
    e.s(["SecuritySection", () => o], 21594)
}, 43531, e => {
    "use strict";
    let t = (0, e.i(75254).default)("Check", [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ]);
    e.s(["Check", () => t], 43531)
}, 87875, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    let s = (0, e.i(75254).default)("Copy", [
        ["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }],
        ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }]
    ]);
    var n = e.i(43531);
    let a = [{
            label: "Install",
            code: `npm install @optimus/sdk

# or
yarn add @optimus/sdk
pnpm add @optimus/sdk`
        }, {
            label: "Initialize",
            code: `import { Optimus } from '@optimus/sdk'

const optimus = new Optimus({
  apiKey: process.env.OPTIMUS_KEY
})`
        }, {
            label: "Deploy",
            code: `const app = await optimus.deploy({
  name: 'my-app',
  region: 'auto',
  scaling: {
    min: 1,
    max: 100
  }
})

console.log('Live at:', app.url)`
        }],
        o = [{
            title: "TypeScript native",
            description: "Full type safety with auto-generated types."
        }, {
            title: "Zero config",
            description: "Sensible defaults that just work."
        }, {
            title: "Edge-ready",
            description: "Runs anywhere: Node, Deno, Bun, browsers."
        }, {
            title: "12KB gzipped",
            description: "Lightweight with zero dependencies."
        }],
        i = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

    function l() {
        let [e, l] = (0, r.useState)(0), [d, c] = (0, r.useState)(!1), [u, m] = (0, r.useState)(!1), p = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                e.isIntersecting && m(!0)
            }, {
                threshold: .1
            });
            return p.current && e.observe(p.current), () => e.disconnect()
        }, []), (0, t.jsxs)("section", {
            id: "developers",
            ref: p,
            className: "relative py-24 lg:py-32 overflow-hidden",
            children: [(0, t.jsx)("style", {
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }), (0, t.jsx)("div", {
                className: "max-w-[1400px] mx-auto px-6 lg:px-12",
                children: (0, t.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-start",
                    children: [(0, t.jsxs)("div", {
                        className: `transition-all duration-700 ${u?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,
                        children: [(0, t.jsxs)("span", {
                            className: "inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6",
                            children: [(0, t.jsx)("span", {
                                className: "w-8 h-px bg-foreground/30"
                            }), "For developers"]
                        }), (0, t.jsxs)("h2", {
                            className: "text-4xl lg:text-6xl font-display tracking-tight mb-8",
                            children: ["Built by devs.", (0, t.jsx)("br", {}), (0, t.jsx)("span", {
                                className: "text-muted-foreground",
                                children: "For devs."
                            })]
                        }), (0, t.jsx)("p", {
                            className: "text-xl text-muted-foreground mb-12 leading-relaxed",
                            children: "A thoughtfully designed SDK that gets out of your way. Ship faster with intuitive APIs and exceptional documentation."
                        }), (0, t.jsx)("div", {
                            className: "grid grid-cols-2 gap-6",
                            children: o.map((e, r) => (0, t.jsxs)("div", {
                                className: `transition-all duration-500 ${u?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,
                                style: {
                                    transitionDelay: `${50*r+200}ms`
                                },
                                children: [(0, t.jsx)("h3", {
                                    className: "font-medium mb-1",
                                    children: e.title
                                }), (0, t.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: e.description
                                })]
                            }, e.title))
                        })]
                    }), (0, t.jsxs)("div", {
                        className: `lg:sticky lg:top-32 transition-all duration-700 delay-200 ${u?"opacity-100 translate-x-0":"opacity-0 translate-x-8"}`,
                        children: [(0, t.jsxs)("div", {
                            className: "border border-foreground/10",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center border-b border-foreground/10",
                                children: [a.map((r, s) => (0, t.jsxs)("button", {
                                    type: "button",
                                    onClick: () => l(s),
                                    className: `px-6 py-4 text-sm font-mono transition-colors relative ${e===s?"text-foreground":"text-muted-foreground hover:text-foreground"}`,
                                    children: [r.label, e === s && (0, t.jsx)("span", {
                                        className: "absolute bottom-0 left-0 right-0 h-px bg-foreground"
                                    })]
                                }, r.label)), (0, t.jsx)("div", {
                                    className: "flex-1"
                                }), (0, t.jsx)("button", {
                                    type: "button",
                                    onClick: () => {
                                        navigator.clipboard.writeText(a[e].code), c(!0), setTimeout(() => c(!1), 2e3)
                                    },
                                    className: "px-4 py-4 text-muted-foreground hover:text-foreground transition-colors",
                                    "aria-label": "Copy code",
                                    children: d ? (0, t.jsx)(n.Check, {
                                        className: "w-4 h-4 text-green-600"
                                    }) : (0, t.jsx)(s, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            }), (0, t.jsx)("div", {
                                className: "p-8 font-mono text-sm bg-foreground/[0.01] min-h-[220px]",
                                children: (0, t.jsx)("pre", {
                                    className: "text-foreground/80",
                                    children: a[e].code.split("\n").map((r, s) => (0, t.jsx)("div", {
                                        className: "leading-loose dev-code-line",
                                        style: {
                                            animationDelay: `${80*s}ms`
                                        },
                                        children: (0, t.jsx)("span", {
                                            className: "inline-flex",
                                            children: r.split("").map((r, n) => (0, t.jsx)("span", {
                                                className: "dev-code-char",
                                                style: {
                                                    animationDelay: `${80*s+15*n}ms`
                                                },
                                                children: " " === r ? " " : r
                                            }, `${e}-${s}-${n}`))
                                        })
                                    }, `${e}-${s}`))
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "mt-6 flex items-center gap-6 text-sm",
                            children: [(0, t.jsx)("a", {
                                href: "#",
                                className: "text-foreground hover:underline underline-offset-4",
                                children: "Read the docs"
                            }), (0, t.jsx)("span", {
                                className: "text-foreground/20",
                                children: "|"
                            }), (0, t.jsx)("a", {
                                href: "#",
                                className: "text-muted-foreground hover:text-foreground",
                                children: "View on GitHub"
                            })]
                        })]
                    })]
                })
            })]
        })
    }
    e.s(["DevelopersSection", () => l], 87875)
}, 17851, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    let s = [{
        quote: "Optimus transformed our deployment pipeline. What used to take hours now happens in seconds.",
        author: "Sarah Chen",
        role: "CTO",
        company: "Meridian Labs",
        metric: "10x faster deployments"
    }, {
        quote: "The developer experience is unmatched. Our team's productivity has never been higher.",
        author: "Marcus Webb",
        role: "Engineering Lead",
        company: "Flux Systems",
        metric: "40% more features shipped"
    }, {
        quote: "Finally, infrastructure that scales with our ambition. Zero downtime since we switched.",
        author: "Elena Rodriguez",
        role: "VP Engineering",
        company: "Beacon AI",
        metric: "99.99% uptime"
    }, {
        quote: "The integrations are seamless. We connected our entire stack in a single afternoon.",
        author: "James Liu",
        role: "Founder",
        company: "Prism Analytics",
        metric: "50+ integrations used"
    }];

    function n() {
        let [e, n] = (0, r.useState)(0), [a, o] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
            let e = setInterval(() => {
                o(!0), setTimeout(() => {
                    n(e => (e + 1) % s.length), o(!1)
                }, 300)
            }, 5e3);
            return () => clearInterval(e)
        }, []);
        let i = s[e];
        return (0, t.jsxs)("section", {
            className: "relative py-32 lg:py-40 border-t border-foreground/10 lg:pb-14",
            children: [(0, t.jsxs)("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [(0, t.jsxs)("div", {
                    className: "flex items-center gap-4 mb-16",
                    children: [(0, t.jsx)("span", {
                        className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
                        children: "What people say"
                    }), (0, t.jsx)("div", {
                        className: "flex-1 h-px bg-foreground/10"
                    }), (0, t.jsxs)("span", {
                        className: "font-mono text-xs text-muted-foreground",
                        children: [String(e + 1).padStart(2, "0"), " / ", String(s.length).padStart(2, "0")]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "grid lg:grid-cols-12 gap-12 lg:gap-20",
                    children: [(0, t.jsxs)("div", {
                        className: "lg:col-span-8",
                        children: [(0, t.jsx)("blockquote", {
                            className: `transition-all duration-300 ${a?"opacity-0 translate-y-4":"opacity-100 translate-y-0"}`,
                            children: (0, t.jsxs)("p", {
                                className: "font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground",
                                children: ['"', i.quote, '"']
                            })
                        }), (0, t.jsxs)("div", {
                            className: `mt-12 flex items-center gap-6 transition-all duration-300 delay-100 ${a?"opacity-0":"opacity-100"}`,
                            children: [(0, t.jsx)("div", {
                                className: "w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center",
                                children: (0, t.jsx)("span", {
                                    className: "font-display text-2xl text-foreground",
                                    children: i.author.charAt(0)
                                })
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("p", {
                                    className: "text-lg font-medium text-foreground",
                                    children: i.author
                                }), (0, t.jsxs)("p", {
                                    className: "text-muted-foreground",
                                    children: [i.role, ", ", i.company]
                                })]
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "lg:col-span-4 flex flex-col justify-center",
                        children: [(0, t.jsxs)("div", {
                            className: `p-8 border border-foreground/10 transition-all duration-300 ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,
                            children: [(0, t.jsx)("span", {
                                className: "font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4",
                                children: "Key Result"
                            }), (0, t.jsx)("p", {
                                className: "font-display text-3xl md:text-4xl text-foreground",
                                children: i.metric
                            })]
                        }), (0, t.jsx)("div", {
                            className: "flex gap-2 mt-8",
                            children: s.map((r, s) => (0, t.jsx)("button", {
                                onClick: () => {
                                    o(!0), setTimeout(() => {
                                        n(s), o(!1)
                                    }, 300)
                                },
                                className: `h-2 transition-all duration-300 ${s===e?"w-8 bg-foreground":"w-2 bg-foreground/20 hover:bg-foreground/40"}`
                            }, s))
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "mt-24 pt-12 border-t border-foreground/10",
                    children: (0, t.jsx)("p", {
                        className: "font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center",
                        children: "Trusted by forward-thinking teams"
                    })
                })]
            }), (0, t.jsx)("div", {
                className: "w-full",
                children: (0, t.jsx)("div", {
                    className: "flex gap-16 items-center marquee",
                    children: [void 0, void 0].map((e, r) => (0, t.jsx)("div", {
                        className: "flex gap-16 items-center shrink-0",
                        children: ["Meridian Labs", "Flux Systems", "Beacon AI", "Prism Analytics", "Nova Tech", "Quantum Corp", "Atlas Digital", "Vertex Labs"].map(e => (0, t.jsx)("span", {
                            className: "font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300",
                            children: e
                        }, `${r}-${e}`))
                    }, r))
                })
            })]
        })
    }
    e.s(["TestimonialsSection", () => n])
}, 23191, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        s = e.i(72520),
        n = e.i(43531);
    let a = [{
        name: "Starter",
        description: "For individuals and small projects",
        price: {
            monthly: 0,
            annual: 0
        },
        features: ["Up to 3 projects", "1GB storage", "Community support", "Basic analytics", "SSL certificates"],
        cta: "Start free",
        popular: !1
    }, {
        name: "Pro",
        description: "For growing teams and businesses",
        price: {
            monthly: 29,
            annual: 24
        },
        features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domains", "Team collaboration", "API access"],
        cta: "Start trial",
        popular: !0
    }, {
        name: "Enterprise",
        description: "For large-scale operations",
        price: {
            monthly: null,
            annual: null
        },
        features: ["Everything in Pro", "Unlimited storage", "24/7 dedicated support", "Custom integrations", "SLA guarantee", "On-premise option", "Security audit", "Custom contracts"],
        cta: "Contact sales",
        popular: !1
    }];

    function o() {
        let [e, o] = (0, r.useState)(!0);
        return (0, t.jsx)("section", {
            id: "pricing",
            className: "relative py-32 lg:py-40 border-t border-foreground/10",
            children: (0, t.jsxs)("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [(0, t.jsxs)("div", {
                    className: "max-w-3xl mb-20",
                    children: [(0, t.jsx)("span", {
                        className: "font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6",
                        children: "Pricing"
                    }), (0, t.jsxs)("h2", {
                        className: "font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6",
                        children: ["Simple, transparent", (0, t.jsx)("br", {}), (0, t.jsx)("span", {
                            className: "text-stroke",
                            children: "pricing"
                        })]
                    }), (0, t.jsx)("p", {
                        className: "text-lg text-muted-foreground max-w-xl",
                        children: "Start free and scale as you grow. No hidden fees, no surprises."
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-4 mb-16",
                    children: [(0, t.jsx)("span", {
                        className: `text-sm transition-colors ${!e?"text-foreground":"text-muted-foreground"}`,
                        children: "Monthly"
                    }), (0, t.jsx)("button", {
                        onClick: () => o(!e),
                        className: "relative w-14 h-7 bg-foreground/10 rounded-full p-1 transition-colors hover:bg-foreground/20",
                        children: (0, t.jsx)("div", {
                            className: `w-5 h-5 bg-foreground rounded-full transition-transform duration-300 ${e?"translate-x-7":"translate-x-0"}`
                        })
                    }), (0, t.jsx)("span", {
                        className: `text-sm transition-colors ${e?"text-foreground":"text-muted-foreground"}`,
                        children: "Annual"
                    }), e && (0, t.jsx)("span", {
                        className: "ml-2 px-2 py-1 bg-foreground text-primary-foreground text-xs font-mono",
                        children: "Save 17%"
                    })]
                }), (0, t.jsx)("div", {
                    className: "grid md:grid-cols-3 gap-px bg-foreground/10",
                    children: a.map((r, a) => (0, t.jsxs)("div", {
                        className: `relative p-8 lg:p-12 bg-background ${r.popular?"md:-my-4 md:py-12 lg:py-16 border-2 border-foreground":""}`,
                        children: [r.popular && (0, t.jsx)("span", {
                            className: "absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest",
                            children: "Most Popular"
                        }), (0, t.jsxs)("div", {
                            className: "mb-8",
                            children: [(0, t.jsx)("span", {
                                className: "font-mono text-xs text-muted-foreground",
                                children: String(a + 1).padStart(2, "0")
                            }), (0, t.jsx)("h3", {
                                className: "font-display text-3xl text-foreground mt-2",
                                children: r.name
                            }), (0, t.jsx)("p", {
                                className: "text-sm text-muted-foreground mt-2",
                                children: r.description
                            })]
                        }), (0, t.jsx)("div", {
                            className: "mb-8 pb-8 border-b border-foreground/10",
                            children: null !== r.price.monthly ? (0, t.jsxs)("div", {
                                className: "flex items-baseline gap-2",
                                children: [(0, t.jsxs)("span", {
                                    className: "font-display text-5xl lg:text-6xl text-foreground",
                                    children: ["$", e ? r.price.annual : r.price.monthly]
                                }), (0, t.jsx)("span", {
                                    className: "text-muted-foreground",
                                    children: "/month"
                                })]
                            }) : (0, t.jsx)("span", {
                                className: "font-display text-4xl text-foreground",
                                children: "Custom"
                            })
                        }), (0, t.jsx)("ul", {
                            className: "space-y-4 mb-10",
                            children: r.features.map(e => (0, t.jsxs)("li", {
                                className: "flex items-start gap-3",
                                children: [(0, t.jsx)(n.Check, {
                                    className: "w-4 h-4 text-foreground mt-0.5 shrink-0"
                                }), (0, t.jsx)("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: e
                                })]
                            }, e))
                        }), (0, t.jsxs)("button", {
                            className: `w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${r.popular?"bg-foreground text-primary-foreground hover:bg-foreground/90":"border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"}`,
                            children: [r.cta, (0, t.jsx)(s.ArrowRight, {
                                className: "w-4 h-4 transition-transform group-hover:translate-x-1"
                            })]
                        })]
                    }, r.name))
                }), (0, t.jsxs)("p", {
                    className: "mt-12 text-center text-sm text-muted-foreground",
                    children: ["All plans include automatic updates, HTTPS, and DDoS protection.", " ", (0, t.jsx)("a", {
                        href: "#",
                        className: "underline underline-offset-4 hover:text-foreground transition-colors",
                        children: "Compare all features"
                    })]
                })]
            })
        })
    }
    e.s(["PricingSection", () => o])
}, 12338, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        s = e.i(67881),
        n = e.i(72520);

    function a() {
        let e = (0, r.useRef)(null),
            s = (0, r.useRef)(0);
        return (0, r.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let r = t.getContext("2d");
            if (!r) return;
            let n = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯",
                a = 0,
                o = () => {
                    let e = window.devicePixelRatio || 1,
                        s = t.getBoundingClientRect();
                    t.width = s.width * e, t.height = s.height * e, r.scale(e, e)
                };
            o(), window.addEventListener("resize", o);
            let i = [{
                    x: 0,
                    y: 1,
                    z: 0
                }, {
                    x: -.943,
                    y: -.333,
                    z: -.5
                }, {
                    x: .943,
                    y: -.333,
                    z: -.5
                }, {
                    x: 0,
                    y: -.333,
                    z: 1
                }],
                l = [
                    [0, 1],
                    [0, 2],
                    [0, 3],
                    [1, 2],
                    [2, 3],
                    [3, 1]
                ],
                d = [
                    [0, 1, 2],
                    [0, 2, 3],
                    [0, 3, 1],
                    [1, 3, 2]
                ],
                c = (e, t) => ({
                    x: e.x * Math.cos(t) - e.z * Math.sin(t),
                    y: e.y,
                    z: e.x * Math.sin(t) + e.z * Math.cos(t)
                }),
                u = (e, t) => ({
                    x: e.x,
                    y: e.y * Math.cos(t) - e.z * Math.sin(t),
                    z: e.y * Math.sin(t) + e.z * Math.cos(t)
                }),
                m = (e, t) => ({
                    x: e.x * Math.cos(t) - e.y * Math.sin(t),
                    y: e.x * Math.sin(t) + e.y * Math.cos(t),
                    z: e.z
                }),
                p = () => {
                    let e = t.getBoundingClientRect();
                    r.clearRect(0, 0, e.width, e.height);
                    let o = e.width / 2,
                        x = e.height / 2,
                        h = .7 * Math.min(e.width, e.height);
                    r.font = "18px monospace", r.textAlign = "center", r.textBaseline = "middle";
                    let f = [];
                    l.forEach(([e, t]) => {
                        let r = i[e],
                            s = i[t];
                        for (let e = 0; e <= 1; e += .05) {
                            let t = {
                                    x: r.x + (s.x - r.x) * e,
                                    y: r.y + (s.y - r.y) * e,
                                    z: r.z + (s.z - r.z) * e
                                },
                                i = Math.floor(((t = m(t = u(t = c(t, .4 * a), .3 * a), .2 * a)).z + 1.5) / 3 * (n.length - 1));
                            f.push({
                                x: o + t.x * h,
                                y: x - t.y * h,
                                z: t.z,
                                char: n[Math.min(i, n.length - 1)]
                            })
                        }
                    }), d.forEach(([e, t, r]) => {
                        let s = i[e],
                            l = i[t],
                            d = i[r];
                        for (let e = 0; e <= 1; e += .12)
                            for (let t = 0; t <= 1 - e; t += .12) {
                                let r = 1 - e - t,
                                    i = {
                                        x: s.x * e + l.x * t + d.x * r,
                                        y: s.y * e + l.y * t + d.y * r,
                                        z: s.z * e + l.z * t + d.z * r
                                    },
                                    p = Math.floor(((i = m(i = u(i = c(i, .4 * a), .3 * a), .2 * a)).z + 1.5) / 3 * (n.length - 1));
                                f.push({
                                    x: o + i.x * h,
                                    y: x - i.y * h,
                                    z: i.z,
                                    char: n[Math.min(p, n.length - 1)]
                                })
                            }
                    }), f.sort((e, t) => e.z - t.z), f.forEach(e => {
                        let t = .15 + (e.z + 1.5) * .25;
                        r.fillStyle = `rgba(0, 0, 0, ${Math.min(t,.9)})`, r.fillText(e.char, e.x, e.y)
                    }), a += .015, s.current = requestAnimationFrame(p)
                };
            return p(), () => {
                window.removeEventListener("resize", o), cancelAnimationFrame(s.current)
            }
        }, []), (0, t.jsx)("canvas", {
            ref: e,
            className: "w-full h-full",
            style: {
                display: "block"
            }
        })
    }

    function o() {
        let [e, o] = (0, r.useState)(!1), i = (0, r.useRef)(null), [l, d] = (0, r.useState)({
            x: 0,
            y: 0
        });
        return (0, r.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                e.isIntersecting && o(!0)
            }, {
                threshold: .2
            });
            return i.current && e.observe(i.current), () => e.disconnect()
        }, []), (0, t.jsx)("section", {
            ref: i,
            className: "relative py-24 lg:py-32 overflow-hidden",
            children: (0, t.jsx)("div", {
                className: "max-w-[1400px] mx-auto px-6 lg:px-12",
                children: (0, t.jsxs)("div", {
                    className: `relative border border-foreground transition-all duration-1000 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,
                    onMouseMove: e => {
                        let t = e.currentTarget.getBoundingClientRect();
                        d({
                            x: (e.clientX - t.left) / t.width * 100,
                            y: (e.clientY - t.top) / t.height * 100
                        })
                    },
                    children: [(0, t.jsx)("div", {
                        className: "absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300",
                        style: {
                            background: `radial-gradient(600px circle at ${l.x}% ${l.y}%, rgba(0,0,0,0.15), transparent 40%)`
                        }
                    }), (0, t.jsx)("div", {
                        className: "relative z-10 px-8 lg:px-16 py-16 lg:py-24",
                        children: (0, t.jsxs)("div", {
                            className: "flex flex-col lg:flex-row items-center justify-between gap-12",
                            children: [(0, t.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, t.jsxs)("h2", {
                                    className: "text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]",
                                    children: ["Ready to build", (0, t.jsx)("br", {}), "something great?"]
                                }), (0, t.jsx)("p", {
                                    className: "text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl",
                                    children: "Join thousands of teams shipping faster with Optimus. Start free, scale infinitely."
                                }), (0, t.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row items-start gap-4",
                                    children: [(0, t.jsxs)(s.Button, {
                                        size: "lg",
                                        className: "bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group",
                                        children: ["Start building free", (0, t.jsx)(n.ArrowRight, {
                                            className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                        })]
                                    }), (0, t.jsx)(s.Button, {
                                        size: "lg",
                                        variant: "outline",
                                        className: "h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5",
                                        children: "Talk to sales"
                                    })]
                                }), (0, t.jsx)("p", {
                                    className: "text-sm text-muted-foreground mt-8 font-mono",
                                    children: "No credit card required"
                                })]
                            }), (0, t.jsx)("div", {
                                className: "hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16",
                                children: (0, t.jsx)(a, {})
                            })]
                        })
                    }), (0, t.jsx)("div", {
                        className: "absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10"
                    }), (0, t.jsx)("div", {
                        className: "absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10"
                    })]
                })
            })
        })
    }
    e.s(["CtaSection", () => o], 12338)
}, 52975, e => {
    "use strict";
    var t = e.i(43476);
    let r = (0, e.i(75254).default)("ArrowUpRight", [
        ["path", {
            d: "M7 7h10v10",
            key: "1tivn9"
        }],
        ["path", {
            d: "M7 17 17 7",
            key: "1vkiza"
        }]
    ]);
    var s = e.i(71645);

    function n() {
        let e = (0, s.useRef)(null),
            r = (0, s.useRef)(0);
        return (0, s.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let s = t.getContext("2d");
            if (!s) return;
            let n = "·∘○◯◌●◉",
                a = 0,
                o = () => {
                    let e = window.devicePixelRatio || 1,
                        r = t.getBoundingClientRect();
                    t.width = r.width * e, t.height = r.height * e, s.scale(e, e)
                };
            o(), window.addEventListener("resize", o);
            let i = () => {
                let e = t.getBoundingClientRect();
                s.clearRect(0, 0, e.width, e.height), s.font = "14px monospace", s.textAlign = "center", s.textBaseline = "middle";
                let o = Math.floor(e.width / 20),
                    l = Math.floor(e.height / 20);
                for (let t = 0; t < l; t++)
                    for (let r = 0; r < o; r++) {
                        let i = (r + .5) * (e.width / o),
                            d = (t + .5) * (e.height / l),
                            c = ((Math.sin(.2 * r + 2 * a) * Math.cos(.15 * t + a) + Math.sin((r + t) * .1 + 1.5 * a) + Math.cos(.1 * r - .1 * t + .8 * a)) / 3 + 1) / 2,
                            u = Math.floor(c * (n.length - 1)),
                            m = .15 + .5 * c;
                        s.fillStyle = `rgba(0, 0, 0, ${m})`, s.fillText(n[u], i, d)
                    }
                a += .03, r.current = requestAnimationFrame(i)
            };
            return i(), () => {
                window.removeEventListener("resize", o), cancelAnimationFrame(r.current)
            }
        }, []), (0, t.jsx)("canvas", {
            ref: e,
            className: "w-full h-full",
            style: {
                display: "block"
            }
        })
    }
    let a = {
            Product: [{
                name: "Features",
                href: "#features"
            }, {
                name: "How it works",
                href: "#how-it-works"
            }, {
                name: "Pricing",
                href: "#pricing"
            }, {
                name: "Integrations",
                href: "#integrations"
            }],
            Developers: [{
                name: "Documentation",
                href: "#developers"
            }, {
                name: "API Reference",
                href: "#"
            }, {
                name: "SDK",
                href: "#developers"
            }, {
                name: "Status",
                href: "#"
            }],
            Company: [{
                name: "About",
                href: "#"
            }, {
                name: "Blog",
                href: "#"
            }, {
                name: "Careers",
                href: "#",
                badge: "Hiring"
            }, {
                name: "Contact",
                href: "#"
            }],
            Legal: [{
                name: "Privacy",
                href: "#"
            }, {
                name: "Terms",
                href: "#"
            }, {
                name: "Security",
                href: "#security"
            }]
        },
        o = [{
            name: "Twitter",
            href: "#"
        }, {
            name: "GitHub",
            href: "#"
        }, {
            name: "LinkedIn",
            href: "#"
        }];

    function i() {
        return (0, t.jsxs)("footer", {
            className: "relative border-t border-foreground/10",
            children: [(0, t.jsx)("div", {
                className: "absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden",
                children: (0, t.jsx)(n, {})
            }), (0, t.jsxs)("div", {
                className: "relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12",
                children: [(0, t.jsx)("div", {
                    className: "py-16 lg:py-24",
                    children: (0, t.jsxs)("div", {
                        className: "grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8",
                        children: [(0, t.jsxs)("div", {
                            className: "col-span-2",
                            children: [(0, t.jsxs)("a", {
                                href: "#",
                                className: "inline-flex items-center gap-2 mb-6",
                                children: [(0, t.jsx)("span", {
                                    className: "text-2xl font-display",
                                    children: "Optimus"
                                }), (0, t.jsx)("span", {
                                    className: "text-xs text-muted-foreground font-mono",
                                    children: "TM"
                                })]
                            }), (0, t.jsx)("p", {
                                className: "text-muted-foreground leading-relaxed mb-8 max-w-xs",
                                children: "The platform for teams who ship. Build, deploy, and scale with unprecedented velocity."
                            }), (0, t.jsx)("div", {
                                className: "flex gap-6",
                                children: o.map(e => (0, t.jsxs)("a", {
                                    href: e.href,
                                    className: "text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group",
                                    children: [e.name, (0, t.jsx)(r, {
                                        className: "w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                    })]
                                }, e.name))
                            })]
                        }), Object.entries(a).map(([e, r]) => (0, t.jsxs)("div", {
                            children: [(0, t.jsx)("h3", {
                                className: "text-sm font-medium mb-6",
                                children: e
                            }), (0, t.jsx)("ul", {
                                className: "space-y-4",
                                children: r.map(e => (0, t.jsx)("li", {
                                    children: (0, t.jsxs)("a", {
                                        href: e.href,
                                        className: "text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2",
                                        children: [e.name, "badge" in e && e.badge && (0, t.jsx)("span", {
                                            className: "text-xs px-2 py-0.5 bg-foreground text-background rounded-full",
                                            children: e.badge
                                        })]
                                    })
                                }, e.name))
                            })]
                        }, e))]
                    })
                }), (0, t.jsxs)("div", {
                    className: "py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4",
                    children: [(0, t.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children: "2025 Optimus. All rights reserved."
                    }), (0, t.jsx)("div", {
                        className: "flex items-center gap-4 text-sm text-muted-foreground",
                        children: (0, t.jsxs)("span", {
                            className: "flex items-center gap-2",
                            children: [(0, t.jsx)("span", {
                                className: "w-2 h-2 rounded-full bg-green-500"
                            }), "All systems operational"]
                        })
                    })]
                })]
            })]
        })
    }
    e.s(["FooterSection", () => i], 52975)
}]);