var g=(u,y,c)=>new Promise((I,n)=>{var a=r=>{try{p(c.next(r))}catch(d){n(d)}},s=r=>{try{p(c.throw(r))}catch(d){n(d)}},p=r=>r.done?I(r.value):Promise.resolve(r.value).then(a,s);p((c=c.apply(u,y)).next())});import{F as U}from"./Form-mKWTJ_18.js";import{u as B,m as J,d as T,h as A,I as h,n as W,o as $,q as G,c as H}from"./index-0vuzEiWu.js";import"./el-checkbox-w40geAFS.js";import"./el-link-w40geAFS.js";import{u as K}from"./useForm-uBzLuNdN.js";import{l as Q,aC as X,J as Y,O as t,P as S,a as k,d as Z,b as ee,u as w,m as oe,W as te,y as se}from"./vue-chunks-o87s7J8u.js";import{u as re}from"./useValidator-DphyJ3sh.js";import{v as ae,p as ne}from"./element-plus-etLzNv3_.js";function x(u){return typeof u=="function"||Object.prototype.toString.call(u)==="[object Object]"&&!se(u)}const v=30,R="#999",b="var(--el-color-primary)",he=Q({__name:"LoginForm",emits:["to-register"],setup(u,{emit:y}){const{required:c}=re(),I=y,n=B(),a=J(),s=T(),{currentRoute:p,addRoute:r,push:d}=X(),{t:l}=H(),z={username:[c()],password:[c()]},E=Y([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>t("h2",{class:"text-2xl font-bold text-center w-[100%]"},[l("login.login")])}}},{field:"username",label:l("login.username"),component:"Input",colProps:{span:24},componentProps:{placeholder:"admin or test"}},{field:"password",label:l("login.password"),component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:"admin or test"}},{field:"tool",colProps:{span:24},formItemProps:{slots:{default:()=>{let e;return t(S,null,[t("div",{class:"flex justify-between items-center w-[100%]"},[t(ae,{modelValue:f.value,"onUpdate:modelValue":o=>f.value=o,label:l("login.remember"),size:"small"},null),t(ne,{type:"primary",underline:!1},x(e=l("login.forgetPassword"))?e:{default:()=>[e]})])])}}}},{field:"login",colProps:{span:24},formItemProps:{slots:{default:()=>{let e,o;return t(S,null,[t("div",{class:"w-[100%]"},[t(A,{loading:P.value,type:"primary",class:"w-[100%]",onClick:M},x(e=l("login.login"))?e:{default:()=>[e]})]),t("div",{class:"w-[100%] mt-15px"},[t(A,{class:"w-[100%]",onClick:O},x(o=l("login.register"))?o:{default:()=>[o]})])])}}}},{field:"other",component:"Divider",label:l("login.otherLogin"),componentProps:{contentPosition:"center"}},{field:"otherIcon",colProps:{span:24},formItemProps:{slots:{default:()=>t(S,null,[t("div",{class:"flex justify-between w-[100%]"},[t(h,{icon:"ant-design:github-filled",size:v,class:"cursor-pointer ant-icon",color:R,hoverColor:b},null),t(h,{icon:"ant-design:wechat-filled",size:v,class:"cursor-pointer ant-icon",color:R,hoverColor:b},null),t(h,{icon:"ant-design:alipay-circle-filled",size:v,color:R,hoverColor:b,class:"cursor-pointer ant-icon"},null),t(h,{icon:"ant-design:weibo-circle-filled",size:v,color:R,hoverColor:b,class:"cursor-pointer ant-icon"},null)])])}}}]),f=k(a.getRememberMe),F=()=>{const e=a.getLoginInfo;if(e){const{username:o,password:i}=e;q({username:o,password:i})}};Z(()=>{F()});const{formRegister:L,formMethods:V}=K(),{getFormData:D,getElFormExpose:j,setValues:q}=V,P=k(!1),_=k("");ee(()=>p.value,e=>{var o;_.value=(o=e==null?void 0:e.query)==null?void 0:o.redirect},{immediate:!0});const M=()=>g(this,null,function*(){const e=yield j();yield e==null?void 0:e.validate(o=>g(this,null,function*(){if(o){P.value=!0;const i=yield D();try{const m=yield W(i);m&&(w(f)?a.setLoginInfo({username:i.username,password:i.password}):a.setLoginInfo(void 0),a.setRememberMe(w(f)),a.setUserInfo(m.data),n.getDynamicRouter?N():(yield s.generateRoutes("static").catch(()=>{}),s.getAddRouters.forEach(C=>{r(C)}),s.setIsAddRouters(!0),d({path:_.value||s.addRouters[0].path})))}finally{P.value=!1}}}))}),N=()=>g(this,null,function*(){const o={roleName:(yield D()).username},i=n.getDynamicRouter&&n.getServerDynamicRouter?yield $(o):yield G(o);if(i){const m=i.data||[];a.setRoleRouters(m),n.getDynamicRouter&&n.getServerDynamicRouter?yield s.generateRoutes("server",m).catch(()=>{}):yield s.generateRoutes("frontEnd",m).catch(()=>{}),s.getAddRouters.forEach(C=>{r(C)}),s.setIsAddRouters(!0),d({path:_.value||s.addRouters[0].path})}}),O=()=>{I("to-register")};return(e,o)=>(oe(),te(w(U),{schema:E,rules:z,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:w(L)},null,8,["schema","onRegister"]))}});export{he as _};
