(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[67,2,57,58,59,60,61,63,75],{361:function(e,t,n){"use strict";n.r(t);var a=n(362);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(364);n.d(t,"ComponentPreview",function(){return r.default});var l=n(369);n.d(t,"DocContainer",function(){return l.default});var o=n(365);n.d(t,"DocHeading",function(){return o.default});var c=n(366);n.d(t,"DocToc",function(){return c.default});var i=n(370);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(371);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(367);n.d(t,"Icon",function(){return s.default});var p=n(372);n.d(t,"JavascriptDocs",function(){return p.default});var m=n(368);n.d(t,"DgScript",function(){return m.default})},362:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},363:function(e,t,n){"use strict";n.r(t),n.d(t,"ComplexAlert",function(){return u});var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(361),i=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,o=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?r.a.createElement("p",null,o):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},u=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,o=e.headerText,i=e.children;return r.a.createElement("div",{id:t,className:"alert alert-complex alert-".concat(n)},r.a.createElement("header",{className:"alert-header"},a?r.a.createElement(r.a.Fragment,null,"\n"," ",r.a.createElement(c.Icon,{classNames:"alert-icon",type:a})):null,o?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("h3",null,o),"\n"):null,l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement(c.Icon,{type:"close"}),"\n\t"):null,"\n"),i?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("div",{className:"alert-body"},i),"\n"):null)};i.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.default=i},364:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(459),i=n(460),u=n.n(i),s=n(461);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,l=e.hideValue,o=e.removeList,i=e.showCasePanel,d=e.showCasePanelSm,f=e.codeFigure,y=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},b=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel".concat(d?" showcasepanel-sm":"")},t)},null):null,f?r.a.createElement(function(){var e="";if("html"===n&&y)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):o?b(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):o?b(t):Object(c.renderToStaticMarkup)(t);else switch(m(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",p({key:e+t},l({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",p({key:t},o({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,showCasePanelSm:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=d},365:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(41);t.default=Object(l.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),r.a.createElement("h1",null,t)})},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(456);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(l=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,l),o&&u(n,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=function(e){var t=e.type,n=e.classNames;return r.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};o.propTypes={type:n.n(l).a.string.isRequired},t.default=o},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=function(e){var t,n,a=e.component,l=e.subComponents,o=e.func,c=e.params;return l&&(n=l.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"dg"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},o),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(361),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement(c.DocHeading,null),r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},370:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(363);t.default=function(){return r.a.createElement(l.default,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},371:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(363);t.default=function(){return r.a.createElement(l.default,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},372:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(1),r=n.n(a),l=n(50),o=n(361),c=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(o.DgScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("td",null,"Opens the given ",t.toLowerCase())))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(o.DgScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("td",null,"Closes the given ",t.toLowerCase())))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Function"),r.a.createElement("th",{scope:"col"},"Purpose"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(o.DgScript,{component:t,func:"init"})),r.a.createElement("td",null,r.a.createElement(l.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase())),n?r.a.createElement(c,{componentName:t}):null,a?r.a.createElement(i,{componentName:t}):null)))}},373:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(458),i=n.n(c);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){var t=e.label,n=e.id,a=e.name,l=e.value,o=e.href,c=e.icon,s=e.loading,p=e.type,m=e.disabled,d=e.btnType,f=e.fullWidth,y=e.pullRight,h=e.input,b=e.outline,v=e.active,E=e.size,g=i()("btn",p?"btn-".concat(p):null,b?"btn-outline":null,E?"btn-".concat(E):null,s?"loading":null,f?"btn-block":null,y?"pull-right":null,v&&o?"active":null,m&&o?"disabled":null),w={href:o,id:n,name:a,defaultValue:l,disabled:o?null:m,active:v&&!o?"":null,role:o?"button":null,type:o?null:d||"button","aria-pressed":!!v||null,"aria-disabled":!(!o||!m)||null,tabIndex:o&&m?"-1":null};return o?r.a.createElement("a",u({className:g},w),c?"\n\t":null,c?r.a.createElement("i",{className:"material-icons"},c):null,c&&t?r.a.createElement("span",null,t):t):h?r.a.createElement("input",u({className:g},w)):r.a.createElement("button",u({className:g},w),c?"\n\t\t":null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"material-icons"},c),"\n\t\t"):null,c&&t?r.a.createElement("span",null,t):t,c?"\n\t":null)};s.propTypes={type:o.a.oneOf(["executive","guiding","destructive","link"]).isRequired,label:o.a.string,id:o.a.string,name:o.a.string,value:o.a.string,href:o.a.string,icon:o.a.string,loading:o.a.bool,disabled:o.a.bool,btnType:o.a.string,fullWidth:o.a.bool,loader:o.a.bool,pullRight:o.a.bool,input:o.a.bool,outline:o.a.bool,active:o.a.bool,size:o.a.oneOf(["lg","sm","xs"])},t.default=s},451:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return i}),n.d(t,"Download",function(){return u}),n.d(t,"Guidelines",function(){return s});var a=n(1),r=n.n(a),l=n(361),o=n(373),c="/feature/chart-colors/",i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"".concat(c,"img/typography/cid_2873206.png"),className:"img-fluid mb-4"}),r.a.createElement("p",null,"Swedbank Pay uses a selection of fonts from Swedbank's typography toolbox."),r.a.createElement("p",null,"Our main font is Swedbank Headline Bold, a custom made typeface with an open, welcoming visual voice. In addition Swedbank Sans is used for body copy in printed units whilst Arial is used for body copy on screens."))},u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"download"},"Download"),r.a.createElement("div",{className:"slab slab-default slab-elevated"},r.a.createElement("p",null,"Before downloading any typography files, make sure to read the Swedbank Pay typography guidelines. The guidelines can be found below."),r.a.createElement("div",{className:"resources-typography-download"},r.a.createElement(o.default,{type:"executive",icon:"file_download",href:"".concat(c,"release/fonts/cid_2108538.zip"),label:"Download Swedbank Headline"}),r.a.createElement(o.default,{type:"executive",icon:"file_download",href:"".concat(c,"release/fonts/cid_2686429.zip"),label:"Download Swedbank Sans"}))))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"guidlines"},"Typography guidlines"),r.a.createElement("img",{src:"".concat(c,"img/typography/cid_2873207.png"),className:"img-fluid mb-4"}),r.a.createElement("h4",null,"Use Swedbank Headline Bold in:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Headlines and highlights"),r.a.createElement("li",null,"Introduction texts"),r.a.createElement("li",null,"Lower level headlines")),r.a.createElement("h4",null,"Use Arial in:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Body copy on screens")),r.a.createElement("h4",null,"Use Swedbank Sans in:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Body copy in printed units")),r.a.createElement("h4",null,"Typesetting"),r.a.createElement("ul",null,r.a.createElement("li",null,"Use large contrast in size between top level headlines and body text"),r.a.createElement("li",null,"Use metric settings for spacing")))};t.default=function(){return r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement(i,null),r.a.createElement(u,null),r.a.createElement(s,null))}},456:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=h,t.HashLink=b,t.NavHashLink=v;var o=u(n(1)),c=u(n(14)),i=n(50);function u(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,m=null,d=null;function f(){s="",null!==p&&p.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function y(){var e=document.getElementById(s);return null!==e&&(d(e),f(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,r({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===l(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function b(e){return h(e,i.Link)}function v(e){return h(e,i.NavLink)}var E={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};b.propTypes=E,v.propTypes=E},457:function(e,t){(function(t){e.exports=t}).call(this,{})},458:function(e,t,n){var a;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=r(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)l.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===r(n(457))&&n(457)?void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a):window.classNames=o}()}}]);
//# sourceMappingURL=doc-route.chunk_69.js.map?105e0058e0788279f179