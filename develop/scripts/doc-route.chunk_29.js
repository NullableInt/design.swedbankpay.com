(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[30,3,45,46,47,48,49,50,52],{421:function(e,n,a){"use strict";a.r(n),a.d(n,"Property",function(){return o});var t=a(1),r=a.n(t),l=a(2),c=a.n(l),o=function(e){var n=e.value;return r.a.createElement("code",{className:"token property"},n)},i=function(e){var n=e.data,a=e.name,t=e.value;return a&&t?r.a.createElement("code",null,n?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),t,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!t?r.a.createElement("code",null,n?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&t?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},t)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},n.default=i},422:function(e,n,a){"use strict";var t=a(1),o=a.n(t),r=a(2),l=a.n(r),c=function(e){var n=e.id,a=e.type,t=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:n,className:"alert alert-".concat(a)},t?"\n":"",t?o.a.createElement("i",{className:"material-icons alert-icon"},t):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},n.a=c},423:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),l=a(422);n.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),l=a(422);n.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),l=a(2),c=function(e){var n=e.icon;return r.a.createElement("i",{className:"material-icons"},n)};c.propTypes={icon:a.n(l).a.string.isRequired},n.default=c},426:function(e,n,a){"use strict";a.r(n);var t=a(1),o=a.n(t),r=a(2),l=a.n(r),c=function(e){var n,a,t=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(a=r.map(function(e,n){return o.a.createElement("span",{key:n},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(n=c.map(function(e,n){return o.a.createElement("span",{key:n},e,n<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,t),o.a.createElement("span",{className:"token punctuation"},"."),a,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),n,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},n.default=c},427:function(e,n,a){"use strict";a.r(n);var t=a(1),u=a.n(t),r=a(2),l=a.n(r),p=a(431),c=a(432),f=a.n(c),d=a(433);function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){var t=e.children,r=e.language,l=e.removeOuterTag,c=e.hideValue,o=e.removeList,n=e.showCasePanel,a=e.codeFigure,i=e.dangerousHTML,s=function(e){var n=document.createElement("div");return n.innerHTML=Object(p.renderToStaticMarkup)(e),n.firstElementChild?n.firstElementChild.innerHTML:n.firstChild?n.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},m=function(e){var n=document.createElement("div");n.innerHTML=Object(p.renderToStaticMarkup)(e);var a=n.querySelectorAll("li"),t="";return a.forEach(function(e){t+="".concat(e.innerHTML," \n")}),t};return u.a.createElement(u.a.Fragment,null,n?u.a.createElement(function(){return u.a.createElement("div",{className:"showcase-panel"},t)},null):null,a?u.a.createElement(function(){var e,n,a="";if("html"===r&&i)n="","function"==typeof(e=t).forEach?e.forEach(function(e){return n+="".concat(e,"\n")}):n=e,a=n;else if("html"===r&&t&&"function"==typeof t.map)t.map(function(e){a+=l?s(e):o?m(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)a+=l?s(t):o?m(t):Object(p.renderToStaticMarkup)(t);else switch(v(t)){case"string":a=t;break;case"object":t.forEach(function(e){return a+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":a=(a=f.a.html_beautify(a)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(a=a.replace(/ value="(.*)"/g,""));break;case"css":a=f.a.css(a);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",u.a.createElement("figure",null,u.a.createElement(d.a,E({},d.b,{theme:void 0,code:a,language:r}),function(e){var n=e.className,a=e.style,t=e.tokens,r=e.getLineProps,l=e.getTokenProps;return u.a.createElement("pre",{className:n,style:a},t.map(function(e,n){return u.a.createElement("div",E({key:e+n},r({line:e,key:n})),e.map(function(e,n){return u.a.createElement("span",E({key:n},l({token:e,key:n})))}))}))}))},null):null)};o.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},n.default=o},430:function(e,n,a){"use strict";a.r(n);var t=a(421);a.d(n,"Attribute",function(){return t.default}),a.d(n,"Property",function(){return t.Property});var r=a(427);a.d(n,"ComponentPreview",function(){return r.default});var l=a(428);a.d(n,"DocHeading",function(){return l.default});var c=a(429);a.d(n,"DocToc",function(){return c.default});var o=a(423);a.d(n,"DeprecatedComponentAlert",function(){return o.default});var i=a(424);a.d(n,"ExperimentalComponentAlert",function(){return i.default});var s=a(425);a.d(n,"Icon",function(){return s.default});var m=a(426);a.d(n,"PxScript",function(){return m.default})},486:function(e,n,a){"use strict";a.r(n);var l=a(1),o=a.n(l),t=a(434),r=a.n(t),c=a(430),i=a(2),s=a.n(i),m=a(186),u=a.n(m);function p(e){return function(e){if(Array.isArray(e)){for(var n=0,a=new Array(e.length);n<e.length;n++)a[n]=e[n];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(e){var n=e.name,a=e.preview,t=e.size,r=e.className,l=r?r.split(" "):[],c=u.a.apply(void 0,["payment-icon",n,t].concat(p(l)));return a?o.a.createElement("div",{className:"icon-preview"},o.a.createElement("i",{className:c}),o.a.createElement("span",null,n)):o.a.createElement("i",{className:c})};f.propTypes={name:s.a.oneOf(["amex","diners","mastercard","mobilepay","paypal","swish","vipps","visa"]).isRequired,preview:s.a.bool,size:s.a.oneOf(["small","medium","large","huge"]),className:s.a.string};var d=f,E=a(42);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function g(e,n){return!n||"object"!==v(n)&&"function"!=typeof n?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):n}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}a.d(n,"Overview",function(){return w}),a.d(n,"Sizes",function(){return N}),a.d(n,"Usage",function(){return k}),a.d(n,"PaymentIconsText",function(){return T});var w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement("p",null,"To use an icon, provide the following markup: ",o.a.createElement(r.a,{className:"language-html"},'<i class="payment-icon {icon_name}"></i>'),"."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("div",{className:"row justify-content-evenly mb-2"},o.a.createElement(d,{preview:!0,name:"amex"}),"\n",o.a.createElement(d,{preview:!0,name:"diners"}),"\n",o.a.createElement(d,{preview:!0,name:"mastercard"}),"\n",o.a.createElement(d,{preview:!0,name:"visa"})),o.a.createElement("div",{className:"row justify-content-evenly"},o.a.createElement(d,{preview:!0,name:"mobilepay"}),"\n",o.a.createElement(d,{preview:!0,name:"paypal"}),"\n",o.a.createElement(d,{preview:!0,name:"swish"}),"\n",o.a.createElement(d,{preview:!0,name:"vipps"}),"\n")),o.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement(d,{name:"amex"}),"\n",o.a.createElement(d,{name:"diners"}),"\n",o.a.createElement(d,{name:"mastercard"}),"\n",o.a.createElement(d,{name:"visa"}),"\n",o.a.createElement(d,{name:"mobilepay"}),"\n",o.a.createElement(d,{name:"paypal"}),"\n",o.a.createElement(d,{name:"swish"}),"\n",o.a.createElement(d,{name:"vipps"})))},N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"sizes"},"Sizes"),o.a.createElement("p",null,"Sizes... ",o.a.createElement(c.Property,{value:".small"}),", ",o.a.createElement(c.Property,{value:".medium"}),", ",o.a.createElement(c.Property,{value:".large"})," and ",o.a.createElement(c.Property,{value:".huge"}),". If no size is provided ",o.a.createElement(c.Property,{value:".medium"})," is defaulted."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"row justify-content-evenly align-items-center"},o.a.createElement(d,{name:"visa",size:"small"}),"\n",o.a.createElement(d,{name:"visa",size:"medium"}),"\n",o.a.createElement(d,{name:"visa",size:"large"}),"\n",o.a.createElement(d,{name:"visa",size:"huge"}))))},k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage"},"Usage"),o.a.createElement("p",null,"Typical usage would be in for instance an ",o.a.createElement(c.Property,{value:".item-list"}),"."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("ul",{className:"item-list item-list-striped"},o.a.createElement("li",null,o.a.createElement("div",{className:"d-flex align-items-center"},"\n",o.a.createElement(d,{name:"visa",className:"mr-2"}),"\n",o.a.createElement("span",null,"4925*********004"),"\n"),o.a.createElement("div",{className:"action-list"},"\n",o.a.createElement(c.Icon,{icon:"more_vert"}),"\n",o.a.createElement("div",{className:"action-menu"},"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(c.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(c.Icon,{icon:"business_center"}),"Add client"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(c.Icon,{icon:"add_circle"}),"Add document"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(c.Icon,{icon:"person_add"}),"Add user"),"\n"))),o.a.createElement("li",null,o.a.createElement("div",{className:"d-flex align-items-center"},"\n",o.a.createElement(d,{name:"mastercard",className:"mr-2"}),"\n",o.a.createElement("span",null,"5792*********138"),"\n",o.a.createElement("span",{className:"badge badge-blue ml-2"},"new"),"\n"),"\n",o.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),o.a.createElement("li",null,o.a.createElement("div",{className:"d-flex align-items-center"},"\n",o.a.createElement(d,{name:"amex",className:"mr-2"}),"\n",o.a.createElement("span",null,"3651*********701"),"\n"),o.a.createElement("i",{className:"material-icons"},"star"),"\n"),o.a.createElement("li",null,o.a.createElement("div",{className:"d-flex align-items-center"},"\n",o.a.createElement(d,{name:"visa",className:"mr-2"}),"\n",o.a.createElement("span",null,"4925*********007"),"\n"),o.a.createElement("span",{className:"status status-success"},"Active"),"\n",o.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},o.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},T=function(){return o.a.createElement("div",{className:"col-lg-10 doc-body"},o.a.createElement("p",{className:"lead"},"Payment icons..."),o.a.createElement(w,null),o.a.createElement(N,null),o.a.createElement(k,null))},P=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),g(this,b(n).apply(this,arguments))}var a,t,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,l["Component"]),a=n,(t=[{key:"componentDidMount",value:function(){E.a.init()}},{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(T,null),o.a.createElement(c.DocToc,{component:T})))}}])&&y(a.prototype,t),r&&y(a,r),n}();n.default=P}}]);
//# sourceMappingURL=doc-route.chunk_29.js.map?92d408c80bf0819a502d