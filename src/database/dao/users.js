const { db } = require('../models');

const { users } = db;

const UsersDAO = {
  create: async (params) => {
    const newUser = await users.create(params);
    return newUser;
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
};

module.exports = UsersDAO;
