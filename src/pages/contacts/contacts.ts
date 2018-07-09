import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionsApiProvider } from '../../providers/transactions-api/transactions-api';

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  contacts;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public transactionApi: TransactionsApiProvider) {
      this.getContacts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }


  getContacts() {
    this.transactionApi.getContacts()
    .then(data => {
      this.contacts = data;
      console.log(this.contacts);
    });
  }

}
