// backend/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todo");
const dbConnect = require("./config/database");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to the database
dbConnect();

// Mount the todo API routes
app.use("/api/v1/todos", todoRoutes); // Changed to a more descriptive route

// Default route
app.get("/", (req, res) => {
  res.send(`<h1> Home Page </h1>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
