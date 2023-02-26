const User = require('../models/user.model');

module.exports = {

    createUser: async (body) => {
        return new User(
            body
        );
    }
};