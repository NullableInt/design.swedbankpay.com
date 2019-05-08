import React from "react";
import ReactDOM from "react-dom";

import datepicker from "./index";
import Datepicker from "@/FormComponents/Datepicker";
import formats from "./formats";

describe("px-script: datepicker", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    beforeEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    it("is defined", () => {
        expect(datepicker).toBeDefined();
    });

    describe("datepicker.init", () => {
        it("has an init method", () => {
            expect(datepicker.init).toBeDefined();
            expect(datepicker.init).toBeInstanceOf(Function);
        });

        it("does not init if no datepickers exist", () => {
            ReactDOM.render(<p>No datepickers here!</p>, div);

            const datePickerSpy = jest.spyOn(datepicker, "init");

            expect(datePickerSpy).not.toHaveBeenCalled();
        });

        it("inits the datepicker matching the passed ID", () => {
            ReactDOM.render(<Datepicker id="test-datepicker" />, div);

            const returnVal = datepicker.init("test-datepicker");

            expect(returnVal.input.id).toEqual("test-datepicker");
        });

        it("returns a single object when one ID is passed", () => {
            ReactDOM.render(<Datepicker />, div);

            const returnVal = datepicker.init();

            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of objects if more than one datepicker is initialized", () => {
            ReactDOM.render(
                <>
                    <Datepicker />
                    <Datepicker />
                </>, div
            );

            expect(datepicker.init().length).toEqual(2);
        });

        it("returns null if no datepickers exist", () => {
            expect(datepicker.init()).toBeNull();
        });
    });

    it("warns about non-existing formats", () => {
        console.error = jest.fn(); // To prevent error message from using non-enum for format
        console.warn = jest.fn();

        ReactDOM.render(<Datepicker format="test" />, div);

        datepicker.init();
        expect(console.warn).toHaveBeenCalled();
    });

    it("defaults to iso8601 when no format is specified", () => {
        console.error = jest.fn(); // To prevent error message from using non-enum for format

        ReactDOM.render(<Datepicker />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.dateFormat).toEqual(formats.iso8601.dateFormat);
    });

    it("sets an alternate format if datepicker-fulldate is true", () => {
        console.error = jest.fn(); // To prevent error message from using non-enum for format

        ReactDOM.render(<Datepicker fulldate="true" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.locale.fulldate).toEqual(formats.iso8601.fulldate);
    });

    it("includes time when specified", () => {
        console.error = jest.fn(); // To prevent error message from using non-enum for format

        ReactDOM.render(<Datepicker time />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.enableTime).toBeTruthy();
    });

    it("sends flatpickr correct options for dateformat when specified as nb", () => {
        ReactDOM.render(<Datepicker format="nb" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.locale.dateFormat).toEqual(formats.nb.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as sv", () => {
        ReactDOM.render(<Datepicker format="sv" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.locale.dateFormat).toEqual(formats.sv.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as da", () => {
        ReactDOM.render(<Datepicker format="da" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.locale.dateFormat).toEqual(formats.da.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as fi", () => {
        ReactDOM.render(<Datepicker format="fi" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.locale.dateFormat).toEqual(formats.fi.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as en", () => {
        ReactDOM.render(<Datepicker format="en" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.locale.dateFormat).toEqual(formats.en.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as iso8601", () => {
        ReactDOM.render(<Datepicker format="iso8601" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.locale.dateFormat).toEqual(formats.iso8601.dateFormat);
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute min", () => {
        ReactDOM.render(<Datepicker format="nb" min="test" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.datepickerMin).toEqual("test");
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute max", () => {
        ReactDOM.render(<Datepicker format="nb" max="test" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.datepickerMax).toEqual("test");
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute datepicker-value", () => {
        ReactDOM.render(<Datepicker format="nb" value="test" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.datepickerValue).toEqual("test");
    });

    it("sends flatpickr correct options for dateformat when specified as nb with attribute months", () => {
        ReactDOM.render(<Datepicker format="nb" months="3" />, div);

        const returnVal = datepicker.init();

        expect(returnVal.config.datepickerMonths).toEqual("3");
    });

    describe("datepicker.open", () => {
        it("prints an error message if a datepicker with the given ID is not found", () => {
            console.error = jest.fn();

            datepicker.open("invalid-id");

            expect(console.error).toHaveBeenCalled();
        });

        it("opens the datepicker matching the passed ID", () => {
            ReactDOM.render(<Datepicker id="demo-datepicker" />, div);
            datepicker.init();

            const renderedDatepicker = document.querySelector(".flatpickr-input");

            expect(renderedDatepicker).toBeTruthy();
            expect(renderedDatepicker.classList).not.toContain("active");

            datepicker.open("demo-datepicker");

            expect(renderedDatepicker.classList).toContain("active");
        });
    });

    describe("datepicker.close", () => {
        it("prints an error message if a datepicker with the given ID is not found", () => {
            console.error = jest.fn();

            datepicker.close("invalid-id");

            expect(console.error).toHaveBeenCalled();
        });

        it("closes the datepicker matching the passed ID", () => {
            ReactDOM.render(<Datepicker id="demo-datepicker" />, div);
            datepicker.init();

            const renderedDatepicker = document.querySelector(".flatpickr-input");

            expect(renderedDatepicker).toBeTruthy();
            datepicker.open("demo-datepicker");
            expect(renderedDatepicker.classList).toContain("active");

            datepicker.close("demo-datepicker");
            expect(renderedDatepicker.classList).not.toContain("active");
        });
    });
});
