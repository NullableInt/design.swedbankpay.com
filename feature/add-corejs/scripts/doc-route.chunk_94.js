(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[93],{81:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(1),c=n.n(a);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=l(this,s(e).call(this,t))).state={active:1},n}var n,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,o["Component"]),n=e,(a=[{key:"setActive",value:function(t,e){t.preventDefault(),this.setState({active:e})}},{key:"render",value:function(){var t=this,e=this.props,n=e.scroll,o=e.items;return r.a.createElement("div",{className:"tabs".concat(n?" tabs-scroll":"")},"\n",r.a.createElement("ul",null,o.map(function(e,n){return r.a.createElement("li",{key:"tab-item-".concat(e,"-").concat(n),className:t.state.active===n?"active":null},"\n",r.a.createElement("a",{href:"#",onClick:function(e){return t.setActive(e,n)}},e),"\n")})))}}])&&u(n.prototype,a),c&&u(n,c),e}();p.propTypes={items:c.a.array.isRequired,scroll:c.a.bool},e.default=p}}]);
//# sourceMappingURL=doc-route.chunk_94.js.map?9478c80c3696f81d866a