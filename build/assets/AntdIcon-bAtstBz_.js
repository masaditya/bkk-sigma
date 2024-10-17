import{w as L,f as b,e as c,i as U,I as N,u as W,_,a as R,j as q,c as F,b as x,d as G}from"./presets-Dd22xEU9.js";import{R as h,r as s}from"./app-C-MbZs96.js";function S(n){var o;return n==null||(o=n.getRootNode)===null||o===void 0?void 0:o.call(n)}function H(n){return S(n)instanceof ShadowRoot}function J(n){return H(n)?S(n):null}function K(n){return n.replace(/-(.)/g,function(o,e){return e.toUpperCase()})}function M(n,o){L(n,"[@ant-design/icons] ".concat(o))}function k(n){return b(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(b(n.icon)==="object"||typeof n.icon=="function")}function I(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(o,e){var r=n[e];switch(e){case"class":o.className=r,delete o.class;break;default:delete o[e],o[K(e)]=r}return o},{})}function p(n,o,e){return e?h.createElement(n.tag,c(c({key:o},I(n.attrs)),e),(n.children||[]).map(function(r,t){return p(r,"".concat(o,"-").concat(n.tag,"-").concat(t))})):h.createElement(n.tag,c({key:o},I(n.attrs)),(n.children||[]).map(function(r,t){return p(r,"".concat(o,"-").concat(n.tag,"-").concat(t))}))}function E(n){return U(n)[0]}function z(n){return n?Array.isArray(n)?n:[n]:[]}var Q=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,V=function(o){var e=s.useContext(N),r=e.csp,t=e.prefixCls,i=Q;t&&(i=i.replace(/anticon/g,t)),s.useEffect(function(){var l=o.current,u=J(l);W(i,"@ant-design-icons",{prepend:!0,csp:r,attachTo:u})},[])},X=["icon","className","onClick","style","primaryColor","secondaryColor"],f={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Y(n){var o=n.primaryColor,e=n.secondaryColor;f.primaryColor=o,f.secondaryColor=e||E(o),f.calculated=!!e}function Z(){return c({},f)}var d=function(o){var e=o.icon,r=o.className,t=o.onClick,i=o.style,l=o.primaryColor,u=o.secondaryColor,y=_(o,X),C=s.useRef(),m=f;if(l&&(m={primaryColor:l,secondaryColor:u||E(l)}),V(C),M(k(e),"icon should be icon definiton, but got ".concat(e)),!k(e))return null;var a=e;return a&&typeof a.icon=="function"&&(a=c(c({},a),{},{icon:a.icon(m.primaryColor,m.secondaryColor)})),p(a.icon,"svg-".concat(a.name),c(c({className:r,onClick:t,style:i,"data-icon":a.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},y),{},{ref:C}))};d.displayName="IconReact";d.getTwoToneColors=Z;d.setTwoToneColors=Y;function j(n){var o=z(n),e=R(o,2),r=e[0],t=e[1];return d.setTwoToneColors({primaryColor:r,secondaryColor:t})}function nn(){var n=d.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var on=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];j(q.primary);var T=s.forwardRef(function(n,o){var e=n.className,r=n.icon,t=n.spin,i=n.rotate,l=n.tabIndex,u=n.onClick,y=n.twoToneColor,C=_(n,on),m=s.useContext(N),a=m.prefixCls,g=a===void 0?"anticon":a,$=m.rootClassName,A=F($,g,x(x({},"".concat(g,"-").concat(r.name),!!r.name),"".concat(g,"-spin"),!!t||r.name==="loading"),e),v=l;v===void 0&&u&&(v=-1);var P=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,B=z(y),w=R(B,2),O=w[0],D=w[1];return s.createElement("span",G({role:"img","aria-label":r.name},C,{ref:o,tabIndex:v,onClick:u,className:A}),s.createElement(d,{icon:r,primaryColor:O,secondaryColor:D,style:P}))});T.displayName="AntdIcon";T.getTwoToneColor=nn;T.setTwoToneColor=j;export{T as I,J as g};
