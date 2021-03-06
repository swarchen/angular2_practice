import {HTTP_PROVIDERS, Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    
    private _postUrl = "http://jsonplaceholder.typicode.com/posts";
    constructor(private _http: Http) {
    }

    getPosts(filter?){
        var url = this._postUrl;

        if(filter && filter.userId)
            url += '?userId=' + filter.userId;
        return this._http.get(url)
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