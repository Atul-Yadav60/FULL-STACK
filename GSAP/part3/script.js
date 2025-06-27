//const { default: gsap } = require("gsap");  

var intialPath = `M 10 100 Q 250 100 490 100`

var finalPath = `M 10 100 Q 250 100 490 100`

var string = document.querySelector("#string")

string.addEventListener("mousemove" , function(dets){
    let path = `M 10 100 Q 250 ${dets.y} 490 100`;
    gsap.to("svg path",{
        attr:{d:path},  // attr means atribute hum d change ker rahe hai
        duration:0.2,
        ease:"power2.out"

    })
})

 string.addEventListener("mouseleave", function () {
   gsap.to("svg path",{
    attr:{d:finalPath},
    duration:0.5,
    ease:"bounce"
   })
 });
// gsap.to("svg" , {

// })