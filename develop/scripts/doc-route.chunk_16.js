(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[16,44,46,47,48,49,51],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return s});var n=a(1),r=a.n(n),l=a(2),c=a.n(l),s=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},s.propTypes={value:c.a.string.isRequired},t.default=u},422:function(e,t,a){"use strict";var n=a(1),s=a.n(n),r=a(2),l=a.n(r),c=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return s.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?s.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?s.a.createElement("p",null,l):null,c?"\n":"",c?s.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?s.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",s.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},423:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(l).a.string.isRequired},t.default=c},426:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(2),l=a.n(r),c=function(e){var t,a,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(a=r.map(function(e,t){return s.a.createElement("span",{key:t},e,s.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return s.a.createElement("span",{key:t},e,t<c.length-1?s.a.createElement("span",{className:"token punctuation"},", "):null)})),s.a.createElement("code",null,s.a.createElement("span",null,"px"),s.a.createElement("span",{className:"token punctuation"},"."),s.a.createElement("span",null,n),s.a.createElement("span",{className:"token punctuation"},"."),a,s.a.createElement("span",{className:"token function"},l),s.a.createElement("span",{className:"token punctuation"},"("),t,s.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(427);a.d(t,"ComponentPreview",function(){return r.default});var l=a(428);a.d(t,"DocHeading",function(){return l.default});var c=a(429);a.d(t,"DocToc",function(){return c.default});var s=a(423);a.d(t,"DeprecatedComponentAlert",function(){return s.default});var u=a(424);a.d(t,"ExperimentalComponentAlert",function(){return u.default});var o=a(425);a.d(t,"Icon",function(){return o.default});var i=a(426);a.d(t,"PxScript",function(){return i.default})},461:function(e,t,a){"use strict";a.r(t),a.d(t,"Overview",function(){return r}),a.d(t,"ExtendedUsage",function(){return p}),a.d(t,"StatusText",function(){return d});var l=a(1),c=a.n(l),s=a(430);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var r=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"overview"},"Overview"),c.a.createElement("p",null,"Overview... ",c.a.createElement(s.Property,{value:".status"}),"..."),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeList:!0},c.a.createElement("ul",{className:"list"},c.a.createElement("li",null,c.a.createElement("span",{className:"status status-default"},"Default")),c.a.createElement("li",null,c.a.createElement("span",{className:"status status-neutral"},"Neutral")),c.a.createElement("li",null,c.a.createElement("span",{className:"status status-success"},"Success")),c.a.createElement("li",null,c.a.createElement("span",{className:"status status-warning"},"Warning")),c.a.createElement("li",null,c.a.createElement("span",{className:"status status-danger"},"Danger")))))},p=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"extended-usage"},"Extended usage"),c.a.createElement("p",null,"Extended usage... ",c.a.createElement(s.Property,{value:".status"}),"..."),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("h1",{className:"status status-default"},"Default"),c.a.createElement("h2",{className:"status status-neutral"},"Neutral"),c.a.createElement("h3",{className:"status status-success"},"Success"),c.a.createElement("h4",{className:"status status-warning"},"Warning"),c.a.createElement("h5",{className:"status status-danger"},"Danger")))},d=function(){return c.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},c.a.createElement("p",{className:"lead"},"Status..."),c.a.createElement(r,null),c.a.createElement(p,null))},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,i(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,l["Component"]),a=t,(n=[{key:"render",value:function(){return c.a.createElement("div",{className:"doc-container"},c.a.createElement("div",{className:"row"},c.a.createElement(d,null),c.a.createElement(s.DocToc,{component:d})))}}])&&u(a.prototype,n),r&&u(a,r),t}();t.default=f}}]);
//# sourceMappingURL=doc-route.chunk_16.js.map?8e1d0fce540c4b8419bc