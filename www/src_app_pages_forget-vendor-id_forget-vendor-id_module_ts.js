"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forget-vendor-id_forget-vendor-id_module_ts"],{

/***/ 51013:
/*!***************************************************************************!*\
  !*** ./src/app/pages/forget-vendor-id/forget-vendor-id-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetVendorIDPageRoutingModule": () => (/* binding */ ForgetVendorIDPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _forget_vendor_id_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-vendor-id.page */ 34498);




const routes = [
    {
        path: '',
        component: _forget_vendor_id_page__WEBPACK_IMPORTED_MODULE_0__.ForgetVendorIDPage
    }
];
let ForgetVendorIDPageRoutingModule = class ForgetVendorIDPageRoutingModule {
};
ForgetVendorIDPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgetVendorIDPageRoutingModule);



/***/ }),

/***/ 73565:
/*!*******************************************************************!*\
  !*** ./src/app/pages/forget-vendor-id/forget-vendor-id.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetVendorIDPageModule": () => (/* binding */ ForgetVendorIDPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forget_vendor_id_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-vendor-id-routing.module */ 51013);
/* harmony import */ var _forget_vendor_id_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-vendor-id.page */ 34498);







let ForgetVendorIDPageModule = class ForgetVendorIDPageModule {
};
ForgetVendorIDPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forget_vendor_id_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetVendorIDPageRoutingModule
        ],
        declarations: [_forget_vendor_id_page__WEBPACK_IMPORTED_MODULE_1__.ForgetVendorIDPage]
    })
], ForgetVendorIDPageModule);



/***/ }),

/***/ 34498:
/*!*****************************************************************!*\
  !*** ./src/app/pages/forget-vendor-id/forget-vendor-id.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetVendorIDPage": () => (/* binding */ ForgetVendorIDPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forget_vendor_id_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-vendor-id.page.html?ngResource */ 91538);
/* harmony import */ var _forget_vendor_id_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-vendor-id.page.scss?ngResource */ 83833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let ForgetVendorIDPage = class ForgetVendorIDPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    cancel() {
        this.router.navigate(['pages/login']);
    }
};
ForgetVendorIDPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ForgetVendorIDPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-forget-vendor-id',
        template: _forget_vendor_id_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forget_vendor_id_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgetVendorIDPage);



/***/ }),

/***/ 83833:
/*!******************************************************************************!*\
  !*** ./src/app/pages/forget-vendor-id/forget-vendor-id.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtdmVuZG9yLWlkLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 91538:
/*!******************************************************************************!*\
  !*** ./src/app/pages/forget-vendor-id/forget-vendor-id.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content [fullscreen]=\"true\">\n \n         \n  <div class=\"login row\" style=\"justify-content: center;padding-left: 100px;margin-top: 20px;padding-right: 100px;\">\n    <ion-row class=\"wholeclass\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"color: red;\">\n        Company Name:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input class=\"input\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"back\" style=\"padding:5px;margin-top: 2px;\">\n    <ion-label>Please enter the details of your primary contact below:</ion-label>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"color: red;\">\n        Contact Name:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input class=\"input\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"color: red;\">\n       Email Address:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input class=\"input\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"color: red;\">\n     Phone Country Code:\n     <p style=\"color: red;\">(no spaces, brackets,leading zeroes)</p>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input class=\"input\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"color: red;\">\n    Phone Number:\n    <p style=\"color: red;\">(no spaces, brackets, leading zeroes)</p>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input class=\"input\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"\">\n    Phone Extension:\n    <p style=\"\">(no spaces, brackets, leading zeroes)</p>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input class=\"input\"></ion-input>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row class=\"back\" style=\"margin-top: 2px;\">\n      <ion-col size=\"4\">\n  \n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button class=\"btnLogin\" (click)=\"moveTo()\">Get vendor id</ion-button>\n        <ion-button class=\"btnLogin\" (click)=\"cancel()\">Cancel</ion-button>\n      </ion-col>\n    </ion-row>\n  \n  </div>\n  \n  </ion-content>\n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forget-vendor-id_forget-vendor-id_module_ts.js.map