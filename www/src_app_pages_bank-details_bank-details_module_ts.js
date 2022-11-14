"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_bank-details_bank-details_module_ts"],{

/***/ 5362:
/*!*******************************************************************!*\
  !*** ./src/app/pages/bank-details/bank-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDetailsPageRoutingModule": () => (/* binding */ BankDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bank_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-details.page */ 89542);




const routes = [
    {
        path: '',
        component: _bank_details_page__WEBPACK_IMPORTED_MODULE_0__.BankDetailsPage
    }
];
let BankDetailsPageRoutingModule = class BankDetailsPageRoutingModule {
};
BankDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BankDetailsPageRoutingModule);



/***/ }),

/***/ 22351:
/*!***********************************************************!*\
  !*** ./src/app/pages/bank-details/bank-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDetailsPageModule": () => (/* binding */ BankDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _bank_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-details-routing.module */ 5362);
/* harmony import */ var _bank_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-details.page */ 89542);







let BankDetailsPageModule = class BankDetailsPageModule {
};
BankDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bank_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankDetailsPageRoutingModule
        ],
        declarations: [_bank_details_page__WEBPACK_IMPORTED_MODULE_1__.BankDetailsPage]
    })
], BankDetailsPageModule);



/***/ }),

/***/ 89542:
/*!*********************************************************!*\
  !*** ./src/app/pages/bank-details/bank-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDetailsPage": () => (/* binding */ BankDetailsPage)
/* harmony export */ });
/* harmony import */ var D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bank_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-details.page.html?ngResource */ 26137);
/* harmony import */ var _bank_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-details.page.scss?ngResource */ 63168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/util.service */ 19915);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 41059);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 23081);
/* harmony import */ var src_app_service_firestorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/firestorage.service */ 39319);











 // import {File} from '@awesome-cordova-plugins/file/ngx'




