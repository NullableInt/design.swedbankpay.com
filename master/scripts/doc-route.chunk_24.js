(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[25,44,46,47,48,49,51],{421:function(e,a,n){"use strict";n.r(a),n.d(a,"Property",function(){return o});var t=n(1),r=n.n(t),l=n(2),c=n.n(l),o=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,n=e.name,t=e.value;return n&&t?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),t,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!t?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&t?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},t)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},a.default=s},422:function(e,a,n){"use strict";var t=n(1),o=n.n(t),r=n(2),l=n.n(r),c=function(e){var a=e.id,n=e.type,t=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(n)},t?"\n":"",t?o.a.createElement("i",{className:"material-icons alert-icon"},t):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},a.a=c},423:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),l=n(422);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),l=n(422);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),l=n(2),c=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:n.n(l).a.string.isRequired},a.default=c},426:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n.n(t),r=n(2),l=n.n(r),c=function(e){var a,n,t=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return o.a.createElement("span",{key:a},e,a<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,t),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},a.default=c},430:function(e,a,n){"use strict";n.r(a);var t=n(421);n.d(a,"Attribute",function(){return t.default}),n.d(a,"Property",function(){return t.Property});var r=n(427);n.d(a,"ComponentPreview",function(){return r.default});var l=n(428);n.d(a,"DocHeading",function(){return l.default});var c=n(429);n.d(a,"DocToc",function(){return c.default});var o=n(423);n.d(a,"DeprecatedComponentAlert",function(){return o.default});var s=n(424);n.d(a,"ExperimentalComponentAlert",function(){return s.default});var u=n(425);n.d(a,"Icon",function(){return u.default});var m=n(426);n.d(a,"PxScript",function(){return m.default})},484:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),l=n(430),c=n(2),o=n.n(c),s=function(e){var a=e.name,n=e.hex;return r.a.createElement("div",{className:"color-preview bg-".concat(a)},r.a.createElement("p",null,a),r.a.createElement("p",null,n))};s.propTypes={name:o.a.string.isRequired,hex:o.a.string.isRequired};var u=s;n.d(a,"ColorPalette",function(){return m}),n.d(a,"ColorText",function(){return i});var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"color-palette"},"Color palette"),r.a.createElement("p",null,"The PayEx DesignGuide color palette..."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"brand",hex:"#2da944"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"default",hex:"#3c3c3c"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"neutral",hex:"#266c9a"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"success",hex:"#2da944"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"warning",hex:"#ff9f00"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"danger",hex:"#cd2e00"})))))},i=function(){return r.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"Here there be colors..."),r.a.createElement(m,null))};a.default=function(){return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(i,null),r.a.createElement(l.DocToc,{component:i})))}}}]);
//# sourceMappingURL=doc-route.chunk_24.js.map?a0f5082a1d54fca10a2b