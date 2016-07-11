import {Component, OnInit} from 'angular2/core';

import {PostsService} from './posts.service';
import {SpinnerComponent} from '../shared/spinner.component';

@Component({
	selector: 'posts',
	templateUrl: 'app/posts/posts.template.html',
	providers: [PostsService],
	directives: [SpinnerComponent],
	styles : [`
		.posts li { cursor: default; } 
		.posts li:hover { background: #ecf0f1; }
		.list-group-item.active,   .list-group-item.active:hover,   .list-group-item.active:focus {  
		background-color: #ecf0f1;  border-color: #ecf0f1;   color: #2c3e50; 
		}
		img {border-radius: 100%;}
	`] 
	
})
export class PostsComponent implements OnInit {
	isLoading = true;
	posts = [];
	currentpost;
	constructor(private postsService: PostsService){

	}

	ngOnInit(){
		this.postsService.getPosts()
			.subscribe(res => {
				this.posts = res;
				this.isLoading = false;	
			});
	}

	onPostClick(post){
		this.currentpost = post;
		this.postsService.getPostComment(post)
			.subscribe(res => this.currentpost.comments = res);
	}
}