const {schema} = require('mongoose');

const WatchlistSchema = new schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

module.exports = {WatchlistSchema};