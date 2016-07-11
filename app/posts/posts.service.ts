import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    
    private _postUrl = "http://jsonplaceholder.typicode.com/posts";
    constructor(private _http: Http) {
    }

    getPosts(){
        return this._http.get(this._postUrl)
                .map(res => res.json());
    }

    getPostComment(post){
        return this._http.get(this.getCommentUrl(post))
                .map(res => res.json());
    }

    private getCommentUrl(post){
        return this._postUrl + '/' + post.id + '/comments'; 
    }
}