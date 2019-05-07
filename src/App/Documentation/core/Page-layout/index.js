import React from "react";
import { Link } from "react-router-dom";
import { Property, ComponentPreview, DocContainer } from "#";

const FullWidth = () => (
    <>
        <h2 id="full-width">Full width page</h2>
        <p>
            To use a full width layout use a combination of grid and the <Property value=".main-content" /> class. <Property value=".main-content" /> has a white background and padding some padding.
            For a full width layout use <Property value=".border-left" /> to clearly seperate the sidebar and the main content. Go to the <Link to="/docs/utilities/borders">borders</Link> docs for more information about
            the <Property value=".border" /> utility.
        </p>
        <ComponentPreview language="html" codeFigure>
            <div className="container-fluid">
                <div className="row">
                    <header>
                        Topbar component...
                    </header>
                </div>
                <div className="row">
                    <div className="col-auto">
                        Sidebar component...
                    </div>
                    <main className="col main-content border-left">
                        Main content things...
                    </main>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const CenteredContent = () => (
    <>
        <h2 id="centered-content">Centered content</h2>
        <p>
            For a centered layout use <Property value=".container"/>, it has built in breakpoints and will switch to full-width if the screen size is small
            enough (see <Link to="/docs/core/grid">grid</Link>). When the content is centered it will require <Link to="/docs/utilities/borders">borders</Link> on
            the right and left side.
        </p>
        <ComponentPreview language="html" codeFigure>
            <div className="container">
                <div className="row">
                    <header>
                        Topbar component...
                    </header>
                </div>
                <div className="row">
                    <div className="col-auto">
                        Sidebar component...
                    </div>
                    <main className="col main-content border-left border-right">
                        Main content things...
                    </main>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const PageLayout = () => (
    <DocContainer docToc >
        <p className="lead">
            How to build different page layouts.
        </p>
        <FullWidth />
        <CenteredContent />
    </DocContainer>
);

export default PageLayout;

/* For testing */
export { FullWidth, CenteredContent };
