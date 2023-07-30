const User = require('../models/User');
const Catalog = require('../models/Catalog');
const Product = require('../models/Product');
const jwt = require("jsonwebtoken");
const Order = require('../models/Order');

const createCatalog = async (req, res) => {
  try {
    const { sellerId, products } = req.body;
    const seller = await User.findOne({ _id: sellerId, role: 'seller' });
    if (!seller) {
      return res.json({ message: 'Seller not found' });
    }
    (await Catalog.create({ sellerId, products })).save();
    res.json({ message: 'Catalog created successfully' });
  } catch (error) {
    res.json(error);
  }
};

const orders = async (req, res) => {
  try {
    let token = req.headers.authorization;
    token = token.split(' ')[1];
    const decoded = jwt.verify(token, "HYBR1D");
    const sellerId = decoded.id;
    const orders = await Order.find({ sellerId: sellerId });
    console.log(orders, 'total orders');
    res.json(orders);
  } catch (error) {
    res.json({ message: 'An error occurred while fetching orders' });
  }
};

module.exports = { createCatalog, orders };
