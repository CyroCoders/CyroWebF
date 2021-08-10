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
                this.nav.className = this.nav.className + ' top';
                break;
            case this.BOTTOM:
                this.nav.className = this.nav.className + ' bottom';
                break;
            case this.LEFT:
                this.nav.className = this.nav.className + ' left';
                break;
            case this.RIGHT:
                this.nav.className = this.nav.className + ' right';
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
        this.navBrand.id = "nav-brand"

        this.navLinks = document.createElement('div');
        for (const [key, value] of Object.entries(this.navLinkItems)) {
            this.navLinks.appendChild(value);
        }

        this.nav = document.createElement('nav');
        this.nav.appendChild(this.navBrand);
    }

    makeNavLinkItems(links) {
        console.log(links)
        this.navLinkItems = {};
        links.forEach((link) => {
            this.navLinkItems[link.buttonText] = document.createElement('div')
            this.navLinkItems[link.buttonText].innerHTML = link.buttonText
        });
    }
}

document.dispatchEvent(navigationReady);