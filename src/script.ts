let barMenu=document.querySelector('#barMenu') as HTMLOrSVGScriptElement;
let closeMenu=document.querySelector("#closeMenu") as HTMLOrSVGScriptElement;
let asideMenu=document.querySelector("#asideMenu") as HTMLElement;
let transparentBlack=document.querySelector("#transparentBlack") as HTMLDivElement;
let optionText:NodeListOf<Element>=document.querySelectorAll('#optionSpan');
let shopIcon=document.querySelector("#shopIcon") as HTMLImageElement;
let shopCart=document.querySelector('#shoppingCart') as HTMLDivElement;
let mainImg=document.querySelector("#mainImg") as HTMLImageElement;
let thumbnailImgOne=document.querySelector("#thumbnailImg1") as HTMLImageElement;
let thumbnailImgTwo=document.querySelector("#thumbnailImg2") as HTMLImageElement;
let thumbnailImgThree=document.querySelector("#thumbnailImg3") as HTMLImageElement;
let thumbnailImgFour=document.querySelector("#thumbnailImg4") as HTMLImageElement;
let thumbnailImges:NodeListOf<Element>=document.querySelectorAll(".thumb");
let minus=document.querySelector('#decreaseAmount') as HTMLOrSVGScriptElement;
let plus=document.querySelector('#increaseAmount') as HTMLOrSVGScriptElement;
let amount=document.querySelector('#itemAmount') as HTMLSpanElement;
let totalAmount:number=0;
let cartAmount=document.querySelector('#cardAmount') as HTMLDivElement;
let addToCart=document.querySelector('#addToCart') as HTMLDivElement;
let finalAmount:number=0;
barMenu.addEventListener("click",()=>{
    transparentBlack.classList.remove('hidden');
    asideMenu.classList.remove("-translate-x-full");
});
closeMenu.addEventListener("click",()=>{
    transparentBlack.classList.add('hidden');
    asideMenu.classList.add("-translate-x-full");
});
optionText.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
        e.parentElement!.classList.add('hover:border-orange');
    });
    e.addEventListener('mouseout',()=>{
        e.parentElement!.classList.remove('hover:border-orange');
    });
});
shopIcon.addEventListener('click',()=>{
    shopCart.classList.toggle('hidden');
});
thumbnailImgOne.addEventListener("click",()=>{
    mainImg.setAttribute("src","images/image-product-1.jpg");
    thumbnailImges.forEach((e)=>{
        e.classList.remove("opacity-50");
        e.parentElement?.classList.remove("rounded-xl");
        e.parentElement?.classList.remove("border-4");
        e.parentElement?.classList.remove("border-orange");
    });
    thumbnailImgOne.classList.add("opacity-50");
    thumbnailImgOne.classList.remove("rounded-xl");
    thumbnailImgOne.parentElement?.classList.add("rounded-xl");
    thumbnailImgOne.parentElement?.classList.add("border-4");
    thumbnailImgOne.parentElement?.classList.add("border-orange");
});
thumbnailImgTwo.addEventListener("click",(t)=>{
    mainImg.setAttribute("src","images/image-product-2.jpg");
    thumbnailImges.forEach((e)=>{
        e.classList.remove("opacity-50");
        e.parentElement?.classList.remove("rounded-xl");
        e.parentElement?.classList.remove("border-4");
        e.parentElement?.classList.remove("border-orange");
    });
    thumbnailImgTwo.classList.add("opacity-50");
    thumbnailImgTwo.classList.remove("rounded-xl");
    thumbnailImgTwo.parentElement?.classList.add("rounded-xl");
    thumbnailImgTwo.parentElement?.classList.add("border-4");
    thumbnailImgTwo.parentElement?.classList.add("border-orange");
});
thumbnailImgThree.addEventListener("click",()=>{
    mainImg.setAttribute("src","images/image-product-3.jpg");
    thumbnailImges.forEach((e)=>{
        e.classList.remove("opacity-50");
        e.parentElement?.classList.remove("rounded-xl");
        e.parentElement?.classList.remove("border-4");
        e.parentElement?.classList.remove("border-orange");
    });
    thumbnailImgThree.classList.add("opacity-50");
    thumbnailImgThree.classList.remove("rounded-xl");
    thumbnailImgThree.parentElement?.classList.add("rounded-xl");
    thumbnailImgThree.parentElement?.classList.add("border-4");
    thumbnailImgThree.parentElement?.classList.add("border-orange");
});
thumbnailImgFour.addEventListener("click",()=>{
    mainImg.setAttribute("src","images/image-product-4.jpg");
    thumbnailImges.forEach((e)=>{
        e.classList.remove("opacity-50");
        e.parentElement?.classList.remove("rounded-xl");
        e.parentElement?.classList.remove("border-4");
        e.parentElement?.classList.remove("border-orange");
    });
    thumbnailImgFour.classList.add("opacity-50");
    thumbnailImgFour.classList.remove("rounded-xl");
    thumbnailImgFour.parentElement?.classList.add("rounded-xl");
    thumbnailImgFour.parentElement?.classList.add("border-4");
    thumbnailImgFour.parentElement?.classList.add("border-orange");
});
plus.addEventListener('click',()=>{
    totalAmount++;
    amountUpdate(totalAmount);
});
minus.addEventListener('click',()=>{
    totalAmount--;
    amountUpdate(totalAmount)
});
addToCart.addEventListener('click',()=>{
    cartAmountUpdate(totalAmount);
    totalAmount=0;
    amountUpdate(totalAmount);
});
//better way to use instead of innerHTML
function amountUpdate(number:number){
    totalAmount=number;
    if(totalAmount<0) totalAmount=0;
    let amoundItemChilds=amount.childNodes;
    for(let i=0;i<amoundItemChilds.length;i++)
        amount.removeChild(amoundItemChilds[i]);
    amount.appendChild(document.createTextNode(`${totalAmount}`));
}
amountUpdate(totalAmount);
function cartAmountUpdate(total:number=0){
    finalAmount=total;
    //instead of innerText
    //(cartAmount.textContent==="0")
    if(finalAmount===0){
        cartAmount.classList.add('hidden');
    }else{
        cartAmount.classList.remove('hidden');
        cartAmount.removeChild(cartAmount.childNodes[0]);
        cartAmount.appendChild(document.createTextNode(`${finalAmount}`));
    }
}
cartAmountUpdate();