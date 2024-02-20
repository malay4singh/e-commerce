const express = require('express');
const Product = require('../models/Product')

const router = express.Router();

router.get('/', async (req, res) =>{
        const products = await Product.find({});
        res.render('products/products', {products});
})

router.get('/:id', async (req, res)=>{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.render('products/show', {product});
})

router.get('/:id/edit', async (req, res)=>{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.render('products/edit', {product});
})

router.put('/:id', async (req, res)=>{
        const {id} = req.params;
        const {title, price, desc, img} = req.body;
        const existingProduct = await Product.findById(id);

        if(title){
                existingProduct.title = title;
        }
        if(price){
                existingProduct.price = price;
        }
        if(desc){
                existingProduct.desc = desc;
        }
        if(img){
                existingProduct.img = img;
        }

        await existingProduct.save();

        res.redirect(`/e-commerce/products/${id}`);
})

router.delete('/:id', async (req, res)=>{
        const {id} = req.params;
        await Product.findByIdAndDelete(id);

        res.redirect('/e-commerce/products');
})

module.exports = router;