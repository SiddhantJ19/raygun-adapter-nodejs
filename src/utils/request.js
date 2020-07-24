const superagent = require('superagent');
const config = require('./config');

const request = (event, eventype) => {
    const url = config.get().instance;
  return superagent.post(url + '/logging/' + eventype)
      .retry(2)
      .send(event)
      .set('Content-Type', 'application/json');
};

module.exports = {request};