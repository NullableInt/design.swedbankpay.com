(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[30,2,45,46,47,48,50,51,52],{342:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),l=n.n(a),r=n(31),o=n.n(r),i=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),a,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&a?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},i.propTypes={value:o.a.string.isRequired},t.default=c},343:function(e,t,n){"use strict";var a=n(1),i=n.n(a),l=n(31),r=n.n(l),o=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,r=e.text,o=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?i.a.createElement("i",{className:"material-icons alert-icon"},a):null,r?"\n":"",r?i.a.createElement("p",null,r):null,o?"\n":"",o?i.a.createElement("div",{className:"alert-body"},o):null,l?"\n":"",l?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=o},344:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),l=n(31),r=n.n(l),p=n(354),o=n(355),d=n.n(o),f=n(356);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var a=e.children,l=e.language,r=e.removeOuterTag,o=e.hideValue,i=e.removeList,t=e.showCasePanel,n=e.codeFigure,c=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===l&&c)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===l&&a&&"function"==typeof a.map)a.map(function(e){n+=r?u(e):i?s(e):Object(p.renderToStaticMarkup)(e)});else if("html"===l)n+=r?u(a):i?s(a):Object(p.renderToStaticMarkup)(a);else switch(g(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(l){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",m.a.createElement("figure",null,m.a.createElement(f.a,h({},f.b,{theme:void 0,code:n,language:l}),function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,r=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",h({key:e+t},l({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",h({key:t},r({token:e,key:t})))}))}))}))},null):null)};i.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},t.default=i},345:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(31),l=n.n(a),i=n(353);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function l(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=s(this,m(l).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,r["Component"]),t=l,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return o.a.createElement("li",{key:t,className:n?"active":""},o.a.createElement(i.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),l}();d.propTypes={component:l.a.func.isRequired},t.default=d},346:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(343);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},347:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(343);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},348:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(31),o=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(r).a.string.isRequired},t.default=o},349:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),l=n(31),r=n.n(l),o=function(e){var t,n,a=e.component,l=e.subComponents,r=e.func,o=e.params;return l&&(n=l.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return i.a.createElement("span",{key:t},e,t<o.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,a),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},r),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=o},350:function(e,t,n){"use strict";n.r(t);var a=n(342);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var l=n(344);n.d(t,"ComponentPreview",function(){return l.default});var r=n(351);n.d(t,"DocContainer",function(){return r.default});var o=n(352);n.d(t,"DocHeading",function(){return o.default});var i=n(345);n.d(t,"DocToc",function(){return i.default});var c=n(346);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(347);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(348);n.d(t,"Icon",function(){return s.default});var m=n(349);n.d(t,"PxScript",function(){return m.default})},351:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(31),o=n.n(r),i=n(350),c=function(e){var t=e.docToc,n=e.children,a=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(a,null),t?l.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:o.a.bool},t.default=c},353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=g,t.NavHashLink=E;var r=c(n(1)),o=c(n(31)),i=n(54);function c(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,m=null,p=null;function d(){u="",null!==s&&s.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function f(){var e=document.getElementById(u);return null!==e&&(p(e),d(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return r.default.createElement(e,a({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===l(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(p=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function g(e){return h(e,i.Link)}function E(e){return h(e,i.NavLink)}var y={onClick:o.default.func,children:o.default.node,scroll:o.default.func,to:o.default.oneOfType([o.default.string,o.default.object])};E.propTypes=g.propTypes=y},357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(358);function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return l(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(a).default}})},358:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),r=n(1),i=(a=r)&&a.__esModule?a:{default:a},o=n(31);function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function o(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var a=arguments.length,l=Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=n=c(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(l))))._handleRefMount=function(e){n._domNode=e},c(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,r.PureComponent),l(o,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return i.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),o}();u.propTypes={async:o.PropTypes.bool,className:o.PropTypes.string,children:o.PropTypes.any,component:o.PropTypes.node},u.defaultProps={component:"code"},t.default=u},392:function(e,t,n){"use strict";n.r(t),n.d(t,"Fonts",function(){return u}),n.d(t,"Headings",function(){return s}),n.d(t,"Small",function(){return m}),n.d(t,"Lead",function(){return p}),n.d(t,"Inline",function(){return d}),n.d(t,"TextUtilities",function(){return f}),n.d(t,"Abbreviations",function(){return h}),n.d(t,"Blockquotes",function(){return g});var a=n(1),l=n.n(a),r=n(54),o=n(357),i=n.n(o),c=n(350),u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"font"},"Font"),l.a.createElement("p",null,"The standard font PayEx DesignGuide uses is Roboto. It is included in the stylesheet. The included font weights you can use are: 300, 400, 500, 700 & 900. Both normal and italicized is available."),l.a.createElement("h3",null,"Removing Roboto"),l.a.createElement("p",null,"In case your site is not going to use Roboto, you can modify your font stack by modifying the snippet below to your preferance and add it to your custom stylesheet."),l.a.createElement(c.ComponentPreview,{language:"css",codeFigure:!0},"html {\n                                font-family: GillSans, Calibri, Trebuchet, sans-serif;\n                            }"))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"headings"},"Headings"),l.a.createElement("p",null,"PayEx DesignGuide provides basic styling on all headings (h1-h6)."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h1",null,"Heading h1"),l.a.createElement("h2",null,"Heading h2"),l.a.createElement("h3",null,"Heading h3"),l.a.createElement("h4",null,"Heading h4"),l.a.createElement("h5",null,"Heading h5"),l.a.createElement("h6",null,"Heading h6")),l.a.createElement("p",null,"The classes ",l.a.createElement(c.Property,{value:".h1"})," through ",l.a.createElement(c.Property,{value:".h6"})," are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",{className:"h1"},".h1 heading"),l.a.createElement("p",{className:"h2"},".h2 heading"),l.a.createElement("p",{className:"h3"},".h3 heading"),l.a.createElement("p",{className:"h4"},".h4 heading"),l.a.createElement("p",{className:"h5"},".h5 heading"),l.a.createElement("p",{className:"h6"},".h6 heading")))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"small"},"Small"),l.a.createElement("p",null,"Use the ",l.a.createElement(i.a,{className:"language-html"},"<small></small>")," tags to create a secondary heading within a heading tag or class."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h2",null,"Main heading ",l.a.createElement("small",null,"with a faded secondary heading"))))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"lead"},"Lead"),l.a.createElement("p",null,"Make a paragraph stand out by using ",l.a.createElement(c.Property,{value:".lead"}),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",{className:"lead"},"This is a leading paragraph which for instance can be used as an introduction.")))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"inline-text-elements"},"Inline text elements"),l.a.createElement("p",null,"Styling for common inline HTML5 elements."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",null,"You can use the mark tag to ",l.a.createElement("mark",null,"highlight")," text."),l.a.createElement("p",null,l.a.createElement("del",null,"This line of text is meant to be treated as deleted text.")),l.a.createElement("p",null,l.a.createElement("s",null,"This line of text is meant to be treated as no longer accurate.")),l.a.createElement("p",null,l.a.createElement("ins",null,"This line of text is meant to be treated as an addition to the document.")),l.a.createElement("p",null,l.a.createElement("u",null,"This line of text will render as underlined")),l.a.createElement("p",null,l.a.createElement("small",null,"This line of text is meant to be treated as fine print.")),l.a.createElement("p",null,l.a.createElement("strong",null,"This line rendered as bold text.")),l.a.createElement("p",null,l.a.createElement("b",null,"This line really stands out.")),l.a.createElement("p",null,l.a.createElement("em",null,"This line rendered as italicized text.")),l.a.createElement("p",null,l.a.createElement("i",null,"This is the last line, it too will render as italicized text."))),l.a.createElement("p",null,"The ",l.a.createElement(c.Property,{value:".mark"})," and ",l.a.createElement(c.Property,{value:".small"})," classes are also available to apply the same styles as ",l.a.createElement(i.a,{className:"language-html"},"<mark>")," and ",l.a.createElement(i.a,{className:"language-html"},"<small>")," while avoiding any unwanted semantic implications that the tags would bring."),l.a.createElement("p",null,"While not shown above, feel free to use ",l.a.createElement(i.a,{className:"language-html"},"<b>")," and ",l.a.createElement(i.a,{className:"language-html"},"<i>")," in HTML5. ",l.a.createElement(i.a,{className:"language-html"},"<b>")," is meant to highlight words or phrases without conveying additional importance while ",l.a.createElement(i.a,{className:"language-html"},"<i>")," is mostly for voice, technical terms, etc."))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"text-utilities"},"Text utilities"),l.a.createElement("p",null,"Change text color with our ",l.a.createElement(r.Link,{to:"/docs/utilities/colors"},"color utilities"),"."))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"abbreviations"},"Abbreviations"),l.a.createElement("p",null,"Stylized implementation of HTML’s ",l.a.createElement(i.a,{className:"language-html"},"<abbr>")," element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies."),l.a.createElement("p",null,"Add ",l.a.createElement(c.Property,{value:".initialism"})," to an abbreviation for a slightly smaller font-size."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",null,l.a.createElement("abbr",{title:"Laugh Out Loud"},"LOL")),l.a.createElement("p",null,l.a.createElement("abbr",{title:"HyperText Markup Language",className:"initialism"},"HTML"))),l.a.createElement("p",null,l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr",target:"_blank",rel:"noopener noreferrer"},"Read more")," about abbreviations."))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"blockquotes"},"Blockquotes"),l.a.createElement("p",null,"For quoting blocks of content from another source within your document. Wrap ",l.a.createElement(i.a,{className:"language-html"},"<blockquote>")," or ",l.a.createElement(c.Property,{value:".blockquote"})," around any HTML as the quote."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."))))},null),l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Naming a source"),l.a.createElement("p",null,"Add a ",l.a.createElement(i.a,{className:"language-html"},"<footer>")," for identifying the source. Wrap the name of the source work in ",l.a.createElement(i.a,{className:"language-html"},"<cite>"),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",null,"Better learn balance. Balance is key. Balance good, karate good. Everything good. Balance bad, better pack up, go home. Understand?"),l.a.createElement("footer",null,l.a.createElement("cite",{title:"The Karate Kid (1984)"},"Mr. Miyagi")))))},null),l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Alignment"),l.a.createElement("p",null,"Use ",l.a.createElement(r.Link,{to:"/docs/utilities/text"},"text utilities")," ",l.a.createElement("b",null,"(NOT YET IMPLEMENTED)")," as needed to change the alignment of your blockquote."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote text-center"},l.a.createElement("p",null,"It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man."),l.a.createElement("footer",null,l.a.createElement("cite",{title:"Star Wars: Episode IV - A New Hope (1977)"},"Han Solo")))))},null))};t.default=function(){return l.a.createElement(c.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Documentation and examples for PayEx DesignGuide typography."),l.a.createElement(u,null),l.a.createElement(s,null),l.a.createElement(m,null),l.a.createElement(p,null),l.a.createElement(d,null),l.a.createElement(f,null),l.a.createElement(h,null),l.a.createElement(g,null))}}}]);
//# sourceMappingURL=doc-route.chunk_30.js.map?f8d0c4becbcaa546084b