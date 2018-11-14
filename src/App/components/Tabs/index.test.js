import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Tabs from "./index";

const items = ["test", "test 2"];
const modeTypes = ["xs", "sm", "md", "lg", "xl", "xxl"];
const div = document.createElement("div");

document.body.appendChild(div);

describe("Component: Tabs - ", () => {
    it("is defined", () => {
        expect(Tabs).toBeDefined();
    });

    it("props mode is one of our breakpoints (xs, sm, md... )", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Tabs mode="auto" items={items} />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders", () => {
        const wrapper = shallow(<Tabs items={items} />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class name tabs when prop mode is not specified", () => {
        const wrapper = shallow(<Tabs items={items} />);
        const hasHorizontal = modeTypes.some(mode => wrapper.hasClass(`tabs-horizontal-${mode}`));

        expect(wrapper.hasClass("tabs")).toBeTruthy();
        expect(hasHorizontal).toBeFalsy();
        expect(wrapper).toMatchSnapshot();
    });

    it("sets a tab to active", () => {
        ReactDOM.render(<Tabs items={items} />, div);

        const renderedTabs = document.querySelector(".tabs");
        const activeTab = renderedTabs.querySelector(".active");

        expect(renderedTabs).toBeTruthy();
        expect(activeTab).toBeTruthy();
        expect(activeTab.classList).toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("doesn't remove active when clicking an active tab", () => {
        ReactDOM.render(<Tabs items={items} />, div);

        const renderedTabs = document.querySelector(".tabs");
        const activeTab = renderedTabs.querySelector(".active");

        expect(renderedTabs).toBeTruthy();
        expect(activeTab).toBeTruthy();
        expect(activeTab.classList).toContain("active");

        activeTab.click();

        expect(activeTab.classList).toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("changes active tab when unactive tab is clicked", () => {
        ReactDOM.render(<Tabs items={items} />, div);

        const renderedTabs = document.querySelector(".tabs");
        const inactiveTab = renderedTabs.querySelector("li:not(.active)");

        expect(renderedTabs).toBeTruthy();
        expect(inactiveTab).toBeTruthy();
        expect(inactiveTab.classList).not.toContain("active");

        const tabAnchor = inactiveTab.querySelector("a");

        expect(tabAnchor).toBeTruthy();

        tabAnchor.click();

        expect(inactiveTab.classList).toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });
});
