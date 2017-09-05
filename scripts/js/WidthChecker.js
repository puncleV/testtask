class WidthChecker {
    constructor() {
        this.clientWidth = document.documentElement.clientWidth;
        this.clientWidth = 640
        if( this.isSmallDevice() ) {
            this.changeContentTextStyle();
            this.changeMenuItemsType();
        }
    }
    isSmallDevice() {
        return this.clientWidth <= 640;
    }
    changeContentTextStyle() {
        let contentText = document.getElementById("idContentText");

        contentText.style.columns = "1"
    }
    changeMenuItemsType() {
        let menuBars = document.getElementById("idMenuBars"),
            menuBarsClassList = menuBars.classList,
            headerMenu = document.getElementById("idHeaderMenu"),
            headerMenuClassList = headerMenu.classList,
            header = document.getElementById("idHeader");
        header.style['justify-content'] = "flex-end";
        menuBarsClassList.remove("invisible-element");
        headerMenuClassList.remove("test_header_menu");
        headerMenuClassList.add("test_header_menu-popover");
        headerMenuClassList.add("hide")
    }

}