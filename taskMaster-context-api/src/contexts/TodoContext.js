import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoTitle: " TODO Title",
      completed: false,
    },
  ],
  addTodo: (newTodo) => {},
  updateTodo: (id, updatedTodo) => {},
  deleteTodo: (id) => {},
  toggleCompleteTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};

