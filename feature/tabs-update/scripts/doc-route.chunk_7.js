(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[68,2,57,58,59,60,61,63,76,86],{361:function(e,t,n){"use strict";n.r(t);var a=n(362);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(364);n.d(t,"ComponentPreview",function(){return r.default});var o=n(369);n.d(t,"DocContainer",function(){return o.default});var l=n(365);n.d(t,"DocHeading",function(){return l.default});var c=n(366);n.d(t,"DocToc",function(){return c.default});var i=n(370);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(371);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(367);n.d(t,"Icon",function(){return u.default});var m=n(372);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(368);n.d(t,"DgScript",function(){return p.default})},362:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(14),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},363:function(e,t,n){"use strict";n.r(t),n.d(t,"ComplexAlert",function(){return s});var a=n(1),r=n.n(a),o=n(14),l=n.n(o),c=n(361),i=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,l=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?r.a.createElement("p",null,l):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,o?"\n":"",o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},s=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,l=e.headerText,i=e.children;return r.a.createElement("div",{id:t,className:"alert alert-complex alert-".concat(n)},r.a.createElement("header",{className:"alert-header"},a?r.a.createElement(r.a.Fragment,null,"\n"," ",r.a.createElement(c.Icon,{classNames:"alert-icon",type:a})):null,l?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("h3",null,l),"\n"):null,o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement(c.Icon,{type:"close"}),"\n\t"):null,"\n"),i?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("div",{className:"alert-body"},i),"\n"):null)};i.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.default=i},364:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),l=n.n(o),c=n(459),i=n(460),s=n.n(i),u=n(461);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,l=e.removeList,i=e.showCasePanel,d=e.showCasePanelSm,f=e.codeFigure,y=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},E=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel".concat(d?" showcasepanel-sm":"")},t)},null):null,f?r.a.createElement(function(){var e="";if("html"===n&&y)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):l?E(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):l?E(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return u.b.style="",r.a.createElement("figure",null,r.a.createElement(u.a,m({},u.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},l({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,showCasePanelSm:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=d},365:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(41);t.default=Object(o.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),r.a.createElement("h1",null,t)})},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),l=n.n(o),c=n(456);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(n.prototype,o),l&&s(n,l),t}();f.propTypes={component:l.a.func.isRequired},t.default=f},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),l=function(e){var t=e.type,n=e.classNames;return r.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};l.propTypes={type:n.n(o).a.string.isRequired},t.default=l},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),l=n.n(o),c=function(e){var t,n,a=e.component,o=e.subComponents,l=e.func,c=e.params;return o&&(n=o.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"dg"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},l),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),l=n.n(o),c=n(361),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement(c.DocHeading,null),r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},370:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(363);t.default=function(){return r.a.createElement(o.default,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},371:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(363);t.default=function(){return r.a.createElement(o.default,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},372:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(1),r=n.n(a),o=n(50),l=n(361),c=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(l.DgScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("td",null,"Opens the given ",t.toLowerCase())))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(l.DgScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("td",null,"Closes the given ",t.toLowerCase())))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Function"),r.a.createElement("th",{scope:"col"},"Purpose"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(l.DgScript,{component:t,func:"init"})),r.a.createElement("td",null,r.a.createElement(o.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase())),n?r.a.createElement(c,{componentName:t}):null,a?r.a.createElement(i,{componentName:t}):null)))}},376:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),l=n.n(o),c=n(458),i=n.n(c),s=function(e){var t=e.size,n=e.imgUrl,a=e.icon,o=e.heading,l=e.text,c=e.textSmall,s=e.mediaRight,u=e.muted,m=i()("media",s?"media-right":null,t?"media-".concat(t):null),p=i()("material-icons",u?"text-muted":null);return r.a.createElement("div",{className:m},n||a?r.a.createElement("div",{className:"media-img"},"\n",n?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("img",{src:n})," ","\n"," "):null,a?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("i",{className:p},a)," ","\n"," "):null):null,r.a.createElement("div",{className:"media-body"},function(){var e=i()(u?"text-muted":null);switch(t){case"sm":return r.a.createElement("h4",{className:e},o);case"lg":return r.a.createElement("h2",{className:e},o);default:return r.a.createElement("h3",{className:e},o)}}(),r.a.createElement("p",null,c?r.a.createElement("small",null,l):l)))};s.propTypes={size:l.a.oneOf(["sm","lg"]),imgUrl:l.a.string,icon:l.a.string,heading:l.a.string.isRequired,text:l.a.string,textSmall:l.a.bool,mediaRight:l.a.bool,muted:l.a.bool},t.default=s},381:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),l=n.n(o),c=function(e){var t=e.type,n=e.titleTxt,a=e.titleMarkup,o=e.imgSrc,l=e.text,c=e.textSection,i=e.smallText,s=e.btn,u=e.btnClass,m=e.bodyClass,p=e.footerTxt,d=e.footerLink,f=e.footerLinkTxt,y=e.children;return r.a.createElement("div",{className:"card".concat(t?" card-".concat(t):"")},o?r.a.createElement("div",{className:"card-img"},"\n",r.a.createElement("img",{src:o,alt:""}),"\n"):null,n?r.a.createElement("header",{className:"card-header"},r.a.createElement("h3",null,n)):a?r.a.createElement("header",{className:"card-header"},a):null,r.a.createElement("div",{className:"card-body".concat(m?" ".concat(m):"")},y||null,l?r.a.createElement("p",null,l):null,"\n",c?c.map(function(e,t){return r.a.createElement("p",{key:"card-p-".concat(t)},e)}):null,s?r.a.createElement("button",{type:"button",className:"btn btn-executive".concat(u?" ".concat(u):"")},"\n","Button","\n"):null),p||f?r.a.createElement("footer",{className:"card-footer"},i?r.a.createElement("small",null,i):null,p||null,f?r.a.createElement("div",{className:"footer-link"},r.a.createElement("a",{href:d||"#"},f)):null):null)};c.propTypes={type:l.a.oneOf(["primary","secondary","plain"]),imgSrc:l.a.string,titleTxt:l.a.string,titleMarkup:l.a.object,icon:l.a.string,text:l.a.string,smallText:l.a.string,textSection:l.a.array,btn:l.a.bool,footerLink:l.a.string,footerLinkTxt:l.a.string},t.default=c},406:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return y}),n.d(t,"GridCard",function(){return h});var a=n(1),r=n.n(a),o=n(50),l=n(361),c=n(381),i=n(376);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=["This is a lot of text","With some more text","And then even some more","Is it really possible to have this much text in one card?","Yes!"],y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"overview"},"Overview"),r.a.createElement("p",null,"Cards support a wide variety of content, including images, text, list groups, links, and more. Make sure to restrain the width of your card unless you wish for it to fill the wrapping component."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,showCasePanelSm:!0,codeFigure:!0},r.a.createElement(c.default,{titleTxt:"Card title",type:"primary",imgSrc:"https://picsum.photos/300/?random",text:"This paragraph contains some text related to this card.",footerTxt:"Footer text"})))},h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"card-with-grid"},"Card with grid"),r.a.createElement("p",null,"Use our ",r.a.createElement(o.Link,{to:"/docs/core/grid"},"grid")," along with cards to control their size and how they are displayed on different screen resolutions. Make sure to add ",r.a.createElement(l.Property,{value:".d-flex"})," to the wrapper if you want the cards to be of equal height when next to each other."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(c.default,{type:"primary",titleTxt:"My grid card",text:"Card text",smallText:"Small card text",btn:!0,btnClass:"btn-block mt-auto",bodyClass:"d-flex flex-column"},r.a.createElement(i.default,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0}))),r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(c.default,{type:"primary",titleTxt:"My grid card",textSection:f,smallText:"This is some small text",btn:!0,btnClass:"btn-block mt-auto",bodyClass:"d-flex flex-column"})),r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(c.default,{type:"primary",titleTxt:"My grid card",imgSrc:"https://picsum.photos/300/?random",text:"This is a card with an image and body",footerLinkTxt:"Footer link"})))))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"card-types"},"Card Types"),r.a.createElement("p",null,"We offer three different card types; ",r.a.createElement(l.Property,{value:".card-primary"}),", ",r.a.createElement(l.Property,{value:".card-secondary"})," and ",r.a.createElement(l.Property,{value:".card-plain"}),"."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(c.default,{type:"primary",titleTxt:"Card Primary",imgSrc:"https://picsum.photos/300/?random",text:"This paragraph contains some text about the person displayed above."},r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,r.a.createElement("span",{className:"font-weight-bold"},"Card number:")," 4563 5648 5642"),r.a.createElement("li",null,r.a.createElement("span",{className:"font-weight-bold"},"Balance:")," 2500,- ")))),r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(c.default,{type:"secondary",titleTxt:"Card Secondary",text:"Descriptive text to put inside the card, could contain a lot.",footerLinkTxt:"Footer link"},r.a.createElement(i.default,{size:"sm",icon:"account_balance",heading:"725 NOK",text:"Outstanding balance",textSmall:!0,muted:!0}))),r.a.createElement("div",{className:"col-12 col-lg-6 col-xl-4 d-flex"},r.a.createElement(c.default,{type:"plain",titleTxt:"Card Plain",imgSrc:"https://picsum.photos/300/?random",text:"Descriptive text to put inside the card, could contain a lot.",footerLinkTxt:"Footer link"},r.a.createElement(i.default,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0}))))))},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,p(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a["Component"]),n=t,(o=[{key:"render",value:function(){return r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Card is a flexible colored box which fills the width of its parent element."),r.a.createElement(y,null),r.a.createElement(h,null),r.a.createElement(E,null))}}])&&u(n.prototype,o),c&&u(n,c),t}();t.default=v},456:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=h,t.HashLink=E,t.NavHashLink=v;var l=s(n(1)),c=s(n(14)),i=n(50);function s(e){return e&&e.__esModule?e:{default:e}}var u="",m=null,p=null,d=null;function f(){u="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function y(){var e=document.getElementById(u);return null!==e&&(d(e),f(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,r({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===m&&(m=new MutationObserver(y)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function E(e){return h(e,i.Link)}function v(e){return h(e,i.NavLink)}var b={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};E.propTypes=b,v.propTypes=b},457:function(e,t){(function(t){e.exports=t}).call(this,{})},458:function(e,t,n){var a;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=r(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=l.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):"object"===r(n(457))&&n(457)?void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a):window.classNames=l}()}}]);
//# sourceMappingURL=doc-route.chunk_7.js.map?532654fede184e6aa5b8