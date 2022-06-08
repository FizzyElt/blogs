(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{4979:function(e,r,t){"use strict";t.d(r,{qE:function(){return h}});var n=t(8571),a=t(8303),o=t(41),l=t(3236),i=t(524);function c(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var u=["name","getInitials"],f=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],d=(0,a.Gp)((function(e,r){var t=s({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,a.yK)().badge);return l.createElement(a.m$.div,s({ref:r},e,{className:(0,o.cx)("chakra-avatar__badge",e.className),__css:t}))}));function m(e){var r=e.split(" "),t=r[0],n=r[1];return t&&n?""+t.charAt(0)+n.charAt(0):t.charAt(0)}o.Ts&&(d.displayName="AvatarBadge");var v=function(e){var r=e.name,t=e.getInitials,n=c(e,u),o=(0,a.yK)();return l.createElement(a.m$.div,s({role:"img","aria-label":r},n,{__css:o.label}),r?null==t?void 0:t(r):null)},p=function(e){return l.createElement(a.m$.svg,s({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),l.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),l.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},g={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},h=(0,a.Gp)((function(e,r){var t=(0,a.jC)("Avatar",e),n=(0,a.Lr)(e),i=n.src,u=n.srcSet,d=n.name,v=n.showBorder,h=n.borderRadius,y=void 0===h?"full":h,E=n.onError,k=n.getInitials,C=void 0===k?m:k,_=n.icon,O=void 0===_?l.createElement(p,null):_,L=n.iconLabel,w=void 0===L?" avatar":L,I=n.loading,S=n.children,x=n.borderColor,A=n.ignoreFallback,j=c(n,f),N=s({borderRadius:y,borderWidth:v?"2px":void 0},g,t.container);return x&&(N.borderColor=x),l.createElement(a.m$.span,s({ref:r},j,{className:(0,o.cx)("chakra-avatar",e.className),__css:N}),l.createElement(a.Fo,{value:t},l.createElement(b,{src:i,srcSet:u,loading:I,onError:E,getInitials:C,name:d,borderRadius:y,icon:O,iconLabel:w,ignoreFallback:A}),S))}));o.Ts&&(h.displayName="Avatar");var b=function(e){var r=e.src,t=e.srcSet,o=e.onError,i=e.getInitials,c=e.name,s=e.borderRadius,u=e.loading,f=e.iconLabel,d=e.icon,m=void 0===d?l.createElement(p,null):d,g=e.ignoreFallback,h=(0,n.d9)({src:r,onError:o,ignoreFallback:g});return!r||!("loaded"===h)?c?l.createElement(v,{className:"chakra-avatar__initials",getInitials:i,name:c}):l.cloneElement(m,{role:"img","aria-label":f}):l.createElement(a.m$.img,{src:r,srcSet:t,alt:c,className:"chakra-avatar__img",loading:u,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:s}})};o.Ts&&(b.displayName="AvatarImage");var y=["children","borderColor","max","spacing","borderRadius"],E=(0,a.Gp)((function(e,r){var t=(0,a.jC)("Avatar",e),n=(0,a.Lr)(e),u=n.children,f=n.borderColor,d=n.max,m=n.spacing,v=void 0===m?"-0.75rem":m,p=n.borderRadius,h=void 0===p?"full":p,b=c(n,y),E=(0,i.WR)(u),k=d?E.slice(0,d):E,C=null!=d&&E.length-d,_=k.reverse().map((function(r,t){var n,a={marginEnd:0===t?0:v,size:e.size,borderColor:null!=(n=r.props.borderColor)?n:f,showBorder:!0};return l.cloneElement(r,(0,o.YU)(a))})),O=s({borderRadius:h,marginStart:v},g,t.excessLabel);return l.createElement(a.m$.div,s({ref:r,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},b,{className:(0,o.cx)("chakra-avatar__group",e.className)}),C>0&&l.createElement(a.m$.span,{className:"chakra-avatar__excess",__css:O},"+"+C),_)}));o.Ts&&(E.displayName="AvatarGroup")},8571:function(e,r,t){"use strict";t.d(r,{Ee:function(){return m},d9:function(){return s}});var n=t(8303),a=t(41),o=t(3236),l=t(9141);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function s(e){var r=e.loading,t=e.src,n=e.srcSet,a=e.onLoad,i=e.onError,c=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,f=(0,o.useState)("pending"),d=f[0],m=f[1];(0,o.useEffect)((function(){m(t?"loading":"pending")}),[t]);var v=(0,o.useRef)(),p=(0,o.useCallback)((function(){if(t){g();var e=new Image;e.src=t,c&&(e.crossOrigin=c),n&&(e.srcset=n),s&&(e.sizes=s),r&&(e.loading=r),e.onload=function(e){g(),m("loaded"),null==a||a(e)},e.onerror=function(e){g(),m("failed"),null==i||i(e)},v.current=e}}),[t,c,n,s,a,i,r]),g=function(){v.current&&(v.current.onload=null,v.current.onerror=null,v.current=null)};return(0,l.a)((function(){if(!u)return"loading"===d&&p(),function(){g()}}),[d,p,u]),u?"loaded":d}var u=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy"],d=o.forwardRef((function(e,r){var t=e.htmlWidth,n=e.htmlHeight,a=e.alt,l=c(e,u);return o.createElement("img",i({width:t,height:n,ref:r,alt:a},l))})),m=(0,n.Gp)((function(e,r){var t=e.fallbackSrc,l=e.fallback,u=e.src,m=e.srcSet,v=e.align,p=e.fit,g=e.loading,h=e.ignoreFallback,b=e.crossOrigin,y=e.fallbackStrategy,E=void 0===y?"beforeLoadOrError":y,k=c(e,f),C=null!=g||h||!(void 0!==t||void 0!==l),_=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(s(i({},e,{ignoreFallback:C})),E),O=i({ref:r,objectFit:p,objectPosition:v},C?k:(0,a.CE)(k,["onError","onLoad"]));return _?l||o.createElement(n.m$.img,i({as:d,className:"chakra-image__placeholder",src:t},O)):o.createElement(n.m$.img,i({as:d,src:u,srcSet:m,crossOrigin:b,loading:g,className:"chakra-image"},O))}));a.Ts&&(m.displayName="Image")},2911:function(e,r,t){"use strict";t.d(r,{Vp:function(){return c}});var n=t(5636),a=t(8303),o=t(41),l=t(3236);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=(0,a.Gp)((function(e,r){var t=(0,a.jC)("Tag",e),n=(0,a.Lr)(e),o=i({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},t.container);return l.createElement(a.Fo,{value:t},l.createElement(a.m$.span,i({ref:r},n,{__css:o})))}));o.Ts&&(c.displayName="Tag");var s=(0,a.Gp)((function(e,r){var t=(0,a.yK)();return l.createElement(a.m$.span,i({ref:r,noOfLines:1},e,{__css:t.label}))}));o.Ts&&(s.displayName="TagLabel");var u=(0,a.Gp)((function(e,r){return l.createElement(n.JO,i({ref:r,verticalAlign:"top",marginEnd:"0.5rem"},e))}));o.Ts&&(u.displayName="TagLeftIcon");var f=(0,a.Gp)((function(e,r){return l.createElement(n.JO,i({ref:r,verticalAlign:"top",marginStart:"0.5rem"},e))}));o.Ts&&(f.displayName="TagRightIcon");var d=function(e){return l.createElement(n.JO,i({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),l.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))};o.Ts&&(d.displayName="TagCloseIcon");o.Ts},7350:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,l=(o=t(3236))&&o.__esModule?o:{default:o},i=t(8188),c=t(2237),s=t(6930);var u={};function f(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),o=l.default.useMemo((function(){var r=a(i.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),d=o.href,m=o.as,v=e.children,p=e.replace,g=e.shallow,h=e.scroll,b=e.locale;"string"===typeof v&&(v=l.default.createElement("a",null,v));var y=(r=l.default.Children.only(v))&&"object"===typeof r&&r.ref,E=a(s.useIntersection({rootMargin:"200px"}),2),k=E[0],C=E[1],_=l.default.useCallback((function(e){k(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,k]);l.default.useEffect((function(){var e=C&&t&&i.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,a=u[d+"%"+m+(r?"%"+r:"")];e&&!a&&f(n,d,m,{locale:r})}),[m,d,C,b,t,n]);var O={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),r[a?"replace":"push"](t,n,{shallow:o,locale:c,scroll:l}))}(e,n,d,m,p,g,h,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,m,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var L="undefined"!==typeof b?b:n&&n.locale,w=n&&n.isLocaleDomain&&i.getDomainLocale(m,L,n&&n.locales,n&&n.domainLocales);O.href=w||i.addBasePath(i.addLocale(m,L,n&&n.defaultLocale))}return l.default.cloneElement(r,O)};r.default=d},6930:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,s=o.useRef(),u=a(o.useState(!1),2),f=u[0],d=u[1],m=a(o.useState(r?r.current:null),2),v=m[0],p=m[1],g=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,o=n.observer,l=n.elements;return l.set(e,r),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:t}))}),[n,v,t,f]);return o.useEffect((function(){if(!i&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){r&&p(r.current)}),[r]),[g,f]};var o=t(3236),l=t(617),i="undefined"!==typeof IntersectionObserver;var c=new Map},7024:function(e,r,t){e.exports=t(7350)},2421:function(e,r,t){e.exports=t(5325)}}]);