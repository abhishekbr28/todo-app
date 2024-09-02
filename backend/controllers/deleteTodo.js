const Todo = require("../model/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      message: `data with ${id} deleted succesfully !`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "unable to delete data",
    });
  }
};
