const userService = require('../services/auth.service');
const jwt = require('jsonwebtoken');
const { CREATED, NOT_FOUND } = require('../constants/httpStatus');
const { CREATED_USER, VALID_TOKEN, ERROR_LOGIN, LOGIN } = require('../constants/auth.messages');
require('dotenv').config();

module.exports = {

    newUser: async (req, res) => {
        let body = { ...req.body };
        const newUser = await userService.createUser(body);
        newUser.password = await newUser.encryptPassword(newUser.password);
        await newUser.save();
        //token
        const token = jwt.sign({ id: newUser._id }, process.env.ACCESS_SECRET, {
            expiresIn: 60 * 60 * 24
        })
        res.status(CREATED).json({
            msg: CREATED_USER,
            auth: VALID_TOKEN,
            token: token
        });
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const user = await userService.login(email);
        if (!user) return res.status(NOT_FOUND).send(ERROR_LOGIN);
        const validPassword = await user.validatePassword(password);
        if (!validPassword) return res.status(NOT_FOUND).json({ auth: ERROR_LOGIN, token: null });
        //token
        const token = jwt.sign({ id: user._id }, process.env.ACCESS_SECRET, {
            expiresIn: 60 * 60 * 24
        })
        res.json({
            msg: LOGIN,
            auth: VALID_TOKEN,
            token: token
        });
    }
}