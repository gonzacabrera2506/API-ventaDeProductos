const router= require('express-promise-router')();

const {
    newUser,
    login,
    getData

} = require('../controllers/auth');

//verbos http

//nuevo usuario
router.post('/', newUser);

//logueo
router.post('/login', login);

//obtener info
router.get('/', getData);


module.exports = router;