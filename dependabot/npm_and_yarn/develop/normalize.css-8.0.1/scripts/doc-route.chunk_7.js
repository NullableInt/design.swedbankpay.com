(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[53,44,46,47,48,49,51],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(2),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},422:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},426:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},430:function(e,t,n){"use strict";n.r(t);var a=n(421);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(427);n.d(t,"ComponentPreview",function(){return r.default});var l=n(428);n.d(t,"DocHeading",function(){return l.default});var o=n(429);n.d(t,"DocToc",function(){return o.default});var c=n(423);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(424);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=n(425);n.d(t,"Icon",function(){return i.default});var s=n(426);n.d(t,"PxScript",function(){return s.default})},457:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return r}),n.d(t,"UsageWithJavascript",function(){return d}),n.d(t,"DialogText",function(){return f});var l=n(1),o=n.n(l),c=n(430),u=n(67);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var r=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"example"},"Example"),o.a.createElement("p",null,"Example dialog..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"dialog",id:"demo-dialog"},o.a.createElement("section",null,o.a.createElement("header",null,o.a.createElement("h5",null,"Delete item 456?"),"\n",o.a.createElement("a",{href:"#",className:"dialog-close"},"\n\t\t\t\t",o.a.createElement(c.Icon,{icon:"close"}),"\n\t\t\t"),"\n\t\t"),o.a.createElement("div",{className:"dialog-body"},o.a.createElement("p",null,"Are you sure you want to permanently delete the item ",o.a.createElement("i",null,"German Swashbuckle (456)?"))),o.a.createElement("footer",null,"\n",o.a.createElement("button",{className:"btn btn-secondary",type:"button","data-dialog-close":"demo-dialog"},"Cancel"),"\n",o.a.createElement("button",{className:"btn btn-danger",type:"button"},"Delete"),"\n"))),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button","data-dialog-open":"demo-dialog"},"Open dialog")))},d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-javascript"},"Usage with javascript"),o.a.createElement("p",null,"To programmatically open a dialog, use ",o.a.createElement(c.Property,{value:'px.dialog.open("DIALOG_ID")'}),"."),o.a.createElement("p",null,"To programmatically close a dialog, use ",o.a.createElement(c.Property,{value:'px.dialog.close("DIALOG_ID")'}),"."))},f=function(){return o.a.createElement("div",{className:"col-lg-10 doc-body"},o.a.createElement("p",{className:"lead"},"Dialogs..."),o.a.createElement(r,null),o.a.createElement(d,null))},E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,m(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){u.dialog.init()}},{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(f,null),o.a.createElement(c.DocToc,{component:f})))}}])&&i(n.prototype,a),r&&i(n,r),t}();t.default=E}}]);
//# sourceMappingURL=doc-route.chunk_7.js.map?0e7f5c700df8b49f851d