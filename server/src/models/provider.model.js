const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new Schema({
    name: String,
    address: String,
    phoneNumber: String,
    email: String,
});

module.exports = mongoose.model('provider', providerSchema);