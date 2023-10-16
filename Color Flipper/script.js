let button = document.getElementById("btn")
const randomGen=()=>{
    let randomNum=Math.floor(Math.random()*4);
    return randomNum;
}
let colors=['red','green','blue','yellow']
button.addEventListener('click',()=>{
    let x=randomGen();
    document.body.style.backgroundColor=colors[x]
})