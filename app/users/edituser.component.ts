import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Router, CanActivate, CanDeactivate, RouteParams} from 'angular2/router';

import {BasicValidators} from '../shared/basic.validators';
import {UsersService} from './users.service';

@Component({
    selector: 'edituser-form',
    templateUrl: 'app/users/edituser.template.html',
    providers: [UsersService]
})
export class EditUserComponent implements OnInit{
    editUserForm: ControlGroup;
    user = {
        address: {}
    };
    constructor(
        fb: FormBuilder,
        private _usersService: UsersService,
        private _routeParams: RouteParams,
        public router: Router) {
        this.editUserForm = fb.group({
            name: ['', Validators.required],
            email: ['', BasicValidators.emailFormat],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        })
    }

    ngOnInit(){
        this._usersService
            .getEditUser(this._routeParams.get('id'))
            .subscribe(res => {
                this.user = res
            });
        
    }

    onEdit(){
        this._usersService
            .editUser(this._routeParams.get('id'), this.editUserForm.value)
            .subscribe(res => this.router.navigate(['Users']));
    }
}