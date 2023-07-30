const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.Array, ref: 'Product' }],
});

const Catalog = mongoose.model('Catalog', catalogSchema);

module.exports = Catalog;
