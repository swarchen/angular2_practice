import {Component, OnInit} from '@angular/core';

import {PostsService} from './posts.service';
import {UsersService} from '../users/users.service';
import {SpinnerComponent} from '../shared/spinner.component';
import {PaginationComponent} from '../shared/pagination.component';

@Component({
	selector: 'posts',
	templateUrl: 'app/posts/posts.template.html',
	providers: [PostsService, UsersService],
	directives: [SpinnerComponent, PaginationComponent],
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
	postsLoading;
	commentsLoading = true;
	posts = [];
	pagedposts = [];
	currentPage = 1;
	pagesize = 10;
	users = [];
	currentpost;
	constructor(
		private postsService: PostsService,
		private usersService: UsersService) {

	}

	ngOnInit() {
		this.loadPosts();
		this.loadUsers();
	}

	private loadUsers(){
		this.usersService.getUsers()
			.subscribe(res => this.users = res);
	}

	private loadPosts(filter?){
		this.postsLoading = true;
		this.postsService.getPosts(filter)
			.subscribe(res => {
				this.posts = res;
				this.pagedposts = _.take(this.posts, this.pagesize);
			},
			null,
			() => this.postsLoading = false);
	}

	onPostClick(post) {
		this.currentpost = post;
		this.commentsLoading = true;
		this.postsService.getPostComment(post)
			.subscribe(
				res => this.currentpost.comments = res,
				null,
				() => this.commentsLoading = false
			);
	}

	reloadPosts(filter){
		this.currentpost = null;
		this.loadPosts(filter);
	}

	onPageChanged(page){
		var startIndex = (page - 1) * this.pagesize;
		
		this.pagedposts = _.take(_.rest(this.posts, startIndex), this.pagesize);
	}
}