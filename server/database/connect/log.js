const fs = require("fs");
const appRoot = require("app-root-path")

var accessLogStream = fs.createWriteStream(
    `${appRoot}/server/log/access.log`, 
    { flags: 'a' }
);

module.exports = accessLogStream;