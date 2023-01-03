const { Comment } = require('../models/Comment');
const { Product } = require('../models/Product');

const addComment = async (req, res) => {
  const headProductId = req.params.id;
  const comment = new Comment({
    productId: headProductId,
    description: req.body.description,
  });

  await comment.save((err) => err && res.status(500).send({ message: 'Not saved comment' }));

  const productRelated = await Product.findById(headProductId);
  productRelated.comments.push(comment);
  await productRelated.save((err) => {
    if (err) {
      return res.status(500).send({ message: 'Not added coment to product' });
    }
    return res.status(200).send({ message: 'Comment created successfully' });
  });
};

const deleteComment = async (req, res) => {
  const headProductId = req.params.id;
  try {
    await Comment.findOneAndDelete(
      {
        productId: headProductId,
        _id: req.body.id,
      },
    );

    const postRelated = await Product.findById(headProductId);
    const commentIndex = postRelated.comments
      .findIndex((obj) => obj._id.toString() === req.body.id);

    if (commentIndex > -1) {
      postRelated.comments.splice(commentIndex, 1);

      await postRelated.save((err) => err && res.status(500).send({ message: 'Not deleted comment from product' }));
    } else {
      return res.status(404).send({ message: 'Not found comment' });
    }
    return res.status(200).send({ message: 'Deleted successfully' });
  } catch (err) {
    return res.status(500).send({ message: 'Not deleted' });
  }
};

module.exports = {
  addComment, deleteComment,
};
