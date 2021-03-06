//all variables
let barMenu=document.querySelector('#barMenu') as HTMLOrSVGScriptElement;
let closeMenu=document.querySelector("#closeMenu") as HTMLOrSVGScriptElement;
let asideMenu=document.querySelector("#asideMenu") as HTMLElement;
let transparentBlack=document.querySelector("#transparentBlack") as HTMLDivElement;
let transparentBlackFlag:number=0;
let optionText:NodeListOf<Element>=document.querySelectorAll('#optionSpan');
let shopIcon=document.querySelector("#shopIcon") as HTMLImageElement;
let shopCart=document.querySelector('#shoppingCart') as HTMLDivElement;
let mainImg=document.querySelector("#mainImg") as HTMLImageElement;
let upperMainImg=document.querySelector("#uppermainImg") as HTMLImageElement;
let mediaUpperMainImg=document.querySelector("#mediaUpperMainImg") as HTMLImageElement;
let thumbnailImgOne=document.querySelector("#thumbnailImg1") as HTMLImageElement;
let thumbnailImgTwo=document.querySelector("#thumbnailImg2") as HTMLImageElement;
let thumbnailImgThree=document.querySelector("#thumbnailImg3") as HTMLImageElement;
let thumbnailImgFour=document.querySelector("#thumbnailImg4") as HTMLImageElement;
let upperThumbnailImgOne=document.querySelector("#upperthumbnailImg1") as HTMLImageElement;
let upperThumbnailImgTwo=document.querySelector("#upperthumbnailImg2") as HTMLImageElement;
let upperThumbnailImgThree=document.querySelector("#upperthumbnailImg3") as HTMLImageElement;
let upperThumbnailImgFour=document.querySelector("#upperthumbnailImg4") as HTMLImageElement;
let thumbnailImges:NodeListOf<Element>=document.querySelectorAll(".thumb");
let upperThumbnailImages:NodeListOf<Element>=document.querySelectorAll('.upperThumb');
let closeMark=document.querySelector("#closeImage") as HTMLOrSVGScriptElement;
let closeDiv=document.querySelector('#closeDiv') as HTMLDivElement;
let closeColor=document.querySelector("#closeColor") as HTMLOrSVGScriptElement;
let nextPic=document.querySelector('#nextPic') as HTMLDivElement;
let mediaNextPic=document.querySelector("#mediaNextPic") as HTMLDivElement;
let prevPic=document.querySelector('#prevPic') as HTMLDivElement;
let mediaPrevPic=document.querySelector("#mediaPrevPic") as HTMLDivElement;
let nextColor=document.querySelector("#nextColor") as HTMLOrSVGScriptElement;
let mediaNextColor=document.querySelector("#mediaNextColor") as HTMLOrSVGScriptElement;
let prevColor=document.querySelector("#prevColor") as HTMLOrSVGScriptElement;
let mediaPrevColor=document.querySelector("#mediaPrevColor") as HTMLOrSVGScriptElement;
let thumbnaimNum:number=1;
let minus=document.querySelector('#decreaseAmount') as HTMLOrSVGScriptElement;
let plus=document.querySelector('#increaseAmount') as HTMLOrSVGScriptElement;
let amount=document.querySelector('#itemAmount') as HTMLSpanElement;
let totalAmount:number=0;
let cartAmount=document.querySelector('#cardAmount') as HTMLDivElement;
let addToCart=document.querySelector('#addToCart') as HTMLDivElement;
let finalAmount:number=0;
let cartMenuDiv=document.querySelector('#cartMenu') as HTMLDivElement;
let coverImg=document.querySelector('#coverImage') as HTMLDivElement;
//menu options
barMenu.addEventListener("click",()=>{
    transparentBlack.classList.remove('hidden');
    transparentBlack.classList.remove('invisible');
    transparentBlack.classList.add('fixed');
    asideMenu.classList.remove("-translate-x-full");
});
closeMenu.addEventListener("click",()=>{
    //transparentBlack options depending on whether upper image is active or not
    if(transparentBlackFlag===0)
    {
        transparentBlack.classList.add('hidden');
        transparentBlack.classList.remove('invisible');
        transparentBlack.classList.remove('fixed');
    }
    else{
        transparentBlack.classList.add('fixed');
        transparentBlack.classList.remove('hidden');
        transparentBlack.classList.add('invisible');
    } 
    asideMenu.classList.add("-translate-x-full");
});
//menu border bottom line section
optionText.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
        e.parentElement!.classList.add('hover:border-orange');
    });
    e.addEventListener('mouseout',()=>{
        e.parentElement!.classList.remove('hover:border-orange');
    });
});
//shop cart menu appearence
shopIcon.addEventListener('click',()=>{
    shopCart.classList.toggle('hidden');
});
//thumbnail images sections
thumbnailImges.forEach((e)=>{
    e.addEventListener("click",()=>{
        //flag whether the upper image is active in case the website goes into media query
        transparentBlackFlag=1;
        transparentBlack.classList.remove('hidden');
        transparentBlack.classList.add('fixed');
        coverImg.classList.remove("hidden");
        coverImg.classList.add('flex');
        coverImg.classList.add('flex-col');
    });
    //close upper image
    closeMark.addEventListener('click',(e)=>{
        transparentBlackFlag=0;
        transparentBlack.classList.add('hidden');
        coverImg.classList.add('hidden');
        coverImg.classList.remove('flex');
        coverImg.classList.remove('flex-col');
        let currentPic=upperMainImg.getAttribute('src');
        mainImg.setAttribute('src',`${currentPic}`);
        mediaUpperMainImg.setAttribute('src',`${currentPic}`);
        thumbNailUpdate(thumbnaimNum);
    });
    //thumbnail work
    upperThumbnailImgOne.addEventListener("click",()=>{
        thumbnaimNum=1;
        imgSetupOne();
        let currentPic=upperMainImg.getAttribute('src');
        mediaUpperMainImg.setAttribute('src',`${currentPic}`);
    });
    upperThumbnailImgTwo.addEventListener("click",()=>{
        thumbnaimNum=2;
        imgSetupTwo();
        let currentPic=upperMainImg.getAttribute('src');
        mediaUpperMainImg.setAttribute('src',`${currentPic}`);
    });
    upperThumbnailImgThree.addEventListener("click",()=>{
        thumbnaimNum=3;
        imgSetupThree();
        let currentPic=upperMainImg.getAttribute('src');
        mediaUpperMainImg.setAttribute('src',`${currentPic}`);
    });
    upperThumbnailImgFour.addEventListener("click",()=>{
        thumbnaimNum=4;
        imgSetupFour();
        let currentPic=upperMainImg.getAttribute('src');
        mediaUpperMainImg.setAttribute('src',`${currentPic}`);
    });
});
//prev and next and close colors
nextPic.addEventListener('mouseover',()=>{
    nextColor.setAttribute('stroke','hsl(26, 100%, 55%)');
});
mediaNextPic.addEventListener('mouseover',()=>{
    mediaNextColor.setAttribute('stroke','hsl(26, 100%, 55%)');
});
nextPic.addEventListener('mouseout',()=>{
    nextColor.setAttribute('stroke','#1D2026');
});
mediaNextPic.addEventListener('mouseout',()=>{
    mediaNextColor.setAttribute('stroke','#1D2026');
});
prevPic.addEventListener('mouseover',()=>{
    prevColor.setAttribute('stroke','hsl(26, 100%, 55%)');
});
mediaPrevPic.addEventListener('mouseover',()=>{
    mediaPrevColor.setAttribute('stroke','hsl(26, 100%, 55%)');
});
prevPic.addEventListener('mouseout',()=>{
    prevColor.setAttribute('stroke','#1D2026');
});
mediaPrevPic.addEventListener('mouseout',()=>{
    mediaPrevColor.setAttribute('stroke','#1D2026');
});
closeDiv.addEventListener('mouseover',()=>{
    closeColor.setAttribute('fill','hsl(26, 100%, 55%)');
});
closeDiv.addEventListener('mouseout',()=>{
    closeColor.setAttribute('fill','#1D2026');
});
//prev and next pic update
nextPic.addEventListener('click',imgThumbUpdateInc);
mediaNextPic.addEventListener('click',mediaImgThumbUpdateInc);
prevPic.addEventListener('click',imgThumbUpdateDec);
mediaPrevPic.addEventListener('click',mediaImgThumbUpdateDec);
//item amound increase and decrease 
plus.addEventListener('click',()=>{
    totalAmount++;
    amountUpdate(totalAmount);
});
minus.addEventListener('click',()=>{
    totalAmount--;
    amountUpdate(totalAmount)
});
//adding to cart
addToCart.addEventListener('click',()=>{
    cartAmountUpdate(totalAmount);
    totalAmount=0;
    amountUpdate(totalAmount);
});
//functions
//send amound and other data to cart menu
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
//amount design update
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
    cartMenu(finalAmount);
}
//cart menu update for empty or have items
cartAmountUpdate();
function cartMenu(totalItem:number=0){
    let itemAmount:number=totalItem;
    let totalCost:number=125.00*itemAmount;
    cartMenuDiv.innerHTML=``;
    if(totalCost===0){
        cartMenuDiv.innerHTML=`Your cart is empty`;
    }else{
        cartMenuDiv.innerHTML=`
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
        document.querySelector("#trashBin")?.addEventListener('click',()=>{
            cartMenu(0);
            cartAmountUpdate(0);
        })   
    }
}
cartMenu();
//thumbnailUpdates
function thumbNailUpdate(thumbOrder:number){
    thumbnailImges.forEach((e)=>{
        e.classList.remove("opacity-50");
        e.classList.remove('rounded-xl');
        e.parentElement?.classList.remove("rounded-xl");
        e.parentElement?.classList.remove("border-4");
        e.parentElement?.classList.remove("border-orange");
    });
    thumbnailImges.forEach((e)=>{
        e.classList.add("rounded-xl");
    });
    if(thumbOrder===1){
        thumbnailImgOne.classList.add("opacity-50");
        thumbnailImgOne.classList.remove("rounded-xl");
        thumbnailImgOne.parentElement?.classList.add("rounded-xl");
        thumbnailImgOne.parentElement?.classList.add("border-4");
        thumbnailImgOne.parentElement?.classList.add("border-orange");
    }else if(thumbOrder===2){
        thumbnailImgTwo.classList.add("opacity-50");
        thumbnailImgTwo.classList.remove("rounded-xl");
        thumbnailImgTwo.parentElement?.classList.add("rounded-xl");
        thumbnailImgTwo.parentElement?.classList.add("border-4");
        thumbnailImgTwo.parentElement?.classList.add("border-orange");
    }else if(thumbOrder===3){
        thumbnailImgThree.classList.add("opacity-50");
        thumbnailImgThree.classList.remove("rounded-xl");
        thumbnailImgThree.parentElement?.classList.add("rounded-xl");
        thumbnailImgThree.parentElement?.classList.add("border-4");
        thumbnailImgThree.parentElement?.classList.add("border-orange");
    }else if(thumbOrder===4){
        thumbnailImgFour.classList.add("opacity-50");
        thumbnailImgFour.classList.remove("rounded-xl");
        thumbnailImgFour.parentElement?.classList.add("rounded-xl");
        thumbnailImgFour.parentElement?.classList.add("border-4");
        thumbnailImgFour.parentElement?.classList.add("border-orange");
    }
}
//image setup for pic and thumbnail one
function imgSetupOne()
{
    upperMainImg.setAttribute("src","images/image-product-1.jpg");
        upperThumbnailImages.forEach((e)=>{
            e.classList.remove("opacity-70");
            e.parentElement?.classList.remove("rounded-xl");
            e.parentElement?.classList.remove("border-4");
            e.parentElement?.classList.remove("border-orange");
        });
        upperThumbnailImgOne.classList.add("opacity-70");
        upperThumbnailImages.forEach((e)=>{
            e.classList.add("rounded-xl");
        })
        upperThumbnailImgOne.classList.remove("rounded-xl");
        upperThumbnailImgOne.parentElement?.classList.add("rounded-xl");
        upperThumbnailImgOne.parentElement?.classList.add("border-4");
        upperThumbnailImgOne.parentElement?.classList.add("border-orange");
}
// image setup for pic two and thumbail two
function imgSetupTwo(){
    upperMainImg.setAttribute("src","images/image-product-2.jpg");
        upperThumbnailImages.forEach((e)=>{
            e.classList.remove("opacity-70");
            e.parentElement?.classList.remove("rounded-xl");
            e.parentElement?.classList.remove("border-4");
            e.parentElement?.classList.remove("border-orange");
        });
        upperThumbnailImgTwo.classList.add("opacity-70");
        upperThumbnailImages.forEach((e)=>{
            e.classList.add("rounded-xl");
        })
        upperThumbnailImgTwo.classList.remove("rounded-xl");
        upperThumbnailImgTwo.parentElement?.classList.add("rounded-xl");
        upperThumbnailImgTwo.parentElement?.classList.add("border-4");
        upperThumbnailImgTwo.parentElement?.classList.add("border-orange");
}
// image setup for pic three and thumbail three
function imgSetupThree(){
    upperMainImg.setAttribute("src","images/image-product-3.jpg");
    upperThumbnailImages.forEach((e)=>{
        e.classList.remove("opacity-70");
        e.parentElement?.classList.remove("rounded-xl");
        e.parentElement?.classList.remove("border-4");
        e.parentElement?.classList.remove("border-orange");
    });
    upperThumbnailImgThree.classList.add("opacity-70");
    upperThumbnailImages.forEach((e)=>{
        e.classList.add("rounded-xl");
    });
    upperThumbnailImgThree.classList.remove("rounded-xl");
    upperThumbnailImgThree.parentElement?.classList.add("rounded-xl");
    upperThumbnailImgThree.parentElement?.classList.add("border-4");
    upperThumbnailImgThree.parentElement?.classList.add("border-orange");
}
// image setup for pic four and thumbail four
function imgSetupFour(){
    upperMainImg.setAttribute("src","images/image-product-4.jpg");
    upperThumbnailImages.forEach((e)=>{
        e.classList.remove("opacity-70");
        e.parentElement?.classList.remove("rounded-xl");
        e.parentElement?.classList.remove("border-4");
        e.parentElement?.classList.remove("border-orange");
    });
    upperThumbnailImgFour.classList.add("opacity-70");
    upperThumbnailImages.forEach((e)=>{
        e.classList.add("rounded-xl");
    })
    upperThumbnailImgFour.classList.remove("rounded-xl");
    upperThumbnailImgFour.parentElement?.classList.add("rounded-xl");
    upperThumbnailImgFour.parentElement?.classList.add("border-4");
    upperThumbnailImgFour.parentElement?.classList.add("border-orange");
}
//image next pic update 
function imgThumbUpdateInc()
{
    thumbnaimNum++;
    thumbnaimNum=thumbnaimNum>4? 1:thumbnaimNum;
    if(thumbnaimNum===1){
        imgSetupOne();
    }else if(thumbnaimNum===2){
        imgSetupTwo();
    }else if(thumbnaimNum===3){
        imgSetupThree();
    }else if(thumbnaimNum===4){
        imgSetupFour();
    }
}
//image next pic update for media image show section
function mediaImgThumbUpdateInc(){
    imgThumbUpdateInc();
    let currentPic=upperMainImg.getAttribute('src');
    mainImg.setAttribute('src',`${currentPic}`);
    mediaUpperMainImg.setAttribute('src',`${currentPic}`);
    thumbNailUpdate(thumbnaimNum);
}
//image prev pic update
function imgThumbUpdateDec()
{
    thumbnaimNum--;
    thumbnaimNum=thumbnaimNum<1? 4:thumbnaimNum;
    if(thumbnaimNum===1){
        imgSetupOne();
    }else if(thumbnaimNum===2){
        imgSetupTwo();
    }else if(thumbnaimNum===3){
        imgSetupThree();
    }else if(thumbnaimNum===4){
        imgSetupFour();
    }
}
//image prev pic update for media image show section
function mediaImgThumbUpdateDec(){
    imgThumbUpdateDec();
    let currentPic=upperMainImg.getAttribute('src');
    mainImg.setAttribute('src',`${currentPic}`);
    mediaUpperMainImg.setAttribute('src',`${currentPic}`);
    thumbNailUpdate(thumbnaimNum);
}