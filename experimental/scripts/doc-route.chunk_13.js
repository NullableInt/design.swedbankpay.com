(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[11,2,50,52,53,54,55,56,57],{364:function(e,t,n){"use strict";n.r(t);var a=n(365);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(367);n.d(t,"ComponentPreview",function(){return r.default});var o=n(373);n.d(t,"DocContainer",function(){return o.default});var l=n(375);n.d(t,"DocHeading",function(){return l.default});var c=n(368);n.d(t,"DocToc",function(){return c.default});var i=n(369);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(370);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(371);n.d(t,"Icon",function(){return u.default});var m=n(374);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(372);n.d(t,"PxScript",function(){return p.default})},365:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},366:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,l=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?r.a.createElement("p",null,l):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,o?"\n":"",o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=n(377),i=n(378),s=n.n(i),u=n(379);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,l=e.removeList,i=e.showCasePanel,d=e.codeFigure,f=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},y=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,d?r.a.createElement(function(){var e="";if("html"===n&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):l?y(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):l?y(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return u.b.style="",r.a.createElement("figure",null,r.a.createElement(u.a,m({},u.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},l({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=d},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=n(376);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(n.prototype,o),l&&s(n,l),t}();f.propTypes={component:l.a.func.isRequired},t.default=f},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(366);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},370:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(366);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},371:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},372:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=function(e){var t,n,a=e.component,o=e.subComponents,l=e.func,c=e.params;return o&&(n=o.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},l),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},373:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=n(364),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},374:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(1),r=n.n(a),o=n(97),l=n(364),c=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(l.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(l.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(l.PxScript,{component:t,func:"init"})),r.a.createElement("p",null,r.a.createElement(o.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?r.a.createElement(c,{componentName:t}):null,a?r.a.createElement(i,{componentName:t}):null)}},376:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=y,t.HashLink=v,t.NavHashLink=E;var l=s(n(1)),c=s(n(65)),i=n(97);function s(e){return e&&e.__esModule?e:{default:e}}var u="",m=null,p=null,d=null;function f(){u="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function h(){var e=document.getElementById(u);return null!==e&&(d(e),f(),!0)}function y(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,r({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===m&&(m=new MutationObserver(h)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function v(e){return y(e,i.Link)}function E(e){return y(e,i.NavLink)}var g={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};v.propTypes=g,E.propTypes=g},386:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(65),l=n.n(o),c=n(313),i=n.n(c),s=function(e){var t=e.size,n=e.imgUrl,a=e.icon,o=e.heading,l=e.text,c=e.textSmall,s=e.mediaRight,u=e.muted,m=i()("media",s?"media-right":null,t?"media-".concat(t):null),p=i()("material-icons",u?"text-muted":null);return r.a.createElement("div",{className:m},n||a?r.a.createElement("div",{className:"media-img"},"\n",n?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("img",{src:n})," ","\n"," "):null,a?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("i",{className:p},a)," ","\n"," "):null):null,r.a.createElement("div",{className:"media-body"},function(){var e=i()(u?"text-muted":null);switch(t){case"sm":return r.a.createElement("h4",{className:e},o);case"lg":return r.a.createElement("h2",{className:e},o);default:return r.a.createElement("h3",{className:e},o)}}(),r.a.createElement("p",null,c?r.a.createElement("small",null,l):l)))};s.propTypes={size:l.a.oneOf(["sm","lg"]),imgUrl:l.a.string,icon:l.a.string,heading:l.a.string.isRequired,text:l.a.string,textSmall:l.a.bool,mediaRight:l.a.bool,muted:l.a.bool},t.a=s},404:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return c}),n.d(t,"Sizes",function(){return i}),n.d(t,"MediaPosition",function(){return s});var a=n(1),r=n.n(a),o=n(364),l=n(386),c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"overview"},"Overview"),r.a.createElement("p",null,"Use the ",r.a.createElement(o.Property,{value:".media"})," class on an object to style it as a small container that feature a left- or right-aligned image/icon alongside textual content."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(l.a,{imgUrl:"https://via.placeholder.com/48x48",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),r.a.createElement(l.a,{icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))},i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"sizes"},"Sizes"),r.a.createElement("p",null,"Use ",r.a.createElement(o.Property,{value:".media-sm"})," or ",r.a.createElement(o.Property,{value:".media-lg"})," to modify the size of your media objects."),r.a.createElement("h3",null,"Small"),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(l.a,{size:"sm",imgUrl:"https://via.placeholder.com/40x40",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),r.a.createElement(l.a,{size:"sm",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})),r.a.createElement("h3",null,"Large"),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(l.a,{size:"lg",imgUrl:"https://via.placeholder.com/56x56",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),r.a.createElement(l.a,{size:"lg",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"media-position"},"Media position"),r.a.createElement("p",null,"Use the ",r.a.createElement(o.Property,{value:".media-right"})," class to align the media content to the right."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(l.a,{mediaRight:!0,imgUrl:"https://via.placeholder.com/48x48",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),r.a.createElement(l.a,{mediaRight:!0,icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))};t.default=function(){return r.a.createElement(o.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use media objects to showcase basic user information with text and a small image element or an icon."),r.a.createElement(c,null),r.a.createElement(i,null),r.a.createElement(s,null))}}}]);
//# sourceMappingURL=doc-route.chunk_13.js.map?53d5732887e39e01a2a8