let input = document.querySelector(".input")
let btn = document.querySelector(".start")

btn.addEventListener("click",(e)=>{
    if(input.type == "password"){
        input.type = "text"
        e.target.className = "fa-solid fa-eye"
    }else{
        input.type = "password"
        e.target.className = "fa-solid fa-eye-slash"
    }
})