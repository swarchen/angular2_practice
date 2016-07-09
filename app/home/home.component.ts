import {Component } from 'angular2/core';
@Component({selector: 'home', template: '<h2>This is home component.</h2><h3>Name: {{ name }}</h3>}'})
export class HomeComponent {
  name: string = 'Angular2 User';
}