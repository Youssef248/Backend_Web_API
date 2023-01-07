const express = require('express');
const connection = require("./connection");
const productRoute = require('./routes/product');
const employeeRoute = require('./routes/employee');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/product',productRoute);
app.use('/employee',employeeRoute);

module.exports = app;