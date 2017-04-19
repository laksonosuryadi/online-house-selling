const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const house = require('./routes/houses');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/online_house_selling');
mongoose.connection.on('connected', function(){
  console.log('Database is connected');
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.use('/house', house);

app.listen(3000, function() {
  console.log('App is running on Port 3000');
})

module.exports = app;
