function breakText() {
    let h1 = document.querySelector("h1");

    let h1Text = h1.textContent;

    let splittedText = h1Text.split("");
    let halfValue  = Math.floor(splittedText.length/2);

    let clutter = "";

    splittedText.forEach(function (e,idx) {
        if(idx<halfValue){
            clutter += `<span class="a">${e}</span>`
            
        }else{
            clutter += `<span class="b">${e}</span>`
            
        }
    });

    h1.innerHTML = clutter;
}

breakText();

gsap.from(".a",{
    y:50,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15
})
gsap.from(".b",{
    y:50,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.15
})
