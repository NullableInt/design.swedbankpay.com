(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[85],{374:function(e,t,a){"use strict";a.r(t),a.d(t,"Addon",function(){return u});var n=a(1),l=a.n(n),r=a(14),o=a.n(r),s=a(458),i=a.n(s),u=function(e){var t=e.type,a=e.value,n=e.color,r=e.disabled;return"button"===t?l.a.createElement("button",{type:"button",className:"btn btn-".concat(n),disabled:r},a):l.a.createElement("span",{className:"input-group-addon"},"icon"===t?l.a.createElement("i",{className:"material-icons"},a):a)},c=function(e){var t=e.icon;return l.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",l.a.createElement("i",{className:"material-icons"},t),"\n\t")},p=function(e){var t=e.id,a=e.type,r=e.placeholder,o=e.pattern,s=e.validate,p=e.required,d=e.defaultValue,f=e.autoComplete,m=e.disabled,b=e.readOnly,y=e.label,g=e.validationState,v=e.selectOptions,x=e.prefixValue,h=e.prefixType,E=e.prefixBtnColor,O=e.postfixValue,k=e.postfixType,w=e.postfixBtnColor,N=e.feedbackIcon,C=e.helpBlock,S=e.errorMessage,V=e.successMessage,B={type:a||null,className:"form-control",id:t||null,placeholder:r||null,defaultValue:d||"",disabled:m||null,readOnly:b||null,autoComplete:f||null,required:p||null,pattern:o?"":null,"data-validate":s?"":null},T=i()("input-group",g?"has-".concat(g):null,N?"has-feedback":null);return l.a.createElement("div",{className:"form-group"},"\n",y?l.a.createElement("label",{htmlFor:t},y):null,y?"\n":null,l.a.createElement("div",{className:T},"\n",x?l.a.createElement(u,{type:h,value:x,color:E,disabled:m}):null,x?"\n":null,"textarea"===a?l.a.createElement("textarea",B):"select"===a?l.a.createElement("select",{className:"form-control",disabled:m,readOnly:b},"\n\t\t",v.map(function(e,t){return l.a.createElement(n.Fragment,{key:e+t},l.a.createElement("option",null,e),t!==v.length-1?"\n\t\t":"")}),"\n\t"):l.a.createElement("input",B),"\n",N?l.a.createElement(c,{icon:N}):null," ",N?"\n":null,O?l.a.createElement(u,{type:k,value:O,color:w,disabled:m}):null,O?"\n":null),C?l.a.createElement("div",{className:"help-block","data-success":V||null,"data-error":S||null},C):null)};p.propTypes={type:o.a.string.isRequired,id:o.a.string,placeholder:o.a.string,pattern:o.a.string,validate:o.a.bool,required:o.a.bool,defaultValue:o.a.string,autoComplete:o.a.string,disabled:o.a.bool,readOnly:o.a.bool,label:o.a.string,validationState:o.a.oneOf(["success","error",""]),selectOptions:o.a.array,prefixValue:o.a.string,prefixType:o.a.oneOf(["button","icon",""]),prefixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),postfixValue:o.a.string,postfixType:o.a.oneOf(["button","icon",""]),postfixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),feedbackIcon:o.a.string,helpBlock:o.a.oneOfType([o.a.string,o.a.bool]),errorMessag:o.a.string,successMessag:o.a.string},t.default=p},457:function(e,t){(function(t){e.exports=t}).call(this,{})},458:function(e,t,a){var n;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=l(a);if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)&&a.length){var s=o.apply(null,a);s&&e.push(s)}else if("object"===n)for(var i in a)r.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===l(a(457))&&a(457)?void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n):window.classNames=o}()}}]);
//# sourceMappingURL=doc-route.chunk_87.js.map?b6c46572c6584674aaf9