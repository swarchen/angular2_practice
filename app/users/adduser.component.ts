import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {Router, CanActivate, CanDeactivate, RouteParams} from 'angular2/router';

import {BasicValidators} from '../shared/basic.validators';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
  selector: 'adduser-form',
  templateUrl: 'app/users/adduser.template.html',
  providers: [UsersService]
})
export class AddUserComponent implements CanDeactivate,OnInit{
  title = "";
  form: ControlGroup;
  user = new User();
  id = this._routeParams.get('id');

  constructor(
    fb: FormBuilder,
    private _usersService: UsersService,
    public router: Router,
    private _routeParams: RouteParams
  ) {
    this.form = fb.group({
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
    if (this.form.dirty)
      return confirm('You haven\'t finished your form yet. You really want to leave?');
  }

  onSave() {
    var result;
    if(this.user.id)
      result = this._usersService.editUser(this._routeParams.get('id'), this.form.value);
    else  
      result =this._usersService.addUser(this.form.value)
      
      result.subscribe(res => {
        this.router.navigate(['Users']);
      });
  }

  ngOnInit() {
  var id = this._routeParams.get('id');

  this.title = id ? "Edit User" : "New User";

  if(!id)
    return ;

    this._usersService
      .getEditUser(id)
      .subscribe(res => {
        this.user = res
      });

  }

}