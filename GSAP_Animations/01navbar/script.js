let tl = gsap.timeline()

tl.from("h2",{
    opacity:0,
    y:-50,
    duration:1,
    delay:0.5,

})

tl.from("h4",{
    opacity:0,
    y:-30,
    duration:1,
    delay:0.5,
    stagger:0.3
})

tl.from("h1",{
    opacity:0,
    y:30,
    duration:1,
    delay:0.5,
    scale:0.2
})


