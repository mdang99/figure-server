const Order = require('../models/Order');
const OrderDetail = require('../models/OrderDetail');

// **Order Service Functions**

const createOrder = async (orderData) => {
  try {
    const newOrder = await Order.create(orderData);
    return newOrder;
  } catch (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }
};

const updateOrder = async (id, orderData) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, orderData, { new: true });
    if (!updatedOrder) throw new Error('Order not found');
    return updatedOrder;
  } catch (error) {
    throw new Error(`Error updating order: ${error.message}`);
  }
};

const deleteOrder = async (id) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) throw new Error('Order not found');
    await OrderDetail.deleteMany({ order_id: id }); // Xóa chi tiết đơn hàng liên quan
    return deletedOrder;
  } catch (error) {
    throw new Error(`Error deleting order: ${error.message}`);
  }
};

const getOrder = async (id) => {
  try {
    const order = await Order.findById(id).populate('order_details');
    if (!order) throw new Error('Order not found');
    return order;
  } catch (error) {
    throw new Error(`Error fetching order: ${error.message}`);
  }
};

// **OrderDetail Service Functions**

const createOrderDetail = async (orderDetailData) => {
  try {
    const newOrderDetail = await OrderDetail.create(orderDetailData);
    return newOrderDetail;
  } catch (error) {
    throw new Error(`Error creating order detail: ${error.message}`);
  }
};

const updateOrderDetail = async (id, orderDetailData) => {
  try {
    const updatedOrderDetail = await OrderDetail.findByIdAndUpdate(id, orderDetailData, { new: true });
    if (!updatedOrderDetail) throw new Error('Order detail not found');
    return updatedOrderDetail;
  } catch (error) {
    throw new Error(`Error updating order detail: ${error.message}`);
  }
};

const deleteOrderDetail = async (id) => {
  try {
    const deletedOrderDetail = await OrderDetail.findByIdAndDelete(id);
    if (!deletedOrderDetail) throw new Error('Order detail not found');
    return deletedOrderDetail;
  } catch (error) {
    throw new Error(`Error deleting order detail: ${error.message}`);
  }
};

const getOrderDetail = async (id) => {
  try {
    const orderDetail = await OrderDetail.findById(id);
    if (!orderDetail) throw new Error('Order detail not found');
    return orderDetail;
  } catch (error) {
    throw new Error(`Error fetching order detail: ${error.message}`);
  }
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  createOrderDetail,
  updateOrderDetail,
  deleteOrderDetail,
  getOrderDetail
};
