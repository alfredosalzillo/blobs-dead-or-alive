if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>a(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/blobs-dead-or-alive/_next/static/chunks/231-86833c317420fedc.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/2443530c-18acf660bc62a16b.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/410-29cfda471910150d.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/523.00f7aa8c31480a01.js",revision:"00f7aa8c31480a01"},{url:"/blobs-dead-or-alive/_next/static/chunks/79.574d28c1be4ee0ea.js",revision:"574d28c1be4ee0ea"},{url:"/blobs-dead-or-alive/_next/static/chunks/800.46475b605cb6fe62.js",revision:"46475b605cb6fe62"},{url:"/blobs-dead-or-alive/_next/static/chunks/828.a74e9f05b5d7b868.js",revision:"a74e9f05b5d7b868"},{url:"/blobs-dead-or-alive/_next/static/chunks/83-f7b596e94da542ec.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/97.22e33da8af301209.js",revision:"22e33da8af301209"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/campaign/%5Bstage%5D/page-83c84559e05e7450.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/layout-d491765f79890884.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/page-799b8e1033101258.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/rush/page-61e45ff8d63ae891.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(markdown)/layout-86a674fb9a7875c3.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(markdown)/privacy-policy/page-97fac7b9f384708a.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(markdown)/terms-and-conditions/page-a57114acd1e833ce.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/layout-284eb5a2798b2b84.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/main-05a935f2a692734a.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/main-app-9dee2d0a7cb92008.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/blobs-dead-or-alive/_next/static/chunks/webpack-95d8ca00872cdf5a.js",revision:"snGwpVDEKQrDvPnayL9h1"},{url:"/blobs-dead-or-alive/_next/static/css/03e00bae2e5e22e9.css",revision:"03e00bae2e5e22e9"},{url:"/blobs-dead-or-alive/_next/static/css/0d545c70b7c2c05a.css",revision:"0d545c70b7c2c05a"},{url:"/blobs-dead-or-alive/_next/static/css/3ce9321f9f8fb3d4.css",revision:"3ce9321f9f8fb3d4"},{url:"/blobs-dead-or-alive/_next/static/css/412b5fce6500003b.css",revision:"412b5fce6500003b"},{url:"/blobs-dead-or-alive/_next/static/css/51645632c0983c0b.css",revision:"51645632c0983c0b"},{url:"/blobs-dead-or-alive/_next/static/css/74e5bd5e96f69949.css",revision:"74e5bd5e96f69949"},{url:"/blobs-dead-or-alive/_next/static/css/76effcf8a811ed97.css",revision:"76effcf8a811ed97"},{url:"/blobs-dead-or-alive/_next/static/css/da65bdd754f186c4.css",revision:"da65bdd754f186c4"},{url:"/blobs-dead-or-alive/_next/static/css/e3a3e1066b699c76.css",revision:"e3a3e1066b699c76"},{url:"/blobs-dead-or-alive/_next/static/css/ec375c656802a93b.css",revision:"ec375c656802a93b"},{url:"/blobs-dead-or-alive/_next/static/css/f7fc48cb2a4be56d.css",revision:"f7fc48cb2a4be56d"},{url:"/blobs-dead-or-alive/_next/static/media/b693895245ec3b44-s.p.woff2",revision:"fb778c181faf9f8121af37752843902a"},{url:"/blobs-dead-or-alive/_next/static/media/b8e32b7d9b7c4797-s.woff2",revision:"06a80ddd66a45dc5a42bb5257e5e4a4e"},{url:"/blobs-dead-or-alive/_next/static/snGwpVDEKQrDvPnayL9h1/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/blobs-dead-or-alive/_next/static/snGwpVDEKQrDvPnayL9h1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/blobs-dead-or-alive",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>{if(!e)return!1;const a=s.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e,sameOrigin:s})=>!!s&&!e.pathname.startsWith("/api/")),new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
