(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[19,50,51,52,53,54,55],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(0),r=n.n(a),o=n(1),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=u},145:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(1),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(145);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(145);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},149:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(1),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},153:function(e,t,n){"use strict";n.r(t);var a=n(144);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(151);n.d(t,"ComponentPreview",function(){return r.default});var o=n(150);n.d(t,"DocHeading",function(){return o.default});var l=n(152);n.d(t,"DocToc",function(){return l.default});var c=n(146);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(147);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=n(148);n.d(t,"Icon",function(){return i.default});var s=n(149);n.d(t,"PxScript",function(){return s.default})},177:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return r}),n.d(t,"DialogText",function(){return d});var o=n(0),l=n.n(o),c=n(153),u=n(58);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var r=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"example"},"Example"),l.a.createElement("p",null,"Example dialog..."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"dialog",id:"demo-dialog"},l.a.createElement("section",null,l.a.createElement("header",null,l.a.createElement("h5",null,"Delete item 456?"),"\n",l.a.createElement("a",{href:"#",className:"dialog-close"},"\n\t\t\t\t",l.a.createElement(c.Icon,{icon:"close"}),"\n\t\t\t"),"\n\t\t"),l.a.createElement("div",{className:"dialog-body"},l.a.createElement("p",null,"Are you sure you want to permanently delete the item ",l.a.createElement("i",null,"German Swashbuckle (456)?"))),l.a.createElement("footer",null,"\n",l.a.createElement("button",{className:"btn btn-secondary",type:"button","data-dialog-close":"demo-dialog"},"Cancel"),"\n",l.a.createElement("button",{className:"btn btn-danger",type:"button"},"Delete"),"\n"))),"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button","data-dialog-open":"demo-dialog"},"Open dialog")))},d=function(){return l.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"Dialogs..."),l.a.createElement(r,null))},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,m(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){u.dialog.init()}},{key:"render",value:function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(d,null),l.a.createElement(c.DocToc,{component:d})))}}])&&i(n.prototype,a),r&&i(n,r),t}();t.default=f}}]);
//# sourceMappingURL=doc-route.chunk_7.js.map?5ac20c4e0c4039b13350