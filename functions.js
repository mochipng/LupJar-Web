window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY < 250 || window.scrollY == 0) {
        header.style.opacity = "0";
    } else {
        header.style.opacity = "1";
    }
});