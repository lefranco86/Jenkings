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
   * Route GET pour afficher un formulaire de nouveau auteur
   *
   * @param {object} req l'object request
   * @param {object} res l'object response
   */
  function GETNew(req, res) {
    res.render("createAuthor", {
      title: "Créer Auteur",
      author: {
        firstName: "",
        lastName: "",
        nickname: ""
      }
    });
  }

  /**
   * Route PUT pour mettre à jour un auteur
   *
   * @param {object} req l'object request
   * @param {?string} req.body.authorFirstName le prénom de l'auteur
   * @param {?string} req.body.authorLastName le nom de famille de l'auteur
   * @param {?string} req.body.authorNickname le nom d'utilisateur de l'auteur
   * @param {object} res l'object response
   */
  function PUTAuthId(req, res) {
    model.author.findById(req.params.authId).then(function(author) {
      author.update({
        firstName: req.body.authorFirstName,
        lastName: req.body.authorLastName,
        nickname: req.body.authorNickname
      }).then(function() {
        res.redirect("/authors");
      });
    });
  }

  /**
   * Route DELETE
   *
   * @param {object} req l'object request
   * @param {number} req.params.authId l'ID de l'auteur à utiliser
   * @param {object} res l'object response
   */
  function DELETEAuthId(req, res) {
    model.author.findById(req.params.authId).then(function(author) {
      author.destroy().then(function() {
        res.redirect("/authors");
      });
    });
  }

  /**
   * Route GET pour afficher un auteur
   *
   * @param {object} req l'object request
   * @param {number} req.params.authId l'ID de l'auteur à utiliser
   * @param {object} res l'object response
   */
  function GETAuthId(req, res) {
    model.author.findById(req.params.authId).then(function(doc) {
      res.render("author", {title: "auteur", author: doc});
    }).catch(function(err) {
      res.sendStatus(500).send(err).end();
    });
  }

  /**
   * Route GET pour afficher le formulaire d'édition
   *
   * @param {object} req l'object request
   * @param {number} req.params.docId l'ID de l'auteur à utiliser
   * @param {object} res l'object response
   */
  function GETEditAuthId(req, res) {
    model.author.findById(req.params.authId).then(function(doc) {
      res.render("modifyAuthor", {title: "Modifier Auteur", author: doc});
    }).catch(function(err) {
      res.sendStatus(500).send(err).end();
    });
  }

  /**
   * Route POST pour ajouter un nouveau document
   *
   * @param {object} req l'object request
   * @param {string} req.body.authorFirstName le prénom de l'auteur
   * @param {string} req.body.authorLastName le nom de famille de l'auteur
   * @param {string} req.body.authorNickname le nom d'utilisateur de l'auteur
   * @param {object} res l'object response
   */
  function POST(req, res) {
    model.author.create({
      firstName: req.body.authorFirstName,
      lastName: req.body.authorLastName,
      nickname: req.body.authorNickname
    }).then(function() {
      res.redirect("/authors");
    });
  }

  router.get('/new', GETNew);
  router.put('/:authId', PUTAuthId);
  router.delete('/:authId', DELETEAuthId);
  router.get('/:authId', GETAuthId);
  router.get('/:authId/edit', GETEditAuthId);
  router.post('/', POST);

  return router;
};
