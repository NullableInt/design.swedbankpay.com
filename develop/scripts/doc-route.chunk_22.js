(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[21,2,45,46,47,48,50,51,52],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(64),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},353:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(64),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},354:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),r=n(64),o=n.n(r),f=n(364),l=n(365),m=n.n(l),d=n(366);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?u(e):c?s(e):Object(f.renderToStaticMarkup)(e)});else if("html"===r)n+=o?u(a):c?s(a):Object(f.renderToStaticMarkup)(a);else switch(h(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,y({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",y({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",y({key:t},o({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=c},355:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(64),r=n.n(a),c=n(363);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=s(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),r}();m.propTypes={component:r.a.func.isRequired},t.default=m},356:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(353);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},357:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(353);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},358:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(64),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},359:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(64),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},360:function(e,t,n){"use strict";n.r(t);var a=n(352);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(354);n.d(t,"ComponentPreview",function(){return r.default});var o=n(361);n.d(t,"DocContainer",function(){return o.default});var l=n(362);n.d(t,"DocHeading",function(){return l.default});var c=n(355);n.d(t,"DocToc",function(){return c.default});var i=n(356);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(357);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(358);n.d(t,"Icon",function(){return s.default});var p=n(359);n.d(t,"PxScript",function(){return p.default})},361:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(64),l=n.n(o),c=n(360),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=y,t.HashLink=h,t.NavHashLink=b;var o=i(n(1)),l=i(n(64)),c=n(96);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,f=null;function m(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(f(e),m(),!0)}function y(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){m(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){m()},1e4))},0))}}),t.children)}function h(e){return y(e,c.Link)}function b(e){return y(e,c.NavLink)}var v={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=h.propTypes=v},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(368);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})},368:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),o=n(1),c=(a=o)&&a.__esModule?a:{default:a},l=n(64);function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function l(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n=i(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this].concat(r))))._handleRefMount=function(e){n._domNode=e},i(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o.PureComponent),r(l,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return c.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),l}();u.propTypes={async:l.PropTypes.bool,className:l.PropTypes.string,children:l.PropTypes.any,component:l.PropTypes.node},u.defaultProps={component:"code"},t.default=u},426:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(367),r=n.n(a),c=n(360),i=n(64),u=n.n(i),s=n(305),p=n.n(s),f=function(e){var t=e.icon,n=e.text,a=p()("material-icons","menu"===t?"topbar-btn-icon":"");return t||n?l.a.createElement("button",{type:"button",className:"topbar-btn"},"\n\t\t",t?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:a},t),"\n\t\t"):null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"topbar-btn-text"},n),"\n\t"):null):null},m=function(e){var t=e.menu.items;return l.a.createElement("nav",{className:"topbar-nav"},t.map(function(e,t){return l.a.createElement(o.Fragment,{key:t},"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},e))}),"\n")},d=function(e){var t=e.topbarContent,n=e.fixed,a=e.logout;return l.a.createElement("header",{className:"topbar".concat(n?" topbar-fixed":"")},"\n",l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{icon:t.btn.icon,text:t.btn.text,target:t.id}),"\n",l.a.createElement(m,{menu:t})):null,"\n",l.a.createElement("a",{href:"#",className:"topbar-logo",onClick:function(e){return e.preventDefault()}}),"\n",a?l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{icon:"exit_to_app",text:"Log out"}),"\n"):null))};d.propTypes={topbarContent:u.a.object,fixed:u.a.bool,logout:u.a.bool};var y=d,h=n(97);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Overview",function(){return T}),n.d(t,"FixedTopbar",function(){return O});var k={btn:{icon:"menu",text:"Menu"},items:["Link 1","Link 2","Link 3"]},T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"To use a topbar the bare minimum markup required is:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.Property,{value:".topbar"})," wrapper."),l.a.createElement("li",null,"Anchor with class ",l.a.createElement(c.Property,{value:".topbar-logo"})," to display the logo and make it clickable.")),l.a.createElement("p",null,"With this you get a topbar with the PayEx logo. In the topbar you can add additional functionality like a menu containing links. To enable this add a ",l.a.createElement(r.a,{className:"language-html"},"<button>")," and a ",l.a.createElement(r.a,{className:"language-html"},"<nav>")," containing anchors. Remember to include ",l.a.createElement(c.Attribute,{data:!0,name:"toggle-nav",value:"{your_nav_id}"})," as a ",l.a.createElement(r.a,{className:"language-html"},"<button>")," attribute to get the menu to appear when the menu-button is clicked."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(y,{topbarContent:k,logout:!0})))},O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"fixed-topbar"},"Fixed topbar"),l.a.createElement("p",null,"Add ",l.a.createElement(c.Property,{value:".topbar-fixed"})," with your ",l.a.createElement(c.Property,{value:".topbar"})," to get a fixed topbar. For a demonstration of the usage see the documentations top bar or implement it in your own project!"),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement(y,{fixed:!0})))},P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,E(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){h.topbar.init(1)}},{key:"render",value:function(){return l.a.createElement(c.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"The topbar is used to give users an easily available navigational bar at the top of your web application."),l.a.createElement(T,null),l.a.createElement(O,null))}}])&&v(n.prototype,a),r&&v(n,r),t}();t.default=P}}]);
//# sourceMappingURL=doc-route.chunk_22.js.map?bfba06ffe707f0116816