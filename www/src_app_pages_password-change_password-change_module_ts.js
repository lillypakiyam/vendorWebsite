"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_password-change_password-change_module_ts"],{

/***/ 94985:
/*!*************************************************************************!*\
  !*** ./src/app/pages/password-change/password-change-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordChangePageRoutingModule": () => (/* binding */ PasswordChangePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _password_change_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-change.page */ 54241);




const routes = [
    {
        path: '',
        component: _password_change_page__WEBPACK_IMPORTED_MODULE_0__.PasswordChangePage
    }
];
let PasswordChangePageRoutingModule = class PasswordChangePageRoutingModule {
};
PasswordChangePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasswordChangePageRoutingModule);



/***/ }),

/***/ 75708:
/*!*****************************************************************!*\
  !*** ./src/app/pages/password-change/password-change.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordChangePageModule": () => (/* binding */ PasswordChangePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _password_change_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-change-routing.module */ 94985);
/* harmony import */ var _password_change_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-change.page */ 54241);







let PasswordChangePageModule = class PasswordChangePageModule {
};
PasswordChangePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _password_change_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordChangePageRoutingModule
        ],
        declarations: [_password_change_page__WEBPACK_IMPORTED_MODULE_1__.PasswordChangePage]
    })
], PasswordChangePageModule);



/***/ }),

/***/ 54241:
/*!***************************************************************!*\
  !*** ./src/app/pages/password-change/password-change.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordChangePage": () => (/* binding */ PasswordChangePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _password_change_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-change.page.html?ngResource */ 77547);
/* harmony import */ var _password_change_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-change.page.scss?ngResource */ 80210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firebase-authentication.service */ 49137);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ 23628);










let PasswordChangePage = class PasswordChangePage {
    constructor(router, route, api, inituser, authentica, firestore) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.inituser = inituser;
        this.authentica = authentica;
        this.firestore = firestore;
        this.vendorColor = false;
        this.passwordChange = false;
        this.vendorInfo = {
            current_password: '',
            new_password: '',
            confirm_new_password: ''
        };
        this.code = this.route.snapshot.queryParams['oobCode'];
        console.log(this.code);
        this.loggedInVendor = this.inituser.getVendorData();
        this.loggedInAdminid = this.inituser.getUserData();
        console.log(this.loggedInAdminid.id);
        // this.currentPass()
        this.vendorColor = false;
        // 14V9patao483twxiXL6FBbINRrSq35Kc_4IVvkWKGdYAAAGDorw9mQ
    }
    ngOnInit() {
    }
    moveTo() {
        this.loggedInAdmin = this.inituser.getVendorData();
        if (this.vendorInfo.current_password === this.loggedInVendor.temprory_password) {
            if (this.vendorInfo.new_password === this.vendorInfo.confirm_new_password) {
                console.log(this.loggedInAdmin);
                const psw = {
                    id: this.loggedInAdmin.id,
                    Current_password: this.vendorInfo.current_password,
                    New_password: this.vendorInfo.new_password,
                    Confirm_new_password: this.vendorInfo.confirm_new_password,
                };
                this.firestore.update('vendorAdd', psw.id, psw).then(res => {
                    console.log(res);
                });
                this.router.navigate(['pages/vendor-profile']);
            }
        }
        else {
            console.log(this.vendorInfo.current_password !== this.loggedInVendor.temprory_password);
            console.log(this.vendorInfo.current_password);
            this.vendorColor = false;
        }
    }
    currentPass() {
        if (this.vendorInfo.current_password !== this.loggedInVendor.temprory_password && this.vendorInfo.current_password.length !== 0) {
            return { 'border-color': 'red' };
        }
        if (this.vendorInfo.current_password.length === 0) {
            return { 'border-color': 'lightgray' };
        }
    }
    NewPassword() {
        if (this.vendorInfo.new_password !== this.vendorInfo.confirm_new_password && this.vendorInfo.confirm_new_password.length !== 0) {
            return { 'border-color': 'red' };
        }
        if (this.vendorInfo.confirm_new_password.length === 0) {
            return { 'border-color': 'lightgray' };
        }
    }
    login() {
        this.router.navigate(['/login']);
    }
    moveToPsw() {
        this.router.navigate(['pages/forget-psw']);
    }
    moveToId() {
        this.router.navigate(['/forget-vendor-id']);
    }
    resetpassword() {
        if (this.vendorInfo.current_password === this.loggedInVendor.temprory_password) {
            if (this.vendorInfo.new_password === this.vendorInfo.confirm_new_password) {
                console.log(this.vendorInfo.new_password, this.vendorInfo.confirm_new_password);
                //    this.authentica.passEmail(this.code, this.vendorInfo.confirm_new_password).then(user =>{
                //    console.log(user)
                //    this.router.navigate(['pages/vendor-profile'])
                //   }).catch(error=>{
                //    console.log(error)
                //  })
                const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();
                const user = auth.currentUser;
                console.log(auth, user);
                (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.updatePassword)(user, this.vendorInfo.confirm_new_password).then(res => {
                    console.log(res);
                    this.moveTo();
                    this.router.navigate(['pages/vendor-profile']);
                });
            }
            else {
                this.NewPassword();
            }
        }
        else {
            console.log(this.vendorInfo.current_password !== this.loggedInVendor.temprory_password);
            console.log(this.vendorInfo.current_password);
            this.vendorColor = true;
            this.currentPass();
        }
    }
    Logout() {
        this.inituser.vendorLogout().then(logout => {
            console.log('id:null', logout);
            this.router.navigate(['pages/logout']);
        });
        // this.router.navigate(['/logout'])
    }
};
PasswordChangePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__.InituserService },
    { type: src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseAuthenticationService },
    { type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService }
];
PasswordChangePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-password-change',
        template: _password_change_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_password_change_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasswordChangePage);



