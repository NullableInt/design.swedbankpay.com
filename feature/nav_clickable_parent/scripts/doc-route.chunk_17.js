(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[15],{440:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=(a(377),a(361)),o=a(53),c=a.n(o),u=a(315),m=a.n(u),i=function(e){var t=e.title,a=e.subTitle,n=e.id,r=e.type,o=e.removeBottomPadding,c=e.removeAllPadding,u=e.halfPadding,i=e.bodyContent,d=e.panelTable,s=e.footerText,p=m()("panel",r?"panel-".concat(r):"panel-default",o?"panel-bottomless":null,c?"panel-no-padding":null,u?"panel-half-padding":null);return l.a.createElement("section",{className:p,id:n},t?l.a.createElement("header",null,l.a.createElement("h2",{className:"panel-title"},t),a?l.a.createElement("p",{className:"panel-sub-title"},a):null):null,i?l.a.createElement("div",{className:"panel-body"},i.map(function(e,t){return l.a.createElement("p",{key:t},e)})):null,d?l.a.createElement("div",{className:"panel-table"},d()):null,s?l.a.createElement("footer",null,l.a.createElement("p",null,s)):null)};i.propTypes={title:c.a.string,subTitle:c.a.string,id:c.a.string,type:c.a.oneOf(["brand","default","muted",""]),halfPadding:c.a.bool,removeAllPadding:c.a.bool,removeBottomPadding:c.a.bool,darkMode:c.a.bool,bodyContent:c.a.array,footerText:c.a.string};var d=i;a.d(t,"Overview",function(){return E}),a.d(t,"PanelHeaders",function(){return h}),a.d(t,"PanelTable",function(){return b}),a.d(t,"TableContent",function(){return p});var s=["Your main panel content is put here.","Some more content over here.","And one more line, just to be safe."],p=function(){return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"First Name"),l.a.createElement("th",{scope:"col"},"Last Name"),l.a.createElement("th",{scope:"col"},"Location"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Sven"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Visby")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Sara"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Stockholm")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Ola"),l.a.createElement("td",null,"Nordmann"),l.a.createElement("td",null,"Oslo")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"4"),l.a.createElement("td",null,"Holger"),l.a.createElement("td",null,"Danske"),l.a.createElement("td",null,"Copenhagen")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"Matti"),l.a.createElement("td",null,"Meikäläinen"),l.a.createElement("td",null,"Lahti"))))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"A panel consists of three parts: A header, a body and a footer. You can mostly put whatever you want in any of these, but try not to put too much in the header and footer as these are meant to contain short and concise information about the body content."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(d,{title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button",bodyContent:s})))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"panel-headers"},"Panel headers"),l.a.createElement("p",null,"You can pick between two different panel headers, brand color with white text and white with green text. add ",l.a.createElement(r.Property,{value:".panel-default"})," or ",l.a.createElement(r.Property,{value:".panel-brand"})," to the header to use one of them."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(d,{title:"Default panel"}),"\n\n",l.a.createElement(d,{type:"brand",title:"Panel brand"})))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"panel-with-table"},"Displaying a full width table"),l.a.createElement("p",null,"To display a full width table in a panel use ",l.a.createElement(r.Property,{value:".panel-table"})," on a div wrapping the table. Put ",l.a.createElement(r.Property,{value:".panel-table"})," as a direct child of ",l.a.createElement(r.Property,{value:".panel"}),". Tables put in a panel are given a border bottom to seperate it from the following elements."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(d,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",bodyContent:s,footerText:"Footer content goes here.",footerBtnText:"Footer button",panelTable:p})))};t.default=function(){return l.a.createElement(r.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Panels are large containers meant to be able to contain all of our other components."),l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(b,null))}}}]);
//# sourceMappingURL=doc-route.chunk_17.js.map?6abe13ef3f301ae087c5