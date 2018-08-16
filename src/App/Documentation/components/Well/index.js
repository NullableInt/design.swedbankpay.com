import React from "react";

import { ComponentPreview, DocToc, ExperimentalComponentAlert } from "#";

const DefaultWell = () => (
    <>
        <h2 id="default-well">Default well</h2>
        <p>Use the <code className="token property">.well</code> as a simple effect on an element to give it an inset effect.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="well">
                Look ma, im in a well!
            </div>
        </ComponentPreview>
    </>
);

const WellSizes = () => (
    <>
        <h2 id="well-sizes">Well sizes</h2>
        <p>Use the two optional <code className="token property">.well-sm</code> and <code className="token property">.well-lg</code> classes to control padding and rounded corners.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="well well-sm">
                Look ma, im in a small well!
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="well well-lg">
                Look ma, im in a large well!
            </div>
        </ComponentPreview>
    </>
);

const WellText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">Well well well, look what the cat dragged in...</p>
        <DefaultWell />
        <WellSizes />
    </div>
);

const Well = () => (
    <div className="doc-container">
        <div className="row">
            <WellText />
            <DocToc component={WellText} />
        </div>
    </div>
);

export default Well;

/* for testing */
export { DefaultWell, WellSizes, WellText };
