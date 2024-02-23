var tl =  gsap.timeline();

tl.from("nav",{
    y : -100,
    opacity : 0,
}).from(".page1 h1",{
    opacity : 0,
    y : -1000,
    delay : 0.2,
    duration : 1
}).from(".page1 h2",{
    opacity : 0,
    x : -1000,
    delay : 0.2,
}).from(".page1 p",{
    opacity : 0,
    x : 1000,
    delay : 0.2,
}).to(".page1 .arrow-down",{
    opacity : 1,
    duration : 2
})