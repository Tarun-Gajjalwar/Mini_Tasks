let main = document.querySelector("#main");

let cursor = document.querySelector("#cursor");

let img = document.querySelector("#image");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out",
    })

});

img.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:5,
        backgroundColor:"rgba(240, 248, 255, 0.557)",
    })
})
img.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"",

    })
})
