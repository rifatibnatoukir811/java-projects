let back =document.querySelector(".back")
let menu_bg = document.querySelector(".menu_bg")

let scrollToTop = ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

back.addEventListener("click",()=>{
    scrollToTop()
})

window.addEventListener("scroll",()=>{
    let scrolling = window.scrollY
    if(scrolling > 100){
        back.style.display = "block"
    }else{
        back.style.display = "none"
    }
    if(scrolling > 50){
        menu_bg.classList.add("bg")
    }else{
        menu_bg.classList.remove("bg")
    }
})