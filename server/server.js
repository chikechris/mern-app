const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err));

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

//route
app.get('*', (req, res) => {
  res.json({
    response: 'this is a very big test',
  });
});

//port

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server is Up on Port ${port}`));
