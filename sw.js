if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const o=e=>a(e,n),d={module:{uri:n},exports:t,require:o};s[n]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/blobs-dead-or-alive/_next/static/3KeWrfdEH6FAkJFBFGo6-/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/blobs-dead-or-alive/_next/static/3KeWrfdEH6FAkJFBFGo6-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/blobs-dead-or-alive/_next/static/chunks/204-07522fa5be951c9f.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/231-86833c317420fedc.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/2443530c-18acf660bc62a16b.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/414-6c607462f2c14e2a.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/523.fd1b1edcd1cb82d9.js",revision:"fd1b1edcd1cb82d9"},{url:"/blobs-dead-or-alive/_next/static/chunks/775-b00409276a51b5b3.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/79.155655234315facb.js",revision:"155655234315facb"},{url:"/blobs-dead-or-alive/_next/static/chunks/800.948d2c2c113ea3bd.js",revision:"948d2c2c113ea3bd"},{url:"/blobs-dead-or-alive/_next/static/chunks/828.a78c79d5b7eed957.js",revision:"a78c79d5b7eed957"},{url:"/blobs-dead-or-alive/_next/static/chunks/83-f7b596e94da542ec.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/97.581c3b6cdeba3d42.js",revision:"581c3b6cdeba3d42"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/campaign/%5Bstage%5D/page-ec76ea960ba441a8.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/layout-b3a647f124ce9efe.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/page-9e47d6b873a89b87.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/rush/page-b623fb2188621a16.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(game)/settings/page-c60fbf80ada2b612.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(markdown)/layout-98ab6f938b992e0b.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(markdown)/privacy-policy/page-97fac7b9f384708a.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/(markdown)/terms-and-conditions/page-a57114acd1e833ce.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/app/layout-59c8081b61712a89.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/c104f65d-759904a23e171c93.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/main-79e44ce49ee4f787.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/main-app-9dee2d0a7cb92008.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/blobs-dead-or-alive/_next/static/chunks/webpack-db2471e0d26d1d2d.js",revision:"3KeWrfdEH6FAkJFBFGo6-"},{url:"/blobs-dead-or-alive/_next/static/css/0c2d27c044866f0d.css",revision:"0c2d27c044866f0d"},{url:"/blobs-dead-or-alive/_next/static/css/0d60dee04e31525a.css",revision:"0d60dee04e31525a"},{url:"/blobs-dead-or-alive/_next/static/css/177c9d3ef4fc6096.css",revision:"177c9d3ef4fc6096"},{url:"/blobs-dead-or-alive/_next/static/css/2c00b1ffb1b44667.css",revision:"2c00b1ffb1b44667"},{url:"/blobs-dead-or-alive/_next/static/css/4aca10a23c9e1c7e.css",revision:"4aca10a23c9e1c7e"},{url:"/blobs-dead-or-alive/_next/static/css/71b914af6aa3c0c9.css",revision:"71b914af6aa3c0c9"},{url:"/blobs-dead-or-alive/_next/static/css/763d419d915ff7b1.css",revision:"763d419d915ff7b1"},{url:"/blobs-dead-or-alive/_next/static/css/84ba919d5c9ae2f6.css",revision:"84ba919d5c9ae2f6"},{url:"/blobs-dead-or-alive/_next/static/css/9e329bd387c58990.css",revision:"9e329bd387c58990"},{url:"/blobs-dead-or-alive/_next/static/css/c5328716c54792dd.css",revision:"c5328716c54792dd"},{url:"/blobs-dead-or-alive/_next/static/css/e11ea8d0c45bfbdd.css",revision:"e11ea8d0c45bfbdd"},{url:"/blobs-dead-or-alive/_next/static/css/e40790d7b837b2d9.css",revision:"e40790d7b837b2d9"},{url:"/blobs-dead-or-alive/_next/static/media/2e36edc8be3c538c-s.p.woff2",revision:"06394f03fef97031e9f87571223c41e9"},{url:"/blobs-dead-or-alive/_next/static/media/566451ce27d47046-s.woff2",revision:"230ff30ebe9a3c0a156f2549f74b6feb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/blobs-dead-or-alive",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>{if(!e)return!1;const a=s.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e,sameOrigin:s})=>!!s&&!e.pathname.startsWith("/api/")),new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
