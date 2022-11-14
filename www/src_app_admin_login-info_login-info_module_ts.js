"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_login-info_login-info_module_ts"],{

/***/ 31983:
/*!***************************************************************!*\
  !*** ./src/app/admin/login-info/login-info-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginInfoPageRoutingModule": () => (/* binding */ LoginInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-info.page */ 19294);




const routes = [
    {
        path: '',
        component: _login_info_page__WEBPACK_IMPORTED_MODULE_0__.LoginInfoPage
    }
];
let LoginInfoPageRoutingModule = class LoginInfoPageRoutingModule {
};
LoginInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginInfoPageRoutingModule);



/***/ }),

/***/ 45310:
/*!*******************************************************!*\
  !*** ./src/app/admin/login-info/login-info.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginInfoPageModule": () => (/* binding */ LoginInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-info-routing.module */ 31983);
/* harmony import */ var _login_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-info.page */ 19294);







let LoginInfoPageModule = class LoginInfoPageModule {
};
LoginInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginInfoPageRoutingModule
        ],
        declarations: [_login_info_page__WEBPACK_IMPORTED_MODULE_1__.LoginInfoPage]
    })
], LoginInfoPageModule);



/***/ }),

/***/ 19294:
/*!*****************************************************!*\
  !*** ./src/app/admin/login-info/login-info.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginInfoPage": () => (/* binding */ LoginInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-info.page.html?ngResource */ 4891);
/* harmony import */ var _login_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-info.page.scss?ngResource */ 27302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let LoginInfoPage = class LoginInfoPage {
    constructor(router, Aroute) {
        this.router = router;
        this.Aroute = Aroute;
        // this.Aroute.queryParams.subscribe(()=>
        // {
        this.data = this.router.getCurrentNavigation().extras.state.item;
        // })
        console.log('details', this.data);
    }
    ngOnInit() {
    }
};
LoginInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
LoginInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login-info',
        template: _login_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginInfoPage);



/***/ }),

/***/ 27302:
/*!******************************************************************!*\
  !*** ./src/app/admin/login-info/login-info.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".back1 {\n  text-align-last: start;\n  border-left: 2px solid white;\n  background: #d9d9ff;\n}\n\n.back-col {\n  text-align-last: start;\n  border-left: 2px solid white;\n}\n\n.highlight {\n  text-align-last: start;\n  color: var(--ion-color-primary);\n}\n\n.highlight1 {\n  text-align-last: start;\n  color: var(--ion-color-secondary);\n  text-decoration: underline;\n}\n\n.background {\n  background: #fbfaff;\n}\n\n.background1 {\n  background: #f3f3ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLCtCQUFBO0FBQUo7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKIiwiZmlsZSI6ImxvZ2luLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sxe1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBzdGFydDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDlkOWZmO1xyXG5cclxufVxyXG4uYmFjay1jb2x7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IHN0YXJ0O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcblxyXG59XHJcbi5oaWdobGlnaHR7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IHN0YXJ0O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4uaGlnaGxpZ2h0MXtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogc3RhcnQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6ICNmYmZhZmY7XHJcbn1cclxuLmJhY2tncm91bmQxe1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmZjtcclxufSJdfQ== */";

/***/ }),

