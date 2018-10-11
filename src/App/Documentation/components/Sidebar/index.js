import React, { Component } from "react";

import { ComponentPreview, DocToc } from "#";
import { sidebar } from "$/px-script";
import SidebarComponent from "@/Sidebar";

const sidebarItems = [
    {
        name: "Home",
        icon: "home"
    },
    {
        name: "Transactions",
        icon: "shopping_cart"
    },
    {
        name: "Favorites",
        icon: "favorite"
    },
    {
        name: "Language",
        icon: "language"
    },
    {
        name: "Account",
        icon: "account_balance"
    }
];

const sidebarItemsTwoLevels = [
    {
        name: "Home",
        icon: "home"
    },
    {
        name: "Transactions",
        icon: "shopping_cart"
    },
    {
        name: "Favorites",
        icon: "favorite",
        subItems: ["Music", "Movies", "Employees"]
    },
    {
        name: "Language",
        icon: "language"
    },
    {
        name: "Account",
        icon: "account_balance",
        subItems: ["Email"]
    }
];

const Overview = () => (
    <>
        <h2 id="sidebar-responsive">Responsive sidebar</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent items={sidebarItems} />
        </ComponentPreview>
    </>
);

const Vertical = () => (
    <>
        <h2 id="vertical-sidebar">Vertical sidebar icons only</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent mode="md" items={sidebarItemsTwoLevels} />
        </ComponentPreview>
    </>
);

const VerticalWide = () => (
    <>
        <h2 id="vertical-sidebar-wide">Vertical sidebar with text</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent mode="wide-md" items={sidebarItems} />
        </ComponentPreview>
    </>
);

const TwoLevels = () => (
    <>
        <h2 id="twolevels-sidebar">Vertical sidebar with two levels</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent mode="wide-lg" items={sidebarItemsTwoLevels} />
        </ComponentPreview>
    </>
);

const SidebarText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Sidebars...</p>
        <Overview />
        <Vertical />
        <VerticalWide />
        <TwoLevels />
    </div>
);

class Sidebar extends Component {
    componentDidMount () {
        sidebar.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <SidebarText />
                    <DocToc component={SidebarText} />
                </div>
            </div>
        );
    }
}

export default Sidebar;

/* For testing */
export { Overview };
