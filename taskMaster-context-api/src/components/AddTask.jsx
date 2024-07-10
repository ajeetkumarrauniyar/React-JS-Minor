import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const AddTask = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const addTask = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todoTitle: todo, completed: false });
    setTodo("");
  };

  return (
    <form className="mb-6" onSubmit={addTask()}>
      <div className="flex">
        <input
          type="text"
          placeholder="Add a new task"
          className="flex-grow px-4 py-2 text-gray-700 bg-gray-200 rounded-l focus:outline-none focus:bg-white"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-r transition duration-200"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;
