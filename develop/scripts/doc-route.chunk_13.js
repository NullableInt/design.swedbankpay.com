(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[15,85],{374:function(e,t,a){"use strict";a.r(t),a.d(t,"Addon",function(){return c});var n=a(1),l=a.n(n),r=a(14),o=a.n(r),u=a(458),i=a.n(u),c=function(e){var t=e.type,a=e.value,n=e.color,r=e.disabled;return"button"===t?l.a.createElement("button",{type:"button",className:"btn btn-".concat(n),disabled:r},a):l.a.createElement("span",{className:"input-group-addon"},"icon"===t?l.a.createElement("i",{className:"material-icons"},a):a)},s=function(e){var t=e.icon;return l.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",l.a.createElement("i",{className:"material-icons"},t),"\n\t")},p=function(e){var t=e.id,a=e.type,r=e.placeholder,o=e.pattern,u=e.validate,p=e.required,m=e.defaultValue,d=e.autoComplete,f=e.disabled,g=e.readOnly,E=e.label,y=e.validationState,b=e.selectOptions,h=e.prefixValue,x=e.prefixType,v=e.prefixBtnColor,w=e.postfixValue,N=e.postfixType,C=e.postfixBtnColor,k=e.feedbackIcon,V=e.helpBlock,P=e.errorMessage,T=e.successMessage,B={type:a||null,className:"form-control",id:t||null,placeholder:r||null,defaultValue:m||"",disabled:f||null,readOnly:g||null,autoComplete:d||null,required:p||null,pattern:o?"":null,"data-validate":u?"":null},O=i()("input-group",y?"has-".concat(y):null,k?"has-feedback":null);return l.a.createElement("div",{className:"form-group"},"\n",E?l.a.createElement("label",{htmlFor:t},E):null,E?"\n":null,l.a.createElement("div",{className:O},"\n",h?l.a.createElement(c,{type:x,value:h,color:v,disabled:f}):null,h?"\n":null,"textarea"===a?l.a.createElement("textarea",B):"select"===a?l.a.createElement("select",{className:"form-control",disabled:f,readOnly:g},"\n\t\t",b.map(function(e,t){return l.a.createElement(n.Fragment,{key:e+t},l.a.createElement("option",null,e),t!==b.length-1?"\n\t\t":"")}),"\n\t"):l.a.createElement("input",B),"\n",k?l.a.createElement(s,{icon:k}):null," ",k?"\n":null,w?l.a.createElement(c,{type:N,value:w,color:C,disabled:f}):null,w?"\n":null),V?l.a.createElement("div",{className:"help-block","data-success":T||null,"data-error":P||null},V):null)};p.propTypes={type:o.a.string.isRequired,id:o.a.string,placeholder:o.a.string,pattern:o.a.string,validate:o.a.bool,required:o.a.bool,defaultValue:o.a.string,autoComplete:o.a.string,disabled:o.a.bool,readOnly:o.a.bool,label:o.a.string,validationState:o.a.oneOf(["success","error",""]),selectOptions:o.a.array,prefixValue:o.a.string,prefixType:o.a.oneOf(["button","icon",""]),prefixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),postfixValue:o.a.string,postfixType:o.a.oneOf(["button","icon",""]),postfixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),feedbackIcon:o.a.string,helpBlock:o.a.oneOfType([o.a.string,o.a.bool]),errorMessag:o.a.string,successMessag:o.a.string},t.default=p},412:function(e,t,a){"use strict";a.r(t),a.d(t,"BasicExample",function(){return c}),a.d(t,"CheckboxesAndRadios",function(){return s}),a.d(t,"ButtonAddons",function(){return p}),a.d(t,"WithSelect",function(){return m}),a.d(t,"WithFeedbackIcon",function(){return d}),a.d(t,"ValidationStates",function(){return f}),a.d(t,"Disabled",function(){return g});var n=a(1),l=a.n(n),r=a(361),o=a(462),u=a.n(o),i=a(374),c=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"basic-example"},"Basic example"),l.a.createElement("p",null,"Add a ",l.a.createElement(u.a,{className:"language-html"},"<span>")," with class ",l.a.createElement(r.Property,{value:".input-group-addon"})," to get a gray box on the left, right or both sides of an ",l.a.createElement(u.a,{className:"language-html"},"<input>")," element. The position of your ",l.a.createElement(r.Property,{value:".input-group-addon"})," depends on if you place it before or after the ",l.a.createElement(u.a,{className:"language-html"},"<input")," element."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i.default,{id:"input-id-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr."})," ","\n\n",l.a.createElement(i.default,{id:"input-id-2",type:"text",label:"Email",placeholder:"Email",prefixType:"icon",prefixValue:"email"})," ","\n\n",l.a.createElement(i.default,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"})," ","\n\n",l.a.createElement(i.default,{id:"input-id-4",type:"textarea",label:"Notes",placeholder:"Special requests",prefixType:"icon",prefixValue:"format_quote"})))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"checkboxes-and-radios"},"Checkboxes and radios"),l.a.createElement("p",null,"Place any checkbox or radio option within an input group’s addon instead of text."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},"\n",l.a.createElement("span",{className:"input-group-addon"},"\n\t\t",l.a.createElement("input",{type:"checkbox"}),"\n\t"),"\n",l.a.createElement("input",{type:"text",className:"form-control"}),"\n")),"\n\n",l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},"\n",l.a.createElement("span",{className:"input-group-addon"},"\n\t\t",l.a.createElement("input",{type:"radio"}),"\n\t"),"\n",l.a.createElement("input",{type:"text",className:"form-control"}),"\n"))))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"button-addons"},"Button addons"),l.a.createElement("p",null,"If you want ",l.a.createElement(u.a,{className:"language-html"},"<button>"),"s included with your input elements you can just add a ",l.a.createElement(u.a,{className:"language-html"},"<button>")," inside a input-group like you would anywhere else."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement(i.default,{type:"text",postfixType:"button",postfixValue:"Button",postfixBtnColor:"executive"})," ","\n\n",l.a.createElement(i.default,{type:"text",prefixType:"button",prefixValue:"Button",prefixBtnColor:"guiding",postfixType:"button",postfixValue:"Button",postfixBtnColor:"destructive"})))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"with-select"},"With select"),l.a.createElement("p",null,"Inserting text next to a ",l.a.createElement(u.a,{className:"language-html"},"<select>")," works just like any other input element."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement(i.default,{type:"select",selectOptions:["Bounty hunter","Smuggler","Jedi"],prefixValue:"Profession"})))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"with-feedback"},"With feedback"),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement(i.default,{id:"input-with-feedback-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr.",feedbackIcon:"cancel"})))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"validation-states"},"Validation states"),l.a.createElement("p",null,"You can also visualize validation on your input-groups. Just add ",l.a.createElement(r.Property,{value:".has-success"})," or ",l.a.createElement(r.Property,{value:".has-error"})," with a ",l.a.createElement(r.Property,{value:".input-group"}),"."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement(i.default,{type:"text",validationState:"success",placeholder:"Name",prefixValue:"Mr.",defaultValue:"Anderson"})," ","\n\n",l.a.createElement(i.default,{type:"text",validationState:"error",placeholder:"Name",prefixValue:"Agent",defaultValue:"Smith"})))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"disabled"},"Disabled"),l.a.createElement("p",null,"Just like for forms you can add ",l.a.createElement(r.Attribute,{name:"disabled"})," to an input element to disable it. If you are going to disable an element in a ",l.a.createElement(r.Property,{value:".input-group"})," make sure to also add the ",l.a.createElement(r.Attribute,{name:"disabled"})," attribute to the buttons."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement(i.default,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",disabled:!0,prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"}),l.a.createElement(i.default,{type:"text",disabled:!0,prefixType:"button",prefixValue:"Button",prefixBtnColor:"guiding",postfixType:"button",postfixValue:"Button",postfixBtnColor:"destructive"})))};t.default=function(){return l.a.createElement(r.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"You can include additional information to specific input elements by adding ",l.a.createElement(u.a,{className:"language-html"},"<span>"),"s or ",l.a.createElement(u.a,{className:"language-html"},"<button>"),"s in a ",l.a.createElement(r.Property,{value:".input-group"}),"."),l.a.createElement(c,null),l.a.createElement(p,null),l.a.createElement(m,null),l.a.createElement(f,null),l.a.createElement(g,null))}},457:function(e,t){(function(t){e.exports=t}).call(this,{})},458:function(e,t,a){var n;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=l(a);if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)&&a.length){var u=o.apply(null,a);u&&e.push(u)}else if("object"===n)for(var i in a)r.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===l(a(457))&&a(457)?void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n):window.classNames=o}()}}]);
//# sourceMappingURL=doc-route.chunk_13.js.map?ef1c6ea26aa36648e82b