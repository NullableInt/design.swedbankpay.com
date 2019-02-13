(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[8],{469:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicUsage",function(){return E}),n.d(t,"AlertWithIcon",function(){return y}),n.d(t,"ClosingTheAlert",function(){return g}),n.d(t,"ExtendedUsage",function(){return w});var l=n(1),c=n.n(l),a=n(98),r=n(454),o=n.n(r),i=n(438),s=n(439),u=n(68);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"basic-usage"},"Basic usage"),c.a.createElement("p",null,"The default behavior of the alert present itself in a box with a border."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(s.a,{type:"default",text:"This is a default alert!"}),"\n\n",c.a.createElement(s.a,{type:"success",text:"This is a success alert!"}),"\n\n",c.a.createElement(s.a,{type:"neutral",text:"This is a neutral alert!"}),"\n\n",c.a.createElement(s.a,{type:"warning",text:"This is a warning alert!"}),"\n\n",c.a.createElement(s.a,{type:"danger",text:"This is a danger alert!"})))},y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"icons"},"Icons"),c.a.createElement("p",null,"To use an alert with an icon... Read more about icon usage here ",c.a.createElement(a.a,{to:"/docs/core/icons"},"here"),"."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(s.a,{type:"default",text:"This is a default alert with an icon!",icon:"info_outline"}),"\n\n",c.a.createElement(s.a,{type:"success",text:"This is a success alert with an icon!",icon:"check_circle"}),"\n\n",c.a.createElement(s.a,{type:"neutral",text:"This is a neutral alert with an icon!",icon:"info"}),"\n\n",c.a.createElement(s.a,{type:"warning",text:"This is a warning alert with an icon!",icon:"warning"}),"\n\n",c.a.createElement(s.a,{type:"danger",text:"This is a danger alert with an icon!",icon:"error"})))},g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"closing-the-alert"},"Closing the alert"),c.a.createElement("p",null,"To add a close-button, add the following code inside your alert-element:",c.a.createElement("br",null),c.a.createElement(o.a,{className:"language-html"},'<a href="#" data-alert-close><i class="material-icons">close</i></a>')),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(s.a,{type:"default",text:"This is a default alert with an icon!",close:!0,icon:"info_outline"}),"\n\n",c.a.createElement(s.a,{type:"success",text:"This is a success alert with an icon!",close:!0,icon:"check_circle"}),"\n\n",c.a.createElement(s.a,{type:"neutral",text:"This is a neutral alert with an icon!",close:!0,icon:"info"}),"\n\n",c.a.createElement(s.a,{type:"warning",text:"This is a warning alert with an icon!",close:!0,icon:"warning"}),"\n\n",c.a.createElement(s.a,{type:"danger",text:"This is a danger alert with an icon!",close:!0,icon:"error"})),c.a.createElement("h3",null,"External close button"),c.a.createElement("p",null,"To add an external close-button for your alert add the attribute ",c.a.createElement(i.Attribute,{data:!0,name:"alert-close",value:"{id}"})," to the button element."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(s.a,{id:"alert-success-1",type:"success",text:"Press the button below to close me",icon:"check_circle"}),"\n\n",c.a.createElement("button",{type:"button",className:"btn btn-primary","data-alert-close":"alert-success-1"},"Close alert")))},w=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"extended-usage"},"Extended usage"),c.a.createElement("p",null,"Alerts can also contain additional HTML elements like headings, paragraphs and dividers."),c.a.createElement("p",null,"Just make sure to wrap the content in a container with the class ",c.a.createElement(i.Property,{value:".alert-body"}),"."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(s.a,{type:"success",close:!0,icon:"check_circle"},c.a.createElement("h3",{className:"color-success"},"Success!"),c.a.createElement("p",null,"PDF was successfully uploaded. ",c.a.createElement("br",null)," Some additional information."),c.a.createElement("hr",null),c.a.createElement("p",null,"By the way, great job!"))))},b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,l["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){u.alert.init()}},{key:"render",value:function(){return c.a.createElement(i.DocContainer,{docToc:!0},c.a.createElement("p",{className:"lead"},"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),c.a.createElement(E,null),c.a.createElement(y,null),c.a.createElement(g,null),c.a.createElement(w,null))}}])&&h(n.prototype,a),r&&h(n,r),t}();t.default=b}}]);
//# sourceMappingURL=doc-route.chunk_1.js.map?42f093b6180e01015c53