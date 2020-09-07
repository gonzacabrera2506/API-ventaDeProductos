const Article = require('../models/article');
const Provider = require('../models/provider');

module.exports = {

    index: async (req, res) => {
        const articles = await Article.find({});
        res.status(200).json(articles);
    },

    newArticle: async (req, res) => {
        const { providerId } = req.params;
        const provider = await Provider.findById(providerId);
        if(res.status(500)) {
            console.log('provider not found');
        } else {
            const newArticle = new Article(req.body);
            const article = await newArticle.save();
            res.status(200).json(article);    
        }
    },

    getArticle: async (req, res) => {
        const { articleId } = req.params;
        const article = await Provider.findById(articleId);
        res.status(200).json(article);
    },

    updateArticle: async (req, res) => {
        const { articleId } = req.params;
        const newArticle = req.body;
        const oldArticle = await Article.findById(articleId, newArticle);
        res.status(200).json({success: true});
    }

}