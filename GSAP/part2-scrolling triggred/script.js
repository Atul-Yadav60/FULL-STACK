

gsap.from(".page1  #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    borderRadius:"100%"
    
})

gsap.from(".page2  #box", {
  scale: 0,
  //delay: 1,
  duration: 2,
  rotate: 360,
  borderRadius: "100%",
  //scrollTrigger:".page2 #box"
  scrollTrigger:{
    trigger:".page2 #box",
    scroller:"body",
    //markers:true,
    start:"top 60%"

  }
})

gsap.from(".page3  #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  borderRadius: "100%",
  //scrollTrigger: ".page3 #box"
  scrollTrigger: {
    trigger: ".page3 #box",
    scroller: "body",
    markers: true,
    start: "top 90%",
    end:"top 60%",
   // scrub:true   // jaise jaise scroole karenge waise waise animation hoga
   scrub:10,
   pin:true,  // pin property lagatey wakt hamesh parent ko trigger kerte hai
   // ager pin lagate hai to page ruk jaye ga after complitting scroll triger then page move hoga
 
  },
});


gsap.from(".page2 h2",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:".page2 h2",
        scroller:"body",
       // markers:true,
        start:"top 50%"
    }
})

gsap.from(".page2 h3", {
  opacity: 0,
  duration:2,
  x: -500,
  scrollTrigger: {
    trigger: ".page2 h3",
    scroller: "body",
  //  markers: true,
    start: "top 50%",
  },
});