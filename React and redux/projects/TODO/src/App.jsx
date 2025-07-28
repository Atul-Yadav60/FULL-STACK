import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo"; // also fixed casing here
import TodoItems from "./Components/TodoItems";

import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "4/10/24",
    },
    {
      name: "Go to College",
      date: "4/10/24",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
