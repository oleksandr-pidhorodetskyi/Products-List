const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  size: {
    type: {
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
    },
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  comments: {
    type: [
      {
        type: mongoose.Schema.Types.Object,
        ref: 'Comment',
      },
    ],
    default: null,
    required: false,
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = {
  Product,
};
