const express = require('express');
const { createOrder, updateOrder, deleteOrder, getOrder } = require('../controllers/orderController');
const { createOrderDetail, updateOrderDetail, deleteOrderDetail, getOrderDetail } = require('../controllers/orderDetailController');

const router = express.Router();

router.post('/orders', createOrder);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);
router.get('/orders/:id', getOrder);

router.post('/order-details', createOrderDetail);
router.put('/order-details/:id', updateOrderDetail);
router.delete('/order-details/:id', deleteOrderDetail);
router.get('/order-details/:id', getOrderDetail);

module.exports = router;
