(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[12],{508:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),a=n(448),r=n.n(a),l=n(432),i=n(2),c=n.n(i),u=n(154),m=n.n(u),p=function(e){var t=e.type,n=e.items,a=e.text,r=e.arrows,o=e.farArrows,l=-1,i=n?n.length-1:-2,c=m()("pagination",t?"pagination-".concat(t):""),u=function(e){var t=e.type,n=!1;return"start"===t||"back"===t?n=0===l:"forward"!==t&&"end"!==t||(n=l===i),s.a.createElement("li",{className:"arrow-".concat(t)},"\n",n?s.a.createElement("span",null):s.a.createElement("a",{href:"#"}),"\n")};return s.a.createElement("ul",{className:c},o?s.a.createElement(u,{type:"start"}):null,r?s.a.createElement(u,{type:"back"}):null,n?n.map(function(e,t){var n=e.name,a=e.href,r=e.active;return r&&(l=t),s.a.createElement("li",{key:t,className:"".concat(r?"active":"")},"\n",s.a.createElement("a",{href:a},n),"\n")}):null,a?s.a.createElement("li",null,"\n",s.a.createElement("span",{className:"text"},a),"\n"):null,r?s.a.createElement(u,{type:"forward"}):null,o?s.a.createElement(u,{type:"end"}):null)};p.propTypes={type:c.a.oneOf(["bullets","simple"]),items:c.a.array,text:c.a.string,arrows:c.a.bool,farArrows:c.a.bool};var f=p;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"DefaultPagination",function(){return d}),n.d(t,"SimplePagination",function(){return P}),n.d(t,"PaginationBullets",function(){return v});var w=[{name:"1",href:"#",active:!1},{name:"2",href:"#",active:!1},{name:"3",href:"#",active:!1},{name:"4",href:"#",active:!1},{name:"5",href:"#",active:!0}],d=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"default-pagination"},"Default pagination"),s.a.createElement("p",null,"Default pagination shows the pages as numbers. Add ",s.a.createElement(l.Property,{value:".pagination"})," to an ",s.a.createElement(r.a,{className:"language-html"},"<ul>")," containing",s.a.createElement(r.a,{className:"language-html"},"<li>"),". If you wish to present the user with navigational arrows you need to add those as ",s.a.createElement(r.a,{className:"language-html"},"<li>")," elements."),s.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(f,{items:w,arrows:!0,farArrows:!0})))},v=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"pagination-bullets"},"Pagination bullets"),s.a.createElement("p",null,"If you want to show bullets instead of numbers you can add ",s.a.createElement(l.Property,{value:".pagination-bullets"})," to your ",s.a.createElement(r.a,{className:"language-html"},"<ul>"),"."),s.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(f,{type:"bullets",items:w,arrows:!0,farArrows:!0})))},P=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"simple-pagination"},"Simple pagination"),s.a.createElement("p",null,"If the number of pages get high enough then it is better to use numbers."),s.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(f,{text:"16 of 256",arrows:!0,farArrows:!0})))},O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,E(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){return s.a.createElement(l.DocContainer,{docToc:!0},s.a.createElement("p",{className:"lead"},"Use the pagination component to indicate that a series of related content exist across multiple pages."),s.a.createElement(d,null),s.a.createElement(v,null),s.a.createElement(P,null))}}])&&h(n.prototype,a),r&&h(n,r),t}();t.default=O}}]);
//# sourceMappingURL=doc-route.chunk_13.js.map?d993a08b795f1433e83d