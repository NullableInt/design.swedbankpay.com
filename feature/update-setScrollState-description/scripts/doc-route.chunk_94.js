(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[93],{81:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(1),i=n.n(a);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=l(this,s(e).call(this,t))).state={active:1},n}var n,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,r["Component"]),n=e,(a=[{key:"setActive",value:function(t,e){t.preventDefault(),this.setState({active:e})}},{key:"render",value:function(){var t=this,e=this.props,n=e.id,r=e.scroll,a=e.items,i=e.ulId;return o.a.createElement("div",{id:n,className:"tabs".concat(r?" tabs-scroll":"")},"\n",o.a.createElement("ul",{id:i},a.map(function(e,n){return o.a.createElement("li",{key:"tab-item-".concat(e,"-").concat(n),className:t.state.active===n?"active":null},"\n",o.a.createElement("a",{href:"#",onClick:function(e){return t.setActive(e,n)}},e),"\n")})))}}])&&u(n.prototype,a),i&&u(n,i),e}();p.propTypes={id:i.a.string,items:i.a.array.isRequired,scroll:i.a.bool,ulId:i.a.string},e.default=p}}]);
//# sourceMappingURL=doc-route.chunk_94.js.map?07b8b8ba20158a8fa817