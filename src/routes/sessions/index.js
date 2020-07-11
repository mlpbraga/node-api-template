const { Router } = require('express');

const AuthenticateUserService = require('../../services/auth');

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  return res.json({});
});

module.exports = sessionsRouter;
