var I=Object.defineProperty;var w=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var y=(o,s,e)=>s in o?I(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,C=(o,s)=>{for(var e in s||(s={}))M.call(s,e)&&y(o,e,s[e]);if(w)for(var e of w(s))P.call(s,e)&&y(o,e,s[e]);return o};var v=(o,s,e)=>new Promise((f,d)=>{var h=c=>{try{n(e.next(c))}catch(b){d(b)}},x=c=>{try{n(e.throw(c))}catch(b){d(b)}},n=c=>c.done?f(c.value):Promise.resolve(c.value).then(h,x);n((e=e.apply(o,s)).next())});import{F as T}from"./Form-mKWTJ_18.js";import{u as B}from"./useForm-uBzLuNdN.js";import{u as J}from"./useValidator-DphyJ3sh.js";import{c as K,C as O}from"./index-0vuzEiWu.js";import"./el-tree-w40geAFS.js";import"./el-checkbox-w40geAFS.js";import"./el-radio-button--p7ousdo.js";import{g as S}from"./index-7zH8VCPk.js";import{e as R,f as W}from"./tree-sBP3NezW.js";import{ab as j,J as q,v as A}from"./element-plus-etLzNv3_.js";import{l as G,a as k,O as u,u as i,P as U,J as z,b as H,m as Q,W as X,n as Y}from"./vue-chunks-o87s7J8u.js";const me=G({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(o,{expose:s}){const{t:e}=K(),{required:f}=J(),d=o,h=k(),x=k([{field:"roleName",label:e("role.roleName"),component:"Input"},{field:"status",label:e("menu.status"),component:"Select",componentProps:{options:[{label:e("userDemo.disable"),value:0},{label:e("userDemo.enable"),value:1}]}},{field:"menu",label:e("role.menu"),colProps:{span:24},formItemProps:{slots:{default:()=>{var t;return u(U,null,[u("div",{class:"flex w-full"},[u("div",{class:"flex-1"},[u(j,{ref:h,"show-checkbox":!0,"node-key":"id","highlight-current":!0,"check-strictly":!0,"expand-on-click-node":!1,data:g.value,"onNode-click":c},{default:r=>u("span",null,[r.data.meta.title])})]),u("div",{class:"flex-1"},[i(n)&&((t=i(n))!=null&&t.permissionList)?u(q,{modelValue:i(n).meta.permission,"onUpdate:modelValue":r=>i(n).meta.permission=r},{default:()=>{var r;return[(r=i(n))==null?void 0:r.permissionList.map(l=>u(A,{label:l.value},{default:()=>[l.label]}))]}}):null])])])}}}}]),n=k(),c=t=>{n.value=t},b=z({roleName:[f()],role:[f()],status:[f()]}),{formRegister:_,formMethods:D}=B(),{setValues:E,getFormData:F,getElFormExpose:L}=D,g=k([]);v(this,null,function*(){var r;const t=yield S();if(t){if(g.value=t.data.list,!d.currentRow)return;yield Y();const l=[];R(d.currentRow.menu,a=>{var m;l.push({id:a.id,permission:((m=a.meta)==null?void 0:m.permission)||[]})}),R(g.value,a=>{const m=O(l,p=>p.id===a.id);if(m>-1){const p=C({},a.meta||{});p.permission=l[m].permission,a.meta=p}});for(const a of l)(r=i(h))==null||r.setChecked(a.id,!0,!1)}});const N=()=>v(this,null,function*(){var l;const t=yield L();if(yield t==null?void 0:t.validate().catch(a=>{})){const a=yield F(),m=((l=i(h))==null?void 0:l.getCheckedKeys())||[],p=W(i(g),V=>m.includes(V.id));return a.menu=p||[],a}});return H(()=>d.currentRow,t=>{t&&E(t)},{deep:!0,immediate:!0}),s({submit:N}),(t,r)=>(Q(),X(i(T),{rules:b,onRegister:i(_),schema:x.value},null,8,["rules","onRegister","schema"]))}});export{me as _};
