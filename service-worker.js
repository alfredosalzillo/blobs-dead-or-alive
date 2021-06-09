const mod9 = (async () => {
    var D = Object.defineProperty;
    var P = (n, e) => {
        for (var r in e)
            D(n, r, { get: e[r], enumerable: !0 });
    };
    var R = {};
    P(R, { CacheFirst: () => k, CacheOnly: () => E, NetworkFirst: () => x, NetworkOnly: () => N, StaleWhileRevalidate: () => $, Strategy: () => l, StrategyHandler: () => h });
    "use strict";
    try {
        self["workbox:core:6.1.5"] && _();
    }
    catch (n) { }
    var W = (n, ...e) => { let r = n; return e.length > 0 && (r += ` :: ${JSON.stringify(e)}`), r; };
    var j = W;
    var c = class extends Error {
        constructor(e, r) { let t = j(e, r); super(t); this.name = e, this.details = r; }
    };
    var p = { googleAnalytics: "googleAnalytics", precache: "precache-v2", prefix: "workbox", runtime: "runtime", suffix: typeof registration != "undefined" ? registration.scope : "" }, y = n => [p.prefix, n, p.suffix].filter(e => e && e.length > 0).join("-"), F = n => {
        for (let e of Object.keys(p))
            n(e);
    }, O = { updateDetails: n => { F(e => { typeof n[e] == "string" && (p[e] = n[e]); }); }, getGoogleAnalyticsName: n => n || y(p.googleAnalytics), getPrecacheName: n => n || y(p.precache), getPrefix: () => p.prefix, getRuntimeName: n => n || y(p.runtime), getSuffix: () => p.suffix };
    var b = n => new URL(String(n), location.href).href.replace(new RegExp(`^${location.origin}`), "");
    function q(n, e) {
        let r = new URL(n);
        for (let t of e)
            r.searchParams.delete(t);
        return r.href;
    }
    async function C(n, e, r, t) {
        let o = q(e.url, r);
        if (e.url === o)
            return n.match(e, t);
        let a = { ...t, ignoreSearch: !0 }, s = await n.keys(e, a);
        for (let i of s) {
            let u = q(i.url, r);
            if (o === u)
                return n.match(i, t);
        }
    }
    var v = class {
        constructor() { this.promise = new Promise((e, r) => { this.resolve = e, this.reject = r; }); }
    };
    var T = new Set;
    async function S() {
        for (let n of T)
            await n();
    }
    function d(n) { return new Promise(e => setTimeout(e, n)); }
    "use strict";
    try {
        self["workbox:strategies:6.1.5"] && _();
    }
    catch (n) { }
    function m(n) { return typeof n == "string" ? new Request(n) : n; }
    var h = class {
        constructor(e, r) {
            this._cacheKeys = {}, Object.assign(this, r), this.event = r.event, this._strategy = e, this._handlerDeferred = new v, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map;
            for (let t of this._plugins)
                this._pluginStateMap.set(t, {});
            this.event.waitUntil(this._handlerDeferred.promise);
        }
        async fetch(e) {
            let { event: r } = this, t = m(e);
            if (t.mode === "navigate" && r instanceof FetchEvent && r.preloadResponse) {
                let s = await r.preloadResponse;
                if (s)
                    return s;
            }
            let o = this.hasCallback("fetchDidFail") ? t.clone() : null;
            try {
                for (let s of this.iterateCallbacks("requestWillFetch"))
                    t = await s({ request: t.clone(), event: r });
            }
            catch (s) {
                throw new c("plugin-error-request-will-fetch", { thrownError: s });
            }
            let a = t.clone();
            try {
                let s;
                s = await fetch(t, t.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
                for (let i of this.iterateCallbacks("fetchDidSucceed"))
                    s = await i({ event: r, request: a, response: s });
                return s;
            }
            catch (s) {
                throw o && await this.runCallbacks("fetchDidFail", { error: s, event: r, originalRequest: o.clone(), request: a.clone() }), s;
            }
        }
        async fetchAndCachePut(e) { let r = await this.fetch(e), t = r.clone(); return this.waitUntil(this.cachePut(e, t)), r; }
        async cacheMatch(e) {
            let r = m(e), t, { cacheName: o, matchOptions: a } = this._strategy, s = await this.getCacheKey(r, "read"), i = { ...a, cacheName: o };
            t = await caches.match(s, i);
            for (let u of this.iterateCallbacks("cachedResponseWillBeUsed"))
                t = await u({ cacheName: o, matchOptions: a, cachedResponse: t, request: s, event: this.event }) || void 0;
            return t;
        }
        async cachePut(e, r) {
            let t = m(e);
            await d(0);
            let o = await this.getCacheKey(t, "write");
            if (!r)
                throw new c("cache-put-with-no-response", { url: b(o.url) });
            let a = await this._ensureResponseSafeToCache(r);
            if (!a)
                return !1;
            let { cacheName: s, matchOptions: i } = this._strategy, u = await self.caches.open(s), g = this.hasCallback("cacheDidUpdate"), U = g ? await C(u, o.clone(), ["__WB_REVISION__"], i) : null;
            try {
                await u.put(o, g ? a.clone() : a);
            }
            catch (f) {
                throw f.name === "QuotaExceededError" && await S(), f;
            }
            for (let f of this.iterateCallbacks("cacheDidUpdate"))
                await f({ cacheName: s, oldResponse: U, newResponse: a.clone(), request: o, event: this.event });
            return !0;
        }
        async getCacheKey(e, r) {
            if (!this._cacheKeys[r]) {
                let t = e;
                for (let o of this.iterateCallbacks("cacheKeyWillBeUsed"))
                    t = m(await o({ mode: r, request: t, event: this.event, params: this.params }));
                this._cacheKeys[r] = t;
            }
            return this._cacheKeys[r];
        }
        hasCallback(e) {
            for (let r of this._strategy.plugins)
                if (e in r)
                    return !0;
            return !1;
        }
        async runCallbacks(e, r) {
            for (let t of this.iterateCallbacks(e))
                await t(r);
        }
        *iterateCallbacks(e) {
            for (let r of this._strategy.plugins)
                if (typeof r[e] == "function") {
                    let t = this._pluginStateMap.get(r);
                    yield a => { let s = { ...a, state: t }; return r[e](s); };
                }
        }
        waitUntil(e) { return this._extendLifetimePromises.push(e), e; }
        async doneWaiting() {
            let e;
            for (; e = this._extendLifetimePromises.shift();)
                await e;
        }
        destroy() { this._handlerDeferred.resolve(); }
        async _ensureResponseSafeToCache(e) {
            let r = e, t = !1;
            for (let o of this.iterateCallbacks("cacheWillUpdate"))
                if (r = await o({ request: this.request, response: r, event: this.event }) || void 0, t = !0, !r)
                    break;
            return t || r && r.status !== 200 && (r = void 0), r;
        }
    };
    var l = class {
        constructor(e = {}) { this.cacheName = O.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions; }
        handle(e) { let [r] = this.handleAll(e); return r; }
        handleAll(e) { e instanceof FetchEvent && (e = { event: e, request: e.request }); let r = e.event, t = typeof e.request == "string" ? new Request(e.request) : e.request, o = "params" in e ? e.params : void 0, a = new h(this, { event: r, request: t, params: o }), s = this._getResponse(a, t, r), i = this._awaitComplete(s, a, t, r); return [s, i]; }
        async _getResponse(e, r, t) {
            await e.runCallbacks("handlerWillStart", { event: t, request: r });
            let o;
            try {
                if (o = await this._handle(r, e), !o || o.type === "error")
                    throw new c("no-response", { url: r.url });
            }
            catch (a) {
                for (let s of e.iterateCallbacks("handlerDidError"))
                    if (o = await s({ error: a, event: t, request: r }), o)
                        break;
                if (!o)
                    throw a;
            }
            for (let a of e.iterateCallbacks("handlerWillRespond"))
                o = await a({ event: t, request: r, response: o });
            return o;
        }
        async _awaitComplete(e, r, t, o) {
            let a, s;
            try {
                a = await e;
            }
            catch (i) { }
            try {
                await r.runCallbacks("handlerDidRespond", { event: o, request: t, response: a }), await r.doneWaiting();
            }
            catch (i) {
                s = i;
            }
            if (await r.runCallbacks("handlerDidComplete", { event: o, request: t, response: a, error: s }), r.destroy(), s)
                throw s;
        }
    };
    var k = class extends l {
        async _handle(e, r) {
            let t = [], o = await r.cacheMatch(e), a;
            if (!o)
                try {
                    o = await r.fetchAndCachePut(e);
                }
                catch (s) {
                    a = s;
                }
            if (!o)
                throw new c("no-response", { url: e.url, error: a });
            return o;
        }
    };
    var E = class extends l {
        async _handle(e, r) {
            let t = await r.cacheMatch(e);
            if (!t)
                throw new c("no-response", { url: e.url });
            return t;
        }
    };
    var w = { cacheWillUpdate: async ({ response: n }) => n.status === 200 || n.status === 0 ? n : null };
    var x = class extends l {
        constructor(e = {}) { super(e); this.plugins.some(r => "cacheWillUpdate" in r) || this.plugins.unshift(w), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0; }
        async _handle(e, r) {
            let t = [], o = [], a;
            if (this._networkTimeoutSeconds) {
                let { id: u, promise: g } = this._getTimeoutPromise({ request: e, logs: t, handler: r });
                a = u, o.push(g);
            }
            let s = this._getNetworkPromise({ timeoutId: a, request: e, logs: t, handler: r });
            o.push(s);
            let i = await r.waitUntil((async () => await r.waitUntil(Promise.race(o)) || await s)());
            if (!i)
                throw new c("no-response", { url: e.url });
            return i;
        }
        _getTimeoutPromise({ request: e, logs: r, handler: t }) { let o; return { promise: new Promise(s => { o = setTimeout(async () => { s(await t.cacheMatch(e)); }, this._networkTimeoutSeconds * 1000); }), id: o }; }
        async _getNetworkPromise({ timeoutId: e, request: r, logs: t, handler: o }) {
            let a, s;
            try {
                s = await o.fetchAndCachePut(r);
            }
            catch (i) {
                a = i;
            }
            return e && clearTimeout(e), (a || !s) && (s = await o.cacheMatch(r)), s;
        }
    };
    var N = class extends l {
        constructor(e = {}) { super(e); this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0; }
        async _handle(e, r) {
            let t, o;
            try {
                let a = [r.fetch(e)];
                if (this._networkTimeoutSeconds) {
                    let s = d(this._networkTimeoutSeconds * 1000);
                    a.push(s);
                }
                if (o = await Promise.race(a), !o)
                    throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
            }
            catch (a) {
                t = a;
            }
            if (!o)
                throw new c("no-response", { url: e.url, error: t });
            return o;
        }
    };
    var $ = class extends l {
        constructor(e) { super(e); this.plugins.some(r => "cacheWillUpdate" in r) || this.plugins.unshift(w); }
        async _handle(e, r) {
            let t = [], o = r.fetchAndCachePut(e).catch(() => { }), a = await r.cacheMatch(e), s;
            if (!a)
                try {
                    a = await o;
                }
                catch (i) {
                    s = i;
                }
            if (!a)
                throw new c("no-response", { url: e.url, error: s });
            return a;
        }
    };
    var { CacheOnly: zr, NetworkFirst: et, NetworkOnly: rt, StaleWhileRevalidate: tt, Strategy: ot, StrategyHandler: st, CacheFirst: nt } = R;
    return { CacheFirst: nt, CacheOnly: zr, NetworkFirst: et, NetworkOnly: rt, StaleWhileRevalidate: tt, Strategy: ot, StrategyHandler: st };
})();
const mod8 = (async () => {
    var O = Object.defineProperty;
    var T = (o, e) => {
        for (var r in e)
            O(o, r, { get: e[r], enumerable: !0 });
    };
    var E = {};
    T(E, { NavigationRoute: () => b, RegExpRoute: () => m, Route: () => u, Router: () => f, registerRoute: () => N, setCatchHandler: () => $, setDefaultHandler: () => j });
    "use strict";
    try {
        self["workbox:core:6.1.5"] && _();
    }
    catch (o) { }
    var C = (o, ...e) => { let r = o; return e.length > 0 && (r += ` :: ${JSON.stringify(e)}`), r; };
    var v = C;
    var l = class extends Error {
        constructor(e, r) { let t = v(e, r); super(t); this.name = e, this.details = r; }
    };
    "use strict";
    try {
        self["workbox:routing:6.1.5"] && _();
    }
    catch (o) { }
    var y = "GET";
    var d = o => o && typeof o == "object" ? o : { handle: o };
    var u = class {
        constructor(e, r, t = y) { this.handler = d(r), this.match = e, this.method = t; }
        setCatchHandler(e) { this.catchHandler = d(e); }
    };
    var b = class extends u {
        constructor(e, { allowlist: r = [/./], denylist: t = [] } = {}) { super(s => this._match(s), e); this._allowlist = r, this._denylist = t; }
        _match({ url: e, request: r }) {
            if (r && r.mode !== "navigate")
                return !1;
            let t = e.pathname + e.search;
            for (let s of this._denylist)
                if (s.test(t))
                    return !1;
            return !!this._allowlist.some(s => s.test(t));
        }
    };
    var m = class extends u {
        constructor(e, r, t) {
            let s = ({ url: i }) => {
                let n = e.exec(i.href);
                if (!!n && !(i.origin !== location.origin && n.index !== 0))
                    return n.slice(1);
            };
            super(s, r, t);
        }
    };
    var f = class {
        constructor() { this._routes = new Map, this._defaultHandlerMap = new Map; }
        get routes() { return this._routes; }
        addFetchListener() { self.addEventListener("fetch", e => { let { request: r } = e, t = this.handleRequest({ request: r, event: e }); t && e.respondWith(t); }); }
        addCacheListener() {
            self.addEventListener("message", e => {
                if (e.data && e.data.type === "CACHE_URLS") {
                    let { payload: r } = e.data, t = Promise.all(r.urlsToCache.map(s => { typeof s == "string" && (s = [s]); let i = new Request(...s); return this.handleRequest({ request: i, event: e }); }));
                    e.waitUntil(t), e.ports && e.ports[0] && t.then(() => e.ports[0].postMessage(!0));
                }
            });
        }
        handleRequest({ request: e, event: r }) {
            let t = new URL(e.url, location.href);
            if (!t.protocol.startsWith("http"))
                return;
            let s = t.origin === location.origin, { params: i, route: n } = this.findMatchingRoute({ event: r, request: e, sameOrigin: s, url: t }), a = n && n.handler, c = [], x = e.method;
            if (!a && this._defaultHandlerMap.has(x) && (a = this._defaultHandlerMap.get(x)), !a)
                return;
            let p;
            try {
                p = a.handle({ url: t, request: e, event: r, params: i });
            }
            catch (g) {
                p = Promise.reject(g);
            }
            let R = n && n.catchHandler;
            return p instanceof Promise && (this._catchHandler || R) && (p = p.catch(async (g) => {
                if (R)
                    try {
                        return await R.handle({ url: t, request: e, event: r, params: i });
                    }
                    catch (k) {
                        g = k;
                    }
                if (this._catchHandler)
                    return this._catchHandler.handle({ url: t, request: e, event: r });
                throw g;
            })), p;
        }
        findMatchingRoute({ url: e, sameOrigin: r, request: t, event: s }) {
            let i = this._routes.get(t.method) || [];
            for (let n of i) {
                let a, c = n.match({ url: e, sameOrigin: r, request: t, event: s });
                if (c)
                    return a = c, (Array.isArray(c) && c.length === 0 || c.constructor === Object && Object.keys(c).length === 0 || typeof c == "boolean") && (a = void 0), { route: n, params: a };
            }
            return {};
        }
        setDefaultHandler(e, r = y) { this._defaultHandlerMap.set(r, d(e)); }
        setCatchHandler(e) { this._catchHandler = d(e); }
        registerRoute(e) { this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e); }
        unregisterRoute(e) {
            if (!this._routes.has(e.method))
                throw new l("unregister-route-but-not-found-with-method", { method: e.method });
            let r = this._routes.get(e.method).indexOf(e);
            if (r > -1)
                this._routes.get(e.method).splice(r, 1);
            else
                throw new l("unregister-route-route-not-registered");
        }
    };
    var w, h = () => (w || (w = new f, w.addFetchListener(), w.addCacheListener()), w);
    function N(o, e, r) {
        let t;
        if (typeof o == "string") {
            let i = new URL(o, location.href), n = ({ url: a }) => a.href === i.href;
            t = new u(n, e, r);
        }
        else if (o instanceof RegExp)
            t = new m(o, e, r);
        else if (typeof o == "function")
            t = new u(o, e, r);
        else if (o instanceof u)
            t = o;
        else
            throw new l("unsupported-route-type", { moduleName: "workbox-routing", funcName: "registerRoute", paramName: "capture" });
        return h().registerRoute(t), t;
    }
    function $(o) { h().setCatchHandler(o); }
    function j(o) { h().setDefaultHandler(o); }
    var { Route: nr, Router: ar, setCatchHandler: ir, setDefaultHandler: ur, NavigationRoute: cr, RegExpRoute: lr, registerRoute: pr } = E;
    return { NavigationRoute: cr, RegExpRoute: lr, Route: nr, Router: ar, registerRoute: pr, setCatchHandler: ir, setDefaultHandler: ur };
})();
const mod7 = (async () => {
    var le = Object.defineProperty;
    var ue = (o, e) => {
        for (var r in e)
            le(o, r, { get: e[r], enumerable: !0 });
    };
    var W = {};
    ue(W, { PrecacheController: () => v, PrecacheFallbackPlugin: () => V, PrecacheRoute: () => C, PrecacheStrategy: () => h, addPlugins: () => z, addRoute: () => k, cleanupOutdatedCaches: () => oe, createHandlerBoundToURL: () => se, getCacheKeyForURL: () => ae, matchPrecache: () => ne, precache: () => j, precacheAndRoute: () => ie });
    "use strict";
    try {
        self["workbox:core:6.1.5"] && _();
    }
    catch (o) { }
    var he = (o, ...e) => { let r = o; return e.length > 0 && (r += ` :: ${JSON.stringify(e)}`), r; };
    var S = he;
    var c = class extends Error {
        constructor(e, r) { let t = S(e, r); super(t); this.name = e, this.details = r; }
    };
    var p = { googleAnalytics: "googleAnalytics", precache: "precache-v2", prefix: "workbox", runtime: "runtime", suffix: typeof registration != "undefined" ? registration.scope : "" }, U = o => [p.prefix, o, p.suffix].filter(e => e && e.length > 0).join("-"), pe = o => {
        for (let e of Object.keys(p))
            o(e);
    }, m = { updateDetails: o => { pe(e => { typeof o[e] == "string" && (p[e] = o[e]); }); }, getGoogleAnalyticsName: o => o || U(p.googleAnalytics), getPrecacheName: o => o || U(p.precache), getPrefix: () => p.prefix, getRuntimeName: o => o || U(p.runtime), getSuffix: () => p.suffix };
    function L(o, e) { let r = e(); return o.waitUntil(r), r; }
    "use strict";
    try {
        self["workbox:precaching:6.1.5"] && _();
    }
    catch (o) { }
    var de = "__WB_REVISION__";
    function A(o) {
        if (!o)
            throw new c("add-to-cache-list-unexpected-type", { entry: o });
        if (typeof o == "string") {
            let a = new URL(o, location.href);
            return { cacheKey: a.href, url: a.href };
        }
        let { revision: e, url: r } = o;
        if (!r)
            throw new c("add-to-cache-list-unexpected-type", { entry: o });
        if (!e) {
            let a = new URL(r, location.href);
            return { cacheKey: a.href, url: a.href };
        }
        let t = new URL(r, location.href), s = new URL(r, location.href);
        return t.searchParams.set(de, e), { cacheKey: t.href, url: s.href };
    }
    var P = class {
        constructor() {
            this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: e, state: r }) => { r && (r.originalRequest = e); }, this.cachedResponseWillBeUsed = async ({ event: e, state: r, cachedResponse: t }) => {
                if (e.type === "install") {
                    let s = r.originalRequest.url;
                    t ? this.notUpdatedURLs.push(s) : this.updatedURLs.push(s);
                }
                return t;
            };
        }
    };
    var $ = class {
        constructor({ precacheController: e }) { this.cacheKeyWillBeUsed = async ({ request: r, params: t }) => { let s = t && t.cacheKey || this._precacheController.getCacheKeyForURL(r.url); return s ? new Request(s) : r; }, this._precacheController = e; }
    };
    var b;
    function M() {
        if (b === void 0) {
            let o = new Response("");
            if ("body" in o)
                try {
                    new Response(o.body), b = !0;
                }
                catch (e) {
                    b = !1;
                }
            b = !1;
        }
        return b;
    }
    async function I(o, e) {
        let r = null;
        if (o.url && (r = new URL(o.url).origin), r !== self.location.origin)
            throw new c("cross-origin-copy-response", { origin: r });
        let t = o.clone(), s = { headers: new Headers(t.headers), status: t.status, statusText: t.statusText }, a = e ? e(s) : s, n = M() ? t.body : await t.blob();
        return new Response(n, a);
    }
    var H = o => new URL(String(o), location.href).href.replace(new RegExp(`^${location.origin}`), "");
    function B(o, e) {
        let r = new URL(o);
        for (let t of e)
            r.searchParams.delete(t);
        return r.href;
    }
    async function G(o, e, r, t) {
        let s = B(e.url, r);
        if (e.url === s)
            return o.match(e, t);
        let a = { ...t, ignoreSearch: !0 }, n = await o.keys(e, a);
        for (let i of n) {
            let l = B(i.url, r);
            if (s === l)
                return o.match(i, t);
        }
    }
    var T = class {
        constructor() { this.promise = new Promise((e, r) => { this.resolve = e, this.reject = r; }); }
    };
    var J = new Set;
    async function Q() {
        for (let o of J)
            await o();
    }
    function Y(o) { return new Promise(e => setTimeout(e, o)); }
    "use strict";
    try {
        self["workbox:strategies:6.1.5"] && _();
    }
    catch (o) { }
    function E(o) { return typeof o == "string" ? new Request(o) : o; }
    var O = class {
        constructor(e, r) {
            this._cacheKeys = {}, Object.assign(this, r), this.event = r.event, this._strategy = e, this._handlerDeferred = new T, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map;
            for (let t of this._plugins)
                this._pluginStateMap.set(t, {});
            this.event.waitUntil(this._handlerDeferred.promise);
        }
        async fetch(e) {
            let { event: r } = this, t = E(e);
            if (t.mode === "navigate" && r instanceof FetchEvent && r.preloadResponse) {
                let n = await r.preloadResponse;
                if (n)
                    return n;
            }
            let s = this.hasCallback("fetchDidFail") ? t.clone() : null;
            try {
                for (let n of this.iterateCallbacks("requestWillFetch"))
                    t = await n({ request: t.clone(), event: r });
            }
            catch (n) {
                throw new c("plugin-error-request-will-fetch", { thrownError: n });
            }
            let a = t.clone();
            try {
                let n;
                n = await fetch(t, t.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
                for (let i of this.iterateCallbacks("fetchDidSucceed"))
                    n = await i({ event: r, request: a, response: n });
                return n;
            }
            catch (n) {
                throw s && await this.runCallbacks("fetchDidFail", { error: n, event: r, originalRequest: s.clone(), request: a.clone() }), n;
            }
        }
        async fetchAndCachePut(e) { let r = await this.fetch(e), t = r.clone(); return this.waitUntil(this.cachePut(e, t)), r; }
        async cacheMatch(e) {
            let r = E(e), t, { cacheName: s, matchOptions: a } = this._strategy, n = await this.getCacheKey(r, "read"), i = { ...a, cacheName: s };
            t = await caches.match(n, i);
            for (let l of this.iterateCallbacks("cachedResponseWillBeUsed"))
                t = await l({ cacheName: s, matchOptions: a, cachedResponse: t, request: n, event: this.event }) || void 0;
            return t;
        }
        async cachePut(e, r) {
            let t = E(e);
            await Y(0);
            let s = await this.getCacheKey(t, "write");
            if (!r)
                throw new c("cache-put-with-no-response", { url: H(s.url) });
            let a = await this._ensureResponseSafeToCache(r);
            if (!a)
                return !1;
            let { cacheName: n, matchOptions: i } = this._strategy, l = await self.caches.open(n), w = this.hasCallback("cacheDidUpdate"), f = w ? await G(l, s.clone(), ["__WB_REVISION__"], i) : null;
            try {
                await l.put(s, w ? a.clone() : a);
            }
            catch (g) {
                throw g.name === "QuotaExceededError" && await Q(), g;
            }
            for (let g of this.iterateCallbacks("cacheDidUpdate"))
                await g({ cacheName: n, oldResponse: f, newResponse: a.clone(), request: s, event: this.event });
            return !0;
        }
        async getCacheKey(e, r) {
            if (!this._cacheKeys[r]) {
                let t = e;
                for (let s of this.iterateCallbacks("cacheKeyWillBeUsed"))
                    t = E(await s({ mode: r, request: t, event: this.event, params: this.params }));
                this._cacheKeys[r] = t;
            }
            return this._cacheKeys[r];
        }
        hasCallback(e) {
            for (let r of this._strategy.plugins)
                if (e in r)
                    return !0;
            return !1;
        }
        async runCallbacks(e, r) {
            for (let t of this.iterateCallbacks(e))
                await t(r);
        }
        *iterateCallbacks(e) {
            for (let r of this._strategy.plugins)
                if (typeof r[e] == "function") {
                    let t = this._pluginStateMap.get(r);
                    yield a => { let n = { ...a, state: t }; return r[e](n); };
                }
        }
        waitUntil(e) { return this._extendLifetimePromises.push(e), e; }
        async doneWaiting() {
            let e;
            for (; e = this._extendLifetimePromises.shift();)
                await e;
        }
        destroy() { this._handlerDeferred.resolve(); }
        async _ensureResponseSafeToCache(e) {
            let r = e, t = !1;
            for (let s of this.iterateCallbacks("cacheWillUpdate"))
                if (r = await s({ request: this.request, response: r, event: this.event }) || void 0, t = !0, !r)
                    break;
            return t || r && r.status !== 200 && (r = void 0), r;
        }
    };
    var D = class {
        constructor(e = {}) { this.cacheName = m.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions; }
        handle(e) { let [r] = this.handleAll(e); return r; }
        handleAll(e) { e instanceof FetchEvent && (e = { event: e, request: e.request }); let r = e.event, t = typeof e.request == "string" ? new Request(e.request) : e.request, s = "params" in e ? e.params : void 0, a = new O(this, { event: r, request: t, params: s }), n = this._getResponse(a, t, r), i = this._awaitComplete(n, a, t, r); return [n, i]; }
        async _getResponse(e, r, t) {
            await e.runCallbacks("handlerWillStart", { event: t, request: r });
            let s;
            try {
                if (s = await this._handle(r, e), !s || s.type === "error")
                    throw new c("no-response", { url: r.url });
            }
            catch (a) {
                for (let n of e.iterateCallbacks("handlerDidError"))
                    if (s = await n({ error: a, event: t, request: r }), s)
                        break;
                if (!s)
                    throw a;
            }
            for (let a of e.iterateCallbacks("handlerWillRespond"))
                s = await a({ event: t, request: r, response: s });
            return s;
        }
        async _awaitComplete(e, r, t, s) {
            let a, n;
            try {
                a = await e;
            }
            catch (i) { }
            try {
                await r.runCallbacks("handlerDidRespond", { event: s, request: t, response: a }), await r.doneWaiting();
            }
            catch (i) {
                n = i;
            }
            if (await r.runCallbacks("handlerDidComplete", { event: s, request: t, response: a, error: n }), r.destroy(), n)
                throw n;
        }
    };
    var h = class extends D {
        constructor(e = {}) { e.cacheName = m.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(h.copyRedirectedCacheableResponsesPlugin); }
        async _handle(e, r) { let t = await r.cacheMatch(e); return t || (r.event && r.event.type === "install" ? await this._handleInstall(e, r) : await this._handleFetch(e, r)); }
        async _handleFetch(e, r) {
            let t;
            if (this._fallbackToNetwork)
                t = await r.fetch(e);
            else
                throw new c("missing-precache-entry", { cacheName: this.cacheName, url: e.url });
            return t;
        }
        async _handleInstall(e, r) {
            this._useDefaultCacheabilityPluginIfNeeded();
            let t = await r.fetch(e);
            if (!await r.cachePut(e, t.clone()))
                throw new c("bad-precaching-response", { url: e.url, status: t.status });
            return t;
        }
        _useDefaultCacheabilityPluginIfNeeded() {
            let e = null, r = 0;
            for (let [t, s] of this.plugins.entries())
                s !== h.copyRedirectedCacheableResponsesPlugin && (s === h.defaultPrecacheCacheabilityPlugin && (e = t), s.cacheWillUpdate && r++);
            r === 0 ? this.plugins.push(h.defaultPrecacheCacheabilityPlugin) : r > 1 && e !== null && this.plugins.splice(e, 1);
        }
    };
    h.defaultPrecacheCacheabilityPlugin = { async cacheWillUpdate({ response: o }) { return !o || o.status >= 400 ? null : o; } };
    h.copyRedirectedCacheableResponsesPlugin = { async cacheWillUpdate({ response: o }) { return o.redirected ? await I(o) : o; } };
    var v = class {
        constructor({ cacheName: e, plugins: r = [], fallbackToNetwork: t = !0 } = {}) { this._urlsToCacheKeys = new Map, this._urlsToCacheModes = new Map, this._cacheKeysToIntegrities = new Map, this._strategy = new h({ cacheName: m.getPrecacheName(e), plugins: [...r, new $({ precacheController: this })], fallbackToNetwork: t }), this.install = this.install.bind(this), this.activate = this.activate.bind(this); }
        get strategy() { return this._strategy; }
        precache(e) { this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0); }
        addToCacheList(e) {
            let r = [];
            for (let t of e) {
                typeof t == "string" ? r.push(t) : t && t.revision === void 0 && r.push(t.url);
                let { cacheKey: s, url: a } = A(t), n = typeof t != "string" && t.revision ? "reload" : "default";
                if (this._urlsToCacheKeys.has(a) && this._urlsToCacheKeys.get(a) !== s)
                    throw new c("add-to-cache-list-conflicting-entries", { firstEntry: this._urlsToCacheKeys.get(a), secondEntry: s });
                if (typeof t != "string" && t.integrity) {
                    if (this._cacheKeysToIntegrities.has(s) && this._cacheKeysToIntegrities.get(s) !== t.integrity)
                        throw new c("add-to-cache-list-conflicting-integrities", { url: a });
                    this._cacheKeysToIntegrities.set(s, t.integrity);
                }
                if (this._urlsToCacheKeys.set(a, s), this._urlsToCacheModes.set(a, n), r.length > 0) {
                    let i = `Workbox is precaching URLs without revision info: ${r.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
                    console.warn(i);
                }
            }
        }
        install(e) {
            return L(e, async () => {
                let r = new P;
                this.strategy.plugins.push(r);
                for (let [a, n] of this._urlsToCacheKeys) {
                    let i = this._cacheKeysToIntegrities.get(n), l = this._urlsToCacheModes.get(a), w = new Request(a, { integrity: i, cache: l, credentials: "same-origin" });
                    await Promise.all(this.strategy.handleAll({ params: { cacheKey: n }, request: w, event: e }));
                }
                let { updatedURLs: t, notUpdatedURLs: s } = r;
                return { updatedURLs: t, notUpdatedURLs: s };
            });
        }
        activate(e) {
            return L(e, async () => {
                let r = await self.caches.open(this.strategy.cacheName), t = await r.keys(), s = new Set(this._urlsToCacheKeys.values()), a = [];
                for (let n of t)
                    s.has(n.url) || (await r.delete(n), a.push(n.url));
                return { deletedURLs: a };
            });
        }
        getURLsToCacheKeys() { return this._urlsToCacheKeys; }
        getCachedURLs() { return [...this._urlsToCacheKeys.keys()]; }
        getCacheKeyForURL(e) { let r = new URL(e, location.href); return this._urlsToCacheKeys.get(r.href); }
        async matchPrecache(e) {
            let r = e instanceof Request ? e.url : e, t = this.getCacheKeyForURL(r);
            if (t)
                return (await self.caches.open(this.strategy.cacheName)).match(t);
        }
        createHandlerBoundToURL(e) {
            let r = this.getCacheKeyForURL(e);
            if (!r)
                throw new c("non-precached-url", { url: e });
            return t => (t.request = new Request(e), t.params = { cacheKey: r, ...t.params }, this.strategy.handle(t));
        }
    };
    var q, u = () => (q || (q = new v), q);
    function z(o) { u().strategy.plugins.push(...o); }
    "use strict";
    try {
        self["workbox:routing:6.1.5"] && _();
    }
    catch (o) { }
    var N = "GET";
    var y = o => o && typeof o == "object" ? o : { handle: o };
    var d = class {
        constructor(e, r, t = N) { this.handler = y(r), this.match = e, this.method = t; }
        setCatchHandler(e) { this.catchHandler = y(e); }
    };
    var F = class extends d {
        constructor(e, r, t) {
            let s = ({ url: a }) => {
                let n = e.exec(a.href);
                if (!!n && !(a.origin !== location.origin && n.index !== 0))
                    return n.slice(1);
            };
            super(s, r, t);
        }
    };
    var K = class {
        constructor() { this._routes = new Map, this._defaultHandlerMap = new Map; }
        get routes() { return this._routes; }
        addFetchListener() { self.addEventListener("fetch", e => { let { request: r } = e, t = this.handleRequest({ request: r, event: e }); t && e.respondWith(t); }); }
        addCacheListener() {
            self.addEventListener("message", e => {
                if (e.data && e.data.type === "CACHE_URLS") {
                    let { payload: r } = e.data, t = Promise.all(r.urlsToCache.map(s => { typeof s == "string" && (s = [s]); let a = new Request(...s); return this.handleRequest({ request: a, event: e }); }));
                    e.waitUntil(t), e.ports && e.ports[0] && t.then(() => e.ports[0].postMessage(!0));
                }
            });
        }
        handleRequest({ request: e, event: r }) {
            let t = new URL(e.url, location.href);
            if (!t.protocol.startsWith("http"))
                return;
            let s = t.origin === location.origin, { params: a, route: n } = this.findMatchingRoute({ event: r, request: e, sameOrigin: s, url: t }), i = n && n.handler, l = [], w = e.method;
            if (!i && this._defaultHandlerMap.has(w) && (i = this._defaultHandlerMap.get(w)), !i)
                return;
            let f;
            try {
                f = i.handle({ url: t, request: e, event: r, params: a });
            }
            catch (R) {
                f = Promise.reject(R);
            }
            let g = n && n.catchHandler;
            return f instanceof Promise && (this._catchHandler || g) && (f = f.catch(async (R) => {
                if (g)
                    try {
                        return await g.handle({ url: t, request: e, event: r, params: a });
                    }
                    catch (ce) {
                        R = ce;
                    }
                if (this._catchHandler)
                    return this._catchHandler.handle({ url: t, request: e, event: r });
                throw R;
            })), f;
        }
        findMatchingRoute({ url: e, sameOrigin: r, request: t, event: s }) {
            let a = this._routes.get(t.method) || [];
            for (let n of a) {
                let i, l = n.match({ url: e, sameOrigin: r, request: t, event: s });
                if (l)
                    return i = l, (Array.isArray(l) && l.length === 0 || l.constructor === Object && Object.keys(l).length === 0 || typeof l == "boolean") && (i = void 0), { route: n, params: i };
            }
            return {};
        }
        setDefaultHandler(e, r = N) { this._defaultHandlerMap.set(r, y(e)); }
        setCatchHandler(e) { this._catchHandler = y(e); }
        registerRoute(e) { this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e); }
        unregisterRoute(e) {
            if (!this._routes.has(e.method))
                throw new c("unregister-route-but-not-found-with-method", { method: e.method });
            let r = this._routes.get(e.method).indexOf(e);
            if (r > -1)
                this._routes.get(e.method).splice(r, 1);
            else
                throw new c("unregister-route-route-not-registered");
        }
    };
    var x, X = () => (x || (x = new K, x.addFetchListener(), x.addCacheListener()), x);
    function Z(o, e, r) {
        let t;
        if (typeof o == "string") {
            let a = new URL(o, location.href), n = ({ url: i }) => i.href === a.href;
            t = new d(n, e, r);
        }
        else if (o instanceof RegExp)
            t = new F(o, e, r);
        else if (typeof o == "function")
            t = new d(o, e, r);
        else if (o instanceof d)
            t = o;
        else
            throw new c("unsupported-route-type", { moduleName: "workbox-routing", funcName: "registerRoute", paramName: "capture" });
        return X().registerRoute(t), t;
    }
    function ee(o, e = []) {
        for (let r of [...o.searchParams.keys()])
            e.some(t => t.test(r)) && o.searchParams.delete(r);
        return o;
    }
    function* re(o, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: r = "index.html", cleanURLs: t = !0, urlManipulation: s } = {}) {
        let a = new URL(o, location.href);
        a.hash = "", yield a.href;
        let n = ee(a, e);
        if (yield n.href, r && n.pathname.endsWith("/")) {
            let i = new URL(n.href);
            i.pathname += r, yield i.href;
        }
        if (t) {
            let i = new URL(n.href);
            i.pathname += ".html", yield i.href;
        }
        if (s) {
            let i = s({ url: a });
            for (let l of i)
                yield l.href;
        }
    }
    var C = class extends d {
        constructor(e, r) {
            let t = ({ request: s }) => {
                let a = e.getURLsToCacheKeys();
                for (let n of re(s.url, r)) {
                    let i = a.get(n);
                    if (i)
                        return { cacheKey: i };
                }
            };
            super(t, e.strategy);
        }
    };
    function k(o) { let e = u(), r = new C(e, o); Z(r); }
    var ge = "-precache-", te = async (o, e = ge) => { let t = (await self.caches.keys()).filter(s => s.includes(e) && s.includes(self.registration.scope) && s !== o); return await Promise.all(t.map(s => self.caches.delete(s))), t; };
    function oe() { self.addEventListener("activate", o => { let e = m.getPrecacheName(); o.waitUntil(te(e).then(r => { })); }); }
    function se(o) { return u().createHandlerBoundToURL(o); }
    function ae(o) { return u().getCacheKeyForURL(o); }
    function ne(o) { return u().matchPrecache(o); }
    function j(o) { u().precache(o); }
    function ie(o, e) { j(o), k(e); }
    var V = class {
        constructor({ fallbackURL: e, precacheController: r }) { this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL), this._fallbackURL = e, this._precacheController = r || u(); }
    };
    var { cleanupOutdatedCaches: ls, matchPrecache: us, PrecacheRoute: hs, addRoute: ps, createHandlerBoundToURL: ds, precache: fs, precacheAndRoute: gs, PrecacheController: ms, addPlugins: ws, getCacheKeyForURL: ys, PrecacheStrategy: Rs, PrecacheFallbackPlugin: bs } = W;
    return { PrecacheController: ms, PrecacheFallbackPlugin: bs, PrecacheRoute: hs, PrecacheStrategy: Rs, addPlugins: ws, addRoute: ps, cleanupOutdatedCaches: ls, createHandlerBoundToURL: ds, getCacheKeyForURL: ys, matchPrecache: us, precache: fs, precacheAndRoute: gs };
})();
const mod6 = (async () => {
    var O = Object.defineProperty;
    var R = (o, e) => {
        for (var r in e)
            O(o, r, { get: e[r], enumerable: !0 });
    };
    var $ = {};
    R($, { CacheExpiration: () => g, ExpirationPlugin: () => v });
    "use strict";
    try {
        self["workbox:core:6.1.5"] && _();
    }
    catch (o) { }
    var S = (o, ...e) => { let r = o; return e.length > 0 && (r += ` :: ${JSON.stringify(e)}`), r; };
    var N = S;
    var w = class extends Error {
        constructor(e, r) { let t = N(e, r); super(t); this.name = e, this.details = r; }
    };
    function b(o) { o.then(() => { }); }
    var m = class {
        constructor(e, r, { onupgradeneeded: t, onversionchange: s } = {}) { this._db = null, this._name = e, this._version = r, this._onupgradeneeded = t, this._onversionchange = s || (() => this.close()); }
        get db() { return this._db; }
        async open() {
            if (!this._db)
                return this._db = await new Promise((e, r) => { let t = !1; setTimeout(() => { t = !0, r(new Error("The open request was blocked and timed out")); }, this.OPEN_TIMEOUT); let s = indexedDB.open(this._name, this._version); s.onerror = () => r(s.error), s.onupgradeneeded = n => { t ? (s.transaction.abort(), s.result.close()) : typeof this._onupgradeneeded == "function" && this._onupgradeneeded(n); }, s.onsuccess = () => { let n = s.result; t ? n.close() : (n.onversionchange = this._onversionchange.bind(this), e(n)); }; }), this;
        }
        async getKey(e, r) { return (await this.getAllKeys(e, r, 1))[0]; }
        async getAll(e, r, t) { return await this.getAllMatching(e, { query: r, count: t }); }
        async getAllKeys(e, r, t) { return (await this.getAllMatching(e, { query: r, count: t, includeKeys: !0 })).map(n => n.key); }
        async getAllMatching(e, { index: r, query: t = null, direction: s = "next", count: n, includeKeys: a = !1 } = {}) { return await this.transaction([e], "readonly", (c, i) => { let u = c.objectStore(e), f = r ? u.index(r) : u, p = [], d = f.openCursor(t, s); d.onsuccess = () => { let x = d.result; x ? (p.push(a ? x : x.value), n && p.length >= n ? i(p) : x.continue()) : i(p); }; }); }
        async transaction(e, r, t) { return await this.open(), await new Promise((s, n) => { let a = this._db.transaction(e, r); a.onabort = () => n(a.error), a.oncomplete = () => s(), t(a, c => s(c)); }); }
        async _call(e, r, t, ...s) { let n = (a, c) => { let i = a.objectStore(r), u = i[e].apply(i, s); u.onsuccess = () => c(u.result); }; return await this.transaction([r], t, n); }
        close() { this._db && (this._db.close(), this._db = null); }
    };
    m.prototype.OPEN_TIMEOUT = 2000;
    var C = { readonly: ["get", "count", "getKey", "getAll", "getAllKeys"], readwrite: ["add", "put", "clear", "delete"] };
    for (let [o, e] of Object.entries(C))
        for (let r of e)
            r in IDBObjectStore.prototype && (m.prototype[r] = async function (t, ...s) { return await this._call(r, t, o, ...s); });
    var T = async (o) => { await new Promise((e, r) => { let t = indexedDB.deleteDatabase(o); t.onerror = () => { r(t.error); }, t.onblocked = () => { r(new Error("Delete blocked")); }, t.onsuccess = () => { e(); }; }); };
    "use strict";
    try {
        self["workbox:expiration:6.1.5"] && _();
    }
    catch (o) { }
    var U = "workbox-expiration", l = "cache-entries", k = o => { let e = new URL(o, location.href); return e.hash = "", e.href; }, y = class {
        constructor(e) { this._cacheName = e, this._db = new m(U, 1, { onupgradeneeded: r => this._handleUpgrade(r) }); }
        _handleUpgrade(e) { let t = e.target.result.createObjectStore(l, { keyPath: "id" }); t.createIndex("cacheName", "cacheName", { unique: !1 }), t.createIndex("timestamp", "timestamp", { unique: !1 }), T(this._cacheName); }
        async setTimestamp(e, r) { e = k(e); let t = { url: e, timestamp: r, cacheName: this._cacheName, id: this._getId(e) }; await this._db.put(l, t); }
        async getTimestamp(e) { return (await this._db.get(l, this._getId(e))).timestamp; }
        async expireEntries(e, r) {
            let t = await this._db.transaction(l, "readwrite", (n, a) => {
                let i = n.objectStore(l).index("timestamp").openCursor(null, "prev"), u = [], f = 0;
                i.onsuccess = () => {
                    let p = i.result;
                    if (p) {
                        let d = p.value;
                        d.cacheName === this._cacheName && (e && d.timestamp < e || r && f >= r ? u.push(p.value) : f++), p.continue();
                    }
                    else
                        a(u);
                };
            }), s = [];
            for (let n of t)
                await this._db.delete(l, n.id), s.push(n.url);
            return s;
        }
        _getId(e) { return this._cacheName + "|" + k(e); }
    };
    var g = class {
        constructor(e, r = {}) { this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = r.maxEntries, this._maxAgeSeconds = r.maxAgeSeconds, this._matchOptions = r.matchOptions, this._cacheName = e, this._timestampModel = new y(e); }
        async expireEntries() {
            if (this._isRunning) {
                this._rerunRequested = !0;
                return;
            }
            this._isRunning = !0;
            let e = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1000 : 0, r = await this._timestampModel.expireEntries(e, this._maxEntries), t = await self.caches.open(this._cacheName);
            for (let s of r)
                await t.delete(s, this._matchOptions);
            this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, b(this.expireEntries()));
        }
        async updateTimestamp(e) { await this._timestampModel.setTimestamp(e, Date.now()); }
        async isURLExpired(e) {
            if (this._maxAgeSeconds) {
                let r = await this._timestampModel.getTimestamp(e), t = Date.now() - this._maxAgeSeconds * 1000;
                return r < t;
            }
            else
                return !1;
        }
        async delete() { this._rerunRequested = !1, await this._timestampModel.expireEntries(Infinity); }
    };
    var h = { googleAnalytics: "googleAnalytics", precache: "precache-v2", prefix: "workbox", runtime: "runtime", suffix: typeof registration != "undefined" ? registration.scope : "" }, E = o => [h.prefix, o, h.suffix].filter(e => e && e.length > 0).join("-"), q = o => {
        for (let e of Object.keys(h))
            o(e);
    }, j = { updateDetails: o => { q(e => { typeof o[e] == "string" && (h[e] = o[e]); }); }, getGoogleAnalyticsName: o => o || E(h.googleAnalytics), getPrecacheName: o => o || E(h.precache), getPrefix: () => h.prefix, getRuntimeName: o => o || E(h.runtime), getSuffix: () => h.suffix };
    var A = new Set;
    function D(o) { A.add(o); }
    var v = class {
        constructor(e = {}) {
            this.cachedResponseWillBeUsed = async ({ event: r, request: t, cacheName: s, cachedResponse: n }) => {
                if (!n)
                    return null;
                let a = this._isResponseDateFresh(n), c = this._getCacheExpiration(s);
                b(c.expireEntries());
                let i = c.updateTimestamp(t.url);
                if (r)
                    try {
                        r.waitUntil(i);
                    }
                    catch (u) { }
                return a ? n : null;
            }, this.cacheDidUpdate = async ({ cacheName: r, request: t }) => { let s = this._getCacheExpiration(r); await s.updateTimestamp(t.url), await s.expireEntries(); }, this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = new Map, e.purgeOnQuotaError && D(() => this.deleteCacheAndMetadata());
        }
        _getCacheExpiration(e) {
            if (e === j.getRuntimeName())
                throw new w("expire-custom-caches-only");
            let r = this._cacheExpirations.get(e);
            return r || (r = new g(e, this._config), this._cacheExpirations.set(e, r)), r;
        }
        _isResponseDateFresh(e) {
            if (!this._maxAgeSeconds)
                return !0;
            let r = this._getDateHeaderTimestamp(e);
            if (r === null)
                return !0;
            let t = Date.now();
            return r >= t - this._maxAgeSeconds * 1000;
        }
        _getDateHeaderTimestamp(e) {
            if (!e.headers.has("date"))
                return null;
            let r = e.headers.get("date"), s = new Date(r).getTime();
            return isNaN(s) ? null : s;
        }
        async deleteCacheAndMetadata() {
            for (let [e, r] of this._cacheExpirations)
                await self.caches.delete(e), await r.delete();
            this._cacheExpirations = new Map;
        }
    };
    var { CacheExpiration: Qe, ExpirationPlugin: Ye } = $;
    return { CacheExpiration: Qe, ExpirationPlugin: Ye };
})();
const mod5 = (async () => {
    var Q = Object.defineProperty;
    var R = (r, e) => {
        for (var t in e)
            Q(r, t, { get: e[t], enumerable: !0 });
    };
    var $ = {};
    R($, { _private: () => j, cacheNames: () => I, clientsClaim: () => F, copyResponse: () => M, registerQuotaErrorCallback: () => N, setCacheNameDetails: () => G, skipWaiting: () => V });
    "use strict";
    try {
        self["workbox:core:6.1.5"] && _();
    }
    catch (r) { }
    var T = null;
    var Y = (r, ...e) => { let t = r; return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t; };
    var C = Y;
    var u = class extends Error {
        constructor(e, t) { let o = C(e, t); super(o); this.name = e, this.details = t; }
    };
    var A = null;
    var w = new Set;
    function N(r) { w.add(r); }
    var j = {};
    R(j, { DBWrapper: () => m, Deferred: () => E, WorkboxError: () => u, assert: () => A, cacheMatchIgnoreParams: () => D, cacheNames: () => c, canConstructReadableStream: () => O, canConstructResponseFromBodyStream: () => b, deleteDatabase: () => W, dontWaitFor: () => S, executeQuotaErrorCallbacks: () => P, getFriendlyURL: () => q, logger: () => T, resultingClientExists: () => L, timeout: () => v, waitUntil: () => B });
    var p = { googleAnalytics: "googleAnalytics", precache: "precache-v2", prefix: "workbox", runtime: "runtime", suffix: typeof registration != "undefined" ? registration.scope : "" }, x = r => [p.prefix, r, p.suffix].filter(e => e && e.length > 0).join("-"), J = r => {
        for (let e of Object.keys(p))
            r(e);
    }, c = { updateDetails: r => { J(e => { typeof r[e] == "string" && (p[e] = r[e]); }); }, getGoogleAnalyticsName: r => r || x(p.googleAnalytics), getPrecacheName: r => r || x(p.precache), getPrefix: () => p.prefix, getRuntimeName: r => r || x(p.runtime), getSuffix: () => p.suffix };
    function U(r, e) {
        let t = new URL(r);
        for (let o of e)
            t.searchParams.delete(o);
        return t.href;
    }
    async function D(r, e, t, o) {
        let s = U(e.url, t);
        if (e.url === s)
            return r.match(e, o);
        let n = { ...o, ignoreSearch: !0 }, i = await r.keys(e, n);
        for (let a of i) {
            let l = U(a.url, t);
            if (s === l)
                return r.match(a, o);
        }
    }
    var y;
    function O() {
        if (y === void 0)
            try {
                new ReadableStream({ start() { } }), y = !0;
            }
            catch (r) {
                y = !1;
            }
        return y;
    }
    var h;
    function b() {
        if (h === void 0) {
            let r = new Response("");
            if ("body" in r)
                try {
                    new Response(r.body), h = !0;
                }
                catch (e) {
                    h = !1;
                }
            h = !1;
        }
        return h;
    }
    function S(r) { r.then(() => { }); }
    var m = class {
        constructor(e, t, { onupgradeneeded: o, onversionchange: s } = {}) { this._db = null, this._name = e, this._version = t, this._onupgradeneeded = o, this._onversionchange = s || (() => this.close()); }
        get db() { return this._db; }
        async open() {
            if (!this._db)
                return this._db = await new Promise((e, t) => { let o = !1; setTimeout(() => { o = !0, t(new Error("The open request was blocked and timed out")); }, this.OPEN_TIMEOUT); let s = indexedDB.open(this._name, this._version); s.onerror = () => t(s.error), s.onupgradeneeded = n => { o ? (s.transaction.abort(), s.result.close()) : typeof this._onupgradeneeded == "function" && this._onupgradeneeded(n); }, s.onsuccess = () => { let n = s.result; o ? n.close() : (n.onversionchange = this._onversionchange.bind(this), e(n)); }; }), this;
        }
        async getKey(e, t) { return (await this.getAllKeys(e, t, 1))[0]; }
        async getAll(e, t, o) { return await this.getAllMatching(e, { query: t, count: o }); }
        async getAllKeys(e, t, o) { return (await this.getAllMatching(e, { query: t, count: o, includeKeys: !0 })).map(n => n.key); }
        async getAllMatching(e, { index: t, query: o = null, direction: s = "next", count: n, includeKeys: i = !1 } = {}) { return await this.transaction([e], "readonly", (a, l) => { let d = a.objectStore(e), K = t ? d.index(t) : d, f = [], k = K.openCursor(o, s); k.onsuccess = () => { let g = k.result; g ? (f.push(i ? g : g.value), n && f.length >= n ? l(f) : g.continue()) : l(f); }; }); }
        async transaction(e, t, o) { return await this.open(), await new Promise((s, n) => { let i = this._db.transaction(e, t); i.onabort = () => n(i.error), i.oncomplete = () => s(), o(i, a => s(a)); }); }
        async _call(e, t, o, ...s) { let n = (i, a) => { let l = i.objectStore(t), d = l[e].apply(l, s); d.onsuccess = () => a(d.result); }; return await this.transaction([t], o, n); }
        close() { this._db && (this._db.close(), this._db = null); }
    };
    m.prototype.OPEN_TIMEOUT = 2000;
    var X = { readonly: ["get", "count", "getKey", "getAll", "getAllKeys"], readwrite: ["add", "put", "clear", "delete"] };
    for (let [r, e] of Object.entries(X))
        for (let t of e)
            t in IDBObjectStore.prototype && (m.prototype[t] = async function (o, ...s) { return await this._call(t, o, r, ...s); });
    var E = class {
        constructor() { this.promise = new Promise((e, t) => { this.resolve = e, this.reject = t; }); }
    };
    var W = async (r) => { await new Promise((e, t) => { let o = indexedDB.deleteDatabase(r); o.onerror = () => { t(o.error); }, o.onblocked = () => { t(new Error("Delete blocked")); }, o.onsuccess = () => { e(); }; }); };
    async function P() {
        for (let r of w)
            await r();
    }
    var q = r => new URL(String(r), location.href).href.replace(new RegExp(`^${location.origin}`), "");
    function v(r) { return new Promise(e => setTimeout(e, r)); }
    var H = 2000;
    async function L(r) {
        if (!r)
            return;
        let e = await self.clients.matchAll({ type: "window" }), t = new Set(e.map(n => n.id)), o, s = performance.now();
        for (; performance.now() - s < H && (e = await self.clients.matchAll({ type: "window" }), o = e.find(n => r ? n.id === r : !t.has(n.id)), !o);)
            await v(100);
        return o;
    }
    function B(r, e) { let t = e(); return r.waitUntil(t), t; }
    var I = { get googleAnalytics() { return c.getGoogleAnalyticsName(); }, get precache() { return c.getPrecacheName(); }, get prefix() { return c.getPrefix(); }, get runtime() { return c.getRuntimeName(); }, get suffix() { return c.getSuffix(); } };
    async function M(r, e) {
        let t = null;
        if (r.url && (t = new URL(r.url).origin), t !== self.location.origin)
            throw new u("cross-origin-copy-response", { origin: t });
        let o = r.clone(), s = { headers: new Headers(o.headers), status: o.status, statusText: o.statusText }, n = e ? e(s) : s, i = b() ? o.body : await o.blob();
        return new Response(i, n);
    }
    function F() { self.addEventListener("activate", () => self.clients.claim()); }
    function G(r) { c.updateDetails(r); }
    function V() { self.skipWaiting(); }
    var { registerQuotaErrorCallback: Vr, setCacheNameDetails: Kr, skipWaiting: Qr, _private: Yr, cacheNames: Jr, clientsClaim: Xr, copyResponse: Hr } = $;
    return { _private: Yr, cacheNames: Jr, clientsClaim: Xr, copyResponse: Hr, registerQuotaErrorCallback: Vr, setCacheNameDetails: Kr, skipWaiting: Qr };
})();
const mod4 = (async () => {
    return { ...await mod9 };
})();
const mod3 = (async () => {
    return { ...await mod8 };
})();
const mod2 = (async () => {
    return { ...await mod7 };
})();
const mod1 = (async () => {
    return { ...await mod6 };
})();
const mod = (async () => {
    return { ...await mod5 };
})();
export default (async () => {
    const { clientsClaim } = await mod;
    const { ExpirationPlugin } = await mod1;
    const { precacheAndRoute, createHandlerBoundToURL } = await mod2;
    const { registerRoute } = await mod3;
    const { StaleWhileRevalidate } = await mod4;
    const PUBLIC_URL = "https://alfredosalzillo.me/blobs-dead-or-alive/";
    clientsClaim();
    precacheAndRoute(self.__WB_MANIFEST);
    const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
    registerRoute(({ request, url }) => {
        if (request.mode !== "navigate") {
            return false;
        }
        if (url.pathname.startsWith("/_")) {
            return false;
        }
        if (url.pathname.match(fileExtensionRegexp)) {
            return false;
        }
        return true;
    }, createHandlerBoundToURL(PUBLIC_URL + "/index.html"));
    registerRoute(({ url }) => url.origin === self.location.origin && url.pathname.endsWith(".png"), new StaleWhileRevalidate({
        cacheName: "images", plugins: [
            new ExpirationPlugin({ maxEntries: 50 })
        ]
    }));
    self.addEventListener("message", (event) => {
        if (event.data && event.data.type === "SKIP_WAITING") {
            self.skipWaiting();
        }
    });
    return {};
})();
