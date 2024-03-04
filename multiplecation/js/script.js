let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let err = document.querySelector(".err")

btn.addEventListener("click",()=>{
    if(input.value){
        for(i=1; i<=10; i++){
            document.write(input.value + " X " + i + " = " + input.value * i + "<br>")
        }
    }
})