import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionsApiProvider } from '../../providers/transactions-api/transactions-api';

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  transactions;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public transactionApi: TransactionsApiProvider) {
      this.getTransactions();
  }

  getTransactions() {
    this.transactionApi.getTransactions()
    .then(data => {
      this.transactions = data;
      console.log(this.transactions);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
  }

  itemSelected(item) {
    console.log(item);
    this.navCtrl.push('TransactionDetailPage', { id: item })
  }

}
