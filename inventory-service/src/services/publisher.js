const express = require('express');
const { addInventory, getAllInventories } = require('../controllers/inventoryController');

const router = express.Router();

router.post('/', addInventory);
router.get('/', getAllInventories);

module.exports = router;