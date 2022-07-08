"use strict";
let barMenu = document.querySelector('#barMenu');
let closeMenu = document.querySelector("#closeMenu");
let asideMenu = document.querySelector("#asideMenu");
let transparentBlack = document.querySelector("#transparentBlack");
let optionText = document.querySelectorAll('#optionSpan');
let shopIcon = document.querySelector("#shopIcon");
let shopCart = document.querySelector('#shoppingCart');
barMenu.addEventListener("click", () => {
    transparentBlack.classList.remove('hidden');
    asideMenu.classList.remove("-translate-x-full");
});
closeMenu.addEventListener("click", () => {
    transparentBlack.classList.add('hidden');
    asideMenu.classList.add("-translate-x-full");
});
optionText.forEach((e) => {
    e.addEventListener('mouseover', () => {
        e.parentElement.classList.add('hover:border-orange');
    });
    e.addEventListener('mouseout', () => {
        e.parentElement.classList.remove('hover:border-orange');
    });
});
shopIcon.addEventListener('click', () => {
    shopCart.classList.toggle('hidden');
});
