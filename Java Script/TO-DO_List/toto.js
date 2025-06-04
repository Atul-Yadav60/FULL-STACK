const todoinput = document.getElementById("todo-input");
const addtaskbuttion=document.getElementById("add-task-button");
const todoList=document.getElementById("todo-lis");

let tasks = []

addtaskbuttion.addEventListener('click',()=>{
   const tasktext= todoinput.value.trim()
   if(tasktext==="")return;

   const newtask = {
    id:Date.now(),
    text: tasktext,
    completed:false
   }
   tasks.push(newtask)
   todoinput.value=""//clear input
   console.log(tasks)

})