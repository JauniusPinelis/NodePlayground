const express = require('express');
require('./db/mongoose');
const userRouter = require('./src/routers/user');
const taskRouter = require('./src/routers/task');

require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })

console.log(`node environment: ${process.env.NODE_ENV}`)

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;