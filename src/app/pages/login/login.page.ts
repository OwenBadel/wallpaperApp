import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';  
import { SharedModule } from 'src/app/shared/shared-module';







@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
  
})
export class LoginPage implements OnInit {

  emailController:FormControl = new FormControl('',[Validators.required,Validators.email])
  passwordController:FormControl= new FormControl('',[Validators.required])

  public language = false;

    public changeLang(state: boolean) {
    const lang = state ? 'es' : 'en';
    this.translateSrv.useLang(lang);
  }
  constructor( ) { }

  ngOnInit() {
  
      




  }




}




