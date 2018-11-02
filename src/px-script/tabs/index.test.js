import React from "react";
import ReactDOM from "react-dom";

import tabs from "./index";

// TODO: write tests for "else" branches [AW]

describe("px-script: tabs", () => {
    const div = document.createElement("div");
    const items = ["item1", "item2", "item3"];

    const NoActiveTab = () => (
        <div className="tabs">
            <i className="material-icons">keyboard_arrow_right</i>
            <ul>
                {items.map((name, i) => (
                    <li key={`tab-item-${name}-${i}`}>{"\n"}
                        <a href="#">{name}</a>{"\n"}
                    </li>
                ))}
            </ul>
        </div>
    );

    document.body.appendChild(div);

    it("is defined", () => {
        expect(tabs).toBeTruthy();
    });

    it("has an init method", () => {
        expect(tabs.init).toBeTruthy();
        expect(tabs.init).toBeInstanceOf(Function);
    });

    it("sets an active item if none has been provided", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);

        const renderedTab = document.querySelector(".tabs");
        let activeTab = document.querySelector(".active");

        expect(renderedTab).toBeTruthy();
        expect(activeTab).toBeFalsy();

        tabs.init();

        activeTab = document.querySelector(".active");

        expect(activeTab).toBeTruthy();

        ReactDOM.unmountComponentAtNode(div);
    });

    // TODO: check if preventdefault was actually called [AW]

    it("prevents default if you click an active tab", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);
        tabs.init();

        const renderedTab = document.querySelector(".tabs");
        const activeTab = renderedTab.querySelector(".active");

        expect(renderedTab).toBeTruthy();
        expect(activeTab).toBeTruthy();

        activeTab.click();

        expect(activeTab.classList).toContain("active");
        expect(document.querySelector(".active")).toEqual(activeTab);

        ReactDOM.unmountComponentAtNode(div);
    });

    it("opens a tab dropdown when clicked", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);

        const renderedTab = document.querySelector(".tabs");
        const tabUl = document.querySelector("ul");

        tabUl.style.flexDirection = "column";
        tabs.init();

        expect(renderedTab).toBeTruthy();

        renderedTab.click();

        expect(renderedTab.classList).toContain("tabs-open");

        // Not unmounting to use states in following test. [AW]
    });

    // NB! Do not put new tests between these two [AW]

    it("closes a dropdown tab when clicked", () => {
        const renderedTab = document.querySelector(".tabs");

        expect(renderedTab).toBeTruthy();

        renderedTab.click();

        expect(renderedTab.classList).not.toContain("tabs-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes a dropdown tab when user clicks outside the dropdown tab", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);

        const renderedTab = document.querySelector(".tabs");
        const tabUl = renderedTab.querySelector("ul");

        expect(renderedTab).toBeTruthy();

        renderedTab.classList.add("tabs-open");
        tabUl.style.flexDirection = "column";
        tabs.init();

        document.querySelector("html").click();

        expect(renderedTab.classList).not.toContain("tabs-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes a dropdown tab when window is resized", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);

        const renderedTab = document.querySelector(".tabs");
        const tabUl = renderedTab.querySelector("ul");

        expect(renderedTab).toBeTruthy();

        tabUl.style.flexDirection = "column";
        tabs.init();

        tabUl.click();

        expect(renderedTab.classList).toContain("tabs-open");

        global.dispatchEvent(new Event("resize"));

        expect(renderedTab.classList).not.toContain("tabs-open");

        ReactDOM.unmountComponentAtNode(div);
    });
});
