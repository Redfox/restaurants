const { db } = require('../database');
const { ratingEntity } = require('../entities');

const ratingRepository = db.getRepository(ratingEntity);

async function create(rating) {
  const ratingCreated = await ratingRepository.save(rating);

  return ratingCreated;
}

module.exports = {
  create
}