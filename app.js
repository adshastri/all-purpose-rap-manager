var express = require('express');
if (process.env.CONFIG) {
	var CONFIG = JSON.parse(process.env.CONFIG);
} else {
	var CONFIG = require('./config.js');
}
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(CONFIG.MONGO_URL);

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
