import React from "react";

import { DocToc } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Like Bootstrap our breakpoints are ranged from <code className="token property">xs</code> to <code className="token property">xl</code>. In addition, we have added yet another breakpoint for even bigger screens called <code className="token property">xxl</code>.</p>
        <p>Note that when targeting screensize <code className="token property">xs</code>, it is optional to append the infix to the classname.</p>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Infix</th>
                    <th>Min-width</th>
                    <th>Example usage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <code className="token property">xs</code>
                    </td>
                    <td>
                        <code className="token property">0px</code>
                    </td>
                    <td>
                        <p>
                            <code className="token property">.col-8</code>, <code className="token property">.d-block</code>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className="token property">sm</code>
                    </td>
                    <td>
                        <code className="token property">576px</code>
                    </td>
                    <td>
                        <p>
                            <code className="token property">.col-sm-8</code>, <code className="token property">.d-sm-block</code>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className="token property">md</code>
                    </td>
                    <td>
                        <code className="token property">768px</code>
                    </td>
                    <td>
                        <p>
                            <code className="token property">.col-md-8</code>, <code className="token property">.d-md-block</code>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className="token property">lg</code>
                    </td>
                    <td>
                        <code className="token property">992px</code>
                    </td>
                    <td>
                        <p>
                            <code className="token property">.col-lg-8</code>, <code className="token property">.d-lg-block</code>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className="token property">xl</code>
                    </td>
                    <td>
                        <code className="token property">1200px</code>
                    </td>
                    <td>
                        <p>
                            <code className="token property">.col-xl-8</code>, <code className="token property">.d-xl-block</code>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code className="token property">xxl</code>
                    </td>
                    <td>
                        <code className="token property">1600px</code>
                    </td>
                    <td>
                        <p>
                            <code className="token property">.col-xxl-8</code>, <code className="token property">.d-xxl-block</code>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

const BreakpointsText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <p className="lead">Our breakpoints is based on <a href="http://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints">Bootstrap{"'"}s breakpoints</a>, but has some modifications.</p>
        <Overview />
    </div>
);

const Breakpoints = () => (
    <>
        <div className="doc-container">
            <div className="row">
                <BreakpointsText />
                <DocToc component={BreakpointsText} />
            </div>
        </div>
    </>
);

export default Breakpoints;

/* for testing */
export { Overview, BreakpointsText };
