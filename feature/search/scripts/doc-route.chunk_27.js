(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[29,3,5,46,47,48,49,50,52],{420:function(e,a,n){"use strict";n.r(a),n.d(a,"Property",function(){return i});var t=n(1),r=n.n(t),l=n(2),c=n.n(l),i=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},o=function(e){var a=e.data,n=e.name,t=e.value;return n&&t?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),t,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!t?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&t?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},t)):void 0};o.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},i.propTypes={value:c.a.string.isRequired},a.default=o},421:function(e,a,n){"use strict";var t=n(1),i=n.n(t),r=n(2),l=n.n(r),c=function(e){var a=e.id,n=e.type,t=e.icon,r=e.close,l=e.text,c=e.children;return i.a.createElement("div",{id:a,className:"alert alert-".concat(n)},t?"\n":"",t?i.a.createElement("i",{className:"material-icons alert-icon"},t):null,l?"\n":"",l?i.a.createElement("p",null,l):null,c?"\n":"",c?i.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},a.a=c},422:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),l=n(421);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),l=n(421);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),l=n(2),c=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:n.n(l).a.string.isRequired},a.default=c},425:function(e,a,n){"use strict";n.r(a);var t=n(1),i=n.n(t),r=n(2),l=n.n(r),c=function(e){var a,n,t=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,a){return i.a.createElement("span",{key:a},e,i.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return i.a.createElement("span",{key:a},e,a<c.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,t),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},l),i.a.createElement("span",{className:"token punctuation"},"("),a,i.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},a.default=c},426:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),l=n(2),c=n.n(l),i=n(427),o=function(e){var a=e.docToc,n=e.children,t=function(){return r.a.createElement("div",{className:"doc-body ".concat(a?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(t,null),a?r.a.createElement(i.DocToc,{component:t}):null))};o.propTypes={docToc:c.a.bool},a.default=o},427:function(e,a,n){"use strict";n.r(a);var t=n(420);n.d(a,"Attribute",function(){return t.default}),n.d(a,"Property",function(){return t.Property});var r=n(428);n.d(a,"ComponentPreview",function(){return r.default});var l=n(426);n.d(a,"DocContainer",function(){return l.default});var c=n(429);n.d(a,"DocHeading",function(){return c.default});var i=n(430);n.d(a,"DocToc",function(){return i.default});var o=n(422);n.d(a,"DeprecatedComponentAlert",function(){return o.default});var m=n(423);n.d(a,"ExperimentalComponentAlert",function(){return m.default});var s=n(424);n.d(a,"Icon",function(){return s.default});var u=n(425);n.d(a,"PxScript",function(){return u.default})},428:function(e,a,n){"use strict";n.r(a);var t=n(1),u=n.n(t),r=n(2),l=n.n(r),p=n(431),c=n(432),d=n.n(c),f=n(433);function y(){return(y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var t=e.children,r=e.language,l=e.removeOuterTag,c=e.hideValue,i=e.removeList,a=e.showCasePanel,n=e.codeFigure,o=e.dangerousHTML,m=function(e){var a=document.createElement("div");return a.innerHTML=Object(p.renderToStaticMarkup)(e),a.firstElementChild?a.firstElementChild.innerHTML:a.firstChild?a.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var a=document.createElement("div");a.innerHTML=Object(p.renderToStaticMarkup)(e);var n=a.querySelectorAll("li"),t="";return n.forEach(function(e){t+="".concat(e.innerHTML," \n")}),t};return u.a.createElement(u.a.Fragment,null,a?u.a.createElement(function(){return u.a.createElement("div",{className:"showcase-panel"},t)},null):null,n?u.a.createElement(function(){var e,a,n="";if("html"===r&&o)a="","function"==typeof(e=t).forEach?e.forEach(function(e){return a+="".concat(e,"\n")}):a=e,n=a;else if("html"===r&&t&&"function"==typeof t.map)t.map(function(e){n+=l?m(e):i?s(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=l?m(t):i?s(t):Object(p.renderToStaticMarkup)(t);else switch(E(t)){case"string":n=t;break;case"object":t.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",u.a.createElement("figure",null,u.a.createElement(f.a,y({},f.b,{theme:void 0,code:n,language:r}),function(e){var a=e.className,n=e.style,t=e.tokens,r=e.getLineProps,l=e.getTokenProps;return u.a.createElement("pre",{className:a,style:n},t.map(function(e,a){return u.a.createElement("div",y({key:e+a},r({line:e,key:a})),e.map(function(e,a){return u.a.createElement("span",y({key:a},l({token:e,key:a})))}))}))}))},null):null)};i.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},a.default=i},492:function(e,a,n){"use strict";n.r(a);var l=n(1),m=n.n(l),t=n(434),r=n.n(t),c=n(427),i=n(2),o=n.n(i),s=n(187),u=n.n(s);function p(e){return function(e){if(Array.isArray(e)){for(var a=0,n=new Array(e.length);a<e.length;a++)n[a]=e[a];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=function(e){var a=e.name,n=e.preview,t=e.previewSize,r=e.size,l=e.className,c=e.type,i=l?l.split(" "):[],o=u.a.apply(void 0,[c,"payment-icon"===c?a:"",r].concat(p(i)));return n||t?m.a.createElement("div",{className:"icon-preview"},m.a.createElement("i",{className:o},o.includes("material-icons")?a:null),m.a.createElement("span",null,n?a:r)):m.a.createElement("i",{className:o},o.includes("material-icons")?a:null)};d.propTypes={name:o.a.string.isRequired,type:o.a.string.isRequired,preview:o.a.bool,size:o.a.oneOf(["tiny","small","medium","large","huge"]),className:o.a.string};var f=d,y=n(43);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function g(e,a){return!a||"object"!==E(a)&&"function"!=typeof a?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):a}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,a){return(b=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}n.d(a,"MaterialIcons",function(){return w}),n.d(a,"PaymentIcons",function(){return N});var w=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",{id:"material-icons"},"Material Icons"),m.a.createElement("p",null,"To use an icon, provide the following markup: ",m.a.createElement(r.a,{className:"language-html"},'<i class="material-icons">{icon_name}</i>'),"."),m.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},m.a.createElement("i",{className:"material-icons"},"android"),"\n",m.a.createElement("i",{className:"material-icons"},"contact_support"),"\n",m.a.createElement("i",{className:"material-icons"},"face"),"\n",m.a.createElement("i",{className:"material-icons"},"star"),"\n",m.a.createElement("i",{className:"material-icons"},"warning")),m.a.createElement("h3",null,"Sizes"),m.a.createElement("p",null,"You can modify the size of the material icons by adding one of the size classes: ",m.a.createElement(c.Property,{value:".tiny"}),", ",m.a.createElement(c.Property,{value:".small"}),", ",m.a.createElement(c.Property,{value:".medium"})," or ",m.a.createElement(c.Property,{value:".large"}),"."),m.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},m.a.createElement("div",{className:"row justify-content-evenly align-items-center"},m.a.createElement(f,{previewSize:!0,type:"material-icons",name:"android",size:"tiny"}),m.a.createElement(f,{previewSize:!0,type:"material-icons",name:"android",size:"small"}),m.a.createElement(f,{previewSize:!0,type:"material-icons",name:"android",size:"medium"}),m.a.createElement(f,{previewSize:!0,type:"material-icons",name:"android",size:"large"}))),m.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},m.a.createElement("i",{className:"material-icons tiny"},"android"),"\n",m.a.createElement("i",{className:"material-icons small"},"android"),"\n",m.a.createElement("i",{className:"material-icons medium"},"android"),"\n",m.a.createElement("i",{className:"material-icons large"},"android")))},N=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",{id:"payment-icons"},"Payment Icons"),m.a.createElement("p",null,"To use an icon, provide the following markup: ",m.a.createElement(r.a,{className:"language-html"},'<i class="payment-icon {icon_name}"></i>'),"."),m.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},m.a.createElement("div",{className:"row justify-content-evenly mb-2"},m.a.createElement(f,{preview:!0,type:"payment-icon",name:"amex",size:"large"}),"\n",m.a.createElement(f,{preview:!0,type:"payment-icon",name:"diners",size:"large"}),"\n",m.a.createElement(f,{preview:!0,type:"payment-icon",name:"mastercard",size:"large"}),"\n",m.a.createElement(f,{preview:!0,type:"payment-icon",name:"visa",size:"large"})),m.a.createElement("div",{className:"row justify-content-evenly"},m.a.createElement(f,{preview:!0,type:"payment-icon",name:"mobilepay",size:"large"}),"\n",m.a.createElement(f,{preview:!0,type:"payment-icon",name:"paypal",size:"large"}),"\n",m.a.createElement(f,{preview:!0,type:"payment-icon",name:"swish",size:"large"}),"\n",m.a.createElement(f,{preview:!0,type:"payment-icon",name:"vipps",size:"large"}),"\n")),m.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},m.a.createElement(f,{type:"payment-icon",name:"amex"}),"\n",m.a.createElement(f,{type:"payment-icon",name:"diners"}),"\n",m.a.createElement(f,{type:"payment-icon",name:"mastercard"}),"\n",m.a.createElement(f,{type:"payment-icon",name:"visa"}),"\n",m.a.createElement(f,{type:"payment-icon",name:"mobilepay"}),"\n",m.a.createElement(f,{type:"payment-icon",name:"paypal"}),"\n",m.a.createElement(f,{type:"payment-icon",name:"swish"}),"\n",m.a.createElement(f,{type:"payment-icon",name:"vipps"})),m.a.createElement("h3",null,"Sizes"),m.a.createElement("p",null,"Different sizes are available by adding ",m.a.createElement(c.Property,{value:".small"}),", ",m.a.createElement(c.Property,{value:".medium"}),", ",m.a.createElement(c.Property,{value:".large"})," and",m.a.createElement(c.Property,{value:".huge"}),". If no size is provided ",m.a.createElement(c.Property,{value:".medium"})," is defaulted."),m.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},m.a.createElement("div",{className:"row justify-content-evenly align-items-center"},m.a.createElement(f,{type:"payment-icon",previewSize:!0,name:"visa",size:"small"}),"\n",m.a.createElement(f,{type:"payment-icon",previewSize:!0,name:"visa",size:"medium"}),"\n",m.a.createElement(f,{type:"payment-icon",previewSize:!0,name:"visa",size:"large"}),"\n",m.a.createElement(f,{type:"payment-icon",previewSize:!0,name:"visa",size:"huge"}))),m.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},m.a.createElement(f,{type:"payment-icon",name:"visa",size:"small"}),"\n",m.a.createElement(f,{type:"payment-icon",name:"visa",size:"medium"}),"\n",m.a.createElement(f,{type:"payment-icon",name:"visa",size:"large"}),"\n",m.a.createElement(f,{type:"payment-icon",name:"visa",size:"huge"}),"\n"),m.a.createElement("h3",null,"Usage"),m.a.createElement("p",null,"Typical usage would be in for instance an ",m.a.createElement(c.Property,{value:".item-list"}),"."),m.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},m.a.createElement("ul",{className:"item-list item-list-striped"},m.a.createElement("li",null,m.a.createElement("div",{className:"d-flex align-items-center"},"\n",m.a.createElement(f,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",m.a.createElement("span",null,"4925*********004"),"\n"),m.a.createElement("div",{className:"action-list"},"\n",m.a.createElement(c.Icon,{icon:"more_vert"}),"\n",m.a.createElement("div",{className:"action-menu"},"\n",m.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},m.a.createElement(c.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",m.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},m.a.createElement(c.Icon,{icon:"business_center"}),"Add client"),"\n",m.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},m.a.createElement(c.Icon,{icon:"add_circle"}),"Add document"),"\n",m.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},m.a.createElement(c.Icon,{icon:"person_add"}),"Add user"),"\n"))),m.a.createElement("li",null,m.a.createElement("div",{className:"d-flex align-items-center"},"\n",m.a.createElement(f,{type:"payment-icon",name:"mastercard",className:"mr-2"}),"\n",m.a.createElement("span",null,"5792*********138"),"\n",m.a.createElement("span",{className:"badge badge-blue ml-2"},"new"),"\n"),"\n",m.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),m.a.createElement("li",null,m.a.createElement("div",{className:"d-flex align-items-center"},"\n",m.a.createElement(f,{type:"payment-icon",name:"amex",className:"mr-2"}),"\n",m.a.createElement("span",null,"3651*********701"),"\n"),m.a.createElement("i",{className:"material-icons"},"star"),"\n"),m.a.createElement("li",null,m.a.createElement("div",{className:"d-flex align-items-center"},"\n",m.a.createElement(f,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",m.a.createElement("span",null,"4925*********007"),"\n"),m.a.createElement("span",{className:"status status-success"},"Active"),"\n",m.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},m.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},k=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),g(this,h(a).apply(this,arguments))}var n,t,r;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&b(e,a)}(a,l["Component"]),n=a,(t=[{key:"componentDidMount",value:function(){y.a.init()}},{key:"render",value:function(){return m.a.createElement(c.DocContainer,{docToc:!0},m.a.createElement("p",{className:"lead"},"The PayEx DesignGuide includes Google","'","s material icons. For a full overview of the available icons please visit ",m.a.createElement("a",{href:"https://material.io/tools/icons/"},"this site"),"."),m.a.createElement(w,null),m.a.createElement(N,null))}}])&&v(n.prototype,t),r&&v(n,r),a}();a.default=k}}]);
//# sourceMappingURL=doc-route.chunk_27.js.map?daf38e1bee7a784b8180