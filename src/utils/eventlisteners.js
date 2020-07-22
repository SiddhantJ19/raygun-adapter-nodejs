const process = require('process');
const broker = require('./broker');

const enable = () => {
  process.on('uncaughtException', async (error) => {
    await broker.error(error);
    console.error(error);
    process.exit(1);
  });

  process.on('unhandledRejection', async (error) => {
    await broker.error(error);
    console.error(error);
    process.exit(1);
  });
};

module.exports = {enable};