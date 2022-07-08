let barMenu=document.querySelector('#barMenu') as HTMLOrSVGScriptElement;
let closeMenu=document.querySelector("#closeMenu") as HTMLOrSVGScriptElement;
let asideMenu=document.querySelector("#asideMenu") as HTMLElement;
let optionText:NodeListOf<Element>=document.querySelectorAll('#optionSpan');
// let optionParent:NodeListOf<Element>=document.querySelectorAll('#optionsDiv');
barMenu.addEventListener("click",()=>{
    asideMenu.classList.remove("-translate-x-full");
});
closeMenu.addEventListener("click",()=>{
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