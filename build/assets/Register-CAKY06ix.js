import{R as T,b as ie,r as d,W as oe,j as u,Y as re,a as se}from"./app-B8fg-lSo.js";import{G as le}from"./GuestLayout-BIhEMFb2.js";import{I as R}from"./InputError-DsfeOMut.js";import{I as j}from"./InputLabel-DtDdamyC.js";import{P as ce}from"./PrimaryButton-Cw7_5vMM.js";import{T as O}from"./TextInput-CMXZXZWr.js";import{_ as J,a as D,i as de,u as Z,K as G,b as ue,R as me}from"./useSize-BOES-3il.js";import{_ as he,a as ge,c as q,b as pe,d as fe,e as Y,f as ve}from"./presets-CdUb9NkJ.js";import{g as Se,d as be,w as W,C as we,c as ee,a as U,u as Ce,b as $e,s as ye,e as xe,m as Ie,f as x,r as Ee,h as ke,T as Ne,D as _e}from"./index-fczKZ5ii.js";import"./AntdIcon-Cyk_dWSR.js";const Re=(e,n,t)=>T.isValidElement(e)?T.cloneElement(e,typeof t=="function"?t(e.props||{}):t):n;function je(e,n){return Re(e,e,n)}var M=he({},ie),Me=M.version,Oe=M.render,Te=M.unmountComponentAtNode,z;try{var De=Number((Me||"").split(".")[0]);De>=18&&(z=M.createRoot)}catch{}function Q(e){var n=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&ge(n)==="object"&&(n.usingClientEntryPoint=e)}var P="__rc_react_root__";function We(e,n){Q(!0);var t=n[P]||z(n);Q(!1),t.render(e),n[P]=t}function Pe(e,n){Oe(e,n)}function qe(e,n){if(z){We(e,n);return}Pe(e,n)}function ze(e){return V.apply(this,arguments)}function V(){return V=J(D().mark(function e(n){return D().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Promise.resolve().then(function(){var o;(o=n[P])===null||o===void 0||o.unmount(),delete n[P]}));case 1:case"end":return a.stop()}},e)})),V.apply(this,arguments)}function Le(e){Te(e)}function He(e){return X.apply(this,arguments)}function X(){return X=J(D().mark(function e(n){return D().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(z===void 0){a.next=2;break}return a.abrupt("return",ze(n));case 2:Le(n);case 3:case"end":return a.stop()}},e)})),X.apply(this,arguments)}const Ae=e=>{const{componentCls:n,colorPrimary:t}=e;return{[n]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${t})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},Fe=Se("Wave",e=>[Ae(e)]),ne=`${be}-wave-target`;function B(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function Be(e){const{borderTopColor:n,borderColor:t,backgroundColor:a}=getComputedStyle(e);return B(n)?n:B(t)?t:B(a)?a:null}function K(e){return Number.isNaN(e)?0:e}const Ke=e=>{const{className:n,target:t,component:a}=e,o=d.useRef(null),[l,m]=d.useState(null),[i,r]=d.useState([]),[s,c]=d.useState(0),[p,v]=d.useState(0),[w,I]=d.useState(0),[k,N]=d.useState(0),[E,C]=d.useState(!1),b={left:s,top:p,width:w,height:k,borderRadius:i.map(h=>`${h}px`).join(" ")};l&&(b["--wave-color"]=l);function $(){const h=getComputedStyle(t);m(Be(t));const f=h.position==="static",{borderLeftWidth:g,borderTopWidth:S}=h;c(f?t.offsetLeft:K(-parseFloat(g))),v(f?t.offsetTop:K(-parseFloat(S))),I(t.offsetWidth),N(t.offsetHeight);const{borderTopLeftRadius:y,borderTopRightRadius:L,borderBottomLeftRadius:H,borderBottomRightRadius:A}=h;r([y,L,A,H].map(F=>K(parseFloat(F))))}if(d.useEffect(()=>{if(t){const h=W(()=>{$(),C(!0)});let f;return typeof ResizeObserver<"u"&&(f=new ResizeObserver($),f.observe(t)),()=>{W.cancel(h),f==null||f.disconnect()}}},[]),!E)return null;const _=(a==="Checkbox"||a==="Radio")&&(t==null?void 0:t.classList.contains(ne));return d.createElement(we,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(h,f)=>{var g;if(f.deadline||f.propertyName==="opacity"){const S=(g=o.current)===null||g===void 0?void 0:g.parentElement;He(S).then(()=>{S==null||S.remove()})}return!1}},(h,f)=>{let{className:g}=h;return d.createElement("div",{ref:ee(o,f),className:q(n,g,{"wave-quick":_}),style:b})})},Ve=(e,n)=>{var t;const{component:a}=n;if(a==="Checkbox"&&!(!((t=e.querySelector("input"))===null||t===void 0)&&t.checked))return;const o=document.createElement("div");o.style.position="absolute",o.style.left="0px",o.style.top="0px",e==null||e.insertBefore(o,e==null?void 0:e.firstChild),qe(d.createElement(Ke,Object.assign({},n,{target:e})),o)},Xe=(e,n,t)=>{const{wave:a}=d.useContext(U),[,o,l]=Ce(),m=$e(s=>{const c=e.current;if(a!=null&&a.disabled||!c)return;const p=c.querySelector(`.${ne}`)||c,{showEffect:v}=a||{};(v||Ve)(p,{className:n,token:o,component:t,event:s,hashId:l})}),i=d.useRef();return s=>{W.cancel(i.current),i.current=W(()=>{m(s)})}},Ue=e=>{const{children:n,disabled:t,component:a}=e,{getPrefixCls:o}=d.useContext(U),l=d.useRef(null),m=o("wave"),[,i]=Fe(m),r=Xe(l,q(m,i),a);if(T.useEffect(()=>{const c=l.current;if(!c||c.nodeType!==1||t)return;const p=v=>{!de(v.target)||!c.getAttribute||c.getAttribute("disabled")||c.disabled||c.className.includes("disabled")||c.className.includes("-leave")||r(v)};return c.addEventListener("click",p,!0),()=>{c.removeEventListener("click",p,!0)}},[t]),!T.isValidElement(n))return n??null;const s=ye(n)?ee(n.ref,l):l;return je(n,{ref:s})};var Ge=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],te=d.forwardRef(function(e,n){var t,a=e.prefixCls,o=a===void 0?"rc-switch":a,l=e.className,m=e.checked,i=e.defaultChecked,r=e.disabled,s=e.loadingIcon,c=e.checkedChildren,p=e.unCheckedChildren,v=e.onClick,w=e.onChange,I=e.onKeyDown,k=pe(e,Ge),N=Z(!1,{value:m,defaultValue:i}),E=fe(N,2),C=E[0],b=E[1];function $(g,S){var y=C;return r||(y=g,b(y),w==null||w(y,S)),y}function _(g){g.which===G.LEFT?$(!1,g):g.which===G.RIGHT&&$(!0,g),I==null||I(g)}function h(g){var S=$(!C,g);v==null||v(S,g)}var f=q(o,l,(t={},Y(t,"".concat(o,"-checked"),C),Y(t,"".concat(o,"-disabled"),r),t));return d.createElement("button",ve({},k,{type:"button",role:"switch","aria-checked":C,disabled:r,className:f,ref:n,onKeyDown:_,onClick:h}),s,d.createElement("span",{className:"".concat(o,"-inner")},d.createElement("span",{className:"".concat(o,"-inner-checked")},c),d.createElement("span",{className:"".concat(o,"-inner-unchecked")},p)))});te.displayName="Switch";const Ye=e=>{const{componentCls:n,trackHeightSM:t,trackPadding:a,trackMinWidthSM:o,innerMinMarginSM:l,innerMaxMarginSM:m,handleSizeSM:i,calc:r}=e,s=`${n}-inner`,c=x(r(i).add(r(a).mul(2)).equal()),p=x(r(m).mul(2).equal());return{[n]:{[`&${n}-small`]:{minWidth:o,height:t,lineHeight:x(t),[`${n}-inner`]:{paddingInlineStart:m,paddingInlineEnd:l,[`${s}-checked, ${s}-unchecked`]:{minHeight:t},[`${s}-checked`]:{marginInlineStart:`calc(-100% + ${c} - ${p})`,marginInlineEnd:`calc(100% - ${c} + ${p})`},[`${s}-unchecked`]:{marginTop:r(t).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:i,height:i},[`${n}-loading-icon`]:{top:r(r(i).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:l,paddingInlineEnd:m,[`${s}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${s}-unchecked`]:{marginInlineStart:`calc(100% - ${c} + ${p})`,marginInlineEnd:`calc(-100% + ${c} - ${p})`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${x(r(i).add(a).equal())})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${s}`]:{[`${s}-unchecked`]:{marginInlineStart:r(e.marginXXS).div(2).equal(),marginInlineEnd:r(e.marginXXS).mul(-1).div(2).equal()}},[`&${n}-checked ${s}`]:{[`${s}-checked`]:{marginInlineStart:r(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:r(e.marginXXS).div(2).equal()}}}}}}},Qe=e=>{const{componentCls:n,handleSize:t,calc:a}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:a(a(t).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},Je=e=>{const{componentCls:n,trackPadding:t,handleBg:a,handleShadow:o,handleSize:l,calc:m}=e,i=`${n}-handle`;return{[n]:{[i]:{position:"absolute",top:t,insetInlineStart:t,width:l,height:l,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:a,borderRadius:m(l).div(2).equal(),boxShadow:o,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${i}`]:{insetInlineStart:`calc(100% - ${x(m(l).add(t).equal())})`},[`&:not(${n}-disabled):active`]:{[`${i}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${i}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},Ze=e=>{const{componentCls:n,trackHeight:t,trackPadding:a,innerMinMargin:o,innerMaxMargin:l,handleSize:m,calc:i}=e,r=`${n}-inner`,s=x(i(m).add(i(a).mul(2)).equal()),c=x(i(l).mul(2).equal());return{[n]:{[r]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:l,paddingInlineEnd:o,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${r}-checked, ${r}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:t},[`${r}-checked`]:{marginInlineStart:`calc(-100% + ${s} - ${c})`,marginInlineEnd:`calc(100% - ${s} + ${c})`},[`${r}-unchecked`]:{marginTop:i(t).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${r}`]:{paddingInlineStart:o,paddingInlineEnd:l,[`${r}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${r}-unchecked`]:{marginInlineStart:`calc(100% - ${s} + ${c})`,marginInlineEnd:`calc(-100% + ${s} - ${c})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${r}`]:{[`${r}-unchecked`]:{marginInlineStart:i(a).mul(2).equal(),marginInlineEnd:i(a).mul(-1).mul(2).equal()}},[`&${n}-checked ${r}`]:{[`${r}-checked`]:{marginInlineStart:i(a).mul(-1).mul(2).equal(),marginInlineEnd:i(a).mul(2).equal()}}}}}},en=e=>{const{componentCls:n,trackHeight:t,trackMinWidth:a}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},Ee(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:a,height:t,lineHeight:x(t),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),ke(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},nn=e=>{const{fontSize:n,lineHeight:t,controlHeight:a,colorWhite:o}=e,l=n*t,m=a/2,i=2,r=l-i*2,s=m-i*2;return{trackHeight:l,trackHeightSM:m,trackMinWidth:r*2+i*4,trackMinWidthSM:s*2+i*2,trackPadding:i,handleBg:o,handleSize:r,handleSizeSM:s,handleShadow:`0 2px 4px 0 ${new Ne("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:r/2,innerMaxMargin:r+i+i*2,innerMinMarginSM:s/2,innerMaxMarginSM:s+i+i*2}},tn=xe("Switch",e=>{const n=Ie(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[en(n),Ze(n),Je(n),Qe(n),Ye(n)]},nn);var an=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t};const on=d.forwardRef((e,n)=>{const{prefixCls:t,size:a,disabled:o,loading:l,className:m,rootClassName:i,style:r,checked:s,value:c,defaultChecked:p,defaultValue:v,onChange:w}=e,I=an(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[k,N]=Z(!1,{value:s??c,defaultValue:p??v}),{getPrefixCls:E,direction:C,switch:b}=d.useContext(U),$=d.useContext(_e),_=(o??$)||l,h=E("switch",t),f=d.createElement("div",{className:`${h}-handle`},l&&d.createElement(me,{className:`${h}-loading-icon`})),[g,S,y]=tn(h),L=ue(a),H=q(b==null?void 0:b.className,{[`${h}-small`]:L==="small",[`${h}-loading`]:l,[`${h}-rtl`]:C==="rtl"},m,i,S,y),A=Object.assign(Object.assign({},b==null?void 0:b.style),r),F=function(){N(arguments.length<=0?void 0:arguments[0]),w==null||w.apply(void 0,arguments)};return g(d.createElement(Ue,{component:"Switch"},d.createElement(te,Object.assign({},I,{checked:k,onChange:F,prefixCls:h,className:H,style:A,disabled:_,ref:n,loadingIcon:f}))))}),ae=on;ae.__ANT_SWITCH=!0;function fn(){const{data:e,setData:n,post:t,processing:a,errors:o,reset:l}=oe({name:"",email:"",password:"",password_confirmation:"",is_alumni:!1}),m=i=>{i.preventDefault(),t(route("register"),{onFinish:()=>l("password","password_confirmation")})};return u.jsxs(le,{children:[u.jsx(re,{title:"Register"}),u.jsxs("form",{onSubmit:m,children:[u.jsxs("div",{children:[u.jsx(j,{htmlFor:"name",value:"Nama"}),u.jsx(O,{id:"name",name:"name",value:e.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:i=>n("name",i.target.value),required:!0}),u.jsx(R,{message:o.name,className:"mt-2"})]}),u.jsxs("div",{className:"mt-4",children:[u.jsx(j,{htmlFor:"email",value:"Email"}),u.jsx(O,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:i=>n("email",i.target.value),required:!0}),u.jsx(R,{message:o.email,className:"mt-2"})]}),u.jsxs("div",{className:"mt-4",children:[u.jsx(j,{htmlFor:"password",value:"Password"}),u.jsx(O,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:i=>n("password",i.target.value),required:!0}),u.jsx(R,{message:o.password,className:"mt-2"})]}),u.jsxs("div",{className:"mt-4",children:[u.jsx(j,{htmlFor:"password_confirmation",value:"Confirm Password"}),u.jsx(O,{id:"password_confirmation",type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:i=>n("password_confirmation",i.target.value),required:!0}),u.jsx(R,{message:o.password_confirmation,className:"mt-2"})]}),u.jsxs("div",{className:"mt-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ae,{id:"is_alumni",value:e.is_alumni,onChange:i=>n("is_alumni",i)}),u.jsx(j,{className:"text-sm cursor-pointer",htmlFor:"is_alumni",value:"Saya Alumi SMKN 1 Bojonegoro (Optional)"})]}),u.jsx(R,{message:o.password_confirmation,className:"mt-2"})]}),u.jsxs("div",{className:"flex items-center justify-end mt-4",children:[u.jsx(se,{href:route("login"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Sudah punya akun?"}),u.jsx(ce,{className:"ms-4",disabled:a,children:"Register"})]})]})]})}export{fn as default};