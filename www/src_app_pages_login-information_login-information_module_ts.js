"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login-information_login-information_module_ts"],{

/***/ 3406:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/login-information/login-information-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginInformationPageRoutingModule": () => (/* binding */ LoginInformationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_information_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-information.page */ 57683);




const routes = [
    {
        path: '',
        component: _login_information_page__WEBPACK_IMPORTED_MODULE_0__.LoginInformationPage
    }
];
let LoginInformationPageRoutingModule = class LoginInformationPageRoutingModule {
};
LoginInformationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginInformationPageRoutingModule);



/***/ }),

/***/ 61731:
/*!*********************************************************************!*\
  !*** ./src/app/pages/login-information/login-information.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginInformationPageModule": () => (/* binding */ LoginInformationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_information_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-information-routing.module */ 3406);
/* harmony import */ var _login_information_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-information.page */ 57683);







let LoginInformationPageModule = class LoginInformationPageModule {
};
LoginInformationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_information_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginInformationPageRoutingModule
        ],
        declarations: [_login_information_page__WEBPACK_IMPORTED_MODULE_1__.LoginInformationPage]
    })
], LoginInformationPageModule);



/***/ }),

/***/ 57683:
/*!*******************************************************************!*\
  !*** ./src/app/pages/login-information/login-information.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginInformationPage": () => (/* binding */ LoginInformationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_information_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-information.page.html?ngResource */ 20671);
/* harmony import */ var _login_information_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-information.page.scss?ngResource */ 51373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/util.service */ 19915);






let LoginInformationPage = class LoginInformationPage {
    constructor(inituser, util) {
        this.inituser = inituser;
        this.util = util;
        this.loggedInVendor = this.inituser.getVendorData();
        console.log(this.loggedInVendor);
    }
    ngOnInit() {
    }
};
LoginInformationPage.ctorParameters = () => [
    { type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_2__.InituserService },
    { type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService }
];
LoginInformationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login-information',
        template: _login_information_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_information_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginInformationPage);



/***/ }),

/***/ 51373:
/*!********************************************************************************!*\
  !*** ./src/app/pages/login-information/login-information.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".login {\n  width: 100%;\n}\n\n.back2 {\n  background: #d9d9ff;\n  text-align-last: start;\n  border-left: 2px solid white;\n}\n\n.break {\n  border-left: 2px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUVKOztBQUFBO0VBQ0ksNEJBQUE7QUFHSiIsImZpbGUiOiJsb2dpbi1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmFjazJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDlkOWZmO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OnN0YXJ0O1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5icmVha3tcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcbn0iXX0= */";

/***/ }),

