const { verify } = require('jsonwebtoken');
const config = require('../config');
const AppError = require('../errors/AppError');

const { jwt } = config;

const ensureAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new AppError('JWT token is missing.', 401);

  const [, token] = authHeader.split(' ');
  try {
    const decoded = verify(token, jwt.secret);
    const { sub } = decoded;

    req.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT token.', 401);
  }
};

module.exports = ensureAuthenticated;
