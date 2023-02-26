const Provider = require('../models/provider.model');

module.exports = {

    index: async (req, res) => {
        const providers = await Provider.find({});
        res.status(200).json(providers);
    },

    newProvider: async (req, res) => {
        const newProvider = new Provider(req.body);
        const provider = await newProvider.save();
        res.status(200).json(provider);
    },

    getProvider: async (req, res) => {
        const { providerId } = req.params;
        const provider = await Provider.findById(providerId);
        res.status(200).json(provider);
    },

    ///PROBAR EN POSTMAN
    updateProvider: async (req, res) => {
        const { providerId } = req.params;
        const newProvider = req.body;
        const oldProvider = await Provider.findByIdAndUpdate(providerId, newProvider);
        res.status(200).json({success: true});
    },

    deleteProvider : async (req, res) => {
        const { providerId } = req.params;
        const oldProvider = await Provider.findByIdAndRemove(providerId);
        res.status(200).json({success: true});
    }
};