const userService = require('../services/auth.service');
const user = require('../models/user.model');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { CREATED } = require('../constants/httpStatus');
const { CREATED_USER, VALID_TOKEN } = require('../constants/auth.messages');

module.exports = {

    newUser: async (req, res) => {
        let body = { ...req.body };
        const newUser = await userService.createUser(body);
        newUser.password = await newUser.encryptPassword(newUser.password);
        await newUser.save();
        //token
        const token = jwt.sign({ id: newUser._id }, config.secret, {
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
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send("The email doesn't exists");
        }

        const validPassword = await user.validatePassword(password);
        if (!validPassword) {
            return res.status(401).json({ auth: false, token: null });
        }
        //token
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 60 * 60 * 24
        })

        res.json({ auth: true, token });
    },

    getData: async (req, res) => {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json({
                auth: false,
                message: 'No token provided'
            });
        }

        const decoded = jwt.verify(token, config.secret);

        const user = await User.findById(decoded.id, { password: 0 });
        if (!user) {
            return res.status(401).send('No user found');
        }

        res.json(user);
    }
}