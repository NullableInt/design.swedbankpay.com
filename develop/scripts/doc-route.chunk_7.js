(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[58,2,52,53,54,55,56],{361:function(e,t,a){"use strict";a.r(t);var n=a(362);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(364);a.d(t,"ComponentPreview",function(){return l.default});var r=a(368);a.d(t,"DocContainer",function(){return r.default});var o=a(372);a.d(t,"DocHeading",function(){return o.default});var i=a(365);a.d(t,"DocToc",function(){return i.default});var c=a(369);a.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=a(370);a.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=a(366);a.d(t,"Icon",function(){return s.default});var m=a(371);a.d(t,"JavascriptDocs",function(){return m.default});var d=a(367);a.d(t,"PxScript",function(){return d.default})},362:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return i});var n=a(1),l=a.n(n),r=a(53),o=a.n(r),i=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};c.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},i.propTypes={value:o.a.string.isRequired},t.default=c},363:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(1),l=a.n(n),r=a(53),o=a.n(r),i=a(361),c=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,o=e.text,i=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?l.a.createElement("i",{className:"material-icons alert-icon"},n):null,o?"\n":"",o?l.a.createElement("p",null,o):null,i?"\n":"",i?l.a.createElement("div",{className:"alert-body"},i):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},u=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,o=e.headerText,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(a)},l.a.createElement("header",{className:"alert-header"},n?l.a.createElement(l.a.Fragment,null,"\n"," ",l.a.createElement(i.Icon,{classNames:"alert-icon",icon:n})):null,o?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("h3",null,o),"\n"):null,r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement(i.Icon,{icon:"close"}),"\n\t"):null,"\n"),c?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("div",{className:"alert-body"},c),"\n"):null)};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.b=c},364:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(53),o=a.n(r),i=a(374),c=a(375),u=a.n(c),s=a(376);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){var t=e.children,a=e.language,n=e.removeOuterTag,r=e.hideValue,o=e.removeList,c=e.showCasePanel,p=e.showCasePanelSm,f=e.codeFigure,b=e.dangerousHTML,E=function(e){var t=document.createElement("div");return t.innerHTML=Object(i.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},v=function(e){var t=document.createElement("div");t.innerHTML=Object(i.renderToStaticMarkup)(e);var a=t.querySelectorAll("li"),n="";return a.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return l.a.createElement(l.a.Fragment,null,c?l.a.createElement(function(){return l.a.createElement("div",{className:"showcase-panel".concat(p?" showcasepanel-sm":"")},t)},null):null,f?l.a.createElement(function(){var e="";if("html"===a&&b)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===a&&t&&"function"==typeof t.map)t.map(function(t){e+=n?E(t):o?v(t):Object(i.renderToStaticMarkup)(t)});else if("html"===a)e+=n?E(t):o?v(t):Object(i.renderToStaticMarkup)(t);else switch(d(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(a){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",l.a.createElement("figure",null,l.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:a}),function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:t,style:a},n.map(function(e,t){return l.a.createElement("div",m({key:e+t},r({line:e,key:t})),e.map(function(e,t){return l.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};p.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,showCasePanelSm:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=p},365:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(53),o=a.n(r),i=a(373);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var a=e.type().props.children[0];if("h2"===a.type)t.push({title:a.props.children,id:a.props.id});else if("function"==typeof a.type){var n=a.type().props.children[0];"h2"===n.type&&t.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=s(this,m(t).call(this,e))).state={headings:p(a.props.component().props.children),windowTopPosition:window.pageYOffset},a}var a,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["Component"]),a=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(t,a){if(t.id&&t.title){var n=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[a+1].top;return l.a.createElement("li",{key:a,className:n?"active":""},l.a.createElement(i.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(a.prototype,r),o&&u(a,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},366:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(53),o=function(e){var t=e.icon,a=e.classNames;return l.a.createElement("i",{className:"material-icons".concat(a?" ".concat(a):"")},t)};o.propTypes={icon:a.n(r).a.string.isRequired},t.default=o},367:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(53),o=a.n(r),i=function(e){var t,a,n=e.component,r=e.subComponents,o=e.func,i=e.params;return r&&(a=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return l.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<i.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,n),l.a.createElement("span",{className:"token punctuation"},"."),a,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=i},368:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(53),o=a.n(r),i=a(361),c=function(e){var t=e.docToc,a=e.children,n=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},a)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(n,null),t?l.a.createElement(i.DocToc,{component:n}):null))};c.propTypes={docToc:o.a.bool},t.default=c},369:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(363);t.default=function(){return l.a.createElement(r.b,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},370:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(363);t.default=function(){return l.a.createElement(r.b,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},371:function(e,t,a){"use strict";a.r(t),a.d(t,"OpenDocs",function(){return i}),a.d(t,"CloseDocs",function(){return c});var n=a(1),l=a.n(n),r=a(97),o=a(361),i=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,l.a.createElement(o.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},c=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,l.a.createElement(o.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,a=e.open,n=e.close;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,l.a.createElement(o.PxScript,{component:t,func:"init"})),l.a.createElement("p",null,l.a.createElement(r.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),a?l.a.createElement(i,{componentName:t}):null,n?l.a.createElement(c,{componentName:t}):null)}},373:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)};t.genericHashLink=E,t.HashLink=v,t.NavHashLink=h;var o=u(a(1)),i=u(a(53)),c=a(97);function u(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,d=null,p=null;function f(){s="",null!==m&&m.disconnect(),null!==d&&(window.clearTimeout(d),d=null)}function b(){var e=document.getElementById(s);return null!==e&&(p(e),f(),!0)}function E(e,t){e.scroll,e.smooth;var a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["scroll","smooth"]);return o.default.createElement(t,l({},a,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(p=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===b()&&(null===m&&(m=new MutationObserver(b)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),d=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function v(e){return E(e,c.Link)}function h(e){return E(e,c.NavLink)}var y={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};v.propTypes=y,h.propTypes=y},378:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(1),l=a.n(n),r=a(53),o=a.n(r),i=a(315),c=a.n(i),u=function(e){var t=e.type,a=e.value,n=e.color,r=e.disabled;return"button"===t?l.a.createElement("button",{type:"button",className:"btn btn-".concat(n),disabled:r},a):l.a.createElement("span",{className:"input-group-addon"},"icon"===t?l.a.createElement("i",{className:"material-icons"},a):a)},s=function(e){var t=e.icon;return l.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",l.a.createElement("i",{className:"material-icons"},t),"\n\t")},m=function(e){var t=e.id,a=e.type,r=e.placeholder,o=e.pattern,i=e.validate,m=e.required,d=e.defaultValue,p=e.autoComplete,f=e.disabled,b=e.readOnly,E=e.label,v=e.validationState,h=e.selectOptions,y=e.prefixValue,g=e.prefixType,k=e.prefixBtnColor,w=e.postfixValue,x=e.postfixType,T=e.postfixBtnColor,N=e.feedbackIcon,C=e.helpBlock,P=e.errorMessage,O=e.successMessage,A={type:a||null,className:"form-control",id:t||null,placeholder:r||null,defaultValue:d||"",disabled:f||null,readOnly:b||null,autoComplete:p||null,required:m||null,pattern:o?"":null,"data-validate":i?"":null},S=c()("input-group",v?"has-".concat(v):null,N?"has-feedback":null);return l.a.createElement("div",{className:"form-group"},"\n",E?l.a.createElement("label",{htmlFor:t},E):null,E?"\n":null,l.a.createElement("div",{className:S},"\n",y?l.a.createElement(u,{type:g,value:y,color:k,disabled:f}):null,y?"\n":null,"textarea"===a?l.a.createElement("textarea",A):"select"===a?l.a.createElement("select",{className:"form-control",disabled:f,readOnly:b},"\n\t\t",h.map(function(e,t){return l.a.createElement(n.Fragment,{key:e+t},l.a.createElement("option",null,e),t!==h.length-1?"\n\t\t":"")}),"\n\t"):l.a.createElement("input",A),"\n",N?l.a.createElement(s,{icon:N}):null," ",N?"\n":null,w?l.a.createElement(u,{type:x,value:w,color:T,disabled:f}):null,w?"\n":null),C?l.a.createElement("div",{className:"help-block","data-success":O||null,"data-error":P||null},C):null)};m.propTypes={type:o.a.string.isRequired,id:o.a.string,placeholder:o.a.string,pattern:o.a.string,validate:o.a.bool,required:o.a.bool,defaultValue:o.a.string,autoComplete:o.a.string,disabled:o.a.bool,readOnly:o.a.bool,label:o.a.string,validationState:o.a.oneOf(["success","error",""]),selectOptions:o.a.array,prefixValue:o.a.string,prefixType:o.a.oneOf(["button","icon",""]),prefixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),postfixValue:o.a.string,postfixType:o.a.oneOf(["button","icon",""]),postfixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),feedbackIcon:o.a.string,helpBlock:o.a.oneOfType([o.a.string,o.a.bool]),errorMessag:o.a.string,successMessag:o.a.string},t.b=m},383:function(e,t,a){"use strict";var n=a(1),l=a.n(n),r=a(53),o=a.n(r),i=function(e){var t=e.id,a=e.checked,n=e.disabled,r=e.label,o={type:"checkbox",id:t||null,disabled:n||null,defaultChecked:a||null};return l.a.createElement("div",{className:"checkbox"},"\n",l.a.createElement("input",o),"\n",r?l.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};i.propTypes={id:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var c=i,u=a(378),s=function(e){var t=e.format,a=e.time,n=e.min,r=e.max,o=e.months,i=e.value,c=e.label,s=e.prefixValue,m=e.prefixType,d=e.fulldate,p=e.mode,f=e.allowinput,b=e.required,E=e.id,v={id:E,className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":t||null,"data-datepicker-time":a||null,"data-datepicker-min":n||null,"data-datepicker-max":r||null,"data-datepicker-value":i||null,"data-datepicker-months":o||null,"data-datepicker-fulldate":d||null,"data-datepicker-mode":p||null,"data-datepicker-allowinput":f||null,"data-required":b||null};return c?l.a.createElement("div",{className:"form-group"},"\n",l.a.createElement("label",{htmlFor:E||null},c),"\n",l.a.createElement("div",{className:"input-group"},"\n",s?l.a.createElement(u.a,{type:m,value:s}):null,"\n",l.a.createElement("input",v),"\n")):l.a.createElement("input",v)};s.propTypes={format:o.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:o.a.bool,min:o.a.string,max:o.a.string,months:o.a.string,value:o.a.string,label:o.a.string,id:o.a.string,required:o.a.bool};var m=s,d=function(e){var t=e.text,a=e.label;return l.a.createElement("div",{className:"form-group"},"\n",a?l.a.createElement("label",null,a):null,a?"\n":null,l.a.createElement("span",{className:"form-control-text"},t),"\n")};d.propTypes={text:o.a.string.isRequired,label:o.a.string};var p=d,f=function(e){var t=e.id,a=e.checked,n=e.disabled,r=e.label,o={type:"radio",id:t||null,name:e.name||null,disabled:n||null,defaultChecked:a||null};return l.a.createElement("div",{className:"radio"},"\n",l.a.createElement("input",o),"\n",r?l.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};f.propTypes={id:o.a.string,name:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var b=f,E=function(e){var t=e.name,a=e.min,n=e.max,r=e.step,o=e.color,i=e.value,c=e.disabled,u=e.valueLabel,s=e.valueLabelPrefix,m=e.valueLabelPostfix,d=e.valueLabelPosition,p={type:"range",name:t,min:a,max:n,step:r,defaultValue:i,disabled:c};return l.a.createElement("div",{className:"rangeslider rangeslider-".concat(o||"brand"," label-").concat(d||"right")},"\n",l.a.createElement("input",p),u?"\n":null,u?l.a.createElement(function(){return l.a.createElement("output",{className:"value-label"},"\n\t\t",l.a.createElement("p",null,"\n\t\t\t",s?l.a.createElement("span",null,s):null,s?"\n\t\t\t":null,l.a.createElement("span",{"data-rs-value":!0},i),"\n\t\t\t",m?l.a.createElement("span",null,m):null,m?"\n\t\t":null),"\n\t")},null):null,u?"\n":null)};E.propTypes={name:o.a.string,min:o.a.number,max:o.a.number,step:o.a.number,color:o.a.oneOf(["brand","neutral","default"]),value:o.a.number,disabled:o.a.bool,valueLabel:o.a.bool,valueLabelPrefix:o.a.string,valueLabelPostfix:o.a.string,valueLabelPosition:o.a.string};var v=E,h=function(e){var t=e.id,a=e.checked,n=e.disabled,r=e.label,o={type:"checkbox",id:t||null,disabled:n||null,defaultChecked:a||null};return l.a.createElement("div",{className:"togglebox"},"\n",l.a.createElement("input",o),"\n",r?l.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};h.propTypes={id:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var y=h;a.d(t,"a",function(){return c}),a.d(t,"b",function(){return m}),a.d(t,"c",function(){return p}),a.d(t,"d",function(){return b}),a.d(t,"e",function(){return v}),a.d(t,"f",function(){return y})},396:function(e,t,a){"use strict";a.r(t),a.d(t,"AboutDatepickers",function(){return b}),a.d(t,"SimpleDatepicker",function(){return E}),a.d(t,"AllowInput",function(){return v}),a.d(t,"HumanReadable",function(){return y}),a.d(t,"InitialValue",function(){return h}),a.d(t,"CustomFormat",function(){return g}),a.d(t,"IncludeTime",function(){return k}),a.d(t,"ShowingMultipleMonths",function(){return w}),a.d(t,"ValidDates",function(){return x}),a.d(t,"DateRange",function(){return T}),a.d(t,"MultipleDates",function(){return N}),a.d(t,"Options",function(){return C}),a.d(t,"JavascriptMethods",function(){return P});var n=a(1),l=a.n(n),r=a(373),o=a(361),i=a(383),c=a(363);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=window.px.datepicker,b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"about-datepickers"},"About"),l.a.createElement("p",null,"Datepickers give a visual presentation of days, months and years. By utilizing the datepicker you can be assured the given input is in the format you expect without having to deal with too much client-side validation. Datepickers should be used for recent dates to avoid having the user click a lot of times to find the required date. If you need a date of birth or something similarly far back, an input field with proper validation will be easier to use."))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"simple-datepicker"},"Simple datepicker"),l.a.createElement("p",null,"A basic datepicker can be made by applying the attribute ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker"})," to an input element inside a ",l.a.createElement(o.Property,{value:".form-group"}),". The basic datepicker has a read-only input field."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.b,{label:"Date",prefixType:"icon",prefixValue:"event",id:"simple-datepicker"})))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"allow-input"},"Allow input"),l.a.createElement("p",null,"By default datepickers do not allow input but you can use ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-allowinput"}),". When you allow input then the given date has to match the datepicker format (",l.a.createElement(o.Attribute,{value:"iso8601"})," if you have not specified a format)."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.b,{label:"Date",prefixType:"icon",prefixValue:"event",id:"simple-datepicker",allowinput:!0})))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"initial-value"},"Initial value"),l.a.createElement("p",null,"If you want to set an initial value for your datepicker use ",l.a.createElement(o.Attribute,{data:!0,value:"{your-date}",name:"datepicker-value"}),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.b,{value:"1972-12-28",label:"Date",prefixType:"icon",prefixValue:"event",id:"init-value-datepicker"})))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"human-readable"},"Human readable date"),l.a.createElement("p",null,"If you wish to make the date more readable to humans you can add ",l.a.createElement(o.Attribute,{data:!0,value:"true",name:"datepicker-fulldate"})),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.b,{value:"1972-12-28",label:"Date",prefixType:"icon",prefixValue:"event",fulldate:!0,id:"init-value-datepicker"})))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"custom-format"},"Custom format"),l.a.createElement("p",null,"To use a custom format include ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-format",value:"[nb|sv|da|fi|en|iso8601(default)]"}),". If no format is provided then datepicker will default to ",l.a.createElement(o.Attribute,{value:"iso8601"}),". Same behaviour applies if you try to set an invalid date."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.b,{label:"nb (norwegian):",value:"28.12.1972",format:"nb",prefixType:"icon",prefixValue:"event",id:"nb-datepicker"}),l.a.createElement(i.b,{label:"sv (swedish):",value:"1972-12-28",format:"sv",prefixType:"icon",prefixValue:"event",id:"sv-datepicker"}),l.a.createElement(i.b,{label:"da (danish):",value:"28.12.1972",format:"da",prefixType:"icon",prefixValue:"event",id:"da-datepicker"}),l.a.createElement(i.b,{label:"fi (finnish):",value:"28.12.1972",format:"fi",prefixType:"icon",prefixValue:"event",id:"fi-datepicker"}),l.a.createElement(i.b,{label:"en (english):",value:"28/12/1972",format:"en",prefixType:"icon",prefixValue:"event",id:"en-datepicker"}),l.a.createElement(i.b,{label:"iso8601 (robotic):",value:"1972-12-28",format:"iso8601",prefixType:"icon",prefixValue:"event",id:"iso8601-datepicker"})))},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"include-time"},"Include time"),l.a.createElement("p",null,"Adding time to your datepicker is as easy as using ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-time",value:"true"}),". If you wish to set a default time for the time picker just include it in the ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-value"})," attribute."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.b,{value:"28.12.1972 12:00",time:!0,format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"include-time-datepicker"})))},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"showing-multiple-months"},"Showing multiple months"),l.a.createElement("p",null,"If you need to show more than one month in your date picker use the attribute ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-months",value:"{number}"}),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.b,{months:"2",label:"Date",prefixType:"icon",prefixValue:"event",id:"multiple-months-datepicker"})))},x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"valid-dates"},"Valid dates"),l.a.createElement("p",null,"You can set a range of available dates to select from by using ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-min"})," and ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-max"}),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.b,{value:"28.12.1972",min:"28.12.1972",max:"10.05.2017",format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"valid-dates-datepicker"})))},T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"date-range"},"Date range"),l.a.createElement("p",null,"You can make it possible to select a range of dates with ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-mode",value:"range"}),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.b,{min:"10.12.1972",label:"date",prefixType:"icon",prefixValue:"event",id:"date-range-datepicker",mode:"range",format:"nb"})))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"multiple-dates"},"Multiple dates"),l.a.createElement("p",null,"Set mode to ",l.a.createElement(o.Attribute,{value:"multiple"})," for multiple date selection."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.b,{min:"10.12.1972",label:"date",prefixType:"icon",prefixValue:"event",id:"date-range-datepicker",mode:"multiple",format:"nb"})),l.a.createElement(c.b,{type:"warning"},l.a.createElement("h5",null,"Max number of dates"),l.a.createElement("p",null,"The ",l.a.createElement(o.Attribute,{value:"multiple"})," variation of datepicker does not have an upper limit of dates. Use ",l.a.createElement(r.NavHashLink,{to:"#date-range"},"range")," if you want to select a continuous range of dates.")))},C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"available-options"},"Available options"),l.a.createElement("p",null,"Options available through ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker"}),"...")," Keep in mind that setting any of these values will render them true, so setting an attribute to ",l.a.createElement(o.Attribute,{value:"false"})," will still render it true.",l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Attribute"),l.a.createElement("th",null,"Default value"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-value"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"null"})),l.a.createElement("td",null,"Value used to initialize calendar. Set this value with the same format currently set for the datepicker (including time if you have enabled that).")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-allowinput"})),l.a.createElement("td",null),l.a.createElement("td",null,"This allows the user to write in the input field. The dates given must match the format of the datepicker.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-format"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"iso8601"})),l.a.createElement("td",null,l.a.createElement("p",null,"Format string used for the input field and names for days and months. All have the same time format (HH:mm), and starts the week on monday (1)."),l.a.createElement("p",null,"The following options are available:"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"nb"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"sv"}),": YYYY-MM-DD"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"da"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"fi"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"en"}),": DD/MM/YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"iso8601"}),": YYYY-MM-DD (default)")))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-time"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"false"})),l.a.createElement("td",null,"If the calendar shows the current time and allows you to change it using a dropdown.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-months"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"1"})),l.a.createElement("td",null,"Number of months to display in the datepicker.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-min"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"null"})),l.a.createElement("td",null,"Disallow dates before min.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-max"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"null"})),l.a.createElement("td",null,"Disallow dates past max.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-altinput"})),l.a.createElement("td",null),l.a.createElement("td",null,"Use a custom format to display the selected date(s) shown in the input field.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-mode"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"single"})),l.a.createElement("td",null,"Different variations of date selection. Available options are:",l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"single"}),"User can select one date"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"multiple"}),"User can select multiple dates"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"range"}),"User can select a range of continuous dates")))))))},P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),l.a.createElement(o.JavascriptDocs,{componentName:"datepicker",open:!0,close:!0}))},O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,d(t).apply(this,arguments))}var a,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,n["Component"]),a=t,(r=[{key:"componentDidMount",value:function(){f.init()}},{key:"render",value:function(){return l.a.createElement(o.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Datepickers makes it easy to get dates from your users. With datepickers you do not have to worry about how your users write the given date, alleviating the need to do format validation."),l.a.createElement(b,null),l.a.createElement(E,null),l.a.createElement(v,null),l.a.createElement(y,null),l.a.createElement(h,null),l.a.createElement(g,null),l.a.createElement(k,null),l.a.createElement(w,null),l.a.createElement(x,null),l.a.createElement(T,null),l.a.createElement(N,null),l.a.createElement(C,null),l.a.createElement(P,null))}}])&&s(a.prototype,r),i&&s(a,i),t}();t.default=O}}]);
//# sourceMappingURL=doc-route.chunk_7.js.map?ba7b1c16c03e4ade3025