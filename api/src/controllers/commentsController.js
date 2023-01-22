const { Comment } = require('../models/Comment');
const { Product } = require('../models/Product');

const addComment = async (req, res) => {
  const headProductId = req.params.id;
  const comment = new Comment({
    productId: headProductId,
    description: req.body.description,
  });
  try {
    await comment.save((err) => err && res.status(500).send({ message: 'Not saved comment' }));

    const productRelated = await Product.findById(headProductId);
    productRelated.comments.push(comment);
    const savedCurrentProduct = await productRelated.save();
    const {
      _id,
      imageUrl,
      name,
      count,
      size,
      weight,
      comments,
    } = savedCurrentProduct;

    const result = {
      _id,
      imageUrl,
      name,
      count,
      size: { width: size.width, height: size.height },
      weight,
      comments: comments.map((item) => (
        {
          _id: item._id,
          productId: item.productId,
          description: item.description,
          date: item.createdAt,
        }
      )),
    };
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send({ message: 'Not addded comment' });
  }
};

const deleteComment = async (req, res) => {
  const headProductId = req.params.productId;
  const headCommentId = req.params.commentId;
  try {
    await Comment.findOneAndDelete(
      {
        productId: headProductId,
        _id: headCommentId,
      },
    );

    const postRelated = await Product.findById(headProductId);
    const commentIndex = postRelated.comments
      .findIndex((obj) => obj._id.toString() === headCommentId);

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
