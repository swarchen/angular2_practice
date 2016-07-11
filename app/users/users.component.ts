import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {UsersService} from './users.service';
import {SpinnerComponent} from '../shared/spinner.component';

@Component({
	selector: 'users',
	templateUrl: 'app/users/users.template.html',
	providers: [UsersService],
	directives: [ROUTER_DIRECTIVES,SpinnerComponent]
})
export class UsersComponent implements OnInit {
    isLoading = true;
    usersData = [];
    constructor(private _usersService: UsersService) { }

    onDelete(user) {
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.usersData.indexOf(user);
			this.usersData.splice(index, 1);
			this._usersService.deleteUser(user.id)
				.subscribe(null,
				err => {
					alert('Could not delete the user.');

					this.usersData.splice(index, 0, user);
				}
				);
		}

    }

    ngOnInit() {
		this._usersService.getUsers()
			.subscribe(usersData => {
				this.isLoading = false;
				this.usersData = usersData;
			})
    }
}