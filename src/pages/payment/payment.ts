import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TransactionsApiProvider } from '../../providers/transactions-api/transactions-api';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  contact;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public transactionApi: TransactionsApiProvider) {
      console.log(this.navParams.get('id'));
      this.contact = this.transactionApi.getContactById(this.navParams.get('id'));
  }

  ionViewDidLoad() {
  }
  

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
