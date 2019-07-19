(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[14],{441:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(378),o=t.n(r),i=t(362),c=t(48),s=t.n(c),m=t(315),u=t.n(m),p=function(e){var a=e.type,t=e.items,n=e.text,r=e.arrows,o=e.farArrows,i=-1,c=t?t.length-1:-2,s=u()("pagination",a?"pagination-".concat(a):""),m=function(e){var a=e.type,t=!1;return"start"===a||"back"===a?t=0===i:"forward"!==a&&"end"!==a||(t=i===c),l.a.createElement("li",{className:"arrow-".concat(a)},"\n",t?l.a.createElement("span",null):l.a.createElement("a",{href:"#"}),"\n")};return l.a.createElement("ul",{className:s},o?l.a.createElement(m,{type:"start"}):null,r?l.a.createElement(m,{type:"back"}):null,t?t.map(function(e,a){var t=e.name,n=e.href,r=e.active;return r&&(i=a),l.a.createElement("li",{key:a,className:"".concat(r?"active":"")},"\n",l.a.createElement("a",{href:n},t),"\n")}):null,n?l.a.createElement("li",null,"\n",l.a.createElement("span",{className:"text"},n),"\n"):null,r?l.a.createElement(m,{type:"forward"}):null,o?l.a.createElement(m,{type:"end"}):null)};p.propTypes={type:s.a.oneOf(["bullets","simple"]),items:s.a.array,text:s.a.string,arrows:s.a.bool,farArrows:s.a.bool};var g=p;t.d(a,"DefaultPagination",function(){return E}),t.d(a,"SimplePagination",function(){return w}),t.d(a,"PaginationBullets",function(){return h});var f=[{name:"1",href:"#",active:!1},{name:"2",href:"#",active:!1},{name:"3",href:"#",active:!1},{name:"4",href:"#",active:!1},{name:"5",href:"#",active:!0}],E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"default-pagination"},"Default pagination"),l.a.createElement("p",null,"Default pagination shows the pages as numbers. Add ",l.a.createElement(i.Property,{value:".pagination"})," to an ",l.a.createElement(o.a,{className:"language-html"},"<ul>")," containing",l.a.createElement(o.a,{className:"language-html"},"<li>"),". If you wish to present the user with navigational arrows you need to add those as ",l.a.createElement(o.a,{className:"language-html"},"<li>")," elements."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(g,{items:f,arrows:!0,farArrows:!0})))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"pagination-bullets"},"Pagination bullets"),l.a.createElement("p",null,"If you want to show bullets instead of numbers you can add ",l.a.createElement(i.Property,{value:".pagination-bullets"})," to your ",l.a.createElement(o.a,{className:"language-html"},"<ul>"),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(g,{type:"bullets",items:f,arrows:!0,farArrows:!0})))},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"simple-pagination"},"Simple pagination"),l.a.createElement("p",null,"If the number of pages get high enough then it is better to use numbers."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(g,{text:"16 of 256",arrows:!0,farArrows:!0})))};a.default=function(){return l.a.createElement(i.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Use the pagination component to indicate that a series of related content exist across multiple pages."),l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(w,null))}}}]);
//# sourceMappingURL=doc-route.chunk_16.js.map?a59d1ba17a41816a0173