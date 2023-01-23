'use strict';

var users = (function (module) {
    module.submitRegistration = function (event) {
        event.preventDefault();
        $.ajax({
            url: module.urls.users,
            type: 'POST',
            data: {
                user: {
                    name: module.$name.val(),
                    email: module.$email.val(),
                    password: module.$password.val()
                }
            }
        })
        .done(module.loginSuccess);
    };

    return module;
})(users || {});

$(function () {
    users.$signUp.on('click', function (event){
        users.submitRegistration(event);
    });
});
