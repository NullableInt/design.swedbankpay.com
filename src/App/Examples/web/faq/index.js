import React, { useEffect } from "react";
import { DocContainer, ComponentPreview } from "@docutils";

import ExpandableComponent from "@components/Expandable";
import InputGroup from "@components/InputGroup";
import SheetComponent from "@components/Sheet";

const { expandable, sheet, toast } = window.dg;
const basename = process.env.basename;
const brand = process.env.brand;

const faqList = [
    {
        id: "exp-1",
        title: "Frequently asked question #1?",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-2",
        title: "Frequently asked question #2?",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-3",
        title: "Frequently asked question #3?",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-4",
        title: "Frequently asked question #4?",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-5",
        title: "Frequently asked question #5?",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-6",
        title: "Frequently asked question #6?",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    }
];

const FAQTopPart = () => (
    <>
        <div className="row justify-content-center">
            <img src={`${basename}img/${brand}-logo.svg`} alt="logo" />
        </div>
        <div className="row justify-content-center">
            <h2>How can we help?</h2>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-4">
                <InputGroup
                    type="text"
                    prefixType="icon"
                    prefixValue="search"
                    postfixType="button"
                    postfixValue="Find"
                    postfixBtnColor="executive"
                />
            </div>
        </div>
    </>
);

const sendQuestion = sheetId => {
    sheet.close(sheetId);
    toast({
        html: "Question successfully sent",
        type: "success"
    });

};

const FAQSheet = () => (
    <SheetComponent id="demo-sheet" requireAction>
        <h2>Ask a question</h2>
        <div className="form-group">
            <div className="input-group">
                <span className="input-group-addon"><i className="material-icons">help</i></span>
                <textarea type="textarea" className="form-control h-25" id="settings-description"></textarea>
            </div>
        </div>
        <button type="button" className="btn btn-executive" onClick={() => sendQuestion("demo-sheet")}>
            Send
        </button>
    </SheetComponent>
);

const FAQBottomPart = () => (
    <div className="row justify-content-center mt-5">
        <div className="col-lg-5">
            <div className="card card-primary">
                <header className="card-header">
                    <h3>Further help</h3>
                </header>
                <div className="card-body d-flex flex-column">
                    <div className="media media-sm">
                        <div className="media-img">
                            <i className="material-icons text-muted">help</i>
                        </div>
                        <div className="media-body">
                            <h4 className="text-muted">Cannot find what you are looking for?</h4>
                            <p><small>Or any other inqueries?</small></p>
                        </div>
                    </div>
                    <p>Send in a question to get help from our support team</p>
                    <button type="button" className="btn btn-executive btn-block mt-auto" data-sheet-open="demo-sheet">
                        Send in a question
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const FAQ = () => {

    useEffect(() => {
        expandable.init();
        sheet.init();
    });

    return (
        <DocContainer>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <FAQTopPart />
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="expandable-group ">
                            <ExpandableComponent items={faqList} />
                        </div>
                    </div>
                </div>
                <FAQSheet />
                <FAQBottomPart />
            </ComponentPreview>
        </DocContainer>
    );
};

export default FAQ;
