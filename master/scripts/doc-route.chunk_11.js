(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[12],{373:function(e,a){(function(a){e.exports=a}).call(this,{})},374:function(e,a,t){var l;function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var l=n(t);if("string"===l||"number"===l)e.push(t);else if(Array.isArray(t)&&t.length){var i=o.apply(null,t);i&&e.push(i)}else if("object"===l)for(var u in t)r.call(t,u)&&t[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===n(t(373))&&t(373)?void 0===(l=function(){return o}.apply(a,[]))||(e.exports=l):window.classNames=o}()},376:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var l=t(1),n=t.n(l),r=t(65),o=t.n(r),i=t(374),u=t.n(i),c=function(e){var a=e.type,t=e.value,l=e.color,r=e.disabled;return"button"===a?n.a.createElement("button",{type:"button",className:"btn btn-".concat(l),disabled:r},t):n.a.createElement("span",{className:"input-group-addon"},"icon"===a?n.a.createElement("i",{className:"material-icons"},t):t)},s=function(e){var a=e.icon;return n.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",n.a.createElement("i",{className:"material-icons"},a),"\n\t")},m=function(e){var a=e.id,t=e.type,r=e.placeholder,o=e.pattern,i=e.validate,m=e.required,d=e.defaultValue,p=e.autoComplete,b=e.disabled,f=e.readOnly,h=e.label,g=e.validationState,E=e.selectOptions,v=e.prefixValue,y=e.prefixType,x=e.prefixBtnColor,w=e.postfixValue,k=e.postfixType,P=e.postfixBtnColor,C=e.feedbackIcon,N=e.helpBlock,T=e.errorMessage,F=e.successMessage,O={type:t||null,className:"form-control",id:a||null,placeholder:r||null,defaultValue:d||"",disabled:b||null,readOnly:f||null,autoComplete:p||null,required:m||null,pattern:o?"":null,"data-validate":i?"":null},S=u()("input-group",g?"has-".concat(g):null,C?"has-feedback":null);return n.a.createElement("div",{className:"form-group"},"\n",h?n.a.createElement("label",{htmlFor:a},h):null,h?"\n":null,n.a.createElement("div",{className:S},"\n",v?n.a.createElement(c,{type:y,value:v,color:x,disabled:b}):null,v?"\n":null,"textarea"===t?n.a.createElement("textarea",O):"select"===t?n.a.createElement("select",{className:"form-control",disabled:b,readOnly:f},"\n\t\t",E.map(function(e,a){return n.a.createElement(l.Fragment,{key:e+a},n.a.createElement("option",null,e),a!==E.length-1?"\n\t\t":"")}),"\n\t"):n.a.createElement("input",O),"\n",C?n.a.createElement(s,{icon:C}):null," ",C?"\n":null,w?n.a.createElement(c,{type:k,value:w,color:P,disabled:b}):null,w?"\n":null),N?n.a.createElement("div",{className:"help-block","data-success":F||null,"data-error":T||null},N):null)};m.propTypes={type:o.a.string.isRequired,id:o.a.string,placeholder:o.a.string,pattern:o.a.string,validate:o.a.bool,required:o.a.bool,defaultValue:o.a.string,autoComplete:o.a.string,disabled:o.a.bool,readOnly:o.a.bool,label:o.a.string,validationState:o.a.oneOf(["success","error",""]),selectOptions:o.a.array,prefixValue:o.a.string,prefixType:o.a.oneOf(["button","icon",""]),prefixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),postfixValue:o.a.string,postfixType:o.a.oneOf(["button","icon",""]),postfixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),feedbackIcon:o.a.string,helpBlock:o.a.oneOfType([o.a.string,o.a.bool]),errorMessag:o.a.string,successMessag:o.a.string},a.b=m},377:function(e,a,t){"use strict";var l=t(1),n=t.n(l),r=t(65),o=t.n(r),i=t(374),u=t.n(i);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var s=function(e){var a=e.label,t=e.id,l=e.name,r=e.value,o=e.href,i=e.icon,s=e.loading,m=e.type,d=e.disabled,p=e.btnType,b=e.fullWidth,f=e.pullRight,h=e.input,g=e.outline,E=e.active,v=e.size,y=u()("btn",m?"btn-".concat(m):null,g?"btn-outline":null,v?"btn-".concat(v):null,s?"loading":null,b?"btn-block":null,f?"pull-right":null,E&&o?"active":null,d&&o?"disabled":null),x={href:o,id:t,name:l,defaultValue:r,disabled:o?null:d,active:E&&!o?"":null,role:o?"button":null,type:o?null:p||"button","aria-pressed":!!E||null,"aria-disabled":!(!o||!d)||null,tabIndex:o&&d?"-1":null};return o?n.a.createElement("a",c({className:y},x),i?"\n\t":null,i?n.a.createElement("i",{className:"material-icons"},i):null,i&&a?n.a.createElement("span",null,a):a):h?n.a.createElement("input",c({className:y},x)):n.a.createElement("button",c({className:y},x),i?"\n\t\t":null,i?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"material-icons"},i),"\n\t\t"):null,i&&a?n.a.createElement("span",null,a):a,i?"\n\t":null)};s.propTypes={type:o.a.oneOf(["executive","guiding","destructive","link"]).isRequired,label:o.a.string,id:o.a.string,name:o.a.string,value:o.a.string,href:o.a.string,icon:o.a.string,loading:o.a.bool,disabled:o.a.bool,btnType:o.a.string,fullWidth:o.a.bool,loader:o.a.bool,pullRight:o.a.bool,input:o.a.bool,outline:o.a.bool,active:o.a.bool,size:o.a.oneOf(["lg","sm","xs"])},a.a=s},380:function(e,a,t){"use strict";var l=t(1),n=t.n(l),r=t(65),o=t.n(r),i=function(e){var a=e.id,t=e.checked,l=e.disabled,r=e.label,o={type:"checkbox",id:a||null,disabled:l||null,defaultChecked:t||null};return n.a.createElement("div",{className:"checkbox"},"\n",n.a.createElement("input",o),"\n",r?n.a.createElement("label",{htmlFor:a},r):null,r?"\n":null)};i.propTypes={id:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var u=i,c=t(376),s=function(e){var a=e.format,t=e.time,l=e.min,r=e.max,o=e.months,i=e.value,u=e.label,s=e.prefixValue,m=e.prefixType,d=e.fulldate,p=e.mode,b=e.allowinput,f=e.required,h=e.id,g={id:h,className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":a||null,"data-datepicker-time":t||null,"data-datepicker-min":l||null,"data-datepicker-max":r||null,"data-datepicker-value":i||null,"data-datepicker-months":o||null,"data-datepicker-fulldate":d||null,"data-datepicker-mode":p||null,"data-datepicker-allowinput":b||null,"data-required":f||null};return u?n.a.createElement("div",{className:"form-group"},"\n",n.a.createElement("label",{htmlFor:h||null},u),"\n",n.a.createElement("div",{className:"input-group"},"\n",s?n.a.createElement(c.a,{type:m,value:s}):null,"\n",n.a.createElement("input",g),"\n")):n.a.createElement("input",g)};s.propTypes={format:o.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:o.a.bool,min:o.a.string,max:o.a.string,months:o.a.string,value:o.a.string,label:o.a.string,id:o.a.string,required:o.a.bool};var m=s,d=function(e){var a=e.text,t=e.label;return n.a.createElement("div",{className:"form-group"},"\n",t?n.a.createElement("label",null,t):null,t?"\n":null,n.a.createElement("span",{className:"form-control-text"},a),"\n")};d.propTypes={text:o.a.string.isRequired,label:o.a.string};var p=d,b=function(e){var a=e.id,t=e.checked,l=e.disabled,r=e.label,o={type:"radio",id:a||null,name:e.name||null,disabled:l||null,defaultChecked:t||null};return n.a.createElement("div",{className:"radio"},"\n",n.a.createElement("input",o),"\n",r?n.a.createElement("label",{htmlFor:a},r):null,r?"\n":null)};b.propTypes={id:o.a.string,name:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var f=b,h=function(e){var a=e.name,t=e.min,l=e.max,r=e.step,o=e.color,i=e.value,u=e.disabled,c=e.valueLabel,s=e.valueLabelPrefix,m=e.valueLabelPostfix,d=e.valueLabelPosition,p={type:"range",name:a,min:t,max:l,step:r,defaultValue:i,disabled:u};return n.a.createElement("div",{className:"rangeslider rangeslider-".concat(o||"brand"," label-").concat(d||"right")},"\n",n.a.createElement("input",p),c?"\n":null,c?n.a.createElement(function(){return n.a.createElement("output",{className:"value-label"},"\n\t\t",n.a.createElement("p",null,"\n\t\t\t",s?n.a.createElement("span",null,s):null,s?"\n\t\t\t":null,n.a.createElement("span",{"data-rs-value":!0},i),"\n\t\t\t",m?n.a.createElement("span",null,m):null,m?"\n\t\t":null),"\n\t")},null):null,c?"\n":null)};h.propTypes={name:o.a.string,min:o.a.number,max:o.a.number,step:o.a.number,color:o.a.oneOf(["brand","neutral","default"]),value:o.a.number,disabled:o.a.bool,valueLabel:o.a.bool,valueLabelPrefix:o.a.string,valueLabelPostfix:o.a.string,valueLabelPosition:o.a.string};var g=h,E=function(e){var a=e.id,t=e.checked,l=e.disabled,r=e.label,o={type:"checkbox",id:a||null,disabled:l||null,defaultChecked:t||null};return n.a.createElement("div",{className:"togglebox"},"\n",n.a.createElement("input",o),"\n",r?n.a.createElement("label",{htmlFor:a},r):null,r?"\n":null)};E.propTypes={id:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var v=E;t.d(a,"a",function(){return u}),t.d(a,"b",function(){return m}),t.d(a,"c",function(){return p}),t.d(a,"d",function(){return f}),t.d(a,"e",function(){return g}),t.d(a,"f",function(){return v})},395:function(e,a,t){"use strict";t.r(a),t.d(a,"Overview",function(){return v}),t.d(a,"FormGrid",function(){return y}),t.d(a,"Validation",function(){return x}),t.d(a,"UsageWithFieldsets",function(){return w}),t.d(a,"StaticText",function(){return k}),t.d(a,"Checkboxes",function(){return P}),t.d(a,"RadioButtons",function(){return C}),t.d(a,"Toggleboxes",function(){return N}),t.d(a,"RangeSlider",function(){return T}),t.d(a,"DisabledFormComponents",function(){return F}),t.d(a,"JavascriptMethods",function(){return O});var l=t(1),n=t.n(l),r=t(375),o=t.n(r),i=t(357),u=t(376),c=t(377),s=t(380);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function p(e,a){return!a||"object"!==m(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,a){return(f=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var h=window.dg,g=h.rangeslider,E=h.validation,v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"overview"},"Overview"),n.a.createElement("p",null,"Use ",n.a.createElement(o.a,{className:"language-html"},"<input>")," in combination with ",n.a.createElement(o.a,{className:"language-html"},"<form-group>"),"s and/or ",n.a.createElement(o.a,{className:"language-html"},"<form>"),"s to show a collection of related inputs. ",n.a.createElement(o.a,{className:"language-html"},"<form-group>"),"s can contain more than just an input, like a ",n.a.createElement(o.a,{className:"language-html"},"<label>")," or",n.a.createElement(o.a,{className:"language-html"},"<help-block>"),"s."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},n.a.createElement(u.b,{id:"first-name",type:"text",autoComplete:"given-name",label:"First name",placeholder:"Enter your first name",helpBlock:"The first word of your full name"}),n.a.createElement(u.b,{id:"last-name",type:"text",label:"Last name",autoComplete:"family-name",placeholder:"Enter your last name",helpBlock:"The very last collection of letters in your name"}),n.a.createElement(u.b,{id:"email-address",type:"text",label:"Email",autoComplete:"email",placeholder:"Enter your email",helpBlock:"The last part is probably @swedbankpay.com"}),n.a.createElement("div",{className:"form-group"},n.a.createElement(s.a,{label:"Subscribe to our Shovels and Tapestry catalogue",id:"subscribe-checkbox"})),"\n",n.a.createElement(c.a,{type:"executive",label:"Submit",btnType:"submit"}),"\n")))},y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"form-grid"},"Form grid"),n.a.createElement("p",null,"You can use the grid system to customize how forms are displayed. Just wrap your form elements in a row container to have two or more input elements next to eachother horizontally. Remember to add ",n.a.createElement(i.Property,{value:".col-{your_size}"})," to the forms."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement(u.b,{id:"grid-first-name",type:"text",autoComplete:"given-name",label:"First name",placeholder:"Enter your first name",helpBlock:"Hope it is something cool"})),n.a.createElement("div",{className:"col-5"},n.a.createElement(u.b,{id:"grid-last-name",type:"text",label:"Last name",autoComplete:"family-name",placeholder:"Enter your last name",helpBlock:"Most likely in your passport"})),n.a.createElement("div",{className:"col-2"},n.a.createElement("div",{className:"form-group"},"\n",n.a.createElement("br",null),"\n",n.a.createElement("button",{type:"submit",className:"btn btn-executive"},"Search"),"\n"))))))},x=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"validation"},"Validation overview"),n.a.createElement("p",null,"To use our validation, start by adding the attribute ",n.a.createElement(i.Attribute,{name:"novalidate"})," to your ",n.a.createElement(o.a,{className:"language-html"},"<form>")," element. If you wish to validate your entire form, add the ",n.a.createElement(i.Attribute,{data:!0,name:"validate"})," attribute to the ",n.a.createElement(o.a,{className:"language-html"},"<form>")," tag, if not add it to the desired ",n.a.createElement(o.a,{className:"language-html"},"<input>")," tags."),n.a.createElement("p",null,"Validates against ",n.a.createElement(i.Attribute,{name:"required"})," and ",n.a.createElement(i.Attribute,{name:"pattern"}),". Using ",n.a.createElement(i.Attribute,{name:"pattern"})," overrides default patterns."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("form",{noValidate:!0,"data-validate":""},n.a.createElement(u.b,{id:"validation-name-1",type:"text",label:"Name",placeholder:"Enter your name",helpBlock:"This one should be easy"}),n.a.createElement(u.b,{id:"validation-email-1",type:"email",label:"Email",placeholder:"Enter your email",helpBlock:"This one should be pretty easy too"}),"\n",n.a.createElement("button",{className:"btn btn-executive",type:"submit"},"Submit"))),n.a.createElement("h3",null,"Feedback"),n.a.createElement("p",null,"To give users validation feedback on each input insert the message in the attributes ",n.a.createElement(i.Attribute,{data:!0,name:"success"})," and ",n.a.createElement(i.Attribute,{data:!0,name:"error"})," in the ",n.a.createElement(i.Attribute,{value:".help-block"})," element. To display an asterisk you have to include a label with your input element."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("form",{action:"#",noValidate:!0,"data-validate":""},n.a.createElement(u.b,{required:!0,id:"validation-email-2",type:"email",label:"Email",placeholder:"bob.corlsan@example.com",prefixType:"icon",prefixValue:"email",helpBlock:!0,successMessage:"Right!",errorMessage:"Wrong!"}),"\n",n.a.createElement("button",{className:"btn btn-executive",type:"submit"},"Submit"))),n.a.createElement("h3",null,"Dynamically disabled submit button"),n.a.createElement("p",null,"You can also dynamically disable the submit button by adding ",n.a.createElement(i.Attribute,{data:!0,name:"disable-invalid"})," to the ",n.a.createElement(o.a,{className:"language-html"},'<button type="submit">')," element."),n.a.createElement("p",null,n.a.createElement("b",null,"NOTE:")," For this to work you also need the ",n.a.createElement(i.Attribute,{data:!0,name:"validate"})," attribute to be present in the ",n.a.createElement(o.a,{className:"language-html"},"<form>")," tag."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("form",{action:"#",noValidate:!0,"data-validate":""},n.a.createElement(u.b,{required:!0,id:"validation-email-3",type:"email",label:"Email",placeholder:"bob.corlsan@example.com",prefixType:"icon",prefixValue:"email",helpBlock:"Keep your eye on that submit button",successMessage:"Right!",errorMessage:"Wrong!"}),"\n",n.a.createElement("button",{className:"btn btn-executive",type:"submit","data-disable-invalid":""},"Submit"))))},w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"usage-with-fieldsets"},"Usage with fieldsets"),n.a.createElement("p",null,"Use fieldsets to give your forms more structure."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Log in"),n.a.createElement(u.b,{id:"fieldset-username",type:"text",autoComplete:"username",label:"Username",placeholder:"Enter your username"}),n.a.createElement(u.b,{id:"fieldset-password",type:"password",label:"Password",autoComplete:"current-password",placeholder:"Enter your password"}),n.a.createElement(s.a,{label:"Remember me",id:"fieldset-checkbox"})),"\n",n.a.createElement(c.a,{type:"executive",label:"Log in",btnType:"submit"}),"\n")))},k=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"static-text"},"Static text"),n.a.createElement("p",null,"To just display static text in forms use a ",n.a.createElement(o.a,{className:"language-html"},"<span>")," inside a form"),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement(s.c,{label:"Company",text:"Swedbank Pay"}),n.a.createElement(s.c,{label:"Employee",text:"Bob Corlsan"})))},P=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"checkboxes"},"Checkboxes"),n.a.createElement("p",null,"Use checkboxes to make it so a user can select several options. If you need to restrict the number of possible selections to one, see radio buttons."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement(s.a,{label:"Bread",id:"checkbox-example-1"}),n.a.createElement(s.a,{label:"Not bread. I'm not really fond of it. What I would really like, however, is one single piece of cracker with some nutella on it. Perhaps this could be the second checkbox. These thoughts are written here simply to show you how the checkboxes align themselves when label text is fairly long.",id:"checkbox-example-2"}),n.a.createElement(s.a,{label:"Milk",id:"checkbox-example-3",checked:!0})))},C=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"radio-buttons"},"Radio buttons"),n.a.createElement("p",null,"Use radio buttons when you wish to limit your user to one choice out of several possible."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement(s.d,{label:"Hamburgers",id:"radio-example-1",name:"radio-example"}),n.a.createElement(s.d,{label:"Not the one above because I'm not really fond of hamburgers. What I would really like, however, is a nice piece of steak. Perhaps that could be the second option. These thoughts are written here simply to show you how radio buttons align themselves when label text is fairly long.",id:"radio-example-2",name:"radio-example"}),n.a.createElement(s.d,{label:"Pizza",id:"radio-example-3",name:"radio-example",checked:!0})))},N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"toggleboxes"},"Toggleboxes"),n.a.createElement("p",null,"Use toggleboxes if you wish present the user with an either-or option."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement(s.f,{id:"togglebox-example-1",label:"Enable overdrive"}),n.a.createElement(s.f,{id:"togglebox-example-2",label:"Enable superpowers",checked:!0})))},T=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"rangeslider"},"Rangeslider"),n.a.createElement("p",null,"Asides from the default behavior of a range input, the Rangeslider","'","s colors and label positioning can be customized."),n.a.createElement("p",null,"Currently there are three different supported colors for the slider: ",n.a.createElement(i.Property,{value:".rangeslider-brand"}),", ",n.a.createElement(i.Property,{value:".rangeslider-default"})," and ",n.a.createElement(i.Property,{value:".rangeslider-neutral"}),"."),n.a.createElement("p",null,"The Rangeslider currently supports two positions: ",n.a.createElement(i.Property,{value:".label-right"})," and ",n.a.createElement(i.Property,{value:".label-top"}),". If no position is given, ",n.a.createElement(i.Property,{value:"right"})," is defaulted."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement(s.e,{min:0,max:200,step:1,value:100,valueLabel:!0,valueLabelPrefix:"$",valueLabelPostfix:"%"})),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement(s.e,{min:0,max:200,step:1,value:100,color:"neutral",valueLabel:!0,valueLabelPrefix:"$",valueLabelPostfix:"%",valueLabelPosition:"top"})))},F=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"disabled-form-components"},"Disabled form components"),n.a.createElement("p",null,"Disable whichever form component you want by adding ",n.a.createElement(i.Attribute,{name:"disabled"})," to the desired input element"),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement(s.f,{id:"togglebox-disabled-example-1",label:"Enable overdrive",disabled:!0}),n.a.createElement(s.d,{label:"Hamburgers",id:"radio-disabled-example-1",name:"radio-disabled-example",disabled:!0}),n.a.createElement(s.a,{label:"Milk",id:"checkbox-disabled-example-3",disabled:!0,checked:!0}),n.a.createElement(s.e,{className:"mb-2",min:0,max:200,step:1,value:100,valueLabel:!0,valueLabelPrefix:"$",valueLabelPostfix:"%",disabled:!0})),n.a.createElement("h3",null,"Disable a fieldset"),n.a.createElement("p",null,"Disable entire fieldsets by adding ",n.a.createElement(i.Attribute,{name:"disabled"})," to the fieldset element"),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("form",null,n.a.createElement("fieldset",{disabled:!0},n.a.createElement("legend",null,"Log in"),n.a.createElement(u.b,{id:"fieldset-disabled-username",type:"text",autoComplete:"username",label:"Username",placeholder:"Enter your username"}),n.a.createElement(u.b,{id:"fieldset-disabled-password",type:"password",label:"Password",autoComplete:"current-password",placeholder:"Enter your password"}),n.a.createElement(s.a,{label:"Remember me",id:"fieldset-disabled-checkbox"})),"\n",n.a.createElement(c.a,{type:"executive",label:"Log in",btnType:"submit",disabled:!0}),"\n")))},O=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),n.a.createElement(i.JavascriptDocs,{componentName:"validation"}),n.a.createElement("p",null,"The ",n.a.createElement(i.DgScript,{component:"validation",func:"init"})," can be used on a form tag to initialize all fields contained in the form, or you can pass a single field to initialize just that one."))},S=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),p(this,b(a).apply(this,arguments))}var t,r,o;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&f(e,a)}(a,l["Component"]),t=a,(r=[{key:"componentDidMount",value:function(){g.init(),E.init()}},{key:"render",value:function(){return n.a.createElement(i.DocContainer,{docToc:!0},n.a.createElement("p",{className:"lead"},"Form componenets allow you to gather user input in various different ways."),n.a.createElement(v,null),n.a.createElement(y,null),n.a.createElement(x,null),n.a.createElement(w,null),n.a.createElement(k,null),n.a.createElement(P,null),n.a.createElement(C,null),n.a.createElement(N,null),n.a.createElement(T,null),n.a.createElement(F,null),n.a.createElement(O,null))}}])&&d(t.prototype,r),o&&d(t,o),a}();a.default=S}}]);
//# sourceMappingURL=doc-route.chunk_11.js.map?8a218276e36764d84a46