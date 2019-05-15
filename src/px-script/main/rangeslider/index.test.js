import React from "react";
import ReactDOM from "react-dom";

import rangeslider from "./index";

describe("px-script: rangeslider", () => {
    const TestSlider = ({ id }) => (
        <div className="rangeslider rangeslider-brand label-right" id={id}>
            <input type="range" min="0" max="200" step="1" />
            <output className="value-label">
                <p>
                    <span>$</span>
                    <span data-rs-value="true">100</span>
                    <span>%</span>
                </p>
            </output>
        </div>
    );

    const TestSliderNoLabel = () => (
        <div className="rangeslider rangeslider-brand label-right">
            <input type="range" step="1" />
        </div>
    );

    const div = document.createElement("div");

    document.body.appendChild(div);

    beforeEach(() => ReactDOM.unmountComponentAtNode(div));

    it("is defined", () => {
        expect(rangeslider).toBeDefined();
    });

    it("init is defined", () => {
        expect(rangeslider.init).toBeDefined();
        expect(rangeslider.init).toBeInstanceOf(Function);
    });

    // Start of Chrome specific tests [AW]
    it("generates special styling to fill slider background for chrome", () => {
        ReactDOM.render(<TestSlider />, div);

        const defaultUseragent = window.navigator.userAgent;

        Object.defineProperty(window.navigator, "userAgent", {
            value: "Chrome",
            writable: true
        });
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const chromeStyle = document.querySelector("style");

        expect(rangeSlider).toBeTruthy();
        expect(chromeStyle).toBeTruthy();

        Object.defineProperty(window.navigator, "userAgent", { value: defaultUseragent });
        document.body.removeChild(chromeStyle);
    });

    it("creates a unique styling for each rangeslider in one style tag for chrome", () => {
        ReactDOM.render(
            <>
                <TestSlider />
                <TestSlider />
            </>
            , div);

        const defaultUseragent = window.navigator.userAgent;

        Object.defineProperty(window.navigator, "userAgent", {
            value: "Chrome",
            writable: true
        });
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const chromeStyle = document.querySelector("style");

        expect(rangeSlider).toBeTruthy();
        expect(chromeStyle).toBeTruthy();
        expect(document.querySelectorAll("style")).toHaveLength(1);
        expect(chromeStyle.innerHTML.includes("px-rs-0")).toEqual(true);
        expect(chromeStyle.innerHTML.includes("px-rs-1")).toEqual(true);

        Object.defineProperty(window.navigator, "userAgent", { value: defaultUseragent });
        document.body.removeChild(chromeStyle);
    });

    it("does not create duplicate styling when onchange occurs", () => {
        ReactDOM.render(<TestSlider />, div);

        const defaultUseragent = window.navigator.userAgent;

        Object.defineProperty(window.navigator, "userAgent", {
            value: "Chrome",
            writable: true
        });
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const input = rangeSlider.querySelector("input[type=range]");
        const chromeStyle = document.querySelector("style");

        expect(rangeSlider).toBeTruthy();
        expect(input).toBeTruthy();
        expect(chromeStyle).toBeTruthy();
        expect(chromeStyle.innerHTML.match(/px-rs-0/gm)).toHaveLength(2);

        input.value = 50;
        input.dispatchEvent(new Event("change"));

        expect(document.querySelectorAll("style")).toHaveLength(1);
        expect(chromeStyle.innerHTML.match(/px-rs-0/g)).toHaveLength(2);

        Object.defineProperty(window.navigator, "userAgent", { value: defaultUseragent });
        document.body.removeChild(chromeStyle);
    });

    it("sets max and min values to 0 and 100 for rangesliders if none are provided", () => {
        ReactDOM.render(<TestSliderNoLabel />, div);

        const defaultUseragent = window.navigator.userAgent;

        Object.defineProperty(window.navigator, "userAgent", {
            value: "Chrome",
            writable: true
        });
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const chromeStyle = document.querySelector("style");

        expect(rangeSlider).toBeTruthy();
        expect(chromeStyle).toBeTruthy();
        expect(chromeStyle.innerHTML).toContain("background-size: 0% 100%");

        Object.defineProperty(window.navigator, "userAgent", { value: defaultUseragent });
    });
    // End of Chrome specific tests [AW]

    it("updates displayed value span on change in rangeslider", () => {
        ReactDOM.render(<TestSlider />, div);
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const input = rangeSlider.querySelector("input[type=range]");
        const valueSpan = rangeSlider.querySelector("span[data-rs-value]");

        expect(rangeSlider).toBeTruthy();
        expect(input).toBeTruthy();
        expect(valueSpan).toBeTruthy();

        input.value = 10;
        input.dispatchEvent(new Event("change"));

        expect(valueSpan.innerHTML).toEqual(input.value);

    });

    it("updates displayed value span on input in rangeslider", () => {
        ReactDOM.render(<TestSlider />, div);
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const input = rangeSlider.querySelector("input[type=range]");
        const valueSpan = rangeSlider.querySelector("span[data-rs-value]");

        expect(rangeSlider).toBeTruthy();
        expect(input).toBeTruthy();
        expect(valueSpan).toBeTruthy();

        input.value = 10;
        input.dispatchEvent(new Event("input"));

        expect(valueSpan.innerHTML).toEqual(input.value);

    });

    it("does not do value-label updates if value-label is not defined", () => {
        ReactDOM.render(<TestSliderNoLabel />, div);
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const valueSpan = rangeSlider.querySelector("span[data-rs-value]");

        expect(rangeSlider).toBeTruthy();
        expect(valueSpan).toBeFalsy();

    });
});
