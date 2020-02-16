
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req)
  res.send('req');
});

app.listen(3040, function () {
  console.log('Example app listening on port 3000!');
});

