webpackJsonp([1],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailPageModule", function() { return TransactionDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_detail__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionDetailPageModule = /** @class */ (function () {
    function TransactionDetailPageModule() {
    }
    TransactionDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction_detail__["a" /* TransactionDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_detail__["a" /* TransactionDetailPage */]),
            ],
        })
    ], TransactionDetailPageModule);
    return TransactionDetailPageModule;
}());

//# sourceMappingURL=transaction-detail.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transactions_api_transactions_api__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionDetailPage = /** @class */ (function () {
    function TransactionDetailPage(navCtrl, navParams, transactionApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactionApi = transactionApi;
        // data = [{"amount":250,"date":"01/07/2018","account":"My Current Account","type":"Direct Debit","description":"Gas and Electric"},{"amount":3.99,"date":"25/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Lunch"},{"amount":9.99,"date":"24/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"New hat"},{"amount":20,"date":"23/06/2018","account":"My Current Account","type":"Transfer","description":"Splitting dinner with Kate"},{"amount":64.54,"date":"23/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Weekly groceries"},{"amount":200,"date":"20/06/2018","account":"My Current Account","type":"Transfer","description":"Monthly savings"},{"amount":10,"date":"19/06/2018","account":"My Current Account","type":"ATM Withdrawal","description":"None"},{"amount":45.34,"date":"15/06/2018","account":"My Current Account","type":"Debit Card Transaction","description":"Theatre Tickets"}];
        this.transactionID = 0;
        this.transactionID = this.navParams.get('id');
        //this.transaction = this.data[this.transactionID];
        this.transaction = this.transactionApi.getTransactionById(this.transactionID);
        //console.log("test", this.transaction)
    }
    TransactionDetailPage.prototype.ionViewDidLoad = function () {
        // this.transaction = this.data[this.transactionID];
        // setTimeout(() => {
        //   this.transaction = this.transactionApi.getTransactionById(this.transactionID);
        //   console.log("test", this.transaction)
        // }, 300);
        //this.transaction = this.transactionApi.getTransactionById(3);
        // console.log("test", this.transaction)
    };
    TransactionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'transaction-detail',template:/*ion-inline-start:"/Users/robert.lavender/http/ionic/hsbc-app/src/pages/transaction-detail/transaction-detail.html"*/'<!--\n  Generated template for the TransactionDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transaction details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n      <ion-card-header>\n        {{ transaction.description }}\n      </ion-card-header>\n      <ion-card-content>\n        <span style="font-size:3em;">£{{ transaction.amount }}</span><br>\n        {{ transaction.account }}<br>\n        {{ transaction.type }}<br>\n        {{ transaction.date }} \n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/robert.lavender/http/ionic/hsbc-app/src/pages/transaction-detail/transaction-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_transactions_api_transactions_api__["a" /* TransactionsApiProvider */]])
    ], TransactionDetailPage);
    return TransactionDetailPage;
}());

//# sourceMappingURL=transaction-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map