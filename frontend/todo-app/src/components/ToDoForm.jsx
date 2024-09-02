import React, { useState, useEffect } from "react";

const ToDoForm = ({ addTodo, updateTodo, currentTodo, setCurrentTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentTodo) {
      setTitle(currentTodo.title);
      setDescription(currentTodo.description);
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTodo) {
      updateTodo(currentTodo._id, { title, description });
    } else {
      addTodo({ title, description });
    }
    setTitle("");
    setDescription("");
  };

  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 mb-2 border rounded text-black"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button
        type="submit"
        className="w-full p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        {currentTodo ? "Update To-Do" : "Add To-Do"}
      </button>
    </form>
  );
};

export default ToDoForm;
