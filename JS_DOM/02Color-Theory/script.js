let box = document.querySelector('#box');
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    let red = Math.floor(Math.random()*255+1);
    let green = Math.floor(Math.random()*255+1);
    let blue = Math.floor(Math.random()*255+1);

    box.style.backgroundColor = `rgb(${red},${green},${blue})`;
    box.innerHTML = `rgb(${red},${green},${blue})`;
})



