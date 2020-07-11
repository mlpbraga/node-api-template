const _ = require('lodash');

const BaseRequestFormatter = {
  async format(reqParams) {
    const { body, query, user } = reqParams;
    const formattedParams = {
      ...body,
      ...query,
      ...user,
    };
    return formattedParams;
  },
};

module.exports = BaseRequestFormatter;
