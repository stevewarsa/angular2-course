System.register(['@angular/router', './home.component', './users/users.component', './users/newuser.component', './users/usernotfound.component', './posts/posts.component', './shared/candeactivate.guard'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, users_component_1, newuser_component_1, usernotfound_component_1, posts_component_1, candeactivate_guard_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (newuser_component_1_1) {
                newuser_component_1 = newuser_component_1_1;
            },
            function (usernotfound_component_1_1) {
                usernotfound_component_1 = usernotfound_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (candeactivate_guard_1_1) {
                candeactivate_guard_1 = candeactivate_guard_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'users',
                    component: users_component_1.UsersComponent
                },
                {
                    path: 'posts',
                    component: posts_component_1.PostsComponent
                },
                {
                    path: 'users/new',
                    component: newuser_component_1.NewUserComponent,
                    canDeactivate: [candeactivate_guard_1.CanDeactivateGuard]
                },
                {
                    path: 'not-found',
                    component: usernotfound_component_1.UserNotFoundComponent
                },
                { path: '', redirectTo: 'home' }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes),
                candeactivate_guard_1.CanDeactivateGuard
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map