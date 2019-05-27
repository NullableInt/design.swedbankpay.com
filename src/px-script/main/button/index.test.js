import React from "react";
import ReactDOM from "react-dom";

import button from "./index";
import Button from "@/Button";

describe("px-script: button", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    beforeEach(() => ReactDOM.unmountComponentAtNode(div));

    it("is defined", () => {
        expect(button).toBeDefined();
    });

    describe("button.init", () => {
        it("has an init method", () => {
            expect(button.init).toBeDefined();
            expect(button.init).toBeInstanceOf(Function);
        });

        it("it adds loader markup to buttons with attribute [data-button-loader]", () => {
            const Buttons = () => (
                <div>
                    <Button type="executive" label="test" loader />
                    <Button type="executive" label="test" loader />
                </div>
            );

            ReactDOM.render(<Buttons />, div);

            const renderedButtons = document.querySelectorAll("[data-button-loader]");

            expect(renderedButtons).toHaveLength(2);

            renderedButtons.forEach(button => {
                expect(button.childNodes).toHaveLength(1);
            });

            button.init();

            renderedButtons.forEach(button => {
                expect(button.childNodes).toHaveLength(2);
                expect(button.lastChild.classList).toContain("loader");
            });
        });

        it("returns a single object when one element is initialized", () => {
            ReactDOM.render(<Button type="executive" id="demo-button" />, div);

            const renderedButton = document.querySelector(".btn");

            expect(renderedButton).toBeTruthy();

            const returnVal = button.init("demo-button");

            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of objects if several loader buttons exist", () => {
            ReactDOM.render(
                <>
                    <Button type="executive" label="test" id="test-1" loader />
                    <Button type="executive" label="test" id="test-2" loader />
                </>
                , div);

            const returnVal = button.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
        });

        it("returns null if no button loaders exist and prints a warning", () => {
            console.warn = jest.fn();

            expect(button.init()).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });

        it("returns null if an invalid ID is passed and prints a warning", () => {
            console.warn = jest.fn();

            expect(button.init("test")).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });
    });
});
