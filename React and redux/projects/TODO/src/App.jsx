import AppName from "./Components/AppName";

import AddTodo from "./Components/addtodo";


import Todoitem1 from "./Components/Todoitem1";

import Todoitem2 from "./Components/Totoitem2";

import "./App.css";


function App() {
  

  return (
    <center class="todo-container">
      <AppName></AppName>

      <div className="items">
        <AddTodo></AddTodo>
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </center>
  );
}

export default App
