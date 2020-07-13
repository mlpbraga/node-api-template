const _ = require('lodash');

const usersResponseFormatter = {
  formatOne: (response) => ({
      id: response.id,
      name: response.name,
      phone: response.phone,
      email: response.email,
      username: response.username,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
  }),
  formatMany: (response) => {
    return response.map(user => ({
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }));
  }
}

module.exports = usersResponseFormatter;