let BankDetailsPage = class BankDetailsPage {
  constructor(router, api, util, file, fileTransfer, fileopen, storageSer, inituser, firestore) {
    this.router = router;
    this.api = api;
    this.util = util;
    this.file = file;
    this.fileTransfer = fileTransfer;
    this.fileopen = fileopen;
    this.storageSer = storageSer;
    this.inituser = inituser;
    this.firestore = firestore;
    this.currency = [];
    this.countryNot = false;
    this.AccouNot = false;
    this.bankcodeNot = false;
    this.bankNameNot = false;
    this.streetNot = false;
    this.cityNot = false;
    this.swiftNot = false;
    this.currencyNot = false;
    this.docNot = false;
    this.BankDetails = {
      country: '',
      IBAN: '',
      Account_no: '',
      bank_code: '',
      bank_name: '',
      street: '',
      city: '',
      swift_bic: '',
      currency: '',
      document: ''
    };
    this.loggedInVendor = this.inituser.getVendorData();
    this.conName = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.COUNTRY_WITH_CURRENCIES;
    this.currency = this.conName;
    src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.COUNTRY_WITH_CURRENCIES.map(user => {// console.log(user.code)
      // this.country.push(user.name) 
    });
    console.log(this.currency);
  }

  ngOnInit() {}

  moveToBack() {
    this.router.navigate(['pages/vendor-contact-profile']);
  }

  moveTo() {
    this.loggedInVendor = this.inituser.getVendorData();
    const Contact = {
      id: this.loggedInVendor.id,
      Iban_country: this.loggedInVendor.Iban_country,
      iban: this.loggedInVendor.iban,
      account: this.loggedInVendor.account,
      bank_code: this.loggedInVendor.bank_code,
      bank_name: this.loggedInVendor.bank_name,
      ibanStreet: this.loggedInVendor.ibanStreet,
      ibanCity: this.loggedInVendor.ibanCity,
      swift_bic: this.loggedInVendor.swift_bic,
      currency: this.loggedInVendor.currency,
      document: this.loggedInVendor.document,
      login_level: '4'
    };

    if (this.loggedInVendor.Iban_country !== null && this.loggedInVendor.account !== null && this.loggedInVendor.bank_code !== null && this.loggedInVendor.currency !== null && this.loggedInVendor.ibanStreet !== null && this.loggedInVendor.document !== null && this.loggedInVendor.ibanCity !== null && this.loggedInVendor.swift_bic !== null && this.loggedInVendor.bank_name !== null) {
      this.firestore.update('vendorAdd', Contact.id, Contact).then(res => {
        this.router.navigate(['pages/business-category']);
      });
    }

    this.fieldDetails();
  }

  moveToLog() {
    this.router.navigate(['/logout']);
  }

  fieldDetails() {
    if (this.loggedInVendor.Iban_country === null) {
      this.countryNot = true;
    } else {
      this.countryNot = false;
    }

    if (this.loggedInVendor.account === null) {
      this.AccouNot = true;
    } else {
      this.AccouNot = false;
    }

    if (this.loggedInVendor.bank_code === null) {
      this.bankcodeNot = true;
    } else {
      this.bankcodeNot = false;
    }

    if (this.loggedInVendor.bank_name === null) {
      this.bankNameNot = true;
    } else {
      this.bankNameNot = false;
    }

    if (this.loggedInVendor.ibanStreet === null) {
      this.streetNot = true;
    } else {
      this.streetNot = false;
    }

    if (this.loggedInVendor.ibanCity === null) {
      this.cityNot = true;
    } else {
      this.cityNot = false;
    }

    if (this.loggedInVendor.swift_bic === null) {
      this.swiftNot = true;
    } else {
      this.swiftNot = false;
    }

    if (this.loggedInVendor.currency === null) {
      this.currencyNot = true;
    } else {
      this.currencyNot = false;
    }

    if (this.loggedInVendor.document === null) {
      this.docNot = true;
    } else {
      this.docNot = false;
    }
  }

  fileopens() {
    this.file.checkDir(this.file.dataDirectory, 'mydir').then(fil => {
      console.log(fil);
    });
  }

  fileupload(event) {
    var _this = this;

    console.log(event);
    this.files = event.target.files[0];
    console.log(this.files);
    console.log(event.target.files[0].name);
    const name = event.target.files[0].name;
    this.storageSer.uploadContent(this.files, name).then( /*#__PURE__*/function () {
      var _ref = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (success) {
        // await this.loadingCtrl.dismiss();
        // this.createToast('image uploded', true, 'bottom', 2100);
        console.log('success', success);
        _this.loggedInVendor.document = success.url;
        console.log('success url', _this.loggedInVendor.document);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/function () {
      var _ref2 = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        // await this.loadingCtrl.dismiss();
        // this.createToast(`${err}`, true, 'bottom', 2100);
        console.log('err', err);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  Logout() {
    this.inituser.vendorLogout().then(logout => {
      console.log('id:null', logout);
      this.router.navigate(['pages/logout']);
    }); // this.router.navigate(['/logout'])
  }

};

BankDetailsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}, {
  type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_6__.UtilService
}, {
  type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File
}, {
  type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__.FileTransfer
}, {
  type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__.FileOpener
}, {
  type: src_app_service_firestorage_service__WEBPACK_IMPORTED_MODULE_11__.FirestorageService
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__.InituserService
}, {
  type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService
}];

BankDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-bank-details',
  template: _bank_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_bank_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], BankDetailsPage);


/***/ }),

