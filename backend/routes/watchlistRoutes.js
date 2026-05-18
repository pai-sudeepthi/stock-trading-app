const express = require('express');
const router = express.Router();
const { getWatchlist } = require('../controllers/watchlistController');

router.get('/', getWatchlist);

module.exports = router;
