const broker = require('./broker');

function errorHandler(error, req, res, next) {
  broker.error(error);
  next(error);
};

module.exports = {errorHandler};