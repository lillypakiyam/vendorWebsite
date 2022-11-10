"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_final-submission_final-submission_module_ts"],{

/***/ 16721:
/*!***************************************************************************!*\
  !*** ./src/app/pages/final-submission/final-submission-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalSubmissionPageRoutingModule": () => (/* binding */ FinalSubmissionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _final_submission_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-submission.page */ 70201);




const routes = [
    {
        path: '',
        component: _final_submission_page__WEBPACK_IMPORTED_MODULE_0__.FinalSubmissionPage
    }
];
let FinalSubmissionPageRoutingModule = class FinalSubmissionPageRoutingModule {
};
FinalSubmissionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FinalSubmissionPageRoutingModule);



/***/ }),

/***/ 17485:
/*!*******************************************************************!*\
  !*** ./src/app/pages/final-submission/final-submission.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalSubmissionPageModule": () => (/* binding */ FinalSubmissionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _final_submission_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-submission-routing.module */ 16721);
/* harmony import */ var _final_submission_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final-submission.page */ 70201);







let FinalSubmissionPageModule = class FinalSubmissionPageModule {
};
FinalSubmissionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _final_submission_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinalSubmissionPageRoutingModule
        ],
        declarations: [_final_submission_page__WEBPACK_IMPORTED_MODULE_1__.FinalSubmissionPage]
    })
], FinalSubmissionPageModule);



/***/ }),

/***/ 70201:
/*!*****************************************************************!*\
  !*** ./src/app/pages/final-submission/final-submission.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalSubmissionPage": () => (/* binding */ FinalSubmissionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _final_submission_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-submission.page.html?ngResource */ 22780);
/* harmony import */ var _final_submission_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final-submission.page.scss?ngResource */ 27344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);






let FinalSubmissionPage = class FinalSubmissionPage {
    constructor(router, inituser) {
        this.router = router;
        this.inituser = inituser;
    }
    ngOnInit() {
    }
    moveToLog() {
        this.router.navigate(['/logout']);
    }
    Logout() {
        this.inituser.vendorLogout().then(logout => {
            console.log('id:null', logout);
            this.router.navigate(['pages/logout']);
        });
        // this.router.navigate(['/logout'])
    }
};
FinalSubmissionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_2__.InituserService }
];
FinalSubmissionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-final-submission',
        template: _final_submission_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_final_submission_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FinalSubmissionPage);



/***/ }),

/***/ 27344:
/*!******************************************************************************!*\
  !*** ./src/app/pages/final-submission/final-submission.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5hbC1zdWJtaXNzaW9uLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 22780:
/*!******************************************************************************!*\
  !*** ./src/app/pages/final-submission/final-submission.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n  <ion-content>\n\n    <ion-grid>\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"Logout()\">Logout</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">FAQ</ion-label>\n          <br>\n          <br>\n      <ion-label class=\"menu\">Contact Us</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\" style=\"margin-top: 20px;\">\n        \n          <ion-row>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">1</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">2</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">3</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">4</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">5</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">6</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">7</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">8</div>\n            </div>\n            </ion-col>\n            <ion-col >\n              <ion-label style=\"margin-left: -45px;\" color=\"primary\">Thank you</ion-label>\n              <div class=\"horizonal\"></div>\n              <div class=\"vertical\"></div>\n              <div class=\"backnum\">\n              <div class=\"numbor\">9</div>\n            </div>\n            </ion-col>\n          </ion-row>\n          <ion-progress-bar value=\"0.1\" class=\"bar1\"></ion-progress-bar>\n         <br>\n         <br>\n          <h4 style=\"\">\n          Your has been submitted for review. Once it is confirmed you will receive an email notification with your permanent Vendor credentials. You will always be able to log in, view your profile, and it if necessary.\n          </h4>\n  \n  \n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <!-- <ion-button (click)=\"submitLogin()\">submitt</ion-button> -->\n  </ion-content>\n\n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_final-submission_final-submission_module_ts.js.map