import { findAncestor } from "../utils";

const SELECTORS = {
    ALERT: ".alert",
    CLOSE: "[data-alert-close]"
};

const _hideAlert = alertElement => {
    alertElement.classList.remove("in");
};


export default {
    init: () => {
        const closeButtons = document.querySelectorAll(SELECTORS.CLOSE);

        closeButtons.forEach(btn => {
            const dataVal = btn.dataset.alertClose;

            if (dataVal) {
                const alert = document.getElementById(dataVal);

                if (alert) {
                    btn.addEventListener("click", () => {
                        _hideAlert(alert);
                    });
                } else {
                    console.warn(`No alert with with id ${dataVal} was found, make sure the attribute data-alert-close contains the correct id.`);
                }

            } else {
                const alert = findAncestor(btn, "alert");

                btn.addEventListener("click", () => {
                    _hideAlert(alert);
                });
            }
        });
    }
};
