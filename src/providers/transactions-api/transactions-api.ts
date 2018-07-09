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
    console.log("Trans API: ", id);
    return this.data[id];
  }

  getUserDetails() {
    console.log("Trans API: getUser");
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
    console.log("Trans API: getAccountSummary");
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
    console.log("Trans API: getContacts");
    return new Promise(resolve => {
      this.http.get('http://35.198.113.119/contacts').subscribe(data => {
        //console.log('User Data: ', data, typeof(data));
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  

}
