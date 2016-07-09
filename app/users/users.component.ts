import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {UsersService} from './users.service';


@Component({
  selector: 'users', 
  template: `
  <h2>Users</h2>
  <p>List of users</p>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="#user of usersData">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td><i class="glyphicon glyphicon-edit"></i></td>
        <td><i class="glyphicon glyphicon-remove"></i></td>
      </tr>
    </tbody>
  </table> 
  `,
  providers: [UsersService, HTTP_PROVIDERS] 
})
export class UsersComponent implements OnInit{
    isLoading = true;
    usersData = [];
    constructor(private _userService: UsersService){

    }
    ngOnInit(){
      this._userService.getUsers()
          .subscribe(usersData => {
            this.isLoading = false;
            this.usersData = usersData;
          })
    }
}