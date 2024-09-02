import React, { useState, useEffect } from "react";
import axios from "axios";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  // Fetch all todos from backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/todos");
      setTodos(response.data.data);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  };

  // Add a new todo
  const addTodo = async (todo) => {
    try {
      await axios.post("http://localhost:3000/api/v1/todos", todo);
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo", error);
    }
  };

  // Update an existing todo
  const updateTodo = async (id, updatedTodo) => {
    try {
      await axios.put(`http://localhost:3000/api/v1/todos/${id}`, updatedTodo);
      fetchTodos();
      setCurrentTodo(null);
    } catch (error) {
      console.error("Error updating todo", error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          To-Do List
        </h1>
        <ToDoForm
          addTodo={addTodo}
          updateTodo={updateTodo}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
        <ToDoList
          todos={todos}
          setCurrentTodo={setCurrentTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
