(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[54,2,45,46,47,48,50,51,52],{388:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),o=n.n(a),r=n(72),l=n.n(r),c=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),a,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&a?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},389:function(e,t,n){"use strict";var a=n(1),c=n.n(a),o=n(72),r=n.n(o),l=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,r=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,r?"\n":"",r?c.a.createElement("p",null,r):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=l},390:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),o=n(72),r=n.n(o),m=n(400),l=n(401),d=n.n(l),f=n(402);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,o=e.language,r=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===o&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===o&&a&&"function"==typeof a.map)a.map(function(e){n+=r?u(e):c?s(e):Object(m.renderToStaticMarkup)(e)});else if("html"===o)n+=r?u(a):c?s(a):Object(m.renderToStaticMarkup)(a);else switch(h(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(o){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",p.a.createElement("figure",null,p.a.createElement(f.a,y({},f.b,{theme:void 0,code:n,language:o}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,r=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",y({key:e+t},o({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",y({key:t},r({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},t.default=c},391:function(e,t,n){"use strict";n.r(t);var r=n(1),l=n.n(r),a=n(72),o=n.n(a),c=n(399);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function o(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=s(this,p(o).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(o,r["Component"]),t=o,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),o}();d.propTypes={component:o.a.func.isRequired},t.default=d},392:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(389);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},393:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(389);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},394:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(72),l=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(r).a.string.isRequired},t.default=l},395:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(72),r=n.n(o),l=function(e){var t,n,a=e.component,o=e.subComponents,r=e.func,l=e.params;return o&&(n=o.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=l},396:function(e,t,n){"use strict";n.r(t);var a=n(388);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var o=n(390);n.d(t,"ComponentPreview",function(){return o.default});var r=n(397);n.d(t,"DocContainer",function(){return r.default});var l=n(398);n.d(t,"DocHeading",function(){return l.default});var c=n(391);n.d(t,"DocToc",function(){return c.default});var i=n(392);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(393);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(394);n.d(t,"Icon",function(){return s.default});var p=n(395);n.d(t,"PxScript",function(){return p.default})},397:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(72),l=n.n(r),c=n(396),i=function(e){var t=e.docToc,n=e.children,a=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(a,null),t?o.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},399:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=y,t.HashLink=h,t.NavHashLink=b;var r=i(n(1)),l=i(n(72)),c=n(106);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function d(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function f(){var e=document.getElementById(u);return null!==e&&(m(e),d(),!0)}function y(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return r.default.createElement(e,a({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===o(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function h(e){return y(e,c.Link)}function b(e){return y(e,c.NavLink)}var v={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=h.propTypes=v},423:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return f}),n.d(t,"UsageWithJavascript",function(){return y});var r=n(1),l=n.n(r),c=n(106),i=n(396),u=n(107);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"example"},"Example"),l.a.createElement("p",null,"Dialog boxes consist of a header, a body and a footer. In these you can put whatever you want, but some basic functionality should be included in all dialogs. The header should contain a short descriptive text for what the dialog-box does. Remember to include a way to close the dialog box in the header in the form of a clickable icon or something similar. The dialog body should contain the main content, usually just text confirming an action. In the footer you will find buttons to confirm or cancel the requested action. To make a button open the dialog box you need to include ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-time",value:"{#your-dialog-id}"})," as an attribute to that button."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"dialog",id:"demo-dialog"},l.a.createElement("section",null,l.a.createElement("header",null,l.a.createElement("h5",null,"Delete item 456?"),"\n",l.a.createElement("a",{href:"#",className:"dialog-close"},"\n\t\t\t\t",l.a.createElement(i.Icon,{icon:"close"}),"\n\t\t\t"),"\n\t\t"),l.a.createElement("div",{className:"dialog-body"},l.a.createElement("p",null,"Are you sure you want to permanently delete the item ",l.a.createElement("i",null,"German Swashbuckle (456)?"))),l.a.createElement("footer",null,"\n",l.a.createElement("button",{className:"btn btn-secondary",type:"button","data-dialog-close":"demo-dialog"},"Cancel"),"\n",l.a.createElement("button",{className:"btn btn-danger",type:"button"},"Delete"),"\n"))),"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button","data-dialog-open":"demo-dialog"},"Open dialog")))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage-with-javascript"},"Usage with javascript"),l.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("div",{className:"dialog",id:"demo-dialog"},"\n","...","\n"),"\n"),l.a.createElement("p",null,"To open a dialog:"),l.a.createElement(i.ComponentPreview,{language:"javascript",codeFigure:!0},'px.dialog.open("demo-dialog")'),l.a.createElement("p",null,"To close a dialog:"),l.a.createElement(i.ComponentPreview,{language:"javascript",codeFigure:!0},'px.dialog.close("demo-dialog")'))},o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){u.dialog.init()}},{key:"render",value:function(){return l.a.createElement(i.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Dialog is meant to be used to show a snippet of text like a confirmation box before you delete something. Use ",l.a.createElement(c.Link,{to:"/docs/components/sheet"},"sheet")," if you wish to receive input from the user or display a large chunk of information."),l.a.createElement(f,null),l.a.createElement(y,null))}}])&&s(n.prototype,a),o&&s(n,o),t}();t.default=o}}]);
//# sourceMappingURL=doc-route.chunk_7.js.map?fe83f8bddffd7458f6d8