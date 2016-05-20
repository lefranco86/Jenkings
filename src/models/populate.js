/**
 * Created by jeremy on 16-05-17.
 */

var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');

var config = require('config');

/**
 * Ceci contiendra toutels les modèles de sequelize
 * @typedef {{author : Model, document: Model}} modelObjects
 */
var modele = {};

var databaseLocation = path.join(__dirname, config.get("database_location"));

var sequelize = new Sequelize({
  dialect: config.get("database_dialect"),
  storage: databaseLocation
});

require("./author")(sequelize, modele);
require("./document")(sequelize, modele, true);

var bulk = require("./bulkCreate");

fs.access(databaseLocation, fs.F_OK, function(err) {
  if (!err) {
    fs.unlinkSync(databaseLocation);
    console.log("INFOS:", "Base de donnée supprimé");
  }

  sequelize.sync({force: true}).then(function() {
    console.log("INFOS:", "Base de donnée syncronisé");
    for (var obj in modele) {
      if (modele.hasOwnProperty(obj)) {
        modele[obj].bulkCreate(bulk[obj]).then(function(data) {
          console.log("INFOS:",
            "La table " +
            data[0].$modelOptions.name.singular +
            " a été peuplé");
        }).catch(function(err) {
          console.error("ERR:", err);
        });
      }
    }
  }).catch(function(err) {
    console.error("ERR:", err);
  });
});

