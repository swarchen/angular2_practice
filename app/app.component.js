System.register(['@angular/core', '@angular/router-deprecated', './navbar/navbar.component', './home/home.Component', './posts/posts.Component', './users/users.Component', './users/adduser.component', './shared/notfound.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, navbar_component_1, home_Component_1, posts_Component_1, users_Component_1, adduser_component_1, notfound_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (home_Component_1_1) {
                home_Component_1 = home_Component_1_1;
            },
            function (posts_Component_1_1) {
                posts_Component_1 = posts_Component_1_1;
            },
            function (users_Component_1_1) {
                users_Component_1 = users_Component_1_1;
            },
            function (adduser_component_1_1) {
                adduser_component_1 = adduser_component_1_1;
            },
            function (notfound_component_1_1) {
                notfound_component_1 = notfound_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: "Home", component: home_Component_1.HomeComponent, useAsDefault: true },
                        { path: '/users', name: "Users", component: users_Component_1.UsersComponent },
                        { path: '/user/:id', name: "EditUser", component: adduser_component_1.AddUserComponent },
                        { path: '/users/adduser', name: "AddUser", component: adduser_component_1.AddUserComponent },
                        { path: '/posts', name: "Posts", component: posts_Component_1.PostsComponent },
                        { path: '/not-found', name: "NotFound", component: notfound_component_1.NotFoundComponent },
                        { path: '/*others', name: "Others", redirectTo: ['Home'] },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <nav-bar></nav-bar>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, navbar_component_1.NavBarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map