const pageURL = window.location.href; //from class

const navLinks = document.querySelectorAll("header nav > ul > li > a");

let linkURL;

navLinks.forEach((element) => {

    linkURL = element.href;

    if (linkURL == pageURL) {

        element.classList.add("current");
    };
});

const topHover = document.getElementById("topHov");
const bottomHover = document.getElementById("bottomHov");

topHover.addEventListener("mouseenter", () => {
    topHover.textContent = "ORDER PAGE!";
});

topHover.addEventListener("mouseleave", () => {
    topHover.textContent = "SALE!";
});

topHover.addEventListener("click", () => {
    window.location.href = "order.html";
});

bottomHover.addEventListener("mouseenter", () => {
    bottomHover.textContent = "INFO PAGE!";
});

bottomHover.addEventListener("mouseleave", () => {
    bottomHover.textContent = "LEARN MORE!";
});

bottomHover.addEventListener("click", () => {
    window.location.href = "info.html";
});