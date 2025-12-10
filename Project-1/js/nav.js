const pageURL = window.location.href; //from class

const navLinks = document.querySelectorAll("header nav > ul > li > a");

let linkURL;

navLinks.forEach((element) => {

    linkURL = element.href;

    if (linkURL == pageURL) {

        element.classList.add("current");
    };
});

document.addEventListener("DOMContentLoaded", () => {
    const topHalf = document.getElementById("topHalf");
    const bottomHalf = document.getElementById("bottomHalf");

    topHalf.ad("mouseover", () => {
        topHalf.style.background = "linear-gradient(to bottom, rgba(255, 255, 0, 0.5), rgba(255, 255, 0, 0))";
        topHalf.textContent = "On Sale Now!";
    });
    topHalf.addEventListener("click", () => {
        window.location.href = "order.html";
    });

    bottomHalf.addEventListener("mouseover", () => {
        bottomHalf.style.background = "linear-gradient(to top, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0))";
        bottomHalf.textContent = "Learn More!";
    });
    bottomHalf.addEventListener("click", () => {
        window.location.href = "info.html";
    });
});