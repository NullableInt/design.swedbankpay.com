import px from "./index";

describe("px-script: index (main)", () => {
    it("is defined", () => {
        expect(px).toBeDefined();
    });

    it("defines window.px as px", () => {
        expect(window.px).toBeDefined();
        expect(window.px).toEqual(px);
    });
});
