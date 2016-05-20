/**
 * Created by jeremy on 16-05-19.
 */

/**
 * Ceci contiendra toutels les modèles de sequelize
 * @typedef {{author : sequelize.Model, document: sequelize.Model}} modelObjects
 */

/**
 *  Cette fonction génère un objet Router pour lister les auteurs
 * @param {modelObjects} modelsObject la collection de modèles à utiliser
 * @return {Router} le routeur généré
 */
module.exports = function(modelsObject) {
  var model = modelsObject;

  var express = require('express');
  var router = new express.Router();

  router.get('/', function(req, res) {
    model.author.findAll().then(function(docs) {
      res.render("authorList", {
        title: "liste auteurs",
        authors: docs
      });
    });
  });

  return router;
};
