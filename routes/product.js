const express = require('express');
const Product = require('../models/Product')

const router = express.Router();

router.get('/', async(req, res) =>{
        const products = await Product.find({});
        console.log(products);
        res.render('products.ejs', {products});
})

module.exports = router;