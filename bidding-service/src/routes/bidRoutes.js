const express = require('express');
const { placeBid, getAllBids } = require('../controllers/bidController');

const router = express.Router();

router.post('/', placeBid);
router.get('/', getAllBids);

module.exports = router;