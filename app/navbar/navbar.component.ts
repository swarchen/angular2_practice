import {Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';


@Component({
    selector: 'nav-bar', 
    template: `
    <nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" [routerLink]="['Home']">ngProject</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li [class.active]="isCurrentRoute(['Users'])"><a [routerLink]="['Users']">Users</a></li>
            <li [class.active]="isCurrentRoute(['Posts'])"><a [routerLink]="['Posts']">Posts</a></li>
        </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    </nav>
    `,
    directives: [ROUTER_DIRECTIVES] 
})
export class NavBarComponent {
    constructor(private _router: Router){
    }

    isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
}