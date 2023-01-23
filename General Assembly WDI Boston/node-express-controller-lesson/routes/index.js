var express = require('express');
var router = express.Router();
var exCtrl = require('../controllers/examplePOJOController');


/* GET home page. */
router.route('/').
    get(function exampleGet(req, res) {
        res.status(200).json({
            example : "Example!"
        });
    }).
    post(function examplePost(req, res) {
        if(req.body) {
            // echo
            res.status(200).json(req.body);
        } else {
            // nothing to echo; incorrect request
            res.sendStatus(400);
        }
    }).
    all(function examplePatch(req, res) {
        // not allowed!
        res.sendStatus(405);
    });

module.exports = router;
