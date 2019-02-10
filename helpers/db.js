const mongoose = require('mongoose');

const config = require('../config');

mongoose.connect(process.env.MONGODB_URI || config.MONGO_URI, {useNewUrlParser: true, useCreateIndex: true});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../core/models/user')
}