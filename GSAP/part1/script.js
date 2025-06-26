// gsap.to(" #box ",{
//     x:1000,
//     duration: 2,
//     delay: 1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:0.5
    
    
// })
// // gsap.to means intial to final
// // gsap.from final to intial

// gsap.from("#box2" ,{
//     x:300,
//     y:-400,
//     duration:4,
//     delay:0.5
// })

// gsap.from("h1",{
//     color:"red",
//     duration:1,
//     delay:1,
//     y:20,
//     opacity:1,
//     stagger:1
// })

// gsap.to("#box3",{
//     x:1000,
//     duration:2,
//     rotate:360,
//     repeat:10, // means 11 time 1 time to yohi chalegaa
//    // repeat:-1, // infinite rotation
//     yoyo:true
// })


// full time line

// gsap.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1,
//     borderRadius:"50%"

// })


// gsap.to("#box2",{
//     x:1500,
//     backgoundColor:"yellow",
//     duration:1.5,
//     delay:2.5,
//     borderRadius:"50%"
    
// })


// gsap.to("#box3",{
//     x:1500,
//     backgoundColor:"yellow",
//     duration:1.5,
//     delay:4,
//     borderRadius:"50%"
    
// })


// gsap.to("#box4",{
//     x:1500,
//     backgoundColor:"yellow",
//     duration:1.5,
//     delay:5.5,
//     borderRadius:"50%"
    
// })

// now doing timeline for easy timeline calculation


var tl=gsap.timeline()

tl.to("#box1",{
    x:1000,
    duration:2,
    rotate:360,
    delay:1,
    borderRadius:"50%",
    backgroundColor:"silver"
})

tl.to("#box2", {
  x: 1000,
  duration: 2,
  rotate: 360,
  borderRadius: "50%",
  backgroundColor:"orange"
});

tl.to("#box3", {
  x: 1000,
  duration: 2,
  rotate: 360,
  borderRadius: "50%",
  backgroundColor:"green"
});

tl.to("#box4", {
  x: 1000,
  duration: 2,
  rotate: 360,
  borderRadius: "50%",
  backgroundColor:"red"
});
  

