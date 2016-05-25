var express = require("express");
var controller = require("../controllers/indexController.js");

module.exports = function() {
  var router = new express.Router();

  router.get('/', controller.get);

  return router;
};
