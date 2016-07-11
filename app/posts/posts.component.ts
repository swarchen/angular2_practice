import {Component, OnInit} from 'angular2/core';

import {PostsService} from './posts.service';
import {UsersService} from '../users/users.service';
import {SpinnerComponent} from '../shared/spinner.component';

@Component({
	selector: 'posts',
	templateUrl: 'app/posts/posts.template.html',
	providers: [PostsService, UsersService],
	directives: [SpinnerComponent],
	styles: [`
		.posts li { cursor: default; } 
		.posts li:hover { background: #ecf0f1; }
		.list-group-item.active,   .list-group-item.active:hover,   .list-group-item.active:focus {  
		background-color: #ecf0f1;  border-color: #ecf0f1;   color: #2c3e50; 
		}
		img {border-radius: 100%;}
	`]

})
export class PostsComponent implements OnInit {
	postsLoading = true;
	commentsLoading = true;
	posts = [];
	users = [];
	currentpost;
	constructor(
		private postsService: PostsService
		private usersService: UsersService) {

	}

	ngOnInit() {
		this.postsService.getPosts()
			.subscribe(res => {
				this.posts = res;
				this.postsLoading = false;
			});
		this.usersService.getUsers()
			.subscribe(res => this.users = res);
	}

	onPostClick(post) {
		this.currentpost = post;
		this.commentsLoading = true;
		this.postsService.getPostComment(post)
			.subscribe(res => {
				this.currentpost.comments = res;
				this.commentsLoading = false;
			});
	}

	reloadPosts(filter){
		this.postsLoading = true;
		this.postsService.getPosts(filter)
			.subscribe(res => {
				this.posts = res;
				this.postsLoading = false;
			})
	}
}