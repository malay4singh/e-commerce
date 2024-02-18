const express = require('express');
const mongoose = require('mongoose');

connectDB(`mongodb+srv://malay4singh:DLmtMbBjtXbk0SKw@e-commerce.zdizx0e.mongodb.net/?retryWrites=true&w=majority`);

const ecommerce = express.Router();

ecommerce.get('/', (req, res)=>{
        res.render('home.ejs');
})

const productRouter = require('./routes/product');

ecommerce.use('/products', productRouter);

module.exports = ecommerce;




// -----------------------------------functions
async function connectDB(url){
        await mongoose.connect(url);
        console.log("DB Connected");
}