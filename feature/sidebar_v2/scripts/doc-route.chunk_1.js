(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[13,51,52,53,54,55,56],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return o});var a=n(0),r=n.n(a),l=n(1),c=n.n(l),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=s},148:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(l).a.string.isRequired},t.default=c},152:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},156:function(e,t,n){"use strict";n.r(t);var a=n(147);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(154);n.d(t,"ComponentPreview",function(){return r.default});var l=n(153);n.d(t,"DocHeading",function(){return l.default});var c=n(155);n.d(t,"DocToc",function(){return c.default});var o=n(149);n.d(t,"DeprecatedComponentAlert",function(){return o.default});var s=n(150);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var i=n(151);n.d(t,"Icon",function(){return i.default});var u=n(152);n.d(t,"PxScript",function(){return u.default})},174:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicUsage",function(){return h}),n.d(t,"AlertWithIcon",function(){return y}),n.d(t,"ClosingTheAlert",function(){return g}),n.d(t,"ExtendedUsage",function(){return b}),n.d(t,"AlertsText",function(){return v});var l=n(0),c=n.n(l),a=n(38),r=n(157),o=n.n(r),s=n(156),i=n(148),u=n(18);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"basic-usage"},"Basic usage"),c.a.createElement("p",null,"The default behavior of the alert present itself in a box with a border."),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(i.a,{type:"default",text:"This is a default alert!"}),"\n\n",c.a.createElement(i.a,{type:"success",text:"This is a success alert!"}),"\n\n",c.a.createElement(i.a,{type:"neutral",text:"This is a neutral alert!"}),"\n\n",c.a.createElement(i.a,{type:"warning",text:"This is a warning alert!"}),"\n\n",c.a.createElement(i.a,{type:"danger",text:"This is a danger alert!"})))},y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"icons"},"Icons"),c.a.createElement("p",null,"To use an alert with an icon... Read more about icon usage here ",c.a.createElement(a.a,{to:"/docs/core/icons"},"here"),"."),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(i.a,{type:"default",text:"This is a default alert with an icon!",icon:"info_outline"}),"\n\n",c.a.createElement(i.a,{type:"success",text:"This is a success alert with an icon!",icon:"check_circle"}),"\n\n",c.a.createElement(i.a,{type:"neutral",text:"This is a neutral alert with an icon!",icon:"info"}),"\n\n",c.a.createElement(i.a,{type:"warning",text:"This is a warning alert with an icon!",icon:"warning"}),"\n\n",c.a.createElement(i.a,{type:"danger",text:"This is a danger alert with an icon!",icon:"error"})))},g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"closing-the-alert"},"Closing the alert"),c.a.createElement("p",null,"To add a close-button, add the following code inside your alert-element:",c.a.createElement("br",null),c.a.createElement(o.a,{className:"language-html"},'<a href="#" data-alert-close><i class="material-icons">close</i></a>')),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(i.a,{type:"default",text:"This is a default alert with an icon!",close:!0,icon:"info_outline"}),"\n\n",c.a.createElement(i.a,{type:"success",text:"This is a success alert with an icon!",close:!0,icon:"check_circle"}),"\n\n",c.a.createElement(i.a,{type:"neutral",text:"This is a neutral alert with an icon!",close:!0,icon:"info"}),"\n\n",c.a.createElement(i.a,{type:"warning",text:"This is a warning alert with an icon!",close:!0,icon:"warning"}),"\n\n",c.a.createElement(i.a,{type:"danger",text:"This is a danger alert with an icon!",close:!0,icon:"error"})),c.a.createElement("h3",null,"External close button"),c.a.createElement("p",null,"To add an external close-button for your alert add the attribute ",c.a.createElement(s.Attribute,{data:!0,name:"alert-close",value:"[alert ID]"})," to the button element."),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(i.a,{id:"alert-success-1",type:"success",text:"Press the button below to close me",icon:"check_circle"}),"\n\n",c.a.createElement("button",{type:"button",className:"btn btn-primary","data-alert-close":"alert-success-1"},"Close alert")))},b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"extended-usage"},"Extended usage"),c.a.createElement("p",null,"Alerts can also contain additional HTML elements like headings, paragraphs and dividers."),c.a.createElement("p",null,"Just make sure to wrap the content in a container with the class ",c.a.createElement("span",{className:"token attr-value"},".alert-body"),"."),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(i.a,{type:"success",close:!0,icon:"check_circle"},c.a.createElement("h3",{className:"color-success"},"Success!"),c.a.createElement("p",null,"PDF was successfully uploaded. ",c.a.createElement("br",null)," Some additional information."),c.a.createElement("hr",null),c.a.createElement("p",null,"By the way, great job!"))))},v=function(){return c.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},c.a.createElement("p",{className:"lead"},"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),c.a.createElement(h,null),c.a.createElement(y,null),c.a.createElement(g,null),c.a.createElement(b,null))},w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,f(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,l["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){u.alert.init()}},{key:"render",value:function(){return c.a.createElement("div",{className:"doc-container"},c.a.createElement("div",{className:"row"},c.a.createElement(v,null),c.a.createElement(s.DocToc,{component:v})))}}])&&p(n.prototype,a),r&&p(n,r),t}();t.default=w}}]);
//# sourceMappingURL=doc-route.chunk_1.js.map?8fd409c85c266c823601