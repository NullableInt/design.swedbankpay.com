import React from "react";
import { shallow } from "enzyme";

import Dialog, { Example, UsageWithJavascript, DialogText } from "./index";

describe("Documentation: Dialog", () => {
    it("is defined", () => {
        expect(Dialog).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Dialog />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Example", () => {
        it("is defined", () => {
            expect(Example).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Example />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("UsageWithJavascript", () => {
        it("is defined", () => {
            expect(UsageWithJavascript).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<UsageWithJavascript />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DialogText", () => {
        it("is defined", () => {
            expect(DialogText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DialogText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
