import NavMenu from "./NavMenu";

const topbar = (() => {
    const init = () => {
        const menu = document.querySelector(".topbar");

        let leftNavMenu,
            rightNavMenu;

        if (menu) {
            const leftMenuBtnElement = menu.querySelector(".topbar-btn-left");
            const rightMenuBtnElement = menu.querySelector(".topbar-btn-right");

            if (leftMenuBtnElement) {
                leftNavMenu = new NavMenu(leftMenuBtnElement);
            }

            if (rightMenuBtnElement) {
                rightNavMenu = new NavMenu(rightMenuBtnElement);
            }
        }

        document.querySelector("html").addEventListener("mousedown", e => {
            if (leftNavMenu && leftNavMenu.isOpen && !leftNavMenu.containsPoint(e.clientX, e.clientY)) {
                leftNavMenu.close();
            }

            if (rightNavMenu && rightNavMenu.isOpen && !rightNavMenu.containsPoint(e.clientX, e.clientY)) {
                rightNavMenu.close();
            }
        });
    };

    return { init: init };
})();

export default topbar;
