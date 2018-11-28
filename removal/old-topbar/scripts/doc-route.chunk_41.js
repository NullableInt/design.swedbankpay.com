(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[45,5,46,48,49,50,52],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return o});var a=n(1),r=n.n(a),l=n(2),c=n.n(l),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=i},421:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},422:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(421);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(421);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(l).a.string.isRequired},t.default=c},425:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},426:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),c=n.n(l),o=n(427),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(o.DocToc,{component:a}):null))};i.propTypes={docToc:c.a.bool},t.default=i},427:function(e,t,n){"use strict";n.r(t);var a=n(420);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(428);n.d(t,"ComponentPreview",function(){return r.default});var l=n(426);n.d(t,"DocContainer",function(){return l.default});var c=n(429);n.d(t,"DocHeading",function(){return c.default});var o=n(430);n.d(t,"DocToc",function(){return o.default});var i=n(422);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(423);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(424);n.d(t,"Icon",function(){return u.default});var m=n(425);n.d(t,"PxScript",function(){return m.default})},482:function(e,t,n){"use strict";n.r(t),n.d(t,"Intro",function(){return c});var a=n(1),r=n.n(a),l=n(427),c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Set the ",r.a.createElement(l.Property,{value:"visibility"})," of elements with our visibility utilities. These do not modify the ",r.a.createElement(l.Property,{value:"display"})," value at all and are helpful for hiding content from most users, but still keeping them for screen readers."),r.a.createElement("p",null,"Apply ",r.a.createElement(l.Property,{value:".visible"})," or ",r.a.createElement(l.Property,{value:".invisible"})," as needed."),r.a.createElement(l.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("div",{className:"visible"},"..."),r.a.createElement("div",{className:"invisible"},"...")),r.a.createElement(l.ComponentPreview,{language:"css",codeFigure:!0},"\n                .visible {\n                    visibility: visible !important;\n                }\n                .invisible {\n                    visibility: hidden !important;\n                }\n            "))};t.default=function(){return r.a.createElement(l.DocContainer,null,r.a.createElement("p",{className:"lead"},"Control the visibility, without modifying the display, of elements with visibility utilities."),r.a.createElement(c,null))}}}]);
//# sourceMappingURL=doc-route.chunk_41.js.map?a691a174652b63d5e419