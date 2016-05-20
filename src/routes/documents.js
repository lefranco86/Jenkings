/**
 * Created by jeremy on 16-05-19.
 */

var express = require('express');

/**
 * Ceci contiendra toutels les modèles de sequelize
 * @typedef {{author : Model, document: Model}} modelObjects
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
   * Route GET pour afficher la liste des auteurs
   *
   * @param {object} req l'objet request
   * @param {number=} req.query.authId l'id de l'auteur utilisé pour filter les
   *   résultas
   * @param {object} res l'objet response
   */
  function GET(req, res) {
    var authId = req.query.authId;

    var prom = (authId) ? model.document.findAll({
      where: {DOC_AUTHOR: authId},
      include: [model.author]
    }) : model.document.findAll({include: [model.author]});

    prom.then(function(docs) {
      var options = {
        title: "liste auteurs",
        docs: docs
      };

      if (authId) {
        options.authId = authId;
      }

      res.render("documentList", options);
    }).catch(function(err) {
      res.statusCode = 500;
      res.send(err).end();
    });
  }

  router.get('/', GET);

  return router;
};
