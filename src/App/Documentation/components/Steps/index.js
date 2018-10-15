import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc } from "#";
import StepsComponent from "@/Steps";

const BasicSteps = () => {
    const steps = [
        {
            title: "Step one",
            subtitle: "24.12.17 12:10",
            completed: true

        },
        {
            title: "Step two",
            ongoing: true
        },
        {
            title: "Step three"
        },
        {
            title: "Step four"
        }
    ];

    return (
    <>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Add class <code className="token property">.steps</code> to an <PrismCode className="language-html">{"<ol>"}</PrismCode> element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <StepsComponent steps={steps} />
        </ComponentPreview>
    </>
    );
};

const HorizontalSteps = () => {
    const steps = [
        {
            title: "Step one",
            completed: true
        },
        {
            title: "Step two",
            ongoing: true
        },
        {
            title: "Step three"
        },
        {
            title: "Step four"
        }
    ];

    return (
    <>
        <h2 id="horizontal-steps">Horizontal steps</h2>
        <p>In addition to class <code className="token property">.steps</code>, add the extension class <code className="token property">.steps-horizontal</code> to an <PrismCode className="language-html">{"<ol>"}</PrismCode> element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <StepsComponent steps={steps} horizontal />
        </ComponentPreview>
    </>
    );
};

const ClickableSteps = () => {
    const steps = [
        {
            title: "Step one",
            completed: true,
            clickable: true
        },
        {
            title: "Step two",
            ongoing: true,
            clickable: true
        },
        {
            title: "Step three",
            selected: true,
            clickable: true
        },
        {
            title: "Step four"
        }
    ];

    return (
    <>
        <h2 id="clickable-steps">Clickable steps</h2>
        <p>
            Add an anchor element (<PrismCode className="language-html">{"<a>"}</PrismCode>) to the list item element ( <PrismCode className="language-html">{"<li>"}</PrismCode>). 
            Ensure that all content within the list element is also inside the anchor element. 
            <br/>Clickable steps is not working properly
        </p>
        
        <ComponentPreview language="html" showCasePanel codeFigure>
            <StepsComponent steps={steps} />
        </ComponentPreview>
    </>
    );
};

const StepsText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <p className="lead">Steps.</p>
        <BasicSteps />
        <HorizontalSteps />
        <ClickableSteps />
    </div>
);

const Steps = () => (
    <div className="doc-container">
        <div className="row">
            <StepsText />
            <DocToc component={StepsText} />
        </div>
    </div>
);

export default Steps;

/* for testing */
export { BasicSteps, HorizontalSteps, ClickableSteps, StepsText };
