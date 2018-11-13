(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[39,44,46,47,48,49,51],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return i});var n=a(1),l=a.n(n),r=a(2),c=a.n(r),i=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},i.propTypes={value:c.a.string.isRequired},t.default=s},422:function(e,t,a){"use strict";var n=a(1),i=a.n(n),l=a(2),r=a.n(l),c=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,c=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?i.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?i.a.createElement("p",null,r):null,c?"\n":"",c?i.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=c},423:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),c=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(r).a.string.isRequired},t.default=c},426:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(2),r=a.n(l),c=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(a=l.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return i.a.createElement("span",{key:t},e,t<c.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,n),i.a.createElement("span",{className:"token punctuation"},"."),a,i.a.createElement("span",{className:"token function"},r),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=c},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(427);a.d(t,"ComponentPreview",function(){return l.default});var r=a(428);a.d(t,"DocHeading",function(){return r.default});var c=a(429);a.d(t,"DocToc",function(){return c.default});var i=a(423);a.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=a(424);a.d(t,"ExperimentalComponentAlert",function(){return s.default});var o=a(425);a.d(t,"Icon",function(){return o.default});var u=a(426);a.d(t,"PxScript",function(){return u.default})},479:function(e,t,a){"use strict";a.r(t),a.d(t,"SizingText",function(){return c});var n=a(1),l=a.n(n),r=a(430),c=function(){return l.a.createElement("div",{className:"col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"Easily make an element as wide or as tall (relative to its parent) with our width and height utilities."),l.a.createElement("p",null,"Width and height utilities are generated with support for values; ",l.a.createElement(r.Property,{value:"25%"}),", ",l.a.createElement(r.Property,{value:"50%"}),", ",l.a.createElement(r.Property,{value:"75%"}),", ",l.a.createElement(r.Property,{value:"100%"}),", and ",l.a.createElement(r.Property,{value:"auto"}),"."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"w-25 p-3 sc-highlight"},"Width 25%"),l.a.createElement("div",{className:"w-50 p-3 sc-highlight"},"Width 50%"),l.a.createElement("div",{className:"w-75 p-3 sc-highlight"},"Width 75%"),l.a.createElement("div",{className:"w-100 p-3 sc-highlight"},"Width 100%"),l.a.createElement("div",{className:"w-auto p-3 sc-highlight"},"Width auto")),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"sc-highlight",style:{height:"100px"}},l.a.createElement("div",{className:"h-25 d-inline-block sc-highlight",style:{width:"120px"}},"Height 25%"),l.a.createElement("div",{className:"h-50 d-inline-block sc-highlight",style:{width:"120px"}},"Height 50%"),l.a.createElement("div",{className:"h-75 d-inline-block sc-highlight",style:{width:"120px"}},"Height 75%"),l.a.createElement("div",{className:"h-100 d-inline-block sc-highlight",style:{width:"120px"}},"Height 100%"),l.a.createElement("div",{className:"h-auto d-inline-block sc-highlight",style:{width:"120px"}},"Height auto"))),l.a.createElement("p",null,"You can also use ",l.a.createElement(r.Property,{value:"max-width: 100%;"})," and ",l.a.createElement(r.Property,{value:"max-height: 100%;"})," utilities as needed."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"sc-highlight",style:{height:"100px"}},l.a.createElement("div",{className:"mh-100 sc-highlight",style:{width:"100px",height:"200px"}},"Max-height 100%")," ")))};t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(c,null))))}}}]);
//# sourceMappingURL=doc-route.chunk_37.js.map?daa90e144afc10f69438