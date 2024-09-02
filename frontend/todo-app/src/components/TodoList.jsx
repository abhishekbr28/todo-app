import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { format } from "date-fns";

const ToDoList = ({ todos, setCurrentTodo, deleteTodo }) => {
  return (
    <div className="mt-4">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo._id}
            className="flex justify-between items-center bg-gray-100 rounded p-3 mb-2 shadow-sm"
          >
            <div>
              <h2 className="text-lg font-bold text-red-400">{todo.title}</h2>
              <p className="text-gray-600">{todo.description}</p>
              <p className="text-sm text-gray-500">
                Created: {format(new Date(todo.createdAt), "PPpp")}
              </p>
              <p className="text-sm text-gray-500">
                Updated: {format(new Date(todo.updatedAt), "PPpp")}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentTodo(todo)}
                className="text-yellow-500 hover:text-yellow-700"
              >
                <MdEdit size={20} />
              </button>
              <button
                onClick={() => deleteTodo(todo._id)}
                className="text-red-500 hover:text-red-700"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">
          No todos available. Add a new one!
        </p>
      )}
    </div>
  );
};

export default ToDoList;
