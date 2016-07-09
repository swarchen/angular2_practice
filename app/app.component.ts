import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.Component';
import {PostsComponent} from './posts/posts.Component';
import {UsersComponent} from './users/users.Component';
import {AddUserComponent} from './users/adduser.component';

@RouteConfig([
    {path:'/', name:"Home", component:HomeComponent, useAsDefault:true},
    {path:'/users', name:"Users", component:UsersComponent},
    {path:'/users/adduser', name:"AddUser", component:AddUserComponent},
    {path:'/posts', name:"Posts", component:PostsComponent},
    {path:'/*others', name:"Others", redirectTo:['Home']},
])
@Component({
    selector: 'my-app',
    template: `
        <nav-bar></nav-bar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavBarComponent]
})
export class AppComponent { }