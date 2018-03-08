import React from "react";
import { shallow } from "enzyme";

import BrowserSupport from "./BrowserSupport";

describe("GettingStarted: BrowserSupport", () => {
    it("is defined", () => {
        expect(BrowserSupport).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <BrowserSupport />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
