/**
 * Created by jeremy on 16-05-19.
 */

module.exports = function (modelsObject) {

    var model = modelsObject;

    var express = require('express');
    var router = express.Router();

    router.get('/:docId', function (req, res) {
        // TODO : complétez moi    
    });

    router.put('/:docId', function (req, res) {
        // TODO : complétez moi
    });

    router.delete('/:docId', function (req, res) {
        // TODO : complétez moi
    });

    router.post('/', function (req, res) {
        // TODO : complétez moi
    });

    return router;

};