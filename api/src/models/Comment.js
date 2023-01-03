const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
  Comment,
};
