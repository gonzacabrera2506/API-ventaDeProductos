const router= require('express-promise-router')();

const {
    newUser,
    login
    
} = require('../controllers/auth.controller');


//new user
router.post('/', newUser);

//login
router.post('/login', login);


module.exports = router;