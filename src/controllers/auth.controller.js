const authService = require('../services/auth.service');

async function signup(req, res) {
  const { email, name, password } = req.body;

  const { user, message } = await authService.signup({ email, name, password });

  if (message) {
    return res.status(400).json({ message });
  }

  return res.status(201).json(user);
}

async function login(req, res) {
  const { email, password } = req.body;

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