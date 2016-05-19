var express = require('express');
var config = require('config');
var path = require('path');
var bodyParser = require('body-parser');

var models = {};

var Sequelize = require('sequelize');

var sequelize = new Sequelize({
    dialect: config.get("database_dialect"),
    storage: config.get("database_location")
});

require("./src/models/author")(sequelize, models);
require("./src/models/document")(sequelize, models);

var routes = {};

require('fs').readdirSync(path.join(__dirname, "src/routes")).forEach(function (file) {
    var fileName = file.replace(/(\.\w+$)/igm, "");
    routes[fileName] = require("./src/routes/" + fileName)(models);
});

var marked = require("marked");

var fs = require("fs");

var app = express();

// Initialisation du rendering engine
app.set('views', path.join(__dirname, 'src/public/views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Initialisation du répertoire statique
app.use(express.static(path.join(__dirname, 'src/public/static')));

app.use("/document", routes.document);
app.use("/documents", routes.documents);
app.use("/author", routes.author);
app.use("/authors", routes.authors);

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
