/**
 * Created by jeremy on 16-05-19.
 */

var express = require('express');

/**
 * Ceci contiendra toutels les modèles de sequelize
 * @typedef {{author : sequelize.Model, document: sequelize.Model}} modelObjects
 */

/**
 *
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
    res.render('index', {
      title: model.title,
      bodyContent: 'We are Jenkings!!!'
    });
  }

  router.get('/', GET);

  return router;
};
