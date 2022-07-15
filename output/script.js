"use strict";
let barMenu = document.querySelector('#barMenu');
let closeMenu = document.querySelector("#closeMenu");
let asideMenu = document.querySelector("#asideMenu");
let transparentBlack = document.querySelector("#transparentBlack");
let optionText = document.querySelectorAll('#optionSpan');
let shopIcon = document.querySelector("#shopIcon");
let shopCart = document.querySelector('#shoppingCart');
let mainImg = document.querySelector("#mainImg");
let upperMainImg = document.querySelector("#uppermainImg");
let thumbnailImgOne = document.querySelector("#thumbnailImg1");
let thumbnailImgTwo = document.querySelector("#thumbnailImg2");
let thumbnailImgThree = document.querySelector("#thumbnailImg3");
let thumbnailImgFour = document.querySelector("#thumbnailImg4");
let upperThumbnailImgOne = document.querySelector("#upperthumbnailImg1");
let upperThumbnailImgTwo = document.querySelector("#upperthumbnailImg2");
let upperThumbnailImgThree = document.querySelector("#upperthumbnailImg3");
let upperThumbnailImgFour = document.querySelector("#upperthumbnailImg4");
let thumbnailImges = document.querySelectorAll(".thumb");
let upperThumbnailImages = document.querySelectorAll('.upperThumb');
let minus = document.querySelector('#decreaseAmount');
let plus = document.querySelector('#increaseAmount');
let amount = document.querySelector('#itemAmount');
let totalAmount = 0;
let cartAmount = document.querySelector('#cardAmount');
let addToCart = document.querySelector('#addToCart');
let finalAmount = 0;
let cartMenuDiv = document.querySelector('#cartMenu');
let coverImg = document.querySelector('#coverImage');
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
thumbnailImges.forEach((e) => {
    e.addEventListener("click", () => {
        transparentBlack.classList.remove('hidden');
        coverImg.classList.remove("hidden");
        coverImg.classList.add('flex');
        coverImg.classList.add('flex-col');
    });
    upperThumbnailImgOne.addEventListener("click", () => {
        var _a, _b, _c;
        upperMainImg.setAttribute("src", "images/image-product-1.jpg");
        upperThumbnailImages.forEach((e) => {
            var _a, _b, _c;
            e.classList.remove("opacity-30");
            (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
            (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
            (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
        });
        upperThumbnailImgOne.classList.add("opacity-50");
        upperThumbnailImages.forEach((e) => {
            e.classList.add("rounded-xl");
        });
        upperThumbnailImgOne.classList.remove("rounded-xl");
        (_a = upperThumbnailImgOne.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
        (_b = upperThumbnailImgOne.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
        (_c = upperThumbnailImgOne.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
    });
    upperThumbnailImgTwo.addEventListener("click", (t) => {
        var _a, _b, _c;
        upperMainImg.setAttribute("src", "images/image-product-2.jpg");
        upperThumbnailImages.forEach((e) => {
            var _a, _b, _c;
            e.classList.remove("opacity-30");
            (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
            (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
            (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
        });
        upperThumbnailImgTwo.classList.add("opacity-50");
        upperThumbnailImages.forEach((e) => {
            e.classList.add("rounded-xl");
        });
        upperThumbnailImgTwo.classList.remove("rounded-xl");
        (_a = upperThumbnailImgTwo.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
        (_b = upperThumbnailImgTwo.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
        (_c = upperThumbnailImgTwo.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
    });
    upperThumbnailImgThree.addEventListener("click", () => {
        var _a, _b, _c;
        upperMainImg.setAttribute("src", "images/image-product-3.jpg");
        upperThumbnailImages.forEach((e) => {
            var _a, _b, _c;
            e.classList.remove("opacity-30");
            (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
            (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
            (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
        });
        upperThumbnailImgThree.classList.add("opacity-50");
        upperThumbnailImages.forEach((e) => {
            e.classList.add("rounded-xl");
        });
        upperThumbnailImgThree.classList.remove("rounded-xl");
        (_a = upperThumbnailImgThree.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
        (_b = upperThumbnailImgThree.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
        (_c = upperThumbnailImgThree.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
    });
    upperThumbnailImgFour.addEventListener("click", () => {
        var _a, _b, _c;
        upperMainImg.setAttribute("src", "images/image-product-4.jpg");
        upperThumbnailImages.forEach((e) => {
            var _a, _b, _c;
            e.classList.remove("opacity-30");
            (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
            (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
            (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
        });
        upperThumbnailImgFour.classList.add("opacity-50");
        upperThumbnailImages.forEach((e) => {
            e.classList.add("rounded-xl");
        });
        upperThumbnailImgFour.classList.remove("rounded-xl");
        (_a = upperThumbnailImgFour.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
        (_b = upperThumbnailImgFour.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
        (_c = upperThumbnailImgFour.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
    });
});
plus.addEventListener('click', () => {
    totalAmount++;
    amountUpdate(totalAmount);
});
minus.addEventListener('click', () => {
    totalAmount--;
    amountUpdate(totalAmount);
});
addToCart.addEventListener('click', () => {
    cartAmountUpdate(totalAmount);
    totalAmount = 0;
    amountUpdate(totalAmount);
});
//better way to use instead of innerHTML
function amountUpdate(number) {
    totalAmount = number;
    if (totalAmount < 0)
        totalAmount = 0;
    let amoundItemChilds = amount.childNodes;
    for (let i = 0; i < amoundItemChilds.length; i++)
        amount.removeChild(amoundItemChilds[i]);
    amount.appendChild(document.createTextNode(`${totalAmount}`));
}
amountUpdate(totalAmount);
function cartAmountUpdate(total = 0) {
    finalAmount = total;
    //instead of innerText
    //(cartAmount.textContent==="0")
    if (finalAmount === 0) {
        cartAmount.classList.add('hidden');
    }
    else {
        cartAmount.classList.remove('hidden');
        cartAmount.removeChild(cartAmount.childNodes[0]);
        cartAmount.appendChild(document.createTextNode(`${finalAmount}`));
    }
    cartMenu(finalAmount);
}
cartAmountUpdate();
function cartMenu(totalItem = 0) {
    var _a;
    let itemAmount = totalItem;
    let totalCost = 125.00 * itemAmount;
    cartMenuDiv.innerHTML = ``;
    if (totalCost === 0) {
        cartMenuDiv.innerHTML = `Your cart is empty`;
    }
    else {
        cartMenuDiv.innerHTML = `
        <div class="flex justify-around items-center">
        <img class="w-12 h-12 rounded-md ml-2" src="images/image-product-1-thumbnail.jpg"/>
        <div class="ml-2 flex flex-col justify-center items-start">
          <div>Fall Limited Edition Sneakers</div>
          <div>$125.00 x <span>${itemAmount}</span><span class="ml-2 font-bold text-black">$${totalCost}</span></div>
        </div>
        <div id="trashBin" class="ml-2"><svg class="cursor-pointer" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></div>
        </div>
        <div class="mt-3 w-fitBorder rounded-md flex justify-center items-center cursor-pointer font-bold h-2/5 bg-orange text-white">
            Checkout
        </div>
        `;
        (_a = document.querySelector("#trashBin")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            cartMenu(0);
            cartAmountUpdate(0);
        });
    }
}
cartMenu();