/***/ 4891:
/*!******************************************************************!*\
  !*** ./src/app/admin/login-info/login-info.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content>\n\n    <ion-grid style=\"margin-top: 30px;\">\n      <ion-row class=\"row1\">\n        <ion-col size=\"2\" class=\"content1\">\n        \n          <ion-label class=\"menu\" style=\"color: #d84fad;\" (click)=\"moveToHome()\">Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToTopLevel()\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToPurchase()\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToVendorInfo()\">Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToInVendor()\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToAd()\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"logout()\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"10\" class=\"content2\">\n          <p style=\"text-align: center;\">Here is the profile of the vendor you selected.</p>\n          <br>\n  \n          <ion-row  class=\"back\" style=\"\">\n            <ion-col>\n            </ion-col>\n            <ion-col>\n            </ion-col>\n            <ion-col>\n              <ion-button class=\"btnLogin\"style=\"font-weight:bold;\"  (click)=\"moveToTopLevel()\" >\n                <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;font-weight: bold;\"></ion-icon>\n                <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n                back</ion-button> \n            </ion-col>\n          </ion-row>\n          <ion-row class=\"back\" style=\"\npadding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Login information:</ion-row>       \n\n\n<div class=\"login\" style=\"margin-top: 2px;\">\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\n Vendor ID:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n     <ion-label>4000021330</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\n    Login ID\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n   <ion-label>4000021330</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\nPassword Reset:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n    <ion-label>Yes</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\nLogin Level:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n    <ion-label>4 (Edited bank details)</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\nT & C Accept Status:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n    <ion-label>(unknown status)</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\n Activation Status:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n    <ion-label>Activated</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\nLast Login:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n    <ion-label>0000-00-00 00:00:00</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Registration Reminder Details:</ion-row>       \n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;\">\n   Notify Login Status:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>N</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;\">\n   Remain Login 1 Status:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>N</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;\">\n   Remind Login 2 Status:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>N</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;\">\n          Remind Completion 1 Status:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>N</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;\">\n  Remind Completion 2 Status:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>N</ion-label>\n      </ion-col>\n    </ion-row>\n  <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"10\">\n      <ion-button class=\"btnLogin\"> \n        Deactivate\n      </ion-button>\n  \n      <ion-button class=\"btnLogin\">\n        GDPR delete\n      </ion-button>\n      <ion-button class=\"btnLogin\">\n      Reset T & C\n      </ion-button>\n      <ion-button class=\"btnLogin\">\n    Send completion reminder\n      </ion-button>\n      <ion-button class=\"btnLogin\">\n        Reset password\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Address Summary:</ion-row>   \n   <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" style=\"text-align-last: start;\" size=\"3\">\n      <ion-label>\nType\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"back1\" size=\"3\">\n      <ion-label>\n    Company Name\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"back1\" size=\"3\">\n      <ion-label>\nAddress\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"back1\" size=\"1\">\n      <ion-label>\nCity\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"back1\" size=\"2\">\n      <ion-label>\nPhone\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nOrdering address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label class=\"highlight1\" style=\"text-transform: uppercase;\">\non computer services, llc\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n9351  philadelphia road, suite\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\nbaltimore\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n19725246052\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nCompany registration address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label class=\"highlight1\" style=\"text-transform: uppercase;\">\non computer services, llc\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n9351  philadelphia road, suite\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\nbaltimore\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n19725246052\n      </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nOrdering address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label class=\"highlight1\" style=\"text-transform: uppercase;\">\non computer services, llc\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n9351  philadelphia road, suite\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\nbaltimore\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n19725246052\n      </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nInvoicing address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label class=\"highlight1\" style=\"text-transform: uppercase;\">\non computer services, llc\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n9351  philadelphia road, suite\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\nbaltimore\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n19725246052\n      </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nReturn address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label class=\"highlight1\" style=\"text-transform: uppercase;\">\non computer services, llc\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n9351  philadelphia road, suite\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\nbaltimore\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n19725246052\n      </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"back\" style=\"\n margin-top: 2px;height: 30px;\"></ion-row>   \n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Contact Summary:</ion-row>   \n  \n  <ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n    <ion-col >\n      <ion-label>\n        Type\n      </ion-label>\n    </ion-col>\n<ion-col class=\"back1\">\n  <ion-label>\n    Name\n  </ion-label>\n</ion-col>\n<ion-col class=\"back1\">\n  <ion-label>\n    Email\n  </ion-label>\n</ion-col>\n<ion-col class=\"back1\">\n  <ion-label>\n    Phone\n  </ion-label>\n</ion-col>\n  </ion-row>\n  <ion-row class=\"background\" style=\"padding: 5px;\"> \n    <ion-label>\n      No contacts found\n    </ion-label>\n  </ion-row>\n  <ion-row  class=\"back\" style=\"\">\n    <ion-col>\n    </ion-col>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n        Add new contact</ion-button> \n    </ion-col>\n  </ion-row>\n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Bank Details Summary:</ion-row>   \n\n<ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col >\n    <ion-label>\n     Country\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back1\">\n<ion-label>\n  Bank Name\n</ion-label>\n</ion-col>\n<ion-col class=\"back1\">\n<ion-label>\n  Bank Account / IBAN\n</ion-label>\n</ion-col>\n<ion-col class=\"back1\">\n<ion-label>\n  Document\n</ion-label>\n</ion-col>\n</ion-row>\n<ion-row class=\"background\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col >\n    <ion-label>\n     United States\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back-col\">\n<ion-label>\n CIBC BANK USA\n</ion-label>\n</ion-col>\n<ion-col class=\"back-col\">\n<ion-label class=\"highlight1\">\n0002279061\n</ion-label>\n</ion-col>\n<ion-col class=\"back-col\">\n<ion-img src=\"assets/pdf.png\" style=\"width: 25px;height: 25px;\">\n \n</ion-img>\n</ion-col>\n</ion-row>\n<ion-row  class=\"back\" style=\"\">\n  <ion-col>\n  </ion-col>\n  <ion-col>\n  </ion-col>\n  <ion-col>\n    <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n      Add new bank account</ion-button> \n  </ion-col>\n</ion-row>\n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Primary Product & Service Classification:</ion-row>   \n <ion-row class=\"background\" style=\"padding: 5px;\"> \n  <ion-label>\n Unable to generate summary section.\n  </ion-label>\n</ion-row>\n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Tax Details Summary:</ion-row>   \n<ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col size=\"8\">\n    <ion-label>\n     Tax Number Type\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back1\" size=\"4\">\n<ion-label>\n  Tax Number\n</ion-label>\n</ion-col>\n</ion-row>\n<ion-row class=\"background\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col size=\"8\" class=\"back-col\">\n    <ion-label>\n    USA: Employer ID Number\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back-col\" size=\"4\">\n<ion-label class=\"highlight1\">\n 56-2379512\n</ion-label>\n</ion-col>\n</ion-row>\n<ion-row  class=\"back\" style=\"\">\n  <ion-col>\n  </ion-col>\n  <ion-col>\n  </ion-col>\n  <ion-col>\n    <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n      Add new tax record</ion-button> \n  </ion-col>\n</ion-row>\n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Tax Form Uploads:</ion-row>   \n<ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col size=\"4\">\n    <ion-label>\n   Upload Date\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back1\" size=\"4\">\n<ion-label>\n Form Type\n</ion-label>\n</ion-col>\n<ion-col size=\"4\" class=\"back1\">\n  <ion-label>\n    Download\n  </ion-label>\n</ion-col>\n</ion-row>\n<br>\n<ion-row  class=\"back\" style=\"\">\n  <ion-col>\n  </ion-col>\n  <ion-col>\n  </ion-col>\n  <ion-col>\n    <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n      new upload</ion-button> \n  </ion-col>\n</ion-row>\n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">SES Terms and Conditions History:</ion-row>   \n<ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col size=\"3\">\n    <ion-label>\nEffective\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back1\" size=\"3\">\n<ion-label>\n  Decision\n</ion-label>\n</ion-col>\n<ion-col class=\"back1\" size=\"3\">\n  <ion-label>\n    Decision Date\n  </ion-label>\n  </ion-col>\n  <ion-col class=\"back1\" size=\"3\">\n    <ion-label>\n      Comment\n    </ion-label>\n    </ion-col>\n</ion-row>\n<ion-row class=\"background\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col size=\"3\" class=\"back-col\">\n    <ion-label>\n2005-12-29\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back-col\" size=\"3\">\n<ion-label>\nAgreed\n</ion-label>\n</ion-col>\n<ion-col class=\"back-col\" size=\"3\">\n  <ion-label>\n2015-04-16\n  </ion-label>\n  </ion-col>\n  <ion-col class=\"back-col\" size=\"3\">\n    <ion-label>\n   \n    </ion-label>\n    </ion-col>\n</ion-row>\n\n</div>\n\n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_login-info_login-info_module_ts.js.map