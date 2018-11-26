(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[39,45,47,48,49,50,52],{422:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return o});var n=t(1),r=t.n(n),l=t(2),c=t.n(l),o=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},u=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t)):!t&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},a.default=u},423:function(e,a,t){"use strict";var n=t(1),o=t.n(n),r=t(2),l=t.n(r),c=function(e){var a=e.id,t=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},a.a=c},424:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(423);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},425:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(423);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},426:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(2),c=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:t.n(l).a.string.isRequired},a.default=c},427:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(2),l=t.n(r),c=function(e){var a,t,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(t=r.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return o.a.createElement("span",{key:a},e,a<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),t,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},a.default=c},431:function(e,a,t){"use strict";t.r(a);var n=t(422);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var r=t(428);t.d(a,"ComponentPreview",function(){return r.default});var l=t(429);t.d(a,"DocHeading",function(){return l.default});var c=t(430);t.d(a,"DocToc",function(){return c.default});var o=t(424);t.d(a,"DeprecatedComponentAlert",function(){return o.default});var u=t(425);t.d(a,"ExperimentalComponentAlert",function(){return u.default});var m=t(426);t.d(a,"Icon",function(){return m.default});var i=t(427);t.d(a,"PxScript",function(){return i.default})},479:function(e,a,t){"use strict";t.r(a),t.d(a,"ImageFluid",function(){return c}),t.d(a,"ImageRounded",function(){return o}),t.d(a,"ImageCircle",function(){return u}),t.d(a,"ImageThumbnail",function(){return m}),t.d(a,"ImageText",function(){return i});var n=t(1),r=t.n(n),l=t(431),c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"image-fluid"},"Image fluid"),r.a.createElement("p",null,r.a.createElement(l.Property,{value:".img-fluid"})," makes your images responsive by forcing the picture to scale with its parent."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("img",{src:"https://picsum.photos/1000/250?image=937",className:"img-fluid"})))},o=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"image-rounded"},"Image rounded"),r.a.createElement("p",null,"If you want to display your images with rounded corners just add ",r.a.createElement(l.Property,{value:".img-rounded"})," to your image"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("img",{src:"https://picsum.photos/200?image=770",className:"img-rounded mx-auto d-block"})))},u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"image-circle"},"Image circle"),r.a.createElement("p",null,"To make your image a perfect circle add ",r.a.createElement(l.Property,{value:".img-circle"}),"."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("img",{src:"https://picsum.photos/200?image=790",className:"img-circle mx-auto d-block"})))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"image-thumbnail"},"Image thumbnail"),r.a.createElement("p",null,r.a.createElement(l.Property,{value:".img-thumbnail"})," adds a small border around the image and adds some padding to give the image a frame."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("img",{src:"https://picsum.photos/200?image=823",className:"img-thumbnail mx-auto d-block"})))},i=function(){return r.a.createElement("div",{className:"col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"Use our image utilties to modify how they are displayed or work when resized."),r.a.createElement(c,null),r.a.createElement(o,null),r.a.createElement(u,null),r.a.createElement(m,null))};a.default=function(){return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(i,null),r.a.createElement(l.DocToc,{component:i})))}}}]);
//# sourceMappingURL=doc-route.chunk_37.js.map?8cb29f6c5007a761e7b4