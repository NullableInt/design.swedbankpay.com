(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[13,2,45,46,47,48,50,51,52],{342:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(31),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},343:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(31),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},344:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),r=n(31),o=n.n(r),m=n(354),l=n(355),f=n.n(l),d=n(356);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?u(e):c?s(e):Object(m.renderToStaticMarkup)(e)});else if("html"===r)n+=o?u(a):c?s(a):Object(m.renderToStaticMarkup)(a);else switch(y(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=c},345:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(31),r=n.n(a),c=n(353);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=s(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),r}();f.propTypes={component:r.a.func.isRequired},t.default=f},346:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(343);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},347:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(343);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},348:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(31),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},349:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(31),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},350:function(e,t,n){"use strict";n.r(t);var a=n(342);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(344);n.d(t,"ComponentPreview",function(){return r.default});var o=n(351);n.d(t,"DocContainer",function(){return o.default});var l=n(352);n.d(t,"DocHeading",function(){return l.default});var c=n(345);n.d(t,"DocToc",function(){return c.default});var i=n(346);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(347);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(348);n.d(t,"Icon",function(){return s.default});var p=n(349);n.d(t,"PxScript",function(){return p.default})},351:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(31),l=n.n(o),c=n(350),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=v;var o=i(n(1)),l=i(n(31)),c=n(54);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function f(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(m(e),f(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){f(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),t.children)}function y(e){return h(e,c.Link)}function v(e){return h(e,c.NavLink)}var b={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};v.propTypes=y.propTypes=b},382:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return f}),n.d(t,"UsageWithJavascript",function(){return d});var o=n(1),l=n.n(o),c=n(350),i=n(55);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"example"},"Example"),l.a.createElement("p",null,"A standard sheet should display content that complements the screen’s primary content. It will close when the user clicks outside of the sheet or exits out of it in another way."),l.a.createElement("p",null,"Sheets can be used for a number of different things, but common use cases for a sheet are for example displaying a list of actions that affet the screen’s primary content such as filters, deletion or other ways to manipulate the main content. If you have a form then you could include an icon that opens said sheet to display more information about what the expected input is."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"sheet",id:"demo-sheet"},l.a.createElement("section",null,"\n",l.a.createElement("a",{href:"#",className:"sheet-close"},"\n\t\t\t",l.a.createElement(c.Icon,{icon:"close"}),"\n\t\t"),l.a.createElement("h2",null,"Sheet component"),l.a.createElement("p",null,"This is the sheet component. It can contain anything you want."),l.a.createElement("p",null,"It can also contain lots of useless text, just like the text in this paragraph. Or it can contain useful info and cheats. For example if you have a math quiz coming up;"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,l.a.createElement("code",null,"3 + 8 = 11")),l.a.createElement("li",null,l.a.createElement("code",null,"36 - 22 = 14")),l.a.createElement("li",null,l.a.createElement("code",null,"256 + 113 = 369")),l.a.createElement("li",null,l.a.createElement("code",null,"356 - 1 = 355"))),l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"full-name"},"Full name"),l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",id:"full-name",placeholder:"Enter your full name"})),l.a.createElement("div",{className:"help-block"},"Your full name")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email-address"},"Email"),l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",id:"email-address",placeholder:"Enter your email"})),l.a.createElement("div",{className:"help-block"},"Email means electronic mail, not express mail")),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"checkbox"},l.a.createElement("input",{type:"checkbox",id:"subscribe-checkbox"}),l.a.createElement("label",{htmlFor:"subscribe-checkbox"},"Sign up to our math newsletter"))),l.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:function(e){return e.preventDefault()}},"Submit")))),"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button","data-sheet-open":"demo-sheet"},"Open sheet")))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage-with-javascript"},"Usage with javascript"),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("div",{className:"sheet",id:"demo-sheet"},"\n","...","\n"),"\n"),l.a.createElement("p",null,"To open a sheet:"),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'px.sheet.open("demo-sheet")'),l.a.createElement("p",null,"To close a sheet:"),l.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'px.sheet.close("demo-sheet")'))},r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,p(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){i.sheet.init()}},{key:"render",value:function(){return l.a.createElement(c.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Sheet is a container component that is anchored on the right side of the screen and can contain a number of different things."),l.a.createElement(f,null),l.a.createElement(d,null))}}])&&u(n.prototype,a),r&&u(n,r),t}();t.default=r}}]);
//# sourceMappingURL=doc-route.chunk_15.js.map?f8d0c4becbcaa546084b