const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const tasks = require('./routes/tasks');

app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
