const express = require('express');
const morgan = require('morgan');
const studentRouter = require('./routes/studentRoute');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/student', studentRouter);

module.exports = app;
