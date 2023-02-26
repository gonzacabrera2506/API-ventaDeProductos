const router= require('express-promise-router')();

const {
    newUser,
    login,
    getData

} = require('../controllers/auth.controller');

//verbos http

//nuevo usuario
router.post('/', newUser);

//login
//router.post('/login', login);

//get data
//router.get('/', getData);


module.exports = router;