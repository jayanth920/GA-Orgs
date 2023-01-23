'use strict';

var defaultHandler = function defaultHandler(req, res) {
    // method not allowed
    res.sendStatus(405);
};

var Controller = function Controller() {
    this.handlers = {};
};
Controller.prototype.getHandler = function cGetHandler(method) {
    if(this.handlers[method]) {
        return this.handlers[method];
    } else {
        return defaultHandler;
    }
};
Controller.prototype.setHandler = function cSetHandler(method, handler) {
    if(typeof method === 'string' && handler instanceof Function) {
        this.handlers[method] = handler;
    } else {
        var errMessage = "Controller: incorrect arguments passed to `setHandler`";
        throw new RangeError(errMessage);
    }
};

module.exports = Controller;
