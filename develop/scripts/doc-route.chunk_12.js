(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[11],{474:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(81),o=n(416),l=n.n(o),c=n(400),s=n(57),u=n(2),m=n.n(u),f=n(120),p=n.n(f);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=h(this,y(n).call(this,e))).state={active:"main-0",activeParent:null},t}var t,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(n,r["Component"]),t=n,(a=[{key:"setActive",value:function(e,t){e.preventDefault();var n=e.target.closest(".submenu");n?(this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),n.classList.add("submenu-active-parent"),this.setState({activeParent:n})):this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),this.setState({active:t})}},{key:"render",value:function(){var r=this,e=this.props,t=e.items,n=e.vertsize,a=e.widesize,o=p()("nav",n?"nav-".concat(n,"-vertical"):"",a?"nav-".concat(a,"-vertical-wide"):"");return i.a.createElement("nav",{className:o},i.a.createElement("ul",null,t.map(function(e,n){var t=e.name,a=e.icon,o=e.subItems;return i.a.createElement("li",{key:"nav-item-".concat(t,"-").concat(n)},"\n",o?i.a.createElement("div",{className:"submenu"},"\n",i.a.createElement("i",{className:"material-icons"},a),"\n",i.a.createElement("span",null,t),i.a.createElement("ul",null,o.map(function(e,t){return i.a.createElement("li",{key:"nav-subItems-".concat(e,"-").concat(t),className:r.state.active==="sub-".concat(n,"-").concat(t)?"active":null},i.a.createElement("a",{href:"#",onClick:function(e){return r.setActive(e,"sub-".concat(n,"-").concat(t))}},e))}))):i.a.createElement("a",{href:"#",onClick:function(e){return r.setActive(e,"main-".concat(n))},className:r.state.active==="main-".concat(n)?"active":null},"\n",i.a.createElement("i",{className:"material-icons"},a),"\n",i.a.createElement("span",null,t),"\n"),"\n")})))}}])&&d(t.prototype,a),o&&d(t,o),n}(),E=["xs","sm","md","lg","xl","xxl"];g.propTypes={items:m.a.array.isRequired,vertsize:m.a.oneOf(E),widesize:m.a.oneOf(E)};var w=g;function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"StandardNav",function(){return x}),n.d(t,"TwoLevels",function(){return j}),n.d(t,"IconsOnly",function(){return T}),n.d(t,"Mix",function(){return z}),n.d(t,"Mobile",function(){return F});var k=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart"},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance"},{name:"Authentication",icon:"fingerprint"}],S=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart",subItems:["Purchase history","Invoice"]},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance",subItems:["Email","Information","Other things"]}],x=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-standard"},"Standard nav"),i.a.createElement("p",null,"Add class ",i.a.createElement(c.Property,{value:".nav"})," and ",i.a.createElement(c.Property,{value:".nav-{desired_size}-vertical-wide"})," to a nav containing an ",i.a.createElement(l.a,{className:"language-html"},"<ul>")," to get a standard nav. Add ",i.a.createElement(l.a,{className:"language-html"},"<i>")," and ",i.a.createElement(l.a,{className:"language-html"},"<span>")," with your desired ",i.a.createElement(a.a,{to:"/docs/core/icons"},"icon")," and text. ",i.a.createElement(c.Property,{value:".nav-{desired_size}-vertical-wide"})," determines when your nav will switch from mobile view to vertical. If you have more than five icons then the first four icons will be the only visible ones in mobile view."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{widesize:"lg",items:k})))},j=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-twolevels"},"Two levels"),i.a.createElement("p",null,"You can also display another level of items in the standard nav. Just nest a ",i.a.createElement(l.a,{className:"language-html"},"<DocContainer>")," with class ",i.a.createElement(c.Property,{value:".submenu"})," containing an icon and text like the standard nav and add a new ",i.a.createElement(l.a,{className:"language-html"},"<ul>")," with ",i.a.createElement(l.a,{className:"language-html"},"<li>")," items. This level does not use icons. List items containing another level are not visible in responsive mode, they will be displayed when the items are expanded."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{widesize:"lg",items:S})))},T=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-tablet"},"Icons only"),i.a.createElement("p",null,"To display only icons use class ",i.a.createElement(c.Property,{value:".nav-{desired_size}-vertical"}),". Like the first example, this determines when your ",i.a.createElement(c.Property,{value:".nav"})," will switch from mobile to icons only. In this mode it is possible to display another level of items."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{vertsize:"md",items:S})))},z=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-mix"},"Tablet and wide"),i.a.createElement("p",null,"You can also use both icons only and wide together."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{vertsize:"md",widesize:"lg",items:S})))},F=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-mobile"},"Mobile nav"),i.a.createElement("p",null,"To only display mobile view use class ",i.a.createElement(c.Property,{value:".nav"})," alone."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{items:k})))},I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,C(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidUpdate",value:function(){s.nav.init()}},{key:"componentDidMount",value:function(){s.nav.init()}},{key:"render",value:function(){return i.a.createElement(c.DocContainer,{docToc:!0},i.a.createElement(c.ExperimentalComponentAlert,null),i.a.createElement("p",{className:"lead"},"Use ",i.a.createElement(l.a,{className:"language-html"},"<nav>"),"s to create a basic navigational element containing links."),i.a.createElement(x,null),i.a.createElement(j,null),i.a.createElement(T,null),i.a.createElement(z,null),i.a.createElement(F,null))}}])&&_(n.prototype,a),o&&_(n,o),t}();t.default=I}}]);
//# sourceMappingURL=doc-route.chunk_12.js.map?de7c43d5653141a851c8