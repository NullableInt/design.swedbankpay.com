(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[87],{384:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),i=n(458),s=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,p(t).call(this,e))).state={active:"main-0",activeParent:null},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(o=[{key:"setActive",value:function(e,t){e.preventDefault();var n=e.target.closest(".submenu");n?(this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),n.classList.add("submenu-active-parent"),this.setState({activeParent:n})):this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=t.vertsize,o=t.widesize,c=s()("nav",a?"nav-".concat(a,"-vertical"):"",o?"nav-".concat(o,"-vertical-wide"):"");return r.a.createElement("nav",{className:c},r.a.createElement("ul",null,n.map(function(t,n){var a=t.name,o=t.icon,c=t.subItems;return r.a.createElement("li",{key:"nav-item-".concat(a,"-").concat(n)},"\n",c?r.a.createElement("div",{className:"submenu"},"\n",r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"sub-".concat(n,"-0"))}},r.a.createElement("i",{className:"material-icons"},o),"\n",r.a.createElement("span",null,a),"\n"),r.a.createElement("ul",null,c.map(function(t,a){return r.a.createElement("li",{key:"nav-subItems-".concat(t,"-").concat(a),className:e.state.active==="sub-".concat(n,"-").concat(a)?"active":null},r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"sub-".concat(n,"-").concat(a))}},r.a.createElement("span",null,t)))}))):r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"main-".concat(n))},className:e.state.active==="main-".concat(n)?"active":null},"\n",r.a.createElement("i",{className:"material-icons"},o),"\n",r.a.createElement("span",null,a),"\n"),"\n")})))}}])&&l(n.prototype,o),c&&l(n,c),t}(),y=["xs","sm","md","lg","xl","xxl"];v.propTypes={items:c.a.array.isRequired,vertsize:c.a.oneOf(y),widesize:c.a.oneOf(y)},t.default=v},457:function(e,t){(function(t){e.exports=t}).call(this,{})},458:function(e,t,n){var a;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var o={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=r(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=c.apply(null,n);i&&e.push(i)}else if("object"===a)for(var s in n)o.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):"object"===r(n(457))&&n(457)?void 0===(a=function(){return c}.apply(t,[]))||(e.exports=a):window.classNames=c}()}}]);
//# sourceMappingURL=doc-route.chunk_89.js.map?0bd5dd6d4efe2aebedd2