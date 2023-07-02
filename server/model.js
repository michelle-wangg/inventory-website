const mongoose = require('mongoose');

// create schema
const itemsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    unitsRemaining: Number,
    imageURL: String
});

// create model
const Item = mongoose.model('Item', itemsSchema);

module.exports = Item;
