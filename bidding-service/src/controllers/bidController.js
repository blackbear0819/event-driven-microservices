const Bid = require('../models/Bid');
const { processInventoryEvent } = require('../services/consumer');

exports.placeBid = async (req, res) => {
    const { productId, username, bidAmount } = req.body;
    const newBid = new Bid({ productId, username, bidAmount });
    await newBid.save();
    res.status(201).json(newBid);
};

exports.getAllBids = async (req, res) => {
    const bids = await Bid.find();
    res.status(200).json(bids);
};