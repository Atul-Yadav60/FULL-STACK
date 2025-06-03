console.log("Hello From Script")
console.log(document.getElementsByTagName("h1"))
// DOM SECTION
////////////////////////////////////////////////////////////////////////////


// Example 1
// grab even first
let hold=document.getElementById("changeTextButton").addEventListener('click',function (){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The Paragraph is chnaged"
})
console.log(hold)

// example 2 


document.getElementById("highlightFirstCity").addEventListener('click', function(){
   let citiesList= document.getElementById("citiesList");
   citiesList.firstElementChild.classList.add("highlight");
});

// Example 3

document.getElementById("changeorder").addEventListener('click',function(){
    document.getElementById("coffeetype");
    coffeetype.textContent = "Espresso";
    coffeetype.style.backgroundColor = "red"
    coffeetype.style.padding = "5px"
});

// Example 4
document.getElementById("addNewItem").addEventListener('click', function(){
   let newitem= document.createElement('li')
   newitem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newitem);

});

//  Example 5
document.getElementById("reemoveLastTask").addEventListener('click', function(){
    let taskLists = document.getElementById("taskList");
    taskLists.lastElementChild.remove();
});


// Example 6
document.getElementById("clickmebuttion").addEventListener('dblclick',function(){
    alert("Chai code");
});

//example 7
document.getElementById("teaList").addEventListener('click',function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert("You selected: "+ event.target.textContent)
    }
})

// example 8
document.getElementById("feedbackform").addEventListener('submit', function(events){
    events.preventDefault();
    let feedback = document.getElementById("feedbackinput").value;
    console.log("feedback")
    document.getElementById("feedbackdisplay").textContent = `eedback is : ${feedback}`
    feedbackdisplay.style.backgroundColor='green'
    feedbackdisplay.style.size = '25px'

})

// example 9

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domstatus').textContent="DOM Fully Loaded"
})


// example 10
document.getElementById("toggleHighlight").addEventListener('click', function()
{
   let texts=document.getElementById("descriptiontext");
   //texts.classList.add('highlight')
   texts.classList.toggle('highlight')
   texts.style.textTransform='uppercase';

});