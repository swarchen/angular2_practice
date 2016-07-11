import {Http} from 'angular2/http';
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

    addUser(userData){
        return this._http.post(this._userUrl, JSON.stringify(userData))
                .map(res => res.json());
    }

    getEditUser(id){
        return this._http.get(this.getUserUrl(id))
                .map(res => res.json());
    }

    editUser(id,userData){
        return this._http.put(this.getUserUrl(id), JSON.stringify(userData))
                .map(res => res.json());
    }

    private getUserUrl(id){
        return this._userUrl + '/' + id;
    }

    
}