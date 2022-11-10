"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tax-details_tax-details_module_ts"],{

/***/ 58904:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tax-details/tax-details-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxDetailsPageRoutingModule": () => (/* binding */ TaxDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tax_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-details.page */ 34348);




const routes = [
    {
        path: '',
        component: _tax_details_page__WEBPACK_IMPORTED_MODULE_0__.TaxDetailsPage
    }
];
let TaxDetailsPageRoutingModule = class TaxDetailsPageRoutingModule {
};
TaxDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TaxDetailsPageRoutingModule);



/***/ }),

/***/ 46740:
/*!*********************************************************!*\
  !*** ./src/app/pages/tax-details/tax-details.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxDetailsPageModule": () => (/* binding */ TaxDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _tax_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-details-routing.module */ 58904);
/* harmony import */ var _tax_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tax-details.page */ 34348);







let TaxDetailsPageModule = class TaxDetailsPageModule {
};
TaxDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tax_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaxDetailsPageRoutingModule
        ],
        declarations: [_tax_details_page__WEBPACK_IMPORTED_MODULE_1__.TaxDetailsPage]
    })
], TaxDetailsPageModule);



/***/ }),

/***/ 34348:
/*!*******************************************************!*\
  !*** ./src/app/pages/tax-details/tax-details.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxDetailsPage": () => (/* binding */ TaxDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tax_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-details.page.html?ngResource */ 14791);
/* harmony import */ var _tax_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tax-details.page.scss?ngResource */ 44163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);








let TaxDetailsPage = class TaxDetailsPage {
    constructor(router, inituser, firestore, api) {
        this.router = router;
        this.inituser = inituser;
        this.firestore = firestore;
        this.api = api;
        this.provided = false;
        this.resonNot = false;
        this.taxTypeNot = false;
        this.taxNumNot = false;
        this.Details = [];
        this.vendortax = {
            taxcheck: false,
            reason: '',
            taxnumtype: '',
            taxnum: ''
        };
        this.provided = false;
    }
    ngOnInit() {
    }
    moveToLog() {
        this.router.navigate(['/logout']);
    }
    moveToBack() {
        this.router.navigate(['pages/business-category']);
    }
    moveToFinal() {
        this.router.navigate(['/final-submission']);
    }
    moveToTaxRec() {
        this.loggedInVendor = this.inituser.getVendorData();
        const tax = {
            id: this.loggedInVendor.id,
            Tax_check: this.provided,
            reason: this.provided === true ? this.vendortax.reason : null,
            Tax_number_type: this.provided === false ? this.vendortax.taxnumtype : null,
            Tax_number: this.provided === false ? this.vendortax.taxnum : null
        };
        console.log(tax);
        if (!this.provided) {
            // this.Details.push( this.taxdetails)
            this.taxdetails = tax;
            this.Details.push(this.taxdetails);
            const tass = {
                'tax_Details': this.Details
            };
            console.log(this.Details);
            if (this.vendortax.taxnum.length !== 0 && this.vendortax.taxnumtype.length !== 0) {
                // this.firestore.update('vendorAdd',tax.id, {serv}).then(res=>{
                //  console.log(res)
                this.api.updatetax(tax.id, { tax_Details: this.Details }).then(tax => {
                    console.log(tax);
                    this.router.navigate(['pages/tax-record']);
                });
            }
        }
        if (this.provided) {
            this.taxdetails = tax;
            this.Details.push(this.taxdetails);
            const tass = {
                'tax_Details': this.Details
            };
            console.log(this.Details);
            if (this.vendortax.reason.length !== 0) {
                // this.firestore.update('vendorAdd',tax.id,tass).then(res=>{
                //  console.log(res)
                this.api.updatetax(tax.id, { tax_Details: this.Details }).then(tax => {
                    console.log(tax);
                    this.router.navigate(['pages/tax-record']);
                });
            }
        }
        console.log(this.loggedInVendor.id, this.vendortax.taxnum, this.vendortax.taxnumtype, this.vendortax.reason);
        this.fieldDetails();
    }
    select(eve) {
        console.log(eve.detail);
        if (eve.detail.checked === true) {
            this.provided = true;
        }
        else {
            this.provided = false;
        }
    }
    fieldDetails() {
        if (this.provided) {
            if (this.vendortax.reason.length === 0) {
                this.resonNot = true;
            }
            else {
                this.resonNot = false;
            }
        }
        if (!this.provided) {
            if (this.vendortax.taxnum.length === 0) {
                this.taxNumNot = true;
            }
            else {
                this.taxNumNot = false;
            }
            if (this.vendortax.taxnumtype.length === 0) {
                this.taxTypeNot = true;
            }
            else {
                this.taxTypeNot = false;
            }
        }
    }
};
TaxDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_4__.InituserService },
    { type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
TaxDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tax-details',
        template: _tax_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tax_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TaxDetailsPage);



