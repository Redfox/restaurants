const jwt = require('jsonwebtoken');

async function authMiddleware(req, res, next) {
  const authorization = req.headers.authorization;

  try {
    const [bearer, token] = authorization.split(' ');

    const tokenDecoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    
    req.user = tokenDecoded;
  } catch(e) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  next();
}

module.exports = {
  authMiddleware
}