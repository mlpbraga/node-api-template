const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const AppError = require('./errors/AppError');
const winston = require('winston');
const expressWinston = require('express-winston');
const router = require('./routes');
const { format } = require('winston');
const app = express();

app.use(express.json());
app.use(cors());
app.use(expressWinston.logger({
  transports: [new winston.transports.Console({
    format: format.combine(
      format.timestamp(),
      format.colorize(),
      format.simple(),
    ),
  })],
  metaField: null, //this causes the metadata to be stored at the root of the log entry
  responseField: null, // this prevents the response from being included in the metadata (including body and status code)
  requestWhitelist: ['headers', 'query', 'body'],  //these are not included in the standard StackDriver httpRequest
  responseWhitelist: ['body'], // this populates the res.body so we can get the response size (not required)
}));

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

app.listen(3232, () => {
  console.log('🚀 Server started on port 3232!');
});
