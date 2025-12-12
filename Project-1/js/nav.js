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
    

    topHalf.addEventListener("mouseover", () => {
        topHalf.textContent = "On Sale Now!";
    });
    topHalf.addEventListener("click", () => {
        window.location.href = "order.html";
    });
    topHalf.addEventListener("mouseout", () => {
        topHalf.textContent = "";
    });

    bottomHalf.addEventListener("mouseover", () => {
        bottomHalf.textContent = "Learn More!";
    });
    bottomHalf.addEventListener("click", () => {
        window.location.href = "info.html";
    });
    bottomHalf.addEventListener("mouseout", () => {
        bottomHalf.textContent = "";
    });
// topHalf.textContent.style.top = "-10em"; 
// Unable to figure this out, was attempting to make the text centered and appear a certain way but im not sure how to go about it.
// bottomHalf.textContent.style.bottom = "-10em";
});

document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.getElementById("orderButton");

    orderButton.addEventListener("click", () => {
        alert("Thank you for your order! We will process it shortly.");
    });
});