(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[20,3,46,47,48,49,51,52,53],{167:function(e,t,n){"use strict";n.r(t);var a=n(23),o=n.n(a),r=n(1),c=n.n(r),l=n(2),i=n.n(l),u=n(117),s=n(395);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(r){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t=p(this,r.call.apply(r,[this].concat(a)))).history=Object(u.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,r),l.prototype.componentWillMount=function(){o()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(s.a,{history:this.history,children:this.props.children})},l}(c.a.Component);m.propTypes={basename:i.a.string,forceRefresh:i.a.bool,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var f=m;function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(r){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t=d(this,r.call.apply(r,[this].concat(a)))).history=Object(u.b)(t.props),d(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,r),l.prototype.componentWillMount=function(){o()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(s.a,{history:this.history,children:this.props.children})},l}(c.a.Component);h.propTypes={basename:i.a.string,getUserConfirmation:i.a.func,hashType:i.a.oneOf(["hashbang","noslash","slash"]),children:i.a.node};var y=h,b=n(81),E=n(119);function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(r){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t=v(this,r.call.apply(r,[this].concat(a)))).history=Object(u.d)(t.props),v(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,r),l.prototype.componentWillMount=function(){o()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(E.a,{history:this.history,children:this.props.children})},l}(c.a.Component);g.propTypes={initialEntries:i.a.array,initialIndex:i.a.number,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var w=g,O=n(396),k=n(16),T=n.n(k);var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){T()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(c.a.Component);j.propTypes={when:i.a.bool,message:i.a.oneOfType([i.a.func,i.a.string]).isRequired},j.defaultProps={when:!0},j.contextTypes={router:i.a.shape({history:i.a.shape({block:i.a.func.isRequired}).isRequired}).isRequired};var C=j,P=n(411),R=n(118),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?N({},t,{pathname:x(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(u.e)(e)},A=function(e){return function(){T()(!1,"You cannot %s with <StaticRouter>",e)}},H=function(){},M=function(r){function l(){var e,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=o=S(this,r.call.apply(r,[this].concat(n)))).createHref=function(e){return x(o.props.basename+L(e))},o.handlePush=function(e){var t=o.props,n=t.basename,a=t.context;a.action="PUSH",a.location=_(n,Object(u.c)(e)),a.url=L(a.location)},o.handleReplace=function(e){var t=o.props,n=t.basename,a=t.context;a.action="REPLACE",a.location=_(n,Object(u.c)(e)),a.url=L(a.location)},o.handleListen=function(){return H},o.handleBlock=function(){return H},S(o,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,r),l.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},l.prototype.componentWillMount=function(){o()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},l.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),a=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["basename","context","location"]),o={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=x(e);return 0!==t.pathname.indexOf(n)?t:N({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(u.c)(n)),push:this.handlePush,replace:this.handleReplace,go:A("go"),goBack:A("goBack"),goForward:A("goForward"),listen:this.handleListen,block:this.handleBlock};return c.a.createElement(E.a,N({},a,{history:o}))},l}(c.a.Component);M.propTypes={basename:i.a.string,context:i.a.object.isRequired,location:i.a.oneOfType([i.a.string,i.a.object])},M.defaultProps={basename:"",location:"/"},M.childContextTypes={router:i.a.object.isRequired};var I=M,q=n(398),F=n(412).a,D=n(66).a,W=n(397);n.d(t,"BrowserRouter",function(){return f}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return O.a}),n.d(t,"Prompt",function(){return C}),n.d(t,"Redirect",function(){return P.a}),n.d(t,"Route",function(){return R.a}),n.d(t,"Router",function(){return s.a}),n.d(t,"StaticRouter",function(){return I}),n.d(t,"Switch",function(){return q.a}),n.d(t,"generatePath",function(){return F}),n.d(t,"matchPath",function(){return D}),n.d(t,"withRouter",function(){return W.a})},399:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),a,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&a?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},400:function(e,t,n){"use strict";n.r(t);var a=n(399);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var o=n(402);n.d(t,"ComponentPreview",function(){return o.default});var r=n(408);n.d(t,"DocContainer",function(){return r.default});var l=n(409);n.d(t,"DocHeading",function(){return l.default});var c=n(403);n.d(t,"DocToc",function(){return c.default});var i=n(404);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(405);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(406);n.d(t,"Icon",function(){return s.default});var p=n(407);n.d(t,"PxScript",function(){return p.default})},401:function(e,t,n){"use strict";var a=n(1),c=n.n(a),o=n(2),r=n.n(o),l=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,r=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,r?"\n":"",r?c.a.createElement("p",null,r):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=l},402:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),o=n(2),r=n.n(o),m=n(413),l=n(414),f=n.n(l),d=n(415);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,o=e.language,r=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===o&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===o&&a&&"function"==typeof a.map)a.map(function(e){n+=r?u(e):c?s(e):Object(m.renderToStaticMarkup)(e)});else if("html"===o)n+=r?u(a):c?s(a):Object(m.renderToStaticMarkup)(a);else switch(y(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(o){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:o}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,r=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",h({key:e+t},o({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},r({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},t.default=c},403:function(e,t,n){"use strict";n.r(t);var r=n(1),l=n.n(r),a=n(2),o=n.n(a),c=n(410);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function o(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=s(this,p(o).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(o,r["Component"]),t=o,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),o}();f.propTypes={component:o.a.func.isRequired},t.default=f},404:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(401);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},405:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(401);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},406:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(2),l=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(r).a.string.isRequired},t.default=l},407:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(2),r=n.n(o),l=function(e){var t,n,a=e.component,o=e.subComponents,r=e.func,l=e.params;return o&&(n=o.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=l},408:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=n(400),i=function(e){var t=e.docToc,n=e.children,a=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(a,null),t?o.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},410:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var r=i(n(1)),l=i(n(2)),c=n(167);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function f(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(m(e),f(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return r.default.createElement(e,a({},n,{onClick:function(e){f(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===o(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),t.children)}function y(e){return h(e,c.Link)}function b(e){return h(e,c.NavLink)}var E={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=y.propTypes=E},444:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return d}),n.d(t,"Options",function(){return h}),n.d(t,"PremadeToasts",function(){return y}),n.d(t,"CustomHtml",function(){return b});var r=n(1),l=n.n(r),a=n(81),c=n(400),o=n(57),i=n(401);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"You want jam on that toast?"),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'px.toast({ html: "I am a toast!" });'),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0,dangerousHTML:!0},'<button onclick="px.toast({ html: \'I am a toast!\' })" class="btn btn-primary">Toast!</button>'),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(o.toast)({html:"I am a toast!"})}},"Click for toast!")),l.a.createElement(i.a,{type:"warning"},l.a.createElement("h5",null,"Content restriction"),l.a.createElement("p",null,"Don’t put too much text in toasts as they are meant to be visible for only a short amount of time. Due to the time restriction you should also avoid putting vital information in them. If you wish to give some sort of feedback to the user see ",l.a.createElement(a.a,{to:"/docs/components/dialog"},"dialog")," or ",l.a.createElement(a.a,{to:"/docs/components/sheet"},"sheet"),".")))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"options"},"Options"),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"html"),l.a.createElement("td",null,"String"),l.a.createElement("td",null,l.a.createElement(c.Attribute,{value:'""'})),l.a.createElement("td",null,"The HTML content of the Toast.")),l.a.createElement("tr",null,l.a.createElement("td",null,"type"),l.a.createElement("td",null,"String"),l.a.createElement("td",null,l.a.createElement(c.Attribute,{value:'""'})),l.a.createElement("td",null,"Premade alert types; ",l.a.createElement(c.Attribute,{value:"success"}),", ",l.a.createElement(c.Attribute,{value:"neutral"}),", ",l.a.createElement(c.Attribute,{value:"warning"})," and ",l.a.createElement(c.Attribute,{value:"danger"})," are available.")),l.a.createElement("tr",null,l.a.createElement("td",null,"dismissable"),l.a.createElement("td",null,"Boolean"),l.a.createElement("td",null,l.a.createElement(c.Attribute,{value:"true"})),l.a.createElement("td",null,"Wether or not the alert should be dismissable by the user (close button).")),l.a.createElement("tr",null,l.a.createElement("td",null,"icon"),l.a.createElement("td",null,"String"),l.a.createElement("td",null,l.a.createElement(c.Attribute,{value:'""'})),l.a.createElement("td",null,"Custom icon for the toast. See ",l.a.createElement(a.a,{to:"/docs/core/icons"},"icons")," for more info.")),l.a.createElement("tr",null,l.a.createElement("td",null,"displayLength"),l.a.createElement("td",null,"Number"),l.a.createElement("td",null,l.a.createElement(c.Attribute,{value:"4000"})),l.a.createElement("td",null,"Length in ms the Toast stays before dismissal.")),l.a.createElement("tr",null,l.a.createElement("td",null,"classes"),l.a.createElement("td",null,"Array of strings"),l.a.createElement("td",null,l.a.createElement(c.Attribute,{value:"[]"})),l.a.createElement("td",null,"Classes to be added to the toast element.")),l.a.createElement("tr",null,l.a.createElement("td",null,"completeCallback"),l.a.createElement("td",null,"Function"),l.a.createElement("td",null,l.a.createElement(c.Attribute,{value:"null"})),l.a.createElement("td",null,"Callback function called when toast is dismissed.")))))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"premade-toasts"},"Premade toasts"),l.a.createElement("p",null,"There are four premade toast styles other than the default one; ",l.a.createElement(c.Attribute,{value:"neutral"}),", ",l.a.createElement(c.Attribute,{value:"success"}),", ",l.a.createElement(c.Attribute,{value:"warning"})," and ",l.a.createElement(c.Attribute,{value:"danger"}),". Apply the desired one to the options object and be amazed!"),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0,dangerousHTML:!0},'<button type="button" onclick="px.toast({ html: \'I am a neutral toast!\', type: \'neutral\' })" class="btn btn-primary">Neutral toast</button>','<button type="button" onclick="px.toast({ html: \'I am a success toast!\', type: \'success\' })" class="btn btn-primary">Success toast</button>','<button type="button" onclick="px.toast({ html: \'I am a warning toast!\', type: \'warning\' })" class="btn btn-primary">Warning toast</button>','<button type="button" onclick="px.toast({ html: \'I am a danger toast!\', type: \'danger\' })" class="btn btn-primary">Danger toast</button>'),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(o.toast)({html:"I am a toast!",type:"neutral"})}},"Neutral toast"),"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(o.toast)({html:"I am a toast!",type:"success"})}},"Success toast"),"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(o.toast)({html:"I am a toast!",type:"warning"})}},"Warning toast"),"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(o.toast)({html:"I am a toast!",type:"danger"})}},"Danger toast")))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"custom-html"},"Custom HTML"),l.a.createElement("p",null,"You can pass in an HTML String as the first argument as well. Take a look at the example below, where we pass in text as well as a flat button. If you call an external function instead of in-line JavaScript, you will not need to escape quotation marks."),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},"const toastHtml = \"<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class='btn toast-action'>Undo</button>\";","\n","px.toast({ html: toastHtml });"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(o.toast)({html:'<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class="btn toast-action">Undo</button>'})}},"Toast with action")))},E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return l.a.createElement(c.DocContainer,null,l.a.createElement(c.ExperimentalComponentAlert,null),l.a.createElement("p",{className:"lead"},"Toasts can be used as a way to give feedback to a user. Use it to display short messages that something has happened that will not be immediatley apparent on the website. This can be everything from a server query to saving some user settings."),l.a.createElement(d,null),l.a.createElement(h,null),l.a.createElement(y,null),l.a.createElement(b,null))}}])&&s(n.prototype,a),o&&s(n,o),t}();t.default=E}}]);
//# sourceMappingURL=doc-route.chunk_20.js.map?de7c43d5653141a851c8