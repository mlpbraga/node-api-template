const { Router } = require('express');

const ensureAuthenticated = require('../../middlewares/ensureAuthenticated');

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
  return res.json({});
});
usersRouter.put('/', async (req, res) => {
  return res.json({});
});
usersRouter.patch('/', async (req, res) => {
  return res.json({});
});
usersRouter.post('/', async (req, res) => {
  return res.json({});
});
usersRouter.delete('/', async (req, res) => {
  return res.json({});
});

module.exports = usersRouter;
