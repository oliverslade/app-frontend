import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
    public formBuilder: FormBuilder) {

      this.registerUser = formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, , Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, , Validators.minLength(6)]]
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
