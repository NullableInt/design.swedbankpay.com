(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[40,2,45,46,47,48,50,51,52],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),r=n.n(a),l=n(64),o=n.n(l),i=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},i.propTypes={value:o.a.string.isRequired},t.default=c},353:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(64),l=n.n(r),o=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,o=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?i.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?i.a.createElement("p",null,l):null,o?"\n":"",o?i.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},354:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(64),l=n.n(r),p=n(364),o=n(365),d=n.n(o),f=n(366);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var a=e.children,r=e.language,l=e.removeOuterTag,o=e.hideValue,i=e.removeList,t=e.showCasePanel,n=e.codeFigure,c=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&c)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=l?u(e):i?s(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=l?u(a):i?s(a):Object(p.renderToStaticMarkup)(a);else switch(b(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",m.a.createElement("figure",null,m.a.createElement(f.a,y({},f.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,l=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",y({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",y({key:t},l({token:e,key:t})))}))}))}))},null):null)};i.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=i},355:function(e,t,n){"use strict";n.r(t);var l=n(1),o=n.n(l),a=n(64),r=n.n(a),i=n(363);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=s(this,m(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,l["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return o.a.createElement("li",{key:t,className:n?"active":""},o.a.createElement(i.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),r}();d.propTypes={component:r.a.func.isRequired},t.default=d},356:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(353);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},357:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(353);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},358:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(64),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},359:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(64),l=n.n(r),o=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(n=r.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return i.a.createElement("span",{key:t},e,t<o.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,a),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},l),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},360:function(e,t,n){"use strict";n.r(t);var a=n(352);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(354);n.d(t,"ComponentPreview",function(){return r.default});var l=n(361);n.d(t,"DocContainer",function(){return l.default});var o=n(362);n.d(t,"DocHeading",function(){return o.default});var i=n(355);n.d(t,"DocToc",function(){return i.default});var c=n(356);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(357);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(358);n.d(t,"Icon",function(){return s.default});var m=n(359);n.d(t,"PxScript",function(){return m.default})},361:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(64),o=n.n(l),i=n(360),c=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:o.a.bool},t.default=c},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=y,t.HashLink=b,t.NavHashLink=h;var l=c(n(1)),o=c(n(64)),i=n(96);function c(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,m=null,p=null;function d(){u="",null!==s&&s.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function f(){var e=document.getElementById(u);return null!==e&&(p(e),d(),!0)}function y(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return l.default.createElement(e,a({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(p=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function b(e){return y(e,i.Link)}function h(e){return y(e,i.NavLink)}var g={onClick:o.default.func,children:o.default.node,scroll:o.default.func,to:o.default.oneOfType([o.default.string,o.default.object])};h.propTypes=b.propTypes=g},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(368);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})},368:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),l=n(1),i=(a=l)&&a.__esModule?a:{default:a},o=n(64);function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function o(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var a=arguments.length,r=Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=n=c(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(r))))._handleRefMount=function(e){n._domNode=e},c(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,l.PureComponent),r(o,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return i.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),o}();u.propTypes={async:o.PropTypes.bool,className:o.PropTypes.string,children:o.PropTypes.any,component:o.PropTypes.node},u.defaultProps={component:"code"},t.default=u},369:function(e,t,n){"use strict";var a=n(1),v=n.n(a),r=n(64),l=n.n(r),o=n(305),w=n.n(o);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=e.label,n=e.id,a=e.name,r=e.value,l=e.href,o=e.icon,i=e.loading,c=e.type,u=e.disabled,s=e.btnType,m=e.fullWidth,p=e.loader,d=e.pullRight,f=e.input,y=e.outline,b=e.active,h=e.size,g=w()("btn","btn-".concat(y?"outline-":"").concat(c),h?"btn-".concat(h):null,i?"loading":null,m?"btn-block":null,d?"pull-right":null,b&&l?"active":null,u&&l?"disabled":null),E={href:l,id:n,name:a,defaultValue:r,disabled:l?null:u,"data-button-loader":p?"":null,active:b&&!l?"":null,role:l?"button":null,type:l?null:s||"button","aria-pressed":!!b||null,"aria-disabled":!(!l||!u)||null,tabIndex:l&&u?"-1":null};return l?v.a.createElement("a",P({className:g},E),o?"\n\t":null,o?v.a.createElement("i",{className:"material-icons"},o):null,o&&t?v.a.createElement("span",null,t):t):f?v.a.createElement("input",P({className:g},E)):v.a.createElement("button",P({className:g},E),o?"\n\t\t":null,o?v.a.createElement(v.a.Fragment,null,v.a.createElement("i",{className:"material-icons"},o),"\n\t\t"):null,o&&t?v.a.createElement("span",null,t):t,o?"\n\t":null)};i.propTypes={type:l.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:l.a.string,id:l.a.string,name:l.a.string,value:l.a.string,href:l.a.string,icon:l.a.string,loading:l.a.bool,disabled:l.a.bool,btnType:l.a.string,fullWidth:l.a.bool,loader:l.a.bool,pullRight:l.a.bool,input:l.a.bool,outline:l.a.bool,active:l.a.bool,size:l.a.oneOf(["lg","sm","xs"])},t.a=i},385:function(e,t,n){"use strict";n.r(t),n.d(t,"Examples",function(){return h}),n.d(t,"UsageWithOtherTags",function(){return g}),n.d(t,"OutlineButtons",function(){return E}),n.d(t,"ButtonGroup",function(){return v}),n.d(t,"Sizes",function(){return w}),n.d(t,"ActiveState",function(){return P}),n.d(t,"DisabledState",function(){return k}),n.d(t,"UsageWithIcons",function(){return T}),n.d(t,"ButtonLoader",function(){return O});var l=n(1),o=n.n(l),a=n(96),r=n(367),i=n.n(r),c=n(360),u=n(369),s=n(353),m=n(97);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"examples"},"Examples"),o.a.createElement("p",null,"The DesignGuide includes a few predefined button styles, each serving its own semantic purpose."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{type:"primary",label:"Primary"}),"\n",o.a.createElement(u.a,{type:"secondary",label:"Secondary"}),"\n",o.a.createElement(u.a,{type:"danger",label:"Danger"}),"\n",o.a.createElement(u.a,{type:"link",label:"Link"}),"\n")))},g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-other-tags"},"Usage with other tags"),o.a.createElement("p",null,"The ",o.a.createElement(c.Property,{value:".btn"})," classes are designed to be used with the ",o.a.createElement(i.a,{className:"language-html"},"<button>")," element. However, you can also use these classes on ",o.a.createElement(i.a,{className:"language-html"},"<a>")," or ",o.a.createElement(i.a,{className:"language-html"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),o.a.createElement("p",null,"When using button classes on ",o.a.createElement(i.a,{className:"language-html"},"<a>")," elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a ",o.a.createElement(c.Attribute,{name:"role",value:"button"})," to appropriately convey their purpose to assistive technologies such as screen readers."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{type:"primary",label:"Anchor",href:"#"}),"\n",o.a.createElement(u.a,{type:"primary",label:"Button"}),"\n",o.a.createElement(u.a,{type:"primary",input:!0,value:"Input",btnType:"button"}),"\n",o.a.createElement(u.a,{type:"primary",input:!0,value:"Submit",btnType:"submit"}),"\n",o.a.createElement(u.a,{type:"primary",input:!0,value:"Reset",btnType:"reset"}),"\n")))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"outline-buttons"},"Outline buttons"),o.a.createElement("p",null,"Replace the default modifier classes with the ",o.a.createElement(c.Property,{value:".btn-outline-{style}"})," ones to get an outline of the button style."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{outline:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(u.a,{outline:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(u.a,{outline:!0,type:"danger",label:"Danger"}),"\n")))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-group"},"Using buttons together"),o.a.createElement("p",null,"When you use buttons next to each other you have to wrap them in a ",o.a.createElement(c.Property,{value:".button-group"}),"."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{type:"primary",label:"Activate"}),"\n",o.a.createElement(u.a,{type:"secondary",label:"Disable"}),"\n",o.a.createElement(u.a,{type:"danger",label:"Delete"}),"\n")))},w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"sizes"},"Sizes"),o.a.createElement("p",null,"For a different sized button add ",o.a.createElement(c.Property,{value:".btn-lg"}),", ",o.a.createElement(c.Property,{value:".btn-sm"})," or ",o.a.createElement(c.Property,{value:".btn-xs"}),"."),o.a.createElement("h3",null,"Large"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{size:"lg",type:"primary",label:"Large button"}),"\n",o.a.createElement(u.a,{size:"lg",type:"secondary",label:"Large button"}),"\n")),o.a.createElement("h3",null,"Small"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{size:"sm",type:"primary",label:"Small button"}),"\n",o.a.createElement(u.a,{size:"sm",type:"secondary",label:"Small button"}),"\n")),o.a.createElement("h3",null,"Extra small"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{size:"xs",type:"primary",label:"Extra small button"}),"\n",o.a.createElement(u.a,{size:"xs",type:"secondary",label:"Extra small button"}),"\n")),o.a.createElement("h3",null,"Block level"),o.a.createElement("p",null,"Create block level buttons—those that span the full width of a parent by adding ",o.a.createElement(c.Property,{value:".btn-block"}),"."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{fullWidth:!0,type:"primary",label:"Block level button"}),"\n",o.a.createElement(u.a,{fullWidth:!0,type:"secondary",label:"Block level button"}),"\n")))},P=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"active-state"},"Active state"),o.a.createElement("p",null,"Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. ",o.a.createElement("b",null,"There’s no need to add a class to ",o.a.createElement(i.a,{className:"language-html"},"<button>"),"s as they use a pseudo-class.")," However, you can still force the same active appearance with ",o.a.createElement(c.Property,{value:".active"})," (and include the ",o.a.createElement(c.Attribute,{name:"aria-pressed",value:"true"})," attribute) should you need to replicate the state programmatically."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{href:"#",active:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(u.a,{href:"#",active:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(u.a,{href:"#",active:!0,type:"danger",label:"Danger"}),"\n")))},k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled-state"},"Disabled state"),o.a.createElement("p",null,"Make buttons look inactive by adding the ",o.a.createElement(c.Attribute,{name:"disabled"})," boolean attribute to any ",o.a.createElement(i.a,{className:"language-html"},"<button>")," element."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{disabled:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(u.a,{disabled:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(u.a,{disabled:!0,type:"danger",label:"Danger"}),"\n")),o.a.createElement("p",null,"Disabled buttons using the ",o.a.createElement(i.a,{className:"language-html"},"<a>")," element behave a bit different:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.a,{className:"language-html"},"<a>"),"s do not support the ",o.a.createElement(c.Attribute,{name:"disabled"}),"attribute, so you must add the ",o.a.createElement(c.Property,{value:".disabled"})," class to make it visually appear disabled."),o.a.createElement("li",null,"Some future-friendly styles are included to disable all ",o.a.createElement(c.Property,{value:"pointer-events"})," on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all."),o.a.createElement("li",null,"Disabled buttons should include the ",o.a.createElement(c.Attribute,{name:"aria-disabled",value:"true"})," attribute to indicate the state of the element to assistive technologies.")),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{href:"#",disabled:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(u.a,{href:"#",disabled:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(u.a,{href:"#",disabled:!0,type:"danger",label:"Danger"}),"\n")),o.a.createElement(s.a,{type:"warning"},o.a.createElement("h5",null,"Link functionality caveat"),o.a.createElement("p",null,"The ",o.a.createElement(c.Property,{value:".disabled"})," class uses ",o.a.createElement(c.Property,{value:"pointer-events: none"})," to try to disable the link functionality of ",o.a.createElement(i.a,{className:"language-html"},"<a>"),"s, but that CSS property is not yet standardized. In addition, even in browsers that do support ",o.a.createElement(c.Property,{value:"pointer-events: none"}),", keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a ",o.a.createElement(c.Property,{value:'tabindex="-1"'})," attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.")))},T=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-icons"},"Usage with icons"),o.a.createElement("p",null,"To use a button with an icon simply put the icon markup inside the ",o.a.createElement(i.a,{className:"language-html"},"<button>"),"."),o.a.createElement("p",null,"Read more about icon usage here ",o.a.createElement(a.Link,{to:"/docs/core/icons"},"here"),"."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{icon:"cloud",type:"primary",label:"Primary"}),"\n\n",o.a.createElement(u.a,{icon:"cloud",type:"secondary",label:"Secondary"}),"\n",o.a.createElement(u.a,{icon:"cloud",type:"danger",label:"Danger"}),"\n")))},O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-loader"},"Button loader"),o.a.createElement("p",null,"To use a button with a loader simply add the attribute ",o.a.createElement(c.Attribute,{data:!0,name:"button-loader"})," to add the required markup for the loader component. Add class ",o.a.createElement(c.Property,{value:".loading"})," to display the loader."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(u.a,{type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(u.a,{type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("h3",null,"Disabled loader"),o.a.createElement("p",null,o.a.createElement(c.Property,{value:".loading"})," with ",o.a.createElement(c.Attribute,{name:"disabled"})),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{disabled:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(u.a,{disabled:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(u.a,{disabled:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("h3",null,"Outline loader"),o.a.createElement("p",null,o.a.createElement(c.Property,{value:".loading"})," with ",o.a.createElement(c.Property,{value:".outline"})),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(u.a,{outline:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(u.a,{outline:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(u.a,{outline:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("h3",null,"The markup"),o.a.createElement("p",null,"Adding the attribute ",o.a.createElement(c.Attribute,{data:!0,name:"button-loader"})," to a button component will produce the following html:"),o.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement("button",{className:"btn btn-default loading",type:"button","data-button-loader":!0},"\n\t","Default","\n\t",o.a.createElement("div",{className:"loader"},"\n\t\t",o.a.createElement("ul",{className:"loader-icon"},"\n\t\t\t",o.a.createElement("li",null),"\n\t\t\t",o.a.createElement("li",null),"\n\t\t\t",o.a.createElement("li",null),"\n\t\t"),"\n\t"),"\n")),o.a.createElement(s.a,{type:"warning"},o.a.createElement("h5",null,"Including the loader html"),o.a.createElement("p",null,"If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you do ",o.a.createElement("b",null,"not")," add the attribute ",o.a.createElement(c.Attribute,{data:!0,name:"button-loader"}),".")))},N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,y(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,l["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){m.button.init()}},{key:"render",value:function(){return o.a.createElement(c.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Use our button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."),o.a.createElement(h,null),o.a.createElement(g,null),o.a.createElement(E,null),o.a.createElement(v,null),o.a.createElement(w,null),o.a.createElement(P,null),o.a.createElement(k,null),o.a.createElement(T,null),o.a.createElement(O,null))}}])&&d(n.prototype,a),r&&d(n,r),t}();t.default=N}}]);
//# sourceMappingURL=doc-route.chunk_4.js.map?bfba06ffe707f0116816