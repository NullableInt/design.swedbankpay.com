const script = (() => {
    const initAll = () => {
        const { px } = window;

        for (const key in px) {
            if (typeof px[key].init === "function") {
                px[key].init();
            } else if (key !== "script" && key !== "toast" && key !== "utils") {
                console.warn(`Module ${key} does not have an init method.`);
            }
        }

        return px;
    };

    return { initAll };
})();

export default script;