/***/ 20671:
/*!********************************************************************************!*\
  !*** ./src/app/pages/login-information/login-information.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content>\n\n    <ion-grid style=\"margin-top: 30px;\">\n      <ion-row class=\"row1\">\n        <ion-col size=\"2\" class=\"content1\">\n          <ion-label class=\"menu\" (click)=\"summary()\">Summary Profile</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"util.Logout()\">Logout</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">FAQ</ion-label>\n          <br>\n          <br>\n      <ion-label class=\"menu\">Contact Us</ion-label>\n\n        </ion-col>\n        <ion-col size=\"10\" class=\"content2\">\n        \n          <ion-row class=\"back\" style=\"\npadding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Login information:</ion-row>       \n\n\n<div class=\"login\" style=\"margin-top: 2px;\">\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\n       Vendor ID:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n     <ion-label>{{loggedInVendor.permenantId}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n    <ion-col size=\"10\"></ion-col>\n    <ion-col size=\"2\">\n      <ion-button class=\"btnLogin\">\n        Change password\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Address Summary:</ion-row>   \n   <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" style=\"text-align-last: start;\" size=\"3\">\n      <ion-label>\n         Type\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"back2\" size=\"3\">\n      <ion-label>\n    Company Name\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"back2\" size=\"3\">\n      <ion-label>\nAddress\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"back2\" size=\"1\">\n      <ion-label>\nCity\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"back2\" size=\"2\">\n      <ion-label>\nPhone\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nOrdering address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-decoration: underline;text-transform: uppercase;\" color=\"secondary\">\n<!-- on computer services, llc -->\n     {{loggedInVendor.companyname}}\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n<!-- 9351  philadelphia road, suite -->\n     {{loggedInVendor.Address}}\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\n<!-- baltimore -->\n     {{loggedInVendor.country}}\n\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n<!-- 19725246052 -->\n     {{loggedInVendor.ph_no}}\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <!-- <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nCompany registration address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-decoration: underline;text-transform: uppercase;\" color=\"secondary\">\non computer services, llc\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n9351  philadelphia road, suite\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\nbaltimore\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n19725246052\n      </ion-label>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-row  class=\"back\" style=\"\">\n    <ion-col>\n    </ion-col>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n        Add new address</ion-button> \n    </ion-col>\n  </ion-row>\n  <ion-row class=\"back\" style=\"\n margin-top: 2px;height: 30px;\"></ion-row>   \n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Contact Summary:</ion-row>   \n  \n  <ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n    <ion-col >\n      <ion-label>\n        Type\n      </ion-label>\n    </ion-col>\n<ion-col class=\"back2\">\n  <ion-label>\n    Name\n  </ion-label>\n</ion-col>\n<ion-col class=\"back2\">\n  <ion-label>\n    Email\n  </ion-label>\n</ion-col>\n<ion-col class=\"back2\">\n  <ion-label>\n    Phone\n  </ion-label>\n</ion-col>\n  </ion-row>\n  <ion-row class=\"background\" style=\"padding: 5px;\"> \n    <ion-col>\n      <ion-label>\n        General\n      </ion-label>\n    </ion-col>\n<ion-col class=\"background back1 break\" >\n  <ion-label style=\"text-decoration: underline;\" color=\"secondary\">\n  <!-- John stalin -->\n  {{loggedInVendor.first_name}} {{loggedInVendor.last_name !==null ? loggedInVendor.last_name : ''}}\n  </ion-label>\n</ion-col>\n<ion-col class=\"background back1 break\" >\n  <ion-label style=\"text-decoration: underline;\" color=\"secondary\">\n    <!-- siv@gmial.com -->\n    {{loggedInVendor.contact_email}}\n  </ion-label>\n</ion-col>\n<ion-col class=\"background back1 break\" >\n  <ion-label>\n    {{loggedInVendor.phone_no}}\n    <!-- 7639077071 -->\n  </ion-label>\n</ion-col>\n  </ion-row>\n  <ion-row  class=\"back\" style=\"\">\n    <ion-col>\n    </ion-col>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n        Add new contact</ion-button> \n    </ion-col>\n  </ion-row>\n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Bank Details Summary:</ion-row>   \n\n<ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col >\n    <ion-label>\n     Country\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back1 break\">\n<ion-label>\n  Bank Name\n</ion-label>\n</ion-col>\n<ion-col class=\"back1 break\">\n<ion-label>\n  Bank Account / IBAN\n</ion-label>\n</ion-col>\n<ion-col class=\"back1 break\">\n<ion-label>\n  Document\n</ion-label>\n</ion-col>\n</ion-row>\n\n<ion-row class=\"background\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col >\n    <ion-label>\n{{loggedInVendor.country}}\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back-col\">\n<ion-label>\n <!-- CIBC BANK USA -->\n {{loggedInVendor.bank_name}}\n</ion-label>\n</ion-col>\n<ion-col class=\"back-col\">\n<ion-label class=\"highlight1\">\n{{loggedInVendor.account}}\n</ion-label>\n</ion-col>\n<ion-col class=\"back-col\">\n<ion-img src=\"assets/pdf.png\" style=\"width: 25px;height: 25px;\">\n \n</ion-img>\n</ion-col>\n</ion-row>\n<ion-row  class=\"back\" style=\"\">\n  <ion-col>\n  </ion-col>\n  <ion-col>\n  </ion-col>\n  <ion-col>\n    <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n      Add new bank account</ion-button> \n  </ion-col>\n</ion-row>\n\n</div>\n\n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-information_login-information_module_ts.js.map