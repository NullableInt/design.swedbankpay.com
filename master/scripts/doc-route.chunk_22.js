(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[23,3,45,46,47,48,49,50,52],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(2),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=u},422:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(422);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(422);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},426:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},427:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(2),o=n.n(r),p=n(431),l=n(432),f=n.n(l),d=n(433);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,u=e.dangerousHTML,i=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&u)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?i(e):c?s(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=o?i(a):c?s(a):Object(p.renderToStaticMarkup)(a);else switch(E(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",m.a.createElement("figure",null,m.a.createElement(d.a,b({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",b({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",b({key:t},o({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=c},430:function(e,t,n){"use strict";n.r(t);var a=n(421);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(427);n.d(t,"ComponentPreview",function(){return r.default});var o=n(428);n.d(t,"DocHeading",function(){return o.default});var l=n(429);n.d(t,"DocToc",function(){return l.default});var c=n(423);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(424);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=n(425);n.d(t,"Icon",function(){return i.default});var s=n(426);n.d(t,"PxScript",function(){return s.default})},483:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(434),r=n.n(a),c=n(430),u=n(2),i=n.n(u),s=function(e){var t=e.icon,n=e.text,a=e.target;return t||n?l.a.createElement("button",{type:"button",className:"topbar-btn","data-toggle-nav":a?"#".concat(a):null},"\n\t\t",t?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"material-icons"},t),"\n\t\t"):null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"topbar-btn-text"},n),"\n\t"):null):null},m=function(e){var t=e.menu,n=t.id,a=t.items;return l.a.createElement("nav",{id:n,className:"topbar-nav"},a.map(function(e,t){return l.a.createElement(o.Fragment,{key:t},"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},e))}),"\n")},p=function(e){var t=e.topbarContent,n=e.fixed,a=e.logout;return l.a.createElement("header",{className:"topbar ".concat(n?"topbar-fixed":"")},"\n",l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{icon:t.btn.icon,text:t.btn.text,target:t.id}),"\n",l.a.createElement(m,{menu:t})):null,"\n",l.a.createElement("a",{href:"#",className:"topbar-logo",onClick:function(e){return e.preventDefault()}}),"\n",a?l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{icon:"exit_to_app",text:"Log out"}),"\n"):null))};p.propTypes={topbarContent:i.a.object,fixed:i.a.bool,logout:i.a.bool};var f=p,d=n(67),b=n(422);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Overview",function(){return N}),n.d(t,"TopbarText",function(){return O}),n.d(t,"FixedTopbar",function(){return T}),n.d(t,"DeprecatedAlert",function(){return w});var k=function(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,a;t=r,a=o[n=e],n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a})}return r}({id:"topbar-nav"},{btn:{icon:"menu",text:"Menu"},items:["Link 1","Link 2","Link 3"]}),w=function(){return l.a.createElement(b.a,{type:"danger"},l.a.createElement("h3",null,"Component contains deprecated parts"),l.a.createElement("p",null,"The following parts are deprecated and will be removed:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Right nav"),l.a.createElement("li",null,"Levels in left nav"),l.a.createElement("li",null,"topbar-btn-right and topbar-btn-left classes will be replaced by topbar-btn")),l.a.createElement("p",null,"For continued support, please follow the examples in the documentation."))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"To use a topbar the bare minimum markup required is:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.Property,{value:".topbar"})," wrapper."),l.a.createElement("li",null,"Anchor with class ",l.a.createElement(c.Property,{value:".topbar-logo"})," to display the logo and make it clickable.")),l.a.createElement("p",null,"With this you get a topbar with the PayEx logo. In the topbar you can add additional functionality like a menu containing links. To enable this add a ",l.a.createElement(r.a,{className:"language-html"},"<button>")," and a ",l.a.createElement(r.a,{className:"language-html"},"<nav>")," containing anchors. Remember to include ",l.a.createElement(c.Attribute,{data:!0,name:"toggle-nav",value:"{your_nav_id}"})," as a ",l.a.createElement(r.a,{className:"language-html"},"<button>")," attribute to get the menu to appear when the menu-button is clicked."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(f,{topbarContent:k,logout:!0})))},T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"fixed-topbar"},"Fixed topbar"),l.a.createElement("p",null,"Add ",l.a.createElement(c.Property,{value:".topbar-fixed"})," with your ",l.a.createElement(c.Property,{value:".topbar"})," to get a fixed topbar. For a demonstration of the usage see the documentations top bar or implement it in your own project!"),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement(f,{fixed:!0})))},O=function(){return l.a.createElement("div",{className:"col-lg-10 doc-body"},l.a.createElement(w,null),l.a.createElement("p",{className:"lead"},"Topbar..."),l.a.createElement(N,null),l.a.createElement(T,null))},C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,g(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){d.topbar.init(1)}},{key:"render",value:function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(O,null),l.a.createElement(c.DocToc,{component:O})))}}])&&v(n.prototype,a),r&&v(n,r),t}();t.default=C}}]);
//# sourceMappingURL=doc-route.chunk_22.js.map?0b897845f26d6b9544fa