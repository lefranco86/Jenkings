/**
 * Created by jeremy on 16-05-19.
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
