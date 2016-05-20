/**
 * Created by jeremy on 16-05-19.
 */

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
  model = {title: "About"};
  var express = require('express');
  var router = new express.Router();

  router.get('/', function(req, res) {
    res.render('index', {
      title: model.title,
      bodyContent: 'We are Jenkings!!!'
    });
  });

  return router;
};
