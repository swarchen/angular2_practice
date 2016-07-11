System.register(['@angular/core', '@angular/router-deprecated', './users.service', '../shared/spinner.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, users_service_1, spinner_component_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_usersService) {
                    this._usersService = _usersService;
                    this.isLoading = true;
                    this.usersData = [];
                }
                UsersComponent.prototype.onDelete = function (user) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete " + user.name + "?")) {
                        var index = this.usersData.indexOf(user);
                        this.usersData.splice(index, 1);
                        this._usersService.deleteUser(user.id)
                            .subscribe(null, function (err) {
                            alert('Could not delete the user.');
                            _this.usersData.splice(index, 0, user);
                        });
                    }
                };
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usersService.getUsers()
                        .subscribe(function (usersData) {
                        _this.isLoading = false;
                        _this.usersData = usersData;
                    });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: 'app/users/users.template.html',
                        providers: [users_service_1.UsersService],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent]
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