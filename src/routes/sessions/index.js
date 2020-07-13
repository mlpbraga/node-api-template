const { Router } = require('express');

const authenticateUserService = require('../../services/auth');

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const { user, token } = await authenticateUserService.execute({
    email,
    password,
  });
  delete user.password;
  return res.json({ user, token });
});

module.exports = sessionsRouter;
