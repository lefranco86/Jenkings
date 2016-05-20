/**
 * Created by jeremy on 16-05-19.
 */

module.exports = function(modelsObject) {
  var model = modelsObject;

  var express = require('express');
  var router = new express.Router();

  var marked = require('marked');

  router.get('/new', function(req, res) {
    model.author.findAll().then(function(models) {
      res.render("createDocument", {
        title: "Créer Document",
        authors: models
      });
    });
  });

  router.put('/:docId', function(req, res) {
    model.document.findById(req.params.docId).then(function(doc) {
      doc.update({
        DOC_AUTHOR: req.body.documentAuthor,
        body: req.body.documentBody,
        title: req.body.documentTitle
      }).then(function() {
        res.redirect("/documents");
      });
    });
  });

  router.get('/:docId', function(req, res) {
    model.document.findById(req.params.docId, {
      include: [model.author]
    }).then(function(doc) {
      res.render("document", {
        title: "Document",
        doc: doc,
        parsedText: marked(doc.body)
      });
    });
  });

  router.get('/:docId/edit', function(req, res) {
    model.document.findById(req.params.docId).then(function(doc) {
      model.author.findAll().then(function(models) {
        res.render("modifyDocument", {
          title: "Modifier Document",
          doc: doc,
          authors: models
        });
      });
    });
  });

  router.delete('/:docId', function(req, res) {
    model.document.findById(req.params.docId).then(function(doc) {
      doc.destroy().then(function() {
        res.redirect("/documents");
      });
    });
  });

  router.post('/', function(req, res) {
    model.document.create({
      DOC_AUTHOR: req.body.documentAuthor,
      body: req.body.documentBody,
      title: req.body.documentTitle
    }).then(function() {
      res.redirect("/documents");
    });
  });

  return router;
};
