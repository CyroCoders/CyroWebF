navigationReady.initEvent('navigationReady', true, true);

class NavigationBar {
    TOP = 0;
    RIGHT = 1;
    LEFT = 2;
    BOTTOM = 3;

    constructor(container,options) {
        this.makeNavLinkItems(options.links);
        this.makeNav(options);
        switch(options.barPosition){
            case this.TOP:
                this.nav.className = "top";
                break;
            case this.BOTTOM:
                this.nav.className = "bottom";
                break;
            case this.LEFT:
                this.nav.className = "left";
                break;
            case this.RIGHT:
                this.nav.className = "right";
                break;
        }

        container.appendChild(this.nav);
    }

    makeNav(options) {
        this.navBrandLogo = document.createElement('img');
        this.navBrandLogo.src = options.brandImgSrc || "/favicon.ico";

        this.navBrandName = document.createElement('span');
        this.navBrandName.innerHTML = options.brandName || "CyroWebF";

        this.navBrand = document.createElement('div');
        this.navBrand.appendChild(this.navBrandLogo);
        this.navBrand.appendChild(this.navBrandName);
        this.navBrand.className = "nav-brand";

        this.makeNavToggle();

        this.navLinks = document.createElement('div');
        this.navLinks.appendChild(this.navLinkItemsList);
        this.navLinks.className = "nav-links"

        this.nav = document.createElement('nav');
        this.nav.appendChild(this.navBrand);
        this.nav.appendChild(this.navToggle);
        this.nav.appendChild(this.navLinks);
    }

    makeNavLinkItems(links) {
        this.navLinkItemsList = document.createElement('ul');
        links.forEach((link) => {
            var navLinkItem = document.createElement('li')
            var navLinkHref = document.createElement('a')
            navLinkHref.href = link.buttonHREF
            navLinkHref.innerHTML = link.buttonText
            navLinkItem.appendChild(navLinkHref)
            this.navLinkItemsList.appendChild(navLinkItem)
        });
    }

    makeNavToggle() {
        this.navToggleHamburger = document.createElement('img');
        this.navToggleHamburger.src = "/icon/menu-outline.svg";
        this.navToggleHamburger.className = this.navToggleHamburger.className + " hamburger"

        this.navToggle = document.createElement('div');
        this.navToggle.appendChild(this.navToggleHamburger);
        this.navToggle.className = "nav-toggle";
    }

    toggleNavigation() {
        
    }
}

document.dispatchEvent(navigationReady);