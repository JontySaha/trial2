const mongoose = require('mongoose');
const subscriberSchema = new mongoose.Schema({
    //_id:{
    //    type: Number,
    //    required: true
    //},
    name: {
        type: String,
        required: true
    },
    subscriberToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: String,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);