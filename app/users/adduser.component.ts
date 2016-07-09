import {Component } from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
@Component({
  selector: 'adduser-form', 
  templateUrl:'app/users/adduser.template.html' 
})
export class AddUserComponent {
	addUserForm: ControlGroup;

    constructor(fb: FormBuilder){
      this.addUserForm = fb.group({
        
      })
    }
}