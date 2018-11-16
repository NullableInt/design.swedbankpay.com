(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[43,45,47,48,49,50,52],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return s});var n=a(1),r=a.n(n),l=a(2),c=a.n(l),s=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},s.propTypes={value:c.a.string.isRequired},t.default=i},422:function(e,t,a){"use strict";var n=a(1),s=a.n(n),r=a(2),l=a.n(r),c=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return s.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?s.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?s.a.createElement("p",null,l):null,c?"\n":"",c?s.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?s.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",s.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},423:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(l).a.string.isRequired},t.default=c},426:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(2),l=a.n(r),c=function(e){var t,a,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(a=r.map(function(e,t){return s.a.createElement("span",{key:t},e,s.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return s.a.createElement("span",{key:t},e,t<c.length-1?s.a.createElement("span",{className:"token punctuation"},", "):null)})),s.a.createElement("code",null,s.a.createElement("span",null,"px"),s.a.createElement("span",{className:"token punctuation"},"."),s.a.createElement("span",null,n),s.a.createElement("span",{className:"token punctuation"},"."),a,s.a.createElement("span",{className:"token function"},l),s.a.createElement("span",{className:"token punctuation"},"("),t,s.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(427);a.d(t,"ComponentPreview",function(){return r.default});var l=a(428);a.d(t,"DocHeading",function(){return l.default});var c=a(429);a.d(t,"DocToc",function(){return c.default});var s=a(423);a.d(t,"DeprecatedComponentAlert",function(){return s.default});var i=a(424);a.d(t,"ExperimentalComponentAlert",function(){return i.default});var o=a(425);a.d(t,"Icon",function(){return o.default});var m=a(426);a.d(t,"PxScript",function(){return m.default})},481:function(e,t,a){"use strict";a.r(t),a.d(t,"TextAlignment",function(){return c}),a.d(t,"TextWrappingAndOverflow",function(){return s}),a.d(t,"TextTransform",function(){return i}),a.d(t,"FontWeightAndItalics",function(){return o}),a.d(t,"TextText",function(){return m});var n=a(1),r=a.n(n),l=a(430),c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"text-alignment"},"Text alignment"),r.a.createElement("p",null,"Easily realign text to components with text alignment classes."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"text-justify"},"Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.")),r.a.createElement("p",null,"For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"text-left"},"Left aligned text on all viewport sizes."),r.a.createElement("p",{className:"text-center"},"Center aligned text on all viewport sizes."),r.a.createElement("p",{className:"text-right"},"Right aligned text on all viewport sizes."),"\n\n",r.a.createElement("p",{className:"text-sm-left"},"Left aligned text on viewports sized SM (small) or wider."),r.a.createElement("p",{className:"text-md-left"},"Left aligned text on viewports sized MD (medium) or wider."),r.a.createElement("p",{className:"text-lg-left"},"Left aligned text on viewports sized LG (large) or wider."),r.a.createElement("p",{className:"text-xl-left"},"Left aligned text on viewports sized XL (extra-large) or wider."),r.a.createElement("p",{className:"text-xxl-left"},"Left aligned text on viewports sized XXL (extra-extra-large) or wider.")))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"text-wrapping-and-overflow"},"Text wrapping and overflow"),r.a.createElement("p",null,"Prevent text from wrapping with a ",r.a.createElement(l.Property,{value:".text-nowrap"})," class."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"text-nowrap sc-highlight",style:{width:"8rem"}},"\n","This text should overflow the parent.","\n")),r.a.createElement("p",null,"For longer content, you can add a ",r.a.createElement(l.Property,{value:".text-truncate"})," class to truncate the text with an ellipsis. ",r.a.createElement("b",null,"Requires")," display: ",r.a.createElement(l.Property,{value:"inline-block"})," ",r.a.createElement("b",null,"or")," ",r.a.createElement(l.Property,{value:"display: block"}),"."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 text-truncate"},"Cras egestas dolor nec nunc scelerisque tincidunt.")),"\n\n",r.a.createElement("span",{className:"d-inline-block text-truncate",style:{maxWidth:"150px"}},"\n","Cras egestas dolor nec nunc scelerisque tincidunt.","\n")))},i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"text-transform"},"Text transform"),r.a.createElement("p",null,"Transform text in components with text capitalization classes."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"text-lowercase"},"Lowercased text."),r.a.createElement("p",{className:"text-uppercase"},"Uppercased text."),r.a.createElement("p",{className:"text-capitalize"},"CapiTaliZed text.")),r.a.createElement("p",null,"Note how ",r.a.createElement(l.Property,{value:".text-capitalize"})," only changes the first letter of each word, leaving the case of any other letters unaffected."))},o=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"font-weight-and-italics"},"Font weight and italics"),r.a.createElement("p",null,"Quickly change the weight (boldness) of text or italicize text."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"font-weight-bold"},"Bold text."),r.a.createElement("p",{className:"font-weight-normal"},"Normal weight text."),r.a.createElement("p",{className:"font-weight-light"},"Light weight text."),r.a.createElement("p",{className:"font-italic"},"Italic text.")))},m=function(){return r.a.createElement("div",{className:"col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."),r.a.createElement(c,null),r.a.createElement(s,null),r.a.createElement(i,null),r.a.createElement(o,null))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(m,null),r.a.createElement(l.DocToc,{component:m}))))}}}]);
//# sourceMappingURL=doc-route.chunk_40.js.map?f23a27c22d9fb6d279d2