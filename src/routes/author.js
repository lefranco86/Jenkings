/**
 * Created by jeremy on 16-05-19.
 */

module.exports = function (modelsObject) {

    var model = modelsObject;

    var express = require('express');
    var router = express.Router();

    router.get('/:authId', function (req, res) {

        model.author.findById(req.params.authId).then(function (doc) {
            res.render("author", {title: "auteur", author: doc});

        }).catch(function (err) {

        });

        // TODO : complétez moi
    });

    router.put('/:authId', function (req, res) {
        // TODO : complétez moi
    });

    router.delete('/:authId', function (req, res) {
        // TODO : complétez moi
    });

    router.post('/', function (req, res) {
        // TODO : complétez moi
    });

    return router;
};