// create element
// append child

let btn = document.querySelector("button");
let main = document.querySelector('main');

btn.addEventListener("click",function(){
    let div = document.createElement("div");

    let x = Math.floor(Math.random()*100+1);
    let y = Math.floor(Math.random()*100+1);
    let r = Math.floor(Math.random()*360+1);
    let red = Math.floor(Math.random()*255+1);
    let green = Math.floor(Math.random()*255+1);
    let blue = Math.floor(Math.random()*255+1);
    
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.position = "absolute"
    div.style.left = x+'%';
    div.style.top = y+'%';
    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
    div.style.rotate = r+'deg';


    main.appendChild(div);
})