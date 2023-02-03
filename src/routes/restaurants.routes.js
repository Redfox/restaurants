const { Router } = require('express');
const restaurantsController = require('../controllers/restaurants.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

const restaurantsRouter = Router();

restaurantsRouter.use(authMiddleware)

restaurantsRouter.post('/', restaurantsController.create);
restaurantsRouter.get('/', restaurantsController.find);
restaurantsRouter.post('/:id/rating', restaurantsController.rating);

module.exports = {
  restaurantsRouter
}