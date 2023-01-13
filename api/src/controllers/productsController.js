const { Product } = require('../models/Product');
const { Comment } = require('../models/Comment');

const addProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getProducts = async (req, res) => {
  try {
    const result = await Product.find({}, '-__v');
    result.forEach((el, ind, arr) => {
      const {
        _id,
        imageUrl,
        name,
        count,
        size,
        weight,
        comments,
      } = el;

      arr[ind] = {
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
    });
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send('Can`t get products');
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }, '-__v');
    const {
      _id,
      imageUrl,
      name,
      count,
      size,
      weight,
      comments,
    } = product;

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
  } catch (error) {
    return res.status(500).send('Can`t get products');
  }
};
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true },
    );
    const {
      _id,
      imageUrl,
      name,
      count,
      size,
      weight,
      comments,
    } = updatedProduct;

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
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  const headProductId = req.params.id;
  try {
    await Comment.deleteMany({ productId: headProductId });
    await Product.findByIdAndRemove(headProductId);
    return res.status(200).send({ message: 'Deleted successfully' });
  } catch (err) {
    return res.status(500).send({ message: 'Not deleted' });
  }
};

module.exports = {
  addProduct, getProducts, getProductById, updateProduct, deleteProduct,
};
