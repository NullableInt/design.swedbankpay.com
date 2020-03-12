(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[71,19],{389:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(17),i=r.n(o);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c(t).apply(this,arguments))}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["Component"]),r=t,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.id,r=e.options,n=e.colorPool;dg.chart(t,r,n)}},{key:"render",value:function(){return a.a.createElement("canvas",{id:this.props.id})}}])&&l(r.prototype,o),i&&l(r,i),t}();f.propTypes={id:i.a.string.isRequired,options:i.a.object.isRequired,colorPool:i.a.arrayOf(i.a.string)},t.default=f},396:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(17),i=r.n(o),s=r(389);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(e){var t=e.customerIdName,r=e.customerOrders,n=e.customerInquiries,o=e.createNumArray,i=r.length,u=n.reduce(function(e,t){return e+t.numMessages},0);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Orders"),a.a.createElement("h4",null,"Historical purchase prices"),a.a.createElement(s.default,{id:"customers-detailed-charts-1",options:{type:"bar",data:{labels:l(Array(i).keys()).map(function(e){return(2019-(i-1)+e).toString()}),datasets:[{label:t,data:r,fill:!1},{label:"Customers average",data:o(i,1e3,200),fill:!1},{label:"Estimated",data:o(i,850,200),fill:!1}]},options:{scales:{yAxes:[{scaleLabel:{display:!0,labelString:"British Pound (£)"}}]}}}}),a.a.createElement("h3",null,"Inquiries"),a.a.createElement("h4",null,"Number of inquiry messages"),a.a.createElement(s.default,{id:"customers-detailed-charts-2",options:{type:"line",data:{labels:n.map(function(e){return e.date}),datasets:[{label:t,data:n.map(function(e){return e.numMessages}),fill:!1},{label:"Customers average",data:o(n.length,3,4),fill:!1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}}),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-6"},a.a.createElement("h4",null,"Status distribution"),a.a.createElement(s.default,{id:"customers-detailed-charts-3",options:{type:"pie",data:{labels:["Resolved","Unresolved","Unknown"],datasets:[{data:[n.filter(function(e){return e.resolved}).length,n.filter(function(e){return!e.resolved}).length,1]}]}}})),a.a.createElement("div",{className:"col-lg-6"},a.a.createElement("h4",null,"Time before response"),a.a.createElement(s.default,{id:"customers-detailed-charts-4",options:{type:"pie",data:{labels:["< 2 days","< 1 week","< 1 month","< 3 months","Other"],datasets:[{data:[Math.floor(.4*u),Math.floor(.3*u),Math.floor(.15*u),Math.floor(.1*u),Math.floor(.05*u)]}]}}}))))};u.propTypes={customerIdName:i.a.string.isRequired,customerOrders:i.a.arrayOf(i.a.number).isRequired,customerInquiries:i.a.arrayOf(i.a.exact({id:i.a.string.isRequired,date:i.a.string.isRequired,numMessages:i.a.number.isRequired,resolved:i.a.bool.isRequired,message:i.a.string.isRequired})).isRequired},t.default=u}}]);
//# sourceMappingURL=doc-route.chunk_41.js.map?6cf00e333a04a7e64d57