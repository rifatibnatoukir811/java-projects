let body = document.querySelector("body")
let main = document.querySelector(".main")

body.addEventListener("click",(e)=>{

    if(e.target.classList[0] == "btn"){
        main.classList.add("main2")
        main.innerHTML = `<div><img src=${e.target.dataset.url} alt=""/><i>X</i></div>`
    }else{
        main.classList.remove("main2")
        main.innerHTML = ""
    }
    
    
})