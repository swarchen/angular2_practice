System.register(['angular2/core', 'angular2/http', './users.service'], function(exports_1, context_1) {
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
    var core_1, http_1, users_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userService) {
                    this._userService = _userService;
                    this.isLoading = true;
                    this.usersData = [];
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (usersData) {
                        _this.isLoading = false;
                        _this.usersData = usersData;
                    });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "\n  <h2>Users</h2>\n  <p>List of users</p>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Edit</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"#user of usersData\">\n        <td>{{user.name}}</td>\n        <td>{{user.email}}</td>\n        <td><i class=\"glyphicon glyphicon-edit\"></i></td>\n        <td><i class=\"glyphicon glyphicon-remove\"></i></td>\n      </tr>\n    </tbody>\n  </table> \n  ",
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.Component.js.map