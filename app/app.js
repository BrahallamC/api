const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Product = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/product', Product);

module.exports = app