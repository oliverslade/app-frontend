import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TransactionsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransactionsApiProvider {

  data = [{"amount":250,"date":"01/07/2018","account":"My Current Account","type":"Direct Debit","description":"Gas and Electric"},{"amount":3.99,"date":"25/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Lunch"},{"amount":9.99,"date":"24/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"New hat"},{"amount":20,"date":"23/06/2018","account":"My Current Account","type":"Transfer","description":"Splitting dinner with Kate"},{"amount":64.54,"date":"23/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Weekly groceries"},{"amount":200,"date":"20/06/2018","account":"My Current Account","type":"Transfer","description":"Monthly savings"},{"amount":10,"date":"19/06/2018","account":"My Current Account","type":"ATM Withdrawal","description":"None"},{"amount":45.34,"date":"15/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Theatre Tickets"}];

  constructor(public http: HttpClient) {
    console.log('Hello TransactionsApiProvider Provider');
  }

  getTransactionById(id) {
    console.log("Trans API: ", id);
    return this.data[id];
  }

}
