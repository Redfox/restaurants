const { Router } = require('express');
const { authRouter } = require('./auth.routes');

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Api rodando')
});

routes.use('/auth', authRouter);

module.exports = {
  routes
}