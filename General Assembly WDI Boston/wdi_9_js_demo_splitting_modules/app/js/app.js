'use strict';

var users = (function (module) {
    var host = 'http://localhost:3000';

    module.urls = {
        users: host + '/users',
        signIn: host + '/users/sign_in'
    };

    module.loginSuccess = function (response) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('username', response.username);

        history.back();
    };

    module.authToken = function () {
        localStorage.getItem('authToken');
    };

    module.setupAjaxRequests = function () {
        $.ajaxPrefilter(function( options ) {
            options.headers = {};
            options.headers['AUTHORIZATION'] = 'Token token=' + module.authToken;
        });
    };

    module.init = function () {
        module.$name = $('#username');
        module.$email = $('#email');
        module.$password = $('#password');
        module.$signUp = $('#sign_up');
        module.$signIn = $('#sign_in');
    };

    return module;
})(users || {});

$(function () {
    users.init();
});
