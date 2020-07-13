const _ = require('lodash');

const BaseRequestFormatter = {
  async format(reqParams) {
    const { body, query, user, params } = reqParams;
    const formattedParams = {
      ...body,
      ...query,
      ...user,
      ...params,
    };
    return formattedParams;
  },
};

module.exports = BaseRequestFormatter;
