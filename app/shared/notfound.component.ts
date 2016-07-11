import {Component } from '@angular/core';
@Component({selector: 'not-found', template: '<h2>This is not-found component.</h2><h3>Name: {{ name }}</h3>}'})
export class NotFoundComponent {
  name: string = 'Angular2 User';
}