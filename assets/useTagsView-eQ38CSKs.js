var p=(t,f,r)=>new Promise((n,g)=>{var V=o=>{try{u(r.next(o))}catch(h){g(h)}},T=o=>{try{u(r.throw(o))}catch(h){g(h)}},u=o=>o.done?n(o.value):Promise.resolve(o.value).then(V,T);u((r=r.apply(t,f)).next())});import{J as w}from"./index-X2ggTGKV.js";import{aC as R,e as C,u as i,n as O}from"./vue-chunks-o87s7J8u.js";const y=()=>{const t=w(),{replace:f,currentRoute:r}=R(),n=C(()=>t.getSelectedTag);return{closeAll:e=>{t.delAllViews(),e==null||e()},closeLeft:e=>{t.delLeftViews(i(n)),e==null||e()},closeRight:e=>{t.delRightViews(i(n)),e==null||e()},closeOther:e=>{t.delOthersViews(i(n)),e==null||e()},closeCurrent:(e,s)=>{var d;(d=e==null?void 0:e.meta)!=null&&d.affix||(t.delView(e||i(r)),s==null||s())},refreshPage:(e,s)=>p(void 0,null,function*(){t.delCachedView();const{path:d,query:m}=e||i(r);yield O(),f({path:"/redirect"+d,query:m}),s==null||s()}),setTitle:(e,s)=>{t.setTitle(e,s)}}};export{y as u};
