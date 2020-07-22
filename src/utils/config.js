const config = () => {
  let _conf = {};

  const isValid = (conf) => {
    if (!(conf instanceof Object && conf.constructor === Object &&
          conf.ticket && conf.instance)) {
      return false;
    }
    _conf = conf;
    return true;
  };

  const getConfigOptions = () => {
    console.error({
      'ticket': 'get-ticket-from-raygun-dashboard',
      'instance': 'url-of-self_hosted-raygun-instance'
    });
  };

  const get = () => _conf;

  return {isValid, getConfigOptions, get};
};

module.exports = config();