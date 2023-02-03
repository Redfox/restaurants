const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Api rodando')
});

module.exports = {
  routes
}