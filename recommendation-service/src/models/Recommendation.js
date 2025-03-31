const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
    productId: String,
    optimalBid: Number
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);