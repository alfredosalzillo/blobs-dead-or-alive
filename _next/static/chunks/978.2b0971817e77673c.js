(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[978],{819:function(t,r,e){"use strict";e.d(r,{Z:function(){return l}});var n=e(7437);e(2265);var o=e(875),c=e(3397),a=e.n(c),l=t=>{let{children:r,color:e="primary",fullWidth:c=!1,className:l,...i}=t;return(0,n.jsx)("button",{...i,className:(0,o.Z)(a().root,{[a().fullWidth]:c,[a().primary]:"primary"===e,[a().accent]:"accent"===e},l),children:r})}},9718:function(t,r,e){"use strict";e.d(r,{Z:function(){return d}});var n=e(7437),o=e(2265),c=e(875),a=e(4887),l=e(4501),i=e.n(l);let u=()=>(0,o.useMemo)(()=>{let t=document.getElementById("modal-root");if(t)return t;let r=document.createElement("div");return r.id="modal-root",document.body.appendChild(r),r},[]);var d=t=>{let{children:r,open:e=!1}=t,o=u();return(0,a.createPortal)((0,n.jsx)("div",{className:(0,c.Z)(i().backdrop,{[i().open]:e}),children:(0,n.jsx)("dialog",{className:i().root,open:e,children:r})}),o)}},8978:function(t,r,e){"use strict";e.r(r);var n=e(7437);e(2265);var o=e(9718),c=e(819),a=e(8704),l=e(9825),i=e(2948),u=e(9082);let d=(0,a.pR)(200,200);r.default=t=>{let{onStart:r,open:e}=t;return(0,n.jsxs)(o.Z,{open:e,children:[(0,n.jsx)(u.Z,{variant:"h1",children:"Instructions"}),(0,n.jsx)(i.Z,{picture:(0,n.jsx)(l.Z,{...d})}),(0,n.jsx)(u.Z,{variant:"body",paragraph:!0,gutterTop:!0,children:"Find the WANTED BLOB before the time end."}),(0,n.jsx)(c.Z,{color:"accent",type:"button",fullWidth:!0,onClick:r,children:"START"})]})}},8704:function(t,r,e){"use strict";e.d(r,{pR:function(){return i}});var n=e(2089),o=e(6300).Buffer;let c=()=>{let t=(0,n.M)(0,360),r=(0,n.M)(75,100),e=(0,n.M)(75,95);return{primary:"hsl(".concat(t,", ").concat(r,"%, ").concat(e,"%)"),dark:"hsl(".concat(t,", ").concat(r,"%, 2%)"),light:"hsl(".concat(t,", ").concat(r,"%, 98%)")}},a=(t,r,e)=>{let o=(0,n.M)(3,12),c=2*Math.PI/o;return Array(o).fill(0).map((o,a)=>{let l=(0,n.M)(.75,1,!0);return{x:t+e*l*Math.cos(a*c),y:r+e*l*Math.sin(a*c)}})},l=(t,r,e)=>{let o=(0,n.M)(0,1,!0)>.75,c=(0,n.M)(e/2,e);return o?[{x:t,y:r,size:c}]:[{y:r,size:c,x:t-e},{y:r,size:c,x:t+e}]},i=(t,r)=>{let e=t/2,i=r/2,u=(0,n.M)(50,80),d=c(),s=a(e,i,u),p=l(e,i,u/2);return{id:o.from(JSON.stringify({x:e,y:i,size:u,colors:d,body:s,eyes:p})).toString("base64"),x:e,y:i,width:t,height:r,body:s,eyes:p,colors:d}}},3397:function(t){t.exports={root:"Button_root__G4tzR",primary:"Button_primary__WTwSy",accent:"Button_accent__jLPZz",fullWidth:"Button_fullWidth__GfUJR"}},4501:function(t){t.exports={root:"Modal_root__vOz2t",backdrop:"Modal_backdrop__oq4OJ",open:"Modal_open__iQdxp"}}}]);