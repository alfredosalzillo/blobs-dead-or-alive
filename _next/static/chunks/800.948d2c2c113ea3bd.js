(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{9559:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var o=e(9268);e(6006);var r=e(9791),a=e(5106),l=e.n(a);let i=t=>{let{children:n,color:e="primary",fullWidth:a=!1,className:i,...c}=t;return(0,o.jsx)("button",{...c,className:(0,r.Z)(l().root,{[l().fullWidth]:a,[l().primary]:"primary"===e,[l().accent]:"accent"===e},i),children:n})};var c=i},9800:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return h}});var o=e(9268);e(6006);var r=e(1005),a=e(7537),l=e(9559),i=e(5804),c=e(4328),s=e.n(c);let d=t=>{let{onRetry:n,onBack:e,points:c,round:d,captured:h=[],open:u=!1}=t;return(0,o.jsxs)(r.Z,{open:u,children:[(0,o.jsx)(i.Z,{variant:"h1",children:"You LOOSE"}),(0,o.jsxs)("div",{className:s().content,children:[(0,o.jsx)(i.Z,{variant:"h2",children:"RESULTS"}),(0,o.jsxs)("div",{className:s().info,children:[c," ",(0,o.jsx)("small",{children:"POINTS"})]}),(0,o.jsxs)("div",{className:s().info,children:[d," ",(0,o.jsx)("small",{children:"ROUNDS"})]}),(0,o.jsxs)("div",{className:s().info,children:[h.length," ",(0,o.jsx)("small",{children:"BLOBS CAPTURED"})]}),(0,o.jsx)("div",{className:s().blobs,children:h.map(t=>(0,o.jsx)("div",{className:s().blob,children:(0,o.jsx)(a.Z,{...t},t.id)},t.id))})]}),(0,o.jsxs)("div",{className:s().actions,children:[(0,o.jsx)(l.Z,{color:"accent",type:"button",fullWidth:!0,onClick:n,children:"RETRY"}),(0,o.jsx)(l.Z,{color:"accent",type:"button",fullWidth:!0,onClick:e,children:"BACK TO MENU"})]})]})};var h=d},1005:function(t,n,e){"use strict";e.d(n,{Z:function(){return h}});var o=e(9268),r=e(6006),a=e(9791),l=e(8431),i=e(6491),c=e.n(i);let s=()=>(0,r.useMemo)(()=>{let t=document.getElementById("modal-root");if(t)return t;let n=document.createElement("div");return n.id="modal-root",document.body.appendChild(n),n},[]),d=t=>{let{children:n,open:e=!1}=t,r=s();return(0,l.createPortal)((0,o.jsx)("div",{className:(0,a.Z)(c().backdrop,{[c().open]:e}),children:(0,o.jsx)("dialog",{className:c().root,open:e,children:n})}),r)};var h=d},5804:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var o=e(9268);e(6006);var r=e(9791),a=e(7766),l=e.n(a);let i={body:"p",caption:"p",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subheading:"span"};var c=function(t){let{align:n,bold:e,children:a,className:c,color:s,component:d,gutterBottom:h,gutterTop:u,noWrap:_,paragraph:p,variant:m="body",...f}=t,b=d||(p?"p":i[m])||"span";return(0,o.jsx)(b,{...f,className:(0,r.Z)({[l().alignCenter]:"center"===n,[l().alignRight]:"right"===n,[l().alignLeft]:"left"===n,[l().alignJustify]:"justify"===n,[l().alignInherit]:"inherit"===n,[l().bold]:e,[l().noWrap]:_,[l().colorPrimary]:"primary"===s,[l().colorAccent]:"accent"===s,[l().alignInherit]:"inherit"===s,[l().h1]:"h1"===m,[l().h2]:"h2"===m,[l().h3]:"h3"===m,[l().h4]:"h4"===m,[l().h5]:"h5"===m,[l().h6]:"h6"===m,[l().body]:"body"===m,[l().paragraph]:p,[l().gutterBottom]:h,[l().gutterTop]:u},c),children:a})}},5106:function(t){t.exports={root:"Button_root__3vtfo",primary:"Button_primary__RWocB",accent:"Button_accent__MY0R0",fullWidth:"Button_fullWidth__L87a1"}},4328:function(t){t.exports={content:"LoseModal_content__bO0Qo",info:"LoseModal_info__hGYaC",blobs:"LoseModal_blobs__pSrxk",blob:"LoseModal_blob__KVa1X",actions:"LoseModal_actions__poXme"}},6491:function(t){t.exports={root:"Modal_root__e5Wrb",backdrop:"Modal_backdrop__NMXz5",open:"Modal_open__0fWmM"}}}]);