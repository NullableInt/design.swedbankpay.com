(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[17,2,48,49,50,52,53,54,55],{363:function(e,t,n){"use strict";n.r(t);var r=n(364);n.d(t,"Attribute",function(){return r.default}),n.d(t,"Property",function(){return r.Property});var o=n(366);n.d(t,"ComponentPreview",function(){return o.default});var a=n(372);n.d(t,"DocContainer",function(){return a.default});var c=n(374);n.d(t,"DocHeading",function(){return c.default});var l=n(367);n.d(t,"DocToc",function(){return l.default});var i=n(368);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(369);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(370);n.d(t,"Icon",function(){return s.default});var p=n(373);n.d(t,"JavascriptDocs",function(){return p.default});var f=n(371);n.d(t,"PxScript",function(){return f.default})},364:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var r=n(1),o=n.n(r),a=n(65),c=n.n(a),l=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,r=e.value;return n&&r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),r,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&r?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},r)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},l.propTypes={value:c.a.string.isRequired},t.default=i},365:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(65),c=n.n(a),l=function(e){var t=e.id,n=e.type,r=e.icon,a=e.close,c=e.text,l=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r?"\n":"",r?o.a.createElement("i",{className:"material-icons alert-icon"},r):null,c?"\n":"",c?o.a.createElement("p",null,c):null,l?"\n":"",l?o.a.createElement("div",{className:"alert-body"},l):null,a?"\n":"",a?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},t.a=l},366:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(65),c=n.n(a),l=n(376),i=n(377),u=n.n(i),s=n(378);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e){var t=e.children,n=e.language,r=e.removeOuterTag,a=e.hideValue,c=e.removeList,i=e.showCasePanel,m=e.codeFigure,d=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(l.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(l.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),r="";return n.forEach(function(e){r+="".concat(e.innerHTML," \n")}),r};return o.a.createElement(o.a.Fragment,null,i?o.a.createElement(function(){return o.a.createElement("div",{className:"showcase-panel"},t)},null):null,m?o.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=r?y(t):c?h(t):Object(l.renderToStaticMarkup)(t)});else if("html"===n)e+=r?y(t):c?h(t):Object(l.renderToStaticMarkup)(t);else switch(f(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),a&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",o.a.createElement("figure",null,o.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,c=e.getTokenProps;return o.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return o.a.createElement("div",p({key:e+t},a({line:e,key:t})),e.map(function(e,t){return o.a.createElement("span",p({key:t},c({token:e,key:t})))}))}))}))},null):null)};m.propTypes={language:c.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:c.a.bool,hideValue:c.a.bool,removeList:c.a.bool,showCasePanel:c.a.bool,codeFigure:c.a.bool,dangerousHTML:c.a.bool},t.default=m},367:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(65),c=n.n(a),l=n(375);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var r=n.type().props.children[0];"h2"===r.type&&t.push({title:r.props.children,id:r.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:m(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(a=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var r=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return o.a.createElement("li",{key:n,className:r?"active":""},o.a.createElement(l.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,a),c&&u(n,c),t}();d.propTypes={component:c.a.func.isRequired},t.default=d},368:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(365);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},369:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(365);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},370:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(65),c=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(a).a.string.isRequired},t.default=c},371:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(65),c=n.n(a),l=function(e){var t,n,r=e.component,a=e.subComponents,c=e.func,l=e.params;return a&&Array.isArray(a)&&(n=a.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),l&&Array.isArray(l)&&(t=l.map(function(e,t){return o.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<l.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,r),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},c),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},t.default=l},372:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(65),c=n.n(a),l=n(363),i=function(e){var t=e.docToc,n=e.children,r=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(r,null),t?o.a.createElement(l.DocToc,{component:r}):null))};i.propTypes={docToc:c.a.bool},t.default=i},373:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return l}),n.d(t,"CloseDocs",function(){return i});var r=n(1),o=n.n(r),a=n(95),c=n(363),l=function(e){var t=e.componentName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement(c.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),o.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement(c.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),o.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,r=e.close;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement(c.PxScript,{component:t,func:"init"})),o.a.createElement("p",null,o.a.createElement(a.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?o.a.createElement(l,{componentName:t}):null,r?o.a.createElement(i,{componentName:t}):null)}},375:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)};t.genericHashLink=h,t.HashLink=b,t.NavHashLink=v;var c=u(n(1)),l=u(n(65)),i=n(95);function u(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,f=null,m=null;function d(){s="",null!==p&&p.disconnect(),null!==f&&(window.clearTimeout(f),f=null)}function y(){var e=document.getElementById(s);return null!==e&&(m(e),d(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["scroll","smooth"]);return c.default.createElement(t,o({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===a(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(m=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),f=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function b(e){return h(e,i.Link)}function v(e){return h(e,i.NavLink)}var E={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=E,v.propTypes=E},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(380);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return o(r).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},380:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=(o=c)&&o.__esModule?o:{default:o},i=n(65);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==r(t)&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._handleRefMount=function(e){r._domNode=e},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+r(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.PureComponent),a(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,r=e.children;return l.default.createElement(n,{ref:this._handleRefMount,className:t},r)}}]),t}();s.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},s.defaultProps={component:"code"},t.default=s},443:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(95),c=n(379),l=n.n(c),i=n(363),u=n(65),s=n.n(u);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,d(t).call(this,e))).state={active:1},n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(a=[{key:"setActive",value:function(e,t){e.preventDefault(),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.mode,r=t.items;return o.a.createElement("div",{className:"tabs".concat(n?" tabs-horizontal-".concat(n):"")},"\n",o.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"),o.a.createElement("ul",null,r.map(function(t,n){return o.a.createElement("li",{key:"tab-item-".concat(t,"-").concat(n),className:e.state.active===n?"active":null},"\n",o.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,n)}},t),"\n")})))}}])&&f(n.prototype,a),c&&f(n,c),t}();h.propTypes={mode:s.a.oneOf(["xs","sm","md","lg","xl","xxl"]),items:s.a.array.isRequired};var b=h;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"BasicUsage",function(){return T}),n.d(t,"Collapsed",function(){return _}),n.d(t,"JavascriptMethods",function(){return N});var O=window.px.tabs,P=["Kort","Rabatter","Transaksjoner","Faktura","Instillinger","Audit trail"],T=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"basic-usage"},"Basic usage"),o.a.createElement("p",null,"Add class ",o.a.createElement(i.Property,{value:".tabs"})," with a ",o.a.createElement(i.Property,{value:".tabs-horizontal-desired_size"})," to a div containing an arrow icon along with ",o.a.createElement(l.a,{className:"language-html"},"<ul>")," and nest ",o.a.createElement(l.a,{className:"language-html"},"<li>")," as needed. The ",o.a.createElement(i.Property,{value:".tabs-horizontal-desired_size"})," class determines when your tabs will switch from horizontal to collapsed. The available sizes can be found in our ",o.a.createElement(a.Link,{to:"/docs/core/breakpoints"},"breakpoints documentation"),"."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(b,{mode:"xl",items:P})))},_=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"collapsed"},"Collapsed"),o.a.createElement("p",null,"If no ",o.a.createElement(i.Property,{value:".tabs-horizontal-desired_size"})," is provided then the tabs will always be in collapsed mode."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(b,{items:P})))},N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"javascript-methods"},"Javascript methods"),o.a.createElement(i.JavascriptDocs,{componentName:"tabs",open:!0,close:!0}))},j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,w(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){O.init()}},{key:"render",value:function(){return o.a.createElement(i.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Use tabs to show which page or section that is active out of several options."),o.a.createElement(T,null),o.a.createElement(_,null),o.a.createElement(N,null))}}])&&E(n.prototype,a),c&&E(n,c),t}();t.default=j}}]);
//# sourceMappingURL=doc-route.chunk_19.js.map?f7f374c133a034b7cb3e