/***/ 63168:
/*!**********************************************************************!*\
  !*** ./src/app/pages/bank-details/bank-details.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5rLWRldGFpbHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 26137:
/*!**********************************************************************!*\
  !*** ./src/app/pages/bank-details/bank-details.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row class=\"row1\">\n      <ion-col size=\"4\" class=\"content1\">\n      \n        <ion-label class=\"menu\" (click)=\"util.Logout()\">Logout</ion-label>\n        <br>\n        <br>\n        <ion-label class=\"menu\">FAQ</ion-label>\n        <br>\n        <br>\n    <ion-label class=\"menu\">Contact Us</ion-label>\n      </ion-col>\n      <ion-col size=\"8\" class=\"content2\">\n      \n        <ion-row>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">1</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">2</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">3</div>\n          </div>\n          </ion-col>\n          <ion-col>\n            <ion-label style=\"margin-left: -55px;\" color=\"primary\">Bank details</ion-label>\n              <div class=\"horizonal\"></div>\n              <div class=\"vertical\"></div>\n            <div class=\"backnum\">\n            <div class=\"numbor\">4</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">5</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">6</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">7</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">8</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">9</div>\n          </div>\n          </ion-col>\n        </ion-row>\n        <ion-progress-bar value=\"0.1\" class=\"bar1\"></ion-progress-bar>\n       <br>\n        <h4 style=\"text-align: center;\">Please provide us with your up-to-date bank account details.</h4>\n<h4 style=\"text-align: center;color: red;\">The new contact has been added successfully</h4>\n<ion-row class=\"back\" style=\"\npadding: 5px;margin-top: 2px;text-align: center;justify-content: center;color: black;font-weight: bold;\">Bank Account Details</ion-row>       \n<ion-row class=\"back\" style=\"\npadding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">General Details</ion-row>       \n\n<div class=\"login\" style=\"margin-top: 2px;\">\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n        Bank Country:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-select style=\"border: 1px solid lightgray;\" [(ngModel)]=\"loggedInVendor.Iban_country\">\n        <div *ngFor=\"let coun of currency\">\n          <ion-select-option>{{coun.name}}</ion-select-option>\n        </div>\n      </ion-select>\n      <ion-label *ngIf=\"countryNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;\">\n   IBAN Account:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n <ion-checkbox style=\"vertical-align: bottom;\"></ion-checkbox>\n <ion-label style=\"margin-left:5px;\">Yes, we have an IBAN account.</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n  Bank Account Number:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-input class=\"input\" [(ngModel)]=\"loggedInVendor.account\"></ion-input>\n      <ion-label *ngIf=\"AccouNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n         Bank Code/Key:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-input class=\"input\" [(ngModel)]=\"loggedInVendor.bank_code\"></ion-input>\n      <ion-label *ngIf=\"bankcodeNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n     Bank Name:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-input class=\"input\" [(ngModel)]=\"loggedInVendor.bank_name\"></ion-input>\n      <ion-label *ngIf=\"bankNameNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n Street:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-input class=\"input\" [(ngModel)]=\"loggedInVendor.ibanStreet\"></ion-input>\n      <ion-label *ngIf=\"streetNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n  City:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-input class=\"input\" [(ngModel)]=\"loggedInVendor.ibanCity\"></ion-input>\n      <ion-label *ngIf=\"cityNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n  SWIFT/BIC:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-input class=\"input\" style=\"width: 150px;\" [(ngModel)]=\"loggedInVendor.swift_bic\"></ion-input>\n      <ion-label *ngIf=\"swiftNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\nCurrency:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-select style=\"border: 1px solid lightgray;\" [(ngModel)]=\"loggedInVendor.currency\">\n        <div *ngFor=\"let curr of currency\">\n          <ion-select-option>{{curr.code}}</ion-select-option>\n        </div>\n        <!-- <ion-select-option>Rupee</ion-select-option> -->\n      </ion-select>\n      <ion-label *ngIf=\"currencyNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\n        Bank Details Document:\n        <p style=\"color: red;\">Please upload a PDF of an officical document confirming your banking details.</p>\n      </ion-label>\n    </ion-col>\n    <!-- <ion-col size=\"9\">\n    <ion-input type=\"file\" class=\"input\" style=\"width: 150px;\" (ionChange)=\"fileupload($event)\"></ion-input>\n      <ion-label style=\"vertical-align: sub;\">   No file selected.</ion-label>\n      <ion-label *ngIf=\"docNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col> -->\n  <input type=\"file\" class=\"input\" style=\"width: 150px;\" (change)=\"fileupload($event)\">\n\n    </ion-row>\n  <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n    <ion-col size=\"8\"></ion-col>\n    <ion-col size=\"4\">\n      <ion-button class=\"btnLogin\" (click)=\"moveToBack()\"> \n        <ion-icon name=\"chevron-back\"></ion-icon>\n        <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>Back\n      </ion-button>\n  \n      <ion-button class=\"btnLogin\" (click)=\"moveTo()\">Next\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n        <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n\n</ion-col>\n    </ion-row>\n  </ion-grid>\n  <input type=\"file\" class=\"input\" style=\"width: 150px;\" (change)=\"fileupload($event)\">\n\n</ion-content>\n\n<!--<ion-slides pager=\"true\" [options]=\"slideOpts\">  \n  \n  <ion-slide>  \n    <img src=\"assets/jtp_logo.png\"/>  \n    <h2>Welcome to the <b>JavaTpoint</b></h2>  \n    <p>JavaTpoint offers Corporate Training, Summer Training, Online Training and Winter Training on Java, Android, Python, Oracle, PHP, and many more technologies.</p>  \n  </ion-slide>  \n\n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide> \n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide>   \n  </ion-slides>-->\n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bank-details_bank-details_module_ts.js.map