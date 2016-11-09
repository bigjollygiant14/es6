'use strict';

let path = require('path');

module.exports = function(app) {
  app.get('*', function(req, res) {
    var indexPath = path.join(__dirname, '/app', req.url);
    res.sendFile( indexPath );
  });
};