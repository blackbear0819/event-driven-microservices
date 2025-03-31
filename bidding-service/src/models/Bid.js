const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
    productId: String,
    username: String,
    bidAmount: Number
});

module.exports = mongoose.model('Bid', BidSchema);