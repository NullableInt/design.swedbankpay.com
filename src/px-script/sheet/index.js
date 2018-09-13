const SELECTORS = {
    SHEET: ".sheet",
    CLOSE: "[data-sheet-close]",
    OPEN: "[data-sheet-open]",
    CLOSEICON: ".sheet-close"
};

class Sheet {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.closeIcon = el.querySelector(SELECTORS.CLOSEICON);
        this.isOpen = el.classList.contains("sheet-open");

        if (this.closeIcon) {
            this.closeIcon.addEventListener("click", e => {
                e.preventDefault();
                this.close();
            });
        }

        // Close sheet on esc
        document.addEventListener("keydown", e => {
            e.keyCode === 27 ? this.close() : null;
        });

        // close the sheet when clicking outside
        this._el.addEventListener("click", e => {
            e.target.classList.contains("sheet-open") ? this.close() : null;
        });
    }

    open () {
        if (!this.isOpen) {
            this.isOpen = true;
            this._el.classList.add("d-block");
            setTimeout(() => {
                this._el.classList.add("sheet-open");
            }, 1);
        }
    }

    close () {
        if (this.isOpen) {
            this.isOpen = false;
            this._el.classList.remove("sheet-open");
            setTimeout(() => {
                this._el.classList.remove("d-block");
            }, 300);
        }
    }
}

const sheet = (() => {
    const init = () => {
        const sheets = [...document.querySelectorAll(SELECTORS.SHEET)].map(sheet => new Sheet(sheet));

        // init open buttons
        document.querySelectorAll(SELECTORS.OPEN).forEach(btn => {
            const id = btn.dataset.sheetOpen;
            let sheet;

            sheets.forEach(s => s.id === id ? sheet = s : null);

            if (sheet) {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    sheet.open();
                });
            } else {
                console.warn(`OPEN: No sheet with with id ${id} was found, make sure the attribute data-sheet-open contains the correct id.`);
            }
        });

        // init close buttons
        document.querySelectorAll(SELECTORS.CLOSE).forEach(btn => {
            const id = btn.dataset.sheetClose;
            let sheet;

            sheets.forEach(s => s.id === id ? sheet = s : null);

            if (sheet) {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    sheet.close();
                });
            } else {
                console.warn(`CLOSE: No sheet with with id ${id} was found, make sure the attribute data-sheet-close contains the correct id.`);
            }
        });
    };

    return { init };
})();

export default sheet;
