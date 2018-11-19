(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[60],{428:function(t,e,o){"use strict";o.r(e);var n=o(1),i=o.n(n),a=o(419);e.default=Object(a.a)(function(t){var e,o=t.location,n=o.pathname.match(/[^/]*$/)[0].split("-").map(function(t,e){return 0<e?t:t.charAt(0).toUpperCase()+t.substr(1)}).join(" ");return e=n,document.title="".concat(e," | PayEx DesignGuide"),i.a.createElement("h2",{className:"h1"},n)})},450:function(t,e){t.exports=[{title:"Getting Started",path:"/docs/getting-started",redirect:"/docs/getting-started/introduction",routes:[{title:"Introduction",path:"/docs/getting-started/introduction",componentPath:"getting-started/Introduction"},{title:"Browser Support",path:"/docs/getting-started/browser-support",componentPath:"getting-started/BrowserSupport"},{title:"Contributing",path:"/docs/getting-started/contributing",componentPath:"getting-started/Contributing"}]},{title:"Core",path:"/docs/core",redirect:"/docs/core/breakpoints",routes:[{title:"Breakpoints",path:"/docs/core/breakpoints",componentPath:"core/Breakpoints"},{title:"Color",path:"/docs/core/color",componentPath:"core/Color"},{title:"Favicons",path:"/docs/core/favicons",componentPath:"core/Favicons"},{title:"Grid",path:"/docs/core/grid",componentPath:"core/Grid"},{title:"Icons",path:"/docs/core/icons",componentPath:"core/Icons"},{title:"Lists",path:"/docs/core/lists",componentPath:"core/Lists"},{title:"Payment Icons",path:"/docs/core/payment-icons",componentPath:"core/PaymentIcons"},{title:"Tables",path:"/docs/core/tables",componentPath:"core/Tables"},{title:"Typography",path:"/docs/core/typography",componentPath:"core/Typography"}]},{title:"Components",path:"/docs/components",redirect:"/docs/components/action-list",routes:[{title:"Action List (experimental)",path:"/docs/components/action-list",componentPath:"components/ActionList"},{title:"Alerts",path:"/docs/components/alerts",componentPath:"components/Alerts"},{title:"Badge",path:"/docs/components/badge",componentPath:"components/Badge"},{title:"Breadcrumb",path:"/docs/components/breadcrumb",componentPath:"components/Breadcrumb"},{title:"Buttons",path:"/docs/components/buttons",componentPath:"components/Buttons"},{title:"Card (experimental)",path:"/docs/components/card",componentPath:"components/Card"},{title:"Datepickers",path:"/docs/components/datepickers",componentPath:"components/Datepickers"},{title:"Dialog",path:"/docs/components/dialog",componentPath:"components/Dialog"},{title:"Forms",path:"/docs/components/forms",componentPath:"components/Forms"},{title:"Input Group",path:"/docs/components/input-group",componentPath:"components/InputGroup"},{title:"Loaders",path:"/docs/components/loaders",componentPath:"components/Loaders"},{title:"Media Object",path:"/docs/components/media-object",componentPath:"components/MediaObject"},{title:"Nav (experimental)",path:"/docs/components/nav",componentPath:"components/Nav"},{title:"Pagination",path:"/docs/components/pagination",componentPath:"components/Pagination"},{title:"Panel",path:"/docs/components/panel",componentPath:"components/Panel"},{title:"Sheet",path:"/docs/components/sheet",componentPath:"components/Sheet"},{title:"Slab (experimental)",path:"/docs/components/slab",componentPath:"components/Slab"},{title:"Status",path:"/docs/components/status",componentPath:"components/Status"},{title:"Steps",path:"/docs/components/steps",componentPath:"components/Steps"},{title:"Tabs (experimental)",path:"/docs/components/tabs",componentPath:"components/Tabs"},{title:"Toast (experimental)",path:"/docs/components/toast",componentPath:"components/Toast"},{title:"Tooltips",path:"/docs/components/tooltips",componentPath:"components/Tooltips"},{title:"Topbar (contains deprecated)",path:"/docs/components/topbar",componentPath:"components/Topbar"}]},{title:"Dashboard",path:"/docs/dashboard",redirect:"/docs/dashboard/introduction",routes:[{title:"Introduction to dashboard",path:"/docs/dashboard/introduction-to-dashboard",componentPath:"dashboard/Introduction"},{title:"Chart",path:"/docs/dashboard/chart",componentPath:"dashboard/Chart"}]},{title:"Utilities",path:"/docs/utilities",redirect:"/docs/utilities/colors",routes:[{title:"Colors",path:"/docs/utilities/colors",componentPath:"utilities/Colors"},{title:"Display",path:"/docs/utilities/display",componentPath:"utilities/Display"},{title:"Flex",path:"/docs/utilities/flex",componentPath:"utilities/Flex"},{title:"Sizing",path:"/docs/utilities/sizing",componentPath:"utilities/Sizing"},{title:"Spacing",path:"/docs/utilities/spacing",componentPath:"utilities/Spacing"},{title:"Text",path:"/docs/utilities/text",componentPath:"utilities/Text"},{title:"Visibility",path:"/docs/utilities/visibility",componentPath:"utilities/Visibility"}]}]},451:function(t,e,i){"use strict";i.r(e);var o=i(1),a=i.n(o),n=i(2),r=i.n(n),s=i(420),c=i(189),p=i(460),l=i(66),u=i.n(l),d=i(65),m=function(t){var e=t.path,o=t.redirect,n=t.routes;return a.a.createElement(s.a,null,a.a.createElement(c.a,{exact:!0,path:e,render:function(){return a.a.createElement(p.a,{to:o})}}),n.map(function(t){var e=t.path,o=t.componentPath,n=u()({loader:function(){return i(461)("./".concat(o,"/index.js"))},loading:d.a});return a.a.createElement(c.a,{key:"doc_route_".concat(e),exact:!0,path:e,render:function(){return a.a.createElement(n,null)}})}),a.a.createElement(p.a,{from:"".concat(e,"/*"),to:"/404"}))};m.propTypes={path:r.a.string.isRequired,redirect:r.a.string.isRequired,routes:r.a.array.isRequired},e.default=m},452:function(t,e,o){"use strict";var n=o(221),i=o.n(n),a={},r=0;e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"/",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,o=a[e]||(a[e]={});if(o[t])return o[t];var n=i.a.compile(t);return r<1e4&&(o[t]=n,r++),n}(t)(e,{pretty:!0})}},460:function(t,e,o){"use strict";var n=o(1),i=o.n(n),a=o(2),r=o.n(a),s=o(28),c=o.n(s),p=o(17),l=o.n(p),u=o(187),d=o(452),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){l()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(u.c)(t.to),o=Object(u.c)(this.props.to);Object(u.f)(e,o)?c()(!1,"You tried to redirect to the same route you're currently on: \""+o.pathname+o.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,o=t.to;return e?"string"==typeof o?Object(d.a)(o,e.params):m({},o,{pathname:Object(d.a)(o.pathname,e.params)}):o},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,o=this.computeTo(this.props);e?t.push(o):t.replace(o)},e.prototype.render=function(){return null},e}(i.a.Component);h.propTypes={computedMatch:r.a.object,push:r.a.bool,from:r.a.string,to:r.a.oneOfType([r.a.string,r.a.object]).isRequired},h.defaultProps={push:!1},h.contextTypes={router:r.a.shape({history:r.a.shape({push:r.a.func.isRequired,replace:r.a.func.isRequired}).isRequired,staticContext:r.a.object}).isRequired};var f=h;e.a=f},461:function(t,e,n){var i={"./components/ActionList/index.js":[462,2,1,0,3,8],"./components/Alerts/index.js":[468,2,1,4,0,9],"./components/Badge/index.js":[470,2,1,0,3,20],"./components/Breadcrumb/index.js":[544,2,1,4,0,31],"./components/Buttons/index.js":[471,2,1,4,0,42],"./components/Card/index.js":[553,2,1,0,3,51],"./components/Datepickers/index.js":[472,2,1,0,3,55],"./components/Dialog/index.js":[473,2,1,0,3,56],"./components/Forms/index.js":[474,2,1,4,0,57],"./components/InputGroup/index.js":[475,2,1,0,3,58],"./components/Loaders/index.js":[476,2,1,0,3,10],"./components/MediaObject/index.js":[477,2,1,0,3,11],"./components/Nav/index.js":[547,2,1,4,0,12],"./components/Pagination/index.js":[549,2,1,0,3,13],"./components/Panel/index.js":[550,2,1,0,3,14],"./components/Sheet/index.js":[478,2,1,0,3,15],"./components/Slab/index.js":[479,2,1,0,3,16],"./components/Status/index.js":[480,2,1,0,3,17],"./components/Steps/index.js":[551,2,1,4,0,18],"./components/Tabs/index.js":[552,2,1,4,0,19],"./components/Toast/index.js":[481,2,1,0,3,21],"./components/Tooltips/index.js":[482,2,1,0,3,22],"./components/Topbar/index.js":[548,2,1,4,0,23],"./core/Breakpoints/index.js":[483,2,1,0,3,24],"./core/Color/index.js":[543,2,1,0,3,25],"./core/Favicons/index.js":[484,2,1,4,0,26],"./core/Grid/index.js":[485,2,1,0,3,27],"./core/Icons/index.js":[486,2,1,4,0,28],"./core/Lists/index.js":[487,2,1,0,3,29],"./core/PaymentIcons/index.js":[546,2,1,4,0,30],"./core/Tables/index.js":[488,2,1,0,3,32],"./core/Typography/index.js":[489,2,1,4,0,33],"./dashboard/Chart/index.js":[542,2,1,4,0,34],"./dashboard/Introduction/index.js":[532,2,1,4,0,35],"./getting-started/BrowserSupport/index.js":[545,36],"./getting-started/Contributing/index.js":[533,2,1,4,0,37],"./getting-started/Introduction/index.js":[534,2,1,4,0,38],"./utilities/Colors/index.js":[535,2,1,4,0,39],"./utilities/Display/index.js":[536,2,1,0,3,40],"./utilities/Flex/index.js":[537,2,1,0,3,41],"./utilities/Sizing/index.js":[538,2,1,0,3,43],"./utilities/Spacing/index.js":[539,2,1,0,3,44],"./utilities/Text/index.js":[540,2,1,0,3,45],"./utilities/Visibility/index.js":[541,2,1,0,3,46],"./utils/Attribute/index.js":[421,47],"./utils/ComponentPreview/index.js":[427,2,48],"./utils/DeprecatedComponentAlert/index.js":[423,49],"./utils/DocHeading/index.js":[428],"./utils/DocToc/index.js":[429,1,0],"./utils/ExperimentalComponentAlert/index.js":[424,50],"./utils/Icon/index.js":[425,52],"./utils/PxScript/index.js":[426,53],"./utils/RenderRoutes/index.js":[451],"./utils/index.js":[430,2,1,0,3,54]};function o(e){var o=i[e];return o?Promise.all(o.slice(1).map(n.e)).then(function(){var t=o[0];return n(t)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(i)},o.id=461,t.exports=o},558:function(t,e,o){"use strict";o.r(e);var a=o(1),r=o.n(a),n=o(420),i=o(189),s=o(460),c=o(418),p=o(419),l=o(450),u=o.n(l);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var x=function(t){function o(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=h(this,f(o).call(this,t))).state={isActive:t.location.pathname.includes(t.route.path)},e}var e,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(o,a["Component"]),e=o,(n=[{key:"toggleActive",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"shouldComponentUpdate",value:function(t,e){return this.state!==e}},{key:"render",value:function(){var t=this,e=this.props.route,o=e.title,n=e.routes;return r.a.createElement("div",{className:"nav-group".concat(this.state.isActive?" active":"")},r.a.createElement("div",{className:"nav-heading"},r.a.createElement("i",{className:"material-icons",onClick:function(){return t.toggleActive()}},"keyboard_arrow_right"),r.a.createElement("span",{onClick:function(){return t.toggleActive()}},o)),r.a.createElement("ul",null,n.map(function(t,e){return r.a.createElement("li",{key:"nav_link_".concat(e)},r.a.createElement(c.a,{activeClassName:"active",to:t.path},t.title))})))}}])&&m(e.prototype,n),i&&m(e,i),o}(),y=Object(p.a)(function(){return r.a.createElement("div",{className:"doc-sidebar col-xxl-2 col-md-3"},r.a.createElement("nav",{className:"documentation-nav"},u.a.map(function(t,e){var o=Object(p.a)(x);return r.a.createElement(o,{key:"nav_group_".concat(e),route:t})})))}),g=o(428),j=o(451);function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}e.default=function(){return r.a.createElement("div",{className:"documentation"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"sidebar-heading col-xxl-2 col-md-3"},r.a.createElement("h1",null,"DesignGuide")),r.a.createElement("div",{className:"view-heading col-xxl-10 col-md-9"},r.a.createElement(g.default,null))),r.a.createElement("div",{className:"row"},r.a.createElement(y,null),r.a.createElement("main",{className:"doc-view col-xxl-10 col-md-9"},r.a.createElement(n.a,null,r.a.createElement(i.a,{exact:!0,path:"/docs",render:function(){return r.a.createElement(s.a,{to:"/docs/getting-started"})}}),u.a.map(function(t){return r.a.createElement(j.default,v({key:"renderRoutes_".concat(t.title)},t))}),r.a.createElement(s.a,{from:"/docs/*",to:"/404"})))))}}}]);
//# sourceMappingURL=documentation.chunk.js.map?c02b01eb73352ad0b5c7