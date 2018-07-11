import React, { Component } from "react";

import ComponentPreview from "#/ComponentPreview";
import DocToc from "#/DocToc";

import { modal } from "$/px-script";
import ModalComponent from "@/Modal";

const Usage = () => (
    <>
        <h2 id="usage">Usage</h2>
        <p>Static modal</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ModalComponent
                id="static-modal"
                title="Modal title"
                subTitle="Not as important as the title"
                type="brand"
                size="large"
                isStatic={true}
                visible={true}
                footerAlignment="right"
                footerText="Footer text"
            >
                <p>Modal body text goes here.</p>
            </ModalComponent>
        </ComponentPreview>
    </>
);

const Demo = () => (
    <>
        <h2 id="demo">Demo</h2>
        <p>Live modal</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ModalComponent
                id="live-modal"
                title="Modal title"
                subTitle="Not as important as the title"
                type="brand"
                size="large"
                isStatic={false}
                visible={false}
                button={true}
                fade={true}
                footerAlignment="right"
                footerText="Footer text"
            >
                <p>Modal body text goes here.</p>
            </ModalComponent>
        </ComponentPreview>
    </>
);

const ModalText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Modals...</p>
        <Usage />
        <Demo />
    </div>
);

class Modal extends Component {
    componentDidMount () {
        modal.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ModalText />
                    <DocToc component={ModalText} />
                </div>
            </div>
        );
    }
}

export default Modal;

/* for testing */
export { Usage, Demo, ModalText };
