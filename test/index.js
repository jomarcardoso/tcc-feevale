
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var cache = [];
  const data = JSON.parse(JSON.stringify(req, function(key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
          // Duplicate reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  }));

  res.json({
    'user-agent': data.headers['user-agent'],
    data
  });
});

app.listen(3040, function () {
  console.log('Example app listening on port 3000!');
});

