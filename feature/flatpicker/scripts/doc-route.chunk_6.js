(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[54,3,46,47,48,49,51,52,53],{251:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),o=n(1),i=n.n(o),l=n(2),c=n.n(l),u=n(201),s=n(480);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=p(this,o.call.apply(o,[this].concat(a)))).history=Object(u.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(s.a,{history:this.history,children:this.props.children})},l}(i.a.Component);m.propTypes={basename:c.a.string,forceRefresh:c.a.bool,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var d=m;function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=f(this,o.call.apply(o,[this].concat(a)))).history=Object(u.b)(t.props),f(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(s.a,{history:this.history,children:this.props.children})},l}(i.a.Component);h.propTypes={basename:c.a.string,getUserConfirmation:c.a.func,hashType:c.a.oneOf(["hashbang","noslash","slash"]),children:c.a.node};var b=h,y=n(108),v=n(203);function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=E(this,o.call.apply(o,[this].concat(a)))).history=Object(u.d)(t.props),E(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(v.a,{history:this.history,children:this.props.children})},l}(i.a.Component);g.propTypes={initialEntries:c.a.array,initialIndex:c.a.number,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var w=g,k=n(481),O=n(20),T=n.n(O);var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){T()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(i.a.Component);x.propTypes={when:c.a.bool,message:c.a.oneOfType([c.a.func,c.a.string]).isRequired},x.defaultProps={when:!0},x.contextTypes={router:c.a.shape({history:c.a.shape({block:c.a.func.isRequired}).isRequired}).isRequired};var P=x,C=n(495),Y=n(202),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var M=function(e){return"/"===e.charAt(0)?e:"/"+e},D=function(e,t){return e?N({},t,{pathname:M(e)+t.pathname}):t},R=function(e){return"string"==typeof e?e:Object(u.e)(e)},S=function(e){return function(){T()(!1,"You cannot %s with <StaticRouter>",e)}},A=function(){},_=function(o){function l(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r=j(this,o.call.apply(o,[this].concat(n)))).createHref=function(e){return M(r.props.basename+R(e))},r.handlePush=function(e){var t=r.props,n=t.basename,a=t.context;a.action="PUSH",a.location=D(n,Object(u.c)(e)),a.url=R(a.location)},r.handleReplace=function(e){var t=r.props,n=t.basename,a=t.context;a.action="REPLACE",a.location=D(n,Object(u.c)(e)),a.url=R(a.location)},r.handleListen=function(){return A},r.handleBlock=function(){return A},j(r,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},l.prototype.componentWillMount=function(){r()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},l.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),a=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["basename","context","location"]),r={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=M(e);return 0!==t.pathname.indexOf(n)?t:N({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(u.c)(n)),push:this.handlePush,replace:this.handleReplace,go:S("go"),goBack:S("goBack"),goForward:S("goForward"),listen:this.handleListen,block:this.handleBlock};return i.a.createElement(v.a,N({},a,{history:r}))},l}(i.a.Component);_.propTypes={basename:c.a.string,context:c.a.object.isRequired,location:c.a.oneOfType([c.a.string,c.a.object])},_.defaultProps={basename:"",location:"/"},_.childContextTypes={router:c.a.object.isRequired};var L=_,q=n(483),F=n(497).a,V=n(94).a,H=n(482);n.d(t,"BrowserRouter",function(){return d}),n.d(t,"HashRouter",function(){return b}),n.d(t,"Link",function(){return y.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return k.a}),n.d(t,"Prompt",function(){return P}),n.d(t,"Redirect",function(){return C.a}),n.d(t,"Route",function(){return Y.a}),n.d(t,"Router",function(){return s.a}),n.d(t,"StaticRouter",function(){return L}),n.d(t,"Switch",function(){return q.a}),n.d(t,"generatePath",function(){return F}),n.d(t,"matchPath",function(){return V}),n.d(t,"withRouter",function(){return H.a})},484:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),r=n.n(a),o=n(2),l=n.n(o),i=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},i.propTypes={value:l.a.string.isRequired},t.default=c},485:function(e,t,n){"use strict";n.r(t);var a=n(484);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(487);n.d(t,"ComponentPreview",function(){return r.default});var o=n(493);n.d(t,"DocContainer",function(){return o.default});var l=n(494);n.d(t,"DocHeading",function(){return l.default});var i=n(488);n.d(t,"DocToc",function(){return i.default});var c=n(489);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(490);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(491);n.d(t,"Icon",function(){return s.default});var p=n(492);n.d(t,"PxScript",function(){return p.default})},486:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(2),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?i.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?i.a.createElement("p",null,o):null,l?"\n":"",l?i.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},487:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),r=n(2),o=n.n(r),m=n(498),l=n(499),d=n.n(l),f=n(500);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,i=e.removeList,t=e.showCasePanel,n=e.codeFigure,c=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&c)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?u(e):i?s(e):Object(m.renderToStaticMarkup)(e)});else if("html"===r)n+=o?u(a):i?s(a):Object(m.renderToStaticMarkup)(a);else switch(b(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",p.a.createElement("figure",null,p.a.createElement(f.a,h({},f.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};i.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=i},488:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(2),r=n.n(a),i=n(496);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=s(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(i.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),r}();d.propTypes={component:r.a.func.isRequired},t.default=d},489:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(486);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},490:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(486);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},491:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},492:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(2),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return i.a.createElement("span",{key:t},e,t<l.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,a),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},o),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},493:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=n.n(o),i=n(485),c=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:l.a.bool},t.default=c},496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=b,t.NavHashLink=y;var o=c(n(1)),l=c(n(2)),i=n(251);function c(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function d(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function f(){var e=document.getElementById(u);return null!==e&&(m(e),d(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function b(e){return h(e,i.Link)}function y(e){return h(e,i.NavLink)}var v={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};y.propTypes=b.propTypes=v},502:function(e,t,n){"use strict";n.d(t,"a",function(){return N});var P=n(1),C=n.n(P),a=n(2),r=n.n(a),o=n(204),Y=n.n(o),N=function(e){var t=e.type,n=e.value,a=e.color,r=e.disabled;return"button"===t?C.a.createElement("button",{type:"button",className:"btn btn-".concat(a),disabled:r},n):C.a.createElement("span",{className:"input-group-addon"},"icon"===t?C.a.createElement("i",{className:"material-icons"},n):n)},j=function(e){var t=e.icon;return C.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",C.a.createElement("i",{className:"material-icons"},t),"\n\t")},l=function(e){var t=e.id,n=e.type,a=e.placeholder,r=e.pattern,o=e.validate,l=e.required,i=e.defaultValue,c=e.autoComplete,u=e.disabled,s=e.readOnly,p=e.label,m=e.validationState,d=e.selectOptions,f=e.prefixValue,h=e.prefixType,b=e.prefixBtnColor,y=e.postfixValue,v=e.postfixType,E=e.postfixBtnColor,g=e.feedbackIcon,w=e.helpBlock,k=e.errorMessage,O=e.successMessage,T={type:n||null,className:"form-control",id:t||null,placeholder:a||null,defaultValue:i||"",disabled:u||null,readOnly:s||null,autoComplete:c||null,required:l||null,pattern:r?"":null,"data-validate":o?"":null},x=Y()("input-group",m?"has-".concat(m):null,g?"has-feedback":null);return C.a.createElement("div",{className:"form-group"},"\n",p?C.a.createElement("label",{htmlFor:t},p):null,p?"\n":null,C.a.createElement("div",{className:x},"\n",f?C.a.createElement(N,{type:h,value:f,color:b,disabled:u}):null,f?"\n":null,"textarea"===n?C.a.createElement("textarea",T):"select"===n?C.a.createElement("select",{className:"form-control",disabled:u,readOnly:s},"\n\t\t",d.map(function(e,t){return C.a.createElement(P.Fragment,{key:e+t},C.a.createElement("option",null,e),t!==d.length-1?"\n\t\t":"")}),"\n\t"):C.a.createElement("input",T),"\n",g?C.a.createElement(j,{icon:g}):null," ",g?"\n":null,y?C.a.createElement(N,{type:v,value:y,color:E,disabled:u}):null,y?"\n":null),w?C.a.createElement("div",{className:"help-block","data-success":O||null,"data-error":k||null},w):null)};l.propTypes={type:r.a.string.isRequired,id:r.a.string,placeholder:r.a.string,pattern:r.a.string,validate:r.a.bool,required:r.a.bool,defaultValue:r.a.string,autoComplete:r.a.string,disabled:r.a.bool,readOnly:r.a.bool,label:r.a.string,validationState:r.a.oneOf(["success","error",""]),selectOptions:r.a.array,prefixValue:r.a.string,prefixType:r.a.oneOf(["button","icon",""]),prefixBtnColor:r.a.oneOf(["primary","secondary","danger"]),postfixValue:r.a.string,postfixType:r.a.oneOf(["button","icon",""]),postfixBtnColor:r.a.oneOf(["primary","secondary","danger"]),feedbackIcon:r.a.string,helpBlock:r.a.oneOfType([r.a.string,r.a.bool]),errorMessag:r.a.string,successMessag:r.a.string},t.b=l},506:function(e,t,n){"use strict";var a=n(1),d=n.n(a),r=n(2),o=n.n(r),l=function(e){var t=e.id,n=e.checked,a=e.disabled,r=e.label,o={type:"checkbox",id:t||null,disabled:a||null,defaultChecked:n||null};return d.a.createElement("div",{className:"checkbox"},"\n",d.a.createElement("input",o),"\n",r?d.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};l.propTypes={id:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var i=l,f=n(502),c=function(e){var t=e.format,n=e.time,a=e.min,r=e.max,o=e.months,l=e.value,i=e.label,c=e.required,u=e.prefixValue,s=e.prefixType,p=e.id,m={className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":t||null,"data-datepicker-time":n||null,"data-datepicker-min":a||null,"data-datepicker-max":r||null,"data-datepicker-value":l||null,"data-datepicker-months":o||null,"data-required":c||null,id:p};return i?d.a.createElement("div",{className:"form-group"},"\n",d.a.createElement("label",{htmlFor:p||null},i),"\n",d.a.createElement("div",{className:"input-group"},"\n",u?d.a.createElement(f.a,{type:s,value:u}):null,"\n",d.a.createElement("input",m),"\n")):d.a.createElement("input",m)};c.propTypes={format:o.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:o.a.bool,min:o.a.string,max:o.a.string,months:o.a.string,value:o.a.string,label:o.a.string,id:o.a.string,required:o.a.bool};var u=c,s=function(e){var t=e.text,n=e.label;return d.a.createElement("div",{className:"form-group"},"\n",n?d.a.createElement("label",null,n):null,n?"\n":null,d.a.createElement("span",{className:"form-control-text"},t),"\n")};s.propTypes={text:o.a.string.isRequired,label:o.a.string};var p=s,m=function(e){var t=e.id,n=e.checked,a=e.disabled,r=e.label,o={type:"radio",id:t||null,name:e.name||null,disabled:a||null,defaultChecked:n||null};return d.a.createElement("div",{className:"radio"},"\n",d.a.createElement("input",o),"\n",r?d.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};m.propTypes={id:o.a.string,name:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var h=m,b=function(e){var t=e.name,n=e.min,a=e.max,r=e.step,o=e.color,l=e.value,i=e.disabled,c=e.valueLabel,u=e.valueLabelPrefix,s=e.valueLabelPostfix,p=e.valueLabelPosition,m={type:"range",name:t,min:n,max:a,step:r,defaultValue:l,disabled:i};return d.a.createElement("div",{className:"rangeslider rangeslider-".concat(o||"brand"," label-").concat(p||"right")},"\n",d.a.createElement("input",m),c?"\n":null,c?d.a.createElement(function(){return d.a.createElement("output",{className:"value-label"},"\n\t\t",d.a.createElement("p",null,"\n\t\t\t",u?d.a.createElement("span",null,u):null,u?"\n\t\t\t":null,d.a.createElement("span",{"data-rs-value":!0},l),"\n\t\t\t",s?d.a.createElement("span",null,s):null,s?"\n\t\t":null),"\n\t")},null):null,c?"\n":null)};b.propTypes={name:o.a.string,min:o.a.number,max:o.a.number,step:o.a.number,color:o.a.oneOf(["brand","neutral","default"]),value:o.a.number,disabled:o.a.bool,valueLabel:o.a.bool,valueLabelPrefix:o.a.string,valueLabelPostfix:o.a.string,valueLabelPosition:o.a.string};var y=b,v=function(e){var t=e.id,n=e.checked,a=e.disabled,r=e.label,o={type:"checkbox",id:t||null,disabled:a||null,defaultChecked:n||null};return d.a.createElement("div",{className:"togglebox"},"\n",d.a.createElement("input",o),"\n",r?d.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};v.propTypes={id:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var E=v;n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return y}),n.d(t,"f",function(){return E})},520:function(e,t,n){"use strict";n.r(t),n.d(t,"SimpleDatepicker",function(){return b}),n.d(t,"InitialValue",function(){return y}),n.d(t,"CustomFormat",function(){return v}),n.d(t,"IncludeTime",function(){return E}),n.d(t,"Required",function(){return g}),n.d(t,"ShowingMultipleMonths",function(){return w}),n.d(t,"DateRange",function(){return k}),n.d(t,"Options",function(){return O});var o=n(1),l=n.n(o),i=n(485),a=n(506),c=n(73),r=n(486);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=window.moment,h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"about-datepickers"},"About"),l.a.createElement("p",null,"Datepickers give a visual presentation of days, months and years. By utilizing the datepicker you can be assured the given input is in the format you expect without having to deal with too much client-side validation. Datepickers should be used for recent dates to avoid having the user click a lot of times to find the required date. If you need a date of birth or something similarly far back, an input field with proper validation will be easier to use."))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"simple-datepicker"},"Simple datepicker"),l.a.createElement("p",null,"A basic datepicker can be made by applying the attribute ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker"})," to an input element inside a ",l.a.createElement(i.Property,{value:".form-group"}),". The basic datepicker has a read-only input field."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(a.b,{label:"Date",prefixType:"icon",prefixValue:"event",id:"simle-datepicker"})))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"initial-value"},"Initial value"),l.a.createElement("p",null,"If you want to set an initial value for your datepicker use ",l.a.createElement(i.Attribute,{data:!0,value:"{your-date}",name:"datepicker-value"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(a.b,{value:f().format("YYYY-MM-DD"),label:"Date",prefixType:"icon",prefixValue:"event",id:"init-value-datepicker"})),l.a.createElement(r.a,{type:"warning"},l.a.createElement("h5",null,"Initial value and format"),l.a.createElement("p",null,"Keep in mind that the datepicker will not insert the initial value if it does not correctly match the set format (",l.a.createElement(i.Attribute,{value:"iso8601"})," if you have not specified a format).")))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"custom-format"},"Custom format"),l.a.createElement("p",null,"To use a custom format include ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-format",value:"[nb|sv|da|fi|en|iso8601(default)]"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(a.b,{label:"nb (norwegian):",value:f().format("DD.MM.YYYY"),format:"nb",prefixType:"icon",prefixValue:"event",id:"nb-datepicker"}),l.a.createElement(a.b,{label:"sv (swedish):",value:f().format("YYYY-MM-DD"),format:"sv",prefixType:"icon",prefixValue:"event",id:"sv-datepicker"}),l.a.createElement(a.b,{label:"da (danish):",value:f().format("DD.MM.YYYY"),format:"da",prefixType:"icon",prefixValue:"event",id:"da-datepicker"}),l.a.createElement(a.b,{label:"fi (finnish):",value:f().format("DD.MM.YYYY"),format:"fi",prefixType:"icon",prefixValue:"event",id:"fi-datepicker"}),l.a.createElement(a.b,{label:"en (english):",value:f().format("DD/MM/YYYY"),format:"en",prefixType:"icon",prefixValue:"event",id:"en-datepicker"}),l.a.createElement(a.b,{label:"iso8601 (robotic):",value:f().format("YYYY-MM-DD"),format:"iso8601",prefixType:"icon",prefixValue:"event",id:"iso8601-datepicker"})))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"include-time"},"Include time"),l.a.createElement("p",null,"Adding time to your datepicker is as easy as using ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-time",value:"true"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(a.b,{time:!0,value:f().format("HH:mm DD.MM.YYYY"),format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"include-time-datepicker"})))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"required"},"Required"),l.a.createElement("p",null,"If you set ",l.a.createElement(i.Attribute,{data:!0,name:"required",value:"true"})," to true it will autopopulate the input after clicking it if no date is selected. Keep in mind that if you do not pass a value to the datepicker it will remain blank if the user does not click the input."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(a.b,{required:!0,label:"Date",prefixType:"icon",prefixValue:"event",id:"required-datepicker"})))},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"showing-multiple-months"},"Showing multiple months"),l.a.createElement("p",null,"If you need to show more than one month in your date picker use the attribute ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-months",value:"[number]"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(a.b,{months:"2",label:"Date",prefixType:"icon",prefixValue:"event",id:"multiple-months-datepicker"})))},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"date-range"},"Date range"),l.a.createElement("p",null,"You can set a range of available dates to select from by using ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-min"})," and ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-max"})),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(a.b,{value:f().format("DD.MM.YYYY"),min:f().subtract(5,"d").format("DD.MM.YYYY"),max:f().add(5,"d").format("DD.MM.YYYY"),months:"2",format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"date-range-datepicker"})),l.a.createElement("p",null,l.a.createElement("b",null,"NOTE:")," Using range with required and no initial value will make the datepicker select current date if a user clicks the input and does not select a date within the range."))},O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"available-options"},"Available options"),l.a.createElement("p",null,"Options available through ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker"}),"...")," Keep in mind that setting any of these values will render them true, so setting an attribute to ",l.a.createElement(i.Attribute,{value:"false"})," will still render it true.",l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Attribute"),l.a.createElement("th",null,"Default value"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-value"})),l.a.createElement("td",null),l.a.createElement("td",null,"Value used to initialize calendar. Set this value with the same format currently set for the datepicker (including time if you have enabled that).")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-format"})),l.a.createElement("td",null,l.a.createElement(i.Attribute,{value:"iso8601"})),l.a.createElement("td",null,l.a.createElement("p",null,"Format string used for the input field and names for days and months. All have the same time format (HH:mm), and starts the week on monday (1)."),l.a.createElement("p",null,"The following options are available:"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"nb"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"sv"}),": YYYY-MM-DD"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"da"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"fi"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"en"}),": DD/MM/YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"iso8601"}),": YYYY-MM-DD (default)")))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-time"})),l.a.createElement("td",null),l.a.createElement("td",null,"If the calendar shows the current time and allows you to change it using a dropdown.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-months"})),l.a.createElement("td",null,l.a.createElement(i.Attribute,{value:"1"})),l.a.createElement("td",null,"Number of months to display in the datepicker.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-min"})),l.a.createElement("td",null),l.a.createElement("td",null,"Disallow dates before min.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-max"})),l.a.createElement("td",null),l.a.createElement("td",null,"Disallow dates past max.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"required"})),l.a.createElement("td",null),l.a.createElement("td",null,"Forces a value in the input field, but only if an initial value is set or the user clicks/tabs the input.")))))},T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){c.datepicker.init()}},{key:"render",value:function(){return l.a.createElement(i.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Datepickers makes it easy to get dates from your users. With datepickers you do not have to worry about how your users write the given date, alleviating the need to do format validation."),l.a.createElement(h,null),l.a.createElement(b,null),l.a.createElement(y,null),l.a.createElement(v,null))}}])&&s(n.prototype,a),r&&s(n,r),t}();t.default=T}}]);
//# sourceMappingURL=doc-route.chunk_6.js.map?a897b9a595d8fcc263bd