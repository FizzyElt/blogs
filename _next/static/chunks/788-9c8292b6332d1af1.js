(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[788],{8814:function(e,r,t){"use strict";t.d(r,{qE:function(){return h}});var n=t(2439),a=t(8983),i=t(3410),o=t(9496),l=t(9199);function c(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var u=["name","getInitials"],f=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],d=(0,a.Gp)((function(e,r){var t=s({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,a.yK)().badge);return o.createElement(a.m$.div,s({ref:r},e,{className:(0,i.cx)("chakra-avatar__badge",e.className),__css:t}))}));function m(e){var r=e.split(" "),t=r[0],n=r[1];return t&&n?""+t.charAt(0)+n.charAt(0):t.charAt(0)}i.Ts&&(d.displayName="AvatarBadge");var p=function(e){var r=e.name,t=e.getInitials,n=c(e,u),i=(0,a.yK)();return o.createElement(a.m$.div,s({role:"img","aria-label":r},n,{__css:i.label}),r?null==t?void 0:t(r):null)},v=function(e){return o.createElement(a.m$.svg,s({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),o.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),o.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},g={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},h=(0,a.Gp)((function(e,r){var t=(0,a.jC)("Avatar",e),n=(0,a.Lr)(e),l=n.src,u=n.srcSet,d=n.name,p=n.showBorder,h=n.borderRadius,b=void 0===h?"full":h,x=n.onError,E=n.getInitials,w=void 0===E?m:E,N=n.icon,_=void 0===N?o.createElement(v,null):N,k=n.iconLabel,C=void 0===k?" avatar":k,T=n.loading,L=n.children,S=n.borderColor,j=n.ignoreFallback,O=c(n,f),G=s({borderRadius:b,borderWidth:p?"2px":void 0},g,t.container);return S&&(G.borderColor=S),o.createElement(a.m$.span,s({ref:r},O,{className:(0,i.cx)("chakra-avatar",e.className),__css:G}),o.createElement(a.Fo,{value:t},o.createElement(y,{src:l,srcSet:u,loading:T,onError:x,getInitials:w,name:d,borderRadius:b,icon:_,iconLabel:C,ignoreFallback:j}),L))}));i.Ts&&(h.displayName="Avatar");var y=function(e){var r=e.src,t=e.srcSet,i=e.onError,l=e.getInitials,c=e.name,s=e.borderRadius,u=e.loading,f=e.iconLabel,d=e.icon,m=void 0===d?o.createElement(v,null):d,g=e.ignoreFallback,h=(0,n.d9)({src:r,onError:i,ignoreFallback:g});return!r||!("loaded"===h)?c?o.createElement(p,{className:"chakra-avatar__initials",getInitials:l,name:c}):o.cloneElement(m,{role:"img","aria-label":f}):o.createElement(a.m$.img,{src:r,srcSet:t,alt:c,className:"chakra-avatar__img",loading:u,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:s}})};i.Ts&&(y.displayName="AvatarImage");var b=["children","borderColor","max","spacing","borderRadius"],x=(0,a.Gp)((function(e,r){var t=(0,a.jC)("Avatar",e),n=(0,a.Lr)(e),u=n.children,f=n.borderColor,d=n.max,m=n.spacing,p=void 0===m?"-0.75rem":m,v=n.borderRadius,h=void 0===v?"full":v,y=c(n,b),x=(0,l.WR)(u),E=d?x.slice(0,d):x,w=null!=d&&x.length-d,N=E.reverse().map((function(r,t){var n,a={marginEnd:0===t?0:p,size:e.size,borderColor:null!=(n=r.props.borderColor)?n:f,showBorder:!0};return o.cloneElement(r,(0,i.YU)(a))})),_=s({borderRadius:h,marginStart:p},g,t.excessLabel);return o.createElement(a.m$.div,s({ref:r,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},y,{className:(0,i.cx)("chakra-avatar__group",e.className)}),w>0&&o.createElement(a.m$.span,{className:"chakra-avatar__excess",__css:_},"+"+w),N)}));i.Ts&&(x.displayName="AvatarGroup")},5385:function(e,r,t){"use strict";t.d(r,{JO:function(){return s}});var n=t(8983),a=t(3410),i=t(9496);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l=["as","viewBox","color","focusable","children","className","__css"],c={path:i.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},i.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),i.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),i.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},s=(0,n.Gp)((function(e,r){var t=e.as,s=e.viewBox,u=e.color,f=void 0===u?"currentColor":u,d=e.focusable,m=void 0!==d&&d,p=e.children,v=e.className,g=e.__css,h=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l),y={ref:r,focusable:m,className:(0,a.cx)("chakra-icon",v),__css:o({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:f},g)},b=null!=s?s:c.viewBox;if(t&&"string"!==typeof t)return i.createElement(n.m$.svg,o({as:t},y,h));var x=null!=p?p:c.path;return i.createElement(n.m$.svg,o({verticalAlign:"middle",viewBox:b},y,h),x)}));a.Ts&&(s.displayName="Icon")},2439:function(e,r,t){"use strict";t.d(r,{Ee:function(){return m},d9:function(){return s}});var n=t(8983),a=t(3410),i=t(9496),o=t(3266);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function s(e){var r=e.loading,t=e.src,n=e.srcSet,a=e.onLoad,l=e.onError,c=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,f=(0,i.useState)("pending"),d=f[0],m=f[1];(0,i.useEffect)((function(){m(t?"loading":"pending")}),[t]);var p=(0,i.useRef)(),v=(0,i.useCallback)((function(){if(t){g();var e=new Image;e.src=t,c&&(e.crossOrigin=c),n&&(e.srcset=n),s&&(e.sizes=s),r&&(e.loading=r),e.onload=function(e){g(),m("loaded"),null==a||a(e)},e.onerror=function(e){g(),m("failed"),null==l||l(e)},p.current=e}}),[t,c,n,s,a,l,r]),g=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,o.a)((function(){if(!u)return"loading"===d&&v(),function(){g()}}),[d,v,u]),u?"loaded":d}var u=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=i.forwardRef((function(e,r){var t=e.htmlWidth,n=e.htmlHeight,a=e.alt,o=c(e,u);return i.createElement("img",l({width:t,height:n,ref:r,alt:a},o))})),m=(0,n.Gp)((function(e,r){var t=e.fallbackSrc,o=e.fallback,u=e.src,m=e.srcSet,p=e.align,v=e.fit,g=e.loading,h=e.ignoreFallback,y=e.crossOrigin,b=c(e,f),x=null!=g||h||void 0===t&&void 0===o,E=s(l({},e,{ignoreFallback:x})),w=l({ref:r,objectFit:v,objectPosition:p},x?b:(0,a.CE)(b,["onError","onLoad"]));return"loaded"!==E?o||i.createElement(n.m$.img,l({as:d,className:"chakra-image__placeholder",src:t},w)):i.createElement(n.m$.img,l({as:d,src:u,srcSet:m,crossOrigin:y,loading:g,className:"chakra-image"},w))}));a.Ts&&(m.displayName="Image")},3942:function(e,r,t){"use strict";t.d(r,{oM:function(){return d},xu:function(){return h},W2:function(){return _},kC:function(){return S},Ug:function(){return ne},X6:function(){return I},rU:function(){return R},LZ:function(){return Y},cX:function(){return ee},xv:function(){return oe},gC:function(){return ae}});var n=t(8983),a=t(3573),i=t(3410),o=t(9496),l=t(5385),c=t(9199);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var f=["ratio","children","className"],d=(0,n.Gp)((function(e,r){var t=e.ratio,a=void 0===t?4/3:t,l=e.children,c=e.className,d=u(e,f),m=o.Children.only(l),p=(0,i.cx)("chakra-aspect-ratio",c);return o.createElement(n.m$.div,s({ref:r,position:"relative",className:p,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(a,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},d),m)}));i.Ts&&(d.displayName="AspectRatio");var m=["className"],p=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Badge",e),a=(0,n.Lr)(e);a.className;var l=u(a,m);return o.createElement(n.m$.span,s({ref:r,className:(0,i.cx)("chakra-badge",e.className)},l,{__css:s({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},t)}))}));i.Ts&&(p.displayName="Badge");var v=["size","centerContent"],g=["size"],h=(0,n.m$)("div");i.Ts&&(h.displayName="Box");var y=(0,n.Gp)((function(e,r){var t=e.size,n=e.centerContent,a=void 0===n||n,i=u(e,v),l=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(h,s({ref:r,boxSize:t,__css:s({},l,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(y.displayName="Square");var b=(0,n.Gp)((function(e,r){var t=e.size,n=u(e,g);return o.createElement(y,s({size:t,ref:r,borderRadius:"9999px"},n))}));i.Ts&&(b.displayName="Circle");var x=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(x.displayName="Center");var E=["className"],w=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Code",e),a=(0,n.Lr)(e);a.className;var l=u(a,E);return o.createElement(n.m$.code,s({ref:r,className:(0,i.cx)("chakra-code",e.className)},l,{__css:s({display:"inline-block"},t)}))}));i.Ts&&(w.displayName="Code");var N=["className","centerContent"],_=(0,n.Gp)((function(e,r){var t=(0,n.Lr)(e),a=t.className,l=t.centerContent,c=u(t,N),f=(0,n.mq)("Container",e);return o.createElement(n.m$.div,s({ref:r,className:(0,i.cx)("chakra-container",a)},c,{__css:s({},f,l&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(_.displayName="Container");var k=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],C=["className","orientation","__css"],T=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Divider",e),a=t.borderLeftWidth,l=t.borderBottomWidth,c=t.borderTopWidth,f=t.borderRightWidth,d=t.borderWidth,m=t.borderStyle,p=t.borderColor,v=u(t,k),g=(0,n.Lr)(e),h=g.className,y=g.orientation,b=void 0===y?"horizontal":y,x=g.__css,E=u(g,C),w={vertical:{borderLeftWidth:a||f||d||"1px",height:"100%"},horizontal:{borderBottomWidth:l||c||d||"1px",width:"100%"}};return o.createElement(n.m$.hr,s({ref:r,"aria-orientation":b},E,{__css:s({},v,{border:"0",borderColor:p,borderStyle:m},w[b],x),className:(0,i.cx)("chakra-divider",h)}))}));i.Ts&&(T.displayName="Divider");var L=["direction","align","justify","wrap","basis","grow","shrink"],S=(0,n.Gp)((function(e,r){var t=e.direction,a=e.align,i=e.justify,l=e.wrap,c=e.basis,f=e.grow,d=e.shrink,m=u(e,L),p={display:"flex",flexDirection:t,alignItems:a,justifyContent:i,flexWrap:l,flexBasis:c,flexGrow:f,flexShrink:d};return o.createElement(n.m$.div,s({ref:r,__css:p},m))}));i.Ts&&(S.displayName="Flex");var j=["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],O=(0,n.Gp)((function(e,r){var t=e.area,a=e.templateAreas,i=e.gap,l=e.rowGap,c=e.columnGap,f=e.column,d=e.row,m=e.autoFlow,p=e.autoRows,v=e.templateRows,g=e.autoColumns,h=e.templateColumns,y=u(e,j),b={display:"grid",gridArea:t,gridTemplateAreas:a,gridGap:i,gridRowGap:l,gridColumnGap:c,gridAutoColumns:g,gridColumn:f,gridRow:d,gridAutoFlow:m,gridAutoRows:p,gridTemplateRows:v,gridTemplateColumns:h};return o.createElement(n.m$.div,s({ref:r,__css:b},y))}));i.Ts&&(O.displayName="Grid");var G=["className"],I=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Heading",e),a=(0,n.Lr)(e);a.className;var l=u(a,G);return o.createElement(n.m$.h2,s({ref:r,className:(0,i.cx)("chakra-heading",e.className)},l,{__css:t}))}));i.Ts&&(I.displayName="Heading");var W=["className"],A=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Kbd",e),a=(0,n.Lr)(e),l=a.className,c=u(a,W);return o.createElement(n.m$.kbd,s({ref:r,className:(0,i.cx)("chakra-kbd",l)},c,{__css:s({fontFamily:"mono"},t)}))}));i.Ts&&(A.displayName="Kbd");var $=["className","isExternal"],R=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Link",e),a=(0,n.Lr)(e),l=a.className,c=a.isExternal,f=u(a,$);return o.createElement(n.m$.a,s({target:c?"_blank":void 0,rel:c?"noopener noreferrer":void 0,ref:r,className:(0,i.cx)("chakra-link",l)},f,{__css:t}))}));i.Ts&&(R.displayName="Link");var B=["children","styleType","stylePosition","spacing"],M=["as"],F=["as"],z=(0,c.kr)({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` "}),P=z[0],D=z[1],q=(0,n.Gp)((function(e,r){var t,a=(0,n.jC)("List",e),i=(0,n.Lr)(e),l=i.children,f=i.styleType,d=void 0===f?"none":f,m=i.stylePosition,p=i.spacing,v=u(i,B),g=(0,c.WR)(l),h=p?((t={})["& > *:not(style) ~ *:not(style)"]={mt:p},t):{};return o.createElement(P,{value:a},o.createElement(n.m$.ul,s({ref:r,listStyleType:d,listStylePosition:m,role:"list",__css:s({},a.container,h)},v),g))}));i.Ts&&(q.displayName="List");var U=(0,n.Gp)((function(e,r){e.as;var t=u(e,M);return o.createElement(q,s({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},t))}));i.Ts&&(U.displayName="OrderedList");var X=(0,n.Gp)((function(e,r){e.as;var t=u(e,F);return o.createElement(q,s({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},t))}));i.Ts&&(X.displayName="UnorderedList");var H=(0,n.Gp)((function(e,r){var t=D();return o.createElement(n.m$.li,s({ref:r},e,{__css:t.item}))}));i.Ts&&(H.displayName="ListItem");var K=(0,n.Gp)((function(e,r){var t=D();return o.createElement(l.JO,s({ref:r,role:"presentation"},e,{__css:t.icon}))}));i.Ts&&(K.displayName="ListIcon");var Q=["columns","spacingX","spacingY","spacing","minChildWidth"],J=(0,n.Gp)((function(e,r){var t,n,a=e.columns,l=e.spacingX,c=e.spacingY,f=e.spacing,d=e.minChildWidth,m=u(e,Q),p=d?(n=d,(0,i.XQ)(n,(function(e){return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(r=e,((0,i.hj)(r)?r+"px":r)+", 1fr))");var r}))):(t=a,(0,i.XQ)(t,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return o.createElement(O,s({ref:r,gap:f,columnGap:l,rowGap:c,templateColumns:p},m))}));i.Ts&&(J.displayName="SimpleGrid");var Y=(0,n.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(Y.displayName="Spacer");var V="& > *:not(style) ~ *:not(style)";var Z=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ee=function(e){return o.createElement(n.m$.div,s({className:"chakra-stack__divider"},e,{__css:s({},e.__css,{borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"})}))},re=function(e){return o.createElement(n.m$.div,s({className:"chakra-stack__item"},e,{__css:s({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},te=(0,n.Gp)((function(e,r){var t,a=e.isInline,l=e.direction,f=e.align,d=e.justify,m=e.spacing,p=void 0===m?"0.5rem":m,v=e.wrap,g=e.children,h=e.divider,y=e.className,b=e.shouldWrapChildren,x=u(e,Z),E=a?"row":null!=l?l:"column",w=o.useMemo((function(){return function(e){var r,t=e.spacing,n=e.direction,a={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return(r={flexDirection:n})[V]=(0,i.XQ)(n,(function(e){return a[e]})),r}({direction:E,spacing:p})}),[E,p]),N=o.useMemo((function(){return function(e){var r=e.spacing,t=e.direction,n={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(t,(function(e){return n[e]}))}}({spacing:p,direction:E})}),[p,E]),_=!!h,k=!b&&!_,C=(0,c.WR)(g),T=k?C:C.map((function(e,r){var t="undefined"!==typeof e.key?e.key:r,n=r+1===C.length,a=b?o.createElement(re,{key:t},e):e;if(!_)return a;var i=n?null:o.cloneElement(h,{__css:N});return o.createElement(o.Fragment,{key:t},a,i)})),L=(0,i.cx)("chakra-stack",y);return o.createElement(n.m$.div,s({ref:r,display:"flex",alignItems:f,justifyContent:d,flexDirection:w.flexDirection,flexWrap:v,className:L,__css:_?{}:(t={},t[V]=w[V],t)},x),T)}));i.Ts&&(te.displayName="Stack");var ne=(0,n.Gp)((function(e,r){return o.createElement(te,s({align:"center"},e,{direction:"row",ref:r}))}));i.Ts&&(ne.displayName="HStack");var ae=(0,n.Gp)((function(e,r){return o.createElement(te,s({align:"center"},e,{direction:"column",ref:r}))}));i.Ts&&(ae.displayName="VStack");var ie=["className","align","decoration","casing"],oe=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Text",e),a=(0,n.Lr)(e);a.className,a.align,a.decoration,a.casing;var l=u(a,ie),c=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(n.m$.p,s({ref:r,className:(0,i.cx)("chakra-text",e.className)},c,l,{__css:t}))}));i.Ts&&(oe.displayName="Text");var le=["spacing","children","justify","direction","align","className","shouldWrapChildren"],ce=["className"],se=(0,n.Gp)((function(e,r){var t=e.spacing,l=void 0===t?"0.5rem":t,c=e.children,f=e.justify,d=e.direction,m=e.align,p=e.className,v=e.shouldWrapChildren,g=u(e,le),h=o.useMemo((function(){return{"--chakra-wrap-spacing":function(e){return(0,i.XQ)(l,(function(r){return(0,a.fr)("space",r)(e)}))},"--wrap-spacing":"calc(var(--chakra-wrap-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:f,alignItems:m,flexDirection:d,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-spacing)"}}}),[l,f,m,d]),y=v?o.Children.map(c,(function(e,r){return o.createElement(ue,{key:r},e)})):c;return o.createElement(n.m$.div,s({ref:r,className:(0,i.cx)("chakra-wrap",p)},g),o.createElement(n.m$.ul,{className:"chakra-wrap__list",__css:h},y))}));i.Ts&&(se.displayName="Wrap");var ue=(0,n.Gp)((function(e,r){var t=e.className,a=u(e,ce);return o.createElement(n.m$.li,s({ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",t)},a))}));i.Ts&&(ue.displayName="WrapItem")},4410:function(e,r,t){"use strict";t.d(r,{Vp:function(){return c}});var n=t(5385),a=t(8983),i=t(3410),o=t(9496);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=(0,a.Gp)((function(e,r){var t=(0,a.jC)("Tag",e),n=(0,a.Lr)(e),i=l({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},t.container);return o.createElement(a.Fo,{value:t},o.createElement(a.m$.span,l({ref:r},n,{__css:i})))}));i.Ts&&(c.displayName="Tag");var s=(0,a.Gp)((function(e,r){var t=(0,a.yK)();return o.createElement(a.m$.span,l({ref:r,isTruncated:!0},e,{__css:t.label}))}));i.Ts&&(s.displayName="TagLabel");var u=(0,a.Gp)((function(e,r){return o.createElement(n.JO,l({ref:r,verticalAlign:"top",marginEnd:"0.5rem"},e))}));i.Ts&&(u.displayName="TagLeftIcon");var f=(0,a.Gp)((function(e,r){return o.createElement(n.JO,l({ref:r,verticalAlign:"top",marginStart:"0.5rem"},e))}));i.Ts&&(f.displayName="TagRightIcon");var d=function(e){return o.createElement(n.JO,l({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),o.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))};i.Ts&&(d.displayName="TagCloseIcon");i.Ts},7459:function(e,r,t){"use strict";var n,a;e.exports=(null===(n=t.g.process)||void 0===n?void 0:n.env)&&"object"===typeof(null===(a=t.g.process)||void 0===a?void 0:a.env)?t.g.process:t(7521)},574:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,i=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var i,o=(i=t(9496))&&i.__esModule?i:{default:i},l=t(8987),c=t(1661),s=t(3482);var u={};function f(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),i=o.default.useMemo((function(){var r=a(l.resolveHref(n,e.href,!0),2),t=r[0],i=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):i||t}}),[n,e.href,e.as]),d=i.href,m=i.as,p=e.children,v=e.replace,g=e.shallow,h=e.scroll,y=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=(r=o.default.Children.only(p))&&"object"===typeof r&&r.ref,x=a(s.useIntersection({rootMargin:"200px"}),2),E=x[0],w=x[1],N=o.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);o.default.useEffect((function(){var e=w&&t&&l.isLocalURL(d),r="undefined"!==typeof y?y:n&&n.locale,a=u[d+"%"+m+(r?"%"+r:"")];e&&!a&&f(n,d,m,{locale:r})}),[m,d,w,y,t,n]);var _={ref:N,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,i,o,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==o&&n.indexOf("#")>=0&&(o=!1),r[a?"replace":"push"](t,n,{shallow:i,locale:c,scroll:o}))}(e,n,d,m,v,g,h,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,m,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof y?y:n&&n.locale,C=n&&n.isLocaleDomain&&l.getDomainLocale(m,k,n&&n.locales,n&&n.domainLocales);_.href=C||l.addBasePath(l.addLocale(m,k,n&&n.defaultLocale))}return o.default.cloneElement(r,_)};r.default=d},3482:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,i=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!l,s=i.useRef(),u=a(i.useState(!1),2),f=u[0],d=u[1],m=a(i.useState(r?r.current:null),2),p=m[0],v=m[1],g=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,i=n.observer,o=n.elements;return o.set(e,r),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:t}))}),[n,p,t,f]);return i.useEffect((function(){if(!l&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){r&&v(r.current)}),[r]),[g,f]};var i=t(9496),o=t(6399),l="undefined"!==typeof IntersectionObserver;var c=new Map},7521:function(e){!function(){var r={162:function(e){var r,t,n=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(n){try{return r.call(null,e,0)}catch(n){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(e){r=a}try{t="function"===typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var l,c=[],s=!1,u=-1;function f(){s&&l&&(s=!1,l.length?c=l.concat(c):u=-1,c.length&&d())}function d(){if(!s){var e=o(f);s=!0;for(var r=c.length;r;){for(l=c,c=[];++u<r;)l&&l[u].run();u=-1,r=c.length}l=null,s=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function m(e,r){this.fun=e,this.array=r}function p(){}n.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new m(e,r)),1!==c.length||s||o(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var i=t[e]={exports:{}},o=!0;try{r[e](i,i.exports,n),o=!1}finally{o&&delete t[e]}return i.exports}n.ab="//";var a=n(162);e.exports=a}()},1667:function(e,r,t){e.exports=t(3851)},1176:function(e,r,t){e.exports=t(574)},3999:function(e,r,t){e.exports=t(3392)},3908:function(e,r,t){"use strict";t.d(r,{w_:function(){return s}});var n=t(9496),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return(o=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t};function c(e){return e&&e.map((function(e,r){return n.createElement(e.tag,o({key:r},e.attr),c(e.child))}))}function s(e){return function(r){return n.createElement(u,o({attr:o({},e.attr)},r),c(e.child))}}function u(e){var r=function(r){var t,a=e.attr,i=e.size,c=e.title,s=l(e,["attr","size","title"]),u=i||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,s,{className:t,style:o(o({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return r(e)})):r(a)}}}]);