import {Component } from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {Router, CanActivate, CanDeactivate} from 'angular2/router';

import {BasicValidators} from '../shared/basic.validators';
import {UsersService} from './users.service';

@Component({
  selector: 'adduser-form',
  templateUrl: 'app/users/adduser.template.html',
  providers: [UsersService]
})
export class AddUserComponent implements CanDeactivate {
  addUserForm: ControlGroup;

  constructor(
    fb: FormBuilder,
    private _usersService: UsersService,
    public router: Router) {
    this.addUserForm = fb.group({
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

  routerCanDeactivate(next, previous) {
    if (this.addUserForm.dirty)
      return confirm('You haven\'t finished your form yet. You really want to leave?');
  }

  onSave() {
    this._usersService
      .addUser(this.addUserForm.value)
      .subscribe(res => {
        this.router.navigate(['Users']);
      });
  }

}