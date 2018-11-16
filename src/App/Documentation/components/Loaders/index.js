import React, { Component } from "react";

import { ComponentPreview, Attribute, DocToc, Property } from "#";
import LoaderComponent from "@/Loader";
import { loader } from "$/px-script/main";

const BasicUsage = () => (
    <>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Basic usage...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <LoaderComponent size="default" visible />
        </ComponentPreview>
    </>
);

const Sizes = () => (
    <>
        <h2 id="sizes">Sizes</h2>
        <p>In addition to <Property value=".loader-default" /> you can use <Property value=".loader-small" /> and <Property value=".loader-large" /> to decrease or increase the size of the loader.</p>
        <h3>Small</h3>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <LoaderComponent size="small" visible />
        </ComponentPreview>
        <h3>Large</h3>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <LoaderComponent size="large" visible />
        </ComponentPreview>
    </>
);

const MutedLoader = () => (
    <>
        <h2 id="muted-loader">Muted loader</h2>
        <p>Use class <Property value=".loader-muted" /> to mute the loader...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <LoaderComponent id="test" size="default" visible muted />
        </ComponentPreview>
    </>
);

const StaticHtml = () => (
    <>
        <h2 id="static-html">Static HTML</h2>
        <p>Using the attribute <Attribute data name="loader" /> will append the following HTML to the element:</p>
        <ComponentPreview language="html" codeFigure>
            <ul className="loader-icon">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </ComponentPreview>
        <p>If you want to use the static HTML instead of the data-attribute, make sure to <b>NOT</b> include the attribute <Attribute data name="loader" />.</p>
    </>
);

const LoadersText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">Use loaders...</p>
        <BasicUsage />
        <Sizes />
        <MutedLoader />
        <StaticHtml />
    </div>
);

class Loaders extends Component {
    componentDidMount () {
        loader.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <LoadersText />
                    <DocToc component={LoadersText} />
                </div>
            </div>
        );
    }
}

export default Loaders;

/* For testing */
export { BasicUsage, Sizes, MutedLoader, StaticHtml, LoadersText };
