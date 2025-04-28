import{r as b,a as u}from"./index._OACqPSs.js";var _={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function L(){if(y)return l;y=1;var e=b(),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(m,n,h){var s,p={},f=null,x=null;h!==void 0&&(f=""+h),n.key!==void 0&&(f=""+n.key),n.ref!==void 0&&(x=n.ref);for(s in n)r.call(n,s)&&!c.hasOwnProperty(s)&&(p[s]=n[s]);if(m&&m.defaultProps)for(s in n=m.defaultProps,n)p[s]===void 0&&(p[s]=n[s]);return{$$typeof:t,type:m,key:f,ref:x,props:p,_owner:i.current}}return l.Fragment=o,l.jsx=d,l.jsxs=d,l}var g;function T(){return g||(g=1,_.exports=L()),_.exports}var k=T();/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,r)=>r?r.toUpperCase():o.toLowerCase()),w=e=>{const t=S(e);return t.charAt(0).toUpperCase()+t.slice(1)},R=(...e)=>e.filter((t,o,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=u.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:i="",children:c,iconNode:d,...m},n)=>u.createElement("svg",{ref:n,...M,width:t,height:t,stroke:e,strokeWidth:r?Number(o)*24/Number(t):o,className:R("lucide",i),...m},[...d.map(([h,s])=>u.createElement(h,s)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(e,t)=>{const o=u.forwardRef(({className:r,...i},c)=>u.createElement(N,{ref:c,iconNode:t,className:R(`lucide-${j(w(e))}`,`lucide-${e}`,r),...i}));return o.displayName=w(e),o};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],A=C("moon",O);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],$=C("sun",I),E="theme",a="dark",v="light";function P(){const[e,t]=u.useState(null);u.useEffect(()=>{const r=localStorage.getItem(E),i=window.matchMedia("(prefers-color-scheme: dark)").matches,c=r||(i?a:v);c===a?document.documentElement.classList.add(a):document.documentElement.classList.remove(a),t(c)},[]);const o=()=>{const r=e===a?v:a;t(r),localStorage.setItem(E,r),r===a?document.documentElement.classList.add(a):document.documentElement.classList.remove(a)};return e===null?null:k.jsx("button",{onClick:o,className:"hidden md:block fixed z-50 top-0 mt-5 mr-5 right-0 p-2 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60 text-headings transition-colors cursor-pointer","aria-label":`Switch to ${e===a?"light":"dark"} theme`,children:e===a?k.jsx($,{className:"w-5 h-5"}):k.jsx(A,{className:"w-5 h-5"})})}export{P as default};
