(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[33],{402:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicUsage",function(){return E}),n.d(t,"AlertWithIcon",function(){return g}),n.d(t,"ClosingTheAlert",function(){return y}),n.d(t,"ExtendedUsage",function(){return w}),n.d(t,"JavascriptMethods",function(){return b});var a=n(1),r=n.n(a),l=n(50),c=n(462),o=n.n(c),i=n(361),u=n(363);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=window.dg.alert,E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"basic-usage"},"Basic usage"),r.a.createElement("p",null,"The default behavior of the alert present itself in a box with a border."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u.default,{type:"default",text:"This is a default alert!"}),"\n\n",r.a.createElement(u.default,{type:"success",text:"This is a success alert!"}),"\n\n",r.a.createElement(u.default,{type:"neutral",text:"This is a neutral alert!"}),"\n\n",r.a.createElement(u.default,{type:"warning",text:"This is a warning alert!"}),"\n\n",r.a.createElement(u.default,{type:"danger",text:"This is a danger alert!"})))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"icons"},"Icons"),r.a.createElement("p",null,"To use an alert with an icon... Read more about icon usage here ",r.a.createElement(l.Link,{to:"/docs/core/icons"},"here"),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u.default,{type:"default",text:"This is a default alert with an icon!",icon:"info_outline"}),"\n\n",r.a.createElement(u.default,{type:"success",text:"This is a success alert with an icon!",icon:"check_circle"}),"\n\n",r.a.createElement(u.default,{type:"neutral",text:"This is a neutral alert with an icon!",icon:"info"}),"\n\n",r.a.createElement(u.default,{type:"warning",text:"This is a warning alert with an icon!",icon:"warning"}),"\n\n",r.a.createElement(u.default,{type:"danger",text:"This is a danger alert with an icon!",icon:"error"})))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"closing-the-alert"},"Closing the alert"),r.a.createElement("p",null,"To add a close-button, add the following code inside your alert-element:",r.a.createElement("br",null),r.a.createElement(o.a,{className:"language-html"},'<a href="#" data-alert-close><i class="material-icons">close</i></a>')),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u.default,{type:"default",text:"This is a default alert with an icon!",close:!0,icon:"info_outline"}),"\n\n",r.a.createElement(u.default,{type:"success",text:"This is a success alert with an icon!",close:!0,icon:"check_circle"}),"\n\n",r.a.createElement(u.default,{type:"neutral",text:"This is a neutral alert with an icon!",close:!0,icon:"info"}),"\n\n",r.a.createElement(u.default,{type:"warning",text:"This is a warning alert with an icon!",close:!0,icon:"warning"}),"\n\n",r.a.createElement(u.default,{type:"danger",text:"This is a danger alert with an icon!",close:!0,icon:"error"})),r.a.createElement("h3",null,"External close button"),r.a.createElement("p",null,"To add an external close-button for your alert add the attribute ",r.a.createElement(i.Attribute,{data:!0,name:"alert-close",value:"{id}"})," to the button element."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u.default,{id:"alert-success-1",type:"success",text:"Press the button below to close me",icon:"check_circle"}),"\n\n",r.a.createElement("button",{type:"button",className:"btn btn-executive","data-alert-close":"alert-success-1"},"Close alert")))},w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"extended-usage"},"Extended usage"),r.a.createElement("p",null,"By adding the ",r.a.createElement(i.Property,{value:".alert-complex"})," class, alerts can contain additional HTML elements like headings, paragraphs and dividers."),r.a.createElement("p",null,"Make sure to wrap the content in a container with the class ",r.a.createElement(i.Property,{value:".alert-body"}),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u.ComplexAlert,{type:"success",icon:"check_circle",headerText:"Success!",close:!0},r.a.createElement("p",null,"PDF was successfully uploaded.",r.a.createElement("br",null),"Some additional information."),r.a.createElement("hr",null),r.a.createElement("p",null,"By the way, great job!"))))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),r.a.createElement(i.JavascriptDocs,{componentName:"alert"}))},x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,f(t).apply(this,arguments))}var n,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a["Component"]),n=t,(l=[{key:"componentDidMount",value:function(){p.init()}},{key:"render",value:function(){return r.a.createElement(i.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),r.a.createElement(E,null),r.a.createElement(g,null),r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(b,null))}}])&&m(n.prototype,l),c&&m(n,c),t}();t.default=x}}]);
//# sourceMappingURL=doc-route.chunk_3.js.map?abb2ebaf68b5bb1fe72e