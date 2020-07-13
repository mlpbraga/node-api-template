const { db } = require('../models');
const { hash } = require('bcryptjs');
const AppError = require('../../errors/AppError');

const { users } = db;

const UsersDAO = {
  create: async (params) => {
    try {
      const { password } = params;
      const newPassword = await hash(password, 8);
      const newUser = await users.create({
        ...params,
        password: newPassword,
      });
      return newUser;
    } catch (error) {
      console.error(error)
    }
  },
  read: async (params) => {
    const {
      id,
      name,
    } = params;
    let foundUser;
    if (id) foundUser = await users.findOne({ where: { id } });
    else if (name) foundUser = await users.findAll({ where: { name } });
    else foundUser = await users.findAll();
    console.log(foundUser)
    return foundUser;
  },
  update: async (params) => {
    try {
      const newPassword = await hash(password, 8);
      const newUser = await users.create({
        ...params,
        password: newPassword,
      });
      return newUser;
    } catch (error) {
      console.error(error)
    }
  },
};

module.exports = UsersDAO;
