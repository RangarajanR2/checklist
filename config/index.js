let jsonConf = require('./config.json')


let config   = {
    PORT    : process.env.PORT || jsonConf.PORT,
    MONGO   : process.env.MONGO || jsonConf.MONGO
}

module.exports = config