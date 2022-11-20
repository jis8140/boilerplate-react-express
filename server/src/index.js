const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.json());

app.listen(port, () => { });