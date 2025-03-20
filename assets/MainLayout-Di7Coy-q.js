import{c as _,g as R,i as V,e as L,l as B,a as d,h as v,p as k,b as A,w as P,o as K,d as U,n as X,f as Y,r as w,j as D,k as z,m as I,q as G,s as J,t as Q,u as Z,v as O}from"./index-BRqfRAMj.js";import{h as ee,c as W,g as te,a as oe}from"./dom-eGmM3NGs.js";import{Q as F}from"./QResizeObserver-DHJ3gHXd.js";const ne=_({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:t}}=R(),o=V(B,L);if(o===L)return console.error("QPageContainer needs to be child of QLayout"),L;k(A,!0);const l=d(()=>{const a={};return o.header.space===!0&&(a.paddingTop=`${o.header.size}px`),o.right.space===!0&&(a[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(a.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(a[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),a});return()=>v("div",{class:"q-page-container",style:l.value},ee(i.default))}}),ie=[Element,String],le=[null,document,document.body,document.scrollingElement,document.documentElement];function re(e,i){let t=te(i);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return le.includes(t)?window:t}function ae(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function se(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let C;function $(){if(C!==void 0)return C;const e=document.createElement("p"),i=document.createElement("div");W(e,{width:"100%",height:"200px"}),W(i,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),i.appendChild(e),document.body.appendChild(i);const t=e.offsetWidth;i.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=i.clientWidth),i.remove(),C=t-o,C}const{passive:M}=Y,ce=["both","horizontal","vertical"],ue=_({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ce.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ie},emits:["scroll"],setup(e,{emit:i}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,l,a;P(()=>e.scrollTarget,()=>{g(),y()});function f(){o?.();const m=Math.max(0,ae(l)),p=se(l),c={top:m-t.position.top,left:p-t.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const S=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";t.position={top:m,left:p},t.directionChanged=t.direction!==S,t.delta=c,t.directionChanged===!0&&(t.direction=S,t.inflectionPoint=t.position),i("scroll",{...t})}function y(){l=re(a,e.scrollTarget),l.addEventListener("scroll",r,M),r(!0)}function g(){l!==void 0&&(l.removeEventListener("scroll",r,M),l=void 0)}function r(m){if(m===!0||e.debounce===0||e.debounce==="0")f();else if(o===null){const[p,c]=e.debounce?[setTimeout(f,e.debounce),clearTimeout]:[requestAnimationFrame(f),cancelAnimationFrame];o=()=>{c(p),o=null}}}const{proxy:b}=R();return P(()=>b.$q.lang.rtl,f),K(()=>{a=b.$el.parentNode,y()}),U(()=>{o?.(),g()}),Object.assign(b,{trigger:r,getPosition:()=>t}),X}}),de=_({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:t}){const{proxy:{$q:o}}=R(),l=w(null),a=w(o.screen.height),f=w(e.container===!0?0:o.screen.width),y=w({position:0,direction:"down",inflectionPoint:0}),g=w(0),r=w(D.value===!0?0:$()),b=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=d(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),p=d(()=>r.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),c=d(()=>r.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function S(n){if(e.container===!0||document.qScrollPrevented!==!0){const s={position:n.position.top,direction:n.direction,directionChanged:n.directionChanged,inflectionPoint:n.inflectionPoint.top,delta:n.delta.top};y.value=s,e.onScroll!==void 0&&t("scroll",s)}}function j(n){const{height:s,width:h}=n;let u=!1;a.value!==s&&(u=!0,a.value=s,e.onScrollHeight!==void 0&&t("scrollHeight",s),q()),f.value!==h&&(u=!0,f.value=h),u===!0&&e.onResize!==void 0&&t("resize",n)}function N({height:n}){g.value!==n&&(g.value=n,q())}function q(){if(e.container===!0){const n=a.value>g.value?$():0;r.value!==n&&(r.value=n)}}let x=null;const E={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:l,height:a,containerHeight:g,scrollbarWidth:r,totalWidth:d(()=>f.value+r.value),rows:d(()=>{const n=e.view.toLowerCase().split(" ");return{top:n[0].split(""),middle:n[1].split(""),bottom:n[2].split("")}}),header:z({size:0,offset:0,space:!1}),right:z({size:300,offset:0,space:!1}),footer:z({size:0,offset:0,space:!1}),left:z({size:300,offset:0,space:!1}),scroll:y,animate(){x!==null?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout(()=>{x=null,document.body.classList.remove("q-body--layout-animate")},155)},update(n,s,h){E[n][s]=h}};if(k(B,E),$()>0){let n=function(){u=null,T.classList.remove("hide-scrollbar")},s=function(){if(u===null){if(T.scrollHeight>o.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(u);u=setTimeout(n,300)},h=function(H){u!==null&&H==="remove"&&(clearTimeout(u),n()),window[`${H}EventListener`]("resize",s)},u=null;const T=document.body;P(()=>e.container!==!0?"add":"remove",h),e.container!==!0&&h("add"),I(()=>{h("remove")})}return()=>{const n=oe(i.default,[v(ue,{onScroll:S}),v(F,{onResize:j})]),s=v("div",{class:b.value,style:m.value,ref:e.container===!0?void 0:l,tabindex:-1},n);return e.container===!0?v("div",{class:"q-layout-container overflow-hidden",ref:l},[v(F,{onResize:N}),v("div",{class:"absolute-full",style:p.value},[v("div",{class:"scroll",style:c.value},[s])])]):s}}}),fe=(e,i)=>{const t=e.__vccOpts||e;for(const[o,l]of i)t[o]=l;return t},he={};function ve(e,i){const t=Z("router-view");return J(),G(de,{view:"hHh lpR fFf"},{default:Q(()=>[O(ne,null,{default:Q(()=>[O(t)]),_:1})]),_:1})}const we=fe(he,[["render",ve]]);export{we as default};
