(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[79,80],{377:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(14),i=a.n(l),s=function(e){var t=e.name,a=e.hex,r=e.rgb,l=e.cmyk;return n.a.createElement("figure",null,n.a.createElement("svg",{className:"White"===t?"border":null},n.a.createElement("rect",{width:"100%",height:"100%",fill:a})),n.a.createElement("figcaption",null,t,n.a.createElement("br",null),n.a.createElement("small",null,"Hex color code: ",a),r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("small",null,"RGB color code: ",r)),l&&n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("small",null,"CMYK color code: ",l))))};s.propTypes={name:i.a.string.isRequired,hex:i.a.string.isRequired,rgb:i.a.string,cmyk:i.a.string},t.default=s},391:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(14),i=a.n(l),s=a(377);function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=function(e){var t=e.id,a=e.colorList,r=e.head,l=e.description,i=e.subListNames;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:t},r),l,i?i.map(function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("h3",null,e),n.a.createElement("ul",{className:"list color-preview"},a.filter(function(t){return t.inSubLists.includes(e)}).map(function(e,t){e.inSubLists;var a=u(e,["inSubLists"]);return n.a.createElement("li",{key:t},n.a.createElement(s.default,a))})))}):n.a.createElement("ul",{className:"list color-preview"},a.map(function(e,t){e.inSubLists;var a=u(e,["inSubLists"]);return n.a.createElement("li",{key:t},n.a.createElement(s.default,a))})))};c.propTypes={id:i.a.string.isRequired,colorList:i.a.arrayOf(i.a.shape({name:i.a.string.isRequired,hex:i.a.string.isRequired,subListNames:i.a.arrayOf(i.a.string)})).isRequired,head:i.a.string.isRequired,description:i.a.any,subLists:i.a.bool},t.default=c}}]);
//# sourceMappingURL=doc-route.chunk_80.js.map?517f7a1f7c2dbe2555ad