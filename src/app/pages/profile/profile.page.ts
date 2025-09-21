import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from "src/app/shared/shared-module";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {


  nameController: FormControl = new FormControl('', [Validators.required])
  lastNameController: FormControl = new FormControl('', [Validators.required])
  emailController: FormControl = new FormControl('', [Validators.required, Validators.email])
  passwordController: FormControl = new FormControl('', [Validators.required])
  newPasswordController: FormControl = new FormControl('', [Validators.required])
  countryController: FormControl = new FormControl('', [Validators.required])
  
  
  constructor() { }

 ngOnInit() {
 
}

onSubmit() {
     if (!this.passwordController.valid || !this.newPasswordController.valid) {
    console.log('you must fill the password fields');
    return;
  }

  if (!this.emailController.valid) {
    console.log('Invalid email format');
    return;
  }




}

}