const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = {

    newUser: async (req, res) => {
        const { username, password, email } = req.body;
        const user = new User ({
            username,
            password,
            email
        });
        user.password = await user.encryptPassword(user.password);
        await user.save();

        //genero token
        const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        })

        res.status(200).json({auth: true, token});
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({email: email});
        if(!user) {
            return res.status(404).send("The email doesn't exists");
        }

        const validPassword = await user.validatePassword(password);
        if(!validPassword) {
           return res.status(401).json({auth: false, token: null});
        }
        //genero token
        const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        })

        res.json({auth: true, token});
    },

    getData: async (req, res) => {
        const token = req.headers['x-access-token'];
        if(!token) {
            return res.status(401).json({
                auth: false,
                message: 'No token provided'
            });
        } 

        const decoded = jwt.verify(token, config.secret);

        const user = await User.findById(decoded.id, { password: 0 });
        if(!user) {
            return res.status(401).send('No user found');
        }

        res.json(user);
    }
}