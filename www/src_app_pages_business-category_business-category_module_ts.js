"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_business-category_business-category_module_ts"],{

/***/ 20195:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/business-category/business-category-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessCategoryPageRoutingModule": () => (/* binding */ BusinessCategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _business_category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-category.page */ 87652);




const routes = [
    {
        path: '',
        component: _business_category_page__WEBPACK_IMPORTED_MODULE_0__.BusinessCategoryPage
    }
];
let BusinessCategoryPageRoutingModule = class BusinessCategoryPageRoutingModule {
};
BusinessCategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BusinessCategoryPageRoutingModule);



/***/ }),

/***/ 84531:
/*!*********************************************************************!*\
  !*** ./src/app/pages/business-category/business-category.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessCategoryPageModule": () => (/* binding */ BusinessCategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _business_category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-category-routing.module */ 20195);
/* harmony import */ var _business_category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-category.page */ 87652);







let BusinessCategoryPageModule = class BusinessCategoryPageModule {
};
BusinessCategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _business_category_routing_module__WEBPACK_IMPORTED_MODULE_0__.BusinessCategoryPageRoutingModule
        ],
        declarations: [_business_category_page__WEBPACK_IMPORTED_MODULE_1__.BusinessCategoryPage]
    })
], BusinessCategoryPageModule);



/***/ }),

/***/ 87652:
/*!*******************************************************************!*\
  !*** ./src/app/pages/business-category/business-category.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessCategoryPage": () => (/* binding */ BusinessCategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _business_category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-category.page.html?ngResource */ 58603);
/* harmony import */ var _business_category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-category.page.scss?ngResource */ 25909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);








let BusinessCategoryPage = class BusinessCategoryPage {
    constructor(router, inituser, firestore, api) {
        this.router = router;
        this.inituser = inituser;
        this.firestore = firestore;
        this.api = api;
        this.categNot = false;
        this.subcategNot = false;
        this.vendorbusiCatg = {
            category: '',
            subcategory: ''
        };
    }
    ngOnInit() {
    }
    moveToBack() {
        this.router.navigate(['pages/bank-details']);
    }
    moveTo() {
        this.loggedInVendor = this.inituser.getVendorData();
        const cat = {
            id: this.loggedInVendor.id,
            Category: this.vendorbusiCatg.category,
            Subcategory: this.vendorbusiCatg.subcategory
        };
        if (this.vendorbusiCatg.category.length !== 0 && this.vendorbusiCatg.subcategory.length !== 0) {
            this.firestore.update('vendorAdd', cat.id, cat).then(res => {
                console.log(res);
                this.router.navigate(['pages/tax-details']);
            });
        }
        console.log(this.loggedInVendor.id, this.vendorbusiCatg.category, this.vendorbusiCatg.subcategory);
        this.fieldDetails();
    }
    fieldDetails() {
        if (this.vendorbusiCatg.category.length === 0) {
            this.categNot = true;
        }
        else {
            this.categNot = false;
        }
        if (this.vendorbusiCatg.subcategory.length === 0) {
            this.subcategNot = true;
        }
        else {
            this.subcategNot = false;
        }
    }
    moveToLog() {
        this.router.navigate(['/logout']);
    }
};
BusinessCategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_4__.InituserService },
    { type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
BusinessCategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-business-category',
        template: _business_category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_business_category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BusinessCategoryPage);



/***/ }),

/***/ 25909:
/*!********************************************************************************!*\
  !*** ./src/app/pages/business-category/business-category.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzcy1jYXRlZ29yeS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 58603:
/*!********************************************************************************!*\
  !*** ./src/app/pages/business-category/business-category.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n  <ion-content>\n\n    <ion-grid>\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"moveToLog()\">Logout</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">FAQ</ion-label>\n          <br>\n          <br>\n      <ion-label class=\"menu\">Contact Us</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n        \n          <ion-row>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">1</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">2</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">3</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">4</div>\n            </div>\n            </ion-col>\n            <ion-col>\n              \n              <ion-label style=\"margin-left: -60px;\" color=\"primary\">Primary classification</ion-label>\n              <div class=\"horizonal\"></div>\n              <div class=\"vertical\"></div>\n              <div class=\"backnum\">\n              <div class=\"numbor\">5</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">6</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">7</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">8</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">9</div>\n            </div>\n            </ion-col>\n          </ion-row>\n          <ion-progress-bar value=\"0.1\" class=\"bar1\"></ion-progress-bar>\n         <br>\n            <h4 style=\"text-align: center;color: red;\">The new bank account has been added successfully</h4>\n            <h4 style=\"text-align: center;\">Please specify a category and a sub category that best describes your business.</h4>\n\n  <ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: center;color: black;font-weight: bold;\">Bank Account Details</ion-row>       \n  <ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">General Details</ion-row>       \n  \n  <div class=\"login\" style=\"margin-top: 2px;\">\n    <ion-row class=\"wholeclass\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"text-align: right;color: red;\">\n  Category:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-select [(ngModel)] =\"vendorbusiCatg.category\" style=\"border: 1px solid lightgray;\">\n          <ion-select-option>Agriculture and Land</ion-select-option>\n          <ion-select-option>Antenna</ion-select-option>\n          <ion-select-option>Charity</ion-select-option>\n          <ion-select-option>Hotel and accommodation</ion-select-option>\n          <ion-select-option>Infrastructure</ion-select-option>\n          <ion-select-option>IP Platform</ion-select-option>\n          <ion-select-option>IT</ion-select-option>\n          <ion-select-option>Legal and Tax related</ion-select-option>\n          <ion-select-option>Marketing,Communication & PR</ion-select-option>\n          <ion-select-option>Measure & Test</ion-select-option>\n          <ion-select-option>Others</ion-select-option>\n          <ion-select-option>Printing and Publications</ion-select-option>\n          <ion-select-option>Professional Services</ion-select-option>\n          <ion-select-option>Public Administration office</ion-select-option>\n          <ion-select-option>Restaurant</ion-select-option>\n          <ion-select-option>RF</ion-select-option>\n          <ion-select-option>Service Partners</ion-select-option>\n          <ion-select-option>Space segment</ion-select-option>\n          <ion-select-option>Terminal Equipment</ion-select-option>\n          <ion-select-option>Travel and Expenses</ion-select-option>\n          <ion-select-option>Utilities(Gas,Electricity,water)</ion-select-option>\n          <ion-select-option>Video equipment and services</ion-select-option>\n        </ion-select>\n      <ion-label *ngIf=\"categNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"text-align: right;color: red;\">\n  Sub Category:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-select [(ngModel)]=\"vendorbusiCatg.subcategory\" style=\"border: 1px solid lightgray;\">\n          <ion-select-option>Small Antennas</ion-select-option>\n          <ion-select-option>xyz</ion-select-option>\n        </ion-select>\n      <ion-label *ngIf=\"subcategNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n      <ion-col size=\"8\"></ion-col>\n      <ion-col size=\"4\">\n        <ion-button class=\"btnLogin\" (click)=\"moveToBack()\"> \n          <ion-icon name=\"chevron-back\"></ion-icon>\n          <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>Back\n        </ion-button>\n    \n        <ion-button class=\"btnLogin\" (click)=\"moveTo()\">Next\n          <ion-icon name=\"chevron-forward\"></ion-icon>\n          <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_business-category_business-category_module_ts.js.map