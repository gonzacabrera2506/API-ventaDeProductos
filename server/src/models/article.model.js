const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name: String,
    trademark: String,
    unitPrice: String,
    category: String,
    eanCode: String,
    provider: [{
        type: Schema.Types.ObjectId,
        ref: 'provider'
    }]
});

module.exports = mongoose.model('article', articleSchema);