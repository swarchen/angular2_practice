import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {UsersService} from './users.service';


@Component({
  selector: 'users', 
  templateUrl:'app/users/users.template.html',
  providers: [UsersService],
  directives: [ROUTER_DIRECTIVES]  
})
export class UsersComponent implements OnInit{
    isLoading = true;
    usersData = [];
    constructor(private _usersService: UsersService){

    }
    ngOnInit(){
      this._usersService.getUsers()
          .subscribe(usersData => {
            this.isLoading = false;
            this.usersData = usersData;
          })
    }
}