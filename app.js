require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const shoppingListRouter = require('./routes/shoppingList');

const app = express();

require('./config/database')

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/shoppingList', shoppingListRouter);




module.exports = app;
