import React from "react";
import { shallow } from "enzyme";

import Chart from "./index";
import { chart } from "../../../px-script/dashboard";

jest.mock("../../../px-script/dashboard");

describe("Component: Chart - ", () => {
    it("is defined", () => {
        expect(Chart).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Chart id="test" options={{}} />);

        expect(wrapper).toMatchSnapshot();
    });

    it("prop id is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Chart options={{}} />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("prop options is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Chart id="test" />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a canvas with correct id and calls chart.js with that id and provided options", () => {
        const wrapper = shallow(<Chart id="test" options={{ test: "test" }} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<canvas id="test" />)).toEqual(true);
        expect(chart).toHaveBeenCalledWith("test", { test: "test" });
    });
});
