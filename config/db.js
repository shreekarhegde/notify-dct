const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const CONNECTION_URI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/notify' 

mongoose.connect(CONNECTION_URI, {
    useNewUrlParser: true}).then(() => {
        console.log('connected to db');
    }).catch((err) => {
        console.log(err);
    });

    module.exports = {
        mongoose
    }