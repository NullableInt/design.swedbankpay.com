import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, Property, Attribute, JavascriptDocs } from "@docutils";
import SidebarComponent from "@components/Sidebar";
import TopbarComponent from "@components/Topbar";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>The sidebar supports a depth of up to 3 levels.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="container-fluid">
                <div className="row">
                    <TopbarComponent wide="xl" logout id="demo-topbar" />
                </div>
                <div className="row">
                    <div className="col-auto">
                        <SidebarComponent />
                    </div>
                    <main className="col main-content border-left">Main content things...</main>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Sidebar = () => {
    useEffect(() => { console.log("init"); });

    return (
        <DocContainer docToc>
            <p className="lead">The sidebar is used to give users an easily available navigational bar on the left side of your web application.</p>
            <Overview />
        </DocContainer>
    );
};

export default Sidebar;
