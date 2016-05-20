/* Created by jeremy on 16-05-19. */
module.exports = function(modelsObject) {
  var model = modelsObject;
  var express = require('express');
  var router = express.Router();

  router.get('/', function(req, res) {
    var authId = req.query.authId;
    var prom = (authId) ? model.document.findAll({
      where: {
        DOC_AUTHOR: authId
      },
      include: [model.author]
    }) : model.document.findAll({
      include: [model.author]
    });

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
  });

  return router;
};
