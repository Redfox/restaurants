const authService = require('../services/auth.service');
const { signupValidate, loginValidate } = require('../validators/auth.validator');

async function signup(req, res) {
  const { email, name, password } = req.body;

  const validation = await signupValidate(req.body);

  if(validation.errors) {
    return res.status(422).json({ errors: validation.errors })
  }

  const { user, message } = await authService.signup({ email, name, password });

  if (message) {
    return res.status(400).json({ message });
  }

  return res.status(201).json(user);
}

async function login(req, res) {
  const { email, password } = req.body;

  const validation = await loginValidate(req.body);

  if(validation.errors) {
    return res.status(422).json({ errors: validation.errors })
  }

  const { token, message } = await authService.login({ email, password });

  if(message) {
    return res.status(401).json({ message });
  }

  return res.status(200).json({ token });
}

module.exports = {
  signup,
  login
}