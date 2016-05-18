var express = require('express');
var config = require('config');
var path = require('path');

var marked = require("marked");

var fs = require("fs");

var app = express();

// Initialisation du rendering engine
app.set('views', path.join(__dirname, 'src/public/views'));
app.set('view engine', 'jade');

// Initialisation du répertoire statique
app.use(express.static(path.join(__dirname, 'src/public/static')));

app.get('/', function (req, res) {
    res.render('index', {title: "Index", bodyContent: 'Hello World'});
});

app.get('/about', function (req, res) {

    res.render('index', {
        title: "About",
        bodyContent: 'We are Jenkings!!!'
    });

});

var port = config.get('server_port');

app.listen(port, function () {
    console.log('Jenkings started on http://localhost:' + port);
});
