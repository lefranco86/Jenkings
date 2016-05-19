/**
 * Created by jeremy on 16-05-19.
 */

module.exports = function (modelsObject) {

    var model = modelsObject;

    var express = require('express');
    var router = express.Router();

    router.get('/', function (req, res) {

        res.render('index', {
            title: "About",
            bodyContent: 'We are Jenkings!!!'
        });

    });

    return router;
};