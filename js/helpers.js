// Helper function from: http://stackoverflow.com/a/7557433/274826

// Detect request animation frame
let scroll =
    window.requestAnimationFrame ||
    // IE Fallback
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
let elementsToShow = document.querySelectorAll(".show-on-scroll");

const isElementInViewport = (el) => {
    const pixFromElementTop = 20;
    let rect = el.getBoundingClientRect();
    return (
        (rect.top + pixFromElementTop <= 0 && rect.bottom >= 0) ||
        (rect.bottom + pixFromElementTop >=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top + pixFromElementTop <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top + pixFromElementTop >= 0 &&
            rect.bottom + pixFromElementTop <=
            (window.innerHeight || document.documentElement.clientHeight))
    );
};

const loop = () => {
    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add("is-visible");
        } else {
            element.classList.remove("is-visible");
        }
    });

    scroll(loop);
};
// Call the loop for the first time
loop();


//check scroll direction
window.onscroll = (e) => {
    let header = document.getElementsByClassName("header");
    let chat = document.getElementsByClassName("chat");
    if (this.oldScroll < this.scrollY && this.scrollY > 140) {
        moveOutTop(header);
        moveInLeft(chat);
    } else {
        moveInTop(header);
        moveOutLeft(chat);
    }
    this.oldScroll = this.scrollY;
};

// Set style functions
const moveInTop = e => {
    e[0].style.transform = "translateY(0%)";
};
const moveOutTop = e => {
    e[0].style.transform = "translateY(-55%)";
};
const moveInLeft = e => {
    e[0].style.transform = "translateX(0%)";
};
const moveOutLeft = e => {
    e[0].style.transform = "translateX(-100%)";
};