(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[26,93],{389:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(14),i=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,s(t).call(this,e))).state={active:1},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(a=[{key:"setActive",value:function(e,t){e.preventDefault(),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.mode,o=t.items;return r.a.createElement("div",{className:"tabs".concat(n?" tabs-horizontal-".concat(n):"")},"\n",r.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"),r.a.createElement("ul",null,o.map(function(t,n){return r.a.createElement("li",{key:"tab-item-".concat(t,"-").concat(n),className:e.state.active===n?"active":null},"\n",r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,n)}},t),"\n")})))}}])&&l(n.prototype,a),i&&l(n,i),t}();p.propTypes={mode:i.a.oneOf(["xs","sm","md","lg","xl","xxl"]),items:i.a.array.isRequired},t.default=p},422:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicUsage",function(){return h}),n.d(t,"Collapsed",function(){return v}),n.d(t,"JavascriptMethods",function(){return w});var o=n(1),r=n.n(o),a=n(50),i=n(462),c=n.n(i),l=n(361),u=n(389);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=window.dg.tabs,d=["Card","Discounts","Transactions","Invoice","Settings","Audit trail"],h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"basic-usage"},"Basic usage"),r.a.createElement("p",null,"Add class ",r.a.createElement(l.Property,{value:".tabs"})," with a ",r.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," to a div containing an arrow icon along with ",r.a.createElement(c.a,{className:"language-html"},"<ul>")," and nest ",r.a.createElement(c.a,{className:"language-html"},"<li>")," as needed. The ",r.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," class determines when your tabs will switch from horizontal to collapsed. The available sizes can be found in our ",r.a.createElement(a.Link,{to:"/docs/core/breakpoints"},"breakpoints documentation"),"."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u.default,{mode:"sm",items:d})))},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"collapsed"},"Collapsed"),r.a.createElement("p",null,"If no ",r.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," is provided then the tabs will always be in collapsed mode."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u.default,{items:d})))},w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),r.a.createElement(l.JavascriptDocs,{componentName:"tabs",open:!0,close:!0}))},E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){y.init()}},{key:"render",value:function(){return r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use tabs to show which page or section that is active out of several options."),r.a.createElement(h,null),r.a.createElement(v,null),r.a.createElement(w,null))}}])&&f(n.prototype,a),i&&f(n,i),t}();t.default=E}}]);
//# sourceMappingURL=doc-route.chunk_23.js.map?e15388cafd92e557835e