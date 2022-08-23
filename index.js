const winston = require('winston');
require("dotenv").config();
const express = require('express');

const app = express();
app.use(express.json());

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

app.listen(8000, ()=> winston.info('listening on port 4000'));

