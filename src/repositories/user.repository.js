const { db } = require('../database');
const { userEntity } = require('../entities/user.entity');

const userRepository = db.getRepository(userEntity);

async function find(email) {
  const user = await userRepository.findOne({ where: { email } });

  return user;
}

async function create(userData) {
  const user = await userRepository.save(userData);

  return user;
};

module.exports = {
  find, create
}