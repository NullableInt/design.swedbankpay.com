(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[26,3,44,45,46,47,48,49,51],{421:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return i});var n=t(1),r=t.n(n),l=t(2),c=t.n(l),i=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},o=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t)):!t&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};o.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},i.propTypes={value:c.a.string.isRequired},a.default=o},422:function(e,a,t){"use strict";var n=t(1),i=t.n(n),r=t(2),l=t.n(r),c=function(e){var a=e.id,t=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return i.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?i.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?i.a.createElement("p",null,l):null,c?"\n":"",c?i.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},a.a=c},423:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(422);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(422);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(2),c=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:t.n(l).a.string.isRequired},a.default=c},426:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(2),l=t.n(r),c=function(e){var a,t,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(t=r.map(function(e,a){return i.a.createElement("span",{key:a},e,i.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return i.a.createElement("span",{key:a},e,a<c.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,n),i.a.createElement("span",{className:"token punctuation"},"."),t,i.a.createElement("span",{className:"token function"},l),i.a.createElement("span",{className:"token punctuation"},"("),a,i.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},a.default=c},427:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),r=t(2),l=t.n(r),m=t(431),c=t(432),d=t.n(c),f=t(433);function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var n=e.children,r=e.language,l=e.removeOuterTag,c=e.hideValue,i=e.removeList,a=e.showCasePanel,t=e.codeFigure,o=e.dangerousHTML,u=function(e){var a=document.createElement("div");return a.innerHTML=Object(m.renderToStaticMarkup)(e),a.firstElementChild?a.firstElementChild.innerHTML:a.firstChild?a.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},p=function(e){var a=document.createElement("div");a.innerHTML=Object(m.renderToStaticMarkup)(e);var t=a.querySelectorAll("li"),n="";return t.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return s.a.createElement(s.a.Fragment,null,a?s.a.createElement(function(){return s.a.createElement("div",{className:"showcase-panel"},n)},null):null,t?s.a.createElement(function(){var e,a,t="";if("html"===r&&o)a="","function"==typeof(e=n).forEach?e.forEach(function(e){return a+="".concat(e,"\n")}):a=e,t=a;else if("html"===r&&n&&"function"==typeof n.map)n.map(function(e){t+=l?u(e):i?p(e):Object(m.renderToStaticMarkup)(e)});else if("html"===r)t+=l?u(n):i?p(n):Object(m.renderToStaticMarkup)(n);else switch(g(n)){case"string":t=n;break;case"object":n.forEach(function(e){return t+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":t=(t=d.a.html_beautify(t)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(t=t.replace(/ value="(.*)"/g,""));break;case"css":t=d.a.css(t);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",s.a.createElement("figure",null,s.a.createElement(f.a,h({},f.b,{theme:void 0,code:t,language:r}),function(e){var a=e.className,t=e.style,n=e.tokens,r=e.getLineProps,l=e.getTokenProps;return s.a.createElement("pre",{className:a,style:t},n.map(function(e,a){return s.a.createElement("div",h({key:e+a},r({line:e,key:a})),e.map(function(e,a){return s.a.createElement("span",h({key:a},l({token:e,key:a})))}))}))}))},null):null)};i.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},a.default=i},430:function(e,a,t){"use strict";t.r(a);var n=t(421);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var r=t(427);t.d(a,"ComponentPreview",function(){return r.default});var l=t(428);t.d(a,"DocHeading",function(){return l.default});var c=t(429);t.d(a,"DocToc",function(){return c.default});var i=t(423);t.d(a,"DeprecatedComponentAlert",function(){return i.default});var o=t(424);t.d(a,"ExperimentalComponentAlert",function(){return o.default});var u=t(425);t.d(a,"Icon",function(){return u.default});var p=t(426);t.d(a,"PxScript",function(){return p.default})},436:function(e,a,t){"use strict";var n=t(1),x=t.n(n),r=t(2),l=t.n(r),c=t(186),y=t.n(c);function k(){return(k=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i=function(e){var a=e.label,t=e.id,n=e.name,r=e.value,l=e.href,c=e.icon,i=e.loading,o=e.type,u=e.disabled,p=e.btnType,s=e.fullWidth,m=e.loader,d=e.pullRight,f=e.input,h=e.outline,g=e.active,E=e.size,v=y()("btn","btn-".concat(h?"outline-":"").concat(o),E?"btn-".concat(E):null,i?"loading":null,s?"btn-block":null,d?"pull-right":null,g?"active":null),b={href:l,id:t,name:n,disabled:u,"data-button-loader":m?"":null,defaultValue:r};return l?b.role="button":b.type=p||"button",l?x.a.createElement("a",k({className:v},b),c?"\n\t":null,c?x.a.createElement("i",{className:"material-icons"},c):null,c&&a?x.a.createElement("span",null,a):a):f?x.a.createElement("input",k({className:v},b)):x.a.createElement("button",k({className:v},b),c?"\n\t\t":null,c?x.a.createElement("i",{className:"material-icons"},c):null,c?"\n\t\t":null,c&&a?x.a.createElement("span",null,a):a,c?"\n\t":null)};i.propTypes={type:l.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:l.a.string,id:l.a.string,name:l.a.string,value:l.a.string,href:l.a.string,icon:l.a.string,loading:l.a.bool,disabled:l.a.bool,btnType:l.a.string,fullWidth:l.a.bool,loader:l.a.bool,pullRight:l.a.bool,input:l.a.bool,outline:l.a.bool,active:l.a.bool,size:l.a.oneOf(["lg","sm","xs"])},a.a=i},468:function(e,a,t){"use strict";t.r(a),t.d(a,"OurFavicon",function(){return p}),t.d(a,"Usage",function(){return s}),t.d(a,"FaviconsText",function(){return m});var n=t(1),r=t.n(n),l=t(434),c=t.n(l),i=t(430),o=t(436),u="/feature/payment_icons/",p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"our-favicon"},"Our favicon"),r.a.createElement("p",null,"Our favicon..."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("img",{src:"".concat(u,"icons/android-chrome-96x96.png"),alt:"PayEx favicon"})))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"usage"},"Usage"),r.a.createElement("p",null,"To use our favicons download the zip-file below and extract it to the root of your build-folder. Insert the code below in the ",r.a.createElement(c.a,{className:"language-html"},"<head>")," tag of your html documents and you are ready to go."),r.a.createElement("p",null,"You should also rename the ",r.a.createElement(i.Attribute,{name:"content"})," of the ",r.a.createElement(i.Attribute,{value:"apple-mobile-web-app-title"})," and ",r.a.createElement(i.Attribute,{value:"application-name"})," ",r.a.createElement(c.a,{className:"language-html"},"<meta>")," tags to reflect the title of your project. Make sure to also do this in the ",r.a.createElement(i.Property,{value:"manifest.json"})," file in the icons folder."),r.a.createElement(o.a,{type:"primary",icon:"file_download",href:"".concat(u,"release/icons.zip"),label:"Download Favicons"}),r.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/icons/apple-touch-icon-114x114.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/icons/apple-touch-icon-120x120.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/icons/apple-touch-icon-144x144.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/icons/apple-touch-icon-152x152.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/icons/apple-touch-icon-180x180.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/icons/apple-touch-icon-57x57.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/icons/apple-touch-icon-60x60.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/apple-touch-icon-72x72.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/icons/apple-touch-icon-76x76.png"}),r.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-320x460.png"}),r.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-640x920.png"}),r.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-640x1096.png"}),r.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-750x1294.png"}),r.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)",href:"/icons/apple-touch-startup-image-1182x2208.png"}),r.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)",href:"/icons/apple-touch-startup-image-1242x2148.png"}),r.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-748x1024.png"}),r.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-1496x2048.png"}),r.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-768x1004.png"}),r.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-1536x2008.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/icons/favicon-16x16.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"228x228",href:"/icons/coast-228x228.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/icons/favicon-32x32.png"}),r.a.createElement("link",{rel:"manifest",href:"/icons/manifest.json"}),r.a.createElement("link",{rel:"shortcut icon",href:"/icons/favicon.ico"}),r.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),r.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"PayEx App"}),r.a.createElement("meta",{name:"application-name",content:"PayEx App"}),r.a.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),r.a.createElement("meta",{name:"msapplication-TileColor",content:"#000"}),r.a.createElement("meta",{name:"msapplication-TileImage",content:"/icons/mstile-144x144.png"}),r.a.createElement("meta",{name:"msapplication-config",content:"/icons/browserconfig.xml"}),r.a.createElement("meta",{name:"theme-color",content:"#000"})))},m=function(){return r.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"The PayEx favicon..."),r.a.createElement(p,null),r.a.createElement(s,null))};a.default=function(){return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(m,null),r.a.createElement(i.DocToc,{component:m})))}}}]);
//# sourceMappingURL=doc-route.chunk_25.js.map?efbdf697d74f5722699b