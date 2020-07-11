const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const AppError = require('./errors/AppError');
const winston = require('winston');
const expressWinston = require('express-winston');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());
app.use(router)

// error handler
app.use((error, req, res, _) => {
  if (error instanceof AppError)
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  console.error(error);
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.use(expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
}));

app.listen(3232, () => {
  console.log('🚀 Server started on port 3232!');
});
