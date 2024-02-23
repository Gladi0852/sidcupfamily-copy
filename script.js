gsap.registerPlugin(ScrollTrigger);
var crsr = document.querySelector(".crsr");
var crsr_blr = document.querySelector(".crsr-blr");
document.addEventListener("mousemove",(e)=>{
    crsr.style.left = e.x + "px"
    crsr.style.top = e.y + "px"
    crsr_blr.style.left = e.x + "px"
    crsr_blr.style.top = e.y + "px"
});


var nav = document.querySelectorAll("nav h4");
nav.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        crsr.style.width = "60px"
        crsr.style.height = "60px"
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "2px solid #fff"
    })
    e.addEventListener("mouseleave",()=>{
        crsr.style.width = "25px"
        crsr.style.height = "25px"
        crsr.style.backgroundColor = "#95c11e"
        crsr.style.border = "none"
    })
})

gsap.to("nav",{
    backgroundColor: "#000",
    height: "-=15",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
});

gsap.to("main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "main",
        scroller : "body",
        // markers : true,
        start : "top -30%",
        end : "top -80%",
        scrub : 1,
    }
});

var photo = document.querySelector("#food-sec .photo-cont img");
let photo_arr = ["./Assests/food1.avif", "./Assests/food2.avif", "./Assests/food3.avif"];
// let cir_arr = ["",".cir2",".cir3"];
let cir1 = document.querySelector(".cir1");
let cir2 = document.querySelector(".cir2");
let cir3 = document.querySelector(".cir3");

let in_cir1 = document.querySelector(".in-cir1");
let in_cir2 = document.querySelector(".in-cir2");
let in_cir3 = document.querySelector(".in-cir3");

let cir_arr = [cir1,cir2,cir3];
let in_cir_arr = [in_cir1,in_cir2,in_cir3];


let index = 0;
// setInterval(()=>{
//     index++;
//     photo.src = photo_arr[index];

//     if(index==0){
//         cir_arr[cir_arr.length-1].classList.remove("cir-bg");
//         in_cir_arr[in_cir_arr.length-1].classList.remove("in-cir-bg");
//     }
//     else{
//         cir_arr[index-1].classList.remove("cir-bg");
//         in_cir_arr[index-1].classList.remove("in-cir-bg");
//     }
//     cir_arr[index].classList.add("cir-bg");
//     in_cir_arr[index].classList.add("in-cir-bg");

//     if(index==photo_arr.length-1){
//         index = -1;
//     }
// }, 5000);

function change(){
    index++;
    photo.src = photo_arr[index];
    
    if(index==0){
        cir_arr[cir_arr.length-1].classList.remove("cir-bg");
        in_cir_arr[in_cir_arr.length-1].classList.remove("in-cir-bg");
    }
    else{
        cir_arr[index-1].classList.remove("cir-bg");
        in_cir_arr[index-1].classList.remove("in-cir-bg");
    }
    cir_arr[index].classList.add("cir-bg");
    in_cir_arr[index].classList.add("in-cir-bg");
    
    if(index==photo_arr.length-1){
        index = -1;
    }
}

setInterval(change,2000);

gsap.to(".qus img",{
    y : 100,
    x : 80,
    scale : 0.8,
    scrollTrigger : {
        trigger : ".qu",
        // markers : true,
        start : "20% 60%",
        end : "bottom 70%",
        scrub : 2
    }
});

gsap.to(".que img",{
    y : -100,
    x : -80,
    scale : 0.8,
    scrollTrigger : {
        trigger : ".qu",
        // markers : true,
        start : "20% 60%",
        end : "bottom 70%",
        scrub : 2
    }
});

gsap.to("#page4 h1",{
    y : -50,
    scrollTrigger : {
        trigger : "#page4 h1",
        scroller : "body",
        // markers : true,
        start : "-10% 75%",
        end : "bottom 70%",
        scrub : 2
    }
});

gsap.from("#about-us .photo, #about-us .about",{
    y : 100,
    opacity : 0,
    stagger : 1,
    scrollTrigger : {
        trigger : "#about-us",
        scroller : "body",
        scrub : 3,
        // markers : true,
        start : "top 70%",
        end : "50% 60%",
    }
});

gsap.from("#cards .card",{
    opacity : 0,
    scale : 0.5,
    stagger : 0.2,
    scrollTrigger : {
        trigger : "#cards",
        scroller : "body",
        scrub : 2,
        // markers : true,
        start : "top 70%",
        end : "50% 50%",
    }
});
gsap.from("#grd-box h2",{
    opacity : 0,
    scale : 0,
    stagger : 0.2,
    scrollTrigger : {
        trigger : "#grd-box",
        scroller : "body",
        scrub : 2,
        // markers : true,
        start : "top 80%",
        end : "50% 60%",
    }
});
gsap.from("#food-sec .desc h1, #food-sec .desc p, #food-sec .desc button",{
    opacity : 0,
    x : 500,
    stagger : 0.3,
    scrollTrigger : {
        trigger : "#food-sec",
        scroller : "body",
        scrub : 2,
        // markers : true,
        start : "top 70%",
        end : "bottom 80%",
    }
});

gsap.from("#food-sec .photo-cont",{
    opacity : 0,
    x : -500,
    stagger : 0.3,
    scrollTrigger : {
        trigger : "#food-sec",
        scroller : "body",
        scrub : 2,
        // markers : true,
        start : "top 70%",
        end : "bottom 80%",
    }
});
gsap.from("#quote .qu h4",{
    opacity : 0,
    scale : 0,
    stagger : 0.3,
    scrollTrigger : {
        trigger : "#quote .qu h4",
        scroller : "body",
        scrub : 2,
        // markers : true,
        start : "top 90%",
        end : "bottom 80%",
    }
});


gsap.from("footer .logo img",{
    x : -300,
    opacity : 0,
    scrollTrigger : {
        trigger : "footer",
        scroller : "body",
        scrub : 1,
        // markers : true,
        start : "top 90%",
        end : "bottom bottom",
    }
});
gsap.from("footer .link1, footer .link2, footer .address",{
    opacity : 0,
    rotate : -180,
    stagger : 0.1,
    scrollTrigger : {
        trigger : "footer",
        scroller : "body",
        scrub : 1,
        // markers : true,
        start : "top 90%",
        end : "bottom bottom",
    }
});