const User = require('../models/user.model');

module.exports = {

    createUser: async (body) => {
        return new User(
            body
        );
    },

    login: async (email) => {
        const user = await User.findOne({ email });
        return user;
    }
};