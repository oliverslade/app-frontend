import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TransactionsApiProvider } from '../../providers/transactions-api/transactions-api';

import { PaymentPage } from '../payment/payment';

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
    public transactionApi: TransactionsApiProvider,
    public modalCtrl: ModalController) {
      this.getContact();
  }

  ionViewDidLoad() {
  }

  
  getContact() {
    this.transactionApi.getContacts()
    .then(data => {
      this.contacts = data;
      // console.log(this.contacts);
    });
  }

  payContact(id) {
    const modal = this.modalCtrl.create(PaymentPage, {id: id});
    modal.present();
  }

}
