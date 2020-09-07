const router = require('express-promise-router')();

const {
    index,
    newProvider,
    getProvider,
    updateProvider,
    deleteProvider

} = require('../controllers/provider');

router.get('/', index);
router.post('/', newProvider);

router.get('/:providerId', getProvider);
router.put('/:providerId', updateProvider);
router.delete('/:providerId', deleteProvider);


module.exports = router;