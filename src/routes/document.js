/**
 * Created by jeremy on 16-05-19.
 */

var express = require('express');
var marked = require('marked');

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
   * Route POST pour ajouter un nouveau document
   *
   * @param {object} req l'object request
   * @param {string} req.body.documentAuthor l'auteur du document
   * @param {string} req.body.documentBody le corps du document
   * @param {string} req.body.documentTitle le titre du document
   * @param {object} res l'object response
   */
  function POST(req, res) {
    model.document.create({
      DOC_AUTHOR: req.body.documentAuthor,
      body: req.body.documentBody,
      title: req.body.documentTitle
    }).then(function() {
      res.redirect("/documents");
    });
  }

  /**
   * Route GET pour afficher un formulaire de nouveau document
   *
   * @param {object} req l'object request
   * @param {object} res l'object response
   */
  function GETNew(req, res) {
    model.author.findAll().then(function(models) {
      res.render("createDocument", {
        title: "Créer Document",
        authors: models,
        doc: {
          title: "",
          body: "",
          DOC_AUTHOR: null
        }
      });
    });
  }

  /**
   * Route PUT pour mettre à jour un document
   *
   * @param {object} req l'object request
   * @param {?string} req.body.documentAuthor l'auteur du document
   * @param {?string} req.body.documentBody le corps du document
   * @param {?string} req.body.documentTitle le titre du document
   * @param {object} res l'object response
   */
  function PUTDocId(req, res) {
    model.document.findById(req.params.docId).then(function(doc) {
      doc.update({
        DOC_AUTHOR: req.body.documentAuthor,
        body: req.body.documentBody,
        title: req.body.documentTitle
      }).then(function() {
        res.redirect("/documents");
      });
    });
  }

  /**
   * Route GET pour afficher un document
   *
   * @param {object} req l'object request
   * @param {number} req.params.docId l'ID du document à utiliser
   * @param {object} res l'object response
   */
  function GETDocId(req, res) {
    model.document.findById(req.params.docId, {
      include: [model.author]
    }).then(function(doc) {
      res.render("document", {
        title: "Document",
        doc: doc,
        parsedText: marked(doc.body)
      });
    });
  }

  /**
   * Route GET pour afficher le formulaire d'édition
   *
   * @param {object} req l'object request
   * @param {number} req.params.docId l'ID du document à utiliser
   * @param {object} res l'object response
   */
  function GETEditDocId(req, res) {
    model.document.findById(req.params.docId).then(function(doc) {
      model.author.findAll().then(function(models) {
        res.render("modifyDocument", {
          title: "Modifier Document",
          doc: doc,
          authors: models
        });
      });
    });
  }

  /**
   * Route DELETE
   *
   * @param {object} req l'object request
   * @param {number} req.params.docId l'ID du document à utiliser
   * @param {object} res l'object response
   */
  function DELETEDocId(req, res) {
    model.document.findById(req.params.docId).then(function(doc) {
      doc.destroy().then(function() {
        res.redirect("/documents");
      });
    });
  }

  router.get('/new', GETNew);
  router.put('/:docId', PUTDocId);
  router.get('/:docId', GETDocId);
  router.get('/:docId/edit', GETEditDocId);
  router.delete('/:docId', DELETEDocId);
  router.post('/', POST);

  return router;
};
