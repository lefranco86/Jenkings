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
            res.sendStatus(500).send(err).end();
        });

        // TODO : complétez moi
    });


    router.get('/:authId/edit', function (req, res) {

        model.author.findById(req.params.authId).then(function (doc) {
            res.render("modifyAuthor", {title: "Modifier Auteur", author: doc});
        }).catch(function (err) {
            res.sendStatus(500).send(err).end();
        });

        // TODO : complétez moi
    });

    router.get('/new', function (req, res) {
        res.render("createAuthor", {title: "Créer Auteur", author: doc});
    });

    router.put('/:authId', function (req, res) {
        // TODO : complétez moi

        console.log("AUTOR MODIFIED");
        
        res.redirect("/authors");
        
        
    });

    router.delete('/:authId', function (req, res) {
        // TODO : complétez moi

        console.log("AUTOR DELETED");

        res.redirect("/authors");
    });

    router.post('/', function (req, res) {
        // TODO : complétez moi

        console.log("AUTOR CREATED");

        res.redirect("/authors");
    });

    return router;
};