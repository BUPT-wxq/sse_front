var b=(h,r,a)=>new Promise((c,u)=>{var f=t=>{try{i(a.next(t))}catch(n){u(n)}},s=t=>{try{i(a.throw(t))}catch(n){u(n)}},i=t=>t.done?c(t.value):Promise.resolve(t.value).then(f,s);i((a=a.apply(h,r)).next())});import{D}from"./Descriptions-pG1EAbRJ.js";import{c as g,_ as q}from"./index-X2ggTGKV.js";import{F as B}from"./Form-8Qwz70Oy.js";import{u as U}from"./useValidator-pbHS2vyS.js";import{u as v}from"./useForm-yvcpLEyU.js";import{x as m,z as d}from"./element-plus-etLzNv3_.js";import{l as F,J as p,O as o,ah as C,m as E,p as I,u as l,R as _,q as R,V as y,U as w,P as z}from"./vue-chunks-o87s7J8u.js";import"./el-popper-w40geAFS.js";import"./el-col-w40geAFS.js";import"./el-tag-w40geAFS.js";import"./el-checkbox-w40geAFS.js";import"./el-radio-button-Zc3MqnhQ.js";import"./el-input-number-w40geAFS.js";import"./el-pagination-w40geAFS.js";import"./el-divider-w40geAFS.js";import"./el-tree-w40geAFS.js";import"./InputPassword-x7Lq5KXM.js";import"./style.css_vue_type_style_index_0_src_true_lang-WxKRW3Hw.js";import"./wang-editor-GuMHOkf8.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-juUd3AWC.js";import"./IconPicker-ha1q0C78.js";const J={class:"text-center mt-10px"},M=F({__name:"Descriptions",setup(h){const{required:r}=U(),{t:a}=g(),c=p({username:"chenkl",nickName:"梦似花落。",age:26,phone:"13655971xxxx",email:"502431556@qq.com",addr:"这是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的地址",sex:"男",certy:"3505831994xxxxxxxx"}),u=p([{field:"username",label:a("descriptionsDemo.username")},{field:"nickName",label:a("descriptionsDemo.nickName")},{field:"phone",label:a("descriptionsDemo.phone")},{field:"email",label:a("descriptionsDemo.email")},{field:"addr",label:a("descriptionsDemo.addr"),span:24}]),f=p([{field:"username",label:a("descriptionsDemo.username"),slots:{label:e=>o("span",{class:"is-required--item"},[e.label]),default:()=>o(d,{prop:"username"},{default:()=>[o(m,{modelValue:s.username,"onUpdate:modelValue":e=>s.username=e},null)]})}},{field:"nickName",label:a("descriptionsDemo.nickName"),slots:{label:e=>o("span",{class:"is-required--item"},[e.label]),default:()=>o(d,{prop:"nickName"},{default:()=>[o(m,{modelValue:s.nickName,"onUpdate:modelValue":e=>s.nickName=e},null)]})}},{field:"phone",label:a("descriptionsDemo.phone"),slots:{label:e=>o("span",{class:"is-required--item"},[e.label]),default:()=>o(d,{prop:"phone"},{default:()=>[o(m,{modelValue:s.phone,"onUpdate:modelValue":e=>s.phone=e},null)]})}},{field:"email",label:a("descriptionsDemo.email"),slots:{label:e=>o("span",{class:"is-required--item"},[e.label]),default:()=>o(d,{prop:"email"},{default:()=>[o(m,{modelValue:s.email,"onUpdate:modelValue":e=>s.email=e},null)]})}},{field:"addr",label:a("descriptionsDemo.addr"),slots:{label:e=>o("span",{class:"is-required--item"},[e.label]),default:()=>o(d,{prop:"addr"},{default:()=>[o(m,{modelValue:s.addr,"onUpdate:modelValue":e=>s.addr=e},null)]})},span:24}]),s=p({username:"",nickName:"",phone:"",email:"",addr:""}),i=p({username:[r()],nickName:[r()],phone:[r()],email:[r()],addr:[r()]}),{formRegister:t,formMethods:n}=v(),{getElFormExpose:V}=n,k=()=>b(this,null,function*(){const e=yield V();e==null||e.validate(x=>{})});return(e,x)=>{const N=C("BaseButton");return E(),I(z,null,[o(l(D),{title:l(a)("descriptionsDemo.descriptions"),message:l(a)("descriptionsDemo.descriptionsDes"),data:c,schema:u},null,8,["title","message","data","schema"]),o(l(B),{"is-custom":"",model:s,rules:i,onRegister:l(t)},{default:_(()=>[o(l(D),{title:l(a)("descriptionsDemo.form"),data:c,schema:f,class:"mt-20px"},null,8,["title","data","schema"]),R("div",J,[o(N,{onClick:k},{default:_(()=>[y(w(l(a)("formDemo.formValidation")),1)]),_:1})])]),_:1},8,["model","rules","onRegister"])],64)}}}),re=q(M,[["__scopeId","data-v-30fb1dc8"]]);export{re as default};
