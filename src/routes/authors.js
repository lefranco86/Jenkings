/* Created by jeremy on 16-05-19. */
module.exports = function(modelsObject) {
  var model = modelsObject;
  var express = require('express');
  var router = express.Router();

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
