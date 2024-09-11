const productService = require('../services/productService');

const addProduct = async (req, res) => {
    try {
        const { categoriesID, name, title, description, qty, price, image } = req.body;
        const productData = { categoriesID, name, title, description, qty, price, image };
        const newProduct = await productService.createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await productService.deleteProduct(id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoriesID, name, title, description, qty, price, image } = req.body;
        const productData = { categoriesID, name, title, description, qty, price, image };
        const updatedProduct = await productService.updateProduct(id, productData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addProduct,
    deleteProduct,
    updateProduct
};
