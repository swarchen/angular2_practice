import {Component } from 'angular2/core';
@Component({selector: 'users', template: '<h2>This is users component.</h2><h3>Name: {{ name }}</h3>}'})
export class UsersComponent {
  name: string = 'Angular2 User';
}