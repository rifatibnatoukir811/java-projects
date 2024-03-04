let counter = document.querySelectorAll(".counter")
let countArr = Array.from(counter)

countArr.map((item)=>{
    let count = 0;
    function abc(){
        count++
        if(count <= item.dataset.number){
            item.innerHTML = count
        }
    }
    let stop = setInterval(()=>{
            abc()
        }, item.dataset.speed / item.dataset.number)
})