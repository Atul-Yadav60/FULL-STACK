document.addEventListener('DOMContentLoaded',()=>{
  // first it load my dom content
  const todoinput = document.getElementById("todo-input");
  const addtaskbuttion = document.getElementById("add-task-button");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => rendertasks(task));

  addtaskbuttion.addEventListener("click", () => {
    const tasktext = todoinput.value.trim();
    if (tasktext === "") return;

    const newtask = {
      id: Date.now(),
      text: tasktext,
      completed: false,
    };
    tasks.push(newtask);
    savetasks();
    rendertasks(newtask);
    todoinput.value = ""; //clear input
    console.log(tasks);
  });

  // Handeling Local Storage and dom events

  function savetasks() {
    // Local storage
    localStorage.setItem("tasks", JSON.stringify(tasks)); // setitem use to store
  }

  // Fuction for reading from Local storage
  function rendertasks(task)
  {
   const li = document.createElement('li')
   li.setAttribute('data-id' , task.id)

   if(task.completed) li.classList.add('completed')
   li.innerHTML = `
   <span>${task.text}</span>
   <button>Delete</button>
   `;
   li.addEventListener('click' ,()=>{
      if(e.target.tagName === 'BUTTON') return ;
      task.completed = !task.completed
      li.classList.toggle("completed")
      savetasks();
   })
   li.querySelector('button').addEventListener('click',(e)=>{
      e.stopPropagation()
      tasks = tasks.filter(t=> t.id !== task.id)
      li.remove();
      savetasks();
   })


   todoList.appendChild(li);
  }

  // event bubbling and  CURD operation
});

