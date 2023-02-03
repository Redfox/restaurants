const restaurantsService = require('../services/restaurants.service');
const { createRestaurantValidate } = require('../validators/restaurant.validator');

async function find(req, res) {
  const restaurants = await restaurantsService.find();

  return res.status(200).json({ restaurants })
}

async function create(req, res) {
  const body = req.body;
  const user = req.user;
  
  const validation = await createRestaurantValidate(body);

  if(validation.errors) {
    return res.status(422).json({ errors: validation.errors })
  }

  const { restaurant, message } = await restaurantsService.create(body, user.id);

  if(message) {
     return res.status(400).json({ message })
  }

  res.status(200).json(restaurant)
}


module.exports = {
  create,
  find
}