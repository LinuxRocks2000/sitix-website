/* Scrolly.JS is an extremely simple framework that gives CSS interoperation to scroll events. */

var scrollyContainers = document.getElementsByClassName("scrolly-container");

function scrolly() {
    var scrollyItems = this.getElementsByClassName("scrolly");
    var nearest = undefined;
    var nearestVal = Infinity;
    for (var i = 0; i < scrollyItems.length; i++) {
        var position = scrollyItems[i].getBoundingClientRect();
        var scrollyMargin = 0;
        if (scrollyItems[i].hasAttribute("--data-scrollyMargin")) {
            scrollyMargin = scrollyItems[i].getAttribute("--data-scrollyMargin");
        }
        if (position.top < window.innerHeight - scrollyMargin && position.bottom > scrollyMargin) {
            scrollyItems[i].classList.add("scrolly-entered");
            scrollyItems[i].classList.add("scrolly-in");
            scrollyItems[i].classList.remove("scrolly-out");
        }
        else {
            scrollyItems[i].classList.add("scrolly-out");
            scrollyItems[i].classList.remove("scrolly-in");
        }
        var cDisp = Math.abs(window.innerHeight / 2 - (position.top + position.bottom) / 2);
        scrollyItems[i].classList.remove("scrolly-center");
        if (cDisp < nearestVal) {
            if (nearest) {
                nearest.classList.remove("scrolly-center");
            }
            nearest = scrollyItems[i];
            scrollyItems[i].classList.add("scrolly-center");
            nearestVal = cDisp;
        }
    }
}

for (var i = 0; i < scrollyContainers.length; i++) {
    scrollyContainers[i].scrolly = scrolly;
    scrollyContainers[i].scrolly();
}

window.addEventListener("scroll", () => {
    for (var i = 0; i < scrollyContainers.length; i++) {
        scrollyContainers[i].scrolly()
    }
});

window.addEventListener("wheel", () => {
    for (var i = 0; i < scrollyContainers.length; i++) {
        scrollyContainers[i].scrolly()
    }
});