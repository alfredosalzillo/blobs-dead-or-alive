(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{232:function(t,e,r){Promise.resolve().then(r.bind(r,2009)),Promise.resolve().then(r.t.bind(r,7766,23)),Promise.resolve().then(r.t.bind(r,5093,23)),Promise.resolve().then(r.t.bind(r,414,23)),Promise.resolve().then(r.t.bind(r,6477,23))},2009:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var n=r(9268);r(6006);var a=r(2435),u=r(1224),s=r(381);let i=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;return Array(t).fill(0).map(()=>(0,u.pR)(200,200))},o=(t,e)=>{let r=i(9);return{blobs:r,captured:[],wanted:(0,s.T)(r),time:3e3,elapsed:0,points:0,round:t,status:e}},l=t=>Math.round(100*(t.time-t.elapsed)/t.time),c=t=>1e3+2e3/2**(t.round-1),d=t=>{let e=i(t.round<=3?9:16);return{blobs:e,captured:[...t.captured,t.wanted],wanted:(0,s.T)(e),time:t.time-t.elapsed+c(t),elapsed:0,points:t.points+l(t),round:t.round+1,status:"run"}},p=(t,e)=>{switch(e.type){case"restart":return o(1,"run");case"capture":if(e.payload.id===t.wanted.id)return d(t);return t;case"update-elapsed":var r;if("run"!==t.status)return t;return r=Math.min(t.elapsed+e.payload,t.time),{...t,elapsed:r,status:t.time===r?"loose":t.status};default:return t}},f=t=>{let{initialState:e}=t;return(0,n.jsx)(a.Z,{strategy:p,initialState:e})};var h=f},1224:function(t,e,r){"use strict";r.d(e,{pR:function(){return o}});var n=r(381),a=r(1083).Buffer;let u=()=>{let t=(0,n.M)(0,360),e=(0,n.M)(75,100),r=(0,n.M)(75,95),a="hsl(".concat(t,", ").concat(e,"%, ").concat(r,"%)"),u="hsl(".concat(t,", ").concat(e,"%, 2%)"),s="hsl(".concat(t,", ").concat(e,"%, 98%)");return{primary:a,dark:u,light:s}},s=(t,e,r)=>{let a=(0,n.M)(3,12),u=2*Math.PI/a;return Array(a).fill(0).map((a,s)=>{let i=(0,n.M)(.75,1,!0);return{x:t+Math.cos(s*u)*(r*i),y:e+Math.sin(s*u)*(r*i)}})},i=(t,e,r)=>{let a=(0,n.M)(0,1,!0)>.75,u=(0,n.M)(r/2,r);return a?[{x:t,y:e,size:u}]:[{y:e,size:u,x:t-r},{y:e,size:u,x:t+r}]},o=(t,e)=>{let r=t/2,o=e/2,l=(0,n.M)(50,80),c=u(),d=s(r,o,l),p=i(r,o,l/2),f=a.from(JSON.stringify({x:r,y:o,size:l,colors:c,body:d,eyes:p})).toString("base64");return{id:f,x:r,y:o,width:t,height:e,body:d,eyes:p,colors:c}}}},function(t){t.O(0,[414,83,204,667,231,744],function(){return t(t.s=232)}),_N_E=t.O()}]);