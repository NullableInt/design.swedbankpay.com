import { isWithinBoundingBox, handleScrollbar } from "../utils";

const SELECTORS = {
    BTN: ".topbar-btn",
    ICON: ".topbar-btn-icon",
    OPEN: "topbar-nav-open"
};

export default class NavMenu {
    constructor (topbarComponent, navMenu) {
        this.id = topbarComponent.id;
        this.isOpen = navMenu.classList.contains(SELECTORS.OPEN);
        this.navMenuElement = navMenu;
        this.linkContainer = this.navMenuElement.querySelector(".topbar-link-container");
        this.closeNavIcon = this.navMenuElement.querySelector(".close-topbar-nav");
        this.btnElement = topbarComponent.querySelector(SELECTORS.BTN);
        this.iconElement = this.btnElement ? this.btnElement.querySelector(SELECTORS.ICON) : null;
        this.userIcon = this.iconElement ? this.iconElement.innerHTML : null;

        if (this.btnElement) {
            this.btnElement.addEventListener("click", e => {
                e.preventDefault();
                this.open();
            });
        }

        if (this.navMenuElement) {
            this.navMenuElement.addEventListener("mousedown", e => {
                if (this.isOpen && !this._containsPoint(e.clientX, e.clientY)) { this.close(); }
            });

            try {
                this.closeNavIcon.addEventListener("click", () => {
                    this.close();
                });
            } catch (e) {
                console.warn("Topbar is missing a close icon");
            }
        }

        this._initAnchors();
    }

    _initAnchors () {
        // Closing menu for clicking on links in SPA's.
        this.navMenuElement.querySelectorAll("a")
            .forEach(anchor => anchor.addEventListener("click", () => this.close()));
    }

    open () {
        handleScrollbar();
        this.isOpen = true;

        if (this.iconElement) { this.iconElement.innerHTML = "close"; }

        this.navMenuElement.classList.add("d-block");
        setTimeout(() => {
            this.navMenuElement.classList.add("topbar-nav-open");
        }, 10);
    }

    close () {
        handleScrollbar();
        this.isOpen = false;

        if (this.iconElement) { this.iconElement.innerHTML = this.userIcon; }

        this.navMenuElement.classList.remove("topbar-nav-open");
        setTimeout(() => {
            this.navMenuElement.classList.remove("d-block");
        }, 300);
    }

    _containsPoint (x, y) {
        return isWithinBoundingBox(x, y, this.linkContainer);
    }
}
