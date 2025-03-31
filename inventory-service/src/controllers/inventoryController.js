const Inventory = require('../models/Inventory');
const { publishInventoryEvent } = require('../services/publisher');

exports.addInventory = async (req, res) => {
    const { productName, availableStock } = req.body;
    const inventoryItem = new Inventory({ productName, availableStock });
    
    await inventoryItem.save();
    publishInventoryEvent(inventoryItem); // Send event to RabbitMQ
    res.status(201).json(inventoryItem);
};

exports.getAllInventories = async (req, res) => {
    const inventories = await Inventory.find();
    res.status(200).json(inventories);
};