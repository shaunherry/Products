// const { request, response } = require('express');
const { request, response } = require('express');
const { Product } = require('../models/products.models');


module.exports.index = (request, response) => {
    Product.find()
            .then(product =>{
                response.json({results:product})
            })
            .catch(err => {
                console.log(err);
            })
}

module.exports.createProduct = (request, response) => {
    const { name, price } = request.body;
    Product.create({
        name,
        price
    })
    .then(product => response.json(product))
    .catch(err => response.json(err));
}

module.exports.findAll = (req, res)  => {
    Product.find()
            .then(product =>{
                res.json({results:product})
            })
            .catch(err => console.log(err));
}

module.exports.findOne = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(error => response.json(error))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    .then(updatedProduct => response.json(updatedProduct))
    .catch(error => response.json(error))
}