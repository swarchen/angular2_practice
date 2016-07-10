System.register(['angular2/core', 'angular2/common', 'angular2/router', '../shared/basic.validators', './users.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, basic_validators_1, users_service_1;
    var EditUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (basic_validators_1_1) {
                basic_validators_1 = basic_validators_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            EditUserComponent = (function () {
                function EditUserComponent(fb, _usersService, _routeParams, router) {
                    this._usersService = _usersService;
                    this._routeParams = _routeParams;
                    this.router = router;
                    this.user = {
                        address: {}
                    };
                    this.editUserForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', basic_validators_1.BasicValidators.emailFormat],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                EditUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usersService
                        .getEditUser(this._routeParams.get('id'))
                        .subscribe(function (res) {
                        _this.user = res;
                    });
                };
                EditUserComponent.prototype.onEdit = function () {
                    var _this = this;
                    this._usersService
                        .editUser(this._routeParams.get('id'), this.editUserForm.value)
                        .subscribe(function (res) { return _this.router.navigate(['Users']); });
                };
                EditUserComponent = __decorate([
                    core_1.Component({
                        selector: 'edituser-form',
                        templateUrl: 'app/users/edituser.template.html',
                        providers: [users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_service_1.UsersService, router_1.RouteParams, router_1.Router])
                ], EditUserComponent);
                return EditUserComponent;
            }());
            exports_1("EditUserComponent", EditUserComponent);
        }
    }
});
//# sourceMappingURL=edituser.component.js.map