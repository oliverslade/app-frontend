import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:String = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

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
      this.pages = [
        { title: 'Account', component: 'HomePage' },
        { title: 'Contacts', component: 'TransactionsPage' },
        { title: 'Transactions', component: 'TransactionsPage' },
        { title: 'Spending Summary', component: 'TransactionsPage' }
      ];
    });

    this.rootPage = 'LoginPage';

  }

  openPage(page) {
    if(page.title === 'Home'){
      this.nav.popToRoot();
    } else {
      this.nav.push(page.component);
    }   
  }

  logout() {
    this.nav.setRoot('LoginPage')
  }

}

