var express = require('express');
var config = require('config');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/intro', function (req, res) {
  res.send('Intro');
});

var port = config.get('server_port');

app.listen(port, function() {
    console.log('Jenkings started on http://localhost:' + port);
});
