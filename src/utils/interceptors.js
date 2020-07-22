const logs = require('./logs');

const enable = () => {
    const originalStdoutWrite = process.stdout.write.bind(process.stdout);

    process.stdout.write = (chunk, encoding, callback) => {
        if (typeof chunk === 'string') {
            logs.add(chunk);
        }

        return originalStdoutWrite(chunk, encoding, callback);
    };
};

module.exports = { enable };