(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{9791:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o);else for(r in t)t[r]&&(n&&(n+=" "),n+=r)}return n}(e))&&(o&&(o+=" "),o+=t);return o}},7537:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var o=r(9268),n=r(6006),l=r(9791),a=r(381);let s=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[...e].map(e=>{let{x:t,y:r}=e;return[t,r]});if(t){let e=r[r.length-1],t=r[r.length-2],o=r[0],n=r[1];r.unshift(e),r.unshift(t),r.push(o),r.push(n)}return r.flat()};var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=s(e,r),n=o.length,l=n-4,a=r?o[2]:o[0],i=r?o[3]:o[1],c="M".concat([a,i]),u=r?2:0,_=r?n-4:n-2;for(let e=u;e<_;e+=2){let r=e?o[e-2]:o[0],n=e?o[e-1]:o[1],a=o[e],s=o[e+1],i=o[e+2],u=o[e+3],_=e!==l?o[e+4]:i,d=e!==l?o[e+5]:u,p=a+(i-r)/6*t,f=s+(u-n)/6*t,y=i-(_-a)/6*t,h=u-(d-s)/6*t;c+="C".concat([p,f,y,h,i,u])}return c},c=r(6185),u=r.n(c);let _=e=>{let{x:t,y:r,size:n,colors:l}=e;return(0,o.jsxs)("g",{transform:"matrix(1,0,0,1,".concat(t,",").concat(r,")"),className:u().eye,children:[(0,o.jsx)("circle",{r:n,cx:"0",cy:"0",strokeWidth:"2",stroke:l.dark,fill:l.light,className:u().iris}),(0,o.jsx)("circle",{r:n/2,cx:"0",cy:"0",fill:l.dark,className:u().pupil,style:{"--radius":"".concat(n/2,"px")}})]})},d=["eye-roll","eye-roll-reverse","eye-converge","eye-converge-reverse"],p=()=>(0,a.T)(d),f=e=>{let{animated:t,body:r,className:s,colors:c,eyes:d,height:f,width:y}=e,[h,g]=(0,n.useState)(null);return(0,n.useEffect)(()=>{if(t&&!h){let e=setTimeout(()=>g(p),(0,a.M)(0,2e4));return()=>clearTimeout(e)}},[t,h,g]),(0,o.jsxs)("svg",{viewBox:"0 0 ".concat(y," ").concat(f),className:(0,l.Z)(u().root,{[u().animated]:t,[u().roll]:"eye-roll"===h,[u().rollReverse]:"eye-roll-reverse"===h,[u().converge]:"eye-converge"===h,[u().convergeReverse]:"eye-converge-reverse"===h,[u().flock]:"eye-flock"===h},s),onClick:()=>g("eye-flock"),onAnimationEnd:()=>g(""),children:[(0,o.jsx)("path",{d:i(r,1,!0),strokeWidth:2,stroke:c.dark,fill:c.primary}),(0,o.jsx)("g",{children:d.map(e=>(0,o.jsx)(_,{...e,colors:c},[e.x,e.y,e.size].join("-")))})]})};var y=f},2435:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(9268),n=r(6006),l=r(9234),a=r.n(l),s=r(6008),i=r(7537),c=r(884);let u=(e,t)=>{let[r,o]=(0,n.useReducer)(e,t);(0,n.useEffect)(()=>{let e=0,t=0,r=()=>{e=window.requestAnimationFrame(e=>{let n=e-t;o({type:"update-elapsed",payload:n}),t=e,r()})};return r(),()=>window.cancelAnimationFrame(e)},[]);let l=e=>o({type:"capture",payload:e}),a=()=>o({type:"restart",payload:void 0});return{...r,capture:l,restart:a}};var _=r(5081),d=r.n(_),p=r(1395),f=r.n(p);let y=e=>{let{points:t,time:r,elapsed:n,round:l}=e;return(0,o.jsxs)("div",{className:f().root,children:[(0,o.jsxs)("div",{className:f().info,children:[(0,o.jsxs)("progress",{id:"time-progress",value:(r-n)/r,max:1,"data-animated":n>0,className:f().progress,children:[n,"ms"]}),(0,o.jsxs)("label",{htmlFor:"time-progress",className:f().value,children:[Math.round(r-n),"ms"]})]}),(0,o.jsxs)("div",{className:f().info,children:[(0,o.jsx)("small",{children:"ROUND"}),(0,o.jsx)("span",{className:f().value,children:l})]}),(0,o.jsxs)("div",{className:f().info,children:[(0,o.jsx)("small",{children:"POINTS"}),(0,o.jsx)("span",{className:f().value,children:t})]})]})},h=a()(()=>Promise.all([r.e(83),r.e(97)]).then(r.bind(r,1097)),{loadableGenerated:{webpack:()=>[1097]},ssr:!1}),g=a()(()=>r.e(800).then(r.bind(r,9800)),{loadableGenerated:{webpack:()=>[9800]},ssr:!1}),m=a()(()=>r.e(828).then(r.bind(r,7828)),{loadableGenerated:{webpack:()=>[7828]},ssr:!1}),v=e=>{let t=Math.sqrt(e),r=Math.sqrt(e);return{gridTemplateColumns:"repeat(".concat(r,", calc( 100% / ").concat(r,"))"),gridTemplateRows:"repeat(".concat(t,", calc( 100% / ").concat(t,"))")}},b=e=>{let{strategy:t,initialState:r}=e,n=(0,s.useRouter)(),l=u(t,r);return(0,o.jsxs)("div",{className:d().root,children:[(0,o.jsxs)("div",{className:d().header,children:[(0,o.jsx)(y,{round:l.round,points:l.points,elapsed:l.elapsed,time:l.time}),(0,o.jsx)(c.Z,{picture:(0,o.jsx)(i.Z,{...l.wanted})})]}),(0,o.jsx)("div",{className:d().board,style:v(l.blobs.length),children:l.blobs.map(e=>(0,o.jsx)("div",{role:"button",tabIndex:-1,className:d().box,onClick:()=>l.capture(e),style:{backgroundColor:e.colors.dark},children:(0,o.jsx)(i.Z,{...e,animated:!0})},e.id))}),(0,o.jsx)(h,{onStart:()=>l.restart(),open:"start"===l.status}),(0,o.jsx)(g,{round:l.round,points:l.points,captured:l.captured,onRetry:()=>l.restart(),onBack:()=>n.back(),open:"loose"===l.status}),(0,o.jsx)(m,{round:l.round,points:l.points,captured:l.captured,onRetry:()=>l.restart(),onBack:()=>n.push("/campaign/"),open:"win"===l.status})]})};var x=b},884:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var o=r(9268);r(6006);var n=r(8791),l=r.n(n);let a=e=>{let{picture:t}=e;return(0,o.jsxs)("div",{className:l().root,children:[(0,o.jsx)("div",{className:l().title,children:"WANTED"}),(0,o.jsx)("div",{className:l().subtitle,children:"Dead or Alive"}),(0,o.jsx)("div",{className:l().picture,children:t}),(0,o.jsx)("div",{className:l().reward,children:"100 REWARD"})]})};var s=a},381:function(e,t,r){"use strict";r.d(t,{M:function(){return o},T:function(){return n}});let o=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=Math.random()*(t-e)+e;return r?o:Math.floor(o)};function n(e){return e[o(0,e.length)]}},9234:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let o=r(7155),n=r(6927);r(6006);let l=n._(r(6403));function a(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:o}=e;return null}};"function"==typeof e&&(n.loader=e),Object.assign(n,t);let s=n.loader,i=()=>null!=s?s().then(a):Promise.resolve(a(()=>null));return r(o._({},n,{loader:i}))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return n},NoSSR:function(){return l}}),r(6927),r(6006);let o=r(8131);function n(){let e=Error(o.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=o.NEXT_DYNAMIC_NO_SSR_CODE,e}function l(e){let{children:t}=e;return t}},6403:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let o=r(6927),n=o._(r(6006)),l=r(2666),a=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function r(e){let r=t.loading,o=n.default.createElement(r,{isLoading:!0,pastDelay:!0,error:null}),a=t.ssr?n.default.Fragment:l.NoSSR,s=t.lazy;return n.default.createElement(n.default.Suspense,{fallback:o},n.default.createElement(a,null,n.default.createElement(s,e)))}return t.lazy=n.default.lazy(t.loader),r.displayName="LoadableComponent",r}},6185:function(e){e.exports={pupil:"Blob_pupil__Xi_Sd",animated:"Blob_animated__J97Xj",roll:"Blob_roll__cuxIF",rollReverse:"Blob_rollReverse__ugqnG",converge:"Blob_converge__BHTlC",eye:"Blob_eye__XTnks","converge-left":"Blob_converge-left__P7VeS","converge-right":"Blob_converge-right___pjmP",convergeReverse:"Blob_convergeReverse__wNxUL",flock:"Blob_flock__8bZO7"}},1395:function(e){e.exports={root:"Controls_root__YSOKG",progress:"Controls_progress__3gUrl",info:"Controls_info__xAs7I",value:"Controls_value__XNST4"}},5081:function(e){e.exports={root:"Game_root__Qug20",header:"Game_header__4JDv7",board:"Game_board__pV8j0"}},5093:function(e){e.exports={root:"Header_root__UHkD0",back:"Header_back__S0RAb"}},6477:function(e){e.exports={root:"SmallLogo_root__4Or2G"}},7766:function(e){e.exports={alignCenter:"Typography_alignCenter__bqbEF",alignRight:"Typography_alignRight_____fc",alignLeft:"Typography_alignLeft__qrYSq",alignJustify:"Typography_alignJustify__tKAWE",alignInherit:"Typography_alignInherit__tud5z",bold:"Typography_bold__6q5FB",noWrap:"Typography_noWrap__v6YfW",colorPrimary:"Typography_colorPrimary__YAOsB",colorAccent:"Typography_colorAccent__PRiva",colorInherit:"Typography_colorInherit__OPOG_",h1:"Typography_h1__tAebO",gutterBottom:"Typography_gutterBottom__ccbSM",gutterTop:"Typography_gutterTop__9Fyj1",h2:"Typography_h2__apP1o",h3:"Typography_h3__GNbdR",h4:"Typography_h4__CLt7E",h5:"Typography_h5__cHg24",h6:"Typography_h6__jL3EL",body:"Typography_body__90Skc",paragraph:"Typography_paragraph__ahyVf"}},8791:function(e){e.exports={root:"WantedPoster_root__rzQLR",title:"WantedPoster_title__AocQM",subtitle:"WantedPoster_subtitle__5OR8d",picture:"WantedPoster_picture__pcHqz",reward:"WantedPoster_reward__F5S_2"}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(6006),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,l={},c=null,u=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,o)&&!i.hasOwnProperty(o)&&(l[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===l[o]&&(l[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:u,props:l,_owner:s.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},9268:function(e,t,r){"use strict";e.exports=r(3177)},6008:function(e,t,r){e.exports=r(167)}}]);