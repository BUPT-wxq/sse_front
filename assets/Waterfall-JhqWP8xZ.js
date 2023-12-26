var X=Object.defineProperty,G=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var A=(e,t,a)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,R=(e,t)=>{for(var a in t||(t={}))K.call(t,a)&&A(e,a,t[a]);if(V)for(var a of V(t))Q.call(t,a)&&A(e,a,t[a]);return e},E=(e,t)=>G(e,J(t));var z=(e,t,a)=>new Promise((M,v)=>{var s=n=>{try{i(a.next(n))}catch(g){v(g)}},x=n=>{try{i(a.throw(n))}catch(g){v(g)}},i=n=>n.done?M(n.value):Promise.resolve(n.value).then(s,x);i((a=a.apply(e,t)).next())});import{p as u,k as Y,l as Z,b as _,M as B,t as ee,c as te}from"./index-0vuzEiWu.js";import{B as ae}from"./element-plus-etLzNv3_.js";import{l as q,a as h,b as le,d as se,u as l,m as d,p as m,T as k,P as D,a7 as N,q as L,U as H,X as oe,L as I,n as P,W as ne,R as re,O as ie}from"./vue-chunks-o87s7J8u.js";import{_ as ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-Bv-N4ZL2.js";import"./el-card-w40geAFS.js";import"./el-popper-w40geAFS.js";const ue=["src"],fe=["src"],de=q({__name:"Waterfall",props:{data:u.arrayOf(u.any),reset:u.bool.def(!0),width:u.number.def(200),gap:u.number.def(20),props:u.objectOf(u.string).def({src:"src",height:"height"}),cols:u.number.def(void 0),loadingText:u.string.def("加载中..."),loading:u.bool.def(!1),end:u.bool.def(!1),endText:u.string.def("没有更多了"),autoCenter:u.bool.def(!0),layout:u.oneOf(["javascript","flex"]).def("flex")},emits:["loadMore"],setup(e,{emit:t}){const{getPrefixCls:a}=_(),M=a("waterfall"),v=t,s=e,x=h(),i=h([]),n=h(0),g=h(0),j=h(),p=h(0),y=h([]),F=()=>z(this,null,function*(){var W;y.value=[];const{props:f,width:w,gap:o}=s,r=s.data;yield P();const b=l(x);if(!b)return;p.value=(W=s.cols)!=null?W:Math.floor(b.clientWidth/(w+o));const $=r.length;for(let c=0;c<$;c++)if(c<l(p))i.value[c]=r[c][f.height],y.value.push(E(R({},r[c]),{top:0,left:c*(w+o)}));else{let T=i.value[0],O=0;for(let C=1;C<l(p);C++)l(i)[C]<T&&(T=l(i)[C],O=C);i.value[O]+=r[c][f.height]+o,y.value.push(E(R({},r[c]),{top:T+o,left:O*(w+o)}))}n.value=Math.max(...l(i)),g.value=l(p)*(w+o)-o}),U=()=>z(this,null,function*(){var W;const{width:f,gap:w}=s,o=s.data;yield P();const r=l(x);if(!r)return;p.value=(W=s.cols)!=null?W:Math.floor(r.clientWidth/(f+w));const b=o.length,$=new Array(l(p)).fill([]);for(let c=0;c<b;c++){const T=c%l(p);$[T]=[...$[T],o[c]]}y.value=$}),S=()=>{const{layout:f}=s;f==="javascript"?F():f==="flex"&&U()};return le(()=>[s.data,s.cols],()=>{S()},{immediate:!0}),se(()=>{l(s.reset)&&Y(window,"resize",ae(S,300)),Z(l(j),([{isIntersecting:f}])=>{f&&!s.loading&&!s.end&&v("loadMore")},{threshold:.1})}),(f,w)=>(d(),m("div",{class:I([l(M),"flex","items-center",{"justify-center":e.autoCenter}]),ref_key:"wrapEl",ref:x,style:k({height:`${e.layout==="javascript"?n.value+40:"auto"}px`})},[e.layout==="javascript"?(d(),m("div",{key:0,class:"relative",style:k({width:`${g.value}px`,height:`${n.value+40}px`})},[(d(!0),m(D,null,N(y.value,(o,r)=>(d(),m("div",{class:I([`${l(M)}-item__${r}`,{absolute:e.layout==="javascript"}]),key:`water-${r}`,style:k({width:`${e.width}px`,height:`${o[e.props.height]}px`,top:`${o.top}px`,left:`${o.left}px`})},[L("img",{src:o[e.props.src],class:"w-full h-full block",alt:"",srcset:""},null,8,ue)],6))),128)),L("div",{ref_key:"loadMore",ref:j,class:"h-40px flex justify-center absolute w-full",style:k({top:`${n.value+e.gap}px`})},H(e.end?e.endText:e.loadingText),5)],4)):e.layout==="flex"?(d(),m("div",{key:1,class:"relative flex pb-40px",style:k({width:e.cols?"100%":"auto"})},[(d(!0),m(D,null,N(y.value,(o,r)=>(d(),m("div",{key:`waterWrap-${r}`,class:"flex-1",style:k({marginRight:r===y.value.length-1?"0":`${e.gap}px`})},[(d(!0),m(D,null,N(o,(b,$)=>(d(),m("div",{key:`waterWrap-${r}-${$}`,style:k({marginBottom:`${e.gap}px`,width:e.cols?"100%":`${e.width}px`,height:e.cols?"auto":`${b[e.props.height]}px`})},[L("img",{src:b[e.props.src],class:"w-full h-full block",alt:"",srcset:""},null,8,fe)],4))),128))],4))),128)),L("div",{ref_key:"loadMore",ref:j,class:"h-40px flex justify-center absolute w-full items-center",style:{bottom:0}},H(e.end?e.endText:e.loadingText),513)],4)):oe("",!0)],6))}}),we=q({__name:"Waterfall",setup(e){const t=h([]),a=()=>{const i=[];for(let n=0;n<20;n++){const g=B.Random.integer(100,500),j=B.Random.integer(100,500);i.push(B.mock({width:j,height:g,id:ee(),image_uri:B.Random.image(`${j}x${g}`).replace("http://","https://")}))}t.value=[...l(t),...i],l(t).length>=60&&(s.value=!0)};a();const{t:M}=te(),v=h(!1),s=h(!1),x=()=>{v.value=!0,setTimeout(()=>{a(),v.value=!1},1e3)};return(i,n)=>(d(),ne(l(ce),{title:l(M)("router.waterfall")},{default:re(()=>[ie(l(de),{data:t.value,loading:v.value,end:s.value,props:{src:"image_uri",height:"height"},onLoadMore:x},null,8,["data","loading","end"])]),_:1},8,["title"]))}});export{we as default};
