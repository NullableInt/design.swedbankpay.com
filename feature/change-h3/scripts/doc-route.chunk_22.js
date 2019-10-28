(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[25,92],{388:function(e,t,a){"use strict";a.r(t),a.d(t,"DefaultSteps",function(){return o});var l=a(1),n=a.n(l),r=a(14),s=a.n(r),c=a(458),i=a.n(c),o=[{title:"Step one",subtitle:"24.12.17 12:10",completed:!0},{title:"Step two",ongoing:!0},{title:"Step three",selected:!0},{title:"Step four"}],u=function(e){var t=e.completed,a=e.subtitle,l=e.title;return n.a.createElement(n.a.Fragment,null,t?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"material-icons steps-icon"},"check"),"\n"):null,l,a?n.a.createElement(n.a.Fragment,null,"\n",n.a.createElement("div",{className:"steps-sub-title"},a)):null)},m=function(e){var t=e.steps;return n.a.createElement(n.a.Fragment,null,t.map(function(e,t){var a=e.title,l=e.subtitle,r=e.completed,s=e.ongoing,c=e.selected,o=e.clickable;return n.a.createElement("li",{key:t,className:i()(r?"steps-completed":null,s?"steps-ongoing":null,c?"steps-selected":null)},o?n.a.createElement(n.a.Fragment,null,"\n"," ",n.a.createElement("a",null,n.a.createElement(u,{completed:r,subtitle:l,title:a}))," ","\n"," "):n.a.createElement(u,{completed:r,subtitle:l,title:a}))}))},p=function(e){var t=e.steps;if(!t)return null;var a=t.some(function(e){return e.clickable}),l=a?n.a.createElement("div",{className:"material-icons steps-nav-left"},"keyboard_arrow_left"):null,r=a?n.a.createElement("div",{className:"material-icons steps-nav-right"},"keyboard_arrow_right"):null;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"steps-responsive"},l,n.a.createElement("div",{className:"steps-responsive-text"},"Step 3"),r))},d=function(e){var t=e.steps,a=e.vertical,l=i()("steps",a?"steps-vertical":null);return n.a.createElement("div",{className:l},n.a.createElement("ol",null,t?n.a.createElement(m,{steps:t}):n.a.createElement(m,{steps:o})),n.a.createElement(p,{steps:t}))};d.propTypes={steps:s.a.array,vertical:s.a.bool,clickable:s.a.bool},t.default=d},421:function(e,t,a){"use strict";a.r(t),a.d(t,"BasicSteps",function(){return o}),a.d(t,"VerticalSteps",function(){return u}),a.d(t,"ClickableSteps",function(){return m});var l=a(1),n=a.n(l),r=a(462),s=a.n(r),c=a(361),i=a(388),o=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"basic-usage"},"Basic usage"),n.a.createElement("p",null,"The standard steps component will render horizontally and scale according to the size of its parent."),n.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement(i.default,{steps:[{title:"Step one",subtitle:"24.12.17 12:10",completed:!0},{title:"Step two",ongoing:!0,selected:!0},{title:"Step three"},{title:"Step four"}]})))},u=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"vertical-steps"},"Vertical steps"),n.a.createElement("p",null,"If you wish to use steps vertically you can add ",n.a.createElement(c.Property,{value:".steps-vertical"})," to the ",n.a.createElement(s.a,{className:"language-html"},"<div>")," element."),n.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement(i.default,{steps:[{title:"Step one",completed:!0},{title:"Step two",ongoing:!0,selected:!0},{title:"Step three"},{title:"Step four"}],vertical:!0})))},m=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"clickable-steps"},"Clickable steps"),n.a.createElement("p",null,"Add an anchor element (",n.a.createElement(s.a,{className:"language-html"},"<a>"),") to the list item element ( ",n.a.createElement(s.a,{className:"language-html"},"<li>"),"). Ensure that all content within the list element is also inside the anchor element."),n.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement(i.default,{steps:[{title:"Step one",completed:!0,clickable:!0},{title:"Step two",ongoing:!0,clickable:!0},{title:"Step three",clickable:!0},{title:"Step four",selected:!0},{title:"Step Five"},{title:"Step Six"}]})))};t.default=function(){return n.a.createElement(c.DocContainer,{docToc:!0},n.a.createElement("p",{className:"lead"},"Use steps to visualize the users progress through a process."),n.a.createElement(o,null),n.a.createElement(u,null),n.a.createElement(m,null))}},457:function(e,t){(function(t){e.exports=t}).call(this,{})},458:function(e,t,a){var l;function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=n(a);if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var c=s.apply(null,a);c&&e.push(c)}else if("object"===l)for(var i in a)r.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):"object"===n(a(457))&&a(457)?void 0===(l=function(){return s}.apply(t,[]))||(e.exports=l):window.classNames=s}()}}]);
//# sourceMappingURL=doc-route.chunk_22.js.map?00af6b9bad2e936c578d