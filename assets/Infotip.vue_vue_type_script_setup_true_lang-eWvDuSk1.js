import{_ as g}from"./Highlight.vue_vue_type_script_lang-LJpJe5tT.js";import{p as i,b as k}from"./index-X2ggTGKV.js";import{l as C,ah as _,m as s,p as a,L as l,u as r,O as m,q as d,U as c,X as b,P as v,a7 as I,R as V,V as N}from"./vue-chunks-o87s7J8u.js";const z=C({__name:"Infotip",props:{title:i.string.def(""),schema:{type:Array,required:!0,default:()=>[]},showIndex:i.bool.def(!0),highlightColor:i.string.def("var(--el-color-primary)")},emits:["click"],setup(e,{emit:f}){const{getPrefixCls:x}=k(),o=x("infotip"),y=f,h=n=>{y("click",n)};return(n,$)=>{const u=_("Icon");return s(),a("div",{class:l([r(o),"p-20px mb-20px border-1px border-solid border-[var(--el-color-primary)] bg-[var(--el-color-primary-light-9)]"])},[e.title?(s(),a("div",{key:0,class:l([`${r(o)}__header`,"flex items-center"])},[m(u,{icon:"bi:exclamation-circle-fill",size:22,color:"var(--el-color-primary)"}),d("span",{class:l([`${r(o)}__title`,"pl-5px text-16px font-bold"])},c(e.title),3)],2)):b("",!0),d("div",{class:l(`${r(o)}__content`)},[(s(!0),a(v,null,I(e.schema,(t,p)=>(s(),a("p",{key:p,class:"text-14px mt-15px"},[m(r(g),{keys:typeof t=="string"?[]:t.keys,color:e.highlightColor,onClick:h},{default:V(()=>[N(c(e.showIndex?`${p+1}、`:"")+c(typeof t=="string"?t:t.label),1)]),_:2},1032,["keys","color"])]))),128))],2)],2)}}});export{z as _};
