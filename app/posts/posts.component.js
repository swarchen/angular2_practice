System.register(['angular2/core', './posts.service', '../shared/spinner.component'], function(exports_1, context_1) {
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
    var core_1, posts_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(postsService) {
                    this.postsService = postsService;
                    this.isLoading = true;
                    this.posts = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.postsService.getPosts()
                        .subscribe(function (res) {
                        _this.posts = res;
                        _this.isLoading = false;
                    });
                };
                PostsComponent.prototype.onPostClick = function (post) {
                    var _this = this;
                    this.currentpost = post;
                    this.postsService.getPostComment(post)
                        .subscribe(function (res) { return _this.currentpost.comments = res; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: 'app/posts/posts.template.html',
                        providers: [posts_service_1.PostsService],
                        directives: [spinner_component_1.SpinnerComponent],
                        styles: ["\n\t\t.posts li { cursor: default; } \n\t\t.posts li:hover { background: #ecf0f1; }\n\t\t.list-group-item.active,   .list-group-item.active:hover,   .list-group-item.active:focus {  \n\t\tbackground-color: #ecf0f1;  border-color: #ecf0f1;   color: #2c3e50; \n\t\t}\n\t\timg {border-radius: 100%;}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.Component.js.map