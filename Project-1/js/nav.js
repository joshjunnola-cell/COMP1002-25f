const pageURL = window.location.href; //from class

const navLinks = document.querySelectorAll("header nav > ul > li > a");

let linkURL;

navLinks.forEach((element) => {

    linkURL = element.href;

    if (linkURL == pageURL) {

        element.classList.add("current");
    };
});

const saleTxt = document.getElementById("saleText");
const discountTxt = document.getElementById("discountText");

saleTxt.addEventListener("mouseenter", () => {
    saleTxt.textContent = "ORDER PAGE!";
});

saleTxt.addEventListener("mouseleave", () => {
    saleTxt.textContent = "SALE!";
});

saleTxt.addEventListener("click", () => {
    window.location.href = "order.html";
});

discountTxt.addEventListener("mouseenter", () => {
    discountTxt.textContent = "INFO PAGE!";
});

discountTxt.addEventListener("mouseleave", () => {
    discountTxt.textContent = "LEARN MORE!";
});

discountTxt.addEventListener("click", () => {
    window.location.href = "info.html";
});