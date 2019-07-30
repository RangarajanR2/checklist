let jsonConf = require('./config.json')


let config   = {
    PORT : process.env.PORT || jsonConf.PORT
}

module.exports = config