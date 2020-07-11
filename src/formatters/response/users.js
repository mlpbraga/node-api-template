const _ = require('lodash');

const usersResponseFormatter = {
  format: (response) => {
    let formattedResponse;
    if (typeof response === Object) {
      formattedResponse = {
        id: response.id,
        name: response.name,
        phone: response.phone,
        email: response.email,
        username: response.username,
        createdAt: response.createdAt,
        updatedAt: response.updatedAt,
      }
    } else {
      formattedResponse = response.map(user => ({
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }));
    }
    return formattedResponse;
  }
}

module.exports = usersResponseFormatter;
