var S=Object.defineProperty,b=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var h=(n,l,e)=>l in n?S(n,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[l]=e,a=(n,l)=>{for(var e in l||(l={}))u.call(l,e)&&h(n,e,l[e]);if(f)for(var e of f(l))m.call(l,e)&&h(n,e,l[e]);return n},d=(n,l)=>b(n,p(l));import{t as C,f as g,e as v}from"./tree-sBP3NezW.js";import{J as T}from"./vue-chunks-o87s7J8u.js";const q=n=>{const l=T({searchSchema:[],tableColumns:[],formSchema:[],detailSchema:[]}),e=x(n);l.searchSchema=e||[];const o=D(n);l.tableColumns=o||[];const r=F(n);l.formSchema=r;const i=J(n);return l.detailSchema=i,{allSchemas:l}},x=n=>{var o,r,i;const l=[],e=n.length;for(let c=0;c<e;c++){const t=n[c];if(!((o=t==null?void 0:t.search)!=null&&o.hidden)){const s=d(a({component:((r=t==null?void 0:t.search)==null?void 0:r.component)||"Input"},t.search),{field:t.field,label:((i=t.search)==null?void 0:i.label)||t.label});delete s.hidden,l.push(s)}}return l},D=n=>{const l=C(n,{conversion:e=>{var o;if(!((o=e==null?void 0:e.table)!=null&&o.hidden))return a(a({},e),e.table)}});return g(l,e=>(e.children===void 0&&delete e.children,!!e.field))},F=n=>{var o,r,i;const l=[],e=n.length;for(let c=0;c<e;c++){const t=n[c];if(!((o=t==null?void 0:t.form)!=null&&o.hidden)){const s=d(a({component:((r=t==null?void 0:t.form)==null?void 0:r.component)||"Input"},t.form),{field:t.field,label:((i=t.form)==null?void 0:i.label)||t.label});delete s.hidden,l.push(s)}}return l},J=n=>{const l=[];return v(n,e=>{var o,r;if(!((o=e==null?void 0:e.detail)!=null&&o.hidden)){const i=d(a({},e.detail),{field:e.field,label:((r=e.detail)==null?void 0:r.label)||e.label});delete i.hidden,l.push(i)}}),l};export{q as u};
