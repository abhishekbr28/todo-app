const Todo = require("../model/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      message: "fetched entire Todos data",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};

// exports.getTodosById = async (req, res) => {
//   try {
//     //extract todo items basis on id
//     const id = req.params.id;
//     const todo = await Todo.findById({ _id: id });

//     //data for given id not found then

//     if (!todo) {
//       return res.status(404).json({
//         success: false,
//         message: "no data found with given id",
//       });
//     }

//     //data for given id found

//     res.status(200).json({
//       success: true,
//       data: todo,
//       message: `data with id: ${id} is fetched Successfully !`,
//     });
//   } catch (err) {
//     console.error(err),
//       res.status(500).json({
//         success: false,
//         error: err.message,
//         message: "server error",
//       });
//   }
// };
