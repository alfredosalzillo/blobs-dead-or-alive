(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{4738:function(t,e,n){Promise.resolve().then(n.bind(n,4358)),Promise.resolve().then(n.bind(n,5276))},5276:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var r=n(9268),s=n(6006),u=n(2435);let a=t=>({...t[0],captured:[],round:1,points:0,elapsed:0,status:"start"}),i=t=>(e,n)=>{let r=t[e.round-1];switch(n.type){case"restart":return{...a(t),status:"run"};case"capture":if("run"!==e.status||n.payload.id!==e.wanted.id)return e;if(e.round<t.length)return{...e,...t[e.round]||{},captured:[...e.captured,e.wanted],points:e.points+Math.round(r.points*(e.time-e.elapsed)/e.time),time:e.time-e.elapsed+t[e.round].time,elapsed:0,round:e.round+1,status:"run"};return{...e,captured:[...e.captured,e.wanted],points:e.points+Math.round(r.points*(e.time-e.elapsed)/e.time),status:"win"};case"update-elapsed":var s;if("run"!==e.status)return e;return s=Math.min(e.elapsed+n.payload,e.time),{...e,elapsed:s,status:e.time===s?"loose":e.status};default:return e}},d=t=>{let{stage:e}=t,n=(0,s.useMemo)(()=>i(e),[e]),d=(0,s.useMemo)(()=>a(e),[e]);return(0,r.jsx)(u.Z,{strategy:n,initialState:d})};var o=d}},function(t){t.O(0,[146,515,667,231,744],function(){return t(t.s=4738)}),_N_E=t.O()}]);