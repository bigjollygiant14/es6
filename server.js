'use strict';

const express = require('express'),
      app = express();
/* var bodyParser = require('body-parser');
var methodOverride = require('method-override'); */

let port = process.env.PORT || 3000;

//Routes
require('./routes')(app);

//Start
app.listen(port);

console.log('Server accessible on ' + port);

exports = module.exports = app;