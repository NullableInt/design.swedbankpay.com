(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[35,2,14,20,24,82,83,84,86,87,88],{361:function(e,t,n){"use strict";n.r(t);var a=n(362);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(364);n.d(t,"ComponentPreview",function(){return r.default});var l=n(369);n.d(t,"DocContainer",function(){return l.default});var o=n(365);n.d(t,"DocHeading",function(){return o.default});var c=n(366);n.d(t,"DocToc",function(){return c.default});var i=n(370);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(371);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(367);n.d(t,"Icon",function(){return u.default});var m=n(372);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(368);n.d(t,"DgScript",function(){return p.default})},362:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},363:function(e,t,n){"use strict";n.r(t),n.d(t,"ComplexAlert",function(){return s});var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(361),i=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,o=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?r.a.createElement("p",null,o):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},s=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,o=e.headerText,i=e.children;return r.a.createElement("div",{id:t,className:"alert alert-complex alert-".concat(n)},r.a.createElement("header",{className:"alert-header"},a?r.a.createElement(r.a.Fragment,null,"\n"," ",r.a.createElement(c.Icon,{classNames:"alert-icon",type:a})):null,o?r.a.createElement(r.a.Fragment,null,"\n",a?r.a.createElement("h3",{className:"ml-2"},o):r.a.createElement("h3",null,o),"\n"):null,l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement(c.Icon,{type:"close"}),"\n\t"):null,"\n"),i?r.a.createElement(r.a.Fragment,null,"\n",r.a.createElement("div",{className:a?"alert-body ml-5":"alert-body"},i),"\n"):null)};i.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default","informative"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.default=i},364:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(474),i=n(475),s=n.n(i),u=n(476);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,l=e.hideValue,o=e.removeList,i=e.showCasePanel,f=e.showCasePanelSm,d=e.codeFigure,v=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},E=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel".concat(f?" showcasepanel-sm":"")},t)},null):null,d?r.a.createElement(function(){var e="";if("html"===n&&v)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?y(t):o?E(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?y(t):o?E(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return u.b.style="",r.a.createElement("figure",null,r.a.createElement(u.a,m({},u.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},l({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};f.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,showCasePanelSm:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=f},365:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(41);t.default=Object(l.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),r.a.createElement("h1",null,t)})},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(472);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,m(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(l=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(n.prototype,l),o&&s(n,o),t}();d.propTypes={component:o.a.func.isRequired},t.default=d},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=function(e){var t=e.type,n=e.classNames;return r.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};o.propTypes={type:n.n(l).a.string.isRequired},t.default=o},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=function(e){var t,n,a=e.component,l=e.subComponents,o=e.func,c=e.params;return l&&(n=l.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"dg"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},o),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(361),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement(c.DocHeading,null),r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},370:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(363);t.default=function(){return r.a.createElement(l.default,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},371:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(363);t.default=function(){return r.a.createElement(l.default,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},372:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(1),r=n.n(a),l=n(50),o=n(361),c=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(o.DgScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("td",null,"Opens the given ",t.toLowerCase())))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(o.DgScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("td",null,"Closes the given ",t.toLowerCase())))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close,s=e.others;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Function"),r.a.createElement("th",{scope:"col"},"Purpose"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement(o.DgScript,{component:t,func:"init"})),r.a.createElement("td",null,r.a.createElement(l.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase())),n?r.a.createElement(c,{componentName:t}):null,a?r.a.createElement(i,{componentName:t}):null,s&&s.map(function(e,n){return r.a.createElement(e,{key:n,componentName:t})}))))}},373:function(e,t,n){"use strict";n.r(t),n.d(t,"Addon",function(){return s});var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(473),i=n.n(c),s=function(e){var t=e.type,n=e.value,a=e.color,l=e.disabled;return"button"===t?r.a.createElement("button",{type:"button",className:"btn btn-".concat(a),disabled:l},n):r.a.createElement("span",{className:"input-group-addon"},"icon"===t?r.a.createElement("i",{className:"material-icons"},n):n)},u=function(e){var t=e.icon;return r.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",r.a.createElement("i",{className:"material-icons"},t),"\n\t")},m=function(e){var t=e.id,n=e.type,l=e.placeholder,o=e.pattern,c=e.validate,m=e.required,p=e.defaultValue,f=e.autoComplete,d=e.disabled,v=e.readOnly,y=e.label,E=e.validationState,b=e.selectOptions,h=e.prefixValue,g=e.prefixType,N=e.prefixBtnColor,w=e.postfixValue,k=e.postfixType,T=e.postfixBtnColor,C=e.feedbackIcon,O=e.helpBlock,S=e.errorMessage,x=e.successMessage,P={type:n||null,className:"form-control",id:t||null,placeholder:l||null,defaultValue:p||"",disabled:d||null,readOnly:v||null,autoComplete:f||null,required:m||null,pattern:o?"":null,"data-validate":c?"":null},L=i()("input-group",E?"has-".concat(E):null,C?"has-feedback":null);return r.a.createElement("div",{className:"form-group"},"\n",y?r.a.createElement("label",{htmlFor:t},y):null,y?"\n":null,r.a.createElement("div",{className:L},"\n",h?r.a.createElement(s,{type:g,value:h,color:N,disabled:d}):null,h?"\n":null,"textarea"===n?r.a.createElement("textarea",P):"select"===n?r.a.createElement("select",{className:"form-control",disabled:d,readOnly:v},"\n\t\t",b.map(function(e,t){return r.a.createElement(a.Fragment,{key:e+t},r.a.createElement("option",null,e),t!==b.length-1?"\n\t\t":"")}),"\n\t"):r.a.createElement("input",P),"\n",C?r.a.createElement(u,{icon:C}):null," ",C?"\n":null,w?r.a.createElement(s,{type:k,value:w,color:T,disabled:d}):null,w?"\n":null),O?r.a.createElement("div",{className:"help-block","data-success":x||null,"data-error":S||null},O):null)};m.propTypes={type:o.a.string.isRequired,id:o.a.string,placeholder:o.a.string,pattern:o.a.string,validate:o.a.bool,required:o.a.bool,defaultValue:o.a.string,autoComplete:o.a.string,disabled:o.a.bool,readOnly:o.a.bool,label:o.a.string,validationState:o.a.oneOf(["success","error",""]),selectOptions:o.a.array,prefixValue:o.a.string,prefixType:o.a.oneOf(["button","icon",""]),prefixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),postfixValue:o.a.string,postfixType:o.a.oneOf(["button","icon",""]),postfixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),feedbackIcon:o.a.string,helpBlock:o.a.oneOfType([o.a.string,o.a.bool]),errorMessage:o.a.string,successMessage:o.a.string},t.default=m},385:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(14),o=n.n(l),c=n(478),i=n.n(c),s=(n(479),"swedbankpay"),u=(i.a,function(){return r.a.createElement("button",{type:"button",className:"topbar-btn"},"\n\t\t",r.a.createElement("i",{className:"material-icons topbar-btn-icon"},"menu"),"\n\t\t")}),m=function(e){var t=e.menu,n=e.logout,l=t.items;return r.a.createElement("nav",{className:"topbar-nav"},r.a.createElement("div",{className:"topbar-link-container"},"\n",r.a.createElement("button",{type:"button",className:"topbar-close"},"\n",r.a.createElement("i",{className:"material-icons"},"close"),"\n"),l.map(function(e,t){return r.a.createElement(a.Fragment,{key:t},"\n",r.a.createElement("a",{href:"#",className:"Home"===e.name?"active":null,onClick:function(e){return e.preventDefault()}},"\n",e.icon?r.a.createElement("i",{className:"material-icons"},e.icon):null,"\n",r.a.createElement("span",null,e.name),"\n"))}),"\n",n?r.a.createElement(p,null):null))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"topbar-link-right",href:"#",onClick:function(e){return e.preventDefault()}},"\n",r.a.createElement("i",{className:"material-icons"},"exit_to_app"),"\n",r.a.createElement("span",null,"Log out"),"\n"),"\n")},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"topbar-logo",href:"/",onClick:function(e){return e.preventDefault()}},"\n",r.a.createElement("img",{src:"".concat("/feature/sidebar/","img/").concat(s,"-logo.svg"),alt:"".concat(s,"-logo")}),"\n"),"\n")},d=function(e){var t=e.topbarContent,n=e.wide,a=e.logout,l=e.id;return r.a.createElement("header",{className:"topbar".concat(n?" topbar-".concat(n,"-wide"):""),id:l},"\n",t?r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),"\n",r.a.createElement(f,null),r.a.createElement(m,{menu:t,logout:!!a})):r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),a?r.a.createElement(p,null):null))};d.propTypes={topbarContent:o.a.object,fixed:o.a.bool,logout:o.a.bool},t.default=d},394:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(373),o=[{title:"Introduction",lastParent:!0,subList:[{title:"Introduction 1"},{title:"Introduction 2"},{title:"Introduction 3"}]},{title:"Summary",lastParent:!0,subList:[{title:"Summary chapter 1"},{title:"Summary chapter 2"},{title:"Summary chapter 3"}]},{title:"Other features",lastParent:!1,subList:[{title:"Operations",lastParent:!0,subList:[{title:"Operations"},{title:"Lorem ipsum"},{title:"Dolor sit amet consectetur"},{title:"Adipiscing elit"}]},{title:"Events",lastParent:!0,subList:[{title:"Event 1"},{title:"Event 2"},{title:"Event 3"}]}]}];t.default=function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement(l.default,{id:"sidebar-search",type:"text",placeholder:"Search...",prefixType:"icon",prefixValue:"search"})," ","\n\n",r.a.createElement("nav",{className:"sidebar-nav"},o.map(function(e,t){return r.a.createElement("div",{key:t,className:"nav-group"},r.a.createElement("div",{className:"nav-group-heading"},r.a.createElement("i",{className:"material-icons"},"arrow_right"),r.a.createElement("span",null,e.title)),e.lastParent?r.a.createElement("ul",{className:"nav-ul"},e.subList.map(function(e,t){return r.a.createElement("li",{key:t,className:"nav-leaf"},r.a.createElement("a",{href:"",onClick:function(e){return e.preventDefault()}},e.title))})):r.a.createElement("ul",{className:"nav-ul"},e.subList.map(function(e,t){return r.a.createElement("li",{key:t,className:"nav-subgroup"},r.a.createElement("div",{className:"nav-subgroup-heading"},r.a.createElement("i",{className:"material-icons"},"arrow_right"),r.a.createElement("span",null,e.title)),r.a.createElement("ul",{className:"nav-ul"},e.subList.map(function(e,t){return r.a.createElement("li",{key:t,className:"nav-leaf"},r.a.createElement("a",{href:"",onClick:function(e){return e.preventDefault()}},e.title))})))})))})))}},430:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(361),o=n(394),c=n(385),i=window.dg.sidebar,s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"overview"},"Overview"),r.a.createElement("p",null,"The sidebar supports a depth of up to 3 levels."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(c.default,{wide:"xl",logout:!0,id:"demo-topbar"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-auto"},r.a.createElement(o.default,null)),r.a.createElement("main",{className:"col main-content border-left"},"Main content things...")))))};t.default=function(){return Object(a.useEffect)(function(){i.init()}),r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"The sidebar is used to give users an easily available navigational bar on the left side of your web application."),r.a.createElement(s,null))}},471:function(e,t){(function(t){e.exports=t}).call(this,{})},472:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=y,t.HashLink=E,t.NavHashLink=b;var o=s(n(1)),c=s(n(14)),i=n(50);function s(e){return e&&e.__esModule?e:{default:e}}var u="",m=null,p=null,f=null;function d(){u="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function v(){var e=document.getElementById(u);return null!==e&&(f(e),d(),!0)}function y(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,r({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===l(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===v()&&(null===m&&(m=new MutationObserver(v)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function E(e){return y(e,i.Link)}function b(e){return y(e,i.NavLink)}var h={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};E.propTypes=h,b.propTypes=h},473:function(e,t,n){var a;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=r(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)l.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===r(n(471))&&n(471)?void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a):window.classNames=o}()},478:function(e,t,n){e.exports=n.p+"img/swedbankpay-logo.svg?19b6f40ff24042e34940f290059f1199"},479:function(e,t,n){e.exports=n.p+"img/payex-logo.svg?467d541679b8f5b7ec3bcfdc39af22a5"}}]);
//# sourceMappingURL=doc-route.chunk_21.js.map?2c6290e2f44febdbfd26