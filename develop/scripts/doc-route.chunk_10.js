(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[10,45,47,48,49,50,52],{422:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(2),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},423:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(423);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(423);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},426:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},427:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},431:function(e,t,n){"use strict";n.r(t);var a=n(422);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(428);n.d(t,"ComponentPreview",function(){return r.default});var l=n(429);n.d(t,"DocHeading",function(){return l.default});var o=n(430);n.d(t,"DocToc",function(){return o.default});var c=n(424);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(425);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=n(426);n.d(t,"Icon",function(){return i.default});var s=n(427);n.d(t,"PxScript",function(){return s.default})},461:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicUsage",function(){return d}),n.d(t,"Sizes",function(){return f}),n.d(t,"MutedLoader",function(){return E}),n.d(t,"StaticHtml",function(){return v}),n.d(t,"LoadersText",function(){return y});var l=n(1),o=n.n(l),c=n(431),a=n(223),u=n(68);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"basic-usage"},"Basic usage"),o.a.createElement("p",null,"Basic usage..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(a.a,{size:"default",visible:!0})))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"sizes"},"Sizes"),o.a.createElement("p",null,"In addition to ",o.a.createElement(c.Property,{value:".loader-default"})," you can use ",o.a.createElement(c.Property,{value:".loader-small"})," and ",o.a.createElement(c.Property,{value:".loader-large"})," to decrease or increase the size of the loader."),o.a.createElement("h3",null,"Small"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(a.a,{size:"small",visible:!0})),o.a.createElement("h3",null,"Large"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(a.a,{size:"large",visible:!0})))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"muted-loader"},"Muted loader"),o.a.createElement("p",null,"Use class ",o.a.createElement(c.Property,{value:".loader-muted"})," to mute the loader..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(a.a,{id:"test",size:"default",visible:!0,muted:!0})))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"static-html"},"Static HTML"),o.a.createElement("p",null,"Using the attribute ",o.a.createElement(c.Attribute,{data:!0,name:"loader"})," will append the following HTML to the element:"),o.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement("ul",{className:"loader-icon"},o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null))),o.a.createElement("p",null,"If you want to use the static HTML instead of the data-attribute, make sure to ",o.a.createElement("b",null,"NOT")," include the attribute ",o.a.createElement(c.Attribute,{data:!0,name:"loader"}),"."))},y=function(){return o.a.createElement("div",{className:"col-lg-10 doc-body"},o.a.createElement("p",{className:"lead"},"Use loaders..."),o.a.createElement(d,null),o.a.createElement(f,null),o.a.createElement(E,null),o.a.createElement(v,null))},g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,m(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){u.loader.init()}},{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(y,null),o.a.createElement(c.DocToc,{component:y})))}}])&&i(n.prototype,a),r&&i(n,r),t}();t.default=g}}]);
//# sourceMappingURL=doc-route.chunk_10.js.map?e80962422d519820b115