/**
 * Created by jeremy on 16-05-19.
 */

var express = require('express');

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
  var router = new express.Router();

  /**
   * Route GET
   *
   * @param {object} req l'objet request
   * @param {object} res l'objet response
   */
  function GET(req, res) {
    model.author.findAll().then(function(docs) {
      res.render("authorList", {
        title: "liste auteurs",
        authors: docs
      });
    });
  }

  router.get('/', GET);

  return router;
};
