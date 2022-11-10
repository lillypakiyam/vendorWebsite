"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_password_password_module_ts"],{

/***/ 2113:
/*!***********************************************************!*\
  !*** ./src/app/admin/password/password-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageRoutingModule": () => (/* binding */ PasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.page */ 48226);




const routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_0__.PasswordPage
    }
];
let PasswordPageRoutingModule = class PasswordPageRoutingModule {
};
PasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasswordPageRoutingModule);



/***/ }),

/***/ 66062:
/*!***************************************************!*\
  !*** ./src/app/admin/password/password.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageModule": () => (/* binding */ PasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-routing.module */ 2113);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page */ 48226);







let PasswordPageModule = class PasswordPageModule {
};
PasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _password_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordPageRoutingModule
        ],
        declarations: [_password_page__WEBPACK_IMPORTED_MODULE_1__.PasswordPage]
    })
], PasswordPageModule);



/***/ }),

/***/ 48226:
/*!*************************************************!*\
  !*** ./src/app/admin/password/password.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPage": () => (/* binding */ PasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.page.html?ngResource */ 11712);
/* harmony import */ var _password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page.scss?ngResource */ 52343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firebase-authentication.service */ 49137);
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/util.service */ 19915);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);









let PasswordPage = class PasswordPage {
  constructor(util, router, route, authentication, inituser, api) {
    this.util = util;
    this.router = router;
    this.route = route;
    this.authentication = authentication;
    this.inituser = inituser;
    this.api = api;
    this.getEmail = false;
    this.getpassword = false;
    this.user = {
      email: '',
      password: ''
    };
    this.code = this.route.snapshot.queryParams['oobCode'];
  }

  ngOnInit() {}

  login() {
    this.util.goBack('admin/login');
  }

  resetpass() {
    // this.api.getSchHistory(this.user.email).subscribe(async user=>{
    //     console.log(user)
    //     user.map(res=>{
    //       this.temPassword = res.password
    //       console.log(res.password, this.temPassword)
    //       this.authentication.login(this.user.email, res.password).then(res =>{
    //         console.log(res)
    //         console.log(res.uid)
    //         this.api.loginUserId = res.uid
    //         console.log(this.api.loginUserId)
    //       })
    //     })
    //   })
    //   // console.log(this.temPassword)
    //   this.getEmail=true
    //   this.getpassword=true
    this.authentication.passEmail(this.code, this.user.password).then(user => {
      console.log(user); //  this.router.navigate(['admin/login'])

      window.open('https://adminlogin-36881.web.app/admin/login');
    }).catch(error => {
      console.log(error);
    });
  }

};

PasswordPage.ctorParameters = () => [{
  type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseAuthenticationService
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__.InituserService
}, {
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
}];

PasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-password',
  template: _password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], PasswordPage);


/***/ }),

/***/ 52343:
/*!**************************************************************!*\
  !*** ./src/app/admin/password/password.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 11712:
/*!**************************************************************!*\
  !*** ./src/app/admin/password/password.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row class=\"row1\">\n      <ion-col size=\"8\" class=\"content2\">\n<div class=\"login\">\n  <!-- <ion-row class=\"wholeclass\" *ngIf=\"\">\n    <ion-col class=\"back\" size=\"3\" style=\"justify-content: right;\">\n      <ion-label style=\"color: red;\">\n      Current Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input [ngStyle]=\"currentPass()\" [(ngModel)]=\"user.email\" class=\"input\"></ion-input>\n      <ion-label *ngIf=\"vendorColor\" style=\"color: red;\">\n        please check your current password!</ion-label>\n       \n    </ion-col>\n  </ion-row> -->\n\n  <h4 style=\"text-align: center;font-weight: bold;color: red;\"> Change your password.</h4>\n  <br>\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\n          New Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input [(ngModel)]=\"user.password\" class=\"input\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <br>\n  <!-- <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\n        Confirm New Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input [ngStyle]=\"NewPassword()\" [(ngModel)]=\"vendorInfo.confirm_new_password\" class=\"input\"></ion-input>\n    </ion-col>\n  </ion-row> -->\n  <br>\n  <ion-row class=\"back\">\n    <ion-col size=\"10\">\n\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button class=\"btnLogin\" (click)=\"resetpass()\">Next\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n        <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</div>\n\n</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\n        Confirm New Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input [(ngModel)]=\"emailId\" class=\"input\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-button class=\"btnLogin\" (click)=\"resetpassword()\">Next\n    <ion-icon name=\"chevron-forward\"></ion-icon>\n    <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n  </ion-button> -->\n</ion-content>\n\n<!--<ion-slides pager=\"true\" [options]=\"slideOpts\">  \n  \n  <ion-slide>  \n    <img src=\"assets/jtp_logo.png\"/>  \n    <h2>Welcome to the <b>JavaTpoint</b></h2>  \n    <p>JavaTpoint offers Corporate Training, Summer Training, Online Training and Winter Training on Java, Android, Python, Oracle, PHP, and many more technologies.</p>  \n  </ion-slide>  \n\n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide> \n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide>   \n  </ion-slides>-->\n\n<ion-footer>\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_password_password_module_ts.js.map