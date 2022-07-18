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
let closeMark = document.querySelector("#closeImage");
let closeDiv = document.querySelector('#closeDiv');
let closeColor = document.querySelector("#closeColor");
let nextPic = document.querySelector('#nextPic');
let prevPic = document.querySelector('#prevPic');
let nextColor = document.querySelector("#nextColor");
let prevColor = document.querySelector("#prevColor");
let thumbnaimNum = 0;
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
        coverImg.classList.remove("tablet:hidden");
        coverImg.classList.add('flex');
        coverImg.classList.add('flex-col');
    });
    closeMark.addEventListener('click', (e) => {
        transparentBlack.classList.add('hidden');
        coverImg.classList.add('tablet:hidden');
        coverImg.classList.remove('flex');
        coverImg.classList.remove('flex-col');
        let currentPic = upperMainImg.getAttribute('src');
        mainImg.setAttribute('src', `${currentPic}`);
        thumbNailUpdate(thumbnaimNum);
    });
    upperThumbnailImgOne.addEventListener("click", () => {
        thumbnaimNum = 1;
        imgSetupOne();
    });
    upperThumbnailImgTwo.addEventListener("click", () => {
        thumbnaimNum = 2;
        imgSetupTwo();
    });
    upperThumbnailImgThree.addEventListener("click", () => {
        thumbnaimNum = 3;
        imgSetupThree();
    });
    upperThumbnailImgFour.addEventListener("click", () => {
        thumbnaimNum = 4;
        imgSetupFour();
    });
});
nextPic.addEventListener('mouseover', () => {
    nextColor.setAttribute('stroke', 'hsl(26, 100%, 55%)');
});
nextPic.addEventListener('mouseout', () => {
    nextColor.setAttribute('stroke', '#1D2026');
});
prevPic.addEventListener('mouseover', () => {
    prevColor.setAttribute('stroke', 'hsl(26, 100%, 55%)');
});
prevPic.addEventListener('mouseout', () => {
    prevColor.setAttribute('stroke', '#1D2026');
});
closeDiv.addEventListener('mouseover', () => {
    closeColor.setAttribute('fill', 'hsl(26, 100%, 55%)');
});
closeDiv.addEventListener('mouseout', () => {
    closeColor.setAttribute('fill', '#1D2026');
});
nextPic.addEventListener('click', () => {
    thumbnaimNum++;
    thumbnaimNum = thumbnaimNum > 4 ? 1 : thumbnaimNum;
    if (thumbnaimNum === 1) {
        imgSetupOne();
    }
    else if (thumbnaimNum === 2) {
        imgSetupTwo();
    }
    else if (thumbnaimNum === 3) {
        imgSetupThree();
    }
    else if (thumbnaimNum === 4) {
        imgSetupFour();
    }
});
prevPic.addEventListener('click', () => {
    thumbnaimNum--;
    thumbnaimNum = thumbnaimNum < 1 ? 4 : thumbnaimNum;
    if (thumbnaimNum === 1) {
        imgSetupOne();
    }
    else if (thumbnaimNum === 2) {
        imgSetupTwo();
    }
    else if (thumbnaimNum === 3) {
        imgSetupThree();
    }
    else if (thumbnaimNum === 4) {
        imgSetupFour();
    }
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
function thumbNailUpdate(thumbOrder) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    thumbnailImges.forEach((e) => {
        var _a, _b, _c;
        e.classList.remove("opacity-50");
        e.classList.remove('rounded-xl');
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
        (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
        (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
    });
    thumbnailImges.forEach((e) => {
        e.classList.add("rounded-xl");
    });
    if (thumbOrder === 1) {
        thumbnailImgOne.classList.add("opacity-50");
        thumbnailImgOne.classList.remove("rounded-xl");
        (_a = thumbnailImgOne.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
        (_b = thumbnailImgOne.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
        (_c = thumbnailImgOne.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
    }
    else if (thumbOrder === 2) {
        thumbnailImgTwo.classList.add("opacity-50");
        thumbnailImgTwo.classList.remove("rounded-xl");
        (_d = thumbnailImgTwo.parentElement) === null || _d === void 0 ? void 0 : _d.classList.add("rounded-xl");
        (_e = thumbnailImgTwo.parentElement) === null || _e === void 0 ? void 0 : _e.classList.add("border-4");
        (_f = thumbnailImgTwo.parentElement) === null || _f === void 0 ? void 0 : _f.classList.add("border-orange");
    }
    else if (thumbOrder === 3) {
        thumbnailImgThree.classList.add("opacity-50");
        thumbnailImgThree.classList.remove("rounded-xl");
        (_g = thumbnailImgThree.parentElement) === null || _g === void 0 ? void 0 : _g.classList.add("rounded-xl");
        (_h = thumbnailImgThree.parentElement) === null || _h === void 0 ? void 0 : _h.classList.add("border-4");
        (_j = thumbnailImgThree.parentElement) === null || _j === void 0 ? void 0 : _j.classList.add("border-orange");
    }
    else if (thumbOrder === 4) {
        thumbnailImgFour.classList.add("opacity-50");
        thumbnailImgFour.classList.remove("rounded-xl");
        (_k = thumbnailImgFour.parentElement) === null || _k === void 0 ? void 0 : _k.classList.add("rounded-xl");
        (_l = thumbnailImgFour.parentElement) === null || _l === void 0 ? void 0 : _l.classList.add("border-4");
        (_m = thumbnailImgFour.parentElement) === null || _m === void 0 ? void 0 : _m.classList.add("border-orange");
    }
}
function imgSetupOne() {
    var _a, _b, _c;
    upperMainImg.setAttribute("src", "images/image-product-1.jpg");
    upperThumbnailImages.forEach((e) => {
        var _a, _b, _c;
        e.classList.remove("opacity-70");
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
        (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
        (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
    });
    upperThumbnailImgOne.classList.add("opacity-70");
    upperThumbnailImages.forEach((e) => {
        e.classList.add("rounded-xl");
    });
    upperThumbnailImgOne.classList.remove("rounded-xl");
    (_a = upperThumbnailImgOne.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
    (_b = upperThumbnailImgOne.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
    (_c = upperThumbnailImgOne.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
}
function imgSetupTwo() {
    var _a, _b, _c;
    upperMainImg.setAttribute("src", "images/image-product-2.jpg");
    upperThumbnailImages.forEach((e) => {
        var _a, _b, _c;
        e.classList.remove("opacity-70");
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
        (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
        (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
    });
    upperThumbnailImgTwo.classList.add("opacity-70");
    upperThumbnailImages.forEach((e) => {
        e.classList.add("rounded-xl");
    });
    upperThumbnailImgTwo.classList.remove("rounded-xl");
    (_a = upperThumbnailImgTwo.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
    (_b = upperThumbnailImgTwo.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
    (_c = upperThumbnailImgTwo.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
}
function imgSetupThree() {
    var _a, _b, _c;
    upperMainImg.setAttribute("src", "images/image-product-3.jpg");
    upperThumbnailImages.forEach((e) => {
        var _a, _b, _c;
        e.classList.remove("opacity-70");
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
        (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
        (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
    });
    upperThumbnailImgThree.classList.add("opacity-70");
    upperThumbnailImages.forEach((e) => {
        e.classList.add("rounded-xl");
    });
    upperThumbnailImgThree.classList.remove("rounded-xl");
    (_a = upperThumbnailImgThree.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
    (_b = upperThumbnailImgThree.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
    (_c = upperThumbnailImgThree.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
}
function imgSetupFour() {
    var _a, _b, _c;
    upperMainImg.setAttribute("src", "images/image-product-4.jpg");
    upperThumbnailImages.forEach((e) => {
        var _a, _b, _c;
        e.classList.remove("opacity-70");
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("rounded-xl");
        (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("border-4");
        (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("border-orange");
    });
    upperThumbnailImgFour.classList.add("opacity-70");
    upperThumbnailImages.forEach((e) => {
        e.classList.add("rounded-xl");
    });
    upperThumbnailImgFour.classList.remove("rounded-xl");
    (_a = upperThumbnailImgFour.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("rounded-xl");
    (_b = upperThumbnailImgFour.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("border-4");
    (_c = upperThumbnailImgFour.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("border-orange");
}
