import React from "react";
import { shallow } from "enzyme";

import Button from "./index";

describe("Component: Button - ", () => {
    it("is defined", () => {
        expect(Button).toBeDefined();
    });

    it("prop type is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(
            <Button />
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    describe("Anchor tag:", () => {
        it("renders a button inside an anchor tag when prop href is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("href=\"test\"");
        });

        it("renders a button inside an anchor tag with label when prop href and label is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" label="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("<a class=\"btn btn-default\" href=\"test\" role=\"button\">test</a>");
        });

        it("renders a outline button inside an anchor tag when prop href and outline is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" outline />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-outline-default");
        });

        it("renders a button with specified size inside an anchor tag when prop href and size is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" size="size-test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-size-test");
        });

        it("renders a loading button inside an anchor tag when prop href and loading is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" loading />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("loading");
        });

        it("renders a full width button inside an anchor tag when prop href and fullWidth is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" fullWidth />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-block");
        });

        it("renders a button inside an anchor tag with class pull-right when prop href and pullRight is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" pullRight />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("pull-right");
        });

        it("renders a button inside an anchor tag with class active when prop href and active is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" active />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("active");
        });

        it("renders a button inside an anchor tag with id when prop href and id is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" id="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("id=\"test\"");
        });

        it("renders a button inside an anchor tag with name when prop href and name is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" name="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("name=\"test\"");
        });

        it("renders a disabled button inside an anchor tag when prop href and disabled is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" disabled />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("disabled");
        });

        it("renders a button inside an anchor tag with attribute data-button-loader when prop href and loader is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" loader />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("data-button-loader");
        });

        it("renders a button with icon inside an anchor tag when prop href and icon is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" icon="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons">test</i>)).toEqual(true);
        });

        it("renders a button with icon and label inside a span inside an anchor tag when prop href, label and icon is provided", () => {
            const wrapper = shallow(
                <Button type="default" href="test" icon="test" label="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons">test</i>)).toEqual(true);
            expect(wrapper.html()).toContain("<span>test</span>");
        });
    });

    describe("Input tag:", () => {
        it("renders a button inside an input tag and defaults to type='button' when prop input is provided", () => {
            const wrapper = shallow(
                <Button type="default" input />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("type=\"button\"");
        });

        it("renders an outline button inside an input tag when prop input and outline is provided", () => {
            const wrapper = shallow(
                <Button type="default" input outline />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-outline-default");
        });

        it("renders a button with specified size inside an input tag when prop input and size is provided", () => {
            const wrapper = shallow(
                <Button type="default" input size="size-test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-size-test");
        });

        it("renders a loading button inside an input tag when prop input and loading is provided", () => {
            const wrapper = shallow(
                <Button type="default" input loading />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("loading");
        });

        it("renders a full width button inside an input tag when prop input and fullWidth is provided", () => {
            const wrapper = shallow(
                <Button type="default" input fullWidth />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-block");
        });

        it("renders a button with class pull-right inside an input tag when prop input and pullRight is provided", () => {
            const wrapper = shallow(
                <Button type="default" input pullRight />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("pull-right");
        });

        it("renders a button with class active inside an input tag when prop input and active is provided", () => {
            const wrapper = shallow(
                <Button type="default" input active />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("active");
        });

        it("renders a button with the specified type inside an input tag when prop input and btnType is provided", () => {
            const wrapper = shallow(
                <Button type="default" input btnType="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("type=\"test\"");
        });

        it("renders a button with the specified id inside an input tag when prop input and id is provided", () => {
            const wrapper = shallow(
                <Button type="default" input id="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("id=\"test\"");
        });

        it("renders a button with the specified name inside an input tag when prop input and name is provided", () => {
            const wrapper = shallow(
                <Button type="default" input name="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("name=\"test\"");
        });

        it("renders a disabled button inside an input tag when prop input and disabled is provided", () => {
            const wrapper = shallow(
                <Button type="default" input disabled />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("disabled");
        });

        it("renders a button inside an input tag with attribute data-button-loader when prop input and loader is provided", () => {
            const wrapper = shallow(
                <Button type="default" input loader />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("data-button-loader");
        });

        it("renders a button inside an input tag with value attribute when prop input and value is provided", () => {
            const wrapper = shallow(
                <Button type="default" input value="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("value=\"test\"");
        });
    });

    describe("Button tag:", () => {
        it("renders a default button and defaults to type='button' when no btnType prop is provided", () => {
            const wrapper = shallow(
                <Button type="default" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("type=\"button\"");
        });

        it("renders a button with a label when prop label is provided", () => {
            const wrapper = shallow(
                <Button type="default" label="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("test");
        });

        it("renders an outline button when prop outline is provided", () => {
            const wrapper = shallow(
                <Button type="default" outline />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-outline-default");
        });

        it("renders a button with specified size when prop size is provided", () => {
            console.error = jest.fn();
            const wrapper = shallow(
                <Button type="default" size="size-test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-size-test");
        });

        it("renders a loading button when prop loading is provided", () => {
            const wrapper = shallow(
                <Button type="default" loading />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("loading");
        });

        it("renders a full width button when prop fullWidth is provided", () => {
            const wrapper = shallow(
                <Button type="default" fullWidth />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-block");
        });

        it("renders a button with class pull-right when prop pullRight is provided", () => {
            const wrapper = shallow(
                <Button type="default" pullRight />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("pull-right");
        });

        it("renders a button with class active when prop active is provided", () => {
            const wrapper = shallow(
                <Button type="default" active />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("active");
        });

        it("renders a button with the specified type when prop btnType is provided", () => {
            const wrapper = shallow(
                <Button type="default" btnType="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("type=\"test\"");
        });

        it("renders a button with the specified id when prop id is provided", () => {
            const wrapper = shallow(
                <Button type="default" id="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("id=\"test\"");
        });

        it("renders a button with the specified name when prop name is provided", () => {
            const wrapper = shallow(
                <Button type="default" name="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("name=\"test\"");
        });

        it("renders a disabled button when prop disabled is provided", () => {
            const wrapper = shallow(
                <Button type="default" disabled />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("disabled");
        });

        it("renders a button with the attribute data-button-loader when prop loader is provided", () => {
            const wrapper = shallow(
                <Button type="default" loader />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button className="btn btn-default" data-button-loader="" type="button"></button>)).toEqual(true);
        });

        it("renders a button with an icon when prop icon is provided", () => {
            const wrapper = shallow(
                <Button type="default" icon="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons">test</i>)).toEqual(true);
        });

        it("renders a button with icon and label inside a span when prop icon and label is provided", () => {
            const wrapper = shallow(
                <Button type="default" icon="test" label="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons">test</i>)).toEqual(true);
            expect(wrapper.contains(<span>test</span>)).toEqual(true);
        });
    });
});
