const { WatchlistModel } = require('../model/WatchlistModel');

const getWatchlist = async (req, res) => {
  try {
    const list = await WatchlistModel.find({});
    res.json(list);
  } catch (err) {
    console.error('Error fetching watchlist:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getWatchlist };
