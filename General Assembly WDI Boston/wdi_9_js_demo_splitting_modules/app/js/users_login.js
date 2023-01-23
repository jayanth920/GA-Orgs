'use strict';

var users = (function (module) {
    module.submitLogin = function (event) {
        event.preventDefault();
        $.ajax({
            url: module.urls.signIn,
            type: 'POST',
            data: {
                email: module.$email.val(),
                password: module.$password.val()
            }
        })
        .done(module.loginSuccess);
    };

    return module;
})(users || {});

$(function () {
    users.$signIn.on('click', function(event){
        users.submitLogin(event);
    });
});
