(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[10,2,45,46,47,48,50,51,52],{342:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(31),i=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},l=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};l.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},c.propTypes={value:i.a.string.isRequired},t.default=l},343:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(31),o=n.n(r),i=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,i=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,i?"\n":"",i?c.a.createElement("div",{className:"alert-body"},i):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=i},344:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),r=n(31),o=n.n(r),m=n(354),i=n(355),f=n.n(i),d=n(356);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,i=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,l=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&l)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?u(e):c?s(e):Object(m.renderToStaticMarkup)(e)});else if("html"===r)n+=o?u(a):c?s(a):Object(m.renderToStaticMarkup)(a);else switch(v(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),i&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,y({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",y({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",y({key:t},o({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=c},345:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),a=n(31),r=n.n(a),c=n(353);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=s(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return i.a.createElement("div",{className:"col-2 d-none d-lg-block"},i.a.createElement("div",{className:"doc-toc"},i.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return i.a.createElement("li",{key:t,className:n?"active":""},i.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),r}();f.propTypes={component:r.a.func.isRequired},t.default=f},346:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(343);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},347:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(343);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},348:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(31),i=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:n.n(o).a.string.isRequired},t.default=i},349:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(31),o=n.n(r),i=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,i=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return c.a.createElement("span",{key:t},e,t<i.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=i},350:function(e,t,n){"use strict";n.r(t);var a=n(342);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(344);n.d(t,"ComponentPreview",function(){return r.default});var o=n(351);n.d(t,"DocContainer",function(){return o.default});var i=n(352);n.d(t,"DocHeading",function(){return i.default});var c=n(345);n.d(t,"DocToc",function(){return c.default});var l=n(346);n.d(t,"DeprecatedComponentAlert",function(){return l.default});var u=n(347);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(348);n.d(t,"Icon",function(){return s.default});var p=n(349);n.d(t,"PxScript",function(){return p.default})},351:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(31),i=n.n(o),c=n(350),l=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};l.propTypes={docToc:i.a.bool},t.default=l},353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=y,t.HashLink=v,t.NavHashLink=h;var o=l(n(1)),i=l(n(31)),c=n(54);function l(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function f(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(m(e),f(),!0)}function y(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){f(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),t.children)}function v(e){return y(e,c.Link)}function h(e){return y(e,c.NavLink)}var b={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};h.propTypes=v.propTypes=b},357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(358);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})},358:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),o=n(1),c=(a=o)&&a.__esModule?a:{default:a},i=n(31);function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function i(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n=l(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r))))._handleRefMount=function(e){n._domNode=e},l(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,o.PureComponent),r(i,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return c.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),i}();u.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},u.defaultProps={component:"code"},t.default=u},414:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),a=n(54),r=n(357),c=n.n(r),l=n(350),u=n(55),s=n(31),p=n.n(s),m=n(110),f=n.n(m);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=v(this,h(n).call(this,e))).state={active:"main-0",activeParent:null},t}var t,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(n,o["Component"]),t=n,(a=[{key:"setActive",value:function(e,t){e.preventDefault();var n=e.target.closest(".submenu");n?(this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),n.classList.add("submenu-active-parent"),this.setState({activeParent:n})):this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),this.setState({active:t})}},{key:"render",value:function(){var o=this,e=this.props,t=e.items,n=e.vertsize,a=e.widesize,r=f()("nav",n?"nav-".concat(n,"-vertical"):"",a?"nav-".concat(a,"-vertical-wide"):"");return i.a.createElement("nav",{className:r},i.a.createElement("ul",null,t.map(function(e,n){var t=e.name,a=e.icon,r=e.subItems;return i.a.createElement("li",{key:"nav-item-".concat(t,"-").concat(n)},"\n",r?i.a.createElement("div",{className:"submenu"},"\n",i.a.createElement("i",{className:"material-icons"},a),"\n",i.a.createElement("span",null,t),i.a.createElement("ul",null,r.map(function(e,t){return i.a.createElement("li",{key:"nav-subItems-".concat(e,"-").concat(t),className:o.state.active==="sub-".concat(n,"-").concat(t)?"active":null},i.a.createElement("a",{href:"#",onClick:function(e){return o.setActive(e,"sub-".concat(n,"-").concat(t))}},e))}))):i.a.createElement("a",{href:"#",onClick:function(e){return o.setActive(e,"main-".concat(n))},className:o.state.active==="main-".concat(n)?"active":null},"\n",i.a.createElement("i",{className:"material-icons"},a),"\n",i.a.createElement("span",null,t),"\n"),"\n")})))}}])&&y(t.prototype,a),r&&y(t,r),n}(),E=["xs","sm","md","lg","xl","xxl"];g.propTypes={items:p.a.array.isRequired,vertsize:p.a.oneOf(E),widesize:p.a.oneOf(E)};var w=g;function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"StandardNav",function(){return C}),n.d(t,"TwoLevels",function(){return S}),n.d(t,"IconsOnly",function(){return L}),n.d(t,"Mix",function(){return x}),n.d(t,"Mobile",function(){return M});var N=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart"},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance"},{name:"Authentication",icon:"fingerprint"}],j=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart",subItems:["Purchase history","Invoice"]},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance",subItems:["Email","Information","Other things"]}],C=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-standard"},"Standard nav"),i.a.createElement("p",null,"Add class ",i.a.createElement(l.Property,{value:".nav"})," and ",i.a.createElement(l.Property,{value:".nav-{desired_size}-vertical-wide"})," to a nav containing an ",i.a.createElement(c.a,{className:"language-html"},"<ul>")," to get a standard nav. Add ",i.a.createElement(c.a,{className:"language-html"},"<i>")," and ",i.a.createElement(c.a,{className:"language-html"},"<span>")," with your desired ",i.a.createElement(a.Link,{to:"/docs/core/icons"},"icon")," and text. ",i.a.createElement(l.Property,{value:".nav-{desired_size}-vertical-wide"})," determines when your nav will switch from mobile view to vertical. If you have more than five icons then the first four icons will be the only visible ones in mobile view."),i.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{widesize:"lg",items:N})))},S=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-twolevels"},"Two levels"),i.a.createElement("p",null,"You can also display another level of items in the standard nav. Just nest a ",i.a.createElement(c.a,{className:"language-html"},"<DocContainer>")," with class ",i.a.createElement(l.Property,{value:".submenu"})," containing an icon and text like the standard nav and add a new ",i.a.createElement(c.a,{className:"language-html"},"<ul>")," with ",i.a.createElement(c.a,{className:"language-html"},"<li>")," items. This level does not use icons. List items containing another level are not visible in responsive mode, they will be displayed when the items are expanded."),i.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{widesize:"lg",items:j})))},L=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-tablet"},"Icons only"),i.a.createElement("p",null,"To display only icons use class ",i.a.createElement(l.Property,{value:".nav-{desired_size}-vertical"}),". Like the first example, this determines when your ",i.a.createElement(l.Property,{value:".nav"})," will switch from mobile to icons only. In this mode it is possible to display another level of items."),i.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{vertsize:"md",items:j})))},x=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-mix"},"Tablet and wide"),i.a.createElement("p",null,"You can also use both icons only and wide together."),i.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{vertsize:"md",widesize:"lg",items:j})))},M=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"nav-mobile"},"Mobile nav"),i.a.createElement("p",null,"To only display mobile view use class ",i.a.createElement(l.Property,{value:".nav"})," alone."),i.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(w,{items:N})))},I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,T(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidUpdate",value:function(){u.nav.init()}},{key:"componentDidMount",value:function(){u.nav.init()}},{key:"render",value:function(){return i.a.createElement(l.DocContainer,{docToc:!0},i.a.createElement("p",{className:"lead"},"Use ",i.a.createElement(c.a,{className:"language-html"},"<nav>"),"s to create a basic navigational element containing links."),i.a.createElement(C,null),i.a.createElement(S,null),i.a.createElement(L,null),i.a.createElement(x,null),i.a.createElement(M,null))}}])&&P(n.prototype,a),r&&P(n,r),t}();t.default=I}}]);
//# sourceMappingURL=doc-route.chunk_12.js.map?f8d0c4becbcaa546084b