import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TaskList = ({ todo }) => {
  const [tasks, setTasks] = useState();
  const [isTaskEditable, setIsTaskEditable] = useState(false);
  const [todoMessages, setTodoMessages] = useState(todo.todo)

  const { updateTodo, deleteTodo, toggleCompleteTodo } = useTodo;

  return (
    <ul className="space-y-3">
      <li className="flex items-center bg-gray-50 p-3 rounded shadow-sm ">
        <input
          type="checkbox"
          className="mr-3 form-checkbox h-5 w-5 text-indigo-600 "
        />
        <input
          type="text"
          className="flex-grow text-gray-800 bg-gray-50 focus:outline-none "
        />
        {/* Complete Todo App UI*/}
        <button className="text-blue-500 hover:text-blue-600 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button className="text-red-500 hover:text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
      {/*Add `line-through` class for strikethrough when a task is `checked` */}
      <li className="flex items-center bg-gray-50 p-3 rounded shadow-sm">
        <input
          type="checkbox"
          className="mr-3 form-checkbox h-5 w-5 text-indigo-600"
          checked
        />
        <span className="flex-grow text-gray-800 line-through">
          Design mockup
        </span>
        <button className="text-blue-500 hover:text-blue-600 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button className="text-red-500 hover:text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default TaskList;
