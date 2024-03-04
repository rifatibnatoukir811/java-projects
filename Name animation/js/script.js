let type = document.querySelector(".type");
let typedtext = type.innerHTML;
let typedArr = typedtext.split("");
type.innerHTML = "";
let typing = 0;


function typejs(){
    if(typing < typedtext.length){
        type.innerHTML += typedtext.charAt(typing)
        typing++;
        typedArr = typedtext.split("");
    }else{
        typedArr.pop("")
        type.innerHTML = typedArr.join("")
        if(typedArr.length == 0){
            typing = 0
        }
    }
}


setInterval(()=>{
    typejs()
}, 100)