/***/ }),

/***/ 80210:
/*!****************************************************************************!*\
  !*** ./src/app/pages/password-change/password-change.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC1jaGFuZ2UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 77547:
/*!****************************************************************************!*\
  !*** ./src/app/pages/password-change/password-change.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row class=\"row1\">\n      <ion-col size=\"4\" class=\"content1\">\n      \n        <ion-label class=\"menu\" (click)=\"login()\">Login</ion-label>\n        <br>\n        <br>\n        <ion-label class=\"menu\" (click)=\"moveToPsw()\">Forget Password</ion-label>\n        <br>\n        <br>\n        <ion-label class=\"menu\" (click)=\"moveToId()\">Forget Content ID</ion-label>\n    <br>\n    <br>\n    <!-- <ion-label class=\"menu\" (click)=\"Logout()\">Logout</ion-label>\n    <br> -->\n    <ion-label class=\"menu\">Contact Us</ion-label>\n      </ion-col>\n      <ion-col size=\"8\" class=\"content2\">\n        <ion-row>\n          <ion-col>\n             \n            <ion-label style=\"margin-left: -100px;\" color=\"primary\">Password change</ion-label>\n            <div class=\"horizonal\"></div>\n            <div class=\"vertical\"></div>\n            <div class=\"backnum\">\n            <div class=\"numbor\">1</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">2</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">3</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">4</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">5</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">6</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">7</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">8</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">9</div>\n          </div>\n          </ion-col>\n        </ion-row>\n        <ion-progress-bar value=\"0.1\" class=\"bar1\"></ion-progress-bar>\n        <h4 style=\"text-align: center;font-weight: bold;color: red;\">Please ensure that fields labelled in RED are filled in.</h4>\n<div class=\"login\">\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"3\" style=\"justify-content: right;\">\n      <ion-label style=\"color: red;\">\n      Current Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input [ngStyle]=\"currentPass()\" [(ngModel)]=\"vendorInfo.current_password\" class=\"input\"></ion-input>\n      <ion-label *ngIf=\"vendorColor\" style=\"color: red;\">\n        please check your current password!</ion-label>\n       \n    </ion-col>\n  \n  </ion-row>\n  <br>\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\n          New Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input [(ngModel)]=\"vendorInfo.new_password\" class=\"input\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <br>\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\n        Confirm New Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input [ngStyle]=\"NewPassword()\" [(ngModel)]=\"vendorInfo.confirm_new_password\" class=\"input\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <br>\n  <ion-row class=\"back\">\n    <ion-col size=\"10\">\n\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button class=\"btnLogin\" (click)=\"resetpassword()\">Next\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n        <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</div>\n\n</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\n        Confirm New Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input [(ngModel)]=\"emailId\" class=\"input\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-button class=\"btnLogin\" (click)=\"resetpassword()\">Next\n    <ion-icon name=\"chevron-forward\"></ion-icon>\n    <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n  </ion-button> -->\n</ion-content>\n\n<!--<ion-slides pager=\"true\" [options]=\"slideOpts\">  \n  \n  <ion-slide>  \n    <img src=\"assets/jtp_logo.png\"/>  \n    <h2>Welcome to the <b>JavaTpoint</b></h2>  \n    <p>JavaTpoint offers Corporate Training, Summer Training, Online Training and Winter Training on Java, Android, Python, Oracle, PHP, and many more technologies.</p>  \n  </ion-slide>  \n\n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide> \n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide>   \n  </ion-slides>-->\n\n<ion-footer>\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_password-change_password-change_module_ts.js.map