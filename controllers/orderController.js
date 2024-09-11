const orderService = require('../services/orderService');

// **Order API Handlers**

const createOrder = async (req, res) => {
  const { customer_name, customer_address, customer_email, customer_phone, create_date, status, order_details } = req.body;

  try {
    const newOrder = await orderService.createOrder({
      customer_name,
      customer_address,
      customer_email,
      customer_phone,
      create_date,
      status
    });

    const orderDetailsWithOrderId = order_details.map(detail => ({
      ...detail,
      order_id: newOrder._id,
    }));
    await orderService.createOrderDetail(orderDetailsWithOrderId);

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { customer_name, customer_address, customer_email, customer_phone, status } = req.body;

  try {
    const updatedOrder = await orderService.updateOrder(id, {
      customer_name,
      customer_address,
      customer_email,
      customer_phone,
      status
    });

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    await orderService.deleteOrder(id);
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await orderService.getOrder(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// **OrderDetail API Handlers**

const createOrderDetail = async (req, res) => {
  const { order_id, product_id, quantity, unit_price } = req.body;

  try {
    const newOrderDetail = await orderService.createOrderDetail({
      order_id,
      product_id,
      quantity,
      unit_price
    });

    res.status(201).json(newOrderDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOrderDetail = async (req, res) => {
  const { id } = req.params;
  const { order_id, product_id, quantity, unit_price } = req.body;

  try {
    const updatedOrderDetail = await orderService.updateOrderDetail(id, {
      order_id,
      product_id,
      quantity,
      unit_price
    });

    res.status(200).json(updatedOrderDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteOrderDetail = async (req, res) => {
  const { id } = req.params;

  try {
    await orderService.deleteOrderDetail(id);
    res.status(200).json({ message: 'Order detail deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrderDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const orderDetail = await orderService.getOrderDetail(id);
    res.status(200).json(orderDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
