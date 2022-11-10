"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forget-psw_forget-psw_module_ts"],{

/***/ 38584:
/*!***************************************************************!*\
  !*** ./src/app/pages/forget-psw/forget-psw-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPswPageRoutingModule": () => (/* binding */ ForgetPswPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _forget_psw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-psw.page */ 53045);




const routes = [
    {
        path: '',
        component: _forget_psw_page__WEBPACK_IMPORTED_MODULE_0__.ForgetPswPage
    }
];
let ForgetPswPageRoutingModule = class ForgetPswPageRoutingModule {
};
ForgetPswPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgetPswPageRoutingModule);



/***/ }),

/***/ 55058:
/*!*******************************************************!*\
  !*** ./src/app/pages/forget-psw/forget-psw.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPswPageModule": () => (/* binding */ ForgetPswPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forget_psw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-psw-routing.module */ 38584);
/* harmony import */ var _forget_psw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-psw.page */ 53045);







let ForgetPswPageModule = class ForgetPswPageModule {
};
ForgetPswPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forget_psw_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPswPageRoutingModule
        ],
        declarations: [_forget_psw_page__WEBPACK_IMPORTED_MODULE_1__.ForgetPswPage]
    })
], ForgetPswPageModule);



/***/ }),

/***/ 53045:
/*!*****************************************************!*\
  !*** ./src/app/pages/forget-psw/forget-psw.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPswPage": () => (/* binding */ ForgetPswPage)
/* harmony export */ });
/* harmony import */ var D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forget_psw_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-psw.page.html?ngResource */ 34416);
/* harmony import */ var _forget_psw_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget-psw.page.scss?ngResource */ 80534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firebase-authentication.service */ 49137);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/util.service */ 19915);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ 23628);











let ForgetPswPage = class ForgetPswPage {
  constructor(router, api, inituser, util, authentication) {
    this.router = router;
    this.api = api;
    this.inituser = inituser;
    this.util = util;
    this.authentication = authentication;
    this.vendorUser = {
      email: '',
      password: ''
    };
    this.vendorEmail = false;
    this.vendorPass = false;
  }

  ngOnInit() {}

  login() {
    this.router.navigate(['pages/login']);
  }

  resetpass() {
    var _this = this;

    // this.authent.forgotPassoword(this.vendorUser.email)
    this.api.getvendorHistory(this.vendorUser.email).subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
        console.log(user);
        user.map(res => {
          // this.temPassword = res.password
          console.log(res.temprory_password);

          _this.authentication.login(_this.vendorUser.email, res.temprory_password).then(res => {
            console.log(res);
            console.log(res.uid); // this.api.loginUserId = res.uid
            // console.log(this.api.loginUserId)
          });
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.vendorEmail = true;
    this.vendorPass = true;
  }

  createPass() {
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.getAuth)();
    const user = auth.currentUser;
    console.log(auth, user);
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.updatePassword)(user, this.vendorUser.password).then(res => {
      console.log(res);
      this.inituser.vendorLogout().then(logout => {
        console.log('id:null', logout);
      });
      this.util.goBack('pages/login');
    }).catch(err => {
      console.log(err);
    });
  }

};

ForgetPswPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__.InituserService
}, {
  type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_6__.UtilService
}, {
  type: src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthenticationService
}];

ForgetPswPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-forget-psw',
  template: _forget_psw_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_forget_psw_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ForgetPswPage);


/***/ }),

/***/ 80534:
/*!******************************************************************!*\
  !*** ./src/app/pages/forget-psw/forget-psw.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcHN3LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 34416:
/*!******************************************************************!*\
  !*** ./src/app/pages/forget-psw/forget-psw.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content [fullscreen]=\"true\">\n    <!-- <ion-grid>\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n          <ion-label class=\"menu\" (click)=\"login()\">Login</ion-label>\n          <br>\n          <br>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n         \n  <div class=\"login row\" style=\"justify-content: center;padding-left: 500px;margin-top: 200px;padding-right: 500px;\">\n    <ion-row class=\"wholeclass\" *ngIf=\"!vendorEmail\">\n      <ion-col class=\"back\" size=\"2\">\n        <ion-label style=\"color: red;\">\n          Vendor ID:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-input [(ngModel)]=\"vendorUser.email\" class=\"input\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"back\" style=\"margin-top: 2px;\" *ngIf=\"!vendorEmail\">\n      <ion-col size=\"4\">\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button class=\"btnLogin\" (click)=\"resetpass()\">Get Password</ion-button>\n        <ion-button class=\"btnLogin\" (click)=\"login()\">Cancel</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"wholeclass\" *ngIf=\"vendorPass\">\n      <ion-col class=\"back\" size=\"2\">\n        <ion-label style=\"color: red;\">\n         New password:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-input [(ngModel)]=\"vendorUser.password\" class=\"input\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"back\" style=\"margin-top: 2px;\" *ngIf=\"vendorPass\">\n      <ion-col size=\"4\">\n  \n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button class=\"btnLogin\" (click)=\"createPass()\">Get Password</ion-button>\n        <ion-button class=\"btnLogin\" (click)=\"login()\">Cancel</ion-button>\n      </ion-col>\n    </ion-row>\n  \n  </div>\n  \n  </ion-content>\n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forget-psw_forget-psw_module_ts.js.map