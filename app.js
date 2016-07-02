var express = require('express');

var app = express();

app.get('/', function (req, res) {
console.log('his');
  res.send('hello jenkins');

});

app.listen(process.env.PORT || 5000);

module.exports = app;
