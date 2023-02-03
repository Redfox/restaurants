const restaurantRepository = require('../repositories/restaurants.repository');
const ratingRepository = require('../repositories/rating.repository');

async function getRestaurant(id) {
  const restaurant = await restaurantRepository.findOne(id);

  return restaurant
}

async function find() {
  const restaurants = await restaurantRepository.find();

  const restaurantsPrepared = restaurants.map((restaurant) => {
    const rating = restaurant.ratings.reduce((a, b) => a + b.stars, 0) / restaurant.ratings.length;
    
    return {
      ...restaurant,
      rating
    }
  })

  return restaurantsPrepared;
}

async function create(restaurant, userId) {
  const restaurantCreated = await restaurantRepository.create({ ...restaurant, user: { id: userId }});

  return {
    restaurant: restaurantCreated
  };
}

async function rating({ userId, restaurantId, stars, description }) {
  const restaurant = await restaurantRepository.findOne(restaurantId);

  if(!restaurant) {
    return { message: 'Restaurant not found' }
  }

  await ratingRepository.create({ stars, description, user: { id: userId }, restaurant: { id: restaurantId } });

  return {}
}

module.exports = {
  create,
  getRestaurant,
  find,
  rating
}