(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[43],{438:function(e,n,t){"use strict";t.r(n),t.d(n,"CreatingYourComponent",function(){return p}),t.d(n,"CreateADocumentationPage",function(){return c}),t.d(n,"AddComponentToRoutes",function(){return i}),t.d(n,"AddingStyles",function(){return u}),t.d(n,"AddingJavaScript",function(){return s});var o=t(1),a=t.n(o),r=t(462),l=t.n(r),m=t(361),p=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"creating-your-component"},"Creating your component"),a.a.createElement("p",null,"Create a new file under ",a.a.createElement(m.Property,{value:"./src/App/components/[MyExampleComponent]/"})," for your component, name it ",a.a.createElement(m.Property,{value:"index.js"}),":"),a.a.createElement(m.ComponentPreview,{language:"javascript",codeFigure:!0},'\n//example component\nimport React from "react";\nimport PropTypes from "prop-types";\nconst MyExampleComponent = ({ type, title, separator }) => (\n    <div className={`well well-${type}`}>\n        <h3>{title}</h3>\n        {separator ? <hr /> : null}\n        This is my example component in a well.\n    </div>\n);\nMyExampleComponent.propTypes = {\n    type: PropTypes.oneOf(["light", "dark"]).isRequired,\n    title: PropTypes.string.isRequired,\n    separator: PropTypes.bool\n};\nexport default MyExampleComponent;\n            '))},c=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"create-a-documentation-page"},"Create a documentation page"),a.a.createElement("p",null,"Create a new file under ",a.a.createElement(m.Property,{value:"./src/App/Documentation/Components/[MyExampleDocumentationComponent]/"})," for your component, call it ",a.a.createElement(m.Property,{value:"index.js"}),":"),a.a.createElement(m.ComponentPreview,{language:"javascript",codeFigure:!0},'\n//example documentation component\nimport React from "react";\nimport { ComponentPreview, DocContainer } from "@docutils";\nimport MyExampleComponent from "@components/MyExampleComponent";\nconst MyExampleDocumentationComponent = () => (\n    <DocContainer docToc>\n        <p className="lead">This is the documentation for My Example Component.</p>\n        <h2 id="example-usage">Example usage</h2>\n        <ComponentPreview language="html" showCasePanel codeFigure>\n            <MyExampleComponent type="dark" title="My Example Component" separator />\n        </ComponentPreview>\n    </DocContainer>\n);\nexport default MyExampleDocumentationComponent;\n            '),a.a.createElement("p",null,"Use the custom ",a.a.createElement(m.Property,{value:"ComponentPreview"})," component to preview your component. It has several props, for this example we are going to be using ",a.a.createElement(m.Property,{value:"language"}),", ",a.a.createElement(m.Property,{value:"showCasePanel"})," and ",a.a.createElement(m.Property,{value:"codeFigure"}),"."),a.a.createElement("p",null,"We are also using the ",a.a.createElement(m.Property,{value:"DocContainer"})," component to sentralize the layout of the documentation, pass the ",a.a.createElement(m.Property,{value:"docToc"})," prop to add a dynamic table of contents to the documentation of your component. This component scans the provided component for ",a.a.createElement(l.a,{className:"language-html"},"<h2>"),"-tags and creates anchors for easier navigation. Just remember to add an id to the ",a.a.createElement(l.a,{className:"language-html"},"<h2>"),"-tag."))},i=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"add-component-to-routes"},"Add component to routes"),a.a.createElement("p",null,"In ",a.a.createElement(m.Property,{value:"./src/App/routes/docs.js"})," under the components object add the following:"),a.a.createElement(m.ComponentPreview,{language:"javascript",codeFigure:!0},'\n/**\n * Components\n */\n{\n    title: "Components",\n    path: "/docs/components",\n    redirect: "/docs/components/alerts",\n    routes: [\n        ...\n        ...\n        // ADD THIS\n        {\n            title: "My Example Documentation Component",\n            path: "/docs/components/my-example-documentation-component",\n            componentPath: "components/My-example-documentation-component"\n        },\n        ...\n        ...\n    ]\n},\n            '),a.a.createElement("p",null,"You will now be able to go to the route you provided to preview your component. Run ",a.a.createElement(m.Property,{value:"npm start"})," if you haven","'","t already done so, and navigate to ",a.a.createElement(m.Property,{value:"localhost:3000/docs/components/my-example-documentation-component"})," to see your component in action."))},u=function(){return a.a.createElement("div",null,a.a.createElement("h2",{id:"adding-styles"},"Adding styles"),a.a.createElement("p",null,"To add styling for your component create a new file in ",a.a.createElement(m.Property,{value:"./src/less/components/"}),", name it ",a.a.createElement(m.Property,{value:"my-example-component.less"}),"."),a.a.createElement(function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Creating variables"),a.a.createElement("p",null,"To add custom variables to your component modify ",a.a.createElement(m.Property,{value:"./src/less/_variables.less"}),", and add a section for your component. Add it alphabetically and update the table of contents."),a.a.createElement("p",null,"Adding a section should look like this:"),a.a.createElement(m.ComponentPreview,{language:"css",codeFigure:!0},'\n// _variables.less\n// [number]. My Example Component\n// ==========================================================================\n@my-example-component-color: @gray-3;\n@my-example-component-background: @gray-8;\n@my-example-component-padding: 1rem;\n@my-example-component-font-family: "Arial";\n                '))},null),a.a.createElement("p",null,"The style for ",a.a.createElement(m.Property,{value:"MyExampleComponent"})," should now be included properly, and you should see changes immediately while running dev."),a.a.createElement("p",null,"When writing styles for your component, try to use ",a.a.createElement(m.Property,{value:"rem"})," (",a.a.createElement(m.Property,{value:"1rem"})," = ~",a.a.createElement(m.Property,{value:"16px"}),") and the predefined variables (only if it makes sense of course) as much as possible. And follow the linting rules set by ",a.a.createElement(m.Property,{value:"./.stylelintrc"}),"."))},s=function(){return a.a.createElement("div",null,a.a.createElement("h2",{id:"adding-javascript"},"Adding javascript"),a.a.createElement("p",null,"If your component needs javascript to run, you will need to add the javascript to the ",a.a.createElement(m.Property,{value:"scripts"})),a.a.createElement(function(){return a.a.createElement("div",null,a.a.createElement("h3",null,"Create a script file for your component"),a.a.createElement("p",null,"Create a new file under ",a.a.createElement(m.Property,{value:"./src/scripts/main/[MyExampleComponent]/"})," for your component, name it ",a.a.createElement(m.Property,{value:"index.js"}),":"),a.a.createElement(m.ComponentPreview,{language:"javascript",codeFigure:!0},'\nconst init = () => {\n    alert("MyExampleComponent was initialized");\n};\nconst MyExampleComponent = {\n    init\n};\nexport default MyExampleComponent;\n                '),a.a.createElement("p",null,"Note: All essential functionality for your component needs to be called within the ",a.a.createElement(m.Property,{value:"init"})," method."))},null),a.a.createElement(function(){return a.a.createElement("div",null,a.a.createElement("h3",null,"Add your components script to scripts"),a.a.createElement("p",null,"Open ",a.a.createElement(m.Property,{value:"./src/scripts/main/index.js"})," and add your component:"),a.a.createElement(m.ComponentPreview,{language:"javascript",codeFigure:!0},'\n...\nimport MyExampleComponent from "./MyExampleComponent";\n...\nconst dg = {\n...\nMyExampleComponent,\n...\n};\n...\nexport { ... MyExampleComponent, ... }\n                '))},null),a.a.createElement(function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Initializing the script in the documentation"),a.a.createElement("p",null,"Considering the documentation is built in react your documentation component will load after ",a.a.createElement(m.Property,{value:"scripts"})," runs it","'","s ",a.a.createElement(m.Property,{value:"initAll"})," method, you will need to run your component","'","s init method when the component actually renders."),a.a.createElement("p",null,"You can do this by slightly modifying the ",a.a.createElement(m.Property,{value:"MyExampleDocumentationComponent"}),":"),a.a.createElement(m.ComponentPreview,{language:"javascript",codeFigure:!0},'\n//example documentation component\n// change this line\nimport React, { Component } from "react";\n...\n// import your components script\nimport { MyExampleComponent } from "@src/scripts/main";\n...\n...\n// modify MyExampleDocumentationComponent\nclass MyExampleDocumentationComponent extends Component {\n    componentDidMount () {\n        MyExampleComponent.init();\n    }\n    render() {\n        return (\n            <DocContainer docToc>\n                <p className="lead">This is the documentation for My Example Component.</p>\n                <h2 id="example-usage">Example usage</h2>\n                <ComponentPreview language="html" showCasePanel codeFigure>\n                    <MyExampleComponent type="dark" title="My Example Component" separator />\n                </ComponentPreview>\n            </DocContainer>\n        )\n    }\n}\n                '))},null))};n.default=function(){return a.a.createElement(m.DocContainer,{docToc:!0},a.a.createElement("p",{className:"lead"},"When contributing, it is important to remember that this project supports two brands: ",a.a.createElement("strong",null,"Swedbank Pay")," and ",a.a.createElement("strong",null,"PayEx"),"."),a.a.createElement("p",null,"Both brands depend on different theme variables, so it is vital to check that the component also works and looks good on the opposite brand of which you are working on."),a.a.createElement(p,null),a.a.createElement(c,null),a.a.createElement(i,null),a.a.createElement(u,null),a.a.createElement(s,null))}}}]);
//# sourceMappingURL=doc-route.chunk_39.js.map?d803a231dc1b99354861