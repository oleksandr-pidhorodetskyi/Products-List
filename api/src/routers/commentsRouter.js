const express = require('express');

const router = express.Router();
const { addComment, deleteComment } = require('../controllers/commentsController');

const asyncWrapper = (controller) => (req, res, next) => controller(req, res, next).catch(next);

router.post('/:id', asyncWrapper(addComment));

router.delete('/:id', asyncWrapper(deleteComment));

module.exports = router;
