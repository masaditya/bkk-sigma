import{a as h}from"./AntdIcon-BUzlWaUw.js";import{S as V,b as C,U as S,W as b}from"./index-BvENNQ2c.js";import{R as x}from"./app-DnqBUA5E.js";function v(e){return e!==void 0}function U(e,t){var n=t||{},a=n.defaultValue,r=n.value,s=n.onChange,u=n.postState,y=V(function(){return v(r)?r:v(a)?typeof a=="function"?a():a:typeof e=="function"?e():e}),g=h(y,2),o=g[0],d=g[1],i=r!==void 0?r:o,R=u?u(i):i,_=C(s),B=V([i]),c=h(B,2),l=c[0],E=c[1];S(function(){var f=l[0];o!==f&&_(o,f)},[l]),S(function(){v(r)||d(r)},[r]);var M=C(function(f,p){d(f,p),E([i],p)});return[R,M]}const A=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),n=t.width,a=t.height;if(n||a)return!0}if(e.getBoundingClientRect){var r=e.getBoundingClientRect(),s=r.width,u=r.height;if(s||u)return!0}}return!1},I=e=>{const t=x.useContext(b);return x.useMemo(()=>e?typeof e=="string"?e??t:e instanceof Function?e(t):t:t,[e,t])};export{I as a,A as i,U as u};
