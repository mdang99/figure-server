const Product = require('../models/productModel'); // Assuming you have a Product model

const createProduct = async (productData) => {
    const newProduct = new Product(productData);
    await newProduct.save();
    return newProduct;
};

const deleteProduct = async (id) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product not found');
    }
    await Product.findByIdAndDelete(id);
};

const updateProduct = async (id, productData) => {
    const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });
    if (!updatedProduct) {
        throw new Error('Product not found');
    }
    return updatedProduct;
};

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct
};
