let input = document.querySelector(".input")
let add = document.querySelector(".add")
let upd = document.querySelector(".upd")
let list = document.querySelector(".list")
let data = [];
let id;

add.addEventListener("click",()=>{
    if(input.value){
        data.push(input.value)
        addtodo()
        console.log(data);
        input.value = ""
    }
})
upd.addEventListener("click",()=>{
    data[id] = input.value
    addtodo()
    input.value = ""
})
function addtodo(){
    list.innerHTML = ""
    data.map((item)=>{
        list.innerHTML += `<li>${item}<button class="delete">delete</button><button class="edit">edit</button></li>`
    })

    let deletesingle = document.querySelectorAll(".delete")
    let edit = document.querySelectorAll(".edit")
    let deleteArr = Array.from(deletesingle)
    let editsingle = Array.from(edit)

    
    deleteArr.map((itemd, index)=>{
        itemd.addEventListener("click",()=>{
            data.splice(index, 1)
            addtodo()
        })
    })
    editsingle.map((iteme, index)=>{
        iteme.addEventListener("click",()=>{
            input.value = data[index]
            id = index
            addtodo()
        })
    })
}
