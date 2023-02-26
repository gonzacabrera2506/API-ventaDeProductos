const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String
});

//method for encrypt password
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}
//method for validate password
userSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password)
};

module.exports = mongoose.model('user', userSchema);