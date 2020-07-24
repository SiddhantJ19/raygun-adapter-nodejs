const superagent = require('superagent');

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

  const serveTrack = (event, eventType) =>{
    const url = "http://localhost:8000";
    return superagent.post(url + '/logging/' + eventType)
      .retry(2)
      .send(event)
      .set('Content-Type', 'application/json');
  }

  return { isValid, getConfigOptions, get, serveTrack};
};

module.exports = config();