(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[37,50,51,52,53,54,55],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return c});var n=t(0),l=t.n(n),i=t(1),r=t.n(i),c=function(e){var a=e.value;return l.a.createElement("code",{className:"token property"},a)},o=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t)):!t&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};o.propTypes={name:r.a.string,value:r.a.string,data:r.a.bool},c.propTypes={value:r.a.string.isRequired},a.default=o},148:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(1),i=t.n(l),r=function(e){var a=e.id,t=e.type,n=e.icon,l=e.close,i=e.text,r=e.children;return c.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,i?"\n":"",i?c.a.createElement("p",null,i):null,r?"\n":"",r?c.a.createElement("div",{className:"alert-body"},r):null,l?"\n":"",l?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};r.propTypes={id:i.a.string,type:i.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:i.a.string,close:i.a.bool,text:i.a.string},a.a=r},149:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(148);a.default=function(){return l.a.createElement(i.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(148);a.default=function(){return l.a.createElement(i.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(1),r=function(e){var a=e.icon;return l.a.createElement("i",{className:"material-icons"},a)};r.propTypes={icon:t.n(i).a.string.isRequired},a.default=r},152:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(1),i=t.n(l),r=function(e){var a,t,n=e.component,l=e.subComponents,i=e.func,r=e.params;return l&&(t=l.map(function(e,a){return c.a.createElement("span",{key:a},e,c.a.createElement("span",{className:"token punctuation"},"."))})),r&&(a=r.map(function(e,a){return c.a.createElement("span",{key:a},e,a<r.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),t,c.a.createElement("span",{className:"token function"},i),c.a.createElement("span",{className:"token punctuation"},"("),a,c.a.createElement("span",{className:"token punctuation"},");"))};r.propTypes={component:i.a.string.isRequired,subComponents:i.a.array,func:i.a.string.isRequired,params:i.a.array},a.default=r},156:function(e,a,t){"use strict";t.r(a);var n=t(147);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var l=t(154);t.d(a,"ComponentPreview",function(){return l.default});var i=t(153);t.d(a,"DocHeading",function(){return i.default});var r=t(155);t.d(a,"DocToc",function(){return r.default});var c=t(149);t.d(a,"DeprecatedComponentAlert",function(){return c.default});var o=t(150);t.d(a,"ExperimentalComponentAlert",function(){return o.default});var p=t(151);t.d(a,"Icon",function(){return p.default});var s=t(152);t.d(a,"PxScript",function(){return s.default})},159:function(e,a,t){"use strict";var n=t(0),b=t.n(n),l=t(1),i=t.n(l),r=t(34),k=t.n(r);function y(){return(y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=function(e){var a=e.label,t=e.id,n=e.name,l=e.value,i=e.href,r=e.icon,c=e.loading,o=e.type,p=e.disabled,s=e.btnType,u=e.fullWidth,m=e.loader,d=e.pullRight,h=e.input,f=e.outline,g=e.active,E=e.size,v=k()("btn","btn-".concat(f?"outline-":"").concat(o),E?"btn-".concat(E):null,c?"loading":null,u?"btn-block":null,d?"pull-right":null,g?"active":null),x={href:i,id:t,name:n,disabled:p,"data-button-loader":m?"":null,defaultValue:l};return i?x.role="button":x.type=s||"button",i?b.a.createElement("a",y({className:v},x),r?"\n\t":null,r?b.a.createElement("i",{className:"material-icons"},r):null,r&&a?b.a.createElement("span",null,a):a):h?b.a.createElement("input",y({className:v},x)):b.a.createElement("button",y({className:v},x),r?"\n\t\t":null,r?b.a.createElement("i",{className:"material-icons"},r):null,r?"\n\t\t":null,r&&a?b.a.createElement("span",null,a):a,r?"\n\t":null)};c.propTypes={type:i.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:i.a.string,id:i.a.string,name:i.a.string,value:i.a.string,href:i.a.string,icon:i.a.string,loading:i.a.bool,disabled:i.a.bool,btnType:i.a.string,fullWidth:i.a.bool,loader:i.a.bool,pullRight:i.a.bool,input:i.a.bool,outline:i.a.bool,active:i.a.bool,size:i.a.oneOf(["lg","sm","xs"])},a.a=c},188:function(e,a,t){"use strict";t.r(a),t.d(a,"OurFavicon",function(){return s}),t.d(a,"Usage",function(){return u}),t.d(a,"FaviconsText",function(){return m});var n=t(0),l=t.n(n),i=t(157),r=t.n(i),c=t(156),o=t(159),p="/feature/programmatically_close/",s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"our-favicon"},"Our favicon"),l.a.createElement("p",null,"Our favicon..."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("img",{src:"".concat(p,"icons/android-chrome-96x96.png"),alt:"PayEx favicon"})))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage"},"Usage"),l.a.createElement("p",null,"To use our favicons download the zip-file below and extract it to the root of your build-folder. Insert the code below in the ",l.a.createElement(r.a,{className:"language-html"},"<head>")," tag of your html documents and you are ready to go."),l.a.createElement("p",null,"You should also rename the ",l.a.createElement(c.Attribute,{name:"content"})," of the ",l.a.createElement(c.Attribute,{value:"apple-mobile-web-app-title"})," and ",l.a.createElement(c.Attribute,{value:"application-name"})," ",l.a.createElement(r.a,{className:"language-html"},"<meta>")," tags to reflect the title of your project. Make sure to also do this in the ",l.a.createElement("code",null,"manifest.json")," file in the icons folder."),l.a.createElement(o.a,{type:"primary",icon:"file_download",href:"".concat(p,"release/icons.zip"),label:"Download Favicons"}),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/icons/apple-touch-icon-114x114.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/icons/apple-touch-icon-120x120.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/icons/apple-touch-icon-144x144.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/icons/apple-touch-icon-152x152.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/icons/apple-touch-icon-180x180.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/icons/apple-touch-icon-57x57.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/icons/apple-touch-icon-60x60.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/apple-touch-icon-72x72.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/icons/apple-touch-icon-76x76.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-320x460.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-640x920.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-640x1096.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-750x1294.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)",href:"/icons/apple-touch-startup-image-1182x2208.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)",href:"/icons/apple-touch-startup-image-1242x2148.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-748x1024.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-1496x2048.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-768x1004.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-1536x2008.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/icons/favicon-16x16.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"228x228",href:"/icons/coast-228x228.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/icons/favicon-32x32.png"}),l.a.createElement("link",{rel:"manifest",href:"/icons/manifest.json"}),l.a.createElement("link",{rel:"shortcut icon",href:"/icons/favicon.ico"}),l.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),l.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),l.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"PayEx App"}),l.a.createElement("meta",{name:"application-name",content:"PayEx App"}),l.a.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),l.a.createElement("meta",{name:"msapplication-TileColor",content:"#000"}),l.a.createElement("meta",{name:"msapplication-TileImage",content:"/icons/mstile-144x144.png"}),l.a.createElement("meta",{name:"msapplication-config",content:"/icons/browserconfig.xml"}),l.a.createElement("meta",{name:"theme-color",content:"#000"})))},m=function(){return l.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"The PayEx favicon..."),l.a.createElement(s,null),l.a.createElement(u,null))};a.default=function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(m,null),l.a.createElement(c.DocToc,{component:m})))}}}]);
//# sourceMappingURL=doc-route.chunk_25.js.map?5f1ce31374846d2bddb3