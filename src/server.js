const express = require('express');
const { db } = require('./database')
const { routes } = require('./routes');

db.initialize();

const app = express();

app.use(express.json());

app.use(routes);

module.exports = {
  app
}