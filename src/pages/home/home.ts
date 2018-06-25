import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private auth: AuthService,
    public nav: NavController) {

  }

  ionViewCanEnter(): Boolean {
    return this.auth.authenticated();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public logout() {
    this.auth.signOut().then(
      () => {
        this.nav.setRoot('LoginPage')
      }
    );
  }


}
