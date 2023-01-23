'use strict';

var Controller = require('./Controller');

var exampleController = new Controller();
exampleController.setHandler('get', function exampleGet(req, res) {
    res.status(200).json({
        example : "Example!"
    });
});
exampleController.setHandler('post', function examplePost(req, res) {
    if(req.body) {
        // echo
        res.status(200).json(req.body);
    } else {
        // nothing to echo; incorrect request
        res.sendStatus(400);
    }
});

//  notice we don't need to explicitly give handlers to
//      deny PATCH and DELETE requests

module.exports = exampleController;
