(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[43,2,45,46,47,48,50,51,52],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),r=n.n(a),o=n(64),l=n.n(o),i=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},i.propTypes={value:l.a.string.isRequired},t.default=c},353:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(64),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?i.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?i.a.createElement("p",null,o):null,l?"\n":"",l?i.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},354:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),r=n(64),o=n.n(r),m=n(364),l=n(365),d=n.n(l),f=n(366);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,i=e.removeList,t=e.showCasePanel,n=e.codeFigure,c=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&c)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?s(e):i?u(e):Object(m.renderToStaticMarkup)(e)});else if("html"===r)n+=o?s(a):i?u(a):Object(m.renderToStaticMarkup)(a);else switch(v(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",p.a.createElement("figure",null,p.a.createElement(f.a,h({},f.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};i.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=i},355:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(64),r=n.n(a),i=n(363);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(i.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),a&&s(t,a),r}();d.propTypes={component:r.a.func.isRequired},t.default=d},356:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(353);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},357:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(353);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},358:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(64),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},359:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(64),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return i.a.createElement("span",{key:t},e,t<l.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,a),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},o),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},360:function(e,t,n){"use strict";n.r(t);var a=n(352);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(354);n.d(t,"ComponentPreview",function(){return r.default});var o=n(361);n.d(t,"DocContainer",function(){return o.default});var l=n(362);n.d(t,"DocHeading",function(){return l.default});var i=n(355);n.d(t,"DocToc",function(){return i.default});var c=n(356);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var s=n(357);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(358);n.d(t,"Icon",function(){return u.default});var p=n(359);n.d(t,"PxScript",function(){return p.default})},361:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(64),l=n.n(o),i=n(360),c=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:l.a.bool},t.default=c},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=v,t.NavHashLink=y;var o=c(n(1)),l=c(n(64)),i=n(96);function c(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,p=null,m=null;function d(){s="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function f(){var e=document.getElementById(s);return null!==e&&(m(e),d(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===u&&(u=new MutationObserver(f)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function v(e){return h(e,i.Link)}function y(e){return h(e,i.NavLink)}var g={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};y.propTypes=v.propTypes=g},419:function(e,t,n){"use strict";n.r(t),n.d(t,"TextAlignment",function(){return l}),n.d(t,"TextWrappingAndOverflow",function(){return i}),n.d(t,"TextTransform",function(){return c}),n.d(t,"FontWeightAndItalics",function(){return s});var a=n(1),r=n.n(a),o=n(360),l=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"text-alignment"},"Text alignment"),r.a.createElement("p",null,"Easily realign text to components with text alignment classes."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"text-justify"},"Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.")),r.a.createElement("p",null,"For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"text-left"},"Left aligned text on all viewport sizes."),r.a.createElement("p",{className:"text-center"},"Center aligned text on all viewport sizes."),r.a.createElement("p",{className:"text-right"},"Right aligned text on all viewport sizes."),"\n\n",r.a.createElement("p",{className:"text-sm-left"},"Left aligned text on viewports sized SM (small) or wider."),r.a.createElement("p",{className:"text-md-left"},"Left aligned text on viewports sized MD (medium) or wider."),r.a.createElement("p",{className:"text-lg-left"},"Left aligned text on viewports sized LG (large) or wider."),r.a.createElement("p",{className:"text-xl-left"},"Left aligned text on viewports sized XL (extra-large) or wider."),r.a.createElement("p",{className:"text-xxl-left"},"Left aligned text on viewports sized XXL (extra-extra-large) or wider.")))},i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"text-wrapping-and-overflow"},"Text wrapping and overflow"),r.a.createElement("p",null,"Prevent text from wrapping with a ",r.a.createElement(o.Property,{value:".text-nowrap"})," class."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"text-nowrap sc-highlight",style:{width:"8rem"}},"\n","This text should overflow the parent.","\n")),r.a.createElement("p",null,"For longer content, you can add a ",r.a.createElement(o.Property,{value:".text-truncate"})," class to truncate the text with an ellipsis. ",r.a.createElement("b",null,"Requires")," display: ",r.a.createElement(o.Property,{value:"inline-block"})," ",r.a.createElement("b",null,"or")," ",r.a.createElement(o.Property,{value:"display: block"}),"."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 text-truncate"},"Cras egestas dolor nec nunc scelerisque tincidunt.")),"\n\n",r.a.createElement("span",{className:"d-inline-block text-truncate",style:{maxWidth:"150px"}},"\n","Cras egestas dolor nec nunc scelerisque tincidunt.","\n")))},c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"text-transform"},"Text transform"),r.a.createElement("p",null,"Transform text in components with text capitalization classes."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"text-lowercase"},"Lowercased text."),r.a.createElement("p",{className:"text-uppercase"},"Uppercased text."),r.a.createElement("p",{className:"text-capitalize"},"CapiTaliZed text.")),r.a.createElement("p",null,"Note how ",r.a.createElement(o.Property,{value:".text-capitalize"})," only changes the first letter of each word, leaving the case of any other letters unaffected."))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"font-weight-and-italics"},"Font weight and italics"),r.a.createElement("p",null,"Quickly change the weight (boldness) of text or italicize text."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"font-weight-bold"},"Bold text."),r.a.createElement("p",{className:"font-weight-normal"},"Normal weight text."),r.a.createElement("p",{className:"font-weight-light"},"Light weight text."),r.a.createElement("p",{className:"font-italic"},"Italic text.")))};t.default=function(){return r.a.createElement(o.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."),r.a.createElement(l,null),r.a.createElement(i,null),r.a.createElement(c,null),r.a.createElement(s,null))}}}]);
//# sourceMappingURL=doc-route.chunk_42.js.map?c5f66ce4706233bdc8c0