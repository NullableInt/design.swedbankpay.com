import alert from "./alert";
import button from "./button";
import datepicker from "./datepicker";
import loader from "./loader";
import modal from "./modal";
import rangeslider from "./rangeslider";
import script from "./script";
import tabs from "./tabs";
import validation from "./validation";

const px = {
    alert,
    button,
    datepicker,
    loader,
    modal,
    rangeslider,
    script,
    tabs,
    validation
};

window.px = px;

if (!window.stopPx) {
    document.addEventListener("DOMContentLoaded", () => {
        px.script.initAll();
    });
}

export default px;
export { alert, button, datepicker, loader, modal, rangeslider, script, tabs, validation };

/* istanbul ignore if|else */
if (module.hot) {
    module.hot.accept();
}
