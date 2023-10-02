const menu = document.querySelector(".menu");
const openBtn = document.querySelector(".header-open-btn");
const closeBtn = document.querySelector(".menu-close-btn");

// когда доделаете хедер раскомментируйте эту часть кода

openBtn.addEventListener("click", function () {
    menu.classList.toggle("is-open");
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
    menu.classList.toggle("is-open");
    document.body.style.overflow = "scroll";
});