const router = require('express-promise-router')();

const {
    index,
    newArticle,
    getArticle,
    updateArticle


} = require('../controllers/article');

router.get('/', index);
router.post('/', newArticle);

router.get('/articleId', getArticle);
router.put('/:articleId', updateArticle);

module.exports = router;