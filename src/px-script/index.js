import actionList from "./action-list";
import alert from "./alert";
import button from "./button";
import datepicker from "./datepicker";
import loader from "./loader";
import modal from "./modal";
import rangeslider from "./rangeslider";
import script from "./script";
import tabs from "./tabs";
import topbar from "./topbar";
import validation from "./validation";

const px = {
    actionList,
    alert,
    button,
    datepicker,
    loader,
    modal,
    rangeslider,
    script,
    tabs,
    topbar,
    validation
};

window.px = px;

if (!window.stopPx) {
    document.addEventListener("DOMContentLoaded", () => {
        px.script.initAll();
    });
}

export default px;
export { actionList, alert, button, datepicker, loader, modal, rangeslider, script, tabs, topbar, validation };
