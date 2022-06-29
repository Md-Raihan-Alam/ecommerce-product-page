let barMenu=document.querySelector('#barMenu') as HTMLOrSVGScriptElement;
let closeMenu=document.querySelector("#closeMenu") as HTMLOrSVGScriptElement;
let asideMenu=document.querySelector("#asideMenu") as HTMLElement;
barMenu.addEventListener("click",()=>{
    asideMenu.classList.remove("-translate-x-full");
});
closeMenu.addEventListener("click",()=>{
    asideMenu.classList.add("-translate-x-full");
})