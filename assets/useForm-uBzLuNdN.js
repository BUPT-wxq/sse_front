var o=(i,u,c)=>new Promise((a,l)=>{var t=n=>{try{s(c.next(n))}catch(r){l(r)}},e=n=>{try{s(c.throw(n))}catch(r){l(r)}},s=n=>n.done?a(n.value):Promise.resolve(n.value).then(t,e);s((c=c.apply(i,u)).next())});import{D as y,E as h}from"./index-0vuzEiWu.js";import{a as g,u as d,n as w}from"./vue-chunks-o87s7J8u.js";const F=()=>{const i=g(),u=g(),c=(t,e)=>{i.value=t,u.value=e},a=()=>o(void 0,null,function*(){yield w();const t=d(i);return t||console.error("The form is not registered. Please use the register method to register"),t});return{formRegister:c,formMethods:{setProps:(...e)=>o(void 0,[...e],function*(t={}){const s=yield a();s==null||s.setProps(t),t.model&&(s==null||s.setValues(t.model))}),setValues:t=>o(void 0,null,function*(){const e=yield a();e==null||e.setValues(t)}),setSchema:t=>o(void 0,null,function*(){const e=yield a();e==null||e.setSchema(t)}),addSchema:(t,e)=>o(void 0,null,function*(){const s=yield a();s==null||s.addSchema(t,e)}),delSchema:t=>o(void 0,null,function*(){const e=yield a();e==null||e.delSchema(t)}),getFormData:(t=!0)=>o(void 0,null,function*(){const e=yield a(),s=e==null?void 0:e.formModel;return t?Object.keys(s).reduce((n,r)=>{const m=s[r];return y(m)||(h(m)?Object.keys(m).length>0&&(n[r]=m):n[r]=m),n},{}):s}),getComponentExpose:t=>o(void 0,null,function*(){const e=yield a();return e==null?void 0:e.getComponentExpose(t)}),getFormItemExpose:t=>o(void 0,null,function*(){const e=yield a();return e==null?void 0:e.getFormItemExpose(t)}),getElFormExpose:()=>o(void 0,null,function*(){return yield a(),d(u)}),getFormExpose:()=>o(void 0,null,function*(){return yield a(),d(i)})}}};export{F as u};
