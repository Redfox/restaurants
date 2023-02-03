const { db } = require('../database');
const { restaurantEntity } = require('../entities');

const restaurantRepository = db.getRepository(restaurantEntity);

async function findOne(id) {
  const restaurant = await restaurantRepository.findOne({ where: { id } });

  return restaurant;
}

async function find() {
  const restaurants = await restaurantRepository.find({ relations: ['ratings'] });

  return restaurants;
}

async function create(restaurant) {
  const restaurantCreated = await restaurantRepository.save(restaurant);

  return restaurantCreated;
}

async function update(id, userId, restaurant) {
  await restaurantRepository.update({ id, user: { id: userId } }, restaurant);

  return findOne(id);
}

async function deleteTask(id, userId) {
  await restaurantRepository.delete({ where: { id, user: { id: userId }} })
}

module.exports = {
  create,
  find,
  findOne,
  update,
  deleteTask
}