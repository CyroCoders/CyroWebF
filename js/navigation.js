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
        this.nav.style.setProperty("--collapse-background",options.collapseBackground)
        container.appendChild(this.nav);
        this.showNavToggle(window.innerWidth < 690);
        window.addEventListener('resize',() => {this.showNavToggle(window.innerWidth < 690)});
    }

    makeNav(options) {
        this.navBrandLogo = document.createElement('img');
        this.navBrandLogo.src = options.brandImgSrc || "/favicon.ico";

        this.navBrandName = document.createElement('span');
        this.navBrandName.innerHTML = options.brandName || "CyroWebF";

        this.navBrand = document.createElement('div');
        this.navBrand.appendChild(this.navBrandLogo);
        this.navBrand.appendChild(this.navBrandName);
        this.navBrand.classList.add("nav-brand");

        this.makeNavToggle();

        this.navLinks = document.createElement('div');
        this.navLinks.appendChild(this.navLinkItemsList);
        this.navLinks.classList.add("nav-links");

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
        this.navToggleHamburger.classList.add("hamburger");

        this.navToggle = document.createElement('div');
        this.navToggle.appendChild(this.navToggleHamburger);
        this.navToggle.classList.add("nav-toggle");
        this.navToggle.addEventListener('click', ()=>{this.toggleNavigation()})
    }

    toggleNavigation(open) {
        if (typeof(open) !== 'undefined') {
            if(open) {
                this.navToggleHamburger.src = "/icon/close-outline.svg";
                this.nav.classList.add("expanded");
                this.nav.classList.remove("collapsed");
                //this.navLinks.style.display = "block";
            } else
            if(!open) {
                this.navToggleHamburger.src = "/icon/menu-outline.svg";
                this.nav.classList.add("collapsed");
                this.nav.classList.remove("expanded");
                //this.navLinks.style.display = "none";
            }
        } else
        if(this.navToggleHamburger.src === window.origin+"/icon/menu-outline.svg") {
            this.navToggleHamburger.src = "/icon/close-outline.svg";
            this.nav.classList.add("expanded");
            this.nav.classList.remove("collapsed");
        } else
        if(this.navToggleHamburger.src === window.origin+"/icon/close-outline.svg") {
            this.navToggleHamburger.src = "/icon/menu-outline.svg";
            this.nav.classList.add("collapsed");
            this.nav.classList.remove("expanded");
        }
    }

    showNavToggle(visible) {
        if(visible){
            this.navToggle.style.display = "block";
            this.nav.classList.add("collapsible");
            this.toggleNavigation(false);
        }
        else {
            this.navToggle.style.display = "none";
            this.nav.classList.remove("expanded");
            this.nav.classList.remove("collapsed");
            this.nav.classList.remove("collapsible");
            this.toggleNavigation(true);
        }
    }
};

document.dispatchEvent(navigationReady);