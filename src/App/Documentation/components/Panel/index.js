import React, { Component } from "react";

import { ComponentPreview, DocToc } from "#";
import PanelComponent from "@/Panel";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Panel...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PanelComponent
                title="Panel title"
                subTitle="Panel subtitle"
                footerText="Footer content goes here."
                footerBtnText="Footer button"
            >
                <p>Your main panel content is put here.</p>
                <p>Some more content over here.</p>
                <p>And one more line, just to be safe.</p>
            </PanelComponent>
        </ComponentPreview>
    </>
);

const PanelHeaders = () => (
    <>
        <h2 id="panel-headers">Panel headers</h2>
        <p>Two types of headers... <code className="token property">.panel-default</code> and <code className="token property">.panel-brand</code>...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PanelComponent title="Default panel" />{"\n\n"}
            <PanelComponent type="brand" title="Panel brand" />
        </ComponentPreview>
    </>
);

const PanelDark = () => (
    <>
        <h2 id="panel-dark-mode">Panel dark mode</h2>
        <p>Dark body with <code className="token property">.panel-dark</code>...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PanelComponent
                type="brand"
                title="Panel title"
                subTitle="Panel subtitle"
                footerText="Footer content goes here."
                footerBtnText="Footer button"
                darkMode
            >
                <p className="lead">This is a dark panel.</p>
                <p>Your main panel content is put here.</p>
                <p>Some more content over here.</p>
                <p>And one more line, just to be safe.</p>
            </PanelComponent>
        </ComponentPreview>
    </>
);

const PanelMuted = () => (
    <>
        <h2 id="muted-panel">Muted panel</h2>
        <p>Muted panel with <code className="token property">.panel-muted</code>...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PanelComponent
                type="muted"
                title="Panel title"
                subTitle="Panel subtitle"
                footerText="Footer content goes here."
                footerBtnText="Footer button"
            >
                <p className="lead">This is a muted panel.</p>
                <p>Your main panel content is put here.</p>
                <p>Some more content over here.</p>
                <p>And one more line, just to be safe.</p>
            </PanelComponent>
        </ComponentPreview>
    </>
);

const PanelText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Panels...</p>
        <Overview />
        <PanelHeaders />
        <PanelDark />
        <PanelMuted />
    </div>
);

class Panel extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <PanelText />
                    <DocToc component={PanelText} />
                </div>
            </div>
        );
    }
}

export default Panel;

/* For testing */
export { Overview, PanelHeaders, PanelDark, PanelMuted, PanelText };
