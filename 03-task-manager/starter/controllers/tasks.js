const getAllTasks = (req, res) => {
  res.send('all items');
};
const getTask = (req, res) => {
  res.send('get a Single Task');
};
const createTask = (req, res) => {
  res.send('create Task');
};
const deleteTask = (req, res) => {
  res.send('delete Task');
};
const updateTask = (req, res) => {
  res.send('update Task');
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
};
