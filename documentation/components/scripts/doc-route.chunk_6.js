(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[53,5,46,48,49,50,52],{420:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return u});var n=a(1),l=a.n(n),r=a(2),i=a.n(r),u=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},o=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};o.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},u.propTypes={value:i.a.string.isRequired},t.default=o},421:function(e,t,a){"use strict";var n=a(1),u=a.n(n),l=a(2),r=a.n(l),i=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,i=e.children;return u.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?u.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?u.a.createElement("p",null,r):null,i?"\n":"",i?u.a.createElement("div",{className:"alert-body"},i):null,l?"\n":"",l?u.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",u.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=i},422:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(421);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(421);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),i=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:a.n(r).a.string.isRequired},t.default=i},425:function(e,t,a){"use strict";a.r(t);var n=a(1),u=a.n(n),l=a(2),r=a.n(l),i=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,i=e.params;return l&&(a=l.map(function(e,t){return u.a.createElement("span",{key:t},e,u.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return u.a.createElement("span",{key:t},e,t<i.length-1?u.a.createElement("span",{className:"token punctuation"},", "):null)})),u.a.createElement("code",null,u.a.createElement("span",null,"px"),u.a.createElement("span",{className:"token punctuation"},"."),u.a.createElement("span",null,n),u.a.createElement("span",{className:"token punctuation"},"."),a,u.a.createElement("span",{className:"token function"},r),u.a.createElement("span",{className:"token punctuation"},"("),t,u.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=i},426:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),i=a.n(r),u=a(427),o=function(e){var t=e.docToc,a=e.children,n=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},a)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(n,null),t?l.a.createElement(u.DocToc,{component:n}):null))};o.propTypes={docToc:i.a.bool},t.default=o},427:function(e,t,a){"use strict";a.r(t);var n=a(420);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(428);a.d(t,"ComponentPreview",function(){return l.default});var r=a(426);a.d(t,"DocContainer",function(){return r.default});var i=a(429);a.d(t,"DocHeading",function(){return i.default});var u=a(430);a.d(t,"DocToc",function(){return u.default});var o=a(422);a.d(t,"DeprecatedComponentAlert",function(){return o.default});var c=a(423);a.d(t,"ExperimentalComponentAlert",function(){return c.default});var m=a(424);a.d(t,"Icon",function(){return m.default});var s=a(425);a.d(t,"PxScript",function(){return s.default})},435:function(e,t,a){"use strict";a.d(t,"a",function(){return C});var N=a(1),T=a.n(N),n=a(2),l=a.n(n),r=a(187),M=a.n(r),C=function(e){var t=e.type,a=e.value,n=e.color,l=e.disabled;return"button"===t?T.a.createElement("button",{type:"button",className:"btn btn-".concat(n),disabled:l},a):T.a.createElement("span",{className:"input-group-addon"},"icon"===t?T.a.createElement("i",{className:"material-icons"},a):a)},A=function(e){var t=e.icon;return T.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",T.a.createElement("i",{className:"material-icons"},t),"\n\t")},i=function(e){var t=e.id,a=e.type,n=e.placeholder,l=e.pattern,r=e.validate,i=e.required,u=e.defaultValue,o=e.autoComplete,c=e.disabled,m=e.readOnly,s=e.label,d=e.validationState,p=e.selectOptions,f=e.prefixValue,E=e.prefixType,b=e.prefixBtnColor,v=e.postfixValue,h=e.postfixType,g=e.postfixBtnColor,y=e.feedbackIcon,k=e.helpBlock,x=e.errorMessage,Y=e.successMessage,w={type:a||null,className:"form-control",id:t||null,placeholder:n||null,defaultValue:u||"",disabled:c||null,readOnly:m||null,autoComplete:o||null,required:i||null,pattern:l?"":null,"data-validate":r?"":null},D=M()("input-group",d?"has-".concat(d):null,y?"has-feedback":null);return T.a.createElement("div",{className:"form-group"},"\n",s?T.a.createElement("label",{htmlFor:t},s):null,s?"\n":null,T.a.createElement("div",{className:D},"\n",f?T.a.createElement(C,{type:E,value:f,color:b,disabled:c}):null,f?"\n":null,"textarea"===a?T.a.createElement("textarea",w):"select"===a?T.a.createElement("select",{className:"form-control",disabled:c,readOnly:m},"\n\t\t",p.map(function(e,t){return T.a.createElement(N.Fragment,{key:e+t},T.a.createElement("option",null,e),t!==p.length-1?"\n\t\t":"")}),"\n\t"):T.a.createElement("input",w),"\n",y?T.a.createElement(A,{icon:y}):null," ",y?"\n":null,v?T.a.createElement(C,{type:h,value:v,color:g,disabled:c}):null,v?"\n":null),k?T.a.createElement("div",{className:"help-block","data-success":Y||null,"data-error":x||null},k):null)};i.propTypes={type:l.a.string.isRequired,id:l.a.string,placeholder:l.a.string,pattern:l.a.string,validate:l.a.bool,required:l.a.bool,defaultValue:l.a.string,autoComplete:l.a.string,disabled:l.a.bool,readOnly:l.a.bool,label:l.a.string,validationState:l.a.oneOf(["success","error",""]),selectOptions:l.a.array,prefixValue:l.a.string,prefixType:l.a.oneOf(["button","icon",""]),prefixBtnColor:l.a.oneOf(["primary","secondary","danger"]),postfixValue:l.a.string,postfixType:l.a.oneOf(["button","icon",""]),postfixBtnColor:l.a.oneOf(["primary","secondary","danger"]),feedbackIcon:l.a.string,helpBlock:l.a.string,errorMessag:l.a.string,successMessag:l.a.string},t.b=i},440:function(e,t,a){"use strict";var n=a(1),p=a.n(n),l=a(2),r=a.n(l),i=function(e){var t=e.id,a=e.checked,n=e.disabled,l=e.label,r={type:"checkbox",id:t||null,disabled:n||null,defaultChecked:a||null};return p.a.createElement("div",{className:"checkbox"},"\n",p.a.createElement("input",r),"\n",l?p.a.createElement("label",{htmlFor:t},l):null,l?"\n":null)};i.propTypes={id:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var u=i,f=a(435),o=function(e){var t=e.format,a=e.time,n=e.min,l=e.max,r=e.months,i=e.value,u=e.label,o=e.required,c=e.prefixValue,m=e.prefixType,s=e.id,d={className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":t||null,"data-datepicker-time":a||null,"data-datepicker-min":n||null,"data-datepicker-max":l||null,"data-datepicker-value":i||null,"data-datepicker-months":r||null,"data-required":o||null,id:s};return u?p.a.createElement("div",{className:"form-group"},"\n",p.a.createElement("label",{htmlFor:s||null},u),"\n",p.a.createElement("div",{className:"input-group"},"\n",c?p.a.createElement(f.a,{type:m,value:c}):null,"\n",p.a.createElement("input",d),"\n")):p.a.createElement("input",d)};o.propTypes={format:r.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:r.a.bool,min:r.a.string,max:r.a.string,months:r.a.string,value:r.a.string,label:r.a.string,id:r.a.string,required:r.a.bool};var c=o,m=function(e){var t=e.text,a=e.label;return p.a.createElement("div",{className:"form-group"},"\n",a?p.a.createElement("label",null,a):null,a?"\n":null,p.a.createElement("span",{className:"form-control-text"},t),"\n")};m.propTypes={text:r.a.string.isRequired,label:r.a.string};var s=m,d=function(e){var t=e.id,a=e.checked,n=e.disabled,l=e.label,r={type:"radio",id:t||null,name:e.name||null,disabled:n||null,defaultChecked:a||null};return p.a.createElement("div",{className:"radio"},"\n",p.a.createElement("input",r),"\n",l?p.a.createElement("label",{htmlFor:t},l):null,l?"\n":null)};d.propTypes={id:r.a.string,name:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var E=d,b=function(e){var t=e.name,a=e.min,n=e.max,l=e.step,r=e.color,i=e.value,u=e.disabled,o=e.valueLabel,c=e.valueLabelPrefix,m=e.valueLabelPostfix,s=e.valueLabelPosition,d={type:"range",name:t,min:a,max:n,step:l,defaultValue:i,disabled:u};return p.a.createElement("div",{className:"rangeslider rangeslider-".concat(r||"brand"," label-").concat(s||"right")},"\n",p.a.createElement("input",d),o?"\n":null,o?p.a.createElement(function(){return p.a.createElement("output",{className:"value-label"},"\n\t\t",p.a.createElement("p",null,"\n\t\t\t",c?p.a.createElement("span",null,c):null,c?"\n\t\t\t":null,p.a.createElement("span",{"data-rs-value":!0},i),"\n\t\t\t",m?p.a.createElement("span",null,m):null,m?"\n\t\t":null),"\n\t")},null):null,o?"\n":null)};b.propTypes={name:r.a.string,min:r.a.number,max:r.a.number,step:r.a.number,color:r.a.oneOf(["brand","neutral","default"]),value:r.a.number,disabled:r.a.bool,valueLabel:r.a.bool,valueLabelPrefix:r.a.string,valueLabelPostfix:r.a.string,valueLabelPosition:r.a.string};var v=b,h=function(e){var t=e.id,a=e.checked,n=e.disabled,l=e.label,r={type:"checkbox",id:t||null,disabled:n||null,defaultChecked:a||null};return p.a.createElement("div",{className:"togglebox"},"\n",p.a.createElement("input",r),"\n",l?p.a.createElement("label",{htmlFor:t},l):null,l?"\n":null)};h.propTypes={id:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var g=h;a.d(t,"a",function(){return u}),a.d(t,"b",function(){return c}),a.d(t,"c",function(){return s}),a.d(t,"d",function(){return E}),a.d(t,"e",function(){return v}),a.d(t,"f",function(){return g})},456:function(e,t,a){"use strict";a.r(t),a.d(t,"SimpleDatepicker",function(){return b}),a.d(t,"InitialValue",function(){return v}),a.d(t,"CustomFormat",function(){return h}),a.d(t,"IncludeTime",function(){return g}),a.d(t,"Required",function(){return y}),a.d(t,"ShowingMultipleMonths",function(){return k}),a.d(t,"DateRange",function(){return x}),a.d(t,"Options",function(){return Y});var r=a(1),i=a.n(r),u=a(427),n=a(440),o=a(68),l=a(421);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=window.moment,E=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"about-datepickers"},"About"),i.a.createElement("p",null,"Datepickers give a visual presentation of days, months and years. By utilizing the datepicker you can be assured the given input is in the format you expect without having to deal with too much client-side validation. Datepickers should be used for recent dates to avoid having the user click a lot of times to find the required date. If you need a date of birth or something similarly far back, an input field with proper validation will be easier to use."))},b=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"simple-datepicker"},"Simple datepicker"),i.a.createElement("p",null,"A basic datepicker can be made by applying the attribute ",i.a.createElement(u.Attribute,{data:!0,name:"datepicker"})," to an input element inside a ",i.a.createElement(u.Property,{value:".form-group"}),"."),i.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{label:"Date",prefixType:"icon",prefixValue:"event",id:"simle-datepicker"})))},v=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"initial-value"},"Initial value"),i.a.createElement("p",null,"If you want to set an initial value for your datepicker use ",i.a.createElement(u.Attribute,{data:!0,value:"{your-date}",name:"datepicker-value"}),"."),i.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{value:f().format("YYYY-MM-DD"),label:"Date",prefixType:"icon",prefixValue:"event",id:"init-value-datepicker"})),i.a.createElement(l.a,{type:"warning"},i.a.createElement("h5",null,"Initial value and format"),i.a.createElement("p",null,"Keep in mind that the datepicker will not insert the initial value if it does not correctly match the set format (",i.a.createElement(u.Attribute,{value:"iso8601"})," if you have not specified a format).")))},h=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"custom-format"},"Custom format"),i.a.createElement("p",null,"To use a custom format include ",i.a.createElement(u.Attribute,{data:!0,name:"datepicker-format",value:"[nb|sv|da|fi|en|iso8601(default)]"}),"."),i.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{label:"nb (norwegian):",value:f().format("DD.MM.YYYY"),format:"nb",prefixType:"icon",prefixValue:"event",id:"nb-datepicker"}),i.a.createElement(n.b,{label:"sv (swedish):",value:f().format("YYYY-MM-DD"),format:"sv",prefixType:"icon",prefixValue:"event",id:"sv-datepicker"}),i.a.createElement(n.b,{label:"da (danish):",value:f().format("DD.MM.YYYY"),format:"da",prefixType:"icon",prefixValue:"event",id:"da-datepicker"}),i.a.createElement(n.b,{label:"fi (finnish):",value:f().format("DD.MM.YYYY"),format:"fi",prefixType:"icon",prefixValue:"event",id:"fi-datepicker"}),i.a.createElement(n.b,{label:"en (english):",value:f().format("DD/MM/YYYY"),format:"en",prefixType:"icon",prefixValue:"event",id:"en-datepicker"}),i.a.createElement(n.b,{label:"iso8601 (robotic):",value:f().format("YYYY-MM-DD"),format:"iso8601",prefixType:"icon",prefixValue:"event",id:"iso8601-datepicker"})))},g=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"include-time"},"Include time"),i.a.createElement("p",null,"Adding time to your datepicker is as easy as using ",i.a.createElement(u.Attribute,{data:!0,name:"datepicker-time",value:"true"}),"."),i.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{time:!0,value:f().format("HH:mm DD.MM.YYYY"),format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"include-time-datepicker"})))},y=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"required"},"Required"),i.a.createElement("p",null,"If you set ",i.a.createElement(u.Attribute,{data:!0,name:"required",value:"true"})," to true it will autopopulate the input after clicking it if no date is selected. Keep in mind that if you do not pass a value to the datepicker it will remain blank if the user does not click the input."),i.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{required:!0,label:"Date",prefixType:"icon",prefixValue:"event",id:"required-datepicker"})))},k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"showing-multiple-months"},"Showing multiple months"),i.a.createElement("p",null,"If you need to show more than one month in your date picker use the attribute ",i.a.createElement(u.Attribute,{data:!0,name:"datepicker-months",value:"[number]"}),"."),i.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{months:"2",label:"Date",prefixType:"icon",prefixValue:"event",id:"multiple-months-datepicker"})))},x=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"date-range"},"Date range"),i.a.createElement("p",null,"You can set a range of available dates to select from by using ",i.a.createElement(u.Attribute,{data:!0,name:"datepicker-min"})," and ",i.a.createElement(u.Attribute,{data:!0,name:"datepicker-max"})),i.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(n.b,{value:f().format("DD.MM.YYYY"),min:f().subtract(5,"d").format("DD.MM.YYYY"),max:f().add(5,"d").format("DD.MM.YYYY"),months:"2",format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"date-range-datepicker"})),i.a.createElement("p",null,i.a.createElement("b",null,"NOTE:")," Using range with required and no initial value will make the datepicker select current date if a user clicks the input and does not select a date within the range."))},Y=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"available-options"},"Available options"),i.a.createElement("p",null,"Options available through ",i.a.createElement(u.Attribute,{data:!0,name:"datepicker"}),"...")," Keep in mind that setting any of these values will render them true, so setting an attribute to ",i.a.createElement(u.Attribute,{value:"false"})," will still render it true.",i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Attribute"),i.a.createElement("th",null,"Default value"),i.a.createElement("th",null,"Description"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(u.Attribute,{data:!0,name:"datepicker-value"})),i.a.createElement("td",null),i.a.createElement("td",null,"Value used to initialize calendar. Set this value with the same format currently set for the datepicker (including time if you have enabled that).")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(u.Attribute,{data:!0,name:"datepicker-format"})),i.a.createElement("td",null,i.a.createElement(u.Attribute,{value:"iso8601"})),i.a.createElement("td",null,i.a.createElement("p",null,"Format string used for the input field and names for days and months. All have the same time format (HH:mm), and starts the week on monday (1)."),i.a.createElement("p",null,"The following options are available:"),i.a.createElement("ul",{className:"list"},i.a.createElement("li",{className:"mb-sm"},i.a.createElement(u.Attribute,{value:"nb"}),": DD.MM.YYYY"),i.a.createElement("li",{className:"mb-sm"},i.a.createElement(u.Attribute,{value:"sv"}),": YYYY-MM-DD"),i.a.createElement("li",{className:"mb-sm"},i.a.createElement(u.Attribute,{value:"da"}),": DD.MM.YYYY"),i.a.createElement("li",{className:"mb-sm"},i.a.createElement(u.Attribute,{value:"fi"}),": DD.MM.YYYY"),i.a.createElement("li",{className:"mb-sm"},i.a.createElement(u.Attribute,{value:"en"}),": DD/MM/YYYY"),i.a.createElement("li",{className:"mb-sm"},i.a.createElement(u.Attribute,{value:"iso8601"}),": YYYY-MM-DD (default)")))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(u.Attribute,{data:!0,name:"datepicker-time"})),i.a.createElement("td",null),i.a.createElement("td",null,"If the calendar shows the current time and allows you to change it using a dropdown.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(u.Attribute,{data:!0,name:"datepicker-months"})),i.a.createElement("td",null,i.a.createElement(u.Attribute,{value:"1"})),i.a.createElement("td",null,"Number of months to display in the datepicker.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(u.Attribute,{data:!0,name:"datepicker-min"})),i.a.createElement("td",null),i.a.createElement("td",null,"Disallow dates before min.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(u.Attribute,{data:!0,name:"datepicker-max"})),i.a.createElement("td",null),i.a.createElement("td",null,"Disallow dates past max.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(u.Attribute,{data:!0,name:"required"})),i.a.createElement("td",null),i.a.createElement("td",null,"Forces a value in the input field, but only if an initial value is set or the user clicks/tabs the input.")))))},w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,d(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){o.datepicker.init()}},{key:"render",value:function(){return i.a.createElement(u.DocContainer,{docToc:!0},i.a.createElement("p",{className:"lead"},"Datepickers makes it easy to get dates from your users. With datepickers you do not have to worry about how your users write the given date, alleviating the need to do format validation."),i.a.createElement(E,null),i.a.createElement(b,null),i.a.createElement(v,null),i.a.createElement(h,null),i.a.createElement(g,null),i.a.createElement(y,null),i.a.createElement(k,null),i.a.createElement(x,null),i.a.createElement(Y,null))}}])&&m(a.prototype,n),l&&m(a,l),t}();t.default=w}}]);
//# sourceMappingURL=doc-route.chunk_6.js.map?268f0434bf7103972f8d