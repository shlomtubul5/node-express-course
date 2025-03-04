const Task = require('../models/Task');
const getAllTasks = (req, res) => {
  res.send('all items');
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
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
  updateTask,
};
