(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var gaTaskList = function gaTaskList() {
    _classCallCheck(this, gaTaskList);

    this.restrict = "E";
    this.template = "<div>I'm a directive!</div>";
};

module.exports = gaTaskList;
},{}],2:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var gaTaskList = _interopRequire(require("./components/gaTaskList"));

angular.module("TaskManager", []);

angular.module("TaskManager").directive("gaTaskList", function () {
    return new gaTaskList();
});
},{"./components/gaTaskList":1}]},{},[2])