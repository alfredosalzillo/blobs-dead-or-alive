(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{8628:function(t,e,n){Promise.resolve().then(n.bind(n,1797)),Promise.resolve().then(n.bind(n,3702))},3702:function(t,e,n){"use strict";n.d(e,{default:function(){return d}});var s=n(7437),u=n(2265),r=n(5199);let a=t=>({...t[0],captured:[],round:1,points:0,elapsed:0,status:"start"}),i=t=>(e,n)=>{let s=t[e.round-1];switch(n.type){case"restart":return{...a(t),status:"run"};case"capture":if("run"!==e.status||n.payload.id!==e.wanted.id)return e;if(e.round<t.length)return{...e,...t[e.round]||{},captured:[...e.captured,e.wanted],points:e.points+Math.round(s.points*(e.time-e.elapsed)/e.time),time:e.time-e.elapsed+t[e.round].time,elapsed:0,round:e.round+1,status:"run"};return{...e,captured:[...e.captured,e.wanted],points:e.points+Math.round(s.points*(e.time-e.elapsed)/e.time),status:"win"};case"update-elapsed":let u;if("run"!==e.status)return e;return u=Math.min(e.elapsed+n.payload,e.time),{...e,elapsed:u,status:e.time===u?"loose":e.status};default:return e}};var d=t=>{let{stage:e}=t,n=(0,u.useMemo)(()=>i(e),[e]),d=(0,u.useMemo)(()=>a(e),[e]);return(0,s.jsx)(r.Z,{strategy:n,initialState:d})}}},function(t){t.O(0,[324,114,444,438,971,190,744],function(){return t(t.s=8628)}),_N_E=t.O()}]);