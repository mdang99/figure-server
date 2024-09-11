const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  customer_address: { type: String, required: true },
  customer_email: { type: String, required: true },
  customer_phone: { type: String, required: true },
  create_date: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
});

module.exports = mongoose.model('Order', orderSchema);
