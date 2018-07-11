import React from "react";

import ComponentPreview from "#/ComponentPreview";
import DocToc from "#/DocToc";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>The grid system is heavily based on Bootstrap{"'"}s grid from v.4.</p>
        <p>Most classes from Bootstrap is available. Click <a href="http://getbootstrap.com/docs/4.1/layout/grid/">here</a> to read more about it.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            One of three columns
                        </div>
                        <div className="col-sm">
                            One of three columns
                        </div>
                        <div className="col-sm">
                            One of three columns
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
        <p>The above example creates three equal-width columns on small, medium, large, extra large, and extra extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <code className="token property">.container</code>.</p>
    </>
);

const GridOptions = () => (
    <>
        <h2 id="grid-options">Grid options</h2>
        <p>Most sizes in the PayEx DesignGuide is defined using <code className="token property">em</code>s or <code className="token property">rem</code>s, <code className="token property">px</code>s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size.</p>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">
                        Extra small
                        <p><small>{"<"}576px</small></p>
                    </th>
                    <th scope="col">
                        Small
                        <p><small>{"≥"}576px</small></p>
                    </th>
                    <th scope="col">
                        Medium
                        <p><small>{"≥"}768px</small></p>
                    </th>
                    <th scope="col">
                        Large
                        <p><small>{"≥"}992px</small></p>
                    </th>
                    <th scope="col">
                        Extra large
                        <p><small>{"≥"}1200px</small></p>
                    </th>
                    <th scope="col">
                        Extra extra large
                        <p><small>{"≥"}1600px</small></p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Max container width</th>
                    <td>None (auto)</td>
                    <td>540px</td>
                    <td>720px</td>
                    <td>960px</td>
                    <td>1140px</td>
                    <td>1460px</td>
                </tr>
                <tr>
                    <th scope="row">Class prefix</th>
                    <td><code className="token property">.col-</code></td>
                    <td><code className="token property">.col-sm-</code></td>
                    <td><code className="token property">.col-md-</code></td>
                    <td><code className="token property">.col-lg-</code></td>
                    <td><code className="token property">.col-xl-</code></td>
                    <td><code className="token property">.col-xxl-</code></td>
                </tr>
                <tr>
                    <th scope="row"># of columns</th>
                    <td colSpan="6">12</td>
                </tr>
                <tr>
                    <th scope="row">Gutter width</th>
                    <td colSpan="6">30px (15px on each side of a column)</td>
                </tr>
                <tr>
                    <th scope="row">Nestable</th>
                    <td colSpan="6">Yes</td>
                </tr>
                <tr>
                    <th scope="row">Column ordering</th>
                    <td colSpan="6">Yes</td>
                </tr>
            </tbody>
        </table>
    </>
);

const AutoLayoutColumns = () => (
    <>
        <h2 id="auto-layout-columns">Auto-layout columns</h2>
        <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <code className="token property">.col-sm-6</code>.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            1 of 2
                        </div>
                        <div className="col">
                            2 of 2
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col">
                            2 of 3
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const GridText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Use our grid system...</p>
        <HowItWorks />
        <GridOptions />
        <AutoLayoutColumns />
    </div>
);

const Grid = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <GridText />
                <DocToc component={GridText} />
            </div>
        </div>
    );
};

export default Grid;

/* for testing */
export { HowItWorks, GridOptions, AutoLayoutColumns, GridText };
