import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    usersData: Object[];
    private _userUrl = "http://jsonplaceholder.typicode.com/users";
    constructor(private _http: Http) {
    }

    getUsers(){
        return this._http.get(this._userUrl)
                .map(res => res.json());
    }
    
}