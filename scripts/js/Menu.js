class Menu {
    constructor() {
        this.opened = false;
        this.headerMenu = document.getElementById("idHeaderMenu");
        this.headerMenuClassList = this.headerMenu.classList;
    }
    menuBarsClickHandler() {
        if( !this.opened ) {
            this.open();
        } else {
            this.close();
        }
    }
    close() {
        this.headerMenuClassList.add("hide");
        this.opened = false;
    }
    open() {
        this.headerMenuClassList.remove("hide");
        this.opened = true;
    }
    blurHandler() {
        if( document.activeElement != this.headerMenu ) {
            this.close();
        }
    }
}