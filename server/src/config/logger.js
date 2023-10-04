const { createLogger, transports, format } = require("winston");
const {combine, timestamp, printf,  json, simple, colorize, label} = format;

const printFormat = printf(({ timestamp, label, level, message }) => { 
    return `${ timestamp } [${ label }] ${level} : ${ message }`;
})

const printLogFormat = combine(
    label({
        label: "node.js"
    }),
    colorize(),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat,
);

const logger = createLogger({
    transports: [ 
        new transports.Console({
            level: "info",
            format: printLogFormat,
        })
    ],
});

module.exports = logger;