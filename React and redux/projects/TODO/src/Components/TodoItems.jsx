import Todoitem from "./Todoitem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items">
      {todoItems.map((item, index) => (
        <Todoitem key={index} todoName={item.name} todoDate={item.date} />
      ))}
    </div>
  );
};

export default TodoItems;
