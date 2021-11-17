const Product = require("../models/product.model");

const addNewProduct = (req, res) => {
    Product.create(req.body)
        // .then((newProduct) => res.json({product: newProduct}))
        .then((newProduct) => res.json(newProduct))
        .catch((err) => res.status(400).json(err));
        // .catch((err) => console.log(err));
};

const getAllProducts = (req, res) => {
    Product.find({})
        .then((allProducts) => res.json(allProducts))
        .catch((err) => res.status(400).json(err));
        // .catch((err) => console.log(err));
};

const getOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => res.status(400).json(err));
        // .catch((err) => console.log(err));
};

const updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {
            new: true,
            runValidators: true
        })
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => res.status(400).json(err));
        // .catch((err) => console.log(err));
};

const deleteProduct = (req, res) => {
    Product.deleteOne(req.params._id)
        .then((deletedId) => res.json(deletedId))
        .catch((err) => res.status(400).json(err));
        // .catch((err) => console.log(err));
};

module.exports = {
    addNewProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
};