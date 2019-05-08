import React from "react";

import { ComponentPreview, DocContainer, Property, PxScript } from "#";
import Alert from "@/Alert";

const AboutInit = () => (
    <>
        <h2 id="about-init">When to initialize</h2>
        <p>
            Our script runs <PxScript component="script" func="initAll" /> on DOMContentLoaded making it so you have to
            run <PxScript component="<component_name>" func="init" /> manually when a component is rendered after the event has fired.
        </p>
        <h3>Manual initializing</h3>
        <p>
            To initialize components use <PxScript component="<component_name>" func="init" />. If the function is called
            without arguments it will target all components with class <Property value="<component_name>" /> on the page. Initializing only one component can be done
            by passing an ID, it must match an existing components ID and will print a warning message if the value is invalid.
        </p>
        <p>
            If only one component is initialized then the init function will return one object. If several components are initialized
            it will return an array of objects.
        </p>
        <ComponentPreview language="javascript" codeFigure >
            {"px.component.init();\n"}
            {"px.component.init(\"demo-component-id\");\n"}
        </ComponentPreview>
        <Alert type="warning">
            Additional functions may be available for some components. Read about them on the components documentation page.
        </Alert>
    </>
);

const JavascriptDocs = () => (
    <DocContainer docToc>
        <p className="lead">
            How to utilize our <Property value="px.<component_name>.init()" /> function.
        </p>
        <AboutInit />
    </DocContainer>
);

export default JavascriptDocs;

/* For testing */
export { AboutInit };
