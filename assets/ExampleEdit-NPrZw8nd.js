var d=(g,c,e)=>new Promise((u,m)=>{var i=t=>{try{p(e.next(t))}catch(o){m(o)}},n=t=>{try{p(e.throw(t))}catch(o){m(o)}},p=t=>t.done?u(t.value):Promise.resolve(t.value).then(i,n);p((e=e.apply(g,c)).next())});import{_ as k}from"./Write.vue_vue_type_script_setup_true_lang-xCsC83k7.js";import{_ as D}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-7spTRAwC.js";import{c as b}from"./index-0vuzEiWu.js";import{l as C,aC as R,aN as T,a as _,ah as $,m as E,W as N,R as l,O as v,V as x,U as w,u as s}from"./vue-chunks-o87s7J8u.js";import{c as V,s as h}from"./index-uB1tW4hI.js";import{u as A}from"./useEventBus-nBk4R-Ub.js";import"./Form-mKWTJ_18.js";import"./el-col-w40geAFS.js";import"./el-popper-w40geAFS.js";import"./el-tag-w40geAFS.js";import"./el-checkbox-w40geAFS.js";import"./el-radio-button--p7ousdo.js";import"./el-input-number-w40geAFS.js";import"./el-pagination-w40geAFS.js";import"./el-divider-w40geAFS.js";import"./el-tree-w40geAFS.js";import"./InputPassword-zrt9OJnl.js";import"./element-plus-etLzNv3_.js";import"./style.css_vue_type_style_index_0_src_true_lang-DYegEuF1.js";import"./wang-editor-GuMHOkf8.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-NR6iAvcf.js";import"./IconPicker-OmEfL5pX.js";import"./useForm-uBzLuNdN.js";import"./useValidator-DphyJ3sh.js";import"./el-card-w40geAFS.js";const it=C({__name:"ExampleEdit",setup(g){const{emit:c}=A(),{push:e,go:u}=R(),{query:m}=T(),{t:i}=b(),n=_(null);d(this,null,function*(){const a=yield V(m.id);a&&(n.value=a.data)});const t=_(),o=_(!1),y=()=>d(this,null,function*(){const a=s(t),r=yield a==null?void 0:a.submit();r&&(o.value=!0,(yield h(r).catch(()=>{}).finally(()=>{o.value=!1}))&&(c("getList","editor"),e("/example/example-page")))});return(a,r)=>{const f=$("BaseButton");return E(),N(s(D),{title:s(i)("exampleDemo.edit"),onBack:r[1]||(r[1]=B=>s(e)("/example/example-page"))},{header:l(()=>[v(f,{onClick:r[0]||(r[0]=B=>s(u)(-1))},{default:l(()=>[x(w(s(i)("common.back")),1)]),_:1}),v(f,{type:"primary",loading:o.value,onClick:y},{default:l(()=>[x(w(s(i)("exampleDemo.save")),1)]),_:1},8,["loading"])]),default:l(()=>[v(k,{ref_key:"writeRef",ref:t,"current-row":n.value},null,8,["current-row"])]),_:1},8,["title"])}}});export{it as default};
