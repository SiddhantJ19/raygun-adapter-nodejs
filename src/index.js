const config = require('./utils/config')
const evntListeners = require('./utils/eventlisteners');
const interceptors = require('./utils/interceptors');
const {errorHandler} = require('./utils/middleware');

const init = (conf) => {
  if (config.isValid(conf)) {
    evntListeners.enable();
    interceptors.enable();
  } else {
    console.log(
        'Wrong Config for Raygun adapter. Follow this for configurations');
    config.getConfigOptions();
  }
};

module.exports = {
  init,
  errorHandler
};