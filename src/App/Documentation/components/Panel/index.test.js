import React from "react";
import { shallow } from "enzyme";

import Panel from "./index";
import { Overview, PanelHeaders, DarkMode, PanelMuted, PanelText } from "./index";

describe("Documentation: Panel", () => {
    it("is defined", () => {
        expect(Panel).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Panel />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Overview />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PanelHeaders", () => {
        it("is defined", () => {
            expect(PanelHeaders).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <PanelHeaders />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DarkMode", () => {
        it("is defined", () => {
            expect(DarkMode).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <DarkMode />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PanelMuted", () => {
        it("is defined", () => {
            expect(PanelMuted).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <PanelMuted />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PanelText", () => {
        it("is defined", () => {
            expect(PanelText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <PanelText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
