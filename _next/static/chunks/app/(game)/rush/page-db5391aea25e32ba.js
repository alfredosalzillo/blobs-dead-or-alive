(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{5433:function(t,e,r){Promise.resolve().then(r.bind(r,1797)),Promise.resolve().then(r.bind(r,3679))},3679:function(t,e,r){"use strict";r.d(e,{default:function(){return f}});var n=r(7437);r(2265);var a=r(5199),u=r(8704),s=r(2089);let i=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;return Array(t).fill(0).map(()=>(0,u.pR)(200,200))},l=(t,e)=>{let r=i(9);return{blobs:r,captured:[],wanted:(0,s.T)(r),time:3e3,elapsed:0,points:0,round:t,status:e}},o=t=>Math.round(100*(t.time-t.elapsed)/t.time),c=t=>1e3+2e3/2**(t.round-1),d=t=>{let e=i(t.round<=3?9:16);return{blobs:e,captured:[...t.captured,t.wanted],wanted:(0,s.T)(e),time:t.time-t.elapsed+c(t),elapsed:0,points:t.points+o(t),round:t.round+1,status:"run"}};var p=(t,e)=>{switch(e.type){case"restart":return l(1,"run");case"capture":if(e.payload.id===t.wanted.id)return d(t);return t;case"update-elapsed":let r;if("run"!==t.status)return t;return r=Math.min(t.elapsed+e.payload,t.time),{...t,elapsed:r,status:t.time===r?"loose":t.status};default:return t}},f=t=>{let{initialState:e}=t;return(0,n.jsx)(a.Z,{strategy:p,initialState:e})}},8704:function(t,e,r){"use strict";r.d(e,{pR:function(){return l}});var n=r(2089),a=r(6300).Buffer;let u=()=>{let t=(0,n.M)(0,360),e=(0,n.M)(75,100),r=(0,n.M)(75,95);return{primary:"hsl(".concat(t,", ").concat(e,"%, ").concat(r,"%)"),dark:"hsl(".concat(t,", ").concat(e,"%, 2%)"),light:"hsl(".concat(t,", ").concat(e,"%, 98%)")}},s=(t,e,r)=>{let a=(0,n.M)(3,12),u=2*Math.PI/a;return Array(a).fill(0).map((a,s)=>{let i=(0,n.M)(.75,1,!0);return{x:t+r*i*Math.cos(s*u),y:e+r*i*Math.sin(s*u)}})},i=(t,e,r)=>{let a=(0,n.M)(0,1,!0)>.75,u=(0,n.M)(r/2,r);return a?[{x:t,y:e,size:u}]:[{y:e,size:u,x:t-r},{y:e,size:u,x:t+r}]},l=(t,e)=>{let r=t/2,l=e/2,o=(0,n.M)(50,80),c=u(),d=s(r,l,o),p=i(r,l,o/2);return{id:a.from(JSON.stringify({x:r,y:l,size:o,colors:c,body:d,eyes:p})).toString("base64"),x:r,y:l,width:t,height:e,body:d,eyes:p,colors:c}}}},function(t){t.O(0,[324,114,444,300,438,971,190,744],function(){return t(t.s=5433)}),_N_E=t.O()}]);