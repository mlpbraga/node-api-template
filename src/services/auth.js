const { sign } = require('jsonwebtoken');
const { db } = require('../database/models');
const { compare } = require('bcryptjs');
const { jwt } = require('../config');
const AppError = require('../errors/AppError');

const { users } = db;

const authenticateUserService  = {
  async execute({ email, password }) {
    const user = await users.findOne({where: { email }});
    if (!user) {
      throw new AppError('Invalid email.', 401);
    }
    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new AppError('Invalid password.', 401);
    }
    const token = sign({}, jwt.secret, {
      subject: user.id,
      expiresIn: jwt.expiresIn,
    });
    return {
      user,
      token,
    };
  }
}

module.exports = authenticateUserService;
