class Sidebar {
    constructor (el) {
        this._el = el;
        this.sidebarOpen = el.classList.contains("sidebar-open");
        this.childCount = [...this._el.querySelectorAll(".submenu")].length;
        this.submenus = this._el.querySelectorAll(".submenu");
        this.listItems = [...this._el.querySelectorAll("li")].length;
        this.resizeEventMenuOpen;
        this.resizeEventSubmenuOpen;
        this.submenuClosed;

        document.addEventListener("click", e => {
            if (!e.target.closest(".sidebar") && this.sidebarOpen) {
                this.closeSidebar();
                this.hideItems();
            } else if (!e.target.closest(".submenu") && !this.submenuClosed) {
                this.submenuCloseAll();
            }
        });

        if (this.listItems > 5 || this.childCount > 0) {
            const menu = document.createElement("a");

            menu.setAttribute("href", "#");
            this.hideItems();
            menu.classList.add("sidebar-openbtn");
            menu.innerHTML += "<i class='material-icons'>menu</i>";
            this._el.appendChild(menu);

            menu.addEventListener("click", e => {
                e.preventDefault();

                if (this.sidebarOpen) {
                    this.closeSidebar();
                    this.hideItems();
                } else {
                    this.openSidebar();
                    this.showItems();
                }
            });
        }

        if (this.submenus) {
            this.submenus.forEach(submenu => {
                const submenuCopy = submenu.querySelector("i").cloneNode(true);

                submenuCopy.classList.add("submenuIcon-clickable");
                submenu.insertBefore(submenuCopy, submenu.querySelector("i"));
                submenuCopy.addEventListener("click", () => {
                    this.submenuClosed = submenu.classList.contains("submenu-open");

                    if (!this.submenuClosed) {
                        this.submenuCloseAll();
                        this.resizeEventSubmenuOpen = this.onResize.bind(this);
                        window.addEventListener("resize", this.resizeEventSubmenuOpen, { passive: true });
                        submenu.classList.add("submenu-open");
                    } else {
                        this.submenuCloseAll();
                    }
                });
            });
        }
    }

    submenuCloseAll () {
        window.removeEventListener("resize", this.resizeEventSubmenuOpen, { passive: true });
        this.submenus.forEach(submenu => submenu.classList.remove("submenu-open"));
    }

    showItems () {
        [...this._el.querySelectorAll("li")].forEach(listItem => listItem.classList.remove("itemHidden"));
    }

    hideItems () {
        const firstFour = [...this._el.querySelectorAll("li")].filter(notHidden => !notHidden.classList.contains("itemHidden") && notHidden.querySelector(".submenu") === null && this._el.querySelector("UL") === notHidden.parentElement);

        if (this.submenus.length > 0) {
            this.submenus.forEach(levelTwo => {
                levelTwo.parentElement.classList.add("itemHidden");
            });

            if (firstFour.length > 4) {
                firstFour.slice(4).forEach(item => {
                    item.parentElement.classList.add("itemHidden");
                });
            }
        } else {
            [...this._el.querySelectorAll("li")].slice(4).forEach(items => {
                items.classList.add("itemHidden");
            });
        }
    }

    onResize () {
        this.closeSidebar();
        this.hideItems();
        this.submenuCloseAll();
    }

    openSidebar () {
        this.sidebarOpen = true;
        this._el.classList.add("sidebar-open");
        this.resizeEventMenuOpen = this.onResize.bind(this);
        window.addEventListener("resize", this.resizeEventMenuOpen, { passive: true });
    }

    closeSidebar () {
        this.sidebarOpen = false;
        this._el.classList.remove("sidebar-open");
        window.removeEventListener("resize", this.resizeEventMenuOpen, { passive: true });
    }
}

const sidebar = (() => {
    const init = () => {
        [...document.querySelectorAll(".sidebar")].map(sidebars => new Sidebar(sidebars));
    };

    return { init };
})();

export default sidebar;
