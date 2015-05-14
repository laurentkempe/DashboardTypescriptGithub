/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./approuter.ts" />
/// <reference path="./models/user.ts" />
/// <reference path="./views/user.ts" />

var user = new Dashboard.Models.User({username: "laurentkempe"});

var app_router = new Dashboard.Routes.AppRouter();
app_router.on('route:forUsername', function (username) {
    user.set('username', username);
});

Backbone.history.start();

var userView = new Dashboard.Views.User({model : user});

user.fetch({
    success: function (user) {
        $('.user').html(userView.render().el);
    }
});