(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[51,5,46,48,49,50,52],{422:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(1),r=a.n(n),l=a(2),o=a.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},423:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(2),l=a.n(r),o=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},424:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(423);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(423);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},426:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:a.n(l).a.string.isRequired},t.default=o},427:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(2),l=a.n(r),o=function(e){var t,a,n=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(a=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),a,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},428:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),o=a.n(l),c=a(429),i=function(e){var t=e.docToc,a=e.children,n=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},a)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(n,null),t?r.a.createElement(c.DocToc,{component:n}):null))};i.propTypes={docToc:o.a.bool},t.default=i},429:function(e,t,a){"use strict";a.r(t);var n=a(422);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(430);a.d(t,"ComponentPreview",function(){return r.default});var l=a(428);a.d(t,"DocContainer",function(){return l.default});var o=a(431);a.d(t,"DocHeading",function(){return o.default});var c=a(432);a.d(t,"DocToc",function(){return c.default});var i=a(424);a.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=a(425);a.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=a(426);a.d(t,"Icon",function(){return u.default});var m=a(427);a.d(t,"PxScript",function(){return m.default})},441:function(e,t,a){"use strict";var n=a(1),m=a.n(n),r=a(2),l=a.n(r),o=a(187),d=a.n(o),c=function(e){var t=e.size,a=e.imgUrl,n=e.icon,r=e.heading,l=e.text,o=e.textSmall,c=e.mediaRight,i=e.muted,s=d()("media",c?"media-right":null,t?"media-".concat(t):null),u=d()("material-icons",i?"text-muted":null);return m.a.createElement("div",{className:s},a||n?m.a.createElement("div",{className:"media-img"},"\n",a?m.a.createElement(m.a.Fragment,null," ",m.a.createElement("img",{src:a})," ","\n"," "):null,n?m.a.createElement(m.a.Fragment,null," ",m.a.createElement("i",{className:u},n)," ","\n"," "):null):null,m.a.createElement("div",{className:"media-body"},function(){var e=d()(i?"text-muted":null);switch(t){case"sm":return m.a.createElement("h4",{className:e},r);case"lg":return m.a.createElement("h2",{className:e},r);default:return m.a.createElement("h3",{className:e},r)}}(),m.a.createElement("p",null,o?m.a.createElement("small",null,l):l)))};c.propTypes={size:l.a.oneOf(["sm","lg"]),imgUrl:l.a.string,icon:l.a.string,heading:l.a.string.isRequired,text:l.a.string,textSmall:l.a.bool,mediaRight:l.a.bool,muted:l.a.bool},t.a=c},495:function(e,t,a){"use strict";a.r(t);var l=a(1),d=a.n(l),n=a(184),o=a(429),r=a(2),c=a.n(r),i=function(e){var t=e.type,a=e.title,n=e.imgSrc,r=e.text,l=e.textSection,o=e.smallText,c=e.btnTxt,i=e.footerTxt,s=e.footerLink,u=e.footerLinkTxt,m=e.children;return d.a.createElement("div",{className:"card".concat(t?" card-".concat(t):"")},a?d.a.createElement("header",null,d.a.createElement("h3",null,d.a.createElement("a",{href:"#"},a))):null,n?d.a.createElement("div",{className:"card-img"},"\n",d.a.createElement("img",{src:n,alt:""}),"\n"):null,m?d.a.createElement("div",{className:"highlight"},m):null,d.a.createElement("div",{className:"card-body"},r?d.a.createElement("p",null,r):null,"\n",l?l.map(function(e,t){return d.a.createElement("p",{key:"card-p-".concat(t)},e)}):null,o?d.a.createElement("small",null,o):null),c||i||u?d.a.createElement("footer",null,c?d.a.createElement("button",{type:"button",className:"btn btn-primary btn-block"},c):null,i?d.a.createElement("div",{className:"footer-text"},d.a.createElement("p",null,i)):null,u?d.a.createElement("div",{className:"footer-link"},d.a.createElement("a",{href:s||"#"},u)):null):null)};i.propTypes={type:c.a.oneOf(["brand","default","light"]),title:c.a.string,imgSrc:c.a.string,icon:c.a.string,text:c.a.string,smallText:c.a.string,textSection:c.a.array,btnTxt:c.a.string,footerTxt:c.a.string,footerLink:c.a.string,footerLinkTxt:c.a.string};var s=i,u=a(441);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,"DefaultBehaviour",function(){return v}),a.d(t,"CardVariants",function(){return y});var g=["This is a lot of text","With some more text","And then even some more","Is it really possible to have this much text in one card?","Yes!"],v=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{id:"default-behaviour"},"Default behaviour"),d.a.createElement("p",null,"Wrap indiviual cards in the ",d.a.createElement(o.Property,{value:".cards"})," class to display them lined up next to each other. When the window reaches ",d.a.createElement(n.a,{to:"/docs/core/breakpoints"},"breakpoint")," sm the cards will switch to mobile view and take up one row each and stretch to fill the width of the container. To decide how your cards will look use ",d.a.createElement(o.Property,{value:".card-default"}),", ",d.a.createElement(o.Property,{value:".card-brand"}),", or ",d.a.createElement(o.Property,{value:".card-light"})),d.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},d.a.createElement("div",{className:"cards"},d.a.createElement(s,{type:"default",title:"Card default",imgSrc:"https://picsum.photos/300/?random",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},d.a.createElement(u.a,{size:"sm",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com",textSmall:!0,muted:!0})),d.a.createElement(s,{type:"brand",title:"Card brand",imgSrc:"https://picsum.photos/300/?random",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},d.a.createElement(u.a,{size:"sm",icon:"account_balance",heading:"725 NOK",text:"Outstanding balance",textSmall:!0,muted:!0})),d.a.createElement(s,{type:"light",title:"Card light",imgSrc:"https://picsum.photos/300/?random",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},d.a.createElement(u.a,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0})))))},y=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{id:"card-variants"},"Card Variants"),d.a.createElement("p",null,"You don`t have to use all sections of a card, you can use different combinations as you see fit. The card body inherits the size of the largest card that exists on the same line when wrapped with a ",d.a.createElement(o.Property,{value:".cards"})," container."),d.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},d.a.createElement("div",{className:"cards"},d.a.createElement(s,{type:"default",title:"My custom card",text:"Card text",smallText:"Small card text",footerTxt:"This is some text that goes in the footer."},d.a.createElement(u.a,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0})),d.a.createElement(s,{type:"default",title:"Text card",textSection:g,smallText:"This is some small text",footerTxt:"This is some text that goes in the footer."}),d.a.createElement(s,{type:"brand",title:"Image card",imgSrc:"https://picsum.photos/300/?random",text:"This is a card with an image and body"}))))},x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,h(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,l["Component"]),a=t,(n=[{key:"render",value:function(){return d.a.createElement(o.DocContainer,{docToc:!0},d.a.createElement(o.ExperimentalComponentAlert,null),d.a.createElement("p",{className:"lead"},"Card..."),d.a.createElement(v,null),d.a.createElement(y,null))}}])&&p(a.prototype,n),r&&p(a,r),t}();t.default=x}}]);
//# sourceMappingURL=doc-route.chunk_5.js.map?9a53c84e1da808dd460c