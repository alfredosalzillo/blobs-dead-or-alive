if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const o=e=>a(e,n),d={module:{uri:n},exports:t,require:o};s[n]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/blobs-dead-or-alive/_next/static/OcowpLpmV-HN_LcswIh1E/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/blobs-dead-or-alive/_next/static/OcowpLpmV-HN_LcswIh1E/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/blobs-dead-or-alive/_next/static/chunks/231-cff63e7439d21462.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/2443530c-47463029796ee1a7.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/523.b881fb6e6b1dd4bb.js",revision:"b881fb6e6b1dd4bb"},{url:"/blobs-dead-or-alive/_next/static/chunks/79.574d28c1be4ee0ea.js",revision:"574d28c1be4ee0ea"},{url:"/blobs-dead-or-alive/_next/static/chunks/800.46475b605cb6fe62.js",revision:"46475b605cb6fe62"},{url:"/blobs-dead-or-alive/_next/static/chunks/83-f7b596e94da542ec.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/97.be598869b11813b7.js",revision:"be598869b11813b7"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/layout-be9143bc1b8ddca3.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/page-b88da80e69ca5a81.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/rush/page-54efd4431098fc9e.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(markdown)/layout-942f6eebd3330966.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(markdown)/privacy-policy/page-686cfe784c2b7831.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/layout-bc82340acb08d689.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/main-7677cb9f6d71849f.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/main-app-9dee2d0a7cb92008.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/blobs-dead-or-alive/_next/static/chunks/webpack-8594e61b304255eb.js",revision:"OcowpLpmV-HN_LcswIh1E"},{url:"/blobs-dead-or-alive/_next/static/css/2e94b6e7f1c1d74f.css",revision:"2e94b6e7f1c1d74f"},{url:"/blobs-dead-or-alive/_next/static/css/676b006bcf4defe9.css",revision:"676b006bcf4defe9"},{url:"/blobs-dead-or-alive/_next/static/css/69d4d1d49bab8a4b.css",revision:"69d4d1d49bab8a4b"},{url:"/blobs-dead-or-alive/_next/static/css/76effcf8a811ed97.css",revision:"76effcf8a811ed97"},{url:"/blobs-dead-or-alive/_next/static/css/d981a8ccde75d900.css",revision:"d981a8ccde75d900"},{url:"/blobs-dead-or-alive/_next/static/css/da65bdd754f186c4.css",revision:"da65bdd754f186c4"},{url:"/blobs-dead-or-alive/_next/static/css/e3a3e1066b699c76.css",revision:"e3a3e1066b699c76"},{url:"/blobs-dead-or-alive/_next/static/css/ec375c656802a93b.css",revision:"ec375c656802a93b"},{url:"/blobs-dead-or-alive/_next/static/css/f7fc48cb2a4be56d.css",revision:"f7fc48cb2a4be56d"},{url:"/blobs-dead-or-alive/_next/static/media/b693895245ec3b44-s.p.woff2",revision:"fb778c181faf9f8121af37752843902a"},{url:"/blobs-dead-or-alive/_next/static/media/b8e32b7d9b7c4797-s.woff2",revision:"06a80ddd66a45dc5a42bb5257e5e4a4e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/blobs-dead-or-alive",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>{if(!e)return!1;const a=s.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e,sameOrigin:s})=>!!s&&!e.pathname.startsWith("/api/")),new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));