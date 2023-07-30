const User = require('../models/User');
const Catalog = require('../models/Catalog');
const Order = require('../models/Order');
const jwt = require("jsonwebtoken");

const listOfSellers = async (req, res) => {
    try {
      const sellers = await User.find({ role: 'seller' }, '_id username');
      res.json(sellers);
    } catch (error) {
      res.json({ message: 'An error occurred while fetching sellers' });
    }
  };
  
const sellerCatalog = async (req, res) => {
    try {
      const { seller_id } = req.params;
      const catalog = await Catalog.findOne({ sellerId: seller_id }).populate('products', 'name price');
      if (!catalog) {
        return res.json({ message: 'Seller not found or catalog is empty' });
      }
        res.json(catalog.products);
    } catch (error) {
        res.json({ message: 'An error occurred while fetching sellers catalog' });
        }
    }

const createOrder = async (req, res) => {
  try {
    const { seller_id } = req.params;
    const seller = await User.findOne({ _id : seller_id });
    if (!seller) {
      return res.json({ message: 'Seller not found' });
    }
    const catalog = await Catalog.findOne({ sellerId : seller_id });
    if (!catalog) {
      return res.json({ message: 'Seller catalog not found' });
    }
    let token = req.headers.authorization;
    token = token.split(' ')[1];
    const decoded = jwt.verify(token, "HYBR1D");
    const buyerId = decoded.id;
    const order = new Order({
      buyerId: buyerId,
      sellerId: seller_id,
      products : catalog.products
    });
    await order.save();
    res.json({ message: 'Order created successfully', order });
  } catch (error) {
    res.json({ message: 'An error occurred while creating the order' });
  }
};

module.exports = { listOfSellers, sellerCatalog, createOrder };