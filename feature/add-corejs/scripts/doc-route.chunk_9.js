(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[88,2,57,58,59,60,61,63,81],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"HowItWorks",function(){return s}),n.d(t,"Example",function(){return m}),n.d(t,"JavascriptMethods",function(){return d});var a=n(0),o=n.n(a),r=n(6),l=n(53),c=n(55),i=n(74),u=window.dg.dialog,s=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"how-it-works"},"How it works"),o.a.createElement("p",null,'A dialog remains hidden until it is triggered. Once it is open it overlays the website with a dark background and presents some options, usually confirming or cancelling an action. If you use a dialog it is assumed that you want to "force" the user to make a choice. Therefore the only way to close a dialog is to choose one of the presented actions or, if given, press the ',o.a.createElement("i",{className:"material-icons d-inline-flex"},"close")," to close the dialog."),o.a.createElement("p",null,"Dialog boxes consist of a header, a body and a footer. In these you can put whatever you want, but some basic functionality should be included in all dialogs. The header should contain a short descriptive text for what the dialog-box does. You can include an icon with class ",o.a.createElement(l.Property,{value:".dialog-close"})," if you wish to give your user a way to close the dialog box without choosing an option. The dialog body should contain the main content, usually just text confirming an action. In the footer you will find buttons to confirm or cancel the requested action."),o.a.createElement(c.default,{type:"warning"},o.a.createElement("h4",null,"Initializing dialog buttons"),"To make a button open the dialog box you need to include ",o.a.createElement(l.Attribute,{data:!0,name:"dialog-open",value:"{#your-dialog-id}"})," as an attribute to that button."))},m=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Example"),o.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("button",{className:"btn btn-executive",type:"button","data-dialog-open":"demo-dialog"},"\n","Open dialog","\n"),o.a.createElement(i.default,{diaHeader:"Delete item 456?",diaId:"demo-dialog"},o.a.createElement("p",null,"Are you sure you want to permanently delete the item ",o.a.createElement("i",null,"German Swashbuckle (456)?")))))},d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),o.a.createElement(l.JavascriptDocs,{componentName:"dialog",open:!0,close:!0}))};t.default=function(){return Object(a.useEffect)(function(){u.init()}),o.a.createElement(l.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Dialog is meant to be used to show a snippet of text like a confirmation box before you delete something. Use ",o.a.createElement(r.Link,{to:"/docs/components/sheet"},"sheet")," if you wish to receive input from the user or display a large chunk of information."),o.a.createElement(s,null),o.a.createElement(m,null),o.a.createElement(d,null))}},148:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=y,t.HashLink=E,t.NavHashLink=b;var l=u(n(0)),c=u(n(1)),i=n(6);function u(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,d=null,p=null;function f(){s="",null!==m&&m.disconnect(),null!==d&&(window.clearTimeout(d),d=null)}function h(){var e=document.getElementById(s);return null!==e&&(p(e),f(),!0)}function y(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,o({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(p=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===m&&(m=new MutationObserver(h)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),d=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function E(e){return y(e,i.Link)}function b(e){return y(e,i.NavLink)}var v={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};E.propTypes=v,b.propTypes=v},53:function(e,t,n){"use strict";n.r(t);var a=n(54);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var o=n(56);n.d(t,"ComponentPreview",function(){return o.default});var r=n(61);n.d(t,"DocContainer",function(){return r.default});var l=n(57);n.d(t,"DocHeading",function(){return l.default});var c=n(58);n.d(t,"DocToc",function(){return c.default});var i=n(62);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(63);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(59);n.d(t,"Icon",function(){return s.default});var m=n(64);n.d(t,"JavascriptDocs",function(){return m.default});var d=n(60);n.d(t,"DgScript",function(){return d.default})},54:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),a,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&a?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},55:function(e,t,n){"use strict";n.r(t),n.d(t,"ComplexAlert",function(){return u});var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=n(53),i=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},u=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.headerText,i=e.children;return o.a.createElement("div",{id:t,className:"alert alert-complex alert-".concat(n)},o.a.createElement("header",{className:"alert-header"},a?o.a.createElement(o.a.Fragment,null,"\n"," ",o.a.createElement(c.Icon,{classNames:"alert-icon",type:a})):null,l?o.a.createElement(o.a.Fragment,null,"\n",o.a.createElement("h3",null,l),"\n"):null,r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement(c.Icon,{type:"close"}),"\n\t"):null,"\n"),i?o.a.createElement(o.a.Fragment,null,"\n",o.a.createElement("div",{className:"alert-body"},i),"\n"):null)};i.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.default=i},56:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=n(151),i=n(152),u=n.n(i),s=n(153);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,r=e.hideValue,l=e.removeList,i=e.showCasePanel,p=e.showCasePanelSm,f=e.codeFigure,h=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},E=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return o.a.createElement(o.a.Fragment,null,i?o.a.createElement(function(){return o.a.createElement("div",{className:"showcase-panel".concat(p?" showcasepanel-sm":"")},t)},null):null,f?o.a.createElement(function(){var e="";if("html"===n&&h)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?y(t):l?E(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?y(t):l?E(t):Object(c.renderToStaticMarkup)(t);else switch(d(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",o.a.createElement("figure",null,o.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,l=e.getTokenProps;return o.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return o.a.createElement("div",m({key:e+t},r({line:e,key:t})),e.map(function(e,t){return o.a.createElement("span",m({key:t},l({token:e,key:t})))}))}))}))},null):null)};p.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,showCasePanelSm:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=p},57:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3);t.default=Object(r.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),o.a.createElement("h1",null,t)})},58:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=n(148);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:p(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return o.a.createElement("li",{key:n,className:a?"active":""},o.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,r),l&&u(n,l),t}();f.propTypes={component:l.a.func.isRequired},t.default=f},59:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=function(e){var t=e.type,n=e.classNames;return o.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};l.propTypes={type:n.n(r).a.string.isRequired},t.default=l},60:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"dg"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=n(53),i=function(e){var t=e.docToc,n=e.children,a=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement(c.DocHeading,null),o.a.createElement("div",{className:"row"},o.a.createElement(a,null),t?o.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(55);t.default=function(){return o.a.createElement(r.default,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},63:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(55);t.default=function(){return o.a.createElement(r.default,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},64:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(0),o=n.n(a),r=n(6),l=n(53),c=function(e){var t=e.componentName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{scope:"row"},o.a.createElement(l.DgScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),o.a.createElement("td",null,"Opens the given ",t.toLowerCase())))},i=function(e){var t=e.componentName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{scope:"row"},o.a.createElement(l.DgScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),o.a.createElement("td",null,"Closes the given ",t.toLowerCase())))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return o.a.createElement(o.a.Fragment,null,o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Function"),o.a.createElement("th",{scope:"col"},"Purpose"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{scope:"row"},o.a.createElement(l.DgScript,{component:t,func:"init"})),o.a.createElement("td",null,o.a.createElement(r.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase())),n?o.a.createElement(c,{componentName:t}):null,a?o.a.createElement(i,{componentName:t}):null)))}},74:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=n.n(r),c=n(53),i=function(e){var t=e.diaId,n=e.diaHeader,a=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"dialog",id:t,role:"dialog","aria-modal":"true","aria-labelledby":"aria-label-dia","aria-describedby":"aria-describe-dia"},o.a.createElement("section",null,o.a.createElement("header",{className:"dialog-header",id:"aria-label-dia"},o.a.createElement("h4",null,n),"\n",o.a.createElement("button",{type:"button",className:"dialog-close"},"\n",o.a.createElement(c.Icon,{type:"close"}),"\n")),o.a.createElement("div",{className:"dialog-body",id:"aria-describe-dia"},a),o.a.createElement("footer",{className:"dialog-footer"},"\n",o.a.createElement("button",{className:"btn btn-guiding",type:"button","data-dialog-close":!0},"Cancel"),"\n",o.a.createElement("button",{className:"btn btn-destructive",type:"button"},"Delete"),"\n"))))};i.propTypes={diaId:l.a.string,diaHeader:l.a.string},t.default=i}}]);
//# sourceMappingURL=doc-route.chunk_9.js.map?9478c80c3696f81d866a