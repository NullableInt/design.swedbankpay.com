import React from "react";
import { shallow } from "enzyme";

import Color from "./Color";

describe("Core: Color", () => {
    it("is defined", () => {
        expect(Color).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Color />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
