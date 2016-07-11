System.register(['angular2/core', './posts.service', '../users/users.service', '../shared/spinner.component', '../shared/pagination.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, posts_service_1, users_service_1, spinner_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(postsService, usersService) {
                    this.postsService = postsService;
                    this.usersService = usersService;
                    this.commentsLoading = true;
                    this.posts = [];
                    this.pagedposts = [];
                    this.currentPage = 1;
                    this.pagesize = 10;
                    this.users = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadPosts();
                    this.loadUsers();
                };
                PostsComponent.prototype.getPostsInPage = function (page) {
                    var result = [];
                    var startingIndex = (page - 1) * this.pagesize;
                    var endIndex = Math.min(startingIndex + this.pagesize, this.posts.length);
                    for (var i = startingIndex; i < endIndex; i++)
                        result.push(this.posts[i]);
                    return result;
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this.usersService.getUsers()
                        .subscribe(function (res) { return _this.users = res; });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.postsLoading = true;
                    this.postsService.getPosts(filter)
                        .subscribe(function (res) {
                        _this.posts = res;
                        _this.pagedposts = _this.getPostsInPage(1);
                    }, null, function () { return _this.postsLoading = false; });
                    ;
                };
                PostsComponent.prototype.onPostClick = function (post) {
                    var _this = this;
                    this.currentpost = post;
                    this.commentsLoading = true;
                    this.postsService.getPostComment(post)
                        .subscribe(function (res) { return _this.currentpost.comments = res; }, null, function () { return _this.commentsLoading = false; });
                };
                PostsComponent.prototype.reloadPosts = function (filter) {
                    this.currentpost = null;
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.onPageChanged = function (page) {
                    this.pagedposts = this.getPostsInPage(page);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: 'app/posts/posts.template.html',
                        providers: [posts_service_1.PostsService, users_service_1.UsersService],
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
                        styles: ["\n\t\t.posts li { cursor: default; } \n\t\t.posts li:hover { background: #ecf0f1; }\n\t\t.list-group-item.active,   .list-group-item.active:hover,   .list-group-item.active:focus {  \n\t\tbackground-color: #ecf0f1;  border-color: #ecf0f1;   color: #2c3e50; \n\t\t}\n\t\timg {border-radius: 100%;}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.Component.js.map