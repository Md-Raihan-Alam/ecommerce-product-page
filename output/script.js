"use strict";
let barMenu = document.querySelector('#barMenu');
let closeMenu = document.querySelector("#closeMenu");
let asideMenu = document.querySelector("#asideMenu");
barMenu.addEventListener("click", () => {
    asideMenu.classList.remove("-translate-x-full");
});
closeMenu.addEventListener("click", () => {
    asideMenu.classList.add("-translate-x-full");
});