/***/ }),

/***/ 44163:
/*!********************************************************************!*\
  !*** ./src/app/pages/tax-details/tax-details.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXgtZGV0YWlscy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 14791:
/*!********************************************************************!*\
  !*** ./src/app/pages/tax-details/tax-details.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n  <ion-content>\n\n    <ion-grid>\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"moveToLog()\">Logout</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">FAQ</ion-label>\n          <br>\n          <br>\n      <ion-label class=\"menu\">Contact Us</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n        \n          <ion-row>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">1</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">2</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">3</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">4</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">5</div>\n            </div>\n            </ion-col>\n            <ion-col>\n               \n              <ion-label style=\"margin-left: -40px;\" color=\"primary\">Tax details</ion-label>\n              <div class=\"horizonal\"></div>\n              <div class=\"vertical\"></div>\n              <div class=\"backnum\">\n              <div class=\"numbor\">6</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">7</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">8</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">9</div>\n            </div>\n            </ion-col>\n          </ion-row>\n          <ion-progress-bar value=\"0.1\" class=\"bar1\"></ion-progress-bar>\n         <br>\n          <h4 style=\"text-align: center;\">Please provide us with your up-to-date tax details.</h4>\n          <h4 style=\"text-align: center;color: red;\">Please ensure that fields labelled in RED are filled in.</h4>\n\n  <ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: center;color: black;font-weight: bold;\">Tax Details</ion-row>       \n  \n  <div class=\"login\" style=\"margin-top: 2px;\">\n    <ion-row class=\"wholeclass\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"\">\n  No Tax Record:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n       <ion-checkbox (ionChange)=\"select($event)\" style=\"vertical-align: sub;\"></ion-checkbox>\n       <ion-label style=\"margin-left: 5px;\">We do not have the applicable tax information for our country as offered in the list below.</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\" *ngIf=\"provided\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"text-align: right;color: red;\">\nProvided Reasons:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n       <ion-textarea [(ngModel)]=\"vendortax.reason\" style=\"border: 1px solid lightgray;\"> Please provide the reason here. </ion-textarea>\n      <ion-label *ngIf=\"resonNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\" *ngIf=\"!provided\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"text-align: right;color: red;\">\n Tax Number Type:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-select [(ngModel)]=\"vendortax.taxnumtype\" style=\"border: 1px solid lightgray;\">\n          <ion-select-option>USA: Employer ID Number</ion-select-option>\n          <ion-select-option>xyz</ion-select-option>\n        </ion-select>\n      <ion-label *ngIf=\"taxTypeNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\" *ngIf=\"!provided\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"text-align: right;color: red;\">\n Tax Number:\n <p style=\"color: red;\">\n(Please enter the tax number in the exact format as received by your tax authorities including letters if there are any, e.g. for France 'FR25572142735', for US '52-1219029')</p>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input [(ngModel)]=\"vendortax.taxnum\" class=\"input\"></ion-input>\n      <ion-label *ngIf=\"taxNumNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n      <ion-col size=\"8\"></ion-col>\n      <ion-col size=\"4\">\n        <ion-button class=\"btnLogin\" (click)=\"moveToBack()\"> \n          <ion-icon name=\"chevron-back\"></ion-icon>\n          <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>Back\n        </ion-button>\n    \n        <ion-button class=\"btnLogin\" (click)=\"moveToTaxRec()\">Next\n          <ion-icon name=\"chevron-forward\"></ion-icon>\n          <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n\n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tax-details_tax-details_module_ts.js.map