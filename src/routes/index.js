const { Router } = require('express');
const { authRouter } = require('./auth.routes');
const { restaurantsRouter } = require('./restaurants.routes');

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Api rodando')
});

routes.use('/auth', authRouter);
routes.use('/restaurants', restaurantsRouter);

module.exports = {
  routes
}