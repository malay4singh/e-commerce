const mongoose = require('mongoose');

const Product = mongoose.model('Product', mongoose.Schema({
        title: String,
        category: String,
        price: Number,
        desc: String,
        img: {
                type: String,
                default: `https://placehold.co/600x400.png`
        }
        
}))

module.exports = Product;