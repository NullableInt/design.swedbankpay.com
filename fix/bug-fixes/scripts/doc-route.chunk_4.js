(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[16,50,51,52,53,54,55],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(0),l=a.n(n),r=a(1),o=a.n(r),c=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},148:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(1),r=a.n(l),o=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?c.a.createElement("p",null,r):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,l?"\n":"",l?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=o},149:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(148);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(148);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),o=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:a.n(r).a.string.isRequired},t.default=o},152:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(1),r=a.n(l),o=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,o=e.params;return l&&(a=l.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),a,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=o},156:function(e,t,a){"use strict";a.r(t);var n=a(147);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(154);a.d(t,"ComponentPreview",function(){return l.default});var r=a(153);a.d(t,"DocHeading",function(){return r.default});var o=a(155);a.d(t,"DocToc",function(){return o.default});var c=a(149);a.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=a(150);a.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=a(151);a.d(t,"Icon",function(){return i.default});var m=a(152);a.d(t,"PxScript",function(){return m.default})},159:function(e,t,a){"use strict";var n=a(0),v=a.n(n),l=a(1),r=a.n(l),o=a(34),w=a.n(o);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=function(e){var t=e.label,a=e.id,n=e.name,l=e.value,r=e.href,o=e.icon,c=e.loading,u=e.type,i=e.disabled,m=e.btnType,s=e.fullWidth,d=e.loader,p=e.pullRight,E=e.input,b=e.outline,g=e.active,h=e.size,y=w()("btn","btn-".concat(b?"outline-":"").concat(u),h?"btn-".concat(h):null,c?"loading":null,s?"btn-block":null,p?"pull-right":null,g?"active":null),f={href:r,id:a,name:n,disabled:i,"data-button-loader":d?"":null,defaultValue:l};return r?f.role="button":f.type=m||"button",r?v.a.createElement("a",N({className:y},f),o?"\n\t":null,o?v.a.createElement("i",{className:"material-icons"},o):null,o&&t?v.a.createElement("span",null,t):t):E?v.a.createElement("input",N({className:y},f)):v.a.createElement("button",N({className:y},f),o?"\n\t\t":null,o?v.a.createElement("i",{className:"material-icons"},o):null,o?"\n\t\t":null,o&&t?v.a.createElement("span",null,t):t,o?"\n\t":null)};c.propTypes={type:r.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:r.a.string,id:r.a.string,name:r.a.string,value:r.a.string,href:r.a.string,icon:r.a.string,loading:r.a.bool,disabled:r.a.bool,btnType:r.a.string,fullWidth:r.a.bool,loader:r.a.bool,pullRight:r.a.bool,input:r.a.bool,outline:r.a.bool,active:r.a.bool,size:r.a.oneOf(["lg","sm","xs"])},t.a=c},176:function(e,t,a){"use strict";a.r(t),a.d(t,"Examples",function(){return g}),a.d(t,"UsageWithOtherTags",function(){return h}),a.d(t,"OutlineButtons",function(){return y}),a.d(t,"Sizes",function(){return v}),a.d(t,"ActiveState",function(){return w}),a.d(t,"DisabledState",function(){return N}),a.d(t,"UsageWithIcons",function(){return P}),a.d(t,"ButtonLoader",function(){return k}),a.d(t,"UsageWithJavascript",function(){return C}),a.d(t,"ButtonsText",function(){return T}),a.d(t,"ButtonGroup",function(){return f});var r=a(0),o=a.n(r),n=a(38),l=a(157),c=a.n(l),u=a(156),i=a(159),m=a(18);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"examples"},"Examples"),o.a.createElement("p",null,"Several button styles etc..."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{type:"danger",label:"Danger"}),"\n",o.a.createElement(i.a,{type:"link",label:"Link"}),"\n")))},h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-other-tags"},"Usage with other tags"),o.a.createElement("p",null,"The ",o.a.createElement("code",{className:"token property"},".btn")," class can also be used with other html-tags like ",o.a.createElement(c.a,{className:"language-html"},"<a>")," or ",o.a.createElement(c.a,{className:"language-html"},"<input>"),"."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Anchor",href:"#"}),"\n",o.a.createElement(i.a,{type:"primary",label:"Button"}),"\n",o.a.createElement(i.a,{type:"primary",input:!0,value:"Input",btnType:"button"}),"\n",o.a.createElement(i.a,{type:"primary",input:!0,value:"Submit",btnType:"submit"}),"\n",o.a.createElement(i.a,{type:"primary",input:!0,value:"Reset",btnType:"reset"}),"\n")))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"outline-buttons"},"Outline buttons"),o.a.createElement("p",null,"Several button styles etc..."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{outline:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{outline:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{outline:!0,type:"danger",label:"Danger"}),"\n")))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-group"},"Using buttons together"),o.a.createElement("p",null,"When you use buttons next to each other you have to wrap them in a ",o.a.createElement("code",{className:"token-property"},"button-group"),"."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Activate"}),"\n",o.a.createElement(i.a,{type:"secondary",label:"Disable"}),"\n",o.a.createElement(i.a,{type:"danger",label:"Delete"}),"\n")))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"sizes"},"Sizes"),o.a.createElement("p",null,"Several button sizes etc..."),o.a.createElement("h3",null,"Large buttons"),o.a.createElement("p",null,"...",o.a.createElement("code",{className:"token property"},".btn-lg")),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{size:"lg",type:"primary",label:"Large button"}),"\n",o.a.createElement(i.a,{size:"lg",type:"secondary",label:"Large button"}),"\n")),o.a.createElement("h3",null,"Small buttons"),o.a.createElement("p",null,"...",o.a.createElement("code",{className:"token property"},".btn-sm")),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{size:"sm",type:"primary",label:"Small button"}),"\n",o.a.createElement(i.a,{size:"sm",type:"secondary",label:"Small button"}),"\n")),o.a.createElement("h3",null,"Extra small buttons"),o.a.createElement("p",null,"...",o.a.createElement("code",{className:"token property"},".btn-xs")),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{size:"xs",type:"primary",label:"Extra small button"}),"\n",o.a.createElement(i.a,{size:"xs",type:"secondary",label:"Extra small button"}),"\n")),o.a.createElement("h3",null,"Block level"),o.a.createElement("p",null,"...",o.a.createElement("code",{className:"token property"},".btn-block")),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{fullWidth:!0,type:"primary",label:"Block level button"}),"\n",o.a.createElement(i.a,{fullWidth:!0,type:"secondary",label:"Block level button"}),"\n")))},w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"active-state"},"Active state"),o.a.createElement("p",null,"Active state with ",o.a.createElement("code",{className:"token property"},".active"),"..."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{active:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{active:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{active:!0,type:"danger",label:"Danger"}),"\n")))},N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled-state"},"Disabled state"),o.a.createElement("p",null,"Disabled state with ",o.a.createElement(u.Attribute,{name:"disabled"}),"..."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{disabled:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{disabled:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{disabled:!0,type:"danger",label:"Danger"}),"\n")))},P=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-icons"},"Usage with icons"),o.a.createElement("p",null,"To use a button with an icon... Read more about icon usage here ",o.a.createElement(n.a,{to:"/docs/core/icons"},"here"),"."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{icon:"cloud",type:"primary",label:"Primary"}),"\n\n",o.a.createElement(i.a,{icon:"cloud",type:"secondary",label:"Secondary"}),"\n")))},k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-loader"},"Button loader"),o.a.createElement("p",null,"To use a button with a loader simply add the attribute ",o.a.createElement(u.Attribute,{data:!0,name:"button-loader"})," to add the required markup for the loader component. Add class ",o.a.createElement("code",{className:"token property"},".loading")," to display the loader."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{outline:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{outline:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{outline:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("p",null,"Adding the attribute ",o.a.createElement(u.Attribute,{data:!0,name:"button-loader"})," to a button component will produce the following html:"),o.a.createElement(u.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement("button",{className:"btn btn-default loading",type:"button","data-button-loader":!0},"\n\t","Default","\n\t",o.a.createElement("div",{className:"loader"},"\n\t\t",o.a.createElement("ul",{className:"loader-icon"},"\n\t\t\t",o.a.createElement("li",null),"\n\t\t\t",o.a.createElement("li",null),"\n\t\t\t",o.a.createElement("li",null),"\n\t\t"),"\n\t"),"\n")),o.a.createElement("p",null,"If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you ",o.a.createElement("b",null,"don","'","t")," add the attribute ",o.a.createElement(u.Attribute,{data:!0,name:"button-loader"}),"."))},C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-javascript"},"Usage with javascript"),o.a.createElement("p",null,"To interact with the alert-component with javascript..."),o.a.createElement("h3",null,"Show loader"),o.a.createElement(u.ComponentPreview,{language:"javascript",codeFigure:!0},"px.button.loader.show();","\n","// OR","\n","px.button.loader.show(id);"),o.a.createElement("h3",null,"Hide loader"),o.a.createElement(u.ComponentPreview,{language:"javascript",codeFigure:!0},"px.button.loader.hide();","\n","// OR","\n","px.button.loader.hide(id);"),o.a.createElement("h3",null,"Methods"),o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Method"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(u.PxScript,{component:"button",func:"init"})),o.a.createElement("td",null,"Renders the HTML for the loader component for buttons that has the attribute ",o.a.createElement(u.Attribute,{data:!0,name:"loader"}),". This is done automatically when the ",o.a.createElement("code",{className:"token property"},"px-script.js")," loads, but might have to be used if you are not rendering your buttons right away. For instance, in react, you might want to call this function within the ",o.a.createElement(c.a,{className:"language-javascript"},"componentDidMount()")," method.")),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(u.PxScript,{component:"button",subComponents:["loader"],func:"show"})),o.a.createElement("td",null,"Gives all rendered buttons the class ",o.a.createElement("code",{className:"token property"},".loading"),", displaying the loader component within the buttons (",o.a.createElement("b",null,"if present"),").")),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(u.PxScript,{component:"button",subComponents:["loader"],func:"show",params:["id"]})),o.a.createElement("td",null,"Gives the specified button the class ",o.a.createElement("code",{className:"token property"},".loading"),". If no alert with the specified id is rendered to the DOM, the method does nothing.")),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(u.PxScript,{component:"button",subComponents:["loader"],func:"hide"})),o.a.createElement("td",null,"Removes the class ",o.a.createElement("code",{className:"token property"},".loading")," from all rendered buttons, hiding the loader component.")),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(u.PxScript,{component:"button",subComponents:["loader"],func:"hide",params:["id"]})),o.a.createElement("td",null,"Removes the class ",o.a.createElement("code",{className:"token property"},".loading")," from the button specified by id, hiding the loader component within the button. If no button with the specified id is rendered to the DOM, the method does nothing.")))))},T=function(){return o.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},o.a.createElement("p",{className:"lead"},"Use buttons..."),o.a.createElement(g,null),o.a.createElement(h,null),o.a.createElement(y,null),o.a.createElement(f,null),o.a.createElement(v,null),o.a.createElement(w,null),o.a.createElement(N,null),o.a.createElement(P,null),o.a.createElement(k,null))},O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,E(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){m.button.init()}},{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(T,null),o.a.createElement(u.DocToc,{component:T})))}}])&&d(a.prototype,n),l&&d(a,l),t}();t.default=O}}]);
//# sourceMappingURL=doc-route.chunk_4.js.map?eb7ee3aff6581e8b8173