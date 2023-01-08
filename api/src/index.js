const express = require('express');
const morgan = require('morgan');

const app = express();
const mongoose = require('mongoose');

const cors = require('cors');
const productsRouter = require('./routers/productsRouter');
const commentsRouter = require('./routers/commentsRouter');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Pidhorodetskyi:lock1234@cluster0.vh1l6r0.mongodb.net/products-list?retryWrites=true&w=majority');
app.use(cors());

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/products', productsRouter);
app.use('/api/comments', commentsRouter);

const start = async () => {
  try {
    app.listen(5000);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
};

start();

// ERROR HANDLER
function errorHandler(err, req, res) {
  res.status(500).send({ message: 'string500' });
}

app.use(errorHandler);
