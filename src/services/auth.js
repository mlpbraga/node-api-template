const { sign } = require('jsonwebtoken');
const { compare } = require('bcryptjs');
const { jwt } = require('../config');
const AppError = require('../errors/AppError');

const authenticateUserService  = {
  async execute({ email, password }) {
    // TODO find user in database
    const user = { email: 'email@teste.com', password: '1234'}
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
