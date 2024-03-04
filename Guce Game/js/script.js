    let one = document.querySelector(".one")
    let oneman = document.querySelector(".oneman")
    let oneinput = document.querySelector(".oneinput")
    let onebtn = document.querySelector(".onebtn")
    let oneerr = document.querySelector(".oneerr")

    let two = document.querySelector(".two")
    let twoman = document.querySelector(".twoman")
    let twoinput = document.querySelector(".twoinput")
    let twobtn = document.querySelector(".twobtn")
    let twoerr = document.querySelector(".twoerr")
    let success = document.querySelector(".success")
    let chance = document.querySelector(".chance")


    let onevalue;
    let chancevalue = 3;


    onebtn.addEventListener("click",()=>{
        if(oneinput.value){
            if(oneinput.value -10){
                if(oneinput.value > 0 && oneinput.value < 10){
                    onevalue = oneinput.value
                    two.style.display = "block"
                    one.style.display ="none"
                }else{
                    console.log("1 theke 9 er modde jaw");
                }

            }else{
                oneerr.innerHTML = ("plese enter Number")
            }
        }else{
            oneerr.innerHTML = ("plese enter some value")
        }
    })

    twobtn.addEventListener("click",()=>{
        if(twoinput.value){
            if(twoinput.value -10){
                if(twoinput.value > 0 && twoinput.value < 10){
                    if(twoinput.value == onevalue){
                        success.innerHTML = "win"
                    }else{
                        if(chancevalue !=0){
                            chancevalue--
                            chance.innerHTML = chancevalue
                        }else{
                            success.innerHTML = "lost"
                            chance.innerHTML = ""
                        }
                    }
                }else{
                    twoerr.innerHTML = "please enter 1 to 9"
                }
            }else{
                twoerr.innerHTML = "please enter number"
            }
        }else{
            twoerr.innerHTML = "please enter some value"
        }
    })

