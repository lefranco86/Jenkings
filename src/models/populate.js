/**
 * Created by jeremy on 16-05-17.
 */

var Sequelize = require('sequelize');
var fs = require('fs');

var config = require('config');

var modele = {};

var sequelize = new Sequelize({
    dialect: config.get("database_dialect"),
    storage: config.get("database_location")
});

var author = require("./author")(sequelize, modele);
var document = require("./document")(sequelize, modele);
var bulk = require("./bulkCreate");

fs.unlink(config.get("database_location"), function (err) {

    if (err) {
        console.error("ERR:", err);
    }

    else {

        console.log("INFOS:", "Base de donnée supprimé");

        sequelize.sync({force: true}).then(function () {

            console.log("INFOS:", "Base de donnée syncronisé");

            for (var obj in modele) {
                if (modele.hasOwnProperty(obj)) {
                    modele[obj].bulkCreate(bulk[obj]).then(function (data) {

                        console.log("INFOS:", "La table " + data[0].$modelOptions.name.singular + " a été peuplé");
                    }).catch(function (err) {
                        console.error("ERR:", err);
                    });
                }
            }

        }).catch(function (err) {
            console.error("ERR:", err);
        });
    }
});


