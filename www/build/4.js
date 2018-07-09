webpackJsonp([4],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_transactions_api_transactions_api__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(auth, nav, transactionApi, loadingController) {
        this.auth = auth;
        this.nav = nav;
        this.transactionApi = transactionApi;
        this.loadingController = loadingController;
        this.getUserDetails();
        this.getAccountSummary();
    }
    HomePage.prototype.getUserDetails = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting account data...'
        });
        loader.present().then(function () {
            _this.transactionApi.getUserDetails()
                .then(function (data) {
                _this.userDetails = data;
                loader.dismiss();
            });
        });
    };
    HomePage.prototype.getAccountSummary = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting account data...'
        });
        loader.present().then(function () {
            _this.transactionApi.getAccountSummary()
                .then(function (data) {
                _this.accountSummary = data;
                loader.dismiss();
            });
        });
    };
    HomePage.prototype.ionViewCanEnter = function () {
        return true;
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.auth.signOut().then(function () {
            _this.nav.setRoot('LoginPage');
        });
    };
    HomePage.prototype.viewTransactions = function () {
        this.nav.push('TransactionsPage');
    };
    HomePage.prototype.viewContacts = function () {
        this.nav.push('ContactsPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/robert.lavender/http/ionic/hsbc-app/src/pages/home/home.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Your Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div *ngFor="let user of userDetails">\n      <h1>Welcome {{ user.fullname }}!</h1>\n\n      <h2>Your balance is: £{{ user.balance }}</h2>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block icon-end (click)="viewContacts()">\n          Pay Contacts\n          <ion-icon name="ios-arrow-forward"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block icon-end (click)="viewTransactions()">\n          All Transactions\n          <ion-icon name="ios-arrow-forward"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <h2>Summary</h2>\n\n  <ion-list>\n    <ion-item *ngFor="let data of accountSummary;">\n      {{data.type}}: <span style="float:right; font-size:1.5em;">£{{data.total}}</span>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block icon-end (click)="viewTransactions()">\n    View all\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robert.lavender/http/ionic/hsbc-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_transactions_api_transactions_api__["a" /* TransactionsApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.js.map