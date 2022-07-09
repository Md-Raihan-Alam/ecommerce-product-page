"use strict";
let barMenu = document.querySelector('#barMenu');
let closeMenu = document.querySelector("#closeMenu");
let asideMenu = document.querySelector("#asideMenu");
let transparentBlack = document.querySelector("#transparentBlack");
let optionText = document.querySelectorAll('#optionSpan');
let shopIcon = document.querySelector("#shopIcon");
let shopCart = document.querySelector('#shoppingCart');
let mainImg = document.querySelector("#mainImg");
let thumbnailImgOne = document.querySelector("#thumbnailImg1");
let thumbnailImgTwo = document.querySelector("#thumbnailImg2");
let thumbnailImgThree = document.querySelector("#thumbnailImg3");
let thumbnailImgFour = document.querySelector("#thumbnailImg4");
let thumbnailImges = document.querySelectorAll(".thumb");
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
thumbnailImgOne.addEventListener("click", () => {
    var _a, _b, _c;
    mainImg.setAttribute("src", "images/image-product-1.jpg");
    thumbnailImges.forEach((e) => {
        var _a, _b, _c;
        e.classList.remove("opacity-50");
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
        (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
        (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
    });
    thumbnailImgOne.classList.add("opacity-50");
    thumbnailImgOne.classList.remove("rounded-xl");
    (_a = thumbnailImgOne.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
    (_b = thumbnailImgOne.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
    (_c = thumbnailImgOne.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
});
thumbnailImgTwo.addEventListener("click", (t) => {
    var _a, _b, _c;
    mainImg.setAttribute("src", "images/image-product-2.jpg");
    thumbnailImges.forEach((e) => {
        var _a, _b, _c;
        e.classList.remove("opacity-50");
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
        (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
        (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
    });
    thumbnailImgTwo.classList.add("opacity-50");
    thumbnailImgTwo.classList.remove("rounded-xl");
    (_a = thumbnailImgTwo.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
    (_b = thumbnailImgTwo.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
    (_c = thumbnailImgTwo.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
});
thumbnailImgThree.addEventListener("click", () => {
    var _a, _b, _c;
    mainImg.setAttribute("src", "images/image-product-3.jpg");
    thumbnailImges.forEach((e) => {
        var _a, _b, _c;
        e.classList.remove("opacity-50");
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
        (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
        (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
    });
    thumbnailImgThree.classList.add("opacity-50");
    thumbnailImgThree.classList.remove("rounded-xl");
    (_a = thumbnailImgThree.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
    (_b = thumbnailImgThree.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
    (_c = thumbnailImgThree.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
});
thumbnailImgFour.addEventListener("click", () => {
    var _a, _b, _c;
    mainImg.setAttribute("src", "images/image-product-4.jpg");
    thumbnailImges.forEach((e) => {
        var _a, _b, _c;
        e.classList.remove("opacity-50");
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
        (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
        (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
    });
    thumbnailImgFour.classList.add("opacity-50");
    thumbnailImgFour.classList.remove("rounded-xl");
    (_a = thumbnailImgFour.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
    (_b = thumbnailImgFour.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
    (_c = thumbnailImgFour.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
});
