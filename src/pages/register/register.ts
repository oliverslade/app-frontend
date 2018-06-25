import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController} from 'ionic-angular';
import { ValidatorProvider } from '../../providers/validator/validator';
import { AuthService } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;

  registerUser: FormGroup;

  signupError: string;
 
  constructor(
    private nav: NavController,
    private auth: AuthService,
    public formBuilder: FormBuilder,
    public _VAL: ValidatorProvider) {

      this.registerUser = formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, , Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, , Validators.minLength(6)]]
      }, {
        validator: _VAL.MatchPassword
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  public signup() {
    let data = this.registerUser.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signUp(credentials).then(
      () => this.nav.setRoot('HomePage'),
      error => this.signupError = error.message
    );
  }

}
