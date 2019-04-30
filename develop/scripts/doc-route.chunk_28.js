(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[27,2,45,46,47,48,50,51,52],{371:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},372:function(e,t,n){"use strict";var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,o=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?r.a.createElement("p",null,o):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=c},373:function(e,t,n){"use strict";n.r(t);var a=n(371);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(374);n.d(t,"ComponentPreview",function(){return r.default});var l=n(380);n.d(t,"DocContainer",function(){return l.default});var o=n(381);n.d(t,"DocHeading",function(){return o.default});var c=n(375);n.d(t,"DocToc",function(){return c.default});var i=n(376);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(377);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(378);n.d(t,"Icon",function(){return u.default});var m=n(379);n.d(t,"PxScript",function(){return m.default})},374:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=n(383),i=n(384),s=n.n(i),u=n(385);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,l=e.hideValue,o=e.removeList,i=e.showCasePanel,f=e.codeFigure,d=e.dangerousHTML,E=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},y=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,f?r.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?E(t):o?y(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?E(t):o?y(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return u.b.style="",r.a.createElement("figure",null,r.a.createElement(u.a,m({},u.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},l({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};f.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=f},375:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=n(382);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,m(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(l=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(n.prototype,l),o&&s(n,o),t}();d.propTypes={component:o.a.func.isRequired},t.default=d},376:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(372);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},377:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(372);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},378:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(65),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},379:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=function(e){var t,n,a=e.component,l=e.subComponents,o=e.func,c=e.params;return l&&(n=l.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},o),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},380:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=n(373),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},382:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=y,t.HashLink=h,t.NavHashLink=v;var o=s(n(1)),c=s(n(65)),i=n(96);function s(e){return e&&e.__esModule?e:{default:e}}var u="",m=null,p=null,f=null;function d(){u="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function E(){var e=document.getElementById(u);return null!==e&&(f(e),d(),!0)}function y(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,r({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===l(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===E()&&(null===m&&(m=new MutationObserver(E)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function h(e){return y(e,i.Link)}function v(e){return y(e,i.NavLink)}var b={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};h.propTypes=b,v.propTypes=b},419:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicList",function(){return p}),n.d(t,"InlineList",function(){return f}),n.d(t,"DescriptionList",function(){return d}),n.d(t,"SettingsList",function(){return E}),n.d(t,"ItemList",function(){return y}),n.d(t,"HoverItemList",function(){return h}),n.d(t,"StripedItemList",function(){return v});var a=n(1),r=n.n(a),l=n(373),o=n(66);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"basic-list"},"Basic list"),r.a.createElement("p",null,"Add ",r.a.createElement(l.Property,{value:".list"})," to a list to display the basic list. Our lists do not use bullet points."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,"Bread"),r.a.createElement("li",null,"Coffee beans"),r.a.createElement("li",null,"Milk"),r.a.createElement("li",null,"Butter"))),r.a.createElement("h3",null,"Nested list"),r.a.createElement("p",null,"Use nesting with lists to signify that some items are children of another item."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,"Coffee"),r.a.createElement("li",null,"Tea",r.a.createElement("ul",null,r.a.createElement("li",null,"Black tea"),r.a.createElement("li",null,"Green tea"),r.a.createElement("li",null,"Ice tea"))),r.a.createElement("li",null,"Milk"))))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"inline-list"},"Inline list"),r.a.createElement("p",null,"Use ",r.a.createElement(l.Property,{value:".list-inline"})," on a list to make all items appear on the same line."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("ul",{className:"list list-inline"},r.a.createElement("li",null,"Coffee"),r.a.createElement("li",null,"Tea"),r.a.createElement("li",null,"Milk"))))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"description-list"},"Description list"),r.a.createElement("p",null,"The description list lets you provide each item with a more specific description of each item. Add ",r.a.createElement(l.Property,{value:".description-list"})," to your dl."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("dl",{className:"description-list"},"\n",r.a.createElement("dt",null,"Frog"),r.a.createElement("dd",null,"Wet green thing that croaks."),"\n",r.a.createElement("dt",null,"Rabbit"),r.a.createElement("dd",null,"Warm fluffy thing that jumps."),"\n",r.a.createElement("dt",null,"Color"),r.a.createElement("dd",null,"Any hue except white or black."),"\n")))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"settings-list"},"Settings list"),r.a.createElement("p",null,"Use ",r.a.createElement(l.Property,{value:".settings-list"})," to visualize different settings in your web application."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("ul",{className:"settings-list"},r.a.createElement("li",null,"\n",r.a.createElement("i",{className:"material-icons text-success"},"check"),"Shovels and tapestry newsletter","\n"),r.a.createElement("li",null,"\n",r.a.createElement("i",{className:"material-icons text-warning"},"remove"),"Spoon collectors weekly newsletter","\n"),r.a.createElement("li",null,"\n",r.a.createElement("i",{className:"material-icons text-danger"},"clear"),"Energetic squirrels newsletter","\n"))))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"item-list"},"Item list "),r.a.createElement("p",null,r.a.createElement(l.Property,{value:".item-list"}),"s is a good way to offer more extensive information about each item. Each item has their own box which seperates the items more clearly than our other options."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("ul",{className:"item-list"},r.a.createElement("li",null,"4925*********004"),r.a.createElement("li",null,"4925*********004"),r.a.createElement("li",null,"4925*********004"))))},h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"hover-item-list"},"Hover item list "),r.a.createElement("p",null,"Include ",r.a.createElement(l.Property,{value:".item-list-hover"})," to give your items a hover effect. You can use this on any variation of ",r.a.createElement(l.Property,{value:".item-list"}),"."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("ul",{className:"item-list item-list-hover"},r.a.createElement("li",null,"\n",r.a.createElement("span",null,"4925*********004"),"\n",r.a.createElement("span",{className:"status status-success"},"Active"),"\n"),r.a.createElement("li",null,"\n",r.a.createElement("span",null,"4925*********004"),"\n",r.a.createElement("span",{className:"status status-warning"},"Expires soon"),"\n"),r.a.createElement("li",null,"\n",r.a.createElement("span",null,"4925*********004"),"\n",r.a.createElement("span",{className:"status status-danger"},"Expired"),"\n"))))},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"item-list-striped"},"Striped item list"),r.a.createElement("p",null,"If you want more seperation between each item you can use ",r.a.createElement(l.Property,{value:".item-list-striped"}),"."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("ul",{className:"item-list item-list-striped"},r.a.createElement("li",null,r.a.createElement("span",null,"4925*********004"),r.a.createElement("div",{className:"action-list"},"\n",r.a.createElement(l.Icon,{icon:"more_vert"}),"\n",r.a.createElement("div",{className:"action-menu"},"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(l.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(l.Icon,{icon:"business_center"}),"Add client"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(l.Icon,{icon:"add_circle"}),"Add document"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(l.Icon,{icon:"person_add"}),"Add user"),"\n"))),r.a.createElement("li",null,"\n",r.a.createElement("span",null,"\n\t\t\t","4925*********004","\n\t\t\t",r.a.createElement("span",{className:"badge badge-blue"},"new"),"\n"),"\n",r.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),r.a.createElement("li",null,"\n",r.a.createElement("span",null,"4925*********004"),"\n",r.a.createElement("i",{className:"material-icons"},"star"),"\n"),r.a.createElement("li",null,"\n",r.a.createElement("span",null,"4925*********004"),"\n",r.a.createElement("span",{className:"status status-success"},"Active"),"\n",r.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},r.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,u(t).apply(this,arguments))}var n,c,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(c=[{key:"componentDidMount",value:function(){o.a.init()}},{key:"render",value:function(){return r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use lists to give a structured view of information."),r.a.createElement(p,null),r.a.createElement(f,null),r.a.createElement(d,null),r.a.createElement(E,null),r.a.createElement(y,null),r.a.createElement(h,null),r.a.createElement(v,null))}}])&&i(n.prototype,c),b&&i(n,b),t}();t.default=b}}]);
//# sourceMappingURL=doc-route.chunk_28.js.map?c310844f1a1fef80927e