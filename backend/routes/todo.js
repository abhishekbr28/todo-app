// backend/routes/todo.js
const express = require("express");
const { createTodo } = require("../controllers/createTodo");
const { getTodos, getTodosById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

const router = express.Router();

// Route for creating a new todo
router.post("/", createTodo);

// Route for getting all todos
router.get("/", getTodos);

// Route for getting a specific todo by ID
router.get("/:id", getTodosById);

// Route for updating a specific todo by ID
router.put("/:id", updateTodo);

// Route for deleting a specific todo by ID
router.delete("/:id", deleteTodo);

module.exports = router;
