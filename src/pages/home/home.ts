import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { TransactionsApiProvider } from '../../providers/transactions-api/transactions-api';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // data = [{"amount":250,"date":"01/07/2018","account":"My Current Account","type":"Direct Debit","description":"Gas and Electric"},{"amount":3.99,"date":"25/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Lunch"},{"amount":9.99,"date":"24/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"New hat"},{"amount":20,"date":"23/06/2018","account":"My Current Account","type":"Transfer","description":"Splitting dinner with Kate"},{"amount":64.54,"date":"23/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Weekly groceries"},{"amount":200,"date":"20/06/2018","account":"My Current Account","type":"Transfer","description":"Monthly savings"},{"amount":10,"date":"19/06/2018","account":"My Current Account","type":"ATM Withdrawal","description":"None"},{"amount":45.34,"date":"15/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Theatre Tickets"}];

  transactions;
  userDetails;
  accountSummary;

  constructor(
    private auth: AuthService,
    public nav: NavController,
    public transactionApi: TransactionsApiProvider,
    public loadingController: LoadingController) {

      this.getUserDetails();
      this.getAccountSummary();
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

  getAccountSummary() {
    let loader = this.loadingController.create({
      content: 'Getting account data...'
    });

    loader.present().then(() => {
      this.transactionApi.getAccountSummary()
      .then(data => {
        this.accountSummary = data;
        loader.dismiss();
      });
    });
  }

  ionViewCanEnter(): Boolean {
    return true;
  }

  ionViewDidLoad() {
    
  }

  public logout() {
    this.auth.signOut().then(
      () => {
        this.nav.setRoot('LoginPage')
      }
    );
  }

  viewTransactions() {
    this.nav.push('TransactionsPage');
  }

  viewContacts() {
    this.nav.push('ContactsPage');
  }

}
