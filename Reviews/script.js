document.body.style.backgroundColor='yellow'
let names=['Vedant','Vanshay','William','Dustin','Mike'];
let reviews=['Grace was not only knowledgeable and organized, but she was encouraging and reassuring! [Training] exceeded my expectations! Thanks to your audience/purpose-focused process, I now see how self-centered, time-consuming, and often frustrating my writing approach has been. Thank you!','Thank you so much for your guidance throughout the course. I have tons of notes and I am truly thankful ... I will add the resources to my notes and continue to brush up on these every day!','Thank you to you and your team for outstanding service and support in strengthening our global teamS capabilities. Take a bow','I will apply what I have learned in everyday business and in my personal life The instructor was very passionate about what was presented, which helps the audience retain and learn.','Very useful class! I will apply all of the planning strategies to my email immediately.'];
let title=document.getElementById('card-title')
let content=document.getElementById('card-text')
// let count=0
const increment=()=>{
    let x=Math.floor(Math.random()*4)
    return x
}
let button=document.getElementById('btn')

button.addEventListener('click',()=>{
    let num=increment();
    title.textContent=names[num];
    content.textContent=reviews[num];
})
