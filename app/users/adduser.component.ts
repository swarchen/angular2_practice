import {Component } from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {CanActivate, CanDeactivate} from 'angular2/router';

import {BasicValidators} from '../shared/basic.validators';

@Component({
  selector: 'adduser-form',
  templateUrl: 'app/users/adduser.template.html'
})
export class AddUserComponent implements CanDeactivate{
  addUserForm: ControlGroup;

  constructor(fb: FormBuilder) {
    this.addUserForm = fb.group({
      user: fb.group({
        name: ['', Validators.required],
        email: ['', BasicValidators.emailFormat],
        phone: [],
      }),
      address: fb.group({
        street: [],
        suite: [],
        city: [],
        zipcode: []
      })
    })
  }

  routerCanDeactivate(next, previous){
    if(this.addUserForm.dirty)
      return confirm('You haven\'t finished your form yet. You really want to leave?' );
  }
}