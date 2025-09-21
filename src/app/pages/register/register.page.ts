import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { v4 as uuidv4 } from 'uuid';



interface Idata {

}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})






export class RegisterPage implements OnInit {

  nameController: FormControl = new FormControl('', [Validators.required])
  lastNameController: FormControl = new FormControl('', [Validators.required])
  emailController: FormControl = new FormControl('', [Validators.required, Validators.email])
  passwordController: FormControl = new FormControl('', [Validators.required])
  confirmPasswordController: FormControl = new FormControl('', [Validators.required])
  countryController: FormControl = new FormControl('', [Validators.required])
  constructor() { }




  ngOnInit() {
   }

  async onSubmit() {
    

  if (!this.emailController.valid) {
    console.log('Invalid email format');
    return;
  }

  if (this.passwordController.value.trim() !== this.confirmPasswordController.value.trim()) {


}






  }




}
