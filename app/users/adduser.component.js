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
    var AddUserComponent;
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
            AddUserComponent = (function () {
                function AddUserComponent(fb, _usersService, router) {
                    this._usersService = _usersService;
                    this.router = router;
                    this.addUserForm = fb.group({
                        user: fb.group({
                            name: ['', common_1.Validators.required],
                            email: ['', basic_validators_1.BasicValidators.emailFormat],
                            phone: [],
                        }),
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                AddUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.addUserForm.dirty)
                        return confirm('You haven\'t finished your form yet. You really want to leave?');
                };
                AddUserComponent.prototype.onSave = function () {
                    var _this = this;
                    this._usersService
                        .addUser(this.addUserForm.value)
                        .subscribe(function (res) {
                        console.log(res);
                        _this.router.navigate(['Users']);
                    });
                };
                AddUserComponent = __decorate([
                    core_1.Component({
                        selector: 'adduser-form',
                        templateUrl: 'app/users/adduser.template.html',
                        providers: [users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_service_1.UsersService, router_1.Router])
                ], AddUserComponent);
                return AddUserComponent;
            }());
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});
//# sourceMappingURL=adduser.component.js.map