import {Component, OnInit} from 'angular2/core';

import {PostsService} from './posts.service';

@Component({
	selector: 'posts',
	templateUrl: 'app/posts/posts.template.html',
	providers: [PostsService]
})
export class PostsComponent implements OnInit {
	isLoading = true;
	posts = [];
	constructor(private postsService: PostsService){

	}
	ngOnInit(){
		this.postsService.getPosts()
			.subscribe(res => {
				this.posts = res;
				this.isLoading = false;	
			});
	}
}