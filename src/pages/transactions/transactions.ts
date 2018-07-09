import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
    public transactionApi: TransactionsApiProvider,
    public loadingController: LoadingController) {
      this.getTransactions();
  }

  getTransactions() {
    let loader = this.loadingController.create({
      content: 'Getting transaction data...'
    });

    loader.present().then(() => {
      this.transactionApi.getTransactions()
      .then(data => {
        this.transactions = data;
        loader.dismiss();
      });
    });
  }

  ionViewDidLoad() {
  }

  itemSelected(item) {
    this.navCtrl.push('TransactionDetailPage', { id: item })
  }

}
