(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[27,50,51,52,53,54,55],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return o});var a=n(0),r=n.n(a),l=n(1),c=n.n(l),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=u},148:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(l).a.string.isRequired},t.default=c},152:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},156:function(e,t,n){"use strict";n.r(t);var a=n(147);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(154);n.d(t,"ComponentPreview",function(){return r.default});var l=n(153);n.d(t,"DocHeading",function(){return l.default});var c=n(155);n.d(t,"DocToc",function(){return c.default});var o=n(149);n.d(t,"DeprecatedComponentAlert",function(){return o.default});var u=n(150);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(151);n.d(t,"Icon",function(){return s.default});var i=n(152);n.d(t,"PxScript",function(){return i.default})},182:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return r}),n.d(t,"UsageWithJavascript",function(){return d}),n.d(t,"SheetText",function(){return f});var l=n(0),c=n.n(l),o=n(156),u=n(18);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var r=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"example"},"Example"),c.a.createElement("p",null,"Example sheet..."),c.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"sheet",id:"demo-sheet"},c.a.createElement("section",null,"\n",c.a.createElement("a",{href:"#",className:"sheet-close"},"\n\t\t\t",c.a.createElement(o.Icon,{icon:"close"}),"\n\t\t"),c.a.createElement("h2",null,"Sheet component"),c.a.createElement("p",null,"This is the sheet component. It can contain anything you want."),c.a.createElement("p",null,"It can also contain lots of useless text, just like the text in this paragraph. Or it can contain useful info and cheats. For example if you have a math quiz coming up;"),c.a.createElement("ul",{className:"list"},c.a.createElement("li",null,c.a.createElement("code",null,"3 + 8 = 11")),c.a.createElement("li",null,c.a.createElement("code",null,"36 - 22 = 14")),c.a.createElement("li",null,c.a.createElement("code",null,"256 + 113 = 369")),c.a.createElement("li",null,c.a.createElement("code",null,"356 - 1 = 355"))),c.a.createElement("hr",null),c.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"full-name"},"Full name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"full-name",placeholder:"Enter your full name"})),c.a.createElement("div",{className:"help-block"},"Your full name")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email-address"},"Email"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"email-address",placeholder:"Enter your email"})),c.a.createElement("div",{className:"help-block"},"Email means electronic mail, not express mail")),c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"checkbox"},c.a.createElement("input",{type:"checkbox",id:"subscribe-checkbox"}),c.a.createElement("label",{htmlFor:"subscribe-checkbox"},"Sign up to our math newsletter"))),c.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:function(e){return e.preventDefault()}},"Submit")))),"\n",c.a.createElement("button",{className:"btn btn-primary",type:"button","data-sheet-open":"demo-sheet"},"Open sheet")))},d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"usage-with-javascript"},"Usage with javascript"),c.a.createElement("p",null,"To programmatically open a sheet, use ",c.a.createElement(o.Property,{value:'px.sheet.open("SHEET_ID")'}),"."),c.a.createElement("p",null,"To programmatically close a sheet, use ",c.a.createElement(o.Property,{value:'px.sheet.close("SHEET_ID")'}),"."))},f=function(){return c.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},c.a.createElement("p",{className:"lead"},"Sheet..."),c.a.createElement(r,null),c.a.createElement(d,null))},E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,m(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){u.sheet.init()}},{key:"render",value:function(){return c.a.createElement("div",{className:"doc-container"},c.a.createElement("div",{className:"row"},c.a.createElement(f,null),c.a.createElement(o.DocToc,{component:f})))}}])&&s(n.prototype,a),r&&s(n,r),t}();t.default=E}}]);
//# sourceMappingURL=doc-route.chunk_15.js.map?30d2b6aed792e0d6766a