import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:String = 'LoginPage';

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private auth: AuthService) {

      platform.ready().then(() => {
        this.initializeApp();
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // this.auth.afAuth.authState
    // .subscribe(
    //   user => {
    //     if (user) {
    //       this.rootPage = 'HomePage';
    //     } else {
    //       this.rootPage = 'LoginPage';
    //     }
    //   },
    //   () => {
    //     this.rootPage = 'LoginPage';
    //   }
    // );

    this.rootPage = 'LoginPage';
  }

}

