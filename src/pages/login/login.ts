import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  loginForm: FormGroup;
  loginError: string;
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(
    public nav: NavController,
    private auth: AuthService,
    public formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {

      this.loginForm = formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  public createAccount() {
    console.log('Create Account');
    this.nav.push('RegisterPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  public login() {
    //this.showLoading()

    // let data = this.loginForm.value;

		// if (!data.email) {
		// 	return;
    // }
    
    // let credentials = { 
    //   email: data.email,
    //   password: data.password
    // };

    // this.auth.signInWithEmail(credentials).then(
    //   () => this.nav.setRoot('HomePage'),
    //   error => this.showError(error)
    // );
    console.log("Navigate to home page.")
    this.nav.setRoot('HomePage')
  }

  loginWithGoogle() {
    this.auth.signInWithGoogle()
      .then(
        () => this.nav.setRoot('HomePage'),
        error => console.log(error.message)
      );
  }

}
