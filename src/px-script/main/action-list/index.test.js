import React from "react";
import ReactDOM from "react-dom";

import actionList from "./index";

describe("px-script: action-list", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    const ActionList = ({ active, id }) => (
        <div className={`action-list${active ? " active" : ""}`} id={id}>
            <i className="material-icons">more_vert</i>
            <div className="action-menu">
                <a href="#"><i className="material-icons">bookmark</i>Add bookmark</a>
                <a href="#"><i className="material-icons">business_center</i>Add client</a>
            </div>
        </div>
    );

    beforeEach(() => ReactDOM.unmountComponentAtNode(div));

    it("is defined", () => {
        expect(actionList).toBeDefined();
    });

    it("has an init method", () => {
        expect(actionList.init).toBeDefined();
        expect(actionList.init).toBeInstanceOf(Function);
    });

    it("opens when clicking the icon", () => {
        ReactDOM.render(<ActionList />, div);

        const renderedActionList = document.querySelector(".action-list");
        const toggleBtn = renderedActionList.querySelector("i.material-icons");

        expect(renderedActionList).toBeDefined();
        expect(toggleBtn).toBeDefined();
        expect(renderedActionList.classList).not.toContain("active");

        actionList.init();
        toggleBtn.dispatchEvent(new Event("click"));

        expect(renderedActionList.classList).toContain("active");
    });

    it("closes when clicking on icon while open", () => {
        ReactDOM.render(<ActionList active />, div);

        const renderedActionList = document.querySelector(".action-list");
        const toggleBtn = renderedActionList.querySelector("i.material-icons");

        expect(renderedActionList).toBeDefined();
        expect(toggleBtn).toBeDefined();
        expect(renderedActionList.classList).toContain("active");

        actionList.init();
        toggleBtn.dispatchEvent(new Event("click"));

        expect(renderedActionList.classList).not.toContain("active");
    });

    it("closes open action menu when clicking on a link", () => {
        ReactDOM.render(<ActionList active />, div);

        const renderedActionList = document.querySelector(".action-list");

        expect(renderedActionList).toBeDefined();
        expect(renderedActionList.classList).toContain("active");

        actionList.init();
        renderedActionList.querySelector("a").click();

        expect(renderedActionList.classList).not.toContain("active");
    });

    it("closes when clicking outside menu while open", () => {
        ReactDOM.render(<ActionList active />, div);

        const renderedActionList = document.querySelector(".action-list");

        expect(renderedActionList).toBeDefined();
        expect(renderedActionList.classList).toContain("active");

        actionList.init();
        document.querySelector("html").click(); // for clicking outside action list

        expect(renderedActionList.classList).not.toContain("active");
    });

    it("opens actionlist when calling actionList.open", () => {
        ReactDOM.render(<ActionList id="demo-actionlist" />, div);

        const renderedActionList = document.querySelector(".action-list");

        expect(renderedActionList).toBeTruthy();

        actionList.init();
        expect(renderedActionList.classList).not.toContain("active");

        actionList.open("demo-actionlist");
        expect(renderedActionList.classList).toContain("active");
    });

    it("does not open actionlist when calling actionlist.open with wrong id and prints error to console", () => {
        console.error = jest.fn();

        ReactDOM.render(<ActionList id="demo-actionlist" />, div);

        const renderedActionList = document.querySelector(".action-list");

        expect(renderedActionList).toBeTruthy();
        expect(renderedActionList.classList).not.toContain("active");

        actionList.open("invalid-id");

        expect(renderedActionList.classList).not.toContain("active");
        expect(console.error).toHaveBeenCalled();
    });

    it("closes an open actionlist when calling actionList.close", () => {
        ReactDOM.render(<ActionList active id="demo-actionlist" />, div);

        const renderedActionList = document.querySelector(".action-list");

        expect(renderedActionList).toBeTruthy();
        expect(renderedActionList.classList).toContain("active");

        actionList.init();
        actionList.close("demo-actionlist");

        expect(renderedActionList.classList).not.toContain("active");
    });
});
