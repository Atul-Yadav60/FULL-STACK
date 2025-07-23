const video1= document.getElementById('projectVideo1')
const video2= document.getElementById('projectVideo2')
const video3= document.getElementById('projectVideo3')

// sidebar elements

const sideBar= document.querySelector('.sidebar')
const menu = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')

const hoverSign = document.querySelector('.hover-sign')

const videoList = [video1, video2, video3]

videoList.forEach(function(vidoe){
  video1.addEventListener('mouseover' , function(){
    vidoe.onplay()
    hoverSign.classList.add("active")
  })
  video1.addEventListener("mouseout", function(){
    vidoe.onpause();
    hoverSign.classList.remove("active")
  })
})

// sideBar elements

menu.addEventListener("click", function(){
  sideBar.classList.remove("close-sidebar")
  sideBar.classList.add("open-sidebar")
})

closeIcon.addEventListener("click", function(){
  sideBar.classList.remove("open-sidebar")
  sideBar.classList.add("close-sidebar")
})

