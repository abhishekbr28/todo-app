//import the model
const Todo = require("../model/Todo");

//define route handler

exports.createTodo = async (req, res) => {
  try {
    //extract title and description from request body
    const { title, description } = req.body;

    //create a new todo object and insert in db
    const response = await Todo.create({ title, description });

    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully !",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
