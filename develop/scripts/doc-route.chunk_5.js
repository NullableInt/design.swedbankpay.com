(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[49,2,45,46,47,48,50,51,52],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(64),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},353:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(64),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},354:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(64),o=n.n(r),p=n(364),l=n(365),d=n.n(l),f=n(366);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?s(e):c?u(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=o?s(a):c?u(a):Object(p.renderToStaticMarkup)(a);else switch(y(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",m.a.createElement("figure",null,m.a.createElement(f.a,h({},f.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=c},355:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(64),r=n.n(a),c=n(363);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,m(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),a&&s(t,a),r}();d.propTypes={component:r.a.func.isRequired},t.default=d},356:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(353);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},357:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(353);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},358:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(64),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},359:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(64),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},360:function(e,t,n){"use strict";n.r(t);var a=n(352);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(354);n.d(t,"ComponentPreview",function(){return r.default});var o=n(361);n.d(t,"DocContainer",function(){return o.default});var l=n(362);n.d(t,"DocHeading",function(){return l.default});var c=n(355);n.d(t,"DocToc",function(){return c.default});var i=n(356);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(357);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(358);n.d(t,"Icon",function(){return u.default});var m=n(359);n.d(t,"PxScript",function(){return m.default})},361:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(64),l=n.n(o),c=n(360),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=v;var o=i(n(1)),l=i(n(64)),c=n(96);function i(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,m=null,p=null;function d(){s="",null!==u&&u.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function f(){var e=document.getElementById(s);return null!==e&&(p(e),d(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(p=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===u&&(u=new MutationObserver(f)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function y(e){return h(e,c.Link)}function v(e){return h(e,c.NavLink)}var b={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};v.propTypes=y.propTypes=b},373:function(e,t,n){"use strict";var a=n(1),m=n.n(a),r=n(64),o=n.n(r),l=n(305),p=n.n(l),c=function(e){var t=e.size,n=e.imgUrl,a=e.icon,r=e.heading,o=e.text,l=e.textSmall,c=e.mediaRight,i=e.muted,s=p()("media",c?"media-right":null,t?"media-".concat(t):null),u=p()("material-icons",i?"text-muted":null);return m.a.createElement("div",{className:s},n||a?m.a.createElement("div",{className:"media-img"},"\n",n?m.a.createElement(m.a.Fragment,null," ",m.a.createElement("img",{src:n})," ","\n"," "):null,a?m.a.createElement(m.a.Fragment,null," ",m.a.createElement("i",{className:u},a)," ","\n"," "):null):null,m.a.createElement("div",{className:"media-body"},function(){var e=p()(i?"text-muted":null);switch(t){case"sm":return m.a.createElement("h4",{className:e},r);case"lg":return m.a.createElement("h2",{className:e},r);default:return m.a.createElement("h3",{className:e},r)}}(),m.a.createElement("p",null,l?m.a.createElement("small",null,o):o)))};c.propTypes={size:o.a.oneOf(["sm","lg"]),imgUrl:o.a.string,icon:o.a.string,heading:o.a.string.isRequired,text:o.a.string,textSmall:o.a.bool,mediaRight:o.a.bool,muted:o.a.bool},t.a=c},430:function(e,t,n){"use strict";n.r(t);var o=n(1),p=n.n(o),l=n(96),c=n(360),a=n(64),r=n.n(a),i=function(e){var t=e.type,n=e.title,a=e.imgSrc,r=e.text,o=e.textSection,l=e.smallText,c=e.btnTxt,i=e.footerTxt,s=e.footerLink,u=e.footerLinkTxt,m=e.children;return p.a.createElement("div",{className:"card".concat(t?" card-".concat(t):"")},n?p.a.createElement("header",null,p.a.createElement("h3",null,p.a.createElement("a",{href:"#"},n))):null,a?p.a.createElement("div",{className:"card-img"},"\n",p.a.createElement("img",{src:a,alt:""}),"\n"):null,m?p.a.createElement("div",{className:"highlight"},m):null,p.a.createElement("div",{className:"card-body"},r?p.a.createElement("p",null,r):null,"\n",o?o.map(function(e,t){return p.a.createElement("p",{key:"card-p-".concat(t)},e)}):null,l?p.a.createElement("small",null,l):null),c||i||u?p.a.createElement("footer",null,c?p.a.createElement("button",{type:"button",className:"btn btn-primary btn-block"},c):null,i?p.a.createElement("div",{className:"footer-text"},p.a.createElement("p",null,i)):null,u?p.a.createElement("div",{className:"footer-link"},p.a.createElement("a",{href:s||"#"},u)):null):null)};i.propTypes={type:r.a.oneOf(["brand","default","light"]),title:r.a.string,imgSrc:r.a.string,icon:r.a.string,text:r.a.string,smallText:r.a.string,textSection:r.a.array,btnTxt:r.a.string,footerTxt:r.a.string,footerLink:r.a.string,footerLinkTxt:r.a.string};var s=i,u=n(373);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"DefaultBehaviour",function(){return b}),n.d(t,"CardVariants",function(){return E});var v=["This is a lot of text","With some more text","And then even some more","Is it really possible to have this much text in one card?","Yes!"],b=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("h2",{id:"default-behaviour"},"Default behaviour"),p.a.createElement("p",null,"Wrap indiviual cards in the ",p.a.createElement(c.Property,{value:".cards"})," class to display them lined up next to each other. When the window reaches ",p.a.createElement(l.Link,{to:"/docs/core/breakpoints"},"breakpoint")," sm the cards will switch to mobile view and take up one row each and stretch to fill the width of the container. To decide how your cards will look use ",p.a.createElement(c.Property,{value:".card-default"}),", ",p.a.createElement(c.Property,{value:".card-brand"}),", or ",p.a.createElement(c.Property,{value:".card-light"})),p.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},p.a.createElement("div",{className:"cards"},p.a.createElement(s,{type:"default",title:"Card default",imgSrc:"https://picsum.photos/300/?random",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},p.a.createElement(u.a,{size:"sm",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com",textSmall:!0,muted:!0}))),p.a.createElement("div",{className:"cards"},p.a.createElement(s,{type:"brand",title:"Card brand",imgSrc:"https://picsum.photos/300/?random",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},p.a.createElement(u.a,{size:"sm",icon:"account_balance",heading:"725 NOK",text:"Outstanding balance",textSmall:!0,muted:!0}))),p.a.createElement("div",{className:"cards"},p.a.createElement(s,{type:"light",title:"Card light",imgSrc:"https://picsum.photos/300/?random",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},p.a.createElement(u.a,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0})))))},E=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("h2",{id:"card-variants"},"Card Variants"),p.a.createElement("p",null,"You don`t have to use all sections of a card, you can use different combinations as you see fit. The card body inherits the size of the largest card that exists on the same line when wrapped with a ",p.a.createElement(c.Property,{value:".cards"})," container."),p.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},p.a.createElement("div",{className:"cards"},p.a.createElement(s,{type:"default",title:"My custom card",text:"Card text",smallText:"Small card text",footerTxt:"This is some text that goes in the footer."},p.a.createElement(u.a,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0})),p.a.createElement(s,{type:"default",title:"Text card",textSection:v,smallText:"This is some small text",footerTxt:"This is some text that goes in the footer."}),p.a.createElement(s,{type:"brand",title:"Image card",imgSrc:"https://picsum.photos/300/?random",text:"This is a card with an image and body"}))))},g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,h(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){return p.a.createElement(c.DocContainer,{docToc:!0},p.a.createElement("p",{className:"lead"},"Cards are meant to display smaller items and is not intended to span the entire width of a page. See ",p.a.createElement(l.Link,{to:"/docs/components/panel"},"panel")," if the card component is too narrow."),p.a.createElement(b,null),p.a.createElement(E,null))}}])&&d(n.prototype,a),r&&d(n,r),t}();t.default=g}}]);
//# sourceMappingURL=doc-route.chunk_5.js.map?c5f66ce4706233bdc8c0