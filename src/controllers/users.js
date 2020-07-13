const _ = require('lodash');
const BaseRequestFormatter = require('../formatters/request/base');
const UsersDAO = require('../database/dao/users');
const usersResponseFormatter = require('../formatters/response/users');

const usersController = {
  handleGetMany: async (req, res) => {
    let response;
    const reqParams = await BaseRequestFormatter.format(req);
    response = await UsersDAO.read(reqParams);
    response = usersResponseFormatter.formatMany(response);
    return res.json(response);
  },
  handleGetOne: async (req, res) => {
    let response;
    const reqParams = await BaseRequestFormatter.format(req);
    response = await UsersDAO.read(reqParams);
    response = usersResponseFormatter.formatOne(response);
    return res.json(response);
  },
  handlePost: async (req, res) => {
    let response;
    const reqParams = await BaseRequestFormatter.format(req);
    response = await UsersDAO.create(reqParams);
    response = usersResponseFormatter.formatOne(response);
    return res.json(response);
  },
  handlePut: async (req, res) => {
    let response;
    const reqParams = await BaseRequestFormatter.format(req);
    response = await UsersDAO.update(reqParams);
    response = usersResponseFormatter.format(response);
    return res.json(response);
  },
  handleDelete: async (req, res) => {
    let response;
    const reqParams = await BaseRequestFormatter.format(req);
    response = await UsersDAO.delete(reqParams);
    response = usersResponseFormatter.format(response);
    return res.json(response);
  },
}

module.exports = usersController;
