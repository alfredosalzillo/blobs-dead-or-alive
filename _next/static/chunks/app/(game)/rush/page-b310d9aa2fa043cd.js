(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{9791:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n}},6370:function(e,t,r){Promise.resolve().then(r.bind(r,5328)),Promise.resolve().then(r.t.bind(r,5093,23)),Promise.resolve().then(r.t.bind(r,6477,23))},7537:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(9268),o=r(6006),l=r(381);let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[...e].map(e=>{let{x:t,y:r}=e;return[t,r]});if(t){let e=r[r.length-1],t=r[r.length-2],n=r[0],o=r[1];r.unshift(e),r.unshift(t),r.push(n),r.push(o)}return r.flat()};var s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=a(e,r),o=n.length,l=o-4,s=r?n[2]:n[0],i=r?n[3]:n[1],u="M".concat([s,i]),c=r?2:0,d=r?o-4:o-2;for(let e=c;e<d;e+=2){let r=e?n[e-2]:n[0],o=e?n[e-1]:n[1],a=n[e],s=n[e+1],i=n[e+2],c=n[e+3],d=e!==l?n[e+4]:i,f=e!==l?n[e+5]:c,_=a+(i-r)/6*t,p=s+(c-o)/6*t,m=i-(d-a)/6*t,v=c-(f-s)/6*t;u+="C".concat([_,p,m,v,i,c])}return u},i=r(9791),u=r(6185),c=r.n(u);let d=e=>{let{x:t,y:r,size:o,colors:l}=e;return(0,n.jsxs)("g",{transform:"matrix(1,0,0,1,".concat(t,",").concat(r,")"),className:c().eye,children:[(0,n.jsx)("circle",{r:o,cx:"0",cy:"0",strokeWidth:"2",stroke:l.dark,fill:l.light,className:c().iris}),(0,n.jsx)("circle",{r:o/2,cx:"0",cy:"0",fill:l.dark,className:c().pupil,style:{"--radius":"".concat(o/2,"px")}})]})},f=["eye-roll","eye-roll-reverse","eye-converge","eye-converge-reverse"],_=()=>(0,l.T)(f),p=e=>{let{width:t,height:r,body:a,eyes:u,colors:f,animated:p}=e,[m,v]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(p&&!m){let e=setTimeout(()=>v(_),(0,l.M)(0,2e4));return()=>clearTimeout(e)}},[p,m,v]),(0,n.jsxs)("svg",{viewBox:"0 0 ".concat(t," ").concat(r),className:(0,i.Z)(c().root,{[c().animated]:p,[c().roll]:"eye-roll"===m,[c().rollReverse]:"eye-roll-reverse"===m,[c().converge]:"eye-converge"===m,[c().convergeReverse]:"eye-converge-reverse"===m,[c().flock]:"eye-flock"===m}),onClick:()=>v("eye-flock"),onAnimationEnd:()=>v(""),children:[(0,n.jsx)("path",{d:s(a,1,!0),strokeWidth:2,stroke:f.dark,fill:f.primary}),(0,n.jsx)("g",{children:u.map(e=>(0,n.jsx)(d,{...e,colors:f},[e.x,e.y,e.size].join("-")))})]})};var m=p},5328:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(9268),o=r(884),l=r(6006),a=r(7537),s=r(9234),i=r.n(s),u=r(6008);let c=(e,t)=>{let[r,n]=(0,l.useReducer)(e,t);(0,l.useEffect)(()=>{let e=0,t=0,r=()=>{e=window.requestAnimationFrame(e=>{let o=e-t;n({type:"update-elapsed",payload:o}),t=e,r()})};return r(),()=>window.cancelAnimationFrame(e)},[]);let o=e=>n({type:"next",payload:e}),a=()=>n({type:"restart",payload:void 0});return{...r,next:o,restart:a}};var d=r(5081),f=r.n(d),_=r(1395),p=r.n(_);let m=e=>{let{points:t,time:r,elapsed:o,round:l}=e;return(0,n.jsxs)("div",{className:p().root,children:[(0,n.jsxs)("div",{className:p().info,children:[(0,n.jsxs)("progress",{id:"time-progress",value:(r-o)/r,max:1,"data-animated":o>0,className:p().progress,children:[o,"ms"]}),(0,n.jsxs)("label",{htmlFor:"time-progress",className:p().value,children:[Math.round(r-o),"ms"]})]}),(0,n.jsxs)("div",{className:p().info,children:[(0,n.jsx)("small",{children:"ROUND"}),(0,n.jsx)("span",{className:p().value,children:l})]}),(0,n.jsxs)("div",{className:p().info,children:[(0,n.jsx)("small",{children:"POINTS"}),(0,n.jsx)("span",{className:p().value,children:t})]})]})},v=i()(()=>r.e(97).then(r.bind(r,1097)),{loadableGenerated:{webpack:()=>[1097]},ssr:!1}),h=i()(()=>r.e(800).then(r.bind(r,9800)),{loadableGenerated:{webpack:()=>[9800]},ssr:!1}),y=e=>{let t=Math.sqrt(e),r=Math.sqrt(e);return{gridTemplateColumns:"repeat(".concat(r,", calc( 100% / ").concat(r,"))"),gridTemplateRows:"repeat(".concat(t,", calc( 100% / ").concat(t,"))")}},g=e=>{let{strategy:t,initialState:r}=e,l=(0,u.useRouter)(),s=c(t,r);return(0,n.jsxs)("div",{className:f().root,children:[(0,n.jsxs)("div",{className:f().header,children:[(0,n.jsx)(m,{round:s.round,points:s.points,elapsed:s.elapsed,time:s.time}),(0,n.jsx)(o.Z,{picture:(0,n.jsx)(a.Z,{...s.wanted})})]}),(0,n.jsx)("div",{className:f().board,style:y(s.blobs.length),children:s.blobs.map(e=>(0,n.jsx)("div",{role:"button",tabIndex:-1,className:f().box,onClick:()=>s.next(e),style:{backgroundColor:e.colors.dark},children:(0,n.jsx)(a.Z,{...e,animated:!0})},e.id))}),(0,n.jsx)(v,{onStart:()=>s.restart(),open:"start"===s.status}),(0,n.jsx)(h,{round:s.round,points:s.points,captured:s.captured,onRetry:()=>s.restart(),onBack:()=>l.back(),open:"loose"===s.status})]})};var x=r(1224),b=r(381);let j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;return Array(e).fill(0).map(()=>(0,x.pR)(200,200))},N=(e,t)=>{let r=j(9);return{blobs:r,captured:[],wanted:(0,b.T)(r),time:3e3,elapsed:0,points:0,round:e,status:t}},k=e=>Math.round(100*(e.time-e.elapsed)/e.time),O=e=>1e3+2e3/2**(e.round-1),M=e=>{let t=j(e.round<=3?9:16);return{blobs:t,captured:[...e.captured,e.wanted],wanted:(0,b.T)(t),time:e.time-e.elapsed+O(e),elapsed:0,points:e.points+k(e),round:e.round+1,status:"run"}},R=(e,t)=>{switch(t.type){case"restart":return N(1,"run");case"next":if(t.payload.id===e.wanted.id)return M(e);return e;case"update-elapsed":var r;if("run"!==e.status)return e;return r=Math.min(e.elapsed+t.payload,e.time),{...e,elapsed:r,status:e.time===r?"loose":e.status};default:return e}},S=e=>{let{initialState:t}=e;return(0,n.jsx)(g,{strategy:R,initialState:t})};var w=S},884:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(9268);r(6006);var o=r(8791),l=r.n(o);let a=e=>{let{picture:t}=e;return(0,n.jsxs)("div",{className:l().root,children:[(0,n.jsx)("div",{className:l().title,children:"WANTED"}),(0,n.jsx)("div",{className:l().subtitle,children:"Dead or Alive"}),(0,n.jsx)("div",{className:l().picture,children:t}),(0,n.jsx)("div",{className:l().reward,children:"100 REWARD"})]})};var s=a},1224:function(e,t,r){"use strict";r.d(t,{pR:function(){return i}});var n=r(381),o=r(1083).Buffer;let l=()=>{let e=(0,n.M)(0,360),t=(0,n.M)(75,100),r=(0,n.M)(75,95),o="hsl(".concat(e,", ").concat(t,"%, ").concat(r,"%)"),l="hsl(".concat(e,", ").concat(t,"%, 2%)"),a="hsl(".concat(e,", ").concat(t,"%, 98%)");return{primary:o,dark:l,light:a}},a=(e,t,r)=>{let o=(0,n.M)(3,12),l=2*Math.PI/o;return Array(o).fill(0).map((o,a)=>{let s=(0,n.M)(.75,1,!0);return{x:e+Math.cos(a*l)*(r*s),y:t+Math.sin(a*l)*(r*s)}})},s=(e,t,r)=>{let o=(0,n.M)(0,1,!0)>.75,l=(0,n.M)(r/2,r);return o?[{x:e,y:t,size:l}]:[{y:t,size:l,x:e-r},{y:t,size:l,x:e+r}]},i=(e,t)=>{let r=e/2,i=t/2,u=(0,n.M)(50,80),c=l(),d=a(r,i,u),f=s(r,i,u/2),_=o.from(JSON.stringify({x:r,y:i,size:u,colors:c,body:d,eyes:f})).toString("base64");return{id:_,x:r,y:i,width:e,height:t,body:d,eyes:f,colors:c}}},381:function(e,t,r){"use strict";r.d(t,{M:function(){return n},T:function(){return o}});let n=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Math.random()*(t-e)+e;return r?n:Math.floor(n)};function o(e){return e[n(0,e.length)]}},9234:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(7155),o=r(6927);r(6006);let l=o._(r(6403));function a(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){let r=l.default,o={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};"function"==typeof e&&(o.loader=e),Object.assign(o,t);let s=o.loader,i=()=>null!=s?s().then(a):Promise.resolve(a(()=>null));return r(n._({},o,{loader:i}))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return o},NoSSR:function(){return l}}),r(6927),r(6006);let n=r(8131);function o(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function l(e){let{children:t}=e;return t}},6403:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(6927),o=n._(r(6006)),l=r(2666),a=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function r(e){let r=t.loading,n=o.default.createElement(r,{isLoading:!0,pastDelay:!0,error:null}),a=t.ssr?o.default.Fragment:l.NoSSR,s=t.lazy;return o.default.createElement(o.default.Suspense,{fallback:n},o.default.createElement(a,null,o.default.createElement(s,e)))}return t.lazy=o.default.lazy(t.loader),r.displayName="LoadableComponent",r}},6185:function(e){e.exports={pupil:"Blob_pupil__Xi_Sd",animated:"Blob_animated__J97Xj",roll:"Blob_roll__cuxIF",rollReverse:"Blob_rollReverse__ugqnG",converge:"Blob_converge__BHTlC",eye:"Blob_eye__XTnks","converge-left":"Blob_converge-left__P7VeS","converge-right":"Blob_converge-right___pjmP",convergeReverse:"Blob_convergeReverse__wNxUL",flock:"Blob_flock__8bZO7"}},1395:function(e){e.exports={root:"Controls_root__YSOKG",progress:"Controls_progress__3gUrl",info:"Controls_info__xAs7I",value:"Controls_value__XNST4"}},5081:function(e){e.exports={root:"Game_root__Qug20",header:"Game_header__4JDv7",board:"Game_board__pV8j0"}},5093:function(e){e.exports={root:"Header_root__UHkD0"}},6477:function(e){e.exports={root:"SmallLogo_root__4Or2G"}},8791:function(e){e.exports={root:"WantedPoster_root__rzQLR",title:"WantedPoster_title__AocQM",subtitle:"WantedPoster_subtitle__5OR8d",picture:"WantedPoster_picture__pcHqz",reward:"WantedPoster_reward__F5S_2"}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,l={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!i.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:c,props:l,_owner:s.current}}t.Fragment=l,t.jsx=u,t.jsxs=u},9268:function(e,t,r){"use strict";e.exports=r(3177)},6008:function(e,t,r){e.exports=r(167)}},function(e){e.O(0,[83,667,231,744],function(){return e(e.s=6370)}),_N_E=e.O()}]);