const authRepository = require('../repository/auth.repository');

module.exports = {

    createUser: body => authRepository.createUser(body),
    login: email => authRepository.login(email),
};