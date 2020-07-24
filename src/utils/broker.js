const config = require('./config');
const {request} = require('./request');
const logs = require('./logs');

const broker = () => {
  const error = async ({message, stack, name}) => {
    try {
      if (!(stack && config.get().ticket && config.get().ticket)) {
        return;
      }

      const timestamp = Math.floor(Date.now() / 1000);
      const ticket = config.get().ticket;
      const capturedLogs = logs.get();

      const event = {
        ticket,
        timestamp,
        message,
        stacktrace: stack,
        capturedLogs,
        type: name || 'error'
      };

      await request(event, 'error');

    } catch (error) {
      console.error(
          'Failed to register event with raygun with error\n\n', error);
    }
    try {
      await config.serveTrack(event, "error");
    } catch (error) { }
  };
  return {
    error
  }
};

module.exports = broker();