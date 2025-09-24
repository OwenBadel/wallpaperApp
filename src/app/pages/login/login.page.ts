import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loading } from 'src/app/core/providers/loadings/loading';
import { NativeToast } from 'src/app/core/providers/nativeToast/nativeToast';
import { Translate } from 'src/app/core/providers/translate/translate';
import { User } from 'src/app/shared/services/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  public language = false;
  public email!: FormControl;
  public password!: FormControl;
  public loginForm!: FormGroup;

  constructor(
    private userSrv: User,
    private readonly router: Router,
    private loadingSrv: Loading,
    private translateSrv: Translate,
    private toastSrv: NativeToast,
  ) { }

  ngOnInit() {
    this.initForm();
    // Set language toggle based on current language
    this.language = this.translateSrv.getCurrentLang() === 'es';
  }

  public changeLang(state: boolean) {
    const lang = state ? 'es' : 'en';
    this.translateSrv.useLang(lang);
  }

  public async logIn() {
    if (this.loginForm.invalid) {
      await this.toastSrv.show('Please fill all required fields');
      return;
    }

    try {
      await this.loadingSrv.present({
        msg: this.translateSrv.instant('COMMON.LOADING')
      });
      
      await this.userSrv.logIn(this.email.value, this.password.value);
      await this.loadingSrv.dimiss();
      await this.router.navigate(['/home']);
    } catch (error) {
      await this.loadingSrv.dimiss();
      await this.toastSrv.show('Invalid credentials. Please try again.');
      console.error('Login error:', error);
    }
  }

  private initForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

}