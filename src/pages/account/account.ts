import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TransactionsApiProvider } from '../../providers/transactions-api/transactions-api';


@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  userDetails;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public transactionApi: TransactionsApiProvider,
    public loadingController: LoadingController) {
      this.getUserDetails();
  }

  getUserDetails() {
    let loader = this.loadingController.create({
      content: 'Getting account data...'
    });

    loader.present().then(() => {
      this.transactionApi.getUserDetails()
      .then(data => {
        this.userDetails = data;
        loader.dismiss();
      });
    });
  }

  ionViewDidLoad() {
  }

}
