(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[17,2,45,46,47,48,50,51,52],{371:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var o=n(1),r=n.n(o),a=n(65),c=n.n(a),i=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},l=function(e){var t=e.data,n=e.name,o=e.value;return n&&o?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),o,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!o?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&o?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},o)):void 0};l.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},i.propTypes={value:c.a.string.isRequired},t.default=l},372:function(e,t,n){"use strict";var o=n(1),r=n.n(o),a=n(65),c=n.n(a),i=function(e){var t=e.id,n=e.type,o=e.icon,a=e.close,c=e.text,i=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},o?"\n":"",o?r.a.createElement("i",{className:"material-icons alert-icon"},o):null,c?"\n":"",c?r.a.createElement("p",null,c):null,i?"\n":"",i?r.a.createElement("div",{className:"alert-body"},i):null,a?"\n":"",a?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},t.a=i},373:function(e,t,n){"use strict";n.r(t);var o=n(371);n.d(t,"Attribute",function(){return o.default}),n.d(t,"Property",function(){return o.Property});var r=n(374);n.d(t,"ComponentPreview",function(){return r.default});var a=n(380);n.d(t,"DocContainer",function(){return a.default});var c=n(381);n.d(t,"DocHeading",function(){return c.default});var i=n(375);n.d(t,"DocToc",function(){return i.default});var l=n(376);n.d(t,"DeprecatedComponentAlert",function(){return l.default});var u=n(377);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(378);n.d(t,"Icon",function(){return s.default});var p=n(379);n.d(t,"PxScript",function(){return p.default})},374:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(65),c=n.n(a),i=n(383),l=n(384),u=n.n(l),s=n(385);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e){var t=e.children,n=e.language,o=e.removeOuterTag,a=e.hideValue,c=e.removeList,l=e.showCasePanel,m=e.codeFigure,d=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(i.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(i.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),o="";return n.forEach(function(e){o+="".concat(e.innerHTML," \n")}),o};return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,m?r.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=o?y(t):c?h(t):Object(i.renderToStaticMarkup)(t)});else if("html"===n)e+=o?y(t):c?h(t):Object(i.renderToStaticMarkup)(t);else switch(f(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),a&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},o.map(function(e,t){return r.a.createElement("div",p({key:e+t},a({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",p({key:t},c({token:e,key:t})))}))}))}))},null):null)};m.propTypes={language:c.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:c.a.bool,hideValue:c.a.bool,removeList:c.a.bool,showCasePanel:c.a.bool,codeFigure:c.a.bool,dangerousHTML:c.a.bool},t.default=m},375:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(65),c=n.n(a),i=n(382);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var o=n.type().props.children[0];"h2"===o.type&&t.push({title:o.props.children,id:o.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:m(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(a=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var o=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:o?"active":""},r.a.createElement(i.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,a),c&&u(n,c),t}();d.propTypes={component:c.a.func.isRequired},t.default=d},376:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(372);t.default=function(){return r.a.createElement(a.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},377:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(372);t.default=function(){return r.a.createElement(a.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},378:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(65),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(a).a.string.isRequired},t.default=c},379:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(65),c=n.n(a),i=function(e){var t,n,o=e.component,a=e.subComponents,c=e.func,i=e.params;return a&&(n=a.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return r.a.createElement("span",{key:t},e,t<i.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,o),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},c),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},t.default=i},380:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(65),c=n.n(a),i=n(373),l=function(e){var t=e.docToc,n=e.children,o=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(o,null),t?r.a.createElement(i.DocToc,{component:o}):null))};l.propTypes={docToc:c.a.bool},t.default=l},382:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)};t.genericHashLink=h,t.HashLink=b,t.NavHashLink=v;var c=u(n(1)),i=u(n(65)),l=n(96);function u(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,f=null,m=null;function d(){s="",null!==p&&p.disconnect(),null!==f&&(window.clearTimeout(f),f=null)}function y(){var e=document.getElementById(s);return null!==e&&(m(e),d(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["scroll","smooth"]);return c.default.createElement(t,r({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===a(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(m=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),f=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function b(e){return h(e,l.Link)}function v(e){return h(e,l.NavLink)}var g={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};b.propTypes=g,v.propTypes=g},386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(387);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(o).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},387:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),i=(r=c)&&r.__esModule?r:{default:r},l=n(65);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==o(t)&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=Array(r),c=0;c<r;c++)a[c]=arguments[c];return n=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._handleRefMount=function(e){o._domNode=e},u(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+o(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.PureComponent),a(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,o=e.children;return i.default.createElement(n,{ref:this._handleRefMount,className:t},o)}}]),t}();s.propTypes={async:l.PropTypes.bool,className:l.PropTypes.string,children:l.PropTypes.any,component:l.PropTypes.node},s.defaultProps={component:"code"},t.default=s},448:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(96),c=n(386),i=n.n(c),l=n(373),u=n(97),s=n(65),p=n.n(s);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,y(t).call(this,e))).state={active:1},n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o["Component"]),n=t,(a=[{key:"setActive",value:function(e,t){e.preventDefault(),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.mode,o=t.items;return r.a.createElement("div",{className:"tabs".concat(n?" tabs-horizontal-".concat(n):"")},"\n",r.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"),r.a.createElement("ul",null,o.map(function(t,n){return r.a.createElement("li",{key:"tab-item-".concat(t,"-").concat(n),className:e.state.active===n?"active":null},"\n",r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,n)}},t),"\n")})))}}])&&m(n.prototype,a),c&&m(n,c),t}();b.propTypes={mode:p.a.oneOf(["xs","sm","md","lg","xl","xxl"]),items:p.a.array.isRequired};var v=b;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"BasicUsage",function(){return P}),n.d(t,"Collapsed",function(){return _});var T=["Kort","Rabatter","Transaksjoner","Faktura","Instillinger","Audit trail"],P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"basic-usage"},"Basic usage"),r.a.createElement("p",null,"Add class ",r.a.createElement(l.Property,{value:".tabs"})," with a ",r.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," to a div containing an arrow icon along with ",r.a.createElement(i.a,{className:"language-html"},"<ul>")," and nest ",r.a.createElement(i.a,{className:"language-html"},"<li>")," as needed. The ",r.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," class determines when your tabs will switch from horizontal to collapsed. The available sizes can be found in our ",r.a.createElement(a.Link,{to:"/docs/core/breakpoints"},"breakpoints documentation"),"."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(v,{mode:"xl",items:T})))},_=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"collapsed"},"Collapsed"),r.a.createElement("p",null,"If no ",r.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," is provided then the tabs will always be in collapsed mode."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(v,{items:T})))},j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,k(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){u.tabs.init()}},{key:"render",value:function(){return r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use tabs to show which page or section that is active out of several options."),r.a.createElement(P,null),r.a.createElement(_,null))}}])&&E(n.prototype,a),c&&E(n,c),t}();t.default=j}}]);
//# sourceMappingURL=doc-route.chunk_19.js.map?7df0f817cf22c98a6480