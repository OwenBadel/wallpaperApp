import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';









@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  emailController:FormControl = new FormControl('',[Validators.required,Validators.email])
  passwordController:FormControl= new FormControl('',[Validators.required])

  constructor() { }

  ngOnInit() {
  
      




  }




}




