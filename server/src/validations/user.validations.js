const { check, validationResult } = require('express-validator');
const statusCode = require('../constants/httpStatus');
const message = require('../constants/auth.messages');

const error = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(statusCode.UNPROCESSABLE_ENTITY).json(message.UNPROCESSABLE_ENTITY);
    }
    next();
};

const userSignInIsValid = [
    check('username')
        .notEmpty()
        .isLength({ min: 7 })
        .isLength({ max: 25 })
        .bail()
        .withMessage('Invalid username')
        .bail(),
    check('password')
        .notEmpty()
        .isLength({ min: 6 })
        .isLength({ max: 9 })
        .bail()
        .withMessage('Invalid password')
        .bail(),
    check('email')
        .notEmpty()
        .isEmail()
        .bail()
        .withMessage('Invalid email')
        .bail(),
    error
];

const userLoginIsValid = [
    check('email')
        .notEmpty()
        .isEmail()
        .bail()
        .withMessage('Invalid email')
        .bail(),
    check('password')
        .notEmpty()
        .isLength({ min: 6 })
        .isLength({ max: 9 })
        .bail()
        .withMessage('Invalid password')
        .bail(),
    error
];

module.exports = { userSignInIsValid, userLoginIsValid }; 