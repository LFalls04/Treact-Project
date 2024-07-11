const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const menu = document.querySelector (".nav__mobile__links--container");

function menuToggle() {
    if (menu.style.display === "none") {
        menu.style.display = "block";
        menuOpen.style.display = "none";
        menuClose.style.display = "block";
    } else {
        menu.style.display = "none";
        menuOpen.style.display = "block";
        menuClose.style.display = "none";
    }
}

