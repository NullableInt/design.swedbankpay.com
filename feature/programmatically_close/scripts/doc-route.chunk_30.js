(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[42,50,51,52,53,54,55],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return c});var n=t(0),l=t.n(n),r=t(1),o=t.n(r),c=function(e){var a=e.value;return l.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t)):!t&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};s.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},a.default=s},148:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(1),r=t.n(l),o=function(e){var a=e.id,t=e.type,n=e.icon,l=e.close,r=e.text,o=e.children;return c.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?c.a.createElement("p",null,r):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,l?"\n":"",l?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},a.a=o},149:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(148);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(148);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(1),o=function(e){var a=e.icon;return l.a.createElement("i",{className:"material-icons"},a)};o.propTypes={icon:t.n(r).a.string.isRequired},a.default=o},152:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(1),r=t.n(l),o=function(e){var a,t,n=e.component,l=e.subComponents,r=e.func,o=e.params;return l&&(t=l.map(function(e,a){return c.a.createElement("span",{key:a},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(a=o.map(function(e,a){return c.a.createElement("span",{key:a},e,a<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),t,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),a,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},a.default=o},156:function(e,a,t){"use strict";t.r(a);var n=t(147);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var l=t(154);t.d(a,"ComponentPreview",function(){return l.default});var r=t(153);t.d(a,"DocHeading",function(){return r.default});var o=t(155);t.d(a,"DocToc",function(){return o.default});var c=t(149);t.d(a,"DeprecatedComponentAlert",function(){return c.default});var s=t(150);t.d(a,"ExperimentalComponentAlert",function(){return s.default});var i=t(151);t.d(a,"Icon",function(){return i.default});var u=t(152);t.d(a,"PxScript",function(){return u.default})},193:function(e,a,t){"use strict";t.r(a),t.d(a,"Fonts",function(){return i}),t.d(a,"Headings",function(){return u}),t.d(a,"Small",function(){return m}),t.d(a,"Lead",function(){return d}),t.d(a,"Inline",function(){return p}),t.d(a,"TextUtilities",function(){return h}),t.d(a,"Abbreviations",function(){return E}),t.d(a,"Blockquotes",function(){return g}),t.d(a,"TypographyText",function(){return f});var n=t(0),l=t.n(n),r=t(38),o=t(157),c=t.n(o),s=t(156),i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"font"},"Font"),l.a.createElement("p",null,"The standard font PayEx DesignGuide uses is Roboto. It is included in the stylesheet. The included font weights you can use are: 300, 400, 500, 700 & 900. Both normal and italicized is available."),l.a.createElement("h3",null,"Removing Roboto"),l.a.createElement("p",null,"In case your site is not going to use Roboto, you can modify your font stack by modifying the snippet below to your preferance and add it to your custom stylesheet."),l.a.createElement(s.ComponentPreview,{language:"css",codeFigure:!0},"html {\n                                font-family: GillSans, Calibri, Trebuchet, sans-serif;\n                            }"))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"headings"},"Headings"),l.a.createElement("p",null,"PayEx DesignGuide provides basic styling on all headings (h1-h6)."),l.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h1",null,"Heading h1"),l.a.createElement("h2",null,"Heading h2"),l.a.createElement("h3",null,"Heading h3"),l.a.createElement("h4",null,"Heading h4"),l.a.createElement("h5",null,"Heading h5"),l.a.createElement("h6",null,"Heading h6")),l.a.createElement("p",null,"The classes ",l.a.createElement("code",{className:"token property"},".h1")," through ",l.a.createElement("code",{className:"token property"},".h6")," are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),l.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",{className:"h1"},".h1 heading"),l.a.createElement("p",{className:"h2"},".h2 heading"),l.a.createElement("p",{className:"h3"},".h3 heading"),l.a.createElement("p",{className:"h4"},".h4 heading"),l.a.createElement("p",{className:"h5"},".h5 heading"),l.a.createElement("p",{className:"h6"},".h6 heading")))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"small"},"Small"),l.a.createElement("p",null,"Use the ",l.a.createElement(c.a,{className:"language-html"},"<small></small>")," tags to create a secondary heading within a heading tag or class."),l.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h2",null,"Main heading ",l.a.createElement("small",null,"with a faded secondary heading"))))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"lead"},"Lead"),l.a.createElement("p",null,"Make a paragraph stand out by using ",l.a.createElement("code",{className:"token property"},".lead"),"."),l.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",{className:"lead"},"This is a leading paragraph which for instance can be used as an introduction.")))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"inline-text-elements"},"Inline text elements"),l.a.createElement("p",null,"Styling for common inline HTML5 elements."),l.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",null,"You can use the mark tag to ",l.a.createElement("mark",null,"highlight")," text."),l.a.createElement("p",null,l.a.createElement("del",null,"This line of text is meant to be treated as deleted text.")),l.a.createElement("p",null,l.a.createElement("s",null,"This line of text is meant to be treated as no longer accurate.")),l.a.createElement("p",null,l.a.createElement("ins",null,"This line of text is meant to be treated as an addition to the document.")),l.a.createElement("p",null,l.a.createElement("u",null,"This line of text will render as underlined")),l.a.createElement("p",null,l.a.createElement("small",null,"This line of text is meant to be treated as fine print.")),l.a.createElement("p",null,l.a.createElement("strong",null,"This line rendered as bold text.")),l.a.createElement("p",null,l.a.createElement("b",null,"This line really stands out.")),l.a.createElement("p",null,l.a.createElement("em",null,"This line rendered as italicized text.")),l.a.createElement("p",null,l.a.createElement("i",null,"This is the last line, it too will render as italicized text."))),l.a.createElement("p",null,"The ",l.a.createElement("code",{className:"token property"},".mark")," and ",l.a.createElement("code",{className:"token property"},".small")," classes are also available to apply the same styles as ",l.a.createElement(c.a,{className:"language-html"},"<mark>")," and ",l.a.createElement(c.a,{className:"language-html"},"<small>")," while avoiding any unwanted semantic implications that the tags would bring."),l.a.createElement("p",null,"While not shown above, feel free to use ",l.a.createElement(c.a,{className:"language-html"},"<b>")," and ",l.a.createElement(c.a,{className:"language-html"},"<i>")," in HTML5. ",l.a.createElement(c.a,{className:"language-html"},"<b>")," is meant to highlight words or phrases without conveying additional importance while ",l.a.createElement(c.a,{className:"language-html"},"<i>")," is mostly for voice, technical terms, etc."))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"text-utilities"},"Text utilities"),l.a.createElement("p",null,"Change text color with our ",l.a.createElement(r.a,{to:"/docs/utilities/colors"},"color utilities"),"."))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"abbreviations"},"Abbreviations"),l.a.createElement("p",null,"Stylized implementation of HTML’s ",l.a.createElement(c.a,{className:"language-html"},"<abbr>")," element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies."),l.a.createElement("p",null,"Add ",l.a.createElement("code",{className:"token property"},".initialism")," to an abbreviation for a slightly smaller font-size."),l.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",null,l.a.createElement("abbr",{title:"Laugh Out Loud"},"LOL")),l.a.createElement("p",null,l.a.createElement("abbr",{title:"HyperText Markup Language",className:"initialism"},"HTML"))),l.a.createElement("p",null,l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr",target:"_blank",rel:"noopener noreferrer"},"Read more")," about abbreviations."))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"blockquotes"},"Blockquotes"),l.a.createElement("p",null,"For quoting blocks of content from another source within your document. Wrap ",l.a.createElement(c.a,{className:"language-html"},"<blockquote>")," or ",l.a.createElement("code",{className:"token property"},".blockquote")," around any HTML as the quote."),l.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."))))},null),l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Naming a source"),l.a.createElement("p",null,"Add a ",l.a.createElement(c.a,{className:"language-html"},"<footer>")," for identifying the source. Wrap the name of the source work in ",l.a.createElement(c.a,{className:"language-html"},"<cite>"),"."),l.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",null,"Better learn balance. Balance is key. Balance good, karate good. Everything good. Balance bad, better pack up, go home. Understand?"),l.a.createElement("footer",null,l.a.createElement("cite",{title:"The Karate Kid (1984)"},"Mr. Miyagi")))))},null),l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Alignment"),l.a.createElement("p",null,"Use ",l.a.createElement(r.a,{to:"/docs/utilities/text"},"text utilities")," ",l.a.createElement("b",null,"(NOT YET IMPLEMENTED)")," as needed to change the alignment of your blockquote."),l.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote text-center"},l.a.createElement("p",null,"It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man."),l.a.createElement("footer",null,l.a.createElement("cite",{title:"Star Wars: Episode IV - A New Hope (1977)"},"Han Solo")))))},null))},f=function(){return l.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"Documentation and examples for PayEx DesignGuide typography."),l.a.createElement(i,null),l.a.createElement(u,null),l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(p,null),l.a.createElement(h,null),l.a.createElement(E,null),l.a.createElement(g,null))};a.default=function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(f,null),l.a.createElement(s.DocToc,{component:f})))}}}]);
//# sourceMappingURL=doc-route.chunk_30.js.map?5f1ce31374846d2bddb3