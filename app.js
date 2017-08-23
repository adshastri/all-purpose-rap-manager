var express = require('express');
var CONFIG = require('./config.js');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + CONFIG.MONGO.USER + ':' + CONFIG.MONGO.PASS + '@ds149433.mlab.com:49433/shastrify');

var index = require('./routes/index');

var app = express();

// uncomment after placing your favicon in /public
app.use(express.static(path.join(__dirname, 'dist')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', index);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = app;
