"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
    {
        path: 'password-change',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_password-change_password-change_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/password-change/password-change.module */ 75708)).then(m => m.PasswordChangePageModule)
    },
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 98433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firebase-authentication.service */ 49137);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);










let LoginPage = class LoginPage {
  constructor(router, authent, firestore, initUser, api) {
    this.router = router;
    this.authent = authent;
    this.firestore = firestore;
    this.initUser = initUser;
    this.api = api;
    this.vendorUser = {
      email: '',
      password: ''
    }; // this.api.getoneVendoruser().subscribe(user=>{
    //   console.log(user)
    // })

    this.loggedinVendor = this.initUser.getVendorData();
    console.log(this.loggedinVendor);
  }

  ngOnInit() {}

  moveTo() {
    var _this = this;

    this.api.logIn(this.vendorUser.email + '@gmail.com', this.vendorUser.password).subscribe(res => {
      console.log(res);
      console.log(res.id);
      this.initUser.setToken(res.id);
      const pass = {
        temprory_password: this.vendorUser.password
      };
      this.firestore.update('vendorAdd', res.id, pass).then(res => {
        console.log(res);
      });
      this.api.getVendorUser().subscribe(user => {
        console.log('user name', user);
        console.log('res', user.id); // if(user.id === res.uid){

        this.initUser.setLoggedInVendor(user);
        this.loggedinVendor = this.initUser.getVendorData();
        console.log(this.loggedinVendor); //  this.authent.forgotPassoword(this.vendorUser.email)

        this.router.navigate(['pages/password-change']);
      }, /*#__PURE__*/function () {
        var _ref = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          //await laoder.dismiss();
          const toast = yield _this.api.createToast('Invalid VendorID or Password', false, 'top');
          yield toast.present();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }); // this.router.navigate(['/password-change']);
  }

  moveToPsw() {
    this.router.navigate(['pages/forget-psw']);
  }

  moveToId() {
    this.router.navigate(['pages/forget-vendor-id']);
  }

  login() {
    this.router.navigate(['pages/login']);
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthenticationService
}, {
  type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreService
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_6__.InituserService
}, {
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 98433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = " <ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n </ion-header>\n\n <ion-content [fullscreen]=\"true\">\n   <ion-grid>\n    <ion-row class=\"row1\">\n      <ion-col size=\"4\" class=\"content1\">\n        <ion-label class=\"menu\" (click)=\"login()\">Login</ion-label>\n        <br>\n        <br>\n        <ion-label class=\"menu\" (click)=\"moveToPsw()\">Forget Password</ion-label>\n        <br>\n        <br>\n        <ion-label class=\"menu\" (click)=\"moveToId()\">Forget Content ID</ion-label>\n        <br>\n        <br>\n        <br>\n        <ion-label class=\"menu\">Contact Us</ion-label>\n        <br>\n        <br>\n        <ion-label class=\"menu\">Requester? Click here to login in...</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n        <h4 style=\"text-align: center;\">Welcome to the SES Vendor Management website!</h4>\n        <br>\n        <p>\n          We believe that security is of the utmost importance to our Vendors, and we have what we believe are the most secure systems on the market. \n        </p>      \n        <p>\n          We use the latest encryption technology, SSL or Secure Socket Layer, which protects your bank details and all your personal information.\n        </p>\n        <P>\n          Please enter your company login code and password\n        </P>\n<div class=\"login\">\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"2\">\n      <ion-label style=\"color: red;\">\n        Vendor ID:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-input [(ngModel)]=\"vendorUser.email\" class=\"input\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <br>\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"2\">\n      <ion-label style=\"color: red;\">\n        Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-input [(ngModel)]=\"vendorUser.password\" class=\"input\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <br>\n  <ion-row class=\"back\">\n    <ion-col size=\"10\">\n\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button class=\"btnLogin\" (click)=\"moveTo()\">Login</ion-button>\n    </ion-col>\n  </ion-row>\n  \n</div>\n<h4 style=\"text-align: center;font-weight: bold;\">Need help logging on?</h4>\n</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map