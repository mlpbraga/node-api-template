const { Router } = require('express');
const usersRouter = require('./users');
const sessionsRouter = require('./sessions');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

module.exports = routes;
