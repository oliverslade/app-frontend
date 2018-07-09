import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TransactionsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransactionsApiProvider {

  data;
  contacts;

  apiUrl = 'http://35.234.115.241/';
  constructor(public http: HttpClient) {
    //console.log('Hello TransactionsApiProvider Provider');
  }

  getTransactions() {
    return new Promise(resolve => {
      this.http.get('http://35.234.115.241/transactions').subscribe(data => {
        console.log('Transaction Data: ', data, typeof(data));
        this.data = data;
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getTransactionById(id) {
    return this.data[id];
  }

  getUserDetails() {
    return new Promise(resolve => {
      this.http.get('http://35.234.82.10/account').subscribe(data => {
        //console.log('User Data: ', data, typeof(data));
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getAccountSummary() {
    return new Promise(resolve => {
      this.http.get('http://35.234.115.241/summary').subscribe(data => {
        //console.log('User Data: ', data, typeof(data));
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getContacts() {
    return new Promise(resolve => {
      this.http.get('http://35.198.113.119/contacts').subscribe(data => {
        this.contacts = data;
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getContactById(id) {
    return this.contacts[id];
  }
  

}
