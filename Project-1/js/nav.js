const pageURL = window.location.href;

const navLinks = document.querySelectorAll("header nav > ul > li > a");

let linkURL;

navLinks.forEach((element) => {

    linkURL = element.href;

    if (linkURL == pageURL) {

        element.classList.add("current");
    };
});