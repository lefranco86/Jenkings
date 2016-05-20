var express = require('express');
var config = require('config');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var Sequelize = require('sequelize');
var methodOverride = require("method-override");

/**
 * Ceci contiendra toutels les modèles de sequelize
 * @typedef {{author : sequelize.Model, document: sequelize.Model}} modelObjects
 */
var models = {};
const pathToRoutes = path.join(__dirname, "src/routes/");

var sequelize = new Sequelize({
  dialect: config.get("database_dialect"),
  storage: path.join(__dirname, 'src/models', config.get("database_location"))
});

require("./src/models/author")(sequelize, models);
require("./src/models/document")(sequelize, models);

models.document.belongsTo(models.author, {foreignKey: "DOC_AUTHOR"});

var app = express();

app.use(methodOverride('_method'));

// Initialisation du rendering engine
app.set('views', path.join(__dirname, 'src/public/views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Initialisation du répertoire statique
app.use(express.static(path.join(__dirname, 'src/public/static')));

// Route par défaut
app.get('/', function(req, res) {
  res.render('index', {title: "Index", bodyContent: 'Hello World'});
});

// Importation des routes
fs.readdirSync(pathToRoutes).forEach(function(file) {
  var fileName = file.replace(/(\.\w+$)/igm, "");
  app.use("/" + fileName, require(path.join(pathToRoutes, fileName))(models));
});

// Lancement du serveur
var port = config.get('server_port');

app.listen(port, function() {
  console.log('Jenkings started on http://localhost:' + port);
});
