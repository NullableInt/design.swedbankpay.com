(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[54,5,46,48,49,50,52],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),a,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&a?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},421:function(e,t,n){"use strict";var a=n(1),c=n.n(a),o=n(2),r=n.n(o),l=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,r=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,r?"\n":"",r?c.a.createElement("p",null,r):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=l},422:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(421);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(421);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(2),l=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(r).a.string.isRequired},t.default=l},425:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(2),r=n.n(o),l=function(e){var t,n,a=e.component,o=e.subComponents,r=e.func,l=e.params;return o&&(n=o.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=l},426:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=n(427),i=function(e){var t=e.docToc,n=e.children,a=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(a,null),t?o.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},427:function(e,t,n){"use strict";n.r(t);var a=n(420);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var o=n(428);n.d(t,"ComponentPreview",function(){return o.default});var r=n(426);n.d(t,"DocContainer",function(){return r.default});var l=n(429);n.d(t,"DocHeading",function(){return l.default});var c=n(430);n.d(t,"DocToc",function(){return c.default});var i=n(422);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(423);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(424);n.d(t,"Icon",function(){return s.default});var m=n(425);n.d(t,"PxScript",function(){return m.default})},457:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return f}),n.d(t,"UsageWithJavascript",function(){return E});var r=n(1),l=n.n(r),c=n(184),i=n(427),u=n(68);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"example"},"Example"),l.a.createElement("p",null,"Dialog boxes consist of a header, a body and a footer. In these you can put whatever you want, but some basic functionality should be included in all dialogs. The header should contain a short descriptive text for what the dialog-box does. Remember to include a way to close the dialog box in the header in the form of a clickable icon or something similar. The dialog body should contain the main content, usually just text confirming an action. In the footer you will find buttons to confirm or cancel the requested action. To make a button open the dialog box you need to include ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-time",value:"{#your-dialog-id}"})," as an attribute to that button."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"dialog",id:"demo-dialog"},l.a.createElement("section",null,l.a.createElement("header",null,l.a.createElement("h5",null,"Delete item 456?"),"\n",l.a.createElement("a",{href:"#",className:"dialog-close"},"\n\t\t\t\t",l.a.createElement(i.Icon,{icon:"close"}),"\n\t\t\t"),"\n\t\t"),l.a.createElement("div",{className:"dialog-body"},l.a.createElement("p",null,"Are you sure you want to permanently delete the item ",l.a.createElement("i",null,"German Swashbuckle (456)?"))),l.a.createElement("footer",null,"\n",l.a.createElement("button",{className:"btn btn-secondary",type:"button","data-dialog-close":"demo-dialog"},"Cancel"),"\n",l.a.createElement("button",{className:"btn btn-danger",type:"button"},"Delete"),"\n"))),"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button","data-dialog-open":"demo-dialog"},"Open dialog")))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage-with-javascript"},"Usage with javascript"),l.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("div",{className:"dialog",id:"demo-dialog"},"\n","...","\n"),"\n"),l.a.createElement("p",null,"To open a dialog:"),l.a.createElement(i.ComponentPreview,{language:"javascript",codeFigure:!0},'px.dialog.open("demo-dialog")'),l.a.createElement("p",null,"To close a dialog:"),l.a.createElement(i.ComponentPreview,{language:"javascript",codeFigure:!0},'px.dialog.close("demo-dialog")'))},o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,d(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){u.dialog.init()}},{key:"render",value:function(){return l.a.createElement(i.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Dialog is meant to be used to show a snippet of text like a confirmation box before you delete something. Use ",l.a.createElement(c.a,{to:"/docs/components/sheet"},"sheet")," if you wish to receive input from the user or display a large chunk of information."),l.a.createElement(f,null),l.a.createElement(E,null))}}])&&s(n.prototype,a),o&&s(n,o),t}();t.default=o}}]);
//# sourceMappingURL=doc-route.chunk_7.js.map?a2ad6caa947faafc4120