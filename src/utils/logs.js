const logs = () => {
    const logs = [];

    const add = (log) => {
        if (typeof log !== 'string') {
            return;
        }

        if(log.length >= 1000){
            log = log.slice(0, 990) + '...';
        }

        logs.push({ timestamp: Math.floor(Date.now() / 1000), type: 'log', log });

        if (logs.length > 10) {
            logs.shift();
        }
    };

    const get = () => logs;

    return { add, get };
};

module.exports = logs();