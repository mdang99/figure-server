const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    categoriesID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Assuming you have a Category model
        required: true,
    },
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
