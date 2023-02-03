const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

async function signup({ name, email, password }) {
  const userExists = await userRepository.find(email);

  if(userExists) {
    return { message: 'User email already exists' }; 
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = await userRepository.create({ name, email, password: passwordHash })
  
  delete user.password;

  return {
    user
  };
}

async function login({ email, password }) {
  const user = await userRepository.find(email);

  if(!user) {
    return { message: 'Email or Password invalid!' }
  }

  const passwordIsEqual = bcrypt.compare(password, user.password);

  if(!passwordIsEqual) {
    return { message: 'Email or Password invalid!' }
  }

  const token = jwt.sign({
    id: user.id,
    name: user.name,
    email: user.email
  }, process.env.JWT_PRIVATE_KEY)

  return { token }
}

module.exports = {
  signup,
  login
}