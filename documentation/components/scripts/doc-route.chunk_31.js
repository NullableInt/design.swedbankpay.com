(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[34,5,46,48,49,50,52],{420:function(e,a,n){"use strict";n.r(a),n.d(a,"Property",function(){return o});var t=n(1),r=n.n(t),c=n(2),l=n.n(c),o=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,n=e.name,t=e.value;return n&&t?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),t,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!t?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&t?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},t)):void 0};s.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},o.propTypes={value:l.a.string.isRequired},a.default=s},421:function(e,a,n){"use strict";var t=n(1),o=n.n(t),r=n(2),c=n.n(r),l=function(e){var a=e.id,n=e.type,t=e.icon,r=e.close,c=e.text,l=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(n)},t?"\n":"",t?o.a.createElement("i",{className:"material-icons alert-icon"},t):null,c?"\n":"",c?o.a.createElement("p",null,c):null,l?"\n":"",l?o.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},a.a=l},422:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(421);a.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(421);a.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(2),l=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};l.propTypes={icon:n.n(c).a.string.isRequired},a.default=l},425:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n.n(t),r=n(2),c=n.n(r),l=function(e){var a,n,t=e.component,r=e.subComponents,c=e.func,l=e.params;return r&&(n=r.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),l&&(a=l.map(function(e,a){return o.a.createElement("span",{key:a},e,a<l.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,t),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},c),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},a.default=l},426:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(2),l=n.n(c),o=n(427),s=function(e){var a=e.docToc,n=e.children,t=function(){return r.a.createElement("div",{className:"doc-body ".concat(a?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(t,null),a?r.a.createElement(o.DocToc,{component:t}):null))};s.propTypes={docToc:l.a.bool},a.default=s},427:function(e,a,n){"use strict";n.r(a);var t=n(420);n.d(a,"Attribute",function(){return t.default}),n.d(a,"Property",function(){return t.Property});var r=n(428);n.d(a,"ComponentPreview",function(){return r.default});var c=n(426);n.d(a,"DocContainer",function(){return c.default});var l=n(429);n.d(a,"DocHeading",function(){return l.default});var o=n(430);n.d(a,"DocToc",function(){return o.default});var s=n(422);n.d(a,"DeprecatedComponentAlert",function(){return s.default});var u=n(423);n.d(a,"ExperimentalComponentAlert",function(){return u.default});var i=n(424);n.d(a,"Icon",function(){return i.default});var m=n(425);n.d(a,"PxScript",function(){return m.default})},473:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(427),l=n(474),o=n.n(l),s=n(475),u=n.n(s),i=n(476),m=n.n(i),p=n(477),d=n.n(p),f=n(478),E=n.n(f),g=n(479),b=n.n(g);a.default=function(){return r.a.createElement(c.DocContainer,null,r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            .browser-icon {\n                height: 48px;\n                width: 48px;\n            }\n        "}}),r.a.createElement("p",{className:"lead"},"Currently supported browsers:"),r.a.createElement("table",{className:"browser-support-table table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("img",{className:"browser-icon",src:o.a,alt:"Google Chrome Icon"})),r.a.createElement("th",null,r.a.createElement("img",{className:"browser-icon",src:u.a,alt:"Mozilla Firefox Icon"})),r.a.createElement("th",null,r.a.createElement("img",{className:"browser-icon",src:m.a,alt:"Microsoft Edge Icon"})),r.a.createElement("th",null,r.a.createElement("img",{className:"browser-icon",src:d.a,alt:"Microsoft Internet Explorer Icon"})),r.a.createElement("th",null,r.a.createElement("img",{className:"browser-icon",src:E.a,alt:"Opera Browser Icon"})),r.a.createElement("th",null,r.a.createElement("img",{className:"browser-icon",src:b.a,alt:"Apple Safari Icon"})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"background-brand"},"Yes"),r.a.createElement("td",{className:"background-warning"},"Yes"),r.a.createElement("td",{className:"background-warning"},"Yes"),r.a.createElement("td",{className:"background-warning"},"11"),r.a.createElement("td",{className:"background-warning"},"Yes"),r.a.createElement("td",{className:"background-warning"},"Yes")))))}},474:function(e,a,n){e.exports=n.p+"img/chrome.svg?f3b6c54c5cc90485a549a1ae6699a9c4"},475:function(e,a,n){e.exports=n.p+"img/firefox.svg?edf69d104c6d6f1bc83565927d0b8e10"},476:function(e,a,n){e.exports=n.p+"img/edge.svg?2b2888b51282bcce340666c7770687b6"},477:function(e,a,n){e.exports=n.p+"img/internet-explorer.svg?0536654eb844a963dd6a6b0844dd52e2"},478:function(e,a,n){e.exports=n.p+"img/opera.svg?49a5015266953b88cff3d2e3e419e0ee"},479:function(e,a,n){e.exports=n.p+"img/safari.svg?237a7f3b2a5860f0fe098c80be9b0595"}}]);
//# sourceMappingURL=doc-route.chunk_31.js.map?268f0434bf7103972f8d