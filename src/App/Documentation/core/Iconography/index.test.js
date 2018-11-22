import React from "react";
import { shallow } from "enzyme";

import Icons, { MaterialIcons, PaymentIcons, IconsText } from "./index";

describe("Core: Iconography", () => {
    it("is defined", () => {
        expect(Icons).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Icons />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("MaterialIcons", () => {
        it("is defined", () => {
            expect(MaterialIcons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<MaterialIcons />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("PaymentIcons", () => {
        it("is defined", () => {
            expect(PaymentIcons).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<PaymentIcons />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("IconsText", () => {
        it("is defined", () => {
            expect(IconsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<IconsText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
