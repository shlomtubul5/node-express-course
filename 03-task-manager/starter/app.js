const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./DB/connect');
const tasks = require('./routes/tasks');

app.use(express.json());
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};


start();
