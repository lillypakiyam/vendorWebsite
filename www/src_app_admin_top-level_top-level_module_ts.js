"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_top-level_top-level_module_ts"],{

/***/ 13282:
/*!*************************************************************!*\
  !*** ./src/app/admin/top-level/top-level-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopLevelPageRoutingModule": () => (/* binding */ TopLevelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _top_level_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-level.page */ 57173);




const routes = [
    {
        path: '',
        component: _top_level_page__WEBPACK_IMPORTED_MODULE_0__.TopLevelPage
    }
];
let TopLevelPageRoutingModule = class TopLevelPageRoutingModule {
};
TopLevelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TopLevelPageRoutingModule);



/***/ }),

/***/ 52066:
/*!*****************************************************!*\
  !*** ./src/app/admin/top-level/top-level.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopLevelPageModule": () => (/* binding */ TopLevelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _top_level_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-level-routing.module */ 13282);
/* harmony import */ var _top_level_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-level.page */ 57173);







let TopLevelPageModule = class TopLevelPageModule {
};
TopLevelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _top_level_routing_module__WEBPACK_IMPORTED_MODULE_0__.TopLevelPageRoutingModule
        ],
        declarations: [_top_level_page__WEBPACK_IMPORTED_MODULE_1__.TopLevelPage]
    })
], TopLevelPageModule);



/***/ }),

/***/ 57173:
/*!***************************************************!*\
  !*** ./src/app/admin/top-level/top-level.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopLevelPage": () => (/* binding */ TopLevelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _top_level_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-level.page.html?ngResource */ 47639);
/* harmony import */ var _top_level_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-level.page.scss?ngResource */ 69999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let TopLevelPage = class TopLevelPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    moveToPurchase() {
        this.router.navigate(['admin/purchase-order']);
        // this.router.navigate(['/purchase-order']);
    }
    moveToInVendor() {
        this.router.navigate(['admin/invitedvendors']);
    }
    moveToHome() {
        this.router.navigate(['admin/home']);
    }
    moveToAd() {
        this.router.navigate(['/admin/administrator-accounts']);
    }
    moveToActiveVendors() {
        this.router.navigate(['admin/active-vendor']);
    }
    moveToLoginLevel() {
        this.router.navigate(['/login-level']);
    }
    moveToEmergency() {
        this.router.navigate(['/emergency-action']);
    }
    moveToDeletedVendors() {
        this.router.navigate(['admin/deleted']);
    }
    moveToVendorinfo() {
        this.router.navigate(['admin/vendor-info']);
    }
};
TopLevelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TopLevelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-top-level',
        template: _top_level_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_top_level_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TopLevelPage);



/***/ }),

/***/ 69999:
/*!****************************************************************!*\
  !*** ./src/app/admin/top-level/top-level.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtbGV2ZWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 47639:
/*!****************************************************************!*\
  !*** ./src/app/admin/top-level/top-level.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n  <ion-content>\n <ion-grid style=\"margin-top: 30px;\">\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"moveToHome()\">Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" style=\"color: #d84fad;\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToPurchase()\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToVendorinfo()\">Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToInVendor()\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToAd()\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n          <ion-label style=\"text-align: center;margin-left: 15%;\">Click on one of the top-level reports listed below to see it.</ion-label>\n      <br>\n      <br>\n          \n  <div class=\"login\" style=\"margin-left:20%;margin-right: 40%;\">\n    <ion-row>\n      <ion-col class=\"back\" style=\"text-align-last: start;\">\n        <ion-label class=\"highlight\" style=\"font-weight: bold;\">\n         <ins>Available Report Types</ins>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row (click)=\"moveToActiveVendors()\">\n      <ion-col (click)=\"moveToActiveVendors()\" class=\"background\">\n        <ion-label (click)=\"moveToActiveVendors()\" class=\"highlight1\">\n          <ins (click)=\"moveToActiveVendors()\">Active vendors</ins>\n        </ion-label>\n      </ion-col>\n      </ion-row>\n    <ion-row class=\"background1\" >\n    <ion-col>\n      <ion-label class=\"highlight1\">\n       <ins>Declined Purchase Orders</ins>\n      </ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"background\" (click)=\"moveToDeletedVendors()\">\n    <ion-col >\n      <ion-label  class=\"highlight1\">\n       <ins>Deleted TEMP Vendors</ins>\n      </ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row (click)=\"moveToEmergency()\" class=\"background1\">\n    <ion-col (click)=\"moveToEmergency()\">\n      <ion-label  class=\"highlight1\" (click)=\"moveToEmergency()\">\n       <ins (click)=\"moveToEmergency()\">Emergency Action</ins>\n      </ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"background\">\n    <ion-col>\n      <ion-label  class=\"highlight1\">\n        <ins>Purchase Order Summary</ins>\n      </ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"background1\" >\n    <ion-col>\n      <ion-label  class=\"highlight1\">\n        <ins>T&C Statuses</ins>\n      </ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row (click)=\"moveToLoginLevel()\" class=\"background\">\n    <ion-col (click)=\"moveToLoginLevel()\">\n      <ion-label  class=\"highlight1\" (click)=\"moveToLoginLevel()\">\n        <ins (click)=\"moveToLoginLevel()\">Total Vendors Per level</ins>\n      </ion-label>\n    </ion-col>\n    </ion-row>\n  \n\n    <ion-row class=\"background1\">\n    <ion-col>\n      <ion-label class=\"highlight1\">\n       <ins>Vendors With Complete Registration</ins>\n      </ion-label>\n    </ion-col>\n    </ion-row>\n   <ion-row class=\"background\">\n    <ion-col>\n      <ion-label class=\"highlight1\">\n       <ins>Vendors With Incomplete Registration</ins>\n      </ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row >\n    <ion-col class=\"background1\">\n      <ion-label class=\"highlight1\">\n        <ins>Vendors With Outstanding Purchase Orders</ins>\n      </ion-label>\n    </ion-col>\n    </ion-row>\n  </div> \n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col> \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_top-level_top-level_module_ts.js.map