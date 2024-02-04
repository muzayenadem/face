const k = 'maal akkka ati barbaaddu naaf galuu dide bar'

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.put('/api/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product' });
  }
});
//