const { Router } = require('express');
const routeCache = require('route-cache');

const usersController = require('../../controllers/users');
const ensureAuthenticated = require('../../middlewares/ensureAuthenticated');

const usersRouter = Router();

usersRouter.post('/', usersController.handlePost);
usersRouter.get(
  '/',
  routeCache.cacheSeconds(process.env.ROUTE_CACHE_SECONDS),
  usersController.handleGet
);
usersRouter.put('/', ensureAuthenticated, usersController.handlePut);
usersRouter.patch('/', ensureAuthenticated, usersController.handlePatch);
usersRouter.delete('/', ensureAuthenticated, usersController.handleDelete);

module.exports = usersRouter;
