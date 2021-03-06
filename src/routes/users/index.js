const { Router } = require('express');
const routeCache = require('route-cache');

const usersController = require('../../controllers/users');
const ensureAuthenticated = require('../../middlewares/ensureAuthenticated');

const usersRouter = Router();

usersRouter.post('/', usersController.handlePost);
usersRouter.get(
  '/:id',
  routeCache.cacheSeconds(process.env.ROUTE_CACHE_SECONDS),
  usersController.handleGetOne
);
usersRouter.get(
  '/',
  routeCache.cacheSeconds(process.env.ROUTE_CACHE_SECONDS),
  usersController.handleGetMany
);
usersRouter.put('/:id', ensureAuthenticated, usersController.handlePut);
usersRouter.delete('/:id', ensureAuthenticated, usersController.handleDelete);

module.exports = usersRouter;
