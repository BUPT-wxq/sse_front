var c=(n,e,i)=>new Promise((l,o)=>{var p=t=>{try{a(i.next(t))}catch(s){o(s)}},r=t=>{try{a(i.throw(t))}catch(s){o(s)}},a=t=>t.done?l(t.value):Promise.resolve(t.value).then(p,r);a((i=i.apply(n,e)).next())});import{_ as u}from"./ContentWrap.vue_vue_type_script_setup_true_lang-Bv-N4ZL2.js";import{c as _}from"./index-0vuzEiWu.js";import{_ as b}from"./Table.vue_vue_type_script_lang-297KcjU2.js";import{g}from"./index-uB1tW4hI.js";import"./el-tag-w40geAFS.js";import{y as D}from"./element-plus-etLzNv3_.js";import{l as v,O as f,a as d,m as w,W as y,R as T,u as m}from"./vue-chunks-o87s7J8u.js";import"./el-card-w40geAFS.js";import"./el-popper-w40geAFS.js";import"./el-checkbox-w40geAFS.js";import"./el-pagination-w40geAFS.js";import"./el-image-viewer-w40geAFS.js";import"./el-radio-button--p7ousdo.js";import"./el-dropdown-item-w40geAFS.js";import"./el-drawer-w40geAFS.js";import"./index-HNcgc5sn.js";const j=v({__name:"TableImagePreview",setup(n){const{t:e}=_(),i=[{field:"title",label:e("tableDemo.title")},{field:"image_uri",label:e("tableDemo.preview")},{field:"author",label:e("tableDemo.author")},{field:"display_time",label:e("tableDemo.displayTime")},{field:"importance",label:e("tableDemo.importance"),formatter:(r,a,t)=>f(D,{type:t===1?"success":t===2?"warning":"danger"},{default:()=>[e(t===1?"tableDemo.important":t===2?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:e("tableDemo.pageviews")}],l=d(!0);let o=d([]);return(r=>c(this,null,function*(){const a=yield g(r||{pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{l.value=!1});a&&(o.value=a.data.list)}))(),(r,a)=>(w(),y(m(u),{title:m(e)("router.PicturePreview")},{default:T(()=>[f(m(b),{columns:i,data:m(o),loading:l.value,preview:["image_uri"]},null,8,["data","loading"])]),_:1},8,["title"]))}});export{j as default};
