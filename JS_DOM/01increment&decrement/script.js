const h1 = document.querySelector("h1");
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('#btn');
let i = 0;
btn.addEventListener('click',()=>{
    i++;
    h1.innerHTML = i;
})
btn2.addEventListener('click',()=>{
    i--;
    h1.innerHTML = i;
})


