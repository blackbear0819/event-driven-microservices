const Recommendation = require('../models/Recommendation');

exports.getRecommendations = async (req, res) => {
    const recommendations = await Recommendation.find();
    res.status(200).json(recommendations);
};