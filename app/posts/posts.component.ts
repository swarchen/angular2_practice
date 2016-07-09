import {Component } from 'angular2/core';
@Component({selector: 'posts', template: '<h2>This is posts component.</h2><h3>Name: {{ name }}</h3>}'})
export class PostsComponent {
  name: string = 'Angular2 User';
}