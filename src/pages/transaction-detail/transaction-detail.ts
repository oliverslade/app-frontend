import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { TransactionsApiProvider } from '../../providers/transactions-api/transactions-api';
/**
 * Generated class for the TransactionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'transaction-detail',
  templateUrl: 'transaction-detail.html',
})
export class TransactionDetailPage {

  data = [{"amount":250,"date":"01/07/2018","account":"My Current Account","type":"Direct Debit","description":"Gas and Electric"},{"amount":3.99,"date":"25/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Lunch"},{"amount":9.99,"date":"24/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"New hat"},{"amount":20,"date":"23/06/2018","account":"My Current Account","type":"Transfer","description":"Splitting dinner with Kate"},{"amount":64.54,"date":"23/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Weekly groceries"},{"amount":200,"date":"20/06/2018","account":"My Current Account","type":"Transfer","description":"Monthly savings"},{"amount":10,"date":"19/06/2018","account":"My Current Account","type":"ATM Withdrawal","description":"None"},{"amount":45.34,"date":"15/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Theatre Tickets"}];

  transactionID = 0;
  transaction;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.transactionID = this.navParams.get('id');
    this.transaction = this.data[this.transactionID];
    console.log("test", this.transaction)
  }

  ionViewDidLoad() {
    // this.transaction = this.data[this.transactionID];
    // setTimeout(() => {
    //   this.transaction = this.transactionApi.getTransactionById(this.transactionID);
    //   console.log("test", this.transaction)
    // }, 300);
    
    //this.transaction = this.transactionApi.getTransactionById(3);
    // console.log("test", this.transaction)
  }

}
