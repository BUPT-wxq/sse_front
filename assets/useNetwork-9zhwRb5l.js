import{_ as o}from"./ContentWrap.vue_vue_type_script_setup_true_lang-uiiaNYQP.js";import{a as r,z as a,l as s,m as i,W as c,R as l,V as m,q as u,U as d,u as t}from"./vue-chunks-o87s7J8u.js";import"./index-X2ggTGKV.js";import"./element-plus-etLzNv3_.js";import"./el-card-w40geAFS.js";import"./el-popper-w40geAFS.js";const f=()=>{const n=r(!0),e=()=>{n.value=navigator.onLine};return window.addEventListener("online",e),window.addEventListener("offline",e),a(()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}),{online:n}},B=s({__name:"useNetwork",setup(n){const{online:e}=f();return(p,w)=>(i(),c(t(o),{title:"useNetwork"},{default:l(()=>[m(" 当前网络状态: "),u("code",null,d(t(e)?"已连接":"已断开"),1)]),_:1}))}});export{B as default};
