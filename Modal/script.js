let showContent=document.getElementById('btn')
let closeContent=document.getElementById('close')
let content=document.getElementById('detail')
showContent.addEventListener('click',()=>{
    content.classList.toggle('hide')
})
closeContent.addEventListener('click',()=>{
    content.classList.add('hide')
})
