const restaurantRepository = require('../repositories/restaurants.repository');

async function getRestaurant(id) {
  const restaurant = await restaurantRepository.findOne(id);

  return restaurant
}

async function find() {
  const restaurants = await restaurantRepository.find();

  return restaurants;
}

async function create(restaurant, userId) {
  const restaurantCreated = await restaurantRepository.create({ ...restaurant, user: { id: userId }});

  return {
    restaurant: restaurantCreated
  };
}

module.exports = {
  create,
  getRestaurant,
  find
}