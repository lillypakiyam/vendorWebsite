"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tax-record_tax-record_module_ts"],{

/***/ 48449:
/*!***************************************************************!*\
  !*** ./src/app/pages/tax-record/tax-record-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxRecordPageRoutingModule": () => (/* binding */ TaxRecordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tax_record_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-record.page */ 62049);




const routes = [
    {
        path: '',
        component: _tax_record_page__WEBPACK_IMPORTED_MODULE_0__.TaxRecordPage
    }
];
let TaxRecordPageRoutingModule = class TaxRecordPageRoutingModule {
};
TaxRecordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TaxRecordPageRoutingModule);



/***/ }),

/***/ 2339:
/*!*******************************************************!*\
  !*** ./src/app/pages/tax-record/tax-record.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxRecordPageModule": () => (/* binding */ TaxRecordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _tax_record_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-record-routing.module */ 48449);
/* harmony import */ var _tax_record_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tax-record.page */ 62049);







let TaxRecordPageModule = class TaxRecordPageModule {
};
TaxRecordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tax_record_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaxRecordPageRoutingModule
        ],
        declarations: [_tax_record_page__WEBPACK_IMPORTED_MODULE_1__.TaxRecordPage]
    })
], TaxRecordPageModule);



/***/ }),

/***/ 62049:
/*!*****************************************************!*\
  !*** ./src/app/pages/tax-record/tax-record.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxRecordPage": () => (/* binding */ TaxRecordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tax_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-record.page.html?ngResource */ 25710);
/* harmony import */ var _tax_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tax-record.page.scss?ngResource */ 23557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);






let TaxRecordPage = class TaxRecordPage {
    constructor(router, inituser) {
        this.router = router;
        this.inituser = inituser;
        this.tax_inform = [];
    }
    ngOnInit() {
        this.loggedinVendor = this.inituser.getVendorData();
        console.log(this.loggedinVendor);
        console.log(this.loggedinVendor.tax_Details.Tax_number_type);
        this.tax_inform.push(this.loggedinVendor.tax_Details);
        this.tax_inform = this.loggedinVendor.tax_Details;
    }
    moveToBack() {
        this.router.navigate(['pages/tax-details']);
    }
    moveToTaxForm() {
        this.router.navigate(['pages/tax-form']);
    }
};
TaxRecordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_2__.InituserService }
];
TaxRecordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tax-record',
        template: _tax_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tax_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TaxRecordPage);



/***/ }),

/***/ 23557:
/*!******************************************************************!*\
  !*** ./src/app/pages/tax-record/tax-record.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXgtcmVjb3JkLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 25710:
/*!******************************************************************!*\
  !*** ./src/app/pages/tax-record/tax-record.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n  <ion-content>\n\n    <ion-grid>\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"moveToLog()\">Logout</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">FAQ</ion-label>\n          <br>\n          <br>\n      <ion-label class=\"menu\">Contact Us</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n        \n          <ion-row>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">1</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">2</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">3</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">4</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">5</div>\n            </div>\n            </ion-col>\n            <ion-col>\n               \n              <ion-label style=\"margin-left: -40px;\" color=\"primary\">Tax details</ion-label>\n              <div class=\"horizonal\"></div>\n              <div class=\"vertical\"></div>\n              <div class=\"backnum\">\n              <div class=\"numbor\">6</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">7</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">8</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">9</div>\n            </div>\n            </ion-col>\n          </ion-row>\n          <ion-progress-bar value=\"0.1\" class=\"bar1\"></ion-progress-bar>\n         <br>\n          <h4 style=\"text-align: center;\">Please provide us with your up-to-date tax details.</h4>\n          <h4 style=\"text-align: center;color: red;\">Please ensure that fields labelled in RED are filled in.</h4>  \n  \n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"\" style=\"text-align:start;  background: #d9d9ff;border-right: 2px solid white;\" size=\"9\">\n        <ion-label style=\"font-weight: bold;\">\nTax Number Type\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"3\" style=\"text-align:start;  background: #d9d9ff;\">\n    <ion-label style=\"font-weight: bold;\">Tax Number</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"\" style=\"text-align:start;  background: #fffafa;border-right: 2px solid white;\" size=\"9\">\n        <!-- <ion-label style=\"\">\nUSA: Employer ID Number\n        </ion-label> -->\n        <div *ngFor=\"let tax of this.tax_inform\">\n          <label>{{tax.Tax_number_type}}</label>\n        </div>\n      </ion-col>\n      <ion-col size=\"3\" style=\"text-align:start;  background: #fffafa;\">\n    <div *ngFor=\"let tax of this.tax_inform\">\n    <ion-label color=\"primary\" style=\"text-decoration: underline;\">{{tax.Tax_number}}</ion-label>\n    </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n      <ion-col size=\"7\"></ion-col>\n      <ion-col size=\"5\">\n        <ion-button class=\"btnLogin\" (click)=\"moveToBack()\"> \n      Add another\n        </ion-button>\n        <ion-button class=\"btnLogin\" (click)=\"moveToBack()\"> \n          <ion-icon name=\"chevron-back\"></ion-icon>\n          <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>Back\n        </ion-button>\n    \n        <ion-button class=\"btnLogin\" (click)=\"moveToTaxForm()\">Next\n          <ion-icon name=\"chevron-forward\"></ion-icon>\n          <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  \n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n\n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tax-record_tax-record_module_ts.js.map