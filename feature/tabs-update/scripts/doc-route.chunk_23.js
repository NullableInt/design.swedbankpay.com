(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[26,93],{389:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(14),c=n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,s(t).call(this,e))).state={active:1},n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(a=[{key:"setActive",value:function(e,t){e.preventDefault(),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.mode,r=t.items;return o.a.createElement("div",{className:"tabs".concat(n?" tabs-scroll-".concat(n):"")},"\n",o.a.createElement("ul",null,r.map(function(t,n){return o.a.createElement("li",{key:"tab-item-".concat(t,"-").concat(n),className:e.state.active===n?"active":null},"\n",o.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,n)}},t),"\n")})))}}])&&l(n.prototype,a),c&&l(n,c),t}();p.propTypes={mode:c.a.oneOf(["xs","sm","md","lg","xl","xxl"]),items:c.a.array.isRequired},t.default=p},422:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicUsage",function(){return h}),n.d(t,"TabsScroll",function(){return v}),n.d(t,"JavascriptMethods",function(){return w});var r=n(1),o=n.n(r),a=n(50),c=n(462),i=n.n(c),l=n(361),u=n(389);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=window.dg.tabs,d=["Card","Discounts","Transactions","Invoice","Settings","Audit trail"],h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"basic-usage"},"Basic usage"),o.a.createElement("p",null,"Add class ",o.a.createElement(l.Property,{value:".tabs"})," to a div containing ",o.a.createElement(i.a,{className:"language-html"},"<ul>"),"and nest ",o.a.createElement(i.a,{className:"language-html"},"<li>")," as needed. Make sure that the tabs will not overflow on screens of normal size."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(u.default,{items:d})))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"tabs-scroll"},"Tabs with scroll"),o.a.createElement("p",null,"To make tabs more mobile friendly, use classs ",o.a.createElement(l.Property,{value:".tabs-scroll-{desired_size}"}),". The available sizes can be found in our ",o.a.createElement(a.Link,{to:"/docs/core/breakpoints"},"breakpoints documentation"),".",o.a.createElement(l.Property,{value:".tabs-scroll-{desired_size}"})," will make the tabs scrollable in case of overflow."),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(u.default,{items:d,mode:"md"})))},w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),o.a.createElement(l.JavascriptDocs,{componentName:"tabs"}))},E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){y.init()}},{key:"render",value:function(){return o.a.createElement(l.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Use tabs to show which page or section that is active out of several options."),o.a.createElement(h,null),o.a.createElement(v,null),o.a.createElement(w,null))}}])&&f(n.prototype,a),c&&f(n,c),t}();t.default=E}}]);
//# sourceMappingURL=doc-route.chunk_23.js.map?abb2ebaf68b5bb1fe72e