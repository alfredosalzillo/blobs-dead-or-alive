if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>a(e,t),r={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>r[e]||c(e)))).then((e=>(i(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/blobs-dead-or-alive/_next/static/YbQDmNoexzze_U9665vKq/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/blobs-dead-or-alive/_next/static/YbQDmNoexzze_U9665vKq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/blobs-dead-or-alive/_next/static/chunks/231-e136ebac3f1dd2e4.js",revision:"YbQDmNoexzze_U9665vKq"},{url:"/blobs-dead-or-alive/_next/static/chunks/2443530c-1cd1ec37cc9d737c.js",revision:"YbQDmNoexzze_U9665vKq"},{url:"/blobs-dead-or-alive/_next/static/chunks/863-33c1119faac0980f.js",revision:"YbQDmNoexzze_U9665vKq"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/layout-c5de862782e0b680.js",revision:"YbQDmNoexzze_U9665vKq"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/page-69ad11bf40a75670.js",revision:"YbQDmNoexzze_U9665vKq"},{url:"/blobs-dead-or-alive/_next/static/chunks/main-1c3c6e47643660c6.js",revision:"YbQDmNoexzze_U9665vKq"},{url:"/blobs-dead-or-alive/_next/static/chunks/main-app-9dee2d0a7cb92008.js",revision:"YbQDmNoexzze_U9665vKq"},{url:"/blobs-dead-or-alive/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"YbQDmNoexzze_U9665vKq"},{url:"/blobs-dead-or-alive/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"YbQDmNoexzze_U9665vKq"},{url:"/blobs-dead-or-alive/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/blobs-dead-or-alive/_next/static/chunks/webpack-2e30c266749438d0.js",revision:"YbQDmNoexzze_U9665vKq"},{url:"/blobs-dead-or-alive/_next/static/css/ca71e35058b58a08.css",revision:"ca71e35058b58a08"},{url:"/blobs-dead-or-alive/_next/static/media/b693895245ec3b44-s.p.woff2",revision:"fb778c181faf9f8121af37752843902a"},{url:"/blobs-dead-or-alive/_next/static/media/b8e32b7d9b7c4797-s.woff2",revision:"06a80ddd66a45dc5a42bb5257e5e4a4e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/blobs-dead-or-alive",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>{if(!e)return!1;const a=s.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e,sameOrigin:s})=>!!s&&!e.pathname.startsWith("/api/")),new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
