(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[18,2,57,58,59,60,61,63,87],{361:function(e,t,n){"use strict";n.r(t);var a=n(362);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(364);n.d(t,"ComponentPreview",function(){return r.default});var o=n(369);n.d(t,"DocContainer",function(){return o.default});var c=n(365);n.d(t,"DocHeading",function(){return c.default});var l=n(366);n.d(t,"DocToc",function(){return l.default});var i=n(370);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(371);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(367);n.d(t,"Icon",function(){return s.default});var m=n(372);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(368);n.d(t,"DgScript",function(){return p.default})},362:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var a=n(1),r=n.n(a),o=n(14),c=n.n(o),l=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},l.propTypes={value:c.a.string.isRequired},t.default=i},363:function(e,t,n){"use strict";n.r(t),n.d(t,"ComplexAlert",function(){return u});var a=n(1),r=n.n(a),o=n(14),c=n.n(o),l=n(361),i=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,c=e.text,l=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,c?"\n":"",c?r.a.createElement("p",null,c):null,l?"\n":"",l?r.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},u=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,c=e.headerText,i=e.children;return r.a.createElement("div",{id:t,className:"alert alert-complex alert-".concat(n)},r.a.createElement("header",{className:"alert-header"},a?r.a.createElement(r.a.Fragment,null,"\n"," ",r.a.createElement(l.Icon,{classNames:"alert-icon",type:a})):null,c?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("h3",null,c),"\n"):null,o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement(l.Icon,{type:"close"}),"\n\t"):null,"\n"),i?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("div",{className:"alert-body"},i),"\n"):null)};i.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},t.default=i},364:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),l=n(459),i=n(460),u=n.n(i),s=n(461);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,c=e.removeList,i=e.showCasePanel,f=e.showCasePanelSm,d=e.codeFigure,v=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(l.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(l.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel".concat(f?" showcasepanel-sm":"")},t)},null):null,d?r.a.createElement(function(){var e="";if("html"===n&&v)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?y(t):c?h(t):Object(l.renderToStaticMarkup)(t)});else if("html"===n)e+=a?y(t):c?h(t):Object(l.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},c({token:e,key:t})))}))}))}))},null):null)};f.propTypes={language:c.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:c.a.bool,hideValue:c.a.bool,removeList:c.a.bool,showCasePanel:c.a.bool,showCasePanelSm:c.a.bool,codeFigure:c.a.bool,dangerousHTML:c.a.bool},t.default=f},365:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(41);t.default=Object(o.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),r.a.createElement("h1",null,t)})},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),l=n(456);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(l.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,o),c&&u(n,c),t}();d.propTypes={component:c.a.func.isRequired},t.default=d},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=function(e){var t=e.type,n=e.classNames;return r.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};c.propTypes={type:n.n(o).a.string.isRequired},t.default=c},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),l=function(e){var t,n,a=e.component,o=e.subComponents,c=e.func,l=e.params;return o&&(n=o.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<l.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"dg"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},c),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},t.default=l},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),l=n(361),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement(l.DocHeading,null),r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(l.DocToc,{component:a}):null))};i.propTypes={docToc:c.a.bool},t.default=i},370:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(363);t.default=function(){return r.a.createElement(o.default,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},371:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(363);t.default=function(){return r.a.createElement(o.default,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},372:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return l}),n.d(t,"CloseDocs",function(){return i});var a=n(1),r=n.n(a),o=n(50),c=n(361),l=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(c.DgScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("td",null,"Opens the given ",t.toLowerCase())))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(c.DgScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("td",null,"Closes the given ",t.toLowerCase())))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Function"),r.a.createElement("th",{scope:"col"},"Purpose"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(c.DgScript,{component:t,func:"init"})),r.a.createElement("td",null,r.a.createElement(o.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase())),n?r.a.createElement(l,{componentName:t}):null,a?r.a.createElement(i,{componentName:t}):null)))}},384:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),l=n(458),i=n.n(l);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,p(t).call(this,e))).state={active:"main-0",activeParent:null},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,(o=[{key:"setActive",value:function(e,t){e.preventDefault();var n=e.target.closest(".submenu");n?(this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),n.classList.add("submenu-active-parent"),this.setState({activeParent:n})):this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=t.vertsize,o=t.widesize,c=i()("nav",a?"nav-".concat(a,"-vertical"):"",o?"nav-".concat(o,"-vertical-wide"):"");return r.a.createElement("nav",{className:c},r.a.createElement("ul",null,n.map(function(t,n){var a=t.name,o=t.icon,c=t.subItems;return r.a.createElement("li",{key:"nav-item-".concat(a,"-").concat(n)},"\n",c?r.a.createElement("div",{className:"submenu"},"\n",r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"sub-".concat(n,"-0"))}},r.a.createElement("i",{className:"material-icons"},o),"\n",r.a.createElement("span",null,a),"\n"),r.a.createElement("ul",null,c.map(function(t,a){return r.a.createElement("li",{key:"nav-subItems-".concat(t,"-").concat(a),className:e.state.active==="sub-".concat(n,"-").concat(a)?"active":null},r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"sub-".concat(n,"-").concat(a))}},r.a.createElement("span",null,t)))}))):r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"main-".concat(n))},className:e.state.active==="main-".concat(n)?"active":null},"\n",r.a.createElement("i",{className:"material-icons"},o),"\n",r.a.createElement("span",null,a),"\n"),"\n")})))}}])&&s(n.prototype,o),c&&s(n,c),t}(),v=["xs","sm","md","lg","xl","xxl"];d.propTypes={items:c.a.array.isRequired,vertsize:c.a.oneOf(v),widesize:c.a.oneOf(v)},t.default=d},415:function(e,t,n){"use strict";n.r(t),n.d(t,"StandardNav",function(){return u}),n.d(t,"WithIconsOnly",function(){return s}),n.d(t,"JavascriptMethods",function(){return m});var a=n(1),r=n.n(a),o=n(361),c=n(384),l=window.dg.nav,i=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart",subItems:["Purchase history","Invoice"]},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance"},{name:"Authentication",icon:"fingerprint"}],u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"nav-standard"},"Standard nav"),r.a.createElement("p",null,"To use our reccommended nav add ",r.a.createElement(o.Property,{value:".nav"})," and ",r.a.createElement(o.Property,{value:".nav-<desired_size>-vertical-wide"}),". This gives you a nav with a breakpoint at the size set in the class name. In the example we use ",r.a.createElement(o.Property,{value:"lg"}),", resize this window to see it in action."),r.a.createElement("p",null,"When the nav is in mobile view it will hide menu elements if they total more than 5. Menu elements with a submenu will also be hidden and only viewable when the nav is expanded."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(c.default,{widesize:"lg",items:i})))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"icons-only"},"Icons only"),r.a.createElement("p",null,"If you want to show only icons at a certain breakpoint then include ",r.a.createElement(o.Property,{value:".nav-<desired_size>-vertical"})," with your nav component."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(c.default,{vertsize:"md",widesize:"lg",items:i})))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),r.a.createElement(o.JavascriptDocs,{componentName:"nav",open:!0,close:!0}))};t.default=function(){return Object(a.useEffect)(function(){l.init()}),r.a.createElement(o.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use navs to create a basic navigational element containing links."),r.a.createElement(u,null),r.a.createElement(s,null),r.a.createElement(m,null))}},456:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=y,t.HashLink=h,t.NavHashLink=b;var c=u(n(1)),l=u(n(14)),i=n(50);function u(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,p=null,f=null;function d(){s="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function v(){var e=document.getElementById(s);return null!==e&&(f(e),d(),!0)}function y(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return c.default.createElement(t,r({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===v()&&(null===m&&(m=new MutationObserver(v)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function h(e){return y(e,i.Link)}function b(e){return y(e,i.NavLink)}var E={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};h.propTypes=E,b.propTypes=E},457:function(e,t){(function(t){e.exports=t}).call(this,{})},458:function(e,t,n){var a;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var o={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=r(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var l=c.apply(null,n);l&&e.push(l)}else if("object"===a)for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):"object"===r(n(457))&&n(457)?void 0===(a=function(){return c}.apply(t,[]))||(e.exports=a):window.classNames=c}()}}]);
//# sourceMappingURL=doc-route.chunk_16.js.map?6586cb871f6af1fda960